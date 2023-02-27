(function() {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var n = this || self;

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

    function p(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? p = aa : p = ba;
        return p.apply(null, arguments)
    }

    function ha(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.T = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.U = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    };

    function ia(a) {
        var b;
        a: {
            if (b = n.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return -1 != b.indexOf(a)
    };

    function r(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };
    var ja = {},
        t = null;
    var ka = "undefined" !== typeof Uint8Array;
    const la = !(ia("Trident") || ia("MSIE")) && "function" === typeof n.btoa;
    const v = Symbol();

    function w(a, b) {
        if (v) return a[v] |= b;
        if (void 0 !== a.A) return a.A |= b;
        Object.defineProperties(a, {
            A: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    }

    function y(a) {
        let b;
        v ? b = a[v] : b = a.A;
        return null == b ? 0 : b
    }

    function z(a, b) {
        v ? a[v] = b : void 0 !== a.A ? a.A = b : Object.defineProperties(a, {
            A: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function ma(a) {
        w(a, 1);
        return a
    }

    function A(a) {
        return !!(y(a) & 2)
    }

    function na(a, b) {
        z(b, (a | 0) & -51)
    }

    function B(a, b) {
        z(b, (a | 18) & -41)
    };
    var C = {};

    function oa(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    const pa = [];
    z(pa, 23);
    var D = Object.freeze(pa);

    function ua(a) {
        if (A(a.j)) throw Error("Cannot mutate an immutable Message");
    }

    function va(a) {
        var b = a.length;
        (b = b ? a[b - 1] : void 0) && oa(b) ? b.g = 1 : a.push({
            g: 1
        })
    };

    function wa(a) {
        const b = a.i + a.v;
        return a.o || (a.o = a.j[b] = {})
    }

    function E(a, b, c) {
        return -1 === b ? null : b >= a.i ? a.o ? a.o[b] : void 0 : c && a.o && (c = a.o[b], null != c) ? c : a.j[b + a.v]
    }

    function F(a, b, c, d) {
        a.l && (a.l = void 0);
        b >= a.i || d ? wa(a)[b] = c : (a.j[b + a.v] = c, (a = a.o) && b in a && delete a[b])
    }

    function xa(a, b) {
        a = E(a, 1);
        Array.isArray(a) || (a = D);
        const c = y(a);
        c & 1 || ma(a);
        b && (c & 2 || w(a, 2));
        return a
    }

    function ya(a) {
        var b = E(a, 1, !1); {
            var c = za;
            let e = !1;
            var d = null == b || "object" !== typeof b || (e = Array.isArray(b)) || b.K !== C ? e ? new c(b) : void 0 : b
        }
        d !== b && null != d && (F(a, 1, d, !1), w(d.j, y(a.j) & 18));
        b = d;
        if (null == b) return b;
        A(a.j) || (d = Aa(b), d !== b && (b = d, F(a, 1, b, !1)));
        return b
    }

    function Ba(a) {
        var b = A(a.j);
        var c = Ca;
        a.h || (a.h = {});
        var d = a.h[1];
        var e = xa(a, b);
        if (d) b || (e = Object.isFrozen(d), b && !e ? Object.freeze(d) : !b && e && (d = Array.prototype.slice.call(d), a.h[1] = d));
        else {
            var f = e;
            d = [];
            var g = !!(y(a.j) & 16);
            e = A(f);
            var h = f;
            !b && e && (f = Array.prototype.slice.call(f));
            var l = e;
            let x = 0;
            for (; x < f.length; x++) {
                var k = f[x];
                var m = c;
                m = Array.isArray(k) ? new m(k) : void 0;
                if (void 0 === m) continue;
                k = m.j;
                const u = y(k);
                let q = u;
                e && (q |= 2);
                g && (q |= 16);
                q != u && z(k, q);
                k = q;
                l || (l = !!(2 & k));
                d.push(m)
            }
            a.h[1] = d;
            g = y(f);
            c = g | 33;
            c = l ? c & -9 : c | 8;
            g != c && (l = f, Object.isFrozen(l) && (l = Array.prototype.slice.call(l)), z(l, c), f = l);
            h !== f && F(a, 1, f);
            (b || b && e) && w(d, 2);
            b && Object.freeze(d)
        }
        a = xa(a, b);
        if (!(b || y(a) & 8)) {
            for (b = 0; b < d.length; b++) e = d[b], h = Aa(e), e !== h && (d[b] = h, a[b] = h.j);
            w(a, 8)
        }
        return d
    }

    function G(a, b) {
        return H(E(a, b), 0)
    }

    function H(a, b) {
        return null == a ? b : a
    }

    function I(a) {
        return H(E(a, 1), "")
    }

    function J(a, b) {
        a = E(a, b);
        return H(null == a ? a : !!a, !1)
    }

    function K(a, b) {
        return H(E(a, b), 1)
    };
    let L;

    function Da(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (0 !== (y(a) & 128)) return a = Array.prototype.slice.call(a), va(a), a
                    } else if (ka && null != a && a instanceof Uint8Array) {
                    if (la) {
                        for (var b = ""; 10240 < a.length;) b += String.fromCharCode.apply(null, a.subarray(0, 10240)), a = a.subarray(10240);
                        b += String.fromCharCode.apply(null, a);
                        a = btoa(b)
                    } else {
                        void 0 === b && (b = 0);
                        if (!t) {
                            t = {};
                            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
                                    d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                                var f = c.concat(d[e].split(""));
                                ja[e] = f;
                                for (var g = 0; g < f.length; g++) {
                                    var h = f[g];
                                    void 0 === t[h] && (t[h] = g)
                                }
                            }
                        }
                        b = ja[b];
                        c = Array(Math.floor(a.length / 3));
                        d = b[64] || "";
                        for (e = f = 0; f < a.length - 2; f += 3) {
                            var l = a[f],
                                k = a[f + 1];
                            h = a[f + 2];
                            g = b[l >> 2];
                            l = b[(l & 3) << 4 | k >> 4];
                            k = b[(k & 15) << 2 | h >> 6];
                            h = b[h & 63];
                            c[e++] = g + l + k + h
                        }
                        g = 0;
                        h = d;
                        switch (a.length - f) {
                            case 2:
                                g = a[f + 1], h = b[(g & 15) << 2] || d;
                            case 1:
                                a = a[f], c[e] = b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
                        }
                        a = c.join("")
                    }
                    return a
                }
        }
        return a
    };

    function Ea(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = Fa(a, b, c, void 0 !== d);
            else if (oa(a)) {
                const e = {};
                for (let f in a) e[f] = Ea(a[f], b, c, d);
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function Fa(a, b, c, d) {
        const e = y(a);
        d = d ? !!(e & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (let f = 0; f < a.length; f++) a[f] = Ea(a[f], b, c, d);
        c(e, a);
        return a
    }

    function Ga(a) {
        return a.K === C ? a.toJSON() : Da(a)
    }

    function Ha(a, b) {
        a & 128 && va(b)
    };

    function Ia(a, b, c = B) {
        if (null != a) {
            if (ka && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                const d = y(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return z(a, d | 2), a;
                a = Fa(a, Ia, d & 4 ? B : c, !0);
                b = y(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            return a.K === C ? Ja(a) : a
        }
    }

    function Ka(a, b, c, d, e, f, g) {
        if (a = a.h && a.h[c]) {
            d = y(a);
            d & 2 ? d = a : (f = Array.prototype.map.call(a, Ja, void 0), B(d, f), Object.freeze(f), d = f);
            ua(b);
            g = null == d ? D : ma([]);
            if (null != d) {
                f = !!d.length;
                for (a = 0; a < d.length; a++) {
                    const h = d[a];
                    f = f && !A(h.j);
                    g[a] = h.j
                }
                f = (f ? 8 : 0) | 1;
                a = y(g);
                (a & f) !== f && (Object.isFrozen(g) && (g = Array.prototype.slice.call(g)), z(g, a | f));
                b.h || (b.h = {});
                b.h[c] = d
            } else b.h && (b.h[c] = void 0);
            F(b, c, g, e)
        } else d = Ia(d, f, g), ua(b), F(b, c, d, e)
    }

    function Ja(a) {
        if (A(a.j)) return a;
        a = La(a, !0);
        w(a.j, 2);
        return a
    }

    function La(a, b) {
        const c = a.j;
        var d = [];
        w(d, 16);
        var e = a.constructor.h;
        e && d.push(e);
        e = a.o;
        if (e) {
            d.length = c.length;
            d.fill(void 0, d.length, c.length);
            var f = {};
            d[d.length - 1] = f
        }
        0 !== (y(c) & 128) && va(d);
        b = b || A(a.j) ? B : na;
        f = a.constructor;
        L = d;
        d = new f(d);
        L = void 0;
        a.P && (d.P = a.P.slice());
        f = !!(y(c) & 16);
        const g = e ? c.length - 1 : c.length;
        for (let h = 0; h < g; h++) Ka(a, d, h - a.v, c[h], !1, f, b);
        if (e)
            for (const h in e) Ka(a, d, +h, e[h], !0, f, b);
        return d
    }

    function Aa(a) {
        if (!A(a.j)) return a;
        const b = La(a, !1);
        b.l = a;
        return b
    };
    var M = class {
        constructor(a, b, c) {
            null == a && (a = L);
            L = void 0;
            var d = this.constructor.h,
                e = !1;
            if (null == a) {
                a = d ? [d] : [];
                var f = !0;
                z(a, 48)
            } else {
                if (!Array.isArray(a)) throw Error();
                if (d && d !== a[0]) throw Error();
                var g = w(a, 0);
                let h = g;
                if (f = 0 !== (16 & h))(e = 0 !== (32 & h)) || (h |= 32);
                if (128 & h) throw Error();
                g !== h && z(a, h)
            }
            this.v = d ? 0 : -1;
            this.h = void 0;
            this.j = a;
            a: {
                g = this.j.length;d = g - 1;
                if (g && (g = this.j[d], oa(g))) {
                    this.o = g;
                    this.i = d - this.v;
                    break a
                }
                void 0 !== b && -1 < b ? (this.i = Math.max(b, d + 1 - this.v), this.o = void 0) : this.i = Number.MAX_VALUE
            }
            if (this.o &&
                "g" in this.o) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
            if (c) {
                b = f && !e && !0;
                f = this.i;
                let h;
                for (e = 0; e < c.length; e++) d = c[e], d < f ? (d += this.v, (g = a[d]) ? Ma(g, b) : a[d] = D) : (h || (h = wa(this)), (g = h[d]) ? Ma(g, b) : h[d] = D)
            }
        }
        toJSON() {
            return Fa(this.j, Ga, Ha)
        }
    };

    function Ma(a, b) {
        if (Array.isArray(a)) {
            var c = y(a),
                d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && z(a, c | d)
        }
    }
    M.prototype.K = C;
    M.prototype.toString = function() {
        return this.j.toString()
    };
    var Ca = class extends M {
        constructor(a) {
            super(a)
        }
    };
    var za = class extends M {
            constructor(a) {
                super(a, -1, Na)
            }
        },
        Na = [1];
    var Oa = class extends M {
        constructor(a) {
            super(a)
        }
    };

    function Pa() {}

    function Qa(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var Ra = {
            capture: !0
        },
        Sa = {
            passive: !0
        },
        Ta = Qa(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                n.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function Ua(a) {
        return a ? a.passive && Ta() ? a : a.capture || !1 : !1
    }

    function N(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, Ua(d))
    };
    var P = class {
        constructor(a, b) {
            this.h = b === O ? a : ""
        }
        toString() {
            return this.h.toString()
        }
    };
    P.prototype.l = !0;
    P.prototype.i = function() {
        return this.h.toString()
    };
    var O = {},
        Va = new P("about:invalid#zClosurez", O);

    function Wa(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) Wa(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    class Xa {
        constructor(a) {
            this.S = a
        }
    }

    function Q(a) {
        return new Xa(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const Ya = new Xa(a => /^[^:]*([/?#]|$)/.test(a));
    var Za = Q("http"),
        $a = Q("https"),
        ab = Q("ftp"),
        bb = Q("mailto");
    const cb = [Q("data"), Za, $a, bb, ab, Ya];

    function db(a = cb) {
        for (let b = 0; b < a.length; ++b) {
            const c = a[b];
            if (c instanceof Xa && c.S("#")) return new P("#", O)
        }
    }

    function eb(a = cb) {
        return db(a) || Va
    };

    function fb(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    let R = [];
    const gb = () => {
        const a = R;
        R = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var hb = a => {
        var b = S;
        "complete" === b.readyState || "interactive" === b.readyState ? (R.push(a), 1 == R.length && (window.Promise ? Promise.resolve().then(gb) : window.setImmediate ? setImmediate(gb) : setTimeout(gb, 0))) : b.addEventListener("DOMContentLoaded", a)
    };

    function ib(a = document) {
        return a.createElement("img")
    };

    function jb(a, b, c = null, d = !1) {
        kb(a, b, c, d)
    }

    function kb(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const e = ib(a.document);
        if (c || d) {
            const f = g => {
                c && c(g);
                if (d) {
                    g = a.google_image_requests;
                    var h = Array.prototype.indexOf.call(g, e, void 0);
                    0 <= h && Array.prototype.splice.call(g, h, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, Ua());
                e.removeEventListener && e.removeEventListener("error", f, Ua())
            };
            N(e, "load", f);
            N(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    };

    function lb(a = null) {
        return a && "23" === a.getAttribute("data-jc") ? a : document.querySelector('[data-jc="23"]')
    }

    function mb() {
        if (!(.01 < Math.random())) {
            var a = lb(document.currentScript);
            a = a && "true" === a.getAttribute("data-jc-rcd") ? "pagead2.googlesyndication-cn.com" : "pagead2.googlesyndication.com";
            var b = (b = lb(document.currentScript)) && b.getAttribute("data-jc-version") || "unknown";
            a = `https://${a}/pagead/gen_204?id=jca&jc=${23}&version=${b}&sample=${.01}`;
            b = window;
            var c;
            if (c = b.navigator) c = b.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
            c && b.navigator.sendBeacon ? b.navigator.sendBeacon(a) : jb(b, a, void 0, !1)
        }
    };
    var S = document,
        T = window;
    var nb = (a = []) => {
        n.google_logging_queue || (n.google_logging_queue = []);
        n.google_logging_queue.push([12, a])
    };
    const ob = [Za, $a, bb, ab, Ya, Q("market"), Q("itms"), Q("intent"), Q("itms-appss")];
    var pb = () => {
        var a = `${"http:"===T.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;
        return b => {
            b = {
                id: "unsafeurl",
                ctx: 625,
                url: b
            };
            var c = [];
            for (d in b) Wa(d, b[d], c);
            var d = c.join("&");
            if (d) {
                b = a.indexOf("#");
                0 > b && (b = a.length);
                c = a.indexOf("?");
                if (0 > c || c > b) {
                    c = b;
                    var e = ""
                } else e = a.substring(c + 1, b);
                b = [a.slice(0, c), e, a.slice(b)];
                c = b[1];
                b[1] = d ? c ? c + "&" + d : d : c;
                d = b[0] + (b[1] ? "?" + b[1] : "") + b[2]
            } else d = a;
            navigator.sendBeacon && navigator.sendBeacon(d, "")
        }
    };
    var qb = () => {
            var a = S;
            try {
                return a.querySelectorAll("*[data-ifc]")
            } catch (b) {
                return []
            }
        },
        rb = (a, b) => {
            a && fb(b, (c, d) => {
                a.style[d] = c
            })
        },
        sb = a => {
            var b = S.body;
            const c = document.createDocumentFragment(),
                d = a.length;
            for (let e = 0; e < d; ++e) c.appendChild(a[e]);
            b.appendChild(c)
        };

    function tb(a, b, c, d, e) {
        const f = [];
        fb(a, function(g, h) {
            (g = ub(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function ub(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(ub(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(tb(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function vb(a) {
        let b = 1;
        for (const c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.l.length - 1
    }

    function wb(a) {
        let b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=fccs&",
            c = vb(a) - 24;
        if (0 > c) return "";
        a.h.sort(function(f, g) {
            return f - g
        });
        let d = null,
            e = "";
        for (let f = 0; f < a.h.length; f++) {
            const g = a.h[f],
                h = a.i[g];
            for (let l = 0; l < h.length; l++) {
                if (!c) {
                    d = null == d ? g : d;
                    break
                }
                let k = tb(h[l], a.l, ",$");
                if (k) {
                    k = e + k;
                    if (c >= k.length) {
                        c -= k.length;
                        b += k;
                        e = a.l;
                        break
                    }
                    d = null == d ? g : d
                }
            }
        }
        a = "";
        null != d && (a = e + "trn=" + d);
        return b + a
    }
    class xb {
        constructor() {
            this.l = "&";
            this.i = {};
            this.s = 0;
            this.h = []
        }
    };

    function yb() {
        var a = zb,
            b = window.google_srt;
        0 <= b && 1 >= b && (a.h = b)
    }

    function Ab(a) {
        if (.01 > zb.h) try {
            let b;
            a instanceof xb ? b = a : (b = new xb, fb(a, (d, e) => {
                var f = b;
                const g = f.s++,
                    h = {};
                h[e] = d;
                d = [h];
                f.h.push(g);
                f.i[g] = d
            }));
            const c = wb(b);
            c && jb(n, c)
        } catch (b) {}
    }
    class Bb {
        constructor() {
            this.h = Math.random()
        }
    };
    let Cb = null;

    function Db() {
        const a = n.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Eb() {
        const a = n.performance;
        return a && a.now ? a.now() : null
    };
    class Fb {
        constructor(a, b) {
            var c = Eb() || Db();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.taskId = this.slotId = void 0
        }
    };
    const U = n.performance,
        Gb = !!(U && U.mark && U.measure && U.clearMarks),
        V = Qa(() => {
            var a;
            if (a = Gb) {
                var b;
                if (null === Cb) {
                    Cb = "";
                    try {
                        a = "";
                        try {
                            a = n.top.location.hash
                        } catch (c) {
                            a = n.location.hash
                        }
                        a && (Cb = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Cb;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function Hb(a) {
        a && U && V() && (U.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), U.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class Ib {
        constructor() {
            var a = window;
            this.h = [];
            this.l = a || n;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.i = V() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.i) return null;
            a = new Fb(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            U && V() && U.mark(b);
            return a
        }
        end(a) {
            if (this.i && "number" === typeof a.value) {
                a.duration = (Eb() || Db()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                U && V() && U.mark(b);
                !this.i || 2048 <
                    this.h.length || this.h.push(a)
            }
        }
    };

    function Jb() {
        this.i = this.i;
        this.l = this.l
    }
    Jb.prototype.i = !1;

    function Kb(a) {
        a.i || (a.i = !0, a.s())
    }
    Jb.prototype.s = function() {
        if (this.l)
            for (; this.l.length;) this.l.shift()()
    };
    class Lb {};
    let zb;
    const W = new Ib;
    var Mb = () => {
        window.google_measure_js_timing || (W.i = !1, W.h != W.l.google_js_reporting_queue && (V() && r(W.h, Hb), W.h.length = 0))
    };
    (a => {
        zb = a ? ? new Bb;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        yb();
        "complete" == window.document.readyState ? Mb() : W.i && N(window, "load", () => {
            Mb()
        })
    })();
    var Nb = a => {
        N(T, "message", b => {
            let c;
            try {
                c = JSON.parse(b.data)
            } catch (d) {
                return
            }!c || "ig" !== c.googMsgType || a(c, b)
        })
    };

    function X(a, b, c) {
        Jb.call(this);
        this.u = a;
        this.H = b || 0;
        this.B = c;
        this.D = p(this.F, this)
    }
    ha(X, Jb);
    X.prototype.h = 0;
    X.prototype.s = function() {
        X.T.s.call(this);
        this.isActive() && n.clearTimeout(this.h);
        this.h = 0;
        delete this.u;
        delete this.B
    };
    X.prototype.start = function(a) {
        this.isActive() && n.clearTimeout(this.h);
        this.h = 0;
        var b = this.D;
        a = void 0 !== a ? a : this.H;
        if ("function" !== typeof b)
            if (b && "function" == typeof b.handleEvent) b = p(b.handleEvent, b);
            else throw Error("Invalid listener argument");
        this.h = 2147483647 < Number(a) ? -1 : n.setTimeout(b, a || 0)
    };
    X.prototype.isActive = function() {
        return 0 != this.h
    };
    X.prototype.F = function() {
        this.h = 0;
        this.u && this.u.call(this.B)
    };
    const Ob = {
            display: "inline-block",
            position: "absolute"
        },
        Pb = {
            display: "none",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0"
        },
        Y = (a, b) => {
            a && (a.style.display = b ? "inline-block" : "none")
        };

    function Qb(a = "") {
        const b = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
        a && (a = a.split(","), 4 === a.length && a.reduce((c, d) => c && !isNaN(+d), !0) && ([b.top, b.right, b.bottom, b.left] = a.map(c => +c)));
        return b
    }

    function Rb(a, b, c = 2147483647) {
        const d = S.createElement("div");
        rb(d, { ...Ob,
            "z-index": String(c),
            ...b
        });
        J(a.data, 10) && N(d, "click", Pa);
        if (J(a.data, 11)) {
            a = b = S.createElement("a");
            c = pb();
            const f = eb(ob);
            f === Va && c("#");
            c = f;
            if (c instanceof P) var e = c;
            else if (c instanceof P) e = c;
            else {
                c = "object" == typeof c && c.l ? c.i() : String(c);
                b: {
                    try {
                        e = new URL(c)
                    } catch (g) {
                        e = "https:";
                        break b
                    }
                    e = e.protocol
                }
                "javascript:" === e && (c = "about:invalid#zClosurez");
                e = new P(c, O)
            }
            a.href = e instanceof P && e.constructor === P ? e.h : "type_error:SafeUrl";
            b.appendChild(d);
            return b
        }
        return d
    }

    function Sb(a, b) {
        switch (K(b.m, 5)) {
            case 2:
                T.AFMA_Communicator ? .addEventListener ? .("onshow", () => {
                    Z(a, b)
                });
                break;
            case 10:
                N(T, "i-creative-view", () => {
                    Z(a, b)
                });
                break;
            case 4:
                N(S, "DOMContentLoaded", () => {
                    Z(a, b)
                });
                break;
            case 8:
                Nb(c => {
                    c.rr && Z(a, b)
                });
                break;
            case 9:
                if ("IntersectionObserver" in T) {
                    const c = new IntersectionObserver(d => {
                        for (const e of d)
                            if (0 < e.intersectionRatio) {
                                Z(a, b);
                                break
                            }
                    });
                    c.observe(S.body);
                    a.R.push(c)
                }
                break;
            case 11:
                T.AFMA_Communicator ? .addEventListener ? .("onAdVisibilityChanged", () => {
                    Z(a, b)
                })
        }
    }

    function Tb(a, b) {
        b = Qb(b);
        const c = G(a.data, 9);
        a.s = [{
            width: "100%",
            height: b.top + c + "px",
            top: -c + "px",
            left: "0"
        }, {
            width: b.right + c + "px",
            height: "100%",
            top: "0",
            right: -c + "px"
        }, {
            width: "100%",
            height: b.bottom + c + "px",
            bottom: -c + "px",
            left: "0"
        }, {
            width: b.left + c + "px",
            height: "100%",
            top: "0",
            left: -c + "px"
        }].map(d => Rb(a, d, 9019))
    }

    function Ub(a) {
        var b = 0;
        for (const d of a.L) {
            const e = d.m,
                f = a.F[K(e, 5)];
            d.C || void 0 === f || (b = Math.max(b, f + G(e, 2)))
        }
        a.u && Kb(a.u);
        b -= Date.now();
        const c = a.i;
        0 < b ? (Y(c, !0), a.u = new X(() => {
            Y(c, !1)
        }, b), a.u.start()) : Y(c, !1)
    }

    function Z(a, b) {
        b.C || (a.F[K(b.m, 5)] = Date.now(), J(b.m, 9) && (a.L.push(b), Ub(a)))
    }

    function Vb(a, b, c) {
        if (!a.h || !a.D || 300 <= b.timeStamp - a.h.timeStamp) return !1;
        const d = new Map;
        r(a.D.changedTouches, e => {
            d.set(e.identifier, {
                x: e.clientX,
                y: e.clientY
            })
        });
        b = G(c.m, 11) || 10;
        for (const e of a.h.changedTouches)
            if (a = d.get(e.identifier), !a || Math.abs(a.x - e.clientX) > b || Math.abs(a.y - e.clientY) > b) return !0;
        return !1
    }
    var Xb = class {
        constructor() {
            var a = Wb;
            this.s = [];
            this.u = this.i = null;
            this.L = [];
            this.data = null;
            this.H = [];
            this.l = [];
            this.B = [];
            this.F = {};
            this.R = [];
            this.D = this.h = null;
            this.M = "";
            this.N = "true" === a["send-fccs"];
            this.M = a.qid || ""
        }
        init(a) {
            nb([a]);
            this.data = new Oa(a);
            a = ya(this.data);
            r(Ba(a), e => {
                this.B.push({
                    I: 0,
                    C: !1,
                    J: 0,
                    m: e,
                    G: -1
                })
            });
            this.l = qb();
            let b = !1;
            a = this.l.length;
            for (let e = 0; e < a; ++e) {
                var c = new za(JSON.parse(this.l[e].getAttribute("data-ifc") || "[]"));
                r(Ba(c), f => {
                    this.B.push({
                        I: 0,
                        C: !1,
                        J: 0,
                        m: f,
                        G: e
                    });
                    1 === K(f,
                        4) && (b = !0)
                })
            }
            c = a = !1;
            for (var d of this.B) {
                const e = d.m;
                0 < G(e, 2) && 0 < K(e, 5) ? (!this.i && J(e, 9) && (this.i = Rb(this, Pb)), Sb(this, d)) : I(e) && J(e, 9) && Tb(this, I(e));
                I(e) && (a = !0);
                0 < G(e, 11) && (c = !0)
            }
            d = [];
            this.i && d.push(this.i);
            !b && d.push(...this.s);
            S.body && sb(d);
            J(this.data, 13) && hb(() => {
                const e = S.body.querySelectorAll(".amp-fcp, .amp-bcp");
                for (let g = 0; g < e.length; ++g) {
                    var f = (f = e[g]) ? T.getComputedStyle(f).getPropertyValue("position") : void 0;
                    "absolute" === f && Y(e[g], !1)
                }
            });
            N(S, "click", e => {
                if (this.N) {
                    var f = {
                        cx: e.clientX,
                        cy: e.clientY,
                        et: Date.now(),
                        qid: this.M
                    };
                    var g = Lb;
                    var h = "O";
                    g.O && g.hasOwnProperty(h) || (h = new g, g.O = h);
                    g = [];
                    !f.eid && g.length && (f.eid = g.toString());
                    Ab(f);
                    this.N = !1
                }
                if (!1 === e.isTrusted && J(this.data, 15)) e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopImmediatePropagation(), mb();
                else {
                    f = -1;
                    g = [];
                    for (var l of this.B) {
                        h = l.G;
                        var k = -1 !== h;
                        if (!(G(l.m, 3) <= f || l.C || k && !1 === g[h])) {
                            var m = !k || g[h] || this.l[h].contains(e.target);
                            k && m && (g[h] = !0);
                            if (h = m)
                                if (h = e, m = l, k = m.m, 0 < G(k, 2) && 0 < K(k, 5)) h = this.F[K(k, 5)], h = void 0 !==
                                    h && Date.now() < h + G(k, 2);
                                else if (I(k)) {
                                {
                                    k = (0 <= m.G ? this.l[m.G] : S.body).getBoundingClientRect();
                                    var x = Number;
                                    var u = (u = S.body) ? T.getComputedStyle(u).getPropertyValue("zoom") : void 0;
                                    x = x(u || "1");
                                    const [qa, $b] = [h.clientX, h.clientY], [ca, da, ra, sa] = [qa / x - k.left, $b / x - k.top, k.width, k.height];
                                    if (!(0 < ra && 0 < sa) || isNaN(ca) || isNaN(da) || 0 > ca || 0 > da) h = !1;
                                    else {
                                        m = Qb(I(m.m));
                                        u = !(ca >= m.left && ra - ca > m.right && da >= m.top && sa - da > m.bottom);
                                        if (this.h && J(this.data, 12) && 300 > h.timeStamp - this.h.timeStamp) {
                                            h = this.h.changedTouches[0];
                                            const [ea, fa] = [h.clientX / x - k.left, h.clientY / x - k.top];
                                            !isNaN(ea) && !isNaN(fa) && 0 <= ea && 0 <= fa && (u = (u = J(this.data, 16) ? u : !1) || !(ea >= m.left && ra - ea > m.right && fa >= m.top && sa - fa > m.bottom))
                                        }
                                        h = u
                                    }
                                }
                            } else h = 0 < G(k, 11) ? Vb(this, h, m) : !0;
                            if (h) {
                                var q = l;
                                f = G(l.m, 3)
                            }
                        }
                    }
                    if (q) switch (l = q.m, K(l, 4)) {
                        case 2:
                        case 3:
                            e.preventDefault ? e.preventDefault() : e.returnValue = !1;
                            f = Date.now();
                            500 < f - q.J && (q.J = f, ++q.I);
                            f = q.m;
                            if (G(f, 8) && q.I >= G(f, 8))
                                if (q.C = !0, this.i && 0 < G(f, 2)) Ub(this);
                                else if (0 < this.s.length && I(f))
                                for (var ta of this.s) Y(ta, !1);
                            mb();
                            ta = l.toJSON();
                            for (const qa of this.H) qa(e, ta)
                    }
                }
            }, Ra);
            c && N(S, "touchstart", e => {
                this.D = e
            }, Sa);
            (a && J(this.data, 12) || c) && N(S, "touchend", e => {
                this.h = e
            }, Sa)
        }
        registerCallback(a) {
            this.H.push(a)
        }
    };
    const Yb = lb(document.currentScript);
    if (null == Yb) throw Error("JSC not found 23");
    var Wb;
    const Zb = {},
        ac = Yb.attributes;
    for (let a = ac.length - 1; 0 <= a; a--) {
        const b = ac[a].name;
        0 === b.indexOf("data-jcp-") && (Zb[b.substring(9)] = ac[a].value)
    }
    Wb = Zb;
    window.googqscp = new Xb;
}).call(this);