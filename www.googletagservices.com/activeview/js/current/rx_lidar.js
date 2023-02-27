(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var m, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ca = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("a");
        },
        q = ca(this),
        r = function(a, b) {
            if (b) a: {
                var c = q;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    r("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.sf = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.sf
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("b");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    });
    r("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = q[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return da(aa(this))
                }
            })
        }
        return a
    });
    r("Symbol.asyncIterator", function(a) {
        return a ? a : Symbol("Symbol.asyncIterator")
    });
    var da = function(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function() {
                return this
            };
            return a
        },
        u = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: aa(a)
            }
        },
        v = function(a) {
            if (!(a instanceof Array)) {
                a = u(a);
                for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                a = c
            }
            return a
        },
        ea = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        fa = "function" == typeof Object.assign ? Object.assign : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) ea(d,
                        e) && (a[e] = d[e])
            }
            return a
        };
    r("Object.assign", function(a) {
        return a || fa
    });
    var ha = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ia;
    if ("function" == typeof Object.setPrototypeOf) ia = Object.setPrototypeOf;
    else {
        var ja;
        a: {
            var ka = {
                    a: !0
                },
                ma = {};
            try {
                ma.__proto__ = ka;
                ja = ma.a;
                break a
            } catch (a) {}
            ja = !1
        }
        ia = ja ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError("c`" + a);
            return a
        } : null
    }
    var na = ia,
        x = function(a, b) {
            a.prototype = ha(b.prototype);
            a.prototype.constructor = a;
            if (na) na(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.nh = b.prototype
        },
        oa = function() {
            this.Lb = !1;
            this.Ra = null;
            this.ee = void 0;
            this.ba = 1;
            this.Aa = this.Ta = 0;
            this.vd = this.Y = null
        },
        qa = function(a) {
            if (a.Lb) throw new TypeError("e");
            a.Lb = !0
        };
    oa.prototype.Qb = function(a) {
        this.ee = a
    };
    oa.prototype.Xb = function(a) {
        this.Y = {
            ye: a,
            Qe: !0
        };
        this.ba = this.Ta || this.Aa
    };
    oa.prototype.return = function(a) {
        this.Y = {
            return: a
        };
        this.ba = this.Aa
    };
    oa.prototype.ab = function(a) {
        this.ba = a
    };
    var sa = function(a, b, c) {
            c = a.vd.splice(c || 0)[0];
            (c = a.Y = a.Y || c) ? c.Qe ? a.ba = a.Ta || a.Aa : void 0 != c.ab && a.Aa < c.ab ? (a.ba = c.ab, a.Y = null) : a.ba = a.Aa: a.ba = b
        },
        ta = function(a) {
            this.m = new oa;
            this.Ug = a
        };
    ta.prototype.Qb = function(a) {
        qa(this.m);
        if (this.m.Ra) return ua(this, this.m.Ra.next, a, this.m.Qb);
        this.m.Qb(a);
        return va(this)
    };
    var wa = function(a, b) {
        qa(a.m);
        var c = a.m.Ra;
        if (c) return ua(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.m.return);
        a.m.return(b);
        return va(a)
    };
    ta.prototype.Xb = function(a) {
        qa(this.m);
        if (this.m.Ra) return ua(this, this.m.Ra["throw"], a, this.m.Qb);
        this.m.Xb(a);
        return va(this)
    };
    var ua = function(a, b, c, d) {
            try {
                var e = b.call(a.m.Ra, c);
                if (!(e instanceof Object)) throw new TypeError("d`" + e);
                if (!e.done) return a.m.Lb = !1, e;
                var f = e.value
            } catch (g) {
                return a.m.Ra = null, a.m.Xb(g), va(a)
            }
            a.m.Ra = null;
            d.call(a.m, f);
            return va(a)
        },
        va = function(a) {
            for (; a.m.ba;) try {
                var b = a.Ug(a.m);
                if (b) return a.m.Lb = !1, {
                    value: b.value,
                    done: !1
                }
            } catch (c) {
                a.m.ee = void 0, a.m.Xb(c)
            }
            a.m.Lb = !1;
            if (a.m.Y) {
                b = a.m.Y;
                a.m.Y = null;
                if (b.Qe) throw b.ye;
                return {
                    value: b.return,
                    done: !0
                }
            }
            return {
                value: void 0,
                done: !0
            }
        },
        xa = function(a) {
            this.next =
                function(b) {
                    return a.Qb(b)
                };
            this.throw = function(b) {
                return a.Xb(b)
            };
            this.return = function(b) {
                return wa(a, b)
            };
            this[Symbol.iterator] = function() {
                return this
            }
        },
        ya = function(a) {
            function b(d) {
                return a.next(d)
            }

            function c(d) {
                return a.throw(d)
            }
            return new Promise(function(d, e) {
                function f(g) {
                    g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
                }
                f(a.next())
            })
        },
        za = function(a) {
            this[Symbol.asyncIterator] = function() {
                return this
            };
            this[Symbol.iterator] = function() {
                return a
            };
            this.next = function(b) {
                return Promise.resolve(a.next(b))
            };
            void 0 !== a["throw"] && (this["throw"] = function(b) {
                return Promise.resolve(a["throw"](b))
            });
            void 0 !== a["return"] && (this["return"] = function(b) {
                return Promise.resolve(a["return"](b))
            })
        },
        D = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
            return b
        };
    r("Promise", function(a) {
        function b() {
            this.Ja = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.ne = function(g) {
            if (null == this.Ja) {
                this.Ja = [];
                var h = this;
                this.oe(function() {
                    h.Wf()
                })
            }
            this.Ja.push(g)
        };
        var d = q.setTimeout;
        b.prototype.oe = function(g) {
            d(g, 0)
        };
        b.prototype.Wf = function() {
            for (; this.Ja && this.Ja.length;) {
                var g = this.Ja;
                this.Ja = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.Ef(l)
                    }
                }
            }
            this.Ja = null
        };
        b.prototype.Ef = function(g) {
            this.oe(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.wb = 0;
            this.Ub = void 0;
            this.pb = [];
            this.Te = !1;
            var h = this.md();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.md = function() {
            function g(l) {
                return function(p) {
                    k || (k = !0, l.call(h, p))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.bh),
                reject: g(this.Qd)
            }
        };
        e.prototype.bh = function(g) {
            if (g === this) this.Qd(new TypeError("f"));
            else if (g instanceof e) this.gh(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.ah(g) : this.Ae(g)
            }
        };
        e.prototype.ah = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.Qd(k);
                return
            }
            "function" == typeof h ? this.hh(h, g) : this.Ae(g)
        };
        e.prototype.Qd = function(g) {
            this.hf(2, g)
        };
        e.prototype.Ae = function(g) {
            this.hf(1, g)
        };
        e.prototype.hf = function(g, h) {
            if (0 != this.wb) throw Error("g`" + g + "`" + h + "`" + this.wb);
            this.wb = g;
            this.Ub = h;
            2 === this.wb && this.eh();
            this.Xf()
        };
        e.prototype.eh = function() {
            var g = this;
            d(function() {
                if (g.Lg()) {
                    var h = q.console;
                    "undefined" !== typeof h && h.error(g.Ub)
                }
            }, 1)
        };
        e.prototype.Lg = function() {
            if (this.Te) return !1;
            var g = q.CustomEvent,
                h = q.Event,
                k = q.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = q.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.Ub;
            return k(g)
        };
        e.prototype.Xf = function() {
            if (null != this.pb) {
                for (var g = 0; g < this.pb.length; ++g) f.ne(this.pb[g]);
                this.pb = null
            }
        };
        var f = new b;
        e.prototype.gh = function(g) {
            var h =
                this.md();
            g.lc(h.resolve, h.reject)
        };
        e.prototype.hh = function(g, h) {
            var k = this.md();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        e.prototype.then = function(g, h) {
            function k(n, w) {
                return "function" == typeof n ? function(A) {
                    try {
                        l(n(A))
                    } catch (y) {
                        p(y)
                    }
                } : w
            }
            var l, p, t = new e(function(n, w) {
                l = n;
                p = w
            });
            this.lc(k(g, l), k(h, p));
            return t
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.lc = function(g, h) {
            function k() {
                switch (l.wb) {
                    case 1:
                        g(l.Ub);
                        break;
                    case 2:
                        h(l.Ub);
                        break;
                    default:
                        throw Error("h`" +
                            l.wb);
                }
            }
            var l = this;
            null == this.pb ? f.ne(k) : this.pb.push(k);
            this.Te = !0
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, k) {
                for (var l = u(g), p = l.next(); !p.done; p = l.next()) c(p.value).lc(h, k)
            })
        };
        e.all = function(g) {
            var h = u(g),
                k = h.next();
            return k.done ? c([]) : new e(function(l, p) {
                function t(A) {
                    return function(y) {
                        n[A] = y;
                        w--;
                        0 == w && l(n)
                    }
                }
                var n = [],
                    w = 0;
                do n.push(void 0), w++, c(k.value).lc(t(n.length - 1), p), k = h.next(); while (!k.done)
            })
        };
        return e
    });
    r("WeakMap", function(a) {
        function b() {}

        function c(k) {
            var l = typeof k;
            return "object" === l && null !== k || "function" === l
        }

        function d(k) {
            if (!ea(k, f)) {
                var l = new b;
                ba(k, f, {
                    value: l
                })
            }
        }

        function e(k) {
            var l = Object[k];
            l && (Object[k] = function(p) {
                if (p instanceof b) return p;
                Object.isExtensible(p) && d(p);
                return l(p)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var k = Object.seal({}),
                        l = Object.seal({}),
                        p = new a([
                            [k, 2],
                            [l, 3]
                        ]);
                    if (2 != p.get(k) || 3 != p.get(l)) return !1;
                    p.delete(k);
                    p.set(l, 4);
                    return !p.has(k) && 4 == p.get(l)
                } catch (t) {
                    return !1
                }
            }()) return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var g = 0,
            h = function(k) {
                this.Jb = (g += Math.random() + 1).toString();
                if (k) {
                    k = u(k);
                    for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
                }
            };
        h.prototype.set = function(k, l) {
            if (!c(k)) throw Error("i");
            d(k);
            if (!ea(k, f)) throw Error("j`" + k);
            k[f][this.Jb] = l;
            return this
        };
        h.prototype.get = function(k) {
            return c(k) && ea(k, f) ? k[f][this.Jb] : void 0
        };
        h.prototype.has = function(k) {
            return c(k) && ea(k, f) && ea(k[f], this.Jb)
        };
        h.prototype.delete = function(k) {
            return c(k) &&
                ea(k, f) && ea(k[f], this.Jb) ? delete k[f][this.Jb] : !1
        };
        return h
    });
    r("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(u([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        p = l.next();
                    if (p.done || p.value[0] != h || "s" != p.value[1]) return !1;
                    p = l.next();
                    return p.done || 4 != p.value[0].x || "t" != p.value[1] || !l.next().done ? !1 : !0
                } catch (t) {
                    return !1
                }
            }()) return a;
        var b = new WeakMap,
            c = function(h) {
                this.Fb = {};
                this.Ca =
                    f();
                this.size = 0;
                if (h) {
                    h = u(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.Fb[l.id] = []);
            l.L ? l.L.value = k : (l.L = {
                next: this.Ca,
                Fa: this.Ca.Fa,
                head: this.Ca,
                key: h,
                value: k
            }, l.list.push(l.L), this.Ca.Fa.next = l.L, this.Ca.Fa = l.L, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.L && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.Fb[h.id], h.L.Fa.next = h.L.next, h.L.next.Fa = h.L.Fa,
                h.L.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.Fb = {};
            this.Ca = this.Ca.Fa = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).L
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).L) && h.value
        };
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        c.prototype.forEach = function(h, k) {
            for (var l = this.entries(),
                    p; !(p = l.next()).done;) p = p.value, h.call(k, p[1], p[0], this)
        };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(h, k) {
                var l = k && typeof k;
                "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var p = h.Fb[l];
                if (p && ea(h.Fb, l))
                    for (h = 0; h < p.length; h++) {
                        var t = p[h];
                        if (k !== k && t.key !== t.key || k === t.key) return {
                            id: l,
                            list: p,
                            index: h,
                            L: t
                        }
                    }
                return {
                    id: l,
                    list: p,
                    index: -1,
                    L: void 0
                }
            },
            e = function(h, k) {
                var l = h.Ca;
                return da(function() {
                    if (l) {
                        for (; l.head != h.Ca;) l = l.Fa;
                        for (; l.next != l.head;) return l =
                            l.next, {
                                done: !1,
                                value: k(l)
                            };
                        l = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.Fa = h.next = h.head = h
            },
            g = 0;
        return c
    });
    r("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    });
    r("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return Number.isFinite(b) ? b === Math.floor(b) : !1
        }
    });
    r("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    });
    var Aa = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    };
    r("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Aa(this, function(b, c) {
                return [b, c]
            })
        }
    });
    r("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    });
    r("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Aa(this, function(b) {
                return b
            })
        }
    });
    r("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Aa(this, function(b, c) {
                return c
            })
        }
    });
    r("Array.prototype.fill", function(a) {
        return a ? a : function(b, c, d) {
            var e = this.length || 0;
            0 > c && (c = Math.max(0, e + c));
            if (null == d || d > e) d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this
        }
    });
    var Ba = function(a) {
        return a ? a : Array.prototype.fill
    };
    r("Int8Array.prototype.fill", Ba);
    r("Uint8Array.prototype.fill", Ba);
    r("Uint8ClampedArray.prototype.fill", Ba);
    r("Int16Array.prototype.fill", Ba);
    r("Uint16Array.prototype.fill", Ba);
    r("Int32Array.prototype.fill", Ba);
    r("Uint32Array.prototype.fill", Ba);
    r("Float32Array.prototype.fill", Ba);
    r("Float64Array.prototype.fill", Ba);
    r("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(u([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.ta = new Map;
            if (c) {
                c =
                    u(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.ta.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.ta.set(c, c);
            this.size = this.ta.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.ta.delete(c);
            this.size = this.ta.size;
            return c
        };
        b.prototype.clear = function() {
            this.ta.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.ta.has(c)
        };
        b.prototype.entries = function() {
            return this.ta.entries()
        };
        b.prototype.values = function() {
            return this.ta.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.ta.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    });
    r("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ea(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    r("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ea(b, d) && c.push(b[d]);
            return c
        }
    });
    r("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    r("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    r("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            if (null == this) throw new TypeError("k`includes");
            if (b instanceof RegExp) throw new TypeError("l`includes");
            return -1 !== (this + "").indexOf(b, c || 0)
        }
    });
    r("Array.prototype.flat", function(a) {
        return a ? a : function(b) {
            b = void 0 === b ? 1 : b;
            var c = [];
            Array.prototype.forEach.call(this, function(d) {
                Array.isArray(d) && 0 < b ? (d = Array.prototype.flat.call(d, b - 1), c.push.apply(c, d)) : c.push(d)
            });
            return c
        }
    });
    var Ca = this || self,
        Da = function(a) {
            var b = typeof a;
            return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
        },
        Ea = function(a) {
            var b = Da(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        Ga = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        Ha = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.nh = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.Nh = function(d, e, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
                return b.prototype[e].apply(d,
                    g)
            }
        };
    var Ia = function(a, b) {
        b = Error.call(this, b ? a + ": " + b : String(a));
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.code = a;
        this.__proto__ = Ia.prototype;
        this.name = String(a)
    };
    x(Ia, Error);
    var Ja = function(a) {
        Ia.call(this, 1E3, 'sfr:"' + a + '"');
        this.Dg = a;
        this.__proto__ = Ja.prototype
    };
    x(Ja, Ia);
    var Ka = function() {
        Ia.call(this, 1003);
        this.__proto__ = Ka.prototype
    };
    x(Ka, Ia);
    var La = function() {
        Ia.call(this, 1009);
        this.__proto__ = La.prototype
    };
    x(La, Ia);
    var Na = function() {
        Ia.call(this, 1007);
        this.__proto__ = Ka.prototype
    };
    x(Na, Ia);
    var Oa = function() {
        Ia.call(this, 1008);
        this.__proto__ = Ka.prototype
    };
    x(Oa, Ia);
    var Pa = function() {
        Ia.call(this, 1001);
        this.__proto__ = Pa.prototype
    };
    x(Pa, Ia);
    var Qa = function(a) {
        Ia.call(this, 1004, String(a));
        this.og = a;
        this.__proto__ = Qa.prototype
    };
    x(Qa, Ia);
    var Sa = function(a) {
        Ia.call(this, 1010, a);
        this.__proto__ = Ra.prototype
    };
    x(Sa, Ia);
    var Ra = function(a) {
        Ia.call(this, 1005, a);
        this.__proto__ = Ra.prototype
    };
    x(Ra, Ia);
    var Ta = Symbol("time-origin"),
        Va = Symbol("date"),
        Wa = function(a, b) {
            this.value = a;
            this.timeline = b
        },
        Xa = function(a, b) {
            if (b.timeline !== a.timeline) throw new Na;
            return a.value - b.value
        };
    Wa.prototype.equals = function(a) {
        return 0 === Xa(this, a)
    };
    Wa.prototype.maximum = function(a) {
        if (a.timeline !== this.timeline) throw new Na;
        return this.value >= a.value ? this : a
    };
    Wa.prototype.round = function() {
        return new Wa(Math.round(this.value), this.timeline)
    };
    Wa.prototype.toString = function() {
        return String(this.value)
    };

    function Ya(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ya);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    Ha(Ya, Error);
    Ya.prototype.name = "CustomError";
    var Za;

    function $a(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Ya.call(this, c + a[d])
    }
    Ha($a, Ya);
    $a.prototype.name = "AssertionError";

    function ab(a, b, c, d) {
        var e = "Assertion failed";
        if (c) {
            e += ": " + c;
            var f = d
        } else a && (e += ": " + a, f = b);
        throw new $a("" + e, f || []);
    }
    var bb = function(a, b, c) {
            a || ab("", null, b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        cb = function(a, b, c) {
            null == a && ab("Expected to exist: %s.", [a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        db = function(a, b) {
            throw new $a("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        },
        eb = function(a, b, c) {
            "number" !== typeof a && ab("Expected number but got %s: %s.", [Da(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        fb = function(a, b, c) {
            "string" !== typeof a && ab("Expected string but got %s: %s.", [Da(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        gb = function(a, b, c) {
            "function" !== typeof a && ab("Expected function but got %s: %s.", [Da(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        hb = function(a, b, c) {
            Ga(a) || ab("Expected object but got %s: %s.", [Da(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        ib = function(a, b, c) {
            Array.isArray(a) || ab("Expected array but got %s: %s.", [Da(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        kb = function(a, b, c, d) {
            a instanceof b || ab("Expected instanceof %s but got %s.", [jb(b), jb(a)], c, Array.prototype.slice.call(arguments, 3));
            return a
        };

    function jb(a) {
        return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a
    };
    var lb = function(a, b) {
        return -1 != a.toLowerCase().indexOf(b.toLowerCase())
    };

    function ob() {
        var a = Ca.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function E(a) {
        return -1 != ob().indexOf(a)
    };

    function pb() {
        return E("Safari") && !(qb() || E("Coast") || E("Opera") || E("Edge") || E("Edg/") || E("OPR") || E("Firefox") || E("FxiOS") || E("Silk") || E("Android"))
    }

    function qb() {
        return (E("Chrome") || E("CriOS")) && !E("Edge") || E("Silk")
    }

    function rb() {
        return E("Android") && !(qb() || E("Firefox") || E("FxiOS") || E("Opera") || E("Silk"))
    };
    var sb = Array.prototype.forEach ? function(a, b) {
            bb(null != a.length);
            Array.prototype.forEach.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
        },
        tb = Array.prototype.map ? function(a, b) {
            bb(null != a.length);
            return Array.prototype.map.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        },
        ub = Array.prototype.some ? function(a, b) {
            bb(null !=
                a.length);
            return Array.prototype.some.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        };

    function vb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function wb(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function xb(a, b, c) {
        if (!Ea(a) || !Ea(b) || a.length != b.length) return !1;
        var d = a.length;
        c = c || yb;
        for (var e = 0; e < d; e++)
            if (!c(a[e], b[e])) return !1;
        return !0
    }

    function yb(a, b) {
        return a === b
    }

    function zb(a, b) {
        return vb.apply([], tb(a, b))
    };
    var Ab = function(a) {
        Ab[" "](a);
        return a
    };
    Ab[" "] = function() {};
    var Bb = function(a, b) {
        try {
            return Ab(a[b]), !0
        } catch (c) {}
        return !1
    };
    var Cb = E("Opera"),
        Db = E("Trident") || E("MSIE"),
        Eb = E("Edge"),
        Gb = E("Gecko") && !(lb(ob(), "WebKit") && !E("Edge")) && !(E("Trident") || E("MSIE")) && !E("Edge"),
        Hb = lb(ob(), "WebKit") && !E("Edge"),
        Ib = function() {
            var a = Ca.document;
            return a ? a.documentMode : void 0
        },
        Jb;
    a: {
        var Kb = "",
            Lb = function() {
                var a = ob();
                if (Gb) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Eb) return /Edge\/([\d\.]+)/.exec(a);
                if (Db) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Hb) return /WebKit\/(\S+)/.exec(a);
                if (Cb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Lb && (Kb = Lb ? Lb[1] : "");
        if (Db) {
            var Mb = Ib();
            if (null != Mb && Mb > parseFloat(Kb)) {
                Jb = String(Mb);
                break a
            }
        }
        Jb = Kb
    }
    var Nb = Jb,
        Ob;
    if (Ca.document && Db) {
        var Pb = Ib();
        Ob = Pb ? Pb : parseInt(Nb, 10) || void 0
    } else Ob = void 0;
    var Qb = Ob;
    rb();
    qb();
    pb();
    var Rb = {},
        Sb = null,
        Tb = Gb || Hb || "function" == typeof Ca.btoa,
        Ub = function(a) {
            var b;
            bb(Ea(a), "encodeByteArray takes an array as a parameter");
            void 0 === b && (b = 0);
            if (!Sb) {
                Sb = {};
                for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                    var f = c.concat(d[e].split(""));
                    Rb[e] = f;
                    for (var g = 0; g < f.length; g++) {
                        var h = f[g],
                            k = Sb[h];
                        void 0 === k ? Sb[h] = g : bb(k === g)
                    }
                }
            }
            b = Rb[b];
            c = Array(Math.floor(a.length / 3));
            d = b[64] || "";
            for (e = f = 0; f < a.length - 2; f += 3) {
                k = a[f];
                var l = a[f + 1];
                h = a[f + 2];
                g = b[k >> 2];
                k = b[(k & 3) << 4 | l >> 4];
                l = b[(l & 15) << 2 | h >> 6];
                h = b[h & 63];
                c[e++] = "" + g + k + l + h
            }
            g = 0;
            h = d;
            switch (a.length - f) {
                case 2:
                    g = a[f + 1], h = b[(g & 15) << 2] || d;
                case 1:
                    a = a[f], c[e] = "" + b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
            }
            return c.join("")
        };
    var Vb = "undefined" !== typeof Uint8Array,
        Wb = !Db && "function" === typeof Ca.btoa;
    var Xb = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol("INTERNAL_ARRAY_STATE") : void 0;

    function Yb(a, b) {
        bb((b & 255) == b);
        ib(a, "state is only maintained on arrays.");
        if (Xb) return a[Xb] |= b;
        if (void 0 !== a.Xa) return a.Xa |= b;
        Object.defineProperties(a, {
            Xa: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    }
    var Zb = Object.getOwnPropertyDescriptor(Array.prototype, "wg");
    Object.defineProperties(Array.prototype, {
        wg: {
            get: function() {
                function a(e, f) {
                    e & b && c.push(f)
                }
                var b = $b(this),
                    c = [];
                a(1, "IS_REPEATED_FIELD");
                a(2, "IS_IMMUTABLE_ARRAY");
                a(4, "IS_API_FORMATTED");
                a(8, "ONLY_MUTABLE_VALUES");
                a(16, "MUTABLE_REFERENCES_ARE_OWNED");
                a(32, "CONSTRUCTED");
                a(64, "TRANSFERRED");
                a(128, "IS_FIXED_GROUP");
                var d = c.join(",");
                return Zb ? Zb.get.call(this) + "|" + d : d
            },
            configurable: !0,
            enumerable: !1
        }
    });

    function $b(a) {
        ib(a, "state is only maintained on arrays.");
        a = Xb ? a[Xb] : a.Xa;
        return null == a ? 0 : a
    }

    function ac(a, b) {
        ib(a, "state is only maintained on arrays.");
        bb((b & 255) == b);
        Xb ? a[Xb] = b : void 0 !== a.Xa ? a.Xa = b : Object.defineProperties(a, {
            Xa: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function bc(a) {
        return !!($b(a) & 2)
    }

    function cc(a) {
        Yb(a, 16);
        return a
    }

    function dc(a, b) {
        ac(b, (a | 0) & -51)
    }

    function ec(a, b) {
        ac(b, (a | 18) & -41)
    };
    var fc = {};

    function gc(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var hc, ic, jc = [];
    ac(jc, 23);
    ic = Object.freeze(jc);

    function kc() {}

    function lc(a) {
        var b = a.length;
        (b = b ? a[b - 1] : void 0) && gc(b) ? b.g = 1 : (b = {}, a.push((b.g = 1, b)))
    };

    function mc(a) {
        return a.displayName || a.name || "unknown type name"
    };
    var nc = function() {
        throw Error("q");
    };
    if ("undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance) {
        var oc = function() {
                throw Error("r");
            },
            pc = {};
        Object.defineProperties(nc, (pc[Symbol.hasInstance] = {
            value: oc,
            configurable: !1,
            writable: !1,
            enumerable: !1
        }, pc));
        bb(nc[Symbol.hasInstance] === oc, "defineProperties did not work: was it monkey-patched?")
    };
    var qc = function(a) {
            var b = a.sb + a.Sa;
            bb(0 <= b && Number.isInteger(b) && 4294967295 > b);
            return a.ja || (a.ja = a.B[b] = {})
        },
        rc = function(a, b, c) {
            return -1 === b ? null : b >= a.sb ? a.ja ? a.ja[b] : void 0 : c && a.ja && (c = a.ja[b], null != c) ? c : a.B[b + a.Sa]
        },
        tc = function(a, b, c, d) {
            if (bc(a.B)) throw Error("n");
            return sc(a, b, c, d)
        },
        sc = function(a, b, c, d) {
            a.Ne && (a.Ne = void 0);
            if (b >= a.sb || d) return qc(a)[b] = c, a;
            a.B[b + a.Sa] = c;
            (c = a.ja) && b in c && delete c[b];
            return a
        };

    function uc(a, b) {
        bb(a && bc(b.B) ? bc(a.B) : !0);
        return a
    }
    var vc = function(a, b, c) {
            var d = rc(a, 3, c);
            var e = !1;
            var f = null == d || "object" !== typeof d || (e = Array.isArray(d)) || d.Pb !== fc ? e ? new b(d) : void 0 : d;
            f !== d && null != f && (sc(a, 3, f, c), Yb(f.B, $b(a.B) & 18));
            return uc(f, a)
        },
        yc = function(a) {
            var b = wc;
            var c = void 0 === c ? !1 : c;
            b = vc(a, b, c);
            if (null == b) return b;
            if (!bc(a.B)) {
                var d = b;
                if (bc(d.B)) {
                    var e = xc(d, !1);
                    e.Ne = d;
                    d = e
                }
                d !== b && (b = d, sc(a, 3, b, c))
            }
            return uc(b, a)
        },
        zc = function(a, b, c, d, e) {
            if (bc(a.B)) throw Error("n");
            if (null == d) var f = ic;
            else f = [], Yb(f, 1);
            var g = f;
            if (null != d) {
                ib(d);
                f = !!d.length;
                for (var h = 0; h < d.length; h++) {
                    var k = d[h],
                        l = cb(b);
                    if (!(k instanceof l)) throw Error("p`" + mc(l) + "`" + (k && mc(k.constructor)));
                    f = f && !bc(k.B);
                    g[h] = k.B
                }
                b = g;
                f = (f ? 8 : 0) | 1;
                g = $b(b);
                (g & f) !== f && (Object.isFrozen(b) && (b = Array.prototype.slice.call(b)), ac(b, g | f));
                g = b;
                a.Ya || (a.Ya = {});
                a.Ya[c] = d
            } else a.Ya && (a.Ya[c] = void 0);
            return sc(a, c, g, e)
        },
        Bc = function(a, b) {
            return Ac(rc(a, b), 0)
        };

    function Ac(a, b) {
        return null == a ? b : a
    };
    var Cc;

    function Dc(a, b) {
        bb(!!($b(b) & 16));
        Cc = b;
        a = new a(b);
        Cc = void 0;
        return a
    };

    function Ec(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (0 !== ($b(a) & 128)) return a = Array.prototype.slice.call(a), lc(a), a
                    } else if (Vb && null != a && a instanceof Uint8Array) {
                    if (Wb) {
                        for (var b = ""; 10240 < a.length;) b += String.fromCharCode.apply(null, a.subarray(0, 10240)), a = a.subarray(10240);
                        b += String.fromCharCode.apply(null, a);
                        a = btoa(b)
                    } else a = Ub(a);
                    return a
                }
        }
        return a
    };

    function Fc(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = Gc(a, b, c, void 0 !== d);
            else if (gc(a)) {
                var e = {},
                    f;
                for (f in a) e[f] = Fc(a[f], b, c, d);
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function Gc(a, b, c, d) {
        var e = $b(a);
        d = d ? !!(e & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (var f = 0; f < a.length; f++) a[f] = Fc(a[f], b, c, d);
        c(e, a);
        return a
    }

    function Hc(a) {
        return a.Pb === fc ? a.toJSON() : Ec(a)
    }

    function Ic(a, b) {
        a & 128 && lc(b)
    };

    function Jc(a, b, c) {
        c = void 0 === c ? ec : c;
        if (null != a) {
            if (Vb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = $b(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return ac(a, d | 2), a;
                a = Gc(a, Jc, d & 4 ? ec : c, !0);
                b = $b(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            return a.Pb === fc ? Kc(a) : a
        }
    }

    function Lc(a, b, c, d, e, f, g) {
        (a = a.Ya && a.Ya[c]) ? (d = 0 < a.length ? a[0].constructor : void 0, f = $b(a), f & 2 || (a = tb(a, Kc), ec(f, a), Object.freeze(a)), zc(b, d, c, a, e)) : tc(b, c, Jc(d, f, g), e)
    }

    function Kc(a) {
        bb(a.Pb === fc);
        if (bc(a.B)) return a;
        a = xc(a, !0);
        Yb(a.B, 2);
        return a
    }

    function xc(a, b) {
        bb(a.Pb === fc);
        var c = a.B,
            d = cc([]),
            e = a.constructor.Eg;
        e && d.push(e);
        e = a.ja;
        if (e) {
            d.length = c.length;
            d.fill(void 0, d.length, c.length);
            var f = {};
            d[d.length - 1] = f
        }
        0 !== ($b(c) & 128) && lc(d);
        b = b || bc(a.B) ? ec : dc;
        d = Dc(a.constructor, d);
        a.Oe && (d.Oe = a.Oe.slice());
        f = !!($b(c) & 16);
        for (var g = e ? c.length - 1 : c.length, h = 0; h < g; h++) Lc(a, d, h - a.Sa, c[h], !1, f, b);
        if (e)
            for (var k in e) c = e[k], g = +k, bb(!Number.isNaN(g), "should not have non-numeric keys in sparse objects after a constructor is called."), Lc(a, d, g, c, !0, f, b);
        return d
    };
    if ("undefined" !== typeof Proxy) {
        var Nc = Mc;
        new Proxy({}, {
            getPrototypeOf: Nc,
            setPrototypeOf: Nc,
            isExtensible: Nc,
            preventExtensions: Nc,
            getOwnPropertyDescriptor: Nc,
            defineProperty: Nc,
            has: Nc,
            get: Nc,
            set: Nc,
            deleteProperty: Nc,
            apply: Nc,
            construct: Nc
        })
    }

    function Mc() {
        throw Error("s");
        throw Error();
    };
    var Oc = function(a, b, c, d) {
        kb(this, Oc, "The message constructor should only be used by subclasses");
        bb(this.constructor !== Oc, "Message is an abstract class and cannot be directly constructed");
        null == a && (a = Cc);
        Cc = void 0;
        var e = this.constructor.Eg,
            f = !1;
        if (null == a) {
            a = e ? [e] : [];
            var g = 48;
            var h = !0;
            d && (g |= 128);
            ac(a, g)
        } else {
            if (!Array.isArray(a)) throw Error("t`" + JSON.stringify(a) + "`" + Da(a));
            if (Object.isFrozen(a) || !Object.isExtensible(a) || Object.isSealed(a)) throw Error("u");
            if (e && e !== a[0]) throw Error("v`" + e + "`" +
                JSON.stringify(a[0]) + "`" + Da(a[0]));
            var k = g = Yb(a, 0);
            if (h = 0 !== (16 & k))(f = 0 !== (32 & k)) || (k |= 32);
            if (d) {
                if (!(k & 128) && 0 < a.length) {
                    var l = a[a.length - 1];
                    if (gc(l) && "g" in l) {
                        k |= 128;
                        delete l.g;
                        var p = !0,
                            t;
                        for (t in l) {
                            p = !1;
                            break
                        }
                        p && a.pop()
                    } else throw Error("w");
                }
            } else if (128 & k) throw Error();
            g !== k && ac(a, k)
        }
        this.Sa = e ? 0 : -1;
        this.Ya = void 0;
        this.B = a;
        this.preventPassingToStructuredClone = kc;
        a: {
            g = this.B.length;e = g - 1;
            if (g && (g = this.B[e], gc(g))) {
                this.ja = g;
                this.sb = e - this.Sa;
                break a
            }
            void 0 !== b && -1 < b ? (this.sb = Math.max(b, e + 1 - this.Sa),
                this.ja = void 0) : this.sb = Number.MAX_VALUE
        }
        if (!d && this.ja && "g" in this.ja) throw Error("x");
        if (c) {
            b = h && !f && !0;
            d = this.sb;
            var n;
            for (h = 0; h < c.length; h++) f = c[h], f < d ? (f += this.Sa, (e = a[f]) ? Pc(e, b) : a[f] = ic) : (n || (n = qc(this)), (e = n[f]) ? Pc(e, b) : n[f] = ic)
        }
    };
    m = Oc.prototype;
    m.toJSON = function() {
        var a = this.B;
        hc || (ib(a), a = Gc(a, Hc, Ic));
        return a
    };
    m.vb = function() {
        hc = !0;
        try {
            return JSON.stringify(this.toJSON(), Tc)
        } finally {
            hc = !1
        }
    };
    m.getExtension = function(a) {
        kb(this, a.ag);
        var b = kb(this, Oc);
        return a.od ? a.xd(b, a.od, a.ud, !0) : a.xd(b, a.ud, a.defaultValue, !0)
    };
    m.hasExtension = function(a) {
        bb(!a.ug, "repeated extensions don't support hasExtension");
        bb(!a.ug, "repeated extensions don't support getExtensionOrUndefined");
        kb(this, a.ag);
        var b = kb(this, Oc);
        a = a.od ? a.xd(b, a.od, a.ud, !0) : a.xd(b, a.ud, null, !0);
        return void 0 !== (null === a ? void 0 : a)
    };
    m.clone = function() {
        var a = kb(this, Oc);
        return xc(a, !1)
    };

    function Pc(a, b) {
        if (Array.isArray(a)) {
            var c = $b(a),
                d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && ac(a, c | d)
        }
    }
    m.Pb = fc;
    m.toString = function() {
        return this.B.toString()
    };

    function Tc(a, b) {
        return Ec(b)
    };
    bb(!0);

    function Uc(a, b) {
        b = void 0 === b ? new Set : b;
        if (b.has(a)) return "(Recursive reference)";
        switch (typeof a) {
            case "object":
                if (a) {
                    var c = Object.getPrototypeOf(a);
                    switch (c) {
                        case Map.prototype:
                        case Set.prototype:
                        case Array.prototype:
                            b.add(a);
                            var d = "[" + Array.from(a, function(e) {
                                return Uc(e, b)
                            }).join(", ") + "]";
                            b.delete(a);
                            c !== Array.prototype && (d = Vc(c.constructor) + "(" + d + ")");
                            return d;
                        case Object.prototype:
                            return b.add(a), c = "{" + Object.entries(a).map(function(e) {
                                var f = u(e);
                                e = f.next().value;
                                f = f.next().value;
                                return e +
                                    ": " + Uc(f, b)
                            }).join(", ") + "}", b.delete(a), c;
                        default:
                            return d = "Object", c && c.constructor && (d = Vc(c.constructor)), "function" === typeof a.toString && a.toString !== Object.prototype.toString ? d + "(" + String(a) + ")" : "(object " + d + ")"
                    }
                }
                break;
            case "function":
                return "function " + Vc(a);
            case "number":
                if (!Number.isFinite(a)) return String(a);
                break;
            case "bigint":
                return a.toString(10) + "n";
            case "symbol":
                return a.toString()
        }
        return JSON.stringify(a)
    }

    function Vc(a) {
        var b = a.name;
        b || (b = (a = /function\s+([^\(]+)/m.exec(String(a))) ? a[1] : "(Anonymous)");
        return b
    };

    function Wc(a, b) {
        a.De = "function" === typeof b ? b : function() {
            return b
        };
        return a
    }
    var Xc = void 0;
    var Yc = Oc;

    function Zc(a) {
        return function(b) {
            gb(a);
            if (null == b || "" == b) b = kb(new a, Oc);
            else {
                fb(b);
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("y`" + Da(b) + "`" + b);
                b = Dc(a, cc(b))
            }
            return b
        }
    };
    var $c = function(a) {
        Yc.call(this, a)
    };
    x($c, Yc);
    var ad = Zc($c);
    var bd = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)
    };
    var cd = !Db && !pb(),
        dd = function(a, b) {
            if (/-[a-z]/.test(b)) return null;
            if (cd && a.dataset) {
                if (rb() && !(b in a.dataset)) return null;
                a = a.dataset[b];
                return void 0 === a ? null : a
            }
            return a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase())
        };
    /*


     Copyright (c) 2015-2018 Google, Inc., Netflix, Inc., Microsoft Corp. and contributors

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
    var ed = !1,
        fd = {
            set ra(a) {
                a ? console.warn("A`" + Error().stack) : ed && console.log("B");
                ed = a
            },
            get ra() {
                return ed
            }
        };
    var gd = "function" === typeof Symbol && Symbol.observable || "@@observable";

    function hd(a) {
        setTimeout(function() {
            throw a;
        }, 0)
    };
    var id = {
        closed: !0,
        next: function() {},
        error: function(a) {
            if (fd.ra) throw a;
            hd(a)
        },
        complete: function() {}
    };
    var jd = function() {
        function a(b) {
            this.message = b ? b.length + " errors occurred during unsubscription:\n" + b.map(function(c, d) {
                return d + 1 + ") " + c.toString()
            }).join("\n  ") : "";
            this.name = "UnsubscriptionError";
            this.errors = b;
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    }();
    var kd = Array.isArray || function(a) {
        return a && "number" === typeof a.length
    };

    function ld(a) {
        return "function" === typeof a
    };

    function md(a) {
        return null !== a && "object" === typeof a
    };
    var H = function(a) {
        this.closed = !1;
        this.jb = this.yb = null;
        a && (this.uf = !0, this.ya = a)
    };
    H.prototype.unsubscribe = function() {
        if (!this.closed) {
            var a = this.yb,
                b = this.uf,
                c = this.ya,
                d = this.jb;
            this.closed = !0;
            this.jb = this.yb = null;
            if (a instanceof H) a.remove(this);
            else if (null !== a)
                for (var e = 0; e < a.length; ++e) a[e].remove(this);
            if (ld(c)) {
                b && (this.ya = void 0);
                try {
                    c.call(this)
                } catch (k) {
                    var f = k instanceof jd ? nd(k.errors) : [k]
                }
            }
            if (kd(d)) {
                e = -1;
                for (var g = d.length; ++e < g;) {
                    var h = d[e];
                    if (md(h)) try {
                        h.unsubscribe()
                    } catch (k) {
                        f = f || [], k instanceof jd ? f = f.concat(nd(k.errors)) : f.push(k)
                    }
                }
            }
            if (f) throw new jd(f);
        }
    };
    H.prototype.add = function(a) {
        var b = a;
        if (!a) return H.EMPTY;
        switch (typeof a) {
            case "function":
                b = new H(a);
            case "object":
                if (b === this || b.closed || "function" !== typeof b.unsubscribe) return b;
                if (this.closed) return b.unsubscribe(), b;
                b instanceof H || (a = b, b = new H, b.jb = [a]);
                break;
            default:
                throw Error("C`" + a);
        }
        var c = b.yb;
        if (null === c) b.yb = this;
        else if (c instanceof H) {
            if (c === this) return b;
            b.yb = [c, this]
        } else if (-1 === c.indexOf(this)) c.push(this);
        else return b;
        a = this.jb;
        null === a ? this.jb = [b] : a.push(b);
        return b
    };
    H.prototype.remove = function(a) {
        var b = this.jb;
        b && (a = b.indexOf(a), -1 !== a && b.splice(a, 1))
    };
    var od = new H;
    od.closed = !0;
    H.EMPTY = od;

    function pd(a) {
        return a instanceof H || a && "closed" in a && "function" === typeof a.remove && "function" === typeof a.add && "function" === typeof a.unsubscribe
    }

    function nd(a) {
        return a.reduce(function(b, c) {
            return b.concat(c instanceof jd ? c.errors : c)
        }, [])
    };
    var I = function(a, b, c) {
        H.call(this);
        this.Nc = null;
        this.C = this.ea = this.Mc = !1;
        switch (arguments.length) {
            case 0:
                this.destination = id;
                break;
            case 1:
                if (!a) {
                    this.destination = id;
                    break
                }
                if ("object" === typeof a) {
                    a instanceof I ? (this.ea = a.ea, this.destination = a, a.add(this)) : (this.ea = !0, this.destination = new qd(this, a));
                    break
                }
            default:
                this.ea = !0, this.destination = new qd(this, a, b, c)
        }
    };
    x(I, H);
    I.EMPTY = H.EMPTY;
    I.create = function(a, b, c) {
        a = new I(a, b, c);
        a.ea = !1;
        return a
    };
    m = I.prototype;
    m.next = function(a) {
        this.C || this.o(a)
    };
    m.error = function(a) {
        this.C || (this.C = !0, this.T(a))
    };
    m.complete = function() {
        this.C || (this.C = !0, this.A())
    };
    m.unsubscribe = function() {
        this.closed || (this.C = !0, H.prototype.unsubscribe.call(this))
    };
    m.o = function(a) {
        this.destination.next(a)
    };
    m.T = function(a) {
        this.destination.error(a);
        this.unsubscribe()
    };
    m.A = function() {
        this.destination.complete();
        this.unsubscribe()
    };
    var qd = function(a, b, c, d) {
        I.call(this);
        this.zb = a;
        var e = this;
        if (ld(b)) var f = b;
        else b && (f = b.next, c = b.error, d = b.complete, b !== id && (e = Object.create(b), pd(b) && b.add(this.unsubscribe.bind(this)), e.unsubscribe = this.unsubscribe.bind(this)));
        this.xa = e;
        this.o = f;
        this.T = c;
        this.A = d
    };
    x(qd, I);
    qd.EMPTY = I.EMPTY;
    qd.create = I.create;
    m = qd.prototype;
    m.next = function(a) {
        if (!this.C && this.o) {
            var b = this.zb;
            fd.ra && b.ea ? this.Vc(b, this.o, a) && this.unsubscribe() : this.Wc(this.o, a)
        }
    };
    m.error = function(a) {
        if (!this.C) {
            var b = this.zb,
                c = fd.ra;
            if (this.T) c && b.ea ? this.Vc(b, this.T, a) : this.Wc(this.T, a), this.unsubscribe();
            else if (b.ea) c ? (b.Nc = a, b.Mc = !0) : hd(a), this.unsubscribe();
            else {
                this.unsubscribe();
                if (c) throw a;
                hd(a)
            }
        }
    };
    m.complete = function() {
        var a = this;
        if (!this.C) {
            var b = this.zb;
            if (this.A) {
                var c = function() {
                    return a.A.call(a.xa)
                };
                fd.ra && b.ea ? this.Vc(b, c) : this.Wc(c)
            }
            this.unsubscribe()
        }
    };
    m.Wc = function(a, b) {
        try {
            a.call(this.xa, b)
        } catch (c) {
            this.unsubscribe();
            if (fd.ra) throw c;
            hd(c)
        }
    };
    m.Vc = function(a, b, c) {
        if (!fd.ra) throw Error("D");
        try {
            b.call(this.xa, c)
        } catch (d) {
            return fd.ra ? (a.Nc = d, a.Mc = !0) : hd(d), !0
        }
        return !1
    };
    m.ya = function() {
        var a = this.zb;
        this.zb = this.xa = null;
        a.unsubscribe()
    };

    function rd(a) {
        return a
    };

    function J() {
        return sd(D.apply(0, arguments))
    }

    function sd(a) {
        return 0 === a.length ? rd : 1 === a.length ? a[0] : function(b) {
            return a.reduce(function(c, d) {
                return d(c)
            }, b)
        }
    };

    function td(a) {
        return a && "function" === typeof a.next && "function" === typeof a.error && "function" === typeof a.complete
    }
    var ud = function(a) {
        I.call(this);
        this.destination = a
    };
    x(ud, I);
    ud.EMPTY = I.EMPTY;
    ud.create = I.create;
    var K = function(a) {
        a && (this.X = a)
    };
    m = K.prototype;
    m.ob = function(a) {
        var b = new K;
        b.source = this;
        b.operator = a;
        return b
    };
    m.subscribe = function(a, b, c) {
        var d = this.operator;
        a: {
            if (a) {
                if (a instanceof I || td(a) && pd(a)) break a;
                if (td(a)) {
                    a = new ud(a);
                    break a
                }
            }
            a = a || b || c ? new I(a, b, c) : new I(id)
        }
        d ? a.add(d.call(a, this.source)) : a.add(this.source || fd.ra && !a.ea ? this.X(a) : this.bd(a));
        if (fd.ra && a.ea && (a.ea = !1, a.Mc)) throw a.Nc;
        return a
    };
    m.bd = function(a) {
        try {
            return this.X(a)
        } catch (e) {
            fd.ra && (a.Mc = !0, a.Nc = e);
            var b;
            a: {
                for (b = a; b;) {
                    var c = b.destination,
                        d = b.C;
                    if (b.closed || d) {
                        b = !1;
                        break a
                    }
                    b = c && c instanceof I ? c : null
                }
                b = !0
            }
            b ? a.error(e) : console.warn(e)
        }
    };
    m.forEach = function(a, b) {
        var c = this;
        b = vd(b);
        return new b(function(d, e) {
            var f = c.subscribe(function(g) {
                try {
                    a(g)
                } catch (h) {
                    e(h), f && f.unsubscribe()
                }
            }, e, d)
        })
    };
    m.X = function(a) {
        var b = this.source;
        return b && b.subscribe(a)
    };
    K.prototype[gd] = function() {
        return this
    };
    K.prototype.h = function() {
        var a = D.apply(0, arguments);
        return 0 === a.length ? this : sd(a)(this)
    };
    K.create = function(a) {
        return new K(a)
    };

    function vd(a) {
        a || (a = Promise);
        if (!a) throw Error("E");
        return a
    };
    var wd = "function" === typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
    var xd = function(a) {
        return a && "number" === typeof a.length && "function" !== typeof a
    };

    function yd(a) {
        return !!a && "function" !== typeof a.subscribe && "function" === typeof a.then
    };
    var zd = function(a) {
        return function(b) {
            for (var c = 0, d = a.length; c < d && !b.closed; c++) b.next(a[c]);
            b.complete()
        }
    };

    function Ad(a) {
        return function(b) {
            Bd(a, b).catch(function(c) {
                return b.error(c)
            })
        }
    }

    function Bd(a, b) {
        var c, d, e, f, g, h;
        return ya(new xa(new ta(function(k) {
            switch (k.ba) {
                case 1:
                    k.Ta = 2;
                    k.Aa = 3;
                    var l = a[Symbol.asyncIterator];
                    f = void 0 !== l ? l.call(a) : new za(u(a));
                case 5:
                    return l = f.next(), k.ba = 8, {
                        value: l
                    };
                case 8:
                    d = k.ee;
                    if (d.done) {
                        k.ab(3);
                        break
                    }
                    g = d.value;
                    b.next(g);
                    k.ab(5);
                    break;
                case 3:
                    k.vd = [k.Y];
                    k.Ta = 0;
                    k.Aa = 0;
                    k.Ta = 0;
                    k.Aa = 9;
                    if (!d || d.done || !(e = f.return)) {
                        k.ab(9);
                        break
                    }
                    l = e.call(f);
                    k.ba = 9;
                    return {
                        value: l
                    };
                case 9:
                    k.vd[1] = k.Y;
                    k.Ta = 0;
                    k.Aa = 0;
                    if (c) throw c.error;
                    sa(k, 10, 1);
                    break;
                case 10:
                    sa(k, 4);
                    break;
                case 2:
                    k.Ta =
                        0;
                    l = k.Y.ye;
                    k.Y = null;
                    h = l;
                    c = {
                        error: h
                    };
                    k.ab(3);
                    break;
                case 4:
                    b.complete(), k.ba = 0
            }
        })))
    };
    var Cd = function(a) {
        return function(b) {
            var c = a[wd]();
            do {
                var d = void 0;
                try {
                    d = c.next()
                } catch (e) {
                    b.error(e);
                    return
                }
                if (d.done) {
                    b.complete();
                    break
                }
                b.next(d.value);
                if (b.closed) break
            } while (1);
            "function" === typeof c.return && b.add(function() {
                c.return && c.return()
            });
            return b
        }
    };
    var Dd = function(a) {
        return function(b) {
            var c = a[gd]();
            if ("function" !== typeof c.subscribe) throw new TypeError("F");
            return c.subscribe(b)
        }
    };
    var Ed = function(a) {
        return function(b) {
            a.then(function(c) {
                b.closed || (b.next(c), b.complete())
            }, function(c) {
                return b.error(c)
            }).then(null, hd);
            return b
        }
    };
    var Fd = function(a) {
        if (a && "function" === typeof a[gd]) return Dd(a);
        if (xd(a)) return zd(a);
        if (yd(a)) return Ed(a);
        if (a && "function" === typeof a[wd]) return Cd(a);
        if (Symbol && Symbol.asyncIterator && a && "function" === typeof a[Symbol.asyncIterator]) return Ad(a);
        throw new TypeError("G`" + (md(a) ? "an invalid object" : "'" + a + "'"));
    };
    var Gd = function(a) {
        I.call(this);
        this.parent = a
    };
    x(Gd, I);
    Gd.EMPTY = I.EMPTY;
    Gd.create = I.create;
    Gd.prototype.o = function(a) {
        this.parent.ua(a)
    };
    Gd.prototype.T = function(a) {
        this.parent.Pa(a);
        this.unsubscribe()
    };
    Gd.prototype.A = function() {
        this.parent.P();
        this.unsubscribe()
    };
    var Hd = function(a, b, c) {
        I.call(this);
        this.parent = a;
        this.bf = b;
        this.Tg = c
    };
    x(Hd, I);
    Hd.EMPTY = I.EMPTY;
    Hd.create = I.create;
    Hd.prototype.o = function(a) {
        this.parent.ua(this.bf, a, this.Tg, this)
    };
    Hd.prototype.T = function(a) {
        this.parent.Pa(a);
        this.unsubscribe()
    };
    Hd.prototype.A = function() {
        this.parent.P(this);
        this.unsubscribe()
    };
    var L = function() {
        I.apply(this, arguments)
    };
    x(L, I);
    L.EMPTY = I.EMPTY;
    L.create = I.create;
    L.prototype.ua = function(a) {
        this.destination.next(a)
    };
    L.prototype.Pa = function(a) {
        this.destination.error(a)
    };
    L.prototype.P = function() {
        this.destination.complete()
    };
    var M = function() {
        I.apply(this, arguments)
    };
    x(M, I);
    M.EMPTY = I.EMPTY;
    M.create = I.create;
    M.prototype.ua = function(a, b) {
        this.destination.next(b)
    };
    M.prototype.Pa = function(a) {
        this.destination.error(a)
    };
    M.prototype.P = function() {
        this.destination.complete()
    };

    function Id(a, b) {
        if (!b.closed) return a instanceof K ? a.subscribe(b) : Fd(a)(b)
    };

    function O(a, b) {
        if (a && "function" === typeof a.ob) return a.ob(b);
        throw new TypeError("H");
    };
    var Jd = function() {
        H.call(this)
    };
    x(Jd, H);
    Jd.EMPTY = H.EMPTY;
    Jd.prototype.u = function() {
        return this
    };
    var Ld = function(a, b) {
            var c = D.apply(2, arguments);
            return (null == Kd ? 0 : Kd.setInterval) ? Kd.setInterval.apply(Kd, [a, b].concat(v(c))) : setInterval.apply(null, [a, b].concat(v(c)))
        },
        Kd = void 0;
    var Md = function(a, b) {
        H.call(this);
        this.da = a;
        this.Uc = b;
        this.pending = !1
    };
    x(Md, Jd);
    Md.EMPTY = Jd.EMPTY;
    m = Md.prototype;
    m.u = function(a, b) {
        b = void 0 === b ? 0 : b;
        if (this.closed) return this;
        this.state = a;
        a = this.id;
        var c = this.da;
        null != a && (this.id = this.Sb(c, a, b));
        this.pending = !0;
        this.delay = b;
        this.id = this.id || this.Tb(c, this.id, b);
        return this
    };
    m.Tb = function(a, b, c) {
        return Ld(a.flush.bind(a, this), void 0 === c ? 0 : c)
    };
    m.Sb = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        if (null !== c && this.delay === c && !1 === this.pending) return b;
        ((null == Kd ? void 0 : Kd.clearInterval) || clearInterval)(b)
    };
    m.execute = function(a, b) {
        if (this.closed) return Error("I");
        this.pending = !1;
        if (a = this.ge(a, b)) return a;
        !1 === this.pending && null != this.id && (this.id = this.Sb(this.da, this.id, null))
    };
    m.ge = function(a) {
        var b = !1,
            c = void 0;
        try {
            this.Uc(a)
        } catch (d) {
            b = !0, c = !!d && d || Error(d)
        }
        if (b) return this.unsubscribe(), c
    };
    m.ya = function() {
        var a = this.id,
            b = this.da,
            c = b.actions,
            d = c.indexOf(this);
        this.state = this.Uc = null;
        this.pending = !1;
        this.da = null; - 1 !== d && c.splice(d, 1);
        null != a && (this.id = this.Sb(b, a, null));
        this.delay = null
    };
    var Nd = {
        now: function() {
            return (Nd.Sf || Date).now()
        },
        Sf: void 0
    };
    var Pd = function(a, b) {
        b = void 0 === b ? Od : b;
        this.tf = a;
        this.now = b
    };
    Pd.prototype.u = function(a, b, c) {
        b = void 0 === b ? 0 : b;
        return (new this.tf(this, a)).u(c, b)
    };
    var Od = Nd.now;
    var Qd = function(a, b) {
        b = void 0 === b ? Od : b;
        Pd.call(this, a, b);
        this.actions = [];
        this.active = !1;
        this.Lc = void 0
    };
    x(Qd, Pd);
    Qd.prototype.flush = function(a) {
        var b = this.actions;
        if (this.active) b.push(a);
        else {
            var c;
            this.active = !0;
            do
                if (c = a.execute(a.state, a.delay)) break; while (a = b.shift());
            this.active = !1;
            if (c) {
                for (; a = b.shift();) a.unsubscribe();
                throw c;
            }
        }
    };

    function Rd(a) {
        return a && "function" === typeof a.u
    };

    function Sd(a, b) {
        return new K(function(c) {
            var d = new H,
                e = 0;
            d.add(b.u(function() {
                e === a.length ? c.complete() : (c.next(a[e++]), c.closed || d.add(this.u()))
            }));
            return d
        })
    };

    function Td(a, b) {
        if (!a) throw Error("J");
        return new K(function(c) {
            var d = new H;
            d.add(b.u(function() {
                var e = a[Symbol.asyncIterator]();
                d.add(b.u(function() {
                    var f = this;
                    e.next().then(function(g) {
                        g.done ? c.complete() : (c.next(g.value), f.u())
                    })
                }))
            }));
            return d
        })
    };

    function Ud(a, b) {
        if (!a) throw Error("J");
        return new K(function(c) {
            var d = new H,
                e;
            d.add(function() {
                e && "function" === typeof e.return && e.return()
            });
            d.add(b.u(function() {
                e = a[wd]();
                d.add(b.u(function() {
                    if (!c.closed) {
                        try {
                            var f = e.next();
                            var g = f.value;
                            var h = f.done
                        } catch (k) {
                            c.error(k);
                            return
                        }
                        h ? c.complete() : (c.next(g), this.u())
                    }
                }))
            }));
            return d
        })
    };

    function Vd(a, b) {
        return new K(function(c) {
            var d = new H;
            d.add(b.u(function() {
                var e = a[gd]();
                d.add(e.subscribe({
                    next: function(f) {
                        d.add(b.u(function() {
                            return c.next(f)
                        }))
                    },
                    error: function(f) {
                        d.add(b.u(function() {
                            return c.error(f)
                        }))
                    },
                    complete: function() {
                        d.add(b.u(function() {
                            return c.complete()
                        }))
                    }
                }))
            }));
            return d
        })
    };

    function Wd(a, b) {
        return new K(function(c) {
            var d = new H;
            d.add(b.u(function() {
                return a.then(function(e) {
                    d.add(b.u(function() {
                        c.next(e);
                        d.add(b.u(function() {
                            return c.complete()
                        }))
                    }))
                }, function(e) {
                    d.add(b.u(function() {
                        return c.error(e)
                    }))
                })
            }));
            return d
        })
    };

    function Xd(a) {
        var b = Yd;
        if (null != a) {
            if (a && "function" === typeof a[gd]) return Vd(a, b);
            if (yd(a)) return Wd(a, b);
            if (xd(a)) return Sd(a, b);
            if (a && "function" === typeof a[wd] || "string" === typeof a) return Ud(a, b);
            if (Symbol && Symbol.asyncIterator && "function" === typeof a[Symbol.asyncIterator]) return Td(a, b)
        }
        throw new TypeError("K`" + (null !== a && typeof a || a));
    };

    function Zd(a) {
        return a instanceof K ? a : new K(Fd(a))
    };

    function $d(a) {
        return function(b) {
            return O(b, function(c) {
                var d = this,
                    e = new H,
                    f = null,
                    g = !1,
                    h;
                f = c.subscribe({
                    next: function(k) {
                        return d.next(k)
                    },
                    error: function(k) {
                        try {
                            h = Zd(a(k, $d(a)(c)))
                        } catch (l) {
                            d.error(l)
                        }
                        h && (f ? (f.unsubscribe(), f = null, e.add(h.subscribe(d))) : g = !0)
                    },
                    complete: function() {
                        return d.complete()
                    }
                });
                g ? (f.unsubscribe(), f = null, e.add(h.subscribe(d))) : e.add(f);
                return e
            })
        }
    };

    function ae(a, b) {
        return b ? Sd(a, b) : new K(zd(a))
    };
    var be = {};

    function P() {
        var a = D.apply(0, arguments),
            b = void 0,
            c = void 0,
            d = void 0;
        Rd(a[a.length - 1]) && (c = a.pop());
        "function" === typeof a[a.length - 1] && (b = a.pop());
        if (1 === a.length) {
            var e = a[0];
            kd(e) && (a = e);
            md(e) && Object.getPrototypeOf(e) === Object.prototype && (d = Object.keys(e), a = d.map(function(f) {
                return e[f]
            }))
        }
        return O(ae(a, c), new ce(b, d))
    }
    var ce = function(a, b) {
        this.Kc = a;
        this.keys = b
    };
    ce.prototype.call = function(a, b) {
        return b.subscribe(new de(a, this.Kc, this.keys))
    };
    var de = function(a, b, c) {
        M.call(this, a);
        this.Kc = b;
        this.keys = c;
        this.active = 0;
        this.values = [];
        this.Qa = []
    };
    x(de, M);
    de.EMPTY = M.EMPTY;
    de.create = M.create;
    m = de.prototype;
    m.o = function(a) {
        this.values.push(be);
        this.Qa.push(a)
    };
    m.A = function() {
        var a = this.Qa,
            b = a.length;
        if (0 === b) this.destination.complete();
        else {
            this.hb = this.active = b;
            for (var c = 0; c < b; c++) this.add(Id(a[c], new Hd(this, null, c)))
        }
    };
    m.P = function() {
        0 === --this.active && this.destination.complete()
    };
    m.ua = function(a, b, c) {
        var d = this.values,
            e = d[c];
        e = this.hb ? e === be ? --this.hb : this.hb : 0;
        d[c] = b;
        0 === e && (this.Kc ? this.wf(d) : this.destination.next(this.keys ? this.keys.reduce(function(f, g, h) {
            return f[g] = d[h], f
        }, {}) : d.slice()))
    };
    m.wf = function(a) {
        try {
            var b = this.Kc.apply(this, a)
        } catch (c) {
            this.destination.error(c);
            return
        }
        this.destination.next(b)
    };

    function ee() {
        var a = D.apply(0, arguments),
            b = void 0;
        "function" === typeof a[a.length - 1] && (b = a.pop());
        1 === a.length && kd(a[0]) && (a = a[0].slice());
        return function(c) {
            var d = Zd([c].concat(v(a))),
                e = new ce(b);
            if (c && "function" === typeof c.ob) c = c.ob.call(d, e);
            else throw new TypeError("H");
            return c
        }
    }

    function fe() {
        return ee.apply(null, v(D.apply(0, arguments)))
    };

    function Q() {
        var a = D.apply(0, arguments),
            b = a[a.length - 1];
        return Rd(b) ? (a.pop(), Sd(a, b)) : ae(a)
    };

    function R(a) {
        return function(b) {
            if ("function" !== typeof a) throw new TypeError("L");
            return O(b, new ge(a))
        }
    }
    var ge = function(a) {
        this.I = a;
        this.fa = void 0
    };
    ge.prototype.call = function(a, b) {
        return b.subscribe(new he(a, this.I, this.fa))
    };
    var he = function(a, b, c) {
        I.call(this, a);
        this.I = b;
        this.count = 0;
        this.fa = c || this
    };
    x(he, I);
    he.EMPTY = I.EMPTY;
    he.create = I.create;
    he.prototype.o = function(a) {
        try {
            var b = this.I.call(this.fa, a, this.count++)
        } catch (c) {
            this.destination.error(c);
            return
        }
        this.destination.next(b)
    };

    function ie(a, b) {
        var c = void 0 === c ? Infinity : c;
        if ("function" === typeof b) return function(d) {
            return d.h(ie(function(e, f) {
                return Zd(a(e, f)).h(R(function(g, h) {
                    return b(e, g, f, h)
                }))
            }, c))
        };
        "number" === typeof b && (c = b);
        return function(d) {
            return O(d, new je(a, c))
        }
    }
    var je = function(a, b) {
        b = void 0 === b ? Infinity : b;
        this.I = a;
        this.jd = b
    };
    je.prototype.call = function(a, b) {
        return b.subscribe(new ke(a, this.I, this.jd))
    };
    var ke = function(a, b, c) {
        c = void 0 === c ? Infinity : c;
        L.call(this, a);
        this.destination = a;
        this.I = b;
        this.jd = c;
        this.Fe = !1;
        this.buffer = [];
        this.index = this.active = 0
    };
    x(ke, L);
    ke.EMPTY = L.EMPTY;
    ke.create = L.create;
    ke.prototype.o = function(a) {
        if (this.active < this.jd) {
            var b = this.index++;
            try {
                var c = this.I(a, b)
            } catch (d) {
                this.destination.error(d);
                return
            }
            this.active++;
            a = new Gd(this);
            this.destination.add(a);
            Id(c, a)
        } else this.buffer.push(a)
    };
    ke.prototype.A = function() {
        this.Fe = !0;
        0 === this.active && 0 === this.buffer.length && this.destination.complete();
        this.unsubscribe()
    };
    ke.prototype.ua = function(a) {
        this.destination.next(a)
    };
    ke.prototype.P = function() {
        var a = this.buffer;
        this.active--;
        0 < a.length ? this.o(a.shift()) : 0 === this.active && this.Fe && this.destination.complete()
    };

    function le(a) {
        a = void 0 === a ? Infinity : a;
        return ie(rd, a)
    };

    function me() {
        return le(1)(Q.apply(null, v(D.apply(0, arguments))))
    };

    function ne(a) {
        a = void 0 === a ? null : a;
        return function(b) {
            return O(b, new oe(a))
        }
    }
    var oe = function(a) {
        this.defaultValue = a
    };
    oe.prototype.call = function(a, b) {
        return b.subscribe(new pe(a, this.defaultValue))
    };
    var pe = function(a, b) {
        I.call(this, a);
        this.defaultValue = b;
        this.Id = !0
    };
    x(pe, I);
    pe.EMPTY = I.EMPTY;
    pe.create = I.create;
    pe.prototype.o = function(a) {
        this.Id = !1;
        this.destination.next(a)
    };
    pe.prototype.A = function() {
        this.Id && this.destination.next(this.defaultValue);
        this.destination.complete()
    };

    function qe(a) {
        return function(b) {
            return O(b, new re(a))
        }
    }
    var re = function(a) {
        this.pd = a
    };
    re.prototype.call = function(a, b) {
        return b.subscribe(new se(a, this.pd))
    };
    var se = function(a, b) {
        M.call(this, a);
        this.pd = b;
        this.se = !1;
        this.rc = [];
        this.index = 0
    };
    x(se, M);
    se.EMPTY = M.EMPTY;
    se.create = M.create;
    m = se.prototype;
    m.ua = function(a, b, c, d) {
        this.destination.next(a);
        te(this, d);
        ue(this)
    };
    m.Pa = function(a) {
        this.T(a)
    };
    m.P = function(a) {
        (a = te(this, a)) && this.destination.next(a);
        ue(this)
    };
    m.o = function(a) {
        var b = this.index++;
        try {
            var c = this.pd(a, b);
            if (c) {
                var d = Id(c, new Hd(this, a, 0));
                d && !d.closed && (this.destination.add(d), this.rc.push(d))
            }
        } catch (e) {
            this.destination.error(e)
        }
    };
    m.A = function() {
        this.se = !0;
        ue(this);
        this.unsubscribe()
    };
    var te = function(a, b) {
            b.unsubscribe();
            var c = a.rc.indexOf(b); - 1 !== c && a.rc.splice(c, 1);
            return b.bf
        },
        ue = function(a) {
            a.se && 0 === a.rc.length && a.destination.complete()
        };
    var ve = new K(function(a) {
        return a.complete()
    });

    function we(a) {
        return new K(function(b) {
            return b.error(a)
        })
    };

    function xe(a) {
        return function(b) {
            return O(b, new ye(a))
        }
    }
    var ye = function(a) {
        this.Oa = a;
        this.gg = void 0
    };
    ye.prototype.call = function(a, b) {
        return b.subscribe(new ze(a, this.Oa, this.gg))
    };
    var ze = function(a, b, c) {
        L.call(this, a);
        this.Oa = b;
        this.values = new Set;
        c && this.add(Id(c, new Gd(this)))
    };
    x(ze, L);
    ze.EMPTY = L.EMPTY;
    ze.create = L.create;
    m = ze.prototype;
    m.ua = function() {
        this.values.clear()
    };
    m.Pa = function(a) {
        this.T(a)
    };
    m.o = function(a) {
        this.Oa ? this.xf(a) : this.he(a, a)
    };
    m.xf = function(a) {
        var b = this.destination;
        try {
            var c = this.Oa(a)
        } catch (d) {
            b.error(d);
            return
        }
        this.he(c, a)
    };
    m.he = function(a, b) {
        var c = this.values;
        c.has(a) || (c.add(a), this.destination.next(b))
    };

    function S(a) {
        return function(b) {
            return O(b, new Ae(a))
        }
    }
    var Ae = function(a) {
        this.compare = a;
        this.Oa = void 0
    };
    Ae.prototype.call = function(a, b) {
        return b.subscribe(new Be(a, this.compare, this.Oa))
    };
    var Be = function(a, b, c) {
        I.call(this, a);
        this.Oa = c;
        this.He = !1;
        "function" === typeof b && (this.compare = b)
    };
    x(Be, I);
    Be.EMPTY = I.EMPTY;
    Be.create = I.create;
    Be.prototype.compare = function(a, b) {
        return a === b
    };
    Be.prototype.o = function(a) {
        try {
            var b = this.Oa;
            var c = b ? b(a) : a
        } catch (e) {
            return this.destination.error(e)
        }
        b = !1;
        if (this.He) try {
            var d = this.compare;
            b = d(this.key, c)
        } catch (e) {
            return this.destination.error(e)
        } else this.He = !0;
        b || (this.key = c, this.destination.next(a))
    };

    function U(a) {
        return function(b) {
            return O(b, new Ce(a))
        }
    }
    var Ce = function(a) {
        this.pa = a;
        this.fa = void 0
    };
    Ce.prototype.call = function(a, b) {
        return b.subscribe(new De(a, this.pa, this.fa))
    };
    var De = function(a, b, c) {
        I.call(this, a);
        this.pa = b;
        this.fa = c;
        this.count = 0
    };
    x(De, I);
    De.EMPTY = I.EMPTY;
    De.create = I.create;
    De.prototype.o = function(a) {
        try {
            var b = this.pa.call(this.fa, a, this.count++)
        } catch (c) {
            this.destination.error(c);
            return
        }
        b && this.destination.next(a)
    };
    var Ee = function() {
        function a() {
            this.message = "argument out of range";
            this.name = "ArgumentOutOfRangeError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    }();

    function Fe(a) {
        if (isNaN(a)) throw new TypeError("M");
        if (0 > a) throw new Ee;
        return function(b) {
            return 0 === a ? ve : O(b, new Ge(a))
        }
    }
    var Ge = function(a) {
        this.count = a
    };
    Ge.prototype.call = function(a, b) {
        return b.subscribe(new He(a, this.count))
    };
    var He = function(a, b) {
        I.call(this, a);
        this.count = b;
        this.yf = 0
    };
    x(He, I);
    He.EMPTY = I.EMPTY;
    He.create = I.create;
    He.prototype.o = function(a) {
        var b = this.count,
            c = ++this.yf;
        c <= b && (this.destination.next(a), c === b && (this.destination.complete(), this.unsubscribe()))
    };
    var Ie = function() {
        function a() {
            this.message = "no elements in sequence";
            this.name = "EmptyError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    }();

    function Je(a) {
        a = void 0 === a ? Ke : a;
        return function(b) {
            return O(b, new Le(a))
        }
    }
    var Le = function(a) {
        this.rd = a
    };
    Le.prototype.call = function(a, b) {
        return b.subscribe(new Me(a, this.rd))
    };
    var Me = function(a, b) {
        I.call(this, a);
        this.rd = b;
        this.Ie = !1
    };
    x(Me, I);
    Me.EMPTY = I.EMPTY;
    Me.create = I.create;
    Me.prototype.o = function(a) {
        this.Ie = !0;
        this.destination.next(a)
    };
    Me.prototype.A = function() {
        if (this.Ie) return this.destination.complete();
        try {
            var a = this.rd()
        } catch (b) {
            a = b
        }
        this.destination.error(a)
    };

    function Ke() {
        return new Ie
    };

    function Ne() {
        var a = D.apply(0, arguments);
        return function(b) {
            return me(b, Q.apply(null, v(a)))
        }
    };

    function Oe(a) {
        return function(b) {
            return O(b, new Pe(a, b))
        }
    }
    var Pe = function(a, b) {
        this.pa = a;
        this.fa = void 0;
        this.source = b
    };
    Pe.prototype.call = function(a, b) {
        return b.subscribe(new Qe(a, this.pa, this.fa, this.source))
    };
    var Qe = function(a, b, c, d) {
        I.call(this, a);
        this.pa = b;
        this.fa = c;
        this.source = d;
        this.index = 0;
        this.fa = c || this
    };
    x(Qe, I);
    Qe.EMPTY = I.EMPTY;
    Qe.create = I.create;
    Qe.prototype.P = function(a) {
        this.destination.next(a);
        this.destination.complete()
    };
    Qe.prototype.o = function(a) {
        var b = !1;
        try {
            b = this.pa.call(this.fa, a, this.index++, this.source)
        } catch (c) {
            this.destination.error(c);
            return
        }
        b || this.P(!1)
    };
    Qe.prototype.A = function() {
        this.P(!0)
    };
    var Re = function(a, b) {
        H.call(this);
        this.kf = a;
        this.Wd = b;
        this.closed = !1
    };
    x(Re, H);
    Re.EMPTY = H.EMPTY;
    Re.prototype.unsubscribe = function() {
        if (!this.closed) {
            this.closed = !0;
            var a = this.kf,
                b = a.Ea;
            this.kf = null;
            !b || 0 === b.length || a.C || a.closed || (a = b.indexOf(this.Wd), -1 !== a && b.splice(a, 1))
        }
    };
    var Se = function() {
        function a() {
            this.message = "object unsubscribed";
            this.name = "ObjectUnsubscribedError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    }();
    var V = function() {
        this.Ea = [];
        this.Hb = this.C = this.closed = !1;
        this.Oc = null
    };
    x(V, K);
    m = V.prototype;
    m.ob = function(a) {
        var b = new Te(this, this);
        b.operator = a;
        return b
    };
    m.next = function(a) {
        if (this.closed) throw new Se;
        if (!this.C) {
            var b = this.Ea,
                c = b.length;
            b = b.slice();
            for (var d = 0; d < c; d++) b[d].next(a)
        }
    };
    m.error = function(a) {
        if (this.closed) throw new Se;
        this.Hb = !0;
        this.Oc = a;
        this.C = !0;
        var b = this.Ea,
            c = b.length;
        b = b.slice();
        for (var d = 0; d < c; d++) b[d].error(a);
        this.Ea.length = 0
    };
    m.complete = function() {
        if (this.closed) throw new Se;
        this.C = !0;
        var a = this.Ea,
            b = a.length;
        a = a.slice();
        for (var c = 0; c < b; c++) a[c].complete();
        this.Ea.length = 0
    };
    m.unsubscribe = function() {
        this.closed = this.C = !0;
        this.Ea = null
    };
    m.bd = function(a) {
        if (this.closed) throw new Se;
        return K.prototype.bd.call(this, a)
    };
    m.X = function(a) {
        if (this.closed) throw new Se;
        if (this.Hb) return a.error(this.Oc), H.EMPTY;
        if (this.C) return a.complete(), H.EMPTY;
        this.Ea.push(a);
        return new Re(this, a)
    };
    m.U = function() {
        var a = new K;
        a.source = this;
        return a
    };
    V.create = function(a, b) {
        return new Te(a, b)
    };
    var Te = function(a, b) {
        V.call(this);
        this.destination = a;
        this.source = b
    };
    x(Te, V);
    Te.create = V.create;
    Te.prototype.next = function(a) {
        var b = this.destination;
        b && b.next && b.next(a)
    };
    Te.prototype.error = function(a) {
        var b = this.destination;
        b && b.error && this.destination.error(a)
    };
    Te.prototype.complete = function() {
        var a = this.destination;
        a && a.complete && this.destination.complete()
    };
    Te.prototype.X = function(a) {
        return this.source ? this.source.subscribe(a) : H.EMPTY
    };

    function Ue() {
        return function(a) {
            return O(a, new Ve)
        }
    }
    var Ve = function() {};
    Ve.prototype.call = function(a, b) {
        return b.subscribe(new We(a))
    };
    var We = function() {
        I.apply(this, arguments)
    };
    x(We, I);
    We.EMPTY = I.EMPTY;
    We.create = I.create;
    We.prototype.o = function() {};

    function Xe() {
        if (isNaN(1)) throw new TypeError("M");
        return function(a) {
            return O(a, new Ye)
        }
    }
    var Ye = function() {
        this.total = 1
    };
    Ye.prototype.call = function(a, b) {
        return b.subscribe(new Ze(a, this.total))
    };
    var Ze = function(a, b) {
        I.call(this, a);
        this.total = b;
        this.df = [];
        this.count = 0
    };
    x(Ze, I);
    Ze.EMPTY = I.EMPTY;
    Ze.create = I.create;
    Ze.prototype.o = function(a) {
        var b = this.df,
            c = this.total,
            d = this.count++;
        b.length < c ? b.push(a) : b[d % c] = a
    };
    Ze.prototype.A = function() {
        var a = this.destination,
            b = this.count;
        if (0 < b)
            for (var c = this.count >= this.total ? this.total : this.count, d = this.df, e = 0; e < c; e++) {
                var f = b++ % c;
                a.next(d[f])
            }
        a.complete()
    };

    function $e(a, b) {
        var c = 2 <= arguments.length;
        return function(d) {
            return d.h(a ? U(function(e, f) {
                return a(e, f, d)
            }) : rd, Xe(), c ? ne(b) : Je(function() {
                return new Ie
            }))
        }
    };

    function af(a) {
        return function(b) {
            return O(b, new bf(a))
        }
    }
    var bf = function(a) {
        this.value = a
    };
    bf.prototype.call = function(a, b) {
        return b.subscribe(new cf(a, this.value))
    };
    var cf = function(a, b) {
        I.call(this, a);
        this.value = b
    };
    x(cf, I);
    cf.EMPTY = I.EMPTY;
    cf.create = I.create;
    cf.prototype.o = function() {
        this.destination.next(this.value)
    };

    function df(a, b) {
        var c = !1;
        2 <= arguments.length && (c = !0);
        return function(d) {
            return O(d, new ef(a, b, c))
        }
    }
    var ef = function(a, b, c) {
        this.dd = a;
        this.seed = b;
        this.mg = void 0 === c ? !1 : c
    };
    ef.prototype.call = function(a, b) {
        return b.subscribe(new ff(a, this.dd, this.seed, this.mg))
    };
    var ff = function(a, b, c, d) {
        I.call(this, a);
        this.dd = b;
        this.Xc = c;
        this.je = d;
        this.index = 0
    };
    x(ff, I);
    ff.EMPTY = I.EMPTY;
    ff.create = I.create;
    ff.prototype.o = function(a) {
        var b = this.destination;
        if (this.je) {
            var c = this.index++;
            try {
                var d = this.dd(this.Xc, a, c)
            } catch (e) {
                b.error(e);
                return
            }
            this.Xc = d;
            b.next(d)
        } else this.Xc = a, this.je = !0, b.next(a)
    };

    function gf() {
        var a = D.apply(0, arguments),
            b = Infinity,
            c = void 0,
            d = a[a.length - 1];
        Rd(d) ? (c = a.pop(), 1 < a.length && "number" === typeof a[a.length - 1] && (b = a.pop())) : "number" === typeof d && (b = a.pop());
        return !c && 1 === a.length && a[0] instanceof K ? a[0] : le(b)(ae(a, c))
    };

    function hf() {
        return function(a) {
            return O(a, new jf)
        }
    }
    var jf = function() {};
    jf.prototype.call = function(a, b) {
        b.Ab++;
        a = new kf(a, b);
        var c = b.subscribe(a);
        a.closed || (a.connection = b.connect());
        return c
    };
    var kf = function(a, b) {
        I.call(this, a);
        this.kb = b;
        this.connection = null
    };
    x(kf, I);
    kf.EMPTY = I.EMPTY;
    kf.create = I.create;
    kf.prototype.ya = function() {
        var a = this.kb;
        if (a) {
            this.kb = null;
            var b = a.Ab;
            0 >= b ? this.connection = null : (a.Ab = b - 1, 1 < b ? this.connection = null : (b = this.connection, a = a.ib, this.connection = null, !a || b && a !== b || a.unsubscribe()))
        } else this.connection = null
    };
    var lf = function(a, b) {
        this.source = a;
        this.lf = b;
        this.Ab = 0;
        this.dc = !1
    };
    x(lf, K);
    lf.create = K.create;
    lf.prototype.X = function(a) {
        return this.vc().subscribe(a)
    };
    lf.prototype.vc = function() {
        var a = this.fc;
        if (!a || a.C) this.fc = this.lf();
        return this.fc
    };
    lf.prototype.connect = function() {
        var a = this.ib;
        a || (this.dc = !1, a = this.ib = new H, a.add(this.source.subscribe(new mf(this.vc(), this))), a.closed && (this.ib = null, a = H.EMPTY));
        return a
    };
    lf.prototype.cf = function() {
        return hf()(this)
    };
    var pf, qf = lf.prototype;
    pf = {
        operator: {
            value: null
        },
        Ab: {
            value: 0,
            writable: !0
        },
        fc: {
            value: null,
            writable: !0
        },
        ib: {
            value: null,
            writable: !0
        },
        X: {
            value: qf.X
        },
        dc: {
            value: qf.dc,
            writable: !0
        },
        vc: {
            value: qf.vc
        },
        connect: {
            value: qf.connect
        },
        cf: {
            value: qf.cf
        }
    };
    var mf = function(a, b) {
        I.call(this);
        this.destination = a;
        this.kb = b
    };
    x(mf, I);
    mf.EMPTY = I.EMPTY;
    mf.create = I.create;
    mf.prototype.T = function(a) {
        this.ya();
        I.prototype.T.call(this, a)
    };
    mf.prototype.A = function() {
        this.kb.dc = !0;
        this.ya();
        I.prototype.A.call(this)
    };
    mf.prototype.ya = function() {
        var a = this.kb;
        if (a) {
            this.kb = null;
            var b = a.ib;
            a.Ab = 0;
            a.fc = null;
            a.ib = null;
            b && b.unsubscribe()
        }
    };

    function rf(a) {
        return function(b) {
            var c = "function" === typeof a ? a : function() {
                return a
            };
            var d = Object.create(b, pf);
            d.source = b;
            d.lf = c;
            return d
        }
    };

    function sf() {
        var a = D.apply(0, arguments);
        1 === a.length && kd(a[0]) && (a = a[0]);
        return function(b) {
            return O(b, new tf(a))
        }
    }
    var tf = function(a) {
        this.Pd = a
    };
    tf.prototype.call = function(a, b) {
        return b.subscribe(new uf(a, this.Pd))
    };
    var uf = function(a, b) {
        L.call(this, a);
        this.destination = a;
        this.Pd = b
    };
    x(uf, L);
    uf.EMPTY = L.EMPTY;
    uf.create = L.create;
    uf.prototype.Pa = function() {
        vf(this)
    };
    uf.prototype.P = function() {
        vf(this)
    };
    uf.prototype.T = function() {
        vf(this);
        this.unsubscribe()
    };
    uf.prototype.A = function() {
        vf(this);
        this.unsubscribe()
    };
    var vf = function(a) {
        var b = a.Pd.shift();
        if (b) {
            var c = new Gd(a);
            a.destination.add(c);
            Id(b, c)
        } else a.destination.complete()
    };
    var wf = function(a) {
        V.call(this);
        this.cd = a
    };
    x(wf, V);
    wf.create = V.create;
    wf.prototype.X = function(a) {
        var b = V.prototype.X.call(this, a);
        b && !b.closed && a.next(this.cd);
        return b
    };
    wf.prototype.next = function(a) {
        V.prototype.next.call(this, this.cd = a)
    };
    q.Object.defineProperties(wf.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                if (this.Hb) throw this.Oc;
                if (this.closed) throw new Se;
                return this.cd
            }
        }
    });
    var xf = function(a, b, c) {
        a = void 0 === a ? Infinity : a;
        b = void 0 === b ? Infinity : b;
        c = void 0 === c ? Nd : c;
        V.call(this);
        this.rh = c;
        this.cc = [];
        this.ke = !1;
        this.fe = 1 > a ? 1 : a;
        this.zf = 1 > b ? 1 : b;
        Infinity === b ? (this.ke = !0, this.next = this.Ig) : this.next = this.Kg
    };
    x(xf, V);
    xf.create = V.create;
    m = xf.prototype;
    m.Ig = function(a) {
        var b = this.cc;
        b.push(a);
        b.length > this.fe && b.shift();
        V.prototype.next.call(this, a)
    };
    m.Kg = function(a) {
        this.cc.push({
            time: this.ie(),
            value: a
        });
        this.le();
        V.prototype.next.call(this, a)
    };
    m.X = function(a) {
        var b = this.ke,
            c = b ? this.cc : this.le(),
            d = c.length;
        if (this.closed) throw new Se;
        if (this.C || this.Hb) var e = H.EMPTY;
        else this.Ea.push(a), e = new Re(this, a);
        if (b)
            for (var f = 0; f < d && !a.closed; f++) a.next(c[f]);
        else
            for (f = 0; f < d && !a.closed; f++) a.next(c[f].value);
        this.Hb ? a.error(this.Oc) : this.C && a.complete();
        return e
    };
    m.ie = function() {
        var a = this.rh;
        return a ? a.now() : Nd.now()
    };
    m.le = function() {
        for (var a = this.ie(), b = this.fe, c = this.zf, d = this.cc, e = d.length, f = 0; f < e && !(a - d[f].time < c);) f++;
        e > b && (f = Math.max(f, e - b));
        0 < f && d.splice(0, f);
        return d
    };

    function yf(a) {
        var b = new xf(a, void 0, void 0);
        return function(c) {
            return rf(function() {
                return b
            })(c)
        }
    };

    function zf() {
        var a = D.apply(0, arguments);
        if (1 === a.length)
            if (kd(a[0])) a = a[0];
            else return Zd(a[0]);
        return O(ae(a), new Af)
    }
    var Af = function() {};
    Af.prototype.call = function(a, b) {
        return b.subscribe(new Bf(a))
    };
    var Bf = function(a) {
        M.call(this, a);
        this.Ib = !1;
        this.Qa = [];
        this.Wb = []
    };
    x(Bf, M);
    Bf.EMPTY = M.EMPTY;
    Bf.create = M.create;
    m = Bf.prototype;
    m.o = function(a) {
        this.Qa.push(a)
    };
    m.A = function() {
        var a = this.Qa,
            b = a.length;
        if (0 === b) this.destination.complete();
        else {
            for (var c = 0; c < b && !this.Ib; c++) {
                var d = Id(a[c], new Hd(this, null, c));
                this.Wb && this.Wb.push(d);
                this.add(d)
            }
            this.Qa = null
        }
    };
    m.ua = function(a, b, c) {
        if (!this.Ib) {
            this.Ib = !0;
            for (var d = 0; d < this.Wb.length; d++)
                if (d !== c) {
                    var e = this.Wb[d];
                    e.unsubscribe();
                    this.remove(e)
                }
            this.Wb = null
        }
        this.destination.next(b)
    };
    m.P = function(a) {
        this.Ib = !0;
        M.prototype.P.call(this, a)
    };
    m.Pa = function(a) {
        this.Ib = !0;
        M.prototype.Pa.call(this, a)
    };

    function Cf() {
        var a = void 0 === a ? Infinity : a;
        return function(b) {
            return 0 >= a ? ve : O(b, function(c) {
                var d = this,
                    e = 0,
                    f = new H,
                    g, h = function() {
                        var k = !1;
                        g = c.subscribe({
                            next: function(l) {
                                return d.next(l)
                            },
                            error: function(l) {
                                return d.error(l)
                            },
                            complete: function() {
                                ++e < a ? g ? (g.unsubscribe(), g = null, h()) : k = !0 : d.complete()
                            }
                        });
                        k ? (g.unsubscribe(), g = null, h()) : f.add(g)
                    };
                h();
                return f
            })
        }
    };

    function Df() {
        return new V
    }

    function Ef() {
        return function(a) {
            return hf()(rf(Df)(a))
        }
    };
    (function() {
        function a(b) {
            this.message = b;
            this.name = "NotFoundError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    })();
    (function() {
        function a(b) {
            this.message = b;
            this.name = "SequenceError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    })();

    function W() {
        var a = D.apply(0, arguments),
            b = a[a.length - 1];
        return Rd(b) ? (a.pop(), function(c) {
            return me(a, c, b)
        }) : function(c) {
            return me(a, c)
        }
    };
    var Ff = 1,
        Gf, Hf = {};

    function If(a) {
        return a in Hf ? (delete Hf[a], !0) : !1
    }
    var Jf = function(a) {
            var b = Ff++;
            Hf[b] = !0;
            Gf || (Gf = Promise.resolve());
            Gf.then(function() {
                return If(b) && a()
            });
            return b
        },
        Kf = function(a) {
            If(a)
        };
    var Mf = function() {
            return ((null == Lf ? void 0 : Lf.setImmediate) || Jf).apply(null, v(D.apply(0, arguments)))
        },
        Lf = void 0;
    var Nf = function(a, b) {
        Md.call(this, a, b);
        this.da = a;
        this.Uc = b
    };
    x(Nf, Md);
    Nf.EMPTY = Md.EMPTY;
    Nf.prototype.Tb = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        if (null !== c && 0 < c) return Md.prototype.Tb.call(this, a, b, c);
        a.actions.push(this);
        return a.Lc || (a.Lc = Mf(a.flush.bind(a, void 0)))
    };
    Nf.prototype.Sb = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        if (null !== c && 0 < c || null === c && 0 < this.delay) return Md.prototype.Sb.call(this, a, b, c);
        0 === a.actions.length && (((null == Lf ? void 0 : Lf.clearImmediate) || Kf)(b), a.Lc = void 0)
    };
    var Of = function() {
        Qd.apply(this, arguments)
    };
    x(Of, Qd);
    Of.prototype.flush = function(a) {
        this.active = !0;
        this.Lc = void 0;
        var b = this.actions,
            c, d = -1;
        a = a || b.shift();
        var e = b.length;
        do
            if (c = a.execute(a.state, a.delay)) break; while (++d < e && (a = b.shift()));
        this.active = !1;
        if (c) {
            for (; ++d < e && (a = b.shift());) a.unsubscribe();
            throw c;
        }
    };
    var Pf = new Of(Nf);
    var Qf = function(a, b, c) {
        b = void 0 === b ? 0 : b;
        c = void 0 === c ? Pf : c;
        this.source = a;
        this.delayTime = b;
        this.da = c;
        0 > b && (this.delayTime = 0);
        Rd(c) || (this.da = Pf)
    };
    x(Qf, K);
    Qf.create = K.create;
    Qf.Tf = function(a) {
        return this.add(a.source.subscribe(a.Wd))
    };
    Qf.prototype.X = function(a) {
        return this.da.u(Qf.Tf, this.delayTime, {
            source: this.source,
            Wd: a
        })
    };

    function Rf() {
        var a = Yd;
        var b = void 0 === b ? 0 : b;
        return function(c) {
            return O(c, new Sf(a, b))
        }
    }
    var Sf = function(a, b) {
        this.da = a;
        this.delay = b
    };
    Sf.prototype.call = function(a, b) {
        return (new Qf(b, this.delay, this.da)).subscribe(a)
    };

    function X(a) {
        return function(b) {
            return O(b, new Tf(a))
        }
    }
    var Tf = function(a) {
        this.I = a
    };
    Tf.prototype.call = function(a, b) {
        return b.subscribe(new Uf(a, this.I))
    };
    var Uf = function(a, b) {
        L.call(this, a);
        this.destination = a;
        this.I = b;
        this.index = 0
    };
    x(Uf, L);
    Uf.EMPTY = L.EMPTY;
    Uf.create = L.create;
    m = Uf.prototype;
    m.o = function(a) {
        var b = this.index++;
        try {
            var c = this.I(a, b)
        } catch (d) {
            this.destination.error(d);
            return
        }(a = this.zc) && a.unsubscribe();
        a = new Gd(this);
        this.destination.add(a);
        this.zc = a;
        Id(c, a)
    };
    m.A = function() {
        var a = this.zc;
        a && !a.closed || L.prototype.A.call(this);
        this.unsubscribe()
    };
    m.ya = function() {
        this.zc = void 0
    };
    m.P = function() {
        this.zc = void 0;
        this.C && L.prototype.A.call(this)
    };
    m.ua = function(a) {
        this.destination.next(a)
    };

    function Vf(a, b) {
        b = void 0 === b ? !1 : b;
        return function(c) {
            return O(c, new Wf(a, b))
        }
    }
    var Wf = function(a, b) {
        this.pa = a;
        this.Fd = b
    };
    Wf.prototype.call = function(a, b) {
        return b.subscribe(new Xf(a, this.pa, this.Fd))
    };
    var Xf = function(a, b, c) {
        I.call(this, a);
        this.pa = b;
        this.Fd = c;
        this.index = 0
    };
    x(Xf, I);
    Xf.EMPTY = I.EMPTY;
    Xf.create = I.create;
    Xf.prototype.o = function(a) {
        var b = this.destination;
        try {
            var c = this.pa(a, this.index++)
        } catch (d) {
            b.error(d);
            return
        }
        b = this.destination;
        c ? b.next(a) : (this.Fd && b.next(a), b.complete())
    };

    function Yf() {};

    function Zf(a, b, c) {
        return function(d) {
            return O(d, new $f(a, b, c))
        }
    }
    var $f = function(a, b, c) {
        this.Jg = a;
        this.error = b;
        this.complete = c
    };
    $f.prototype.call = function(a, b) {
        return b.subscribe(new ag(a, this.Jg, this.error, this.complete))
    };
    var ag = function(a, b, c, d) {
        I.call(this, a);
        this.Yc = this.Zc = this.ad = Yf;
        this.Zc = c || Yf;
        this.Yc = d || Yf;
        ld(b) ? (this.xa = this, this.ad = b) : b && (this.xa = b, this.ad = b.next || Yf, this.Zc = b.error || Yf, this.Yc = b.complete || Yf)
    };
    x(ag, I);
    ag.EMPTY = I.EMPTY;
    ag.create = I.create;
    ag.prototype.o = function(a) {
        try {
            this.ad.call(this.xa, a)
        } catch (b) {
            this.destination.error(b);
            return
        }
        this.destination.next(a)
    };
    ag.prototype.T = function(a) {
        try {
            this.Zc.call(this.xa, a)
        } catch (b) {
            this.destination.error(b);
            return
        }
        this.destination.error(a)
    };
    ag.prototype.A = function() {
        try {
            this.Yc.call(this.xa)
        } catch (a) {
            this.destination.error(a);
            return
        }
        return this.destination.complete()
    };
    (function() {
        function a(b) {
            this.message = "Timeout has occurred";
            this.name = "TimeoutError";
            this.info = void 0 === b ? null : b;
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    })();

    function bg() {
        var a = D.apply(0, arguments);
        return function(b) {
            var c;
            "function" === typeof a[a.length - 1] && (c = a.pop());
            return O(b, new cg(a, c))
        }
    }
    var cg = function(a, b) {
        this.Qa = a;
        this.I = b
    };
    cg.prototype.call = function(a, b) {
        return b.subscribe(new dg(a, this.Qa, this.I))
    };
    var dg = function(a, b, c) {
        M.call(this, a);
        this.I = c;
        this.hb = [];
        a = b.length;
        this.values = Array(a);
        for (c = 0; c < a; c++) this.hb.push(c);
        for (c = 0; c < a; c++) this.add(Id(b[c], new Hd(this, void 0, c)))
    };
    x(dg, M);
    dg.EMPTY = M.EMPTY;
    dg.create = M.create;
    dg.prototype.ua = function(a, b, c) {
        this.values[c] = b;
        b = this.hb;
        0 < b.length && (c = b.indexOf(c), -1 !== c && b.splice(c, 1))
    };
    dg.prototype.P = function() {};
    dg.prototype.o = function(a) {
        0 === this.hb.length && (a = [a].concat(v(this.values)), this.I ? this.vf(a) : this.destination.next(a))
    };
    dg.prototype.vf = function(a) {
        try {
            var b = this.I.apply(this, a)
        } catch (c) {
            this.destination.error(c);
            return
        }
        this.destination.next(b)
    };
    var eg = {},
        fg = (eg["data-google-av-cxn"] = "_avicxn_", eg["data-google-av-cpmav"] = "_cvu_", eg["data-google-av-metadata"] = "_avm_", eg["data-google-av-adk"] = "_adk_", eg["data-google-av-btr"] = void 0, eg["data-google-av-override"] = void 0, eg["data-google-av-dm"] = void 0, eg["data-google-av-immediate"] = void 0, eg["data-google-av-aid"] = void 0, eg["data-google-av-naid"] = void 0, eg["data-google-av-inapp"] = void 0, eg["data-google-av-slift"] = void 0, eg["data-google-av-itpl"] = void 0, eg["data-google-av-ext-cxn"] = void 0, eg["data-google-av-rs"] =
            void 0, eg["data-google-av-flags"] = void 0, eg["data-google-av-turtlex"] = void 0, eg["data-google-av-ufs-integrator-metadata"] = void 0, eg["data-google-av-vattr"] = void 0, eg),
        gg = {},
        hg = (gg["data-google-av-adk"] = "googleAvAdk", gg["data-google-av-btr"] = "googleAvBtr", gg["data-google-av-cpmav"] = "googleAvCpmav", gg["data-google-av-dm"] = "googleAvDm", gg["data-google-av-ext-cxn"] = "googleAvExtCxn", gg["data-google-av-immediate"] = "googleAvImmediate", gg["data-google-av-inapp"] = "googleAvInapp", gg["data-google-av-itpl"] =
            "googleAvItpl", gg["data-google-av-metadata"] = "googleAvMetadata", gg["data-google-av-naid"] = "googleAvNaid", gg["data-google-av-override"] = "googleAvOverride", gg["data-google-av-rs"] = "googleAvRs", gg["data-google-av-slift"] = "googleAvSlift", gg["data-google-av-cxn"] = "googleAvCxn", gg["data-google-av-aid"] = void 0, gg["data-google-av-flags"] = "googleAvFlags", gg["data-google-av-turtlex"] = "googleAvTurtlex", gg["data-google-av-ufs-integrator-metadata"] = "googleAvUfsIntegratorMetadata", gg["data-google-av-vattr"] = "googleAvVattr",
            gg);

    function ig(a, b) {
        if (void 0 === a.j) return null;
        try {
            var c;
            var d = null != (c = a.j.getAttribute(b)) ? c : null;
            if (null !== d) return d
        } catch (g) {}
        try {
            var e = fg[b];
            if (e && (d = a.j[e], void 0 !== d)) return d
        } catch (g) {}
        try {
            var f = hg[b];
            if (f) return dd(a.j, f)
        } catch (g) {}
        return null
    }

    function jg(a) {
        return R(function(b) {
            return ig(b, a)
        })
    };

    function kg(a, b, c) {
        if (ld(c)) {
            var d = c;
            c = void 0
        }
        return d ? kg(a, b, c).h(R(function(e) {
            return kd(e) ? d.apply(null, v(e)) : d(e)
        })) : new K(function(e) {
            lg(a, b, function(f) {
                1 < arguments.length ? e.next(Array.prototype.slice.call(arguments)) : e.next(f)
            }, e, c)
        })
    }

    function lg(a, b, c, d, e) {
        if (a && "function" === typeof a.addEventListener && "function" === typeof a.removeEventListener) {
            a.addEventListener(b, c, e);
            var f = function() {
                return a.removeEventListener(b, c, e)
            }
        } else if (a && "function" === typeof a.Og && "function" === typeof a.Ng) a.Og(b, c), f = function() {
            return a.Ng(b, c)
        };
        else if (a && "function" === typeof a.addListener && "function" === typeof a.removeListener) a.addListener(b, c), f = function() {
            return a.removeListener(b, c)
        };
        else if (a && a.length)
            for (var g = 0, h = a.length; g < h; g++) lg(a[g], b,
                c, d, e);
        else throw new TypeError("N");
        d.add(f)
    };
    var mg = new K(Yf);
    var ng = function(a, b) {
        Md.call(this, a, b);
        this.da = a;
        this.Uc = b
    };
    x(ng, Md);
    ng.EMPTY = Md.EMPTY;
    ng.prototype.u = function(a, b) {
        b = void 0 === b ? 0 : b;
        if (0 < b) return Md.prototype.u.call(this, a, b);
        this.delay = b;
        this.state = a;
        this.da.flush(this);
        return this
    };
    ng.prototype.execute = function(a, b) {
        return 0 < b || this.closed ? Md.prototype.execute.call(this, a, b) : this.ge(a, b)
    };
    ng.prototype.Tb = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        return null !== c && 0 < c || null === c && 0 < this.delay ? Md.prototype.Tb.call(this, a, b, c) : a.flush(this)
    };
    var og = function() {
        Qd.apply(this, arguments)
    };
    x(og, Qd);
    var Yd = new og(ng);
    var pg = J(function(a) {
        return R(function(b) {
            return a.map(function(c) {
                return ig(b, c)
            })
        })
    }(["data-google-av-cxn", "data-google-av-turtlex"]), R(function(a) {
        var b = u(a);
        a = b.next().value;
        b = b.next().value;
        if (!a) {
            if (null !== b) return [];
            throw new Pa;
        }
        return a.split("|")
    }));
    var qg = function() {
        return J(ie(function(a) {
            return a.element.h(pg, $d(function() {
                return Q([""])
            })).h(R(function(b) {
                return {
                    wa: b,
                    pc: a
                }
            }))
        }), xe(function(a) {
            return a.wa.sort().join(";")
        }), R(function(a) {
            return a.pc
        }))
    };
    var rg = function() {
            var a = {};
            this.va = (a[3] = [], a[2] = [], a[1] = [], a);
            this.Jd = !1
        },
        tg = function(a, b, c) {
            var d = sg(a, c);
            a.va[c].push(b);
            d && 1 === a.va[c].length && a.flush()
        },
        sg = function(a, b) {
            return Object.keys(a.va).map(function(c) {
                return Number(c)
            }).filter(function(c) {
                return !isNaN(c) && c > b
            }).every(function(c) {
                return 0 === a.va[c].length
            })
        };
    rg.prototype.flush = function() {
        if (!this.Jd) {
            this.Jd = !0;
            try {
                for (; Object.values(this.va).some(function(a) {
                        return 0 < a.length
                    });) ug(this, 3), ug(this, 2), ug(this, 1)
            } catch (a) {
                throw Object.values(this.va).forEach(function(b) {
                    return void b.splice(0, b.length)
                }), a;
            } finally {
                this.Jd = !1
            }
        }
    };
    var ug = function(a, b) {
        for (; sg(a, b) && 0 < a.va[b].length;) a.va[b][0](), a.va[b].shift()
    };
    q.Object.defineProperties(rg.prototype, {
        ef: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return Object.values(this.va).some(function(a) {
                    return 0 < a.length
                })
            }
        }
    });

    function vg(a) {
        return function(b) {
            return b.h(wg(a, rf(new V)))
        }
    }

    function Y(a, b) {
        return function(c) {
            return c.h(wg(a, yf(b)))
        }
    }

    function wg(a, b) {
        function c(d) {
            return new K(function(e) {
                return d.subscribe(function(f) {
                    tg(a, function() {
                        return void e.next(f)
                    }, 3)
                }, function(f) {
                    tg(a, function() {
                        return void e.error(f)
                    }, 3)
                }, function() {
                    tg(a, function() {
                        return void e.complete()
                    }, 3)
                })
            })
        }
        return J(c, Rf(), b, hf(), c)
    };
    var Z = function(a) {
        this.value = a
    };
    Z.prototype.U = function(a) {
        return Q(this.value).h(Y(a, 1))
    };
    var xg = function(a) {
        this.value = a;
        this.Rd = new V
    };
    xg.prototype.release = function() {
        this.Rd.next();
        this.Rd.complete();
        this.value = void 0
    };
    q.Object.defineProperties(xg.prototype, {
        j: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.value
            }
        },
        released: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Rd
            }
        }
    });
    var zg = function() {
            return ie(function(a) {
                return Zd(yg(a)).h(vg(a.i))
            })
        },
        yg = function(a) {
            return a.document.querySelectorAll(".GoogleActiveViewElement,.GoogleActiveViewClass").map(function(b) {
                return new xg(b)
            })
        };

    function Ag(a) {
        var b = a.af,
            c = a.document.Pg;
        return gf(Q({}), c, b).h(R(function() {
            return a
        }))
    };

    function Bg() {
        return J(U(function(a) {
            return void 0 !== a
        }), R(function(a) {
            return a
        }))
    };

    function Cg() {
        return function(a) {
            var b = [];
            return a.h(U(function(c) {
                if (void 0 === c.j || b.some(function(d) {
                        return d.j === c.j
                    })) return !1;
                b.push(c);
                return !0
            }))
        }
    };

    function Dg(a, b) {
        b = void 0 === b ? ve : b;
        return gf(Ag(a), b).h(zg(), Cg(), Bg(), Y(a.i, 1))
    };
    var Eg = function(a) {
            this.key = a;
            this.defaultValue = !1;
            this.valueType = "boolean"
        },
        Fg = function(a) {
            this.key = a;
            this.defaultValue = 0;
            this.valueType = "number"
        };
    var Gg = new Eg("100006"),
        Hg = new Fg("45362137"),
        Ig = new Eg("45377435"),
        Jg = new Eg("45372163"),
        Kg = new Eg("45382077");
    var Lg = new Fg("45389692");

    function Mg(a, b) {
        return function(c) {
            return new K(function(d) {
                return c.subscribe(function(e) {
                    a.Ha(b, function() {
                        d.next(e)
                    })()
                }, function(e) {
                    a.Ha(b, function() {
                        d.error(e)
                    })()
                }, function() {
                    a.Ha(b, function() {
                        d.complete()
                    })()
                })
            })
        }
    };

    function Ng(a) {
        a = a.global;
        if ("undefined" === typeof a.__google_lidar_) return a.__google_lidar_ = 1, !1;
        a.__google_lidar_ = Number(a.__google_lidar_) + 1;
        var b = a.__google_lidar_adblocks_count_;
        if ("number" === typeof b && 0 < b && (a = a.__google_lidar_radf_, "function" === typeof a)) try {
            a()
        } catch (c) {}
        return !0
    }

    function Og(a) {
        var b = a.global;
        b.osdlfm = function() {
            return b.__google_lidar_radf_
        };
        if (void 0 !== b.__google_lidar_radf_) return ve;
        b.__google_lidar_adblocks_count_ = 1;
        var c = new V;
        b.__google_lidar_radf_ = function() {
            return void c.next(a)
        };
        return c.h(Mg(a.s, 743))
    };
    var Pg = function() {
            this.ze = {}
        },
        Qg = function(a, b) {
            a = a.ze[b.key];
            if ("proto" === b.valueType) {
                try {
                    var c = JSON.parse(a);
                    if (Array.isArray(c)) return c
                } catch (d) {}
                return b.defaultValue
            }
            return typeof a === typeof b.defaultValue ? a : b.defaultValue
        };
    var Rg = function() {
        this.ue = new Map
    };
    Rg.prototype.start = function(a, b, c, d) {
        var e = this;
        void 0 === this.Sd && (this.te = d, c = Ng(a), d = Og(a), d = Dg(a, d), this.Sd = (c ? ve : d.h(R(function(f) {
            return Object.freeze({
                Gb: bd(),
                element: (new Z(f)).U(a.i)
            })
        }), qg())).subscribe(function(f) {
            var g = Symbol();
            e.ue.set(g, f);
            f.element.h(Fe(1)).subscribe(function(h) {
                var k = ig(h, "data-google-av-flags"),
                    l = new Pg;
                if (null !== k) try {
                    var p = JSON.parse(k)[0];
                    k = "";
                    for (var t = 0; t < p.length; t++) k += String.fromCharCode(p.charCodeAt(t) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(t % 10));
                    l.ze = JSON.parse(k)
                } catch (ra) {}
                var n, w, A, y, C, G;
                p = {
                    Kf: null != (n = null == l ? void 0 : Qg(l, Gg)) ? n : !1,
                    cg: null != (w = null == l ? void 0 : Qg(l, Hg)) ? w : 0,
                    dg: null != (A = null == l ? void 0 : Qg(l, Ig)) ? A : !1,
                    dh: null != (y = null == l ? void 0 : Qg(l, Jg)) ? y : !1,
                    ih: null != (C = null == l ? void 0 : Qg(l, Kg)) ? C : !1,
                    Pf: null != (G = null == l ? void 0 : Qg(l, Lg)) ? G : 0
                };
                h = ig(h, "data-google-av-ufs-integrator-metadata");
                a: {
                    if (null !== h) try {
                        var N = ad(h);
                        break a
                    } catch (ra) {}
                    N = new $c
                }
                b(g, N, p)
            })
        }), c && this.lb())
    };
    Rg.prototype.lb = function() {
        var a, b;
        null == (a = this.Sd) || null == (b = a.unsubscribe) || b.call(a);
        this.Sd = void 0;
        var c;
        null == (c = this.te) || c.call(this);
        this.te = void 0
    };
    var Sg = function(a, b, c) {
        this.context = a;
        this.rb = b;
        this.Ye = c
    };
    Sg.prototype.ka = function(a) {
        var b, c = null != (b = null == a ? void 0 : a.fd) ? b : !1;
        b = !!this.rb.oh;
        return c && !b ? !1 : (void 0 === a || void 0 === a.jc || a.jc === this.Ye) && this.rb.Cb
    };
    Sg.prototype.N = function(a, b) {
        if (!this.ka(b)) throw new La;
        return new Tg(this.context, this.rb, this.Ye, a)
    };
    var Tg = function(a, b, c, d) {
        var e = this;
        this.rb = b;
        this.method = c;
        this.url = d;
        this.Bc = !0;
        this.Ff = a.Ad().subscribe(function() {
            e.sendNow()
        })
    };
    Tg.prototype.deactivate = function() {
        this.Bc = !1
    };
    Tg.prototype.sendNow = function() {
        if (this.Bc)
            if (this.Ff.unsubscribe(), this.rb.Cb) try {
                this.rb.ping(this.url), this.Bc = !1
            } catch (a) {} else this.Bc = !1
    };

    function Ug(a, b) {
        var c = !1;
        return new K(function(d) {
            var e = a.setTimeout(function() {
                c = !0;
                d.next(!0);
                d.complete()
            }, b);
            return function() {
                c || a.clearTimeout(e)
            }
        })
    };
    var Vg = function(a) {
        this.context = a;
        this.oh = !0
    };
    Vg.prototype.ping = function() {
        var a = this;
        return gf.apply(null, v(D.apply(0, arguments).map(function(b) {
            return Zd(a.context.global.fetch(b, {
                method: "GET",
                cache: "no-cache",
                keepalive: !0,
                mode: "no-cors"
            })).h(R(function(c) {
                return 200 === c.status
            }))
        }))).h(Oe(function(b) {
            return b
        }), $e())
    };
    q.Object.defineProperties(Vg.prototype, {
        Cb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !Wg(this.context) && !!this.context.global.fetch
            }
        }
    });

    function Xg(a) {
        a = a.global;
        if (a.PendingGetBeacon) return a.PendingGetBeacon
    }
    var $g = function(a) {
            this.context = a;
            if (void 0 === Yg) {
                var b, c, d = null == (b = a.global) ? void 0 : null == (c = b.document) ? void 0 : c.createElement("meta");
                try {
                    d && (d.httpEquiv = "origin-trial", d.content = "A/6hmwx8DpHud613fSYYa2C2T61iC513V4BYG/pBH4zs5sGsUc9RgaPKhfk3JhHF30N/9/NntWzEq28kkrMxpgQAAABweyJvcmlnaW4iOiJodHRwczovL2FkLmRvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUGVuZGluZ0JlYWNvbkFQSSIsImV4cGlyeSI6MTY3ODIzMzU5OSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", a.global.document.head.append(d))
                } catch (e) {}
                Yg = d
            }
            Zg = !0
        },
        Yg;
    $g.prototype.ka = function(a) {
        return Zg && !Wg(this.context) && void 0 !== Xg(this.context) && (void 0 === a || void 0 === a.fd || !a.fd) && (void 0 === a || void 0 === a.jc || "GET" === a.jc)
    };
    $g.prototype.N = function(a, b) {
        if (!this.ka(b)) throw new La;
        return new ah(this.context, a)
    };
    var Zg = !1,
        ah = function(a, b) {
            this.context = a;
            this.Zd = b;
            a = Xg(this.context);
            if (void 0 === a) throw Error();
            this.de = new a(bh(this), {
                backgroundTimeout: 0
            })
        },
        bh = function(a) {
            a = a.Zd;
            return ("&" === a.slice(-1)[0] ? a : a + "&") + "pbapi=1"
        };
    ah.prototype.deactivate = function() {
        this.de.deactivate()
    };
    ah.prototype.sendNow = function() {
        this.de.sendNow()
    };
    q.Object.defineProperties(ah.prototype, {
        url: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Zd
            },
            set: function(a) {
                this.Zd = a;
                this.de.setURL(bh(this))
            }
        },
        method: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return "GET"
            },
            set: function(a) {
                if ("GET" !== a) throw new La;
            }
        }
    });

    function ch(a) {
        var b = dh(a);
        return null === b ? new Z(null) : b.h(R(function(c) {
            c = c.vb();
            if (Tb) c = Ca.btoa(c);
            else {
                for (var d = [], e = 0, f = 0; f < c.length; f++) {
                    var g = c.charCodeAt(f);
                    if (255 < g) throw Error("m");
                    d[e++] = g
                }
                c = Ub(d)
            }
            return c
        }), Fe(1), Y(a.i, 1))
    };

    function eh(a) {
        function b(c) {
            return "boolean" === typeof c || "string" === typeof c || "number" === typeof c || void 0 === c || null === c
        }
        return b(a) ? !0 : Array.isArray(a) ? a.every(b) : "object" === typeof a ? Object.keys(a).every(function(c) {
            return "string" === typeof c
        }) && Object.values(a).every(function(c) {
            return Array.isArray(c) ? c.every(b) : b(c)
        }) : !1
    }

    function fh(a) {
        return eh(a) ? a : String(a)
    };

    function gh(a) {
        var b, c, d;
        return !!a && "boolean" === typeof a.active && "function" === typeof(null == (b = a.clock) ? void 0 : b.now) && void 0 !== (null == (c = a.clock) ? void 0 : c.timeline) && !(null == (d = a.D) || !d.timestamp) && "function" === typeof a.Z && "function" === typeof a.aa && "function" === typeof a.ha && "function" === typeof a.map && "function" === typeof a.ma
    };

    function hh(a, b) {
        return new K(function(c) {
            var d = !1,
                e = Array(b.length);
            e.fill(void 0);
            var f = new Set,
                g = new Set,
                h = function(t, n) {
                    a.ef ? (e[n] = t, f.add(n), d || (d = !0, tg(a, function() {
                        d = !1;
                        c.next(wb(e))
                    }, 1))) : c.error(new Qa(n))
                },
                k = function(t, n) {
                    g.add(n);
                    f.add(n);
                    tg(a, function() {
                        c.error(t)
                    }, 1)
                },
                l = function(t) {
                    g.add(t);
                    tg(a, function() {
                        g.size === b.length && c.complete()
                    }, 1)
                },
                p = b.map(function(t, n) {
                    return t.subscribe(function(w) {
                        return void h(w, n)
                    }, function(w) {
                        return void k(w, n)
                    }, function() {
                        return void l(n)
                    })
                });
            return function() {
                p.forEach(function(t) {
                    return void t.unsubscribe()
                })
            }
        })
    };

    function ih(a, b, c) {
        function d() {
            if (b.Va) {
                var C = b.Va,
                    G = C.next;
                var N = {
                    Oh: c,
                    ai: e,
                    bi: Object.assign({}, f),
                    Th: g,
                    errorMessage: h,
                    Rh: k
                };
                N = {
                    jh: 1,
                    kh: 0,
                    lh: 0,
                    timestamp: Xa(b.l.now(), new Wa(0, b.l.timeline)),
                    Ac: b.Ac,
                    messageType: 2,
                    Ph: N
                };
                G.call(C, N)
            }
        }
        for (var e = Object.keys(a), f = {}, g = !1, h = null, k = null, l = {}, p = new Set, t = [], n = [], w = {}, A = u(e), y = A.next(); !y.done; w = {
                S: w.S
            }, y = A.next()) w.S = y.value, y = a[w.S], y instanceof Z ? (l[w.S] = y.value, p.add(w.S), f[String(w.S)] = fh(y.value)) : (y = y.h(S(function(C, G) {
                return gh(C) || gh(G) ? !1 : C === G
            }),
            R(function(C) {
                return function(G) {
                    f[String(C.S)] = fh(G);
                    d();
                    var N = {};
                    return N[C.S] = G, N
                }
            }(w)), $d(function(C) {
                return function(G) {
                    if (G instanceof Qa) throw new Sa(String(C.S));
                    throw G;
                }
            }(w)), Zf(function(C) {
                return function() {
                    p.add(C.S)
                }
            }(w), function(C) {
                return function(G) {
                    k = String(C.S);
                    h = String(G);
                    d()
                }
            }(w), function(C) {
                return function() {
                    p.has(C.S) || (g = !0, d())
                }
            }(w))), n.push(w.S), t.push(y));
        (a = 0 < Object.keys(f).length) && d();
        w = hh(b.i, t).h($d(function(C) {
            if (C instanceof Qa) throw new Ra(String(n[C.og]));
            throw C;
        }), R(function(C) {
            return Object.freeze(Object.assign.apply(Object, [{}, l].concat(v(C))))
        }));
        return (t = 0 < t.length) && a ? gf(Q(Object.freeze(l)), w) : t ? w : Q(Object.freeze(l))
    };

    function jh(a, b, c, d) {
        var e = kh(lh(kh(mh, nh), oh), ph, qh);
        return a.s.Ha.bind(a.s)(733, function() {
            function f() {
                if (a.Va) {
                    var l = a.Va,
                        p = l.next;
                    var t = {
                        Vh: [].concat(v(h.values())),
                        Sh: k
                    };
                    t = {
                        jh: 1,
                        kh: 0,
                        lh: 0,
                        timestamp: Xa(a.l.now(), new Wa(0, a.l.timeline)),
                        Ac: a.Ac,
                        messageType: 1,
                        Uh: t
                    };
                    p.call(l, t)
                }
            }
            var g = {},
                h = new Set,
                k = !1;
            try {
                return b.h($d(function(l) {
                    d(Object.assign({}, g, {
                        error: l
                    }));
                    return ve
                }), Zf(function() {}, function() {}, function() {
                    k = !0;
                    f()
                }), ie(function(l) {
                    h.add(l.Gb);
                    f();
                    try {
                        var p = c(a, l)
                    } catch (n) {
                        return d(Object.assign({},
                            g, {
                                error: n instanceof Error ? n : String(n)
                            })), ve
                    }
                    var t = {};
                    return ih(p, a, l.Gb).h(Zf(function(n) {
                        t = n
                    }), yf(1), hf()).h(e, $d(function(n) {
                        d(Object.assign({}, t, {
                            error: n
                        }));
                        return ve
                    }), Ne(void 0), R(function() {
                        h.delete(l.Gb) && f();
                        return !0
                    }))
                })).h(df(function(l) {
                    return l + 1
                }, 0), $d(function(l) {
                    d(Object.assign({}, g, {
                        error: l
                    }));
                    return ve
                }))
            } catch (l) {
                return d(Object.assign({}, g, {
                    error: l
                })), ve
            }
        })()
    };

    function rh(a, b) {
        return J(X(function(c) {
            var d = a(c),
                e = b(c),
                f = {};
            return d && e && f ? new K(function(g) {
                e(d, f, function(h) {
                    g.next(Object.assign({}, c, {
                        If: h
                    }));
                    g.complete()
                });
                return function() {}
            }) : mg
        }), U(function(c) {
            return c.If
        }))
    };
    var ph = J(U(function(a) {
        var b = a.H,
            c = a.kc,
            d = a.Tc,
            e = a.eb,
            f = a.Za,
            g = a.Bb;
        return void 0 !== a.Wa && void 0 !== g && void 0 !== b && void 0 !== c && void 0 !== d && (!f || void 0 !== e)
    }), Vf(function(a) {
        return !(!1 === a.Pe && void 0 !== a.qd)
    }, !1), U(function(a) {
        return !0 === a.Pe
    }), rh(function(a) {
        return a.Bb
    }, function(a) {
        return a.Wa
    }), R(function(a) {
        a.Za ? a.eb({
            eventType: "active-view-begin-to-render",
            eventData: "",
            destination: ["buyer"]
        }) : a.Tc(a.kc, a).forEach(function(b) {
            a.H.N(b).sendNow()
        })
    }), Fe(1), Ue());

    function sh(a) {
        var b = new Map;
        if ("object" !== typeof a || null === a) return b;
        Object.values(a).forEach(function(c) {
            c && "function" === typeof c.aa && (b.has(c.clock.timeline) || b.set(c.clock.timeline, c.clock.now()))
        });
        return b
    };

    function th(a, b) {
        var c = uh,
            d = vh,
            e = wh;
        b = void 0 === b ? .01 : b;
        return function(f) {
            0 < b && Math.random() <= b && (a.global.HTMLFencedFrameElement && a.global.fence && "function" === typeof a.global.fence.reportEvent && a.global.fence.reportEvent({
                eventType: "active-view-error",
                eventData: "",
                destination: ["buyer"]
            }), f = Object.assign({}, f, {
                errorMessage: f.error instanceof Error && f.error.message ? f.error.message : String(f.error),
                xe: f.error instanceof Error && f.error.stack ? String(f.error.stack) : null,
                Vf: f.error instanceof Error && f.error.name ?
                    String(f.error.name) : null,
                Uf: String(a.s.pf)
            }), d(Object.assign({}, f, {
                ca: function() {
                    return function(g) {
                        try {
                            return e(Object.assign({}, g))
                        } catch (h) {
                            return {}
                        }
                    }
                }(),
                wa: [c]
            }), sh(f)).forEach(function(g) {
                a.H.N(g).sendNow()
            }))
        }
    };
    var qh = J(R(function(a) {
        var b = a.H,
            c = a.bg;
        if (void 0 === b || void 0 === c) return !1;
        if (void 0 !== a.qd) return !0;
        if (null === c) return !1;
        for (a = 0; a < c; a++) b.N("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=extra&rnd=" + Math.floor(1E7 * Math.random())).sendNow();
        return !0
    }), Vf(function(a) {
        return !a
    }), Ue());
    var wh = function(a) {
        return {
            id: a.Ic,
            mcvt: a.Nb,
            p: a.qc,
            asp: a.Kh,
            mtos: a.Ob,
            tos: a.Yb,
            v: a.Hf,
            bin: a.Gf,
            avms: a.Xe,
            bs: a.pe,
            mc: a.Ue,
            "if": a.Of,
            vu: a.Rf,
            app: a.Ma,
            mse: a.Nd,
            mtop: a.Od,
            itpl: a.Gd,
            adk: a.ed,
            exk: a.Mh,
            rs: a.Ga,
            la: a.Se,
            cr: a.Hd,
            uach: a.ae,
            vs: a.Sc,
            r: a.Jc,
            pay: a.kg,
            rst: a.Bf,
            rpt: a.Af,
            isd: a.ng,
            lsd: a.yg,
            context: a.Uf,
            msg: a.errorMessage,
            stack: a.xe,
            name: a.Vf,
            ec: a.lg,
            sfr: a.Vd,
            met: a.Eb,
            wmsd: a.ce,
            pv: a.Xh,
            epv: a.Qh,
            pbe: a.Le,
            vae: a.Me,
            spb: a.mf
        }
    };

    function kh() {
        var a = D.apply(0, arguments);
        return function(b) {
            var c = b.h(yf(1), hf());
            b = a.map(function(d) {
                return c.h(d, Ne(!0))
            });
            return P(b).h(Fe(1), Ue())
        }
    };

    function lh() {
        var a = D.apply(0, arguments);
        return function(b) {
            var c = b.h(yf(1), hf());
            b = a.map(function(d) {
                return c.h(d, Ne(!0))
            });
            return gf.apply(null, v(b)).h(Fe(1), Ue())
        }
    };
    var nh = function(a) {
        var b = [];
        return a.h(R(function(c) {
            var d = c.H,
                e = c.eg,
                f = c.Yb,
                g = c.qh,
                h = c.ca,
                k = c.ph,
                l = c.Pc,
                p = c.xb,
                t = c.be,
                n = c.Ge,
                w = c.Le,
                A = c.mf;
            if (!c.wd || !n || void 0 === c.Ob || void 0 === f || void 0 === g || void 0 === h || void 0 === k || void 0 === p || void 0 === d) return !1;
            if (c.Za) {
                if (void 0 === l) return !1;
                g = c.eb;
                if (!g) return !1;
                g({
                    eventType: "active-view-time-on-screen",
                    eventData: "",
                    destination: ["buyer"]
                });
                return !0
            }
            if (!w && !l) return !1;
            f = sh(c);
            var y;
            t = null != (y = null == t ? void 0 : t.ia(f).value) ? y : !1;
            c = p(Object.assign({}, c, {
                Ic: k,
                Sc: t ?
                    4 : 3,
                Jc: null != l ? l : "u",
                ca: h,
                wa: g
            }), f);
            if (w) {
                for (; b.length > g.length;) w = void 0, null == (w = b.shift()) || w.deactivate();
                c.forEach(function(C, G) {
                    G >= b.length ? b.push(d.N(C)) : b[G].url = C
                });
                return A && e && void 0 !== l ? (c.forEach(function(C) {
                    e.N(C).sendNow()
                }), !0) : void 0 !== l
            }
            return A && e && void 0 !== l ? (c.forEach(function(C) {
                e.N(C).sendNow()
            }), !0) : void 0 !== l ? (c.forEach(function(C) {
                d.N(C).sendNow()
            }), !0) : !1
        }), Vf(function(c) {
            return !c
        }), Ue())
    };

    function xh(a) {
        return function(b) {
            return b.h(R(function(c) {
                a.ef || db("Assertion on queued Observable output failed");
                return c
            }))
        }
    };

    function yh(a) {
        return function(b) {
            return new K(function(c) {
                var d = !1,
                    e = b.h(xh(a)).subscribe(function(f) {
                        d = !0;
                        c.next(f)
                    }, c.error.bind(c), c.complete.bind(c));
                tg(a, function() {
                    d || c.next(null)
                }, 3);
                return e
            })
        }
    };

    function zh(a, b) {
        return function(c) {
            return c.h(X(function(d) {
                return new K(function(e) {
                    function f() {
                        h.disconnect();
                        k.unsubscribe()
                    }
                    var g = a.MutationObserver;
                    if (g && void 0 !== d.j) {
                        var h = new g(function(l) {
                            e.next(l)
                        });
                        h.observe(d.j, b);
                        var k = d.released.subscribe(f);
                        return f
                    }
                })
            }))
        }
    };
    var Ah = {
        Jh: 0,
        Ah: 1,
        Ch: 2,
        Bh: 3,
        0: "UNKNOWN",
        1: "DEFER_MEASUREMENT",
        2: "DO_NOT_DEFER_MEASUREMENT",
        3: "DEFER_MEASUREMENT_AND_PING"
    };

    function Bh(a, b) {
        var c = b.h(zh(a, {
            attributes: !0
        }), Y(a.i, 1));
        return P([b, c.h(Y(a.i, 1), yh(a.i))]).h(R(function(d) {
            return u(d).next().value
        }), jg("data-google-av-dm"), R(Ch))
    }

    function Ch(a) {
        return a && a in Ah ? Number(a) : 2
    };

    function Dh(a) {
        if (3 === a.Cg) return null;
        if (void 0 !== a.Pc) {
            var b = !1 === a.Nf ? "n" : !1 === a.wd && a.Pc ? a.Pc : null;
            if (null !== b) return b
        }
        return a.tc instanceof Ja ? "msf" : a.kd instanceof Ka ? "c" : !1 === a.Lf ? "pv" : a.tc || a.kd ? "x" : null
    }
    var oh = J(U(function(a) {
            return void 0 !== a.Kb && void 0 !== a.ca && void 0 !== a.xb && void 0 !== a.xc && void 0 !== a.H
        }), U(function(a) {
            return null !== Dh(a)
        }), rh(function(a) {
            return a.hc
        }, function(a) {
            return a.Wa
        }), R(function(a) {
            if (a.Za) {
                var b = a.eb;
                b && b({
                    eventType: "active-view-unmeasurable",
                    eventData: "",
                    destination: ["buyer"]
                })
            } else {
                var c = void 0,
                    d = Dh(a);
                if ("x" === d) {
                    var e, f = null != (e = a.tc) ? e : a.kd;
                    f && (b = f.stack, c = f.message)
                }
                a.xb(Object.assign({}, a, {
                    wa: a.Kb,
                    ca: a.ca,
                    Ic: a.xc,
                    Sc: 2,
                    Jc: d,
                    errorMessage: c,
                    xe: b
                }), sh(a)).forEach(function(g) {
                    a.H.N(g).sendNow()
                })
            }
        }),
        Fe(1), Ue());

    function Eh(a, b) {
        return "string" === typeof a ? encodeURIComponent(a) : "number" === typeof a ? String(a) : Array.isArray(a) ? a.map(function(c) {
            return Eh(c, b)
        }).join(",") : a instanceof Wa ? a.toString() : a && "function" === typeof a.aa ? Eh(a.ia(b).value, b) : !0 === a ? "1" : !1 === a ? "0" : void 0 === a || null === a ? null : [a.top, a.left, a.top + a.height, a.left + a.width].join()
    }

    function Fh(a, b) {
        a = Object.entries(a).map(function(c) {
            var d = u(c);
            c = d.next().value;
            d = d.next().value;
            d = Eh(d, b);
            return null === d ? "" : c + "=" + d
        }).filter(function(c) {
            return "" !== c
        });
        return a.length ? a.join("&") : ""
    };

    function vh(a, b) {
        var c = a.ca(a),
            d = Fh(c, b);
        return d ? tb(a.wa, function(e) {
            e = 0 <= e.indexOf("?") ? e : e + "?";
            e = 0 <= "?&".indexOf(e.slice(-1)) ? e : e + "&";
            return e + d
        }) : a.wa
    };

    function Gh(a, b) {
        return tb(a, function(c) {
            if ("string" === typeof b.ae) {
                var d = "&" + Fh({
                    uach: b.ae
                }, new Map);
                return "&adurl=" == c.substring(c.length - 7) ? c.substring(0, c.length - 7) + d + "&adurl=" : c + d
            }
            return c
        })
    };
    var mh = J(U(function(a) {
        return void 0 !== a.ca && void 0 !== a.Kb && void 0 !== a.xb && void 0 !== a.xc && void 0 !== a.qf && void 0 !== a.H
    }), Vf(function(a) {
        return void 0 === a.qd
    }), R(function(a) {
        return Object.assign({}, a, {
            Yd: sh(a)
        })
    }), U(function(a) {
        var b = a.be,
            c = a.Yd,
            d;
        return !!a.Ge && (null != (d = null == b ? void 0 : b.ia(c).value) ? d : !1)
    }), rh(function(a) {
        return a.ic
    }, function(a) {
        return a.Wa
    }), R(function(a) {
        var b = a.H;
        if (a.Za) {
            var c = a.eb;
            if (!c) return !1;
            c({
                eventType: "active-view-viewable",
                eventData: "",
                destination: ["buyer"]
            });
            return !0
        }
        c =
            a.xb(Object.assign({}, a, {
                wa: a.Kb,
                ca: a.ca,
                Ic: a.xc,
                Sc: 4,
                Jc: "v"
            }), a.Yd);
        var d = a.ld;
        d && 0 < d.length && a.Tc && a.Tc(d, a).forEach(function(e) {
            b.N(e).sendNow()
        });
        c.forEach(function(e) {
            b.N(e).sendNow()
        });
        2 === a.Me && a.Cc && a.xb(Object.assign({}, a, {
            wa: a.Kb,
            ca: a.ca,
            Ic: a.qf,
            Sc: 4,
            Jc: "v"
        }), a.Yd).forEach(function(e) {
            b.N(e, {
                fd: a.Cc
            }).sendNow()
        });
        return !0
    }), Vf(function(a) {
        return !a
    }), Ue());
    var Hh = function(a, b) {
        this.a = a;
        this.b = b;
        if (a.clock.timeline !== b.clock.timeline) throw Error();
    };
    Hh.prototype.Z = function(a) {
        return a instanceof Hh ? this.a.Z(a.a) && this.b.Z(a.b) : !1
    };
    Hh.prototype.ha = function(a) {
        var b = this.a.ha(a).value,
            c = this.b.ha(a).value;
        return {
            timestamp: a,
            value: [b, c]
        }
    };
    q.Object.defineProperties(Hh.prototype, {
        active: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.a.active || this.b.active
            }
        },
        clock: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.a.clock
            }
        },
        D: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a = this.a.D.timestamp.maximum(this.b.D.timestamp),
                    b = this.a.D.timestamp.equals(a) ? this.a.D.value : this.a.ha(a).value,
                    c = this.b.D.timestamp.equals(a) ? this.b.D.value : this.b.ha(a).value;
                return {
                    timestamp: a,
                    value: [b, c]
                }
            }
        }
    });
    var Ih = function(a, b) {
        this.input = a;
        this.Fc = b;
        this.D = {
            timestamp: this.input.D.timestamp,
            value: this.Fc(this.input.D.value)
        }
    };
    Ih.prototype.Z = function(a) {
        return a instanceof Ih ? this.input.Z(a.input) && this.Fc === a.Fc : !1
    };
    Ih.prototype.ha = function(a) {
        a = this.input.ha(a);
        return {
            timestamp: a.timestamp,
            value: this.Fc(a.value)
        }
    };
    q.Object.defineProperties(Ih.prototype, {
        active: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.input.active
            }
        },
        clock: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.input.clock
            }
        }
    });

    function Jh(a, b, c) {
        c = void 0 === c ? function(d, e) {
            return d === e
        } : c;
        return a.timestamp.equals(b.timestamp) && c(a.value, b.value)
    };
    var Kh = function(a, b, c) {
        this.clock = a;
        this.D = b;
        this.active = c
    };
    Kh.prototype.Z = function(a) {
        return a instanceof Kh ? this.active === a.active && this.clock.timeline === a.clock.timeline && Jh(this.D, a.D) : !1
    };
    Kh.prototype.ha = function(a) {
        return {
            timestamp: a,
            value: this.D.value + (this.active ? Xa(a, this.D.timestamp) : 0)
        }
    };
    var Lh = function() {};
    Lh.prototype.aa = function() {
        return this.ha(this.clock.now())
    };
    Lh.prototype.ia = function(a) {
        var b;
        a = null != (b = a.get(this.clock.timeline)) ? b : this.clock.now();
        return this.ha(a)
    };
    Lh.prototype.map = function(a) {
        return new Mh(this, a)
    };
    Lh.prototype.ma = function(a) {
        return new Nh(this, a)
    };
    var Nh = function() {
        Hh.apply(this, arguments);
        this.map = Lh.prototype.map;
        this.ma = Lh.prototype.ma;
        this.aa = Lh.prototype.aa;
        this.ia = Lh.prototype.ia
    };
    x(Nh, Hh);
    var Oh = function() {
        Kh.apply(this, arguments);
        this.map = Lh.prototype.map;
        this.ma = Lh.prototype.ma;
        this.aa = Lh.prototype.aa;
        this.ia = Lh.prototype.ia
    };
    x(Oh, Kh);
    var Mh = function() {
        Ih.apply(this, arguments);
        this.map = Lh.prototype.map;
        this.ma = Lh.prototype.ma;
        this.aa = Lh.prototype.aa;
        this.ia = Lh.prototype.ia
    };
    x(Mh, Ih);
    var Ph = function(a, b) {
        this.D = b;
        this.aa = Lh.prototype.aa;
        this.ia = Lh.prototype.ia;
        this.map = Lh.prototype.map;
        this.ma = Lh.prototype.ma;
        this.clock = a
    };
    Ph.prototype.Z = function(a) {
        return a.active
    };
    Ph.prototype.ha = function() {
        return this.D
    };
    q.Object.defineProperties(Ph.prototype, {
        active: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !1
            }
        }
    });
    var Qh = {
        left: 0,
        top: 0,
        width: 0,
        height: 0
    };

    function Rh(a, b) {
        return a.left === b.left && a.top === b.top && a.width === b.width && a.height === b.height
    }

    function Sh(a, b) {
        return {
            left: Math.max(a.left, b.left),
            top: Math.max(a.top, b.top),
            width: Math.max(0, Math.min(a.left + a.width, b.left + b.width) - Math.max(a.left, b.left)),
            height: Math.max(0, Math.min(a.top + a.height, b.top + b.height) - Math.max(a.top, b.top))
        }
    }

    function Th(a, b) {
        return {
            left: Math.round(a.left + b.x),
            top: Math.round(a.top + b.y),
            width: a.width,
            height: a.height
        }
    };

    function Uh(a, b, c, d) {
        var e = Object.keys(c).map(function(h) {
                return h
            }),
            f = e.filter(function(h) {
                var k = c[h];
                h = d[h];
                return k instanceof Z && h instanceof Z && k.value === h.value
            }),
            g = f.reduce(function(h, k) {
                var l = {};
                return Object.assign({}, h, (l[k] = c[k], l))
            }, {});
        return e.reduce(function(h, k) {
            if (0 <= f.indexOf(k)) return h;
            var l = {};
            return Object.assign({}, h, (l[k] = b.h(X(function(p) {
                return (p = p ? c[k] : d[k]) && (p instanceof K || "function" === typeof p.ob && "function" === typeof p.subscribe) ? p : p.U(a)
            })), l))
        }, g)
    };

    function Vh(a) {
        return J(R(function() {
            return !0
        }), W(!1), Y(a, 1))
    };
    var Wh = {
        yh: "asmreq",
        zh: "asmres"
    };
    var Xh = function(a) {
        Yc.call(this, a)
    };
    x(Xh, Yc);
    Xh.prototype.gf = function(a) {
        tc(this, 1, a)
    };
    var wc = function(a) {
        Yc.call(this, a)
    };
    x(wc, Yc);
    var Yh = function(a) {
        Yc.call(this, a)
    };
    x(Yh, Yc);
    Yh.prototype.gf = function(a) {
        tc(this, 1, a)
    };
    var Zh = Zc(Yh);

    function $h(a, b) {
        var c = void 0 === c ? ai(a) : c;
        var d = new MessageChannel;
        b = b.h(R(function(f) {
            return Number(f)
        }), U(function(f) {
            return !isNaN(f) && 0 !== f
        }), Zf(function(f) {
            var g = new Xh;
            g.gf(f);
            f = {
                type: "asmreq",
                payload: g.vb()
            };
            c.postMessage(f, "*", [d.port2])
        }), Fe(1));
        var e = bi(a, d.port1).h(U(function(f) {
                return "object" === typeof f.data
            }), R(function(f) {
                var g = f.data,
                    h = Object.values(Wh).includes(g.type);
                g = "string" === typeof g.payload;
                if (!h || !g || "asmres" !== f.data.type) return null;
                try {
                    return Zh(f.data.payload)
                } catch (k) {
                    return null
                }
            }),
            U(function(f) {
                return null !== f
            }), R(function(f) {
                return f
            }));
        return b.h(X(function(f) {
            return Q(f).h(fe(e))
        }), U(function(f) {
            var g = u(f);
            f = g.next().value;
            g = g.next().value;
            return null != rc(g, 1) ? Ac(rc(g, 1), 0) === f : !1
        }), R(function(f) {
            f = u(f);
            f.next();
            return f.next().value
        }), vg(a.i))
    };

    function ci(a, b, c) {
        var d = b.Mb.h(Fe(1), X(function() {
            return $h(a, c)
        }), U(function(f) {
            var g = rc(f, 2);
            return Ac(null == g ? g : !!g, !1) && void 0 !== vc(f, wc, !1) && null != rc(f, 4) && null != rc(f, 5)
        }), Fe(1), vg(a.i));
        b = d.h(R(function(f) {
            return {
                x: Bc(yc(f), 2),
                y: Bc(yc(f), 1)
            }
        }), S(function(f, g) {
            return f.x === g.x && f.y === g.y
        }), Y(a.i, 1));
        var e = d.h(R(function(f) {
            return Bc(f, 4)
        }), Y(a.i, 1));
        d = d.h(R(function(f) {
            return Bc(f, 5)
        }), Y(a.i, 1));
        return {
            ng: e,
            Df: b,
            yg: d
        }
    };

    function di(a, b) {
        return b.Mb.h(Fe(1), R(function() {
            return a.l.now().round()
        }))
    };

    function ei(a, b) {
        var c = a.Ad().h(R(function() {
            return "b"
        }));
        return zf(b, c).h(Fe(1), Y(a.i, 1))
    };

    function fi(a, b) {
        return b.h(R(function(c) {
            return new Ph(a.l, {
                timestamp: a.l.now(),
                value: c
            })
        }))
    };

    function gi(a) {
        var b = Math.pow(10, 2);
        return Math.round(a * b) / b
    };
    var hi = R(function(a) {
        return [a.value.J.width, a.value.J.height]
    });
    var ji = {
        R: "ns",
        V: Qh,
        J: Qh,
        O: new V,
        K: "ns",
        F: Qh,
        M: Qh,
        W: {
            x: 0,
            y: 0
        }
    };

    function ki(a, b) {
        return Rh(a.J, b.J) && Rh(a.F, b.F) && Rh(a.V, b.V) && Rh(a.M, b.M) && a.K === b.K && a.O === b.O && a.R === b.R && a.W.x === b.W.x && a.W.y === b.W.y
    };

    function li(a) {
        return function(b) {
            var c;
            return b.h(Zf(function(d) {
                return void(c = d.timestamp)
            }), R(function(d) {
                return d.value
            }), a, R(function(d) {
                return {
                    timestamp: c,
                    value: d
                }
            }))
        }
    };
    var mi = function(a) {
            return a.M.width * a.M.height / (a.F.width * a.F.height)
        },
        ni = li(J(R(function(a) {
            var b;
            return null != (b = a.sc) ? b : mi(a)
        }), R(function(a) {
            return isFinite(a) ? a : 0
        }))),
        oi = li(J(R(function(a) {
            var b;
            return null != (b = a.sc) ? b : mi(a)
        }), R(function(a) {
            return isFinite(a) ? a : -1
        })));

    function pi(a, b) {
        return 1 <= a ? !0 : 0 >= a ? !1 : a >= b
    };

    function qi(a) {
        return function(b) {
            return b.h(bg(a), R(function(c) {
                var d = u(c);
                c = d.next().value;
                d = d.next().value;
                return {
                    timestamp: c.timestamp,
                    value: pi(c.value, d)
                }
            }))
        }
    };
    var ri = R(function(a) {
        if ("omid" === a.value.R) {
            if ("nio" === a.value.K) return "omio";
            if ("geo" === a.value.K) return "omgeo"
        }
        return "geo" === a.value.K || "nio" === a.value.K ? a.value.R : a.value.K
    });

    function si() {
        return J(U(function(a, b) {
            return 0 < b
        }), ti, W(-1), S())
    }
    var ti = J(U(function(a) {
        return !isNaN(a)
    }), df(function(a, b) {
        return isNaN(a) ? b : Math.min(a, b)
    }, NaN), S());
    var ui = li(J(R(function(a) {
        return a.M.width * a.M.height / (a.V.width * a.V.height)
    }), R(function(a) {
        return isFinite(a) ? Math.min(1, a) : 0
    })));

    function vi(a, b, c) {
        return a ? P([b, c]).h(U(function(d) {
            var e = u(d);
            d = e.next().value;
            e = e.next().value;
            return d.timestamp.equals(e.timestamp)
        }), R(function(d) {
            var e = u(d);
            d = e.next().value;
            e = e.next().value;
            return d.value > e.value ? d : e
        })) : b
    }

    function wi(a) {
        return function(b) {
            var c = b.h(ni),
                d = b.h(ui);
            return a instanceof K ? a.h(X(function(e) {
                return vi(e, c, d)
            })) : vi(a.value, c, d)
        }
    };
    var xi = J(li(R(function(a) {
        a = a.sc ? a.sc * a.F.width * a.F.height / (a.J.width * a.J.height) : a.M.width * a.M.height / (a.J.width * a.J.height);
        return isFinite(a) ? a : 0
    })));

    function yi(a, b, c, d) {
        var e = d.uc,
            f = d.td,
            g = d.rf,
            h = d.me,
            k = d.Kd,
            l = d.Ve;
        d = d.wc;
        b = zi(a, c, b);
        c = Ai(a, c);
        var p = Bi(a, e, l, b),
            t = p.h(R(function(z) {
                return z.value
            }), S(), Y(a, 1), df(function(z, T) {
                return Math.max(z, T)
            }, 0)),
            n = p.h(R(function(z) {
                return z.value
            }), si(), Y(a, 1)),
            w = b.h(oi, R(function(z) {
                return z.value
            }), Fe(2), S(), Y(a, 1));
        g = Ci(a, b, g, h);
        var A = g.h(W(!1), S(), R(function(z) {
            return z ? k : f
        }));
        h = p.h(qi(A), S(), Y(a, 1));
        var y = P([h, b]).h(U(function(z) {
                var T = u(z);
                z = T.next().value;
                T = T.next().value;
                return z.timestamp.equals(T.timestamp)
            }),
            R(function(z) {
                var T = u(z);
                z = T.next().value;
                T = T.next().value;
                return {
                    visible: z.value,
                    geometry: T.value.F
                }
            }), df(function(z, T) {
                return !T.visible && z.visible ? z : T
            }, {
                visible: !1,
                geometry: Qh
            }), R(function(z) {
                return z.geometry
            }), W(Qh), Y(a, 1), S(Rh));
        l = l instanceof K ? l.h(S(), af()) : mg;
        A = P([l, A]).h(af());
        var C = b.h(U(function(z) {
                return "ns" !== z.value.R && "ns" !== z.value.K
            }), df(function(z) {
                return z + 1
            }, 0), W(0), Y(a, 1)),
            G = c.h(af(!0), W(!1), Y(a, 1));
        G = P([d, G]).h(R(function(z) {
            var T = u(z);
            z = T.next().value;
            T = T.next().value;
            return z &&
                !T
        }), Y(a, 1));
        var N = b.h(xi, S()),
            ra = N.h(R(function(z) {
                return z.value
            }), df(function(z, T) {
                return Math.max(z, T)
            }, 0), S(), Y(a, 1)),
            B = N.h(R(function(z) {
                return z.value
            }), si(), Y(a, 1));
        return {
            Ud: l,
            Vb: A,
            Ba: {
                Wg: b,
                Xe: b.h(ri),
                qc: y.h(S(Rh)),
                visible: h.h(S(Jh)),
                Xd: p.h(S(Jh)),
                Ue: t,
                Gg: n,
                pe: b.h(hi, S(xb)),
                sh: N,
                Ag: ra,
                Fg: B,
                tc: c,
                O: (new Z(new V)).U(a),
                Se: g,
                uc: e,
                wc: d,
                wd: G,
                th: C,
                xg: w
            }
        }
    }

    function Ai(a, b) {
        return b.h(U(function() {
            return !1
        }), R(function(c) {
            return c
        }), $d(function(c) {
            return (new Z(c)).U(a)
        }))
    }

    function zi(a, b, c) {
        return b.h(sf(mg), Y(a, 1)).h(S(function(d, e) {
            return Jh(d, e, ki)
        }), W({
            timestamp: c.now(),
            value: ji
        }), Y(a, 1))
    }

    function Bi(a, b, c, d) {
        c = d.h(wi(c), li(R(function(e) {
            return gi(e)
        })), Y(a, 1));
        return b instanceof Z ? c : P([c, b]).h(R(function(e) {
            var f = u(e);
            e = f.next().value;
            f = f.next().value;
            return {
                timestamp: f.timestamp.maximum(e.timestamp),
                value: f.value ? 0 : e.value
            }
        }), S(Jh), Y(a, 10))
    }

    function Ci(a, b, c, d) {
        b = [b.h(R(function(e) {
            return 242500 <= e.value.F.width * e.value.F.height
        }))];
        c instanceof K && b.push(c.h(R(function(e) {
            return !!e
        })));
        c = P(b);
        return d ? c.h(R(function(e) {
            return e.some(function(f) {
                return f
            })
        }), W(!1), S(), Y(a, 1)) : (new Z(!1)).U(a)
    };

    function Di(a) {
        return 0 >= a.length ? ve : P(a.map(function(b) {
            var c = 0;
            return b.h(R(function(d) {
                return {
                    index: c++,
                    value: d
                }
            }))
        })).h(U(function(b) {
            return b.every(function(c) {
                return c.index === b[0].index
            })
        }), R(function(b) {
            return b.map(function(c) {
                return c.value
            })
        }))
    };

    function Ei(a, b) {
        return function(c) {
            return Di(b.map(function(d) {
                return c.h(a(d))
            }))
        }
    };

    function Fi(a, b) {
        a.za && (a.cb = a.za);
        a.za = b;
        a.cb && a.cb.value ? (b = Math.max(0, Xa(b.timestamp, a.cb.timestamp)), a.totalTime += b, a.ga += b) : a.ga = 0;
        return a
    }

    function Gi(a) {
        return J(df(Fi, {
            totalTime: 0,
            ga: 0
        }), R(function(b) {
            return new Oh(a, {
                timestamp: b.za.timestamp,
                value: b.totalTime
            }, b.za.value)
        }))
    }

    function Hi(a) {
        return J(df(Fi, {
            totalTime: 0,
            ga: 0
        }), R(function(b) {
            return new Oh(a, {
                timestamp: b.za.timestamp,
                value: b.ga
            }, b.za.value)
        }))
    };

    function Ii(a) {
        return J(Hi(a), R(function(b) {
            return b.map(function(c) {
                return Math.round(c)
            })
        }))
    };

    function Ji(a) {
        var b = new Oh(a, {
            timestamp: a.now(),
            value: 0
        }, !1);
        return J(Hi(a), df(function(c, d) {
            return c.D.value > d.D.value ? new Oh(a, c.D, !1) : d
        }, b), R(function(c) {
            return c.map(function(d) {
                return Math.round(d)
            })
        }))
    };

    function Ki(a) {
        return function(b) {
            return J(qi(Q(b)), Ji(a))
        }
    };

    function Li(a) {
        return function(b) {
            return J(li(R(function(c) {
                return pi(c, b)
            })), Gi(a), R(function(c) {
                return c.map(function(d) {
                    return Math.round(d)
                })
            }))
        }
    };

    function Mi(a) {
        return a.map(function(b) {
            return b.map(function(c) {
                return [c]
            })
        }).reduce(function(b, c) {
            return b.ma(c).map(function(d) {
                return d.flat()
            })
        })
    }

    function Ni(a, b) {
        return a.ma(b).map(function(c) {
            var d = u(c);
            c = d.next().value;
            d = d.next().value;
            return c - d
        })
    }

    function Oi(a, b, c, d, e, f) {
        var g = Pi;
        if (1 < g.length)
            for (var h = 0; h < g.length - 1; h++)
                if (g[h] < g[h + 1]) throw Error();
        h = f.h(W(void 0), X(function() {
            return d.h(Ii(a))
        }), S(function(k, l) {
            return k.Z(l)
        }), Y(b, 1));
        f = f.h(W(void 0), X(function() {
            return d.h(Ji(a))
        }), S(function(k, l) {
            return k.Z(l)
        }), Y(b, 1));
        return {
            Ob: e.h(W(void 0), X(function() {
                return c.h(Ei(Ki(a), g))
            }), R(Mi), S(function(k, l) {
                return k.Z(l)
            }), Y(b, 1)),
            Yb: e.h(W(void 0), X(function() {
                return c.h(Ei(Li(a), g), R(function(k) {
                    return k.map(function(l, p) {
                        return 0 < p ? Ni(l,
                            k[p - 1]) : l
                    })
                }))
            }), R(Mi), S(function(k, l) {
                return k.Z(l)
            }), Y(b, 1)),
            Nb: f,
            Ua: h.h(S(function(k, l) {
                return k.Z(l)
            }), Y(b, 1))
        }
    };
    var Qi = function(a) {
            this.l = a;
            this.Qc = null;
            this.timeout = new V
        },
        Si = function(a, b) {
            Ri(a);
            a.Qc = a.l.setTimeout(function() {
                return void a.timeout.next()
            }, b)
        },
        Ri = function(a) {
            null !== a.Qc && (a.l.clearTimeout(a.Qc), a.Qc = null)
        };

    function Ti(a, b, c, d) {
        var e = Ui.nf,
            f = new Qi(b);
        c = c.h(W(void 0), X(function() {
            Ri(f);
            return d
        })).h(R(function(g) {
            Ri(f);
            var h = g.D,
                k = g.active;
            h.value >= e || !k || (k = b.now(), k = Math.max(0, Xa(k, h.timestamp)), Si(f, Math.max(0, e - h.value - k)));
            return g.map(function(l) {
                return l >= e
            })
        }));
        return P([c, gf(f.timeout, Q(void 0))]).h(R(function(g) {
            return u(g).next().value
        }), Vf(function(g) {
            return !g.aa().value
        }, !0), Y(a, 1))
    };

    function Vi(a, b, c, d) {
        var e = d.uc,
            f = d.td,
            g = d.rf,
            h = d.me,
            k = d.Kd,
            l = d.Ve;
        d = d.wc;
        b = Wi(a, c, b);
        c = Xi(a, c);
        var p = Yi(a, e, l, b),
            t = p.h(R(function(B) {
                return B.value
            }), S(), Y(a, 1), df(function(B, z) {
                return Math.max(B, z)
            }, 0)),
            n = p.h(R(function(B) {
                return B.value
            }), si(), Y(a, 1)),
            w = b.h(oi, R(function(B) {
                return B.value
            }), Fe(2), S(), Y(a, 1));
        g = Zi(a, b, g, h);
        var A = g.h(W(!1), S(), R(function(B) {
            return B ? k : f
        }));
        h = p.h(qi(A), S(), Y(a, 1));
        var y = P([h, b]).h(U(function(B) {
                var z = u(B);
                B = z.next().value;
                z = z.next().value;
                return B.timestamp.equals(z.timestamp)
            }),
            R(function(B) {
                var z = u(B);
                B = z.next().value;
                z = z.next().value;
                return {
                    visible: B.value,
                    geometry: z.value.F
                }
            }), df(function(B, z) {
                return !z.visible && B.visible ? B : z
            }, {
                visible: !1,
                geometry: Qh
            }), R(function(B) {
                return B.geometry
            }), W(Qh), Y(a, 1), S(Rh));
        l = l instanceof K ? l.h(S(), af()) : mg;
        A = P([l, A]).h(af());
        var C = b.h(U(function(B) {
                return "ns" !== B.value.R && "ns" !== B.value.K
            }), df(function(B) {
                return B + 1
            }, 0), W(0), Y(a, 1)),
            G = c.h(af(!0), W(!1), Y(a, 1));
        G = P([d, G]).h(R(function(B) {
            var z = u(B);
            B = z.next().value;
            z = z.next().value;
            return B &&
                !z
        }), Y(a, 1));
        var N = b.h(xi, S()),
            ra = N.h(R(function(B) {
                return B.value
            }), df(function(B, z) {
                return Math.max(B, z)
            }, 0), S(), Y(a, 1));
        a = N.h(R(function(B) {
            return B.value
        }), si(), Y(a, 1));
        return {
            Ud: l,
            Vb: A,
            Ba: {
                Wg: b,
                Xe: b.h(ri),
                qc: y.h(S(Rh)),
                visible: h.h(S(Jh)),
                Xd: p.h(S(Jh)),
                Ue: t,
                Gg: n,
                pe: b.h(hi, S(xb)),
                sh: N,
                Ag: ra,
                Fg: a,
                tc: c,
                O: b.h(R(function(B) {
                    return B.value.O
                })),
                Se: g,
                uc: e,
                wc: d,
                wd: G,
                th: C,
                xg: w
            }
        }
    }

    function Xi(a, b) {
        return b.h(U(function() {
            return !1
        }), R(function(c) {
            return c
        }), $d(function(c) {
            return (new Z(c)).U(a)
        }))
    }

    function Wi(a, b, c) {
        return b.h(sf(mg), Y(a, 1)).h(S(function(d, e) {
            return Jh(d, e, ki)
        }), W({
            timestamp: c.now(),
            value: ji
        }), Y(a, 1))
    }

    function Yi(a, b, c, d) {
        c = d.h(wi(c), li(R(function(e) {
            return gi(e)
        })), Y(a, 1));
        return b instanceof Z ? c : P([c, b]).h(R(function(e) {
            var f = u(e);
            e = f.next().value;
            f = f.next().value;
            return {
                timestamp: f.timestamp.maximum(e.timestamp),
                value: f.value ? 0 : e.value
            }
        }), S(Jh), Y(a, 1))
    }

    function Zi(a, b, c, d) {
        b = [b.h(R(function(e) {
            return 242500 <= e.value.F.width * e.value.F.height
        }))];
        c instanceof K && b.push(c.h(R(function(e) {
            return !!e
        })));
        c = P(b);
        return d ? c.h(R(function(e) {
            return e.some(function(f) {
                return f
            })
        }), W(!1), S(), Y(a, 1)) : (new Z(!1)).U(a)
    };
    var $i = J(jg("data-google-av-itpl"), R(function(a) {
        return Number(a)
    }), R(function(a) {
        return isNaN(a) ? 1 : a
    }));
    var bj = R(aj);

    function aj(a) {
        var b = Number(ig(a, "data-google-av-rs"));
        if (!isNaN(b) && 0 !== b) return b;
        var c;
        return (a = null == (c = a.j) ? void 0 : c.id) ? 0 == a.lastIndexOf("DfaVisibilityIdentifier", 0) ? 6 : 0 == a.lastIndexOf("YtKevlarVisibilityIdentifier", 0) ? 15 : 0 == a.lastIndexOf("YtSparklesVisibilityIdentifier", 0) ? 17 : 0 == a.lastIndexOf("YtKabukiVisibilityIdentifier", 0) ? 18 : 0 : 0
    };

    function cj(a, b) {
        return J(jg("data-google-av-metadata"), R(function(c) {
            if (null === c) return b(void 0);
            c = c.split("&").map(function(d) {
                return d.split("=")
            }).filter(function(d) {
                return d[0] === a
            });
            return 0 === c.length ? b(void 0) : b(c[0].slice(1).join("="))
        }))
    };
    var dj = {
            xh: "addEventListener",
            Dh: "getMaxSize",
            Eh: "getScreenSize",
            Fh: "getState",
            Gh: "getVersion",
            Ih: "removeEventListener",
            Hh: "isViewable"
        },
        fj = function(a, b) {
            b = void 0 === b ? function(f) {
                return ej(f)
            } : b;
            this.qa = null;
            this.pg = new V;
            var c = a.Ed,
                d = !a.nb;
            if (c && d) {
                var e = a.global.top.mraid;
                if (e) {
                    this.oc = b(e);
                    this.qa = e;
                    this.gb = 3;
                    return
                }
            }(a = a.global.mraid) ? (this.oc = b(a), this.qa = a, this.gb = c ? d ? 2 : 1 : 0) : (this.gb = -1, this.oc = 2)
        };
    fj.prototype.addEventListener = function(a, b) {
        return this.tb("addEventListener", a, b)
    };
    fj.prototype.removeEventListener = function(a, b) {
        return this.tb("removeEventListener", a, b)
    };
    fj.prototype.Ce = function() {
        var a = this.tb("getVersion");
        return "string" === typeof a ? a : ""
    };
    fj.prototype.getState = function() {
        var a = this.tb("getState");
        return "string" === typeof a ? a : ""
    };
    var gj = function(a) {
            a = a.tb("isViewable");
            return "boolean" === typeof a ? a : !1
        },
        hj = function(a) {
            if (a.qa) return a = a.qa.AFMA_LIDAR, "string" === typeof a ? a : void 0
        },
        ej = function(a) {
            return a ? a.IS_GMA_SDK ? Object.values(dj).every(function(b) {
                return "function" === typeof a[b]
            }) ? 0 : 1 : 2 : 1
        };
    fj.prototype.tb = function(a) {
        var b = D.apply(1, arguments);
        if (this.qa) try {
            return this.qa[a].apply(this.qa, v(b))
        } catch (c) {
            this.pg.next(a)
        }
    };
    q.Object.defineProperties(fj.prototype, {
        we: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                if (this.qa) {
                    var a = this.qa.AFMA_LIDAR_EXP_1;
                    return void 0 === a ? void 0 : !!a
                }
            },
            set: function(a) {
                this.qa && (this.qa.AFMA_LIDAR_EXP_1 = a)
            }
        }
    });

    function ij(a, b) {
        return -1 !== (new fj(a)).gb ? (new Z(!0)).U(a.i) : b.h(jg("data-google-av-inapp"), R(function(c) {
            return null !== c
        }), Y(a.i, 1))
    };

    function jj(a, b) {
        return {
            ed: b.h(jg("data-google-av-adk")),
            kc: b.h(jg("data-google-av-btr"), S(), R(function(c) {
                return null === c ? [] : c.split("|").filter(function(d) {
                    return "" !== d
                })
            })),
            ld: b.h(jg("data-google-av-cpmav"), S(), R(function(c) {
                return null === c ? [] : c.split("|").filter(function(d) {
                    return "" !== d
                })
            })),
            Qf: Bh(a, b),
            flags: b.h(jg("data-google-av-flags"), S()),
            Ma: ij(a, b),
            Hd: b.h(cj("cr", function(c) {
                return "1" === c
            }), S()),
            tg: b.h(cj("omid", function(c) {
                return "1" === c
            }), S()),
            Gd: b.h($i),
            metadata: b.h(jg("data-google-av-metadata")),
            Ga: b.h(bj),
            wa: b.h(pg),
            wh: b.h(cj("la", function(c) {
                return "1" === c
            }), S()),
            Za: b.h(jg("data-google-av-turtlex"), R(function(c) {
                return null !== c
            }), S()),
            Cc: b.h(jg("data-google-av-vattr"), R(function(c) {
                return null !== c
            }), S())
        }
    };

    function kj(a, b, c, d, e) {
        c = c.h(R(function() {
            return !1
        }));
        d = P([e, d]).h(X(function(f) {
            f = u(f).next().value;
            return lj(b, f)
        }));
        return gf(Q(!1), c, d).h(S(), Y(a.i, 1))
    }

    function lj(a, b) {
        return a.h(R(function(c) {
            return b || 0 === c || 2 === c
        }))
    };

    function mj(a) {
        var b;
        if (b = nj(a)) b = !oj(a, "abgcp") && !oj(a, "abgc") && !("string" === typeof a.id && "abgb" === a.id) && !("string" === typeof a.id && "mys-abgc" === a.id) && !oj(a, "cbb");
        return b
    }

    function oj(a, b) {
        return a.classList ? a.classList.contains(b) : -1 < (" " + a.className + " ").indexOf(" " + b + " ")
    }

    function nj(a) {
        try {
            var b = a.getBoundingClientRect();
            return b && 30 <= b.height && 30 <= b.width
        } catch (c) {
            return !1
        }
    }

    function pj(a, b) {
        if (void 0 === a.j || !a.j.children) return a;
        for (var c = wb(a.j.children); c.length;) {
            var d = b ? c.filter(mj) : c.filter(nj);
            if (1 === d.length) return new xg(d[0]);
            if (1 < d.length) break;
            c = zb(c, function(e) {
                return wb(e.children)
            })
        }
        return a
    }

    function qj(a, b, c, d, e) {
        if (c) return {
            pc: b,
            fb: Q(null)
        };
        c = b.element.h(R(function(f) {
            a: if (void 0 === f.j || nj(f.j)) f = {
                    Gc: f,
                    fb: "mue"
                };
                else {
                    var g = pj(f, e);
                    if (void 0 !== g.j && nj(g.j)) f = {
                        Gc: g,
                        fb: "ie"
                    };
                    else {
                        if (d || a.Ed)
                            if (g = a.document.querySelector(".GoogleActiveViewInnerContainer")) {
                                f = {
                                    Gc: new xg(g),
                                    fb: "ce"
                                };
                                break a
                            }
                        f = {
                            Gc: f,
                            fb: "mue"
                        }
                    }
                }return f
        }), Ef());
        return {
            pc: {
                Gb: b.Gb,
                element: c.h(R(function(f) {
                    return f.Gc
                }))
            },
            fb: c.h(R(function(f) {
                return f.fb
            }))
        }
    };
    var rj = [33, 32],
        sj = J($i, R(function(a) {
            return 0 <= rj.indexOf(a)
        }), S());

    function tj(a, b, c, d, e, f) {
        var g = c.h(R(function(k) {
                return 9 === k
            })),
            h = b.element.h(sj);
        c = e.h(U(function(k) {
            return k
        }), X(function() {
            return P([g, h])
        }), R(function(k) {
            k = u(k);
            var l = k.next().value;
            return !k.next().value || l
        }), S());
        f = P([c, d.h(S()), f]).h(R(function(k) {
            var l = u(k);
            k = l.next().value;
            var p = l.next().value;
            l = l.next().value;
            return qj(a, b, !k, p, l)
        }), yf(1), hf());
        d = f.h(R(function(k) {
            return k.pc
        }));
        f = f.h(X(function(k) {
            return k.fb
        }), W(null), S(), Y(a.i, 1));
        return {
            Da: d,
            Eb: f
        }
    };

    function uj(a) {
        var b = void 0 === b ? !1 : b;
        return J(X(function(c) {
            return vj(a.document, c, b)
        }), Y(a.i, 1))
    };
    var wj = function(a, b, c, d, e, f) {
        this.Mb = b.element.h(uj(a), Y(a.i, 1));
        this.jf = kj(a, c, b.element, this.Mb, d);
        c = tj(a, b, e, d, this.jf, f);
        d = c.Eb;
        this.Da = c.Da;
        this.Eb = d;
        this.ce = gf((new Z(1)).U(a.i), b.element.h(Fe(1), R(function() {
            return 2
        }), Y(a.i, 1)), this.Mb.h(Fe(1), R(function() {
            return 3
        }), Y(a.i, 1)), this.jf.h(U(Boolean), Fe(1), R(function() {
            return 0
        }), Y(a.i, 1))).h(Vf(function(g) {
            return 0 !== g
        }, !0), Y(a.i, 0))
    };

    function xj(a) {
        var b = new Ja(13);
        if (1 > a.length) return {
            re: ve,
            hd: ve
        };
        var c = new V;
        return {
            re: a.slice(1).reduce(function(d, e) {
                return d.h($d(function(f) {
                    c.next(f);
                    return e
                }))
            }, a[0]).h($d(function(d) {
                c.next(d);
                return we(b)
            }), rf(new V), hf()),
            hd: c
        }
    };
    var yj = function() {};
    var zj = function(a, b) {
        this.context = a;
        this.mh = b
    };
    x(zj, yj);
    zj.prototype.Ka = function(a, b) {
        var c = this.mh.map(function(f) {
                return f.Ka(a, b)
            }),
            d = xj(c.map(function(f) {
                return f.La
            })),
            e = d.hd.h(Aj());
        return {
            La: d.re.h(Y(this.context.i, 1)),
            Ia: Object.assign.apply(Object, [{
                Vd: e,
                ci: d.hd
            }].concat(v(c.map(function(f) {
                return f.Ia
            }))))
        }
    };
    var Aj = function() {
        return df(function(a, b) {
            b instanceof Ja ? a.push(b.Dg) : a.push(-1);
            return a
        }, [])
    };
    var Bj = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    m = Bj.prototype;
    m.clone = function() {
        return new Bj(this.x, this.y)
    };
    m.toString = function() {
        return "(" + this.x + ", " + this.y + ")"
    };
    m.equals = function(a) {
        return a instanceof Bj && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    m.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    m.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    m.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    m.translate = function(a, b) {
        a instanceof Bj ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), "number" === typeof b && (this.y += b));
        return this
    };
    m.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    };
    var Cj = function(a, b) {
        this.width = a;
        this.height = b
    };
    m = Cj.prototype;
    m.clone = function() {
        return new Cj(this.width, this.height)
    };
    m.toString = function() {
        return "(" + this.width + " x " + this.height + ")"
    };
    m.aspectRatio = function() {
        return this.width / this.height
    };
    m.Id = function() {
        return !(this.width * this.height)
    };
    m.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    m.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    m.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    m.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    };
    var Fj = function(a) {
            return a ? new Dj(Ej(a)) : Za || (Za = new Dj)
        },
        Gj = function(a) {
            var b = a.scrollingElement ? a.scrollingElement : Hb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
            a = a.parentWindow || a.defaultView;
            return Db && a.pageYOffset != b.scrollTop ? new Bj(b.scrollLeft, b.scrollTop) : new Bj(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        },
        Hj = function(a, b, c) {
            function d(h) {
                h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
            }
            for (var e = 1; e < c.length; e++) {
                var f = c[e];
                if (!Ea(f) ||
                    Ga(f) && 0 < f.nodeType) d(f);
                else {
                    a: {
                        if (f && "number" == typeof f.length) {
                            if (Ga(f)) {
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
                    sb(g ? wb(f) : f, d)
                }
            }
        },
        Ej = function(a) {
            bb(a, "Node cannot be null or undefined.");
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        Ij = function(a, b) {
            a && (a = a.parentNode);
            for (var c = 0; a;) {
                bb("parentNode" != a.name);
                if (b(a)) return a;
                a = a.parentNode;
                c++
            }
            return null
        },
        Dj = function(a) {
            this.mb = a || Ca.document ||
                document
        };
    m = Dj.prototype;
    m.getElementsByTagName = function(a, b) {
        return (b || this.mb).getElementsByTagName(String(a))
    };
    m.createElement = function(a) {
        var b = this.mb;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    m.createTextNode = function(a) {
        return this.mb.createTextNode(String(a))
    };
    m.appendChild = function(a, b) {
        bb(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
        a.appendChild(b)
    };
    m.append = function(a, b) {
        Hj(Ej(a), a, arguments)
    };
    m.canHaveChildren = function(a) {
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
    m.removeNode = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    m.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    var Jj = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    m = Jj.prototype;
    m.Bd = function() {
        return this.right - this.left
    };
    m.yd = function() {
        return this.bottom - this.top
    };
    m.clone = function() {
        return new Jj(this.top, this.right, this.bottom, this.left)
    };
    m.toString = function() {
        return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
    };
    m.contains = function(a) {
        return this && a ? a instanceof Jj ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    m.expand = function(a, b, c, d) {
        Ga(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
        return this
    };
    m.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    m.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    m.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    m.translate = function(a, b) {
        a instanceof Bj ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (eb(a), this.left += a, this.right += a, "number" === typeof b && (this.top += b, this.bottom += b));
        return this
    };
    m.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };
    var Kj = function(a) {
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
    };

    function Lj(a, b) {
        return function(c) {
            return function(d) {
                var e = d.h(rf(new V), hf());
                d = c.element.h(S());
                e = e.h(R(function(f) {
                    return f.value
                }));
                return P([d, e, b]).h(R(function(f) {
                    var g = u(f);
                    f = g.next().value;
                    var h = g.next().value;
                    g = g.next().value;
                    if (void 0 === f.j) var k = {
                        top: 0,
                        left: 0,
                        width: 0,
                        height: 0
                    };
                    else {
                        k = f.j.getBoundingClientRect();
                        var l = f.j,
                            p = a.global,
                            t = new Bj(0, 0);
                        var n = (n = Ej(l)) ? n.parentWindow || n.defaultView : window;
                        if (Bb(n, "parent")) {
                            do {
                                if (n == p) {
                                    var w = l,
                                        A = Ej(w);
                                    hb(w, "Parameter is required");
                                    var y = new Bj(0,
                                        0);
                                    var C = A ? Ej(A) : document;
                                    C = !Db || 9 <= Number(Qb) || "CSS1Compat" == Fj(C).mb.compatMode ? C.documentElement : C.body;
                                    w != C && (w = Kj(w), A = Gj(Fj(A).mb), y.x = w.left + A.x, y.y = w.top + A.y)
                                } else y = bb(l), y = Kj(y), y = new Bj(y.left, y.top);
                                t.x += y.x;
                                t.y += y.y
                            } while (n && n != p && n != n.parent && (l = n.frameElement) && (n = n.parent))
                        }
                        k = {
                            top: t.y,
                            left: t.x,
                            width: k.width,
                            height: k.height
                        }
                    }
                    k = Th(k, h.W);
                    p = Sh(k, h.V);
                    t = a.l.now();
                    n = Object;
                    l = n.assign;
                    if (2 !== g || a.nb || 0 >= p.width || 0 >= p.height) var G = !1;
                    else try {
                        var N = a.document.elementFromPoint(p.left + p.width /
                            2, p.top + p.height / 2);
                        G = N ? !Mj(N, f) : !1
                    } catch (ra) {
                        G = !1
                    }
                    return {
                        timestamp: t,
                        value: l.call(n, {}, h, {
                            K: "geo",
                            M: G ? ji.M : p,
                            F: k
                        })
                    }
                }), vg(a.i))
            }
        }
    }

    function Mj(a, b, c) {
        c = void 0 === c ? 0 : c;
        return void 0 === a.j || void 0 === b.j ? !1 : a.j === b.j || Ij(b.j, function(d) {
            return d === a.j
        }) ? !0 : b.j.ownerDocument && b.j.ownerDocument.defaultView && b.j.ownerDocument.defaultView === b.j.ownerDocument.defaultView.top ? !1 : 10 > c && b.j.ownerDocument && b.j.ownerDocument.defaultView && b.j.ownerDocument.defaultView.frameElement ? Mj(a, new xg(b.j.ownerDocument.defaultView.frameElement), c + 1) : !0
    };

    function Nj(a, b) {
        return a && 0 === b ? 15 : a || 1 !== b ? null : 14
    }

    function Oj(a, b, c) {
        return b instanceof K ? b.h(X(function(d) {
            return (d = Nj(d, c)) ? we(new Ja(d)) : a
        })) : (b = Nj(b.value, c)) ? we(new Ja(b)) : a
    };

    function Pj(a, b) {
        var c = a.h(rf(new V), hf());
        return X(function(d) {
            return c.h(b(d))
        })
    };

    function Qj(a, b) {
        var c = void 0 === c ? function() {
            var f = (Rj(a.global) ? a.global.innerWidth : 0) || a.Bd() || 0,
                g = (Rj(a.global) ? a.global.innerHeight : 0) || a.yd() || 0;
            return {
                left: 0,
                top: 0,
                width: f,
                height: g
            }
        } : c;
        var d = a.nb ? Sj(a.document) ? a.sg ? null : we(new Ja(5)) : we(new Ja(4)) : we(new Ja(3));
        if (d) return d;
        var e = new V;
        return gf(Q({}), b, e).h(R(function() {
            var f = Tj(a, c);
            return {
                timestamp: a.l.now(),
                value: {
                    R: "iem",
                    V: f,
                    J: f,
                    O: e,
                    W: {
                        x: 0,
                        y: 0
                    }
                }
            }
        }), Y(a.i, 1))
    }

    function Tj(a, b) {
        b = b();
        var c = Gj(document),
            d = function(n, w) {
                return !!a.document.elementFromPoint(n, w)
            },
            e = Math.floor(b.left - c.x),
            f = Math.floor(b.top - c.y),
            g = Math.floor(b.left + b.width - c.x),
            h = Math.floor(b.top + b.height - c.y);
        b = d(e, f);
        c = d(g, h);
        if (b && c) return {
            top: f,
            left: e,
            width: g - e,
            height: h - f
        };
        var k = d(g, f),
            l = d(e, h);
        if (b) h = Uj(f, h, function(n) {
            return d(e, n)
        }), g = Uj(e, g, function(n) {
            return d(n, f)
        });
        else if (k) h = Uj(f, h, function(n) {
            return d(g, n)
        }), e = Uj(g, e, function(n) {
            return d(n, f)
        });
        else if (l) f = Uj(h, f, function(n) {
            return d(e,
                n)
        }), g = Uj(e, g, function(n) {
            return d(n, h)
        });
        else if (c) f = Uj(h, f, function(n) {
            return d(g, n)
        }), e = Uj(g, e, function(n) {
            return d(n, h)
        });
        else {
            var p = Math.floor((e + g) / 2),
                t = Math.floor((f + h) / 2);
            if (!d(p, t)) return {
                left: 0,
                top: 0,
                width: 0,
                height: 0
            };
            f = Uj(t, f, function(n) {
                return d(p, n)
            });
            h = Uj(t, h, function(n) {
                return d(p, n)
            });
            e = Uj(p, e, function(n) {
                return d(n, t)
            });
            g = Uj(p, g, function(n) {
                return d(n, t)
            })
        }
        return {
            top: f,
            left: e,
            width: g - e,
            height: h - f
        }
    }

    function Uj(a, b, c) {
        if (c(b)) return b;
        for (var d = 15; d--;) {
            var e = Math.floor((a + b) / 2);
            if (e === a || e === b) break;
            c(e) ? a = e : b = e
        }
        return a
    };
    var Vj = function(a, b) {
        this.context = a;
        this.oa = b
    };
    x(Vj, yj);
    Vj.prototype.Ka = function(a, b) {
        var c = Pj(Qj(this.context, this.oa), Lj(this.context, b.Ga));
        return {
            La: Oj(a.Da.h(c), b.Ma, 0),
            Ia: {}
        }
    };
    var Xj = function() {
            return !Wj() && (E("iPod") || E("iPhone") || E("Android") || E("IEMobile"))
        },
        Wj = function() {
            return E("iPad") || E("Android") && !E("Mobile") || E("Silk")
        };
    var Yj = function(a, b) {
        this.name = a;
        this.value = b
    };
    Yj.prototype.toString = function() {
        return this.name
    };
    var Zj = new Yj("OFF", Infinity),
        ak = new Yj("WARNING", 900),
        bk = new Yj("CONFIG", 700),
        ck = function() {
            this.nc = 0;
            this.clear()
        },
        dk;
    ck.prototype.clear = function() {
        this.qe = Array(this.nc);
        this.ve = -1;
        this.Re = !1
    };
    var ek = function(a, b, c) {
        this.reset(a || Zj, b, c, void 0, void 0)
    };
    ek.prototype.reset = function(a, b, c, d) {
        d || Date.now();
        this.Hg = b
    };
    ek.prototype.getMessage = function() {
        return this.Hg
    };
    var fk = function(a, b) {
            this.level = null;
            this.jg = [];
            this.parent = (void 0 === b ? null : b) || null;
            this.children = [];
            this.zg = {
                zd: function() {
                    return a
                }
            }
        },
        gk = function(a) {
            if (a.level) return a.level;
            if (a.parent) return gk(a.parent);
            db("Root logger has no level set.");
            return Zj
        },
        hk = function(a, b) {
            for (; a;) a.jg.forEach(function(c) {
                c(b)
            }), a = a.parent
        },
        ik = function() {
            this.entries = {};
            var a = new fk("");
            a.level = bk;
            this.entries[""] = a
        },
        jk, kk = function(a, b) {
            var c = a.entries[b];
            if (c) return c;
            c = kk(a, b.slice(0, Math.max(b.lastIndexOf("."),
                0)));
            var d = new fk(b, c);
            a.entries[b] = d;
            c.children.push(d);
            return d
        },
        lk = function() {
            jk || (jk = new ik);
            return jk
        };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var mk = [],
        nk = function(a) {
            var b;
            if (b = kk(lk(), "safevalues").zg) {
                var c = "A URL with content '" + a + "' was sanitized away.",
                    d = ak;
                if (a = b)
                    if (a = b && d) {
                        a = d.value;
                        var e = b ? gk(kk(lk(), b.zd())) : Zj;
                        a = a >= e.value
                    }
                if (a) {
                    d = d || Zj;
                    a = kk(lk(), b.zd());
                    "function" === typeof c && (c = c());
                    dk || (dk = new ck);
                    e = dk;
                    b = b.zd();
                    if (0 < e.nc) {
                        var f = (e.ve + 1) % e.nc;
                        e.ve = f;
                        e.Re ? (e = e.qe[f], e.reset(d, c, b), b = e) : (e.Re = f == e.nc - 1, b = e.qe[f] = new ek(d, c, b))
                    } else b = new ek(d, c, b);
                    hk(a, b)
                }
            }
        }; - 1 === mk.indexOf(nk) && mk.push(nk);
    var Rj = function(a) {
        try {
            return !!a && null != a.location.href && Bb(a, "foo")
        } catch (b) {
            return !1
        }
    };

    function ok(a, b) {
        if (a.nb) return we(new Ja(6));
        var c = new V;
        return gf(Q({}), b, c).h(R(function() {
            return {
                timestamp: a.l.now(),
                value: {
                    R: "geo",
                    V: pk(a),
                    J: qk(a, !0),
                    O: c,
                    W: {
                        x: 0,
                        y: 0
                    }
                }
            }
        }), vg(a.i))
    }

    function pk(a) {
        var b = qk(a, !1);
        if (!a.Ed || !Rj(a.global.parent) || a.global.parent === a.global) return b;
        var c = new rk(a.global.parent, a.Va);
        c.H = a.H;
        c = pk(c);
        a = a.global.frameElement.getBoundingClientRect();
        return Sh(Th(Sh(c, a), {
            x: b.left - a.left,
            y: b.top - a.top
        }), b)
    };
    var sk = function(a, b) {
        this.context = a;
        this.oa = b
    };
    x(sk, yj);
    sk.prototype.Ka = function(a, b) {
        var c = Pj(ok(this.context, this.oa), Lj(this.context, b.Ga));
        return {
            La: Oj(a.Da.h(c), b.Ma, 0),
            Ia: {}
        }
    };

    function tk(a) {
        var b = void 0 === b ? {} : b;
        if ("function" === typeof Event) return new Event(a, b);
        if ("undefined" !== typeof document) {
            var c = document.createEvent("CustomEvent");
            c.initCustomEvent(a, b.bubbles || !1, b.cancelable || !1, b.detail);
            return c
        }
        throw Error();
    };

    function uk(a) {
        return function(b) {
            return b.h(a.ResizeObserver ? vk(a) : wk(a), yf(1), hf())
        }
    }

    function vk(a) {
        return function(b) {
            return b.h(X(function(c) {
                var d = a.ResizeObserver;
                if (!d || void 0 === c.j) return Q(ji.F);
                var e = (new K(function(f) {
                    function g() {
                        void 0 !== c.j && h.unobserve(c.j);
                        h.disconnect();
                        k.unsubscribe()
                    }
                    if (void 0 === c.j) return f.complete(),
                        function() {};
                    var h = new d(function(l) {
                        l.forEach(function(p) {
                            f.next(p)
                        })
                    });
                    h.observe(c.j);
                    var k = c.released.subscribe(g);
                    return g
                })).h(Mg(a.s, 736), R(function(f) {
                    return f.contentRect
                }));
                return gf(Q(c.j.getBoundingClientRect()), e)
            }), S(Rh))
        }
    }

    function wk(a) {
        return function(b) {
            var c = b.h(zh(a, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })),
                d = a.Rg;
            c = gf(b.h(R(function() {
                return tk("resize")
            })), c, d);
            return P(b, c).h(Mg(a.s, 737), R(function(e) {
                e = u(e).next().value;
                return void 0 === e.j ? void 0 : e.j.getBoundingClientRect()
            }), Bg(), S(Rh))
        }
    };

    function xk(a, b) {
        var c = yk(a, b).h(yf(1), hf());
        return function(d) {
            d = d.h(X(function(e) {
                return e.element
            }), S());
            return P([c, d]).h(X(function(e) {
                var f = u(e);
                e = f.next().value;
                f = f.next().value;
                return zk(a, e.qg, uk(a), e.Mg, e.fg, f)
            }), vg(a.i))
        }
    }

    function Ak(a, b) {
        var c = xk(a, b);
        return function(d) {
            var e = c(Q(d));
            return function(f) {
                return P([f, e]).h(R(function(g) {
                    var h = u(g);
                    g = h.next().value;
                    h = h.next().value;
                    var k = Th(h.value.F, g.value.W),
                        l = Sh(Th(h.value.M, g.value.W), g.value.V);
                    return {
                        timestamp: g.timestamp.maximum(h.timestamp),
                        value: Object.assign({}, g.value, {
                            K: "nio",
                            M: l,
                            F: k
                        })
                    }
                }))
            }
        }
    }

    function Bk(a) {
        return R(function(b) {
            return "nio" !== b.value.R ? b : Object.assign({}, b, {
                value: Object.assign({}, b.value, {
                    V: qk(a, !0),
                    J: qk(a, !0)
                })
            })
        })
    }

    function Ck(a, b) {
        return Q(b).h(a, R(function() {
            return b
        }))
    }

    function yk(a, b) {
        return a.l.timeline !== Ta ? we(new Ja(2)) : a.MutationObserver ? "undefined" === typeof IntersectionObserver ? we(new Ja(0)) : (new K(function(c) {
            var d = new V,
                e = new IntersectionObserver(d.next.bind(d), {
                    threshold: [].concat(v(b))
                });
            c.next({
                Mg: d.h(Mg(a.s, 735)),
                qg: e,
                fg: function() {
                    var f = e.takeRecords();
                    0 < f.length && d.next(f)
                }
            })
        })).h(Fe(1), yf(1), hf()) : we(new Ja(1))
    }

    function Dk(a) {
        return Xd(a.sort(function(b, c) {
            return b.time - c.time
        }))
    }

    function zk(a, b, c, d, e, f) {
        return new K(function(g) {
            function h() {
                w || (w = !0, void 0 !== f.j && b.unobserve(f.j), l.unsubscribe(), n.unsubscribe(), t.unsubscribe(), A.unsubscribe())
            }
            if (void 0 !== f.j) {
                b.observe(f.j);
                var k = new wf({
                        timestamp: a.l.now(),
                        value: Object.assign({}, ji, {
                            R: "nio",
                            K: "nio"
                        })
                    }),
                    l = d.h(ie(function(y) {
                        return Dk(y)
                    }), U(function(y) {
                        return y.target === f.j
                    }), R(function(y) {
                        return {
                            timestamp: new Wa(y.time, Ta),
                            value: {
                                R: "nio",
                                V: y.rootBounds || Qh,
                                J: y.rootBounds || qk(a, !0),
                                O: p,
                                K: "nio",
                                M: y.intersectionRect,
                                F: y.boundingClientRect,
                                W: {
                                    x: 0,
                                    y: 0
                                }
                            }
                        }
                    }), rf(k), hf()).subscribe(g),
                    p = new V,
                    t = p.subscribe(function() {
                        e();
                        g.next({
                            timestamp: a.l.now(),
                            value: k.value.value
                        });
                        void 0 !== f.j && (b.unobserve(f.j), b.observe(f.j))
                    }),
                    n = Ck(c, f).subscribe(function() {
                        p.next()
                    }),
                    w = !1,
                    A = f.released.subscribe(function() {
                        return h()
                    });
                return h
            }
        })
    };
    var Ek = function(a, b, c) {
        c = void 0 === c ? xk(a, b) : c;
        this.context = a;
        this.rg = c
    };
    x(Ek, yj);
    Ek.prototype.Ka = function(a, b) {
        return {
            La: Oj(a.Da.h(this.rg, Bk(this.context)), b.Ma, 0),
            Ia: {}
        }
    };

    function Fk(a, b, c, d, e) {
        var f = void 0 === f ? new fj(a) : f;
        var g = void 0 === g ? Ug(a.l, 500) : g;
        var h = void 0 === h ? Ug(a.l, 100) : h;
        e = Q(f).h(Gk(c), Zf(function(k) {
            d.next(k.gb)
        }), Hk(a, h), Ik(a), Jk(a, e), yf(1), hf());
        f = new V;
        b = gf(Q({}), b, f);
        return e.h(Kk(a, f, b, g, c), Y(a.i, 1))
    }

    function Jk(a, b) {
        return J(function(c) {
            return P([c, b])
        }, qe(function(c) {
            c = u(c);
            var d = c.next().value;
            return 9 !== c.next().value || gj(d) ? Q(!0) : Lk(a, d, "viewableChange").h(U(function(e) {
                return u(e).next().value
            }), Fe(1))
        }), R(function(c) {
            return u(c).next().value
        }))
    }

    function Gk(a) {
        return X(function(b) {
            if (-1 === b.gb) return a.next("if"), we(new Ja(7));
            if (0 !== b.oc) switch (b.oc) {
                case 1:
                    return a.next("mm"), we(new Ja(18));
                case 2:
                    return a.next("ng"), we(new Ja(17));
                default:
                    return a.next("i"), we(new Ja(8))
            }
            return Q(b)
        })
    }

    function Hk(a, b) {
        return qe(function() {
            var c = a.af;
            return "complete" === Mk(a.document) ? Q(!0) : c.h(qe(function() {
                return b
            }))
        })
    }
    var Ik = function(a) {
        return X(function(b) {
            return "loading" !== b.getState() ? Q(b) : Lk(a, b, "ready").h(R(function() {
                return b
            }))
        })
    };

    function Kk(a, b, c, d, e) {
        return X(function(f) {
            var g = hj(f);
            if ("string" !== typeof g) return e.next("nc"), we(new Ja(9));
            void 0 !== f.we && (f.we = !0);
            g = Lk(a, f, g, Nk);
            var h = {
                version: f.Ce(),
                gb: f.gb
            };
            g = g.h(R(function(l) {
                return Ok.apply(null, [a, b, f, h].concat(v(l)))
            }));
            var k = d.h(Zf(function() {
                e.next("mt")
            }), X(function() {
                return we(new Ja(10))
            }));
            g = zf(g, k);
            return P([g, c]).h(R(function(l) {
                l = u(l).next().value;
                return Object.assign({}, l, {
                    timestamp: a.l.now()
                })
            }))
        })
    }

    function Nk(a, b) {
        return (null === b || "number" === typeof b) && (null === a || !!a && "number" === typeof a.height && "number" === typeof a.width && "number" === typeof a.x && "number" === typeof a.y)
    }

    function Ok(a, b, c, d, e, f) {
        e = e ? {
            left: e.x,
            top: e.y,
            width: e.width,
            height: e.height
        } : Qh;
        c = c.tb("getMaxSize");
        var g = null != c && "number" === typeof c.width && "number" === typeof c.height ? c : {
            width: 0,
            height: 0
        };
        c = {
            left: 0,
            top: 0,
            width: -1,
            height: -1
        };
        if (g) {
            var h = Number(String(g.width));
            g = Number(String(g.height));
            c = isNaN(h) || isNaN(g) ? c : {
                left: 0,
                top: 0,
                width: h,
                height: g
            }
        }
        a = {
            value: {
                V: e,
                J: c,
                R: "mraid",
                O: b,
                W: {
                    x: 0,
                    y: 0
                }
            },
            timestamp: a.l.now()
        };
        return Object.assign({}, a, d, {
            Lh: f
        })
    }

    function Lk(a, b, c, d) {
        d = void 0 === d ? function() {
            return !0
        } : d;
        return (new K(function(e) {
            var f = a.s.Ha(745, function() {
                e.next(D.apply(0, arguments))
            });
            b.addEventListener(c, f);
            return function() {
                b.removeEventListener(c, f)
            }
        })).h(U(function(e) {
            return d.apply(null, v(e))
        }))
    };
    var Pk = function(a, b) {
        this.context = a;
        this.oa = b
    };
    x(Pk, yj);
    Pk.prototype.Ka = function(a, b) {
        var c = new xf(1),
            d = new xf(1),
            e = Pj(Fk(this.context, this.oa, c, d, b.Ga), Lj(this.context, b.Ga));
        return {
            La: Oj(a.Da.h(e), b.Ma, 1),
            Ia: {
                Nd: c.h(Y(this.context.i, 1)),
                Od: d.h(Y(this.context.i, 1))
            }
        }
    };

    function Qk(a) {
        return ["backgrounded", "notFound", "hidden", "noOutputDevice"].includes(a)
    };

    function Rk() {
        var a = Error;
        return Wc(function(b) {
            return b instanceof a
        }, function() {
            return Vc(a)
        })
    };

    function Sk(a, b) {
        var c = void 0 === c ? null : c;
        var d = new V,
            e = void 0,
            f = a.Be,
            g = d.h(R(function() {
                return e ? Object.assign({}, e, {
                    timestamp: a.l.now()
                }) : null
            }), U(function(k) {
                return null !== k
            }), R(function(k) {
                return k
            }));
        b = P([gf(f, g), b]);
        var h = c;
        return b.h(U(function(k) {
            k = u(k).next().value;
            null === h && (h = k.value.Cf);
            return k.value.Cf === h
        }), Zf(function(k) {
            return void(e = u(k).next().value)
        }), R(function(k) {
            var l = u(k);
            k = l.next().value;
            l = l.next().value;
            try {
                var p = k.value.data,
                    t = k.timestamp,
                    n = p.viewport,
                    w, A, y = Object.assign({},
                        n, {
                            width: null != (w = null == n ? void 0 : n.width) ? w : 0,
                            height: null != (A = null == n ? void 0 : n.height) ? A : 0,
                            x: 0,
                            y: 0,
                            Yh: n ? n.width * n.height : 0
                        }),
                    C = Tk(y),
                    G = p.adView,
                    N = G.measuringElement && G.containerGeometry ? Tk(G.containerGeometry) : Tk(G.geometry),
                    ra = Tk(G.geometry),
                    B = G.reasons.some(Qk),
                    z = B ? Qh : Tk(G.onScreenGeometry),
                    T;
                l && (T = G.percentageInView / 100);
                l && B && (T = 0);
                return {
                    timestamp: t,
                    value: {
                        R: "omid",
                        V: N,
                        J: C,
                        O: d,
                        K: "omid",
                        F: ra,
                        W: {
                            x: N.left,
                            y: N.top
                        },
                        M: z,
                        sc: T
                    }
                }
            } catch (la) {
                A = la;
                p = Rk();
                t = Xc;
                Xc = void 0;
                n = [];
                w = p(A, n);
                !w && n && (A = "Expected " +
                    p.De() + ", got " + Uc(A), n.push(A));
                if (!w) {
                    var Ua = "";
                    t && (Ua = t() + "\n");
                    throw Error("z`" + Ua + "`" + p.De() + "`" + n.reverse().join("\n"));
                }
                var Qc;
                p = null != (Qc = null == (Ua = la) ? void 0 : Ua.message) ? Qc : "An unknown error occurred";
                Ua = "Error while processing geometryChange event: " + JSON.stringify(k.value) + "; " + p;
                throw Error(Ua);
            }
        }), yf(1), hf())
    }

    function Tk(a) {
        var b, c, d, e;
        return {
            left: Math.floor(null != (b = null == a ? void 0 : a.x) ? b : 0),
            top: Math.floor(null != (c = null == a ? void 0 : a.y) ? c : 0),
            width: Math.floor(null != (d = null == a ? void 0 : a.width) ? d : 0),
            height: Math.floor(null != (e = null == a ? void 0 : a.height) ? e : 0)
        }
    };

    function Uk(a, b, c, d) {
        c = void 0 === c ? mg : c;
        var e = a.i;
        if (null === b) return we(new Ja(20));
        if (!b.validate()) return we(new Ja(21));
        var f;
        d = Vk(e, b, d).h(R(function(g) {
            var h = g.value;
            g = g.timestamp;
            var k = b.l,
                l = a.l;
            if (k.timeline !== g.timeline) throw new Oa;
            g = new Wa(g.value - k.now().value + l.now().value, l.timeline);
            return f = {
                value: h,
                timestamp: g
            }
        }));
        return gf(d, c.h(R(function() {
            return f
        }))).h(U(function(g) {
            return void 0 !== g
        }), R(function(g) {
            return g
        }), Y(a.i, 1))
    }

    function Vk(a, b, c) {
        return Sk(b, c).h(Y(a, 1), R(function(d) {
            return {
                timestamp: d.timestamp,
                value: {
                    W: {
                        x: d.value.F.left,
                        y: d.value.F.top
                    },
                    V: d.value.M,
                    J: d.value.J,
                    R: d.value.K,
                    O: d.value.O
                }
            }
        }))
    };
    var Wk = function(a, b, c) {
        this.bb = a;
        this.Zb = b;
        this.oa = c
    };
    x(Wk, yj);
    Wk.prototype.Ka = function(a, b) {
        var c = b.Ga;
        b = Uk(this.Zb, this.bb, this.oa, b.Ze);
        c = Pj(b, Lj(this.Zb, c));
        return {
            La: a.Da.h(c),
            Ia: {}
        }
    };
    var Xk = function(a, b, c) {
        this.bb = a;
        this.Zb = b;
        this.Zf = c
    };
    x(Xk, yj);
    Xk.prototype.Ka = function(a, b) {
        b = Uk(this.Zb, this.bb, void 0, b.Ze);
        var c = Ak(this.Zb, this.Zf);
        b = Pj(b, c);
        return {
            La: a.Da.h(b),
            Ia: {}
        }
    };

    function Yk(a) {
        return a.document.Sg.h(R(function(b) {
            return "visible" === b
        }), S(), Y(a.i, 1))
    };
    var Zk;
    Zk = ["av.key", "js", "20230213"].slice(-1)[0];

    function $k(a, b, c) {
        var d;
        return b.h(S(), X(function(e) {
            return c.h(R(function() {
                if (!d) {
                    d = !0;
                    try {
                        e.next()
                    } finally {
                        d = !1
                    }
                }
                return !0
            }))
        }), W(!1), Y(a.i, 1))
    };

    function al(a, b) {
        a.za && (a.cb = a.za);
        a.za = b;
        a.cb && a.cb.value ? (b = Math.max(0, Xa(b.timestamp, a.cb.timestamp)), a.totalTime += b, a.ga += b) : a.ga = 0;
        return a
    }

    function bl() {
        return J(df(al, {
            totalTime: 0,
            ga: 0
        }), R(function(a) {
            return a.totalTime
        }))
    }

    function cl() {
        return J(df(al, {
            totalTime: 0,
            ga: 0
        }), R(function(a) {
            return a.ga
        }))
    };

    function dl() {
        var a;
        return J(Zf(function(b) {
            return void(a = b.timestamp)
        }), cl(), R(function(b) {
            return {
                timestamp: a,
                value: Math.round(b)
            }
        }))
    };

    function el() {
        return J(cl(), df(function(a, b) {
            return Math.max(a, b)
        }, 0), R(function(a) {
            return Math.round(a)
        }))
    };

    function fl(a) {
        return J(qi(Q(a)), el())
    };

    function gl(a) {
        return J(li(R(function(b) {
            return pi(b, a)
        })), bl(), R(function(b) {
            return Math.round(b)
        }))
    };

    function hl(a, b, c, d, e) {
        var f = Pi;
        if (1 < f.length)
            for (var g = 0; g < f.length - 1; g++)
                if (f[g] < f[g + 1]) throw Error();
        g = e.h(W(void 0), X(function() {
            return c.h(dl())
        }), S(), Y(a, 1));
        e = e.h(W(void 0), X(function() {
            return c.h(el())
        }), S(), Y(a, 1));
        return {
            Ob: d.h(W(void 0), X(function() {
                return b.h(Ei(fl, f))
            }), S(xb), Y(a, 1)),
            Yb: d.h(W(void 0), X(function() {
                return b.h(Ei(gl, f), R(function(h) {
                    return h.map(function(k, l) {
                        return 0 < l ? k - h[l - 1] : k
                    })
                }))
            }), S(xb), Y(a, 1)),
            Nb: e,
            Ua: g.h(S(Jh), Y(a, 1))
        }
    };
    var jl = function(a, b) {
            var c = this;
            this.l = a;
            this.Ld = this.Dc = null;
            this.Zg = b.h(S()).subscribe(function(d) {
                il(c);
                c.Ld = d
            })
        },
        kl = function(a, b) {
            il(a);
            a.Dc = a.l.setTimeout(function() {
                var c;
                return void(null == (c = a.Ld) ? void 0 : c.next())
            }, b)
        },
        il = function(a) {
            null !== a.Dc && a.l.clearTimeout(a.Dc);
            a.Dc = null
        };
    jl.prototype.lb = function() {
        il(this);
        this.Zg.unsubscribe();
        this.Ld = null
    };

    function ll(a, b, c, d, e) {
        var f = Ui.nf;
        var g = void 0 === g ? new jl(b, d) : g;
        return (new K(function(h) {
            var k = c.h(W(void 0), X(function() {
                return ml(e)
            })).h(R(function(l) {
                var p = l.value;
                l = l.timestamp;
                var t = p.visible;
                p = p.Ua;
                var n = p >= f;
                n || !t ? il(g) : (l = Math.max(0, Xa(b.now(), l)), kl(g, Math.max(0, f - p - l)));
                return n
            }), df(function(l, p) {
                return p || l
            }, !1), S()).subscribe(h);
            return function() {
                g.lb();
                k.unsubscribe()
            }
        })).h(Vf(function(h) {
            return !h
        }, !0), Y(a, 1))
    }

    function ml(a) {
        return Di([a, a.h(dl())]).h(R(function(b) {
            var c = u(b);
            b = c.next().value;
            c = c.next().value;
            return {
                timestamp: b.timestamp,
                value: {
                    visible: b.value,
                    Ua: c.value
                }
            }
        }), S(function(b, c) {
            return Jh(b, c, function(d, e) {
                return d.Ua === e.Ua && d.visible === e.visible
            })
        }))
    };

    function nl(a, b, c) {
        var d = c.h(R(function(e) {
            return {
                value: e,
                timestamp: a.l.now()
            }
        }), S(Jh));
        return b instanceof K ? b.h(S(), X(function(e) {
            return e ? (new Z({
                value: !1,
                timestamp: a.l.now()
            })).U(a.i) : d
        })) : !1 === b.value ? d : new Z(!1)
    }

    function ol(a, b, c, d, e, f) {
        var g = Ui;
        b = b instanceof K ? b.h(W(!1), S()) : b;
        var h = !(Wj() || Xj());
        c = nl(a, c, d);
        a = f.Da.h(Vh(a.i));
        return Object.assign({}, g, {
            uc: c,
            rf: e,
            me: h,
            Ve: b,
            wc: a
        })
    };

    function pl() {
        var a = ob();
        return a ? ub("Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;MiBOX".split(";"), function(b) {
            return lb(a, b)
        }) || lb(a, "OMI/") && !lb(a, "XiaoMi/") ? !0 : lb(a, "Presto") && lb(a, "Linux") && !lb(a, "X11") && !lb(a, "Android") && !lb(a, "Mobi") : !1
    };

    function ql() {
        var a = void 0 === a ? Ca : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    var Ui = Object.freeze({
            nf: 1E3,
            td: .5,
            Kd: .3
        }),
        Pi = Object.freeze([1, .75, Ui.td, Ui.Kd, 0]),
        uh = "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=error&bin=7&v=" + Zk;

    function rl(a, b) {
        return {
            sd: .01,
            Md: Ug(a.l, 36E5),
            oa: a.l.Na(100).h(Y(a.i, 1)),
            bb: b
        }
    }
    var sl = function(a, b) {
        var c = Symbol(),
            d = Symbol(),
            e = Symbol(),
            f = Symbol(),
            g = this;
        this.Vg = a;
        this.Ec = b;
        this.Je = c;
        this.Bb = d;
        this.hc = e;
        this.ic = f;
        this.We = new xf;
        this.Bg = new K(function(h) {
            var k = g.We.subscribe(h);
            return function() {
                k.unsubscribe();
                g.lb()
            }
        });
        this.Mf = [];
        this.nd = new xf;
        this.Mf.push(this.Je, this.Bb, this.hc, this.ic)
    };
    sl.prototype.start = function(a) {
        void 0 === this.Cd && (this.Cd = tl(a, this.nd.h(Y(a.i, 1)), this.Ec.sd, this.Ec.Md, this.Ec.oa, this.Ec.bb, this.Je, this.Bb, this.hc, this.ic).subscribe(this.We))
    };
    sl.prototype.lb = function() {
        this.nd.complete();
        var a;
        null == (a = this.Cd) || a.unsubscribe();
        this.Cd = void 0
    };
    sl.prototype.handleEvent = function() {};

    function tl(a, b, c, d, e, f, g, h, k, l) {
        var p = Yk(a).h(R(function(n) {
                return !n
            })),
            t = new zj(a, [new Ek(a, Pi), new sk(a, e), new Vj(a, e), new Xk(f, a, Pi), new Wk(f, a, e), new Pk(a, e)]);
        return jh(a, b, function(n, w) {
            var A = jj(n, w.element),
                y = A.ed,
                C = A.kc,
                G = A.ld,
                N = A.Qf,
                ra = A.Ma,
                B = A.tg,
                z = A.Gd,
                T = A.Hd,
                Ua = A.Ga,
                Qc = A.wa,
                la = A.wh,
                ii = A.Za;
            A = A.Cc;
            var Fb = (new Z(w.Yf)).U(n.i),
                mb = Fb.h(R(function(F) {
                    return F.ih
                })),
                Ma = ra.h(fe(B), R(function(F) {
                    var Fa = u(F);
                    F = Fa.next().value;
                    Fa = Fa.next().value;
                    (F = F || Fa) || ((F = lb(ob(), "CrKey") || lb(ob(), "PlayStation") ||
                        lb(ob(), "Roku") || pl() || lb(ob(), "Xbox")) || (F = ob(), F = lb(F, "AppleTV") || lb(F, "Apple TV") || lb(F, "CFNetwork") || lb(F, "tvOS")), F || (F = ob(), F = lb(F, "sdk_google_atv_x86") || lb(F, "Android TV")));
                    return F
                }));
            B = new wj(n, w, N, ra, Ua, mb);
            mb = Fb.h(R(function(F) {
                return F.Kf
            }));
            mb = t.Ka(B, {
                Ma: ra,
                Ga: Ua,
                Ze: mb
            });
            var pa = mb.La,
                Rc = mb.Ia;
            mb = Rc.Nd;
            var im = Rc.Od;
            Rc = Rc.Vd;
            var nb = ol(n, T, Ma, p, la, B);
            la = Vi(n.i, n.l, pa, nb);
            Ma = hl(n.i, la.Ba.Xd, la.Ba.visible, la.Ud, la.Vb);
            var Sc = ll(n.i, n.l, la.Vb, la.Ba.O, la.Ba.visible);
            pa = yi(n.i, n.l, pa, nb);
            nb =
                Oi(n.l, n.i, pa.Ba.Xd, pa.Ba.visible, pa.Ud, pa.Vb);
            var nf = {
                    be: Ti(n.i, n.l, pa.Vb, nb.Nb)
                },
                of = Fb.h(R(function(F) {
                    return F.dg
                }), W(!1));
            la = Uh(n.i, of , Object.assign({}, pa.Ba, nb, nf), Object.assign({}, la.Ba, {
                be: fi(n, Sc),
                Ob: fi(n, Ma.Ob),
                Yb: fi(n, Ma.Yb),
                Nb: fi(n, Ma.Nb),
                Ua: Ma.Ua.h(R(function(F) {
                    return new Ph(n.l, F)
                }))
            }));
            pa = ei(n, d.h(af("t")));
            Ma = null !== f && f.validate();
            Sc = (Ma ? f.fh : mg).h(Y(n.i, 1), af("u"));
            pa = zf(pa, Sc);
            Ma = (Ma ? f.Ke.h(Fe(1), af(!0), W(!1)) : (new Z(!0)).U(n.i)).h(X(function(F) {
                return F ? new K(function(Fa) {
                    w.Wa(g, {}, function(jm) {
                        Fa.next(jm);
                        Fa.complete()
                    })
                }) : mg
            }), W(!1), Y(n.i, 1));
            Sc = $k(n, la.O, pa.h(U(function(F) {
                return null !== F
            })));
            nb = ul(n, B, y);
            nf = vl(n, pa, w.element); of = nb.Df.h(W({
                x: 0,
                y: 0
            }));
            var mm = Fb.h(R(function(F) {
                return F.dh
            }), W(!1), S(), Zf(function(F) {
                Zg = F
            }), Y(n.i, 1));
            return Object.assign({}, {
                H: new Z(n.H),
                xc: new Z("lidar2"),
                ph: new Z("lidartos"),
                qf: new Z("vattr"),
                Hf: new Z(Zk),
                Gf: new Z(7),
                kd: new Z(n.validate() ? null : new Ka),
                Lf: new Z(wl(n.document)),
                ca: new Z(wh),
                qd: pa,
                Pc: pa,
                Zh: Sc,
                Ge: Ma,
                Wa: new Z(w.Wa),
                Bb: new Z(h),
                hc: new Z(k),
                ic: new Z(l),
                Of: new Z(n.nb ? 1 : void 0),
                Rf: new Z(n.Jf ? 1 : void 0),
                Ma: ra,
                Za: ii,
                eb: ii.h(U(function(F) {
                    return F
                }), R(function() {
                    return n.eb.bind(n)
                })),
                Nd: mb.h(Y(n.i, 1)),
                Od: im.h(Y(n.i, 1)),
                bg: Fb.h(R(function(F) {
                    return F.cg
                })),
                Le: mm,
                Cc: A,
                Me: Fb.h(R(function(F) {
                    return F.Pf
                })),
                eg: new Z(new Sg(n, new Vg(n), "GET")),
                mf: new Z(Zg && (new $g(n)).ka({
                    jc: "GET"
                })),
                Nf: w.element.h(R(function(F) {
                    return null !== F
                })),
                Kb: Qc,
                qh: Qc,
                ld: G.h(W([])),
                kg: G.h(R(function(F) {
                    return 0 < F.length ? !0 : null
                }), W(null), S()),
                kc: C.h(W([]), Y(n.i,
                    1)),
                Wh: Fb,
                ed: y,
                Eb: B.Eb,
                Gd: z.h(W(0), Y(n.i, 1)),
                Cg: N,
                Ga: Ua.h(W(0), Y(n.i, 1)),
                xb: new Z(vh),
                Tc: new Z(Gh),
                Hd: T,
                Pe: B.Mb.h(Vh(n.i)),
                ce: B.ce
            }, la, {
                qc: P([la.qc, of ]).h(R(function(F) {
                    var Fa = u(F);
                    F = Fa.next().value;
                    Fa = Fa.next().value;
                    return Th(F, Fa)
                }), S(Rh))
            }, nb, {
                ae: ch(n),
                lg: nf,
                Vd: Rc
            })
        }, th(a, c))
    }

    function ul(a, b, c) {
        var d = void 0 === d ? Ca : d;
        var e, f;
        d = (null == (e = d.performance) ? void 0 : null == (f = e.timing) ? void 0 : f.navigationStart) || 0;
        return Object.assign({}, {
            Bf: new Z(d),
            Af: di(a, b)
        }, ci(a, b, c))
    }

    function vl(a, b, c) {
        return b.h(U(function(d) {
            return null !== d
        }), X(function() {
            return c
        }), R(function(d) {
            var e = yg(a);
            return 0 < e.length && 0 <= e.indexOf(d)
        }), R(function(d) {
            return !d
        }))
    };
    var xl = function() {
        this.pf = 0
    };
    xl.prototype.Ha = function(a, b) {
        var c = this;
        return function() {
            var d = D.apply(0, arguments);
            c.pf = a;
            return b.apply(null, v(d))
        }
    };
    var yl = function() {
        this.s = new xl;
        this.i = new rg;
        this.id = bd()
    };
    yl.prototype.Ad = function() {
        return mg
    };
    q.Object.defineProperties(yl.prototype, {
        Ac: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.id
            }
        }
    });
    var zl = function(a) {
        var b = D.apply(1, arguments),
            c = this;
        this.qb = [];
        this.qb.push(a);
        b.forEach(function(d) {
            c.qb.push(d)
        })
    };
    zl.prototype.ka = function(a) {
        return this.qb.some(function(b) {
            return b.ka(a)
        })
    };
    zl.prototype.N = function(a, b) {
        for (var c = 0; c < this.qb.length; c++)
            if (this.qb[c].ka(b)) return this.qb[c].N(a, b);
        throw new La;
    };
    var Al = function(a) {
        this.na = a
    };
    Al.prototype.ping = function() {
        var a = this,
            b = Q.apply(null, v(D.apply(0, arguments))).h(ie(function(c) {
                return Bl(a, c)
            }), Oe(function(c) {
                return c
            }), yf(1));
        b.connect();
        return b
    };
    var Bl = function(a, b) {
        var c = new xf(1);
        Cl(a.na, b, function() {
            c.next(!0);
            c.complete()
        }, function() {
            c.next(!1);
            c.complete()
        });
        return c
    };
    q.Object.defineProperties(Al.prototype, {
        Cb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.na.ka()
            }
        }
    });
    var Dl = function(a) {
        this.na = a;
        this.timeline = Va
    };
    m = Dl.prototype;
    m.setTimeout = function(a, b) {
        return Number(this.na.setTimeout(function() {
            return a()
        }, b))
    };
    m.clearTimeout = function(a) {
        this.na.clearTimeout(a)
    };
    m.now = function() {
        return new Wa(Date.now(), this.timeline)
    };
    m.interval = function(a, b) {
        var c = this.Na(a).subscribe(b);
        return function() {
            return void c.unsubscribe()
        }
    };
    m.Na = function(a) {
        return Ug(this, a).h(Cf(), df(function(b) {
            return b + 1
        }, -1))
    };
    m.sa = function() {
        return !0
    };

    function El(a) {
        var b = Object.assign({}, a);
        delete b.timestamp;
        return {
            timestamp: new Wa(a.timestamp, Va),
            value: b
        }
    };

    function Fl(a) {
        return void 0 !== a && "number" === typeof a.x && "number" === typeof a.y && "number" === typeof a.width && "number" === typeof a.height
    };
    var Hl = function(a, b, c) {
        c = void 0 === c ? null : c;
        yl.call(this);
        this.na = a;
        this.uh = b;
        this.Va = c;
        this.Td = new xf(3);
        this.Td.h(U(function(d) {
            return "sessionStart" === d.value.type
        }));
        this.fh = this.Td.h(U(function(d) {
            return "sessionFinish" === d.value.type
        }));
        this.Ke = new xf(1);
        this.vh = new xf;
        this.Be = new xf(10);
        this.l = new Dl(a);
        this.H = new Sg(this, new Al(a), "GET");
        this.vg = this.na.ka();
        Gl(this)
    };
    x(Hl, yl);
    Hl.prototype.validate = function() {
        return this.vg
    };
    var Gl = function(a) {
        Il(a.na, function(e) {
            return void a.Td.next(El(e))
        }, a.uh);
        a.na.addEventListener("geometryChange", function(e) {
            if (void 0 === e) var f = !1;
            else {
                f = e.data;
                var g;
                (g = void 0 === f) || (g = f.viewport, g = void 0 === g || void 0 !== g && "number" === typeof g.width && "number" === typeof g.height);
                g ? (f = f.adView, f = void 0 !== f && "number" === typeof f.percentageInView && (void 0 === f.geometry || Fl(f.geometry)) && (void 0 === f.onScreenGeometry || Fl(f.onScreenGeometry))) : f = !1
            }
            f ? a.Be.next(El(e)) : .01 >= Math.random() && (e = "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=error&name=invalid_geo&context=1092&msg=" +
                JSON.stringify(e), a.H.N(e).sendNow())
        });
        for (var b = {}, c = u("loaded start firstQuartile midpoint thirdQuartile complete pause resume bufferStart bufferFinish skipped volumeChange playerStateChange adUserInteraction".split(" ")), d = c.next(); !d.done; b = {
                ac: b.ac
            }, d = c.next()) b.ac = d.value, a.na.addEventListener(b.ac, function(e) {
            return function(f) {
                f.type === e.ac && a.vh.next(El(f))
            }
        }(b));
        a.na.addEventListener("impression", function(e) {
            a.Ke.next(El(e))
        })
    };
    q.Object.defineProperties(Hl.prototype, {
        global: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return Jl
            }
        }
    });
    var Jl = {};
    var Kl = function(a, b) {
            b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
            2048 > b.length && b.push(a)
        },
        Ll = function(a, b) {
            var c = void 0 === c ? !1 : c;
            var d = window,
                e = "undefined" !== typeof queueMicrotask;
            return function() {
                c && e && queueMicrotask(function() {
                    d.google_rum_task_id_counter = d.google_rum_task_id_counter || 1;
                    d.google_rum_task_id_counter += 1
                });
                var f = ql(),
                    g = 3;
                try {
                    var h = b.apply(this, arguments)
                } catch (l) {
                    throw g = 13, l;
                } finally {
                    if (d.google_measure_js_timing && f) {
                        var k = ql() || 0;
                        Kl(Object.assign({}, {
                            label: a.toString(),
                            value: f,
                            duration: k - f,
                            type: g
                        }, c && e && {
                            taskId: d.google_rum_task_id_counter = d.google_rum_task_id_counter || 1
                        }), d)
                    }
                }
                return h
            }
        };
    var Ml = function() {
        xl.apply(this, arguments)
    };
    x(Ml, xl);
    Ml.prototype.Ha = function(a, b) {
        return xl.prototype.Ha.call(this, a, Ll(a, b))
    };
    var Ol = function() {
        for (var a = u(D.apply(0, arguments)), b = a.next(); !b.done; b = a.next())
            if (b = b.value, b.sa()) {
                this.l = b;
                return
            }
        this.l = new Nl
    };
    m = Ol.prototype;
    m.sa = function() {
        return this.l.sa()
    };
    m.now = function() {
        return this.l.now()
    };
    m.setTimeout = function(a, b) {
        return this.l.setTimeout(a, b)
    };
    m.clearTimeout = function(a) {
        this.l.clearTimeout(a)
    };
    m.interval = function(a, b) {
        var c = this.Na(a).subscribe(b);
        return function() {
            return void c.unsubscribe()
        }
    };
    m.Na = function(a) {
        return this.l.Na(a)
    };
    q.Object.defineProperties(Ol.prototype, {
        timeline: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.l.timeline
            }
        }
    });
    var Nl = function() {
        this.timeline = Symbol()
    };
    m = Nl.prototype;
    m.sa = function() {
        return !1
    };
    m.now = function() {
        return new Wa(0, this.timeline)
    };
    m.setTimeout = function() {
        return 0
    };
    m.clearTimeout = function() {};
    m.interval = function() {
        return function() {}
    };
    m.Na = function() {
        return mg
    };
    var Pl = function(a, b) {
        this.G = a;
        this.s = b
    };
    m = Pl.prototype;
    m.setTimeout = function(a, b) {
        return this.G.setTimeout(this.s.Ha(734, a), b)
    };
    m.clearTimeout = function(a) {
        this.G.clearTimeout(a)
    };
    m.interval = function(a, b) {
        var c = this.Na(a).subscribe(b);
        return function() {
            return void c.unsubscribe()
        }
    };
    m.Na = function(a) {
        var b = this;
        return new K(function(c) {
            var d = 0,
                e = b.G.setInterval(function() {
                    c.next(d++)
                }, a);
            return function() {
                b.G.clearInterval(e)
            }
        })
    };
    m.sa = function() {
        return !!this.G.clearTimeout && "setTimeout" in this.G && "setInterval" in this.G && !!this.G.clearInterval
    };
    var Ql = function(a, b) {
        Pl.call(this, a, b);
        this.timeline = Va
    };
    x(Ql, Pl);
    Ql.prototype.now = function() {
        return new Wa(this.G.Date.now(), this.timeline)
    };
    Ql.prototype.sa = function() {
        return !!this.G.Date && !!this.G.Date.now && Pl.prototype.sa.call(this)
    };
    var Rl = function(a, b) {
        Pl.call(this, a, b);
        this.timeline = Ta
    };
    x(Rl, Pl);
    Rl.prototype.now = function() {
        return new Wa(this.G.performance.now(), this.timeline)
    };
    Rl.prototype.sa = function() {
        return !!this.G.performance && !!this.G.performance.now && Pl.prototype.sa.call(this)
    };
    var Sl = function(a) {
        this.context = a
    };
    Sl.prototype.ping = function() {
        var a = this;
        return Q(D.apply(0, arguments).map(function(b) {
            try {
                var c = a.context.global;
                c.google_image_requests || (c.google_image_requests = []);
                var d = c.document;
                d = void 0 === d ? document : d;
                var e = d.createElement("img");
                e.src = b;
                c.google_image_requests.push(e);
                return !0
            } catch (f) {
                return !1
            }
        }).every(function(b) {
            return b
        }))
    };
    q.Object.defineProperties(Sl.prototype, {
        Cb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !Wg(this.context)
            }
        }
    });
    var Tl = function(a) {
        this.context = a
    };
    Tl.prototype.ping = function() {
        var a = this;
        return Q(D.apply(0, arguments).map(function(b) {
            var c;
            return null == (c = a.context.global.navigator) ? void 0 : c.sendBeacon(b)
        }).every(function(b) {
            return b
        }))
    };
    q.Object.defineProperties(Tl.prototype, {
        Cb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return !Wg(this.context) && void 0 !== (null == (a = this.context.global.navigator) ? void 0 : a.sendBeacon)
            }
        }
    });
    var Ul = ["FRAME", "IMG", "IFRAME"],
        Vl = /^[01](px)?$/;

    function Wl(a) {
        return "string" === typeof a ? document.getElementById(a) : a
    }

    function Xl(a, b) {
        var c = !0,
            d = !0,
            e = void 0,
            f = !0;
        c = void 0 === c ? !0 : c;
        d = void 0 === d ? !1 : d;
        f = void 0 === f ? !1 : f;
        if (a = Wl(a)) {
            e || (e = function(N, ra, B) {
                N.addEventListener(ra, B)
            });
            for (var g = !1, h = function(N) {
                    g || (g = !0, b(N))
                }, k, l, p = 0; p < Ul.length; ++p)
                if (Ul[p] == a.tagName) {
                    l = 3;
                    k = [a];
                    break
                }
            k || (k = a.querySelectorAll(Ul.join(",")), l = 2);
            var t = 0,
                n = 0,
                w = a = !1;
            p = {};
            for (var A = 0; A < k.length; p = {
                    bc: p.bc
                }, A++) {
                var y = k[A];
                if (!("IMG" != y.tagName || !y.complete || y.naturalWidth && y.naturalHeight ? Vl.test(y.getAttribute("width")) && Vl.test(y.getAttribute("height")) :
                        1)) {
                    if ("IMG" == y.tagName) var C = y.naturalWidth && y.naturalHeight ? !0 : !1;
                    else try {
                        C = "complete" === (y.readyState ? y.readyState : y.contentWindow && y.contentWindow.document && y.contentWindow.document.readyState) ? !0 : !1
                    } catch (N) {
                        C = void 0 === d ? !1 : d
                    }
                    if (C) a = !0;
                    else {
                        t++;
                        p.bc = "IMG" === y.tagName;
                        var G = function(N) {
                            return function() {
                                t--;
                                t || h(l);
                                N.bc && (n--, !n && w && h(l))
                            }
                        }(p);
                        e(y, "load", G);
                        p.bc && (n++, e(y, "error", G))
                    }
                }
            }
            k = null;
            if (0 === t && !a && "complete" === Ca.document.readyState) l = 5;
            else if (t || !a) {
                e(Ca, "load", function() {
                    f && n ? w = !0 :
                        h(4)
                });
                return
            }
            c && h(l)
        }
    };

    function Yl(a, b, c) {
        if (a)
            for (var d = 0; null != a && 500 > d && !c(a); ++d) a = b(a)
    }

    function Zl(a, b) {
        Yl(a, function(c) {
            try {
                return c === c.parent ? null : c.parent
            } catch (d) {}
            return null
        }, b)
    }

    function $l(a, b) {
        if ("IFRAME" == a.tagName) b(a);
        else {
            a = a.querySelectorAll("IFRAME");
            for (var c = 0; c < a.length && !b(a[c]); ++c);
        }
    }

    function am(a) {
        return (a = a.ownerDocument) && (a.parentWindow || a.defaultView) || null
    }

    function bm(a, b, c) {
        try {
            var d = JSON.parse(c.data)
        } catch (g) {}
        if ("object" === typeof d && d && "creativeLoad" === d.type) {
            var e = am(a);
            if (c.source && e) {
                var f;
                Zl(c.source, function(g) {
                    try {
                        if (g.parent === e) return f = g, !0
                    } catch (h) {}
                });
                f && $l(a, function(g) {
                    if (g.contentWindow === f) return b(d), !0
                })
            }
        }
    }

    function cm(a) {
        return "string" === typeof a ? document.getElementById(a) : a
    }
    var dm = function(a, b) {
        var c = cm(a);
        if (c)
            if (c.onCreativeLoad) c.onCreativeLoad(b);
            else {
                var d = b ? [b] : [],
                    e = function(f) {
                        for (var g = 0; g < d.length; ++g) try {
                            d[g](1, f)
                        } catch (h) {}
                        d = {
                            push: function(h) {
                                h(1, f)
                            }
                        }
                    };
                c.onCreativeLoad = function(f) {
                    d.push(f)
                };
                c.setAttribute("data-creative-load-listener", "");
                c.addEventListener("creativeLoad", function(f) {
                    e(f.detail)
                });
                Ca.addEventListener("message", function(f) {
                    bm(c, e, f)
                })
            }
    };
    var em = function(a, b) {
            var c = this;
            this.global = a;
            this.Hc = b;
            this.Sg = this.document ? gf(Q(!0), kg(this.document, "visibilitychange")).h(Mg(this.Hc.s, 748), R(function() {
                return c.document ? c.document.visibilityState : "visible"
            }), S()) : Q("visible");
            this.Pg = this.document ? kg(this.document, "DOMContentLoaded").h(Mg(this.Hc.s, 739), Fe(1)) : Q(tk("DOMContentLoaded"))
        },
        Mk = function(a) {
            return a.document ? a.document.readyState : "complete"
        },
        wl = function(a) {
            return null !== a.document && void 0 !== a.document.visibilityState
        };
    em.prototype.querySelector = function(a) {
        return this.document ? this.document.querySelector(a) : null
    };
    em.prototype.querySelectorAll = function(a) {
        return this.document ? wb(this.document.querySelectorAll(a)) : []
    };
    var Sj = function(a) {
        return null !== a.document && "function" === typeof a.document.elementFromPoint
    };
    em.prototype.elementFromPoint = function(a, b) {
        if (!this.document || !Sj(this)) return null;
        a = this.document.elementFromPoint(a, b);
        return null === a ? null : new xg(a)
    };
    var vj = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        if (void 0 === b.j || !a.document) return Q(b).h(Mg(a.Hc.s, 749));
        var d = new xf(1),
            e = function() {
                d.next(b)
            };
        c || dm(b.j, e);
        Xl(b.j, e);
        return d.h(Mg(a.Hc.s, 749), Fe(1))
    };
    q.Object.defineProperties(em.prototype, {
        document: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return Bb(this.global, "document") ? this.global.document || null : null
            }
        }
    });
    var fm = function(a) {
        Yc.call(this, a)
    };
    x(fm, Yc);
    fm.prototype.Ce = function() {
        return Ac(rc(this, 2), "")
    };
    var hm = function(a) {
        Yc.call(this, a, -1, gm)
    };
    x(hm, Yc);
    var km = function(a, b) {
            return tc(a, 2, b)
        },
        lm = function(a, b) {
            return tc(a, 3, b)
        },
        nm = function(a, b) {
            return tc(a, 4, b)
        },
        om = function(a, b) {
            return tc(a, 5, b)
        },
        pm = function(a, b) {
            return tc(a, 9, b)
        },
        qm = function(a, b) {
            return zc(a, fm, 10, b)
        },
        rm = function(a, b) {
            return tc(a, 11, b)
        },
        sm = function(a, b) {
            return tc(a, 1, b)
        },
        tm = function(a, b) {
            return tc(a, 7, b)
        },
        gm = [10, 6];
    var um = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function vm(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function wm(a) {
        var b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function xm(a) {
        if (!wm(a)) return null;
        var b = vm(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(um).then(function(c) {
            null != b.uach || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function ym(a) {
        var b;
        return rm(qm(om(km(sm(nm(tm(pm(lm(new hm, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new fm;
            d = tc(d, 1, c.brand);
            return tc(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function zm(a) {
        var b, c;
        return null != (c = null == (b = xm(a)) ? void 0 : b.then(function(d) {
            return ym(d)
        })) ? c : null
    };
    var rk = function(a, b, c) {
        a = void 0 === a ? window : a;
        b = void 0 === b ? null : b;
        c = void 0 === c ? new xl : c;
        yl.call(this);
        this.global = a;
        this.Va = b;
        this.s = c;
        this.Qg = kg(this.global, "pagehide").h(Mg(this.s, 941));
        this.af = kg(this.global, "load").h(Mg(this.s, 738), Fe(1));
        this.Rg = kg(this.global, "resize").h(Mg(this.s, 741));
        this.onMessage = kg(this.global, "message").h(Mg(this.s, 740));
        this.document = new em(this.global, this);
        this.l = new Ol(new Rl(this.G, this.s), new Ql(this.G, this.s));
        this.H = new zl(new $g(this), new Sg(this, new Vg(this),
            "GET"), new Sg(this, new Tl(this), "POST"), new Sg(this, new Sl(this), "GET"))
    };
    x(rk, yl);
    var Wg = function(a) {
        var b = a.global;
        return !!a.global.HTMLFencedFrameElement && !!b.fence && "function" === typeof b.fence.reportEvent
    };
    rk.prototype.eb = function(a) {
        Wg(this) && this.global.fence.reportEvent(a)
    };
    rk.prototype.Ad = function() {
        return this.Qg.h(Mg(this.s, 942), Y(this.i, 1), R(function() {}))
    };
    var ai = function(a) {
            var b = new rk(a.global.top, a.Va);
            b.H = a.H;
            return b
        },
        bi = function(a, b) {
            b.start();
            return kg(b, "message").h(Mg(a.s, 740))
        };
    rk.prototype.postMessage = function(a, b, c) {
        c = void 0 === c ? [] : c;
        this.global.postMessage(a, b, c)
    };
    rk.prototype.Bd = function() {
        return Rj(this.global) ? this.global.width : 0
    };
    rk.prototype.yd = function() {
        return Rj(this.global) ? this.global.height : 0
    };
    var qk = function(a, b) {
        try {
            var c = a.global;
            try {
                b && (c = c.top);
                a = c;
                var d = Wj() || Xj();
                b && null !== a && a != a.top && (a = a.top);
                try {
                    if (void 0 === d ? 0 : d) var e = (new Cj(a.innerWidth, a.innerHeight)).round();
                    else {
                        var f = (a || window).document,
                            g = "CSS1Compat" == f.compatMode ? f.documentElement : f.body;
                        e = (new Cj(g.clientWidth, g.clientHeight)).round()
                    }
                    var h = e
                } catch (A) {
                    h = new Cj(-12245933, -12245933)
                }
                b = h;
                var k = b.height,
                    l = b.width;
                if (-12245933 === l) var p = new Jj(l, l, l, l);
                else {
                    var t = Gj(Fj(c.document).mb),
                        n = t.x,
                        w = t.y;
                    p = new Jj(w, n + l, w + k, n)
                }
            } catch (A) {
                p =
                    new Jj(-12245933, -12245933, -12245933, -12245933)
            }
            return {
                left: p.left,
                top: p.top,
                width: p.Bd(),
                height: p.yd()
            }
        } catch (A) {
            return Qh
        }
    };
    rk.prototype.validate = function() {
        return this.global && this.l.sa() && this.H.ka()
    };
    var dh = function(a) {
        return (a = zm(a.global)) ? Zd(a) : null
    };
    q.Object.defineProperties(rk.prototype, {
        G: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return window
            }
        },
        nb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !Rj(this.global.top)
            }
        },
        Ed: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.nb || this.global.top !== this.global
            }
        },
        scrollY: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.global.scrollY
            }
        },
        MutationObserver: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.G.MutationObserver
            }
        },
        ResizeObserver: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.G.ResizeObserver
            }
        },
        sg: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                bb(!0, "Major version must be an integer");
                var a = ob();
                if (E("Trident") || E("MSIE")) {
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
                } else a = "";
                "" === a ? a = NaN : (a = a.split("."),
                    a = 0 === a.length ? NaN : Number(a[0]));
                return 8 <= a
            }
        },
        Jf: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return "vu" in this.global || "vv" in this.global
            }
        }
    });

    function Am(a, b, c, d, e) {
        var f = new Rg,
            g = new sl(f, {
                sd: b,
                Md: c,
                oa: d,
                bb: e
            });
        g.start(a);
        var h = function(k, l, p) {
            p(!0)
        };
        f.start(a, function(k, l, p) {
            g.nd.next(Object.assign({}, g.Vg.ue.get(k), {
                metadata: l,
                Yf: p,
                di: k,
                Wa: h
            }))
        }, function() {}, function() {
            g.lb()
        });
        return g.Bg
    };

    function Bm(a, b) {
        if (!b) throw Error("O`" + a);
        if ("string" !== typeof b && !(b instanceof String)) throw Error("P`" + a);
        if ("" === b.trim()) throw Error("Q`" + a);
    }

    function Cm(a) {
        if (!a) throw Error("T`functionToExecute");
    }

    function Dm(a, b) {
        if (null == b) throw Error("R`" + a);
        if ("number" !== typeof b || isNaN(b)) throw Error("S`" + a);
        if (0 > b) throw Error("U`" + a);
    };

    function Em() {
        return /\d+\.\d+\.\d+(-.*)?/.test("1.4.1-google_20221025")
    }

    function Fm() {
        for (var a = ["1", "4", "1"], b = ["1", "0", "3"], c = 0; 3 > c; c++) {
            var d = parseInt(a[c], 10),
                e = parseInt(b[c], 10);
            if (d > e) break;
            else if (d < e) return !1
        }
        return !0
    };
    var Gm = function(a, b, c, d) {
            this.Ee = a;
            this.method = b;
            this.version = c;
            this.args = d
        },
        Hm = function(a) {
            return !!a && void 0 !== a.omid_message_guid && void 0 !== a.omid_message_method && void 0 !== a.omid_message_version && "string" === typeof a.omid_message_guid && "string" === typeof a.omid_message_method && "string" === typeof a.omid_message_version && (void 0 === a.omid_message_args || void 0 !== a.omid_message_args)
        },
        Im = function(a) {
            return new Gm(a.omid_message_guid, a.omid_message_method, a.omid_message_version, a.omid_message_args)
        };
    Gm.prototype.vb = function() {
        var a = {};
        a = (a.omid_message_guid = this.Ee, a.omid_message_method = this.method, a.omid_message_version = this.version, a);
        void 0 !== this.args && (a.omid_message_args = this.args);
        return a
    };
    var Jm = function(a) {
        this.Rc = a
    };
    Jm.prototype.vb = function() {
        return JSON.stringify(void 0)
    };

    function Km(a, b) {
        return a && (a[b] || (a[b] = {}))
    };

    function Lm() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 16 * Math.random() | 0;
            return "y" === a ? (b & 3 | 8).toString(16) : b.toString(16)
        })
    };

    function Mm() {
        var a = D.apply(0, arguments);
        Nm(function() {
            throw new(Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat(v(a))));
        }, function() {
            return console.error.apply(console, v(a))
        })
    }

    function Nm(a, b) {
        "undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b()
    };
    var Om = function() {
        if ("undefined" !== typeof omidGlobal && omidGlobal) return omidGlobal;
        if ("undefined" !== typeof global && global) return global;
        if ("undefined" !== typeof window && window) return window;
        if ("undefined" !== typeof globalThis && globalThis) return globalThis;
        var a = Function("return this")();
        if (a) return a;
        throw Error("V");
    }();
    var Pm = function(a) {
        try {
            return a.frames ? !!a.frames.omid_v1_present : !1
        } catch (b) {
            return !1
        }
    };
    var Qm = function(a) {
        this.Rc = a;
        this.handleExportedMessage = Qm.prototype.hg.bind(this)
    };
    x(Qm, Jm);
    Qm.prototype.sendMessage = function(a, b) {
        b = void 0 === b ? this.Rc : b;
        if (!b) throw Error("W");
        b.handleExportedMessage(a.vb(), this)
    };
    Qm.prototype.hg = function(a, b) {
        if (Hm(a) && this.onMessage) this.onMessage(Im(a), b)
    };

    function Rm(a) {
        return null != a && "undefined" !== typeof a.top && null != a.top
    }

    function Sm(a) {
        if (a === Om) return !1;
        try {
            if ("undefined" === typeof a.location.hostname) return !0
        } catch (b) {
            return !0
        }
        return !1
    };
    var Tm = function(a, b) {
        this.Rc = b = void 0 === b ? Om : b;
        var c = this;
        a.addEventListener("message", function(d) {
            if ("object" === typeof d.data) {
                var e = d.data;
                if (Hm(e) && d.source && c.onMessage) c.onMessage(Im(e), d.source)
            }
        })
    };
    x(Tm, Jm);
    Tm.prototype.sendMessage = function(a, b) {
        b = void 0 === b ? this.Rc : b;
        if (!b) throw Error("W");
        b.postMessage(a.vb(), "*")
    };
    var Um = ["omid", "v1_VerificationServiceCommunication"],
        Vm = ["omidVerificationProperties", "serviceWindow"];

    function Wm(a, b) {
        return b.reduce(function(c, d) {
            return c && c[d]
        }, a)
    };
    var Xm = function(a) {
        if (!a) {
            var b;
            "undefined" === typeof b && "undefined" !== typeof window && window && (b = window);
            b = Rm(b) ? b : Om;
            var c = void 0 === c ? Pm : c;
            a = [];
            var d = Wm(b, Vm);
            d && a.push(d);
            a.push(Rm(b) ? b.top : Om);
            a: {
                a = u(a);
                for (var e = a.next(); !e.done; e = a.next()) {
                    b: {
                        d = b;e = e.value;
                        var f = c;
                        if (!Sm(e)) try {
                            var g = Wm(e, Um);
                            if (g) {
                                var h = new Qm(g);
                                break b
                            }
                        } catch (k) {}
                        h = f(e) ? new Tm(d, e) : null
                    }
                    if (d = h) {
                        a = d;
                        break a
                    }
                }
                a = null
            }
        }
        if (this.Db = a) this.Db.onMessage = this.ig.bind(this);
        else if (c = (c = Om.omid3p) && "function" === typeof c.registerSessionObserver &&
            "function" === typeof c.addEventListener ? c : null) this.Rb = c;
        this.Xg = this.Yg = 0;
        this.gd = {};
        this.Dd = [];
        this.yc = (c = Om.omidVerificationProperties) ? c.injectionId : void 0
    };
    Xm.prototype.ka = function() {
        return !(!this.Db && !this.Rb)
    };
    var Il = function(a, b, c) {
        Cm(b);
        a.Rb ? a.Rb.registerSessionObserver(b, c, a.yc) : a.ub("addSessionListener", b, c, a.yc)
    };
    Xm.prototype.addEventListener = function(a, b) {
        Bm("eventType", a);
        Cm(b);
        this.Rb ? this.Rb.addEventListener(a, b, this.yc) : this.ub("addEventListener", b, a, this.yc)
    };
    var Cl = function(a, b, c, d) {
            Bm("url", b);
            Om.document && Om.document.createElement ? Ym(a, b, c, d) : a.ub("sendUrl", function(e) {
                e && c ? c() : !e && d && d()
            }, b)
        },
        Ym = function(a, b, c, d) {
            var e = Om.document.createElement("img");
            a.Dd.push(e);
            var f = function(g) {
                var h = a.Dd.indexOf(e);
                0 <= h && a.Dd.splice(h, 1);
                g && g()
            };
            e.addEventListener("load", f.bind(a, c));
            e.addEventListener("error", f.bind(a, d));
            e.src = b
        };
    Xm.prototype.setTimeout = function(a, b) {
        Cm(a);
        Dm("timeInMillis", b);
        if (Zm()) return Om.setTimeout(a, b);
        var c = this.Yg++;
        this.ub("setTimeout", a, c, b);
        return c
    };
    Xm.prototype.clearTimeout = function(a) {
        Dm("timeoutId", a);
        Zm() ? Om.clearTimeout(a) : this.ff("clearTimeout", a)
    };
    Xm.prototype.setInterval = function(a, b) {
        Cm(a);
        Dm("timeInMillis", b);
        if ($m()) return Om.setInterval(a, b);
        var c = this.Xg++;
        this.ub("setInterval", a, c, b);
        return c
    };
    Xm.prototype.clearInterval = function(a) {
        Dm("intervalId", a);
        $m() ? Om.clearInterval(a) : this.ff("clearInterval", a)
    };
    var Zm = function() {
            return "function" === typeof Om.setTimeout && "function" === typeof Om.clearTimeout
        },
        $m = function() {
            return "function" === typeof Om.setInterval && "function" === typeof Om.clearInterval
        };
    Xm.prototype.ig = function(a) {
        var b = a.method,
            c = a.Ee;
        a = a.args;
        if ("response" === b && this.gd[c]) {
            var d = Em() && Fm() ? a ? a : [] : a && "string" === typeof a ? JSON.parse(a) : [];
            this.gd[c].apply(this, d)
        }
        "error" === b && window.console && Mm(a)
    };
    Xm.prototype.ff = function(a) {
        this.ub.apply(this, [a, null].concat(v(D.apply(1, arguments))))
    };
    Xm.prototype.ub = function(a, b) {
        var c = D.apply(2, arguments);
        if (this.Db) {
            var d = Lm();
            b && (this.gd[d] = b);
            var e = "VerificationService." + a;
            c = Em() && Fm() ? c : JSON.stringify(c);
            this.Db.sendMessage(new Gm(d, e, "1.4.1-google_20221025", c))
        }
    };
    var an = void 0;
    if (an = void 0 === an ? "undefined" === typeof omidExports ? null : omidExports : an) {
        var bn = ["OmidVerificationClient"];
        bn.slice(0, bn.length - 1).reduce(Km, an)[bn[bn.length - 1]] = Xm
    };
    var cn = null;
    try {
        var dn = new Xm;
        cn = new Hl(dn, "doubleclickbygoogle.com-omid")
    } catch (a) {
        cn = null
    }(function(a, b, c, d, e) {
        var f = rl(a, void 0 === e ? null : e);
        return a.s.Ha(742, function() {
            return Am(a, null != b ? b : f.sd, null != c ? c : f.Md, null != d ? d : f.oa, f.bb)
        })()
    })(new rk(window, null, new Ml), void 0, void 0, void 0, cn).subscribe();
}).call(this);