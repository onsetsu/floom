/**
 * math.js
 * https://github.com/josdejong/mathjs
 *
 * Math.js is an extensive math library for JavaScript and Node.js,
 * It features real and complex numbers, units, matrices, a large set of
 * mathematical functions, and a flexible expression parser.
 *
 * @version 7.0.1
 * @date    2020-05-30
 *
 * @license
 * Copyright (C) 2013-2020 Jos de Jong <wjosdejong@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.math = t() : e.math = t()
}(this, function () {
    return n = {}, i.m = r = [function (e, t, r) {
        "use strict";
        r.d(t, "a", function () {
            return n
        }), r.d(t, "b", function () {
            return i
        }), r.d(t, "c", function () {
            return o
        });
        r(2);
        var a = r(3);

        function n(r, n, i, e) {
            function t(e) {
                var t = Object(a.j)(e, n.map(o));
                return function (e, t, r) {
                    if (!t.filter(function (e) {
                        return !((t = e) && "?" === t[0]);
                        var t
                    }).every(function (e) {
                        return void 0 !== r[e]
                    })) {
                        var n = t.filter(function (e) {
                            return void 0 === r[e]
                        });
                        throw new Error('Cannot create function "'.concat(e, '", ') + "some dependencies are missing: ".concat(n.map(function (e) {
                            return '"'.concat(e, '"')
                        }).join(", "), "."))
                    }
                }(r, n, e), i(t)
            }

            return t.isFactory = !0, t.fn = r, t.dependencies = n.slice().sort(), e && (t.meta = e), t
        }

        function i(e) {
            return "function" == typeof e && "string" == typeof e.fn && Array.isArray(e.dependencies)
        }

        function o(e) {
            return e && "?" === e[0] ? e.slice(1) : e
        }
    }, function (e, t, r) {
        "use strict";

        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function i(e) {
            return "number" == typeof e
        }

        function a(e) {
            return e && !0 === e.constructor.prototype.isBigNumber || !1
        }

        function o(e) {
            return e && "object" === n(e) && !0 === Object.getPrototypeOf(e).isComplex || !1
        }

        function s(e) {
            return e && "object" === n(e) && !0 === Object.getPrototypeOf(e).isFraction || !1
        }

        function u(e) {
            return e && !0 === e.constructor.prototype.isUnit || !1
        }

        function c(e) {
            return "string" == typeof e
        }

        r.d(t, "y", function () {
            return i
        }), r.d(t, "e", function () {
            return a
        }), r.d(t, "j", function () {
            return o
        }), r.d(t, "o", function () {
            return s
        }), r.d(t, "L", function () {
            return u
        }), r.d(t, "I", function () {
            return c
        }), r.d(t, "b", function () {
            return f
        }), r.d(t, "v", function () {
            return l
        }), r.d(t, "i", function () {
            return p
        }), r.d(t, "n", function () {
            return m
        }), r.d(t, "H", function () {
            return h
        }), r.d(t, "D", function () {
            return d
        }), r.d(t, "t", function () {
            return y
        }), r.d(t, "g", function () {
            return g
        }), r.d(t, "G", function () {
            return v
        }), r.d(t, "s", function () {
            return b
        }), r.d(t, "p", function () {
            return x
        }), r.d(t, "m", function () {
            return w
        }), r.d(t, "F", function () {
            return N
        }), r.d(t, "z", function () {
            return O
        }), r.d(t, "x", function () {
            return M
        }), r.d(t, "K", function () {
            return j
        }), r.d(t, "a", function () {
            return E
        }), r.d(t, "c", function () {
            return S
        }), r.d(t, "d", function () {
            return A
        }), r.d(t, "f", function () {
            return C
        }), r.d(t, "k", function () {
            return T
        }), r.d(t, "l", function () {
            return _
        }), r.d(t, "q", function () {
            return q
        }), r.d(t, "r", function () {
            return I
        }), r.d(t, "u", function () {
            return k
        }), r.d(t, "w", function () {
            return B
        }), r.d(t, "A", function () {
            return z
        }), r.d(t, "B", function () {
            return D
        }), r.d(t, "C", function () {
            return R
        }), r.d(t, "E", function () {
            return P
        }), r.d(t, "J", function () {
            return U
        }), r.d(t, "h", function () {
            return F
        }), r.d(t, "M", function () {
            return L
        });
        var f = Array.isArray;

        function l(e) {
            return e && !0 === e.constructor.prototype.isMatrix || !1
        }

        function p(e) {
            return Array.isArray(e) || l(e)
        }

        function m(e) {
            return e && e.isDenseMatrix && !0 === e.constructor.prototype.isMatrix || !1
        }

        function h(e) {
            return e && e.isSparseMatrix && !0 === e.constructor.prototype.isMatrix || !1
        }

        function d(e) {
            return e && !0 === e.constructor.prototype.isRange || !1
        }

        function y(e) {
            return e && !0 === e.constructor.prototype.isIndex || !1
        }

        function g(e) {
            return "boolean" == typeof e
        }

        function v(e) {
            return e && !0 === e.constructor.prototype.isResultSet || !1
        }

        function b(e) {
            return e && !0 === e.constructor.prototype.isHelp || !1
        }

        function x(e) {
            return "function" == typeof e
        }

        function w(e) {
            return e instanceof Date
        }

        function N(e) {
            return e instanceof RegExp
        }

        function O(e) {
            return !(!e || "object" !== n(e) || e.constructor !== Object || o(e) || s(e))
        }

        function M(e) {
            return null === e
        }

        function j(e) {
            return void 0 === e
        }

        function E(e) {
            return e && !0 === e.isAccessorNode && !0 === e.constructor.prototype.isNode || !1
        }

        function S(e) {
            return e && !0 === e.isArrayNode && !0 === e.constructor.prototype.isNode || !1
        }

        function A(e) {
            return e && !0 === e.isAssignmentNode && !0 === e.constructor.prototype.isNode || !1
        }

        function C(e) {
            return e && !0 === e.isBlockNode && !0 === e.constructor.prototype.isNode || !1
        }

        function T(e) {
            return e && !0 === e.isConditionalNode && !0 === e.constructor.prototype.isNode || !1
        }

        function _(e) {
            return e && !0 === e.isConstantNode && !0 === e.constructor.prototype.isNode || !1
        }

        function q(e) {
            return e && !0 === e.isFunctionAssignmentNode && !0 === e.constructor.prototype.isNode || !1
        }

        function I(e) {
            return e && !0 === e.isFunctionNode && !0 === e.constructor.prototype.isNode || !1
        }

        function k(e) {
            return e && !0 === e.isIndexNode && !0 === e.constructor.prototype.isNode || !1
        }

        function B(e) {
            return e && !0 === e.isNode && !0 === e.constructor.prototype.isNode || !1
        }

        function z(e) {
            return e && !0 === e.isObjectNode && !0 === e.constructor.prototype.isNode || !1
        }

        function D(e) {
            return e && !0 === e.isOperatorNode && !0 === e.constructor.prototype.isNode || !1
        }

        function R(e) {
            return e && !0 === e.isParenthesisNode && !0 === e.constructor.prototype.isNode || !1
        }

        function P(e) {
            return e && !0 === e.isRangeNode && !0 === e.constructor.prototype.isNode || !1
        }

        function U(e) {
            return e && !0 === e.isSymbolNode && !0 === e.constructor.prototype.isNode || !1
        }

        function F(e) {
            return e && !0 === e.constructor.prototype.isChain || !1
        }

        function L(e) {
            var t = n(e);
            return "object" === t ? null === e ? "null" : Array.isArray(e) ? "Array" : e instanceof Date ? "Date" : e instanceof RegExp ? "RegExp" : a(e) ? "BigNumber" : o(e) ? "Complex" : s(e) ? "Fraction" : l(e) ? "Matrix" : u(e) ? "Unit" : y(e) ? "Index" : d(e) ? "Range" : v(e) ? "ResultSet" : B(e) ? e.type : F(e) ? "Chain" : b(e) ? "Help" : "Object" : "function" === t ? "Function" : t
        }
    }, function (e, t, r) {
        "use strict";
        r.d(t, "a", function () {
            return s
        }), r.d(t, "p", function () {
            return c
        }), r.d(t, "q", function () {
            return f
        }), r.d(t, "m", function () {
            return l
        }), r.d(t, "l", function () {
            return p
        }), r.d(t, "n", function () {
            return m
        }), r.d(t, "o", function () {
            return h
        }), r.d(t, "e", function () {
            return d
        }), r.d(t, "k", function () {
            return y
        }), r.d(t, "f", function () {
            return g
        }), r.d(t, "c", function () {
            return v
        }), r.d(t, "d", function () {
            return b
        }), r.d(t, "j", function () {
            return x
        }), r.d(t, "i", function () {
            return w
        }), r.d(t, "g", function () {
            return N
        }), r.d(t, "h", function () {
            return O
        }), r.d(t, "b", function () {
            return M
        });
        var n = r(4), i = r(1), a = r(5), u = r(6), o = r(9);

        function s(e) {
            for (var t = []; Array.isArray(e);) t.push(e.length), e = e[0];
            return t
        }

        function c(e, t) {
            if (0 === t.length) {
                if (Array.isArray(e)) throw new u.a(e.length, 0)
            } else !function e(t, r, n) {
                var i = t.length;
                if (i !== r[n]) throw new u.a(i, r[n]);
                if (n < r.length - 1) for (var a = n + 1, o = 0; o < i; o++) {
                    var s = t[o];
                    if (!Array.isArray(s)) throw new u.a(r.length - 1, r.length, "<");
                    e(t[o], r, a)
                } else for (o = 0; o < i; o++) if (Array.isArray(t[o])) throw new u.a(r.length + 1, r.length, ">")
            }(e, t, 0)
        }

        function f(e, t) {
            if (!Object(i.y)(e) || !Object(n.i)(e)) throw new TypeError("Index must be an integer (value: " + e + ")");
            if (e < 0 || "number" == typeof t && t <= e) throw new o.a(e, t)
        }

        function l(e, t, r) {
            if (!Array.isArray(e) || !Array.isArray(t)) throw new TypeError("Array expected");
            if (0 === t.length) throw new Error("Resizing to scalar is not supported");
            return t.forEach(function (e) {
                if (!Object(i.y)(e) || !Object(n.i)(e) || e < 0) throw new TypeError("Invalid size, must contain positive integers (size: " + Object(a.d)(t) + ")")
            }), function e(t, r, n, i) {
                var a;
                var o;
                var s = t.length;
                var u = r[n];
                var c = Math.min(s, u);
                t.length = u;
                if (n < r.length - 1) {
                    var f = n + 1;
                    for (a = 0; a < c; a++) o = t[a], Array.isArray(o) || (o = [o], t[a] = o), e(o, r, f, i);
                    for (a = c; a < u; a++) o = [], t[a] = o, e(o, r, f, i)
                } else {
                    for (a = 0; a < c; a++) for (; Array.isArray(t[a]);) t[a] = t[a][0];
                    for (a = c; a < u; a++) t[a] = i
                }
            }(e, t, 0, void 0 !== r ? r : 0), e
        }

        function p(t, r) {
            var e, n = d(t);

            function i(e) {
                return e.reduce(function (e, t) {
                    return e * t
                })
            }

            if (!Array.isArray(t) || !Array.isArray(r)) throw new TypeError("Array expected");
            if (0 === r.length) throw new u.a(0, i(s(t)), "!=");
            for (var a = 1, o = 0; o < r.length; o++) a *= r[o];
            if (n.length !== a) throw new u.a(i(r), i(s(t)), "!=");
            try {
                e = function (e, t) {
                    for (var r, n = e, i = t.length - 1; 0 < i; i--) {
                        var a = t[i];
                        r = [];
                        for (var o = n.length / a, s = 0; s < o; s++) r.push(n.slice(s * a, (s + 1) * a));
                        n = r
                    }
                    return n
                }(n, r)
            } catch (e) {
                if (e instanceof u.a) throw new u.a(i(r), i(s(t)), "!=");
                throw e
            }
            return e
        }

        function m(e, t) {
            for (var r = t || s(e); Array.isArray(e) && 1 === e.length;) e = e[0], r.shift();
            for (var n = r.length; 1 === r[n - 1];) n--;
            return n < r.length && (e = function e(t, r, n) {
                var i, a;
                if (n < r) {
                    var o = n + 1;
                    for (i = 0, a = t.length; i < a; i++) t[i] = e(t[i], r, o)
                } else for (; Array.isArray(t);) t = t[0];
                return t
            }(e, n, 0), r.length = n), e
        }

        function h(e, t, r, n) {
            var i = n || s(e);
            if (r) for (var a = 0; a < r; a++) e = [e], i.unshift(1);
            for (e = function e(t, r, n) {
                var i, a;
                if (Array.isArray(t)) {
                    var o = n + 1;
                    for (i = 0, a = t.length; i < a; i++) t[i] = e(t[i], r, o)
                } else for (var s = n; s < r; s++) t = [t];
                return t
            }(e, t, 0); i.length < t;) i.push(1);
            return e
        }

        function d(e) {
            if (!Array.isArray(e)) return e;
            var r = [];
            return e.forEach(function e(t) {
                Array.isArray(t) ? t.forEach(e) : r.push(t)
            }), r
        }

        function y(e, t) {
            return Array.prototype.map.call(e, t)
        }

        function g(e, t) {
            Array.prototype.forEach.call(e, t)
        }

        function v(e, t) {
            if (1 !== s(e).length) throw new Error("Only one dimensional matrices supported");
            return Array.prototype.filter.call(e, t)
        }

        function b(e, t) {
            if (1 !== s(e).length) throw new Error("Only one dimensional matrices supported");
            return Array.prototype.filter.call(e, function (e) {
                return t.test(e)
            })
        }

        function x(e, t) {
            return Array.prototype.join.call(e, t)
        }

        function w(e) {
            if (!Array.isArray(e)) throw new TypeError("Array input expected");
            if (0 === e.length) return e;
            var t = [], r = 0;
            t[0] = {value: e[0], identifier: 0};
            for (var n = 1; n < e.length; n++) e[n] === e[n - 1] ? r++ : r = 0, t.push({value: e[n], identifier: r});
            return t
        }

        function N(e) {
            if (!Array.isArray(e)) throw new TypeError("Array input expected");
            if (0 === e.length) return e;
            for (var t = [], r = 0; r < e.length; r++) t.push(e[r].value);
            return t
        }

        function O(e, t) {
            for (var r, n = 0, i = 0; i < e.length; i++) {
                var a = e[i], o = Array.isArray(a);
                if (0 === i && o && (n = a.length), o && a.length !== n) return;
                var s = o ? O(a, t) : t(a);
                if (void 0 === r) r = s; else if (r !== s) return "mixed"
            }
            return r
        }

        function M(e, t) {
            return -1 !== e.indexOf(t)
        }
    }, function (e, t, r) {
        "use strict";
        r.d(t, "a", function () {
            return i
        }), r.d(t, "i", function () {
            return o
        }), r.d(t, "e", function () {
            return s
        }), r.d(t, "b", function () {
            return u
        }), r.d(t, "d", function () {
            return c
        }), r.d(t, "c", function () {
            return f
        }), r.d(t, "h", function () {
            return l
        }), r.d(t, "f", function () {
            return p
        }), r.d(t, "g", function () {
            return m
        }), r.d(t, "j", function () {
            return h
        }), r.d(t, "k", function () {
            return d
        });
        var n = r(1);

        function a(e) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function i(e) {
            var t = a(e);
            if ("number" === t || "string" === t || "boolean" === t || null == e) return e;
            if ("function" == typeof e.clone) return e.clone();
            if (Array.isArray(e)) return e.map(i);
            if (e instanceof Date) return new Date(e.valueOf());
            if (Object(n.e)(e)) return e;
            if (e instanceof RegExp) throw new TypeError("Cannot clone " + e);
            return o(e, i)
        }

        function o(e, t) {
            var r = {};
            for (var n in e) p(e, n) && (r[n] = t(e[n]));
            return r
        }

        function s(e, t) {
            for (var r in t) p(t, r) && (e[r] = t[r]);
            return e
        }

        function u(e, t) {
            if (Array.isArray(t)) throw new TypeError("Arrays are not supported by deepExtend");
            for (var r in t) if (p(t, r)) if (t[r] && t[r].constructor === Object) void 0 === e[r] && (e[r] = {}), e[r] && e[r].constructor === Object ? u(e[r], t[r]) : e[r] = t[r]; else {
                if (Array.isArray(t[r])) throw new TypeError("Arrays are not supported by deepExtend");
                e[r] = t[r]
            }
            return e
        }

        function c(e, t) {
            var r, n, i;
            if (Array.isArray(e)) {
                if (!Array.isArray(t)) return !1;
                if (e.length !== t.length) return !1;
                for (n = 0, i = e.length; n < i; n++) if (!c(e[n], t[n])) return !1;
                return !0
            }
            if ("function" == typeof e) return e === t;
            if (e instanceof Object) {
                if (Array.isArray(t) || !(t instanceof Object)) return !1;
                for (r in e) if (!(r in t && c(e[r], t[r]))) return !1;
                for (r in t) if (!(r in e && c(e[r], t[r]))) return !1;
                return !0
            }
            return e === t
        }

        function f(e) {
            var t = {};
            return function e(t, r) {
                for (var n in t) {
                    var i;
                    p(t, n) && ("object" === a(i = t[n]) && null !== i ? e(i, r) : r[n] = i)
                }
            }(e, t), t
        }

        function l(e, t, r) {
            var n, i = !0;
            Object.defineProperty(e, t, {
                get: function () {
                    return i && (n = r(), i = !1), n
                }, set: function (e) {
                    n = e, i = !1
                }, configurable: !0, enumerable: !0
            })
        }

        function p(e, t) {
            return e && Object.hasOwnProperty.call(e, t)
        }

        function m(e) {
            return e && "function" == typeof e.factory
        }

        function h(e, t) {
            for (var r = {}, n = 0; n < t.length; n++) {
                var i = t[n], a = e[i];
                void 0 !== a && (r[i] = a)
            }
            return r
        }

        function d(t) {
            return Object.keys(t).map(function (e) {
                return t[e]
            })
        }
    }, function (e, t, r) {
        "use strict";
        r.d(t, "i", function () {
            return n
        }), r.d(t, "n", function () {
            return i
        }), r.d(t, "l", function () {
            return a
        }), r.d(t, "j", function () {
            return o
        }), r.d(t, "k", function () {
            return s
        }), r.d(t, "d", function () {
            return u
        }), r.d(t, "g", function () {
            return c
        }), r.d(t, "h", function () {
            return f
        }), r.d(t, "q", function () {
            return l
        }), r.d(t, "f", function () {
            return g
        }), r.d(t, "m", function () {
            return b
        }), r.d(t, "a", function () {
            return x
        }), r.d(t, "b", function () {
            return w
        }), r.d(t, "c", function () {
            return N
        }), r.d(t, "e", function () {
            return O
        }), r.d(t, "o", function () {
            return M
        }), r.d(t, "p", function () {
            return j
        });
        var m = r(1);

        function n(e) {
            return "boolean" == typeof e || !!isFinite(e) && e === Math.round(e)
        }

        var i = Math.sign || function (e) {
            return 0 < e ? 1 : e < 0 ? -1 : 0
        }, a = Math.log2 || function (e) {
            return Math.log(e) / Math.LN2
        }, o = Math.log10 || function (e) {
            return Math.log(e) / Math.LN10
        }, s = Math.log1p || function (e) {
            return Math.log(e + 1)
        }, u = Math.cbrt || function (e) {
            if (0 === e) return e;
            var t, r = e < 0;
            return r && (e = -e), t = isFinite(e) ? (e / ((t = Math.exp(Math.log(e) / 3)) * t) + 2 * t) / 3 : e, r ? -t : t
        }, c = Math.expm1 || function (e) {
            return 2e-4 <= e || e <= -2e-4 ? Math.exp(e) - 1 : e + e * e / 2 + e * e * e / 6
        };

        function f(e, t) {
            if ("function" == typeof t) return t(e);
            if (e === 1 / 0) return "Infinity";
            if (e === -1 / 0) return "-Infinity";
            if (isNaN(e)) return "NaN";
            var r, n = "auto";
            switch (t && (t.notation && (n = t.notation), Object(m.y)(t) ? r = t : Object(m.y)(t.precision) && (r = t.precision)), n) {
                case"fixed":
                    return l(e, r);
                case"exponential":
                    return p(e, r);
                case"engineering":
                    return function (e, t) {
                        if (isNaN(e) || !isFinite(e)) return String(e);
                        var r = d(h(e), t), n = r.exponent, i = r.coefficients,
                            a = n % 3 == 0 ? n : n < 0 ? n - 3 - n % 3 : n - n % 3;
                        if (Object(m.y)(t)) for (; t > i.length || n - a + 1 > i.length;) i.push(0); else for (var o = Math.abs(n - a) - (i.length - 1), s = 0; s < o; s++) i.push(0);
                        var u = Math.abs(n - a), c = 1;
                        for (; 0 < u;) c++, u--;
                        var f = i.slice(c).join(""), l = Object(m.y)(t) && f.length || f.match(/[1-9]/) ? "." + f : "",
                            p = i.slice(0, c).join("") + l + "e" + (0 <= n ? "+" : "") + a.toString();
                        return r.sign + p
                    }(e, r);
                case"auto":
                    return function (e, t, r) {
                        if (isNaN(e) || !isFinite(e)) return String(e);
                        var n = r && void 0 !== r.lowerExp ? r.lowerExp : -3,
                            i = r && void 0 !== r.upperExp ? r.upperExp : 5, a = h(e), o = t ? d(a, t) : a;
                        {
                            if (o.exponent < n || o.exponent >= i) return p(e, t);
                            var s = o.coefficients, u = o.exponent;
                            s.length < t && (s = s.concat(y(t - s.length))), s = s.concat(y(u - s.length + 1 + (s.length < t ? t - s.length : 0))), s = y(-u).concat(s);
                            var c = 0 < u ? u : 0;
                            return c < s.length - 1 && s.splice(c + 1, 0, "."), o.sign + s.join("")
                        }
                    }(e, r, t && t).replace(/((\.\d*?)(0+))($|e)/, function () {
                        var e = arguments[2], t = arguments[4];
                        return "." !== e ? e + t : t
                    });
                default:
                    throw new Error('Unknown notation "' + n + '". Choose "auto", "exponential", or "fixed".')
            }
        }

        function h(e) {
            var t = String(e).toLowerCase().match(/^0*?(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);
            if (!t) throw new SyntaxError("Invalid number " + e);
            var r = t[1], n = t[2], i = parseFloat(t[4] || "0"), a = n.indexOf(".");
            i += -1 !== a ? a - 1 : n.length - 1;
            var o = n.replace(".", "").replace(/^0*/, function (e) {
                return i -= e.length, ""
            }).replace(/0*$/, "").split("").map(function (e) {
                return parseInt(e)
            });
            return 0 === o.length && (o.push(0), i++), {sign: r, coefficients: o, exponent: i}
        }

        function l(e, t) {
            if (isNaN(e) || !isFinite(e)) return String(e);
            var r = h(e), n = "number" == typeof t ? d(r, r.exponent + 1 + t) : r, i = n.coefficients,
                a = n.exponent + 1, o = a + (t || 0);
            return i.length < o && (i = i.concat(y(o - i.length))), a < 0 && (i = y(1 - a).concat(i), a = 1), a < i.length && i.splice(a, 0, 0 === a ? "0." : "."), n.sign + i.join("")
        }

        function p(e, t) {
            if (isNaN(e) || !isFinite(e)) return String(e);
            var r = h(e), n = t ? d(r, t) : r, i = n.coefficients, a = n.exponent;
            i.length < t && (i = i.concat(y(t - i.length)));
            var o = i.shift();
            return n.sign + o + (0 < i.length ? "." + i.join("") : "") + "e" + (0 <= a ? "+" : "") + a
        }

        function d(e, t) {
            for (var r = {
                sign: e.sign,
                coefficients: e.coefficients,
                exponent: e.exponent
            }, n = r.coefficients; t <= 0;) n.unshift(0), r.exponent++, t++;
            if (n.length > t && 5 <= n.splice(t, n.length - t)[0]) {
                var i = t - 1;
                for (n[i]++; 10 === n[i];) n.pop(), 0 === i && (n.unshift(0), r.exponent++, i++), n[--i]++
            }
            return r
        }

        function y(e) {
            for (var t = [], r = 0; r < e; r++) t.push(0);
            return t
        }

        function g(e) {
            return e.toExponential().replace(/e.*$/, "").replace(/^0\.?0*|\./, "").length
        }

        var v = Number.EPSILON || 2220446049250313e-31;

        function b(e, t, r) {
            if (null == r) return e === t;
            if (e === t) return !0;
            if (isNaN(e) || isNaN(t)) return !1;
            if (isFinite(e) && isFinite(t)) {
                var n = Math.abs(e - t);
                return n < v || n <= Math.max(Math.abs(e), Math.abs(t)) * r
            }
            return !1
        }

        var x = Math.acosh || function (e) {
            return Math.log(Math.sqrt(e * e - 1) + e)
        }, w = Math.asinh || function (e) {
            return Math.log(Math.sqrt(e * e + 1) + e)
        }, N = Math.atanh || function (e) {
            return Math.log((1 + e) / (1 - e)) / 2
        }, O = Math.cosh || function (e) {
            return (Math.exp(e) + Math.exp(-e)) / 2
        }, M = Math.sinh || function (e) {
            return (Math.exp(e) - Math.exp(-e)) / 2
        }, j = Math.tanh || function (e) {
            var t = Math.exp(2 * e);
            return (t - 1) / (t + 1)
        }
    }, function (e, t, r) {
        "use strict";
        r.d(t, "b", function () {
            return s
        }), r.d(t, "d", function () {
            return u
        }), r.d(t, "e", function () {
            return f
        }), r.d(t, "c", function () {
            return l
        }), r.d(t, "a", function () {
            return p
        });
        var n = r(1), i = r(4);

        function a(e, t) {
            if ("function" == typeof t) return t(e);
            if (!e.isFinite()) return e.isNaN() ? "NaN" : e.gt(0) ? "Infinity" : "-Infinity";
            var r, n, i = "auto";
            switch (void 0 !== t && (t.notation && (i = t.notation), "number" == typeof t ? r = t : t.precision && (r = t.precision)), i) {
                case"fixed":
                    return n = r, e.toFixed(n);
                case"exponential":
                    return c(e, r);
                case"engineering":
                    return function (e, t) {
                        var r = e.e, n = r % 3 == 0 ? r : r < 0 ? r - 3 - r % 3 : r - r % 3,
                            i = e.mul(Math.pow(10, -n)), a = i.toPrecision(t);
                        -1 !== a.indexOf("e") && (a = i.toString());
                        return a + "e" + (0 <= r ? "+" : "") + n.toString()
                    }(e, r);
                case"auto":
                    var a = t && void 0 !== t.lowerExp ? t.lowerExp : -3,
                        o = t && void 0 !== t.upperExp ? t.upperExp : 5;
                    if (e.isZero()) return "0";
                    var s = e.toSignificantDigits(r), u = s.e;
                    return (a <= u && u < o ? s.toFixed() : c(e, r)).replace(/((\.\d*?)(0+))($|e)/, function () {
                        var e = arguments[2], t = arguments[4];
                        return "." !== e ? e + t : t
                    });
                default:
                    throw new Error('Unknown notation "' + i + '". Choose "auto", "exponential", or "fixed".')
            }
        }

        function c(e, t) {
            return void 0 !== t ? e.toExponential(t - 1) : e.toExponential()
        }

        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function s(e, t) {
            var r = e.length - t.length, n = e.length;
            return e.substring(r, n) === t
        }

        function u(t, r) {
            return "number" == typeof t ? Object(i.h)(t, r) : Object(n.e)(t) ? a(t, r) : (e = t) && "object" === o(e) && "number" == typeof e.s && "number" == typeof e.n && "number" == typeof e.d ? r && "decimal" === r.fraction ? t.toString() : t.s * t.n + "/" + t.d : Array.isArray(t) ? function e(t, r) {
                {
                    if (Array.isArray(t)) {
                        for (var n = "[", i = t.length, a = 0; a < i; a++) 0 !== a && (n += ", "), n += e(t[a], r);
                        return n += "]"
                    }
                    return u(t, r)
                }
            }(t, r) : Object(n.I)(t) ? '"' + t + '"' : "function" == typeof t ? t.syntax ? String(t.syntax) : "function" : t && "object" === o(t) ? "function" == typeof t.format ? t.format(r) : t && t.toString(r) !== {}.toString() ? t.toString(r) : "{" + Object.keys(t).map(function (e) {
                return '"' + e + '": ' + u(t[e], r)
            }).join(", ") + "}" : String(t);
            var e
        }

        function f(e) {
            for (var t = String(e), r = "", n = 0; n < t.length;) {
                var i = t.charAt(n);
                "\\" === i ? (r += i, n++, "" !== (i = t.charAt(n)) && -1 !== '"\\/bfnrtu'.indexOf(i) || (r += "\\"), r += i) : r += '"' === i ? '\\"' : i, n++
            }
            return '"' + r + '"'
        }

        function l(e) {
            return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function p(e, t) {
            if (!Object(n.I)(e)) throw new TypeError("Unexpected type of argument in function compareText (expected: string or Array or Matrix, actual: " + Object(n.M)(e) + ", index: 0)");
            if (!Object(n.I)(t)) throw new TypeError("Unexpected type of argument in function compareText (expected: string or Array or Matrix, actual: " + Object(n.M)(t) + ", index: 1)");
            return e === t ? 0 : t < e ? 1 : -1
        }
    }, function (e, t, r) {
        "use strict";

        function n(e, t, r) {
            if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
            this.actual = e, this.expected = t, this.relation = r, this.message = "Dimension mismatch (" + (Array.isArray(e) ? "[" + e.join(", ") + "]" : e) + " " + (this.relation || "!=") + " " + (Array.isArray(t) ? "[" + t.join(", ") + "]" : t) + ")", this.stack = (new Error).stack
        }

        r.d(t, "a", function () {
            return n
        }), (n.prototype = new RangeError).constructor = RangeError, n.prototype.name = "DimensionError", n.prototype.isDimensionError = !0
    }, , function (e, t, r) {
        var o;
        /**
         * @license Complex.js v2.0.11 11/02/2016
         *
         * Copyright (c) 2016, Robert Eisele (robert@xarg.org)
         * Dual licensed under the MIT or GPL Version 2 licenses.
         **/
        !function () {
            "use strict";

            function n(e) {
                return .5 * (Math.exp(e) + Math.exp(-e))
            }

            function i(e) {
                return .5 * (Math.exp(e) - Math.exp(-e))
            }

            function u() {
                throw SyntaxError("Invalid Param")
            }

            function c(e, t) {
                var r = Math.abs(e), n = Math.abs(t);
                return 0 === e ? Math.log(n) : 0 === t ? Math.log(r) : r < 3e3 && n < 3e3 ? .5 * Math.log(e * e + t * t) : Math.log(e / Math.cos(Math.atan2(t, e)))
            }

            var a = function (e, t) {
                var r = {re: 0, im: 0};
                if (null == e) r.re = r.im = 0; else if (void 0 !== t) r.re = e, r.im = t; else switch (typeof e) {
                    case"object":
                        if ("im" in e && "re" in e) r.re = e.re, r.im = e.im; else if ("abs" in e && "arg" in e) {
                            if (!Number.isFinite(e.abs) && Number.isFinite(e.arg)) return f.INFINITY;
                            r.re = e.abs * Math.cos(e.arg), r.im = e.abs * Math.sin(e.arg)
                        } else if ("r" in e && "phi" in e) {
                            if (!Number.isFinite(e.r) && Number.isFinite(e.phi)) return f.INFINITY;
                            r.re = e.r * Math.cos(e.phi), r.im = e.r * Math.sin(e.phi)
                        } else 2 === e.length ? (r.re = e[0], r.im = e[1]) : u();
                        break;
                    case"string":
                        r.im = r.re = 0;
                        var n = e.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g), i = 1, a = 0;
                        null === n && u();
                        for (var o = 0; o < n.length; o++) {
                            var s = n[o];
                            " " === s || "\t" === s || "\n" === s || ("+" === s ? i++ : "-" === s ? a++ : i = a = ("i" === s || "I" === s ? (i + a === 0 && u(), " " === n[o + 1] || isNaN(n[o + 1]) ? r.im += parseFloat((a % 2 ? "-" : "") + "1") : (r.im += parseFloat((a % 2 ? "-" : "") + n[o + 1]), o++)) : (i + a !== 0 && !isNaN(s) || u(), "i" === n[o + 1] || "I" === n[o + 1] ? (r.im += parseFloat((a % 2 ? "-" : "") + s), o++) : r.re += parseFloat((a % 2 ? "-" : "") + s)), 0))
                        }
                        0 < i + a && u();
                        break;
                    case"number":
                        r.im = 0, r.re = e;
                        break;
                    default:
                        u()
                }
                return isNaN(r.re) || isNaN(r.im), r
            };

            function f(e, t) {
                if (!(this instanceof f)) return new f(e, t);
                var r = a(e, t);
                this.re = r.re, this.im = r.im
            }

            f.prototype = {
                re: 0, im: 0, sign: function () {
                    var e = this.abs();
                    return new f(this.re / e, this.im / e)
                }, add: function (e, t) {
                    var r = new f(e, t);
                    return this.isInfinite() && r.isInfinite() ? f.NAN : this.isInfinite() || r.isInfinite() ? f.INFINITY : new f(this.re + r.re, this.im + r.im)
                }, sub: function (e, t) {
                    var r = new f(e, t);
                    return this.isInfinite() && r.isInfinite() ? f.NAN : this.isInfinite() || r.isInfinite() ? f.INFINITY : new f(this.re - r.re, this.im - r.im)
                }, mul: function (e, t) {
                    var r = new f(e, t);
                    return this.isInfinite() && r.isZero() || this.isZero() && r.isInfinite() ? f.NAN : this.isInfinite() || r.isInfinite() ? f.INFINITY : 0 === r.im && 0 === this.im ? new f(this.re * r.re, 0) : new f(this.re * r.re - this.im * r.im, this.re * r.im + this.im * r.re)
                }, div: function (e, t) {
                    var r = new f(e, t);
                    if (this.isZero() && r.isZero() || this.isInfinite() && r.isInfinite()) return f.NAN;
                    if (this.isInfinite() || r.isZero()) return f.INFINITY;
                    if (this.isZero() || r.isInfinite()) return f.ZERO;
                    e = this.re, t = this.im;
                    var n, i, a = r.re, o = r.im;
                    return 0 === o ? new f(e / a, t / a) : Math.abs(a) < Math.abs(o) ? new f((e * (i = a / o) + t) / (n = a * i + o), (t * i - e) / n) : new f((e + t * (i = o / a)) / (n = o * i + a), (t - e * i) / n)
                }, pow: function (e, t) {
                    var r = new f(e, t);
                    if (e = this.re, t = this.im, r.isZero()) return f.ONE;
                    if (0 === r.im) {
                        if (0 === t && 0 <= e) return new f(Math.pow(e, r.re), 0);
                        if (0 === e) switch ((r.re % 4 + 4) % 4) {
                            case 0:
                                return new f(Math.pow(t, r.re), 0);
                            case 1:
                                return new f(0, Math.pow(t, r.re));
                            case 2:
                                return new f(-Math.pow(t, r.re), 0);
                            case 3:
                                return new f(0, -Math.pow(t, r.re))
                        }
                    }
                    if (0 === e && 0 === t && 0 < r.re && 0 <= r.im) return f.ZERO;
                    var n = Math.atan2(t, e), i = c(e, t);
                    return e = Math.exp(r.re * i - r.im * n), t = r.im * i + r.re * n, new f(e * Math.cos(t), e * Math.sin(t))
                }, sqrt: function () {
                    var e, t, r = this.re, n = this.im, i = this.abs();
                    if (0 <= r) {
                        if (0 === n) return new f(Math.sqrt(r), 0);
                        e = .5 * Math.sqrt(2 * (i + r))
                    } else e = Math.abs(n) / Math.sqrt(2 * (i - r));
                    return t = r <= 0 ? .5 * Math.sqrt(2 * (i - r)) : Math.abs(n) / Math.sqrt(2 * (i + r)), new f(e, n < 0 ? -t : t)
                }, exp: function () {
                    var e = Math.exp(this.re);
                    return this.im, new f(e * Math.cos(this.im), e * Math.sin(this.im))
                }, expm1: function () {
                    var e = this.re, t = this.im;
                    return new f(Math.expm1(e) * Math.cos(t) + function (e) {
                        var t = Math.PI / 4;
                        if (e < -t || t < e) return Math.cos(e) - 1;
                        var r = e * e;
                        return r * (r * (1 / 24 + r * (-1 / 720 + r * (1 / 40320 + r * (-1 / 3628800 + r * (1 / 4790014600 + r * (-1 / 87178291200 + 1 / 20922789888e3 * r)))))) - .5)
                    }(t), Math.exp(e) * Math.sin(t))
                }, log: function () {
                    var e = this.re, t = this.im;
                    return new f(c(e, t), Math.atan2(t, e))
                }, abs: function () {
                    return e = this.re, t = this.im, r = Math.abs(e), n = Math.abs(t), r < 3e3 && n < 3e3 ? Math.sqrt(r * r + n * n) : (n = r < n ? (r = n, e / t) : t / e, r * Math.sqrt(1 + n * n));
                    var e, t, r, n
                }, arg: function () {
                    return Math.atan2(this.im, this.re)
                }, sin: function () {
                    var e = this.re, t = this.im;
                    return new f(Math.sin(e) * n(t), Math.cos(e) * i(t))
                }, cos: function () {
                    var e = this.re, t = this.im;
                    return new f(Math.cos(e) * n(t), -Math.sin(e) * i(t))
                }, tan: function () {
                    var e = 2 * this.re, t = 2 * this.im, r = Math.cos(e) + n(t);
                    return new f(Math.sin(e) / r, i(t) / r)
                }, cot: function () {
                    var e = 2 * this.re, t = 2 * this.im, r = Math.cos(e) - n(t);
                    return new f(-Math.sin(e) / r, i(t) / r)
                }, sec: function () {
                    var e = this.re, t = this.im, r = .5 * n(2 * t) + .5 * Math.cos(2 * e);
                    return new f(Math.cos(e) * n(t) / r, Math.sin(e) * i(t) / r)
                }, csc: function () {
                    var e = this.re, t = this.im, r = .5 * n(2 * t) - .5 * Math.cos(2 * e);
                    return new f(Math.sin(e) * n(t) / r, -Math.cos(e) * i(t) / r)
                }, asin: function () {
                    var e = this.re, t = this.im, r = new f(t * t - e * e + 1, -2 * e * t).sqrt(),
                        n = new f(r.re - t, r.im + e).log();
                    return new f(n.im, -n.re)
                }, acos: function () {
                    var e = this.re, t = this.im, r = new f(t * t - e * e + 1, -2 * e * t).sqrt(),
                        n = new f(r.re - t, r.im + e).log();
                    return new f(Math.PI / 2 - n.im, n.re)
                }, atan: function () {
                    var e = this.re, t = this.im;
                    if (0 === e) {
                        if (1 === t) return new f(0, 1 / 0);
                        if (-1 === t) return new f(0, -1 / 0)
                    }
                    var r = e * e + (1 - t) * (1 - t), n = new f((1 - t * t - e * e) / r, -2 * e / r).log();
                    return new f(-.5 * n.im, .5 * n.re)
                }, acot: function () {
                    var e = this.re, t = this.im;
                    if (0 === t) return new f(Math.atan2(1, e), 0);
                    var r = e * e + t * t;
                    return 0 != r ? new f(e / r, -t / r).atan() : new f(0 !== e ? e / 0 : 0, 0 !== t ? -t / 0 : 0).atan()
                }, asec: function () {
                    var e = this.re, t = this.im;
                    if (0 === e && 0 === t) return new f(0, 1 / 0);
                    var r = e * e + t * t;
                    return 0 != r ? new f(e / r, -t / r).acos() : new f(0 !== e ? e / 0 : 0, 0 !== t ? -t / 0 : 0).acos()
                }, acsc: function () {
                    var e = this.re, t = this.im;
                    if (0 === e && 0 === t) return new f(Math.PI / 2, 1 / 0);
                    var r = e * e + t * t;
                    return 0 != r ? new f(e / r, -t / r).asin() : new f(0 !== e ? e / 0 : 0, 0 !== t ? -t / 0 : 0).asin()
                }, sinh: function () {
                    var e = this.re, t = this.im;
                    return new f(i(e) * Math.cos(t), n(e) * Math.sin(t))
                }, cosh: function () {
                    var e = this.re, t = this.im;
                    return new f(n(e) * Math.cos(t), i(e) * Math.sin(t))
                }, tanh: function () {
                    var e = 2 * this.re, t = 2 * this.im, r = n(e) + Math.cos(t);
                    return new f(i(e) / r, Math.sin(t) / r)
                }, coth: function () {
                    var e = 2 * this.re, t = 2 * this.im, r = n(e) - Math.cos(t);
                    return new f(i(e) / r, -Math.sin(t) / r)
                }, csch: function () {
                    var e = this.re, t = this.im, r = Math.cos(2 * t) - n(2 * e);
                    return new f(-2 * i(e) * Math.cos(t) / r, 2 * n(e) * Math.sin(t) / r)
                }, sech: function () {
                    var e = this.re, t = this.im, r = Math.cos(2 * t) + n(2 * e);
                    return new f(2 * n(e) * Math.cos(t) / r, -2 * i(e) * Math.sin(t) / r)
                }, asinh: function () {
                    var e = this.im;
                    this.im = -this.re, this.re = e;
                    var t = this.asin();
                    return this.re = -this.im, this.im = e, e = t.re, t.re = -t.im, t.im = e, t
                }, acosh: function () {
                    var e, t = this.acos();
                    return t.im <= 0 ? (e = t.re, t.re = -t.im, t.im = e) : (e = t.im, t.im = -t.re, t.re = e), t
                }, atanh: function () {
                    var e = this.re, t = this.im, r = 1 < e && 0 === t, n = 1 - e, i = 1 + e, a = n * n + t * t,
                        o = 0 != a ? new f((i * n - t * t) / a, (t * n + i * t) / a) : new f(-1 !== e ? e / 0 : 0, 0 !== t ? t / 0 : 0),
                        s = o.re;
                    return o.re = c(o.re, o.im) / 2, o.im = Math.atan2(o.im, s) / 2, r && (o.im = -o.im), o
                }, acoth: function () {
                    var e = this.re, t = this.im;
                    if (0 === e && 0 === t) return new f(0, Math.PI / 2);
                    var r = e * e + t * t;
                    return 0 != r ? new f(e / r, -t / r).atanh() : new f(0 !== e ? e / 0 : 0, 0 !== t ? -t / 0 : 0).atanh()
                }, acsch: function () {
                    var e = this.re, t = this.im;
                    if (0 === t) return new f(0 !== e ? Math.log(e + Math.sqrt(e * e + 1)) : 1 / 0, 0);
                    var r = e * e + t * t;
                    return 0 != r ? new f(e / r, -t / r).asinh() : new f(0 !== e ? e / 0 : 0, 0 !== t ? -t / 0 : 0).asinh()
                }, asech: function () {
                    var e = this.re, t = this.im;
                    if (this.isZero()) return f.INFINITY;
                    var r = e * e + t * t;
                    return 0 != r ? new f(e / r, -t / r).acosh() : new f(0 !== e ? e / 0 : 0, 0 !== t ? -t / 0 : 0).acosh()
                }, inverse: function () {
                    if (this.isZero()) return f.INFINITY;
                    if (this.isInfinite()) return f.ZERO;
                    var e = this.re, t = this.im, r = e * e + t * t;
                    return new f(e / r, -t / r)
                }, conjugate: function () {
                    return new f(this.re, -this.im)
                }, neg: function () {
                    return new f(-this.re, -this.im)
                }, ceil: function (e) {
                    return e = Math.pow(10, e || 0), new f(Math.ceil(this.re * e) / e, Math.ceil(this.im * e) / e)
                }, floor: function (e) {
                    return e = Math.pow(10, e || 0), new f(Math.floor(this.re * e) / e, Math.floor(this.im * e) / e)
                }, round: function (e) {
                    return e = Math.pow(10, e || 0), new f(Math.round(this.re * e) / e, Math.round(this.im * e) / e)
                }, equals: function (e, t) {
                    var r = new f(e, t);
                    return Math.abs(r.re - this.re) <= f.EPSILON && Math.abs(r.im - this.im) <= f.EPSILON
                }, clone: function () {
                    return new f(this.re, this.im)
                }, toString: function () {
                    var e = this.re, t = this.im, r = "";
                    return this.isNaN() ? "NaN" : this.isZero() ? "0" : this.isInfinite() ? "Infinity" : (0 !== e && (r += e), 0 !== t && (0 !== e ? r += t < 0 ? " - " : " + " : t < 0 && (r += "-"), 1 !== (t = Math.abs(t)) && (r += t), r += "i"), r || "0")
                }, toVector: function () {
                    return [this.re, this.im]
                }, valueOf: function () {
                    return 0 === this.im ? this.re : null
                }, isNaN: function () {
                    return isNaN(this.re) || isNaN(this.im)
                }, isZero: function () {
                    return !(0 !== this.re && -0 !== this.re || 0 !== this.im && -0 !== this.im)
                }, isFinite: function () {
                    return isFinite(this.re) && isFinite(this.im)
                }, isInfinite: function () {
                    return !(this.isNaN() || this.isFinite())
                }
            }, f.ZERO = new f(0, 0), f.ONE = new f(1, 0), f.I = new f(0, 1), f.PI = new f(Math.PI, 0), f.E = new f(Math.E, 0), f.INFINITY = new f(1 / 0, 1 / 0), f.NAN = new f(NaN, NaN), f.EPSILON = 1e-16, void 0 === (o = function () {
                return f
            }.apply(t, [])) || (e.exports = o)
        }()
    }, function (e, t, r) {
        "use strict";

        function n(e, t, r) {
            if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
            this.index = e, arguments.length < 3 ? (this.min = 0, this.max = t) : (this.min = t, this.max = r), void 0 !== this.min && this.index < this.min ? this.message = "Index out of range (" + this.index + " < " + this.min + ")" : void 0 !== this.max && this.index >= this.max ? this.message = "Index out of range (" + this.index + " > " + (this.max - 1) + ")" : this.message = "Index out of range (" + this.index + ")", this.stack = (new Error).stack
        }

        r.d(t, "a", function () {
            return n
        }), (n.prototype = new RangeError).constructor = RangeError, n.prototype.name = "IndexError", n.prototype.isIndexError = !0
    }, function (r, i, e) {
        var a;
        /**
         * @license Fraction.js v4.0.12 09/09/2015
         * http://www.xarg.org/2014/03/rational-numbers-in-javascript/
         *
         * Copyright (c) 2015, Robert Eisele (robert@xarg.org)
         * Dual licensed under the MIT or GPL Version 2 licenses.
         **/
        !function () {
            "use strict";
            var d = {s: 1, n: 0, d: 1};

            function e(t) {
                function e() {
                    var e = Error.apply(this, arguments);
                    e.name = this.name = t, this.stack = e.stack, this.message = e.message
                }

                function r() {
                }

                return r.prototype = Error.prototype, e.prototype = new r, e
            }

            var y = f.DivisionByZero = e("DivisionByZero"), t = f.InvalidParameter = e("InvalidParameter");

            function g(e, t) {
                return isNaN(e = parseInt(e, 10)) && v(), e * t
            }

            function v() {
                throw new t
            }

            var n = function (e, t) {
                var r, n = 0, i = 1, a = 1, o = 0, s = 0, u = 0, c = 1, f = 1, l = 0, p = 1, m = 1, h = 1;
                if (null != e) if (void 0 !== t) a = (n = e) * (i = t); else switch (typeof e) {
                    case"object":
                        "d" in e && "n" in e ? (n = e.n, i = e.d, "s" in e && (n *= e.s)) : 0 in e ? (n = e[0], 1 in e && (i = e[1])) : v(), a = n * i;
                        break;
                    case"number":
                        if (e < 0 && (e = -(a = e)), e % 1 == 0) n = e; else if (0 < e) {
                            for (1 <= e && (e /= f = Math.pow(10, Math.floor(1 + Math.log(e) / Math.LN10))); p <= 1e7 && h <= 1e7;) {
                                if (e === (r = (l + m) / (p + h))) {
                                    i = p + h <= 1e7 ? (n = l + m, p + h) : p < h ? (n = m, h) : (n = l, p);
                                    break
                                }
                                r < e ? (l += m, p += h) : (m += l, h += p), i = 1e7 < p ? (n = m, h) : (n = l, p)
                            }
                            n *= f
                        } else (isNaN(e) || isNaN(t)) && (i = n = NaN);
                        break;
                    case"string":
                        if (null === (p = e.match(/\d+|./g)) && v(), "-" === p[l] ? (a = -1, l++) : "+" === p[l] && l++, p.length === l + 1 ? s = g(p[l++], a) : "." === p[l + 1] || "." === p[l] ? ("." !== p[l] && (o = g(p[l++], a)), (++l + 1 === p.length || "(" === p[l + 1] && ")" === p[l + 3] || "'" === p[l + 1] && "'" === p[l + 3]) && (s = g(p[l], a), c = Math.pow(10, p[l].length), l++), ("(" === p[l] && ")" === p[l + 2] || "'" === p[l] && "'" === p[l + 2]) && (u = g(p[l + 1], a), f = Math.pow(10, p[l + 1].length) - 1, l += 3)) : "/" === p[l + 1] || ":" === p[l + 1] ? (s = g(p[l], a), c = g(p[l + 2], 1), l += 3) : "/" === p[l + 3] && " " === p[l + 1] && (o = g(p[l], a), s = g(p[l + 2], a), c = g(p[l + 4], 1), l += 5), p.length <= l) {
                            a = n = u + (i = c * f) * o + f * s;
                            break
                        }
                    default:
                        v()
                }
                if (0 === i) throw new y;
                d.s = a < 0 ? -1 : 1, d.n = Math.abs(n), d.d = Math.abs(i)
            };

            function u(e, t, r) {
                for (var n = 1, i = function (e, t, r) {
                    for (var n = 1; 0 < t; e = e * e % r, t >>= 1) 1 & t && (n = n * e % r);
                    return n
                }(10, r, t), a = 0; a < 300; a++) {
                    if (n === i) return a;
                    n = 10 * n % t, i = 10 * i % t
                }
                return 0
            }

            function c(e, t) {
                if (!e) return t;
                if (!t) return e;
                for (; ;) {
                    if (!(e %= t)) return t;
                    if (!(t %= e)) return e
                }
            }

            function f(e, t) {
                if (!(this instanceof f)) return new f(e, t);
                n(e, t), e = f.REDUCE ? c(d.d, d.n) : 1, this.s = d.s, this.n = d.n / e, this.d = d.d / e
            }

            f.REDUCE = 1, f.prototype = {
                s: 1, n: 0, d: 1, abs: function () {
                    return new f(this.n, this.d)
                }, neg: function () {
                    return new f(-this.s * this.n, this.d)
                }, add: function (e, t) {
                    return n(e, t), new f(this.s * this.n * d.d + d.s * this.d * d.n, this.d * d.d)
                }, sub: function (e, t) {
                    return n(e, t), new f(this.s * this.n * d.d - d.s * this.d * d.n, this.d * d.d)
                }, mul: function (e, t) {
                    return n(e, t), new f(this.s * d.s * this.n * d.n, this.d * d.d)
                }, div: function (e, t) {
                    return n(e, t), new f(this.s * d.s * this.n * d.d, this.d * d.n)
                }, clone: function () {
                    return new f(this)
                }, mod: function (e, t) {
                    return isNaN(this.n) || isNaN(this.d) ? new f(NaN) : void 0 === e ? new f(this.s * this.n % this.d, 1) : (n(e, t), 0 === d.n && 0 === this.d && f(0, 0), new f(this.s * (d.d * this.n) % (d.n * this.d), d.d * this.d))
                }, gcd: function (e, t) {
                    return n(e, t), new f(c(d.n, this.n) * c(d.d, this.d), d.d * this.d)
                }, lcm: function (e, t) {
                    return n(e, t), 0 === d.n && 0 === this.n ? new f : new f(d.n * this.n, c(d.n, this.n) * c(d.d, this.d))
                }, ceil: function (e) {
                    return e = Math.pow(10, e || 0), isNaN(this.n) || isNaN(this.d) ? new f(NaN) : new f(Math.ceil(e * this.s * this.n / this.d), e)
                }, floor: function (e) {
                    return e = Math.pow(10, e || 0), isNaN(this.n) || isNaN(this.d) ? new f(NaN) : new f(Math.floor(e * this.s * this.n / this.d), e)
                }, round: function (e) {
                    return e = Math.pow(10, e || 0), isNaN(this.n) || isNaN(this.d) ? new f(NaN) : new f(Math.round(e * this.s * this.n / this.d), e)
                }, inverse: function () {
                    return new f(this.s * this.d, this.n)
                }, pow: function (e) {
                    return e < 0 ? new f(Math.pow(this.s * this.d, -e), Math.pow(this.n, -e)) : new f(Math.pow(this.s * this.n, e), Math.pow(this.d, e))
                }, equals: function (e, t) {
                    return n(e, t), this.s * this.n * d.d == d.s * d.n * this.d
                }, compare: function (e, t) {
                    n(e, t);
                    var r = this.s * this.n * d.d - d.s * d.n * this.d;
                    return (0 < r) - (r < 0)
                }, simplify: function (e) {
                    if (isNaN(this.n) || isNaN(this.d)) return this;
                    var t = this.abs().toContinued();
                    e = e || .001;
                    for (var r = 0; r < t.length; r++) {
                        var n = function e(t) {
                            return 1 === t.length ? new f(t[0]) : e(t.slice(1)).inverse().add(t[0])
                        }(t.slice(0, r + 1));
                        if (n.sub(this.abs()).abs().valueOf() < e) return n.mul(this.s)
                    }
                    return this
                }, divisible: function (e, t) {
                    return n(e, t), !(!(d.n * this.d) || this.n * d.d % (d.n * this.d))
                }, valueOf: function () {
                    return this.s * this.n / this.d
                }, toFraction: function (e) {
                    var t, r = "", n = this.n, i = this.d;
                    return this.s < 0 && (r += "-"), 1 === i ? r += n : (e && 0 < (t = Math.floor(n / i)) && (r += t, r += " ", n %= i), r += n, r += "/", r += i), r
                }, toLatex: function (e) {
                    var t, r = "", n = this.n, i = this.d;
                    return this.s < 0 && (r += "-"), 1 === i ? r += n : (e && 0 < (t = Math.floor(n / i)) && (r += t, n %= i), r += "\\frac{", r += n, r += "}{", r += i, r += "}"), r
                }, toContinued: function () {
                    var e, t = this.n, r = this.d, n = [];
                    if (isNaN(this.n) || isNaN(this.d)) return n;
                    for (; n.push(Math.floor(t / r)), e = t % r, t = r, r = e, 1 !== t;) ;
                    return n
                }, toString: function (e) {
                    var t, r = this.n, n = this.d;
                    if (isNaN(r) || isNaN(n)) return "NaN";
                    f.REDUCE || (r /= t = c(r, n), n /= t), e = e || 15;
                    var i = function (e) {
                        for (; e % 2 == 0; e /= 2) ;
                        for (; e % 5 == 0; e /= 5) ;
                        if (1 === e) return 0;
                        for (var t = 10 % e, r = 1; 1 !== t; r++) if (t = 10 * t % e, 2e3 < r) return 0;
                        return r
                    }(n), a = u(0, n, i), o = -1 === this.s ? "-" : "";
                    if (o += r / n | 0, r %= n, (r *= 10) && (o += "."), i) {
                        for (var s = a; s--;) o += r / n | 0, r %= n, r *= 10;
                        o += "(";
                        for (s = i; s--;) o += r / n | 0, r %= n, r *= 10;
                        o += ")"
                    } else for (s = e; r && s--;) o += r / n | 0, r %= n, r *= 10;
                    return o
                }
            }, void 0 === (a = function () {
                return f
            }.apply(i, [])) || (r.exports = a)
        }()
    }, function (e, t) {
        e.exports = function t(e, r) {
            "use strict";

            function n(e) {
                return t.insensitive && ("" + e).toLowerCase() || "" + e
            }

            var i, a, o = /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
                s = /(^[ ]*|[ ]*$)/g,
                u = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
                c = /^0x[0-9a-f]+$/i, f = /^0/, l = n(e).replace(s, "") || "", p = n(r).replace(s, "") || "",
                m = l.replace(o, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
                h = p.replace(o, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
                d = parseInt(l.match(c), 16) || 1 !== m.length && l.match(u) && Date.parse(l),
                y = parseInt(p.match(c), 16) || d && p.match(u) && Date.parse(p) || null;
            if (y) {
                if (d < y) return -1;
                if (y < d) return 1
            }
            for (var g = 0, v = Math.max(m.length, h.length); g < v; g++) {
                if (i = !(m[g] || "").match(f) && parseFloat(m[g]) || m[g] || 0, a = !(h[g] || "").match(f) && parseFloat(h[g]) || h[g] || 0, isNaN(i) !== isNaN(a)) return isNaN(i) ? 1 : -1;
                if (typeof i != typeof a && (i += "", a += ""), i < a) return -1;
                if (a < i) return 1
            }
            return 0
        }
    }, function (e, t, r) {
        "use strict";

        function i(e, t, r, n) {
            if (!(this instanceof i)) throw new SyntaxError("Constructor must be called with the new operator");
            this.fn = e, this.count = t, this.min = r, this.max = n, this.message = "Wrong number of arguments in function " + e + " (" + t + " provided, " + r + (null != n ? "-" + n : "") + " expected)", this.stack = (new Error).stack
        }

        r.d(t, "a", function () {
            return i
        }), (i.prototype = new Error).constructor = Error, i.prototype.name = "ArgumentsError", i.prototype.isArgumentsError = !0
    }, function (e, t, r) {
        "use strict";
        var n, i, a;
        i = [], void 0 === (a = "function" == typeof (n = function () {
            function k() {
                return true
            }

            function re() {
                return false
            }

            function ne() {
                return undefined
            }

            function B() {
                var e = [{
                    name: "number", test: function (e) {
                        return typeof e === "number"
                    }
                }, {
                    name: "string", test: function (e) {
                        return typeof e === "string"
                    }
                }, {
                    name: "boolean", test: function (e) {
                        return typeof e === "boolean"
                    }
                }, {
                    name: "Function", test: function (e) {
                        return typeof e === "function"
                    }
                }, {name: "Array", test: Array.isArray}, {
                    name: "Date", test: function (e) {
                        return e instanceof Date
                    }
                }, {
                    name: "RegExp", test: function (e) {
                        return e instanceof RegExp
                    }
                }, {
                    name: "Object", test: function (e) {
                        return typeof e === "object" && e !== null && e.constructor === Object
                    }
                }, {
                    name: "null", test: function (e) {
                        return e === null
                    }
                }, {
                    name: "undefined", test: function (e) {
                        return e === undefined
                    }
                }];
                var n = {name: "any", test: k};
                var t = [];
                var r = [];
                var F = {types: e, conversions: r, ignore: t};

                function u(t) {
                    var e = ee(F.types, function (e) {
                        return e.name === t
                    });
                    if (e) {
                        return e
                    }
                    if (t === "any") {
                        return n
                    }
                    var r = ee(F.types, function (e) {
                        return e.name.toLowerCase() === t.toLowerCase()
                    });
                    throw new TypeError('Unknown type "' + t + '"' + (r ? '. Did you mean "' + r.name + '"?' : ""))
                }

                function c(e) {
                    if (e === n) {
                        return 999
                    }
                    return F.types.indexOf(e)
                }

                function p(t) {
                    var e = ee(F.types, function (e) {
                        return e.test(t)
                    });
                    if (e) {
                        return e.name
                    }
                    throw new TypeError("Value has unknown type. Value: " + t)
                }

                function i(e, t) {
                    if (!e.signatures) {
                        throw new TypeError("Function is no typed-function")
                    }
                    var r;
                    if (typeof t === "string") {
                        r = t.split(",");
                        for (var n = 0; n < r.length; n++) {
                            r[n] = r[n].trim()
                        }
                    } else if (Array.isArray(t)) {
                        r = t
                    } else {
                        throw new TypeError("String array or a comma separated string expected")
                    }
                    var i = r.join(",");
                    var a = e.signatures[i];
                    if (a) {
                        return a
                    }
                    throw new TypeError("Signature not found (signature: " + (e.name || "unnamed") + "(" + r.join(", ") + "))")
                }

                function a(e, t) {
                    var r = p(e);
                    if (t === r) {
                        return e
                    }
                    for (var n = 0; n < F.conversions.length; n++) {
                        var i = F.conversions[n];
                        if (i.from === r && i.to === t) {
                            return i.convert(e)
                        }
                    }
                    throw new Error("Cannot convert from " + r + " to " + t)
                }

                function L(e) {
                    return e.map(function (e) {
                        var t = e.types.map(l);
                        return (e.restParam ? "..." : "") + t.join("|")
                    }).join(",")
                }

                function o(e, r) {
                    var t = e.indexOf("...") === 0;
                    var n = !t ? e : e.length > 3 ? e.slice(3) : "any";
                    var i = n.split("|").map(O).filter(M).filter(N);
                    var a = b(r, i);
                    var o = i.map(function (e) {
                        var t = u(e);
                        return {name: e, typeIndex: c(t), test: t.test, conversion: null, conversionIndex: -1}
                    });
                    var s = a.map(function (e) {
                        var t = u(e.from);
                        return {
                            name: e.from,
                            typeIndex: c(t),
                            test: t.test,
                            conversion: e,
                            conversionIndex: r.indexOf(e)
                        }
                    });
                    return {types: o.concat(s), restParam: t}
                }

                function H(e, t, i) {
                    var r = [];
                    if (e.trim() !== "") {
                        r = e.split(",").map(O).map(function (e, t, r) {
                            var n = o(e, i);
                            if (n.restParam && t !== r.length - 1) {
                                throw new SyntaxError('Unexpected rest parameter "' + e + '": ' + "only allowed for the last parameter")
                            }
                            return n
                        })
                    }
                    if (r.some(j)) {
                        return null
                    }
                    return {params: r, fn: t}
                }

                function $(e) {
                    var t = S(e);
                    return t ? t.restParam : false
                }

                function s(e) {
                    return e.types.some(function (e) {
                        return e.conversion != null
                    })
                }

                function G(e) {
                    if (!e || e.types.length === 0) {
                        return k
                    } else if (e.types.length === 1) {
                        return u(e.types[0].name).test
                    } else if (e.types.length === 2) {
                        var r = u(e.types[0].name).test;
                        var n = u(e.types[1].name).test;
                        return function e(t) {
                            return r(t) || n(t)
                        }
                    } else {
                        var i = e.types.map(function (e) {
                            return u(e.name).test
                        });
                        return function e(t) {
                            for (var r = 0; r < i.length; r++) {
                                if (i[r](t)) {
                                    return true
                                }
                            }
                            return false
                        }
                    }
                }

                function Z(e) {
                    var n, r, i;
                    if ($(e)) {
                        n = E(e).map(G);
                        var a = n.length;
                        var o = G(S(e));
                        var s = function (e) {
                            for (var t = a; t < e.length; t++) {
                                if (!o(e[t])) {
                                    return false
                                }
                            }
                            return true
                        };
                        return function e(t) {
                            for (var r = 0; r < n.length; r++) {
                                if (!n[r](t[r])) {
                                    return false
                                }
                            }
                            return s(t) && t.length >= a + 1
                        }
                    } else {
                        if (e.length === 0) {
                            return function e(t) {
                                return t.length === 0
                            }
                        } else if (e.length === 1) {
                            r = G(e[0]);
                            return function e(t) {
                                return r(t[0]) && t.length === 1
                            }
                        } else if (e.length === 2) {
                            r = G(e[0]);
                            i = G(e[1]);
                            return function e(t) {
                                return r(t[0]) && i(t[1]) && t.length === 2
                            }
                        } else {
                            n = e.map(G);
                            return function e(t) {
                                for (var r = 0; r < n.length; r++) {
                                    if (!n[r](t[r])) {
                                        return false
                                    }
                                }
                                return t.length === n.length
                            }
                        }
                    }
                }

                function m(e, t) {
                    return t < e.params.length ? e.params[t] : $(e.params) ? S(e.params) : null
                }

                function f(e, t, r) {
                    var n = m(e, t);
                    var i = n ? r ? n.types.filter(h) : n.types : [];
                    return i.map(l)
                }

                function l(e) {
                    return e.name
                }

                function h(e) {
                    return e.conversion === null || e.conversion === undefined
                }

                function d(e, t) {
                    var r = _(te(e, function (e) {
                        return f(e, t, false)
                    }));
                    return r.indexOf("any") !== -1 ? ["any"] : r
                }

                function V(e, r, t) {
                    var n, i;
                    var a = e || "unnamed";
                    var o = t;
                    var s;
                    for (s = 0; s < r.length; s++) {
                        var u = o.filter(function (e) {
                            var t = G(m(e, s));
                            return (s < e.params.length || $(e.params)) && t(r[s])
                        });
                        if (u.length === 0) {
                            i = d(o, s);
                            if (i.length > 0) {
                                var c = p(r[s]);
                                n = new TypeError("Unexpected type of argument in function " + a + " (expected: " + i.join(" or ") + ", actual: " + c + ", index: " + s + ")");
                                n.data = {category: "wrongType", fn: a, index: s, actual: c, expected: i};
                                return n
                            }
                        } else {
                            o = u
                        }
                    }
                    var f = o.map(function (e) {
                        return $(e.params) ? Infinity : e.params.length
                    });
                    if (r.length < Math.min.apply(null, f)) {
                        i = d(o, s);
                        n = new TypeError("Too few arguments in function " + a + " (expected: " + i.join(" or ") + ", index: " + r.length + ")");
                        n.data = {category: "tooFewArgs", fn: a, index: r.length, expected: i};
                        return n
                    }
                    var l = Math.max.apply(null, f);
                    if (r.length > l) {
                        n = new TypeError("Too many arguments in function " + a + " (expected: " + l + ", actual: " + r.length + ")");
                        n.data = {category: "tooManyArgs", fn: a, index: r.length, expectedLength: l};
                        return n
                    }
                    n = new TypeError('Arguments of type "' + r.join(", ") + '" do not match any of the defined signatures of function ' + a + ".");
                    n.data = {category: "mismatch", actual: r.map(p)};
                    return n
                }

                function y(e) {
                    var t = 999;
                    for (var r = 0; r < e.types.length; r++) {
                        if (h(e.types[r])) {
                            t = Math.min(t, e.types[r].typeIndex)
                        }
                    }
                    return t
                }

                function g(e) {
                    var t = 999;
                    for (var r = 0; r < e.types.length; r++) {
                        if (!h(e.types[r])) {
                            t = Math.min(t, e.types[r].conversionIndex)
                        }
                    }
                    return t
                }

                function v(e, t) {
                    var r;
                    r = e.restParam - t.restParam;
                    if (r !== 0) {
                        return r
                    }
                    r = s(e) - s(t);
                    if (r !== 0) {
                        return r
                    }
                    r = y(e) - y(t);
                    if (r !== 0) {
                        return r
                    }
                    return g(e) - g(t)
                }

                function J(e, t) {
                    var r = Math.min(e.params.length, t.params.length);
                    var n;
                    var i;
                    i = e.params.some(s) - t.params.some(s);
                    if (i !== 0) {
                        return i
                    }
                    for (n = 0; n < r; n++) {
                        i = s(e.params[n]) - s(t.params[n]);
                        if (i !== 0) {
                            return i
                        }
                    }
                    for (n = 0; n < r; n++) {
                        i = v(e.params[n], t.params[n]);
                        if (i !== 0) {
                            return i
                        }
                    }
                    return e.params.length - t.params.length
                }

                function b(e, t) {
                    var r = {};
                    e.forEach(function (e) {
                        if (t.indexOf(e.from) === -1 && t.indexOf(e.to) !== -1 && !r[e.from]) {
                            r[e.from] = e
                        }
                    });
                    return Object.keys(r).map(function (e) {
                        return r[e]
                    })
                }

                function W(e, i) {
                    var t = i;
                    if (e.some(s)) {
                        var a = $(e);
                        var o = e.map(x);
                        t = function e() {
                            var t = [];
                            var r = a ? arguments.length - 1 : arguments.length;
                            for (var n = 0; n < r; n++) {
                                t[n] = o[n](arguments[n])
                            }
                            if (a) {
                                t[r] = arguments[r].map(o[r])
                            }
                            return i.apply(null, t)
                        }
                    }
                    var r = t;
                    if ($(e)) {
                        var n = e.length - 1;
                        r = function e() {
                            return t.apply(null, A(arguments, 0, n).concat([A(arguments, n)]))
                        }
                    }
                    return r
                }

                function x(e) {
                    var r, n, i, a;
                    var o = [];
                    var s = [];
                    e.types.forEach(function (e) {
                        if (e.conversion) {
                            o.push(u(e.conversion.from).test);
                            s.push(e.conversion.convert)
                        }
                    });
                    switch (s.length) {
                        case 0:
                            return function e(t) {
                                return t
                            };
                        case 1:
                            r = o[0];
                            i = s[0];
                            return function e(t) {
                                if (r(t)) {
                                    return i(t)
                                }
                                return t
                            };
                        case 2:
                            r = o[0];
                            n = o[1];
                            i = s[0];
                            a = s[1];
                            return function e(t) {
                                if (r(t)) {
                                    return i(t)
                                }
                                if (n(t)) {
                                    return a(t)
                                }
                                return t
                            };
                        default:
                            return function e(t) {
                                for (var r = 0; r < s.length; r++) {
                                    if (o[r](t)) {
                                        return s[r](t)
                                    }
                                }
                                return t
                            }
                    }
                }

                function Y(e) {
                    var r = {};
                    e.forEach(function (t) {
                        if (!t.params.some(s)) {
                            X(t.params, true).forEach(function (e) {
                                r[L(e)] = t.fn
                            })
                        }
                    });
                    return r
                }

                function X(e, u) {
                    function c(r, t, n) {
                        if (t < r.length) {
                            var e = r[t];
                            var i = u ? e.types.filter(h) : e.types;
                            var a;
                            if (e.restParam) {
                                var o = i.filter(h);
                                a = o.length < i.length ? [o, i] : [i]
                            } else {
                                a = i.map(function (e) {
                                    return [e]
                                })
                            }
                            return te(a, function (e) {
                                return c(r, t + 1, n.concat([e]))
                            })
                        } else {
                            var s = n.map(function (e, t) {
                                return {types: e, restParam: t === r.length - 1 && $(r)}
                            });
                            return [s]
                        }
                    }

                    return c(e, 0, [])
                }

                function Q(e, t) {
                    var r = Math.max(e.params.length, t.params.length);
                    for (var n = 0; n < r; n++) {
                        var i = f(e, n, true);
                        var a = f(t, n, true);
                        if (!T(i, a)) {
                            return false
                        }
                    }
                    var o = e.params.length;
                    var s = t.params.length;
                    var u = $(e.params);
                    var c = $(t.params);
                    return u ? c ? o === s : s >= o : c ? o >= s : o === s
                }

                function w(r, t) {
                    if (Object.keys(t).length === 0) {
                        throw new SyntaxError("No signatures provided")
                    }
                    var n = [];
                    Object.keys(t).map(function (e) {
                        return H(e, t[e], F.conversions)
                    }).filter(K).forEach(function (t) {
                        var e = ee(n, function (e) {
                            return Q(e, t)
                        });
                        if (e) {
                            throw new TypeError('Conflicting signatures "' + L(e.params) + '" and "' + L(t.params) + '".')
                        }
                        n.push(t)
                    });
                    var i = te(n, function (t) {
                        var e = t ? X(t.params, false) : [];
                        return e.map(function (e) {
                            return {params: e, fn: t.fn}
                        })
                    }).filter(K);
                    i.sort(J);
                    var e = i[0] && i[0].params.length <= 2 && !$(i[0].params);
                    var a = i[1] && i[1].params.length <= 2 && !$(i[1].params);
                    var o = i[2] && i[2].params.length <= 2 && !$(i[2].params);
                    var s = i[3] && i[3].params.length <= 2 && !$(i[3].params);
                    var u = i[4] && i[4].params.length <= 2 && !$(i[4].params);
                    var c = i[5] && i[5].params.length <= 2 && !$(i[5].params);
                    var f = e && a && o && s && u && c;
                    var l = i.map(function (e) {
                        return Z(e.params)
                    });
                    var p = e ? G(i[0].params[0]) : re;
                    var m = a ? G(i[1].params[0]) : re;
                    var h = o ? G(i[2].params[0]) : re;
                    var d = s ? G(i[3].params[0]) : re;
                    var y = u ? G(i[4].params[0]) : re;
                    var g = c ? G(i[5].params[0]) : re;
                    var v = e ? G(i[0].params[1]) : re;
                    var b = a ? G(i[1].params[1]) : re;
                    var x = o ? G(i[2].params[1]) : re;
                    var w = s ? G(i[3].params[1]) : re;
                    var N = u ? G(i[4].params[1]) : re;
                    var O = c ? G(i[5].params[1]) : re;
                    var M = i.map(function (e) {
                        return W(e.params, e.fn)
                    });
                    var j = e ? M[0] : ne;
                    var E = a ? M[1] : ne;
                    var S = o ? M[2] : ne;
                    var A = s ? M[3] : ne;
                    var C = u ? M[4] : ne;
                    var T = c ? M[5] : ne;
                    var _ = e ? i[0].params.length : -1;
                    var q = a ? i[1].params.length : -1;
                    var I = o ? i[2].params.length : -1;
                    var k = s ? i[3].params.length : -1;
                    var B = u ? i[4].params.length : -1;
                    var z = c ? i[5].params.length : -1;
                    var D = f ? 6 : 0;
                    var R = i.length;
                    var P = function e() {
                        "use strict";
                        for (var t = D; t < R; t++) {
                            if (l[t](arguments)) {
                                return M[t].apply(null, arguments)
                            }
                        }
                        throw V(r, arguments, i)
                    };
                    var U = function e(t, r) {
                        "use strict";
                        if (arguments.length === _ && p(t) && v(r)) {
                            return j.apply(null, arguments)
                        }
                        if (arguments.length === q && m(t) && b(r)) {
                            return E.apply(null, arguments)
                        }
                        if (arguments.length === I && h(t) && x(r)) {
                            return S.apply(null, arguments)
                        }
                        if (arguments.length === k && d(t) && w(r)) {
                            return A.apply(null, arguments)
                        }
                        if (arguments.length === B && y(t) && N(r)) {
                            return C.apply(null, arguments)
                        }
                        if (arguments.length === z && g(t) && O(r)) {
                            return T.apply(null, arguments)
                        }
                        return P.apply(null, arguments)
                    };
                    try {
                        Object.defineProperty(U, "name", {value: r})
                    } catch (e) {
                    }
                    U.signatures = Y(i);
                    return U
                }

                function N(e) {
                    return F.ignore.indexOf(e) === -1
                }

                function O(e) {
                    return e.trim()
                }

                function M(e) {
                    return !!e
                }

                function K(e) {
                    return e !== null
                }

                function j(e) {
                    return e.types.length === 0
                }

                function E(e) {
                    return e.slice(0, e.length - 1)
                }

                function S(e) {
                    return e[e.length - 1]
                }

                function A(e, t, r) {
                    return Array.prototype.slice.call(e, t, r)
                }

                function C(e, t) {
                    return e.indexOf(t) !== -1
                }

                function T(e, t) {
                    for (var r = 0; r < e.length; r++) {
                        if (C(t, e[r])) {
                            return true
                        }
                    }
                    return false
                }

                function ee(e, t) {
                    for (var r = 0; r < e.length; r++) {
                        if (t(e[r])) {
                            return e[r]
                        }
                    }
                    return undefined
                }

                function _(e) {
                    var t = {};
                    for (var r = 0; r < e.length; r++) {
                        t[e[r]] = true
                    }
                    return Object.keys(t)
                }

                function te(e, t) {
                    return Array.prototype.concat.apply([], e.map(t))
                }

                function q(e) {
                    var t = "";
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        if ((typeof n.signatures === "object" || typeof n.signature === "string") && n.name !== "") {
                            if (t === "") {
                                t = n.name
                            } else if (t !== n.name) {
                                var i = new Error("Function names do not match (expected: " + t + ", actual: " + n.name + ")");
                                i.data = {actual: n.name, expected: t};
                                throw i
                            }
                        }
                    }
                    return t
                }

                function I(e) {
                    var r;
                    var n = {};

                    function t(e, t) {
                        if (n.hasOwnProperty(e) && t !== n[e]) {
                            r = new Error('Signature "' + e + '" is defined twice');
                            r.data = {signature: e};
                            throw r
                        }
                    }

                    for (var i = 0; i < e.length; i++) {
                        var a = e[i];
                        if (typeof a.signatures === "object") {
                            for (var o in a.signatures) {
                                if (a.signatures.hasOwnProperty(o)) {
                                    t(o, a.signatures[o]);
                                    n[o] = a.signatures[o]
                                }
                            }
                        } else if (typeof a.signature === "string") {
                            t(a.signature, a);
                            n[a.signature] = a
                        } else {
                            r = new TypeError("Function is no typed-function (index: " + i + ")");
                            r.data = {index: i};
                            throw r
                        }
                    }
                    return n
                }

                F = w("typed", {
                    "string, Object": w, Object: function (e) {
                        var t = [];
                        for (var r in e) {
                            if (e.hasOwnProperty(r)) {
                                t.push(e[r])
                            }
                        }
                        var n = q(t);
                        return w(n, e)
                    }, "...Function": function (e) {
                        return w(q(e), I(e))
                    }, "string, ...Function": function (e, t) {
                        return w(e, I(t))
                    }
                });
                F.create = B;
                F.types = e;
                F.conversions = r;
                F.ignore = t;
                F.convert = a;
                F.find = i;
                F.addType = function (e, t) {
                    if (!e || typeof e.name !== "string" || typeof e.test !== "function") {
                        throw new TypeError("Object with properties {name: string, test: function} expected")
                    }
                    if (t !== false) {
                        for (var r = 0; r < F.types.length; r++) {
                            if (F.types[r].name === "Object") {
                                F.types.splice(r, 0, e);
                                return
                            }
                        }
                    }
                    F.types.push(e)
                };
                F.addConversion = function (e) {
                    if (!e || typeof e.from !== "string" || typeof e.to !== "string" || typeof e.convert !== "function") {
                        throw new TypeError("Object with properties {from: string, to: string, convert: function} expected")
                    }
                    F.conversions.push(e)
                };
                return F
            }

            return B()
        }) ? n.apply(t, i) : n) || (e.exports = a)
    }, function (m, e, t) {
        "use strict";
        (function (e) {
            var s = 256, i = [], a = void 0 === e ? window : e, o = Math.pow(s, 6), u = Math.pow(2, 52), c = 2 * u,
                t = Math.random;

            function f(e) {
                var t, r = e.length, o = this, n = 0, i = o.i = o.j = 0, a = o.S = [];
                for (r || (e = [r++]); n < s;) a[n] = n++;
                for (n = 0; n < s; n++) a[n] = a[i = 255 & i + e[n % r] + (t = a[n])], a[i] = t;
                (o.g = function (e) {
                    for (var t, r = 0, n = o.i, i = o.j, a = o.S; e--;) t = a[n = 255 & n + 1], r = r * s + a[255 & (a[n] = a[i = 255 & i + t]) + (a[i] = t)];
                    return o.i = n, o.j = i, r
                })(s)
            }

            function l(e, t) {
                for (var r, n = e + "", i = 0; i < n.length;) t[255 & i] = 255 & (r ^= 19 * t[255 & i]) + n.charCodeAt(i++);
                return p(t)
            }

            function p(e) {
                return String.fromCharCode.apply(0, e)
            }

            m.exports = function (e, t) {
                if (t && !0 === t.global) return t.global = !1, Math.random = m.exports(e, t), t.global = !0, Math.random;
                var r = [], n = (l(function e(t, r) {
                    var n, i = [], a = (typeof t)[0];
                    if (r && "o" == a) for (n in t) try {
                        i.push(e(t[n], r - 1))
                    } catch (e) {
                    }
                    return i.length ? i : "s" == a ? t : t + "\0"
                }(t && t.entropy || !1 ? [e, p(i)] : 0 in arguments ? e : function (e) {
                    try {
                        return a.crypto.getRandomValues(e = new Uint8Array(s)), p(e)
                    } catch (e) {
                        return [+new Date, a, a.navigator && a.navigator.plugins, a.screen, p(i)]
                    }
                }(), 3), r), new f(r));
                return l(p(n.S), i), function () {
                    for (var e = n.g(6), t = o, r = 0; e < u;) e = (e + r) * s, t *= s, r = n.g(1);
                    for (; c <= e;) e /= 2, t /= 2, r >>>= 1;
                    return (e + r) / t
                }
            }, m.exports.resetGlobal = function () {
                Math.random = t
            }, l(Math.random(), i)
        }).call(this, t(19))
    }, function (t, De, Re) {
        var Pe;
        !function () {
            "use strict";
            var l, T, o, s = 9e15, d = 1e9, y = "0123456789abcdef",
                n = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
                i = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
                u = {precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -s, maxE: s, crypto: !1},
                b = !0, c = "[DecimalError] ", g = c + "Invalid argument: ", a = c + "Precision limit exceeded",
                f = c + "crypto unavailable", _ = Math.floor, v = Math.pow,
                p = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
                m = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
                h = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, x = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, q = 1e7,
                I = 7, w = n.length - 1, N = i.length - 1, O = {name: "[object Decimal]"};

            function M(e) {
                var t, r, n, i = e.length - 1, a = "", o = e[0];
                if (0 < i) {
                    for (a += o, t = 1; t < i; t++) n = e[t] + "", (r = I - n.length) && (a += L(r)), a += n;
                    o = e[t], (r = I - (n = o + "").length) && (a += L(r))
                } else if (0 === o) return "0";
                for (; o % 10 == 0;) o /= 10;
                return a + o
            }

            function j(e, t, r) {
                if (e !== ~~e || e < t || r < e) throw Error(g + e)
            }

            function E(e, t, r, n) {
                for (var i, a, o = e[0]; 10 <= o; o /= 10) --t;
                return --t < 0 ? (t += I, i = 0) : (i = Math.ceil((t + 1) / I), t %= I), o = v(10, I - t), a = e[i] % o | 0, null == n ? t < 3 ? (0 == t ? a = a / 100 | 0 : 1 == t && (a = a / 10 | 0), r < 4 && 99999 == a || 3 < r && 49999 == a || 5e4 == a || 0 == a) : (r < 4 && a + 1 == o || 3 < r && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == v(10, t - 2) - 1 || (a == o / 2 || 0 == a) && 0 == (e[i + 1] / o / 100 | 0) : t < 4 ? (0 == t ? a = a / 1e3 | 0 : 1 == t ? a = a / 100 | 0 : 2 == t && (a = a / 10 | 0), (n || r < 4) && 9999 == a || !n && 3 < r && 4999 == a) : ((n || r < 4) && a + 1 == o || !n && 3 < r && a + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == v(10, t - 3) - 1
            }

            function S(e, t, r) {
                for (var n, i, a = [0], o = 0, s = e.length; o < s;) {
                    for (i = a.length; i--;) a[i] *= t;
                    for (a[0] += y.indexOf(e.charAt(o++)), n = 0; n < a.length; n++) a[n] > r - 1 && (void 0 === a[n + 1] && (a[n + 1] = 0), a[n + 1] += a[n] / r | 0, a[n] %= r)
                }
                return a.reverse()
            }

            O.absoluteValue = O.abs = function () {
                var e = new this.constructor(this);
                return e.s < 0 && (e.s = 1), D(e)
            }, O.ceil = function () {
                return D(new this.constructor(this), this.e + 1, 2)
            }, O.comparedTo = O.cmp = function (e) {
                var t, r, n, i, a = this, o = a.d, s = (e = new a.constructor(e)).d, u = a.s, c = e.s;
                if (!o || !s) return u && c ? u !== c ? u : o === s ? 0 : !o ^ u < 0 ? 1 : -1 : NaN;
                if (!o[0] || !s[0]) return o[0] ? u : s[0] ? -c : 0;
                if (u !== c) return u;
                if (a.e !== e.e) return a.e > e.e ^ u < 0 ? 1 : -1;
                for (t = 0, r = (n = o.length) < (i = s.length) ? n : i; t < r; ++t) if (o[t] !== s[t]) return o[t] > s[t] ^ u < 0 ? 1 : -1;
                return n === i ? 0 : i < n ^ u < 0 ? 1 : -1
            }, O.cosine = O.cos = function () {
                var e, t, r = this, n = r.constructor;
                return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + I, n.rounding = 1, r = function (e, t) {
                    var r, n, i = t.d.length;
                    n = i < 32 ? (r = Math.ceil(i / 3), (1 / Y(4, r)).toString()) : (r = 16, "2.3283064365386962890625e-10");
                    e.precision += r, t = W(e, 1, t.times(n), new e(1));
                    for (var a = r; a--;) {
                        var o = t.times(t);
                        t = o.times(o).minus(o).times(8).plus(1)
                    }
                    return e.precision -= r, t
                }(n, X(n, r)), n.precision = e, n.rounding = t, D(2 == o || 3 == o ? r.neg() : r, e, t, !0)) : new n(1) : new n(NaN)
            }, O.cubeRoot = O.cbrt = function () {
                var e, t, r, n, i, a, o, s, u, c, f = this, l = f.constructor;
                if (!f.isFinite() || f.isZero()) return new l(f);
                for (b = !1, (a = f.s * v(f.s * f, 1 / 3)) && Math.abs(a) != 1 / 0 ? n = new l(a.toString()) : (r = M(f.d), (a = ((e = f.e) - r.length + 1) % 3) && (r += 1 == a || -2 == a ? "0" : "00"), a = v(r, 1 / 3), e = _((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), (n = new l(r = a == 1 / 0 ? "5e" + e : (r = a.toExponential()).slice(0, r.indexOf("e") + 1) + e)).s = f.s), o = (e = l.precision) + 3; ;) if (c = (u = (s = n).times(s).times(s)).plus(f), n = A(c.plus(f).times(s), c.plus(u), o + 2, 1), M(s.d).slice(0, o) === (r = M(n.d)).slice(0, o)) {
                    if ("9999" != (r = r.slice(o - 3, o + 1)) && (i || "4999" != r)) {
                        +r && (+r.slice(1) || "5" != r.charAt(0)) || (D(n, e + 1, 1), t = !n.times(n).times(n).eq(f));
                        break
                    }
                    if (!i && (D(s, e + 1, 0), s.times(s).times(s).eq(f))) {
                        n = s;
                        break
                    }
                    o += 4, i = 1
                }
                return b = !0, D(n, e, l.rounding, t)
            }, O.decimalPlaces = O.dp = function () {
                var e, t = this.d, r = NaN;
                if (t) {
                    if (r = ((e = t.length - 1) - _(this.e / I)) * I, e = t[e]) for (; e % 10 == 0; e /= 10) r--;
                    r < 0 && (r = 0)
                }
                return r
            }, O.dividedBy = O.div = function (e) {
                return A(this, new this.constructor(e))
            }, O.dividedToIntegerBy = O.divToInt = function (e) {
                var t = this.constructor;
                return D(A(this, new t(e), 0, 1, 1), t.precision, t.rounding)
            }, O.equals = O.eq = function (e) {
                return 0 === this.cmp(e)
            }, O.floor = function () {
                return D(new this.constructor(this), this.e + 1, 3)
            }, O.greaterThan = O.gt = function (e) {
                return 0 < this.cmp(e)
            }, O.greaterThanOrEqualTo = O.gte = function (e) {
                var t = this.cmp(e);
                return 1 == t || 0 === t
            }, O.hyperbolicCosine = O.cosh = function () {
                var e, t, r, n, i, a = this, o = a.constructor, s = new o(1);
                if (!a.isFinite()) return new o(a.s ? 1 / 0 : NaN);
                if (a.isZero()) return s;
                r = o.precision, n = o.rounding, o.precision = r + Math.max(a.e, a.sd()) + 4, o.rounding = 1, t = (i = a.d.length) < 32 ? (1 / Y(4, e = Math.ceil(i / 3))).toString() : (e = 16, "2.3283064365386962890625e-10"), a = W(o, 1, a.times(t), new o(1), !0);
                for (var u, c = e, f = new o(8); c--;) u = a.times(a), a = s.minus(u.times(f.minus(u.times(f))));
                return D(a, o.precision = r, o.rounding = n, !0)
            }, O.hyperbolicSine = O.sinh = function () {
                var e, t, r, n, i = this, a = i.constructor;
                if (!i.isFinite() || i.isZero()) return new a(i);
                if (t = a.precision, r = a.rounding, a.precision = t + Math.max(i.e, i.sd()) + 4, a.rounding = 1, (n = i.d.length) < 3) i = W(a, 2, i, i, !0); else {
                    e = 16 < (e = 1.4 * Math.sqrt(n)) ? 16 : 0 | e, i = W(a, 2, i = i.times(1 / Y(5, e)), i, !0);
                    for (var o, s = new a(5), u = new a(16), c = new a(20); e--;) o = i.times(i), i = i.times(s.plus(o.times(u.times(o).plus(c))))
                }
                return D(i, a.precision = t, a.rounding = r, !0)
            }, O.hyperbolicTangent = O.tanh = function () {
                var e, t, r = this, n = r.constructor;
                return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, A(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s)
            }, O.inverseCosine = O.acos = function () {
                var e, t = this, r = t.constructor, n = t.abs().cmp(1), i = r.precision, a = r.rounding;
                return -1 !== n ? 0 === n ? t.isNeg() ? U(r, i, a) : new r(0) : new r(NaN) : t.isZero() ? U(r, i + 4, a).times(.5) : (r.precision = i + 6, r.rounding = 1, t = t.asin(), e = U(r, i + 4, a).times(.5), r.precision = i, r.rounding = a, e.minus(t))
            }, O.inverseHyperbolicCosine = O.acosh = function () {
                var e, t, r = this, n = r.constructor;
                return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, b = !1, r = r.times(r).minus(1).sqrt().plus(r), b = !0, n.precision = e, n.rounding = t, r.ln()) : new n(r)
            }, O.inverseHyperbolicSine = O.asinh = function () {
                var e, t, r = this, n = r.constructor;
                return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, b = !1, r = r.times(r).plus(1).sqrt().plus(r), b = !0, n.precision = e, n.rounding = t, r.ln())
            }, O.inverseHyperbolicTangent = O.atanh = function () {
                var e, t, r, n, i = this, a = i.constructor;
                return i.isFinite() ? 0 <= i.e ? new a(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = a.precision, t = a.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? D(new a(i), e, t, !0) : (a.precision = r = n - i.e, i = A(i.plus(1), new a(1).minus(i), r + e, 1), a.precision = e + 4, a.rounding = 1, i = i.ln(), a.precision = e, a.rounding = t, i.times(.5))) : new a(NaN)
            }, O.inverseSine = O.asin = function () {
                var e, t, r, n, i = this, a = i.constructor;
                return i.isZero() ? new a(i) : (t = i.abs().cmp(1), r = a.precision, n = a.rounding, -1 !== t ? 0 === t ? ((e = U(a, r + 4, n).times(.5)).s = i.s, e) : new a(NaN) : (a.precision = r + 6, a.rounding = 1, i = i.div(new a(1).minus(i.times(i)).sqrt().plus(1)).atan(), a.precision = r, a.rounding = n, i.times(2)))
            }, O.inverseTangent = O.atan = function () {
                var e, t, r, n, i, a, o, s, u, c = this, f = c.constructor, l = f.precision, p = f.rounding;
                if (c.isFinite()) {
                    if (c.isZero()) return new f(c);
                    if (c.abs().eq(1) && l + 4 <= N) return (o = U(f, l + 4, p).times(.25)).s = c.s, o
                } else {
                    if (!c.s) return new f(NaN);
                    if (l + 4 <= N) return (o = U(f, l + 4, p).times(.5)).s = c.s, o
                }
                for (f.precision = s = l + 10, f.rounding = 1, e = r = Math.min(28, s / I + 2 | 0); e; --e) c = c.div(c.times(c).plus(1).sqrt().plus(1));
                for (b = !1, t = Math.ceil(s / I), n = 1, u = c.times(c), o = new f(c), i = c; -1 !== e;) if (i = i.times(u), a = o.minus(i.div(n += 2)), i = i.times(u), void 0 !== (o = a.plus(i.div(n += 2))).d[t]) for (e = t; o.d[e] === a.d[e] && e--;) ;
                return r && (o = o.times(2 << r - 1)), b = !0, D(o, f.precision = l, f.rounding = p, !0)
            }, O.isFinite = function () {
                return !!this.d
            }, O.isInteger = O.isInt = function () {
                return !!this.d && _(this.e / I) > this.d.length - 2
            }, O.isNaN = function () {
                return !this.s
            }, O.isNegative = O.isNeg = function () {
                return this.s < 0
            }, O.isPositive = O.isPos = function () {
                return 0 < this.s
            }, O.isZero = function () {
                return !!this.d && 0 === this.d[0]
            }, O.lessThan = O.lt = function (e) {
                return this.cmp(e) < 0
            }, O.lessThanOrEqualTo = O.lte = function (e) {
                return this.cmp(e) < 1
            }, O.logarithm = O.log = function (e) {
                var t, r, n, i, a, o, s, u, c = this, f = c.constructor, l = f.precision, p = f.rounding;
                if (null == e) e = new f(10), t = !0; else {
                    if (r = (e = new f(e)).d, e.s < 0 || !r || !r[0] || e.eq(1)) return new f(NaN);
                    t = e.eq(10)
                }
                if (r = c.d, c.s < 0 || !r || !r[0] || c.eq(1)) return new f(r && !r[0] ? -1 / 0 : 1 != c.s ? NaN : r ? 0 : 1 / 0);
                if (t) if (1 < r.length) a = !0; else {
                    for (i = r[0]; i % 10 == 0;) i /= 10;
                    a = 1 !== i
                }
                if (b = !1, o = Z(c, s = l + 5), n = t ? P(f, s + 10) : Z(e, s), E((u = A(o, n, s, 1)).d, i = l, p)) do {
                    if (o = Z(c, s += 10), n = t ? P(f, s + 10) : Z(e, s), u = A(o, n, s, 1), !a) {
                        +M(u.d).slice(i + 1, i + 15) + 1 == 1e14 && (u = D(u, l + 1, 0));
                        break
                    }
                } while (E(u.d, i += 10, p));
                return b = !0, D(u, l, p)
            }, O.minus = O.sub = function (e) {
                var t, r, n, i, a, o, s, u, c, f, l, p, m = this, h = m.constructor;
                if (e = new h(e), !m.d || !e.d) return m.s && e.s ? m.d ? e.s = -e.s : e = new h(e.d || m.s !== e.s ? m : NaN) : e = new h(NaN), e;
                if (m.s != e.s) return e.s = -e.s, m.plus(e);
                if (c = m.d, p = e.d, s = h.precision, u = h.rounding, !c[0] || !p[0]) {
                    if (p[0]) e.s = -e.s; else {
                        if (!c[0]) return new h(3 === u ? -0 : 0);
                        e = new h(m)
                    }
                    return b ? D(e, s, u) : e
                }
                if (r = _(e.e / I), f = _(m.e / I), c = c.slice(), a = f - r) {
                    for (o = (l = a < 0) ? (t = c, a = -a, p.length) : (t = p, r = f, c.length), (n = Math.max(Math.ceil(s / I), o) + 2) < a && (a = n, t.length = 1), t.reverse(), n = a; n--;) t.push(0);
                    t.reverse()
                } else {
                    for ((l = (n = c.length) < (o = p.length)) && (o = n), n = 0; n < o; n++) if (c[n] != p[n]) {
                        l = c[n] < p[n];
                        break
                    }
                    a = 0
                }
                for (l && (t = c, c = p, p = t, e.s = -e.s), o = c.length, n = p.length - o; 0 < n; --n) c[o++] = 0;
                for (n = p.length; a < n;) {
                    if (c[--n] < p[n]) {
                        for (i = n; i && 0 === c[--i];) c[i] = q - 1;
                        --c[i], c[n] += q
                    }
                    c[n] -= p[n]
                }
                for (; 0 === c[--o];) c.pop();
                for (; 0 === c[0]; c.shift()) --r;
                return c[0] ? (e.d = c, e.e = R(c, r), b ? D(e, s, u) : e) : new h(3 === u ? -0 : 0)
            }, O.modulo = O.mod = function (e) {
                var t, r = this, n = r.constructor;
                return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? D(new n(r), n.precision, n.rounding) : (b = !1, 9 == n.modulo ? (t = A(r, e.abs(), 0, 3, 1)).s *= e.s : t = A(r, e, 0, n.modulo, 1), t = t.times(e), b = !0, r.minus(t))
            }, O.naturalExponential = O.exp = function () {
                return G(this)
            }, O.naturalLogarithm = O.ln = function () {
                return Z(this)
            }, O.negated = O.neg = function () {
                var e = new this.constructor(this);
                return e.s = -e.s, D(e)
            }, O.plus = O.add = function (e) {
                var t, r, n, i, a, o, s, u, c, f, l = this, p = l.constructor;
                if (e = new p(e), !l.d || !e.d) return l.s && e.s ? l.d || (e = new p(e.d || l.s === e.s ? l : NaN)) : e = new p(NaN), e;
                if (l.s != e.s) return e.s = -e.s, l.minus(e);
                if (c = l.d, f = e.d, s = p.precision, u = p.rounding, !c[0] || !f[0]) return f[0] || (e = new p(l)), b ? D(e, s, u) : e;
                if (a = _(l.e / I), n = _(e.e / I), c = c.slice(), i = a - n) {
                    for ((o = (o = i < 0 ? (r = c, i = -i, f.length) : (r = f, n = a, c.length)) < (a = Math.ceil(s / I)) ? a + 1 : o + 1) < i && (i = o, r.length = 1), r.reverse(); i--;) r.push(0);
                    r.reverse()
                }
                for ((o = c.length) - (i = f.length) < 0 && (i = o, r = f, f = c, c = r), t = 0; i;) t = (c[--i] = c[i] + f[i] + t) / q | 0, c[i] %= q;
                for (t && (c.unshift(t), ++n), o = c.length; 0 == c[--o];) c.pop();
                return e.d = c, e.e = R(c, n), b ? D(e, s, u) : e
            }, O.precision = O.sd = function (e) {
                var t;
                if (void 0 !== e && e !== !!e && 1 !== e && 0 !== e) throw Error(g + e);
                return this.d ? (t = F(this.d), e && this.e + 1 > t && (t = this.e + 1)) : t = NaN, t
            }, O.round = function () {
                var e = this.constructor;
                return D(new e(this), this.e + 1, e.rounding)
            }, O.sine = O.sin = function () {
                var e, t, r = this, n = r.constructor;
                return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + I, n.rounding = 1, r = function (e, t) {
                    var r, n = t.d.length;
                    if (n < 3) return W(e, 2, t, t);
                    r = 16 < (r = 1.4 * Math.sqrt(n)) ? 16 : 0 | r, t = t.times(1 / Y(5, r)), t = W(e, 2, t, t);
                    for (var i, a = new e(5), o = new e(16), s = new e(20); r--;) i = t.times(t), t = t.times(a.plus(i.times(o.times(i).minus(s))));
                    return t
                }(n, X(n, r)), n.precision = e, n.rounding = t, D(2 < o ? r.neg() : r, e, t, !0)) : new n(NaN)
            }, O.squareRoot = O.sqrt = function () {
                var e, t, r, n, i, a, o = this, s = o.d, u = o.e, c = o.s, f = o.constructor;
                if (1 !== c || !s || !s[0]) return new f(!c || c < 0 && (!s || s[0]) ? NaN : s ? o : 1 / 0);
                for (b = !1, n = 0 == (c = Math.sqrt(+o)) || c == 1 / 0 ? (((t = M(s)).length + u) % 2 == 0 && (t += "0"), c = Math.sqrt(t), u = _((u + 1) / 2) - (u < 0 || u % 2), new f(t = c == 1 / 0 ? "1e" + u : (t = c.toExponential()).slice(0, t.indexOf("e") + 1) + u)) : new f(c.toString()), r = (u = f.precision) + 3; ;) if (n = (a = n).plus(A(o, a, r + 2, 1)).times(.5), M(a.d).slice(0, r) === (t = M(n.d)).slice(0, r)) {
                    if ("9999" != (t = t.slice(r - 3, r + 1)) && (i || "4999" != t)) {
                        +t && (+t.slice(1) || "5" != t.charAt(0)) || (D(n, u + 1, 1), e = !n.times(n).eq(o));
                        break
                    }
                    if (!i && (D(a, u + 1, 0), a.times(a).eq(o))) {
                        n = a;
                        break
                    }
                    r += 4, i = 1
                }
                return b = !0, D(n, u, f.rounding, e)
            }, O.tangent = O.tan = function () {
                var e, t, r = this, n = r.constructor;
                return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, (r = r.sin()).s = 1, r = A(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, D(2 == o || 4 == o ? r.neg() : r, e, t, !0)) : new n(NaN)
            }, O.times = O.mul = function (e) {
                var t, r, n, i, a, o, s, u, c, f = this.constructor, l = this.d, p = (e = new f(e)).d;
                if (e.s *= this.s, !(l && l[0] && p && p[0])) return new f(!e.s || l && !l[0] && !p || p && !p[0] && !l ? NaN : l && p ? 0 * e.s : e.s / 0);
                for (r = _(this.e / I) + _(e.e / I), (u = l.length) < (c = p.length) && (a = l, l = p, p = a, o = u, u = c, c = o), a = [], n = o = u + c; n--;) a.push(0);
                for (n = c; 0 <= --n;) {
                    for (t = 0, i = u + n; n < i;) s = a[i] + p[n] * l[i - n - 1] + t, a[i--] = s % q | 0, t = s / q | 0;
                    a[i] = (a[i] + t) % q | 0
                }
                for (; !a[--o];) a.pop();
                return t ? ++r : a.shift(), e.d = a, e.e = R(a, r), b ? D(e, f.precision, f.rounding) : e
            }, O.toBinary = function (e, t) {
                return r(this, 2, e, t)
            }, O.toDecimalPlaces = O.toDP = function (e, t) {
                var r = (n = this).constructor, n = new r(n);
                return void 0 === e ? n : (j(e, 0, d), void 0 === t ? t = r.rounding : j(t, 0, 8), D(n, e + n.e + 1, t))
            }, O.toExponential = function (e, t) {
                var r = this, n = r.constructor,
                    i = void 0 === e ? C(r, !0) : (j(e, 0, d), void 0 === t ? t = n.rounding : j(t, 0, 8), C(r = D(new n(r), e + 1, t), !0, e + 1));
                return r.isNeg() && !r.isZero() ? "-" + i : i
            }, O.toFixed = function (e, t) {
                var r, n = this, i = n.constructor,
                    a = void 0 === e ? C(n) : (j(e, 0, d), void 0 === t ? t = i.rounding : j(t, 0, 8), C(r = D(new i(n), e + n.e + 1, t), !1, e + r.e + 1));
                return n.isNeg() && !n.isZero() ? "-" + a : a
            }, O.toFraction = function (e) {
                var t, r, n, i, a, o, s, u, c, f, l, p, m = this, h = m.d, d = m.constructor;
                if (!h) return new d(m);
                if (c = r = new d(1), n = u = new d(0), o = (a = (t = new d(n)).e = F(h) - m.e - 1) % I, t.d[0] = v(10, o < 0 ? I + o : o), null == e) e = 0 < a ? t : c; else {
                    if (!(s = new d(e)).isInt() || s.lt(c)) throw Error(g + s);
                    e = s.gt(t) ? 0 < a ? t : c : s
                }
                for (b = !1, s = new d(M(h)), f = d.precision, d.precision = a = h.length * I * 2; l = A(s, t, 0, 1, 1), 1 != (i = r.plus(l.times(n))).cmp(e);) r = n, n = i, i = c, c = u.plus(l.times(i)), u = i, i = t, t = s.minus(l.times(i)), s = i;
                return i = A(e.minus(r), n, 0, 1, 1), u = u.plus(i.times(c)), r = r.plus(i.times(n)), u.s = c.s = m.s, p = A(c, n, a, 1).minus(m).abs().cmp(A(u, r, a, 1).minus(m).abs()) < 1 ? [c, n] : [u, r], d.precision = f, b = !0, p
            }, O.toHexadecimal = O.toHex = function (e, t) {
                return r(this, 16, e, t)
            }, O.toNearest = function (e, t) {
                var r = (n = this).constructor, n = new r(n);
                if (null == e) {
                    if (!n.d) return n;
                    e = new r(1), t = r.rounding
                } else {
                    if (e = new r(e), void 0 === t ? t = r.rounding : j(t, 0, 8), !n.d) return e.s ? n : e;
                    if (!e.d) return e.s && (e.s = n.s), e
                }
                return e.d[0] ? (b = !1, n = A(n, e, 0, t, 1).times(e), b = !0, D(n)) : (e.s = n.s, n = e), n
            }, O.toNumber = function () {
                return +this
            }, O.toOctal = function (e, t) {
                return r(this, 8, e, t)
            }, O.toPower = O.pow = function (e) {
                var t, r, n, i, a, o, s = this, u = s.constructor, c = +(e = new u(e));
                if (!(s.d && e.d && s.d[0] && e.d[0])) return new u(v(+s, c));
                if ((s = new u(s)).eq(1)) return s;
                if (n = u.precision, a = u.rounding, e.eq(1)) return D(s, n, a);
                if ((t = _(e.e / I)) >= e.d.length - 1 && (r = c < 0 ? -c : c) <= 9007199254740991) return i = H(u, s, r, n), e.s < 0 ? new u(1).div(i) : D(i, n, a);
                if ((o = s.s) < 0) {
                    if (t < e.d.length - 1) return new u(NaN);
                    if (0 == (1 & e.d[t]) && (o = 1), 0 == s.e && 1 == s.d[0] && 1 == s.d.length) return s.s = o, s
                }
                return (t = 0 != (r = v(+s, c)) && isFinite(r) ? new u(r + "").e : _(c * (Math.log("0." + M(s.d)) / Math.LN10 + s.e + 1))) > u.maxE + 1 || t < u.minE - 1 ? new u(0 < t ? o / 0 : 0) : (b = !1, u.rounding = s.s = 1, r = Math.min(12, (t + "").length), (i = G(e.times(Z(s, n + r)), n)).d && E((i = D(i, n + 5, 1)).d, n, a) && (t = n + 10, +M((i = D(G(e.times(Z(s, t + r)), t), t + 5, 1)).d).slice(n + 1, n + 15) + 1 == 1e14 && (i = D(i, n + 1, 0))), i.s = o, b = !0, D(i, n, u.rounding = a))
            }, O.toPrecision = function (e, t) {
                var r = this, n = r.constructor,
                    i = void 0 === e ? C(r, r.e <= n.toExpNeg || r.e >= n.toExpPos) : (j(e, 1, d), void 0 === t ? t = n.rounding : j(t, 0, 8), C(r = D(new n(r), e, t), e <= r.e || r.e <= n.toExpNeg, e));
                return r.isNeg() && !r.isZero() ? "-" + i : i
            }, O.toSignificantDigits = O.toSD = function (e, t) {
                var r = this.constructor;
                return void 0 === e ? (e = r.precision, t = r.rounding) : (j(e, 1, d), void 0 === t ? t = r.rounding : j(t, 0, 8)), D(new r(this), e, t)
            }, O.toString = function () {
                var e = this, t = e.constructor, r = C(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
                return e.isNeg() && !e.isZero() ? "-" + r : r
            }, O.truncated = O.trunc = function () {
                return D(new this.constructor(this), this.e + 1, 1)
            }, O.valueOf = O.toJSON = function () {
                var e = this, t = e.constructor, r = C(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
                return e.isNeg() ? "-" + r : r
            };
            var A = function (e, t, r, n, i, a) {
                var o, s, u, c, f, l, p, m, h, d, y, g, v, b, x, w, N, O, M, j, E = e.constructor,
                    S = e.s == t.s ? 1 : -1, A = e.d, C = t.d;
                if (!(A && A[0] && C && C[0])) return new E(e.s && t.s && (A ? !C || A[0] != C[0] : C) ? A && 0 == A[0] || !C ? 0 * S : S / 0 : NaN);
                for (s = a ? (f = 1, e.e - t.e) : (a = q, f = I, _(e.e / f) - _(t.e / f)), M = C.length, N = A.length, d = (h = new E(S)).d = [], u = 0; C[u] == (A[u] || 0); u++) ;
                if (C[u] > (A[u] || 0) && s--, null == r ? (b = r = E.precision, n = E.rounding) : b = i ? r + (e.e - t.e) + 1 : r, b < 0) d.push(1), l = !0; else {
                    if (b = b / f + 2 | 0, u = 0, 1 == M) {
                        for (C = C[c = 0], b++; (u < N || c) && b--; u++) x = c * a + (A[u] || 0), d[u] = x / C | 0, c = x % C | 0;
                        l = c || u < N
                    } else {
                        for (1 < (c = a / (C[0] + 1) | 0) && (C = k(C, c, a), A = k(A, c, a), M = C.length, N = A.length), w = M, g = (y = A.slice(0, M)).length; g < M;) y[g++] = 0;
                        for ((j = C.slice()).unshift(0), O = C[0], C[1] >= a / 2 && ++O; c = 0, (o = B(C, y, M, g)) < 0 ? (v = y[0], M != g && (v = v * a + (y[1] || 0)), 1 < (c = v / O | 0) ? (a <= c && (c = a - 1), 1 == (o = B(p = k(C, c, a), y, m = p.length, g = y.length)) && (c--, z(p, M < m ? j : C, m, a))) : (0 == c && (o = c = 1), p = C.slice()), (m = p.length) < g && p.unshift(0), z(y, p, g, a), -1 == o && (o = B(C, y, M, g = y.length)) < 1 && (c++, z(y, M < g ? j : C, g, a)), g = y.length) : 0 === o && (c++, y = [0]), d[u++] = c, o && y[0] ? y[g++] = A[w] || 0 : (y = [A[w]], g = 1), (w++ < N || void 0 !== y[0]) && b--;) ;
                        l = void 0 !== y[0]
                    }
                    d[0] || d.shift()
                }
                if (1 == f) h.e = s, T = l; else {
                    for (u = 1, c = d[0]; 10 <= c; c /= 10) u++;
                    h.e = u + s * f - 1, D(h, i ? r + h.e + 1 : r, n, l)
                }
                return h
            };

            function k(e, t, r) {
                var n, i = 0, a = e.length;
                for (e = e.slice(); a--;) n = e[a] * t + i, e[a] = n % r | 0, i = n / r | 0;
                return i && e.unshift(i), e
            }

            function B(e, t, r, n) {
                var i, a;
                if (r != n) a = n < r ? 1 : -1; else for (i = a = 0; i < r; i++) if (e[i] != t[i]) {
                    a = e[i] > t[i] ? 1 : -1;
                    break
                }
                return a
            }

            function z(e, t, r, n) {
                for (var i = 0; r--;) e[r] -= i, i = e[r] < t[r] ? 1 : 0, e[r] = i * n + e[r] - t[r];
                for (; !e[0] && 1 < e.length;) e.shift()
            }

            function D(e, t, r, n) {
                var i, a, o, s, u, c, f, l, p, m = e.constructor;
                e:if (null != t) {
                    if (!(l = e.d)) return e;
                    for (i = 1, s = l[0]; 10 <= s; s /= 10) i++;
                    if ((a = t - i) < 0) a += I, o = t, u = (f = l[p = 0]) / v(10, i - o - 1) % 10 | 0; else if (p = Math.ceil((a + 1) / I), (s = l.length) <= p) {
                        if (!n) break e;
                        for (; s++ <= p;) l.push(0);
                        f = u = 0, o = (a %= I) - I + (i = 1)
                    } else {
                        for (f = s = l[p], i = 1; 10 <= s; s /= 10) i++;
                        u = (o = (a %= I) - I + i) < 0 ? 0 : f / v(10, i - o - 1) % 10 | 0
                    }
                    if (n = n || t < 0 || void 0 !== l[p + 1] || (o < 0 ? f : f % v(10, i - o - 1)), c = r < 4 ? (u || n) && (0 == r || r == (e.s < 0 ? 3 : 2)) : 5 < u || 5 == u && (4 == r || n || 6 == r && (0 < a ? 0 < o ? f / v(10, i - o) : 0 : l[p - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !l[0]) return l.length = 0, c ? (t -= e.e + 1, l[0] = v(10, (I - t % I) % I), e.e = -t || 0) : l[0] = e.e = 0, e;
                    if (0 == a ? (l.length = p, s = 1, p--) : (l.length = p + 1, s = v(10, I - a), l[p] = 0 < o ? (f / v(10, i - o) % v(10, o) | 0) * s : 0), c) for (; ;) {
                        if (0 == p) {
                            for (a = 1, o = l[0]; 10 <= o; o /= 10) a++;
                            for (o = l[0] += s, s = 1; 10 <= o; o /= 10) s++;
                            a != s && (e.e++, l[0] == q && (l[0] = 1));
                            break
                        }
                        if (l[p] += s, l[p] != q) break;
                        l[p--] = 0, s = 1
                    }
                    for (a = l.length; 0 === l[--a];) l.pop()
                }
                return b && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e
            }

            function C(e, t, r) {
                if (!e.isFinite()) return V(e);
                var n, i = e.e, a = M(e.d), o = a.length;
                return t ? (r && 0 < (n = r - o) ? a = a.charAt(0) + "." + a.slice(1) + L(n) : 1 < o && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (a = "0." + L(-i - 1) + a, r && 0 < (n = r - o) && (a += L(n))) : o <= i ? (a += L(i + 1 - o), r && 0 < (n = r - i - 1) && (a = a + "." + L(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && 0 < (n = r - o) && (i + 1 === o && (a += "."), a += L(n))), a
            }

            function R(e, t) {
                var r = e[0];
                for (t *= I; 10 <= r; r /= 10) t++;
                return t
            }

            function P(e, t, r) {
                if (w < t) throw b = !0, r && (e.precision = r), Error(a);
                return D(new e(n), t, 1, !0)
            }

            function U(e, t, r) {
                if (N < t) throw Error(a);
                return D(new e(i), t, r, !0)
            }

            function F(e) {
                var t = e.length - 1, r = t * I + 1;
                if (t = e[t]) {
                    for (; t % 10 == 0; t /= 10) r--;
                    for (t = e[0]; 10 <= t; t /= 10) r++
                }
                return r
            }

            function L(e) {
                for (var t = ""; e--;) t += "0";
                return t
            }

            function H(e, t, r, n) {
                var i, a = new e(1), o = Math.ceil(n / I + 4);
                for (b = !1; ;) {
                    if (r % 2 && Q((a = a.times(t)).d, o) && (i = !0), 0 === (r = _(r / 2))) {
                        r = a.d.length - 1, i && 0 === a.d[r] && ++a.d[r];
                        break
                    }
                    Q((t = t.times(t)).d, o)
                }
                return b = !0, a
            }

            function $(e) {
                return 1 & e.d[e.d.length - 1]
            }

            function e(e, t, r) {
                for (var n, i = new e(t[0]), a = 0; ++a < t.length;) {
                    if (!(n = new e(t[a])).s) {
                        i = n;
                        break
                    }
                    i[r](n) && (i = n)
                }
                return i
            }

            function G(e, t) {
                var r, n, i, a, o, s, u, c = 0, f = 0, l = 0, p = e.constructor, m = p.rounding, h = p.precision;
                if (!e.d || !e.d[0] || 17 < e.e) return new p(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
                for (u = null == t ? (b = !1, h) : t, s = new p(.03125); -2 < e.e;) e = e.times(s), l += 5;
                for (u += n = Math.log(v(2, l)) / Math.LN10 * 2 + 5 | 0, r = a = o = new p(1), p.precision = u; ;) {
                    if (a = D(a.times(e), u, 1), r = r.times(++f), M((s = o.plus(A(a, r, u, 1))).d).slice(0, u) === M(o.d).slice(0, u)) {
                        for (i = l; i--;) o = D(o.times(o), u, 1);
                        if (null != t) return p.precision = h, o;
                        if (!(c < 3 && E(o.d, u - n, m, c))) return D(o, p.precision = h, m, b = !0);
                        p.precision = u += 10, r = a = s = new p(1), f = 0, c++
                    }
                    o = s
                }
            }

            function Z(e, t) {
                var r, n, i, a, o, s, u, c, f, l, p, m = 1, h = e, d = h.d, y = h.constructor, g = y.rounding,
                    v = y.precision;
                if (h.s < 0 || !d || !d[0] || !h.e && 1 == d[0] && 1 == d.length) return new y(d && !d[0] ? -1 / 0 : 1 != h.s ? NaN : d ? 0 : h);
                if (f = null == t ? (b = !1, v) : t, y.precision = f += 10, n = (r = M(d)).charAt(0), !(Math.abs(a = h.e) < 15e14)) return c = P(y, f + 2, v).times(a + ""), h = Z(new y(n + "." + r.slice(1)), f - 10).plus(c), y.precision = v, null == t ? D(h, v, g, b = !0) : h;
                for (; n < 7 && 1 != n || 1 == n && 3 < r.charAt(1);) n = (r = M((h = h.times(e)).d)).charAt(0), m++;
                for (a = h.e, 1 < n ? (h = new y("0." + r), a++) : h = new y(n + "." + r.slice(1)), u = o = h = A((l = h).minus(1), h.plus(1), f, 1), p = D(h.times(h), f, 1), i = 3; ;) {
                    if (o = D(o.times(p), f, 1), M((c = u.plus(A(o, new y(i), f, 1))).d).slice(0, f) === M(u.d).slice(0, f)) {
                        if (u = u.times(2), 0 !== a && (u = u.plus(P(y, f + 2, v).times(a + ""))), u = A(u, new y(m), f, 1), null != t) return y.precision = v, u;
                        if (!E(u.d, f - 10, g, s)) return D(u, y.precision = v, g, b = !0);
                        y.precision = f += 10, c = o = h = A(l.minus(1), l.plus(1), f, 1), p = D(h.times(h), f, 1), i = s = 1
                    }
                    u = c, i += 2
                }
            }

            function V(e) {
                return String(e.s * e.s / 0)
            }

            function J(e, t) {
                var r, n, i;
                for (-1 < (r = t.indexOf(".")) && (t = t.replace(".", "")), 0 < (n = t.search(/e/i)) ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; 48 === t.charCodeAt(n); n++) ;
                for (i = t.length; 48 === t.charCodeAt(i - 1); --i) ;
                if (t = t.slice(n, i)) {
                    if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % I, r < 0 && (n += I), n < i) {
                        for (n && e.d.push(+t.slice(0, n)), i -= I; n < i;) e.d.push(+t.slice(n, n += I));
                        t = t.slice(n), n = I - t.length
                    } else n -= i;
                    for (; n--;) t += "0";
                    e.d.push(+t), b && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]))
                } else e.e = 0, e.d = [0];
                return e
            }

            function W(e, t, r, n, i) {
                var a, o, s, u, c = e.precision, f = Math.ceil(c / I);
                for (b = !1, u = r.times(r), s = new e(n); ;) {
                    if (o = A(s.times(u), new e(t++ * t++), c, 1), s = i ? n.plus(o) : n.minus(o), n = A(o.times(u), new e(t++ * t++), c, 1), void 0 !== (o = s.plus(n)).d[f]) {
                        for (a = f; o.d[a] === s.d[a] && a--;) ;
                        if (-1 == a) break
                    }
                    a = s, s = n, n = o, o = a, 0
                }
                return b = !0, o.d.length = f + 1, o
            }

            function Y(e, t) {
                for (var r = e; --t;) r *= e;
                return r
            }

            function X(e, t) {
                var r, n = t.s < 0, i = U(e, e.precision, 1), a = i.times(.5);
                if ((t = t.abs()).lte(a)) return o = n ? 4 : 1, t;
                if ((r = t.divToInt(i)).isZero()) o = n ? 3 : 2; else {
                    if ((t = t.minus(r.times(i))).lte(a)) return o = $(r) ? n ? 2 : 3 : n ? 4 : 1, t;
                    o = $(r) ? n ? 1 : 4 : n ? 3 : 2
                }
                return t.minus(i).abs()
            }

            function r(e, t, r, n) {
                var i, a, o, s, u, c, f, l, p, m = e.constructor, h = void 0 !== r;
                if (h ? (j(r, 1, d), void 0 === n ? n = m.rounding : j(n, 0, 8)) : (r = m.precision, n = m.rounding), e.isFinite()) {
                    for (h ? (i = 2, 16 == t ? r = 4 * r - 3 : 8 == t && (r = 3 * r - 2)) : i = t, 0 <= (o = (f = C(e)).indexOf(".")) && (f = f.replace(".", ""), (p = new m(1)).e = f.length - o, p.d = S(C(p), 10, i), p.e = p.d.length), a = u = (l = S(f, 10, i)).length; 0 == l[--u];) l.pop();
                    if (l[0]) {
                        if (o < 0 ? a-- : ((e = new m(e)).d = l, e.e = a, l = (e = A(e, p, r, n, 0, i)).d, a = e.e, c = T), o = l[r], s = i / 2, c = c || void 0 !== l[r + 1], c = n < 4 ? (void 0 !== o || c) && (0 === n || n === (e.s < 0 ? 3 : 2)) : s < o || o === s && (4 === n || c || 6 === n && 1 & l[r - 1] || n === (e.s < 0 ? 8 : 7)), l.length = r, c) for (; ++l[--r] > i - 1;) l[r] = 0, r || (++a, l.unshift(1));
                        for (u = l.length; !l[u - 1]; --u) ;
                        for (o = 0, f = ""; o < u; o++) f += y.charAt(l[o]);
                        if (h) {
                            if (1 < u) if (16 == t || 8 == t) {
                                for (o = 16 == t ? 4 : 3, --u; u % o; u++) f += "0";
                                for (u = (l = S(f, i, t)).length; !l[u - 1]; --u) ;
                                for (o = 1, f = "1."; o < u; o++) f += y.charAt(l[o])
                            } else f = f.charAt(0) + "." + f.slice(1);
                            f = f + (a < 0 ? "p" : "p+") + a
                        } else if (a < 0) {
                            for (; ++a;) f = "0" + f;
                            f = "0." + f
                        } else if (++a > u) for (a -= u; a--;) f += "0"; else a < u && (f = f.slice(0, a) + "." + f.slice(a))
                    } else f = h ? "0p+0" : "0";
                    f = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + f
                } else f = V(e);
                return e.s < 0 ? "-" + f : f
            }

            function Q(e, t) {
                return e.length > t && (e.length = t, 1)
            }

            function K(e) {
                return new this(e).abs()
            }

            function ee(e) {
                return new this(e).acos()
            }

            function te(e) {
                return new this(e).acosh()
            }

            function re(e, t) {
                return new this(e).plus(t)
            }

            function ne(e) {
                return new this(e).asin()
            }

            function ie(e) {
                return new this(e).asinh()
            }

            function ae(e) {
                return new this(e).atan()
            }

            function oe(e) {
                return new this(e).atanh()
            }

            function se(e, t) {
                e = new this(e), t = new this(t);
                var r, n = this.precision, i = this.rounding, a = n + 4;
                return e.s && t.s ? e.d || t.d ? !t.d || e.isZero() ? (r = t.s < 0 ? U(this, n, i) : new this(0)).s = e.s : !e.d || t.isZero() ? (r = U(this, a, 1).times(.5)).s = e.s : r = t.s < 0 ? (this.precision = a, this.rounding = 1, r = this.atan(A(e, t, a, 1)), t = U(this, a, 1), this.precision = n, this.rounding = i, e.s < 0 ? r.minus(t) : r.plus(t)) : this.atan(A(e, t, a, 1)) : (r = U(this, a, 1).times(0 < t.s ? .25 : .75)).s = e.s : r = new this(NaN), r
            }

            function ue(e) {
                return new this(e).cbrt()
            }

            function ce(e) {
                return D(e = new this(e), e.e + 1, 2)
            }

            function fe(e) {
                if (!e || "object" != typeof e) throw Error(c + "Object expected");
                for (var t, r, n = !0 === e.defaults, i = ["precision", 1, d, "rounding", 0, 8, "toExpNeg", -s, 0, "toExpPos", 0, s, "maxE", 0, s, "minE", -s, 0, "modulo", 0, 9], a = 0; a < i.length; a += 3) if (t = i[a], n && (this[t] = u[t]), void 0 !== (r = e[t])) {
                    if (!(_(r) === r && i[a + 1] <= r && r <= i[a + 2])) throw Error(g + t + ": " + r);
                    this[t] = r
                }
                if (t = "crypto", n && (this[t] = u[t]), void 0 !== (r = e[t])) {
                    if (!0 !== r && !1 !== r && 0 !== r && 1 !== r) throw Error(g + t + ": " + r);
                    if (r) {
                        if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw Error(f);
                        this[t] = !0
                    } else this[t] = !1
                }
                return this
            }

            function le(e) {
                return new this(e).cos()
            }

            function pe(e) {
                return new this(e).cosh()
            }

            function me(e, t) {
                return new this(e).div(t)
            }

            function he(e) {
                return new this(e).exp()
            }

            function de(e) {
                return D(e = new this(e), e.e + 1, 3)
            }

            function ye() {
                var e, t, r = new this(0);
                for (b = !1, e = 0; e < arguments.length;) if ((t = new this(arguments[e++])).d) r.d && (r = r.plus(t.times(t))); else {
                    if (t.s) return b = !0, new this(1 / 0);
                    r = t
                }
                return b = !0, r.sqrt()
            }

            function ge(e) {
                return e instanceof l || e && "[object Decimal]" === e.name || !1
            }

            function ve(e) {
                return new this(e).ln()
            }

            function be(e, t) {
                return new this(e).log(t)
            }

            function xe(e) {
                return new this(e).log(2)
            }

            function we(e) {
                return new this(e).log(10)
            }

            function Ne() {
                return e(this, arguments, "lt")
            }

            function Oe() {
                return e(this, arguments, "gt")
            }

            function Me(e, t) {
                return new this(e).mod(t)
            }

            function je(e, t) {
                return new this(e).mul(t)
            }

            function Ee(e, t) {
                return new this(e).pow(t)
            }

            function Se(e) {
                var t, r, n, i, a = 0, o = new this(1), s = [];
                if (void 0 === e ? e = this.precision : j(e, 1, d), n = Math.ceil(e / I), this.crypto) if (crypto.getRandomValues) for (t = crypto.getRandomValues(new Uint32Array(n)); a < n;) 429e7 <= (i = t[a]) ? t[a] = crypto.getRandomValues(new Uint32Array(1))[0] : s[a++] = i % 1e7; else {
                    if (!crypto.randomBytes) throw Error(f);
                    for (t = crypto.randomBytes(n *= 4); a < n;) 214e7 <= (i = t[a] + (t[a + 1] << 8) + (t[a + 2] << 16) + ((127 & t[a + 3]) << 24)) ? crypto.randomBytes(4).copy(t, a) : (s.push(i % 1e7), a += 4);
                    a = n / 4
                } else for (; a < n;) s[a++] = 1e7 * Math.random() | 0;
                for (n = s[--a], e %= I, n && e && (i = v(10, I - e), s[a] = (n / i | 0) * i); 0 === s[a]; a--) s.pop();
                if (a < 0) s = [r = 0]; else {
                    for (r = -1; 0 === s[0]; r -= I) s.shift();
                    for (n = 1, i = s[0]; 10 <= i; i /= 10) n++;
                    n < I && (r -= I - n)
                }
                return o.e = r, o.d = s, o
            }

            function Ae(e) {
                return D(e = new this(e), e.e + 1, this.rounding)
            }

            function Ce(e) {
                return (e = new this(e)).d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN
            }

            function Te(e) {
                return new this(e).sin()
            }

            function _e(e) {
                return new this(e).sinh()
            }

            function qe(e) {
                return new this(e).sqrt()
            }

            function Ie(e, t) {
                return new this(e).sub(t)
            }

            function ke(e) {
                return new this(e).tan()
            }

            function Be(e) {
                return new this(e).tanh()
            }

            function ze(e) {
                return D(e = new this(e), e.e + 1, 1)
            }

            (l = function e(t) {
                var r, n, i;

                function a(e) {
                    var t, r, n, i = this;
                    if (!(i instanceof a)) return new a(e);
                    if (e instanceof (i.constructor = a)) return i.s = e.s, void (b ? !e.d || e.e > a.maxE ? (i.e = NaN, i.d = null) : e.e < a.minE ? (i.e = 0, i.d = [0]) : (i.e = e.e, i.d = e.d.slice()) : (i.e = e.e, i.d = e.d ? e.d.slice() : e.d));
                    if ("number" == (n = typeof e)) {
                        if (0 === e) return i.s = 1 / e < 0 ? -1 : 1, i.e = 0, void (i.d = [0]);
                        if (e < 0 ? (e = -e, i.s = -1) : i.s = 1, e === ~~e && e < 1e7) {
                            for (t = 0, r = e; 10 <= r; r /= 10) t++;
                            return void (b ? a.maxE < t ? (i.e = NaN, i.d = null) : t < a.minE ? (i.e = 0, i.d = [0]) : (i.e = t, i.d = [e]) : (i.e = t, i.d = [e]))
                        }
                        return 0 * e != 0 ? (e || (i.s = NaN), i.e = NaN, void (i.d = null)) : J(i, e.toString())
                    }
                    if ("string" != n) throw Error(g + e);
                    return 45 === (r = e.charCodeAt(0)) ? (e = e.slice(1), i.s = -1) : (43 === r && (e = e.slice(1)), i.s = 1), (x.test(e) ? J : function (e, t) {
                        var r, n, i, a, o, s, u, c, f;
                        if ("Infinity" === t || "NaN" === t) return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
                        if (m.test(t)) r = 16, t = t.toLowerCase(); else if (p.test(t)) r = 2; else {
                            if (!h.test(t)) throw Error(g + t);
                            r = 8
                        }
                        for (o = 0 <= (a = (t = 0 < (a = t.search(/p/i)) ? (u = +t.slice(a + 1), t.substring(2, a)) : t.slice(2)).indexOf(".")), n = e.constructor, o && (a = (s = (t = t.replace(".", "")).length) - a, i = H(n, new n(r), a, 2 * a)), a = f = (c = S(t, r, q)).length - 1; 0 === c[a]; --a) c.pop();
                        return a < 0 ? new n(0 * e.s) : (e.e = R(c, f), e.d = c, b = !1, o && (e = A(e, i, 4 * s)), u && (e = e.times(Math.abs(u) < 54 ? v(2, u) : l.pow(2, u))), b = !0, e)
                    })(i, e)
                }

                if (a.prototype = O, a.ROUND_UP = 0, a.ROUND_DOWN = 1, a.ROUND_CEIL = 2, a.ROUND_FLOOR = 3, a.ROUND_HALF_UP = 4, a.ROUND_HALF_DOWN = 5, a.ROUND_HALF_EVEN = 6, a.ROUND_HALF_CEIL = 7, a.ROUND_HALF_FLOOR = 8, a.EUCLID = 9, a.config = a.set = fe, a.clone = e, a.isDecimal = ge, a.abs = K, a.acos = ee, a.acosh = te, a.add = re, a.asin = ne, a.asinh = ie, a.atan = ae, a.atanh = oe, a.atan2 = se, a.cbrt = ue, a.ceil = ce, a.cos = le, a.cosh = pe, a.div = me, a.exp = he, a.floor = de, a.hypot = ye, a.ln = ve, a.log = be, a.log10 = we, a.log2 = xe, a.max = Ne, a.min = Oe, a.mod = Me, a.mul = je, a.pow = Ee, a.random = Se, a.round = Ae, a.sign = Ce, a.sin = Te, a.sinh = _e, a.sqrt = qe, a.sub = Ie, a.tan = ke, a.tanh = Be, a.trunc = ze, void 0 === t && (t = {}), t && !0 !== t.defaults) for (i = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < i.length;) t.hasOwnProperty(n = i[r++]) || (t[n] = this[n]);
                return a.config(t), a
            }(u)).default = l.Decimal = l, n = new l(n), i = new l(i), void 0 === (Pe = function () {
                return l
            }.call(De, Re, De, t)) || (t.exports = Pe)
        }()
    }, function (e, t, r) {
        "use strict";

        function f(e, t) {
            return l({}, e, t)
        }

        var l = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }, p = {
            "{": "\\{",
            "}": "\\}",
            "\\": "\\textbackslash{}",
            "#": "\\#",
            $: "\\$",
            "%": "\\%",
            "&": "\\&",
            "^": "\\textasciicircum{}",
            _: "\\_",
            "~": "\\textasciitilde{}"
        }, m = {"–": "\\--", "—": "\\---", " ": "~", "\t": "\\qquad{}", "\r\n": "\\newline{}", "\n": "\\newline{}"};
        e.exports = function (e) {
            for (var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, r = t.preserveFormatting, n = void 0 !== r && r, i = t.escapeMapFn, a = void 0 === i ? f : i, o = String(e), s = "", u = a(l({}, p), n ? l({}, m) : {}), c = Object.keys(u); o;) !function () {
                var r = !1;
                c.forEach(function (e, t) {
                    r || o.length >= e.length && o.slice(0, e.length) === e && (s += u[c[t]], o = o.slice(e.length, o.length), r = !0)
                }), r || (s += o.slice(0, 1), o = o.slice(1, o.length))
            }();
            return s
        }
    }, function (e, t) {
        function r() {
        }

        r.prototype = {
            on: function (e, t, r) {
                var n = this.e || (this.e = {});
                return (n[e] || (n[e] = [])).push({fn: t, ctx: r}), this
            }, once: function (e, t, r) {
                var n = this;

                function i() {
                    n.off(e, i), t.apply(r, arguments)
                }

                return i._ = t, this.on(e, i, r)
            }, emit: function (e) {
                for (var t = [].slice.call(arguments, 1), r = ((this.e || (this.e = {}))[e] || []).slice(), n = 0, i = r.length; n < i; n++) r[n].fn.apply(r[n].ctx, t);
                return this
            }, off: function (e, t) {
                var r = this.e || (this.e = {}), n = r[e], i = [];
                if (n && t) for (var a = 0, o = n.length; a < o; a++) n[a].fn !== t && n[a].fn._ !== t && i.push(n[a]);
                return i.length ? r[e] = i : delete r[e], this
            }
        }, e.exports = r, e.exports.TinyEmitter = r
    }, function (e, t, r) {
        var n = r(20), i = (0, r(21).create)(n);
        e.exports = i
    }, function (e, t) {
        var r = function () {
            return this
        }();
        try {
            r = r || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (r = window)
        }
        e.exports = r
    }, function (e, t, r) {
        "use strict";
        r.r(t), r.d(t, "createTyped", function () {
            return u
        }), r.d(t, "createResultSet", function () {
            return m
        }), r.d(t, "createBigNumberClass", function () {
            return g
        }), r.d(t, "createComplexClass", function () {
            return N
        }), r.d(t, "createFractionClass", function () {
            return S
        }), r.d(t, "createRangeClass", function () {
            return C
        }), r.d(t, "createMatrixClass", function () {
            return _
        }), r.d(t, "createDenseMatrixClass", function () {
            return k
        }), r.d(t, "createClone", function () {
            return D
        }), r.d(t, "createIsInteger", function () {
            return Z
        }), r.d(t, "createIsNegative", function () {
            return te
        }), r.d(t, "createIsNumeric", function () {
            return se
        }), r.d(t, "createHasNumericValue", function () {
            return fe
        }), r.d(t, "createIsPositive", function () {
            return me
        }), r.d(t, "createIsZero", function () {
            return de
        }), r.d(t, "createIsNaN", function () {
            return ge
        }), r.d(t, "createTypeOf", function () {
            return be
        }), r.d(t, "createEqualScalar", function () {
            return Oe
        }), r.d(t, "createSparseMatrixClass", function () {
            return je
        }), r.d(t, "createNumber", function () {
            return Se
        }), r.d(t, "createString", function () {
            return Ce
        }), r.d(t, "createBoolean", function () {
            return qe
        }), r.d(t, "createBignumber", function () {
            return ke
        }), r.d(t, "createComplex", function () {
            return ze
        }), r.d(t, "createFraction", function () {
            return Re
        }), r.d(t, "createMatrix", function () {
            return Ue
        }), r.d(t, "createSplitUnit", function () {
            return He
        }), r.d(t, "createUnaryMinus", function () {
            return yt
        }), r.d(t, "createUnaryPlus", function () {
            return bt
        }), r.d(t, "createAbs", function () {
            return wt
        }), r.d(t, "createApply", function () {
            return Ot
        }), r.d(t, "createAddScalar", function () {
            return St
        }), r.d(t, "createCbrt", function () {
            return Ct
        }), r.d(t, "createCeil", function () {
            return _t
        }), r.d(t, "createCube", function () {
            return It
        }), r.d(t, "createExp", function () {
            return Bt
        }), r.d(t, "createExpm1", function () {
            return Dt
        }), r.d(t, "createFix", function () {
            return Pt
        }), r.d(t, "createFloor", function () {
            return Ft
        }), r.d(t, "createGcd", function () {
            return Kt
        }), r.d(t, "createLcm", function () {
            return sr
        }), r.d(t, "createLog10", function () {
            return cr
        }), r.d(t, "createLog2", function () {
            return lr
        }), r.d(t, "createMod", function () {
            return br
        }), r.d(t, "createMultiplyScalar", function () {
            return wr
        }), r.d(t, "createMultiply", function () {
            return Mr
        }), r.d(t, "createNthRoot", function () {
            return Sr
        }), r.d(t, "createSign", function () {
            return Cr
        }), r.d(t, "createSqrt", function () {
            return _r
        }), r.d(t, "createSquare", function () {
            return Ir
        }), r.d(t, "createSubtract", function () {
            return zr
        }), r.d(t, "createXgcd", function () {
            return Pr
        }), r.d(t, "createDotMultiply", function () {
            return $r
        }), r.d(t, "createBitAnd", function () {
            return cn
        }), r.d(t, "createBitNot", function () {
            return ln
        }), r.d(t, "createBitOr", function () {
            return mn
        }), r.d(t, "createBitXor", function () {
            return gn
        }), r.d(t, "createArg", function () {
            return bn
        }), r.d(t, "createConj", function () {
            return wn
        }), r.d(t, "createIm", function () {
            return On
        }), r.d(t, "createRe", function () {
            return jn
        }), r.d(t, "createNot", function () {
            return qn
        }), r.d(t, "createOr", function () {
            return kn
        }), r.d(t, "createXor", function () {
            return zn
        }), r.d(t, "createConcat", function () {
            return Rn
        }), r.d(t, "createColumn", function () {
            return Un
        }), r.d(t, "createCross", function () {
            return Ln
        }), r.d(t, "createDiag", function () {
            return $n
        }), r.d(t, "createFilter", function () {
            return Wn
        }), r.d(t, "createFlatten", function () {
            return Kn
        }), r.d(t, "createForEach", function () {
            return ri
        }), r.d(t, "createGetMatrixDataType", function () {
            return oi
        }), r.d(t, "createIdentity", function () {
            return ci
        }), r.d(t, "createKron", function () {
            return li
        }), r.d(t, "createMap", function () {
            return mi
        }), r.d(t, "createOnes", function () {
            return yi
        }), r.d(t, "createRange", function () {
            return wi
        }), r.d(t, "createReshape", function () {
            return Mi
        }), r.d(t, "createResize", function () {
            return Si
        }), r.d(t, "createRow", function () {
            return Ci
        }), r.d(t, "createSize", function () {
            return _i
        }), r.d(t, "createSqueeze", function () {
            return ki
        }), r.d(t, "createSubset", function () {
            return $i
        }), r.d(t, "createTranspose", function () {
            return Yi
        }), r.d(t, "createCtranspose", function () {
            return Ki
        }), r.d(t, "createZeros", function () {
            return ta
        }), r.d(t, "createErf", function () {
            return na
        }), r.d(t, "createMode", function () {
            return fa
        }), r.d(t, "createProd", function () {
            return ma
        }), r.d(t, "createFormat", function () {
            return da
        }), r.d(t, "createPrint", function () {
            return ga
        }), r.d(t, "createTo", function () {
            return xa
        }), r.d(t, "createIsPrime", function () {
            return Oa
        }), r.d(t, "createNumeric", function () {
            return ja
        }), r.d(t, "createDivideScalar", function () {
            return Aa
        }), r.d(t, "createPow", function () {
            return Ta
        }), r.d(t, "createRound", function () {
            return za
        }), r.d(t, "createLog", function () {
            return Pa
        }), r.d(t, "createLog1p", function () {
            return Fa
        }), r.d(t, "createNthRoots", function () {
            return $a
        }),r.d(t, "createDotPow", function () {
            return Za
        }),r.d(t, "createDotDivide", function () {
            return Wa
        }),r.d(t, "createLsolve", function () {
            return Qa
        }),r.d(t, "createUsolve", function () {
            return eo
        }),r.d(t, "createLeftShift", function () {
            return ao
        }),r.d(t, "createRightArithShift", function () {
            return uo
        }),r.d(t, "createRightLogShift", function () {
            return lo
        }),r.d(t, "createAnd", function () {
            return mo
        }),r.d(t, "createCompare", function () {
            return go
        }),r.d(t, "createCompareNatural", function () {
            return No
        }),r.d(t, "createCompareText", function () {
            return jo
        }),r.d(t, "createEqual", function () {
            return Ao
        }),r.d(t, "createEqualText", function () {
            return _o
        }),r.d(t, "createSmaller", function () {
            return ko
        }),r.d(t, "createSmallerEq", function () {
            return Do
        }),r.d(t, "createLarger", function () {
            return Uo
        }),r.d(t, "createLargerEq", function () {
            return Ho
        }),r.d(t, "createDeepEqual", function () {
            return Zo
        }),r.d(t, "createUnequal", function () {
            return Wo
        }),r.d(t, "createPartitionSelect", function () {
            return Qo
        }),r.d(t, "createSort", function () {
            return es
        }),r.d(t, "createMax", function () {
            return rs
        }),r.d(t, "createMin", function () {
            return is
        }),r.d(t, "createImmutableDenseMatrixClass", function () {
            return os
        }),r.d(t, "createIndexClass", function () {
            return us
        }),r.d(t, "createFibonacciHeapClass", function () {
            return fs
        }),r.d(t, "createSpaClass", function () {
            return ps
        }),r.d(t, "createUnitClass", function () {
            return Os
        }),r.d(t, "createUnitFunction", function () {
            return js
        }),r.d(t, "createSparse", function () {
            return Ss
        }),r.d(t, "createCreateUnit", function () {
            return Ts
        }),r.d(t, "createAcos", function () {
            return qs
        }),r.d(t, "createAcosh", function () {
            return Xs
        }),r.d(t, "createAcot", function () {
            return Ks
        }),r.d(t, "createAcoth", function () {
            return tu
        }),r.d(t, "createAcsc", function () {
            return nu
        }),r.d(t, "createAcsch", function () {
            return au
        }),r.d(t, "createAsec", function () {
            return su
        }),r.d(t, "createAsech", function () {
            return cu
        }),r.d(t, "createAsin", function () {
            return lu
        }),r.d(t, "createAsinh", function () {
            return mu
        }),r.d(t, "createAtan", function () {
            return du
        }),r.d(t, "createAtan2", function () {
            return gu
        }),r.d(t, "createAtanh", function () {
            return bu
        }),r.d(t, "createCos", function () {
            return wu
        }),r.d(t, "createCosh", function () {
            return Ou
        }),r.d(t, "createCot", function () {
            return ju
        }),r.d(t, "createCoth", function () {
            return Su
        }),r.d(t, "createCsc", function () {
            return Cu
        }),r.d(t, "createCsch", function () {
            return _u
        }),r.d(t, "createSec", function () {
            return Iu
        }),r.d(t, "createSech", function () {
            return Bu
        }),r.d(t, "createSin", function () {
            return Du
        }),r.d(t, "createSinh", function () {
            return Pu
        }),r.d(t, "createTan", function () {
            return Fu
        }),r.d(t, "createTanh", function () {
            return Hu
        }),r.d(t, "createSetCartesian", function () {
            return Zu
        }),r.d(t, "createSetDifference", function () {
            return Wu
        }),r.d(t, "createSetDistinct", function () {
            return Qu
        }),r.d(t, "createSetIntersect", function () {
            return tc
        }),r.d(t, "createSetIsSubset", function () {
            return ic
        }),r.d(t, "createSetMultiplicity", function () {
            return sc
        }),r.d(t, "createSetPowerset", function () {
            return fc
        }),r.d(t, "createSetSize", function () {
            return mc
        }),r.d(t, "createSetSymDifference", function () {
            return yc
        }),r.d(t, "createSetUnion", function () {
            return bc
        }),r.d(t, "createAdd", function () {
            return wc
        }),r.d(t, "createHypot", function () {
            return Oc
        }),r.d(t, "createNorm", function () {
            return jc
        }),r.d(t, "createDot", function () {
            return Sc
        }),r.d(t, "createTrace", function () {
            return Cc
        }),r.d(t, "createIndex", function () {
            return _c
        }),r.d(t, "createNode", function () {
            return Bc
        }),r.d(t, "createAccessorNode", function () {
            return Uc
        }),r.d(t, "createArrayNode", function () {
            return Lc
        }),r.d(t, "createAssignmentNode", function () {
            return Wc
        }),r.d(t, "createBlockNode", function () {
            return Xc
        }),r.d(t, "createConditionalNode", function () {
            return Kc
        }),r.d(t, "createConstantNode", function () {
            return ff
        }),r.d(t, "createFunctionAssignmentNode", function () {
            return pf
        }),r.d(t, "createIndexNode", function () {
            return yf
        }),r.d(t, "createObjectNode", function () {
            return bf
        }),r.d(t, "createOperatorNode", function () {
            return wf
        }),r.d(t, "createParenthesisNode", function () {
            return Of
        }),r.d(t, "createRangeNode", function () {
            return jf
        }),r.d(t, "createRelationalNode", function () {
            return Sf
        }),r.d(t, "createSymbolNode", function () {
            return Cf
        }),r.d(t, "createFunctionNode", function () {
            return If
        }),r.d(t, "createParse", function () {
            return zf
        }),r.d(t, "createCompile", function () {
            return Pf
        }),r.d(t, "createEvaluate", function () {
            return Lf
        }),r.d(t, "createParserClass", function () {
            return $f
        }),r.d(t, "createParser", function () {
            return Zf
        }),r.d(t, "createLup", function () {
            return Jf
        }),r.d(t, "createQr", function () {
            return Xf
        }),r.d(t, "createSlu", function () {
            return hl
        }),r.d(t, "createLusolve", function () {
            return vl
        }),r.d(t, "createHelpClass", function () {
            return xl
        }),r.d(t, "createChainClass", function () {
            return Nl
        }),r.d(t, "createHelp", function () {
            return Sl
        }),r.d(t, "createChain", function () {
            return Cl
        }),r.d(t, "createDet", function () {
            return _l
        }),r.d(t, "createInv", function () {
            return Il
        }),r.d(t, "createEigs", function () {
            return Bl
        }),r.d(t, "createExpm", function () {
            return Dl
        }),r.d(t, "createSqrtm", function () {
            return Pl
        }),r.d(t, "createDivide", function () {
            return Fl
        }),r.d(t, "createDistance", function () {
            return $l
        }),r.d(t, "createIntersect", function () {
            return Zl
        }),r.d(t, "createSum", function () {
            return Jl
        }),r.d(t, "createMean", function () {
            return Yl
        }),r.d(t, "createMedian", function () {
            return Ql
        }),r.d(t, "createMad", function () {
            return ep
        }),r.d(t, "createVariance", function () {
            return ip
        }),r.d(t, "createQuantileSeq", function () {
            return op
        }),r.d(t, "createStd", function () {
            return up
        }),r.d(t, "createCombinations", function () {
            return mp
        }),r.d(t, "createCombinationsWithRep", function () {
            return gp
        }),r.d(t, "createGamma", function () {
            return Op
        }),r.d(t, "createFactorial", function () {
            return Ep
        }),r.d(t, "createKldivergence", function () {
            return Cp
        }),r.d(t, "createMultinomial", function () {
            return qp
        }),r.d(t, "createPermutations", function () {
            return Bp
        }),r.d(t, "createPickRandom", function () {
            return Lp
        }),r.d(t, "createRandom", function () {
            return Zp
        }),r.d(t, "createRandomInt", function () {
            return Wp
        }),r.d(t, "createStirlingS2", function () {
            return Qp
        }),r.d(t, "createBellNumbers", function () {
            return tm
        }),r.d(t, "createCatalan", function () {
            return im
        }),r.d(t, "createComposition", function () {
            return sm
        }),r.d(t, "createSimplify", function () {
            return vm
        }),r.d(t, "createDerivative", function () {
            return xm
        }),r.d(t, "createRationalize", function () {
            return Om
        }),r.d(t, "createReviver", function () {
            return jm
        }),r.d(t, "createReplacer", function () {
            return Sm
        }),r.d(t, "createE", function () {
            return Rm
        }),r.d(t, "createUppercaseE", function () {
            return Jm
        }),r.d(t, "createFalse", function () {
            return qm
        }),r.d(t, "createI", function () {
            return Zm
        }),r.d(t, "createInfinity", function () {
            return km
        }),r.d(t, "createLN10", function () {
            return Fm
        }),r.d(t, "createLN2", function () {
            return Um
        }),r.d(t, "createLOG10E", function () {
            return Hm
        }),r.d(t, "createLOG2E", function () {
            return Lm
        }),r.d(t, "createNaN", function () {
            return Bm
        }),r.d(t, "createNull", function () {
            return Im
        }),r.d(t, "createPhi", function () {
            return Pm
        }),r.d(t, "createPi", function () {
            return zm
        }),r.d(t, "createUppercasePi", function () {
            return Vm
        }),r.d(t, "createSQRT1_2", function () {
            return $m
        }),r.d(t, "createSQRT2", function () {
            return Gm
        }),r.d(t, "createTau", function () {
            return Dm
        }),r.d(t, "createTrue", function () {
            return _m
        }),r.d(t, "createVersion", function () {
            return Wm
        }),r.d(t, "createAtomicMass", function () {
            return Eh
        }),r.d(t, "createAvogadro", function () {
            return Sh
        }),r.d(t, "createBohrMagneton", function () {
            return oh
        }),r.d(t, "createBohrRadius", function () {
            return ph
        }),r.d(t, "createBoltzmann", function () {
            return Ah
        }),r.d(t, "createClassicalElectronRadius", function () {
            return mh
        }),r.d(t, "createConductanceQuantum", function () {
            return sh
        }),r.d(t, "createCoulomb", function () {
            return ih
        }),r.d(t, "createDeuteronMass", function () {
            return bh
        }),r.d(t, "createEfimovFactor", function () {
            return jh
        }),r.d(t, "createElectricConstant", function () {
            return rh
        }),r.d(t, "createElectronMass", function () {
            return hh
        }),r.d(t, "createElementaryCharge", function () {
            return ah
        }),r.d(t, "createFaraday", function () {
            return Ch
        }),r.d(t, "createFermiCoupling", function () {
            return dh
        }),r.d(t, "createFineStructure", function () {
            return yh
        }),r.d(t, "createFirstRadiation", function () {
            return Th
        }),r.d(t, "createGasConstant", function () {
            return qh
        }),r.d(t, "createGravitationConstant", function () {
            return Qm
        }),r.d(t, "createGravity", function () {
            return Fh
        }),r.d(t, "createHartreeEnergy", function () {
            return gh
        }),r.d(t, "createInverseConductanceQuantum", function () {
            return uh
        }),r.d(t, "createKlitzing", function () {
            return lh
        }),r.d(t, "createLoschmidt", function () {
            return _h
        }),r.d(t, "createMagneticConstant", function () {
            return th
        }),r.d(t, "createMagneticFluxQuantum", function () {
            return ch
        }),r.d(t, "createMolarMass", function () {
            return Ph
        }),r.d(t, "createMolarMassC12", function () {
            return Uh
        }),r.d(t, "createMolarPlanckConstant", function () {
            return Ih
        }),r.d(t, "createMolarVolume", function () {
            return kh
        }),r.d(t, "createNeutronMass", function () {
            return xh
        }),r.d(t, "createNuclearMagneton", function () {
            return fh
        }),r.d(t, "createPlanckCharge", function () {
            return Gh
        }),r.d(t, "createPlanckConstant", function () {
            return Km
        }),r.d(t, "createPlanckLength", function () {
            return Lh
        }),r.d(t, "createPlanckMass", function () {
            return Hh
        }),r.d(t, "createPlanckTemperature", function () {
            return Zh
        }),r.d(t, "createPlanckTime", function () {
            return $h
        }),r.d(t, "createProtonMass", function () {
            return vh
        }),r.d(t, "createQuantumOfCirculation", function () {
            return wh
        }),r.d(t, "createReducedPlanckConstant", function () {
            return eh
        }),r.d(t, "createRydberg", function () {
            return Nh
        }),r.d(t, "createSackurTetrode", function () {
            return Bh
        }),r.d(t, "createSecondRadiation", function () {
            return zh
        }),r.d(t, "createSpeedOfLight", function () {
            return Xm
        }),r.d(t, "createStefanBoltzmann", function () {
            return Dh
        }),r.d(t, "createThomsonCrossSection", function () {
            return Oh
        }),r.d(t, "createVacuumImpedance", function () {
            return nh
        }),r.d(t, "createWeakMixingAngle", function () {
            return Mh
        }),r.d(t, "createWienDisplacement", function () {
            return Rh
        }),r.d(t, "createApplyTransform", function () {
            return Yh
        }),r.d(t, "createColumnTransform", function () {
            return Qh
        }),r.d(t, "createFilterTransform", function () {
            return td
        }),r.d(t, "createForEachTransform", function () {
            return id
        }),r.d(t, "createIndexTransform", function () {
            return od
        }),r.d(t, "createMapTransform", function () {
            return ud
        }),r.d(t, "createMaxTransform", function () {
            return ld
        }),r.d(t, "createMeanTransform", function () {
            return md
        }),r.d(t, "createMinTransform", function () {
            return dd
        }),r.d(t, "createRangeTransform", function () {
            return gd
        }),r.d(t, "createRowTransform", function () {
            return bd
        }),r.d(t, "createSubsetTransform", function () {
            return wd
        }),r.d(t, "createConcatTransform", function () {
            return Od
        }),r.d(t, "createStdTransform", function () {
            return jd
        }),r.d(t, "createSumTransform", function () {
            return Sd
        }),r.d(t, "createVarianceTransform", function () {
            return Td
        });
        var ie = r(1), n = r(13), i = r.n(n), E = r(4), s = r(0), o = function () {
            return o = i.a.create, i.a
        }, a = ["?BigNumber", "?Complex", "?DenseMatrix", "?Fraction"], u = Object(s.a)("typed", a, function (e) {
            var r = e.BigNumber, n = e.Complex, t = e.DenseMatrix, i = e.Fraction, a = o();
            return a.types = [{name: "number", test: ie.y}, {name: "Complex", test: ie.j}, {
                name: "BigNumber",
                test: ie.e
            }, {name: "Fraction", test: ie.o}, {name: "Unit", test: ie.L}, {name: "string", test: ie.I}, {
                name: "Chain",
                test: ie.h
            }, {name: "Array", test: ie.b}, {name: "Matrix", test: ie.v}, {
                name: "DenseMatrix",
                test: ie.n
            }, {name: "SparseMatrix", test: ie.H}, {name: "Range", test: ie.D}, {
                name: "Index",
                test: ie.t
            }, {name: "boolean", test: ie.g}, {name: "ResultSet", test: ie.G}, {
                name: "Help",
                test: ie.s
            }, {name: "function", test: ie.p}, {name: "Date", test: ie.m}, {name: "RegExp", test: ie.F}, {
                name: "null",
                test: ie.x
            }, {name: "undefined", test: ie.K}, {name: "AccessorNode", test: ie.a}, {
                name: "ArrayNode",
                test: ie.c
            }, {name: "AssignmentNode", test: ie.d}, {name: "BlockNode", test: ie.f}, {
                name: "ConditionalNode",
                test: ie.k
            }, {name: "ConstantNode", test: ie.l}, {name: "FunctionNode", test: ie.r}, {
                name: "FunctionAssignmentNode",
                test: ie.q
            }, {name: "IndexNode", test: ie.u}, {name: "Node", test: ie.w}, {
                name: "ObjectNode",
                test: ie.A
            }, {name: "OperatorNode", test: ie.B}, {name: "ParenthesisNode", test: ie.C}, {
                name: "RangeNode",
                test: ie.E
            }, {name: "SymbolNode", test: ie.J}, {name: "Object", test: ie.z}], a.conversions = [{
                from: "number",
                to: "BigNumber",
                convert: function (e) {
                    if (r || c(e), 15 < Object(E.f)(e)) throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: " + e + "). Use function bignumber(x) to convert to BigNumber.");
                    return new r(e)
                }
            }, {
                from: "number", to: "Complex", convert: function (e) {
                    return n || f(e), new n(e, 0)
                }
            }, {
                from: "number", to: "string", convert: function (e) {
                    return e + ""
                }
            }, {
                from: "BigNumber", to: "Complex", convert: function (e) {
                    return n || f(e), new n(e.toNumber(), 0)
                }
            }, {
                from: "Fraction", to: "BigNumber", convert: function () {
                    throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.")
                }
            }, {
                from: "Fraction", to: "Complex", convert: function (e) {
                    return n || f(e), new n(e.valueOf(), 0)
                }
            }, {
                from: "number", to: "Fraction", convert: function (e) {
                    i || l(e);
                    var t = new i(e);
                    if (t.valueOf() !== e) throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: " + e + "). Use function fraction(x) to convert to Fraction.");
                    return t
                }
            }, {
                from: "string", to: "number", convert: function (e) {
                    var t = Number(e);
                    if (isNaN(t)) throw new Error('Cannot convert "' + e + '" to a number');
                    return t
                }
            }, {
                from: "string", to: "BigNumber", convert: function (t) {
                    r || c(t);
                    try {
                        return new r(t)
                    } catch (e) {
                        throw new Error('Cannot convert "' + t + '" to BigNumber')
                    }
                }
            }, {
                from: "string", to: "Fraction", convert: function (t) {
                    i || l(t);
                    try {
                        return new i(t)
                    } catch (e) {
                        throw new Error('Cannot convert "' + t + '" to Fraction')
                    }
                }
            }, {
                from: "string", to: "Complex", convert: function (t) {
                    n || f(t);
                    try {
                        return new n(t)
                    } catch (e) {
                        throw new Error('Cannot convert "' + t + '" to Complex')
                    }
                }
            }, {
                from: "boolean", to: "number", convert: function (e) {
                    return +e
                }
            }, {
                from: "boolean", to: "BigNumber", convert: function (e) {
                    return r || c(e), new r(+e)
                }
            }, {
                from: "boolean", to: "Fraction", convert: function (e) {
                    return i || l(e), new i(+e)
                }
            }, {
                from: "boolean", to: "string", convert: function (e) {
                    return String(e)
                }
            }, {
                from: "Array", to: "Matrix", convert: function (e) {
                    return t || function () {
                        throw new Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided")
                    }(), new t(e)
                }
            }, {
                from: "Matrix", to: "Array", convert: function (e) {
                    return e.valueOf()
                }
            }], a
        });

        function c(e) {
            throw new Error("Cannot convert value ".concat(e, " into a BigNumber: no class 'BigNumber' provided"))
        }

        function f(e) {
            throw new Error("Cannot convert value ".concat(e, " into a Complex number: no class 'Complex' provided"))
        }

        function l(e) {
            throw new Error("Cannot convert value ".concat(e, " into a Fraction, no class 'Fraction' provided."))
        }

        var p = [], m = Object(s.a)("ResultSet", p, function () {
            function t(e) {
                if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
                this.entries = e || []
            }

            return t.prototype.type = "ResultSet", t.prototype.isResultSet = !0, t.prototype.valueOf = function () {
                return this.entries
            }, t.prototype.toString = function () {
                return "[" + this.entries.join(", ") + "]"
            }, t.prototype.toJSON = function () {
                return {mathjs: "ResultSet", entries: this.entries}
            }, t.fromJSON = function (e) {
                return new t(e.entries)
            }, t
        }, {isClass: !0}), h = r(15), d = r.n(h), y = ["?on", "config"], g = Object(s.a)("BigNumber", y, function (e) {
            var t = e.on, r = e.config, n = d.a.clone({precision: r.precision});
            return n.prototype.type = "BigNumber", n.prototype.isBigNumber = !0, n.prototype.toJSON = function () {
                return {mathjs: "BigNumber", value: this.toString()}
            }, n.fromJSON = function (e) {
                return new n(e.value)
            }, t && t("config", function (e, t) {
                e.precision !== t.precision && n.config({precision: e.precision})
            }), n
        }, {isClass: !0}), v = r(8), b = r.n(v);

        function x(e) {
            return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        var w = [], N = Object(s.a)("Complex", w, function () {
                return b.a.prototype.type = "Complex", b.a.prototype.isComplex = !0, b.a.prototype.toJSON = function () {
                    return {mathjs: "Complex", re: this.re, im: this.im}
                }, b.a.prototype.toPolar = function () {
                    return {r: this.abs(), phi: this.arg()}
                }, b.a.prototype.format = function (e) {
                    var t, r = this.im, n = this.re, i = Object(E.h)(this.re, e), a = Object(E.h)(this.im, e),
                        o = Object(ie.y)(e) ? e : e ? e.precision : null;
                    return null !== o && (t = Math.pow(10, -o), Math.abs(n / r) < t && (n = 0), Math.abs(r / n) < t && (r = 0)), 0 === r ? i : 0 === n ? 1 === r ? "i" : -1 === r ? "-i" : a + "i" : r < 0 ? -1 === r ? i + " - i" : i + " - " + a.substring(1) + "i" : 1 === r ? i + " + i" : i + " + " + a + "i"
                }, b.a.fromPolar = function (e) {
                    switch (arguments.length) {
                        case 1:
                            var t = e;
                            if ("object" === x(t)) return b()(t);
                            throw new TypeError("Input has to be an object with r and phi keys.");
                        case 2:
                            var r = e, n = arguments[1];
                            if (Object(ie.y)(r)) {
                                if (Object(ie.L)(n) && n.hasBase("ANGLE") && (n = n.toNumber("rad")), Object(ie.y)(n)) return new b.a({
                                    r: r,
                                    phi: n
                                });
                                throw new TypeError("Phi is not a number nor an angle unit.")
                            }
                            throw new TypeError("Radius r is not a number.");
                        default:
                            throw new SyntaxError("Wrong number of arguments in function fromPolar")
                    }
                }, b.a.prototype.valueOf = b.a.prototype.toString, b.a.fromJSON = function (e) {
                    return new b.a(e)
                }, b.a.compare = function (e, t) {
                    return e.re > t.re ? 1 : e.re < t.re ? -1 : e.im > t.im ? 1 : e.im < t.im ? -1 : 0
                }, b.a
            }, {isClass: !0}), O = r(10), M = r.n(O), j = [], S = Object(s.a)("Fraction", j, function () {
                return M.a.prototype.type = "Fraction", M.a.prototype.isFraction = !0, M.a.prototype.toJSON = function () {
                    return {mathjs: "Fraction", n: this.s * this.n, d: this.d}
                }, M.a.fromJSON = function (e) {
                    return new M.a(e)
                }, M.a
            }, {isClass: !0}), A = [], C = Object(s.a)("Range", A, function () {
                function o(e, t, r) {
                    if (!(this instanceof o)) throw new SyntaxError("Constructor must be called with the new operator");
                    var n = null != e, i = null != t, a = null != r;
                    if (n) if (Object(ie.e)(e)) e = e.toNumber(); else if ("number" != typeof e) throw new TypeError("Parameter start must be a number");
                    if (i) if (Object(ie.e)(t)) t = t.toNumber(); else if ("number" != typeof t) throw new TypeError("Parameter end must be a number");
                    if (a) if (Object(ie.e)(r)) r = r.toNumber(); else if ("number" != typeof r) throw new TypeError("Parameter step must be a number");
                    this.start = n ? parseFloat(e) : 0, this.end = i ? parseFloat(t) : 0, this.step = a ? parseFloat(r) : 1
                }

                return o.prototype.type = "Range", o.prototype.isRange = !0, o.parse = function (e) {
                    if ("string" != typeof e) return null;
                    var t = e.split(":").map(function (e) {
                        return parseFloat(e)
                    });
                    if (t.some(function (e) {
                        return isNaN(e)
                    })) return null;
                    switch (t.length) {
                        case 2:
                            return new o(t[0], t[1]);
                        case 3:
                            return new o(t[0], t[2], t[1]);
                        default:
                            return null
                    }
                }, o.prototype.clone = function () {
                    return new o(this.start, this.end, this.step)
                }, o.prototype.size = function () {
                    var e = 0, t = this.start, r = this.step, n = this.end - t;
                    return Object(E.n)(r) === Object(E.n)(n) ? e = Math.ceil(n / r) : 0 == n && (e = 0), isNaN(e) && (e = 0), [e]
                }, o.prototype.min = function () {
                    var e = this.size()[0];
                    return 0 < e ? 0 < this.step ? this.start : this.start + (e - 1) * this.step : void 0
                }, o.prototype.max = function () {
                    var e = this.size()[0];
                    return 0 < e ? 0 < this.step ? this.start + (e - 1) * this.step : this.start : void 0
                }, o.prototype.forEach = function (e) {
                    var t = this.start, r = this.step, n = this.end, i = 0;
                    if (0 < r) for (; t < n;) e(t, [i], this), t += r, i++; else if (r < 0) for (; n < t;) e(t, [i], this), t += r, i++
                }, o.prototype.map = function (n) {
                    var i = [];
                    return this.forEach(function (e, t, r) {
                        i[t[0]] = n(e, t, r)
                    }), i
                }, o.prototype.toArray = function () {
                    var r = [];
                    return this.forEach(function (e, t) {
                        r[t[0]] = e
                    }), r
                }, o.prototype.valueOf = function () {
                    return this.toArray()
                }, o.prototype.format = function (e) {
                    var t = Object(E.h)(this.start, e);
                    return 1 !== this.step && (t += ":" + Object(E.h)(this.step, e)), t += ":" + Object(E.h)(this.end, e)
                }, o.prototype.toString = function () {
                    return this.format()
                }, o.prototype.toJSON = function () {
                    return {mathjs: "Range", start: this.start, end: this.end, step: this.step}
                }, o.fromJSON = function (e) {
                    return new o(e.start, e.end, e.step)
                }, o
            }, {isClass: !0}), T = [], _ = Object(s.a)("Matrix", T, function () {
                function e() {
                    if (!(this instanceof e)) throw new SyntaxError("Constructor must be called with the new operator")
                }

                return e.prototype.type = "Matrix", e.prototype.isMatrix = !0, e.prototype.storage = function () {
                    throw new Error("Cannot invoke storage on a Matrix interface")
                }, e.prototype.datatype = function () {
                    throw new Error("Cannot invoke datatype on a Matrix interface")
                }, e.prototype.create = function (e, t) {
                    throw new Error("Cannot invoke create on a Matrix interface")
                }, e.prototype.subset = function (e, t, r) {
                    throw new Error("Cannot invoke subset on a Matrix interface")
                }, e.prototype.get = function (e) {
                    throw new Error("Cannot invoke get on a Matrix interface")
                }, e.prototype.set = function (e, t, r) {
                    throw new Error("Cannot invoke set on a Matrix interface")
                }, e.prototype.resize = function (e, t) {
                    throw new Error("Cannot invoke resize on a Matrix interface")
                }, e.prototype.reshape = function (e, t) {
                    throw new Error("Cannot invoke reshape on a Matrix interface")
                }, e.prototype.clone = function () {
                    throw new Error("Cannot invoke clone on a Matrix interface")
                }, e.prototype.size = function () {
                    throw new Error("Cannot invoke size on a Matrix interface")
                }, e.prototype.map = function (e, t) {
                    throw new Error("Cannot invoke map on a Matrix interface")
                }, e.prototype.forEach = function (e) {
                    throw new Error("Cannot invoke forEach on a Matrix interface")
                }, e.prototype.toArray = function () {
                    throw new Error("Cannot invoke toArray on a Matrix interface")
                }, e.prototype.valueOf = function () {
                    throw new Error("Cannot invoke valueOf on a Matrix interface")
                }, e.prototype.format = function (e) {
                    throw new Error("Cannot invoke format on a Matrix interface")
                }, e.prototype.toString = function () {
                    throw new Error("Cannot invoke toString on a Matrix interface")
                }, e
            }, {isClass: !0}), q = r(2), V = r(5), ae = r(3), z = r(6), I = ["Matrix"],
            k = Object(s.a)("DenseMatrix", I, function (e) {
                var t = e.Matrix;

                function m(e, t) {
                    if (!(this instanceof m)) throw new SyntaxError("Constructor must be called with the new operator");
                    if (t && !Object(ie.I)(t)) throw new Error("Invalid datatype: " + t);
                    if (Object(ie.v)(e)) "DenseMatrix" === e.type ? (this._data = Object(ae.a)(e._data), this._size = Object(ae.a)(e._size)) : (this._data = e.toArray(), this._size = e.size()), this._datatype = t || e._datatype; else if (e && Object(ie.b)(e.data) && Object(ie.b)(e.size)) this._data = e.data, this._size = e.size, Object(q.p)(this._data, this._size), this._datatype = t || e.datatype; else if (Object(ie.b)(e)) this._data = function e(t) {
                        for (var r = 0, n = t.length; r < n; r++) {
                            var i = t[r];
                            Object(ie.b)(i) ? t[r] = e(i) : i && !0 === i.isMatrix && (t[r] = e(i.valueOf()))
                        }
                        return t
                    }(e), this._size = Object(q.a)(this._data), Object(q.p)(this._data, this._size), this._datatype = t; else {
                        if (e) throw new TypeError("Unsupported type of data (" + Object(ie.M)(e) + ")");
                        this._data = [], this._size = [0], this._datatype = t
                    }
                }

                function s(e, t, r) {
                    if (0 !== t.length) return e._size = t.slice(0), e._data = Object(q.m)(e._data, e._size, r), e;
                    for (var n = e._data; Object(ie.b)(n);) n = n[0];
                    return n
                }

                function l(e, t, r) {
                    for (var n = e._size.slice(0), i = !1; n.length < t.length;) n.push(0), i = !0;
                    for (var a = 0, o = t.length; a < o; a++) t[a] > n[a] && (n[a] = t[a], i = !0);
                    i && s(e, n, r)
                }

                return (m.prototype = new t).createDenseMatrix = function (e, t) {
                    return new m(e, t)
                }, m.prototype.type = "DenseMatrix", m.prototype.isDenseMatrix = !0, m.prototype.getDataType = function () {
                    return Object(q.h)(this._data, ie.M)
                }, m.prototype.storage = function () {
                    return "dense"
                }, m.prototype.datatype = function () {
                    return this._datatype
                }, m.prototype.create = function (e, t) {
                    return new m(e, t)
                }, m.prototype.subset = function (e, t, r) {
                    switch (arguments.length) {
                        case 1:
                            return function (e, t) {
                                if (!Object(ie.t)(t)) throw new TypeError("Invalid index");
                                {
                                    if (t.isScalar()) return e.get(t.min());
                                    var r = t.size();
                                    if (r.length !== e._size.length) throw new z.a(r.length, e._size.length);
                                    for (var n = t.min(), i = t.max(), a = 0, o = e._size.length; a < o; a++) Object(q.q)(n[a], e._size[a]), Object(q.q)(i[a], e._size[a]);
                                    return new m(function r(n, i, a, o) {
                                        var e = o === a - 1;
                                        var t = i.dimension(o);
                                        return e ? t.map(function (e) {
                                            return Object(q.q)(e, n.length), n[e]
                                        }).valueOf() : t.map(function (e) {
                                            Object(q.q)(e, n.length);
                                            var t = n[e];
                                            return r(t, i, a, o + 1)
                                        }).valueOf()
                                    }(e._data, t, r.length, 0), e._datatype)
                                }
                            }(this, e);
                        case 2:
                        case 3:
                            return function (e, t, r, n) {
                                if (!t || !0 !== t.isIndex) throw new TypeError("Invalid index");
                                var i, a = t.size(), o = t.isScalar();
                                Object(ie.v)(r) ? (i = r.size(), r = r.valueOf()) : i = Object(q.a)(r);
                                if (o) {
                                    if (0 !== i.length) throw new TypeError("Scalar expected");
                                    e.set(t.min(), r, n)
                                } else {
                                    if (a.length < e._size.length) throw new z.a(a.length, e._size.length, "<");
                                    if (i.length < a.length) {
                                        for (var s = 0, u = 0; 1 === a[s] && 1 === i[s];) s++;
                                        for (; 1 === a[s];) u++, s++;
                                        r = Object(q.o)(r, a.length, u, i)
                                    }
                                    if (!Object(ae.d)(a, i)) throw new z.a(a, i, ">");
                                    var c = t.max().map(function (e) {
                                        return e + 1
                                    });
                                    l(e, c, n);
                                    var f = a.length;
                                    !function r(n, i, a, o, s) {
                                        var e = s === o - 1;
                                        var t = i.dimension(s);
                                        e ? t.forEach(function (e, t) {
                                            Object(q.q)(e), n[e] = a[t[0]]
                                        }) : t.forEach(function (e, t) {
                                            Object(q.q)(e), r(n[e], i, a[t[0]], o, s + 1)
                                        })
                                    }(e._data, t, r, f, 0)
                                }
                                return e
                            }(this, e, t, r);
                        default:
                            throw new SyntaxError("Wrong number of arguments")
                    }
                }, m.prototype.get = function (e) {
                    if (!Object(ie.b)(e)) throw new TypeError("Array expected");
                    if (e.length !== this._size.length) throw new z.a(e.length, this._size.length);
                    for (var t = 0; t < e.length; t++) Object(q.q)(e[t], this._size[t]);
                    for (var r = this._data, n = 0, i = e.length; n < i; n++) {
                        var a = e[n];
                        Object(q.q)(a, r.length), r = r[a]
                    }
                    return r
                }, m.prototype.set = function (e, t, r) {
                    if (!Object(ie.b)(e)) throw new TypeError("Array expected");
                    if (e.length < this._size.length) throw new z.a(e.length, this._size.length, "<");
                    var n;
                    l(this, e.map(function (e) {
                        return e + 1
                    }), r);
                    for (var i = this._data, a = 0, o = e.length - 1; a < o; a++) n = e[a], Object(q.q)(n, i.length), i = i[n];
                    return n = e[e.length - 1], Object(q.q)(n, i.length), i[n] = t, this
                }, m.prototype.resize = function (e, t, r) {
                    if (!Object(ie.b)(e)) throw new TypeError("Array expected");
                    return s(r ? this.clone() : this, e, t)
                }, m.prototype.reshape = function (e, t) {
                    var r = t ? this.clone() : this;
                    return r._data = Object(q.l)(r._data, e), r._size = e.slice(0), r
                }, m.prototype.clone = function () {
                    return new m({
                        data: Object(ae.a)(this._data),
                        size: Object(ae.a)(this._size),
                        datatype: this._datatype
                    })
                }, m.prototype.size = function () {
                    return this._size.slice(0)
                }, m.prototype.map = function (t) {
                    var i = this, e = function r(e, n) {
                        return Object(ie.b)(e) ? e.map(function (e, t) {
                            return r(e, n.concat(t))
                        }) : t(e, n, i)
                    }(this._data, []);
                    return new m(e, void 0 !== this._datatype ? Object(q.h)(e, ie.M) : void 0)
                }, m.prototype.forEach = function (t) {
                    var i = this;
                    !function r(e, n) {
                        Object(ie.b)(e) ? e.forEach(function (e, t) {
                            r(e, n.concat(t))
                        }) : t(e, n, i)
                    }(this._data, [])
                }, m.prototype.toArray = function () {
                    return Object(ae.a)(this._data)
                }, m.prototype.valueOf = function () {
                    return this._data
                }, m.prototype.format = function (e) {
                    return Object(V.d)(this._data, e)
                }, m.prototype.toString = function () {
                    return Object(V.d)(this._data)
                }, m.prototype.toJSON = function () {
                    return {mathjs: "DenseMatrix", data: this._data, size: this._size, datatype: this._datatype}
                }, m.prototype.diagonal = function (e) {
                    if (e) {
                        if (Object(ie.e)(e) && (e = e.toNumber()), !Object(ie.y)(e) || !Object(E.i)(e)) throw new TypeError("The parameter k must be an integer number")
                    } else e = 0;
                    for (var t = 0 < e ? e : 0, r = e < 0 ? -e : 0, n = this._size[0], i = this._size[1], a = Math.min(n - r, i - t), o = [], s = 0; s < a; s++) o[s] = this._data[s + r][s + t];
                    return new m({data: o, size: [a], datatype: this._datatype})
                }, m.diagonal = function (e, t, r, n) {
                    if (!Object(ie.b)(e)) throw new TypeError("Array expected, size parameter");
                    if (2 !== e.length) throw new Error("Only two dimensions matrix are supported");
                    if (e = e.map(function (e) {
                        if (Object(ie.e)(e) && (e = e.toNumber()), !Object(ie.y)(e) || !Object(E.i)(e) || e < 1) throw new Error("Size values must be positive integers");
                        return e
                    }), r) {
                        if (Object(ie.e)(r) && (r = r.toNumber()), !Object(ie.y)(r) || !Object(E.i)(r)) throw new TypeError("The parameter k must be an integer number")
                    } else r = 0;
                    var i, a = 0 < r ? r : 0, o = r < 0 ? -r : 0, s = e[0], u = e[1], c = Math.min(s - o, u - a);
                    if (Object(ie.b)(t)) {
                        if (t.length !== c) throw new Error("Invalid value array length");
                        i = function (e) {
                            return t[e]
                        }
                    } else if (Object(ie.v)(t)) {
                        var f = t.size();
                        if (1 !== f.length || f[0] !== c) throw new Error("Invalid matrix length");
                        i = function (e) {
                            return t.get([e])
                        }
                    } else i = function () {
                        return t
                    };
                    n = n || (Object(ie.e)(i(0)) ? i(0).mul(0) : 0);
                    var l = [];
                    if (0 < e.length) {
                        l = Object(q.m)(l, e, n);
                        for (var p = 0; p < c; p++) l[p + o][p + a] = i(p)
                    }
                    return new m({data: l, size: [s, u]})
                }, m.fromJSON = function (e) {
                    return new m(e)
                }, m.prototype.swapRows = function (e, t) {
                    if (!(Object(ie.y)(e) && Object(E.i)(e) && Object(ie.y)(t) && Object(E.i)(t))) throw new Error("Row index must be positive integers");
                    if (2 !== this._size.length) throw new Error("Only two dimensional matrix is supported");
                    return Object(q.q)(e, this._size[0]), Object(q.q)(t, this._size[0]), m._swapRows(e, t, this._data), this
                }, m._swapRows = function (e, t, r) {
                    var n = r[e];
                    r[e] = r[t], r[t] = n
                }, m
            }, {isClass: !0}), B = ["typed"], D = Object(s.a)("clone", B, function (e) {
                return (0, e.typed)("clone", {any: ae.a})
            }), R = r(9);

        function P(e) {
            for (var t = 0; t < e.length; t++) if (Object(ie.i)(e[t])) return 1
        }

        function U(e, t) {
            Object(ie.v)(e) && (e = e.valueOf());
            for (var r = 0, n = e.length; r < n; r++) {
                var i = e[r];
                Array.isArray(i) ? U(i, t) : t(i)
            }
        }

        function oe(e, t, r) {
            return e && "function" == typeof e.map ? e.map(function (e) {
                return oe(e, t, r)
            }) : t(e)
        }

        function F(e, t, r) {
            var n = Array.isArray(e) ? Object(q.a)(e) : e.size();
            if (t < 0 || t >= n.length) throw new R.a(t, n.length);
            return Object(ie.v)(e) ? e.create(L(e.valueOf(), t, r)) : L(e, t, r)
        }

        function L(e, t, r) {
            var n, i, a, o;
            if (t <= 0) {
                if (Array.isArray(e[0])) {
                    for (o = function (e) {
                        var t, r, n = e.length, i = e[0].length, a = [];
                        for (r = 0; r < i; r++) {
                            var o = [];
                            for (t = 0; t < n; t++) o.push(e[t][r]);
                            a.push(o)
                        }
                        return a
                    }(e), i = [], n = 0; n < o.length; n++) i[n] = L(o[n], t - 1, r);
                    return i
                }
                for (a = e[0], n = 1; n < e.length; n++) a = r(a, e[n]);
                return a
            }
            for (i = [], n = 0; n < e.length; n++) i[n] = L(e[n], t - 1, r);
            return i
        }

        function H(e, t, r, n, i, a, o, s, u, c, f) {
            var l, p, m, h, d = e._values, y = e._index, g = e._ptr;
            if (n) for (p = g[t], m = g[t + 1], l = p; l < m; l++) r[h = y[l]] !== a ? (r[h] = a, o.push(h), c ? (n[h] = u ? s(d[l], f) : s(f, d[l]), i[h] = a) : n[h] = d[l]) : (n[h] = u ? s(d[l], n[h]) : s(n[h], d[l]), i[h] = a); else for (p = g[t], m = g[t + 1], l = p; l < m; l++) r[h = y[l]] !== a ? (r[h] = a, o.push(h)) : i[h] = a
        }

        var $ = "isInteger", G = ["typed"], Z = Object(s.a)($, G, function (e) {
            var t = (0, e.typed)($, {
                number: E.i, BigNumber: function (e) {
                    return e.isInt()
                }, Fraction: function (e) {
                    return 1 === e.d && isFinite(e.n)
                }, "Array | Matrix": function (e) {
                    return oe(e, t)
                }
            });
            return t
        }), J = "number";

        function W(e) {
            return e < 0
        }

        function Y(e) {
            return 0 < e
        }

        function X(e) {
            return 0 === e
        }

        function Q(e) {
            return Number.isNaN(e)
        }

        Q.signature = X.signature = Y.signature = W.signature = J;
        var K = "isNegative", ee = ["typed"], te = Object(s.a)(K, ee, function (e) {
            var t = (0, e.typed)(K, {
                number: W, BigNumber: function (e) {
                    return e.isNeg() && !e.isZero() && !e.isNaN()
                }, Fraction: function (e) {
                    return e.s < 0
                }, Unit: function (e) {
                    return t(e.value)
                }, "Array | Matrix": function (e) {
                    return oe(e, t)
                }
            });
            return t
        }), re = "isNumeric", ne = ["typed"], se = Object(s.a)(re, ne, function (e) {
            var t = (0, e.typed)(re, {
                "number | BigNumber | Fraction | boolean": function () {
                    return !0
                }, "Complex | Unit | string | null | undefined | Node": function () {
                    return !1
                }, "Array | Matrix": function (e) {
                    return oe(e, t)
                }
            });
            return t
        }), ue = "hasNumericValue", ce = ["typed", "isNumeric"], fe = Object(s.a)(ue, ce, function (e) {
            var t = e.typed, r = e.isNumeric;
            return t(ue, {
                string: function (e) {
                    return 0 < e.trim().length && !isNaN(Number(e))
                }, any: function (e) {
                    return r(e)
                }
            })
        }), le = "isPositive", pe = ["typed"], me = Object(s.a)(le, pe, function (e) {
            var t = (0, e.typed)(le, {
                number: Y, BigNumber: function (e) {
                    return !e.isNeg() && !e.isZero() && !e.isNaN()
                }, Fraction: function (e) {
                    return 0 < e.s && 0 < e.n
                }, Unit: function (e) {
                    return t(e.value)
                }, "Array | Matrix": function (e) {
                    return oe(e, t)
                }
            });
            return t
        }), he = ["typed"], de = Object(s.a)("isZero", he, function (e) {
            var t = (0, e.typed)("isZero", {
                number: X, BigNumber: function (e) {
                    return e.isZero()
                }, Complex: function (e) {
                    return 0 === e.re && 0 === e.im
                }, Fraction: function (e) {
                    return 1 === e.d && 0 === e.n
                }, Unit: function (e) {
                    return t(e.value)
                }, "Array | Matrix": function (e) {
                    return oe(e, t)
                }
            });
            return t
        }), ye = ["typed"], ge = Object(s.a)("isNaN", ye, function (e) {
            return (0, e.typed)("isNaN", {
                number: Q, BigNumber: function (e) {
                    return e.isNaN()
                }, Fraction: function () {
                    return !1
                }, Complex: function (e) {
                    return e.isNaN()
                }, Unit: function (e) {
                    return Number.isNaN(e.value)
                }, "Array | Matrix": function (e) {
                    return oe(e, Number.isNaN)
                }
            })
        }), ve = ["typed"], be = Object(s.a)("typeOf", ve, function (e) {
            return (0, e.typed)("typeOf", {any: ie.M})
        });

        function xe(e, t, r) {
            if (null == r) return e.eq(t);
            if (e.eq(t)) return !0;
            if (e.isNaN() || t.isNaN()) return !1;
            if (e.isFinite() && t.isFinite()) {
                var n = e.minus(t).abs();
                if (n.isZero()) return !0;
                var i = e.constructor.max(e.abs(), t.abs());
                return n.lte(i.times(r))
            }
            return !1
        }

        var we = "equalScalar", Ne = ["typed", "config"], Oe = Object(s.a)(we, Ne, function (e) {
            var t = e.typed, a = e.config, r = t(we, {
                "boolean, boolean": function (e, t) {
                    return e === t
                }, "number, number": function (e, t) {
                    return Object(E.m)(e, t, a.epsilon)
                }, "BigNumber, BigNumber": function (e, t) {
                    return e.eq(t) || xe(e, t, a.epsilon)
                }, "Fraction, Fraction": function (e, t) {
                    return e.equals(t)
                }, "Complex, Complex": function (e, t) {
                    return r = e, n = t, i = a.epsilon, Object(E.m)(r.re, n.re, i) && Object(E.m)(r.im, n.im, i);
                    var r, n, i
                }, "Unit, Unit": function (e, t) {
                    if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
                    return r(e.value, t.value)
                }
            });
            return r
        }), Me = (Object(s.a)(we, ["typed", "config"], function (e) {
            var t = e.typed, r = e.config;
            return t(we, {
                "number, number": function (e, t) {
                    return Object(E.m)(e, t, r.epsilon)
                }
            })
        }), ["typed", "equalScalar", "Matrix"]), je = Object(s.a)("SparseMatrix", Me, function (e) {
            var O = e.typed, M = e.equalScalar, t = e.Matrix;

            function j(e, t) {
                if (!(this instanceof j)) throw new SyntaxError("Constructor must be called with the new operator");
                if (t && !Object(ie.I)(t)) throw new Error("Invalid datatype: " + t);
                if (Object(ie.v)(e)) r = this, i = t, "SparseMatrix" === (n = e).type ? (r._values = n._values ? Object(ae.a)(n._values) : void 0, r._index = Object(ae.a)(n._index), r._ptr = Object(ae.a)(n._ptr), r._size = Object(ae.a)(n._size), r._datatype = i || n._datatype) : a(r, n.valueOf(), i || n._datatype); else if (e && Object(ie.b)(e.index) && Object(ie.b)(e.ptr) && Object(ie.b)(e.size)) this._values = e.values, this._index = e.index, this._ptr = e.ptr, this._size = e.size, this._datatype = t || e.datatype; else if (Object(ie.b)(e)) a(this, e, t); else {
                    if (e) throw new TypeError("Unsupported type of data (" + Object(ie.M)(e) + ")");
                    this._values = [], this._index = [], this._ptr = [0], this._size = [0, 0], this._datatype = t
                }
                var r, n, i
            }

            function a(e, t, r) {
                e._values = [], e._index = [], e._ptr = [], e._datatype = r;
                var n = t.length, i = 0, a = M, o = 0;
                if (Object(ie.I)(r) && (a = O.find(M, [r, r]) || M, o = O.convert(0, r)), 0 < n) {
                    var s = 0;
                    do {
                        e._ptr.push(e._index.length);
                        for (var u = 0; u < n; u++) {
                            var c, f = t[u];
                            Object(ie.b)(f) ? (0 === s && i < f.length && (i = f.length), s < f.length && (a(c = f[s], o) || (e._values.push(c), e._index.push(u)))) : (0 === s && i < 1 && (i = 1), a(f, o) || (e._values.push(f), e._index.push(u)))
                        }
                        s++
                    } while (s < i)
                }
                e._ptr.push(e._index.length), e._size = [n, i]
            }

            function g(e, t, r, n) {
                if (r - t == 0) return r;
                for (var i = t; i < r; i++) if (n[i] === e) return i;
                return t
            }

            function v(e, t, r, n, i, a, o) {
                i.splice(e, 0, n), a.splice(e, 0, t);
                for (var s = r + 1; s < o.length; s++) o[s]++
            }

            function f(e, t, r, n) {
                var i = n || 0, a = M, o = 0;
                Object(ie.I)(e._datatype) && (a = O.find(M, [e._datatype, e._datatype]) || M, o = O.convert(0, e._datatype), i = O.convert(i, e._datatype));
                var s = !a(i, o), u = e._size[0], c = e._size[1];
                if (c < r) {
                    for (l = c; l < r; l++) if (e._ptr[l] = e._values.length, s) for (m = 0; m < u; m++) e._values.push(i), e._index.push(m);
                    e._ptr[r] = e._values.length
                } else r < c && (e._ptr.splice(r + 1, c - r), e._values.splice(e._ptr[r], e._values.length), e._index.splice(e._ptr[r], e._index.length));
                if (c = r, u < t) {
                    if (s) {
                        for (var f = 0, l = 0; l < c; l++) {
                            e._ptr[l] = e._ptr[l] + f, g = e._ptr[l + 1] + f;
                            for (var p = 0, m = u; m < t; m++, p++) e._values.splice(g + p, 0, i), e._index.splice(g + p, 0, m), f++
                        }
                        e._ptr[c] = e._values.length
                    }
                } else if (t < u) {
                    var h = 0;
                    for (l = 0; l < c; l++) {
                        e._ptr[l] = e._ptr[l] - h;
                        for (var d = e._ptr[l], y = e._ptr[l + 1] - h, g = d; g < y; g++) t - 1 < (m = e._index[g]) && (e._values.splice(g, 1), e._index.splice(g, 1), h++)
                    }
                    e._ptr[l] = e._values.length
                }
                return e._size[0] = t, e._size[1] = r, e
            }

            function r(e, t, r, n, i) {
                for (var a, o = n[0], s = n[1], u = [], c = 0; c < o; c++) for (u[c] = [], a = 0; a < s; a++) u[c][a] = 0;
                for (a = 0; a < s; a++) for (var f = r[a], l = r[a + 1], p = f; p < l; p++) u[c = t[p]][a] = e ? i ? Object(ae.a)(e[p]) : e[p] : 1;
                return u
            }

            return (j.prototype = new t).createSparseMatrix = function (e, t) {
                return new j(e, t)
            }, j.prototype.type = "SparseMatrix", j.prototype.isSparseMatrix = !0, j.prototype.getDataType = function () {
                return Object(q.h)(this._values, ie.M)
            }, j.prototype.storage = function () {
                return "sparse"
            }, j.prototype.datatype = function () {
                return this._datatype
            }, j.prototype.create = function (e, t) {
                return new j(e, t)
            }, j.prototype.density = function () {
                var e = this._size[0], t = this._size[1];
                return 0 !== e && 0 !== t ? this._index.length / (e * t) : 0
            }, j.prototype.subset = function (e, t, r) {
                if (!this._values) throw new Error("Cannot invoke subset on a Pattern only matrix");
                switch (arguments.length) {
                    case 1:
                        return function (e, t) {
                            if (!Object(ie.t)(t)) throw new TypeError("Invalid index");
                            if (t.isScalar()) return e.get(t.min());
                            var r, n, i, a, o = t.size();
                            if (o.length !== e._size.length) throw new z.a(o.length, e._size.length);
                            var s = t.min(), u = t.max();
                            for (r = 0, n = e._size.length; r < n; r++) Object(q.q)(s[r], e._size[r]), Object(q.q)(u[r], e._size[r]);
                            var c = e._values, f = e._index, l = e._ptr, p = t.dimension(0), m = t.dimension(1), h = [],
                                d = [];
                            p.forEach(function (e, t) {
                                d[e] = t[0], h[e] = !0
                            });
                            var y = c ? [] : void 0, g = [], v = [];
                            return m.forEach(function (e) {
                                for (v.push(g.length), i = l[e], a = l[e + 1]; i < a; i++) r = f[i], !0 === h[r] && (g.push(d[r]), y && y.push(c[i]))
                            }), v.push(g.length), new j({values: y, index: g, ptr: v, size: o, datatype: e._datatype})
                        }(this, e);
                    case 2:
                    case 3:
                        return function (e, t, r, n) {
                            if (!t || !0 !== t.isIndex) throw new TypeError("Invalid index");
                            var i, a = t.size(), o = t.isScalar();
                            Object(ie.v)(r) ? (i = r.size(), r = r.toArray()) : i = Object(q.a)(r);
                            if (o) {
                                if (0 !== i.length) throw new TypeError("Scalar expected");
                                e.set(t.min(), r, n)
                            } else {
                                if (1 !== a.length && 2 !== a.length) throw new z.a(a.length, e._size.length, "<");
                                if (i.length < a.length) {
                                    for (var s = 0, u = 0; 1 === a[s] && 1 === i[s];) s++;
                                    for (; 1 === a[s];) u++, s++;
                                    r = Object(q.o)(r, a.length, u, i)
                                }
                                if (!Object(ae.d)(a, i)) throw new z.a(a, i, ">");
                                for (var c = t.min()[0], f = t.min()[1], l = i[0], p = i[1], m = 0; m < l; m++) for (var h = 0; h < p; h++) {
                                    var d = r[m][h];
                                    e.set([m + c, h + f], d, n)
                                }
                            }
                            return e
                        }(this, e, t, r);
                    default:
                        throw new SyntaxError("Wrong number of arguments")
                }
            }, j.prototype.get = function (e) {
                if (!Object(ie.b)(e)) throw new TypeError("Array expected");
                if (e.length !== this._size.length) throw new z.a(e.length, this._size.length);
                if (!this._values) throw new Error("Cannot invoke get on a Pattern only matrix");
                var t = e[0], r = e[1];
                Object(q.q)(t, this._size[0]), Object(q.q)(r, this._size[1]);
                var n = g(t, this._ptr[r], this._ptr[r + 1], this._index);
                return n < this._ptr[r + 1] && this._index[n] === t ? this._values[n] : 0
            }, j.prototype.set = function (e, t, r) {
                if (!Object(ie.b)(e)) throw new TypeError("Array expected");
                if (e.length !== this._size.length) throw new z.a(e.length, this._size.length);
                if (!this._values) throw new Error("Cannot invoke set on a Pattern only matrix");
                var n = e[0], i = e[1], a = this._size[0], o = this._size[1], s = M, u = 0;
                Object(ie.I)(this._datatype) && (s = O.find(M, [this._datatype, this._datatype]) || M, u = O.convert(0, this._datatype)), (a - 1 < n || o - 1 < i) && (f(this, Math.max(n + 1, a), Math.max(i + 1, o), r), a = this._size[0], o = this._size[1]), Object(q.q)(n, a), Object(q.q)(i, o);
                var c = g(n, this._ptr[i], this._ptr[i + 1], this._index);
                return c < this._ptr[i + 1] && this._index[c] === n ? s(t, u) ? function (e, t, r, n, i) {
                    r.splice(e, 1), n.splice(e, 1);
                    for (var a = t + 1; a < i.length; a++) i[a]--
                }(c, i, this._values, this._index, this._ptr) : this._values[c] = t : v(c, n, i, t, this._values, this._index, this._ptr), this
            }, j.prototype.resize = function (t, e, r) {
                if (!Object(ie.b)(t)) throw new TypeError("Array expected");
                if (2 !== t.length) throw new Error("Only two dimensions matrix are supported");
                return t.forEach(function (e) {
                    if (!Object(ie.y)(e) || !Object(E.i)(e) || e < 0) throw new TypeError("Invalid size, must contain positive integers (size: " + Object(V.d)(t) + ")")
                }), f(r ? this.clone() : this, t[0], t[1], e)
            }, j.prototype.reshape = function (t, e) {
                if (!Object(ie.b)(t)) throw new TypeError("Array expected");
                if (2 !== t.length) throw new Error("Sparse matrices can only be reshaped in two dimensions");
                if (t.forEach(function (e) {
                    if (!Object(ie.y)(e) || !Object(E.i)(e) || e < 0) throw new TypeError("Invalid size, must contain positive integers (size: " + Object(V.d)(t) + ")")
                }), this._size[0] * this._size[1] != t[0] * t[1]) throw new Error("Reshaping sparse matrix will result in the wrong number of elements");
                var r = e ? this.clone() : this;
                if (this._size[0] === t[0] && this._size[1] === t[1]) return r;
                for (var n = [], i = 0; i < r._ptr.length; i++) for (var a = 0; a < r._ptr[i + 1] - r._ptr[i]; a++) n.push(i);
                for (var o = r._values.slice(), s = r._index.slice(), u = 0; u < r._index.length; u++) {
                    var c = s[u], f = n[u], l = c * r._size[1] + f;
                    n[u] = l % t[1], s[u] = Math.floor(l / t[1])
                }
                r._values.length = 0, r._index.length = 0, r._ptr.length = t[1] + 1, r._size = t.slice();
                for (var p = 0; p < r._ptr.length; p++) r._ptr[p] = 0;
                for (var m = 0; m < o.length; m++) {
                    var h = s[m], d = n[m], y = o[m];
                    v(g(h, r._ptr[d], r._ptr[d + 1], r._index), h, d, y, r._values, r._index, r._ptr)
                }
                return r
            }, j.prototype.clone = function () {
                return new j({
                    values: this._values ? Object(ae.a)(this._values) : void 0,
                    index: Object(ae.a)(this._index),
                    ptr: Object(ae.a)(this._ptr),
                    size: Object(ae.a)(this._size),
                    datatype: this._datatype
                })
            }, j.prototype.size = function () {
                return this._size.slice(0)
            }, j.prototype.map = function (n, e) {
                if (!this._values) throw new Error("Cannot invoke map on a Pattern only matrix");
                var i = this;
                return function (e, t, r, n, i, a, o) {
                    var s = [], u = [], c = [], f = M, l = 0;
                    Object(ie.I)(e._datatype) && (f = O.find(M, [e._datatype, e._datatype]) || M, l = O.convert(0, e._datatype));
                    for (var p = function (e, t, r) {
                        e = a(e, t, r), f(e, l) || (s.push(e), u.push(t))
                    }, m = n; m <= i; m++) {
                        c.push(s.length);
                        var h = e._ptr[m], d = e._ptr[m + 1];
                        if (o) for (var y = h; y < d; y++) {
                            var g = e._index[y];
                            t <= g && g <= r && p(e._values[y], g - t, m - n)
                        } else {
                            for (var v = {}, b = h; b < d; b++) {
                                var x = e._index[b];
                                v[x] = e._values[b]
                            }
                            for (var w = t; w <= r; w++) {
                                var N = w in v ? v[w] : 0;
                                p(N, w - t, m - n)
                            }
                        }
                    }
                    return c.push(s.length), new j({values: s, index: u, ptr: c, size: [r - t + 1, i - n + 1]})
                }(this, 0, this._size[0] - 1, 0, this._size[1] - 1, function (e, t, r) {
                    return n(e, [t, r], i)
                }, e)
            }, j.prototype.forEach = function (e, t) {
                if (!this._values) throw new Error("Cannot invoke forEach on a Pattern only matrix");
                for (var r = this._size[0], n = this._size[1], i = 0; i < n; i++) {
                    var a = this._ptr[i], o = this._ptr[i + 1];
                    if (t) for (var s = a; s < o; s++) {
                        var u = this._index[s];
                        e(this._values[s], [u, i], this)
                    } else {
                        for (var c = {}, f = a; f < o; f++) {
                            c[this._index[f]] = this._values[f]
                        }
                        for (var l = 0; l < r; l++) {
                            e(l in c ? c[l] : 0, [l, i], this)
                        }
                    }
                }
            }, j.prototype.toArray = function () {
                return r(this._values, this._index, this._ptr, this._size, !0)
            }, j.prototype.valueOf = function () {
                return r(this._values, this._index, this._ptr, this._size, !1)
            }, j.prototype.format = function (e) {
                for (var t = this._size[0], r = this._size[1], n = this.density(), i = "Sparse Matrix [" + Object(V.d)(t, e) + " x " + Object(V.d)(r, e) + "] density: " + Object(V.d)(n, e) + "\n", a = 0; a < r; a++) for (var o = this._ptr[a], s = this._ptr[a + 1], u = o; u < s; u++) {
                    var c = this._index[u];
                    i += "\n    (" + Object(V.d)(c, e) + ", " + Object(V.d)(a, e) + ") ==> " + (this._values ? Object(V.d)(this._values[u], e) : "X")
                }
                return i
            }, j.prototype.toString = function () {
                return Object(V.d)(this.toArray())
            }, j.prototype.toJSON = function () {
                return {
                    mathjs: "SparseMatrix",
                    values: this._values,
                    index: this._index,
                    ptr: this._ptr,
                    size: this._size,
                    datatype: this._datatype
                }
            }, j.prototype.diagonal = function (e) {
                if (e) {
                    if (Object(ie.e)(e) && (e = e.toNumber()), !Object(ie.y)(e) || !Object(E.i)(e)) throw new TypeError("The parameter k must be an integer number")
                } else e = 0;
                var t = 0 < e ? e : 0, r = e < 0 ? -e : 0, n = this._size[0], i = this._size[1],
                    a = Math.min(n - r, i - t), o = [], s = [], u = [];
                u[0] = 0;
                for (var c = t; c < i && o.length < a; c++) for (var f = this._ptr[c], l = this._ptr[c + 1], p = f; p < l; p++) {
                    var m = this._index[p];
                    if (m === c - t + r) {
                        o.push(this._values[p]), s[o.length - 1] = m - r;
                        break
                    }
                }
                return u.push(o.length), new j({values: o, index: s, ptr: u, size: [a, 1]})
            }, j.fromJSON = function (e) {
                return new j(e)
            }, j.diagonal = function (e, t, r, n, i) {
                if (!Object(ie.b)(e)) throw new TypeError("Array expected, size parameter");
                if (2 !== e.length) throw new Error("Only two dimensions matrix are supported");
                if (e = e.map(function (e) {
                    if (Object(ie.e)(e) && (e = e.toNumber()), !Object(ie.y)(e) || !Object(E.i)(e) || e < 1) throw new Error("Size values must be positive integers");
                    return e
                }), r) {
                    if (Object(ie.e)(r) && (r = r.toNumber()), !Object(ie.y)(r) || !Object(E.i)(r)) throw new TypeError("The parameter k must be an integer number")
                } else r = 0;
                var a = M, o = 0;
                Object(ie.I)(i) && (a = O.find(M, [i, i]) || M, o = O.convert(0, i));
                var s, u = 0 < r ? r : 0, c = r < 0 ? -r : 0, f = e[0], l = e[1], p = Math.min(f - c, l - u);
                if (Object(ie.b)(t)) {
                    if (t.length !== p) throw new Error("Invalid value array length");
                    s = function (e) {
                        return t[e]
                    }
                } else if (Object(ie.v)(t)) {
                    var m = t.size();
                    if (1 !== m.length || m[0] !== p) throw new Error("Invalid matrix length");
                    s = function (e) {
                        return t.get([e])
                    }
                } else s = function () {
                    return t
                };
                for (var h = [], d = [], y = [], g = 0; g < l; g++) {
                    y.push(h.length);
                    var v, b = g - u;
                    0 <= b && b < p && (a(v = s(b), o) || (d.push(b + c), h.push(v)))
                }
                return y.push(h.length), new j({values: h, index: d, ptr: y, size: [f, l]})
            }, j.prototype.swapRows = function (e, t) {
                if (!(Object(ie.y)(e) && Object(E.i)(e) && Object(ie.y)(t) && Object(E.i)(t))) throw new Error("Row index must be positive integers");
                if (2 !== this._size.length) throw new Error("Only two dimensional matrix is supported");
                return Object(q.q)(e, this._size[0]), Object(q.q)(t, this._size[0]), j._swapRows(e, t, this._size[1], this._values, this._index, this._ptr), this
            }, j._forEachRow = function (e, t, r, n, i) {
                for (var a = n[e], o = n[e + 1], s = a; s < o; s++) i(r[s], t[s])
            }, j._swapRows = function (e, t, r, n, i, a) {
                for (var o = 0; o < r; o++) {
                    var s, u, c, f = a[o], l = a[o + 1], p = g(e, f, l, i), m = g(t, f, l, i);
                    p < l && m < l && i[p] === e && i[m] === t ? n && (s = n[p], n[p] = n[m], n[m] = s) : p < l && i[p] === e && (l <= m || i[m] !== t) ? (u = n ? n[p] : void 0, i.splice(m, 0, t), n && n.splice(m, 0, u), i.splice(m <= p ? p + 1 : p, 1), n && n.splice(m <= p ? p + 1 : p, 1)) : m < l && i[m] === t && (l <= p || i[p] !== e) && (c = n ? n[m] : void 0, i.splice(p, 0, e), n && n.splice(p, 0, c), i.splice(p <= m ? m + 1 : m, 1), n && n.splice(p <= m ? m + 1 : m, 1))
                }
            }, j
        }, {isClass: !0}), Ee = ["typed"], Se = Object(s.a)("number", Ee, function (e) {
            var t = (0, e.typed)("number", {
                "": function () {
                    return 0
                }, number: function (e) {
                    return e
                }, string: function (e) {
                    if ("NaN" === e) return NaN;
                    var t = Number(e);
                    if (isNaN(t)) throw new SyntaxError('String "' + e + '" is no valid number');
                    return t
                }, BigNumber: function (e) {
                    return e.toNumber()
                }, Fraction: function (e) {
                    return e.valueOf()
                }, Unit: function () {
                    throw new Error("Second argument with valueless unit expected")
                }, null: function () {
                    return 0
                }, "Unit, string | Unit": function (e, t) {
                    return e.toNumber(t)
                }, "Array | Matrix": function (e) {
                    return oe(e, t)
                }
            });
            return t.fromJSON = function (e) {
                return parseFloat(e.value)
            }, t
        }), Ae = ["typed"], Ce = Object(s.a)("string", Ae, function (e) {
            var t = (0, e.typed)("string", {
                "": function () {
                    return ""
                }, number: E.h, null: function () {
                    return "null"
                }, boolean: function (e) {
                    return e + ""
                }, string: function (e) {
                    return e
                }, "Array | Matrix": function (e) {
                    return oe(e, t)
                }, any: function (e) {
                    return String(e)
                }
            });
            return t
        }), Te = "boolean", _e = ["typed"], qe = Object(s.a)(Te, _e, function (e) {
            var t = (0, e.typed)(Te, {
                "": function () {
                    return !1
                }, boolean: function (e) {
                    return e
                }, number: function (e) {
                    return !!e
                }, null: function () {
                    return !1
                }, BigNumber: function (e) {
                    return !e.isZero()
                }, string: function (e) {
                    var t = e.toLowerCase();
                    if ("true" === t) return !0;
                    if ("false" === t) return !1;
                    var r = Number(e);
                    if ("" !== e && !isNaN(r)) return !!r;
                    throw new Error('Cannot convert "' + e + '" to a boolean')
                }, "Array | Matrix": function (e) {
                    return oe(e, t)
                }
            });
            return t
        }), Ie = ["typed", "BigNumber"], ke = Object(s.a)("bignumber", Ie, function (e) {
            var t = e.typed, r = e.BigNumber, n = t("bignumber", {
                "": function () {
                    return new r(0)
                }, number: function (e) {
                    return new r(e + "")
                }, string: function (e) {
                    return new r(e)
                }, BigNumber: function (e) {
                    return e
                }, Fraction: function (e) {
                    return new r(e.n).div(e.d).times(e.s)
                }, null: function () {
                    return new r(0)
                }, "Array | Matrix": function (e) {
                    return oe(e, n)
                }
            });
            return n
        }), Be = ["typed", "Complex"], ze = Object(s.a)("complex", Be, function (e) {
            var t = e.typed, r = e.Complex, n = t("complex", {
                "": function () {
                    return r.ZERO
                }, number: function (e) {
                    return new r(e, 0)
                }, "number, number": function (e, t) {
                    return new r(e, t)
                }, "BigNumber, BigNumber": function (e, t) {
                    return new r(e.toNumber(), t.toNumber())
                }, Fraction: function (e) {
                    return new r(e.valueOf(), 0)
                }, Complex: function (e) {
                    return e.clone()
                }, string: function (e) {
                    return r(e)
                }, null: function () {
                    return r(0)
                }, Object: function (e) {
                    if ("re" in e && "im" in e) return new r(e.re, e.im);
                    if ("r" in e && "phi" in e || "abs" in e && "arg" in e) return new r(e);
                    throw new Error("Expected object with properties (re and im) or (r and phi) or (abs and arg)")
                }, "Array | Matrix": function (e) {
                    return oe(e, n)
                }
            });
            return n
        }), De = ["typed", "Fraction"], Re = Object(s.a)("fraction", De, function (e) {
            var t = e.typed, r = e.Fraction, n = t("fraction", {
                number: function (e) {
                    if (!isFinite(e) || isNaN(e)) throw new Error(e + " cannot be represented as a fraction");
                    return new r(e)
                }, string: function (e) {
                    return new r(e)
                }, "number, number": function (e, t) {
                    return new r(e, t)
                }, null: function () {
                    return new r(0)
                }, BigNumber: function (e) {
                    return new r(e.toString())
                }, Fraction: function (e) {
                    return e
                }, Object: function (e) {
                    return new r(e)
                }, "Array | Matrix": function (e) {
                    return oe(e, n)
                }
            });
            return n
        }), Pe = ["typed", "Matrix", "DenseMatrix", "SparseMatrix"], Ue = Object(s.a)("matrix", Pe, function (e) {
            var t = e.typed, n = (e.Matrix, e.DenseMatrix), i = e.SparseMatrix;
            return t("matrix", {
                "": function () {
                    return r([])
                }, string: function (e) {
                    return r([], e)
                }, "string, string": function (e, t) {
                    return r([], e, t)
                }, Array: function (e) {
                    return r(e)
                }, Matrix: function (e) {
                    return r(e, e.storage())
                }, "Array | Matrix, string": r, "Array | Matrix, string, string": r
            });

            function r(e, t, r) {
                if ("dense" === t || "default" === t || void 0 === t) return new n(e, r);
                if ("sparse" === t) return new i(e, r);
                throw new TypeError("Unknown matrix type " + JSON.stringify(t) + ".")
            }
        }), Fe = "splitUnit", Le = ["typed"], He = Object(s.a)(Fe, Le, function (e) {
            return (0, e.typed)(Fe, {
                "Unit, Array": function (e, t) {
                    return e.splitUnit(t)
                }
            })
        }), $e = "number", Ge = "number, number";

        function Ze(e) {
            return Math.abs(e)
        }

        function Ve(e, t) {
            return e + t
        }

        function Je(e, t) {
            return e * t
        }

        function We(e) {
            return -e
        }

        function Ye(e) {
            return e
        }

        function Xe(e) {
            return Object(E.d)(e)
        }

        function Qe(e) {
            return Math.ceil(e)
        }

        function Ke(e) {
            return e * e * e
        }

        function et(e) {
            return Math.exp(e)
        }

        function tt(e) {
            return Object(E.g)(e)
        }

        function rt(e, t) {
            if (!Object(E.i)(e) || !Object(E.i)(t)) throw new Error("Parameters in function gcd must be integer numbers");
            for (var r; 0 !== t;) r = e % t, e = t, t = r;
            return e < 0 ? -e : e
        }

        function nt(e, t) {
            if (!Object(E.i)(e) || !Object(E.i)(t)) throw new Error("Parameters in function lcm must be integer numbers");
            if (0 === e || 0 === t) return 0;
            for (var r, n = e * t; 0 !== t;) t = e % (r = t), e = r;
            return Math.abs(n / e)
        }

        function it(e) {
            return Math.log(e)
        }

        function at(e) {
            return Object(E.j)(e)
        }

        function ot(e) {
            return Object(E.l)(e)
        }

        function st(e, t) {
            if (0 < t) return e - t * Math.floor(e / t);
            if (0 === t) return e;
            throw new Error("Cannot calculate mod for a negative divisor")
        }

        function ut(e, t) {
            var r = t < 0;
            if (r && (t = -t), 0 === t) throw new Error("Root must be non-zero");
            if (e < 0 && Math.abs(t) % 2 != 1) throw new Error("Root must be odd when a is negative.");
            if (0 === e) return r ? 1 / 0 : 0;
            if (!isFinite(e)) return r ? 0 : e;
            var n = Math.pow(Math.abs(e), 1 / t), n = e < 0 ? -n : n;
            return r ? 1 / n : n
        }

        function ct(e) {
            return Object(E.n)(e)
        }

        function ft(e) {
            return e * e
        }

        function lt(e, t) {
            var r, n, i, a = 0, o = 1, s = 1, u = 0;
            if (!Object(E.i)(e) || !Object(E.i)(t)) throw new Error("Parameters in function xgcd must be integer numbers");
            for (; t;) i = e - (n = Math.floor(e / t)) * t, a = o - n * (r = a), o = r, s = u - n * (r = s), u = r, e = t, t = i;
            return e < 0 ? [-e, -o, -u] : [e, e ? o : 0, u]
        }

        function pt(e, t) {
            return e * e < 1 && t === 1 / 0 || 1 < e * e && t === -1 / 0 ? 0 : Math.pow(e, t)
        }

        function mt(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
            return parseFloat(Object(E.q)(e, t))
        }

        Ze.signature = $e, Je.signature = Ve.signature = Ge, tt.signature = et.signature = Ke.signature = Qe.signature = Xe.signature = Ye.signature = We.signature = $e, nt.signature = rt.signature = Ge, ot.signature = at.signature = it.signature = $e, ut.signature = st.signature = Ge, ft.signature = ct.signature = $e, mt.signature = pt.signature = lt.signature = Ge;
        var ht = "unaryMinus", dt = ["typed"], yt = Object(s.a)(ht, dt, function (e) {
            var r = (0, e.typed)(ht, {
                number: We, Complex: function (e) {
                    return e.neg()
                }, BigNumber: function (e) {
                    return e.neg()
                }, Fraction: function (e) {
                    return e.neg()
                }, Unit: function (e) {
                    var t = e.clone();
                    return t.value = r(e.value), t
                }, "Array | Matrix": function (e) {
                    return oe(e, r, !0)
                }
            });
            return r
        }), gt = "unaryPlus", vt = ["typed", "config", "BigNumber"], bt = Object(s.a)(gt, vt, function (e) {
            var t = e.typed, r = e.config, n = e.BigNumber, i = t(gt, {
                number: Ye, Complex: function (e) {
                    return e
                }, BigNumber: function (e) {
                    return e
                }, Fraction: function (e) {
                    return e
                }, Unit: function (e) {
                    return e.clone()
                }, "Array | Matrix": function (e) {
                    return oe(e, i, !0)
                }, "boolean | string": function (e) {
                    return "BigNumber" === r.number ? new n(+e) : +e
                }
            });
            return i
        }), xt = ["typed"], wt = Object(s.a)("abs", xt, function (e) {
            var t = (0, e.typed)("abs", {
                number: Ze, Complex: function (e) {
                    return e.abs()
                }, BigNumber: function (e) {
                    return e.abs()
                }, Fraction: function (e) {
                    return e.abs()
                }, "Array | Matrix": function (e) {
                    return oe(e, t, !0)
                }, Unit: function (e) {
                    return e.abs()
                }
            });
            return t
        }), Nt = ["typed", "isInteger"], Ot = Object(s.a)("apply", Nt, function (e) {
            var t = e.typed, i = e.isInteger;
            return t("apply", {
                "Array | Matrix, number | BigNumber, function": function (e, t, r) {
                    if (!i(t)) throw new TypeError("Integer number expected for dimension");
                    var n = Array.isArray(e) ? Object(q.a)(e) : e.size();
                    if (t < 0 || t >= n.length) throw new R.a(t, n.length);
                    return Object(ie.v)(e) ? e.create(Mt(e.valueOf(), t, r)) : Mt(e, t, r)
                }
            })
        });

        function Mt(e, t, r) {
            var n, i, a;
            if (t <= 0) {
                if (Array.isArray(e[0])) {
                    for (a = function (e) {
                        var t, r, n = e.length, i = e[0].length, a = [];
                        for (r = 0; r < i; r++) {
                            var o = [];
                            for (t = 0; t < n; t++) o.push(e[t][r]);
                            a.push(o)
                        }
                        return a
                    }(e), i = [], n = 0; n < a.length; n++) i[n] = Mt(a[n], t - 1, r);
                    return i
                }
                return r(e)
            }
            for (i = [], n = 0; n < e.length; n++) i[n] = Mt(e[n], t - 1, r);
            return i
        }

        var jt = "addScalar", Et = ["typed"], St = Object(s.a)(jt, Et, function (e) {
                var n = (0, e.typed)(jt, {
                    "number, number": Ve, "Complex, Complex": function (e, t) {
                        return e.add(t)
                    }, "BigNumber, BigNumber": function (e, t) {
                        return e.plus(t)
                    }, "Fraction, Fraction": function (e, t) {
                        return e.add(t)
                    }, "Unit, Unit": function (e, t) {
                        if (null === e.value || void 0 === e.value) throw new Error("Parameter x contains a unit with undefined value");
                        if (null === t.value || void 0 === t.value) throw new Error("Parameter y contains a unit with undefined value");
                        if (!e.equalBase(t)) throw new Error("Units do not match");
                        var r = e.clone();
                        return r.value = n(r.value, t.value), r.fixPrefix = !1, r
                    }
                });
                return n
            }), At = ["config", "typed", "isNegative", "unaryMinus", "matrix", "Complex", "BigNumber", "Fraction"],
            Ct = Object(s.a)("cbrt", At, function (e) {
                var o = e.config, t = e.typed, a = e.isNegative, s = e.unaryMinus, u = e.matrix, c = e.Complex,
                    f = e.BigNumber, l = e.Fraction, r = t("cbrt", {
                        number: Xe, Complex: p, "Complex, boolean": p, BigNumber: function (e) {
                            return e.cbrt()
                        }, Unit: function (e) {
                            {
                                if (e.value && Object(ie.j)(e.value)) {
                                    var t = e.clone();
                                    return t.value = 1, (t = t.pow(1 / 3)).value = p(e.value), t
                                }
                                var r, n = a(e.value);
                                n && (e.value = s(e.value)), r = Object(ie.e)(e.value) ? new f(1).div(3) : Object(ie.o)(e.value) ? new l(1, 3) : 1 / 3;
                                var i = e.pow(r);
                                return n && (i.value = s(i.value)), i
                            }
                        }, "Array | Matrix": function (e) {
                            return oe(e, r, !0)
                        }
                    });

                function p(e, t) {
                    var r = e.arg() / 3, n = e.abs(), i = new c(Xe(n), 0).mul(new c(0, r).exp());
                    if (t) {
                        var a = [i, new c(Xe(n), 0).mul(new c(0, r + 2 * Math.PI / 3).exp()), new c(Xe(n), 0).mul(new c(0, r - 2 * Math.PI / 3).exp())];
                        return "Array" === o.matrix ? a : u(a)
                    }
                    return i
                }

                return r
            }), Tt = ["typed", "config", "round"], _t = Object(s.a)("ceil", Tt, function (e) {
                var t = e.typed, r = e.config, n = e.round, i = t("ceil", {
                    number: function (e) {
                        return (Object(E.m)(e, n(e), r.epsilon) ? n : Qe)(e)
                    }, Complex: function (e) {
                        return e.ceil()
                    }, BigNumber: function (e) {
                        return xe(e, n(e), r.epsilon) ? n(e) : e.ceil()
                    }, Fraction: function (e) {
                        return e.ceil()
                    }, "Array | Matrix": function (e) {
                        return oe(e, i, !0)
                    }
                });
                return i
            }), qt = ["typed"], It = Object(s.a)("cube", qt, function (e) {
                var t = (0, e.typed)("cube", {
                    number: Ke, Complex: function (e) {
                        return e.mul(e).mul(e)
                    }, BigNumber: function (e) {
                        return e.times(e).times(e)
                    }, Fraction: function (e) {
                        return e.pow(3)
                    }, "Array | Matrix": function (e) {
                        return oe(e, t, !0)
                    }, Unit: function (e) {
                        return e.pow(3)
                    }
                });
                return t
            }), kt = ["typed"], Bt = Object(s.a)("exp", kt, function (e) {
                var t = (0, e.typed)("exp", {
                    number: et, Complex: function (e) {
                        return e.exp()
                    }, BigNumber: function (e) {
                        return e.exp()
                    }, "Array | Matrix": function (e) {
                        return oe(e, t)
                    }
                });
                return t
            }), zt = ["typed", "Complex"], Dt = Object(s.a)("expm1", zt, function (e) {
                var t = e.typed, r = e.Complex, n = t("expm1", {
                    number: tt, Complex: function (e) {
                        var t = Math.exp(e.re);
                        return new r(t * Math.cos(e.im) - 1, t * Math.sin(e.im))
                    }, BigNumber: function (e) {
                        return e.exp().minus(1)
                    }, "Array | Matrix": function (e) {
                        return oe(e, n)
                    }
                });
                return n
            }), Rt = ["typed", "Complex", "ceil", "floor"], Pt = Object(s.a)("fix", Rt, function (e) {
                var t = e.typed, r = e.Complex, n = e.ceil, i = e.floor, a = t("fix", {
                    number: function (e) {
                        return (0 < e ? i : n)(e)
                    }, Complex: function (e) {
                        return new r(0 < e.re ? Math.floor(e.re) : Math.ceil(e.re), 0 < e.im ? Math.floor(e.im) : Math.ceil(e.im))
                    }, BigNumber: function (e) {
                        return (e.isNegative() ? n : i)(e)
                    }, Fraction: function (e) {
                        return e.s < 0 ? e.ceil() : e.floor()
                    }, "Array | Matrix": function (e) {
                        return oe(e, a, !0)
                    }
                });
                return a
            }), Ut = ["typed", "config", "round"], Ft = Object(s.a)("floor", Ut, function (e) {
                var t = e.typed, r = e.config, n = e.round, i = t("floor", {
                    number: function (e) {
                        return Object(E.m)(e, n(e), r.epsilon) ? n(e) : Math.floor(e)
                    }, Complex: function (e) {
                        return e.floor()
                    }, BigNumber: function (e) {
                        return xe(e, n(e), r.epsilon) ? n(e) : e.floor()
                    }, Fraction: function (e) {
                        return e.floor()
                    }, "Array | Matrix": function (e) {
                        return oe(e, i, !0)
                    }
                });
                return i
            }), Lt = ["typed"], Ht = Object(s.a)("algorithm01", Lt, function (e) {
                var j = e.typed;
                return function (e, t, r, n) {
                    var i = e._data, a = e._size, o = e._datatype, s = t._values, u = t._index, c = t._ptr, f = t._size,
                        l = t._datatype;
                    if (a.length !== f.length) throw new z.a(a.length, f.length);
                    if (a[0] !== f[0] || a[1] !== f[1]) throw new RangeError("Dimension mismatch. Matrix A (" + a + ") must match Matrix B (" + f + ")");
                    if (!s) throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
                    for (var p = a[0], m = a[1], h = "string" == typeof o && o === l ? o : void 0, d = h ? j.find(r, [h, h]) : r, y = [], g = 0; g < p; g++) y[g] = [];
                    for (var v = [], b = [], x = 0; x < m; x++) {
                        for (var w = x + 1, N = c[x], O = c[x + 1], M = N; M < O; M++) v[g = u[M]] = n ? d(s[M], i[g][x]) : d(i[g][x], s[M]), b[g] = w;
                        for (g = 0; g < p; g++) b[g] === w ? y[g][x] = v[g] : y[g][x] = i[g][x]
                    }
                    return e.createDenseMatrix({data: y, size: [p, m], datatype: h})
                }
            }), $t = ["typed", "equalScalar"], Gt = Object(s.a)("algorithm04", $t, function (e) {
                var I = e.typed, k = e.equalScalar;
                return function (e, t, r) {
                    var n = e._values, i = e._index, a = e._ptr, o = e._size, s = e._datatype, u = t._values, c = t._index,
                        f = t._ptr, l = t._size, p = t._datatype;
                    if (o.length !== l.length) throw new z.a(o.length, l.length);
                    if (o[0] !== l[0] || o[1] !== l[1]) throw new RangeError("Dimension mismatch. Matrix A (" + o + ") must match Matrix B (" + l + ")");
                    var m, h = o[0], d = o[1], y = k, g = 0, v = r;
                    "string" == typeof s && s === p && (m = s, y = I.find(k, [m, m]), g = I.convert(0, m), v = I.find(r, [m, m]));
                    for (var b = n && u ? [] : void 0, x = [], w = [], N = n && u ? [] : void 0, O = n && u ? [] : void 0, M = [], j = [], E = 0; E < d; E++) {
                        w[E] = x.length;
                        for (var S, A, C = E + 1, T = a[E], _ = a[E + 1], q = T; q < _; q++) A = i[q], x.push(A), M[A] = C, N && (N[A] = n[q]);
                        for (T = f[E], _ = f[E + 1], q = T; q < _; q++) {
                            M[A = c[q]] === C ? N && (y(S = v(N[A], u[q]), g) ? M[A] = null : N[A] = S) : (x.push(A), j[A] = C, O && (O[A] = u[q]))
                        }
                        if (N && O) for (q = w[E]; q < x.length;) M[A = x[q]] === C ? (b[q] = N[A], q++) : j[A] === C ? (b[q] = O[A], q++) : x.splice(q, 1)
                    }
                    return w[d] = x.length, e.createSparseMatrix({values: b, index: x, ptr: w, size: [h, d], datatype: m})
                }
            }), Zt = ["typed", "DenseMatrix"], Vt = Object(s.a)("algorithm10", Zt, function (e) {
                var O = e.typed, M = e.DenseMatrix;
                return function (e, t, r, n) {
                    var i = e._values, a = e._index, o = e._ptr, s = e._size, u = e._datatype;
                    if (!i) throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
                    var c, f = s[0], l = s[1], p = r;
                    "string" == typeof u && (c = u, t = O.convert(t, c), p = O.find(r, [c, c]));
                    for (var m = [], h = [], d = [], y = 0; y < l; y++) {
                        for (var g = y + 1, v = o[y], b = o[y + 1], x = v; x < b; x++) {
                            var w = a[x];
                            h[w] = i[x], d[w] = g
                        }
                        for (var N = 0; N < f; N++) 0 === y && (m[N] = []), d[N] === g ? m[N][y] = n ? p(t, h[N]) : p(h[N], t) : m[N][y] = t
                    }
                    return new M({data: m, size: [f, l], datatype: c})
                }
            }), Jt = ["typed"], Wt = Object(s.a)("algorithm13", Jt, function (e) {
                var h = e.typed;
                return function (e, t, r) {
                    var n = e._data, i = e._size, a = e._datatype, o = t._data, s = t._size, u = t._datatype, c = [];
                    if (i.length !== s.length) throw new z.a(i.length, s.length);
                    for (var f, l = 0; l < i.length; l++) {
                        if (i[l] !== s[l]) throw new RangeError("Dimension mismatch. Matrix A (" + i + ") must match Matrix B (" + s + ")");
                        c[l] = i[l]
                    }
                    var p = r;
                    "string" == typeof a && a === u && (f = a, p = h.find(r, [f, f]));
                    var m = 0 < c.length ? function e(t, r, n, i, a, o) {
                        var s = [];
                        if (r === n.length - 1) for (var u = 0; u < i; u++) s[u] = t(a[u], o[u]); else for (var c = 0; c < i; c++) s[c] = e(t, r + 1, n, n[r + 1], a[c], o[c]);
                        return s
                    }(p, 0, c, c[0], n, o) : [];
                    return e.createDenseMatrix({data: m, size: c, datatype: f})
                }
            }), Yt = ["typed"], Xt = Object(s.a)("algorithm14", Yt, function (e) {
                var f = e.typed;
                return function (e, t, r, n) {
                    var i, a = e._data, o = e._size, s = e._datatype, u = r;
                    "string" == typeof s && (i = s, t = f.convert(t, i), u = f.find(r, [i, i]));
                    var c = 0 < o.length ? function e(t, r, n, i, a, o, s) {
                        var u = [];
                        if (r === n.length - 1) for (var c = 0; c < i; c++) u[c] = s ? t(o, a[c]) : t(a[c], o); else for (var f = 0; f < i; f++) u[f] = e(t, r + 1, n, n[r + 1], a[f], o, s);
                        return u
                    }(u, 0, o, o[0], a, t, n) : [];
                    return e.createDenseMatrix({data: c, size: Object(ae.a)(o), datatype: i})
                }
            }), Qt = ["typed", "matrix", "equalScalar", "BigNumber", "DenseMatrix"],
            Kt = Object(s.a)("gcd", Qt, function (e) {
                var t = e.typed, r = e.matrix, n = e.equalScalar, i = e.BigNumber, a = e.DenseMatrix,
                    o = Ht({typed: t}), s = Gt({typed: t, equalScalar: n}), u = Vt({typed: t, DenseMatrix: a}),
                    c = Wt({typed: t}), f = Xt({typed: t}), l = t("gcd", {
                        "number, number": rt,
                        "BigNumber, BigNumber": function (e, t) {
                            if (!e.isInt() || !t.isInt()) throw new Error("Parameters in function gcd must be integer numbers");
                            var r = new i(0);
                            for (; !t.isZero();) {
                                var n = e.mod(t);
                                e = t, t = n
                            }
                            return e.lt(r) ? e.neg() : e
                        },
                        "Fraction, Fraction": function (e, t) {
                            return e.gcd(t)
                        },
                        "SparseMatrix, SparseMatrix": function (e, t) {
                            return s(e, t, l)
                        },
                        "SparseMatrix, DenseMatrix": function (e, t) {
                            return o(t, e, l, !0)
                        },
                        "DenseMatrix, SparseMatrix": function (e, t) {
                            return o(e, t, l, !1)
                        },
                        "DenseMatrix, DenseMatrix": function (e, t) {
                            return c(e, t, l)
                        },
                        "Array, Array": function (e, t) {
                            return l(r(e), r(t)).valueOf()
                        },
                        "Array, Matrix": function (e, t) {
                            return l(r(e), t)
                        },
                        "Matrix, Array": function (e, t) {
                            return l(e, r(t))
                        },
                        "SparseMatrix, number | BigNumber": function (e, t) {
                            return u(e, t, l, !1)
                        },
                        "DenseMatrix, number | BigNumber": function (e, t) {
                            return f(e, t, l, !1)
                        },
                        "number | BigNumber, SparseMatrix": function (e, t) {
                            return u(t, e, l, !0)
                        },
                        "number | BigNumber, DenseMatrix": function (e, t) {
                            return f(t, e, l, !0)
                        },
                        "Array, number | BigNumber": function (e, t) {
                            return f(r(e), t, l, !1).valueOf()
                        },
                        "number | BigNumber, Array": function (e, t) {
                            return f(r(t), e, l, !0).valueOf()
                        },
                        "Array | Matrix | number | BigNumber, Array | Matrix | number | BigNumber, ...Array | Matrix | number | BigNumber": function (e, t, r) {
                            for (var n = l(e, t), i = 0; i < r.length; i++) n = l(n, r[i]);
                            return n
                        }
                    });
                return l
            }), er = ["typed", "equalScalar"], tr = Object(s.a)("algorithm02", er, function (e) {
                var S = e.typed, A = e.equalScalar;
                return function (e, t, r, n) {
                    var i = e._data, a = e._size, o = e._datatype, s = t._values, u = t._index, c = t._ptr, f = t._size,
                        l = t._datatype;
                    if (a.length !== f.length) throw new z.a(a.length, f.length);
                    if (a[0] !== f[0] || a[1] !== f[1]) throw new RangeError("Dimension mismatch. Matrix A (" + a + ") must match Matrix B (" + f + ")");
                    if (!s) throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
                    var p, m = a[0], h = a[1], d = A, y = 0, g = r;
                    "string" == typeof o && o === l && (p = o, d = S.find(A, [p, p]), y = S.convert(0, p), g = S.find(r, [p, p]));
                    for (var v = [], b = [], x = [], w = 0; w < h; w++) {
                        x[w] = b.length;
                        for (var N = c[w], O = c[w + 1], M = N; M < O; M++) {
                            var j = u[M], E = n ? g(s[M], i[j][w]) : g(i[j][w], s[M]);
                            d(E, y) || (b.push(j), v.push(E))
                        }
                    }
                    return x[h] = b.length, t.createSparseMatrix({values: v, index: b, ptr: x, size: [m, h], datatype: p})
                }
            }), rr = ["typed", "equalScalar"], nr = Object(s.a)("algorithm06", rr, function (e) {
                var S = e.typed, A = e.equalScalar;
                return function (e, t, r) {
                    var n = e._values, i = e._size, a = e._datatype, o = t._values, s = t._size, u = t._datatype;
                    if (i.length !== s.length) throw new z.a(i.length, s.length);
                    if (i[0] !== s[0] || i[1] !== s[1]) throw new RangeError("Dimension mismatch. Matrix A (" + i + ") must match Matrix B (" + s + ")");
                    var c, f = i[0], l = i[1], p = A, m = 0, h = r;
                    "string" == typeof a && a === u && (c = a, p = S.find(A, [c, c]), m = S.convert(0, c), h = S.find(r, [c, c]));
                    for (var d = n && o ? [] : void 0, y = [], g = [], v = d ? [] : void 0, b = [], x = [], w = 0; w < l; w++) {
                        g[w] = y.length;
                        var N = w + 1;
                        if (H(e, w, b, v, x, N, y, h), H(t, w, b, v, x, N, y, h), v) for (var O = g[w]; O < y.length;) {
                            var M, j = y[O];
                            x[j] !== N || p(M = v[j], m) ? y.splice(O, 1) : (d.push(M), O++)
                        } else for (var E = g[w]; E < y.length;) {
                            x[y[E]] !== N ? y.splice(E, 1) : E++
                        }
                    }
                    return g[l] = y.length, e.createSparseMatrix({values: d, index: y, ptr: g, size: [f, l], datatype: c})
                }
            }), ir = ["typed", "equalScalar"], ar = Object(s.a)("algorithm11", ir, function (e) {
                var M = e.typed, j = e.equalScalar;
                return function (e, t, r, n) {
                    var i = e._values, a = e._index, o = e._ptr, s = e._size, u = e._datatype;
                    if (!i) throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
                    var c, f = s[0], l = s[1], p = j, m = 0, h = r;
                    "string" == typeof u && (c = u, p = M.find(j, [c, c]), m = M.convert(0, c), t = M.convert(t, c), h = M.find(r, [c, c]));
                    for (var d = [], y = [], g = [], v = 0; v < l; v++) {
                        g[v] = y.length;
                        for (var b = o[v], x = o[v + 1], w = b; w < x; w++) {
                            var N = a[w], O = n ? h(t, i[w]) : h(i[w], t);
                            p(O, m) || (y.push(N), d.push(O))
                        }
                    }
                    return g[l] = y.length, e.createSparseMatrix({values: d, index: y, ptr: g, size: [f, l], datatype: c})
                }
            }), or = ["typed", "matrix", "equalScalar"], sr = Object(s.a)("lcm", or, function (e) {
                var t = e.typed, r = e.matrix, n = e.equalScalar, i = tr({typed: t, equalScalar: n}),
                    a = nr({typed: t, equalScalar: n}), o = ar({typed: t, equalScalar: n}), s = Wt({typed: t}),
                    u = Xt({typed: t}), c = t("lcm", {
                        "number, number": nt,
                        "BigNumber, BigNumber": function (e, t) {
                            if (!e.isInt() || !t.isInt()) throw new Error("Parameters in function lcm must be integer numbers");
                            if (e.isZero()) return e;
                            if (t.isZero()) return t;
                            var r = e.times(t);
                            for (; !t.isZero();) {
                                var n = t;
                                t = e.mod(n), e = n
                            }
                            return r.div(e).abs()
                        },
                        "Fraction, Fraction": function (e, t) {
                            return e.lcm(t)
                        },
                        "SparseMatrix, SparseMatrix": function (e, t) {
                            return a(e, t, c)
                        },
                        "SparseMatrix, DenseMatrix": function (e, t) {
                            return i(t, e, c, !0)
                        },
                        "DenseMatrix, SparseMatrix": function (e, t) {
                            return i(e, t, c, !1)
                        },
                        "DenseMatrix, DenseMatrix": function (e, t) {
                            return s(e, t, c)
                        },
                        "Array, Array": function (e, t) {
                            return c(r(e), r(t)).valueOf()
                        },
                        "Array, Matrix": function (e, t) {
                            return c(r(e), t)
                        },
                        "Matrix, Array": function (e, t) {
                            return c(e, r(t))
                        },
                        "SparseMatrix, number | BigNumber": function (e, t) {
                            return o(e, t, c, !1)
                        },
                        "DenseMatrix, number | BigNumber": function (e, t) {
                            return u(e, t, c, !1)
                        },
                        "number | BigNumber, SparseMatrix": function (e, t) {
                            return o(t, e, c, !0)
                        },
                        "number | BigNumber, DenseMatrix": function (e, t) {
                            return u(t, e, c, !0)
                        },
                        "Array, number | BigNumber": function (e, t) {
                            return u(r(e), t, c, !1).valueOf()
                        },
                        "number | BigNumber, Array": function (e, t) {
                            return u(r(t), e, c, !0).valueOf()
                        },
                        "Array | Matrix | number | BigNumber, Array | Matrix | number | BigNumber, ...Array | Matrix | number | BigNumber": function (e, t, r) {
                            for (var n = c(e, t), i = 0; i < r.length; i++) n = c(n, r[i]);
                            return n
                        }
                    });
                return c
            }), ur = ["typed", "config", "Complex"], cr = Object(s.a)("log10", ur, function (e) {
                var t = e.typed, r = e.config, n = e.Complex, i = t("log10", {
                    number: function (e) {
                        return 0 <= e || r.predictable ? at(e) : new n(e, 0).log().div(Math.LN10)
                    }, Complex: function (e) {
                        return new n(e).log().div(Math.LN10)
                    }, BigNumber: function (e) {
                        return !e.isNegative() || r.predictable ? e.log() : new n(e.toNumber(), 0).log().div(Math.LN10)
                    }, "Array | Matrix": function (e) {
                        return oe(e, i)
                    }
                });
                return i
            }), fr = ["typed", "config", "Complex"], lr = Object(s.a)("log2", fr, function (e) {
                var t = e.typed, r = e.config, n = e.Complex, i = t("log2", {
                    number: function (e) {
                        return 0 <= e || r.predictable ? ot(e) : a(new n(e, 0))
                    }, Complex: a, BigNumber: function (e) {
                        return !e.isNegative() || r.predictable ? e.log(2) : a(new n(e.toNumber(), 0))
                    }, "Array | Matrix": function (e) {
                        return oe(e, i)
                    }
                });

                function a(e) {
                    var t = Math.sqrt(e.re * e.re + e.im * e.im);
                    return new n(Math.log2 ? Math.log2(t) : Math.log(t) / Math.LN2, Math.atan2(e.im, e.re) / Math.LN2)
                }

                return i
            }), pr = ["typed"], mr = Object(s.a)("algorithm03", pr, function (e) {
                var A = e.typed;
                return function (e, t, r, n) {
                    var i = e._data, a = e._size, o = e._datatype, s = t._values, u = t._index, c = t._ptr, f = t._size,
                        l = t._datatype;
                    if (a.length !== f.length) throw new z.a(a.length, f.length);
                    if (a[0] !== f[0] || a[1] !== f[1]) throw new RangeError("Dimension mismatch. Matrix A (" + a + ") must match Matrix B (" + f + ")");
                    if (!s) throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
                    var p, m = a[0], h = a[1], d = 0, y = r;
                    "string" == typeof o && o === l && (p = o, d = A.convert(0, p), y = A.find(r, [p, p]));
                    for (var g = [], v = 0; v < m; v++) g[v] = [];
                    for (var b = [], x = [], w = 0; w < h; w++) {
                        for (var N = w + 1, O = c[w], M = c[w + 1], j = O; j < M; j++) {
                            var E = u[j];
                            b[E] = n ? y(s[j], i[E][w]) : y(i[E][w], s[j]), x[E] = N
                        }
                        for (var S = 0; S < m; S++) x[S] === N ? g[S][w] = b[S] : g[S][w] = n ? y(d, i[S][w]) : y(i[S][w], d)
                    }
                    return e.createDenseMatrix({data: g, size: [m, h], datatype: p})
                }
            }), hr = ["typed", "equalScalar"], dr = Object(s.a)("algorithm05", hr, function (e) {
                var k = e.typed, B = e.equalScalar;
                return function (e, t, r) {
                    var n = e._values, i = e._index, a = e._ptr, o = e._size, s = e._datatype, u = t._values, c = t._index,
                        f = t._ptr, l = t._size, p = t._datatype;
                    if (o.length !== l.length) throw new z.a(o.length, l.length);
                    if (o[0] !== l[0] || o[1] !== l[1]) throw new RangeError("Dimension mismatch. Matrix A (" + o + ") must match Matrix B (" + l + ")");
                    var m, h = o[0], d = o[1], y = B, g = 0, v = r;
                    "string" == typeof s && s === p && (m = s, y = k.find(B, [m, m]), g = k.convert(0, m), v = k.find(r, [m, m]));
                    for (var b, x = n && u ? [] : void 0, w = [], N = [], O = x ? [] : void 0, M = x ? [] : void 0, j = [], E = [], S = 0; S < d; S++) {
                        N[S] = w.length;
                        for (var A = S + 1, C = a[S], T = a[S + 1]; C < T; C++) b = i[C], w.push(b), j[b] = A, O && (O[b] = n[C]);
                        for (C = f[S], T = f[S + 1]; C < T; C++) j[b = c[C]] !== A && w.push(b), E[b] = A, M && (M[b] = u[C]);
                        if (x) for (C = N[S]; C < w.length;) {
                            var _, q = j[b = w[C]], I = E[b];
                            q !== A && I !== A || (y(_ = v(q === A ? O[b] : g, I === A ? M[b] : g), g) ? w.splice(C, 1) : (x.push(_), C++))
                        }
                    }
                    return N[d] = w.length, e.createSparseMatrix({values: x, index: w, ptr: N, size: [h, d], datatype: m})
                }
            }), yr = ["typed", "DenseMatrix"], gr = Object(s.a)("algorithm12", yr, function (e) {
                var O = e.typed, M = e.DenseMatrix;
                return function (e, t, r, n) {
                    var i = e._values, a = e._index, o = e._ptr, s = e._size, u = e._datatype;
                    if (!i) throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
                    var c, f = s[0], l = s[1], p = r;
                    "string" == typeof u && (c = u, t = O.convert(t, c), p = O.find(r, [c, c]));
                    for (var m = [], h = [], d = [], y = 0; y < l; y++) {
                        for (var g = y + 1, v = o[y], b = o[y + 1], x = v; x < b; x++) {
                            var w = a[x];
                            h[w] = i[x], d[w] = g
                        }
                        for (var N = 0; N < f; N++) 0 === y && (m[N] = []), d[N] === g ? m[N][y] = n ? p(t, h[N]) : p(h[N], t) : m[N][y] = n ? p(t, 0) : p(0, t)
                    }
                    return new M({data: m, size: [f, l], datatype: c})
                }
            }), vr = ["typed", "matrix", "equalScalar", "DenseMatrix"], br = Object(s.a)("mod", vr, function (e) {
                var t = e.typed, r = e.matrix, n = e.equalScalar, i = e.DenseMatrix, a = tr({typed: t, equalScalar: n}),
                    o = mr({typed: t}), s = dr({typed: t, equalScalar: n}), u = ar({typed: t, equalScalar: n}),
                    c = gr({typed: t, DenseMatrix: i}), f = Wt({typed: t}), l = Xt({typed: t}), p = t("mod", {
                        "number, number": st, "BigNumber, BigNumber": function (e, t) {
                            return t.isZero() ? e : e.mod(t)
                        }, "Fraction, Fraction": function (e, t) {
                            return e.mod(t)
                        }, "SparseMatrix, SparseMatrix": function (e, t) {
                            return s(e, t, p, !1)
                        }, "SparseMatrix, DenseMatrix": function (e, t) {
                            return a(t, e, p, !0)
                        }, "DenseMatrix, SparseMatrix": function (e, t) {
                            return o(e, t, p, !1)
                        }, "DenseMatrix, DenseMatrix": function (e, t) {
                            return f(e, t, p)
                        }, "Array, Array": function (e, t) {
                            return p(r(e), r(t)).valueOf()
                        }, "Array, Matrix": function (e, t) {
                            return p(r(e), t)
                        }, "Matrix, Array": function (e, t) {
                            return p(e, r(t))
                        }, "SparseMatrix, any": function (e, t) {
                            return u(e, t, p, !1)
                        }, "DenseMatrix, any": function (e, t) {
                            return l(e, t, p, !1)
                        }, "any, SparseMatrix": function (e, t) {
                            return c(t, e, p, !0)
                        }, "any, DenseMatrix": function (e, t) {
                            return l(t, e, p, !0)
                        }, "Array, any": function (e, t) {
                            return l(r(e), t, p, !1).valueOf()
                        }, "any, Array": function (e, t) {
                            return l(r(t), e, p, !0).valueOf()
                        }
                    });
                return p
            }), xr = ["typed"], wr = Object(s.a)("multiplyScalar", xr, function (e) {
                var n = (0, e.typed)("multiplyScalar", {
                    "number, number": Je, "Complex, Complex": function (e, t) {
                        return e.mul(t)
                    }, "BigNumber, BigNumber": function (e, t) {
                        return e.times(t)
                    }, "Fraction, Fraction": function (e, t) {
                        return e.mul(t)
                    }, "number | Fraction | BigNumber | Complex, Unit": function (e, t) {
                        var r = t.clone();
                        return r.value = null === r.value ? r._normalize(e) : n(r.value, e), r
                    }, "Unit, number | Fraction | BigNumber | Complex": function (e, t) {
                        var r = e.clone();
                        return r.value = null === r.value ? r._normalize(t) : n(r.value, t), r
                    }, "Unit, Unit": function (e, t) {
                        return e.multiply(t)
                    }
                });
                return n
            }), Nr = "multiply", Or = ["typed", "matrix", "addScalar", "multiplyScalar", "equalScalar", "dot"],
            Mr = Object(s.a)(Nr, Or, function (e) {
                var z = e.typed, n = e.matrix, D = e.addScalar, R = e.multiplyScalar, k = e.equalScalar, i = e.dot,
                    r = ar({typed: z, equalScalar: k}), a = Xt({typed: z}), o = z(Nr, Object(ae.e)({
                        "Array, Array": function (e, t) {
                            s(Object(q.a)(e), Object(q.a)(t));
                            var r = o(n(e), n(t));
                            return Object(ie.v)(r) ? r.valueOf() : r
                        }, "Matrix, Matrix": function (e, t) {
                            var r = e.size(), n = t.size();
                            return s(r, n), 1 === r.length ? 1 === n.length ? function (e, t, r) {
                                if (0 !== r) return i(e, t);
                                throw new Error("Cannot multiply two empty vectors")
                            }(e, t, r[0]) : function (e, t) {
                                if ("dense" === t.storage()) return function (e, t) {
                                    var r, n = e._data, i = e._size, a = e._datatype, o = t._data, s = t._size,
                                        u = t._datatype, c = i[0], f = s[1], l = D, p = R;
                                    a && u && a === u && "string" == typeof a && (r = a, l = z.find(D, [r, r]), p = z.find(R, [r, r]));
                                    for (var m = [], h = 0; h < f; h++) {
                                        for (var d = p(n[0], o[0][h]), y = 1; y < c; y++) d = l(d, p(n[y], o[y][h]));
                                        m[h] = d
                                    }
                                    return e.createDenseMatrix({data: m, size: [f], datatype: r})
                                }(e, t);
                                throw new Error("Support for SparseMatrix not implemented")
                            }(e, t) : (1 === n.length ? u : c)(e, t)
                        }, "Matrix, Array": function (e, t) {
                            return o(e, n(t))
                        }, "Array, Matrix": function (e, t) {
                            return o(n(e, t.storage()), t)
                        }, "SparseMatrix, any": function (e, t) {
                            return r(e, t, R, !1)
                        }, "DenseMatrix, any": function (e, t) {
                            return a(e, t, R, !1)
                        }, "any, SparseMatrix": function (e, t) {
                            return r(t, e, R, !0)
                        }, "any, DenseMatrix": function (e, t) {
                            return a(t, e, R, !0)
                        }, "Array, any": function (e, t) {
                            return a(n(e), t, R, !1).valueOf()
                        }, "any, Array": function (e, t) {
                            return a(n(t), e, R, !0).valueOf()
                        }, "any, any": R, "any, any, ...any": function (e, t, r) {
                            for (var n = o(e, t), i = 0; i < r.length; i++) n = o(n, r[i]);
                            return n
                        }
                    }, R.signatures));

                function s(e, t) {
                    switch (e.length) {
                        case 1:
                            switch (t.length) {
                                case 1:
                                    if (e[0] !== t[0]) throw new RangeError("Dimension mismatch in multiplication. Vectors must have the same length");
                                    break;
                                case 2:
                                    if (e[0] !== t[0]) throw new RangeError("Dimension mismatch in multiplication. Vector length (" + e[0] + ") must match Matrix rows (" + t[0] + ")");
                                    break;
                                default:
                                    throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + t.length + " dimensions)")
                            }
                            break;
                        case 2:
                            switch (t.length) {
                                case 1:
                                    if (e[1] !== t[0]) throw new RangeError("Dimension mismatch in multiplication. Matrix columns (" + e[1] + ") must match Vector length (" + t[0] + ")");
                                    break;
                                case 2:
                                    if (e[1] !== t[0]) throw new RangeError("Dimension mismatch in multiplication. Matrix A columns (" + e[1] + ") must match Matrix B rows (" + t[0] + ")");
                                    break;
                                default:
                                    throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + t.length + " dimensions)")
                            }
                            break;
                        default:
                            throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix A has " + e.length + " dimensions)")
                    }
                }

                var u = z("_multiplyMatrixVector", {
                    "DenseMatrix, any": function (e, t) {
                        var r, n = e._data, i = e._size, a = e._datatype, o = t._data, s = t._datatype, u = i[0],
                            c = i[1], f = D, l = R;
                        a && s && a === s && "string" == typeof a && (r = a, f = z.find(D, [r, r]), l = z.find(R, [r, r]));
                        for (var p = [], m = 0; m < u; m++) {
                            for (var h = n[m], d = l(h[0], o[0]), y = 1; y < c; y++) d = f(d, l(h[y], o[y]));
                            p[m] = d
                        }
                        return e.createDenseMatrix({data: p, size: [u], datatype: r})
                    }, "SparseMatrix, any": function (e, t) {
                        var r = e._values, n = e._index, i = e._ptr, a = e._datatype;
                        if (!r) throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
                        var o, s = t._data, u = t._datatype, c = e._size[0], f = t._size[0], l = [], p = [], m = [],
                            h = D, d = R, y = k, g = 0;
                        a && u && a === u && "string" == typeof a && (o = a, h = z.find(D, [o, o]), d = z.find(R, [o, o]), y = z.find(k, [o, o]), g = z.convert(0, o));
                        for (var v = [], b = [], x = m[0] = 0; x < f; x++) {
                            var w = s[x];
                            if (!y(w, g)) for (var N = i[x], O = i[x + 1], M = N; M < O; M++) {
                                var j = n[M];
                                b[j] ? v[j] = h(v[j], d(w, r[M])) : (b[j] = !0, p.push(j), v[j] = d(w, r[M]))
                            }
                        }
                        for (var E = p.length, S = 0; S < E; S++) {
                            var A = p[S];
                            l[S] = v[A]
                        }
                        return m[1] = p.length, e.createSparseMatrix({
                            values: l,
                            index: p,
                            ptr: m,
                            size: [c, 1],
                            datatype: o
                        })
                    }
                }), c = z("_multiplyMatrixMatrix", {
                    "DenseMatrix, DenseMatrix": function (e, t) {
                        var r, n = e._data, i = e._size, a = e._datatype, o = t._data, s = t._size, u = t._datatype,
                            c = i[0], f = i[1], l = s[1], p = D, m = R;
                        a && u && a === u && "string" == typeof a && (r = a, p = z.find(D, [r, r]), m = z.find(R, [r, r]));
                        for (var h = [], d = 0; d < c; d++) {
                            var y = n[d];
                            h[d] = [];
                            for (var g = 0; g < l; g++) {
                                for (var v = m(y[0], o[0][g]), b = 1; b < f; b++) v = p(v, m(y[b], o[b][g]));
                                h[d][g] = v
                            }
                        }
                        return e.createDenseMatrix({data: h, size: [c, l], datatype: r})
                    }, "DenseMatrix, SparseMatrix": function (e, t) {
                        var r = e._data, n = e._size, i = e._datatype, a = t._values, o = t._index, s = t._ptr,
                            u = t._size, c = t._datatype;
                        if (!a) throw new Error("Cannot multiply Dense Matrix times Pattern only Matrix");
                        var f, l = n[0], p = u[1], m = D, h = R, d = k, y = 0;
                        i && c && i === c && "string" == typeof i && (f = i, m = z.find(D, [f, f]), h = z.find(R, [f, f]), d = z.find(k, [f, f]), y = z.convert(0, f));
                        for (var g = [], v = [], b = [], x = t.createSparseMatrix({
                            values: g,
                            index: v,
                            ptr: b,
                            size: [l, p],
                            datatype: f
                        }), w = 0; w < p; w++) {
                            b[w] = v.length;
                            var N = s[w], O = s[w + 1];
                            if (N < O) for (var M = 0, j = 0; j < l; j++) {
                                for (var E = j + 1, S = void 0, A = N; A < O; A++) {
                                    var C = o[A];
                                    M !== E ? (S = h(r[j][C], a[A]), M = E) : S = m(S, h(r[j][C], a[A]))
                                }
                                M !== E || d(S, y) || (v.push(j), g.push(S))
                            }
                        }
                        return b[p] = v.length, x
                    }, "SparseMatrix, DenseMatrix": function (e, t) {
                        var r = e._values, n = e._index, i = e._ptr, a = e._datatype;
                        if (!r) throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
                        var o, s = t._data, u = t._datatype, c = e._size[0], f = t._size[0], l = t._size[1], p = D,
                            m = R, h = k, d = 0;
                        a && u && a === u && "string" == typeof a && (o = a, p = z.find(D, [o, o]), m = z.find(R, [o, o]), h = z.find(k, [o, o]), d = z.convert(0, o));
                        for (var y = [], g = [], v = [], b = e.createSparseMatrix({
                            values: y,
                            index: g,
                            ptr: v,
                            size: [c, l],
                            datatype: o
                        }), x = [], w = [], N = 0; N < l; N++) {
                            v[N] = g.length;
                            for (var O = N + 1, M = 0; M < f; M++) {
                                var j = s[M][N];
                                if (!h(j, d)) for (var E = i[M], S = i[M + 1], A = E; A < S; A++) {
                                    var C = n[A];
                                    w[C] !== O ? (w[C] = O, g.push(C), x[C] = m(j, r[A])) : x[C] = p(x[C], m(j, r[A]))
                                }
                            }
                            for (var T = v[N], _ = g.length, q = T; q < _; q++) {
                                var I = g[q];
                                y[q] = x[I]
                            }
                        }
                        return v[l] = g.length, b
                    }, "SparseMatrix, SparseMatrix": function (e, t) {
                        var r, n = e._values, i = e._index, a = e._ptr, o = e._datatype, s = t._values, u = t._index,
                            c = t._ptr, f = t._datatype, l = e._size[0], p = t._size[1], m = n && s, h = D, d = R;
                        o && f && o === f && "string" == typeof o && (r = o, h = z.find(D, [r, r]), d = z.find(R, [r, r]));
                        for (var y, g, v, b, x, w, N, O, M = m ? [] : void 0, j = [], E = [], S = e.createSparseMatrix({
                            values: M,
                            index: j,
                            ptr: E,
                            size: [l, p],
                            datatype: r
                        }), A = m ? [] : void 0, C = [], T = 0; T < p; T++) {
                            E[T] = j.length;
                            var _ = T + 1;
                            for (x = c[T], w = c[T + 1], b = x; b < w; b++) if (O = u[b], m) for (g = a[O], v = a[O + 1], y = g; y < v; y++) N = i[y], C[N] !== _ ? (C[N] = _, j.push(N), A[N] = d(s[b], n[y])) : A[N] = h(A[N], d(s[b], n[y])); else for (g = a[O], v = a[O + 1], y = g; y < v; y++) N = i[y], C[N] !== _ && (C[N] = _, j.push(N));
                            if (m) for (var q = E[T], I = j.length, k = q; k < I; k++) {
                                var B = j[k];
                                M[k] = A[B]
                            }
                        }
                        return E[p] = j.length, S
                    }
                });
                return o
            }), jr = "nthRoot", Er = ["typed", "matrix", "equalScalar", "BigNumber"],
            Sr = Object(s.a)(jr, Er, function (e) {
                var t = e.typed, r = e.matrix, n = e.equalScalar, u = e.BigNumber, i = Ht({typed: t}),
                    a = tr({typed: t, equalScalar: n}), o = nr({typed: t, equalScalar: n}),
                    s = ar({typed: t, equalScalar: n}), c = Wt({typed: t}), f = Xt({typed: t}),
                    l = "Complex number not supported in function nthRoot. Use nthRoots instead.", p = t(jr, {
                        number: function (e) {
                            return ut(e, 2)
                        }, "number, number": ut, BigNumber: function (e) {
                            return m(e, new u(2))
                        }, Complex: function () {
                            throw new Error(l)
                        }, "Complex, number": function () {
                            throw new Error(l)
                        }, "BigNumber, BigNumber": m, "Array | Matrix": function (e) {
                            return p(e, 2)
                        }, "SparseMatrix, SparseMatrix": function (e, t) {
                            if (1 === t.density()) return o(e, t, p);
                            throw new Error("Root must be non-zero")
                        }, "SparseMatrix, DenseMatrix": function (e, t) {
                            return a(t, e, p, !0)
                        }, "DenseMatrix, SparseMatrix": function (e, t) {
                            if (1 === t.density()) return i(e, t, p, !1);
                            throw new Error("Root must be non-zero")
                        }, "DenseMatrix, DenseMatrix": function (e, t) {
                            return c(e, t, p)
                        }, "Array, Array": function (e, t) {
                            return p(r(e), r(t)).valueOf()
                        }, "Array, Matrix": function (e, t) {
                            return p(r(e), t)
                        }, "Matrix, Array": function (e, t) {
                            return p(e, r(t))
                        }, "SparseMatrix, number | BigNumber": function (e, t) {
                            return s(e, t, p, !1)
                        }, "DenseMatrix, number | BigNumber": function (e, t) {
                            return f(e, t, p, !1)
                        }, "number | BigNumber, SparseMatrix": function (e, t) {
                            if (1 === t.density()) return s(t, e, p, !0);
                            throw new Error("Root must be non-zero")
                        }, "number | BigNumber, DenseMatrix": function (e, t) {
                            return f(t, e, p, !0)
                        }, "Array, number | BigNumber": function (e, t) {
                            return p(r(e), t).valueOf()
                        }, "number | BigNumber, Array": function (e, t) {
                            return p(e, r(t)).valueOf()
                        }
                    });
                return p;

                function m(e, t) {
                    var r = u.precision, n = u.clone({precision: r + 2}), i = new u(0), a = new n(1),
                        o = t.isNegative();
                    if (o && (t = t.neg()), t.isZero()) throw new Error("Root must be non-zero");
                    if (e.isNegative() && !t.abs().mod(2).equals(1)) throw new Error("Root must be odd when a is negative.");
                    if (e.isZero()) return o ? new n(1 / 0) : 0;
                    if (!e.isFinite()) return o ? i : e;
                    var s = e.abs().pow(a.div(t)), s = e.isNeg() ? s.neg() : s;
                    return new u((o ? a.div(s) : s).toPrecision(r))
                }
            }), Ar = ["typed", "BigNumber", "Fraction", "complex"], Cr = Object(s.a)("sign", Ar, function (e) {
                var t = e.typed, r = e.BigNumber, n = e.complex, i = e.Fraction, a = t("sign", {
                    number: ct, Complex: function (e) {
                        return 0 === e.im ? n(ct(e.re)) : e.sign()
                    }, BigNumber: function (e) {
                        return new r(e.cmp(0))
                    }, Fraction: function (e) {
                        return new i(e.s, 1)
                    }, "Array | Matrix": function (e) {
                        return oe(e, a, !0)
                    }, Unit: function (e) {
                        return a(e.value)
                    }
                });
                return a
            }), Tr = ["config", "typed", "Complex"], _r = Object(s.a)("sqrt", Tr, function (e) {
                var t = e.config, r = e.typed, n = e.Complex, i = r("sqrt", {
                    number: a, Complex: function (e) {
                        return e.sqrt()
                    }, BigNumber: function (e) {
                        return !e.isNegative() || t.predictable ? e.sqrt() : a(e.toNumber())
                    }, "Array | Matrix": function (e) {
                        return oe(e, i, !0)
                    }, Unit: function (e) {
                        return e.pow(.5)
                    }
                });

                function a(e) {
                    return isNaN(e) ? NaN : 0 <= e || t.predictable ? Math.sqrt(e) : new n(e, 0).sqrt()
                }

                return i
            }), qr = ["typed"], Ir = Object(s.a)("square", qr, function (e) {
                var t = (0, e.typed)("square", {
                    number: ft, Complex: function (e) {
                        return e.mul(e)
                    }, BigNumber: function (e) {
                        return e.times(e)
                    }, Fraction: function (e) {
                        return e.mul(e)
                    }, "Array | Matrix": function (e) {
                        return oe(e, t, !0)
                    }, Unit: function (e) {
                        return e.pow(2)
                    }
                });
                return t
            }), kr = "subtract", Br = ["typed", "matrix", "equalScalar", "addScalar", "unaryMinus", "DenseMatrix"],
            zr = Object(s.a)(kr, Br, function (e) {
                var t = e.typed, r = e.matrix, n = e.equalScalar, i = e.addScalar, a = e.unaryMinus, o = e.DenseMatrix,
                    s = Ht({typed: t}), u = mr({typed: t}), c = dr({typed: t, equalScalar: n}),
                    f = Vt({typed: t, DenseMatrix: o}), l = Wt({typed: t}), p = Xt({typed: t}), m = t(kr, {
                        "number, number": function (e, t) {
                            return e - t
                        }, "Complex, Complex": function (e, t) {
                            return e.sub(t)
                        }, "BigNumber, BigNumber": function (e, t) {
                            return e.minus(t)
                        }, "Fraction, Fraction": function (e, t) {
                            return e.sub(t)
                        }, "Unit, Unit": function (e, t) {
                            if (null === e.value) throw new Error("Parameter x contains a unit with undefined value");
                            if (null === t.value) throw new Error("Parameter y contains a unit with undefined value");
                            if (!e.equalBase(t)) throw new Error("Units do not match");
                            var r = e.clone();
                            return r.value = m(r.value, t.value), r.fixPrefix = !1, r
                        }, "SparseMatrix, SparseMatrix": function (e, t) {
                            return Dr(e, t), c(e, t, m)
                        }, "SparseMatrix, DenseMatrix": function (e, t) {
                            return Dr(e, t), u(t, e, m, !0)
                        }, "DenseMatrix, SparseMatrix": function (e, t) {
                            return Dr(e, t), s(e, t, m, !1)
                        }, "DenseMatrix, DenseMatrix": function (e, t) {
                            return Dr(e, t), l(e, t, m)
                        }, "Array, Array": function (e, t) {
                            return m(r(e), r(t)).valueOf()
                        }, "Array, Matrix": function (e, t) {
                            return m(r(e), t)
                        }, "Matrix, Array": function (e, t) {
                            return m(e, r(t))
                        }, "SparseMatrix, any": function (e, t) {
                            return f(e, a(t), i)
                        }, "DenseMatrix, any": function (e, t) {
                            return p(e, t, m)
                        }, "any, SparseMatrix": function (e, t) {
                            return f(t, e, m, !0)
                        }, "any, DenseMatrix": function (e, t) {
                            return p(t, e, m, !0)
                        }, "Array, any": function (e, t) {
                            return p(r(e), t, m, !1).valueOf()
                        }, "any, Array": function (e, t) {
                            return p(r(t), e, m, !0).valueOf()
                        }
                    });
                return m
            });

        function Dr(e, t) {
            var r = e.size(), n = t.size();
            if (r.length !== n.length) throw new z.a(r.length, n.length)
        }

        var Rr = ["typed", "config", "matrix", "BigNumber"], Pr = Object(s.a)("xgcd", Rr, function (e) {
                var t = e.typed, p = e.config, m = e.matrix, h = e.BigNumber;
                return t("xgcd", {
                    "number, number": function (e, t) {
                        var r = lt(e, t);
                        return "Array" === p.matrix ? r : m(r)
                    }, "BigNumber, BigNumber": function (e, t) {
                        var r, n, i, a, o = new h(0), s = new h(1), u = o, c = s, f = s, l = o;
                        if (!e.isInt() || !t.isInt()) throw new Error("Parameters in function xgcd must be integer numbers");
                        for (; !t.isZero();) n = e.div(t).floor(), i = e.mod(t), r = u, u = c.minus(n.times(u)), c = r, r = f, f = l.minus(n.times(f)), l = r, e = t, t = i;
                        a = e.lt(o) ? [e.neg(), c.neg(), l.neg()] : [e, e.isZero() ? 0 : c, l];
                        return "Array" === p.matrix ? a : m(a)
                    }
                })
            }), Ur = ["typed", "equalScalar"], Fr = Object(s.a)("algorithm09", Ur, function (e) {
                var q = e.typed, I = e.equalScalar;
                return function (e, t, r) {
                    var n = e._values, i = e._index, a = e._ptr, o = e._size, s = e._datatype, u = t._values, c = t._index,
                        f = t._ptr, l = t._size, p = t._datatype;
                    if (o.length !== l.length) throw new z.a(o.length, l.length);
                    if (o[0] !== l[0] || o[1] !== l[1]) throw new RangeError("Dimension mismatch. Matrix A (" + o + ") must match Matrix B (" + l + ")");
                    var m, h = o[0], d = o[1], y = I, g = 0, v = r;
                    "string" == typeof s && s === p && (m = s, y = q.find(I, [m, m]), g = q.convert(0, m), v = q.find(r, [m, m]));
                    for (var b, x, w, N = n && u ? [] : void 0, O = [], M = [], j = N ? [] : void 0, E = [], S = 0; S < d; S++) {
                        M[S] = O.length;
                        var A = S + 1;
                        if (j) for (x = f[S], w = f[S + 1], b = x; b < w; b++) E[_ = c[b]] = A, j[_] = u[b];
                        for (x = a[S], w = a[S + 1], b = x; b < w; b++) {
                            var C, T, _ = i[b];
                            j ? (C = E[_] === A ? j[_] : g, y(T = v(n[b], C), g) || (O.push(_), N.push(T))) : O.push(_)
                        }
                    }
                    return M[d] = O.length, e.createSparseMatrix({values: N, index: O, ptr: M, size: [h, d], datatype: m})
                }
            }), Lr = "dotMultiply", Hr = ["typed", "matrix", "equalScalar", "multiplyScalar"],
            $r = Object(s.a)(Lr, Hr, function (e) {
                var t = e.typed, r = e.matrix, n = e.equalScalar, i = e.multiplyScalar,
                    a = tr({typed: t, equalScalar: n}), o = Fr({typed: t, equalScalar: n}),
                    s = ar({typed: t, equalScalar: n}), u = Wt({typed: t}), c = Xt({typed: t}), f = t(Lr, {
                        "any, any": i, "SparseMatrix, SparseMatrix": function (e, t) {
                            return o(e, t, i, !1)
                        }, "SparseMatrix, DenseMatrix": function (e, t) {
                            return a(t, e, i, !0)
                        }, "DenseMatrix, SparseMatrix": function (e, t) {
                            return a(e, t, i, !1)
                        }, "DenseMatrix, DenseMatrix": function (e, t) {
                            return u(e, t, i)
                        }, "Array, Array": function (e, t) {
                            return f(r(e), r(t)).valueOf()
                        }, "Array, Matrix": function (e, t) {
                            return f(r(e), t)
                        }, "Matrix, Array": function (e, t) {
                            return f(e, r(t))
                        }, "SparseMatrix, any": function (e, t) {
                            return s(e, t, i, !1)
                        }, "DenseMatrix, any": function (e, t) {
                            return c(e, t, i, !1)
                        }, "any, SparseMatrix": function (e, t) {
                            return s(t, e, i, !0)
                        }, "any, DenseMatrix": function (e, t) {
                            return c(t, e, i, !0)
                        }, "Array, any": function (e, t) {
                            return c(r(e), t, i, !1).valueOf()
                        }, "any, Array": function (e, t) {
                            return c(r(t), e, i, !0).valueOf()
                        }
                    });
                return f
            });

        function Gr(e, t) {
            if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error("Integers expected in function bitAnd");
            var r = e.constructor;
            if (e.isNaN() || t.isNaN()) return new r(NaN);
            if (e.isZero() || t.eq(-1) || e.eq(t)) return e;
            if (t.isZero() || e.eq(-1)) return t;
            if (!e.isFinite() || !t.isFinite()) {
                if (!e.isFinite() && !t.isFinite()) return e.isNegative() === t.isNegative() ? e : new r(0);
                if (!e.isFinite()) return t.isNegative() ? e : e.isNegative() ? new r(0) : t;
                if (!t.isFinite()) return e.isNegative() ? t : t.isNegative() ? new r(0) : e
            }
            return Jr(e, t, function (e, t) {
                return e & t
            })
        }

        function Zr(e) {
            if (e.isFinite() && !e.isInteger()) throw new Error("Integer expected in function bitNot");
            var t = e.constructor, r = t.precision;
            t.config({precision: 1e9});
            var n = e.plus(new t(1));
            return n.s = -n.s || null, t.config({precision: r}), n
        }

        function Vr(e, t) {
            if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error("Integers expected in function bitOr");
            var r = e.constructor;
            if (e.isNaN() || t.isNaN()) return new r(NaN);
            var n = new r(-1);
            return e.isZero() || t.eq(n) || e.eq(t) ? t : t.isZero() || e.eq(n) ? e : e.isFinite() && t.isFinite() ? Jr(e, t, function (e, t) {
                return e | t
            }) : !e.isFinite() && !e.isNegative() && t.isNegative() || e.isNegative() && !t.isNegative() && !t.isFinite() ? n : e.isNegative() && t.isNegative() ? e.isFinite() ? e : t : e.isFinite() ? t : e
        }

        function Jr(e, t, r) {
            var n, i, a, o, s, u = e.constructor, c = +(e.s < 0), f = +(t.s < 0);
            if (c) {
                n = Wr(Zr(e));
                for (var l = 0; l < n.length; ++l) n[l] ^= 1
            } else n = Wr(e);
            if (f) {
                i = Wr(Zr(t));
                for (var p = 0; p < i.length; ++p) i[p] ^= 1
            } else i = Wr(t);
            s = n.length <= i.length ? (a = n, o = i, c) : (a = i, o = n, f);
            var m = a.length, h = o.length, d = 1 ^ r(c, f), y = new u(1 ^ d), g = new u(1), v = new u(2),
                b = u.precision;
            for (u.config({precision: 1e9}); 0 < m;) r(a[--m], o[--h]) === d && (y = y.plus(g)), g = g.times(v);
            for (; 0 < h;) r(s, o[--h]) === d && (y = y.plus(g)), g = g.times(v);
            return u.config({precision: b}), 0 == d && (y.s = -y.s), y
        }

        function Wr(e) {
            for (var t = e.d, r = t[0] + "", n = 1; n < t.length; ++n) {
                for (var i = t[n] + "", a = 7 - i.length; a--;) i = "0" + i;
                r += i
            }
            for (var o = r.length; "0" === r.charAt(o);) o--;
            var s = e.e, u = r.slice(0, o + 1 || 1), c = u.length;
            if (0 < s) if (++s > c) for (s -= c; s--;) u += "0"; else s < c && (u = u.slice(0, s) + "." + u.slice(s));
            for (var f = [0], l = 0; l < u.length;) {
                for (var p = f.length; p--;) f[p] *= 10;
                f[0] += parseInt(u.charAt(l++));
                for (var m = 0; m < f.length; ++m) 1 < f[m] && (null !== f[m + 1] && void 0 !== f[m + 1] || (f[m + 1] = 0), f[m + 1] += f[m] >> 1, f[m] &= 1)
            }
            return f.reverse()
        }

        function Yr(e, t) {
            if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error("Integers expected in function bitXor");
            var r = e.constructor;
            if (e.isNaN() || t.isNaN()) return new r(NaN);
            if (e.isZero()) return t;
            if (t.isZero()) return e;
            if (e.eq(t)) return new r(0);
            var n = new r(-1);
            return e.eq(n) ? Zr(t) : t.eq(n) ? Zr(e) : e.isFinite() && t.isFinite() ? Jr(e, t, function (e, t) {
                return e ^ t
            }) : e.isFinite() || t.isFinite() ? new r(e.isNegative() === t.isNegative() ? 1 / 0 : -1 / 0) : n
        }

        function Xr(e, t) {
            if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error("Integers expected in function leftShift");
            var r = e.constructor;
            return e.isNaN() || t.isNaN() || t.isNegative() && !t.isZero() ? new r(NaN) : e.isZero() || t.isZero() ? e : e.isFinite() || t.isFinite() ? t.lt(55) ? e.times(Math.pow(2, t.toNumber()) + "") : e.times(new r(2).pow(t)) : new r(NaN)
        }

        function Qr(e, t) {
            if (e.isFinite() && !e.isInteger() || t.isFinite() && !t.isInteger()) throw new Error("Integers expected in function rightArithShift");
            var r = e.constructor;
            return e.isNaN() || t.isNaN() || t.isNegative() && !t.isZero() ? new r(NaN) : e.isZero() || t.isZero() ? e : t.isFinite() ? t.lt(55) ? e.div(Math.pow(2, t.toNumber()) + "").floor() : e.div(new r(2).pow(t)).floor() : e.isNegative() ? new r(-1) : e.isFinite() ? new r(0) : new r(NaN)
        }

        var Kr = "number, number";

        function en(e, t) {
            if (!Object(E.i)(e) || !Object(E.i)(t)) throw new Error("Integers expected in function bitAnd");
            return e & t
        }

        function tn(e) {
            if (!Object(E.i)(e)) throw new Error("Integer expected in function bitNot");
            return ~e
        }

        function rn(e, t) {
            if (!Object(E.i)(e) || !Object(E.i)(t)) throw new Error("Integers expected in function bitOr");
            return e | t
        }

        function nn(e, t) {
            if (!Object(E.i)(e) || !Object(E.i)(t)) throw new Error("Integers expected in function bitXor");
            return e ^ t
        }

        function an(e, t) {
            if (!Object(E.i)(e) || !Object(E.i)(t)) throw new Error("Integers expected in function leftShift");
            return e << t
        }

        function on(e, t) {
            if (!Object(E.i)(e) || !Object(E.i)(t)) throw new Error("Integers expected in function rightArithShift");
            return e >> t
        }

        function sn(e, t) {
            if (!Object(E.i)(e) || !Object(E.i)(t)) throw new Error("Integers expected in function rightLogShift");
            return e >>> t
        }

        en.signature = Kr, tn.signature = "number", sn.signature = on.signature = an.signature = nn.signature = rn.signature = Kr;
        var un = ["typed", "matrix", "equalScalar"], cn = Object(s.a)("bitAnd", un, function (e) {
            var t = e.typed, r = e.matrix, n = e.equalScalar, i = tr({typed: t, equalScalar: n}),
                a = nr({typed: t, equalScalar: n}), o = ar({typed: t, equalScalar: n}), s = Wt({typed: t}),
                u = Xt({typed: t}), c = t("bitAnd", {
                    "number, number": en,
                    "BigNumber, BigNumber": Gr,
                    "SparseMatrix, SparseMatrix": function (e, t) {
                        return a(e, t, c, !1)
                    },
                    "SparseMatrix, DenseMatrix": function (e, t) {
                        return i(t, e, c, !0)
                    },
                    "DenseMatrix, SparseMatrix": function (e, t) {
                        return i(e, t, c, !1)
                    },
                    "DenseMatrix, DenseMatrix": function (e, t) {
                        return s(e, t, c)
                    },
                    "Array, Array": function (e, t) {
                        return c(r(e), r(t)).valueOf()
                    },
                    "Array, Matrix": function (e, t) {
                        return c(r(e), t)
                    },
                    "Matrix, Array": function (e, t) {
                        return c(e, r(t))
                    },
                    "SparseMatrix, any": function (e, t) {
                        return o(e, t, c, !1)
                    },
                    "DenseMatrix, any": function (e, t) {
                        return u(e, t, c, !1)
                    },
                    "any, SparseMatrix": function (e, t) {
                        return o(t, e, c, !0)
                    },
                    "any, DenseMatrix": function (e, t) {
                        return u(t, e, c, !0)
                    },
                    "Array, any": function (e, t) {
                        return u(r(e), t, c, !1).valueOf()
                    },
                    "any, Array": function (e, t) {
                        return u(r(t), e, c, !0).valueOf()
                    }
                });
            return c
        }), fn = ["typed"], ln = Object(s.a)("bitNot", fn, function (e) {
            var t = (0, e.typed)("bitNot", {
                number: tn, BigNumber: Zr, "Array | Matrix": function (e) {
                    return oe(e, t)
                }
            });
            return t
        }), pn = ["typed", "matrix", "equalScalar", "DenseMatrix"], mn = Object(s.a)("bitOr", pn, function (e) {
            var t = e.typed, r = e.matrix, n = e.equalScalar, i = e.DenseMatrix, a = Ht({typed: t}),
                o = Gt({typed: t, equalScalar: n}), s = Vt({typed: t, DenseMatrix: i}), u = Wt({typed: t}),
                c = Xt({typed: t}), f = t("bitOr", {
                    "number, number": rn,
                    "BigNumber, BigNumber": Vr,
                    "SparseMatrix, SparseMatrix": function (e, t) {
                        return o(e, t, f)
                    },
                    "SparseMatrix, DenseMatrix": function (e, t) {
                        return a(t, e, f, !0)
                    },
                    "DenseMatrix, SparseMatrix": function (e, t) {
                        return a(e, t, f, !1)
                    },
                    "DenseMatrix, DenseMatrix": function (e, t) {
                        return u(e, t, f)
                    },
                    "Array, Array": function (e, t) {
                        return f(r(e), r(t)).valueOf()
                    },
                    "Array, Matrix": function (e, t) {
                        return f(r(e), t)
                    },
                    "Matrix, Array": function (e, t) {
                        return f(e, r(t))
                    },
                    "SparseMatrix, any": function (e, t) {
                        return s(e, t, f, !1)
                    },
                    "DenseMatrix, any": function (e, t) {
                        return c(e, t, f, !1)
                    },
                    "any, SparseMatrix": function (e, t) {
                        return s(t, e, f, !0)
                    },
                    "any, DenseMatrix": function (e, t) {
                        return c(t, e, f, !0)
                    },
                    "Array, any": function (e, t) {
                        return c(r(e), t, f, !1).valueOf()
                    },
                    "any, Array": function (e, t) {
                        return c(r(t), e, f, !0).valueOf()
                    }
                });
            return f
        }), hn = ["typed", "DenseMatrix"], dn = Object(s.a)("algorithm07", hn, function (e) {
            var N = e.typed, O = e.DenseMatrix;
            return function (e, t, r) {
                var n = e._size, i = e._datatype, a = t._size, o = t._datatype;
                if (n.length !== a.length) throw new z.a(n.length, a.length);
                if (n[0] !== a[0] || n[1] !== a[1]) throw new RangeError("Dimension mismatch. Matrix A (" + n + ") must match Matrix B (" + a + ")");
                var s, u = n[0], c = n[1], f = 0, l = r;
                "string" == typeof i && i === o && (s = i, f = N.convert(0, s), l = N.find(r, [s, s]));
                for (var p = [], m = 0; m < u; m++) p[m] = [];
                for (var h = [], d = [], y = [], g = [], v = 0; v < c; v++) {
                    var b = v + 1;
                    for (M(e, v, y, h, b), M(t, v, g, d, b), m = 0; m < u; m++) {
                        var x = y[m] === b ? h[m] : f, w = g[m] === b ? d[m] : f;
                        p[m][v] = l(x, w)
                    }
                }
                return new O({data: p, size: [u, c], datatype: s})
            };

            function M(e, t, r, n, i) {
                for (var a = e._values, o = e._index, s = e._ptr, u = s[t], c = s[t + 1]; u < c; u++) {
                    var f = o[u];
                    r[f] = i, n[f] = a[u]
                }
            }
        }), yn = ["typed", "matrix", "DenseMatrix"], gn = Object(s.a)("bitXor", yn, function (e) {
            var t = e.typed, r = e.matrix, n = e.DenseMatrix, i = mr({typed: t}), a = dn({typed: t, DenseMatrix: n}),
                o = gr({typed: t, DenseMatrix: n}), s = Wt({typed: t}), u = Xt({typed: t}), c = t("bitXor", {
                    "number, number": nn,
                    "BigNumber, BigNumber": Yr,
                    "SparseMatrix, SparseMatrix": function (e, t) {
                        return a(e, t, c)
                    },
                    "SparseMatrix, DenseMatrix": function (e, t) {
                        return i(t, e, c, !0)
                    },
                    "DenseMatrix, SparseMatrix": function (e, t) {
                        return i(e, t, c, !1)
                    },
                    "DenseMatrix, DenseMatrix": function (e, t) {
                        return s(e, t, c)
                    },
                    "Array, Array": function (e, t) {
                        return c(r(e), r(t)).valueOf()
                    },
                    "Array, Matrix": function (e, t) {
                        return c(r(e), t)
                    },
                    "Matrix, Array": function (e, t) {
                        return c(e, r(t))
                    },
                    "SparseMatrix, any": function (e, t) {
                        return o(e, t, c, !1)
                    },
                    "DenseMatrix, any": function (e, t) {
                        return u(e, t, c, !1)
                    },
                    "any, SparseMatrix": function (e, t) {
                        return o(t, e, c, !0)
                    },
                    "any, DenseMatrix": function (e, t) {
                        return u(t, e, c, !0)
                    },
                    "Array, any": function (e, t) {
                        return u(r(e), t, c, !1).valueOf()
                    },
                    "any, Array": function (e, t) {
                        return u(r(t), e, c, !0).valueOf()
                    }
                });
            return c
        }), vn = ["typed"], bn = Object(s.a)("arg", vn, function (e) {
            var t = (0, e.typed)("arg", {
                number: function (e) {
                    return Math.atan2(0, e)
                }, BigNumber: function (e) {
                    return e.constructor.atan2(0, e)
                }, Complex: function (e) {
                    return e.arg()
                }, "Array | Matrix": function (e) {
                    return oe(e, t)
                }
            });
            return t
        }), xn = ["typed"], wn = Object(s.a)("conj", xn, function (e) {
            var t = (0, e.typed)("conj", {
                number: function (e) {
                    return e
                }, BigNumber: function (e) {
                    return e
                }, Complex: function (e) {
                    return e.conjugate()
                }, "Array | Matrix": function (e) {
                    return oe(e, t)
                }
            });
            return t
        }), Nn = ["typed"], On = Object(s.a)("im", Nn, function (e) {
            var t = (0, e.typed)("im", {
                number: function () {
                    return 0
                }, BigNumber: function (e) {
                    return e.mul(0)
                }, Complex: function (e) {
                    return e.im
                }, "Array | Matrix": function (e) {
                    return oe(e, t)
                }
            });
            return t
        }), Mn = ["typed"], jn = Object(s.a)("re", Mn, function (e) {
            var t = (0, e.typed)("re", {
                number: function (e) {
                    return e
                }, BigNumber: function (e) {
                    return e
                }, Complex: function (e) {
                    return e.re
                }, "Array | Matrix": function (e) {
                    return oe(e, t)
                }
            });
            return t
        }), En = "number, number";

        function Sn(e) {
            return !e
        }

        function An(e, t) {
            return !(!e && !t)
        }

        function Cn(e, t) {
            return !!e != !!t
        }

        function Tn(e, t) {
            return !(!e || !t)
        }

        Sn.signature = "number", Tn.signature = Cn.signature = An.signature = En;
        var _n = ["typed"], qn = Object(s.a)("not", _n, function (e) {
            var t = (0, e.typed)("not", {
                number: Sn, Complex: function (e) {
                    return 0 === e.re && 0 === e.im
                }, BigNumber: function (e) {
                    return e.isZero() || e.isNaN()
                }, Unit: function (e) {
                    return null === e.value || t(e.value)
                }, "Array | Matrix": function (e) {
                    return oe(e, t)
                }
            });
            return t
        }), In = ["typed", "matrix", "equalScalar", "DenseMatrix"], kn = Object(s.a)("or", In, function (e) {
            var t = e.typed, r = e.matrix, n = e.equalScalar, i = e.DenseMatrix, a = mr({typed: t}),
                o = dr({typed: t, equalScalar: n}), s = gr({typed: t, DenseMatrix: i}), u = Wt({typed: t}),
                c = Xt({typed: t}), f = t("or", {
                    "number, number": An, "Complex, Complex": function (e, t) {
                        return 0 !== e.re || 0 !== e.im || 0 !== t.re || 0 !== t.im
                    }, "BigNumber, BigNumber": function (e, t) {
                        return !e.isZero() && !e.isNaN() || !t.isZero() && !t.isNaN()
                    }, "Unit, Unit": function (e, t) {
                        return f(e.value || 0, t.value || 0)
                    }, "SparseMatrix, SparseMatrix": function (e, t) {
                        return o(e, t, f)
                    }, "SparseMatrix, DenseMatrix": function (e, t) {
                        return a(t, e, f, !0)
                    }, "DenseMatrix, SparseMatrix": function (e, t) {
                        return a(e, t, f, !1)
                    }, "DenseMatrix, DenseMatrix": function (e, t) {
                        return u(e, t, f)
                    }, "Array, Array": function (e, t) {
                        return f(r(e), r(t)).valueOf()
                    }, "Array, Matrix": function (e, t) {
                        return f(r(e), t)
                    }, "Matrix, Array": function (e, t) {
                        return f(e, r(t))
                    }, "SparseMatrix, any": function (e, t) {
                        return s(e, t, f, !1)
                    }, "DenseMatrix, any": function (e, t) {
                        return c(e, t, f, !1)
                    }, "any, SparseMatrix": function (e, t) {
                        return s(t, e, f, !0)
                    }, "any, DenseMatrix": function (e, t) {
                        return c(t, e, f, !0)
                    }, "Array, any": function (e, t) {
                        return c(r(e), t, f, !1).valueOf()
                    }, "any, Array": function (e, t) {
                        return c(r(t), e, f, !0).valueOf()
                    }
                });
            return f
        }), Bn = ["typed", "matrix", "DenseMatrix"], zn = Object(s.a)("xor", Bn, function (e) {
            var t = e.typed, r = e.matrix, n = e.DenseMatrix, i = mr({typed: t}), a = dn({typed: t, DenseMatrix: n}),
                o = gr({typed: t, DenseMatrix: n}), s = Wt({typed: t}), u = Xt({typed: t}), c = t("xor", {
                    "number, number": Cn, "Complex, Complex": function (e, t) {
                        return (0 !== e.re || 0 !== e.im) != (0 !== t.re || 0 !== t.im)
                    }, "BigNumber, BigNumber": function (e, t) {
                        return (!e.isZero() && !e.isNaN()) != (!t.isZero() && !t.isNaN())
                    }, "Unit, Unit": function (e, t) {
                        return c(e.value || 0, t.value || 0)
                    }, "SparseMatrix, SparseMatrix": function (e, t) {
                        return a(e, t, c)
                    }, "SparseMatrix, DenseMatrix": function (e, t) {
                        return i(t, e, c, !0)
                    }, "DenseMatrix, SparseMatrix": function (e, t) {
                        return i(e, t, c, !1)
                    }, "DenseMatrix, DenseMatrix": function (e, t) {
                        return s(e, t, c)
                    }, "Array, Array": function (e, t) {
                        return c(r(e), r(t)).valueOf()
                    }, "Array, Matrix": function (e, t) {
                        return c(r(e), t)
                    }, "Matrix, Array": function (e, t) {
                        return c(e, r(t))
                    }, "SparseMatrix, any": function (e, t) {
                        return o(e, t, c, !1)
                    }, "DenseMatrix, any": function (e, t) {
                        return u(e, t, c, !1)
                    }, "any, SparseMatrix": function (e, t) {
                        return o(t, e, c, !0)
                    }, "any, DenseMatrix": function (e, t) {
                        return u(t, e, c, !0)
                    }, "Array, any": function (e, t) {
                        return u(r(e), t, c, !1).valueOf()
                    }, "any, Array": function (e, t) {
                        return u(r(t), e, c, !0).valueOf()
                    }
                });
            return c
        }), Dn = ["typed", "matrix", "isInteger"], Rn = Object(s.a)("concat", Dn, function (e) {
            var t = e.typed, l = e.matrix, p = e.isInteger;
            return t("concat", {
                "...Array | Matrix | number | BigNumber": function (e) {
                    for (var t, r = e.length, n = -1, i = !1, a = [], o = 0; o < r; o++) {
                        var s = e[o];
                        if (Object(ie.v)(s) && (i = !0), Object(ie.y)(s) || Object(ie.e)(s)) {
                            if (o !== r - 1) throw new Error("Dimension must be specified as last argument");
                            if (t = n, n = s.valueOf(), !p(n)) throw new TypeError("Integer number expected for dimension");
                            if (n < 0 || 0 < o && t < n) throw new R.a(n, t + 1)
                        } else {
                            var u = Object(ae.a)(s).valueOf(), c = Object(q.a)(u);
                            if (a[o] = u, t = n, n = c.length - 1, 0 < o && n !== t) throw new z.a(t + 1, n + 1)
                        }
                    }
                    if (0 === a.length) throw new SyntaxError("At least one matrix expected");
                    for (var f = a.shift(); a.length;) f = function e(t, r, n, i) {
                        {
                            if (i < n) {
                                if (t.length !== r.length) throw new z.a(t.length, r.length);
                                for (var a = [], o = 0; o < t.length; o++) a[o] = e(t[o], r[o], n, i + 1);
                                return a
                            }
                            return t.concat(r)
                        }
                    }(f, a.shift(), n, 0);
                    return i ? l(f) : f
                }, "...string": function (e) {
                    return e.join("")
                }
            })
        });
        var Pn = ["typed", "Index", "matrix", "range"], Un = Object(s.a)("column", Pn, function (e) {
            var t = e.typed, i = e.Index, r = e.matrix, a = e.range;
            return t("column", {
                "Matrix, number": n, "Array, number": function (e, t) {
                    return n(r(Object(ae.a)(e)), t).valueOf()
                }
            });

            function n(e, t) {
                if (2 !== e.size().length) throw new Error("Only two dimensional matrix is supported");
                Object(q.q)(t, e.size()[1]);
                var r = a(0, e.size()[0]), n = new i(r, t);
                return e.subset(n)
            }
        }), Fn = ["typed", "matrix", "subtract", "multiply"], Ln = Object(s.a)("cross", Fn, function (e) {
            var t = e.typed, r = e.matrix, o = e.subtract, s = e.multiply;
            return t("cross", {
                "Matrix, Matrix": function (e, t) {
                    return r(n(e.toArray(), t.toArray()))
                }, "Matrix, Array": function (e, t) {
                    return r(n(e.toArray(), t))
                }, "Array, Matrix": function (e, t) {
                    return r(n(e, t.toArray()))
                }, "Array, Array": n
            });

            function n(e, t) {
                var r = Math.max(Object(q.a)(e).length, Object(q.a)(t).length);
                e = Object(q.n)(e), t = Object(q.n)(t);
                var n = Object(q.a)(e), i = Object(q.a)(t);
                if (1 !== n.length || 1 !== i.length || 3 !== n[0] || 3 !== i[0]) throw new RangeError("Vectors with length 3 expected (Size A = [" + n.join(", ") + "], B = [" + i.join(", ") + "])");
                var a = [o(s(e[1], t[2]), s(e[2], t[1])), o(s(e[2], t[0]), s(e[0], t[2])), o(s(e[0], t[1]), s(e[1], t[0]))];
                return 1 < r ? [a] : a
            }
        }), Hn = ["typed", "matrix", "DenseMatrix", "SparseMatrix"], $n = Object(s.a)("diag", Hn, function (e) {
            var t = e.typed, f = e.matrix, u = e.DenseMatrix, c = e.SparseMatrix;
            return t("diag", {
                Array: function (e) {
                    return n(e, 0, Object(q.a)(e), null)
                }, "Array, number": function (e, t) {
                    return n(e, t, Object(q.a)(e), null)
                }, "Array, BigNumber": function (e, t) {
                    return n(e, t.toNumber(), Object(q.a)(e), null)
                }, "Array, string": function (e, t) {
                    return n(e, 0, Object(q.a)(e), t)
                }, "Array, number, string": function (e, t, r) {
                    return n(e, t, Object(q.a)(e), r)
                }, "Array, BigNumber, string": function (e, t, r) {
                    return n(e, t.toNumber(), Object(q.a)(e), r)
                }, Matrix: function (e) {
                    return n(e, 0, e.size(), e.storage())
                }, "Matrix, number": function (e, t) {
                    return n(e, t, e.size(), e.storage())
                }, "Matrix, BigNumber": function (e, t) {
                    return n(e, t.toNumber(), e.size(), e.storage())
                }, "Matrix, string": function (e, t) {
                    return n(e, 0, e.size(), t)
                }, "Matrix, number, string": function (e, t, r) {
                    return n(e, t, e.size(), r)
                }, "Matrix, BigNumber, string": function (e, t, r) {
                    return n(e, t.toNumber(), e.size(), r)
                }
            });

            function n(e, t, r, n) {
                if (!Object(E.i)(t)) throw new TypeError("Second parameter in function diag must be an integer");
                var i = 0 < t ? t : 0, a = t < 0 ? -t : 0;
                switch (r.length) {
                    case 1:
                        return function (e, t, r, n, i, a) {
                            var o = [n + i, n + a];
                            if (r && "sparse" !== r && "dense" !== r) throw new TypeError("Unknown matrix type ".concat(r, '"'));
                            var s = "sparse" === r ? c.diagonal(o, e, t) : u.diagonal(o, e, t);
                            return null !== r ? s : s.valueOf()
                        }(e, t, n, r[0], a, i);
                    case 2:
                        return function (e, t, r, n, i, a) {
                            if (Object(ie.v)(e)) {
                                var o = e.diagonal(t);
                                return null !== r ? r !== o.storage() ? f(o, r) : o : o.valueOf()
                            }
                            for (var s = Math.min(n[0] - i, n[1] - a), u = [], c = 0; c < s; c++) u[c] = e[c + i][c + a];
                            return null !== r ? f(u) : u
                        }(e, t, n, r, a, i)
                }
                throw new RangeError("Matrix for function diag must be 2 dimensional")
            }
        });

        function Gn(e) {
            return (Gn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Zn(i, a) {
            return function e() {
                "object" !== Gn(e.cache) && (e.cache = {});
                for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                var n = a ? a(t) : JSON.stringify(t);
                return n in e.cache || (e.cache[n] = i.apply(i, t)), e.cache[n]
            }
        }

        function Vn(e) {
            return Object.keys(e.signatures || {}).reduce(function (e, t) {
                var r = (t.match(/,/g) || []).length + 1;
                return Math.max(e, r)
            }, -1)
        }

        var Jn = ["typed"], Wn = Object(s.a)("filter", Jn, function (e) {
            return (0, e.typed)("filter", {
                "Array, function": Yn, "Matrix, function": function (e, t) {
                    return e.create(Yn(e.toArray(), t))
                }, "Array, RegExp": q.d, "Matrix, RegExp": function (e, t) {
                    return e.create(Object(q.d)(e.toArray(), t))
                }
            })
        });

        function Yn(e, n) {
            var i = Vn(n);
            return Object(q.c)(e, function (e, t, r) {
                return 1 === i ? n(e) : 2 === i ? n(e, [t]) : n(e, [t], r)
            })
        }

        var Xn = "flatten", Qn = ["typed", "matrix"], Kn = Object(s.a)(Xn, Qn, function (e) {
            var t = e.typed, r = e.matrix;
            return t(Xn, {
                Array: function (e) {
                    return Object(q.e)(Object(ae.a)(e))
                }, Matrix: function (e) {
                    var t = Object(q.e)(Object(ae.a)(e.toArray()));
                    return r(t)
                }
            })
        }), ei = "forEach", ti = ["typed"], ri = Object(s.a)(ei, ti, function (e) {
            return (0, e.typed)(ei, {
                "Array, function": ni, "Matrix, function": function (e, t) {
                    return e.forEach(t)
                }
            })
        });

        function ni(t, i) {
            var a = Vn(i);
            !function r(e, n) {
                Array.isArray(e) ? Object(q.f)(e, function (e, t) {
                    r(e, n.concat(t))
                }) : 1 === a ? i(e) : 2 === a ? i(e, n) : i(e, n, t)
            }(t, [])
        }

        var ii = "getMatrixDataType", ai = ["typed"], oi = Object(s.a)(ii, ai, function (e) {
                return (0, e.typed)(ii, {
                    Array: function (e) {
                        return Object(q.h)(e, ie.M)
                    }, Matrix: function (e) {
                        return e.getDataType()
                    }
                })
            }), si = "identity", ui = ["typed", "config", "matrix", "BigNumber", "DenseMatrix", "SparseMatrix"],
            ci = Object(s.a)(si, ui, function (e) {
                var t = e.typed, r = e.config, n = e.matrix, f = e.BigNumber, l = e.DenseMatrix, p = e.SparseMatrix;
                return t(si, {
                    "": function () {
                        return "Matrix" === r.matrix ? n([]) : []
                    }, string: function (e) {
                        return n(e)
                    }, "number | BigNumber": function (e) {
                        return a(e, e, "Matrix" === r.matrix ? "dense" : void 0)
                    }, "number | BigNumber, string": function (e, t) {
                        return a(e, e, t)
                    }, "number | BigNumber, number | BigNumber": function (e, t) {
                        return a(e, t, "Matrix" === r.matrix ? "dense" : void 0)
                    }, "number | BigNumber, number | BigNumber, string": a, Array: function (e) {
                        return i(e)
                    }, "Array, string": i, Matrix: function (e) {
                        return i(e.valueOf(), e.storage())
                    }, "Matrix, string": function (e, t) {
                        return i(e.valueOf(), t)
                    }
                });

                function i(e, t) {
                    switch (e.length) {
                        case 0:
                            return t ? n(t) : [];
                        case 1:
                            return a(e[0], e[0], t);
                        case 2:
                            return a(e[0], e[1], t);
                        default:
                            throw new Error("Vector containing two values expected")
                    }
                }

                function a(e, t, r) {
                    var n = Object(ie.e)(e) || Object(ie.e)(t) ? f : null;
                    if (Object(ie.e)(e) && (e = e.toNumber()), Object(ie.e)(t) && (t = t.toNumber()), !Object(E.i)(e) || e < 1) throw new Error("Parameters in function identity must be positive integers");
                    if (!Object(E.i)(t) || t < 1) throw new Error("Parameters in function identity must be positive integers");
                    var i = n ? new f(1) : 1, a = n ? new n(0) : 0, o = [e, t];
                    if (r) {
                        if ("sparse" === r) return p.diagonal(o, i, 0, a);
                        if ("dense" === r) return l.diagonal(o, i, 0, a);
                        throw new TypeError('Unknown matrix type "'.concat(r, '"'))
                    }
                    for (var s = Object(q.m)([], o, a), u = e < t ? e : t, c = 0; c < u; c++) s[c][c] = i;
                    return s
                }
            }), fi = ["typed", "matrix", "multiplyScalar"], li = Object(s.a)("kron", fi, function (e) {
                var t = e.typed, r = e.matrix, a = e.multiplyScalar;
                return t("kron", {
                    "Matrix, Matrix": function (e, t) {
                        return r(n(e.toArray(), t.toArray()))
                    }, "Matrix, Array": function (e, t) {
                        return r(n(e.toArray(), t))
                    }, "Array, Matrix": function (e, t) {
                        return r(n(e, t.toArray()))
                    }, "Array, Array": n
                });

                function n(e, r) {
                    if (1 === Object(q.a)(e).length && (e = [e]), 1 === Object(q.a)(r).length && (r = [r]), 2 < Object(q.a)(e).length || 2 < Object(q.a)(r).length) throw new RangeError("Vectors with dimensions greater then 2 are not supported expected (Size x = " + JSON.stringify(e.length) + ", y = " + JSON.stringify(r.length) + ")");
                    var n = [], i = [];
                    return e.map(function (t) {
                        return r.map(function (e) {
                            return i = [], n.push(i), t.map(function (t) {
                                return e.map(function (e) {
                                    return i.push(a(t, e))
                                })
                            })
                        })
                    }) && n
                }
            }), pi = ["typed"], mi = Object(s.a)("map", pi, function (e) {
                return (0, e.typed)("map", {
                    "Array, function": hi, "Matrix, function": function (e, t) {
                        return e.map(t)
                    }
                })
            });

        function hi(t, i) {
            var a = Vn(i);
            return function r(e, n) {
                return Array.isArray(e) ? e.map(function (e, t) {
                    return r(e, n.concat(t))
                }) : 1 === a ? i(e) : 2 === a ? i(e, n) : i(e, n, t)
            }(t, [])
        }

        var di = ["typed", "config", "matrix", "BigNumber"], yi = Object(s.a)("ones", di, function (e) {
            var t = e.typed, r = e.config, o = e.matrix, s = e.BigNumber;
            return t("ones", {
                "": function () {
                    return "Array" === r.matrix ? n([]) : n([], "default")
                }, "...number | BigNumber | string": function (e) {
                    if ("string" != typeof e[e.length - 1]) return "Array" === r.matrix ? n(e) : n(e, "default");
                    var t = e.pop();
                    return n(e, t)
                }, Array: n, Matrix: function (e) {
                    var t = e.storage();
                    return n(e.valueOf(), t)
                }, "Array | Matrix, string": function (e, t) {
                    return n(e.valueOf(), t)
                }
            });

            function n(e, t) {
                var n, r = (n = !1, e.forEach(function (e, t, r) {
                    Object(ie.e)(e) && (n = !0, r[t] = e.toNumber())
                }), n) ? new s(1) : 1;
                if (e.forEach(function (e) {
                    if ("number" != typeof e || !Object(E.i)(e) || e < 0) throw new Error("Parameters in function ones must be positive integers")
                }), t) {
                    var i = o(t);
                    return 0 < e.length ? i.resize(e, r) : i
                }
                var a = [];
                return 0 < e.length ? Object(q.m)(a, e, r) : a
            }
        });

        function gi() {
            throw new Error('No "bignumber" implementation available')
        }

        function vi() {
            throw new Error('No "fraction" implementation available')
        }

        function bi() {
            throw new Error('No "matrix" implementation available')
        }

        var xi = ["typed", "config", "?matrix", "?bignumber", "smaller", "smallerEq", "larger", "largerEq"],
            wi = Object(s.a)("range", xi, function (e) {
                var t = e.typed, n = e.config, r = e.matrix, o = e.bignumber, s = e.smaller, u = e.smallerEq,
                    c = e.larger, f = e.largerEq;
                return t("range", {
                    string: a, "string, boolean": a, "number, number": function (e, t) {
                        return i(l(e, t, 1))
                    }, "number, number, number": function (e, t, r) {
                        return i(l(e, t, r))
                    }, "number, number, boolean": function (e, t, r) {
                        return i((r ? p : l)(e, t, 1))
                    }, "number, number, number, boolean": function (e, t, r, n) {
                        return i((n ? p : l)(e, t, r))
                    }, "BigNumber, BigNumber": function (e, t) {
                        return i(m(e, t, new e.constructor(1)))
                    }, "BigNumber, BigNumber, BigNumber": function (e, t, r) {
                        return i(m(e, t, r))
                    }, "BigNumber, BigNumber, boolean": function (e, t, r) {
                        var n = e.constructor;
                        return i((r ? h : m)(e, t, new n(1)))
                    }, "BigNumber, BigNumber, BigNumber, boolean": function (e, t, r, n) {
                        return i((n ? h : m)(e, t, r))
                    }
                });

                function i(e) {
                    return "Matrix" === n.matrix ? r ? r(e) : bi() : e
                }

                function a(e, t) {
                    var r = function (e) {
                        var t = e.split(":").map(function (e) {
                            return Number(e)
                        });
                        if (t.some(function (e) {
                            return isNaN(e)
                        })) return null;
                        switch (t.length) {
                            case 2:
                                return {start: t[0], end: t[1], step: 1};
                            case 3:
                                return {start: t[0], end: t[2], step: t[1]};
                            default:
                                return null
                        }
                    }(e);
                    if (!r) throw new SyntaxError('String "' + e + '" is no valid range');
                    return "BigNumber" === n.number ? (void 0 === o && gi(), i((t ? h : m)(o(r.start), o(r.end), o(r.step)))) : i((t ? p : l)(r.start, r.end, r.step))
                }

                function l(e, t, r) {
                    var n = [], i = e;
                    if (0 < r) for (; s(i, t);) n.push(i), i += r; else if (r < 0) for (; c(i, t);) n.push(i), i += r;
                    return n
                }

                function p(e, t, r) {
                    var n = [], i = e;
                    if (0 < r) for (; u(i, t);) n.push(i), i += r; else if (r < 0) for (; f(i, t);) n.push(i), i += r;
                    return n
                }

                function m(e, t, r) {
                    var n = o(0), i = [], a = e;
                    if (r.gt(n)) for (; s(a, t);) i.push(a), a = a.plus(r); else if (r.lt(n)) for (; c(a, t);) i.push(a), a = a.plus(r);
                    return i
                }

                function h(e, t, r) {
                    var n = o(0), i = [], a = e;
                    if (r.gt(n)) for (; u(a, t);) i.push(a), a = a.plus(r); else if (r.lt(n)) for (; f(a, t);) i.push(a), a = a.plus(r);
                    return i
                }
            }), Ni = "reshape", Oi = ["typed", "isInteger", "matrix"], Mi = Object(s.a)(Ni, Oi, function (e) {
                var t = e.typed, r = e.isInteger, n = e.matrix;
                return t(Ni, {
                    "Matrix, Array": function (e, t) {
                        return e.reshape ? e.reshape(t) : n(Object(q.l)(e.valueOf(), t))
                    }, "Array, Array": function (e, t) {
                        return t.forEach(function (e) {
                            if (!r(e)) throw new TypeError("Invalid size for dimension: " + e)
                        }), Object(q.l)(e, t)
                    }
                })
            }), ji = r(12), Ei = ["config", "matrix"], Si = Object(s.a)("resize", Ei, function (e) {
                var a = e.config, o = e.matrix;
                return function (e, t, r) {
                    if (2 !== arguments.length && 3 !== arguments.length) throw new ji.a("resize", arguments.length, 2, 3);
                    if (Object(ie.v)(t) && (t = t.valueOf()), Object(ie.e)(t[0]) && (t = t.map(function (e) {
                        return Object(ie.e)(e) ? e.toNumber() : e
                    })), Object(ie.v)(e)) return e.resize(t, r, !0);
                    if ("string" == typeof e) return function (e, t, r) {
                        if (void 0 !== r) {
                            if ("string" != typeof r || 1 !== r.length) throw new TypeError("Single character expected as defaultValue")
                        } else r = " ";
                        if (1 !== t.length) throw new z.a(t.length, 1);
                        var n = t[0];
                        if ("number" != typeof n || !Object(E.i)(n)) throw new TypeError("Invalid size, must contain positive integers (size: " + Object(V.d)(t) + ")");
                        {
                            if (e.length > n) return e.substring(0, n);
                            if (e.length < n) {
                                for (var i = e, a = 0, o = n - e.length; a < o; a++) i += r;
                                return i
                            }
                            return e
                        }
                    }(e, t, r);
                    var n = !Array.isArray(e) && "Array" !== a.matrix;
                    if (0 === t.length) {
                        for (; Array.isArray(e);) e = e[0];
                        return Object(ae.a)(e)
                    }
                    Array.isArray(e) || (e = [e]), e = Object(ae.a)(e);
                    var i = Object(q.m)(e, t, r);
                    return n ? o(i) : i
                }
            }), Ai = ["typed", "Index", "matrix", "range"], Ci = Object(s.a)("row", Ai, function (e) {
                var t = e.typed, i = e.Index, r = e.matrix, a = e.range;
                return t("row", {
                    "Matrix, number": n, "Array, number": function (e, t) {
                        return n(r(Object(ae.a)(e)), t).valueOf()
                    }
                });

                function n(e, t) {
                    if (2 !== e.size().length) throw new Error("Only two dimensional matrix is supported");
                    Object(q.q)(t, e.size()[0]);
                    var r = a(0, e.size()[1]), n = new i(t, r);
                    return e.subset(n)
                }
            }), Ti = ["typed", "config", "?matrix"], _i = Object(s.a)("size", Ti, function (e) {
                var t = e.typed, r = e.config, n = e.matrix;
                return t("size", {
                    Matrix: function (e) {
                        return e.create(e.size())
                    }, Array: q.a, string: function (e) {
                        return "Array" === r.matrix ? [e.length] : n([e.length])
                    }, "number | Complex | BigNumber | Unit | boolean | null": function () {
                        return "Array" === r.matrix ? [] : n ? n([]) : bi()
                    }
                })
            }), qi = "squeeze", Ii = ["typed", "matrix"], ki = Object(s.a)(qi, Ii, function (e) {
                var t = e.typed, r = e.matrix;
                return t(qi, {
                    Array: function (e) {
                        return Object(q.n)(Object(ae.a)(e))
                    }, Matrix: function (e) {
                        var t = Object(q.n)(e.toArray());
                        return Array.isArray(t) ? r(t) : t
                    }, any: function (e) {
                        return Object(ae.a)(e)
                    }
                })
            });

        function Bi(e) {
            return (Bi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function zi(e, t) {
            if (Ui(e) && Ri(e, t)) return e[t];
            if ("function" == typeof e[t] && Pi(e, t)) throw new Error('Cannot access method "' + t + '" as a property');
            throw new Error('No access to property "' + t + '"')
        }

        function Di(e, t, r) {
            if (Ui(e) && Ri(e, t)) return e[t] = r;
            throw new Error('No access to property "' + t + '"')
        }

        function Ri(e, t) {
            if (e && "object" === Bi(e)) {
                if (Object(ae.f)(Fi, t)) return 1;
                if (!(t in Object.prototype || t in Function.prototype)) return 1
            }
        }

        function Pi(e, t) {
            if (null != e && "function" == typeof e[t] && !(Object(ae.f)(e, t) && Object.getPrototypeOf && t in Object.getPrototypeOf(e))) {
                if (Object(ae.f)(Li, t)) return 1;
                if (!(t in Object.prototype || t in Function.prototype)) return 1
            }
        }

        function Ui(e) {
            return "object" === Bi(e) && e && e.constructor === Object
        }

        var Fi = {length: !0, name: !0}, Li = {toString: !0, valueOf: !0, toLocaleString: !0}, Hi = ["typed", "matrix"],
            $i = Object(s.a)("subset", Hi, function (e) {
                var t = e.typed, i = e.matrix;
                return t("subset", {
                    "Array, Index": function (e, t) {
                        var r = i(e).subset(t);
                        return t.isScalar() ? r : r.valueOf()
                    }, "Matrix, Index": function (e, t) {
                        return e.subset(t)
                    }, "Object, Index": Vi, "string, Index": Gi, "Array, Index, any": function (e, t, r) {
                        return i(Object(ae.a)(e)).subset(t, r, void 0).valueOf()
                    }, "Array, Index, any, any": function (e, t, r, n) {
                        return i(Object(ae.a)(e)).subset(t, r, n).valueOf()
                    }, "Matrix, Index, any": function (e, t, r) {
                        return e.clone().subset(t, r)
                    }, "Matrix, Index, any, any": function (e, t, r, n) {
                        return e.clone().subset(t, r, n)
                    }, "string, Index, string": Zi, "string, Index, string, string": Zi, "Object, Index, any": Ji
                })
            });

        function Gi(t, e) {
            if (!Object(ie.t)(e)) throw new TypeError("Index expected");
            if (1 !== e.size().length) throw new z.a(e.size().length, 1);
            var r = t.length;
            Object(q.q)(e.min()[0], r), Object(q.q)(e.max()[0], r);
            var n = e.dimension(0), i = "";
            return n.forEach(function (e) {
                i += t.charAt(e)
            }), i
        }

        function Zi(e, t, r, n) {
            if (!t || !0 !== t.isIndex) throw new TypeError("Index expected");
            if (1 !== t.size().length) throw new z.a(t.size().length, 1);
            if (void 0 !== n) {
                if ("string" != typeof n || 1 !== n.length) throw new TypeError("Single character expected as defaultValue")
            } else n = " ";
            var i = t.dimension(0);
            if (i.size()[0] !== r.length) throw new z.a(i.size()[0], r.length);
            var a = e.length;
            Object(q.q)(t.min()[0]), Object(q.q)(t.max()[0]);
            for (var o = [], s = 0; s < a; s++) o[s] = e.charAt(s);
            if (i.forEach(function (e, t) {
                o[e] = r.charAt(t[0])
            }), o.length > a) for (var u = a - 1, c = o.length; u < c; u++) o[u] || (o[u] = n);
            return o.join("")
        }

        function Vi(e, t) {
            if (1 !== t.size().length) throw new z.a(t.size(), 1);
            var r = t.dimension(0);
            if ("string" != typeof r) throw new TypeError("String expected as index to retrieve an object property");
            return zi(e, r)
        }

        function Ji(e, t, r) {
            if (1 !== t.size().length) throw new z.a(t.size(), 1);
            var n = t.dimension(0);
            if ("string" != typeof n) throw new TypeError("String expected as index to retrieve an object property");
            var i = Object(ae.a)(e);
            return Di(i, n, r), i
        }

        var Wi = ["typed", "matrix"], Yi = Object(s.a)("transpose", Wi, function (e) {
                var t = e.typed, r = e.matrix, n = t("transpose", {
                    Array: function (e) {
                        return n(r(e)).valueOf()
                    }, Matrix: function (e) {
                        var t, r = e.size();
                        switch (r.length) {
                            case 1:
                                t = e.clone();
                                break;
                            case 2:
                                var n = r[0], i = r[1];
                                if (0 === i) throw new RangeError("Cannot transpose a 2D matrix with no columns (size: " + Object(V.d)(r) + ")");
                                switch (e.storage()) {
                                    case"dense":
                                        t = function (e, t, r) {
                                            for (var n, i = e._data, a = [], o = 0; o < r; o++) {
                                                n = a[o] = [];
                                                for (var s = 0; s < t; s++) n[s] = Object(ae.a)(i[s][o])
                                            }
                                            return e.createDenseMatrix({data: a, size: [r, t], datatype: e._datatype})
                                        }(e, n, i);
                                        break;
                                    case"sparse":
                                        t = function (e, t, r) {
                                            for (var n, i, a, o = e._values, s = e._index, u = e._ptr, c = o ? [] : void 0, f = [], l = [], p = [], m = 0; m < t; m++) p[m] = 0;
                                            for (n = 0, i = s.length; n < i; n++) p[s[n]]++;
                                            for (var h = 0, d = 0; d < t; d++) l.push(h), h += p[d], p[d] = l[d];
                                            for (l.push(h), a = 0; a < r; a++) for (var y = u[a], g = u[a + 1], v = y; v < g; v++) {
                                                var b = p[s[v]]++;
                                                f[b] = a, o && (c[b] = Object(ae.a)(o[v]))
                                            }
                                            return e.createSparseMatrix({
                                                values: c,
                                                index: f,
                                                ptr: l,
                                                size: [r, t],
                                                datatype: e._datatype
                                            })
                                        }(e, n, i)
                                }
                                break;
                            default:
                                throw new RangeError("Matrix must be a vector or two dimensional (size: " + Object(V.d)(this._size) + ")")
                        }
                        return t
                    }, any: function (e) {
                        return Object(ae.a)(e)
                    }
                });
                return n
            }), Xi = "ctranspose", Qi = ["typed", "transpose", "conj"], Ki = Object(s.a)(Xi, Qi, function (e) {
                var t = e.typed, r = e.transpose, n = e.conj;
                return t(Xi, {
                    any: function (e) {
                        return n(r(e))
                    }
                })
            }), ea = ["typed", "config", "matrix", "BigNumber"], ta = Object(s.a)("zeros", ea, function (e) {
                var t = e.typed, r = e.config, o = e.matrix, s = e.BigNumber;
                return t("zeros", {
                    "": function () {
                        return "Array" === r.matrix ? n([]) : n([], "default")
                    }, "...number | BigNumber | string": function (e) {
                        if ("string" != typeof e[e.length - 1]) return "Array" === r.matrix ? n(e) : n(e, "default");
                        var t = e.pop();
                        return n(e, t)
                    }, Array: n, Matrix: function (e) {
                        var t = e.storage();
                        return n(e.valueOf(), t)
                    }, "Array | Matrix, string": function (e, t) {
                        return n(e.valueOf(), t)
                    }
                });

                function n(e, t) {
                    var n, r = (n = !1, e.forEach(function (e, t, r) {
                        Object(ie.e)(e) && (n = !0, r[t] = e.toNumber())
                    }), n) ? new s(0) : 0;
                    if (e.forEach(function (e) {
                        if ("number" != typeof e || !Object(E.i)(e) || e < 0) throw new Error("Parameters in function zeros must be positive integers")
                    }), t) {
                        var i = o(t);
                        return 0 < e.length ? i.resize(e, r) : i
                    }
                    var a = [];
                    return 0 < e.length ? Object(q.m)(a, e, r) : a
                }
            }), ra = ["typed"], na = Object(s.a)("erf", ra, function (e) {
                var t = (0, e.typed)("name", {
                    number: function (e) {
                        var t = Math.abs(e);
                        return ua <= t ? Object(E.n)(e) : t <= ia ? Object(E.n)(e) * function (e) {
                            var t, r = e * e, n = oa[0][4] * r, i = r;
                            for (t = 0; t < 3; t += 1) n = (n + oa[0][t]) * r, i = (i + sa[0][t]) * r;
                            return e * (n + oa[0][3]) / (i + sa[0][3])
                        }(t) : t <= 4 ? Object(E.n)(e) * (1 - function (e) {
                            var t, r = oa[1][8] * e, n = e;
                            for (t = 0; t < 7; t += 1) r = (r + oa[1][t]) * e, n = (n + sa[1][t]) * e;
                            var i = (r + oa[1][7]) / (n + sa[1][7]), a = parseInt(16 * e) / 16, o = (e - a) * (e + a);
                            return Math.exp(-a * a) * Math.exp(-o) * i
                        }(t)) : Object(E.n)(e) * (1 - function (e) {
                            var t, r = 1 / (e * e), n = oa[2][5] * r, i = r;
                            for (t = 0; t < 4; t += 1) n = (n + oa[2][t]) * r, i = (i + sa[2][t]) * r;
                            var a = r * (n + oa[2][4]) / (i + sa[2][4]);
                            a = (aa - a) / e, r = parseInt(16 * e) / 16;
                            var o = (e - r) * (e + r);
                            return Math.exp(-r * r) * Math.exp(-o) * a
                        }(t))
                    }, "Array | Matrix": function (e) {
                        return oe(e, t)
                    }
                });
                return t
            }), ia = .46875, aa = .5641895835477563,
            oa = [[3.1611237438705655, 113.86415415105016, 377.485237685302, 3209.3775891384694, .18577770618460315], [.5641884969886701, 8.883149794388377, 66.11919063714163, 298.6351381974001, 881.952221241769, 1712.0476126340707, 2051.0783778260716, 1230.3393547979972, 2.1531153547440383e-8], [.30532663496123236, .36034489994980445, .12578172611122926, .016083785148742275, .0006587491615298378, .016315387137302097]],
            sa = [[23.601290952344122, 244.02463793444417, 1282.6165260773723, 2844.236833439171], [15.744926110709835, 117.6939508913125, 537.1811018620099, 1621.3895745666903, 3290.7992357334597, 4362.619090143247, 3439.3676741437216, 1230.3393548037495], [2.568520192289822, 1.8729528499234604, .5279051029514285, .06051834131244132, .0023352049762686918]],
            ua = Math.pow(2, 53), ca = ["typed", "isNaN", "isNumeric"], fa = Object(s.a)("mode", ca, function (e) {
                var t = e.typed, o = e.isNaN, s = e.isNumeric;
                return t("mode", {"Array | Matrix": r, "...": r});

                function r(e) {
                    if (0 === (e = Object(q.e)(e.valueOf())).length) throw new Error("Cannot calculate mode of an empty array");
                    for (var t = {}, r = [], n = 0, i = 0; i < e.length; i++) {
                        var a = e[i];
                        if (s(a) && o(a)) throw new Error("Cannot calculate mode of an array containing NaN values");
                        a in t || (t[a] = 0), t[a]++, t[a] === n ? r.push(a) : t[a] > n && (n = t[a], r = [a])
                    }
                    return r
                }
            });

        function la(e, t, r) {
            var n;
            return -1 !== String(e).indexOf("Unexpected type") ? (n = 2 < arguments.length ? " (type: " + Object(ie.M)(r) + ", value: " + JSON.stringify(r) + ")" : " (type: " + e.data.actual + ")", new TypeError("Cannot calculate " + t + ", unexpected type of argument" + n)) : -1 !== String(e).indexOf("complex numbers") ? (n = 2 < arguments.length ? " (type: " + Object(ie.M)(r) + ", value: " + JSON.stringify(r) + ")" : "", new TypeError("Cannot calculate " + t + ", no ordering relation is defined for complex numbers" + n)) : e
        }

        var pa = ["typed", "multiply"], ma = Object(s.a)("prod", pa, function (e) {
            var t = e.typed, n = e.multiply;
            return t("prod", {
                "Array | Matrix": r, "Array | Matrix, number | BigNumber": function () {
                    throw new Error("prod(A, dim) is not yet supported")
                }, "...": r
            });

            function r(e) {
                var r;
                if (U(e, function (t) {
                    try {
                        r = void 0 === r ? t : n(r, t)
                    } catch (e) {
                        throw la(e, "prod", t)
                    }
                }), void 0 === r) throw new Error("Cannot calculate prod of an empty array");
                return r
            }
        }), ha = ["typed"], da = Object(s.a)("format", ha, function (e) {
            return (0, e.typed)("format", {any: V.d, "any, Object | function | number": V.d})
        }), ya = ["typed"], ga = Object(s.a)("print", ya, function (e) {
            return (0, e.typed)("print", {"string, Object | Array": va, "string, Object | Array, number | Object": va})
        });

        function va(e, a, o) {
            return e.replace(/\$([\w.]+)/g, function (e, t) {
                for (var r = t.split("."), n = a[r.shift()]; r.length && void 0 !== n;) var i = r.shift(), n = i ? n[i] : n + ".";
                return void 0 !== n ? Object(ie.I)(n) ? n : Object(V.d)(n, o) : e
            })
        }

        var ba = ["typed", "matrix"], xa = Object(s.a)("to", ba, function (e) {
                var t = e.typed, r = e.matrix, n = Wt({typed: t}), i = Xt({typed: t}), a = t("to", {
                    "Unit, Unit | string": function (e, t) {
                        return e.to(t)
                    }, "Matrix, Matrix": function (e, t) {
                        return n(e, t, a)
                    }, "Array, Array": function (e, t) {
                        return a(r(e), r(t)).valueOf()
                    }, "Array, Matrix": function (e, t) {
                        return a(r(e), t)
                    }, "Matrix, Array": function (e, t) {
                        return a(e, r(t))
                    }, "Matrix, any": function (e, t) {
                        return i(e, t, a, !1)
                    }, "any, Matrix": function (e, t) {
                        return i(t, e, a, !0)
                    }, "Array, any": function (e, t) {
                        return i(r(e), t, a, !1).valueOf()
                    }, "any, Array": function (e, t) {
                        return i(r(t), e, a, !0).valueOf()
                    }
                });
                return a
            }), wa = "isPrime", Na = ["typed"], Oa = Object(s.a)(wa, Na, function (e) {
                var t = (0, e.typed)(wa, {
                    number: function (e) {
                        if (0 * e != 0) return !1;
                        if (e <= 3) return 1 < e;
                        if (e % 2 == 0 || e % 3 == 0) return !1;
                        for (var t = 5; t * t <= e; t += 6) if (e % t == 0 || e % (t + 2) == 0) return !1;
                        return !0
                    }, BigNumber: function (e) {
                        if (0 * e.toNumber() != 0) return !1;
                        if (e.lte(3)) return e.gt(1);
                        if (e.mod(2).eq(0) || e.mod(3).eq(0)) return !1;
                        for (var t = 5; e.gte(t * t); t += 6) if (e.mod(t).eq(0) || e.mod(t + 2).eq(0)) return !1;
                        return !0
                    }, "Array | Matrix": function (e) {
                        return oe(e, t)
                    }
                });
                return t
            }), Ma = ["number", "?bignumber", "?fraction"], ja = Object(s.a)("numeric", Ma, function (e) {
                var t = e.number, r = e.bignumber, n = e.fraction,
                    i = {string: !0, number: !0, BigNumber: !0, Fraction: !0}, a = {
                        number: function (e) {
                            return t(e)
                        }, BigNumber: r ? function (e) {
                            return r(e)
                        } : gi, Fraction: n ? function (e) {
                            return n(e)
                        } : vi
                    };
                return function (e, t) {
                    var r = Object(ie.M)(e);
                    if (!(r in i)) throw new TypeError("Cannot convert " + e + ' of type "' + r + '"; valid input types are ' + Object.keys(i).join(", "));
                    if (!(t in a)) throw new TypeError("Cannot convert " + e + ' to type "' + t + '"; valid output types are ' + Object.keys(a).join(", "));
                    return t === r ? e : a[t](e)
                }
            }), Ea = "divideScalar", Sa = ["typed", "numeric"], Aa = Object(s.a)(Ea, Sa, function (e) {
                var t = e.typed, i = e.numeric, a = t(Ea, {
                    "number, number": function (e, t) {
                        return e / t
                    }, "Complex, Complex": function (e, t) {
                        return e.div(t)
                    }, "BigNumber, BigNumber": function (e, t) {
                        return e.div(t)
                    }, "Fraction, Fraction": function (e, t) {
                        return e.div(t)
                    }, "Unit, number | Fraction | BigNumber": function (e, t) {
                        var r = e.clone(), n = i(1, Object(ie.M)(t));
                        return r.value = a(null === r.value ? r._normalize(n) : r.value, t), r
                    }, "number | Fraction | BigNumber, Unit": function (e, t) {
                        var r = (r = t.clone()).pow(-1), n = i(1, Object(ie.M)(e));
                        return r.value = a(e, null === t.value ? t._normalize(n) : t.value), r
                    }, "Unit, Unit": function (e, t) {
                        return e.divide(t)
                    }
                });
                return a
            }), Ca = ["typed", "config", "identity", "multiply", "matrix", "fraction", "number", "Complex"],
            Ta = Object(s.a)("pow", Ca, function (e) {
                var t = e.typed, i = e.config, a = e.identity, o = e.multiply, r = e.matrix, s = e.number,
                    u = e.fraction, c = e.Complex;
                return t("pow", {
                    "number, number": n, "Complex, Complex": function (e, t) {
                        return e.pow(t)
                    }, "BigNumber, BigNumber": function (e, t) {
                        return t.isInteger() || 0 <= e || i.predictable ? e.pow(t) : new c(e.toNumber(), 0).pow(t.toNumber(), 0)
                    }, "Fraction, Fraction": function (e, t) {
                        if (1 === t.d) return e.pow(t);
                        if (i.predictable) throw new Error("Function pow does not support non-integer exponents for fractions.");
                        return n(e.valueOf(), t.valueOf())
                    }, "Array, number": f, "Array, BigNumber": function (e, t) {
                        return f(e, t.toNumber())
                    }, "Matrix, number": l, "Matrix, BigNumber": function (e, t) {
                        return l(e, t.toNumber())
                    }, "Unit, number | BigNumber": function (e, t) {
                        return e.pow(t)
                    }
                });

                function n(e, t) {
                    if (i.predictable && !Object(E.i)(t) && e < 0) try {
                        var r = u(t), n = s(r);
                        if ((t === n || Math.abs((t - n) / t) < 1e-14) && r.d % 2 == 1) return (r.n % 2 == 0 ? 1 : -1) * Math.pow(-e, t)
                    } catch (e) {
                    }
                    return i.predictable && (e < -1 && t === 1 / 0 || -1 < e && e < 0 && t === -1 / 0) ? NaN : Object(E.i)(t) || 0 <= e || i.predictable ? pt(e, t) : e * e < 1 && t === 1 / 0 || 1 < e * e && t === -1 / 0 ? 0 : new c(e, 0).pow(t, 0)
                }

                function f(e, t) {
                    if (!Object(E.i)(t) || t < 0) throw new TypeError("For A^b, b must be a positive integer (value is " + t + ")");
                    var r = Object(q.a)(e);
                    if (2 !== r.length) throw new Error("For A^b, A must be 2 dimensional (A has " + r.length + " dimensions)");
                    if (r[0] !== r[1]) throw new Error("For A^b, A must be square (size is " + r[0] + "x" + r[1] + ")");
                    for (var n = a(r[0]).valueOf(), i = e; 1 <= t;) 1 == (1 & t) && (n = o(i, n)), t >>= 1, i = o(i, i);
                    return n
                }

                function l(e, t) {
                    return r(f(e.valueOf(), t))
                }
            });

        function _a(t, e) {
            var r, n = Object.keys(t);
            return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, r)), n
        }

        function qa(i) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? _a(Object(a), !0).forEach(function (e) {
                    var t, r, n;
                    t = i, n = a[r = e], r in t ? Object.defineProperty(t, r, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[r] = n
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : _a(Object(a)).forEach(function (e) {
                    Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
                })
            }
            return i
        }

        var Ia = "Number of decimals in function round must be an integer", ka = "round",
            Ba = ["typed", "matrix", "equalScalar", "zeros", "BigNumber", "DenseMatrix"],
            za = Object(s.a)(ka, Ba, function (e) {
                var t = e.typed, r = e.matrix, n = e.equalScalar, i = e.zeros, a = e.BigNumber, o = e.DenseMatrix,
                    s = ar({typed: t, equalScalar: n}), u = gr({typed: t, DenseMatrix: o}), c = Xt({typed: t}),
                    f = t(ka, qa(qa({}, Da), {}, {
                        Complex: function (e) {
                            return e.round()
                        }, "Complex, number": function (e, t) {
                            if (t % 1) throw new TypeError(Ia);
                            return e.round(t)
                        }, "Complex, BigNumber": function (e, t) {
                            if (!t.isInteger()) throw new TypeError(Ia);
                            var r = t.toNumber();
                            return e.round(r)
                        }, "number, BigNumber": function (e, t) {
                            if (!t.isInteger()) throw new TypeError(Ia);
                            return new a(e).toDecimalPlaces(t.toNumber())
                        }, BigNumber: function (e) {
                            return e.toDecimalPlaces(0)
                        }, "BigNumber, BigNumber": function (e, t) {
                            if (!t.isInteger()) throw new TypeError(Ia);
                            return e.toDecimalPlaces(t.toNumber())
                        }, Fraction: function (e) {
                            return e.round()
                        }, "Fraction, number": function (e, t) {
                            if (t % 1) throw new TypeError(Ia);
                            return e.round(t)
                        }, "Array | Matrix": function (e) {
                            return oe(e, f, !0)
                        }, "SparseMatrix, number | BigNumber": function (e, t) {
                            return s(e, t, f, !1)
                        }, "DenseMatrix, number | BigNumber": function (e, t) {
                            return c(e, t, f, !1)
                        }, "number | Complex | BigNumber, SparseMatrix": function (e, t) {
                            return n(e, 0) ? i(t.size(), t.storage()) : u(t, e, f, !0)
                        }, "number | Complex | BigNumber, DenseMatrix": function (e, t) {
                            return n(e, 0) ? i(t.size(), t.storage()) : c(t, e, f, !0)
                        }, "Array, number | BigNumber": function (e, t) {
                            return c(r(e), t, f, !1).valueOf()
                        }, "number | Complex | BigNumber, Array": function (e, t) {
                            return c(r(t), e, f, !0).valueOf()
                        }
                    }));
                return f
            }), Da = {
                number: mt, "number, number": function (e, t) {
                    if (!Object(E.i)(t)) throw new TypeError(Ia);
                    if (t < 0 || 15 < t) throw new Error("Number of decimals in function round must be in te range of 0-15");
                    return mt(e, t)
                }
            }, Ra = ["config", "typed", "divideScalar", "Complex"], Pa = Object(s.a)("log", Ra, function (e) {
                var t = e.typed, r = e.config, n = e.divideScalar, i = e.Complex, a = t("log", {
                    number: function (e) {
                        return 0 <= e || r.predictable ? it(e) : new i(e, 0).log()
                    }, Complex: function (e) {
                        return e.log()
                    }, BigNumber: function (e) {
                        return !e.isNegative() || r.predictable ? e.ln() : new i(e.toNumber(), 0).log()
                    }, "Array | Matrix": function (e) {
                        return oe(e, a)
                    }, "any, any": function (e, t) {
                        return n(a(e), a(t))
                    }
                });
                return a
            }), Ua = ["typed", "config", "divideScalar", "log", "Complex"], Fa = Object(s.a)("log1p", Ua, function (e) {
                var t = e.typed, r = e.config, n = e.divideScalar, i = e.log, a = e.Complex, o = t("log1p", {
                    number: function (e) {
                        return -1 <= e || r.predictable ? Object(E.k)(e) : s(new a(e, 0))
                    }, Complex: s, BigNumber: function (e) {
                        var t = e.plus(1);
                        return !t.isNegative() || r.predictable ? t.ln() : s(new a(e.toNumber(), 0))
                    }, "Array | Matrix": function (e) {
                        return oe(e, o)
                    }, "any, any": function (e, t) {
                        return n(o(e), i(t))
                    }
                });

                function s(e) {
                    var t = e.re + 1;
                    return new a(Math.log(Math.sqrt(t * t + e.im * e.im)), Math.atan2(e.im, t))
                }

                return o
            }), La = "nthRoots", Ha = ["config", "typed", "divideScalar", "Complex"],
            $a = Object(s.a)(La, Ha, function (e) {
                var t = e.typed, f = (e.config, e.divideScalar, e.Complex), r = t(La, {
                    Complex: function (e) {
                        return n(e, 2)
                    }, "Complex, number": n
                }), l = [function (e) {
                    return new f(e, 0)
                }, function (e) {
                    return new f(0, e)
                }, function (e) {
                    return new f(-e, 0)
                }, function (e) {
                    return new f(0, -e)
                }];

                function n(e, t) {
                    if (t < 0) throw new Error("Root must be greater than zero");
                    if (0 === t) throw new Error("Root must be non-zero");
                    if (t % 1 != 0) throw new Error("Root must be an integer");
                    if (0 === e || 0 === e.abs()) return [new f(0, 0)];
                    var r, n = "number" == typeof e;
                    !n && 0 !== e.re && 0 !== e.im || (r = n ? 2 * (e < 0) : 0 === e.im ? 2 * (e.re < 0) : 2 * (e.im < 0) + 1);
                    for (var i = e.arg(), a = e.abs(), o = [], s = Math.pow(a, 1 / t), u = 0; u < t; u++) {
                        var c = (r + 4 * u) / t;
                        c !== Math.round(c) ? o.push(new f({
                            r: s,
                            phi: (i + 2 * Math.PI * u) / t
                        })) : o.push(l[c % 4](s))
                    }
                    return o
                }

                return r
            }), Ga = ["typed", "equalScalar", "matrix", "pow", "DenseMatrix"],
            Za = Object(s.a)("dotPow", Ga, function (e) {
                var t = e.typed, r = e.equalScalar, n = e.matrix, i = e.pow, a = e.DenseMatrix, o = mr({typed: t}),
                    s = dn({typed: t, DenseMatrix: a}), u = ar({typed: t, equalScalar: r}),
                    c = gr({typed: t, DenseMatrix: a}), f = Wt({typed: t}), l = Xt({typed: t}), p = t("dotPow", {
                        "any, any": i, "SparseMatrix, SparseMatrix": function (e, t) {
                            return s(e, t, i, !1)
                        }, "SparseMatrix, DenseMatrix": function (e, t) {
                            return o(t, e, i, !0)
                        }, "DenseMatrix, SparseMatrix": function (e, t) {
                            return o(e, t, i, !1)
                        }, "DenseMatrix, DenseMatrix": function (e, t) {
                            return f(e, t, i)
                        }, "Array, Array": function (e, t) {
                            return p(n(e), n(t)).valueOf()
                        }, "Array, Matrix": function (e, t) {
                            return p(n(e), t)
                        }, "Matrix, Array": function (e, t) {
                            return p(e, n(t))
                        }, "SparseMatrix, any": function (e, t) {
                            return u(e, t, p, !1)
                        }, "DenseMatrix, any": function (e, t) {
                            return l(e, t, p, !1)
                        }, "any, SparseMatrix": function (e, t) {
                            return c(t, e, p, !0)
                        }, "any, DenseMatrix": function (e, t) {
                            return l(t, e, p, !0)
                        }, "Array, any": function (e, t) {
                            return l(n(e), t, p, !1).valueOf()
                        }, "any, Array": function (e, t) {
                            return l(n(t), e, p, !0).valueOf()
                        }
                    });
                return p
            }), Va = "dotDivide", Ja = ["typed", "matrix", "equalScalar", "divideScalar", "DenseMatrix"],
            Wa = Object(s.a)(Va, Ja, function (e) {
                var t = e.typed, r = e.matrix, n = e.equalScalar, i = e.divideScalar, a = e.DenseMatrix,
                    o = tr({typed: t, equalScalar: n}), s = mr({typed: t}), u = dn({typed: t, DenseMatrix: a}),
                    c = ar({typed: t, equalScalar: n}), f = gr({typed: t, DenseMatrix: a}), l = Wt({typed: t}),
                    p = Xt({typed: t}), m = t(Va, {
                        "any, any": i, "SparseMatrix, SparseMatrix": function (e, t) {
                            return u(e, t, i, !1)
                        }, "SparseMatrix, DenseMatrix": function (e, t) {
                            return o(t, e, i, !0)
                        }, "DenseMatrix, SparseMatrix": function (e, t) {
                            return s(e, t, i, !1)
                        }, "DenseMatrix, DenseMatrix": function (e, t) {
                            return l(e, t, i)
                        }, "Array, Array": function (e, t) {
                            return m(r(e), r(t)).valueOf()
                        }, "Array, Matrix": function (e, t) {
                            return m(r(e), t)
                        }, "Matrix, Array": function (e, t) {
                            return m(e, r(t))
                        }, "SparseMatrix, any": function (e, t) {
                            return c(e, t, i, !1)
                        }, "DenseMatrix, any": function (e, t) {
                            return p(e, t, i, !1)
                        }, "any, SparseMatrix": function (e, t) {
                            return f(t, e, i, !0)
                        }, "any, DenseMatrix": function (e, t) {
                            return p(t, e, i, !0)
                        }, "Array, any": function (e, t) {
                            return p(r(e), t, i, !1).valueOf()
                        }, "any, Array": function (e, t) {
                            return p(r(t), e, i, !0).valueOf()
                        }
                    });
                return m
            });

        function Ya(e) {
            var d = e.DenseMatrix;
            return function (e, t, r) {
                var n = e.size();
                if (2 !== n.length) throw new RangeError("Matrix must be two dimensional (size: " + Object(V.d)(n) + ")");
                var i, a, o, s = n[0];
                if (s !== n[1]) throw new RangeError("Matrix must be square (size: " + Object(V.d)(n) + ")");
                if (Object(ie.v)(t)) {
                    var u = t.size();
                    if (1 === u.length) {
                        if (u[0] !== s) throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
                        for (i = [], o = t._data, a = 0; a < s; a++) i[a] = [o[a]];
                        return new d({data: i, size: [s, 1], datatype: t._datatype})
                    }
                    if (2 !== u.length) throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
                    if (u[0] !== s || 1 !== u[1]) throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
                    if (Object(ie.n)(t)) {
                        if (r) {
                            for (i = [], o = t._data, a = 0; a < s; a++) i[a] = [o[a][0]];
                            return new d({data: i, size: [s, 1], datatype: t._datatype})
                        }
                        return t
                    }
                    for (i = [], a = 0; a < s; a++) i[a] = [0];
                    for (var c = t._values, f = t._index, l = t._ptr, p = l[1], m = l[0]; m < p; m++) i[a = f[m]][0] = c[m];
                    return new d({data: i, size: [s, 1], datatype: t._datatype})
                }
                if (Object(ie.b)(t)) {
                    var h = Object(q.a)(t);
                    if (1 === h.length) {
                        if (h[0] !== s) throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
                        for (i = [], a = 0; a < s; a++) i[a] = [t[a]];
                        return new d({data: i, size: [s, 1]})
                    }
                    if (2 !== h.length) throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
                    if (h[0] !== s || 1 !== h[1]) throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
                    for (i = [], a = 0; a < s; a++) i[a] = [t[a][0]];
                    return new d({data: i, size: [s, 1]})
                }
            }
        }

        var Xa = ["typed", "matrix", "divideScalar", "multiplyScalar", "subtract", "equalScalar", "DenseMatrix"],
            Qa = Object(s.a)("lsolve", Xa, function (e) {
                var t = e.typed, r = e.matrix, v = e.divideScalar, b = e.multiplyScalar, x = e.subtract,
                    w = e.equalScalar, N = e.DenseMatrix, O = Ya({DenseMatrix: N});
                return t("lsolve", {
                    "SparseMatrix, Array | Matrix": function (e, t) {
                        for (var r, n, i = (t = O(e, t, !0))._data, a = e._size[0], o = e._size[1], s = e._values, u = e._index, c = e._ptr, f = [], l = 0; l < o; l++) {
                            var p = i[l][0] || 0;
                            if (w(p, 0)) f[l] = [0]; else {
                                var m = 0, h = [], d = [], y = c[l + 1];
                                for (n = c[l]; n < y; n++) (r = u[n]) === l ? m = s[n] : l < r && (h.push(s[n]), d.push(r));
                                if (w(m, 0)) throw new Error("Linear system cannot be solved since matrix is singular");
                                var g = v(p, m);
                                for (n = 0, y = d.length; n < y; n++) r = d[n], i[r] = [x(i[r][0] || 0, b(g, h[n]))];
                                f[l] = [g]
                            }
                        }
                        return new N({data: f, size: [a, 1]})
                    }, "DenseMatrix, Array | Matrix": n, "Array, Array | Matrix": function (e, t) {
                        return n(r(e), t).valueOf()
                    }
                });

                function n(e, t) {
                    for (var r = (t = O(e, t, !0))._data, n = e._size[0], i = e._size[1], a = [], o = e._data, s = 0; s < i; s++) {
                        var u = r[s][0] || 0, c = void 0;
                        if (w(u, 0)) c = 0; else {
                            var f = o[s][s];
                            if (w(f, 0)) throw new Error("Linear system cannot be solved since matrix is singular");
                            c = v(u, f);
                            for (var l = s + 1; l < n; l++) r[l] = [x(r[l][0] || 0, b(c, o[l][s]))]
                        }
                        a[s] = [c]
                    }
                    return new N({data: a, size: [n, 1]})
                }
            }), Ka = ["typed", "matrix", "divideScalar", "multiplyScalar", "subtract", "equalScalar", "DenseMatrix"],
            eo = Object(s.a)("usolve", Ka, function (e) {
                var t = e.typed, r = e.matrix, b = e.divideScalar, x = e.multiplyScalar, w = e.subtract,
                    N = e.equalScalar, O = e.DenseMatrix, M = Ya({DenseMatrix: O});
                return t("usolve", {
                    "SparseMatrix, Array | Matrix": function (e, t) {
                        for (var r, n, i = (t = M(e, t, !0))._data, a = e._size[0], o = e._size[1], s = e._values, u = e._index, c = e._ptr, f = [], l = o - 1; 0 <= l; l--) {
                            var p = i[l][0] || 0;
                            if (N(p, 0)) f[l] = [0]; else {
                                var m = 0, h = [], d = [], y = c[l], g = c[l + 1];
                                for (n = g - 1; y <= n; n--) (r = u[n]) === l ? m = s[n] : r < l && (h.push(s[n]), d.push(r));
                                if (N(m, 0)) throw new Error("Linear system cannot be solved since matrix is singular");
                                var v = b(p, m);
                                for (n = 0, g = d.length; n < g; n++) r = d[n], i[r] = [w(i[r][0], x(v, h[n]))];
                                f[l] = [v]
                            }
                        }
                        return new O({data: f, size: [a, 1]})
                    }, "DenseMatrix, Array | Matrix": n, "Array, Array | Matrix": function (e, t) {
                        return n(r(e), t).valueOf()
                    }
                });

                function n(e, t) {
                    for (var r = (t = M(e, t, !0))._data, n = e._size[0], i = e._size[1], a = [], o = e._data, s = i - 1; 0 <= s; s--) {
                        var u = r[s][0] || 0, c = void 0;
                        if (N(u, 0)) c = 0; else {
                            var f = o[s][s];
                            if (N(f, 0)) throw new Error("Linear system cannot be solved since matrix is singular");
                            c = b(u, f);
                            for (var l = s - 1; 0 <= l; l--) r[l] = [w(r[l][0] || 0, x(c, o[l][s]))]
                        }
                        a[s] = [c]
                    }
                    return new O({data: a, size: [n, 1]})
                }
            }), to = ["typed", "equalScalar"], ro = Object(s.a)("algorithm08", to, function (e) {
                var _ = e.typed, q = e.equalScalar;
                return function (e, t, r) {
                    var n = e._values, i = e._index, a = e._ptr, o = e._size, s = e._datatype, u = t._values, c = t._index,
                        f = t._ptr, l = t._size, p = t._datatype;
                    if (o.length !== l.length) throw new z.a(o.length, l.length);
                    if (o[0] !== l[0] || o[1] !== l[1]) throw new RangeError("Dimension mismatch. Matrix A (" + o + ") must match Matrix B (" + l + ")");
                    if (!n || !u) throw new Error("Cannot perform operation on Pattern Sparse Matrices");
                    var m, h = o[0], d = o[1], y = q, g = 0, v = r;
                    "string" == typeof s && s === p && (m = s, y = _.find(q, [m, m]), g = _.convert(0, m), v = _.find(r, [m, m]));
                    for (var b, x = [], w = [], N = [], O = [], M = [], j = 0; j < d; j++) {
                        N[j] = w.length;
                        for (var E = j + 1, S = a[j], A = a[j + 1], C = S; C < A; C++) M[b = i[C]] = E, O[b] = n[C], w.push(b);
                        for (S = f[j], A = f[j + 1], C = S; C < A; C++) M[b = c[C]] === E && (O[b] = v(O[b], u[C]));
                        for (C = N[j]; C < w.length;) {
                            var T = O[b = w[C]];
                            y(T, g) ? w.splice(C, 1) : (x.push(T), C++)
                        }
                    }
                    return N[d] = w.length, e.createSparseMatrix({values: x, index: w, ptr: N, size: [h, d], datatype: m})
                }
            }), no = "leftShift", io = ["typed", "matrix", "equalScalar", "zeros", "DenseMatrix"],
            ao = Object(s.a)(no, io, function (e) {
                var t = e.typed, r = e.matrix, n = e.equalScalar, i = e.zeros, a = e.DenseMatrix, o = Ht({typed: t}),
                    s = tr({typed: t, equalScalar: n}), u = ro({typed: t, equalScalar: n}),
                    c = Vt({typed: t, DenseMatrix: a}), f = ar({typed: t, equalScalar: n}), l = Wt({typed: t}),
                    p = Xt({typed: t}), m = t(no, {
                        "number, number": an,
                        "BigNumber, BigNumber": Xr,
                        "SparseMatrix, SparseMatrix": function (e, t) {
                            return u(e, t, m, !1)
                        },
                        "SparseMatrix, DenseMatrix": function (e, t) {
                            return s(t, e, m, !0)
                        },
                        "DenseMatrix, SparseMatrix": function (e, t) {
                            return o(e, t, m, !1)
                        },
                        "DenseMatrix, DenseMatrix": function (e, t) {
                            return l(e, t, m)
                        },
                        "Array, Array": function (e, t) {
                            return m(r(e), r(t)).valueOf()
                        },
                        "Array, Matrix": function (e, t) {
                            return m(r(e), t)
                        },
                        "Matrix, Array": function (e, t) {
                            return m(e, r(t))
                        },
                        "SparseMatrix, number | BigNumber": function (e, t) {
                            return n(t, 0) ? e.clone() : f(e, t, m, !1)
                        },
                        "DenseMatrix, number | BigNumber": function (e, t) {
                            return n(t, 0) ? e.clone() : p(e, t, m, !1)
                        },
                        "number | BigNumber, SparseMatrix": function (e, t) {
                            return n(e, 0) ? i(t.size(), t.storage()) : c(t, e, m, !0)
                        },
                        "number | BigNumber, DenseMatrix": function (e, t) {
                            return n(e, 0) ? i(t.size(), t.storage()) : p(t, e, m, !0)
                        },
                        "Array, number | BigNumber": function (e, t) {
                            return m(r(e), t).valueOf()
                        },
                        "number | BigNumber, Array": function (e, t) {
                            return m(e, r(t)).valueOf()
                        }
                    });
                return m
            }), oo = "rightArithShift", so = ["typed", "matrix", "equalScalar", "zeros", "DenseMatrix"],
            uo = Object(s.a)(oo, so, function (e) {
                var t = e.typed, r = e.matrix, n = e.equalScalar, i = e.zeros, a = e.DenseMatrix, o = Ht({typed: t}),
                    s = tr({typed: t, equalScalar: n}), u = ro({typed: t, equalScalar: n}),
                    c = Vt({typed: t, DenseMatrix: a}), f = ar({typed: t, equalScalar: n}), l = Wt({typed: t}),
                    p = Xt({typed: t}), m = t(oo, {
                        "number, number": on,
                        "BigNumber, BigNumber": Qr,
                        "SparseMatrix, SparseMatrix": function (e, t) {
                            return u(e, t, m, !1)
                        },
                        "SparseMatrix, DenseMatrix": function (e, t) {
                            return s(t, e, m, !0)
                        },
                        "DenseMatrix, SparseMatrix": function (e, t) {
                            return o(e, t, m, !1)
                        },
                        "DenseMatrix, DenseMatrix": function (e, t) {
                            return l(e, t, m)
                        },
                        "Array, Array": function (e, t) {
                            return m(r(e), r(t)).valueOf()
                        },
                        "Array, Matrix": function (e, t) {
                            return m(r(e), t)
                        },
                        "Matrix, Array": function (e, t) {
                            return m(e, r(t))
                        },
                        "SparseMatrix, number | BigNumber": function (e, t) {
                            return n(t, 0) ? e.clone() : f(e, t, m, !1)
                        },
                        "DenseMatrix, number | BigNumber": function (e, t) {
                            return n(t, 0) ? e.clone() : p(e, t, m, !1)
                        },
                        "number | BigNumber, SparseMatrix": function (e, t) {
                            return n(e, 0) ? i(t.size(), t.storage()) : c(t, e, m, !0)
                        },
                        "number | BigNumber, DenseMatrix": function (e, t) {
                            return n(e, 0) ? i(t.size(), t.storage()) : p(t, e, m, !0)
                        },
                        "Array, number | BigNumber": function (e, t) {
                            return m(r(e), t).valueOf()
                        },
                        "number | BigNumber, Array": function (e, t) {
                            return m(e, r(t)).valueOf()
                        }
                    });
                return m
            }), co = "rightLogShift", fo = ["typed", "matrix", "equalScalar", "zeros", "DenseMatrix"],
            lo = Object(s.a)(co, fo, function (e) {
                var t = e.typed, r = e.matrix, n = e.equalScalar, i = e.zeros, a = e.DenseMatrix, o = Ht({typed: t}),
                    s = tr({typed: t, equalScalar: n}), u = ro({typed: t, equalScalar: n}),
                    c = Vt({typed: t, DenseMatrix: a}), f = ar({typed: t, equalScalar: n}), l = Wt({typed: t}),
                    p = Xt({typed: t}), m = t(co, {
                        "number, number": sn, "SparseMatrix, SparseMatrix": function (e, t) {
                            return u(e, t, m, !1)
                        }, "SparseMatrix, DenseMatrix": function (e, t) {
                            return s(t, e, m, !0)
                        }, "DenseMatrix, SparseMatrix": function (e, t) {
                            return o(e, t, m, !1)
                        }, "DenseMatrix, DenseMatrix": function (e, t) {
                            return l(e, t, m)
                        }, "Array, Array": function (e, t) {
                            return m(r(e), r(t)).valueOf()
                        }, "Array, Matrix": function (e, t) {
                            return m(r(e), t)
                        }, "Matrix, Array": function (e, t) {
                            return m(e, r(t))
                        }, "SparseMatrix, number | BigNumber": function (e, t) {
                            return n(t, 0) ? e.clone() : f(e, t, m, !1)
                        }, "DenseMatrix, number | BigNumber": function (e, t) {
                            return n(t, 0) ? e.clone() : p(e, t, m, !1)
                        }, "number | BigNumber, SparseMatrix": function (e, t) {
                            return n(e, 0) ? i(t.size(), t.storage()) : c(t, e, m, !0)
                        }, "number | BigNumber, DenseMatrix": function (e, t) {
                            return n(e, 0) ? i(t.size(), t.storage()) : p(t, e, m, !0)
                        }, "Array, number | BigNumber": function (e, t) {
                            return m(r(e), t).valueOf()
                        }, "number | BigNumber, Array": function (e, t) {
                            return m(e, r(t)).valueOf()
                        }
                    });
                return m
            }), po = ["typed", "matrix", "equalScalar", "zeros", "not"], mo = Object(s.a)("and", po, function (e) {
                var t = e.typed, r = e.matrix, n = e.equalScalar, i = e.zeros, a = e.not,
                    o = tr({typed: t, equalScalar: n}), s = nr({typed: t, equalScalar: n}),
                    u = ar({typed: t, equalScalar: n}), c = Wt({typed: t}), f = Xt({typed: t}), l = t("and", {
                        "number, number": Tn, "Complex, Complex": function (e, t) {
                            return !(0 === e.re && 0 === e.im || 0 === t.re && 0 === t.im)
                        }, "BigNumber, BigNumber": function (e, t) {
                            return !(e.isZero() || t.isZero() || e.isNaN() || t.isNaN())
                        }, "Unit, Unit": function (e, t) {
                            return l(e.value || 0, t.value || 0)
                        }, "SparseMatrix, SparseMatrix": function (e, t) {
                            return s(e, t, l, !1)
                        }, "SparseMatrix, DenseMatrix": function (e, t) {
                            return o(t, e, l, !0)
                        }, "DenseMatrix, SparseMatrix": function (e, t) {
                            return o(e, t, l, !1)
                        }, "DenseMatrix, DenseMatrix": function (e, t) {
                            return c(e, t, l)
                        }, "Array, Array": function (e, t) {
                            return l(r(e), r(t)).valueOf()
                        }, "Array, Matrix": function (e, t) {
                            return l(r(e), t)
                        }, "Matrix, Array": function (e, t) {
                            return l(e, r(t))
                        }, "SparseMatrix, any": function (e, t) {
                            return a(t) ? i(e.size(), e.storage()) : u(e, t, l, !1)
                        }, "DenseMatrix, any": function (e, t) {
                            return a(t) ? i(e.size(), e.storage()) : f(e, t, l, !1)
                        }, "any, SparseMatrix": function (e, t) {
                            return a(e) ? i(e.size(), e.storage()) : u(t, e, l, !0)
                        }, "any, DenseMatrix": function (e, t) {
                            return a(e) ? i(e.size(), e.storage()) : f(t, e, l, !0)
                        }, "Array, any": function (e, t) {
                            return l(r(e), t).valueOf()
                        }, "any, Array": function (e, t) {
                            return l(e, r(t)).valueOf()
                        }
                    });
                return l
            }), ho = "compare", yo = ["typed", "config", "matrix", "equalScalar", "BigNumber", "Fraction", "DenseMatrix"],
            go = Object(s.a)(ho, yo, function (e) {
                var t = e.typed, r = e.config, n = e.equalScalar, i = e.matrix, a = e.BigNumber, o = e.Fraction,
                    s = e.DenseMatrix, u = mr({typed: t}), c = dr({typed: t, equalScalar: n}),
                    f = gr({typed: t, DenseMatrix: s}), l = Wt({typed: t}), p = Xt({typed: t}), m = t(ho, {
                        "boolean, boolean": function (e, t) {
                            return e === t ? 0 : t < e ? 1 : -1
                        }, "number, number": function (e, t) {
                            return Object(E.m)(e, t, r.epsilon) ? 0 : t < e ? 1 : -1
                        }, "BigNumber, BigNumber": function (e, t) {
                            return xe(e, t, r.epsilon) ? new a(0) : new a(e.cmp(t))
                        }, "Fraction, Fraction": function (e, t) {
                            return new o(e.compare(t))
                        }, "Complex, Complex": function () {
                            throw new TypeError("No ordering relation is defined for complex numbers")
                        }, "Unit, Unit": function (e, t) {
                            if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
                            return m(e.value, t.value)
                        }, "SparseMatrix, SparseMatrix": function (e, t) {
                            return c(e, t, m)
                        }, "SparseMatrix, DenseMatrix": function (e, t) {
                            return u(t, e, m, !0)
                        }, "DenseMatrix, SparseMatrix": function (e, t) {
                            return u(e, t, m, !1)
                        }, "DenseMatrix, DenseMatrix": function (e, t) {
                            return l(e, t, m)
                        }, "Array, Array": function (e, t) {
                            return m(i(e), i(t)).valueOf()
                        }, "Array, Matrix": function (e, t) {
                            return m(i(e), t)
                        }, "Matrix, Array": function (e, t) {
                            return m(e, i(t))
                        }, "SparseMatrix, any": function (e, t) {
                            return f(e, t, m, !1)
                        }, "DenseMatrix, any": function (e, t) {
                            return p(e, t, m, !1)
                        }, "any, SparseMatrix": function (e, t) {
                            return f(t, e, m, !0)
                        }, "any, DenseMatrix": function (e, t) {
                            return p(t, e, m, !0)
                        }, "Array, any": function (e, t) {
                            return p(i(e), t, m, !1).valueOf()
                        }, "any, Array": function (e, t) {
                            return p(i(t), e, m, !0).valueOf()
                        }
                    });
                return m
            }), vo = r(11), bo = r.n(vo), xo = "compareNatural", wo = ["typed", "compare"],
            No = Object(s.a)(xo, wo, function (e) {
                var t = e.typed, a = e.compare, o = a.signatures["boolean,boolean"], s = t(xo, {
                    "any, any": function (e, t) {
                        var r, n = Object(ie.M)(e), i = Object(ie.M)(t);
                        if (!("number" !== n && "BigNumber" !== n && "Fraction" !== n || "number" !== i && "BigNumber" !== i && "Fraction" !== i)) return "0" !== (r = a(e, t)).toString() ? 0 < r ? 1 : -1 : bo()(n, i);
                        if ("Array" === n || "Matrix" === n || "Array" === i || "Matrix" === i) return 0 !== (r = function e(t, r) {
                            if (Object(ie.H)(t) && Object(ie.H)(r)) return u(t.toJSON().values, r.toJSON().values);
                            if (Object(ie.H)(t)) return e(t.toArray(), r);
                            if (Object(ie.H)(r)) return e(t, r.toArray());
                            if (Object(ie.n)(t)) return e(t.toJSON().data, r);
                            if (Object(ie.n)(r)) return e(t, r.toJSON().data);
                            if (!Array.isArray(t)) return e([t], r);
                            if (!Array.isArray(r)) return e(t, [r]);
                            return u(t, r)
                        }(e, t)) ? r : bo()(n, i);
                        if (n !== i) return bo()(n, i);
                        if ("Complex" === n) return function (e, t) {
                            if (e.re > t.re) return 1;
                            if (e.re < t.re) return -1;
                            if (e.im > t.im) return 1;
                            if (e.im < t.im) return -1;
                            return 0
                        }(e, t);
                        if ("Unit" === n) return e.equalBase(t) ? s(e.value, t.value) : u(e.formatUnits(), t.formatUnits());
                        if ("boolean" === n) return o(e, t);
                        if ("string" === n) return bo()(e, t);
                        if ("Object" === n) return function (e, t) {
                            var r = Object.keys(e), n = Object.keys(t);
                            r.sort(bo.a), n.sort(bo.a);
                            var i = u(r, n);
                            if (0 !== i) return i;
                            for (var a = 0; a < r.length; a++) {
                                var o = s(e[r[a]], t[n[a]]);
                                if (0 !== o) return o
                            }
                            return 0
                        }(e, t);
                        if ("null" === n) return 0;
                        if ("undefined" === n) return 0;
                        throw new TypeError('Unsupported type of value "' + n + '"')
                    }
                });

                function u(e, t) {
                    for (var r = 0, n = Math.min(e.length, t.length); r < n; r++) {
                        var i = s(e[r], t[r]);
                        if (0 !== i) return i
                    }
                    return e.length > t.length ? 1 : e.length < t.length ? -1 : 0
                }

                return s
            });
        var Oo = "compareText", Mo = ["typed", "matrix"], jo = Object(s.a)(Oo, Mo, function (e) {
                var t = e.typed, r = e.matrix, n = Wt({typed: t}), i = Xt({typed: t}), a = t(Oo, {
                    "any, any": V.a, "DenseMatrix, DenseMatrix": function (e, t) {
                        return n(e, t, V.a)
                    }, "Array, Array": function (e, t) {
                        return a(r(e), r(t)).valueOf()
                    }, "Array, Matrix": function (e, t) {
                        return a(r(e), t)
                    }, "Matrix, Array": function (e, t) {
                        return a(e, r(t))
                    }, "DenseMatrix, any": function (e, t) {
                        return i(e, t, V.a, !1)
                    }, "any, DenseMatrix": function (e, t) {
                        return i(t, e, V.a, !0)
                    }, "Array, any": function (e, t) {
                        return i(r(e), t, V.a, !1).valueOf()
                    }, "any, Array": function (e, t) {
                        return i(r(t), e, V.a, !0).valueOf()
                    }
                });
                return a
            }), Eo = "equal", So = ["typed", "matrix", "equalScalar", "DenseMatrix"],
            Ao = Object(s.a)(Eo, So, function (e) {
                var t = e.typed, r = e.matrix, n = e.equalScalar, i = e.DenseMatrix, a = mr({typed: t}),
                    o = dn({typed: t, DenseMatrix: i}), s = gr({typed: t, DenseMatrix: i}), u = Wt({typed: t}),
                    c = Xt({typed: t}), f = t(Eo, {
                        "any, any": function (e, t) {
                            return null === e ? null === t : null === t ? null === e : void 0 === e ? void 0 === t : void 0 === t ? void 0 === e : n(e, t)
                        }, "SparseMatrix, SparseMatrix": function (e, t) {
                            return o(e, t, n)
                        }, "SparseMatrix, DenseMatrix": function (e, t) {
                            return a(t, e, n, !0)
                        }, "DenseMatrix, SparseMatrix": function (e, t) {
                            return a(e, t, n, !1)
                        }, "DenseMatrix, DenseMatrix": function (e, t) {
                            return u(e, t, n)
                        }, "Array, Array": function (e, t) {
                            return f(r(e), r(t)).valueOf()
                        }, "Array, Matrix": function (e, t) {
                            return f(r(e), t)
                        }, "Matrix, Array": function (e, t) {
                            return f(e, r(t))
                        }, "SparseMatrix, any": function (e, t) {
                            return s(e, t, n, !1)
                        }, "DenseMatrix, any": function (e, t) {
                            return c(e, t, n, !1)
                        }, "any, SparseMatrix": function (e, t) {
                            return s(t, e, n, !0)
                        }, "any, DenseMatrix": function (e, t) {
                            return c(t, e, n, !0)
                        }, "Array, any": function (e, t) {
                            return c(r(e), t, n, !1).valueOf()
                        }, "any, Array": function (e, t) {
                            return c(r(t), e, n, !0).valueOf()
                        }
                    });
                return f
            }), Co = (Object(s.a)(Eo, ["typed", "equalScalar"], function (e) {
                var t = e.typed, r = e.equalScalar;
                return t(Eo, {
                    "any, any": function (e, t) {
                        return null === e ? null === t : null === t ? null === e : void 0 === e ? void 0 === t : void 0 === t ? void 0 === e : r(e, t)
                    }
                })
            }), "equalText"), To = ["typed", "compareText", "isZero"], _o = Object(s.a)(Co, To, function (e) {
                var t = e.typed, r = e.compareText, n = e.isZero;
                return t(Co, {
                    "any, any": function (e, t) {
                        return n(r(e, t))
                    }
                })
            }), qo = "smaller", Io = ["typed", "config", "matrix", "DenseMatrix"], ko = Object(s.a)(qo, Io, function (e) {
                var t = e.typed, r = e.config, n = e.matrix, i = e.DenseMatrix, a = mr({typed: t}),
                    o = dn({typed: t, DenseMatrix: i}), s = gr({typed: t, DenseMatrix: i}), u = Wt({typed: t}),
                    c = Xt({typed: t}), f = t(qo, {
                        "boolean, boolean": function (e, t) {
                            return e < t
                        }, "number, number": function (e, t) {
                            return e < t && !Object(E.m)(e, t, r.epsilon)
                        }, "BigNumber, BigNumber": function (e, t) {
                            return e.lt(t) && !xe(e, t, r.epsilon)
                        }, "Fraction, Fraction": function (e, t) {
                            return -1 === e.compare(t)
                        }, "Complex, Complex": function () {
                            throw new TypeError("No ordering relation is defined for complex numbers")
                        }, "Unit, Unit": function (e, t) {
                            if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
                            return f(e.value, t.value)
                        }, "SparseMatrix, SparseMatrix": function (e, t) {
                            return o(e, t, f)
                        }, "SparseMatrix, DenseMatrix": function (e, t) {
                            return a(t, e, f, !0)
                        }, "DenseMatrix, SparseMatrix": function (e, t) {
                            return a(e, t, f, !1)
                        }, "DenseMatrix, DenseMatrix": function (e, t) {
                            return u(e, t, f)
                        }, "Array, Array": function (e, t) {
                            return f(n(e), n(t)).valueOf()
                        }, "Array, Matrix": function (e, t) {
                            return f(n(e), t)
                        }, "Matrix, Array": function (e, t) {
                            return f(e, n(t))
                        }, "SparseMatrix, any": function (e, t) {
                            return s(e, t, f, !1)
                        }, "DenseMatrix, any": function (e, t) {
                            return c(e, t, f, !1)
                        }, "any, SparseMatrix": function (e, t) {
                            return s(t, e, f, !0)
                        }, "any, DenseMatrix": function (e, t) {
                            return c(t, e, f, !0)
                        }, "Array, any": function (e, t) {
                            return c(n(e), t, f, !1).valueOf()
                        }, "any, Array": function (e, t) {
                            return c(n(t), e, f, !0).valueOf()
                        }
                    });
                return f
            }), Bo = "smallerEq", zo = ["typed", "config", "matrix", "DenseMatrix"], Do = Object(s.a)(Bo, zo, function (e) {
                var t = e.typed, r = e.config, n = e.matrix, i = e.DenseMatrix, a = mr({typed: t}),
                    o = dn({typed: t, DenseMatrix: i}), s = gr({typed: t, DenseMatrix: i}), u = Wt({typed: t}),
                    c = Xt({typed: t}), f = t(Bo, {
                        "boolean, boolean": function (e, t) {
                            return e <= t
                        }, "number, number": function (e, t) {
                            return e <= t || Object(E.m)(e, t, r.epsilon)
                        }, "BigNumber, BigNumber": function (e, t) {
                            return e.lte(t) || xe(e, t, r.epsilon)
                        }, "Fraction, Fraction": function (e, t) {
                            return 1 !== e.compare(t)
                        }, "Complex, Complex": function () {
                            throw new TypeError("No ordering relation is defined for complex numbers")
                        }, "Unit, Unit": function (e, t) {
                            if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
                            return f(e.value, t.value)
                        }, "SparseMatrix, SparseMatrix": function (e, t) {
                            return o(e, t, f)
                        }, "SparseMatrix, DenseMatrix": function (e, t) {
                            return a(t, e, f, !0)
                        }, "DenseMatrix, SparseMatrix": function (e, t) {
                            return a(e, t, f, !1)
                        }, "DenseMatrix, DenseMatrix": function (e, t) {
                            return u(e, t, f)
                        }, "Array, Array": function (e, t) {
                            return f(n(e), n(t)).valueOf()
                        }, "Array, Matrix": function (e, t) {
                            return f(n(e), t)
                        }, "Matrix, Array": function (e, t) {
                            return f(e, n(t))
                        }, "SparseMatrix, any": function (e, t) {
                            return s(e, t, f, !1)
                        }, "DenseMatrix, any": function (e, t) {
                            return c(e, t, f, !1)
                        }, "any, SparseMatrix": function (e, t) {
                            return s(t, e, f, !0)
                        }, "any, DenseMatrix": function (e, t) {
                            return c(t, e, f, !0)
                        }, "Array, any": function (e, t) {
                            return c(n(e), t, f, !1).valueOf()
                        }, "any, Array": function (e, t) {
                            return c(n(t), e, f, !0).valueOf()
                        }
                    });
                return f
            }), Ro = "larger", Po = ["typed", "config", "matrix", "DenseMatrix"], Uo = Object(s.a)(Ro, Po, function (e) {
                var t = e.typed, r = e.config, n = e.matrix, i = e.DenseMatrix, a = mr({typed: t}),
                    o = dn({typed: t, DenseMatrix: i}), s = gr({typed: t, DenseMatrix: i}), u = Wt({typed: t}),
                    c = Xt({typed: t}), f = t(Ro, {
                        "boolean, boolean": function (e, t) {
                            return t < e
                        }, "number, number": function (e, t) {
                            return t < e && !Object(E.m)(e, t, r.epsilon)
                        }, "BigNumber, BigNumber": function (e, t) {
                            return e.gt(t) && !xe(e, t, r.epsilon)
                        }, "Fraction, Fraction": function (e, t) {
                            return 1 === e.compare(t)
                        }, "Complex, Complex": function () {
                            throw new TypeError("No ordering relation is defined for complex numbers")
                        }, "Unit, Unit": function (e, t) {
                            if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
                            return f(e.value, t.value)
                        }, "SparseMatrix, SparseMatrix": function (e, t) {
                            return o(e, t, f)
                        }, "SparseMatrix, DenseMatrix": function (e, t) {
                            return a(t, e, f, !0)
                        }, "DenseMatrix, SparseMatrix": function (e, t) {
                            return a(e, t, f, !1)
                        }, "DenseMatrix, DenseMatrix": function (e, t) {
                            return u(e, t, f)
                        }, "Array, Array": function (e, t) {
                            return f(n(e), n(t)).valueOf()
                        }, "Array, Matrix": function (e, t) {
                            return f(n(e), t)
                        }, "Matrix, Array": function (e, t) {
                            return f(e, n(t))
                        }, "SparseMatrix, any": function (e, t) {
                            return s(e, t, f, !1)
                        }, "DenseMatrix, any": function (e, t) {
                            return c(e, t, f, !1)
                        }, "any, SparseMatrix": function (e, t) {
                            return s(t, e, f, !0)
                        }, "any, DenseMatrix": function (e, t) {
                            return c(t, e, f, !0)
                        }, "Array, any": function (e, t) {
                            return c(n(e), t, f, !1).valueOf()
                        }, "any, Array": function (e, t) {
                            return c(n(t), e, f, !0).valueOf()
                        }
                    });
                return f
            }), Fo = "largerEq", Lo = ["typed", "config", "matrix", "DenseMatrix"], Ho = Object(s.a)(Fo, Lo, function (e) {
                var t = e.typed, r = e.config, n = e.matrix, i = e.DenseMatrix, a = mr({typed: t}),
                    o = dn({typed: t, DenseMatrix: i}), s = gr({typed: t, DenseMatrix: i}), u = Wt({typed: t}),
                    c = Xt({typed: t}), f = t(Fo, {
                        "boolean, boolean": function (e, t) {
                            return t <= e
                        }, "number, number": function (e, t) {
                            return t <= e || Object(E.m)(e, t, r.epsilon)
                        }, "BigNumber, BigNumber": function (e, t) {
                            return e.gte(t) || xe(e, t, r.epsilon)
                        }, "Fraction, Fraction": function (e, t) {
                            return -1 !== e.compare(t)
                        }, "Complex, Complex": function () {
                            throw new TypeError("No ordering relation is defined for complex numbers")
                        }, "Unit, Unit": function (e, t) {
                            if (!e.equalBase(t)) throw new Error("Cannot compare units with different base");
                            return f(e.value, t.value)
                        }, "SparseMatrix, SparseMatrix": function (e, t) {
                            return o(e, t, f)
                        }, "SparseMatrix, DenseMatrix": function (e, t) {
                            return a(t, e, f, !0)
                        }, "DenseMatrix, SparseMatrix": function (e, t) {
                            return a(e, t, f, !1)
                        }, "DenseMatrix, DenseMatrix": function (e, t) {
                            return u(e, t, f)
                        }, "Array, Array": function (e, t) {
                            return f(n(e), n(t)).valueOf()
                        }, "Array, Matrix": function (e, t) {
                            return f(n(e), t)
                        }, "Matrix, Array": function (e, t) {
                            return f(e, n(t))
                        }, "SparseMatrix, any": function (e, t) {
                            return s(e, t, f, !1)
                        }, "DenseMatrix, any": function (e, t) {
                            return c(e, t, f, !1)
                        }, "any, SparseMatrix": function (e, t) {
                            return s(t, e, f, !0)
                        }, "any, DenseMatrix": function (e, t) {
                            return c(t, e, f, !0)
                        }, "Array, any": function (e, t) {
                            return c(n(e), t, f, !1).valueOf()
                        }, "any, Array": function (e, t) {
                            return c(n(t), e, f, !0).valueOf()
                        }
                    });
                return f
            }), $o = "deepEqual", Go = ["typed", "equal"], Zo = Object(s.a)($o, Go, function (e) {
                var t = e.typed, a = e.equal;
                return t($o, {
                    "any, any": function (e, t) {
                        return function e(t, r) {
                            {
                                if (Array.isArray(t)) {
                                    if (Array.isArray(r)) {
                                        var n = t.length;
                                        if (n !== r.length) return !1;
                                        for (var i = 0; i < n; i++) if (!e(t[i], r[i])) return !1;
                                        return !0
                                    }
                                    return !1
                                }
                                return !Array.isArray(r) && a(t, r)
                            }
                        }(e.valueOf(), t.valueOf())
                    }
                })
            }), Vo = "unequal", Jo = ["typed", "config", "equalScalar", "matrix", "DenseMatrix"],
            Wo = Object(s.a)(Vo, Jo, function (e) {
                var t = e.typed, r = (e.config, e.equalScalar), n = e.matrix, i = e.DenseMatrix, a = mr({typed: t}),
                    o = dn({typed: t, DenseMatrix: i}), s = gr({typed: t, DenseMatrix: i}), u = Wt({typed: t}),
                    c = Xt({typed: t}), f = t("unequal", {
                        "any, any": function (e, t) {
                            return null === e ? null !== t : null === t ? null !== e : void 0 === e ? void 0 !== t : void 0 === t ? void 0 !== e : l(e, t)
                        }, "SparseMatrix, SparseMatrix": function (e, t) {
                            return o(e, t, l)
                        }, "SparseMatrix, DenseMatrix": function (e, t) {
                            return a(t, e, l, !0)
                        }, "DenseMatrix, SparseMatrix": function (e, t) {
                            return a(e, t, l, !1)
                        }, "DenseMatrix, DenseMatrix": function (e, t) {
                            return u(e, t, l)
                        }, "Array, Array": function (e, t) {
                            return f(n(e), n(t)).valueOf()
                        }, "Array, Matrix": function (e, t) {
                            return f(n(e), t)
                        }, "Matrix, Array": function (e, t) {
                            return f(e, n(t))
                        }, "SparseMatrix, any": function (e, t) {
                            return s(e, t, l, !1)
                        }, "DenseMatrix, any": function (e, t) {
                            return c(e, t, l, !1)
                        }, "any, SparseMatrix": function (e, t) {
                            return s(t, e, l, !0)
                        }, "any, DenseMatrix": function (e, t) {
                            return c(t, e, l, !0)
                        }, "Array, any": function (e, t) {
                            return c(n(e), t, l, !1).valueOf()
                        }, "any, Array": function (e, t) {
                            return c(n(t), e, l, !0).valueOf()
                        }
                    });

                function l(e, t) {
                    return !r(e, t)
                }

                return f
            }), Yo = (Object(s.a)(Vo, ["typed", "equalScalar"], function (e) {
                var t = e.typed, r = e.equalScalar;
                return t(Vo, {
                    "any, any": function (e, t) {
                        return null === e ? null !== t : null === t ? null !== e : void 0 === e ? void 0 !== t : void 0 === t ? void 0 !== e : !r(e, t)
                    }
                })
            }), "partitionSelect"), Xo = ["typed", "isNumeric", "isNaN", "compare"], Qo = Object(s.a)(Yo, Xo, function (e) {
                function n(e, t) {
                    return -r(e, t)
                }

                var t = e.typed, f = e.isNumeric, l = e.isNaN, r = e.compare, i = r;
                return t(Yo, {
                    "Array | Matrix, number": function (e, t) {
                        return a(e, t, i)
                    }, "Array | Matrix, number, string": function (e, t, r) {
                        if ("asc" === r) return a(e, t, i);
                        if ("desc" === r) return a(e, t, n);
                        throw new Error('Compare string must be "asc" or "desc"')
                    }, "Array | Matrix, number, function": a
                });

                function a(e, t, r) {
                    if (!Object(E.i)(t) || t < 0) throw new Error("k must be a non-negative integer");
                    if (Object(ie.v)(e)) {
                        if (1 < e.size().length) throw new Error("Only one dimensional matrices supported");
                        return o(e.valueOf(), t, r)
                    }
                    if (Array.isArray(e)) return o(e, t, r)
                }

                function o(e, t, r) {
                    if (t >= e.length) throw new Error("k out of bounds");
                    for (var n = 0; n < e.length; n++) if (f(e[n]) && l(e[n])) return e[n];
                    for (var i = 0, a = e.length - 1; i < a;) {
                        for (var o, s = i, u = a, c = e[Math.floor(Math.random() * (a - i + 1)) + i]; s < u;) {
                            0 <= r(e[s], c) ? (o = e[u], e[u] = e[s], e[s] = o, --u) : ++s
                        }
                        0 < r(e[s], c) && --s, t <= s ? a = s : i = s + 1
                    }
                    return e[t]
                }
            }), Ko = ["typed", "matrix", "compare", "compareNatural"], es = Object(s.a)("sort", Ko, function (e) {
                function t(e, t) {
                    return -i(e, t)
                }

                var r = e.typed, n = e.matrix, i = e.compare, a = e.compareNatural, o = i;
                return r("sort", {
                    Array: function (e) {
                        return u(e), e.sort(o)
                    }, Matrix: function (e) {
                        return c(e), n(e.toArray().sort(o), e.storage())
                    }, "Array, function": function (e, t) {
                        return u(e), e.sort(t)
                    }, "Matrix, function": function (e, t) {
                        return c(e), n(e.toArray().sort(t), e.storage())
                    }, "Array, string": function (e, t) {
                        return u(e), e.sort(s(t))
                    }, "Matrix, string": function (e, t) {
                        return c(e), n(e.toArray().sort(s(t)), e.storage())
                    }
                });

                function s(e) {
                    if ("asc" === e) return o;
                    if ("desc" === e) return t;
                    if ("natural" === e) return a;
                    throw new Error('String "asc", "desc", or "natural" expected')
                }

                function u(e) {
                    if (1 !== Object(q.a)(e).length) throw new Error("One dimensional array expected")
                }

                function c(e) {
                    if (1 !== e.size().length) throw new Error("One dimensional matrix expected")
                }
            }), ts = ["typed", "larger"], rs = Object(s.a)("max", ts, function (e) {
                var t = e.typed, n = e.larger;
                return t("max", {
                    "Array | Matrix": i, "Array | Matrix, number | BigNumber": function (e, t) {
                        return F(e, t.valueOf(), r)
                    }, "...": function (e) {
                        if (P(e)) throw new TypeError("Scalar values expected in function max");
                        return i(e)
                    }
                });

                function r(e, t) {
                    try {
                        return n(e, t) ? e : t
                    } catch (e) {
                        throw la(e, "max", t)
                    }
                }

                function i(e) {
                    var r;
                    if (U(e, function (t) {
                        try {
                            isNaN(t) && "number" == typeof t ? r = NaN : void 0 !== r && !n(t, r) || (r = t)
                        } catch (e) {
                            throw la(e, "max", t)
                        }
                    }), void 0 === r) throw new Error("Cannot calculate max of an empty array");
                    return r
                }
            }), ns = ["typed", "smaller"], is = Object(s.a)("min", ns, function (e) {
                var t = e.typed, n = e.smaller;
                return t("min", {
                    "Array | Matrix": i, "Array | Matrix, number | BigNumber": function (e, t) {
                        return F(e, t.valueOf(), r)
                    }, "...": function (e) {
                        if (P(e)) throw new TypeError("Scalar values expected in function min");
                        return i(e)
                    }
                });

                function r(e, t) {
                    try {
                        return n(e, t) ? e : t
                    } catch (e) {
                        throw la(e, "min", t)
                    }
                }

                function i(e) {
                    var r;
                    if (U(e, function (t) {
                        try {
                            isNaN(t) && "number" == typeof t ? r = NaN : void 0 !== r && !n(t, r) || (r = t)
                        } catch (e) {
                            throw la(e, "min", t)
                        }
                    }), void 0 === r) throw new Error("Cannot calculate min of an empty array");
                    return r
                }
            }), as = ["smaller", "DenseMatrix"], os = Object(s.a)("ImmutableDenseMatrix", as, function (e) {
                var r = e.smaller, n = e.DenseMatrix;

                function i(e, t) {
                    if (!(this instanceof i)) throw new SyntaxError("Constructor must be called with the new operator");
                    if (t && !Object(ie.I)(t)) throw new Error("Invalid datatype: " + t);
                    if (Object(ie.v)(e) || Object(ie.b)(e)) {
                        var r = new n(e, t);
                        this._data = r._data, this._size = r._size, this._datatype = r._datatype, this._min = null, this._max = null
                    } else if (e && Object(ie.b)(e.data) && Object(ie.b)(e.size)) this._data = e.data, this._size = e.size, this._datatype = e.datatype, this._min = void 0 !== e.min ? e.min : null, this._max = void 0 !== e.max ? e.max : null; else {
                        if (e) throw new TypeError("Unsupported type of data (" + Object(ie.M)(e) + ")");
                        this._data = [], this._size = [0], this._datatype = t, this._min = null, this._max = null
                    }
                }

                return (i.prototype = new n).type = "ImmutableDenseMatrix", i.prototype.isImmutableDenseMatrix = !0, i.prototype.subset = function (e) {
                    switch (arguments.length) {
                        case 1:
                            var t = n.prototype.subset.call(this, e);
                            return Object(ie.v)(t) ? new i({data: t._data, size: t._size, datatype: t._datatype}) : t;
                        case 2:
                        case 3:
                            throw new Error("Cannot invoke set subset on an Immutable Matrix instance");
                        default:
                            throw new SyntaxError("Wrong number of arguments")
                    }
                }, i.prototype.set = function () {
                    throw new Error("Cannot invoke set on an Immutable Matrix instance")
                }, i.prototype.resize = function () {
                    throw new Error("Cannot invoke resize on an Immutable Matrix instance")
                }, i.prototype.reshape = function () {
                    throw new Error("Cannot invoke reshape on an Immutable Matrix instance")
                }, i.prototype.clone = function () {
                    return new i({data: Object(ae.a)(this._data), size: Object(ae.a)(this._size), datatype: this._datatype})
                }, i.prototype.toJSON = function () {
                    return {mathjs: "ImmutableDenseMatrix", data: this._data, size: this._size, datatype: this._datatype}
                }, i.fromJSON = function (e) {
                    return new i(e)
                }, i.prototype.swapRows = function () {
                    throw new Error("Cannot invoke swapRows on an Immutable Matrix instance")
                }, i.prototype.min = function () {
                    var t;
                    return null === this._min && (t = null, this.forEach(function (e) {
                        null !== t && !r(e, t) || (t = e)
                    }), this._min = null !== t ? t : void 0), this._min
                }, i.prototype.max = function () {
                    var t;
                    return null === this._max && (t = null, this.forEach(function (e) {
                        null !== t && !r(t, e) || (t = e)
                    }), this._max = null !== t ? t : void 0), this._max
                }, i
            }, {isClass: !0}), ss = ["ImmutableDenseMatrix"], us = Object(s.a)("Index", ss, function (e) {
                var n = e.ImmutableDenseMatrix;

                function o(e) {
                    if (!(this instanceof o)) throw new SyntaxError("Constructor must be called with the new operator");
                    this._dimensions = [], this._isScalar = !0;
                    for (var t = 0, r = arguments.length; t < r; t++) {
                        var n = arguments[t];
                        if (Object(ie.D)(n)) this._dimensions.push(n), this._isScalar = !1; else if (Array.isArray(n) || Object(ie.v)(n)) {
                            var i = s(n.valueOf());
                            this._dimensions.push(i);
                            var a = i.size();
                            1 === a.length && 1 === a[0] || (this._isScalar = !1)
                        } else if ("number" == typeof n) this._dimensions.push(s([n])); else {
                            if ("string" != typeof n) throw new TypeError("Dimension must be an Array, Matrix, number, string, or Range");
                            this._dimensions.push(n)
                        }
                    }
                }

                function s(e) {
                    for (var t = 0, r = e.length; t < r; t++) if ("number" != typeof e[t] || !Object(E.i)(e[t])) throw new TypeError("Index parameters must be positive integer numbers");
                    return new n(e)
                }

                return o.prototype.type = "Index", o.prototype.isIndex = !0, o.prototype.clone = function () {
                    var e = new o;
                    return e._dimensions = Object(ae.a)(this._dimensions), e._isScalar = this._isScalar, e
                }, o.create = function (e) {
                    var t = new o;
                    return o.apply(t, e), t
                }, o.prototype.size = function () {
                    for (var e = [], t = 0, r = this._dimensions.length; t < r; t++) {
                        var n = this._dimensions[t];
                        e[t] = "string" == typeof n ? 1 : n.size()[0]
                    }
                    return e
                }, o.prototype.max = function () {
                    for (var e = [], t = 0, r = this._dimensions.length; t < r; t++) {
                        var n = this._dimensions[t];
                        e[t] = "string" == typeof n ? n : n.max()
                    }
                    return e
                }, o.prototype.min = function () {
                    for (var e = [], t = 0, r = this._dimensions.length; t < r; t++) {
                        var n = this._dimensions[t];
                        e[t] = "string" == typeof n ? n : n.min()
                    }
                    return e
                }, o.prototype.forEach = function (e) {
                    for (var t = 0, r = this._dimensions.length; t < r; t++) e(this._dimensions[t], t, this)
                }, o.prototype.dimension = function (e) {
                    return this._dimensions[e] || null
                }, o.prototype.isObjectProperty = function () {
                    return 1 === this._dimensions.length && "string" == typeof this._dimensions[0]
                }, o.prototype.getObjectProperty = function () {
                    return this.isObjectProperty() ? this._dimensions[0] : null
                }, o.prototype.isScalar = function () {
                    return this._isScalar
                }, o.prototype.valueOf = o.prototype.toArray = function () {
                    for (var e = [], t = 0, r = this._dimensions.length; t < r; t++) {
                        var n = this._dimensions[t];
                        e.push("string" == typeof n ? n : n.toArray())
                    }
                    return e
                }, o.prototype.toString = function () {
                    for (var e = [], t = 0, r = this._dimensions.length; t < r; t++) {
                        var n = this._dimensions[t];
                        "string" == typeof n ? e.push(JSON.stringify(n)) : e.push(n.toString())
                    }
                    return "[" + e.join(", ") + "]"
                }, o.prototype.toJSON = function () {
                    return {mathjs: "Index", dimensions: this._dimensions}
                }, o.fromJSON = function (e) {
                    return o.create(e.dimensions)
                }, o
            }, {isClass: !0}), cs = ["smaller", "larger"], fs = Object(s.a)("FibonacciHeap", cs, function (e) {
                var l = e.smaller, p = e.larger, m = 1 / Math.log((1 + Math.sqrt(5)) / 2);

                function t() {
                    if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
                    this._minimum = null, this._size = 0
                }

                function i(e, t, r) {
                    t.left.right = t.right, t.right.left = t.left, r.degree--, r.child === t && (r.child = t.right), 0 === r.degree && (r.child = null), t.left = e, t.right = e.right, ((e.right = t).right.left = t).parent = null, t.mark = !1
                }

                t.prototype.type = "FibonacciHeap", t.prototype.isFibonacciHeap = !0, t.prototype.insert = function (e, t) {
                    var r, n = {key: e, value: t, degree: 0};
                    return this._minimum ? (r = this._minimum, n.left = r, n.right = r.right, (r.right = n).right.left = n, l(e, r.key) && (this._minimum = n)) : ((n.left = n).right = n, this._minimum = n), this._size++, n
                }, t.prototype.size = function () {
                    return this._size
                }, t.prototype.clear = function () {
                    this._minimum = null, this._size = 0
                }, t.prototype.isEmpty = function () {
                    return 0 === this._size
                }, t.prototype.extractMinimum = function () {
                    var e = this._minimum;
                    if (null === e) return e;
                    for (var t = this._minimum, r = e.degree, n = e.child; 0 < r;) {
                        var i = n.right;
                        n.left.right = n.right, n.right.left = n.left, n.left = t, n.right = t.right, ((t.right = n).right.left = n).parent = null, n = i, r--
                    }
                    return e.left.right = e.right, e.right.left = e.left, t = e === e.right ? null : function (e, t) {
                        var r, n = Math.floor(Math.log(t) * m) + 1, i = new Array(n), a = 0, o = e;
                        if (o) for (a++, o = o.right; o !== e;) a++, o = o.right;
                        for (; 0 < a;) {
                            for (var s, u = o.degree, c = o.right; r = i[u];) {
                                p(o.key, r.key) && (s = r, r = o, o = s), h(r, o), i[u] = null, u++
                            }
                            i[u] = o, o = c, a--
                        }
                        e = null;
                        for (var f = 0; f < n; f++) (r = i[f]) && (e ? (r.left.right = r.right, r.right.left = r.left, r.left = e, r.right = e.right, (e.right = r).right.left = r, l(r.key, e.key) && (e = r)) : e = r);
                        return e
                    }(t = e.right, this._size), this._size--, this._minimum = t, e
                }, t.prototype.remove = function (e) {
                    this._minimum = function (e, t, r) {
                        t.key = r;
                        var n = t.parent;
                        n && l(t.key, n.key) && (i(e, t, n), function e(t, r) {
                            var n = r.parent;
                            if (!n) return;
                            r.mark ? (i(t, r, n), e(n)) : r.mark = !0
                        }(e, n));
                        l(t.key, e.key) && (e = t);
                        return e
                    }(this._minimum, e, -1), this.extractMinimum()
                };
                var h = function (e, t) {
                    e.left.right = e.right, e.right.left = e.left, (e.parent = t).child ? (e.left = t.child, e.right = t.child.right, (t.child.right = e).right.left = e) : ((t.child = e).right = e).left = e, t.degree++, e.mark = !1
                };
                return t
            }, {isClass: !0}), ls = ["addScalar", "equalScalar", "FibonacciHeap"],
            ps = Object(s.a)("Spa", ls, function (e) {
                var n = e.addScalar, c = e.equalScalar, t = e.FibonacciHeap;

                function r() {
                    if (!(this instanceof r)) throw new SyntaxError("Constructor must be called with the new operator");
                    this._values = [], this._heap = new t
                }

                return r.prototype.type = "Spa", r.prototype.isSpa = !0, r.prototype.set = function (e, t) {
                    var r;
                    this._values[e] ? this._values[e].value = t : (r = this._heap.insert(e, t), this._values[e] = r)
                }, r.prototype.get = function (e) {
                    var t = this._values[e];
                    return t ? t.value : 0
                }, r.prototype.accumulate = function (e, t) {
                    var r = this._values[e];
                    r ? r.value = n(r.value, t) : (r = this._heap.insert(e, t), this._values[e] = r)
                }, r.prototype.forEach = function (e, t, r) {
                    var n = this._heap, i = this._values, a = [];
                    for ((s = n.extractMinimum()) && a.push(s); s && s.key <= t;) s.key >= e && (c(s.value, 0) || r(s.key, s.value, this)), (s = n.extractMinimum()) && a.push(s);
                    for (var o = 0; o < a.length; o++) {
                        var s, u = a[o];
                        i[(s = n.insert(u.key, u.value)).key] = s
                    }
                }, r.prototype.swap = function (e, t) {
                    var r, n = this._values[e], i = this._values[t];
                    !n && i ? (n = this._heap.insert(e, i.value), this._heap.remove(i), this._values[e] = n, this._values[t] = void 0) : n && !i ? (i = this._heap.insert(t, n.value), this._heap.remove(n), this._values[t] = i, this._values[e] = void 0) : n && i && (r = n.value, n.value = i.value, i.value = r)
                }, r
            }, {isClass: !0}), ms = Zn(function (e) {
                return new e(1).exp()
            }, gs), hs = Zn(function (e) {
                return new e(1).plus(new e(5).sqrt()).div(2)
            }, gs), ds = Zn(function (e) {
                return e.acos(-1)
            }, gs), ys = Zn(function (e) {
                return ds(e).times(2)
            }, gs);

        function gs(e) {
            return e[0].precision
        }

        function vs(e) {
            return (vs = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function bs() {
            return (bs = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }).apply(this, arguments)
        }

        function xs(t, e) {
            var r, n = Object.keys(t);
            return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, r)), n
        }

        function ws(i) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? xs(Object(a), !0).forEach(function (e) {
                    var t, r, n;
                    t = i, n = a[r = e], r in t ? Object.defineProperty(t, r, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[r] = n
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : xs(Object(a)).forEach(function (e) {
                    Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
                })
            }
            return i
        }

        var Ns = ["?on", "config", "addScalar", "subtract", "multiplyScalar", "divideScalar", "pow", "abs", "fix", "round", "equal", "isNumeric", "format", "number", "Complex", "BigNumber", "Fraction"],
            Os = Object(s.a)("Unit", Ns, function (e) {
                var y, g, v, t = e.on, b = e.config, c = e.addScalar, f = e.subtract, l = e.multiplyScalar,
                    p = e.divideScalar, m = e.pow, h = e.abs, d = e.fix, x = e.round, w = e.equal, i = e.isNumeric,
                    s = e.format, r = e.number, n = e.Complex, N = e.BigNumber, O = e.Fraction, a = r;

                function M(e, t) {
                    if (!(this instanceof M)) throw new Error("Constructor must be called with the new operator");
                    if (null != e && !i(e) && !Object(ie.j)(e)) throw new TypeError("First parameter in Unit constructor must be number, BigNumber, Fraction, Complex, or undefined");
                    if (void 0 !== t && ("string" != typeof t || "" === t)) throw new TypeError("Second parameter in Unit constructor must be a string");
                    if (void 0 !== t) {
                        var r = M.parse(t);
                        this.units = r.units, this.dimensions = r.dimensions
                    } else {
                        this.units = [{unit: B, prefix: _.NONE, power: 0}], this.dimensions = [];
                        for (var n = 0; n < q.length; n++) this.dimensions[n] = 0
                    }
                    this.value = null != e ? this._normalize(e) : null, this.fixPrefix = !1, this.skipAutomaticSimplification = !0
                }

                function j() {
                    for (; " " === v || "\t" === v;) E()
                }

                function o(e) {
                    return "0" <= e && e <= "9"
                }

                function E() {
                    g++, v = y.charAt(g)
                }

                function u(e) {
                    g = e, v = y.charAt(g)
                }

                function S() {
                    var e, t = "", r = g;
                    if ("+" === v ? E() : "-" === v && (t += v, E()), !("0" <= (e = v) && e <= "9" || "." === e)) return u(r), null;
                    if ("." === v) {
                        if (t += v, E(), !o(v)) return u(r), null
                    } else {
                        for (; o(v);) t += v, E();
                        "." === v && (t += v, E())
                    }
                    for (; o(v);) t += v, E();
                    if ("E" === v || "e" === v) {
                        var n = "", i = g;
                        if (n += v, E(), "+" !== v && "-" !== v || (n += v, E()), !o(v)) return u(i), t;
                        for (t += n; o(v);) t += v, E()
                    }
                    return t
                }

                function A(e) {
                    return v === e && (E(), e)
                }

                function C(e) {
                    if (Object(ae.f)(z, e)) {
                        var t = z[e];
                        return {unit: t, prefix: t.prefixes[""]}
                    }
                    for (var r in z) if (Object(ae.f)(z, r) && Object(V.b)(e, r)) {
                        var n = z[r], i = e.length - r.length, a = e.substring(0, i),
                            o = Object(ae.f)(n.prefixes, a) ? n.prefixes[a] : void 0;
                        if (void 0 !== o) return {unit: n, prefix: o}
                    }
                    return null
                }

                function T(e) {
                    return e.equalBase(I.NONE) && null !== e.value && !b.predictable ? e.value : e
                }

                M.prototype.type = "Unit", M.prototype.isUnit = !0, M.parse = function (e, t) {
                    if (t = t || {}, g = -1, v = "", "string" != typeof (y = e)) throw new TypeError("Invalid argument in Unit.parse, string expected");
                    var r = new M, n = 1, i = !(r.units = []);
                    E(), j();
                    var a = S(), o = null;
                    if (a) {
                        if ("BigNumber" === b.number) o = new N(a); else if ("Fraction" === b.number) try {
                            o = new O(a)
                        } catch (e) {
                            o = parseFloat(a)
                        } else o = parseFloat(a);
                        j(), A("*") ? (n = 1, i = !0) : A("/") && (n = -1, i = !0)
                    }
                    for (var s = [], u = 1; ;) {
                        for (j(); "(" === v;) s.push(n), u *= n, n = 1, E(), j();
                        var c = void 0;
                        if (!v) break;
                        var f = v;
                        if (null === (c = function () {
                            for (var e = "", t = y.charCodeAt(g); 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122;) e += v, E(), t = y.charCodeAt(g);
                            return (65 <= (t = e.charCodeAt(0)) && t <= 90 || 97 <= t && t <= 122) && e || null
                        }())) throw new SyntaxError('Unexpected "' + f + '" in "' + y + '" at index ' + g.toString());
                        var l = C(c);
                        if (null === l) throw new SyntaxError('Unit "' + c + '" not found.');
                        var p = n * u;
                        if (j(), A("^")) {
                            j();
                            var m = S();
                            if (null === m) throw new SyntaxError('In "' + e + '", "^" must be followed by a floating-point number');
                            p *= m
                        }
                        r.units.push({unit: l.unit, prefix: l.prefix, power: p});
                        for (var h, d = 0; d < q.length; d++) r.dimensions[d] += (l.unit.dimensions[d] || 0) * p;
                        for (j(); ")" === v;) {
                            if (0 === s.length) throw new SyntaxError('Unmatched ")" in "' + y + '" at index ' + g.toString());
                            u /= s.pop(), E(), j()
                        }
                        i = !1, A("*") ? (n = 1, i = !0) : A("/") ? (n = -1, i = !0) : n = 1, l.unit.base && (h = l.unit.base.key, P.auto[h] = {
                            unit: l.unit,
                            prefix: l.prefix
                        })
                    }
                    if (j(), v) throw new SyntaxError('Could not parse: "' + e + '"');
                    if (i) throw new SyntaxError('Trailing characters: "' + e + '"');
                    if (0 !== s.length) throw new SyntaxError('Unmatched "(" in "' + y + '"');
                    if (0 === r.units.length && !t.allowNoUnits) throw new SyntaxError('"' + e + '" contains no units');
                    return r.value = void 0 !== o ? r._normalize(o) : null, r
                }, M.prototype.clone = function () {
                    var e = new M;
                    e.fixPrefix = this.fixPrefix, e.skipAutomaticSimplification = this.skipAutomaticSimplification, e.value = Object(ae.a)(this.value), e.dimensions = this.dimensions.slice(0), e.units = [];
                    for (var t = 0; t < this.units.length; t++) for (var r in e.units[t] = {}, this.units[t]) Object(ae.f)(this.units[t], r) && (e.units[t][r] = this.units[t][r]);
                    return e
                }, M.prototype._isDerived = function () {
                    return 0 !== this.units.length && (1 < this.units.length || 1e-15 < Math.abs(this.units[0].power - 1))
                }, M.prototype._normalize = function (e) {
                    var t, r, n, i;
                    if (null == e || 0 === this.units.length) return e;
                    if (this._isDerived()) {
                        for (var a = e, o = M._getNumberConverter(Object(ie.M)(e)), s = 0; s < this.units.length; s++) t = o(this.units[s].unit.value), i = o(this.units[s].prefix.value), n = o(this.units[s].power), a = l(a, m(l(t, i), n));
                        return a
                    }
                    return t = (o = M._getNumberConverter(Object(ie.M)(e)))(this.units[0].unit.value), r = o(this.units[0].unit.offset), i = o(this.units[0].prefix.value), l(c(e, r), l(t, i))
                }, M.prototype._denormalize = function (e, t) {
                    var r, n, i, a;
                    if (null == e || 0 === this.units.length) return e;
                    if (this._isDerived()) {
                        for (var o = e, s = M._getNumberConverter(Object(ie.M)(e)), u = 0; u < this.units.length; u++) r = s(this.units[u].unit.value), a = s(this.units[u].prefix.value), i = s(this.units[u].power), o = p(o, m(l(r, a), i));
                        return o
                    }
                    return r = (s = M._getNumberConverter(Object(ie.M)(e)))(this.units[0].unit.value), a = s(this.units[0].prefix.value), n = s(this.units[0].unit.offset), f(p(p(e, r), null == t ? a : t), n)
                }, M.isValuelessUnit = function (e) {
                    return null !== C(e)
                }, M.prototype.hasBase = function (e) {
                    if ("string" == typeof e && (e = I[e]), !e) return !1;
                    for (var t = 0; t < q.length; t++) if (1e-12 < Math.abs((this.dimensions[t] || 0) - (e.dimensions[t] || 0))) return !1;
                    return !0
                }, M.prototype.equalBase = function (e) {
                    for (var t = 0; t < q.length; t++) if (1e-12 < Math.abs((this.dimensions[t] || 0) - (e.dimensions[t] || 0))) return !1;
                    return !0
                }, M.prototype.equals = function (e) {
                    return this.equalBase(e) && w(this.value, e.value)
                }, M.prototype.multiply = function (e) {
                    for (var t = this.clone(), r = 0; r < q.length; r++) t.dimensions[r] = (this.dimensions[r] || 0) + (e.dimensions[r] || 0);
                    for (var n, i, a = 0; a < e.units.length; a++) {
                        var o = ws({}, e.units[a]);
                        t.units.push(o)
                    }
                    return null !== this.value || null !== e.value ? (n = null === this.value ? this._normalize(1) : this.value, i = null === e.value ? e._normalize(1) : e.value, t.value = l(n, i)) : t.value = null, t.skipAutomaticSimplification = !1, T(t)
                }, M.prototype.divide = function (e) {
                    for (var t = this.clone(), r = 0; r < q.length; r++) t.dimensions[r] = (this.dimensions[r] || 0) - (e.dimensions[r] || 0);
                    for (var n, i, a = 0; a < e.units.length; a++) {
                        var o = ws(ws({}, e.units[a]), {}, {power: -e.units[a].power});
                        t.units.push(o)
                    }
                    return null !== this.value || null !== e.value ? (n = null === this.value ? this._normalize(1) : this.value, i = null === e.value ? e._normalize(1) : e.value, t.value = p(n, i)) : t.value = null, t.skipAutomaticSimplification = !1, T(t)
                }, M.prototype.pow = function (e) {
                    for (var t = this.clone(), r = 0; r < q.length; r++) t.dimensions[r] = (this.dimensions[r] || 0) * e;
                    for (var n = 0; n < t.units.length; n++) t.units[n].power *= e;
                    return null !== t.value ? t.value = m(t.value, e) : t.value = null, t.skipAutomaticSimplification = !1, T(t)
                }, M.prototype.abs = function () {
                    var e = this.clone();
                    for (var t in e.value = null !== e.value ? h(e.value) : null, e.units) "VA" !== e.units[t].unit.name && "VAR" !== e.units[t].unit.name || (e.units[t].unit = z.W);
                    return e
                }, M.prototype.to = function (e) {
                    var t, r = null === this.value ? this._normalize(1) : this.value;
                    if ("string" == typeof e) {
                        if (t = M.parse(e), !this.equalBase(t)) throw new Error("Units do not match ('".concat(t.toString(), "' != '").concat(this.toString(), "')"));
                        if (null !== t.value) throw new Error("Cannot convert to a unit with a value");
                        return t.value = Object(ae.a)(r), t.fixPrefix = !0, t.skipAutomaticSimplification = !0, t
                    }
                    if (Object(ie.L)(e)) {
                        if (!this.equalBase(e)) throw new Error("Units do not match ('".concat(e.toString(), "' != '").concat(this.toString(), "')"));
                        if (null !== e.value) throw new Error("Cannot convert to a unit with a value");
                        return (t = e.clone()).value = Object(ae.a)(r), t.fixPrefix = !0, t.skipAutomaticSimplification = !0, t
                    }
                    throw new Error("String or Unit expected as parameter")
                }, M.prototype.toNumber = function (e) {
                    return a(this.toNumeric(e))
                }, M.prototype.toNumeric = function (e) {
                    var t = e ? this.to(e) : this.clone();
                    return t._isDerived() || 0 === t.units.length ? t._denormalize(t.value) : t._denormalize(t.value, t.units[0].prefix.value)
                }, M.prototype.toString = function () {
                    return this.format()
                }, M.prototype.toJSON = function () {
                    return {
                        mathjs: "Unit",
                        value: this._denormalize(this.value),
                        unit: this.formatUnits(),
                        fixPrefix: this.fixPrefix
                    }
                }, M.fromJSON = function (e) {
                    var t = new M(e.value, e.unit);
                    return t.fixPrefix = e.fixPrefix || !1, t
                }, M.prototype.valueOf = M.prototype.toString, M.prototype.simplify = function () {
                    var e, t, r = this.clone(), n = [];
                    for (var i in F) if (Object(ae.f)(F, i) && r.hasBase(I[i])) {
                        e = i;
                        break
                    }
                    if ("NONE" === e) r.units = []; else if (e && Object(ae.f)(F, e) && (t = F[e]), t) r.units = [{
                        unit: t.unit,
                        prefix: t.prefix,
                        power: 1
                    }]; else {
                        for (var a = !1, o = 0; o < q.length; o++) {
                            var s = q[o];
                            1e-12 < Math.abs(r.dimensions[o] || 0) && (Object(ae.f)(F, s) ? n.push({
                                unit: F[s].unit,
                                prefix: F[s].prefix,
                                power: r.dimensions[o] || 0
                            }) : a = !0)
                        }
                        n.length < r.units.length && !a && (r.units = n)
                    }
                    return r
                }, M.prototype.toSI = function () {
                    for (var e = this.clone(), t = [], r = 0; r < q.length; r++) {
                        var n = q[r];
                        if (1e-12 < Math.abs(e.dimensions[r] || 0)) {
                            if (!Object(ae.f)(P.si, n)) throw new Error("Cannot express custom unit " + n + " in SI units");
                            t.push({unit: P.si[n].unit, prefix: P.si[n].prefix, power: e.dimensions[r] || 0})
                        }
                    }
                    return e.units = t, e.fixPrefix = !0, e.skipAutomaticSimplification = !0, e
                }, M.prototype.formatUnits = function () {
                    for (var e = "", t = "", r = 0, n = 0, i = 0; i < this.units.length; i++) 0 < this.units[i].power ? (r++, e += " " + this.units[i].prefix.name + this.units[i].unit.name, 1e-15 < Math.abs(this.units[i].power - 1) && (e += "^" + this.units[i].power)) : this.units[i].power < 0 && n++;
                    if (0 < n) for (var a = 0; a < this.units.length; a++) this.units[a].power < 0 && (0 < r ? (t += " " + this.units[a].prefix.name + this.units[a].unit.name, 1e-15 < Math.abs(this.units[a].power + 1) && (t += "^" + -this.units[a].power)) : (t += " " + this.units[a].prefix.name + this.units[a].unit.name, t += "^" + this.units[a].power));
                    e = e.substr(1), t = t.substr(1), 1 < r && 0 < n && (e = "(" + e + ")"), 1 < n && 0 < r && (t = "(" + t + ")");
                    var o = e;
                    return 0 < r && 0 < n && (o += " / "), o += t
                }, M.prototype.format = function (e) {
                    var t = this.skipAutomaticSimplification || null === this.value ? this.clone() : this.simplify(),
                        r = !1;
                    for (var n in void 0 !== t.value && null !== t.value && Object(ie.j)(t.value) && (r = Math.abs(t.value.re) < 1e-14), t.units) Object(ae.f)(t.units, n) && t.units[n].unit && ("VA" === t.units[n].unit.name && r ? t.units[n].unit = z.VAR : "VAR" !== t.units[n].unit.name || r || (t.units[n].unit = z.VA));
                    1 !== t.units.length || t.fixPrefix || Math.abs(t.units[0].power - Math.round(t.units[0].power)) < 1e-14 && (t.units[0].prefix = t._bestPrefix());
                    var i = t._denormalize(t.value), a = null !== t.value ? s(i, e || {}) : "", o = t.formatUnits();
                    return t.value && Object(ie.j)(t.value) && (a = "(" + a + ")"), 0 < o.length && 0 < a.length && (a += " "), a += o
                }, M.prototype._bestPrefix = function () {
                    if (1 !== this.units.length) throw new Error("Can only compute the best prefix for single units with integer powers, like kg, s^2, N^-1, and so forth!");
                    if (1e-14 <= Math.abs(this.units[0].power - Math.round(this.units[0].power))) throw new Error("Can only compute the best prefix for single units with integer powers, like kg, s^2, N^-1, and so forth!");
                    var e = null !== this.value ? h(this.value) : 0, t = h(this.units[0].unit.value),
                        r = this.units[0].prefix;
                    if (0 === e) return r;
                    var n = this.units[0].power, i = Math.log(e / Math.pow(r.value * t, n)) / Math.LN10 - 1.2;
                    if (-2.200001 < i && i < 1.800001) return r;
                    i = Math.abs(i);
                    var a, o, s = this.units[0].unit.prefixes;
                    for (var u in s) {
                        Object(ae.f)(s, u) && (!(a = s[u]).scientific || ((o = Math.abs(Math.log(e / Math.pow(a.value * t, n)) / Math.LN10 - 1.2)) < i || o === i && a.name.length < r.name.length) && (r = a, i = o))
                    }
                    return r
                };
                var _ = {
                    NONE: {"": {name: "", value: 1, scientific: !0}},
                    SHORT: {
                        "": {name: "", value: 1, scientific: !0},
                        da: {
                            name: "da", value: 10, scientific: !(M.prototype.splitUnit = function (e) {
                                for (var t = this.clone(), r = [], n = 0; n < e.length && (t = t.to(e[n]), n !== e.length - 1); n++) {
                                    var i = t.toNumeric(), a = x(i),
                                        o = new M(w(a, i) ? a : d(t.toNumeric()), e[n].toString());
                                    r.push(o), t = f(t, o)
                                }
                                for (var s = 0, u = 0; u < r.length; u++) s = c(s, r[u].value);
                                return w(s, this.value) && (t.value = 0), r.push(t), r
                            })
                        },
                        h: {name: "h", value: 100, scientific: !1},
                        k: {name: "k", value: 1e3, scientific: !0},
                        M: {name: "M", value: 1e6, scientific: !0},
                        G: {name: "G", value: 1e9, scientific: !0},
                        T: {name: "T", value: 1e12, scientific: !0},
                        P: {name: "P", value: 1e15, scientific: !0},
                        E: {name: "E", value: 1e18, scientific: !0},
                        Z: {name: "Z", value: 1e21, scientific: !0},
                        Y: {name: "Y", value: 1e24, scientific: !0},
                        d: {name: "d", value: .1, scientific: !1},
                        c: {name: "c", value: .01, scientific: !1},
                        m: {name: "m", value: .001, scientific: !0},
                        u: {name: "u", value: 1e-6, scientific: !0},
                        n: {name: "n", value: 1e-9, scientific: !0},
                        p: {name: "p", value: 1e-12, scientific: !0},
                        f: {name: "f", value: 1e-15, scientific: !0},
                        a: {name: "a", value: 1e-18, scientific: !0},
                        z: {name: "z", value: 1e-21, scientific: !0},
                        y: {name: "y", value: 1e-24, scientific: !0}
                    },
                    LONG: {
                        "": {name: "", value: 1, scientific: !0},
                        deca: {name: "deca", value: 10, scientific: !1},
                        hecto: {name: "hecto", value: 100, scientific: !1},
                        kilo: {name: "kilo", value: 1e3, scientific: !0},
                        mega: {name: "mega", value: 1e6, scientific: !0},
                        giga: {name: "giga", value: 1e9, scientific: !0},
                        tera: {name: "tera", value: 1e12, scientific: !0},
                        peta: {name: "peta", value: 1e15, scientific: !0},
                        exa: {name: "exa", value: 1e18, scientific: !0},
                        zetta: {name: "zetta", value: 1e21, scientific: !0},
                        yotta: {name: "yotta", value: 1e24, scientific: !0},
                        deci: {name: "deci", value: .1, scientific: !1},
                        centi: {name: "centi", value: .01, scientific: !1},
                        milli: {name: "milli", value: .001, scientific: !0},
                        micro: {name: "micro", value: 1e-6, scientific: !0},
                        nano: {name: "nano", value: 1e-9, scientific: !0},
                        pico: {name: "pico", value: 1e-12, scientific: !0},
                        femto: {name: "femto", value: 1e-15, scientific: !0},
                        atto: {name: "atto", value: 1e-18, scientific: !0},
                        zepto: {name: "zepto", value: 1e-21, scientific: !0},
                        yocto: {name: "yocto", value: 1e-24, scientific: !0}
                    },
                    SQUARED: {
                        "": {name: "", value: 1, scientific: !0},
                        da: {name: "da", value: 100, scientific: !1},
                        h: {name: "h", value: 1e4, scientific: !1},
                        k: {name: "k", value: 1e6, scientific: !0},
                        M: {name: "M", value: 1e12, scientific: !0},
                        G: {name: "G", value: 1e18, scientific: !0},
                        T: {name: "T", value: 1e24, scientific: !0},
                        P: {name: "P", value: 1e30, scientific: !0},
                        E: {name: "E", value: 1e36, scientific: !0},
                        Z: {name: "Z", value: 1e42, scientific: !0},
                        Y: {name: "Y", value: 1e48, scientific: !0},
                        d: {name: "d", value: .01, scientific: !1},
                        c: {name: "c", value: 1e-4, scientific: !1},
                        m: {name: "m", value: 1e-6, scientific: !0},
                        u: {name: "u", value: 1e-12, scientific: !0},
                        n: {name: "n", value: 1e-18, scientific: !0},
                        p: {name: "p", value: 1e-24, scientific: !0},
                        f: {name: "f", value: 1e-30, scientific: !0},
                        a: {name: "a", value: 1e-36, scientific: !0},
                        z: {name: "z", value: 1e-42, scientific: !0},
                        y: {name: "y", value: 1e-48, scientific: !0}
                    },
                    CUBIC: {
                        "": {name: "", value: 1, scientific: !0},
                        da: {name: "da", value: 1e3, scientific: !1},
                        h: {name: "h", value: 1e6, scientific: !1},
                        k: {name: "k", value: 1e9, scientific: !0},
                        M: {name: "M", value: 1e18, scientific: !0},
                        G: {name: "G", value: 1e27, scientific: !0},
                        T: {name: "T", value: 1e36, scientific: !0},
                        P: {name: "P", value: 1e45, scientific: !0},
                        E: {name: "E", value: 1e54, scientific: !0},
                        Z: {name: "Z", value: 1e63, scientific: !0},
                        Y: {name: "Y", value: 1e72, scientific: !0},
                        d: {name: "d", value: .001, scientific: !1},
                        c: {name: "c", value: 1e-6, scientific: !1},
                        m: {name: "m", value: 1e-9, scientific: !0},
                        u: {name: "u", value: 1e-18, scientific: !0},
                        n: {name: "n", value: 1e-27, scientific: !0},
                        p: {name: "p", value: 1e-36, scientific: !0},
                        f: {name: "f", value: 1e-45, scientific: !0},
                        a: {name: "a", value: 1e-54, scientific: !0},
                        z: {name: "z", value: 1e-63, scientific: !0},
                        y: {name: "y", value: 1e-72, scientific: !0}
                    },
                    BINARY_SHORT_SI: {
                        "": {name: "", value: 1, scientific: !0},
                        k: {name: "k", value: 1e3, scientific: !0},
                        M: {name: "M", value: 1e6, scientific: !0},
                        G: {name: "G", value: 1e9, scientific: !0},
                        T: {name: "T", value: 1e12, scientific: !0},
                        P: {name: "P", value: 1e15, scientific: !0},
                        E: {name: "E", value: 1e18, scientific: !0},
                        Z: {name: "Z", value: 1e21, scientific: !0},
                        Y: {name: "Y", value: 1e24, scientific: !0}
                    },
                    BINARY_SHORT_IEC: {
                        "": {name: "", value: 1, scientific: !0},
                        Ki: {name: "Ki", value: 1024, scientific: !0},
                        Mi: {name: "Mi", value: Math.pow(1024, 2), scientific: !0},
                        Gi: {name: "Gi", value: Math.pow(1024, 3), scientific: !0},
                        Ti: {name: "Ti", value: Math.pow(1024, 4), scientific: !0},
                        Pi: {name: "Pi", value: Math.pow(1024, 5), scientific: !0},
                        Ei: {name: "Ei", value: Math.pow(1024, 6), scientific: !0},
                        Zi: {name: "Zi", value: Math.pow(1024, 7), scientific: !0},
                        Yi: {name: "Yi", value: Math.pow(1024, 8), scientific: !0}
                    },
                    BINARY_LONG_SI: {
                        "": {name: "", value: 1, scientific: !0},
                        kilo: {name: "kilo", value: 1e3, scientific: !0},
                        mega: {name: "mega", value: 1e6, scientific: !0},
                        giga: {name: "giga", value: 1e9, scientific: !0},
                        tera: {name: "tera", value: 1e12, scientific: !0},
                        peta: {name: "peta", value: 1e15, scientific: !0},
                        exa: {name: "exa", value: 1e18, scientific: !0},
                        zetta: {name: "zetta", value: 1e21, scientific: !0},
                        yotta: {name: "yotta", value: 1e24, scientific: !0}
                    },
                    BINARY_LONG_IEC: {
                        "": {name: "", value: 1, scientific: !0},
                        kibi: {name: "kibi", value: 1024, scientific: !0},
                        mebi: {name: "mebi", value: Math.pow(1024, 2), scientific: !0},
                        gibi: {name: "gibi", value: Math.pow(1024, 3), scientific: !0},
                        tebi: {name: "tebi", value: Math.pow(1024, 4), scientific: !0},
                        pebi: {name: "pebi", value: Math.pow(1024, 5), scientific: !0},
                        exi: {name: "exi", value: Math.pow(1024, 6), scientific: !0},
                        zebi: {name: "zebi", value: Math.pow(1024, 7), scientific: !0},
                        yobi: {name: "yobi", value: Math.pow(1024, 8), scientific: !0}
                    },
                    BTU: {"": {name: "", value: 1, scientific: !0}, MM: {name: "MM", value: 1e6, scientific: !0}}
                };
                _.SHORTLONG = bs({}, _.SHORT, _.LONG), _.BINARY_SHORT = bs({}, _.BINARY_SHORT_SI, _.BINARY_SHORT_IEC), _.BINARY_LONG = bs({}, _.BINARY_LONG_SI, _.BINARY_LONG_IEC);
                var q = ["MASS", "LENGTH", "TIME", "CURRENT", "TEMPERATURE", "LUMINOUS_INTENSITY", "AMOUNT_OF_SUBSTANCE", "ANGLE", "BIT"],
                    I = {
                        NONE: {dimensions: [0, 0, 0, 0, 0, 0, 0, 0, 0]},
                        MASS: {dimensions: [1, 0, 0, 0, 0, 0, 0, 0, 0]},
                        LENGTH: {dimensions: [0, 1, 0, 0, 0, 0, 0, 0, 0]},
                        TIME: {dimensions: [0, 0, 1, 0, 0, 0, 0, 0, 0]},
                        CURRENT: {dimensions: [0, 0, 0, 1, 0, 0, 0, 0, 0]},
                        TEMPERATURE: {dimensions: [0, 0, 0, 0, 1, 0, 0, 0, 0]},
                        LUMINOUS_INTENSITY: {dimensions: [0, 0, 0, 0, 0, 1, 0, 0, 0]},
                        AMOUNT_OF_SUBSTANCE: {dimensions: [0, 0, 0, 0, 0, 0, 1, 0, 0]},
                        FORCE: {dimensions: [1, 1, -2, 0, 0, 0, 0, 0, 0]},
                        SURFACE: {dimensions: [0, 2, 0, 0, 0, 0, 0, 0, 0]},
                        VOLUME: {dimensions: [0, 3, 0, 0, 0, 0, 0, 0, 0]},
                        ENERGY: {dimensions: [1, 2, -2, 0, 0, 0, 0, 0, 0]},
                        POWER: {dimensions: [1, 2, -3, 0, 0, 0, 0, 0, 0]},
                        PRESSURE: {dimensions: [1, -1, -2, 0, 0, 0, 0, 0, 0]},
                        ELECTRIC_CHARGE: {dimensions: [0, 0, 1, 1, 0, 0, 0, 0, 0]},
                        ELECTRIC_CAPACITANCE: {dimensions: [-1, -2, 4, 2, 0, 0, 0, 0, 0]},
                        ELECTRIC_POTENTIAL: {dimensions: [1, 2, -3, -1, 0, 0, 0, 0, 0]},
                        ELECTRIC_RESISTANCE: {dimensions: [1, 2, -3, -2, 0, 0, 0, 0, 0]},
                        ELECTRIC_INDUCTANCE: {dimensions: [1, 2, -2, -2, 0, 0, 0, 0, 0]},
                        ELECTRIC_CONDUCTANCE: {dimensions: [-1, -2, 3, 2, 0, 0, 0, 0, 0]},
                        MAGNETIC_FLUX: {dimensions: [1, 2, -2, -1, 0, 0, 0, 0, 0]},
                        MAGNETIC_FLUX_DENSITY: {dimensions: [1, 0, -2, -1, 0, 0, 0, 0, 0]},
                        FREQUENCY: {dimensions: [0, 0, -1, 0, 0, 0, 0, 0, 0]},
                        ANGLE: {dimensions: [0, 0, 0, 0, 0, 0, 0, 1, 0]},
                        BIT: {dimensions: [0, 0, 0, 0, 0, 0, 0, 0, 1]}
                    };
                for (var k in I) Object(ae.f)(I, k) && (I[k].key = k);
                var B = {
                    name: "", base: {}, value: 1, offset: 0, dimensions: q.map(function (e) {
                        return 0
                    })
                }, z = {
                    meter: {name: "meter", base: I.LENGTH, prefixes: _.LONG, value: 1, offset: 0},
                    inch: {name: "inch", base: I.LENGTH, prefixes: _.NONE, value: .0254, offset: 0},
                    foot: {name: "foot", base: I.LENGTH, prefixes: _.NONE, value: .3048, offset: 0},
                    yard: {name: "yard", base: I.LENGTH, prefixes: _.NONE, value: .9144, offset: 0},
                    mile: {name: "mile", base: I.LENGTH, prefixes: _.NONE, value: 1609.344, offset: 0},
                    link: {name: "link", base: I.LENGTH, prefixes: _.NONE, value: .201168, offset: 0},
                    rod: {name: "rod", base: I.LENGTH, prefixes: _.NONE, value: 5.0292, offset: 0},
                    chain: {name: "chain", base: I.LENGTH, prefixes: _.NONE, value: 20.1168, offset: 0},
                    angstrom: {name: "angstrom", base: I.LENGTH, prefixes: _.NONE, value: 1e-10, offset: 0},
                    m: {name: "m", base: I.LENGTH, prefixes: _.SHORT, value: 1, offset: 0},
                    in: {name: "in", base: I.LENGTH, prefixes: _.NONE, value: .0254, offset: 0},
                    ft: {name: "ft", base: I.LENGTH, prefixes: _.NONE, value: .3048, offset: 0},
                    yd: {name: "yd", base: I.LENGTH, prefixes: _.NONE, value: .9144, offset: 0},
                    mi: {name: "mi", base: I.LENGTH, prefixes: _.NONE, value: 1609.344, offset: 0},
                    li: {name: "li", base: I.LENGTH, prefixes: _.NONE, value: .201168, offset: 0},
                    rd: {name: "rd", base: I.LENGTH, prefixes: _.NONE, value: 5.02921, offset: 0},
                    ch: {name: "ch", base: I.LENGTH, prefixes: _.NONE, value: 20.1168, offset: 0},
                    mil: {name: "mil", base: I.LENGTH, prefixes: _.NONE, value: 254e-7, offset: 0},
                    m2: {name: "m2", base: I.SURFACE, prefixes: _.SQUARED, value: 1, offset: 0},
                    sqin: {name: "sqin", base: I.SURFACE, prefixes: _.NONE, value: 64516e-8, offset: 0},
                    sqft: {name: "sqft", base: I.SURFACE, prefixes: _.NONE, value: .09290304, offset: 0},
                    sqyd: {name: "sqyd", base: I.SURFACE, prefixes: _.NONE, value: .83612736, offset: 0},
                    sqmi: {name: "sqmi", base: I.SURFACE, prefixes: _.NONE, value: 2589988.110336, offset: 0},
                    sqrd: {name: "sqrd", base: I.SURFACE, prefixes: _.NONE, value: 25.29295, offset: 0},
                    sqch: {name: "sqch", base: I.SURFACE, prefixes: _.NONE, value: 404.6873, offset: 0},
                    sqmil: {name: "sqmil", base: I.SURFACE, prefixes: _.NONE, value: 6.4516e-10, offset: 0},
                    acre: {name: "acre", base: I.SURFACE, prefixes: _.NONE, value: 4046.86, offset: 0},
                    hectare: {name: "hectare", base: I.SURFACE, prefixes: _.NONE, value: 1e4, offset: 0},
                    m3: {name: "m3", base: I.VOLUME, prefixes: _.CUBIC, value: 1, offset: 0},
                    L: {name: "L", base: I.VOLUME, prefixes: _.SHORT, value: .001, offset: 0},
                    l: {name: "l", base: I.VOLUME, prefixes: _.SHORT, value: .001, offset: 0},
                    litre: {name: "litre", base: I.VOLUME, prefixes: _.LONG, value: .001, offset: 0},
                    cuin: {name: "cuin", base: I.VOLUME, prefixes: _.NONE, value: 16387064e-12, offset: 0},
                    cuft: {name: "cuft", base: I.VOLUME, prefixes: _.NONE, value: .028316846592, offset: 0},
                    cuyd: {name: "cuyd", base: I.VOLUME, prefixes: _.NONE, value: .764554857984, offset: 0},
                    teaspoon: {name: "teaspoon", base: I.VOLUME, prefixes: _.NONE, value: 5e-6, offset: 0},
                    tablespoon: {name: "tablespoon", base: I.VOLUME, prefixes: _.NONE, value: 15e-6, offset: 0},
                    drop: {name: "drop", base: I.VOLUME, prefixes: _.NONE, value: 5e-8, offset: 0},
                    gtt: {name: "gtt", base: I.VOLUME, prefixes: _.NONE, value: 5e-8, offset: 0},
                    minim: {name: "minim", base: I.VOLUME, prefixes: _.NONE, value: 6.161152e-8, offset: 0},
                    fluiddram: {name: "fluiddram", base: I.VOLUME, prefixes: _.NONE, value: 36966911e-13, offset: 0},
                    fluidounce: {name: "fluidounce", base: I.VOLUME, prefixes: _.NONE, value: 2957353e-11, offset: 0},
                    gill: {name: "gill", base: I.VOLUME, prefixes: _.NONE, value: .0001182941, offset: 0},
                    cc: {name: "cc", base: I.VOLUME, prefixes: _.NONE, value: 1e-6, offset: 0},
                    cup: {name: "cup", base: I.VOLUME, prefixes: _.NONE, value: .0002365882, offset: 0},
                    pint: {name: "pint", base: I.VOLUME, prefixes: _.NONE, value: .0004731765, offset: 0},
                    quart: {name: "quart", base: I.VOLUME, prefixes: _.NONE, value: .0009463529, offset: 0},
                    gallon: {name: "gallon", base: I.VOLUME, prefixes: _.NONE, value: .003785412, offset: 0},
                    beerbarrel: {name: "beerbarrel", base: I.VOLUME, prefixes: _.NONE, value: .1173478, offset: 0},
                    oilbarrel: {name: "oilbarrel", base: I.VOLUME, prefixes: _.NONE, value: .1589873, offset: 0},
                    hogshead: {name: "hogshead", base: I.VOLUME, prefixes: _.NONE, value: .238481, offset: 0},
                    fldr: {name: "fldr", base: I.VOLUME, prefixes: _.NONE, value: 36966911e-13, offset: 0},
                    floz: {name: "floz", base: I.VOLUME, prefixes: _.NONE, value: 2957353e-11, offset: 0},
                    gi: {name: "gi", base: I.VOLUME, prefixes: _.NONE, value: .0001182941, offset: 0},
                    cp: {name: "cp", base: I.VOLUME, prefixes: _.NONE, value: .0002365882, offset: 0},
                    pt: {name: "pt", base: I.VOLUME, prefixes: _.NONE, value: .0004731765, offset: 0},
                    qt: {name: "qt", base: I.VOLUME, prefixes: _.NONE, value: .0009463529, offset: 0},
                    gal: {name: "gal", base: I.VOLUME, prefixes: _.NONE, value: .003785412, offset: 0},
                    bbl: {name: "bbl", base: I.VOLUME, prefixes: _.NONE, value: .1173478, offset: 0},
                    obl: {name: "obl", base: I.VOLUME, prefixes: _.NONE, value: .1589873, offset: 0},
                    g: {name: "g", base: I.MASS, prefixes: _.SHORT, value: .001, offset: 0},
                    gram: {name: "gram", base: I.MASS, prefixes: _.LONG, value: .001, offset: 0},
                    ton: {name: "ton", base: I.MASS, prefixes: _.SHORT, value: 907.18474, offset: 0},
                    t: {name: "t", base: I.MASS, prefixes: _.SHORT, value: 1e3, offset: 0},
                    tonne: {name: "tonne", base: I.MASS, prefixes: _.LONG, value: 1e3, offset: 0},
                    grain: {name: "grain", base: I.MASS, prefixes: _.NONE, value: 6479891e-11, offset: 0},
                    dram: {name: "dram", base: I.MASS, prefixes: _.NONE, value: .0017718451953125, offset: 0},
                    ounce: {name: "ounce", base: I.MASS, prefixes: _.NONE, value: .028349523125, offset: 0},
                    poundmass: {name: "poundmass", base: I.MASS, prefixes: _.NONE, value: .45359237, offset: 0},
                    hundredweight: {name: "hundredweight", base: I.MASS, prefixes: _.NONE, value: 45.359237, offset: 0},
                    stick: {name: "stick", base: I.MASS, prefixes: _.NONE, value: .115, offset: 0},
                    stone: {name: "stone", base: I.MASS, prefixes: _.NONE, value: 6.35029318, offset: 0},
                    gr: {name: "gr", base: I.MASS, prefixes: _.NONE, value: 6479891e-11, offset: 0},
                    dr: {name: "dr", base: I.MASS, prefixes: _.NONE, value: .0017718451953125, offset: 0},
                    oz: {name: "oz", base: I.MASS, prefixes: _.NONE, value: .028349523125, offset: 0},
                    lbm: {name: "lbm", base: I.MASS, prefixes: _.NONE, value: .45359237, offset: 0},
                    cwt: {name: "cwt", base: I.MASS, prefixes: _.NONE, value: 45.359237, offset: 0},
                    s: {name: "s", base: I.TIME, prefixes: _.SHORT, value: 1, offset: 0},
                    min: {name: "min", base: I.TIME, prefixes: _.NONE, value: 60, offset: 0},
                    h: {name: "h", base: I.TIME, prefixes: _.NONE, value: 3600, offset: 0},
                    second: {name: "second", base: I.TIME, prefixes: _.LONG, value: 1, offset: 0},
                    sec: {name: "sec", base: I.TIME, prefixes: _.LONG, value: 1, offset: 0},
                    minute: {name: "minute", base: I.TIME, prefixes: _.NONE, value: 60, offset: 0},
                    hour: {name: "hour", base: I.TIME, prefixes: _.NONE, value: 3600, offset: 0},
                    day: {name: "day", base: I.TIME, prefixes: _.NONE, value: 86400, offset: 0},
                    week: {name: "week", base: I.TIME, prefixes: _.NONE, value: 604800, offset: 0},
                    month: {name: "month", base: I.TIME, prefixes: _.NONE, value: 2629800, offset: 0},
                    year: {name: "year", base: I.TIME, prefixes: _.NONE, value: 31557600, offset: 0},
                    decade: {name: "decade", base: I.TIME, prefixes: _.NONE, value: 315576e3, offset: 0},
                    century: {name: "century", base: I.TIME, prefixes: _.NONE, value: 315576e4, offset: 0},
                    millennium: {name: "millennium", base: I.TIME, prefixes: _.NONE, value: 315576e5, offset: 0},
                    hertz: {name: "Hertz", base: I.FREQUENCY, prefixes: _.LONG, value: 1, offset: 0, reciprocal: !0},
                    Hz: {name: "Hz", base: I.FREQUENCY, prefixes: _.SHORT, value: 1, offset: 0, reciprocal: !0},
                    rad: {name: "rad", base: I.ANGLE, prefixes: _.SHORT, value: 1, offset: 0},
                    radian: {name: "radian", base: I.ANGLE, prefixes: _.LONG, value: 1, offset: 0},
                    deg: {name: "deg", base: I.ANGLE, prefixes: _.SHORT, value: null, offset: 0},
                    degree: {name: "degree", base: I.ANGLE, prefixes: _.LONG, value: null, offset: 0},
                    grad: {name: "grad", base: I.ANGLE, prefixes: _.SHORT, value: null, offset: 0},
                    gradian: {name: "gradian", base: I.ANGLE, prefixes: _.LONG, value: null, offset: 0},
                    cycle: {name: "cycle", base: I.ANGLE, prefixes: _.NONE, value: null, offset: 0},
                    arcsec: {name: "arcsec", base: I.ANGLE, prefixes: _.NONE, value: null, offset: 0},
                    arcmin: {name: "arcmin", base: I.ANGLE, prefixes: _.NONE, value: null, offset: 0},
                    A: {name: "A", base: I.CURRENT, prefixes: _.SHORT, value: 1, offset: 0},
                    ampere: {name: "ampere", base: I.CURRENT, prefixes: _.LONG, value: 1, offset: 0},
                    K: {name: "K", base: I.TEMPERATURE, prefixes: _.NONE, value: 1, offset: 0},
                    degC: {name: "degC", base: I.TEMPERATURE, prefixes: _.NONE, value: 1, offset: 273.15},
                    degF: {name: "degF", base: I.TEMPERATURE, prefixes: _.NONE, value: 1 / 1.8, offset: 459.67},
                    degR: {name: "degR", base: I.TEMPERATURE, prefixes: _.NONE, value: 1 / 1.8, offset: 0},
                    kelvin: {name: "kelvin", base: I.TEMPERATURE, prefixes: _.NONE, value: 1, offset: 0},
                    celsius: {name: "celsius", base: I.TEMPERATURE, prefixes: _.NONE, value: 1, offset: 273.15},
                    fahrenheit: {
                        name: "fahrenheit",
                        base: I.TEMPERATURE,
                        prefixes: _.NONE,
                        value: 1 / 1.8,
                        offset: 459.67
                    },
                    rankine: {name: "rankine", base: I.TEMPERATURE, prefixes: _.NONE, value: 1 / 1.8, offset: 0},
                    mol: {name: "mol", base: I.AMOUNT_OF_SUBSTANCE, prefixes: _.SHORT, value: 1, offset: 0},
                    mole: {name: "mole", base: I.AMOUNT_OF_SUBSTANCE, prefixes: _.LONG, value: 1, offset: 0},
                    cd: {name: "cd", base: I.LUMINOUS_INTENSITY, prefixes: _.SHORT, value: 1, offset: 0},
                    candela: {name: "candela", base: I.LUMINOUS_INTENSITY, prefixes: _.LONG, value: 1, offset: 0},
                    N: {name: "N", base: I.FORCE, prefixes: _.SHORT, value: 1, offset: 0},
                    newton: {name: "newton", base: I.FORCE, prefixes: _.LONG, value: 1, offset: 0},
                    dyn: {name: "dyn", base: I.FORCE, prefixes: _.SHORT, value: 1e-5, offset: 0},
                    dyne: {name: "dyne", base: I.FORCE, prefixes: _.LONG, value: 1e-5, offset: 0},
                    lbf: {name: "lbf", base: I.FORCE, prefixes: _.NONE, value: 4.4482216152605, offset: 0},
                    poundforce: {
                        name: "poundforce",
                        base: I.FORCE,
                        prefixes: _.NONE,
                        value: 4.4482216152605,
                        offset: 0
                    },
                    kip: {name: "kip", base: I.FORCE, prefixes: _.LONG, value: 4448.2216, offset: 0},
                    J: {name: "J", base: I.ENERGY, prefixes: _.SHORT, value: 1, offset: 0},
                    joule: {name: "joule", base: I.ENERGY, prefixes: _.SHORT, value: 1, offset: 0},
                    erg: {name: "erg", base: I.ENERGY, prefixes: _.NONE, value: 1e-7, offset: 0},
                    Wh: {name: "Wh", base: I.ENERGY, prefixes: _.SHORT, value: 3600, offset: 0},
                    BTU: {name: "BTU", base: I.ENERGY, prefixes: _.BTU, value: 1055.05585262, offset: 0},
                    eV: {name: "eV", base: I.ENERGY, prefixes: _.SHORT, value: 1602176565e-28, offset: 0},
                    electronvolt: {
                        name: "electronvolt",
                        base: I.ENERGY,
                        prefixes: _.LONG,
                        value: 1602176565e-28,
                        offset: 0
                    },
                    W: {name: "W", base: I.POWER, prefixes: _.SHORT, value: 1, offset: 0},
                    watt: {name: "watt", base: I.POWER, prefixes: _.LONG, value: 1, offset: 0},
                    hp: {name: "hp", base: I.POWER, prefixes: _.NONE, value: 745.6998715386, offset: 0},
                    VAR: {name: "VAR", base: I.POWER, prefixes: _.SHORT, value: n.I, offset: 0},
                    VA: {name: "VA", base: I.POWER, prefixes: _.SHORT, value: 1, offset: 0},
                    Pa: {name: "Pa", base: I.PRESSURE, prefixes: _.SHORT, value: 1, offset: 0},
                    psi: {name: "psi", base: I.PRESSURE, prefixes: _.NONE, value: 6894.75729276459, offset: 0},
                    atm: {name: "atm", base: I.PRESSURE, prefixes: _.NONE, value: 101325, offset: 0},
                    bar: {name: "bar", base: I.PRESSURE, prefixes: _.SHORTLONG, value: 1e5, offset: 0},
                    torr: {name: "torr", base: I.PRESSURE, prefixes: _.NONE, value: 133.322, offset: 0},
                    mmHg: {name: "mmHg", base: I.PRESSURE, prefixes: _.NONE, value: 133.322, offset: 0},
                    mmH2O: {name: "mmH2O", base: I.PRESSURE, prefixes: _.NONE, value: 9.80665, offset: 0},
                    cmH2O: {name: "cmH2O", base: I.PRESSURE, prefixes: _.NONE, value: 98.0665, offset: 0},
                    coulomb: {name: "coulomb", base: I.ELECTRIC_CHARGE, prefixes: _.LONG, value: 1, offset: 0},
                    C: {name: "C", base: I.ELECTRIC_CHARGE, prefixes: _.SHORT, value: 1, offset: 0},
                    farad: {name: "farad", base: I.ELECTRIC_CAPACITANCE, prefixes: _.LONG, value: 1, offset: 0},
                    F: {name: "F", base: I.ELECTRIC_CAPACITANCE, prefixes: _.SHORT, value: 1, offset: 0},
                    volt: {name: "volt", base: I.ELECTRIC_POTENTIAL, prefixes: _.LONG, value: 1, offset: 0},
                    V: {name: "V", base: I.ELECTRIC_POTENTIAL, prefixes: _.SHORT, value: 1, offset: 0},
                    ohm: {name: "ohm", base: I.ELECTRIC_RESISTANCE, prefixes: _.SHORTLONG, value: 1, offset: 0},
                    henry: {name: "henry", base: I.ELECTRIC_INDUCTANCE, prefixes: _.LONG, value: 1, offset: 0},
                    H: {name: "H", base: I.ELECTRIC_INDUCTANCE, prefixes: _.SHORT, value: 1, offset: 0},
                    siemens: {name: "siemens", base: I.ELECTRIC_CONDUCTANCE, prefixes: _.LONG, value: 1, offset: 0},
                    S: {name: "S", base: I.ELECTRIC_CONDUCTANCE, prefixes: _.SHORT, value: 1, offset: 0},
                    weber: {name: "weber", base: I.MAGNETIC_FLUX, prefixes: _.LONG, value: 1, offset: 0},
                    Wb: {name: "Wb", base: I.MAGNETIC_FLUX, prefixes: _.SHORT, value: 1, offset: 0},
                    tesla: {name: "tesla", base: I.MAGNETIC_FLUX_DENSITY, prefixes: _.LONG, value: 1, offset: 0},
                    T: {name: "T", base: I.MAGNETIC_FLUX_DENSITY, prefixes: _.SHORT, value: 1, offset: 0},
                    b: {name: "b", base: I.BIT, prefixes: _.BINARY_SHORT, value: 1, offset: 0},
                    bits: {name: "bits", base: I.BIT, prefixes: _.BINARY_LONG, value: 1, offset: 0},
                    B: {name: "B", base: I.BIT, prefixes: _.BINARY_SHORT, value: 8, offset: 0},
                    bytes: {name: "bytes", base: I.BIT, prefixes: _.BINARY_LONG, value: 8, offset: 0}
                }, D = {
                    meters: "meter",
                    inches: "inch",
                    feet: "foot",
                    yards: "yard",
                    miles: "mile",
                    links: "link",
                    rods: "rod",
                    chains: "chain",
                    angstroms: "angstrom",
                    lt: "l",
                    litres: "litre",
                    liter: "litre",
                    liters: "litre",
                    teaspoons: "teaspoon",
                    tablespoons: "tablespoon",
                    minims: "minim",
                    fluiddrams: "fluiddram",
                    fluidounces: "fluidounce",
                    gills: "gill",
                    cups: "cup",
                    pints: "pint",
                    quarts: "quart",
                    gallons: "gallon",
                    beerbarrels: "beerbarrel",
                    oilbarrels: "oilbarrel",
                    hogsheads: "hogshead",
                    gtts: "gtt",
                    grams: "gram",
                    tons: "ton",
                    tonnes: "tonne",
                    grains: "grain",
                    drams: "dram",
                    ounces: "ounce",
                    poundmasses: "poundmass",
                    hundredweights: "hundredweight",
                    sticks: "stick",
                    lb: "lbm",
                    lbs: "lbm",
                    kips: "kip",
                    acres: "acre",
                    hectares: "hectare",
                    sqfeet: "sqft",
                    sqyard: "sqyd",
                    sqmile: "sqmi",
                    sqmiles: "sqmi",
                    mmhg: "mmHg",
                    mmh2o: "mmH2O",
                    cmh2o: "cmH2O",
                    seconds: "second",
                    secs: "second",
                    minutes: "minute",
                    mins: "minute",
                    hours: "hour",
                    hr: "hour",
                    hrs: "hour",
                    days: "day",
                    weeks: "week",
                    months: "month",
                    years: "year",
                    decades: "decade",
                    centuries: "century",
                    millennia: "millennium",
                    hertz: "hertz",
                    radians: "radian",
                    degrees: "degree",
                    gradians: "gradian",
                    cycles: "cycle",
                    arcsecond: "arcsec",
                    arcseconds: "arcsec",
                    arcminute: "arcmin",
                    arcminutes: "arcmin",
                    BTUs: "BTU",
                    watts: "watt",
                    joules: "joule",
                    amperes: "ampere",
                    coulombs: "coulomb",
                    volts: "volt",
                    ohms: "ohm",
                    farads: "farad",
                    webers: "weber",
                    teslas: "tesla",
                    electronvolts: "electronvolt",
                    moles: "mole",
                    bit: "bits",
                    byte: "bytes"
                };

                function R(e) {
                    var t;
                    "BigNumber" === e.number ? (t = ds(N), z.rad.value = new N(1), z.deg.value = t.div(180), z.grad.value = t.div(200), z.cycle.value = t.times(2), z.arcsec.value = t.div(648e3), z.arcmin.value = t.div(10800)) : (z.rad.value = 1, z.deg.value = Math.PI / 180, z.grad.value = Math.PI / 200, z.cycle.value = 2 * Math.PI, z.arcsec.value = Math.PI / 648e3, z.arcmin.value = Math.PI / 10800), z.radian.value = z.rad.value, z.degree.value = z.deg.value, z.gradian.value = z.grad.value
                }

                R(b), t && t("config", function (e, t) {
                    e.number !== t.number && R(e)
                });
                var P = {
                    si: {
                        NONE: {unit: B, prefix: _.NONE[""]},
                        LENGTH: {unit: z.m, prefix: _.SHORT[""]},
                        MASS: {unit: z.g, prefix: _.SHORT.k},
                        TIME: {unit: z.s, prefix: _.SHORT[""]},
                        CURRENT: {unit: z.A, prefix: _.SHORT[""]},
                        TEMPERATURE: {unit: z.K, prefix: _.SHORT[""]},
                        LUMINOUS_INTENSITY: {unit: z.cd, prefix: _.SHORT[""]},
                        AMOUNT_OF_SUBSTANCE: {unit: z.mol, prefix: _.SHORT[""]},
                        ANGLE: {unit: z.rad, prefix: _.SHORT[""]},
                        BIT: {unit: z.bits, prefix: _.SHORT[""]},
                        FORCE: {unit: z.N, prefix: _.SHORT[""]},
                        ENERGY: {unit: z.J, prefix: _.SHORT[""]},
                        POWER: {unit: z.W, prefix: _.SHORT[""]},
                        PRESSURE: {unit: z.Pa, prefix: _.SHORT[""]},
                        ELECTRIC_CHARGE: {unit: z.C, prefix: _.SHORT[""]},
                        ELECTRIC_CAPACITANCE: {unit: z.F, prefix: _.SHORT[""]},
                        ELECTRIC_POTENTIAL: {unit: z.V, prefix: _.SHORT[""]},
                        ELECTRIC_RESISTANCE: {unit: z.ohm, prefix: _.SHORT[""]},
                        ELECTRIC_INDUCTANCE: {unit: z.H, prefix: _.SHORT[""]},
                        ELECTRIC_CONDUCTANCE: {unit: z.S, prefix: _.SHORT[""]},
                        MAGNETIC_FLUX: {unit: z.Wb, prefix: _.SHORT[""]},
                        MAGNETIC_FLUX_DENSITY: {unit: z.T, prefix: _.SHORT[""]},
                        FREQUENCY: {unit: z.Hz, prefix: _.SHORT[""]}
                    }
                };
                P.cgs = JSON.parse(JSON.stringify(P.si)), P.cgs.LENGTH = {
                    unit: z.m,
                    prefix: _.SHORT.c
                }, P.cgs.MASS = {unit: z.g, prefix: _.SHORT[""]}, P.cgs.FORCE = {
                    unit: z.dyn,
                    prefix: _.SHORT[""]
                }, P.cgs.ENERGY = {
                    unit: z.erg,
                    prefix: _.NONE[""]
                }, P.us = JSON.parse(JSON.stringify(P.si)), P.us.LENGTH = {
                    unit: z.ft,
                    prefix: _.NONE[""]
                }, P.us.MASS = {unit: z.lbm, prefix: _.NONE[""]}, P.us.TEMPERATURE = {
                    unit: z.degF,
                    prefix: _.NONE[""]
                }, P.us.FORCE = {unit: z.lbf, prefix: _.NONE[""]}, P.us.ENERGY = {
                    unit: z.BTU,
                    prefix: _.BTU[""]
                }, P.us.POWER = {unit: z.hp, prefix: _.NONE[""]}, P.us.PRESSURE = {
                    unit: z.psi,
                    prefix: _.NONE[""]
                }, P.auto = JSON.parse(JSON.stringify(P.si));
                var U, F = P.auto;
                for (var L in M.setUnitSystem = function (e) {
                    if (!Object(ae.f)(P, e)) throw new Error("Unit system " + e + " does not exist. Choices are: " + Object.keys(P).join(", "));
                    F = P[e]
                }, M.getUnitSystem = function () {
                    for (var e in P) if (Object(ae.f)(P, e) && P[e] === F) return e
                }, M.typeConverters = {
                    BigNumber: function (e) {
                        return new N(e + "")
                    }, Fraction: function (e) {
                        return new O(e)
                    }, Complex: function (e) {
                        return e
                    }, number: function (e) {
                        return e
                    }
                }, M._getNumberConverter = function (e) {
                    if (!M.typeConverters[e]) throw new TypeError('Unsupported type "' + e + '"');
                    return M.typeConverters[e]
                }, z) {
                    Object(ae.f)(z, L) && ((U = z[L]).dimensions = U.base.dimensions)
                }
                for (var H in D) if (Object(ae.f)(D, H)) {
                    var $ = z[D[H]], G = {};
                    for (var Z in $) Object(ae.f)($, Z) && (G[Z] = $[Z]);
                    G.name = H, z[H] = G
                }
                return M.createUnit = function (e, t) {
                    if ("object" !== vs(e)) throw new TypeError("createUnit expects first parameter to be of type 'Object'");
                    if (t && t.override) for (var r in e) if (Object(ae.f)(e, r) && M.deleteUnit(r), e[r].aliases) for (var n = 0; n < e[r].aliases.length; n++) M.deleteUnit(e[r].aliases[n]);
                    var i;
                    for (var a in e) Object(ae.f)(e, a) && (i = M.createUnitSingle(a, e[a]));
                    return i
                }, M.createUnitSingle = function (t, e, r) {
                    if (null == e && (e = {}), "string" != typeof t) throw new TypeError("createUnitSingle expects first parameter to be of type 'string'");
                    if (Object(ae.f)(z, t)) throw new Error('Cannot create unit "' + t + '": a unit with that name already exists');
                    !function (e) {
                        for (var t, r = 0; r < e.length; r++) {
                            var n = e.charAt(r), i = function (e) {
                                return /^[a-zA-Z]$/.test(e)
                            };
                            if (0 === r && !i(n)) throw new Error('Invalid unit name (must begin with alpha character): "' + e + '"');
                            if (0 < r && !(i(n) || "0" <= (t = n) && t <= "9")) throw new Error('Invalid unit name (only alphanumeric characters are allowed): "' + e + '"')
                        }
                    }(t);
                    var n, i, a, o = null, s = [], u = 0;
                    if (e && "Unit" === e.type) o = e.clone(); else if ("string" == typeof e) "" !== e && (n = e); else {
                        if ("object" !== vs(e)) throw new TypeError('Cannot create unit "' + t + '" from "' + e.toString() + '": expecting "string" or "Unit" or "Object"');
                        n = e.definition, i = e.prefixes, u = e.offset, a = e.baseName, e.aliases && (s = e.aliases.valueOf())
                    }
                    if (s) for (var c = 0; c < s.length; c++) if (Object(ae.f)(z, s[c])) throw new Error('Cannot create alias "' + s[c] + '": a unit with that name already exists');
                    if (n && "string" == typeof n && !o) try {
                        o = M.parse(n, {allowNoUnits: !0})
                    } catch (e) {
                        throw e.message = 'Could not create unit "' + t + '" from "' + n + '": ' + e.message, e
                    } else n && "Unit" === n.type && (o = n.clone());
                    s = s || [], u = u || 0, i = i && i.toUpperCase && _[i.toUpperCase()] || _.NONE;
                    var f = {};
                    if (o) {
                        var l, p = !(f = {
                            name: t,
                            value: o.value,
                            dimensions: o.dimensions.slice(0),
                            prefixes: i,
                            offset: u
                        });
                        for (var m in I) if (Object(ae.f)(I, m)) {
                            for (var h = !0, d = 0; d < q.length; d++) if (1e-12 < Math.abs((f.dimensions[d] || 0) - (I[m].dimensions[d] || 0))) {
                                h = !1;
                                break
                            }
                            if (h) {
                                p = !0, f.base = I[m];
                                break
                            }
                        }
                        p || (a = a || t + "_STUFF", (l = {dimensions: o.dimensions.slice(0)}).key = a, I[a] = l, F[a] = {
                            unit: f,
                            prefix: _.NONE[""]
                        }, f.base = I[a])
                    } else {
                        if (a = a || t + "_STUFF", 0 <= q.indexOf(a)) throw new Error('Cannot create new base unit "' + t + '": a base unit with that name already exists (and cannot be overridden)');
                        for (var y in q.push(a), I) Object(ae.f)(I, y) && (I[y].dimensions[q.length - 1] = 0);
                        for (var g = {dimensions: []}, v = 0; v < q.length; v++) g.dimensions[v] = 0;
                        g.dimensions[q.length - 1] = 1, g.key = a, I[a] = g, f = {
                            name: t,
                            value: 1,
                            dimensions: I[a].dimensions.slice(0),
                            prefixes: i,
                            offset: u,
                            base: I[a]
                        }, F[a] = {unit: f, prefix: _.NONE[""]}
                    }
                    M.UNITS[t] = f;
                    for (var b = 0; b < s.length; b++) {
                        var x = s[b], w = {};
                        for (var N in f) Object(ae.f)(f, N) && (w[N] = f[N]);
                        w.name = x, M.UNITS[x] = w
                    }
                    return new M(null, t)
                }, M.deleteUnit = function (e) {
                    delete M.UNITS[e]
                }, M.PREFIXES = _, M.BASE_DIMENSIONS = q, M.BASE_UNITS = I, M.UNIT_SYSTEMS = P, M.UNITS = z, M
            }, {isClass: !0}), Ms = ["typed", "Unit"], js = Object(s.a)("unit", Ms, function (e) {
                var t = e.typed, r = e.Unit, n = t("unit", {
                    Unit: function (e) {
                        return e.clone()
                    }, string: function (e) {
                        return r.isValuelessUnit(e) ? new r(null, e) : r.parse(e, {allowNoUnits: !0})
                    }, "number | BigNumber | Fraction | Complex, string": function (e, t) {
                        return new r(e, t)
                    }, "Array | Matrix": function (e) {
                        return oe(e, n)
                    }
                });
                return n
            }), Es = ["typed", "SparseMatrix"], Ss = Object(s.a)("sparse", Es, function (e) {
                var t = e.typed, r = e.SparseMatrix;
                return t("sparse", {
                    "": function () {
                        return new r([])
                    }, string: function (e) {
                        return new r([], e)
                    }, "Array | Matrix": function (e) {
                        return new r(e)
                    }, "Array | Matrix, string": function (e, t) {
                        return new r(e, t)
                    }
                })
            }), As = "createUnit", Cs = ["typed", "Unit"], Ts = Object(s.a)(As, Cs, function (e) {
                var t = e.typed, i = e.Unit;
                return t(As, {
                    "Object, Object": function (e, t) {
                        return i.createUnit(e, t)
                    }, Object: function (e) {
                        return i.createUnit(e, {})
                    }, "string, Unit | string | Object, Object": function (e, t, r) {
                        var n = {};
                        return n[e] = t, i.createUnit(n, r)
                    }, "string, Unit | string | Object": function (e, t) {
                        var r = {};
                        return r[e] = t, i.createUnit(r, {})
                    }, string: function (e) {
                        var t = {};
                        return t[e] = {}, i.createUnit(t, {})
                    }
                })
            }), _s = ["typed", "config", "Complex"], qs = Object(s.a)("acos", _s, function (e) {
                var t = e.typed, r = e.config, n = e.Complex, i = t("acos", {
                    number: function (e) {
                        return -1 <= e && e <= 1 || r.predictable ? Math.acos(e) : new n(e, 0).acos()
                    }, Complex: function (e) {
                        return e.acos()
                    }, BigNumber: function (e) {
                        return e.acos()
                    }, "Array | Matrix": function (e) {
                        return oe(e, i)
                    }
                });
                return i
            }), Is = "number";

        function ks(e) {
            return Object(E.a)(e)
        }

        function Bs(e) {
            return Math.atan(1 / e)
        }

        function zs(e) {
            return isFinite(e) ? (Math.log((e + 1) / e) + Math.log(e / (e - 1))) / 2 : 0
        }

        function Ds(e) {
            return Math.asin(1 / e)
        }

        function Rs(e) {
            var t = 1 / e;
            return Math.log(t + Math.sqrt(t * t + 1))
        }

        function Ps(e) {
            return Math.acos(1 / e)
        }

        function Us(e) {
            var t = 1 / e, r = Math.sqrt(t * t - 1);
            return Math.log(r + t)
        }

        function Fs(e) {
            return Object(E.b)(e)
        }

        function Ls(e) {
            return Object(E.c)(e)
        }

        function Hs(e) {
            return 1 / Math.tan(e)
        }

        function $s(e) {
            var t = Math.exp(2 * e);
            return (t + 1) / (t - 1)
        }

        function Gs(e) {
            return 1 / Math.sin(e)
        }

        function Zs(e) {
            return 0 === e ? Number.POSITIVE_INFINITY : Math.abs(2 / (Math.exp(e) - Math.exp(-e))) * Object(E.n)(e)
        }

        function Vs(e) {
            return 1 / Math.cos(e)
        }

        function Js(e) {
            return 2 / (Math.exp(e) + Math.exp(-e))
        }

        function Ws(e) {
            return Object(E.o)(e)
        }

        Ws.signature = Js.signature = Vs.signature = Zs.signature = Gs.signature = $s.signature = Hs.signature = Ls.signature = Fs.signature = Us.signature = Ps.signature = Rs.signature = Ds.signature = zs.signature = Bs.signature = ks.signature = Is;
        var Ys = ["typed", "config", "Complex"], Xs = Object(s.a)("acosh", Ys, function (e) {
                var t = e.typed, r = e.config, n = e.Complex, i = t("acosh", {
                    number: function (e) {
                        return 1 <= e || r.predictable ? ks(e) : e <= -1 ? new n(Math.log(Math.sqrt(e * e - 1) - e), Math.PI) : new n(e, 0).acosh()
                    }, Complex: function (e) {
                        return e.acosh()
                    }, BigNumber: function (e) {
                        return e.acosh()
                    }, "Array | Matrix": function (e) {
                        return oe(e, i)
                    }
                });
                return i
            }), Qs = ["typed", "BigNumber"], Ks = Object(s.a)("acot", Qs, function (e) {
                var t = e.typed, r = e.BigNumber, n = t("acot", {
                    number: Bs, Complex: function (e) {
                        return e.acot()
                    }, BigNumber: function (e) {
                        return new r(1).div(e).atan()
                    }, "Array | Matrix": function (e) {
                        return oe(e, n)
                    }
                });
                return n
            }), eu = ["typed", "config", "Complex", "BigNumber"], tu = Object(s.a)("acoth", eu, function (e) {
                var t = e.typed, r = e.config, n = e.Complex, i = e.BigNumber, a = t("acoth", {
                    number: function (e) {
                        return 1 <= e || e <= -1 || r.predictable ? zs(e) : new n(e, 0).acoth()
                    }, Complex: function (e) {
                        return e.acoth()
                    }, BigNumber: function (e) {
                        return new i(1).div(e).atanh()
                    }, "Array | Matrix": function (e) {
                        return oe(e, a)
                    }
                });
                return a
            }), ru = ["typed", "config", "Complex", "BigNumber"], nu = Object(s.a)("acsc", ru, function (e) {
                var t = e.typed, r = e.config, n = e.Complex, i = e.BigNumber, a = t("acsc", {
                    number: function (e) {
                        return e <= -1 || 1 <= e || r.predictable ? Ds(e) : new n(e, 0).acsc()
                    }, Complex: function (e) {
                        return e.acsc()
                    }, BigNumber: function (e) {
                        return new i(1).div(e).asin()
                    }, "Array | Matrix": function (e) {
                        return oe(e, a)
                    }
                });
                return a
            }), iu = ["typed", "BigNumber"], au = Object(s.a)("acsch", iu, function (e) {
                var t = e.typed, r = e.BigNumber, n = t("acsch", {
                    number: Rs, Complex: function (e) {
                        return e.acsch()
                    }, BigNumber: function (e) {
                        return new r(1).div(e).asinh()
                    }, "Array | Matrix": function (e) {
                        return oe(e, n)
                    }
                });
                return n
            }), ou = ["typed", "config", "Complex", "BigNumber"], su = Object(s.a)("asec", ou, function (e) {
                var t = e.typed, r = e.config, n = e.Complex, i = e.BigNumber, a = t("asec", {
                    number: function (e) {
                        return e <= -1 || 1 <= e || r.predictable ? Ps(e) : new n(e, 0).asec()
                    }, Complex: function (e) {
                        return e.asec()
                    }, BigNumber: function (e) {
                        return new i(1).div(e).acos()
                    }, "Array | Matrix": function (e) {
                        return oe(e, a)
                    }
                });
                return a
            }), uu = ["typed", "config", "Complex", "BigNumber"], cu = Object(s.a)("asech", uu, function (e) {
                var t = e.typed, n = e.config, i = e.Complex, r = e.BigNumber, a = t("asech", {
                    number: function (e) {
                        if (e <= 1 && -1 <= e || n.predictable) {
                            var t = 1 / e;
                            if (0 < t || n.predictable) return Us(e);
                            var r = Math.sqrt(t * t - 1);
                            return new i(Math.log(r - t), Math.PI)
                        }
                        return new i(e, 0).asech()
                    }, Complex: function (e) {
                        return e.asech()
                    }, BigNumber: function (e) {
                        return new r(1).div(e).acosh()
                    }, "Array | Matrix": function (e) {
                        return oe(e, a)
                    }
                });
                return a
            }), fu = ["typed", "config", "Complex"], lu = Object(s.a)("asin", fu, function (e) {
                var t = e.typed, r = e.config, n = e.Complex, i = t("asin", {
                    number: function (e) {
                        return -1 <= e && e <= 1 || r.predictable ? Math.asin(e) : new n(e, 0).asin()
                    }, Complex: function (e) {
                        return e.asin()
                    }, BigNumber: function (e) {
                        return e.asin()
                    }, "Array | Matrix": function (e) {
                        return oe(e, i, !0)
                    }
                });
                return i
            }), pu = ["typed"], mu = Object(s.a)("asinh", pu, function (e) {
                var t = (0, e.typed)("asinh", {
                    number: Fs, Complex: function (e) {
                        return e.asinh()
                    }, BigNumber: function (e) {
                        return e.asinh()
                    }, "Array | Matrix": function (e) {
                        return oe(e, t, !0)
                    }
                });
                return t
            }), hu = ["typed"], du = Object(s.a)("atan", hu, function (e) {
                var t = (0, e.typed)("atan", {
                    number: function (e) {
                        return Math.atan(e)
                    }, Complex: function (e) {
                        return e.atan()
                    }, BigNumber: function (e) {
                        return e.atan()
                    }, "Array | Matrix": function (e) {
                        return oe(e, t, !0)
                    }
                });
                return t
            }), yu = ["typed", "matrix", "equalScalar", "BigNumber", "DenseMatrix"],
            gu = Object(s.a)("atan2", yu, function (e) {
                var t = e.typed, r = e.matrix, n = e.equalScalar, i = e.BigNumber, a = e.DenseMatrix,
                    o = tr({typed: t, equalScalar: n}), s = mr({typed: t}), u = Fr({typed: t, equalScalar: n}),
                    c = ar({typed: t, equalScalar: n}), f = gr({typed: t, DenseMatrix: a}), l = Wt({typed: t}),
                    p = Xt({typed: t}), m = t("atan2", {
                        "number, number": Math.atan2, "BigNumber, BigNumber": function (e, t) {
                            return i.atan2(e, t)
                        }, "SparseMatrix, SparseMatrix": function (e, t) {
                            return u(e, t, m, !1)
                        }, "SparseMatrix, DenseMatrix": function (e, t) {
                            return o(t, e, m, !0)
                        }, "DenseMatrix, SparseMatrix": function (e, t) {
                            return s(e, t, m, !1)
                        }, "DenseMatrix, DenseMatrix": function (e, t) {
                            return l(e, t, m)
                        }, "Array, Array": function (e, t) {
                            return m(r(e), r(t)).valueOf()
                        }, "Array, Matrix": function (e, t) {
                            return m(r(e), t)
                        }, "Matrix, Array": function (e, t) {
                            return m(e, r(t))
                        }, "SparseMatrix, number | BigNumber": function (e, t) {
                            return c(e, t, m, !1)
                        }, "DenseMatrix, number | BigNumber": function (e, t) {
                            return p(e, t, m, !1)
                        }, "number | BigNumber, SparseMatrix": function (e, t) {
                            return f(t, e, m, !0)
                        }, "number | BigNumber, DenseMatrix": function (e, t) {
                            return p(t, e, m, !0)
                        }, "Array, number | BigNumber": function (e, t) {
                            return p(r(e), t, m, !1).valueOf()
                        }, "number | BigNumber, Array": function (e, t) {
                            return p(r(t), e, m, !0).valueOf()
                        }
                    });
                return m
            }), vu = ["typed", "config", "Complex"], bu = Object(s.a)("atanh", vu, function (e) {
                var t = e.typed, r = e.config, n = e.Complex, i = t("atanh", {
                    number: function (e) {
                        return e <= 1 && -1 <= e || r.predictable ? Ls(e) : new n(e, 0).atanh()
                    }, Complex: function (e) {
                        return e.atanh()
                    }, BigNumber: function (e) {
                        return e.atanh()
                    }, "Array | Matrix": function (e) {
                        return oe(e, i, !0)
                    }
                });
                return i
            }), xu = ["typed"], wu = Object(s.a)("cos", xu, function (e) {
                var t = (0, e.typed)("cos", {
                    number: Math.cos, Complex: function (e) {
                        return e.cos()
                    }, BigNumber: function (e) {
                        return e.cos()
                    }, Unit: function (e) {
                        if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function cos is no angle");
                        return t(e.value)
                    }, "Array | Matrix": function (e) {
                        return oe(e, t)
                    }
                });
                return t
            }), Nu = ["typed"], Ou = Object(s.a)("cosh", Nu, function (e) {
                var t = (0, e.typed)("cosh", {
                    number: E.e, Complex: function (e) {
                        return e.cosh()
                    }, BigNumber: function (e) {
                        return e.cosh()
                    }, Unit: function (e) {
                        if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function cosh is no angle");
                        return t(e.value)
                    }, "Array | Matrix": function (e) {
                        return oe(e, t)
                    }
                });
                return t
            }), Mu = ["typed", "BigNumber"], ju = Object(s.a)("cot", Mu, function (e) {
                var t = e.typed, r = e.BigNumber, n = t("cot", {
                    number: Hs, Complex: function (e) {
                        return e.cot()
                    }, BigNumber: function (e) {
                        return new r(1).div(e.tan())
                    }, Unit: function (e) {
                        if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function cot is no angle");
                        return n(e.value)
                    }, "Array | Matrix": function (e) {
                        return oe(e, n)
                    }
                });
                return n
            }), Eu = ["typed", "BigNumber"], Su = Object(s.a)("coth", Eu, function (e) {
                var t = e.typed, r = e.BigNumber, n = t("coth", {
                    number: $s, Complex: function (e) {
                        return e.coth()
                    }, BigNumber: function (e) {
                        return new r(1).div(e.tanh())
                    }, Unit: function (e) {
                        if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function coth is no angle");
                        return n(e.value)
                    }, "Array | Matrix": function (e) {
                        return oe(e, n)
                    }
                });
                return n
            }), Au = ["typed", "BigNumber"], Cu = Object(s.a)("csc", Au, function (e) {
                var t = e.typed, r = e.BigNumber, n = t("csc", {
                    number: Gs, Complex: function (e) {
                        return e.csc()
                    }, BigNumber: function (e) {
                        return new r(1).div(e.sin())
                    }, Unit: function (e) {
                        if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function csc is no angle");
                        return n(e.value)
                    }, "Array | Matrix": function (e) {
                        return oe(e, n)
                    }
                });
                return n
            }), Tu = ["typed", "BigNumber"], _u = Object(s.a)("csch", Tu, function (e) {
                var t = e.typed, r = e.BigNumber, n = t("csch", {
                    number: Zs, Complex: function (e) {
                        return e.csch()
                    }, BigNumber: function (e) {
                        return new r(1).div(e.sinh())
                    }, Unit: function (e) {
                        if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function csch is no angle");
                        return n(e.value)
                    }, "Array | Matrix": function (e) {
                        return oe(e, n)
                    }
                });
                return n
            }), qu = ["typed", "BigNumber"], Iu = Object(s.a)("sec", qu, function (e) {
                var t = e.typed, r = e.BigNumber, n = t("sec", {
                    number: Vs, Complex: function (e) {
                        return e.sec()
                    }, BigNumber: function (e) {
                        return new r(1).div(e.cos())
                    }, Unit: function (e) {
                        if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function sec is no angle");
                        return n(e.value)
                    }, "Array | Matrix": function (e) {
                        return oe(e, n)
                    }
                });
                return n
            }), ku = ["typed", "BigNumber"], Bu = Object(s.a)("sech", ku, function (e) {
                var t = e.typed, r = e.BigNumber, n = t("sech", {
                    number: Js, Complex: function (e) {
                        return e.sech()
                    }, BigNumber: function (e) {
                        return new r(1).div(e.cosh())
                    }, Unit: function (e) {
                        if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function sech is no angle");
                        return n(e.value)
                    }, "Array | Matrix": function (e) {
                        return oe(e, n)
                    }
                });
                return n
            }), zu = ["typed"], Du = Object(s.a)("sin", zu, function (e) {
                var t = (0, e.typed)("sin", {
                    number: Math.sin, Complex: function (e) {
                        return e.sin()
                    }, BigNumber: function (e) {
                        return e.sin()
                    }, Unit: function (e) {
                        if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function sin is no angle");
                        return t(e.value)
                    }, "Array | Matrix": function (e) {
                        return oe(e, t, !0)
                    }
                });
                return t
            }), Ru = ["typed"], Pu = Object(s.a)("sinh", Ru, function (e) {
                var t = (0, e.typed)("sinh", {
                    number: Ws, Complex: function (e) {
                        return e.sinh()
                    }, BigNumber: function (e) {
                        return e.sinh()
                    }, Unit: function (e) {
                        if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function sinh is no angle");
                        return t(e.value)
                    }, "Array | Matrix": function (e) {
                        return oe(e, t, !0)
                    }
                });
                return t
            }), Uu = ["typed"], Fu = Object(s.a)("tan", Uu, function (e) {
                var t = (0, e.typed)("tan", {
                    number: Math.tan, Complex: function (e) {
                        return e.tan()
                    }, BigNumber: function (e) {
                        return e.tan()
                    }, Unit: function (e) {
                        if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function tan is no angle");
                        return t(e.value)
                    }, "Array | Matrix": function (e) {
                        return oe(e, t, !0)
                    }
                });
                return t
            }), Lu = ["typed"], Hu = Object(s.a)("tanh", Lu, function (e) {
                var t = (0, e.typed)("tanh", {
                    number: E.p, Complex: function (e) {
                        return e.tanh()
                    }, BigNumber: function (e) {
                        return e.tanh()
                    }, Unit: function (e) {
                        if (!e.hasBase(e.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function tanh is no angle");
                        return t(e.value)
                    }, "Array | Matrix": function (e) {
                        return oe(e, t, !0)
                    }
                });
                return t
            }), $u = "setCartesian", Gu = ["typed", "size", "subset", "compareNatural", "Index", "DenseMatrix"],
            Zu = Object(s.a)($u, Gu, function (e) {
                var t = e.typed, s = e.size, u = e.subset, c = e.compareNatural, f = e.Index, l = e.DenseMatrix;
                return t($u, {
                    "Array | Matrix, Array | Matrix": function (e, t) {
                        var r = [];
                        if (0 !== u(s(e), new f(0)) && 0 !== u(s(t), new f(0))) for (var n = Object(q.e)(Array.isArray(e) ? e : e.toArray()).sort(c), i = Object(q.e)(Array.isArray(t) ? t : t.toArray()).sort(c), r = [], a = 0; a < n.length; a++) for (var o = 0; o < i.length; o++) r.push([n[a], i[o]]);
                        return Array.isArray(e) && Array.isArray(t) ? r : new l(r)
                    }
                })
            }), Vu = "setDifference", Ju = ["typed", "size", "subset", "compareNatural", "Index", "DenseMatrix"],
            Wu = Object(s.a)(Vu, Ju, function (e) {
                var t = e.typed, u = e.size, c = e.subset, f = e.compareNatural, l = e.Index, p = e.DenseMatrix;
                return t(Vu, {
                    "Array | Matrix, Array | Matrix": function (e, t) {
                        if (0 === c(u(e), new l(0))) a = []; else {
                            if (0 === c(u(t), new l(0))) return Object(q.e)(e.toArray());
                            for (var r, n = Object(q.i)(Object(q.e)(Array.isArray(e) ? e : e.toArray()).sort(f)), i = Object(q.i)(Object(q.e)(Array.isArray(t) ? t : t.toArray()).sort(f)), a = [], o = 0; o < n.length; o++) {
                                r = !1;
                                for (var s = 0; s < i.length; s++) if (0 === f(n[o].value, i[s].value) && n[o].identifier === i[s].identifier) {
                                    r = !0;
                                    break
                                }
                                r || a.push(n[o])
                            }
                        }
                        return Array.isArray(e) && Array.isArray(t) ? Object(q.g)(a) : new p(Object(q.g)(a))
                    }
                })
            }), Yu = "setDistinct", Xu = ["typed", "size", "subset", "compareNatural", "Index", "DenseMatrix"],
            Qu = Object(s.a)(Yu, Xu, function (e) {
                var t = e.typed, i = e.size, a = e.subset, o = e.compareNatural, s = e.Index, u = e.DenseMatrix;
                return t(Yu, {
                    "Array | Matrix": function (e) {
                        if (0 === a(i(e), new s(0))) t = []; else {
                            var t, r = Object(q.e)(Array.isArray(e) ? e : e.toArray()).sort(o);
                            (t = []).push(r[0]);
                            for (var n = 1; n < r.length; n++) 0 !== o(r[n], r[n - 1]) && t.push(r[n])
                        }
                        return Array.isArray(e) ? t : new u(t)
                    }
                })
            }), Ku = "setIntersect", ec = ["typed", "size", "subset", "compareNatural", "Index", "DenseMatrix"],
            tc = Object(s.a)(Ku, ec, function (e) {
                var t = e.typed, s = e.size, u = e.subset, c = e.compareNatural, f = e.Index, l = e.DenseMatrix;
                return t(Ku, {
                    "Array | Matrix, Array | Matrix": function (e, t) {
                        if (0 === u(s(e), new f(0)) || 0 === u(s(t), new f(0))) i = []; else for (var r = Object(q.i)(Object(q.e)(Array.isArray(e) ? e : e.toArray()).sort(c)), n = Object(q.i)(Object(q.e)(Array.isArray(t) ? t : t.toArray()).sort(c)), i = [], a = 0; a < r.length; a++) for (var o = 0; o < n.length; o++) if (0 === c(r[a].value, n[o].value) && r[a].identifier === n[o].identifier) {
                            i.push(r[a]);
                            break
                        }
                        return Array.isArray(e) && Array.isArray(t) ? Object(q.g)(i) : new l(Object(q.g)(i))
                    }
                })
            }), rc = "setIsSubset", nc = ["typed", "size", "subset", "compareNatural", "Index"],
            ic = Object(s.a)(rc, nc, function (e) {
                var t = e.typed, s = e.size, u = e.subset, c = e.compareNatural, f = e.Index;
                return t(rc, {
                    "Array | Matrix, Array | Matrix": function (e, t) {
                        if (0 === u(s(e), new f(0))) return !0;
                        if (0 === u(s(t), new f(0))) return !1;
                        for (var r, n = Object(q.i)(Object(q.e)(Array.isArray(e) ? e : e.toArray()).sort(c)), i = Object(q.i)(Object(q.e)(Array.isArray(t) ? t : t.toArray()).sort(c)), a = 0; a < n.length; a++) {
                            r = !1;
                            for (var o = 0; o < i.length; o++) if (0 === c(n[a].value, i[o].value) && n[a].identifier === i[o].identifier) {
                                r = !0;
                                break
                            }
                            if (!1 === r) return !1
                        }
                        return !0
                    }
                })
            }), ac = "setMultiplicity", oc = ["typed", "size", "subset", "compareNatural", "Index"],
            sc = Object(s.a)(ac, oc, function (e) {
                var t = e.typed, a = e.size, o = e.subset, s = e.compareNatural, u = e.Index;
                return t(ac, {
                    "number | BigNumber | Fraction | Complex, Array | Matrix": function (e, t) {
                        if (0 === o(a(t), new u(0))) return 0;
                        for (var r = Object(q.e)(Array.isArray(t) ? t : t.toArray()), n = 0, i = 0; i < r.length; i++) 0 === s(r[i], e) && n++;
                        return n
                    }
                })
            }), uc = "setPowerset", cc = ["typed", "size", "subset", "compareNatural", "Index"],
            fc = Object(s.a)(uc, cc, function (e) {
                var t = e.typed, i = e.size, a = e.subset, o = e.compareNatural, s = e.Index;
                return t(uc, {
                    "Array | Matrix": function (e) {
                        if (0 === a(i(e), new s(0))) return [];
                        for (var t = Object(q.e)(Array.isArray(e) ? e : e.toArray()).sort(o), r = [], n = 0; n.toString(2).length <= t.length;) r.push(function (e, t) {
                            for (var r = [], n = 0; n < t.length; n++) "1" === t[n] && r.push(e[n]);
                            return r
                        }(t, n.toString(2).split("").reverse())), n++;
                        return function (e) {
                            for (var t = [], r = e.length - 1; 0 < r; r--) for (var n = 0; n < r; n++) e[n].length > e[n + 1].length && (t = e[n], e[n] = e[n + 1], e[n + 1] = t);
                            return e
                        }(r)
                    }
                })
            }), lc = "setSize", pc = ["typed", "compareNatural"], mc = Object(s.a)(lc, pc, function (e) {
                var t = e.typed, a = e.compareNatural;
                return t(lc, {
                    "Array | Matrix": function (e) {
                        return Array.isArray(e) ? Object(q.e)(e).length : Object(q.e)(e.toArray()).length
                    }, "Array | Matrix, boolean": function (e, t) {
                        if (!1 === t || 0 === e.length) return Array.isArray(e) ? Object(q.e)(e).length : Object(q.e)(e.toArray()).length;
                        for (var r = Object(q.e)(Array.isArray(e) ? e : e.toArray()).sort(a), n = 1, i = 1; i < r.length; i++) 0 !== a(r[i], r[i - 1]) && n++;
                        return n
                    }
                })
            }), hc = "setSymDifference", dc = ["typed", "size", "concat", "subset", "setDifference", "Index"],
            yc = Object(s.a)(hc, dc, function (e) {
                var t = e.typed, i = e.size, a = e.concat, o = e.subset, s = e.setDifference, u = e.Index;
                return t(hc, {
                    "Array | Matrix, Array | Matrix": function (e, t) {
                        if (0 === o(i(e), new u(0))) return Object(q.e)(t);
                        if (0 === o(i(t), new u(0))) return Object(q.e)(e);
                        var r = Object(q.e)(e), n = Object(q.e)(t);
                        return a(s(r, n), s(n, r))
                    }
                })
            }), gc = "setUnion",
            vc = ["typed", "size", "concat", "subset", "setIntersect", "setSymDifference", "Index"],
            bc = Object(s.a)(gc, vc, function (e) {
                var t = e.typed, i = e.size, a = e.concat, o = e.subset, s = e.setIntersect, u = e.setSymDifference,
                    c = e.Index;
                return t(gc, {
                    "Array | Matrix, Array | Matrix": function (e, t) {
                        if (0 === o(i(e), new c(0))) return Object(q.e)(t);
                        if (0 === o(i(t), new c(0))) return Object(q.e)(e);
                        var r = Object(q.e)(e), n = Object(q.e)(t);
                        return a(u(r, n), s(r, n))
                    }
                })
            }), xc = ["typed", "matrix", "addScalar", "equalScalar", "DenseMatrix", "SparseMatrix"],
            wc = Object(s.a)("add", xc, function (e) {
                var t = e.typed, r = e.matrix, n = e.addScalar, i = e.equalScalar, a = e.DenseMatrix,
                    o = (e.SparseMatrix, Ht({typed: t})), s = Gt({typed: t, equalScalar: i}),
                    u = Vt({typed: t, DenseMatrix: a}), c = Wt({typed: t}), f = Xt({typed: t}),
                    l = t("add", Object(ae.e)({
                        "DenseMatrix, DenseMatrix": function (e, t) {
                            return c(e, t, n)
                        }, "DenseMatrix, SparseMatrix": function (e, t) {
                            return o(e, t, n, !1)
                        }, "SparseMatrix, DenseMatrix": function (e, t) {
                            return o(t, e, n, !0)
                        }, "SparseMatrix, SparseMatrix": function (e, t) {
                            return s(e, t, n)
                        }, "Array, Array": function (e, t) {
                            return l(r(e), r(t)).valueOf()
                        }, "Array, Matrix": function (e, t) {
                            return l(r(e), t)
                        }, "Matrix, Array": function (e, t) {
                            return l(e, r(t))
                        }, "DenseMatrix, any": function (e, t) {
                            return f(e, t, n, !1)
                        }, "SparseMatrix, any": function (e, t) {
                            return u(e, t, n, !1)
                        }, "any, DenseMatrix": function (e, t) {
                            return f(t, e, n, !0)
                        }, "any, SparseMatrix": function (e, t) {
                            return u(t, e, n, !0)
                        }, "Array, any": function (e, t) {
                            return f(r(e), t, n, !1).valueOf()
                        }, "any, Array": function (e, t) {
                            return f(r(t), e, n, !0).valueOf()
                        }, "any, any": n, "any, any, ...any": function (e, t, r) {
                            for (var n = l(e, t), i = 0; i < r.length; i++) n = l(n, r[i]);
                            return n
                        }
                    }, n.signatures));
                return l
            }), Nc = ["typed", "abs", "addScalar", "divideScalar", "multiplyScalar", "sqrt", "smaller", "isPositive"],
            Oc = Object(s.a)("hypot", Nc, function (e) {
                var t = e.typed, a = e.abs, o = e.addScalar, s = e.divideScalar, u = e.multiplyScalar, c = e.sqrt,
                    f = e.smaller, l = e.isPositive, r = t("hypot", {
                        "... number | BigNumber": function (e) {
                            for (var t = 0, r = 0, n = 0; n < e.length; n++) {
                                var i = a(e[n]);
                                f(r, i) ? (t = u(t, u(s(r, i), s(r, i))), t = o(t, 1), r = i) : t = o(t, l(i) ? u(s(i, r), s(i, r)) : i)
                            }
                            return u(r, c(t))
                        }, Array: function (e) {
                            return r.apply(r, Object(q.e)(e))
                        }, Matrix: function (e) {
                            return r.apply(r, Object(q.e)(e.toArray()))
                        }
                    });
                return r
            }),
            Mc = ["typed", "abs", "add", "pow", "conj", "sqrt", "multiply", "equalScalar", "larger", "smaller", "matrix"],
            jc = Object(s.a)("norm", Mc, function (e) {
                var t = e.typed, l = e.abs, p = e.add, m = e.pow, h = e.conj, d = e.sqrt, y = e.multiply,
                    g = e.equalScalar, v = e.larger, b = e.smaller, r = e.matrix, n = t("norm", {
                        number: Math.abs, Complex: function (e) {
                            return e.abs()
                        }, BigNumber: function (e) {
                            return e.abs()
                        }, boolean: function (e) {
                            return Math.abs(e)
                        }, Array: function (e) {
                            return x(r(e), 2)
                        }, Matrix: function (e) {
                            return x(e, 2)
                        }, "number | Complex | BigNumber | boolean, number | BigNumber | string": function (e) {
                            return n(e)
                        }, "Array, number | BigNumber | string": function (e, t) {
                            return x(r(e), t)
                        }, "Matrix, number | BigNumber | string": x
                    });

                function x(e, t) {
                    var r, n = e.size();
                    if (1 === n.length) {
                        if (t === Number.POSITIVE_INFINITY || "inf" === t) {
                            var i = 0;
                            return e.forEach(function (e) {
                                var t = l(e);
                                v(t, i) && (i = t)
                            }, !0), i
                        }
                        if (t === Number.NEGATIVE_INFINITY || "-inf" === t) return e.forEach(function (e) {
                            var t = l(e);
                            r && !b(t, r) || (r = t)
                        }, !0), r || 0;
                        if ("fro" === t) return x(e, 2);
                        if ("number" != typeof t || isNaN(t)) throw new Error("Unsupported parameter value");
                        if (g(t, 0)) return Number.POSITIVE_INFINITY;
                        var a = 0;
                        return e.forEach(function (e) {
                            a = p(m(l(e), t), a)
                        }, !0), m(a, 1 / t)
                    }
                    if (2 === n.length) {
                        if (1 === t) {
                            var o = [], s = 0;
                            return e.forEach(function (e, t) {
                                var r = t[1], n = p(o[r] || 0, l(e));
                                v(n, s) && (s = n), o[r] = n
                            }, !0), s
                        }
                        if (t === Number.POSITIVE_INFINITY || "inf" === t) {
                            var u = [], c = 0;
                            return e.forEach(function (e, t) {
                                var r = t[0], n = p(u[r] || 0, l(e));
                                v(n, c) && (c = n), u[r] = n
                            }, !0), c
                        }
                        if ("fro" === t) {
                            var f = 0;
                            return e.forEach(function (e, t) {
                                f = p(f, y(e, h(e)))
                            }), l(d(f))
                        }
                        if (2 === t) throw new Error("Unsupported parameter value, missing implementation of matrix singular value decomposition");
                        throw new Error("Unsupported parameter value")
                    }
                }

                return n
            }), Ec = ["typed", "addScalar", "multiplyScalar", "conj", "size"],
            Sc = Object(s.a)("dot", Ec, function (e) {
                var x = e.typed, w = e.addScalar, N = e.multiplyScalar, O = e.conj, t = e.size;
                return x("dot", {
                    "Array | DenseMatrix, Array | DenseMatrix": function (e, t) {
                        var r = M(e, t), n = Object(ie.v)(e) ? e._data : e, i = Object(ie.v)(e) ? e._datatype : void 0,
                            a = Object(ie.v)(t) ? t._data : t, o = Object(ie.v)(t) ? t._datatype : void 0,
                            s = 2 === j(e).length, u = 2 === j(t).length, c = w, f = N;
                        {
                            var l;
                            i && o && i === o && "string" == typeof i && (l = i, c = x.find(w, [l, l]), f = x.find(N, [l, l]))
                        }
                        if (!s && !u) {
                            for (var p = f(O(n[0]), a[0]), m = 1; m < r; m++) p = c(p, f(O(n[m]), a[m]));
                            return p
                        }
                        if (!s && u) {
                            for (var h = f(O(n[0]), a[0][0]), d = 1; d < r; d++) h = c(h, f(O(n[d]), a[d][0]));
                            return h
                        }
                        if (s && !u) {
                            for (var y = f(O(n[0][0]), a[0]), g = 1; g < r; g++) y = c(y, f(O(n[g][0]), a[g]));
                            return y
                        }
                        if (s && u) {
                            for (var v = f(O(n[0][0]), a[0][0]), b = 1; b < r; b++) v = c(v, f(O(n[b][0]), a[b][0]));
                            return v
                        }
                    }, "SparseMatrix, SparseMatrix": function (e, t) {
                        M(e, t);
                        var r = e._index, n = e._values, i = t._index, a = t._values, o = 0, s = w, u = N, c = 0, f = 0;
                        for (; c < r.length && f < i.length;) {
                            var l = r[c], p = i[f];
                            l < p ? c++ : p < l ? f++ : l === p && (o = s(o, u(n[c], a[f])), c++, f++)
                        }
                        return o
                    }
                });

                function M(e, t) {
                    var r, n, i = j(e), a = j(t);
                    if (1 === i.length) r = i[0]; else {
                        if (2 !== i.length || 1 !== i[1]) throw new RangeError("Expected a column vector, instead got a matrix of size (" + i.join(", ") + ")");
                        r = i[0]
                    }
                    if (1 === a.length) n = a[0]; else {
                        if (2 !== a.length || 1 !== a[1]) throw new RangeError("Expected a column vector, instead got a matrix of size (" + a.join(", ") + ")");
                        n = a[0]
                    }
                    if (r !== n) throw new RangeError("Vectors must have equal length (" + r + " != " + n + ")");
                    if (0 === r) throw new RangeError("Cannot calculate the dot product of empty vectors");
                    return r
                }

                function j(e) {
                    return Object(ie.v)(e) ? e.size() : t(e)
                }
            }), Ac = ["typed", "matrix", "add"], Cc = Object(s.a)("trace", Ac, function (e) {
                var t = e.typed, r = e.matrix, m = e.add;
                return t("trace", {
                    Array: function (e) {
                        return n(r(e))
                    }, SparseMatrix: function (e) {
                        var t = e._values, r = e._index, n = e._ptr, i = e._size, a = i[0], o = i[1];
                        if (a !== o) throw new RangeError("Matrix must be square (size: " + Object(V.d)(i) + ")");
                        var s = 0;
                        if (0 < t.length) for (var u = 0; u < o; u++) for (var c = n[u], f = n[u + 1], l = c; l < f; l++) {
                            var p = r[l];
                            if (p === u) {
                                s = m(s, t[l]);
                                break
                            }
                            if (u < p) break
                        }
                        return s
                    }, DenseMatrix: n, any: ae.a
                });

                function n(e) {
                    var t = e._size, r = e._data;
                    switch (t.length) {
                        case 1:
                            if (1 === t[0]) return Object(ae.a)(r[0]);
                            throw new RangeError("Matrix must be square (size: " + Object(V.d)(t) + ")");
                        case 2:
                            var n = t[0];
                            if (n !== t[1]) throw new RangeError("Matrix must be square (size: " + Object(V.d)(t) + ")");
                            for (var i = 0, a = 0; a < n; a++) i = m(i, r[a][a]);
                            return i;
                        default:
                            throw new RangeError("Matrix must be two dimensional (size: " + Object(V.d)(t) + ")")
                    }
                }
            }), Tc = ["typed", "Index"], _c = Object(s.a)("index", Tc, function (e) {
                var t = e.typed, n = e.Index;
                return t("index", {
                    "...number | string | BigNumber | Range | Array | Matrix": function (e) {
                        var t = e.map(function (e) {
                            return Object(ie.e)(e) ? e.toNumber() : Array.isArray(e) || Object(ie.v)(e) ? e.map(function (e) {
                                return Object(ie.e)(e) ? e.toNumber() : e
                            }) : e
                        }), r = new n;
                        return n.apply(r, t), r
                    }
                })
            }), qc = {end: !0};

        function Ic(e) {
            return (Ic = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        var kc = ["mathWithTransform"], Bc = Object(s.a)("Node", kc, function (e) {
            var t = e.mathWithTransform;

            function r() {
                if (!(this instanceof r)) throw new SyntaxError("Constructor must be called with the new operator")
            }

            return r.prototype.evaluate = function (e) {
                return this.compile().evaluate(e)
            }, r.prototype.type = "Node", r.prototype.isNode = !0, r.prototype.comment = "", r.prototype.compile = function () {
                var r = this._compile(t, {}), n = {}, i = null;
                return {
                    evaluate: function (e) {
                        var t = e || {};
                        return function (e) {
                            for (var t in e) if (Object(ae.f)(e, t) && t in qc) throw new Error('Scope contains an illegal symbol, "' + t + '" is a reserved keyword')
                        }(t), r(t, n, i)
                    }
                }
            }, r.prototype._compile = function (e, t) {
                throw new Error("Method _compile should be implemented by type " + this.type)
            }, r.prototype.forEach = function (e) {
                throw new Error("Cannot run forEach on a Node interface")
            }, r.prototype.map = function (e) {
                throw new Error("Cannot run map on a Node interface")
            }, r.prototype._ifNode = function (e) {
                if (!Object(ie.w)(e)) throw new TypeError("Callback function must return a Node");
                return e
            }, r.prototype.traverse = function (e) {
                e(this, null, null), function n(e, i) {
                    e.forEach(function (e, t, r) {
                        i(e, t, r), n(e, i)
                    })
                }(this, e)
            }, r.prototype.transform = function (a) {
                return function e(t, r, n) {
                    var i = a(t, r, n);
                    return i !== t ? i : t.map(e)
                }(this, null, null)
            }, r.prototype.filter = function (n) {
                var i = [];
                return this.traverse(function (e, t, r) {
                    n(e, t, r) && i.push(e)
                }), i
            }, r.prototype.clone = function () {
                throw new Error("Cannot clone a Node interface")
            }, r.prototype.cloneDeep = function () {
                return this.map(function (e) {
                    return e.cloneDeep()
                })
            }, r.prototype.equals = function (e) {
                return !!e && Object(ae.d)(this, e)
            }, r.prototype.toString = function (e) {
                var t;
                if (e && "object" === Ic(e)) switch (Ic(e.handler)) {
                    case"object":
                    case"undefined":
                        break;
                    case"function":
                        t = e.handler(this, e);
                        break;
                    default:
                        throw new TypeError("Object or function expected as callback")
                }
                return void 0 !== t ? t : this._toString(e)
            }, r.prototype.toJSON = function () {
                throw new Error("Cannot serialize object: toJSON not implemented by " + this.type)
            }, r.prototype.toHTML = function (e) {
                var t;
                if (e && "object" === Ic(e)) switch (Ic(e.handler)) {
                    case"object":
                    case"undefined":
                        break;
                    case"function":
                        t = e.handler(this, e);
                        break;
                    default:
                        throw new TypeError("Object or function expected as callback")
                }
                return void 0 !== t ? t : this.toHTML(e)
            }, r.prototype._toString = function () {
                throw new Error("_toString not implemented for " + this.type)
            }, r.prototype.toTex = function (e) {
                var t;
                if (e && "object" === Ic(e)) switch (Ic(e.handler)) {
                    case"object":
                    case"undefined":
                        break;
                    case"function":
                        t = e.handler(this, e);
                        break;
                    default:
                        throw new TypeError("Object or function expected as callback")
                }
                return void 0 !== t ? t : this._toTex(e)
            }, r.prototype._toTex = function (e) {
                throw new Error("_toTex not implemented for " + this.type)
            }, r.prototype.getIdentifier = function () {
                return this.type
            }, r.prototype.getContent = function () {
                return this
            }, r
        }, {isClass: !0, isNode: !0});

        function zc(e) {
            return e && e.isIndexError ? new R.a(e.index + 1, e.min + 1, void 0 !== e.max ? e.max + 1 : void 0) : e
        }

        function Dc(e) {
            return (Dc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Rc(e) {
            var r = e.subset;
            return function (e, t) {
                try {
                    if (Array.isArray(e)) return r(e, t);
                    if (e && "function" == typeof e.subset) return e.subset(t);
                    if ("string" == typeof e) return r(e, t);
                    if ("object" !== Dc(e)) throw new TypeError("Cannot apply index: unsupported type of object");
                    if (!t.isObjectProperty()) throw new TypeError("Cannot apply a numeric index as object property");
                    return zi(e, t.getObjectProperty())
                } catch (e) {
                    throw zc(e)
                }
            }
        }

        var Pc = ["subset", "Node"], Uc = Object(s.a)("AccessorNode", Pc, function (e) {
            var t = e.subset, r = e.Node, s = Rc({subset: t});

            function n(e, t) {
                if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
                if (!Object(ie.w)(e)) throw new TypeError('Node expected for parameter "object"');
                if (!Object(ie.u)(t)) throw new TypeError('IndexNode expected for parameter "index"');
                this.object = e || null, this.index = t, Object.defineProperty(this, "name", {
                    get: function () {
                        return this.index ? this.index.isObjectProperty() ? this.index.getObjectProperty() : "" : this.object.name || ""
                    }.bind(this), set: function () {
                        throw new Error("Cannot assign a new name, name is read-only")
                    }
                })
            }

            function i(e) {
                return !(Object(ie.a)(e) || Object(ie.c)(e) || Object(ie.l)(e) || Object(ie.r)(e) || Object(ie.A)(e) || Object(ie.C)(e) || Object(ie.J)(e))
            }

            return (n.prototype = new r).type = "AccessorNode", n.prototype.isAccessorNode = !0, n.prototype._compile = function (e, t) {
                var a = this.object._compile(e, t), o = this.index._compile(e, t);
                if (this.index.isObjectProperty()) {
                    var n = this.index.getObjectProperty();
                    return function (e, t, r) {
                        return zi(a(e, t, r), n)
                    }
                }
                return function (e, t, r) {
                    var n = a(e, t, r), i = o(e, t, n);
                    return s(n, i)
                }
            }, n.prototype.forEach = function (e) {
                e(this.object, "object", this), e(this.index, "index", this)
            }, n.prototype.map = function (e) {
                return new n(this._ifNode(e(this.object, "object", this)), this._ifNode(e(this.index, "index", this)))
            }, n.prototype.clone = function () {
                return new n(this.object, this.index)
            }, n.prototype._toString = function (e) {
                var t = this.object.toString(e);
                return i(this.object) && (t = "(" + t + ")"), t + this.index.toString(e)
            }, n.prototype.toHTML = function (e) {
                var t = this.object.toHTML(e);
                return i(this.object) && (t = '<span class="math-parenthesis math-round-parenthesis">(</span>' + t + '<span class="math-parenthesis math-round-parenthesis">)</span>'), t + this.index.toHTML(e)
            }, n.prototype._toTex = function (e) {
                var t = this.object.toTex(e);
                return i(this.object) && (t = "\\left(' + object + '\\right)"), t + this.index.toTex(e)
            }, n.prototype.toJSON = function () {
                return {mathjs: "AccessorNode", object: this.object, index: this.index}
            }, n.fromJSON = function (e) {
                return new n(e.object, e.index)
            }, n
        }, {isClass: !0, isNode: !0}), Fc = ["Node"], Lc = Object(s.a)("ArrayNode", Fc, function (e) {
            var t = e.Node;

            function n(e) {
                if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
                if (this.items = e || [], !Array.isArray(this.items) || !this.items.every(ie.w)) throw new TypeError("Array containing Nodes expected")
            }

            return (n.prototype = new t).type = "ArrayNode", n.prototype.isArrayNode = !0, n.prototype._compile = function (t, r) {
                var e = Object(q.k)(this.items, function (e) {
                    return e._compile(t, r)
                });
                if ("Array" === t.config.matrix) return function (t, r, n) {
                    return Object(q.k)(e, function (e) {
                        return e(t, r, n)
                    })
                };
                var i = t.matrix;
                return function (t, r, n) {
                    return i(Object(q.k)(e, function (e) {
                        return e(t, r, n)
                    }))
                }
            }, n.prototype.forEach = function (e) {
                for (var t = 0; t < this.items.length; t++) {
                    e(this.items[t], "items[" + t + "]", this)
                }
            }, n.prototype.map = function (e) {
                for (var t = [], r = 0; r < this.items.length; r++) t[r] = this._ifNode(e(this.items[r], "items[" + r + "]", this));
                return new n(t)
            }, n.prototype.clone = function () {
                return new n(this.items.slice(0))
            }, n.prototype._toString = function (t) {
                return "[" + this.items.map(function (e) {
                    return e.toString(t)
                }).join(", ") + "]"
            }, n.prototype.toJSON = function () {
                return {mathjs: "ArrayNode", items: this.items}
            }, n.fromJSON = function (e) {
                return new n(e.items)
            }, n.prototype.toHTML = function (t) {
                return '<span class="math-parenthesis math-square-parenthesis">[</span>' + this.items.map(function (e) {
                    return e.toHTML(t)
                }).join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-square-parenthesis">]</span>'
            }, n.prototype._toTex = function (t) {
                var r = "\\begin{bmatrix}";
                return this.items.forEach(function (e) {
                    e.items ? r += e.items.map(function (e) {
                        return e.toTex(t)
                    }).join("&") : r += e.toTex(t), r += "\\\\"
                }), r += "\\end{bmatrix}"
            }, n
        }, {isClass: !0, isNode: !0});

        function Hc(e) {
            return (Hc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        var $c = [{AssignmentNode: {}, FunctionAssignmentNode: {}}, {
            ConditionalNode: {
                latexLeftParens: !1,
                latexRightParens: !1,
                latexParens: !1
            }
        }, {
            "OperatorNode:or": {
                associativity: "left",
                associativeWith: []
            }
        }, {
            "OperatorNode:xor": {
                associativity: "left",
                associativeWith: []
            }
        }, {
            "OperatorNode:and": {
                associativity: "left",
                associativeWith: []
            }
        }, {
            "OperatorNode:bitOr": {
                associativity: "left",
                associativeWith: []
            }
        }, {
            "OperatorNode:bitXor": {
                associativity: "left",
                associativeWith: []
            }
        }, {
            "OperatorNode:bitAnd": {
                associativity: "left",
                associativeWith: []
            }
        }, {
            "OperatorNode:equal": {associativity: "left", associativeWith: []},
            "OperatorNode:unequal": {associativity: "left", associativeWith: []},
            "OperatorNode:smaller": {associativity: "left", associativeWith: []},
            "OperatorNode:larger": {associativity: "left", associativeWith: []},
            "OperatorNode:smallerEq": {associativity: "left", associativeWith: []},
            "OperatorNode:largerEq": {associativity: "left", associativeWith: []},
            RelationalNode: {associativity: "left", associativeWith: []}
        }, {
            "OperatorNode:leftShift": {associativity: "left", associativeWith: []},
            "OperatorNode:rightArithShift": {associativity: "left", associativeWith: []},
            "OperatorNode:rightLogShift": {associativity: "left", associativeWith: []}
        }, {
            "OperatorNode:to": {
                associativity: "left",
                associativeWith: []
            }
        }, {RangeNode: {}}, {
            "OperatorNode:add": {
                associativity: "left",
                associativeWith: ["OperatorNode:add", "OperatorNode:subtract"]
            }, "OperatorNode:subtract": {associativity: "left", associativeWith: []}
        }, {
            "OperatorNode:multiply": {
                associativity: "left",
                associativeWith: ["OperatorNode:multiply", "OperatorNode:divide", "Operator:dotMultiply", "Operator:dotDivide"]
            },
            "OperatorNode:divide": {
                associativity: "left",
                associativeWith: [],
                latexLeftParens: !1,
                latexRightParens: !1,
                latexParens: !1
            },
            "OperatorNode:dotMultiply": {
                associativity: "left",
                associativeWith: ["OperatorNode:multiply", "OperatorNode:divide", "OperatorNode:dotMultiply", "OperatorNode:doDivide"]
            },
            "OperatorNode:dotDivide": {associativity: "left", associativeWith: []},
            "OperatorNode:mod": {associativity: "left", associativeWith: []}
        }, {
            "OperatorNode:unaryPlus": {associativity: "right"},
            "OperatorNode:unaryMinus": {associativity: "right"},
            "OperatorNode:bitNot": {associativity: "right"},
            "OperatorNode:not": {associativity: "right"}
        }, {
            "OperatorNode:pow": {associativity: "right", associativeWith: [], latexRightParens: !1},
            "OperatorNode:dotPow": {associativity: "right", associativeWith: []}
        }, {"OperatorNode:factorial": {associativity: "left"}}, {"OperatorNode:transpose": {associativity: "left"}}];

        function Gc(e, t) {
            var r = e;
            "keep" !== t && (r = e.getContent());
            for (var n = r.getIdentifier(), i = 0; i < $c.length; i++) if (n in $c[i]) return i;
            return null
        }

        function Zc(e, t) {
            var r = e;
            "keep" !== t && (r = e.getContent());
            var n = r.getIdentifier(), i = Gc(r, t);
            if (null === i) return null;
            var a = $c[i][n];
            if (Object(ae.f)(a, "associativity")) {
                if ("left" === a.associativity) return "left";
                if ("right" === a.associativity) return "right";
                throw Error("'" + n + "' has the invalid associativity '" + a.associativity + "'.")
            }
            return null
        }

        function Vc(e, t, r) {
            var n = "keep" !== r ? e.getContent() : e, i = "keep" !== r ? e.getContent() : t, a = n.getIdentifier(),
                o = i.getIdentifier(), s = Gc(n, r);
            if (null === s) return null;
            var u = $c[s][a];
            if (Object(ae.f)(u, "associativeWith") && u.associativeWith instanceof Array) {
                for (var c = 0; c < u.associativeWith.length; c++) if (u.associativeWith[c] === o) return !0;
                return !1
            }
            return null
        }

        var Jc = ["subset", "?matrix", "Node"], Wc = Object(s.a)("AssignmentNode", Jc, function (e) {
            var t, n, i, r = e.subset, a = e.matrix, o = e.Node, m = Rc({subset: r}),
                h = (n = (t = {subset: r, matrix: a}).subset, i = t.matrix, function (e, t, r) {
                    try {
                        if (Array.isArray(e)) return i(e).subset(t, r).valueOf();
                        if (e && "function" == typeof e.subset) return e.subset(t, r);
                        if ("string" == typeof e) return n(e, t, r);
                        if ("object" !== Hc(e)) throw new TypeError("Cannot apply index: unsupported type of object");
                        if (!t.isObjectProperty()) throw TypeError("Cannot apply a numeric index as object property");
                        return Di(e, t.getObjectProperty(), r), e
                    } catch (e) {
                        throw zc(e)
                    }
                });

            function s(e, t, r) {
                if (!(this instanceof s)) throw new SyntaxError("Constructor must be called with the new operator");
                if (this.object = e, this.index = r ? t : null, this.value = r || t, !Object(ie.J)(e) && !Object(ie.a)(e)) throw new TypeError('SymbolNode or AccessorNode expected as "object"');
                if (Object(ie.J)(e) && "end" === e.name) throw new Error('Cannot assign to symbol "end"');
                if (this.index && !Object(ie.u)(this.index)) throw new TypeError('IndexNode expected as "index"');
                if (!Object(ie.w)(this.value)) throw new TypeError('Node expected as "value"');
                Object.defineProperty(this, "name", {
                    get: function () {
                        return this.index ? this.index.isObjectProperty() ? this.index.getObjectProperty() : "" : this.object.name || ""
                    }.bind(this), set: function () {
                        throw new Error("Cannot assign a new name, name is read-only")
                    }
                })
            }

            function u(e, t) {
                var r = Gc(e, t = t || "keep"), n = Gc(e.value, t);
                return "all" === t || null !== n && n <= r
            }

            return (s.prototype = new o).type = "AssignmentNode", s.prototype.isAssignmentNode = !0, s.prototype._compile = function (e, t) {
                var o = this.object._compile(e, t), u = this.index ? this.index._compile(e, t) : null,
                    c = this.value._compile(e, t), s = this.object.name;
                if (this.index) {
                    if (this.index.isObjectProperty()) {
                        var a = this.index.getObjectProperty();
                        return function (e, t, r) {
                            var n = o(e, t, r), i = c(e, t, r);
                            return Di(n, a, i)
                        }
                    }
                    if (Object(ie.J)(this.object)) return function (e, t, r) {
                        var n = o(e, t, r), i = c(e, t, r), a = u(e, t, n);
                        return Di(e, s, h(n, a, i)), i
                    };
                    var f = this.object.object._compile(e, t);
                    if (this.object.index.isObjectProperty()) {
                        var l = this.object.index.getObjectProperty();
                        return function (e, t, r) {
                            var n = f(e, t, r), i = zi(n, l), a = u(e, t, i), o = c(e, t, r);
                            return Di(n, l, h(i, a, o)), o
                        }
                    }
                    var p = this.object.index._compile(e, t);
                    return function (e, t, r) {
                        var n = f(e, t, r), i = p(e, t, n), a = m(n, i), o = u(e, t, a), s = c(e, t, r);
                        return h(n, i, h(a, o, s)), s
                    }
                }
                if (!Object(ie.J)(this.object)) throw new TypeError("SymbolNode expected as object");
                return function (e, t, r) {
                    return Di(e, s, c(e, t, r))
                }
            }, s.prototype.forEach = function (e) {
                e(this.object, "object", this), this.index && e(this.index, "index", this), e(this.value, "value", this)
            }, s.prototype.map = function (e) {
                return new s(this._ifNode(e(this.object, "object", this)), this.index ? this._ifNode(e(this.index, "index", this)) : null, this._ifNode(e(this.value, "value", this)))
            }, s.prototype.clone = function () {
                return new s(this.object, this.index, this.value)
            }, s.prototype._toString = function (e) {
                var t = this.object.toString(e), r = this.index ? this.index.toString(e) : "",
                    n = this.value.toString(e);
                return u(this, e && e.parenthesis) && (n = "(" + n + ")"), t + r + " = " + n
            }, s.prototype.toJSON = function () {
                return {mathjs: "AssignmentNode", object: this.object, index: this.index, value: this.value}
            }, s.fromJSON = function (e) {
                return new s(e.object, e.index, e.value)
            }, s.prototype.toHTML = function (e) {
                var t = this.object.toHTML(e), r = this.index ? this.index.toHTML(e) : "", n = this.value.toHTML(e);
                return u(this, e && e.parenthesis) && (n = '<span class="math-paranthesis math-round-parenthesis">(</span>' + n + '<span class="math-paranthesis math-round-parenthesis">)</span>'), t + r + '<span class="math-operator math-assignment-operator math-variable-assignment-operator math-binary-operator">=</span>' + n
            }, s.prototype._toTex = function (e) {
                var t = this.object.toTex(e), r = this.index ? this.index.toTex(e) : "", n = this.value.toTex(e);
                return u(this, e && e.parenthesis) && (n = "\\left(".concat(n, "\\right)")), t + r + ":=" + n
            }, s
        }, {isClass: !0, isNode: !0}), Yc = ["ResultSet", "Node"], Xc = Object(s.a)("BlockNode", Yc, function (e) {
            var o = e.ResultSet, t = e.Node;

            function a(e) {
                if (!(this instanceof a)) throw new SyntaxError("Constructor must be called with the new operator");
                if (!Array.isArray(e)) throw new Error("Array expected");
                this.blocks = e.map(function (e) {
                    var t = e && e.node, r = !e || void 0 === e.visible || e.visible;
                    if (!Object(ie.w)(t)) throw new TypeError('Property "node" must be a Node');
                    if ("boolean" != typeof r) throw new TypeError('Property "visible" must be a boolean');
                    return {node: t, visible: r}
                })
            }

            return (a.prototype = new t).type = "BlockNode", a.prototype.isBlockNode = !0, a.prototype._compile = function (t, r) {
                var e = Object(q.k)(this.blocks, function (e) {
                    return {evaluate: e.node._compile(t, r), visible: e.visible}
                });
                return function (r, n, i) {
                    var a = [];
                    return Object(q.f)(e, function (e) {
                        var t = e.evaluate(r, n, i);
                        e.visible && a.push(t)
                    }), new o(a)
                }
            }, a.prototype.forEach = function (e) {
                for (var t = 0; t < this.blocks.length; t++) e(this.blocks[t].node, "blocks[" + t + "].node", this)
            }, a.prototype.map = function (e) {
                for (var t = [], r = 0; r < this.blocks.length; r++) {
                    var n = this.blocks[r], i = this._ifNode(e(n.node, "blocks[" + r + "].node", this));
                    t[r] = {node: i, visible: n.visible}
                }
                return new a(t)
            }, a.prototype.clone = function () {
                return new a(this.blocks.map(function (e) {
                    return {node: e.node, visible: e.visible}
                }))
            }, a.prototype._toString = function (t) {
                return this.blocks.map(function (e) {
                    return e.node.toString(t) + (e.visible ? "" : ";")
                }).join("\n")
            }, a.prototype.toJSON = function () {
                return {mathjs: "BlockNode", blocks: this.blocks}
            }, a.fromJSON = function (e) {
                return new a(e.blocks)
            }, a.prototype.toHTML = function (t) {
                return this.blocks.map(function (e) {
                    return e.node.toHTML(t) + (e.visible ? "" : '<span class="math-separator">;</span>')
                }).join('<span class="math-separator"><br /></span>')
            }, a.prototype._toTex = function (t) {
                return this.blocks.map(function (e) {
                    return e.node.toTex(t) + (e.visible ? "" : ";")
                }).join("\\;\\;\n")
            }, a
        }, {isClass: !0, isNode: !0}), Qc = ["Node"], Kc = Object(s.a)("ConditionalNode", Qc, function (e) {
            var t = e.Node;

            function n(e, t, r) {
                if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
                if (!Object(ie.w)(e)) throw new TypeError("Parameter condition must be a Node");
                if (!Object(ie.w)(t)) throw new TypeError("Parameter trueExpr must be a Node");
                if (!Object(ie.w)(r)) throw new TypeError("Parameter falseExpr must be a Node");
                this.condition = e, this.trueExpr = t, this.falseExpr = r
            }

            return (n.prototype = new t).type = "ConditionalNode", n.prototype.isConditionalNode = !0, n.prototype._compile = function (e, t) {
                var n = this.condition._compile(e, t), i = this.trueExpr._compile(e, t),
                    a = this.falseExpr._compile(e, t);
                return function (e, t, r) {
                    return (function (e) {
                        if ("number" == typeof e || "boolean" == typeof e || "string" == typeof e) return !!e;
                        if (e) {
                            if (Object(ie.e)(e)) return !e.isZero();
                            if (Object(ie.j)(e)) return !(!e.re && !e.im);
                            if (Object(ie.L)(e)) return !!e.value
                        }
                        if (null != e) throw new TypeError('Unsupported type of condition "' + Object(ie.M)(e) + '"');
                        return !1
                    }(n(e, t, r)) ? i : a)(e, t, r)
                }
            }, n.prototype.forEach = function (e) {
                e(this.condition, "condition", this), e(this.trueExpr, "trueExpr", this), e(this.falseExpr, "falseExpr", this)
            }, n.prototype.map = function (e) {
                return new n(this._ifNode(e(this.condition, "condition", this)), this._ifNode(e(this.trueExpr, "trueExpr", this)), this._ifNode(e(this.falseExpr, "falseExpr", this)))
            }, n.prototype.clone = function () {
                return new n(this.condition, this.trueExpr, this.falseExpr)
            }, n.prototype._toString = function (e) {
                var t = e && e.parenthesis ? e.parenthesis : "keep", r = Gc(this, t), n = this.condition.toString(e),
                    i = Gc(this.condition, t);
                ("all" === t || "OperatorNode" === this.condition.type || null !== i && i <= r) && (n = "(" + n + ")");
                var a = this.trueExpr.toString(e), o = Gc(this.trueExpr, t);
                ("all" === t || "OperatorNode" === this.trueExpr.type || null !== o && o <= r) && (a = "(" + a + ")");
                var s = this.falseExpr.toString(e), u = Gc(this.falseExpr, t);
                return ("all" === t || "OperatorNode" === this.falseExpr.type || null !== u && u <= r) && (s = "(" + s + ")"), n + " ? " + a + " : " + s
            }, n.prototype.toJSON = function () {
                return {
                    mathjs: "ConditionalNode",
                    condition: this.condition,
                    trueExpr: this.trueExpr,
                    falseExpr: this.falseExpr
                }
            }, n.fromJSON = function (e) {
                return new n(e.condition, e.trueExpr, e.falseExpr)
            }, n.prototype.toHTML = function (e) {
                var t = e && e.parenthesis ? e.parenthesis : "keep", r = Gc(this, t), n = this.condition.toHTML(e),
                    i = Gc(this.condition, t);
                ("all" === t || "OperatorNode" === this.condition.type || null !== i && i <= r) && (n = '<span class="math-parenthesis math-round-parenthesis">(</span>' + n + '<span class="math-parenthesis math-round-parenthesis">)</span>');
                var a = this.trueExpr.toHTML(e), o = Gc(this.trueExpr, t);
                ("all" === t || "OperatorNode" === this.trueExpr.type || null !== o && o <= r) && (a = '<span class="math-parenthesis math-round-parenthesis">(</span>' + a + '<span class="math-parenthesis math-round-parenthesis">)</span>');
                var s = this.falseExpr.toHTML(e), u = Gc(this.falseExpr, t);
                return ("all" === t || "OperatorNode" === this.falseExpr.type || null !== u && u <= r) && (s = '<span class="math-parenthesis math-round-parenthesis">(</span>' + s + '<span class="math-parenthesis math-round-parenthesis">)</span>'), n + '<span class="math-operator math-conditional-operator">?</span>' + a + '<span class="math-operator math-conditional-operator">:</span>' + s
            }, n.prototype._toTex = function (e) {
                return "\\begin{cases} {" + this.trueExpr.toTex(e) + "}, &\\quad{\\text{if }\\;" + this.condition.toTex(e) + "}\\\\{" + this.falseExpr.toTex(e) + "}, &\\quad{\\text{otherwise}}\\end{cases}"
            }, n
        }, {isClass: !0, isNode: !0}), ef = r(16), tf = r.n(ef), rf = {
            Alpha: "A",
            alpha: "\\alpha",
            Beta: "B",
            beta: "\\beta",
            Gamma: "\\Gamma",
            gamma: "\\gamma",
            Delta: "\\Delta",
            delta: "\\delta",
            Epsilon: "E",
            epsilon: "\\epsilon",
            varepsilon: "\\varepsilon",
            Zeta: "Z",
            zeta: "\\zeta",
            Eta: "H",
            eta: "\\eta",
            Theta: "\\Theta",
            theta: "\\theta",
            vartheta: "\\vartheta",
            Iota: "I",
            iota: "\\iota",
            Kappa: "K",
            kappa: "\\kappa",
            varkappa: "\\varkappa",
            Lambda: "\\Lambda",
            lambda: "\\lambda",
            Mu: "M",
            mu: "\\mu",
            Nu: "N",
            nu: "\\nu",
            Xi: "\\Xi",
            xi: "\\xi",
            Omicron: "O",
            omicron: "o",
            Pi: "\\Pi",
            pi: "\\pi",
            varpi: "\\varpi",
            Rho: "P",
            rho: "\\rho",
            varrho: "\\varrho",
            Sigma: "\\Sigma",
            sigma: "\\sigma",
            varsigma: "\\varsigma",
            Tau: "T",
            tau: "\\tau",
            Upsilon: "\\Upsilon",
            upsilon: "\\upsilon",
            Phi: "\\Phi",
            phi: "\\phi",
            varphi: "\\varphi",
            Chi: "X",
            chi: "\\chi",
            Psi: "\\Psi",
            psi: "\\psi",
            Omega: "\\Omega",
            omega: "\\omega",
            true: "\\mathrm{True}",
            false: "\\mathrm{False}",
            i: "i",
            inf: "\\infty",
            Inf: "\\infty",
            infinity: "\\infty",
            Infinity: "\\infty",
            oo: "\\infty",
            lim: "\\lim",
            undefined: "\\mathbf{?}"
        }, nf = {
            transpose: "^\\top",
            ctranspose: "^H",
            factorial: "!",
            pow: "^",
            dotPow: ".^\\wedge",
            unaryPlus: "+",
            unaryMinus: "-",
            bitNot: "\\~",
            not: "\\neg",
            multiply: "\\cdot",
            divide: "\\frac",
            dotMultiply: ".\\cdot",
            dotDivide: ".:",
            mod: "\\mod",
            add: "+",
            subtract: "-",
            to: "\\rightarrow",
            leftShift: "<<",
            rightArithShift: ">>",
            rightLogShift: ">>>",
            equal: "=",
            unequal: "\\neq",
            smaller: "<",
            larger: ">",
            smallerEq: "\\leq",
            largerEq: "\\geq",
            bitAnd: "\\&",
            bitXor: "\\underline{|}",
            bitOr: "|",
            and: "\\wedge",
            xor: "\\veebar",
            or: "\\vee"
        }, af = {
            abs: {1: "\\left|${args[0]}\\right|"},
            add: {2: "\\left(${args[0]}".concat(nf.add, "${args[1]}\\right)")},
            cbrt: {1: "\\sqrt[3]{${args[0]}}"},
            ceil: {1: "\\left\\lceil${args[0]}\\right\\rceil"},
            cube: {1: "\\left(${args[0]}\\right)^3"},
            divide: {2: "\\frac{${args[0]}}{${args[1]}}"},
            dotDivide: {2: "\\left(${args[0]}".concat(nf.dotDivide, "${args[1]}\\right)")},
            dotMultiply: {2: "\\left(${args[0]}".concat(nf.dotMultiply, "${args[1]}\\right)")},
            dotPow: {2: "\\left(${args[0]}".concat(nf.dotPow, "${args[1]}\\right)")},
            exp: {1: "\\exp\\left(${args[0]}\\right)"},
            expm1: "\\left(e".concat(nf.pow, "{${args[0]}}-1\\right)"),
            fix: {1: "\\mathrm{${name}}\\left(${args[0]}\\right)"},
            floor: {1: "\\left\\lfloor${args[0]}\\right\\rfloor"},
            gcd: "\\gcd\\left(${args}\\right)",
            hypot: "\\hypot\\left(${args}\\right)",
            log: {1: "\\ln\\left(${args[0]}\\right)", 2: "\\log_{${args[1]}}\\left(${args[0]}\\right)"},
            log10: {1: "\\log_{10}\\left(${args[0]}\\right)"},
            log1p: {1: "\\ln\\left(${args[0]}+1\\right)", 2: "\\log_{${args[1]}}\\left(${args[0]}+1\\right)"},
            log2: "\\log_{2}\\left(${args[0]}\\right)",
            mod: {2: "\\left(${args[0]}".concat(nf.mod, "${args[1]}\\right)")},
            multiply: {2: "\\left(${args[0]}".concat(nf.multiply, "${args[1]}\\right)")},
            norm: {1: "\\left\\|${args[0]}\\right\\|", 2: void 0},
            nthRoot: {2: "\\sqrt[${args[1]}]{${args[0]}}"},
            nthRoots: {2: "\\{y : $y^{args[1]} = {${args[0]}}\\}"},
            pow: {2: "\\left(${args[0]}\\right)".concat(nf.pow, "{${args[1]}}")},
            round: {1: "\\left\\lfloor${args[0]}\\right\\rceil", 2: void 0},
            sign: {1: "\\mathrm{${name}}\\left(${args[0]}\\right)"},
            sqrt: {1: "\\sqrt{${args[0]}}"},
            square: {1: "\\left(${args[0]}\\right)^2"},
            subtract: {2: "\\left(${args[0]}".concat(nf.subtract, "${args[1]}\\right)")},
            unaryMinus: {1: "".concat(nf.unaryMinus, "\\left(${args[0]}\\right)")},
            unaryPlus: {1: "".concat(nf.unaryPlus, "\\left(${args[0]}\\right)")},
            bitAnd: {2: "\\left(${args[0]}".concat(nf.bitAnd, "${args[1]}\\right)")},
            bitNot: {1: nf.bitNot + "\\left(${args[0]}\\right)"},
            bitOr: {2: "\\left(${args[0]}".concat(nf.bitOr, "${args[1]}\\right)")},
            bitXor: {2: "\\left(${args[0]}".concat(nf.bitXor, "${args[1]}\\right)")},
            leftShift: {2: "\\left(${args[0]}".concat(nf.leftShift, "${args[1]}\\right)")},
            rightArithShift: {2: "\\left(${args[0]}".concat(nf.rightArithShift, "${args[1]}\\right)")},
            rightLogShift: {2: "\\left(${args[0]}".concat(nf.rightLogShift, "${args[1]}\\right)")},
            bellNumbers: {1: "\\mathrm{B}_{${args[0]}}"},
            catalan: {1: "\\mathrm{C}_{${args[0]}}"},
            stirlingS2: {2: "\\mathrm{S}\\left(${args}\\right)"},
            arg: {1: "\\arg\\left(${args[0]}\\right)"},
            conj: {1: "\\left(${args[0]}\\right)^*"},
            im: {1: "\\Im\\left\\lbrace${args[0]}\\right\\rbrace"},
            re: {1: "\\Re\\left\\lbrace${args[0]}\\right\\rbrace"},
            and: {2: "\\left(${args[0]}".concat(nf.and, "${args[1]}\\right)")},
            not: {1: nf.not + "\\left(${args[0]}\\right)"},
            or: {2: "\\left(${args[0]}".concat(nf.or, "${args[1]}\\right)")},
            xor: {2: "\\left(${args[0]}".concat(nf.xor, "${args[1]}\\right)")},
            cross: {2: "\\left(${args[0]}\\right)\\times\\left(${args[1]}\\right)"},
            ctranspose: {1: "\\left(${args[0]}\\right)".concat(nf.ctranspose)},
            det: {1: "\\det\\left(${args[0]}\\right)"},
            dot: {2: "\\left(${args[0]}\\cdot${args[1]}\\right)"},
            expm: {1: "\\exp\\left(${args[0]}\\right)"},
            inv: {1: "\\left(${args[0]}\\right)^{-1}"},
            sqrtm: {1: "{${args[0]}}".concat(nf.pow, "{\\frac{1}{2}}")},
            trace: {1: "\\mathrm{tr}\\left(${args[0]}\\right)"},
            transpose: {1: "\\left(${args[0]}\\right)".concat(nf.transpose)},
            combinations: {2: "\\binom{${args[0]}}{${args[1]}}"},
            combinationsWithRep: {2: "\\left(\\!\\!{\\binom{${args[0]}}{${args[1]}}}\\!\\!\\right)"},
            factorial: {1: "\\left(${args[0]}\\right)".concat(nf.factorial)},
            gamma: {1: "\\Gamma\\left(${args[0]}\\right)"},
            equal: {2: "\\left(${args[0]}".concat(nf.equal, "${args[1]}\\right)")},
            larger: {2: "\\left(${args[0]}".concat(nf.larger, "${args[1]}\\right)")},
            largerEq: {2: "\\left(${args[0]}".concat(nf.largerEq, "${args[1]}\\right)")},
            smaller: {2: "\\left(${args[0]}".concat(nf.smaller, "${args[1]}\\right)")},
            smallerEq: {2: "\\left(${args[0]}".concat(nf.smallerEq, "${args[1]}\\right)")},
            unequal: {2: "\\left(${args[0]}".concat(nf.unequal, "${args[1]}\\right)")},
            erf: {1: "erf\\left(${args[0]}\\right)"},
            max: "\\max\\left(${args}\\right)",
            min: "\\min\\left(${args}\\right)",
            variance: "\\mathrm{Var}\\left(${args}\\right)",
            acos: {1: "\\cos^{-1}\\left(${args[0]}\\right)"},
            acosh: {1: "\\cosh^{-1}\\left(${args[0]}\\right)"},
            acot: {1: "\\cot^{-1}\\left(${args[0]}\\right)"},
            acoth: {1: "\\coth^{-1}\\left(${args[0]}\\right)"},
            acsc: {1: "\\csc^{-1}\\left(${args[0]}\\right)"},
            acsch: {1: "\\mathrm{csch}^{-1}\\left(${args[0]}\\right)"},
            asec: {1: "\\sec^{-1}\\left(${args[0]}\\right)"},
            asech: {1: "\\mathrm{sech}^{-1}\\left(${args[0]}\\right)"},
            asin: {1: "\\sin^{-1}\\left(${args[0]}\\right)"},
            asinh: {1: "\\sinh^{-1}\\left(${args[0]}\\right)"},
            atan: {1: "\\tan^{-1}\\left(${args[0]}\\right)"},
            atan2: {2: "\\mathrm{atan2}\\left(${args}\\right)"},
            atanh: {1: "\\tanh^{-1}\\left(${args[0]}\\right)"},
            cos: {1: "\\cos\\left(${args[0]}\\right)"},
            cosh: {1: "\\cosh\\left(${args[0]}\\right)"},
            cot: {1: "\\cot\\left(${args[0]}\\right)"},
            coth: {1: "\\coth\\left(${args[0]}\\right)"},
            csc: {1: "\\csc\\left(${args[0]}\\right)"},
            csch: {1: "\\mathrm{csch}\\left(${args[0]}\\right)"},
            sec: {1: "\\sec\\left(${args[0]}\\right)"},
            sech: {1: "\\mathrm{sech}\\left(${args[0]}\\right)"},
            sin: {1: "\\sin\\left(${args[0]}\\right)"},
            sinh: {1: "\\sinh\\left(${args[0]}\\right)"},
            tan: {1: "\\tan\\left(${args[0]}\\right)"},
            tanh: {1: "\\tanh\\left(${args[0]}\\right)"},
            to: {2: "\\left(${args[0]}".concat(nf.to, "${args[1]}\\right)")},
            numeric: function (e) {
                return e.args[0].toTex()
            },
            number: {0: "0", 1: "\\left(${args[0]}\\right)", 2: "\\left(\\left(${args[0]}\\right)${args[1]}\\right)"},
            string: {0: '\\mathtt{""}', 1: "\\mathrm{string}\\left(${args[0]}\\right)"},
            bignumber: {0: "0", 1: "\\left(${args[0]}\\right)"},
            complex: {
                0: "0",
                1: "\\left(${args[0]}\\right)",
                2: "\\left(\\left(${args[0]}\\right)+".concat(rf.i, "\\cdot\\left(${args[1]}\\right)\\right)")
            },
            matrix: {
                0: "\\begin{bmatrix}\\end{bmatrix}",
                1: "\\left(${args[0]}\\right)",
                2: "\\left(${args[0]}\\right)"
            },
            sparse: {0: "\\begin{bsparse}\\end{bsparse}", 1: "\\left(${args[0]}\\right)"},
            unit: {1: "\\left(${args[0]}\\right)", 2: "\\left(\\left(${args[0]}\\right)${args[1]}\\right)"}
        }, of = {deg: "^\\circ"};

        function sf(e) {
            return tf()(e, {preserveFormatting: !0})
        }

        function uf(e, t) {
            return (t = void 0 !== t && t) ? Object(ae.f)(of, e) ? of[e] : "\\mathrm{" + sf(e) + "}" : Object(ae.f)(rf, e) ? rf[e] : sf(e)
        }

        var cf = ["Node"], ff = Object(s.a)("ConstantNode", cf, function (e) {
                var t = e.Node;

                function r(e) {
                    if (!(this instanceof r)) throw new SyntaxError("Constructor must be called with the new operator");
                    this.value = e
                }

                return (r.prototype = new t).type = "ConstantNode", r.prototype.isConstantNode = !0, r.prototype._compile = function (e, t) {
                    var r = this.value;
                    return function () {
                        return r
                    }
                }, r.prototype.forEach = function (e) {
                }, r.prototype.map = function (e) {
                    return this.clone()
                }, r.prototype.clone = function () {
                    return new r(this.value)
                }, r.prototype._toString = function (e) {
                    return Object(V.d)(this.value, e)
                }, r.prototype.toHTML = function (e) {
                    var t = this._toString(e);
                    switch (Object(ie.M)(this.value)) {
                        case"number":
                        case"BigNumber":
                        case"Fraction":
                            return '<span class="math-number">' + t + "</span>";
                        case"string":
                            return '<span class="math-string">' + t + "</span>";
                        case"boolean":
                            return '<span class="math-boolean">' + t + "</span>";
                        case"null":
                            return '<span class="math-null-symbol">' + t + "</span>";
                        case"undefined":
                            return '<span class="math-undefined">' + t + "</span>";
                        default:
                            return '<span class="math-symbol">' + t + "</span>"
                    }
                }, r.prototype.toJSON = function () {
                    return {mathjs: "ConstantNode", value: this.value}
                }, r.fromJSON = function (e) {
                    return new r(e.value)
                }, r.prototype._toTex = function (e) {
                    var t = this._toString(e);
                    switch (Object(ie.M)(this.value)) {
                        case"string":
                            return "\\mathtt{" + sf(t) + "}";
                        case"number":
                        case"BigNumber":
                            if (!isFinite(this.value)) return this.value.valueOf() < 0 ? "-\\infty" : "\\infty";
                            var r = t.toLowerCase().indexOf("e");
                            return -1 !== r ? t.substring(0, r) + "\\cdot10^{" + t.substring(r + 1) + "}" : t;
                        case"Fraction":
                            return this.value.toLatex();
                        default:
                            return t
                    }
                }, r
            }, {isClass: !0, isNode: !0}), lf = ["typed", "Node"],
            pf = Object(s.a)("FunctionAssignmentNode", lf, function (e) {
                var f = e.typed, t = e.Node;

                function n(e, t, r) {
                    if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
                    if ("string" != typeof e) throw new TypeError('String expected for parameter "name"');
                    if (!Array.isArray(t)) throw new TypeError('Array containing strings or objects expected for parameter "params"');
                    if (!Object(ie.w)(r)) throw new TypeError('Node expected for parameter "expr"');
                    if (e in qc) throw new Error('Illegal function name, "' + e + '" is a reserved keyword');
                    this.name = e, this.params = t.map(function (e) {
                        return e && e.name || e
                    }), this.types = t.map(function (e) {
                        return e && e.type || "any"
                    }), this.expr = r
                }

                function a(e, t) {
                    var r = Gc(e, t), n = Gc(e.expr, t);
                    return "all" === t || null !== n && n <= r
                }

                return (n.prototype = new t).type = "FunctionAssignmentNode", n.prototype.isFunctionAssignmentNode = !0, n.prototype._compile = function (e, t) {
                    var r = Object.create(t);
                    Object(q.f)(this.params, function (e) {
                        r[e] = !0
                    });
                    var a = this.expr._compile(e, r), o = this.name, s = this.params, u = Object(q.j)(this.types, ","),
                        c = o + "(" + Object(q.j)(this.params, ", ") + ")";
                    return function (r, n, i) {
                        var e = {};
                        e[u] = function () {
                            for (var e = Object.create(n), t = 0; t < s.length; t++) e[s[t]] = arguments[t];
                            return a(r, e, i)
                        };
                        var t = f(o, e);
                        return t.syntax = c, Di(r, o, t), t
                    }
                }, n.prototype.forEach = function (e) {
                    e(this.expr, "expr", this)
                }, n.prototype.map = function (e) {
                    var t = this._ifNode(e(this.expr, "expr", this));
                    return new n(this.name, this.params.slice(0), t)
                }, n.prototype.clone = function () {
                    return new n(this.name, this.params.slice(0), this.expr)
                }, n.prototype._toString = function (e) {
                    var t = e && e.parenthesis ? e.parenthesis : "keep", r = this.expr.toString(e);
                    return a(this, t) && (r = "(" + r + ")"), this.name + "(" + this.params.join(", ") + ") = " + r
                }, n.prototype.toJSON = function () {
                    var r = this.types;
                    return {
                        mathjs: "FunctionAssignmentNode", name: this.name, params: this.params.map(function (e, t) {
                            return {name: e, type: r[t]}
                        }), expr: this.expr
                    }
                }, n.fromJSON = function (e) {
                    return new n(e.name, e.params, e.expr)
                }, n.prototype.toHTML = function (e) {
                    for (var t = e && e.parenthesis ? e.parenthesis : "keep", r = [], n = 0; n < this.params.length; n++) r.push('<span class="math-symbol math-parameter">' + Object(V.c)(this.params[n]) + "</span>");
                    var i = this.expr.toHTML(e);
                    return a(this, t) && (i = '<span class="math-parenthesis math-round-parenthesis">(</span>' + i + '<span class="math-parenthesis math-round-parenthesis">)</span>'), '<span class="math-function">' + Object(V.c)(this.name) + '</span><span class="math-parenthesis math-round-parenthesis">(</span>' + r.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-round-parenthesis">)</span><span class="math-operator math-assignment-operator math-variable-assignment-operator math-binary-operator">=</span>' + i
                }, n.prototype._toTex = function (e) {
                    var t = e && e.parenthesis ? e.parenthesis : "keep", r = this.expr.toTex(e);
                    return a(this, t) && (r = "\\left(".concat(r, "\\right)")), "\\mathrm{" + this.name + "}\\left(" + this.params.map(uf).join(",") + "\\right):=" + r
                }, n
            }, {isClass: !0, isNode: !0});

        function mf(e) {
            return function (e) {
                if (Array.isArray(e)) return hf(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(e) || function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return hf(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r) return Array.from(e);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return hf(e, t)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function hf(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n
        }

        var df = ["Range", "Node", "size"], yf = Object(s.a)("IndexNode", df, function (e) {
            var n = e.Range, t = e.Node, h = e.size;

            function i(e, t) {
                if (!(this instanceof i)) throw new SyntaxError("Constructor must be called with the new operator");
                if (this.dimensions = e, this.dotNotation = t || !1, !Array.isArray(e) || !e.every(ie.w)) throw new TypeError('Array containing Nodes expected for parameter "dimensions"');
                if (this.dotNotation && !this.isObjectProperty()) throw new Error("dotNotation only applicable for object properties")
            }

            function d(e, t, r) {
                return new n(Object(ie.e)(e) ? e.toNumber() : e, Object(ie.e)(t) ? t.toNumber() : t, Object(ie.e)(r) ? r.toNumber() : r)
            }

            return (i.prototype = new t).type = "IndexNode", i.prototype.isIndexNode = !0, i.prototype._compile = function (p, m) {
                var i = Object(q.k)(this.dimensions, function (e, a) {
                    if (Object(ie.E)(e)) {
                        if (e.needsEnd()) {
                            var t = Object.create(m);
                            t.end = !0;
                            var o = e.start._compile(p, t), s = e.end._compile(p, t),
                                u = e.step ? e.step._compile(p, t) : function () {
                                    return 1
                                };
                            return function (e, t, r) {
                                var n = h(r).valueOf(), i = Object.create(t);
                                return i.end = n[a], d(o(e, i, r), s(e, i, r), u(e, i, r))
                            }
                        }
                        var n = e.start._compile(p, m), i = e.end._compile(p, m),
                            c = e.step ? e.step._compile(p, m) : function () {
                                return 1
                            };
                        return function (e, t, r) {
                            return d(n(e, t, r), i(e, t, r), c(e, t, r))
                        }
                    }
                    if (Object(ie.J)(e) && "end" === e.name) {
                        var r = Object.create(m);
                        r.end = !0;
                        var f = e._compile(p, r);
                        return function (e, t, r) {
                            var n = h(r).valueOf(), i = Object.create(t);
                            return i.end = n[a], f(e, i, r)
                        }
                    }
                    var l = e._compile(p, m);
                    return function (e, t, r) {
                        return l(e, t, r)
                    }
                }), a = zi(p, "index");
                return function (t, r, n) {
                    var e = Object(q.k)(i, function (e) {
                        return e(t, r, n)
                    });
                    return a.apply(void 0, mf(e))
                }
            }, i.prototype.forEach = function (e) {
                for (var t = 0; t < this.dimensions.length; t++) e(this.dimensions[t], "dimensions[" + t + "]", this)
            }, i.prototype.map = function (e) {
                for (var t = [], r = 0; r < this.dimensions.length; r++) t[r] = this._ifNode(e(this.dimensions[r], "dimensions[" + r + "]", this));
                return new i(t, this.dotNotation)
            }, i.prototype.clone = function () {
                return new i(this.dimensions.slice(0), this.dotNotation)
            }, i.prototype.isObjectProperty = function () {
                return 1 === this.dimensions.length && Object(ie.l)(this.dimensions[0]) && "string" == typeof this.dimensions[0].value
            }, i.prototype.getObjectProperty = function () {
                return this.isObjectProperty() ? this.dimensions[0].value : null
            }, i.prototype._toString = function (e) {
                return this.dotNotation ? "." + this.getObjectProperty() : "[" + this.dimensions.join(", ") + "]"
            }, i.prototype.toJSON = function () {
                return {mathjs: "IndexNode", dimensions: this.dimensions, dotNotation: this.dotNotation}
            }, i.fromJSON = function (e) {
                return new i(e.dimensions, e.dotNotation)
            }, i.prototype.toHTML = function (e) {
                for (var t = [], r = 0; r < this.dimensions.length; r++) t[r] = this.dimensions[r].toHTML();
                return this.dotNotation ? '<span class="math-operator math-accessor-operator">.</span><span class="math-symbol math-property">' + Object(V.c)(this.getObjectProperty()) + "</span>" : '<span class="math-parenthesis math-square-parenthesis">[</span>' + t.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-square-parenthesis">]</span>'
            }, i.prototype._toTex = function (t) {
                var e = this.dimensions.map(function (e) {
                    return e.toTex(t)
                });
                return this.dotNotation ? "." + this.getObjectProperty() : "_{" + e.join(",") + "}"
            }, i
        }, {isClass: !0, isNode: !0});

        function gf(e) {
            return (gf = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        var vf = ["Node"], bf = Object(s.a)("ObjectNode", vf, function (e) {
            var t = e.Node;

            function n(t) {
                if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
                if (this.properties = t || {}, t && ("object" !== gf(t) || !Object.keys(t).every(function (e) {
                    return Object(ie.w)(t[e])
                }))) throw new TypeError("Object containing Nodes expected")
            }

            return (n.prototype = new t).type = "ObjectNode", n.prototype.isObjectNode = !0, n.prototype._compile = function (e, t) {
                var a = {};
                for (var r in this.properties) if (Object(ae.f)(this.properties, r)) {
                    var n = Object(V.e)(r), i = JSON.parse(n);
                    if (!Ri(this.properties, i)) throw new Error('No access to property "' + i + '"');
                    a[i] = this.properties[r]._compile(e, t)
                }
                return function (e, t, r) {
                    var n = {};
                    for (var i in a) Object(ae.f)(a, i) && (n[i] = a[i](e, t, r));
                    return n
                }
            }, n.prototype.forEach = function (e) {
                for (var t in this.properties) Object(ae.f)(this.properties, t) && e(this.properties[t], "properties[" + Object(V.e)(t) + "]", this)
            }, n.prototype.map = function (e) {
                var t = {};
                for (var r in this.properties) Object(ae.f)(this.properties, r) && (t[r] = this._ifNode(e(this.properties[r], "properties[" + Object(V.e)(r) + "]", this)));
                return new n(t)
            }, n.prototype.clone = function () {
                var e = {};
                for (var t in this.properties) Object(ae.f)(this.properties, t) && (e[t] = this.properties[t]);
                return new n(e)
            }, n.prototype._toString = function (e) {
                var t = [];
                for (var r in this.properties) Object(ae.f)(this.properties, r) && t.push(Object(V.e)(r) + ": " + this.properties[r].toString(e));
                return "{" + t.join(", ") + "}"
            }, n.prototype.toJSON = function () {
                return {mathjs: "ObjectNode", properties: this.properties}
            }, n.fromJSON = function (e) {
                return new n(e.properties)
            }, n.prototype.toHTML = function (e) {
                var t = [];
                for (var r in this.properties) Object(ae.f)(this.properties, r) && t.push('<span class="math-symbol math-property">' + Object(V.c)(r) + '</span><span class="math-operator math-assignment-operator math-property-assignment-operator math-binary-operator">:</span>' + this.properties[r].toHTML(e));
                return '<span class="math-parenthesis math-curly-parenthesis">{</span>' + t.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-curly-parenthesis">}</span>'
            }, n.prototype._toTex = function (e) {
                var t = [];
                for (var r in this.properties) Object(ae.f)(this.properties, r) && t.push("\\mathbf{" + r + ":} & " + this.properties[r].toTex(e) + "\\\\");
                return "\\left\\{\\begin{array}{ll}".concat(t.join("\n"), "\\end{array}\\right\\}")
            }, n
        }, {isClass: !0, isNode: !0}), xf = ["Node"], wf = Object(s.a)("OperatorNode", xf, function (e) {
            var t = e.Node;

            function i(e, t, r, n) {
                if (!(this instanceof i)) throw new SyntaxError("Constructor must be called with the new operator");
                if ("string" != typeof e) throw new TypeError('string expected for parameter "op"');
                if ("string" != typeof t) throw new TypeError('string expected for parameter "fn"');
                if (!Array.isArray(r) || !r.every(ie.w)) throw new TypeError('Array containing Nodes expected for parameter "args"');
                this.implicit = !0 === n, this.op = e, this.fn = t, this.args = r || []
            }

            function m(i, a, e, t, r) {
                var n, o = Gc(i, a), s = Zc(i, a);
                if ("all" === a || 2 < t.length && "OperatorNode:add" !== i.getIdentifier() && "OperatorNode:multiply" !== i.getIdentifier()) return t.map(function (e) {
                    switch (e.getContent().type) {
                        case"ArrayNode":
                        case"ConstantNode":
                        case"SymbolNode":
                        case"ParenthesisNode":
                            return !1;
                        default:
                            return !0
                    }
                });
                switch (t.length) {
                    case 0:
                        n = [];
                        break;
                    case 1:
                        var u = Gc(t[0], a);
                        if (r && null !== u) {
                            var c,
                                f = "keep" === a ? (c = t[0].getIdentifier(), i.getIdentifier()) : (c = t[0].getContent().getIdentifier(), i.getContent().getIdentifier());
                            if (!1 === $c[o][f].latexLeftParens) {
                                n = [!1];
                                break
                            }
                            if (!1 === $c[u][c].latexParens) {
                                n = [!1];
                                break
                            }
                        }
                        if (null === u) {
                            n = [!1];
                            break
                        }
                        if (u <= o) {
                            n = [!0];
                            break
                        }
                        n = [!1];
                        break;
                    case 2:
                        var l, p, m, h = Gc(t[0], a), d = Vc(i, t[0], a),
                            y = null !== h && (h === o && "right" === s && !d || h < o), g = Gc(t[1], a),
                            v = Vc(i, t[1], a), b = null !== g && (g === o && "left" === s && !v || g < o);
                        r && (m = "keep" === a ? (l = i.getIdentifier(), p = i.args[0].getIdentifier(), i.args[1].getIdentifier()) : (l = i.getContent().getIdentifier(), p = i.args[0].getContent().getIdentifier(), i.args[1].getContent().getIdentifier()), null !== h && (!1 === $c[o][l].latexLeftParens && (y = !1), !1 === $c[h][p].latexParens && (y = !1)), null !== g && (!1 === $c[o][l].latexRightParens && (b = !1), !1 === $c[g][m].latexParens && (b = !1))), n = [y, b];
                        break;
                    default:
                        "OperatorNode:add" !== i.getIdentifier() && "OperatorNode:multiply" !== i.getIdentifier() || (n = t.map(function (e) {
                            var t = Gc(e, a), r = Vc(i, e, a), n = Zc(e, a);
                            return null !== t && (o === t && s === n && !r || t < o)
                        }))
                }
                return 2 <= t.length && "OperatorNode:multiply" === i.getIdentifier() && i.implicit && "auto" === a && "hide" === e && (n = t.map(function (e, t) {
                    var r = "ParenthesisNode" === e.getIdentifier();
                    return !(!n[t] && !r)
                })), n
            }

            return (i.prototype = new t).type = "OperatorNode", i.prototype.isOperatorNode = !0, i.prototype._compile = function (t, r) {
                if ("string" != typeof this.fn || !Pi(t, this.fn)) throw t[this.fn] ? new Error('No access to function "' + this.fn + '"') : new Error("Function " + this.fn + ' missing in provided namespace "math"');
                var i = zi(t, this.fn), e = Object(q.k)(this.args, function (e) {
                    return e._compile(t, r)
                });
                if (1 === e.length) {
                    var n = e[0];
                    return function (e, t, r) {
                        return i(n(e, t, r))
                    }
                }
                if (2 !== e.length) return function (t, r, n) {
                    return i.apply(null, Object(q.k)(e, function (e) {
                        return e(t, r, n)
                    }))
                };
                var a = e[0], o = e[1];
                return function (e, t, r) {
                    return i(a(e, t, r), o(e, t, r))
                }
            }, i.prototype.forEach = function (e) {
                for (var t = 0; t < this.args.length; t++) e(this.args[t], "args[" + t + "]", this)
            }, i.prototype.map = function (e) {
                for (var t = [], r = 0; r < this.args.length; r++) t[r] = this._ifNode(e(this.args[r], "args[" + r + "]", this));
                return new i(this.op, this.fn, t, this.implicit)
            }, i.prototype.clone = function () {
                return new i(this.op, this.fn, this.args.slice(0), this.implicit)
            }, i.prototype.isUnary = function () {
                return 1 === this.args.length
            }, i.prototype.isBinary = function () {
                return 2 === this.args.length
            }, i.prototype._toString = function (r) {
                var e = r && r.parenthesis ? r.parenthesis : "keep", t = r && r.implicit ? r.implicit : "hide",
                    n = this.args, i = m(this, e, t, n, !1);
                if (1 === n.length) {
                    var a = Zc(this, e), o = n[0].toString(r);
                    i[0] && (o = "(" + o + ")");
                    var s = /[a-zA-Z]+/.test(this.op);
                    return "right" === a ? this.op + (s ? " " : "") + o : "left" === a ? o + (s ? " " : "") + this.op : o + this.op
                }
                if (2 === n.length) {
                    var u = n[0].toString(r), c = n[1].toString(r);
                    return i[0] && (u = "(" + u + ")"), i[1] && (c = "(" + c + ")"), this.implicit && "OperatorNode:multiply" === this.getIdentifier() && "hide" === t ? u + " " + c : u + " " + this.op + " " + c
                }
                if (2 < n.length && ("OperatorNode:add" === this.getIdentifier() || "OperatorNode:multiply" === this.getIdentifier())) {
                    var f = n.map(function (e, t) {
                        return e = e.toString(r), i[t] && (e = "(" + e + ")"), e
                    });
                    return this.implicit && "OperatorNode:multiply" === this.getIdentifier() && "hide" === t ? f.join(" ") : f.join(" " + this.op + " ")
                }
                return this.fn + "(" + this.args.join(", ") + ")"
            }, i.prototype.toJSON = function () {
                return {mathjs: "OperatorNode", op: this.op, fn: this.fn, args: this.args, implicit: this.implicit}
            }, i.fromJSON = function (e) {
                return new i(e.op, e.fn, e.args, e.implicit)
            }, i.prototype.toHTML = function (r) {
                var e = r && r.parenthesis ? r.parenthesis : "keep", t = r && r.implicit ? r.implicit : "hide",
                    n = this.args, i = m(this, e, t, n, !1);
                if (1 === n.length) {
                    var a = Zc(this, e), o = n[0].toHTML(r);
                    return i[0] && (o = '<span class="math-parenthesis math-round-parenthesis">(</span>' + o + '<span class="math-parenthesis math-round-parenthesis">)</span>'), "right" === a ? '<span class="math-operator math-unary-operator math-lefthand-unary-operator">' + Object(V.c)(this.op) + "</span>" + o : o + '<span class="math-operator math-unary-operator math-righthand-unary-operator">' + Object(V.c)(this.op) + "</span>"
                }
                if (2 === n.length) {
                    var s = n[0].toHTML(r), u = n[1].toHTML(r);
                    return i[0] && (s = '<span class="math-parenthesis math-round-parenthesis">(</span>' + s + '<span class="math-parenthesis math-round-parenthesis">)</span>'), i[1] && (u = '<span class="math-parenthesis math-round-parenthesis">(</span>' + u + '<span class="math-parenthesis math-round-parenthesis">)</span>'), this.implicit && "OperatorNode:multiply" === this.getIdentifier() && "hide" === t ? s + '<span class="math-operator math-binary-operator math-implicit-binary-operator"></span>' + u : s + '<span class="math-operator math-binary-operator math-explicit-binary-operator">' + Object(V.c)(this.op) + "</span>" + u
                }
                var c = n.map(function (e, t) {
                    return e = e.toHTML(r), i[t] && (e = '<span class="math-parenthesis math-round-parenthesis">(</span>' + e + '<span class="math-parenthesis math-round-parenthesis">)</span>'), e
                });
                return 2 < n.length && ("OperatorNode:add" === this.getIdentifier() || "OperatorNode:multiply" === this.getIdentifier()) ? this.implicit && "OperatorNode:multiply" === this.getIdentifier() && "hide" === t ? c.join('<span class="math-operator math-binary-operator math-implicit-binary-operator"></span>') : c.join('<span class="math-operator math-binary-operator math-explicit-binary-operator">' + Object(V.c)(this.op) + "</span>") : '<span class="math-function">' + Object(V.c)(this.fn) + '</span><span class="math-paranthesis math-round-parenthesis">(</span>' + c.join('<span class="math-separator">,</span>') + '<span class="math-paranthesis math-round-parenthesis">)</span>'
            }, i.prototype._toTex = function (r) {
                var e = r && r.parenthesis ? r.parenthesis : "keep", t = r && r.implicit ? r.implicit : "hide",
                    n = this.args, i = m(this, e, t, n, !0), a = void 0 === (a = nf[this.fn]) ? this.op : a;
                if (1 === n.length) {
                    var o = Zc(this, e), s = n[0].toTex(r);
                    return i[0] && (s = "\\left(".concat(s, "\\right)")), "right" === o ? a + s : s + a
                }
                if (2 === n.length) {
                    var u = n[0], c = u.toTex(r);
                    i[0] && (c = "\\left(".concat(c, "\\right)"));
                    var f, l = n[1].toTex(r);
                    switch (i[1] && (l = "\\left(".concat(l, "\\right)")), f = "keep" === e ? u.getIdentifier() : u.getContent().getIdentifier(), this.getIdentifier()) {
                        case"OperatorNode:divide":
                            return a + "{" + c + "}{" + l + "}";
                        case"OperatorNode:pow":
                            switch (c = "{" + c + "}", l = "{" + l + "}", f) {
                                case"ConditionalNode":
                                case"OperatorNode:divide":
                                    c = "\\left(".concat(c, "\\right)")
                            }
                            break;
                        case"OperatorNode:multiply":
                            if (this.implicit && "hide" === t) return c + "~" + l
                    }
                    return c + a + l
                }
                if (2 < n.length && ("OperatorNode:add" === this.getIdentifier() || "OperatorNode:multiply" === this.getIdentifier())) {
                    var p = n.map(function (e, t) {
                        return e = e.toTex(r), i[t] && (e = "\\left(".concat(e, "\\right)")), e
                    });
                    return "OperatorNode:multiply" === this.getIdentifier() && this.implicit ? p.join("~") : p.join(a)
                }
                return "\\mathrm{" + this.fn + "}\\left(" + n.map(function (e) {
                    return e.toTex(r)
                }).join(",") + "\\right)"
            }, i.prototype.getIdentifier = function () {
                return this.type + ":" + this.fn
            }, i
        }, {isClass: !0, isNode: !0}), Nf = ["Node"], Of = Object(s.a)("ParenthesisNode", Nf, function (e) {
            var t = e.Node;

            function r(e) {
                if (!(this instanceof r)) throw new SyntaxError("Constructor must be called with the new operator");
                if (!Object(ie.w)(e)) throw new TypeError('Node expected for parameter "content"');
                this.content = e
            }

            return (r.prototype = new t).type = "ParenthesisNode", r.prototype.isParenthesisNode = !0, r.prototype._compile = function (e, t) {
                return this.content._compile(e, t)
            }, r.prototype.getContent = function () {
                return this.content.getContent()
            }, r.prototype.forEach = function (e) {
                e(this.content, "content", this)
            }, r.prototype.map = function (e) {
                return new r(e(this.content, "content", this))
            }, r.prototype.clone = function () {
                return new r(this.content)
            }, r.prototype._toString = function (e) {
                return !e || e && !e.parenthesis || e && "keep" === e.parenthesis ? "(" + this.content.toString(e) + ")" : this.content.toString(e)
            }, r.prototype.toJSON = function () {
                return {mathjs: "ParenthesisNode", content: this.content}
            }, r.fromJSON = function (e) {
                return new r(e.content)
            }, r.prototype.toHTML = function (e) {
                return !e || e && !e.parenthesis || e && "keep" === e.parenthesis ? '<span class="math-parenthesis math-round-parenthesis">(</span>' + this.content.toHTML(e) + '<span class="math-parenthesis math-round-parenthesis">)</span>' : this.content.toHTML(e)
            }, r.prototype._toTex = function (e) {
                return !e || e && !e.parenthesis || e && "keep" === e.parenthesis ? "\\left(".concat(this.content.toTex(e), "\\right)") : this.content.toTex(e)
            }, r
        }, {isClass: !0, isNode: !0}), Mf = ["Node"], jf = Object(s.a)("RangeNode", Mf, function (e) {
            var t = e.Node;

            function n(e, t, r) {
                if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
                if (!Object(ie.w)(e)) throw new TypeError("Node expected");
                if (!Object(ie.w)(t)) throw new TypeError("Node expected");
                if (r && !Object(ie.w)(r)) throw new TypeError("Node expected");
                if (3 < arguments.length) throw new Error("Too many arguments");
                this.start = e, this.end = t, this.step = r || null
            }

            function o(e, t) {
                var r, n = Gc(e, t), i = {}, a = Gc(e.start, t);
                i.start = null !== a && a <= n || "all" === t, e.step && (r = Gc(e.step, t), i.step = null !== r && r <= n || "all" === t);
                var o = Gc(e.end, t);
                return i.end = null !== o && o <= n || "all" === t, i
            }

            return (n.prototype = new t).type = "RangeNode", n.prototype.isRangeNode = !0, n.prototype.needsEnd = function () {
                return 0 < this.filter(function (e) {
                    return Object(ie.J)(e) && "end" === e.name
                }).length
            }, n.prototype._compile = function (e, t) {
                var n = e.range, i = this.start._compile(e, t), a = this.end._compile(e, t);
                if (this.step) {
                    var o = this.step._compile(e, t);
                    return function (e, t, r) {
                        return n(i(e, t, r), a(e, t, r), o(e, t, r))
                    }
                }
                return function (e, t, r) {
                    return n(i(e, t, r), a(e, t, r))
                }
            }, n.prototype.forEach = function (e) {
                e(this.start, "start", this), e(this.end, "end", this), this.step && e(this.step, "step", this)
            }, n.prototype.map = function (e) {
                return new n(this._ifNode(e(this.start, "start", this)), this._ifNode(e(this.end, "end", this)), this.step && this._ifNode(e(this.step, "step", this)))
            }, n.prototype.clone = function () {
                return new n(this.start, this.end, this.step && this.step)
            }, n.prototype._toString = function (e) {
                var t, r, n = o(this, e && e.parenthesis ? e.parenthesis : "keep"), i = this.start.toString(e);
                n.start && (i = "(" + i + ")"), t = i, this.step && (r = this.step.toString(e), n.step && (r = "(" + r + ")"), t += ":" + r);
                var a = this.end.toString(e);
                return n.end && (a = "(" + a + ")"), t += ":" + a
            }, n.prototype.toJSON = function () {
                return {mathjs: "RangeNode", start: this.start, end: this.end, step: this.step}
            }, n.fromJSON = function (e) {
                return new n(e.start, e.end, e.step)
            }, n.prototype.toHTML = function (e) {
                var t, r, n = o(this, e && e.parenthesis ? e.parenthesis : "keep"), i = this.start.toHTML(e);
                n.start && (i = '<span class="math-parenthesis math-round-parenthesis">(</span>' + i + '<span class="math-parenthesis math-round-parenthesis">)</span>'), t = i, this.step && (r = this.step.toHTML(e), n.step && (r = '<span class="math-parenthesis math-round-parenthesis">(</span>' + r + '<span class="math-parenthesis math-round-parenthesis">)</span>'), t += '<span class="math-operator math-range-operator">:</span>' + r);
                var a = this.end.toHTML(e);
                return n.end && (a = '<span class="math-parenthesis math-round-parenthesis">(</span>' + a + '<span class="math-parenthesis math-round-parenthesis">)</span>'), t += '<span class="math-operator math-range-operator">:</span>' + a
            }, n.prototype._toTex = function (e) {
                var t, r = o(this, e && e.parenthesis ? e.parenthesis : "keep"), n = this.start.toTex(e);
                r.start && (n = "\\left(".concat(n, "\\right)")), this.step && (t = this.step.toTex(e), r.step && (t = "\\left(".concat(t, "\\right)")), n += ":" + t);
                var i = this.end.toTex(e);
                return r.end && (i = "\\left(".concat(i, "\\right)")), n += ":" + i
            }, n
        }, {isClass: !0, isNode: !0}), Ef = ["Node"], Sf = Object(s.a)("RelationalNode", Ef, function (e) {
            var t = e.Node;

            function i(e, t) {
                if (!(this instanceof i)) throw new SyntaxError("Constructor must be called with the new operator");
                if (!Array.isArray(e)) throw new TypeError("Parameter conditionals must be an array");
                if (!Array.isArray(t)) throw new TypeError("Parameter params must be an array");
                if (e.length !== t.length - 1) throw new TypeError("Parameter params must contain exactly one more element than parameter conditionals");
                this.conditionals = e, this.params = t
            }

            return (i.prototype = new t).type = "RelationalNode", i.prototype.isRelationalNode = !0, i.prototype._compile = function (o, t) {
                var s = this, u = this.params.map(function (e) {
                    return e._compile(o, t)
                });
                return function (e, t, r) {
                    for (var n = u[0](e, t, r), i = 0; i < s.conditionals.length; i++) {
                        var a = n, n = u[i + 1](e, t, r);
                        if (!zi(o, s.conditionals[i])(a, n)) return !1
                    }
                    return !0
                }
            }, i.prototype.forEach = function (r) {
                var n = this;
                this.params.forEach(function (e, t) {
                    return r(e, "params[" + t + "]", n)
                }, this)
            }, i.prototype.map = function (r) {
                var n = this;
                return new i(this.conditionals.slice(), this.params.map(function (e, t) {
                    return n._ifNode(r(e, "params[" + t + "]", n))
                }, this))
            }, i.prototype.clone = function () {
                return new i(this.conditionals, this.params)
            }, i.prototype._toString = function (n) {
                for (var i = n && n.parenthesis ? n.parenthesis : "keep", a = Gc(this, i), e = this.params.map(function (e, t) {
                    var r = Gc(e, i);
                    return "all" === i || null !== r && r <= a ? "(" + e.toString(n) + ")" : e.toString(n)
                }), t = {
                    equal: "==",
                    unequal: "!=",
                    smaller: "<",
                    larger: ">",
                    smallerEq: "<=",
                    largerEq: ">="
                }, r = e[0], o = 0; o < this.conditionals.length; o++) r += " " + t[this.conditionals[o]] + " " + e[o + 1];
                return r
            }, i.prototype.toJSON = function () {
                return {mathjs: "RelationalNode", conditionals: this.conditionals, params: this.params}
            }, i.fromJSON = function (e) {
                return new i(e.conditionals, e.params)
            }, i.prototype.toHTML = function (n) {
                for (var i = n && n.parenthesis ? n.parenthesis : "keep", a = Gc(this, i), e = this.params.map(function (e, t) {
                    var r = Gc(e, i);
                    return "all" === i || null !== r && r <= a ? '<span class="math-parenthesis math-round-parenthesis">(</span>' + e.toHTML(n) + '<span class="math-parenthesis math-round-parenthesis">)</span>' : e.toHTML(n)
                }), t = {
                    equal: "==",
                    unequal: "!=",
                    smaller: "<",
                    larger: ">",
                    smallerEq: "<=",
                    largerEq: ">="
                }, r = e[0], o = 0; o < this.conditionals.length; o++) r += '<span class="math-operator math-binary-operator math-explicit-binary-operator">' + Object(V.c)(t[this.conditionals[o]]) + "</span>" + e[o + 1];
                return r
            }, i.prototype._toTex = function (n) {
                for (var i = n && n.parenthesis ? n.parenthesis : "keep", a = Gc(this, i), e = this.params.map(function (e, t) {
                    var r = Gc(e, i);
                    return "all" === i || null !== r && r <= a ? "\\left(" + e.toTex(n) + "\right)" : e.toTex(n)
                }), t = e[0], r = 0; r < this.conditionals.length; r++) t += nf[this.conditionals[r]] + e[r + 1];
                return t
            }, i
        }, {isClass: !0, isNode: !0}), Af = ["math", "?Unit", "Node"], Cf = Object(s.a)("SymbolNode", Af, function (e) {
            var n = e.math, o = e.Unit, t = e.Node;

            function s(e) {
                return !!o && o.isValuelessUnit(e)
            }

            function r(e) {
                if (!(this instanceof r)) throw new SyntaxError("Constructor must be called with the new operator");
                if ("string" != typeof e) throw new TypeError('String expected for parameter "name"');
                this.name = e
            }

            return (r.prototype = new t).type = "SymbolNode", r.prototype.isSymbolNode = !0, r.prototype._compile = function (n, e) {
                var i = this.name;
                if (!0 === e[i]) return function (e, t, r) {
                    return t[i]
                };
                if (i in n) return function (e, t, r) {
                    return zi(i in e ? e : n, i)
                };
                var a = s(i);
                return function (e, t, r) {
                    return i in e ? zi(e, i) : a ? new o(null, i) : function (e) {
                        throw new Error("Undefined symbol " + e)
                    }(i)
                }
            }, r.prototype.forEach = function (e) {
            }, r.prototype.map = function (e) {
                return this.clone()
            }, r.prototype.clone = function () {
                return new r(this.name)
            }, r.prototype._toString = function (e) {
                return this.name
            }, r.prototype.toHTML = function (e) {
                var t = Object(V.c)(this.name);
                return "true" === t || "false" === t ? '<span class="math-symbol math-boolean">' + t + "</span>" : "i" === t ? '<span class="math-symbol math-imaginary-symbol">' + t + "</span>" : "Infinity" === t ? '<span class="math-symbol math-infinity-symbol">' + t + "</span>" : "NaN" === t ? '<span class="math-symbol math-nan-symbol">' + t + "</span>" : "null" === t ? '<span class="math-symbol math-null-symbol">' + t + "</span>" : "undefined" === t ? '<span class="math-symbol math-undefined-symbol">' + t + "</span>" : '<span class="math-symbol">' + t + "</span>"
            }, r.prototype.toJSON = function () {
                return {mathjs: "SymbolNode", name: this.name}
            }, r.fromJSON = function (e) {
                return new r(e.name)
            }, r.prototype._toTex = function (e) {
                var t = !1;
                void 0 === n[this.name] && s(this.name) && (t = !0);
                var r = uf(this.name, t);
                return "\\" === r[0] ? r : " " + r
            }, r
        }, {isClass: !0, isNode: !0});

        function Tf(e) {
            return (Tf = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function _f() {
            return (_f = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }).apply(this, arguments)
        }

        var qf = ["math", "Node", "SymbolNode"], If = Object(s.a)("FunctionNode", qf, function (e) {
            var i = e.math, t = e.Node, r = e.SymbolNode;

            function d(e, t) {
                if (!(this instanceof d)) throw new SyntaxError("Constructor must be called with the new operator");
                if ("string" == typeof e && (e = new r(e)), !Object(ie.w)(e)) throw new TypeError('Node expected as parameter "fn"');
                if (!Array.isArray(t) || !t.every(ie.w)) throw new TypeError('Array containing Nodes expected for parameter "args"');
                this.fn = e, this.args = t || [], Object.defineProperty(this, "name", {
                    get: function () {
                        return this.fn.name || ""
                    }.bind(this), set: function () {
                        throw new Error("Cannot assign a new name, name is read-only")
                    }
                })
            }

            (d.prototype = new t).type = "FunctionNode", d.prototype.isFunctionNode = !0, d.prototype._compile = function (i, t) {
                if (!(this instanceof d)) throw new TypeError("No valid FunctionNode");
                var a = Object(q.k)(this.args, function (e) {
                    return e._compile(i, t)
                });
                if (Object(ie.J)(this.fn)) {
                    var o = this.fn.name, s = o in i ? zi(i, o) : void 0;
                    if ("function" == typeof s && !0 === s.rawArgs) {
                        var r = this.args;
                        return function (e, t) {
                            return (o in e ? zi(e, o) : s)(r, i, _f({}, e, t))
                        }
                    }
                    if (1 === a.length) {
                        var n = a[0];
                        return function (e, t, r) {
                            return (o in e ? zi(e, o) : s)(n(e, t, r))
                        }
                    }
                    if (2 !== a.length) return function (t, r, n) {
                        return (o in t ? zi(t, o) : s).apply(null, Object(q.k)(a, function (e) {
                            return e(t, r, n)
                        }))
                    };
                    var u = a[0], c = a[1];
                    return function (e, t, r) {
                        return (o in e ? zi(e, o) : s)(u(e, t, r), c(e, t, r))
                    }
                }
                if (Object(ie.a)(this.fn) && Object(ie.u)(this.fn.index) && this.fn.index.isObjectProperty()) {
                    var f = this.fn.object._compile(i, t), l = this.fn.index.getObjectProperty(), p = this.args;
                    return function (t, r, n) {
                        var e = f(t, r, n);
                        return function (e, t) {
                            if (!Pi(e, t)) throw new Error('No access to method "' + t + '"')
                        }(e, l), e[l] && e[l].rawArgs ? e[l](p, i, _f({}, t, r)) : e[l].apply(e, Object(q.k)(a, function (e) {
                            return e(t, r, n)
                        }))
                    }
                }
                var m = this.fn._compile(i, t), h = this.args;
                return function (t, r, n) {
                    var e = m(t, r, n);
                    return e && e.rawArgs ? e(h, i, _f({}, t, r)) : e.apply(e, Object(q.k)(a, function (e) {
                        return e(t, r, n)
                    }))
                }
            }, d.prototype.forEach = function (e) {
                e(this.fn, "fn", this);
                for (var t = 0; t < this.args.length; t++) e(this.args[t], "args[" + t + "]", this)
            }, d.prototype.map = function (e) {
                for (var t = this._ifNode(e(this.fn, "fn", this)), r = [], n = 0; n < this.args.length; n++) r[n] = this._ifNode(e(this.args[n], "args[" + n + "]", this));
                return new d(t, r)
            }, d.prototype.clone = function () {
                return new d(this.fn, this.args.slice(0))
            };
            var n = d.prototype.toString;

            function a(e, t, r) {
                for (var n, i = "", a = new RegExp("\\$(?:\\{([a-z_][a-z_0-9]*)(?:\\[([0-9]+)\\])?\\}|\\$)", "ig"), o = 0; null !== (n = a.exec(e));) if (i += e.substring(o, n.index), o = n.index, "$$" === n[0]) i += "$", o++; else {
                    o += n[0].length;
                    var s = t[n[1]];
                    if (!s) throw new ReferenceError("Template: Property " + n[1] + " does not exist.");
                    if (void 0 === n[2]) switch (Tf(s)) {
                        case"string":
                            i += s;
                            break;
                        case"object":
                            if (Object(ie.w)(s)) i += s.toTex(r); else {
                                if (!Array.isArray(s)) throw new TypeError("Template: " + n[1] + " has to be a Node, String or array of Nodes");
                                i += s.map(function (e, t) {
                                    if (Object(ie.w)(e)) return e.toTex(r);
                                    throw new TypeError("Template: " + n[1] + "[" + t + "] is not a Node.")
                                }).join(",")
                            }
                            break;
                        default:
                            throw new TypeError("Template: " + n[1] + " has to be a Node, String or array of Nodes")
                    } else {
                        if (!Object(ie.w)(s[n[2]] && s[n[2]])) throw new TypeError("Template: " + n[1] + "[" + n[2] + "] is not a Node.");
                        i += s[n[2]].toTex(r)
                    }
                }
                return i += e.slice(o)
            }

            d.prototype.toString = function (e) {
                var t, r = this.fn.toString(e);
                return e && "object" === Tf(e.handler) && Object(ae.f)(e.handler, r) && (t = e.handler[r](this, e)), void 0 !== t ? t : n.call(this, e)
            }, d.prototype._toString = function (t) {
                var e = this.args.map(function (e) {
                    return e.toString(t)
                });
                return (Object(ie.q)(this.fn) ? "(" + this.fn.toString(t) + ")" : this.fn.toString(t)) + "(" + e.join(", ") + ")"
            }, d.prototype.toJSON = function () {
                return {mathjs: "FunctionNode", fn: this.fn, args: this.args}
            }, d.fromJSON = function (e) {
                return new d(e.fn, e.args)
            }, d.prototype.toHTML = function (t) {
                var e = this.args.map(function (e) {
                    return e.toHTML(t)
                });
                return '<span class="math-function">' + Object(V.c)(this.fn) + '</span><span class="math-paranthesis math-round-parenthesis">(</span>' + e.join('<span class="math-separator">,</span>') + '<span class="math-paranthesis math-round-parenthesis">)</span>'
            };
            var o = d.prototype.toTex;
            return d.prototype.toTex = function (e) {
                var t;
                return e && "object" === Tf(e.handler) && Object(ae.f)(e.handler, this.name) && (t = e.handler[this.name](this, e)), void 0 !== t ? t : o.call(this, e)
            }, d.prototype._toTex = function (t) {
                var e, r, n = this.args.map(function (e) {
                    return e.toTex(t)
                });
                switch (af[this.name] && (e = af[this.name]), !i[this.name] || "function" != typeof i[this.name].toTex && "object" !== Tf(i[this.name].toTex) && "string" != typeof i[this.name].toTex || (e = i[this.name].toTex), Tf(e)) {
                    case"function":
                        r = e(this, t);
                        break;
                    case"string":
                        r = a(e, this, t);
                        break;
                    case"object":
                        switch (Tf(e[n.length])) {
                            case"function":
                                r = e[n.length](this, t);
                                break;
                            case"string":
                                r = a(e[n.length], this, t)
                        }
                }
                return void 0 !== r ? r : a("\\mathrm{${name}}\\left(${args}\\right)", this, t)
            }, d.prototype.getIdentifier = function () {
                return this.type + ":" + this.name
            }, d
        }, {isClass: !0, isNode: !0});

        function kf() {
            return (kf = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }).apply(this, arguments)
        }

        var Bf = ["typed", "numeric", "config", "AccessorNode", "ArrayNode", "AssignmentNode", "BlockNode", "ConditionalNode", "ConstantNode", "FunctionAssignmentNode", "FunctionNode", "IndexNode", "ObjectNode", "OperatorNode", "ParenthesisNode", "RangeNode", "RelationalNode", "SymbolNode"],
            zf = Object(s.a)("parse", Bf, function (e) {
                var t = e.typed, s = e.numeric, u = e.config, i = e.AccessorNode, c = e.ArrayNode, o = e.AssignmentNode,
                    a = e.BlockNode, f = e.ConditionalNode, l = e.ConstantNode, p = e.FunctionAssignmentNode,
                    m = e.FunctionNode, h = e.IndexNode, d = e.ObjectNode, y = e.OperatorNode, g = e.ParenthesisNode,
                    n = e.RangeNode, v = e.RelationalNode, b = e.SymbolNode, x = t("parse", {
                        string: function (e) {
                            return B(e, {})
                        }, "Array | Matrix": function (e) {
                            return r(e, {})
                        }, "string, Object": function (e, t) {
                            return B(e, void 0 !== t.nodes ? t.nodes : {})
                        }, "Array | Matrix, Object": r
                    });

                function r(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        r = void 0 !== t.nodes ? t.nodes : {};
                    return oe(e, function (e) {
                        if ("string" != typeof e) throw new TypeError("String expected");
                        return B(e, r)
                    })
                }

                var w = {NULL: 0, DELIMITER: 1, NUMBER: 2, SYMBOL: 3, UNKNOWN: 4}, N = {
                        ",": !0,
                        "(": !0,
                        ")": !0,
                        "[": !0,
                        "]": !0,
                        "{": !0,
                        "}": !0,
                        '"': !0,
                        "'": !0,
                        ";": !0,
                        "+": !0,
                        "-": !0,
                        "*": !0,
                        ".*": !0,
                        "/": !0,
                        "./": !0,
                        "%": !0,
                        "^": !0,
                        ".^": !0,
                        "~": !0,
                        "!": !0,
                        "&": !0,
                        "|": !0,
                        "^|": !0,
                        "=": !0,
                        ":": !0,
                        "?": !0,
                        "==": !0,
                        "!=": !0,
                        "<": !0,
                        ">": !0,
                        "<=": !0,
                        ">=": !0,
                        "<<": !0,
                        ">>": !0,
                        ">>>": !0
                    }, O = {mod: !0, to: !0, in: !0, and: !0, xor: !0, or: !0, not: !0},
                    M = {true: !0, false: !1, null: null, undefined: void 0}, j = ["NaN", "Infinity"];

                function E(e, t) {
                    return e.expression.substr(e.index, t)
                }

                function S(e) {
                    return E(e, 1)
                }

                function A(e) {
                    e.index++
                }

                function C(e) {
                    return e.expression.charAt(e.index - 1)
                }

                function T(e) {
                    return e.expression.charAt(e.index + 1)
                }

                function _(e) {
                    for (e.tokenType = w.NULL, e.token = "", e.comment = ""; x.isWhitespace(S(e), e.nestingLevel);) A(e);
                    if ("#" === S(e)) for (; "\n" !== S(e) && "" !== S(e);) e.comment += S(e), A(e);
                    if ("" !== S(e)) {
                        if ("\n" === S(e) && !e.nestingLevel) return e.tokenType = w.DELIMITER, e.token = S(e), void A(e);
                        var t = S(e), r = E(e, 2), n = E(e, 3);
                        if (3 === n.length && N[n]) return e.tokenType = w.DELIMITER, e.token = n, A(e), A(e), void A(e);
                        if (2 === r.length && N[r]) return e.tokenType = w.DELIMITER, e.token = r, A(e), void A(e);
                        if (N[t]) return e.tokenType = w.DELIMITER, e.token = t, void A(e);
                        if (x.isDigitDot(t)) {
                            if (e.tokenType = w.NUMBER, "." === S(e)) e.token += S(e), A(e), x.isDigit(S(e)) || (e.tokenType = w.DELIMITER); else {
                                for (; x.isDigit(S(e));) e.token += S(e), A(e);
                                x.isDecimalMark(S(e), T(e)) && (e.token += S(e), A(e))
                            }
                            for (; x.isDigit(S(e));) e.token += S(e), A(e);
                            if ("E" === S(e) || "e" === S(e)) if (x.isDigit(T(e)) || "-" === T(e) || "+" === T(e)) {
                                if (e.token += S(e), A(e), "+" !== S(e) && "-" !== S(e) || (e.token += S(e), A(e)), !x.isDigit(S(e))) throw re(e, 'Digit expected, got "' + S(e) + '"');
                                for (; x.isDigit(S(e));) e.token += S(e), A(e);
                                if (x.isDecimalMark(S(e), T(e))) throw re(e, 'Digit expected, got "' + S(e) + '"')
                            } else if ("." === T(e)) throw A(e), re(e, 'Digit expected, got "' + S(e) + '"')
                        } else {
                            if (!x.isAlpha(S(e), C(e), T(e))) {
                                for (e.tokenType = w.UNKNOWN; "" !== S(e);) e.token += S(e), A(e);
                                throw re(e, 'Syntax error in part "' + e.token + '"')
                            }
                            for (; x.isAlpha(S(e), C(e), T(e)) || x.isDigit(S(e));) e.token += S(e), A(e);
                            Object(ae.f)(O, e.token) ? e.tokenType = w.DELIMITER : e.tokenType = w.SYMBOL
                        }
                    } else e.tokenType = w.DELIMITER
                }

                function q(e) {
                    for (; _(e), "\n" === e.token;) ;
                }

                function I(e) {
                    e.nestingLevel++
                }

                function k(e) {
                    e.nestingLevel--
                }

                function B(e, t) {
                    var r = {
                        extraNodes: {},
                        expression: "",
                        comment: "",
                        index: 0,
                        token: "",
                        tokenType: w.NULL,
                        nestingLevel: 0,
                        conditionalLevel: null
                    };
                    kf(r, {expression: e, extraNodes: t}), _(r);
                    var n = function (e) {
                        var t, r, n = [];
                        "" !== e.token && "\n" !== e.token && ";" !== e.token && ((t = z(e)).comment = e.comment);
                        for (; "\n" === e.token || ";" === e.token;) 0 === n.length && t && (r = ";" !== e.token, n.push({
                            node: t,
                            visible: r
                        })), _(e), "\n" !== e.token && ";" !== e.token && "" !== e.token && ((t = z(e)).comment = e.comment, r = ";" !== e.token, n.push({
                            node: t,
                            visible: r
                        }));
                        return 0 < n.length ? new a(n) : (t || ((t = new l(void 0)).comment = e.comment), t)
                    }(r);
                    if ("" !== r.token) throw r.tokenType === w.DELIMITER ? ne(r, "Unexpected operator " + r.token) : re(r, 'Unexpected part "' + r.token + '"');
                    return n
                }

                function z(e) {
                    var t, r, n, i, a = function (e) {
                        var t = function (e) {
                            var t = D(e);
                            for (; "or" === e.token;) q(e), t = new y("or", "or", [t, D(e)]);
                            return t
                        }(e);
                        for (; "?" === e.token;) {
                            var r = e.conditionalLevel;
                            e.conditionalLevel = e.nestingLevel, q(e);
                            var n = t, i = z(e);
                            if (":" !== e.token) throw re(e, "False part of conditional expression expected");
                            e.conditionalLevel = null, q(e);
                            var a = z(e);
                            t = new f(n, i, a), e.conditionalLevel = r
                        }
                        return t
                    }(e);
                    if ("=" !== e.token) return a;
                    if (Object(ie.J)(a)) return t = a.name, q(e), n = z(e), new o(new b(t), n);
                    if (Object(ie.a)(a)) return q(e), n = z(e), new o(a.object, a.index, n);
                    if (Object(ie.r)(a) && Object(ie.J)(a.fn) && (i = !0, r = [], t = a.name, a.args.forEach(function (e, t) {
                        Object(ie.J)(e) ? r[t] = e.name : i = !1
                    }), i)) return q(e), n = z(e), new p(t, r, n);
                    throw re(e, "Invalid left hand side of assignment operator =")
                }

                function D(e) {
                    for (var t = R(e); "xor" === e.token;) q(e), t = new y("xor", "xor", [t, R(e)]);
                    return t
                }

                function R(e) {
                    for (var t = P(e); "and" === e.token;) q(e), t = new y("and", "and", [t, P(e)]);
                    return t
                }

                function P(e) {
                    for (var t = U(e); "|" === e.token;) q(e), t = new y("|", "bitOr", [t, U(e)]);
                    return t
                }

                function U(e) {
                    for (var t = F(e); "^|" === e.token;) q(e), t = new y("^|", "bitXor", [t, F(e)]);
                    return t
                }

                function F(e) {
                    for (var t = L(e); "&" === e.token;) q(e), t = new y("&", "bitAnd", [t, L(e)]);
                    return t
                }

                function L(e) {
                    for (var t = [H(e)], r = [], n = {
                        "==": "equal",
                        "!=": "unequal",
                        "<": "smaller",
                        ">": "larger",
                        "<=": "smallerEq",
                        ">=": "largerEq"
                    }; Object(ae.f)(n, e.token);) {
                        var i = {name: e.token, fn: n[e.token]};
                        r.push(i), q(e), t.push(H(e))
                    }
                    return 1 === t.length ? t[0] : 2 === t.length ? new y(r[0].name, r[0].fn, t) : new v(r.map(function (e) {
                        return e.fn
                    }), t)
                }

                function H(e) {
                    for (var t, r, n, i = $(e), a = {
                        "<<": "leftShift",
                        ">>": "rightArithShift",
                        ">>>": "rightLogShift"
                    }; Object(ae.f)(a, e.token);) r = a[t = e.token], q(e), n = [i, $(e)], i = new y(t, r, n);
                    return i
                }

                function $(e) {
                    for (var t, r, n, i = G(e), a = {
                        to: "to",
                        in: "to"
                    }; Object(ae.f)(a, e.token);) r = a[t = e.token], q(e), i = "in" === t && "" === e.token ? new y("*", "multiply", [i, new b("in")], !0) : (n = [i, G(e)], new y(t, r, n));
                    return i
                }

                function G(e) {
                    var t = [], r = ":" === e.token ? new l(1) : Z(e);
                    if (":" === e.token && e.conditionalLevel !== e.nestingLevel) {
                        for (t.push(r); ":" === e.token && t.length < 3;) q(e), ")" === e.token || "]" === e.token || "," === e.token || "" === e.token ? t.push(new b("end")) : t.push(Z(e));
                        r = 3 === t.length ? new n(t[0], t[2], t[1]) : new n(t[0], t[1])
                    }
                    return r
                }

                function Z(e) {
                    for (var t, r, n, i = V(e), a = {
                        "+": "add",
                        "-": "subtract"
                    }; Object(ae.f)(a, e.token);) r = a[t = e.token], q(e), n = [i, V(e)], i = new y(t, r, n);
                    return i
                }

                function V(e) {
                    for (var t, r, n = J(e), i = n, a = {
                        "*": "multiply",
                        ".*": "dotMultiply",
                        "/": "divide",
                        "./": "dotDivide",
                        "%": "mod",
                        mod: "mod"
                    }; Object(ae.f)(a, e.token);) r = a[t = e.token], q(e), i = J(e), n = new y(t, r, [n, i]);
                    return n
                }

                function J(e) {
                    for (var t = W(e), r = t; e.tokenType === w.SYMBOL || "in" === e.token && Object(ie.l)(t) || !(e.tokenType !== w.NUMBER || Object(ie.l)(r) || Object(ie.B)(r) && "!" !== r.op) || "(" === e.token;) r = W(e), t = new y("*", "multiply", [t, r], !0);
                    return t
                }

                function W(e) {
                    for (var t = Y(e), r = t, n = []; "/" === e.token && Object(ie.l)(r);) {
                        if (n.push(kf({}, e)), q(e), e.tokenType !== w.NUMBER) {
                            kf(e, n.pop());
                            break
                        }
                        if (n.push(kf({}, e)), q(e), e.tokenType !== w.SYMBOL && "(" !== e.token) {
                            n.pop(), kf(e, n.pop());
                            break
                        }
                        kf(e, n.pop()), n.pop(), r = Y(e), t = new y("/", "divide", [t, r])
                    }
                    return t
                }

                function Y(e) {
                    var t, r, n, i = {"-": "unaryMinus", "+": "unaryPlus", "~": "bitNot", not: "not"};
                    return Object(ae.f)(i, e.token) ? (n = i[e.token], t = e.token, q(e), r = [Y(e)], new y(t, n, r)) : function (e) {
                        var t, r, n, i;
                        t = function (e) {
                            var t, r, n;
                            t = function (e) {
                                var t = [];
                                if (e.tokenType === w.SYMBOL && Object(ae.f)(e.extraNodes, e.token)) {
                                    var r = e.extraNodes[e.token];
                                    if (_(e), "(" === e.token) {
                                        if (t = [], I(e), _(e), ")" !== e.token) for (t.push(z(e)); "," === e.token;) _(e), t.push(z(e));
                                        if (")" !== e.token) throw re(e, "Parenthesis ) expected");
                                        k(e), _(e)
                                    }
                                    return new r(t)
                                }
                                return function (e) {
                                    var t, r;
                                    if (e.tokenType === w.SYMBOL || e.tokenType === w.DELIMITER && e.token in O) return r = e.token, _(e), t = Object(ae.f)(M, r) ? new l(M[r]) : -1 !== j.indexOf(r) ? new l(s(r, "number")) : new b(r), t = X(e, t);
                                    return function (e) {
                                        var t, r;
                                        return '"' !== e.token ? function (e) {
                                            var t, r;
                                            return "'" !== e.token ? function (e) {
                                                var t, r, n, i;
                                                if ("[" !== e.token) return function (e) {
                                                    if ("{" !== e.token) return function (e) {
                                                        var t;
                                                        return e.tokenType !== w.NUMBER ? function (e) {
                                                            var t;
                                                            if ("(" !== e.token) return function (e) {
                                                                throw"" === e.token ? re(e, "Unexpected end of expression") : re(e, "Value expected")
                                                            }(e);
                                                            if (I(e), _(e), t = z(e), ")" === e.token) return k(e), _(e), t = new g(t), t = X(e, t);
                                                            throw re(e, "Parenthesis ) expected")
                                                        }(e) : (t = e.token, _(e), new l(s(t, u.number)))
                                                    }(e);
                                                    var t;
                                                    I(e);
                                                    var r = {};
                                                    do {
                                                        if (_(e), "}" !== e.token) {
                                                            if ('"' === e.token) t = Q(e); else if ("'" === e.token) t = K(e); else {
                                                                if (!(e.tokenType === w.SYMBOL || e.tokenType === w.DELIMITER && e.token in O)) throw re(e, "Symbol or string expected as object key");
                                                                t = e.token, _(e)
                                                            }
                                                            if (":" !== e.token) throw re(e, "Colon : expected after object key");
                                                            _(e), r[t] = z(e)
                                                        }
                                                    } while ("," === e.token);
                                                    if ("}" !== e.token) throw re(e, "Comma , or bracket } expected after object value");
                                                    k(e), _(e);
                                                    var n = new d(r);
                                                    return n = X(e, n)
                                                }(e);
                                                if (I(e), _(e), "]" !== e.token) {
                                                    var a = ee(e);
                                                    if (";" === e.token) {
                                                        for (n = 1, r = [a]; ";" === e.token;) _(e), r[n] = ee(e), n++;
                                                        if ("]" !== e.token) throw re(e, "End of matrix ] expected");
                                                        k(e), _(e), i = r[0].items.length;
                                                        for (var o = 1; o < n; o++) if (r[o].items.length !== i) throw ne(e, "Column dimensions mismatch (" + r[o].items.length + " !== " + i + ")");
                                                        t = new c(r)
                                                    } else {
                                                        if ("]" !== e.token) throw re(e, "End of matrix ] expected");
                                                        k(e), _(e), t = a
                                                    }
                                                } else k(e), _(e), t = new c([]);
                                                return X(e, t)
                                            }(e) : (r = K(e), t = new l(r), t = X(e, t))
                                        }(e) : (r = Q(e), t = new l(r), t = X(e, t))
                                    }(e)
                                }(e)
                            }(e);
                            var i = {"!": "factorial", "'": "ctranspose"};
                            for (; Object(ae.f)(i, e.token);) r = e.token, n = i[r], _(e), t = new y(r, n, [t]), t = X(e, t);
                            return t
                        }(e), "^" !== e.token && ".^" !== e.token || (r = e.token, n = "^" === r ? "pow" : "dotPow", q(e), i = [t, Y(e)], t = new y(r, n, i));
                        return t
                    }(e)
                }

                function X(e, t, r) {
                    for (var n; !("(" !== e.token && "[" !== e.token && "." !== e.token || r && -1 === r.indexOf(e.token));) if (n = [], "(" === e.token) {
                        if (!Object(ie.J)(t) && !Object(ie.a)(t)) return t;
                        if (I(e), _(e), ")" !== e.token) for (n.push(z(e)); "," === e.token;) _(e), n.push(z(e));
                        if (")" !== e.token) throw re(e, "Parenthesis ) expected");
                        k(e), _(e), t = new m(t, n)
                    } else if ("[" === e.token) {
                        if (I(e), _(e), "]" !== e.token) for (n.push(z(e)); "," === e.token;) _(e), n.push(z(e));
                        if ("]" !== e.token) throw re(e, "Parenthesis ] expected");
                        k(e), _(e), t = new i(t, new h(n))
                    } else {
                        if (_(e), e.tokenType !== w.SYMBOL) throw re(e, "Property name expected after dot");
                        n.push(new l(e.token)), _(e);
                        t = new i(t, new h(n, !0))
                    }
                    return t
                }

                function Q(e) {
                    for (var t = ""; "" !== S(e) && '"' !== S(e);) "\\" === S(e) && (t += S(e), A(e)), t += S(e), A(e);
                    if (_(e), '"' !== e.token) throw re(e, 'End of string " expected');
                    return _(e), JSON.parse('"' + t + '"')
                }

                function K(e) {
                    for (var t = ""; "" !== S(e) && "'" !== S(e);) "\\" === S(e) && (t += S(e), A(e)), t += S(e), A(e);
                    if (_(e), "'" !== e.token) throw re(e, "End of string ' expected");
                    return _(e), JSON.parse('"' + t + '"')
                }

                function ee(e) {
                    for (var t = [z(e)], r = 1; "," === e.token;) _(e), t[r] = z(e), r++;
                    return new c(t)
                }

                function te(e) {
                    return e.index - e.token.length + 1
                }

                function re(e, t) {
                    var r = te(e), n = new SyntaxError(t + " (char " + r + ")");
                    return n.char = r, n
                }

                function ne(e, t) {
                    var r = te(e), n = new SyntaxError(t + " (char " + r + ")");
                    return n.char = r, n
                }

                return x.isAlpha = function (e, t, r) {
                    return x.isValidLatinOrGreek(e) || x.isValidMathSymbol(e, r) || x.isValidMathSymbol(t, e)
                }, x.isValidLatinOrGreek = function (e) {
                    return /^[a-zA-Z_$\u00C0-\u02AF\u0370-\u03FF\u2100-\u214F]$/.test(e)
                }, x.isValidMathSymbol = function (e, t) {
                    return /^[\uD835]$/.test(e) && /^[\uDC00-\uDFFF]$/.test(t) && /^[^\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]$/.test(t)
                }, x.isWhitespace = function (e, t) {
                    return " " === e || "\t" === e || "\n" === e && 0 < t
                }, x.isDecimalMark = function (e, t) {
                    return "." === e && "/" !== t && "*" !== t && "^" !== t
                }, x.isDigitDot = function (e) {
                    return "0" <= e && e <= "9" || "." === e
                }, x.isDigit = function (e) {
                    return "0" <= e && e <= "9"
                }, x
            }), Df = "compile", Rf = ["typed", "parse"], Pf = Object(s.a)(Df, Rf, function (e) {
                var t = e.typed, r = e.parse;
                return t(Df, {
                    string: function (e) {
                        return r(e).compile()
                    }, "Array | Matrix": function (e) {
                        return oe(e, function (e) {
                            return r(e).compile()
                        })
                    }
                })
            }), Uf = "evaluate", Ff = ["typed", "parse"], Lf = Object(s.a)(Uf, Ff, function (e) {
                var t = e.typed, r = e.parse;
                return t(Uf, {
                    string: function (e) {
                        return r(e).compile().evaluate({})
                    }, "string, Object": function (e, t) {
                        return r(e).compile().evaluate(t)
                    }, "Array | Matrix": function (e) {
                        var t = {};
                        return oe(e, function (e) {
                            return r(e).compile().evaluate(t)
                        })
                    }, "Array | Matrix, Object": function (e, t) {
                        return oe(e, function (e) {
                            return r(e).compile().evaluate(t)
                        })
                    }
                })
            }), Hf = ["parse"], $f = Object(s.a)("Parser", Hf, function (e) {
                var t = e.parse;

                function r() {
                    if (!(this instanceof r)) throw new SyntaxError("Constructor must be called with the new operator");
                    this.scope = {}
                }

                return r.prototype.type = "Parser", r.prototype.isParser = !0, r.prototype.evaluate = function (e) {
                    return t(e).compile().evaluate(this.scope)
                }, r.prototype.get = function (e) {
                    return e in this.scope ? zi(this.scope, e) : void 0
                }, r.prototype.getAll = function () {
                    return Object(ae.e)({}, this.scope)
                }, r.prototype.set = function (e, t) {
                    return Di(this.scope, e, t)
                }, r.prototype.remove = function (e) {
                    delete this.scope[e]
                }, r.prototype.clear = function () {
                    for (var e in this.scope) Object(ae.f)(this.scope, e) && delete this.scope[e]
                }, r
            }, {isClass: !0}), Gf = ["typed", "Parser"], Zf = Object(s.a)("parser", Gf, function (e) {
                var t = e.typed, r = e.Parser;
                return t("parser", {
                    "": function () {
                        return new r
                    }
                })
            }),
            Vf = ["typed", "matrix", "abs", "addScalar", "divideScalar", "multiplyScalar", "subtract", "larger", "equalScalar", "unaryMinus", "DenseMatrix", "SparseMatrix", "Spa"],
            Jf = Object(s.a)("lup", Vf, function (e) {
                var t = e.typed, r = e.matrix, S = e.abs, M = e.addScalar, A = e.divideScalar, C = e.multiplyScalar,
                    j = e.subtract, T = e.larger, _ = e.equalScalar, q = e.unaryMinus, E = e.DenseMatrix,
                    I = e.SparseMatrix, k = e.Spa;
                return t("lup", {
                    DenseMatrix: n, SparseMatrix: function (e) {
                        var f, l, p, m = e._size[0], t = e._size[1], r = Math.min(m, t), h = e._values, d = e._index,
                            y = e._ptr, g = [], v = [], b = [], x = [m, r], w = [], N = [], O = [], M = [r, t], j = [],
                            E = [];
                        for (f = 0; f < m; f++) j[f] = f, E[f] = f;

                        function n() {
                            var i = new k;
                            l < m && (b.push(g.length), g.push(1), v.push(l)), O.push(w.length);
                            var e = y[l], t = y[l + 1];
                            for (p = e; p < t; p++) f = d[p], i.set(j[f], h[p]);
                            0 < l && i.forEach(0, l - 1, function (r, n) {
                                I._forEachRow(r, g, v, b, function (e, t) {
                                    r < e && i.accumulate(e, q(C(t, n)))
                                })
                            });
                            var r, n, a, o, s = l, u = i.get(l), c = S(u);
                            i.forEach(l + 1, m - 1, function (e, t) {
                                var r = S(t);
                                T(r, c) && (s = e, c = r, u = t)
                            }), l !== s && (I._swapRows(l, s, x[1], g, v, b), I._swapRows(l, s, M[1], w, N, O), i.swap(l, s), n = s, a = E[r = l], o = E[n], j[a] = n, j[o] = r, E[r] = o, E[n] = a), i.forEach(0, m - 1, function (e, t) {
                                e <= l ? (w.push(t), N.push(e)) : (t = A(t, u), _(t, 0) || (g.push(t), v.push(e)))
                            })
                        }

                        for (l = 0; l < t; l++) n();
                        return O.push(w.length), b.push(g.length), {
                            L: new I({values: g, index: v, ptr: b, size: x}),
                            U: new I({values: w, index: N, ptr: O, size: M}),
                            p: j,
                            toString: function () {
                                return "L: " + this.L.toString() + "\nU: " + this.U.toString() + "\nP: " + this.p
                            }
                        }
                    }, Array: function (e) {
                        var t = n(r(e));
                        return {L: t.L.valueOf(), U: t.U.valueOf(), p: t.p}
                    }
                });

                function n(e) {
                    var t, r = e._size[0], n = e._size[1], i = Math.min(r, n), a = Object(ae.a)(e._data), o = [],
                        s = [r, i], u = [], c = [i, n], f = [];
                    for (g = 0; g < r; g++) f[g] = g;
                    for (t = 0; t < n; t++) {
                        if (0 < t) for (g = 0; g < r; g++) {
                            for (var l = Math.min(g, t), p = 0, m = 0; m < l; m++) p = M(p, C(a[g][m], a[m][t]));
                            a[g][t] = j(a[g][t], p)
                        }
                        for (var h = t, d = 0, y = 0, g = t; g < r; g++) {
                            var v = a[g][t], b = S(v);
                            T(b, d) && (h = g, d = b, y = v)
                        }
                        if (t !== h && (f[t] = [f[h], f[h] = f[t]][0], E._swapRows(t, h, a)), t < r) for (g = t + 1; g < r; g++) {
                            var x = a[g][t];
                            _(x, 0) || (a[g][t] = A(a[g][t], y))
                        }
                    }
                    for (t = 0; t < n; t++) for (g = 0; g < r; g++) 0 === t && (g < n && (u[g] = []), o[g] = []), g < t ? (g < n && (u[g][t] = a[g][t]), t < r && (o[g][t] = 0)) : g !== t ? (g < n && (u[g][t] = 0), t < r && (o[g][t] = a[g][t])) : (g < n && (u[g][t] = a[g][t]), t < r && (o[g][t] = 1));
                    var w = new E({data: o, size: s}), N = new E({data: u, size: c}), O = [];
                    for (g = 0, i = f.length; g < i; g++) O[f[g]] = g;
                    return {
                        L: w, U: N, p: O, toString: function () {
                            return "L: " + this.L.toString() + "\nU: " + this.U.toString() + "\nP: " + this.p
                        }
                    }
                }
            });

        function Wf() {
            return (Wf = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }).apply(this, arguments)
        }

        var Yf = ["typed", "matrix", "zeros", "identity", "isZero", "equal", "sign", "sqrt", "conj", "unaryMinus", "addScalar", "divideScalar", "multiplyScalar", "subtract", "complex"],
            Xf = Object(s.a)("qr", Yf, function (e) {
                var t = e.typed, r = e.matrix, b = e.zeros, x = e.identity, w = e.isZero, N = e.equal, O = e.sign,
                    M = e.sqrt, j = e.conj, E = e.unaryMinus, S = e.addScalar, A = e.divideScalar, C = e.multiplyScalar,
                    T = e.subtract, o = e.complex;
                return Wf(t("qr", {
                    DenseMatrix: n, SparseMatrix: function () {
                        throw new Error("qr not implemented for sparse matrices yet")
                    }, Array: function (e) {
                        var t = n(r(e));
                        return {Q: t.Q.valueOf(), R: t.R.valueOf()}
                    }
                }), {_denseQRimpl: s});

                function s(e) {
                    for (var t = e._size[0], r = e._size[1], n = x([t], "dense"), i = n._data, a = e.clone(), o = a._data, s = b([t], ""), u = 0; u < Math.min(r, t); ++u) {
                        var c = o[u][u], f = E(N(c, 0) ? 1 : O(c)), l = j(f), p = 0;
                        for (d = u; d < t; d++) p = S(p, C(o[d][u], j(o[d][u])));
                        var m = C(f, M(p));
                        if (!w(m)) {
                            for (var h = T(c, m), d = u + (s[u] = 1); d < t; d++) s[d] = A(o[d][u], h);
                            for (var y = E(j(A(h, m))), g = void 0, v = u; v < r; v++) {
                                for (g = 0, d = u; d < t; d++) g = S(g, C(j(s[d]), o[d][v]));
                                for (g = C(g, y), d = u; d < t; d++) o[d][v] = C(T(o[d][v], C(s[d], g)), l)
                            }
                            for (d = 0; d < t; d++) {
                                for (g = 0, v = u; v < t; v++) g = S(g, C(i[d][v], s[v]));
                                for (g = C(g, y), v = u; v < t; ++v) i[d][v] = A(T(i[d][v], C(g, j(s[v]))), l)
                            }
                        }
                    }
                    return {
                        Q: n, R: a, toString: function () {
                            return "Q: " + this.Q.toString() + "\nR: " + this.R.toString()
                        }
                    }
                }

                function n(e) {
                    var t = s(e), r = t.R._data;
                    if (0 < e._data.length) for (var n = "Complex" === r[0][0].type ? o(0) : 0, i = 0; i < r.length; ++i) for (var a = 0; a < i && a < (r[0] || []).length; ++a) r[i][a] = n;
                    return t
                }
            });

        function Qf(e, t, r, n, i, a, o) {
            var s = 0;
            for (r[o] = e; 0 <= s;) {
                var u = r[o + s], c = r[n + u];
                -1 === c ? (s--, a[t++] = u) : (r[n + u] = r[i + c], r[o + ++s] = c)
            }
            return t
        }

        var Kf = ["add", "multiply", "transpose"], el = Object(s.a)("csAmd", Kf, function (e) {
            var K = e.add, ee = e.multiply, te = e.transpose;
            return function (e, t) {
                if (!t || e <= 0 || 3 < e) return null;
                var r = t._size, n = r[0], i = r[1], a = 0, o = Math.max(16, 10 * Math.sqrt(i)),
                    s = function (e, t, r, n, i) {
                        var a = te(t);
                        if (1 === e && n === r) return K(t, a);
                        if (2 !== e) return ee(a, t);
                        for (var o = a._index, s = a._ptr, u = 0, c = 0; c < r; c++) {
                            var f = s[c];
                            if (s[c] = u, !(s[c + 1] - f > i)) for (var l = s[c + 1]; f < l; f++) o[u++] = o[f]
                        }
                        return s[r] = u, t = te(a), ee(a, t)
                    }(e, t, n, i, o = Math.min(i - 2, o));
                !function (e, t, r) {
                    for (var n = e._values, i = e._index, a = e._ptr, o = e._size[1], s = 0, u = 0; u < o; u++) {
                        var c = a[u];
                        for (a[u] = s; c < a[u + 1]; c++) t(i[c], u, n ? n[c] : 1, r) && (i[s] = i[c], n && (n[s] = n[c]), s++)
                    }
                    a[o] = s, i.splice(s, i.length - s), n && n.splice(s, n.length - s)
                }(s, ne, null);
                for (var u, c, f, l, p, m, h, d, y, g, v, b, x = s._index, w = s._ptr, N = w[i], O = [], M = [], j = i + 1, E = 2 * (i + 1), S = 3 * (i + 1), A = 4 * (i + 1), C = 5 * (i + 1), T = 6 * (i + 1), _ = 7 * (i + 1), q = O, I = function (e, t, r, n, i, a, o, s, u, c, f, l) {
                    for (var p = 0; p < e; p++) r[n + p] = t[p + 1] - t[p];
                    for (var m = r[n + e] = 0; m <= e; m++) r[i + m] = -1, a[m] = -1, r[o + m] = -1, r[s + m] = -1, r[u + m] = 1, r[c + m] = 1, r[f + m] = 0, r[l + m] = r[n + m];
                    var h = re(0, 0, r, c, e);
                    return r[f + e] = -2, t[e] = -1, r[c + e] = 0, h
                }(i, w, M, 0, S, q, E, _, j, T, A, C), k = function (e, t, r, n, i, a, o, s, u, c, f) {
                    for (var l = 0, p = 0; p < e; p++) {
                        var m, h = r[n + p];
                        0 === h ? (r[i + p] = -2, l++, t[p] = -1, r[a + p] = 0) : o < h ? (r[s + p] = 0, r[i + p] = -1, l++, t[p] = -e - 2, r[s + e]++) : (-1 !== (m = r[u + h]) && (c[m] = p), r[f + p] = r[u + h], r[u + h] = p)
                    }
                    return l
                }(i, w, M, C, A, T, o, j, S, q, E), B = 0; k < i;) {
                    for (c = -1; B < i && -1 === (c = M[S + B]); B++) ;
                    -1 !== M[E + c] && (q[M[E + c]] = -1), M[S + B] = M[E + c];
                    var z = M[A + c], D = M[j + c];
                    k += D;
                    var R = 0;
                    M[j + c] = -D;
                    for (var P, U, F = w[c], L = 0 === z ? F : N, H = L, $ = 1; $ <= z + 1; $++) {
                        for (p = z < $ ? (l = F, M[0 + (U = c)] - z) : (l = w[U = x[F++]], M[0 + U]), f = 1; f <= p; f++) (m = M[j + (u = x[l++])]) <= 0 || (R += m, M[j + u] = -m, -1 !== M[E + (x[H++] = u)] && (q[M[E + u]] = q[u]), -1 !== q[u] ? M[E + q[u]] = M[E + u] : M[S + M[C + u]] = M[E + u]);
                        U !== c && (w[U] = -c - 2, M[T + U] = 0)
                    }
                    for (0 !== z && (N = H), M[C + c] = R, w[c] = L, M[0 + c] = H - L, M[A + c] = -2, I = re(I, a, M, T, i), h = L; h < H; h++) if (!((d = M[A + (u = x[h])]) <= 0)) for (var G = I - (m = -M[j + u]), F = w[u], Z = w[u] + d - 1; F <= Z; F++) M[T + (U = x[F])] >= I ? M[T + U] -= m : 0 !== M[T + U] && (M[T + U] = M[C + U] + G);
                    for (h = L; h < H; h++) {
                        for (y = (Z = w[u = x[h]]) + M[A + u] - 1, b = v = 0, F = g = Z; F <= y; F++) {
                            0 !== M[T + (U = x[F])] && (0 < (P = M[T + U] - I) ? (b += P, v += x[g++] = U) : (w[U] = -c - 2, M[T + U] = 0))
                        }
                        M[A + u] = g - Z + 1;
                        var V = g, J = Z + M[0 + u];
                        for (F = 1 + y; F < J; F++) {
                            var W = M[j + (X = x[F])];
                            W <= 0 || (b += W, v += x[g++] = X)
                        }
                        0 === b ? (w[u] = -c - 2, R -= m = -M[j + u], D += m, k += m, M[j + u] = 0, M[A + u] = -1) : (M[C + u] = Math.min(M[C + u], b), x[g] = x[V], x[V] = x[Z], x[Z] = c, M[0 + u] = g - Z + 1, v = (v < 0 ? -v : v) % i, M[E + u] = M[_ + v], q[M[_ + v] = u] = v)
                    }
                    for (M[C + c] = R, I = re(I + (a = Math.max(a, R)), a, M, T, i), h = L; h < H; h++) if (!(0 <= M[j + (u = x[h])])) for (u = M[_ + (v = q[u])], M[_ + v] = -1; -1 !== u && -1 !== M[E + u]; u = M[E + u], I++) {
                        for (p = M[0 + u], d = M[A + u], F = w[u] + 1; F <= w[u] + p - 1; F++) M[T + x[F]] = I;
                        for (var Y = u, X = M[E + u]; -1 !== X;) {
                            var Q = M[0 + X] === p && M[A + X] === d;
                            for (F = w[X] + 1; Q && F <= w[X] + p - 1; F++) M[T + x[F]] !== I && (Q = 0);
                            Q ? (w[X] = -u - 2, M[j + u] += M[j + X], M[j + X] = 0, M[A + X] = -1, X = M[E + X], M[E + Y] = X) : X = M[E + (Y = X)]
                        }
                    }
                    for (h = F = L; h < H; h++) (m = -M[j + (u = x[h])]) <= 0 || (M[j + u] = m, b = M[C + u] + R - m, -1 !== M[S + (b = Math.min(b, i - k - m))] && (q[M[S + b]] = u), M[E + u] = M[S + b], q[u] = -1, M[S + b] = u, B = Math.min(B, b), M[C + u] = b, x[F++] = u);
                    M[j + c] = D, 0 == (M[0 + c] = F - L) && (w[c] = -1, M[T + c] = 0), 0 !== z && (N = F)
                }
                for (u = 0; u < i; u++) w[u] = -w[u] - 2;
                for (X = 0; X <= i; X++) M[S + X] = -1;
                for (X = i; 0 <= X; X--) 0 < M[j + X] || (M[E + X] = M[S + w[X]], M[S + w[X]] = X);
                for (U = i; 0 <= U; U--) M[j + U] <= 0 || -1 !== w[U] && (M[E + U] = M[S + w[U]], M[S + w[U]] = U);
                for (u = c = 0; u <= i; u++) -1 === w[u] && (c = Qf(u, c, M, S, E, O, T));
                return O.splice(O.length - 1, 1), O
            };

            function re(e, t, r, n, i) {
                if (e < 2 || e + t < 0) {
                    for (var a = 0; a < i; a++) 0 !== r[n + a] && (r[n + a] = 1);
                    e = 2
                }
                return e
            }

            function ne(e, t) {
                return e !== t
            }
        });
        var tl = ["transpose"], rl = Object(s.a)("csCounts", tl, function (e) {
            var E = e.transpose;
            return function (e, t, r, n) {
                if (!e || !t || !r) return null;
                for (var i, a, o, s, u, c, f = e._size, l = f[0], p = f[1], m = 4 * p + (n ? p + l + 1 : 0), h = [], d = p, y = 2 * p, g = 3 * p, v = 4 * p, b = 5 * p + 1, x = 0; x < m; x++) h[x] = -1;
                var w = [], N = E(e), O = N._index, M = N._ptr;
                for (x = 0; x < p; x++) for (w[a = r[x]] = -1 === h[g + a] ? 1 : 0; -1 !== a && -1 === h[g + a]; a = t[a]) h[g + a] = x;
                if (n) {
                    for (x = 0; x < p; x++) h[r[x]] = x;
                    for (i = 0; i < l; i++) {
                        for (x = p, u = M[i], c = M[i + 1], s = u; s < c; s++) x = Math.min(x, h[O[s]]);
                        h[b + i] = h[v + x], h[v + x] = i
                    }
                }
                for (i = 0; i < p; i++) h[0 + i] = i;
                for (x = 0; x < p; x++) {
                    for (-1 !== t[a = r[x]] && w[t[a]]--, o = n ? h[v + x] : a; -1 !== o; o = n ? h[b + o] : -1) for (s = M[o]; s < M[o + 1]; s++) {
                        var j = function (e, t, r, n, i, a, o) {
                            var s, u, c, f = 0;
                            if (e <= t || r[n + t] <= r[i + e]) return -1;
                            r[i + e] = r[n + t];
                            var l = r[a + e];
                            if (r[a + e] = t, -1 === l) f = 1, c = e; else {
                                for (f = 2, c = l; c !== r[o + c]; c = r[o + c]) ;
                                for (s = l; s !== c; s = u) u = r[o + s], r[o + s] = c
                            }
                            return {jleaf: f, q: c}
                        }(i = O[s], a, h, g, d, y, 0);
                        1 <= j.jleaf && w[a]++, 2 === j.jleaf && w[j.q]--
                    }
                    -1 !== t[a] && (h[0 + a] = t[a])
                }
                for (a = 0; a < p; a++) -1 !== t[a] && (w[t[a]] += w[a]);
                return w
            }
        }), nl = ["add", "multiply", "transpose"], il = Object(s.a)("csSqr", nl, function (e) {
            var t = e.add, r = e.multiply, n = e.transpose, c = el({add: t, multiply: r, transpose: n}),
                f = rl({transpose: n});
            return function (e, t, r) {
                var n, i = t._ptr, a = t._size[1], o = {};
                if (o.q = c(e, t), e && !o.q) return null;
                if (r) {
                    var s = e ? function (e, t, r, n) {
                        for (var i = e._values, a = e._index, o = e._ptr, s = e._size, u = e._datatype, c = s[0], f = s[1], l = n && e._values ? [] : null, p = [], m = [], h = 0, d = 0; d < f; d++) {
                            m[d] = h;
                            for (var y = r ? r[d] : d, g = o[y], v = o[y + 1], b = g; b < v; b++) {
                                var x = t ? t[a[b]] : a[b];
                                p[h] = x, l && (l[h] = i[b]), h++
                            }
                        }
                        return m[f] = h, e.createSparseMatrix({values: l, index: p, ptr: m, size: [c, f], datatype: u})
                    }(t, null, o.q, 0) : t;
                    o.parent = function (e, t) {
                        if (!e) return null;
                        var r, n = e._index, i = e._ptr, a = e._size, o = a[0], s = a[1], u = [], c = [], f = s;
                        if (t) for (y = 0; y < o; y++) c[f + y] = -1;
                        for (var l = 0; l < s; l++) {
                            u[l] = -1, c[0 + l] = -1;
                            for (var p = i[l], m = i[l + 1], h = p; h < m; h++) {
                                for (var d = n[h], y = t ? c[f + d] : d; -1 !== y && y < l; y = r) r = c[0 + y], c[0 + y] = l, -1 === r && (u[y] = l);
                                t && (c[f + d] = l)
                            }
                        }
                        return u
                    }(s, 1);
                    var u = function (e, t) {
                        if (!e) return null;
                        for (var r = 0, n = [], i = [], a = t, o = 2 * t, s = 0; s < t; s++) i[0 + s] = -1;
                        for (s = t - 1; 0 <= s; s--) -1 !== e[s] && (i[a + s] = i[0 + e[s]], i[0 + e[s]] = s);
                        for (s = 0; s < t; s++) -1 === e[s] && (r = Qf(s, r, i, 0, a, n, o));
                        return n
                    }(o.parent, a);
                    if (o.cp = f(s, o.parent, u, 1), s && o.parent && o.cp && function (e, t) {
                        var r = e._ptr, n = e._index, i = e._size, a = i[0], o = i[1];
                        t.pinv = [], t.leftmost = [];
                        var s, u, c, f, l, p = t.parent, m = t.pinv, h = t.leftmost, d = [], y = a, g = a + o,
                            v = a + 2 * o;
                        for (u = 0; u < o; u++) d[y + u] = -1, d[g + u] = -1, d[v + u] = 0;
                        for (s = 0; s < a; s++) h[s] = -1;
                        for (u = o - 1; 0 <= u; u--) for (f = r[u], l = r[u + 1], c = f; c < l; c++) h[n[c]] = u;
                        for (s = a - 1; 0 <= s; s--) (m[s] = -1) !== (u = h[s]) && (0 == d[v + u]++ && (d[g + u] = s), d[0 + s] = d[y + u], d[y + u] = s);
                        for (t.lnz = 0, t.m2 = a, u = 0; u < o; u++) {
                            var b;
                            s = d[y + u], t.lnz++, s < 0 && (s = t.m2++), m[s] = u, --v[u] <= 0 || (t.lnz += d[v + u], -1 !== (b = p[u]) && (0 === d[v + b] && (d[g + b] = d[g + u]), d[0 + d[g + u]] = d[y + b], d[y + b] = d[0 + s], d[v + b] += d[v + u]))
                        }
                        for (s = 0; s < a; s++) m[s] < 0 && (m[s] = u++);
                        return !0
                    }(s, o)) for (n = o.unz = 0; n < a; n++) o.unz += o.cp[n]
                } else o.unz = 4 * i[a] + a, o.lnz = o.unz;
                return o
            }
        });

        function al(e, t) {
            return e[t] < 0
        }

        function ol(e, t) {
            e[t] = -e[t] - 2
        }

        function sl(e) {
            return e < 0 ? -e - 2 : e
        }

        function ul(e, t, r, n, i) {
            for (var a = e._ptr, o = e._size, s = t._index, u = t._ptr, c = o[1], f = c, l = u[r], p = u[r + 1], m = l; m < p; m++) {
                var h = s[m];
                al(a, h) || (f = function (e, t, r, n, i) {
                    var a, o = t._index, s = t._ptr, u = t._size[1], c = 0;
                    for (n[0] = e; 0 <= c;) {
                        e = n[c];
                        var f = i ? i[e] : e;
                        al(s, e) || (ol(s, e), n[u + c] = f < 0 ? 0 : sl(s[f]));
                        for (var l = 1, p = n[u + c], m = f < 0 ? 0 : sl(s[f + 1]); p < m; p++) if (!al(s, a = o[p])) {
                            n[u + c] = p, n[++c] = a, l = 0;
                            break
                        }
                        l && (c--, n[--r] = e)
                    }
                    return r
                }(h, e, f, n, i))
            }
            for (m = f; m < c; m++) ol(a, n[m]);
            return f
        }

        var cl = ["divideScalar", "multiply", "subtract"], fl = Object(s.a)("csSpsolve", cl, function (e) {
                var O = e.divideScalar, M = e.multiply, j = e.subtract;
                return function (e, t, r, n, i, a, o) {
                    for (var s, u, c, f = e._values, l = e._index, p = e._ptr, m = e._size[1], h = t._values, d = t._index, y = t._ptr, g = ul(e, t, r, n, a), v = g; v < m; v++) i[n[v]] = 0;
                    for (s = y[r], u = y[r + 1], v = s; v < u; v++) i[d[v]] = h[v];
                    for (var b = g; b < m; b++) {
                        var x = n[b], w = a ? a[x] : x;
                        if (!(w < 0)) for (s = p[w], u = p[w + 1], i[x] = O(i[x], f[o ? s : u - 1]), v = o ? s + 1 : s, c = o ? u : u - 1; v < c; v++) {
                            var N = l[v];
                            i[N] = j(i[N], M(f[v], i[x]))
                        }
                    }
                    return g
                }
            }), ll = ["abs", "divideScalar", "multiply", "subtract", "larger", "largerEq", "SparseMatrix"],
            pl = Object(s.a)("csLu", ll, function (e) {
                var S = e.abs, A = e.divideScalar, C = e.multiply, t = e.subtract, T = e.larger, _ = e.largerEq,
                    q = e.SparseMatrix, I = fl({divideScalar: A, multiply: C, subtract: t});
                return function (e, t, r) {
                    if (!e) return null;
                    var n, i = e._size[1], a = 100, o = 100;
                    t && (n = t.q, a = t.lnz || a, o = t.unz || o);
                    var s = [], u = [], c = [], f = new q({values: s, index: u, ptr: c, size: [i, i]}), l = [], p = [],
                        m = [], h = new q({values: l, index: p, ptr: m, size: [i, i]}), d = [], y = [], g = [];
                    for (x = 0; x < i; x++) y[x] = 0, d[x] = -1, c[x + 1] = 0;
                    for (var v = o = a = 0; v < i; v++) {
                        c[v] = a, m[v] = o;
                        for (var b, x, w = n ? n[v] : v, N = I(f, e, w, g, y, d, 1), O = -1, M = -1, j = N; j < i; j++) {
                            d[x = g[j]] < 0 ? (b = S(y[x]), T(b, M) && (M = b, O = x)) : (p[o] = d[x], l[o++] = y[x])
                        }
                        if (-1 === O || M <= 0) return null;
                        d[w] < 0 && _(S(y[w]), C(M, r)) && (O = w);
                        var E = y[O];
                        for (p[o] = v, l[o++] = E, d[O] = v, u[a] = O, s[a++] = 1, j = N; j < i; j++) d[x = g[j]] < 0 && (u[a] = x, s[a++] = A(y[x], E)), y[x] = 0
                    }
                    for (c[i] = a, m[i] = o, j = 0; j < a; j++) u[j] = d[u[j]];
                    return s.splice(a, s.length - a), u.splice(a, u.length - a), l.splice(o, l.length - o), p.splice(o, p.length - o), {
                        L: f,
                        U: h,
                        pinv: d
                    }
                }
            }),
            ml = ["typed", "abs", "add", "multiply", "transpose", "divideScalar", "subtract", "larger", "largerEq", "SparseMatrix"],
            hl = Object(s.a)("slu", ml, function (e) {
                var t = e.typed, r = e.abs, n = e.add, i = e.multiply, a = e.transpose, o = e.divideScalar,
                    s = e.subtract, u = e.larger, c = e.largerEq, f = e.SparseMatrix,
                    l = il({add: n, multiply: i, transpose: a}), p = pl({
                        abs: r,
                        divideScalar: o,
                        multiply: i,
                        subtract: s,
                        larger: u,
                        largerEq: c,
                        SparseMatrix: f
                    });
                return t("slu", {
                    "SparseMatrix, number, number": function (e, t, r) {
                        if (!Object(E.i)(t) || t < 0 || 3 < t) throw new Error("Symbolic Ordering and Analysis order must be an integer number in the interval [0, 3]");
                        if (r < 0 || 1 < r) throw new Error("Partial pivoting threshold must be a number from 0 to 1");
                        var n = l(t, e, !1), i = p(e, n, r);
                        return {
                            L: i.L, U: i.U, p: i.pinv, q: n.q, toString: function () {
                                return "L: " + this.L.toString() + "\nU: " + this.U.toString() + "\np: " + this.p.toString() + (this.q ? "\nq: " + this.q.toString() : "") + "\n"
                            }
                        }
                    }
                })
            });

        function dl(e, t) {
            var r, n = t.length, i = [];
            if (e) for (r = 0; r < n; r++) i[e[r]] = t[r]; else for (r = 0; r < n; r++) i[r] = t[r];
            return i
        }

        var yl = "lusolve", gl = ["typed", "matrix", "lup", "slu", "usolve", "lsolve", "DenseMatrix"],
            vl = Object(s.a)(yl, gl, function (e) {
                var t = e.typed, n = e.matrix, i = e.lup, a = e.slu, s = e.usolve, u = e.lsolve,
                    c = Ya({DenseMatrix: e.DenseMatrix});
                return t(yl, {
                    "Array, Array | Matrix": function (e, t) {
                        e = n(e);
                        var r = i(e);
                        return o(r.L, r.U, r.p, null, t).valueOf()
                    }, "DenseMatrix, Array | Matrix": function (e, t) {
                        var r = i(e);
                        return o(r.L, r.U, r.p, null, t)
                    }, "SparseMatrix, Array | Matrix": function (e, t) {
                        var r = i(e);
                        return o(r.L, r.U, r.p, null, t)
                    }, "SparseMatrix, Array | Matrix, number, number": function (e, t, r, n) {
                        var i = a(e, r, n);
                        return o(i.L, i.U, i.p, i.q, t)
                    }, "Object, Array | Matrix": function (e, t) {
                        return o(e.L, e.U, e.p, e.q, t)
                    }
                });

                function f(e) {
                    if (Object(ie.v)(e)) return e;
                    if (Object(ie.b)(e)) return n(e);
                    throw new TypeError("Invalid Matrix LU decomposition")
                }

                function o(e, t, r, n, i) {
                    e = f(e), t = f(t), i = c(e, i, !1), r && (i._data = dl(r, i._data));
                    var a = u(e, i), o = s(t, a);
                    return n && (o._data = dl(n, o._data)), o
                }
            }), bl = ["parse"], xl = Object(s.a)("Help", bl, function (e) {
                var o = e.parse;

                function n(e) {
                    if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
                    if (!e) throw new Error('Argument "doc" missing');
                    this.doc = e
                }

                return n.prototype.type = "Help", n.prototype.isHelp = !0, n.prototype.toString = function () {
                    var e = this.doc || {}, t = "\n";
                    if (e.name && (t += "Name: " + e.name + "\n\n"), e.category && (t += "Category: " + e.category + "\n\n"), e.description && (t += "Description:\n    " + e.description + "\n\n"), e.syntax && (t += "Syntax:\n    " + e.syntax.join("\n    ") + "\n\n"), e.examples) {
                        t += "Examples:\n";
                        for (var r = {}, n = 0; n < e.examples.length; n++) {
                            var i = e.examples[n];
                            t += "    " + i + "\n";
                            var a = void 0;
                            try {
                                a = o(i).compile().evaluate(r)
                            } catch (e) {
                                a = e
                            }
                            void 0 === a || Object(ie.s)(a) || (t += "        " + Object(V.d)(a, {precision: 14}) + "\n")
                        }
                        t += "\n"
                    }
                    return e.seealso && e.seealso.length && (t += "See also: " + e.seealso.join(", ") + "\n"), t
                }, n.prototype.toJSON = function () {
                    var e = Object(ae.a)(this.doc);
                    return e.mathjs = "Help", e
                }, n.fromJSON = function (t) {
                    var r = {};
                    return Object.keys(t).filter(function (e) {
                        return "mathjs" !== e
                    }).forEach(function (e) {
                        r[e] = t[e]
                    }), new n(r)
                }, n.prototype.valueOf = n.prototype.toString, n
            }, {isClass: !0}), wl = ["?on", "math"], Nl = Object(s.a)("Chain", wl, function (e) {
                var t = e.on, r = e.math;

                function a(e) {
                    if (!(this instanceof a)) throw new SyntaxError("Constructor must be called with the new operator");
                    Object(ie.h)(e) ? this.value = e.value : this.value = e
                }

                function o(e, t) {
                    Object(ae.h)(a.prototype, e, function () {
                        var e = t();
                        if ("function" == typeof e) return s(e)
                    })
                }

                function s(r) {
                    return function () {
                        for (var e = [this.value], t = 0; t < arguments.length; t++) e[t + 1] = arguments[t];
                        return new a(r.apply(r, e))
                    }
                }

                a.prototype.type = "Chain", a.prototype.isChain = !0, a.prototype.done = function () {
                    return this.value
                }, a.prototype.valueOf = function () {
                    return this.value
                }, a.prototype.toString = function () {
                    return Object(V.d)(this.value)
                }, a.prototype.toJSON = function () {
                    return {mathjs: "Chain", value: this.value}
                }, a.fromJSON = function (e) {
                    return new a(e.value)
                }, a.createProxy = function (t, e) {
                    if ("string" == typeof t) n = t, "function" == typeof (i = e) && (a.prototype[n] = s(i)); else {
                        for (var r in t) !function (e) {
                            Object(ae.f)(t, e) && void 0 === u[e] && o(e, function () {
                                return t[e]
                            })
                        }(r)
                    }
                    var n, i
                };
                var u = {expression: !0, docs: !0, type: !0, classes: !0, json: !0, error: !0, isChain: !0};
                return a.createProxy(r), t && t("import", function (e, t, r) {
                    r || o(e, t)
                }), a
            }, {isClass: !0}), Ol = {
                name: "pi",
                category: "Constants",
                syntax: ["pi"],
                description: "The number pi is a mathematical constant that is the ratio of a circle's circumference to its diameter, and is approximately equal to 3.14159",
                examples: ["pi", "sin(pi/2)"],
                seealso: ["tau"]
            }, Ml = {
                name: "e",
                category: "Constants",
                syntax: ["e"],
                description: "Euler's number, the base of the natural logarithm. Approximately equal to 2.71828",
                examples: ["e", "e ^ 2", "exp(2)", "log(e)"],
                seealso: ["exp"]
            }, jl = {
                bignumber: {
                    name: "bignumber",
                    category: "Construction",
                    syntax: ["bignumber(x)"],
                    description: "Create a big number from a number or string.",
                    examples: ["0.1 + 0.2", "bignumber(0.1) + bignumber(0.2)", 'bignumber("7.2")', 'bignumber("7.2e500")', "bignumber([0.1, 0.2, 0.3])"],
                    seealso: ["boolean", "complex", "fraction", "index", "matrix", "string", "unit"]
                },
                boolean: {
                    name: "boolean",
                    category: "Construction",
                    syntax: ["x", "boolean(x)"],
                    description: "Convert a string or number into a boolean.",
                    examples: ["boolean(0)", "boolean(1)", "boolean(3)", 'boolean("true")', 'boolean("false")', "boolean([1, 0, 1, 1])"],
                    seealso: ["bignumber", "complex", "index", "matrix", "number", "string", "unit"]
                },
                complex: {
                    name: "complex",
                    category: "Construction",
                    syntax: ["complex()", "complex(re, im)", "complex(string)"],
                    description: "Create a complex number.",
                    examples: ["complex()", "complex(2, 3)", 'complex("7 - 2i")'],
                    seealso: ["bignumber", "boolean", "index", "matrix", "number", "string", "unit"]
                },
                createUnit: {
                    name: "createUnit",
                    category: "Construction",
                    syntax: ["createUnit(definitions)", "createUnit(name, definition)"],
                    description: "Create a user-defined unit and register it with the Unit type.",
                    examples: ['createUnit("foo")', 'createUnit("knot", {definition: "0.514444444 m/s", aliases: ["knots", "kt", "kts"]})', 'createUnit("mph", "1 mile/hour")'],
                    seealso: ["unit", "splitUnit"]
                },
                fraction: {
                    name: "fraction",
                    category: "Construction",
                    syntax: ["fraction(num)", "fraction(num,den)"],
                    description: "Create a fraction from a number or from a numerator and denominator.",
                    examples: ["fraction(0.125)", "fraction(1, 3) + fraction(2, 5)"],
                    seealso: ["bignumber", "boolean", "complex", "index", "matrix", "string", "unit"]
                },
                index: {
                    name: "index",
                    category: "Construction",
                    syntax: ["[start]", "[start:end]", "[start:step:end]", "[start1, start 2, ...]", "[start1:end1, start2:end2, ...]", "[start1:step1:end1, start2:step2:end2, ...]"],
                    description: "Create an index to get or replace a subset of a matrix",
                    examples: ["[]", "[1, 2, 3]", "A = [1, 2, 3; 4, 5, 6]", "A[1, :]", "A[1, 2] = 50", "A[0:2, 0:2] = ones(2, 2)"],
                    seealso: ["bignumber", "boolean", "complex", "matrix,", "number", "range", "string", "unit"]
                },
                matrix: {
                    name: "matrix",
                    category: "Construction",
                    syntax: ["[]", "[a1, b1, ...; a2, b2, ...]", "matrix()", 'matrix("dense")', "matrix([...])"],
                    description: "Create a matrix.",
                    examples: ["[]", "[1, 2, 3]", "[1, 2, 3; 4, 5, 6]", "matrix()", "matrix([3, 4])", 'matrix([3, 4; 5, 6], "sparse")', 'matrix([3, 4; 5, 6], "sparse", "number")'],
                    seealso: ["bignumber", "boolean", "complex", "index", "number", "string", "unit", "sparse"]
                },
                number: {
                    name: "number",
                    category: "Construction",
                    syntax: ["x", "number(x)", "number(unit, valuelessUnit)"],
                    description: "Create a number or convert a string or boolean into a number.",
                    examples: ["2", "2e3", "4.05", "number(2)", 'number("7.2")', "number(true)", "number([true, false, true, true])", 'number(unit("52cm"), "m")'],
                    seealso: ["bignumber", "boolean", "complex", "fraction", "index", "matrix", "string", "unit"]
                },
                sparse: {
                    name: "sparse",
                    category: "Construction",
                    syntax: ["sparse()", "sparse([a1, b1, ...; a1, b2, ...])", 'sparse([a1, b1, ...; a1, b2, ...], "number")'],
                    description: "Create a sparse matrix.",
                    examples: ["sparse()", "sparse([3, 4; 5, 6])", 'sparse([3, 0; 5, 0], "number")'],
                    seealso: ["bignumber", "boolean", "complex", "index", "number", "string", "unit", "matrix"]
                },
                splitUnit: {
                    name: "splitUnit",
                    category: "Construction",
                    syntax: ["splitUnit(unit: Unit, parts: Unit[])"],
                    description: "Split a unit in an array of units whose sum is equal to the original unit.",
                    examples: ['splitUnit(1 m, ["feet", "inch"])'],
                    seealso: ["unit", "createUnit"]
                },
                string: {
                    name: "string",
                    category: "Construction",
                    syntax: ['"text"', "string(x)"],
                    description: "Create a string or convert a value to a string",
                    examples: ['"Hello World!"', "string(4.2)", "string(3 + 2i)"],
                    seealso: ["bignumber", "boolean", "complex", "index", "matrix", "number", "unit"]
                },
                unit: {
                    name: "unit",
                    category: "Construction",
                    syntax: ["value unit", "unit(value, unit)", "unit(string)"],
                    description: "Create a unit.",
                    examples: ["5.5 mm", "3 inch", 'unit(7.1, "kilogram")', 'unit("23 deg")'],
                    seealso: ["bignumber", "boolean", "complex", "index", "matrix", "number", "string"]
                },
                e: Ml,
                E: Ml,
                false: {
                    name: "false",
                    category: "Constants",
                    syntax: ["false"],
                    description: "Boolean value false",
                    examples: ["false"],
                    seealso: ["true"]
                },
                i: {
                    name: "i",
                    category: "Constants",
                    syntax: ["i"],
                    description: "Imaginary unit, defined as i*i=-1. A complex number is described as a + b*i, where a is the real part, and b is the imaginary part.",
                    examples: ["i", "i * i", "sqrt(-1)"],
                    seealso: []
                },
                Infinity: {
                    name: "Infinity",
                    category: "Constants",
                    syntax: ["Infinity"],
                    description: "Infinity, a number which is larger than the maximum number that can be handled by a floating point number.",
                    examples: ["Infinity", "1 / 0"],
                    seealso: []
                },
                LN2: {
                    name: "LN2",
                    category: "Constants",
                    syntax: ["LN2"],
                    description: "Returns the natural logarithm of 2, approximately equal to 0.693",
                    examples: ["LN2", "log(2)"],
                    seealso: []
                },
                LN10: {
                    name: "LN10",
                    category: "Constants",
                    syntax: ["LN10"],
                    description: "Returns the natural logarithm of 10, approximately equal to 2.302",
                    examples: ["LN10", "log(10)"],
                    seealso: []
                },
                LOG2E: {
                    name: "LOG2E",
                    category: "Constants",
                    syntax: ["LOG2E"],
                    description: "Returns the base-2 logarithm of E, approximately equal to 1.442",
                    examples: ["LOG2E", "log(e, 2)"],
                    seealso: []
                },
                LOG10E: {
                    name: "LOG10E",
                    category: "Constants",
                    syntax: ["LOG10E"],
                    description: "Returns the base-10 logarithm of E, approximately equal to 0.434",
                    examples: ["LOG10E", "log(e, 10)"],
                    seealso: []
                },
                NaN: {
                    name: "NaN",
                    category: "Constants",
                    syntax: ["NaN"],
                    description: "Not a number",
                    examples: ["NaN", "0 / 0"],
                    seealso: []
                },
                null: {
                    name: "null",
                    category: "Constants",
                    syntax: ["null"],
                    description: "Value null",
                    examples: ["null"],
                    seealso: ["true", "false"]
                },
                pi: Ol,
                PI: Ol,
                phi: {
                    name: "phi",
                    category: "Constants",
                    syntax: ["phi"],
                    description: "Phi is the golden ratio. Two quantities are in the golden ratio if their ratio is the same as the ratio of their sum to the larger of the two quantities. Phi is defined as `(1 + sqrt(5)) / 2` and is approximately 1.618034...",
                    examples: ["phi"],
                    seealso: []
                },
                SQRT1_2: {
                    name: "SQRT1_2",
                    category: "Constants",
                    syntax: ["SQRT1_2"],
                    description: "Returns the square root of 1/2, approximately equal to 0.707",
                    examples: ["SQRT1_2", "sqrt(1/2)"],
                    seealso: []
                },
                SQRT2: {
                    name: "SQRT2",
                    category: "Constants",
                    syntax: ["SQRT2"],
                    description: "Returns the square root of 2, approximately equal to 1.414",
                    examples: ["SQRT2", "sqrt(2)"],
                    seealso: []
                },
                tau: {
                    name: "tau",
                    category: "Constants",
                    syntax: ["tau"],
                    description: "Tau is the ratio constant of a circle's circumference to radius, equal to 2 * pi, approximately 6.2832.",
                    examples: ["tau", "2 * pi"],
                    seealso: ["pi"]
                },
                true: {
                    name: "true",
                    category: "Constants",
                    syntax: ["true"],
                    description: "Boolean value true",
                    examples: ["true"],
                    seealso: ["false"]
                },
                version: {
                    name: "version",
                    category: "Constants",
                    syntax: ["version"],
                    description: "A string with the version number of math.js",
                    examples: ["version"],
                    seealso: []
                },
                speedOfLight: {description: "Speed of light in vacuum", examples: ["speedOfLight"]},
                gravitationConstant: {description: "Newtonian constant of gravitation", examples: ["gravitationConstant"]},
                planckConstant: {description: "Planck constant", examples: ["planckConstant"]},
                reducedPlanckConstant: {description: "Reduced Planck constant", examples: ["reducedPlanckConstant"]},
                magneticConstant: {description: "Magnetic constant (vacuum permeability)", examples: ["magneticConstant"]},
                electricConstant: {description: "Electric constant (vacuum permeability)", examples: ["electricConstant"]},
                vacuumImpedance: {description: "Characteristic impedance of vacuum", examples: ["vacuumImpedance"]},
                coulomb: {description: "Coulomb's constant", examples: ["coulomb"]},
                elementaryCharge: {description: "Elementary charge", examples: ["elementaryCharge"]},
                bohrMagneton: {description: "Borh magneton", examples: ["bohrMagneton"]},
                conductanceQuantum: {description: "Conductance quantum", examples: ["conductanceQuantum"]},
                inverseConductanceQuantum: {
                    description: "Inverse conductance quantum",
                    examples: ["inverseConductanceQuantum"]
                },
                magneticFluxQuantum: {description: "Magnetic flux quantum", examples: ["magneticFluxQuantum"]},
                nuclearMagneton: {description: "Nuclear magneton", examples: ["nuclearMagneton"]},
                klitzing: {description: "Von Klitzing constant", examples: ["klitzing"]},
                bohrRadius: {description: "Borh radius", examples: ["bohrRadius"]},
                classicalElectronRadius: {description: "Classical electron radius", examples: ["classicalElectronRadius"]},
                electronMass: {description: "Electron mass", examples: ["electronMass"]},
                fermiCoupling: {description: "Fermi coupling constant", examples: ["fermiCoupling"]},
                fineStructure: {description: "Fine-structure constant", examples: ["fineStructure"]},
                hartreeEnergy: {description: "Hartree energy", examples: ["hartreeEnergy"]},
                protonMass: {description: "Proton mass", examples: ["protonMass"]},
                deuteronMass: {description: "Deuteron Mass", examples: ["deuteronMass"]},
                neutronMass: {description: "Neutron mass", examples: ["neutronMass"]},
                quantumOfCirculation: {description: "Quantum of circulation", examples: ["quantumOfCirculation"]},
                rydberg: {description: "Rydberg constant", examples: ["rydberg"]},
                thomsonCrossSection: {description: "Thomson cross section", examples: ["thomsonCrossSection"]},
                weakMixingAngle: {description: "Weak mixing angle", examples: ["weakMixingAngle"]},
                efimovFactor: {description: "Efimov factor", examples: ["efimovFactor"]},
                atomicMass: {description: "Atomic mass constant", examples: ["atomicMass"]},
                avogadro: {description: "Avogadro's number", examples: ["avogadro"]},
                boltzmann: {description: "Boltzmann constant", examples: ["boltzmann"]},
                faraday: {description: "Faraday constant", examples: ["faraday"]},
                firstRadiation: {description: "First radiation constant", examples: ["firstRadiation"]},
                loschmidt: {description: "Loschmidt constant at T=273.15 K and p=101.325 kPa", examples: ["loschmidt"]},
                gasConstant: {description: "Gas constant", examples: ["gasConstant"]},
                molarPlanckConstant: {description: "Molar Planck constant", examples: ["molarPlanckConstant"]},
                molarVolume: {
                    description: "Molar volume of an ideal gas at T=273.15 K and p=101.325 kPa",
                    examples: ["molarVolume"]
                },
                sackurTetrode: {
                    description: "Sackur-Tetrode constant at T=1 K and p=101.325 kPa",
                    examples: ["sackurTetrode"]
                },
                secondRadiation: {description: "Second radiation constant", examples: ["secondRadiation"]},
                stefanBoltzmann: {description: "Stefan-Boltzmann constant", examples: ["stefanBoltzmann"]},
                wienDisplacement: {description: "Wien displacement law constant", examples: ["wienDisplacement"]},
                molarMass: {description: "Molar mass constant", examples: ["molarMass"]},
                molarMassC12: {description: "Molar mass constant of carbon-12", examples: ["molarMassC12"]},
                gravity: {
                    description: "Standard acceleration of gravity (standard acceleration of free-fall on Earth)",
                    examples: ["gravity"]
                },
                planckLength: {description: "Planck length", examples: ["planckLength"]},
                planckMass: {description: "Planck mass", examples: ["planckMass"]},
                planckTime: {description: "Planck time", examples: ["planckTime"]},
                planckCharge: {description: "Planck charge", examples: ["planckCharge"]},
                planckTemperature: {description: "Planck temperature", examples: ["planckTemperature"]},
                derivative: {
                    name: "derivative",
                    category: "Algebra",
                    syntax: ["derivative(expr, variable)", "derivative(expr, variable, {simplify: boolean})"],
                    description: "Takes the derivative of an expression expressed in parser Nodes. The derivative will be taken over the supplied variable in the second parameter. If there are multiple variables in the expression, it will return a partial derivative.",
                    examples: ['derivative("2x^3", "x")', 'derivative("2x^3", "x", {simplify: false})', 'derivative("2x^2 + 3x + 4", "x")', 'derivative("sin(2x)", "x")', 'f = parse("x^2 + x")', 'x = parse("x")', "df = derivative(f, x)", "df.evaluate({x: 3})"],
                    seealso: ["simplify", "parse", "evaluate"]
                },
                lsolve: {
                    name: "lsolve",
                    category: "Algebra",
                    syntax: ["x=lsolve(L, b)"],
                    description: "Solves the linear system L * x = b where L is an [n x n] lower triangular matrix and b is a [n] column vector.",
                    examples: ["a = [-2, 3; 2, 1]", "b = [11, 9]", "x = lsolve(a, b)"],
                    seealso: ["lup", "lusolve", "usolve", "matrix", "sparse"]
                },
                lup: {
                    name: "lup",
                    category: "Algebra",
                    syntax: ["lup(m)"],
                    description: "Calculate the Matrix LU decomposition with partial pivoting. Matrix A is decomposed in three matrices (L, U, P) where P * A = L * U",
                    examples: ["lup([[2, 1], [1, 4]])", "lup(matrix([[2, 1], [1, 4]]))", "lup(sparse([[2, 1], [1, 4]]))"],
                    seealso: ["lusolve", "lsolve", "usolve", "matrix", "sparse", "slu", "qr"]
                },
                lusolve: {
                    name: "lusolve",
                    category: "Algebra",
                    syntax: ["x=lusolve(A, b)", "x=lusolve(lu, b)"],
                    description: "Solves the linear system A * x = b where A is an [n x n] matrix and b is a [n] column vector.",
                    examples: ["a = [-2, 3; 2, 1]", "b = [11, 9]", "x = lusolve(a, b)"],
                    seealso: ["lup", "slu", "lsolve", "usolve", "matrix", "sparse"]
                },
                simplify: {
                    name: "simplify",
                    category: "Algebra",
                    syntax: ["simplify(expr)", "simplify(expr, rules)"],
                    description: "Simplify an expression tree.",
                    examples: ['simplify("3 + 2 / 4")', 'simplify("2x + x")', 'f = parse("x * (x + 2 + x)")', "simplified = simplify(f)", "simplified.evaluate({x: 2})"],
                    seealso: ["derivative", "parse", "evaluate"]
                },
                rationalize: {
                    name: "rationalize",
                    category: "Algebra",
                    syntax: ["rationalize(expr)", "rationalize(expr, scope)", "rationalize(expr, scope, detailed)"],
                    description: "Transform a rationalizable expression in a rational fraction. If rational fraction is one variable polynomial then converts the numerator and denominator in canonical form, with decreasing exponents, returning the coefficients of numerator.",
                    examples: ['rationalize("2x/y - y/(x+1)")', 'rationalize("2x/y - y/(x+1)", true)'],
                    seealso: ["simplify"]
                },
                slu: {
                    name: "slu",
                    category: "Algebra",
                    syntax: ["slu(A, order, threshold)"],
                    description: "Calculate the Matrix LU decomposition with full pivoting. Matrix A is decomposed in two matrices (L, U) and two permutation vectors (pinv, q) where P * A * Q = L * U",
                    examples: ["slu(sparse([4.5, 0, 3.2, 0; 3.1, 2.9, 0, 0.9; 0, 1.7, 3, 0; 3.5, 0.4, 0, 1]), 1, 0.001)"],
                    seealso: ["lusolve", "lsolve", "usolve", "matrix", "sparse", "lup", "qr"]
                },
                usolve: {
                    name: "usolve",
                    category: "Algebra",
                    syntax: ["x=usolve(U, b)"],
                    description: "Solves the linear system U * x = b where U is an [n x n] upper triangular matrix and b is a [n] column vector.",
                    examples: ["x=usolve(sparse([1, 1, 1, 1; 0, 1, 1, 1; 0, 0, 1, 1; 0, 0, 0, 1]), [1; 2; 3; 4])"],
                    seealso: ["lup", "lusolve", "lsolve", "matrix", "sparse"]
                },
                qr: {
                    name: "qr",
                    category: "Algebra",
                    syntax: ["qr(A)"],
                    description: "Calculates the Matrix QR decomposition. Matrix `A` is decomposed in two matrices (`Q`, `R`) where `Q` is an orthogonal matrix and `R` is an upper triangular matrix.",
                    examples: ["qr([[1, -1,  4], [1,  4, -2], [1,  4,  2], [1,  -1, 0]])"],
                    seealso: ["lup", "slu", "matrix"]
                },
                abs: {
                    name: "abs",
                    category: "Arithmetic",
                    syntax: ["abs(x)"],
                    description: "Compute the absolute value.",
                    examples: ["abs(3.5)", "abs(-4.2)"],
                    seealso: ["sign"]
                },
                add: {
                    name: "add",
                    category: "Operators",
                    syntax: ["x + y", "add(x, y)"],
                    description: "Add two values.",
                    examples: ["a = 2.1 + 3.6", "a - 3.6", "3 + 2i", "3 cm + 2 inch", '"2.3" + "4"'],
                    seealso: ["subtract"]
                },
                cbrt: {
                    name: "cbrt",
                    category: "Arithmetic",
                    syntax: ["cbrt(x)", "cbrt(x, allRoots)"],
                    description: "Compute the cubic root value. If x = y * y * y, then y is the cubic root of x. When `x` is a number or complex number, an optional second argument `allRoots` can be provided to return all three cubic roots. If not provided, the principal root is returned",
                    examples: ["cbrt(64)", "cube(4)", "cbrt(-8)", "cbrt(2 + 3i)", "cbrt(8i)", "cbrt(8i, true)", "cbrt(27 m^3)"],
                    seealso: ["square", "sqrt", "cube", "multiply"]
                },
                ceil: {
                    name: "ceil",
                    category: "Arithmetic",
                    syntax: ["ceil(x)"],
                    description: "Round a value towards plus infinity. If x is complex, both real and imaginary part are rounded towards plus infinity.",
                    examples: ["ceil(3.2)", "ceil(3.8)", "ceil(-4.2)"],
                    seealso: ["floor", "fix", "round"]
                },
                cube: {
                    name: "cube",
                    category: "Arithmetic",
                    syntax: ["cube(x)"],
                    description: "Compute the cube of a value. The cube of x is x * x * x.",
                    examples: ["cube(2)", "2^3", "2 * 2 * 2"],
                    seealso: ["multiply", "square", "pow"]
                },
                divide: {
                    name: "divide",
                    category: "Operators",
                    syntax: ["x / y", "divide(x, y)"],
                    description: "Divide two values.",
                    examples: ["a = 2 / 3", "a * 3", "4.5 / 2", "3 + 4 / 2", "(3 + 4) / 2", "18 km / 4.5"],
                    seealso: ["multiply"]
                },
                dotDivide: {
                    name: "dotDivide",
                    category: "Operators",
                    syntax: ["x ./ y", "dotDivide(x, y)"],
                    description: "Divide two values element wise.",
                    examples: ["a = [1, 2, 3; 4, 5, 6]", "b = [2, 1, 1; 3, 2, 5]", "a ./ b"],
                    seealso: ["multiply", "dotMultiply", "divide"]
                },
                dotMultiply: {
                    name: "dotMultiply",
                    category: "Operators",
                    syntax: ["x .* y", "dotMultiply(x, y)"],
                    description: "Multiply two values element wise.",
                    examples: ["a = [1, 2, 3; 4, 5, 6]", "b = [2, 1, 1; 3, 2, 5]", "a .* b"],
                    seealso: ["multiply", "divide", "dotDivide"]
                },
                dotPow: {
                    name: "dotPow",
                    category: "Operators",
                    syntax: ["x .^ y", "dotPow(x, y)"],
                    description: "Calculates the power of x to y element wise.",
                    examples: ["a = [1, 2, 3; 4, 5, 6]", "a .^ 2"],
                    seealso: ["pow"]
                },
                exp: {
                    name: "exp",
                    category: "Arithmetic",
                    syntax: ["exp(x)"],
                    description: "Calculate the exponent of a value.",
                    examples: ["exp(1.3)", "e ^ 1.3", "log(exp(1.3))", "x = 2.4", "(exp(i*x) == cos(x) + i*sin(x))   # Euler's formula"],
                    seealso: ["expm", "expm1", "pow", "log"]
                },
                expm: {
                    name: "expm",
                    category: "Arithmetic",
                    syntax: ["exp(x)"],
                    description: "Compute the matrix exponential, expm(A) = e^A. The matrix must be square. Not to be confused with exp(a), which performs element-wise exponentiation.",
                    examples: ["expm([[0,2],[0,0]])"],
                    seealso: ["exp"]
                },
                expm1: {
                    name: "expm1",
                    category: "Arithmetic",
                    syntax: ["expm1(x)"],
                    description: "Calculate the value of subtracting 1 from the exponential value.",
                    examples: ["expm1(2)", "pow(e, 2) - 1", "log(expm1(2) + 1)"],
                    seealso: ["exp", "pow", "log"]
                },
                fix: {
                    name: "fix",
                    category: "Arithmetic",
                    syntax: ["fix(x)"],
                    description: "Round a value towards zero. If x is complex, both real and imaginary part are rounded towards zero.",
                    examples: ["fix(3.2)", "fix(3.8)", "fix(-4.2)", "fix(-4.8)"],
                    seealso: ["ceil", "floor", "round"]
                },
                floor: {
                    name: "floor",
                    category: "Arithmetic",
                    syntax: ["floor(x)"],
                    description: "Round a value towards minus infinity.If x is complex, both real and imaginary part are rounded towards minus infinity.",
                    examples: ["floor(3.2)", "floor(3.8)", "floor(-4.2)"],
                    seealso: ["ceil", "fix", "round"]
                },
                gcd: {
                    name: "gcd",
                    category: "Arithmetic",
                    syntax: ["gcd(a, b)", "gcd(a, b, c, ...)"],
                    description: "Compute the greatest common divisor.",
                    examples: ["gcd(8, 12)", "gcd(-4, 6)", "gcd(25, 15, -10)"],
                    seealso: ["lcm", "xgcd"]
                },
                hypot: {
                    name: "hypot",
                    category: "Arithmetic",
                    syntax: ["hypot(a, b, c, ...)", "hypot([a, b, c, ...])"],
                    description: "Calculate the hypotenusa of a list with values. ",
                    examples: ["hypot(3, 4)", "sqrt(3^2 + 4^2)", "hypot(-2)", "hypot([3, 4, 5])"],
                    seealso: ["abs", "norm"]
                },
                lcm: {
                    name: "lcm",
                    category: "Arithmetic",
                    syntax: ["lcm(x, y)"],
                    description: "Compute the least common multiple.",
                    examples: ["lcm(4, 6)", "lcm(6, 21)", "lcm(6, 21, 5)"],
                    seealso: ["gcd"]
                },
                log: {
                    name: "log",
                    category: "Arithmetic",
                    syntax: ["log(x)", "log(x, base)"],
                    description: "Compute the logarithm of a value. If no base is provided, the natural logarithm of x is calculated. If base if provided, the logarithm is calculated for the specified base. log(x, base) is defined as log(x) / log(base).",
                    examples: ["log(3.5)", "a = log(2.4)", "exp(a)", "10 ^ 4", "log(10000, 10)", "log(10000) / log(10)", "b = log(1024, 2)", "2 ^ b"],
                    seealso: ["exp", "log1p", "log2", "log10"]
                },
                log2: {
                    name: "log2",
                    category: "Arithmetic",
                    syntax: ["log2(x)"],
                    description: "Calculate the 2-base of a value. This is the same as calculating `log(x, 2)`.",
                    examples: ["log2(0.03125)", "log2(16)", "log2(16) / log2(2)", "pow(2, 4)"],
                    seealso: ["exp", "log1p", "log", "log10"]
                },
                log1p: {
                    name: "log1p",
                    category: "Arithmetic",
                    syntax: ["log1p(x)", "log1p(x, base)"],
                    description: "Calculate the logarithm of a `value+1`",
                    examples: ["log1p(2.5)", "exp(log1p(1.4))", "pow(10, 4)", "log1p(9999, 10)", "log1p(9999) / log(10)"],
                    seealso: ["exp", "log", "log2", "log10"]
                },
                log10: {
                    name: "log10",
                    category: "Arithmetic",
                    syntax: ["log10(x)"],
                    description: "Compute the 10-base logarithm of a value.",
                    examples: ["log10(0.00001)", "log10(10000)", "10 ^ 4", "log(10000) / log(10)", "log(10000, 10)"],
                    seealso: ["exp", "log"]
                },
                mod: {
                    name: "mod",
                    category: "Operators",
                    syntax: ["x % y", "x mod y", "mod(x, y)"],
                    description: "Calculates the modulus, the remainder of an integer division.",
                    examples: ["7 % 3", "11 % 2", "10 mod 4", "isOdd(x) = x % 2", "isOdd(2)", "isOdd(3)"],
                    seealso: ["divide"]
                },
                multiply: {
                    name: "multiply",
                    category: "Operators",
                    syntax: ["x * y", "multiply(x, y)"],
                    description: "multiply two values.",
                    examples: ["a = 2.1 * 3.4", "a / 3.4", "2 * 3 + 4", "2 * (3 + 4)", "3 * 2.1 km"],
                    seealso: ["divide"]
                },
                norm: {
                    name: "norm",
                    category: "Arithmetic",
                    syntax: ["norm(x)", "norm(x, p)"],
                    description: "Calculate the norm of a number, vector or matrix.",
                    examples: ["abs(-3.5)", "norm(-3.5)", "norm(3 - 4i)", "norm([1, 2, -3], Infinity)", "norm([1, 2, -3], -Infinity)", "norm([3, 4], 2)", "norm([[1, 2], [3, 4]], 1)", 'norm([[1, 2], [3, 4]], "inf")', 'norm([[1, 2], [3, 4]], "fro")']
                },
                nthRoot: {
                    name: "nthRoot",
                    category: "Arithmetic",
                    syntax: ["nthRoot(a)", "nthRoot(a, root)"],
                    description: 'Calculate the nth root of a value. The principal nth root of a positive real number A, is the positive real solution of the equation "x^root = A".',
                    examples: ["4 ^ 3", "nthRoot(64, 3)", "nthRoot(9, 2)", "sqrt(9)"],
                    seealso: ["nthRoots", "pow", "sqrt"]
                },
                nthRoots: {
                    name: "nthRoots",
                    category: "Arithmetic",
                    syntax: ["nthRoots(A)", "nthRoots(A, root)"],
                    description: 'Calculate the nth roots of a value. An nth root of a positive real number A, is a positive real solution of the equation "x^root = A". This function returns an array of complex values.',
                    examples: ["nthRoots(1)", "nthRoots(1, 3)"],
                    seealso: ["sqrt", "pow", "nthRoot"]
                },
                pow: {
                    name: "pow",
                    category: "Operators",
                    syntax: ["x ^ y", "pow(x, y)"],
                    description: "Calculates the power of x to y, x^y.",
                    examples: ["2^3", "2*2*2", "1 + e ^ (pi * i)"],
                    seealso: ["multiply", "nthRoot", "nthRoots", "sqrt"]
                },
                round: {
                    name: "round",
                    category: "Arithmetic",
                    syntax: ["round(x)", "round(x, n)"],
                    description: "round a value towards the nearest integer.If x is complex, both real and imaginary part are rounded towards the nearest integer. When n is specified, the value is rounded to n decimals.",
                    examples: ["round(3.2)", "round(3.8)", "round(-4.2)", "round(-4.8)", "round(pi, 3)", "round(123.45678, 2)"],
                    seealso: ["ceil", "floor", "fix"]
                },
                sign: {
                    name: "sign",
                    category: "Arithmetic",
                    syntax: ["sign(x)"],
                    description: "Compute the sign of a value. The sign of a value x is 1 when x>1, -1 when x<0, and 0 when x=0.",
                    examples: ["sign(3.5)", "sign(-4.2)", "sign(0)"],
                    seealso: ["abs"]
                },
                sqrt: {
                    name: "sqrt",
                    category: "Arithmetic",
                    syntax: ["sqrt(x)"],
                    description: "Compute the square root value. If x = y * y, then y is the square root of x.",
                    examples: ["sqrt(25)", "5 * 5", "sqrt(-1)"],
                    seealso: ["square", "sqrtm", "multiply", "nthRoot", "nthRoots", "pow"]
                },
                sqrtm: {
                    name: "sqrtm",
                    category: "Arithmetic",
                    syntax: ["sqrtm(x)"],
                    description: "Calculate the principal square root of a square matrix. The principal square root matrix `X` of another matrix `A` is such that `X * X = A`.",
                    examples: ["sqrtm([[1, 2], [3, 4]])"],
                    seealso: ["sqrt", "abs", "square", "multiply"]
                },
                square: {
                    name: "square",
                    category: "Arithmetic",
                    syntax: ["square(x)"],
                    description: "Compute the square of a value. The square of x is x * x.",
                    examples: ["square(3)", "sqrt(9)", "3^2", "3 * 3"],
                    seealso: ["multiply", "pow", "sqrt", "cube"]
                },
                subtract: {
                    name: "subtract",
                    category: "Operators",
                    syntax: ["x - y", "subtract(x, y)"],
                    description: "subtract two values.",
                    examples: ["a = 5.3 - 2", "a + 2", "2/3 - 1/6", "2 * 3 - 3", "2.1 km - 500m"],
                    seealso: ["add"]
                },
                unaryMinus: {
                    name: "unaryMinus",
                    category: "Operators",
                    syntax: ["-x", "unaryMinus(x)"],
                    description: "Inverse the sign of a value. Converts booleans and strings to numbers.",
                    examples: ["-4.5", "-(-5.6)", '-"22"'],
                    seealso: ["add", "subtract", "unaryPlus"]
                },
                unaryPlus: {
                    name: "unaryPlus",
                    category: "Operators",
                    syntax: ["+x", "unaryPlus(x)"],
                    description: "Converts booleans and strings to numbers.",
                    examples: ["+true", '+"2"'],
                    seealso: ["add", "subtract", "unaryMinus"]
                },
                xgcd: {
                    name: "xgcd",
                    category: "Arithmetic",
                    syntax: ["xgcd(a, b)"],
                    description: "Calculate the extended greatest common divisor for two values. The result is an array [d, x, y] with 3 entries, where d is the greatest common divisor, and d = x * a + y * b.",
                    examples: ["xgcd(8, 12)", "gcd(8, 12)", "xgcd(36163, 21199)"],
                    seealso: ["gcd", "lcm"]
                },
                bitAnd: {
                    name: "bitAnd",
                    category: "Bitwise",
                    syntax: ["x & y", "bitAnd(x, y)"],
                    description: "Bitwise AND operation. Performs the logical AND operation on each pair of the corresponding bits of the two given values by multiplying them. If both bits in the compared position are 1, the bit in the resulting binary representation is 1, otherwise, the result is 0",
                    examples: ["5 & 3", "bitAnd(53, 131)", "[1, 12, 31] & 42"],
                    seealso: ["bitNot", "bitOr", "bitXor", "leftShift", "rightArithShift", "rightLogShift"]
                },
                bitNot: {
                    name: "bitNot",
                    category: "Bitwise",
                    syntax: ["~x", "bitNot(x)"],
                    description: "Bitwise NOT operation. Performs a logical negation on each bit of the given value. Bits that are 0 become 1, and those that are 1 become 0.",
                    examples: ["~1", "~2", "bitNot([2, -3, 4])"],
                    seealso: ["bitAnd", "bitOr", "bitXor", "leftShift", "rightArithShift", "rightLogShift"]
                },
                bitOr: {
                    name: "bitOr",
                    category: "Bitwise",
                    syntax: ["x | y", "bitOr(x, y)"],
                    description: "Bitwise OR operation. Performs the logical inclusive OR operation on each pair of corresponding bits of the two given values. The result in each position is 1 if the first bit is 1 or the second bit is 1 or both bits are 1, otherwise, the result is 0.",
                    examples: ["5 | 3", "bitOr([1, 2, 3], 4)"],
                    seealso: ["bitAnd", "bitNot", "bitXor", "leftShift", "rightArithShift", "rightLogShift"]
                },
                bitXor: {
                    name: "bitXor",
                    category: "Bitwise",
                    syntax: ["bitXor(x, y)"],
                    description: "Bitwise XOR operation, exclusive OR. Performs the logical exclusive OR operation on each pair of corresponding bits of the two given values. The result in each position is 1 if only the first bit is 1 or only the second bit is 1, but will be 0 if both are 0 or both are 1.",
                    examples: ["bitOr(1, 2)", "bitXor([2, 3, 4], 4)"],
                    seealso: ["bitAnd", "bitNot", "bitOr", "leftShift", "rightArithShift", "rightLogShift"]
                },
                leftShift: {
                    name: "leftShift",
                    category: "Bitwise",
                    syntax: ["x << y", "leftShift(x, y)"],
                    description: "Bitwise left logical shift of a value x by y number of bits.",
                    examples: ["4 << 1", "8 >> 1"],
                    seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "rightArithShift", "rightLogShift"]
                },
                rightArithShift: {
                    name: "rightArithShift",
                    category: "Bitwise",
                    syntax: ["x >> y", "rightArithShift(x, y)"],
                    description: "Bitwise right arithmetic shift of a value x by y number of bits.",
                    examples: ["8 >> 1", "4 << 1", "-12 >> 2"],
                    seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "leftShift", "rightLogShift"]
                },
                rightLogShift: {
                    name: "rightLogShift",
                    category: "Bitwise",
                    syntax: ["x >>> y", "rightLogShift(x, y)"],
                    description: "Bitwise right logical shift of a value x by y number of bits.",
                    examples: ["8 >>> 1", "4 << 1", "-12 >>> 2"],
                    seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "leftShift", "rightArithShift"]
                },
                bellNumbers: {
                    name: "bellNumbers",
                    category: "Combinatorics",
                    syntax: ["bellNumbers(n)"],
                    description: "The Bell Numbers count the number of partitions of a set. A partition is a pairwise disjoint subset of S whose union is S. `bellNumbers` only takes integer arguments. The following condition must be enforced: n >= 0.",
                    examples: ["bellNumbers(3)", "bellNumbers(8)"],
                    seealso: ["stirlingS2"]
                },
                catalan: {
                    name: "catalan",
                    category: "Combinatorics",
                    syntax: ["catalan(n)"],
                    description: "The Catalan Numbers enumerate combinatorial structures of many different types. catalan only takes integer arguments. The following condition must be enforced: n >= 0.",
                    examples: ["catalan(3)", "catalan(8)"],
                    seealso: ["bellNumbers"]
                },
                composition: {
                    name: "composition",
                    category: "Combinatorics",
                    syntax: ["composition(n, k)"],
                    description: "The composition counts of n into k parts. composition only takes integer arguments. The following condition must be enforced: k <= n.",
                    examples: ["composition(5, 3)"],
                    seealso: ["combinations"]
                },
                stirlingS2: {
                    name: "stirlingS2",
                    category: "Combinatorics",
                    syntax: ["stirlingS2(n, k)"],
                    description: "he Stirling numbers of the second kind, counts the number of ways to partition a set of n labelled objects into k nonempty unlabelled subsets. `stirlingS2` only takes integer arguments. The following condition must be enforced: k <= n. If n = k or k = 1, then s(n,k) = 1.",
                    examples: ["stirlingS2(5, 3)"],
                    seealso: ["bellNumbers"]
                },
                config: {
                    name: "config",
                    category: "Core",
                    syntax: ["config()", "config(options)"],
                    description: "Get configuration or change configuration.",
                    examples: ["config()", "1/3 + 1/4", 'config({number: "Fraction"})', "1/3 + 1/4"],
                    seealso: []
                },
                import: {
                    name: "import",
                    category: "Core",
                    syntax: ["import(functions)", "import(functions, options)"],
                    description: "Import functions or constants from an object.",
                    examples: ["import({myFn: f(x)=x^2, myConstant: 32 })", "myFn(2)", "myConstant"],
                    seealso: []
                },
                typed: {
                    name: "typed",
                    category: "Core",
                    syntax: ["typed(signatures)", "typed(name, signatures)"],
                    description: "Create a typed function.",
                    examples: ['double = typed({ "number, number": f(x)=x+x })', "double(2)", 'double("hello")'],
                    seealso: []
                },
                arg: {
                    name: "arg",
                    category: "Complex",
                    syntax: ["arg(x)"],
                    description: "Compute the argument of a complex value. If x = a+bi, the argument is computed as atan2(b, a).",
                    examples: ["arg(2 + 2i)", "atan2(3, 2)", "arg(2 + 3i)"],
                    seealso: ["re", "im", "conj", "abs"]
                },
                conj: {
                    name: "conj",
                    category: "Complex",
                    syntax: ["conj(x)"],
                    description: "Compute the complex conjugate of a complex value. If x = a+bi, the complex conjugate is a-bi.",
                    examples: ["conj(2 + 3i)", "conj(2 - 3i)", "conj(-5.2i)"],
                    seealso: ["re", "im", "abs", "arg"]
                },
                re: {
                    name: "re",
                    category: "Complex",
                    syntax: ["re(x)"],
                    description: "Get the real part of a complex number.",
                    examples: ["re(2 + 3i)", "im(2 + 3i)", "re(-5.2i)", "re(2.4)"],
                    seealso: ["im", "conj", "abs", "arg"]
                },
                im: {
                    name: "im",
                    category: "Complex",
                    syntax: ["im(x)"],
                    description: "Get the imaginary part of a complex number.",
                    examples: ["im(2 + 3i)", "re(2 + 3i)", "im(-5.2i)", "im(2.4)"],
                    seealso: ["re", "conj", "abs", "arg"]
                },
                evaluate: {
                    name: "evaluate",
                    category: "Expression",
                    syntax: ["evaluate(expression)", "evaluate([expr1, expr2, expr3, ...])"],
                    description: "Evaluate an expression or an array with expressions.",
                    examples: ['evaluate("2 + 3")', 'evaluate("sqrt(" + 4 + ")")'],
                    seealso: []
                },
                help: {
                    name: "help",
                    category: "Expression",
                    syntax: ["help(object)", "help(string)"],
                    description: "Display documentation on a function or data type.",
                    examples: ["help(sqrt)", 'help("complex")'],
                    seealso: []
                },
                distance: {
                    name: "distance",
                    category: "Geometry",
                    syntax: ["distance([x1, y1], [x2, y2])", "distance([[x1, y1], [x2, y2]])"],
                    description: "Calculates the Euclidean distance between two points.",
                    examples: ["distance([0,0], [4,4])", "distance([[0,0], [4,4]])"],
                    seealso: []
                },
                intersect: {
                    name: "intersect",
                    category: "Geometry",
                    syntax: ["intersect(expr1, expr2, expr3, expr4)", "intersect(expr1, expr2, expr3)"],
                    description: "Computes the intersection point of lines and/or planes.",
                    examples: ["intersect([0, 0], [10, 10], [10, 0], [0, 10])", "intersect([1, 0, 1],  [4, -2, 2], [1, 1, 1, 6])"],
                    seealso: []
                },
                and: {
                    name: "and",
                    category: "Logical",
                    syntax: ["x and y", "and(x, y)"],
                    description: "Logical and. Test whether two values are both defined with a nonzero/nonempty value.",
                    examples: ["true and false", "true and true", "2 and 4"],
                    seealso: ["not", "or", "xor"]
                },
                not: {
                    name: "not",
                    category: "Logical",
                    syntax: ["not x", "not(x)"],
                    description: "Logical not. Flips the boolean value of given argument.",
                    examples: ["not true", "not false", "not 2", "not 0"],
                    seealso: ["and", "or", "xor"]
                },
                or: {
                    name: "or",
                    category: "Logical",
                    syntax: ["x or y", "or(x, y)"],
                    description: "Logical or. Test if at least one value is defined with a nonzero/nonempty value.",
                    examples: ["true or false", "false or false", "0 or 4"],
                    seealso: ["not", "and", "xor"]
                },
                xor: {
                    name: "xor",
                    category: "Logical",
                    syntax: ["x xor y", "xor(x, y)"],
                    description: "Logical exclusive or, xor. Test whether one and only one value is defined with a nonzero/nonempty value.",
                    examples: ["true xor false", "false xor false", "true xor true", "0 xor 4"],
                    seealso: ["not", "and", "or"]
                },
                concat: {
                    name: "concat",
                    category: "Matrix",
                    syntax: ["concat(A, B, C, ...)", "concat(A, B, C, ..., dim)"],
                    description: "Concatenate matrices. By default, the matrices are concatenated by the last dimension. The dimension on which to concatenate can be provided as last argument.",
                    examples: ["A = [1, 2; 5, 6]", "B = [3, 4; 7, 8]", "concat(A, B)", "concat(A, B, 1)", "concat(A, B, 2)"],
                    seealso: ["det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
                },
                cross: {
                    name: "cross",
                    category: "Matrix",
                    syntax: ["cross(A, B)"],
                    description: "Calculate the cross product for two vectors in three dimensional space.",
                    examples: ["cross([1, 1, 0],  [0, 1, 1])", "cross([3, -3, 1], [4, 9, 2])", "cross([2, 3, 4],  [5, 6, 7])"],
                    seealso: ["multiply", "dot"]
                },
                column: {
                    name: "column",
                    category: "Matrix",
                    syntax: ["column(x, index)"],
                    description: "Return a column from a matrix or array.",
                    examples: ["A = [[1, 2], [3, 4]]", "column(A, 1)", "column(A, 2)"],
                    seealso: ["row"]
                },
                ctranspose: {
                    name: "ctranspose",
                    category: "Matrix",
                    syntax: ["x'", "ctranspose(x)"],
                    description: "Complex Conjugate and Transpose a matrix",
                    examples: ["a = [1, 2, 3; 4, 5, 6]", "a'", "ctranspose(a)"],
                    seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "zeros"]
                },
                det: {
                    name: "det",
                    category: "Matrix",
                    syntax: ["det(x)"],
                    description: "Calculate the determinant of a matrix",
                    examples: ["det([1, 2; 3, 4])", "det([-2, 2, 3; -1, 1, 3; 2, 0, -1])"],
                    seealso: ["concat", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
                },
                diag: {
                    name: "diag",
                    category: "Matrix",
                    syntax: ["diag(x)", "diag(x, k)"],
                    description: "Create a diagonal matrix or retrieve the diagonal of a matrix. When x is a vector, a matrix with the vector values on the diagonal will be returned. When x is a matrix, a vector with the diagonal values of the matrix is returned. When k is provided, the k-th diagonal will be filled in or retrieved, if k is positive, the values are placed on the super diagonal. When k is negative, the values are placed on the sub diagonal.",
                    examples: ["diag(1:3)", "diag(1:3, 1)", "a = [1, 2, 3; 4, 5, 6; 7, 8, 9]", "diag(a)"],
                    seealso: ["concat", "det", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
                },
                dot: {
                    name: "dot",
                    category: "Matrix",
                    syntax: ["dot(A, B)", "A * B"],
                    description: "Calculate the dot product of two vectors. The dot product of A = [a1, a2, a3, ..., an] and B = [b1, b2, b3, ..., bn] is defined as dot(A, B) = a1 * b1 + a2 * b2 + a3 * b3 + ... + an * bn",
                    examples: ["dot([2, 4, 1], [2, 2, 3])", "[2, 4, 1] * [2, 2, 3]"],
                    seealso: ["multiply", "cross"]
                },
                getMatrixDataType: {
                    name: "getMatrixDataType",
                    category: "Matrix",
                    syntax: ["getMatrixDataType(x)"],
                    description: 'Find the data type of all elements in a matrix or array, for example "number" if all items are a number and "Complex" if all values are complex numbers. If a matrix contains more than one data type, it will return "mixed".',
                    examples: ["getMatrixDataType([1, 2, 3])", "getMatrixDataType([[5 cm], [2 inch]])", 'getMatrixDataType([1, "text"])', "getMatrixDataType([1, bignumber(4)])"],
                    seealso: ["matrix", "sparse", "typeOf"]
                },
                identity: {
                    name: "identity",
                    category: "Matrix",
                    syntax: ["identity(n)", "identity(m, n)", "identity([m, n])"],
                    description: "Returns the identity matrix with size m-by-n. The matrix has ones on the diagonal and zeros elsewhere.",
                    examples: ["identity(3)", "identity(3, 5)", "a = [1, 2, 3; 4, 5, 6]", "identity(size(a))"],
                    seealso: ["concat", "det", "diag", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
                },
                filter: {
                    name: "filter",
                    category: "Matrix",
                    syntax: ["filter(x, test)"],
                    description: "Filter items in a matrix.",
                    examples: ["isPositive(x) = x > 0", "filter([6, -2, -1, 4, 3], isPositive)", "filter([6, -2, 0, 1, 0], x != 0)"],
                    seealso: ["sort", "map", "forEach"]
                },
                flatten: {
                    name: "flatten",
                    category: "Matrix",
                    syntax: ["flatten(x)"],
                    description: "Flatten a multi dimensional matrix into a single dimensional matrix.",
                    examples: ["a = [1, 2, 3; 4, 5, 6]", "size(a)", "b = flatten(a)", "size(b)"],
                    seealso: ["concat", "resize", "size", "squeeze"]
                },
                forEach: {
                    name: "forEach",
                    category: "Matrix",
                    syntax: ["forEach(x, callback)"],
                    description: "Iterates over all elements of a matrix/array, and executes the given callback function.",
                    examples: ["forEach([1, 2, 3], function(val) { console.log(val) })"],
                    seealso: ["map", "sort", "filter"]
                },
                inv: {
                    name: "inv",
                    category: "Matrix",
                    syntax: ["inv(x)"],
                    description: "Calculate the inverse of a matrix",
                    examples: ["inv([1, 2; 3, 4])", "inv(4)", "1 / 4"],
                    seealso: ["concat", "det", "diag", "identity", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
                },
                eigs: {
                    name: "eigs",
                    category: "Matrix",
                    syntax: ["eigs(x)"],
                    description: "Calculate the eigenvalues and eigenvectors of a real symmetric matrix",
                    examples: ["eigs([[5, 2.3], [2.3, 1]])"],
                    seealso: ["inv"]
                },
                kron: {
                    name: "kron",
                    category: "Matrix",
                    syntax: ["kron(x, y)"],
                    description: "Calculates the kronecker product of 2 matrices or vectors.",
                    examples: ["kron([[1, 0], [0, 1]], [[1, 2], [3, 4]])", "kron([1,1], [2,3,4])"],
                    seealso: ["multiply", "dot", "cross"]
                },
                map: {
                    name: "map",
                    category: "Matrix",
                    syntax: ["map(x, callback)"],
                    description: "Create a new matrix or array with the results of the callback function executed on each entry of the matrix/array.",
                    examples: ["map([1, 2, 3], square)"],
                    seealso: ["filter", "forEach"]
                },
                ones: {
                    name: "ones",
                    category: "Matrix",
                    syntax: ["ones(m)", "ones(m, n)", "ones(m, n, p, ...)", "ones([m])", "ones([m, n])", "ones([m, n, p, ...])"],
                    description: "Create a matrix containing ones.",
                    examples: ["ones(3)", "ones(3, 5)", "ones([2,3]) * 4.5", "a = [1, 2, 3; 4, 5, 6]", "ones(size(a))"],
                    seealso: ["concat", "det", "diag", "identity", "inv", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
                },
                partitionSelect: {
                    name: "partitionSelect",
                    category: "Matrix",
                    syntax: ["partitionSelect(x, k)", "partitionSelect(x, k, compare)"],
                    description: "Partition-based selection of an array or 1D matrix. Will find the kth smallest value, and mutates the input array. Uses Quickselect.",
                    examples: ["partitionSelect([5, 10, 1], 2)", 'partitionSelect(["C", "B", "A", "D"], 1)'],
                    seealso: ["sort"]
                },
                range: {
                    name: "range",
                    category: "Type",
                    syntax: ["start:end", "start:step:end", "range(start, end)", "range(start, end, step)", "range(string)"],
                    description: "Create a range. Lower bound of the range is included, upper bound is excluded.",
                    examples: ["1:5", "3:-1:-3", "range(3, 7)", "range(0, 12, 2)", 'range("4:10")', "a = [1, 2, 3, 4; 5, 6, 7, 8]", "a[1:2, 1:2]"],
                    seealso: ["concat", "det", "diag", "identity", "inv", "ones", "size", "squeeze", "subset", "trace", "transpose", "zeros"]
                },
                resize: {
                    name: "resize",
                    category: "Matrix",
                    syntax: ["resize(x, size)", "resize(x, size, defaultValue)"],
                    description: "Resize a matrix.",
                    examples: ["resize([1,2,3,4,5], [3])", "resize([1,2,3], [5])", "resize([1,2,3], [5], -1)", "resize(2, [2, 3])", 'resize("hello", [8], "!")'],
                    seealso: ["size", "subset", "squeeze", "reshape"]
                },
                reshape: {
                    name: "reshape",
                    category: "Matrix",
                    syntax: ["reshape(x, sizes)"],
                    description: "Reshape a multi dimensional array to fit the specified dimensions.",
                    examples: ["reshape([1, 2, 3, 4, 5, 6], [2, 3])", "reshape([[1, 2], [3, 4]], [1, 4])", "reshape([[1, 2], [3, 4]], [4])"],
                    seealso: ["size", "squeeze", "resize"]
                },
                row: {
                    name: "row",
                    category: "Matrix",
                    syntax: ["row(x, index)"],
                    description: "Return a row from a matrix or array.",
                    examples: ["A = [[1, 2], [3, 4]]", "row(A, 1)", "row(A, 2)"],
                    seealso: ["column"]
                },
                size: {
                    name: "size",
                    category: "Matrix",
                    syntax: ["size(x)"],
                    description: "Calculate the size of a matrix.",
                    examples: ["size(2.3)", 'size("hello world")', "a = [1, 2; 3, 4; 5, 6]", "size(a)", "size(1:6)"],
                    seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "squeeze", "subset", "trace", "transpose", "zeros"]
                },
                sort: {
                    name: "sort",
                    category: "Matrix",
                    syntax: ["sort(x)", "sort(x, compare)"],
                    description: 'Sort the items in a matrix. Compare can be a string "asc", "desc", "natural", or a custom sort function.',
                    examples: ["sort([5, 10, 1])", 'sort(["C", "B", "A", "D"])', "sortByLength(a, b) = size(a)[1] - size(b)[1]", 'sort(["Langdon", "Tom", "Sara"], sortByLength)', 'sort(["10", "1", "2"], "natural")'],
                    seealso: ["map", "filter", "forEach"]
                },
                squeeze: {
                    name: "squeeze",
                    category: "Matrix",
                    syntax: ["squeeze(x)"],
                    description: "Remove inner and outer singleton dimensions from a matrix.",
                    examples: ["a = zeros(3,2,1)", "size(squeeze(a))", "b = zeros(1,1,3)", "size(squeeze(b))"],
                    seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "subset", "trace", "transpose", "zeros"]
                },
                subset: {
                    name: "subset",
                    category: "Matrix",
                    syntax: ["value(index)", "value(index) = replacement", "subset(value, [index])", "subset(value, [index], replacement)"],
                    description: "Get or set a subset of a matrix or string. Indexes are one-based. Both the ranges lower-bound and upper-bound are included.",
                    examples: ["d = [1, 2; 3, 4]", "e = []", "e[1, 1:2] = [5, 6]", "e[2, :] = [7, 8]", "f = d * e", "f[2, 1]", "f[:, 1]"],
                    seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "trace", "transpose", "zeros"]
                },
                trace: {
                    name: "trace",
                    category: "Matrix",
                    syntax: ["trace(A)"],
                    description: "Calculate the trace of a matrix: the sum of the elements on the main diagonal of a square matrix.",
                    examples: ["A = [1, 2, 3; -1, 2, 3; 2, 0, 3]", "trace(A)"],
                    seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "transpose", "zeros"]
                },
                transpose: {
                    name: "transpose",
                    category: "Matrix",
                    syntax: ["x'", "transpose(x)"],
                    description: "Transpose a matrix",
                    examples: ["a = [1, 2, 3; 4, 5, 6]", "a'", "transpose(a)"],
                    seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "zeros"]
                },
                zeros: {
                    name: "zeros",
                    category: "Matrix",
                    syntax: ["zeros(m)", "zeros(m, n)", "zeros(m, n, p, ...)", "zeros([m])", "zeros([m, n])", "zeros([m, n, p, ...])"],
                    description: "Create a matrix containing zeros.",
                    examples: ["zeros(3)", "zeros(3, 5)", "a = [1, 2, 3; 4, 5, 6]", "zeros(size(a))"],
                    seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose"]
                },
                combinations: {
                    name: "combinations",
                    category: "Probability",
                    syntax: ["combinations(n, k)"],
                    description: "Compute the number of combinations of n items taken k at a time",
                    examples: ["combinations(7, 5)"],
                    seealso: ["combinationsWithRep", "permutations", "factorial"]
                },
                combinationsWithRep: {
                    name: "combinationsWithRep",
                    category: "Probability",
                    syntax: ["combinationsWithRep(n, k)"],
                    description: "Compute the number of combinations of n items taken k at a time with replacements.",
                    examples: ["combinationsWithRep(7, 5)"],
                    seealso: ["combinations", "permutations", "factorial"]
                },
                factorial: {
                    name: "factorial",
                    category: "Probability",
                    syntax: ["n!", "factorial(n)"],
                    description: "Compute the factorial of a value",
                    examples: ["5!", "5 * 4 * 3 * 2 * 1", "3!"],
                    seealso: ["combinations", "combinationsWithRep", "permutations", "gamma"]
                },
                gamma: {
                    name: "gamma",
                    category: "Probability",
                    syntax: ["gamma(n)"],
                    description: "Compute the gamma function. For small values, the Lanczos approximation is used, and for large values the extended Stirling approximation.",
                    examples: ["gamma(4)", "3!", "gamma(1/2)", "sqrt(pi)"],
                    seealso: ["factorial"]
                },
                kldivergence: {
                    name: "kldivergence",
                    category: "Probability",
                    syntax: ["kldivergence(x, y)"],
                    description: "Calculate the Kullback-Leibler (KL) divergence  between two distributions.",
                    examples: ["kldivergence([0.7,0.5,0.4], [0.2,0.9,0.5])"],
                    seealso: []
                },
                multinomial: {
                    name: "multinomial",
                    category: "Probability",
                    syntax: ["multinomial(A)"],
                    description: "Multinomial Coefficients compute the number of ways of picking a1, a2, ..., ai unordered outcomes from `n` possibilities. multinomial takes one array of integers as an argument. The following condition must be enforced: every ai > 0.",
                    examples: ["multinomial([1, 2, 1])"],
                    seealso: ["combinations", "factorial"]
                },
                permutations: {
                    name: "permutations",
                    category: "Probability",
                    syntax: ["permutations(n)", "permutations(n, k)"],
                    description: "Compute the number of permutations of n items taken k at a time",
                    examples: ["permutations(5)", "permutations(5, 3)"],
                    seealso: ["combinations", "combinationsWithRep", "factorial"]
                },
                pickRandom: {
                    name: "pickRandom",
                    category: "Probability",
                    syntax: ["pickRandom(array)", "pickRandom(array, number)", "pickRandom(array, weights)", "pickRandom(array, number, weights)", "pickRandom(array, weights, number)"],
                    description: "Pick a random entry from a given array.",
                    examples: ["pickRandom(0:10)", "pickRandom([1, 3, 1, 6])", "pickRandom([1, 3, 1, 6], 2)", "pickRandom([1, 3, 1, 6], [2, 3, 2, 1])", "pickRandom([1, 3, 1, 6], 2, [2, 3, 2, 1])", "pickRandom([1, 3, 1, 6], [2, 3, 2, 1], 2)"],
                    seealso: ["random", "randomInt"]
                },
                random: {
                    name: "random",
                    category: "Probability",
                    syntax: ["random()", "random(max)", "random(min, max)", "random(size)", "random(size, max)", "random(size, min, max)"],
                    description: "Return a random number.",
                    examples: ["random()", "random(10, 20)", "random([2, 3])"],
                    seealso: ["pickRandom", "randomInt"]
                },
                randomInt: {
                    name: "randomInt",
                    category: "Probability",
                    syntax: ["randomInt(max)", "randomInt(min, max)", "randomInt(size)", "randomInt(size, max)", "randomInt(size, min, max)"],
                    description: "Return a random integer number",
                    examples: ["randomInt(10, 20)", "randomInt([2, 3], 10)"],
                    seealso: ["pickRandom", "random"]
                },
                compare: {
                    name: "compare",
                    category: "Relational",
                    syntax: ["compare(x, y)"],
                    description: "Compare two values. Returns 1 when x > y, -1 when x < y, and 0 when x == y.",
                    examples: ["compare(2, 3)", "compare(3, 2)", "compare(2, 2)", "compare(5cm, 40mm)", "compare(2, [1, 2, 3])"],
                    seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq", "compareNatural", "compareText"]
                },
                compareNatural: {
                    name: "compareNatural",
                    category: "Relational",
                    syntax: ["compareNatural(x, y)"],
                    description: "Compare two values of any type in a deterministic, natural way. Returns 1 when x > y, -1 when x < y, and 0 when x == y.",
                    examples: ["compareNatural(2, 3)", "compareNatural(3, 2)", "compareNatural(2, 2)", "compareNatural(5cm, 40mm)", 'compareNatural("2", "10")', "compareNatural(2 + 3i, 2 + 4i)", "compareNatural([1, 2, 4], [1, 2, 3])", "compareNatural([1, 5], [1, 2, 3])", "compareNatural([1, 2], [1, 2])", "compareNatural({a: 2}, {a: 4})"],
                    seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq", "compare", "compareText"]
                },
                compareText: {
                    name: "compareText",
                    category: "Relational",
                    syntax: ["compareText(x, y)"],
                    description: "Compare two strings lexically. Comparison is case sensitive. Returns 1 when x > y, -1 when x < y, and 0 when x == y.",
                    examples: ['compareText("B", "A")', 'compareText("A", "B")', 'compareText("A", "A")', 'compareText("2", "10")', 'compare("2", "10")', "compare(2, 10)", 'compareNatural("2", "10")', 'compareText("B", ["A", "B", "C"])'],
                    seealso: ["compare", "compareNatural"]
                },
                deepEqual: {
                    name: "deepEqual",
                    category: "Relational",
                    syntax: ["deepEqual(x, y)"],
                    description: "Check equality of two matrices element wise. Returns true if the size of both matrices is equal and when and each of the elements are equal.",
                    examples: ["deepEqual([1,3,4], [1,3,4])", "deepEqual([1,3,4], [1,3])"],
                    seealso: ["equal", "unequal", "smaller", "larger", "smallerEq", "largerEq", "compare"]
                },
                equal: {
                    name: "equal",
                    category: "Relational",
                    syntax: ["x == y", "equal(x, y)"],
                    description: "Check equality of two values. Returns true if the values are equal, and false if not.",
                    examples: ["2+2 == 3", "2+2 == 4", "a = 3.2", "b = 6-2.8", "a == b", "50cm == 0.5m"],
                    seealso: ["unequal", "smaller", "larger", "smallerEq", "largerEq", "compare", "deepEqual", "equalText"]
                },
                equalText: {
                    name: "equalText",
                    category: "Relational",
                    syntax: ["equalText(x, y)"],
                    description: "Check equality of two strings. Comparison is case sensitive. Returns true if the values are equal, and false if not.",
                    examples: ['equalText("Hello", "Hello")', 'equalText("a", "A")', 'equal("2e3", "2000")', 'equalText("2e3", "2000")', 'equalText("B", ["A", "B", "C"])'],
                    seealso: ["compare", "compareNatural", "compareText", "equal"]
                },
                larger: {
                    name: "larger",
                    category: "Relational",
                    syntax: ["x > y", "larger(x, y)"],
                    description: "Check if value x is larger than y. Returns true if x is larger than y, and false if not.",
                    examples: ["2 > 3", "5 > 2*2", "a = 3.3", "b = 6-2.8", "(a > b)", "(b < a)", "5 cm > 2 inch"],
                    seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq", "compare"]
                },
                largerEq: {
                    name: "largerEq",
                    category: "Relational",
                    syntax: ["x >= y", "largerEq(x, y)"],
                    description: "Check if value x is larger or equal to y. Returns true if x is larger or equal to y, and false if not.",
                    examples: ["2 >= 1+1", "2 > 1+1", "a = 3.2", "b = 6-2.8", "(a >= b)"],
                    seealso: ["equal", "unequal", "smallerEq", "smaller", "compare"]
                },
                smaller: {
                    name: "smaller",
                    category: "Relational",
                    syntax: ["x < y", "smaller(x, y)"],
                    description: "Check if value x is smaller than value y. Returns true if x is smaller than y, and false if not.",
                    examples: ["2 < 3", "5 < 2*2", "a = 3.3", "b = 6-2.8", "(a < b)", "5 cm < 2 inch"],
                    seealso: ["equal", "unequal", "larger", "smallerEq", "largerEq", "compare"]
                },
                smallerEq: {
                    name: "smallerEq",
                    category: "Relational",
                    syntax: ["x <= y", "smallerEq(x, y)"],
                    description: "Check if value x is smaller or equal to value y. Returns true if x is smaller than y, and false if not.",
                    examples: ["2 <= 1+1", "2 < 1+1", "a = 3.2", "b = 6-2.8", "(a <= b)"],
                    seealso: ["equal", "unequal", "larger", "smaller", "largerEq", "compare"]
                },
                unequal: {
                    name: "unequal",
                    category: "Relational",
                    syntax: ["x != y", "unequal(x, y)"],
                    description: "Check unequality of two values. Returns true if the values are unequal, and false if they are equal.",
                    examples: ["2+2 != 3", "2+2 != 4", "a = 3.2", "b = 6-2.8", "a != b", "50cm != 0.5m", "5 cm != 2 inch"],
                    seealso: ["equal", "smaller", "larger", "smallerEq", "largerEq", "compare", "deepEqual"]
                },
                setCartesian: {
                    name: "setCartesian",
                    category: "Set",
                    syntax: ["setCartesian(set1, set2)"],
                    description: "Create the cartesian product of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
                    examples: ["setCartesian([1, 2], [3, 4])"],
                    seealso: ["setUnion", "setIntersect", "setDifference", "setPowerset"]
                },
                setDifference: {
                    name: "setDifference",
                    category: "Set",
                    syntax: ["setDifference(set1, set2)"],
                    description: "Create the difference of two (multi)sets: every element of set1, that is not the element of set2. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
                    examples: ["setDifference([1, 2, 3, 4], [3, 4, 5, 6])", "setDifference([[1, 2], [3, 4]], [[3, 4], [5, 6]])"],
                    seealso: ["setUnion", "setIntersect", "setSymDifference"]
                },
                setDistinct: {
                    name: "setDistinct",
                    category: "Set",
                    syntax: ["setDistinct(set)"],
                    description: "Collect the distinct elements of a multiset. A multi-dimension array will be converted to a single-dimension array before the operation.",
                    examples: ["setDistinct([1, 1, 1, 2, 2, 3])"],
                    seealso: ["setMultiplicity"]
                },
                setIntersect: {
                    name: "setIntersect",
                    category: "Set",
                    syntax: ["setIntersect(set1, set2)"],
                    description: "Create the intersection of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
                    examples: ["setIntersect([1, 2, 3, 4], [3, 4, 5, 6])", "setIntersect([[1, 2], [3, 4]], [[3, 4], [5, 6]])"],
                    seealso: ["setUnion", "setDifference"]
                },
                setIsSubset: {
                    name: "setIsSubset",
                    category: "Set",
                    syntax: ["setIsSubset(set1, set2)"],
                    description: "Check whether a (multi)set is a subset of another (multi)set: every element of set1 is the element of set2. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
                    examples: ["setIsSubset([1, 2], [3, 4, 5, 6])", "setIsSubset([3, 4], [3, 4, 5, 6])"],
                    seealso: ["setUnion", "setIntersect", "setDifference"]
                },
                setMultiplicity: {
                    name: "setMultiplicity",
                    category: "Set",
                    syntax: ["setMultiplicity(element, set)"],
                    description: "Count the multiplicity of an element in a multiset. A multi-dimension array will be converted to a single-dimension array before the operation.",
                    examples: ["setMultiplicity(1, [1, 2, 2, 4])", "setMultiplicity(2, [1, 2, 2, 4])"],
                    seealso: ["setDistinct", "setSize"]
                },
                setPowerset: {
                    name: "setPowerset",
                    category: "Set",
                    syntax: ["setPowerset(set)"],
                    description: "Create the powerset of a (multi)set: the powerset contains very possible subsets of a (multi)set. A multi-dimension array will be converted to a single-dimension array before the operation.",
                    examples: ["setPowerset([1, 2, 3])"],
                    seealso: ["setCartesian"]
                },
                setSize: {
                    name: "setSize",
                    category: "Set",
                    syntax: ["setSize(set)", "setSize(set, unique)"],
                    description: 'Count the number of elements of a (multi)set. When the second parameter "unique" is true, count only the unique values. A multi-dimension array will be converted to a single-dimension array before the operation.',
                    examples: ["setSize([1, 2, 2, 4])", "setSize([1, 2, 2, 4], true)"],
                    seealso: ["setUnion", "setIntersect", "setDifference"]
                },
                setSymDifference: {
                    name: "setSymDifference",
                    category: "Set",
                    syntax: ["setSymDifference(set1, set2)"],
                    description: "Create the symmetric difference of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
                    examples: ["setSymDifference([1, 2, 3, 4], [3, 4, 5, 6])", "setSymDifference([[1, 2], [3, 4]], [[3, 4], [5, 6]])"],
                    seealso: ["setUnion", "setIntersect", "setDifference"]
                },
                setUnion: {
                    name: "setUnion",
                    category: "Set",
                    syntax: ["setUnion(set1, set2)"],
                    description: "Create the union of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.",
                    examples: ["setUnion([1, 2, 3, 4], [3, 4, 5, 6])", "setUnion([[1, 2], [3, 4]], [[3, 4], [5, 6]])"],
                    seealso: ["setIntersect", "setDifference"]
                },
                erf: {
                    name: "erf",
                    category: "Special",
                    syntax: ["erf(x)"],
                    description: "Compute the erf function of a value using a rational Chebyshev approximations for different intervals of x",
                    examples: ["erf(0.2)", "erf(-0.5)", "erf(4)"],
                    seealso: []
                },
                mad: {
                    name: "mad",
                    category: "Statistics",
                    syntax: ["mad(a, b, c, ...)", "mad(A)"],
                    description: "Compute the median absolute deviation of a matrix or a list with values. The median absolute deviation is defined as the median of the absolute deviations from the median.",
                    examples: ["mad(10, 20, 30)", "mad([1, 2, 3])"],
                    seealso: ["mean", "median", "std", "abs"]
                },
                max: {
                    name: "max",
                    category: "Statistics",
                    syntax: ["max(a, b, c, ...)", "max(A)", "max(A, dim)"],
                    description: "Compute the maximum value of a list of values.",
                    examples: ["max(2, 3, 4, 1)", "max([2, 3, 4, 1])", "max([2, 5; 4, 3])", "max([2, 5; 4, 3], 1)", "max([2, 5; 4, 3], 2)", "max(2.7, 7.1, -4.5, 2.0, 4.1)", "min(2.7, 7.1, -4.5, 2.0, 4.1)"],
                    seealso: ["mean", "median", "min", "prod", "std", "sum", "variance"]
                },
                mean: {
                    name: "mean",
                    category: "Statistics",
                    syntax: ["mean(a, b, c, ...)", "mean(A)", "mean(A, dim)"],
                    description: "Compute the arithmetic mean of a list of values.",
                    examples: ["mean(2, 3, 4, 1)", "mean([2, 3, 4, 1])", "mean([2, 5; 4, 3])", "mean([2, 5; 4, 3], 1)", "mean([2, 5; 4, 3], 2)", "mean([1.0, 2.7, 3.2, 4.0])"],
                    seealso: ["max", "median", "min", "prod", "std", "sum", "variance"]
                },
                median: {
                    name: "median",
                    category: "Statistics",
                    syntax: ["median(a, b, c, ...)", "median(A)"],
                    description: "Compute the median of all values. The values are sorted and the middle value is returned. In case of an even number of values, the average of the two middle values is returned.",
                    examples: ["median(5, 2, 7)", "median([3, -1, 5, 7])"],
                    seealso: ["max", "mean", "min", "prod", "std", "sum", "variance", "quantileSeq"]
                },
                min: {
                    name: "min",
                    category: "Statistics",
                    syntax: ["min(a, b, c, ...)", "min(A)", "min(A, dim)"],
                    description: "Compute the minimum value of a list of values.",
                    examples: ["min(2, 3, 4, 1)", "min([2, 3, 4, 1])", "min([2, 5; 4, 3])", "min([2, 5; 4, 3], 1)", "min([2, 5; 4, 3], 2)", "min(2.7, 7.1, -4.5, 2.0, 4.1)", "max(2.7, 7.1, -4.5, 2.0, 4.1)"],
                    seealso: ["max", "mean", "median", "prod", "std", "sum", "variance"]
                },
                mode: {
                    name: "mode",
                    category: "Statistics",
                    syntax: ["mode(a, b, c, ...)", "mode(A)", "mode(A, a, b, B, c, ...)"],
                    description: "Computes the mode of all values as an array. In case mode being more than one, multiple values are returned in an array.",
                    examples: ["mode(2, 1, 4, 3, 1)", "mode([1, 2.7, 3.2, 4, 2.7])", "mode(1, 4, 6, 1, 6)"],
                    seealso: ["max", "mean", "min", "median", "prod", "std", "sum", "variance"]
                },
                prod: {
                    name: "prod",
                    category: "Statistics",
                    syntax: ["prod(a, b, c, ...)", "prod(A)"],
                    description: "Compute the product of all values.",
                    examples: ["prod(2, 3, 4)", "prod([2, 3, 4])", "prod([2, 5; 4, 3])"],
                    seealso: ["max", "mean", "min", "median", "min", "std", "sum", "variance"]
                },
                quantileSeq: {
                    name: "quantileSeq",
                    category: "Statistics",
                    syntax: ["quantileSeq(A, prob[, sorted])", "quantileSeq(A, [prob1, prob2, ...][, sorted])", "quantileSeq(A, N[, sorted])"],
                    description: "Compute the prob order quantile of a matrix or a list with values. The sequence is sorted and the middle value is returned. Supported types of sequence values are: Number, BigNumber, Unit Supported types of probablity are: Number, BigNumber. \n\nIn case of a (multi dimensional) array or matrix, the prob order quantile of all elements will be calculated.",
                    examples: ["quantileSeq([3, -1, 5, 7], 0.5)", "quantileSeq([3, -1, 5, 7], [1/3, 2/3])", "quantileSeq([3, -1, 5, 7], 2)", "quantileSeq([-1, 3, 5, 7], 0.5, true)"],
                    seealso: ["mean", "median", "min", "max", "prod", "std", "sum", "variance"]
                },
                std: {
                    name: "std",
                    category: "Statistics",
                    syntax: ["std(a, b, c, ...)", "std(A)", "std(A, normalization)"],
                    description: 'Compute the standard deviation of all values, defined as std(A) = sqrt(variance(A)). Optional parameter normalization can be "unbiased" (default), "uncorrected", or "biased".',
                    examples: ["std(2, 4, 6)", "std([2, 4, 6, 8])", 'std([2, 4, 6, 8], "uncorrected")', 'std([2, 4, 6, 8], "biased")', "std([1, 2, 3; 4, 5, 6])"],
                    seealso: ["max", "mean", "min", "median", "prod", "sum", "variance"]
                },
                sum: {
                    name: "sum",
                    category: "Statistics",
                    syntax: ["sum(a, b, c, ...)", "sum(A)"],
                    description: "Compute the sum of all values.",
                    examples: ["sum(2, 3, 4, 1)", "sum([2, 3, 4, 1])", "sum([2, 5; 4, 3])"],
                    seealso: ["max", "mean", "median", "min", "prod", "std", "sum", "variance"]
                },
                variance: {
                    name: "variance",
                    category: "Statistics",
                    syntax: ["variance(a, b, c, ...)", "variance(A)", "variance(A, normalization)"],
                    description: 'Compute the variance of all values. Optional parameter normalization can be "unbiased" (default), "uncorrected", or "biased".',
                    examples: ["variance(2, 4, 6)", "variance([2, 4, 6, 8])", 'variance([2, 4, 6, 8], "uncorrected")', 'variance([2, 4, 6, 8], "biased")', "variance([1, 2, 3; 4, 5, 6])"],
                    seealso: ["max", "mean", "min", "median", "min", "prod", "std", "sum"]
                },
                acos: {
                    name: "acos",
                    category: "Trigonometry",
                    syntax: ["acos(x)"],
                    description: "Compute the inverse cosine of a value in radians.",
                    examples: ["acos(0.5)", "acos(cos(2.3))"],
                    seealso: ["cos", "atan", "asin"]
                },
                acosh: {
                    name: "acosh",
                    category: "Trigonometry",
                    syntax: ["acosh(x)"],
                    description: "Calculate the hyperbolic arccos of a value, defined as `acosh(x) = ln(sqrt(x^2 - 1) + x)`.",
                    examples: ["acosh(1.5)"],
                    seealso: ["cosh", "asinh", "atanh"]
                },
                acot: {
                    name: "acot",
                    category: "Trigonometry",
                    syntax: ["acot(x)"],
                    description: "Calculate the inverse cotangent of a value.",
                    examples: ["acot(0.5)", "acot(cot(0.5))", "acot(2)"],
                    seealso: ["cot", "atan"]
                },
                acoth: {
                    name: "acoth",
                    category: "Trigonometry",
                    syntax: ["acoth(x)"],
                    description: "Calculate the hyperbolic arccotangent of a value, defined as `acoth(x) = (ln((x+1)/x) + ln(x/(x-1))) / 2`.",
                    examples: ["acoth(2)", "acoth(0.5)"],
                    seealso: ["acsch", "asech"]
                },
                acsc: {
                    name: "acsc",
                    category: "Trigonometry",
                    syntax: ["acsc(x)"],
                    description: "Calculate the inverse cotangent of a value.",
                    examples: ["acsc(2)", "acsc(csc(0.5))", "acsc(0.5)"],
                    seealso: ["csc", "asin", "asec"]
                },
                acsch: {
                    name: "acsch",
                    category: "Trigonometry",
                    syntax: ["acsch(x)"],
                    description: "Calculate the hyperbolic arccosecant of a value, defined as `acsch(x) = ln(1/x + sqrt(1/x^2 + 1))`.",
                    examples: ["acsch(0.5)"],
                    seealso: ["asech", "acoth"]
                },
                asec: {
                    name: "asec",
                    category: "Trigonometry",
                    syntax: ["asec(x)"],
                    description: "Calculate the inverse secant of a value.",
                    examples: ["asec(0.5)", "asec(sec(0.5))", "asec(2)"],
                    seealso: ["acos", "acot", "acsc"]
                },
                asech: {
                    name: "asech",
                    category: "Trigonometry",
                    syntax: ["asech(x)"],
                    description: "Calculate the inverse secant of a value.",
                    examples: ["asech(0.5)"],
                    seealso: ["acsch", "acoth"]
                },
                asin: {
                    name: "asin",
                    category: "Trigonometry",
                    syntax: ["asin(x)"],
                    description: "Compute the inverse sine of a value in radians.",
                    examples: ["asin(0.5)", "asin(sin(0.5))"],
                    seealso: ["sin", "acos", "atan"]
                },
                asinh: {
                    name: "asinh",
                    category: "Trigonometry",
                    syntax: ["asinh(x)"],
                    description: "Calculate the hyperbolic arcsine of a value, defined as `asinh(x) = ln(x + sqrt(x^2 + 1))`.",
                    examples: ["asinh(0.5)"],
                    seealso: ["acosh", "atanh"]
                },
                atan: {
                    name: "atan",
                    category: "Trigonometry",
                    syntax: ["atan(x)"],
                    description: "Compute the inverse tangent of a value in radians.",
                    examples: ["atan(0.5)", "atan(tan(0.5))"],
                    seealso: ["tan", "acos", "asin"]
                },
                atanh: {
                    name: "atanh",
                    category: "Trigonometry",
                    syntax: ["atanh(x)"],
                    description: "Calculate the hyperbolic arctangent of a value, defined as `atanh(x) = ln((1 + x)/(1 - x)) / 2`.",
                    examples: ["atanh(0.5)"],
                    seealso: ["acosh", "asinh"]
                },
                atan2: {
                    name: "atan2",
                    category: "Trigonometry",
                    syntax: ["atan2(y, x)"],
                    description: "Computes the principal value of the arc tangent of y/x in radians.",
                    examples: ["atan2(2, 2) / pi", "angle = 60 deg in rad", "x = cos(angle)", "y = sin(angle)", "atan2(y, x)"],
                    seealso: ["sin", "cos", "tan"]
                },
                cos: {
                    name: "cos",
                    category: "Trigonometry",
                    syntax: ["cos(x)"],
                    description: "Compute the cosine of x in radians.",
                    examples: ["cos(2)", "cos(pi / 4) ^ 2", "cos(180 deg)", "cos(60 deg)", "sin(0.2)^2 + cos(0.2)^2"],
                    seealso: ["acos", "sin", "tan"]
                },
                cosh: {
                    name: "cosh",
                    category: "Trigonometry",
                    syntax: ["cosh(x)"],
                    description: "Compute the hyperbolic cosine of x in radians.",
                    examples: ["cosh(0.5)"],
                    seealso: ["sinh", "tanh", "coth"]
                },
                cot: {
                    name: "cot",
                    category: "Trigonometry",
                    syntax: ["cot(x)"],
                    description: "Compute the cotangent of x in radians. Defined as 1/tan(x)",
                    examples: ["cot(2)", "1 / tan(2)"],
                    seealso: ["sec", "csc", "tan"]
                },
                coth: {
                    name: "coth",
                    category: "Trigonometry",
                    syntax: ["coth(x)"],
                    description: "Compute the hyperbolic cotangent of x in radians.",
                    examples: ["coth(2)", "1 / tanh(2)"],
                    seealso: ["sech", "csch", "tanh"]
                },
                csc: {
                    name: "csc",
                    category: "Trigonometry",
                    syntax: ["csc(x)"],
                    description: "Compute the cosecant of x in radians. Defined as 1/sin(x)",
                    examples: ["csc(2)", "1 / sin(2)"],
                    seealso: ["sec", "cot", "sin"]
                },
                csch: {
                    name: "csch",
                    category: "Trigonometry",
                    syntax: ["csch(x)"],
                    description: "Compute the hyperbolic cosecant of x in radians. Defined as 1/sinh(x)",
                    examples: ["csch(2)", "1 / sinh(2)"],
                    seealso: ["sech", "coth", "sinh"]
                },
                sec: {
                    name: "sec",
                    category: "Trigonometry",
                    syntax: ["sec(x)"],
                    description: "Compute the secant of x in radians. Defined as 1/cos(x)",
                    examples: ["sec(2)", "1 / cos(2)"],
                    seealso: ["cot", "csc", "cos"]
                },
                sech: {
                    name: "sech",
                    category: "Trigonometry",
                    syntax: ["sech(x)"],
                    description: "Compute the hyperbolic secant of x in radians. Defined as 1/cosh(x)",
                    examples: ["sech(2)", "1 / cosh(2)"],
                    seealso: ["coth", "csch", "cosh"]
                },
                sin: {
                    name: "sin",
                    category: "Trigonometry",
                    syntax: ["sin(x)"],
                    description: "Compute the sine of x in radians.",
                    examples: ["sin(2)", "sin(pi / 4) ^ 2", "sin(90 deg)", "sin(30 deg)", "sin(0.2)^2 + cos(0.2)^2"],
                    seealso: ["asin", "cos", "tan"]
                },
                sinh: {
                    name: "sinh",
                    category: "Trigonometry",
                    syntax: ["sinh(x)"],
                    description: "Compute the hyperbolic sine of x in radians.",
                    examples: ["sinh(0.5)"],
                    seealso: ["cosh", "tanh"]
                },
                tan: {
                    name: "tan",
                    category: "Trigonometry",
                    syntax: ["tan(x)"],
                    description: "Compute the tangent of x in radians.",
                    examples: ["tan(0.5)", "sin(0.5) / cos(0.5)", "tan(pi / 4)", "tan(45 deg)"],
                    seealso: ["atan", "sin", "cos"]
                },
                tanh: {
                    name: "tanh",
                    category: "Trigonometry",
                    syntax: ["tanh(x)"],
                    description: "Compute the hyperbolic tangent of x in radians.",
                    examples: ["tanh(0.5)", "sinh(0.5) / cosh(0.5)"],
                    seealso: ["sinh", "cosh"]
                },
                to: {
                    name: "to",
                    category: "Units",
                    syntax: ["x to unit", "to(x, unit)"],
                    description: "Change the unit of a value.",
                    examples: ["5 inch to cm", "3.2kg to g", "16 bytes in bits"],
                    seealso: []
                },
                clone: {
                    name: "clone",
                    category: "Utils",
                    syntax: ["clone(x)"],
                    description: "Clone a variable. Creates a copy of primitive variables,and a deep copy of matrices",
                    examples: ["clone(3.5)", "clone(2 - 4i)", "clone(45 deg)", "clone([1, 2; 3, 4])", 'clone("hello world")'],
                    seealso: []
                },
                format: {
                    name: "format",
                    category: "Utils",
                    syntax: ["format(value)", "format(value, precision)"],
                    description: "Format a value of any type as string.",
                    examples: ["format(2.3)", "format(3 - 4i)", "format([])", "format(pi, 3)"],
                    seealso: ["print"]
                },
                isNaN: {
                    name: "isNaN",
                    category: "Utils",
                    syntax: ["isNaN(x)"],
                    description: "Test whether a value is NaN (not a number)",
                    examples: ["isNaN(2)", "isNaN(0 / 0)", "isNaN(NaN)", "isNaN(Infinity)"],
                    seealso: ["isNegative", "isNumeric", "isPositive", "isZero"]
                },
                isInteger: {
                    name: "isInteger",
                    category: "Utils",
                    syntax: ["isInteger(x)"],
                    description: "Test whether a value is an integer number.",
                    examples: ["isInteger(2)", "isInteger(3.5)", "isInteger([3, 0.5, -2])"],
                    seealso: ["isNegative", "isNumeric", "isPositive", "isZero"]
                },
                isNegative: {
                    name: "isNegative",
                    category: "Utils",
                    syntax: ["isNegative(x)"],
                    description: "Test whether a value is negative: smaller than zero.",
                    examples: ["isNegative(2)", "isNegative(0)", "isNegative(-4)", "isNegative([3, 0.5, -2])"],
                    seealso: ["isInteger", "isNumeric", "isPositive", "isZero"]
                },
                isNumeric: {
                    name: "isNumeric",
                    category: "Utils",
                    syntax: ["isNumeric(x)"],
                    description: "Test whether a value is a numeric value. Returns true when the input is a number, BigNumber, Fraction, or boolean.",
                    examples: ["isNumeric(2)", 'isNumeric("2")', 'hasNumericValue("2")', "isNumeric(0)", "isNumeric(bignumber(500))", "isNumeric(fraction(0.125))", "isNumeric(2 + 3i)", 'isNumeric([2.3, "foo", false])'],
                    seealso: ["isInteger", "isZero", "isNegative", "isPositive", "isNaN", "hasNumericValue"]
                },
                hasNumericValue: {
                    name: "hasNumericValue",
                    category: "Utils",
                    syntax: ["hasNumericValue(x)"],
                    description: "Test whether a value is an numeric value. In case of a string, true is returned if the string contains a numeric value.",
                    examples: ["hasNumericValue(2)", 'hasNumericValue("2")', 'isNumeric("2")', "hasNumericValue(0)", "hasNumericValue(bignumber(500))", "hasNumericValue(fraction(0.125))", "hasNumericValue(2 + 3i)", 'hasNumericValue([2.3, "foo", false])'],
                    seealso: ["isInteger", "isZero", "isNegative", "isPositive", "isNaN", "isNumeric"]
                },
                isPositive: {
                    name: "isPositive",
                    category: "Utils",
                    syntax: ["isPositive(x)"],
                    description: "Test whether a value is positive: larger than zero.",
                    examples: ["isPositive(2)", "isPositive(0)", "isPositive(-4)", "isPositive([3, 0.5, -2])"],
                    seealso: ["isInteger", "isNumeric", "isNegative", "isZero"]
                },
                isPrime: {
                    name: "isPrime",
                    category: "Utils",
                    syntax: ["isPrime(x)"],
                    description: "Test whether a value is prime: has no divisors other than itself and one.",
                    examples: ["isPrime(3)", "isPrime(-2)", "isPrime([2, 17, 100])"],
                    seealso: ["isInteger", "isNumeric", "isNegative", "isZero"]
                },
                isZero: {
                    name: "isZero",
                    category: "Utils",
                    syntax: ["isZero(x)"],
                    description: "Test whether a value is zero.",
                    examples: ["isZero(2)", "isZero(0)", "isZero(-4)", "isZero([3, 0, -2, 0])"],
                    seealso: ["isInteger", "isNumeric", "isNegative", "isPositive"]
                },
                typeOf: {
                    name: "typeOf",
                    category: "Utils",
                    syntax: ["typeOf(x)"],
                    description: "Get the type of a variable.",
                    examples: ["typeOf(3.5)", "typeOf(2 - 4i)", "typeOf(45 deg)", 'typeOf("hello world")'],
                    seealso: ["getMatrixDataType"]
                },
                numeric: {
                    name: "numeric",
                    category: "Utils",
                    syntax: ["numeric(x)"],
                    description: "Convert a numeric input to a specific numeric type: number, BigNumber, or Fraction.",
                    examples: ['numeric("4")', 'numeric("4", "number")', 'numeric("4", "BigNumber")', 'numeric("4", "Fraction)', 'numeric(4, "Fraction")', 'numeric(fraction(2, 5), "number)'],
                    seealso: ["number", "fraction", "bignumber", "string", "format"]
                }
            }, El = ["typed", "mathWithTransform", "Help"], Sl = Object(s.a)("help", El, function (e) {
                var t = e.typed, a = e.mathWithTransform, o = e.Help;
                return t("help", {
                    any: function (e) {
                        var t, r = e;
                        if ("string" != typeof e) for (t in a) if (Object(ae.f)(a, t) && e === a[t]) {
                            r = t;
                            break
                        }
                        var n = zi(jl, r);
                        if (n) return new o(n);
                        var i = "function" == typeof r ? r.name : r;
                        throw new Error('No documentation found on "' + i + '"')
                    }
                })
            }), Al = ["typed", "Chain"], Cl = Object(s.a)("chain", Al, function (e) {
                var t = e.typed, r = e.Chain;
                return t("chain", {
                    "": function () {
                        return new r
                    }, any: function (e) {
                        return new r(e)
                    }
                })
            }), Tl = ["typed", "matrix", "subtract", "multiply", "unaryMinus", "lup"],
            _l = Object(s.a)("det", Tl, function (e) {
                var t = e.typed, n = e.matrix, f = e.subtract, l = e.multiply, p = e.unaryMinus, m = e.lup;
                return t("det", {
                    any: function (e) {
                        return Object(ae.a)(e)
                    }, "Array | Matrix": function (e) {
                        var t = Object(ie.v)(e) ? e.size() : Array.isArray(e) ? (e = n(e)).size() : [];
                        switch (t.length) {
                            case 0:
                                return Object(ae.a)(e);
                            case 1:
                                if (1 === t[0]) return Object(ae.a)(e.valueOf()[0]);
                                throw new RangeError("Matrix must be square (size: " + Object(V.d)(t) + ")");
                            case 2:
                                var r = t[0];
                                if (r === t[1]) return function (e, t) {
                                    {
                                        if (1 === t) return Object(ae.a)(e[0][0]);
                                        if (2 === t) return f(l(e[0][0], e[1][1]), l(e[1][0], e[0][1]));
                                        for (var r = m(e), n = r.U[0][0], i = 1; i < t; i++) n = l(n, r.U[i][i]);
                                        for (var a = 0, o = 0, s = []; ;) {
                                            for (; s[o];) o++;
                                            if (t <= o) break;
                                            for (var u = o, c = 0; !s[r.p[u]];) s[r.p[u]] = !0, u = r.p[u], c++;
                                            c % 2 == 0 && a++
                                        }
                                        return a % 2 == 0 ? n : p(n)
                                    }
                                }(e.clone().valueOf(), r);
                                throw new RangeError("Matrix must be square (size: " + Object(V.d)(t) + ")");
                            default:
                                throw new RangeError("Matrix must be two dimensional (size: " + Object(V.d)(t) + ")")
                        }
                    }
                })
            }),
            ql = ["typed", "matrix", "divideScalar", "addScalar", "multiply", "unaryMinus", "det", "identity", "abs"],
            Il = Object(s.a)("inv", ql, function (e) {
                var t = e.typed, i = e.matrix, v = e.divideScalar, b = e.addScalar, x = e.multiply, w = e.unaryMinus,
                    N = e.det, O = e.identity, M = e.abs;
                return t("inv", {
                    "Array | Matrix": function (e) {
                        var t = Object(ie.v)(e) ? e.size() : Object(q.a)(e);
                        switch (t.length) {
                            case 1:
                                if (1 === t[0]) return Object(ie.v)(e) ? i([v(1, e.valueOf()[0])]) : [v(1, e[0])];
                                throw new RangeError("Matrix must be square (size: " + Object(V.d)(t) + ")");
                            case 2:
                                var r = t[0], n = t[1];
                                if (r === n) return Object(ie.v)(e) ? i(a(e.valueOf(), r, n), e.storage()) : a(e, r, n);
                                throw new RangeError("Matrix must be square (size: " + Object(V.d)(t) + ")");
                            default:
                                throw new RangeError("Matrix must be two dimensional (size: " + Object(V.d)(t) + ")")
                        }
                    }, any: function (e) {
                        return v(1, e)
                    }
                });

                function a(e, t, r) {
                    var n, i, a, o;
                    if (1 === t) {
                        if (0 === (a = e[0][0])) throw Error("Cannot calculate inverse, determinant is zero");
                        return [[v(1, a)]]
                    }
                    if (2 === t) {
                        var s = N(e);
                        if (0 === s) throw Error("Cannot calculate inverse, determinant is zero");
                        return [[v(e[1][1], s), v(w(e[0][1]), s)], [v(w(e[1][0]), s), v(e[0][0], s)]]
                    }
                    var u = e.concat();
                    for (m = 0; m < t; m++) u[m] = u[m].concat();
                    for (var c = O(t).valueOf(), f = 0; f < r; f++) {
                        for (var l = M(u[f][f]), p = f, m = f + 1; m < t;) M(u[m][f]) > l && (l = M(u[m][f]), p = m), m++;
                        if (0 === l) throw Error("Cannot calculate inverse, determinant is zero");
                        (m = p) !== f && (o = u[f], u[f] = u[m], u[m] = o, o = c[f], c[f] = c[m], c[m] = o);
                        var h = u[f], d = c[f];
                        for (m = 0; m < t; m++) {
                            var y = u[m], g = c[m];
                            if (m !== f) {
                                if (0 !== y[f]) {
                                    for (i = v(w(y[f]), h[f]), n = f; n < r; n++) y[n] = b(y[n], x(i, h[n]));
                                    for (n = 0; n < r; n++) g[n] = b(g[n], x(i, d[n]))
                                }
                            } else {
                                for (i = h[f], n = f; n < r; n++) y[n] = v(y[n], i);
                                for (n = 0; n < r; n++) g[n] = v(g[n], i)
                            }
                        }
                    }
                    return c
                }
            }),
            kl = ["config", "typed", "matrix", "addScalar", "equal", "subtract", "abs", "atan", "cos", "sin", "multiplyScalar", "inv", "bignumber", "multiply", "add"],
            Bl = Object(s.a)("eigs", kl, function (e) {
                var d = e.config, t = e.typed, i = e.matrix, y = e.addScalar, g = e.subtract, o = e.equal, l = e.abs,
                    p = e.atan, v = e.cos, b = e.sin, x = e.multiplyScalar, m = e.inv, w = e.bignumber, N = e.multiply,
                    O = e.add;

                function a(e, t) {
                    var r = e.datatype();
                    if (void 0 === r && (r = e.getDataType()), "number" !== r && "BigNumber" !== r && "Fraction" !== r) throw"mixed" === r ? new TypeError("Mixed matrix element type is not supported") : new TypeError("Matrix element type not supported (" + r + ")");
                    if (!function (e, t) {
                        for (var r = 0; r < t; r++) for (var n = r; n < t; n++) if (!o(e[r][n], e[n][r])) throw new TypeError("Input matrix is not symmetric")
                    }(e.toArray(), t), "number" === r) return s(e.toArray());
                    if ("Fraction" !== r) return "BigNumber" === r ? function (e) {
                        for (var t, r = e.length, n = l(d.epsilon / r), i = new Array(r), a = 0; a < r; a++) i[a] = E(r, 0), i[a][a] = 1;
                        var o = h(e);
                        for (; l(o[1]) >= l(n);) {
                            var s = o[0][0], u = o[0][1];
                            t = function (e, t, r) {
                                var n = g(t, e);
                                return l(n) <= d.epsilon ? w(-1).acos().div(4) : x(.5, p(N(2, r, m(n))))
                            }(e[s][s], e[u][u], e[s][u]), e = function (e, t, r, n) {
                                for (var i = e.length, a = w(v(t)), o = w(b(t)), s = x(a, a), u = x(o, o), c = E(i, w(0)), f = E(i, w(0)), l = N(w(2), a, o, e[r][n]), p = y(g(x(s, e[r][r]), l), x(u, e[n][n])), m = O(x(u, e[r][r]), l, x(s, e[n][n])), h = 0; h < i; h++) c[h] = g(x(a, e[r][h]), x(o, e[n][h])), f[h] = y(x(o, e[r][h]), x(a, e[n][h]));
                                e[r][r] = p, e[n][n] = m, e[r][n] = w(0), e[n][r] = w(0);
                                for (var d = 0; d < i; d++) d !== r && d !== n && (e[r][d] = c[d], e[d][r] = c[d], e[n][d] = f[d], e[d][n] = f[d]);
                                return e
                            }(e, t, s, u), i = function (e, t, r, n) {
                                for (var i = e.length, a = v(t), o = b(t), s = E(i, w(0)), u = E(i, w(0)), c = 0; c < i; c++) s[c] = g(x(a, e[c][r]), x(o, e[c][n])), u[c] = y(x(o, e[c][r]), x(a, e[c][n]));
                                for (var f = 0; f < i; f++) e[f][r] = s[f], e[f][n] = u[f];
                                return e
                            }(i, t, s, u), o = h(e)
                        }
                        for (var c = E(r, 0), f = 0; f < r; f++) c[f] = e[f][f];
                        return j(Object(ae.a)(c), Object(ae.a)(i))
                    }(e.toArray()) : void 0;
                    for (var n = e.toArray(), i = 0; i < t; i++) for (var a = i; a < t; a++) n[i][a] = n[i][a].valueOf(), n[a][i] = n[i][a];
                    return s(e.toArray())
                }

                function s(e) {
                    for (var t, r = e.length, n = Math.abs(d.epsilon / r), i = new Array(r), a = 0; a < r; a++) i[a] = E(r, 0), i[a][a] = 1;
                    for (var o, s, u, c, f = M(e); Math.abs(f[1]) >= Math.abs(n);) {
                        var l = f[0][0], p = f[0][1];
                        o = e[l][l], s = e[p][p], u = e[l][p], c = s - o, e = function (e, t, r, n) {
                            for (var i = e.length, a = Math.cos(t), o = Math.sin(t), s = a * a, u = o * o, c = E(i, 0), f = E(i, 0), l = s * e[r][r] - 2 * a * o * e[r][n] + u * e[n][n], p = u * e[r][r] + 2 * a * o * e[r][n] + s * e[n][n], m = 0; m < i; m++) c[m] = a * e[r][m] - o * e[n][m], f[m] = o * e[r][m] + a * e[n][m];
                            e[r][r] = l, e[n][n] = p, e[r][n] = 0;
                            for (var h = e[n][r] = 0; h < i; h++) h !== r && h !== n && (e[r][h] = c[h], e[h][r] = c[h], e[n][h] = f[h], e[h][n] = f[h]);
                            return e
                        }(e, t = Math.abs(c) <= d.epsilon ? Math.PI / 4 : .5 * Math.atan(2 * u / (s - o)), l, p), i = function (e, t, r, n) {
                            for (var i = e.length, a = Math.cos(t), o = Math.sin(t), s = E(i, 0), u = E(i, 0), c = 0; c < i; c++) s[c] = a * e[c][r] - o * e[c][n], u[c] = o * e[c][r] + a * e[c][n];
                            for (var f = 0; f < i; f++) e[f][r] = s[f], e[f][n] = u[f];
                            return e
                        }(i, t, l, p), f = M(e)
                    }
                    for (var m = E(r, 0), h = 0; h < r; h++) m[h] = e[h][h];
                    return j(Object(ae.a)(m), Object(ae.a)(i))
                }

                function M(e) {
                    for (var t = e.length, r = 0, n = [0, 1], i = 0; i < t; i++) for (var a = i + 1; a < t; a++) Math.abs(r) < Math.abs(e[i][a]) && (r = Math.abs(e[i][a]), n = [i, a]);
                    return [n, r]
                }

                function h(e) {
                    for (var t = e.length, r = 0, n = [0, 1], i = 0; i < t; i++) for (var a = i + 1; a < t; a++) l(r) < l(e[i][a]) && (r = l(e[i][a]), n = [i, a]);
                    return [n, r]
                }

                function j(e, t) {
                    for (var r = e.length, n = Array(r), i = Array(r), a = 0; a < r; a++) i[a] = Array(r);
                    for (var o = 0; o < r; o++) {
                        for (var s = 0, u = e[0], c = 0; c < e.length; c++) e[c] < u && (u = e[s = c]);
                        n[o] = e.splice(s, 1)[0];
                        for (var f = 0; f < r; f++) i[f][o] = t[f][s], t[f].splice(s, 1)
                    }
                    return [Object(ae.a)(n), Object(ae.a)(i)]
                }

                function E(e, t) {
                    for (var r = new Array(e), n = 0; n < e; n++) r[n] = t;
                    return r
                }

                return t("eigs", {
                    Array: function (e) {
                        var t = i(e), r = t.size();
                        if (2 !== r.length || r[0] !== r[1]) throw new RangeError("Matrix must be square (size: " + Object(V.d)(r) + ")");
                        var n = a(t, r[0]);
                        return {values: n[0], vectors: n[1]}
                    }, Matrix: function (e) {
                        var t = e.size();
                        if (2 !== t.length || t[0] !== t[1]) throw new RangeError("Matrix must be square (size: " + Object(V.d)(t) + ")");
                        var r = a(e, t[0]);
                        return {values: i(r[0]), vectors: i(r[1])}
                    }
                })
            }), zl = ["typed", "abs", "add", "identity", "inv", "multiply"], Dl = Object(s.a)("expm", zl, function (e) {
                var t = e.typed, d = e.abs, y = e.add, g = e.identity, v = e.inv, b = e.multiply;
                return t("expm", {
                    Matrix: function (e) {
                        var t = e.size();
                        if (2 !== t.length || t[0] !== t[1]) throw new RangeError("Matrix must be square (size: " + Object(V.d)(t) + ")");
                        for (var r = t[0], n = function (e, t) {
                            for (var r = 0; r < 30; r++) for (var n = 0; n <= r; n++) {
                                var i = r - n;
                                if (function (e, t, r) {
                                    for (var n = 1, i = 2; i <= t; i++) n *= i;
                                    for (var a = n, o = t + 1; o <= 2 * t; o++) a *= o;
                                    var s = a * (2 * t + 1);
                                    return 8 * Math.pow(e / Math.pow(2, r), 2 * t) * n * n / (a * s)
                                }(e, n, i) < t) return {q: n, j: i}
                            }
                            throw new Error("Could not find acceptable parameters to compute the matrix exponential (try increasing maxSearchSize in expm.js)")
                        }(function (e) {
                            for (var t = e.size()[0], r = 0, n = 0; n < t; n++) {
                                for (var i = 0, a = 0; a < t; a++) i += d(e.get([n, a]));
                                r = Math.max(i, r)
                            }
                            return r
                        }(e), 1e-15), i = n.q, a = n.j, o = b(e, Math.pow(2, -a)), s = g(r), u = g(r), c = 1, f = o, l = -1, p = 1; p <= i; p++) 1 < p && (f = b(f, o), l = -l), s = y(s, b(c = c * (i - p + 1) / ((2 * i - p + 1) * p), f)), u = y(u, b(c * l, f));
                        for (var m = b(v(u), s), h = 0; h < a; h++) m = b(m, m);
                        return Object(ie.H)(e) ? e.createSparseMatrix(m) : m
                    }
                })
            }), Rl = ["typed", "abs", "add", "multiply", "sqrt", "subtract", "inv", "size", "max", "identity"],
            Pl = Object(s.a)("sqrtm", Rl, function (e) {
                var t = e.typed, o = e.abs, s = e.add, u = e.multiply, r = e.sqrt, c = e.subtract, f = e.inv,
                    l = e.size, p = e.max, m = e.identity, n = t("sqrtm", {
                        "Array | Matrix": function (e) {
                            var t = Object(ie.v)(e) ? e.size() : Object(q.a)(e);
                            switch (t.length) {
                                case 1:
                                    if (1 === t[0]) return r(e);
                                    throw new RangeError("Matrix must be square (size: " + Object(V.d)(t) + ")");
                                case 2:
                                    if (t[0] === t[1]) return function (e) {
                                        var t, r = 0, n = e, i = m(l(e));
                                        do {
                                            var a = n;
                                            if (n = u(.5, s(a, f(i))), i = u(.5, s(i, f(a))), t = p(o(c(n, a))), d < t && ++r > h) throw new Error("computing square root of matrix: iterative method could not converge")
                                        } while (d < t);
                                        return n
                                    }(e);
                                    throw new RangeError("Matrix must be square (size: " + Object(V.d)(t) + ")")
                            }
                        }
                    }), h = 1e3, d = 1e-6;
                return n
            }), Ul = ["typed", "matrix", "multiply", "equalScalar", "divideScalar", "inv"],
            Fl = Object(s.a)("divide", Ul, function (e) {
                var t = e.typed, r = e.matrix, n = e.multiply, i = e.equalScalar, a = e.divideScalar, o = e.inv,
                    s = ar({typed: t, equalScalar: i}), u = Xt({typed: t});
                return t("divide", Object(ae.e)({
                    "Array | Matrix, Array | Matrix": function (e, t) {
                        return n(e, o(t))
                    }, "DenseMatrix, any": function (e, t) {
                        return u(e, t, a, !1)
                    }, "SparseMatrix, any": function (e, t) {
                        return s(e, t, a, !1)
                    }, "Array, any": function (e, t) {
                        return u(r(e), t, a, !1).valueOf()
                    }, "any, Array | Matrix": function (e, t) {
                        return n(e, o(t))
                    }
                }, a.signatures))
            }), Ll = "distance",
            Hl = ["typed", "addScalar", "subtract", "divideScalar", "multiplyScalar", "unaryMinus", "sqrt", "abs"],
            $l = Object(s.a)(Ll, Hl, function (e) {
                var t = e.typed, l = e.addScalar, p = e.subtract, m = e.multiplyScalar, h = e.divideScalar,
                    s = e.unaryMinus, d = e.sqrt, u = e.abs;
                return t(Ll, {
                    "Array, Array, Array": function (e, t, r) {
                        if (2 !== e.length || 2 !== t.length || 2 !== r.length) throw new TypeError("Invalid Arguments: Try again");
                        if (!c(e)) throw new TypeError("Array with 2 numbers or BigNumbers expected for first argument");
                        if (!c(t)) throw new TypeError("Array with 2 numbers or BigNumbers expected for second argument");
                        if (!c(r)) throw new TypeError("Array with 2 numbers or BigNumbers expected for third argument");
                        var n = h(p(r[1], r[0]), p(t[1], t[0])), i = m(m(n, n), t[0]), a = s(m(n, t[0])), o = e[1];
                        return f(e[0], e[1], i, a, o)
                    }, "Object, Object, Object": function (e, t, r) {
                        if (2 !== Object.keys(e).length || 2 !== Object.keys(t).length || 2 !== Object.keys(r).length) throw new TypeError("Invalid Arguments: Try again");
                        if (!c(e)) throw new TypeError("Values of pointX and pointY should be numbers or BigNumbers");
                        if (!c(t)) throw new TypeError("Values of lineOnePtX and lineOnePtY should be numbers or BigNumbers");
                        if (!c(r)) throw new TypeError("Values of lineTwoPtX and lineTwoPtY should be numbers or BigNumbers");
                        if ("pointX" in e && "pointY" in e && "lineOnePtX" in t && "lineOnePtY" in t && "lineTwoPtX" in r && "lineTwoPtY" in r) {
                            var n = h(p(r.lineTwoPtY, r.lineTwoPtX), p(t.lineOnePtY, t.lineOnePtX)),
                                i = m(m(n, n), t.lineOnePtX), a = s(m(n, t.lineOnePtX)), o = e.pointX;
                            return f(e.pointX, e.pointY, i, a, o)
                        }
                        throw new TypeError("Key names do not match")
                    }, "Array, Array": function (e, t) {
                        if (2 === e.length && 3 === t.length) {
                            if (!c(e)) throw new TypeError("Array with 2 numbers or BigNumbers expected for first argument");
                            if (!n(t)) throw new TypeError("Array with 3 numbers or BigNumbers expected for second argument");
                            return f(e[0], e[1], t[0], t[1], t[2])
                        }
                        if (3 === e.length && 6 === t.length) {
                            if (!n(e)) throw new TypeError("Array with 3 numbers or BigNumbers expected for first argument");
                            if (!a(t)) throw new TypeError("Array with 6 numbers or BigNumbers expected for second argument");
                            return y(e[0], e[1], e[2], t[0], t[1], t[2], t[3], t[4], t[5])
                        }
                        if (e.length === t.length && 0 < e.length) {
                            if (!i(e)) throw new TypeError("All values of an array should be numbers or BigNumbers");
                            if (!i(t)) throw new TypeError("All values of an array should be numbers or BigNumbers");
                            return g(e, t)
                        }
                        throw new TypeError("Invalid Arguments: Try again")
                    }, "Object, Object": function (e, t) {
                        if (2 === Object.keys(e).length && 3 === Object.keys(t).length) {
                            if (!c(e)) throw new TypeError("Values of pointX and pointY should be numbers or BigNumbers");
                            if (!n(t)) throw new TypeError("Values of xCoeffLine, yCoeffLine and constant should be numbers or BigNumbers");
                            if ("pointX" in e && "pointY" in e && "xCoeffLine" in t && "yCoeffLine" in t && "constant" in t) return f(e.pointX, e.pointY, t.xCoeffLine, t.yCoeffLine, t.constant);
                            throw new TypeError("Key names do not match")
                        }
                        if (3 === Object.keys(e).length && 6 === Object.keys(t).length) {
                            if (!n(e)) throw new TypeError("Values of pointX, pointY and pointZ should be numbers or BigNumbers");
                            if (!a(t)) throw new TypeError("Values of x0, y0, z0, a, b and c should be numbers or BigNumbers");
                            if ("pointX" in e && "pointY" in e && "x0" in t && "y0" in t && "z0" in t && "a" in t && "b" in t && "c" in t) return y(e.pointX, e.pointY, e.pointZ, t.x0, t.y0, t.z0, t.a, t.b, t.c);
                            throw new TypeError("Key names do not match")
                        }
                        if (2 === Object.keys(e).length && 2 === Object.keys(t).length) {
                            if (!c(e)) throw new TypeError("Values of pointOneX and pointOneY should be numbers or BigNumbers");
                            if (!c(t)) throw new TypeError("Values of pointTwoX and pointTwoY should be numbers or BigNumbers");
                            if ("pointOneX" in e && "pointOneY" in e && "pointTwoX" in t && "pointTwoY" in t) return g([e.pointOneX, e.pointOneY], [t.pointTwoX, t.pointTwoY]);
                            throw new TypeError("Key names do not match")
                        }
                        if (3 !== Object.keys(e).length || 3 !== Object.keys(t).length) throw new TypeError("Invalid Arguments: Try again");
                        if (!n(e)) throw new TypeError("Values of pointOneX, pointOneY and pointOneZ should be numbers or BigNumbers");
                        if (!n(t)) throw new TypeError("Values of pointTwoX, pointTwoY and pointTwoZ should be numbers or BigNumbers");
                        if ("pointOneX" in e && "pointOneY" in e && "pointOneZ" in e && "pointTwoX" in t && "pointTwoY" in t && "pointTwoZ" in t) return g([e.pointOneX, e.pointOneY, e.pointOneZ], [t.pointTwoX, t.pointTwoY, t.pointTwoZ]);
                        throw new TypeError("Key names do not match")
                    }, Array: function (e) {
                        if (!function (e) {
                            if (2 === e[0].length && r(e[0][0]) && r(e[0][1])) {
                                if (e.some(function (e) {
                                    return 2 !== e.length || !r(e[0]) || !r(e[1])
                                })) return !1
                            } else {
                                if (!(3 === e[0].length && r(e[0][0]) && r(e[0][1]) && r(e[0][2]))) return !1;
                                if (e.some(function (e) {
                                    return 3 !== e.length || !r(e[0]) || !r(e[1]) || !r(e[2])
                                })) return !1
                            }
                            return !0
                        }(e)) throw new TypeError("Incorrect array format entered for pairwise distance calculation");
                        return function (e) {
                            for (var t = [], r = [], n = [], i = 0; i < e.length - 1; i++) for (var a = i + 1; a < e.length; a++) 2 === e[0].length ? (r = [e[i][0], e[i][1]], n = [e[a][0], e[a][1]]) : 3 === e[0].length && (r = [e[i][0], e[i][1], e[i][2]], n = [e[a][0], e[a][1], e[a][2]]), t.push(g(r, n));
                            return t
                        }(e)
                    }
                });

                function r(e) {
                    return "number" == typeof e || Object(ie.e)(e)
                }

                function c(e) {
                    return e.constructor !== Array && (e = o(e)), r(e[0]) && r(e[1])
                }

                function n(e) {
                    return e.constructor !== Array && (e = o(e)), r(e[0]) && r(e[1]) && r(e[2])
                }

                function i(e) {
                    return Array.isArray(e) || (e = o(e)), e.every(r)
                }

                function a(e) {
                    return e.constructor !== Array && (e = o(e)), r(e[0]) && r(e[1]) && r(e[2]) && r(e[3]) && r(e[4]) && r(e[5])
                }

                function o(e) {
                    for (var t = Object.keys(e), r = [], n = 0; n < t.length; n++) r.push(e[t[n]]);
                    return r
                }

                function f(e, t, r, n, i) {
                    var a = u(l(l(m(r, e), m(n, t)), i)), o = d(l(m(r, r), m(n, n)));
                    return h(a, o)
                }

                function y(e, t, r, n, i, a, o, s, u) {
                    var c = [p(m(p(i, t), u), m(p(a, r), s)), p(m(p(a, r), o), m(p(n, e), u)), p(m(p(n, e), s), m(p(i, t), o))],
                        c = d(l(l(m(c[0], c[0]), m(c[1], c[1])), m(c[2], c[2]))),
                        f = d(l(l(m(o, o), m(s, s)), m(u, u)));
                    return h(c, f)
                }

                function g(e, t) {
                    for (var r = e.length, n = 0, i = 0, a = 0; a < r; a++) i = p(e[a], t[a]), n = l(m(i, i), n);
                    return d(n)
                }
            }),
            Gl = ["typed", "config", "abs", "add", "addScalar", "matrix", "multiply", "multiplyScalar", "divideScalar", "subtract", "smaller", "equalScalar"],
            Zl = Object(s.a)("intersect", Gl, function (e) {
                var t = e.typed, C = e.config, T = e.abs, _ = e.add, q = e.addScalar, i = e.matrix, I = e.multiply,
                    k = e.multiplyScalar, B = e.divideScalar, z = e.subtract, D = e.smaller, R = e.equalScalar,
                    a = t("intersect", {
                        "Array, Array, Array": function (e, t, r) {
                            if (!U(e)) throw new TypeError("Array with 3 numbers or BigNumbers expected for first argument");
                            if (!U(t)) throw new TypeError("Array with 3 numbers or BigNumbers expected for second argument");
                            if (!(4 === (n = r).length && M(n[0]) && M(n[1]) && M(n[2]) && M(n[3]))) throw new TypeError("Array with 4 numbers expected as third argument");
                            var n, i, a, o, s, u, c, f, l, p, m, h, d, y, g, v, b, x, w, N, O;
                            return i = e[0], a = e[1], o = e[2], s = t[0], u = t[1], c = t[2], f = r[0], l = r[1], p = r[2], m = r[3], h = k(i, f), d = k(s, f), y = k(a, l), g = k(u, l), v = k(o, p), b = k(c, p), x = B(z(z(z(m, h), y), v), z(z(z(q(q(d, g), b), h), y), v)), w = q(i, k(x, z(s, i))), N = q(a, k(x, z(u, a))), O = q(o, k(x, z(c, o))), [w, N, O]
                        }, "Array, Array, Array, Array": function (e, t, r, n) {
                            if (2 === e.length) {
                                if (!P(e)) throw new TypeError("Array with 2 numbers or BigNumbers expected for first argument");
                                if (!P(t)) throw new TypeError("Array with 2 numbers or BigNumbers expected for second argument");
                                if (!P(r)) throw new TypeError("Array with 2 numbers or BigNumbers expected for third argument");
                                if (!P(n)) throw new TypeError("Array with 2 numbers or BigNumbers expected for fourth argument");
                                return function (e, t, r, n) {
                                    var i = e, a = r, o = z(i, t), s = z(a, n), u = z(k(o[0], s[1]), k(s[0], o[1]));
                                    if (D(T(u), C.epsilon)) return null;
                                    var c = k(s[0], i[1]), f = k(s[1], i[0]), l = k(s[0], a[1]), p = k(s[1], a[0]),
                                        m = B(q(z(z(c, f), l), p), u);
                                    return _(I(o, m), i)
                                }(e, t, r, n)
                            }
                            if (3 !== e.length) throw new TypeError("Arrays with two or thee dimensional points expected");
                            if (!U(e)) throw new TypeError("Array with 3 numbers or BigNumbers expected for first argument");
                            if (!U(t)) throw new TypeError("Array with 3 numbers or BigNumbers expected for second argument");
                            if (!U(r)) throw new TypeError("Array with 3 numbers or BigNumbers expected for third argument");
                            if (!U(n)) throw new TypeError("Array with 3 numbers or BigNumbers expected for fourth argument");
                            return i = e[0], a = e[1], o = e[2], s = t[0], u = t[1], c = t[2], f = r[0], l = r[1], p = r[2], m = n[0], h = n[1], d = n[2], y = F(i, f, m, f, a, l, h, l, o, p, d, p), g = F(m, f, s, i, h, l, u, a, d, p, c, o), v = F(i, f, s, i, a, l, u, a, o, p, c, o), b = F(m, f, m, f, h, l, h, l, d, p, d, p), x = F(s, i, s, i, u, a, u, a, c, o, c, o), w = B(z(k(y, g), k(v, b)), z(k(x, b), k(g, g))), N = B(q(y, k(w, g)), b), O = q(i, k(w, z(s, i))), M = q(a, k(w, z(u, a))), j = q(o, k(w, z(c, o))), E = q(f, k(N, z(m, f))), S = q(l, k(N, z(h, l))), A = q(p, k(N, z(d, p))), R(O, E) && R(M, S) && R(j, A) ? [O, M, j] : null;
                            var i, a, o, s, u, c, f, l, p, m, h, d, y, g, v, b, x, w, N, O, M, j, E, S, A
                        }, "Matrix, Matrix, Matrix": function (e, t, r) {
                            return i(a(e.valueOf(), t.valueOf(), r.valueOf()))
                        }, "Matrix, Matrix, Matrix, Matrix": function (e, t, r, n) {
                            return i(a(e.valueOf(), t.valueOf(), r.valueOf(), n.valueOf()))
                        }
                    });

                function M(e) {
                    return "number" == typeof e || Object(ie.e)(e)
                }

                function P(e) {
                    return 2 === e.length && M(e[0]) && M(e[1])
                }

                function U(e) {
                    return 3 === e.length && M(e[0]) && M(e[1]) && M(e[2])
                }

                function F(e, t, r, n, i, a, o, s, u, c, f, l) {
                    var p = k(z(e, t), z(r, n)), m = k(z(i, a), z(o, s)), h = k(z(u, c), z(f, l));
                    return q(q(p, m), h)
                }

                return a
            }), Vl = ["typed", "config", "add", "?bignumber", "?fraction"], Jl = Object(s.a)("sum", Vl, function (e) {
                var t = e.typed, n = e.config, i = e.add, a = e.bignumber, o = e.fraction;
                return t("sum", {
                    "Array | Matrix": r, "Array | Matrix, number | BigNumber": function (e, t) {
                        try {
                            return F(e, t, i)
                        } catch (e) {
                            throw la(e, "sum")
                        }
                    }, "...": function (e) {
                        if (P(e)) throw new TypeError("Scalar values expected in function sum");
                        return r(e)
                    }
                });

                function r(e) {
                    var r;
                    if (U(e, function (t) {
                        try {
                            r = void 0 === r ? t : i(r, t)
                        } catch (e) {
                            throw la(e, "sum", t)
                        }
                    }), void 0 === r) switch (n.number) {
                        case"number":
                            return 0;
                        case"BigNumber":
                            return a ? a(0) : gi();
                        case"Fraction":
                            return o ? o(0) : vi();
                        default:
                            return 0
                    }
                    return r
                }
            }), Wl = ["typed", "add", "divide"], Yl = Object(s.a)("mean", Wl, function (e) {
                var t = e.typed, i = e.add, a = e.divide;
                return t("mean", {
                    "Array | Matrix": r, "Array | Matrix, number | BigNumber": function (e, t) {
                        try {
                            var r = F(e, t, i), n = Array.isArray(e) ? Object(q.a)(e) : e.size();
                            return a(r, n[t])
                        } catch (e) {
                            throw la(e, "mean")
                        }
                    }, "...": function (e) {
                        if (P(e)) throw new TypeError("Scalar values expected in function mean");
                        return r(e)
                    }
                });

                function r(e) {
                    var r, n = 0;
                    if (U(e, function (t) {
                        try {
                            r = void 0 === r ? t : i(r, t), n++
                        } catch (e) {
                            throw la(e, "mean", t)
                        }
                    }), 0 === n) throw new Error("Cannot calculate the mean of an empty array");
                    return a(r, n)
                }
            }), Xl = ["typed", "add", "divide", "compare", "partitionSelect"], Ql = Object(s.a)("median", Xl, function (e) {
                var t = e.typed, r = e.add, n = e.divide, s = e.compare, u = e.partitionSelect, i = t("median", {
                    "Array | Matrix": a, "Array | Matrix, number | BigNumber": function () {
                        throw new Error("median(A, dim) is not yet supported")
                    }, "...": function (e) {
                        if (P(e)) throw new TypeError("Scalar values expected in function median");
                        return a(e)
                    }
                });

                function a(e) {
                    try {
                        var t = (e = Object(q.e)(e.valueOf())).length;
                        if (0 === t) throw new Error("Cannot calculate median of an empty array");
                        if (t % 2 == 0) {
                            for (var r = t / 2 - 1, n = u(e, 1 + r), i = e[r], a = 0; a < r; ++a) 0 < s(e[a], i) && (i = e[a]);
                            return f(i, n)
                        }
                        var o = u(e, (t - 1) / 2);
                        return c(o)
                    } catch (e) {
                        throw la(e, "median")
                    }
                }

                var c = t({
                    "number | BigNumber | Complex | Unit": function (e) {
                        return e
                    }
                }), f = t({
                    "number | BigNumber | Complex | Unit, number | BigNumber | Complex | Unit": function (e, t) {
                        return n(r(e, t), 2)
                    }
                });
                return i
            }), Kl = ["typed", "abs", "map", "median", "subtract"], ep = Object(s.a)("mad", Kl, function (e) {
                var t = e.typed, r = e.abs, n = e.map, i = e.median, a = e.subtract;
                return t("mad", {"Array | Matrix": o, "...": o});

                function o(e) {
                    if (0 === (e = Object(q.e)(e.valueOf())).length) throw new Error("Cannot calculate median absolute deviation (mad) of an empty array");
                    try {
                        var t = i(e);
                        return i(n(e, function (e) {
                            return r(a(e, t))
                        }))
                    } catch (e) {
                        throw e instanceof TypeError && -1 !== e.message.indexOf("median") ? new TypeError(e.message.replace("median", "mad")) : la(e, "mad")
                    }
                }
            }), tp = "unbiased", rp = "variance", np = ["typed", "add", "subtract", "multiply", "divide", "apply", "isNaN"],
            ip = Object(s.a)(rp, np, function (e) {
                var t = e.typed, o = e.add, s = e.subtract, u = e.multiply, c = e.divide, n = e.apply, f = e.isNaN;
                return t(rp, {
                    "Array | Matrix": function (e) {
                        return i(e, tp)
                    }, "Array | Matrix, string": i, "Array | Matrix, number | BigNumber": function (e, t) {
                        return r(e, t, tp)
                    }, "Array | Matrix, number | BigNumber, string": r, "...": function (e) {
                        return i(e, tp)
                    }
                });

                function i(e, t) {
                    var r = 0, n = 0;
                    if (0 === e.length) throw new SyntaxError("Function variance requires one or more parameters (0 provided)");
                    if (U(e, function (t) {
                        try {
                            r = o(r, t), n++
                        } catch (e) {
                            throw la(e, "variance", t)
                        }
                    }), 0 === n) throw new Error("Cannot calculate variance of an empty array");
                    var i = c(r, n), r = 0;
                    if (U(e, function (e) {
                        var t = s(e, i);
                        r = o(r, u(t, t))
                    }), f(r)) return r;
                    switch (t) {
                        case"uncorrected":
                            return c(r, n);
                        case"biased":
                            return c(r, n + 1);
                        case"unbiased":
                            var a = Object(ie.e)(r) ? r.mul(0) : 0;
                            return 1 === n ? a : c(r, n - 1);
                        default:
                            throw new Error('Unknown normalization "' + t + '". Choose "unbiased" (default), "uncorrected", or "biased".')
                    }
                }

                function r(e, t, r) {
                    try {
                        if (0 === e.length) throw new SyntaxError("Function variance requires one or more parameters (0 provided)");
                        return n(e, t, function (e) {
                            return i(e, r)
                        })
                    } catch (e) {
                        throw la(e, "variance")
                    }
                }
            }), ap = ["typed", "add", "multiply", "partitionSelect", "compare"],
            op = Object(s.a)("quantileSeq", ap, function (e) {
                var t = e.typed, w = e.add, N = e.multiply, O = e.partitionSelect, M = e.compare;

                function h(e, t, r) {
                    var n = Object(q.e)(e), i = n.length;
                    if (0 === i) throw new Error("Cannot calculate quantile of an empty sequence");
                    if (Object(ie.y)(t)) {
                        var a = t * (i - 1), o = a % 1;
                        if (0 == o) {
                            var s = r ? n[a] : O(n, a);
                            return j(s), s
                        }
                        var u, c, f = Math.floor(a);
                        if (r) u = n[f], c = n[f + 1]; else {
                            c = O(n, f + 1), u = n[f];
                            for (var l = 0; l < f; ++l) 0 < M(n[l], u) && (u = n[l])
                        }
                        return j(u), j(c), w(N(u, 1 - o), N(c, o))
                    }
                    var p = t.times(i - 1);
                    if (p.isInteger()) {
                        p = p.toNumber();
                        var m = r ? n[p] : O(n, p);
                        return j(m), m
                    }
                    var h, d, y = p.floor(), g = p.minus(y), v = y.toNumber();
                    if (r) h = n[v], d = n[v + 1]; else {
                        d = O(n, v + 1), h = n[v];
                        for (var b = 0; b < v; ++b) 0 < M(n[b], h) && (h = n[b])
                    }
                    j(h), j(d);
                    var x = new g.constructor(1);
                    return w(N(h, x.minus(g)), N(d, g))
                }

                var j = t({
                    "number | BigNumber | Unit": function (e) {
                        return e
                    }
                });
                return function (e, t, r) {
                    var n, i;
                    if (arguments.length < 2 || 3 < arguments.length) throw new SyntaxError("Function quantileSeq requires two or three parameters");
                    if (Object(ie.i)(e)) {
                        if ("boolean" != typeof (r = r || !1)) throw new TypeError("Unexpected type of argument in function quantileSeq");
                        if (n = e.valueOf(), Object(ie.y)(t)) {
                            if (t < 0) throw new Error("N/prob must be non-negative");
                            if (t <= 1) return h(n, t, r);
                            if (1 < t) {
                                if (!Object(E.i)(t)) throw new Error("N must be a positive integer");
                                for (var a = t + 1, o = new Array(t), s = 0; s < t;) o[s] = h(n, ++s / a, r);
                                return o
                            }
                        }
                        if (Object(ie.e)(t)) {
                            var u = t.constructor;
                            if (t.isNegative()) throw new Error("N/prob must be non-negative");
                            if (i = new u(1), t.lte(i)) return new u(h(n, t, r));
                            if (t.gt(i)) {
                                if (!t.isInteger()) throw new Error("N must be a positive integer");
                                var c = t.toNumber();
                                if (4294967295 < c) throw new Error("N must be less than or equal to 2^32-1, as that is the maximum length of an Array");
                                var f = new u(c + 1);
                                o = new Array(c);
                                for (var l = 0; l < c;) o[l] = new u(h(n, new u(++l).div(f), r));
                                return o
                            }
                        }
                        if (Array.isArray(t)) {
                            o = new Array(t.length);
                            for (var p = 0; p < o.length; ++p) {
                                var m = t[p];
                                if (Object(ie.y)(m)) {
                                    if (m < 0 || 1 < m) throw new Error("Probability must be between 0 and 1, inclusive")
                                } else {
                                    if (!Object(ie.e)(m)) throw new TypeError("Unexpected type of argument in function quantileSeq");
                                    if (i = new m.constructor(1), m.isNegative() || m.gt(i)) throw new Error("Probability must be between 0 and 1, inclusive")
                                }
                                o[p] = h(n, m, r)
                            }
                            return o
                        }
                        throw new TypeError("Unexpected type of argument in function quantileSeq")
                    }
                    throw new TypeError("Unexpected type of argument in function quantileSeq")
                }
            }), sp = ["typed", "sqrt", "variance"], up = Object(s.a)("std", sp, function (e) {
                var t = e.typed, r = e.sqrt, n = e.variance;
                return t("std", {
                    "Array | Matrix": i,
                    "Array | Matrix, string": i,
                    "Array | Matrix, number | BigNumber": i,
                    "Array | Matrix, number | BigNumber, string": i,
                    "...": function (e) {
                        return i(e)
                    }
                });

                function i(e, t) {
                    if (0 === e.length) throw new SyntaxError("Function std requires one or more parameters (0 provided)");
                    try {
                        return r(n.apply(null, arguments))
                    } catch (e) {
                        throw e instanceof TypeError && -1 !== e.message.indexOf(" variance") ? new TypeError(e.message.replace(" variance", " std")) : e
                    }
                }
            });

        function cp(e, t) {
            if (t < e) return 1;
            if (t === e) return t;
            var r = t + e >> 1;
            return cp(e, r) * cp(1 + r, t)
        }

        function fp(e, t) {
            if (!Object(E.i)(e) || e < 0) throw new TypeError("Positive integer value expected in function combinations");
            if (!Object(E.i)(t) || t < 0) throw new TypeError("Positive integer value expected in function combinations");
            if (e < t) throw new TypeError("k must be less than or equal to n");
            var r = e - t;
            return t < r ? cp(1 + r, e) / cp(1, t) : cp(t + 1, e) / cp(1, r)
        }

        fp.signature = "number, number";
        var lp = "combinations", pp = ["typed"], mp = Object(s.a)(lp, pp, function (e) {
            return (0, e.typed)(lp, {
                "number, number": fp, "BigNumber, BigNumber": function (e, t) {
                    var r, n, i = e.constructor, a = e.minus(t), o = new i(1);
                    if (!hp(e) || !hp(t)) throw new TypeError("Positive integer value expected in function combinations");
                    if (t.gt(e)) throw new TypeError("k must be less than n in function combinations");
                    if (r = o, t.lt(a)) for (n = o; n.lte(a); n = n.plus(o)) r = r.times(t.plus(n)).dividedBy(n); else for (n = o; n.lte(t); n = n.plus(o)) r = r.times(a.plus(n)).dividedBy(n);
                    return r
                }
            })
        });

        function hp(e) {
            return e.isInteger() && e.gte(0)
        }

        var dp = "combinationsWithRep", yp = ["typed"], gp = Object(s.a)(dp, yp, function (e) {
            return (0, e.typed)(dp, {
                "number, number": function (e, t) {
                    if (!Object(E.i)(e) || e < 0) throw new TypeError("Positive integer value expected in function combinationsWithRep");
                    if (!Object(E.i)(t) || t < 0) throw new TypeError("Positive integer value expected in function combinationsWithRep");
                    if (e < 1) throw new TypeError("k must be less than or equal to n + k - 1");
                    return t < e - 1 ? cp(e, e + t - 1) / cp(1, t) : cp(t + 1, e + t - 1) / cp(1, e - 1)
                }, "BigNumber, BigNumber": function (e, t) {
                    var r, n, i = new e.constructor(1), a = e.minus(i);
                    if (!vp(e) || !vp(t)) throw new TypeError("Positive integer value expected in function combinationsWithRep");
                    if (e.lt(i)) throw new TypeError("k must be less than or equal to n + k - 1 in function combinationsWithRep");
                    if (r = i, t.lt(a)) for (n = i; n.lte(a); n = n.plus(i)) r = r.times(t.plus(n)).dividedBy(n); else for (n = i; n.lte(t); n = n.plus(i)) r = r.times(a.plus(n)).dividedBy(n);
                    return r
                }
            })
        });

        function vp(e) {
            return e.isInteger() && e.gte(0)
        }

        function bp(e) {
            var t;
            if (Object(E.i)(e)) return e <= 0 ? isFinite(e) ? 1 / 0 : NaN : 171 < e ? 1 / 0 : cp(1, e - 1);
            if (e < .5) return Math.PI / (Math.sin(Math.PI * e) * bp(1 - e));
            if (171.35 <= e) return 1 / 0;
            if (85 < e) {
                var r = e * e, n = r * e, i = n * e, a = i * e;
                return Math.sqrt(2 * Math.PI / e) * Math.pow(e / Math.E, e) * (1 + 1 / (12 * e) + 1 / (288 * r) - 139 / (51840 * n) - 571 / (2488320 * i) + 163879 / (209018880 * a) + 5246819 / (75246796800 * a * e))
            }
            --e, t = wp[0];
            for (var o = 1; o < wp.length; ++o) t += wp[o] / (e + o);
            var s = e + xp + .5;
            return Math.sqrt(2 * Math.PI) * Math.pow(s, e + .5) * Math.exp(-s) * t
        }

        bp.signature = "number";
        var xp = 4.7421875,
            wp = [.9999999999999971, 57.15623566586292, -59.59796035547549, 14.136097974741746, -.4919138160976202, 3399464998481189e-20, 4652362892704858e-20, -9837447530487956e-20, .0001580887032249125, -.00021026444172410488, .00021743961811521265, -.0001643181065367639, 8441822398385275e-20, -26190838401581408e-21, 36899182659531625e-22],
            Np = ["typed", "config", "multiplyScalar", "pow", "BigNumber", "Complex"],
            Op = Object(s.a)("gamma", Np, function (e) {
                var t = e.typed, s = e.config, c = e.multiplyScalar, f = e.pow, u = e.BigNumber, l = e.Complex,
                    p = t("gamma", {
                        number: bp, Complex: function (e) {
                            if (0 === e.im) return p(e.re);
                            e = new l(e.re - 1, e.im);
                            for (var t = new l(wp[0], 0), r = 1; r < wp.length; ++r) {
                                var n = e.re + r, i = n * n + e.im * e.im;
                                0 != i ? (t.re += wp[r] * n / i, t.im += -(wp[r] * e.im) / i) : t.re = wp[r] < 0 ? -1 / 0 : 1 / 0
                            }
                            var a = new l(e.re + xp + .5, e.im), o = Math.sqrt(2 * Math.PI);
                            e.re += .5;
                            var s = f(a, e);
                            0 === s.im ? s.re *= o : (0 === s.re || (s.re *= o), s.im *= o);
                            var u = Math.exp(-a.re);
                            return a.re = u * Math.cos(-a.im), a.im = u * Math.sin(-a.im), c(c(s, a), t)
                        }, BigNumber: function (e) {
                            if (e.isInteger()) return e.isNegative() || e.isZero() ? new u(1 / 0) : function e(t) {
                                if (t < 8) return new u([1, 1, 2, 6, 24, 120, 720, 5040][t]);
                                var r = s.precision + (0 | Math.log(t.toNumber()));
                                var n = u.clone({precision: r});
                                if (t % 2 == 1) return t.times(e(new u(t - 1)));
                                var i = t;
                                var a = new n(t);
                                var o = t.toNumber();
                                for (; 2 < i;) o += i -= 2, a = a.times(o);
                                return new u(a.toPrecision(u.precision))
                            }(e.minus(1));
                            if (!e.isFinite()) return new u(e.isNegative() ? NaN : 1 / 0);
                            throw new Error("Integer BigNumber expected")
                        }, "Array | Matrix": function (e) {
                            return oe(e, p)
                        }
                    });
                return p
            }), Mp = "factorial", jp = ["typed", "gamma"], Ep = Object(s.a)(Mp, jp, function (e) {
                var t = e.typed, r = e.gamma, n = t(Mp, {
                    number: function (e) {
                        if (e < 0) throw new Error("Value must be non-negative");
                        return r(e + 1)
                    }, BigNumber: function (e) {
                        if (e.isNegative()) throw new Error("Value must be non-negative");
                        return r(e.plus(1))
                    }, "Array | Matrix": function (e) {
                        return oe(e, n)
                    }
                });
                return n
            }), Sp = "kldivergence", Ap = ["typed", "matrix", "divide", "sum", "multiply", "dotDivide", "log", "isNumeric"],
            Cp = Object(s.a)(Sp, Ap, function (e) {
                var t = e.typed, r = e.matrix, s = e.divide, u = e.sum, c = e.multiply, f = e.dotDivide, l = e.log,
                    p = e.isNumeric;
                return t(Sp, {
                    "Array, Array": function (e, t) {
                        return n(r(e), r(t))
                    }, "Matrix, Array": function (e, t) {
                        return n(e, r(t))
                    }, "Array, Matrix": function (e, t) {
                        return n(r(e), t)
                    }, "Matrix, Matrix": n
                });

                function n(e, t) {
                    var r = t.size().length, n = e.size().length;
                    if (1 < r) throw new Error("first object must be one dimensional");
                    if (1 < n) throw new Error("second object must be one dimensional");
                    if (r !== n) throw new Error("Length of two vectors must be equal");
                    if (0 === u(e)) throw new Error("Sum of elements in first object must be non zero");
                    if (0 === u(t)) throw new Error("Sum of elements in second object must be non zero");
                    var i = s(e, u(e)), a = s(t, u(t)), o = u(c(i, l(f(i, a))));
                    return p(o) ? o : Number.NaN
                }
            }), Tp = "multinomial", _p = ["typed", "add", "divide", "multiply", "factorial", "isInteger", "isPositive"],
            qp = Object(s.a)(Tp, _p, function (e) {
                var t = e.typed, n = e.add, i = e.divide, a = e.multiply, o = e.factorial, s = e.isInteger,
                    u = e.isPositive;
                return t(Tp, {
                    "Array | Matrix": function (e) {
                        var t = 0, r = 1;
                        return U(e, function (e) {
                            if (!s(e) || !u(e)) throw new TypeError("Positive integer value expected in function multinomial");
                            t = n(t, e), r = a(r, o(e))
                        }), i(o(t), r)
                    }
                })
            }), Ip = "permutations", kp = ["typed", "factorial"], Bp = Object(s.a)(Ip, kp, function (e) {
                var t = e.typed, r = e.factorial;
                return t(Ip, {
                    "number | BigNumber": r, "number, number": function (e, t) {
                        if (!Object(E.i)(e) || e < 0) throw new TypeError("Positive integer value expected in function permutations");
                        if (!Object(E.i)(t) || t < 0) throw new TypeError("Positive integer value expected in function permutations");
                        if (e < t) throw new TypeError("second argument k must be less than or equal to first argument n");
                        return cp(e - t + 1, e)
                    }, "BigNumber, BigNumber": function (e, t) {
                        if (!zp(e) || !zp(t)) throw new TypeError("Positive integer value expected in function permutations");
                        if (t.gt(e)) throw new TypeError("second argument k must be less than or equal to first argument n");
                        for (var r = e.mul(0).add(1), n = e.minus(t).plus(1); n.lte(e); n = n.plus(1)) r = r.times(n);
                        return r
                    }
                })
            });

        function zp(e) {
            return e.isInteger() && e.gte(0)
        }

        var Dp = r(14), Rp = r.n(Dp), Pp = Rp()();

        function Up(e) {
            var t, r;
            return t = null === (r = e) ? Pp : Rp()(String(r)), function () {
                return t()
            }
        }

        var Fp = ["typed", "config", "?on"], Lp = Object(s.a)("pickRandom", Fp, function (e) {
            var t = e.typed, r = e.config, n = e.on, m = Up(r.randomSeed);
            return n && n("config", function (e, t) {
                e.randomSeed !== t.randomSeed && (m = Up(e.randomSeed))
            }), t({
                "Array | Matrix": function (e) {
                    return i(e)
                }, "Array | Matrix, number": function (e, t) {
                    return i(e, t, void 0)
                }, "Array | Matrix, Array": function (e, t) {
                    return i(e, void 0, t)
                }, "Array | Matrix, Array | Matrix, number": function (e, t, r) {
                    return i(e, r, t)
                }, "Array | Matrix, number, Array | Matrix": i
            });

            function i(e, t, r) {
                var n = void 0 === t;
                if (n && (t = 1), e = e.valueOf(), r = r && r.valueOf(), 1 < Object(q.a)(e).length) throw new Error("Only one dimensional vectors supported");
                var i = 0;
                if (void 0 !== r) {
                    if (r.length !== e.length) throw new Error("Weights must have the same length as possibles");
                    for (var a = 0, o = r.length; a < o; a++) {
                        if (!Object(ie.y)(r[a]) || r[a] < 0) throw new Error("Weights must be an array of positive numbers");
                        i += r[a]
                    }
                }
                var s = e.length;
                if (0 === s) return [];
                if (s <= t) return 1 < t ? e : e[0];
                for (var u, c = []; c.length < t;) {
                    if (void 0 === r) u = e[Math.floor(m() * s)]; else for (var f = m() * i, l = 0, p = e.length; l < p; l++) if ((f -= r[l]) < 0) {
                        u = e[l];
                        break
                    }
                    -1 === c.indexOf(u) && c.push(u)
                }
                return n ? c[0] : c
            }
        });

        function Hp(e, t) {
            var r = [];
            if (1 < (e = e.slice(0)).length) for (var n = 0, i = e.shift(); n < i; n++) r.push(Hp(e, t)); else for (var a = 0, o = e.shift(); a < o; a++) r.push(t());
            return r
        }

        var $p = "random", Gp = ["typed", "config", "?on"], Zp = Object(s.a)($p, Gp, function (e) {
                var t = e.typed, r = e.config, n = e.on, i = Up(r.randomSeed);
                return n && n("config", function (e, t) {
                    e.randomSeed !== t.randomSeed && (i = Up(e.randomSeed))
                }), t($p, {
                    "": function () {
                        return o(0, 1)
                    }, number: function (e) {
                        return o(0, e)
                    }, "number, number": o, "Array | Matrix": function (e) {
                        return a(e, 0, 1)
                    }, "Array | Matrix, number": function (e, t) {
                        return a(e, 0, t)
                    }, "Array | Matrix, number, number": a
                });

                function a(e, t, r) {
                    var n = Hp(e.valueOf(), function () {
                        return o(t, r)
                    });
                    return Object(ie.v)(e) ? e.create(n) : n
                }

                function o(e, t) {
                    return e + i() * (t - e)
                }
            }), Vp = "randomInt", Jp = ["typed", "config", "?on"], Wp = Object(s.a)(Vp, Jp, function (e) {
                var t = e.typed, r = e.config, n = e.on, i = Up(r.randomSeed);
                return n && n("config", function (e, t) {
                    e.randomSeed !== t.randomSeed && (i = Up(e.randomSeed))
                }), t(Vp, {
                    "": function () {
                        return o(0, 1)
                    }, number: function (e) {
                        return o(0, e)
                    }, "number, number": o, "Array | Matrix": function (e) {
                        return a(e, 0, 1)
                    }, "Array | Matrix, number": function (e, t) {
                        return a(e, 0, t)
                    }, "Array | Matrix, number, number": a
                });

                function a(e, t, r) {
                    var n = Hp(e.valueOf(), function () {
                        return o(t, r)
                    });
                    return Object(ie.v)(e) ? e.create(n) : n
                }

                function o(e, t) {
                    return Math.floor(e + i() * (t - e))
                }
            }), Yp = "stirlingS2",
            Xp = ["typed", "addScalar", "subtract", "multiplyScalar", "divideScalar", "pow", "factorial", "combinations", "isNegative", "isInteger", "larger"],
            Qp = Object(s.a)(Yp, Xp, function (e) {
                var t = e.typed, u = e.addScalar, c = e.subtract, f = e.multiplyScalar, l = e.divideScalar, p = e.pow,
                    m = e.factorial, h = e.combinations, d = e.isNegative, y = e.isInteger, g = e.larger;
                return t(Yp, {
                    "number | BigNumber, number | BigNumber": function (e, t) {
                        if (!y(e) || d(e) || !y(t) || d(t)) throw new TypeError("Non-negative integer value expected in function stirlingS2");
                        if (g(t, e)) throw new TypeError("k must be less than or equal to n in function stirlingS2");
                        for (var r = m(t), n = 0, i = 0; i <= t; i++) var a = p(-1, c(t, i)), o = h(t, i), s = p(i, e), n = u(n, f(f(o, s), a));
                        return l(n, r)
                    }
                })
            }), Kp = "bellNumbers", em = ["typed", "addScalar", "isNegative", "isInteger", "stirlingS2"],
            tm = Object(s.a)(Kp, em, function (e) {
                var t = e.typed, n = e.addScalar, i = e.isNegative, a = e.isInteger, o = e.stirlingS2;
                return t(Kp, {
                    "number | BigNumber": function (e) {
                        if (!a(e) || i(e)) throw new TypeError("Non-negative integer value expected in function bellNumbers");
                        for (var t = 0, r = 0; r <= e; r++) t = n(t, o(e, r));
                        return t
                    }
                })
            }), rm = "catalan",
            nm = ["typed", "addScalar", "divideScalar", "multiplyScalar", "combinations", "isNegative", "isInteger"],
            im = Object(s.a)(rm, nm, function (e) {
                var t = e.typed, r = e.addScalar, n = e.divideScalar, i = e.multiplyScalar, a = e.combinations,
                    o = e.isNegative, s = e.isInteger;
                return t(rm, {
                    "number | BigNumber": function (e) {
                        if (!s(e) || o(e)) throw new TypeError("Non-negative integer value expected in function catalan");
                        return n(a(i(e, 2), e), r(e, 1))
                    }
                })
            }), am = "composition",
            om = ["typed", "addScalar", "combinations", "isNegative", "isPositive", "isInteger", "larger"],
            sm = Object(s.a)(am, om, function (e) {
                var t = e.typed, r = e.addScalar, n = e.combinations, i = e.isPositive, a = (e.isNegative, e.isInteger),
                    o = e.larger;
                return t(am, {
                    "number | BigNumber, number | BigNumber": function (e, t) {
                        if (!(a(e) && i(e) && a(t) && i(t))) throw new TypeError("Positive integer value expected in function composition");
                        if (o(t, e)) throw new TypeError("k must be less than or equal to n in function composition");
                        return n(r(e, -1), r(t, -1))
                    }
                })
            }), um = ["FunctionNode", "OperatorNode", "SymbolNode"], cm = Object(s.a)("simplifyUtil", um, function (e) {
                var r = e.FunctionNode, n = e.OperatorNode, i = e.SymbolNode, a = {add: !0, multiply: !0},
                    o = {add: !0, multiply: !0};

                function s(e, t) {
                    if (!Object(ie.B)(e)) return !1;
                    var r = e.fn.toString();
                    return t && Object(ae.f)(t, r) && Object(ae.f)(t[r], "associative") ? t[r].associative : o[r] || !1
                }

                function u(e) {
                    var i, a = [];
                    return s(e) ? (i = e.op, function e(t) {
                        for (var r = 0; r < t.args.length; r++) {
                            var n = t.args[r];
                            Object(ie.B)(n) && i === n.op ? e(n) : a.push(n)
                        }
                    }(e), a) : e.args
                }

                function c(t) {
                    return Object(ie.B)(t) ? function (e) {
                        try {
                            return new n(t.op, t.fn, e, t.implicit)
                        } catch (e) {
                            return console.error(e), []
                        }
                    } : function (e) {
                        return new r(new i(t.name), e)
                    }
                }

                return {
                    createMakeNodeFunction: c, isCommutative: function (e, t) {
                        if (!Object(ie.B)(e)) return !0;
                        var r = e.fn.toString();
                        return t && Object(ae.f)(t, r) && Object(ae.f)(t[r], "commutative") ? t[r].commutative : a[r] || !1
                    }, isAssociative: s, flatten: function e(t) {
                        if (!t.args || 0 === t.args.length) return t;
                        t.args = u(t);
                        for (var r = 0; r < t.args.length; r++) e(t.args[r])
                    }, allChildren: u, unflattenr: function e(t) {
                        if (t.args && 0 !== t.args.length) {
                            for (var r = c(t), n = t.args.length, i = 0; i < n; i++) e(t.args[i]);
                            if (2 < n && s(t)) {
                                for (var a = t.args.pop(); 0 < t.args.length;) a = r([t.args.pop(), a]);
                                t.args = a.args
                            }
                        }
                    }, unflattenl: function e(t) {
                        if (t.args && 0 !== t.args.length) {
                            for (var r = c(t), n = t.args.length, i = 0; i < n; i++) e(t.args[i]);
                            if (2 < n && s(t)) {
                                for (var a = t.args.shift(); 0 < t.args.length;) a = r([a, t.args.shift()]);
                                t.args = a.args
                            }
                        }
                    }
                }
            }),
            fm = ["equal", "isZero", "add", "subtract", "multiply", "divide", "pow", "ConstantNode", "OperatorNode", "FunctionNode", "ParenthesisNode"],
            lm = Object(s.a)("simplifyCore", fm, function (e) {
                var f = e.equal, l = e.isZero, p = e.add, m = e.subtract, h = e.multiply, d = e.divide, y = e.pow,
                    g = e.ConstantNode, v = e.OperatorNode, b = e.FunctionNode, x = e.ParenthesisNode, w = new g(0),
                    N = new g(1);
                return function e(t) {
                    if (Object(ie.B)(t) && t.isUnary()) {
                        var r = e(t.args[0]);
                        if ("+" === t.op) return r;
                        if ("-" === t.op) {
                            if (Object(ie.B)(r)) {
                                if (r.isUnary() && "-" === r.op) return r.args[0];
                                if (r.isBinary() && "subtract" === r.fn) return new v("-", "subtract", [r.args[1], r.args[0]])
                            }
                            return new v(t.op, t.fn, [r])
                        }
                    } else if (Object(ie.B)(t) && t.isBinary()) {
                        var n = e(t.args[0]), i = e(t.args[1]);
                        if ("+" === t.op) {
                            if (Object(ie.l)(n)) {
                                if (l(n.value)) return i;
                                if (Object(ie.l)(i)) return new g(p(n.value, i.value))
                            }
                            return Object(ie.l)(i) && l(i.value) ? n : Object(ie.B)(i) && i.isUnary() && "-" === i.op ? new v("-", "subtract", [n, i.args[0]]) : new v(t.op, t.fn, i ? [n, i] : [n])
                        }
                        if ("-" === t.op) {
                            if (Object(ie.l)(n) && i) {
                                if (Object(ie.l)(i)) return new g(m(n.value, i.value));
                                if (l(n.value)) return new v("-", "unaryMinus", [i])
                            }
                            if ("subtract" === t.fn) return Object(ie.l)(i) && l(i.value) ? n : Object(ie.B)(i) && i.isUnary() && "-" === i.op ? e(new v("+", "add", [n, i.args[0]])) : new v(t.op, t.fn, [n, i])
                        } else {
                            if ("*" === t.op) {
                                if (Object(ie.l)(n)) {
                                    if (l(n.value)) return w;
                                    if (f(n.value, 1)) return i;
                                    if (Object(ie.l)(i)) return new g(h(n.value, i.value))
                                }
                                if (Object(ie.l)(i)) {
                                    if (l(i.value)) return w;
                                    if (f(i.value, 1)) return n;
                                    if (Object(ie.B)(n) && n.isBinary() && n.op === t.op) {
                                        var a = n.args[0];
                                        if (Object(ie.l)(a)) {
                                            var o = new g(h(a.value, i.value));
                                            return new v(t.op, t.fn, [o, n.args[1]], t.implicit)
                                        }
                                    }
                                    return new v(t.op, t.fn, [i, n], t.implicit)
                                }
                                return new v(t.op, t.fn, [n, i], t.implicit)
                            }
                            if ("/" === t.op) {
                                if (Object(ie.l)(n)) {
                                    if (l(n.value)) return w;
                                    if (Object(ie.l)(i) && (f(i.value, 1) || f(i.value, 2) || f(i.value, 4))) return new g(d(n.value, i.value))
                                }
                                return new v(t.op, t.fn, [n, i])
                            }
                            if ("^" === t.op) {
                                if (Object(ie.l)(i)) {
                                    if (l(i.value)) return N;
                                    if (f(i.value, 1)) return n;
                                    if (Object(ie.l)(n)) return new g(y(n.value, i.value));
                                    if (Object(ie.B)(n) && n.isBinary() && "^" === n.op) {
                                        var s = n.args[1];
                                        if (Object(ie.l)(s)) return new v(t.op, t.fn, [n.args[0], new g(h(s.value, i.value))])
                                    }
                                }
                                return new v(t.op, t.fn, [n, i])
                            }
                        }
                    } else {
                        if (Object(ie.C)(t)) {
                            var u = e(t.content);
                            return Object(ie.C)(u) || Object(ie.J)(u) || Object(ie.l)(u) ? u : new x(u)
                        }
                        if (Object(ie.r)(t)) {
                            var c = t.args.map(e).map(function (e) {
                                return Object(ie.C)(e) ? e.content : e
                            });
                            return new b(e(t.fn), c)
                        }
                    }
                    return t
                }
            }),
            pm = ["typed", "config", "mathWithTransform", "?fraction", "?bignumber", "ConstantNode", "OperatorNode", "FunctionNode", "SymbolNode"],
            mm = Object(s.a)("simplifyConstant", pm, function (e) {
                var t = e.typed, r = e.config, p = e.mathWithTransform, n = e.fraction, i = e.bignumber,
                    a = e.ConstantNode, o = e.OperatorNode, m = e.FunctionNode, s = e.SymbolNode,
                    u = cm({FunctionNode: m, OperatorNode: o, SymbolNode: s}), h = u.isCommutative, d = u.isAssociative,
                    y = u.allChildren, g = u.createMakeNodeFunction;

                function v(t, r, n) {
                    try {
                        return x(p[t].apply(null, r), n)
                    } catch (e) {
                        return r = r.map(function (e) {
                            return Object(ie.o)(e) ? e.valueOf() : e
                        }), x(p[t].apply(null, r), n)
                    }
                }

                var b = t({
                    Fraction: function (e) {
                        var t, r = e.s * e.n;
                        t = r < 0 ? new o("-", "unaryMinus", [new a(-r)]) : new a(r);
                        return 1 !== e.d ? new o("/", "divide", [t, new a(e.d)]) : t
                    }, number: function (e) {
                        return e < 0 ? f(new a(-e)) : new a(e)
                    }, BigNumber: function (e) {
                        return e < 0 ? f(new a(-e)) : new a(e)
                    }, Complex: function () {
                        throw new Error("Cannot convert Complex number to Node")
                    }
                });

                function c(e, t) {
                    if (t && !1 !== t.exactFractions && isFinite(e) && n) {
                        var r = n(e);
                        if (r.valueOf() === e) return r
                    }
                    return e
                }

                var x = t({
                    "string, Object": function (e, t) {
                        return "BigNumber" === r.number ? (void 0 === i && gi(), i(e)) : "Fraction" === r.number ? (void 0 === n && vi(), n(e)) : c(parseFloat(e), t)
                    }, "Fraction, Object": function (e) {
                        return e
                    }, "BigNumber, Object": function (e) {
                        return e
                    }, "number, Object": c, "Complex, Object": function (e, t) {
                        return 0 !== e.im ? e : c(e.re, t)
                    }
                });

                function f(e) {
                    return new o("-", "unaryMinus", [e])
                }

                function w(r, e, n, i) {
                    return e.reduce(function (e, t) {
                        if (Object(ie.w)(e) || Object(ie.w)(t)) Object(ie.w)(e) ? Object(ie.w)(t) || (t = b(t)) : e = b(e); else {
                            try {
                                return v(r, [e, t], i)
                            } catch (e) {
                            }
                            e = b(e), t = b(t)
                        }
                        return n([e, t])
                    })
                }

                return function (e, t) {
                    var r = function t(e, r) {
                        switch (e.type) {
                            case"SymbolNode":
                                return e;
                            case"ConstantNode":
                                return "number" != typeof e.value && isNaN(e.value) ? e : x(e.value, r);
                            case"FunctionNode":
                                if (p[e.name] && p[e.name].rawArgs) return e;
                                var n = ["add", "multiply"];
                                if (-1 === n.indexOf(e.name)) {
                                    var i = e.args.map(function (e) {
                                        return t(e, r)
                                    });
                                    if (!i.some(ie.w)) try {
                                        return v(e.name, i, r)
                                    } catch (e) {
                                    }
                                    return i = i.map(function (e) {
                                        return Object(ie.w)(e) ? e : b(e)
                                    }), new m(e.name, i)
                                }
                            case"OperatorNode":
                                var a, o, s = e.fn.toString(), u = g(e);
                                if (Object(ie.B)(e) && e.isUnary()) a = [t(e.args[0], r)], o = Object(ie.w)(a[0]) ? u(a) : v(s, a, r); else if (d(e)) if (a = (a = y(e)).map(function (e) {
                                    return t(e, r)
                                }), h(s)) {
                                    for (var c = [], f = [], l = 0; l < a.length; l++) Object(ie.w)(a[l]) ? f.push(a[l]) : c.push(a[l]);
                                    o = 1 < c.length ? (o = w(s, c, u, r), f.unshift(o), w(s, f, u, r)) : w(s, a, u, r)
                                } else o = w(s, a, u, r); else a = e.args.map(function (e) {
                                    return t(e, r)
                                }), o = w(s, a, u, r);
                                return o;
                            case"ParenthesisNode":
                                return t(e.content, r);
                            case"AccessorNode":
                            case"ArrayNode":
                            case"AssignmentNode":
                            case"BlockNode":
                            case"FunctionAssignmentNode":
                            case"IndexNode":
                            case"ObjectNode":
                            case"RangeNode":
                            case"ConditionalNode":
                            default:
                                throw new Error("Unimplemented node type in simplifyConstant: ".concat(e.type))
                        }
                    }(e, t);
                    return Object(ie.w)(r) ? r : b(r)
                }
            }), hm = ["parse", "FunctionNode", "OperatorNode", "ParenthesisNode"],
            dm = Object(s.a)("resolve", hm, function (e) {
                var o = e.parse, s = e.FunctionNode, u = e.OperatorNode, c = e.ParenthesisNode;
                return function t(e, r) {
                    if (!r) return e;
                    if (Object(ie.J)(e)) {
                        var n = r[e.name];
                        if (Object(ie.w)(n)) return t(n, r);
                        if ("number" == typeof n) return o(String(n))
                    } else {
                        if (Object(ie.B)(e)) {
                            var i = e.args.map(function (e) {
                                return t(e, r)
                            });
                            return new u(e.op, e.fn, i, e.implicit)
                        }
                        if (Object(ie.C)(e)) return new c(t(e.content, r));
                        if (Object(ie.r)(e)) {
                            var a = e.args.map(function (e) {
                                return t(e, r)
                            });
                            return new s(e.name, a)
                        }
                    }
                    return e
                }
            });

        function ym(e) {
            return (ym = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        var gm = ["config", "typed", "parse", "add", "subtract", "multiply", "divide", "pow", "isZero", "equal", "?fraction", "?bignumber", "mathWithTransform", "ConstantNode", "FunctionNode", "OperatorNode", "ParenthesisNode", "SymbolNode"],
            vm = Object(s.a)("simplify", gm, function (e) {
                var t = e.config, r = e.typed, c = e.parse, n = e.add, i = e.subtract, a = e.multiply, o = e.divide,
                    s = e.pow, u = e.isZero, l = e.equal, f = e.fraction, p = e.bignumber, m = e.mathWithTransform,
                    h = e.ConstantNode, d = e.FunctionNode, y = e.OperatorNode, g = e.ParenthesisNode, v = e.SymbolNode,
                    b = mm({
                        typed: r,
                        config: t,
                        mathWithTransform: m,
                        fraction: f,
                        bignumber: p,
                        ConstantNode: h,
                        OperatorNode: y,
                        FunctionNode: d,
                        SymbolNode: v
                    }), x = lm({
                        equal: l,
                        isZero: u,
                        add: n,
                        subtract: i,
                        multiply: a,
                        divide: o,
                        pow: s,
                        ConstantNode: h,
                        OperatorNode: y,
                        FunctionNode: d,
                        ParenthesisNode: g
                    }), w = dm({parse: c, FunctionNode: d, OperatorNode: y, ParenthesisNode: g}),
                    N = cm({FunctionNode: d, OperatorNode: y, SymbolNode: v}), O = N.isCommutative, M = N.isAssociative,
                    j = N.flatten, E = N.unflattenr, S = N.unflattenl, A = N.createMakeNodeFunction, C = r("simplify", {
                        string: function (e) {
                            return C(c(e), C.rules, {}, {})
                        }, "string, Object": function (e, t) {
                            return C(c(e), C.rules, t, {})
                        }, "string, Object, Object": function (e, t, r) {
                            return C(c(e), C.rules, t, r)
                        }, "string, Array": function (e, t) {
                            return C(c(e), t, {}, {})
                        }, "string, Array, Object": function (e, t, r) {
                            return C(c(e), t, r, {})
                        }, "string, Array, Object, Object": function (e, t, r, n) {
                            return C(c(e), t, r, n)
                        }, "Node, Object": function (e, t) {
                            return C(e, C.rules, t, {})
                        }, "Node, Object, Object": function (e, t, r) {
                            return C(e, C.rules, t, r)
                        }, Node: function (e) {
                            return C(e, C.rules, {}, {})
                        }, "Node, Array": function (e, t) {
                            return C(e, t, {}, {})
                        }, "Node, Array, Object": function (e, t, r) {
                            return C(e, t, r, {})
                        }, "Node, Array, Object, Object": function (e, t, r, n) {
                            t = function (e) {
                                for (var t = [], r = 0; r < e.length; r++) {
                                    var n, i, a = e[r], o = void 0, s = ym(a);
                                    switch (s) {
                                        case"string":
                                            var u = a.split("->");
                                            if (2 !== u.length) throw SyntaxError("Could not parse rule: " + a);
                                            a = {l: u[0], r: u[1]};
                                        case"object":
                                            o = {
                                                l: T(c(a.l)),
                                                r: T(c(a.r))
                                            }, a.context && (o.evaluate = a.context), a.evaluate && (o.evaluate = c(a.evaluate)), M(o.l) && (n = A(o.l), i = new v("_p" + q++), o.expanded = {}, o.expanded.l = n([o.l.clone(), i]), j(o.expanded.l), E(o.expanded.l), o.expanded.r = n([o.r, i]));
                                            break;
                                        case"function":
                                            o = a;
                                            break;
                                        default:
                                            throw TypeError("Unsupported type of rule: " + s)
                                    }
                                    t.push(o)
                                }
                                return t
                            }(t);
                            for (var i = w(e, r), a = {}, o = (i = T(i)).toString({parenthesis: "all"}); !a[o];) {
                                a[o] = !0;
                                for (var s = q = 0; s < t.length; s++) i = "function" == typeof t[s] ? t[s](i, n) : (j(i), I(i, t[s])), S(i);
                                o = i.toString({parenthesis: "all"})
                            }
                            return i
                        }
                    });

                function T(e) {
                    return e.transform(function (e, t, r) {
                        return Object(ie.C)(e) ? T(e.content) : e
                    })
                }

                C.simplifyCore = x, C.resolve = w;
                var _ = {
                    true: !0,
                    false: !0,
                    e: !0,
                    i: !0,
                    Infinity: !0,
                    LN2: !0,
                    LN10: !0,
                    LOG2E: !0,
                    LOG10E: !0,
                    NaN: !0,
                    phi: !0,
                    pi: !0,
                    SQRT1_2: !0,
                    SQRT2: !0,
                    tau: !0
                };
                C.rules = [x, {l: "log(e)", r: "1"}, {l: "n-n1", r: "n+-n1"}, {l: "-(c*v)", r: "(-c) * v"}, {
                    l: "-v",
                    r: "(-1) * v"
                }, {l: "n/n1^n2", r: "n*n1^-n2"}, {l: "n/n1", r: "n*n1^-1"}, {
                    l: "(n ^ n1) ^ n2",
                    r: "n ^ (n1 * n2)"
                }, {l: "n*n", r: "n^2"}, {l: "n * n^n1", r: "n^(n1+1)"}, {l: "n^n1 * n^n2", r: "n^(n1+n2)"}, {
                    l: "n+n",
                    r: "2*n"
                }, {l: "n+-n", r: "0"}, {l: "n1*n2 + n2", r: "(n1+1)*n2"}, {
                    l: "n1*n3 + n2*n3",
                    r: "(n1+n2)*n3"
                }, {l: "n1 + -1 * (n2 + n3)", r: "n1 + -1 * n2 + -1 * n3"}, b, {l: "(-n)*n1", r: "-(n*n1)"}, {
                    l: "c+v",
                    r: "v+c",
                    context: {add: {commutative: !1}}
                }, {l: "v*c", r: "c*v", context: {multiply: {commutative: !1}}}, {
                    l: "n+-n1",
                    r: "n-n1"
                }, {l: "n*(n1^-1)", r: "n/n1"}, {l: "n*n1^-n2", r: "n/n1^n2"}, {l: "n1^-1", r: "1/n1"}, {
                    l: "n*(n1/n2)",
                    r: "(n*n1)/n2"
                }, {l: "n-(n1+n2)", r: "n-n1-n2"}, {l: "1*n", r: "n"}, {l: "n1/(n2/n3)", r: "(n1*n3)/n2"}];
                var q = 0;
                var I = r("applyRule", {
                    "Node, Object": function (e, t) {
                        var r = e;
                        if (r instanceof y || r instanceof d) {
                            if (r.args) for (var n = 0; n < r.args.length; n++) r.args[n] = I(r.args[n], t)
                        } else r instanceof g && r.content && (r.content = I(r.content, t));
                        var i, a = t.r, o = z(t.l, r)[0];
                        return !o && t.expanded && (a = t.expanded.r, o = z(t.expanded.l, r)[0]), o && (i = r.implicit, r = a.clone(), i && "implicit" in a && (r.implicit = !0), r = r.transform(function (e) {
                            return e.isSymbolNode && Object(ae.f)(o.placeholders, e.name) ? o.placeholders[e.name].clone() : e
                        })), r
                    }
                });

                function k(e, t) {
                    var r = {placeholders: {}};
                    if (!e.placeholders && !t.placeholders) return r;
                    if (!e.placeholders) return t;
                    if (!t.placeholders) return e;
                    for (var n in e.placeholders) if (Object(ae.f)(e.placeholders, n) && (r.placeholders[n] = e.placeholders[n], Object(ae.f)(t.placeholders, n) && !function e(t, r) {
                        if (t instanceof h && r instanceof h) {
                            if (!l(t.value, r.value)) return !1
                        } else if (t instanceof v && r instanceof v) {
                            if (t.name !== r.name) return !1
                        } else {
                            if (!(t instanceof y && r instanceof y || t instanceof d && r instanceof d)) return !1;
                            if (t instanceof y) {
                                if (t.op !== r.op || t.fn !== r.fn) return !1
                            } else if (t instanceof d && t.name !== r.name) return !1;
                            if (t.args.length !== r.args.length) return !1;
                            for (var n = 0; n < t.args.length; n++) if (!e(t.args[n], r.args[n])) return !1
                        }
                        return !0
                    }(e.placeholders[n], t.placeholders[n]))) return null;
                    for (var i in t.placeholders) Object(ae.f)(t.placeholders, i) && (r.placeholders[i] = t.placeholders[i]);
                    return r
                }

                function B(e, t) {
                    var r, n = [];
                    if (0 === e.length || 0 === t.length) return n;
                    for (var i = 0; i < e.length; i++) for (var a = 0; a < t.length; a++) (r = k(e[i], t[a])) && n.push(r);
                    return n
                }

                function z(e, t, r) {
                    var n = [{placeholders: {}}];
                    if (e instanceof y && t instanceof y || e instanceof d && t instanceof d) {
                        if (e instanceof y) {
                            if (e.op !== t.op || e.fn !== t.fn) return []
                        } else if (e instanceof d && e.name !== t.name) return [];
                        if ((1 !== t.args.length || 1 !== e.args.length) && M(t) && !r) {
                            if (2 <= t.args.length && 2 === e.args.length) {
                                for (var i = function (e, t) {
                                    var r, n, i = [], a = A(e);
                                    if (O(e, t)) for (var o = 0; o < e.args.length; o++) (n = e.args.slice(0)).splice(o, 1), r = 1 === n.length ? n[0] : a(n), i.push(a([e.args[o], r])); else r = 1 === (n = e.args.slice(1)).length ? n[0] : a(n), i.push(a([e.args[0], r]));
                                    return i
                                }(t, e.context), a = [], o = 0; o < i.length; o++) var s = z(e, i[o], !0), a = a.concat(s);
                                return a
                            }
                            if (2 < e.args.length) throw Error("Unexpected non-binary associative function: " + e.toString());
                            return []
                        }
                        for (var u = [], c = 0; c < e.args.length; c++) {
                            var f = z(e.args[c], t.args[c]);
                            if (0 === f.length) return [];
                            u.push(f)
                        }
                        n = function (e) {
                            if (0 === e.length) return e;
                            for (var t = e.reduce(B), r = [], n = {}, i = 0; i < t.length; i++) {
                                var a = JSON.stringify(t[i]);
                                n[a] || (n[a] = !0, r.push(t[i]))
                            }
                            return r
                        }(u)
                    } else if (e instanceof v) {
                        if (0 === e.name.length) throw new Error("Symbol in rule has 0 length...!?");
                        if (_[e.name]) {
                            if (e.name !== t.name) return []
                        } else if ("n" === e.name[0] || "_p" === e.name.substring(0, 2)) n[0].placeholders[e.name] = t; else if ("v" === e.name[0]) {
                            if (Object(ie.l)(t)) return [];
                            n[0].placeholders[e.name] = t
                        } else {
                            if ("c" !== e.name[0]) throw new Error("Invalid symbol in rule: " + e.name);
                            if (!(t instanceof h)) return [];
                            n[0].placeholders[e.name] = t
                        }
                    } else {
                        if (!(e instanceof h)) return [];
                        if (!l(e.value, t.value)) return []
                    }
                    return n
                }

                return C
            }),
            bm = ["typed", "config", "parse", "simplify", "equal", "isZero", "numeric", "ConstantNode", "FunctionNode", "OperatorNode", "ParenthesisNode", "SymbolNode"],
            xm = Object(s.a)("derivative", bm, function (e) {
                var t = e.typed, r = e.config, n = e.parse, a = e.simplify, l = e.equal, p = e.isZero, i = e.numeric,
                    o = e.ConstantNode, m = e.FunctionNode, h = e.OperatorNode, s = e.ParenthesisNode, f = e.SymbolNode,
                    u = t("derivative", {
                        "Node, SymbolNode, Object": function (e, t, r) {
                            var n = {};
                            d(n, e, t.name);
                            var i = y(e, n);
                            return r.simplify ? a(i) : i
                        }, "Node, SymbolNode": function (e, t) {
                            return u(e, t, {simplify: !0})
                        }, "string, SymbolNode": function (e, t) {
                            return u(n(e), t)
                        }, "string, SymbolNode, Object": function (e, t, r) {
                            return u(n(e), t, r)
                        }, "string, string": function (e, t) {
                            return u(n(e), n(t))
                        }, "string, string, Object": function (e, t, r) {
                            return u(n(e), n(t), r)
                        }, "Node, string": function (e, t) {
                            return u(e, n(t))
                        }, "Node, string, Object": function (e, t, r) {
                            return u(e, n(t), r)
                        }
                    });
                u._simplify = !0, u.toTex = function (e) {
                    return c.apply(null, e.args)
                };
                var c = t("_derivTex", {
                    "Node, SymbolNode": function (e, t) {
                        return Object(ie.l)(e) && "string" === Object(ie.M)(e.value) ? c(n(e.value).toString(), t.toString(), 1) : c(e.toString(), t.toString(), 1)
                    }, "Node, ConstantNode": function (e, t) {
                        if ("string" === Object(ie.M)(t.value)) return c(e, n(t.value));
                        throw new Error("The second parameter to 'derivative' is a non-string constant")
                    }, "Node, SymbolNode, ConstantNode": function (e, t, r) {
                        return c(e.toString(), t.name, r.value)
                    }, "string, string, number": function (e, t, r) {
                        var n = 1 === r ? "{d\\over d" + t + "}" : "{d^{" + r + "}\\over d" + t + "^{" + r + "}}";
                        return n + "\\left[".concat(e, "\\right]")
                    }
                }), d = t("constTag", {
                    "Object, ConstantNode, string": function (e, t) {
                        return e[t] = !0
                    }, "Object, SymbolNode, string": function (e, t, r) {
                        return t.name !== r && (e[t] = !0)
                    }, "Object, ParenthesisNode, string": function (e, t, r) {
                        return d(e, t.content, r)
                    }, "Object, FunctionAssignmentNode, string": function (e, t, r) {
                        return -1 === t.params.indexOf(r) ? e[t] = !0 : d(e, t.expr, r)
                    }, "Object, FunctionNode | OperatorNode, string": function (e, t, r) {
                        if (0 < t.args.length) {
                            for (var n = d(e, t.args[0], r), i = 1; i < t.args.length; ++i) n = d(e, t.args[i], r) && n;
                            if (n) return e[t] = !0
                        }
                        return !1
                    }
                }), y = t("_derivative", {
                    "ConstantNode, Object": function () {
                        return g(0)
                    }, "SymbolNode, Object": function (e, t) {
                        return void 0 !== t[e] ? g(0) : g(1)
                    }, "ParenthesisNode, Object": function (e, t) {
                        return new s(y(e.content, t))
                    }, "FunctionAssignmentNode, Object": function (e, t) {
                        return void 0 !== t[e] ? g(0) : y(e.expr, t)
                    }, "FunctionNode, Object": function (e, t) {
                        if (1 !== e.args.length && function (e) {
                            if (("log" === e.name || "nthRoot" === e.name || "pow" === e.name) && 2 === e.args.length) return;
                            for (var t = 0; t < e.args.length; ++t) e.args[t] = g(0);
                            throw e.compile().evaluate(), new Error("Expected TypeError, but none found")
                        }(e), void 0 !== t[e]) return g(0);
                        var r, n, i, a, o = e.args[0], s = !1, u = !1;
                        switch (e.name) {
                            case"cbrt":
                                s = !0, n = new h("*", "multiply", [g(3), new h("^", "pow", [o, new h("/", "divide", [g(2), g(3)])])]);
                                break;
                            case"sqrt":
                            case"nthRoot":
                                if (1 === e.args.length) s = !0, n = new h("*", "multiply", [g(2), new m("sqrt", [o])]); else if (2 === e.args.length) return t[r = new h("/", "divide", [g(1), e.args[1]])] = t[e.args[1]], y(new h("^", "pow", [o, r]), t);
                                break;
                            case"log10":
                                r = g(10);
                            case"log":
                                if (r || 1 !== e.args.length) {
                                    if (1 === e.args.length && r || 2 === e.args.length && void 0 !== t[e.args[1]]) n = new h("*", "multiply", [o.clone(), new m("log", [r || e.args[1]])]), s = !0; else if (2 === e.args.length) return y(new h("/", "divide", [new m("log", [o]), new m("log", [e.args[1]])]), t)
                                } else n = o.clone(), s = !0;
                                break;
                            case"pow":
                                return t[r] = t[e.args[1]], y(new h("^", "pow", [o, e.args[1]]), t);
                            case"exp":
                                n = new m("exp", [o.clone()]);
                                break;
                            case"sin":
                                n = new m("cos", [o.clone()]);
                                break;
                            case"cos":
                                n = new h("-", "unaryMinus", [new m("sin", [o.clone()])]);
                                break;
                            case"tan":
                                n = new h("^", "pow", [new m("sec", [o.clone()]), g(2)]);
                                break;
                            case"sec":
                                n = new h("*", "multiply", [e, new m("tan", [o.clone()])]);
                                break;
                            case"csc":
                                u = !0, n = new h("*", "multiply", [e, new m("cot", [o.clone()])]);
                                break;
                            case"cot":
                                u = !0, n = new h("^", "pow", [new m("csc", [o.clone()]), g(2)]);
                                break;
                            case"asin":
                                s = !0, n = new m("sqrt", [new h("-", "subtract", [g(1), new h("^", "pow", [o.clone(), g(2)])])]);
                                break;
                            case"acos":
                                u = s = !0, n = new m("sqrt", [new h("-", "subtract", [g(1), new h("^", "pow", [o.clone(), g(2)])])]);
                                break;
                            case"atan":
                                s = !0, n = new h("+", "add", [new h("^", "pow", [o.clone(), g(2)]), g(1)]);
                                break;
                            case"asec":
                                s = !0, n = new h("*", "multiply", [new m("abs", [o.clone()]), new m("sqrt", [new h("-", "subtract", [new h("^", "pow", [o.clone(), g(2)]), g(1)])])]);
                                break;
                            case"acsc":
                                u = s = !0, n = new h("*", "multiply", [new m("abs", [o.clone()]), new m("sqrt", [new h("-", "subtract", [new h("^", "pow", [o.clone(), g(2)]), g(1)])])]);
                                break;
                            case"acot":
                                u = s = !0, n = new h("+", "add", [new h("^", "pow", [o.clone(), g(2)]), g(1)]);
                                break;
                            case"sinh":
                                n = new m("cosh", [o.clone()]);
                                break;
                            case"cosh":
                                n = new m("sinh", [o.clone()]);
                                break;
                            case"tanh":
                                n = new h("^", "pow", [new m("sech", [o.clone()]), g(2)]);
                                break;
                            case"sech":
                                u = !0, n = new h("*", "multiply", [e, new m("tanh", [o.clone()])]);
                                break;
                            case"csch":
                                u = !0, n = new h("*", "multiply", [e, new m("coth", [o.clone()])]);
                                break;
                            case"coth":
                                u = !0, n = new h("^", "pow", [new m("csch", [o.clone()]), g(2)]);
                                break;
                            case"asinh":
                                s = !0, n = new m("sqrt", [new h("+", "add", [new h("^", "pow", [o.clone(), g(2)]), g(1)])]);
                                break;
                            case"acosh":
                                s = !0, n = new m("sqrt", [new h("-", "subtract", [new h("^", "pow", [o.clone(), g(2)]), g(1)])]);
                                break;
                            case"atanh":
                                s = !0, n = new h("-", "subtract", [g(1), new h("^", "pow", [o.clone(), g(2)])]);
                                break;
                            case"asech":
                                u = s = !0, n = new h("*", "multiply", [o.clone(), new m("sqrt", [new h("-", "subtract", [g(1), new h("^", "pow", [o.clone(), g(2)])])])]);
                                break;
                            case"acsch":
                                u = s = !0, n = new h("*", "multiply", [new m("abs", [o.clone()]), new m("sqrt", [new h("+", "add", [new h("^", "pow", [o.clone(), g(2)]), g(1)])])]);
                                break;
                            case"acoth":
                                u = s = !0, n = new h("-", "subtract", [g(1), new h("^", "pow", [o.clone(), g(2)])]);
                                break;
                            case"abs":
                                n = new h("/", "divide", [new m(new f("abs"), [o.clone()]), o.clone()]);
                                break;
                            case"gamma":
                            default:
                                throw new Error('Function "' + e.name + '" is not supported by derivative, or a wrong number of arguments is passed')
                        }
                        a = s ? (i = "/", "divide") : (i = "*", "multiply");
                        var c = y(o, t);
                        return u && (c = new h("-", "unaryMinus", [c])), new h(i, a, [c, n])
                    }, "OperatorNode, Object": function (e, r) {
                        if (void 0 !== r[e]) return g(0);
                        if ("+" === e.op) return new h(e.op, e.fn, e.args.map(function (e) {
                            return y(e, r)
                        }));
                        if ("-" === e.op) {
                            if (e.isUnary()) return new h(e.op, e.fn, [y(e.args[0], r)]);
                            if (e.isBinary()) return new h(e.op, e.fn, [y(e.args[0], r), y(e.args[1], r)])
                        }
                        if ("*" === e.op) {
                            var t = e.args.filter(function (e) {
                                return void 0 !== r[e]
                            });
                            if (0 < t.length) {
                                var n = e.args.filter(function (e) {
                                    return void 0 === r[e]
                                }), i = 1 === n.length ? n[0] : new h("*", "multiply", n), a = t.concat(y(i, r));
                                return new h("*", "multiply", a)
                            }
                            return new h("+", "add", e.args.map(function (t) {
                                return new h("*", "multiply", e.args.map(function (e) {
                                    return e === t ? y(e, r) : e.clone()
                                }))
                            }))
                        }
                        if ("/" === e.op && e.isBinary()) {
                            var o = e.args[0], s = e.args[1];
                            return void 0 !== r[s] ? new h("/", "divide", [y(o, r), s]) : void 0 !== r[o] ? new h("*", "multiply", [new h("-", "unaryMinus", [o]), new h("/", "divide", [y(s, r), new h("^", "pow", [s.clone(), g(2)])])]) : new h("/", "divide", [new h("-", "subtract", [new h("*", "multiply", [y(o, r), s.clone()]), new h("*", "multiply", [o.clone(), y(s, r)])]), new h("^", "pow", [s.clone(), g(2)])])
                        }
                        if ("^" === e.op && e.isBinary()) {
                            var u = e.args[0], c = e.args[1];
                            if (void 0 !== r[u]) return Object(ie.l)(u) && (p(u.value) || l(u.value, 1)) ? g(0) : new h("*", "multiply", [e, new h("*", "multiply", [new m("log", [u.clone()]), y(c.clone(), r)])]);
                            if (void 0 === r[c]) return new h("*", "multiply", [new h("^", "pow", [u.clone(), c.clone()]), new h("+", "add", [new h("*", "multiply", [y(u, r), new h("/", "divide", [c.clone(), u.clone()])]), new h("*", "multiply", [y(c, r), new m("log", [u.clone()])])])]);
                            if (Object(ie.l)(c)) {
                                if (p(c.value)) return g(0);
                                if (l(c.value, 1)) return y(u, r)
                            }
                            var f = new h("^", "pow", [u.clone(), new h("-", "subtract", [c, g(1)])]);
                            return new h("*", "multiply", [c.clone(), new h("*", "multiply", [y(u, r), f])])
                        }
                        throw new Error('Operator "' + e.op + '" is not supported by derivative, or a wrong number of arguments is passed')
                    }
                });

                function g(e, t) {
                    return new o(i(e, t || r.number))
                }

                return u
            }), wm = "rationalize",
            Nm = ["config", "typed", "equal", "isZero", "add", "subtract", "multiply", "divide", "pow", "parse", "simplify", "?bignumber", "?fraction", "mathWithTransform", "ConstantNode", "OperatorNode", "FunctionNode", "SymbolNode", "ParenthesisNode"],
            Om = Object(s.a)(wm, Nm, function (e) {
                var t = e.config, r = e.typed, n = e.equal, i = e.isZero, a = e.add, o = e.subtract, s = e.multiply,
                    u = e.divide, c = e.pow, f = e.parse, g = e.simplify, l = e.fraction, p = e.bignumber,
                    m = e.mathWithTransform, v = e.ConstantNode, b = e.OperatorNode, h = e.FunctionNode,
                    d = e.SymbolNode, y = e.ParenthesisNode, x = mm({
                        typed: r,
                        config: t,
                        mathWithTransform: m,
                        fraction: l,
                        bignumber: p,
                        ConstantNode: v,
                        OperatorNode: b,
                        FunctionNode: h,
                        SymbolNode: d
                    }), w = lm({
                        equal: n,
                        isZero: i,
                        add: a,
                        subtract: o,
                        multiply: s,
                        divide: u,
                        pow: c,
                        ConstantNode: v,
                        OperatorNode: b,
                        FunctionNode: h,
                        ParenthesisNode: y
                    }), N = r(wm, {
                        string: function (e) {
                            return N(f(e), {}, !1)
                        }, "string, boolean": function (e, t) {
                            return N(f(e), {}, t)
                        }, "string, Object": function (e, t) {
                            return N(f(e), t, !1)
                        }, "string, Object, boolean": function (e, t, r) {
                            return N(f(e), t, r)
                        }, Node: function (e) {
                            return N(e, {}, !1)
                        }, "Node, boolean": function (e, t) {
                            return N(e, {}, t)
                        }, "Node, Object": function (e, t) {
                            return N(e, t, !1)
                        }, "Node, Object, boolean": function (e, t, r) {
                            var n, i, a, o, s, u, c = ((o = {}).firstRules = (n = [w, {l: "n+n", r: "2*n"}, {
                                    l: "n+-n",
                                    r: "0"
                                }, x, {l: "n*(n1^-1)", r: "n/n1"}, {l: "n*n1^-n2", r: "n/n1^n2"}, {
                                    l: "n1^-1",
                                    r: "1/n1"
                                }, {l: "n*(n1/n2)", r: "(n*n1)/n2"}, {l: "1*n", r: "n"}]).concat(i = [{
                                    l: "(-n1)/(-n2)",
                                    r: "n1/n2"
                                }, {l: "(-n1)*(-n2)", r: "n1*n2"}, {l: "n1--n2", r: "n1+n2"}, {
                                    l: "n1-n2",
                                    r: "n1+(-n2)"
                                }, {l: "(n1+n2)*n3", r: "(n1*n3 + n2*n3)"}, {
                                    l: "n1*(n2+n3)",
                                    r: "(n1*n2+n1*n3)"
                                }, {l: "c1*n + c2*n", r: "(c1+c2)*n"}, {l: "c1*n + n", r: "(c1+1)*n"}, {
                                    l: "c1*n - c2*n",
                                    r: "(c1-c2)*n"
                                }, {l: "c1*n - n", r: "(c1-1)*n"}, {l: "v/c", r: "(1/c)*v"}, {
                                    l: "v/-c",
                                    r: "-(1/c)*v"
                                }, {l: "-v*-c", r: "c*v"}, {l: "-v*c", r: "-c*v"}, {l: "v*-c", r: "-c*v"}, {
                                    l: "v*c",
                                    r: "c*v"
                                }, {l: "-(-n1*n2)", r: "(n1*n2)"}, {l: "-(n1*n2)", r: "(-n1*n2)"}, {
                                    l: "-(-n1+n2)",
                                    r: "(n1-n2)"
                                }, {l: "-(n1+n2)", r: "(-n1-n2)"}, {l: "(n1^n2)^n3", r: "(n1^(n2*n3))"}, {
                                    l: "-(-n1/n2)",
                                    r: "(n1/n2)"
                                }, {l: "-(n1/n2)", r: "(-n1/n2)"}], a = [{
                                    l: "(n1/(n2/n3))",
                                    r: "((n1*n3)/n2)"
                                }, {l: "(n1/n2/n3)", r: "(n1/(n2*n3))"}]), o.distrDivRules = [{
                                    l: "(n1/n2 + n3/n4)",
                                    r: "((n1*n4 + n3*n2)/(n2*n4))"
                                }, {l: "(n1/n2 + n3)", r: "((n1 + n3*n2)/n2)"}, {
                                    l: "(n1 + n2/n3)",
                                    r: "((n1*n3 + n2)/n3)"
                                }], o.sucDivRules = a, o.firstRulesAgain = n.concat(i), o.finalRules = [w, {
                                    l: "n*-n",
                                    r: "-n^2"
                                }, {l: "n*n", r: "n^2"}, x, {l: "n*-n^n1", r: "-n^(n1+1)"}, {
                                    l: "n*n^n1",
                                    r: "n^(n1+1)"
                                }, {l: "n^n1*-n^n2", r: "-n^(n1+n2)"}, {l: "n^n1*n^n2", r: "n^(n1+n2)"}, {
                                    l: "n^n1*-n",
                                    r: "-n^(n1+1)"
                                }, {l: "n^n1*n", r: "n^(n1+1)"}, {l: "n^n1/-n", r: "-n^(n1-1)"}, {
                                    l: "n^n1/n",
                                    r: "n^(n1-1)"
                                }, {l: "n/-n^n1", r: "-n^(1-n1)"}, {l: "n/n^n1", r: "n^(1-n1)"}, {
                                    l: "n^n1/-n^n2",
                                    r: "n^(n1-n2)"
                                }, {l: "n^n1/n^n2", r: "n^(n1-n2)"}, {l: "n1+(-n2*n3)", r: "n1-n2*n3"}, {
                                    l: "v*(-c)",
                                    r: "-c*v"
                                }, {l: "n1+-n2", r: "n1-n2"}, {l: "v*c", r: "c*v"}, {l: "(n1^n2)^n3", r: "(n1^(n2*n3))"}], o),
                                f = function (e, t, r, n) {
                                    var o = [], i = g(e, n, t, {exactFractions: !1}), s = "+-*" + ((r = !!r) ? "/" : "");
                                    !function e(t) {
                                        var r = t.type;
                                        {
                                            if ("FunctionNode" === r) throw new Error("There is an unsolved function call");
                                            if ("OperatorNode" === r) if ("^" === t.op) {
                                                if ("ConstantNode" !== t.args[1].type || !Object(E.i)(parseFloat(t.args[1].value))) throw new Error("There is a non-integer exponent");
                                                e(t.args[0])
                                            } else {
                                                if (-1 === s.indexOf(t.op)) throw new Error("Operator " + t.op + " invalid in polynomial expression");
                                                for (var n = 0; n < t.args.length; n++) e(t.args[n])
                                            } else if ("SymbolNode" === r) {
                                                var i = t.name, a = o.indexOf(i);
                                                -1 === a && o.push(i)
                                            } else if ("ParenthesisNode" === r) e(t.content); else if ("ConstantNode" !== r) throw new Error("type " + r + " is not allowed in polynomial expression")
                                        }
                                    }(i);
                                    var a = {};
                                    return a.expression = i, a.variables = o, a
                                }(e, t, !0, c.firstRules), l = f.variables.length;
                            if (e = f.expression, 1 <= l) {
                                e = function e(t, r, n) {
                                    var i = t.type;
                                    var a = 1 < arguments.length;
                                    {
                                        var o, s, u, c;
                                        "OperatorNode" === i && t.isBinary() && (o = !1, "^" === t.op && ("ParenthesisNode" !== t.args[0].type && "OperatorNode" !== t.args[0].type || "ConstantNode" !== t.args[1].type || (s = parseFloat(t.args[1].value), o = 2 <= s && Object(E.i)(s))), o && (t = 2 < s ? (u = t.args[0], c = new b("^", "pow", [t.args[0].cloneDeep(), new v(s - 1)]), new b("*", "multiply", [u, c])) : new b("*", "multiply", [t.args[0], t.args[0].cloneDeep()]), a && ("content" === n ? r.content = t : r.args[n] = t)))
                                    }
                                    if ("ParenthesisNode" === i) e(t.content, t, "content"); else if ("ConstantNode" !== i && "SymbolNode" !== i) for (var f = 0; f < t.args.length; f++) e(t.args[f], t, f);
                                    if (!a) return t
                                }(e);
                                var p, m = !0, h = !1;
                                for (e = g(e, c.firstRules, {}, {exactFractions: !1}); u = m ? c.distrDivRules : c.sucDivRules, m = !m, (p = (e = g(e, u)).toString()) !== s;) h = !0, s = p;
                                h && (e = g(e, c.firstRulesAgain, {}, {exactFractions: !1})), e = g(e, c.finalRules, {}, {exactFractions: !1})
                            }
                            var d = [], y = {};
                            return "OperatorNode" === e.type && e.isBinary() && "/" === e.op ? (1 === l && (e.args[0] = O(e.args[0], d), e.args[1] = O(e.args[1])), r && (y.numerator = e.args[0], y.denominator = e.args[1])) : (1 === l && (e = O(e, d)), r && (y.numerator = e, y.denominator = null)), r ? (y.coefficients = d, y.variables = f.variables, y.expression = e, y) : e
                        }
                    });

                function O(e, u) {
                    void 0 === u && (u = []);
                    var t = {cte: 1, oper: "+", fire: ""}, c = u[0] = 0, f = "";
                    !function e(t, r, n) {
                        var i = t.type;
                        {
                            if ("FunctionNode" === i) throw new Error("There is an unsolved function call");
                            if ("OperatorNode" === i) {
                                if (-1 === "+-*^".indexOf(t.op)) throw new Error("Operator " + t.op + " invalid");
                                if (null !== r) {
                                    if (("unaryMinus" === t.fn || "pow" === t.fn) && "add" !== r.fn && "subtract" !== r.fn && "multiply" !== r.fn) throw new Error("Invalid " + t.op + " placing");
                                    if (("subtract" === t.fn || "add" === t.fn || "multiply" === t.fn) && "add" !== r.fn && "subtract" !== r.fn) throw new Error("Invalid " + t.op + " placing");
                                    if (("subtract" === t.fn || "add" === t.fn || "unaryMinus" === t.fn) && 0 !== n.noFil) throw new Error("Invalid " + t.op + " placing")
                                }
                                "^" !== t.op && "*" !== t.op || (n.fire = t.op);
                                for (var a = 0; a < t.args.length; a++) "unaryMinus" === t.fn && (n.oper = "-"), "+" !== t.op && "subtract" !== t.fn || (n.fire = "", n.cte = 1, n.oper = 0 === a ? "+" : t.op), n.noFil = a, e(t.args[a], t, n)
                            } else if ("SymbolNode" === i) {
                                if (t.name !== f && "" !== f) throw new Error("There is more than one variable");
                                if (f = t.name, null === r) return void (u[1] = 1);
                                if ("^" === r.op && 0 !== n.noFil) throw new Error("In power the variable should be the first parameter");
                                if ("*" === r.op && 1 !== n.noFil) throw new Error("In multiply the variable should be the second parameter");
                                "" !== n.fire && "*" !== n.fire || (c < 1 && (u[1] = 0), u[1] += n.cte * ("+" === n.oper ? 1 : -1), c = Math.max(1, c))
                            } else {
                                if ("ConstantNode" !== i) throw new Error("Type " + i + " is not allowed");
                                var o = parseFloat(t.value);
                                if (null === r) return void (u[0] = o);
                                if ("^" === r.op) {
                                    if (1 !== n.noFil) throw new Error("Constant cannot be powered");
                                    if (!Object(E.i)(o) || o <= 0) throw new Error("Non-integer exponent is not allowed");
                                    for (var s = c + 1; s < o; s++) u[s] = 0;
                                    return c < o && (u[o] = 0), u[o] += n.cte * ("+" === n.oper ? 1 : -1), void (c = Math.max(o, c))
                                }
                                n.cte = o, "" === n.fire && (u[0] += n.cte * ("+" === n.oper ? 1 : -1))
                            }
                        }
                    }(e, null, t);
                    for (var r, n, i, a, o, s = !0, l = c = u.length - 1; 0 <= l; l--) {
                        0 !== u[l] && (n = new v(s ? u[l] : Math.abs(u[l])), i = u[l] < 0 ? "-" : "+", 0 < l && (o = new d(f), 1 < l && (a = new v(l), o = new b("^", "pow", [o, a])), n = -1 === u[l] && s ? new b("-", "unaryMinus", [o]) : 1 === Math.abs(u[l]) ? o : new b("*", "multiply", [n, o])), r = s ? n : "+" == i ? new b("+", "add", [r, n]) : new b("-", "subtract", [r, n]), s = !1)
                    }
                    return s ? new v(0) : r
                }

                return N
            }), Mm = ["classes"], jm = Object(s.a)("reviver", Mm, function (e) {
                var n = e.classes;
                return function (e, t) {
                    var r = n[t && t.mathjs];
                    return r && "function" == typeof r.fromJSON ? r.fromJSON(t) : t
                }
            }), Em = [], Sm = Object(s.a)("replacer", Em, function () {
                return function (e, t) {
                    return "number" != typeof t || isFinite(t) && !isNaN(t) ? t : {mathjs: "number", value: String(t)}
                }
            }), Am = Math.PI, Cm = 2 * Math.PI, Tm = Math.E, _m = Object(s.a)("true", [], function () {
                return !0
            }), qm = Object(s.a)("false", [], function () {
                return !1
            }), Im = Object(s.a)("null", [], function () {
                return null
            }), km = Ym("Infinity", ["config", "?BigNumber"], function (e) {
                var t = e.config, r = e.BigNumber;
                return "BigNumber" === t.number ? new r(1 / 0) : 1 / 0
            }), Bm = Ym("NaN", ["config", "?BigNumber"], function (e) {
                var t = e.config, r = e.BigNumber;
                return "BigNumber" === t.number ? new r(NaN) : NaN
            }), zm = Ym("pi", ["config", "?BigNumber"], function (e) {
                var t = e.config, r = e.BigNumber;
                return "BigNumber" === t.number ? ds(r) : Am
            }), Dm = Ym("tau", ["config", "?BigNumber"], function (e) {
                var t = e.config, r = e.BigNumber;
                return "BigNumber" === t.number ? ys(r) : Cm
            }), Rm = Ym("e", ["config", "?BigNumber"], function (e) {
                var t = e.config, r = e.BigNumber;
                return "BigNumber" === t.number ? ms(r) : Tm
            }), Pm = Ym("phi", ["config", "?BigNumber"], function (e) {
                var t = e.config, r = e.BigNumber;
                return "BigNumber" === t.number ? hs(r) : 1.618033988749895
            }), Um = Ym("LN2", ["config", "?BigNumber"], function (e) {
                var t = e.config, r = e.BigNumber;
                return "BigNumber" === t.number ? new r(2).ln() : Math.LN2
            }), Fm = Ym("LN10", ["config", "?BigNumber"], function (e) {
                var t = e.config, r = e.BigNumber;
                return "BigNumber" === t.number ? new r(10).ln() : Math.LN10
            }), Lm = Ym("LOG2E", ["config", "?BigNumber"], function (e) {
                var t = e.config, r = e.BigNumber;
                return "BigNumber" === t.number ? new r(1).div(new r(2).ln()) : Math.LOG2E
            }), Hm = Ym("LOG10E", ["config", "?BigNumber"], function (e) {
                var t = e.config, r = e.BigNumber;
                return "BigNumber" === t.number ? new r(1).div(new r(10).ln()) : Math.LOG10E
            }), $m = Ym("SQRT1_2", ["config", "?BigNumber"], function (e) {
                var t = e.config, r = e.BigNumber;
                return "BigNumber" === t.number ? new r("0.5").sqrt() : Math.SQRT1_2
            }), Gm = Ym("SQRT2", ["config", "?BigNumber"], function (e) {
                var t = e.config, r = e.BigNumber;
                return "BigNumber" === t.number ? new r(2).sqrt() : Math.SQRT2
            }), Zm = Ym("i", ["Complex"], function (e) {
                return e.Complex.I
            }), Vm = Object(s.a)("PI", ["pi"], function (e) {
                return e.pi
            }), Jm = Object(s.a)("E", ["e"], function (e) {
                return e.e
            }), Wm = Object(s.a)("version", [], function () {
                return "7.0.1"
            });

        function Ym(e, t, r) {
            return Object(s.a)(e, t, r, {recreateOnConfigChange: !0})
        }

        var Xm = Vh("speedOfLight", "299792458", "m s^-1"),
            Qm = Vh("gravitationConstant", "6.67430e-11", "m^3 kg^-1 s^-2"),
            Km = Vh("planckConstant", "6.62607015e-34", "J s"),
            eh = Vh("reducedPlanckConstant", "1.0545718176461565e-34", "J s"),
            th = Vh("magneticConstant", "1.25663706212e-6", "N A^-2"),
            rh = Vh("electricConstant", "8.8541878128e-12", "F m^-1"),
            nh = Vh("vacuumImpedance", "376.730313667", "ohm"), ih = Vh("coulomb", "8.987551792261171e9", "N m^2 C^-2"),
            ah = Vh("elementaryCharge", "1.602176634e-19", "C"), oh = Vh("bohrMagneton", "9.2740100783e-24", "J T^-1"),
            sh = Vh("conductanceQuantum", "7.748091729863649e-5", "S"),
            uh = Vh("inverseConductanceQuantum", "12906.403729652257", "ohm"),
            ch = Vh("magneticFluxQuantum", "2.0678338484619295e-15", "Wb"),
            fh = Vh("nuclearMagneton", "5.0507837461e-27", "J T^-1"), lh = Vh("klitzing", "25812.807459304513", "ohm"),
            ph = Vh("bohrRadius", "5.29177210903e-11", "m"),
            mh = Vh("classicalElectronRadius", "2.8179403262e-15", "m"),
            hh = Vh("electronMass", "9.1093837015e-31", "kg"), dh = Vh("fermiCoupling", "1.1663787e-5", "GeV^-2"),
            yh = Jh("fineStructure", .0072973525693), gh = Vh("hartreeEnergy", "4.3597447222071e-18", "J"),
            vh = Vh("protonMass", "1.67262192369e-27", "kg"), bh = Vh("deuteronMass", "3.3435830926e-27", "kg"),
            xh = Vh("neutronMass", "1.6749271613e-27", "kg"),
            wh = Vh("quantumOfCirculation", "3.6369475516e-4", "m^2 s^-1"),
            Nh = Vh("rydberg", "10973731.568160", "m^-1"), Oh = Vh("thomsonCrossSection", "6.6524587321e-29", "m^2"),
            Mh = Jh("weakMixingAngle", .2229), jh = Jh("efimovFactor", 22.7),
            Eh = Vh("atomicMass", "1.66053906660e-27", "kg"), Sh = Vh("avogadro", "6.02214076e23", "mol^-1"),
            Ah = Vh("boltzmann", "1.380649e-23", "J K^-1"), Ch = Vh("faraday", "96485.33212331001", "C mol^-1"),
            Th = Vh("firstRadiation", "3.7417718521927573e-16", "W m^2"),
            _h = Vh("loschmidt", "2.686780111798444e25", "m^-3"),
            qh = Vh("gasConstant", "8.31446261815324", "J K^-1 mol^-1"),
            Ih = Vh("molarPlanckConstant", "3.990312712893431e-10", "J s mol^-1"),
            kh = Vh("molarVolume", "0.022413969545014137", "m^3 mol^-1"), Bh = Jh("sackurTetrode", -1.16487052358),
            zh = Vh("secondRadiation", "0.014387768775039337", "m K"),
            Dh = Vh("stefanBoltzmann", "5.67037441918443e-8", "W m^-2 K^-4"),
            Rh = Vh("wienDisplacement", "2.897771955e-3", "m K"), Ph = Vh("molarMass", "0.99999999965e-3", "kg mol^-1"),
            Uh = Vh("molarMassC12", "11.9999999958e-3", "kg mol^-1"), Fh = Vh("gravity", "9.80665", "m s^-2"),
            Lh = Vh("planckLength", "1.616255e-35", "m"), Hh = Vh("planckMass", "2.176435e-8", "kg"),
            $h = Vh("planckTime", "5.391245e-44", "s"), Gh = Vh("planckCharge", "1.87554603778e-18", "C"),
            Zh = Vh("planckTemperature", "1.416785e+32", "K");

        function Vh(e, a, o) {
            return Object(s.a)(e, ["config", "Unit", "BigNumber"], function (e) {
                var t = e.config, r = e.Unit, n = e.BigNumber,
                    i = new r("BigNumber" === t.number ? new n(a) : parseFloat(a), o);
                return i.fixPrefix = !0, i
            })
        }

        function Jh(e, n) {
            return Object(s.a)(e, ["config", "BigNumber"], function (e) {
                var t = e.config, r = e.BigNumber;
                return "BigNumber" === t.number ? new r(n) : n
            })
        }

        var Wh = ["typed", "isInteger"], Yh = Object(s.a)("apply", Wh, function (e) {
                var t = e.typed, r = e.isInteger, n = Ot({typed: t, isInteger: r});
                return t("apply", {
                    "...any": function (e) {
                        var t = e[1];
                        Object(ie.y)(t) ? e[1] = t - 1 : Object(ie.e)(t) && (e[1] = t.minus(1));
                        try {
                            return n.apply(null, e)
                        } catch (e) {
                            throw zc(e)
                        }
                    }
                })
            }, {isTransformFunction: !0}), Xh = ["typed", "Index", "matrix", "range"],
            Qh = Object(s.a)("column", Xh, function (e) {
                var t = e.typed, r = e.Index, n = e.matrix, i = e.range,
                    a = Un({typed: t, Index: r, matrix: n, range: i});
                return t("column", {
                    "...any": function (e) {
                        var t = e.length - 1, r = e[t];
                        Object(ie.y)(r) && (e[t] = r - 1);
                        try {
                            return a.apply(null, e)
                        } catch (e) {
                            throw zc(e)
                        }
                    }
                })
            }, {isTransformFunction: !0});

        function Kh(e, t, r) {
            var n = e.filter(function (e) {
                return Object(ie.J)(e) && !(e.name in t) && !(e.name in r)
            })[0];
            if (!n) throw new Error('No undefined variable found in inline expression "' + e + '"');
            var i = n.name, a = Object.create(r), o = e.compile();
            return function (e) {
                return a[i] = e, o.evaluate(a)
            }
        }

        var ed = ["typed"], td = Object(s.a)("filter", ed, function (e) {
            var t = e.typed;

            function r(e, t, r) {
                var n, i;
                return e[0] && (n = e[0].compile().evaluate(r)), e[1] && (i = Object(ie.J)(e[1]) || Object(ie.q)(e[1]) ? e[1].compile().evaluate(r) : Kh(e[1], t, r)), a(n, i)
            }

            r.rawArgs = !0;
            var a = t("filter", {
                "Array, function": rd, "Matrix, function": function (e, t) {
                    return e.create(rd(e.toArray(), t))
                }, "Array, RegExp": q.d, "Matrix, RegExp": function (e, t) {
                    return e.create(Object(q.d)(e.toArray(), t))
                }
            });
            return r
        }, {isTransformFunction: !0});

        function rd(e, n) {
            var i = Vn(n);
            return Object(q.c)(e, function (e, t, r) {
                return 1 === i ? n(e) : 2 === i ? n(e, [t + 1]) : n(e, [t + 1], r)
            })
        }

        var nd = ["typed"], id = Object(s.a)("forEach", nd, function (e) {
            var t = e.typed;

            function r(e, t, r) {
                var n, i;
                return e[0] && (n = e[0].compile().evaluate(r)), e[1] && (i = Object(ie.J)(e[1]) || Object(ie.q)(e[1]) ? e[1].compile().evaluate(r) : Kh(e[1], t, r)), a(n, i)
            }

            r.rawArgs = !0;
            var a = t("forEach", {
                "Array | Matrix, function": function (t, i) {
                    var a = Vn(i);
                    !function r(e, n) {
                        Array.isArray(e) ? Object(q.f)(e, function (e, t) {
                            r(e, n.concat(t + 1))
                        }) : 1 === a ? i(e) : 2 === a ? i(e, n) : i(e, n, t)
                    }(t.valueOf(), [])
                }
            });
            return r
        }, {isTransformFunction: !0}), ad = ["Index"], od = Object(s.a)("index", ad, function (e) {
            var a = e.Index;
            return function () {
                for (var e = [], t = 0, r = arguments.length; t < r; t++) {
                    var n = arguments[t];
                    if (Object(ie.D)(n)) n.start--, n.end -= 0 < n.step ? 0 : 2; else if (n && !0 === n.isSet) n = n.map(function (e) {
                        return e - 1
                    }); else if (Object(ie.b)(n) || Object(ie.v)(n)) n = n.map(function (e) {
                        return e - 1
                    }); else if (Object(ie.y)(n)) n--; else if (Object(ie.e)(n)) n = n.toNumber() - 1; else if ("string" != typeof n) throw new TypeError("Dimension must be an Array, Matrix, number, string, or Range");
                    e[t] = n
                }
                var i = new a;
                return a.apply(i, e), i
            }
        }, {isTransformFunction: !0}), sd = ["typed"], ud = Object(s.a)("map", sd, function (e) {
            var t = e.typed;

            function r(e, t, r) {
                var n, i;
                return e[0] && (n = e[0].compile().evaluate(r)), e[1] && (i = Object(ie.J)(e[1]) || Object(ie.q)(e[1]) ? e[1].compile().evaluate(r) : Kh(e[1], t, r)), a(n, i)
            }

            r.rawArgs = !0;
            var a = t("map", {
                "Array, function": function (e, t) {
                    return cd(e, t, e)
                }, "Matrix, function": function (e, t) {
                    return e.create(cd(e.valueOf(), t, e))
                }
            });
            return r
        }, {isTransformFunction: !0});

        function cd(e, t, i) {
            var a = Vn(t);
            return function r(e, n) {
                return Array.isArray(e) ? Object(q.k)(e, function (e, t) {
                    return r(e, n.concat(t + 1))
                }) : 1 === a ? t(e) : 2 === a ? t(e, n) : t(e, n, i)
            }(e, [])
        }

        var fd = ["typed", "larger"], ld = Object(s.a)("max", fd, function (e) {
                var t = e.typed, r = e.larger, n = rs({typed: t, larger: r});
                return t("max", {
                    "...any": function (e) {
                        var t;
                        2 === e.length && Object(ie.i)(e[0]) && (t = e[1], Object(ie.y)(t) ? e[1] = t - 1 : Object(ie.e)(t) && (e[1] = t.minus(1)));
                        try {
                            return n.apply(null, e)
                        } catch (e) {
                            throw zc(e)
                        }
                    }
                })
            }, {isTransformFunction: !0}), pd = ["typed", "add", "divide"], md = Object(s.a)("mean", pd, function (e) {
                var t = e.typed, r = e.add, n = e.divide, i = Yl({typed: t, add: r, divide: n});
                return t("mean", {
                    "...any": function (e) {
                        var t;
                        2 === e.length && Object(ie.i)(e[0]) && (t = e[1], Object(ie.y)(t) ? e[1] = t - 1 : Object(ie.e)(t) && (e[1] = t.minus(1)));
                        try {
                            return i.apply(null, e)
                        } catch (e) {
                            throw zc(e)
                        }
                    }
                })
            }, {isTransformFunction: !0}), hd = ["typed", "smaller"], dd = Object(s.a)("min", hd, function (e) {
                var t = e.typed, r = e.smaller, n = is({typed: t, smaller: r});
                return t("min", {
                    "...any": function (e) {
                        var t;
                        2 === e.length && Object(ie.i)(e[0]) && (t = e[1], Object(ie.y)(t) ? e[1] = t - 1 : Object(ie.e)(t) && (e[1] = t.minus(1)));
                        try {
                            return n.apply(null, e)
                        } catch (e) {
                            throw zc(e)
                        }
                    }
                })
            }, {isTransformFunction: !0}),
            yd = ["typed", "config", "?matrix", "?bignumber", "smaller", "smallerEq", "larger", "largerEq"],
            gd = Object(s.a)("range", yd, function (e) {
                var t = e.typed, r = e.config, n = e.matrix, i = e.bignumber, a = e.smaller, o = e.smallerEq,
                    s = e.larger, u = e.largerEq, c = wi({
                        typed: t,
                        config: r,
                        matrix: n,
                        bignumber: i,
                        smaller: a,
                        smallerEq: o,
                        larger: s,
                        largerEq: u
                    });
                return t("range", {
                    "...any": function (e) {
                        return "boolean" != typeof e[e.length - 1] && e.push(!0), c.apply(null, e)
                    }
                })
            }, {isTransformFunction: !0}), vd = ["typed", "Index", "matrix", "range"],
            bd = Object(s.a)("row", vd, function (e) {
                var t = e.typed, r = e.Index, n = e.matrix, i = e.range,
                    a = Ci({typed: t, Index: r, matrix: n, range: i});
                return t("row", {
                    "...any": function (e) {
                        var t = e.length - 1, r = e[t];
                        Object(ie.y)(r) && (e[t] = r - 1);
                        try {
                            return a.apply(null, e)
                        } catch (e) {
                            throw zc(e)
                        }
                    }
                })
            }, {isTransformFunction: !0}), xd = ["typed", "matrix"], wd = Object(s.a)("subset", xd, function (e) {
                var t = e.typed, r = e.matrix, n = $i({typed: t, matrix: r});
                return t("subset", {
                    "...any": function (e) {
                        try {
                            return n.apply(null, e)
                        } catch (e) {
                            throw zc(e)
                        }
                    }
                })
            }, {isTransformFunction: !0}), Nd = ["typed", "matrix", "isInteger"],
            Od = Object(s.a)("concat", Nd, function (e) {
                var t = e.typed, r = e.matrix, n = e.isInteger, i = Rn({typed: t, matrix: r, isInteger: n});
                return t("concat", {
                    "...any": function (e) {
                        var t = e.length - 1, r = e[t];
                        Object(ie.y)(r) ? e[t] = r - 1 : Object(ie.e)(r) && (e[t] = r.minus(1));
                        try {
                            return i.apply(null, e)
                        } catch (e) {
                            throw zc(e)
                        }
                    }
                })
            }, {isTransformFunction: !0}), Md = ["typed", "sqrt", "variance"],
            jd = Object(s.a)("std", Md, function (e) {
                var t = e.typed, r = e.sqrt, n = e.variance, i = up({typed: t, sqrt: r, variance: n});
                return t("std", {
                    "...any": function (e) {
                        var t;
                        2 <= e.length && Object(ie.i)(e[0]) && (t = e[1], Object(ie.y)(t) ? e[1] = t - 1 : Object(ie.e)(t) && (e[1] = t.minus(1)));
                        try {
                            return i.apply(null, e)
                        } catch (e) {
                            throw zc(e)
                        }
                    }
                })
            }, {isTransformFunction: !0}), Ed = ["typed", "config", "add", "?bignumber", "?fraction"],
            Sd = Object(s.a)("sum", Ed, function (e) {
                var t = e.typed, r = e.config, n = e.add, i = e.bignumber, a = e.fraction,
                    o = Jl({typed: t, config: r, add: n, bignumber: i, fraction: a});
                return t("sum", {
                    "...any": function (e) {
                        var t;
                        2 === e.length && Object(ie.i)(e[0]) && (t = e[1], Object(ie.y)(t) ? e[1] = t - 1 : Object(ie.e)(t) && (e[1] = t.minus(1)));
                        try {
                            return o.apply(null, e)
                        } catch (e) {
                            throw zc(e)
                        }
                    }
                })
            }, {isTransformFunction: !0}), Ad = "variance",
            Cd = ["typed", "add", "subtract", "multiply", "divide", "apply", "isNaN"],
            Td = Object(s.a)(Ad, Cd, function (e) {
                var t = e.typed, r = e.add, n = e.subtract, i = e.multiply, a = e.divide, o = e.apply, s = e.isNaN,
                    u = ip({typed: t, add: r, subtract: n, multiply: i, divide: a, apply: o, isNaN: s});
                return t(Ad, {
                    "...any": function (e) {
                        var t;
                        2 <= e.length && Object(ie.i)(e[0]) && (t = e[1], Object(ie.y)(t) ? e[1] = t - 1 : Object(ie.e)(t) && (e[1] = t.minus(1)));
                        try {
                            return u.apply(null, e)
                        } catch (e) {
                            throw zc(e)
                        }
                    }
                })
            }, {isTransformFunction: !0})
    }, function (e, t, r) {
        "use strict";
        r.r(t), r.d(t, "create", function () {
            return E
        });
        var d = r(3), n = r(17), l = r.n(n);
        var y = r(1), g = r(0), v = r(2), b = r(12);

        function x(e) {
            return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function p(s, e, u, c) {
            function f(e, t) {
                t && "function" == typeof t.transform ? (u.expression.transform[e] = t.transform, r(e) && (u.expression.mathWithTransform[e] = t.transform)) : (delete u.expression.transform[e], r(e) && (u.expression.mathWithTransform[e] = t))
            }

            function l(e) {
                delete u.expression.transform[e], r(e) ? u.expression.mathWithTransform[e] = u[e] : delete u.expression.mathWithTransform[e]
            }

            function p(e) {
                return "function" == typeof e && "object" === x(e.signatures)
            }

            function r(e) {
                return !Object(d.f)(t, e)
            }

            function m(e) {
                return !(-1 !== e.fn.indexOf(".") || Object(d.f)(t, e.fn) || e.meta && e.meta.isClass)
            }

            function h(e) {
                return void 0 !== e && void 0 !== e.meta && !0 === e.meta.isTransformFunction
            }

            var t = {expression: !0, type: !0, docs: !0, error: !0, json: !0, chain: !0};
            return function (e, o) {
                var t = arguments.length;
                if (1 !== t && 2 !== t) throw new b.a("import", t, 1, 2);
                o = o || {};
                var r, n = {};
                for (var i in !function t(r, e, n) {
                    if (Array.isArray(e)) e.forEach(function (e) {
                        return t(r, e)
                    }); else if ("object" === x(e)) for (var i in e) Object(d.f)(e, i) && t(r, e[i], i); else if (Object(g.b)(e) || void 0 !== n) {
                        var a = Object(g.b)(e) ? h(e) ? e.fn + ".transform" : e.fn : n;
                        if (Object(d.f)(r, a) && r[a] !== e && !o.silent) throw new Error('Cannot import "' + a + '" twice');
                        r[a] = e
                    } else if (!o.silent) throw new TypeError("Factory, Object, or Array expected")
                }(n, e), n) if (Object(d.f)(n, i)) {
                    var a = n[i];
                    if (Object(g.b)(a)) !function (r, n) {
                        var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : r.fn;
                        if (Object(v.b)(i, ".")) throw new Error("Factory name should not contain a nested path. Name: " + JSON.stringify(i));

                        function e() {
                            var t = {};
                            r.dependencies.map(g.c).forEach(function (e) {
                                if (Object(v.b)(e, ".")) throw new Error("Factory dependency should not contain a nested path. Name: " + JSON.stringify(e));
                                "math" === e ? t.math = u : "mathWithTransform" === e ? t.mathWithTransform = u.expression.mathWithTransform : "classes" === e ? t.classes = u : t[e] = u[e]
                            });
                            var e = r(t);
                            if (e && "function" == typeof e.transform) throw new Error('Transforms cannot be attached to factory functions. Please create a separate function for it with exports.path="expression.transform"');
                            if (void 0 === o || n.override) return e;
                            if (p(o) && p(e)) return s(o, e);
                            if (n.silent) return o;
                            throw new Error('Cannot import "' + i + '": already exists')
                        }

                        var t = h(r) ? u.expression.transform : u, a = i in u.expression.transform,
                            o = Object(d.f)(t, i) ? t[i] : void 0;
                        r.meta && !1 === r.meta.lazy ? t[i] = e() : Object(d.h)(t, i, e), o && a ? l(i) : (h(r) || m(r)) && Object(d.h)(u.expression.mathWithTransform, i, function () {
                            return t[i]
                        });
                        c[i] = r, u.emit("import", i, e)
                    }(a, o); else if ("function" == typeof (r = a) || "number" == typeof r || "string" == typeof r || "boolean" == typeof r || null === r || Object(y.L)(r) || Object(y.j)(r) || Object(y.e)(r) || Object(y.o)(r) || Object(y.v)(r) || Array.isArray(r)) !function (e, t, r) {
                        r.wrap && "function" == typeof t && (t = function (i) {
                            function e() {
                                for (var e = [], t = 0, r = arguments.length; t < r; t++) {
                                    var n = arguments[t];
                                    e[t] = n && n.valueOf()
                                }
                                return i.apply(u, e)
                            }

                            i.transform && (e.transform = i.transform);
                            return e
                        }(t));
                        !function (e) {
                            return "function" == typeof e && "string" == typeof e.signature
                        }(t) || (t = s(e, function (e, t, r) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r, e
                        }({}, t.signature, t)));
                        if (p(u[e]) && p(t)) return t = r.override ? s(e, t.signatures) : s(u[e], t), u[e] = t, delete c[e], f(e, t), u.emit("import", e, function () {
                            return t
                        });
                        if (void 0 === u[e] || r.override) return u[e] = t, delete c[e], f(e, t), u.emit("import", e, function () {
                            return t
                        });
                        if (!r.silent) throw new Error('Cannot import "' + e + '": already exists')
                    }(i, a, o); else if (!o.silent) throw new TypeError("Factory, Object, or Array expected")
                }
            }
        }

        var m = {epsilon: 1e-12, matrix: "Matrix", number: "number", precision: 64, predictable: !1, randomSeed: null},
            h = ["Matrix", "Array"], w = ["number", "BigNumber", "Fraction"];

        function N(e, t, r) {
            var n, i;
            void 0 !== e[t] && (n = r, i = e[t], -1 === n.indexOf(i)) && console.warn('Warning: Unknown value "' + e[t] + '" for configuration option "' + t + '". Available options: ' + r.map(function (e) {
                return JSON.stringify(e)
            }).join(", ") + ".")
        }

        var O = r(6), M = r(9);

        function j() {
            return (j = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }).apply(this, arguments)
        }

        function E(e, t) {
            var r = j({}, m, t);
            if ("function" != typeof Object.create) throw new Error("ES5 not supported by this JavaScript engine. Please load the es5-shim and es5-sham library for compatibility.");
            var n, i, a, o, s = (n = {
                isNumber: y.y,
                isComplex: y.j,
                isBigNumber: y.e,
                isFraction: y.o,
                isUnit: y.L,
                isString: y.I,
                isArray: y.b,
                isMatrix: y.v,
                isCollection: y.i,
                isDenseMatrix: y.n,
                isSparseMatrix: y.H,
                isRange: y.D,
                isIndex: y.t,
                isBoolean: y.g,
                isResultSet: y.G,
                isHelp: y.s,
                isFunction: y.p,
                isDate: y.m,
                isRegExp: y.F,
                isObject: y.z,
                isNull: y.x,
                isUndefined: y.K,
                isAccessorNode: y.a,
                isArrayNode: y.c,
                isAssignmentNode: y.d,
                isBlockNode: y.f,
                isConditionalNode: y.k,
                isConstantNode: y.l,
                isFunctionAssignmentNode: y.q,
                isFunctionNode: y.r,
                isIndexNode: y.u,
                isNode: y.w,
                isObjectNode: y.A,
                isOperatorNode: y.B,
                isParenthesisNode: y.C,
                isRangeNode: y.E,
                isSymbolNode: y.J,
                isChain: y.h
            }, i = new l.a, n.on = i.on.bind(i), n.off = i.off.bind(i), n.once = i.once.bind(i), n.emit = i.emit.bind(i), n);

            function u(e) {
                if (e) {
                    var t = Object(d.i)(a, d.a);
                    N(e, "matrix", h), N(e, "number", w), Object(d.b)(a, e);
                    var r = Object(d.i)(a, d.a), n = Object(d.i)(e, d.a);
                    return o("config", r, t, n), r
                }
                return Object(d.i)(a, d.a)
            }

            s.config = (a = r, o = s.emit, u.MATRIX_OPTIONS = h, u.NUMBER_OPTIONS = w, Object.keys(m).forEach(function (e) {
                Object.defineProperty(u, e, {
                    get: function () {
                        return a[e]
                    }, enumerable: !0, configurable: !0
                })
            }), u), s.expression = {transform: {}, mathWithTransform: {config: s.config}};
            var c = {};
            var f = p(function () {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return s.typed.apply(s.typed, t)
            }, 0, s, c);
            return s.import = f, s.on("config", function () {
                Object(d.k)(c).forEach(function (e) {
                    e && e.meta && e.meta.recreateOnConfigChange && f(e, {override: !0})
                })
            }), s.create = E.bind(null, e), s.factory = g.a, s.import(Object(d.k)(Object(d.c)(e))), s.ArgumentsError = b.a, s.DimensionError = O.a, s.IndexError = M.a, s
        }
    }], i.c = n, i.d = function (e, t, r) {
        i.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
    }, i.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, i.t = function (t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (i.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var n in t) i.d(r, n, function (e) {
            return t[e]
        }.bind(null, n));
        return r
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 18);

    function i(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {i: e, l: !1, exports: {}};
        return r[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
    }

    var r, n
});
//# sourceMappingURL=math.min.map