(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var p, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ba(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ca = ba(this),
        da = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        fa = {},
        ha = {};

    function ia(a, b) {
        var c = ha[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function ja(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in fa ? f = fa : f = ca;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = da && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? aa(fa, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ha[d] && (a = 1E9 * Math.random() >>> 0, ha[d] = da ? ca.Symbol(d) : "$jscp$" + a + "$" + d), aa(f, ha[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    var ka = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        la;
    if (da && "function" == typeof Object.setPrototypeOf) la = Object.setPrototypeOf;
    else {
        var ma;
        a: {
            var na = {
                    a: !0
                },
                pa = {};
            try {
                pa.__proto__ = na;
                ma = pa.a;
                break a
            } catch (a) {}
            ma = !1
        }
        la = ma ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var qa = la;

    function ra(a, b) {
        a.prototype = ka(b.prototype);
        a.prototype.constructor = a;
        if (qa) qa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.pg = b.prototype
    }
    ja("AggregateError", function(a) {
        function b(c, d) {
            d = Error(d);
            "stack" in d && (this.stack = d.stack);
            this.errors = c;
            this.message = d.message
        }
        if (a) return a;
        ra(b, Error);
        b.prototype.name = "AggregateError";
        return b
    }, "es_2021");
    ja("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : Array.from(b);
            return Promise.all(b.map(function(c) {
                return Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new fa.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    var t = this || self;

    function sa(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function ta(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function ua(a) {
        return Object.prototype.hasOwnProperty.call(a, wa) && a[wa] || (a[wa] = ++xa)
    }
    var wa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        xa = 0;

    function za(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Aa(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Ba(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ba = za : Ba = Aa;
        return Ba.apply(null, arguments)
    }

    function Ca(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Da() {
        return Date.now()
    }

    function Ea(a, b) {
        a = a.split(".");
        var c = t;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Fa(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.pg = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.xk = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function Ja(a) {
        return a
    };
    var La = {
        yj: 0,
        xj: 1,
        wj: 2
    };

    function Ma(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ma);
        else {
            const c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    Fa(Ma, Error);
    Ma.prototype.name = "CustomError";
    var Na;

    function Oa(a, b) {
        a = a.split("%s");
        let c = "";
        const d = a.length - 1;
        for (let e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Ma.call(this, c + a[d])
    }
    Fa(Oa, Ma);
    Oa.prototype.name = "AssertionError";

    function Qa(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Ra(a) {
        if (!Sa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ta, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ua, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Wa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Xa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ya, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Za, "&#0;"));
        return a
    }
    var Ta = /&/g,
        Ua = /</g,
        Wa = />/g,
        Xa = /"/g,
        Ya = /'/g,
        Za = /\x00/g,
        Sa = /[\x00&<>"']/;

    function $a(a, b) {
        return -1 != a.indexOf(b)
    }

    function ab(a) {
        var b = bb();
        let c = 0;
        b = Qa(String(b)).split(".");
        a = Qa(String(a)).split(".");
        const d = Math.max(b.length, a.length);
        for (let g = 0; 0 == c && g < d; g++) {
            var e = b[g] || "",
                f = a[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (0 == e[0].length && 0 == f[0].length) break;
                c = cb(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || cb(0 == e[2].length, 0 == f[2].length) || cb(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (0 == c)
        }
        return c
    }

    function cb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function db() {
        var a = t.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function v(a) {
        return $a(db(), a)
    };

    function eb() {
        return v("Opera")
    }

    function fb() {
        return v("Trident") || v("MSIE")
    }

    function gb() {
        return v("Firefox") || v("FxiOS")
    }

    function hb() {
        return v("Safari") && !(ib() || v("Coast") || eb() || v("Edge") || v("Edg/") || v("OPR") || gb() || v("Silk") || v("Android"))
    }

    function ib() {
        return (v("Chrome") || v("CriOS")) && !v("Edge") || v("Silk")
    }

    function jb() {
        return v("Android") && !(ib() || gb() || eb() || v("Silk"))
    }

    function kb(a) {
        const b = {};
        a.forEach(c => {
            b[c[0]] = c[1]
        });
        return c => b[c.find(d => d in b)] || ""
    }

    function bb() {
        var a = db();
        if (fb()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        b = [];
        let d;
        for (; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = kb(b);
        return eb() ? a(["Version", "Opera"]) :
            v("Edge") ? a(["Edge"]) : v("Edg/") ? a(["Edg"]) : v("Silk") ? a(["Silk"]) : ib() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function lb(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function mb(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function nb(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = "string" === typeof a ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function ob(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function pb(a, b, c) {
        let d = c;
        mb(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function qb(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function rb(a, b) {
        return 0 <= lb(a, b)
    }

    function sb(a, b) {
        b = lb(a, b);
        let c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function tb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function ub(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function vb(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function wb(a, b, c) {
        c = c || xb;
        let d = 0,
            e = a.length,
            f;
        for (; d < e;) {
            const g = d + (e - d >>> 1);
            let h;
            h = c(b, a[g]);
            0 < h ? d = g + 1 : (e = g, f = !h)
        }
        return f ? d : -d - 1
    }

    function yb(a, b) {
        if (!sa(a) || !sa(b) || a.length != b.length) return !1;
        const c = a.length,
            d = zb;
        for (let e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    }

    function xb(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function zb(a, b) {
        return a === b
    }

    function Ab(a) {
        const b = [];
        for (let c = 0; c < arguments.length; c++) {
            const d = arguments[c];
            if (Array.isArray(d))
                for (let e = 0; e < d.length; e += 8192) {
                    const f = Ab.apply(null, vb(d, e, e + 8192));
                    for (let g = 0; g < f.length; g++) b.push(f[g])
                } else b.push(d)
        }
        return b
    }

    function Bb(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; 0 < c; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };

    function Cb(a) {
        Cb[" "](a);
        return a
    }
    Cb[" "] = function() {};

    function Db(a, b) {
        try {
            return Cb(a[b]), !0
        } catch (c) {}
        return !1
    };
    var Eb = eb(),
        Fb = fb(),
        Hb = v("Edge"),
        Ib = Hb || Fb,
        Jb = v("Gecko") && !($a(db().toLowerCase(), "webkit") && !v("Edge")) && !(v("Trident") || v("MSIE")) && !v("Edge"),
        Kb = $a(db().toLowerCase(), "webkit") && !v("Edge");

    function Lb() {
        var a = t.document;
        return a ? a.documentMode : void 0
    }
    var Mb;
    a: {
        var Nb = "",
            Ob = function() {
                var a = db();
                if (Jb) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Hb) return /Edge\/([\d\.]+)/.exec(a);
                if (Fb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Kb) return /WebKit\/(\S+)/.exec(a);
                if (Eb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Ob && (Nb = Ob ? Ob[1] : "");
        if (Fb) {
            var Pb = Lb();
            if (null != Pb && Pb > parseFloat(Nb)) {
                Mb = String(Pb);
                break a
            }
        }
        Mb = Nb
    }
    var Qb = Mb,
        Rb;
    if (t.document && Fb) {
        var Sb = Lb();
        Rb = Sb ? Sb : parseInt(Qb, 10) || void 0
    } else Rb = void 0;
    var Tb = Rb;
    jb();
    ib();
    hb();
    var Ub = {},
        Vb = null;

    function Wb(a, b) {
        void 0 === b && (b = 0);
        Xb();
        b = Ub[b];
        const c = Array(Math.floor(a.length / 3)),
            d = b[64] || "";
        let e = 0,
            f = 0;
        for (; e < a.length - 2; e += 3) {
            var g = a[e],
                h = a[e + 1],
                k = a[e + 2],
                l = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[f++] = l + g + h + k
        }
        l = 0;
        k = d;
        switch (a.length - e) {
            case 2:
                l = a[e + 1], k = b[(l & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
        }
        return c.join("")
    }

    function Yb(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return Wb(b, 3)
    }

    function Zb(a) {
        var b = [];
        $b(a, function(c) {
            b.push(c)
        });
        return b
    }

    function ac(a) {
        var b = a.length,
            c = 3 * b / 4;
        c % 3 ? c = Math.floor(c) : $a("=.", a[b - 1]) && (c = $a("=.", a[b - 2]) ? c - 2 : c - 1);
        var d = new Uint8Array(c),
            e = 0;
        $b(a, function(f) {
            d[e++] = f
        });
        return e !== c ? d.subarray(0, e) : d
    }

    function $b(a, b) {
        function c(k) {
            for (; d < a.length;) {
                var l = a.charAt(d++),
                    m = Vb[l];
                if (null != m) return m;
                if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        Xb();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                g = c(64),
                h = c(64);
            if (64 === h && -1 === e) break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
        }
    }

    function Xb() {
        if (!Vb) {
            Vb = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                Ub[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === Vb[f] && (Vb[f] = e)
                }
            }
        }
    };
    var bc = "undefined" !== typeof Uint8Array;
    const cc = !Fb && "function" === typeof t.btoa;

    function dc(a) {
        if (!cc) return Wb(a);
        let b = "";
        for (; 10240 < a.length;) b += String.fromCharCode.apply(null, a.subarray(0, 10240)), a = a.subarray(10240);
        b += String.fromCharCode.apply(null, a);
        return btoa(b)
    }
    const ec = RegExp("[-_.]", "g");

    function fc(a) {
        switch (a) {
            case "-":
                return "+";
            case "_":
                return "/";
            case ".":
                return "=";
            default:
                return ""
        }
    }

    function gc(a) {
        return bc && null != a && a instanceof Uint8Array
    }
    let hc;
    var ic = {};
    let jc;

    function lc(a) {
        if (a !== ic) throw Error("illegal external caller");
    }

    function mc() {
        return jc || (jc = new nc(null, ic))
    }
    var nc = class {
        constructor(a, b) {
            lc(b);
            this.M = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        }
        isEmpty() {
            return null == this.M
        }
    };
    const oc = Symbol();

    function pc(a, b) {
        if (oc) return a[oc] |= b;
        if (void 0 !== a.za) return a.za |= b;
        Object.defineProperties(a, {
            za: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    }

    function qc(a, b) {
        const c = rc(a);
        (c & b) !== b && (Object.isFrozen(a) && (a = Array.prototype.slice.call(a)), sc(a, c | b));
        return a
    }

    function tc(a, b) {
        oc ? a[oc] && (a[oc] &= ~b) : void 0 !== a.za && (a.za &= ~b)
    }

    function rc(a) {
        let b;
        oc ? b = a[oc] : b = a.za;
        return null == b ? 0 : b
    }

    function sc(a, b) {
        oc ? a[oc] = b : void 0 !== a.za ? a.za = b : Object.defineProperties(a, {
            za: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function uc(a) {
        pc(a, 1);
        return a
    }

    function vc(a) {
        return !!(rc(a) & 2)
    }

    function wc(a) {
        pc(a, 16);
        return a
    }

    function xc(a, b) {
        sc(b, (a | 0) & -51)
    }

    function yc(a, b) {
        sc(b, (a | 18) & -41)
    };
    var zc = {};

    function Ac(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let Bc;

    function Cc(a, b) {
        if (null != a)
            if ("string" === typeof a) a = a ? new nc(a, ic) : mc();
            else if (a.constructor !== nc)
            if (gc(a)) a = a.length ? new nc(new Uint8Array(a), ic) : mc();
            else {
                if (!b) throw Error();
                a = void 0
            }
        return a
    }
    var Dc;
    const Ec = [];
    sc(Ec, 23);
    Dc = Object.freeze(Ec);

    function Fc(a) {
        if (vc(a.P)) throw Error("Cannot mutate an immutable Message");
    }

    function Gc(a) {
        var b = a.length;
        (b = b ? a[b - 1] : void 0) && Ac(b) ? b.g = 1 : a.push({
            g: 1
        })
    };

    function Hc(a) {
        if (null != a && "number" !== typeof a) throw Error(`Value of float/double field must be a number|null|undefined, found ${typeof a}: ${a}`);
        return a
    }

    function Ic(a) {
        return a
    }

    function Jc(a) {
        return a
    }

    function Kc(a) {
        return a
    }

    function Lc(a) {
        return a
    }

    function Mc(a) {
        return a
    };
    let Nc;

    function Oc(a, b) {
        Nc = b;
        a = new a(b);
        Nc = void 0;
        return a
    };

    function Pc(a) {
        const b = a.m + a.Ga;
        return a.sa || (a.sa = a.P[b] = {})
    }

    function w(a, b, c) {
        return -1 === b ? null : b >= a.m ? a.sa ? a.sa[b] : void 0 : c && a.sa && (c = a.sa[b], null != c) ? c : a.P[b + a.Ga]
    }

    function x(a, b, c, d) {
        Fc(a);
        return Qc(a, b, c, d)
    }

    function Qc(a, b, c, d) {
        a.C && (a.C = void 0);
        if (b >= a.m || d) return Pc(a)[b] = c, a;
        a.P[b + a.Ga] = c;
        (c = a.sa) && b in c && delete c[b];
        return a
    }

    function Rc(a, b, c) {
        return void 0 !== Sc(a, b, c, !1)
    }

    function Tc(a, b, c, d, e) {
        let f = w(a, b, d);
        Array.isArray(f) || (f = Dc);
        const g = rc(f);
        g & 1 || uc(f);
        if (e) g & 2 || pc(f, 2), c & 1 || Object.freeze(f);
        else {
            e = !(c & 2);
            const h = g & 2;
            c & 1 || !h ? e && g & 16 && !h && tc(f, 16) : (f = uc(Array.prototype.slice.call(f)), Qc(a, b, f, d))
        }
        return f
    }

    function Uc(a, b) {
        return Tc(a, b, 0, !1, vc(a.P))
    }

    function Vc(a, b) {
        const c = w(a, b);
        var d = null == c ? c : "number" === typeof c || "NaN" === c || "Infinity" === c || "-Infinity" === c ? Number(c) : void 0;
        null != d && d !== c && Qc(a, b, d);
        return d
    }

    function y(a, b) {
        a = w(a, b);
        return null == a ? a : !!a
    }

    function Wc(a, b, c, d) {
        const e = vc(a.P);
        let f = Tc(a, b, 1, d, e);
        const g = rc(f);
        if (!(g & 4)) {
            Object.isFrozen(f) && (f = uc(f.slice()), Qc(a, b, f, d));
            let h = 0,
                k = 0;
            for (; h < f.length; h++) {
                const l = c(f[h]);
                null != l && (f[k++] = l)
            }
            k < h && (f.length = k);
            pc(f, 5);
            e && (pc(f, 2), Object.freeze(f))
        }!e && (g & 2 || Object.isFrozen(f)) && (f = Array.prototype.slice.call(f), pc(f, 5), Xc(a, b, f, d));
        return f
    }

    function Yc(a, b, c, d) {
        if (null == c) return x(a, b, Dc);
        const e = rc(c);
        if (!(e & 4)) {
            if (e & 2 || Object.isFrozen(c)) c = Array.prototype.slice.call(c);
            for (let f = 0; f < c.length; f++) c[f] = d(c[f]);
            sc(c, e | 5)
        }
        return x(a, b, c)
    }

    function Xc(a, b, c, d) {
        c = null == c ? Dc : qc(c, 1);
        return x(a, b, c, d)
    }

    function Zc(a, b, c, d) {
        Fc(a);
        c !== d ? Qc(a, b, c) : Qc(a, b, void 0, !1);
        return a
    }

    function $c(a, b, c, d) {
        Fc(a);
        (c = ad(a, c)) && c !== b && null != d && Qc(a, c, void 0, !1);
        return Qc(a, b, d)
    }

    function ad(a, b) {
        let c = 0;
        for (let d = 0; d < b.length; d++) {
            const e = b[d];
            null != w(a, e) && (0 !== c && Qc(a, c, void 0, !1), c = e)
        }
        return c
    }

    function Sc(a, b, c, d) {
        const e = w(a, c, d); {
            let g = !1;
            var f = null == e || "object" !== typeof e || (g = Array.isArray(e)) || e.Uc !== zc ? g ? new b(e) : void 0 : e
        }
        f !== e && null != f && (Qc(a, c, f, d), pc(f.P, rc(a.P) & 18));
        return f
    }

    function C(a, b, c) {
        b = Sc(a, b, c, !1);
        if (null == b) return b;
        if (!vc(a.P)) {
            const d = bd(b);
            d !== b && (b = d, Qc(a, c, b, !1))
        }
        return b
    }

    function cd(a, b, c, d, e) {
        a.l || (a.l = {});
        var f = a.l[c],
            g = Tc(a, c, 3, void 0, e);
        if (!f) {
            var h = g;
            f = [];
            var k = !!(rc(a.P) & 16);
            g = vc(h);
            const q = h;
            !e && g && (h = Array.prototype.slice.call(h));
            var l = g;
            let r = 0;
            for (; r < h.length; r++) {
                var m = h[r];
                m = Array.isArray(m) ? new b(m) : void 0;
                if (void 0 === m) continue;
                var n = m.P;
                const u = rc(n);
                let A = u;
                g && (A |= 2);
                k && (A |= 16);
                A != u && sc(n, A);
                n = A;
                l = l || !!(2 & n);
                f.push(m)
            }
            a.l[c] = f;
            k = rc(h);
            b = k | 33;
            b = l ? b & -9 : b | 8;
            k != b && (l = h, Object.isFrozen(l) && (l = Array.prototype.slice.call(l)), sc(l, b), h = l);
            q !== h && Qc(a, c, h);
            (e || d && g) && pc(f, 2);
            d && Object.freeze(f);
            return f
        }
        e || (e = Object.isFrozen(f), d && !e ? Object.freeze(f) : !d && e && (f = Array.prototype.slice.call(f), a.l[c] = f));
        return f
    }

    function D(a, b, c) {
        var d = vc(a.P);
        b = cd(a, b, c, d, d);
        a = Tc(a, c, 3, void 0, d);
        if (!(d || rc(a) & 8)) {
            for (d = 0; d < b.length; d++) {
                c = b[d];
                const e = bd(c);
                c !== e && (b[d] = e, a[d] = e.P)
            }
            pc(a, 8)
        }
        return b
    }

    function dd(a, b, c) {
        Fc(a);
        null == c && (c = void 0);
        return Qc(a, b, c)
    }

    function ed(a, b, c, d) {
        Fc(a);
        null == d && (d = void 0);
        return $c(a, b, c, d)
    }

    function fd(a, b, c, d) {
        Fc(a);
        let e = null == c ? Dc : uc([]);
        if (null != c) {
            let f = !!c.length;
            for (let g = 0; g < c.length; g++) {
                const h = c[g];
                f = f && !vc(h.P);
                e[g] = h.P
            }
            e = qc(e, (f ? 8 : 0) | 1);
            a.l || (a.l = {});
            a.l[b] = c
        } else a.l && (a.l[b] = void 0);
        return Qc(a, b, e, d)
    }

    function gd(a, b, c, d) {
        Fc(a);
        const e = cd(a, c, b, !1, !1);
        c = null != d ? d : new c;
        b = Tc(a, b, 2, void 0, !1);
        e.push(c);
        b.push(c.P);
        vc(c.P) && tc(b, 8);
        return a
    }

    function hd(a, b) {
        return id(w(a, b), 0)
    }

    function jd(a, b) {
        return id(w(a, b), 0)
    }

    function kd(a, b) {
        return w(a, b)
    }

    function ld(a, b, c) {
        return Zc(a, b, c, 0)
    }

    function md(a, b, c) {
        return Zc(a, b, c, "")
    }

    function id(a, b) {
        return null == a ? b : a
    }

    function G(a, b) {
        return id(w(a, b), "")
    }

    function I(a, b, c = !1) {
        return id(y(a, b), c)
    }

    function nd(a, b) {
        return id(w(a, b), 0)
    }

    function qd(a, b, c, d) {
        c = ad(a, d) === c ? c : -1;
        return C(a, b, c)
    }

    function rd(a, b, c) {
        return Zc(a, b, c, !1)
    }

    function sd(a, b, c) {
        return Zc(a, b, c, 0)
    };

    function td(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (0 !== (rc(a) & 128)) return a = Array.prototype.slice.call(a), Gc(a), a
                    } else {
                        if (gc(a)) return dc(a);
                        if (a instanceof nc) {
                            const b = a.M;
                            return null == b ? "" : "string" === typeof b ? b : a.M = dc(b)
                        }
                    }
        }
        return a
    };

    function ud(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = vd(a, b, c, void 0 !== d);
            else if (Ac(a)) {
                const e = {};
                for (let f in a) Object.prototype.hasOwnProperty.call(a, f) && (e[f] = ud(a[f], b, c, d));
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function vd(a, b, c, d) {
        const e = rc(a);
        d = d ? !!(e & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (let f = 0; f < a.length; f++) a[f] = ud(a[f], b, c, d);
        c(e, a);
        return a
    }

    function wd(a) {
        return a.Uc === zc ? a.toJSON() : td(a)
    }

    function xd(a, b) {
        a & 128 && Gc(b)
    };

    function yd(a, b, c = yc) {
        if (null != a) {
            if (bc && a instanceof Uint8Array) return a.length ? new nc(new Uint8Array(a), ic) : mc();
            if (Array.isArray(a)) {
                const d = rc(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return sc(a, d | 2), a;
                a = vd(a, yd, d & 4 ? yc : c, !0);
                b = rc(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            return a.Uc === zc ? zd(a) : a
        }
    }

    function Ad(a, b, c, d, e, f, g) {
        (a = a.l && a.l[c]) ? (d = rc(a), d & 2 ? d = a : (f = ob(a, zd), yc(d, f), Object.freeze(f), d = f), fd(b, c, d, e)) : x(b, c, yd(d, f, g), e)
    }

    function zd(a) {
        if (vc(a.P)) return a;
        a = Bd(a, !0);
        pc(a.P, 2);
        return a
    }

    function Bd(a, b) {
        const c = a.P;
        var d = wc([]),
            e = a.constructor.messageId;
        e && d.push(e);
        e = a.sa;
        if (e) {
            d.length = c.length;
            d.fill(void 0, d.length, c.length);
            var f = {};
            d[d.length - 1] = f
        }
        0 !== (rc(c) & 128) && Gc(d);
        b = b || vc(a.P) ? yc : xc;
        d = Oc(a.constructor, d);
        a.be && (d.be = a.be.slice());
        f = !!(rc(c) & 16);
        const g = e ? c.length - 1 : c.length;
        for (let h = 0; h < g; h++) Ad(a, d, h - a.Ga, c[h], !1, f, b);
        if (e)
            for (const h in e) Ad(a, d, +h, e[h], !0, f, b);
        return d
    }

    function bd(a) {
        if (!vc(a.P)) return a;
        const b = Bd(a, !1);
        b.C = a;
        return b
    };

    function Cd(a) {
        Bc = !0;
        try {
            return JSON.stringify(a.toJSON(), Dd)
        } finally {
            Bc = !1
        }
    }
    var L = class {
        constructor(a, b, c) {
            null == a && (a = Nc);
            Nc = void 0;
            var d = 0 < (this.constructor.j || 0),
                e = this.constructor.messageId,
                f = !1;
            if (null == a) {
                a = e ? [e] : [];
                var g = 48;
                var h = !0;
                d && (g |= 128);
                sc(a, g)
            } else {
                if (!Array.isArray(a)) throw Error();
                if (e && e !== a[0]) throw Error();
                let k = g = pc(a, 0);
                if (h = 0 !== (16 & k))(f = 0 !== (32 & k)) || (k |= 32);
                if (d) {
                    if (!(k & 128) && 0 < a.length) {
                        const l = a[a.length - 1];
                        if (Ac(l) && "g" in l) {
                            k |= 128;
                            delete l.g;
                            let m = !0;
                            for (let n in l) {
                                m = !1;
                                break
                            }
                            m && a.pop()
                        } else throw Error();
                    }
                } else if (128 & k) throw Error();
                g !== k &&
                    sc(a, k)
            }
            this.Ga = e ? 0 : -1;
            this.l = void 0;
            this.P = a;
            a: {
                g = this.P.length;e = g - 1;
                if (g && (g = this.P[e], Ac(g))) {
                    this.sa = g;
                    this.m = e - this.Ga;
                    break a
                }
                void 0 !== b && -1 < b ? (this.m = Math.max(b, e + 1 - this.Ga), this.sa = void 0) : this.m = Number.MAX_VALUE
            }
            if (!d && this.sa && "g" in this.sa) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
            if (c) {
                b = h && !f && !0;
                d = this.m;
                let k;
                for (h = 0; h < c.length; h++) f = c[h], f < d ? (f += this.Ga, (e = a[f]) ? Ed(e, b) : a[f] = Dc) : (k || (k = Pc(this)), (e = k[f]) ? Ed(e, b) : k[f] = Dc)
            }
        }
        toJSON() {
            const a =
                this.P;
            return Bc ? a : vd(a, wd, xd)
        }
    };

    function Ed(a, b) {
        if (Array.isArray(a)) {
            var c = rc(a),
                d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && sc(a, c | d)
        }
    }
    L.prototype.Uc = zc;

    function Dd(a, b) {
        return td(b)
    };
    const Fd = a => null !== a && void 0 !== a;
    let Gd = void 0;

    function Hd(a, b) {
        const c = Gd;
        Gd = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    };

    function Id(a) {
        return b => {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                b = Oc(a, wc(b))
            }
            return b
        }
    };

    function Jd(a, b) {
        this.j = a === Kd && b || "";
        this.l = Ld
    }
    Jd.prototype.ra = !0;
    Jd.prototype.ka = function() {
        return this.j
    };

    function Md(a) {
        return a instanceof Jd && a.constructor === Jd && a.l === Ld ? a.j : "type_error:Const"
    }

    function Nd(a) {
        return new Jd(Kd, a)
    }
    var Ld = {},
        Kd = {};
    var Od = Nd("https://tpc.googlesyndication.com/sodar/%{basename}.js");

    function Pd() {
        return !1
    }

    function Qd() {
        return !0
    }

    function Rd(a) {
        const b = arguments,
            c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function Sd(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Td(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Ud(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }

    function Vd(a, b) {
        let c = 0;
        return function(d) {
            t.clearTimeout(c);
            const e = arguments;
            c = t.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function Wd(a, b) {
        function c() {
            e = t.setTimeout(d, 63);
            let h = g;
            g = [];
            a.apply(b, h)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        let e = 0,
            f = !1,
            g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    };
    var Xd = {
            passive: !0
        },
        Yd = Td(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                t.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function Zd(a) {
        return a ? a.passive && Yd() ? a : a.capture || !1 : !1
    }

    function M(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Zd(d)), !0) : !1
    }

    function $d(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, Zd(d)), !0) : !1
    };

    function ae(a, b) {
        for (const c in a) b.call(void 0, a[c], c, a)
    }

    function be(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function ce(a) {
        var b = de;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }

    function ee(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function fe(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    const ge = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function he(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < ge.length; f++) c = ge[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var ie = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var je;

    function ke() {
        if (void 0 === je) {
            var a = null,
                b = t.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Ja,
                        createScript: Ja,
                        createScriptURL: Ja
                    })
                } catch (c) {
                    t.console && t.console.error(c.message)
                }
                je = a
            } else je = a
        }
        return je
    };
    const le = {};

    function me(a) {
        return a instanceof ne && a.constructor === ne ? a.j : "type_error:SafeScript"
    }
    class ne {
        constructor(a, b) {
            this.j = b === le ? a : "";
            this.ra = !0
        }
        toString() {
            return this.j.toString()
        }
        ka() {
            return this.j.toString()
        }
    };
    var pe = class {
        constructor(a, b) {
            this.j = b === oe ? a : ""
        }
        toString() {
            return this.j + ""
        }
    };
    pe.prototype.ra = !0;
    pe.prototype.ka = function() {
        return this.j.toString()
    };

    function qe(a, b) {
        a = re.exec(se(a).toString());
        var c = a[3] || "";
        return te(a[1] + ue("?", a[2] || "", b) + ue("#", c))
    }

    function se(a) {
        return a instanceof pe && a.constructor === pe ? a.j : "type_error:TrustedResourceUrl"
    }

    function ve(a, b) {
        var c = Md(a);
        if (!we.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(xe, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof Jd ? Md(d) : encodeURIComponent(String(d))
        });
        return te(a)
    }
    var xe = /%{(\w+)}/g,
        we = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        re = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        oe = {};

    function te(a) {
        const b = ke();
        a = b ? b.createScriptURL(a) : a;
        return new pe(a, oe)
    }

    function ue(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };
    var ze = class {
        constructor(a, b) {
            this.j = b === ye ? a : ""
        }
        toString() {
            return this.j.toString()
        }
    };
    ze.prototype.ra = !0;
    ze.prototype.ka = function() {
        return this.j.toString()
    };

    function Ae(a) {
        return a instanceof ze && a.constructor === ze ? a.j : "type_error:SafeUrl"
    }
    var Be = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        Ce = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function De(a) {
        if (a instanceof ze) return a;
        a = "object" == typeof a && a.ra ? a.ka() : String(a);
        Ce.test(a) ? a = new ze(a, ye) : (a = String(a).replace(/(%0A|%0D)/g, ""), a = a.match(Be) ? new ze(a, ye) : null);
        return a
    }
    var ye = {},
        Ee = new ze("about:invalid#zClosurez", ye);
    const Fe = {};

    function Ge(a) {
        return a instanceof He && a.constructor === He ? a.j : "type_error:SafeStyle"
    }

    function Ie(a) {
        let b = "";
        for (let c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error(`Name allows only [-_a-zA-Z0-9], got: ${c}`);
                let d = a[c];
                null != d && (d = Array.isArray(d) ? d.map(Je).join(" ") : Je(d), b += `${c}:${d};`)
            }
        return b ? new He(b, Fe) : Ke
    }
    class He {
        constructor(a, b) {
            this.j = b === Fe ? a : "";
            this.ra = !0
        }
        ka() {
            return this.j
        }
        toString() {
            return this.j.toString()
        }
    }
    var Ke = new He("", Fe);

    function Je(a) {
        if (a instanceof ze) return 'url("' + Ae(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof Jd) a = Md(a);
        else {
            a = String(a);
            var b = a.replace(Le, "$1").replace(Le, "$1").replace(Me, "url");
            if (Ne.test(b)) {
                if (b = !Oe.test(a)) {
                    let c = b = !0;
                    for (let d = 0; d < a.length; d++) {
                        const e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && Pe(a)
                }
                a = b ? Qe(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new Oa("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function Pe(a) {
        let b = !0;
        const c = /^[-_a-zA-Z0-9]$/;
        for (let d = 0; d < a.length; d++) {
            const e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    const Ne = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
        Me = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
        Le = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
        Oe = /\/\*/;

    function Qe(a) {
        return a.replace(Me, (b, c, d, e) => {
            let f = "";
            d = d.replace(/^(['"])(.*)\1$/, (g, h, k) => {
                f = h;
                return k
            });
            b = (De(d) || Ee).ka();
            return c + f + b + f + e
        })
    };
    const Re = {};

    function Se(a) {
        return a instanceof Te && a.constructor === Te ? a.j : "type_error:SafeStyleSheet"
    }
    class Te {
        constructor(a, b) {
            this.j = b === Re ? a : "";
            this.ra = !0
        }
        toString() {
            return this.j.toString()
        }
        ka() {
            return this.j
        }
    };
    const Ue = {};

    function Ve(a) {
        return a instanceof We && a.constructor === We ? a.j : "type_error:SafeHtml"
    }

    function Xe(a) {
        return a instanceof We ? a : Ye(Ra("object" == typeof a && a.ra ? a.ka() : String(a)))
    }

    function Ye(a) {
        const b = ke();
        a = b ? b.createHTML(a) : a;
        return new We(a, Ue)
    }

    function Ze(a, b, c) {
        var d = String(a);
        if (!$e.test(d)) throw Error("");
        if (d.toUpperCase() in af) throw Error("");
        return bf(String(a), b, c)
    }

    function bf(a, b, c) {
        var d = "";
        if (b)
            for (let g in b)
                if (Object.prototype.hasOwnProperty.call(b, g)) {
                    if (!$e.test(g)) throw Error("");
                    var e = b[g];
                    if (null != e) {
                        var f = g;
                        if (e instanceof Jd) e = Md(e);
                        else if ("style" == f.toLowerCase()) {
                            if (!ta(e)) throw Error("");
                            e instanceof He || (e = Ie(e));
                            e = Ge(e)
                        } else {
                            if (/^on/i.test(f)) throw Error("");
                            if (f.toLowerCase() in cf)
                                if (e instanceof pe) e = se(e).toString();
                                else if (e instanceof ze) e = Ae(e);
                            else if ("string" === typeof e) e = (De(e) || Ee).ka();
                            else throw Error("");
                        }
                        e.ra && (e = e.ka());
                        f = `${f}="` +
                            Ra(String(e)) + '"';
                        d += " " + f
                    }
                }
        b = `<${a}` + d;
        null == c ? c = [] : Array.isArray(c) || (c = [c]);
        !0 === ie[a.toLowerCase()] ? b += ">" : (c = df(c), b += ">" + Ve(c).toString() + "</" + a + ">");
        return Ye(b)
    }

    function ef(a) {
        const b = Xe(ff),
            c = [],
            d = e => {
                Array.isArray(e) ? e.forEach(d) : (e = Xe(e), c.push(Ve(e).toString()))
            };
        a.forEach(d);
        return Ye(c.join(Ve(b).toString()))
    }

    function df(a) {
        return ef(Array.prototype.slice.call(arguments))
    }
    class We {
        constructor(a, b) {
            this.j = b === Ue ? a : "";
            this.ra = !0
        }
        ka() {
            return this.j.toString()
        }
        toString() {
            return this.j.toString()
        }
    }
    const $e = /^[a-zA-Z0-9-]+$/,
        cf = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        af = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };
    var gf = Ye("<!DOCTYPE html>"),
        ff = new We(t.trustedTypes && t.trustedTypes.emptyHTML || "", Ue),
        hf = Ye("<br>");
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function jf(a) {
        a: {
            try {
                var b = new URL(a)
            } catch (c) {
                b = "https:";
                break a
            }
            b = b.protocol
        }
        if ("javascript:" !== b) return a
    };

    function kf(a) {
        var b = lf(mf) || Ee;
        b = b instanceof ze ? Ae(b) : jf(b);
        void 0 !== b && (a.href = b)
    };

    function nf(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };
    const of = "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

    function pf(a, b, c) {
        if (b instanceof pe) a.href = se(b).toString();
        else {
            if (-1 === of .indexOf(c)) throw Error(`TrustedResourceUrl href attribute required with rel="${c}"`);
            b = b instanceof ze ? Ae(b) : jf(b);
            if (void 0 === b) return;
            a.href = b
        }
        a.rel = c
    };

    function qf(a) {
        var b;
        (b = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    }

    function rf(a, b) {
        a.src = se(b);
        qf(a)
    };
    class uf {
        constructor(a) {
            this.Jf = a
        }
    }

    function vf(a) {
        return new uf(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const mf = [vf("data"), vf("http"), vf("https"), vf("mailto"), vf("ftp"), new uf(a => /^[^:]*([/?#]|$)/.test(a))];

    function lf(a = mf) {
        for (let b = 0; b < a.length; ++b) {
            const c = a[b];
            if (c instanceof uf && c.Jf("#")) return new ze("#", ye)
        }
    };

    function wf(a) {
        var b = window;
        new Promise((c, d) => {
            function e() {
                f.onload = null;
                f.onerror = null;
                f.parentElement ? .removeChild(f)
            }
            const f = b.document.createElement("script");
            f.onload = () => {
                e();
                c()
            };
            f.onerror = () => {
                e();
                d(void 0)
            };
            f.type = "text/javascript";
            rf(f, a);
            "complete" !== b.document.readyState ? M(b, "load", () => {
                b.document.body.appendChild(f)
            }) : b.document.body.appendChild(f)
        })
    };
    async function xf(a) {
        var b = "https://pagead2.googlesyndication.com/getconfig/sodar" + `?sv=${200}&tid=${a.j}` + `&tv=${a.l}&st=` + `${a.jb}`;
        let c = void 0;
        try {
            c = await yf(b)
        } catch (g) {}
        if (c) {
            b = a.zb || c.sodar_query_id;
            var d = void 0 !== c.rc_enable && a.m ? c.rc_enable : "n",
                e = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms,
                f = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
            if (b && c.bg_hash_basename && c.bg_binary) return {
                context: a.v,
                gf: c.bg_hash_basename,
                ff: c.bg_binary,
                Kf: a.j + "_" + a.l,
                zb: b,
                jb: a.jb,
                dc: d,
                tc: e,
                ac: f
            }
        }
    }
    let yf = a => new Promise((b, c) => {
        const d = new XMLHttpRequest;
        d.onreadystatechange = () => {
            d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
        };
        d.open("GET", a, !0);
        d.send()
    });
    async function zf(a) {
        var b = await xf(a);
        if (b) {
            a = window;
            let c = a.GoogleGcLKhOms;
            c && "function" === typeof c.push || (c = a.GoogleGcLKhOms = []);
            c.push({
                _ctx_: b.context,
                _bgv_: b.gf,
                _bgp_: b.ff,
                _li_: b.Kf,
                _jk_: b.zb,
                _st_: b.jb,
                _rc_: b.dc,
                _dl_: b.tc,
                _g2_: b.ac
            });
            if (b = a.GoogleDX5YKUSk) a.GoogleDX5YKUSk = void 0, b[1]();
            a = ve(Od, {
                basename: "sodar2"
            });
            wf(a)
        }
    };

    function Af(a, b) {
        return md(a, 1, b)
    }
    var Bf = class extends L {
        constructor(a) {
            super(a)
        }
        j() {
            return G(this, 1)
        }
    };

    function Cf(a, b) {
        return dd(a, 5, b)
    }

    function Df(a, b) {
        return md(a, 3, b)
    }
    var Ef = class extends L {
        constructor() {
            super()
        }
    };

    function Ff(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    }
    var Gf = class {
            constructor(a) {
                this.j = a.l;
                this.l = a.m;
                this.v = a.v;
                this.zb = a.zb;
                this.win = a.R();
                this.jb = a.jb;
                this.dc = a.dc;
                this.tc = a.tc;
                this.ac = a.ac;
                this.m = a.j
            }
        },
        Hf = class {
            constructor(a, b, c) {
                this.l = a;
                this.m = b;
                this.v = c;
                this.win = window;
                this.jb = "env";
                this.dc = "n";
                this.tc = "0";
                this.ac = "1";
                this.j = !0
            }
            R() {
                return this.win
            }
            build() {
                return new Gf(this)
            }
        };
    var Jf = class extends L {
            constructor(a) {
                super(a, -1, If)
            }
        },
        If = [2, 3];

    function Kf(a, b) {
        return x(a, 1, b)
    }

    function Lf(a, b) {
        return x(a, 2, b)
    }

    function Mf(a, b) {
        return x(a, 3, b)
    }

    function Nf(a, b) {
        return x(a, 4, b)
    }
    var Of = class extends L {
        constructor() {
            super()
        }
        getVersion() {
            return w(this, 5)
        }
    };
    var Qf = class extends L {
            constructor(a) {
                super(a, -1, Pf)
            }
        },
        Pf = [5];
    var Sf = class extends L {
            constructor(a) {
                super(a, -1, Rf)
            }
        },
        Rf = [3];
    var Uf = class extends L {
            constructor(a) {
                super(a, -1, Tf)
            }
        },
        Tf = [2];

    function Vf(a) {
        return D(a, Uf, 2)
    }

    function Wf(a) {
        return D(a, Qf, 15)
    }
    var Yf = class extends L {
            constructor(a) {
                super(a, -1, Xf)
            }
        },
        Zf = Id(Yf),
        Xf = [2, 15];
    var $f = window;
    var ag = {
        Fg: "google_adtest",
        Jg: "google_ad_client",
        Kg: "google_ad_format",
        Mg: "google_ad_height",
        Zg: "google_ad_width",
        Qg: "google_ad_layout",
        Rg: "google_ad_layout_key",
        Sg: "google_ad_output",
        Tg: "google_ad_region",
        Wg: "google_ad_slot",
        Xg: "google_ad_type",
        Yg: "google_ad_url",
        ah: "google_allow_expandable_ads",
        xh: "google_analytics_domain_name",
        yh: "google_analytics_uacct",
        Mh: "google_container_id",
        Wh: "google_gl",
        ti: "google_enable_ose",
        Di: "google_full_width_responsive",
        Bj: "google_rl_filtering",
        Aj: "google_rl_mode",
        Cj: "google_rt",
        zj: "google_rl_dest_url",
        hj: "google_max_radlink_len",
        mj: "google_num_radlinks",
        nj: "google_num_radlinks_per_unit",
        Ig: "google_ad_channel",
        gj: "google_max_num_ads",
        ij: "google_max_responsive_height",
        Hh: "google_color_border",
        si: "google_enable_content_recommendations",
        Th: "google_content_recommendation_ui_type",
        Sh: "google_source_type",
        Rh: "google_content_recommendation_rows_num",
        Qh: "google_content_recommendation_columns_num",
        Ph: "google_content_recommendation_ad_positions",
        Uh: "google_content_recommendation_use_square_imgs",
        Jh: "google_color_link",
        Ih: "google_color_line",
        Lh: "google_color_url",
        Gg: "google_ad_block",
        Vg: "google_ad_section",
        Hg: "google_ad_callback",
        Eh: "google_captcha_token",
        Kh: "google_color_text",
        qh: "google_alternate_ad_url",
        Pg: "google_ad_host_tier_id",
        Fh: "google_city",
        Ng: "google_ad_host",
        Og: "google_ad_host_channel",
        rh: "google_alternate_color",
        Gh: "google_color_bg",
        ui: "google_encoding",
        Bi: "google_font_face",
        Zh: "google_cust_ch",
        ci: "google_cust_job",
        bi: "google_cust_interests",
        ai: "google_cust_id",
        di: "google_cust_u_url",
        Fi: "google_hints",
        Ui: "google_image_size",
        jj: "google_mtl",
        gk: "google_cpm",
        Oh: "google_contents",
        lj: "google_native_settings_key",
        Vh: "google_country",
        Xj: "google_targeting",
        Ci: "google_font_size",
        gi: "google_disable_video_autoplay",
        tk: "google_video_product_type",
        sk: "google_video_doc_id",
        rk: "google_cust_gender",
        Sj: "google_cust_lh",
        Rj: "google_cust_l",
        fk: "google_tfs",
        kj: "google_native_ad_template",
        Zi: "google_kw",
        Uj: "google_tag_for_child_directed_treatment",
        Vj: "google_tag_for_under_age_of_consent",
        Ej: "google_region",
        Yh: "google_cust_criteria",
        Ug: "google_safe",
        Xh: "google_ctr_threshold",
        Fj: "google_resizing_allowed",
        Hj: "google_resizing_width",
        Gj: "google_resizing_height",
        qk: "google_cust_age",
        LANGUAGE: "google_language",
        aj: "google_kw_type",
        tj: "google_pucrd",
        rj: "google_page_url",
        Wj: "google_tag_partner",
        Lj: "google_restrict_data_processing",
        Bg: "google_adbreak_test",
        Lg: "google_ad_frequency_hint",
        Dg: "google_admob_interstitial_slot",
        Eg: "google_admob_rewarded_slot",
        Cg: "google_admob_ads_only",
        fj: "google_max_ad_content_rating",
        vj: "google_ad_public_floor",
        uj: "google_ad_private_floor",
        pk: "google_traffic_source",
        Pj: "google_shadow_mode"
    };
    var bg = Td(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = Ve(ff);
        return !b.parentElement
    });

    function cg(a, b) {
        if (bg())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = Ve(b)
    }
    var dg = /^[\w+/_-]+[=]{0,2}$/;

    function eg(a, b) {
        b = (b || t).document;
        return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && dg.test(a) ? a : "" : ""
    };

    function fg(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function gg(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function hg(a) {
        return gg.apply(null, arguments) / arguments.length
    };

    function ig(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    ig.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    ig.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    ig.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function jg(a, b) {
        this.width = a;
        this.height = b
    }

    function kg(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    }
    p = jg.prototype;
    p.aspectRatio = function() {
        return this.width / this.height
    };
    p.isEmpty = function() {
        return !(this.width * this.height)
    };
    p.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    p.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    p.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function lg(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : t.document.createElement("div");
        return a.replace(mg, function(e, f) {
            var g = c[e];
            if (g) return g;
            "#" == f.charAt(0) && (f = Number("0" + f.slice(1)), isNaN(f) || (g = String.fromCharCode(f)));
            g || (g = Ye(e + " "), cg(d, g), g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var mg = /&([^;\s<&]+);?/g;

    function ng(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function og(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function pg(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function qg(a) {
        return a ? new rg(sg(a)) : Na || (Na = new rg)
    }

    function tg(a, b) {
        ae(b, function(c, d) {
            c && "object" == typeof c && c.ra && (c = c.ka());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : ug.hasOwnProperty(d) ? a.setAttribute(ug[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var ug = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function vg(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new jg(a.clientWidth, a.clientHeight)
    }

    function wg(a) {
        var b = a.scrollingElement ? a.scrollingElement : Kb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return Fb && a.pageYOffset != b.scrollTop ? new ig(b.scrollLeft, b.scrollTop) : new ig(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function xg(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function yg(a, b, c, d) {
        function e(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            if (!sa(f) || ta(f) && 0 < f.nodeType) e(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (ta(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                mb(g ? ub(f) : f, e)
            }
        }
    }

    function zg(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Ag(a, b) {
        var c = zg(a, "DIV");
        Fb ? (b = df(hf, b), cg(c, b), c.removeChild(c.firstChild)) : cg(c, b);
        if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
        else {
            for (a = a.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
            c = a
        }
        return c
    }

    function Bg(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    }

    function sg(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    var Cg = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        Dg = {
            IMG: " ",
            BR: "\n"
        };

    function Eg(a) {
        var b = [];
        Fg(a, b, !0);
        a = b.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " ");
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function Fg(a, b, c) {
        if (!(a.nodeName in Cg))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Dg) b.push(Dg[a.nodeName]);
        else
            for (a = a.firstChild; a;) Fg(a, b, c), a = a.nextSibling
    }

    function Gg(a, b, c) {
        if (!b && !c) return null;
        var d = b ? String(b).toUpperCase() : null;
        return Hg(a, function(e) {
            return (!d || e.nodeName == d) && (!c || "string" === typeof e.className && rb(e.className.split(/\s+/), c))
        })
    }

    function Hg(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function rg(a) {
        this.j = a || t.document || document
    }
    p = rg.prototype;
    p.Af = function(a) {
        return "string" === typeof a ? this.j.getElementById(a) : a
    };
    p.Ag = rg.prototype.Af;
    p.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };
    p.ha = function(a, b, c) {
        var d = this.j,
            e = arguments,
            f = e[1],
            g = zg(d, String(e[0]));
        f && ("string" === typeof f ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : tg(g, f));
        2 < e.length && yg(d, g, e, 2);
        return g
    };
    p.createElement = function(a) {
        return zg(this.j, a)
    };
    p.createTextNode = function(a) {
        return this.j.createTextNode(String(a))
    };

    function Ig(a, b) {
        return Ag(a.j, b)
    }
    p.R = function() {
        var a = this.j;
        return a.parentWindow || a.defaultView
    };
    p.appendChild = function(a, b) {
        a.appendChild(b)
    };
    p.append = function(a, b) {
        yg(sg(a), a, arguments, 1)
    };
    p.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    p.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    p.xf = Bg;

    function Jg() {
        return !Kg() && (v("iPod") || v("iPhone") || v("Android") || v("IEMobile"))
    }

    function Kg() {
        return v("iPad") || v("Android") && !v("Mobile") || v("Silk")
    };
    var Lg = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Mg(a) {
        try {
            return !!a && null != a.location.href && Db(a, "foo")
        } catch {
            return !1
        }
    }

    function Ng(a, b = !1, c = !1, d = t) {
        c = c ? Og(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !Mg(c) || !a(c));) c = Og(c)
    }

    function Og(a) {
        try {
            const b = a.parent;
            if (b && b != a) return b
        } catch {}
        return null
    }

    function Pg(a) {
        return Mg(a.top) ? a.top : null
    }

    function Qg(a, b) {
        const c = Rg("SCRIPT", a);
        rf(c, b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function Sg(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Tg() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function Ug(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Vg(a) {
        const b = [];
        Ug(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Wg(a) {
        const b = a.length;
        if (0 == b) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Yg = Td(() => qb(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Xg) || 1E-4 > Math.random());
    const Xg = a => $a(db(), a);
    var Zg = /^([0-9.]+)px$/,
        $g = /^(-?[0-9.]{1,30})$/;

    function ah(a) {
        if (!$g.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function bh(a) {
        return /^true$/.test(a)
    }

    function ch(a) {
        return (a = Zg.exec(a)) ? +a[1] : null
    }

    function dh() {
        var a = t.document.URL;
        if (!a) return "";
        const b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            const c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch {}
        return ""
    }
    var eh = {
        bh: "allow-forms",
        eh: "allow-modals",
        fh: "allow-orientation-lock",
        gh: "allow-pointer-lock",
        hh: "allow-popups",
        ih: "allow-popups-to-escape-sandbox",
        jh: "allow-presentation",
        kh: "allow-same-origin",
        lh: "allow-scripts",
        mh: "allow-top-navigation",
        oh: "allow-top-navigation-by-user-activation"
    };
    const fh = Td(() => Vg(eh));

    function gh() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"];
        const b = fh();
        return a.length ? nb(b, c => !rb(a, c)) : b
    }

    function hh() {
        const a = Rg("IFRAME"),
            b = {};
        mb(fh(), c => {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    var ih = (a, b) => {
            try {
                return !(!a.frames || !a.frames[b])
            } catch {
                return !1
            }
        },
        jh = (a, b) => {
            for (let c = 0; 50 > c; ++c) {
                if (ih(a, b)) return a;
                if (!(a = Og(a))) break
            }
            return null
        },
        kh = Td(() => Jg() ? 2 : Kg() ? 1 : 0),
        N = (a, b) => {
            Ug(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        };
    const lh = {
            ["http://googleads.g.doubleclick.net"]: !0,
            ["http://pagead2.googlesyndication.com"]: !0,
            ["https://googleads.g.doubleclick.net"]: !0,
            ["https://pagead2.googlesyndication.com"]: !0
        },
        mh = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
        nh = /.*domain\.test$/,
        oh = /\.prod\.google\.com(:\d+)?$/;
    var ph = a => lh[a] || mh.test(a) || nh.test(a) || oh.test(a);
    let qh = [];
    const rh = () => {
        const a = qh;
        qh = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var sh = (a, b) => {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * 2 ** 52),
                configurable: !1
            })
        } catch (c) {
            b && b.la(784, c)
        }
        a = Number(a.goog_pvsid);
        b && (!a || 0 >= a) && b.la(784, Error(`Invalid correlator, ${a}`));
        return a || -1
    };

    function th(a, b, c, d = []) {
        const e = new a.MutationObserver(f => {
            for (const g of f)
                for (const h of g.removedNodes)
                    if (d && (h === b || Bg(h, b))) {
                        for (const k of d) k.disconnect();
                        d.length = 0;
                        c();
                        return
                    }
        });
        d.push(e);
        e.observe(a.document.documentElement, {
            childList: !0,
            subtree: !0
        });
        Ng(f => {
            if (!f.parent || !Mg(f.parent)) return !1;
            const g = f.parent.document.getElementsByTagName("iframe");
            for (let l = 0; l < g.length; l++) try {
                a: {
                    var h = g[l];
                    try {
                        var k = h.contentWindow || (h.contentDocument ? xg(h.contentDocument) : null);
                        break a
                    } catch (m) {}
                    k =
                    null
                }
                if (k == f) {
                    th(f.parent, g[l], c, d);
                    break
                }
            }
            catch {}
            return !1
        }, !1, !1, a)
    }
    var uh = (a, b) => {
            th(xg(sg(a)), a, b)
        },
        vh = (a, b) => {
            "complete" === a.document.readyState ? (qh.push(b), 1 == qh.length && (window.Promise ? Promise.resolve().then(rh) : window.setImmediate ? setImmediate(rh) : setTimeout(rh, 0))) : a.addEventListener("load", b)
        },
        wh = (a, b) => new Promise(c => {
            setTimeout(() => void c(b), a)
        });

    function Rg(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    }
    var xh = a => {
        let b = a;
        for (; a && a != a.parent;) a = a.parent, Mg(a) && (b = a);
        return b
    };

    function yh(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    p = yh.prototype;
    p.getWidth = function() {
        return this.right - this.left
    };
    p.getHeight = function() {
        return this.bottom - this.top
    };

    function zh(a) {
        return new yh(a.top, a.right, a.bottom, a.left)
    }
    p.contains = function(a) {
        return this && a ? a instanceof yh ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };

    function Ah(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    p.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    p.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    p.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function Bh(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    function Ch(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new Bh(c, e, d - c, a - e)
        }
        return null
    }

    function Dh(a, b) {
        var c = Ch(a, b);
        if (!c || !c.height || !c.width) return [new Bh(a.left, a.top, a.width, a.height)];
        c = [];
        var d = a.top,
            e = a.height,
            f = a.left + a.width,
            g = a.top + a.height,
            h = b.left + b.width,
            k = b.top + b.height;
        b.top > a.top && (c.push(new Bh(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        k < g && (c.push(new Bh(a.left, k, a.width, g - k)), e = k - d);
        b.left > a.left && c.push(new Bh(a.left, d, b.left - a.left, e));
        h < f && c.push(new Bh(h, d, f - h, e));
        return c
    }
    Bh.prototype.contains = function(a) {
        return a instanceof ig ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    Bh.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Bh.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Bh.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    const Eh = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function Fh(a = t) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch {}
        return b ? .pageViewId && b ? .canonicalUrl ? b : null
    }

    function Gh(a = Fh()) {
        return a && a.mode ? +a.mode.version || null : null
    }

    function Hh(a = Fh()) {
        if (a && a.container) {
            a = a.container.split(",");
            const b = [];
            for (let c = 0; c < a.length; c++) b.push(Eh[a[c]] || "x");
            return b.join()
        }
        return null
    }

    function Jh() {
        var a = Fh();
        return a && a.initialIntersection
    }

    function Kh() {
        const a = Jh();
        return a && ta(a.rootBounds) ? new jg(a.rootBounds.width, a.rootBounds.height) : null
    }

    function Lh(a = Fh()) {
        return a ? Mg(a.master) ? a.master : null : null
    }

    function Mh(a, b) {
        const c = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let d = () => {},
            e = () => {};
        b && (c.push(b), e = () => {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            sb(c, b);
            d()
        });
        if (a.ampInaboxInitialized) return e;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        const f = g => {
            if (a.ampInaboxInitialized) g = !0;
            else {
                var h, k = "amp-ini-load" === g.data;
                a.ampInaboxPendingMessages && !k && (h = /^amp-(\d{15,20})?/.exec(g.data)) && (a.ampInaboxPendingMessages.push(g), g = h[1], a.ampInaboxInitialized ||
                    g && !/^\d{15,20}$/.test(g) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || Qg(a.document, g ? ve(Nd("https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"), {
                        ampVersion: g
                    }) : te(Md(Nd("https://cdn.ampproject.org/amp4ads-host-v0.js")))));
                g = !1
            }
            g && d()
        };
        c.google_amp_listener_added || (c.google_amp_listener_added = !0, M(a, "message", f), d = () => {
            $d(a, "message", f)
        });
        return e
    };

    function O(a, ...b) {
        if (0 === b.length) return te(a[0]);
        const c = [a[0]];
        for (let d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return te(c.join(""))
    }

    function Nh(a, b) {
        let c = se(a).toString();
        if (/#/.test(c)) throw Error("");
        let d = /\?/.test(c) ? "&" : "?";
        b.forEach((e, f) => {
            e = e instanceof Array ? e : [e];
            for (let g = 0; g < e.length; g++) {
                const h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return te(c)
    };

    function Oh(a) {
        a = a[0];
        const b = ke();
        a = b ? b.createScript(a) : a;
        return new ne(a, le)
    };

    function Ph(a) {
        return new Te(a[0], Re)
    };

    function Qh(a, b, c) {
        if ("string" === typeof b)(b = Rh(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = Rh(c, d);
                f && (c.style[f] = e)
            }
    }
    var Sh = {};

    function Rh(a, b) {
        var c = Sh[b];
        if (!c) {
            var d = og(b);
            c = d;
            void 0 === a.style[d] && (d = (Kb ? "Webkit" : Jb ? "Moz" : Fb ? "ms" : null) + pg(d), void 0 !== a.style[d] && (c = d));
            Sh[b] = c
        }
        return c
    }

    function Th(a, b) {
        var c = sg(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function Uh(a, b) {
        return Th(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function Vh(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function Wh(a) {
        var b = sg(a),
            c = new ig(0, 0);
        var d = b ? sg(b) : document;
        d = !Fb || 9 <= Number(Tb) || "CSS1Compat" == qg(d).j.compatMode ? d.documentElement : d.body;
        if (a == d) return c;
        a = Vh(a);
        b = wg(qg(b).j);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function Xh(a) {
        var b = Yh;
        if ("none" != Uh(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function Yh(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Kb && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Vh(a), new jg(a.right - a.left, a.bottom - a.top)) : new jg(b, c)
    }

    function Zh(a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    }

    function $h(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? Zh(a, b) : 0
    }
    var ai = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function bi(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in ai ? ai[b] : Zh(a, b)
    };
    var ci = a => "number" === typeof a && 0 < a,
        ei = (a, b) => {
            a = di(a);
            if (!a) return b;
            const c = b.slice(-1);
            return b + ("?" === c || "#" === c ? "" : "&") + a
        },
        di = a => Object.entries(fi(a)).map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`).join("&"),
        fi = a => {
            const b = {};
            Ug(a, (c, d) => {
                if (c || 0 === c || !1 === c) "boolean" === typeof c && (c = c ? 1 : 0), b[d] = c
            });
            return b
        },
        gi = () => {
            try {
                return $f.history.length
            } catch (a) {
                return 0
            }
        },
        hi = a => {
            a = Lh(Fh(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1
        },
        ii = a => {
            a = a.google_unique_id;
            return "number" === typeof a ? a :
                0
        },
        ji = a => {
            a.u_tz = -(new Date).getTimezoneOffset();
            a.u_his = gi();
            a.u_h = $f.screen ? .height;
            a.u_w = $f.screen ? .width;
            a.u_ah = $f.screen ? .availHeight;
            a.u_aw = $f.screen ? .availWidth;
            a.u_cd = $f.screen ? .colorDepth
        },
        ki = a => {
            let b;
            b = 9 !== a.nodeType && a.id;
            a: {
                if (a && a.nodeName && a.parentElement) {
                    var c = a.nodeName.toString().toLowerCase();
                    const d = a.parentElement.childNodes;
                    let e = 0;
                    for (let f = 0; f < d.length; ++f) {
                        const g = d[f];
                        if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
                            if (a === g) {
                                c = "." + e;
                                break a
                            }++e
                        }
                    }
                }
                c = ""
            }
            return (a.nodeName &&
                a.nodeName.toString().toLowerCase()) + (b ? "/" + b : "") + c
        },
        li = a => function() {
            if (a) {
                const b = a;
                a = null;
                b.apply(null, arguments)
            }
        },
        mi = () => {
            if (!$f) return !1;
            try {
                return !(!$f.navigator.standalone && !$f.top.navigator.standalone)
            } catch (a) {
                return !1
            }
        },
        ni = a => (a = a.google_ad_format) ? 0 < a.indexOf("_0ads") : !1,
        oi = a => {
            let b = Number(a.google_ad_width),
                c = Number(a.google_ad_height);
            if (!(0 < b && 0 < c)) {
                a: {
                    try {
                        const e = String(a.google_ad_format);
                        if (e && e.match) {
                            const f = e.match(/(\d+)x(\d+)/i);
                            if (f) {
                                const g = parseInt(f[1], 10),
                                    h = parseInt(f[2],
                                        10);
                                if (0 < g && 0 < h) {
                                    var d = {
                                        width: g,
                                        height: h
                                    };
                                    break a
                                }
                            }
                        }
                    } catch (e) {}
                    d = null
                }
                a = d;
                if (!a) return null;b = 0 < b ? b : a.width;c = 0 < c ? c : a.height
            }
            return {
                width: b,
                height: c
            }
        };
    class pi {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const qi = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var ri = class {
            constructor(a, b) {
                this.j = a;
                this.l = b
            }
        },
        si = class {
            constructor(a, b, c) {
                this.url = a;
                this.win = b;
                this.ce = !!c;
                this.depth = null
            }
        };

    function ti(a, b, c = null, d = !1, e = !1) {
        ui(a, b, c, d, e)
    }

    function ui(a, b, c, d, e = !1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = Rg("IMG", a.document);
        if (c || d) {
            const g = h => {
                c && c(h);
                d && sb(a.google_image_requests, f);
                $d(f, "load", g);
                $d(f, "error", g)
            };
            M(f, "load", g);
            M(f, "error", g)
        }
        e && (f.attributionsrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var wi = (a, b) => {
            let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
            Ug(a, (d, e) => {
                d && (c += `&${e}=${encodeURIComponent(d)}`)
            });
            vi(c)
        },
        vi = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : ti(b, a, void 0, !1, !1)
        };

    function xi(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function yi(a, b, c, d, e) {
        const f = [];
        Ug(a, function(g, h) {
            (g = zi(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function zi(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(zi(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(yi(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Ai(a, b, c) {
        a.j.push(b);
        a.l[b] = c
    }

    function Bi(a) {
        let b = 1;
        for (const c in a.l) b = c.length > b ? c.length : b;
        return 3997 - b - a.m.length - 1
    }

    function Ci(a, b, c, d) {
        b = b + "//" + c + d;
        let e = Bi(a) - d.length;
        if (0 > e) return "";
        a.j.sort(function(f, g) {
            return f - g
        });
        d = null;
        c = "";
        for (let f = 0; f < a.j.length; f++) {
            const g = a.j[f],
                h = a.l[g];
            for (let k = 0; k < h.length; k++) {
                if (!e) {
                    d = null == d ? g : d;
                    break
                }
                let l = yi(h[k], a.m, ",$");
                if (l) {
                    l = c + l;
                    if (e >= l.length) {
                        e -= l.length;
                        b += l;
                        c = a.m;
                        break
                    }
                    d = null == d ? g : d
                }
            }
        }
        a = "";
        null != d && (a = c + "trn=" + d);
        return b + a
    }
    class Di {
        constructor() {
            this.m = "&";
            this.l = {};
            this.v = 0;
            this.j = []
        }
    };

    function Ei(a, b) {
        0 <= b && 1 >= b && (a.j = b)
    }

    function Fi(a, b, c, d = !1, e) {
        if ((d ? a.j : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Di ? f = c : (f = new Di, Ug(c, (h, k) => {
                var l = f;
                const m = l.v++;
                Ai(l, m, xi(k, h))
            }));
            const g = Ci(f, "https:", "pagead2.googlesyndication.com", "/pagead/gen_204?id=" + b + "&");
            g && ti(t, g)
        } catch (f) {}
    }
    class Gi {
        constructor() {
            this.j = Math.random()
        }
    };
    let Hi = null;

    function Ii() {
        if (null === Hi) {
            Hi = "";
            try {
                let a = "";
                try {
                    a = t.top.location.hash
                } catch (b) {
                    a = t.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    Hi = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return Hi
    };

    function Ji() {
        const a = t.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Da()
    }

    function Ki() {
        const a = t.performance;
        return a && a.now ? a.now() : null
    };
    class Li {
        constructor(a, b) {
            var c = Ki() || Ji();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.taskId = this.slotId = void 0
        }
    };
    const Mi = t.performance,
        Ni = !!(Mi && Mi.mark && Mi.measure && Mi.clearMarks),
        Oi = Td(() => {
            var a;
            if (a = Ni) a = Ii(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function Pi(a) {
        a && Mi && Oi() && (Mi.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Mi.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function Qi(a) {
        a.j = !1;
        a.l != a.m.google_js_reporting_queue && (Oi() && mb(a.l, Pi), a.l.length = 0)
    }

    function Ri(a, b) {
        if (!a.j) return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw Pi(c), e;
        }
        a.end(c);
        return d
    }
    class Si {
        constructor(a) {
            this.l = [];
            this.m = a || t;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.l = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.j = Oi() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.j) return null;
            a = new Li(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Mi && Oi() && Mi.mark(b);
            return a
        }
        end(a) {
            if (this.j && "number" === typeof a.value) {
                a.duration = (Ki() || Ji()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                Mi && Oi() && Mi.mark(b);
                !this.j || 2048 < this.l.length ||
                    this.l.push(a)
            }
        }
    };

    function Ti(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        a.stack && (b = Ui(a.stack, b));
        return b
    }

    function Ui(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            let c;
            for (; a != c;) c = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
            return a.replace(RegExp("\n *", "g"), "\n")
        } catch (c) {
            return b
        }
    }
    class Vi {
        constructor(a, b = null) {
            this.v = a;
            this.j = null;
            this.B = this.la;
            this.l = b;
            this.m = !1
        }
        aa() {
            return this.v
        }
        kd(a) {
            this.j = a
        }
        A(a) {
            this.m = a
        }
        Db(a, b, c) {
            let d, e;
            try {
                this.l && this.l.j ? (e = this.l.start(a.toString(), 3), d = b(), this.l.end(e)) : d = b()
            } catch (f) {
                b = !0;
                try {
                    Pi(e), b = this.B(a, new pi(f, {
                        message: Ti(f)
                    }), void 0, c)
                } catch (g) {
                    this.la(217, g)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        ta(a, b, c, d) {
            return (...e) => this.Db(a, () => b.apply(c, e), d)
        }
        la(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const J = new Di;
                var g = J;
                g.j.push(1);
                g.l[1] = xi("context", a);
                b.error && b.meta && b.id || (b = new pi(b, {
                    message: Ti(b)
                }));
                if (b.msg) {
                    g = J;
                    var h = b.msg.substring(0, 512);
                    g.j.push(2);
                    g.l[2] = xi("msg", h)
                }
                var k = b.meta || {};
                b = k;
                if (this.j) try {
                    this.j(b)
                } catch (Y) {}
                if (d) try {
                    d(b)
                } catch (Y) {}
                Ai(J, 3, [k]);
                k = t;
                d = [];
                b = null;
                do {
                    var l = k;
                    if (Mg(l)) {
                        var m = l.location.href;
                        b = l.document && l.document.referrer || null
                    } else m = b, b = null;
                    d.push(new si(m || "", l));
                    try {
                        k = l.parent
                    } catch (Y) {
                        k = null
                    }
                } while (k && l != k);
                for (let Y = 0, va = d.length - 1; Y <= va; ++Y) d[Y].depth = va - Y;
                l = t;
                if (l.location && l.location.ancestorOrigins &&
                    l.location.ancestorOrigins.length == d.length - 1)
                    for (m = 1; m < d.length; ++m) {
                        var n = d[m];
                        n.url || (n.url = l.location.ancestorOrigins[m - 1] || "", n.ce = !0)
                    }
                var q = d;
                let U = new si(t.location.href, t, !1);
                l = null;
                const Va = q.length - 1;
                for (n = Va; 0 <= n; --n) {
                    var r = q[n];
                    !l && qi.test(r.url) && (l = r);
                    if (r.url && !r.ce) {
                        U = r;
                        break
                    }
                }
                r = null;
                const ea = q.length && q[Va].url;
                0 != U.depth && ea && (r = q[Va]);
                f = new ri(U, r);
                if (f.l) {
                    q = J;
                    var u = f.l.url || "";
                    q.j.push(4);
                    q.l[4] = xi("top", u)
                }
                var A = {
                    url: f.j.url || ""
                };
                if (f.j.url) {
                    var z = f.j.url.match(Lg),
                        B = z[1],
                        H = z[3],
                        E = z[4];
                    u = "";
                    B && (u += B + ":");
                    H && (u += "//", u += H, E && (u += ":" + E));
                    var F = u
                } else F = "";
                Ai(J, 5, [A, {
                    url: F
                }]);
                Fi(this.v, e, J, this.m, c)
            } catch (J) {
                try {
                    Fi(this.v, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Ti(J),
                        url: f && f.j.url
                    }, this.m, c)
                } catch (U) {}
            }
            return !0
        }
        Aa(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.la(a, d instanceof Error ? d : Error(d), void 0, c || this.j || void 0)
            })
        }
    };
    var Wi = a => "string" === typeof a,
        Xi = a => void 0 === a;

    function Yi() {
        var a = Zi;
        return b => {
            for (const c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }
    };
    var $i = class extends L {
        constructor() {
            super()
        }
    };

    function aj(a) {
        var b = new bj;
        return x(b, 1, a)
    }
    var bj = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var cj = class extends L {
        constructor() {
            super()
        }
    };

    function dj(a, b) {
        return ld(a, 1, b)
    }

    function ej(a, b) {
        return ld(a, 2, b)
    }

    function fj(a, b) {
        return ld(a, 3, b)
    }

    function gj(a, b) {
        return ld(a, 4, b)
    }

    function hj(a, b) {
        return ld(a, 5, b)
    }

    function ij(a, b) {
        return Zc(a, 8, Hc(b), 0)
    }

    function jj(a, b) {
        return Zc(a, 9, Hc(b), 0)
    }
    var kj = class extends L {
        constructor() {
            super()
        }
    };
    var lj = class extends L {
        constructor() {
            super()
        }
    };

    function mj(a, b) {
        return Yc(a, 1, b, Lc)
    }

    function nj(a, b) {
        return Yc(a, 12, b, Kc)
    }

    function oj() {
        var a = new pj;
        Fc(a);
        Tc(a, 2, 2, !1, !1).push("irr");
        return a
    }

    function qj(a, b) {
        return rd(a, 3, b)
    }

    function rj(a, b) {
        return rd(a, 4, b)
    }

    function sj(a, b) {
        return rd(a, 5, b)
    }

    function tj(a, b) {
        return rd(a, 7, b)
    }

    function uj(a, b) {
        return rd(a, 8, b)
    }

    function vj(a, b) {
        return ld(a, 9, b)
    }

    function wj(a, b) {
        return fd(a, 10, b)
    }

    function xj(a, b) {
        return Yc(a, 11, b, Ic)
    }
    var pj = class extends L {
            constructor() {
                super(void 0, -1, yj)
            }
        },
        yj = [1, 12, 2, 10, 11];

    function zj(a) {
        var b = Aj();
        dd(a, 1, b)
    }

    function Bj(a, b) {
        return ld(a, 2, b)
    }

    function Cj(a, b) {
        return fd(a, 3, b)
    }

    function Dj(a, b) {
        return fd(a, 4, b)
    }

    function Ej(a, b) {
        return gd(a, 4, bj, b)
    }

    function Fj(a, b) {
        return fd(a, 5, b)
    }

    function Gj(a, b) {
        return Yc(a, 6, b, Lc)
    }

    function Hj(a, b) {
        return ld(a, 7, b)
    }

    function Ij(a, b) {
        dd(a, 9, b)
    }

    function Jj(a, b) {
        return rd(a, 10, b)
    }

    function Kj(a, b) {
        return rd(a, 11, b)
    }

    function Lj(a, b) {
        return rd(a, 12, b)
    }
    var Nj = class extends L {
            constructor() {
                super(void 0, -1, Mj)
            }
            D(a) {
                return ld(this, 8, a)
            }
        },
        Mj = [3, 4, 5, 6];
    var Pj = class extends L {
            constructor() {
                super(void 0, -1, Oj)
            }
        },
        Oj = [2];
    var Qj = class extends L {
        constructor() {
            super()
        }
    };
    var Rj = class extends L {
        constructor() {
            super()
        }
    };
    var Sj = class extends L {
        constructor() {
            super()
        }
        getContentUrl() {
            return G(this, 1)
        }
    };
    var Uj = class extends L {
            constructor() {
                super(void 0, -1, Tj)
            }
        },
        Tj = [1];
    var Vj = class extends L {
        constructor() {
            super()
        }
    };
    var Wj = class extends L {
        constructor() {
            super()
        }
    };
    var Xj = class extends L {
            constructor(a) {
                super(a)
            }
        },
        Yj = [1, 2, 3, 5, 6, 7, 8];
    var ak = class extends L {
            constructor() {
                super(void 0, -1, Zj)
            }
        },
        Zj = [1];
    var ck = class extends L {
            constructor() {
                super(void 0, -1, bk)
            }
        },
        bk = [2];
    var dk = class extends L {
        constructor() {
            super()
        }
    };
    var ek = class extends L {
        constructor() {
            super()
        }
    };

    function fk(a) {
        var b = new gk;
        return sd(b, 1, a)
    }
    var gk = class extends L {
            constructor() {
                super(void 0, -1, hk)
            }
        },
        hk = [9];
    var jk = class extends L {
            constructor() {
                super(void 0, -1, ik)
            }
        },
        ik = [2];

    function kk(a, b) {
        return x(a, 1, b)
    }

    function lk(a, b) {
        return x(a, 2, b)
    }
    var mk = class extends L {
        constructor() {
            super()
        }
    };
    var nk = class extends L {
            constructor() {
                super()
            }
        },
        ok = [4, 5];
    var pk = class extends L {
        constructor() {
            super()
        }
    };
    var qk = class extends L {
        constructor() {
            super()
        }
    };
    var rk = class extends L {
        constructor() {
            super()
        }
    };
    var sk = class extends L {
        constructor() {
            super()
        }
    };
    var tk = class extends L {
        constructor() {
            super()
        }
    };
    var uk = class extends L {
        constructor() {
            super()
        }
    };
    var vk = class extends L {
            constructor() {
                super()
            }
        },
        wk = [2, 3];
    var xk = class extends L {
            constructor() {
                super()
            }
        },
        yk = [3, 4, 5, 6, 7, 8, 9];

    function zk(a, b) {
        return ld(a, 3, b)
    }
    var Ak = class extends L {
            constructor() {
                super()
            }
            Na(a) {
                return md(this, 2, a)
            }
        },
        Bk = [4, 5, 6, 8, 9, 10];

    function Ck(a, ...b) {
        Dk(a, ...b.map(c => ({
            ug: 7,
            message: c
        })))
    };

    function Ek(a) {
        return JSON.stringify([a.map(b => [{
            [b.ug]: b.message.toJSON()
        }])])
    };
    var Fk = (a, b) => {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    };

    function Gk(a) {
        a && "function" == typeof a.xa && a.xa()
    };

    function Hk() {
        this.B = this.B;
        this.D = this.D
    }
    Hk.prototype.B = !1;
    Hk.prototype.xa = function() {
        this.B || (this.B = !0, this.j())
    };

    function Ik(a, b) {
        a.B ? b() : (a.D || (a.D = []), a.D.push(b))
    }
    Hk.prototype.j = function() {
        if (this.D)
            for (; this.D.length;) this.D.shift()()
    };

    function Dk(a, ...b) {
        65536 <= Ek(a.j.concat(b)).length && Jk(a);
        a.j.push(...b);
        100 <= a.j.length && Jk(a);
        a.j.length && null === a.l && (a.l = setTimeout(() => {
            Jk(a)
        }, 100))
    }

    function Jk(a) {
        null !== a.l && (clearTimeout(a.l), a.l = null);
        if (a.j.length) {
            var b = Ek(a.j);
            a.m("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.j = []
        }
    }
    var Kk = class {
            constructor() {
                this.m = Fk;
                this.j = [];
                this.l = null
            }
        },
        Lk = class extends Kk {};
    var P = a => {
        var b = "Pc";
        if (a.Pc && a.hasOwnProperty(b)) return a.Pc;
        b = new a;
        return a.Pc = b
    };

    function Mk(a, b, c) {
        return b[a] || c
    };

    function Nk(a, b) {
        a.l = c => Mk(2, b, () => [])(c, 1);
        a.j = () => Mk(3, b, () => [])(1)
    }
    class Ok {
        l() {
            return []
        }
        j() {
            return []
        }
    };
    let Pk, Qk;
    const Rk = new Si(t);
    (a => {
        Pk = a || new Gi;
        "number" !== typeof t.google_srt && (t.google_srt = Math.random());
        Ei(Pk, t.google_srt);
        Qk = new Vi(Pk, Rk);
        Qk.A(!0);
        "complete" == t.document.readyState ? t.google_measure_js_timing || Qi(Rk) : Rk.j && M(t, "load", () => {
            t.google_measure_js_timing || Qi(Rk)
        })
    })();
    var Sk = (a, b, c) => Qk.Db(a, b, c),
        Tk = (a, b) => Qk.ta(a, b),
        Uk = (a, b, c) => {
            const d = P(Ok).j();
            !b.eid && d.length && (b.eid = d.toString());
            Fi(Pk, a, b, !0, c)
        },
        Vk = (a, b) => Qk.la(a, b, void 0, void 0);
    var Wk = (a, b) => {
        const c = dh();
        return a + (-1 == a.indexOf("?") ? "?" : "&") + [0 < c.length ? "google_debug" + (c ? "=" + c : "") + "&" : "", "xpc=", b, "&p=", encodeURIComponent(t.document.location.protocol), "//", encodeURIComponent(t.document.location.host)].join("")
    };
    te(Md(Nd("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var Xk = (a, b, c, d = null) => {
            const e = g => {
                let h;
                try {
                    h = JSON.parse(g.data)
                } catch (k) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            M(a, "message", e);
            let f = !1;
            return () => {
                let g = !1;
                f || (f = !0, g = $d(a, "message", e));
                return g
            }
        },
        Yk = (a, b, c, d = null) => {
            const e = Xk(a, b, Rd(c, () => e()), d);
            return e
        },
        Zk = (a, b, c, d, e) => {
            if (!(0 >= e) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) 1 < e && Zk(a[f], b, c, d, --e)
        };

    function $k(a, b, c, d) {
        ph(d.origin) && "expandable-xpc-ready" == c.notify && al(a, b)
    }

    function al(a, b) {
        var c = a.Oc;
        c.google_eas_queue = c.google_eas_queue || [];
        c.google_eas_queue.push({
            a: a.id,
            b: a.url,
            c: a.width,
            d: a.height,
            e: a.Sa,
            f: a.Zf,
            g: a.Ve,
            h: a.If,
            i: void 0
        });
        t.setTimeout(Tk(220, li(() => {
            Qg(c.document, b)
        })), 0)
    };
    var cl = class extends L {
            constructor() {
                super(void 0, -1, bl)
            }
        },
        bl = [15];
    var dl = class extends L {
        constructor() {
            super()
        }
        getCorrelator() {
            return jd(this, 1)
        }
        setCorrelator(a) {
            return ld(this, 1, a)
        }
    };
    var el = class extends L {
        constructor() {
            super()
        }
    };
    let fl = null,
        gl = null;
    var hl = () => {
            if (null != fl) return fl;
            fl = !1;
            try {
                const a = Pg(t);
                a && -1 !== a.location.hash.indexOf("google_logging") && (fl = !0);
                t.localStorage.getItem("google_logging") && (fl = !0)
            } catch (a) {}
            return fl
        },
        il = () => {
            if (null != gl) return gl;
            gl = !1;
            try {
                const a = Pg(t);
                if (a && -1 !== a.location.hash.indexOf("auto_ads_logging") || t.localStorage.getItem("auto_ads_logging")) gl = !0
            } catch (a) {}
            return gl
        },
        jl = (a, b = []) => {
            let c = !1;
            t.google_logging_queue || (c = !0, t.google_logging_queue = []);
            t.google_logging_queue.push([a, b]);
            c && hl() && Qg(t.document,
                te(Md(Nd("https://pagead2.googlesyndication.com/pagead/js/logging_library.js"))))
        };
    let rl, sl;
    const tl = new Si(window);
    (a => {
        rl = a ? ? new Gi;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        Ei(rl, window.google_srt);
        sl = new Vi(rl, tl);
        sl.kd(() => {});
        sl.A(!0);
        "complete" == window.document.readyState ? window.google_measure_js_timing || Qi(tl) : tl.j && M(window, "load", () => {
            window.google_measure_js_timing || Qi(tl)
        })
    })();
    let ul = (new Date).getTime();
    var vl = a => {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? .05 : a
    };
    var wl = {
        Qi: 0,
        Pi: 1,
        Mi: 2,
        Hi: 3,
        Ni: 4,
        Ii: 5,
        Oi: 6,
        Ki: 7,
        Li: 8,
        Gi: 9,
        Ji: 10
    };
    var xl = {
        Si: 0,
        Ti: 1,
        Ri: 2
    };

    function yl(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function zl(a) {
        a = ob(a, b => new yh(b.top, b.right, b.bottom, b.left));
        a = Al(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function Al(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return pb(a.slice(1), (b, c) => {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, zh(a[0]))
    };
    var de = {
        Dj: 0,
        vi: 1,
        yi: 2,
        wi: 3,
        xi: 4,
        Ei: 8,
        Oj: 9,
        dj: 10,
        ej: 11,
        Kj: 16,
        fi: 17,
        ei: 24,
        bj: 25,
        Ah: 26,
        zh: 27,
        Me: 30,
        Wi: 32,
        Yi: 40,
        Tj: 41,
        Qj: 42
    };
    var Bl = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5,
            full_page: 6,
            side_rails: 7
        },
        Cl = {
            [1]: 1,
            [2]: 1,
            [3]: 7,
            [4]: 7,
            [8]: 2,
            [27]: 3,
            [9]: 4,
            [30]: 5
        };

    function Dl(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map)) : a.google_reactive_ads_global_state = new El;
        return a.google_reactive_ads_global_state
    }
    class El {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new Fl;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map
        }
    }
    var Fl = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var Gl = 728 * 1.38,
        Hl = (a, b = 420) => (a = Q(a).clientWidth) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384,
        Il = a => {
            var b = Q(a).clientWidth;
            a = a.innerWidth;
            return (b = b && a ? b / a : 0) ? 1.05 < b ? 262144 : .95 > b ? 524288 : 0 : 131072
        },
        Kl = a => Math.max(0, Jl(a, !0) - Q(a).clientHeight),
        Q = a => {
            a = a.document;
            let b = {};
            a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
            return b || {}
        },
        Jl = (a, b) => {
            const c = Q(a);
            return b ? c.scrollHeight == Q(a).clientHeight ? c.offsetHeight : c.scrollHeight : c.offsetHeight
        },
        Ml = (a, b) => Ll(b) || 10 === b || !a.adCount ? !1 : 1 == b || 2 == b ? !(!a.adCount[1] &&
            !a.adCount[2]) : (a = a.adCount[b]) ? 1 <= a : !1,
        Nl = (a, b) => a && a.source ? a.source === b || a.source.parent === b : !1,
        Ol = a => void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset,
        Pl = a => void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset,
        Ql = a => {
            const b = {};
            let c;
            Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
            if (c)
                for (a = 0; a < c.length; a++) {
                    const d = c[a];
                    if ("key" in d && "value" in d) {
                        const e =
                            d.value;
                        b[d.key] = null == e ? null : String(e)
                    }
                }
            return b
        },
        Rl = (a, b, c, d) => {
            Fi(c, b, {
                c: d.data.substring(0, 500),
                u: a.location.href.substring(0, 500)
            }, !0, .1);
            return !0
        },
        Ll = a => 26 === a || 27 === a || 40 === a || 41 === a;

    function Sl(a, b) {
        Tl(a).forEach(b, void 0)
    }

    function Tl(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function Ul(a, b) {
        return void 0 !== a.j[Vl(b)]
    }

    function Wl(a) {
        const b = [];
        for (const c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.l[c]);
        return b
    }

    function Xl(a) {
        const b = [];
        for (const c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.j[c]);
        return b
    }
    const Yl = class {
        constructor() {
            this.j = {};
            this.l = {}
        }
        set(a, b) {
            const c = Vl(a);
            this.j[c] = b;
            this.l[c] = a
        }
        remove(a) {
            a = Vl(a);
            this.j[a] = void 0;
            this.l[a] = void 0
        }
        get(a, b) {
            a = Vl(a);
            return void 0 !== this.j[a] ? this.j[a] : b
        }
        xb() {
            return Wl(this).length
        }
        clear() {
            this.j = {};
            this.l = {}
        }
    };

    function Vl(a) {
        return a instanceof Object ? String(ua(a)) : a + ""
    };
    const Zl = class {
        constructor(a) {
            this.j = new Yl;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.j.set(a, !0)
        }
        remove(a) {
            this.j.remove(a)
        }
        contains(a) {
            return Ul(this.j, a)
        }
    };
    const $l = new Zl("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));

    function am(a) {
        a.l.forEach((b, c) => {
            if (b.overrides.delete(a)) {
                b = Array.from(b.overrides.values()).pop() || b.originalValue;
                var d = a.element;
                b ? d.style.setProperty(c, b.value, b.priority) : d.style.removeProperty(c)
            }
        })
    }

    function bm(a, b, c) {
        c = {
            value: c,
            priority: "important"
        };
        var d = a.l.get(b);
        if (!d) {
            d = a.element;
            var e = d.style.getPropertyValue(b);
            d = {
                originalValue: e ? {
                    value: e,
                    priority: d.style.getPropertyPriority(b)
                } : null,
                overrides: new Map
            };
            a.l.set(b, d)
        }
        d.overrides.delete(a);
        d.overrides.set(a, c);
        a = a.element;
        c ? a.style.setProperty(b, c.value, c.priority) : a.style.removeProperty(b)
    }
    var cm = class extends Hk {
        constructor(a, b) {
            super();
            this.element = b;
            a = a.googTempStyleOverrideInfo = a.googTempStyleOverrideInfo || new Map;
            var c = a.get(b);
            c ? b = c : (c = new Map, a.set(b, c), b = c);
            this.l = b
        }
        j() {
            am(this);
            super.j()
        }
    };

    function dm(a, b) {
        const c = new em({
            first: a.M,
            second: b.M
        });
        a.Z(() => R(c, {
            first: a.M,
            second: b.M
        }));
        b.Z(() => R(c, {
            first: a.M,
            second: b.M
        }));
        return c
    }

    function fm(...a) {
        const b = [...a],
            c = () => b.every(f => f.M),
            d = new em(c()),
            e = () => {
                R(d, c())
            };
        b.forEach(f => f.Z(e));
        return gm(d)
    }

    function hm(...a) {
        const b = [...a],
            c = () => -1 !== b.findIndex(f => f.M),
            d = new em(c()),
            e = () => {
                R(d, c())
            };
        b.forEach(f => f.Z(e));
        return gm(d)
    }

    function R(a, b) {
        a.M = b;
        a.j.forEach(c => {
            c(a.M)
        })
    }

    function gm(a, b = im) {
        var c = a.M;
        const d = new em(a.M);
        a.Z(e => {
            b(e, c) || (c = e, R(d, e))
        });
        return d
    }

    function jm(a, b) {
        return a.Z(b, !0)
    }

    function km(a, b, c) {
        return jm(a, d => {
            d === b && c()
        })
    }

    function lm(a, b) {
        if (!1 === a.M) b();
        else {
            var c = {
                Pb: null
            };
            c.Pb = km(a, !1, () => {
                c.Pb && (c.Pb(), c.Pb = null);
                b()
            })
        }
    }

    function mm(a, b, c) {
        gm(a).Z(d => {
            d === b && c()
        })
    }

    function nm(a, b) {
        a.l && a.l();
        a.l = b.Z(c => R(a, c), !0)
    }
    class em {
        constructor(a) {
            this.M = a;
            this.j = new Map;
            this.m = 1;
            this.l = null
        }
        Z(a, b = !1) {
            const c = this.m++;
            this.j.set(c, a);
            b && a(this.M);
            return () => {
                this.j.delete(c)
            }
        }
        map(a) {
            const b = new em(a(this.M));
            this.Z(c => R(b, a(c)));
            return b
        }
    }

    function im(a, b) {
        return a == b
    };

    function om(a, b) {
        mb(a.j, c => {
            c(b)
        })
    }
    var pm = class {
        constructor() {
            this.j = []
        }
    };
    class qm {
        constructor(a) {
            this.j = a
        }
        Z(a) {
            this.j.j.push(a)
        }
        map(a) {
            const b = new pm;
            this.Z(c => om(b, a(c)));
            return new qm(b)
        }
    }

    function rm(...a) {
        const b = new pm;
        a.forEach(c => {
            c.Z(d => {
                om(b, d)
            })
        });
        return new qm(b)
    };

    function sm(a) {
        return gm(dm(a.j, a.m).map(b => {
            var c = b.first;
            b = b.second;
            return null == c || null == b ? null : tm(c, b)
        }))
    }
    var vm = class {
        constructor(a) {
            this.l = a;
            this.j = new em(null);
            this.m = new em(null);
            this.v = new pm;
            this.C = b => {
                null == this.j.M && 1 == b.touches.length && R(this.j, b.touches[0])
            };
            this.A = b => {
                const c = this.j.M;
                null != c && (b = um(c, b.changedTouches), null != b && (R(this.j, null), R(this.m, null), om(this.v, tm(c, b))))
            };
            this.B = b => {
                var c = this.j.M;
                null != c && (c = um(c, b.changedTouches), null != c && (R(this.m, c), b.preventDefault()))
            }
        }
    };

    function tm(a, b) {
        return {
            Je: b.pageX - a.pageX,
            Ke: b.pageY - a.pageY
        }
    }

    function um(a, b) {
        if (null == b) return null;
        for (let c = 0; c < b.length; ++c)
            if (b[c].identifier == a.identifier) return b[c];
        return null
    };

    function wm(a) {
        return gm(dm(a.j, a.l).map(b => {
            var c = b.first;
            b = b.second;
            return null == c || null == b ? null : xm(c, b)
        }))
    }
    var ym = class {
        constructor(a, b) {
            this.v = a;
            this.A = b;
            this.j = new em(null);
            this.l = new em(null);
            this.m = new pm;
            this.D = c => {
                R(this.j, c)
            };
            this.B = c => {
                const d = this.j.M;
                null != d && (R(this.j, null), R(this.l, null), om(this.m, xm(d, c)))
            };
            this.C = c => {
                null != this.j.M && (R(this.l, c), c.preventDefault())
            }
        }
    };

    function xm(a, b) {
        return {
            Je: b.screenX - a.screenX,
            Ke: b.screenY - a.screenY
        }
    };
    var Bm = (a, b) => {
        const c = new zm(a, b);
        return () => Am(c)
    };

    function Am(a) {
        if (a.j) return !1;
        if (null == a.l) return Cm(a), !0;
        const b = a.l + 1E3 - (new Date).getTime();
        if (1 > b) return Cm(a), !0;
        Dm(a, b);
        return !0
    }

    function Cm(a) {
        a.l = (new Date).getTime();
        a.v()
    }

    function Dm(a, b) {
        a.j = !0;
        a.m.setTimeout(() => {
            a.j = !1;
            Cm(a)
        }, b)
    }
    class zm {
        constructor(a, b) {
            this.m = a;
            this.v = b;
            this.l = null;
            this.j = !1
        }
    };

    function Em(a) {
        return Fm(wm(a.j), sm(a.l))
    }

    function Gm(a) {
        return rm(new qm(a.j.m), new qm(a.l.v))
    }
    var Hm = class {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };

    function Fm(a, b) {
        return dm(a, b).map(({
            first: c,
            second: d
        }) => c || d || null)
    };

    function Im(a, b) {
        return new Jm(a, b)
    }

    function Km(a) {
        a.win.requestAnimationFrame(() => {
            a.B || R(a.m, new jg(a.element.offsetWidth, a.element.offsetHeight))
        })
    }

    function Lm(a) {
        a.l || (a.l = !0, a.v.observe(a.element));
        return gm(a.m, kg)
    }
    var Jm = class extends Hk {
        constructor(a, b) {
            super();
            this.win = a;
            this.element = b;
            this.l = !1;
            this.m = new em(new jg(this.element.offsetWidth, this.element.offsetHeight));
            this.v = new ResizeObserver(() => {
                Km(this)
            })
        }
        j() {
            this.v.disconnect();
            super.j()
        }
    };

    function Mm(a, b) {
        return {
            top: a.j - b,
            right: a.m + a.l,
            bottom: a.j + b,
            left: a.m
        }
    }
    class Nm {
        constructor(a, b, c) {
            this.m = a;
            this.j = b;
            this.l = c
        }
    };

    function Om(a, b) {
        a = a.getBoundingClientRect();
        return new Pm(a.top + Ol(b), a.bottom - a.top)
    }

    function Qm(a) {
        return new Pm(Math.round(a.j), Math.round(a.l))
    }
    class Pm {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        getHeight() {
            return this.l
        }
    };

    function Rm(a, b) {
        a.B = !0;
        a.m = b;
        a.l.forEach(c => {
            c(a.m)
        });
        a.l = []
    }
    class Sm {
        constructor(a) {
            this.j = a;
            this.l = [];
            this.B = !1;
            this.A = this.m = null;
            this.C = Bm(a, () => {
                if (null != this.A) {
                    var b = Jl(this.j, !0) - this.A;
                    1E3 < b && Rm(this, b)
                }
            });
            this.v = null
        }
        init(a, b) {
            null == a ? (this.A = a = Jl(this.j, !0), this.j.addEventListener("scroll", this.C), null != b && b(a)) : this.v = this.j.setTimeout(() => {
                this.init(void 0, b)
            }, a)
        }
        xa() {
            null != this.v && this.j.clearTimeout(this.v);
            this.j.removeEventListener("scroll", this.C);
            this.l = [];
            this.m = null
        }
        addListener(a) {
            this.B ? a(this.m) : this.l.push(a)
        }
    };

    function Tm(a) {
        return new Um(a, new cm(a, a.document.body), new cm(a, a.document.documentElement), new cm(a, a.document.documentElement))
    }

    function Vm(a) {
        bm(a.m, "scroll-behavior", "auto");
        const b = Wm(a.win);
        b.activePageScrollPreventers.add(a);
        null === b.previousWindowScroll && (b.previousWindowScroll = a.win.scrollY);
        bm(a.j, "position", "fixed");
        bm(a.j, "top", `${-b.previousWindowScroll}px`);
        bm(a.j, "width", "100%");
        bm(a.j, "overflow-x", "hidden");
        bm(a.j, "overflow-y", "hidden");
        bm(a.l, "overflow-x", "hidden");
        bm(a.l, "overflow-y", "hidden")
    }

    function Xm(a) {
        am(a.j);
        am(a.l);
        const b = Wm(a.win);
        b.activePageScrollPreventers.delete(a);
        0 === b.activePageScrollPreventers.size && (a.win.scrollTo(0, b.previousWindowScroll || 0), b.previousWindowScroll = null);
        am(a.m)
    }
    var Um = class {
        constructor(a, b, c, d) {
            this.win = a;
            this.j = b;
            this.l = c;
            this.m = d
        }
    };

    function Wm(a) {
        return a.googPageScrollPreventerInfo = a.googPageScrollPreventerInfo || {
            previousWindowScroll: null,
            activePageScrollPreventers: new Set
        }
    };
    var Ym = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
    class Zm {
        constructor(a = 1) {
            this.j = a
        }
        next() {
            var a = 48271 * this.j % 2147483647;
            this.j = 0 > 2147483647 * a ? a + 2147483647 : a;
            return this.j / 2147483647
        }
    };

    function $m(a, b, c) {
        const d = [];
        for (const e of a.j) b(e) ? d.push(e) : c(e);
        return new an(d)
    }

    function bn(a) {
        return a.j.slice(0)
    }

    function cn(a, b = 1) {
        a = bn(a);
        const c = new Zm(b);
        Bb(a, () => c.next());
        return new an(a)
    }
    const an = class {
        constructor(a) {
            this.j = a.slice(0)
        }
        forEach(a) {
            this.j.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new an(nb(this.j, a))
        }
        apply(a) {
            return new an(a(bn(this)))
        }
        sort(a) {
            return new an(bn(this).sort(a))
        }
        get(a) {
            return this.j[a]
        }
        add(a) {
            const b = bn(this);
            b.push(a);
            return new an(b)
        }
    };
    class dn {
        constructor(a) {
            this.j = new Zl(a)
        }
        contains(a) {
            return this.j.contains(a)
        }
    };

    function en(a) {
        return new fn({
            value: a
        }, null)
    }

    function gn(a) {
        return new fn(null, Error(a))
    }

    function hn(a) {
        try {
            return en(a())
        } catch (b) {
            return new fn(null, b)
        }
    }

    function jn(a) {
        return null != a.j ? a.j.value : null
    }

    function kn(a, b) {
        null != a.j && b(a.j.value)
    }

    function ln(a, b) {
        null != a.j || b(a.l);
        return a
    }
    class fn {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        map(a) {
            return null != this.j ? (a = a(this.j.value), a instanceof fn ? a : en(a)) : this
        }
    };
    class mn {
        constructor() {
            this.j = new Yl
        }
        set(a, b) {
            let c = this.j.get(a);
            c || (c = new Zl, this.j.set(a, c));
            c.add(b)
        }
    };

    function nn(a) {
        return !a
    };
    var pn = class extends L {
            constructor(a) {
                super(a, -1, on)
            }
            getId() {
                return w(this, 3)
            }
        },
        on = [4];
    class qn {
        constructor(a, {
            Ed: b,
            Re: c,
            Gf: d,
            ze: e
        }) {
            this.A = a;
            this.m = c;
            this.v = new an(b || []);
            this.l = e;
            this.j = d
        }
    };
    var rn = a => {
            var b = a.split("~").filter(c => 0 < c.length);
            a = new Yl;
            for (const c of b) b = c.indexOf("."), -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        tn = a => {
            var b = sn(a);
            a = [];
            for (let c of b) b = String(c.nb), a.push(c.Oa + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const sn = a => {
            const b = [],
                c = a.v;
            c && c.j.length && b.push({
                Oa: "a",
                nb: un(c)
            });
            null != a.m && b.push({
                Oa: "as",
                nb: a.m
            });
            null != a.j && b.push({
                Oa: "i",
                nb: String(a.j)
            });
            null != a.l && b.push({
                Oa: "rp",
                nb: String(a.l)
            });
            b.sort(function(d, e) {
                return d.Oa.localeCompare(e.Oa)
            });
            b.unshift({
                Oa: "t",
                nb: vn(a.A)
            });
            return b
        },
        vn = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        un = a => {
            a = bn(a).map(wn);
            a = JSON.stringify(a);
            return Wg(a)
        },
        wn = a => {
            const b = {};
            null != w(a, 7) && (b.q = w(a, 7));
            null != w(a,
                2) && (b.o = w(a, 2));
            null != w(a, 5) && (b.p = w(a, 5));
            return b
        };

    function xn() {
        var a = new yn;
        return x(a, 2, 1)
    }
    var yn = class extends L {
        constructor(a) {
            super(a)
        }
        setLocation(a) {
            return x(this, 1, a)
        }
    };

    function zn(a) {
        const b = [].slice.call(arguments).filter(Sd(e => null === e));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.Id || []);
            d = Object.assign(d, e.yb())
        });
        return new An(c, d)
    }

    function Bn(a) {
        switch (a) {
            case 1:
                return new An(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new An(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new An(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new An(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function Cn(a) {
        return null == a ? null : new An(null, {
            google_ml_rank: a
        })
    }

    function Dn(a) {
        return null == a ? null : new An(null, {
            google_placement_id: tn(a)
        })
    }

    function En({
        nf: a,
        tf: b = null
    }) {
        if (null == a) return null;
        a = {
            google_daaos_ts: a
        };
        null != b && (a.google_erank = b + 1);
        return new An(null, a)
    }
    class An {
        constructor(a, b) {
            this.Id = a;
            this.j = b
        }
        yb() {
            return this.j
        }
    };
    var Fn = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var Gn = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var Hn = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var In = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var Kn = class extends L {
            constructor(a) {
                super(a, -1, Jn)
            }
            D() {
                return w(this, 2)
            }
            B() {
                return w(this, 5)
            }
            j() {
                return D(this, In, 3)
            }
            v() {
                return w(this, 4)
            }
            A() {
                return Vc(this, 6)
            }
            G() {
                return Rc(this, Hn, 7)
            }
        },
        Jn = [3];
    var Ln = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var Mn = class extends L {
        constructor(a) {
            super(a)
        }
        j() {
            return I(this, 18, !1)
        }
        A() {
            x(this, 18, !1)
        }
        v() {
            return I(this, 21, !1)
        }
    };
    var Nn = class extends L {
        constructor() {
            super()
        }
    };
    var On = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var Pn = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var Qn = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var Rn = class extends L {
        constructor(a) {
            super(a)
        }
        Y() {
            return C(this, pn, 1)
        }
        j() {
            return w(this, 2)
        }
    };
    var Sn = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var Tn = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var Un = class extends L {
            constructor(a) {
                super(a)
            }
            getName() {
                return w(this, 4)
            }
        },
        Vn = [1, 2, 3];
    var Xn = class extends L {
            constructor(a) {
                super(a, -1, Wn)
            }
        },
        Wn = [2, 5, 6, 11];
    var Yn = class extends L {
        constructor(a) {
            super(a)
        }
        j() {
            return y(this, 2)
        }
    };
    var Zn = class extends L {
        constructor(a) {
            super(a)
        }
        j() {
            return w(this, 1)
        }
    };
    var $n = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var ao = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var co = class extends L {
            constructor(a) {
                super(a, -1, bo)
            }
            j() {
                return C(this, ao, 2)
            }
        },
        bo = [1];
    var eo = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var fo = class extends L {
        constructor(a) {
            super(a)
        }
        j() {
            return G(this, 2)
        }
    };

    function go() {
        var a = new ho;
        a = x(a, 1, 1);
        var b = new eo;
        b = x(b, 2, !0);
        a = dd(a, 2, b);
        b = new co;
        var c = new $n;
        c = x(c, 1, 1);
        b = gd(b, 1, $n, c);
        c = new ao;
        c = x(c, 1, !0);
        b = dd(b, 2, c);
        return dd(a, 3, b)
    }
    var ho = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var io = class extends L {
        constructor(a) {
            super(a)
        }
        j() {
            return nd(this, 1)
        }
        v() {
            return G(this, 3)
        }
        A() {
            return G(this, 4)
        }
    };
    var jo = class extends L {
        constructor(a) {
            super(a)
        }
        j() {
            return jd(this, 1)
        }
    };
    var ko = class extends L {
        constructor(a) {
            super(a)
        }
        j() {
            return G(this, 1)
        }
        v() {
            return G(this, 2)
        }
    };
    var lo = class extends L {
        constructor(a) {
            super(a)
        }
        A() {
            return C(this, io, 8)
        }
        B() {
            return C(this, io, 9)
        }
        v() {
            return C(this, ko, 4)
        }
        j() {
            return C(this, jo, 5)
        }
        D() {
            return G(this, 10)
        }
    };
    var mo = class extends L {
        constructor(a) {
            super(a)
        }
        v() {
            return jd(this, 3)
        }
        D() {
            return I(this, 4)
        }
        G() {
            return I(this, 7)
        }
        B() {
            return C(this, ko, 5)
        }
        j() {
            return C(this, jo, 6)
        }
        A() {
            return G(this, 8)
        }
        H() {
            return I(this, 10)
        }
        I() {
            return I(this, 11)
        }
    };
    var oo = class extends L {
            constructor(a) {
                super(a, -1, no)
            }
        },
        no = [2];
    var po = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var ro = class extends L {
            constructor(a) {
                super(a, -1, qo)
            }
        },
        qo = [1];
    var so = class extends L {
        constructor(a) {
            super(a)
        }
        j() {
            return w(this, 1)
        }
    };
    var to = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var vo = class extends L {
            constructor(a) {
                super(a, -1, uo)
            }
            j() {
                return D(this, to, 1)
            }
        },
        uo = [1];
    var wo = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var yo = class extends L {
            constructor(a) {
                super(a, -1, xo)
            }
        },
        xo = [3, 4];
    var zo = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var Bo = class extends L {
            constructor(a) {
                super(a, -1, Ao)
            }
            Y() {
                return C(this, pn, 1)
            }
            j() {
                return w(this, 2)
            }
        },
        Ao = [6, 7, 9, 10, 11];
    var Do = class extends L {
            constructor(a) {
                super(a, -1, Co)
            }
        },
        Co = [4];
    var Eo = class extends L {
        constructor() {
            super()
        }
    };
    var Go = class extends L {
            constructor(a) {
                super(a, -1, Fo)
            }
        },
        Fo = [6];
    var Ho = class extends L {
        constructor(a) {
            super(a)
        }
        j() {
            return jd(this, 1)
        }
    };
    var Io = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var Ko = class extends L {
            constructor(a) {
                super(a)
            }
            j() {
                return qd(this, Io, 2, Jo)
            }
        },
        Jo = [1, 2];
    var Lo = class extends L {
        constructor(a) {
            super(a)
        }
        j() {
            return C(this, Ko, 3)
        }
    };
    var Mo = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var Oo = class extends L {
            constructor(a) {
                super(a, -1, No)
            }
            j() {
                return D(this, Mo, 1)
            }
        },
        No = [1];
    var Qo = class extends L {
            constructor(a) {
                super(a, -1, Po)
            }
            j() {
                return Wc(this, 1, Mc, !1)
            }
            v() {
                return C(this, Lo, 3)
            }
        },
        Po = [1, 4];

    function Ro(a) {
        return C(a, Gn, 13)
    }

    function So(a) {
        return C(a, mo, 28)
    }
    var Uo = Id(class extends L {
            constructor(a) {
                super(a, -1, To)
            }
            j() {
                return C(this, Mn, 15)
            }
        }),
        To = [1, 2, 5, 7];
    var Vo = class extends L {
            constructor(a) {
                super(a)
            }
        },
        Wo = Id(Vo);

    function Xo(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? Wo(b) : null
        } catch (b) {
            return null
        }
    }

    function Yo(a, b) {
        if (void 0 !== a.Ic) {
            let c = Xo(b);
            c || (c = new Vo);
            void 0 !== a.Ic && x(c, 2, a.Ic);
            x(c, 1, Da() + 864E5);
            a = Cd(c);
            try {
                b.localStorage.setItem("google_ama_settings", a)
            } catch (d) {}
        } else if ((a = Xo(b)) && w(a, 1) < Da()) try {
            b.localStorage.removeItem("google_ama_settings")
        } catch (c) {}
    };

    function Zo(a) {
        var b = [];
        Sl(a.getElementsByTagName("p"), function(c) {
            100 <= $o(c) && b.push(c)
        });
        return b
    }

    function $o(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        Sl(a.childNodes, function(c) {
            b += $o(c)
        });
        return b
    }

    function ap(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function bp(a, b) {
        if (null == a.j) return b;
        switch (a.j) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.j);
        }
    }
    const cp = class {
        constructor(a, b, c, d) {
            this.v = a;
            this.l = b;
            this.m = c;
            this.j = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.v)
            } catch (f) {}
            if (!b.length) return [];
            a = ub(b);
            a = bp(this, a);
            "number" === typeof this.l && (b = this.l, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
            if ("number" === typeof this.m) {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = Zo(a[c]),
                        e = this.m;
                    0 > e && (e += d.length);
                    0 <= e && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.v,
                occurrenceIndex: this.l,
                paragraphIndex: this.m,
                ignoreMode: this.j
            })
        }
    };

    function dp(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    }

    function ep(a) {
        return Tl(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };
    var S = class {
            constructor(a, b = !1) {
                this.j = a;
                this.defaultValue = b
            }
        },
        T = class {
            constructor(a, b = 0) {
                this.j = a;
                this.defaultValue = b
            }
        },
        fp = class {
            constructor(a) {
                this.j = a;
                this.defaultValue = ""
            }
        };
    var gp = new S(1082, !0),
        hp = new T(1130, 100),
        ip = new T(1126, 1E4),
        jp = new T(1032, 200),
        kp = new fp(14),
        lp = new S(1234),
        mp = new T(1224, .01),
        np = new T(1159, 500),
        op = new S(1122, !0),
        pp = new S(1226),
        qp = new S(1196),
        rp = new S(1160),
        sp = new S(316),
        tp = new S(334),
        up = new T(54),
        vp = new S(313),
        wp = new T(66, -1),
        xp = new T(65, -1),
        yp = new S(369),
        zp = new S(368),
        Ap = new S(1223),
        Bp = new S(1227),
        Cp = new T(1169, 61440),
        Dp = new S(1171, !0),
        Ep = new S(1235),
        Fp = new S(1151),
        Gp = new T(1072, .75),
        Hp = new T(1168, 61440),
        Ip = new S(290),
        Jp = new S(1222),
        Kp = new S(1225),
        Lp = new S(1147),
        Mp = new S(1210),
        Np = new T(506864295),
        Op = new T(508040914, 100),
        Pp = new S(506914611),
        Qp = new T(506871937),
        Rp = new S(483374575),
        Sp = new fp(1166),
        Tp = new S(1E4),
        Up = new T(472785970, 500),
        Vp = new S(447540096, !0),
        Wp = new S(83),
        Xp = new class {
            constructor(a, b = []) {
                this.j = a;
                this.defaultValue = b
            }
        }(472572701),
        Yp = new S(439828594),
        Zp = new S(483962503),
        $p = new S(506738118),
        aq = new S(506738119),
        bq = new S(77),
        cq = new S(78),
        dq = new S(309),
        eq = new S(80),
        fq = new S(76),
        gq = new S(1957, !0),
        hq = new S(380025941),
        iq = new S(84),
        jq = new S(1973),
        kq = new S(188),
        lq = new S(1975),
        mq = new S(1974),
        nq = new S(504787204),
        oq = new S(1162),
        pq = new S(1120),
        qq = new T(1142, 8),
        rq = new T(1158),
        sq = new T(501545963, 1),
        tq = new T(1157),
        uq = new S(494741144),
        vq = new T(1119, 300),
        wq = new T(1193, 100),
        xq = new S(501545960),
        yq = new T(1103),
        zq = new S(501545961),
        Aq = new S(505942137, !0),
        Bq = new S(45388034),
        Cq = new T(501545962, 1),
        Dq = new T(45388309, -1),
        Eq = new T(1114, 1),
        Fq = new T(1116, 300),
        Gq = new T(1108, 1E3),
        Hq = new S(491815314),
        Iq = new S(1121),
        Jq = new S(501545959, !0),
        Kq = new S(500169372),
        Lq = new S(45388161),
        Mq = new S(471262996),
        Nq = new S(504834127),
        Oq = new S(500922887),
        Pq = new S(472491850),
        Qq = new T(469675170, 3E4),
        Rq = new S(506619840),
        Sq = new S(506852289),
        Tq = new S(504535903),
        Uq = new S(502896280),
        Vq = new S(50227136),
        Wq = new S(1928),
        Xq = new S(1941),
        Yq = new S(370946349),
        Zq = new S(392736476),
        $q = new T(406149835),
        ar = new S(432946749),
        br = new S(432938498),
        cr = new T(1935),
        dr = new S(485990406);
    var er = class {
        constructor() {
            const a = {};
            this.j = (b, c) => null != a[b] ? a[b] : c;
            this.l = (b, c) => null != a[b] ? a[b] : c;
            this.m = (b, c) => null != a[b] ? a[b] : c;
            this.v = (b, c) => null != a[b] ? a[b] : c;
            this.A = () => {}
        }
    };

    function V(a) {
        return P(er).j(a.j, a.defaultValue)
    }

    function W(a) {
        return P(er).l(a.j, a.defaultValue)
    }

    function fr(a) {
        return P(er).m(a.j, a.defaultValue)
    };

    function gr(a, b) {
        a = (new rg(a)).createElement("DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function hr(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        dp(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function ir(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            dp(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var kr = (a, b, c, d = 0) => {
            var e = jr(b, c, d);
            if (e.init) {
                for (c = b = e.init; c = e.Ub(c);) b = c;
                e = {
                    anchor: b,
                    position: e.mc
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            hr(a, e.anchor, e.position)
        },
        lr = (a, b, c, d = 0) => {
            V(vp) ? kr(a, b, c, d) : hr(a, b, c)
        };

    function jr(a, b, c) {
        const d = f => {
                f = mr(f);
                return null == f ? !1 : c < f
            },
            e = f => {
                f = mr(f);
                return null == f ? !1 : c > f
            };
        switch (b) {
            case 0:
                return {
                    init: nr(a.previousSibling, d),
                    Ub: f => nr(f.previousSibling, d),
                    mc: 0
                };
            case 2:
                return {
                    init: nr(a.lastChild, d),
                    Ub: f => nr(f.previousSibling, d),
                    mc: 0
                };
            case 3:
                return {
                    init: nr(a.nextSibling, e),
                    Ub: f => nr(f.nextSibling, e),
                    mc: 3
                };
            case 1:
                return {
                    init: nr(a.firstChild, e),
                    Ub: f => nr(f.nextSibling, e),
                    mc: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function mr(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function nr(a, b) {
        return a && b(a) ? a : null
    };
    var or = (a, b = !1) => {
        try {
            return b ? (new jg(a.innerWidth, a.innerHeight)).round() : vg(a || window).round()
        } catch (c) {
            return new jg(-12245933, -12245933)
        }
    };

    function pr(a = t) {
        a = a.devicePixelRatio;
        return "number" === typeof a ? +a.toFixed(3) : null
    }

    function qr(a, b = t) {
        a = a.scrollingElement || ("CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return new ig(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function rr(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };

    function sr(a) {
        -1 === a.l && (a.l = pb(a.j, (b, c, d) => c ? b + 2 ** d : b, 0));
        return a.l
    }
    class tr {
        constructor() {
            this.j = [];
            this.l = -1
        }
        set(a, b = !0) {
            0 <= a && 52 > a && Number.isInteger(a) && this.j[a] !== b && (this.j[a] = b, this.l = -1)
        }
        get(a) {
            return !!this.j[a]
        }
    };
    var ur = (a, b, c) => {
        b = b || a.google_ad_width;
        c = c || a.google_ad_height;
        if (a && a.top == a) return !1;
        const d = a.document,
            e = d.documentElement;
        if (b && c) {
            let f = 1,
                g = 1;
            a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : d.body && (f = d.body.clientWidth, g = d.body.clientHeight);
            if (g > 2 * c || f > 2 * b) return !1
        }
        return !0
    };

    function vr(a, b) {
        Ug(a, (c, d) => {
            b[d] = c
        })
    }
    var wr = a => {
            let b = a.location.href;
            if (a == a.top) return {
                url: b,
                Rc: !0
            };
            let c = !1;
            const d = a.document;
            d && d.referrer && (b = d.referrer, a.parent == a.top && (c = !0));
            (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 == b.indexOf(a) && (c = !1, b = a);
            return {
                url: b,
                Rc: c
            }
        },
        xr = a => {
            if (a == a.top) return 0;
            for (; a && a != a.top && Mg(a); a = a.parent) {
                if (a.sf_) return 2;
                if (a.$sf) return 3;
                if (a.inGptIF) return 4;
                if (a.inDapIF) return 5
            }
            return 1
        };
    var yr = (a, b) => {
            try {
                const c = b.document.documentElement.getBoundingClientRect(),
                    d = a.getBoundingClientRect();
                return {
                    x: d.left - c.left,
                    y: d.top - c.top
                }
            } catch (c) {
                return null
            }
        },
        zr = (a, b) => {
            const c = 40 === a.google_reactive_ad_format,
                d = 16 === a.google_reactive_ad_format;
            return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b === b.top
        },
        Ar = (a, b, c) => {
            a = a.style;
            "rtl" == b ? a.marginRight = c : a.marginLeft = c
        };
    const Br = (a, b, c) => {
        a = yr(b, a);
        return "rtl" == c ? -a.x : a.x
    };
    var Cr = (a, b) => {
            b = b.parentElement;
            return b ? (a = Sg(b, a)) ? a.direction : "" : ""
        },
        Dr = (a, b, c) => {
            if (0 === Br(a, b, c)) return !1;
            Ar(b, c, "0px");
            const d = Br(a, b, c);
            Ar(b, c, -1 * d + "px");
            a = Br(a, b, c);
            0 !== a && a !== d && Ar(b, c, d / (a - d) * d + "px");
            return !0
        };
    const Er = RegExp("(^| )adsbygoogle($| )");

    function Fr(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = og(d.dd);
            a[e] = d.value
        }
    }

    function Gr(a, b, c, d, e, f) {
        a = Hr(a, e);
        a.va.setAttribute("data-ad-format", d ? d : "auto");
        Ir(a, b, c, f);
        return a
    }

    function Jr(a, b, c = null) {
        a = Hr(a, {});
        Ir(a, b, null, c);
        return a
    }

    function Ir(a, b, c, d) {
        var e = [];
        if (d = d && d.Id) a.Ua.className = d.join(" ");
        a = a.va;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function Hr(a, b) {
        const c = gr(a, b.clearBoth || !1);
        var d = c.style;
        d.textAlign = "center";
        b.lc && Fr(d, b.lc);
        a = (new rg(a)).createElement("INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.ud && (d.marginTop = b.ud);
        b.Bc && (d.marginBottom = b.Bc);
        b.lb && Fr(d, b.lb);
        c.appendChild(a);
        return {
            Ua: c,
            va: a
        }
    }

    function Kr(a, b, c) {
        b.dataset.adsbygoogleStatus = "reserved";
        b.className += " adsbygoogle-noablate";
        const d = {
            element: b
        };
        c = c && c.yb();
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }

    function Lr(a) {
        const b = ep(a.document);
        mb(b, function(c) {
            const d = Mr(a, c);
            var e;
            if (e = d) e = yr(c, a), e = !((e ? e.y : 0) < Q(a).clientHeight);
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), Kr(a, c))
        })
    }

    function Mr(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (let c in ag) a[ag[c]] && (b[ag[c]] = a[ag[c]]);
        return b
    };
    class Nr {
        constructor() {
            var a = O `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.j = null;
            this.l = !1;
            this.v = Math.random();
            this.m = this.la;
            this.B = a
        }
        kd(a) {
            this.j = a
        }
        A(a) {
            this.l = a
        }
        la(a, b, c = .01, d, e = "jserror") {
            if ((this.l ? this.v : Math.random()) > c) return !1;
            b.error && b.meta && b.id || (b = new pi(b, {
                context: a,
                id: e
            }));
            if (d || this.j) b.meta = {}, this.j && this.j(b.meta), d && d(b.meta);
            t.google_js_errors = t.google_js_errors || [];
            t.google_js_errors.push(b);
            t.error_rep_loaded || (Qg(t.document, this.B), t.error_rep_loaded = !0);
            return !1
        }
        Db(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.m(a, d, .01, c, "jserror")) throw d;
            }
        }
        ta(a, b, c, d) {
            return (...e) => this.Db(a, () => b.apply(c, e), d)
        }
        Aa(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.la(a, d instanceof Error ? d : Error(d), void 0, c || this.j || void 0)
            })
        }
    };
    const Or = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    var Pr = (a, b, c, d) => {
            const e = d || window,
                f = "undefined" !== typeof queueMicrotask;
            return function() {
                f && queueMicrotask(() => {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                const g = Ki();
                let h, k = 3;
                try {
                    h = b.apply(this, arguments)
                } catch (l) {
                    k = 13;
                    if (!c) throw l;
                    c(a, l)
                } finally {
                    e.google_measure_js_timing && g && Or({
                        label: a.toString(),
                        value: g,
                        duration: (Ki() || 0) - g,
                        type: k,
                        ...(f && {
                            taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                        })
                    }, e)
                }
                return h
            }
        },
        Qr = (a, b) => Pr(754,
            a, (c, d) => {
                (new Nr).la(c, d)
            }, b);

    function Rr(a, b, c) {
        return Pr(a, b, void 0, c).apply()
    }

    function Sr(a, b) {
        return Qr(a, b).apply()
    }

    function Tr(a) {
        if (!a) return null;
        var b = w(a, 7);
        if (w(a, 1) || a.getId() || 0 < Wc(a, 4, Mc, !1).length) {
            b = Wc(a, 4, Mc, !1);
            var c = w(a, 3),
                d = w(a, 1),
                e = "";
            d && (e += d);
            c && (e += "#" + ap(c));
            if (b)
                for (c = 0; c < b.length; c++) e += "." + ap(b[c]);
            a = (b = e) ? new cp(b, w(a, 2), w(a, 5), Ur(w(a, 6))) : null
        } else a = b ? new cp(b, w(a, 2), w(a, 5), Ur(w(a, 6))) : null;
        return a
    }
    var Vr = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Ur(a) {
        return null == a ? a : Vr[a]
    }

    function Wr(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = w(a[c], 1),
                e = w(a[c], 2);
            if (d && null != e) {
                var f = {};
                f.dd = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function Xr(a, b) {
        var c = {};
        a && (c.ud = w(a, 1), c.Bc = w(a, 2), c.clearBoth = !!y(a, 3));
        b && (c.lc = Wr(D(b, wo, 3)), c.lb = Wr(D(b, wo, 4)));
        return c
    }
    var Yr = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        Zr = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    var $r = {
            qa: "ama_success",
            ma: .1,
            na: !0
        },
        as = {
            qa: "ama_failure",
            ma: .1,
            na: !0
        },
        bs = {
            qa: "ama_inf_scr",
            ma: .1,
            na: !0
        },
        cs = {
            qa: "ama_inf_scr",
            ma: .1,
            na: !0
        },
        ds = {
            qa: "ama_coverage",
            ma: .1,
            na: !0
        },
        es = {
            qa: "ama_inf_scr",
            ma: 1,
            na: !0
        },
        fs = {
            qa: "ama_opt",
            ma: .1,
            na: !0
        },
        gs = {
            qa: "ama_aud_sen",
            ma: 1,
            na: !0
        },
        hs = {
            qa: "ama_auto_rs",
            ma: 1,
            na: !0
        },
        is = {
            qa: "ama_auto_prose",
            ma: 1,
            na: !0
        },
        js = {
            qa: "ama_improv",
            ma: .1,
            na: !0
        };

    function ks(a, b) {
        for (var c = 0; c < b.length; c++) a.wa(b[c]);
        return a
    }

    function ls(a, b) {
        a.m = a.m ? a.m : b;
        return a
    }
    class ms {
        constructor(a) {
            this.C = {};
            this.C.c = a;
            this.A = [];
            this.m = null;
            this.B = [];
            this.G = 0
        }
        Na(a) {
            this.C.wpc = a;
            return this
        }
        wa(a) {
            for (var b = 0; b < this.A.length; b++)
                if (this.A[b] == a) return this;
            this.A.push(a);
            return this
        }
        v(a) {
            var b = fe(this.C);
            0 < this.G && (b.t = this.G);
            b.err = this.A.join();
            b.warn = this.B.join();
            this.m && (b.excp_n = this.m.name, b.excp_m = this.m.message && this.m.message.substring(0, 512), b.excp_s = this.m.stack && Ui(this.m.stack, ""));
            b.w = 0 < a.innerWidth ? a.innerWidth : null;
            b.h = 0 < a.innerHeight ? a.innerHeight : null;
            return b
        }
    };

    function ns(a, b, c) {
        !b.na || "pvc" in c || (c.pvc = sh(a.j));
        Uk(b.qa, c, b.ma)
    }

    function os(a, b, c) {
        c = c.v(a.j);
        b.na && (c.pvc = sh(a.j));
        0 < b.ma && (c.r = b.ma, ns(a, b, c))
    }
    var ps = class {
        constructor(a) {
            this.j = a
        }
    };

    function qs(a, b, c) {
        var d = a.m,
            e = Q(a.j).clientHeight,
            f = C(a.l, fo, 4) ? .j();
        a = a.j;
        a = a.google_ama_state = a.google_ama_state || {};
        ns(d, gs, { ...c,
            evt: b,
            vh: e,
            eid: f,
            psr: a.audioSenseSpaceReserved ? 1 : 0
        })
    }
    var rs = class {
        constructor(a, b, c) {
            this.j = a;
            this.m = b;
            this.l = c
        }
    };
    const ss = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            return Gr(d.document, a, null, null, this.j, b)
        }
        m() {
            return null
        }
    };
    const ts = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            var e = 0 < D(this.j, yo, 9).length ? D(this.j, yo, 9)[0] : null,
                f = Xr(C(this.j, zo, 3), e);
            if (!e) return null;
            if (e = w(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = (new rg(d)).createElement(g);
                c.style.clear = f.clearBoth ? "both" : "none";
                "A" == g && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.lc && Fr(c.style, f.lc);
                d = (new rg(d)).createElement("INS");
                f.lb && Fr(d.style, f.lb);
                c.appendChild(d);
                f = {
                    Ua: c,
                    va: d
                };
                f.va.setAttribute("data-ad-type", "text");
                f.va.setAttribute("data-native-settings-key",
                    e);
                Ir(f, a, null, b);
                a = f
            } else a = null;
            return a
        }
        m() {
            var a = 0 < D(this.j, yo, 9).length ? D(this.j, yo, 9)[0] : null;
            if (!a) return null;
            a = D(a, wo, 3);
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if ("height" == w(c, 1) && 0 < parseInt(w(c, 2), 10)) return parseInt(w(c, 2), 10)
            }
            return null
        }
    };
    const us = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            if (!this.j) return null;
            const e = this.j.google_ad_format || null,
                f = this.j.google_ad_slot || null;
            if (c = c.style) {
                var g = [];
                for (let h = 0; h < c.length; h++) {
                    const k = c.item(h);
                    "width" !== k && "height" !== k && g.push({
                        dd: k,
                        value: c.getPropertyValue(k)
                    })
                }
                c = {
                    lb: g
                }
            } else c = {};
            a = Gr(d.document, a, f, e, c, b);
            a.va.setAttribute("data-pub-vars", JSON.stringify(this.j));
            return a
        }
        m() {
            return this.j ? parseInt(this.j.google_ad_height, 10) || null : null
        }
        yb() {
            return this.j
        }
    };
    class vs {
        constructor(a) {
            this.l = a
        }
        j() {
            return new An([], {
                google_ad_type: this.l,
                google_reactive_ad_format: 26,
                google_ad_format: "fluid"
            })
        }
    };
    const ws = class {
        constructor(a, b) {
            this.v = a;
            this.m = b
        }
        j() {
            return this.m
        }
        l(a) {
            a = this.v.query(a.document);
            return 0 < a.length ? a[0] : null
        }
    };

    function xs(a, b, c) {
        const d = [];
        for (let r = 0; r < a.length; r++) {
            var e = a[r];
            var f = r,
                g = b,
                h = c,
                k = e.Y();
            if (k) {
                var l = Tr(k);
                if (l) {
                    var m = Yr[w(e, 2)],
                        n = void 0 === m ? null : m;
                    if (null === n) e = null;
                    else {
                        m = (m = C(e, zo, 3)) ? y(m, 3) : null;
                        l = new ws(l, n);
                        n = Uc(e, 10).slice(0);
                        null != w(k, 5) && n.push(1);
                        var q = h ? h : {};
                        h = w(e, 12);
                        k = Rc(e, yn, 4) ? C(e, yn, 4) : null;
                        1 == w(e, 8) ? (q = q.df || null, e = new ys(l, new ss(Xr(C(e, zo, 3), null)), q, m, 0, n, k, g, f, h, e)) : e = 2 == w(e, 8) ? new ys(l, new ts(e), q.Hf || new vs("text"), m, 1, n, k, g, f, h, e) : null
                    }
                } else e = null
            } else e = null;
            null !==
                e && d.push(e)
        }
        return d
    }

    function zs(a) {
        return a.A
    }

    function As(a) {
        return a.ua
    }

    function Bs(a) {
        return V(qp) ? (a.K || (a.K = a.G.l(a.m)), a.K) : a.G.l(a.m)
    }

    function Cs(a) {
        var b = a.H;
        a = a.m.document.createElement("div");
        V(qp) ? a.className = "google-auto-placed-ad-placeholder" : a.className = "google-auto-placed";
        var c = a.style;
        c.textAlign = "center";
        c.width = "100%";
        c.height = "0px";
        c.clear = b ? "both" : "none";
        return a
    }

    function Ds(a) {
        return a.C instanceof us ? a.C.yb() : null
    }

    function Es(a, b, c) {
        Ul(a.I, b) || a.I.set(b, []);
        a.I.get(b).push(c)
    }

    function Fs(a, b) {
        a.A = !0;
        V(qp) && (a.l && ir(a.l), a.l = null);
        null != b && a.N.push(b)
    }

    function Gs(a) {
        return gr(a.m.document, a.H || !1)
    }

    function Hs(a) {
        return a.C.m(a.m)
    }

    function Is(a, b = null, c = null) {
        return new ys(a.G, b || a.C, c || a.L, a.H, a.Ya, a.ec, a.sc, a.m, a.da, a.D, a.v, a.B, a.T)
    }
    class ys {
        constructor(a, b, c, d, e, f, g, h, k, l = null, m = null, n = null, q = null) {
            this.G = a;
            this.C = b;
            this.L = c;
            this.H = d;
            this.Ya = e;
            this.ec = f;
            this.sc = g ? g : new yn;
            this.m = h;
            this.da = k;
            this.D = l;
            this.v = m;
            if (!(a = !m)) {
                if (a = m.Y()) m = m.Y(), a = null != w(m, 5);
                a = !a
            }
            this.ua = !a;
            this.B = n;
            this.T = q;
            this.N = [];
            this.A = !1;
            this.I = new Yl;
            this.K = this.l = null
        }
        R() {
            return this.m
        }
        j() {
            return this.G.j()
        }
    };
    var Js = a => a ? .google_ad_slot ? en(new qn(1, {
            Re: a.google_ad_slot
        })) : gn("Missing dimension when creating placement id"),
        Ls = a => {
            switch (a.Ya) {
                case 0:
                case 1:
                    var b = a.v;
                    null == b ? a = null : (a = b.Y(), null == a ? a = null : (b = w(b, 2), a = null == b ? null : new qn(0, {
                        Ed: [a],
                        ze: b
                    })));
                    return null != a ? en(a) : gn("Missing dimension when creating placement id");
                case 2:
                    return a = Ks(a), null != a ? en(a) : gn("Missing dimension when creating placement id");
                default:
                    return gn("Invalid type: " + a.Ya)
            }
        };
    const Ks = a => {
        if (null == a || null == a.B) return null;
        const b = C(a.B, pn, 1),
            c = C(a.B, pn, 2);
        if (null == b || null == c) return null;
        const d = a.T;
        if (null == d) return null;
        a = a.j();
        return null == a ? null : new qn(0, {
            Ed: [b, c],
            Gf: d,
            ze: Zr[a]
        })
    };

    function Ms(a) {
        const b = Ds(a.V);
        return (b ? Js(b) : Ls(a.V)).map(c => tn(c))
    }

    function Ns(a) {
        a.j = a.j || Ms(a);
        return a.j
    }

    function Os(a, b) {
        if (a.V.A) throw Error("AMA:AP:AP");
        lr(b, a.Y(), a.V.j());
        Fs(a.V, b)
    }
    const Ps = class {
        constructor(a, b, c) {
            this.V = a;
            this.l = b;
            this.ba = c;
            this.j = null
        }
        Y() {
            return this.l
        }
        fill(a, b) {
            var c = this.V;
            (a = c.C.l(a, b, this.l, c.m)) && Os(this, a.Ua);
            return a
        }
    };
    const Qs = (a, b) => {
        if (3 == b.nodeType) return 3 == b.nodeType ? (b = b.data, a = $a(b, "&") ? lg(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (1 == b.nodeType) {
            var c = a.getComputedStyle(b);
            if ("0" == c.opacity || "none" == c.display || "hidden" == c.visibility) return !1;
            if ((c = b.tagName) && $l.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (Qs(a, b[c])) return !0
        }
        return !1
    };
    var Rs = a => {
        if (460 <= a) return a = Math.min(a, 1200), Math.ceil(800 > a ? a / 4 : 200);
        a = Math.min(a, 600);
        return 420 >= a ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    };
    const Ss = class {
        constructor() {
            this.j = {
                clearBoth: !0
            }
        }
        l(a, b, c, d) {
            return Gr(d.document, a, null, null, this.j, b)
        }
        m(a) {
            return Rs(Math.min(a.screen.width || 0, a.screen.height || 0))
        }
    };
    class Ts {
        constructor(a) {
            this.l = a
        }
        j(a) {
            a = Math.floor(a.l);
            const b = Rs(a);
            return new An(["ap_container"], {
                google_reactive_ad_format: 27,
                google_responsive_auto_format: 16,
                google_max_num_ads: 1,
                google_ad_type: this.l,
                google_ad_format: a + "x" + b,
                google_ad_width: a,
                google_ad_height: b
            })
        }
    };
    const Us = class {
        constructor(a, b) {
            this.v = a;
            this.m = b
        }
        l() {
            return this.v
        }
        j() {
            return this.m
        }
    };
    const Vs = {
        TABLE: {
            rb: new dn([1, 2])
        },
        THEAD: {
            rb: new dn([0, 3, 1, 2])
        },
        TBODY: {
            rb: new dn([0, 3, 1, 2])
        },
        TR: {
            rb: new dn([0, 3, 1, 2])
        },
        TD: {
            rb: new dn([0, 3])
        }
    };

    function Ws(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c) c = lb(e, f), 0 > c || b.push(new Xs(a, [f], c, f, 3, Eg(f).trim(), d));
        return b
    }

    function Ys(a, b, c) {
        let d = [];
        const e = [],
            f = b.childNodes,
            g = f.length;
        let h = 0,
            k = "";
        for (let n = 0; n < g; n++) {
            var l = f[n];
            if (1 == l.nodeType || 3 == l.nodeType) {
                a: {
                    var m = l;
                    if (1 != m.nodeType) {
                        m = null;
                        break a
                    }
                    if ("BR" == m.tagName) break a;
                    const q = c.getComputedStyle(m).getPropertyValue("display");m = "inline" == q || "inline-block" == q ? null : m
                }
                m ? (d.length && k && e.push(new Xs(a, d, n - 1, m, 0, k, c)), d = [], h = n + 1, k = "") : (d.push(l), l = Eg(l).trim(), k += l && k ? " " + l : l)
            }
        }
        d.length && k && e.push(new Xs(a, d, h, b, 2, k, c));
        return e
    }

    function Zs(a, b) {
        return a.j - b.j
    }

    function $s(a) {
        const b = xn();
        return new ys(new Us(a.uc, a.vc), new ss({
            clearBoth: !0
        }), null, !0, 2, [], b, a.l, null, null, null, a.m, a.j)
    }
    class Xs {
        constructor(a, b, c, d, e, f, g) {
            this.m = a;
            this.ob = b.slice(0);
            this.j = c;
            this.uc = d;
            this.vc = e;
            this.v = f;
            this.l = g
        }
        R() {
            return this.l
        }
    };

    function at(a) {
        return tb(a.A ? Ys(a.l, a.j, a.m) : [], a.v ? Ws(a.l, a.v, a.j, a.m) : []).filter(b => {
            var c = b.uc.tagName;
            c ? (c = Vs[c.toUpperCase()], b = null != c && c.rb.contains(b.vc)) : b = !1;
            return !b
        })
    }
    class bt {
        constructor(a, b, c) {
            this.j = a;
            this.v = b.Qb;
            this.A = b.Rd;
            this.l = b.articleStructure;
            this.m = c
        }
    };

    function ct(a, b) {
        return Sr(() => {
            if (V(qp)) {
                var c = [],
                    d = [];
                for (var e = 0; e < a.length; e++) {
                    var f = a[e],
                        g = Bs(f);
                    if (g) {
                        var h = f;
                        if (!h.l && !h.A) {
                            var k = h;
                            var l = h,
                                m = null;
                            try {
                                var n = Bs(l);
                                if (n) {
                                    m = Cs(l);
                                    lr(m, n, l.j());
                                    var q = m
                                } else q = null
                            } catch (A) {
                                throw ir(m), A;
                            }
                            k.l = q
                        }(h = h.l) && d.push({
                            Xf: f,
                            anchorElement: g,
                            vf: h
                        })
                    }
                }
                if (0 < d.length)
                    for (q = Ol(b), n = Pl(b), e = 0; e < d.length; e++) {
                        const {
                            Xf: A,
                            anchorElement: z,
                            vf: B
                        } = d[e];
                        f = dt(B, n, q);
                        c.push(new Ps(A, z, f))
                    }
                q = c
            } else {
                q = [];
                n = [];
                try {
                    const A = [];
                    for (let z = 0; z < a.length; z++) {
                        var r = a[z],
                            u = Bs(r);
                        u && A.push({
                            ve: r,
                            anchorElement: u
                        })
                    }
                    for (u = 0; u < A.length; u++) {
                        r = n;
                        g = r.push; {
                            k = A[u];
                            l = k.anchorElement;
                            m = k.ve;
                            const z = Cs(m);
                            try {
                                lr(z, l, m.j()), h = z
                            } catch (B) {
                                throw ir(z), B;
                            }
                        }
                        g.call(r, h)
                    }
                    c = Ol(b);
                    d = Pl(b);
                    for (g = 0; g < n.length; g++) e = dt(n[g], d, c), f = A[g], q.push(new Ps(f.ve, f.anchorElement, e))
                } finally {
                    for (c = 0; c < n.length; c++) ir(n[c])
                }
            }
            return q
        }, b)
    }

    function dt(a, b, c) {
        a = a.getBoundingClientRect();
        return new Nm(a.left + b, a.top + c, a.right - a.left)
    };

    function et(a, b) {
        const c = at(b);
        c.sort(Zs);
        return new ft(a, b, c)
    }

    function gt(a, b, c) {
        return new ys(new Us(b, c), new ss({}), null, !0, 2, [], null, a.j, null, null, null, a.A.l, null)
    }
    var ft = class {
        constructor(a, b, c) {
            this.j = a;
            this.A = b;
            this.v = c;
            this.l = !1;
            this.m = 0
        }
        next() {
            if (!this.l) {
                if (this.m >= this.v.length) var a = null;
                else {
                    {
                        const b = this.v[this.m++].ob[0];
                        ta(b) && 1 == b.nodeType ? a = gt(this, b, 0) : (a = this.j.document.createElement("div"), N(a, {
                            display: "none"
                        }), b.parentNode.insertBefore(a, b), a = gt(this, a, 3))
                    }
                    a = ct([a], this.j)[0] || null
                }
                if (a) return a;
                this.l = !0
            }
            return null
        }
    };
    var ht = class {
        constructor(a) {
            this.l = a
        }
        j() {
            return this.l.next()
        }
    };
    const it = {
            1: "0.5vp",
            2: "300px"
        },
        jt = {
            1: 700,
            2: 1200
        },
        kt = {
            [1]: {
                Fe: "3vp",
                qd: "1vp",
                Ee: "0.3vp"
            },
            [2]: {
                Fe: "900px",
                qd: "300px",
                Ee: "90px"
            }
        };

    function lt(a, b, c) {
        var d = mt(a),
            e = Q(a).clientHeight || jt[d],
            f = void 0;
        c && (f = (c = (c = nt(D(c, Kn, 2), d)) ? C(c, Hn, 7) : void 0) ? ot(c, e) : void 0);
        c = f;
        f = mt(a);
        a = Q(a).clientHeight || jt[f];
        const g = pt(kt[f].qd, a);
        a = null === g ? qt(f, a) : new rt(g, g, st(g, g, 8), 8, .3, c);
        c = pt(kt[d].Fe, e);
        f = pt(kt[d].qd, e);
        e = pt(kt[d].Ee, e);
        d = a.m;
        c && e && f && void 0 !== b && (d = .5 >= b ? f + (1 - 2 * b) * (c - f) : e + (2 - 2 * b) * (f - e));
        b = d;
        return new rt(d, b, st(d, b, a.l), a.l, a.v, a.j)
    }

    function tt(a, b) {
        const c = mt(a);
        a = Q(a).clientHeight || jt[c];
        if (b = nt(D(b, Kn, 2), c))
            if (b = ut(b, a)) return b;
        return qt(c, a)
    }

    function vt(a) {
        const b = mt(a);
        return qt(b, Q(a).clientHeight || jt[b])
    }

    function wt(a, b) {
        let c = {
            ic: a.m,
            gb: a.A
        };
        for (let d of a.B) d.adCount <= b && (c = d.pd);
        return c
    }

    function xt(a, b, c) {
        var d = y(b, 2);
        b = C(b, Kn, 1);
        const e = Q(c).clientHeight || jt[mt(c)];
        c = pt(b ? .D(), e) ? ? a.m;
        const f = pt(b ? .B(), e) ? ? a.A;
        d = d ? [] : yt(b ? .j(), e) ? ? a.B;
        const g = b ? .v() ? ? a.l,
            h = b ? .A() ? ? a.v;
        a = (b ? .G() ? ot(C(b, Hn, 7), e) : null) ? ? a.j;
        return new rt(c, f, d, g, h, a)
    }
    class rt {
        constructor(a, b, c, d, e, f) {
            this.m = a;
            this.A = b;
            this.B = c.sort((g, h) => g.adCount - h.adCount);
            this.l = d;
            this.v = e;
            this.j = f
        }
    }

    function nt(a, b) {
        for (let c of a)
            if (w(c, 1) == b) return c;
        return null
    }

    function yt(a, b) {
        if (void 0 === a) return null;
        const c = [];
        for (let d of a) {
            a = w(d, 1);
            const e = pt(w(d, 2), b);
            if ("number" !== typeof a || null === e) return null;
            c.push({
                adCount: a,
                pd: {
                    ic: e,
                    gb: pt(w(d, 3), b)
                }
            })
        }
        return c
    }

    function ut(a, b) {
        const c = pt(w(a, 2), b),
            d = pt(w(a, 5), b);
        if (null === c) return null;
        const e = w(a, 4);
        if (null == e) return null;
        var f = a.j();
        f = yt(f, b);
        if (null === f) return null;
        const g = C(a, Hn, 7);
        b = g ? ot(g, b) : void 0;
        return new rt(c, d, f, e, Vc(a, 6), b)
    }

    function qt(a, b) {
        a = pt(it[a], b);
        return new rt(null === a ? Infinity : a, null, [], 3, null)
    }

    function pt(a, b) {
        if (!a) return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }

    function mt(a) {
        a = 900 <= Q(a).clientWidth;
        return Jg() && !a ? 1 : 2
    }

    function st(a, b, c) {
        if (4 > c) return [];
        const d = Math.ceil(c / 2);
        return [{
            adCount: d,
            pd: {
                ic: 2 * a,
                gb: 2 * b
            }
        }, {
            adCount: d + Math.ceil((c - d) / 2),
            pd: {
                ic: 3 * a,
                gb: 3 * b
            }
        }]
    }

    function ot(a, b) {
        return {
            je: pt(w(a, 2), b) || 0,
            he: w(a, 3) || 1,
            mb: pt(w(a, 1), b) || 0
        }
    };

    function zt(a, b, c) {
        return yl({
            top: a.j.top - (c + 1),
            right: a.j.right + (c + 1),
            bottom: a.j.bottom + (c + 1),
            left: a.j.left - (c + 1)
        }, b.j)
    }

    function At(a) {
        if (!a.length) return null;
        const b = zl(a.map(c => c.j));
        a = a.reduce((c, d) => c + d.l, 0);
        return new Bt(b, a)
    }
    class Bt {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };

    function Ct(a = window) {
        a = a.googletag;
        return a ? .apiReady ? a : void 0
    };
    var It = (a, b) => {
        const c = ub(b.document.querySelectorAll(".google-auto-placed")),
            d = Dt(b),
            e = Et(b),
            f = Ft(b),
            g = Gt(b),
            h = ub(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            k = ub(b.document.querySelectorAll("div.googlepublisherpluginad")),
            l = ub(b.document.querySelectorAll("html > ins.adsbygoogle"));
        let m = [].concat(ub(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), ub(b.document.querySelectorAll("body ins.adsbygoogle")));
        b = [];
        for (const [n, q] of [
                [a.Vb, c],
                [a.Xa, d],
                [a.Ef, e],
                [a.Wb, f],
                [a.Xb, g],
                [a.Cf, h],
                [a.Df, k],
                [a.Ff, l]
            ]) a = q, !1 === n ? b = b.concat(a) : m = m.concat(a);
        a = Ht(m);
        b = Ht(b);
        a = a.slice(0);
        for (const n of b)
            for (b = 0; b < a.length; b++)(n.contains(a[b]) || a[b].contains(n)) && a.splice(b, 1);
        return a
    };
    const Jt = a => {
            const b = Ct(a);
            return b ? nb(ob(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null
        },
        Dt = a => ub(a.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]")),
        Et = a => ub(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")),
        Ft = a => (Jt(a) || ub(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(ub(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))),
        Gt = a => ub(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var Ht = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };
    var Kt = Qk.ta(453, It),
        Lt;
    Lt = Qk.ta(454, (a, b) => {
        const c = ub(b.document.querySelectorAll(".google-auto-placed")),
            d = Dt(b),
            e = Et(b),
            f = Ft(b),
            g = Gt(b),
            h = ub(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            k = ub(b.document.querySelectorAll("div.googlepublisherpluginad"));
        b = ub(b.document.querySelectorAll("html > ins.adsbygoogle"));
        return Ht([].concat(!0 === a.Vb ? c : [], !0 === a.Xa ? d : [], !0 === a.Ef ? e : [], !0 === a.Wb ? f : [], !0 === a.Xb ? g : [], !0 === a.Cf ? h : [], !0 === a.Df ? k : [], !0 === a.Ff ? b : []))
    });

    function Mt(a, b, c) {
        const d = Nt(a);
        b = Ot(d, b, c);
        return new Pt(a, d, b)
    }

    function Qt(a) {
        return 1 < (a.bottom - a.top) * (a.right - a.left)
    }

    function Rt(a) {
        return a.j.map(b => b.box)
    }

    function St(a) {
        return a.j.reduce((b, c) => b + c.box.bottom - c.box.top, 0)
    }
    class Pt {
        constructor(a, b, c) {
            this.m = a;
            this.j = b.slice(0);
            this.v = c.slice(0);
            this.l = null
        }
    }

    function Nt(a) {
        const b = Kt({
                Xa: !1
            }, a),
            c = Pl(a),
            d = Ol(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = !!e.className && $a(e.className, "google-auto-placed")) || Qt(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                uk: e ? 1 : 0
            } : null
        }).filter(Sd(e => null === e))
    }

    function Ot(a, b, c) {
        return void 0 != b && a.length <= (void 0 != c ? c : 8) ? Tt(a, b) : ob(a, d => new Bt(d.box, 1))
    }

    function Tt(a, b) {
        a = ob(a, d => new Bt(d.box, 1));
        const c = [];
        for (; 0 < a.length;) {
            let d = a.pop(),
                e = !0;
            for (; e;) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (zt(d, a[f], b)) {
                        d = At([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function Ut(a, b, c) {
        const d = Mm(c, b);
        return !qb(a, e => yl(e, d))
    }

    function Vt(a, b, c, d, e) {
        e = e.ba;
        const f = Mm(e, b),
            g = Mm(e, c),
            h = Mm(e, d);
        return !qb(a, k => yl(k, g) || yl(k, f) && !yl(k, h))
    }

    function Wt(a, b, c, d) {
        const e = Rt(a);
        if (Ut(e, b, d.ba)) return !0;
        if (!Vt(e, b, c.je, c.mb, d)) return !1;
        const f = new Bt(Mm(d.ba, 0), 1);
        a = nb(a.v, g => zt(g, f, c.mb));
        b = pb(a, (g, h) => g + h.l, 1);
        return 0 === a.length || b > c.he ? !1 : !0
    };
    var Xt = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function Yt(a, b) {
        const c = new mn,
            d = new Zl;
        b.forEach(e => {
            if (qd(e, Sn, 1, Vn)) {
                e = qd(e, Sn, 1, Vn);
                if (C(e, Rn, 1) && C(e, Rn, 1).Y() && C(e, Rn, 2) && C(e, Rn, 2).Y()) {
                    const g = Zt(a, C(e, Rn, 1).Y()),
                        h = Zt(a, C(e, Rn, 2).Y());
                    if (g && h)
                        for (var f of Xt({
                                anchor: g,
                                position: w(C(e, Rn, 1), 2)
                            }, {
                                anchor: h,
                                position: w(C(e, Rn, 2), 2)
                            })) c.set(ua(f.anchor), f.position)
                }
                C(e, Rn, 3) && C(e, Rn, 3).Y() && (f = Zt(a, C(e, Rn, 3).Y())) && c.set(ua(f), w(C(e, Rn, 3), 2))
            } else qd(e, Tn, 2, Vn) ? $t(a, qd(e, Tn, 2, Vn), c) : qd(e, Qn, 3, Vn) && au(a, qd(e, Qn, 3, Vn), d)
        });
        return new ru(c, d)
    }
    class ru {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    }
    const $t = (a, b, c) => {
            C(b, Rn, 2) ? (b = C(b, Rn, 2), (a = Zt(a, b.Y())) && c.set(ua(a), w(b, 2))) : C(b, pn, 1) && (a = su(a, C(b, pn, 1))) && a.forEach(d => {
                d = ua(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        au = (a, b, c) => {
            C(b, pn, 1) && (a = su(a, C(b, pn, 1))) && a.forEach(d => {
                c.add(ua(d))
            })
        },
        Zt = (a, b) => (a = su(a, b)) && 0 < a.length ? a[0] : null,
        su = (a, b) => (b = Tr(b)) ? b.query(a) : null;

    function tu(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (uu(b)) return !0;
            if (a.j.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.j.add(d));
        return !1
    }

    function vu(a) {
        a = wu(a);
        return a.has("all") || a.has("after")
    }

    function xu(a) {
        a = wu(a);
        return a.has("all") || a.has("before")
    }

    function wu(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function uu(a) {
        const b = wu(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }
    var yu = class {
        constructor() {
            this.j = new Set
        }
    };

    function zu(a) {
        return function(b) {
            return ct(b, a)
        }
    }

    function Au(a) {
        const b = Q(a).clientHeight;
        return b ? Ca(Bu, b + Ol(a)) : Pd
    }

    function Cu(a, b, c) {
        if (0 > a) throw Error("ama::ead:nd");
        if (Infinity === a) return Pd;
        const d = Rt(c || Mt(b));
        return e => Ut(d, a, e.ba)
    }

    function Du(a, b, c, d) {
        if (0 > a || 0 > b.je || 0 > b.he || 0 > b.mb) throw Error("ama::ead:nd");
        return Infinity === a ? Pd : e => Wt(d || Mt(c, b.mb), a, b, e)
    }

    function Eu(a) {
        if (!a.length) return Pd;
        const b = new dn(a);
        return c => b.contains(c.Ya)
    }

    function Fu(a) {
        return function(b) {
            for (let c of b.ec)
                if (-1 < a.indexOf(c)) return !1;
            return !0
        }
    }

    function Gu(a) {
        return a.length ? function(b) {
            const c = b.ec;
            return a.some(d => -1 < c.indexOf(d))
        } : Qd
    }

    function Hu(a, b) {
        if (0 >= a) return Qd;
        const c = Q(b).scrollHeight - a;
        return function(d) {
            return d.ba.j <= c
        }
    }

    function Iu(a) {
        const b = {};
        a && a.forEach(c => {
            b[c] = !0
        });
        return function(c) {
            return !b[w(c.sc, 2) || 0]
        }
    }

    function Ju(a) {
        return a.length ? b => a.includes(w(b.sc, 1) || 0) : Qd
    }

    function Ku(a, b) {
        const c = Yt(a, b);
        return function(d) {
            var e = d.Y();
            d = Zr[d.V.j()];
            var f = ua(e);
            f = c.l.j.get(f);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.j.contains(ua(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.j.contains(ua(e))) {
                        f = !0;
                        break a
                    }
                    e = e.parentElement
                }
                f = !1
            }
            return !f
        }
    }

    function Lu() {
        const a = new yu;
        return function(b) {
            var c = b.Y();
            b = Zr[b.V.j()];
            a: switch (b) {
                case 1:
                    var d = vu(c.previousElementSibling) || xu(c);
                    break a;
                case 4:
                    d = vu(c) || xu(c.nextElementSibling);
                    break a;
                case 2:
                    d = xu(c.firstElementChild);
                    break a;
                case 3:
                    d = vu(c.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + b);
            }
            return !(d || tu(a, c, b))
        }
    }
    const Bu = (a, b) => b.ba.j >= a,
        Mu = (a, b, c) => {
            c = c.ba.l;
            return a <= c && c <= b
        };
    var Nu = class {
        constructor(a, b) {
            this.m = a;
            this.l = b
        }
        j() {
            const a = Au(this.m);
            let b = this.l.next();
            for (; b;) {
                if (a(b)) return b;
                b = this.l.next()
            }
            return null
        }
    };
    var Ou = class {
        constructor(a, b) {
            this.l = a;
            this.m = b
        }
        j() {
            var a = new Bo;
            var b = C(this.m.l, pn, 1);
            a = dd(a, 1, b);
            a = x(a, 2, 2);
            a = x(a, 8, 1);
            a = xs([a], this.l);
            return ct(a, this.l)[0] || null
        }
    };
    var Pu = a => {
            let b = 0;
            a.forEach(c => b = Math.max(b, c.getBoundingClientRect().width));
            return c => c.getBoundingClientRect().width > .5 * b
        },
        Qu = a => {
            const b = Q(a).clientHeight || 0;
            return c => c.getBoundingClientRect().height >= .75 * b
        };

    function Ru(a, b) {
        if (!b) return !1;
        const c = ua(b),
            d = a.j.get(c);
        if (null != d) return d;
        if (1 == b.nodeType && ("UL" == b.tagName || "OL" == b.tagName) && "none" != a.l.getComputedStyle(b).getPropertyValue("list-style-type")) return a.j.set(c, !0), !0;
        b = Ru(a, b.parentNode);
        a.j.set(c, b);
        return b
    }

    function Su(a, b) {
        return qb(b.ob, c => Ru(a, c))
    }
    class Tu {
        constructor(a) {
            this.j = new Yl;
            this.l = a
        }
    };
    class Uu {
        constructor(a, b) {
            this.v = a;
            this.j = [];
            this.l = [];
            this.m = b
        }
    };
    var Wu = (a, {
            Ak: b = !1,
            Bk: c = 3,
            ng: d = null
        } = {}) => {
            a = at(a);
            return Vu(a, b, c, d)
        },
        Vu = (a, b = !1, c = 3, d = null) => {
            if (2 > c) throw Error("minGroupSize should be at least 2, found " + c);
            var e = a.slice(0);
            e.sort(Zs);
            a = [];
            b = new Uu(b, d);
            for (const l of e) {
                d = b;
                e = {
                    nc: l,
                    Yb: 51 > l.v.length ? !1 : null != d.m ? !Su(d.m, l) : !0
                };
                if (d.v || e.Yb) {
                    if (d.j.length) {
                        var f = d.j[d.j.length - 1].nc;
                        b: {
                            var g = f.R();
                            var h = f.ob[f.ob.length - 1];f = e.nc.ob[0];
                            if (!h || !f) {
                                g = !1;
                                break b
                            }
                            var k = h.parentElement;
                            const m = f.parentElement;
                            if (k && m && k == m) {
                                k = 0;
                                for (h = h.nextSibling; 10 >
                                    k && h;) {
                                    if (h == f) {
                                        g = !0;
                                        break b
                                    }
                                    if (Qs(g, h)) break;
                                    h = h.nextSibling;
                                    k++
                                }
                                g = !1
                            } else g = !1
                        }
                    } else g = !0;
                    g ? (d.j.push(e), e.Yb && d.l.push(e.nc)) : (d.j = [e], d.l = e.Yb ? [e.nc] : [])
                }
                if (b.l.length >= c) {
                    if (1 >= b.l.length) d = null;
                    else {
                        e = b.l[1];
                        for (d = b; d.j.length && !d.j[0].Yb;) d.j.shift();
                        d.j.shift();
                        d.l.shift();
                        d = e
                    }
                    d && a.push(d)
                }
            }
            return a
        };
    var Yu = (a, b) => {
            a = Xu(a, b);
            const c = new Tu(b);
            return Ym(a, d => Wu(d, {
                ng: c
            }))
        },
        Xu = (a, b) => {
            const c = new Yl;
            a.forEach(d => {
                var e = Tr(C(d, pn, 1));
                if (e) {
                    const f = e.toString();
                    Ul(c, f) || c.set(f, {
                        articleStructure: d,
                        Ue: e,
                        Qb: null,
                        Rd: !1
                    });
                    e = c.get(f);
                    (d = (d = C(d, pn, 2)) ? w(d, 7) : null) ? e.Qb = e.Qb ? e.Qb + "," + d : d: e.Rd = !0
                }
            });
            return Xl(c).map(d => {
                const e = d.Ue.query(b.document);
                return e.length ? new bt(e[0], d, b) : null
            }).filter(d => null != d)
        };
    var Zu = (a, b) => {
        b = Xu(b, a);
        const c = b.map(d => d.j);
        b = b.filter(d => {
            d = d.j.getBoundingClientRect();
            return 0 < d.width && 0 < d.height
        }).filter(d => Pu(c)(d.j)).filter(d => Qu(a)(d.j));
        b.sort((d, e) => {
            e = e.j;
            return d.j.getBoundingClientRect().top - e.getBoundingClientRect().top
        });
        return b
    };
    var av = (a, b, c) => {
        if (I(c, 2)) {
            if (a.document.getElementById("google-auto-placed-read-aloud-player-reserved")) {
                var d = new Bo;
                var e = new pn;
                e = x(e, 7, "div#google-auto-placed-read-aloud-player-reserved");
                d = dd(d, 1, e);
                d = x(d, 2, 2);
                d = x(d, 8, 1);
                d = xs([d], a);
                d = ct(d, a)[0] || null
            } else d = null;
            if (d) return d
        }
        a: {
            c = $u(c);b = Zu(a, b);
            for (const f of b) {
                b: switch (b = a, d = f, e = c, e) {
                    case 1:
                        b = new Ou(b, d);
                        break b;
                    case 2:
                        b = new ht(et(b, d));
                        break b;
                    case 3:
                        b = new Nu(b, et(b, d));
                        break b;
                    default:
                        throw Error(`Unknown position: ${e}`);
                }
                if (b = b.j()) {
                    a =
                        b;
                    break a
                }
            }
            a = null
        }
        return a
    };

    function $u(a) {
        if (I(a, 2)) return 3;
        switch (nd(a, 1)) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
            default:
                throw Error(`Unknown player position: ${nd(a,1)}`);
        }
    };
    var bv = class {
            constructor(a) {
                this.j = a
            }
        },
        ev = (a, b, c, d, e) => {
            if (0 < a.document.getElementsByTagName("google-read-aloud-player").length) return gn("Player already created");
            var f = a.document;
            const g = f.createElement("div");
            g.id = "google-auto-placed-read-aloud-player";
            N(g, {
                padding: "5px"
            });
            const h = f.createElement("script");
            var k = Oh `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;`;
            h.textContent = me(k);
            qf(h);
            g.appendChild(h);
            cv(f, g, Nd("https://www.google-analytics.com/analytics.js"));
            cv(f, g, Nd("https://www.gstatic.com/readaloud/player/web/api/audiosense/js/api.js"));
            f = f.createElement("google-read-aloud-player");
            f.setAttribute("data-api-key", "AIzaSyDTBU0XpbvyTzmA5nS-09w7cnopRavFpxs");
            f.setAttribute("data-tracking-ids", "UA-199725947-1,UA-168915890-13");
            f.setAttribute("data-url", c.url);
            f.setAttribute("data-locale", d);
            f.setAttribute("data-no-settings-screen", "");
            e && (null != w(e, 1) && 0 != nd(e, 1) && f.setAttribute("data-docking-begin-trigger", dv[nd(e, 1)]), null != w(e, 2) && f.setAttribute("data-experiment",
                e.j()));
            g.appendChild(f);
            Os(b, g);
            return en(new bv(a.document.getElementsByTagName("google-read-aloud-player")[0]))
        };
    const cv = (a, b, c) => {
            a = a.createElement("script");
            rf(a, te(Md(c)));
            a.setAttribute("async", "true");
            b.appendChild(a)
        },
        dv = {
            [1]: "out-of-view"
        };
    class fv {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.j = b
            })
        }
    };

    function gv() {
        const {
            promise: a,
            resolve: b
        } = new fv;
        return {
            promise: a,
            resolve: b
        }
    };

    function hv(a, b, c = () => {}) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        let d = b[a];
        if (d) return d;
        d = gv();
        b[a] = d;
        c();
        return d
    }

    function iv(a, b, c) {
        return hv(a, b, () => {
            Qg(b.document, c)
        }).promise
    };

    function jv(a, b, c, d) {
        a = iv(7, a, c).then(e => {
            e.init(b);
            e.handleAdConfig({
                preloadAdBreaks: null != w(d, 1, !1) && I(d, 1) ? "auto" : "on",
                sound: "on"
            });
            return e
        });
        Qk.Aa(915, a);
        return new kv(a)
    }

    function lv(a, b) {
        a = a.j.then(c => {
            c.handleAdBreak({
                type: "preroll",
                name: "audiosense-preroll",
                adBreakDone: b
            })
        });
        Qk.Aa(956, a)
    }
    var kv = class {
        constructor(a) {
            this.j = a
        }
    };

    function mv(a) {
        const b = a.m.j;
        b.addEventListener("firstplay", () => {
            if (!a.l) {
                a.l = !0;
                b.pause();
                const c = performance.now();
                lv(a.v, () => {
                    b.play();
                    qs(a.j, "preroll", {
                        yk: performance.now() - c
                    })
                });
                qs(a.j, "play", {})
            }
        })
    }
    var nv = class {
        constructor(a, b, c) {
            this.m = a;
            this.v = b;
            this.j = c;
            this.l = !1
        }
    };

    function ov(a, b, c, d, e, f, g) {
        return 0 == d.length ? gn("No ArticleStructure found") : C(c, eo, 2) ? en(new pv(a, b, d, c, e, f, g ? g : "en")) : gn("No AudioSenseConfig.PlacementConfig found")
    }

    function qv(a) {
        const b = av(a.v, a.D, C(a.l, eo, 2));
        if (b) {
            var c = !!a.A.Gb && rv(a);
            c && (a.B = jv(a.v, a.C, a.A.Gb, C(a.l, co, 3) ? .j() || new ao));
            var d = ev(a.v, b, a.A, a.G, C(a.l, fo, 4) || void 0);
            null != d.j ? (a.m = d.j.value, a.m.j.addEventListener("firstview", () => {
                qs(a.j, "view", {})
            }), c && mv(new nv(a.m, a.B, a.j)), qs(a.j, "place", {
                sts: "ok",
                pp: b.ba.j
            })) : qs(a.j, "place", {
                sts: "wf"
            })
        } else qs(a.j, "place", {
            sts: "pf"
        })
    }

    function rv(a) {
        return (a = C(a.l, co, 3)) ? D(a, $n, 1).some(b => 1 === nd(b, 1)) : !1
    }
    var pv = class {
        constructor(a, b, c, d, e, f, g) {
            this.v = a;
            this.j = new rs(a, b, d);
            this.D = c;
            this.l = d;
            this.A = e;
            this.C = f;
            this.G = g;
            this.m = this.B = null
        }
    };

    function sv(a, b, c) {
        var d = 0 === a.l ? a.j.A() : a.j.B(),
            e = a.m,
            f = Q(a.win).clientHeight,
            g = a.j.j() ? .j() || 0;
        a: switch (d ? .j()) {
            case 1:
                d = "AUTO_PROSE_TOP_ANCHOR";
                break a;
            case 2:
                d = "AUTO_PROSE_BOTTOM_ANCHOR";
                break a;
            default:
                d = "UNKNOWN_POSITION"
        }
        a: switch (a.l) {
            case 0:
                var h = "DESKTOP";
                break a;
            case 2:
                h = "MOBILE";
                break a;
            default:
                h = "OTHER_VIEWPORT"
        }
        ns(e, is, { ...c,
            evt: b,
            vh: f,
            eid: g,
            pos: d,
            vpt: h,
            url: a.win.location.href
        })
    }
    var tv = class {
        constructor(a, b, c) {
            this.win = a;
            this.m = b;
            this.j = c;
            this.l = kh()
        }
    };
    var uv = {},
        vv = {},
        wv = {},
        xv = {},
        yv = {};

    function zv() {
        throw Error("Do not instantiate directly");
    }
    zv.prototype.Jd = null;
    zv.prototype.ya = function() {
        return this.content
    };
    zv.prototype.toString = function() {
        return this.content
    };

    function Av(a) {
        if (a.Kd !== uv) throw Error("Sanitized content was not of kind HTML.");
        return Ye(a.toString())
    }

    function Bv() {
        zv.call(this)
    }
    Fa(Bv, zv);
    Bv.prototype.Kd = uv;

    function Cv(a, b) {
        return null != a && a.Kd === b
    };

    function Dv(a) {
        if (null != a) switch (a.Jd) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function Ev(a) {
        return Cv(a, uv) ? a : a instanceof We ? Fv(Ve(a).toString()) : a instanceof We ? Fv(Ve(a).toString()) : Fv(String(String(a)).replace(Gv, Hv), Dv(a))
    }
    var Fv = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.Jd = d);
            return c
        }
    }(Bv);

    function Iv(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function Jv(a) {
        return Cv(a, uv) ? String(String(a.ya()).replace(Kv, "").replace(Lv, "&lt;")).replace(Mv, Hv) : String(a).replace(Gv, Hv)
    }

    function Nv(a) {
        a = String(a);
        const b = (d, e, f) => {
            const g = Math.min(e.length - f, d.length);
            for (let k = 0; k < g; k++) {
                var h = e[f + k];
                if (d[k] !== ("A" <= h && "Z" >= h ? h.toLowerCase() : h)) return !1
            }
            return !0
        };
        for (var c = 0; - 1 != (c = a.indexOf("<", c));) {
            if (b("\x3c/script", a, c) || b("\x3c!--", a, c)) return "zSoyz";
            c += 1
        }
        return a
    }

    function Ov(a) {
        if (null == a) return " null ";
        if (Cv(a, vv)) return a.ya();
        if (a instanceof ne || a instanceof ne) return me(a).toString();
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(Pv, Qv) + "'"
        }
    }

    function X(a) {
        Cv(a, yv) ? a = Iv(a.ya()) : null == a ? a = "" : a instanceof He ? a = Iv(Ge(a)) : a instanceof He ? a = Iv(Ge(a)) : a instanceof Te ? a = Iv(Se(a)) : a instanceof Te ? a = Iv(Se(a)) : (a = String(a), a = Rv.test(a) ? a : "zSoyz");
        return a
    }
    const Sv = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function Hv(a) {
        return Sv[a]
    }
    const Tv = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\v": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        $: "\\x24",
        "&": "\\x26",
        "'": "\\x27",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        "/": "\\/",
        ":": "\\x3a",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "?": "\\x3f",
        "[": "\\x5b",
        "\\": "\\\\",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    };

    function Qv(a) {
        return Tv[a]
    }
    const Uv = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function Vv(a) {
        return Uv[a]
    }
    const Gv = /[\x00\x22\x26\x27\x3c\x3e]/g,
        Mv = /[\x00\x22\x27\x3c\x3e]/g,
        Wv = /[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        Xv = /[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        Pv = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,
        Yv = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Rv = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|rgba|hsl|hsla|calc|max|min|cubic-bezier)\([-\u0020\t,+.!#%_0-9a-zA-Z]+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        Zv =
        /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;

    function $v(a) {
        return String(a).replace(Yv, Vv)
    }
    const Kv = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        Lv = /</g;
    var aw = void 0;

    function bw() {
        void 0 === aw && (aw = 18);
        return aw
    }
    var cw = void 0;

    function dw() {
        void 0 === cw && (cw = 18);
        return cw
    }

    function ew(a) {
        a = void 0 === a ? "white" : a;
        return Fv('<svg width="' + Jv(dw()) + '" height="' + Jv(bw()) + '" viewBox="0 0 ' + Jv(bw()) + " " + Jv(dw()) + '"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.76 10.27L17.49 16L16 17.49L10.27 11.76C9.2 12.53 7.91 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 7.91 12.53 9.2 11.76 10.27ZM6.5 2C4.01 2 2 4.01 2 6.5C2 8.99 4.01 11 6.5 11C8.99 11 11 8.99 11 6.5C11 4.01 8.99 2 6.5 2Z" fill=' + (Cv(a, uv) ? String(String(a.ya()).replace(Kv, "").replace(Lv,
            "&lt;")).replace(Xv, Hv) : String(a).replace(Wv, Hv)) + " /></svg>")
    };

    function fw(a, b, c) {
        const d = a.Ca.contentWindow.google.search.cse.element.getElement("auto-rs-prose");
        c = {
            rsToken: c,
            afsExperimentId: a.m
        };
        a.C && (c.useStandardProseAdLoad = "1");
        d.execute(b, void 0, c)
    }
    var gw = class {
        constructor(a, b, c, d, e, f, g, h, k, l) {
            this.Ca = a;
            this.l = b;
            this.v = c;
            this.j = d;
            this.B = e;
            this.host = f;
            this.language = g;
            this.A = h;
            this.m = k;
            this.C = l
        }
        init() {
            this.Ca.setAttribute("id", "prose-iframe");
            this.Ca.setAttribute("width", "100%");
            this.Ca.setAttribute("height", "100%");
            var a = this.Ca,
                b = Ie({
                    "box-sizing": "border-box",
                    border: "unset"
                });
            a.style.cssText = Ge(b);
            a = "https://www.google.com/s2/favicons?sz=64&domain_url=" + encodeURIComponent(this.host);
            var c = De(a) || Ee;
            a = this.v;
            b = this.j;
            var d = this.B,
                e = this.host,
                f = this.A.replace("${website}", this.host.startsWith("www.") ? this.host.slice(4) : this.host),
                g = Fv;
            Cv(c, wv) || Cv(c, xv) ? c = $v(c) : c instanceof ze ? c = $v(Ae(c)) : c instanceof ze ? c = $v(Ae(c)) : c instanceof pe ? c = $v(se(c).toString()) : c instanceof pe ? c = $v(se(c).toString()) : (c = String(c), c = Zv.test(c) ? c.replace(Yv, Vv) : "about:invalid#zSoyz");
            a = g('<style>.cse-favicon {display: block; float: left; height: 16px; position: absolute; left: 15px; width: 16px;}.cse-header {font-size: 16px; font-family: Arial; margin-left: 35px; margin-top: 6px; margin-bottom: unset; line-height: 16px;}.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}.prose-container {max-width: 652px;}</style><div class="prose-container"><img class="cse-favicon" src="' +
                Jv(c) + '" alt="' + Jv(e) + ' icon"><p class="cse-header"><strong>' + Ev(f) + '</strong></p><div class="gcse-search" data-gname="' + Jv(a) + '" data-adclient="' + Jv(b) + '" data-adchannel="' + Jv(d) + '" data-as_sitesearch="' + Jv(e) + '" data-personalizedAds="false"></div></div>');
            a = Av(a);
            b = {
                style: Ie({
                    margin: 0
                })
            };
            d = {
                src: ve(Nd("https://cse.google.com/cse.js?cx=%{cxId}&language=%{lang}"), {
                    cxId: this.l,
                    lang: this.language
                })
            };
            e = {};
            f = {};
            for (h in d) Object.prototype.hasOwnProperty.call(d, h) && (f[h] = d[h]);
            for (const k in e) Object.prototype.hasOwnProperty.call(e,
                k) && (f[k] = e[k]);
            var h = bf("script", f);
            h = Ze("body", b, [a, h]);
            this.Ca.srcdoc = Ve(h)
        }
    };

    function hw(a, b) {
        return new iw(a, b)
    }

    function jw(a) {
        const b = kw(a);
        mb(a.j.maxZIndexListeners, c => c(b))
    }

    function kw(a) {
        a = Vg(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }
    class lw {
        constructor(a) {
            this.j = Dl(a).floatingAdsStacking
        }
        addListener(a) {
            this.j.maxZIndexListeners.push(a);
            a(kw(this))
        }
    }

    function mw(a) {
        if (null == a.j) {
            var b = a.l,
                c = a.m;
            const d = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[d] = c;
            jw(b);
            a.j = d
        }
    }

    function nw(a) {
        if (null != a.j) {
            var b = a.l;
            delete b.j.maxZIndexRestrictions[a.j];
            jw(b);
            a.j = null
        }
    }
    class iw {
        constructor(a, b) {
            this.l = a;
            this.m = b;
            this.j = null
        }
    };
    const ow = ["-webkit-text-fill-color"];

    function pw(a) {
        if (Ib) {
            {
                const c = Sg(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d) a[c[d]] = "initial";
                    a = qw(a)
                } else a = rw()
            }
        } else a = rw();
        return a
    }
    var rw = () => {
        const a = {
            all: "initial"
        };
        mb(ow, b => {
            a[b] = "unset"
        });
        return a
    };

    function qw(a) {
        mb(ow, b => {
            delete a[b]
        });
        return a
    };

    function sw(a, b) {
        const c = a.document.createElement("div");
        N(c, pw(a));
        const d = c.attachShadow({
            mode: "open"
        });
        b && c.classList.add(b);
        b = {
            ld: c,
            shadowRoot: d
        };
        a.document.body.appendChild(b.ld);
        return b
    }

    function tw(a, b) {
        b = b.getElementById(a);
        if (!b) throw Error(`Element (${a}) does not exist`);
        return b
    }

    function uw(a, b) {
        const c = new em(b.M);
        mm(b, !0, () => void R(c, !0));
        mm(b, !1, () => {
            a.setTimeout(() => {
                b.M || R(c, !1)
            }, 700)
        });
        return gm(c)
    };
    var vw = void 0;

    function ww(a) {
        a = a.top;
        if (!a) return null;
        try {
            var b = a.history
        } catch (c) {
            b = null
        }
        b = b && b.pushState && "function" === typeof b.pushState ? b : null;
        if (!b) return null;
        if (a.googNavStack) return a.googNavStack;
        b = new xw(a, b);
        b.init();
        return b ? a.googNavStack = b : null
    }

    function yw(a, b) {
        return b ? b.googNavStackId === a.m ? b : null : null
    }

    function zw(a, b) {
        for (let c = b.length - 1; 0 <= c; --c) {
            const d = 0 === c;
            a.J.requestAnimationFrame(() => void b[c].ig({
                isFinal: d
            }))
        }
    }

    function Aw(a, b) {
        b = wb(a.stack, b, (c, d) => c - d.Xd.googNavStackStateId);
        if (0 <= b) return a.stack.splice(b, a.stack.length - b);
        b = -b - 1;
        return a.stack.splice(b, a.stack.length - b)
    }
    class xw extends Hk {
        constructor(a, b) {
            super();
            this.J = a;
            this.l = b;
            this.stack = [];
            this.m = 1E9 * Math.random() >>> 0;
            this.A = 0;
            this.v = c => {
                (c = yw(this, c.state)) ? zw(this, Aw(this, c.googNavStackStateId + .5)): zw(this, this.stack.splice(0, this.stack.length))
            }
        }
        pushEvent() {
            const a = {
                    googNavStackId: this.m,
                    googNavStackStateId: this.A++
                },
                b = new Promise(c => {
                    this.stack.push({
                        ig: c,
                        Xd: a
                    })
                });
            this.l.pushState(a, "");
            return {
                navigatedBack: b,
                triggerNavigateBack: () => {
                    const c = Aw(this, a.googNavStackStateId);
                    var d;
                    if (d = 0 < c.length) {
                        d = c[0].Xd;
                        const e = yw(this, this.l.state);
                        d = e && e.googNavStackId === d.googNavStackId && e.googNavStackStateId === d.googNavStackStateId
                    }
                    d && this.l.go(-c.length);
                    zw(this, c)
                }
            }
        }
        init() {
            this.J.addEventListener("popstate", this.v)
        }
        j() {
            this.J.removeEventListener("popstate", this.v);
            super.j()
        }
    };

    function Bw(a) {
        return (a = ww(a)) ? new Cw(a) : null
    }

    function Dw(a) {
        if (!a.l) {
            var {
                navigatedBack: b,
                triggerNavigateBack: c
            } = a.v.pushEvent();
            a.l = c;
            b.then(() => {
                a.l && !a.B && (a.l = null, om(a.m))
            })
        }
    }
    var Cw = class extends Hk {
        constructor(a) {
            super();
            this.v = a;
            this.m = new pm;
            this.l = null
        }
    };

    function Ew(a, b, c) {
        var d = hw(new lw(a), c.zIndex - 1);
        const e = sw(a, c.Hc),
            f = e.shadowRoot;
        var g = f.appendChild,
            h = new rg(a.document);
        var k = c.Lc;
        var l = c.Jc || !1,
            m = c.Dc,
            n = c.wk || "",
            q = c.zIndex;
        if (c.Dk ? ? !0) {
            void 0 === vw && (vw = 20);
            var r = vw
        } else r = 0;
        k = "<style>#hd-drawer-container {position: fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + X(q) + "; pointer-events: none;}#hd-drawer-container.hd-revealed {pointer-events: auto;}#hd-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.hd-revealed > #hd-modal-background {opacity: 0.5;}#hd-drawer {position: absolute; top: 0; height: 100%; width: " +
            X(k) + "; background-color: white; display: flex; flex-direction: column; box-sizing: border-box; padding-bottom: " + X(r) + "px; transition: transform " + X(.5) + "s ease-in-out;" + (l ? "left: 0; border-top-right-radius: " + X(r) + "px; border-bottom-right-radius: " + X(r) + "px; transform: translateX(-100%);" : "right: 0; border-top-left-radius: " + X(r) + "px; border-bottom-left-radius: " + X(r) + "px; transform: translateX(100%);") + "}.hd-revealed > #hd-drawer {transform: translateY(0);}#hd-control-bar {height: 24px;}.hd-control-button {border: none; background: none; cursor: pointer;}#hd-back-arrow-button {" +
            (l ? "float: right;" : "float: left;") + "}#hd-close-button {" + (l ? "float: left;" : "float: right;") + '}#hd-content-container {flex-grow: 1; overflow: auto;}#hd-content-container::-webkit-scrollbar * {background: transparent;}.hd-hidden {visibility: hidden;}</style><div id="hd-drawer-container"><div id="hd-modal-background"></div><div id="hd-drawer"><div id="hd-control-bar"><button id="hd-back-arrow-button" class="hd-control-button hd-hidden" aria-label="' + Jv(n) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#5F6368"><path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z"/></svg></button><button id="hd-close-button" class="hd-control-button" aria-label="' +
            Jv(m) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#5F6368"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg></button></div><div id="hd-content-container"></div></div></div>';
        k = Fv(k);
        g.call(f, Ig(h, Av(k)));
        g = tw("hd-content-container", f);
        g.appendChild(b);
        Cb(a.document.body.offsetHeight);
        b = {
            sb: tw("hd-drawer-container", f),
            Wc: tw("hd-modal-background", f),
            Ec: g,
            jf: tw("hd-close-button", f),
            vk: tw("hd-back-arrow-button", f),
            nd: e
        };
        d = new Fw(a, b, Tm(a), d);
        d.init();
        (c.Sb || void 0 === c.Sb) && Gw(d);
        c.Ia && ((a = Bw(a)) ? Hw(d, a, c.Xc) : c.Xc ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function Gw(a) {
        a.v = b => {
            "Escape" === b.key && a.l.M && a.collapse()
        };
        a.win.document.body.addEventListener("keydown", a.v)
    }

    function Hw(a, b, c) {
        mm(a.l, !0, () => {
            try {
                Dw(b)
            } catch (d) {
                c ? .(d)
            }
        });
        mm(a.l, !1, () => {
            try {
                b.l && (b.l(), b.l = null)
            } catch (d) {
                c ? .(d)
            }
        });
        (new qm(b.m)).Z(() => void a.collapse());
        Ik(a, Ca(Gk, b))
    }

    function Iw(a) {
        if (a.B) throw Error("Accessing domItems after disposal");
        return a.A
    }

    function Jw(a) {
        const {
            Wc: b,
            jf: c
        } = Iw(a);
        b.addEventListener("click", () => void a.collapse());
        c.addEventListener("click", () => void a.collapse())
    }
    var Fw = class extends Hk {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.A = b;
            this.l = new em(!1);
            this.m = uw(a, this.l);
            mm(this.m, !0, () => {
                Vm(c);
                mw(d)
            });
            mm(this.m, !1, () => {
                Xm(c);
                nw(d)
            })
        }
        show({
            Nd: a = !1
        } = {}) {
            if (this.B) throw Error("Cannot show drawer after disposal");
            Iw(this).sb.classList.add("hd-revealed");
            R(this.l, !0);
            a && mm(this.m, !1, () => {
                this.xa()
            })
        }
        collapse() {
            Iw(this).sb.classList.remove("hd-revealed");
            R(this.l, !1)
        }
        isVisible() {
            return this.m
        }
        init() {
            Jw(this)
        }
        j() {
            this.v && this.win.document.body.removeEventListener("keydown",
                this.v);
            const a = this.A.nd.ld,
                b = a.parentNode;
            b && b.removeChild(a);
            super.j()
        }
    };
    var Kw = void 0;

    function Lw() {
        void 0 === Kw && (Kw = 20);
        return Kw
    }
    var Mw = void 0;

    function Nw() {
        void 0 === Mw && (Mw = 30);
        return Mw
    }

    function Ow(a) {
        return Fv('<div class="ved-handle" id="' + Jv(a) + '"><div class="ved-handle-icon"></div></div>')
    };

    function Pw(a) {
        return Em(a.j).map(b => b ? Qw(a, b) : 0)
    }

    function Qw(a, b) {
        switch (a.direction) {
            case 0:
                return Rw(-b.Ke);
            case 1:
                return Rw(-b.Je);
            default:
                throw Error(`Unhandled direction: ${a.direction}`);
        }
    }

    function Sw(a) {
        return Gm(a.j).map(b => Qw(a, b))
    }
    var Tw = class {
        constructor(a) {
            this.j = a;
            this.direction = 0
        }
    };

    function Rw(a) {
        return 0 === a ? 0 : a
    };

    function Z(a) {
        if (a.B) throw Error("Accessing domItems after disposal");
        return a.A
    }

    function Uw(a) {
        const {
            ca: b,
            Ea: c
        } = Z(a);
        c.getBoundingClientRect().top <= b.getBoundingClientRect().top || Vw(a);
        Z(a).sb.classList.add("ved-revealed");
        R(a.l, !0)
    }

    function Ww(a) {
        return uw(a.win, a.l)
    }

    function Xw(a, b) {
        const c = new em(b());
        (new qm(a.G)).Z(() => void R(c, b()));
        return gm(c)
    }

    function Yw(a) {
        const {
            ca: b,
            kc: c
        } = Z(a);
        return Xw(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function Zw(a) {
        const {
            ca: b,
            kc: c
        } = Z(a);
        return Xw(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top - 1)
    }

    function $w(a) {
        const {
            ca: b
        } = Z(a);
        return Xw(a, () => b.scrollTop === b.scrollHeight - b.clientHeight)
    }

    function ax(a) {
        return hm(Yw(a), $w(a))
    }

    function bx(a) {
        const {
            ca: b,
            Ea: c
        } = Z(a);
        return Xw(a, () => c.getBoundingClientRect().top < b.getBoundingClientRect().top - 1)
    }

    function Vw(a) {
        Z(a).Ea.classList.add("ved-snap-point-top");
        var b = cx(a, Z(a).Ea);
        Z(a).ca.scrollTop = b;
        dx(a)
    }

    function ex(a) {
        km(Yw(a), !0, () => {
            const {
                Sd: b,
                Eb: c
            } = Z(a);
            b.classList.remove("ved-hidden");
            c.classList.add("ved-with-background")
        });
        km(Yw(a), !1, () => {
            const {
                Sd: b,
                Eb: c
            } = Z(a);
            b.classList.add("ved-hidden");
            c.classList.remove("ved-with-background")
        })
    }

    function fx(a) {
        const b = Im(a.win, Z(a).Ec);
        jm(Lm(b), () => void gx(a));
        Ik(a, Ca(Gk, b))
    }

    function hx(a) {
        km(ix(a), !0, () => {
            Z(a).te.classList.remove("ved-hidden")
        });
        km(ix(a), !1, () => {
            Z(a).te.classList.add("ved-hidden")
        })
    }

    function jx(a) {
        const b = () => void om(a.C),
            {
                Wc: c,
                Ea: d,
                zf: e
            } = Z(a);
        c.addEventListener("click", b);
        d.addEventListener("click", b);
        e.addEventListener("click", b);
        mm(kx(a), !0, b)
    }

    function lx(a) {
        mm(Ww(a), !1, () => {
            Vw(a)
        })
    }

    function dx(a) {
        lm(a.m, () => void om(a.G))
    }

    function gx(a) {
        if (!a.m.M) {
            var {
                Ld: b,
                Ec: c
            } = Z(a), d = c.getBoundingClientRect().height;
            d = Math.max(mx(a), d);
            R(a.m, !0);
            var e = nx(a);
            b.style.setProperty("height", `${d}px`);
            e();
            a.win.requestAnimationFrame(() => {
                a.win.requestAnimationFrame(() => {
                    R(a.m, !1)
                })
            })
        }
    }

    function ix(a) {
        const {
            ca: b,
            Ea: c
        } = Z(a);
        return Xw(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function kx(a) {
        return fm(a.v.map(nn), ox(a))
    }

    function ox(a) {
        return Xw(a, () => 0 === Z(a).ca.scrollTop)
    }

    function cx(a, b) {
        ({
            Eb: a
        } = Z(a));
        a = a.getBoundingClientRect().top;
        return b.getBoundingClientRect().top - a
    }

    function px(a, b) {
        R(a.v, !0);
        const {
            Eb: c,
            ca: d
        } = Z(a);
        d.scrollTop = 0;
        d.classList.add("ved-scrolling-paused");
        c.style.setProperty("margin-top", `-${b}px`);
        return () => void qx(a, b)
    }

    function qx(a, b) {
        const {
            Eb: c,
            ca: d
        } = Z(a);
        c.style.removeProperty("margin-top");
        d.classList.remove("ved-scrolling-paused");
        Z(a).ca.scrollTop = b;
        dx(a);
        R(a.v, !1)
    }

    function nx(a) {
        const b = Z(a).ca.scrollTop;
        px(a, b);
        return () => void qx(a, b)
    }

    function mx(a) {
        const {
            ca: b,
            kc: c,
            Ld: d,
            Ea: e
        } = Z(a);
        a = b.getBoundingClientRect();
        const f = c.getBoundingClientRect();
        var g = d.getBoundingClientRect();
        const h = e.getBoundingClientRect();
        g = g.top - f.top;
        return Math.max(a.height - h.height - g, Math.min(a.height, a.bottom - f.top) - g)
    }
    var rx = class extends Hk {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.A = b;
            this.H = c;
            this.C = new pm;
            this.G = new pm;
            this.l = new em(!1);
            this.v = new em(!1);
            this.m = new em(!1)
        }
        init() {
            Vw(this);
            ex(this);
            fx(this);
            hx(this);
            jx(this);
            lx(this);
            Z(this).ca.addEventListener("scroll", () => void dx(this))
        }
        j() {
            const a = this.A.nd.ld,
                b = a.parentNode;
            b && b.removeChild(a);
            super.j()
        }
    };

    function sx(a, b, c) {
        var d = hw(new lw(a), c.zIndex - 1),
            e = sw(a, c.Hc),
            f = e.shadowRoot,
            g = f.appendChild,
            h = new rg(a.document);
        var k = 100 * c.bd;
        var l = 100 * c.Mc;
        k = Fv("<style>#ved-drawer-container {position:  fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + X(c.zIndex) + "; pointer-events: none;}#ved-drawer-container.ved-revealed {pointer-events: auto;}#ved-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.ved-revealed > #ved-modal-background {opacity: 0.5;}#ved-ui-revealer {position: absolute; left: 0; bottom: 0; width: 100%; height: " +
            X(l) + "%; transition: transform " + X(.5) + "s ease-in-out; transform: translateY(100%);}#ved-ui-revealer.ved-no-animation {transition-property: none;}.ved-revealed > #ved-ui-revealer {transform: translateY(0);}#ved-scroller-container {position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; clip-path: inset(0 0 -50px 0 round " + X(Lw()) + "px);}#ved-scroller {position: relative; width: 100%; height: 100%; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none; overflow-y: scroll; overscroll-behavior: none; scroll-snap-type: y mandatory;}#ved-scroller.ved-scrolling-paused {overflow: hidden;}#ved-scroller.ved-no-snap {scroll-snap-type: none;}#ved-scroller::-webkit-scrollbar {display: none;}#ved-scrolled-stack {width: 100%; height: 100%; overflow: visible;}#ved-scrolled-stack.ved-with-background {background-color: white;}.ved-snap-point-top {scroll-snap-align: start;}.ved-snap-point-bottom {scroll-snap-align: end;}#ved-fully-closed-anchor {height: " +
            X(k / l * 100) + "%;}.ved-with-background #ved-fully-closed-anchor {background-color: white;}#ved-partially-extended-anchor {height: " + X((l - k) / l * 100) + "%;}.ved-with-background #ved-partially-extended-anchor {background-color: white;}#ved-moving-handle-holder {scroll-snap-stop: always;}.ved-with-background #ved-moving-handle-holder {background-color: white;}#ved-fixed-handle-holder {position: absolute; left: 0; top: 0; width: 100%;}#ved-visible-scrolled-items {display: flex; flex-direction: column; min-height: " +
            X(k / l * 100) + "%;}#ved-content-background {width: 100%; flex-grow: 1; padding-top: 1px; margin-top: -1px; background-color: white;}#ved-content-sizer {overflow: hidden; width: 100%; height: 100%;}#ved-content-container {width: 100%;}#ved-over-scroll-block {display: flex; flex-direction: column; position: absolute; bottom: 0; left: 0; width: 100%; height: " + X(k / l * 100) + "%; pointer-events: none;}#ved-over-scroll-handle-spacer {height: " + X(Nw() + 50) + "px;}#ved-over-scroll-background {flex-grow: 1; background-color: white;}.ved-handle {align-items: flex-end; border-radius: " +
            X(Lw()) + "px " + X(Lw()) + "px 0 0; background: white; display: flex; height: " + X(Nw()) + 'px; justify-content: center; cursor: grab;}.ved-handle-icon {background: #dadce0; border-radius: 2px; height: 4px; margin-bottom: 8px; width: 50px;}.ved-hidden {visibility: hidden;}</style><div id="ved-drawer-container"><div id="ved-modal-background"></div><div id="ved-ui-revealer"><div id="ved-over-scroll-block" class="ved-hidden"><div id=\'ved-over-scroll-handle-spacer\'></div><div id=\'ved-over-scroll-background\'></div></div><div id="ved-scroller-container"><div id="ved-scroller"><div id="ved-scrolled-stack"><div id="ved-fully-closed-anchor" class="ved-snap-point-top"></div><div id="ved-partially-extended-anchor" class="ved-snap-point-top"></div><div id="ved-visible-scrolled-items"><div id="ved-moving-handle-holder" class="ved-snap-point-top">' +
            Ow("ved-moving-handle") + '</div><div id="ved-content-background"><div id="ved-content-sizer" class="ved-snap-point-bottom"><div id="ved-content-container"></div></div></div></div></div></div></div><div id="ved-fixed-handle-holder" class="ved-hidden">' + Ow("ved-fixed-handle") + "</div></div></div>");
        g.call(f, Ig(h, Av(k)));
        g = tw("ved-content-container", f);
        g.appendChild(b);
        Cb(a.document.body.offsetHeight);
        b = {
            sb: tw("ved-drawer-container", f),
            Wc: tw("ved-modal-background", f),
            Ge: tw("ved-ui-revealer", f),
            ca: tw("ved-scroller",
                f),
            Eb: tw("ved-scrolled-stack", f),
            zf: tw("ved-fully-closed-anchor", f),
            Ea: tw("ved-partially-extended-anchor", f),
            Ld: tw("ved-content-sizer", f),
            Ec: g,
            Ck: tw("ved-moving-handle", f),
            kc: tw("ved-moving-handle-holder", f),
            yf: tw("ved-fixed-handle", f),
            Sd: tw("ved-fixed-handle-holder", f),
            te: tw("ved-over-scroll-block", f),
            nd: e
        };
        e = b.yf;
        e = new Hm(new ym(a, e), new vm(e));
        f = e.j;
        f.A.addEventListener("mousedown", f.D);
        f.v.addEventListener("mouseup", f.B);
        f.v.addEventListener("mousemove", f.C, {
            passive: !1
        });
        f = e.l;
        f.l.addEventListener("touchstart",
            f.C);
        f.l.addEventListener("touchend", f.A);
        f.l.addEventListener("touchmove", f.B, {
            passive: !1
        });
        b = new rx(a, b, new Tw(e));
        b.init();
        d = new tx(a, b, Tm(a), d);
        Ik(d, Ca(Gk, b));
        d.init();
        c.Ia && ((a = Bw(a)) ? ux(d, a, c.Xc) : c.Xc ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function ux(a, b, c) {
        mm(a.l.l, !0, () => {
            try {
                Dw(b)
            } catch (d) {
                c ? .(d)
            }
        });
        mm(a.l.l, !1, () => {
            try {
                b.l && (b.l(), b.l = null)
            } catch (d) {
                c ? .(d)
            }
        });
        (new qm(b.m)).Z(() => void a.collapse());
        Ik(a, Ca(Gk, b))
    }

    function vx(a) {
        mm(fm(ax(a.l), bx(a.l)), !0, () => {
            Z(a.l).Ea.classList.remove("ved-snap-point-top")
        });
        km(Zw(a.l), !0, () => {
            Z(a.l).ca.classList.add("ved-no-snap")
        });
        km(Zw(a.l), !1, () => {
            Z(a.l).ca.classList.remove("ved-no-snap")
        });
        mm(Zw(a.l), !1, () => {
            var b = a.l;
            var c = Z(b).kc;
            c = px(b, cx(b, c));
            b.win.setTimeout(c, 100)
        })
    }

    function wx(a) {
        const b = a.l.H;
        Pw(b).Z(c => {
            c = -c;
            if (0 < c) {
                const {
                    Ge: d
                } = Z(a.l);
                d.classList.add("ved-no-animation");
                d.style.setProperty("transform", `translateY(${c}px)`)
            } else({
                Ge: c
            } = Z(a.l)), c.classList.remove("ved-no-animation"), c.style.removeProperty("transform")
        });
        Sw(b).Z(c => {
            30 < -c && a.collapse()
        })
    }
    var tx = class extends Hk {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.l = b;
            mm(Ww(b), !0, () => {
                Vm(c);
                mw(d)
            });
            mm(Ww(b), !1, () => {
                Xm(c);
                nw(d)
            })
        }
        show({
            Nd: a = !1
        } = {}) {
            if (this.B) throw Error("Cannot show drawer after disposal");
            Uw(this.l);
            a && mm(Ww(this.l), !1, () => {
                this.xa()
            })
        }
        collapse() {
            var a = this.l;
            Z(a).sb.classList.remove("ved-revealed");
            R(a.l, !1)
        }
        isVisible() {
            return Ww(this.l)
        }
        init() {
            (new qm(this.l.C)).Z(() => {
                this.collapse()
            });
            vx(this);
            wx(this);
            Cb(this.win.document.body.offsetHeight)
        }
    };

    function xx(a) {
        const b = a.B ? .v() || void 0,
            c = a.B ? .A() || void 0;
        let d, e;
        1 === a.B ? .j() ? d = 14 : e = 2;
        return {
            backgroundColor: b,
            Wa: c,
            ne: d,
            me: e
        }
    }

    function yx(a) {
        const b = a.v.getElementsByClassName("autoprose-search-button")[0];
        return b ? b : a.v.getElementsByClassName("autoprose-searchbox")[0]
    }

    function zx(a) {
        const b = new ResizeObserver(async d => {
                a.j.height = 0;
                await new Promise(e => a.l.requestAnimationFrame(e));
                a.j.height = d[0].target.scrollHeight
            }),
            c = () => {
                const d = a.j.contentDocument ? .documentElement;
                d ? b.observe(d) : (console.warn("iframe body missing"), setTimeout(c, 1E3))
            };
        c()
    }
    var Ax = class {
        constructor(a, b, c, d, e, f, g) {
            this.l = a;
            this.A = (this.I = g) ? 500 > this.l.innerWidth : 2 === kh();
            this.v = c;
            this.m = d;
            this.K = e ? .v() ? .j() || "en";
            this.L = e ? .v() ? .v() || "Search results from ${website}";
            this.H = b.replace("ca", "partner");
            this.C = new rg(window.document);
            this.j = this.C.createElement("IFRAME");
            this.G = new gw(this.j, e ? .D() || "", "auto-prose", this.H, "AutoProseVariant", a.location.host, this.K, this.L, f, !1);
            a = this.j;
            this.D = this.A ? sx(this.l, a, {
                bd: .95,
                Mc: .95,
                zIndex: 100001,
                Ia: !0,
                Sb: !0
            }) : Ew(this.l, a, {
                Lc: "80vw",
                Dc: "",
                Jc: !1,
                zIndex: 100001,
                Ia: !0,
                Sb: !0
            });
            this.B = this.A ? e ? .B() : e ? .A()
        }
        init() {
            this.v.appendChild(Ag(document, (() => {
                if (this.A) {
                    var b = xx(this),
                        c = {
                            backgroundColor: b.backgroundColor,
                            Wa: b.Wa,
                            offsetTop: b.ne,
                            Yc: b.me
                        };
                    c = c || {};
                    var d = c.Rf,
                        e = c.Yc;
                    b = c.backgroundColor;
                    var f = c.Wa;
                    d = void 0 === d ? 16 : d;
                    c = c.offsetTop;
                    e = void 0 === e ? 2 : e;
                    f = void 0 === f ? "white" : f;
                    b = "<style>.autoprose-search-button {background: " + X(void 0 === b ? "#000" : b) + "; border-radius: " + X(24) + "px;" + (c ? "top: " + X(c) + "%;" : "bottom: " + X(e) + "%;") + "box-shadow: 0 0 10px rgba(0, 0, 0, 0.35); cursor: pointer; height: " +
                        X(48) + "px; position: fixed; right: " + X(d) + "px; width: 48px;}.autoprose-search-icon {left: " + X((48 - dw()) / 2) + "px; position: relative; top: " + X((48 - bw()) / 2) + 'px;}</style><div class="autoprose-search-button" tabindex="0" role="button"><div class="autoprose-search-icon">' + ew(f) + "</div></div>";
                    b = Fv(b);
                    return Av(b)
                }
                b = xx(this);
                c = {
                    lg: "Search",
                    backgroundColor: b.backgroundColor,
                    Wa: b.Wa,
                    offsetTop: b.ne,
                    Yc: b.me
                };
                d = c.Rf;
                var g = c.Yc;
                b = c.backgroundColor;
                f = c.Wa;
                d = void 0 === d ? 16 : d;
                e = c.offsetTop;
                g = void 0 === g ? 2 : g;
                c = c.lg;
                f = void 0 === f ? "white" : f;
                b = "<style>.autoprose-search-button {align-items: center; background: " + X(void 0 === b ? "#000" : b) + "; border-radius: " + X(24) + "px;" + (e ? "top: " + X(e) + "%;" : "bottom: " + X(g) + "%;") + "box-shadow: 0 0 10px rgba(0, 0, 0, 0.35); cursor: pointer; display: flex; height: " + X(48) + "px; line-height: 1; padding: 0 20px; position: fixed; right: " + X(d) + "px;}.autoprose-search-text {color: " + X(f) + '; font-family: Google Sans, Roboto, sans-serif; margin: 10px; user-select: none;}</style><div class="autoprose-search-button" tabindex="0" role="button"><div class="autoprose-search-icon">' +
                    ew(f) + '</div><div class="autoprose-search-text">' + Ev(c) + "</div></div>";
                b = Fv(b);
                return Av(b)
            })()));
            this.G.init();
            const a = yx(this);
            a ? (sv(this.m, "place", {
                sts: "ok"
            }), M(a, "click", () => {
                sv(this.m, "click", {});
                zx(this);
                this.D.show();
                const b = this.j.contentDocument.getElementsByTagName("input")[0];
                b ? b.focus({
                    preventScroll: !0
                }) : console.warn("searchbox missing")
            })) : sv(this.m, "place", {
                sts: "pfmsb"
            })
        }
    };

    function Bx(a) {
        const b = C(a.j, lo, 31) ? .j() ? .j() || 0,
            c = a.l.document,
            d = c.createElement("div");
        d.classList.add("auto-prose-wrapper");
        c.body.appendChild(d);
        (new Ax(a.l, a.m, d, a.v, C(a.j, lo, 31), b, C(a.j, Yn, 25) ? .j() || !1)).init()
    }
    var Cx = class {
        constructor(a, b, c, d) {
            this.l = a;
            this.j = c;
            this.v = new tv(a, b, C(this.j, lo, 31) || new lo);
            this.m = d
        }
    };

    function Dx(a, b) {
        ns(a.j, hs, { ...b,
            evt: "place",
            vh: Q(a.win).clientHeight,
            eid: a.l.j() ? .j() || 0,
            url: a.win.location.href
        })
    }
    var Ex = class {
        constructor(a, b, c) {
            this.win = a;
            this.j = b;
            this.l = c
        }
    };
    var Fx = class {
        constructor(a) {
            this.j = a
        }
        ya(a) {
            const b = a.document.createElement("div");
            N(b, pw(a));
            N(b, {
                width: "100%",
                "max-width": "1000px",
                margin: "auto"
            });
            b.appendChild(this.j);
            const c = a.document.createElement("div");
            N(c, pw(a));
            N(c, {
                width: "100%",
                "text-align": "center",
                display: "block",
                padding: "5px 5px 2px",
                "box-sizing": "border-box",
                "background-color": "#FFF"
            });
            c.appendChild(b);
            return c
        }
    };
    var Gx = (a, b) => (b = C(b, vo, 6)) ? Yu(b.j(), a).map(c => $s(c)) : [];
    var Hx = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    };

    function Ix(a) {
        M(a.l, "click", () => Jx(a));
        M(a.D, "click", () => void Jx(a));
        const b = a.width / a.win.innerWidth;
        M(a.win, "resize", () => {
            a.width = Math.floor(b * a.win.innerWidth);
            a.j.style.width = `${a.width}px`;
            a.j.style.height = `${a.win.innerHeight}px`;
            a.l.style.width = `${a.win.innerWidth}px`;
            a.l.style.height = `${a.win.innerHeight}px`;
            a.A && (a.v.style.transform = `translateX(${a.width}px)`)
        })
    }

    function Jx(a) {
        a.A = !0;
        a.j.scrollTop = 0;
        a.v.style.transitionDuration = ".5s";
        a.v.style.transform = `translateX(${a.width}px)`;
        a.l.style.opacity = "0";
        a.m.style.transitionDelay = ".5s";
        Cb(a.m.offsetWidth);
        a.m.style.visibility = "hidden";
        setTimeout(() => {
            a.win.document.documentElement.style.overflow = ""
        }, 500);
        for (const b of a.C) try {
            b()
        } catch (c) {
            console.error(c)
        }
    }
    var Kx = class {
        constructor(a, b) {
            this.win = a;
            this.width = b;
            this.C = [];
            this.A = !0;
            b = new rg(a.document);
            this.l = b.ha("DIV", {
                "class": "adpub-drawer-modal-background"
            });
            var c = a.document.createElementNS("http://www.w3.org/2000/svg", "svg");
            c.setAttribute("viewBox", "0 0 24 24");
            var d = a.document.createElementNS("http://www.w3.org/2000/svg", "path");
            d.setAttribute("fill", "#5f6368");
            d.setAttribute("d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z");
            c.appendChild(d);
            this.D = b.ha("DIV", {
                "class": "adpub-drawer-close-button"
            }, c);
            this.j = b.ha("DIV", {
                "class": "adpub-drawer-contents"
            });
            this.v = b.ha("DIV", {
                "class": "adpub-drawer"
            }, this.D, this.j);
            this.m = b.ha("DIV", {
                "class": "adpub-drawer-container"
            }, this.l, this.v);
            this.B = b.ha("DIV", {
                "class": "adpub-drawer-root"
            });
            c = this.B.attachShadow({
                mode: "open"
            });
            d = c.appendChild;
            var e = this.win.innerHeight - 5;
            const f = this.width,
                g = a.innerWidth;
            e = Fv("<style>.adpub-drawer-container {height: 100%; position: fixed; top: 0; transition: visibility 0s linear .5s; visibility: hidden; width: 100%; z-index: " +
                X(100002) + ";}.adpub-drawer-modal-background {background-color: black; height: " + X(e + 5) + "px; opacity: 0; position: absolute; transition: opacity .5s ease-in-out; width: " + X(g) + "px;}.adpub-drawer {position: absolute; transform: translateX(" + X(f) + "px); transition: transform .5s ease-in-out; height: 100%; overflow: auto; right: 0; border-radius: 20px 0 0 20px;}.adpub-drawer-close-button {color: #5f6368; height: 24px; width: 24px; top: 20px; right: 20px; position: fixed; cursor: pointer;}.adpub-drawer-contents {background: white; height: " +
                X(e) + "px; overflow-y: auto; padding-top: " + X(5) + "px; width: " + X(f) + "px;}</style>");
            d.call(c, Ig(b, Av(e)));
            c.appendChild(this.m);
            N(this.B, pw(a))
        }
        init() {
            this.win.document.body.appendChild(this.B);
            Ix(this)
        }
        T(a) {
            for (; this.j.firstChild;) this.j.removeChild(this.j.firstChild);
            this.j.appendChild(a)
        }
        show() {
            this.A = !1;
            this.win.document.documentElement.style.overflow = "hidden";
            this.m.style.transitionDelay = "0s";
            this.m.style.visibility = "visible";
            this.l.style.opacity = ".5";
            this.v.style.transform = "translateX(0)"
        }
        da(a) {
            this.C.push(a)
        }
    };

    function Lx(a) {
        M(a.H, "click", () => Mx(a));
        M(a.v, "mousedown", () => {
            const d = f => {
                    Nx(a, f.movementY)
                },
                e = () => {
                    Ox(a);
                    $d(a.v, "mousemove", d);
                    $d(a.v, "mouseup", e);
                    $d(a.v, "mouseleave", e)
                };
            M(a.v, "mousemove", d);
            M(a.v, "mouseup", e);
            M(a.v, "mouseleave", e)
        });
        M(a.j, "touchstart", d => {
            let e = d.touches[0];
            const f = h => {
                    const k = h.touches[0];
                    0 === Px(a) ? a.l.classList.add("scrollable") : a.l.classList.remove("scrollable");
                    if (e) {
                        var l = 0 === Px(a) && a.l.scrollTop;
                        const m = k.target === a.v || k.target.parentElement === a.v;
                        if (!l || m) l = k.screenY - e.screenY,
                            Nx(a, l), l = 0 < l && 0 === a.l.scrollTop, l = a.G && !l, h.cancelable && !l && h.preventDefault()
                    }
                    e = k
                },
                g = () => {
                    Ox(a);
                    $d(a.j, "touchmove", f);
                    $d(a.j, "touchend", g);
                    $d(a.j, "touchcancel", g)
                };
            M(a.j, "touchmove", f, {
                passive: !1
            });
            M(a.j, "touchend", g);
            M(a.j, "touchcancel", g)
        });
        M(a.A, "touchstart", () => {});
        const b = a.m / a.win.innerHeight,
            c = a.C / a.m;
        M(a.win, "resize", () => {
            a.m = Math.floor(b * a.win.innerHeight);
            a.C = Math.floor(c * a.m);
            a.B = a.win.innerHeight - (a.m + 30 - 20);
            const d = a.G ? 0 : a.m - a.C;
            a.l.style.height = `${a.m}px`;
            a.j.style.transform = a.I ? `translateY(${a.m+ 
a.B}px)` : `translateY(${d+a.B}px)`
        })
    }

    function Qx(a, b) {
        var c = ["https://cse.google.com"];
        const d = ["touchstart", "touchmove", "touchend", "touchcancel"],
            e = (k, l, m) => {
                try {
                    const n = m.map(q => new Touch(q));
                    k.dispatchEvent(new TouchEvent(l, {
                        bubbles: !0,
                        cancelable: !0,
                        touches: n
                    }))
                } catch {
                    l = new UIEvent(l, {
                        bubbles: !0,
                        cancelable: !0,
                        detail: 1,
                        view: a.win
                    });
                    for (const n of m) k.dispatchEvent(Object.assign(l, {
                        touches: [n]
                    }))
                }
            },
            f = k => {
                k = k.contentDocument;
                for (const l of d) M(k, l, m => {
                    m = [...m.touches].map(n => ({
                        clientX: n.clientX,
                        clientY: n.clientY,
                        force: n.force,
                        identifier: n.identifier,
                        pageX: n.pageX,
                        pageY: n.pageY,
                        radiusX: n.radiusX,
                        radiusY: n.radiusY,
                        rotationAngle: n.rotationAngle,
                        screenX: n.screenX,
                        screenY: n.screenY,
                        target: a.l
                    }));
                    e(a.j, l, m)
                })
            },
            g = k => {
                if ((void 0 === c || c.includes(k.origin)) && d.includes(k.data ? .type) && Array.isArray(k.data ? .touches)) {
                    var l = k.data.type;
                    k = k.data.touches.map(m => ({ ...m,
                        target: a.l
                    }));
                    e(a.j, l, k)
                }
            },
            h = k => {
                k.contentWindow ? M(k.contentWindow, "message", g) : console.error("Loaded iframe missing content window.")
            };
        "complete" === b.contentDocument ? .readyState && (h(b), f(b));
        M(b, "load", () => {
            h(b);
            f(b)
        })
    }

    function Rx(a, b, c) {
        a.N.set(b, a.win.document.documentElement.style.getPropertyValue(b) ? ? "");
        a.win.document.documentElement.style.setProperty(b, c)
    }

    function Sx(a, b) {
        const c = a.N.get(b) ? ? "";
        a.win.document.documentElement.style.setProperty(b, c)
    }

    function Mx(a) {
        a.I = !0;
        a.G = !1;
        Sx(a, "position");
        Sx(a, "width");
        Sx(a, "transform");
        Sx(a, "overflow");
        Sx(a, "touch-action");
        null != a.D && (a.win.document.documentElement.scrollTop = a.D, a.win.document.body.scrollTop = a.D);
        Sx(a, "scroll-behavior");
        a.A.style.transform = "";
        a.l.scrollTop = 0;
        a.l.classList.remove("scrollable");
        a.j.style.transitionDuration = ".5s";
        a.j.style.transform = `translateY(${a.m+a.B}px)`;
        a.H.style.opacity = "0";
        a.A.style.transitionDelay = ".5s";
        Cb(a.A.offsetHeight);
        a.A.style.visibility = "hidden";
        for (const b of a.L) try {
            b()
        } catch (c) {
            console.error(c)
        }
    }

    function Nx(a, b) {
        a.j.style.transitionDuration = "0s";
        b = Math.max(Px(a) + b, 0) + a.B;
        a.j.style.transform = `translateY(${b}px)`;
        Cb(a.j.offsetHeight);
        a.j.style.transitionDuration = ".5s"
    }

    function Ox(a) {
        const b = Px(a);
        if (a.G) 50 < b ? Mx(a) : 0 !== b && Tx(a, 0);
        else {
            const c = a.m - a.C;
            b < c - 50 ? Tx(a, 0) : b > c + 50 ? Mx(a) : b !== c && Tx(a, a.m - a.C)
        }
    }

    function Px(a) {
        return Number(((new DOMMatrix(a.j.style.transform ? ? null)).f - a.B).toFixed(1))
    }

    function Tx(a, b) {
        a.I = !1;
        0 === b && (a.G = !0, a.l.classList.add("scrollable"));
        a.A.style.transitionDelay = "0s";
        a.A.style.visibility = "visible";
        a.H.style.opacity = ".5";
        a.j.style.transform = `translateY(${b+a.B}px)`
    }
    var Ux = class {
        constructor(a, b, c) {
            this.win = a;
            this.C = b;
            this.m = c;
            this.L = [];
            this.N = new Map;
            this.G = !1;
            this.I = !0;
            this.D = null;
            b = new rg(a.document);
            this.H = b.ha("DIV", {
                "class": "cse-modal-background",
                tabindex: 1
            });
            var d = b.ha("DIV", {
                "class": "cse-drawer-handle-icon"
            });
            this.v = b.ha("DIV", {
                "class": "cse-drawer-handle"
            }, d);
            this.l = b.ha("DIV", {
                "class": "cse-drawer-contents"
            });
            this.j = b.ha("DIV", {
                "class": "cse-drawer"
            }, this.v, this.l);
            this.A = b.ha("DIV", {
                "class": "cse-drawer-container"
            }, this.H, this.j);
            this.K = b.ha("DIV", {
                "class": "adpub-drawer-root"
            });
            this.B = a.innerHeight - (c + 30 - 20);
            c = this.K.attachShadow({
                mode: "open"
            });
            d = c.appendChild;
            var e = this.m;
            const f = this.B;
            e = Fv("<style>.cse-drawer-container {height: 100%; left: 0; position: fixed; top: 0; transition: visibility 0s linear .5s; visibility: hidden; width: 100%; z-index: " + X(100002) + ";}.cse-modal-background {background-color: black; height: 100vh; opacity: 0; overflow: hidden; position: absolute; transition: opacity .5s ease-in-out; width: 100%;}.cse-drawer {background: white; position: absolute; transform: translateY(" +
                X(e + f) + "px); transition: transform .5s ease-in-out; width: 100%;}.cse-drawer-handle {align-items: flex-end; border-radius: " + X(20) + "px " + X(20) + "px 0 0; background: white; display: flex; height: " + X(30) + "px; justify-content: center; margin-top: " + X(-20) + "px;}.cse-drawer-handle-icon {background: #dadce0; border-radius: 2px; height: 4px; margin-bottom: 8px; width: 50px;}.cse-drawer-contents {background: white; height: " + X(e) + "px; scrollbar-width: none; overflow: hidden;}.cse-drawer-scroller::-webkit-scrollbar {display: none;}.scrollable {overflow: auto;}</style>");
            d.call(c, Ig(b, Av(e)));
            c.appendChild(this.A);
            N(this.K, pw(a))
        }
        init() {
            this.win.document.body.appendChild(this.K);
            Lx(this)
        }
        T(a) {
            for (; this.l.firstChild;) this.l.removeChild(this.l.firstChild);
            this.l.appendChild(a)
        }
        show() {
            this.D = this.win.document.documentElement.scrollTop + this.win.document.body.scrollTop;
            Rx(this, "transform", `translateY(${-this.D}px)`);
            Rx(this, "position", "fixed");
            Rx(this, "width", "100%");
            Rx(this, "overflow", "hidden");
            Rx(this, "touch-action", "none");
            Rx(this, "scroll-behavior", "auto");
            this.A.style.transform =
                `translateY(${this.D}px)`;
            Tx(this, this.m - this.C)
        }
        da(a) {
            this.L.push(a)
        }
    };

    function Vx(a) {
        if (a.j instanceof Ux || a.j instanceof Kx) a.j.init(), a.j.T(a.l), a.j instanceof Ux && Qx(a.j, a.l), a.j.da(() => void nw(a.G)), Rr(1075, () => a.B.init(), a.win)
    }

    function Wx(a) {
        let b;
        a.m.id = "cse-overlay-div";
        N(a.m, {
            "background-color": "white",
            border: "none",
            "border-radius": "16px 16px 16px 16px",
            "box-shadow": "0 3px 10px rgb(34 25 25 / 40%)",
            display: "none",
            "flex-direction": "column",
            height: "90%",
            left: "2.5%",
            margin: "auto",
            overflow: "auto",
            position: "fixed",
            padding: "1%",
            top: "5%",
            transition: "all 0.25s linear",
            width: "95%",
            "z-index": 100002
        });
        b = a.v.createElement("DIV");
        b.id = "cse-overlay-close-button";
        N(b, {
            "background-image": "url(//www.google.com/images/nav_logo114.png)",
            "background-position": "-140px -230px",
            "background-repeat": "no-repeat",
            cursor: "pointer",
            display: "block",
            "float": "right",
            height: "12px",
            opacity: 1,
            position: "absolute",
            right: "15px",
            top: "15px",
            width: "12px"
        });
        a.A.classList.add("gsc-modal-background-image");
        a.A.setAttribute("tabindex", 0);
        a.win.document.body.appendChild(a.m);
        a.win.document.body.appendChild(a.A);
        const c = () => {
            "flex" === a.m.style.display && (a.m.style.display = "none");
            a.A.classList.remove("gsc-modal-background-image-visible");
            nw(a.G)
        };
        b.onclick =
            c;
        a.A.onclick = c;
        a.m.appendChild(b);
        a.m.appendChild(a.l);
        Rr(1075, () => a.B.init(), a.win)
    }

    function Xx(a) {
        const b = a.v.createElement("SCRIPT");
        var c = O `https://cse.google.com/cse.js?cx=9d449ff4a772956c6`;
        c = Nh(c, new Map([
            ["language", a.language]
        ]));
        rf(b, c);
        a.win.document.head.appendChild(b)
    }

    function Yx(a) {
        (function(c, d) {
            c[d] = c[d] || function() {
                (c[d].q = c[d].q || []).push(arguments)
            };
            c[d].t = 1 * new Date
        })(a.win, "_googCsa");
        const b = a.K.map(c => ({
            container: c,
            relatedSearches: 5
        }));
        a.win._googCsa("relatedsearch", {
            pubId: a.H,
            styleId: "5134551505",
            hl: a.language,
            fexp: a.I,
            channel: "AutoRsVariant",
            resultsPageBaseUrl: "http://google.com",
            resultsPageQueryParam: "q",
            relatedSearchTargeting: "content",
            relatedSearchResultClickedCallback: a.T.bind(a),
            relatedSearchUseResultCallback: !0
        }, b)
    }
    var Zx = class {
        constructor(a, b, c, d, e, f, g, h, k, l) {
            this.win = a;
            this.K = b;
            this.language = d ? .j() || "en";
            this.N = d ? .v() || "Search results from ${website}";
            this.L = e;
            this.D = f;
            this.C = g;
            this.I = h;
            this.H = c.replace("ca", "partner");
            this.G = hw(new lw(a), 1E5);
            this.v = new rg(a.document);
            this.m = this.v.createElement("DIV");
            this.A = this.v.createElement("DIV");
            this.l = this.v.createElement("IFRAME");
            this.B = new gw(this.l, l.l ? l.j : "9d449ff4a772956c6", "auto-rs-prose", this.H, "AutoRsVariant", a.location.host, this.language, this.N, this.I,
                k);
            g ? (a = this.l, a = this.C ? 2 === kh() ? sx(this.win, a, {
                bd: .95,
                Mc: .95,
                zIndex: 100001,
                Ia: !0
            }) : Ew(this.win, a, {
                Lc: "min(65vw, 768px)",
                Dc: "",
                Jc: !1,
                zIndex: 100001,
                Ia: !0
            }) : null) : this.D ? 2 === kh() ? (a = Math.round(.95 * this.win.innerHeight) - 30, a = new Ux(this.win, a, a)) : a = new Kx(this.win, Math.min(768, Math.round(.65 * this.win.innerWidth))) : a = null;
            this.j = a
        }
        init() {
            this.D || this.C || !this.win.document.querySelector('script[src*="cse.google.com/cse"]') ? 0 !== this.K.length && (this.C ? Rr(1075, () => this.B.init(), this.win) : this.D ? Vx(this) :
                (Wx(this), Xx(this)), Rr(1076, () => {
                    const a = this.v.createElement("SCRIPT");
                    rf(a, O `https://www.google.com/adsense/search/async-ads.js`);
                    this.win.document.head.appendChild(a)
                }, this.win), Yx(this), Dx(this.L, {
                    sts: "ok"
                })) : Dx(this.L, {
                sts: "pfec"
            })
        }
        T(a, b) {
            this.C || mw(this.G);
            this.D || this.C ? (fw(this.B, a, b), (() => {
                const c = new ResizeObserver(async e => {
                        this.l.height = 0;
                        await new Promise(f => this.win.requestAnimationFrame(f));
                        this.l.height = e[0].target.scrollHeight
                    }),
                    d = () => {
                        const e = this.l.contentDocument ? .documentElement;
                        e ? c.observe(e) : (console.warn("iframe body missing"), setTimeout(d, 1E3))
                    };
                d();
                this.j.show()
            })()) : (this.A.classList.add("gsc-modal-background-image-visible"), this.m.style.display = "flex", fw(this.B, a, b))
        }
    };

    function $x(a) {
        const b = Gs(a.m.V),
            c = a.A.ya(a.B, () => a.remove());
        b.appendChild(c);
        a.v && (b.className = a.v);
        return {
            sf: b,
            mf: c
        }
    }
    class ay {
        constructor(a, b, c, d) {
            this.B = a;
            this.m = b;
            this.A = c;
            this.v = d || null;
            this.j = null;
            this.l = new em(null)
        }
        init() {
            const a = $x(this);
            this.j = a.sf;
            Os(this.m, this.j);
            R(this.l, a.mf)
        }
        remove() {
            this.j && this.j.parentNode && this.j.parentNode.removeChild(this.j);
            this.j = null;
            R(this.l, null)
        }
        C() {
            return this.l
        }
    };

    function by(a) {
        var b = Gx(a.l, a.j);
        b = cy(a.l, b, a.U, a.A, a.m);
        const c = dy(b, a.l),
            d = So(a.j) ? .j() ? .j() || So(a.j) ? .v() || 0,
            e = So(a.j) ? .D() || !1,
            f = So(a.j) ? .G() || !1,
            g = So(a.j) ? .H() || !1,
            h = ey(a.j);
        C(a.j, Yn, 25) ? .j() || Rr(1074, () => (new Zx(a.l, c, a.v, So(a.j) ? .B(), a.m, e, f, d, g, h)).init(), a.l)
    }
    var fy = class {
        constructor(a, b, c, d, e, f) {
            this.l = a;
            this.j = c;
            this.m = new Ex(a, b, So(this.j) || new mo);
            this.v = d;
            this.U = e;
            this.A = f
        }
    };

    function gy(a, b, c) {
        c = c ? D(c, Un, 5) : [];
        const d = Ku(a.document, c),
            e = Lu();
        return b.filter(f => !(e(f) || d(f)))
    }

    function cy(a, b, c, d, e) {
        b = ct(b, a).sort(hy);
        return 0 == b.length ? (Dx(e, {
            sts: "pfno"
        }), []) : d && (b = gy(a, b, c), 0 == b.length) ? (Dx(e, {
            sts: "pffa"
        }), []) : [b[Math.floor(b.length / 2)]]
    }

    function hy(a, b) {
        return a.ba.j - b.ba.j
    }

    function dy(a, b) {
        const c = [];
        for (let d = 0; d < a.length; d++) {
            const e = a[d],
                f = "autors-container-" + d,
                g = b.document.createElement("div");
            g.setAttribute("id", f);
            (new ay(b, e, new Fx(g))).init();
            c.push(f)
        }
        return c
    }

    function ey(a) {
        const b = So(a) ? .I() || !1;
        a = So(a) ? .A() || "";
        return new Hx(b, a)
    };
    var iy = {
            Bh: "google_ads_preview",
            hi: "google_mc_lab",
            Ai: "google_anchor_debug",
            zi: "google_bottom_anchor_debug",
            INTERSTITIAL: "google_ia_debug",
            Vi: "google_scr_debug",
            Xi: "google_ia_debug_allow_onclick",
            qj: "googleads",
            Me: "google_pedestal_debug",
            Jj: "google_responsive_slot_preview",
            Ij: "google_responsive_dummy_ad",
            sh: "google_audio_sense",
            th: "google_auto_gallery",
            wh: "google_auto_storify_swipeable",
            uh: "google_auto_storify_scrollable",
            sj: "google_pga_monetization"
        },
        jy = {
            google_bottom_anchor_debug: 1,
            google_anchor_debug: 2,
            google_ia_debug: 8,
            google_scr_debug: 9,
            googleads: 2,
            google_pedestal_debug: 30
        };
    var ky = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        Nj: 4,
        1: "INTERSTITIAL",
        2: "BOTTOM_ANCHOR",
        3: "TOP_ANCHOR",
        4: "SCROLL_TRIGGERED_IMMERSIVE"
    };

    function ly(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = my(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function my(a) {
        let b = "";
        Ug(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    }

    function ny() {
        var a = t.location;
        let b = !1;
        Ug(iy, c => {
            ly(a, c) && (b = !0)
        });
        return b
    }

    function oy(a, b) {
        switch (a) {
            case 1:
                return ly(b, "google_ia_debug");
            case 2:
                return ly(b, "google_bottom_anchor_debug");
            case 3:
                return ly(b, "google_anchor_debug") || ly(b, "googleads");
            case 4:
                return ly(b, "google_scr_debug")
        }
    };
    var py = (a, b, c) => {
        const d = [];
        C(a, Do, 18) && d.push(2);
        b.U && d.push(0);
        So(a) && 1 == nd(So(a), 1) && d.push(1);
        C(a, lo, 31) && 1 == nd(C(a, lo, 31), 1) && d.push(5);
        (C(a, ho, 27) && 1 == nd(C(a, ho, 27), 1) || ly(c, "google_audio_sense")) && d.push(3);
        C(a, Go, 29) && d.push(4);
        return d
    };

    function qy(a, b) {
        const c = qg(a).createElement("IMG");
        ry(a, c);
        c.src = "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg";
        N(c, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: null == b ? "auto" : "pointer"
        });
        b && c.addEventListener("click", d => {
            b();
            d.stopPropagation()
        });
        return c
    }

    function sy(a, b) {
        const c = b.document.createElement("button");
        ry(b, c);
        N(c, {
            display: "inline",
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.l));
        c.addEventListener("click", d => {
            a.m();
            d.stopPropagation()
        });
        return c
    }

    function ty(a, b, c) {
        const d = qg(b).createElement("IMG");
        d.src = "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg";
        d.setAttribute("aria-label", a.v);
        ry(b, d);
        N(d, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        d.addEventListener("click", e => {
            c();
            e.stopPropagation()
        });
        return d
    }

    function uy(a) {
        const b = a.document.createElement("ins");
        ry(a, b);
        N(b, {
            "float": "left",
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)"
        });
        return b
    }
    class vy {
        constructor(a, b, c) {
            this.l = a;
            this.v = b;
            this.m = c;
            this.j = new em(!1)
        }
        ya(a, b, c, d) {
            const e = qy(a, d),
                f = qy(a),
                g = sy(this, a),
                h = ty(this, a, c);
            a = uy(a);
            a.appendChild(e);
            a.appendChild(f);
            a.appendChild(g);
            a.appendChild(h);
            this.j.Z(k => {
                N(e, {
                    display: k ? "none" : "inline"
                });
                N(f, {
                    display: k ? "inline" : "none"
                });
                k ? (N(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), N(h, {
                        margin: "0px 12px 0px 8px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 100ms 50ms, opacity 50ms 50ms, width 100ms 50ms"
                    })) :
                    (N(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), N(h, {
                        margin: "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 100ms, opacity 50ms, width 100ms"
                    }))
            }, !0);
            return a
        }
        Vd() {
            return 40
        }
        qe() {
            R(this.j, !1);
            return 0
        }
        se() {
            R(this.j, !0)
        }
    }

    function ry(a, b) {
        N(b, pw(a));
        N(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#3C4043",
            "user-select": "none"
        })
    };

    function wy(a, b) {
        const c = b.document.createElement("button");
        xy(a, b, c);
        b = {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "8px 0px",
            "background-color": a.l
        };
        a.j && (b["border-top"] = a.j, b["border-bottom"] = a.j);
        N(c, b);
        c.addEventListener("click", d => {
            a.B();
            d.stopPropagation()
        });
        return c
    }

    function yy(a, b, c, d) {
        const e = b.document.createElement("div");
        N(e, pw(b));
        N(e, {
            "align-items": "center",
            "background-color": a.l,
            display: "flex",
            "justify-content": "center"
        });
        const f = b.document.createElement("span");
        f.appendChild(b.document.createTextNode(d));
        N(f, pw(b));
        N(f, {
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            padding: "8px 0px"
        });
        b = b.matchMedia("(min-width: 768px)");
        d = g => {
            g.matches ? (N(e, {
                    "flex-direction": "row"
                }), a.j && N(e, {
                    "border-top": a.j,
                    "border-bottom": a.j
                }), N(f, {
                    "margin-left": "8px",
                    "text-align": "start"
                }),
                N(c, {
                    border: "0",
                    "margin-right": "8px",
                    width: "auto"
                })) : (N(e, {
                border: "0",
                "flex-direction": "column"
            }), N(f, {
                "margin-left": "0",
                "text-align": "center"
            }), N(c, {
                "margin-right": "0",
                width: "100%"
            }), a.j && N(c, {
                "border-top": a.j,
                "border-bottom": a.j
            }))
        };
        d(b);
        b.addEventListener("change", d);
        e.appendChild(c);
        e.appendChild(f);
        return e
    }

    function xy(a, b, c) {
        N(c, pw(b));
        N(c, {
            "font-family": "Arial,sans-serif",
            "font-weight": a.C,
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: a.D,
            "user-select": "none",
            cursor: "pointer"
        })
    }
    class zy {
        constructor(a, b, c, d, e, f = null, g = null, h = null) {
            this.A = a;
            this.B = b;
            this.D = c;
            this.l = d;
            this.C = e;
            this.v = f;
            this.j = g;
            this.m = h
        }
        ya(a) {
            const b = a.document.createElement("div");
            xy(this, a, b);
            N(b, {
                display: "inline-flex",
                padding: "8px 0px",
                "background-color": this.l
            });
            if (this.v) {
                var c = qg(a).createElement("IMG");
                c.src = this.v;
                xy(this, a, c);
                N(c, {
                    margin: "0px 8px 0px 0px",
                    width: "24px",
                    height: "24px"
                })
            } else c = null;
            c && b.appendChild(c);
            c = a.document.createElement("span");
            xy(this, a, c);
            N(c, {
                "line-height": "24px"
            });
            c.appendChild(a.document.createTextNode(this.A));
            b.appendChild(c);
            c = wy(this, a);
            c.appendChild(b);
            return this.m ? yy(this, a, c, this.m) : c
        }
    };
    var Ay = (a, b) => {
        b = b.filter(c => {
            var d = C(c, yn, 4);
            return 5 == w(d, 1) && 1 == w(c, 8)
        });
        b = xs(b, a);
        a = ct(b, a);
        a.sort((c, d) => d.ba.j - c.ba.j);
        return a[0] || null
    };

    function By({
        J: a,
        Vc: b,
        Tc: c,
        Hd: d,
        aa: e,
        hf: f
    }) {
        let g = 0;
        try {
            g |= a != a.top ? 512 : 0;
            const h = Math.min(a.screen.width || 0, a.screen.height || 0);
            g |= h ? 320 > h ? 8192 : 0 : 2048;
            g |= a.navigator && Cy(a.navigator.userAgent) ? 1048576 : 0;
            g = b ? g | (a.innerHeight >= b ? 0 : 1024) : g | (a.innerHeight >= a.innerWidth ? 0 : 8);
            g |= Hl(a, c);
            g |= Il(a)
        } catch {
            g |= 32
        }
        switch (d) {
            case 2:
                Dy(a, e) && (g |= 16777216);
                break;
            case 1:
                Ey(a, e) && (g |= 16777216)
        }
        f && Fy(a, e) && (g |= 16777216);
        return g
    }

    function Cy(a) {
        return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a)
    }
    var Dy = (a, b = null) => {
            const c = Gy(a.innerWidth, 3, 0, Math.min(Math.round(a.innerWidth / 320 * 50), Hy) + 15, 3);
            return Iy(a, c, b)
        },
        Ey = (a, b = null) => {
            const c = a.innerWidth,
                d = a.innerHeight,
                e = Math.min(Math.round(a.innerWidth / 320 * 50), Hy) + 15,
                f = Gy(c, 3, d - e, d, 3);
            25 < e && f.push({
                x: c - 25,
                y: d - 25
            });
            return Iy(a, f, b)
        };

    function Fy(a, b = null) {
        return null != Jy(a, b)
    }

    function Jy(a, b = null) {
        var c = a.innerWidth;
        const d = a.innerHeight,
            e = W(rq);
        c = Gy(c, 10, d - e, d, 10);
        return Ky(a, c, b)
    }

    function Ly(a, b) {
        const c = a.innerWidth,
            d = a.innerHeight;
        let e = d;
        for (; e > b;) {
            var f = Gy(c, 9, e - b, e, 9);
            f = Ky(a, f);
            if (!f) return d - e;
            e = f.getBoundingClientRect().top - 1
        }
        return null
    }

    function Iy(a, b, c = null) {
        return null != Ky(a, b, c)
    }

    function Ky(a, b, c = null) {
        for (const d of b)
            if (b = My(a, d, c)) return b;
        return null
    }

    function My(a, b, c = null) {
        const d = Ny(a.document, b.x, b.y);
        return d ? Oy(d, a, b, c) || Py(d, a, b, c) || null : null
    }

    function Ny(a, b, c) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b, c));
        return a.elementFromPoint(b, c)
    }

    function Py(a, b, c, d = null) {
        const e = b.document;
        for (a = a.offsetParent; a && a !== e.body; a = a.offsetParent) {
            const f = Oy(a, b, c, d);
            if (f) return f
        }
        return null
    }

    function Gy(a, b, c, d, e) {
        const f = [];
        for (let l = 0; l < e; l++)
            for (let m = 0; m < b; m++) {
                var g = f,
                    h = b - 1,
                    k = e - 1;
                g.push.call(g, {
                    x: (0 === h ? 0 : m / h) * a,
                    y: c + (0 === k ? 0 : l / k) * (d - c)
                })
            }
        return f
    }

    function Oy(a, b, c, d = null) {
        if ("fixed" !== Uh(a, "position")) return null;
        var e = "GoogleActiveViewInnerContainer" === a.getAttribute("class") || 1 >= Xh(a).width && 1 >= Xh(a).height ? !0 : !1;
        d && Fi(d, "ach_evt", {
            url: b.location.href,
            tn: a.tagName,
            id: a.getAttribute("id") ? ? "",
            cls: a.getAttribute("class") ? ? "",
            ign: String(e),
            pw: b.innerWidth,
            ph: b.innerHeight,
            x: c.x,
            y: c.y
        }, !0, 1);
        return e ? null : a
    }
    const Hy = 90 * 1.38;

    function Qy(a) {
        if (a.D) {
            const b = Ol(a.j);
            if (b > a.l + 100 || b < a.l - 100) Ry(a), a.l = Kl(a.j)
        }
        a.G && a.j.clearTimeout(a.G);
        a.G = a.j.setTimeout(() => Sy(a), 200)
    }

    function Sy(a) {
        var b = Kl(a.j);
        a.l && a.l > b && (a.l = b);
        b = Ol(a.j);
        b >= a.l - 100 && (a.l = Math.max(a.l, b), Ty(a))
    }

    function Uy(a) {
        a.j.removeEventListener("scroll", a.I)
    }

    function Ry(a) {
        a.D = !1;
        const b = a.A.qe();
        switch (b) {
            case 0:
                R(a.v, a.B);
                break;
            case 1:
                a.m && (N(a.m, {
                    display: "none"
                }), R(a.v, null));
                break;
            default:
                throw Error("Unhandled OnHideOutcome: " + b);
        }
    }

    function Ty(a) {
        a.m || (a.m = Vy(a));
        N(a.m, {
            display: "block"
        });
        a.D = !0;
        a.A.se();
        R(a.v, a.B)
    }

    function Vy(a) {
        var b = Ly(a.j, a.A.Vd() + 60);
        b = null == b ? 30 : b + 30;
        const c = a.j.document.createElement("div");
        N(c, pw(a.j));
        N(c, {
            position: "fixed",
            left: "0px",
            bottom: b + "px",
            width: "100vw",
            "text-align": "center",
            "z-index": 2147483642,
            display: "none",
            "pointer-events": "none"
        });
        a.B = a.A.ya(a.j, () => a.remove(), () => {
            Uy(a);
            Ry(a)
        }, () => {
            Uy(a);
            Ty(a)
        });
        c.appendChild(a.B);
        a.H && (c.className = a.H);
        a.j.document.body.appendChild(c);
        return c
    }
    class Wy {
        constructor(a, b, c) {
            this.j = a;
            this.A = b;
            this.B = null;
            this.v = new em(null);
            this.H = c || null;
            this.m = null;
            this.D = !1;
            this.l = 0;
            this.G = null;
            this.I = () => Qy(this)
        }
        init() {
            this.j.addEventListener("scroll", this.I);
            this.l = Kl(this.j);
            Sy(this)
        }
        remove() {
            this.m && this.m.parentNode && this.m.parentNode.removeChild(this.m);
            this.m = null;
            Uy(this);
            R(this.v, null)
        }
        C() {
            return this.v
        }
    };

    function Xy(a) {
        R(a.B, 0);
        null != a.m && (a.m.remove(), a.m = null);
        null != a.l && (a.l.remove(), a.l = null)
    }

    function Yy(a) {
        a.l = new Wy(a.A, a.H, a.D);
        a.l.init();
        nm(a.v, a.l.C());
        R(a.B, 2)
    }
    class Zy {
        constructor(a, b, c, d, e) {
            this.A = a;
            this.G = b;
            this.I = c;
            this.H = d;
            this.D = e;
            this.B = new em(0);
            this.v = new em(null);
            this.l = this.m = this.j = null
        }
        init() {
            this.G ? (this.m = new ay(this.A, this.G, this.I, this.D), this.m.init(), nm(this.v, this.m.C()), R(this.B, 1), null == this.j && (this.j = new Sm(this.A), this.j.init(2E3)), this.j.addListener(() => {
                Xy(this);
                Yy(this)
            })) : Yy(this)
        }
        remove() {
            Xy(this);
            this.j && (this.j.xa(), this.j = null)
        }
        C() {
            return this.v
        }
    };
    var $y = (a, b, c, d, e) => {
        a = new Zy(a, Ay(a, e), new zy(b, d, "#FFF", "#4A4A4A", "normal"), new vy(b, c, d), "google-dns-link-placeholder");
        a.init();
        return a
    };
    var az = a => a.googlefc = a.googlefc || {},
        bz = a => {
            a = a.googlefc = a.googlefc || {};
            return a.ccpa = a.ccpa || {}
        };

    function cz(a) {
        var b = bz(a.j);
        if (dz(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
            var c = b.getLocalizedDnsText();
            b = b.getLocalizedDnsCollapseText();
            null != c && null != b && (a.l = $y(a.j, c, b, () => ez(a), a.v))
        }
    }

    function fz(a) {
        const b = az(a.j);
        bz(a.j).overrideDnsLink = !0;
        b.callbackQueue = b.callbackQueue || [];
        b.callbackQueue.push({
            INITIAL_CCPA_DATA_READY: () => cz(a)
        })
    }

    function ez(a) {
        mw(a.m);
        bz(a.j).openConfirmationDialog(b => {
            b && a.l && (a.l.remove(), a.l = null);
            nw(a.m)
        })
    }
    class gz {
        constructor(a, b, c) {
            this.j = a;
            this.m = hw(b, 2147483643);
            this.v = c;
            this.l = null
        }
    }

    function dz(a, b) {
        switch (a) {
            case b.CCPA_DOES_NOT_APPLY:
            case b.OPTED_OUT:
                return !1;
            case b.NOT_OPTED_OUT:
                return !0;
            default:
                return !0
        }
    };

    function hz(a) {
        const b = a.document.createElement("ins");
        iz(a, b);
        N(b, {
            display: "flex",
            padding: "8px 0px",
            width: "100%"
        });
        return b
    }

    function jz(a, b, c, d) {
        const e = qg(a).createElement("IMG");
        e.src = b;
        d && e.setAttribute("aria-label", d);
        iz(a, e);
        N(e, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        e.addEventListener("click", f => {
            c();
            f.stopPropagation()
        });
        return e
    }

    function kz(a, b) {
        const c = b.document.createElement("span");
        iz(b, c);
        N(c, {
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.v));
        c.addEventListener("click", d => {
            a.l();
            d.stopPropagation()
        });
        return c
    }

    function lz(a, b) {
        const c = b.document.createElement("span");
        c.appendChild(b.document.createTextNode(a.m));
        N(c, pw(b));
        N(c, {
            "border-top": "11px solid #ECEDED",
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            "line-height": "1414px",
            padding: "8px 32px",
            "text-align": "center"
        });
        return c
    }

    function mz(a) {
        const b = a.document.createElement("div");
        N(b, pw(a));
        N(b, {
            "align-items": "flex-start",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)",
            display: "inline-flex",
            "flex-direction": "column",
            "float": "left"
        });
        return b
    }
    class nz {
        constructor(a, b, c, d) {
            this.v = a;
            this.A = b;
            this.m = c;
            this.l = d;
            this.j = new em(!1)
        }
        ya(a, b, c, d) {
            c = hz(a);
            const e = jz(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", d),
                f = jz(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", this.l),
                g = kz(this, a),
                h = jz(a, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg", b, this.A);
            N(h, {
                "margin-left": "auto"
            });
            c.appendChild(e);
            c.appendChild(f);
            c.appendChild(g);
            c.appendChild(h);
            const k = lz(this, a);
            a = mz(a);
            a.appendChild(c);
            a.appendChild(k);
            this.j.Z(l => {
                N(e, {
                    display: l ? "none" : "inline"
                });
                N(f, {
                    display: l ? "inline" : "none"
                });
                l ? (N(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), N(h, {
                        "margin-right": "12px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 50ms, opacity 50ms 50ms, width 50ms"
                    }), N(k, {
                        "border-width": "1px",
                        "line-height": "14px",
                        "max-width": "100vw",
                        opacity: "1",
                        padding: "8px 32px",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms, padding 50ms"
                    })) :
                    (N(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), N(h, {
                        "margin-right": "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 50ms 50ms, opacity 50ms, width 50ms 50ms"
                    }), N(k, {
                        "border-width": "0px",
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        padding: "0",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms, padding 50ms 50ms"
                    }))
            }, !0);
            return a
        }
        Vd() {
            return 71
        }
        qe() {
            R(this.j, !1);
            return 0
        }
        se() {
            R(this.j, !0)
        }
    }

    function iz(a, b) {
        N(b, pw(a));
        N(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none"
        })
    };

    function oz(a) {
        pz(a.l, b => {
            var c = a.v,
                d = b.jg,
                e = b.kf,
                f = b.We;
            b = b.showRevocationMessage;
            (new Zy(c, Ay(c, a.m), new zy(d, b, "#1A73E8", "#FFF", "bold", "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg", "2px solid #ECEDED", f), new nz(d, e, f, b), "google-revocation-link-placeholder")).init()
        }, () => {
            nw(a.j)
        })
    }
    class qz {
        constructor(a, b, c, d) {
            this.v = a;
            this.j = hw(b, 2147483643);
            this.m = c;
            this.l = d
        }
    };
    var rz = a => {
        if (!a || null == w(a, 1)) return !1;
        a = w(a, 1);
        switch (a) {
            case 1:
                return !0;
            case 2:
                return !1;
            default:
                throw Error("Unhandled AutoConsentUiStatus: " + a);
        }
    };

    function sz(a) {
        if (!0 !== a.l.adsbygoogle_ama_fc_has_run) {
            var b = !1;
            rz(a.j) && (b = new qz(a.l, a.A, a.v || D(a.j, Bo, 4), a.m), mw(b.j), oz(b), b = !0);
            var c;
            a: if ((c = a.j) && null != w(c, 3)) switch (c = w(c, 3), c) {
                case 1:
                    c = !0;
                    break a;
                case 2:
                    c = !1;
                    break a;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + c);
            } else c = !1;
            c && (fz(new gz(a.l, a.A, a.v || D(a.j, Bo, 4))), b = !0);
            if (c = (c = a.j) ? !0 === y(c, 5) : !1) c = ((c = a.j) ? !0 === y(c, 6) : !1) || V(Fp);
            c && (b = !0);
            b && (a.m.start(), a.l.adsbygoogle_ama_fc_has_run = !0)
        }
    }
    class tz {
        constructor(a, b, c, d, e) {
            this.l = a;
            this.m = b;
            this.j = c;
            this.A = d;
            this.v = e || null
        }
    };
    var uz = (a, b, c, d, e, f) => {
            try {
                const g = a.j,
                    h = Rg("SCRIPT", g);
                h.async = !0;
                rf(h, b);
                g.head.appendChild(h);
                h.addEventListener("load", () => {
                    e();
                    d && g.head.removeChild(h)
                });
                h.addEventListener("error", () => {
                    0 < c ? uz(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
                })
            } catch (g) {
                f()
            }
        },
        vz = (a, b, c = () => {}, d = () => {}) => {
            uz(qg(a), b, 0, !1, c, d)
        };
    var wz = (a = null) => {
        a = a || t;
        return a.googlefc || (a.googlefc = {})
    };
    ee(wl).map(a => Number(a));
    ee(xl).map(a => Number(a));
    var xz = (a, b) => {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = Rg("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };
    const yz = a => {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    };

    function zz(a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = yz(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (wi({
            e: String(a.internalErrorState)
        }, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    }

    function Az(a) {
        return zz(a) ? !1 !== a.gdprApplies && "tcunavailable" !== a.tcString && void 0 !== a.gdprApplies && "string" === typeof a.tcString && a.tcString.length ? Bz(a, "1") : !0 : !1
    }

    function Bz(a, b) {
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var c = a.publisher.restrictions[b];
                if (void 0 !== c) {
                    c = c["755"];
                    break a
                }
            }
            c = void 0
        }
        if (0 === c) return !1;a.purpose && a.vendor ? (c = a.vendor.consents, (c = !(!c || !c["755"])) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? b = !0 : (c && (a = a.purpose.consents, c = !(!a || !a[b])), b = c)) : b = !0;
        return b
    }

    function Cz(a) {
        var b = ["3", "4"];
        return !1 === a.gdprApplies ? !0 : b.every(c => Bz(a, c))
    }

    function Dz(a) {
        if (a.l) return a.l;
        a.l = jh(a.m, "__tcfapiLocator");
        return a.l
    }

    function Ez(a) {
        return "function" === typeof a.m.__tcfapi || null != Dz(a)
    }

    function Fz(a, b, c, d) {
        c || (c = () => {});
        if ("function" === typeof a.m.__tcfapi) a = a.m.__tcfapi, a(b, 2, c, d);
        else if (Dz(a)) {
            Gz(a);
            const e = ++a.H;
            a.C[e] = c;
            a.l && a.l.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function Hz(a, b) {
        let c = {
            internalErrorState: 0,
            internalBlockOnErrors: a.A
        };
        const d = Ud(() => b(c));
        let e = 0; - 1 !== a.G && (e = setTimeout(() => {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.G));
        Fz(a, "addEventListener", f => {
            f && (c = f, c.internalErrorState = yz(c), c.internalBlockOnErrors = a.A, zz(c) ? (0 != c.internalErrorState && (c.tcString = "tcunavailable"), Fz(a, "removeEventListener", null, c.listenerId), (f = e) && clearTimeout(f), d()) : ("error" === c.cmpStatus || 0 !== c.internalErrorState) && (f = e) && clearTimeout(f))
        })
    }

    function Gz(a) {
        a.v || (a.v = b => {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.C[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, M(a.m, "message", a.v))
    }
    class Iz extends Hk {
        constructor(a, b = {}) {
            super();
            this.m = a;
            this.l = null;
            this.C = {};
            this.H = 0;
            this.G = b.rg ? ? 500;
            this.A = b.ef ? ? !1;
            this.v = null
        }
        j() {
            this.C = {};
            this.v && ($d(this.m, "message", this.v), delete this.v);
            delete this.C;
            delete this.m;
            delete this.l;
            super.j()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.A
            };
            const c = Ud(() => a(b));
            let d = 0; - 1 !== this.G && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.G));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = yz(b), b.internalBlockOnErrors =
                    this.A, g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                Fz(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && Fz(this, "removeEventListener", null, a.listenerId)
        }
    };

    function pz(a, b, c) {
        const d = wz(a.j);
        d.callbackQueue = d.callbackQueue || [];
        d.callbackQueue.push({
            CONSENT_DATA_READY: () => {
                const e = wz(a.j),
                    f = new Iz(a.j);
                Ez(f) && Hz(f, g => {
                    300 === g.cmpId && g.tcString && "tcunavailable" !== g.tcString && b({
                        jg: e.getDefaultConsentRevocationText(),
                        kf: e.getDefaultConsentRevocationCloseText(),
                        We: e.getDefaultConsentRevocationAttestationText(),
                        showRevocationMessage: () => e.showRevocationMessage()
                    })
                });
                c()
            }
        })
    }

    function Jz(a) {
        const b = ve(Nd("https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}"), {
            id: a.l,
            ers: 2
        });
        vz(a.j, b, () => {}, () => {})
    }
    class Kz {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        start() {
            if (this.j === this.j.top) try {
                xz(this.j, "googlefcPresent"), Jz(this)
            } catch (a) {}
        }
    };
    var Lz = (a, b, c) => {
        const d = C(a, vo, 6);
        if (!d) return [];
        c = Yu(d.j(), c);
        return (a = a.j()) && y(a, 11) ? c.map(e => $s(e)) : c.map(e => {
            const f = xn();
            return new ys(new Us(e.uc, e.vc), new Ss, new Ts(b), !0, 2, [], f, e.l, null, null, null, e.m, e.j)
        })
    };
    var Mz = class extends L {
        constructor(a) {
            super(a)
        }
        getHeight() {
            return hd(this, 2)
        }
    };

    function Nz(a, b) {
        return x(a, 1, b)
    }

    function Oz(a, b) {
        return fd(a, 2, b)
    }
    var Qz = class extends L {
            constructor(a) {
                super(a, -1, Pz)
            }
        },
        Pz = [2];
    var Sz = class extends L {
            constructor() {
                super(void 0, -1, Rz)
            }
        },
        Rz = [5];
    var Tz = class extends L {
            constructor() {
                super()
            }
        },
        Uz = [1, 2];

    function Vz(a) {
        return new An(["pedestal_container"], {
            google_reactive_ad_format: 30,
            google_phwr: 2.189,
            google_ad_width: Math.floor(a),
            google_ad_format: "autorelaxed",
            google_full_width_responsive: !0,
            google_enable_content_recommendations: !0,
            google_content_recommendation_ui_type: "pedestal"
        })
    }
    class Wz {
        j(a) {
            return Vz(Math.floor(a.l))
        }
    };

    function Xz(a) {
        var b = ["Could not locate a suitable placement in the content below the fold."];
        a = Dl(a) ? .tagSpecificState[1];
        (a = null == a ? null : 4 === a.debugCard ? .getAdType() ? a.debugCard : null) && a.displayAdLoadedContent(b)
    };
    var Yz = class extends L {
        constructor() {
            super()
        }
    };

    function Zz(a, b) {
        if (b) {
            var c = b.adClient;
            if ("string" === typeof c && c) {
                a.wc = c;
                a.m = !!b.adTest;
                c = b.pubVars;
                ta(c) && (a.F = c);
                if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
                    a.B = {};
                    for (d of b.fillMessage) a.B[d.key] = d.value
                }
                a.v = b.adWidth;
                a.l = b.adHeight;
                ci(a.v) && ci(a.l) || Uk("rctnosize", b);
                var d = !0
            } else d = !1
        } else d = !1;
        return d && a.D(b)
    }
    class $z {
        constructor() {
            this.B = this.F = this.m = this.wc = null;
            this.l = this.v = 0
        }
        D() {
            return !0
        }
    };

    function aA(a, b = []) {
        const c = Date.now();
        return nb(b, d => c - d < 1E3 * a)
    }

    function bA(a, b) {
        try {
            const c = a.getItem("__lsv__");
            if (!c) return [];
            let d;
            try {
                d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || qb(d, e => !Number.isInteger(e))) return a.removeItem("__lsv__"), [];
            d = aA(b, d);
            d.length || a ? .removeItem("__lsv__");
            return d
        } catch (c) {
            return null
        }
    }

    function cA(a, b) {
        var c;
        if (!(c = 0 >= b) && !(c = null == a)) {
            try {
                a.setItem("__storage_test__", "__storage_test__");
                const e = a.getItem("__storage_test__");
                a.removeItem("__storage_test__");
                var d = "__storage_test__" === e
            } catch (e) {
                d = !1
            }
            c = !d
        }
        return c ? null : bA(a, b)
    };
    var dA = (a, b, c) => {
        let d = 0;
        try {
            d |= a != a.top ? 512 : 0;
            d |= Il(a);
            d |= Hl(a);
            d |= a.innerHeight >= a.innerWidth ? 0 : 8;
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var e;
            if (e = b) {
                var f = cA(c, 3600);
                e = !(f && 1 > f.length)
            }
            e && (d |= 134217728);
            V(hq) && (d |= 128)
        } catch (g) {
            d |= 32
        }
        return d
    };
    class eA extends $z {
        constructor() {
            super();
            this.A = !1;
            this.j = null;
            this.C = !1
        }
        D(a) {
            this.A = !!a.enableAma;
            var b = a.amaConfig;
            if (b) try {
                var c = Uo(b)
            } catch (d) {
                c = null
            } else c = null;
            this.j = c;
            Array.isArray(a.fillMessage) && (this.C = !0);
            return !0
        }
    };
    const fA = {};

    function gA(a, b, c) {
        let d = hA(a, c, b);
        if (!d) return !0;
        let e = -1;
        const f = c.B.l;
        for (; d.Cb && d.Cb.length;) {
            const h = d.Cb.shift();
            var g = Hs(h.V);
            const k = h.ba.j,
                l = !!c.m.od || !!c.m.vd || c.Da() || !!c.m.Md || k > e;
            g = !g || g <= d.Mb;
            if (l && g && iA(c, h, {
                    hc: d.Mb
                })) {
                e = k;
                if (d.Lb.j.length + 1 >= f) return !0;
                d = hA(a, c, b);
                if (!d) return !0
            }
        }
        return c.v
    }
    const hA = (a, b, c) => {
        var d = b.B.l,
            e = b.B.v,
            f = b.B;
        f = Mt(b.R(), f.j ? f.j.mb : void 0, d);
        if (f.j.length >= d) return null;
        e ? (d = f.l || (f.l = Q(f.m).scrollHeight || null), e = !d || 0 > d ? -1 : f.l * e - St(f)) : e = void 0;
        a = null == e || 50 <= e ? jA(b, f, {
            types: a
        }, c) : null;
        return {
            Lb: f,
            Mb: e,
            Cb: a
        }
    };
    fA[2] = Ca(function(a, b) {
        a = jA(b, Mt(b.R()), {
            types: a,
            Qa: vt(b.R())
        }, 2);
        if (0 == a.length) return !0;
        for (var c = 0; c < a.length; c++)
            if (iA(b, a[c])) return !0;
        return b.v ? (b.A.push(11), !0) : !1
    }, [0]);
    fA[5] = Ca(gA, [0], 5);
    fA[10] = Ca(function(a, b) {
        a = [];
        const c = b.da;
        c.includes(3) && a.push(2);
        c.includes(1) && a.push(0);
        c.includes(2) && !V(rp) && a.push(1);
        return gA(a, 10, b)
    }, 10);
    fA[3] = function(a) {
        if (!a.v) return !1;
        var b = jA(a, Mt(a.R()), {
            types: [0],
            Qa: vt(a.R())
        }, 3);
        if (0 == b.length) return !0;
        for (var c = b.length - 1; 0 <= c; c--)
            if (iA(a, b[c])) return !0;
        a.A.push(11);
        return !0
    };
    const kA = a => {
            var b;
            a.m.He ? b = new rt(0, null, [], 3, null) : b = vt(a.R());
            return {
                types: [0],
                Qa: b
            }
        },
        mA = a => {
            const b = a.R().document.body.getBoundingClientRect().width;
            lA(a, Vz(b))
        },
        oA = (a, b) => {
            var c = kA(a);
            c.gg = [5];
            c = jA(a, Mt(a.R()), c, 8);
            nA(a, c.reverse(), b)
        },
        nA = (a, b, c) => {
            for (const d of b)
                if (b = c.j(d.ba), iA(a, d, {
                        xc: b
                    })) return !0;
            return !1
        };
    fA[8] = function(a) {
        var b = a.R().document;
        if ("complete" != b.readyState) return b.addEventListener("readystatechange", () => fA[8](a), {
            once: !0
        }), !0;
        if (!a.v) return !1;
        if (!a.cc()) return !0;
        b = kA(a);
        b.hd = [2, 4, 5];
        b = jA(a, Mt(a.R()), b, 8);
        const c = new Wz;
        if (nA(a, b, c)) return !0;
        if (a.m.Pd) switch (a.m.ue || 0) {
            case 1:
                oA(a, c);
                break;
            default:
                mA(a)
        }
        return !0
    };
    fA[6] = Ca(gA, [2], 6);
    fA[7] = Ca(gA, [1], 7);
    fA[9] = function(a) {
        const b = hA([0, 2], a, 9);
        if (!b || !b.Cb) return a.A.push(17), Xz(a.R()), a.v;
        for (const e of b.Cb) {
            var c = e;
            var d = a.m.Kc || null;
            null == d ? c = null : (d = Is(c.V, new pA, new qA(d, a.R())), c = new Ps(d, c.Y(), c.ba));
            if (c && !(Hs(c.V) > b.Mb) && iA(a, c, {
                    hc: b.Mb,
                    Cc: !0
                })) return a = c.V.N, Fs(e.V, 0 < a.length ? a[0] : null), !0
        }
        a.A.push(17);
        Xz(a.R());
        return a.v
    };
    class pA {
        l(a, b, c, d) {
            return Jr(d.document, a, b)
        }
        m(a) {
            return Q(a).clientHeight || 0
        }
    };
    var rA = class {
        constructor(a, b, c) {
            this.l = a;
            this.j = b;
            this.Lb = c
        }
        ia(a) {
            return this.j ? Du(this.l, this.j, a, this.Lb) : Cu(this.l, a, this.Lb)
        }
        ja() {
            return this.j ? 16 : 9
        }
    };
    var sA = class {
        constructor(a) {
            this.yc = a
        }
        ia(a) {
            return Ku(a.document, this.yc)
        }
        ja() {
            return 11
        }
    };
    var tA = class {
        constructor(a) {
            this.gb = a
        }
        ia(a) {
            return Hu(this.gb, a)
        }
        ja() {
            return 13
        }
    };
    var uA = class {
        ia(a) {
            return Au(a)
        }
        ja() {
            return 12
        }
    };
    var vA = class {
        constructor(a) {
            this.ub = a
        }
        ia() {
            return Fu(this.ub)
        }
        ja() {
            return 2
        }
    };
    var wA = class {
        constructor(a) {
            this.j = a
        }
        ia() {
            return Iu(this.j)
        }
        ja() {
            return 3
        }
    };
    var xA = class {
        ia() {
            return Lu()
        }
        ja() {
            return 17
        }
    };
    var yA = class {
        constructor(a) {
            this.j = a
        }
        ia() {
            return Eu(this.j)
        }
        ja() {
            return 1
        }
    };
    var zA = class {
        ia() {
            return Sd(zs)
        }
        ja() {
            return 7
        }
    };
    var AA = class {
        constructor(a) {
            this.hd = a
        }
        ia() {
            return Gu(this.hd)
        }
        ja() {
            return 6
        }
    };
    var BA = class {
        constructor(a) {
            this.j = a
        }
        ia() {
            return Ju(this.j)
        }
        ja() {
            return 5
        }
    };
    var CA = class {
        constructor(a, b) {
            this.minWidth = a;
            this.maxWidth = b
        }
        ia() {
            return Ca(Mu, this.minWidth, this.maxWidth)
        }
        ja() {
            return 10
        }
    };
    var DA = class {
        constructor(a) {
            this.v = a.l.slice(0);
            this.l = a.j.slice(0);
            this.m = a.m;
            this.A = a.v;
            this.j = a.A
        }
    };

    function EA(a) {
        var b = new FA;
        b.A = a;
        b.l.push(new yA(a));
        return b
    }

    function GA(a, b) {
        a.l.push(new AA(b));
        return a
    }

    function HA(a, b) {
        a.l.push(new vA(b));
        return a
    }

    function IA(a, b) {
        a.l.push(new BA(b));
        return a
    }

    function JA(a, b) {
        a.l.push(new wA(b));
        return a
    }

    function KA(a) {
        a.l.push(new zA);
        return a
    }

    function LA(a) {
        a.j.push(new uA);
        return a
    }

    function MA(a, b = 0, c, d) {
        a.j.push(new rA(b, c, d));
        return a
    }

    function NA(a, b = 0, c = Infinity) {
        a.j.push(new CA(b, c));
        return a
    }

    function OA(a) {
        a.j.push(new xA);
        return a
    }

    function PA(a, b = 0) {
        a.j.push(new tA(b));
        return a
    }

    function QA(a, b) {
        a.m = b;
        return a
    }
    var FA = class {
        constructor() {
            this.m = 0;
            this.v = !1;
            this.l = [].slice(0);
            this.j = [].slice(0)
        }
        build() {
            return new DA(this)
        }
    };
    class qA {
        constructor(a, b) {
            this.l = a;
            this.m = b
        }
        j() {
            var a = this.l,
                b = this.m;
            const c = a.F || {};
            c.google_ad_client = a.wc;
            c.google_ad_height = Q(b).clientHeight || 0;
            c.google_ad_width = Q(b).clientWidth || 0;
            c.google_reactive_ad_format = 9;
            b = new Yz;
            x(b, 1, a.A);
            a.j && dd(b, 2, a.j);
            a.C && x(b, 3, !0);
            c.google_rasc = Cd(b);
            a.m && (c.google_adtest = "on");
            return new An(["fsi_container"], c)
        }
    };
    var RA = tn(new qn(0, {})),
        SA = tn(new qn(1, {})),
        TA = a => a === RA || a === SA;

    function UA(a, b, c) {
        Ul(a.j, b) || a.j.set(b, []);
        a.j.get(b).push(c)
    }
    class VA {
        constructor() {
            this.j = new Yl
        }
    };

    function WA(a, b) {
        b && (a.j.apv = w(b, 4), Rc(b, Zn, 23) && (a.j.sat = "" + kd(C(b, Zn, 23), 1)));
        return a
    }

    function XA(a, b) {
        a.j.afm = b.join(",");
        return a
    }
    class YA extends ms {
        constructor(a) {
            super(a);
            this.j = {}
        }
        D(a) {
            null != a && (this.j.allp = a);
            return this
        }
        v(a) {
            try {
                this.j.su = a.location.hostname
            } catch (b) {
                this.j.su = "_ex"
            }
            a = super.v(a);
            he(a, this.j);
            return a
        }
    }

    function ZA(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function $A(a, b) {
        a.l.op = aB(b)
    }

    function bB(a, b, c) {
        30 >= c.length ? a.l[b] = cB(c) : (a.l[b] = cB(c.slice(0, 30)), a.l[b + "_c"] = c.length.toString())
    }

    function dB(a, b, c) {
        bB(a, "fap", b);
        a.l.fad = aB(c)
    }

    function eB(a, b, c) {
        bB(a, "fmp", b);
        a.l.fmd = aB(c)
    }

    function fB(a, b, c) {
        bB(a, "vap", b);
        a.l.vad = aB(c)
    }

    function gB(a, b, c) {
        bB(a, "vmp", b);
        a.l.vmd = aB(c)
    }

    function hB(a, b, c) {
        bB(a, "pap", b);
        a.l.pad = aB(c)
    }

    function iB(a, b, c) {
        bB(a, "pmp", b);
        a.l.pmd = aB(c)
    }

    function jB(a, b) {
        bB(a, "psq", b)
    }
    var kB = class extends YA {
        constructor(a) {
            super(0);
            Object.assign(this, a);
            this.l = {}
        }
        v(a) {
            a = super.v(a);
            Object.assign(a, this.l);
            return a
        }
    };

    function cB(a) {
        return a.map(b => b ? .toString() ? ? "null").join("~")
    }

    function aB(a) {
        return null == a ? "null" : "string" === typeof a ? a : "boolean" === typeof a ? a ? "1" : "0" : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function lB(a, b, c) {
        const d = b.V;
        Ul(a.j, d) || a.j.set(d, new mB(jn(Ns(b)) ? ? ""));
        c(a.j.get(d))
    }

    function nB(a, b) {
        lB(a, b, c => {
            c.j = !0
        })
    }

    function oB(a, b) {
        lB(a, b, c => {
            c.l = !0
        })
    }

    function pB(a, b) {
        lB(a, b, c => {
            c.m = !0
        });
        a.I.push(b.V)
    }

    function qB(a, b, c) {
        lB(a, b, d => {
            d.bb = c
        })
    }

    function rB(a, b, c) {
        const d = [];
        let e = 0;
        for (const f of c.filter(b)) TA(f.bb ? ? "") ? ++e : (b = a.l.get(f.bb ? ? "", null), d.push(b));
        return {
            list: d.sort((f, g) => (f ? ? -1) - (g ? ? -1)),
            cb: e
        }
    }

    function sB(a, b) {
        $A(b, a.l.xb());
        var c = Xl(a.j).filter(f => 0 === (f.Ma.startsWith(RA) ? 0 : 1)),
            d = Xl(a.j).filter(f => 1 === (f.Ma.startsWith(RA) ? 0 : 1)),
            e = rB(a, f => f.j, c);
        dB(b, e.list, e.cb);
        e = rB(a, f => f.j, d);
        eB(b, e.list, e.cb);
        e = rB(a, f => f.l, c);
        fB(b, e.list, e.cb);
        e = rB(a, f => f.l, d);
        gB(b, e.list, e.cb);
        c = rB(a, f => f.m, c);
        hB(b, c.list, c.cb);
        d = rB(a, f => f.m, d);
        iB(b, d.list, d.cb);
        jB(b, a.I.map(f => a.j.get(f) ? .bb).map(f => a.l.get(f) ? ? null))
    }

    function Aj() {
        var a = P(tB);
        if (!a.A) return oj();
        const b = xj(wj(vj(uj(tj(sj(rj(qj(nj(mj(new pj, a.A ? ? []), a.H ? ? []), a.B), a.D), a.G), a.K), a.L), a.C ? ? 0), Xl(a.j).map(c => {
            var d = new lj;
            d = md(d, 1, c.Ma);
            var e = a.l.get(c.bb ? ? "", -1);
            d = ld(d, 2, e);
            d = rd(d, 3, c.j);
            return rd(d, 4, c.l)
        })), a.I.map(c => a.j.get(c) ? .bb).map(c => a.l.get(c) ? ? null));
        null != a.m && rd(b, 6, a.m);
        null != a.v && Zc(b, 13, a.v, 0);
        return b
    }
    var tB = class {
        constructor() {
            this.v = this.H = this.A = null;
            this.G = this.D = !1;
            this.m = null;
            this.L = this.B = this.K = !1;
            this.C = null;
            this.l = new Yl;
            this.j = new Yl;
            this.I = []
        }
    };
    class mB {
        constructor(a) {
            this.m = this.l = this.j = !1;
            this.bb = null;
            this.Ma = a
        }
    };
    class uB {
        constructor(a = 0) {
            this.j = a
        }
    };
    class vB {
        constructor(a) {
            this.l = a;
            this.j = -1
        }
    };

    function wB(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function xB(a, b) {
        const c = a.H.filter(d => Wl(d.Rb).every(e => d.Rb.get(e) === b.get(e)));
        return 0 === c.length ? (a.l.push(19), null) : c.reduce((d, e) => d.Rb.xb() > e.Rb.xb() ? d : e, c[0])
    }

    function yB(a, b) {
        b = Ns(b);
        if (null == b.j) return a.l.push(18), null;
        b = b.j.value;
        if (Ul(a.m, b)) return a.m.get(b);
        var c = rn(b);
        c = xB(a, c);
        a.m.set(b, c);
        return c
    }
    var zB = class {
        constructor(a) {
            this.j = a;
            this.m = new Yl;
            this.H = (C(a, Oo, 2) ? .j() || []).map(b => {
                const c = rn(G(b, 1)),
                    d = jd(b, 2);
                return {
                    Rb: c,
                    we: d,
                    Ma: G(b, 1)
                }
            });
            this.l = []
        }
        G() {
            const a = P(tB);
            var b = this.B();
            a.A = b;
            b = this.A();
            a.H = b;
            b = this.v();
            null != b && (a.v = b);
            b = !!this.j.v() ? .j() ? .j();
            a.G = b;
            b = new Yl;
            for (const c of C(this.j, Oo, 2) ? .j() ? ? []) b.set(G(c, 1), jd(c, 2));
            a.l = b
        }
        C() {
            return [...this.l]
        }
        B() {
            return [...this.j.j()]
        }
        A() {
            return [...Wc(this.j, 4, Jc)]
        }
        v() {
            return C(this.j, Ho, 5) ? .j() ? ? null
        }
        D(a) {
            const b = yB(this, a);
            null != b ? .Ma && qB(P(tB),
                a, b.Ma)
        }
        I(a) {
            const b = W(Gp) || 0;
            if (0 == a.length || 0 == b) return !0;
            const c = (new an(a)).filter(d => {
                d = yB(this, d) ? .Ma || "";
                return "" != d && !(d === RA || d === SA)
            });
            return b <= c.j.length / a.length
        }
    };

    function AB(a, b) {
        return 0 == b.j.length ? b : b.sort((c, d) => (yB(a.j, c) ? .we ? ? Number.MAX_VALUE) - (yB(a.j, d) ? .we ? ? Number.MAX_VALUE))
    }

    function BB(a, b) {
        var c = b.ba.j,
            d = Math,
            e = d.min;
        const f = b.Y(),
            g = b.V.j();
        c += 200 * e.call(d, 20, 0 == g || 3 == g ? wB(f.parentElement) : wB(f));
        d = a.m;
        0 > d.j && (d.j = Q(d.l).scrollHeight || 0);
        d = d.j - b.ba.j;
        c += 1E3 < d ? 0 : 2 * (1E3 - d);
        a = a.l;
        b = b.Y();
        return c + ("string" === typeof b.className && 0 <= b.className.indexOf("adsbygoogle-ablated-ad-slot") ? a.j : 0)
    }

    function CB(a, b) {
        return 0 == b.j.length ? b : b.sort((c, d) => BB(a, c) - BB(a, d))
    }

    function DB(a, b) {
        return b.sort((c, d) => {
            const e = c.V.D,
                f = d.V.D;
            var g;
            null == e || null == f ? g = null == e && null == f ? BB(a, c) - BB(a, d) : null == e ? 1 : -1 : g = e - f;
            return g
        })
    }
    class EB {
        constructor(a, b = 0, c = null) {
            this.m = new vB(a);
            this.l = new uB(b);
            this.j = c && new zB(c)
        }
    };

    function FB(a, b, c = 0) {
        var d = a.l;
        for (var e of b.v) d = $m(d, e.ia(a.m), GB(e.ja(), c));
        e = d = d.apply(zu(a.m));
        for (const f of b.l) e = $m(e, f.ia(a.m), HB(f.ja(), c));
        switch (b.m) {
            case 1:
                e = CB(a.j, e);
                break;
            case 2:
                e = DB(a.j, e);
                break;
            case 3:
                const f = P(tB);
                e = AB(a.j, e);
                d.forEach(g => {
                    nB(f, g);
                    a.j.j ? .D(g)
                });
                e.forEach(g => oB(f, g))
        }
        b.A && (e = cn(e, ng(a.m.location.href + a.m.localStorage.google_experiment_mod)));
        1 === b.j ? .length && UA(a.v, b.j[0], {
            Ye: d.j.length,
            wg: e.j.length
        });
        return bn(e)
    }
    class IB {
        constructor(a, b, c = 0, d = null) {
            this.l = new an(a);
            this.j = new EB(b, c, d);
            this.m = b;
            this.v = new VA
        }
        A() {
            this.l.forEach(a => {
                a.l && ir(a.l);
                a.l = null
            })
        }
    }
    const GB = (a, b) => c => Es(c, b, a),
        HB = (a, b) => c => Es(c.V, b, a);

    function JB(a, b, c, d) {
        a: {
            switch (b) {
                case 0:
                    a = KB(LB(c), a);
                    break a;
                case 3:
                    a = KB(c, a);
                    break a;
                case 2:
                    var e = c.lastChild;
                    a = KB(e ? 1 == e.nodeType ? e : LB(e) : null, a);
                    break a
            }
            a = !1
        }
        if (d = !a && !(!d && 2 == b && !MB(c))) b = 1 == b || 2 == b ? c : c.parentNode,
        d = !(b && !dp(b) && 0 >= b.offsetWidth);
        return d
    }

    function KB(a, b) {
        if (!a) return !1;
        a = Sg(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function LB(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function MB(a) {
        return !!a.nextSibling || !!a.parentNode && MB(a.parentNode)
    };
    var NB = !Fb && !hb();

    function OB(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (NB && a.dataset) {
            if (jb() && !("adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };
    var PB = (a, b, c) => {
            if (!b) return null;
            const d = zg(document, "INS");
            d.id = "google_pedestal_container";
            d.style.width = "100%";
            d.style.zIndex = "-1";
            if (c) {
                var e = a.getComputedStyle(c),
                    f = "";
                if (e && "static" != e.position) {
                    var g = c.parentNode.lastElementChild;
                    for (f = e.position; g && g != c;) {
                        if ("none" != a.getComputedStyle(g).display) {
                            f = a.getComputedStyle(g).position;
                            break
                        }
                        g = g.previousElementSibling
                    }
                }
                if (c = f) d.style.position = c
            }
            b.appendChild(d);
            if (d) {
                var h = a.document;
                f = h.createElement("div");
                f.style.width = "100%";
                f.style.height =
                    "2000px";
                c = Q(a).clientHeight;
                e = h.body.scrollHeight;
                a = a.innerHeight;
                g = h.body.getBoundingClientRect().bottom;
                d.appendChild(f);
                var k = f.getBoundingClientRect().top;
                h = h.body.getBoundingClientRect().top;
                d.removeChild(f);
                f = e;
                e <= a && 0 < c && 0 < g && (f = g - h);
                a = k - h >= .8 * f
            } else a = !1;
            return a ? d : (b.removeChild(d), null)
        },
        QB = a => {
            const b = a.document.body;
            var c = PB(a, b, null);
            if (c) return c;
            if (a.document.body) {
                c = Math.floor(a.document.body.getBoundingClientRect().width);
                for (var d = [{
                        element: a.document.body,
                        depth: 0,
                        height: 0
                    }], e = -1, f = null; 0 < d.length;) {
                    const h = d.pop(),
                        k = h.element;
                    var g = h.height;
                    0 < h.depth && g > e && (e = g, f = k);
                    if (5 > h.depth)
                        for (let l = 0; l < k.children.length; l++) {
                            const m = k.children[l];
                            g = c;
                            const n = m.getBoundingClientRect().width;
                            (null == n || null == g ? 0 : n >= .9 * g && n <= 1.01 * g) && d.push({
                                element: m,
                                depth: h.depth + 1,
                                height: m.getBoundingClientRect().height
                            })
                        }
                }
                c = f
            } else c = null;
            return c ? PB(a, c.parentNode || b, c) : null
        },
        SB = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, Jg() || (b |= 1048576), 1200 >= Math.floor(a.document.body.getBoundingClientRect().width) ||
                    (b |= 32768), RB(a) && (b |= 33554432)
            } catch (c) {
                b |= 32
            }
            return b
        },
        RB = a => {
            a = a.document.getElementsByClassName("adsbygoogle");
            for (let b = 0; b < a.length; b++)
                if ("autorelaxed" == OB(a[b])) return !0;
            return !1
        };

    function TB(a) {
        const b = Jl(a, !0),
            c = Q(a).scrollWidth,
            d = Q(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = Ol(a);
        const g = [];
        var h = [];
        const k = [],
            l = [];
        var m = [],
            n = [],
            q = [];
        let r = 0,
            u = 0,
            A = Infinity,
            z = Infinity,
            B = null;
        var H = It({
            Xa: !1
        }, a);
        for (var E of H) {
            H = E.getBoundingClientRect();
            const U = b - (H.bottom + f);
            var F = void 0,
                J = void 0;
            if (E.className && $a(E.className, "adsbygoogle-ablated-ad-slot")) {
                F = E.getAttribute("google_element_uid");
                J = a.google_sv_map;
                if (!F || !J || !J[F]) continue;
                F = (J = oi(J[F])) ? J.height : 0;
                J = J ? J.width : 0
            } else if (F = H.bottom - H.top, J = H.right - H.left, 1 >= F || 1 >= J) continue;
            g.push(F);
            k.push(J);
            l.push(F * J);
            E.className && $a(E.className, "google-auto-placed") ? (u += 1, E.className && $a(E.className, "pedestal_container") && (B = F)) : (A = Math.min(A, U), n.push(H), r += 1, h.push(F), m.push(F * J));
            z = Math.min(z, U);
            q.push(H)
        }
        A = Infinity === A ? null : A;
        z = Infinity === z ? null : z;
        f = UB(n);
        q = UB(q);
        h = VB(b, h);
        n = VB(b, g);
        m = VB(b * c, m);
        E = VB(b * c, l);
        return new WB(a, {
            rf: e,
            Zc: b,
            Uf: c,
            Tf: d,
            Lf: r,
            Xe: u,
            bf: XB(g),
            cf: XB(k),
            Ze: XB(l),
            Qf: f,
            Pf: q,
            Of: A,
            Nf: z,
            Gc: h,
            Fc: n,
            Te: m,
            Se: E,
            Vf: B
        })
    }

    function YB(a, b, c, d) {
        const e = Jg() && !(900 <= Q(a.l).clientWidth);
        d = nb(d, f => rb(a.m, f)).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.j.rf,
            pg_h: ZB(a.j.Zc),
            pg_w: ZB(a.j.Uf),
            pg_hs: ZB(a.j.Tf),
            c: ZB(a.j.Lf),
            aa_c: ZB(a.j.Xe),
            av_h: ZB(a.j.bf),
            av_w: ZB(a.j.cf),
            av_a: ZB(a.j.Ze),
            s: ZB(a.j.Qf),
            all_s: ZB(a.j.Pf),
            b: ZB(a.j.Of),
            all_b: ZB(a.j.Nf),
            d: ZB(a.j.Gc),
            all_d: ZB(a.j.Fc),
            ard: ZB(a.j.Te),
            all_ard: ZB(a.j.Se),
            pd_h: ZB(a.j.Vf),
            dt: e ? "m" : "d"
        }
    }
    class WB {
        constructor(a, b) {
            this.l = a;
            this.j = b;
            this.m = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function XB(a) {
        return hg.apply(null, nb(a, b => 0 < b)) || null
    }

    function VB(a, b) {
        return 0 >= a ? null : gg.apply(null, b) / a
    }

    function UB(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e],
                    d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                0 < c && (b = Math.min(c, b))
            }
        return Infinity !== b ? b : null
    }

    function ZB(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function $B(a, b) {
        b = (Q(b).clientHeight || 0) - Ol(b);
        let c = 0;
        for (let d = 0; d < a.length; d++) {
            const e = a[d].getBoundingClientRect();
            Qt(e) && e.top <= b && (c += 1)
        }
        return c
    }

    function aC(a) {
        const b = {};
        var c = Kt({
            Xa: !1,
            Vb: !1,
            Wb: !1,
            Xb: !1
        }, a).map(d => d.getBoundingClientRect()).filter(Qt);
        b.xd = c.length;
        c = Lt({
            Wb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(Qt);
        b.Od = c.length;
        c = Lt({
            Xb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(Qt);
        b.ke = c.length;
        c = Lt({
            Vb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(Qt);
        b.Dd = c.length;
        c = (Q(a).clientHeight || 0) - Ol(a);
        c = Kt({
            Xa: !1
        }, a).map(d => d.getBoundingClientRect()).filter(Qt).filter(Ba(bC, null, c));
        b.yd = c.length;
        a = TB(a);
        c = null != a.j.Gc ? a.j.Gc :
            null;
        null != c && (b.fe = c);
        a = null != a.j.Fc ? a.j.Fc : null;
        null != a && (b.zd = a);
        return b
    }

    function iA(a, b, {
        hc: c,
        xc: d,
        Cc: e
    } = {}) {
        return Rr(997, () => cC(a, b, {
            hc: c,
            xc: d,
            Cc: e
        }), a.j)
    }

    function jA(a, b, c, d) {
        var e = c.Qa ? c.Qa : a.B;
        const f = wt(e, b.j.length);
        e = a.m.Ad ? e.j : void 0;
        const g = OA(PA(LA(NA(MA(KA(IA(JA(GA(HA(EA(c.types), a.N), c.hd || []), a.L), c.gg || [])), f.ic || void 0, e, b), c.minWidth, c.maxWidth)), f.gb || void 0));
        a.K && g.j.push(new sA(a.K));
        b = 1;
        a.m.vd ? b = 2 : a.Da() && (b = 3);
        QA(g, b);
        a.m.od && (g.v = !0);
        return Rr(995, () => FB(a.l, g.build(), d), a.j)
    }

    function lA(a, b) {
        const c = QB(a.j);
        if (c) {
            const d = zn(a.H, b),
                e = Gr(a.j.document, a.C, null, null, {}, d);
            e && (lr(e.Ua, c, 2, 256), Rr(996, () => dC(a, e, d), a.j))
        }
    }

    function eC(a) {
        return a.D ? a.D : a.D = a.j.google_ama_state
    }

    function cC(a, b, {
        hc: c,
        xc: d,
        Cc: e
    } = {}) {
        const f = b.V;
        if (f.A) return !1;
        var g = b.Y();
        if (!JB(a.j, f.j(), g, a.v)) return !1;
        var h = null;
        V(pp) && f.ec ? .includes(6) ? (g = Math.round(g.getBoundingClientRect().height), h = null == c ? g : Math.min(c, g)) : h = c;
        c = null == h ? null : new An(null, {
            google_max_responsive_height: h
        });
        g = Bn(w(f.sc, 2) || 0);
        h = Cn(f.D);
        const k = fC(a, f),
            l = gC(a),
            m = zn(a.H, f.L ? f.L.j(b.ba) : null, c, d || null, g, h, k, l),
            n = b.fill(a.C, m);
        if (e && !hC(a, n, m) || !Rr(996, () => dC(a, n, m), a.j)) return !1;
        jl(9, [f.D, f.Ya]);
        a.Da() && pB(P(tB), b);
        return !0
    }

    function fC(a, b) {
        return jn(ln(Ls(b).map(Dn), () => {
            a.A.push(18)
        }))
    }

    function gC(a) {
        if (!a.Da()) return null;
        var b = a.l.j.j ? .A();
        if (null == b) return null;
        b = b.join("~");
        a = a.l.j.j ? .v() ? ? null;
        return En({
            nf: b,
            tf: a
        })
    }

    function hC(a, b, c) {
        if (!b) return !1;
        var d = b.va,
            e = d.style.width;
        d.style.width = "100%";
        var f = d.offsetWidth;
        d.style.width = e;
        d = a.j;
        e = b.va;
        c = c && c.yb() || {};
        if (d !== d.top) var g = Pg(d) ? 3 : 16;
        else if (488 > Q(d).clientWidth)
            if (d.innerHeight >= d.innerWidth)
                if (g = Q(d).clientWidth, !g || .3 < (g - f) / g) g = 6;
                else {
                    if (g = "true" != c.google_full_width_responsive) b: {
                        var h = e.parentElement;
                        for (g = Q(d).clientWidth; h; h = h.parentElement) {
                            const k = Sg(h, d);
                            if (!k) continue;
                            const l = ch(k.width);
                            if (l && !(l >= g) && "visible" != k.overflow) {
                                g = !0;
                                break b
                            }
                        }
                        g = !1
                    }
                    g = g ? 7 : !0
                }
        else g = 5;
        else g = 4;
        if (!0 !== g) f = g;
        else {
            if (!(c = "true" == c.google_full_width_responsive)) a: {
                do
                    if ((c = Sg(e, d)) && "fixed" == c.position) {
                        c = !1;
                        break a
                    }
                while (e = e.parentElement);
                c = !0
            }
            c ? (d = Q(d).clientWidth, f = d - f, f = d && 0 <= f ? !0 : d ? -10 > f ? 11 : 0 > f ? 14 : 12 : 10) : f = 9
        }
        if (f) {
            a = a.j;
            b = b.va;
            if (f = Cr(a, b)) b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none", b.style.borderSpacing = b.style.padding = "0", Ar(b, f, "0px"), b.style.width = Q(a).clientWidth + "px", Dr(a, b, f), b.style.zIndex = 30;
            return !0
        }
        ir(b.Ua);
        return !1
    }

    function dC(a, b, c) {
        if (!b) return !1;
        try {
            Kr(a.j, b.va, c)
        } catch (d) {
            return ir(b.Ua), a.A.push(6), !1
        }
        return !0
    }
    class iC {
        constructor(a, b, c, d, e = {}, f = []) {
            this.l = a;
            this.C = b;
            this.j = c;
            this.B = d.Qa;
            this.N = d.ub || [];
            this.H = d.uf || null;
            this.L = d.qf || [];
            this.K = d.yc || [];
            this.m = e;
            this.v = !1;
            this.I = [];
            this.A = [];
            this.G = this.D = void 0;
            this.da = f
        }
        T() {
            return this.l
        }
        R() {
            return this.j
        }
        wa(a) {
            this.I.push(a)
        }
        Da() {
            if (0 == (this.l.j.j ? .B().length ? ? 0)) return !1;
            if (0 == (W(Gp) || 0)) return !0;
            if (void 0 === this.G) {
                const a = QA(LA(KA(EA([0, 1, 2]))), 1).build(),
                    b = Rr(995, () => FB(this.l, a), this.j);
                this.G = this.l.j.j ? .I(b) || !1
            }
            return this.G
        }
        Qc() {
            return !!this.m.Be
        }
        cc() {
            return !RB(this.j)
        }
    }
    const bC = (a, b) => b.top <= a;

    function jC(a, b, c, d, e, f = 0, g = 0) {
        this.Ba = a;
        this.qc = f;
        this.oc = g;
        this.errors = b;
        this.Pa = c;
        this.j = d;
        this.l = e
    };
    var kC = (a, {
        cc: b = !1,
        Qc: c = !1,
        kg: d = !1,
        Da: e = !1
    } = {}) => {
        const f = [];
        d && f.push(9);
        if (e) {
            a.includes(4) && !c && b && f.push(8);
            a.includes(1) && f.push(1);
            d = a.includes(3);
            e = a.includes(2) && !V(rp);
            const g = a.includes(1);
            (d || e || g) && f.push(10)
        } else a.includes(3) && f.push(6), a.includes(4) && !c && b && f.push(8), a.includes(1) && f.push(1, 5), a.includes(2) && !V(rp) && f.push(7);
        a.includes(4) && c && b && f.push(8);
        return f
    };

    function lC(a, b, c) {
        a = kC(a, {
            cc: b.cc(),
            Qc: b.Qc(),
            kg: !!b.m.Kc,
            Da: b.Da()
        });
        return new mC(a, b, c)
    }

    function nC(a, b) {
        const c = fA[b];
        return c ? Rr(998, () => c(a.j), a.A) : (a.j.wa(12), !0)
    }

    function oC(a, b) {
        return new Promise(c => {
            setTimeout(() => {
                c(nC(a, b))
            })
        })
    }

    function pC(a) {
        a.j.v = !0;
        return Promise.all(a.l.map(b => oC(a, b))).then(b => {
            b.includes(!1) && a.j.wa(5);
            a.l.splice(0, a.l.length)
        })
    }
    class mC {
        constructor(a, b, c) {
            this.v = a.slice(0);
            this.l = a.slice(0);
            this.m = sb(this.l, 1);
            this.j = b;
            this.A = c
        }
    };
    const qC = class {
        constructor(a) {
            this.j = a;
            this.exception = void 0
        }
    };

    function rC(a) {
        return pC(a).then(() => {
            var b = a.j.l.l.filter(zs).j.length;
            var c = a.j.I.slice(0);
            var d = a.j;
            d = [...d.A, ...(d.l.j.j ? .C() || [])];
            b = new jC(b, c, d, a.j.l.l.j.length, a.j.l.v.j, a.j.l.l.filter(zs).filter(As).j.length, a.j.l.l.filter(As).j.length);
            return new qC(b)
        })
    };
    class sC {
        j() {
            return new An([], {
                google_reactive_ad_format: 40,
                google_tag_origin: "qs"
            })
        }
    };
    class tC {
        j() {
            return new An(["adsbygoogle-resurrected-ad-slot"], {})
        }
    };

    function uC(a) {
        return ep(a.j.document).map(b => {
            const c = new Us(b, 3);
            b = new us(Mr(a.j, b));
            return new ys(c, b, a.l, !1, 0, [], null, a.j, null)
        })
    }
    class vC {
        constructor(a) {
            var b = new tC;
            this.j = a;
            this.l = b || null
        }
    };
    const wC = {
        ud: "10px",
        Bc: "10px"
    };

    function xC(a) {
        return Tl(a.j.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b => new ys(new Us(b, 1), new ss(wC), a.l, !1, 0, [], null, a.j, null))
    }
    class yC {
        constructor(a, b) {
            this.j = a;
            this.l = b || null
        }
    };

    function zC(a, b) {
        return null == a ? b + "ShouldNotBeNull" : 0 == a ? b + "ShouldNotBeZero" : -1 > a ? b + "ShouldNotBeLessMinusOne" : null
    }

    function AC(a, b, c) {
        const d = zC(c.Tb, "gapsMeasurementWindow") || zC(c.wb, "gapsPerMeasurementWindow") || zC(c.Ab, "maxGapsToReport");
        return null != d ? gn(d) : c.Cd || -1 != c.wb || -1 != c.Ab ? en(new BC(a, b, c)) : gn("ShouldHaveLimits")
    }

    function CC(a) {
        return eC(a.m) && eC(a.m).placed || []
    }

    function DC(a) {
        return CC(a).map(b => Qm(Om(b.element, a.j)))
    }

    function EC(a) {
        return CC(a).map(b => b.index)
    }

    function FC(a, b) {
        const c = b.V;
        return !a.B && c.v && null != w(c.v, 8) && 1 == w(c.v, 8) ? [] : c.A ? (c.N || []).map(d => Qm(Om(d, a.j))) : [Qm(new Pm(b.ba.j, 0))]
    }

    function GC(a) {
        a.sort((e, f) => e.j - f.j);
        const b = [];
        let c = 0;
        for (let e = 0; e < a.length; ++e) {
            var d = a[e];
            let f = d.j;
            d = d.j + d.l;
            f <= c ? c = Math.max(c, d) : (b.push(new Pm(c, f - c)), c = d)
        }
        return b
    }

    function HC(a, b) {
        b = b.map(c => {
            var d = new Mz;
            d = x(d, 1, c.j);
            c = c.getHeight();
            return x(d, 2, c)
        });
        return Oz(Nz(new Qz, a), b)
    }

    function IC(a) {
        const b = D(a, Mz, 2).map(c => `G${hd(c,1)}~${c.getHeight()}`);
        return `W${hd(a,1)}${b.join("")}`
    }

    function JC(a, b) {
        const c = [];
        let d = 0;
        for (const e of Wl(b)) {
            const f = b.get(e);
            f.sort((g, h) => h.getHeight() - g.getHeight());
            a.G || f.splice(a.A, f.length);
            !a.C && d + f.length > a.l && f.splice(a.l - d, f.length);
            c.push(HC(e, f));
            d += f.length;
            if (!a.C && d >= a.l) break
        }
        return c
    }

    function KC(a) {
        const b = D(a, Qz, 5).map(c => IC(c));
        return `M${hd(a,1)}H${hd(a,2)}C${hd(a,3)}B${Number(!!I(a,4))}${b.join("")}`
    }

    function LC(a) {
        var b = ct(bn(a.m.l.l), a.j),
            c = DC(a),
            d = new Zl(EC(a));
        for (var e = 0; e < b.length; ++e)
            if (!d.contains(e)) {
                var f = FC(a, b[e]);
                c.push(...f)
            }
        c.push(new Pm(0, 0));
        c.push(Qm(new Pm(Q(a.j).scrollHeight, 0)));
        b = GC(c);
        c = new Yl;
        for (d = 0; d < b.length; ++d) e = b[d], f = a.D ? 0 : Math.floor(e.j / a.v), Ul(c, f) || c.set(f, []), c.get(f).push(e);
        b = JC(a, c);
        c = new Sz;
        c = x(c, 1, a.l);
        c = x(c, 2, a.v);
        c = x(c, 3, a.A);
        a = x(c, 4, a.B);
        return fd(a, 5, b)
    }

    function MC(a) {
        a = LC(a);
        return KC(a)
    }
    var BC = class {
        constructor(a, b, c) {
            this.D = -1 == c.Tb;
            this.v = c.Tb;
            this.G = -1 == c.wb;
            this.A = c.wb;
            this.C = -1 == c.Ab;
            this.l = c.Ab;
            this.B = c.ae;
            this.m = b;
            this.j = a
        }
    };
    const NC = a => {
            const b = /[a-zA-Z0-9._~-]/,
                c = /%[89a-zA-Z]./;
            return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
                if (!d.match(c)) {
                    const e = decodeURIComponent(d);
                    if (e.match(b)) return e
                }
                return d.toUpperCase()
            })
        },
        OC = a => {
            let b = "";
            const c = /[/%?&=]/;
            for (let d = 0; d < a.length; ++d) {
                const e = a[d];
                b = e.match(c) ? b + e : b + encodeURIComponent(e)
            }
            return b
        };
    var PC = (a, b) => {
        a = Uc(a, 2);
        if (!a) return !1;
        for (let c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    };
    const RC = (a, b) => {
            a = OC(NC(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
            const c = Wg(a),
                d = QC(a);
            return b.find(e => {
                const f = Rc(e, Pn, 7) ? w(C(e, Pn, 7), 1) : w(e, 1);
                Rc(e, Pn, 7) ? (e = C(e, Pn, 7), e = w(e, 2)) : e = 2;
                if ("number" !== typeof f) return !1;
                switch (e) {
                    case 1:
                        return f == c;
                    case 2:
                        return d[f] || !1
                }
                return !1
            }) || null
        },
        QC = a => {
            const b = {};
            for (;;) {
                b[Wg(a)] = !0;
                if (!a) return b;
                a = a.substring(0, a.lastIndexOf("/"))
            }
        };
    const SC = {
        google_ad_channel: !0,
        google_ad_host: !0
    };
    var TC = (a, b) => {
            a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
            Uk("ama", b, .01)
        },
        UC = a => {
            const b = {};
            Ug(SC, (c, d) => {
                d in a && (b[d] = a[d])
            });
            return b
        };
    var VC = a => {
        try {
            try {
                a.localStorage.removeItem("google_ama_config")
            } catch (b) {
                TC(a, {
                    lserr: 1
                })
            }
        } catch (b) {
            TC(a, {
                lserr: 1
            })
        }
    };

    function WC(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function XC(a, b) {
        a = WC(a);
        a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
        const c = !a.processed_sra_frame_pingbacks[b];
        a.processed_sra_frame_pingbacks[b] = !0;
        return c
    };

    function YC() {
        if (ZC) return ZC;
        const a = Lh() || window,
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? ZC = b : a.google_persistent_state_async = ZC = new $C
    }

    function aD(a, b, c) {
        b = bD[b] || "google_ps_" + b;
        a = a.S;
        const d = a[b];
        return void 0 === d ? (a[b] = c(), a[b]) : d
    }

    function cD(a, b, c) {
        return aD(a, b, () => c)
    }

    function dD(a, b, c) {
        return a.S[bD[b] || "google_ps_" + b] = c
    }

    function eD(a, b) {
        return dD(a, b, cD(a, b, 0) + 1)
    }

    function fD() {
        var a = YC();
        return cD(a, 20, {})
    }

    function gD() {
        var a = YC();
        const b = cD(a, 31, !1);
        b || dD(a, 31, !0);
        return !b
    }

    function hD() {
        var a = YC();
        return cD(a, 26)
    }

    function iD() {
        var a = YC();
        return cD(a, 28, [])
    }
    class $C {
        constructor() {
            this.S = {}
        }
    }
    var ZC = null;
    const bD = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };
    var jD = {
            google_ad_block: "ad_block",
            google_ad_client: "client",
            google_ad_output: "output",
            google_ad_callback: "callback",
            google_ad_height: "h",
            google_ad_resize: "twa",
            google_ad_slot: "slotname",
            google_ad_unit_key: "adk",
            google_ad_dom_fingerprint: "adf",
            google_placement_id: "pi",
            google_daaos_ts: "daaos",
            google_erank: "epr",
            google_ad_width: "w",
            google_captcha_token: "captok",
            google_content_recommendation_columns_num: "cr_col",
            google_content_recommendation_rows_num: "cr_row",
            google_ctr_threshold: "ctr_t",
            google_cust_criteria: "cust_params",
            gfwrnwer: "fwrn",
            gfwrnher: "fwrnh",
            google_image_size: "image_size",
            google_last_modified_time: "lmt",
            google_loeid: "loeid",
            google_max_num_ads: "num_ads",
            google_max_radlink_len: "max_radlink_len",
            google_mtl: "mtl",
            google_native_settings_key: "nsk",
            google_enable_content_recommendations: "ecr",
            google_num_radlinks: "num_radlinks",
            google_num_radlinks_per_unit: "num_radlinks_per_unit",
            google_pucrd: "pucrd",
            google_reactive_plaf: "plaf",
            google_reactive_plat: "plat",
            google_reactive_fba: "fba",
            google_reactive_sra_channels: "plach",
            google_responsive_auto_format: "rafmt",
            armr: "armr",
            google_plas: "plas",
            google_rl_dest_url: "rl_dest_url",
            google_rl_filtering: "rl_filtering",
            google_rl_mode: "rl_mode",
            google_rt: "rt",
            google_video_play_muted: "vpmute",
            google_source_type: "src_type",
            google_restrict_data_processing: "rdp",
            google_tag_for_child_directed_treatment: "tfcd",
            google_tag_for_under_age_of_consent: "tfua",
            google_tag_origin: "to",
            google_ad_semantic_area: "sem",
            google_tfs: "tfs",
            google_package: "pwprc",
            google_tag_partner: "tp",
            fra: "fpla",
            google_ml_rank: "mlr",
            google_apsail: "psa",
            google_ad_channel: "channel",
            google_ad_type: "ad_type",
            google_ad_format: "format",
            google_color_bg: "color_bg",
            google_color_border: "color_border",
            google_color_link: "color_link",
            google_color_text: "color_text",
            google_color_url: "color_url",
            google_page_url: "url",
            google_allow_expandable_ads: "ea",
            google_ad_section: "region",
            google_cpm: "cpm",
            google_encoding: "oe",
            google_safe: "adsafe",
            google_font_face: "f",
            google_font_size: "fs",
            google_hints: "hints",
            google_ad_host: "host",
            google_ad_host_channel: "h_ch",
            google_ad_host_tier_id: "ht_id",
            google_kw_type: "kw_type",
            google_kw: "kw",
            google_contents: "contents",
            google_targeting: "targeting",
            google_adtest: "adtest",
            google_alternate_color: "alt_color",
            google_alternate_ad_url: "alternate_ad_url",
            google_cust_age: "cust_age",
            google_cust_ch: "cust_ch",
            google_cust_gender: "cust_gender",
            google_cust_interests: "cust_interests",
            google_cust_job: "cust_job",
            google_cust_l: "cust_l",
            google_cust_lh: "cust_lh",
            google_cust_u_url: "cust_u_url",
            google_cust_id: "cust_id",
            google_language: "hl",
            google_city: "gcs",
            google_country: "gl",
            google_region: "gr",
            google_content_recommendation_ad_positions: "ad_pos",
            google_content_recommendation_columns_num: "cr_col",
            google_content_recommendation_rows_num: "cr_row",
            google_content_recommendation_ui_type: "crui",
            google_content_recommendation_use_square_imgs: "cr_sq_img",
            google_color_line: "color_line",
            google_disable_video_autoplay: "disable_video_autoplay",
            google_full_width_responsive_allowed: "fwr",
            google_full_width_responsive: "fwrattr",
            efwr: "efwr",
            google_pgb_reactive: "pra",
            google_resizing_allowed: "rs",
            google_resizing_height: "rh",
            google_resizing_width: "rw",
            rpe: "rpe",
            google_responsive_formats: "resp_fmts",
            google_safe_for_responsive_override: "sfro",
            google_video_doc_id: "video_doc_id",
            google_video_product_type: "video_product_type",
            google_webgl_support: "wgl",
            easpi: "easpi",
            easpa: "easai",
            asgr: "asgr",
            asmrc: "asmrc",
            asntp: "asntp",
            asntpv: "asntpv",
            asntpl: "asntpl",
            asntpm: "asntpm",
            asntpc: "asntpc",
            asna: "asna",
            asnd: "asnd",
            asnp: "asnp",
            asns: "asns",
            asmat: "asmat",
            asptt: "asptt",
            aspe: "aspe",
            asro: "asro",
            ascet: "easct",
            asrc: "asdrc",
            asbu: "asbu",
            aseb: "aseb",
            asla: "aslmt",
            asaa: "asamt",
            asupm: "asupm"
        },
        kD = a => (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null,
        lD = a => {
            if (a = a.innerText || a.innerHTML)
                if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
            return null
        },
        mD = a => {
            switch (a) {
                case "true":
                    return !0;
                case "false":
                    return !1;
                case "null":
                    return null;
                case "undefined":
                    break;
                default:
                    try {
                        const b = a.match(/^(?:'(.*)'|"(.*)")$/);
                        if (b) return b[1] || b[2] || "";
                        if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                            const c = parseFloat(a);
                            return c === c ? c : void 0
                        }
                    } catch (b) {}
            }
        };
    async function nD(a, b, c) {
        return 0 >= c ? Promise.reject() : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e())
            }, 200)
        })
    };

    function oD(a) {
        const b = a.state.pc;
        return null !== b && 0 !== b ? b : a.state.pc = sh(a.win)
    }

    function pD(a) {
        var b = a.state.wpc;
        if (null === b || "" === b) {
            b = a.state;
            var c = a.win;
            if (c.google_ad_client) a = String(c.google_ad_client);
            else {
                if (null == (a = WC(c).head_tag_slot_vars ? .google_ad_client ? ? c.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client"))) {
                    b: {
                        a = c.document.getElementsByTagName("script");c = c.navigator && c.navigator.userAgent || "";c = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(c) ||
                        /i(phone|pad|pod)/i.test(c) && /applewebkit/i.test(c) && !/version|safari/i.test(c) && !mi() ? kD : lD;
                        for (var d = a.length - 1; 0 <= d; d--) {
                            var e = a[d];
                            if (!e.google_parsed_script_for_pub_code && (e.google_parsed_script_for_pub_code = !0, e = c(e))) {
                                a = e;
                                break b
                            }
                        }
                        a = null
                    }
                    if (a) {
                        c = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                        for (d = {}; e = c.exec(a);) d[e[1]] = mD(e[2]);
                        a = d;
                        a = a.google_ad_client ? a.google_ad_client : ""
                    } else a = ""
                }
                a = a ? ? ""
            }
            b = b.wpc = a
        }
        return b
    }

    function qD(a, b) {
        var c = new Ak;
        var d = oD(a);
        c = ld(c, 1, d);
        c = zk(c.Na(pD(a)), a.state.sd);
        return ld(c, 7, Math.round(b || a.win.performance.now()))
    }
    async function rD(a) {
        await nD(a.win, () => !(!oD(a) || !pD(a)), 10)
    }
    async function sD(a, b, c) {
        if (a.j && c.length && !a.state.lgdp.includes(Number(b))) {
            a.state.lgdp.push(Number(b));
            var d = a.win.performance.now();
            await rD(a);
            var e = a.aa;
            a = qD(a, d);
            d = new Pj;
            b = sd(d, 1, b);
            c = Xc(b, 2, c);
            c = ed(a, 9, Bk, c);
            Ck(e, c)
        }
    }

    function tD(a, b) {
        var c = qD(a);
        b = ed(c, 5, Bk, b);
        a.j && !a.state.le.includes(2) && (a.state.le.push(2), Ck(a.aa, b))
    }
    async function uD(a, b) {
        await rD(a);
        var c = a.aa;
        a = zk(qD(a), 1);
        b = ed(a, 6, Bk, b);
        Ck(c, b)
    }
    var vD = class {
        constructor(a) {
            this.win = Lh() || window;
            this.aa = a ? ? new Lk;
            this.state = aD(YC(), 33, () => {
                const b = W(hp);
                return {
                    sd: b,
                    ssp: 0 < b && Tg() < 1 / b,
                    pc: null,
                    wpc: null,
                    le: [],
                    lgdp: []
                }
            })
        }
        get j() {
            return this.state.ssp
        }
    };
    var xD = (a, b, c, d, e, f = null, g = null, h) => {
            wD(a, new ps(a), b, c, d, e, f, new Sm(a), g, h)
        },
        wD = (a, b, c, d, e, f, g = null, h = null, k = null, l) => {
            if (c)
                if (d) {
                    var m = py(d, e, a.location);
                    try {
                        const n = new yD(a, b, c, d, e, m, f, g, h, k, l);
                        Rr(990, () => zD(n), a)
                    } catch (n) {
                        il() && jl(15, [n]), os(b, as, ls(XA(WA((new YA(0)).Na(c), d), m).wa(1), n)), tD(P(vD), Ej(new Nj, aj(1)))
                    }
                } else os(b, as, (new YA(0)).Na(c).wa(8)), tD(P(vD), Ej(new Nj, aj(8)));
            else os(b, as, (new YA(0)).wa(9)), tD(P(vD), Ej(new Nj, aj(9)))
        };

    function zD(a) {
        a.C.forEach(b => {
            switch (b) {
                case 0:
                    Rr(991, () => AD(a), a.l);
                    break;
                case 1:
                    Rr(1073, () => {
                        const c = V(Ap),
                            d = a.m.U ? Uc(a.m.U, 2) : [];
                        c && 0 == d.length || by(new fy(a.l, a.A, a.j, a.B, a.m.U, c))
                    }, a.l);
                    break;
                case 5:
                    Bx(new Cx(a.l, a.A, a.j, a.B));
                    break;
                case 2:
                    BD(a);
                    break;
                case 3:
                    CD(a);
                    break;
                case 4:
                    DD(a)
            }
        })
    }

    function AD(a) {
        (a.j ? .j() ? .j() ? ? !1) && ED(a, "p", FD(a));
        if (Ro(a.j) && 1 === w(Ro(a.j), 1)) {
            var b = C(Ro(a.j), Fn, 6);
            b && 2 === w(b, 1) && (Lr(a.l), a.D = "b")
        }
        var c = a.m.Yf;
        b = tt(a.l, c);
        if (a.m.U && Rc(a.m.U, On, 10)) {
            var d = Vc(C(a.m.U, On, 10), 1);
            null !== d && void 0 !== d && (b = lt(a.l, d, c))
        }
        Rc(a.j, Ln, 26) && (b = xt(b, C(a.j, Ln, 26), a.l));
        c = a.m.U ? Uc(a.m.U, 6) : [];
        d = a.m.U ? D(a.m.U, Un, 5) : [];
        const e = a.m.U ? Uc(a.m.U, 2) : [],
            f = Rr(993, () => {
                var g = a.j,
                    h = D(g, Bo, 1);
                const k = a.m.U && PC(a.m.U, 1) ? "text_image" : "text";
                var l = new sC;
                let m = xs(h, a.l, {
                    df: l,
                    Hf: new vs(k)
                });
                h.length != m.length && a.H.push(13);
                m = m.concat(xC(new yC(a.l, l)));
                h = 0;
                l = V(yp);
                var n = !1;
                if (Ro(g) && 1 === w(Ro(g), 1)) {
                    var q = C(Ro(g), Fn, 6);
                    q && (h = w(q, 2) || 0, 1 === w(q, 1) && (n = !0))
                }
                q = C(g, Qo, 24) ? .v() ? .j() ? .j() || !1;
                if (l || n || q) l = uC(new vC(a.l)), n = P(tB), m = m.concat(l), n.K = !0, n.C = l.length, "n" === a.D && (a.D = C(g, Qo, 24) ? .j() ? .length ? "o" : "p");
                m = m.concat(Lz(g, k, a.l));
                g = C(g, Qo, 24);
                return new IB(m, a.l, h, g)
            }, a.l);
        a.v = new iC(f, a.B, a.l, {
            Qa: b,
            uf: a.N,
            ub: a.m.ub,
            qf: c,
            yc: d
        }, GD(a), e);
        eC(a.v) ? .optimization ? .ablatingThisPageview && !a.v.Da() &&
            (Lr(a.l), P(tB).B = !0, a.D = "f");
        a.G = lC(e, a.v, a.l);
        Rr(992, () => rC(a.G), a.l).then(Rr(994, () => a.Fa.bind(a), a.l), a.ua.bind(a))
    }

    function BD(a) {
        const b = C(a.j, Do, 18);
        b && sz(new tz(a.l, new Kz(a.l, a.B), b, new lw(a.l), D(a.j, Bo, 1)))
    }

    function CD(a) {
        const b = ly(a.l.location, "google_audio_sense") ? go() : C(a.j, ho, 27);
        if (b) {
            const c = C(a.j, vo, 6) ? .j() || [];
            kn(ov(a.l, a.A, b, c, a.T, {
                google_ad_client: a.B
            }, C(a.j, so, 22) ? .j() || null), d => qv(d))
        }
    }

    function DD(a) {
        const b = C(a.j, Go, 29);
        b && HD(a.da, {
            win: a.l,
            webPropertyCode: a.B,
            Td: b,
            Fd: C(a.j, vo, 6) ? .j() ? ? []
        })
    }

    function GD(a) {
        const b = V(zp);
        if (!a.j.j()) return {
            od: b,
            vd: !1,
            Md: !1,
            He: !1,
            Pd: !1,
            Be: !1,
            Wf: 0,
            ue: 0,
            Ad: ID(a),
            Kc: a.L
        };
        const c = a.j.j();
        return {
            od: b || I(c, 14, !1),
            vd: I(c, 2, !1),
            Md: I(c, 3, !1),
            He: I(c, 4, !1),
            Pd: I(c, 5, !1),
            Be: I(c, 6, !1),
            Wf: id(Vc(c, 8), 0),
            ue: w(c, 10),
            Ad: ID(a),
            Kc: a.L
        }
    }

    function ID(a) {
        return a.m.U && Rc(a.m.U, On, 10) ? .5 <= (Vc(C(a.m.U, On, 10), 1) || 0) : !0
    }

    function JD(a, b) {
        for (var c = ks(ks(new YA(b.Ba), b.errors), a.H), d = b.Pa, e = 0; e < d.length; e++) a: {
            for (var f = d[e], g = 0; g < c.B.length; g++)
                if (c.B[g] == f) break a;c.B.push(f)
        }
        c.j.pp = b.oc;
        c.j.ppp = b.qc;
        c.j.ppos = b.placementPositionDiffs;
        c.j.eatf = b.pb;
        c.j.eatfAbg = b.qb;
        c.j.reatf = b.Va;
        c.j.a = a.G.v.slice(0).join(",");
        c = XA(WA(c, a.j), a.C).Na(a.B);
        if (d = b.pa) c.j.as_count = d.xd, c.j.d_count = d.Od, c.j.ng_count = d.ke, c.j.am_count = d.Dd, c.j.atf_count = d.yd, c.j.mdns = ZA(d.fe), c.j.alldns = ZA(d.zd);
        c = c.D(b.hb);
        if (d = b.wf) {
            e = [];
            for (var h of Wl(d)) 0 <
                d.get(h).length && (f = d.get(h)[0], e.push("(" + [h, f.Ye, f.wg].join() + ")"));
            c.j.fd = e.join(",")
        }
        h = b.Zc;
        null != h && (c.j.pgh = h);
        c.j.abl = b.Wd;
        c.j.rr = a.D;
        void 0 !== b.exception && ls(c, b.exception).wa(1);
        return c
    }

    function KD(a, b) {
        var c = JD(a, b);
        os(a.A, 0 < b.errors.length || 0 < a.H.length || void 0 !== b.exception ? 0 < a.K ? cs : as : 0 < a.K ? bs : $r, c);
        if (C(a.j, Qo, 24)) {
            a.v.l.j.j ? .G();
            b = eC(a.v);
            var d = P(tB);
            d.m = !!b ? .optimization ? .ablationFromStorage;
            b ? .optimization ? .ablatingThisPageview && (d.D = !0);
            d.L = !!b ? .optimization ? .availableAbg;
            b = P(tB);
            c = new kB(c);
            b.A ? (c.l.sl = (b.A ? ? []).join("~"), c.l.daaos = (b.H ? ? []).join("~"), c.l.ab = aB(b.D), c.l.rr = aB(b.K), c.l.oab = aB(b.G), null != b.m && (c.l.sab = aB(b.m)), b.B && (c.l.fb = aB(b.B)), c.l.ls = aB(b.L), $A(c, b.l.xb()),
                null != b.C && (c.l.rp = aB(b.C)), null != b.v && (c.l.expl = aB(b.v)), sB(b, c)) : (b = c, d = "irr".replace(RegExp("~", "g"), ""), b.l.e = b.l.e ? b.l.e + ("~" + d) : d);
            os(a.A, fs, c)
        }
    }

    function LD(a, b) {
        const c = P(vD);
        if (c.j) {
            var d = new Nj,
                e = b.Pa.filter(g => null !== g),
                f = a.H.concat(b.errors, b.exception ? [1] : []).filter(g => null !== g);
            Ij(Gj(Lj(Kj(Jj(Hj(Bj(Dj(Fj(Cj(d, a.G.v.slice(0).map(g => {
                var h = new $i;
                return x(h, 1, g)
            })), e.map(g => {
                var h = new cj;
                return x(h, 1, g)
            })), f.map(g => aj(g))), C(a.j, Zn, 23) ? .j()), b.Ba).D(b.hb), b.Va), b.pb), b.qb), a.C.map(g => g.toString())), jj(ij(hj(gj(fj(ej(dj(new kj, b.pa ? .xd), b.pa ? .Od), b.pa ? .ke), b.pa ? .Dd), b.pa ? .yd), b.pa ? .fe), b.pa ? .zd));
            C(a.j, Qo, 24) && zj(d);
            tD(c, d)
        }
    }

    function MD(a) {
        if (Ro(a.j) && 1 === w(Ro(a.j), 1)) {
            var b;
            if (b = C(Ro(a.j), Fn, 6)) a = C(Ro(a.j), Fn, 6), b = 1 <= (w(a, 3) || 0);
            a = !b
        } else a = !1;
        return a
    }

    function ND(a) {
        if (MD(a)) {
            a = a.v;
            var b = Lt({
                Wb: !0,
                Xb: !0
            }, a.j);
            a = 0 < $B(b, a.j)
        } else a = a.v.j, b = Kt({
            Xa: !1,
            Vb: !1
        }, a), a = 0 < $B(b, a);
        return a
    }

    function OD(a, b) {
        try {
            V(qp) && a.v ? .T() ? .A()
        } catch (c) {
            os(a.A, js, ls(XA(WA((new YA(b)).Na(a.B), a.j), a.C).wa(14), c))
        }
    }

    function PD(a) {
        if (a.j ? .j() ? .j() ? ? !1) {
            var b = FD(a);
            a.I.init(null == b ? void 0 : b, () => {
                ED(a, "s", b)
            });
            a.I.addListener(c => {
                ED(a, "d", FD(a), c);
                a.I.xa();
                if (a.j ? .j() ? .v()) {
                    a.j ? .j() ? .A();
                    try {
                        a.C ? .includes(0) && (a.K++, AD(a), ED(a, "r", FD(a), c))
                    } catch (d) {
                        ED(a, "f", FD(a), c), os(a.A, cs, ls(XA(WA((new YA(0)).Na(a.B), a.j), a.C).wa(1), d))
                    }
                }
            })
        }
    }

    function QD(a, b, c) {
        {
            var d = eC(a.v),
                e = b.j;
            const f = e.j,
                g = e.oc;
            let h = e.Ba,
                k = e.qc,
                l = e.errors.slice(),
                m = e.Pa.slice(),
                n = b.exception;
            const q = WC(a.l).had_ads_ablation ? ? !1;
            d ? (d.numAutoAdsPlaced ? h += d.numAutoAdsPlaced : a.G.m && m.push(13), void 0 !== d.exception && (n = d.exception), d.numPostPlacementsPlaced && (k += d.numPostPlacementsPlaced), c = {
                Ba: h,
                oc: g,
                qc: k,
                hb: f,
                errors: e.errors.slice(),
                Pa: m,
                exception: n,
                Va: c,
                pb: !!d.eatf,
                qb: !!d.eatfAbg,
                Wd: q
            }) : (m.push(12), a.G.m && m.push(13), c = {
                Ba: h,
                oc: g,
                qc: k,
                hb: f,
                errors: l,
                Pa: m,
                exception: n,
                Va: c,
                pb: !1,
                qb: !1,
                Wd: q
            })
        }
        c.pa = aC(a.v.j);
        if (b = b.j.l) c.wf = b;
        c.Zc = Q(a.l).scrollHeight;
        if (il()) {
            d = bn(a.v.l.l);
            b = [];
            for (const f of d) {
                d = {};
                e = f.I;
                for (const g of Wl(e)) d[g] = e.get(g);
                d = {
                    anchorElement: Bs(f),
                    position: f.j(),
                    clearBoth: f.H,
                    locationType: f.Ya,
                    placed: f.A,
                    placementProto: f.v ? f.v.toJSON() : null,
                    articleStructure: f.B ? f.B.toJSON() : null,
                    rejectionReasons: d
                };
                b.push(d)
            }
            jl(14, [{
                placementIdentifiers: b
            }, a.v.C, c.pa])
        }
        return c
    }

    function RD(a, b) {
        var c = a.v.j;
        c = c.googleSimulationState = c.googleSimulationState || {};
        c.amaConfigPlacementCount = b.hb;
        c.numAutoAdsPlaced = b.Ba;
        c.hasAtfAd = b.Va;
        void 0 !== b.exception && (c.exception = b.exception);
        null != a.v && (a = AC(a.l, a.v, {
            Tb: -1,
            wb: -1,
            Ab: -1,
            ae: !0,
            Cd: !0
        }), null != a.j ? (c.placementPositionDiffs = MC(a.j.value), b = LC(a.j.value), a = new Tz, a = ed(a, 2, Uz, b), c.placementPositionDiffsReport = Cd(a)) : (b = a.l.message, c.placementPositionDiffs = "E" + b, a = new Tz, a = $c(a, 1, Uz, b), c.placementPositionDiffsReport = Cd(a)))
    }

    function SD(a, b) {
        KD(a, {
            Ba: 0,
            hb: void 0,
            errors: [],
            Pa: [],
            exception: b,
            Va: void 0,
            pb: void 0,
            qb: void 0,
            pa: void 0
        });
        LD(a, {
            Ba: 0,
            hb: void 0,
            errors: [],
            Pa: [],
            exception: b,
            Va: void 0,
            pb: void 0,
            qb: void 0,
            pa: void 0
        })
    }

    function ED(a, b, c, d) {
        b = {
            r: b,
            pg_h: Q(a.l).scrollHeight,
            su: a.l.location.hostname,
            d: void 0 == c ? -1 : c
        };
        void 0 !== d && (b.pg_hd = d);
        ns(a.A, es, b)
    }

    function FD(a) {
        let b = null;
        a.j.j() && null != kd(a.j.j(), 19) && (b = kd(a.j.j(), 19));
        return b
    }
    class yD {
        constructor(a, b, c, d, e, f, g, h, k, l, m) {
            this.l = a;
            this.A = b;
            this.B = c;
            this.j = d;
            this.m = e;
            this.C = f;
            this.N = h || null;
            this.H = [];
            this.I = k;
            this.L = l;
            this.da = g;
            this.K = 0;
            this.T = m ? m : {
                url: a.location.href,
                Gb: void 0
            };
            this.D = "n"
        }
        Fa(a) {
            try {
                OD(this, a.j.Ba);
                const b = ND(this) || MD(this) ? ND(this) : void 0;
                Yo({
                    Ic: b
                }, this.l);
                PD(this);
                const c = QD(this, a, ND(this));
                Rc(this.j, Yn, 25) && y(C(this.j, Yn, 25), 1) && RD(this, c);
                KD(this, c);
                LD(this, c);
                Tk(753, () => {
                    if (V(tp) && null != this.v) {
                        var d = AC(this.l, this.v, {
                                Tb: W(xp),
                                wb: W(wp),
                                Ab: W(up),
                                ae: !0,
                                Cd: !1
                            }),
                            e = fe(c);
                        null != d.j ? (d = MC(d.j.value), e.placementPositionDiffs = d) : e.placementPositionDiffs = "E" + d.l.message;
                        e = JD(this, e);
                        os(this.A, ds, e)
                    }
                })()
            } catch (b) {
                SD(this, b)
            }
        }
        ua(a) {
            OD(this, 0);
            SD(this, a)
        }
    };
    var TD = class extends L {
            constructor(a) {
                super(a)
            }
        },
        UD = Id(TD);

    function VD(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? hn(() => UD(c)) : en(null)
    };

    function WD(a) {
        this.j = a || {
            cookie: ""
        }
    }
    p = WD.prototype;
    p.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        "object" === typeof c && (h = c.Ek, g = c.mg || !1, f = c.domain || void 0, e = c.path || void 0, d = c.ge);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
    };
    p.get = function(a, b) {
        const c = a + "=",
            d = (this.j.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = Qa(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    p.remove = function(a, b, c) {
        const d = void 0 !== this.get(a);
        this.set(a, "", {
            ge: 0,
            path: b,
            domain: c
        });
        return d
    };
    p.isEmpty = function() {
        return !this.j.cookie
    };
    p.xb = function() {
        return this.j.cookie ? (this.j.cookie || "").split(";").length : 0
    };
    p.clear = function() {
        var a = (this.j.cookie || "").split(";");
        const b = [],
            c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = Qa(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
    };

    function XD(a, b = window) {
        if (y(a, 5)) try {
            return b.localStorage
        } catch {}
        return null
    }

    function YD(a) {
        return "null" !== a.origin
    }

    function ZD(a, b, c) {
        b = y(b, 5) && YD(c) ? c.document.cookie : null;
        return null === b ? null : (new WD({
            cookie: b
        })).get(a) || ""
    };

    function $D(a, b) {
        return x(a, 5, b)
    }
    var aE = class extends L {
        constructor() {
            super()
        }
        j() {
            return y(this, 6)
        }
    };
    var dE = ({
        win: a,
        Zb: b,
        Yd: c = !1,
        Zd: d = !1
    }) => {
        if (!bE({
                win: a,
                Zb: b,
                Yd: c,
                Zd: d
            })) return cE(a, $D(new aE, !0));
        (b = cD(YC(), 24)) ? (b = $D(new aE, Az(b)), a = cE(a, b)) : a = new fn(null, Error("tcunav"));
        return a
    };

    function bE({
        win: a,
        Zb: b,
        Yd: c,
        Zd: d
    }) {
        if (!(d = !d && Ez(new Iz(a)))) {
            if (c = !c) {
                if (b) {
                    a = VD(a);
                    if (null != a.j)
                        if ((a = a.j.value) && null != w(a, 1)) b: switch (a = w(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else Vk(806, a.l), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function cE(a, b) {
        return (a = XD(b, a)) ? en(a) : new fn(null, Error("unav"))
    };
    var eE = class extends L {
        constructor(a) {
            super(a)
        }
    };
    class fE {
        constructor(a, b, c, d) {
            this.j = a;
            this.m = b;
            this.A = c;
            this.l = !1;
            this.v = d
        }
    };

    function HD(a, {
        win: b,
        webPropertyCode: c,
        Td: d,
        Fd: e
    }) {
        a = iv(8, b, a.j).then(f => f.runGallerify({
            win: b,
            webPropertyCode: c,
            serializedGallerifyConfig: Cd(d),
            serializedArticleStructures: e.map(g => Cd(g))
        }));
        Qk.Aa(927, a)
    }
    var gE = class {
        constructor(a) {
            this.j = a
        }
    };

    function hE({
        win: a,
        webPropertyCode: b,
        vb: c
    }) {
        if (ly(a.location, "google_auto_gallery")) {
            var d = new Go;
            var e = new Eo;
            e = x(e, 1, !0);
            d = dd(d, 3, e);
            HD(new gE(c), {
                win: a,
                webPropertyCode: b,
                Td: d,
                Fd: []
            })
        }
    };

    function iE(a) {
        try {
            const b = Array.from(a.l.win.document.querySelectorAll('[id*="mobile-toggle"], [id="toggle-nav"], [class~="menu-mobile-toggle"], [class*="hamburger-show"], [class~="offcanvas-toggle"], [class~="site__header-btn"], [class~="toggle-mobile-menu"], [class~="elementor-menu-toggle"]'));
            a.gd(b);
            for (const [c, d] of b.entries()) {
                const e = c;
                d.addEventListener("click", () => {
                    var f = a.j,
                        g = {
                            typ: "mt",
                            tbi: e,
                            ...jE(f)
                        };
                    kE(f.aa, g)
                })
            }
        } catch (b) {
            lE(a.j, `instrumentMenuToggleButton ${b}`)
        }
    }

    function mE(a, b) {
        if (IntersectionObserver) {
            var c = new Map;
            for (const [e, f] of b.entries()) c.set(f.rootElement, e);
            var d = new IntersectionObserver(e => {
                for (const g of e) {
                    e = a.j;
                    var f = {
                        typ: "mvc",
                        mi: c.get(g.target),
                        ir: g.intersectionRatio,
                        ...jE(e)
                    };
                    kE(e.aa, f)
                }
            }, {
                threshold: .5
            });
            for (const e of b) d.observe(e.rootElement)
        } else lE(a.j, "IntersectionObserver is not supported")
    }

    function nE(a, b) {
        for (const [c, d] of b.entries()) {
            const e = c;
            b = d;
            for (const [f, g] of b.ie.entries()) {
                const h = f;
                g.querySelector("a") ? .addEventListener("click", () => {
                    var k = a.j,
                        l = {
                            typ: "ic",
                            mi: e,
                            mii: h,
                            ...jE(k)
                        };
                    kE(k.aa, l)
                })
            }
        }
    }
    var pE = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
        Le() {
            var a = this.j,
                b = {
                    typ: "pv",
                    ...jE(a)
                };
            kE(a.aa, b);
            iE(this);
            try {
                const c = oE(this.l);
                this.ed(c);
                mE(this, c);
                nE(this, c)
            } catch (c) {
                lE(this.j, `instrumentMenu ${c}`)
            }
        }
        gd(a) {
            let b = 0;
            for (const c of a) null !== c.offsetParent && b++;
            this.j.gd({
                sg: a.length,
                tg: b
            })
        }
        ed(a) {
            let b = 0;
            for (const c of a) b += c.ie.length;
            this.j.ed({
                Mf: a.length,
                vg: b
            })
        }
    };

    function lE(a, b) {
        b = {
            typ: "er",
            msg: b,
            ...jE(a)
        };
        kE(a.aa, b)
    }

    function jE(a) {
        var b = a.webPropertyCode,
            c = a.l,
            d = a.m;
        null === a.j ? (a.j = Ji(), a = 0) : a = Ji() - a.j;
        return {
            wpc: b,
            hst: c,
            pvsid: d,
            tim: a,
            dvc: kh()
        }
    }
    var qE = class {
        constructor(a, b, c) {
            var d = sh(t);
            this.aa = a;
            this.webPropertyCode = b;
            this.l = c;
            this.m = d;
            this.j = null
        }
        ed(a) {
            a = {
                typ: "mdr",
                md: a.Mf,
                tmid: a.vg,
                ...jE(this)
            };
            kE(this.aa, a)
        }
        gd(a) {
            a = {
                typ: "mtbdr",
                tbd: a.sg,
                tbv: a.tg,
                ...jE(this)
            };
            kE(this.aa, a)
        }
    };

    function oE(a) {
        a = rE(Array.from(a.win.document.querySelectorAll(":not([id*=foot], [class*=foot]) > LI.menu-item"))) || rE(Array.from(a.win.document.querySelectorAll("UL[id*=nav] > LI, UL[class*=nav] > LI, UL[role*=nav] > LI, UL[aria-controls*=nav] > LI"))) || [];
        const b = new Map;
        for (const c of a) c.parentElement && (b.has(c.parentElement) ? b.get(c.parentElement).push(c) : b.set(c.parentElement, [c]));
        return Array.from(b.entries()).map(c => ({
            rootElement: c[0],
            ie: c[1]
        }))
    }
    var sE = class {
        constructor(a) {
            this.win = a
        }
    };

    function rE(a) {
        return 0 < a.length ? a : null
    };

    function kE(a, b) {
        const c = new Di;
        Ug(b, (d, e) => {
            const f = c.v++;
            Ai(c, f, xi(e, d))
        });
        b = Ci(c, a.protocol, a.domain, `${a.path}?id=${"abg::auto_menu"}&`);
        try {
            a.win.navigator.sendBeacon(b)
        } catch (d) {}
    }
    var tE = class {
        constructor(a) {
            this.win = a;
            this.domain = "pagead2.googlesyndication.com";
            this.path = "/pagead/gen_204";
            this.protocol = "https:"
        }
    };
    var uE = "a".charCodeAt(),
        vE = ee(wl),
        wE = ee(xl);

    function xE(a, b) {
        if (a.j + b > a.l.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.l.substring(a.j, a.j + b);
        a.j += b;
        return parseInt(c, 2)
    }

    function yE(a) {
        return String.fromCharCode(uE + xE(a, 6)) + String.fromCharCode(uE + xE(a, 6))
    }

    function zE(a) {
        let b = xE(a, 12);
        const c = [];
        for (; b--;) {
            var d = !0 === !!xE(a, 1),
                e = xE(a, 16);
            if (d)
                for (d = xE(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function AE(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (xE(a, 1)) {
                const f = e + 1;
                if (c && -1 === c.indexOf(f)) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function BE(a) {
        const b = xE(a, 16);
        return !0 === !!xE(a, 1) ? (a = zE(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : AE(a, b)
    }
    class CE {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.l = a;
            this.j = 0
        }
    };
    var EE = (a, b) => {
        try {
            var c = Zb(a.split(".")[0]).map(e => e.toString(2).padStart(8, "0")).join("");
            const d = new CE(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.j += 78;
            c.cmpId = xE(d, 12);
            c.cmpVersion = xE(d, 12);
            d.j += 30;
            c.tcfPolicyVersion = xE(d, 6);
            c.isServiceSpecific = !!xE(d, 1);
            c.useNonStandardStacks = !!xE(d, 1);
            c.specialFeatureOptins = DE(AE(d, 12, wE), wE);
            c.purpose = {
                consents: DE(AE(d, 24, vE), vE),
                legitimateInterests: DE(AE(d, 24, vE), vE)
            };
            c.purposeOneTreatment = !!xE(d, 1);
            c.publisherCC = yE(d);
            c.vendor = {
                consents: DE(BE(d), b),
                legitimateInterests: DE(BE(d),
                    b)
            };
            return c
        } catch (d) {
            return null
        }
    };
    const DE = (a, b) => {
        const c = {};
        if (Array.isArray(b) && 0 !== b.length)
            for (const d of b) c[d] = -1 !== a.indexOf(d);
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };
    var FE = class {
        constructor() {
            this.j = {}
        }
    };
    var GE = class extends L {
        constructor() {
            super()
        }
    };
    var HE = class extends L {
        constructor() {
            super()
        }
    };
    var IE = class extends L {
            constructor() {
                super()
            }
        },
        JE = [8, 11, 12, 13, 15, 17, 18, 19, 20, 21, 22, 25, 26, 27];
    var KE = class {};
    var LE = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var ME = class extends L {
        constructor(a) {
            super(a)
        }
    };
    var OE = Id(class extends L {
            constructor(a) {
                super(a, -1, NE)
            }
        }),
        NE = [7];
    var PE = new class {
        constructor() {
            this.key = "45369554";
            this.defaultValue = !1;
            this.valueType = "boolean"
        }
    };
    var QE = class extends FE {
            constructor() {
                super();
                var a = t.__fcexpdef || "";
                try {
                    const b = JSON.parse(a)[0];
                    a = "";
                    for (let c = 0; c < b.length; c++) a += String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10));
                    this.j = JSON.parse(a)
                } catch (b) {}
            }
        },
        RE;

    function SE(a) {
        return (a = TE(a)) ? C(a, ME, 4) : null
    }

    function TE(a) {
        if (a = (new WD(a)).get("FCCDCF", ""))
            if (a.startsWith("%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                UE(1), b = null
            } else b = a;
            else b = null;
        try {
            return b ? OE(b) : null
        } catch (c) {
            return UE(2), null
        }
    }

    function UE(a) {
        new KE;
        var b = new GE;
        a = x(b, 7, a);
        b = new HE;
        a = dd(b, 1, a);
        b = new IE;
        ed(b, 22, JE, a);
        RE || (RE = new QE);
        a = RE.j[PE.key];
        if ("proto" === PE.valueType) try {
            JSON.parse(a)
        } catch (c) {}
    };

    function VE(a) {
        a.__tcfapiPostMessageReady || WE(new XE(a))
    }

    function WE(a) {
        a.l = b => {
            const c = "string" == typeof b.data;
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.j.__tcfapi(e.command, e.version, (f, g) => {
                const h = {};
                h.__tcfapiReturn = "removeEventListener" === e.command ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f,
                    b.origin);
                return f
            }, e.parameter)
        };
        a.j.addEventListener("message", a.l);
        a.j.__tcfapiPostMessageReady = !0
    }
    var XE = class {
        constructor(a) {
            this.j = a;
            this.l = null
        }
    };

    function YE(a) {
        var b = V(Dp);
        a.__uspapi || a.frames.__uspapiLocator || (a = new ZE(a), $E(a), b && aF(a))
    }

    function $E(a) {
        !a.A || a.j.__uspapi || a.j.frames.__uspapiLocator || (a.j.__uspapiManager = "fc", xz(a.j, "__uspapiLocator"), Ea("__uspapi", (...b) => bF(a, ...b)))
    }

    function aF(a) {
        !a.m || a.j.__tcfapi || a.j.frames.__tcfapiLocator || (a.j.__tcfapiManager = "fc", xz(a.j, "__tcfapiLocator"), a.j.__tcfapiEventListeners = a.j.__tcfapiEventListeners || [], Ea("__tcfapi", (...b) => cF(a, ...b)), VE(a.j))
    }

    function bF(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.A
        }, !0)
    }

    function cF(a, b, c, d, e = null) {
        if ("function" === typeof d)
            if (c && 2 !== c) d(null, !1);
            else switch (c = a.j.__tcfapiEventListeners, b) {
                case "getTCData":
                    !e || Array.isArray(e) && e.every(f => "number" === typeof f) ? d(dF(a, e, null), !0) : d(null, !1);
                    break;
                case "ping":
                    d({
                        gdprApplies: !0,
                        cmpLoaded: !0,
                        cmpStatus: "loaded",
                        displayStatus: "disabled",
                        apiVersion: "2.0",
                        cmpVersion: 1,
                        cmpId: 300
                    });
                    break;
                case "addEventListener":
                    b = c.push(d);
                    d(dF(a, null, b - 1), !0);
                    break;
                case "removeEventListener":
                    c[e] ? (c[e] = null, d(!0)) : d(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    d(null, !1)
            }
    }

    function dF(a, b, c) {
        if (!a.m) return null;
        b = EE(a.m, b);
        b.addtlConsent = null != a.v ? a.v : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    }
    class ZE {
        constructor(a) {
            this.j = a;
            this.l = a.document;
            this.A = (a = (a = TE(this.l)) ? C(a, LE, 5) || null : null) ? w(a, 2) : null;
            this.m = (a = SE(this.l)) && null != w(a, 1) ? w(a, 1) : null;
            this.v = (a = SE(this.l)) && null != w(a, 2) ? w(a, 2) : null
        }
    };

    function eF(a) {
        const b = a[0] / 255,
            c = a[1] / 255;
        a = a[2] / 255;
        return .2126 * (.03928 >= b ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4)) + .7152 * (.03928 >= c ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4)) + .0722 * (.03928 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4))
    }

    function fF(a, b) {
        a = eF(a);
        b = eF(b);
        return (Math.max(a, b) + .05) / (Math.min(a, b) + .05)
    };
    var gF = Promise;
    class hF {
        constructor(a) {
            this.m = a
        }
        l(a, b, c) {
            this.m.then(d => {
                d.l(a, b, c)
            })
        }
        j(a, b) {
            return this.m.then(c => c.j(a, b))
        }
    };
    class iF {
        constructor(a) {
            this.data = a
        }
    };

    function jF(a, b) {
        kF(a, b);
        return new lF(a)
    }
    class lF {
        constructor(a) {
            this.m = a
        }
        l(a, b, c = []) {
            const d = new MessageChannel;
            kF(d.port1, b);
            this.m.postMessage(a, [d.port2].concat(c))
        }
        j(a, b) {
            return new gF(c => {
                this.l(a, c, b)
            })
        }
    }

    function kF(a, b) {
        b && (a.onmessage = c => {
            b(new iF(c.data, jF(c.ports[0])))
        })
    };
    var oF = ({
        destination: a,
        Ca: b,
        origin: c,
        Sa: d = "ZNWN1d",
        onMessage: e,
        pe: f
    }) => mF({
        destination: a,
        Bf: () => b.contentWindow,
        Sf: nF(c),
        Sa: d,
        onMessage: e,
        pe: f
    });
    const mF = ({
            destination: a,
            Bf: b,
            Sf: c,
            Hk: d,
            Sa: e,
            onMessage: f,
            pe: g
        }) => {
            const h = Object.create(null);
            c.forEach(k => {
                h[k] = !0
            });
            return new hF(new gF((k, l) => {
                const m = n => {
                    n.source && n.source === b() && !0 === h[n.origin] && (n.data.n || n.data) === e && (a.removeEventListener("message", m, !1), d && n.data.t !== d ? l(Error(`Token mismatch while establishing channel "${e}". Expected ${d}, but received ${n.data.t}.`)) : (k(jF(n.ports[0], f)), g && g(n)))
                };
                a.addEventListener("message", m, !1)
            }))
        },
        nF = a => {
            a = "string" === typeof a ? [a] : a;
            const b = Object.create(null);
            a.forEach(c => {
                if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
                b[c] = !0
            });
            return a
        };

    function pF(a, b, c, d, e, f, g = null, h) {
        try {
            var k = a.localStorage
        } catch (r) {
            k = null
        }
        if (k) {
            if (V(sp)) var l = null;
            else try {
                l = k.getItem("google_ama_config")
            } catch (r) {
                l = null
            }
            try {
                var m = l ? Uo(l) : null
            } catch (r) {
                m = null
            }
            l = m
        } else l = null;
        a: {
            if (d) try {
                var n = Uo(d);
                break a
            } catch (r) {
                TC(a, {
                    cfg: 1,
                    inv: 1
                })
            }
            n = null
        }
        if (d = n) {
            if (e) {
                n = new Nn;
                dd(d, 3, n);
                l = d.j() && kd(d.j(), 13) ? kd(d.j(), 13) : 1;
                x(n, 1, Date.now() + 864E5 * l);
                n = Bd(d, !1);
                d.j() && (l = new Mn, m = d.j(), m = y(m, 23), l = x(l, 23, null == m ? void 0 : m), m = I(d.j(), 12, !1), l = x(l, 12, m), m = I(d.j(), 15, !1), l = x(l,
                    15, m), dd(n, 15, l));
                l = D(n, Bo, 1);
                for (m = 0; m < l.length; m++) x(l[m], 11, Dc);
                x(n, 22, void 0, !1);
                if (V(sp)) VC(a);
                else try {
                    (e || a.localStorage).setItem("google_ama_config", Cd(n))
                } catch (r) {
                    TC(a, {
                        lserr: 1
                    })
                }
            }
            e = RC(a, D(d, Xn, 7));
            a: {
                if (e && (n = w(e, 3), l = C(d, ro, 9), n && l)) {
                    b: {
                        l = D(l, po, 1);
                        for (q of l)
                            if (w(q, 1) == n) {
                                var q = C(q, oo, 2) || null;
                                break b
                            }
                        q = null
                    }
                    if (q) break a
                }
                q = C(d, oo, 8) || new oo
            }
            q = {
                Yf: q
            };
            e && (q.U = e);
            e && PC(e, 3) && (q.ub = [1]);
            if (7 === c.google_pgb_reactive && (e = q.U, !e || !y(e, 8))) return !1;
            XC(a, 2) && (jl(5, [d.toJSON()]), e = UC(c), f = new gE(f),
                c = q.U, e.google_package = c && w(c, 4) || "", xD(a, b, d, q, f, new An(["google-auto-placed"], e), g, {
                    url: a.location.href,
                    Gb: h
                }));
            return !0
        }
        l && (TC(a, {
            cfg: 1,
            cl: 1
        }), VC(a));
        return !1
    };
    var rF = a => {
        const b = a.F;
        null == b.google_ad_output && (b.google_ad_output = "html");
        if (null != b.google_ad_client) {
            var c;
            (c = String(b.google_ad_client)) ? (c = c.toLowerCase(), "ca-" != c.substring(0, 3) && (c = "ca-" + c)) : c = "";
            b.google_ad_client = c
        }
        null != b.google_ad_slot && (b.google_ad_slot = String(b.google_ad_slot));
        b.google_webgl_support = !!$f.WebGLRenderingContext;
        b.google_ad_section = b.google_ad_section || b.google_ad_region || "";
        b.google_country = b.google_country || b.google_gl || "";
        c = (new Date).getTime();
        Array.isArray(b.google_color_bg) &&
            (b.google_color_bg = qF(a, b.google_color_bg, c));
        Array.isArray(b.google_color_text) && (b.google_color_text = qF(a, b.google_color_text, c));
        Array.isArray(b.google_color_link) && (b.google_color_link = qF(a, b.google_color_link, c));
        Array.isArray(b.google_color_url) && (b.google_color_url = qF(a, b.google_color_url, c));
        Array.isArray(b.google_color_border) && (b.google_color_border = qF(a, b.google_color_border, c));
        Array.isArray(b.google_color_line) && (b.google_color_line = qF(a, b.google_color_line, c))
    };

    function qF(a, b, c) {
        a.j |= 2;
        return b[c % b.length]
    };

    function sF(a, b) {
        var c = Qk,
            d;
        var e;
        d = (e = (e = Fh()) && (d = e.initialLayoutRect) && "number" === typeof d.top && "number" === typeof d.left && "number" === typeof d.width && "number" === typeof d.height ? new Bh(d.left, d.top, d.width, d.height) : null) ? new ig(e.left, e.top) : (d = Jh()) && ta(d.rootBounds) ? new ig(d.rootBounds.left + d.boundingClientRect.left, d.rootBounds.top + d.boundingClientRect.top) : null;
        if (d) return d;
        try {
            var f = new ig(0, 0),
                g = xg(sg(b));
            if (Db(g, "parent")) {
                do {
                    if (g == a) var h = Wh(b);
                    else {
                        var k = Vh(b);
                        h = new ig(k.left, k.top)
                    }
                    d =
                        h;
                    f.x += d.x;
                    f.y += d.y
                } while (g && g != a && g != g.parent && (b = g.frameElement) && (g = g.parent))
            }
            return f
        } catch (l) {
            return c.la(888, l), new ig(-12245933, -12245933)
        }
    };
    var tF = class extends L {
        constructor(a) {
            super(a)
        }
        j() {
            return I(this, 6)
        }
        v() {
            return I(this, 7)
        }
    };
    var vF = class extends L {
            constructor(a) {
                super(a, -1, uF)
            }
            j() {
                return Wc(this, 1, Mc, !1)
            }
        },
        uF = [1];
    var xF = class extends L {
            constructor(a) {
                super(a, -1, wF)
            }
        },
        wF = [19],
        yF = [13, 14];

    function zF(a, b) {
        b && !a.j && (a.j = b.split(":").find(c => 0 === c.indexOf("ID=")) || null)
    }
    var AF = class {
            constructor() {
                this.j = null;
                this.l = {
                    [3]: {},
                    [4]: {},
                    [5]: {}
                };
                const a = b => this.j ? Wg(`${b} + ${this.j}`) % 1E3 : void 0;
                this.l[4] = {
                    [9]: (...b) => a(b[0])
                }
            }
        },
        BF;
    let CF = void 0;

    function DF() {
        Hd(CF, Fd);
        return CF
    };

    function EF(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : be(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    };

    function FF(a = t) {
        return a.ggeac || (a.ggeac = {})
    };

    function GF(a, b = document) {
        return !!b.featurePolicy ? .allowedFeatures().includes(a)
    };

    function HF(a, b) {
        a.j = Mk(14, b, () => {})
    }
    class IF {
        constructor() {
            this.j = () => {}
        }
    };

    function JF(a = FF()) {
        Nk(P(Ok), a);
        KF(a);
        HF(P(IF), a);
        P(er).A()
    }

    function KF(a) {
        const b = P(er);
        b.j = (c, d) => Mk(5, a, () => !1)(c, d, 1);
        b.l = (c, d) => Mk(6, a, () => 0)(c, d, 1);
        b.m = (c, d) => Mk(7, a, () => "")(c, d, 1);
        b.v = (c, d) => Mk(8, a, () => [])(c, d, 1);
        b.A = () => {
            Mk(15, a, () => {})(1)
        }
    };

    function LF(a) {
        var b = P(Ok).l(a);
        a = sD(P(vD), a, b);
        sl.Aa(1085, a)
    }
    var MF = a => {
        const b = P(Ok).j();
        a = WC(a);
        a.eids || (a.eids = []);
        return b.concat(a.eids).join(",")
    };

    function NF(a, b, c) {
        return c ? ZD(b, c, a.j) : null
    }

    function OF(a, b, c, d) {
        if (d) {
            var e = {
                ge: w(c, 2) - Date.now() / 1E3,
                path: w(c, 3),
                domain: w(c, 4),
                mg: !1
            };
            a = a.j;
            y(d, 5) && YD(a) && (new WD(a.document)).set(b, w(c, 1), e)
        }
    }

    function PF(a, b, c) {
        if (c && ZD(b, c, a.j))
            for (const e of QF(a.j.location.hostname)) {
                var d = a.j;
                y(c, 5) && YD(d) && (new WD(d.document)).remove(b, "/", e)
            }
    }
    var RF = class {
        constructor(a) {
            this.j = a;
            this.l = 0
        }
    };

    function QF(a) {
        if ("localhost" === a) return ["localhost"];
        a = a.split(".");
        if (2 > a.length) return [];
        const b = [];
        for (let c = 0; c < a.length - 1; ++c) b.push(a.slice(c).join("."));
        return b
    };

    function SF(a, b, c) {
        return Tk(629, function(d) {
            delete a._gfp_s_;
            if (!d) throw Error("Invalid JSONP response");
            d = d._cookies_;
            if (!d) return Promise.resolve();
            if (0 === d.length) throw Error("Invalid JSONP response");
            for (const f of d) {
                var e = f._domain_;
                const g = f._value_,
                    h = f._expires_,
                    k = f._path_;
                d = f._version_ || 1;
                if ("string" !== typeof e || "string" !== typeof g || "number" !== typeof h || "string" !== typeof k || "number" !== typeof d || !g) throw Error("Invalid JSONP response");
                e = Nf(Mf(Lf(Kf(new Of, g), h), k), e);
                switch (d) {
                    case 1:
                        OF(c,
                            "__gads", e, b);
                        break;
                    case 2:
                        OF(c, "__gpi", e, b)
                }
            }
            return Promise.resolve()
        })
    }

    function TF(a, b, c) {
        let d;
        if (0 === a.l) {
            if (NF(a, "__gads", b)) var e = !0;
            else if (e = a.j, y(b, 5) && YD(e) && (new WD(e.document)).set("GoogleAdServingTest", "Good", void 0), e = "Good" === ZD("GoogleAdServingTest", b, a.j)) {
                var f = a.j;
                y(b, 5) && YD(f) && (new WD(f.document)).remove("GoogleAdServingTest", void 0, void 0)
            }
            a.l = e ? 2 : 1
        }
        2 === a.l && (d = SF(c, b, a));
        c._gfp_p_ = !0;
        return d
    }

    function UF(a, b, c, d) {
        d = {
            domain: c.location.hostname,
            callback: "_gfp_s_",
            client: d
        };
        var e = NF(b, "__gads", a);
        e && (d.cookie = e);
        (e = NF(b, "__gpi", a)) && !e.includes("&") && (d.gpic = e);
        const f = qe(te(Md(Nd("https://partner.googleadservices.com/gampad/cookie.js"))), d),
            g = TF(b, a, c);
        g ? new Promise(h => {
            c._gfp_s_ = k => {
                g(k).then(h)
            };
            Qg(c.document, f)
        }) : Promise.resolve()
    }

    function VF(a, b, c) {
        "_gfp_p_" in b || (b._gfp_p_ = !1, "_gfp_a_" in b || (b._gfp_a_ = !0));
        const d = new RF(b);
        c = b.google_ad_client || c;
        var e = b._gfp_a_;
        if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_a_"}: ${e}`);
        if (e) {
            e = b._gfp_p_;
            if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_p_"}: ${e}`);
            e ? Promise.resolve() : UF(a, d, b, c)
        } else Promise.resolve();
        a = NF(d, "__gads", a) || "";
        BF || (BF = new AF);
        b = BF;
        zF(b, a);
        a = b.l;
        P(IF).j(a);
        LF(20);
        LF(17)
    };

    function WF(a) {
        if (V(pq)) {
            a.easpi = V(pq);
            V(oq) && (a.easpa = !0);
            a.asntp = 0;
            a.asntpv = 0;
            a.asntpl = 0;
            a.asntpm = 0;
            a.asntpc = W(Gq);
            a.asna = 5;
            a.asnd = 5;
            a.asnp = 5;
            a.asns = 5;
            a.asmat = W(Eq);
            a.asptt = -1;
            V(Nq) || (a.aspe = !0);
            a.asro = V(Rq) ? V(Pp) : V(Iq);
            V(Hq) && (a.ascet = !0);
            V(Bq) && (a.asgr = !0);
            V(Jq) || (a.asrc = !1);
            V(xq) && (a.asbu = !0);
            V(zq) && (a.aseb = !0);
            1 > W(Cq) && (a.asla = W(Cq));
            1 > W(sq) && (a.asaa = W(sq));
            V(Uq) && (a.asupm = !0);
            var b = W(Dq);
            0 < b && (a.asmrc = b)
        }
    };

    function XF(a, b) {
        return By({
            J: a,
            Tc: 3E3,
            Vc: a.innerWidth > Gl ? 650 : 0,
            aa: Pk,
            Hd: b
        })
    };
    var YF = a => {
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0, b |= Hl(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var ZF = a => {
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0, b |= Hl(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var $F = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, b |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
            } catch (c) {
                b |= 32
            }
            return b
        },
        aG = (a, b, c) => {
            let d = 0;
            try {
                d |= Hl(a, 2500);
                if (V(dq)) {
                    const g = Q(a).clientHeight;
                    d |= g ? 320 > g ? 2097152 : 0 : 1073741824
                }
                d |= Il(a);
                var e;
                if (e = 0 < b) {
                    var f = cA(c, b);
                    e = !(f && 1 > f.length)
                }
                e && (d |= 134217728)
            } catch (g) {
                d |= 32
            }
            return d
        };

    function bG(a, b, c, d = null) {
        if (!V(gq)) return 32;
        let e = a != a.top ? 512 : 0;
        Cy(a.navigator ? .userAgent) && (e |= 1048576);
        const f = a.innerWidth;
        1200 > f && (e |= 65536);
        const g = a.innerHeight;
        650 > g && (e |= 2097152);
        d && 0 === e && (cG({
            J: a,
            de: b,
            De: 1,
            position: 3 === d ? "left" : "right",
            O: f,
            W: g,
            Ja: new Set,
            minWidth: 120,
            minHeight: 500,
            Ae: c
        }) || (e |= 16));
        return e
    }

    function dG(a) {
        var b = V(Kp);
        if (0 !== bG(a, !0, b)) return "";
        const c = [],
            d = a.innerWidth,
            e = a.innerHeight;
        for (const f of ["left", "right"]) {
            const g = cG({
                J: a,
                de: !0,
                De: 1,
                position: f,
                O: d,
                W: e,
                Ja: new Set,
                minWidth: 120,
                minHeight: 500,
                Ae: b
            });
            g && c.push(`${g.width}x${g.height}_${String(f).charAt(0)}`)
        }
        return c.join("|")
    }

    function eG(a, b) {
        return null !== Hg(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c))
    }

    function fG(a, b) {
        return Hg(a, c => c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position)
    }

    function gG(a) {
        const b = [];
        for (const c of a.document.querySelectorAll("*")) {
            const d = a.getComputedStyle(c, null);
            "fixed" === d.position && "none" !== d.display && "hidden" !== d.visibility && b.push(c)
        }
        return b
    }

    function hG(a) {
        return Math.round(10 * Math.round(a / 10))
    }

    function iG(a) {
        return `${a.position}-${hG(a.O)}x${hG(a.W)}-${hG(a.scrollY+a.ib)}Y`
    }

    function jG(a) {
        return `f-${iG({position:a.position,ib:a.ib,scrollY:0,O:a.O,W:a.W})}`
    }

    function kG(a, b) {
        a = Math.min(a ? ? Infinity, b ? ? Infinity);
        return Infinity !== a ? a : 0
    }

    function lG(a, b, c) {
        const d = Dl(c.J).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top - 10, 0),
                    g = Math.min(e.bottom + 10, c.W),
                    h = Math.max(e.left - 10, 0);
                e = Math.min(e.right + 10, c.O);
                for (var k = .3 * c.O; f <= g; f += 10) {
                    if (0 < e && h < k) {
                        var l = jG({
                            position: "left",
                            ib: f,
                            O: c.O,
                            W: c.W
                        });
                        b.set(l, kG(b.get(l), h))
                    }
                    if (h < c.O && e > c.O - k) {
                        l = jG({
                            position: "right",
                            ib: f,
                            O: c.O,
                            W: c.W
                        });
                        const m = c.O - e;
                        b.set(l, kG(b.get(l), m))
                    }
                }
                d.add(a)
            }
        }
    }

    function cG(a) {
        if (a.Ae && (1200 > a.O || 650 > a.W)) return null;
        var b = Dl(a.J).sideRailAvailableSpace;
        if (!a.de) {
            var c = {
                    J: a.J,
                    O: a.O,
                    W: a.W,
                    Ja: a.Ja
                },
                d = `f-${hG(c.O)}x${hG(c.W)}`;
            if (!b.has(d)) {
                b.set(d, 0);
                Dl(c.J).sideRailProcessedFixedElements.clear();
                d = new Set([...Array.from(c.J.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]")), ...c.Ja]);
                for (var e of gG(c.J)) eG(e, d) || lG(e, b, c)
            }
        }
        c = [];
        d = .9 * a.W;
        var f = Ol(a.J),
            g = e = (a.W - d) / 2,
            h = d / 7;
        for (var k = 0; 8 > k; k++) {
            var l = c,
                m = l.push;
            a: {
                var n = g;
                var q = a.position,
                    r = b,
                    u = {
                        J: a.J,
                        O: a.O,
                        W: a.W,
                        Ja: a.Ja
                    };
                const z = jG({
                        position: q,
                        ib: n,
                        O: u.O,
                        W: u.W
                    }),
                    B = iG({
                        position: q,
                        ib: n,
                        scrollY: f,
                        O: u.O,
                        W: u.W
                    });
                if (r.has(B)) {
                    n = kG(r.get(z), r.get(B));
                    break a
                }
                const H = "left" === q ? 20 : u.O - 20;
                let E = H;q = .3 * u.O / 5 * ("left" === q ? 1 : -1);
                for (let F = 0; 6 > F; F++) {
                    const J = Ny(u.J.document, Math.round(E), Math.round(n));
                    var A = eG(J, u.Ja);
                    const U = fG(J, u.J);
                    if (!A && null !== U) {
                        lG(U, r, u);
                        r.delete(B);
                        break
                    }
                    A || (A = J.offsetHeight >= .25 * u.W, A = J.offsetWidth >= .9 * u.O && A);
                    if (A) r.set(B, Math.round(Math.abs(E - H) + 20));
                    else if (E !== H) E -=
                        q, q /= 2;
                    else {
                        r.set(B, 0);
                        break
                    }
                    E += q
                }
                n = kG(r.get(z), r.get(B))
            }
            m.call(l, n);
            g += h
        }
        b = a.De;
        f = a.position;
        d = Math.round(d / 8);
        e = Math.round(e);
        g = a.minWidth;
        a = a.minHeight;
        m = [];
        h = Array(c.length).fill(0);
        for (l = 0; l < c.length; l++) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[l];) m.pop();
            h[l] = 0 === m.length ? 0 : m[m.length - 1] + 1;
            m.push(l)
        }
        m = [];
        k = c.length - 1;
        l = Array(c.length).fill(0);
        for (n = k; 0 <= n; n--) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[n];) m.pop();
            l[n] = 0 === m.length ? k : m[m.length - 1] - 1;
            m.push(n)
        }
        m = null;
        for (k = 0; k < c.length; k++)
            if (n = {
                    position: f,
                    width: Math.round(c[k]),
                    height: Math.round((l[k] - h[k] + 1) * d),
                    Gk: e + h[k] * d
                }, r = n.width >= g && n.height >= a, 0 === b && r) {
                m = n;
                break
            } else 1 === b && r && (!m || n.width * n.height > m.width * m.height) && (m = n);
        return m
    };
    const mG = {
        [27]: 512,
        [26]: 128
    };
    var nG = (a, b, c, d) => {
            switch (c) {
                case 1:
                case 2:
                    return 0 === XF(a, c);
                case 3:
                case 4:
                    return 0 === bG(a, !1, V(Kp), c);
                case 8:
                    return b = "on" === b.google_adtest || ly(a.location, "google_ia_debug") ? -1 : 3600, 0 == ($F(a) | aG(a, b, d));
                case 9:
                    return b = !("on" === b.google_adtest || ly(a.location, "google_scr_debug")), !dA(a, b, d);
                case 30:
                    return 0 == SB(a);
                case 26:
                    return 0 == ZF(a);
                case 27:
                    return 0 === YF(a);
                case 40:
                    return !0;
                default:
                    return !1
            }
        },
        oG = (a, b, c, d) => {
            switch (c) {
                case 0:
                case 40:
                case 10:
                case 11:
                    return 0;
                case 1:
                case 2:
                    return XF(a, c);
                case 3:
                case 4:
                    return bG(a, !1, V(Kp), c);
                case 8:
                    return b = "on" === b.google_adtest || ly(a.location, "google_ia_debug") ? -1 : 3600, $F(a) | aG(a, b, d);
                case 9:
                    return dA(a, !("on" === b.google_adtest || ly(a.location, "google_scr_debug")), d);
                case 16:
                    return zr(b, a) ? 0 : 8388608;
                case 30:
                    return SB(a);
                case 26:
                    return ZF(a);
                case 27:
                    return YF(a);
                default:
                    return 32
            }
        },
        pG = (a, b, c) => {
            const d = b.google_reactive_ad_format;
            if (!ce(d)) return !1;
            a = Pg(a);
            if (!a || !nG(a, b, d, c)) return !1;
            b = Dl(a);
            if (Ml(b, d)) return !1;
            b.adCount[d] || (b.adCount[d] = 0);
            b.adCount[d]++;
            return !0
        },
        rG = a => {
            const b = a.google_reactive_ad_format;
            return !a.google_reactive_ads_config && qG(a) && 16 !== b && 10 !== b && 11 !== b && 40 !== b && 41 !== b
        },
        sG = a => {
            if (!a.hash) return null;
            let b = null;
            Ug(iy, c => {
                !b && ly(a, c) && (b = jy[c])
            });
            return b
        },
        uG = (a, b) => {
            const c = Dl(a).tagSpecificState[1] || null;
            null != c && null == c.debugCard && Ug(ky, d => {
                !c.debugCardRequested && "number" === typeof d && oy(d, a.location) && (c.debugCardRequested = !0, tG(a, b, e => {
                    c.debugCard = e.createDebugCard(d, a)
                }))
            })
        },
        wG = (a, b, c) => {
            if (!b) return null;
            const d = Dl(b);
            let e = 0;
            Ug(de, f => {
                const g =
                    mG[f];
                g && 0 === vG(a, b, f, c) && (e |= g)
            });
            d.wasPlaTagProcessed && (e |= 256);
            a.google_reactive_tag_first && (e |= 1024);
            return e ? "" + e : null
        },
        xG = (a, b, c) => {
            const d = [];
            Ug(de, e => {
                if (V(gq) || 3 !== e && 4 !== e) {
                    var f = vG(b, a, e, c);
                    0 !== f && d.push(e + ":" + f)
                }
            });
            return d.join(",") || null
        },
        yG = a => {
            const b = [],
                c = {};
            Ug(a, (d, e) => {
                if ((e = Bl[e]) && !c[e]) {
                    c[e] = !0;
                    if (d) d = 1;
                    else if (!1 === d) d = 2;
                    else return;
                    b.push(e + ":" + d)
                }
            });
            return b.join(",")
        },
        zG = a => {
            a = a.overlays;
            if (!a) return "";
            a = a.bottom;
            return "boolean" === typeof a ? a ? "1" : "0" : ""
        },
        vG = (a, b, c, d) => {
            if (!b) return 256;
            let e = 0;
            const f = Dl(b),
                g = Ml(f, c);
            if (a.google_reactive_ad_format == c || g) e |= 64;
            let h = !1;
            Ug(f.reactiveTypeDisabledByPublisher, (k, l) => {
                String(c) === String(l) && (h = !0)
            });
            h && sG(b.location) !== c && (e |= 128);
            return e | oG(b, a, c, d)
        },
        AG = (a, b) => {
            if (a) {
                var c = Dl(a),
                    d = {};
                Ug(b, (e, f) => {
                    (f = Bl[f]) && (!1 === e || /^false$/i.test(e)) && (d[f] = !0)
                });
                Ug(de, e => {
                    d[Cl[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
                })
            }
        },
        BG = (a, b, c) => {
            b = Qk.ta(b, c);
            return iv(1, window, qe(a, fr(kp) ? {
                bust: fr(kp)
            } : {})).then(b)
        },
        tG = (a, b, c) => {
            c = Qk.ta(212, c);
            iv(3, a,
                b).then(c)
        };
    const CG = a => {
        a.adsbygoogle || (a.adsbygoogle = [], Qg(a.document, O `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`))
    };
    var DG = (a, b) => {
            M(a, "load", () => {
                CG(a);
                a.adsbygoogle.push(b)
            })
        },
        EG = a => {
            a = a.google_reactive_ad_format;
            return ce(a) ? "" + a : null
        },
        qG = a => !!EG(a) || null != a.google_pgb_reactive,
        FG = a => {
            a = EG(a);
            return 26 == a || 27 == a || 30 == a || 16 == a || 40 == a || 41 == a
        };

    function GG(a) {
        return "number" === typeof a.google_reactive_sra_index
    }

    function HG(a, b, c) {
        const d = b.J || b.pubWin,
            e = b.F;
        e.google_reactive_plat = xG(d, e, c);
        var f = yG(a);
        f && (e.google_reactive_plaf = f);
        (f = zG(a)) && (e.google_reactive_fba = f);
        (f = dG(d)) && (e.google_plas = f);
        IG(a, e);
        f = sG(b.pubWin.location);
        JG(a, f, e);
        f ? (e.fra = f, e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
        WF(e);
        V(Lp) && (e.fsapi = !0);
        Kh() || or(b.pubWin.top);
        f = Yk(b.pubWin, "rsrai", Tk(429, (g, h) => KG(b, d, e.google_ad_client, a, g, h, c)), Tk(430, (g, h) => Rl(b.pubWin, "431", Pk, h)));
        b.m.push(f);
        Dl(d).wasReactiveTagRequestSent = !0;
        LG(b,
            a, c)
    }

    function LG(a, b, c) {
        const d = a.F,
            e = ta(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = Yk(a.pubWin, "apcnf", Tk(353, (f, g) => {
            var h = a.pubWin,
                k = d.google_ad_client,
                l = a.ea.vb,
                m = a.ea.Gb;
            return ph(g.origin) ? pF(h, k, e, f.config, c, l, null, m) : !1
        }), Tk(353, (f, g) => Rl(a.pubWin, "353", Pk, g)));
        a.m.push(b)
    }

    function KG(a, b, c, d, e, f, g) {
        if (!ph(f.origin)) return !1;
        f = e.data;
        if (!Array.isArray(f)) return !1;
        if (!XC(b, 1)) return !0;
        f && jl(6, [f]);
        e = e.amaConfig;
        const h = [],
            k = [],
            l = Dl(b);
        let m = null;
        for (let n = 0; n < f.length; n++) {
            if (!f[n]) continue;
            const q = f[n],
                r = q.adFormat;
            l && q.enabledInAsfe && (l.reactiveTypeEnabledInAsfe[r] = !0);
            if (!q.noCreative) {
                q.google_reactive_sra_index = n;
                if (9 === r && e) {
                    q.pubVars = Object.assign(q.pubVars || {}, MG(d, q));
                    const u = new eA;
                    if (Zz(u, q)) {
                        m = u;
                        continue
                    }
                }
                h.push(q);
                k.push(r)
            }
        }
        h.length && (Uk("rasra::pm", {
            rt: k.join(","),
            c
        }, .1), BG(a.ea.xe, 522, n => {
            NG(h, b, c, n, d, g)
        }));
        e && pF(b, c, d, e, g, a.ea.vb, m);
        return !0
    }

    function MG(a, b) {
        const c = b.adFormat,
            d = b.adKey;
        delete b.adKey;
        const e = {};
        a = a.page_level_pubvars;
        ta(a) && Object.assign(e, a);
        e.google_ad_unit_key = d;
        e.google_reactive_sra_index = b.google_reactive_sra_index;
        30 === c && (e.google_reactive_ad_format = 30);
        e.google_pgb_reactive = e.google_pgb_reactive || 5;
        return b.pubVars = e
    }

    function NG(a, b, c, d, e, f) {
        const g = [];
        for (let h = 0; h < a.length; h++) {
            const k = a[h],
                l = k.adFormat,
                m = k.adKey,
                n = d.configProcessorForAdFormat(l);
            l && n && m ? (k.pubVars = MG(e, k), delete k.google_reactive_sra_index, g.push(l), Sk(466, () => n.verifyAndProcessConfig(b, k, f))) : Uk("rasra::ivc", {
                af: l,
                ak: String(m),
                c
            }, .1)
        }
        Uk("rasra::pr", {
            rt: g.join(","),
            c
        }, .1)
    }

    function IG(a, b) {
        const c = [];
        let d = !1;
        Ug(Bl, (e, f) => {
            let g;
            a.hasOwnProperty(f) && (f = a[f], f ? .google_ad_channel && (g = String(f.google_ad_channel)));
            --e;
            c[e] && "+" !== c[e] || (c[e] = g ? g.replace(/,/g, "+") : "+", d || (d = !!g))
        });
        d && (b.google_reactive_sra_channels = c.join(","))
    }

    function JG(a, b, c) {
        if (!c.google_adtest) {
            var d = a.page_level_pubvars;
            if ("on" === a.google_adtest || "on" === d ? .google_adtest || b) c.google_adtest = "on"
        }
    };
    Cb("script");
    var OG = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };

    function PG(a, b) {
        if (!zr(b, a)) return () => {};
        a = QG(b, a);
        if (!a) return () => {};
        const c = iD();
        b = fe(b);
        const d = {
            La: a,
            F: b,
            offsetWidth: a.offsetWidth
        };
        c.push(d);
        return () => sb(c, d)
    }

    function QG(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id + (V(Mp) ? "_host" : ""));
        if (!a) return null;
        for (a = a.parentElement; a && !Er.test(a.className);) a = a.parentElement;
        return a
    }

    function RG(a, b) {
        for (let g = 0; g < a.childNodes.length; g++) {
            const h = {},
                k = a.childNodes[g];
            var c = k.style,
                d = h,
                e = ["width", "height"];
            for (let l = 0; l < e.length; l++) {
                const m = "google_ad_" + e[l];
                if (!d.hasOwnProperty(m)) {
                    var f = ch(c[e[l]]);
                    f = null === f ? null : Math.round(f);
                    null != f && (d[m] = f)
                }
            }
            if (h.google_ad_width == b.google_ad_width && h.google_ad_height == b.google_ad_height) return k
        }
        return null
    }

    function SG(a, b) {
        a.style.display = b ? "inline-block" : "none";
        const c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus, delete c.dataset.adStatus)
    }

    function TG(a, b) {
        const c = b.innerHeight >= b.innerWidth ? 1 : 2;
        if (a.l != c) {
            a.l = c;
            a = iD();
            for (const d of a)
                if (d.La.offsetWidth != d.offsetWidth || d.F.google_full_width_responsive_allowed) d.offsetWidth = d.La.offsetWidth, Sk(467, () => {
                    var e = d.La,
                        f = d.F;
                    const g = RG(e, f);
                    f.google_full_width_responsive_allowed && (e.style.marginLeft = f.gfwroml || "", e.style.marginRight = f.gfwromr || "", e.style.height = f.gfwroh ? f.gfwroh + "px" : "", e.style.width = f.gfwrow ? f.gfwrow + "px" : "", e.style.zIndex = f.gfwroz || "", delete f.google_full_width_responsive_allowed);
                    delete f.google_ad_format;
                    delete f.google_ad_width;
                    delete f.google_ad_height;
                    delete f.google_content_recommendation_ui_type;
                    delete f.google_content_recommendation_rows_num;
                    delete f.google_content_recommendation_columns_num;
                    b.google_spfd(e, f, b);
                    const h = RG(e, f);
                    !h && g && 1 == e.childNodes.length ? (SG(g, !1), f.google_reactive_ad_format = 16, f.google_ad_section = "responsive_resize", e.dataset.adsbygoogleStatus = "reserved", e.className += " adsbygoogle-noablate", CG(b), b.adsbygoogle.push({
                            element: e,
                            params: f
                        })) : h && g ? h !=
                        g && (SG(g, !1), SG(h, !0)) : Uk("auto_size_refresh", {
                            context: "showOrHideElm",
                            url: b.location.href,
                            nodes: e.childNodes.length
                        })
                })
        }
    }
    var UG = class extends Hk {
        constructor() {
            super(...arguments);
            this.l = null
        }
        init(a) {
            const b = YC();
            if (!cD(b, 27, !1)) {
                dD(b, 27, !0);
                this.l = a.innerHeight >= a.innerWidth ? 1 : 2;
                var c = () => TG(this, a);
                M(a, "resize", c);
                Ik(this, () => {
                    $d(a, "resize", c)
                })
            }
        }
    };
    var VG = class {
        constructor(a, b, c) {
            this.J = a;
            this.La = b;
            this.F = c;
            this.j = null;
            this.l = this.m = 0
        }
        v() {
            10 <= ++this.m && t.clearInterval(this.j);
            var a = Cr(this.J, this.La);
            a = Dr(this.J, this.La, a);
            const b = yr(this.La, this.J);
            null != b && 0 === b.x || t.clearInterval(this.j);
            a && (this.l++, Uk("rspv:al", {
                aligns: this.l,
                attempt: this.m,
                client: this.F.google_ad_client,
                eoffs: String(null != b ? b.x : null),
                eids: MF(this.F),
                slot: this.F.google_ad_slot,
                url: this.F.google_page_url
            }, .01))
        }
    };
    var Zi = {
        nk: 0,
        kk: 1,
        ik: 2,
        jk: 3,
        mk: 5,
        lk: 7
    };
    var WG = class {
        constructor(a) {
            this.J = a.J;
            this.pubWin = a.pubWin;
            this.F = a.F;
            this.ga = a.ga;
            this.ea = a.ea;
            this.Za = a.Za;
            this.X = a.X;
            this.A = -1;
            this.j = 0;
            this.l = this.H = null;
            this.G = this.D = 0;
            this.m = [];
            this.tb = this.C = "";
            this.v = this.B = null
        }
    };

    function XG(a, b) {
        var c = $D(a, Az(b));
        c = x(c, 2, b.tcString);
        c = x(c, 4, b.addtlConsent || "");
        x(c, 7, b.internalErrorState);
        c = !Cz(b);
        x(a, 9, c);
        null != b.gdprApplies && x(a, 3, b.gdprApplies)
    }

    function YG(a) {
        const b = new Iz(a.pubWin, {
            rg: -1,
            ef: !0
        });
        if (!Ez(b)) return Promise.resolve(null);
        const c = YC(),
            d = cD(c, 24);
        if (d) return Promise.resolve(d);
        const e = new Promise(f => {
            f = {
                resolve: f
            };
            const g = cD(c, 25, []);
            g.push(f);
            dD(c, 25, g)
        });
        d || null === d || (dD(c, 24, null), b.addEventListener(f => {
            if (zz(f)) {
                dD(c, 24, f);
                XG(a.l, f);
                for (const g of cD(c, 25, [])) g.resolve(f);
                dD(c, 25, [])
            } else dD(c, 24, null)
        }));
        return e
    };

    function ZG(a, b, c = 1E5) {
        a -= b;
        return a >= c ? "M" : 0 <= a ? a : "-M"
    };
    var aH = (a, b, c) => {
        const d = b.parentElement ? .classList.contains("adsbygoogle") ? b.parentElement : b;
        c.addEventListener("load", () => $G(d));
        return Yk(a, "adpnt", (e, f) => {
            if (Nl(f, c.contentWindow)) {
                e = Ql(e).qid;
                try {
                    c.setAttribute("data-google-query-id", e);
                    a.googletag ? ? (a.googletag = {
                        cmd: []
                    });
                    var g = a.googletag.queryIds ? ? [];
                    g.push(e);
                    500 < g.length && g.shift();
                    a.googletag.queryIds = g
                } catch {}
                d.dataset.adStatus && Uk("adsense_late_fill", {
                    status: d.dataset.adStatus
                });
                d.dataset.adStatus = "filled";
                g = !0
            } else g = !1;
            return g
        })
    };

    function $G(a) {
        setTimeout(() => {
            "filled" !== a.dataset.adStatus && (a.dataset.adStatus = "unfilled")
        }, 1E3)
    };

    function bH(a, b, c) {
        try {
            if (!ph(c.origin) || a.l && !Nl(c, a.l.contentWindow)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        "string" === typeof d && (e = a.Fa[d]) && a.L.Db(168, () => {
            e.call(a, b, c)
        })
    }
    class cH extends Hk {
        constructor(a, b) {
            var c = Qk,
                d = Pk;
            super();
            this.m = a;
            this.l = b;
            this.L = c;
            this.aa = d;
            this.Fa = {};
            this.Oe = this.L.ta(168, (e, f) => void bH(this, e, f));
            this.Qe = this.L.ta(169, (e, f) => Rl(this.m, "ras::xsf", this.aa, f));
            this.T = [];
            this.da(this.Fa);
            this.T.push(Xk(this.m, "sth", this.Oe, this.Qe))
        }
        j() {
            for (const a of this.T) a();
            this.T.length = 0;
            super.j()
        }
    };
    class dH extends cH {
        constructor(a, b = null) {
            super(a, b);
            this.m = a
        }
    };
    var eH = class extends dH {
        constructor(a, b) {
            super(a, b);
            this.v = () => {};
            this.l && M(this.l, "load", this.v)
        }
        j() {
            this.l && $d(this.l, "load", this.v);
            super.j();
            this.l = null
        }
        da(a) {
            a["adsense-labs"] = b => {
                if (b = Ql(b).settings) try {
                    var c = new Jf(JSON.parse(b));
                    if (null != w(c, 1)) {
                        var d = this.m,
                            e = w(c, 1) || "";
                        if (V(gp) ? null != dE({
                                win: d,
                                Zb: DF()
                            }).j : 1) {
                            if (V(gp)) {
                                const g = dE({
                                    win: d,
                                    Zb: DF()
                                });
                                var f = null != g.j ? EF(g.j.value) : {}
                            } else f = EF(d.localStorage);
                            null !== c && (f[e] = c.toJSON());
                            try {
                                d.localStorage.setItem("google_adsense_settings", JSON.stringify(f))
                            } catch (g) {}
                        }
                    }
                } catch (g) {}
            }
        }
    };

    function fH(a) {
        a.A = a.C;
        a.G.style.transition = "height 500ms";
        a.v.style.transition = "height 500ms";
        a.l.style.transition = "height 500ms";
        gH(a)
    }

    function hH(a, b) {
        a.l.contentWindow.postMessage(JSON.stringify({
            msg_type: "expand-on-scroll-result",
            eos_success: !0,
            eos_amount: b,
            googMsgType: "sth"
        }), "*")
    }

    function gH(a) {
        const b = `rect(0px, ${a.l.width}px, ${a.A}px, 0px)`;
        a.l.style.clip = b;
        a.v.style.clip = b;
        a.l.setAttribute("height", a.A);
        a.l.style.height = a.A + "px";
        a.v.setAttribute("height", a.A);
        a.v.style.height = a.A + "px";
        a.G.style.height = a.A + "px"
    }

    function iH(a, b) {
        b = ah(b.r_nh);
        a.C = null == b ? 0 : b;
        if (0 >= a.C) return "1";
        a.I = Wh(a.G).y;
        a.H = Ol(a.m);
        if (a.I + a.A < a.H) return "2";
        if (a.I > Jl(a.m) - a.m.innerHeight) return "3";
        b = a.H;
        a.l.setAttribute("height", a.C);
        a.l.style.height = a.C + "px";
        a.v.style.overflow = "hidden";
        a.G.style.position = "relative";
        a.G.style.transition = "height 100ms";
        a.v.style.transition = "height 100ms";
        a.l.style.transition = "height 100ms";
        b = Math.min(b + a.m.innerHeight - a.I, a.A);
        Qh(a.v, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.l.width}px, ${b}px, 0px)`;
        Qh(a.l, {
            clip: b
        });
        Qh(a.v, {
            clip: b
        });
        return "0"
    }

    function jH(a, b = {}) {
        a.N && (b.eid = a.N);
        b.qid = a.Hb;
        Uk("eoscrl", b, vl(String(a.Ib)))
    }
    class kH extends dH {
        constructor(a, b) {
            super(a.J, b);
            this.v = a.X;
            this.G = this.v.parentElement && this.v.parentElement.classList.contains("adsbygoogle") ? this.v.parentElement : this.v;
            this.A = parseInt(this.v.style.height, 10);
            this.N = null;
            this.Jb = this.Kb = !1;
            this.Hb = "";
            this.ua = this.H = this.C = 0;
            this.Pe = this.A / 5;
            this.I = Wh(this.G).y;
            this.Ib = null;
            this.Ne = Wd(Tk(651, () => {
                this.I = Wh(this.G).y;
                var c = this.H;
                this.H = Ol(this.m);
                this.A < this.C ? (c = this.H - c, 0 < c && (this.ua += c, this.ua >= this.Pe ? (fH(this), hH(this, this.C)) : (this.A = Math.min(this.C,
                    this.A + c), hH(this, c), gH(this)))) : $d(this.m, "scroll", this.K)
            }), this);
            this.K = () => {
                var c = this.Ne;
                $f.requestAnimationFrame ? $f.requestAnimationFrame(c) : c()
            }
        }
        da(a) {
            a["expand-on-scroll"] = (b, c) => {
                b = Ql(b);
                this.N = b.i_expid;
                this.Hb = b.qid;
                this.Ib = b.gen204_fraction;
                this.Kb || (this.Kb = !0, b = iH(this, b), "0" === b && M(this.m, "scroll", this.K, Xd), c.source.postMessage(JSON.stringify({
                    msg_type: "expand-on-scroll-result",
                    eos_success: "0" === b,
                    googMsgType: "sth"
                }), "*"), jH(this, {
                    err: b
                }))
            };
            a["expand-on-scroll-force-expand"] = () => {
                this.Jb ||
                    (this.Jb = !0, fH(this), $d(this.m, "scroll", this.K))
            }
        }
        j() {
            this.K && $d(this.m, "scroll", this.K, Xd);
            super.j()
        }
    };

    function lH(a) {
        const b = a.I.getBoundingClientRect(),
            c = 0 > b.top + b.height;
        return !(b.top > a.m.innerHeight) && !c
    }
    class mH extends Hk {
        constructor(a, b, c) {
            super();
            this.m = a;
            this.A = b;
            this.I = c;
            this.C = 0;
            this.v = lH(this);
            this.H = Vd(this.G, this);
            this.l = Tk(433, () => {
                var d = this.H;
                $f.requestAnimationFrame ? $f.requestAnimationFrame(d) : d()
            });
            M(this.m, "scroll", this.l, Xd)
        }
        G() {
            const a = lH(this);
            if (a && !this.v) {
                var b = {
                    rr: "vis-bcr"
                };
                const c = this.A.contentWindow;
                c && (Zk(c, "ig", b, "*", 2), 10 <= ++this.C && this.l && $d(this.m, "scroll", this.l, Xd))
            }
            this.v = a
        }
    };

    function nH(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function oH(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function pH(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };

    function qH(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return "string" === typeof c ? c : c.dd + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        Qh(a, "transition", b.join(","))
    }
    var rH = Td(function() {
        if (Fb) return !0;
        var a = zg(document, "DIV"),
            b = Kb ? "-webkit" : Jb ? "-moz" : Fb ? "-ms" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = Ze("div", {
            style: c
        });
        cg(a, b);
        a = a.firstChild;
        b = a.style[og("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[Rh(a, "transition")] || "")
    });

    function sH(a, b, c) {
        0 > a.l[b].indexOf(c) && (a.l[b] += c)
    }

    function tH(a, b) {
        0 <= a.j.indexOf(b) || (a.j = b + a.j)
    }

    function uH(a, b) {
        0 > a.m.indexOf(b) && (a.m = b + a.m)
    }

    function vH(a, b, c, d) {
        return "" != a.m || b ? null : "" == a.j.replace(wH, "") ? null != c && a.l[0] || null != d && a.l[1] ? !1 : !0 : !1
    }

    function xH(a) {
        var b = vH(a, "", null, 0);
        if (null === b) return "XS";
        b = b ? "C" : "N";
        a = a.j;
        return 0 <= a.indexOf("a") ? b + "A" : 0 <= a.indexOf("f") ? b + "F" : b + "S"
    }
    var yH = class {
        constructor(a, b) {
            this.l = ["", ""];
            this.j = a || "";
            this.m = b || ""
        }
        toString() {
            return [this.l[0], this.l[1], this.j, this.m].join("|")
        }
    };

    function zH(a) {
        let b = a.T;
        a.H = function() {};
        AH(a, a.D, b);
        let c = a.D.parentElement;
        if (!c) return a.j;
        let d = !0,
            e = null;
        for (; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : Sg(c, b)
            } catch (g) {
                uH(a.j, "c")
            }
            const f = BH(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.N = !0);
            if (d && !f && CH(e)) {
                tH(a.j, "l");
                a.I = c;
                break
            }
            d = d && f;
            if (e && DH(a, e)) break;
            c.parentNode && "#document-fragment" === c.parentNode.nodeName && c.parentNode.toString && "[object ShadowRoot]" ===
                c.parentNode.toString() ? c = c.parentNode.host : c = c.parentElement;
            if (!c) {
                if (b === a.Jb) break;
                try {
                    if (c = b.frameElement, b = b.parent, !Mg(b)) {
                        tH(a.j, "c");
                        break
                    }
                } catch (g) {
                    tH(a.j, "c");
                    break
                }
            }
        }
        a.G && a.v && EH(a);
        return a.j
    }

    function FH(a) {
        function b() {
            GH(c, f, g);
            if (h && !k && !g) {
                const l = function(m) {
                    for (let n = 0; n < m.length; n++) Qh(h, m[n], "0px")
                };
                l(HH);
                l(IH)
            }
        }
        const c = a.D;
        c.style.overflow = a.Ib ? "visible" : "hidden";
        a.G && (a.I ? (qH(c, JH), qH(a.I, JH)) : qH(c, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        null !== a.L && (c.style.opacity = a.L);
        const d = null != a.C && null != a.m && (a.ua || a.m > a.C) ? a.m : null,
            e = null != a.B && null != a.l && (a.ua || a.l > a.B) ? a.l : null;
        if (a.K) {
            const l = a.K.length;
            for (let m = 0; m < l; m++) GH(a.K[m], d, e)
        }
        const f = a.m,
            g = a.l,
            h = a.I,
            k = a.N;
        a.G ? t.setTimeout(b, 1E3) : b()
    }

    function KH(a) {
        if (a.v && !a.Hb || null == a.m && null == a.l && null == a.L && a.v) return a.j;
        var b = a.v;
        a.v = !1;
        zH(a);
        a.v = b;
        if (!b || null != a.da && !vH(a.j, a.da, a.m, a.l)) return a.j;
        0 <= a.j.j.indexOf("n") && (a.C = null, a.B = null);
        if (null == a.C && null !== a.m || null == a.B && null !== a.l) a.G = !1;
        (0 == a.m || 0 == a.l) && 0 <= a.j.j.indexOf("l") && (a.m = 0, a.l = 0);
        b = a.j;
        b.l[0] = "";
        b.l[1] = "";
        b.j = "";
        b.m = "";
        FH(a);
        return zH(a)
    }

    function DH(a, b) {
        let c = !1;
        "none" == b.display && (tH(a.j, "n"), a.v && (c = !0));
        "hidden" != b.visibility && "collapse" != b.visibility || tH(a.j, "v");
        "hidden" == b.overflow && tH(a.j, "o");
        "absolute" == b.position ? (tH(a.j, "a"), c = !0) : "fixed" == b.position && (tH(a.j, "f"), c = !0);
        return c
    }

    function AH(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement) return !0;
        let e = !1,
            f = 0;
        const g = b.parentElement.childNodes;
        for (let k = 0; k < g.length; k++) {
            var h = g[k];
            h == b ? e = !0 : (h = LH(a, h, c), d |= h, e && (f |= h))
        }
        f & 1 && (d & 2 && sH(a.j, 0, "o"), d & 4 && sH(a.j, 1, "o"));
        return !(d & 1)
    }

    function BH(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (A) {
            uH(a.j, "s")
        }
        var f = c.getAttribute("width"),
            g = ah(f),
            h = c.getAttribute("height"),
            k = ah(h),
            l = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        b = AH(a, c, b);
        var m = d && d.width;
        const n = d && d.height;
        var q = e && e.width,
            r = e && e.height,
            u = ch(m) == a.C && ch(n) == a.B;
        m = u ? m : q;
        r = u ? n : r;
        q = ch(m);
        u = ch(r);
        g = null !== a.C && (null !== q && a.C >= q || null !== g && a.C >= g);
        u = null !== a.B && (null !== u && a.B >= u || null !== k && a.B >= k);
        k = !b && CH(d);
        u = b || u || k || !(f || m || d && (!MH(String(d.minWidth)) || !NH(String(d.maxWidth))));
        l = b || g || k || l || !(h || r || d && (!MH(String(d.minHeight)) || !NH(String(d.maxHeight))));
        OH(a, 0, u, c, "width", f, a.C, a.m);
        PH(a, 0, "d", u, e, d, "width", m, a.C, a.m);
        PH(a, 0, "m", u, e, d, "minWidth", e && e.minWidth, a.C, a.m);
        PH(a, 0, "M", u, e, d, "maxWidth", e && e.maxWidth, a.C, a.m);
        a.Kb ? (c = /^html|body$/i.test(c.nodeName), f = ch(n), h = d ? "auto" === d.overflowY || "scroll" === d.overflowY : !1, h = null != a.l && d && f && Math.round(f) !== a.l && !h && "100%" !== d.minHeight, a.v && !c && h && (e.setProperty("height", "auto", "important"), d && !MH(String(d.minHeight)) && e.setProperty("min-height",
            "0px", "important"), d && !NH(String(d.maxHeight)) && a.l && Math.round(f) < a.l && e.setProperty("max-height", "none", "important"))) : (OH(a, 1, l, c, "height", h, a.B, a.l), PH(a, 1, "d", l, e, d, "height", r, a.B, a.l), PH(a, 1, "m", l, e, d, "minHeight", e && e.minHeight, a.B, a.l), PH(a, 1, "M", l, e, d, "maxHeight", e && e.maxHeight, a.B, a.l));
        return b
    }

    function EH(a) {
        function b() {
            if (0 < c) {
                var l = Sg(e, d) || {};
                const m = ch(l.width);
                l = ch(l.height);
                null !== m && null !== f && h && h(0, f - m);
                null !== l && null !== g && h && h(1, g - l);
                --c
            } else t.clearInterval(k), h && (h(0, 0), h(1, 0))
        }
        let c = 31.25;
        const d = a.T,
            e = a.D,
            f = a.m,
            g = a.l,
            h = a.H;
        let k;
        t.setTimeout(function() {
            k = t.setInterval(b, 16)
        }, 990)
    }

    function LH(a, b, c) {
        if (3 == b.nodeType) return /\S/.test(b.data) ? 1 : 0;
        if (1 == b.nodeType) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            let d = null;
            try {
                d = Sg(b, c)
            } catch (e) {}
            if (d) {
                if ("none" == d.display || "fixed" == d.position) return 0;
                if ("absolute" == d.position) {
                    if (!a.A.boundingClientRect || "hidden" == d.visibility || "collapse" == d.visibility) return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.A.boundingClientRect.left ? 2 : 0) | (c.bottom > a.A.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function OH(a, b, c, d, e, f, g, h) {
        if (null != h) {
            if ("string" == typeof f) {
                if ("100%" == f || !f) return;
                f = ah(f);
                null == f && (uH(a.j, "n"), sH(a.j, b, "d"))
            }
            if (null != f)
                if (c) {
                    if (a.v)
                        if (a.G) {
                            const k = Math.max(f + h - (g || 0), 0),
                                l = a.H;
                            a.H = function(m, n) {
                                m == b && d.setAttribute(e, k - n);
                                l && l(m, n)
                            }
                        } else d.setAttribute(e, h)
                } else sH(a.j, b, "d")
        }
    }

    function PH(a, b, c, d, e, f, g, h, k, l) {
        if (null != l) {
            f = f && f[g];
            "string" != typeof f || ("m" == c ? MH(f) : NH(f)) || (f = ch(f), null == f ? tH(a.j, "p") : null != k && tH(a.j, f == k ? "E" : "e"));
            if ("string" == typeof h) {
                if ("m" == c ? MH(h) : NH(h)) return;
                h = ch(h);
                null == h && (uH(a.j, "p"), sH(a.j, b, c))
            }
            if (null != h)
                if (d && e) {
                    if (a.v)
                        if (a.G) {
                            const m = Math.max(h + l - (k || 0), 0),
                                n = a.H;
                            a.H = function(q, r) {
                                q == b && (e[g] = m - r + "px");
                                n && n(q, r)
                            }
                        } else e[g] = l + "px"
                } else sH(a.j, b, c)
        }
    }
    var UH = class {
        constructor(a, b, c, d, e, f, g) {
            this.Jb = a;
            this.K = c;
            this.D = b;
            this.T = (a = this.D.ownerDocument) && (a.defaultView || a.parentWindow);
            this.A = new QH(this.D);
            this.v = g;
            this.Hb = RH(this.A, d.rd, d.height, d.Ce);
            this.C = this.v ? this.A.boundingClientRect ? this.A.boundingClientRect.right - this.A.boundingClientRect.left : null : e;
            this.B = this.v ? this.A.boundingClientRect ? this.A.boundingClientRect.bottom - this.A.boundingClientRect.top : null : f;
            this.m = SH(d.width);
            this.l = SH(d.height);
            this.L = this.v ? SH(d.opacity) : null;
            this.da =
                d.check;
            this.G = "animate" == d.rd && !TH(this.A, this.l, this.Fa) && rH();
            this.Ib = !!d.Bd;
            this.j = new yH;
            TH(this.A, this.l, this.Fa) && tH(this.j, "r");
            e = this.A;
            e.j && e.l >= e.m && tH(this.j, "b");
            this.I = this.H = null;
            this.N = !1;
            this.ua = !!d.fg;
            this.Kb = !!d.hg;
            this.Fa = !!d.Ce
        }
    };

    function TH(a, b, c) {
        var d;
        (d = a.j) && !(d = !a.v) && (c ? (b = a.l + Math.min(b, SH(a.getHeight())), a = a.j && b >= a.m) : a = a.j && a.l >= a.m, d = a);
        return d
    }
    var QH = class {
        constructor(a) {
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow);
            c = c && Pg(c);
            this.j = !!c;
            this.boundingClientRect = null;
            if (a) try {
                this.boundingClientRect = a.getBoundingClientRect()
            } catch (g) {}
            var d = a;
            let e = 0,
                f = this.boundingClientRect;
            for (; d;) try {
                f && (e += f.top);
                const g = d.ownerDocument,
                    h = g && (g.defaultView || g.parentWindow);
                (d = h && h.frameElement) && (f = d.getBoundingClientRect())
            } catch (g) {
                break
            }
            this.l = e;
            c = c || t;
            this.m = ("CSS1Compat" == c.document.compatMode ? c.document.documentElement : c.document.body).clientHeight;
            b = b && nH(b);
            this.v = !!a && !(2 == b || 3 == b) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.v
        }
        getWidth() {
            return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
        }
        getHeight() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    };

    function RH(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return TH(a, c, d)
        }
    }

    function CH(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }

    function VH(a, b, c, d) {
        return KH(new UH(a, b, d, c, null, null, !0))
    }
    var WH = new yH("s", ""),
        wH = RegExp("[lonvafrbpEe]", "g");

    function NH(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function MH(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function GH(a, b, c) {
        null !== b && null !== ah(a.getAttribute("width")) && a.setAttribute("width", b);
        null !== c && null !== ah(a.getAttribute("height")) && a.setAttribute("height", c);
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    }
    var HH = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),
        IH = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");
    let XH = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
        YH = HH;
    for (let a = 0; a < YH.length; a++) XH += ", " + YH[a] + " .2s cubic-bezier(.4, 0, 1, 1)";
    YH = IH;
    for (let a = 0; a < YH.length; a++) XH += ", " + YH[a] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
    var JH = XH;

    function SH(a) {
        return "string" === typeof a ? ah(a) : "number" === typeof a && isFinite(a) ? a : null
    };

    function ZH(a, b, c) {
        const d = {
            scrl: Ol(a.m || window),
            adk: a.C,
            adf: a.A,
            fmt: a.v
        };
        b && (d.str = TH(b, ah(c.r_nh), bh(c.r_cab)), d.ad_y = b.l, d.vph = b.m);
        Ug(c, (e, f) => {
            d[f] = e
        });
        return d
    }

    function $H(a, b, c) {
        const d = vl(String(b.gen204_fraction));
        b = ZH(a, c, b);
        b.url = a.m.document.URL;
        Uk("resize", b, d)
    }
    var aI = class extends dH {
        constructor(a, b, c) {
            super(a, b);
            this.C = String(c.google_ad_unit_key || "");
            this.A = String(c.google_ad_dom_fingerprint || "");
            this.v = String(c.google_ad_format || "")
        }
        da(a) {
            a["resize-me"] = (b, c) => {
                b = Ql(b);
                var d = b.r_chk;
                if (null == d || "" === d) {
                    var e = ah(b.r_nw),
                        f = ah(b.r_nh),
                        g = ah(b.r_no);
                    null != g || 0 !== e && 0 !== f || (g = 0);
                    var h = b.r_str;
                    h = h ? h : null; {
                        var k = g,
                            l = bh(b.r_ao),
                            m = bh(b.r_ifr),
                            n = bh(b.r_cab);
                        const r = window;
                        if (this.l && r)
                            if ("no_rsz" === h) b.err = "7", $H(this, b, null), f = !0;
                            else if (g = new QH(this.l), g.j) {
                            var q =
                                g.getWidth();
                            null != q && (b.w = q);
                            q = g.getHeight();
                            null != q && (b.h = q);
                            if (RH(g, h, f, n)) {
                                const u = this.l.ownerDocument.getElementById(this.l.id + "_host");
                                q = u || this.l;
                                d = VH(r, q, {
                                    width: e,
                                    height: f,
                                    opacity: k,
                                    check: d,
                                    rd: h,
                                    Bd: l,
                                    fg: m,
                                    Ce: n
                                }, u ? [this.l] : null);
                                b.r_cui && bh(b.r_cui.toString()) && N(q, {
                                    height: (null === f ? 0 : f - 48) + "px",
                                    top: "24px"
                                });
                                null != e && (b.nw = e);
                                null != f && (b.nh = f);
                                b.rsz = d.toString();
                                b.abl = xH(d);
                                b.frsz = ("force" === h).toString();
                                b.err = "0";
                                $H(this, b, g);
                                f = !0
                            } else b.err = "1", $H(this, b, g), f = !1
                        } else b.err = "3", $H(this,
                            b, null), f = !1;
                        else b.err = "2", $H(this, b, null), f = !1
                    }
                    e = {
                        msg_type: "resize-result"
                    };
                    e.r_str = h;
                    e.r_status = f;
                    c = c.source;
                    e.googMsgType = "sth";
                    c.postMessage(JSON.stringify(e), "*");
                    this.l.dataset.googleQueryId || this.l.setAttribute("data-google-query-id", b.qid)
                }
            }
        }
        j() {
            super.j();
            this.l = null
        }
    };
    const bI = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };
    const cI = /^blogger$/,
        dI = /^wordpress(.|\s|$)/i,
        eI = /^joomla!/i,
        fI = /^drupal/i,
        gI = /\/wp-content\//,
        hI = /\/wp-content\/plugins\/advanced-ads/,
        iI = /\/wp-content\/themes\/genesis/,
        jI = /\/wp-content\/plugins\/genesis/;

    function kI(a) {
        var b = a.getElementsByTagName("script"),
            c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src") || "";
                if (hI.test(e)) return 5;
                if (jI.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href") || "", iI.test(e) || jI.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if ("generator" == f.getAttribute("name") && f.hasAttribute("content")) {
                f = f.getAttribute("content") ||
                    "";
                if (cI.test(f)) return 1;
                if (dI.test(f)) return 2;
                if (eI.test(f)) return 3;
                if (fI.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], "stylesheet" == d.getAttribute("rel") && d.hasAttribute("href") && (d = d.getAttribute("href") || "", gI.test(d))) return 2;
        return 0
    };
    let lI = navigator;
    var mI = a => {
            let b = 1;
            let c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        nI = (a, b) => {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return mI(a.toLowerCase())
        };
    const oI = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        pI = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        qI = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var rI = () => {
        const a = new tr;
        t.SVGElement && t.document.createElementNS && a.set(0);
        const b = hh();
        b["allow-top-navigation-by-user-activation"] && a.set(1);
        b["allow-popups-to-escape-sandbox"] && a.set(2);
        t.crypto && t.crypto.subtle && a.set(3);
        t.TextDecoder && t.TextEncoder && a.set(4);
        return sr(a)
    };
    var sI = new Map([
        [".google.com", a => O `https://adservice.google.com/adsid/integrator.${a}`],
        [".google.ad", a => O `https://adservice.google.ad/adsid/integrator.${a}`],
        [".google.ae", a => O `https://adservice.google.ae/adsid/integrator.${a}`],
        [".google.com.af", a => O `https://adservice.google.com.af/adsid/integrator.${a}`],
        [".google.com.ag", a => O `https://adservice.google.com.ag/adsid/integrator.${a}`],
        [".google.com.ai", a => O `https://adservice.google.com.ai/adsid/integrator.${a}`],
        [".google.al", a => O `https://adservice.google.al/adsid/integrator.${a}`],
        [".google.co.ao", a => O `https://adservice.google.co.ao/adsid/integrator.${a}`],
        [".google.com.ar", a => O `https://adservice.google.com.ar/adsid/integrator.${a}`],
        [".google.as", a => O `https://adservice.google.as/adsid/integrator.${a}`],
        [".google.at", a => O `https://adservice.google.at/adsid/integrator.${a}`],
        [".google.com.au", a => O `https://adservice.google.com.au/adsid/integrator.${a}`],
        [".google.az", a => O `https://adservice.google.az/adsid/integrator.${a}`],
        [".google.com.bd", a => O `https://adservice.google.com.bd/adsid/integrator.${a}`],
        [".google.be", a => O `https://adservice.google.be/adsid/integrator.${a}`],
        [".google.bf", a => O `https://adservice.google.bf/adsid/integrator.${a}`],
        [".google.bg", a => O `https://adservice.google.bg/adsid/integrator.${a}`],
        [".google.com.bh", a => O `https://adservice.google.com.bh/adsid/integrator.${a}`],
        [".google.bi", a => O `https://adservice.google.bi/adsid/integrator.${a}`],
        [".google.bj", a => O `https://adservice.google.bj/adsid/integrator.${a}`],
        [".google.com.bn", a => O `https://adservice.google.com.bn/adsid/integrator.${a}`],
        [".google.com.bo", a => O `https://adservice.google.com.bo/adsid/integrator.${a}`],
        [".google.com.br", a => O `https://adservice.google.com.br/adsid/integrator.${a}`],
        [".google.bs", a => O `https://adservice.google.bs/adsid/integrator.${a}`],
        [".google.bt", a => O `https://adservice.google.bt/adsid/integrator.${a}`],
        [".google.co.bw", a => O `https://adservice.google.co.bw/adsid/integrator.${a}`],
        [".google.com.bz", a => O `https://adservice.google.com.bz/adsid/integrator.${a}`],
        [".google.ca", a => O `https://adservice.google.ca/adsid/integrator.${a}`],
        [".google.cd", a => O `https://adservice.google.cd/adsid/integrator.${a}`],
        [".google.cf", a => O `https://adservice.google.cf/adsid/integrator.${a}`],
        [".google.cg", a => O `https://adservice.google.cg/adsid/integrator.${a}`],
        [".google.ch", a => O `https://adservice.google.ch/adsid/integrator.${a}`],
        [".google.ci", a => O `https://adservice.google.ci/adsid/integrator.${a}`],
        [".google.co.ck", a => O `https://adservice.google.co.ck/adsid/integrator.${a}`],
        [".google.cl", a => O `https://adservice.google.cl/adsid/integrator.${a}`],
        [".google.cm", a => O `https://adservice.google.cm/adsid/integrator.${a}`],
        [".google.com.co", a => O `https://adservice.google.com.co/adsid/integrator.${a}`],
        [".google.co.cr", a => O `https://adservice.google.co.cr/adsid/integrator.${a}`],
        [".google.com.cu", a => O `https://adservice.google.com.cu/adsid/integrator.${a}`],
        [".google.cv", a => O `https://adservice.google.cv/adsid/integrator.${a}`],
        [".google.com.cy", a => O `https://adservice.google.com.cy/adsid/integrator.${a}`],
        [".google.cz", a => O `https://adservice.google.cz/adsid/integrator.${a}`],
        [".google.de", a => O `https://adservice.google.de/adsid/integrator.${a}`],
        [".google.dj", a => O `https://adservice.google.dj/adsid/integrator.${a}`],
        [".google.dk", a => O `https://adservice.google.dk/adsid/integrator.${a}`],
        [".google.dm", a => O `https://adservice.google.dm/adsid/integrator.${a}`],
        [".google.dz", a => O `https://adservice.google.dz/adsid/integrator.${a}`],
        [".google.com.ec", a => O `https://adservice.google.com.ec/adsid/integrator.${a}`],
        [".google.ee", a => O `https://adservice.google.ee/adsid/integrator.${a}`],
        [".google.com.eg", a => O `https://adservice.google.com.eg/adsid/integrator.${a}`],
        [".google.es", a => O `https://adservice.google.es/adsid/integrator.${a}`],
        [".google.com.et", a => O `https://adservice.google.com.et/adsid/integrator.${a}`],
        [".google.fi", a => O `https://adservice.google.fi/adsid/integrator.${a}`],
        [".google.com.fj", a => O `https://adservice.google.com.fj/adsid/integrator.${a}`],
        [".google.fm", a => O `https://adservice.google.fm/adsid/integrator.${a}`],
        [".google.fr", a => O `https://adservice.google.fr/adsid/integrator.${a}`],
        [".google.ga", a => O `https://adservice.google.ga/adsid/integrator.${a}`],
        [".google.ge", a => O `https://adservice.google.ge/adsid/integrator.${a}`],
        [".google.gg", a => O `https://adservice.google.gg/adsid/integrator.${a}`],
        [".google.com.gh", a => O `https://adservice.google.com.gh/adsid/integrator.${a}`],
        [".google.com.gi", a => O `https://adservice.google.com.gi/adsid/integrator.${a}`],
        [".google.gl", a => O `https://adservice.google.gl/adsid/integrator.${a}`],
        [".google.gm", a => O `https://adservice.google.gm/adsid/integrator.${a}`],
        [".google.gr", a => O `https://adservice.google.gr/adsid/integrator.${a}`],
        [".google.com.gt", a => O `https://adservice.google.com.gt/adsid/integrator.${a}`],
        [".google.gy", a => O `https://adservice.google.gy/adsid/integrator.${a}`],
        [".google.com.hk", a => O `https://adservice.google.com.hk/adsid/integrator.${a}`],
        [".google.hn", a => O `https://adservice.google.hn/adsid/integrator.${a}`],
        [".google.hr", a => O `https://adservice.google.hr/adsid/integrator.${a}`],
        [".google.ht", a => O `https://adservice.google.ht/adsid/integrator.${a}`],
        [".google.hu", a => O `https://adservice.google.hu/adsid/integrator.${a}`],
        [".google.co.id", a => O `https://adservice.google.co.id/adsid/integrator.${a}`],
        [".google.ie", a => O `https://adservice.google.ie/adsid/integrator.${a}`],
        [".google.co.il", a => O `https://adservice.google.co.il/adsid/integrator.${a}`],
        [".google.im", a => O `https://adservice.google.im/adsid/integrator.${a}`],
        [".google.co.in", a => O `https://adservice.google.co.in/adsid/integrator.${a}`],
        [".google.iq", a => O `https://adservice.google.iq/adsid/integrator.${a}`],
        [".google.is", a => O `https://adservice.google.is/adsid/integrator.${a}`],
        [".google.it", a => O `https://adservice.google.it/adsid/integrator.${a}`],
        [".google.je", a => O `https://adservice.google.je/adsid/integrator.${a}`],
        [".google.com.jm", a => O `https://adservice.google.com.jm/adsid/integrator.${a}`],
        [".google.jo", a => O `https://adservice.google.jo/adsid/integrator.${a}`],
        [".google.co.jp", a => O `https://adservice.google.co.jp/adsid/integrator.${a}`],
        [".google.co.ke", a => O `https://adservice.google.co.ke/adsid/integrator.${a}`],
        [".google.com.kh", a => O `https://adservice.google.com.kh/adsid/integrator.${a}`],
        [".google.ki", a => O `https://adservice.google.ki/adsid/integrator.${a}`],
        [".google.kg", a => O `https://adservice.google.kg/adsid/integrator.${a}`],
        [".google.co.kr", a => O `https://adservice.google.co.kr/adsid/integrator.${a}`],
        [".google.com.kw", a => O `https://adservice.google.com.kw/adsid/integrator.${a}`],
        [".google.kz", a => O `https://adservice.google.kz/adsid/integrator.${a}`],
        [".google.la", a => O `https://adservice.google.la/adsid/integrator.${a}`],
        [".google.com.lb", a => O `https://adservice.google.com.lb/adsid/integrator.${a}`],
        [".google.li", a => O `https://adservice.google.li/adsid/integrator.${a}`],
        [".google.lk", a => O `https://adservice.google.lk/adsid/integrator.${a}`],
        [".google.co.ls", a => O `https://adservice.google.co.ls/adsid/integrator.${a}`],
        [".google.lt", a => O `https://adservice.google.lt/adsid/integrator.${a}`],
        [".google.lu", a => O `https://adservice.google.lu/adsid/integrator.${a}`],
        [".google.lv", a => O `https://adservice.google.lv/adsid/integrator.${a}`],
        [".google.com.ly", a => O `https://adservice.google.com.ly/adsid/integrator.${a}`],
        [".google.md", a => O `https://adservice.google.md/adsid/integrator.${a}`],
        [".google.me", a => O `https://adservice.google.me/adsid/integrator.${a}`],
        [".google.mg", a => O `https://adservice.google.mg/adsid/integrator.${a}`],
        [".google.mk", a => O `https://adservice.google.mk/adsid/integrator.${a}`],
        [".google.ml", a => O `https://adservice.google.ml/adsid/integrator.${a}`],
        [".google.com.mm", a => O `https://adservice.google.com.mm/adsid/integrator.${a}`],
        [".google.mn", a => O `https://adservice.google.mn/adsid/integrator.${a}`],
        [".google.ms", a => O `https://adservice.google.ms/adsid/integrator.${a}`],
        [".google.com.mt", a => O `https://adservice.google.com.mt/adsid/integrator.${a}`],
        [".google.mu", a => O `https://adservice.google.mu/adsid/integrator.${a}`],
        [".google.mv", a => O `https://adservice.google.mv/adsid/integrator.${a}`],
        [".google.mw", a => O `https://adservice.google.mw/adsid/integrator.${a}`],
        [".google.com.mx", a => O `https://adservice.google.com.mx/adsid/integrator.${a}`],
        [".google.com.my", a => O `https://adservice.google.com.my/adsid/integrator.${a}`],
        [".google.co.mz", a => O `https://adservice.google.co.mz/adsid/integrator.${a}`],
        [".google.com.na", a => O `https://adservice.google.com.na/adsid/integrator.${a}`],
        [".google.com.ng", a => O `https://adservice.google.com.ng/adsid/integrator.${a}`],
        [".google.com.ni", a => O `https://adservice.google.com.ni/adsid/integrator.${a}`],
        [".google.ne", a => O `https://adservice.google.ne/adsid/integrator.${a}`],
        [".google.nl", a => O `https://adservice.google.nl/adsid/integrator.${a}`],
        [".google.no", a => O `https://adservice.google.no/adsid/integrator.${a}`],
        [".google.com.np", a => O `https://adservice.google.com.np/adsid/integrator.${a}`],
        [".google.nr", a => O `https://adservice.google.nr/adsid/integrator.${a}`],
        [".google.nu", a => O `https://adservice.google.nu/adsid/integrator.${a}`],
        [".google.co.nz", a => O `https://adservice.google.co.nz/adsid/integrator.${a}`],
        [".google.com.om", a => O `https://adservice.google.com.om/adsid/integrator.${a}`],
        [".google.com.pa", a => O `https://adservice.google.com.pa/adsid/integrator.${a}`],
        [".google.com.pe", a => O `https://adservice.google.com.pe/adsid/integrator.${a}`],
        [".google.com.pg", a => O `https://adservice.google.com.pg/adsid/integrator.${a}`],
        [".google.com.ph", a => O `https://adservice.google.com.ph/adsid/integrator.${a}`],
        [".google.com.pk", a => O `https://adservice.google.com.pk/adsid/integrator.${a}`],
        [".google.pl", a => O `https://adservice.google.pl/adsid/integrator.${a}`],
        [".google.pn", a => O `https://adservice.google.pn/adsid/integrator.${a}`],
        [".google.com.pr", a => O `https://adservice.google.com.pr/adsid/integrator.${a}`],
        [".google.ps", a => O `https://adservice.google.ps/adsid/integrator.${a}`],
        [".google.pt", a => O `https://adservice.google.pt/adsid/integrator.${a}`],
        [".google.com.py", a => O `https://adservice.google.com.py/adsid/integrator.${a}`],
        [".google.com.qa", a => O `https://adservice.google.com.qa/adsid/integrator.${a}`],
        [".google.ro", a => O `https://adservice.google.ro/adsid/integrator.${a}`],
        [".google.rw", a => O `https://adservice.google.rw/adsid/integrator.${a}`],
        [".google.com.sa", a => O `https://adservice.google.com.sa/adsid/integrator.${a}`],
        [".google.com.sb", a => O `https://adservice.google.com.sb/adsid/integrator.${a}`],
        [".google.sc", a => O `https://adservice.google.sc/adsid/integrator.${a}`],
        [".google.se", a => O `https://adservice.google.se/adsid/integrator.${a}`],
        [".google.com.sg", a => O `https://adservice.google.com.sg/adsid/integrator.${a}`],
        [".google.sh", a => O `https://adservice.google.sh/adsid/integrator.${a}`],
        [".google.si", a => O `https://adservice.google.si/adsid/integrator.${a}`],
        [".google.sk", a => O `https://adservice.google.sk/adsid/integrator.${a}`],
        [".google.sn", a => O `https://adservice.google.sn/adsid/integrator.${a}`],
        [".google.so", a => O `https://adservice.google.so/adsid/integrator.${a}`],
        [".google.sm", a => O `https://adservice.google.sm/adsid/integrator.${a}`],
        [".google.sr", a => O `https://adservice.google.sr/adsid/integrator.${a}`],
        [".google.st", a => O `https://adservice.google.st/adsid/integrator.${a}`],
        [".google.com.sv", a => O `https://adservice.google.com.sv/adsid/integrator.${a}`],
        [".google.td", a => O `https://adservice.google.td/adsid/integrator.${a}`],
        [".google.tg", a => O `https://adservice.google.tg/adsid/integrator.${a}`],
        [".google.co.th", a => O `https://adservice.google.co.th/adsid/integrator.${a}`],
        [".google.com.tj", a => O `https://adservice.google.com.tj/adsid/integrator.${a}`],
        [".google.tl", a => O `https://adservice.google.tl/adsid/integrator.${a}`],
        [".google.tm", a => O `https://adservice.google.tm/adsid/integrator.${a}`],
        [".google.tn", a => O `https://adservice.google.tn/adsid/integrator.${a}`],
        [".google.to", a => O `https://adservice.google.to/adsid/integrator.${a}`],
        [".google.com.tr", a => O `https://adservice.google.com.tr/adsid/integrator.${a}`],
        [".google.tt", a => O `https://adservice.google.tt/adsid/integrator.${a}`],
        [".google.com.tw", a => O `https://adservice.google.com.tw/adsid/integrator.${a}`],
        [".google.co.tz", a => O `https://adservice.google.co.tz/adsid/integrator.${a}`],
        [".google.com.ua", a => O `https://adservice.google.com.ua/adsid/integrator.${a}`],
        [".google.co.ug", a => O `https://adservice.google.co.ug/adsid/integrator.${a}`],
        [".google.co.uk", a => O `https://adservice.google.co.uk/adsid/integrator.${a}`],
        [".google.com.uy", a => O `https://adservice.google.com.uy/adsid/integrator.${a}`],
        [".google.co.uz", a => O `https://adservice.google.co.uz/adsid/integrator.${a}`],
        [".google.com.vc", a => O `https://adservice.google.com.vc/adsid/integrator.${a}`],
        [".google.co.ve", a => O `https://adservice.google.co.ve/adsid/integrator.${a}`],
        [".google.vg", a => O `https://adservice.google.vg/adsid/integrator.${a}`],
        [".google.co.vi", a => O `https://adservice.google.co.vi/adsid/integrator.${a}`],
        [".google.com.vn", a => O `https://adservice.google.com.vn/adsid/integrator.${a}`],
        [".google.vu", a => O `https://adservice.google.vu/adsid/integrator.${a}`],
        [".google.ws", a => O `https://adservice.google.ws/adsid/integrator.${a}`],
        [".google.rs", a => O `https://adservice.google.rs/adsid/integrator.${a}`],
        [".google.co.za", a => O `https://adservice.google.co.za/adsid/integrator.${a}`],
        [".google.co.zm", a => O `https://adservice.google.co.zm/adsid/integrator.${a}`],
        [".google.co.zw", a => O `https://adservice.google.co.zw/adsid/integrator.${a}`],
        [".google.cat", a => O `https://adservice.google.cat/adsid/integrator.${a}`]
    ].map(([a,
        b
    ]) => [a, {
        json: b("json"),
        js: b("js"),
        ["sync.js"]: b("sync.js")
    }]));

    function tI(a, b, c) {
        const d = Rg("LINK", a);
        try {
            if (d.rel = "preload", $a("preload", "stylesheet")) {
                d.href = se(b).toString();
                const k = eg('style[nonce],link[rel="stylesheet"][nonce]', d.ownerDocument && d.ownerDocument.defaultView);
                k && d.setAttribute("nonce", k)
            } else {
                if (b instanceof pe) var e = se(b).toString();
                else {
                    if (b instanceof ze) var f = Ae(b);
                    else {
                        if (b instanceof ze) var g = b;
                        else {
                            b = "object" == typeof b && b.ra ? b.ka() : String(b);
                            b: {
                                let k;
                                try {
                                    k = new URL(b)
                                } catch (l) {
                                    var h = "https:";
                                    break b
                                }
                                h = k.protocol
                            }
                            "javascript:" === h && (b =
                                "about:invalid#zClosurez");
                            g = new ze(b, ye)
                        }
                        f = Ae(g)
                    }
                    e = f
                }
                d.href = e
            }
        } catch {
            return
        }
        d.as = "script";
        c && d.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(d)
        } catch {}
    };
    let uI = t;
    const wI = a => {
        const b = new Map([
            ["domain", t.location.hostname]
        ]);
        vI[3] >= Da() && b.set("adsid", vI[1]);
        return Nh(sI.get(a).js, b)
    };
    let vI, xI;
    const yI = () => {
        uI = t;
        vI = uI.googleToken = uI.googleToken || {};
        const a = Da();
        vI[1] && vI[3] > a && 0 < vI[2] || (vI[1] = "", vI[2] = -1, vI[3] = -1, vI[4] = "", vI[6] = "");
        xI = uI.googleIMState = uI.googleIMState || {};
        sI.has(xI[1]) || (xI[1] = ".google.com");
        Array.isArray(xI[5]) || (xI[5] = []);
        "boolean" !== typeof xI[6] && (xI[6] = !1);
        Array.isArray(xI[7]) || (xI[7] = []);
        "number" !== typeof xI[8] && (xI[8] = 0)
    };
    var zI = a => {
        yI();
        sI.has(a) && (xI[1] = a)
    };
    const AI = {
        Nc: () => 0 < xI[8],
        cg: () => {
            xI[8]++
        },
        dg: () => {
            0 < xI[8] && xI[8]--
        },
        eg: () => {
            xI[8] = 0
        },
        Fk: () => !1,
        Ud: () => xI[5],
        Gd: a => {
            try {
                a()
            } catch (b) {
                t.setTimeout(() => {
                    throw b;
                }, 0)
            }
        },
        ye: () => {
            if (!AI.Nc()) {
                var a = t.document,
                    b = e => {
                        e = wI(e);
                        a: {
                            try {
                                var f = eg("script[nonce]");
                                break a
                            } catch {}
                            f = void 0
                        }
                        tI(a, e.toString(), f);
                        f = Rg("SCRIPT", a);
                        f.type = "text/javascript";
                        f.onerror = () => t.processGoogleToken({}, 2);
                        rf(f, e);
                        try {
                            (a.head || a.body || a.documentElement).appendChild(f), AI.cg()
                        } catch (g) {}
                    },
                    c = xI[1];
                b(c);
                ".google.com" != c && b(".google.com");
                var d = {
                    newToken: "FBT"
                };
                t.setTimeout(() => t.processGoogleToken(d, 1), 1E3)
            }
        }
    };

    function BI(a) {
        yI();
        const b = uI.googleToken[5] || 0;
        a && (0 != b || vI[3] >= Da() ? AI.Gd(a) : (AI.Ud().push(a), AI.ye()));
        vI[3] >= Da() && vI[2] >= Da() || AI.ye()
    }
    var DI = a => {
        t.processGoogleToken = t.processGoogleToken || ((b, c) => CI(b, c));
        BI(a)
    };
    const CI = (a = {}, b = 0) => {
        var c = a.newToken || "",
            d = "NT" == c,
            e = parseInt(a.freshLifetimeSecs || "", 10),
            f = parseInt(a.validLifetimeSecs || "", 10);
        const g = a["1p_jar"] || "";
        a = a.pucrd || "";
        yI();
        1 == b ? AI.eg() : AI.dg();
        var h = uI.googleToken = uI.googleToken || {},
            k = 0 == b && c && "string" === typeof c && !d && "number" === typeof e && 0 < e && "number" === typeof f && 0 < f && "string" === typeof g;
        d = d && !AI.Nc() && (!(vI[3] >= Da()) || "NT" == vI[1]);
        var l = !(vI[3] >= Da()) && 0 != b;
        if (k || d || l) d = Da(), e = d + 1E3 * e, f = d + 1E3 * f, 1E-5 > Math.random() && ti(t, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr" +
            `&err=${b}`), h[5] = b, h[1] = c, h[2] = e, h[3] = f, h[4] = g, h[6] = a, yI();
        if (k || !AI.Nc()) {
            b = AI.Ud();
            for (c = 0; c < b.length; c++) AI.Gd(b[c]);
            b.length = 0
        }
    };
    const EI = new Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        FI = new Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);

    function GI(a) {
        try {
            const b = a.performance ? .getEntriesByType("navigation") ? .[0];
            if (b ? .type) return EI.get(b.type) ? ? null
        } catch {}
        return FI.get(a.performance ? .navigation ? .type) ? ? null
    };

    function HI(a, b) {
        if (ib()) {
            var c = a.document.documentElement.lang;
            II(a) ? JI(b, sh(a), !0, "", c) : (new MutationObserver((d, e) => {
                II(a) && (JI(b, sh(a), !1, c, a.document.documentElement.lang), e.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    }

    function II(a) {
        a = a.document ? .documentElement ? .classList;
        return !(!a ? .contains("translated-rtl") && !a ? .contains("translated-ltr"))
    }

    function JI(a, b, c, d, e) {
        wi({
            ptt: `${a}`,
            pvsid: `${b}`,
            ibatl: String(c),
            pl: d,
            nl: e
        }, "translate-event")
    };
    var KI = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r"
        },
        LI = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s"
        };

    function MI() {
        const a = window.navigator.userAgent,
            b = /Chrome/.test(a);
        return /Android/.test(a) && b
    }

    function NI(a = window) {
        return !a.PeriodicSyncManager
    }

    function OI(a, b, c) {
        a = a.goog_tt_state_map;
        let d, e = [];
        b && (d = a ? .get(KI.issuerOrigin)) && e.push(d);
        c && (d = a ? .get(LI.issuerOrigin)) && e.push(d);
        return e
    }

    function PI(a) {
        return V(ar) ? !0 : a.some(b => b.hasRedemptionRecord)
    }

    function QI(a, b, c) {
        return b || ".google.ch" === c || "function" === typeof a.__tcfapi
    }

    function RI(a, b) {
        a = V(ar) ? a.filter(c => 12 !== c.state).map(c => c.issuerOrigin) : a.filter(c => c.hasRedemptionRecord).map(c => c.issuerOrigin);
        if (0 == a.length) return null;
        a = {
            type: "send-redemption-record",
            issuers: a,
            refreshPolicy: "none",
            signRequestData: V(ar) ? "omit" : "include",
            includeTimestampHeader: !0,
            additionalSignedHeaders: ["sec-time", "Sec-Redemption-Record"]
        };
        !V(ar) && b && 0 < Object.keys(b).length && (a.additionalSigningData = Yb(JSON.stringify(b)));
        return a
    }

    function SI(a, b, c) {
        if (a = window.goog_tt_state_map ? .get(a)) a.state = b, void 0 != c && (a.hasRedemptionRecord = c)
    }

    function TI() {
        const a = `${KI.issuerOrigin}${KI.redemptionPath}`,
            b = {
                keepalive: !0,
                trustToken: {
                    type: "token-redemption",
                    issuer: KI.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        SI(KI.issuerOrigin, 2);
        return window.fetch(a, b).then(c => {
            if (!c.ok) throw Error(`${c.status}: Network response was not ok!`);
            SI(KI.issuerOrigin, 6, !0)
        }).catch(c => {
            c && "NoModificationAllowedError" === c.name ? SI(KI.issuerOrigin, 6, !0) : SI(KI.issuerOrigin, 5)
        })
    }

    function UI() {
        const a = `${KI.issuerOrigin}${KI.issuancePath}`;
        SI(KI.issuerOrigin, 8);
        return window.fetch(a, {
            keepalive: !0,
            trustToken: {
                type: "token-request"
            }
        }).then(b => {
            if (!b.ok) throw Error(`${b.status}: Network response was not ok!`);
            SI(KI.issuerOrigin, 10);
            return TI()
        }).catch(b => {
            if (b && "NoModificationAllowedError" === b.name) return SI(KI.issuerOrigin, 10), TI();
            SI(KI.issuerOrigin, 9)
        })
    }

    function VI() {
        SI(KI.issuerOrigin, 13);
        return document.hasTrustToken(KI.issuerOrigin).then(a => a ? TI() : UI())
    }

    function WI() {
        SI(LI.issuerOrigin, 13);
        if (window.Promise) {
            var a = document.hasTrustToken(LI.issuerOrigin).then(e => e).catch(e => window.Promise.reject({
                state: 19,
                error: e
            }));
            const b = `${LI.issuerOrigin}${LI.redemptionPath}`,
                c = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "none"
                    }
                };
            SI(LI.issuerOrigin, 16);
            a = a.then(e => window.fetch(b, c).then(f => {
                if (!f.ok) throw Error(`${f.status}: Network response was not ok!`);
                SI(LI.issuerOrigin, 18, !0)
            }).catch(f => {
                if (f && "NoModificationAllowedError" === f.name) SI(LI.issuerOrigin,
                    18, !0);
                else {
                    if (e) return window.Promise.reject({
                        state: 17,
                        error: f
                    });
                    SI(LI.issuerOrigin, 17)
                }
            })).then(() => document.hasTrustToken(LI.issuerOrigin).then(e => e).catch(e => window.Promise.reject({
                state: 19,
                error: e
            }))).then(e => {
                const f = `${LI.issuerOrigin}${LI.getStatePath}`;
                SI(LI.issuerOrigin, 20);
                return window.fetch(`${f}?ht=${e}`, {
                    trustToken: {
                        type: "send-redemption-record",
                        issuers: [LI.issuerOrigin]
                    }
                }).then(g => {
                    if (!g.ok) throw Error(`${g.status}: Network response was not ok!`);
                    SI(LI.issuerOrigin, 22);
                    return g.text().then(h =>
                        JSON.parse(h))
                }).catch(g => window.Promise.reject({
                    state: 21,
                    error: g
                }))
            });
            const d = sh(window);
            return a.then(e => {
                const f = `${LI.issuerOrigin}${LI.issuancePath}`;
                return e && e.srqt && e.cs ? (SI(LI.issuerOrigin, 23), window.fetch(`${f}?cs=${e.cs}&correlator=${d}`, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-request"
                    }
                }).then(g => {
                    if (!g.ok) throw Error(`${g.status}: Network response was not ok!`);
                    SI(LI.issuerOrigin, 25);
                    return e
                }).catch(g => window.Promise.reject({
                    state: 24,
                    error: g
                }))) : e
            }).then(e => {
                if (e && e.srdt && e.cs) return SI(LI.issuerOrigin,
                    26), window.fetch(`${b}?cs=${e.cs}&correlator=${d}`, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "refresh"
                    }
                }).then(f => {
                    if (!f.ok) throw Error(`${f.status}: Network response was not ok!`);
                    SI(LI.issuerOrigin, 28, !0)
                }).catch(f => window.Promise.reject({
                    state: 27,
                    error: f
                }))
            }).then(() => {
                SI(LI.issuerOrigin, 29)
            }).catch(e => {
                if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                    if ("number" === typeof e.state && e.error instanceof Error) {
                        SI(LI.issuerOrigin, e.state);
                        const f = W($q);
                        Math.random() <= f && wi({
                            state: e.state,
                            err: e.error.toString()
                        }, "dtt_err")
                    } else throw Error(e);
                else throw e;
            })
        }
    }

    function XI(a) {
        if (document.hasTrustToken && !V(Yq) && a.m) {
            var b = window.goog_tt_promise_map;
            if (b && b instanceof Map) {
                var c = [];
                if (a.l.some(d => d.issuerOrigin === KI.issuerOrigin)) {
                    let d = b.get(KI.issuerOrigin);
                    d || (d = VI(), b.set(KI.issuerOrigin, d));
                    c.push(d)
                }
                a.l.some(d => d.issuerOrigin === LI.issuerOrigin) && (a = b.get(LI.issuerOrigin), a || (a = WI(), b.set(LI.issuerOrigin, a)), c.push(a));
                if (0 < c.length && window.Promise && window.Promise.all) return window.Promise.all(c)
            }
        }
    }
    var YI = class extends Hk {
        constructor(a, b, c) {
            super();
            this.m = a;
            this.l = [];
            b && MI() && this.l.push(KI);
            c && this.l.push(LI);
            if (document.hasTrustToken && !V(Yq)) {
                const d = new Map;
                this.l.forEach(e => {
                    d.set(e.issuerOrigin, {
                        issuerOrigin: e.issuerOrigin,
                        state: this.m ? 1 : 12,
                        hasRedemptionRecord: !1
                    })
                });
                window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof Map ? new Map([...d, ...window.goog_tt_state_map]) : d;
                window.goog_tt_promise_map && window.goog_tt_promise_map instanceof Map || (window.goog_tt_promise_map =
                    new Map)
            }
        }
    };

    function ZI(a) {
        if (a = a.navigator ? .userActivation) {
            var b = 0;
            a ? .hasBeenActive && (b |= 1);
            a ? .isActive && (b |= 2);
            return b
        }
    };
    const $I = /[+, ]/;

    function aJ(a, b) {
        const c = a.F;
        var d = a.pubWin,
            e = {},
            f = d.document;
        var g = xh(d);
        var h = ur(d, c.google_ad_width, c.google_ad_height);
        var k = wr(g).Rc;
        var l = d.top == d ? 0 : Mg(d.top) ? 1 : 2;
        var m = 4;
        h || 1 != l ? h || 2 != l ? h && 1 == l ? m = 7 : h && 2 == l && (m = 8) : m = 6 : m = 5;
        k && (m |= 16);
        k = "" + m;
        l = xr(d);
        m = !!c.google_page_url;
        e.google_iframing = k;
        0 != l && (e.google_iframing_environment = l);
        if (!m && "ad.yieldmanager.com" == f.domain) {
            for (k = f.URL.substring(f.URL.lastIndexOf("http")); - 1 < k.indexOf("%");) try {
                k = decodeURIComponent(k)
            } catch (q) {
                break
            }
            c.google_page_url = k;
            m = !!k
        }
        m ? (e.google_page_url = c.google_page_url, e.google_page_location = (h ? f.referrer : f.URL) || "EMPTY") : (h && Mg(d.top) && f.referrer && d.top.document.referrer === f.referrer ? e.google_page_url = d.top.document.URL : e.google_page_url = h ? f.referrer : f.URL, e.google_page_location = null);
        if (f.URL === e.google_page_url) try {
            var n = Math.round(Date.parse(f.lastModified) / 1E3) || null
        } catch {
            n = null
        } else n = null;
        e.google_last_modified_time = n;
        d = g == g.top ? g.document.referrer : (d = Fh()) && d.referrer || "";
        e.google_referrer_url = d;
        vr(e, c);
        e = c.google_page_location ||
            c.google_page_url;
        "EMPTY" == e && (e = c.google_page_url);
        e ? (e = e.toString(), 0 == e.indexOf("http://") ? e = e.substring(7, e.length) : 0 == e.indexOf("https://") && (e = e.substring(8, e.length)), d = e.indexOf("/"), -1 == d && (d = e.length), e = e.substring(0, d).split("."), d = !1, 3 <= e.length && (d = e[e.length - 3] in bI), 2 <= e.length && (d = d || e[e.length - 2] in bI), e = d) : e = !1;
        e = e ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net";
        b = bJ(a, b);
        d = a.F;
        f = d.google_ad_channel;
        g = "/pagead/ads?";
        "ca-pub-6219811747049371" === d.google_ad_client && cJ.test(f) &&
            (g = "/pagead/lopri?");
        a = ei(b, `https://${e}${g}` + (I(a.ga, 9) && c.google_debug_params ? c.google_debug_params : ""));
        return c.google_ad_url = a
    }

    function dJ(a) {
        return encodeURIComponent("RS-" + a.google_reactive_sra_index + "-") + "&" + di({
            adk: a.google_ad_unit_key,
            client: a.google_ad_client,
            fa: a.google_reactive_ad_format
        })
    }

    function eJ(a) {
        try {
            if (a.parentNode) return a.parentNode
        } catch {
            return null
        }
        if (9 === a.nodeType) a: {
            try {
                const c = xg(a);
                if (c) {
                    const d = c.frameElement;
                    if (d && Mg(c.parent)) {
                        var b = d;
                        break a
                    }
                }
            } catch {}
            b = null
        }
        else b = null;
        return b
    }

    function fJ(a, b) {
        b.eid = MF(a.pubWin);
        const c = a.F.google_loeid;
        "string" === typeof c && (a.j |= 4096, b.loeid = c)
    }

    function gJ(a, b) {
        a = (a = Pg(a.pubWin)) && a.document ? qr(a.document, a) : new ig(-12245933, -12245933);
        b.scr_x = Math.round(a.x);
        b.scr_y = Math.round(a.y)
    }

    function hJ(a) {
        try {
            const b = t.top.location.hash;
            if (b) {
                const c = b.match(a);
                return c && c[1] || ""
            }
        } catch {}
        return ""
    }

    function iJ(a) {
        const b = Ii();
        b && (a.debug_experiment_id = b);
        a.creatives = hJ(/\b(?:creatives)=([\d,]+)/);
        a.adgroups = hJ(/\b(?:adgroups)=([\d,]+)/);
        a.adgroups && (a.adtest = "on", a.disable_budget_throttling = !0, a.use_budget_filtering = !1, a.retrieve_only = !0, a.disable_fcap = !0)
    }

    function jJ(a, b, c) {
        const d = a.F;
        var e = a.pubWin,
            f = a.J,
            g = xh(window);
        d.fsapi && (b.fsapi = !0);
        b.ref = d.google_referrer_url;
        b.loc = d.google_page_location;
        var h;
        (h = Fh(e)) && ta(h.data) && "string" === typeof h.data.type ? (h = h.data.type.toLowerCase(), h = "doubleclick" == h || "adsense" == h ? null : h) : h = null;
        h && (b.apn = h.substr(0, 10));
        g = wr(g);
        b.url || b.loc || !g.url || (b.url = g.url, g.Rc || (b.usrc = 1));
        h = d.google_trust_token_additional_signing_data || {};
        h.url = b.url;
        d.google_trust_token_additional_signing_data = h;
        g.url != (b.loc || b.url) && (b.top =
            g.url);
        a.tb && (b.etu = a.tb);
        !V(Bp) && 0 <= a.A && (b.eae = a.A);
        (c = wG(d, f, f ? XD(c, f) : null)) && (b.fc = c);
        if (!ni(d)) {
            c = a.pubWin.document;
            g = "";
            if (c.documentMode && (h = (new rg(c)).createElement("IFRAME"), h.frameBorder = "0", h.style.height = 0, h.style.width = 0, h.style.position = "absolute", c.body)) {
                c.body.appendChild(h);
                try {
                    const K = h.contentWindow.document;
                    K.open();
                    K.write(Ve(gf));
                    K.close();
                    g += K.documentMode
                } catch (K) {}
                c.body.removeChild(h)
            }
            b.docm = g
        }
        let k, l, m, n, q, r, u, A, z;
        try {
            var B = e.screenX;
            k = e.screenY
        } catch (K) {}
        try {
            l = e.outerWidth,
                m = e.outerHeight
        } catch (K) {}
        try {
            n = e.innerWidth, q = e.innerHeight
        } catch (K) {}
        try {
            r = e.screenLeft, u = e.screenTop
        } catch (K) {}
        try {
            n = e.innerWidth, q = e.innerHeight
        } catch (K) {}
        try {
            A = e.screen.availWidth, z = e.screen.availTop
        } catch (K) {}
        b.brdim = [r, u, B, k, A, z, l, m, n, q].join();
        B = 0;
        void 0 === t.postMessage && (B |= 1);
        0 < B && (b.osd = B);
        b.vis = nH(e.document);
        B = a.X;
        e = qG(d) ? WH : KH(new UH(e, B, null, {
            width: 0,
            height: 0
        }, d.google_ad_width, d.google_ad_height, !1));
        b.rsz = e.toString();
        b.abl = xH(e);
        if (!qG(d) && (e = oi(d), null != e)) {
            B = 0;
            a: {
                try {
                    {
                        var H = d.google_async_iframe_id;
                        const K = window.document;
                        if (H) var E = K.getElementById(H + (V(Mp) ? "_host" : ""));
                        else {
                            var F = K.getElementsByTagName("script"),
                                J = F[F.length - 1];
                            E = J && J.parentNode || null
                        }
                    }
                    if (H = E) {
                        E = [];
                        F = 0;
                        for (var U = Date.now(); 100 >= ++F && 50 > Date.now() - U && (H = eJ(H));) 1 === H.nodeType && E.push(H);
                        var Va = E;
                        b: {
                            for (U = 0; U < Va.length; U++) {
                                c: {
                                    var ea = Va[U];
                                    try {
                                        if (ea.parentNode && 0 < ea.offsetWidth && 0 < ea.offsetHeight && ea.style && "none" !== ea.style.display && "hidden" !== ea.style.visibility && (!ea.style.opacity || 0 !== Number(ea.style.opacity))) {
                                            const K =
                                                ea.getBoundingClientRect();
                                            var Y = 0 < K.right && 0 < K.bottom;
                                            break c
                                        }
                                    } catch (K) {}
                                    Y = !1
                                }
                                if (!Y) {
                                    var va = !1;
                                    break b
                                }
                            }
                            va = !0
                        }
                        if (va) {
                            b: {
                                const K = Date.now();va = /^html|body$/i;Y = /^fixed/i;
                                for (ea = 0; ea < Va.length && 50 > Date.now() - K; ea++) {
                                    const Ga = Va[ea];
                                    if (!va.test(Ga.tagName) && Y.test(Ga.style.position || Uh(Ga, "position"))) {
                                        var oa = Ga;
                                        break b
                                    }
                                }
                                oa = null
                            }
                            break a
                        }
                    }
                } catch {}
                oa = null
            }
            oa && oa.offsetWidth * oa.offsetHeight <= 4 * e.width * e.height && (B = 1);
            b.pfx = B
        }
        a: {
            if (.05 > Math.random() && f) try {
                const K = f.document.getElementsByTagName("head")[0];
                var kc = K ? kI(K) : 0;
                break a
            } catch (K) {}
            kc = 0
        }
        f = kc;
        0 !== f && (b.cms = f);
        d.google_lrv !== G(a.ga, 2) && (b.alvm = d.google_lrv || "none")
    }

    function kJ(a, b) {
        let c = 0;
        a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : Ng(() => {
            c++;
            return !1
        }, !0, !0, a);
        c && (b.nhd = c)
    }

    function lJ(a, b) {
        const c = cD(b, 8, {});
        b = cD(b, 9, {});
        const d = a.google_ad_section,
            e = a.google_ad_format;
        a = a.google_ad_slot;
        e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
    }

    function mJ(a, b, c) {
        const d = a.F;
        var e = a.F;
        b.dt = ul;
        e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
        a: {
            try {
                var f = t.performance;
                if (f && f.timing && f.now) {
                    var g = f.timing.navigationStart + Math.round(f.now()) - f.timing.domLoading;
                    break a
                }
            } catch (J) {}
            g = null
        }(e = (e = g) ? ZG(e, t.Date.now() - ul, 1E6) : null) && (b.bdt = e);
        b.idt = ZG(a.G, ul);
        e = a.F;
        b.shv = G(a.ga, 2);
        a.Za && (b.mjsv = a.Za);
        "sa" == e.google_loader_used ? b.ptt = 5 : "aa" == e.google_loader_used && (b.ptt = 9);
        /^\w{1,3}$/.test(e.google_loader_used) && (b.saldr = e.google_loader_used);
        if (e = Fh(a.pubWin)) b.is_amp = 1, b.amp_v = Gh(e), (e = Hh(e)) && (b.act = e);
        e = a.pubWin;
        e == e.top && (b.abxe = 1);
        if ("_gfp_a_" in a.pubWin) {
            e = a.pubWin._gfp_a_;
            if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_a_"}: ${e}`);
            e && (e = new RF(a.pubWin), (g = NF(e, "__gads", c)) && (b.cookie = g), (g = NF(e, "__gpi", c)) && !g.includes("&") && (b.gpic = g), "1" === NF(e, "__gpi_opt_out", c) && (b.gpico = "1", b.pdopt = "1"))
        }
        e = YC();
        f = cD(e, 8, {});
        g = d.google_ad_section;
        f[g] && (b.prev_fmts = f[g]);
        f = cD(e, 9, {});
        f[g] && (b.prev_slotnames = f[g].toLowerCase());
        lJ(d, e);
        g = cD(e, 15, 0);
        0 < g && (b.nras = String(g));
        (f = Fh(window)) ? (f ? (g = f.pageViewId, f = f.clientId, "string" === typeof f && (g += f.replace(/\D/g, "").substr(0, 6))) : g = null, g = +g) : (g = xh(window), (f = g.google_global_correlator) || (g.google_global_correlator = f = 1 + Math.floor(Math.random() * Math.pow(2, 43))), g = f);
        b.correlator = cD(e, 7, g);
        V(Wp) && (b.rume = 1);
        if (d.google_ad_channel) {
            g = cD(e, 10, {});
            f = "";
            var h = d.google_ad_channel.split($I);
            for (var k = 0; k < h.length; k++) {
                var l = h[k];
                g[l] ? f += l + "+" : g[l] = !0
            }
            b.pv_ch = f
        }
        if (d.google_ad_host_channel) {
            f =
                cD(e, 11, []);
            h = d.google_ad_host_channel.split("|");
            e = -1;
            g = [];
            for (k = 0; k < h.length; k++) {
                l = h[k].split($I);
                f[k] || (f[k] = {});
                var m = "";
                for (var n = 0; n < l.length; n++) {
                    var q = l[n];
                    "" !== q && (f[k][q] ? m += "+" + q : f[k][q] = !0)
                }
                m = m.slice(1);
                g[k] = m;
                "" !== m && (e = k)
            }
            f = "";
            if (-1 < e) {
                for (h = 0; h < e; h++) f += g[h] + "|";
                f += g[e]
            }
            b.pv_h_ch = f
        }
        b.frm = d.google_iframing;
        b.ife = d.google_iframing_environment;
        e = d.google_ad_client;
        try {
            var r = xh(window),
                u = r.google_prev_clients;
            u || (u = r.google_prev_clients = {});
            if (e in u) var A = 1;
            else u[e] = !0, A = 2
        } catch {
            A = 0
        }
        b.pv =
            A;
        a.J && V(Jp) && (A = a.J, A = ib() && II(A) ? A.document.documentElement.lang : void 0, A && (b.tl = A));
        u = a.pubWin.document;
        A = a.F;
        e = a.pubWin;
        r = u.domain;
        e = (y(c, 5) && YD(e) ? e.document.cookie : null) || "";
        h = a.pubWin.screen;
        k = u.referrer;
        m = gi();
        if (Fh()) var z = window.gaGlobal || {};
        else {
            g = Math.round((new Date).getTime() / 1E3);
            f = A.google_analytics_domain_name;
            c = "undefined" == typeof f ? nI("auto", r) : nI(f, r);
            n = -1 < e.indexOf("__utma=" + c + ".");
            l = -1 < e.indexOf("__utmb=" + c);
            (r = (Lh() || window).gaGlobal) || (r = {}, (Lh() || window).gaGlobal = r);
            u = !1;
            if (n) {
                var B = e.split("__utma=" + c + ".")[1].split(";")[0].split(".");
                l ? r.sid = B[3] : r.sid || (r.sid = g + "");
                r.vid = B[0] + "." + B[1];
                r.from_cookie = !0
            } else {
                r.sid || (r.sid = g + "");
                if (!r.vid) {
                    u = !0;
                    l = Math.round(2147483647 * Math.random());
                    n = lI.appName;
                    q = lI.version;
                    var H = lI.language ? lI.language : lI.browserLanguage,
                        E = lI.platform,
                        F = lI.userAgent;
                    try {
                        B = lI.javaEnabled()
                    } catch (J) {
                        B = !1
                    }
                    B = [n, q, H, E, F, B ? 1 : 0].join("");
                    h ? B += h.width + "x" + h.height + h.colorDepth : t.java && t.java.awt && (h = t.java.awt.Toolkit.getDefaultToolkit().getScreenSize(),
                        B += h.screen.width + "x" + h.screen.height);
                    B = B + e + (k || "");
                    for (h = B.length; 0 < m;) B += m-- ^ h++;
                    r.vid = (l ^ mI(B) & 2147483647) + "." + g
                }
                r.from_cookie || (r.from_cookie = !1)
            }
            if (!r.cid) {
                b: for (g = f, B = 999, g && (g = 0 == g.indexOf(".") ? g.substr(1) : g, B = g.split(".").length), g = 999, e = e.split(";"), f = 0; f < e.length; f++)
                    if (h = oI.exec(e[f]) || pI.exec(e[f]) || qI.exec(e[f])) {
                        k = h[1] || 0;
                        if (k == B) {
                            z = h[2];
                            break b
                        }
                        k < g && (g = k, z = h[2])
                    }u && z && -1 != z.search(/^\d+\.\d+$/) ? (r.vid = z, r.from_cookie = !0) : z != r.vid && (r.cid = z)
            }
            r.dh = c;
            r.hid || (r.hid = Math.round(2147483647 *
                Math.random()));
            z = r
        }
        b.ga_vid = z.vid;
        b.ga_sid = z.sid;
        b.ga_hid = z.hid;
        b.ga_fc = z.from_cookie;
        b.ga_cid = z.cid;
        b.ga_wpids = A.google_analytics_uacct;
        kJ(a.pubWin, b);
        (a = d.google_ad_layout) && 0 <= OG[a] && (b.rplot = OG[a])
    }

    function nJ(a, b) {
        a = a.l;
        if (a ? .j() || hD()) b.npa = 1;
        if (a) {
            null != w(a, 3, !1) && (b.gdpr = y(a, 3) ? "1" : "0");
            var c = w(a, 1);
            c && (b.us_privacy = c);
            (c = w(a, 2)) && (b.gdpr_consent = c);
            (c = w(a, 4)) && (b.addtl_consent = c);
            (a = w(a, 7)) && (b.tcfe = a)
        }
    }

    function oJ(a, b) {
        const c = a.F;
        nJ(a, b);
        Ug(jD, (d, e) => {
            b[d] = c[e]
        });
        qG(c) && (a = EG(c), b.fa = a);
        b.pi || null == c.google_ad_slot || (a = Js(c), null != a.j && (a = tn(a.j.value), b.pi = a))
    }

    function pJ(a, b) {
        var c = Kh() || or(a.pubWin.top);
        c && (b.biw = c.width, b.bih = c.height);
        c = a.pubWin;
        c !== c.top && (a = or(a.pubWin)) && (b.isw = a.width, b.ish = a.height)
    }

    function qJ(a, b) {
        var c = a.pubWin;
        null !== c && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = or(c, !1), a.push(c.width.toString()), a.push(c.height.toString()), a = Wg(a.join(""))) : a = 0;
        0 !== a && (b.ifk = a)
    }

    function rJ(a, b) {
        (a = fD()[a.F.google_ad_client]) && (b.psts = a.join())
    }

    function sJ(a, b) {
        (a = a.pubWin.tmod) && (b.tmod = a)
    }

    function tJ(a, b) {
        (a = a.pubWin.google_user_agent_client_hint) && (b.uach = Yb(a))
    }

    function uJ(a, b) {
        const c = V(NI(window) ? Xq : Wq),
            d = V(Zq);
        (a = OI(a.pubWin, c, d)) && 0 < a.length && (b.tt_state = Yb(JSON.stringify(a)))
    }

    function vJ(a, b) {
        try {
            const e = a.pubWin && a.pubWin.external && a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
            if (e) {
                var c = JSON.parse(e("os-mode")),
                    d = parseInt(c["os-mode"], 10);
                0 <= d && (b.wsm = d + 1)
            }
        } catch {}
    }

    function wJ(a, b) {
        0 <= a.F.google_ad_public_floor && (b.pubf = a.F.google_ad_public_floor);
        0 <= a.F.google_ad_private_floor && (b.pvtf = a.F.google_ad_private_floor)
    }

    function xJ(a, b) {
        const c = Number(a.F.google_traffic_source);
        c && Object.values(La).includes(c) && (b.trt = a.F.google_traffic_source)
    }

    function yJ(a, b) {
        V(dr) || "runAdAuction" in a.pubWin.navigator && "joinAdInterestGroup" in a.pubWin.navigator && (b.td = 1)
    }

    function zJ(a, b) {
        V(aq) && (V($p) || GF("attribution-reporting", a.pubWin.document) && (b.nt = 1))
    }

    function bJ(a, b) {
        const c = {};
        oJ(a, c);
        yI();
        c.adsid = vI[1];
        yI();
        c.pucrd = vI[6];
        tJ(a, c);
        uJ(a, c);
        mJ(a, c, b);
        ji(c);
        c.u_sd = pr(a.pubWin);
        c.dmc = a.pubWin.navigator ? .deviceMemory;
        Sk(889, () => {
            if (null == a.J) c.adx = -12245933, c.ady = -12245933;
            else {
                var e = sF(a.J, a.X);
                c.adx && -12245933 != c.adx && c.ady && -12245933 != c.ady || (c.adx = Math.round(e.x), c.ady = Math.round(e.y));
                rr(a.X) || (c.adx = -12245933, c.ady = -12245933, a.j |= 32768)
            }
        });
        pJ(a, c);
        qJ(a, c);
        gJ(a, c);
        fJ(a, c);
        a.D && (c.oid = a.D);
        rJ(a, c);
        c.pvsid = sh(a.pubWin, Qk);
        sJ(a, c);
        vJ(a, c);
        c.uas =
            ZI(a.pubWin);
        const d = GI(a.pubWin);
        d && (c.nvt = d);
        a.C && (c.scar = a.C);
        a.v && (c.topics = a.v instanceof Uint8Array ? Wb(a.v, 3) : a.v, !V(Vq) || a.v instanceof Uint8Array || (c.tps = a.v));
        jJ(a, c, b);
        c.fu = a.j;
        c.bc = rI();
        yI();
        c.jar = vI[4];
        I(a.ga, 9) && iJ(c);
        hl() && (c.atl = !0);
        wJ(a, c);
        xJ(a, c);
        yJ(a, c);
        zJ(a, c);
        null == fr(Sp) || !1 !== a.F.google_video_play_muted && !0 !== V(Tp) || 10 !== a.F.google_reactive_ad_format && 11 !== a.F.google_reactive_ad_format || (c.sdkv = fr(Sp));
        return c
    }
    const cJ = /YtLoPri/;
    var AJ = class extends L {
            constructor(a) {
                super(a)
            }
        },
        BJ = Id(AJ);
    var CJ = class {
        constructor(a) {
            this.j = a
        }
        Ka() {
            return this.j.now()
        }
    };
    const DJ = [255, 255, 255];

    function EJ(a) {
        function b(d) {
            return [Number(d[1]), Number(d[2]), Number(d[3]), 4 < d.length ? Number(d[4]) : 1]
        }
        var c = a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/);
        if (c || (c = a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/))) return b(c);
        if ("transparent" === a) return [0, 0, 0, 0];
        throw Error(`Invalid color: ${a}`);
    }

    function FJ(a) {
        var b = getComputedStyle(a);
        if ("none" !== b.backgroundImage) return null;
        b = EJ(b.backgroundColor);
        var c = GJ(b);
        if (c) return c;
        a = (a = a.parentElement) ? FJ(a) : DJ;
        if (!a) return null;
        c = b[3];
        return [Math.round(c * b[0] + (1 - c) * a[0]), Math.round(c * b[1] + (1 - c) * a[1]), Math.round(c * b[2] + (1 - c) * a[2])]
    }

    function GJ(a) {
        return 1 === a[3] ? [a[0], a[1], a[2]] : null
    };
    var IJ = class {
        constructor(a, b, c, d) {
            this.jd = b;
            this.Ac = c;
            this.eb = d;
            this.l = 0;
            this.j = new HJ(a)
        }
    };
    class HJ {
        constructor(a) {
            this.v = a;
            this.j = new Map;
            this.l = 0
        }
        get m() {
            return this.l
        }
    };

    function JJ(a) {
        N(a, {
            border: "0",
            "box-shadow": "none",
            display: "inline",
            "float": "none",
            margin: "0",
            outline: "0",
            padding: "0"
        })
    };

    function KJ(a, b, c, d, e) {
        var f = new pk;
        d = md(f, 4, d);
        a = x(d, 1, a);
        b = x(a, 2, b);
        c = x(b, 3, c);
        e = e.v;
        b = LJ(e, 4);
        c = ed(b, 8, yk, c);
        return MJ(e, c)
    };
    const NJ = [{
        Fb: "1907259590",
        jc: 480,
        Ra: 220
    }, {
        Fb: "2837189651",
        jc: 400,
        Ra: 180
    }, {
        Fb: "9211025045",
        jc: 360,
        Ra: 160
    }, {
        Fb: "6584860439",
        jc: -Infinity,
        Ra: 150
    }];

    function OJ(a) {
        return NJ.find(b => b.jc <= a)
    };
    const PJ = new class {
        constructor() {
            this.j = []
        }
    };
    let QJ = !1;

    function RJ(a) {
        return SJ(a.j, 1065, a.win, () => {
            if (!a.l) {
                var b = new vk;
                b = ld(b, 1, a.m);
                var c = new uk;
                b = ed(b, 2, wk, c);
                TJ(a.j.v, b)
            }
        }, 1E4)
    }
    class UJ {
        constructor(a, b, c) {
            this.win = a;
            this.j = b;
            this.m = c;
            this.l = !1
        }
        cancel(a) {
            this.win.clearTimeout(a)
        }
    }

    function VJ(a, b, c, d, e) {
        const f = OJ(a.document.body.clientWidth),
            g = b.j ? WJ(a, b, d, f, e) : XJ(a, b, d, f, e);
        mm(g.isVisible(), !1, () => {
            QJ = !1;
            for (const l of PJ.j) l();
            PJ.j.length = 0
        });
        g.show({
            Nd: !0
        });
        QJ = !0;
        const h = new UJ(a, b, c),
            k = RJ(h);
        PJ.j.push(() => {
            var l = b.v;
            var m = new vk;
            m = ld(m, 1, c);
            var n = new tk;
            m = ed(m, 3, wk, n);
            TJ(l, m);
            h.l = !0
        });
        YJ.push(() => {
            g.isVisible().M && g.collapse();
            h.cancel(k)
        })
    }

    function WJ(a, b, c, d, e) {
        b = ZJ(a, b, c, d, a.innerWidth, "100%", "15px", "13px", "center", e);
        return sx(a, b, {
            bd: .75,
            Mc: .95,
            zIndex: 100001,
            Ia: !0,
            Hc: "adpub-drawer-root"
        })
    }

    function XJ(a, b, c, d, e) {
        a: {
            var f = a.document.body.clientWidth;
            var g = .9 * f;
            for (f = 768 >= f ? 3 : 4; 1 <= f; f--) {
                const h = d.Ra * f + 42;
                if (h <= g) {
                    g = h;
                    break a
                }
            }
        }
        c = ZJ(a, b, c, d, g, "600px", "24px", "24px", "start", e);
        return Ew(a, c, {
            Lc: `${g}px`,
            Jc: $J(b),
            Dc: G(b.l, 14),
            zIndex: 100001,
            Ia: !0,
            Sb: !1,
            Hc: "adpub-drawer-root"
        })
    }

    function ZJ(a, b, c, d, e, f, g, h, k, l) {
        var m = b.l,
            n = G(m, 10),
            q = n.indexOf("TERM");
        var r = V(Sq) ? {
            Ie: "partner-pub-undefined",
            wd: "ads"
        } : {
            Ie: "pub-adfiliates-rockskipper",
            wd: "ads"
        };
        let u = "";
        V(Lq) && (u = b.G.get(c) || "");
        var A = W(qq);
        e = Math.max(Math.floor((e - Math.floor(e / d.Ra) * d.Ra) / 2), 5);
        var z = b.I ? "on" : "",
            B = G(m, 3),
            H = V(Rq) ? `${b.C.kb}` : `${W(yq)}`,
            E = G(m, 7),
            F = G(m, 6),
            J = b.D,
            U = n.substring(0, q);
        n = n.substring(q + 4);
        q = d.Fb;
        var Va = r.Ie;
        r = r.wd;
        var ea = !!I(m, 13),
            Y = u,
            va = V(Kq),
            oa = V(Oq);
        Y = void 0 === Y ? "" : Y;
        f = Fv('<link href="https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap" rel="stylesheet"><div style="font-family: Roboto, sans-serif;"><div style="border: 0 solid #eee; border-bottom-width: 1px; color: #3c4043; font-size: 13px; line-height: 20px; padding: 0 ' +
            Jv(X(g)) + " " + Jv(X(h)) + "; text-align: " + Jv(X(k)) + ';">' + (l ? '<div style="max-width: ' + Jv(X(f)) + '">' + Ev(B) + '\u00a0<a href="https://support.google.com/adsense/answer/11188578" target="_blank" style="color: #1967d2; text-decoration: none; white-space: nowrap">' + Ev(F) + "</a></div>" : "") + "</div><div style=\"border-bottom: 1px solid #eee; color: #202124; font-family: 'Google Sans'; font-size: 15px; line-height: 24px; padding: 15px " + Jv(X(g)) + "; text-align: " + Jv(X(k)) + '"><div style="display: -webkit-box; overflow: hidden; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"><span style="bottom: -2px; color: #1967d2; font-family: \'Google Material Icons\'; padding-right: 5px; position: relative">' +
            (va ? "search" : "shoppingmode") + '</span><span style="color:#80868b"> ' + Ev(U) + "</span>" + Ev(c) + '<span style="color:#80868b">' + Ev(n) + '</span></div></div><div id="anno-csa" style="margin:5px ' + Jv(X(e)) + "px\"></div><script>(function(g,o){g[o]=g[o]||function(){(g[o]['q']=g[o]['q']||[]).push(arguments)},g[o]['t']=1*new Date})(window,'_googCsa');" + (oa ? "" : "const pageOptions = {'pubId': " + Nv(Ov(Va)) + ", 'styleId': " + Nv(Ov(q)) + ", 'disableCarousel': true, 'query': " + Nv(Ov(c)) + ", 'hl': " + Nv(Ov(E)) + ", 'personalizedAds': 'false', 'fexp': " +
                Nv(Ov(H)) + ", 'adfiliateWp': " + Nv(Ov(J)) + "," + (Y ? "'afdToken': " + Nv(Ov(Y)) + "," : "") + "'adtest': " + Nv(Ov(z)) + "}; const adBlock = {'container': 'anno-csa', 'linkTarget': '_blank', 'number': " + Nv(Ov(A)) + ", 'width': document.body.offsetWidth - 30}; _googCsa(" + Nv(Ov(r)) + ", pageOptions, adBlock);") + "\x3c/script>" + (ea ? "<script>const el = document.getElementById('anno-csa'); el.dir = 'ltr'; el.style.height = '800px'; el.style.width = '75vw'; el.style.overflow = 'hidden'; el.style.overflowWrap = 'break-word'; el.textContent = JSON.stringify(window._googCsa.q);\x3c/script>" :
                '<script async="async" src="https://www.google.com/adsense/search/ads.js">\x3c/script>') + "</div>");
        m = Ze("body", {
            dir: $J(b) ? "rtl" : "ltr",
            lang: G(m, 7),
            style: Ie({
                margin: "0",
                height: "100%",
                "padding-top": "0px",
                overflow: "hidden"
            })
        }, Av(f));
        f = a.document.createElement("IFRAME");
        N(f, {
            border: "0",
            width: "100%"
        });
        aK(a, b, f, c, d, u);
        f.srcdoc = Ve(m);
        return f
    }

    function aK(a, b, c, d, e, f) {
        function g(l) {
            const m = new ResizeObserver(() => {
                c.height = `${l.parentElement.offsetHeight}px`
            });
            m.observe(l);
            const n = bK(b, a, () => {
                const q = c.contentDocument ? .body ? .parentElement ? .offsetHeight;
                q && (c.height = `${q}px`)
            });
            V(Oq) && SJ(b, 999, a, () => {
                var q = b.l;
                const r = c.contentWindow;
                var u = c ? .contentDocument || c.contentWindow ? .document;
                if (r) {
                    if (void 0 === r._googCsa) throw Error("No _googCsa");
                    if (!u) throw Error("No contentDocument");
                } else throw Error("No googCsa window");
                q = {
                    pubId: "pub-adfiliates-rockskipper",
                    styleId: e.Fb,
                    disableCarousel: !0,
                    query: d,
                    hl: G(q, 7),
                    personalizedAds: "false",
                    fexp: V(Rq) ? `${b.C.kb}` : `${W(yq)}`,
                    adfiliateWp: b.D,
                    adtest: b.I ? "on" : ""
                };
                f && (q.afdToken = f);
                u = {
                    container: "anno-csa",
                    linkTarget: "_blank",
                    number: W(qq),
                    width: u.body.offsetWidth - 30
                };
                r._googCsa("ads", q, u)
            }, 100);
            YJ.push(() => {
                m.disconnect();
                a.clearInterval(n)
            })
        }

        function h() {
            if (!k) {
                const l = c.contentDocument ? .body || c.contentWindow ? .document ? .body;
                l && (k = !0, g(l))
            }
            return k
        }
        let k = !1;
        c.onload = () => void h();
        b.Aa(1066, nD(a, () => h(), 100))
    }
    const YJ = [];

    function cK(a, b, c) {
        return a.substring(Math.max(b - 30, 0), b) + "~~" + a.substring(c, Math.min(c + 30, a.length))
    }

    function dK(a) {
        a = EJ(a);
        var b = new dk;
        b = Zc(b, 1, a[0], 0);
        b = Zc(b, 2, a[1], 0);
        b = Zc(b, 3, a[2], 0);
        return Zc(b, 4, Hc(a[3]), 0)
    };
    class eK {
        constructor(a, b) {
            this.m = a;
            this.j = !1;
            this.v = b;
            this.l = this.v.ta(264, c => {
                this.j && (fK || (c = Date.now()), this.m(c), fK ? gK.call(t, this.l) : t.setTimeout(this.l, 17))
            })
        }
        start() {
            this.j || (this.j = !0, fK ? gK.call(t, this.l) : this.l(0))
        }
    }
    var gK = t.requestAnimationFrame || t.webkitRequestAnimationFrame,
        fK = !!gK && !/'iPhone'/.test(t.navigator.userAgent);

    function hK(a) {
        return a * a * a
    }

    function iK(a) {
        a = 1 - a;
        return 1 - a * a * a
    }
    class jK {
        constructor(a, b, c) {
            this.j = a;
            this.B = b;
            this.H = 100;
            this.progress = 0;
            this.l = null;
            this.G = !1;
            this.m = [];
            this.v = null;
            this.A = new eK(Ba(this.I, this), c)
        }
        I(a) {
            if (this.G) this.A.j = !1;
            else {
                null === this.l && (this.l = a);
                this.progress = (a - this.l) / this.H;
                1 <= this.progress && (this.progress = 1);
                a = this.v ? this.v(this.progress) : this.progress;
                this.m = [];
                for (let b = 0; b < this.j.length; b++) this.m.push((this.B[b] - this.j[b]) * a + this.j[b]);
                this.C();
                1 == this.progress && (this.A.j = !1, this.D())
            }
        }
        D() {}
        C() {}
        play() {
            this.G = !1;
            this.A.start()
        }
        reset(a,
            b, c) {
            this.l = null;
            this.j = a;
            this.B = b;
            this.H = c;
            this.progress = 0
        }
    };
    var kK = class {
        constructor(a, b, c, d) {
            this.C = a;
            this.D = b;
            this.m = c;
            this.B = d
        }
        get j() {
            return this.C
        }
        get A() {
            return this.D
        }
        get v() {
            return this.m
        }
        get l() {
            return this.B
        }
    };

    function lK(a, b) {
        a = mK(a.document, V(Kq) ? "search" : "shoppingmode");
        N(a, b);
        a.className = "google-material-icons";
        return a
    }

    function nK(a, b) {
        a = mK(a, "close");
        N(a, {
            color: "#5F6368",
            display: "block",
            "font-size": "15px",
            left: b ? "" : "20px",
            right: b ? "20px" : "",
            "pointer-events": "initial",
            position: "absolute",
            top: "16px",
            transform: "none"
        });
        return a
    }

    function oK(a, b, c) {
        a = mK(a, "expand_more");
        N(a, {
            color: "#5F6368",
            cursor: "pointer",
            display: "block",
            "font-size": "15px",
            left: c ? "" : "0",
            right: c ? "0" : "",
            padding: c ? "0 0 0 16px" : "0 16px 0 0",
            "pointer-events": "initial",
            position: "absolute",
            top: "20px",
            transform: `${b}`
        });
        return a
    }

    function mK(a, b) {
        const c = a.createElement("SPAN");
        c.appendChild(a.createTextNode(b));
        JJ(c);
        N(c, {
            "font-family": '"Google Material Icons"',
            "font-style": "normal",
            "font-weight": "normal",
            "text-decoration": "none"
        });
        c.className = "google-material-icons";
        return c
    };

    function pK(a, b, c) {
        return By({
            J: a,
            Tc: 3E3,
            Vc: a.innerWidth > Gl ? 650 : 0,
            aa: c,
            Hd: b
        })
    }

    function qK(a) {
        return a.document.getElementById("google-anno-sa")
    }

    function rK(a, b) {
        const c = document.createElement("SPAN");
        c.id = "gda";
        if (V(Tq)) c.appendChild(nK(a.document, b.j === $J(b)));
        else {
            const d = sK(a, b);
            c.appendChild(d)
        }
        tK(b, 1064, c, d => {
            const e = $J(b),
                f = (b.j ? e : !e) ? a.innerWidth : -a.innerWidth;
            uK(b, qK(a), 0, f, hK).play();
            const g = vK(b);
            g.appendChild(lK(a, {
                "font-size": "18px",
                "margin-right": "8px",
                "margin-top": "10px",
                left: "13px",
                top: "14px",
                margin: "0",
                position: "absolute",
                "line-height": "normal"
            }));
            tK(b, 1064, g, h => {
                const k = (b.j ? e : !e) ? a.innerWidth : -a.innerWidth;
                uK(b, qK(a), k,
                    0, iK).play();
                a.document.body.removeChild(g);
                h.preventDefault();
                return !1
            });
            a.document.body.appendChild(g);
            d.preventDefault();
            return !1
        });
        return c
    }

    function sK(a, b) {
        var c = a.document;
        a = c.createElementNS("http://www.w3.org/2000/svg", "svg");
        var d = $J(b);
        b = b.j ? d : !d;
        N(a, {
            bottom: "12.5px",
            display: "block",
            height: "20px",
            left: b ? "" : "0",
            right: b ? "0" : "",
            margin: "0 20px",
            "pointer-events": "initial",
            position: "absolute",
            top: "12.5px",
            transform: "none",
            width: "20px"
        });
        b = c.createElementNS("http://www.w3.org/2000/svg", "defs");
        a.appendChild(b);
        c = c.createElementNS("http://www.w3.org/2000/svg", "g");
        c.setAttribute("class", "down");
        c.setAttribute("stroke", "#616161");
        c.setAttribute("stroke-linecap",
            "square");
        c.setAttribute("stroke-width", "2px");
        b = c.ownerDocument;
        d = b.createElementNS("http://www.w3.org/2000/svg", "line");
        d.setAttribute("x1", "6");
        d.setAttribute("y1", "14");
        d.setAttribute("x2", "14");
        d.setAttribute("y2", "6");
        c.appendChild(d);
        b = b.createElementNS("http://www.w3.org/2000/svg", "line");
        b.setAttribute("x1", "6");
        b.setAttribute("y1", "6");
        b.setAttribute("x2", "14");
        b.setAttribute("y2", "14");
        c.appendChild(b);
        a.appendChild(c);
        return a
    }

    function wK(a, b) {
        var c = a.document;
        a = c.createElementNS("http://www.w3.org/2000/svg", "svg");
        var d = $J(b);
        d = b.j ? d : !d;
        N(a, {
            bottom: "12.5px",
            display: "block",
            height: "20px",
            margin: "0 20px",
            "pointer-events": "initial",
            position: "absolute",
            left: d ? "0" : "",
            right: d ? "" : "0",
            top: "12.5px",
            transform: "none",
            width: "20px"
        });
        d = c.createElementNS("http://www.w3.org/2000/svg", "defs");
        a.appendChild(d);
        c = c.createElementNS("http://www.w3.org/2000/svg", "g");
        c.setAttribute("class", "down");
        c.setAttribute("stroke", "#616161");
        c.setAttribute("stroke-width",
            "2px");
        c.setAttribute("stroke-linecap", "square");
        b.j ? (b = c.ownerDocument, d = b.createElementNS("http://www.w3.org/2000/svg", "line"), d.setAttribute("x1", "6"), d.setAttribute("y1", "12"), d.setAttribute("x2", "10"), d.setAttribute("y2", "8"), c.appendChild(d), b = b.createElementNS("http://www.w3.org/2000/svg", "line"), b.setAttribute("x1", "10"), b.setAttribute("y1", "8"), b.setAttribute("x2", "14"), b.setAttribute("y2", "12"), c.appendChild(b)) : $J(b) ? (b = c.ownerDocument, d = b.createElementNS("http://www.w3.org/2000/svg", "line"),
            d.setAttribute("x1", "6"), d.setAttribute("y1", "6"), d.setAttribute("x2", "10"), d.setAttribute("y2", "10"), c.appendChild(d), b = b.createElementNS("http://www.w3.org/2000/svg", "line"), b.setAttribute("x1", "10"), b.setAttribute("y1", "10"), b.setAttribute("x2", "6"), b.setAttribute("y2", "14"), c.appendChild(b)) : (b = c.ownerDocument, d = b.createElementNS("http://www.w3.org/2000/svg", "line"), d.setAttribute("x1", "10"), d.setAttribute("y1", "6"), d.setAttribute("x2", "6"), d.setAttribute("y2", "10"), c.appendChild(d), b = b.createElementNS("http://www.w3.org/2000/svg",
            "line"), b.setAttribute("x1", "6"), b.setAttribute("y1", "10"), b.setAttribute("x2", "10"), b.setAttribute("y2", "14"), c.appendChild(b));
        a.appendChild(c);
        return a
    }

    function vK(a) {
        const b = document.createElement("div");
        b.id = "gca";
        const c = $J(a);
        a = a.j ? c : !c;
        N(b, {
            position: "fixed",
            bottom: "0%",
            left: a ? "" : "0%",
            right: a ? "0%" : "",
            width: "45px",
            height: "45px",
            background: "white",
            "border-top-left-radius": "20px",
            "border-top-right-radius": "20px",
            "box-shadow": "0px 0px 10px 0px #00000026",
            color: "#1967D2",
            "z-index": "1000"
        });
        return b
    }

    function xK(a) {
        (new MutationObserver(b => {
            b.forEach(c => {
                "attributes" === c.type && "0px" === a.document.body.style.paddingBottom && N(a.document.body, {
                    "padding-bottom": "45px"
                })
            })
        })).observe(a.document.body, {
            attributes: !0
        })
    }

    function yK(a) {
        try {
            return null !== a.location ? .href ? .match(/goog_fsa=1/)
        } catch (b) {
            return !1
        }
    }

    function zK(a, b, c) {
        var d = G(c.l, 11);
        b = b.getElementsByClassName("google-anno-sa-qtx")[0];
        b instanceof HTMLElement && (b.innerText = d.replace("TERM", a.j));
        c = c.v;
        d = new Rj;
        d = x(d, 1, a.m);
        a = md(d, 4, a.j);
        d = LJ(c, 7);
        a = ed(d, 6, yk, a);
        return MJ(c, a)
    }

    function AK(a, b, c, d, e) {
        if (a.j !== d || null !== a.m || a.v !== e) {
            if (null !== a.l) {
                var f = a.l,
                    g = c.v,
                    h = new Qj;
                f = ld(h, 1, f);
                h = LJ(g, 8);
                f = ed(h, 7, yk, f);
                MJ(g, f)
            }
            a.j = d;
            a.m = null;
            a.v = e;
            (d = qK(b)) ? a.l = zK(a, d, c): (Fy(b) ? b = null : (d = b.getComputedStyle(b.document.body).paddingBottom.match(/\d+/), N(b.document.body, {
                "padding-bottom": (d && d.length ? Number(d[0]) + 45 : 45) + "px"
            }), xK(b), d = document.createElement("div"), d.id = "google-anno-sa", d.dir = $J(c) ? "rtl" : "ltr", N(d, {
                background: "white",
                "border-style": "solid",
                "border-top-left-radius": "20px",
                "border-top-right-radius": "20px",
                bottom: "0",
                height: "45px",
                position: "fixed",
                "text-align": "center",
                width: "100%",
                border: "0px",
                left: "0px",
                "box-shadow": "0px 0px 10px 0px #00000026",
                "z-index": "1000"
            }), d.appendChild(rK(b, c)), d.appendChild(BK(a, b, c)), d.appendChild(CK(a, b, c)), c = zK(a, d, c), b.document.body.appendChild(d), b = c), a.l = b)
        }
    }

    function BK(a, b, c) {
        const d = document.createElement("SPAN");
        JJ(d);
        N(d, {
            position: "absolute",
            top: "2.5px",
            bottom: "2.5px",
            left: "60px",
            right: "60px",
            display: "flex",
            "flex-direction": "row",
            "justify-content": "center",
            color: "#1967D2",
            cursor: "pointer"
        });
        var e = $J(c);
        c.j || N(d, {
            "justify-content": ""
        });
        d.appendChild(lK(b, {
            "font-size": "18px",
            width: "15px",
            height: "15px",
            "margin-left": e ? "8px" : "",
            "margin-right": e ? "" : "8px",
            "margin-top": "11px",
            "line-height": "normal"
        }));
        e = document.createElement("SPAN");
        e.classList ? .add("google-anno-sa-qtx",
            "google-anno-skip");
        N(e, {
            height: "40px",
            "align-items": "center",
            "line-height": "40px",
            "font-size": "16px",
            "font-weight": "400",
            "font-style": "normal",
            "font-family": "Roboto",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            overflow: "hidden",
            "-webkit-tap-highlight-color": "transparent"
        });
        tK(c, 999, d, f => DK(a, b, c, f));
        d.appendChild(e);
        return d
    }

    function CK(a, b, c) {
        const d = document.createElement("DIV");
        d.id = "google-anno-ea";
        c.j || N(d, {
            width: "60px",
            height: "45px",
            cursor: "pointer"
        });
        const e = V(Tq) ? oK(b.document, c.j ? "rotate(180deg) translateY(5px)" : $J(c) ? "rotate(270deg) translateX(-5px)" : "rotate(90deg) translateX(5px)", c.j !== $J(c)) : wK(b, c);
        d.appendChild(e);
        tK(c, 999, d, f => DK(a, b, c, f));
        return d
    }

    function DK(a, b, c, d) {
        const e = KJ(a.m, null, a.l, a.j, c);
        VJ(b, c, e, a.j, !1);
        d.preventDefault();
        return !1
    }
    var EK = class {
        constructor() {
            this.j = "";
            this.m = null;
            this.v = "";
            this.l = null
        }
    };

    function FK(a) {
        if (a.j >= a.m.length) {
            if (!V(Pq)) {
                a.l = !0;
                return
            }
            a.j = 0
        }
        if (QJ) PJ.j.push(() => void FK(a));
        else {
            var b = a.m[a.j++];
            a.l = !1;
            AK(a.A, a.win, a.v, b.j, b.l);
            SJ(a.v, 898, a.win, () => void FK(a), a.B)
        }
    }
    var GK = class {
        constructor(a, b, c) {
            var d = new EK;
            this.B = a;
            this.win = b;
            this.v = c;
            this.A = d;
            this.m = [];
            this.l = !0;
            this.j = 0
        }
    };
    class HK {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };
    const IK = /[\s!'",:;\\(\\)\\?\\.\u00bf\u00a1\u30a0\uff1d\u037e\u061f\u3002\uff1f\uff1b\uff1a\u2014\u2014\uff5e\u300a\u300b\u3008\u3009\uff08\uff09\u300c\u300d\u3001\u00b7\u2026\u2025\uff01\uff0c\u00b7\u2019\u060c\u061b\u060d\u06d4\u0648]/;

    function JK(a, b) {
        switch (b) {
            case 1:
                return !0;
            default:
                return "" === a || IK.test(a)
        }
    }

    function KK(a, b, c, d) {
        return JK(a.charAt(b - 1), d) && JK(a.charAt(c + 1), d)
    };

    function LK(a, b, c) {
        c = new MK(c);
        for (const f of a) {
            a = f;
            var d = b,
                e = c;
            const g = G(a, 1);
            if (1 === d && I(a, 3)) NK(e, g, g);
            else if (2 === d) {
                I(a, 4) && NK(e, g, g);
                for (const h of Wc(a, 5, Mc, !1)) NK(e, h, g)
            }
        }
        OK(c);
        return new PK(c)
    }

    function QK(a, b, c) {
        c = new MK(c);
        for (const d of a)
            for (const e of D(d, Sf, 2)) Uc(e, 3).length && !Uc(e, 3).includes(b) || NK(c, G(e, 1), G(d, 1));
        OK(c);
        return new PK(c)
    }
    var PK = class {
        constructor(a) {
            this.j = a
        }
        match(a) {
            return this.j.match(a)
        }
    };

    function NK(a, b, c) {
        const d = a.v.has(c) ? a.v.get(c) : a.B++;
        a.v.set(c, d);
        a.m.set(d, c);
        c = 0;
        for (let e = 0; e < b.length; e++) {
            const f = b.charCodeAt(e);
            a.j[c].contains(f) || (a.j.push(new RK), a.j[a.size].B = c, a.j[a.size].D = f, a.j[c].m.set(f, a.size), a.size++);
            c = a.j[c].m.get(f)
        }
        a.j[c].A = !0;
        a.j[c].v = d;
        a.j[c].C = a.l.length;
        a.l.push(b.length)
    }

    function OK(a) {
        const b = [];
        for (b.push(0); 0 < b.length;) {
            const g = b.shift();
            var c = a,
                d = g,
                e = c.j[d];
            if (0 === d) e.j = 0, e.l = 0;
            else if (0 === e.B) e.j = 0, e.l = e.A ? d : c.j[c.j[d].j].l;
            else {
                e = c.j[c.j[d].B].j;
                for (var f = c.j[d].D;;) {
                    if (c.j[e].contains(f)) {
                        c.j[d].j = c.j[e].m.get(f);
                        break
                    }
                    if (0 === e) {
                        c.j[d].j = 0;
                        break
                    }
                    e = c.j[e].j
                }
                c.j[d].l = c.j[d].A ? d : c.j[c.j[d].j].l
            }
            for (const h of a.j[g].childNodes) b.push(h)
        }
    }

    function SK(a, b) {
        a: {
            let d = 0;
            for (let e = 0; e < b.length; e++) {
                for (;;) {
                    var c = b.charCodeAt(e);
                    if (a.j[d].contains(c)) {
                        d = a.j[d].m.get(c);
                        break
                    }
                    if (0 === d) break;
                    d = a.j[d].j
                }
                for (c = d;;) {
                    c = a.j[c].l;
                    if (0 === c) break;
                    const f = e + 1 - a.l[a.j[c].C],
                        g = e;
                    if (KK(b, f, g, a.A)) {
                        a = new TK(f, g, a.m.get(a.j[c].v));
                        break a
                    }
                    c = a.j[c].j
                }
            }
            a = void 0
        }
        return void 0 !== a
    }
    class MK {
        constructor(a) {
            this.A = a;
            this.size = 1;
            this.j = [new RK];
            this.l = [];
            this.v = new Map;
            this.m = new Map;
            this.B = 0
        }
        match(a) {
            let b = 0;
            const c = [];
            for (let f = 0; f < a.length; f++) {
                for (;;) {
                    var d = a.charCodeAt(f),
                        e = this.j[b];
                    if (e.contains(d)) {
                        b = e.m.get(d);
                        break
                    }
                    if (0 === b) break;
                    b = e.j
                }
                for (d = b;;) {
                    d = this.j[d].l;
                    if (0 === d) break;
                    e = f + 1 - this.l[this.j[d].C];
                    const g = f;
                    KK(a, e, g, this.A) && c.push(new TK(e, g, this.m.get(this.j[d].v)));
                    d = this.j[d].j
                }
            }
            return c
        }
    }
    class RK {
        constructor() {
            this.m = new Map;
            this.I = !1;
            this.T = this.H = this.G = this.N = this.K = this.L = -1
        }
        contains(a) {
            return this.m.has(a)
        }
        set B(a) {
            this.L = a
        }
        get B() {
            return this.L
        }
        set D(a) {
            this.K = a
        }
        get D() {
            return this.K
        }
        set A(a) {
            this.I = a
        }
        get A() {
            return this.I
        }
        set v(a) {
            this.H = a
        }
        get v() {
            return this.H
        }
        set j(a) {
            this.N = a
        }
        get j() {
            return this.N
        }
        set l(a) {
            this.G = a
        }
        get l() {
            return this.G
        }
        set C(a) {
            this.T = a
        }
        get C() {
            return this.T
        }
        get childNodes() {
            return this.m.values()
        }
    }
    var TK = class {
            constructor(a, b, c) {
                this.A = a;
                this.v = b;
                this.B = c
            }
            get l() {
                return this.A
            }
            get m() {
                return this.v
            }
            get j() {
                return this.B
            }
            get length() {
                return this.v - this.A
            }
        },
        UK = class {
            constructor(a) {
                this.j = a;
                this.matches = []
            }
        };
    const VK = ["block", "inline", "inline-block", "list-item", "table-cell"];

    function WK(a, b, c, d, e, f) {
        if (c.Ka(5) >= c.L) return !1;
        for (let ea = 0; ea < b.childNodes.length; ea++) {
            const Y = b.childNodes[ea];
            if (Y.nodeType === Node.TEXT_NODE && "" !== Y.textContent) {
                a: {
                    var g = a;
                    var h = c,
                        k = b,
                        l = Y.textContent,
                        m = d,
                        n = e,
                        q = f;
                    const va = [];b: {
                        var r = l;
                        switch (h.m) {
                            case 1:
                                var u = Array(r.length),
                                    A = 0;
                                for (var z = 0; z < r.length; z++) IK.test(r[z]) || A++, u[z] = A;
                                r = u;
                                break b;
                            default:
                                u = Array(r.length);
                                for (z = A = 0; z < r.length;) {
                                    for (;
                                        /\s/.test(r[z]);) u[z] = A, z++;
                                    for (var B = !1; z < r.length && !/\s/.test(r[z]);) B = !0, u[z] = A, z++;
                                    B && (A++,
                                        u[z - 1] = A)
                                }
                                r = u
                        }
                    }
                    if (l.includes("\u00bb")) n = [];
                    else {
                        u = n.match(l);
                        n = new Map;
                        for (const oa of u) u = oa.l, n.has(u) ? (A = n.get(u), oa.length > A.length && n.set(u, oa)) : n.set(u, oa);
                        n = Array.from(n.values())
                    }
                    A = -1;
                    for (const oa of n) {
                        u = oa.l;
                        n = oa.m;
                        z = q;
                        B = oa.j;
                        var H = z.j,
                            E = z.l + r[u] - H.v;
                        for (const kc of H.j.keys()) {
                            for (var F = H.j.get(kc), J = 0; J < F.length && F[J] < E;) J++;
                            H.l -= J;
                            0 < J && H.j.set(kc, F.slice(J))
                        }
                        H = z;
                        E = H.j;
                        if ((E.j.has(B) ? E.j.get(B).length : 0) < H.jd && z.j.m < z.Ac) {
                            z = g.getComputedStyle(k);
                            B = z.fontSize.match(/\d+/);
                            if (!(B && 12 <=
                                    Number(B[0]) && 22 >= Number(B[0]) && rb(VK, z.display))) {
                                q.l += r[r.length - 1];
                                g = [];
                                break a
                            }
                            A += 1;
                            A < u && va.push(g.document.createTextNode(l.substring(A, u)));
                            A = l.substring(u, n + 1);
                            B = g;
                            z = k;
                            var U = A;
                            J = cK(l, u, n + 1);
                            F = oa.j;
                            E = r[u];
                            H = z.getBoundingClientRect();
                            var Va = fk(2);
                            U = md(Va, 2, U);
                            J = md(U, 3, J);
                            F = md(J, 4, F);
                            E = Zc(F, 5, E, 0);
                            E = Zc(E, 6, Math.round(H.x), 0);
                            H = Zc(E, 7, Math.round(H.y), 0);
                            B = B.getComputedStyle(z);
                            E = new ek;
                            E = md(E, 1, B.fontFamily);
                            F = dK(B.color);
                            E = dd(E, 7, F);
                            F = dK(B.backgroundColor);
                            E = dd(E, 8, F);
                            F = B.fontSize.match(/^(\d+(\.\d+)?)px$/);
                            E = Zc(E, 4, F ? Math.round(Number(F[1])) : 0, 0);
                            F = Math.round(Number(B.fontWeight));
                            isNaN(F) || 400 === F || Zc(E, 5, F, 0);
                            "none" !== B.textDecorationLine && md(E, 6, B.textDecorationLine);
                            B = dd(H, 8, E);
                            H = [];
                            for (J = z; J && 20 > H.length;) {
                                z = H;
                                E = z.push;
                                F = J;
                                U = new ck;
                                U = md(U, 1, F.tagName);
                                "" !== F.className && Yc(U, 2, F.className.split(" "), Lc);
                                E.call(z, U);
                                if ("BODY" === J.tagName) break;
                                J = J.parentElement
                            }
                            z = H.reverse();
                            z = fd(B, 9, z);
                            z = XK(m, z);
                            va.push(YK(g, h, z, oa.j, A));
                            A = q.j;
                            z = oa.j;
                            u = q.l + r[u];
                            B = [];
                            A.j.has(z) && (B = A.j.get(z));
                            B.push(u);
                            A.l++;
                            A.j.set(z,
                                B);
                            A = n;
                            if (0 < q.eb && q.j.m >= q.eb) break
                        }
                    }
                    h = A + 1;0 !== h && h < l.length && va.push(g.document.createTextNode(l.substring(h)));q.l += r[r.length - 1];g = va
                }
                if (0 < g.length && (V(Rq) ? !c.C.rc : !V(Iq))) {
                    for (const va of g) b.insertBefore(va, Y), ZK(va);
                    b.removeChild(Y);
                    ea += g.length - 1
                }
            }
            else if ($K(Y, c) && !WK(a, Y, c, d, e, f)) return !1;
            if (0 < f.eb && f.j.m >= f.eb) break
        }
        return !0
    }

    function ZK(a) {
        if (a.nodeType === Node.ELEMENT_NODE) {
            if ("A" === a.tagName) {
                var b = GJ(EJ(getComputedStyle(a.parentElement).color)),
                    c = GJ(EJ(getComputedStyle(a).color));
                var d = FJ(a);
                if (d = b && c && d ? fF(c, d) < Math.min(fF(b, d), 4.5) ? b : null : b) {
                    b = d[0];
                    c = d[1];
                    d = d[2];
                    b = Number(b);
                    c = Number(c);
                    d = Number(d);
                    if (b != (b & 255) || c != (c & 255) || d != (d & 255)) throw Error('"(' + b + "," + c + "," + d + '") is not a valid RGB color');
                    c = b << 16 | c << 8 | d;
                    b = 16 > b ? "#" + (16777216 | c).toString(16).slice(1) : "#" + c.toString(16);
                    N(a, {
                        color: b
                    })
                }
            }
            for (b = 0; b < a.childElementCount; b++) ZK(a.children[b])
        }
    }

    function $K(a, b) {
        if (a.nodeType !== Node.ELEMENT_NODE || a.classList ? .contains("google-anno-skip") || !a.offsetHeight) return !1;
        switch (a.tagName ? .toUpperCase ? .()) {
            case "IFRAME":
            case "AUDIO":
            case "BUTTON":
            case "CANVAS":
            case "CITE":
            case "CODE":
            case "EMBED":
            case "FOOTER":
            case "FORM":
            case "KBD":
            case "LABEL":
            case "OBJECT":
            case "PRE":
            case "SAMP":
            case "SCRIPT":
            case "SELECT":
            case "STYLE":
            case "SUB":
            case "SUPER":
            case "SVG":
            case "TEXTAREA":
            case "TIME":
            case "VAR":
            case "VIDEO":
            case null:
                return !1;
            case "A":
                return !V(uq) &&
                    !!b.A;
            default:
                return !V(uq) && !!b.A || !(a.className.toUpperCase ? .() ? .includes("CRUMB") || a.id.toUpperCase ? .() ? .includes("CRUMB"))
        }
    }
    class aL {
        constructor() {
            this.j = null
        }
        get l() {
            return this.j
        }
    }

    function YK(a, b, c, d, e) {
        const f = a.document.createElement("SPAN");
        bL(f);
        f.appendChild(a.document.createTextNode(e));
        e = a.document.createElement("A");
        JJ(e);
        N(e, {
            "text-decoration": "none"
        });
        kf(e);
        e.className = "google-anno";
        e.appendChild(lK(a, {
            bottom: "-1px",
            "font-family": '"Google Material Icons", "goog-matfb"',
            "font-size": "90%",
            position: "relative"
        }));
        e.appendChild(a.document.createTextNode("\u00a0"));
        e.appendChild(f);
        const g = cL(b, c, e);
        tK(b, 999, e, h => {
            try {
                const k = KJ(c, g.l, null, d, b);
                VJ(a, b, k, d, !0);
                return !1
            } finally {
                h.preventDefault(),
                    h.stopImmediatePropagation()
            }
        });
        return e
    }

    function cL(a, b, c) {
        const d = new aL;
        dL(a, e => {
            for (const k of e)
                if (k.isIntersecting) {
                    var f = b;
                    e = a.v;
                    var g = new sk;
                    f = ld(g, 1, f);
                    g = LJ(e, 5);
                    f = ed(g, 4, yk, f);
                    e = MJ(e, f);
                    d.j = e
                } else if (e = d, e.j) {
                f = a.v;
                g = new rk;
                g = ld(g, 1, e.j);
                var h = LJ(f, 6);
                g = ed(h, 5, yk, g);
                MJ(f, g);
                e.j = null
            }
        }).observe(c);
        return d
    }

    function bL(a) {
        JJ(a);
        N(a, {
            "text-decoration": "underline"
        });
        N(a, {
            "text-decoration-style": "dotted"
        });
        N(a, {
            "-webkit-text-decoration-line": "underline",
            "-webkit-text-decoration-style": "dotted"
        })
    };

    function XK(a, b) {
        a.entries.push(Bd(b, !1));
        return a.entries.length - 1
    }

    function eL(a) {
        if (V(Uq)) {
            a = Wf(a);
            let d = 0;
            for (var b of a) d += (I(b, 3) ? 1 : 0) + (I(b, 4) ? 1 : 0) + Wc(b, 5, Mc, !1).length;
            return lk(kk(new mk, a.length), d)
        }
        b = kk(new mk, Vf(a).length);
        let c = 0;
        Vf(a).forEach(d => {
            c += D(d, Sf, 2).length
        });
        return lk(b, c)
    }

    function fL(a, b, c, d) {
        const e = new Xj;
        switch (a) {
            case "se":
                return b = new Wj, ed(e, 1, Yj, b);
            case "sw":
                return b = new Wj, ed(e, 2, Yj, b);
            case "si":
                return b = new Wj, ed(e, 3, Yj, b);
            case "sl":
                return b = new Wj, ed(e, 5, Yj, b);
            case "l":
                return b = new Wj, ed(e, 6, Yj, b)
        }
        if (c && b) {
            if (b.l) return a = new Vj, b = ld(a, 1, b.l), ed(e, 7, Yj, b);
            if (c.j && b.v && (!d || !b.A)) return b = new Wj, ed(e, 8, Yj, b)
        }
        return null
    }
    var gL = class {
        constructor() {
            this.entries = [];
            this.j = 0;
            this.l = this.m = null
        }
    };
    var hL = class {
        constructor(a, b, c) {
            this.win = a;
            this.l = b;
            this.m = c
        }
        get window() {
            return this.win
        }
        get j() {
            return this.l
        }
        get D() {
            return this.m
        }
    };
    var iL = class {
        constructor(a) {
            this.j = a
        }
    };

    function TJ(a, b) {
        var c = LJ(a, 9);
        b = ed(c, 9, yk, b);
        MJ(a, b)
    }

    function MJ(a, b) {
        for (const c of a.j) c(b);
        return jd(b, 1)
    }

    function LJ(a, b) {
        var c = new xk;
        var d = a.A++;
        c = ld(c, 1, d);
        b = ld(c, 2, Math.round(a.l.Ka(b) - a.m));
        return dd(b, 10, a.v)
    }
    var jL = class {
        constructor(a, b, c, d) {
            this.l = a;
            this.m = b;
            this.v = c;
            this.A = 1;
            this.j = [...d]
        }
    };

    function kL(a) {
        return a ? (a = a.match(/^[a-z]{2,3}/i)) ? a[0].toLowerCase() : "" : ""
    }

    function lL(a) {
        return new Set(a.map(kL).filter(b => b.length))
    };
    var mL = class {
        constructor(a, b) {
            this.l = a;
            this.m = b
        }
        get j() {
            return this.l
        }
        get v() {
            return this.m
        }
    };
    class nL extends jK {
        constructor(a, b, c, d, e) {
            super([b], [c], d);
            this.K = a;
            this.v = e || null
        }
        C() {
            const a = {};
            a.left = this.m[0] + "px";
            Qh(this.K, a)
        }
        D() {}
    };
    var oL = class {
        constructor(a) {
            this.kb = a.kb;
            this.rc = a.rc ? ? !1;
            this.zc = a.zc ? ? 300
        }
    };

    function SJ(a, b, c, d, e) {
        return c.setTimeout(pL(a, b, d), e)
    }

    function $J(a) {
        return 2 === nd(a.l, 12)
    }

    function bK(a, b, c) {
        return b.setInterval(pL(a, 1066, c), 1E3)
    }

    function tK(a, b, c, d) {
        c.addEventListener("click", pL(a, b, d))
    }

    function uK(a, b, c, d, e) {
        return new nL(b, c, d, a.H, e)
    }

    function dL(a, b) {
        return new IntersectionObserver(pL(a, 1065, b), {
            threshold: .98
        })
    }

    function pL(a, b, c) {
        return a.H.ta(b, c, void 0, d => void qL(a, d))
    }

    function qL(a, b) {
        b.e = V(Rq) ? `${a.C.kb}` : `${W(yq)}`;
        b.c = `${a.N}`
    }
    var sL = class {
        constructor(a, b, c, d, e, f, g, h, k, l, m, n, q, r = !1) {
            this.D = a;
            this.j = b;
            this.l = c;
            this.N = d;
            this.L = e;
            this.A = f;
            this.H = g;
            this.v = h;
            this.aa = k;
            this.T = l;
            this.B = m;
            this.K = n;
            this.I = r;
            this.C = new oL(q);
            this.m = rb(rL, G(c, 7)) ? 1 : 0;
            this.G = new Map;
            if (V(Lq))
                if (V(Uq))
                    for (const u of Wf(this.l)) null != w(u, 2) && this.G.set(G(u, 1), G(u, 2));
                else Vf(this.l).forEach(u => {
                    null != w(u, 3) && this.G.set(G(u, 1), G(u, 3));
                    D(u, Sf, 2).forEach(A => {
                        null != w(A, 2) && this.G.set(G(A, 1), G(A, 2))
                    })
                })
        }
        Aa(a, b) {
            this.H.Aa(a, b, c => void qL(this, c))
        }
        Ka(a) {
            return this.T.Ka(a)
        }
    };
    const rL = ["ja", "zh_CN", "zh_TW"];

    function tL(a, b, c, d, e, f) {
        var g = Qk,
            h = Pk;
        try {
            Cb(a.document)
        } catch (k) {
            return
        }
        f = (f = NF(new RF(a), "__gads", f)) ? (f = Wg(f + "t2Z7mVic")) ? f % 20 : null : null;
        f || (f = Yg() ? null : Math.floor(20 * Tg()));
        null != f && uL(a, b, c, new iL(f), g, d, h, e)
    }

    function vL(a, b, c, d, e, f, g, h) {
        V(oq) && b && !b.j && (a = Jy(a)) && uh(a, () => {
            uL(c.window, c.j, c.D, new iL(d.j), e, f, g, h)
        })
    }

    function uL(a, b, c, d, e, f, g, h) {
        const k = b.l;
        if (k) {
            var l = h.Ka(1),
                m = l + (V(Rq) ? b.j.zc : W(vq)),
                n = b.j;
            if ((V(Rq) ? !n.rc : !V(Iq)) && 0 < (V(Uq) ? Wf(k) : Vf(k)).length) {
                var q = a.document;
                const Gb = q.createElement("LINK"),
                    Ka = O `https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700`;
                pf(Gb, Ka, "stylesheet");
                q.head.appendChild(Gb)
            }
            var r = 488 > Q(a).clientWidth;
            if (V(oq) || yK(a)) {
                var u = (V(Uq) ? Wf(b.l) : Vf(b.l)).length;
                var A = new mL(b.A, u)
            } else A = null;
            var z = new hL(a, b, c);
            if (V(oq) || yK(a)) {
                var B = A;
                if (yK(a)) var H =
                    new kK(!0, !1, !1, 0);
                else {
                    var E = By({
                        J: a,
                        Tc: 3E3,
                        Vc: W(tq),
                        aa: g,
                        hf: !0
                    });
                    var F = pK(a, 2, g),
                        J = pK(a, 1, g);
                    H = new kK(0 < E || 0 === B.v ? !1 : !B.j || 0 < J || r && 0 === F, 0 === F, 0 === J, E)
                }
            } else H = null;
            var U = H,
                Va = b.j,
                ea = new qk,
                Y = V(Rq) ? Va.kb : W(yq);
            var va = ld(ea, 1, Y);
            var oa = Zc(va, 2, d.j, 0);
            var kc = new jL(h, l, oa, f);
            V(Aq) && vL(a, U, z, d, e, f, g, h);
            var K = new sL(c, r, k, d.j, m, U, e, kc, g, h, b.B, b.v, b.j, b.m),
                Ga = new gL; {
                const Gb = a.document.body;
                if (Gb && wL(Gb)) {
                    var od = Gb.textContent || "";
                    b: switch (K.m) {
                        case 1:
                            let Ka = 0;
                            for (let Ha = od.length - 1; 0 <= Ha; Ha--) IK.test(od[Ha]) ||
                                Ka++;
                            var kl = Ka;
                            break b;
                        default:
                            const ya = od.trim();
                            kl = "" === ya ? 0 : ya.split(/\s+/).length
                    }
                    Ga.j = kl;
                    var bu = kL(G(K.l, 7)); {
                        const Ka = a.document.documentElement,
                            ya = kL(Ka.lang) || kL(Ka.getAttribute("xml:lang"));
                        if ("" !== ya) var ll = new Set([ya]);
                        else {
                            var cu = a.location;
                            const Ha = cu.host.match(/^[a-z]{2}\./i),
                                Pa = Ha ? [Ha[0]] : [];
                            for (const Ia of cu.pathname.split("/")) 2 === Ia.length && Pa.push(Ia);
                            var du = lL(Pa);
                            if (du.size) var eu = du;
                            else {
                                const Ia = a.navigator;
                                eu = lL(Ia.languages ? .length ? Ia.languages : [Ia.language])
                            }
                            ll = eu
                        }
                    }
                    Ga.m =
                        bu;
                    Ga.l = new Set(ll);
                    var WL = V(uq) && V(nq) ? Math.min(K.B ? .Bb ? ? Number.MAX_SAFE_INTEGER, K.K ? .Bb ? ? Number.MAX_SAFE_INTEGER) : W(Fq);
                    if (kl < WL) var fu = "sw";
                    else {
                        if (a.document.querySelector('script[src*="www.google.com/adsense/search/ads.js"]')) var gu = "si";
                        else {
                            if (ll.has(bu)) {
                                if (K.Ka(5) >= K.L) var hu = "l";
                                else {
                                    b: {
                                        const Ka = K.l;
                                        if (0 === (V(Uq) ? Wf(Ka) : Vf(Ka)).length || !V(uq) && K.A && !K.A.j) var ml = !0;
                                        else {
                                            if (V(uq) || !K.A) {
                                                var iu = a.document;
                                                const ya = iu.createElement("style");
                                                var XL = V(Kq) ? Ph `@font-face{font-family:"goog-matfb";size-adjust:39.13%;src:local("Times New Roman"),local("Tinos");}` :
                                                    Ph `@font-face{font-family:"goog-matfb";size-adjust:17.16%;src:local("Times New Roman");}`;
                                                ya.textContent = Se(XL);
                                                iu.head.appendChild(ya)
                                            }
                                            if (V(Uq))
                                                if (V(uq)) {
                                                    var sf = LK(Wf(Ka), 2, K.m);
                                                    var tf = LK(Wf(Ka), 1, K.m)
                                                } else {
                                                    var YL = Wf(Ka);
                                                    const ya = new MK(K.m);
                                                    for (const Ha of YL) {
                                                        const Pa = G(Ha, 1);
                                                        NK(ya, Pa, Pa);
                                                        for (const Ia of Wc(Ha, 5, Mc, !1)) NK(ya, Ia, Pa)
                                                    }
                                                    OK(ya);
                                                    sf = tf = new PK(ya)
                                                }
                                            else if (V(uq)) sf = QK(Vf(Ka), 2, K.m), tf = QK(Vf(Ka), 1, K.m);
                                            else {
                                                var ZL = Vf(Ka);
                                                const ya = new MK(K.m);
                                                for (const Ha of ZL)
                                                    for (const Pa of D(Ha, Sf, 2)) NK(ya,
                                                        G(Pa, 1), G(Ha, 1));
                                                OK(ya);
                                                sf = tf = new PK(ya)
                                            }
                                            var nl;
                                            if (nl = K.A && K.A.j) {
                                                var $L = Ga.j;
                                                nl = !V(uq) || !V(nq) || $L >= (K.K ? .Bb ? ? Number.MAX_SAFE_INTEGER)
                                            }
                                            if (nl) {
                                                if (SK(sf.j, od)) {
                                                    var aM = new GK(W(Qq), a, K),
                                                        bM = K.m;
                                                    const ya = sf.match(od),
                                                        Ha = new Map;
                                                    for (const Pa of ya) {
                                                        const Ia = Pa.j;
                                                        if (Ha.has(Ia)) Ha.get(Ia).matches.push(Pa);
                                                        else {
                                                            const Ih = new UK(Ia);
                                                            Ih.matches.push(Pa);
                                                            Ha.set(Ia, Ih)
                                                        }
                                                    }
                                                    var cM = Array.from(Ha.values());
                                                    for (const Pa of cM) {
                                                        let Ia = null;
                                                        for (const Ih of Pa.matches) {
                                                            c: {
                                                                var ol = od,
                                                                    pd = Ih,
                                                                    dM = Ga;
                                                                if (!KK(ol, pd.l, pd.m, bM)) {
                                                                    var ju =
                                                                        null;
                                                                    break c
                                                                }
                                                                const ku = ol.substring(pd.l, pd.m + 1);
                                                                var eM = dM,
                                                                    fM = ku,
                                                                    gM = cK(ol, pd.l, pd.m + 1),
                                                                    hM = pd.j,
                                                                    iM = fk(1);
                                                                var jM = md(iM, 2, fM);
                                                                var kM = md(jM, 3, gM);
                                                                var lM = md(kM, 4, hM);
                                                                var mM = Zc(lM, 5, null, 0);XK(eM, mM);ju = ku
                                                            }
                                                            const lu = ju;null != lu && (Ia = lu)
                                                        }
                                                        if (null != Ia) {
                                                            var pl = aM;
                                                            pl.m.push(new HK(Pa.j, Ia));
                                                            pl.l && FK(pl)
                                                        }
                                                    }
                                                }
                                                if (!V(uq)) {
                                                    ml = !0;
                                                    break b
                                                }
                                            }
                                            var nM = Ga.j;
                                            ml = !(!V(uq) || !V(nq) || nM >= (K.B ? .Bb ? ? Number.MAX_SAFE_INTEGER)) || !SK(tf.j, od) || WK(a, a.document.body, K, Ga, tf, new IJ(K.B ? .xg ? ? null ? ? 100, (K.B ? .jd ? ? null) || 0, (K.B ? .Ac ? ? null) || 0,
                                                (K.B ? .eb ? ? null) || -1))
                                        }
                                    }
                                    hu = ml ? "a" : "p"
                                }
                                var mu = hu
                            } else mu = "sl";
                            gu = mu
                        }
                        fu = gu
                    }
                    var nu = fu
                } else nu = "se"
            }
            var oM = h.Ka(3) - l,
                pM = b.j;
            if ((V(Rq) ? !pM.rc : !V(Iq)) && Ga.entries.length && !I(k, 13)) {
                var ou = a.document;
                const Gb = ou.createElement("LINK");
                pf(Gb, O `https://www.google.com/adsense/search/ads.js`, "prefetch");
                Gb.as = "script";
                Gb.fetchPriority = "low";
                ou.head.appendChild(Gb)
            }
            var qM = b.C,
                rM = a.location.hostname,
                sM = b.D,
                tM = A,
                pu = nu,
                uM = new nk,
                vM = new Sj;
            var wM = md(vM, 1, qM);
            var xM = md(wM, 2, rM);
            var yM = rd(xM, 3, r);
            var zM = x(yM, 4, Ga.j);
            var AM = dd(uM, 1, zM);
            var BM = new Uj,
                CM = Array.from(Ga.l ? ? []).sort();
            var DM = Yc(BM, 1, CM, Lc);
            var EM = md(DM, 2, Ga.m);
            var FM = md(EM, 3, sM);
            var GM = dd(AM, 2, FM);
            var HM = ld(GM, 3, Math.round(oM));
            var IM = eL(k);
            var ql = dd(HM, 6, IM);
            const qu = fL(pu, U, tM, r);
            if (qu) {
                var JM = new ak;
                var KM = gd(JM, 1, Xj, qu);
                ed(ql, 5, ok, KM)
            } else {
                var LM = new jk;
                var MM = rd(LM, 1, "p" === pu);
                var NM = fd(MM, 2, Ga.entries);
                var OM = (V(Uq) ? Wf(k) : Vf(k)).length;
                var PM = ld(NM, 3, OM);
                ed(ql, 4, ok, PM)
            }
            var QM = LJ(kc, 3);
            var RM = ed(QM, 3, yk, ql);
            MJ(kc, RM)
        }
    }

    function wL(a) {
        try {
            Cb(new ResizeObserver(() => {})), Cb(new MutationObserver(() => {}))
        } catch {
            return !1
        }
        return a.classList && void 0 !== a.classList.contains && void 0 !== a.attachShadow
    };

    function xL(a, b, c, d, e) {
        if (!cD(YC(), 29, !1)) {
            dD(YC(), 29, !0);
            var f = a.performance;
            f ? .now && tL(a, c, d, [g => {
                if (V(lp)) uD(b, g);
                else {
                    var h = b.aa,
                        k = zk(qD(b), 1);
                    g = ed(k, 6, Bk, g);
                    Ck(h, g)
                }
            }], new CJ(f), e)
        }
    };
    var yL = class {
        constructor(a, b, c, d, e, f, g) {
            this.l = a;
            this.C = b;
            this.A = c;
            this.D = d;
            this.B = e;
            this.v = {
                Bb: 50
            };
            this.j = f;
            this.m = g
        }
    };

    function zL(a) {
        Qk.kd(b => {
            b.shv = String(a);
            b.mjsv = "m202302090101";
            b.eid = MF(t)
        })
    }

    function AL(a) {
        zL(G(a, 2));
        a = I(a, 6);
        Hd(CF, Xi);
        CF = a
    };

    function BL({
        lf: a,
        og: b
    }) {
        return a || ("dev" === b ? "dev" : "")
    };
    var CL = "undefined" === typeof sttc ? void 0 : sttc;

    function DL(a) {
        var b = Qk;
        try {
            return Hd(a, Wi), new xF(JSON.parse(a))
        } catch (c) {
            b.la(838, c instanceof Error ? c : Error(String(c)), void 0, d => {
                d.jspb = String(a)
            })
        }
        return new xF
    };

    function EL(a) {
        if (a.l) return a.l;
        a.K && a.K(a.m) ? a.l = a.m : a.l = jh(a.m, a.L);
        return a.l ? ? null
    }

    function FL(a) {
        a.v || (a.v = b => {
            try {
                var c = a.I ? a.I(b) : void 0;
                if (c) {
                    var d = c.cd,
                        e = a.G.get(d);
                    if (e) {
                        a.G.delete(d);
                        var f = a.C.get(c.cd);
                        a.C.delete(d);
                        e(f, c.payload)
                    }
                }
            } catch (g) {}
        }, M(a.m, "message", a.v))
    }

    function GL(a, b) {
        if (EL(a))
            if (a.l === a.m) {
                var c = a.H.get("getDataWithCallback");
                c && c(a.l, b)
            } else if ((c = a.A.get("getDataWithCallback")) && c.Sc) {
            FL(a);
            var d = ++a.N;
            a.G.set(d, c.re);
            a.C.set(d, c.ee(b));
            a.l.postMessage(c.Sc(b, d), "*")
        }
    }
    var HL = class extends Hk {
        constructor(a, b, c, d) {
            super();
            this.L = b;
            this.K = c;
            this.I = d;
            this.H = new Map;
            this.N = 0;
            this.A = new Map;
            this.G = new Map;
            this.C = new Map;
            this.v = void 0;
            this.m = a
        }
        j() {
            delete this.l;
            this.H.clear();
            this.A.clear();
            this.G.clear();
            this.C.clear();
            this.v && ($d(this.m, "message", this.v), delete this.v);
            delete this.m;
            delete this.I;
            super.j()
        }
    };
    const IL = (a, b) => {
            (0, a.__uspapi)("getUSPData", 1, (c, d) => {
                b.callback({
                    consentData: c ? ? void 0,
                    Qd: d ? void 0 : 2
                })
            })
        },
        JL = {
            ee: a => a.callback,
            Sc: (a, b) => ({
                __uspapiCall: {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }
            }),
            re: (a, b) => {
                b = b.__uspapiReturn;
                a({
                    consentData: b.returnValue ? ? void 0,
                    Qd: b.success ? void 0 : 2
                })
            }
        };

    function KL(a) {
        let b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            cd: b.__uspapiReturn.callId
        }
    }
    var LL = class extends Hk {
        constructor(a) {
            super();
            this.caller = new HL(a, "__uspapiLocator", b => "function" === typeof b.__uspapi, KL);
            this.caller.H.set("getDataWithCallback", IL);
            this.caller.A.set("getDataWithCallback", JL)
        }
        j() {
            this.caller.xa();
            super.j()
        }
        C(a) {
            let b = {};
            if (EL(this.caller)) {
                var c = Ud(() => {
                    a(b)
                });
                GL(this.caller, {
                    callback: d => {
                        d.Qd || (b = d.consentData);
                        c()
                    }
                });
                setTimeout(c, 500)
            } else a(b)
        }
    };
    var ML = Id(class extends L {
        constructor(a) {
            super(a)
        }
    });
    const NL = (a, b) => {
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, c => {
                c = ML(c);
                b.callback({
                    consentData: c
                })
            })
        },
        OL = {
            ee: a => a.callback,
            Sc: (a, b) => ({
                __fciCall: {
                    callId: b,
                    command: a.command
                }
            }),
            re: (a, b) => {
                a({
                    consentData: b
                })
            }
        };

    function PL(a) {
        a = ML(a.data.__fciReturn);
        return {
            payload: a,
            cd: w(a, 1)
        }
    }
    var QL = class extends Hk {
        constructor(a) {
            super();
            this.l = null;
            this.v = !1;
            this.caller = new HL(a, "googlefcPresent", void 0, PL);
            this.caller.H.set("getDataWithCallback", NL);
            this.caller.A.set("getDataWithCallback", OL)
        }
        j() {
            this.caller.xa();
            super.j()
        }
        m() {
            this.v || (this.l = EL(this.caller), this.v = !0);
            return !!this.l
        }
        H(a) {
            return new Promise(b => {
                this.m() && GL(this.caller, {
                    command: a,
                    callback: c => {
                        b(c.consentData)
                    }
                })
            })
        }
    };

    function RL(a, b) {
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        const c = b.getBoundingClientRect(),
            d = vg(a.j.R() || window);
        if (0 >= c.bottom || c.bottom > d.height || 0 >= c.right || c.left >= d.width) return null;
        var e = SL(a, b, c, a.j.j.elementsFromPoint(fg(c.left + c.width / 2, c.left, c.right - 1), fg(c.bottom - 1 - 2, c.top, c.bottom - 1)), 1, []),
            f = SL(a, b, c, a.j.j.elementsFromPoint(fg(c.left + c.width / 2, c.left, c.right - 1), fg(c.top + 2, c.top, c.bottom - 1)), 2, e.Ha),
            g = SL(a, b, c, a.j.j.elementsFromPoint(fg(c.left + 2, c.left, c.right - 1), fg(c.top + c.height / 2,
                c.top, c.bottom - 1)), 3, [...e.Ha, ...f.Ha]);
        const h = SL(a, b, c, a.j.j.elementsFromPoint(fg(c.right - 1 - 2, c.left, c.right - 1), fg(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.Ha, ...f.Ha, ...g.Ha]);
        var k = TL(a, b, c),
            l = n => rb(a.m, n.overlapType) && rb(a.v, n.overlapDepth) && rb(a.l, n.overlapDetectionPoint);
        e = nb([...e.entries, ...f.entries, ...g.entries, ...h.entries], l);
        l = nb(k, l);
        k = [...e, ...l];
        f = -2 > c.left || c.right > d.width + 2;
        f = 0 < k.length || f;
        g = wg(a.j.j);
        const m = new Bh(c.left, c.top, c.width, c.height);
        e = [...ob(e, n => new Bh(n.elementRect.left,
            n.elementRect.top, n.elementRect.width, n.elementRect.height)), ...Ab(ob(l, n => Dh(m, n.elementRect))), ...nb(Dh(m, new Bh(0, 0, d.width, d.height)), n => 0 <= n.top && n.top + n.height <= d.height)];
        return {
            entries: k,
            isOverlappingOrOutsideViewport: f,
            scrollPosition: {
                scrollX: g.x,
                scrollY: g.y
            },
            target: b,
            targetRect: c,
            viewportSize: {
                width: d.width,
                height: d.height
            },
            overlappedArea: 20 > e.length ? UL(m, e) : VL(c, e)
        }
    }

    function SM(a, b) {
        const c = a.j.R(),
            d = a.j.j;
        return new Promise((e, f) => {
            const g = c.IntersectionObserver;
            if (g)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var h = new g(k => {
                                    const l = new Si,
                                        m = Ri(l, () => RL(a, k));
                                    m && (l.l.length && (m.executionTime = Math.round(Number(l.l[0].duration))), h.disconnect(), e(m))
                                }, TM);
                                h.observe(b)
                            } else f(Error("5"));
            else f(Error("4"));
            else f(Error("3"));
            else f(Error("2"));
            else f(Error("1"))
        })
    }

    function SL(a, b, c, d, e, f) {
        if (0 === c.width || 0 === c.height) return {
            entries: [],
            Ha: []
        };
        const g = [],
            h = [];
        for (let n = 0; n < d.length; n++) {
            const q = d[n];
            if (q === b) continue;
            if (rb(f, q)) continue;
            h.push(q);
            const r = q.getBoundingClientRect();
            if (a.j.contains(q, b)) {
                g.push(UM(a, c, q, r, 1, e));
                continue
            }
            if (a.j.contains(b, q)) {
                g.push(UM(a, c, q, r, 2, e));
                continue
            }
            a: {
                var k = a;
                var l = b,
                    m = q;
                const z = k.j.xf(l, m);
                if (!z) {
                    k = null;
                    break a
                }
                const {
                    suspectAncestor: B,
                    Ta: H
                } = VM(k, l, z, m) || {},
                {
                    suspectAncestor: E,
                    Ta: F
                } = VM(k, m, z, l) || {};k = B && H && E && F ? H <= F ? {
                    suspectAncestor: B,
                    overlapType: WM[H]
                } : {
                    suspectAncestor: E,
                    overlapType: XM[F]
                } : B && H ? {
                    suspectAncestor: B,
                    overlapType: WM[H]
                } : E && F ? {
                    suspectAncestor: E,
                    overlapType: XM[F]
                } : null
            }
            const {
                suspectAncestor: u,
                overlapType: A
            } = k || {};
            u && A ? g.push(UM(a, c, q, r, A, e, u)) : g.push(UM(a, c, q, r, 9, e))
        }
        return {
            entries: g,
            Ha: h
        }
    }

    function TL(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = Sg(b, a.j.R());
                e && "visible" !== e.overflow && ("auto" !== e.overflowY && "scroll" !== e.overflowY && c.bottom > f.bottom + 2 ? d.push(UM(a, c, b, f, 5, 1)) : (e = "auto" === e.overflowX || "scroll" === e.overflowX, !e && c.left < f.left - 2 ? d.push(UM(a, c, b, f, 5, 3)) : !e && c.right > f.right + 2 && d.push(UM(a, c, b, f, 5, 4))))
            }
        }
        return d
    }

    function UL(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a,
                f = 0;
            for (let g = 0; g < b.length && (!(d & 1 << g) || (f++, e = Ch(e, b[g]), e)); g++);
            e && (c = 1 === f % 2 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function VL(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = a.left; d <= a.right; d++)
            for (let e = a.top; e <= a.bottom; e++)
                for (let f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function UM(a, b, c, d, e, f, g) {
        const h = {
            element: c,
            elementRect: d,
            overlapType: e,
            overlapDetectionPoint: f
        };
        if (rb(a.m, e) && rb(a.l, f)) {
            b = new yh(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = YM(a, c)) && Ah(b, a)) c = 4;
            else {
                a = ZM(c, d);
                if (Fb) {
                    e = $h(c, "paddingLeft");
                    f = $h(c, "paddingRight");
                    var k = $h(c, "paddingTop"),
                        l = $h(c, "paddingBottom");
                    e = new yh(k, f, l, e)
                } else e = Th(c, "paddingLeft"), f = Th(c, "paddingRight"), k = Th(c, "paddingTop"), l = Th(c, "paddingBottom"), e = new yh(parseFloat(k), parseFloat(f), parseFloat(l), parseFloat(e));
                Ah(b, new yh(a.top +
                    e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = 3 : (c = ZM(c, d), c = Ah(b, c) ? 2 : 1)
            }
            h.overlapDepth = c
        }
        g && (h.suspectAncestor = g);
        return h
    }

    function VM(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = a.j.R();
        for (f = 0; f < e.length; f++) {
            const h = e[f];
            var g = Sg(h, c);
            if (g) {
                if ("fixed" === g.position) return {
                    suspectAncestor: h,
                    Ta: 1
                };
                if ("sticky" === g.position && a.j.contains(h.parentElement, d)) return {
                    suspectAncestor: h,
                    Ta: 2
                };
                if ("absolute" === g.position) return {
                    suspectAncestor: h,
                    Ta: 3
                };
                if ("none" !== g.cssFloat) {
                    g = h === e[0];
                    const k = $M(a, e.slice(0, f), h);
                    if (g || k) return {
                        suspectAncestor: h,
                        Ta: 4
                    }
                }
            }
        }
        return (a = $M(a, e, b)) ? {
                suspectAncestor: a,
                Ta: 5
            } :
            null
    }

    function $M(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d) return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.j.contains(f, c)) continue;
            const g = f.getBoundingClientRect();
            if (!g) continue;
            const h = Sg(f, a.j.R());
            if (h && d.bottom > g.bottom + 2 && "visible" === h.overflowY) return f
        }
        return null
    }

    function YM(a, b) {
        var c = a.j.j;
        a = c.createRange();
        if (!a) return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: d => /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        });
        for (b = c.nextNode(); c.nextNode(););
        c = c.previousNode();
        if (!b || !c) return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return 0 === a.width || 0 === a.height ? null : new yh(a.top, a.right, a.bottom, a.left)
    }

    function ZM(a, b) {
        if (!Fb || 9 <= Number(Tb)) {
            var c = Th(a, "borderLeftWidth");
            d = Th(a, "borderRightWidth");
            e = Th(a, "borderTopWidth");
            a = Th(a, "borderBottomWidth");
            c = new yh(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        } else {
            c = bi(a, "borderLeft");
            var d = bi(a, "borderRight"),
                e = bi(a, "borderTop");
            a = bi(a, "borderBottom");
            c = new yh(e, d, a, c)
        }
        return new yh(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }
    class aN {
        constructor(a) {
            var b = bN;
            this.j = qg(a);
            this.m = [5, 8, 9];
            this.v = [3, 4];
            this.l = b
        }
    }
    const WM = {
            [1]: 3,
            [4]: 10,
            [3]: 12,
            [2]: 4,
            [5]: 5
        },
        XM = {
            [1]: 6,
            [4]: 11,
            [3]: 13,
            [2]: 7,
            [5]: 8
        };
    nb(Vg({
        oi: 1,
        ri: 2,
        Zj: 3,
        bk: 4,
        dk: 5,
        ji: 6,
        ki: 7,
        ni: 8,
        oj: 9,
        ck: 10,
        li: 11,
        Yj: 12,
        ii: 13
    }), a => !rb([1, 2], a));
    Vg({
        Ch: 1,
        pj: 2,
        Nh: 3,
        ek: 4
    });
    const bN = Vg({
            Dh: 1,
            hk: 2,
            cj: 3,
            Mj: 4
        }),
        TM = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function cN(a, b, c, d) {
        const e = new fv;
        let f = "";
        const g = k => {
            try {
                const l = "object" === typeof k.data ? k.data : JSON.parse(k.data);
                f === l.paw_id && ($d(a, "message", g), l.error ? e.j(Error(l.error)) : e.resolve(d(l)))
            } catch (l) {}
        };
        var h = "function" === typeof a.gmaSdk ? .getQueryInfo ? a.gmaSdk : void 0;
        if (h) return M(a, "message", g), f = c(h), e.promise;
        c = "function" === typeof a.webkit ? .messageHandlers ? .getGmaQueryInfo ? .postMessage || "function" === typeof a.webkit ? .messageHandlers ? .getGmaSig ? .postMessage ? a.webkit.messageHandlers : void 0;
        return c ? (f = String(Math.floor(2147483647 * Tg())), M(a, "message", g), b(c, f), e.promise) : null
    }

    function dN(a) {
        return cN(a, (b, c) => void(b.getGmaQueryInfo ? ? b.getGmaSig) ? .postMessage(c), b => b.getQueryInfo(), b => b.signal)
    };

    function eN(a) {
        if (a.m) return a.m;
        a.m = jh(a.l, "__uspapiLocator");
        return a.m
    }

    function fN(a, b) {
        if ("function" === typeof a.l ? .__uspapi) a = a.l.__uspapi, a("getUSPData", 1, b);
        else if (eN(a)) {
            gN(a);
            const c = ++a.G;
            a.A[c] = b;
            a.m && a.m.postMessage({
                __uspapiCall: {
                    command: "getUSPData",
                    version: 1,
                    callId: c
                }
            }, "*")
        }
    }

    function gN(a) {
        a.v || (a.v = b => {
            try {
                let d = {};
                "string" === typeof b.data ? d = JSON.parse(b.data) : d = b.data;
                var c = d.__uspapiReturn;
                a.A ? .[c.callId](c.returnValue, c.success)
            } catch {}
        }, M(a.l, "message", a.v))
    }
    var hN = class extends Hk {
        constructor(a) {
            super();
            this.l = a;
            this.m = null;
            this.A = {};
            this.G = 0;
            this.v = null
        }
        j() {
            this.v && $d(this.l, "message", this.v);
            super.j()
        }
        C(a) {
            let b = {};
            if ("function" === typeof this.l ? .__uspapi || null != eN(this)) {
                var c = Ud(() => a(b));
                fN(this, (d, e) => {
                    e && (b = d);
                    c()
                });
                setTimeout(c, 500)
            } else a(b)
        }
    };

    function iN(a) {
        a.v || (a.v = b => {
            try {
                const c = ML(b.data.__fciReturn);
                (0, a.G[w(c, 1)])(c)
            } catch (c) {}
        }, M(a.A, "message", a.v))
    }
    var jN = class extends Hk {
        constructor(a) {
            super();
            this.A = a;
            this.v = this.l = null;
            this.G = {};
            this.I = 0;
            this.C = !1
        }
        m() {
            if (!this.C) {
                if (!this.l) {
                    var a = jh(this.A, "googlefcPresent");
                    this.l = a ? a : null
                }
                this.C = !0
            }
            return !!this.l
        }
        H(a) {
            return new Promise(b => {
                if (this.m())
                    if (this.l === this.A) {
                        var c = this.l.googlefc || (this.l.googlefc = {});
                        c.__fci = c.__fci || [];
                        c.__fci.push(a, d => {
                            b(ML(d))
                        })
                    } else iN(this), c = this.I++, this.G[c] = b, this.l.postMessage({
                        __fciCall: {
                            command: a,
                            callId: c
                        }
                    }, "*")
            })
        }
    };
    const kN = (a, b) => {
        try {
            const g = void 0 === I(b, 6) ? !0 : I(b, 6);
            a: switch (nd(b, 4)) {
                case 1:
                    var c = "pt";
                    break a;
                case 2:
                    c = "cr";
                    break a;
                default:
                    c = ""
            }
            var d = new Hf(Ff(nd(b, 2)), G(b, 3), c),
                e = C(b, Bf, 5) ? .j() ? ? "";
            d.zb = e;
            d.j = g;
            d.win = a;
            var f = d.build();
            zf(f)
        } catch {}
    };

    function lN(a, b) {
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? kN(a, b) : M(a, "load", () => void kN(a, b)))
    };

    function mN(a) {
        const b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    }

    function nN(a) {
        if (a === a.top || Mg(a.top)) return Promise.resolve({
            status: 4
        });
        a: {
            try {
                var b = (a.top ? .frames ? ? {}).google_ads_top_frame;
                break a
            } catch (d) {}
            b = null
        }
        if (!b) return Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && mN(a.document.referrer)) return Promise.resolve({
            status: 3
        });
        const c = new fv;
        a = new MessageChannel;
        a.port1.onmessage = d => {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                tb: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    var oN = class extends L {
            constructor(a) {
                super(a)
            }
        },
        pN = Id(oN),
        qN = [1, 3];
    const rN = O `https://securepubads.g.doubleclick.net/static/topics/topics_frame.html`;

    function sN(a) {
        const b = a.google_tag_topics_state ? ? (a.google_tag_topics_state = {});
        return b.messageChannelSendRequestFn ? Promise.resolve(b.messageChannelSendRequestFn) : new Promise(c => {
            function d(h) {
                return g.j(h).then(({
                    data: k
                }) => k)
            }
            const e = Rg("IFRAME");
            e.style.display = "none";
            e.name = "goog_topics_frame";
            e.src = se(rN).toString();
            const f = (new URL(rN.toString())).origin,
                g = oF({
                    destination: a,
                    Ca: e,
                    origin: f,
                    Sa: "goog:gRpYw:doubleclick"
                });
            g.j("goog:topics:frame:handshake:ack").then(({
                data: h
            }) => {
                "goog:topics:frame:handshake:ack" ===
                h && c(d)
            });
            b.messageChannelSendRequestFn = d;
            a.document.documentElement.appendChild(e)
        })
    }

    function tN(a, b, c) {
        var d = Qk;
        const {
            Ob: e,
            Nb: f
        } = uN(c);
        b = b.google_tag_topics_state ? ? (b.google_tag_topics_state = {});
        b.getTopicsPromise || (a = a({
                message: "goog:topics:frame:get:topics",
                skipTopicsObservation: !1
            }).then(g => {
                let h = f;
                if (g instanceof Uint8Array) h || (h = !(e instanceof Uint8Array && yb(g, e)));
                else if (Yi()(g)) h || (h = g !== e);
                else return d.la(989, Error(JSON.stringify(g))), 7;
                if (h && c) try {
                    var k = new oN;
                    var l = x(k, 2, Ji());
                    g instanceof Uint8Array ? $c(l, 1, qN, Cc(g, !1)) : $c(l, 3, qN, g);
                    c.setItem("goog:cached:topics", Cd(l))
                } catch {}
                return g
            }),
            b.getTopicsPromise = a);
        return e && !f ? Promise.resolve(e) : b.getTopicsPromise
    }

    function uN(a) {
        if (!a) return {
            Ob: null,
            Nb: !0
        };
        try {
            const n = a.getItem("goog:cached:topics");
            if (!n) return {
                Ob: null,
                Nb: !0
            };
            const q = pN(n);
            let r;
            const u = ad(q, qN);
            switch (u) {
                case 0:
                    r = null;
                    break;
                case 1:
                    var b, c = 1 === ad(q, qN) ? 1 : -1;
                    a = q;
                    const z = w(a, c),
                        B = Cc(z, !0);
                    null != B && B !== z && Qc(a, c, B);
                    var d = B;
                    var e = null == d ? mc() : d;
                    lc(ic);
                    var f = e.M;
                    if (null == f || gc(f)) var g = f;
                    else {
                        if ("string" === typeof f)
                            if (cc) {
                                c = f;
                                ec.test(c) && (c = c.replace(ec, fc));
                                var h = atob(c);
                                var k = new Uint8Array(h.length);
                                for (c = 0; c < h.length; c++) k[c] = h.charCodeAt(c);
                                var l = k
                            } else l = ac(f);
                        else l = null;
                        g = l
                    }
                    var m = g;
                    r = (b = null == m ? m : e.M = m) ? new Uint8Array(b) : hc || (hc = new Uint8Array(0));
                    break;
                case 3:
                    r = nd(q, 3 === ad(q, qN) ? 3 : -1);
                    break;
                default:
                    nf(u, void 0)
            }
            const A = jd(q, 2) + 6048E5 < Ji();
            return {
                Ob: r,
                Nb: A
            }
        } catch {
            return {
                Ob: null,
                Nb: !0
            }
        }
    };

    function vN(a) {
        a = a.innerInsElement;
        if (!a) throw Error("no_wrapper_element_in_loader_provided_slot");
        return a
    }
    async function wN({
        ga: a,
        ea: b,
        Za: c,
        slot: d
    }) {
        const e = d.vars,
            f = Pg(d.pubWin),
            g = vN(d),
            h = new WG({
                J: f,
                pubWin: d.pubWin,
                F: e,
                ga: a,
                ea: b,
                Za: c,
                X: g
            });
        h.G = Date.now();
        jl(1, [h.F]);
        Sk(1032, () => {
            if (f && V(jq)) {
                var k = h.F;
                cD(YC(), 32, !1) || (dD(YC(), 32, !0), HI(f, "sa" === k.google_loader_used ? 5 : 9))
            }
        });
        try {
            await xN(h)
        } catch (k) {
            if (!Vk(159, k)) throw k;
        }
        Sk(639, () => {
            {
                var k = h.F;
                const m = h.J;
                if (m && 1 === k.google_responsive_auto_format && !0 === k.google_full_width_responsive_allowed) {
                    var l;
                    (l = (l = m.document.getElementById(k.google_async_iframe_id +
                        (V(Mp) ? "_host" : ""))) ? Gg(l, "INS", "adsbygoogle") : null) ? (k = new VG(m, l, k), k.j = t.setInterval(Ba(k.v, k), 500), k.v(), k = !0) : k = !1
                } else k = !1
            }
            return k
        });
        Xk(h.pubWin, "affa", k => {
            Sk(1008, () => {
                e.google_ad_client && f && !fb() && yN(f, e, BJ(k.config), h.l, G(a, 8))
            }, zN)
        });
        e.google_ad_client && f && !fb() && f ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/) && yN(f, e, AN(), h.l, G(a, 8));
        return h
    }

    function zN(a) {
        a.e = `${W(yq)}`
    }

    function yN(a, b, c, d, e) {
        if (C(c, Yf, 1) || V(Mq)) {
            var f = P(vD);
            var g = b.google_page_url;
            g = "string" === typeof g ? g : "";
            var h = "on" === b.google_adtest;
            const m = C(c, tF, 2);
            try {
                const n = a ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/);
                if (n) {
                    var k = decodeURIComponent(n[1]);
                    var l = Zf(k)
                } else l = null
            } catch (n) {
                l = null
            }
            l || (l = V(pq) ? C(c, Yf, 1) ? ? null : null);
            c = new yL(l, g, !(!m ? .j() || !(488 > Q(a).clientWidth) && m ? .v()), e, {
                xg: V(Rq) ? W(Op) : W(wq),
                Bb: 300,
                jd: 2,
                Ac: 5,
                eb: -1
            }, new oL({
                kb: V(Rq) ? W(Qp) : W(yq),
                zc: W(Np)
            }), h);
            xL(a, f, c, b.google_ad_client,
                d)
        }
    }

    function AN() {
        const a = new AJ;
        if (V(oq)) {
            var b = new tF;
            b = rd(b, 5, !0);
            b = rd(b, 8, !0);
            dd(a, 2, b)
        }
        return a
    }

    function xN(a) {
        if (/_sdo/.test(a.F.google_ad_format)) return Promise.resolve();
        LF(13);
        LF(11);
        var b = P(er).v(Xp.j, Xp.defaultValue);
        if (b.length) {
            var c = document;
            if (b.length && c.head)
                for (var d of b)
                    if ((b = d) && c.head) {
                        var e = Rg("META");
                        c.head.appendChild(e);
                        e.httpEquiv = "origin-trial";
                        e.content = b
                    }
        }
        c = YC();
        (d = cD(c, 23, !1)) || dD(c, 23, !0);
        if (!d) {
            c = a.F.google_ad_client;
            d = a.ga;
            c = void 0 !== Sc(d, tF, 13 === ad(d, yF) ? 13 : -1) ? C(qd(d, tF, 13, yF), eE, 2) : yb(qd(d, vF, 14, yF) ? .j() ? ? [], [c]) ? C(C(qd(d, vF, 14, yF), tF, 2), eE, 2) : new eE;
            c = new fE(a.pubWin,
                a.F.google_ad_client, c, I(a.ga, 6));
            c.l = !0;
            b = C(c.A, Do, 1);
            if (c.l && (d = c.j, c.v && !rz(b) ? (e = new TD, e = x(e, 1, 1)) : e = null, e)) {
                e = Cd(e);
                try {
                    d.localStorage.setItem("google_auto_fc_cmp_setting", e)
                } catch (f) {}
            }
            b && sz(new tz(c.j, new Kz(c.j, c.m), b, new lw(c.j)))
        }
        c = !Fh() && !eb();
        return !c || c && !BN(a) ? CN(a) : Promise.resolve()
    }

    function DN(a, b, c = !1) {
        b = sF(a.J, b);
        const d = Kh() || or(a.pubWin.top);
        if (!b || -12245933 === b.y || -12245933 === d.width || -12245933 === d.height || !d.height) return 0;
        let e = 0;
        try {
            const f = a.pubWin.top;
            e = qr(f.document, f).y
        } catch (f) {
            return 0
        }
        a = e + d.height;
        return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0
    }

    function BN(a) {
        return EN(a) || FN(a)
    }

    function EN(a) {
        const b = a.F;
        if (!b.google_pause_ad_requests) return !1;
        const c = t.setTimeout(() => {
                Uk("abg:cmppar", {
                    client: a.F.google_ad_client,
                    url: a.F.google_page_url
                })
            }, 1E4),
            d = Tk(450, () => {
                b.google_pause_ad_requests = !1;
                t.clearTimeout(c);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
                BN(a) || CN(a)
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }

    function FN(a) {
        const b = a.pubWin.document,
            c = GN();
        if (0 > c.hidden && 0 > c.visible) return !1;
        const d = a.X,
            e = oH(b);
        if (!e) return !1;
        if (!pH(b)) return HN(a, c.visible, d);
        const f = 3 === nH(b);
        if (DN(a, d) <= c.hidden && !f) return !1;
        let g = Tk(332, () => {
            !pH(b) && g && ($d(b, e, g), HN(a, c.visible, d) || CN(a), g = null)
        });
        return M(b, e, g)
    }

    function GN() {
        const a = {
            hidden: 0,
            visible: 3
        };
        t.IntersectionObserver || (a.visible = -1);
        Jg() && (a.visible *= 2);
        return a
    }

    function HN(a, b, c) {
        if (!c || 0 > b) return !1;
        var d = a.F;
        if (!Ll(d.google_reactive_ad_format) && (qG(d) || d.google_reactive_ads_config) || !rr(c) || DN(a, c) <= b) return !1;
        var e = YC(),
            f = cD(e, 8, {});
        e = cD(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        const g = !!a.pubWin.google_apltlad;
        if (!f[d] && !e[d] && !g) return !1;
        f = new Promise(h => {
            const k = new t.IntersectionObserver((l, m) => {
                mb(l, n => {
                    0 >= n.intersectionRatio || (m.unobserve(n.target), h(void 0))
                })
            }, {
                rootMargin: `${100*b}%`
            });
            a.H = k;
            k.observe(c)
        });
        e = new Promise(h => {
            c.addEventListener("adsbygoogle-close-to-visible-event",
                () => {
                    h(void 0)
                })
        });
        ia(Promise, "any").call(Promise, [f, e]).then(() => {
            Sk(294, () => {
                CN(a)
            })
        });
        return !0
    }

    function CN(a) {
        Sk(326, () => {
            if (1 === ii(a.F)) {
                var c = V(kq),
                    d = c || V(iq),
                    e = a.pubWin;
                if (d && e === a.J) {
                    var f = new dl;
                    d = new el;
                    f.setCorrelator(sh(a.pubWin));
                    var g = MF(a.pubWin);
                    md(f, 5, g);
                    sd(f, 2, 1);
                    g = dd(d, 1, f);
                    f = new cl;
                    f = rd(f, 10, !0);
                    var h = V(bq);
                    f = rd(f, 8, h);
                    h = V(cq);
                    f = rd(f, 12, h);
                    h = V(fq);
                    f = rd(f, 7, h);
                    h = V(eq);
                    f = rd(f, 13, h);
                    dd(g, 2, f);
                    e.google_rum_config = d.toJSON();
                    Qg(e.document, I(a.ga, 9) && c ? a.ea.ag : a.ea.bg)
                } else Qi(Rk)
            }
        });
        a.F.google_ad_channel = IN(a, a.F.google_ad_channel);
        a.F.google_tag_partner = JN(a, a.F.google_tag_partner);
        KN(a);
        LN(a);
        const b = a.F.google_start_time;
        "number" === typeof b && (ul = b, a.F.google_start_time = null);
        rF(a);
        MN(a);
        gD() && hE({
            win: a.pubWin,
            webPropertyCode: a.F.google_ad_client,
            vb: a.ea.vb
        });
        qG(a.F) && (ny() && (a.F.google_adtest = a.F.google_adtest || "on"), a.F.google_pgb_reactive = a.F.google_pgb_reactive || 3);
        NN(a.J);
        if ("function" === typeof a.pubWin.document.browsingTopics && GF("browsing-topics", a.pubWin.document) || V(Rp)) try {
            a.B = sN(a.pubWin)
        } catch (c) {
            Vk(984, c)
        }
        return ON(a)
    }

    function MN(a) {
        a.J && (uG(a.J, a.ea.pf), sG(a.J.location) && DG(a.J, {
            enable_page_level_ads: {
                pltais: !0
            },
            google_ad_client: a.F.google_ad_client
        }))
    }

    function IN(a, b) {
        return (b ? [b] : []).concat(WC(a.F).ad_channels || []).join("+")
    }

    function JN(a, b) {
        return (b ? [b] : []).concat(WC(a.F).tag_partners || []).join("+")
    }

    function PN(a) {
        const b = Rg("IFRAME");
        Ug(a, (c, d) => {
            null != c && b.setAttribute(d, c)
        });
        return b
    }

    function QN(a, b, c) {
        return 9 === a.F.google_reactive_ad_format && Gg(a.X, null, "fsi_container") ? (a.X.appendChild(b), Promise.resolve(b)) : BG(a.ea.xe, 525, d => {
            a.X.appendChild(b);
            d.createAdSlot(a.J, a.F, b, a.X.parentElement, XD(c, a.pubWin));
            return b
        })
    }

    function RN(a, b, c) {
        lN(a.pubWin, rd(Df(sd(sd(Cf(new Ef, Af(new Bf, String(sh(a.pubWin)))), 4, 1), 2, 1), G(a.ga, 2)), 6, !0));
        const d = a.J;
        a.F.google_acr && a.F.google_acr(b);
        M(b, "load", () => {
            b && b.setAttribute("data-load-complete", !0);
            const f = d ? WC(d).enable_overlap_observer || !1 : !1;
            (a.F.ovlp || f) && d && d === a.pubWin && SN(d, a, a.X, b)
        });
        var e = f => {
            f && a.m.push(() => {
                f.xa()
            })
        };
        TN(a, b);
        UN(a, b);
        !d || qG(a.F) && !FG(a.F) || (a.X || Uk("shadowroot_nullcheck", {
            "var": "sth_init",
            ctxSize: Object.keys(a).length,
            isExp: V(Mp) ? 1 : 0
        }, .05), e(new aI(d,
            b, a.F)), e(new kH(a, b)), e(d.IntersectionObserver ? null : new mH(d, b, a.X)));
        d && (e(new eH(d, b)), a.m.push(PG(d, a.F)), P(UG).init(d), a.m.push(aH(d, a.X, b)));
        b && b.setAttribute("data-google-container-id", c);
        c = a.F.iaaso;
        if (null != c) {
            e = a.X;
            const f = e.parentElement;
            (f && Er.test(f.className) ? f : e).setAttribute("data-auto-ad-size", c)
        }
        c = a.X;
        c.setAttribute("tabindex", "0");
        c.setAttribute("title", "Advertisement");
        c.setAttribute("aria-label", "Advertisement");
        VN(a)
    }

    function TN(a, b) {
        const c = a.pubWin,
            d = a.F.google_ad_client,
            e = fD();
        let f = null;
        const g = Xk(c, "pvt", (h, k) => {
            "string" === typeof h.token && k.source === b.contentWindow && (f = h.token, g(), e[d] = e[d] || [], e[d].push(f), 100 < e[d].length && e[d].shift())
        });
        a.m.push(g)
    }

    function WN(a, b) {
        var c = NF(a, "__gpi_opt_out", b.l);
        c && (c = Nf(Mf(Lf(Kf(new Of, c), 2147483647), "/"), b.pubWin.location.hostname), OF(a, "__gpi_opt_out", c, b.l))
    }

    function UN(a, b) {
        const c = Xk(a.pubWin, "gpi-uoo", (d, e) => {
            if (e.source === b.contentWindow) {
                e = Nf(Mf(Lf(Kf(new Of, d.userOptOut ? "1" : "0"), 2147483647), "/"), a.pubWin.location.hostname);
                var f = new RF(a.pubWin);
                OF(f, "__gpi_opt_out", e, a.l);
                if (d.userOptOut || d.clearAdsData) PF(f, "__gads", a.l), PF(f, "__gpi", a.l)
            }
        });
        a.m.push(c)
    }

    function VN(a) {
        const b = Fh(a.pubWin);
        if (b)
            if ("AMP-STICKY-AD" === b.container) {
                const c = d => {
                    "fill_sticky" === d.data && b.renderStart && b.renderStart()
                };
                M(a.pubWin, "message", Qk.ta(616, c));
                a.m.push(() => {
                    $d(a.pubWin, "message", c)
                })
            } else b.renderStart && b.renderStart()
    }

    function SN(a, b, c, d) {
        SM(new aN(a), c).then(e => {
            jl(8, [e]);
            return e
        }).then(e => {
            const f = c.parentElement;
            (f && Er.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", e.isOverlappingOrOutsideViewport);
            return e
        }).then(e => {
            const f = b.F.armr || "",
                g = e.executionTime || "",
                h = null == b.F.iaaso ? "" : Number(b.F.iaaso),
                k = Number(e.isOverlappingOrOutsideViewport),
                l = ob(e.entries, z => `${z.overlapType}:${z.overlapDepth}:${z.overlapDetectionPoint}`),
                m = Number(e.overlappedArea.toFixed(2)),
                n = d.dataset.googleQueryId || "",
                q =
                m * e.targetRect.width * e.targetRect.height,
                r = e.scrollPosition.scrollX + "," + e.scrollPosition.scrollY,
                u = ki(e.target),
                A = [e.targetRect.left, e.targetRect.top, e.targetRect.right, e.targetRect.bottom].join();
            e = e.viewportSize.width + "x" + e.viewportSize.height;
            Uk("ovlp", {
                adf: b.F.google_ad_dom_fingerprint,
                armr: f,
                client: b.F.google_ad_client,
                eid: MF(b.F),
                et: g,
                fwrattr: b.F.google_full_width_responsive,
                iaaso: h,
                io: k,
                saldr: b.F.google_loader_used,
                oa: m,
                oe: l.join(","),
                qid: n,
                rafmt: b.F.google_responsive_auto_format,
                roa: q,
                slot: b.F.google_ad_slot,
                sp: r,
                tgt: u,
                tr: A,
                url: b.F.google_page_url,
                vp: e,
                pvc: sh(a)
            }, 1)
        }).catch(e => {
            jl(8, ["Error:", e.message, c]);
            Uk("ovlp-err", {
                err: e.message
            }, 1)
        })
    }

    function XN(a, b) {
        b.allow = b.allow && 0 < b.allow.length ? b.allow + ("; " + a) : a
    }

    function YN(a, b, c, d) {
        var e = a.F;
        const f = e.google_async_iframe_id,
            g = e.google_ad_width,
            h = e.google_ad_height;
        var k = GG(e),
            l = {
                id: f,
                name: f
            };
        l.style = k ? [`width:${g}px !IMPORTANT`, `height:${h}px !IMPORTANT`].join(";") : "left:0;position:absolute;top:0;border:0;" + `width:${g}px;` + `height:${h}px;`;
        var m = hh();
        if (m["allow-top-navigation-by-user-activation"] && m["allow-popups-to-escape-sandbox"]) {
            m = b;
            if (b = "fsb=" + encodeURIComponent("1")) {
                var n = m.indexOf("#");
                0 > n && (n = m.length);
                var q = m.indexOf("?");
                if (0 > q || q > n) {
                    q = n;
                    var r =
                        ""
                } else r = m.substring(q + 1, n);
                m = [m.slice(0, q), r, m.slice(n)];
                n = m[1];
                m[1] = b ? n ? n + "&" + b : b : n;
                b = m[0] + (m[1] ? "?" + m[1] : "") + m[2]
            } else b = m;
            l.sandbox = gh().join(" ")
        }
        V(op) && !1 === e.google_video_play_muted && XN("autoplay", l);
        n = b;
        b = ZN(b);
        q = c ? b.replace(/&ea=[^&]*/, "") + "&ea=0" : b;
        null != g && (l.width = String(g));
        null != h && (l.height = String(h));
        l.frameborder = "0";
        l.marginwidth = "0";
        l.marginheight = "0";
        l.vspace = "0";
        l.hspace = "0";
        l.allowtransparency = "true";
        l.scrolling = "no";
        m = "";
        if (c) {
            m = 10;
            for (q = ""; 0 < m--;) q += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(62 *
                Math.random()));
            m = q;
            b = Wk(b, m);
            Wk(n, m)
        } else b = q;
        e.dash && (l.srcdoc = e.dash);
        n = V(NI(window) ? Xq : Wq);
        q = V(Zq);
        n = OI(a.pubWin, n, q);
        q = e.google_trust_token_additional_signing_data;
        n && PI(n) && (n = RI(n, q)) && (l.trustToken = JSON.stringify(n));
        a.pubWin.document.featurePolicy ? .features().includes("attribution-reporting") && XN("attribution-reporting", l);
        V(Yp) && (n = a.pubWin, void 0 !== n.credentialless && (V(Zp) || n.crossOriginIsolated) && (l.credentialless = "true"));
        if (k) {
            l.src = b;
            var u = PN(l);
            u = QN(a, u, d)
        } else {
            d = {};
            d.dtd = ZG((new Date).getTime(),
                ul);
            d = ei(d, b);
            l.src = d;
            d = a.pubWin;
            d = d == d.top;
            l = PN(l);
            d && a.m.push(Mh(a.pubWin, l));
            d = (d = a.F.google_shadow_mode) && "string" === typeof d && "open" === d ? "open" : "closed";
            a: {
                k = a.X;
                try {
                    if (V(Mp) && k) {
                        u = k.attachShadow({
                            mode: d
                        });
                        break a
                    }
                } catch (A) {}
                u = void 0
            }
            a.X.style.visibility = "visible";
            u = u || a.X;
            for (d = l; k = u.firstChild;) u.removeChild(k);
            u.appendChild(d);
            u = Promise.resolve(l)
        }
        c && (c = a.ea.yg, e = {
                id: f,
                url: b,
                width: g,
                height: h,
                Sa: m,
                Zf: a.pubWin,
                Ve: f,
                zk: "google_expandable_ad_slot" + ii(e),
                If: c.toString(),
                Oc: a.pubWin
            }, e = !e.id || !e.url ||
            0 >= e.width || 0 >= e.height || !e.Sa || !e.Oc ? void 0 : Xk(e.Oc, "ct", Ca($k, e, c)), e && a.m.push(e));
        return u
    }

    function ZN(a) {
        var b = W(v("Edge") ? Cp : Hp);
        var c = a;
        c.length > b && (c = c.substring(0, b - 8), c = c.replace(/%\w?$/, ""), c = c.replace(/&[^=]*=?$/, ""), c += "&trunc=1");
        if (c !== a) {
            b -= 8;
            let d = a.lastIndexOf("&", b); - 1 === d && (d = a.lastIndexOf("?", b));
            Uk("trn", {
                ol: a.length,
                tr: -1 === d ? "" : a.substring(d + 1),
                url: a
            }, .01)
        }
        return c
    }
    async function $N(a) {
        var b = a.F,
            c = a.pubWin,
            d = a.l;
        y(d, 5) && WN(new RF(a.pubWin), a);
        var e = XD(d, a.pubWin);
        if (!y(d, 5)) return Uk("afc_noc_req", {}, W(mp)), Promise.resolve();
        y(d, 5) && VF(d, a.pubWin, a.F.google_ad_client);
        var f = a.F.google_reactive_ads_config;
        f && (AG(a.J, f), HG(f, a, XD(d)), f = f.page_level_pubvars, ta(f) && he(a.F, f));
        y(d, 5) && await aO();
        V(Rp) && a.B && y(d, 5) && !cD(YC(), 34, !1) && (dD(YC(), 34, !0), f = a.B.then(g => {
            g({
                message: "goog:spam:client_age",
                pvsid: sh(a.pubWin)
            })
        }), Qk.Aa(1069, f));
        if (V(Vp) && a.B)
            if (bO(a)) {
                a.v = 1;
                const g = XD(a.l, a.pubWin);
                f = a.B.then(async k => {
                    await tN(k, a.pubWin, g).then(l => {
                        a.v = l
                    })
                });
                const h = W(Up);
                0 < h ? await Promise.race([f, wh(h)]) : await f
            } else a.v = 5;
        if (!QI(a.pubWin, DF(), G(a.ga, 8))) {
            const g = W(cr);
            f = c.google_trust_token_operation_promise;
            0 < g && f && await Promise.race([f, new Promise(h => void setTimeout(() => {
                h(void 0)
            }, g))])
        }
        f = "";
        GG(b) ? (f = a.ea.zg.toString() + "#" + dJ(b), lJ(b, YC()), cO(b)) : (5 === b.google_pgb_reactive && b.google_reactive_ads_config || !rG(b) || pG(c, b, e)) && cO(b) && (f = aJ(a, d));
        jl(2, [b, f]);
        if (!f) return Promise.resolve();
        b.google_async_iframe_id || hi(c);
        e = ii(b);
        b = a.pubWin === a.J ? "a!" + e.toString(36) : `${e.toString(36)}.${Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Da()).toString(36)}`;
        c = 0 < DN(a, a.X, !0);
        e = {
            ifi: e,
            uci: b
        };
        c && (c = YC(), e.btvi = cD(c, 21, 1), eD(c, 21));
        f = ei(e, f);
        d = YN(a, f, 0 === a.A, d);
        f = ZN(f);
        a.F.rpe && VH(a.pubWin, a.X, {
            height: a.F.google_ad_height,
            rd: "force",
            Bd: !0,
            hg: !0,
            wc: a.F.google_ad_client
        });
        d = await d;
        try {
            RN(a, d, b)
        } catch (g) {
            Vk(223, g)
        }
    }

    function aO() {
        return (hb() ? 0 <= ab(11) : gb() && 0 <= ab(65)) ? new Promise(a => {
            DI(a.bind(null, !0))
        }) : (DI(null), Promise.resolve(!1))
    }

    function dO(a) {
        const b = V(mq) ? new LL(a) : new hN(a);
        return new Promise(c => {
            b.C(d => {
                d && "string" === typeof d.uspString ? c(d.uspString) : c(null)
            })
        })
    }

    function eO(a) {
        var b = ih(t.top, "googlefcPresent");
        t.googlefc && !b && Uk("adsense_fc_has_namespace_but_no_iframes", {
            publisherId: a
        }, 1)
    }

    function fO(a) {
        return a.m() ? a.H("loaded") : Promise.resolve(null)
    }

    function gO(a, b) {
        const c = b.qg;
        b = b.uspString;
        c ? XG(a, c) : $D(a, !0);
        b && x(a, 1, b)
    }

    function hO(a) {
        const b = W(jp);
        if (0 >= b) return null;
        const c = Ji(),
            d = dN(a.pubWin);
        if (!d) return null;
        a.C = "0";
        return Promise.race([d, wh(b, "0")]).then(e => {
            Uk("adsense_paw", {
                time: Ji() - c
            });
            e ? .length > W(ip) ? Vk(809, Error(`ML:${e.length}`)) : a.C = e
        }).catch(e => {
            Vk(809, e)
        })
    }

    function iO(a) {
        const b = Ji();
        return Promise.race([Sk(832, () => nN(a)), wh(200)]).then(c => {
            Uk("afc_etu", {
                etus: c ? .status ? ? 100,
                sig: Ji() - b,
                tms: 200
            });
            return c ? .tb
        })
    }

    function jO(a) {
        var b = W(np);
        return Promise.race([Tk(779, () => {
            const c = V(NI(window) ? Xq : Wq),
                d = V(Zq);
            return XI(new YI(a, c, d))
        })(), wh(b)])
    }
    async function kO(a) {
        const b = hO(a),
            c = Sk(868, () => iO(a.pubWin));
        zI(G(a.ga, 8));
        YE(a.pubWin);
        eO(a.F.google_ad_client);
        var d = V(lq) ? new QL(a.pubWin) : new jN(a.pubWin);
        await fO(d);
        a.l = new aE;
        d = [YG(a), dO(a.pubWin)];
        d = await Promise.all(d);
        gO(a.l, {
            qg: d[0],
            uspString: d[1]
        });
        QI(a.pubWin, DF(), G(a.ga, 8)) && (d = jO(!!y(a.l, 5)), V(br) ? Qk.Aa(962, d) : await d);
        await b;
        a.tb = await c || "";
        await $N(a)
    }

    function bO(a) {
        const b = a.l;
        a = a.F;
        return !a.google_restrict_data_processing && 1 !== a.google_tag_for_under_age_of_consent && 1 !== a.google_tag_for_child_directed_treatment && !!y(b, 5) && !b.j() && !hD() && !y(b, 9)
    }

    function ON(a) {
        var b = a.pubWin.document,
            c = a.F;
        const d = c.google_ad_width,
            e = c.google_ad_height;
        let f = 0;
        try {
            !1 === c.google_allow_expandable_ads && (f |= 1);
            if (!b.body || isNaN(c.google_ad_height) || isNaN(c.google_ad_width) || !/^http/.test(b.location.protocol)) f |= 2; {
                c = navigator;
                const l = c.userAgent,
                    m = c.platform,
                    n = c.product;
                if (!/Win|Mac|Linux|iPad|iPod|iPhone/.test(m) && /^Opera/.test(l)) var g = !1;
                else if (/Win/.test(m) && /Trident/.test(l) && 11 <= b.documentMode) g = !0;
                else {
                    var h = (/WebKit\/(\d+)/.exec(l) || [0, 0])[1],
                        k = (/rv:(\d+\.\d+)/.exec(l) || [0, 0])[1];
                    g = !h && "Gecko" === n && 27 <= k && !/ rv: 1\.8([^.] |\.0) /.test(l) || 536 <= h ? !0 : !1
                }
            }
            g || (f |= 4);
            ur(a.pubWin, d, e) && (f |= 2)
        } catch (l) {
            f |= 8
        }
        a.A = f;
        0 === a.A || (a.F.google_allow_expandable_ads = !1);
        xh(a.pubWin) !== a.pubWin && (a.j |= 4);
        3 === nH(a.pubWin.document) && (a.j |= 32);
        if (b = a.J) b = a.J, b = !(Q(b).scrollWidth <= Q(b).clientWidth);
        b && (a.j |= 1024);
        a.pubWin.Prototype ? .Version && (a.j |= 16384);
        a.F.google_loader_features_used && (a.j |= a.F.google_loader_features_used);
        a.D = 2;
        return kO(a)
    }

    function cO(a) {
        const b = YC(),
            c = a.google_ad_section;
        qG(a) && eD(b, 15);
        if (ni(a)) {
            if (100 < eD(b, 5)) return !1
        } else if (100 < eD(b, 6) - cD(b, 15, 0) && "" === c) return !1;
        return !0
    }

    function KN(a) {
        const b = a.J;
        if (b && !WC(b).ads_density_stats_processed && !Fh(b) && (WC(b).ads_density_stats_processed = !0, V(Ip) || .01 > Tg())) {
            const c = () => {
                if (b) {
                    var d = YB(TB(b), a.F.google_ad_client, b.location.hostname, MF(a.F).split(","));
                    Uk("ama_stats", d, 1)
                }
            };
            vh(b, () => {
                t.setTimeout(c, 1E3)
            })
        }
    }

    function NN(a) {
        a && !WC(a).host_pinged_back && (WC(a).host_pinged_back = !0, Uk("abg_host", {
            host: a.location.host
        }, .01))
    }

    function LN(a) {
        const b = a.pubWin;
        if (b && !WC(b).menu_analytics_processed && (WC(b).menu_analytics_processed = !0, V(Ep))) {
            const c = () => {
                var d = "function" !== typeof b.navigator.sendBeacon ? null : new tE(b);
                if (null === d) var e = null;
                else e = new sE(b), d = new qE(d, a.F.google_ad_client, b.location.hostname), e = new pE(e, d);
                e ? .Le()
            };
            vh(b, () => {
                t.setTimeout(c, 1E3)
            })
        }
    };
    (function(a, b, c) {
        Sk(843, () => {
            if (!t.google_sa_impl) {
                var d = DL(a);
                AL(d);
                jl(16, [3, d.toJSON()]);
                var e = BL({
                        lf: b,
                        og: G(d, 2)
                    }),
                    f = c(e, d);
                t.google_sa_impl = h => wN({
                    ga: d,
                    ea: f,
                    Za: e,
                    slot: h
                });
                JF(FF(t));
                t.google_process_slots ? .();
                var g = (t.Prototype || {}).Version;
                null != g && Uk("prtpjs", {
                    version: g
                })
            }
        })
    })(CL, "m202302090101", function(a, b) {
        const c = 2012 < hd(b, 1) ? `_fy${hd(b,1)}` : "",
            d = G(b, 3);
        b = G(b, 2);
        return {
            bg: O `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum${c}.js`,
            ag: O `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum_debug${c}.js`,
            xe: O `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/reactive_library${c}.js`,
            pf: O `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/debug_card_library${c}.js`,
            yg: O `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/creativetoolset/xpc_expansion_embed.js`,
            zg: O `https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup.html`,
            Gb: O `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`,
            vb: O `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/gallerify${c}.js`
        }
    });
}).call(this, "[2021,\"r20230213\",\"r20110914\",1,null,1,null,\".google.nl\",null,null,null,null,[null,[]],null,null,null,null,-1,[44759927,44759842,44759876]]");