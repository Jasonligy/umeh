import './exports.js';
import {
    Integrations
} from '@sentry/core';
export {
    FunctionToString,
    Hub,
    InboundFilters,
    SDK_VERSION,
    Scope,
    addBreadcrumb,
    addGlobalEventProcessor,
    captureEvent,
    captureException,
    captureMessage,
    configureScope,
    createTransport,
    getCurrentHub,
    getHubFromCarrier,
    makeMain,
    setContext,
    setExtra,
    setExtras,
    setTag,
    setTags,
    setUser,
    startTransaction,
    withScope
}
from '@sentry/core';
import {
    WINDOW
} from './helpers.js';
export {
    WINDOW
}
from './helpers.js';
import * as index from './integrations/index.js';
export {
    BrowserClient
}
from './client.js';
export {
    makeFetchTransport
}
from './transports/fetch.js';
export {
    makeXHRTransport
}
from './transports/xhr.js';
export {
    chromeStackLineParser,
    defaultStackLineParsers,
    defaultStackParser,
    geckoStackLineParser,
    opera10StackLineParser,
    opera11StackLineParser,
    winjsStackLineParser
}
from './stack-parsers.js';
export {
    close,
    defaultIntegrations,
    flush,
    forceLoad,
    init,
    lastEventId,
    onLoad,
    showReportDialog,
    wrap
}
from './sdk.js';
export {
    GlobalHandlers
}
from './integrations/globalhandlers.js';
export {
    TryCatch
}
from './integrations/trycatch.js';
export {
    Breadcrumbs
}
from './integrations/breadcrumbs.js';
export {
    LinkedErrors
}
from './integrations/linkederrors.js';
export {
    HttpContext
}
from './integrations/httpcontext.js';
export {
    Dedupe
}
from './integrations/dedupe.js';

let windowIntegrations = {};

// This block is needed to add compatibility with the integrations packages when used with a CDN
if (WINDOW.Sentry && WINDOW.Sentry.Integrations) {
    windowIntegrations = WINDOW.Sentry.Integrations;
}

const INTEGRATIONS = {
    ...windowIntegrations,
    ...Integrations,
    ...index,
};

export {
    INTEGRATIONS as Integrations
};
//# sourceMappingURL=index.js.map