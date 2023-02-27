(function() {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var m = this || self;

    function aa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ba(a, b, c) {
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

    function n(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? n = aa : n = ba;
        return n.apply(null, arguments)
    };

    function ca(a) {
        var b;
        a: {
            if (b = m.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return -1 != b.indexOf(a)
    };

    function p(a) {
        p[" "](a);
        return a
    }
    p[" "] = function() {};
    var da = {},
        q = null;
    var ea = "undefined" !== typeof Uint8Array;
    const fa = !(ca("Trident") || ca("MSIE")) && "function" === typeof m.btoa;
    const r = Symbol();

    function ha(a, b) {
        if (r) return a[r] |= b;
        if (void 0 !== a.s) return a.s |= b;
        Object.defineProperties(a, {
            s: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    }

    function ma(a) {
        let b;
        r ? b = a[r] : b = a.s;
        return null == b ? 0 : b
    }

    function t(a, b) {
        r ? a[r] = b : void 0 !== a.s ? a.s = b : Object.defineProperties(a, {
            s: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    };
    var na = {};

    function u(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    const oa = [];
    t(oa, 23);
    Object.freeze(oa);

    function pa(a) {
        var b = a.length;
        (b = b ? a[b - 1] : void 0) && u(b) ? b.g = 1 : a.push({
            g: 1
        })
    };

    function A(a, b) {
        return -1 === b ? null : b >= a.m ? a.j ? a.j[b] : void 0 : a.i[b + a.l]
    }

    function qa(a) {
        var b = A(a, 13);
        var c = null == b ? b : "number" === typeof b || "NaN" === b || "Infinity" === b || "-Infinity" === b ? Number(b) : void 0;
        null != c && c !== b && (a.o && (a.o = void 0), 13 >= a.m ? (b = a.m + a.l, (a.j || (a.j = a.i[b] = {}))[13] = c) : (a.i[13 + a.l] = c, (a = a.j) && 13 in a && delete a[13]));
        return c
    }

    function B(a) {
        return C(A(a, 12), 0)
    }

    function C(a, b) {
        return null == a ? b : a
    }

    function G(a, b) {
        return C(A(a, b), "")
    }

    function H(a, b) {
        a = A(a, b);
        return C(null == a ? a : !!a, !1)
    };
    let I;

    function ra(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (0 !== (ma(a) & 128)) return a = Array.prototype.slice.call(a), pa(a), a
                    } else if (ea && null != a && a instanceof Uint8Array) {
                    if (fa) {
                        for (var b = ""; 10240 < a.length;) b += String.fromCharCode.apply(null, a.subarray(0, 10240)), a = a.subarray(10240);
                        b += String.fromCharCode.apply(null, a);
                        a = btoa(b)
                    } else {
                        void 0 === b && (b = 0);
                        if (!q) {
                            q = {};
                            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
                                    d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                                var f = c.concat(d[e].split(""));
                                da[e] = f;
                                for (var g = 0; g < f.length; g++) {
                                    var k = f[g];
                                    void 0 === q[k] && (q[k] = g)
                                }
                            }
                        }
                        b = da[b];
                        c = Array(Math.floor(a.length / 3));
                        d = b[64] || "";
                        for (e = f = 0; f < a.length - 2; f += 3) {
                            var l = a[f],
                                h = a[f + 1];
                            k = a[f + 2];
                            g = b[l >> 2];
                            l = b[(l & 3) << 4 | h >> 4];
                            h = b[(h & 15) << 2 | k >> 6];
                            k = b[k & 63];
                            c[e++] = g + l + h + k
                        }
                        g = 0;
                        k = d;
                        switch (a.length - f) {
                            case 2:
                                g = a[f + 1], k = b[(g & 15) << 2] || d;
                            case 1:
                                a = a[f], c[e] = b[a >> 2] + b[(a & 3) << 4 | g >> 4] + k + d
                        }
                        a = c.join("")
                    }
                    return a
                }
        }
        return a
    };

    function sa(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = ta(a, b, c, void 0 !== d);
            else if (u(a)) {
                const e = {};
                for (let f in a) e[f] = sa(a[f], b, c, d);
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function ta(a, b, c, d) {
        const e = ma(a);
        d = d ? !!(e & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (let f = 0; f < a.length; f++) a[f] = sa(a[f], b, c, d);
        c(e, a);
        return a
    }

    function ua(a) {
        return a.aa === na ? a.toJSON() : ra(a)
    }

    function va(a, b) {
        a & 128 && pa(b)
    };
    var wa = class {
        constructor(a) {
            null == a && (a = I);
            I = void 0;
            var b = this.constructor.messageId,
                c;
            if (null == a) a = b ? [b] : [], t(a, 48);
            else {
                if (!Array.isArray(a)) throw Error();
                if (b && b !== a[0]) throw Error();
                const d = ha(a, 0);
                let e = d;
                if (c = 0 !== (16 & e))(c = 0 !== (32 & e)) || (e |= 32);
                if (128 & e) throw Error();
                d !== e && t(a, e)
            }
            this.l = b ? 0 : -1;
            this.i = a;
            a: {
                b = this.i.length;a = b - 1;
                if (b && (b = this.i[a], u(b))) {
                    this.j = b;
                    this.m = a - this.l;
                    break a
                }
                this.m = Number.MAX_VALUE
            }
            if (this.j && "g" in this.j) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
        }
        toJSON() {
            return ta(this.i, ua, va)
        }
    };
    wa.prototype.aa = na;
    wa.prototype.toString = function() {
        return this.i.toString()
    };
    var xa = function(a) {
        return b => {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                ha(b, 16);
                I = b;
                b = new a(b);
                I = void 0
            }
            return b
        }
    }(class extends wa {});

    function ya(a = window) {
        return a
    };
    var J = window;

    function K(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function L(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    };
    var za = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Aa(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    let M = [];
    const Ba = () => {
        const a = M;
        M = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var Ca = (a, b) => {
        "complete" === a.readyState || "interactive" === a.readyState ? (M.push(b), 1 == M.length && (window.Promise ? Promise.resolve().then(Ba) : window.setImmediate ? setImmediate(Ba) : setTimeout(Ba, 0))) : a.addEventListener("DOMContentLoaded", b)
    };

    function Da(a = document) {
        return a.createElement("img")
    };

    function Ea(a, b, c = null, d = !1) {
        Fa(a, b, c, d)
    }

    function Fa(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const e = Da(a.document);
        if (c || d) {
            const f = g => {
                c && c(g);
                if (d) {
                    g = a.google_image_requests;
                    const k = Array.prototype.indexOf.call(g, e, void 0);
                    0 <= k && Array.prototype.splice.call(g, k, 1)
                }
                L(e, "load", f);
                L(e, "error", f)
            };
            K(e, "load", f);
            K(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    };
    let Ga = 0;

    function La(a) {
        return (a = Ma(a, document.currentScript)) && a.getAttribute("data-jc-version") || "unknown"
    }

    function Ma(a, b = null) {
        return b && b.getAttribute("data-jc") === String(a) ? b : document.querySelector(`[${"data-jc"}="${a}"]`)
    };
    class Na {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const Oa = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Pa = class {
            constructor(a, b) {
                this.i = a;
                this.j = b
            }
        },
        Qa = class {
            constructor(a, b) {
                this.url = a;
                this.Y = !!b;
                this.depth = null
            }
        };

    function N(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Ra(a, b, c, d, e) {
        const f = [];
        Aa(a, function(g, k) {
            (g = Sa(g, b, c, d, e)) && f.push(k + "=" + g)
        });
        return f.join(b)
    }

    function Sa(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Sa(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Ra(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Ta(a) {
        let b = 1;
        for (const c in a.j) b = c.length > b ? c.length : b;
        return 3997 - b - a.l.length - 1
    }

    function Ua(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Ta(a) - b.length;
        if (0 > d) return "";
        a.i.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.i.length; f++) {
            const g = a.i[f],
                k = a.j[g];
            for (let l = 0; l < k.length; l++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let h = Ra(k[l], a.l, ",$");
                if (h) {
                    h = e + h;
                    if (d >= h.length) {
                        d -= h.length;
                        c += h;
                        e = a.l;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }
    class Va {
        constructor() {
            this.l = "&";
            this.j = {};
            this.m = 0;
            this.i = []
        }
    };

    function Wa() {
        var a = P,
            b = window.google_srt;
        0 <= b && 1 >= b && (a.i = b)
    }

    function Xa(a, b, c, d = !1, e) {
        if ((d ? a.i : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Va ? f = c : (f = new Va, Aa(c, (k, l) => {
                var h = f;
                const v = h.m++;
                k = N(l, k);
                h.i.push(v);
                h.j[v] = k
            }));
            const g = Ua(f, "/pagead/gen_204?id=" + b + "&");
            g && Ea(m, g)
        } catch (f) {}
    }
    class Ya {
        constructor() {
            this.i = Math.random()
        }
    };
    let Q = null;

    function R() {
        const a = m.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Za() {
        const a = m.performance;
        return a && a.now ? a.now() : null
    };
    class $a {
        constructor(a, b) {
            var c = Za() || R();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.taskId = this.slotId = void 0
        }
    };
    const S = m.performance,
        ab = !!(S && S.mark && S.measure && S.clearMarks),
        T = function(a) {
            let b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        }(() => {
            var a;
            if (a = ab) {
                var b;
                if (null === Q) {
                    Q = "";
                    try {
                        a = "";
                        try {
                            a = m.top.location.hash
                        } catch (c) {
                            a = m.location.hash
                        }
                        a && (Q = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Q;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function bb(a) {
        a && S && T() && (S.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), S.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class cb {
        constructor() {
            var a = window;
            this.j = [];
            this.l = a || m;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.j = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.i = T() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.i) return null;
            a = new $a(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            S && T() && S.mark(b);
            return a
        }
        end(a) {
            if (this.i && "number" === typeof a.value) {
                a.duration = (Za() || R()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                S && T() && S.mark(b);
                !this.i || 2048 <
                    this.j.length || this.j.push(a)
            }
        }
    };

    function db(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                let d;
                for (; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n")
            } catch (d) {
                b = c
            }
        }
        return b
    }

    function eb(a, b, c) {
        let d, e;
        try {
            a.j && a.j.i ? (e = a.j.start(b.toString(), 3), d = c(), a.j.end(e)) : d = c()
        } catch (f) {
            c = !0;
            try {
                bb(e), c = a.o(b, new Na(f, {
                    message: db(f)
                }), void 0, void 0)
            } catch (g) {
                a.F(217, g)
            }
            if (c) window.console ? .error ? .(f);
            else throw f;
        }
        return d
    }

    function fb(a, b) {
        var c = U;
        return (...d) => eb(c, a, () => b.apply(void 0, d))
    }

    function gb(a) {
        var b = U;
        a.catch(c => {
            c = c ? c : "unknown rejection";
            b.F(967, c instanceof Error ? c : Error(c), void 0, b.i || void 0)
        })
    }
    class hb {
        constructor(a = null) {
            this.l = P;
            this.i = null;
            this.o = this.F;
            this.j = a;
            this.m = !1
        }
        pinger() {
            return this.l
        }
        F(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const w = new Va;
                var g = w;
                g.i.push(1);
                g.j[1] = N("context", a);
                b.error && b.meta && b.id || (b = new Na(b, {
                    message: db(b)
                }));
                if (b.msg) {
                    g = w;
                    var k = b.msg.substring(0, 512);
                    g.i.push(2);
                    g.j[2] = N("msg", k)
                }
                var l = b.meta || {};
                b = l;
                if (this.i) try {
                    this.i(b)
                } catch (x) {}
                if (d) try {
                    d(b)
                } catch (x) {}
                d = w;
                l = [l];
                d.i.push(3);
                d.j[3] = l;
                d = m;
                l = [];
                let W;
                b = null;
                do {
                    var h = d;
                    try {
                        var v;
                        if (v = !!h && null != h.location.href) b: {
                            try {
                                p(h.foo);
                                v = !0;
                                break b
                            } catch (x) {}
                            v = !1
                        }
                        var D = v
                    } catch {
                        D = !1
                    }
                    D ? (W = h.location.href, b = h.document && h.document.referrer || null) : (W = b, b = null);
                    l.push(new Qa(W || ""));
                    try {
                        d = h.parent
                    } catch (x) {
                        d = null
                    }
                } while (d && h != d);
                for (let x = 0, Ha = l.length - 1; x <= Ha; ++x) l[x].depth = Ha - x;
                h = m;
                if (h.location && h.location.ancestorOrigins && h.location.ancestorOrigins.length == l.length - 1)
                    for (D = 1; D < l.length; ++D) {
                        var E = l[D];
                        E.url || (E.url = h.location.ancestorOrigins[D - 1] || "", E.Y = !0)
                    }
                var y = l;
                let ia = new Qa(m.location.href, !1);
                h = null;
                const ja = y.length - 1;
                for (E =
                    ja; 0 <= E; --E) {
                    var z = y[E];
                    !h && Oa.test(z.url) && (h = z);
                    if (z.url && !z.Y) {
                        ia = z;
                        break
                    }
                }
                z = null;
                const yb = y.length && y[ja].url;
                0 != ia.depth && yb && (z = y[ja]);
                f = new Pa(ia, z);
                if (f.j) {
                    y = w;
                    var F = f.j.url || "";
                    y.i.push(4);
                    y.j[4] = N("top", F)
                }
                var ka = {
                    url: f.i.url || ""
                };
                if (f.i.url) {
                    var la = f.i.url.match(za),
                        O = la[1],
                        Ia = la[3],
                        Ja = la[4];
                    F = "";
                    O && (F += O + ":");
                    Ia && (F += "//", F += Ia, Ja && (F += ":" + Ja));
                    var Ka = F
                } else Ka = "";
                O = w;
                ka = [ka, {
                    url: Ka
                }];
                O.i.push(5);
                O.j[5] = ka;
                Xa(this.l, e, w, this.m, c)
            } catch (w) {
                try {
                    Xa(this.l, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: db(w),
                        url: f && f.i.url
                    }, this.m, c)
                } catch (W) {}
            }
            return !0
        }
    };
    class ib {};
    let P, U;
    const V = new cb;
    var jb = () => {
        window.google_measure_js_timing || (V.i = !1, V.j != V.l.google_js_reporting_queue && (T() && Array.prototype.forEach.call(V.j, bb, void 0), V.j.length = 0))
    };
    (a => {
        P = a ? ? new Ya;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        Wa();
        U = new hb(V);
        U.i = b => {
            const c = Ga;
            0 !== c && (b.jc = String(c), b.shv = La(c))
        };
        U.m = !0;
        "complete" == window.document.readyState ? jb() : V.i && K(window, "load", () => {
            jb()
        })
    })();
    var X = (a, b) => fb(a, b),
        kb = (a, b, c) => {
            var d = ib;
            var e = "X";
            d.X && d.hasOwnProperty(e) || (e = new d, d.X = e);
            d = [];
            !b.eid && d.length && (b.eid = d.toString());
            Xa(P, a, b, !0, c)
        };
    class lb {
        constructor() {
            this.promise = new Promise(a => {
                this.resolve = a
            })
        }
    };

    function mb(a, b) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        let c = b[a];
        if (c) return c;
        const {
            promise: d,
            resolve: e
        } = new lb;
        c = {
            promise: d,
            resolve: e
        };
        return b[a] = c
    };
    async function nb() {
        return mb(10, m).promise
    };

    function Y(a, b, c = {}) {
        c.msg_type = b;
        c.googMsgType = "sth";
        b = JSON.stringify(c);
        a.parent.postMessage(b, "*")
    }

    function ob(a) {
        if (a.I || H(a.j, 2)) return !0;
        let b = !0;
        const c = pb(a);
        c && (b = 36E5 <= c);
        if (b) try {
            a.i.localStorage.removeItem("LAST_INTERSTITIAL_TIME")
        } catch (d) {}
        return b
    }

    function Z(a, b, c) {
        G(a.j, 3) && (b.qid = G(a.j, 3));
        G(a.j, 10) && (b.eid = G(a.j, 10));
        b.rtype = B(a.j);
        b.req = J.location.href;
        kb(a.R(), b, c)
    }

    function pb(a) {
        try {
            const b = +a.i.localStorage.getItem("LAST_INTERSTITIAL_TIME"),
                c = Date.now();
            if (b && b < c) return c - b
        } catch (b) {}
        return null
    }

    function qb(a) {
        if (!H(a.j, 27)) {
            var b = C(A(a.j, 26), 0),
                c = () => {
                    for (const d of a.u.document.getElementsByClassName("GoogleActiveViewElement")) d.removeAttribute("data-google-av-dm")
                };
            0 < b ? setTimeout(() => c(), b) : c();
            Z(a, {
                isfsapi: !!a.l,
                avp: R() - a.Z
            }, .01)
        }
    }
    var rb = class {
        constructor(a, b, c) {
            this.i = J;
            this.u = a;
            this.B = !1;
            this.C = null;
            this.o = 0;
            this.j = b;
            this.Z = R();
            this.I = H(this.j, 11) || 10 === B(this.j) || 11 === B(this.j);
            this.l = c;
            c ? .enableCustomCloseButton()
        }
        R() {}
        G() {
            (this.B = ob(this)) ? (this.L(), G(this.j, 1) && this.i.parent.postMessage(G(this.j, 1), "*")) : this.l ? .notifyError("freq_cap")
        }
        v() {
            if (!this.o) {
                this.C && L(this.i, "storage", this.C);
                this.o = Date.now();
                if (!H(this.j, 2) && !this.I) try {
                    this.i.localStorage.setItem("LAST_INTERSTITIAL_TIME", "" + this.o)
                } catch (b) {}
                this.W();
                if (this.u) {
                    var a =
                        this.i.document.createEvent("Event");
                    a.initEvent("i-creative-view", !0, !1);
                    this.u.dispatchEvent(a);
                    a = this.i.document.createEvent("Event");
                    a.initEvent("onshow", !0, !1);
                    this.i.dispatchEvent(a)
                }
            }
        }
        J() {}
        L() {
            let a = !1;
            if (this.l) {
                const b = this.l.waitForOnShow().then(() => {
                    this.v();
                    qb(this)
                });
                gb(b);
                this.l.listenToBackButton(() => {
                    this.J()
                })
            } else this.i.IntersectionObserver && .01 < C(qa(this.j), 0) && (a = !0, (new this.i.IntersectionObserver((b, c) => {
                b.forEach(d => {
                    0 >= d.intersectionRatio || (this.v(), qb(this), c.disconnect())
                })
            }, {
                threshold: C(qa(this.j), 0)
            })).observe(this.i.document.documentElement));
            K(this.i, "message", X(262, b => {
                a: {
                    var c = a;
                    if (b && (this.i.parent == b.source || this.i.parent.parent == b.source)) {
                        var d = {};
                        try {
                            d = this.i.JSON.parse(b.data)
                        } catch (e) {
                            b = void 0;
                            break a
                        }
                        switch (d ? .msg_type) {
                            case "i-view":
                                this.B && !c && this.v();
                                Z(this, {
                                    type: "viewmsg",
                                    has_iobs: !!this.i.IntersectionObserver
                                });
                                break;
                            case "r-back-button":
                                null == this.l && this.J()
                        }
                    }
                    b = void 0
                }
                return b
            }));
            this.I || (this.C = X(263, () => {
                this.B = ob(this);
                if (!this.B) {
                    var b = {
                        i_tslv: pb(this)
                    };
                    Y(this.i, "i-no", b)
                }
            }), K(this.i, "storage", this.C));
            this.l || Y(this.i, "i-adframe-load")
        }
        W(a) {
            let b;
            try {
                const c = ya(this.u);
                c.vv ? c.vv() : b = !0
            } catch (c) {
                U.F(533, c, void 0, void 0);
                return
            }
            a = a || 1;
            b ? (Z(this, {
                vf: a
            }), 3 <= a || this.i.setTimeout(n(rb.prototype.W, this, a + 1), 3E3)) : 1 < a && Z(this, {
                vs: a
            })
        }
    };

    function sb(a) {
        window.parent.postMessage(JSON.stringify({
            type: "rewarded",
            message: a
        }), "*")
    };
    var tb = a => {
        a = a.document;
        let b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };

    function ub(a, b, c) {
        kb("jserror", {
            context: "iaf::itf",
            req: J.location.href,
            db: a ? 1 : 0,
            ls: b ? 1 : 0,
            eid: G(c, 10),
            qid: G(c, 3),
            rtype: B(c)
        })
    }

    function vb(a, b) {
        wb(a, b) && (a.m.style.background = "rgba(192,192,192, .3)", m.setTimeout(() => {
            a.m.style.background = "transparent";
            a.dismiss(2)
        }, 750))
    }

    function xb(a, b) {
        b.some(c => "intervention" === c.type && "HeavyAdIntervention" === c.body ? .id) && (Z(a, {
            hai: "1"
        }, 1), a.o ? a.dismiss(8) : a.l ? a.l.notifyError("heavy_ads") : Y(a.i, "i_iif"))
    }

    function zb(a) {
        const b = X(259, n(function() {
            Y(this.i, "i-blur");
            L(this.i, "blur", b)
        }, a));
        K(a.i, "blur", b)
    }

    function Ab(a) {
        a.A || 0 === a.o || (a.m.setAttribute("aria-label", G(a.j, 7)), a.m.setAttribute("role", "button"), a.m.setAttribute("tabindex", "0"), a.m.focus())
    }

    function Bb(a, b) {
        H(a.j, 15) ? (sb("canceled"), sb("closed")) : a.l ? a.l.closeAd() : Y(a.i, b)
    }

    function Cb(a, b) {
        const c = a.i.document.getElementById("creative");
        a.i.goog_vignette_survey && (a.i.goog_vignette_survey.display(c, () => {
            a.dismiss(3)
        }, () => {}, 1), b && b.stopPropagation())
    }

    function Db(a) {
        !1 === a.A && a.enableDismissListeners();
        a.V && K(a.V, "click", X(261, c => Cb(a, c)));
        const b = a.i.document.getElementById("card");
        b && b.addEventListener("click", X(909, c => {
            c ? .stopPropagation()
        }))
    }

    function Eb(a) {
        K(a.i, "resize", () => {
            var b = a.i;
            b = b.innerHeight >= b.innerWidth ? 1 : 2;
            a.K ? (a.K = !1, a.N = 2 === b) : (a.N ? 1 === b : 2 === b) && a.dismiss(4)
        })
    }

    function Fb(a) {
        a.i.addEventListener("message", b => {
            if (b.source === a.u) try {
                const c = JSON.parse(b.data);
                "rewarded" === c.type && "closed" === c.message && a.dismiss(11 === B(a.j) ? 6 : 1)
            } catch (c) {}
        })
    }

    function wb(a, b) {
        if (!b) return !0;
        if ((b.preventDefault ? b.defaultPrevented : !1 === b.returnValue) || b.target && b.target.ownerDocument == a.u.document) return !1;
        for (a = b.target; a;) {
            if ("creative" == a.id) return !1;
            a = a.parentElement
        }
        return !0
    }
    var Gb = class extends rb {
        constructor(a, b, c, d, e) {
            super(a, d, e);
            this.m = b;
            this.V = c;
            this.O = 0;
            this.U = X(260, f => {
                this.dismiss(1);
                f && f.stopPropagation()
            });
            this.T = f => vb(this, f);
            this.M = [];
            this.H = [];
            this.A = !1;
            this.P = () => {};
            this.K = this.N = !1;
            this.D = null
        }
        G() {
            super.G();
            (this.D = this.i.ReportingObserver ? new this.i.ReportingObserver((a, b) => {
                xb(this, a) && b.disconnect()
            }, {
                buffered: !0
            }) : null) && K(this.i, "pagehide", () => {
                xb(this, this.D.takeRecords());
                this.D.disconnect()
            })
        }
        R() {
            return "ia_evt"
        }
        J() {
            this.A ? this.P() : this.dismiss(9)
        }
        addViewListener(a) {
            a =
                fb(483, a);
            this.o ? a() : this.M.push(a)
        }
        addDismissListener(a) {
            this.H.push(fb(484, a))
        }
        disableDismissListeners(a) {
            this.A = !0;
            this.P = a;
            L(this.m, "click", this.U);
            L(this.i.document, "click", this.T)
        }
        enableDismissListeners() {
            this.A = !1;
            K(this.m, "click", this.U);
            K(this.i.document, "click", this.T);
            Ab(this)
        }
        dismiss(a) {
            document.body.setAttribute("aria-hidden", "true");
            Z(this, {
                ttd: Date.now() - this.o,
                req: J.location.href,
                pda: this.O,
                ds: a,
                idrw: H(this.j, 15) ? 1 : 0
            });
            this.O++ || zb(this);
            let b = 0;
            for (let d = 0; d < this.H.length; d++) b = Math.max(b,
                this.H[d]());
            b = Math.min(b, 1E3);
            let c = "i-dismiss";
            6 === a ? c = "r-dismiss-before-reward" : 7 === a && (c = "r-dismiss-after-reward");
            0 === b ? Bb(this, c) : m.setTimeout(() => Bb(this, c), b)
        }
        L() {
            super.L();
            Db(this)
        }
        v() {
            super.v();
            var a = this.i;
            this.N = 2 === (a.innerHeight >= a.innerWidth ? 1 : 2);
            this.K = 0 === this.i.innerWidth && 0 === this.i.innerHeight;
            Eb(this);
            Ab(this);
            var b = this.m.getBoundingClientRect(),
                c = b.bottom,
                d = b.right;
            a = tb(this.i).clientHeight;
            var e = tb(this.i).clientWidth,
                f = Math.floor(c - a);
            const g = Math.floor(d - e);
            if (0 <= f || 5 < g) c -=
                b.top, d -= b.left, b = this.i, Z(this, {
                    dhb: f >= c ? 1 : 0,
                    dhr: g >= d ? 1 : 0,
                    h: a,
                    w: e,
                    bh: c,
                    bw: d,
                    opb: f,
                    opr: g,
                    pt: b.innerHeight >= b.innerWidth ? 1 : 0,
                    req: this.i.location.href
                });
            document.getElementById("ad_iframe").contentWindow.postMessage(JSON.stringify({
                type: "rewarded",
                message: "visible"
            }), "*");
            for (a = 0; a < this.M.length; a++) this.M[a]();
            Fb(this);
            if (!(.01 < Math.random())) {
                a = Ma(24, document.currentScript);
                a = `https://${a&&"true"===a.getAttribute("data-jc-rcd")?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${24}&version=${La(24)}&sample=${.01}`;
                e = window;
                if (f = e.navigator) f = e.navigator.userAgent, f = /Chrome/.test(f) && !/Edge/.test(f) ? !0 : !1;
                f && e.navigator.sendBeacon ? e.navigator.sendBeacon(a) : Ea(e, a, void 0, !1)
            }
            a = this.i.navigator ? !0 === this.i.navigator.standalone : !1;
            e = window.matchMedia("(display-mode: standalone)").matches;
            Z(this, {
                wapp: a || e
            })
        }
    };
    Ga = 24;
    const Hb = Ma(24, document.currentScript);
    if (null == Hb) throw Error("JSC not found 24");
    const Ib = {},
        Jb = Hb.attributes;
    for (let a = Jb.length - 1; 0 <= a; a--) {
        const b = Jb[a].name;
        0 === b.indexOf("data-jcp-") && (Ib[b.substring(9)] = Jb[a].value)
    }
    (async function(a) {
        const b = xa(a.config),
            c = X(258, async () => {
                var d = null;
                H(b, 25) && (d = await nb()); {
                    var e = document.getElementById("ad_iframe").contentWindow;
                    var f = J.document;
                    const g = e.document,
                        k = C(A(b, 5), 0),
                        l = 0 === k || 2 === k ? g.getElementById(G(b, 6)) : f.getElementById(G(b, 6));
                    f = 0 === k ? g.getElementById(G(b, 8)) : f.getElementById(G(b, 8));
                    let h;
                    try {
                        h = !!J.localStorage
                    } catch (v) {}
                    l ? (h || ub(l, h, b), e = new Gb(e, l, f, b, d), e.G()) : (ub(l, h, b), d ? d.notifyError("no_dismiss_button") : Y(J, "i_iif"), e = null)
                }
                window.interstitialAdFrame =
                    e;
                mb(9, window).resolve(e)
            });
        0 === C(A(b, 5), 0) || 2 === C(A(b, 5), 0) || H(b, 16) ? (a = document.getElementById("ad_iframe"), null != a.contentDocument ? Ca(a.contentDocument, () => void c()) : document.getElementById("ad_iframe").addEventListener("load", c)) : c()
    })(Ib);
}).call(this);