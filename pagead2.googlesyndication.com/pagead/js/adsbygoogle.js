(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var aa = {},
        n = this || self;

    function ba(a) {
        a = a.split(".");
        for (var b = n, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function ca(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function da(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function ea(a) {
        return Object.prototype.hasOwnProperty.call(a, fa) && a[fa] || (a[fa] = ++ha)
    }
    var fa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ha = 0;

    function ia(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ja(a, b, c) {
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

    function ka(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ka = ia : ka = ja;
        return ka.apply(null, arguments)
    }

    function la(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function ma(a, b) {
        a = a.split(".");
        var c = n;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function na(a) {
        return a
    };
    let oa = (new Date).getTime();

    function pa(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function qa(a, b) {
        let c = 0;
        a = pa(String(a)).split(".");
        b = pa(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; 0 == c && g < d; g++) {
            var e = a[g] || "",
                f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (0 == e[0].length && 0 == f[0].length) break;
                c = ra(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || ra(0 == e[2].length, 0 == f[2].length) || ra(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (0 == c)
        }
        return c
    }

    function ra(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function sa() {
        var a = n.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function p(a) {
        return -1 != sa().indexOf(a)
    };

    function ua() {
        return p("Trident") || p("MSIE")
    }

    function va() {
        return (p("Chrome") || p("CriOS")) && !p("Edge") || p("Silk")
    }

    function wa(a) {
        const b = {};
        a.forEach(c => {
            b[c[0]] = c[1]
        });
        return c => b[c.find(d => d in b)] || ""
    }

    function xa() {
        var a = sa();
        if (ua()) {
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
        a = wa(b);
        return p("Opera") ? a(["Version", "Opera"]) :
            p("Edge") ? a(["Edge"]) : p("Edg/") ? a(["Edg"]) : p("Silk") ? a(["Silk"]) : va() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function ya(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function za(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Aa(a, b) {
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

    function Da(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Ea(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Fa(a, b) {
        a: {
            const c = a.length,
                d = "string" === typeof a ? a.split("") : a;
            for (let e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Ga(a, b) {
        a: {
            var c = a.length;
            const d = "string" === typeof a ? a.split("") : a;
            for (--c; 0 <= c; c--)
                if (c in d && b.call(void 0, d[c], c, a)) {
                    b = c;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Ha(a, b) {
        return 0 <= ya(a, b)
    }

    function Ia(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function Ka(a) {
        Ka[" "](a);
        return a
    }
    Ka[" "] = function() {};
    var La = ua();
    !p("Android") || va();
    va();
    !p("Safari") || va();
    var Ma = {},
        Na = null;

    function Oa(a) {
        var b = [];
        Pa(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Pa(a, b) {
        function c(l) {
            for (; d < a.length;) {
                var k = a.charAt(d++),
                    m = Na[k];
                if (null != m) return m;
                if (!/^[\s\xa0]*$/.test(k)) throw Error("Unknown base64 encoding at char: " + k);
            }
            return l
        }
        Qa();
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

    function Qa() {
        if (!Na) {
            Na = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                Ma[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === Na[f] && (Na[f] = e)
                }
            }
        }
    };
    var Ra = "undefined" !== typeof Uint8Array;
    const Sa = !La && "function" === typeof n.btoa;

    function Ta(a) {
        if (!Sa) {
            var b;
            void 0 === b && (b = 0);
            Qa();
            b = Ma[b];
            const g = Array(Math.floor(a.length / 3)),
                h = b[64] || "";
            let l = 0,
                k = 0;
            for (; l < a.length - 2; l += 3) {
                var c = a[l],
                    d = a[l + 1],
                    e = a[l + 2],
                    f = b[c >> 2];
                c = b[(c & 3) << 4 | d >> 4];
                d = b[(d & 15) << 2 | e >> 6];
                e = b[e & 63];
                g[k++] = f + c + d + e
            }
            f = 0;
            e = h;
            switch (a.length - l) {
                case 2:
                    f = a[l + 1], e = b[(f & 15) << 2] || h;
                case 1:
                    a = a[l], g[k] = b[a >> 2] + b[(a & 3) << 4 | f >> 4] + e + h
            }
            return g.join("")
        }
        for (b = ""; 10240 < a.length;) b += String.fromCharCode.apply(null, a.subarray(0, 10240)), a = a.subarray(10240);
        b += String.fromCharCode.apply(null,
            a);
        return btoa(b)
    }
    var Va = {};
    let Wa;
    var Xa = class {
        constructor(a) {
            if (Va !== Va) throw Error("illegal external caller");
            this.xa = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        }
        isEmpty() {
            return null == this.xa
        }
    };
    const Ya = Symbol();

    function Za(a, b) {
        if (Ya) return a[Ya] |= b;
        if (void 0 !== a.L) return a.L |= b;
        Object.defineProperties(a, {
            L: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    }

    function $a(a, b) {
        const c = q(a);
        (c & b) !== b && (Object.isFrozen(a) && (a = Array.prototype.slice.call(a)), ab(a, c | b));
        return a
    }

    function bb(a, b) {
        Ya ? a[Ya] && (a[Ya] &= ~b) : void 0 !== a.L && (a.L &= ~b)
    }

    function q(a) {
        let b;
        Ya ? b = a[Ya] : b = a.L;
        return null == b ? 0 : b
    }

    function ab(a, b) {
        Ya ? a[Ya] = b : void 0 !== a.L ? a.L = b : Object.defineProperties(a, {
            L: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function cb(a) {
        Za(a, 1);
        return a
    }

    function db(a) {
        return !!(q(a) & 2)
    }

    function eb(a) {
        Za(a, 16);
        return a
    }

    function fb(a, b) {
        ab(b, (a | 0) & -51)
    }

    function gb(a, b) {
        ab(b, (a | 18) & -41)
    };
    var hb = {};

    function ib(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let jb;
    var kb;
    const lb = [];
    ab(lb, 23);
    kb = Object.freeze(lb);

    function mb(a) {
        if (db(a.u)) throw Error("Cannot mutate an immutable Message");
    }

    function nb(a) {
        var b = a.length;
        (b = b ? a[b - 1] : void 0) && ib(b) ? b.g = 1 : a.push({
            g: 1
        })
    };
    let ob;

    function pb(a, b) {
        ob = b;
        a = new a(b);
        ob = void 0;
        return a
    };

    function qb(a) {
        const b = a.j + a.W;
        return a.H || (a.H = a.u[b] = {})
    }

    function r(a, b, c) {
        return -1 === b ? null : b >= a.j ? a.H ? a.H[b] : void 0 : c && a.H && (c = a.H[b], null != c) ? c : a.u[b + a.W]
    }

    function t(a, b, c, d) {
        mb(a);
        return rb(a, b, c, d)
    }

    function rb(a, b, c, d) {
        a.v && (a.v = void 0);
        if (b >= a.j || d) return qb(a)[b] = c, a;
        a.u[b + a.W] = c;
        (c = a.H) && b in c && delete c[b];
        return a
    }

    function sb(a, b, c, d, e) {
        let f = r(a, b, d);
        Array.isArray(f) || (f = kb);
        const g = q(f);
        g & 1 || cb(f);
        if (e) g & 2 || Za(f, 2), c & 1 || Object.freeze(f);
        else {
            e = !(c & 2);
            const h = g & 2;
            c & 1 || !h ? e && g & 16 && !h && bb(f, 16) : (f = cb(Array.prototype.slice.call(f)), rb(a, b, f, d))
        }
        return f
    }

    function tb(a, b, c = !1) {
        return sb(a, b, 0, c, db(a.u))
    }

    function ub(a, b) {
        a = r(a, b);
        return null == a ? a : !!a
    }

    function vb(a, b) {
        const c = db(a.u);
        let d = sb(a, b, 1, !1, c);
        const e = q(d);
        if (!(e & 4)) {
            Object.isFrozen(d) && (d = cb(d.slice()), rb(a, b, d, !1));
            let f = 0,
                g = 0;
            for (; f < d.length; f++) {
                const h = d[f];
                null != h && (d[g++] = h)
            }
            g < f && (d.length = g);
            Za(d, 5);
            c && (Za(d, 2), Object.freeze(d))
        }!c && (e & 2 || Object.isFrozen(d)) && (d = Array.prototype.slice.call(d), Za(d, 5), wb(a, b, d, !1));
        return d
    }

    function wb(a, b, c, d) {
        c = null == c ? kb : $a(c, 1);
        return t(a, b, c, d)
    }

    function x(a, b, c, d) {
        mb(a);
        c !== d ? rb(a, b, c) : rb(a, b, void 0, !1);
        return a
    }

    function xb(a, b, c, d) {
        mb(a);
        (c = yb(a, c)) && c !== b && null != d && rb(a, c, void 0, !1);
        return rb(a, b, d)
    }

    function zb(a, b, c) {
        return yb(a, b) === c ? c : -1
    }

    function yb(a, b) {
        let c = 0;
        for (let d = 0; d < b.length; d++) {
            const e = b[d];
            null != r(a, e) && (0 !== c && rb(a, c, void 0, !1), c = e)
        }
        return c
    }

    function Ab(a, b, c, d) {
        const e = r(a, c, d); {
            let g = !1;
            var f = null == e || "object" !== typeof e || (g = Array.isArray(e)) || e.ua !== hb ? g ? new b(e) : void 0 : e
        }
        f !== e && null != f && (rb(a, c, f, d), Za(f.u, q(a.u) & 18));
        return f
    }

    function z(a, b, c) {
        b = Ab(a, b, c, !1);
        if (null == b) return b;
        if (!db(a.u)) {
            const d = Bb(b);
            d !== b && (b = d, rb(a, c, b, !1))
        }
        return b
    }

    function Cb(a, b, c, d, e) {
        a.h || (a.h = {});
        var f = a.h[c],
            g = sb(a, c, 3, void 0, e);
        if (!f) {
            var h = g;
            f = [];
            var l = !!(q(a.u) & 16);
            g = db(h);
            const v = h;
            !e && g && (h = Array.prototype.slice.call(h));
            var k = g;
            let y = 0;
            for (; y < h.length; y++) {
                var m = h[y];
                m = Array.isArray(m) ? new b(m) : void 0;
                if (void 0 === m) continue;
                var u = m.u;
                const w = q(u);
                let C = w;
                g && (C |= 2);
                l && (C |= 16);
                C != w && ab(u, C);
                u = C;
                k = k || !!(2 & u);
                f.push(m)
            }
            a.h[c] = f;
            l = q(h);
            b = l | 33;
            b = k ? b & -9 : b | 8;
            l != b && (k = h, Object.isFrozen(k) && (k = Array.prototype.slice.call(k)), ab(k, b), h = k);
            v !== h && rb(a, c, h);
            (e ||
                d && g) && Za(f, 2);
            d && Object.freeze(f);
            return f
        }
        e || (e = Object.isFrozen(f), d && !e ? Object.freeze(f) : !d && e && (f = Array.prototype.slice.call(f), a.h[c] = f));
        return f
    }

    function A(a, b, c) {
        var d = db(a.u);
        b = Cb(a, b, c, d, d);
        a = sb(a, c, 3, void 0, d);
        if (!(d || q(a) & 8)) {
            for (d = 0; d < b.length; d++) {
                c = b[d];
                const e = Bb(c);
                c !== e && (b[d] = e, a[d] = e.u)
            }
            Za(a, 8)
        }
        return b
    }

    function Db(a, b, c) {
        mb(a);
        null == c && (c = void 0);
        return rb(a, b, c)
    }

    function Eb(a, b, c, d) {
        mb(a);
        null == d && (d = void 0);
        return xb(a, b, c, d)
    }

    function Fb(a, b, c, d) {
        mb(a);
        let e = null == c ? kb : cb([]);
        if (null != c) {
            let f = !!c.length;
            for (let g = 0; g < c.length; g++) {
                const h = c[g];
                f = f && !db(h.u);
                e[g] = h.u
            }
            e = $a(e, (f ? 8 : 0) | 1);
            a.h || (a.h = {});
            a.h[b] = c
        } else a.h && (a.h[b] = void 0);
        return rb(a, b, e, d)
    }

    function B(a, b) {
        return null == a ? b : a
    }

    function D(a, b) {
        return B(r(a, b), "")
    }

    function E(a, b, c = !1) {
        return B(ub(a, b), c)
    }

    function Gb(a, b) {
        const c = r(a, b);
        var d = null == c ? c : "number" === typeof c || "NaN" === c || "Infinity" === c || "-Infinity" === c ? Number(c) : void 0;
        null != d && d !== c && rb(a, b, d);
        return B(d, 0)
    }

    function F(a, b) {
        return B(r(a, b), 0)
    }

    function Hb(a, b, c, d) {
        return z(a, b, zb(a, d, c))
    };

    function Ib(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (0 !== (q(a) & 128)) return a = Array.prototype.slice.call(a), nb(a), a
                    } else {
                        if (Ra && null != a && a instanceof Uint8Array) return Ta(a);
                        if (a instanceof Xa) {
                            const b = a.xa;
                            return null == b ? "" : "string" === typeof b ? b : a.xa = Ta(b)
                        }
                    }
        }
        return a
    };

    function Jb(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = Kb(a, b, c, void 0 !== d);
            else if (ib(a)) {
                const e = {};
                for (let f in a) Object.prototype.hasOwnProperty.call(a, f) && (e[f] = Jb(a[f], b, c, d));
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function Kb(a, b, c, d) {
        const e = q(a);
        d = d ? !!(e & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (let f = 0; f < a.length; f++) a[f] = Jb(a[f], b, c, d);
        c(e, a);
        return a
    }

    function Lb(a) {
        return a.ua === hb ? a.toJSON() : Ib(a)
    }

    function Mb(a, b) {
        a & 128 && nb(b)
    };

    function Nb(a, b, c = gb) {
        if (null != a) {
            if (Ra && a instanceof Uint8Array) return a.length ? new Xa(new Uint8Array(a)) : Wa || (Wa = new Xa(null));
            if (Array.isArray(a)) {
                const d = q(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return ab(a, d | 2), a;
                a = Kb(a, Nb, d & 4 ? gb : c, !0);
                b = q(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            return a.ua === hb ? Ob(a) : a
        }
    }

    function Pb(a, b, c, d, e, f, g) {
        (a = a.h && a.h[c]) ? (d = q(a), d & 2 ? d = a : (f = Da(a, Ob), gb(d, f), Object.freeze(f), d = f), Fb(b, c, d, e)) : t(b, c, Nb(d, f, g), e)
    }

    function Ob(a) {
        if (db(a.u)) return a;
        a = Qb(a, !0);
        Za(a.u, 2);
        return a
    }

    function Qb(a, b) {
        const c = a.u;
        var d = eb([]),
            e = a.constructor.messageId;
        e && d.push(e);
        e = a.H;
        if (e) {
            d.length = c.length;
            d.fill(void 0, d.length, c.length);
            var f = {};
            d[d.length - 1] = f
        }
        0 !== (q(c) & 128) && nb(d);
        b = b || db(a.u) ? gb : fb;
        d = pb(a.constructor, d);
        a.Na && (d.Na = a.Na.slice());
        f = !!(q(c) & 16);
        const g = e ? c.length - 1 : c.length;
        for (let h = 0; h < g; h++) Pb(a, d, h - a.W, c[h], !1, f, b);
        if (e)
            for (const h in e) Pb(a, d, +h, e[h], !0, f, b);
        return d
    }

    function Bb(a) {
        if (!db(a.u)) return a;
        const b = Qb(a, !1);
        b.v = a;
        return b
    };
    var G = class {
        constructor(a, b, c) {
            null == a && (a = ob);
            ob = void 0;
            var d = 0 < (this.constructor.h || 0),
                e = this.constructor.messageId,
                f = !1;
            if (null == a) {
                a = e ? [e] : [];
                var g = 48;
                var h = !0;
                d && (g |= 128);
                ab(a, g)
            } else {
                if (!Array.isArray(a)) throw Error();
                if (e && e !== a[0]) throw Error();
                let l = g = Za(a, 0);
                if (h = 0 !== (16 & l))(f = 0 !== (32 & l)) || (l |= 32);
                if (d) {
                    if (!(l & 128) && 0 < a.length) {
                        const k = a[a.length - 1];
                        if (ib(k) && "g" in k) {
                            l |= 128;
                            delete k.g;
                            let m = !0;
                            for (let u in k) {
                                m = !1;
                                break
                            }
                            m && a.pop()
                        } else throw Error();
                    }
                } else if (128 & l) throw Error();
                g !== l &&
                    ab(a, l)
            }
            this.W = e ? 0 : -1;
            this.h = void 0;
            this.u = a;
            a: {
                g = this.u.length;e = g - 1;
                if (g && (g = this.u[e], ib(g))) {
                    this.H = g;
                    this.j = e - this.W;
                    break a
                }
                void 0 !== b && -1 < b ? (this.j = Math.max(b, e + 1 - this.W), this.H = void 0) : this.j = Number.MAX_VALUE
            }
            if (!d && this.H && "g" in this.H) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
            if (c) {
                b = h && !f && !0;
                d = this.j;
                let l;
                for (h = 0; h < c.length; h++) f = c[h], f < d ? (f += this.W, (e = a[f]) ? Rb(e, b) : a[f] = kb) : (l || (l = qb(this)), (e = l[f]) ? Rb(e, b) : l[f] = kb)
            }
        }
        toJSON() {
            const a = this.u;
            return jb ? a : Kb(a, Lb, Mb)
        }
    };

    function Rb(a, b) {
        if (Array.isArray(a)) {
            var c = q(a),
                d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && ab(a, c | d)
        }
    }
    G.prototype.ua = hb;

    function Sb(a, b) {
        return Ib(b)
    };
    const Tb = a => null !== a && void 0 !== a;
    let Ub = void 0;

    function Vb(a, b) {
        const c = Ub;
        Ub = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    };

    function Wb(a) {
        return b => {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                b = pb(a, eb(b))
            }
            return b
        }
    };
    var Xb = class extends G {
        constructor(a) {
            super(a)
        }
    };
    var Zb = class extends G {
            constructor(a) {
                super(a, -1, Yb)
            }
        },
        Yb = [2, 3];

    function $b(a, b) {
        this.i = a === ac && b || "";
        this.h = bc
    }
    var bc = {},
        ac = {};

    function cc(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function dc(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function fc(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    };

    function gc(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function hc(a, b, c) {
        return a.removeEventListener ? (a.removeEventListener(b, c, !1), !0) : !1
    };

    function ic(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function jc(a, b) {
        for (const c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function kc(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function lc(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    };
    var mc;

    function nc() {
        if (void 0 === mc) {
            var a = null,
                b = n.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: na,
                        createScript: na,
                        createScriptURL: na
                    })
                } catch (c) {
                    n.console && n.console.error(c.message)
                }
                mc = a
            } else mc = a
        }
        return mc
    };
    const oc = {};
    class pc {
        constructor(a, b) {
            this.h = b === oc ? a : ""
        }
        toString() {
            return this.h.toString()
        }
    };
    var rc = class {
        constructor(a, b) {
            this.h = b === qc ? a : ""
        }
        toString() {
            return this.h + ""
        }
    };

    function sc(a, b) {
        a = tc.exec(uc(a).toString());
        var c = a[3] || "";
        return vc(a[1] + wc("?", a[2] || "", b) + wc("#", c))
    }

    function uc(a) {
        return a instanceof rc && a.constructor === rc ? a.h : "type_error:TrustedResourceUrl"
    }
    var tc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        qc = {};

    function vc(a) {
        const b = nc();
        a = b ? b.createScriptURL(a) : a;
        return new rc(a, qc)
    }

    function wc(a, b, c) {
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

    function xc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };

    function yc(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!ca(f) || da(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (da(f)) {
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
                za(g ? Ia(f) : f, d)
            }
        }
    }

    function zc(a) {
        this.h = a || n.document || document
    }
    zc.prototype.getElementsByTagName = function(a, b) {
        return (b || this.h).getElementsByTagName(String(a))
    };
    zc.prototype.createElement = function(a) {
        var b = this.h;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    zc.prototype.createTextNode = function(a) {
        return this.h.createTextNode(String(a))
    };
    zc.prototype.append = function(a, b) {
        yc(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments)
    };
    zc.prototype.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function Ac() {
        return !Bc() && (p("iPod") || p("iPhone") || p("Android") || p("IEMobile"))
    }

    function Bc() {
        return p("iPad") || p("Android") && !p("Mobile") || p("Silk")
    };
    var Cc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        Dc = /#|$/;

    function Ec(a, b) {
        var c = a.search(Dc);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d) return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function Fc(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    Ka(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch {
            return !1
        }
    }

    function Gc(a) {
        return Fc(a.top) ? a.top : null
    }

    function Hc(a, b) {
        const c = Ic("SCRIPT", a);
        c.src = uc(b);
        (b = (b = (c.ownerDocument && c.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function Jc(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Kc(a, b) {
        if (!Lc() && !Mc()) {
            let c = Math.random();
            if (c < b) return c = Nc(), a[Math.floor(c * a.length)]
        }
        return null
    }

    function Nc() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function H(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Oc(a) {
        const b = a.length;
        if (0 == b) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Mc = dc(() => Ea(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Pc) || 1E-4 > Math.random()),
        Lc = dc(() => -1 != sa().indexOf("MSIE"));
    const Pc = a => -1 != sa().indexOf(a);
    var Qc = /^([0-9.]+)px$/,
        Rc = /^(-?[0-9.]{1,30})$/;

    function Sc(a) {
        if (!Rc.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function I(a) {
        return (a = Qc.exec(a)) ? +a[1] : null
    }
    var Tc = (a, b) => {
            for (let e = 0; 50 > e; ++e) {
                try {
                    var c = !(!a.frames || !a.frames[b])
                } catch {
                    c = !1
                }
                if (c) return a;
                a: {
                    try {
                        const f = a.parent;
                        if (f && f != a) {
                            var d = f;
                            break a
                        }
                    } catch {}
                    d = null
                }
                if (!(a = d)) break
            }
            return null
        },
        Uc = dc(() => Ac() ? 2 : Bc() ? 1 : 0),
        Vc = (a, b) => {
            H(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        };
    let Wc = [];
    const Xc = () => {
        const a = Wc;
        Wc = [];
        for (const b of a) try {
            b()
        } catch {}
    };

    function Yc(a, b) {
        if (a.length && b.head)
            for (const c of a) a: {
                a = c;
                if (!a || !b.head) break a;
                const d = Ic("META");b.head.appendChild(d);d.httpEquiv = "origin-trial";d.content = a
            }
    }
    var Zc = a => {
            if ("number" !== typeof a.goog_pvsid) try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: Math.floor(Math.random() * 2 ** 52),
                    configurable: !1
                })
            } catch (b) {}
            return Number(a.goog_pvsid) || -1
        },
        ad = a => {
            var b = $c;
            "complete" === b.readyState || "interactive" === b.readyState ? (Wc.push(a), 1 == Wc.length && (window.Promise ? Promise.resolve().then(Xc) : window.setImmediate ? setImmediate(Xc) : setTimeout(Xc, 0))) : b.addEventListener("DOMContentLoaded", a)
        };

    function Ic(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    };

    function bd(a, b, c = null, d = !1, e = !1) {
        dd(a, b, c, d, e)
    }

    function dd(a, b, c, d, e = !1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = Ic("IMG", a.document);
        if (c || d) {
            const g = h => {
                c && c(h);
                if (d) {
                    h = a.google_image_requests;
                    const l = ya(h, f);
                    0 <= l && Array.prototype.splice.call(h, l, 1)
                }
                hc(f, "load", g);
                hc(f, "error", g)
            };
            gc(f, "load", g);
            gc(f, "error", g)
        }
        e && (f.attributionsrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var fd = (a, b) => {
            let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
            H(a, (d, e) => {
                d && (c += `&${e}=${encodeURIComponent(d)}`)
            });
            ed(c)
        },
        ed = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : bd(b, a, void 0, !1, !1)
        };
    let gd = null;
    var $c = document,
        J = window;
    let hd = null;
    var id = (a, b = []) => {
        let c = !1;
        n.google_logging_queue || (c = !0, n.google_logging_queue = []);
        n.google_logging_queue.push([a, b]);
        if (a = c) {
            if (null == hd) {
                hd = !1;
                try {
                    var d = Gc(n);
                    d && -1 !== d.location.hash.indexOf("google_logging") && (hd = !0);
                    n.localStorage.getItem("google_logging") && (hd = !0)
                } catch (e) {}
            }
            a = hd
        }
        a && (d = n.document, a = new $b(ac, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"), a = vc(a instanceof $b && a.constructor === $b && a.h === bc ? a.i : "type_error:Const"), Hc(d, a))
    };

    function jd(a = n) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch {}
        return b ? .pageViewId && b ? .canonicalUrl ? b : null
    }

    function kd(a = jd()) {
        return a ? Fc(a.master) ? a.master : null : null
    };

    function ld(a, ...b) {
        if (0 === b.length) return vc(a[0]);
        const c = [a[0]];
        for (let d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return vc(c.join(""))
    };

    function md(a) {
        a = a[0];
        const b = nc();
        a = b ? b.createScript(a) : a;
        return new pc(a, oc)
    };
    var nd = a => {
            a = kd(jd(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1;
            return a.google_unique_id
        },
        od = a => {
            a = a.google_unique_id;
            return "number" === typeof a ? a : 0
        },
        pd = () => {
            if (!J) return !1;
            try {
                return !(!J.navigator.standalone && !J.top.navigator.standalone)
            } catch (a) {
                return !1
            }
        },
        qd = a => {
            if (!a) return "";
            a = a.toLowerCase();
            "ca-" != a.substring(0, 3) && (a = "ca-" + a);
            return a
        };
    class rd {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    }
    var sd = a => !!(a.error && a.meta && a.id);
    const td = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var ud = class {
            constructor(a, b) {
                this.h = a;
                this.i = b
            }
        },
        vd = class {
            constructor(a, b, c) {
                this.url = a;
                this.s = b;
                this.Oa = !!c;
                this.depth = null
            }
        };

    function wd(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function xd(a, b, c, d, e) {
        const f = [];
        H(a, function(g, h) {
            (g = yd(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function yd(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(yd(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(xd(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function zd(a) {
        let b = 1;
        for (const c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    }

    function Ad(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = zd(a) - b.length;
        if (0 > d) return "";
        a.h.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.h.length; f++) {
            const g = a.h[f],
                h = a.i[g];
            for (let l = 0; l < h.length; l++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let k = xd(h[l], a.j, ",$");
                if (k) {
                    k = e + k;
                    if (d >= k.length) {
                        d -= k.length;
                        c += k;
                        e = a.j;
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
    class Bd {
        constructor() {
            this.j = "&";
            this.i = {};
            this.l = 0;
            this.h = []
        }
    };

    function Cd(a, b) {
        0 <= b && 1 >= b && (a.h = b)
    }

    function Dd(a, b, c, d = !1, e) {
        if ((d ? a.h : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Bd ? f = c : (f = new Bd, H(c, (h, l) => {
                var k = f;
                const m = k.l++;
                h = wd(l, h);
                k.h.push(m);
                k.i[m] = h
            }));
            const g = Ad(f, "/pagead/gen_204?id=" + b + "&");
            g && bd(n, g)
        } catch (f) {}
    }
    class Ed {
        constructor() {
            this.h = Math.random()
        }
    };
    let Fd = null;

    function Gd() {
        if (null === Fd) {
            Fd = "";
            try {
                let a = "";
                try {
                    a = n.top.location.hash
                } catch (b) {
                    a = n.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    Fd = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return Fd
    };

    function Hd() {
        const a = n.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Id() {
        const a = n.performance;
        return a && a.now ? a.now() : null
    };
    class Jd {
        constructor(a, b) {
            var c = Id() || Hd();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.taskId = this.slotId = void 0
        }
    };
    const Kd = n.performance,
        Ld = !!(Kd && Kd.mark && Kd.measure && Kd.clearMarks),
        Md = dc(() => {
            var a;
            if (a = Ld) a = Gd(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function Nd(a) {
        a && Kd && Md() && (Kd.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Kd.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function Od(a) {
        a.h = !1;
        a.i != a.j.google_js_reporting_queue && (Md() && za(a.i, Nd), a.i.length = 0)
    }
    class Pd {
        constructor(a) {
            this.i = [];
            this.j = a || n;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.i = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.h = Md() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.h) return null;
            a = new Jd(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Kd && Md() && Kd.mark(b);
            return a
        }
        end(a) {
            if (this.h && "number" === typeof a.value) {
                a.duration = (Id() || Hd()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                Kd && Md() && Kd.mark(b);
                !this.h || 2048 < this.i.length ||
                    this.i.push(a)
            }
        }
    };

    function Qd(a) {
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
    class Rd {
        constructor(a, b = null) {
            this.A = a;
            this.h = null;
            this.m = this.I;
            this.i = b;
            this.j = !1
        }
        Sa(a) {
            this.m = a
        }
        wa(a) {
            this.h = a
        }
        l(a) {
            this.j = a
        }
        ia(a, b, c) {
            let d, e;
            try {
                this.i && this.i.h ? (e = this.i.start(a.toString(), 3), d = b(), this.i.end(e)) : d = b()
            } catch (f) {
                b = !0;
                try {
                    Nd(e), b = this.m(a, new rd(f, {
                        message: Qd(f)
                    }), void 0, c)
                } catch (g) {
                    this.I(217, g)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        va(a, b) {
            return (...c) => this.ia(a, () => b.apply(void 0, c))
        }
        I(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const Ja = new Bd;
                var g = Ja;
                g.h.push(1);
                g.i[1] = wd("context", a);
                sd(b) || (b = new rd(b, {
                    message: Qd(b)
                }));
                if (b.msg) {
                    g = Ja;
                    var h = b.msg.substring(0, 512);
                    g.h.push(2);
                    g.i[2] = wd("msg", h)
                }
                var l = b.meta || {};
                b = l;
                if (this.h) try {
                    this.h(b)
                } catch (Ua) {}
                if (d) try {
                    d(b)
                } catch (Ua) {}
                d = Ja;
                l = [l];
                d.h.push(3);
                d.i[3] = l;
                d = n;
                l = [];
                b = null;
                do {
                    var k = d;
                    if (Fc(k)) {
                        var m = k.location.href;
                        b = k.document && k.document.referrer || null
                    } else m = b, b = null;
                    l.push(new vd(m || "", k));
                    try {
                        d = k.parent
                    } catch (Ua) {
                        d = null
                    }
                } while (d && k != d);
                for (let Ua = 0, lf = l.length - 1; Ua <= lf; ++Ua) l[Ua].depth = lf - Ua;
                k = n;
                if (k.location &&
                    k.location.ancestorOrigins && k.location.ancestorOrigins.length == l.length - 1)
                    for (m = 1; m < l.length; ++m) {
                        var u = l[m];
                        u.url || (u.url = k.location.ancestorOrigins[m - 1] || "", u.Oa = !0)
                    }
                var v = l;
                let ec = new vd(n.location.href, n, !1);
                k = null;
                const cd = v.length - 1;
                for (u = cd; 0 <= u; --u) {
                    var y = v[u];
                    !k && td.test(y.url) && (k = y);
                    if (y.url && !y.Oa) {
                        ec = y;
                        break
                    }
                }
                y = null;
                const Wi = v.length && v[cd].url;
                0 != ec.depth && Wi && (y = v[cd]);
                f = new ud(ec, y);
                if (f.i) {
                    v = Ja;
                    var w = f.i.url || "";
                    v.h.push(4);
                    v.i[4] = wd("top", w)
                }
                var C = {
                    url: f.h.url || ""
                };
                if (f.h.url) {
                    var Ba =
                        f.h.url.match(Cc),
                        U = Ba[1],
                        Ca = Ba[3],
                        ta = Ba[4];
                    w = "";
                    U && (w += U + ":");
                    Ca && (w += "//", w += Ca, ta && (w += ":" + ta));
                    var mf = w
                } else mf = "";
                U = Ja;
                C = [C, {
                    url: mf
                }];
                U.h.push(5);
                U.i[5] = C;
                Dd(this.A, e, Ja, this.j, c)
            } catch (Ja) {
                try {
                    Dd(this.A, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Qd(Ja),
                        url: f && f.h.url
                    }, this.j, c)
                } catch (ec) {}
            }
            return !0
        }
        ca(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.I(a, c instanceof Error ? c : Error(c), void 0, this.h || void 0)
            })
        }
    };
    var Sd = a => "string" === typeof a,
        Td = a => void 0 === a;
    var Vd = class extends G {
            constructor(a) {
                super(a, -1, Ud)
            }
        },
        Ud = [2, 8],
        Wd = [3, 4, 5],
        Xd = [6, 7];

    function Yd(a) {
        return null != a ? !a : a
    }

    function Zd(a, b) {
        let c = !1;
        for (let d = 0; d < a.length; d++) {
            const e = a[d]();
            if (e === b) return e;
            null == e && (c = !0)
        }
        if (!c) return !b
    }

    function $d(a, b) {
        var c = A(a, Vd, 2);
        if (!c.length) return ae(a, b);
        a = F(a, 1);
        if (1 === a) return Yd($d(c[0], b));
        c = Da(c, d => () => $d(d, b));
        switch (a) {
            case 2:
                return Zd(c, !1);
            case 3:
                return Zd(c, !0)
        }
    }

    function ae(a, b) {
        const c = yb(a, Wd);
        a: {
            switch (c) {
                case 3:
                    var d = F(a, zb(a, Wd, 3));
                    break a;
                case 4:
                    d = F(a, zb(a, Wd, 4));
                    break a;
                case 5:
                    d = F(a, zb(a, Wd, 5));
                    break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b(...vb(a, 8))
            } catch (f) {
                return
            }
            b = F(a, 1);
            if (4 === b) return !!e;
            if (5 === b) return null != e;
            if (12 === b) a = D(a, zb(a, Xd, 7));
            else a: {
                switch (c) {
                    case 4:
                        a = Gb(a, zb(a, Xd, 6));
                        break a;
                    case 5:
                        a = D(a, zb(a, Xd, 7));
                        break a
                }
                a = void 0
            }
            if (null != a) {
                if (6 === b) return e === a;
                if (9 === b) return null != e && 0 === qa(String(e), a);
                if (null != e) switch (b) {
                    case 7:
                        return e <
                            a;
                    case 8:
                        return e > a;
                    case 12:
                        return Sd(a) && Sd(e) && (new RegExp(a)).test(e);
                    case 10:
                        return null != e && -1 === qa(String(e), a);
                    case 11:
                        return null != e && 1 === qa(String(e), a)
                }
            }
        }
    }

    function be(a, b) {
        return !a || !(!b || !$d(a, b))
    };
    var de = class extends G {
            constructor(a) {
                super(a, -1, ce)
            }
        },
        ce = [4];
    var ee = class extends G {
        constructor(a) {
            super(a)
        }
    };
    var ge = class extends G {
            constructor(a) {
                super(a, -1, fe)
            }
        },
        he = Wb(ge),
        fe = [5],
        ie = [1, 2, 3, 6, 7];
    var ke = class extends G {
            constructor() {
                super(void 0, -1, je)
            }
        },
        je = [2];

    function le(a, b) {
        return t(a, 1, b)
    }
    var me = class extends G {
        constructor() {
            super()
        }
    };

    function ne(a, b) {
        return x(a, 1, b, 0)
    }

    function oe(a, b) {
        return x(a, 2, b, 0)
    }
    var pe = class extends G {
        constructor() {
            super()
        }
        getWidth() {
            return B(r(this, 1), 0)
        }
        getHeight() {
            return B(r(this, 2), 0)
        }
    };

    function qe(a, b) {
        return Db(a, 1, b)
    }

    function re(a, b) {
        return Db(a, 2, b)
    }

    function se(a, b) {
        Db(a, 3, b)
    }
    var te = class extends G {
        constructor() {
            super()
        }
    };
    var ue = class extends G {
        constructor() {
            super()
        }
    };

    function ve(a, b) {
        return Eb(a, 4, we, b)
    }
    var xe = class extends G {
            constructor() {
                super()
            }
        },
        we = [4, 5, 6, 8, 9, 10];

    function ye(a, b) {
        return x(a, 1, b, 0)
    }

    function ze(a, b) {
        return x(a, 2, b, 0)
    }
    var Ae = class extends G {
        constructor() {
            super()
        }
    };
    var Be = class extends G {
            constructor() {
                super()
            }
        },
        Ce = [1, 2];

    function De(a, b) {
        return Db(a, 1, b)
    }

    function Ee(a, b) {
        return Fb(a, 2, b)
    }

    function Fe(a, b) {
        return wb(a, 4, b)
    }

    function Ge(a, b) {
        return Fb(a, 5, b)
    }

    function He(a, b) {
        return x(a, 6, b, 0)
    }
    var Je = class extends G {
            constructor() {
                super(void 0, -1, Ie)
            }
        },
        Ie = [2, 4, 5];
    var Le = class extends G {
            constructor() {
                super(void 0, -1, Ke)
            }
        },
        Ke = [5],
        Me = [1, 2, 3, 4];
    var Oe = class extends G {
            constructor() {
                super(void 0, -1, Ne)
            }
        },
        Ne = [2, 3];

    function Pe(a, b) {
        return Eb(a, 4, Qe, b)
    }
    var Re = class extends G {
            constructor() {
                super()
            }
            getTagSessionCorrelator() {
                return B(r(this, 2), 0)
            }
        },
        Qe = [4, 5, 7];

    function Se(a, ...b) {
        Te(a, ...b.map(c => ({
            Va: 4,
            message: c
        })))
    }

    function Ue(a, ...b) {
        Te(a, ...b.map(c => ({
            Va: 7,
            message: c
        })))
    };

    function Ve(a) {
        return JSON.stringify([a.map(b => [{
            [b.Va]: b.message.toJSON()
        }])])
    };
    var We = (a, b) => {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    };

    function Xe() {
        this.A = this.A;
        this.j = this.j
    }
    Xe.prototype.A = !1;

    function Ye(a) {
        a.A || (a.A = !0, a.h())
    }

    function Ze(a, b) {
        a.A ? b() : (a.j || (a.j = []), a.j.push(b))
    }
    Xe.prototype.h = function() {
        if (this.j)
            for (; this.j.length;) this.j.shift()()
    };

    function $e(a, b, c, d) {
        gc(b, c, d);
        Ze(a, () => hc(b, c, d))
    }

    function af(a, b) {
        1 !== a.state && (a.state = 1, a.callback && a.callback(b))
    }

    function bf(a) {
        a.s.document.visibilityState ? $e(a, a.s.document, "visibilitychange", b => {
            "hidden" === a.s.document.visibilityState && af(a, b);
            "visible" === a.s.document.visibilityState && (a.state = 0)
        }) : "onpagehide" in a.s ? ($e(a, a.s, "pagehide", b => {
            af(a, b)
        }), $e(a, a.s, "pageshow", () => {
            a.state = 0
        })) : $e(a, a.s, "beforeunload", b => {
            af(a, b)
        })
    }

    function cf(a, b) {
        a.callback || bf(a);
        a.callback = b
    }
    var df = class extends Xe {
        constructor(a) {
            super();
            this.s = a;
            this.state = 0;
            this.callback = null
        }
    };

    function Te(a, ...b) {
        a.A && 65536 <= Ve(a.h.concat(b)).length && ef(a);
        a.h.push(...b);
        a.h.length >= a.m && ef(a);
        a.h.length && null === a.i && (a.i = setTimeout(() => {
            ef(a)
        }, a.B))
    }

    function ff(a, b, c, d) {
        a.j || (a.j = new df(b), cf(a.j, () => {
            for (const e of a.l) e();
            c()
        }));
        d && 1 !== a.j.state && a.l.push(d)
    }

    function ef(a) {
        null !== a.i && (clearTimeout(a.i), a.i = null);
        if (a.h.length) {
            var b = Ve(a.h);
            a.v("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.h = []
        }
    }

    function gf(a, b, c) {
        ff(a, b, () => {
            ef(a)
        }, c)
    }
    var hf = class {
            constructor(a, b, c) {
                this.v = We;
                this.B = a;
                this.m = b;
                this.A = c;
                this.l = [];
                this.h = [];
                this.i = null
            }
        },
        jf = class extends hf {
            constructor(a = 1E3, b = 100, c = !1) {
                super(a, b, c && !0)
            }
        };

    function kf(a, b) {
        b = x(b, 1, Date.now(), 0);
        var c = Zc(window);
        b = x(b, 2, c, 0);
        return x(b, 6, a.m, 0)
    }

    function nf(a, b, c, d, e, f) {
        if (a.j) {
            var g = ze(ye(new Ae, b), c);
            b = He(Ee(De(Ge(Fe(new Je, d), e), g), a.h.slice()), f);
            b = Pe(new Re, b);
            Se(a.i, kf(a, b));
            if (1 === f || 3 === f || 4 === f && !a.h.some(h => F(h, 1) === F(g, 1) && F(h, 2) === c)) a.h.push(g), 100 < a.h.length && a.h.shift()
        }
    }

    function of (a, b, c, d) {
        if (a.j && a.l) {
            var e = new Oe;
            b = Fb(e, 2, b);
            c = Fb(b, 3, c);
            d && x(c, 1, d, 0);
            d = new Re;
            d = Eb(d, 7, Qe, c);
            Se(a.i, kf(a, d))
        }
    }
    var pf = class {
        constructor(a, b, c, d = new jf(b)) {
            this.m = a;
            this.l = c;
            this.i = d;
            this.h = [];
            this.j = 0 < a && Nc() < 1 / a
        }
    };
    var K = a => {
        var b = "ta";
        if (a.ta && a.hasOwnProperty(b)) return a.ta;
        b = new a;
        return a.ta = b
    };
    var qf = class {
        constructor() {
            this.G = {
                [3]: {},
                [4]: {},
                [5]: {}
            }
        }
    };
    var rf = /^true$/.test("false");

    function sf(a, b) {
        switch (b) {
            case 1:
                return F(a, zb(a, ie, 1));
            case 2:
                return F(a, zb(a, ie, 2));
            case 3:
                return F(a, zb(a, ie, 3));
            case 6:
                return F(a, zb(a, ie, 6));
            default:
                return null
        }
    }

    function tf(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return E(a, 1);
            case 7:
                return D(a, 3);
            case 2:
                return Gb(a, 2);
            case 3:
                return D(a, 3);
            case 6:
                return vb(a, 4);
            default:
                return null
        }
    }
    const uf = dc(() => {
        if (!rf) return {};
        try {
            const a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a) return JSON.parse(a)
        } catch {}
        return {}
    });

    function vf(a, b, c, d = 0) {
        K(wf).j[d] = K(wf).j[d] ? .add(b) ? ? (new Set).add(b);
        const e = uf();
        if (null != e[b]) return e[b];
        b = xf(d)[b];
        if (!b) return c;
        b = he(JSON.stringify(b));
        b = yf(b);
        a = tf(b, a);
        return null != a ? a : c
    }

    function yf(a) {
        const b = K(qf).G;
        if (b) {
            const c = Ga(A(a, ee, 5), d => be(z(d, Vd, 1), b));
            if (c) return z(c, de, 2) ? ? null
        }
        return z(a, de, 4) ? ? null
    }
    class wf {
        constructor() {
            this.i = {};
            this.l = [];
            this.j = {};
            this.h = new Map
        }
    }

    function zf(a, b = !1, c) {
        return !!vf(1, a, b, c)
    }

    function Af(a, b = 0, c) {
        a = Number(vf(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function Bf(a, b = "", c) {
        a = vf(3, a, b, c);
        return "string" === typeof a ? a : b
    }

    function Cf(a, b = [], c) {
        a = vf(6, a, b, c);
        return Array.isArray(a) ? a : b
    }

    function xf(a) {
        return K(wf).i[a] || (K(wf).i[a] = {})
    }

    function Df(a, b) {
        const c = xf(b);
        H(a, (d, e) => c[e] = d)
    }

    function Ef(a, b, c, d, e = !1) {
        const f = [],
            g = [];
        za(b, h => {
            const l = xf(h);
            za(a, k => {
                var m = yb(k, ie);
                const u = sf(k, m);
                if (u) {
                    var v = K(wf).h.get(h) ? .get(u) ? .slice(0) ? ? [];
                    a: {
                        const y = new Le;
                        switch (m) {
                            case 1:
                                xb(y, 1, Me, u);
                                break;
                            case 2:
                                xb(y, 2, Me, u);
                                break;
                            case 3:
                                xb(y, 3, Me, u);
                                break;
                            case 6:
                                xb(y, 4, Me, u);
                                break;
                            default:
                                m = void 0;
                                break a
                        }
                        wb(y, 5, v);m = y
                    }
                    if (v = m) v = !!K(wf).j[h] ? .has(u);
                    v && f.push(m);
                    if (v = m) v = !!K(wf).h.get(h) ? .has(u);
                    v && g.push(m);
                    e || (m = K(wf), m.h.has(h) || m.h.set(h, new Map), m.h.get(h).has(u) || m.h.get(h).set(u, []), d &&
                        m.h.get(h).get(u).push(d));
                    l[u] = k.toJSON()
                }
            })
        });
        (f.length || g.length) && of (c, f, g, d ? ? void 0)
    }

    function Ff(a, b) {
        const c = xf(b);
        za(a, d => {
            var e = he(JSON.stringify(d));
            const f = yb(e, ie);
            (e = sf(e, f)) && (c[e] || (c[e] = d))
        })
    }

    function Gf() {
        return Da(Object.keys(K(wf).i), a => Number(a))
    }

    function Hf(a) {
        Ha(K(wf).l, a) || Df(xf(4), a)
    };

    function L(a, b, c) {
        c.hasOwnProperty(a) || Object.defineProperty(c, String(a), {
            value: b
        })
    }

    function If(a, b, c) {
        return b[a] || c
    }

    function Jf(a) {
        L(5, zf, a);
        L(6, Af, a);
        L(7, Bf, a);
        L(8, Cf, a);
        L(13, Ff, a);
        L(15, Hf, a)
    }

    function Kf(a) {
        L(4, b => {
            K(qf).G = b
        }, a);
        L(9, (b, c) => {
            var d = K(qf);
            null == d.G[3][b] && (d.G[3][b] = c)
        }, a);
        L(10, (b, c) => {
            var d = K(qf);
            null == d.G[4][b] && (d.G[4][b] = c)
        }, a);
        L(11, (b, c) => {
            var d = K(qf);
            null == d.G[5][b] && (d.G[5][b] = c)
        }, a);
        L(14, b => {
            var c = K(qf);
            for (const d of [3, 4, 5]) Object.assign(c.G[d], b[d])
        }, a)
    }

    function Lf(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };

    function Mf(a, b, c) {
        a.j = If(1, b, () => {});
        a.l = d => If(2, b, () => [])(d, c);
        a.i = () => If(3, b, () => [])(c);
        a.h = d => {
            If(16, b, () => {})(d, c)
        }
    }
    class Nf {
        j() {}
        h() {}
        l() {
            return []
        }
        i() {
            return []
        }
    };
    let Of, Pf;
    const Qf = new Pd(window);
    (a => {
        Of = a ? ? new Ed;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        Cd(Of, window.google_srt);
        Pf = new Rd(Of, Qf);
        Pf.wa(() => {});
        Pf.l(!0);
        "complete" == window.document.readyState ? window.google_measure_js_timing || Od(Qf) : Qf.h && gc(window, "load", () => {
            window.google_measure_js_timing || Od(Qf)
        })
    })();
    var Rf = {
        Lb: 0,
        Kb: 1,
        Hb: 2,
        Cb: 3,
        Ib: 4,
        Db: 5,
        Jb: 6,
        Fb: 7,
        Gb: 8,
        Bb: 9,
        Eb: 10
    };
    var Sf = {
        Nb: 0,
        Ob: 1,
        Mb: 2
    };

    function Tf(a) {
        if (0 != a.h) throw Error("Already resolved/rejected.");
    }
    var Wf = class {
        constructor() {
            this.i = new Uf(this);
            this.h = 0
        }
        resolve(a) {
            Tf(this);
            this.h = 1;
            this.l = a;
            Vf(this.i)
        }
    };

    function Vf(a) {
        switch (a.h.h) {
            case 0:
                break;
            case 1:
                a.i && a.i(a.h.l);
                break;
            case 2:
                a.j && a.j(a.h.j);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    }
    var Uf = class {
        constructor(a) {
            this.h = a
        }
        then(a, b) {
            if (this.i) throw Error("Then functions already set.");
            this.i = a;
            this.j = b;
            Vf(this)
        }
    };
    const Xf = class {
        constructor(a) {
            this.h = a.slice(0)
        }
        forEach(a) {
            this.h.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new Xf(Aa(this.h, a))
        }
        apply(a) {
            return new Xf(a(this.h.slice(0)))
        }
        sort(a) {
            return new Xf(this.h.slice(0).sort(a))
        }
        get(a) {
            return this.h[a]
        }
        add(a) {
            const b = this.h.slice(0);
            b.push(a);
            return new Xf(b)
        }
    };

    function Yf(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };
    const $f = class {
        constructor() {
            this.h = {};
            this.i = {}
        }
        set(a, b) {
            const c = Zf(a);
            this.h[c] = b;
            this.i[c] = a
        }
        get(a, b) {
            a = Zf(a);
            return void 0 !== this.h[a] ? this.h[a] : b
        }
        clear() {
            this.h = {};
            this.i = {}
        }
    };

    function Zf(a) {
        return a instanceof Object ? String(ea(a)) : a + ""
    };

    function ag(a) {
        return new bg({
            value: a
        }, null)
    }

    function cg(a) {
        return new bg(null, a)
    }

    function dg(a) {
        try {
            return ag(a())
        } catch (b) {
            return cg(b)
        }
    }

    function eg(a) {
        return null != a.h ? a.h.value : null
    }

    function fg(a, b) {
        null != a.h && b(a.h.value);
        return a
    }

    function gg(a, b) {
        null != a.h || b(a.i);
        return a
    }
    class bg {
        constructor(a, b) {
            this.h = a;
            this.i = b
        }
        map(a) {
            return null != this.h ? (a = a(this.h.value), a instanceof bg ? a : ag(a)) : this
        }
    };
    const hg = class {
        constructor(a) {
            this.h = new $f;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.h.set(a, !0)
        }
        contains(a) {
            return void 0 !== this.h.h[Zf(a)]
        }
    };
    class ig {
        constructor() {
            this.h = new $f
        }
        set(a, b) {
            let c = this.h.get(a);
            c || (c = new hg, this.h.set(a, c));
            c.add(b)
        }
    };
    var M = class extends G {
            constructor(a) {
                super(a, -1, jg)
            }
            getId() {
                return r(this, 3)
            }
        },
        jg = [4];
    class kg {
        constructor({
            Xa: a,
            Pb: b,
            Xb: c,
            rb: d
        }) {
            this.h = b;
            this.l = new Xf(a || []);
            this.j = d;
            this.i = c
        }
    };
    const mg = a => {
            const b = [],
                c = a.l;
            c && c.h.length && b.push({
                aa: "a",
                ga: lg(c)
            });
            null != a.h && b.push({
                aa: "as",
                ga: a.h
            });
            null != a.i && b.push({
                aa: "i",
                ga: String(a.i)
            });
            null != a.j && b.push({
                aa: "rp",
                ga: String(a.j)
            });
            b.sort(function(d, e) {
                return d.aa.localeCompare(e.aa)
            });
            b.unshift({
                aa: "t",
                ga: "aa"
            });
            return b
        },
        lg = a => {
            a = a.h.slice(0).map(ng);
            a = JSON.stringify(a);
            return Oc(a)
        },
        ng = a => {
            const b = {};
            null != r(a, 7) && (b.q = r(a, 7));
            null != r(a, 2) && (b.o = r(a, 2));
            null != r(a, 5) && (b.p = r(a, 5));
            return b
        };
    var og = class extends G {
        constructor(a) {
            super(a)
        }
        setLocation(a) {
            return t(this, 1, a)
        }
    };

    function pg(a) {
        const b = [].slice.call(arguments).filter(cc(e => null === e));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.Ma || []);
            d = Object.assign(d, e.Ra)
        });
        return new qg(c, d)
    }

    function rg(a) {
        switch (a) {
            case 1:
                return new qg(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new qg(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new qg(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new qg(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function sg(a) {
        if (null == a) var b = null;
        else {
            var c = mg(a);
            a = [];
            for (b of c) c = String(b.ga), a.push(b.aa + "." + (20 >= c.length ? c : c.slice(0, 19) + "_"));
            b = new qg(null, {
                google_placement_id: a.join("~")
            })
        }
        return b
    }
    class qg {
        constructor(a, b) {
            this.Ma = a;
            this.Ra = b
        }
    };
    const tg = new qg(["google-auto-placed"], {
        google_reactive_ad_format: 40,
        google_tag_origin: "qs"
    });
    var ug = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5,
        full_page: 6,
        side_rails: 7
    };

    function vg(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map)) : a.google_reactive_ads_global_state = new wg;
        return a.google_reactive_ads_global_state
    }
    class wg {
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
            this.floatingAdsStacking = new xg;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map
        }
    }
    var xg = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var N = a => {
        a = a.document;
        let b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };
    var yg = a => {
            a = a.getBoundingClientRect();
            return 0 < a.width && 0 < a.height
        },
        zg = a => {
            let b = 0;
            a.forEach(c => b = Math.max(b, c.getBoundingClientRect().width));
            return c => c.getBoundingClientRect().width > .5 * b
        },
        Ag = a => {
            const b = N(a).clientHeight || 0;
            return c => c.getBoundingClientRect().height >= .75 * b
        },
        Bg = (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top;
    var Cg = class extends G {
        constructor(a) {
            super(a)
        }
    };
    var Dg = class extends G {
        constructor() {
            super()
        }
    };
    var Fg = class extends G {
            constructor() {
                super(void 0, -1, Eg)
            }
        },
        Eg = [1];
    var Gg = class extends G {
        constructor(a) {
            super(a)
        }
        i() {
            return E(this, 2)
        }
    };
    var Hg = class extends G {
        constructor(a) {
            super(a)
        }
    };
    var Ig = class extends G {
        constructor(a) {
            super(a)
        }
    };
    var Kg = class extends G {
            constructor(a) {
                super(a, -1, Jg)
            }
            i() {
                return A(this, Ig, 1)
            }
        },
        Jg = [1];
    var Lg = class extends G {
        constructor(a) {
            super(a)
        }
    };
    var Mg = class extends G {
        constructor(a) {
            super(a)
        }
    };
    var Og = class extends G {
            constructor(a) {
                super(a, -1, Ng)
            }
        },
        Ng = [6, 7, 9, 10, 11];

    function Pg(a) {
        var b = [];
        Yf(a.getElementsByTagName("p"), function(c) {
            100 <= Qg(c) && b.push(c)
        });
        return b
    }

    function Qg(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        Yf(a.childNodes, function(c) {
            b += Qg(c)
        });
        return b
    }

    function Rg(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Sg(a, b) {
        if (null == a.h) return b;
        switch (a.h) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.h);
        }
    }
    const Tg = class {
        constructor(a, b, c, d) {
            this.l = a;
            this.i = b;
            this.j = c;
            this.h = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.l)
            } catch (f) {}
            if (!b.length) return [];
            a = Ia(b);
            a = Sg(this, a);
            "number" === typeof this.i && (b = this.i, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
            if ("number" === typeof this.j) {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = Pg(a[c]),
                        e = this.j;
                    0 > e && (e += d.length);
                    0 <= e && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.l,
                occurrenceIndex: this.i,
                paragraphIndex: this.j,
                ignoreMode: this.h
            })
        }
    };

    function Ug(a) {
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
    };
    var O = class {
            constructor(a, b = !1) {
                this.h = a;
                this.defaultValue = b
            }
        },
        Vg = class {
            constructor(a, b = 0) {
                this.h = a;
                this.defaultValue = b
            }
        },
        Wg = class {
            constructor(a, b = []) {
                this.h = a;
                this.defaultValue = b
            }
        };
    var Xg = new O(1082, !0),
        Yg = new Vg(1130, 100),
        Zg = new class {
            constructor(a, b = "") {
                this.h = a;
                this.defaultValue = b
            }
        }(14),
        $g = new O(316),
        ah = new O(1207, !0),
        bh = new O(313),
        ch = new O(369),
        dh = new O(1230),
        eh = new O(1229),
        fh = new O(1231),
        gh = new O(1171, !0),
        hh = new O(1201, !0),
        ih = new O(217),
        jh = new O(1228),
        kh = new O(1216),
        lh = new O(1215),
        mh = new O(506914611),
        nh = new O(1086, !0),
        oh = new Vg(1079, 5),
        ph = new Wg(1934, ["Az6AfRvI8mo7yiW5fLfj04W21t0ig6aMsGYpIqMTaX60H+b0DkO1uDr+7BrzMcimWzv/X7SXR8jI+uvbV0IJlwYAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
            "A+USTya+tNvDPaxUgJooz+LaVk5hPoAxpLvSxjogX4Mk8awCTQ9iop6zJ9d5ldgU7WmHqBlnQB41LHHRFxoaBwoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A7FovoGr67TUBYbnY+Z0IKoJbbmRmB8fCyirUGHavNDtD91CiGyHHSA2hDG9r9T3NjUKFi6egL3RbgTwhhcVDwUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="
        ]),
        qh = new O(203),
        rh = new O(84),
        sh = new O(1975),
        th = new O(1974),
        uh = new O(1162),
        vh = new O(1120),
        wh = new Vg(501545963, 1),
        xh = new O(501545960),
        yh = new O(501545961),
        zh = new O(45388034),
        Ah = new Vg(501545962, 1),
        Bh = new Vg(45388309, -1),
        Ch = new Vg(1114, 1),
        Dh = new Vg(1108, 1E3),
        Eh = new O(491815314),
        Fh = new O(1121),
        Gh = new O(501545959, !0),
        Hh = new O(504834127),
        Ih = new O(506619840),
        Jh = new O(502896280),
        Kh = new O(1928),
        Lh = new O(1941),
        Mh = new O(370946349),
        Nh = new O(392736476),
        Oh = new Vg(406149835),
        Ph = new Wg(1932),
        Qh = new Vg(1935);
    var Rh = class {
        constructor() {
            const a = {};
            this.i = (b, c) => null != a[b] ? a[b] : c;
            this.j = (b, c) => null != a[b] ? a[b] : c;
            this.l = (b, c) => null != a[b] ? a[b] : c;
            this.h = (b, c) => null != a[b] ? a[b] : c;
            this.m = () => {}
        }
    };

    function P(a) {
        return K(Rh).i(a.h, a.defaultValue)
    }

    function Sh(a) {
        return K(Rh).j(a.h, a.defaultValue)
    }

    function Th() {
        return K(Rh).l(Zg.h, Zg.defaultValue)
    };

    function Uh(a, b, c) {
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
        Ug(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    };

    function Vh(a, b) {
        const c = e => {
                e = Wh(e);
                return null == e ? !1 : 0 < e
            },
            d = e => {
                e = Wh(e);
                return null == e ? !1 : 0 > e
            };
        switch (b) {
            case 0:
                return {
                    init: Xh(a.previousSibling, c),
                    ma: e => Xh(e.previousSibling, c),
                    pa: 0
                };
            case 2:
                return {
                    init: Xh(a.lastChild, c),
                    ma: e => Xh(e.previousSibling, c),
                    pa: 0
                };
            case 3:
                return {
                    init: Xh(a.nextSibling, d),
                    ma: e => Xh(e.nextSibling, d),
                    pa: 3
                };
            case 1:
                return {
                    init: Xh(a.firstChild, d),
                    ma: e => Xh(e.nextSibling, d),
                    pa: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function Wh(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Xh(a, b) {
        return a && b(a) ? a : null
    };
    var Yh = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };
    var Zh = a => {
        if (a == a.top) return 0;
        for (; a && a != a.top && Fc(a); a = a.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };
    var $h = (a, b) => {
        do {
            const c = Jc(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    };

    function ai(a, b) {
        var c = ["width", "height"];
        for (let e = 0; e < c.length; e++) {
            const f = "google_ad_" + c[e];
            if (!b.hasOwnProperty(f)) {
                var d = I(a[c[e]]);
                d = null === d ? null : Math.round(d);
                null != d && (b[f] = d)
            }
        }
    }
    var bi = (a, b) => !((Rc.test(b.google_ad_width) || Qc.test(a.style.width)) && (Rc.test(b.google_ad_height) || Qc.test(a.style.height))),
        di = (a, b) => (a = ci(a, b)) ? a.y : 0,
        ci = (a, b) => {
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
        ei = a => {
            let b = 0;
            for (let c in Yh) - 1 != a.indexOf(c) && (b |= Yh[c]);
            return b
        },
        fi = (a, b, c, d, e) => {
            if (a !== a.top) return Gc(a) ? 3 : 16;
            if (!(488 > N(a).clientWidth)) return 4;
            if (!(a.innerHeight >= a.innerWidth)) return 5;
            const f = N(a).clientWidth;
            if (!f || (f - c) / f > d) a = 6;
            else {
                if (c = "true" != e.google_full_width_responsive) a: {
                    c = b.parentElement;
                    for (b = N(a).clientWidth; c; c = c.parentElement)
                        if ((d = Jc(c, a)) && (e = I(d.width)) && !(e >= b) && "visible" != d.overflow) {
                            c = !0;
                            break a
                        }
                    c = !1
                }
                a = c ? 7 : !0
            }
            return a
        },
        gi = (a, b, c, d) => {
            const e = fi(b, c, a, .3, d);
            !0 !== e ? a = e : "true" == d.google_full_width_responsive || $h(c, b) ? (b = N(b).clientWidth, a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
            return a
        },
        hi = (a, b, c) => {
            a = a.style;
            "rtl" == b ? a.marginRight = c : a.marginLeft = c
        };
    const ii = (a, b) => {
            if (3 == b.nodeType) return /\S/.test(b.data);
            if (1 == b.nodeType) {
                if (/^(script|style)$/i.test(b.nodeName)) return !1;
                let c;
                try {
                    c = Jc(b, a)
                } catch (d) {}
                return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
            }
            return !1
        },
        ji = (a, b, c) => {
            a = ci(b, a);
            return "rtl" == c ? -a.x : a.x
        };
    var ki = (a, b) => {
        var c;
        c = (c = b.parentElement) ? (c = Jc(c, a)) ? c.direction : "" : "";
        if (c) {
            b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
            b.style.borderSpacing = b.style.padding = "0";
            hi(b, c, "0px");
            b.style.width = N(a).clientWidth + "px";
            if (0 !== ji(a, b, c)) {
                hi(b, c, "0px");
                var d = ji(a, b, c);
                hi(b, c, -1 * d + "px");
                a = ji(a, b, c);
                0 !== a && a !== d && hi(b, c, d / (a - d) * d + "px")
            }
            b.style.zIndex = 30
        }
    };
    var li = class {
        constructor(a, b) {
            this.M = a;
            this.j = b
        }
        height() {
            return this.j
        }
        h(a) {
            return 300 < a && 300 < this.j ? this.M : Math.min(1200, Math.round(a))
        }
        i() {}
    };
    var mi = (a, b, c, d = e => e) => {
            let e;
            return a.style && a.style[c] && d(a.style[c]) || (e = Jc(a, b)) && e[c] && d(e[c]) || null
        },
        ni = a => b => b.M <= a,
        qi = (a, b, c, d) => {
            const e = a && oi(c, b),
                f = pi(b, d);
            return g => !(e && g.height() >= f)
        },
        ri = a => b => b.height() <= a,
        oi = (a, b) => di(a, b) < N(b).clientHeight - 100,
        si = (a, b) => {
            var c = mi(b, a, "height", I);
            if (c) return c;
            var d = b.style.height;
            b.style.height = "inherit";
            c = mi(b, a, "height", I);
            b.style.height = d;
            if (c) return c;
            c = Infinity;
            do(d = b.style && I(b.style.height)) && (c = Math.min(c, d)), (d = mi(b, a, "maxHeight", I)) && (c =
                Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
            return c
        };
    const pi = (a, b) => {
        const c = 0 == od(a);
        return b && c ? Math.max(250, 2 * N(a).clientHeight / 3) : 250
    };
    var ti = {
        google_ad_channel: !0,
        google_ad_client: !0,
        google_ad_host: !0,
        google_ad_host_channel: !0,
        google_adtest: !0,
        google_tag_for_child_directed_treatment: !0,
        google_tag_for_under_age_of_consent: !0,
        google_tag_partner: !0,
        google_restrict_data_processing: !0,
        google_page_url: !0,
        google_debug_params: !0,
        google_shadow_mode: !0,
        google_adbreak_test: !0,
        google_ad_frequency_hint: !0,
        google_admob_interstitial_slot: !0,
        google_admob_rewarded_slot: !0,
        google_admob_ads_only: !0,
        google_max_ad_content_rating: !0,
        google_traffic_source: !0
    };
    const ui = RegExp("(^| )adsbygoogle($| )");

    function vi(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = xc(d.Yb);
            a[e] = d.value
        }
    };
    class wi {
        constructor() {
            var a = ld `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.h = null;
            this.j = !1;
            this.m = Math.random();
            this.i = this.I;
            this.A = a
        }
        wa(a) {
            this.h = a
        }
        l(a) {
            this.j = a
        }
        Sa(a) {
            this.i = a
        }
        I(a, b, c = .01, d, e = "jserror") {
            if ((this.j ? this.m : Math.random()) > c) return !1;
            sd(b) || (b = new rd(b, {
                context: a,
                id: e
            }));
            if (d || this.h) b.meta = {}, this.h && this.h(b.meta), d && d(b.meta);
            n.google_js_errors = n.google_js_errors || [];
            n.google_js_errors.push(b);
            n.error_rep_loaded || (Hc(n.document, this.A), n.error_rep_loaded = !0);
            return !1
        }
        ia(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.i(a, d, .01, c, "jserror")) throw d;
            }
        }
        va(a, b) {
            return (...c) => this.ia(a, () => b.apply(void 0, c))
        }
        ca(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.I(a, c instanceof Error ? c : Error(c), void 0, this.h || void 0)
            })
        }
    };
    const xi = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    var yi = (a, b, c, d, e = !1) => {
            const f = d || window,
                g = "undefined" !== typeof queueMicrotask;
            return function() {
                e && g && queueMicrotask(() => {
                    f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                    f.google_rum_task_id_counter += 1
                });
                const h = Id();
                let l, k = 3;
                try {
                    l = b.apply(this, arguments)
                } catch (m) {
                    k = 13;
                    if (!c) throw m;
                    c(a, m)
                } finally {
                    f.google_measure_js_timing && h && xi({
                        label: a.toString(),
                        value: h,
                        duration: (Id() || 0) - h,
                        type: k,
                        ...(e && g && {
                            taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                        })
                    }, f)
                }
                return l
            }
        },
        zi = (a, b) => yi(a, b, (c, d) => {
            (new wi).I(c, d)
        }, void 0, !1);

    function Ai(a, b, c) {
        return yi(a, b, void 0, c, !0).apply()
    }

    function Bi(a) {
        if (!a) return null;
        var b = r(a, 7);
        if (r(a, 1) || a.getId() || 0 < vb(a, 4).length) {
            b = vb(a, 4);
            var c = r(a, 3),
                d = r(a, 1),
                e = "";
            d && (e += d);
            c && (e += "#" + Rg(c));
            if (b)
                for (c = 0; c < b.length; c++) e += "." + Rg(b[c]);
            a = (b = e) ? new Tg(b, r(a, 2), r(a, 5), Ci(r(a, 6))) : null
        } else a = b ? new Tg(b, r(a, 2), r(a, 5), Ci(r(a, 6))) : null;
        return a
    }
    var Di = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Ci(a) {
        return null == a ? a : Di[a]
    }
    var Ei = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function Fi(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }

    function Gi(a) {
        a = Fi(a);
        return a.optimization = a.optimization || {}
    };
    var Hi = Wb(class extends G {
        constructor(a) {
            super(a)
        }
    });
    var Ii = a => {
        switch (r(a, 8)) {
            case 1:
            case 2:
                if (null == a) var b = null;
                else b = z(a, M, 1), null == b ? b = null : (a = r(a, 2), b = null == a ? null : new kg({
                    Xa: [b],
                    rb: a
                }));
                return null != b ? ag(b) : cg(Error("Missing dimension when creating placement id"));
            case 3:
                return cg(Error("Missing dimension when creating placement id"));
            default:
                return cg(Error("Invalid type: " + r(a, 8)))
        }
    };
    var Ji = class extends G {
        constructor(a) {
            super(a)
        }
    };
    var Ki = class extends G {
        constructor(a) {
            super(a)
        }
    };
    var Li = class extends G {
        constructor(a) {
            super(a)
        }
        i() {
            return ub(this, 23)
        }
    };
    var Mi = class extends G {
        constructor(a) {
            super(a)
        }
    };
    var Ni = class extends G {
        constructor(a) {
            super(a)
        }
    };
    var Oi = class extends G {
        constructor(a) {
            super(a)
        }
    };
    var Pi = class extends G {
        constructor(a) {
            super(a)
        }
    };
    var Qi = class extends G {
        constructor(a) {
            super(a)
        }
    };
    var Ri = class extends G {
            constructor(a) {
                super(a)
            }
            getName() {
                return r(this, 4)
            }
        },
        Si = [1, 2, 3];
    var Ui = class extends G {
            constructor(a) {
                super(a, -1, Ti)
            }
        },
        Ti = [2, 5, 6, 11];
    var Vi = class extends G {
        constructor(a) {
            super(a)
        }
    };
    var Yi = class extends G {
            constructor(a) {
                super(a)
            }
            i() {
                return Hb(this, Vi, 2, Xi)
            }
        },
        Xi = [1, 2];
    var $i = class extends G {
            constructor(a) {
                super(a, -1, Zi)
            }
            i() {
                return z(this, Yi, 3)
            }
        },
        Zi = [1, 4];
    var bj = class extends G {
            constructor(a) {
                super(a, -1, aj)
            }
        },
        cj = Wb(bj),
        aj = [1, 2, 5, 7];
    var dj = (a, b) => {
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

    function ej(a, b) {
        const c = new ig,
            d = new hg;
        b.forEach(e => {
            if (Hb(e, Pi, 1, Si)) {
                e = Hb(e, Pi, 1, Si);
                if (z(e, Lg, 1) && z(z(e, Lg, 1), M, 1) && z(e, Lg, 2) && z(z(e, Lg, 2), M, 1)) {
                    const g = fj(a, z(z(e, Lg, 1), M, 1)),
                        h = fj(a, z(z(e, Lg, 2), M, 1));
                    if (g && h)
                        for (var f of dj({
                                anchor: g,
                                position: r(z(e, Lg, 1), 2)
                            }, {
                                anchor: h,
                                position: r(z(e, Lg, 2), 2)
                            })) c.set(ea(f.anchor), f.position)
                }
                z(e, Lg, 3) && z(z(e, Lg, 3), M, 1) && (f = fj(a, z(z(e, Lg, 3), M, 1))) && c.set(ea(f), r(z(e, Lg, 3), 2))
            } else Hb(e, Qi, 2, Si) ? gj(a, Hb(e, Qi, 2, Si), c) : Hb(e, Oi, 3, Si) && hj(a, Hb(e, Oi, 3, Si), d)
        });
        return new ij(c,
            d)
    }
    class ij {
        constructor(a, b) {
            this.i = a;
            this.h = b
        }
    }
    const gj = (a, b, c) => {
            z(b, Lg, 2) ? (b = z(b, Lg, 2), (a = fj(a, z(b, M, 1))) && c.set(ea(a), r(b, 2))) : z(b, M, 1) && (a = jj(a, z(b, M, 1))) && a.forEach(d => {
                d = ea(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        hj = (a, b, c) => {
            z(b, M, 1) && (a = jj(a, z(b, M, 1))) && a.forEach(d => {
                c.add(ea(d))
            })
        },
        fj = (a, b) => (a = jj(a, b)) && 0 < a.length ? a[0] : null,
        jj = (a, b) => (b = Bi(b)) ? b.query(a) : null;

    function kj(a, b, c) {
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
            if (lj(b)) return !0;
            if (a.h.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.h.add(d));
        return !1
    }

    function mj(a) {
        a = nj(a);
        return a.has("all") || a.has("after")
    }

    function oj(a) {
        a = nj(a);
        return a.has("all") || a.has("before")
    }

    function nj(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function lj(a) {
        const b = nj(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }
    var pj = class {
        constructor() {
            this.h = new Set
        }
    };

    function qj(a, b) {
        if (!a) return !1;
        a = Jc(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function rj(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function sj(a) {
        return !!a.nextSibling || !!a.parentNode && sj(a.parentNode)
    };

    function tj(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = uj(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function uj(a) {
        let b = "";
        H(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    };

    function vj(a = window) {
        a = a.googletag;
        return a ? .apiReady ? a : void 0
    };
    const wj = a => {
        const b = vj(a);
        return b ? Aa(Da(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null
    };
    var xj = a => {
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

    function yj(a, b) {
        if (a.l) return !0;
        a.l = !0;
        const c = A(a.i, Og, 1);
        a.j = 0;
        const d = zj(a.B);
        if (tj(a.h.location, "google_audio_sense")) {
            var e = new Hg;
            e = t(e, 1, 1);
            var f = new Gg;
            f = t(f, 2, !0);
            e = Db(e, 2, f);
            f = new Fg;
            var g = new Cg;
            var h = t(g, 1, 1);
            mb(f);
            g = Cb(f, Cg, 1, !1, !1);
            h = null != h ? h : new Cg;
            var l = sb(f, 1, 2, void 0, !1);
            g.push(h);
            l.push(h.u);
            db(h.u) && bb(l, 8);
            g = new Dg;
            g = t(g, 1, !0);
            f = Db(f, 2, g);
            e = Db(e, 3, f)
        } else e = z(a.i, Hg, 27);
        if (f = e)
            if (g = z(a.i, Kg, 6) ? .i() || [], e = a.h, 1 == F(f, 1) && z(f, Gg, 2) ? .i() && 0 != g.length) {
                var k;
                f = [];
                for (k of g)
                    if (g =
                        Bi(z(k, M, 1) || null)) g = g.query(e.document), 0 < g.length && f.push(g[0]);
                f = f.filter(yg).filter(zg(f)).filter(Ag(e));
                f.sort(Bg);
                if (k = f[0] || null) f = e.document.createElement("div"), f.id = "google-auto-placed-read-aloud-player-reserved", Vc(f, {
                    width: "100%",
                    height: "65px"
                }), k.insertBefore(f, k.firstChild), Fi(e).audioSenseSpaceReserved = !0
            }
        k = a.h;
        var m;
        try {
            var u = (m = k.localStorage.getItem("google_ama_settings")) ? Hi(m) : null
        } catch (y) {
            u = null
        }
        m = null !== u && E(u, 2, !1);
        u = Fi(k);
        m && (u.eatf = !0, id(7, [!0, 0, !1]));
        b: {
            f = {
                hb: !1,
                ib: !1
            };
            h = Ia(k.document.querySelectorAll(".google-auto-placed"));l = Ia(k.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]"));
            const y = Ia(k.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]"));g = (wj(k) || Ia(k.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(Ia(k.document.querySelectorAll("iframe[id^=google_ads_iframe]")));
            const w = Ia(k.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")),
                C = Ia(k.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
                Ba = Ia(k.document.querySelectorAll("div.googlepublisherpluginad")),
                U = Ia(k.document.querySelectorAll("html > ins.adsbygoogle"));e = [].concat(Ia(k.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), Ia(k.document.querySelectorAll("body ins.adsbygoogle")));m = [];
            for (const [Ca, ta] of [
                    [f.Sb, h],
                    [f.hb, l],
                    [f.Vb, y],
                    [f.Tb, g],
                    [f.Wb, w],
                    [f.Rb, C],
                    [f.Ub, Ba],
                    [f.ib, U]
                ]) f = ta,
            !1 === Ca ? m = m.concat(f) : e = e.concat(f);e = xj(e);m = xj(m);
            e = e.slice(0);
            for (v of m)
                for (m = 0; m < e.length; m++)(v.contains(e[m]) || e[m].contains(v)) && e.splice(m, 1);
            var v = e;m = N(k).clientHeight;
            for (k = 0; k < v.length; k++)
                if (!(v[k].getBoundingClientRect().top > m)) {
                    v = !0;
                    break b
                }
            v = !1
        }
        v = v ? u.eatfAbg = !0 : !1;
        if (v) return !0;
        v = new hg([2]);
        for (u = 0; u < c.length; u++) {
            m = a;
            e = c[u];
            k = u;
            f = b;
            g = d;
            h = v;
            if (z(e, og, 4) && h.contains(r(z(e, og, 4), 1)) && 1 === r(e, 8) && Aj(e, g)) {
                m.j++;
                if (f = Bj(m, e, f, g)) g = Fi(m.h), g.numAutoAdsPlaced || (g.numAutoAdsPlaced = 0), z(e, M, 1) && null != r(z(e, M, 1), 5) && (g.numPostPlacementsPlaced ?
                    g.numPostPlacementsPlaced++ : g.numPostPlacementsPlaced = 1), null == g.placed && (g.placed = []), g.numAutoAdsPlaced++, g.placed.push({
                    index: k,
                    element: f.ka
                }), id(7, [!1, m.j, !0]);
                m = f
            } else m = null;
            if (m) return !0
        }
        id(7, [!1, a.j, !1]);
        return !1
    }

    function Bj(a, b, c, d) {
        if (!Aj(b, d) || 1 != r(b, 8)) return null;
        d = z(b, M, 1);
        if (!d) return null;
        d = Bi(d);
        if (!d) return null;
        d = d.query(a.h.document);
        if (0 == d.length) return null;
        d = d[0];
        var e = Ei[r(b, 2)];
        e = void 0 === e ? null : e;
        var f;
        if (!(f = null == e)) {
            a: {
                f = a.h;
                switch (e) {
                    case 0:
                        f = qj(rj(d), f);
                        break a;
                    case 3:
                        f = qj(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = qj(g ? 1 == g.nodeType ? g : rj(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && 2 == e && !sj(d))) c = 1 == e || 2 == e ? d : d.parentNode,
            c = !(c && !Ug(c) && 0 >= c.offsetWidth);f = !c
        }
        if (!(c = f)) {
            c = a.A;
            f = r(b, 2);
            g = ea(d);
            g = c.i.h.get(g);
            if (!(g = g ? g.contains(f) : !1)) a: {
                if (c.h.contains(ea(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0;
                        break a;
                    default:
                        g = !1;
                        break a
                }
                for (f = d.parentElement; f;) {
                    if (c.h.contains(ea(f))) {
                        g = !0;
                        break a
                    }
                    f = f.parentElement
                }
                g = !1
            }
            c = g
        }
        if (!c) {
            c = a.v;
            f = r(b, 2);
            a: switch (f) {
                case 1:
                    g = mj(d.previousElementSibling) || oj(d);
                    break a;
                case 4:
                    g = mj(d) || oj(d.nextElementSibling);
                    break a;
                case 2:
                    g = oj(d.firstElementChild);
                    break a;
                case 3:
                    g = mj(d.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + f);
            }
            c = g || kj(c, d, f)
        }
        if (c) return null;
        f = z(b, Mg, 3);
        c = {};
        f && (c.Ua = r(f, 1), c.La = r(f, 2), c.ab = !!ub(f, 3));
        f = z(b, og, 4) && r(z(b, og, 4), 2) ? r(z(b, og, 4), 2) : null;
        f = rg(f);
        g = null != r(b, 12) ? r(b, 12) : null;
        g = null == g ? null : new qg(null, {
            google_ml_rank: g
        });
        b = Cj(a, b);
        b = pg(a.m, f, g, b);
        f = a.h;
        a = a.C;
        var h = f.document,
            l = c.ab || !1;
        g = (new zc(h)).createElement("DIV");
        const k = g.style;
        k.width = "100%";
        k.height = "auto";
        k.clear = l ? "both" : "none";
        l = g.style;
        l.textAlign = "center";
        c.pb && vi(l, c.pb);
        h = (new zc(h)).createElement("INS");
        l = h.style;
        l.display = "block";
        l.margin = "auto";
        l.backgroundColor =
            "transparent";
        c.Ua && (l.marginTop = c.Ua);
        c.La && (l.marginBottom = c.La);
        c.Wa && vi(l, c.Wa);
        g.appendChild(h);
        c = {
            sa: g,
            ka: h
        };
        c.ka.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.Ma) c.sa.className = h.join(" ");
        h = c.ka;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client", a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var m = c.sa;
                if (P(bh)) {
                    {
                        const C = Vh(d, e);
                        if (C.init) {
                            var u = C.init;
                            for (d = u; d = C.ma(d);) u = d;
                            var v = {
                                anchor: u,
                                position: C.pa
                            }
                        } else v = {
                            anchor: d,
                            position: e
                        }
                    }
                    m["google-ama-order-assurance"] =
                        0;
                    Uh(m, v.anchor, v.position)
                } else Uh(m, d, e);
                b: {
                    var y = c.ka;y.dataset.adsbygoogleStatus = "reserved";y.className += " adsbygoogle-noablate";m = {
                        element: y
                    };
                    var w = b && b.Ra;
                    if (y.hasAttribute("data-pub-vars")) {
                        try {
                            w = JSON.parse(y.getAttribute("data-pub-vars"))
                        } catch (C) {
                            break b
                        }
                        y.removeAttribute("data-pub-vars")
                    }
                    w && (m.params = w);
                    (f.adsbygoogle = f.adsbygoogle || []).push(m)
                }
            } catch (C) {
                (y = c.sa) && y.parentNode && (w = y.parentNode, w.removeChild(y), Ug(w) && (w.style.display = w.getAttribute("data-init-display") || "none"));
                y = !1;
                break a
            }
            y = !0
        }
        return y ? c : null
    }

    function Cj(a, b) {
        return eg(gg(Ii(b).map(sg), c => {
            Fi(a.h).exception = c
        }))
    }
    const Dj = class {
        constructor(a, b, c, d, e) {
            this.h = a;
            this.C = b;
            this.i = c;
            this.m = e || null;
            this.A = (this.B = d) ? ej(a.document, A(d, Ri, 5)) : ej(a.document, []);
            this.v = new pj;
            this.j = 0;
            this.l = !1
        }
    };

    function zj(a) {
        const b = {};
        a && tb(a, 6, !1).forEach(c => {
            b[c] = !0
        });
        return b
    }

    function Aj(a, b) {
        return a && void 0 !== Ab(a, og, 4, !1) && b[r(z(a, og, 4), 2)] ? !1 : !0
    };
    var Ej = Wb(class extends G {
        constructor(a) {
            super(a)
        }
    });
    class Q extends Error {
        constructor(a = "") {
            super();
            this.name = "TagError";
            this.message = a ? "adsbygoogle.push() error: " + a : "";
            Error.captureStackTrace ? Error.captureStackTrace(this, Q) : this.stack = Error().stack || ""
        }
    };
    let Fj, R;
    const Gj = new Pd(n);
    var Hj = a => {
        null != a && (n.google_measure_js_timing = a);
        n.google_measure_js_timing || Od(Gj)
    };
    (a => {
        Fj = a || new Ed;
        "number" !== typeof n.google_srt && (n.google_srt = Math.random());
        Cd(Fj, n.google_srt);
        R = new Rd(Fj, Gj);
        R.l(!0);
        "complete" == n.document.readyState ? Hj() : Gj.h && gc(n, "load", () => {
            Hj()
        })
    })();
    var Ij = (a, b, c) => R.ia(a, b, c),
        Jj = (a, b) => R.va(a, b),
        Kj = (a, b, c) => {
            const d = K(Nf).i();
            !b.eid && d.length && (b.eid = d.toString());
            Dd(Fj, a, b, !0, c)
        },
        Lj = (a, b) => {
            R.ca(a, b)
        },
        Mj = (a, b, c, d) => {
            let e;
            sd(b) ? e = b.msg || Qd(b.error) : e = Qd(b);
            return 0 == e.indexOf("TagError") ? (c = b instanceof rd ? b.error : b, c.pbr || (c.pbr = !0, R.I(a, b, .1, d, "puberror")), !1) : R.I(a, b, c, d)
        };

    function Nj(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? dg(() => Ej(c)) : ag(null)
    };

    function Oj() {
        if (Pj) return Pj;
        const a = kd() || window,
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Pj = b : a.google_persistent_state_async = Pj = new Qj
    }

    function Rj(a) {
        return Sj[a] || "google_ps_" + a
    }

    function Tj(a, b, c) {
        b = Rj(b);
        a = a.S;
        const d = a[b];
        return void 0 === d ? (a[b] = c(), a[b]) : d
    }

    function Uj(a, b, c) {
        return Tj(a, b, () => c)
    }
    class Qj {
        constructor() {
            this.S = {}
        }
    }
    var Pj = null;
    const Sj = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function Vj(a) {
        this.h = a || {
            cookie: ""
        }
    }
    Vj.prototype.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        "object" === typeof c && (h = c.Zb, g = c.ac || !1, f = c.domain || void 0, e = c.path || void 0, d = c.nb);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
    };
    Vj.prototype.get = function(a, b) {
        const c = a + "=",
            d = (this.h.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = pa(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    Vj.prototype.isEmpty = function() {
        return !this.h.cookie
    };
    Vj.prototype.clear = function() {
        var a = (this.h.cookie || "").split(";");
        const b = [];
        var c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = pa(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (c = b.length - 1; 0 <= c; c--) a = b[c], this.get(a), this.set(a, "", {
            nb: 0,
            path: void 0,
            domain: void 0
        })
    };

    function Wj(a, b = window) {
        if (ub(a, 5)) try {
            return b.localStorage
        } catch {}
        return null
    };

    function Xj(a) {
        var b = new Yj;
        return t(b, 5, a)
    }
    var Yj = class extends G {
        constructor() {
            super()
        }
    };
    const Zj = a => {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    };

    function ak(a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = Zj(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (fd({
            e: String(a.internalErrorState)
        }, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    }

    function bk(a) {
        if (a.i) return a.i;
        a.i = Tc(a.l, "__tcfapiLocator");
        return a.i
    }

    function ck(a) {
        return "function" === typeof a.l.__tcfapi || null != bk(a)
    }

    function dk(a, b, c, d) {
        c || (c = () => {});
        if ("function" === typeof a.l.__tcfapi) a = a.l.__tcfapi, a(b, 2, c, d);
        else if (bk(a)) {
            ek(a);
            const e = ++a.K;
            a.v[e] = c;
            a.i && a.i.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function ek(a) {
        a.m || (a.m = b => {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.v[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, gc(a.l, "message", a.m))
    }
    class fk extends Xe {
        constructor(a) {
            var b = {};
            super();
            this.l = a;
            this.i = null;
            this.v = {};
            this.K = 0;
            this.C = b.Ta ? ? 500;
            this.B = b.Qb ? ? !1;
            this.m = null
        }
        h() {
            this.v = {};
            this.m && (hc(this.l, "message", this.m), delete this.m);
            delete this.v;
            delete this.l;
            delete this.i;
            super.h()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.B
            };
            const c = fc(() => a(b));
            let d = 0; - 1 !== this.C && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.C));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = Zj(b),
                    b.internalBlockOnErrors = this.B, g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                dk(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && dk(this, "removeEventListener", null, a.listenerId)
        }
    };
    var kk = ({
            s: a,
            X: b,
            Ta: c,
            callback: d,
            na: e = !1,
            oa: f = !1
        }) => {
            b = gk({
                s: a,
                X: b,
                na: e,
                oa: f
            });
            null != b.h || "tcunav" != b.i.message ? d(b) : hk(a, c).then(g => g.map(ik)).then(g => g.map(h => jk(a, h))).then(d)
        },
        gk = ({
            s: a,
            X: b,
            na: c = !1,
            oa: d = !1
        }) => {
            if (!lk({
                    s: a,
                    X: b,
                    na: c,
                    oa: d
                })) return jk(a, Xj(!0));
            b = Oj();
            return (b = Uj(b, 24)) ? jk(a, ik(b)) : cg(Error("tcunav"))
        };

    function lk({
        s: a,
        X: b,
        na: c,
        oa: d
    }) {
        if (!(d = !d && ck(new fk(a)))) {
            if (c = !c) {
                if (b) {
                    a = Nj(a);
                    if (null != a.h)
                        if ((a = a.h.value) && null != r(a, 1)) b: switch (a = r(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else R.I(806, a.i, void 0, void 0), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function hk(a, b) {
        return Promise.race([mk(), nk(a, b)])
    }

    function mk() {
        return (new Promise(a => {
            var b = Oj();
            a = {
                resolve: a
            };
            const c = Uj(b, 25, []);
            c.push(a);
            b.S[Rj(25)] = c
        })).then(ok)
    }

    function nk(a, b) {
        return new Promise(c => {
            a.setTimeout(c, b, cg(Error("tcto")))
        })
    }

    function ok(a) {
        return a ? ag(a) : cg(Error("tcnull"))
    }

    function ik(a) {
        if (ak(a))
            if (!1 !== a.gdprApplies && "tcunavailable" !== a.tcString && void 0 !== a.gdprApplies && "string" === typeof a.tcString && a.tcString.length) {
                b: {
                    if (a.publisher && a.publisher.restrictions) {
                        var b = a.publisher.restrictions["1"];
                        if (void 0 !== b) {
                            b = b["755"];
                            break b
                        }
                    }
                    b = void 0
                }
                0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (b = !(!b || !b["755"])) && a.purposeOneTreatment && "CH" === a.publisherCC ? a = !0 : (b && (a = a.purpose.consents, b = !(!a || !a["1"])), a = b)) : a = !0
            }
        else a = !0;
        else a = !1;
        return Xj(a)
    }

    function jk(a, b) {
        return (a = Wj(b, a)) ? ag(a) : cg(Error("unav"))
    };
    var qk = class extends G {
            constructor(a) {
                super(a, -1, pk)
            }
        },
        pk = [1, 2, 3];
    var rk = class extends G {
        constructor(a) {
            super(a)
        }
        i() {
            return z(this, qk, 2)
        }
    };
    const sk = class {
        constructor(a) {
            this.exception = a
        }
    };

    function tk(a, b) {
        try {
            var c = a.i,
                d = c.resolve,
                e = a.h;
            Fi(e.h);
            A(e.i, Og, 1);
            d.call(c, new sk(b))
        } catch (f) {
            a = a.i, b = f, Tf(a), a.h = 2, a.j = b, Vf(a.i)
        }
    }
    var uk = class {
        constructor(a, b, c) {
            this.j = a;
            this.h = b;
            this.i = c
        }
        start() {
            this.l()
        }
        l() {
            try {
                switch (this.j.document.readyState) {
                    case "complete":
                    case "interactive":
                        yj(this.h, !0);
                        tk(this);
                        break;
                    default:
                        yj(this.h, !1) ? tk(this) : this.j.setTimeout(ka(this.l, this), 100)
                }
            } catch (a) {
                tk(this, a)
            }
        }
    };
    var vk = "a".charCodeAt(),
        wk = kc(Rf),
        xk = kc(Sf);

    function S(a, b) {
        if (a.h + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.i.substring(a.h, a.h + b);
        a.h += b;
        return parseInt(c, 2)
    }

    function yk(a) {
        return String.fromCharCode(vk + S(a, 6)) + String.fromCharCode(vk + S(a, 6))
    }

    function zk(a) {
        let b = S(a, 12);
        const c = [];
        for (; b--;) {
            var d = !0 === !!S(a, 1),
                e = S(a, 16);
            if (d)
                for (d = S(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function Ak(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (S(a, 1)) {
                const f = e + 1;
                if (c && -1 === c.indexOf(f)) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function Bk(a) {
        const b = S(a, 16);
        return !0 === !!S(a, 1) ? (a = zk(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : Ak(a, b)
    }
    class Ck {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.i = a;
            this.h = 0
        }
    };
    var Ek = (a, b) => {
        try {
            var c = Oa(a.split(".")[0]).map(e => e.toString(2).padStart(8, "0")).join("");
            const d = new Ck(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.h += 78;
            c.cmpId = S(d, 12);
            c.cmpVersion = S(d, 12);
            d.h += 30;
            c.tcfPolicyVersion = S(d, 6);
            c.isServiceSpecific = !!S(d, 1);
            c.useNonStandardStacks = !!S(d, 1);
            c.specialFeatureOptins = Dk(Ak(d, 12, xk), xk);
            c.purpose = {
                consents: Dk(Ak(d, 24, wk), wk),
                legitimateInterests: Dk(Ak(d, 24, wk), wk)
            };
            c.purposeOneTreatment = !!S(d, 1);
            c.publisherCC = yk(d);
            c.vendor = {
                consents: Dk(Bk(d), b),
                legitimateInterests: Dk(Bk(d),
                    b)
            };
            return c
        } catch (d) {
            return null
        }
    };
    const Dk = (a, b) => {
        const c = {};
        if (Array.isArray(b) && 0 !== b.length)
            for (const d of b) c[d] = -1 !== a.indexOf(d);
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };
    var Fk = class {
        constructor() {
            this.h = {}
        }
    };
    var Gk = class extends G {
        constructor() {
            super()
        }
    };
    var Hk = class extends G {
        constructor() {
            super()
        }
    };
    var Ik = class extends G {
            constructor() {
                super()
            }
        },
        Jk = [8, 11, 12, 13, 15, 17, 18, 19, 20, 21, 22, 25, 26, 27];
    var Kk = class {};
    var Lk = class extends G {
        constructor(a) {
            super(a)
        }
    };
    var Mk = class extends G {
        constructor(a) {
            super(a)
        }
    };
    var Ok = Wb(class extends G {
            constructor(a) {
                super(a, -1, Nk)
            }
        }),
        Nk = [7];
    var Pk = new class {
        constructor() {
            this.key = "45369554";
            this.defaultValue = !1;
            this.valueType = "boolean"
        }
    };
    var Qk = class extends Fk {
            constructor() {
                super();
                var a = n.__fcexpdef || "";
                try {
                    const b = JSON.parse(a)[0];
                    a = "";
                    for (let c = 0; c < b.length; c++) a += String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10));
                    this.h = JSON.parse(a)
                } catch (b) {}
            }
        },
        Rk;

    function Sk(a) {
        return (a = Tk(a)) ? z(a, Mk, 4) : null
    }

    function Tk(a) {
        if (a = (new Vj(a)).get("FCCDCF", ""))
            if (a.startsWith("%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                Uk(1), b = null
            } else b = a;
            else b = null;
        try {
            return b ? Ok(b) : null
        } catch (c) {
            return Uk(2), null
        }
    }

    function Uk(a) {
        new Kk;
        var b = new Gk;
        a = t(b, 7, a);
        b = new Hk;
        a = Db(b, 1, a);
        b = new Ik;
        Eb(b, 22, Jk, a);
        Rk || (Rk = new Qk);
        a = Rk.h[Pk.key];
        if ("proto" === Pk.valueType) try {
            JSON.parse(a)
        } catch (c) {}
    };
    kc(Rf).map(a => Number(a));
    kc(Sf).map(a => Number(a));

    function Vk(a) {
        a.__tcfapiPostMessageReady || Wk(new Xk(a))
    }

    function Wk(a) {
        a.i = b => {
            const c = "string" == typeof b.data;
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.h.__tcfapi(e.command, e.version, (f, g) => {
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
        a.h.addEventListener("message", a.i);
        a.h.__tcfapiPostMessageReady = !0
    }
    var Xk = class {
        constructor(a) {
            this.h = a;
            this.i = null
        }
    };
    var Yk = (a, b) => {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = Ic("IFRAME", c);
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

    function Zk() {
        var a = window,
            b = P(gh);
        a.__uspapi || a.frames.__uspapiLocator || (a = new $k(a), al(a), b && bl(a))
    }

    function al(a) {
        !a.m || a.h.__uspapi || a.h.frames.__uspapiLocator || (a.h.__uspapiManager = "fc", Yk(a.h, "__uspapiLocator"), ma("__uspapi", (...b) => cl(a, ...b)))
    }

    function bl(a) {
        !a.j || a.h.__tcfapi || a.h.frames.__tcfapiLocator || (a.h.__tcfapiManager = "fc", Yk(a.h, "__tcfapiLocator"), a.h.__tcfapiEventListeners = a.h.__tcfapiEventListeners || [], ma("__tcfapi", (...b) => dl(a, ...b)), Vk(a.h))
    }

    function cl(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.m
        }, !0)
    }

    function dl(a, b, c, d, e = null) {
        if ("function" === typeof d)
            if (c && 2 !== c) d(null, !1);
            else switch (c = a.h.__tcfapiEventListeners, b) {
                case "getTCData":
                    !e || Array.isArray(e) && e.every(f => "number" === typeof f) ? d(el(a, e, null), !0) : d(null, !1);
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
                    d(el(a, null, b - 1), !0);
                    break;
                case "removeEventListener":
                    c[e] ? (c[e] = null, d(!0)) : d(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    d(null, !1)
            }
    }

    function el(a, b, c) {
        if (!a.j) return null;
        b = Ek(a.j, b);
        b.addtlConsent = null != a.l ? a.l : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    }
    class $k {
        constructor(a) {
            this.h = a;
            this.i = a.document;
            this.m = (a = (a = Tk(this.i)) ? z(a, Lk, 5) || null : null) ? r(a, 2) : null;
            this.j = (a = Sk(this.i)) && null != r(a, 1) ? r(a, 1) : null;
            this.l = (a = Sk(this.i)) && null != r(a, 2) ? r(a, 2) : null
        }
    };
    const fl = a => {
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
        gl = a => {
            let b = "";
            const c = /[/%?&=]/;
            for (let d = 0; d < a.length; ++d) {
                const e = a[d];
                b = e.match(c) ? b + e : b + encodeURIComponent(e)
            }
            return b
        };
    var hl = a => {
        a = tb(a, 2, !1);
        if (!a) return !1;
        for (let b = 0; b < a.length; b++)
            if (1 == a[b]) return !0;
        return !1
    };
    const jl = (a, b) => {
            a = gl(fl(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
            const c = Oc(a),
                d = il(a);
            return b.find(e => {
                const f = void 0 !== Ab(e, Ni, 7, !1) ? r(z(e, Ni, 7), 1) : r(e, 1);
                e = void 0 !== Ab(e, Ni, 7, !1) ? r(z(e, Ni, 7), 2) : 2;
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
        il = a => {
            const b = {};
            for (;;) {
                b[Oc(a)] = !0;
                if (!a) return b;
                a = a.substring(0, a.lastIndexOf("/"))
            }
        };
    const kl = {
        google_ad_channel: !0,
        google_ad_host: !0
    };
    var ll = (a, b) => {
            a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
            Kj("ama", b, .01)
        },
        ml = a => {
            const b = {};
            H(kl, (c, d) => {
                d in a && (b[d] = a[d])
            });
            return b
        };
    var nl = a => {
        a = z(a, Mi, 3);
        return !a || r(a, 1) <= Date.now() ? !1 : !0
    };

    function ol(a) {
        if (P($g)) var b = null;
        else try {
            b = a.getItem("google_ama_config")
        } catch (d) {
            b = null
        }
        try {
            var c = b ? cj(b) : null
        } catch (d) {
            c = null
        }
        return c
    };
    var pl = class extends G {
        constructor(a) {
            super(a)
        }
        i() {
            return z(this, rk, 2)
        }
        l() {
            return E(this, 3)
        }
    };
    var rl = class extends G {
            constructor(a) {
                super(a, -1, ql)
            }
            i() {
                return vb(this, 1)
            }
            l() {
                return z(this, pl, 2)
            }
        },
        ql = [1];
    var tl = class extends G {
            constructor(a) {
                super(a, -1, sl)
            }
            getId() {
                return B(r(this, 1), 0)
            }
        },
        sl = [2];
    var vl = class extends G {
            constructor(a) {
                super(a, -1, ul)
            }
        },
        ul = [2];
    var xl = class extends G {
            constructor(a) {
                super(a, -1, wl)
            }
        },
        wl = [2];
    var yl = class extends G {
        constructor(a) {
            super(a)
        }
        i() {
            return B(r(this, 2), 0)
        }
        l() {
            return B(r(this, 4), 0)
        }
        m() {
            return E(this, 3)
        }
    };
    var Al = class extends G {
            constructor(a) {
                super(a, -1, zl)
            }
        },
        zl = [1, 4, 2, 3];
    var Dl = class extends G {
            constructor(a) {
                super(a, -1, Bl)
            }
            l() {
                return Hb(this, pl, 13, Cl)
            }
            A() {
                return void 0 !== Ab(this, pl, zb(this, Cl, 13))
            }
            i() {
                return Hb(this, rl, 14, Cl)
            }
            m() {
                return void 0 !== Ab(this, rl, zb(this, Cl, 14))
            }
        },
        Bl = [19],
        Cl = [13, 14];
    let El = void 0;

    function Fl() {
        Vb(El, Tb);
        return El
    };
    var Il = (a, b, c = "", d = null) => 1 === b && Gl(c, d) ? !0 : Hl(a, c, e => Ea(A(e, Xb, 2), f => r(f, 1) === b)),
        Gl = (a, b) => !b || E(b, 22) && !P(lh) ? !1 : b.A() ? E(b.l(), 1) : b.m() && "" !== a && 1 === b.i().i().length && b.i().i()[0] === a ? E(b.i().l(), 1) : !1,
        Jl = (a, b) => {
            b = B(r(b, 18), 0); - 1 !== b && (a.tmod = b)
        },
        Ll = a => {
            const b = Gc(J) || J;
            return Kl(b, a) ? !0 : Hl(J, "", c => Ea(tb(c, 3, !1), d => d === a))
        };

    function Kl(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && Ha(a.split(","), b.toString())
    }

    function Hl(a, b, c) {
        a = Gc(a) || a;
        const d = Ml(a);
        b && (b = qd(String(b)));
        return jc(d, (e, f) => Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e))
    }

    function Ml(a) {
        a = Nl(a);
        const b = {};
        H(a, (c, d) => {
            try {
                const e = new Zb(c);
                b[d] = e
            } catch (e) {}
        });
        return b
    }
    var Nl = a => P(Xg) ? (a = gk({
        s: a,
        X: Fl()
    }), null != a.h ? Ol(a.h.value) : {}) : Ol(a.localStorage);

    function Ol(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : ic(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    }

    function Pl(a) {
        P(hh) && Kj("atf_ad_settings_from_ppabg", {
            p_s: a
        }, .01)
    }
    const Ql = a => !!a && (0 < A(a, Og, 1).length || P(ah) && 0 < A(a, Ig, 3).length);
    var Rl = () => {
        const a = [];
        P(eh) && a.push(1);
        P(dh) && a.push(2);
        P(fh) && a.push(7);
        return a
    };

    function T(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function Sl(a) {
        a = T(a);
        const b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Ka: !0,
            xb: b,
            ra: a.ablation_viewport_offset
        } : null
    }

    function Tl(a, b) {
        a = T(a);
        a.had_ads_ablation = !0;
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = b
    }

    function Ul(a) {
        T(J).allow_second_reactive_tag = a
    }

    function Vl() {
        const a = T(window);
        a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
        return a.afg_slotcar_vars
    };

    function Wl(a) {
        return a.document.querySelector('meta[name="google-adsense-platform-account"]') ? .getAttribute("content") ? ? null
    };

    function Xl(a, b, c, d) {
        Yl(new Zl(a, b, c, d))
    }

    function Yl(a) {
        gg(fg(gk({
            s: a.s,
            X: E(a.i, 6)
        }), b => {
            $l(a, b, !0)
        }), () => {
            am(a)
        })
    }

    function $l(a, b, c) {
        gg(fg(bm(b), d => {
            cm("ok");
            a.h(d, {
                fromLocalStorage: !0
            })
        }), () => {
            var d = a.s;
            try {
                b.removeItem("google_ama_config")
            } catch (e) {
                ll(d, {
                    lserr: 1
                })
            }
            c ? am(a) : a.h(null, null)
        })
    }

    function am(a) {
        gg(fg(dm(a), b => {
            a.h(b, {
                fromPABGSettings: !0
            })
        }), () => {
            em(a)
        })
    }

    function bm(a) {
        return (a = (a = ol(a)) ? nl(a) ? a : null : null) ? ag(a) : cg(Error("invlocst"))
    }

    function dm(a) {
        var b = a.s;
        if ((T(b) ? .head_tag_slot_vars ? .google_ad_host ? ? Wl(b)) && (!E(a.i, 22) || !P(kh))) return cg(Error("invtag"));
        a: {
            b = a.s;
            var c = a.j;a = a.i;
            if (a ? .A()) b = a ? .l() ? .i() ? .i(),
            Ql(b) ? Pl(!1) : b = null;
            else {
                if (a ? .m()) {
                    const d = a ? .i() ? .i(),
                        e = a ? .i() ? .l() ? .i() ? .i();
                    if (d && 1 === d.length && d[0] === c && Ql(e) && D(a, 17) === b.location.host) {
                        Pl(!0);
                        b = e;
                        break a
                    }
                }
                b = null
            }
        }
        b ? (c = new bj, a = A(b, Og, 1), c = Fb(c, 1, a), a = A(b, Ui, 2), c = Fb(c, 7, a), P(ah) && 0 < A(b, Ig, 3).length && (a = new Kg, b = A(b, Ig, 3), b = Fb(a, 1, b), Db(c, 6, b)), b = ag(c)) : b = cg(Error("invtag"));
        return b
    }

    function em(a) {
        kk({
            s: a.s,
            X: E(a.i, 6),
            Ta: 50,
            callback: b => {
                fm(a, b)
            }
        })
    }

    function fm(a, b) {
        gg(fg(b, c => {
            $l(a, c, !1)
        }), c => {
            cm(c.message);
            a.h(null, null)
        })
    }

    function cm(a) {
        Kj("abg::amalserr", {
            status: a,
            guarding: "true",
            timeout: 50,
            rate: .01
        }, .01)
    }
    class Zl {
        constructor(a, b, c, d) {
            this.s = a;
            this.i = b;
            this.j = c;
            this.h = d
        }
    };
    var im = (a, b, c, d) => {
        try {
            const e = jl(a, A(c, Ui, 7));
            if (e && hl(e)) {
                r(e, 4) && (d = pg(d, new qg(null, {
                    google_package: r(e, 4)
                })));
                const f = new Dj(a, b, c, e, d);
                Ai(1E3, () => {
                    var g = new Wf;
                    (new uk(a, f, g)).start();
                    return g.i
                }, a).then(la(gm, a), la(hm, a))
            }
        } catch (e) {
            ll(a, {
                atf: -1
            })
        }
    };
    const gm = a => {
            ll(a, {
                atf: 1
            })
        },
        hm = (a, b) => {
            (a.google_ama_state = a.google_ama_state || {}).exception = b;
            ll(a, {
                atf: 0
            })
        };

    function jm(a) {
        if (P(vh)) {
            a.easpi = P(vh);
            P(uh) && (a.easpa = !0);
            a.asntp = 0;
            a.asntpv = 0;
            a.asntpl = 0;
            a.asntpm = 0;
            a.asntpc = Sh(Dh);
            a.asna = 5;
            a.asnd = 5;
            a.asnp = 5;
            a.asns = 5;
            a.asmat = Sh(Ch);
            a.asptt = -1;
            P(Hh) || (a.aspe = !0);
            a.asro = P(Ih) ? P(mh) : P(Fh);
            P(Eh) && (a.ascet = !0);
            P(zh) && (a.asgr = !0);
            P(Gh) || (a.asrc = !1);
            P(xh) && (a.asbu = !0);
            P(yh) && (a.aseb = !0);
            1 > Sh(Ah) && (a.asla = Sh(Ah));
            1 > Sh(wh) && (a.asaa = Sh(wh));
            P(Jh) && (a.asupm = !0);
            var b = Sh(Bh);
            0 < b && (a.asmrc = b)
        }
    };
    La || !p("Safari") || va();
    class km {
        constructor() {
            this.promise = new Promise(a => {
                this.resolve = a
            })
        }
    };

    function lm() {
        const {
            promise: a,
            resolve: b
        } = new km;
        return {
            promise: a,
            resolve: b
        }
    };

    function mm(a = () => {}) {
        n.google_llp || (n.google_llp = {});
        const b = n.google_llp;
        let c = b[7];
        if (c) return c;
        c = lm();
        b[7] = c;
        a();
        return c
    }

    function nm(a) {
        return mm(() => {
            Hc(n.document, a)
        }).promise
    };
    var om = a => {
        if (n.google_apltlad || n !== n.top || !a.google_ad_client) return null;
        n.google_apltlad = !0;
        const b = {
                enable_page_level_ads: {
                    pltais: !0
                },
                google_ad_client: a.google_ad_client
            },
            c = b.enable_page_level_ads;
        H(a, (d, e) => {
            ti[e] && "google_ad_client" !== e && (c[e] = d)
        });
        c.google_pgb_reactive = 7;
        jm(c);
        if ("google_ad_section" in a || "google_ad_region" in a) c.google_ad_section = a.google_ad_section || a.google_ad_region;
        return b
    };

    function pm(a) {
        return da(a.enable_page_level_ads) && 7 === a.enable_page_level_ads.google_pgb_reactive
    };
    var sm = (a, b) => {
        T(J).ama_ran_on_page || Ai(1001, () => qm(new rm(a, b)), n)
    };

    function qm(a) {
        Xl(a.h, a.j, a.i.google_ad_client || "", (b, c) => {
            var d = a.h,
                e = a.i;
            T(J).ama_ran_on_page || b && tm(d, e, b, c)
        })
    }
    class rm {
        constructor(a, b) {
            this.h = n;
            this.i = a;
            this.j = b
        }
    }

    function tm(a, b, c, d) {
        d && (Fi(a).configSourceInAbg = d);
        void 0 !== Ab(c, $i, 24, !1) && (d = Gi(a), d.availableAbg = !0, d.ablationFromStorage = !!z(c, $i, 24) ? .i() ? .i());
        if (pm(b) && (d = jl(a, A(c, Ui, 7)), !d || !ub(d, 8))) return;
        T(J).ama_ran_on_page = !0;
        z(c, Li, 15) ? .i() && (T(a).enable_overlap_observer = !0);
        var e = z(c, Ki, 13);
        e && 1 === r(e, 1) ? (d = 0, (e = z(e, Ji, 6)) && r(e, 3) && (d = r(e, 3) || 0), Tl(a, d)) : z(c, $i, 24) ? .i() ? .i() && (Gi(a).ablatingThisPageview = !0, Tl(a, 1));
        id(3, [c.toJSON()]);
        const f = b.google_ad_client || "";
        b = ml(da(b.enable_page_level_ads) ?
            b.enable_page_level_ads : {});
        const g = pg(tg, new qg(null, b));
        Ij(782, () => {
            im(a, f, c, g)
        })
    };
    var um = {
            google_ad_modifications: !0,
            google_analytics_domain_name: !0,
            google_analytics_uacct: !0,
            google_pause_ad_requests: !0,
            google_user_agent_client_hint: !0
        },
        vm = a => (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null,
        wm = a => {
            if (a = a.innerText || a.innerHTML)
                if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) &&
                    RegExp("google_ad_client").test(a[1])) return a[1];
            return null
        },
        xm = a => {
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

    function ym(a) {
        if (a.google_ad_client) var b = String(a.google_ad_client);
        else {
            if (null == (b = T(a).head_tag_slot_vars ? .google_ad_client ? ? a.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client"))) {
                b: {
                    b = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(a) || /i(phone|pad|pod)/i.test(a) &&
                    /applewebkit/i.test(a) && !/version|safari/i.test(a) && !pd() ? vm : wm;
                    for (var c = b.length - 1; 0 <= c; c--) {
                        var d = b[c];
                        if (!d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = a(d))) {
                            b = d;
                            break b
                        }
                    }
                    b = null
                }
                if (b) {
                    a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                    for (c = {}; d = a.exec(b);) c[d[1]] = xm(d[2]);
                    b = c;
                    b = b.google_ad_client ? b.google_ad_client : ""
                } else b = ""
            }
            b = b ? ? ""
        }
        return b
    };
    async function zm(a, b) {
        var c = 10;
        return 0 >= c ? Promise.reject() : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e())
            }, 200)
        })
    };

    function Am(a) {
        const b = a.state.pc;
        return null !== b && 0 !== b ? b : a.state.pc = Zc(a.s)
    }

    function Bm(a) {
        const b = a.state.wpc;
        return null !== b && "" !== b ? b : a.state.wpc = ym(a.s)
    }

    function Cm(a, b) {
        var c = new xe;
        var d = Am(a);
        c = x(c, 1, d, 0);
        d = Bm(a);
        c = x(c, 2, d, "");
        c = x(c, 3, a.state.sd, 0);
        return x(c, 7, Math.round(b || a.s.performance.now()), 0)
    }
    async function Dm(a) {
        await zm(a.s, () => !(!Am(a) || !Bm(a)))
    }
    async function Em() {
        var a = K(Fm);
        if (a.i && !a.state.le.includes(1)) {
            a.state.le.push(1);
            var b = a.s.performance.now();
            await Dm(a);
            var c = qe(re(new te, oe(ne(new pe, N(a.s).scrollWidth), N(a.s).scrollHeight)), oe(ne(new pe, N(a.s).clientWidth), N(a.s).clientHeight)),
                d = Zh(a.s);
            0 !== d && se(c, le(new me, d));
            Ue(a.h, ve(Cm(a, b), c));
            gf(a.h, a.s, () => {
                var e = a.h;
                var f = Cm(a);
                var g = new ue;
                f = Eb(f, 8, we, g);
                Ue(e, f)
            })
        }
    }
    async function Gm(a, b, c) {
        if (a.i && c.length && !a.state.lgdp.includes(Number(b))) {
            a.state.lgdp.push(Number(b));
            var d = a.s.performance.now();
            await Dm(a);
            var e = a.h;
            a = Cm(a, d);
            d = new ke;
            b = x(d, 1, b, 0);
            c = wb(b, 2, c);
            c = Eb(a, 9, we, c);
            Ue(e, c)
        }
    }
    var Fm = class {
        constructor(a) {
            this.s = kd() || window;
            this.h = a ? ? new jf(100, 100, !0);
            this.state = Tj(Oj(), 33, () => {
                const b = Sh(Yg);
                return {
                    sd: b,
                    ssp: 0 < b && Nc() < 1 / b,
                    pc: null,
                    wpc: null,
                    le: [],
                    lgdp: []
                }
            })
        }
        get i() {
            return this.state.ssp
        }
    };

    function Hm(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }

    function Im(a) {
        var b = J.document;
        if (b.currentScript) return Hm(b.currentScript, a);
        for (const c of b.scripts)
            if (0 === Hm(c, a)) return 0;
        return 1
    };

    function Jm(a, b) {
        return {
            [3]: {
                [55]: () => 0 === a,
                [23]: c => Il(J, Number(c)),
                [24]: c => Ll(Number(c)),
                [61]: () => E(b, 6),
                [63]: () => E(b, 6) || ".google.ch" === D(b, 8)
            },
            [4]: {
                [7]: c => {
                    try {
                        var d = window.localStorage
                    } catch (g) {
                        d = null
                    }
                    c = Number(c);
                    c = 0 !== c ? `${"google_experiment_mod"}${c}` : "google_experiment_mod";
                    a: {
                        var e = -1;
                        try {
                            d && (e = parseInt(d.getItem(c), 10))
                        } catch {
                            e = null;
                            break a
                        }
                        e = 0 <= e && 1E3 > e ? e : null
                    }
                    if (null === e) {
                        const g = Mc() ? null : Math.floor(1E3 * Nc());
                        if (e = null != g && d) a: {
                            var f = String(g);
                            try {
                                if (d) {
                                    d.setItem(c, f);
                                    e = f;
                                    break a
                                }
                            } catch {}
                            e =
                            null
                        }
                        d = e ? g : null
                    } else d = e;
                    return d ? ? void 0
                }
            },
            [5]: {
                [6]: () => D(b, 15)
            }
        }
    };

    function Km(a = n) {
        return a.ggeac || (a.ggeac = {})
    };

    function Lm() {
        var a = K(Rh).h(ph.h, ph.defaultValue);
        Yc(a, J.document)
    }

    function Mm(a, b = document) {
        return !!b.featurePolicy ? .features().includes(a)
    }

    function Nm(a, b = document) {
        return !!b.featurePolicy ? .allowedFeatures().includes(a)
    };

    function Om(a, b) {
        try {
            const d = a.split(".");
            a = n;
            let e = 0,
                f;
            for (; null != a && e < d.length; e++) f = a, a = a[d[e]], "function" === typeof a && (a = f[d[e]]());
            var c = a;
            if (typeof c === b) return c
        } catch {}
    }
    var Pm = {
        [3]: {
            [8]: a => {
                try {
                    return null != ba(a)
                } catch {}
            },
            [9]: a => {
                try {
                    var b = ba(a)
                } catch {
                    return
                }
                if (a = "function" === typeof b) b = b && b.toString && b.toString(), a = "string" === typeof b && -1 != b.indexOf("[native code]");
                return a
            },
            [10]: () => window === window.top,
            [6]: a => Ha(K(Nf).i(), Number(a)),
            [27]: a => {
                a = Om(a, "boolean");
                return void 0 !== a ? a : void 0
            },
            [60]: a => {
                try {
                    return !!n.document.querySelector(a)
                } catch {}
            },
            [69]: a => Mm(a, n.document),
            [70]: a => Nm(a, n.document)
        },
        [4]: {
            [3]: () => Uc(),
            [6]: a => {
                a = Om(a, "number");
                return void 0 !== a ? a : void 0
            }
        },
        [5]: {
            [2]: () => window.location.href,
            [3]: () => {
                try {
                    return window.top.location.hash
                } catch {
                    return ""
                }
            },
            [4]: a => {
                a = Om(a, "string");
                return void 0 !== a ? a : void 0
            }
        }
    };
    const Qm = [12, 13, 20];

    function Rm(a, b, c, d) {
        const e = K(qf).G;
        if (!be(z(b, Vd, 3), e)) return null;
        var f = A(b, tl, 2),
            g = F(b, 6);
        if (g) {
            xb(d, 1, Ce, g);
            f = e[4];
            switch (c) {
                case 2:
                    var h = f[8];
                    break;
                case 1:
                    h = f[7]
            }
            c = void 0;
            if (h) try {
                c = h(g), x(d, 3, c, 0)
            } catch (l) {}
            return (b = Sm(b, c)) ? Tm(a, [b], 1) : null
        }
        if (g = F(b, 10)) {
            xb(d, 2, Ce, g);
            h = null;
            switch (c) {
                case 1:
                    h = e[4][9];
                    break;
                case 2:
                    h = e[4][10];
                    break;
                default:
                    return null
            }
            c = h ? h(String(g)) : void 0;
            if (void 0 === c && 1 === F(b, 11)) return null;
            void 0 !== c && x(d, 3, c, 0);
            return (b = Sm(b, c)) ? Tm(a, [b], 1) : null
        }
        d = e ? Aa(f, l => be(z(l, Vd,
            3), e)) : f;
        if (!d.length) return null;
        c = d.length * B(r(b, 1), 0);
        return (b = F(b, 4)) ? Um(a, b, c, d) : Tm(a, d, c / 1E3)
    }

    function Vm(a, b, c) {
        a.Z[c] || (a.Z[c] = []);
        a = a.Z[c];
        Ha(a, b) || a.push(b)
    }

    function Wm(a, b, c) {
        const d = [],
            e = Xm(a.i, b);
        var f;
        if (f = 9 !== b) a.j[b] ? f = !0 : (a.j[b] = !0, f = !1);
        if (f) return nf(a.J, b, c, d, [], 4), d;
        if (!e.length) return nf(a.J, b, c, d, [], 3), d;
        const g = Ha(Qm, b),
            h = [];
        za(e, l => {
            var k = new Be;
            if (l = Rm(a, l, c, k)) 0 !== yb(k, Ce) && h.push(k), k = l.getId(), d.push(k), Vm(a, k, g ? 4 : c), (l = A(l, ge, 2)) && (g ? Ef(l, Gf(), a.J, k) : Ef(l, [c], a.J, k))
        });
        nf(a.J, b, c, d, h, 1);
        return d
    }

    function Ym(a, b) {
        a.i.push(...Aa(Da(b, c => new xl(c)), c => !Ha(Qm, F(c, 1))))
    }

    function Tm(a, b, c) {
        const d = a.h,
            e = Fa(b, f => !!d[f.getId()]);
        return e ? e : a.la ? null : Kc(b, c)
    }

    function Um(a, b, c, d) {
        const e = null != a.ha[b] ? a.ha[b] : 1E3;
        if (0 >= e) return null;
        d = Tm(a, d, c / e);
        a.ha[b] = d ? 0 : e - c;
        return d
    }

    function Zm(a, b) {
        L(1, c => {
            a.h[c] = !0
        }, b);
        L(2, (c, d) => Wm(a, c, d), b);
        L(3, c => (a.Z[c] || []).concat(a.Z[4]), b);
        L(12, c => void Ym(a, c), b);
        L(16, (c, d) => void Vm(a, c, d), b)
    }
    var $m = class {
        constructor() {
            this.i = [];
            this.J = null;
            this.j = {};
            this.la = !1;
            this.ha = {};
            this.Z = {};
            this.h = {}
        }
        init(a, b, c, {
            la: d = !1,
            Z: e = [],
            ha: f = {}
        } = {}) {
            this.i = a.slice();
            this.J = c;
            this.j = {};
            this.la = d;
            this.ha = f;
            this.Z = {
                [b]: [],
                [4]: []
            };
            this.h = {};
            (a = Gd()) && za(a.split(",") || [], g => {
                (g = Number(g)) && (this.h[g] = !0)
            });
            za(e, g => {
                this.h[g] = !0
            });
            return this
        }
    };

    function Xm(a, b) {
        return (a = Fa(a, c => F(c, 1) === b)) && A(a, vl, 2) || []
    }

    function Sm(a, b) {
        var c = A(a, tl, 2),
            d = c.length,
            e = B(r(a, 8), 0);
        a = d * B(r(a, 1), 0) - 1;
        b = void 0 !== b ? b : Math.floor(1E3 * Nc());
        d = (b - e) % d;
        if (b < e || b - e - d >= a) return null;
        c = c[d];
        e = K(qf).G;
        return !c || e && !be(z(c, Vd, 3), e) ? null : c
    };

    function an(a, b) {
        a.h = If(14, b, () => {})
    }
    class bn {
        constructor() {
            this.h = () => {}
        }
    }

    function cn(a) {
        K(bn).h(a)
    };

    function dn({
        fb: a,
        G: b,
        cb: c,
        Ya: d = Km(),
        Za: e = 0,
        J: f = new pf(z(a, yl, 5) ? .i() ? ? 0, z(a, yl, 5) ? .l() ? ? 0, z(a, yl, 5) ? .m() ? ? !1)
    }) {
        d.hasOwnProperty("init-done") ? (If(12, d, () => {})(Da(A(a, xl, 2), g => g.toJSON())), If(13, d, () => {})(Da(A(a, ge, 1), g => g.toJSON()), e), b && If(14, d, () => {})(b), en(e, d)) : (Zm(K($m).init(A(a, xl, 2), e, f, c), d), Jf(d), Kf(d), Lf(d), en(e, d), Ef(A(a, ge, 1), [e], f, void 0, !0), rf = rf || !(!c || !c.jb), cn(Pm), b && cn(b))
    }

    function en(a, b = Km()) {
        Mf(K(Nf), b, a);
        fn(b, a);
        an(K(bn), b);
        K(Rh).m()
    }

    function fn(a, b) {
        const c = K(Rh);
        c.i = (d, e) => If(5, a, () => !1)(d, e, b);
        c.j = (d, e) => If(6, a, () => 0)(d, e, b);
        c.l = (d, e) => If(7, a, () => "")(d, e, b);
        c.h = (d, e) => If(8, a, () => [])(d, e, b);
        c.m = () => {
            If(15, a, () => {})(b)
        }
    };

    function gn(a) {
        var b = K(Nf).l(a);
        a = Gm(K(Fm), a, b);
        Pf.ca(1085, a)
    }
    var hn = (a, b, c) => {
        var d = T(a);
        if (d.plle) en(1, Km(a));
        else {
            d.plle = !0;
            d = z(b, Al, 12);
            var e = E(b, 9);
            dn({
                fb: d,
                G: Jm(c, b),
                cb: {
                    la: e && !!a.google_disable_experiments,
                    jb: e
                },
                Ya: Km(a),
                Za: 1
            });
            if (c = D(b, 15)) c = Number(c), K(Nf).j(c);
            for (const f of tb(b, 19)) b = f, K(Nf).h(b);
            gn(12);
            gn(10);
            a = Gc(a) || a;
            tj(a.location, "google_mc_lab") && K(Nf).h(44738307);
            tj(a.location, "google_auto_storify_swipeable") && K(Nf).h(44773747);
            tj(a.location, "google_auto_storify_scrollable") && K(Nf).h(44773746);
            tj(a.location, "google_pga_monetization") && K(Nf).h(44779794)
        }
    };
    var jn = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function kn(a, b) {
        if (15 == b) {
            if (728 <= a) return 728;
            if (468 <= a) return 468
        } else if (90 == b) {
            if (200 <= a) return 200;
            if (180 <= a) return 180;
            if (160 <= a) return 160;
            if (120 <= a) return 120
        }
        return null
    };

    function ln(a) {
        return b => !!(b.ja & a)
    }
    class V extends li {
        constructor(a, b, c, d = !1) {
            super(a, b);
            this.ja = c;
            this.kb = d
        }
        qa() {
            return this.ja
        }
        i(a, b, c) {
            b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
        }
    };
    const mn = {
            image_stacked: 1 / 1.91,
            image_sidebyside: 1 / 3.82,
            mobile_banner_image_sidebyside: 1 / 3.82,
            pub_control_image_stacked: 1 / 1.91,
            pub_control_image_sidebyside: 1 / 3.82,
            pub_control_image_card_stacked: 1 / 1.91,
            pub_control_image_card_sidebyside: 1 / 3.74,
            pub_control_text: 0,
            pub_control_text_card: 0
        },
        nn = {
            image_stacked: 80,
            image_sidebyside: 0,
            mobile_banner_image_sidebyside: 0,
            pub_control_image_stacked: 80,
            pub_control_image_sidebyside: 0,
            pub_control_image_card_stacked: 85,
            pub_control_image_card_sidebyside: 0,
            pub_control_text: 80,
            pub_control_text_card: 80
        },
        on = {
            pub_control_image_stacked: 100,
            pub_control_image_sidebyside: 200,
            pub_control_image_card_stacked: 150,
            pub_control_image_card_sidebyside: 250,
            pub_control_text: 100,
            pub_control_text_card: 150
        };

    function pn(a) {
        var b = 0;
        a.V && b++;
        a.N && b++;
        a.O && b++;
        if (3 > b) return {
            P: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.V.split(",");
        const c = a.O.split(",");
        a = a.N.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            P: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (2 < b.length) return {
            P: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + `you are providing ${b.length} parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`
        };
        const d = [],
            e = [];
        for (let g = 0; g <
            b.length; g++) {
            var f = Number(c[g]);
            if (Number.isNaN(f) || 0 === f) return {
                P: `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`
            };
            d.push(f);
            f = Number(a[g]);
            if (Number.isNaN(f) || 0 === f) return {
                P: `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`
            };
            e.push(f)
        }
        return {
            O: d,
            N: e,
            Qa: b
        }
    }

    function qn(a) {
        return 1200 <= a ? {
            width: 1200,
            height: 600
        } : 850 <= a ? {
            width: a,
            height: Math.floor(.5 * a)
        } : 550 <= a ? {
            width: a,
            height: Math.floor(.6 * a)
        } : 468 <= a ? {
            width: a,
            height: Math.floor(.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        }
    };
    const rn = Ka("script");

    function sn(a, b, c) {
        null != a.ja && (c.google_responsive_formats = a.ja);
        null != a.T && (c.google_safe_for_responsive_override = a.T);
        null != a.i && (!0 === a.i ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.i));
        null != a.j && !0 !== a.j && (c.gfwrnher = a.j);
        var d = a.m || c.google_ad_width;
        null != d && (c.google_resizing_width = d);
        d = a.l || c.google_ad_height;
        null != d && (c.google_resizing_height = d);
        d = a.size().h(b);
        const e = a.size().height();
        if (!c.google_ad_resize) {
            c.google_ad_width = d;
            c.google_ad_height =
                e;
            var f = a.size();
            b = f.h(b) + "x" + f.height();
            c.google_ad_format = b;
            c.google_responsive_auto_format = a.A;
            null != a.h && (c.armr = a.h);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            !0 === a.i && (c.gfwrnh = a.size().height() + "px")
        }
        null != a.C && (c.gfwroml = a.C);
        null != a.K && (c.gfwromr = a.K);
        null != a.l && (c.gfwroh = a.l);
        null != a.m && (c.gfwrow = a.m);
        null != a.R && (c.gfwroz = a.R);
        null != a.v && (c.gml = a.v);
        null != a.B && (c.gmr = a.B);
        null != a.U && (c.gzi = a.U);
        b = Gc(window) || window;
        tj(b.location, "google_responsive_dummy_ad") &&
            (Ha([1, 2, 3, 4, 5, 6, 7, 8], a.A) || 1 === a.h) && 2 !== a.h && (a = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }), c.dash = `<${rn}>window.top.postMessage('${a}', '*'); 
          </${rn}> 
          <div id="dummyAd" style="width:${d}px;height:${e}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${d}x${e}</p> 
            <p>Rendered size:${d}x${e}</p> 
          </div>`)
    }
    class tn {
        constructor(a, b, c = null, d = null, e = null, f = null, g = null, h = null, l = null, k = null, m = null, u = null) {
            this.A = a;
            this.fa = b;
            this.ja = c;
            this.h = d;
            this.T = e;
            this.i = f;
            this.j = g;
            this.C = h;
            this.K = l;
            this.l = k;
            this.m = m;
            this.R = u;
            this.U = this.B = this.v = null
        }
        size() {
            return this.fa
        }
    };
    const un = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];
    var vn = class extends li {
            h(a) {
                return Math.min(1200, Math.max(this.M, Math.round(a)))
            }
        },
        yn = (a, b) => {
            wn(a, b);
            if ("pedestal" == b.google_content_recommendation_ui_type) return new tn(9, new vn(a, Math.floor(a * b.google_phwr)));
            var c = Ac();
            468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * mn.mobile_banner_image_sidebyside + nn.mobile_banner_image_sidebyside) + 96), a = {
                ea: a,
                da: c,
                N: 1,
                O: 12,
                V: "mobile_banner_image_sidebyside"
            }) : (a = qn(a), a = {
                ea: a.width,
                da: a.height,
                N: 1,
                O: 13,
                V: "image_sidebyside"
            }) : (a = qn(a), a = {
                ea: a.width,
                da: a.height,
                N: 4,
                O: 2,
                V: "image_stacked"
            });
            xn(b, a);
            return new tn(9, new vn(a.ea, a.da))
        },
        zn = (a, b) => {
            wn(a, b);
            var c = pn({
                O: b.google_content_recommendation_rows_num,
                N: b.google_content_recommendation_columns_num,
                V: b.google_content_recommendation_ui_type
            });
            if (c.P) a = {
                ea: 0,
                da: 0,
                N: 0,
                O: 0,
                V: "image_stacked",
                P: c.P
            };
            else {
                var d = 2 === c.Qa.length && 468 <= a ? 1 : 0;
                var e = c.Qa[d];
                e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
                var f = on[e];
                let g = c.N[d];
                for (; a / g < f && 1 < g;) g--;
                f = g;
                d = c.O[d];
                c = Math.floor(((a - 8 * f - 8) / f * mn[e] + nn[e]) *
                    d + 8 * d + 8);
                a = 1500 < a ? {
                    width: 0,
                    height: 0,
                    vb: "Calculated slot width is too large: " + a
                } : 1500 < c ? {
                    width: 0,
                    height: 0,
                    vb: "Calculated slot height is too large: " + c
                } : {
                    width: a,
                    height: c
                };
                a = {
                    ea: a.width,
                    da: a.height,
                    N: f,
                    O: d,
                    V: e
                }
            }
            if (a.P) throw new Q(a.P);
            xn(b, a);
            return new tn(9, new vn(a.ea, a.da))
        };

    function wn(a, b) {
        if (0 >= a) throw new Q("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function xn(a, b) {
        a.google_content_recommendation_ui_type = b.V;
        a.google_content_recommendation_columns_num = b.N;
        a.google_content_recommendation_rows_num = b.O
    };
    class An extends li {
        h() {
            return this.M
        }
        i(a, b, c) {
            ki(a, c);
            b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
        }
    };
    const Bn = {
        "image-top": a => 600 >= a ? 284 + .414 * (a - 250) : 429,
        "image-middle": a => 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500),
        "image-side": a => 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500),
        "text-only": a => 500 >= a ? 187 - .228 * (a - 250) : 130,
        "in-article": a => 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
    };
    var Cn = class extends li {
            h() {
                return Math.min(1200, this.M)
            }
        },
        Dn = (a, b, c, d, e) => {
            var f = e.google_ad_layout || "image-top";
            if ("in-article" == f) {
                var g = a;
                if ("false" == e.google_full_width_responsive) a = g;
                else if (a = fi(b, c, g, .2, e), !0 !== a) e.gfwrnwer = a, a = g;
                else if (a = N(b).clientWidth)
                    if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                        b: {
                            g = c;
                            for (let h = 0; 100 > h && g.parentElement; ++h) {
                                const l = g.parentElement.childNodes;
                                for (let k = 0; k < l.length; ++k) {
                                    const m = l[k];
                                    if (m != g && ii(b, m)) break b
                                }
                                g = g.parentElement;
                                g.style.width =
                                    "100%";
                                g.style.height = "auto"
                            }
                        }
                        ki(b, c)
                    }
                else a = g;
                else a = g
            }
            if (250 > a) throw new Q("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
            a = Math.min(1200, Math.floor(a));
            if (d && "in-article" != f) {
                f = Math.ceil(d);
                if (50 > f) throw new Q("Fluid responsive ads must be at least 50px tall: height=" + f);
                return new tn(11, new li(a, f))
            }
            if ("in-article" != f && (d = e.google_ad_layout_key)) {
                f = "" + d;
                c = Math.pow(10, 3);
                if (e = (d = f.match(/([+-][0-9a-z]+)/g)) && d.length)
                    for (b = [], g = 0; g < e; g++) b.push(parseInt(d[g], 36) / c);
                else b =
                    null;
                if (!b) throw new Q("Invalid data-ad-layout-key value: " + f);
                f = (a + -725) / 1E3;
                c = 0;
                d = 1;
                e = b.length;
                for (g = 0; g < e; g++) c += b[g] * d, d *= f;
                f = Math.ceil(1E3 * c - -725 + 10);
                if (isNaN(f)) throw new Q("Invalid height: height=" + f);
                if (50 > f) throw new Q("Fluid responsive ads must be at least 50px tall: height=" + f);
                if (1200 < f) throw new Q("Fluid responsive ads must be at most 1200px tall: height=" + f);
                return new tn(11, new li(a, f))
            }
            d = Bn[f];
            if (!d) throw new Q("Invalid data-ad-layout value: " + f);
            c = oi(c, b);
            b = N(b).clientWidth;
            b = "in-article" !==
                f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
            return new tn(11, "in-article" == f ? new Cn(a, b) : new li(a, b))
        };
    var En = a => b => {
            for (let c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        },
        Gn = (a, b) => {
            var c = Fn.slice(0);
            const d = c.length;
            let e = null;
            for (let f = 0; f < d; ++f) {
                const g = c[f];
                if (a(g)) {
                    if (!b || b(g)) return g;
                    null === e && (e = g)
                }
            }
            return e
        };
    var W = [new V(970, 90, 2), new V(728, 90, 2), new V(468, 60, 2), new V(336, 280, 1), new V(320, 100, 2), new V(320, 50, 2), new V(300, 600, 4), new V(300, 250, 1), new V(250, 250, 1), new V(234, 60, 2), new V(200, 200, 1), new V(180, 150, 1), new V(160, 600, 4), new V(125, 125, 1), new V(120, 600, 4), new V(120, 240, 4), new V(120, 120, 1, !0)],
        Fn = [W[6], W[12], W[3], W[0], W[7], W[14], W[1], W[8], W[10], W[4], W[15], W[2], W[11], W[5], W[13], W[9], W[16]];
    var In = (a, b, c, d, e) => {
            "false" == e.google_full_width_responsive ? c = {
                D: a,
                F: 1
            } : "autorelaxed" == b && e.google_full_width_responsive || Hn(b) || e.google_ad_resize ? (b = gi(a, c, d, e), c = !0 !== b ? {
                D: a,
                F: b
            } : {
                D: N(c).clientWidth || a,
                F: !0
            }) : c = {
                D: a,
                F: 2
            };
            const {
                D: f,
                F: g
            } = c;
            return !0 !== g ? {
                D: a,
                F: g
            } : d.parentElement ? {
                D: f,
                F: g
            } : {
                D: a,
                F: g
            }
        },
        Ln = (a, b, c, d, e) => {
            const {
                D: f,
                F: g
            } = Ij(247, () => In(a, b, c, d, e));
            var h = !0 === g;
            const l = I(d.style.width),
                k = I(d.style.height),
                {
                    ba: m,
                    Y: u,
                    qa: v,
                    Pa: y
                } = Jn(f, b, c, d, e, h);
            h = Kn(b, v);
            var w;
            const C = (w = mi(d, c, "marginLeft",
                    I)) ? w + "px" : "",
                Ba = (w = mi(d, c, "marginRight", I)) ? w + "px" : "";
            w = mi(d, c, "zIndex") || "";
            return new tn(h, m, v, null, y, g, u, C, Ba, k, l, w)
        },
        Hn = a => "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a),
        Jn = (a, b, c, d, e, f) => {
            b = "auto" == b ? .25 >= a / Math.min(1200, N(c).clientWidth) ? 4 : 3 : ei(b);
            let g;
            var h = !1;
            let l = !1;
            var k = 488 > N(c).clientWidth;
            if (k) {
                g = $h(d, c);
                var m = oi(d, c);
                h = !m && g;
                l = m && g
            }
            m = [ni(a), ln(b)];
            m.push(qi(k, c, d, l));
            null != e.google_max_responsive_height && m.push(ri(e.google_max_responsive_height));
            k = [w => !w.kb];
            if (h || l) h = si(c, d), k.push(ri(h));
            let u = Gn(En(m), En(k));
            if (!u) throw new Q("No slot size for availableWidth=" + a);
            const {
                ba: v,
                Y: y
            } = Ij(248, () => {
                var w;
                a: if (f) {
                    if (e.gfwrnh && (w = I(e.gfwrnh))) {
                        w = {
                            ba: new An(a, w),
                            Y: !0
                        };
                        break a
                    }
                    w = a / 1.2;
                    var C = Math;
                    var Ba = C.min;
                    if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var U = Infinity;
                    else {
                        U = d;
                        let ta = Infinity;
                        do {
                            var Ca = mi(U, c, "height", I);
                            Ca && (ta = Math.min(ta, Ca));
                            (Ca = mi(U, c, "maxHeight", I)) && (ta = Math.min(ta, Ca))
                        } while ((U = U.parentElement) && "HTML" != U.tagName);
                        U = ta
                    }
                    C = Ba.call(C, w, U);
                    if (C < .5 * w || 100 > C) C = w;
                    w = {
                        ba: new An(a, Math.floor(C)),
                        Y: C < w ? 102 : !0
                    }
                } else w = {
                    ba: u,
                    Y: 100
                };
                return w
            });
            return "in-article" === e.google_ad_layout && c.location && "#hffwroe2etoq" == c.location.hash ? {
                ba: Mn(a, c, d, v, e),
                Y: !1,
                qa: b,
                Pa: g
            } : {
                ba: v,
                Y: y,
                qa: b,
                Pa: g
            }
        };
    const Kn = (a, b) => {
            if ("auto" == a) return 1;
            switch (b) {
                case 2:
                    return 2;
                case 1:
                    return 3;
                case 4:
                    return 4;
                case 3:
                    return 5;
                case 6:
                    return 6;
                case 5:
                    return 7;
                case 7:
                    return 8
            }
            throw Error("bad mask");
        },
        Mn = (a, b, c, d, e) => {
            const f = e.google_ad_height || mi(c, b, "height", I);
            b = Dn(a, b, c, f, e).size();
            return b.M * b.height() > a * d.height() ? new V(b.M, b.height(), 1) : d
        };
    var Nn = (a, b, c, d, e) => {
        var f;
        (f = N(b).clientWidth) ? 488 > N(b).clientWidth ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, ki(b, c), f = {
            D: f,
            F: !0
        }) : f = {
            D: a,
            F: 5
        } : f = {
            D: a,
            F: 4
        }: f = {
            D: a,
            F: 10
        };
        const {
            D: g,
            F: h
        } = f;
        if (!0 !== h || a == g) return new tn(12, new li(a, d), null, null, !0, h, 100);
        const {
            ba: l,
            Y: k,
            qa: m
        } = Jn(g, "auto", b, c, e, !0);
        return new tn(1, l, m, 2, !0, h, k)
    };
    var Pn = (a, b) => {
            const c = b.google_ad_format;
            if ("autorelaxed" == c) {
                a: {
                    if ("pedestal" != b.google_content_recommendation_ui_type)
                        for (const d of un)
                            if (null != b[d]) {
                                a = !0;
                                break a
                            }
                    a = !1
                }
                return a ? 9 : 5
            }
            if (Hn(c)) return 1;
            if ("link" === c) return 4;
            if ("fluid" == c) return "in-article" !== b.google_ad_layout || !a.location || "#hffwroe2etop" != a.location.hash && "#hffwroe2etoq" != a.location.hash ? 8 : (On(b), 1);
            if (27 === b.google_reactive_ad_format) return On(b), 1
        },
        Rn = (a, b, c, d, e = !1) => {
            e = b.offsetWidth || (c.google_ad_resize || e) && mi(b, d, "width",
                I) || c.google_ad_width || 0;
            4 === a && (c.google_ad_format = "auto", a = 1);
            var f = (f = Qn(a, e, b, c, d)) ? f : Ln(e, c.google_ad_format, d, b, c);
            f.size().i(d, c, b);
            sn(f, e, c);
            1 != a && (a = f.size().height(), b.style.height = a + "px")
        };
    const Qn = (a, b, c, d, e) => {
            const f = d.google_ad_height || mi(c, e, "height", I);
            switch (a) {
                case 5:
                    const {
                        D: g,
                        F: h
                    } = Ij(247, () => In(b, d.google_ad_format, e, c, d));
                    !0 === h && b != g && ki(e, c);
                    !0 === h ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = h);
                    return yn(g, d);
                case 9:
                    return zn(b, d);
                case 8:
                    return Dn(b, e, c, f, d);
                case 10:
                    return Nn(b, e, c, f, d)
            }
        },
        On = a => {
            a.google_ad_format = "auto";
            a.armr = 3
        };

    function Sn(a, b) {
        var c = Gc(b);
        if (c) {
            c = N(c).clientWidth;
            const d = Jc(a, b) || {},
                e = d.direction;
            if ("0px" === d.width && "none" !== d.cssFloat) return -1;
            if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };

    function Tn(a) {
        R.wa(b => {
            b.shv = String(a);
            b.mjsv = "m202302090101";
            const c = K(Nf).i(),
                d = T(n);
            d.eids || (d.eids = []);
            b.eid = c.concat(d.eids).join(",")
        })
    }

    function Un(a) {
        Tn(D(a, 2));
        a = E(a, 6);
        Vb(El, Td);
        El = a
    };

    function Vn({
        bb: a,
        sb: b
    }) {
        return a || ("dev" === b ? "dev" : "")
    };

    function Wn(a) {
        var b = R;
        try {
            return Vb(a, Sd), new Dl(JSON.parse(a))
        } catch (c) {
            b.I(838, c instanceof Error ? c : Error(String(c)), void 0, d => {
                d.jspb = String(a)
            })
        }
        return new Dl
    };

    function Xn(a, b) {
        return null == b ? `&${a}=null` : `&${a}=${Math.floor(b)}`
    }

    function Yn(a, b) {
        return `&${a}=${b.toFixed(3)}`
    }

    function Zn() {
        const a = new Set,
            b = vj();
        try {
            if (!b) return a;
            const c = b.pubads();
            for (const d of c.getSlots()) a.add(d.getSlotId().getDomId())
        } catch (c) {}
        return a
    }

    function $n(a) {
        a = a.id;
        return null != a && (Zn().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"))
    }

    function ao(a, b, c) {
        if (!a.sources) return !1;
        switch (bo(a)) {
            case 2:
                const d = co(a);
                if (d) return c.some(f => eo(d, f));
            case 1:
                const e = fo(a);
                if (e) return b.some(f => eo(e, f))
        }
        return !1
    }

    function bo(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(b => b.previousRect && b.currentRect);
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function fo(a) {
        return go(a, b => b.currentRect)
    }

    function co(a) {
        return go(a, b => b.previousRect)
    }

    function go(a, b) {
        return a.sources.reduce((c, d) => {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function eo(a, b) {
        const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }

    function ho() {
        const a = [...document.getElementsByTagName("iframe")].filter($n),
            b = [...Zn()].map(c => document.getElementById(c)).filter(c => null !== c);
        io = window.scrollX;
        jo = window.scrollY;
        return ko = [...a, ...b].map(c => c.getBoundingClientRect())
    }

    function lo() {
        var a = new mo;
        if (P(qh)) {
            var b = window;
            if (!b.google_plmetrics && window.PerformanceObserver) {
                b.google_plmetrics = !0;
                b = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                for (const c of b) a.J().observe({
                    type: c,
                    buffered: !0
                });
                no(a)
            }
        }
    }

    function no(a) {
        const b = zi(641, () => {
                var d = document;
                2 == (d.prerendering ? 3 : {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && oo(a)
            }),
            c = zi(641, () => void oo(a));
        document.addEventListener("visibilitychange", b);
        document.addEventListener("pagehide", c);
        a.ya = () => {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("pagehide", c);
            a.J().disconnect()
        }
    }

    function oo(a) {
        if (!a.Fa) {
            a.Fa = !0;
            a.J().takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += Yn("cls", a.B), b += Yn("mls", a.K), b += Xn("nls", a.R), window.LayoutShiftAttribution && (b += Yn("cas", a.m), b += Xn("nas", a.Ea)), b += Yn("wls", a.fa), b += Yn("tls", a.Ia), window.LayoutShiftAttribution && (b += Yn("was", a.Ja)));
            window.LargestContentfulPaint && (b += Xn("lcp", a.Ca), b += Xn("lcps", a.Ba));
            window.PerformanceEventTiming && a.Aa && (b += Xn("fid", a.za));
            window.PerformanceLongTaskTiming &&
                (b += Xn("cbt", a.v), b += Xn("mbt", a.C), b += Xn("nlt", a.T));
            let d = 0;
            for (var c of document.getElementsByTagName("iframe")) $n(c) && d++;
            b += Xn("nif", d);
            b += Xn("ifi", od(window));
            c = K(Nf).i();
            b += `&${"eid"}=${encodeURIComponent(c.join())}`;
            b += `&${"top"}=${n===n.top?1:0}`;
            b += a.Ha ? `&${"qqid"}=${encodeURIComponent(a.Ha)}` : Xn("pvsid", Zc(n));
            window.googletag && (b += "&gpt=1");
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            Ye(a)
        }
    }
    class mo extends Xe {
        constructor() {
            super();
            this.l = this.i = this.R = this.K = this.B = 0;
            this.Ga = this.Da = Number.NEGATIVE_INFINITY;
            this.za = this.Ba = this.Ca = this.Ea = this.Ja = this.m = this.Ia = this.fa = 0;
            this.Aa = !1;
            this.T = this.C = this.v = 0;
            const a = document.querySelector("[data-google-query-id]");
            this.Ha = a ? a.getAttribute("data-google-query-id") : null;
            this.U = null;
            this.Fa = !1;
            this.ya = () => {}
        }
        J() {
            this.U || (this.U = new PerformanceObserver(zi(640, a => {
                const b = io !== window.scrollX || jo !== window.scrollY ? [] : ko,
                    c = ho();
                for (const f of a.getEntries()) switch (f.entryType) {
                    case "layout-shift":
                        a =
                            f;
                        var d = b,
                            e = c;
                        if (!a.hadRecentInput) {
                            this.B += Number(a.value);
                            Number(a.value) > this.K && (this.K = Number(a.value));
                            this.R += 1;
                            if (d = ao(a, d, e)) this.m += a.value, this.Ea++;
                            if (5E3 < a.startTime - this.Da || 1E3 < a.startTime - this.Ga) this.Da = a.startTime, this.l = this.i = 0;
                            this.Ga = a.startTime;
                            this.i += a.value;
                            d && (this.l += a.value);
                            this.i > this.fa && (this.fa = this.i, this.Ja = this.l, this.Ia = a.startTime + a.duration)
                        }
                        break;
                    case "largest-contentful-paint":
                        a = f;
                        this.Ca = Math.floor(a.renderTime || a.loadTime);
                        this.Ba = a.size;
                        break;
                    case "first-input":
                        a =
                            f;
                        this.za = Number((a.processingStart - a.startTime).toFixed(3));
                        this.Aa = !0;
                        break;
                    case "longtask":
                        a = Math.max(0, f.duration - 50), this.v += a, this.C = Math.max(this.C, a), this.T += 1
                }
            })));
            return this.U
        }
        h() {
            super.h();
            this.ya()
        }
    }
    var io = void 0,
        jo = void 0,
        ko = [];
    var X = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r"
        },
        Y = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s"
        };

    function po() {
        const a = window.navigator.userAgent,
            b = /Chrome/.test(a);
        return /Android/.test(a) && b
    }

    function qo(a = window) {
        return !a.PeriodicSyncManager
    }

    function ro() {
        var a = window.document;
        const b = K(Rh).h(Ph.h, Ph.defaultValue);
        Yc(b, a)
    }

    function so(a, b) {
        return a || ".google.ch" === b || "function" === typeof J.__tcfapi
    }

    function Z(a, b, c) {
        if (a = window.goog_tt_state_map ? .get(a)) a.state = b, void 0 != c && (a.hasRedemptionRecord = c)
    }

    function to() {
        const a = `${X.issuerOrigin}${X.redemptionPath}`,
            b = {
                keepalive: !0,
                trustToken: {
                    type: "token-redemption",
                    issuer: X.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        Z(X.issuerOrigin, 2);
        return window.fetch(a, b).then(c => {
            if (!c.ok) throw Error(`${c.status}: Network response was not ok!`);
            Z(X.issuerOrigin, 6, !0)
        }).catch(c => {
            c && "NoModificationAllowedError" === c.name ? Z(X.issuerOrigin, 6, !0) : Z(X.issuerOrigin, 5)
        })
    }

    function uo() {
        const a = `${X.issuerOrigin}${X.issuancePath}`;
        Z(X.issuerOrigin, 8);
        return window.fetch(a, {
            keepalive: !0,
            trustToken: {
                type: "token-request"
            }
        }).then(b => {
            if (!b.ok) throw Error(`${b.status}: Network response was not ok!`);
            Z(X.issuerOrigin, 10);
            return to()
        }).catch(b => {
            if (b && "NoModificationAllowedError" === b.name) return Z(X.issuerOrigin, 10), to();
            Z(X.issuerOrigin, 9)
        })
    }

    function vo() {
        Z(X.issuerOrigin, 13);
        return document.hasTrustToken(X.issuerOrigin).then(a => a ? to() : uo())
    }

    function wo() {
        Z(Y.issuerOrigin, 13);
        if (window.Promise) {
            var a = document.hasTrustToken(Y.issuerOrigin).then(e => e).catch(e => window.Promise.reject({
                state: 19,
                error: e
            }));
            const b = `${Y.issuerOrigin}${Y.redemptionPath}`,
                c = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "none"
                    }
                };
            Z(Y.issuerOrigin, 16);
            a = a.then(e => window.fetch(b, c).then(f => {
                if (!f.ok) throw Error(`${f.status}: Network response was not ok!`);
                Z(Y.issuerOrigin, 18, !0)
            }).catch(f => {
                if (f && "NoModificationAllowedError" === f.name) Z(Y.issuerOrigin,
                    18, !0);
                else {
                    if (e) return window.Promise.reject({
                        state: 17,
                        error: f
                    });
                    Z(Y.issuerOrigin, 17)
                }
            })).then(() => document.hasTrustToken(Y.issuerOrigin).then(e => e).catch(e => window.Promise.reject({
                state: 19,
                error: e
            }))).then(e => {
                const f = `${Y.issuerOrigin}${Y.getStatePath}`;
                Z(Y.issuerOrigin, 20);
                return window.fetch(`${f}?ht=${e}`, {
                    trustToken: {
                        type: "send-redemption-record",
                        issuers: [Y.issuerOrigin]
                    }
                }).then(g => {
                    if (!g.ok) throw Error(`${g.status}: Network response was not ok!`);
                    Z(Y.issuerOrigin, 22);
                    return g.text().then(h =>
                        JSON.parse(h))
                }).catch(g => window.Promise.reject({
                    state: 21,
                    error: g
                }))
            });
            const d = Zc(window);
            return a.then(e => {
                const f = `${Y.issuerOrigin}${Y.issuancePath}`;
                return e && e.srqt && e.cs ? (Z(Y.issuerOrigin, 23), window.fetch(`${f}?cs=${e.cs}&correlator=${d}`, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-request"
                    }
                }).then(g => {
                    if (!g.ok) throw Error(`${g.status}: Network response was not ok!`);
                    Z(Y.issuerOrigin, 25);
                    return e
                }).catch(g => window.Promise.reject({
                    state: 24,
                    error: g
                }))) : e
            }).then(e => {
                if (e && e.srdt && e.cs) return Z(Y.issuerOrigin,
                    26), window.fetch(`${b}?cs=${e.cs}&correlator=${d}`, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "refresh"
                    }
                }).then(f => {
                    if (!f.ok) throw Error(`${f.status}: Network response was not ok!`);
                    Z(Y.issuerOrigin, 28, !0)
                }).catch(f => window.Promise.reject({
                    state: 27,
                    error: f
                }))
            }).then(() => {
                Z(Y.issuerOrigin, 29)
            }).catch(e => {
                if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                    if ("number" === typeof e.state && e.error instanceof Error) {
                        Z(Y.issuerOrigin, e.state);
                        const f = Sh(Oh);
                        Math.random() <=
                            f && fd({
                                state: e.state,
                                err: e.error.toString()
                            }, "dtt_err")
                    } else throw Error(e);
                else throw e;
            })
        }
    }

    function xo(a) {
        if (document.hasTrustToken && !P(Mh)) {
            var b = window.goog_tt_promise_map;
            if (b && b instanceof Map) {
                var c = [];
                if (a.i.some(d => d.issuerOrigin === X.issuerOrigin)) {
                    let d = b.get(X.issuerOrigin);
                    d || (d = vo(), b.set(X.issuerOrigin, d));
                    c.push(d)
                }
                a.i.some(d => d.issuerOrigin === Y.issuerOrigin) && (a = b.get(Y.issuerOrigin), a || (a = wo(), b.set(Y.issuerOrigin, a)), c.push(a));
                if (0 < c.length && window.Promise && window.Promise.all) return window.Promise.all(c)
            }
        }
    }
    var yo = class extends Xe {
        constructor(a, b) {
            super();
            this.i = [];
            a && po() && this.i.push(X);
            b && this.i.push(Y);
            if (document.hasTrustToken && !P(Mh)) {
                const c = new Map;
                this.i.forEach(d => {
                    c.set(d.issuerOrigin, {
                        issuerOrigin: d.issuerOrigin,
                        state: 1,
                        hasRedemptionRecord: !1
                    })
                });
                window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof Map ? new Map([...c, ...window.goog_tt_state_map]) : c;
                window.goog_tt_promise_map && window.goog_tt_promise_map instanceof Map || (window.goog_tt_promise_map = new Map)
            }
        }
    };
    var zo = class extends G {
        constructor() {
            super()
        }
        getVersion() {
            return D(this, 2)
        }
    };

    function Ao(a, b) {
        return t(a, 2, b)
    }

    function Bo(a, b) {
        return t(a, 3, b)
    }

    function Co(a, b) {
        return t(a, 4, b)
    }

    function Do(a, b) {
        return t(a, 5, b)
    }

    function Eo(a, b) {
        return t(a, 9, b)
    }

    function Fo(a, b) {
        return Fb(a, 10, b)
    }

    function Go(a, b) {
        return t(a, 11, b)
    }

    function Ho(a, b) {
        return t(a, 1, b)
    }

    function Io(a, b) {
        return t(a, 7, b)
    }
    var Ko = class extends G {
            constructor() {
                super(void 0, -1, Jo)
            }
        },
        Jo = [10, 6];
    const Lo = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Mo() {
        if ("function" !== typeof J.navigator ? .userAgentData ? .getHighEntropyValues) return null;
        const a = J.google_tag_data ? ? (J.google_tag_data = {});
        if (a.uach_promise) return a.uach_promise;
        const b = J.navigator.userAgentData.getHighEntropyValues(Lo).then(c => {
            a.uach ? ? (a.uach = c);
            return c
        });
        return a.uach_promise = b
    }

    function No(a) {
        return Go(Fo(Do(Ao(Ho(Co(Io(Eo(Bo(new Ko, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), a.fullVersionList ? .map(b => {
            var c = new zo;
            c = t(c, 1, b.brand);
            return t(c, 2, b.version)
        }) || []), a.wow64 || !1)
    }

    function Oo() {
        return Mo() ? .then(a => No(a)) ? ? null
    };

    function Po(a, b) {
        b.google_ad_host || (a = Wl(a)) && (b.google_ad_host = a)
    }

    function Qo(a, b, c = "") {
        J.google_sa_impl && !J.document.getElementById("google_shimpl") && (delete J.google_sa_queue, delete J.google_sa_impl);
        J.google_sa_queue || (J.google_sa_queue = [], J.google_process_slots = Jj(215, () => Ro(J.google_sa_queue)), a = So(c, a, b), Hc(J.document, a).id = "google_shimpl")
    }

    function Ro(a) {
        const b = a.shift();
        "function" === typeof b && R.ia(216, b);
        a.length && n.setTimeout(Jj(215, () => Ro(a)), 0)
    }

    function To(a, b, c) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
    }

    function So(a, b, c) {
        b = E(c, 4) ? b.tb : b.ub;
        const d = {};
        a: {
            if (E(c, 4)) {
                if (a = a || ym(J)) {
                    a = {
                        client: a,
                        plah: J.location.host
                    };
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            a = {}
        }
        Uo(a, d);
        Uo(Th() ? {
            bust: Th()
        } : {}, d);
        return sc(b, d)
    }

    function Uo(a, b) {
        H(a, (c, d) => {
            void 0 === b[d] && (b[d] = c)
        })
    }

    function Vo(a) {
        a: {
            var b = [n.top];
            var c = [];
            let e = 0,
                f;
            for (; f = b[e++];) {
                c.push(f);
                try {
                    if (f.frames)
                        for (let g = 0; g < f.frames.length && 1024 > b.length; ++g) b.push(f.frames[g])
                } catch {}
            }
            b = c;
            for (c = 0; c < b.length; c++) try {
                var d = b[c].frames.google_esf;
                if (d) {
                    gd = d;
                    break a
                }
            } catch (g) {}
            gd = null
        }
        if (gd) return null;d = Ic("IFRAME");d.id = "google_esf";d.name = "google_esf";d.src = uc(a.Ab).toString();d.style.display = "none";
        return d
    }

    function Wo(a, b, c, d) {
        Xo(a, b, c, d, (e, f) => {
            e = e.document;
            for (var g = void 0, h = 0; !g || e.getElementById(g + "_host");) g = "aswift_" + h++;
            e = g;
            g = Number(f.google_ad_width || 0);
            f = Number(f.google_ad_height || 0);
            h = Ic("DIV");
            h.id = e + "_host";
            const l = h.style;
            l.border = "none";
            l.height = `${f}px`;
            l.width = `${g}px`;
            l.margin = "0px";
            l.padding = "0px";
            l.position = "relative";
            l.visibility = "visible";
            l.backgroundColor = "transparent";
            h.style.display = "inline-block";
            c.appendChild(h);
            return {
                gb: e,
                zb: h
            }
        })
    }

    function Xo(a, b, c, d, e) {
        const f = e(a, b);
        e = f.gb;
        Yo(a, c, b);
        c = oa;
        const g = (new Date).getTime();
        b.google_lrv = D(d, 2);
        b.google_async_iframe_id = e;
        b.google_start_time = c;
        b.google_bpp = g > c ? g - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[e] = b;
        d = a.document.getElementById(e + "_host") ? h => h() : h => window.setTimeout(h, 0);
        To(a, () => {
            ({
                zb: h
            } = f);
            if (!h || !h.isConnected) {
                var h = a.document.getElementById(String(b.google_async_iframe_id) + "_host");
                if (null == h) throw Error("no_div");
            }
            h = P(jh) ? {
                pubWin: a,
                vars: b,
                innerInsElement: h
            } : {
                pubWin: a,
                vars: b,
                outerInsElement: h,
                innerInsElement: h
            };
            (h = a.google_sa_impl(h)) && R.ca(911, h)
        }, d)
    }

    function Yo(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || "html" !== d && null != d || (e = f + "x" + g);
        d = !c.google_ad_slot || c.google_override_format || !jn[c.google_ad_width + "x" + c.google_ad_height] && "aa" === c.google_loader_used;
        e && d ? e = e.toLowerCase() : e = "";
        c.google_ad_format = e;
        if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
            e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width,
                c.google_orig_ad_height || c.google_ad_height
            ];
            d = [];
            f = 0;
            for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = Oc(e.join(":")).toString();
            e = [];
            for (d = 0; b && 25 > d; ++d) {
                f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "";
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        const h = b.parentElement.childNodes;
                        let l = 0;
                        for (let k = 0; k < h.length; ++k) {
                            const m = h[k];
                            if (m.nodeName && m.nodeName.toString().toLowerCase() === g) {
                                if (b === m) {
                                    g = "." + l;
                                    break a
                                }++l
                            }
                        }
                    }
                    g =
                    ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            b = e.join() + ":";
            e = [];
            if (a) try {
                let h = a.parent;
                for (d = 0; h && h !== a && 25 > d; ++d) {
                    const l = h.frames;
                    for (f = 0; f < l.length; ++f)
                        if (a === l[f]) {
                            e.push(f);
                            break
                        }
                    a = h;
                    h = a.parent
                }
            } catch (h) {}
            c.google_ad_dom_fingerprint = Oc(b + e.join()).toString()
        }
    }

    function Zo() {
        var a = Gc(n);
        a && (a = vg(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = {
            debugCard: null,
            debugCardRequested: !1
        }))
    }

    function $o(a) {
        ro();
        so(Fl(), D(a, 8)) || Jj(779, () => {
            var b = P(qo(window) ? Lh : Kh);
            const c = P(Nh);
            b = new yo(b, c);
            0 < Sh(Qh) ? J.google_trust_token_operation_promise = xo(b) : xo(b)
        })();
        a = Oo();
        null != a && a.then(b => {
            a: {
                jb = !0;
                try {
                    var c = JSON.stringify(b.toJSON(), Sb);
                    break a
                } finally {
                    jb = !1
                }
                c = void 0
            }
            J.google_user_agent_client_hint = c
        });
        Lm()
    };

    function ap(a, b) {
        switch (a) {
            case "google_reactive_ad_format":
                return a = parseInt(b, 10), isNaN(a) ? 0 : a;
            case "google_allow_expandable_ads":
                return /^true$/.test(b);
            default:
                return b
        }
    }

    function bp(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || "",
                d = Ec(c, "client");
            d && (b.google_ad_client = ap("google_ad_client", d));
            (c = Ec(c, "host")) && (b.google_ad_host = ap("google_ad_host", c))
        }
        a = a.attributes;
        c = a.length;
        for (d = 0; d < c; d++) {
            var e = a[d];
            if (/data-/.test(e.name)) {
                const f = pa(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                b.hasOwnProperty(f) || (e = ap(f, e.value), null !== e && (b[f] = e))
            }
        }
    }

    function cp(a) {
        if (a = jd(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function dp(a, b, c, d) {
        bp(a, b);
        if (c.document && c.document.body && !Pn(c, b) && !b.google_reactive_ad_format) {
            var e = parseInt(a.style.width, 10),
                f = Sn(a, c);
            if (0 < f && e > f) {
                var g = parseInt(a.style.height, 10);
                e = !!jn[e + "x" + g];
                var h = f;
                if (e) {
                    const l = kn(f, g);
                    if (l) h = l, b.google_ad_format = l + "x" + g + "_0ads_al";
                    else throw new Q("No slot size for availableWidth=" + f);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = h;
                e || (b.google_ad_format = null, b.google_override_format = !0);
                f = h;
                a.style.width = `${f}px`;
                g = Ln(f, "auto", c, a, b);
                h = f;
                g.size().i(c,
                    b, a);
                sn(g, h, b);
                g = g.size();
                b.google_responsive_formats = null;
                g.M > f && !e && (b.google_ad_width = g.M, a.style.width = `${g.M}px`)
            }
        }(e = a.offsetWidth) || (e = mi(a, c, "width", I));
        e = e || b.google_ad_width || 0;
        if (488 > N(c).clientWidth) {
            f = Gc(c) || c;
            g = b.google_ad_client;
            if (d = tj(f.location, "google_responsive_slot_preview") || P(ih) || Il(f, 1, g, d)) b: if (b.google_reactive_ad_format || b.google_ad_resize || Pn(c, b) || bi(a, b)) d = !1;
                else {
                    for (d = a; d; d = d.parentElement) {
                        f = Jc(d, c);
                        if (!f) {
                            b.gfwrnwer = 18;
                            d = !1;
                            break b
                        }
                        if (!Ha(["static", "relative"], f.position)) {
                            b.gfwrnwer =
                                17;
                            d = !1;
                            break b
                        }
                    }
                    d = fi(c, a, e, .3, b);
                    !0 !== d ? (b.gfwrnwer = d, d = !1) : d = c === c.top ? !0 : !1
                }
            d ? (b.google_resizing_allowed = !0, b.ovlp = !0, b.google_ad_format = "auto", b.iaaso = !0, b.armr = 1, d = !0) : d = !1
        } else d = !1;
        if (e = Pn(c, b)) Rn(e, a, b, c, d);
        else {
            if (bi(a, b)) {
                if (d = Jc(a, c)) a.style.width = d.width, a.style.height = d.height, ai(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = cp(c)
            } else ai(a.style, b);
            c.location &&
                "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? Rn(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = gi(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };

    function ep(a) {
        if (a.i) return a.i;
        a.C && a.C(a.l) ? a.i = a.l : a.i = Tc(a.l, a.K);
        return a.i ? ? null
    }
    var fp = class extends Xe {
        constructor(a, b, c) {
            super();
            this.K = a;
            this.C = b;
            this.R = c;
            this.B = new Map;
            this.v = new Map;
            this.U = new Map;
            this.T = new Map;
            this.m = void 0;
            this.l = J
        }
        h() {
            delete this.i;
            this.B.clear();
            this.v.clear();
            this.U.clear();
            this.T.clear();
            this.m && (hc(this.l, "message", this.m), delete this.m);
            delete this.l;
            delete this.R;
            super.h()
        }
    };
    const gp = (a, b) => {
            (0, a.__uspapi)("getUSPData", 1, (c, d) => {
                b.callback({
                    consentData: c ? ? void 0,
                    eb: d ? void 0 : 2
                })
            })
        },
        hp = {
            lb: a => a.callback,
            mb: (a, b) => ({
                __uspapiCall: {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }
            }),
            ob: (a, b) => {
                b = b.__uspapiReturn;
                a({
                    consentData: b.returnValue ? ? void 0,
                    eb: b.success ? void 0 : 2
                })
            }
        };

    function ip(a) {
        let b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            qb: b.__uspapiReturn.callId
        }
    }
    var jp = class extends Xe {
        constructor() {
            super();
            this.caller = new fp("__uspapiLocator", a => "function" === typeof a.__uspapi, ip);
            this.caller.B.set("getDataWithCallback", gp);
            this.caller.v.set("getDataWithCallback", hp)
        }
        h() {
            Ye(this.caller);
            super.h()
        }
        m() {
            return !!ep(this.caller)
        }
    };
    var kp = Wb(class extends G {
        constructor(a) {
            super(a)
        }
    });
    const lp = (a, b) => {
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, c => {
                c = kp(c);
                b.callback({
                    consentData: c
                })
            })
        },
        mp = {
            lb: a => a.callback,
            mb: (a, b) => ({
                __fciCall: {
                    callId: b,
                    command: a.command
                }
            }),
            ob: (a, b) => {
                a({
                    consentData: b
                })
            }
        };

    function np(a) {
        a = kp(a.data.__fciReturn);
        return {
            payload: a,
            qb: r(a, 1)
        }
    }
    var op = class extends Xe {
        constructor() {
            super();
            this.i = null;
            this.l = !1;
            this.caller = new fp("googlefcPresent", void 0, np);
            this.caller.B.set("getDataWithCallback", lp);
            this.caller.v.set("getDataWithCallback", mp)
        }
        h() {
            Ye(this.caller);
            super.h()
        }
        m() {
            this.l || (this.i = ep(this.caller), this.l = !0);
            return !!this.i
        }
    };

    function pp() {
        const a = md `(a=0)=>{let b;const c=class{};}`;
        try {
            var b = window;
            const c = a instanceof pc && a.constructor === pc ? a.h : "type_error:SafeScript";
            b.eval(c) === c && b.eval(c.toString());
            return {
                supports: !0,
                error: ""
            }
        } catch (c) {
            return {
                supports: !1,
                error: String(c)
            }
        }
    };
    var qp = a => {
        gc(window, "message", b => {
            let c;
            try {
                c = JSON.parse(b.data)
            } catch (d) {
                return
            }!c || "sc-cnf" !== c.googMsgType || a(c, b)
        })
    };
    var rp = class extends Xe {
        constructor() {
            super();
            this.l = J;
            this.i = null
        }
        h() {
            super.h()
        }
        m() {
            var a;
            (a = "function" === typeof this.l ? .__uspapi) || (a = this.i ? this.i : this.i = Tc(this.l, "__uspapiLocator"), a = null != a);
            return a
        }
    };
    var sp = class extends Xe {
        constructor() {
            super();
            this.v = J;
            this.i = null;
            this.l = !1
        }
        m() {
            if (!this.l) {
                if (!this.i) {
                    var a = Tc(this.v, "googlefcPresent");
                    this.i = a ? a : null
                }
                this.l = !0
            }
            return !!this.i
        }
    };
    let tp = null;
    const up = [],
        vp = new Map;
    let wp = -1;

    function xp(a) {
        return ui.test(a.className) && "done" !== a.dataset.adsbygoogleStatus
    }
    var zp = (a, b, c) => {
        a.dataset.adsbygoogleStatus = "done";
        yp(a, b, c)
    };

    function yp(a, b, c) {
        var d = window;
        d.google_spfd || (d.google_spfd = dp);
        var e = b.google_reactive_ads_config;
        e || dp(a, b, d, c);
        Po(d, b);
        if (!Ap(a, b, d)) {
            e || (d.google_lpabyc = di(a, d) + mi(a, d, "height", I));
            if (e) {
                e = e.page_level_pubvars || {};
                if (T(J).page_contains_reactive_tag && !T(J).allow_second_reactive_tag) {
                    if (e.pltais) {
                        Ul(!1);
                        return
                    }
                    throw new Q("Only one 'enable_page_level_ads' allowed per page.");
                }
                T(J).page_contains_reactive_tag = !0;
                Ul(7 === e.google_pgb_reactive)
            }
            b.google_unique_id = nd(d);
            H(um, (f, g) => {
                b[g] = b[g] || d[g]
            });
            b.google_loader_used = "aa";
            b.google_reactive_tag_first = 1 === (T(J).first_tag_on_page || 0);
            Ij(164, () => {
                Wo(d, b, a, c)
            })
        }
    }

    function Ap(a, b, c) {
        var d = b.google_reactive_ads_config,
            e = "string" === typeof a.className && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
            f = Sl(c);
        if (f && f.Ka && "on" !== b.google_adtest && !e) {
            e = di(a, c);
            const g = N(c).clientHeight;
            e = 0 == g ? null : e / g;
            if (!f.ra || f.ra && (e || 0) >= f.ra) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = ea(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", String(d)), "slot" === f.xb && (null !== Sc(a.getAttribute("width")) &&
                a.setAttribute("width", 0), null !== Sc(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0
        }
        if ((f = Jc(a, c)) && "none" === f.display && !("on" === b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format ||
            !a ? !1 : (n.console && n.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + String(b.google_reactive_ad_format) + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function Bp(a) {
        var b = document.getElementsByTagName("INS");
        for (let d = 0, e = b[d]; d < b.length; e = b[++d]) {
            var c = e;
            if (xp(c) && "reserved" !== c.dataset.adsbygoogleStatus && (!a || e.id === a)) return e
        }
        return null
    }
    var Dp = (a, b, c) => {
        if (a && a.shift) {
            let d = 20;
            for (; 0 < a.length && 0 < d;) {
                try {
                    Cp(a.shift(), b, c)
                } catch (e) {
                    setTimeout(() => {
                        throw e;
                    })
                }--d
            }
        }
    };

    function Ep() {
        const a = Ic("INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        Vc(a, {
            display: "none"
        });
        return a
    }
    var Fp = (a, b) => {
            const c = {},
                d = Rl();
            H(ug, (g, h) => {
                !1 === a.enable_page_level_ads ? c[h] = !1 : a.hasOwnProperty(h) ? c[h] = a[h] : d.includes(g) && (c[h] = !1)
            });
            da(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
            const e = Ep();
            $c.body.appendChild(e);
            const f = {
                google_reactive_ads_config: c,
                google_ad_client: a.google_ad_client
            };
            f.google_pause_ad_requests = !!T(J).pause_ad_requests;
            zp(e, f, b)
        },
        Gp = (a, b) => {
            vg(n).wasPlaTagProcessed = !0;
            const c = () => Fp(a, b),
                d = n.document;
            if (d.body || "complete" === d.readyState || "interactive" ===
                d.readyState) Fp(a, b);
            else {
                const e = fc(R.va(191, c));
                gc(d, "DOMContentLoaded", e);
                (new n.MutationObserver((f, g) => {
                    d.body && (e(), g.disconnect())
                })).observe(d, {
                    childList: !0,
                    subtree: !0
                })
            }
        };

    function Cp(a, b, c) {
        const d = {};
        Ij(165, () => Hp(a, d, b, c), e => {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin
        })
    }

    function Ip(a) {
        delete a.google_checked_head;
        H(a, (b, c) => {
            ti[c] || (delete a[c], n.console.warn(`AdSense head tag doesn't support ${c.replace("google","data").replace(/_/g,"-")} attribute.`))
        })
    }
    var Lp = (a, b) => {
        var c = J.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || J.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = T(window);
            if (d.head_tag_slot_vars) Jp(c);
            else {
                var e = {};
                bp(c, e);
                Ip(e);
                var f = lc(e);
                d.head_tag_slot_vars = f;
                c = {
                    google_ad_client: e.google_ad_client,
                    enable_page_level_ads: e
                };
                J.adsbygoogle || (J.adsbygoogle = []);
                d = J.adsbygoogle;
                d.loaded ? d.push(c) : d.splice && d.splice(0, 0, c);
                e.google_adbreak_test || b.l() ? .l() && P(nh) ? Kp(f, a) : qp(() => {
                    Kp(f, a)
                })
            }
        }
    };
    const Jp = a => {
        const b = T(window).head_tag_slot_vars,
            c = a.getAttribute("src") || "";
        if ((a = Ec(c, "client") || a.getAttribute("data-ad-client") || "") && a !== b.google_ad_client) throw new Q("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
    };

    function Mp(a) {
        if ("object" === typeof a && null != a) {
            if ("string" === typeof a.type) return 2;
            if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks) return 3
        }
        return 0
    }
    var Hp = (a, b, c, d) => {
        if (null == a) throw new Q("push() called with no parameters.");
        d.m() && Np(a, d.i().i(), D(d, 2));
        var e = Mp(a);
        if (0 !== e) d = Vl(), d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = Date.now(), d.adsbygoogle_execution_start_time = oa), null == tp ? (Op(a), up.push(a)) : 3 === e ? Ij(787, () => {
            tp.handleAdConfig(a)
        }) : Lj(730, tp.handleAdBreak(a));
        else {
            oa = (new Date).getTime();
            Qo(c, d, Pp(a));
            Qp();
            a: {
                if (void 0 != a.enable_page_level_ads) {
                    if ("string" === typeof a.google_ad_client) {
                        e = !0;
                        break a
                    }
                    throw new Q("'google_ad_client' is missing from the tag config.");
                }
                e = !1
            }
            if (e) Rp(a, d);
            else if ((e = a.params) && H(e, (g, h) => {
                    b[h] = g
                }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                e = Sp(a.element);
                bp(e, b);
                c = T(n).head_tag_slot_vars || {};
                H(c, (g, h) => {
                    b.hasOwnProperty(h) || (b[h] = g)
                });
                if (e.hasAttribute("data-require-head") && !T(n).head_tag_slot_vars) throw new Q("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client) throw new Q("Ad client is missing from the slot.");
                var f = (c = 0 === (T(J).first_tag_on_page || 0) && om(b)) && pm(c);
                c && (f || (Rp(c, d), T(J).skip_next_reactive_tag = !0), f && Tp(c));
                0 === (T(J).first_tag_on_page || 0) && (T(J).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!T(J).pause_ad_requests;
                zp(e, b, d)
            }
        }
    };
    let Up = !1;

    function Np(a, b, c) {
        Up || (Up = !0, a = Pp(a) || ym(J), Kj("predictive_abg", {
            a_c: a,
            p_c: b.join(),
            b_v: c
        }, .01))
    }

    function Pp(a) {
        return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
    }
    const Qp = () => {
            if (P(ch)) {
                var a = Sl(J);
                if (!(a = a && a.Ka)) {
                    try {
                        var b = J.localStorage
                    } catch (c) {
                        b = null
                    }
                    b = b ? ol(b) : null;
                    a = !(b && nl(b) && b)
                }
                a || Tl(J, 1)
            }
        },
        Tp = a => {
            ad(() => {
                vg(n).wasPlaTagProcessed || n.adsbygoogle && n.adsbygoogle.push(a)
            })
        };

    function Rp(a, b) {
        if (T(J).skip_next_reactive_tag) T(J).skip_next_reactive_tag = !1;
        else {
            0 === (T(J).first_tag_on_page || 0) && (T(J).first_tag_on_page = 1);
            if (a.tag_partner) {
                var c = a.tag_partner;
                const d = T(n);
                d.tag_partners = d.tag_partners || [];
                d.tag_partners.push(c)
            }
            sm(a, b);
            Gp(a, b)
        }
    }
    const Sp = a => {
            if (a) {
                if (!xp(a) && (a.id ? a = Bp(a.id) : a = null, !a)) throw new Q("'element' has already been filled.");
                if (!("innerHTML" in a)) throw new Q("'element' is not a good DOM element.");
            } else if (a = Bp(), !a) throw new Q("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
            return a
        },
        Vp = () => {
            const a = new fk(J),
                b = P(th) ? new jp : new rp,
                c = P(sh) ? new op : new sp;
            Kj("cmpMet", {
                tcfv1: J.__cmp ? 1 : 0,
                tcfv2: ck(a) ? 1 : 0,
                usp: b.m() ? 1 : 0,
                fc: c.m() ? 1 : 0,
                ptt: 9
            }, .001)
        },
        Wp = a => {
            Oj().S[Rj(26)] = !!Number(a)
        },
        Xp = a => {
            Number(a) ? T(J).pause_ad_requests = !0 : (T(J).pause_ad_requests = !1, a = () => {
                if (!T(J).pause_ad_requests) {
                    var b = {};
                    let c;
                    "function" === typeof window.CustomEvent ? c = new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", b) : (c = document.createEvent("CustomEvent"), c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail));
                    J.dispatchEvent(c)
                }
            }, n.setTimeout(a, 0), n.setTimeout(a, 1E3))
        },
        Yp = a => {
            Kj("adsenseGfpKnob", {
                value: a,
                ptt: 9
            }, .1);
            switch (a) {
                case 0:
                case 2:
                    a = !0;
                    break;
                case 1:
                    a = !1;
                    break;
                default:
                    throw Error(`Illegal value of ${"cookieOptions"}: ${a}`);
            }
            J._gfp_a_ = a
        },
        $p = a => {
            try {
                Object.defineProperty(a, "requestNonPersonalizedAds", {
                    set: Wp
                }), Object.defineProperty(a, "pauseAdRequests", {
                    set: Xp
                }), Object.defineProperty(a, "cookieOptions", {
                    set: Yp
                }), Object.defineProperty(a, "onload", {
                    set: Zp
                })
            } catch {}
        };

    function Zp(a) {
        a && a.call && "function" === typeof a && window.setTimeout(a, 0)
    }

    function Kp(a, b) {
        b = nm(sc(b.wb, Th() ? {
            bust: Th()
        } : {})).then(c => {
            null == tp && (c.init(a), tp = c, aq())
        });
        R.ca(723, b);
        b.finally(() => {
            up.length = 0;
            Kj("slotcar", {
                event: "api_ld",
                time: Date.now() - oa,
                time_pr: Date.now() - wp
            })
        })
    }
    const aq = () => {
        for (const [a, b] of vp) - 1 !== b && (n.clearTimeout(b), vp.delete(a));
        for (let a = 0; a < up.length; a++) {
            if (vp.has(a)) continue;
            const b = up[a],
                c = Mp(b);
            Ij(723, () => {
                if (3 === c) tp.handleAdConfig(b);
                else if (2 === c) {
                    var d = tp.handleAdBreakBeforeReady(b);
                    R.ca(730, d)
                }
            })
        }
    };

    function Op(a) {
        var b = up.length;
        if (2 === Mp(a) && "preroll" === a.type && null != a.adBreakDone) {
            -1 === wp && (wp = Date.now());
            var c = n.setTimeout(() => {
                try {
                    (0, a.adBreakDone)({
                        breakType: "preroll",
                        breakName: a.name,
                        breakFormat: "preroll",
                        breakStatus: "timeout"
                    }), vp.set(b, -1), Kj("slotcar", {
                        event: "pr_to",
                        source: "adsbygoogle"
                    })
                } catch (d) {
                    console.error("[Ad Placement API] adBreakDone callback threw an error:", d instanceof Error ? d : Error(String(d)))
                }
            }, 1E3 * Sh(oh));
            vp.set(b, c)
        }
    };
    (function(a, b, c, d = () => {}) {
        R.Sa(Mj);
        Ij(166, () => {
            const e = Wn(b);
            Un(e);
            d();
            id(16, [1, e.toJSON()]);
            var f = kd(jd(J)) || J;
            const g = c(Vn({
                bb: a,
                sb: D(e, 2)
            }), e);
            Jl(f, e);
            hn(f, e, null === J.document.currentScript ? 1 : Im(g.yb));
            Lj(1086, Em());
            if (!ua() || 0 <= qa(xa(), 11)) {
                Hj(P(rh));
                $o(e);
                Zk();
                try {
                    lo()
                } catch {}
                Zo();
                Lp(g, e);
                f = window;
                var h = f.adsbygoogle;
                if (!h || !h.loaded) {
                    Kj("new_abg_tag", {
                        value: `${E(e,16)}`,
                        host_v: `${E(e,22)}`,
                        frequency: .01
                    }, .01);
                    Vp();
                    var l = {
                        push: v => {
                            Cp(v, g, e)
                        },
                        loaded: !0
                    };
                    $p(l);
                    if (h)
                        for (var k of ["requestNonPersonalizedAds",
                                "pauseAdRequests", "cookieOptions"
                            ]) void 0 !== h[k] && (l[k] = h[k]);
                    "_gfp_a_" in window || (window._gfp_a_ = !0);
                    Dp(h, g, e);
                    f.adsbygoogle = l;
                    h && (l.onload = h.onload);
                    (k = Vo(g)) && document.documentElement.appendChild(k);
                    var {
                        supports: m,
                        error: u
                    } = pp();
                    Kj("modern_js", {
                        fy: B(r(e, 1), 0),
                        supports: String(m),
                        c: 2021,
                        e: u
                    }, .01)
                }
            }
        })
    })("m202302090101", "undefined" === typeof sttc ? void 0 : sttc, function(a, b) {
        const c = 2012 < B(r(b, 1), 0) ? `_fy${B(r(b,1),0)}` : "";
        var d = D(b, 3);
        const e = D(b, 2);
        b = ld `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`;
        d = ld `https://googleads.g.doubleclick.net/pagead/html/${e}/${d}/zrt_lookup.html`;
        return {
            wb: b,
            ub: ld `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl${c}.js`,
            tb: ld `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl_with_ama${c}.js`,
            bc: ld `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl_instrumented${c}.js`,
            Ab: d,
            yb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
        }
    });
}).call(this, "[2021,\"r20230213\",\"r20190131\",1,null,1,null,\".google.nl\",null,null,null,[[[1082,null,null,[1]],[null,1130,null,[null,100]],[null,1126,null,[null,10000]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[null,1224,null,[null,0.01]],[null,1159,null,[null,500]],[1122,null,null,[1]],[1207,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1205,null,null,[1]],[1167,null,null,[1]],[1129,null,null,[1]],[1227,null,null,[1]],[null,1169,null,[null,61440]],[1171,null,null,[1]],[1201,null,null,[1]],[1199,null,null,[1]],[1161,null,null,[1]],[null,1072,null,[null,0.75]],[1101,null,null,[1]],[null,1168,null,[null,61440]],[1198,null,null,[1]],[1206,null,null,[1]],[1225,null,null,[1]],[1190,null,null,[1]],[null,508040914,null,[null,100]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[null,null,null,[null,null,null,[\"2\"]],null,10003],[1086,null,null,[1]],[63682,null,null,[]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[1033,null,null,[1]],[null,null,null,[null,null,null,[\"Az6AfRvI8mo7yiW5fLfj04W21t0ig6aMsGYpIqMTaX60H+b0DkO1uDr+7BrzMcimWzv\/X7SXR8jI+uvbV0IJlwYAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A+USTya+tNvDPaxUgJooz+LaVk5hPoAxpLvSxjogX4Mk8awCTQ9iop6zJ9d5ldgU7WmHqBlnQB41LHHRFxoaBwoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A7FovoGr67TUBYbnY+Z0IKoJbbmRmB8fCyirUGHavNDtD91CiGyHHSA2hDG9r9T3NjUKFi6egL3RbgTwhhcVDwUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\"]],null,1934],[1957,null,null,[1]],[1971,null,null,[1]],[null,1972,null,[]],[null,1142,null,[null,8]],[null,1158,null,[null,45]],[null,501545963,null,[null,1]],[null,1195,null,[null,1]],[null,1119,null,[null,300]],[null,1193,null,[null,100]],[505942137,null,null,[1]],[null,501545962,null,[null,1]],[null,495583959,null,[null,-1]],[null,45388309,null,[null,-1]],[null,1114,null,[null,1]],[null,1116,null,[null,300]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1108,null,[null,1000]],[1203,null,null,[1]],[null,1115,null,[null,-1]],[501545959,null,null,[1]],[null,1194,null,[null,1]],[500169372,null,null,[1]],[504834127,null,null,[1]],[469675169,null,null,[1]],[null,469675170,null,[null,30000]],[392736476,null,null,[]],[null,null,null,[],null,1932],[432938498,null,null,[]],[485990406,null,null,[]],[501411886,null,null,[1]]],[[10,[[1,[[44783898],[44783899,[[1235,null,null,[1]]]]]],[10,[[31071642],[31071643,[[1216,null,null,[1]]]]],null,72],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[10,[[42531705],[42531706]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[10,[[44767166],[44767167]]],[10,[[44782466],[44782467,[[1160,null,null,[1]]]],[44782468,[[1226,null,null,[1]],[1160,null,null,[1]]]]]],[null,[[44755592],[44755593],[44755594],[44755653],[44777509,[[1200,null,null,[1]]]]],null,51],[10,[[31071869],[31071870,[[1215,null,null,[1]]]]],null,72],[10,[[31071258],[31071259]]],[100,[[31071755],[31071756,[[1222,null,null,[1]]]]]],[100,[[31072224],[31072225,[[472491850,null,null,[1]]]]]],[100,[[31072254],[31072255,[[10004,null,null,[1]]]]]],[10,[[31072348],[31072349,[[1228,null,null,[1]]]]]],[10,[[31072384],[31072385,[[1232,null,null,[1]]]]]],[10,[[31072386],[31072387,[[10005,null,null,[1]]]]]],[1000,[[31072408,[[null,null,14,[null,null,\"31072408\"]]],[6,null,null,null,6,null,\"31072408\"]],[31072409,[[null,null,14,[null,null,\"31072409\"]]],[6,null,null,null,6,null,\"31072409\"]]],[4,null,55],63],[10,[[31072435],[31072436,[[1234,null,null,[1]]]]]],[1000,[[31072439,[[null,null,14,[null,null,\"31072439\"]]],[6,null,null,null,6,null,\"31072439\"]],[31072440,[[null,null,14,[null,null,\"31072440\"]]],[6,null,null,null,6,null,\"31072440\"]]],[4,null,55],63],[1000,[[31072479,[[null,null,14,[null,null,\"31072479\"]]],[6,null,null,null,6,null,\"31072479\"]],[31072480,[[null,null,14,[null,null,\"31072480\"]]],[6,null,null,null,6,null,\"31072480\"]]],[4,null,55],63],[10,[[44772268],[44772269,[[1185,null,null,[1]]]]],null,54],[50,[[44774292],[44774606,[[1147,null,null,[1]]]]],null,54],[1,[[44774293,[[1147,null,null,[1]]]],[44774605,[[1147,null,null,[1]]]],[44776415]],null,54],[1,[[44779343],[44779344,[[1147,null,null,[1]]]]],null,54],[200,[[44779793],[44779794,[[63682,null,null,[1]]]]],null,51],[1,[[44784140],[44784141,[[1233,null,null,[1]],[1147,null,null,[1]]]],[44784142,[[1233,null,null,[1]],[1185,null,null,[1]]]]],null,54],[50,[[31067422],[31067423,[[null,1032,null,[]]]],[44776074],[44776369],[44779109],[44779906],[44784478]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[44776368],[44779257]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69]]],[17,[[null,[[44773745],[44773746],[44773747]],null,null,null,null,31,null,null,113],[10,[[31071260]]],[10,[[31071261],[31071262],[31071263],[31071264]],null,null,null,44,22],[10,[[31071265],[31071266]],null,null,null,44,null,500],[10,[[31071267]],null,null,null,44,null,900],[10,[[31071268],[31071269]],null,null,null,null,null,null,null,101],[1,[[31072412,[[null,1103,null,[null,31072412]],[1121,null,null,[1]]]],[31072413,[[1120,null,null,[1]],[null,1103,null,[null,31072413]],[null,1114,null,[null,0.4]],[1121,null,null,[1]]]]],[4,null,55],null,null,null,null,null,null,117,1],[1,[[31072414,[[1120,null,null,[1]],[null,1103,null,[null,31072414]],[null,1114,null,[null,0.4]]]],[31072415,[[1120,null,null,[1]],[null,1103,null,[null,31072415]],[null,1114,null,[null,0.4]],[471262996,null,null,[1]]]]],[4,null,55],null,null,null,null,2,null,117,1],[1,[[31072416,[[null,1103,null,[null,31072416]]]],[31072417,[[1120,null,null,[1]],[501545960,null,null,[1]],[null,1103,null,[null,31072417]],[501545959,null,null,[]]]],[31072418,[[1120,null,null,[1]],[501545960,null,null,[1]],[null,1103,null,[null,31072418]],[null,1114,null,[null,0.4]]]]],[4,null,55],null,null,null,null,42,null,117,1],[1,[[31072421,[[null,1103,null,[null,31072421]]]],[31072422,[[1162,null,null,[1]],[1120,null,null,[1]],[501545960,null,null,[1]],[null,1103,null,[null,31072422]],[501545959,null,null,[]]]],[31072423,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1157,null,[null,400]],[501545960,null,null,[1]],[null,1103,null,[null,31072423]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]]]]],[4,null,55],null,null,null,null,192,null,117,1],[1,[[31072504,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1157,null,[null,400]],[501545960,null,null,[1]],[null,1103,null,[null,31072504]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]]]],[31072505,[[1162,null,null,[1]],[1120,null,null,[1]],[null,1157,null,[null,400]],[501545960,null,null,[1]],[null,1103,null,[null,31072505]],[505942137,null,null,[]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]]]]],[4,null,55],null,null,null,null,222,null,117,1],[1,[[44784436,[[1120,null,null,[1]],[501545960,null,null,[1]],[null,1103,null,[null,44784436]],[null,1114,null,[null,0.4]]]],[44784437,[[1120,null,null,[1]],[501545960,null,null,[1]],[null,1103,null,[null,44784437]],[null,1114,null,[null,0.4]],[504535903,null,null,[1]]]]],[4,null,55],null,null,null,null,72,null,117,1],[1,[[44784460,[[1120,null,null,[1]],[501545960,null,null,[1]],[null,1103,null,[null,44784460]],[null,1114,null,[null,0.4]]]],[44784461,[[1120,null,null,[1]],[501545960,null,null,[1]],[null,1103,null,[null,44784461]],[null,1114,null,[null,0.4]],[502896280,null,null,[1]]]]],[4,null,55],null,null,null,null,112,null,117,1],[1,[[44784587,[[1120,null,null,[1]],[null,1195,null,[null,5]],[501545960,null,null,[1]],[null,1103,null,[null,44784587]],[null,1114,null,[null,0.4]],[null,1194,null,[null,2]]]],[44784588,[[1120,null,null,[1]],[null,1195,null,[null,5]],[501545960,null,null,[1]],[null,1103,null,[null,44784588]],[null,1114,null,[null,0.4]],[null,1194,null,[null,2]],[500922887,null,null,[1]]]]],[4,null,55],null,null,null,null,152,null,117,1]]],[11,[[500,[[31072315,[[483374575,null,null,[]]]],[31072316,[[483374575,null,null,[1]]]]],[4,null,8,null,null,null,null,[\"sharedStorage\"]]]]],[12,[[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61],[50,[[31071662],[31071663,[[1974,null,null,[1]]]]]],[50,[[31071975],[31071976,[[1975,null,null,[1]]]]]],[100,[[31072426],[31072427,[[50227136,null,null,[1]]]]]],[10,[[31072499],[31072500,[[506738119,null,null,[1]]]]]],[10,[[44769661],[44769662,[[1973,null,null,[1]]]]]]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1000,[[31067146,null,[4,null,9,null,null,null,null,[\"document.browsingTopics\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067147,null,[2,[[4,null,9,null,null,null,null,[\"navigator.runAdAuction\"]],[4,null,9,null,null,null,null,[\"navigator.joinAdInterestGroup\"]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067148,null,[4,null,69,null,null,null,null,[\"attribution-reporting\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067672,null,[2,[[4,null,69,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,70,null,null,null,null,[\"browsing-topics\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067673,null,[2,[[4,null,69,null,null,null,null,[\"join-ad-interest-group\"]],[1,[[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067674,null,[2,[[4,null,69,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067675,null,[2,[[4,null,69,null,null,null,null,[\"attribution-reporting\"]],[1,[[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068556,null,[4,null,8,null,null,null,null,[\"sharedStorage\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068557,null,[2,[[4,null,69,null,null,null,null,[\"shared-storage\"]],[1,[[4,null,70,null,null,null,null,[\"shared-storage\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[null,[[31070383,null,[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]],[31070384,[[439828594,null,null,[1]]],[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]],70],[null,[[31070594],[31070595,[[439828594,null,null,[1]],[483962503,null,null,[1]]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]],70],[null,[[44768158,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44768159,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[50,[[44776500,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44776501,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[100,[[44776502,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44776503,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[null,[[44783616,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44783617,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]],[20,[[1000,[[31070530,null,[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]]],[1000,[[31070531,null,[2,[[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]],[4,null,8,null,null,null,null,[\"credentialless\"]]]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]]],[1000,[[31070532,null,[4,null,9,null,null,null,null,[\"SharedArrayBuffer\"]]]],[2,[[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)\\\\d{3,})\",[\"navigator.userAgent\"]]]]]]]],null,null,[null,\"1000\",1,\"1000\"]],null,[[\"ca-pub-6229219222351733\"],[1,[null,[[[[null,0,null,null,null,null,\"BODY\\u003eMAIN\\u003eDIV.container\\u003eDIV.alert.alert-info.alert-dismissible.fade.show\"],4,[\"24px\",\"16px\",1],[2],null,null,null,1],[[null,0,null,null,null,null,\"BODY\\u003eMAIN\\u003eDIV.container\\u003eSECTION.album.bg-light\\u003eDIV.container\"],1,[\"10px\",\"10px\",1],[2],null,null,null,1],[[null,0,null,null,null,null,\"BODY\\u003eDIV.container\\u003eDIV.d-flex\\u003eMAIN.column\\u003eSECTION\"],1,[\"10px\",\"16px\",1],[2],null,null,null,1]],null,[[[null,null,null,null,null,null,\"DIV#search_form\\u003eSPAN.text-secondary\"],[]]]]]]],\"31072408\",null,\"www.umeh.top\",287548697,[44759876,44759927,44759842]]");