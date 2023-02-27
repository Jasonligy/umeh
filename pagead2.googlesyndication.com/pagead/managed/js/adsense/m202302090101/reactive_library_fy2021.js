(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var p, aa = {},
        u = this || self;

    function ba(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function ca(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function w(a) {
        return Object.prototype.hasOwnProperty.call(a, da) && a[da] || (a[da] = ++ea)
    }
    var da = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ea = 0;

    function ha(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ia(a, b, c) {
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

    function x(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? x = ha : x = ia;
        return x.apply(null, arguments)
    }

    function ja(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function ka(a) {
        return a
    };
    var la;

    function ma(a) {
        u.setTimeout(() => {
            throw a;
        }, 0)
    };

    function na() {
        var a = u.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function z(a) {
        return -1 != na().indexOf(a)
    };

    function oa(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function pa(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function qa(a, b) {
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

    function ra(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function sa(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function ta(a, b) {
        return 0 <= oa(a, b)
    }

    function ua(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function va(a, b) {
        for (let c = 1; c < arguments.length; c++) {
            const d = arguments[c];
            if (ba(d)) {
                const e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (let g = 0; g < f; g++) a[e + g] = d[g]
            } else a.push(d)
        }
    }

    function wa(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; 0 < c; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };

    function xa(a) {
        xa[" "](a);
        return a
    }
    xa[" "] = function() {};
    var ya = z("Opera"),
        za = z("Trident") || z("MSIE"),
        Aa = z("Edge"),
        Ba = z("Gecko") && !(-1 != na().toLowerCase().indexOf("webkit") && !z("Edge")) && !(z("Trident") || z("MSIE")) && !z("Edge"),
        Ca = -1 != na().toLowerCase().indexOf("webkit") && !z("Edge");

    function Da() {
        var a = u.document;
        return a ? a.documentMode : void 0
    }
    var Ea;
    a: {
        var Fa = "",
            Ga = function() {
                var a = na();
                if (Ba) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Aa) return /Edge\/([\d\.]+)/.exec(a);
                if (za) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Ca) return /WebKit\/(\S+)/.exec(a);
                if (ya) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Ga && (Fa = Ga ? Ga[1] : "");
        if (za) {
            var Ha = Da();
            if (null != Ha && Ha > parseFloat(Fa)) {
                Ea = String(Ha);
                break a
            }
        }
        Ea = Fa
    }
    var Ia = Ea,
        Ja;
    if (u.document && za) {
        var Ka = Da();
        Ja = Ka ? Ka : parseInt(Ia, 10) || void 0
    } else Ja = void 0;
    var La = Ja;
    var Ma = {},
        Na = null;
    var Oa = "undefined" !== typeof Uint8Array;
    const Qa = !za && "function" === typeof u.btoa;

    function Ra(a) {
        if (!Qa) {
            var b;
            void 0 === b && (b = 0);
            if (!Na) {
                Na = {};
                for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                    var f = c.concat(d[e].split(""));
                    Ma[e] = f;
                    for (var g = 0; g < f.length; g++) {
                        var h = f[g];
                        void 0 === Na[h] && (Na[h] = g)
                    }
                }
            }
            b = Ma[b];
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
            switch (a.length -
                f) {
                case 2:
                    g = a[f + 1], h = b[(g & 15) << 2] || d;
                case 1:
                    a = a[f], c[e] = b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
            }
            return c.join("")
        }
        for (b = ""; 10240 < a.length;) b += String.fromCharCode.apply(null, a.subarray(0, 10240)), a = a.subarray(10240);
        b += String.fromCharCode.apply(null, a);
        return btoa(b)
    }
    var Sa = {};
    let Ta;
    var Ua = class {
        constructor(a) {
            if (Sa !== Sa) throw Error("illegal external caller");
            this.Hb = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        }
        isEmpty() {
            return null == this.Hb
        }
    };
    const Va = Symbol();

    function Xa(a, b) {
        if (Va) return a[Va] |= b;
        if (void 0 !== a.sa) return a.sa |= b;
        Object.defineProperties(a, {
            sa: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    }

    function Ya(a, b) {
        const c = B(a);
        (c & b) !== b && (Object.isFrozen(a) && (a = Array.prototype.slice.call(a)), Za(a, c | b));
        return a
    }

    function B(a) {
        let b;
        Va ? b = a[Va] : b = a.sa;
        return null == b ? 0 : b
    }

    function Za(a, b) {
        Va ? a[Va] = b : void 0 !== a.sa ? a.sa = b : Object.defineProperties(a, {
            sa: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function $a(a) {
        Xa(a, 1);
        return a
    }

    function ab(a) {
        return !!(B(a) & 2)
    }

    function bb(a) {
        Xa(a, 16);
        return a
    }

    function cb(a, b) {
        Za(b, (a | 0) & -51)
    }

    function db(a, b) {
        Za(b, (a | 18) & -41)
    };
    var eb = {};

    function fb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let gb;
    var hb;
    const ib = [];
    Za(ib, 23);
    hb = Object.freeze(ib);

    function jb(a) {
        if (ab(a.N)) throw Error("Cannot mutate an immutable Message");
    }

    function kb(a) {
        var b = a.length;
        (b = b ? a[b - 1] : void 0) && fb(b) ? b.g = 1 : a.push({
            g: 1
        })
    };
    let lb;

    function mb(a, b) {
        lb = b;
        a = new a(b);
        lb = void 0;
        return a
    };

    function nb(a) {
        const b = a.l + a.Ea;
        return a.qa || (a.qa = a.N[b] = {})
    }

    function C(a, b, c) {
        return -1 === b ? null : b >= a.l ? a.qa ? a.qa[b] : void 0 : c && a.qa && (c = a.qa[b], null != c) ? c : a.N[b + a.Ea]
    }

    function ob(a, b, c, d) {
        jb(a);
        return pb(a, b, c, d)
    }

    function pb(a, b, c, d) {
        a.m && (a.m = void 0);
        if (b >= a.l || d) return nb(a)[b] = c, a;
        a.N[b + a.Ea] = c;
        (c = a.qa) && b in c && delete c[b];
        return a
    }

    function rb(a, b, c, d, e) {
        let f = C(a, b, d);
        Array.isArray(f) || (f = hb);
        const g = B(f);
        g & 1 || $a(f);
        if (e) g & 2 || Xa(f, 2), c & 1 || Object.freeze(f);
        else {
            e = !(c & 2);
            const h = g & 2;
            c & 1 || !h ? e && g & 16 && !h && (a = f, Va ? a[Va] && (a[Va] &= -17) : void 0 !== a.sa && (a.sa &= -17)) : (f = $a(Array.prototype.slice.call(f)), pb(a, b, f, d))
        }
        return f
    }

    function sb(a, b) {
        a = C(a, b);
        return null == a ? a : !!a
    }

    function tb(a) {
        var b = ab(a.N);
        let c = rb(a, 4, 1, !1, b);
        const d = B(c);
        if (!(d & 4)) {
            Object.isFrozen(c) && (c = $a(c.slice()), pb(a, 4, c, !1));
            let e = 0,
                f = 0;
            for (; e < c.length; e++) {
                const g = c[e];
                null != g && (c[f++] = g)
            }
            f < e && (c.length = f);
            Xa(c, 5);
            b && (Xa(c, 2), Object.freeze(c))
        }!b && (d & 2 || Object.isFrozen(c)) && (c = Array.prototype.slice.call(c), Xa(c, 5), b = c, b = null == b ? hb : Ya(b, 1), ob(a, 4, b, !1));
        return c
    }

    function F(a, b, c, d) {
        jb(a);
        c !== d ? pb(a, b, c) : pb(a, b, void 0, !1);
        return a
    }

    function ub(a, b, c) {
        const d = C(a, c, !1); {
            let f = !1;
            var e = null == d || "object" !== typeof d || (f = Array.isArray(d)) || d.Db !== eb ? f ? new b(d) : void 0 : d
        }
        e !== d && null != e && (pb(a, c, e, !1), Xa(e.N, B(a.N) & 18));
        return e
    }

    function vb(a, b, c) {
        b = ub(a, b, c);
        if (null == b) return b;
        if (!ab(a.N)) {
            const d = wb(b);
            d !== b && (b = d, pb(a, c, b, !1))
        }
        return b
    }

    function xb(a, b, c) {
        var d = ab(a.N);
        a.j || (a.j = {});
        var e = a.j[c];
        var f = rb(a, c, 3, void 0, d);
        if (e) d || (f = Object.isFrozen(e), d && !f ? Object.freeze(e) : !d && f && (e = Array.prototype.slice.call(e), a.j[c] = e));
        else {
            var g = f;
            e = [];
            var h = !!(B(a.N) & 16);
            f = ab(g);
            const n = g;
            !d && f && (g = Array.prototype.slice.call(g));
            var l = f;
            let q = 0;
            for (; q < g.length; q++) {
                var k = g[q];
                var m = b;
                m = Array.isArray(k) ? new m(k) : void 0;
                if (void 0 === m) continue;
                k = m.N;
                const r = B(k);
                let t = r;
                f && (t |= 2);
                h && (t |= 16);
                t != r && Za(k, t);
                k = t;
                l || (l = !!(2 & k));
                e.push(m)
            }
            a.j[c] = e;
            h =
                B(g);
            b = h | 33;
            b = l ? b & -9 : b | 8;
            h != b && (l = g, Object.isFrozen(l) && (l = Array.prototype.slice.call(l)), Za(l, b), g = l);
            n !== g && pb(a, c, g);
            (d || d && f) && Xa(e, 2);
            d && Object.freeze(e)
        }
        a = rb(a, c, 3, void 0, d);
        if (!(d || B(a) & 8)) {
            for (d = 0; d < e.length; d++) c = e[d], f = wb(c), c !== f && (e[d] = f, a[d] = f.N);
            Xa(a, 8)
        }
        return e
    }

    function yb(a, b, c) {
        jb(a);
        null == c && (c = void 0);
        return pb(a, b, c)
    }

    function zb(a, b, c = !1) {
        a = sb(a, b);
        return null == a ? c : a
    };

    function Ab(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (0 !== (B(a) & 128)) return a = Array.prototype.slice.call(a), kb(a), a
                    } else {
                        if (Oa && null != a && a instanceof Uint8Array) return Ra(a);
                        if (a instanceof Ua) {
                            const b = a.Hb;
                            return null == b ? "" : "string" === typeof b ? b : a.Hb = Ra(b)
                        }
                    }
        }
        return a
    };

    function Bb(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = Cb(a, b, c, void 0 !== d);
            else if (fb(a)) {
                const e = {};
                for (let f in a) Object.prototype.hasOwnProperty.call(a, f) && (e[f] = Bb(a[f], b, c, d));
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function Cb(a, b, c, d) {
        const e = B(a);
        d = d ? !!(e & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (let f = 0; f < a.length; f++) a[f] = Bb(a[f], b, c, d);
        c(e, a);
        return a
    }

    function Db(a) {
        return a.Db === eb ? a.toJSON() : Ab(a)
    }

    function Eb(a, b) {
        a & 128 && kb(b)
    };

    function Fb(a, b, c = db) {
        if (null != a) {
            if (Oa && a instanceof Uint8Array) return a.length ? new Ua(new Uint8Array(a)) : Ta || (Ta = new Ua(null));
            if (Array.isArray(a)) {
                const d = B(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return Za(a, d | 2), a;
                a = Cb(a, Fb, d & 4 ? db : c, !0);
                b = B(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            return a.Db === eb ? Gb(a) : a
        }
    }

    function Hb(a, b, c, d, e, f, g) {
        if (a = a.j && a.j[c]) {
            d = B(a);
            d & 2 ? d = a : (f = ra(a, Gb), db(d, f), Object.freeze(f), d = f);
            jb(b);
            f = null == d ? hb : $a([]);
            if (null != d) {
                g = !!d.length;
                for (a = 0; a < d.length; a++) {
                    const h = d[a];
                    g = g && !ab(h.N);
                    f[a] = h.N
                }
                f = Ya(f, (g ? 8 : 0) | 1);
                b.j || (b.j = {});
                b.j[c] = d
            } else b.j && (b.j[c] = void 0);
            pb(b, c, f, e)
        } else ob(b, c, Fb(d, f, g), e)
    }

    function Gb(a) {
        if (ab(a.N)) return a;
        a = Ib(a, !0);
        Xa(a.N, 2);
        return a
    }

    function Ib(a, b) {
        const c = a.N;
        var d = bb([]),
            e = a.constructor.messageId;
        e && d.push(e);
        e = a.qa;
        if (e) {
            d.length = c.length;
            d.fill(void 0, d.length, c.length);
            var f = {};
            d[d.length - 1] = f
        }
        0 !== (B(c) & 128) && kb(d);
        b = b || ab(a.N) ? db : cb;
        d = mb(a.constructor, d);
        a.Pb && (d.Pb = a.Pb.slice());
        f = !!(B(c) & 16);
        const g = e ? c.length - 1 : c.length;
        for (let h = 0; h < g; h++) Hb(a, d, h - a.Ea, c[h], !1, f, b);
        if (e)
            for (const h in e) Hb(a, d, +h, e[h], !0, f, b);
        return d
    }

    function wb(a) {
        if (!ab(a.N)) return a;
        const b = Ib(a, !1);
        b.m = a;
        return b
    };
    var Kb = class {
        constructor(a, b, c) {
            null == a && (a = lb);
            lb = void 0;
            var d = 0 < (this.constructor.j || 0),
                e = this.constructor.messageId,
                f = !1;
            if (null == a) {
                a = e ? [e] : [];
                var g = 48;
                var h = !0;
                d && (g |= 128);
                Za(a, g)
            } else {
                if (!Array.isArray(a)) throw Error();
                if (e && e !== a[0]) throw Error();
                let l = g = Xa(a, 0);
                if (h = 0 !== (16 & l))(f = 0 !== (32 & l)) || (l |= 32);
                if (d) {
                    if (!(l & 128) && 0 < a.length) {
                        const k = a[a.length - 1];
                        if (fb(k) && "g" in k) {
                            l |= 128;
                            delete k.g;
                            let m = !0;
                            for (let n in k) {
                                m = !1;
                                break
                            }
                            m && a.pop()
                        } else throw Error();
                    }
                } else if (128 & l) throw Error();
                g !== l &&
                    Za(a, l)
            }
            this.Ea = e ? 0 : -1;
            this.j = void 0;
            this.N = a;
            a: {
                g = this.N.length;e = g - 1;
                if (g && (g = this.N[e], fb(g))) {
                    this.qa = g;
                    this.l = e - this.Ea;
                    break a
                }
                void 0 !== b && -1 < b ? (this.l = Math.max(b, e + 1 - this.Ea), this.qa = void 0) : this.l = Number.MAX_VALUE
            }
            if (!d && this.qa && "g" in this.qa) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
            if (c) {
                b = h && !f && !0;
                d = this.l;
                let l;
                for (h = 0; h < c.length; h++) f = c[h], f < d ? (f += this.Ea, (e = a[f]) ? Jb(e, b) : a[f] = hb) : (l || (l = nb(this)), (e = l[f]) ? Jb(e, b) : l[f] = hb)
            }
        }
        toJSON() {
            const a =
                this.N;
            return gb ? a : Cb(a, Db, Eb)
        }
    };

    function Jb(a, b) {
        if (Array.isArray(a)) {
            var c = B(a),
                d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && Za(a, c | d)
        }
    }
    Kb.prototype.Db = eb;

    function Lb(a, b) {
        return Ab(b)
    };
    let Mb = void 0;

    function Nb(a, b) {
        const c = Mb;
        Mb = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    };

    function Ob(a) {
        return b => {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                b = mb(a, bb(b))
            }
            return b
        }
    };

    function Pb() {
        return !1
    }

    function Qb() {
        return !0
    }

    function Rb(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Sb(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Tb(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }

    function Ub(a) {
        function b() {
            d = u.setTimeout(c, 100);
            let g = f;
            f = [];
            a.apply(void 0, g)
        }

        function c() {
            d = 0;
            e && (e = !1, b())
        }
        let d = 0,
            e = !1,
            f = [];
        return function(g) {
            f = arguments;
            d ? e = !0 : b()
        }
    };
    var Vb = {
            capture: !0
        },
        Wb = {
            passive: !0
        },
        Xb = Sb(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                u.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function Yb(a) {
        return a ? a.passive && Xb() ? a : a.capture || !1 : !1
    }

    function H(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Yb(d)), !0) : !1
    }

    function I(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, Yb(d)), !0) : !1
    };
    var Zb = za || Ca;
    var $b;

    function ac() {
        if (void 0 === $b) {
            var a = null,
                b = u.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ka,
                        createScript: ka,
                        createScriptURL: ka
                    })
                } catch (c) {
                    u.console && u.console.error(c.message)
                }
                $b = a
            } else $b = a
        }
        return $b
    };
    var cc = class {
            constructor(a, b) {
                this.j = b === bc ? a : ""
            }
            toString() {
                return this.j + ""
            }
        },
        bc = {};

    function dc(a) {
        const b = ac();
        a = b ? b.createScriptURL(a) : a;
        return new cc(a, bc)
    };
    var fc = class {
            constructor(a, b) {
                this.j = b === ec ? a : ""
            }
            toString() {
                return this.j.toString()
            }
        },
        ec = {},
        gc = new fc("about:invalid#zClosurez", ec);
    const hc = {};

    function ic(a) {
        return a instanceof jc && a.constructor === jc ? a.j : "type_error:SafeHtml"
    }
    class jc {
        constructor(a, b) {
            this.j = b === hc ? a : ""
        }
        toString() {
            return this.j.toString()
        }
    }
    var kc = new jc(u.trustedTypes && u.trustedTypes.emptyHTML || "", hc);
    var lc = Sb(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = ic(kc);
        return !b.parentElement
    });

    function mc(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function nc(a) {
        return mc.apply(null, arguments) / arguments.length
    };

    function J(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }

    function oc(a, b) {
        return new J(a.x - b.x, a.y - b.y)
    }
    J.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    J.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    J.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function pc(a, b) {
        this.width = a;
        this.height = b
    }
    p = pc.prototype;
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

    function qc(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : u.document.createElement("div");
        return a.replace(rc, function(e, f) {
            var g = c[e];
            if (g) return g;
            "#" == f.charAt(0) && (f = Number("0" + f.slice(1)), isNaN(f) || (g = String.fromCharCode(f)));
            if (!g) {
                g = e + " ";
                g = (f = ac()) ? f.createHTML(g) : g;
                g = new jc(g, hc);
                if (lc())
                    for (; d.lastChild;) d.removeChild(d.lastChild);
                d.innerHTML = ic(g);
                g = d.firstChild.nodeValue.slice(0, -1)
            }
            return c[e] = g
        })
    }
    var rc = /&([^;\s<&]+);?/g;

    function sc(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function tc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function uc(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function vc(a) {
        return a ? new wc(xc(a)) : la || (la = new wc)
    }

    function yc(a) {
        a = a.document;
        a = zc(a) ? a.documentElement : a.body;
        return new pc(a.clientWidth, a.clientHeight)
    }

    function Ac(a) {
        var b = a.document,
            c = 0;
        if (b) {
            c = b.body;
            var d = b.documentElement;
            if (!d || !c) return 0;
            a = yc(a).height;
            if (zc(b) && d.scrollHeight) c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight;
            else {
                b = d.scrollHeight;
                var e = d.offsetHeight;
                d.clientHeight != e && (b = c.scrollHeight, e = c.offsetHeight);
                c = b > a ? b > e ? b : e : b < e ? b : e
            }
        }
        return c
    }

    function Bc(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function Cc(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!ba(f) || ca(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (ca(f)) {
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
                pa(g ? ua(f) : f, d)
            }
        }
    }

    function Dc(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function zc(a) {
        return "CSS1Compat" == a.compatMode
    }

    function Ec(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    }

    function xc(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function Fc(a, b, c, d) {
        a && !c && (a = a.parentNode);
        for (c = 0; a && (null == d || c <= d);) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function wc(a) {
        this.j = a || u.document || document
    }
    p = wc.prototype;
    p.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };
    p.createElement = function(a) {
        return Dc(this.j, a)
    };
    p.createTextNode = function(a) {
        return this.j.createTextNode(String(a))
    };
    p.append = function(a, b) {
        Cc(xc(a), a, arguments)
    };
    p.contains = Ec;

    function Gc() {
        return !(z("iPad") || z("Android") && !z("Mobile") || z("Silk")) && (z("iPod") || z("iPhone") || z("Android") || z("IEMobile"))
    };
    var Hc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    class Ic {
        constructor(a) {
            this.jc = a
        }
    }

    function Jc(a) {
        return new Ic(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const Kc = [Jc("data"), Jc("http"), Jc("https"), Jc("mailto"), Jc("ftp"), new Ic(a => /^[^:]*([/?#]|$)/.test(a))];

    function Lc(a, b = Kc) {
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof Ic && d.jc(a)) return new fc(a, ec)
        }
    };

    function Mc(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    xa(a.foo);
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

    function Nc(a) {
        return Mc(a.top) ? a.top : null
    }

    function Oc(a, b) {
        const c = Pc("SCRIPT", a);
        c.src = b instanceof cc && b.constructor === cc ? b.j : "type_error:TrustedResourceUrl";
        (b = (b = (c.ownerDocument && c.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function Qc(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Rc(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Sc(a) {
        const b = [];
        Rc(a, function(c) {
            b.push(c)
        });
        return b
    }
    var Tc = /^([0-9.]+)px$/,
        Uc = /^(-?[0-9.]{1,30})$/;

    function Vc(a) {
        if (!Uc.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function N(a) {
        return (a = Tc.exec(a)) ? +a[1] : null
    }
    var O = (a, b) => {
            Rc(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        },
        Wc = (a, b) => {
            for (a = [a]; a.length;) {
                var c = a.shift();
                !1 !== b(c) && (c = qa(c.children || c.childNodes || [], d => 1 === d.nodeType), c.length && a.unshift(...c))
            }
        },
        Yc = (a, b) => {
            if ("length" in a.style) {
                a = a.style;
                const c = a.length;
                for (let d = 0; d < c; d++) {
                    const e = a[d];
                    b(a[e], e, a)
                }
            } else a = Xc(a.style.cssText), Rc(a, b)
        },
        Xc = a => {
            const b = {};
            if (a) {
                const c = /\s*:\s*/;
                pa((a || "").split(/\s*;\s*/), d => {
                    if (d) {
                        var e = d.split(c);
                        d = e[0];
                        e = e[1];
                        d && e && (b[d.toLowerCase()] = e)
                    }
                })
            }
            return b
        },
        $c = (a, b = () => !0) => {
            const c = /!\s*important/i;
            Yc(a, (d, e) => {
                !c.test(d) && b(e, d) ? a.style.setProperty(e, d, "important") : c.test(d) && !b(e, d) && a.style.setProperty(e, d, "")
            })
        };
    const ad = {
            ["http://googleads.g.doubleclick.net"]: !0,
            ["http://pagead2.googlesyndication.com"]: !0,
            ["https://googleads.g.doubleclick.net"]: !0,
            ["https://pagead2.googlesyndication.com"]: !0
        },
        bd = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
        cd = /.*domain\.test$/,
        dd = /\.prod\.google\.com(:\d+)?$/;
    var ed = a => ad[a] || bd.test(a) || cd.test(a) || dd.test(a),
        fd = a => {
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        };

    function Pc(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    };

    function gd(a) {
        u.google_image_requests || (u.google_image_requests = []);
        const b = Pc("IMG", u.document);
        b.src = a;
        u.google_image_requests.push(b)
    };

    function hd(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    p = hd.prototype;
    p.getWidth = function() {
        return this.right - this.left
    };
    p.getHeight = function() {
        return this.bottom - this.top
    };

    function id(a) {
        return new hd(a.top, a.right, a.bottom, a.left)
    }
    p.contains = function(a) {
        return this && a ? a instanceof hd ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
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

    function jd(a, ...b) {
        if (0 === b.length) return dc(a[0]);
        const c = [a[0]];
        for (let d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return dc(c.join(""))
    };

    function P(a, b, c) {
        if ("string" === typeof b)(b = kd(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = kd(c, d);
                f && (c.style[f] = e)
            }
    }
    var ld = {};

    function kd(a, b) {
        var c = ld[b];
        if (!c) {
            var d = tc(b);
            c = d;
            void 0 === a.style[d] && (d = (Ca ? "Webkit" : Ba ? "Moz" : za ? "ms" : null) + uc(d), void 0 !== a.style[d] && (c = d));
            ld[b] = c
        }
        return c
    }

    function md(a, b) {
        var c = xc(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function nd(a, b) {
        return md(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function od(a) {
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

    function pd(a) {
        var b = xc(a),
            c = new J(0, 0);
        var d = b ? xc(b) : document;
        d = !za || 9 <= Number(La) || zc(vc(d).j) ? d.documentElement : d.body;
        if (a == d) return c;
        a = od(a);
        d = vc(b).j;
        b = d.scrollingElement ? d.scrollingElement : !Ca && zc(d) ? d.documentElement : d.body || d.documentElement;
        d = d.parentWindow || d.defaultView;
        b = za && d.pageYOffset != b.scrollTop ? new J(b.scrollLeft, b.scrollTop) : new J(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function qd(a) {
        if (1 == a.nodeType) return a = od(a), new J(a.left, a.top);
        a = a.changedTouches ? a.changedTouches[0] : a;
        return new J(a.clientX, a.clientY)
    }

    function rd(a, b) {
        if (b instanceof pc) {
            var c = b.height;
            b = b.width
        } else throw Error("missing height argument");
        a.style.width = sd(b, !0);
        a.style.height = sd(c, !0)
    }

    function sd(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    }

    function td(a) {
        var b = ud;
        if ("none" != nd(a, "display")) return b(a);
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

    function ud(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Ca && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = od(a), new pc(a.right - a.left, a.bottom - a.top)) : new pc(b, c)
    }

    function vd(a, b) {
        var c = a.currentStyle ? a.currentStyle[b] : null;
        if (c)
            if (/^\d+px?$/.test(c)) a = parseInt(c, 10);
            else {
                b = a.style.left;
                var d = a.runtimeStyle.left;
                a.runtimeStyle.left = a.currentStyle.left;
                a.style.left = c;
                c = a.style.pixelLeft;
                a.style.left = b;
                a.runtimeStyle.left = d;
                a = +c
            }
        else a = 0;
        return a
    }

    function wd(a, b) {
        if (za) {
            var c = vd(a, b + "Left"),
                d = vd(a, b + "Right"),
                e = vd(a, b + "Top");
            a = vd(a, b + "Bottom");
            return new hd(e, d, a, c)
        }
        c = md(a, b + "Left");
        d = md(a, b + "Right");
        e = md(a, b + "Top");
        a = md(a, b + "Bottom");
        return new hd(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
    };
    var xd = a => "number" === typeof a && 0 < a;
    class yd {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const zd = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Ad = class {
            constructor(a, b) {
                this.j = a;
                this.l = b
            }
        },
        Bd = class {
            constructor(a, b) {
                this.url = a;
                this.Qb = !!b;
                this.depth = null
            }
        };

    function Cd(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Dd(a, b, c, d, e) {
        const f = [];
        Rc(a, function(g, h) {
            (g = Ed(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Ed(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Ed(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Dd(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Fd(a) {
        let b = 1;
        for (const c in a.l) b = c.length > b ? c.length : b;
        return 3997 - b - a.m.length - 1
    }

    function Gd(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Fd(a) - b.length;
        if (0 > d) return "";
        a.j.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.j.length; f++) {
            const g = a.j[f],
                h = a.l[g];
            for (let l = 0; l < h.length; l++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let k = Dd(h[l], a.m, ",$");
                if (k) {
                    k = e + k;
                    if (d >= k.length) {
                        d -= k.length;
                        c += k;
                        e = a.m;
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
    class Hd {
        constructor() {
            this.m = "&";
            this.l = {};
            this.v = 0;
            this.j = []
        }
    };

    function Id(a, b) {
        0 <= b && 1 >= b && (a.j = b)
    }

    function Jd(a, b, c, d = !1, e) {
        if ((d ? a.j : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Hd ? f = c : (f = new Hd, Rc(c, (h, l) => {
                var k = f;
                const m = k.v++;
                h = Cd(l, h);
                k.j.push(m);
                k.l[m] = h
            }));
            const g = Gd(f, "/pagead/gen_204?id=" + b + "&");
            g && gd(g)
        } catch (f) {}
    }
    class Kd {
        constructor() {
            this.j = Math.random()
        }
    };
    let Ld = null;

    function Md() {
        const a = u.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Nd() {
        const a = u.performance;
        return a && a.now ? a.now() : null
    };
    class Od {
        constructor(a, b) {
            var c = Nd() || Md();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.taskId = this.slotId = void 0
        }
    };
    const Pd = u.performance,
        Qd = !!(Pd && Pd.mark && Pd.measure && Pd.clearMarks),
        Rd = Sb(() => {
            var a;
            if (a = Qd) {
                var b;
                if (null === Ld) {
                    Ld = "";
                    try {
                        a = "";
                        try {
                            a = u.top.location.hash
                        } catch (c) {
                            a = u.location.hash
                        }
                        a && (Ld = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Ld;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function Sd(a) {
        a && Pd && Rd() && (Pd.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Pd.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function Td(a) {
        a.j = !1;
        a.l != a.m.google_js_reporting_queue && (Rd() && pa(a.l, Sd), a.l.length = 0)
    }
    class Ud {
        constructor(a) {
            this.l = [];
            this.m = a || u;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.l = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.j = Rd() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.j) return null;
            a = new Od(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Pd && Rd() && Pd.mark(b);
            return a
        }
        end(a) {
            if (this.j && "number" === typeof a.value) {
                a.duration = (Nd() || Md()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                Pd && Rd() && Pd.mark(b);
                !this.j || 2048 < this.l.length ||
                    this.l.push(a)
            }
        }
    };

    function Vd(a) {
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
    class Wd {
        constructor(a, b = null) {
            this.A = a;
            this.l = null;
            this.B = this.Qa;
            this.j = b;
            this.m = !1
        }
        Eb(a) {
            this.l = a
        }
        v(a) {
            this.m = a
        }
        ya(a, b, c) {
            let d, e;
            try {
                this.j && this.j.j ? (e = this.j.start(a.toString(), 3), d = b(), this.j.end(e)) : d = b()
            } catch (f) {
                b = !0;
                try {
                    Sd(e), b = this.B(a, new yd(f, {
                        message: Vd(f)
                    }), void 0, c)
                } catch (g) {
                    this.Qa(217, g)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        O(a, b) {
            return (...c) => this.ya(a, () => b.apply(void 0, c))
        }
        Qa(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const D = new Hd;
                var g = D;
                g.j.push(1);
                g.l[1] = Cd("context",
                    a);
                b.error && b.meta && b.id || (b = new yd(b, {
                    message: Vd(b)
                }));
                if (b.msg) {
                    g = D;
                    var h = b.msg.substring(0, 512);
                    g.j.push(2);
                    g.l[2] = Cd("msg", h)
                }
                var l = b.meta || {};
                b = l;
                if (this.l) try {
                    this.l(b)
                } catch (Z) {}
                if (d) try {
                    d(b)
                } catch (Z) {}
                d = D;
                l = [l];
                d.j.push(3);
                d.l[3] = l;
                d = u;
                l = [];
                b = null;
                do {
                    var k = d;
                    if (Mc(k)) {
                        var m = k.location.href;
                        b = k.document && k.document.referrer || null
                    } else m = b, b = null;
                    l.push(new Bd(m || ""));
                    try {
                        d = k.parent
                    } catch (Z) {
                        d = null
                    }
                } while (d && k != d);
                for (let Z = 0, fa = l.length - 1; Z <= fa; ++Z) l[Z].depth = fa - Z;
                k = u;
                if (k.location && k.location.ancestorOrigins &&
                    k.location.ancestorOrigins.length == l.length - 1)
                    for (m = 1; m < l.length; ++m) {
                        var n = l[m];
                        n.url || (n.url = k.location.ancestorOrigins[m - 1] || "", n.Qb = !0)
                    }
                var q = l;
                let K = new Bd(u.location.href, !1);
                k = null;
                const L = q.length - 1;
                for (n = L; 0 <= n; --n) {
                    var r = q[n];
                    !k && zd.test(r.url) && (k = r);
                    if (r.url && !r.Qb) {
                        K = r;
                        break
                    }
                }
                r = null;
                const Wa = q.length && q[L].url;
                0 != K.depth && Wa && (r = q[L]);
                f = new Ad(K, r);
                if (f.l) {
                    q = D;
                    var t = f.l.url || "";
                    q.j.push(4);
                    q.l[4] = Cd("top", t)
                }
                var y = {
                    url: f.j.url || ""
                };
                if (f.j.url) {
                    var E = f.j.url.match(Hc),
                        G = E[1],
                        M = E[3],
                        v =
                        E[4];
                    t = "";
                    G && (t += G + ":");
                    M && (t += "//", t += M, v && (t += ":" + v));
                    var A = t
                } else A = "";
                G = D;
                y = [y, {
                    url: A
                }];
                G.j.push(5);
                G.l[5] = y;
                Jd(this.A, e, D, this.m, c)
            } catch (D) {
                try {
                    Jd(this.A, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Vd(D),
                        url: f && f.j.url
                    }, this.m, c)
                } catch (K) {}
            }
            return !0
        }
    };
    var Xd = a => "string" === typeof a,
        Yd = a => void 0 === a;
    var $d = class extends Kb {
            constructor() {
                super(void 0, -1, Zd)
            }
        },
        Zd = [9];

    function ae(a) {
        var b = new be;
        return F(b, 1, a, 0)
    }

    function ce(a, b) {
        return F(a, 2, b, !1)
    }

    function de(a, b) {
        return F(a, 3, b, !1)
    }
    var be = class extends Kb {
        constructor() {
            super()
        }
    };

    function ee(a) {
        var b = new fe;
        return F(b, 1, a, 0)
    }

    function ge(a, b) {
        return yb(a, 2, b)
    }

    function he(a, b) {
        return F(a, 3, b, 0)
    }
    var fe = class extends Kb {
        constructor() {
            super()
        }
    };

    function ie(a) {
        a && "function" == typeof a.Mb && a.Mb()
    };

    function je() {
        this.L = this.L;
        this.W = this.W
    }
    je.prototype.L = !1;
    je.prototype.Mb = function() {
        this.L || (this.L = !0, this.Ca())
    };

    function ke(a, b) {
        Q(a, ja(ie, b))
    }

    function Q(a, b) {
        a.L ? b() : (a.W || (a.W = []), a.W.push(b))
    }
    je.prototype.Ca = function() {
        if (this.W)
            for (; this.W.length;) this.W.shift()()
    };
    var R = a => {
        var b = "Bb";
        if (a.Bb && a.hasOwnProperty(b)) return a.Bb;
        b = new a;
        return a.Bb = b
    };

    function le(a, b, c) {
        return b[a] || c
    };

    function me(a, b) {
        a.j = () => le(3, b, () => [])(1)
    }
    class ne {
        j() {
            return []
        }
    };
    let oe, pe;
    const qe = new Ud(window);
    (a => {
        oe = a ? ? new Kd;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        Id(oe, window.google_srt);
        pe = new Wd(oe, qe);
        pe.Eb(() => {});
        pe.v(!0);
        "complete" == window.document.readyState ? window.google_measure_js_timing || Td(qe) : qe.j && H(window, "load", () => {
            window.google_measure_js_timing || Td(qe)
        })
    })();

    function re(a, b) {
        return void 0 !== a.j[se(b)]
    }

    function te(a) {
        const b = [];
        for (const c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.l[c]);
        return b
    }
    const S = class {
        constructor() {
            this.j = {};
            this.l = {}
        }
        set(a, b) {
            const c = se(a);
            this.j[c] = b;
            this.l[c] = a
        }
        get(a, b) {
            a = se(a);
            return void 0 !== this.j[a] ? this.j[a] : b
        }
        Ab() {
            return te(this).length
        }
        clear() {
            this.j = {};
            this.l = {}
        }
    };

    function se(a) {
        return a instanceof Object ? String(w(a)) : a + ""
    };
    var ue = class {
            constructor(a) {
                this.B = null != a.j ? a.j : !0;
                this.A = null != a.F ? a.F : 0;
                this.v = null != a.A ? a.A : .9;
                this.l = null != a.l ? a.l : 1.05;
                this.minWidth = null != a.C ? a.C : 0;
                this.C = null != a.v ? a.v : 25;
                this.m = null != a.m ? a.m : 0;
                this.G = null != a.B ? a.B : !1;
                this.F = a.G || null;
                this.j = a.L || null
            }
        },
        ve = class {
            build() {
                return new ue(this)
            }
        };

    function we(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    };

    function xe(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map)) : a.google_reactive_ads_global_state = new ye;
        return a.google_reactive_ads_global_state
    }
    class ye {
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
            this.floatingAdsStacking = new ze;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map
        }
    }
    var ze = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var Ae = 728 * 1.38,
        Be = a => a.innerHeight >= a.innerWidth,
        Ce = a => {
            const b = T(a).clientWidth;
            a = a.innerWidth;
            return b && a ? b / a : 0
        },
        T = a => {
            a = a.document;
            let b = {};
            a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
            return b || {}
        },
        De = (a, b) => {
            const c = T(a);
            return b ? c.scrollHeight == T(a).clientHeight ? c.offsetHeight : c.scrollHeight : c.offsetHeight
        },
        Ee = (a, b) => a && a.source ? a.source === b || a.source.parent === b : !1,
        U = a => void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop :
        a.pageYOffset,
        Fe = a => void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset,
        Ge = a => {
            const b = {};
            let c;
            Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
            if (c)
                for (a = 0; a < c.length; a++) {
                    const d = c[a];
                    if ("key" in d && "value" in d) {
                        const e = d.value;
                        b[d.key] = null == e ? null : String(e)
                    }
                }
            return b
        },
        He = a => {
            const b = {
                bottom: "auto",
                clear: "none",
                display: "inline",
                "float": "none",
                height: "auto",
                left: "auto",
                margin: 0,
                "margin-bottom": 0,
                "margin-left": 0,
                "margin-right": "0",
                "margin-top": 0,
                "max-height": "none",
                "max-width": "none",
                opacity: 1,
                overflow: "visible",
                padding: 0,
                "padding-bottom": 0,
                "padding-left": 0,
                "padding-right": 0,
                "padding-top": 0,
                position: "static",
                right: "auto",
                top: "auto",
                "vertical-align": "baseline",
                visibility: "visible",
                width: "auto",
                "z-index": "auto"
            };
            pa(Object.keys(b), c => {
                var d = a.style[tc(c)];
                ("undefined" !== typeof d ? d : a.style[kd(a, c)]) || P(a, c, b[c])
            });
            $c(a)
        };

    function Ie(a, b) {
        var c = T(a).clientWidth;
        var d = T(a).clientHeight;
        if ("number" !== typeof c || "number" !== typeof d) throw Error("No VP width and/or height.");
        c = new pc(c, d);
        d = Fe(a);
        a = U(a);
        a = Je(a, c.width + d, c.height + a, d);
        return (we(b, a) ? new hd(Math.max(b.top, a.top), Math.min(b.right, a.right), Math.min(b.bottom, a.bottom), Math.max(b.left, a.left)) : null) || Je(0, 0, 0, 0)
    }

    function Ke(a, b) {
        const c = Fe(b),
            d = U(b);
        if (a.getBoundingClientRect) return a = a.getBoundingClientRect(), Le(a) ? Je(a.top + d, a.right + c, a.bottom + d, a.left + c) : Je(0, 0, 0, 0);
        b = b.document.createRange();
        b.selectNodeContents(a);
        return b.collapsed ? Je(0, 0, 0, 0) : b.getBoundingClientRect ? (a = b.getBoundingClientRect(), Le(a) ? Je(a.top + d, a.right + c, a.bottom + d, a.left + c) : Je(0, 0, 0, 0)) : Je(0, 0, 0, 0)
    }

    function Le(a) {
        return !!a && "number" === typeof a.top && !isNaN(a.top) && "number" === typeof a.right && !isNaN(a.right) && "number" === typeof a.bottom && !isNaN(a.bottom) && "number" === typeof a.left && !isNaN(a.left)
    }
    const Je = (a, b, c, d) => new hd(Math.ceil(a), Math.floor(b), Math.floor(c), Math.ceil(d));

    function Me(a, b) {
        Ne(a).forEach(b, void 0)
    }

    function Ne(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };
    const Oe = class {
        constructor(a) {
            this.j = new S;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.j.set(a, !0)
        }
        contains(a) {
            return re(this.j, a)
        }
    };
    class Pe {
        constructor(a, b) {
            this.j = a[u.Symbol.iterator]();
            this.l = b
        }[Symbol.iterator]() {
            return this
        }
        next() {
            const a = this.j.next();
            return {
                value: a.done ? void 0 : this.l.call(void 0, a.value),
                done: a.done
            }
        }
    }

    function Qe(a, b) {
        return new Pe(a, b)
    };

    function Re() {}
    Re.prototype.next = function() {
        return Se
    };
    var Se = {
        done: !0,
        value: void 0
    };
    Re.prototype.Aa = function() {
        return this
    };

    function Te(a) {
        if (a instanceof Re) return a;
        if ("function" == typeof a.Aa) return a.Aa(!1);
        if (ba(a)) {
            let b = 0;
            const c = new Re;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) return Se;
                    if (b in a) return {
                        value: a[b++],
                        done: !1
                    };
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    }

    function Ue(a) {
        a = Te(a);
        const {
            done: b,
            value: c
        } = a.next();
        return b ? null : c
    };

    function Ve(a) {
        if (a instanceof We || a instanceof Xe || a instanceof Ye) return a;
        if ("function" == typeof a.next) return new We(() => a);
        if ("function" == typeof a[Symbol.iterator]) return new We(() => a[Symbol.iterator]());
        if ("function" == typeof a.Aa) return new We(() => a.Aa());
        throw Error("Not an iterator or iterable.");
    }
    class We {
        constructor(a) {
            this.j = a
        }
        Aa() {
            return new Xe(this.j())
        }[Symbol.iterator]() {
            return new Ye(this.j())
        }
        l() {
            return new Ye(this.j())
        }
    }
    class Xe extends Re {
        constructor(a) {
            super();
            this.j = a
        }
        next() {
            return this.j.next()
        }[Symbol.iterator]() {
            return new Ye(this.j)
        }
        l() {
            return new Ye(this.j)
        }
    }
    class Ye extends We {
        constructor(a) {
            super(() => a);
            this.m = a
        }
        next() {
            return this.m.next()
        }
    };

    function Ze(a, b) {
        this.l = {};
        this.j = [];
        this.m = this.size = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof Ze)
                for (c = $e(a), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    }
    p = Ze.prototype;
    p.Ab = function() {
        return this.size
    };

    function $e(a) {
        af(a);
        return a.j.concat()
    }
    p.has = function(a) {
        return Object.prototype.hasOwnProperty.call(this.l, a)
    };
    p.isEmpty = function() {
        return 0 == this.size
    };
    p.clear = function() {
        this.l = {};
        this.m = this.size = this.j.length = 0
    };

    function af(a) {
        if (a.size != a.j.length) {
            for (var b = 0, c = 0; b < a.j.length;) {
                var d = a.j[b];
                Object.prototype.hasOwnProperty.call(a.l, d) && (a.j[c++] = d);
                b++
            }
            a.j.length = c
        }
        if (a.size != a.j.length) {
            var e = {};
            for (c = b = 0; b < a.j.length;) d = a.j[b], Object.prototype.hasOwnProperty.call(e, d) || (a.j[c++] = d, e[d] = 1), b++;
            a.j.length = c
        }
    }
    p.get = function(a, b) {
        return Object.prototype.hasOwnProperty.call(this.l, a) ? this.l[a] : b
    };
    p.set = function(a, b) {
        Object.prototype.hasOwnProperty.call(this.l, a) || (this.size += 1, this.j.push(a), this.m++);
        this.l[a] = b
    };
    p.forEach = function(a, b) {
        for (var c = $e(this), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    p.keys = function() {
        return Ve(this.Aa(!0)).l()
    };
    p.values = function() {
        return Ve(this.Aa(!1)).l()
    };
    p.entries = function() {
        const a = this;
        return Qe(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    p.Aa = function(a) {
        af(this);
        var b = 0,
            c = this.m,
            d = this,
            e = new Re;
        e.next = function() {
            if (c != d.m) throw Error("The map has changed since the iterator was created");
            if (b >= d.j.length) return Se;
            var f = d.j[b++];
            return {
                value: a ? f : d.l[f],
                done: !1
            }
        };
        return e
    };

    function bf(a) {
        return "transparent" == a || "rgba" == a.substring(0, 4) && (a = a.split(","), 4 == a.length && .5 > parseFloat(a[3])) ? !0 : !1
    }

    function cf() {
        pa(df, a => {
            a.L = null;
            a.C = null
        })
    }

    function ef(a) {
        if (!a.D.ownerDocument) throw Error("Wrapped node should have an owner document.");
        return a.D.ownerDocument
    }

    function ff(a) {
        a = ef(a);
        return a.defaultView || a.parentWindow
    }

    function gf(a) {
        const b = a.m.j(a.m.l);
        return b == a || b != a && Ec(b.D, a.D)
    }

    function hf(a) {
        return Ne(a.D.childNodes).map(b => a.m.j(b)).filter(Rb(b => null === b))
    }

    function jf(a) {
        if (!a.j()) return null;
        const b = hf(a.j());
        a = oa(b, a);
        if (-1 == a) return null;
        for (a += 1; a < b.length; ++a)
            if (b[a].v() || b[a].I()) return b[a];
        return null
    }

    function kf(a) {
        const b = jf(a);
        return b ? b : a.j() ? kf(a.j()) : null
    }

    function lf(a, b) {
        b.push(a);
        a = hf(a);
        for (let c = 0; c < a.length; ++c) lf(a[c], b)
    }

    function mf(a) {
        var b = a.l();
        if (0 != b.top || 0 != b.right || 0 != b.bottom || 0 != b.left) {
            var c = Fe(ff(a));
            a = U(ff(a));
            c = -c;
            a = -a;
            c instanceof J ? (b.left += c.x, b.right += c.x, b.top += c.y, b.bottom += c.y) : (b.left += c, b.right += c, "number" === typeof a && (b.top += a, b.bottom += a))
        }
        return b
    }

    function V(a, b) {
        if (1 != a.D.nodeType) return null;
        a.A = a.A || ff(a).getComputedStyle(a.D);
        return a.A ? a.A[b] || a.A.getPropertyValue(b) || "" : ""
    }

    function nf(a, b, c) {
        if (void 0 !== a.F[b]) return a.F[b];
        a.F[b] = of (a, b, c);
        return a.F[b]
    }

    function pf(a) {
        if (void 0 !== a.H) return a.H;
        var b = V(a, "position");
        if ("fixed" == b || "sticky" == b) b = a;
        else {
            var c = a.j();
            b = c && "BODY" != a.D.tagName ? (c = pf(c)) || "absolute" != b && "relative" != b ? c : a : null
        }
        a.H = b;
        return a.H
    }

    function qf(a, b) {
        const c = pf(a);
        if (c && "relative" != V(c, "position"))
            if (null != b) a: {
                do {
                    const d = a.l();
                    if ((d.right - d.left) * (d.bottom - d.top) > b) {
                        b = !1;
                        break a
                    }
                    if (a == c) break;
                    a = a.j()
                } while (null !== a);b = !0
            }
        else b = !0;
        else b = !1;
        return b
    }

    function of (a, b, c) {
        const d = V(a, "position");
        a: switch (b) {
            case 0:
                var e = "hidden" == V(a, "overflow") || "scroll" == V(a, "overflow") || "hidden" == V(a, "overflow-x") || "scroll" == V(a, "overflow-x");
                break a;
            case 1:
                e = "hidden" == V(a, "overflow") || "scroll" == V(a, "overflow") || "hidden" == V(a, "overflow-y") || "scroll" == V(a, "overflow-y");
                break a;
            default:
                throw Error("Unknown pageAxis: " + b);
        }
        switch (d) {
            case "fixed":
                if (e) return a;
                break;
            case "static":
            case "":
            case null:
                if (e && !c) return a;
                if (a.j()) return nf(a.j(), b, c);
                break;
            case "absolute":
            case "relative":
                if (e) return a;
                if (a.j()) return nf(a.j(), b, "absolute" == d);
                break;
            default:
                u.console.error("Unknown position value: " + d)
        }
        return null
    }

    function rf(a) {
        var b = a.D.scrollHeight;
        const c = a.D.clientHeight,
            d = ef(a).createElement("div");
        d.style.width = "100%";
        d.style.height = Math.max(b, c) + 100 + "px";
        d.style.clear = "both";
        a.D.appendChild(d);
        b = a.D.scrollHeight > a.D.clientHeight && a.D.scrollHeight - b > a.D.clientHeight - c;
        a.D.removeChild(d);
        return b
    }

    function sf(a) {
        return null !== a.G ? a.G : "1" != V(a, "opacity") || a.j() && !sf(a.j()) ? a.G = !1 : a.G = !0
    }

    function tf(a) {
        a = a.l();
        a = new hd(Math.max(a.top, 0), Math.max(a.right, 0), Math.max(a.bottom, 0), Math.max(a.left, 0));
        return a.left < a.right && a.top < a.bottom
    }

    function uf(a) {
        return null !== a.B ? a.B : a.j() && uf(a.j()) || "0" == V(a, "opacity") || "none" == V(a, "display") || "hidden" == V(a, "visibility") || a.D.tagName && "input" == a.D.tagName.toLowerCase() && a.D.type && "hidden" == a.D.type ? a.B = !0 : a.B = !1
    }

    function vf(a, b) {
        return b(a) ? !0 : a.j() ? vf(a.j(), b) : !1
    }

    function wf(a) {
        return !vf(a, b => "hidden" == V(b, "overflow-y"))
    }

    function xf(a) {
        a = V(a, "position");
        return "absolute" == a || "relative" == a
    }

    function yf(a) {
        return a.v() && (a = parseInt(V(a, "z-index"), 10), !isNaN(a)) ? a : 0
    }

    function zf(a, b) {
        return vf(a, c => !!c.D.tagName && c.D.tagName == b)
    }

    function Af(a, b) {
        return vf(a, c => {
            c = c.D;
            return !!c.id && !!c.id.match && !!c.id.match(b)
        })
    }

    function Bf(a, b) {
        return vf(a, c => {
            a: {
                c = Cf(c);
                for (let d = 0; d < c.length; ++d)
                    if (c[d].match(b)) {
                        c = !0;
                        break a
                    }
                c = !1
            }
            return c
        })
    }

    function Cf(a) {
        return (a = a.D.className) && "function" === typeof a.split ? /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1].split(/\s+/) : []
    }

    function Df(a) {
        return "A" == a.D.tagName ? a.D.getAttribute("href") : (a = a.j()) ? Df(a) : null
    }

    function Ef(a) {
        if (1 != a.D.nodeType) {
            var b = a.j();
            return b ? Ef(b) : 0
        }
        const c = ef(a).createTextNode("A");
        a.D.appendChild(c);
        b = a.m.j(c);
        if (!b) throw a.D.removeChild(c), Error("Unable to insert textnode");
        a = b.l();
        b.D.parentNode && b.D.parentNode.removeChild(b.D);
        return a.bottom - a.top
    }

    function Ff(a, b) {
        if (b || null == a.W) {
            if (b && !b(a)) return 0;
            let c = 0;
            if (a.I()) c = a.D.textContent.trim().length;
            else {
                const d = hf(a);
                for (let e = 0; e < d.length; e++) c += Ff(d[e], b)
            }
            b || (a.W = c);
            return c
        }
        return a.W
    }
    class Gf {
        constructor(a, b) {
            this.D = a;
            this.m = b;
            this.B = this.G = this.J = this.K = null;
            this.F = {};
            this.A = this.C = this.W = null;
            new Ze
        }
        j() {
            return this.D != this.m.l && this.D.parentNode ? this.m.j(this.D.parentNode) : null
        }
        v() {
            return 1 == this.D.nodeType
        }
        I() {
            return 3 == this.D.nodeType
        }
        l() {
            if (!this.L) {
                this.C || (this.C = Ke(this.D, ff(this)));
                var a = id(this.C);
                var b = V(this, "position");
                if ("fixed" == b) a = Ie(ff(this), a);
                else if (this.j()) {
                    var c = nf(this.j(), 0, "absolute" == b);
                    if (c) {
                        var d = c.l();
                        c = d.left;
                        d = d.right;
                        a = a.left >= d || a.right <= c ? null :
                            Je(a.top, Math.min(a.right, d), a.bottom, Math.max(a.left, c))
                    }
                    a && (b = nf(this.j(), 1, "absolute" == b)) && (c = b.l(), b = c.top, c = c.bottom, a = a.top >= c || a.bottom <= b ? null : Je(Math.max(a.top, b), a.right, Math.min(a.bottom, c), a.left));
                    a = a && pf(this) && "fixed" == V(pf(this), "position") ? Ie(ff(this), a) : a || new hd(0, 0, 0, 0)
                }
                this.L = a
            }
            return id(this.L)
        }
        Ka() {
            return !tf(this) || uf(this)
        }
        Cb() {
            var a = V(this, "background-color");
            if (a = a ? bf(a) : !0) a = V(this, "background-image"), a = !(a && "none" != a);
            return a
        }
        toString() {
            switch (this.D.nodeType) {
                case 1:
                    const a =
                        this.D;
                    let b = a.tagName;
                    a.id && (b += "#" + a.id);
                    a.className && "function" === typeof a.className.split && (b += "." + a.className.split(/\s+/).join("."));
                    return b;
                case 3:
                    return "TEXT#" + this.D.textContent.substr(0, 10);
                default:
                    return "HtmlNode"
            }
        }
    }

    function Hf(a, b) {
        const c = w(b);
        var d = a.v.get(c);
        if ("boolean" === typeof d) return d;
        d = a.A && 3 == b.nodeType ? !/\S/.test(b.data) : 1 != b.nodeType && 3 != b.nodeType && 9 != b.nodeType || b.tagName && ("SCRIPT" == b.tagName || "STYLE" == b.tagName) ? !0 : !1;
        !d && b.parentNode && b != a.l && (d = Hf(a, b.parentNode));
        a.v.set(c, d);
        return d
    }
    var If = class {
            constructor(a, b) {
                this.l = a;
                this.A = b;
                this.v = new S;
                this.m = new S
            }
            j(a) {
                const b = w(a),
                    c = this.m.get(b);
                if (c) return c;
                if (Hf(this, a)) return null;
                a = new Gf(a, this);
                this.m.set(b, a);
                return a
            }
        },
        df = [];
    class Jf {
        constructor(a, b) {
            this.m = a;
            this.l = b
        }
        j(a) {
            return Kf(this.m, a).contains(this.l)
        }
    };

    function Kf(a, b) {
        const c = w(b),
            d = a.l.get(c);
        if (d) return d;
        b = a.j(b);
        a.l.set(c, b);
        return b
    }
    class Lf {
        constructor() {
            this.l = new S
        }
    };

    function Mf(a, b) {
        let c = Df(b);
        if (a.m.j(b) && null !== c) return c;
        b = hf(b);
        if (1 > b.length) return null;
        c = Mf(a, b[0]);
        for (let d = 1; d < b.length; ++d)
            if (Mf(a, b[d]) != c) return null;
        return c
    }
    class Nf extends Lf {
        constructor(a) {
            super();
            this.m = a
        }
        j(a) {
            return new Oe(null !== Mf(this, a) ? [1] : [])
        }
    };
    class Of extends Lf {
        constructor(a) {
            super();
            this.m = a
        }
        j(a) {
            a: if (3 == a.D.nodeType) var b = this.m.j(a);
                else {
                    b = !1;
                    a = hf(a);
                    for (let c of a) {
                        if ((a = V(c, "display")) && "inline" != a) {
                            b = !1;
                            break a
                        }
                        Kf(this, c).contains(0) && (b = !0)
                    }
                }return new Oe(b ? [0] : [])
        }
    };

    function Pf(a, b) {
        return Ff(b, c => !a.m.j(c))
    }
    class Qf extends Lf {
        constructor(a, b, c) {
            super();
            this.v = a;
            this.m = b;
            this.A = c
        }
        j(a) {
            if (this.v.j(a) && !this.m.j(a) && !this.A.j(a) && 50 <= Pf(this, a)) {
                var b = Ef(a);
                a = a.l();
                b = a.bottom - a.top >= 2 * b || !1
            } else b = !1;
            return new Oe(b ? [3] : [])
        }
    };

    function Rf(a) {
        return a.classList ? a.classList.contains("adsbygoogle") : ta(a.classList ? a.classList : ("string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || "").match(/\S+/g) || [], "adsbygoogle")
    };

    function Sf(a, b) {
        return a.m.j(b) ? vf(b, function(c) {
            switch (c.D.tagName) {
                case "H1":
                case "H2":
                case "H3":
                case "H4":
                case "H5":
                case "H6":
                    return !0
            }
            return !1
        }) || Tf(b) && 5 <= Ff(b) ? !0 : (b = b.j()) ? Kf(a, b).contains(2) : !1 : !1
    }

    function Tf(a) {
        a = Cf(a);
        for (let b of a)
            if (b.match(/title|titulo|hdg|heading|header|^h[1-6]$/) && !b.match(/subtitle/)) return !0;
        return !1
    }
    class Uf extends Lf {
        constructor(a) {
            super();
            this.m = a
        }
        j(a) {
            return new Oe(Sf(this, a) ? [2] : [])
        }
    };

    function Vf(a) {
        const b = [];
        pa(a, c => {
            1 == c.D.nodeType && (Wf(c, ":before", b), Wf(c, ":after", b))
        });
        return b
    }

    function Xf(a) {
        a = V(a, "content");
        if (!a || "none" == a || /\(.*\)/.test(a)) return !1;
        /^['"].*['"]$/.test(a) && (a = a.substring(1, a.length - 1));
        return 0 < a.trim().length
    }
    class Yf extends Gf {
        constructor(a, b) {
            super(a.D, a.m);
            this.M = a;
            this.Ca = b;
            this.A = ff(a).getComputedStyle(a.D, this.Ca)
        }
        v() {
            return !1
        }
        I() {
            return !1
        }
        Ka() {
            if (!Xf(this) && this.Cb()) var a = !0;
            else if (!(a = this.j().Ka() || uf(this) || !tf(this))) {
                a = Xf(this);
                const c = V(this, "width");
                var b = V(this, "height");
                b = a && "auto" == b || 0 < parseFloat(b);
                a = !((a && "auto" == c || 0 < parseFloat(c)) && b)
            }
            return a
        }
        j() {
            return this.M
        }
        Cb() {
            const a = nd(this.j().D, "backgroundColor"),
                b = V(this, "background-color");
            return null == b || b == a || bf(b) || "fixed" != V(this,
                "position")
        }
        l() {
            switch (V(this, "position")) {
                case "absolute":
                    var a = this.j().l();
                    const b = a.top + parseInt(V(this, "top"), 10);
                    a = a.left + parseInt(V(this, "left"), 10);
                    let c = parseInt(V(this, "width"), 10),
                        d = parseInt(V(this, "height"), 10);
                    return new hd(b, a + c, b + d, a);
                case "fixed":
                    return new hd(0, parseInt(V(this, "width"), 10), parseInt(V(this, "height"), 10), 0);
                default:
                    return this.j().l()
            }
        }
    }
    const Wf = (a, b, c) => {
        if (":before" == b || ":after" == b) {
            var d = new Yf(a, b);
            if (!d.Ka()) switch (c.push(d), b) {
                case ":before":
                    a.K = d;
                    break;
                case ":after":
                    a.J = d;
                    break;
                default:
                    throw Error("Unsupported pseudo type " + b);
            }
        }
    };
    const Zf = new Oe("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));
    class $f extends Lf {
        j(a) {
            var b = a.D,
                c = ef(a);
            if (3 == b.nodeType) {
                var d = b.data;
                c = -1 != d.indexOf("&") ? qc(d, c) : d;
                c = /\S/.test(c)
            } else c = !1;
            (c = c || (a instanceof Yf ? Xf(a) : !1)) || (c = (b = b.tagName) && Zf.contains(b.toUpperCase()));
            a = c && !a.Ka();
            return new Oe(a ? [6] : [])
        }
    };

    function ag(a) {
        a.A || (a.A = new $f);
        return a.A
    }

    function bg(a) {
        a.l || (a.l = new Of(new Jf(ag(a), 6)));
        return a.l
    }

    function cg(a) {
        a.m || (a.m = new Uf(new Jf(bg(a), 0)));
        return a.m
    }
    class dg {
        constructor() {
            this.v = this.m = this.j = this.l = this.A = null
        }
    };
    const eg = class {
        constructor() {
            this.j = new dg
        }
    };

    function fg(a) {
        const b = [];
        for (const c of a.j) b.push(c);
        return b
    }
    class gg {
        constructor() {
            this.j = [];
            this.m = new Oe
        }
        contains(a) {
            return this.m.contains(w(a))
        }
    };
    class hg {
        constructor(a, b, c) {
            this.j = a;
            this.l = b;
            this.m = c
        }
        ca() {
            return this.m
        }
    }
    const jg = (a, b, c) => {
            b = ig(a.K, b, c);
            const d = new hg(a, 0, b++);
            c.pa.push(d);
            for (var e of hf(a)) b = jg(e, b, c);
            e = new hg(a, 1, b++);
            c.pa.push(e);
            c.map.set(w(a), {
                start: d,
                end: e
            });
            return b = ig(a.J, b, c)
        },
        ig = (a, b, c) => {
            if (!a) return b;
            const d = new hg(a, 0, b++),
                e = new hg(a, 1, b++);
            c.pa.push(d);
            c.pa.push(e);
            c.map.set(w(a), {
                start: d,
                end: e
            });
            return b
        };

    function kg(a) {
        if (a instanceof Yf) return !0;
        if (!a.v()) return !1;
        const b = a.D,
            c = V(a, "position");
        if ("HTML" == b.tagName || "fixed" == c || "auto" != V(a, "z-index") && ("absolute" == c || "relative" == c)) return !0;
        a = V(a, "opacity");
        return "1" != a && "" != a ? !0 : !1
    }

    function lg(a) {
        const b = a.j.j();
        return b ? mg(a.l, b) : null
    }
    class ng {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    }

    function og(a, b, c) {
        var d = mg(a.j, b);
        a = mg(a.j, c);
        d = pg(d, a);
        if (!d) return 0;
        switch (d.ub) {
            case 0:
                return yf(b) - yf(d.pb.j);
            case 1:
                return yf(d.ob.j) - yf(c);
            case 2:
                return yf(d.ob.j) - yf(d.pb.j);
            default:
                throw Error("Unhandled adjacency.");
        }
    }
    var rg = class {
        constructor() {
            this.j = new qg
        }
    };

    function mg(a, b) {
        const c = w(b);
        var d = a.j.get(c);
        if (d) return d;
        d = b.j();
        b = !d || kg(b) ? new ng(b, a) : mg(a, d);
        a.j.set(c, b);
        return b
    }
    var qg = class {
        constructor() {
            this.j = new S
        }
    };

    function pg(a, b) {
        if (a == b) return null;
        const c = new S;
        var d = b;
        let e;
        for (; e = lg(d);) {
            if (a == e) return {
                ob: a,
                ub: 0,
                pb: d
            };
            c.set(w(e), d);
            d = e
        }
        for (; e = lg(a);) {
            if (e == b) return {
                ob: a,
                ub: 1,
                pb: b
            };
            if (d = c.get(w(e))) return {
                ob: a,
                ub: 2,
                pb: d
            };
            a = e
        }
        throw Error("Contexts not in same DOM.");
    };

    function sg(a, b, c, d = []) {
        a = [].concat(a, d);
        b = new tg(b, c);
        for (let e of a) e.Cb() || e.Ka() || (c = b, a = e, c.j.push(a), c.m.add(w(a)));
        return b
    }
    class tg extends gg {
        constructor(a, b) {
            super();
            this.l = a;
            this.A = b
        }
        v(a, b = !1) {
            const c = a.l();
            b = b ? fg(this) : this.j.slice(0);
            for (let f = 0; f < b.length; ++f) {
                var d = b[f];
                if (!gf(d)) continue;
                var e = d.l();
                if (!we(e, c)) continue;
                const g = og(this.A, d, a);
                !(e = 0 < g) && (e = 0 == g && !(d != a && Ec(d.D, a.D))) && (e = a, xf(d) && !xf(e) ? e = !0 : !xf(d) && xf(e) ? e = !1 : (e = this.l.map.get(w(e)), d = this.l.map.get(w(d)), e = e && d && e.end.ca() < d.start.ca() ? !0 : !1));
                if (e) return !0
            }
            return !1
        }
    };
    class ug {
        constructor(a, b) {
            this.kc = a;
            this.qc = b
        }
    };

    function vg(a, b) {
        let c = 0,
            d = null;
        const e = a.j.slice(0);
        for (let f = 0; f < e.length; ++f) {
            const g = a.l.map.get(w(e[f]));
            g.end.ca() < b && g.end.ca() > c && (d = g, c = g.end.ca())
        }
        return d
    }
    class wg extends gg {
        constructor(a) {
            super();
            this.l = a
        }
    };
    const xg = class extends wg {
        constructor(a, b) {
            super(a);
            this.A = b
        }
        v(a, b = !1) {
            const c = a.l(),
                d = qf(a);
            b = b ? fg(this) : this.j.slice(0);
            for (let e = 0; e < b.length; ++e) {
                const f = b[e];
                if (gf(f) && (d || !(0 < og(this.A, a, f))) && we(b[e].l(), c)) return !0
            }
            return !1
        }
    };
    const yg = class {
        constructor(a, b, c) {
            this.l = a;
            this.m = b;
            this.j = c
        }
    };
    const zg = class {
        constructor(a, b, c, d, e, f, g, h) {
            this.l = a;
            this.A = b;
            this.P = c;
            this.T = d;
            this.v = e;
            this.m = f;
            this.j = g;
            this.B = h
        }
    };
    const Ag = class {
        constructor(a, b, c, d) {
            this.l = a;
            this.v = b;
            this.m = c;
            this.j = d
        }
    };
    class Bg {
        constructor(a, b) {
            this.l = a;
            this.m = b
        }
        j(a) {
            if (!a) return [9];
            a = a.l();
            a = a.right - a.left;
            return this.l <= a && a <= this.m ? [] : [4]
        }
    };
    const Cg = class {
        constructor(a, b) {
            this.j = a;
            this.l = b || null
        }
    };

    function Dg(a) {
        if (0 != a.m) throw Error("Already resolved/rejected.");
    }
    var Gg = class {
        constructor() {
            this.j = new Eg(this);
            this.m = 0
        }
        resolve(a) {
            Dg(this);
            this.m = 1;
            this.A = a;
            Fg(this.j)
        }
        l(a) {
            Dg(this);
            this.m = 2;
            this.v = a;
            Fg(this.j)
        }
    };

    function Fg(a) {
        switch (a.j.m) {
            case 0:
                break;
            case 1:
                a.l && a.l(a.j.A);
                break;
            case 2:
                a.m && a.m(a.j.v);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    }
    var Eg = class {
        constructor(a) {
            this.j = a
        }
        then(a, b) {
            if (this.l) throw Error("Then functions already set.");
            this.l = a;
            this.m = b;
            Fg(this)
        }
    };

    function Hg(a, b, c) {
        var d = new Gg;
        a.j(new Cg(function() {
            d.resolve(b())
        }, c));
        return d.j
    }

    function Ig(a, b, c, d) {
        a.j(new Cg(function() {
            b.resolve(c)
        }, d))
    }

    function Jg(a, b) {
        a.j(new Cg(function() {
            b.l("n")
        }, "rrej"))
    }
    var Kg = class {};
    class Lg {
        constructor(a) {
            this.j = a
        }
    };

    function Mg(a, b) {
        var c = new Gg;
        a.j.j(new Cg(function() {
            Ng(a, b, c)
        }, "idom"));
        return c.j
    }

    function Og(a) {
        return Hg(a.j, function() {
            return new eg
        }, "icla")
    }

    function Pg(a, b, c) {
        var d = new Gg;
        Qg(a, b, new Lg(c.j)).then(function(e) {
            Rg(a, b).then(function(f) {
                Sg(a, b, e).then(function(g) {
                    d.resolve(new yg(f, g, e))
                })
            })
        });
        return d.j
    }

    function Tg(a, b, c) {
        var d = new Gg;
        Mg(a, b).then(function(e) {
            Og(a).then(function(f) {
                Pg(a, e, f).then(function(g) {
                    Ig(a.j, d, new Ag(e, g, f, c))
                }, x(d.l, d))
            }, x(d.l, d))
        }, x(d.l, d));
        return d.j
    }

    function Ng(a, b, c) {
        var d = b.document.body;
        if (d) {
            var e = b.document.body.getBoundingClientRect().width;
            if (null == e) c.l("bw");
            else {
                var f = T(b).clientWidth,
                    g = T(b).clientHeight;
                if (null == f || null == g) c.l("vp");
                else {
                    var h = (new If(d, !0)).j(d);
                    if (h) {
                        var l = new rg;
                        Ug(a, h).then(function(k) {
                            df = k;
                            Vg(a, h).then(function(m) {
                                c.resolve(new zg(b, e, f, g, h, k, m, l))
                            })
                        })
                    } else c.l("nt")
                }
            }
        } else c.l("b")
    }

    function Ug(a, b) {
        return Hg(a.j, function() {
            const c = [];
            lf(b, c);
            return c
        }, "iflt")
    }

    function Vg(a, b) {
        return Hg(a.j, function() {
            const c = {
                map: new S,
                pa: []
            };
            jg(b, 0, c);
            return c
        }, "intm")
    }

    function Qg(a, b, c) {
        return Hg(a.j, function() {
            var d = b.m;
            const e = new xg(b.j, b.B),
                f = new Jf(ag(c.j), 6);
            for (let h of d)
                if (f.j(h)) {
                    d = e;
                    var g = h;
                    d.j.push(g);
                    d.m.add(w(g))
                }
            return e
        }, "ivis")
    }

    function Rg(a, b) {
        return Hg(a.j, function() {
            var c = Vf(b.m);
            return sg(b.m, b.j, b.B, c)
        }, "ibck")
    }

    function Sg(a, b, c) {
        return Hg(a.j, function() {
            var d = b.j;
            const e = new S;
            var f = 0;
            for (var g = 0; g < d.pa.length; ++g) {
                var h = d.pa[g],
                    l = h.j,
                    k;
                if (k = 1 == h.l) k = V(l, "float"), k = "left" == k || "right" == k;
                k && (l = l.l().bottom, l > f && (f = l));
                e.set(w(h), f)
            }
            f = new S;
            g = Number.MAX_VALUE;
            for (h = d.pa.length - 1; 0 <= h; --h) l = d.pa[h], k = l.j, 0 == l.l && c.contains(k) && (k = k.l().top, k < g && (g = k)), f.set(w(l), g);
            d = new S;
            g = te(e);
            for (h = 0; h < g.length; ++h) {
                l = e.get(g[h]);
                k = f.get(g[h]);
                if ("number" !== typeof k) throw Error("No entry in minSubsequentTopBounds for terminal UID!");
                d.set(g[h], new ug(l, k))
            }
            return d
        }, "irel")
    }
    var Wg = class {
        constructor(a) {
            this.j = a
        }
    };

    function Xg(a) {
        var b = [];
        Me(a.getElementsByTagName("p"), function(c) {
            100 <= Yg(c) && b.push(c)
        });
        return b
    }

    function Yg(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        Me(a.childNodes, function(c) {
            b += Yg(c)
        });
        return b
    }

    function Zg(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function $g(a, b) {
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
    const ah = class {
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
            a = ua(b);
            a = $g(this, a);
            "number" === typeof this.l && (b = this.l, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
            if ("number" === typeof this.m) {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = Xg(a[c]),
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

    function bh(a) {
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
    class ch {
        constructor(a = 1) {
            this.j = a
        }
        next() {
            var a = 48271 * this.j % 2147483647;
            this.j = 0 > 2147483647 * a ? a + 2147483647 : a;
            return this.j / 2147483647
        }
    };

    function dh(a, b, c) {
        const d = [];
        for (const e of a.j) b(e) ? d.push(e) : c(e);
        return new eh(d)
    }

    function fh(a, b = 1) {
        a = a.j.slice(0);
        const c = new ch(b);
        wa(a, () => c.next());
        return new eh(a)
    }
    const eh = class {
        constructor(a) {
            this.j = a.slice(0)
        }
        forEach(a) {
            this.j.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new eh(qa(this.j, a))
        }
        apply(a) {
            return new eh(a(this.j.slice(0)))
        }
        sort(a) {
            return new eh(this.j.slice(0).sort(a))
        }
        get(a) {
            return this.j[a]
        }
        add(a) {
            const b = this.j.slice(0);
            b.push(a);
            return new eh(b)
        }
    };
    var hh = class extends Kb {
            constructor(a) {
                super(a, -1, gh)
            }
            getId() {
                return C(this, 3)
            }
        },
        gh = [4];
    class ih {
        constructor(a, {
            Wb: b,
            Pc: c,
            Zc: d,
            yc: e
        }) {
            this.A = a;
            this.l = c;
            this.v = new eh(b || []);
            this.j = e;
            this.m = d
        }
    };
    var jh = a => {
            var b = a.split("~").filter(c => 0 < c.length);
            a = new S;
            for (const c of b) b = c.indexOf("."), -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        lh = a => {
            var b = kh(a);
            a = [];
            for (let c of b) b = String(c.Ua), a.push(c.Na + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const kh = a => {
            const b = [],
                c = a.v;
            c && c.j.length && b.push({
                Na: "a",
                Ua: mh(c)
            });
            null != a.l && b.push({
                Na: "as",
                Ua: a.l
            });
            null != a.m && b.push({
                Na: "i",
                Ua: String(a.m)
            });
            null != a.j && b.push({
                Na: "rp",
                Ua: String(a.j)
            });
            b.sort(function(d, e) {
                return d.Na.localeCompare(e.Na)
            });
            b.unshift({
                Na: "t",
                Ua: nh(a.A)
            });
            return b
        },
        nh = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        mh = a => {
            a = a.j.slice(0).map(oh);
            a = JSON.stringify(a); {
                const c = a.length;
                if (0 == c) a = 0;
                else {
                    var b = 305419896;
                    for (let d = 0; d <
                        c; d++) b ^= (b << 5) + (b >> 2) + a.charCodeAt(d) & 4294967295;
                    a = 0 < b ? b : 4294967296 + b
                }
            }
            return a
        },
        oh = a => {
            const b = {};
            null != C(a, 7) && (b.q = C(a, 7));
            null != C(a, 2) && (b.o = C(a, 2));
            null != C(a, 5) && (b.p = C(a, 5));
            return b
        };
    var ph = class extends Kb {
        constructor(a) {
            super(a)
        }
        setLocation(a) {
            return ob(this, 1, a)
        }
    };
    var qh = class {
        constructor(a, b = !1) {
            this.j = a;
            this.defaultValue = b
        }
    };
    var rh = new qh(1196),
        sh = new qh(313),
        th = new qh(1233),
        uh = new qh(1232),
        vh = new qh(1225),
        wh = new qh(1147),
        xh = new qh(1957, !0),
        yh = new class {
            constructor(a, b = 0) {
                this.j = a;
                this.defaultValue = b
            }
        }(1972);
    var zh = class {
        constructor() {
            const a = {};
            this.j = (b, c) => null != a[b] ? a[b] : c;
            this.l = (b, c) => null != a[b] ? a[b] : c;
            this.v = (b, c) => null != a[b] ? a[b] : c;
            this.A = (b, c) => null != a[b] ? a[b] : c;
            this.m = () => {}
        }
    };

    function Ah(a) {
        return R(zh).j(a.j, a.defaultValue)
    };

    function Bh(a, b, c) {
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
        bh(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function Ch(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            bh(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var Eh = (a, b, c) => {
        if (Ah(sh)) {
            var d = Dh(b, c);
            if (d.Ia) {
                for (c = b = d.Ia; c = d.ba(c);) b = c;
                d = {
                    anchor: b,
                    position: d.jb
                }
            } else d = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = 0;
            Bh(a, d.anchor, d.position)
        } else Bh(a, b, c)
    };

    function Dh(a, b) {
        const c = e => {
                e = Fh(e);
                return null == e ? !1 : 0 < e
            },
            d = e => {
                e = Fh(e);
                return null == e ? !1 : 0 > e
            };
        switch (b) {
            case 0:
                return {
                    Ia: Gh(a.previousSibling, c),
                    ba: e => Gh(e.previousSibling, c),
                    jb: 0
                };
            case 2:
                return {
                    Ia: Gh(a.lastChild, c),
                    ba: e => Gh(e.previousSibling, c),
                    jb: 0
                };
            case 3:
                return {
                    Ia: Gh(a.nextSibling, d),
                    ba: e => Gh(e.nextSibling, d),
                    jb: 3
                };
            case 1:
                return {
                    Ia: Gh(a.firstChild, d),
                    ba: e => Gh(e.nextSibling, d),
                    jb: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function Fh(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Gh(a, b) {
        return a && b(a) ? a : null
    };
    var Hh = {
        0: 0,
        1: 1,
        2: 2,
        3: 3
    };
    var Ih = {
            BODY: {
                da: [1, 2],
                la: !1,
                ma: 2,
                ka: 4
            },
            HEADER: {
                da: [0, 3, 1, 2],
                la: !1,
                ma: 1,
                ka: 3
            },
            NAV: {
                da: [0, 3],
                la: !1,
                ma: 1,
                ka: 3
            },
            H1: {
                da: [0],
                la: !1,
                ma: 1,
                ka: 2
            },
            IMG: {
                da: [0, 3],
                la: !0,
                ma: 0,
                ka: 1
            },
            DIV: {
                da: [0, 3, 1, 2],
                la: !0,
                ma: 0,
                ka: 1
            },
            TABLE: {
                da: [0, 3],
                la: !0,
                ma: 0,
                ka: 1
            },
            TD: {
                da: [1, 2],
                la: !0,
                ma: 0,
                ka: 1
            },
            ASIDE: {
                da: [0, 3, 1, 2],
                la: !0,
                ma: 0,
                ka: 1
            },
            LI: {
                da: [1, 2],
                la: !0,
                ma: 0,
                ka: 1
            },
            SECTION: {
                da: [0, 3, 1, 2],
                la: !0,
                ma: 0,
                ka: 1
            }
        },
        Jh = a => ({
            da: a.da.slice(0),
            la: a.la,
            ma: a.ma,
            ka: a.ka
        }),
        Kh = (a, b) => {
            const c = Jh(a);
            c.da = qa(a.da, d => b[d]);
            return c
        };

    function Lh(a) {
        var b = a.length - 1,
            c = new Re;
        c.next = function() {
            return 0 > b ? Se : {
                value: a[b--],
                done: !1
            }
        };
        return c
    };
    var Mh = {
            0: !0,
            1: !0
        },
        Nh = {
            2: !0,
            3: !0
        },
        Oh = {
            3: !0
        },
        Ph = class {
            constructor(a, b, c) {
                this.m = a;
                this.l = b;
                this.j = c
            }
            ba() {
                for (var a = Ue(this.l); null !== a; a = Ue(this.l)) {
                    var b = a.j;
                    if (1 != b.D.nodeType) b = null;
                    else {
                        var c = Ih[b.D.tagName];
                        c ? (a = Kh(c, 0 == a.l ? Mh : 0 < hf(a.j).length ? Nh : Oh), b = {
                            node: b,
                            vb: a,
                            identifier: {}
                        }) : b = null
                    }
                    if (b && (a = b.node.l().getWidth(), c = this.m, null == a || null == c ? 0 : a >= c * this.j.v && a <= c * this.j.l)) return a = new Gg, a.resolve(b), a.j
                }
                b = new Gg;
                b.l("na");
                return b.j
            }
        };
    var Qh = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };
    var Rh = (a, b) => {
        do {
            const c = Qc(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    };
    var Sh = (a, b) => {
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
        Th = a => {
            let b = 0;
            for (let c in Qh) - 1 != a.indexOf(c) && (b |= Qh[c]);
            return b
        },
        Uh = (a, b, c, d, e) => {
            if (a !== a.top) return Nc(a) ? 3 : 16;
            if (!(488 > T(a).clientWidth)) return 4;
            if (!(a.innerHeight >= a.innerWidth)) return 5;
            const f = T(a).clientWidth;
            if (!f || (f - c) / f > d) a = 6;
            else {
                if (c = "true" != e.google_full_width_responsive) a: {
                    c = b.parentElement;
                    for (b = T(a).clientWidth; c; c =
                        c.parentElement)
                        if ((d = Qc(c, a)) && (e = N(d.width)) && !(e >= b) && "visible" != d.overflow) {
                            c = !0;
                            break a
                        }
                    c = !1
                }
                a = c ? 7 : !0
            }
            return a
        },
        Vh = (a, b, c) => {
            a = a.style;
            "rtl" == b ? a.marginRight = c : a.marginLeft = c
        };
    const Wh = (a, b) => {
            if (3 == b.nodeType) return /\S/.test(b.data);
            if (1 == b.nodeType) {
                if (/^(script|style)$/i.test(b.nodeName)) return !1;
                let c;
                try {
                    c = Qc(b, a)
                } catch (d) {}
                return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
            }
            return !1
        },
        Xh = (a, b, c) => {
            a = Sh(b, a);
            return "rtl" == c ? -a.x : a.x
        };
    var Yh = (a, b) => {
        var c;
        c = (c = b.parentElement) ? (c = Qc(c, a)) ? c.direction : "" : "";
        if (c) {
            b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
            b.style.borderSpacing = b.style.padding = "0";
            Vh(b, c, "0px");
            b.style.width = T(a).clientWidth + "px";
            if (0 !== Xh(a, b, c)) {
                Vh(b, c, "0px");
                var d = Xh(a, b, c);
                Vh(b, c, -1 * d + "px");
                a = Xh(a, b, c);
                0 !== a && a !== d && Vh(b, c, d / (a - d) * d + "px")
            }
            b.style.zIndex = 30
        }
    };
    var Zh = class {
        constructor(a, b) {
            this.La = a;
            this.m = b
        }
        height() {
            return this.m
        }
        j(a) {
            return 300 < a && 300 < this.m ? this.La : Math.min(1200, Math.round(a))
        }
        l() {}
    };
    var $h = (a, b, c, d = e => e) => {
            let e;
            return a.style && a.style[c] && d(a.style[c]) || (e = Qc(a, b)) && e[c] && d(e[c]) || null
        },
        ai = a => b => b.La <= a,
        di = (a, b, c, d) => {
            const e = a && bi(c, b),
                f = ci(b, d);
            return g => !(e && g.height() >= f)
        },
        ei = a => b => b.height() <= a,
        bi = (a, b) => {
            a = Sh(a, b);
            return (a ? a.y : 0) < T(b).clientHeight - 100
        },
        fi = (a, b) => {
            var c = $h(b, a, "height", N);
            if (c) return c;
            var d = b.style.height;
            b.style.height = "inherit";
            c = $h(b, a, "height", N);
            b.style.height = d;
            if (c) return c;
            c = Infinity;
            do(d = b.style && N(b.style.height)) && (c = Math.min(c, d)), (d = $h(b,
                a, "maxHeight", N)) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
            return c
        };
    const ci = (a, b) => {
        const c = a.google_unique_id;
        return b && 0 == ("number" === typeof c ? c : 0) ? Math.max(250, 2 * T(a).clientHeight / 3) : 250
    };

    function gi(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = tc(d.wc);
            a[e] = d.value
        }
    }

    function hi(a, b, c) {
        var d = [];
        if (c = c && c.j()) a.Va.className = c.join(" ");
        a = a.Da;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        d.length && a.setAttribute("data-ad-channel", d.join("+"))
    }

    function ii(a, b) {
        var c = b.xb || !1;
        const d = (new wc(a)).createElement("DIV"),
            e = d.style;
        e.width = "100%";
        e.height = "auto";
        e.clear = c ? "both" : "none";
        c = d.style;
        c.textAlign = "center";
        b.ib && gi(c, b.ib);
        a = (new wc(a)).createElement("INS");
        c = a.style;
        c.display = "block";
        c.margin = "auto";
        c.backgroundColor = "transparent";
        b.Fb && (c.marginTop = b.Fb);
        b.wb && (c.marginBottom = b.wb);
        b.eb && gi(c, b.eb);
        d.appendChild(a);
        return {
            Va: d,
            Da: a
        }
    };

    function ji(a, b = !1) {
        if (a.na) return a.na;
        if (b = a.C(b)) cf(), !a.j && b && (a.j = b.l());
        return b
    }

    function ki(a) {
        return a.G.node || null
    }

    function li(a) {
        return (a = ki(a)) && a.v() ? bh(a.D) : !1
    }

    function mi(a) {
        return te(a.L.j).map(b => {
            switch (b) {
                case 1:
                    return "IN ARTICLE";
                case 2:
                    return "ABOVE FOOTER";
                case 3:
                    return "ABOVE COMMENT";
                case 4:
                    return "PEDESTAL";
                case 5:
                    return "BELOW CONTENT";
                default:
                    return null
            }
        }).filter(b => null != b).join(", ")
    }
    class ni {
        constructor(a) {
            this.G = a.l;
            this.l = a.v;
            this.j = this.na = null;
            this.v = !1;
            this.L = new Oe(te(a.j.j))
        }
        B() {}
        C() {}
        F() {}
        m() {}
    }
    var oi = class {
        constructor(a, b) {
            this.l = a;
            this.v = b;
            this.j = new Oe;
            this.m = []
        }
        build() {}
    };

    function pi(a, b) {
        va(a.m, b);
        return a
    }
    class qi {
        constructor() {
            this.l = [];
            this.m = [];
            this.v = []
        }
        j(a) {
            if (a = ki(a)) {
                for (var b = 0; b < this.v.length; ++b)
                    if (zf(a, this.v[b])) return [6];
                for (b = 0; b < this.l.length; ++b)
                    if (Af(a, this.l[b])) return [6];
                for (b = 0; b < this.m.length; ++b)
                    if (Bf(a, this.m[b])) return [6]
            }
            return []
        }
    }
    var ri = [/cookie/, /(^|(-|_))sticky((-|_)|$)/],
        si = [/(^|(-|_))tab((-|_)|$)/, /(^|(-|_))tabs((-|_)|$)/],
        ti = [/(^|(-|_))slider((-|_)|$)/, /(^|(-|_))swiper((-|_)|$)/],
        ui = [/(^|(-|_))taboola((-|_)|$)/, /(^|(-|_))OUTBRAIN((-|_)|$)/, /(^|(-|_))revcontent((-|_)|$)/],
        vi = ["A", "FORM", "BUTTON"];

    function wi(a) {
        return b => !!(b.cb & a)
    }
    class W extends Zh {
        constructor(a, b, c, d = !1) {
            super(a, b);
            this.cb = c;
            this.ic = d
        }
        qb() {
            return this.cb
        }
        l(a, b, c) {
            b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
        }
    };
    const xi = {
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
        yi = {
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
        zi = {
            pub_control_image_stacked: 100,
            pub_control_image_sidebyside: 200,
            pub_control_image_card_stacked: 150,
            pub_control_image_card_sidebyside: 250,
            pub_control_text: 100,
            pub_control_text_card: 150
        };

    function Ai(a) {
        var b = 0;
        a.Ba && b++;
        a.ta && b++;
        a.ua && b++;
        if (3 > b) return {
            za: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.Ba.split(",");
        const c = a.ua.split(",");
        a = a.ta.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            za: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (2 < b.length) return {
            za: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + `you are providing ${b.length} parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`
        };
        const d = [],
            e = [];
        for (let g = 0; g <
            b.length; g++) {
            var f = Number(c[g]);
            if (Number.isNaN(f) || 0 === f) return {
                za: `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`
            };
            d.push(f);
            f = Number(a[g]);
            if (Number.isNaN(f) || 0 === f) return {
                za: `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`
            };
            e.push(f)
        }
        return {
            ua: d,
            ta: e,
            Sb: b
        }
    }

    function Bi(a) {
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

    function Ci(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = Di(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function Di(a) {
        let b = "";
        Rc(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    };
    const Ei = xa("script");
    class Fi {
        constructor(a, b, c = null, d = null, e = null, f = null, g = null, h = null, l = null, k = null, m = null, n = null) {
            this.C = a;
            this.J = b;
            this.cb = c;
            this.j = d;
            this.H = e;
            this.l = f;
            this.m = g;
            this.G = h;
            this.L = l;
            this.v = k;
            this.A = m;
            this.W = n;
            this.I = this.F = this.B = null
        }
        size() {
            return this.J
        }
    };
    class Gi extends Error {
        constructor(a = "") {
            super();
            this.name = "TagError";
            this.message = a ? "adsbygoogle.push() error: " + a : "";
            Error.captureStackTrace ? Error.captureStackTrace(this, Gi) : this.stack = Error().stack || ""
        }
    };
    var Hi = class extends Zh {
            j(a) {
                return Math.min(1200, Math.max(this.La, Math.round(a)))
            }
        },
        Mi = (a, b) => {
            Ki(a, b);
            if ("pedestal" == b.google_content_recommendation_ui_type) return new Fi(9, new Hi(a, Math.floor(a * b.google_phwr)));
            var c = Gc();
            468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * xi.mobile_banner_image_sidebyside + yi.mobile_banner_image_sidebyside) + 96), a = {
                Ta: a,
                Sa: c,
                ta: 1,
                ua: 12,
                Ba: "mobile_banner_image_sidebyside"
            }) : (a = Bi(a), a = {
                Ta: a.width,
                Sa: a.height,
                ta: 1,
                ua: 13,
                Ba: "image_sidebyside"
            }) : (a = Bi(a), a = {
                Ta: a.width,
                Sa: a.height,
                ta: 4,
                ua: 2,
                Ba: "image_stacked"
            });
            Li(b, a);
            return new Fi(9, new Hi(a.Ta, a.Sa))
        },
        Ni = (a, b) => {
            Ki(a, b);
            var c = Ai({
                ua: b.google_content_recommendation_rows_num,
                ta: b.google_content_recommendation_columns_num,
                Ba: b.google_content_recommendation_ui_type
            });
            if (c.za) a = {
                Ta: 0,
                Sa: 0,
                ta: 0,
                ua: 0,
                Ba: "image_stacked",
                za: c.za
            };
            else {
                var d = 2 === c.Sb.length && 468 <= a ? 1 : 0;
                var e = c.Sb[d];
                e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
                var f = zi[e];
                let g = c.ta[d];
                for (; a / g < f && 1 < g;) g--;
                f = g;
                d = c.ua[d];
                c = Math.floor(((a - 8 * f - 8) / f *
                    xi[e] + yi[e]) * d + 8 * d + 8);
                a = 1500 < a ? {
                    width: 0,
                    height: 0,
                    zc: "Calculated slot width is too large: " + a
                } : 1500 < c ? {
                    width: 0,
                    height: 0,
                    zc: "Calculated slot height is too large: " + c
                } : {
                    width: a,
                    height: c
                };
                a = {
                    Ta: a.width,
                    Sa: a.height,
                    ta: f,
                    ua: d,
                    Ba: e
                }
            }
            if (a.za) throw new Gi(a.za);
            Li(b, a);
            return new Fi(9, new Hi(a.Ta, a.Sa))
        };

    function Ki(a, b) {
        if (0 >= a) throw new Gi("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function Li(a, b) {
        a.google_content_recommendation_ui_type = b.Ba;
        a.google_content_recommendation_columns_num = b.ta;
        a.google_content_recommendation_rows_num = b.ua
    };
    class Oi extends Zh {
        j() {
            return this.La
        }
        l(a, b, c) {
            Yh(a, c);
            b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
        }
    };
    const Pi = {
        "image-top": a => 600 >= a ? 284 + .414 * (a - 250) : 429,
        "image-middle": a => 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500),
        "image-side": a => 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500),
        "text-only": a => 500 >= a ? 187 - .228 * (a - 250) : 130,
        "in-article": a => 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
    };
    var Qi = class extends Zh {
            j() {
                return Math.min(1200, this.La)
            }
        },
        Ri = (a, b, c, d, e) => {
            var f = e.google_ad_layout || "image-top";
            if ("in-article" == f) {
                var g = a;
                if ("false" == e.google_full_width_responsive) a = g;
                else if (a = Uh(b, c, g, .2, e), !0 !== a) e.gfwrnwer = a, a = g;
                else if (a = T(b).clientWidth)
                    if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                        b: {
                            g = c;
                            for (let h = 0; 100 > h && g.parentElement; ++h) {
                                const l = g.parentElement.childNodes;
                                for (let k = 0; k < l.length; ++k) {
                                    const m = l[k];
                                    if (m != g && Wh(b, m)) break b
                                }
                                g = g.parentElement;
                                g.style.width =
                                    "100%";
                                g.style.height = "auto"
                            }
                        }
                        Yh(b, c)
                    }
                else a = g;
                else a = g
            }
            if (250 > a) throw new Gi("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
            a = Math.min(1200, Math.floor(a));
            if (d && "in-article" != f) {
                f = Math.ceil(d);
                if (50 > f) throw new Gi("Fluid responsive ads must be at least 50px tall: height=" + f);
                return new Fi(11, new Zh(a, f))
            }
            if ("in-article" != f && (d = e.google_ad_layout_key)) {
                f = "" + d;
                c = Math.pow(10, 3);
                if (e = (d = f.match(/([+-][0-9a-z]+)/g)) && d.length)
                    for (b = [], g = 0; g < e; g++) b.push(parseInt(d[g], 36) / c);
                else b =
                    null;
                if (!b) throw new Gi("Invalid data-ad-layout-key value: " + f);
                f = (a + -725) / 1E3;
                c = 0;
                d = 1;
                e = b.length;
                for (g = 0; g < e; g++) c += b[g] * d, d *= f;
                f = Math.ceil(1E3 * c - -725 + 10);
                if (isNaN(f)) throw new Gi("Invalid height: height=" + f);
                if (50 > f) throw new Gi("Fluid responsive ads must be at least 50px tall: height=" + f);
                if (1200 < f) throw new Gi("Fluid responsive ads must be at most 1200px tall: height=" + f);
                return new Fi(11, new Zh(a, f))
            }
            d = Pi[f];
            if (!d) throw new Gi("Invalid data-ad-layout value: " + f);
            c = bi(c, b);
            b = T(b).clientWidth;
            b = "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
            return new Fi(11, "in-article" == f ? new Qi(a, b) : new Zh(a, b))
        };
    var Si = a => b => {
            for (let c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        },
        Ui = (a, b) => {
            var c = Ti.slice(0);
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
    var X = [new W(970, 90, 2), new W(728, 90, 2), new W(468, 60, 2), new W(336, 280, 1), new W(320, 100, 2), new W(320, 50, 2), new W(300, 600, 4), new W(300, 250, 1), new W(250, 250, 1), new W(234, 60, 2), new W(200, 200, 1), new W(180, 150, 1), new W(160, 600, 4), new W(125, 125, 1), new W(120, 600, 4), new W(120, 240, 4), new W(120, 120, 1, !0)],
        Ti = [X[6], X[12], X[3], X[0], X[7], X[14], X[1], X[8], X[10], X[4], X[15], X[2], X[11], X[5], X[13], X[9], X[16]];
    let Vi, Wi;
    const Xi = new Ud(u);
    (a => {
        Vi = a || new Kd;
        "number" !== typeof u.google_srt && (u.google_srt = Math.random());
        Id(Vi, u.google_srt);
        Wi = new Wd(Vi, Xi);
        Wi.v(!0);
        "complete" == u.document.readyState ? u.google_measure_js_timing || Td(Xi) : Xi.j && H(u, "load", () => {
            u.google_measure_js_timing || Td(Xi)
        })
    })();
    var Yi = (a, b, c) => Wi.ya(a, b, c),
        Zi = (a, b) => Wi.O(a, b),
        $i = (a, b, c) => {
            const d = R(ne).j();
            !b.eid && d.length && (b.eid = d.toString());
            Jd(Vi, a, b, !0, c)
        };
    var aj = (a, b, c, d, e) => {
            "false" == e.google_full_width_responsive ? c = {
                ia: a,
                ja: 1
            } : "autorelaxed" == b && e.google_full_width_responsive || "auto" == b || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(b) || e.google_ad_resize ? (b = Uh(c, d, a, .3, e), !0 !== b ? e = b : "true" == e.google_full_width_responsive || Rh(d, c) ? (e = T(c).clientWidth, b = e - a, e = e && 0 <= b ? !0 : e ? -10 > b ? 11 : 0 > b ? 14 : 12 : 10) : e = 9, c = !0 !== e ? {
                ia: a,
                ja: e
            } : {
                ia: T(c).clientWidth || a,
                ja: !0
            }) : c = {
                ia: a,
                ja: 2
            };
            const {
                ia: f,
                ja: g
            } = c;
            return !0 !== g ? {
                ia: a,
                ja: g
            } : d.parentElement ? {
                ia: f,
                ja: g
            } : {
                ia: a,
                ja: g
            }
        },
        dj = (a, b, c, d, e) => {
            const {
                ia: f,
                ja: g
            } = Yi(247, () => aj(a, b, c, d, e));
            var h = !0 === g;
            const l = N(d.style.width),
                k = N(d.style.height),
                {
                    Oa: m,
                    Ja: n,
                    qb: q,
                    Rb: r
                } = bj(f, b, c, d, e, h);
            h = cj(b, q);
            var t;
            const y = (t = $h(d, c, "marginLeft", N)) ? t + "px" : "",
                E = (t = $h(d, c, "marginRight", N)) ? t + "px" : "";
            t = $h(d, c, "zIndex") || "";
            return new Fi(h, m, q, null, r, g, n, y, E, k, l, t)
        },
        bj = (a, b, c, d, e, f) => {
            b = "auto" == b ? .25 >= a / Math.min(1200, T(c).clientWidth) ? 4 : 3 : Th(b);
            let g;
            var h = !1;
            let l = !1;
            var k = 488 > T(c).clientWidth;
            if (k) {
                g = Rh(d, c);
                var m = bi(d, c);
                h = !m && g;
                l =
                    m && g
            }
            m = [ai(a), wi(b)];
            m.push(di(k, c, d, l));
            null != e.google_max_responsive_height && m.push(ei(e.google_max_responsive_height));
            k = [t => !t.ic];
            if (h || l) h = fi(c, d), k.push(ei(h));
            let n = Ui(Si(m), Si(k));
            if (!n) throw new Gi("No slot size for availableWidth=" + a);
            const {
                Oa: q,
                Ja: r
            } = Yi(248, () => {
                var t;
                a: if (f) {
                    if (e.gfwrnh && (t = N(e.gfwrnh))) {
                        t = {
                            Oa: new Oi(a, t),
                            Ja: !0
                        };
                        break a
                    }
                    t = a / 1.2;
                    var y = Math;
                    var E = y.min;
                    if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var G = Infinity;
                    else {
                        G = d;
                        let v = Infinity;
                        do {
                            var M =
                                $h(G, c, "height", N);
                            M && (v = Math.min(v, M));
                            (M = $h(G, c, "maxHeight", N)) && (v = Math.min(v, M))
                        } while ((G = G.parentElement) && "HTML" != G.tagName);
                        G = v
                    }
                    y = E.call(y, t, G);
                    if (y < .5 * t || 100 > y) y = t;
                    t = {
                        Oa: new Oi(a, Math.floor(y)),
                        Ja: y < t ? 102 : !0
                    }
                } else t = {
                    Oa: n,
                    Ja: 100
                };
                return t
            });
            return "in-article" === e.google_ad_layout && c.location && "#hffwroe2etoq" == c.location.hash ? {
                Oa: ej(a, c, d, q, e),
                Ja: !1,
                qb: b,
                Rb: g
            } : {
                Oa: q,
                Ja: r,
                qb: b,
                Rb: g
            }
        };
    const cj = (a, b) => {
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
        ej = (a, b, c, d, e) => {
            const f = e.google_ad_height || $h(c, b, "height", N);
            b = Ri(a, b, c, f, e).size();
            return b.La * b.height() > a * d.height() ? new W(b.La, b.height(), 1) : d
        };
    var fj = (a, b, c, d, e) => {
        var f;
        (f = T(b).clientWidth) ? 488 > T(b).clientWidth ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, Yh(b, c), f = {
            ia: f,
            ja: !0
        }) : f = {
            ia: a,
            ja: 5
        } : f = {
            ia: a,
            ja: 4
        }: f = {
            ia: a,
            ja: 10
        };
        const {
            ia: g,
            ja: h
        } = f;
        if (!0 !== h || a == g) return new Fi(12, new Zh(a, d), null, null, !0, h, 100);
        const {
            Oa: l,
            Ja: k,
            qb: m
        } = bj(g, "auto", b, c, e, !0);
        return new Fi(1, l, m, 2, !0, h, k)
    };
    const gj = (a, b, c, d, e) => {
        const f = d.google_ad_height || $h(c, e, "height", N);
        switch (a) {
            case 5:
                const {
                    ia: g,
                    ja: h
                } = Yi(247, () => aj(b, d.google_ad_format, e, c, d));
                !0 === h && b != g && Yh(e, c);
                !0 === h ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = h);
                return Mi(g, d);
            case 9:
                return Ni(b, d);
            case 8:
                return Ri(b, e, c, f, d);
            case 10:
                return fj(b, e, c, f, d)
        }
    };
    class hj extends ni {
        constructor(a) {
            super(a);
            this.A = ""
        }
        B() {
            return 1
        }
        C(a = !1) {
            const b = ki(this);
            if (!b) return null;
            li(this) && (this.A = b.D.style.display);
            var c = mi(this),
                d = ef(b),
                e = ii(d, {
                    Fb: "10px",
                    wb: "10px",
                    xb: this.v
                });
            e.Va.className = "google-auto-placed";
            const f = e.Da;
            var g = f.style;
            g.display = "inline-block";
            g.boxSizing = "border-box";
            g.width = "100%";
            g.height = a ? "auto" : "100px";
            g.backgroundColor = "#f60";
            g.border = "#000 solid 1px";
            c && (g = d.createElement("span"), g.style.fontSize = "small", g.appendChild(d.createTextNode(c)),
                f.appendChild(g));
            c = e.Va;
            e = e.Da;
            Eh(c, b.D, Hh[this.l]);
            if (a) try {
                this.F(e, Bc())
            } catch (h) {
                e.style.height = "100px"
            }
            this.na = b.m.j(c);
            this.na || (c.parentNode.removeChild(c), li(this) && (b.D.style.display = this.A));
            return this.na
        }
        F(a, b) {
            var c = {
                    google_ad_format: "auto"
                },
                d = 1,
                e = a.offsetWidth || (c.google_ad_resize || !1) && $h(a, b, "width", N) || c.google_ad_width || 0;
            4 === d && (c.google_ad_format = "auto", d = 1);
            var f = (f = gj(d, e, a, c, b)) ? f : dj(e, c.google_ad_format, b, a, c);
            f.size().l(b, c, a);
            null != f.cb && (c.google_responsive_formats = f.cb);
            null != f.H && (c.google_safe_for_responsive_override = f.H);
            null != f.l && (!0 === f.l ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = f.l));
            null != f.m && !0 !== f.m && (c.gfwrnher = f.m);
            b = f.A || c.google_ad_width;
            null != b && (c.google_resizing_width = b);
            b = f.v || c.google_ad_height;
            null != b && (c.google_resizing_height = b);
            b = f.size().j(e);
            const g = f.size().height();
            if (!c.google_ad_resize) {
                c.google_ad_width = b;
                c.google_ad_height = g;
                var h = f.size();
                e = h.j(e) + "x" + h.height();
                c.google_ad_format =
                    e;
                c.google_responsive_auto_format = f.C;
                null != f.j && (c.armr = f.j);
                c.google_ad_resizable = !0;
                c.google_override_format = 1;
                c.google_loader_features_used = 128;
                !0 === f.l && (c.gfwrnh = f.size().height() + "px")
            }
            null != f.G && (c.gfwroml = f.G);
            null != f.L && (c.gfwromr = f.L);
            null != f.v && (c.gfwroh = f.v);
            null != f.A && (c.gfwrow = f.A);
            null != f.W && (c.gfwroz = f.W);
            null != f.B && (c.gml = f.B);
            null != f.F && (c.gmr = f.F);
            null != f.I && (c.gzi = f.I);
            e = Nc(window) || window;
            Ci(e.location, "google_responsive_dummy_ad") && (ta([1, 2, 3, 4, 5, 6, 7, 8], f.C) || 1 === f.j) && 2 !==
                f.j && (e = JSON.stringify({
                    googMsgType: "adpnt",
                    key_value: [{
                        key: "qid",
                        value: "DUMMY_AD"
                    }]
                }), c.dash = `<${Ei}>window.top.postMessage('${e}', '*'); 
          </${Ei}> 
          <div id="dummyAd" style="width:${b}px;height:${g}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${b}x${g}</p> 
            <p>Rendered size:${b}x${g}</p> 
          </div>`);
            1 != d && (c = f.size().height(), a.style.height = c + "px")
        }
        m() {
            if (this.na) {
                var a = this.na;
                a.D.parentNode && a.D.parentNode.removeChild(a.D);
                this.na = null;
                li(this) && (ki(this).D.style.display = this.A);
                cf()
            }
        }
    }
    var ij = class extends oi {
        build() {
            return new hj(this)
        }
    };
    new Oe(["comments"]);
    new Oe(["allcomments"]);
    new Oe(["post-container", "post", "type-post"]);
    var kj = (a, b, c) => {
            const d = [];
            a.map(e => jj(e, b, c)).forEach(e => va(d, e));
            return d
        },
        jj = (a, b, c) => {
            const d = a.vb.da,
                e = a.node;
            if (!e) return [];
            const f = [];
            e.j() && ta(d, 0) && f.push(0);
            ta(d, 1) && f.push(1);
            ta(d, 2) && (!ta(d, 1) || 0 < hf(e).length) && f.push(2);
            e.j() && ta(d, 3) && f.push(3);
            return f.map(g => {
                g = new ij(a, g);
                b.forEach(g.j.add, g.j);
                g.m.push(...c);
                return g.build()
            })
        },
        lj = (a, b) => {
            a = ki(b) ? a.map.get(w(ki(b))) : void 0;
            if (!a) return -1;
            switch (b.l) {
                case 0:
                    return a.start.ca();
                case 1:
                    return a.start.ca() + 1;
                case 2:
                    return a.end.ca();
                case 3:
                    return a.end.ca() + 1
            }
            return -1
        },
        mj = (a, b) => {
            a = ki(b) ? a.map.get(w(ki(b))) : void 0;
            if (!a) return -1;
            switch (b.l) {
                case 0:
                    return a.start.ca() - .1;
                case 3:
                    return a.end.ca() + .1;
                case 1:
                    return a.start.ca() + .1;
                case 2:
                    return a.end.ca() - .1
            }
            return -1
        };

    function nj(a, b) {
        b && a.j.push(b);
        return a
    }

    function oj(a, b) {
        a.l.push(b);
        return a
    }

    function pj(a, b) {
        return Hg(a.v, () => {
            const c = [];
            for (let d = 0; d < a.l.length; ++d) {
                const e = a.l[d].j(b);
                va(c, e);
                if (0 < e.length) break
            }
            return c
        }, "flap")
    }

    function qj(a, b) {
        return Hg(a.v, () => {
            if (0 == a.j.length) var c = [];
            else {
                var d = Math.floor(mj(a.A, b));
                if ((d = -1 != d ? d + b.B() + "|" + b.v + "|10px|10px" : null) && re(a.m, d)) c = a.m.get(d);
                else {
                    var e = [],
                        f = ji(b);
                    try {
                        for (let g = 0; g < a.j.length; ++g)
                            if (c = a.j[g].j(f), va(e, c), 0 < c.length) {
                                b.m();
                                break
                            }
                    } finally {
                        b.m()
                    }
                    null != d && a.m.set(d, e);
                    c = e
                }
            }
            return c
        }, "flfa")
    }

    function rj(a, b) {
        const c = new Gg;
        pj(a, b).then(d => {
            0 < d.length ? c.resolve(d) : qj(a, b).then(e => {
                c.resolve(d.concat(e))
            })
        });
        return c.j
    }
    class sj {
        constructor(a, b) {
            this.v = a;
            this.j = [];
            this.l = [];
            this.A = b;
            this.m = new S
        }
    };
    class tj {
        constructor(a) {
            this.l = a
        }
        j(a) {
            if (!a) return [];
            for (let b = 0; b < this.l.length; ++b)
                if (this.l[b].v(a, !1)) return [2];
            return []
        }
    };
    class uj {
        constructor(a, b) {
            this.l = a;
            this.m = b
        }
        j(a) {
            if (!a) return [9];
            const b = De(this.l, !0);
            return null == b ? [16] : b - a.l().bottom < this.m ? [17] : []
        }
    };
    class vj {
        constructor(a, b) {
            this.l = a;
            this.m = b
        }
        j(a) {
            for (a = Math.floor(mj(this.l, a)); 0 < a; a--) {
                const b = this.l.pa[a];
                if (!b.j.Ka()) {
                    if ((0 == b.l ? mf(b.j).top : mf(b.j).bottom) <= this.m) break;
                    return []
                }
            }
            return [10]
        }
    };
    class wj {
        constructor(a, b, c) {
            this.l = a;
            this.j = b;
            this.m = c
        }
    };
    class xj {
        constructor(a) {
            const b = [];
            a = a.j.slice(0);
            for (let c = 0; c < a.length; ++c) b.push(a[c].l());
            this.m = b;
            this.l = new S
        }
        j(a) {
            const b = w(a);
            if (re(this.l, b)) return this.l.get(b);
            a: {
                var c = a.l();c = new wj(c.left, c.top + a.D.scrollHeight, a.D.scrollWidth);
                for (e of this.m) {
                    b: {
                        if (c.j >= Math.floor(e.bottom)) {
                            var d = !1;
                            break b
                        }
                        d = Math.ceil(e.left);
                        const f = c.l + c.m;d = !(Math.floor(e.right) <= c.l || f <= d)
                    }
                    if (d) {
                        var e = !0;
                        break a
                    }
                }
                e = !1
            }
            e = !e && a.D.scrollHeight > a.D.clientHeight && wf(a);
            c = a.j();
            c = !c || this.j(c);
            a = e && c ? !0 : e ? rf(a) : c &&
                !rf(a);
            this.l.set(b, a);
            return a
        }
    };
    class yj {
        constructor(a, b) {
            this.m = a;
            this.l = b
        }
        j(a) {
            const b = ki(a);
            if (!b) return [];
            switch (a.l) {
                case 0:
                case 3:
                    return a = b.j(), b != this.m && a && this.l.j(a) ? [] : [14];
                case 1:
                case 2:
                    return this.l.j(b) ? [] : [14];
                default:
                    throw Error("Unhandled position.");
            }
        }
    };
    class zj {
        constructor(a) {
            this.l = a
        }
        j(a) {
            return (a = ki(a)) && qf(a, this.l) ? [11] : []
        }
    };
    class Aj {};

    function Bj(a = window) {
        a = a.googletag;
        return a ? .apiReady ? a : void 0
    };
    var Ej = (a, b) => {
            var c = ua(b.document.querySelectorAll(".google-auto-placed"));
            const d = ua(b.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]")),
                e = ua(b.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]"));
            var f;
            (f = Cj(b)) || (f = ua(b.document.querySelectorAll("div[id^=div-gpt-ad]")));
            f = f.concat(ua(b.document.querySelectorAll("iframe[id^=google_ads_iframe]")));
            const g = ua(b.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")),
                h = ua(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
                l = ua(b.document.querySelectorAll("div.googlepublisherpluginad")),
                k = ua(b.document.querySelectorAll("html > ins.adsbygoogle"));
            let m = [].concat(ua(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), ua(b.document.querySelectorAll("body ins.adsbygoogle")));
            b = [];
            for (const [n, q] of [
                    [a.Tc, c],
                    [a.Ob, d],
                    [a.Wc, e],
                    [a.Uc, f],
                    [a.Xc, g],
                    [a.Sc, h],
                    [a.Vc, l],
                    [a.Yc, k]
                ]) a = q, !1 === n ? b = b.concat(a) : m = m.concat(a);
            a = Dj(m);
            c = Dj(b);
            a = a.slice(0);
            for (const n of c)
                for (c = 0; c < a.length; c++)(n.contains(a[c]) || a[c].contains(n)) && a.splice(c, 1);
            return a
        },
        Gj = a => {
            const b = Cj(Bc(xc(a))) || [];
            return !!Fc(a, c => {
                if (!ca(c) || 1 != c.nodeType) return !1;
                const d = c.matches || c.webkitMatchesSelector || c.mozMatchesSelector || c.msMatchesSelector || c.oMatchesSelector;
                return !d || ta(b, c) || sa(Sc(Fj), e => d.call(c, e))
            }, !1, 20)
        };
    const Cj = a => {
            const b = Bj(a);
            return b ? qa(ra(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null
        },
        Fj = {
            Ec: "ins.adsbygoogle-ablated-ad-slot",
            Gc: "body ins.adsbygoogle",
            Fc: "iframe[id^=aswift_],iframe[id^=google_ads_frame]",
            Hc: ".google-auto-placed",
            Ic: "ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]",
            Jc: "iframe[id^=google_ads_iframe]",
            Lc: "div[id^=div-gpt-ad]",
            Mc: "ins.adsbygoogle[data-ad-format=autorelaxed]",
            Nc: "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]",
            Kc: "div.googlepublisherpluginad",
            Oc: "html > ins.adsbygoogle"
        };
    var Dj = a => {
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
    var Hj = Wi.O(453, Ej);

    function Ij(a) {
        a = Jj(a);
        Kj(a);
        return new Lj(a)
    }

    function Mj(a) {
        return a.j.map(b => b.box)
    }
    class Lj {
        constructor(a) {
            this.j = a.slice(0)
        }
    }

    function Jj(a) {
        const b = Hj({
                Ob: !1
            }, a),
            c = Fe(a),
            d = U(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = !!e.className && -1 != e.className.indexOf("google-auto-placed")) || 1 < (f.bottom - f.top) * (f.right - f.left) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                Qc: e ? 1 : 0
            } : null
        }).filter(Rb(e => null === e))
    }

    function Kj(a) {
        ra(a, () => new Aj)
    };
    class Nj {
        constructor(a, b, c) {
            this.l = Hj({}, c).map(x(a.j, a)).filter(Rb(d => null === d));
            this.m = b
        }
        j(a) {
            if (!a) return [9];
            a = a.l();
            for (let d = 0; d < this.l.length; d++) {
                const e = this.l[d].l();
                var b;
                if (b = 1 < (e.bottom - e.top) * (e.right - e.left)) {
                    b = a.top;
                    var c = this.m;
                    (b = e.top - c < b && b < e.bottom + c) || (b = a.bottom, c = this.m, b = e.top - c < b && b < e.bottom + c)
                }
                if (b) return [8]
            }
            return []
        }
    };
    class Oj {
        constructor(a, b) {
            this.l = a;
            this.m = b
        }
        j(a) {
            if (li(a)) return [];
            a = mj(this.l.l, a);
            var b = vg(this.l, a);
            if (!b) return [];
            const c = this.m.j(b.start.j);
            b = b.end.ca();
            return c && 10 >= a - b ? [5] : []
        }
    };
    const Pj = "ASIDE DIV IMG LI SECTION TABLE TD".split(" ");
    class Qj {
        j(a) {
            a = ki(a);
            if (!a) return [12];
            if (!Pj.includes(a.D.tagName) || a.D.id) return [];
            const b = Cf(a),
                c = ef(a);
            for (const d of b)
                if (1 == c.getElementsByClassName(d).length) return [];
            return 150 >= a.l().getHeight() ? [13] : []
        }
    };
    class Rj {
        j(a) {
            return a && !a.Ka() && sf(a) ? [] : [3]
        }
    };

    function Sj(a, b) {
        return 0 < a.j.length ? (b.resolve(a.j.shift()), !0) : !1
    }
    class Tj {
        constructor(a, b) {
            this.l = a;
            this.A = b;
            this.C = [];
            this.v = [];
            this.j = []
        }
        ba() {
            const a = new Gg;
            this.l.j(new Cg(x(this.m, this, a), "p"));
            return a.j
        }
        m(a) {
            Sj(this, a) || this.A.ba().then(x(this.B, this, a), x(a.l, a))
        }
        B(a, b) {
            b = kj([b], this.C, this.v);
            va(this.j, b);
            Sj(this, a) || this.l.j(new Cg(x(this.m, this, a), "p"))
        }
    };
    class Uj {
        constructor(a) {
            this.j = a.filter(b => li(b));
            this.l = a.filter(b => !li(b))
        }
        ba() {
            return this.j.shift() || this.l.shift() || null
        }
    };
    class Vj {};

    function Wj(a, b) {
        a.l.j(new Cg(() => {
            const c = a.j ? a.j.ba() : null;
            c ? Xj(a, b, c) : a.A.ba().then(x(a.B, a, b), x(a.F, a, b))
        }, "r"))
    }

    function Xj(a, b, c) {
        a.v && a.v.apply(c);
        a.m ? rj(a.m, c).then(function(d) {
            0 == d.length ? (0 < a.j.j.length || (a.j = null), Ig(a.l, b, c, "rres")) : (a.C.push(new Vj), Wj(a, b))
        }) : Ig(a.l, b, c, "rres")
    }
    class Yj {
        constructor(a, b, c, d) {
            this.l = a;
            this.A = b;
            this.v = c;
            this.m = d;
            this.j = null;
            this.C = []
        }
        ba() {
            const a = new Gg;
            Wj(this, a);
            return a.j
        }
        B(a, b) {
            this.j = b;
            Wj(this, a)
        }
        F(a) {
            Jg(this.l, a)
        }
    };
    class Zj {
        constructor(a) {
            this.j = a
        }
        ba() {
            const a = new Gg;
            this.j.ba().then(b => {
                a.resolve(new Uj([b]))
            }, x(a.l, a));
            return a.j
        }
    };
    class ak {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        apply(a) {
            var b = lj(this.j, a);
            b = this.l.get(w(this.j.pa[b]));
            a.v = b.kc <= b.qc
        }
    };
    class bk {
        constructor(a) {
            this.l = a
        }
        j(a) {
            a: {
                const b = ki(a);
                if (b) {
                    switch (a.l) {
                        case 0:
                        case 3:
                            if (a = b.j()) break a;
                            throw Error("An ad placement with BEFORE or AFTER position cannot have an anchor with no parent.");
                        case 1:
                        case 2:
                            a = b;
                            break a
                    }
                    throw Error("Un-handled ad placement position.");
                }
                a = null
            }
            return a && ta(this.l, a.D) ? [18] : []
        }
    };
    var ck = [{
        hostname: /^([a-z]+.)?m.wikihow.com$/,
        hc: "mw-mf-viewport"
    }];
    const dk = a => {
        if (!a.location || !a.location.hostname) return [];
        var b = a.location.hostname,
            c = [];
        pa(ck, function(d) {
            b.match(d.hostname) && (d = a.document.getElementById(d.hc)) && c.push(d)
        });
        return c
    };

    function ek(a, b) {
        a.l.j(new Cg(function() {
            if (a.j)
                if (a.m.j(a.j)) {
                    var c = a.j;
                    a.j = kf(a.j);
                    b.resolve(c)
                } else {
                    a: {
                        c = a.j;
                        const d = hf(c);
                        for (let e = 0; e < d.length; ++e)
                            if (d[e].v()) {
                                c = d[e];
                                break a
                            }
                        c = kf(c)
                    }
                    a.j = c;ek(a, b)
                }
            else b.l(null)
        }, "fpar"))
    }
    const fk = class {
        constructor(a, b, c) {
            this.l = a;
            this.j = b;
            this.m = c
        }
        ba() {
            var a = new Gg;
            ek(this, a);
            return a.j
        }
    };
    class gk {
        constructor(a) {
            this.l = a;
            this.j = []
        }
        reset() {
            const a = this.j;
            this.j = [];
            return a
        }
    };
    var hk = {
            da: [3],
            la: !1,
            ma: 0,
            ka: 1
        },
        ik = new Oe(["LI", "TR", "TD", "TH"]);

    function jk(a, b) {
        a.l.j(new Cg(function() {
            a.A.ba().then(x(a.v, a, b), x(a.m, a, b))
        }, "para"))
    }
    const kk = class {
        constructor(a, b, c) {
            this.l = a;
            this.A = b;
            this.j = new gk(c)
        }
        ba() {
            var a = new Gg;
            jk(this, a);
            return a.j
        }
        v(a, b) {
            var c = this.j;
            if (c.j.length) {
                var d = c.j[c.j.length - 1];
                var e = c.l;
                const f = e.l.map.get(w(b));
                (e = f ? vg(e, f.start.ca()) : null) ? (e = e.start.j, d = d == e || d != e && Ec(d.D, e.D)) : d = !0
            } else d = !0;
            d ? c.j.push(b) : c.j = [b];
            b = this.j;
            (b = 3 <= b.j.length ? b.j[b.j.length - 3 + 1] : null) && !ik.contains(b.D.tagName) ? a.resolve({
                node: b,
                vb: Jh(hk),
                identifier: {}
            }) : jk(this, a)
        }
        m(a) {
            a.l("na")
        }
    };
    const lk = class extends Kg {
        constructor() {
            super();
            this.l = [];
            this.m = !1
        }
        j(a) {
            this.l.push(a);
            if (!this.m) {
                this.m = !0;
                try {
                    for (; 0 < this.l.length;) this.l.shift().j()
                } finally {
                    this.m = !1
                }
            }
        }
    };
    const mk = class {
        constructor() {
            this.j = Date.now();
            this.l = Date.now()
        }
    };
    var nk;

    function ok() {
        var a = u.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !z("Presto") && (a = function() {
            var e = Dc(document, "IFRAME");
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var g = "callImmediate" + Math.random(),
                h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = x(function(l) {
                if (("*" == h || l.origin == h) && l.data == g) this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, h)
                }
            }
        });
        if ("undefined" !== typeof a && !z("Trident") && !z("MSIE")) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.Kb;
                    c.Kb = null;
                    e()
                }
            };
            return function(e) {
                d.next = {
                    Kb: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            u.setTimeout(e, 0)
        }
    };
    class pk {
        constructor(a, b) {
            this.v = a;
            this.m = b;
            this.l = 0;
            this.j = null
        }
        get() {
            let a;
            0 < this.l ? (this.l--, a = this.j, this.j = a.next, a.next = null) : a = this.v();
            return a
        }
    };

    function qk() {
        var a = rk;
        let b = null;
        a.j && (b = a.j, a.j = a.j.next, a.j || (a.l = null), b.next = null);
        return b
    }
    class sk {
        constructor() {
            this.l = this.j = null
        }
        add(a, b) {
            const c = tk.get();
            c.set(a, b);
            this.l ? this.l.next = c : this.j = c;
            this.l = c
        }
    }
    var tk = new pk(() => new uk, a => a.reset());
    class uk {
        constructor() {
            this.next = this.j = this.l = null
        }
        set(a, b) {
            this.l = a;
            this.j = b;
            this.next = null
        }
        reset() {
            this.next = this.j = this.l = null
        }
    };
    let vk, wk = !1,
        rk = new sk,
        yk = () => {
            if (u.Promise && u.Promise.resolve) {
                const a = u.Promise.resolve(void 0);
                vk = () => {
                    a.then(xk)
                }
            } else vk = () => {
                var a = xk;
                "function" !== typeof u.setImmediate || u.Window && u.Window.prototype && !z("Edge") && u.Window.prototype.setImmediate == u.setImmediate ? (nk || (nk = ok()), nk(a)) : u.setImmediate(a)
            }
        };
    var xk = () => {
        for (var a; a = qk();) {
            try {
                a.l.call(a.j)
            } catch (c) {
                ma(c)
            }
            var b = tk;
            b.m(a);
            100 > b.l && (b.l++, a.next = b.j, b.j = a)
        }
        wk = !1
    };
    var zk = class extends Kg {
        constructor(a, b, c) {
            var d = new mk;
            super();
            this.G = a;
            this.l = d;
            this.B = b || null;
            this.v = c || null;
            this.m = [];
            this.A = !1
        }
        j(a) {
            this.m.push(a);
            this.A || (a = this.F, vk || yk(), wk || (vk(), wk = !0), rk.add(a, this))
        }
        F() {
            this.B ? this.B(x(this.C, this)) : this.C()
        }
        C() {
            if (!this.A) {
                this.A = !0;
                try {
                    for (this.l.j = Date.now(); 0 < this.m.length;) {
                        var a = this.m.shift();
                        this.l.l = Date.now();
                        a.j();
                        this.v && this.v.l(Date.now() - this.l.l, a.l);
                        if (50 < Date.now() - this.l.j + 10) break
                    }
                    0 < this.m.length && this.G.setTimeout(x(this.F, this),
                        0)
                } finally {
                    this.A = !1, this.v && this.v.j(Date.now() - this.l.j)
                }
            }
        }
    };

    function Ak(a, b) {
        var c = new Gg,
            d = b.G ? new zk(a, ja(Yi, b.j ? "lr:apf:" + b.j : "lr:apf"), b.F) : new lk;
        d.j(new Cg(function() {
            Tg(new Wg(d), a, b).then(function(e) {
                var f = e.l,
                    g = e.v,
                    h = e.m;
                a: {
                    var l = e.l,
                        k = e.j.A;
                    switch (k) {
                        case 2:
                            var m = l.v;
                            k = e.m.j;
                            k.v || (l = new Jf(bg(k), 0), k.j || (k.j = new Nf(new Jf(bg(k), 0))), k.v = new Qf(l, new Jf(k.j, 1), new Jf(cg(k), 2)));
                            m = new kk(d, new fk(d, m, new Jf(k.v, 3)), e.v.j);
                            break a;
                        default:
                            m = l.A;
                            var n = l.j.pa;
                            l = e.j;
                            k = 1 == k ? Lh(n) : Te(n);
                            m = new Ph(m, k, l)
                    }
                }
                m = new Zj(new Tj(d, m));
                k = new ak(f.j, g.m);
                l = new sj(d,
                    f.j);
                e.j.B && oj(l, new vj(f.j, f.T));
                n = dk(f.l);
                h = oj(oj(oj(oj(l, new bk(n)), new Oj(g.j, new Jf(cg(h.j), 2))), new Qj), new yj(f.v, new xj(g.j)));
                n = new qi;
                va(n.l, ri);
                n = pi(pi(n, si), ti);
                va(n.v, vi);
                va(n.l, ui);
                h = nj(oj(oj(h, pi(n, ui)), new zj(f.P * f.T)), new Rj);
                var q = e.j,
                    r = e.l.A;
                n = Math.max(r * q.v, q.minWidth);
                q = r * q.l;
                n = void 0 !== n ? n : 0;
                q = void 0 !== q ? q : Infinity;
                if (0 > n || 0 > q) throw Error("apf::wf");
                nj(nj(nj(h, 0 >= n && Infinity === q ? null : new Bg(n, q)), new Nj(f.v.m, e.j.C, f.l)), new tj([g.j, g.l]));
                0 < e.j.m && nj(l, new uj(f.l, e.j.m));
                Ig(d,
                    c, new Yj(d, m, k, l), "itres")
            }, x(c.l, c))
        }, "i"));
        return c.j
    };
    class Bk {
        constructor(a) {
            this.j = new Oe(a)
        }
        contains(a) {
            return this.j.contains(a)
        }
    };
    class Ck {
        constructor(a) {
            this.j = a
        }
        map(a) {
            return null != this.j ? (a = a(this.j.value), a instanceof Ck ? a : new Ck({
                value: a
            })) : this
        }
    };
    var Dk = class extends Kb {
        constructor(a) {
            super(a)
        }
    };
    var Fk = class extends Kb {
            constructor(a) {
                super(a, -1, Ek)
            }
        },
        Ek = [3, 4];
    var Gk = class extends Kb {
        constructor(a) {
            super(a)
        }
    };
    var Ik = class extends Kb {
            constructor(a) {
                super(a, -1, Hk)
            }
        },
        Hk = [6, 7, 9, 10, 11];
    var Kk = class extends Kb {
            constructor(a) {
                super(a, -1, Jk)
            }
        },
        Lk = Ob(Kk),
        Jk = [1, 2, 5, 7];
    lh(new ih(0, {}));
    lh(new ih(1, {}));
    class Mk {
        constructor() {
            var a = jd `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.j = null;
            this.l = !1;
            this.A = Math.random();
            this.m = this.Qa;
            this.B = a
        }
        Eb(a) {
            this.j = a
        }
        v(a) {
            this.l = a
        }
        Qa(a, b, c = .01, d, e = "jserror") {
            if ((this.l ? this.A : Math.random()) > c) return !1;
            b.error && b.meta && b.id || (b = new yd(b, {
                context: a,
                id: e
            }));
            if (d || this.j) b.meta = {}, this.j && this.j(b.meta), d && d(b.meta);
            u.google_js_errors = u.google_js_errors || [];
            u.google_js_errors.push(b);
            u.error_rep_loaded || (Oc(u.document, this.B), u.error_rep_loaded = !0);
            return !1
        }
        ya(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.m(a, d, .01, c, "jserror")) throw d;
            }
        }
        O(a, b) {
            return (...c) => this.ya(a, () => b.apply(void 0, c))
        }
    };
    const Nk = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    var Ok = (a, b, c) => {
            const d = c || window,
                e = "undefined" !== typeof queueMicrotask;
            return function() {
                e && queueMicrotask(() => {
                    d.google_rum_task_id_counter = d.google_rum_task_id_counter || 1;
                    d.google_rum_task_id_counter += 1
                });
                const f = Nd();
                let g, h = 3;
                try {
                    g = a.apply(this, arguments)
                } catch (l) {
                    h = 13;
                    if (!b) throw l;
                    b(754, l)
                } finally {
                    d.google_measure_js_timing && f && Nk({
                        label: (754).toString(),
                        value: f,
                        duration: (Nd() || 0) - f,
                        type: h,
                        ...(e && {
                            taskId: d.google_rum_task_id_counter = d.google_rum_task_id_counter || 1
                        })
                    }, d)
                }
                return g
            }
        },
        Pk = (a, b) =>
        Ok(a, (c, d) => {
            (new Mk).Qa(c, d)
        }, b);

    function Qk(a, b) {
        return Pk(a, b).apply()
    }
    var Rk = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Sk(a) {
        return null == a ? a : Rk[a]
    }

    function Tk(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = C(a[c], 1),
                e = C(a[c], 2);
            if (d && null != e) {
                var f = {};
                f.wc = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function Uk(a, b) {
        var c = {};
        a && (c.Fb = C(a, 1), c.wb = C(a, 2), c.xb = !!sb(a, 3));
        b && (c.ib = Tk(xb(b, Dk, 3)), c.eb = Tk(xb(b, Dk, 4)));
        return c
    }
    var Vk = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };
    const Wk = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            c = ii(d.document, this.j);
            c.Da.setAttribute("data-ad-format", "auto");
            hi(c, a, b);
            return c
        }
    };
    const Xk = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            var e = 0 < xb(this.j, Fk, 9).length ? xb(this.j, Fk, 9)[0] : null,
                f = Uk(vb(this.j, Gk, 3), e);
            if (!e) return null;
            if (e = C(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = (new wc(d)).createElement(g);
                c.style.clear = f.xb ? "both" : "none";
                "A" == g && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.ib && gi(c.style, f.ib);
                d = (new wc(d)).createElement("INS");
                f.eb && gi(d.style, f.eb);
                c.appendChild(d);
                f = {
                    Va: c,
                    Da: d
                };
                f.Da.setAttribute("data-ad-type", "text");
                f.Da.setAttribute("data-native-settings-key",
                    e);
                hi(f, a, b);
                a = f
            } else a = null;
            return a
        }
    };

    function Yk(a, b) {
        a = a.l.query(b.document);
        return 0 < a.length ? a[0] : null
    }
    const Zk = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    };

    function $k(a) {
        return a.v
    }

    function al(a) {
        return Ah(rh) ? (a.A || (a.A = Yk(a.j, a.m)), a.A) : Yk(a.j, a.m)
    }

    function bl(a) {
        var b = a.W;
        a = a.m.document.createElement("div");
        Ah(rh) ? a.className = "google-auto-placed-ad-placeholder" : a.className = "google-auto-placed";
        var c = a.style;
        c.textAlign = "center";
        c.width = "100%";
        c.height = "0px";
        c.clear = b ? "both" : "none";
        return a
    }

    function cl(a, b) {
        re(a.B, 0) || a.B.set(0, []);
        a.B.get(0).push(b)
    }
    class dl {
        constructor(a, b, c, d, e, f, g, h = null, l = null) {
            this.j = a;
            this.L = b;
            this.W = c;
            this.Tb = d;
            e || new ph;
            this.m = f;
            this.F = g;
            this.C = h;
            (this.G = l) && vb(l, hh, 1) && vb(l, hh, 1);
            this.H = [];
            this.v = !1;
            this.B = new S;
            this.A = this.l = null
        }
        ca() {
            return this.F
        }
    };
    var el = a => {
        switch (a.Tb) {
            case 0:
            case 1:
                var b = a.G;
                null == b ? a = null : (a = vb(b, hh, 1), null == a ? a = null : (b = C(b, 2), a = null == b ? null : new ih(0, {
                    Wb: [a],
                    yc: b
                })));
                return null != a ? new Ck({
                    value: a
                }) : new Ck(null);
            case 2:
                return new Ck(null);
            default:
                return new Ck(null)
        }
    };

    function fl(a) {
        return el(a.ra).map(b => lh(b))
    }

    function gl(a) {
        a.l = a.l || fl(a);
        return a.l
    }
    const hl = class {
        constructor(a, b, c) {
            this.ra = a;
            this.j = b;
            this.Ma = c;
            this.l = null
        }
        fill(a, b) {
            var c = this.ra;
            if (a = c.L.l(a, b, this.j, c.m)) {
                b = a.Va;
                if (this.ra.v) throw Error("AMA:AP:AP");
                Eh(b, this.j, this.ra.j.j);
                c = this.ra;
                c.v = !0;
                Ah(rh) && (c.l && Ch(c.l), c.l = null);
                null != b && c.H.push(b)
            }
            return a
        }
    };

    function il(a) {
        switch (a) {
            case 0:
                return 0;
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
            default:
                return null
        }
    };

    function jl(a, b) {
        return Qk(() => {
            if (Ah(rh)) {
                var c = [],
                    d = [];
                for (var e = 0; e < a.length; e++) {
                    var f = a[e],
                        g = al(f);
                    if (g) {
                        var h = f;
                        if (!h.l && !h.v) {
                            var l = h;
                            var k = h,
                                m = null;
                            try {
                                var n = al(k);
                                if (n) {
                                    m = bl(k);
                                    Eh(m, n, k.j.j);
                                    var q = m
                                } else q = null
                            } catch (y) {
                                throw Ch(m), y;
                            }
                            l.l = q
                        }(h = h.l) && d.push({
                            vc: f,
                            fb: g,
                            na: h
                        })
                    }
                }
                if (0 < d.length)
                    for (q = U(b), n = Fe(b), e = 0; e < d.length; e++) {
                        const {
                            vc: y,
                            fb: E,
                            na: G
                        } = d[e];
                        f = kl(G, n, q);
                        c.push(new hl(y, E, f))
                    }
                q = c
            } else {
                q = [];
                n = [];
                try {
                    const y = [];
                    for (let E = 0; E < a.length; E++) {
                        var r = a[E],
                            t = al(r);
                        t && y.push({
                            lb: r,
                            fb: t
                        })
                    }
                    for (t =
                        0; t < y.length; t++) {
                        r = n;
                        g = r.push; {
                            l = y[t];
                            k = l.fb;
                            m = l.lb;
                            const E = bl(m);
                            try {
                                Eh(E, k, m.j.j), h = E
                            } catch (G) {
                                throw Ch(E), G;
                            }
                        }
                        g.call(r, h)
                    }
                    c = U(b);
                    d = Fe(b);
                    for (g = 0; g < n.length; g++) e = kl(n[g], d, c), f = y[g], q.push(new hl(f.lb, f.fb, e))
                } finally {
                    for (c = 0; c < n.length; c++) Ch(n[c])
                }
            }
            return q
        }, b)
    }

    function kl(a, b, c) {
        a = a.getBoundingClientRect();
        return new wj(a.left + b, a.top + c, a.right - a.left)
    };

    function ll(a, b) {
        const c = {
            top: b.j - 25,
            right: b.l + b.m,
            bottom: b.j + 25,
            left: b.l
        };
        return !sa(a, d => we(d, c))
    };

    function ml(a) {
        return function(b) {
            return jl(b, a)
        }
    }

    function nl(a) {
        const b = Mj(Ij(a));
        return c => ll(b, c.Ma)
    }

    function ol(a) {
        if (!a.length) return Pb;
        const b = new Bk(a);
        return c => b.contains(c.Tb)
    }

    function pl(a, b) {
        if (0 >= a) return Qb;
        const c = T(b).scrollHeight - a;
        return function(d) {
            return d.Ma.j <= c
        }
    }
    const ql = (a, b) => b.Ma.j >= a,
        rl = (a, b, c) => {
            c = c.Ma.m;
            return a <= c && c <= b
        };
    var sl = class {
        Ga(a) {
            return nl(a)
        }
        Ha() {
            return 9
        }
    };
    var tl = class {
        constructor(a) {
            this.j = a
        }
        Ga(a) {
            return pl(this.j, a)
        }
        Ha() {
            return 13
        }
    };
    var ul = class {
        Ga(a) {
            const b = T(a).clientHeight;
            return b ? ja(ql, b + U(a)) : Pb
        }
        Ha() {
            return 12
        }
    };
    var vl = class {
        constructor(a) {
            this.j = a
        }
        Ga() {
            return ol(this.j)
        }
        Ha() {
            return 1
        }
    };
    var wl = class {
        Ga() {
            return Rb($k)
        }
        Ha() {
            return 7
        }
    };
    var xl = class {
        constructor(a, b) {
            this.minWidth = a;
            this.j = b
        }
        Ga() {
            return ja(rl, this.minWidth, this.j)
        }
        Ha() {
            return 10
        }
    };
    var yl = class {
        constructor(a) {
            this.v = a.l.slice(0);
            this.l = a.j.slice(0);
            this.m = a.m;
            this.A = a.A;
            this.j = a.v
        }
    };

    function zl(a, b = 0, c = Infinity) {
        a.j.push(new xl(b, c));
        return a
    }

    function Al(a, b = 0) {
        a.j.push(new tl(b));
        return a
    }
    var Bl = class {
        constructor() {
            this.m = 0;
            this.A = !1;
            this.l = [].slice(0);
            this.j = [].slice(0)
        }
        build() {
            return new yl(this)
        }
    };

    function Cl(a, b, c) {
        re(a.j, b) || a.j.set(b, []);
        a.j.get(b).push(c)
    }
    class Dl {
        constructor() {
            this.j = new S
        }
    };

    function El(a, b, c) {
        const d = b.ra;
        if (!re(a.j, d)) {
            var e = a.j,
                f = e.set;
            gl(b);
            f.call(e, d, new Fl)
        }
        c(a.j.get(d))
    }

    function Gl(a, b) {
        El(a, b, c => {
            c.j = !0
        })
    }

    function Hl(a, b) {
        El(a, b, c => {
            c.l = !0
        })
    }
    var Il = class {
        constructor() {
            this.j = new S
        }
    };
    class Fl {
        constructor() {
            this.l = this.j = !1
        }
    };
    class Jl {
        constructor(a) {
            this.l = a;
            this.j = -1
        }
    };

    function Kl(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function Ll(a) {
        const b = null.ed.filter(c => te(c.yb).every(d => c.yb.get(d) === a.get(d)));
        return 0 === b.length ? (null.Cc.push(19), null) : b.reduce((c, d) => c.yb.Ab() > d.yb.Ab() ? c : d, b[0])
    }

    function Ml(a) {
        a = gl(a);
        if (null == a.j) return null.Cc.push(18), null;
        a = a.j.value;
        if (re(null.Nb, a)) return null.Nb.get(a);
        var b = jh(a);
        b = Ll(b);
        null.Nb.set(a, b);
        return b
    };

    function Nl(a) {
        return 0 == a.j.length ? a : a.sort((b, c) => (Ml(b) ? .xc ? ? Number.MAX_VALUE) - (Ml(c) ? .xc ? ? Number.MAX_VALUE))
    }

    function Ol(a, b) {
        var c = Math;
        const d = b.j,
            e = b.ra.j.j;
        c = b.Ma.j + 200 * c.min.call(c, 20, 0 == e || 3 == e ? Kl(d.parentElement) : Kl(d));
        a = a.j;
        0 > a.j && (a.j = T(a.l).scrollHeight || 0);
        b = a.j - b.Ma.j;
        return c + (1E3 < b ? 0 : 2 * (1E3 - b))
    }

    function Pl(a, b) {
        return 0 == b.j.length ? b : b.sort((c, d) => Ol(a, c) - Ol(a, d))
    }

    function Ql(a, b) {
        return b.sort((c, d) => {
            const e = c.ra.C,
                f = d.ra.C;
            var g;
            null == e || null == f ? g = null == e && null == f ? Ol(a, c) - Ol(a, d) : null == e ? 1 : -1 : g = e - f;
            return g
        })
    }
    class Rl {
        constructor(a) {
            this.j = new Jl(a)
        }
    };

    function Sl(a, b) {
        var c = a.m;
        for (var d of b.v) c = dh(c, d.Ga(a.j), Tl(d.Ha()));
        d = c = c.apply(ml(a.j));
        for (const e of b.l) d = dh(d, e.Ga(a.j), Ul(e.Ha()));
        switch (b.m) {
            case 1:
                d = Pl(a.l, d);
                break;
            case 2:
                d = Ql(a.l, d);
                break;
            case 3:
                const e = R(Il);
                d = Nl(d);
                c.forEach(f => {
                    Gl(e, f);
                    null ? .dd(f)
                });
                d.forEach(f => Hl(e, f))
        }
        b.A && (d = fh(d, sc(a.j.location.href + a.j.localStorage.google_experiment_mod)));
        1 === b.j ? .length && Cl(a.v, b.j[0], {
            Rc: c.j.length,
            cd: d.j.length
        });
        return d.j.slice(0)
    }
    class Vl {
        constructor(a, b) {
            this.m = new eh(a);
            this.l = new Rl(b);
            this.j = b;
            this.v = new Dl
        }
    }
    const Tl = a => b => cl(b, a),
        Ul = a => b => cl(b.ra, a);
    var Wl = (a, b, c, d = null) => {
            const e = g => {
                let h;
                try {
                    h = JSON.parse(g.data)
                } catch (l) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            H(a, "message", e);
            let f = !1;
            return () => {
                let g = !1;
                f || (f = !0, g = I(a, "message", e));
                return g
            }
        },
        Xl = (a, b, c, d, e) => {
            if (!(0 >= e) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) 1 < e && Xl(a[f], b, c, d, --e)
        };

    function Yl(a, b, c, d) {
        return Wl(a, "fullscreen", d.O(952, (e, f) => {
            if (f.source === b) {
                if (!("eventType" in e)) throw Error(`bad message ${JSON.stringify(e)}`);
                delete e.googMsgType;
                c(e)
            }
        }))
    };
    class Zl {
        constructor() {
            this.promise = new Promise(a => {
                this.resolve = a
            })
        }
    };
    async function $l(a) {
        return a.v.promise
    }
    async function am(a) {
        return a.l.promise
    }
    async function bm(a) {
        return a.m.promise
    }

    function cm(a, b) {
        b.type = "err_st";
        b.slot = a.slotType;
        Jd(a.B, "fullscreen_tag", b, !1, .25)
    }
    class dm extends je {
        constructor(a, b, c, d) {
            super();
            this.slotType = 1;
            this.pubWin = a;
            this.Lb = b;
            this.A = c;
            this.B = d;
            this.j = 1;
            this.v = new Zl;
            this.l = new Zl;
            this.m = new Zl
        }
        Ia() {
            const a = Yl(this.pubWin, this.Lb, b => {
                if ("adError" === b.eventType) this.m.resolve(), this.j = 0;
                else if ("adReady" === b.eventType && 1 === this.j) b.slotType !== this.slotType && (cm(this, {
                    cur_st: this.j,
                    evt: b.eventType,
                    adp_tp: b.slotType
                }), this.j = 0), this.v.resolve(), this.j = 2;
                else if ("adClosed" === b.eventType && 2 === this.j) this.l.resolve(b.result), this.j = 3;
                else if ("adClosed" !==
                    b.eventType || 3 !== this.j) cm(this, {
                    cur_st: this.j,
                    evt: b.eventType
                }), this.j = 0
            }, this.A);
            Q(this, a)
        }
    }

    function em(a, b, c, d) {
        a = new dm(a, b, c, d);
        a.Ia();
        return a
    };
    var gm = class extends Kb {
            constructor(a) {
                super(a, -1, fm)
            }
        },
        fm = [19];

    function hm(a, b) {
        a = xe(a) ? .tagSpecificState[1];
        return null == a ? null : a.debugCard ? .getAdType() === b ? a.debugCard : null
    }

    function im(a, b) {
        (a = hm(a, 4)) && a.displayAdLoadedContent(b)
    };
    let jm = void 0;

    function km(a, b) {
        if (b) {
            var c = b.adClient;
            if ("string" === typeof c && c) {
                a.m = c;
                a.l = !!b.adTest;
                c = b.pubVars;
                ca(c) && (a.B = c);
                if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
                    a.j = {};
                    for (d of b.fillMessage) a.j[d.key] = d.value
                }
                a.A = b.adWidth;
                a.v = b.adHeight;
                xd(a.A) && xd(a.v) || $i("rctnosize", b);
                var d = !0
            } else d = !1
        } else d = !1;
        return d && a.F(b)
    }
    class lm {
        constructor() {
            this.j = this.B = this.l = this.m = null;
            this.v = this.A = 0
        }
        F() {
            return !0
        }
    };
    class mm extends lm {
        F(a) {
            a.hasFillMessage || (this.j = null);
            return !0
        }
    };

    function nm(a, b) {
        for (const e of b) {
            b = a;
            var c = e,
                d = om(b.document, c.x, c.y);
            if (d) {
                if (!(c = pm(d))) a: {
                    c = d;b = b.document;
                    for (c = c.offsetParent; c && c !== b.body; c = c.offsetParent)
                        if (d = pm(c)) {
                            c = d;
                            break a
                        }
                    c = null
                }
                b = c || null
            } else b = null;
            if (b) return b
        }
        return null
    }

    function om(a, b, c) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b, c));
        return a.elementFromPoint(b, c)
    }

    function qm(a, b, c) {
        const d = [];
        for (let f = 0; 3 > f; f++)
            for (let g = 0; 3 > g; g++) {
                var e = d;
                e.push.call(e, {
                    x: g / 2 * a,
                    y: b + f / 2 * (c - b)
                })
            }
        return d
    }

    function pm(a) {
        return "fixed" !== nd(a, "position") ? null : "GoogleActiveViewInnerContainer" === a.getAttribute("class") || 1 >= td(a).width && 1 >= td(a).height ? null : a
    }
    var rm = a => {
        const b = 812 === a.screen.height && 375 === a.screen.width || 812 === a.screen.width && 375 === a.screen.height || 414 === a.screen.width && 896 === a.screen.height || 896 === a.screen.width && 414 === a.screen.height;
        return null != (a.navigator && a.navigator.userAgent && a.navigator.userAgent.match(/iPhone OS 1[1-9]|[2-9]\d/)) && b
    };
    const sm = 90 * 1.38;

    function tm(a, b) {
        const c = a && Ci(a.location, "google_anchor_debug");
        if (2 === b || c) {
            var d = qm(a.innerWidth, 0, Math.min(Math.round(a.innerWidth / 320 * 50), sm) + 15);
            return null != nm(a, d) ? ($i("flgr::top", {
                c: "fixed",
                d: String(c),
                p: b,
                url: a ? .location ? .href ? ? ""
            }), "bottom") : "top"
        }
        d = a.innerWidth;
        const e = a.innerHeight,
            f = Math.min(Math.round(a.innerWidth / 320 * 50), sm) + 15,
            g = qm(d, e - f, e);
        25 < f && g.push({
            x: d - 25,
            y: e - 25
        });
        return null != nm(a, g) ? ($i("flgr::bottom", {
            c: "fixed",
            d: String(c),
            p: b,
            url: a ? .location ? .href ? ? ""
        }), "top") : "bottom"
    };

    function um(a = []) {
        const b = Date.now();
        return qa(a, c => 36E5 > b - c)
    }

    function vm(a) {
        try {
            const b = a.getItem("__lsv__");
            if (!b) return [];
            let c;
            try {
                c = JSON.parse(b)
            } catch (d) {}
            if (!Array.isArray(c) || sa(c, d => !Number.isInteger(d))) return a.removeItem("__lsv__"), [];
            c = um(c);
            c.length || a ? .removeItem("__lsv__");
            return c
        } catch (b) {
            return null
        }
    };
    const wm = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1,
            NOSCRIPT: 1
        },
        xm = {
            IMG: " ",
            BR: "\n"
        };
    var ym = (a, b, c, d) => {
            if (!(a.nodeName in wm))
                if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                else if (a.nodeName in xm) d && "IMG" == a.nodeName && a.hasAttribute("alt") && b.push(" " + a.getAttribute("alt")), b.push(xm[a.nodeName]);
            else
                for (a = a.firstChild; a;) ym(a, b, c, d), a = a.nextSibling
        },
        zm = / \xAD /g,
        Am = /\xAD/g,
        Bm = /\u200B/g,
        Cm = / +/g,
        Dm = /^\s*/;

    function Em(a, b) {
        return null !== Fc(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c), !0)
    }

    function Fm(a, b) {
        return Fc(a, c => c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position, !0)
    }

    function Gm(a) {
        const b = [];
        for (const c of a.document.querySelectorAll("*")) {
            const d = a.getComputedStyle(c, null);
            "fixed" === d.position && "none" !== d.display && "hidden" !== d.visibility && b.push(c)
        }
        return b
    }

    function Hm(a) {
        return Math.round(10 * Math.round(a / 10))
    }

    function Im(a) {
        return `${a.position}-${Hm(a.P)}x${Hm(a.T)}-${Hm(a.scrollY+a.Ra)}Y`
    }

    function Jm(a) {
        return `f-${Im({position:a.position,Ra:a.Ra,scrollY:0,P:a.P,T:a.T})}`
    }

    function Km(a, b) {
        a = Math.min(a ? ? Infinity, b ? ? Infinity);
        return Infinity !== a ? a : 0
    }

    function Lm(a, b, c) {
        const d = xe(c.Y).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top - 10, 0),
                    g = Math.min(e.bottom + 10, c.T),
                    h = Math.max(e.left - 10, 0);
                e = Math.min(e.right + 10, c.P);
                for (var l = .3 * c.P; f <= g; f += 10) {
                    if (0 < e && h < l) {
                        var k = Jm({
                            position: "left",
                            Ra: f,
                            P: c.P,
                            T: c.T
                        });
                        b.set(k, Km(b.get(k), h))
                    }
                    if (h < c.P && e > c.P - l) {
                        k = Jm({
                            position: "right",
                            Ra: f,
                            P: c.P,
                            T: c.T
                        });
                        const m = c.P - e;
                        b.set(k, Km(b.get(k), m))
                    }
                }
                d.add(a)
            }
        }
    };
    var Mm = (a, b, c) => {
        a.dataset.adsbygoogleStatus = "reserved";
        a.className += " adsbygoogle-noablate";
        c.adsbygoogle || (c.adsbygoogle = [], Oc(c.document, jd `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`));
        c.adsbygoogle.push({
            element: a,
            params: b
        })
    };
    const Nm = [1, 2];

    function Om(a, b, c) {
        const d = Dc(document, "INS");
        d.className = "adsbygoogle";
        b.document.body.appendChild(d);
        const e = c.B || {};
        e.google_ad_client = c.m;
        e.google_ad_width = c.A;
        e.google_ad_height = c.v;
        e.google_reactive_ad_format = a.j;
        c.j && (e.google_reactive_fill_message = c.j);
        c.l && (e.google_adtest = "on");
        Mm(d, e, b)
    }
    class Pm {
        constructor(a) {
            this.j = a
        }
        verifyAndProcessConfig(a, b) {
            const c = xe(a);
            if (c.wasReactiveAdConfigReceived[this.j]) return !1;
            const d = new mm;
            if (!km(d, b)) return !1;
            Nm.forEach(e => {
                c.wasReactiveAdConfigReceived[e] = !0
            });
            Om(this, a, d);
            return !0
        }
    };
    class Qm {
        constructor(a, b) {
            this.m = a;
            this.j = !1;
            this.v = b;
            this.l = this.v.O(264, c => {
                this.j && (Rm || (c = Date.now()), this.m(c), Rm ? Sm.call(u, this.l) : u.setTimeout(this.l, 17))
            })
        }
        start() {
            this.j || (this.j = !0, Rm ? Sm.call(u, this.l) : this.l(0))
        }
    }
    var Sm = u.requestAnimationFrame || u.webkitRequestAnimationFrame,
        Rm = !!Sm && !/'iPhone'/.test(u.navigator.userAgent);

    function Tm(a) {
        return a * a * a
    }

    function Um(a) {
        a = 1 - a;
        return 1 - a * a * a
    }

    function Vm(a) {
        a.L = !1;
        a.A.start()
    }
    class Wm {
        constructor(a, b, c, d) {
            this.j = a;
            this.B = b;
            this.W = c;
            this.progress = 0;
            this.l = null;
            this.L = !1;
            this.m = [];
            this.v = null;
            this.A = new Qm(x(this.H, this), d)
        }
        H(a) {
            if (this.L) this.A.j = !1;
            else {
                null === this.l && (this.l = a);
                this.progress = (a - this.l) / this.W;
                1 <= this.progress && (this.progress = 1);
                a = this.v ? this.v(this.progress) : this.progress;
                this.m = [];
                for (let b = 0; b < this.j.length; b++) this.m.push((this.B[b] - this.j[b]) * a + this.j[b]);
                this.G();
                1 == this.progress && (this.A.j = !1, this.C())
            }
        }
        C() {}
        G() {}
        reset(a, b, c) {
            this.l = null;
            this.j =
                a;
            this.B = b;
            this.W = c;
            this.progress = 0
        }
    };
    class Xm extends Wm {
        constructor(a, b, c, d, e, f, g, h) {
            super([b], [c], d, f);
            this.I = a;
            this.J = e;
            this.F = g ? g : null;
            this.v = h || null
        }
        G() {
            const a = {};
            a[this.J] = this.m[0] + "px";
            P(this.I, a)
        }
        C() {
            this.F && this.F()
        }
    };

    function Ym(a) {
        a.j && I(a.j, a.l, a.m, Vb)
    }
    class Zm extends je {
        constructor(a, b, c) {
            super();
            this.j = a;
            this.l = b;
            this.m = c;
            H(this.j, this.l, this.m, Vb);
            Q(this, () => void Ym(this))
        }
    }
    class $m {
        constructor() {
            this.reset()
        }
        add(a) {
            const b = Date.now();
            this.j.push({
                time: b,
                coords: a
            });
            for (a = this.l; a < this.j.length; ++a)
                if (100 <= b - this.j[a].time) delete this.j[a];
                else break;
            this.l = a;
            a >= this.j.length && this.reset()
        }
        reset() {
            this.j = [];
            this.l = 0
        }
    }

    function an(a, b) {
        a.B && bn(a);
        a.B = !0;
        a.m = a.J();
        a.l = cn(b);
        a.j = a.l;
        a.A = new $m;
        a.A.add(a.l);
        a.G = new Zm(a.v, "mousemove", x(a.Z, a));
        ke(a, a.G);
        a.I = new Zm(a.v, "touchmove", x(a.Z, a));
        ke(a, a.I);
        a.F = new Zm(a.v, "mouseup", x(a.aa, a));
        ke(a, a.F);
        a.H = new Zm(a.v, "touchend", x(a.aa, a));
        ke(a, a.H)
    }

    function cn(a) {
        a = a.touches && a.touches[0] || a;
        return new J(a.clientX, a.clientY)
    }

    function bn(a) {
        a.B = !1;
        a.C = !1;
        a.m = null;
        a.l = null;
        a.j = null;
        a.A = null;
        a.G && Ym(a.G);
        a.I && Ym(a.I);
        a.F && Ym(a.F);
        a.H && Ym(a.H)
    }
    class dn extends je {
        constructor(a, b, c) {
            super();
            this.v = a;
            this.target = b;
            this.K = c || b;
            this.C = this.B = this.M = !1;
            this.A = this.j = this.l = this.m = this.H = this.F = this.I = this.G = null;
            this.oa = new Zm(this.K, "mousedown", d => {
                0 == d.button && an(this, d)
            });
            ke(this, this.oa);
            this.ha = new Zm(this.K, "touchstart", d => an(this, d));
            ke(this, this.ha);
            this.ga = new Zm(this.K, "click", d => {
                this.M ? this.M = !1 : d.stopPropagation()
            });
            ke(this, this.ga)
        }
        R() {
            if (this.m && this.l && this.j) {
                var a = this.m,
                    b = oc(this.j, this.l);
                var c = new J(a.x + b.x, a.y + b.y);
                a = this.target;
                c instanceof J ? (b = c.x, c = c.y) : (b = c, c = void 0);
                a.style.left = sd(b, !1);
                a.style.top = sd(c, !1)
            }
        }
        U() {}
        J() {
            var a = this.target,
                b;
            a: {
                if (Zb && (b = a.parentElement)) break a;b = a.parentNode;b = ca(b) && 1 == b.nodeType ? b : null
            }
            var c = b;
            b = qd(a);
            c = qd(c);
            b = new J(b.x - c.x, b.y - c.y);
            a = wd(a, "margin");
            return oc(b, new J(a.left, a.top))
        }
        Z(a) {
            if (this.B)
                if (a.preventDefault(), this.j = cn(a), this.A.add(this.j), this.C) this.R();
                else {
                    var b = this.l,
                        c = this.j;
                    a = b.x - c.x;
                    b = b.y - c.y;
                    10 <= Math.sqrt(a * a + b * b) && (this.R(), this.C = !0)
                }
        }
        aa(a) {
            this.C ? (a.preventDefault(),
                this.j = cn(a), this.U()) : this.M = !0;
            bn(this)
        }
    };

    function en(a) {
        const b = fn(a);
        pa(a.j.maxZIndexListeners, c => c(b))
    }

    function fn(a) {
        a = Sc(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }

    function gn(a, b) {
        a.j.maxZIndexListeners.push(b);
        b(fn(a))
    }
    class hn {
        constructor(a) {
            this.j = xe(a).floatingAdsStacking
        }
    }
    class jn {
        constructor(a) {
            this.l = a;
            this.j = null
        }
    };

    function kn(a) {
        var b = a.ownerDocument;
        const c = b.createElementNS("http://www.w3.org/2000/svg", "line");
        c.setAttribute("x1", "22");
        c.setAttribute("y1", "18");
        c.setAttribute("x2", "28");
        c.setAttribute("y2", "12");
        a.appendChild(c);
        b = b.createElementNS("http://www.w3.org/2000/svg", "line");
        b.setAttribute("x1", "28");
        b.setAttribute("y1", "12");
        b.setAttribute("x2", "34");
        b.setAttribute("y2", "18");
        a.appendChild(b)
    }

    function ln(a) {
        var b = a.ownerDocument;
        const c = b.createElementNS("http://www.w3.org/2000/svg", "line");
        c.setAttribute("x1", "22");
        c.setAttribute("y1", "12");
        c.setAttribute("x2", "28");
        c.setAttribute("y2", "18");
        a.appendChild(c);
        b = b.createElementNS("http://www.w3.org/2000/svg", "line");
        b.setAttribute("x1", "28");
        b.setAttribute("y1", "18");
        b.setAttribute("x2", "34");
        b.setAttribute("y2", "12");
        a.appendChild(b)
    }

    function mn(a, b) {
        if (!a.A && a.m) {
            var c = parseInt(a.m.style[a.j], 10),
                d = -a.B.height - (b ? 30 : 0),
                e = (c - d) / .1;
            "bottom" == a.j && rm(a.Y) && a.G.ya(405, () => nn(a, "21px", e, "ease-in"));
            b || on(a, !0);
            c === d ? a.v = !b : (a.A = !0, c = new Xm(a.m, c, d, e, a.j, a.G, () => {
                a.A = !1;
                a.v = !b;
                b || on(a, !0);
                b && a.aa();
                a.m.setAttribute("data-anchor-status", "dismissed")
            }, Tm), a.ea(), Vm(c))
        }
    }

    function pn(a, b) {
        He(b);
        O(b, {
            "background-color": "#FAFAFA",
            display: "block",
            position: "relative",
            "z-index": 1,
            height: "5px",
            "box-shadow": "top" == a.j ? "rgba(0, 0, 0, 0.2) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px" : "rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"
        });
        "top" == a.j && O(a.l ? ? b, {
            position: "absolute",
            top: a.B.height + "px",
            width: "100%"
        });
        const c = Pc("SPAN", a.Y.document);
        c.appendChild(qn(a));
        const d = e => {
            e.target === c && (e.preventDefault && e.preventDefault(), e.stopImmediatePropagation &&
                e.stopImmediatePropagation(), e.stopPropagation && e.stopPropagation())
        };
        H(c, "click", d);
        Q(a, () => I(c, "click", d));
        rn(a, c);
        b.className = "ee";
        b.appendChild(c)
    }

    function qn(a) {
        let b;
        let c, d;
        switch (a.j) {
            case "top":
                var e = "dropShadowBottom";
                b = "M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z";
                var f = "0";
                c = "up";
                d = kn;
                break;
            case "bottom":
                e = "dropShadowTop", b = "M0,26 L0,6 A6,6 0 0,1 6,1 L50,1 A6,6 0 0,1 56,6 L56,20 A6,6 0 0,0 62,26 Z", f = "25", c = "down", d = ln
        }
        const g = a.Y.document,
            h = g.createElementNS("http://www.w3.org/2000/svg", "svg");
        h.style.setProperty("margin", "0 0 0 0px", "important");
        h.style.setProperty("position", "absolute", "important");
        h.style.setProperty(a.j, "0", "important");
        h.style.setProperty("left", "0%", "important");
        h.style.setProperty("display", "block", "important");
        h.style.setProperty("width", "80px", "important");
        h.style.setProperty("height", "30px", "important");
        h.style.setProperty("transform", "none", "important");
        h.style.setProperty("pointer-events", "initial", "important");
        a = g.createElementNS("http://www.w3.org/2000/svg", "defs");
        const l = g.createElementNS("http://www.w3.org/2000/svg", "filter");
        l.setAttribute("id", e);
        l.setAttribute("filterUnits",
            "userSpaceOnUse");
        l.setAttribute("color-interpolation-filters", "sRGB");
        var k = g.createElementNS("http://www.w3.org/2000/svg", "feComponentTransfer");
        k.setAttribute("in", "SourceAlpha");
        k.setAttribute("result", "TransferredAlpha");
        var m = g.createElementNS("http://www.w3.org/2000/svg", "feFuncR");
        m.setAttribute("type", "discrete");
        m.setAttribute("tableValues", "0.5");
        k.appendChild(m);
        m = g.createElementNS("http://www.w3.org/2000/svg", "feFuncG");
        m.setAttribute("type", "discrete");
        m.setAttribute("tableValues", "0.5");
        k.appendChild(m);
        m = g.createElementNS("http://www.w3.org/2000/svg", "feFuncB");
        m.setAttribute("type", "discrete");
        m.setAttribute("tableValues", "0.5");
        k.appendChild(m);
        l.appendChild(k);
        k = g.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        k.setAttribute("in", "TransferredAlpha");
        k.setAttribute("stdDeviation", "2");
        l.appendChild(k);
        k = g.createElementNS("http://www.w3.org/2000/svg", "feOffset");
        k.setAttribute("dx", "0");
        k.setAttribute("dy", "0");
        k.setAttribute("result", "offsetblur");
        l.appendChild(k);
        k = g.createElementNS("http://www.w3.org/2000/svg", "feMerge");
        k.appendChild(g.createElementNS("http://www.w3.org/2000/svg", "feMergeNode"));
        m = g.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
        m.setAttribute("in", "SourceGraphic");
        k.appendChild(m);
        l.appendChild(k);
        a.appendChild(l);
        h.appendChild(a);
        a = g.createElementNS("http://www.w3.org/2000/svg", "path");
        a.setAttribute("d", b);
        a.setAttribute("stroke", "#FAFAFA");
        a.setAttribute("stroke-width", "1");
        a.setAttribute("fill", "#FAFAFA");
        a.style.setProperty("filter",
            `url(#${e})`);
        h.appendChild(a);
        e = g.createElementNS("http://www.w3.org/2000/svg", "rect");
        e.setAttribute("x", "0");
        e.setAttribute("y", f);
        e.setAttribute("width", "80");
        e.setAttribute("height", "5");
        e.style.setProperty("fill", "#FAFAFA");
        h.appendChild(e);
        f = g.createElementNS("http://www.w3.org/2000/svg", "g");
        f.setAttribute("class", c);
        f.setAttribute("stroke", "#616161");
        f.setAttribute("stroke-width", "2px");
        f.setAttribute("stroke-linecap", "square");
        d(f);
        h.appendChild(f);
        return h
    }

    function rn(a, b) {
        const c = b.getElementsByTagName("svg")[0];
        O(b, {
            display: "block",
            width: "80px",
            height: "45px",
            [a.j]: "0",
            left: "0%",
            marginLeft: "0px",
            "pointer-events": "none"
        });
        $c(c)
    }

    function sn(a) {
        if (!a.A) {
            var b = parseInt(a.m.style[a.j], 10);
            if (b) {
                a.A = !0;
                const c = -b / .1;
                "bottom" == a.j && rm(a.Y) && a.G.ya(404, () => nn(a, "0px", c, "ease-out"));
                on(a, !1);
                b = new Xm(a.m, b, 0, c, a.j, a.G, () => {
                    a.A = !1;
                    a.v = !1;
                    tn(a);
                    a.m.setAttribute("data-anchor-status", "displayed");
                    a.m.setAttribute("data-anchor-shown", !0);
                    on(a, !1)
                }, Um);
                a.X();
                Vm(b)
            } else a.v = !1
        }
    }

    function un(a) {
        return a.l ? ? a.C
    }

    function on(a, b) {
        const c = a.C.getElementsByTagName("svg")[0].getElementsByTagName("g")[0];
        for (var d; d = c.firstChild;) c.removeChild(d);
        switch (a.j) {
            case "top":
                (b ? ln : kn)(c);
                break;
            case "bottom":
                (b ? kn : ln)(c)
        }
    }

    function vn(a, b, c, d) {
        Jd(a.Z, "flgr", {
            i: b,
            dc: a.v ? "1" : "0",
            fdc: c ? "1" : "0",
            ds: a.I ? "1" : "0",
            expId: a.ga,
            sc: a.R ? "1" : "0",
            off: d,
            vw: T(a.Y).clientWidth,
            req: a.K.src,
            tp: a.j,
            h: a.B.height,
            w: a.B.width,
            qemId: a.fa
        }, !0, 1)
    }

    function nn(a, b, c, d) {
        P(a.K, {
            transition: c / 1E3 + "s",
            "transition-timing-function": d,
            "margin-top": b
        })
    }

    function tn(a) {
        a.U();
        a.U = () => {}
    }

    function wn(a, b) {
        if ("bottom" !== a.j && "top" !== a.j) throw Error("unsupported reactive type");
        const c = f => {
                f.preventDefault();
                a.A || (a.J = !0, a.v ? sn(a) : mn(a, a.I), vn(a, "c", !a.v, 0))
            },
            d = a.C;
        H(d, "click", c);
        Q(a, () => I(d, "click", c));
        a.l && (H(a.l, "click", c), Q(a, () => a.l && I(a.l, "click", c)));
        P(b, {
            opacity: 1
        });
        var e = a.Y.document;
        e && (a.m = b, a.ha && (a.M = new("top" == a.j ? xn : yn)(a, e, a.B.height, b, a.C), ke(a, a.M)), e = {
            position: "fixed",
            left: "0px"
        }, e[a.j] = -a.B.height - 30 + "px", P(b, e), O(b, {
            overflow: "visible",
            background: "#FAFAFA"
        }), gn(a.oa,
            f => {
                const g = null == a.V ? 2147483647 : a.V;
                P(b, {
                    zIndex: null == f ? g : Math.min(f, g)
                })
            }), sn(a))
    }
    class zn extends je {
        constructor(a, b, c, d, e, f, g, h, l, k, m) {
            super();
            this.F = a;
            this.Y = b;
            this.K = c;
            this.B = d;
            this.aa = f || (() => {});
            this.U = g || (() => {});
            this.G = h;
            this.Z = l;
            this.ea = k;
            this.X = m;
            Q(this, () => mn(this, !0));
            this.C = Pc("INS", b.document);
            Q(this, () => this.C = null);
            this.l = null;
            HTMLElement.prototype.attachShadow && !this.G.ya(1013, () => {
                this.l = Pc("DIV", b.document);
                this.l.className = "grippy-host";
                this.l.attachShadow({
                    mode: "closed"
                }).appendChild(this.C);
                Q(this, () => this.l = null);
                return !0
            }) && (this.l = null);
            this.v = this.A = !1;
            this.H = 0;
            this.j = e;
            this.J = !1;
            this.m = this.M = null;
            this.T = b.innerHeight;
            this.R = "true" === this.F.scroll_detached;
            this.I = "true" === this.F.dismissable;
            this.ha = "true" === this.F.draggable || "top" != this.j;
            this.ga = this.F.expId || "";
            this.fa = this.F.qemId || "";
            a = parseInt(this.F.z_index_override, 10);
            this.V = isNaN(a) ? null : a;
            this.oa = new hn(b);
            !this.I && u.navigator.userAgent.match(/iPhone OS 7/) && b.setInterval(() => {
                const n = this.Y.innerHeight;
                if (2 > Math.abs(n - 460) || 2 > Math.abs(n - 529)) n < this.T && 2 > Math.abs(U(this.Y) - this.H - 68) &&
                    (this.J = !0, this.v && sn(this)), this.T = n
            }, 300);
            pn(this, this.C)
        }
    }
    class An extends dn {
        constructor(a, b, c, d, e) {
            super(b, d, e);
            this.fa = a;
            this.X = c
        }
        U() {
            var a = this.fa;
            if (!a.A) {
                const b = parseInt(a.m.style[a.j], 10);
                b >= -(a.B.height / 2) ? (sn(a), vn(a, "d", !1, b)) : (mn(a, a.I), vn(a, "d", !0, b))
            }
        }
        R() {
            if (null !== this.m && null !== this.l && null !== this.j) {
                var a = this.ea(this.m.y, oc(this.j, this.l).y);
                0 < a && (a = 0);
                a < -this.X && (a = -this.X);
                var b = {};
                b[this.V()] = a + "px";
                P(this.target, b)
            }
        }
    }
    class xn extends An {
        J() {
            return new J(0, parseInt(this.target.style.top, 10))
        }
        ea(a, b) {
            return b - a
        }
        V() {
            return "top"
        }
    }
    class yn extends An {
        J() {
            return new J(0, parseInt(this.target.style.bottom, 10))
        }
        ea(a, b) {
            return a - b
        }
        V() {
            return "bottom"
        }
    };

    function Bn(a, b, c, d) {
        if (!a.K) {
            a.K = [];
            for (var e = a.m.parentElement; e;) {
                a.K.push(e);
                if (a.Z(e)) break;
                e = e.parentNode && 1 === e.parentNode.nodeType ? e.parentNode : null
            }
        }
        e = a.K.slice();
        !c && a.Z(e[e.length - 1]) && e.pop();
        let f;
        if (d)
            for (c = e.length - 1; 0 <= c; --c)(f = e[c]) && b.call(a, f, c, e);
        else
            for (c = 0; c < e.length; ++c)(f = e[c]) && b.call(a, f, c, e)
    }
    var Cn = class extends je {
        constructor(a, b, c) {
            super();
            this.m = a;
            this.l = b;
            this.j = c;
            this.K = null;
            Q(this, () => this.K = null)
        }
        Z(a) {
            return this.j === a
        }
    };

    function Dn(a, b, c) {
        null !== b && null !== Vc(a.getAttribute("width")) && a.setAttribute("width", b);
        null !== c && null !== Vc(a.getAttribute("height")) && a.setAttribute("height", c);
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    };

    function En(a) {
        Fn(a);
        const b = a.l.innerWidth;
        a = td(a.m).height || +a.m.height || 0;
        return new pc(b, a)
    }

    function Gn(a) {
        if (a.U) {
            var b = a.j;
            b && (b.style.display = "none");
            Hn(a, a.V, !0, !0);
            a.U = !1
        }
    }

    function In(a) {
        a.H = "touchcancel";
        u.setTimeout(a.B.O(274, () => {
            "touchcancel" === a.H && (a.I = 0, a.M = !1, Jn(a))
        }), 1E3)
    }

    function Kn(a, b) {
        if (b && b.touches) {
            a.H = "touchend";
            var c = b.touches.length;
            2 > c ? u.setTimeout(a.B.O(256, () => {
                "touchend" === a.H && (a.I = c, a.M = !1, Jn(a))
            }), 1E3) : (a.I = c, Jn(a));
            !a.G || .05 > Math.abs(Ce(a.l) - 1) || mn(a.v, !0)
        }
    }

    function Ln(a) {
        const b = a.l;
        I(b, "orientationchange", a.Fa);
        I(b, "resize", a.Wa);
        I(b, "scroll", a.gb);
        I(b, "touchcancel", a.hb);
        I(b, "touchend", a.kb);
        I(b, "touchmove", a.mb);
        I(b, "touchstart", a.nb)
    }

    function Mn(a) {
        const b = a.l;
        H(b, "orientationchange", a.Fa);
        H(b, "resize", a.Wa);
        H(b, "scroll", a.gb);
        H(b, "touchcancel", a.hb);
        H(b, "touchend", a.kb);
        H(b, "touchmove", a.mb);
        H(b, "touchstart", a.nb);
        Q(a, () => Ln(a))
    }

    function Nn(a, b) {
        const c = parseInt(b.ht, 10),
            d = 0 < c ? c : null;
        b = parseInt(b.wd, 10);
        const e = 0 < b ? b : null;
        null != d && (a.C.height = d);
        null != e && (a.C.width = e);
        Bn(a, f => {
            Dn(f, e, d)
        }, !1, !0);
        Dn(a.m, e, d)
    }

    function On(a, b) {
        b = new zn(b, a.l, a.m, a.C, a.A, () => {
            if (!a.ha) {
                a.ha = !0;
                Ln(a);
                var c = a.j;
                c && c.parentNode && c.parentNode.removeChild(c);
                Hn(a, a.V, !0, !0);
                c && (c.style.display = "none")
            }
        }, () => void Pn(a), a.B, a.Gb, () => {
            a.R || (a.R = !0, Qn(a, null))
        }, () => {
            a.R && (a.R = !1, Qn(a, null))
        });
        ke(a, b);
        return b
    }

    function Pn(a) {
        a.tb && !a.Za && (a.Za = !0, a.B.ya(257, () => {
            const b = {
                    msg_type: "manual-send-view"
                },
                c = a.m.contentWindow;
            c && c.postMessage(a.l.JSON.stringify(b), "*")
        }))
    }

    function Rn(a) {
        if (!a.Pa()) return !1;
        if (!a.G && a.aa) switch (a.A) {
            case "bottom":
                return a.J >= a.Bc || a.wa;
            case "top":
                return a.J > Sn(a)
        }
        return .05 > Math.abs(Ce(a.l) - 1)
    }

    function Tn(a) {
        const b = a.j;
        if (b && a.m.parentElement) {
            rd(b, a.X);
            var c = a.l.innerWidth;
            T(a.l).scrollWidth > c ? b.style.width = c : b.style.width = "100%";
            Un(a)
        }
    }

    function Vn(a) {
        const b = a.j;
        if (b) {
            var c = a.v,
                d = c.Y,
                e = U(d);
            10 > Math.abs(e - c.H) || (d = e + 10 + T(d).clientHeight > De(d), d = 10 > e || d, c.R || c.J || c.A || (c.v || d ? c.v && d && sn(c) : mn(c, !1)), c.H = e);
            a.U || (c = Hn, Fn(a), e = wd(a.l.document.body, "padding"), "bottom" == a.A && (e.bottom += a.X.height + 25), c(a, e), b.style.display = "block", a.U = !0)
        }
    }

    function Wn(a) {
        a.ab = !0;
        if (!a.G && Rn(a) && (a.fa || !a.oa)) {
            var b = a.j;
            b && (Tn(a), Bn(a, c => {
                He(c)
            }, !0), wn(a.v, b), Vn(a), a.G = !0, (a = a.m.contentWindow) && Xl(a, "ig", {
                rr: "vis-aa"
            }, "*", 2))
        }
    }

    function Hn(a, b, c = !0, d = !1) {
        const e = a.F.top - b.top,
            f = U(a.l);
        f < e && !d || (d = a.l.document.body, d.style.paddingTop = b.top + "px", d.style.paddingRight = b.right + "px", d.style.paddingBottom = b.bottom + "px", d.style.paddingLeft = b.left + "px", a.F = b, c && a.l.scrollTo(0, f - e))
    }

    function Un(a) {
        Bn(a, b => {
            rd(b, a.C);
            b.style.width = "100%"
        }, !1, !0);
        a.m.style.display = "block";
        a.m.style.margin = "0 auto";
        if (a.sb) {
            const b = a.j;
            Wc(b, c => {
                $c(c, d => c === b && /display|bottom/i.test(d) ? !1 : !0);
                if ("svg" === c.nodeName) return !1
            })
        }
    }

    function Fn(a) {
        if ("bottom" !== a.A && "top" !== a.A) throw Error("Unexpected position: " + a.A);
    }

    function Jn(a) {
        !a.ea || a.ha || 2 <= a.I && a.M || !Rn(a) ? Gn(a) : (Wn(a), Vn(a))
    }

    function Qn(a, b) {
        const c = a.U ? Sn(a, a.R) : a.V.top;
        if ("top" === a.A && a.l.document.body && a.ea && a.v && a.G && a.F.top !== c && 0 !== b) {
            var d = id(a.F);
            null === b ? (d.top = c, Hn(a, d)) : (0 < b && a.F.top > c && (d.top = Math.max(c, a.F.top - b), Hn(a, d, !1)), 0 > b && a.F.top < c && (d.top = Math.min(c, a.F.top - b), Hn(a, d, !1)))
        }
    }

    function Sn(a, b = !1) {
        return b ? a.V.top + 30 : a.V.top + 30 + a.X.height - 5
    }
    class Xn extends Cn {
        constructor(a, b, c, d) {
            var e = Wi,
                f = Vi;
            super(a, b, d);
            this.B = e;
            this.Gb = f;
            this.J = this.va = this.bb = 0;
            this.ha = this.rb = !1;
            this.v = null;
            this.M = this.ea = !1;
            this.H = null;
            this.V = wd(b.document.body, "padding");
            this.F = wd(b.document.body, "padding");
            this.I = 0;
            this.ab = this.G = !1;
            this.U = !0;
            this.A = c;
            this.C = En(this);
            this.X = null;
            this.aa = this.oa = this.fa = this.Za = this.sb = this.tb = !1;
            this.Bc = yc(b || window).height / 2;
            this.Xa = yc(b || window).height;
            this.Ya = Ac(b);
            this.R = this.wa = !1;
            Gn(this);
            this.Fa = this.B.O(266, () => {
                Jn(this)
            });
            this.Wa = this.B.O(267, () => {
                Jn(this)
            });
            this.gb = this.B.O(268, () => {
                if (this.G && this.j && this.v) {
                    var g = this.v;
                    g.H = U(g.Y)
                }
                g = U(this.l);
                const h = g - this.bb;
                Qn(this, h);
                this.aa && (0 < h && (this.J += h), this.wa = this.Ya - g <= this.Xa, this.bb = g);
                Jn(this)
            });
            this.hb = this.B.O(269, () => {
                In(this)
            });
            this.kb = this.B.O(270, g => {
                Kn(this, g)
            });
            this.mb = this.B.O(271, g => {
                if (g && g.touches) {
                    this.H = "touchmove";
                    this.I = g.touches.length;
                    this.M = !0;
                    Jn(this);
                    if (!this.rb && g.touches && 0 != g.touches.length && g.touches[0]) {
                        g = g.touches[0].pageY;
                        var h = g - this.va;
                        this.va = g;
                        g = h
                    } else g = 0;
                    0 < g && (this.J += g);
                    Qn(this, g)
                }
            });
            this.nb = this.B.O(272, g => {
                g && g.touches && g.touches[0] && (this.H = "touchstart", this.I = g.touches.length, this.M = !1, Jn(this), this.va = g.touches[0].pageY, this.rb = (g = g.target) && "top" == this.A && this.ea && this.v && un(this.v) && 1 === g.nodeType ? Ec(un(this.v), g) : !1)
            });
            this.xa = this.B.O(273, () => {
                this.ga()
            });
            H(a, "load", this.xa);
            Q(this, () => I(a, "load", this.xa))
        }
        ga() {
            if (this.fa) return !1;
            this.fa = !0;
            I(this.m, "load", this.xa);
            if (this.oa && !this.ab) return !1;
            Jn(this);
            return !0
        }
        Pa() {
            return Be(this.l)
        }
    }
    var Yn = {
        ui: "gr",
        gvar: "ar",
        scroll_detached: "true",
        dismissable: "false"
    };
    class Zn extends Xn {
        Z(a) {
            return Rf(a)
        }
        ga() {
            if (!super.ga()) return !1;
            const a = hm(this.l, "top" === this.A ? 3 : 2);
            a && a.displayAdLoadedContent(!this.aa);
            return !0
        }
        Pa() {
            if (this.C.width > Ae) {
                var a = this.l;
                var b = this.C.width;
                a = a.innerWidth >= b && a.innerHeight >= (b > Ae ? 650 : 0)
            } else a = super.Pa();
            return a
        }
    };

    function $n(a, b, c) {
        try {
            if (!ed(c.origin) || a.F && !Ee(c, a.F.contentWindow)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        "string" === typeof d && (e = a.Ya[d]) && a.J.ya(168, () => {
            e.call(a, b, c)
        })
    }
    class ao extends je {
        constructor(a, b, c, d, e = {}) {
            super();
            this.j = a;
            this.F = b;
            this.J = c;
            this.Pa = d;
            this.Ya = {};
            this.sb = this.J.O(168, (f, g) => void $n(this, f, g));
            this.Gb = this.J.O(169, (f, g) => {
                Jd(this.Pa, "ras::xsf", {
                    c: g.data.substring(0, 500),
                    u: this.j.location.href.substring(0, 500)
                }, !0, .1);
                return !0
            });
            this.oa = [];
            this.ea(this.Ya, e);
            this.oa.push(Wl(this.j, "sth", this.sb, this.Gb))
        }
        Ca() {
            for (const a of this.oa) a();
            this.oa.length = 0;
            super.Ca()
        }
    };
    class bo extends ao {
        constructor(a, b = null) {
            super(a, b, Wi, Vi);
            this.j = a
        }
    };
    class co extends bo {
        constructor(a, b, c) {
            super(a, b.m);
            a = this.l = b;
            if ((b = a.j) && !a.v) {
                for (var d in Yn) !Yn.hasOwnProperty(d) || d in c || (c[d] = Yn[d]);
                a.tb = "true" === c.use_manual_view || "top" === a.A || !!xe(a.l).wasReactiveAdConfigReceived[2];
                a.sb = "true" === c.use_important;
                if (d = c.af_l) a.oa = "true" === d;
                a.aa = "true" === c.wait_for_scroll || "top" == a.A;
                Nn(a, c);
                a.v = On(a, c);
                c = a.C.height + 5;
                "bottom" == a.A && rm(a.l) && (c += 20);
                a.X = new pc(a.C.width, c);
                a.wa = a.Xa >= a.Ya;
                c = a.j;
                d = a.v && un(a.v);
                c && d && ("top" == a.A ? c.appendChild(d) : c.insertBefore(d,
                    c.firstChild));
                Mn(a);
                a.ea = !0;
                b.setAttribute("data-anchor-status", "ready-to-display")
            }
            Wn(this.l)
        }
        ea(a) {
            a.dismiss = Tb(() => {
                var b = this.l;
                b.v && mn(b.v, !0)
            })
        }
    };
    var eo = class extends Kb {
            constructor(a) {
                super(a)
            }
        },
        fo = Ob(eo);

    function go(a) {
        ho(a, !1);
        const b = a.j;
        Bn(a, c => {
            O(c, io);
            He(c)
        }, !0);
        a.m.setAttribute("width", "");
        a.m.setAttribute("height", "");
        P(a.m, io);
        P(a.m, jo);
        P(b, ko);
        He(b);
        He(a.m)
    }

    function ho(a, b) {
        const c = a.j;
        b ? lo(a, c) : (O(c, {
            display: "none"
        }), a.v && O(a.v, {
            display: "none"
        }), a.B && (u.clearInterval(a.B), a.B = 0), mo(a))
    }

    function no(a, b) {
        const c = a.j;
        if (!b) return !1;
        var d = ki(b);
        if (!d || !d.v()) return !1;
        d = d.D;
        if (!d) return !1;
        a.v = a.l.document.createElement("ins");
        O(a.v, {
            display: "inline-block",
            width: "100%"
        });
        Eh(a.v, d, Hh[b.l]);
        a.C();
        O(c, {
            position: "absolute"
        });
        ho(a, !0);
        return !0
    }

    function lo(a, b) {
        O(b, {
            display: "block"
        });
        a.B = u.setInterval(() => a.C, 250)
    }

    function mo(a) {
        null != a.F && (a.A.body.style.overflow = a.F);
        null != a.G && (a.A.documentElement.style.overflow = a.G)
    }

    function oo(a) {
        const b = a.j,
            c = a.l.innerHeight;
        O(b, {
            height: c + "px"
        });
        a.l.scrollTo(0, pd(a.v).y);
        b && (O(b, {
            top: "0"
        }), a.v && O(a.v, {
            height: c + "px"
        }), O(b, {
            position: "fixed"
        }), a.A.body && "hidden" != a.A.body.style.overflow && (a.F = a.A.body.style.overflow, a.G = a.A.documentElement.style.overflow, a.A.body.style.overflow = "hidden", a.A.documentElement.style.overflow = "hidden"))
    }
    class po extends Cn {
        constructor(a, b, c) {
            super(a, b, c);
            this.F = null;
            this.B = 0;
            this.G = null;
            this.H = 0;
            this.A = b.document;
            this.v = null;
            this.I = 0;
            go(this)
        }
        C() {
            if ("hidden" != this.A.body.style.overflow && "fixed" != this.A.body.style.position) {
                var a = this.j;
                const b = this.l.innerHeight;
                if (this.I < b) {
                    const c = {
                        height: b + "px"
                    };
                    O(a, c);
                    this.v && O(this.v, c);
                    this.I = b
                }(a = this.j) && this.v && (this.H = pd(this.v).y, a.style.top != this.H + "px" && O(a, {
                    top: this.H + "px"
                }))
            }
        }
    }
    var ko = {
            backgroundColor: "white",
            opacity: "1",
            position: "fixed",
            left: "0px",
            top: "0px",
            display: "none !important",
            zIndex: "2147483646"
        },
        io = {
            width: "100%",
            height: "100%",
            zIndex: "2147483646"
        },
        jo = {
            left: "0",
            position: "absolute",
            top: "0"
        };
    var qo = (a, b) => {
            var c = a.document.body;
            if (!c || !b) return $i("sci_evt", {
                amacerr: 1
            }, .1), null;
            b = xb(b, Ik, 1);
            var d = [];
            for (var e = 0; e < b.length; e++) {
                var f = b[e];
                var g = e,
                    h = a,
                    l = vb(f, hh, 1);
                if (l) {
                    var k;
                    if (k = l) {
                        var m = C(k, 7);
                        if (C(k, 1) || k.getId() || 0 < tb(k).length) {
                            m = tb(k);
                            var n = C(k, 3),
                                q = C(k, 1),
                                r = "";
                            q && (r += q);
                            n && (r += "#" + Zg(n));
                            if (m)
                                for (n = 0; n < m.length; n++) r += "." + Zg(m[n]);
                            k = (m = r) ? new ah(m, C(k, 2), C(k, 5), Sk(C(k, 6))) : null
                        } else k = m ? new ah(m, C(k, 2), C(k, 5), Sk(C(k, 6))) : null
                    } else k = null;
                    (m = k) ? (k = Vk[C(f, 2)], r = void 0 === k ? null : k,
                        null === r ? f = null : (k = (k = vb(f, Gk, 3)) ? sb(k, 3) : null, m = new Zk(m, r), r = rb(f, 10, 0, !1, ab(f.N)).slice(0), null != C(l, 5) && r.push(1), l = C(f, 12), r = void 0 !== ub(f, ph, 4) ? vb(f, ph, 4) : null, f = 1 == C(f, 8) ? new dl(m, new Wk(Uk(vb(f, Gk, 3), null)), k, 0, r, h, g, l, f) : 2 == C(f, 8) ? new dl(m, new Xk(f), k, 1, r, h, g, l, f) : null)) : f = null
                } else f = null;
                null !== f && d.push(f)
            }
            b = new Vl(d, a);
            d = a.innerHeight;
            a = a.innerWidth;
            e = new Bl;
            f = [0];
            e.v = f;
            e.l.push(new vl(f));
            e.l.push(new wl);
            e.j.push(new sl);
            a = Al(zl(e, .85 * a, a), d);
            a.j.push(new ul);
            a.m = 1;
            a = a.build();
            a = Sl(b,
                a)[0] || null;
            if (!a) return null;
            c = {
                node: (new If(c, !1)).j(a.j) || void 0,
                vb: void 0,
                identifier: {}
            };
            if (!c.node) throw Error("amac:n");
            b = il(a.ra.j.j);
            if (null === b) throw Error("amac:p");
            return (c = (new ij(c, b)).build()) ? {
                lb: c,
                Dc: a.Ma.j
            } : null
        },
        ro = a => {
            var b = new ve;
            b.j = !0;
            b.A = .85;
            b.l = 1;
            b.v = 25;
            b.m = a.innerHeight;
            b.B = !0;
            b = b.build();
            return Ak(a, b)
        };

    function so(a) {
        const b = De(a, !0),
            c = T(a).scrollWidth,
            d = T(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = U(a);
        const g = [];
        var h = [];
        const l = [],
            k = [];
        var m = [],
            n = [],
            q = [];
        let r = 0,
            t = 0,
            y = Infinity,
            E = Infinity,
            G = null;
        var M = Ej({
            Ob: !1
        }, a);
        for (const L of M) {
            M = L.getBoundingClientRect();
            const Wa = b - (M.bottom + f);
            var v = void 0,
                A = void 0;
            if (L.className && -1 != L.className.indexOf("adsbygoogle-ablated-ad-slot")) {
                v = L.getAttribute("google_element_uid");
                A = a.google_sv_map;
                if (!v ||
                    !A || !A[v]) continue;
                a: {
                    var D = A[v];v = Number(D.google_ad_width);A = Number(D.google_ad_height);
                    if (!(0 < v && 0 < A)) {
                        b: {
                            try {
                                const Z = String(D.google_ad_format);
                                if (Z && Z.match) {
                                    const fa = Z.match(/(\d+)x(\d+)/i);
                                    if (fa) {
                                        const qb = parseInt(fa[1], 10),
                                            Pa = parseInt(fa[2], 10);
                                        if (0 < qb && 0 < Pa) {
                                            var K = {
                                                width: qb,
                                                height: Pa
                                            };
                                            break b
                                        }
                                    }
                                }
                            } catch (Z) {}
                            K = null
                        }
                        D = K;
                        if (!D) {
                            v = null;
                            break a
                        }
                        v = 0 < v ? v : D.width;A = 0 < A ? A : D.height
                    }
                    v = {
                        width: v,
                        height: A
                    }
                }
                v = (A = v) ? A.height : 0;
                A = A ? A.width : 0
            } else if (v = M.bottom - M.top, A = M.right - M.left, 1 >= v || 1 >= A) continue;
            g.push(v);
            l.push(A);
            k.push(v * A);
            L.className && -1 != L.className.indexOf("google-auto-placed") ? (t += 1, L.className && -1 != L.className.indexOf("pedestal_container") && (G = v)) : (y = Math.min(y, Wa), n.push(M), r += 1, h.push(v), m.push(v * A));
            E = Math.min(E, Wa);
            q.push(M)
        }
        y = Infinity === y ? null : y;
        E = Infinity === E ? null : E;
        f = to(n);
        q = to(q);
        h = uo(b, h);
        n = uo(b, g);
        m = uo(b * c, m);
        K = uo(b * c, k);
        return new vo(a, {
            ec: e,
            Vb: b,
            tc: c,
            rc: d,
            Ub: r,
            Ib: t,
            Jb: wo(g),
            ac: wo(l),
            Zb: wo(k),
            oc: f,
            nc: q,
            mc: y,
            lc: E,
            cc: h,
            bc: n,
            Yb: m,
            Xb: K,
            uc: G
        })
    }

    function xo(a, b = 0) {
        a = so(a);
        return ((a.j.Jb || 0) * (a.j.Ub + a.j.Ib) + b) / (a.j.Vb + b)
    }

    function yo(a, b) {
        const c = Gc() && !(900 <= T(a.l).clientWidth),
            d = qa([], e => ta(a.m, e)).join(",");
        return {
            wpc: "",
            su: b,
            eid: d,
            doc: a.j.ec,
            pg_h: Y(a.j.Vb),
            pg_w: Y(a.j.tc),
            pg_hs: Y(a.j.rc),
            c: Y(a.j.Ub),
            aa_c: Y(a.j.Ib),
            av_h: Y(a.j.Jb),
            av_w: Y(a.j.ac),
            av_a: Y(a.j.Zb),
            s: Y(a.j.oc),
            all_s: Y(a.j.nc),
            b: Y(a.j.mc),
            all_b: Y(a.j.lc),
            d: Y(a.j.cc),
            all_d: Y(a.j.bc),
            ard: Y(a.j.Yb),
            all_ard: Y(a.j.Xb),
            pd_h: Y(a.j.uc),
            dt: c ? "m" : "d"
        }
    }
    class vo {
        constructor(a, b) {
            this.l = a;
            this.j = b;
            this.m = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function wo(a) {
        return nc.apply(null, qa(a, b => 0 < b)) || null
    }

    function uo(a, b) {
        return 0 >= a ? null : mc.apply(null, b) / a
    }

    function to(a) {
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

    function Y(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function zo(a, b) {
        var c;
        if (!(c = null == b)) {
            try {
                b.setItem("__storage_test__", "__storage_test__");
                const e = b.getItem("__storage_test__");
                b.removeItem("__storage_test__");
                var d = "__storage_test__" === e
            } catch (e) {
                d = !1
            }
            c = !d
        }
        b = c ? null : vm(b);
        a.j = b;
        if (b = !!a.j) a = a.j, b = !!a && 1 > a.length;
        return b
    }

    function Ao(a, b) {
        try {
            if (!b || !zo(a, b)) return !1;
            a.j.push(Date.now());
            const c = JSON.stringify(a.j);
            b.setItem("__lsv__", c);
            return b.getItem("__lsv__") == c
        } catch (c) {
            return !1
        }
    }
    class Bo {
        constructor() {
            this.j = null
        }
    };

    function Co(a, b) {
        if (a.ha) Promise.resolve(!1);
        else {
            a.ha = !0;
            b = Ge(b);
            a.aa = "true" === b["i-fvs"];
            var c = b.i_expid;
            c && (a.M = c);
            b.qid && (a.R = b.qid);
            a.C = parseFloat(b.den_lim) || 0;
            b = parseInt(b.sti_lt, 10);
            isNaN(b) || (a.V = b);
            a.I = !0;
            if (Do(a)) Promise.resolve(!1);
            else {
                var d = new Zl,
                    e = () => {
                        Eo(a, {
                            nip: 1,
                            ph: De(a.j, !0),
                            vh: a.j.innerHeight,
                            iplt: Date.now() - a.U,
                            ama: a.K,
                            url: a.j.location ? a.j.location.href : void 0
                        }, .1);
                        a.G.push("Could not locate a suitable placement in the content below the fold.");
                        im(a.j, a.G);
                        d.resolve(!1)
                    },
                    f = (g,
                        h) => {
                        Eo(a, {
                            iplt: Date.now() - a.U,
                            ama: a.K,
                            y: h
                        }, .01);
                        d.resolve(Fo(a, g))
                    };
                a.U = Date.now();
                a.K ? (b = qo(a.j, a.Fa)) && a.I && !Do(a) ? f(b.lb, b.Dc) : (Eo(a, {
                    amacerr: 1
                }, .1), e()) : ro(a.j).then(g => {
                    if (a.I && !Do(a)) return g.ba().then(h => {
                        if (h.j) var l = h.j;
                        else h.na || (ji(h, !1), h.m()), l = h.na, !h.j && l && (h.j = l.l()), l = h.j;
                        f(h, l ? l.top : -1)
                    }, e);
                    d.resolve(!1)
                })
            }
        }
    }

    function Do(a) {
        return a.aa ? !1 : xe(a.j).wasReactiveAdVisible[8] ? (Eo(a, {
            vigs: 1
        }, .1), !0) : !1
    }

    function Eo(a, b, c) {
        b = b || {};
        a.R && (b.qid = a.R);
        a.M && (b.eid = a.M);
        a.l && (b.tsl = Date.now() - a.l);
        a.X && (b.tslo = Date.now() - a.X, b.tl = a.wa);
        a.F.src && (b.req = a.F.src);
        $i("sci_evt", b, c)
    }

    function Fo(a, b) {
        Go(a) && Ho(a) && no(a.m, b) && (a.l = Date.now(), Io(a), a.aa ? Jo(a) : a.Z.call(a.j, () => Ko(a)));
        im(a.j, a.G);
        return !!a.l
    }

    function Lo(a) {
        a.H = !0;
        a.v = !1;
        ho(a.m, !1);
        a.A && (I(a.j, "orientationchange", a.A), a.A = null);
        a.B && (I(a.j, "resize", a.B), a.B = null)
    }

    function Go(a) {
        const b = a.j.innerHeight;
        if (!b) return !1;
        var c = a.j;
        c = T(c).scrollWidth <= T(c).clientWidth;
        let d;
        if (!Be(a.j)) return Eo(a, {
            lnd: 1
        }, .1), a.G.push("Landscape is not supported"), !1;
        if (a.C && (d = xo(a.j, b)) > a.C) return Eo(a, Object.assign({
            den: d,
            lim: a.C
        }, yo(so(a.j), a.j.location.hostname)), 1), a.G.push(`Insertion would cause ad density greater than ${100*a.C}%.`), !1;
        c || Eo(a, {
            bd: 1
        }, .1);
        return !0
    }

    function Ho(a) {
        return a.fa ? !0 : zo(R(Bo), a.ga)
    }

    function Io(a) {
        a.A = Zi(519, () => {
            !a.H && a.v && Eo(a, {
                tto: Date.now() - a.l,
                por: Be(a.j) ? 1 : 0
            }, .1)
        });
        H(a.j, "orientationchange", a.A);
        a.B = Zi(520, () => {
            a.H || (a.m.C(), a.v && Eo(a, {
                ttre: Date.now() - a.l
            }, .1))
        });
        H(a.j, "resize", a.B)
    }

    function Jo(a) {
        a.va || (a.F.contentWindow.postMessage(JSON.stringify({
            msg_type: "i-view"
        }), "https://googleads.g.doubleclick.net"), a.va = !0)
    }

    function Ko(a) {
        if (!a.H)
            if (Do(a)) Lo(a);
            else {
                var b = a.m.j.getBoundingClientRect().top,
                    c = a.j.innerHeight;
                a.m.C();
                .5 <= (c - b) / c && Jo(a);
                b < c && (xe(a.j).wasReactiveAdVisible[9] = !0, a.fa || Ao(R(Bo), a.ga), a.xa = !0);
                0 >= b ? (0 <= a.V && Mo(a), Eo(a, {
                    sice: !0,
                    vh: c,
                    gvto: b
                }, .1)) : a.Z && a.Z.call(a.j, () => Ko(a))
            }
    }

    function Mo(a) {
        a.X = Date.now();
        a.v = !0;
        a.wa++;
        oo(a.m);
        u.setTimeout(() => {
            if (a.v) {
                a.v = !1;
                var b = a.m;
                const c = b.j;
                O(c, {
                    top: pd(b.v).y + "px"
                });
                O(c, {
                    position: "absolute"
                });
                mo(b)
            }
        }, Math.max(0, a.V))
    }
    class No extends bo {
        constructor(a, b, c, d, e, f) {
            super(a, b);
            this.ga = f;
            this.fa = d;
            this.H = !1;
            this.M = null;
            this.aa = this.I = this.ha = !1;
            this.G = [];
            this.v = !1;
            this.wa = this.X = this.l = 0;
            this.B = this.A = this.R = null;
            this.Z = u.requestAnimationFrame || u.webkitRequestAnimationFrame || u.mozRequestAnimationFrame || u.oRequestAnimationFrame || u.msRequestAnimationFrame;
            this.va = !1;
            this.m = new po(b, a, e);
            this.xa = !1;
            this.U = this.V = 0;
            this.K = zb(c, 1, !1);
            this.Fa = vb(c, Kk, 2);
            this.C = 0
        }
        ea(a) {
            a["sti-fill"] = b => {
                Co(this, b)
            };
            a["i-no"] = () => {
                this.I = !1;
                !this.xa && this.l && Lo(this)
            }
        }
    };
    class Oo extends lm {
        constructor() {
            super();
            this.G = !1;
            this.C = null;
            this.L = !1
        }
        F(a) {
            this.G = !!a.enableAma;
            var b = a.amaConfig;
            if (b) try {
                var c = Lk(b)
            } catch (d) {
                c = null
            } else c = null;
            this.C = c;
            Array.isArray(a.fillMessage) && (this.L = !0);
            return !0
        }
    };
    class Po {
        verifyAndProcessConfig(a, b, c) {
            var d = xe(a);
            if (d.wasReactiveAdConfigReceived[9]) return !1;
            const e = new Oo;
            if (!km(e, b)) return !1;
            d.wasReactiveAdConfigReceived[9] = !0;
            if (!e.l && !zo(R(Bo), c)) return !1;
            b = Dc(document, "INS");
            b.className = "adsbygoogle";
            O(b, {
                display: "none"
            });
            a.document.documentElement.appendChild(b);
            c = e.B || {};
            c.google_ad_client = e.m;
            c.google_ad_height = T(a).clientHeight || 0;
            c.google_ad_width = T(a).clientWidth || 0;
            c.google_reactive_ad_format = 9;
            d = new eo;
            ob(d, 1, e.G);
            e.C && yb(d, 2, e.C);
            e.L && ob(d, 3, !0);
            a: {
                gb = !0;
                try {
                    var f = JSON.stringify(d.toJSON(), Lb);
                    break a
                } finally {
                    gb = !1
                }
                f = void 0
            }
            c.google_rasc = f;
            e.l && (c.google_adtest = "on");
            Mm(b, c, a);
            return !0
        }
    };
    var So = class extends bo {
        constructor(a, b) {
            super(a, b.m);
            this.l = b
        }
        ea(a) {
            a.dismiss = () => {
                var b = this.l;
                Qo(b, -30);
                Ro(b, "dismissed")
            }
        }
    };
    var Uo = (a, b) => {
        if (!a.body) return null;
        const c = new To;
        c.apply(a, b);
        return () => {
            P(a.body, {
                filter: c.j,
                webkitFilter: c.j,
                overflow: c.m,
                position: c.v,
                top: c.A
            });
            b.scrollTo(0, c.l)
        }
    };
    class To {
        constructor() {
            this.j = this.A = this.v = this.m = null;
            this.l = 0
        }
        apply(a, b) {
            this.m = a.body.style.overflow;
            this.v = a.body.style.position;
            this.A = a.body.style.top;
            this.j = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
            this.l = U(b);
            P(a.body, "top", -this.l + "px")
        }
    };

    function Vo(a, b) {
        const c = a.j;
        if (c)
            if (b) {
                b = a.B;
                if (null == b.j) {
                    var d = b.l;
                    const e = d.j.nextRestrictionId++;
                    d.j.maxZIndexRestrictions[e] = 2147483646;
                    en(d);
                    b.j = e
                }
                O(c, {
                    display: "block"
                });
                a.A.body && !a.v && (a.v = Uo(a.A, a.l));
                c.setAttribute("tabindex", "0");
                c.setAttribute("aria-hidden", "false");
                a.A.body.setAttribute("aria-hidden", "true")
            } else b = a.B, null != b.j && (d = b.l, delete d.j.maxZIndexRestrictions[b.j], en(d), b.j = null), O(c, {
                display: "none"
            }), a.v && (a.v(), a.v = null), a.A.body.setAttribute("aria-hidden", "false"), c.setAttribute("aria-hidden",
                "true")
    }

    function Wo(a) {
        Vo(a, !1);
        const b = a.j;
        b && (Bn(a, c => {
            O(c, Xo);
            He(c)
        }, !0), a.m.setAttribute("width", ""), a.m.setAttribute("height", ""), P(a.m, Xo), P(a.m, Yo), P(b, Zo), P(b, {
            background: "transparent"
        }), O(b, {
            display: "none",
            position: "fixed"
        }), He(b), He(a.m))
    }
    class $o extends Cn {
        constructor(a, b, c) {
            super(a, b, c);
            this.v = null;
            this.A = b.document;
            a = new hn(b);
            this.B = new jn(a)
        }
    }
    var Zo = {
            backgroundColor: "white",
            opacity: "1",
            position: "fixed",
            left: "0px",
            top: "0px",
            margin: "0px",
            padding: "0px",
            display: "none",
            zIndex: "2147483647"
        },
        Xo = {
            width: "100vw",
            height: "100vh"
        },
        Yo = {
            left: "0",
            position: "absolute",
            top: "0"
        };
    class ap extends $o {
        constructor(a, b, c) {
            super(b, a, c);
            Wo(this)
        }
        Z(a) {
            return Rf(a)
        }
    };

    function bp(a) {
        a = a.match(Hc);
        const b = a[6];
        return (a[5] || "") + (b ? "?" + b : "") || "/"
    }

    function cp(a, b) {
        b ? a.j = new RegExp("\\b(" + b.join("|").toLowerCase() + ")\\b", "ig") : a.j = null
    }

    function dp(a, b, c, d, e) {
        if (!c) return !1;
        switch (b.target) {
            case "_top":
            case "_parent":
                break;
            case "":
            case "_self":
                if (e) return !1;
                break;
            default:
                return !1
        }
        return !d || ep(a, d) && bp(c) == a.v ? !1 : !0
    }

    function ep(a, b) {
        return b.replace(fp, "") == a.m.replace(fp, "")
    }

    function gp(a, b, c) {
        if (sa(["data-google-vignette", "data-google-interstitial"], f => "false" === b.getAttribute(f) || !1)) return !1;
        const d = b.href,
            e = d && (d.match(Hc)[3] || null);
        if (!dp(a, b, d, e, c)) return !1;
        a.l = !!e && ep(a, e);
        return a.l || !c && !Gj(b) && /^https?:\/\//i.test(d) && !/((facebook|whatsapp|youtube|google)\.com)|\/ads?\//i.test(d)
    }

    function hp(a, b) {
        if (!b || !a.j) return [];
        var c = [];
        ym(b, c, !0, !0);
        b = c.join("");
        b = b.replace(zm, " ").replace(Am, "");
        b = b.replace(Bm, "");
        b = b.replace(Cm, " ");
        " " != b && (b = b.replace(Dm, ""));
        if (!b) return [];
        a = b.match(a.j);
        b = [];
        for (c = 0; a && c < a.length; c++) {
            const d = a[c].toLowerCase();
            0 <= oa(b, d) || b.push(d)
        }
        return b
    }
    class ip {
        constructor(a) {
            this.j = null;
            this.m = a.match(Hc)[3] || "";
            this.v = bp(a);
            this.l = !1
        }
    }
    var fp = /^(www\.|m\.|mobile\.)*/i;

    function jp(a) {
        a.j ? .setAttribute("data-vignette-loaded", "true")
    }

    function kp(a, b, c) {
        a.xa && (b.qid = a.xa);
        a.wa && (b.eid = a.wa);
        a.ga && (b.lnk = a.ga.substr(0, 100), a.C.l || (b.inter = "1"));
        const d = Nd();
        d && (b.ns = String(d));
        b.fs = String(Md() - a.A);
        b.req = a.F.src;
        b.ptt = 9;
        null != a.G && (b.comm = !0);
        Jd(a.Pa, "ia_evt", b, !0, c)
    }

    function lp(a) {
        a.G && ($l(a.G).then(() => {
            jp(a.M);
            mp(a)
        }), am(a.G).then(() => void np(a)), bm(a.G).then(() => {
            a.V = !0
        }))
    }

    function mp(a) {
        a.l || (a.l = Md(), op(a), kp(a, {
            aflvr: !0,
            al: a.l - a.A
        }, .01))
    }

    function np(a) {
        kp(a, {
            dis: Date.now() - a.B,
            dha: Number(a.aa)
        }, .01);
        if (a.aa) pp(a) ? a.j.history.back() : qp(a);
        else if (u.setTimeout(() => {
                qp(a)
            }, 1E3), a.m) {
            var b = Date.now();
            a.j.addEventListener("pagehide", () => {
                kp(a, {
                    pg_hid: Date.now() - b
                }, .01)
            });
            a.X && (a.fa = !1);
            rp(a, a.m.href)
        }
    }

    function op(a) {
        if (!a.v) {
            a.v = a.J.O(527, c => sp(a, c));
            H(a.j.document, "click", a.v, Vb);
            var b = a.j.frames;
            for (let c = 0; c < b.length; c++) try {
                a.ab(b[c].frameElement) || H(b[c].document, "click", a.v, Vb)
            } catch (d) {}
        }
    }

    function pp(a) {
        return -1 != a.j.location.hash.indexOf("google_vignette")
    }

    function qp(a) {
        a.B && (a.va = !0, a.v && (I(a.j.document, "click", a.v), a.v = null), a.I && a.I.parentNode && (a.I.parentNode.removeChild(a.I), a.I = null), a.H && a.H.parentNode && (a.H.parentNode.removeChild(a.H), a.H = null), Vo(a.M, !1), a.Za())
    }

    function rp(a, b) {
        a = a.j.location;
        b = Lc(b, Kc) || gc;
        if (b instanceof fc) var c = b instanceof fc && b.constructor === fc ? b.j : "type_error:SafeUrl";
        else {
            b: {
                try {
                    c = new URL(b)
                } catch (d) {
                    c = "https:";
                    break b
                }
                c = c.protocol
            }
            c = "javascript:" !== c ? b : void 0
        }
        void 0 !== c && a.replace(c)
    }

    function tp(a, b) {
        var c = Md(),
            d = !xe(a.j).wasReactiveAdVisible[9],
            e = hp(a.C, b),
            f = .05 > Math.abs(Ce(a.j) - 1);
        b = a.K.width < a.K.height === Be(a.j);
        if (864E5 > c - a.A && a.R && !a.V && !pp(a) && a.l && (a.Wa || d) && !e.length && f && b) b = null;
        else {
            var g = new $d;
            c = F(g, 1, c, 0);
            c = F(c, 2, 864E5, 0);
            c = F(c, 3, a.R, !1);
            c = F(c, 4, a.V, !1);
            c = F(c, 5, pp(a), !1);
            c = F(c, 6, !!a.l, !1);
            a = F(c, 7, a.Wa, !1);
            d = F(a, 8, !d, !1);
            if (null == e) d = ob(d, 9, hb);
            else {
                a = B(e);
                if (!(a & 4)) {
                    if (a & 2 || Object.isFrozen(e)) e = Array.prototype.slice.call(e);
                    for (c = 0; c < e.length; c++) e[c] = e[c];
                    Za(e, a |
                        5)
                }
                d = ob(d, 9, e)
            }
            f = F(d, 10, f, !1);
            b = F(f, 11, b, !1)
        }
        return b
    }

    function up(a, b, c) {
        a = Pc("LINK", a.j.document);
        a.setAttribute("rel", c);
        a.setAttribute("href", b);
        return a
    }

    function vp(a, b) {
        for (b = b.target; b;) {
            if ("A" == b.nodeName) {
                if (gp(a.C, b, b.ownerDocument != a.j.document)) return b;
                break
            }
            b = b.parentElement
        }
        return null
    }

    function sp(a, b) {
        if (!b || b.defaultPrevented || a.B || a.L) {
            var c = he(ee(1), a.A);
            a.l && ob(c, 4, a.l)
        } else if (a.m) c = he(ee(2), a.A), a.l && ob(c, 4, a.l);
        else if (c = vp(a, b)) {
            var d = tp(a, c);
            d ? (wp(a, c, !1), c = ge(he(ee(4), a.A), d), a.l && ob(c, 4, a.l)) : (a.m = c, fd(b), b.preventDefault = () => b && (b.preventDefaultTriggered_ = !0), c = he(ee(5), a.A), a.l && ob(c, 4, a.l), u.setTimeout(x(a.nb, a, b), 0))
        } else c = he(ee(3), a.A), a.l && ob(c, 4, a.l)
    }

    function wp(a, b, c) {
        const d = a.j;
        var e = xe(d);
        const f = a.K.width < a.K.height !== Be(a.j);
        e = {
            zm: Number(.05 > Math.abs(Ce(d) - 1)),
            sz: Number(f),
            fc: Number(a.R),
            vp: Number(pp(a)),
            al: Number(!!a.l),
            fsi: Number(!!e.wasReactiveAdVisible[9]),
            ag: Number(864E5 > Md() - a.A)
        };
        c && (e.wsdojl = !0);
        f && (e.rs_sz = `${a.K.width}x${a.K.height}`, e.cr_sz = `${d.innerWidth}x${d.innerHeight}`);
        b = hp(a.C, b);
        b.length && (e.sw = b.join());
        a.ha && (e.ts = a.ha);
        kp(a, e, .01)
    }
    var xp = class extends ao {
        constructor(a, b, c, d, e, f) {
            var g = Vi,
                h = Ah(wh) && !Ah(th);
            super(a, b, c, g, {
                fullscreenApi: h
            });
            this.l = NaN;
            this.va = !1;
            this.m = null;
            this.aa = !1;
            this.wa = f.i_expid ? ? null;
            this.A = Md();
            this.R = !0;
            this.V = !1;
            this.Wa = "true" === f["i-fvs"];
            this.fa = !0;
            this.ga = null;
            this.B = 0;
            this.xa = f.qid ? ? null;
            this.v = this.I = this.H = null;
            this.X = void 0;
            this.ha = null;
            this.M = d;
            this.C = new ip(a.location.href);
            this.K = e;
            this.mb = "true" === f.iobs && !!this.j.IntersectionObserver;
            this.tb = Tb(() => void kp(this, {
                tth: Date.now() - this.B
            }, .01));
            cp(this.C, f.stop_word ? .split(";") ? ? null);
            this.G = h ? em(a, b.contentWindow, c, g) : null;
            lp(this);
            op(this)
        }
        ea(a, b) {
            a["i-blur"] = () => {
                this.aa = !0;
                this.X && (this.fa = !0)
            };
            a["i-no"] = c => {
                this.R = !1;
                this.ha = c.i_tslv ? c.i_tslv : null
            };
            b.fullscreenApi || (a["i-adframe-load"] = () => {
                jp(this.M);
                const c = R(zh).l(yh.j, yh.defaultValue);
                0 < c ? setTimeout(() => mp(this), c) : mp(this)
            }, a["i-dismiss"] = () => {
                np(this)
            }, a.i_iif = () => {
                this.V = !0
            })
        }
        kb() {
            this.fa && (pp(this) ? (kp(this, {
                fnv: 1
            }, .01), rp(this, this.m.href)) : (this.tb(), qp(this)))
        }
        Ca() {
            super.Ca();
            pp(this) && rp(this, this.m.href);
            this.v && (I(this.j.document, "click", this.v), this.v = null)
        }
        Za() {}
        ab() {
            return !1
        }
        nb(a) {
            if (this.B || !this.m || this.L) ae(1);
            else {
                a = a.preventDefaultTriggered_;
                var b = gp(this.C, this.m, this.m.ownerDocument != this.j.document),
                    c = tp(this, this.m);
                a || !b || c ? (wp(this, this.m, a), b = de(ce(ae(2), a), b), c && yb(b, 4, c), a ? this.m = null : rp(this, this.m.href)) : this.bb() ? (kp(this, {
                        lif: Md(),
                        lase: this.l,
                        latt: !!this.M.j ? .getAttribute("data-vignette-loaded"),
                        t: 9
                    }, .1), this.B = Date.now(), a = de(ce(ae(4), a), b), c = !!this.M.j ? .getAttribute("data-vignette-loaded"), a = F(a, 6, c, !1), ob(a, 5, this.B), xe(this.j).wasReactiveAdVisible[8] = !0, this.ga = this.m.href.substr(0, 100), this.mb || (this.G ? u.IntersectionObserver || this.G.Lb.postMessage(JSON.stringify({
                        eventType: "visible",
                        googMsgType: "fullscreen"
                    }), "*") : this.F.contentWindow.postMessage(JSON.stringify({
                        msg_type: "i-view"
                    }), "*")), a = this.m.href, this.I = up(this, a, "prerender"), this.H = up(this, a, "prefetch"), this.j.document.body.appendChild(this.I), this.j.document.body.appendChild(this.H),
                    pp(this) || (this.j.location.hash = "google_vignette"), this.X = this.J.O(526, x(this.kb, this)), u.setTimeout(ja(H, this.j, "hashchange", this.X), 0), a = this.J.O(528, x(this.rb, this)), H(this.j, "pagehide", a), Vo(this.M, !0)) : (de(ce(ae(3), a), b), rp(this, this.m.href))
            }
        }
        bb() {
            return !0
        }
        rb() {
            this.va || kp(this, {
                ttr: Date.now() - this.B
            }, .01);
            qp(this)
        }
    };

    function yp(a, b) {
        b = b || a.j.document;
        if (!b.getElementById("vignette-style-id")) {
            var c = vc(b).createElement("STYLE");
            c.id = "vignette-style-id";
            c.textContent = "a.google_vignette_inst {border:1px solid #000;color:#6c12b9}";
            b.head.appendChild(c);
            a.U.push(c)
        }
    }

    function zp(a, b, c) {
        let d = 0;
        for (let e = b.links.length; 0 <= e; e--) {
            const f = b.links[e];
            f && (f.classList.remove("google_vignette_inst"), gp(a.C, f, c) && !hp(a.C, f).length && (d++, f.classList.add("google_vignette_inst")))
        }
        return d
    }
    class Ap extends xp {
        constructor(a, b, c, d, e, f, g) {
            super(a, b, Wi, new ap(a, b, e), d, g);
            this.hb = f;
            this.U = [];
            this.Z = 0;
            this.Xa = Ci(this.j.location, "google_ia_debug");
            this.gb = c;
            this.Xa && (this.Fa(), this.Z = u.setInterval(x(this.Fa, this), 5E3))
        }
        Za() {
            if (this.Xa) {
                for (let b = 0; b < this.U.length; ++b) {
                    var a = this.U[b];
                    (a = a.ownerNode || a.owningElement || a) && a.parentNode && a.parentNode.removeChild(a)
                }
                this.U = [];
                this.Z && u.clearInterval(this.Z)
            }
        }
        Fa() {
            let a = zp(this, this.j.document, !1);
            yp(this);
            var b = this.j.frames;
            for (let c = 0; c < b.length; c++) try {
                a +=
                    zp(this, b[c].document, !0), yp(this, b[c].document)
            } catch (d) {}
            b = hm(this.j, 1);
            null != b && b.setLinksInstrumented(a)
        }
        bb() {
            return this.gb || Ao(R(Bo), this.hb)
        }
        ab(a) {
            return /aswift_[0-9]+/.test(a.id)
        }
    };

    function Bp(a) {
        const b = a.l.document.createElement("span"),
            c = Math.round((Cp(a) - 50) / 2);
        O(b, {
            background: "#FAFAFA",
            position: "absolute",
            left: c + "px",
            right: c + "px",
            top: Dp(a) + 5 + "px",
            "box-shadow": "rgba(0, 0, 0, 0.5) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px"
        });
        b.className = `${a.m}-side-rail-dismiss-btn`;
        b.appendChild(Ep(a));
        const d = () => {
            a.C()
        };
        H(b, "click", d);
        Q(a, () => I(b, "click", d));
        return b
    }

    function Dp(a) {
        return Number(td(a.j).height || a.j.height)
    }

    function Cp(a) {
        return Number(td(a.j).width || a.j.width)
    }

    function Ep(a) {
        var b = a.l.document;
        const c = b.createElementNS("http://www.w3.org/2000/svg", "svg");
        O(c, {
            position: "absolute",
            top: "0px",
            display: "block",
            width: "50px",
            height: "30px",
            "margin-top": "-5px",
            transform: "none",
            "pointer-events": "initial"
        });
        var d = b.createElementNS("http://www.w3.org/2000/svg", "defs"),
            e = b.createElementNS("http://www.w3.org/2000/svg", "filter");
        a = `${a.m}-side-rail-drop-shadow`;
        e.setAttribute("id", a);
        e.setAttribute("filterUnits", "userSpaceOnUse");
        e.setAttribute("color-interpolation-filters",
            "sRGB");
        var f = b.createElementNS("http://www.w3.org/2000/svg", "feComponentTransfer");
        f.setAttribute("in", "SourceAlpha");
        f.setAttribute("result", "TransferredAlpha");
        var g = b.createElementNS("http://www.w3.org/2000/svg", "feFuncR");
        g.setAttribute("type", "discrete");
        g.setAttribute("tableValues", "0.5");
        f.appendChild(g);
        g = b.createElementNS("http://www.w3.org/2000/svg", "feFuncG");
        g.setAttribute("type", "discrete");
        g.setAttribute("tableValues", "0.5");
        f.appendChild(g);
        g = b.createElementNS("http://www.w3.org/2000/svg",
            "feFuncB");
        g.setAttribute("type", "discrete");
        g.setAttribute("tableValues", "0.5");
        f.appendChild(g);
        e.appendChild(f);
        f = b.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        f.setAttribute("in", "TransferredAlpha");
        f.setAttribute("stdDeviation", "2");
        e.appendChild(f);
        f = b.createElementNS("http://www.w3.org/2000/svg", "feOffset");
        f.setAttribute("dx", "0");
        f.setAttribute("dy", "0");
        f.setAttribute("result", "offsetblur");
        e.appendChild(f);
        f = b.createElementNS("http://www.w3.org/2000/svg", "feMerge");
        f.appendChild(b.createElementNS("http://www.w3.org/2000/svg",
            "feMergeNode"));
        g = b.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
        g.setAttribute("in", "SourceGraphic");
        f.appendChild(g);
        e.appendChild(f);
        d.appendChild(e);
        c.appendChild(d);
        d = b.createElementNS("http://www.w3.org/2000/svg", "path");
        d.setAttribute("d", "M5,5 L5,17 A8,8 0 0,0 13,25 L37,25 A8,8 0 0,0 45,17 L45,5 Z");
        d.setAttribute("stroke", "#FAFAFA");
        d.setAttribute("stroke-width", "1");
        d.setAttribute("fill", "#FAFAFA");
        d.style.setProperty("filter", `url(#${a})`);
        c.appendChild(d);
        d = b.createElementNS("http://www.w3.org/2000/svg",
            "rect");
        d.setAttribute("x", "0");
        d.setAttribute("y", "0");
        d.setAttribute("width", "50");
        d.setAttribute("height", "5");
        d.style.setProperty("fill", "#FAFAFA");
        c.appendChild(d);
        d = b.createElementNS("http://www.w3.org/2000/svg", "g");
        d.setAttribute("stroke", "#616161");
        d.setAttribute("stroke-width", "2px");
        d.setAttribute("stroke-linecap", "square");
        e = b.createElementNS("http://www.w3.org/2000/svg", "line");
        e.setAttribute("x1", "18");
        e.setAttribute("y1", "18");
        e.setAttribute("x2", "25");
        e.setAttribute("y2", "12");
        d.appendChild(e);
        b = b.createElementNS("http://www.w3.org/2000/svg", "line");
        b.setAttribute("x1", "25");
        b.setAttribute("y1", "12");
        b.setAttribute("x2", "32");
        b.setAttribute("y2", "18");
        d.appendChild(b);
        c.appendChild(d);
        return c
    }
    var Fp = class extends je {
        constructor(a, b, c, d, e) {
            super();
            this.j = a;
            this.l = b;
            this.v = c;
            this.m = d;
            this.C = e;
            a = this.l.document.createElement("span");
            a.className = `${this.m}-side-rail-edge`;
            O(a, {
                background: "#FAFAFA",
                position: "absolute",
                left: "0px",
                top: Dp(this) + "px",
                width: Cp(this) + "px",
                height: "5px",
                "box-shadow": "rgba(0, 0, 0, 0.5) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px"
            });
            this.A = a;
            this.B = Bp(this);
            this.v.appendChild(this.A);
            this.v.appendChild(this.B)
        }
    };

    function Ro(a, b) {
        "dismissed" !== a.v && (a.v = b, a.j.setAttribute("data-side-rail-status", a.v))
    }

    function Gp(a, b) {
        if ("dismissed" === a.v) var c = !1;
        else {
            c = a.j;
            var d = a.l;
            var e = a.position;
            var f = a.l.innerWidth,
                g = a.l.innerHeight,
                h = new Set([c]),
                l = a.C.width + 15,
                k = a.C.height + 35;
            if (a.I && (1200 > f || 650 > g)) e = null;
            else {
                var m = xe(d).sideRailAvailableSpace,
                    n = {
                        Y: d,
                        P: f,
                        T: g,
                        zb: h
                    },
                    q = `f-${Hm(n.P)}x${Hm(n.T)}`;
                if (!m.has(q)) {
                    m.set(q, 0);
                    xe(n.Y).sideRailProcessedFixedElements.clear();
                    q = new Set([...Array.from(n.Y.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]")), ...n.zb]);
                    for (var r of Gm(n.Y)) Em(r,
                        q) || Lm(r, m, n)
                }
                n = [];
                q = .9 * g;
                var t = U(d),
                    y = r = (g - q) / 2,
                    E = q / 7;
                for (let Wa = 0; 8 > Wa; Wa++) {
                    var G = n,
                        M = G.push;
                    c: {
                        var v = y;
                        var A = e,
                            D = m,
                            K = {
                                Y: d,
                                P: f,
                                T: g,
                                zb: h
                            };
                        const Z = Jm({
                                position: A,
                                Ra: v,
                                P: K.P,
                                T: K.T
                            }),
                            fa = Im({
                                position: A,
                                Ra: v,
                                scrollY: t,
                                P: K.P,
                                T: K.T
                            });
                        if (D.has(fa)) {
                            v = Km(D.get(Z), D.get(fa));
                            break c
                        }
                        const qb = "left" === A ? 20 : K.P - 20;
                        let Pa = qb;A = .3 * K.P / 5 * ("left" === A ? 1 : -1);
                        for (let Ii = 0; 6 > Ii; Ii++) {
                            const Zc = om(K.Y.document, Math.round(Pa), Math.round(v));
                            var L = Em(Zc, K.zb);
                            const Ji = Fm(Zc, K.Y);
                            if (!L && null !== Ji) {
                                Lm(Ji, D, K);
                                D.delete(fa);
                                break
                            }
                            L || (L = Zc.offsetHeight >= .25 * K.T, L = Zc.offsetWidth >= .9 * K.P && L);
                            if (L) D.set(fa, Math.round(Math.abs(Pa - qb) + 20));
                            else if (Pa !== qb) Pa -= A, A /= 2;
                            else {
                                D.set(fa, 0);
                                break
                            }
                            Pa += A
                        }
                        v = Km(D.get(Z), D.get(fa))
                    }
                    M.call(G, v);
                    y += E
                }
                d = Math.round(q / 8);
                f = Math.round(r);
                m = [];
                g = Array(n.length).fill(0);
                for (h = 0; h < n.length; h++) {
                    for (; 0 !== m.length && n[m[m.length - 1]] >= n[h];) m.pop();
                    g[h] = 0 === m.length ? 0 : m[m.length - 1] + 1;
                    m.push(h)
                }
                m = [];
                r = n.length - 1;
                h = Array(n.length).fill(0);
                for (q = r; 0 <= q; q--) {
                    for (; 0 !== m.length && n[m[m.length - 1]] >= n[q];) m.pop();
                    h[q] = 0 === m.length ? r : m[m.length - 1] - 1;
                    m.push(q)
                }
                m = null;
                for (r = 0; r < n.length; r++)
                    if (q = {
                            position: e,
                            width: Math.round(n[r]),
                            height: Math.round((h[r] - g[r] + 1) * d),
                            Ac: f + g[r] * d
                        }, q.width >= l && q.height >= k) {
                        m = q;
                        break
                    }
                e = m
            }
            e ? (l = Math.round(e.width - a.C.width - 15), a.B = Math.min(a.B ? ? l, l), a.A = Math.round(e.Ac), O(c, {
                margin: "0px",
                padding: "0px",
                position: "fixed",
                [a.position]: a.B + "px",
                top: a.A + "px",
                transition: "all 500ms ease-in",
                "z-index": "1"
            }), a.H && O(c, {
                "z-index": "2147483647",
                overflow: "visible"
            }), c = !0) : c = !1
        }
        c ? Hp(a, b) : Qo(a, b)
    }

    function Qo(a, b = 0) {
        "displayed" === a.v && (O(a.j, {
            transition: "all 500ms ease-in",
            opacity: "0",
            top: a.A + b + "px"
        }), clearTimeout(a.F), a.F = setTimeout(() => {
            Ro(a, "idle");
            O(a.j, {
                display: "none"
            })
        }, 500))
    }

    function Hp(a, b = 0) {
        "idle" === a.v && (O(a.j, {
            transition: "",
            display: "block",
            opacity: "0",
            top: a.A - b + "px"
        }), clearTimeout(a.F), a.F = setTimeout(() => {
            Ro(a, "displayed");
            O(a.j, {
                transition: "all 500ms ease-in",
                opacity: "1",
                top: a.A + "px"
            })
        }, 10))
    }
    var Ip = class extends Cn {
        constructor(a, b, c, d, e) {
            var f = Wi,
                g = Ah(vh),
                h = Ah(uh);
            super(a, b, c);
            this.C = e;
            this.I = g;
            this.H = h;
            this.v = "idle";
            this.A = this.F = 0;
            this.B = null;
            this.G = 0;
            this.position = 3 === d ? "left" : "right";
            new Fp(a, b, c, this.position, () => {
                Qo(this, -30);
                Ro(this, "dismissed")
            });
            Ro(this, "idle");
            O(c, {
                display: "none"
            });
            const l = f.O(273, () => {
                Gp(this)
            });
            H(a, "load", l);
            Q(this, () => I(a, "load", l));
            const k = f.O(267, () => {
                this.B = null;
                Gp(this)
            });
            H(b, "resize", k);
            Q(this, () => I(b, "resize", k));
            const m = f.O(268, Ub(() => {
                const n = U(this.l);
                Gp(this, this.C.height / 3 * Math.sign(this.G - n));
                this.G = n
            }));
            H(b, "scroll", m, Wb);
            Q(this, () => I(b, "scroll", m))
        }
    };
    var Jp = class {
        constructor(a) {
            this.j = a
        }
        verifyAndProcessConfig(a, b) {
            if (3 !== this.j && 4 !== this.j) return !1;
            const c = new lm;
            if (!km(c, b)) return !1;
            b = a.document.createElement("ins");
            b.className = "adsbygoogle";
            a.document.body.appendChild(b);
            const d = c.B || {};
            d.google_ad_client = c.m;
            d.google_ad_width = c.A;
            d.google_ad_height = c.v;
            d.google_reactive_ad_format = this.j;
            Mm(b, d, a);
            return !0
        }
    };
    class Kp {
        verifyAndProcessConfig(a, b, c) {
            const d = xe(a);
            if (d.wasReactiveAdConfigReceived[8]) return !1;
            const e = new lm;
            if (!km(e, b)) return !1;
            d.wasReactiveAdConfigReceived[8] = !0;
            if (!e.l && !zo(R(Bo), c)) return !1;
            b = Pc("INS");
            b.className = "adsbygoogle";
            O(b, {
                display: "none"
            });
            a.document.documentElement.appendChild(b);
            c = e.B || {};
            c.google_ad_client = e.m;
            c.google_ad_width = e.A;
            c.google_ad_height = e.v;
            c.google_reactive_ad_format = 8;
            e.j && (c.google_reactive_fill_message = e.j);
            e.l && (c.google_adtest = "on");
            Mm(b, c, a);
            return !0
        }
    };
    class Lp {
        configProcessorForAdFormat(a) {
            switch (a) {
                case 1:
                case 2:
                    return new Pm(a);
                case 3:
                case 4:
                    return Ah(xh) ? new Jp(a) : null;
                case 8:
                    return R(Kp);
                case 9:
                    return R(Po);
                default:
                    return null
            }
        }
        createAdSlot(a, b, c, d, e) {
            a: {
                var f = b.google_reactive_ad_format;
                switch (f) {
                    case 1:
                    case 2:
                        e = tm(a, f);
                        c = new Zn(c, a, e, d);
                        new co(a, c, b.google_reactive_fill_message);
                        break a;
                    case 3:
                    case 4:
                        new So(a, new Ip(c, a, d, f, new pc(b.google_ad_width, b.google_ad_height)));
                        break a;
                    case 8:
                        new Ap(a, c, "on" == b.google_adtest, new pc(b.google_ad_width,
                            b.google_ad_height), d, e, b.google_reactive_fill_message);
                        break a;
                    case 9:
                        f = b.google_rasc;
                        if (void 0 === f || null === f) var g = null;
                        else try {
                            g = fo(f)
                        } catch (h) {
                            $i("rasf_fsi_ama", {}, .1), g = null
                        }
                        g = g || new eo;
                        new No(a, c, g, "on" == b.google_adtest, d, e)
                }
            }
        }
    };
    class Mp {};

    function Np(a) {
        const b = R(zh);
        b.j = (c, d) => le(5, a, () => !1)(c, d, 1);
        b.l = (c, d) => le(6, a, () => 0)(c, d, 1);
        b.v = (c, d) => le(7, a, () => "")(c, d, 1);
        b.A = (c, d) => le(8, a, () => [])(c, d, 1);
        b.m = () => {
            le(15, a, () => {})(1)
        }
    };

    function Op(a) {
        Wi.Eb(b => {
            b.shv = String(a);
            b.mjsv = "m202302090101";
            const c = R(ne).j();
            u.google_ad_modifications || (u.google_ad_modifications = {});
            var d = u.google_ad_modifications;
            d.eids || (d.eids = []);
            b.eid = c.concat(d.eids).join(",")
        })
    };
    var Pp = "undefined" === typeof sttc ? void 0 : sttc;

    function Qp() {
        var a = Wi;
        try {
            return Nb(Pp, Xd), new gm(JSON.parse(Pp))
        } catch (b) {
            a.Qa(838, b instanceof Error ? b : Error(String(b)), void 0, c => {
                c.jspb = String(Pp)
            })
        }
        return new gm
    };
    Yi(210, () => {
        var a = Qp(),
            b = C(a, 2);
        Op(null == b ? "" : b);
        a = zb(a, 6);
        Nb(jm, Yd);
        jm = a;
        a = u.ggeac || (u.ggeac = {});
        me(R(ne), a);
        Np(a);
        R(Mp);
        R(zh).m();
        a = new Lp; {
            u.google_llp || (u.google_llp = {});
            b = u.google_llp;
            let c = b[1];
            if (!c) {
                const {
                    promise: d,
                    resolve: e
                } = new Zl;
                c = {
                    promise: d,
                    resolve: e
                };
                b[1] = c
            }
            b = c
        }
        b.resolve(a)
    });
}).call(this, "[2021,\"r20230213\",\"r20110914\",1,null,1,null,\".google.nl\",null,null,null,null,[null,[]],null,null,null,null,-1,[44759875,44759926,44759842]]");