import {
    isNaN,
    isSyntheticEvent
} from './is.js';
import {
    memoBuilder
} from './memo.js';
import {
    convertToPlainObject
} from './object.js';
import {
    getFunctionName
} from './stacktrace.js';

/**
 * Recursively normalizes the given object.
 *
 * - Creates a copy to prevent original input mutation
 * - Skips non-enumerable properties
 * - When stringifying, calls `toJSON` if implemented
 * - Removes circular references
 * - Translates non-serializable values (`undefined`/`NaN`/functions) to serializable format
 * - Translates known global objects/classes to a string representations
 * - Takes care of `Error` object serialization
 * - Optionally limits depth of final output
 * - Optionally limits number of properties/elements included in any single object/array
 *
 * @param input The object to be normalized.
 * @param depth The max depth to which to normalize the object. (Anything deeper stringified whole.)
 * @param maxProperties The max number of elements or properties to be included in any single array or
 * object in the normallized output.
 * @returns A normalized version of the object, or `"**non-serializable**"` if any errors are thrown during normalization.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalize(input, depth = +Infinity, maxProperties = +Infinity) {
    try {
        // since we're at the outermost level, we don't provide a key
        return visit('', input, depth, maxProperties);
    } catch (err) {
        return {
            ERROR: `**non-serializable** (${err})`
        };
    }
}

/** JSDoc */
function normalizeToSize(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    object,
    // Default Node.js REPL depth
    depth = 3,
    // 100kB, as 200kB is max payload size, so half sounds reasonable
    maxSize = 100 * 1024,
) {
    const normalized = normalize(object, depth);

    if (jsonSize(normalized) > maxSize) {
        return normalizeToSize(object, depth - 1, maxSize);
    }

    return normalized;
}

/**
 * Visits a node to perform normalization on it
 *
 * @param key The key corresponding to the given node
 * @param value The node to be visited
 * @param depth Optional number indicating the maximum recursion depth
 * @param maxProperties Optional maximum number of properties/elements included in any single object/array
 * @param memo Optional Memo class handling decycling
 */
function visit(
    key,
    value,
    depth = +Infinity,
    maxProperties = +Infinity,
    memo = memoBuilder(),
) {
    const [memoize, unmemoize] = memo;

    // Get the simple cases out of the way first
    if (value === null || (['number', 'boolean', 'string'].includes(typeof value) && !isNaN(value))) {
        return value;
    }

    const stringified = stringifyValue(key, value);

    // Anything we could potentially dig into more (objects or arrays) will have come back as `"[object XXXX]"`.
    // Everything else will have already been serialized, so if we don't see that pattern, we're done.
    if (!stringified.startsWith('[object ')) {
        return stringified;
    }

    // From here on, we can assert that `value` is either an object or an array.

    // Do not normalize objects that we know have already been normalized. As a general rule, the
    // "__sentry_skip_normalization__" property should only be used sparingly and only should only be set on objects that
    // have already been normalized.
    if ((value)['__sentry_skip_normalization__']) {
        return value;
    }

    // We're also done if we've reached the max depth
    if (depth === 0) {
        // At this point we know `serialized` is a string of the form `"[object XXXX]"`. Clean it up so it's just `"[XXXX]"`.
        return stringified.replace('object ', '');
    }

    // If we've already visited this branch, bail out, as it's circular reference. If not, note that we're seeing it now.
    if (memoize(value)) {
        return '[Circular ~]';
    }

    // If the value has a `toJSON` method, we call it to extract more information
    const valueWithToJSON = value;
    if (valueWithToJSON && typeof valueWithToJSON.toJSON === 'function') {
        try {
            const jsonValue = valueWithToJSON.toJSON();
            // We need to normalize the return value of `.toJSON()` in case it has circular references
            return visit('', jsonValue, depth - 1, maxProperties, memo);
        } catch (err) {
            // pass (The built-in `toJSON` failed, but we can still try to do it ourselves)
        }
    }

    // At this point we know we either have an object or an array, we haven't seen it before, and we're going to recurse
    // because we haven't yet reached the max depth. Create an accumulator to hold the results of visiting each
    // property/entry, and keep track of the number of items we add to it.
    const normalized = (Array.isArray(value) ? [] : {});
    let numAdded = 0;

    // Before we begin, convert`Error` and`Event` instances into plain objects, since some of each of their relevant
    // properties are non-enumerable and otherwise would get missed.
    const visitable = convertToPlainObject(value);

    for (const visitKey in visitable) {
        // Avoid iterating over fields in the prototype if they've somehow been exposed to enumeration.
        if (!Object.prototype.hasOwnProperty.call(visitable, visitKey)) {
            continue;
        }

        if (numAdded >= maxProperties) {
            normalized[visitKey] = '[MaxProperties ~]';
            break;
        }

        // Recursively visit all the child nodes
        const visitValue = visitable[visitKey];
        normalized[visitKey] = visit(visitKey, visitValue, depth - 1, maxProperties, memo);

        numAdded += 1;
    }

    // Once we've visited all the branches, remove the parent from memo storage
    unmemoize(value);

    // Return accumulated values
    return normalized;
}

/**
 * Stringify the given value. Handles various known special values and types.
 *
 * Not meant to be used on simple primitives which already have a string representation, as it will, for example, turn
 * the number 1231 into "[Object Number]", nor on `null`, as it will throw.
 *
 * @param value The value to stringify
 * @returns A stringified representation of the given value
 */
function stringifyValue(
    key,
    // this type is a tiny bit of a cheat, since this function does handle NaN (which is technically a number), but for
    // our internal use, it'll do
    value,
) {
    try {
        if (key === 'domain' && value && typeof value === 'object' && (value)._events) {
            return '[Domain]';
        }

        if (key === 'domainEmitter') {
            return '[DomainEmitter]';
        }

        // It's safe to use `global`, `window`, and `document` here in this manner, as we are asserting using `typeof` first
        // which won't throw if they are not present.

        if (typeof global !== 'undefined' && value === global) {
            return '[Global]';
        }

        // eslint-disable-next-line no-restricted-globals
        if (typeof window !== 'undefined' && value === window) {
            return '[Window]';
        }

        // eslint-disable-next-line no-restricted-globals
        if (typeof document !== 'undefined' && value === document) {
            return '[Document]';
        }

        // React's SyntheticEvent thingy
        if (isSyntheticEvent(value)) {
            return '[SyntheticEvent]';
        }

        if (typeof value === 'number' && value !== value) {
            return '[NaN]';
        }

        // this catches `undefined` (but not `null`, which is a primitive and can be serialized on its own)
        if (value === void 0) {
            return '[undefined]';
        }

        if (typeof value === 'function') {
            return `[Function: ${getFunctionName(value)}]`;
        }

        if (typeof value === 'symbol') {
            return `[${String(value)}]`;
        }

        // stringified BigInts are indistinguishable from regular numbers, so we need to label them to avoid confusion
        if (typeof value === 'bigint') {
            return `[BigInt: ${String(value)}]`;
        }

        // Now that we've knocked out all the special cases and the primitives, all we have left are objects. Simply casting
        // them to strings means that instances of classes which haven't defined their `toStringTag` will just come out as
        // `"[object Object]"`. If we instead look at the constructor's name (which is the same as the name of the class),
        // we can make sure that only plain objects come out that way.
        return `[object ${(Object.getPrototypeOf(value) ).constructor.name}]`;
    } catch (err) {
        return `**non-serializable** (${err})`;
    }
}

/** Calculates bytes size of input string */
function utf8Length(value) {
    // eslint-disable-next-line no-bitwise
    return ~-encodeURI(value).split(/%..|./).length;
}

/** Calculates bytes size of input object */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function jsonSize(value) {
    return utf8Length(JSON.stringify(value));
}

export {
    normalize,
    normalizeToSize,
    visit as walk
};
//# sourceMappingURL=normalize.js.map