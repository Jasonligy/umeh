(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var p = this || self;

    function aa(a) {
        a = a.s;
        const b = encodeURIComponent;
        let c = "";
        a.platform && (c += "&uap=" + b(a.platform));
        a.platformVersion && (c += "&uapv=" + b(a.platformVersion));
        a.uaFullVersion && (c += "&uafv=" + b(a.uaFullVersion));
        a.architecture && (c += "&uaa=" + b(a.architecture));
        a.model && (c += "&uam=" + b(a.model));
        a.bitness && (c += "&uab=" + b(a.bitness));
        a.fullVersionList && (c += "&uafvl=" + b(a.fullVersionList.map(d => b(d.brand) + ";" + b(d.version)).join("|")));
        "undefined" !== typeof a.wow64 && (c += "&uaw=" + Number(a.wow64));
        return c
    }

    function ba(a, b) {
        return a.h ? a.m.slice(0, a.h.index) + b + a.m.slice(a.h.index) : a.m + b
    }

    function da(a) {
        let b = "&act=1&ri=1";
        a.i && a.s && (b += aa(a));
        return ba(a, b)
    }

    function ea(a, b) {
        return a.i && a.j || a.o ? 1 == b ? a.i ? a.j : ba(a, "&dct=1") : 2 == b ? ba(a, "&ri=2") : ba(a, "&ri=16") : a.m
    }
    var fa = class {
        constructor({
            url: a,
            X: b
        }) {
            this.m = a;
            this.s = b;
            b = /[?&]dsh=1(&|$)/.test(a);
            this.i = !b && /[?&]ae=1(&|$)/.test(a);
            this.o = !b && /[?&]ae=2(&|$)/.test(a);
            if ((this.h = /[?&]adurl=([^&]*)/.exec(a)) && this.h[1]) {
                let c;
                try {
                    c = decodeURIComponent(this.h[1])
                } catch (d) {
                    c = null
                }
                this.j = c
            }
        }
    };

    function q(a) {
        var b;
        a: {
            if (b = p.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return -1 != b.indexOf(a)
    };
    var r = class {
        constructor(a, b) {
            this.h = b === ha ? a : ""
        }
        toString() {
            return this.h.toString()
        }
    };
    r.prototype.i = !0;
    var ia;
    try {
        new URL("s://g"), ia = !0
    } catch (a) {
        ia = !1
    }
    var ka = ia,
        ha = {},
        la = new r("about:invalid#zClosurez", ha);

    function ma(a, b) {
        a: {
            const c = a.length,
                d = "string" === typeof a ? a.split("") : a;
            for (let f = 0; f < c; f++)
                if (f in d && b.call(void 0, d[f], f, a)) {
                    b = f;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    };

    function na(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };

    function oa(a, b) {
        if (!(b instanceof r || b instanceof r)) {
            b = "object" == typeof b && b.i ? b.h.toString() : String(b);
            b: {
                var c = b;
                if (ka) {
                    try {
                        var d = new URL(c)
                    } catch (f) {
                        c = "https:";
                        break b
                    }
                    c = d.protocol
                } else c: {
                    d = document.createElement("a");
                    try {
                        d.href = c
                    } catch (f) {
                        c = void 0;
                        break c
                    }
                    c = d.protocol;c = ":" === c || "" === c ? "https:" : c
                }
            }
            "javascript:" === c && (b = "about:invalid#zClosurez");
            b = new r(b, ha)
        }
        a.href = b instanceof r && b.constructor === r ? b.h : "type_error:SafeUrl"
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    class pa {
        constructor(a) {
            this.fa = a
        }
    }

    function v(a) {
        return new pa(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const qa = new pa(a => /^[^:]*([/?#]|$)/.test(a));
    var ra = v("http"),
        sa = v("https"),
        ta = v("ftp"),
        ua = v("mailto"),
        va = v("intent"),
        wa = v("market"),
        xa = v("itms"),
        ya = v("itms-appss");
    const za = [v("data"), ra, sa, ua, ta, qa];

    function Aa(a, b = za) {
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof pa && d.fa(a)) return new r(a, ha)
        }
    }

    function Ba(a, b = za) {
        return Aa(a, b) || la
    };

    function Da() {
        return q("iPhone") && !q("iPod") && !q("iPad")
    };

    function Ea(a) {
        Ea[" "](a);
        return a
    }
    Ea[" "] = function() {};
    var Fa = Da(),
        Ga = q("iPad");
    var Ha = Da() || q("iPod"),
        Ia = q("iPad");
    var Ja = {},
        Ka = null;

    function La(a, b) {
        void 0 === b && (b = 0);
        if (!Ka) {
            Ka = {};
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], f = 0; 5 > f; f++) {
                var e = c.concat(d[f].split(""));
                Ja[f] = e;
                for (var g = 0; g < e.length; g++) {
                    var h = e[g];
                    void 0 === Ka[h] && (Ka[h] = g)
                }
            }
        }
        b = Ja[b];
        c = Array(Math.floor(a.length / 3));
        d = b[64] || "";
        for (f = e = 0; e < a.length - 2; e += 3) {
            var l = a[e],
                k = a[e + 1];
            h = a[e + 2];
            g = b[l >> 2];
            l = b[(l & 3) << 4 | k >> 4];
            k = b[(k & 15) << 2 | h >> 6];
            h = b[h & 63];
            c[f++] = g + l + k + h
        }
        g = 0;
        h = d;
        switch (a.length - e) {
            case 2:
                g =
                    a[e + 1], h = b[(g & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
        }
        return c.join("")
    };
    var Ma = "undefined" !== typeof Uint8Array;
    const Na = !(q("Trident") || q("MSIE")) && "function" === typeof p.btoa;

    function Oa(a) {
        if (!Na) return La(a);
        let b = "";
        for (; 10240 < a.length;) b += String.fromCharCode.apply(null, a.subarray(0, 10240)), a = a.subarray(10240);
        b += String.fromCharCode.apply(null, a);
        return btoa(b)
    }
    var Pa = {};
    let Qa;
    var Ra = class {
        constructor(a) {
            if (Pa !== Pa) throw Error("illegal external caller");
            this.Y = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        }
    };
    const w = Symbol();

    function x(a, b) {
        if (w) return a[w] |= b;
        if (void 0 !== a.v) return a.v |= b;
        Object.defineProperties(a, {
            v: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    }

    function Sa(a, b) {
        const c = y(a);
        (c & b) !== b && (Object.isFrozen(a) && (a = Array.prototype.slice.call(a)), z(a, c | b));
        return a
    }

    function Ta(a) {
        w ? a[w] && (a[w] &= -17) : void 0 !== a.v && (a.v &= -17)
    }

    function y(a) {
        let b;
        w ? b = a[w] : b = a.v;
        return null == b ? 0 : b
    }

    function z(a, b) {
        w ? a[w] = b : void 0 !== a.v ? a.v = b : Object.defineProperties(a, {
            v: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function Ua(a) {
        x(a, 1);
        return a
    }

    function A(a) {
        return !!(y(a) & 2)
    }

    function B(a) {
        x(a, 2);
        return a
    }

    function Va(a) {
        x(a, 16);
        return a
    }

    function Wa(a, b) {
        z(b, (a | 0) & -51)
    }

    function Xa(a, b) {
        z(b, (a | 18) & -41)
    };
    var Ya = {};

    function Za(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let $a;
    var C;
    const ab = [];
    z(ab, 23);
    C = Object.freeze(ab);

    function bb(a) {
        if (A(a.l)) throw Error("Cannot mutate an immutable Message");
    }
    class cb {
        constructor(a) {
            this.S = 0;
            this.R = a
        }
        next() {
            return this.S < this.R.length ? {
                done: !1,
                value: this.R[this.S++]
            } : {
                done: !0,
                value: void 0
            }
        }[Symbol.iterator]() {
            return this
        }
    }

    function ib(a) {
        var b = a.length;
        (b = b ? a[b - 1] : void 0) && Za(b) ? b.g = 1 : a.push({
            g: 1
        })
    };

    function jb(a, b, c) {
        let d = !1;
        if (null != a && "object" === typeof a && !(d = Array.isArray(a)) && a.J === Ya) return a;
        if (d) return new b(a);
        if (c) return new b
    };
    let kb;

    function D(a) {
        return Array.from(a.h.keys()).sort(lb)
    }

    function nb(a, b = ob) {
        const c = D(a);
        for (let d = 0; d < c.length; d++) {
            const f = c[d],
                e = a.h.get(c[d]);
            c[d] = [b(f), b(e)]
        }
        return c
    }

    function pb(a, b = ob) {
        const c = [];
        a = a.h.entries();
        for (var d; !(d = a.next()).done;) d = d.value, d[0] = b(d[0]), d[1] = b(d[1]), c.push(d);
        return c
    }
    var E = class {
        constructor(a, b, c, d = qb) {
            c = y(a);
            c |= 32;
            z(a, c);
            this.i = c;
            this.j = (this.m = b) ? rb : sb;
            this.s = d;
            this.h = b = new Map;
            for (d = 0; d < a.length; d++) c = a[d], b.set(c[0], c[1]);
            this.size = b.size
        }
        entries() {
            const a = D(this);
            for (let b = 0; b < a.length; b++) {
                const c = a[b];
                a[b] = [c, this.get(c)]
            }
            return new cb(a)
        }
        keys() {
            const a = D(this);
            return new cb(a)
        }
        values() {
            const a = D(this);
            for (let b = 0; b < a.length; b++) a[b] = this.get(a[b]);
            return new cb(a)
        }
        forEach(a, b) {
            const c = D(this);
            for (let d = 0; d < c.length; d++) {
                const f = c[d];
                a.call(b, this.get(f),
                    f, this)
            }
        }
        set(a, b) {
            if (this.i & 2) throw Error("Cannot mutate an immutable Map");
            const c = this.h;
            if (null == b) return c.delete(a), this;
            c.set(a, this.j(b, this.m, !1, this.o));
            this.size = c.size;
            return this
        }
        get(a) {
            const b = this.h;
            if (b.has(a)) {
                var c = b.get(a),
                    d = this.i,
                    f = this.m;
                f && Array.isArray(c) && d & 16 && Va(c);
                d = this.j(c, f, !!(d & 2), this.o);
                d !== c && b.set(a, d);
                return d
            }
        }
        has(a) {
            return this.h.has(a)
        }[Symbol.iterator]() {
            return this.entries()
        }
    };

    function lb(a, b) {
        a = "" + a;
        b = "" + b;
        return a > b ? 1 : a < b ? -1 : 0
    }

    function rb(a, b, c, d) {
        a = jb(a, b, !0);
        c ? B(a.l) : d && (a = tb(a));
        return a
    }

    function sb(a) {
        return a
    }

    function qb(a) {
        return a
    }

    function ob(a) {
        return a
    };

    function ub(a) {
        const b = a.i + a.A;
        return a.u || (a.u = a.l[b] = {})
    }

    function F(a, b, c) {
        return -1 === b ? null : b >= a.i ? a.u ? a.u[b] : void 0 : c && a.u && (c = a.u[b], null != c) ? c : a.l[b + a.A]
    }

    function G(a, b, c, d) {
        bb(a);
        return H(a, b, c, d)
    }

    function H(a, b, c, d) {
        a.j && (a.j = void 0);
        if (b >= a.i || d) return ub(a)[b] = c, a;
        a.l[b + a.A] = c;
        (c = a.u) && b in c && delete c[b];
        return a
    }

    function vb(a, b, c, d, f) {
        let e = F(a, b, d);
        Array.isArray(e) || (e = C);
        const g = y(e);
        g & 1 || Ua(e);
        if (f) g & 2 || B(e), c & 1 || Object.freeze(e);
        else {
            f = !(c & 2);
            const h = g & 2;
            c & 1 || !h ? f && g & 16 && !h && Ta(e) : (e = Ua(Array.prototype.slice.call(e)), H(a, b, e, d))
        }
        return e
    }

    function wb(a, b) {
        var c = A(a.l);
        let d = vb(a, b, 1, !1, c);
        const f = y(d);
        if (!(f & 4)) {
            Object.isFrozen(d) && (d = Ua(d.slice()), H(a, b, d, !1));
            let e = 0,
                g = 0;
            for (; e < d.length; e++) {
                const h = d[e];
                null != h && (d[g++] = h)
            }
            g < e && (d.length = g);
            x(d, 5);
            c && (B(d), Object.freeze(d))
        }!c && (f & 2 || Object.isFrozen(d)) && (d = Array.prototype.slice.call(d), x(d, 5), c = d, c = null == c ? C : Sa(c, 1), G(a, b, c, !1));
        return d
    }
    let xb;

    function J(a, b, c) {
        {
            const g = A(a.l);
            b: {
                var d = F(a, b),
                    f = g,
                    e = !1;
                if (null == d) {
                    if (f) {
                        a = xb || (xb = new E(B([])));
                        break b
                    }
                    d = []
                } else if (d.constructor === E) {
                    if (0 == (d.i & 2) || f) {
                        a = d;
                        break b
                    }
                    d = pb(d)
                } else Array.isArray(d) ? e = A(d) : d = [];
                if (f) {
                    if (!d.length) {
                        a = xb || (xb = new E(B([])));
                        break b
                    }
                    e || (e = !0, B(d))
                } else if (e)
                    for (e = !1, d = Array.prototype.slice.call(d), f = 0; f < d.length; f++) {
                        const h = d[f] = Array.prototype.slice.call(d[f]);
                        Array.isArray(h[1]) && (h[1] = B(h[1]))
                    }
                e || (y(d) & 32 ? Ta(d) : y(a.l) & 16 && Va(d));e = new E(d, c);H(a, b, e, !1);a = e
            }
            null ==
                a ? c = a : (!g && c && (a.o = !0), c = a)
        }
        return c
    }

    function K(a, b, c) {
        const d = F(a, c, !1);
        b = jb(d, b);
        b !== d && null != b && (H(a, c, b, !1), x(b.l, y(a.l) & 18));
        return b
    }

    function L(a, b, c) {
        b = K(a, b, c);
        if (null == b) return b;
        if (!A(a.l)) {
            const d = tb(b);
            d !== b && (b = d, H(a, c, b, !1))
        }
        return b
    }

    function yb(a) {
        var b = A(a.l);
        var c = zb;
        a.h || (a.h = {});
        var d = a.h[7];
        var f = vb(a, 7, 3, void 0, b);
        if (d) b || (f = Object.isFrozen(d), b && !f ? Object.freeze(d) : !b && f && (d = Array.prototype.slice.call(d), a.h[7] = d));
        else {
            var e = f;
            d = [];
            var g = !!(y(a.l) & 16);
            f = A(e);
            var h = e;
            !b && f && (e = Array.prototype.slice.call(e));
            var l = f;
            let m = 0;
            for (; m < e.length; m++) {
                var k = e[m];
                var n = c;
                n = Array.isArray(k) ? new n(k) : void 0;
                if (void 0 === n) continue;
                k = n.l;
                const t = y(k);
                let u = t;
                f && (u |= 2);
                g && (u |= 16);
                u != t && z(k, u);
                k = u;
                l || (l = !!(2 & k));
                d.push(n)
            }
            a.h[7] = d;
            g =
                y(e);
            c = g | 33;
            c = l ? c & -9 : c | 8;
            g != c && (l = e, Object.isFrozen(l) && (l = Array.prototype.slice.call(l)), z(l, c), e = l);
            h !== e && H(a, 7, e);
            (b || b && f) && B(d);
            b && Object.freeze(d)
        }
        a = vb(a, 7, 3, void 0, b);
        if (!(b || y(a) & 8)) {
            for (b = 0; b < d.length; b++) f = d[b], h = tb(f), f !== h && (d[b] = h, a[b] = h.l);
            x(a, 8)
        }
        return d
    }

    function Ab(a, b, c, d) {
        bb(a);
        let f = null == c ? C : Ua([]);
        if (null != c) {
            let e = !!c.length;
            for (let g = 0; g < c.length; g++) {
                const h = c[g];
                e = e && !A(h.l);
                f[g] = h.l
            }
            f = Sa(f, (e ? 8 : 0) | 1);
            a.h || (a.h = {});
            a.h[b] = c
        } else a.h && (a.h[b] = void 0);
        return H(a, b, f, d)
    }

    function Bb(a, b) {
        a = F(a, b);
        return null == a ? 0 : a
    }

    function M(a, b) {
        a = F(a, b);
        return null == a ? "" : a
    }

    function N(a, b) {
        a = F(a, b);
        a = null == a ? a : !!a;
        return null == a ? !1 : a
    }

    function Q(a, b, c = 0) {
        a = F(a, b);
        return null == a ? c : a
    };

    function Cb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (0 !== (y(a) & 128)) return a = Array.prototype.slice.call(a), ib(a), a
                    } else {
                        if (Ma && null != a && a instanceof Uint8Array) return Oa(a);
                        if (a instanceof Ra) {
                            const b = a.Y;
                            return null == b ? "" : "string" === typeof b ? b : a.Y = Oa(b)
                        }
                        if (a instanceof E) return nb(a)
                    }
        }
        return a
    };

    function Db(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = Eb(a, b, c, void 0 !== d);
            else if (Za(a)) {
                const f = {};
                for (let e in a) f[e] = Db(a[e], b, c, d);
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function Eb(a, b, c, d) {
        const f = y(a);
        d = d ? !!(f & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (let e = 0; e < a.length; e++) a[e] = Db(a[e], b, c, d);
        c(f, a);
        return a
    }

    function Fb(a) {
        return Db(a, Gb, Hb)
    }

    function Gb(a) {
        return a.J === Ya ? a.toJSON() : a instanceof E ? nb(a, Fb) : Cb(a)
    }

    function Hb(a, b) {
        a & 128 && ib(b)
    };

    function Ib(a, b, c = Xa) {
        if (null != a) {
            if (Ma && a instanceof Uint8Array) return a.length ? new Ra(new Uint8Array(a)) : Qa || (Qa = new Ra(null));
            if (Array.isArray(a)) {
                const d = y(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return z(a, d | 2), a;
                a = Eb(a, Ib, d & 4 ? Xa : c, !0);
                b = y(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            a.J === Ya ? a = Jb(a) : a instanceof E && (b = B(pb(a, Ib)), a = new E(b, a.m, a.j, a.s));
            return a
        }
    }

    function Kb(a, b, c, d, f, e, g) {
        (a = a.h && a.h[c]) ? (d = y(a), d & 2 ? d = a : (e = Array.prototype.map.call(a, Jb, void 0), Xa(d, e), Object.freeze(e), d = e), Ab(b, c, d, f)) : G(b, c, Ib(d, e, g), f)
    }

    function Jb(a) {
        if (A(a.l)) return a;
        a = Lb(a, !0);
        B(a.l);
        return a
    }

    function Lb(a, b) {
        const c = a.l;
        var d = Va([]),
            f = a.constructor.h;
        f && d.push(f);
        f = a.u;
        if (f) {
            d.length = c.length;
            d.fill(void 0, d.length, c.length);
            var e = {};
            d[d.length - 1] = e
        }
        0 !== (y(c) & 128) && ib(d);
        b = b || A(a.l) ? Xa : Wa;
        e = a.constructor;
        kb = d;
        d = new e(d);
        kb = void 0;
        a.U && (d.U = a.U.slice());
        e = !!(y(c) & 16);
        const g = f ? c.length - 1 : c.length;
        for (let h = 0; h < g; h++) Kb(a, d, h - a.A, c[h], !1, e, b);
        if (f)
            for (const h in f) Kb(a, d, +h, f[h], !0, e, b);
        return d
    }

    function tb(a) {
        if (!A(a.l)) return a;
        const b = Lb(a, !1);
        b.j = a;
        return b
    };

    function Mb(a) {
        $a = !0;
        try {
            return JSON.stringify(a.toJSON(), Nb)
        } finally {
            $a = !1
        }
    }
    var S = class {
        constructor(a, b, c) {
            null == a && (a = kb);
            kb = void 0;
            var d = 0 < (this.constructor.i || 0),
                f = this.constructor.h,
                e = !1;
            if (null == a) {
                a = f ? [f] : [];
                var g = 48;
                var h = !0;
                d && (g |= 128);
                z(a, g)
            } else {
                if (!Array.isArray(a)) throw Error();
                if (f && f !== a[0]) throw Error();
                let l = g = x(a, 0);
                if (h = 0 !== (16 & l))(e = 0 !== (32 & l)) || (l |= 32);
                if (d) {
                    if (0 < a.length) {
                        const k = a[a.length - 1];
                        if (Za(k) && "g" in k) {
                            l |= 128;
                            delete k.g;
                            let n = !0;
                            for (let m in k) {
                                n = !1;
                                break
                            }
                            n && a.pop()
                        } else throw Error();
                    }
                } else if (128 & l) throw Error();
                g !== l && z(a, l)
            }
            this.A = f ? 0 : -1;
            this.h = void 0;
            this.l = a;
            a: {
                g = this.l.length;f = g - 1;
                if (g && (g = this.l[f], Za(g))) {
                    this.u = g;
                    this.i = f - this.A;
                    break a
                }
                void 0 !== b && -1 < b ? (this.i = Math.max(b, f + 1 - this.A), this.u = void 0) : this.i = Number.MAX_VALUE
            }
            if (!d && this.u && "g" in this.u) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
            if (c) {
                b = h && !e && !0;
                d = this.i;
                let l;
                for (h = 0; h < c.length; h++) e = c[h], e < d ? (e += this.A, (f = a[e]) ? Ob(f, b) : a[e] = C) : (l || (l = ub(this)), (f = l[e]) ? Ob(f, b) : l[e] = C)
            }
        }
        toJSON() {
            const a = this.l;
            return $a ? a : Eb(a, Gb,
                Hb)
        }
    };

    function Ob(a, b) {
        if (Array.isArray(a)) {
            var c = y(a),
                d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && z(a, c | d)
        }
    }
    S.prototype.J = Ya;
    S.prototype.toString = function() {
        return this.l.toString()
    };

    function Nb(a, b) {
        return Cb(b)
    };
    var Pb = class extends S {
        constructor() {
            super()
        }
    };
    var Qb = class extends S {
        constructor(a) {
            super(a)
        }
    };
    var Rb = class extends S {
        constructor(a) {
            super(a)
        }
    };
    var zb = class extends S {
        constructor(a) {
            super(a)
        }
        B() {
            return M(this, 3)
        }
        W(a) {
            G(this, 5, a)
        }
    };
    var T = class extends S {
        constructor(a) {
            super(a)
        }
        B() {
            return M(this, 1)
        }
        W(a) {
            G(this, 2, a)
        }
    };
    var Sb = class extends S {
        constructor(a) {
            super(a)
        }
    };
    var Ub = class extends S {
            constructor(a) {
                super(a, -1, Tb)
            }
        },
        Tb = [6, 7];
    var Wb = class extends S {
            constructor(a) {
                super(a, -1, Vb)
            }
        },
        Vb = [17];
    var Xb = class extends S {
        constructor(a) {
            super(a)
        }
    };
    var Yb = class extends S {
        constructor() {
            super()
        }
    };
    var Zb = {
            capture: !0
        },
        $b = {
            passive: !0
        },
        ac = na(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                p.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function bc(a) {
        return a ? a.passive && ac() ? a : a.capture || !1 : !1
    }

    function U(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, bc(d))
    };

    function cc() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)
    };
    var dc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function ec(a) {
        var b = a.indexOf("#");
        0 > b && (b = a.length);
        var c = a.indexOf("?");
        if (0 > c || c > b) {
            c = b;
            var d = ""
        } else d = a.substring(c + 1, b);
        return [a.slice(0, c), d, a.slice(b)]
    }

    function fc(a, b) {
        return b ? a ? a + "&" + b : b : a
    }

    function gc(a, b) {
        if (!b) return a;
        a = ec(a);
        a[1] = fc(a[1], b);
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    }

    function hc(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) hc(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    }

    function ic(a) {
        var b = [],
            c;
        for (c in a) hc(c, a[c], b);
        return b.join("&")
    }

    function jc() {
        var a = cc();
        a = null != a ? "=" + encodeURIComponent(String(a)) : "";
        return gc("https://pagead2.googlesyndication.com/pagead/gen_204", "zx" + a)
    }
    var kc = /#|$/;

    function lc(a, b) {
        var c = a.search(kc);
        a: {
            var d = 0;
            for (var f = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var e = a.charCodeAt(d - 1);
                if (38 == e || 63 == e)
                    if (e = a.charCodeAt(d + f), !e || 61 == e || 38 == e || 35 == e) break a;
                d += f + 1
            }
            d = -1
        }
        if (0 > d) return null;
        f = a.indexOf("&", d);
        if (0 > f || f > c) f = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== f ? f : 0).replace(/\+/g, " "))
    }

    function mc(a, b) {
        a = ec(a);
        var c = a[1],
            d = [];
        c && c.split("&").forEach(function(f) {
            var e = f.indexOf("=");
            b.hasOwnProperty(0 <= e ? f.slice(0, e) : f) || d.push(f)
        });
        a[1] = fc(d.join("&"), ic(b));
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    };

    function nc(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    var oc = a => {
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    let pc = [];
    const qc = () => {
        const a = pc;
        pc = [];
        for (const b of a) try {
            b()
        } catch (c) {}
    };
    var vc = a => {
            pc.push(a);
            1 == pc.length && (window.Promise ? Promise.resolve().then(qc) : window.setImmediate ? setImmediate(qc) : setTimeout(qc, 0))
        },
        wc = a => {
            var b = V;
            "complete" === b.readyState || "interactive" === b.readyState ? vc(a) : b.addEventListener("DOMContentLoaded", a)
        },
        xc = a => {
            var b = window;
            "complete" === b.document.readyState ? vc(a) : b.addEventListener("load", a)
        };

    function yc(a = document) {
        return a.createElement("img")
    };

    function zc(a, b, c = null, d = !1) {
        Ac(a, b, c, d)
    }

    function Ac(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = yc(a.document);
        if (c || d) {
            const e = g => {
                c && c(g);
                if (d) {
                    g = a.google_image_requests;
                    const h = Array.prototype.indexOf.call(g, f, void 0);
                    0 <= h && Array.prototype.splice.call(g, h, 1)
                }
                f.removeEventListener && f.removeEventListener("load", e, bc());
                f.removeEventListener && f.removeEventListener("error", e, bc())
            };
            U(f, "load", e);
            U(f, "error", e)
        }
        f.src = b;
        a.google_image_requests.push(f)
    }

    function Bc(a, b) {
        var c;
        if (c = a.navigator) c = a.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
        c && a.navigator.sendBeacon ? a.navigator.sendBeacon(b) : zc(a, b, void 0, !1)
    };
    let Cc = 0;

    function Dc(a) {
        return (a = Ec(a, document.currentScript)) && a.getAttribute("data-jc-version") || "unknown"
    }

    function Ec(a, b = null) {
        return b && b.getAttribute("data-jc") === String(a) ? b : document.querySelector(`[${"data-jc"}="${a}"]`)
    }

    function Fc(a) {
        if (!(.01 < Math.random())) {
            const b = Ec(a, document.currentScript);
            a = `https://${b&&"true"===b.getAttribute("data-jc-rcd")?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${Dc(a)}&sample=${.01}`;
            Bc(window, a)
        }
    };
    var V = document,
        W = window;
    const Gc = [ra, sa, ua, ta, qa, wa, xa, va, ya];

    function Hc(a, b) {
        if (a instanceof r) return a;
        const c = Ba(a, Gc);
        c === la && b(a);
        return c
    }
    var Ic = a => {
        var b = `${"http:"===W.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;
        return c => {
            c = ic({
                id: "unsafeurl",
                ctx: a,
                url: c
            });
            c = gc(b, c);
            navigator.sendBeacon && navigator.sendBeacon(c, "")
        }
    };
    var Jc = a => {
        var b = V;
        try {
            return b.querySelectorAll("*[" + a + "]")
        } catch (c) {
            return []
        }
    };
    class Kc {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const Lc = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Mc = class {
            constructor(a, b) {
                this.h = a;
                this.i = b
            }
        },
        Nc = class {
            constructor(a, b) {
                this.url = a;
                this.V = !!b;
                this.depth = null
            }
        };

    function Oc(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Pc(a, b, c, d, f) {
        const e = [];
        nc(a, function(g, h) {
            (g = Qc(g, b, c, d, f)) && e.push(h + "=" + g)
        });
        return e.join(b)
    }

    function Qc(a, b, c, d, f) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const e = [];
                for (let g = 0; g < a.length; g++) e.push(Qc(a[g], b, c, d + 1, f));
                return e.join(c[d])
            }
        } else if ("object" == typeof a) return f = f || 0, 2 > f ? encodeURIComponent(Pc(a, b, c, d, f + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Rc(a) {
        let b = 1;
        for (const c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    }

    function Sc(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Rc(a) - b.length;
        if (0 > d) return "";
        a.h.sort(function(e, g) {
            return e - g
        });
        b = null;
        let f = "";
        for (let e = 0; e < a.h.length; e++) {
            const g = a.h[e],
                h = a.i[g];
            for (let l = 0; l < h.length; l++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let k = Pc(h[l], a.j, ",$");
                if (k) {
                    k = f + k;
                    if (d >= k.length) {
                        d -= k.length;
                        c += k;
                        f = a.j;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        }
        a = "";
        null != b && (a = f + "trn=" + b);
        return c + a
    }
    class Tc {
        constructor() {
            this.j = "&";
            this.i = {};
            this.m = 0;
            this.h = []
        }
    };

    function Uc() {
        var a = Vc,
            b = window.google_srt;
        0 <= b && 1 >= b && (a.h = b)
    }

    function Wc(a, b, c, d = !1, f) {
        if ((d ? a.h : Math.random()) < (f || .01)) try {
            let e;
            c instanceof Tc ? e = c : (e = new Tc, nc(c, (h, l) => {
                var k = e;
                const n = k.m++;
                h = Oc(l, h);
                k.h.push(n);
                k.i[n] = h
            }));
            const g = Sc(e, "/pagead/gen_204?id=" + b + "&");
            g && zc(p, g)
        } catch (e) {}
    }
    class Xc {
        constructor() {
            this.h = Math.random()
        }
    };
    let Yc = null;

    function Zc() {
        const a = p.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function $c() {
        const a = p.performance;
        return a && a.now ? a.now() : null
    };
    class ad {
        constructor(a, b) {
            var c = $c() || Zc();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.taskId = this.slotId = void 0
        }
    };
    const X = p.performance,
        bd = !!(X && X.mark && X.measure && X.clearMarks),
        cd = na(() => {
            var a;
            if (a = bd) {
                var b;
                if (null === Yc) {
                    Yc = "";
                    try {
                        a = "";
                        try {
                            a = p.top.location.hash
                        } catch (c) {
                            a = p.location.hash
                        }
                        a && (Yc = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Yc;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function dd(a) {
        a && X && cd() && (X.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), X.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class ed {
        constructor() {
            var a = window;
            this.i = [];
            this.j = a || p;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.i = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.h = cd() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.h) return null;
            a = new ad(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            X && cd() && X.mark(b);
            return a
        }
        end(a) {
            if (this.h && "number" === typeof a.value) {
                a.duration = ($c() || Zc()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                X && cd() && X.mark(b);
                !this.h ||
                    2048 < this.i.length || this.i.push(a)
            }
        }
    };

    function fd(a) {
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

    function gd(a, b, c) {
        let d, f;
        try {
            a.h && a.h.h ? (f = a.h.start(b.toString(), 3), d = c(), a.h.end(f)) : d = c()
        } catch (e) {
            c = !0;
            try {
                dd(f), c = a.s(b, new Kc(e, {
                    message: fd(e)
                }), void 0, void 0)
            } catch (g) {
                a.o(217, g)
            }
            if (c) {
                let g, h;
                null == (g = window.console) || null == (h = g.error) || h.call(g, e)
            } else throw e;
        }
        return d
    }

    function hd(a, b) {
        var c = id;
        return (...d) => gd(c, a, () => b.apply(void 0, d))
    }
    class jd {
        constructor(a = null) {
            this.j = Vc;
            this.i = null;
            this.s = this.o;
            this.h = a;
            this.m = !1
        }
        pinger() {
            return this.j
        }
        o(a, b, c, d, f) {
            f = f || "jserror";
            let e;
            try {
                const O = new Tc;
                var g = O;
                g.h.push(1);
                g.i[1] = Oc("context", a);
                b.error && b.meta && b.id || (b = new Kc(b, {
                    message: fd(b)
                }));
                if (b.msg) {
                    g = O;
                    var h = b.msg.substring(0, 512);
                    g.h.push(2);
                    g.i[2] = Oc("msg", h)
                }
                var l = b.meta || {};
                b = l;
                if (this.i) try {
                    this.i(b)
                } catch (I) {}
                if (d) try {
                    d(b)
                } catch (I) {}
                d = O;
                l = [l];
                d.h.push(3);
                d.i[3] = l;
                d = p;
                l = [];
                let Ca;
                b = null;
                do {
                    var k = d;
                    try {
                        var n;
                        if (n = !!k && null != k.location.href) b: {
                            try {
                                Ea(k.foo);
                                n = !0;
                                break b
                            } catch (I) {}
                            n = !1
                        }
                        var m = n
                    } catch (I) {
                        m = !1
                    }
                    m ? (Ca = k.location.href, b = k.document && k.document.referrer || null) : (Ca = b, b = null);
                    l.push(new Nc(Ca || ""));
                    try {
                        d = k.parent
                    } catch (I) {
                        d = null
                    }
                } while (d && k != d);
                for (let I = 0, rc = l.length - 1; I <= rc; ++I) l[I].depth = rc - I;
                k = p;
                if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == l.length - 1)
                    for (m = 1; m < l.length; ++m) {
                        var t = l[m];
                        t.url || (t.url = k.location.ancestorOrigins[m - 1] || "", t.V = !0)
                    }
                var u = l;
                let db = new Nc(p.location.href, !1);
                k = null;
                const eb = u.length -
                    1;
                for (t = eb; 0 <= t; --t) {
                    var P = u[t];
                    !k && Lc.test(P.url) && (k = P);
                    if (P.url && !P.V) {
                        db = P;
                        break
                    }
                }
                P = null;
                const Bd = u.length && u[eb].url;
                0 != db.depth && Bd && (P = u[eb]);
                e = new Mc(db, P);
                if (e.i) {
                    u = O;
                    var R = e.i.url || "";
                    u.h.push(4);
                    u.i[4] = Oc("top", R)
                }
                var fb = {
                    url: e.h.url || ""
                };
                if (e.h.url) {
                    var gb = e.h.url.match(dc),
                        ca = gb[1],
                        sc = gb[3],
                        tc = gb[4];
                    R = "";
                    ca && (R += ca + ":");
                    sc && (R += "//", R += sc, tc && (R += ":" + tc));
                    var uc = R
                } else uc = "";
                ca = O;
                fb = [fb, {
                    url: uc
                }];
                ca.h.push(5);
                ca.i[5] = fb;
                Wc(this.j, f, O, this.m, c)
            } catch (O) {
                try {
                    Wc(this.j, f, {
                        context: "ecmserr",
                        rctx: a,
                        msg: fd(O),
                        url: e && e.h.url
                    }, this.m, c)
                } catch (Ca) {}
            }
            return !0
        }
    };
    class kd {};
    let Vc, id;
    const Y = new ed;
    var ld = () => {
        window.google_measure_js_timing || (Y.h = !1, Y.i != Y.j.google_js_reporting_queue && (cd() && Array.prototype.forEach.call(Y.i, dd, void 0), Y.i.length = 0))
    };
    (a => {
        Vc = null != a ? a : new Xc;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        Uc();
        id = new jd(Y);
        id.i = b => {
            const c = Cc;
            0 !== c && (b.jc = String(c), b.shv = Dc(c))
        };
        id.m = !0;
        "complete" == window.document.readyState ? ld() : Y.h && U(window, "load", () => {
            ld()
        })
    })();
    var Z = (a, b) => hd(a, b),
        md = a => {
            var b = kd;
            var c = "T";
            b.T && b.hasOwnProperty(c) || (c = new b, b.T = c);
            b = [];
            !a.eid && b.length && (a.eid = b.toString());
            Wc(Vc, "gdn-asoch", a, !0)
        };

    function nd(a = window) {
        return a
    };
    var od = (a, b) => {
            b = M(a, 2) || b;
            if (!b) return "";
            if (N(a, 13)) return b;
            const c = /[?&]adurl=([^&]+)/.exec(b);
            if (!c) return b;
            const d = [b.slice(0, c.index + 1)];
            J(a, 4).forEach((f, e) => {
                d.push(encodeURIComponent(e) + "=" + encodeURIComponent(f) + "&")
            });
            d.push(b.slice(c.index + 1));
            return d.join("")
        },
        pd = (a, b = []) => {
            b = 0 < b.length ? b : Jc("data-asoch-targets");
            a = J(a, 1, Ub);
            const c = [];
            for (let h = 0; h < b.length; ++h) {
                var d = b[h].getAttribute("data-asoch-targets"),
                    f = d.split(","),
                    e = !0;
                for (let l of f)
                    if (!a.has(l)) {
                        e = !1;
                        break
                    }
                if (e) {
                    e = a.get(f[0]);
                    for (d = 1; d < f.length; ++d) {
                        var g = a.get(f[d]);
                        e = Lb(e, !1).toJSON();
                        g = g.toJSON();
                        const l = Math.max(e.length, g.length);
                        for (let k = 0; k < l; ++k) null == e[k] && (e[k] = g[k]);
                        e = new Ub(e)
                    }
                    f = J(e, 4);
                    null != F(e, 5) && f.set("nb", Q(e, 5, 0).toString());
                    c.push({
                        element: b[h],
                        data: e
                    })
                } else md({
                    type: 1,
                    data: d
                })
            }
            return c
        },
        sd = (a, b, c, d) => {
            c = od(b, c);
            if (0 !== c.length) {
                if ("2" === lc(c, "ase") && 1087 !== d) {
                    let e;
                    if (609 === d) e = 4;
                    else {
                        var f;
                        e = (null == (f = V.featurePolicy) ? 0 : f.allowedFeatures().includes("attribution-reporting")) ? 6 : 5
                    }
                    f = "";
                    qd(c) ? f = rd(da(new fa({
                            url: c
                        })),
                        "nis", e.toString()) : c = rd(c, "nis", e.toString());
                    a.setAttribute("attributionsrc", f)
                }
                oa(a, Hc(c, Ic(d)));
                a.target || (a.target = null != F(b, 11) ? M(b, 11) : "_top")
            }
        },
        td = a => {
            for (const b of a)
                if (a = b.data, "A" == b.element.tagName && !N(a, 1)) {
                    const c = b.element;
                    sd(c, a, c.href, 609)
                }
        },
        qd = a => !/[?&]dsh=1(&|$)/.test(a) && /[?&]ae=1(&|$)/.test(a),
        ud = a => {
            const b = p.oneAfmaInstance;
            if (b)
                for (const c of a)
                    if ((a = c.data) && void 0 !== K(a, Sb, 8)) {
                        const d = M(L(a, Sb, 8), 4);
                        if (d) {
                            b.fetchAppStoreOverlay(d, void 0, M(L(a, Sb, 8), 6));
                            break
                        }
                    }
        },
        vd = (a, b =
            500) => {
            const c = [],
                d = [];
            for (var f of a)(a = f.data) && void 0 !== K(a, T, 12) && (d.push(L(a, T, 12)), c.push(L(a, T, 12).B()));
            f = (e, g) => {
                if (g)
                    for (const h of d) g[h.B()] && h.W(!0)
            };
            a = p.oneAfmaInstance;
            for (const e of c) {
                let g;
                null == (g = a) || g.canOpenAndroidApp(e, f, () => {}, b)
            }
        },
        xd = (a, b, c, d, f) => {
            if (!b || void 0 === K(b, Sb, 8)) return !1;
            const e = L(b, Sb, 8);
            let g = M(e, 2);
            J(b, 10).forEach((k, n) => {
                var m = g;
                n = encodeURIComponent(n);
                const t = encodeURIComponent(k);
                k = new RegExp("[?&]" + n + "=([^&]+)");
                const u = k.exec(m);
                console.log(u);
                n = n + "=" + t;
                g = u ? m.replace(k, u[0].charAt(0) + n) : m.replace("?", "?" + n + "&")
            });
            wd(b) && N(b, 15) && !/[?&]label=/.test(c) && (c = rd(c, "label", "deep_link_fallback"));
            const h = k => d.openStoreOverlay(k, void 0, M(e, 6)),
                l = k => Bc(W, k);
            return d.redirectForStoreU2({
                clickUrl: c,
                trackingUrl: M(e, 3),
                finalUrl: g,
                pingFunc: f ? l : d.click,
                openFunc: (null == a ? 0 : N(a, 1)) ? h : d.openIntentOrNativeApp,
                isExternalClickUrl: N(b, 13)
            })
        },
        zd = (a, b, c, d, f, e, g, h = !1) => {
            f = N(f, 15);
            const l = qd(e);
            !a || !b || f && l || (e = h ? yd(e) : yd(e, g.click));
            e && e.startsWith("intent:") ? g.openIntentOrNativeApp(e) :
                c ? d ? g.openBrowser(e) : g.openChromeCustomTab(e) : g.openSystemBrowser(e, {
                    useFirstPackage: !0,
                    useRunningProcess: !0
                })
        },
        yd = (a, b = null) => {
            if (null !== b) {
                const c = new fa({
                    url: a
                });
                if (c.i && c.j || c.o) return b(da(c)), ea(c, 1)
            } else return {
                X: b
            } = {}, b = new fa({
                url: a,
                X: b
            }), b.i && b.j || b.o ? navigator.sendBeacon ? navigator.sendBeacon(da(b), "") ? ea(b, 1) : ea(b, 2) : ea(b, 0) : a;
            return a
        },
        Ad = (a, b = !0, c = !1) => {
            let d = !1;
            c && W.navigator && W.navigator.sendBeacon && (d = W.navigator.sendBeacon(a));
            d || (b && W.fetch ? W.fetch(a, {
                method: "GET",
                keepalive: !0,
                mode: "no-cors"
            }).then(f => {
                f.ok || zc(W, a)
            }) : zc(W, a))
        },
        rd = (a, b, c) => {
            b = encodeURIComponent(String(b));
            c = encodeURIComponent(String(c));
            return a.replace("?", "?" + b + "=" + c + "&")
        },
        wd = a => {
            for (const b of yb(a))
                if (3 === Q(b, 1, 0) && M(b, 2)) return !0;
            return !1
        };
    var Cd = (a, b) => a && (a = a.match(b + "=([^&]+)")) && 2 == a.length ? a[1] : "";
    var Dd = class extends S {
        constructor() {
            super()
        }
    };

    function Ed(a, b) {
        return G(a, 2, b)
    }

    function Fd(a, b) {
        return G(a, 3, b)
    }

    function Gd(a, b) {
        return G(a, 4, b)
    }

    function Hd(a, b) {
        return G(a, 5, b)
    }

    function Id(a, b) {
        return G(a, 9, b)
    }

    function Jd(a, b) {
        return Ab(a, 10, b)
    }

    function Kd(a, b) {
        return G(a, 11, b)
    }

    function Ld(a, b) {
        return G(a, 1, b)
    }

    function Md(a, b) {
        return G(a, 7, b)
    }
    var Od = class extends S {
            constructor() {
                super(void 0, -1, Nd)
            }
        },
        Nd = [10, 6];
    const Pd = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Qd(a) {
        let b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function Rd(a) {
        let b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function Sd() {
        var a = window;
        if (!Rd(a)) return null;
        const b = Qd(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(Pd).then(c => {
            null != b.uach || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function Td(a) {
        let b;
        return Kd(Jd(Hd(Ed(Ld(Gd(Md(Id(Fd(new Od, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(c => {
            var d = new Dd;
            d = G(d, 1, c.brand);
            return G(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function Ud() {
        let a, b;
        return null != (b = null == (a = Sd()) ? void 0 : a.then(c => Td(c))) ? b : null
    };

    function Vd(a) {
        for (const b of a)
            if ("A" == b.element.tagName) {
                a = b.element;
                const c = b.data;
                null == F(c, 2) && G(c, 2, a.href)
            }
    }

    function Wd(a, b) {
        return ma(a, c => c.element === b)
    }

    function Xd(a) {
        wc(Z(556, () => {
            new Yd(a || {})
        }))
    }

    function Zd(a, b, c, d) {
        if (!N(d, 13)) {
            var f = c.href;
            var e = /[?&]adurl=([^&]+)/.exec(f);
            f = e ? [f.slice(0, e.index), f.slice(e.index)] : [f, ""];
            for (oa(c, Hc(f[0], Ic(557))); !c.id;)
                if (e = "asoch-id-" + cc(), !V.getElementById(e)) {
                    c.id = e;
                    break
                }
            e = c.id;
            "function" === typeof window.xy && window.xy(b, c, V.body);
            "function" === typeof window.mb && window.mb(c);
            "function" === typeof window.bgz && window.bgz(e);
            "function" === typeof window.ja && window.ja(e, d ? Q(d, 5, 0) : 0);
            "function" === typeof window.vti && window.vti(e);
            a.o && "function" === typeof window.ss &&
                (a.O ? window.ss(e, 1, a.o) : window.ss(a.o, 1));
            0 < f.length && (a = 0 < a.D.length && (null == d || null == F(d, 19)) ? c.href + "&uach=" + encodeURIComponent(a.D) + f[1] : c.href + f[1], oa(c, Hc(a, Ic(557))))
        }
    }
    async function $d(a, b, c, d) {
        let f = "";
        var e = p.oneAfmaInstance;
        if (e && (b.preventDefault(), f = await e.appendClickSignalsAsync(c.href) || "", a.L && (e = await e.getNativeClickMeta()))) {
            if (e.customClickGestureEligible) return;
            f = rd(f, "nas", e.encodedNas)
        }
        ae(a, b, c, d, f)
    }

    function ae(a, b, c, d, f) {
        const e = N(a.i, 2),
            g = e && 300 < Date.now() - a.N,
            h = p.oneAfmaInstance;
        h ? (oc(b), (() => {
            let l = h.logScionEventAndAddParam(f);
            if (!a.s && d && void 0 !== K(d, T, 12)) {
                var k = L(d, T, 12).B();
                if (0 < yb(d).length)
                    for (const n of yb(d));
                N(L(d, T, 12), 2) ? (h.click(l), h.openAndroidApp(k), k = !0) : k = !1
            } else k = !1;
            k || xd(a.C, d, l, h, a.aa) || zd(e, g, a.ca, a.s, d, l, h, a.ba)
        })()) : (N(a.i, 21) && c.href && "_blank" !== c.target && (a.m = lc(c.href, "ai") || "") && (a.j = "clicked"), b = window, a.Z && b.pawsig && "function" === typeof b.pawsig.clk ? b.pawsig.clk(c) :
            g && (b = "2" === lc(c.href, "ase") && qd(c.href) ? yd(c.href, () => {}) : a.da ? yd(c.href, l => {
                W.fetch(l, {
                    method: "GET",
                    keepalive: !0,
                    mode: "no-cors"
                })
            }) : yd(c.href), b !== c.href && oa(c, Hc(b, Ic(599)))));
        g && (a.N = Date.now());
        Fc(a.M)
    }
    var Yd = class {
        constructor(a) {
            this.s = Ha || Fa || Ia || Ga;
            var b = Jc("data-asoch-meta");
            if (1 !== b.length) md({
                type: 2,
                data: b.length
            });
            else {
                this.M = 70;
                this.i = new Wb(JSON.parse(b[0].getAttribute("data-asoch-meta")) || []);
                this.K = a["extra-meta"] ? new Wb(JSON.parse(a["extra-meta"])) : null;
                this.L = "true" === a["is-fsn"];
                this.C = a["ios-store-overlay-config"] ? new Xb(JSON.parse(a["ios-store-overlay-config"])) : null;
                this.ca = "true" === a["use-cct-over-browser"];
                this.aa = "true" === a["send-ac-click-ping-by-js"];
                this.P = "true" === a["correct-redirect-url-for-och-15-click"];
                this.ba = "true" === a["send-click-ping-by-js-in-och"];
                this.Z = "true" === a["enable-paw"];
                this.da = "true" === a["async-using-fetch"];
                this.j = this.m = "";
                this.G = this.F = -1;
                this.D = "";
                b = Ud();
                null != b && b.then(d => {
                    d = Mb(d);
                    for (var f = [], e = 0, g = 0; g < d.length; g++) {
                        var h = d.charCodeAt(g);
                        255 < h && (f[e++] = h & 255, h >>= 8);
                        f[e++] = h
                    }
                    this.D = La(f, 3)
                });
                this.h = pd(this.i);
                this.ea = Number(a["deeplink-and-android-app-validation-timeout"]) || 500;
                this.N = -Infinity;
                this.o = M(this.i, 5) || "";
                this.O = N(this.i, 11);
                this.K && (this.O = N(this.K, 11));
                this.I = this.H =
                    null;
                N(this.i, 3) || (td(this.h), G(this.i, 3, !0));
                Vd(this.h);
                a = p.oneAfmaInstance;
                !this.s && a && vd(this.h, this.ea);
                var c;
                if (a && (null == (c = this.C) ? 0 : N(c, 2))) switch (c = () => {
                    const d = Bb(this.C, 4);
                    0 < d ? p.setTimeout(() => {
                        ud(this.h)
                    }, d) : ud(this.h)
                }, Q(this.C, 3, 0)) {
                    case 1:
                        a.runOnOnShowEvent(c);
                        break;
                    case 2:
                        xc(c);
                        break;
                    default:
                        ud(this.h)
                }
                U(V, "click", Z(557, d => {
                    a: if (!d.defaultPrevented || this.H === d) {
                        for (var f, e, g = d.target;
                            (!f || !e) && g;) {
                            e || "A" != g.tagName || (e = g);
                            var h = g.hasAttribute("data-asoch-targets"),
                                l = g.hasAttribute("data-asoch-fixed-value");
                            if (!f)
                                if (l) f = new Ub(JSON.parse(g.getAttribute("data-asoch-fixed-value")) || []);
                                else if ("A" == g.tagName || h)
                                if (h = h && "true" === g.getAttribute("data-asoch-is-dynamic") ? pd(this.i, [g]) : this.h, h = Wd(h, g)) f = h.data;
                            g = g.parentElement
                        }
                        if (g = f && !N(f, 1)) {
                            if (d.defaultPrevented) {
                                var k = e,
                                    n = f;
                                if (this.H === d && this.I) {
                                    e = new Rb(this.I);
                                    f = M(n, 9);
                                    var m = "";
                                    switch (Q(e, 4, 1)) {
                                        case 2:
                                            if (Bb(e, 2)) m = "blocked_fast_click";
                                            else if (M(e, 1) || M(e, 7)) m = "blocked_border_click";
                                            break;
                                        case 3:
                                            m = V, m = m.getElementById ? m.getElementById("common_15click_anchor") :
                                                null, "function" === typeof window.copfcChm && m && (n = Lb(n, !1), G(n, 5, 12), J(n, 4).set("nb", (12).toString()), (g = Wd(this.h, m)) ? g.data = n : this.h.push({
                                                    element: m,
                                                    data: n
                                                }), !this.P && k && (Zd(this, d, k, n), G(n, 2, k.href)), window.copfcChm(d, od(n, m.href), null, void 0 !== K(e, Qb, 10) ? Mb(L(e, Qb, 10)) : null), this.P && Zd(this, d, m, n)), m = "onepointfiveclick_first_click"
                                    }
                                    f && m && Ad(f + "&label=" + m, !1);
                                    Fc(this.M)
                                }
                                break a
                            }
                            h = f;
                            for (m of wb(h, 6)) Ad(m)
                        }
                        if (e && g) {
                            f = g ? f : null;
                            (m = Wd(this.h, e)) ? m = m.data: (m = new Ub, G(m, 2, e.href), G(m, 11, e.target || "_top"),
                                this.h.push({
                                    element: e,
                                    data: m
                                }));
                            sd(e, f || m, M(m, 2), 557);
                            Zd(this, d, e, f);
                            for (n of wb(this.i, 17)) m = n, g = V.body, h = {}, "function" === typeof window.CustomEvent ? l = new CustomEvent(m, h) : (l = document.createEvent("CustomEvent"), l.initCustomEvent(m, !!h.bubbles, !!h.cancelable, h.detail)), g.dispatchEvent(l);
                            if (null == f ? 0 : null != F(f, 19)) {
                                n = new Pb;
                                G(n, 1, Q(f, 5, 0));
                                m = Cd(e.href, "nx");
                                "" != m && G(n, 2, +m);
                                m = Cd(e.href, "ny");
                                "" != m && G(n, 3, +m);
                                m = Cd(e.href, "bg");
                                "" != m && G(n, 4, m);
                                m = Cd(e.href, "nm");
                                "" != m && G(n, 5, +m);
                                m = Cd(e.href, "mb");
                                "" !=
                                m && G(n, 6, +m);
                                m = M(f, 19);
                                g = null != F(f, 20) ? Bb(f, 20) : null;
                                n = Mb(n);
                                h = this.D;
                                l = nd(p);
                                const t = new Yb;
                                G(t, 1, m);
                                null !== g && G(t, 2, g);
                                null !== h && G(t, 3, h);
                                G(t, 4, n);
                                null == l || null == (k = l.fence) || k.reportEvent({
                                    eventType: "click",
                                    eventData: JSON.stringify(t),
                                    destination: ["buyer"]
                                })
                            }
                            N(this.i, 16) || this.L ? $d(this, d, e, f) : (k = "", (n = p.oneAfmaInstance) && (k = n.appendClickSignals(e.href)), ae(this, d, e, f, k))
                        }
                    }
                }), Zb);
                !a && N(this.i, 21) && (U(W, "pagehide", Z(1037, () => {
                    if (this.m && this.j && (this.j += "+pagehide", this.G = Date.now(), -1 !== this.F)) {
                        var d = {
                            id: "visibilityBeforePagehide",
                            payload: this.j,
                            delay: this.G - this.F,
                            isios: this.s,
                            clickstring: this.m
                        };
                        Ad(mc(jc(), d), !1, !0)
                    }
                })), U(V, "visibilitychange", Z(1067, () => {
                    if ("visible" === V.visibilityState) this.m = this.j = "", this.G = this.F = -1;
                    else if ("hidden" === V.visibilityState && this.j && this.m) {
                        this.F = Date.now();
                        var d = {
                            id: "visibilityhidden",
                            payload: this.j,
                            isios: this.s,
                            clickstring: this.m
                        };
                        Ad(mc(jc(), d), !1, !0)
                    }
                })));
                this.o && "function" === typeof window.ss && U(V.body, "mouseover", Z(626, () => {
                    window.ss(this.o, 0)
                }), $b);
                "function" ===
                typeof window.ivti && window.ivti(window);
                c = window;
                c.googqscp && "function" === typeof c.googqscp.registerCallback && c.googqscp.registerCallback((d, f) => {
                    this.H = d;
                    this.I = f
                })
            }
        }
    };
    var be = Z(555, a => Xd(a));
    Cc = 70;
    const ce = Ec(70, document.currentScript);
    if (null == ce) throw Error("JSC not found 70");
    const de = {},
        ee = ce.attributes;
    for (let a = ee.length - 1; 0 <= a; a--) {
        const b = ee[a].name;
        0 === b.indexOf("data-jcp-") && (de[b.substring(9)] = ee[a].value)
    }
    be(de);
}).call(this);