!function (e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {i: r, l: !1, exports: {}};
        return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }

    var n = {};
    t.m = e, t.c = n, t.d = function (e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: r})
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 0)
}([function (e, t, n) {
    e.exports = n(1)
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function s(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function l(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function p(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function f(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function d(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function h(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function y(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function m(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function _(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function v(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function b(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function g(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function w(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function E(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function O(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function S(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function k(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function P(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function C(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function A(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function T(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }

    function j(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function R(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function q(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function M(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function I(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function N(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function L(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function x(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function F(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function B(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }

    function U(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function D(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function z(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function H(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }

    function V(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function K(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function Y(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function G(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function J(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function $(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function W(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }

    function Z(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function Q(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function X(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function ee(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function te(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function ne(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function re(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function oe(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function ie(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function ae(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var se, ue, ce, le, pe, fe = function (e) {
            function t(e) {
                r(this, t);
                var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return window.__stripeElementsController && window.__stripeElementsController.reportIntegrationError(e), n.name = "IntegrationError", n
            }

            return i(t, e), t
        }(Error), de = fe, he = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, ye = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, me = function (e, t) {
            for (var n = 0; n < e.length; n++) if (t(e[n])) return e[n]
        }, _e = function (e, t) {
            for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
            return -1
        }, ve = function (e) {
            return e && "object" === (void 0 === e ? "undefined" : ye(e)) && (e.constructor === Array || e.constructor === Object)
        }, be = function (e) {
            return ve(e) ? Array.isArray(e) ? e.slice(0, e.length) : he({}, e) : e
        }, ge = function e(t) {
            return function () {
                for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                if (Array.isArray(r[0]) && t) return be(r[0]);
                var i = Array.isArray(r[0]) ? [] : {};
                return r.forEach(function (n) {
                    n && Object.keys(n).forEach(function (r) {
                        var o = i[r], a = n[r], s = ve(o) && !(t && Array.isArray(o));
                        "object" === (void 0 === a ? "undefined" : ye(a)) && s ? i[r] = e(t)(o, be(a)) : void 0 !== a ? i[r] = ve(a) ? e(t)(a) : be(a) : void 0 !== o && (i[r] = o)
                    })
                }), i
            }
        }, we = (ge(!1), ge(!0)), Ee = function (e, t) {
            for (var n = {}, r = 0; r < t.length; r++) n[t[r]] = !0;
            for (var o = [], i = 0; i < e.length; i++) n[e[i]] && o.push(e[i]);
            return o
        },
        Oe = ["aed", "afn", "all", "amd", "ang", "aoa", "ars", "aud", "awg", "azn", "bam", "bbd", "bdt", "bgn", "bhd", "bif", "bmd", "bnd", "bob", "brl", "bsd", "btn", "bwp", "byr", "bzd", "cad", "cdf", "chf", "clf", "clp", "cny", "cop", "crc", "cuc", "cup", "cve", "czk", "djf", "dkk", "dop", "dzd", "egp", "ern", "etb", "eur", "fjd", "fkp", "gbp", "gel", "ghs", "gip", "gmd", "gnf", "gtq", "gyd", "hkd", "hnl", "hrk", "htg", "huf", "idr", "ils", "inr", "iqd", "irr", "isk", "jmd", "jod", "jpy", "kes", "kgs", "khr", "kmf", "kpw", "krw", "kwd", "kyd", "kzt", "lak", "lbp", "lkr", "lrd", "lsl", "ltl", "lvl", "lyd", "mad", "mdl", "mga", "mkd", "mmk", "mnt", "mop", "mro", "mur", "mvr", "mwk", "mxn", "myr", "mzn", "nad", "ngn", "nio", "nok", "npr", "nzd", "omr", "pab", "pen", "pgk", "php", "pkr", "pln", "pyg", "qar", "ron", "rsd", "rub", "rwf", "sar", "sbd", "scr", "sdg", "sek", "sgd", "shp", "skk", "sll", "sos", "srd", "ssp", "std", "svc", "syp", "szl", "thb", "tjs", "tmt", "tnd", "top", "try", "ttd", "twd", "tzs", "uah", "ugx", "usd", "uyu", "uzs", "vef", "vnd", "vuv", "wst", "xaf", "xag", "xau", "xcd", "xdr", "xof", "xpf", "yer", "zar", "zmk", "zmw", "btc", "jep", "eek", "ghc", "mtl", "tmm", "yen", "zwd", "zwl", "zwn", "zwr"],
        Se = Oe,
        ke = ["AT", "AU", "BE", "BR", "CA", "CH", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "HK", "IE", "IT", "JP", "LT", "LU", "LV", "MX", "NL", "NZ", "NO", "PH", "PL", "PT", "RO", "SE", "SG", "SK", "US"],
        Pe = ke, Ce = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, Ae = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, Te = function (e, t, n) {
            return "Invalid value for " + n.label + ": " + (n.path.join(".") || "value") + " should be " + e + ". You specified: " + t + "."
        }, je = function (e) {
            return {type: "valid", value: e, warnings: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []}
        }, Re = function (e) {
            return {error: e, errorType: "full", type: "error"}
        }, qe = function (e, t, n) {
            return {expected: e, actual: String(t), options: n, errorType: "mismatch", type: "error"}
        }, Me = function (e) {
            return function (t, n) {
                return void 0 === t ? je(t) : e(t, n)
            }
        }, Ie = function (e, t) {
            return function (n, r) {
                var o = e(n, r), i = t(n, r);
                return "error" === o.type && "error" === i.type ? "mismatch" === o.errorType ? "mismatch" === i.errorType ? qe(o.expected + " or " + i.expected, n, r) : Re(i.error) : Re(o.error) : "valid" === o.type ? o : i
            }
        }, Ne = function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return function (e, n) {
                var r = me(t, function (t) {
                    return t === e
                });
                return void 0 === r ? qe("one of the following strings: " + t.join(", "), e, n) : je(r)
            }
        }, Le = Ne.apply(void 0, s(Pe)), xe = Ne.apply(void 0, s(Se)), Fe = function (e, t) {
            return "string" == typeof e ? je(e) : qe("a string", e, t)
        }, Be = function (e) {
            return function (t, n) {
                return "string" == typeof t ? je(t) : void 0 === t ? je(e()) : qe("a string", t, n)
            }
        }, Ue = function (e, t) {
            return "boolean" == typeof e ? je(e) : qe("a boolean", e, t)
        }, De = function (e, t) {
            return "number" == typeof e && e === parseInt(e, 10) ? je(e) : qe("an amount in the currency's subunit", e, t)
        }, ze = function (e, t) {
            return e && "object" === (void 0 === e ? "undefined" : Ae(e)) ? je(e) : qe("an object", e, t)
        }, He = function (e) {
            return function (t, n) {
                if (Array.isArray(t)) {
                    return t.map(function (t, r) {
                        return e(t, Ce({}, n, {path: [].concat(s(n.path), [String(r)])}))
                    }).reduce(function (e, t) {
                        return "error" === e.type ? e : "error" === t.type ? t : je([].concat(s(e.value), [t.value]), [].concat(s(e.warnings), s(t.warnings)))
                    }, je([]))
                }
                return qe("array", t, n)
            }
        }, Ve = function (e) {
            return function (t) {
                return function (n, r) {
                    if (Array.isArray(n)) {
                        var o = t(n, r);
                        if ("valid" === o.type) for (var i = {}, a = 0; a < o.value.length; a += 1) {
                            var s = o.value[a];
                            if ("object" === (void 0 === s ? "undefined" : Ae(s)) && s && "string" == typeof s[e]) {
                                var u = s[e];
                                if (i[u]) return Re(new de("Duplicate value for " + e + ": " + u + ". The property '" + e + "' of '" + r.path.join(".") + "' has to be unique."));
                                i[u] = !0
                            }
                        }
                        return o
                    }
                    return qe("array", n, r)
                }
            }
        }, Ke = function (e) {
            return function (t, n) {
                return void 0 === t ? je(void 0) : qe("used in " + e + " instead", t, n)
            }
        }, Ye = function (e) {
            return function (t) {
                return function (n, r) {
                    if (n && "object" === (void 0 === n ? "undefined" : Ae(n)) && !Array.isArray(n)) {
                        var o = n, i = me(Object.keys(o), function (e) {
                            return !t[e]
                        });
                        if (i && e) return Re(new de("Invalid " + r.label + " parameter: " + [].concat(s(r.path), [i]).join(".") + " is not an accepted parameter."));
                        var u = je({});
                        return i && (u = Object.keys(o).reduce(function (e, n) {
                            return t[n] ? e : je(e.value, [].concat(s(e.warnings), ["Unrecognized " + r.label + " parameter: " + [].concat(s(r.path), [n]).join(".") + " is not a recognized parameter. This may cause issues with your integration in the future."]))
                        }, u)), Object.keys(t).reduce(function (e, n) {
                            if ("error" === e.type) return e;
                            var i = t[n], u = i(o[n], Ce({}, r, {path: [].concat(s(r.path), [n])}));
                            return "valid" === u.type && void 0 !== u.value ? je(Ce({}, e.value, a({}, n, u.value)), [].concat(s(e.warnings), s(u.warnings))) : "valid" === u.type ? je(e.value, [].concat(s(e.warnings), s(u.warnings))) : u
                        }, u)
                    }
                    return qe("an object", n, r)
                }
            }
        }, Ge = Ye(!0), Je = Ye(!1), $e = function (e, t, n, r) {
            var o = r || {}, i = e(t, {origin: o.origin || "", element: o.element || "", label: n, path: []});
            if ("valid" === i.type) return {value: i.value, warnings: i.warnings};
            throw"full" === i.errorType ? i.error : new de(Te(i.expected, i.actual, i.options))
        }, We = function (e) {
            return /^http(s)?:\/\//.test(e)
        }, Ze = function (e) {
            if (!We(e)) return null;
            var t = document.createElement("a");
            t.href = e;
            var n = t.protocol, r = t.host, o = /:80$/, i = /:443$/;
            return "http:" === n && o.test(r) ? r = r.replace(o, "") : "https:" === n && i.test(r) && (r = r.replace(i, "")), {
                host: r,
                protocol: n,
                origin: n + "//" + r
            }
        }, Qe = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = Ze(e);
            return !!n && n.host !== (t || window.location.host)
        }, Xe = function (e, t) {
            if ("/" === t[0]) {
                var n = Ze(e);
                return n ? "" + n.origin + t : t
            }
            return "" + e.replace(/\/[^\/]*$/, "/") + t
        }, et = {
            TOKENIZE: "TOKENIZE",
            FETCH_LOCALE: "FETCH_LOCALE",
            UPDATE_CSS_FONTS: "UPDATE_CSS_FONTS",
            CREATE_SOURCE: "CREATE_SOURCE",
            AUTHORIZE_SOURCE: "AUTHORIZE_SOURCE",
            GET_AUTHORIZATION_STATUS: "GET_AUTHORIZATION_STATUS",
            RETRIEVE_SOURCE: "RETRIEVE_SOURCE",
            CREATE_APPLE_PAY_SESSION: "CREATE_APPLE_PAY_SESSION"
        }, tt = et, nt = {
            CARD_ELEMENT: "CARD_ELEMENT",
            CONTROLLER: "CONTROLLER",
            METRICS_CONTROLLER: "METRICS_CONTROLLER",
            PAYMENT_REQUEST_ELEMENT: "PAYMENT_REQUEST_ELEMENT",
            PAYMENT_REQUEST: "PAYMENT_REQUEST"
        }, rt = nt, ot = function (e) {
            return "https://js.stripe.com/v3/" + (e || "")
        },
        it = (se = {}, u(se, rt.CARD_ELEMENT, ot("elements-inner-card-f1f107bc3be19582d08375dc8db0761f.html")), u(se, rt.CONTROLLER, ot("controller-48441917d8e492388ec0b503e914f7e5.html")), u(se, rt.METRICS_CONTROLLER, "https://js.stripe.com/v2/m/outer.html"), u(se, rt.PAYMENT_REQUEST_ELEMENT, ot("elements-inner-payment-request-675fcbe52e1b7d6ff2b09bf54570bffb.html")), u(se, rt.PAYMENT_REQUEST, ot("payment-request-inner-d6af0058452e3fda43613ea057f63c33.html")), se),
        at = it, st = Ze("https://js.stripe.com/v3/"), ut = st ? st.origin : "", ct = {
            family: "font-family",
            src: "src",
            unicodeRange: "unicode-range",
            style: "font-style",
            variant: "font-variant",
            stretch: "font-stretch",
            weight: "font-weight"
        }, lt = Object.keys(ct).reduce(function (e, t) {
            return e[ct[t]] = t, e
        }, {}), pt = 0, ft = function (e) {
            return "" + e + pt++
        }, dt = function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return t ? (parseInt(t, 10) ^ 16 * Math.random() >> parseInt(t, 10) / 4).toString(16) : "00000000-0000-4000-8000-000000000000".replace(/[08]/g, e)
        }, ht = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, yt = function e(t, n) {
            var r = [];
            return Object.keys(t).forEach(function (o) {
                var i = t[o], a = n ? n + "[" + o + "]" : o;
                if (i && "object" === (void 0 === i ? "undefined" : ht(i))) {
                    var s = e(i, a);
                    "" !== s && (r = [].concat(c(r), [s]))
                } else void 0 !== i && null !== i && (r = [].concat(c(r), [a + "=" + encodeURIComponent(String(i))]))
            }), r.join("&").replace(/%20/g, "+")
        }, mt = yt, _t = n(2), vt = n.n(_t), bt = window.Promise || vt.a, gt = bt, wt = n(6), Et = n.n(wt),
        Ot = function () {
            function e(e, t) {
                var n = [], r = !0, o = !1, i = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
                } catch (e) {
                    o = !0, i = e
                } finally {
                    try {
                        !r && s.return && s.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }

            return function (t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(), St = function (e, t) {
            var n = {};
            t.forEach(function (e) {
                var t = Ot(e, 2), r = t[0], o = t[1];
                r.split(/\s+/).forEach(function (e) {
                    e && (n[e] = n[e] || o)
                })
            }), e.className = Et()(e.className, n)
        }, kt = function (e, t) {
            e.style.cssText = Object.keys(t).map(function (e) {
                return e + ": " + t[e] + " !important;"
            }).join(" ")
        }, Pt = function (e) {
            try {
                return window.parent.frames[e]
            } catch (e) {
                return null
            }
        }, Ct = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, At = function (e) {
            var t = e.frameId, n = e.controllerId, r = e.type, o = ut, i = void 0;
            "controller" === r ? i = Pt(t) : "group" === r ? i = Pt(n) : "outer" === r ? i = window.frames[t] : "inner" === r && (o = "*", i = window.parent), i && i.postMessage(JSON.stringify(Ct({}, e, {__stripeJsV3: !0})), o)
        }, Tt = function (e) {
            try {
                var t = "string" == typeof e ? JSON.parse(e) : e;
                return t.__stripeJsV3 ? t : null
            } catch (e) {
                return null
            }
        }, jt = function e() {
            var t = this;
            l(this, e), this.once = function (e, n) {
                var r = function r() {
                    t.off(e, r), n.apply(void 0, arguments)
                };
                return t._addEventListener(e, r, n)
            }, this.hasRegisteredListener = function (e) {
                return t._callbacks[e] && t._callbacks[e].length > 0
            }, this.removeAllListeners = function () {
                return t._callbacks = {}, t
            }, this.emit = function (e) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                return (t._callbacks[e] || []).forEach(function (e) {
                    return e.fn.apply(void 0, r)
                }), t
            }, this._addEventListener = function (e, n, r) {
                return t._callbacks[e] = t._callbacks[e] || [], t._callbacks[e].push({original: r, fn: n}), t
            }, this._removeEventListener = function (e, n) {
                if (n) {
                    for (var r = t._callbacks[e], o = void 0, i = 0; i < r.length; i++) if (o = r[i], o.fn === n || o.original === n) {
                        r.splice(i, 1);
                        break
                    }
                } else delete t._callbacks[e];
                return t
            }, this._callbacks = {}, this.on = this.addListener = this.addEventListener = this._addEventListener, this.off = this.removeListener = this.removeEventListener = this._removeEventListener
        }, Rt = jt, qt = function (e, t) {
            return function () {
                try {
                    for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return e.call.apply(e, [this].concat(r))
                } catch (e) {
                    if ("IntegrationError" === e.name) throw e;
                    var i = t || this && this._controller;
                    throw i && i.report("fatal.uncaught_error", {
                        iframe: !1,
                        name: e.name,
                        message: e.message || e.description,
                        fileName: e.fileName,
                        lineNumber: e.lineNumber,
                        columnNumber: e.columnNumber,
                        stack: e.stack && e.stack.substring(0, 1e3)
                    }), e
                }
            }
        }, Mt = function (e, t) {
            return Object.keys(e).forEach(function (n) {
                "_" !== n[0] && "function" == typeof e[n] && (e[n] = qt(e[n], t))
            }), e
        }, It = function (e) {
            function t() {
                p(this, t);
                var e = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return Mt(e), e
            }

            return d(t, e), t
        }(Rt), Nt = It, Lt = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, xt = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), Ft = function (e) {
            function t(e, n, r) {
                y(this, t);
                var o = m(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return o.type = e, o.loaded = !1, o._controllerId = n, o._persistentMessages = [], o._queuedMessages = [], o._requests = {}, o.id = o._generateId(), o._iframe = o._createIFrame(r), o.on("load", function () {
                    o.loaded = !0, o._ensureMounted(), o.loaded && (o._persistentMessages.forEach(function (e) {
                        return o._send(e)
                    }), o._queuedMessages.forEach(function (e) {
                        return o._send(e)
                    }), o._queuedMessages = [])
                }), o
            }

            return _(t, e), xt(t, [{
                key: "_generateId", value: function () {
                    return ft("__privateStripeFrame")
                }
            }, {
                key: "send", value: function (e) {
                    this._send({message: e, type: "outer", frameId: this.id, controllerId: this._controllerId})
                }
            }, {
                key: "sendPersistent", value: function (e) {
                    this._ensureMounted();
                    var t = {message: e, type: "outer", frameId: this.id, controllerId: this._controllerId};
                    this._persistentMessages = [].concat(h(this._persistentMessages), [t]), this.loaded && At(t)
                }
            }, {
                key: "action", value: function (e) {
                    var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = ft(e),
                        o = new gt(function (o, i) {
                            t._requests[r] = Lt({}, t._requests[r], {
                                resolve: o,
                                reject: i
                            }), t._send({
                                message: {action: "stripe-frame-action", payload: {type: e, nonce: r, options: n}},
                                type: "outer",
                                frameId: t.id,
                                controllerId: t._controllerId
                            })
                        });
                    return this._requests[r] = Lt({}, this._requests[r], {promise: o}), o
                }
            }, {
                key: "resolve", value: function (e, t) {
                    this._requests[e] && this._requests[e].resolve(t)
                }
            }, {
                key: "_send", value: function (e) {
                    this._ensureMounted(), this.loaded ? At(e) : this._queuedMessages = [].concat(h(this._queuedMessages), [e])
                }
            }, {
                key: "appendTo", value: function (e) {
                    e.appendChild(this._iframe)
                }
            }, {
                key: "unmount", value: function () {
                    this.loaded = !1, this.emit("unload")
                }
            }, {
                key: "_ensureMounted", value: function () {
                    this._isMounted() || this.unmount()
                }
            }, {
                key: "_isMounted", value: function () {
                    return !!document.body && document.body.contains(this._iframe)
                }
            }, {
                key: "_createIFrame", value: function (e) {
                    var t = window.location.href.toString(), n = Ze(t), r = n ? n.origin : "",
                        o = e.queryString && "string" == typeof e.queryString ? e.queryString : mt(Lt({}, e, {
                            origin: r,
                            referrer: t,
                            controllerId: this._controllerId
                        })), i = document.createElement("iframe");
                    return i.setAttribute("frameborder", "0"), i.setAttribute("allowTransparency", "true"), i.setAttribute("scrolling", "no"), i.setAttribute("name", this.id), i.setAttribute("allowpaymentrequest", "true"), i.src = at[this.type] + "#" + o, i
                }
            }]), t
        }(Nt), Bt = Ft, Ut = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), Dt = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, n, r)
            }
            if ("value" in o) return o.value;
            var a = o.get;
            if (void 0 !== a) return a.call(r)
        }, zt = {
            border: "none",
            margin: "0",
            padding: "0",
            width: "1px",
            "min-width": "100%",
            overflow: "hidden",
            display: "block",
            visibility: "hidden",
            position: "fixed",
            height: "1px",
            "pointer-events": "none"
        }, Ht = function (e) {
            function t(e, n, r) {
                v(this, t);
                var o = b(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r));
                return o.autoload = r.autoload || !1, "complete" === document.readyState ? o._ensureMounted() : (document.addEventListener("DOMContentLoaded", o._ensureMounted.bind(o)), window.addEventListener("load", o._ensureMounted.bind(o))), o
            }

            return g(t, e), Ut(t, [{
                key: "_ensureMounted", value: function () {
                    Dt(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_ensureMounted", this).call(this), this._isMounted() || this._autoMount()
                }
            }, {
                key: "_autoMount", value: function () {
                    if (document.body) this.appendTo(document.body); else if ("complete" === document.readyState || "interactive" === document.readyState) throw new de("Stripe.js requires that your page has a <body> element.");
                    this.autoload && (this.loaded = !0)
                }
            }, {
                key: "_createIFrame", value: function (e) {
                    var n = Dt(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_createIFrame", this).call(this, e);
                    return n.setAttribute("aria-hidden", "true"), n.setAttribute("allowpaymentrequest", "true"), n.setAttribute("tabIndex", "-1"), kt(n, zt), n
                }
            }]), t
        }(Bt), Vt = Ht, Kt = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), Yt = function (e) {
            function t() {
                return w(this, t), E(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }

            return O(t, e), Kt(t, [{
                key: "_generateId", value: function () {
                    return this._controllerId
                }
            }]), t
        }(Vt), Gt = Yt, Jt = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), $t = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, n, r)
            }
            if ("value" in o) return o.value;
            var a = o.get;
            if (void 0 !== a) return a.call(r)
        }, Wt = {
            border: "none",
            margin: "0",
            padding: "0",
            width: "1px",
            "min-width": "100%",
            overflow: "hidden",
            display: "block"
        }, Zt = function (e) {
            function t() {
                return S(this, t), k(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }

            return P(t, e), Jt(t, [{
                key: "update", value: function (e) {
                    this.send({action: "stripe-user-update", payload: e})
                }
            }, {
                key: "updateStyle", value: function (e) {
                    var t = this;
                    Object.keys(e).forEach(function (n) {
                        t._iframe.style[n] = e[n]
                    })
                }
            }, {
                key: "focus", value: function () {
                    this.loaded && this.send({action: "stripe-user-focus", payload: {}})
                }
            }, {
                key: "blur", value: function () {
                    this.loaded && (this._iframe.contentWindow.blur(), this._iframe.blur())
                }
            }, {
                key: "clear", value: function () {
                    this.send({action: "stripe-user-clear", payload: {}})
                }
            }, {
                key: "_createIFrame", value: function (e) {
                    var n = $t(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_createIFrame", this).call(this, e);
                    return n.setAttribute("title", "Secure payment input frame"), kt(n, Wt), n
                }
            }]), t
        }(Bt), Qt = Zt, Xt = function (e) {
            var t = Ze(e), n = t ? t.host : "";
            return "stripe.com" === n || !!n.match(/\.stripe\.(com|me)$/)
        }, en = function (e) {
            return Xt(e)
        }, tn = function (e, t) {
            var n = Ze(e), r = Ze(t);
            return !(!n || !r) && n.origin === r.origin
        }, nn = function (e) {
            return /(MSIE ([0-9]{1,}[.0-9]{0,})|Trident\/)/i.test(e)
        }, rn = function (e) {
            return /SamsungBrowser/.test(e)
        }, on = function (e) {
            return /iPad|iPhone/i.test(e) && !nn(e)
        }, an = function (e) {
            return /Android/.test(e) && !nn(e)
        }, sn = window.navigator.userAgent, un = function (e) {
            return /Edge\//i.test(e)
        }(sn), cn = (nn(sn), function (e) {
            /MSIE 9/i.test(e)
        }(sn), function (e) {
            /MSIE ([0-9]{1,}[.0-9]{0,})/i.test(e)
        }(sn), on(sn)), ln = (function (e) {
            on(e) || an(e)
        }(sn), an(sn), function (e) {
            /^((?!chrome|android).)*safari/i.test(e) && rn(e)
        }(sn), function (e) {
            /Firefox\//i.test(e)
        }(sn), rn(sn)), pn = (window.ApplePaySession, {
            card: "card",
            cardNumber: "cardNumber",
            cardExpiry: "cardExpiry",
            cardCvc: "cardCvc",
            postalCode: "postalCode",
            iban: "iban",
            ideal: "ideal",
            paymentRequestButton: "paymentRequestButton"
        }), fn = pn, dn = (ue = {}, C(ue, fn.card, {
            unique: !0,
            conflict: [fn.cardNumber, fn.cardExpiry, fn.cardCvc, fn.postalCode]
        }), C(ue, fn.cardNumber, {unique: !0, conflict: [fn.card]}), C(ue, fn.cardExpiry, {
            unique: !0,
            conflict: [fn.card]
        }), C(ue, fn.cardCvc, {unique: !0, conflict: [fn.card]}), C(ue, fn.postalCode, {
            unique: !0,
            conflict: [fn.card]
        }), C(ue, fn.paymentRequestButton, {unique: !0, conflict: [], beta: !0}), ue), hn = dn,
        yn = (ce = {}, A(ce, fn.card, rt.CARD_ELEMENT), A(ce, fn.cardNumber, rt.CARD_ELEMENT), A(ce, fn.cardExpiry, rt.CARD_ELEMENT), A(ce, fn.cardCvc, rt.CARD_ELEMENT), A(ce, fn.postalCode, rt.CARD_ELEMENT), A(ce, "paymentRequestButton", rt.PAYMENT_REQUEST_ELEMENT), ce),
        mn = yn, _n = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, vn = !1, bn = function e(t) {
            j(this, e), gn.call(this);
            var n = t.apiKey, r = t.stripeAccount, o = t.stripeJsId, i = t.features;
            this._id = ft("__privateStripeController"), this._stripeJsId = o, this._apiKey = n, this._stripeAccount = r, this._features = i || {}, this._controllerFrame = new Gt(rt.CONTROLLER, this._id, t), this._frames = {}, this._requests = {}, this._setupPostMessage(), this._handleMessage = qt(this._handleMessage, this)
        }, gn = function () {
            var e = this;
            this.action = function (t, n) {
                var r = ft(tt[t]), o = new gt(function (o, i) {
                    e._requests[r] = _n({}, e._requests[r], {
                        resolve: o,
                        reject: i
                    }), e._controllerFrame.send({action: "stripe-user-action", payload: {type: t, nonce: r, options: n}})
                });
                return e._requests[r] = _n({}, e._requests[r], {promise: o}), o
            }, this.createElementFrame = function (t, n) {
                var r = n.groupId, o = T(n, ["groupId"]), i = new Qt(t, e._id, _n({}, o, {features: e._features}));
                return e._setupFrame(i, r)
            }, this.createHiddenFrame = function (t, n) {
                var r = new Vt(t, e._id, _n({}, n, {features: e._features}));
                return e._setupFrame(r)
            }, this._setupFrame = function (t, n) {
                return e._frames[t.id] = t, e._controllerFrame.sendPersistent({
                    action: "stripe-user-createframe",
                    payload: {newFrameId: t.id, groupId: n}
                }), t.on("unload", function () {
                    e._controllerFrame.sendPersistent({action: "stripe-frame-unload", payload: {unloadedFrameId: t.id}})
                }), t.on("load", function () {
                    e._controllerFrame.sendPersistent({
                        action: "stripe-frame-load",
                        payload: {loadedFrameId: t.id}
                    }), e._controllerFrame.loaded && t.send({action: "stripe-controller-load", payload: {}})
                }), t
            }, this.report = function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                e._controllerFrame.send({action: "stripe-controller-report", payload: {event: t, data: n}})
            }, this.warn = function () {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                e._controllerFrame.send({action: "stripe-controller-warn", payload: {args: n}})
            }, this._setupPostMessage = function () {
                window.addEventListener("message", function (t) {
                    var n = t.data, r = t.origin, o = Tt(n);
                    o && tn(ut, r) && e._handleMessage(o)
                })
            }, this._handleMessage = function (t) {
                var n = t.controllerId, r = t.frameId, o = t.message, i = e._frames[r];
                if (n === e._id) switch (o.action) {
                    case"stripe-frame-event":
                        var a = o.payload, s = a.event, u = a.data;
                        if (i) if (cn) if ("focus" === s && !vn && document.activeElement !== i._iframe && i._iframe.parentElement && document.activeElement !== i._iframe.parentElement.querySelector("__PrivateStripeElement-input")) {
                            var c = i._iframe.parentElement.querySelector("__PrivateStripeElement-input");
                            c && c.focus(), vn = !0
                        } else "blur" === s && vn ? vn = !1 : i.emit(s, u); else i.emit(s, u);
                        break;
                    case"stripe-frame-action-complete":
                        i && i.resolve(o.payload.nonce, o.payload.result);
                        break;
                    case"stripe-frame-error":
                        throw new de(o.payload.message);
                    case"stripe-integration-error":
                        i && i.emit("__privateIntegrationError", {message: o.payload.message});
                        break;
                    case"stripe-controller-load":
                        e._controllerFrame.emit("load"), Object.keys(e._frames).forEach(function (t) {
                            return e._frames[t].send({action: "stripe-controller-load", payload: {}})
                        });
                        break;
                    case"stripe-user-action-complete":
                        e._requests[o.payload.nonce] && e._requests[o.payload.nonce].resolve(o.payload.result);
                        break;
                    case"stripe-user-action-error":
                        e._requests[o.payload.nonce] && e._requests[o.payload.nonce].reject(new de(o.payload.error))
                }
            }
        }, wn = bn, En = function (e) {
            function t() {
                R(this, t);
                var e = q(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.name = "NetworkError", e
            }

            return M(t, e), t
        }(Error), On = En, Sn = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, kn = {Accept: "application/json", "Content-Type": "application/x-www-form-urlencoded"}, Pn = function (e) {
            return Object.keys(kn).forEach(function (t) {
                e.setRequestHeader(t, kn[t])
            }), e
        }, Cn = function e(t) {
            return new gt(function (n, r) {
                var o = t.method, i = t.url, a = t.timeout, s = t.data, u = t.withCredentials, c = s ? mt(s) : "",
                    l = !window.XMLHttpRequest || Qe(i) && void 0 === (new XMLHttpRequest).withCredentials,
                    p = "GET" === o && c ? i + "?" + c : i, f = "GET" === o ? "" : c;
                if (l) {
                    var d = new window.XDomainRequest;
                    try {
                        d.open(o, p)
                    } catch (e) {
                        r(e)
                    }
                    d.onerror = function () {
                        n({responseText: JSON.stringify({error: {type: "api_error"}})})
                    }, d.onload = function () {
                        n({status: 200, responseText: d.responseText})
                    }, setTimeout(function () {
                        d.send(f)
                    }, 0)
                } else {
                    var h = new XMLHttpRequest, y = void 0;
                    a && (y = setTimeout(function () {
                        return h.abort()
                    }, a)), u && (h.withCredentials = u), h.open(o, p, !0), Pn(h), h.onreadystatechange = function () {
                        4 === h.readyState && (clearTimeout(y), h.onreadystatechange = function () {
                        }, 0 === h.status ? u ? r(new On) : e(Sn({}, t, {withCredentials: !0})).then(n, r) : n(h))
                    };
                    try {
                        h.send(f)
                    } catch (e) {
                        r(e)
                    }
                }
            })
        }, An = Cn, Tn = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, jn = function (e, t) {
            var n = /@font-face[ ]?{[^}]*}/g, r = e.match(n);
            if (!r) throw new de("No @font-face rules found in file from " + t);
            return r
        }, Rn = function (e) {
            var t = e.match(/@font-face[ ]?{([^}]*)}/);
            return t ? t[1] : ""
        }, qn = function (e, t) {
            var n = e.replace(/\/\*.*\*\//g, "").trim(), r = n.length && /;$/.test(n) ? n : n + ";",
                o = r.match(/((([^;(]*\([^()]*\)[^;)]*)|[^;]+)+)(?=;)/g);
            if (!o) throw new de("Found @font-face rule containing no valid font-properties in file from " + t);
            return o
        }, Mn = function (e, t) {
            var n = e.indexOf(":");
            if (-1 === n) throw new de("Invalid css declaration in file from " + t + ': "' + e + '"');
            var r = e.slice(0, n).trim(), o = lt[r];
            if (!o) throw new de("Unsupported css property in file from " + t + ': "' + r + '"');
            return {property: o, value: e.slice(n + 1).trim()}
        }, In = function (e, t) {
            var n = e.reduce(function (e, n) {
                var r = Mn(n, t), o = r.property, i = r.value;
                return Tn({}, e, I({}, o, i))
            }, {});
            return ["family", "src"].forEach(function (e) {
                if (!n[e]) throw new de("Missing css property in file from " + t + ': "' + ct[e] + '"')
            }), n
        }, Nn = function (e) {
            return An({url: e, method: "GET"}).then(function (e) {
                return e.responseText
            }).then(function (t) {
                return jn(t, e).map(function (t) {
                    var n = Rn(t), r = qn(n, e);
                    return In(r, e)
                })
            })
        }, Ln = Nn, xn = function (e, t) {
            if (!(e && e in hn)) throw new de("A valid Element name must be provided. Valid Elements are:\n" + Object.keys(hn).filter(function (e) {
                return !hn[e].beta
            }).join(", ") + "; you passed: " + e + ".");
            if (hn[e].unique && -1 !== t.indexOf(e)) throw new de("Can only create one Element of type " + e + ".");
            var n = Ee(t, hn[e].conflict);
            if (n.length) {
                var r = n[0];
                throw new de("Cannot create an Element of type " + e + " after an Element of type " + r + " has already been created.")
            }
        }, Fn = function (e, t) {
            var n = Array.prototype.slice.call(document.querySelectorAll("a[href], area[href], input:not([disabled]),\n  select:not([disabled]), textarea:not([disabled]), button:not([disabled]),\n  object, embed, *[tabindex], *[contenteditable]")),
                r = [];
            n.forEach(function (e) {
                var t = e.getAttribute("tabindex"), n = !t || parseInt(t, 10) >= 0, o = e.getBoundingClientRect(),
                    i = o.width > 0 && o.height > 0;
                n && i && r.push(e)
            });
            var o = _e(r, function (t) {
                return t === e || e.contains(t)
            });
            return r[o + ("previous" === t ? -1 : 1)]
        }, Bn = Fn, Un = "14px", Dn = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "1.2em",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Un;
            if (/^[0-9.]+px$/.test(e)) return e;
            var n = parseFloat(e.toString().replace(/[^0-9.]/g, "")), r = parseFloat(Un.replace(/[^0-9.]/g, "")),
                o = parseFloat(t.toString().replace(/[^0-9.]/g, "")), i = void 0;
            if (/^(\d+|\d*\.\d+)px$/.test(t)) i = o; else if (/^(\d+|\d*\.\d+)em$/.test(t)) i = o * r; else if (/^(\d+|\d*\.\d+)%$/.test(t)) i = o / 100 * r; else {
                if (!/^[\d.]+$/.test(t) && !/^\d*\.(px|em|%)$/.test(t)) return "100%";
                i = r
            }
            var a = n * i + "px";
            return /^[0-9.]+px$/.test(a) ? a : "100%"
        }, zn = Dn, Hn = function (e, t) {
            return e ? window.getComputedStyle(e, t) : null
        }, Vn = Hn, Kn = function () {
            if (!window.PaymentRequest) return null;
            if (/CriOS\/59/.test(navigator.userAgent)) return null;
            if (/.*\(.*; wv\).*Chrome\/(?:53|54)\.\d.*/g.test(navigator.userAgent)) return null;
            var e = window.PaymentRequest;
            return un && !e.prototype.canMakePayment ? e.prototype.canMakePayment = function () {
                return gt.resolve(!0)
            } : e.prototype.canMakePayment || (e.prototype.canMakePayment = function () {
                return gt.resolve(!1)
            }), e
        }(), Yn = {CAN_MAKE_PAYMENT: "CAN_MAKE_PAYMENT"}, Gn = function () {
            try {
                return window.location.origin === window.top.location.origin
            } catch (e) {
                return !1
            }
        }, Jn = void 0, $n = function (e) {
            var t = {};
            return function (n) {
                if (void 0 !== t[n]) return t[n];
                var r = e(n);
                return t[n] = r, r
            }
        }(function (e) {
            return window.ApplePaySession.canMakePaymentsWithActiveCard(e).then(function (e) {
                return Jn && Jn("payreq.can_make_payment_native_response", {available: e}), e
            })
        }), Wn = function (e, t, n, r) {
            if (Jn = r, window.ApplePaySession) {
                if (Gn()) {
                    if (n && "https:" !== window.location.protocol) return window.console && window.console.warn("To test Apple Pay, you must serve this page over HTTPS."), gt.resolve(!1);
                    if (window.ApplePaySession.supportsVersion(2)) {
                        var o = t ? [e, t] : [e], i = "merchant." + o.join(".") + ".stripe";
                        return $n(i).then(function (r) {
                            if (n && !r && window.console) {
                                var o = t ? "or stripeAccount parameter (" + t + ") " : "";
                                window.console.warn("Either you do not have a card saved to your Wallet or the current domain (" + e + ") " + o + "is not registered for Apple Pay. Visit https://dashboard.stripe.com/account/apple_pay to register this domain.")
                            }
                            return r
                        })
                    }
                    return n && window.console && window.console.warn("This version of Safari does not support ApplePay JS version 2."), gt.resolve(!1)
                }
                return gt.resolve(!1)
            }
            return gt.resolve(!1)
        }, Zn = null, Qn = function (e, t) {
            return null !== Zn ? gt.resolve(Zn) : Kn ? un ? gt.resolve(!1) : ln ? gt.resolve(!1) : t && "https:" !== window.location.protocol ? (window.console && window.console.warn("To test Payment Request, you must serve this page over HTTPS."), gt.resolve(!1)) : e ? e.action(Yn.CAN_MAKE_PAYMENT).then(function (e) {
                var t = e.available;
                return Zn = "boolean" == typeof t && t
            }) : gt.resolve(!1) : gt.resolve(!1)
        }, Xn = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, er = {merchantCapabilities: ["supports3DS"], displayItems: []}, tr = {amount: De, label: Fe, pending: Me(Ue)},
        nr = Xn({}, tr, {
            id: Be(function () {
                return ft("shippingOption")
            }), detail: Be(function () {
                return ""
            })
        }), rr = {displayItems: Me(He(Je(tr))), shippingOptions: Me(Ve("id")(He(Je(nr)))), total: Me(Je(tr))},
        or = {shipping: "shipping", delivery: "delivery", pickup: "pickup"}, ir = {
            requestShipping: Me(Ue),
            requestPayerName: Me(Ue),
            requestPayerEmail: Me(Ue),
            requestPayerPhone: Me(Ue),
            shippingType: Me(Ne.apply(void 0, N(Object.keys(or))))
        }, ar = Xn({}, ir, {
            displayItems: Me(He(Je(tr))),
            shippingOptions: Me(Ve("id")(He(Je(nr)))),
            total: Je(tr),
            currency: xe,
            country: Le
        }), sr = {
            success: "success",
            fail: "fail",
            invalid_payer_name: "invalid_payer_name",
            invalid_payer_email: "invalid_payer_email",
            invalid_payer_phone: "invalid_payer_phone",
            invalid_shipping_address: "invalid_shipping_address"
        }, ur = Xn({}, rr, {status: Ne.apply(void 0, N(Object.keys(sr)))}), cr = Xn({}, rr, {currency: Me(Fe)}),
        lr = Je(ur), pr = Ge(cr), fr = Je(ar), dr = ["mastercard", "visa"],
        hr = ["AT", "AU", "CA", "CH", "DE", "ES", "FI", "FR", "GB", "IT", "JP", "NL", "SE", "SG", "US"],
        yr = function (e) {
            return "US" === e ? ["amex", "discover", "diners", "jcb"].concat(dr) : -1 !== hr.indexOf(e) ? ["amex"].concat(dr) : dr
        }, mr = function (e) {
            return yr(e).reduce(function (e, t) {
                return "mastercard" === t ? [].concat(L(e), ["masterCard"]) : "diners" === t ? e : [].concat(L(e), [t])
            }, [])
        }, _r = {
            bif: 1,
            clp: 1,
            djf: 1,
            gnf: 1,
            jpy: 1,
            kmf: 1,
            krw: 1,
            mga: 1,
            pyg: 1,
            rwf: 1,
            vnd: 1,
            vuv: 1,
            xaf: 1,
            xof: 1,
            xpf: 1
        }, vr = function (e, t) {
            var n = _r[t.toLowerCase()] || 100, r = e / n, o = Math.log(n) / Math.log(10);
            return r.toFixed(Math.round(o))
        }, br = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, gr = function (e, t) {
            return {amount: vr(e.amount, t.currency), label: e.label, type: e.pending ? "pending" : "final"}
        }, wr = function (e, t) {
            return {amount: vr(e.amount, t.currency), label: e.label, detail: e.detail, identifier: e.id}
        }, Er = function (e) {
            return function (t) {
                return t[e] && "string" == typeof t[e] ? t[e].toUpperCase() : null
            }
        },
        Or = (le = {}, x(le, sr.success, 0), x(le, sr.fail, 1), x(le, sr.invalid_payer_name, 2), x(le, sr.invalid_shipping_address, 3), x(le, sr.invalid_payer_phone, 4), x(le, sr.invalid_payer_email, 4), le),
        Sr = (pe = {}, x(pe, or.pickup, "storePickup"), x(pe, or.shipping, "shipping"), x(pe, or.delivery, "delivery"), pe),
        kr = {
            total: function (e) {
                return gr(e.total, e)
            }, lineItems: function (e) {
                return e.displayItems ? e.displayItems.map(function (t) {
                    return gr(t, e)
                }) : []
            }, shippingMethods: function (e) {
                return e.shippingOptions ? e.shippingOptions.map(function (t) {
                    return wr(t, e)
                }) : []
            }
        }, Pr = br({}, kr, {
            shippingType: function (e) {
                var t = e.shippingType;
                if (!t) return null;
                var n = Sr[t];
                if (void 0 !== n) return n;
                throw new de("Invalid value for shippingType: " + t)
            }, requiredBillingContactFields: function (e) {
                return e.requestPayerName ? ["postalAddress"] : null
            }, requiredShippingContactFields: function (e) {
                var t = [];
                return e.requestShipping && t.push("postalAddress"), e.requestPayerEmail && t.push("email"), e.requestPayerPhone && t.push("phone"), t.length ? t : null
            }, countryCode: Er("country"), currencyCode: Er("currency"), merchantCapabilities: function (e) {
                return function (t) {
                    return t[e] || null
                }
            }("merchantCapabilities"), supportedNetworks: function (e) {
                return mr(e.country)
            }
        }), Cr = br({}, kr, {
            status: function (e) {
                return Or[e.status] || 0
            }
        }), Ar = (br({}, Cr, Pr), function (e) {
            var t = {}, n = br({}, er, e);
            return Object.keys(Pr).forEach(function (e) {
                var r = Pr[e], o = r(n);
                null !== o && (t[e] = o)
            }), t
        }), Tr = function (e) {
            var t = {};
            return Object.keys(Cr).forEach(function (n) {
                var r = Cr[n], o = r(e);
                null !== o && (t[n] = o)
            }), t
        }, jr = Ar, Rr = function (e) {
            return "string" == typeof e ? e : null
        }, qr = function (e) {
            return e ? Rr(e.phoneNumber) : null
        }, Mr = function (e) {
            return e ? Rr(e.emailAddress) : null
        }, Ir = function (e) {
            return e ? [e.givenName, e.familyName].filter(function (e) {
                return e && "string" == typeof e
            }).join(" ") : null
        }, Nr = function (e) {
            if (e) {
                var t = e.addressLines, n = e.countryCode, r = e.postalCode, o = e.administrativeArea, i = e.locality,
                    a = e.phoneNumber, s = Rr(n);
                return {
                    addressLine: Array.isArray(t) ? t.reduce(function (e, t) {
                        return "string" == typeof t ? [].concat(F(e), [t]) : e
                    }, []) : [],
                    country: s ? s.toUpperCase() : "",
                    postalCode: Rr(r) || "",
                    recipient: Ir(e) || "",
                    region: Rr(o) || "",
                    city: Rr(i) || "",
                    phone: Rr(a) || "",
                    sortingCode: "",
                    dependentLocality: "",
                    organization: ""
                }
            }
            return null
        }, Lr = function (e, t) {
            if (e && t.shippingOptions) {
                var n = e.identifier, r = e.label;
                return t.shippingOptions.filter(function (e) {
                    return e.id === n && e.label === r
                })[0] || null
            }
            return null
        }, xr = function (e, t) {
            var n = e.shippingContact, r = e.shippingMethod, o = e.billingContact;
            return {
                shippingOption: Lr(r, t),
                shippingAddress: Nr(n),
                payerEmail: Mr(n),
                payerPhone: qr(n),
                payerName: Ir(o),
                methodName: "apple-pay"
            }
        }, Fr = xr, Br = function (e) {
            if (!e || !e.length) throw new de("When requesting shipping information, you must specify shippingOptions once a shipping address is selected.\nEither provide shippingOptions in stripe.paymentRequest(...) or listen for the shippingaddresschange event and provide shippingOptions to the updateWith callback there.");
            return e
        }, Ur = Br, Dr = {live: "live", test: "test", unknown: "unknown"}, zr = function (e) {
            return /^pk_test_/.test(e) ? Dr.test : /^pk_live_/.test(e) ? Dr.live : Dr.unknown
        }, Hr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, Vr = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, Kr = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), Yr = {
            australia: "AU",
            austria: "AT",
            canada: "CA",
            schweiz: "CH",
            deutschland: "DE",
            hongkong: "HK",
            saudiarabia: "SA",
            espaa: "ES",
            singapore: "SG",
            us: "US",
            usa: "US",
            unitedstatesofamerica: "US",
            unitedstates: "US",
            england: "GB",
            gb: "GB",
            uk: "GB",
            unitedkingdom: "GB"
        }, Gr = function (e) {
            function t(e, n, r) {
                U(this, t);
                var o = D(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                Jr.call(o), o._showCalledByButtonElement = null, o._authentication = n, o._controller = e, o._report("payreq.options", {options: r});
                var i = $e(fr, r || {}, "paymentRequest()"), a = i.value;
                return i.warnings.forEach(function (e) {
                    return o._controller.warn(e)
                }), o._cachedCanMakePayment = null, o._canMakePaymentCalled = !1, o._initialPaymentRequest = a, o._isShowing = !1, o._initializeSessionState(), o
            }

            return z(t, e), Kr(t, [{
                key: "_initializeSessionState", value: function () {
                    this._paymentRequestOptions = Vr({}, this._initialPaymentRequest, {status: sr.success}), this._privateSession = null, this._privateShippingOption = null;
                    var e = this._paymentRequestOptions.shippingOptions;
                    e && e.length && (this._privateShippingOption = e[0])
                }
            }, {
                key: "_setupSession", value: function (e) {
                    var t = this;
                    e.addEventListener("validatemerchant", this._validateMerchant(e)), e.addEventListener("paymentauthorized", this._paymentAuthorized(e)), e.addEventListener("cancel", function () {
                        t._report("payreq.show_rejected"), t._isShowing = !1, t.emit("cancel")
                    }), e.addEventListener("shippingcontactselected", this._shippingContactSelected(e)), e.addEventListener("shippingmethodselected", this._shippingMethodSelected(e))
                }
            }]), t
        }(Rt), Jr = function () {
            var e = this;
            this.canMakePayment = qt(function () {
                return null === e._cachedCanMakePayment ? Wn(window.location.hostname, e._authentication.stripeAccount, zr(e._authentication.apiKey) === Dr.test, e._report).then(function (t) {
                    return e._canMakePaymentCalled = !0, e._cachedCanMakePayment = t, e._report("payreq.can_make_payment_response", {available: e._cachedCanMakePayment}), e._cachedCanMakePayment ? {applePay: !0} : null
                }) : gt.resolve().then(function () {
                    return e._canMakePaymentCalled = !0, e._report("payreq.can_make_payment_response", {
                        available: e._cachedCanMakePayment,
                        cached: !0
                    }), e._cachedCanMakePayment ? {applePay: !0} : null
                })
            }), this.update = qt(function (t) {
                if (e._isShowing) throw new de("You cannot update Payment Request options while the payment sheet is showing.");
                var n = $e(pr, t, "PaymentRequest update()"), r = n.value;
                n.warnings.forEach(function (t) {
                    return e._controller.warn(t)
                }), e._initialPaymentRequest = we(e._paymentRequestOptions, r), e._initializeSessionState(), e._report("payreq.update", {updates: t})
            }), this.show = qt(function () {
                if (null === e._showCalledByButtonElement && (e._showCalledByButtonElement = !1), e._usedByButtonElement && !e._showCalledByButtonElement && (e._report("payreq.show_called_with_button"), e._controller.warn("Do not call show() yourself if you are using the paymentRequestButton Element.\nThe Element handles showing the payment sheet.")), !e._canMakePaymentCalled) throw new de("You must first check the Payment Request API's\navailability using paymentRequest.canMakePayment() before calling show().");
                if (!e._cachedCanMakePayment) throw new de("Payment Request is not available in this browser.");
                e._initializeSessionState();
                var t = new window.ApplePaySession(2, jr(e._paymentRequestOptions));
                e._privateSession = t, e._setupSession(t), t.begin(), e._isShowing = !0, e._report("payreq.show", {listeners: Object.keys(e._callbacks).sort()})
            }), this.abort = qt(function () {
                e._privateSession && (e._privateSession.abort(), e._report("payreq.abort"))
            }), this._report = function (t, n) {
                e._controller.report(t, Vr({}, n, null !== e._showCalledByButtonElement ? {usesButtonElement: e._showCalledByButtonElement} : {}, {impl: "applepay"}))
            }, this._elementShow = function () {
                e._showCalledByButtonElement = !0, e.show()
            }, this._registerElement = function () {
                e._usedByButtonElement = !0
            }, this._validateMerchant = function (t) {
                return function (n) {
                    e._controller.action(tt.CREATE_APPLE_PAY_SESSION, {
                        data: {
                            validation_url: n.validationURL,
                            domain_name: window.location.hostname,
                            display_name: e._paymentRequestOptions.total.label
                        }, usesButtonElement: e._showCalledByButtonElement
                    }).then(function (n) {
                        var r = n.session, o = n.error;
                        r ? t.completeMerchantValidation(JSON.parse(r.session)) : e._handleValidationError(t)(o)
                    }, e._handleValidationError(t))
                }
            }, this._handleValidationError = function (t) {
                return function (n) {
                    var r = n.message;
                    t.abort(), "string" == typeof r ? (e._controller.warn(n.message), e._report("user_error.apple_pay_session_error", {error: n})) : e._report("fatal.payreq.unexpected_error", {error: n})
                }
            }, this._paymentAuthorized = function (t) {
                return function (n) {
                    var r = n.payment;
                    e._report("payreq.paymentauthorized"), e._controller.action(tt.TOKENIZE, Vr({}, r, {
                        billingContact: e._normalizeContact(r.billingContact),
                        type: "apple_pay"
                    })).then(function (n) {
                        var o = n.token, i = n.error;
                        if (i) t.completePayment(window.ApplePaySession.STATUS_FAILURE), e._report("fatal.payreq.on_error", {error: i}); else {
                            var a = e._normalizeContact(r.shippingContact), s = e._normalizeContact(r.billingContact);
                            a && e._paymentRequestOptions.requestShipping && !a.countryCode && t.completePayment(window.ApplePaySession.STATUS_INVALID_SHIPPING_POSTAL_ADDRESS);
                            var u = Fr({shippingContact: a, billingContact: s}, e._paymentRequestOptions);
                            e._onToken(t)(Vr({}, u, {shippingOption: e._privateShippingOption, token: o}))
                        }
                    })
                }
            }, this._normalizeContact = function (t) {
                if (t && "object" === (void 0 === t ? "undefined" : Hr(t)) && t.country && "string" == typeof t.country) {
                    var n = t.country.toLowerCase().replace(/[^a-z]+/g, ""), r = void 0;
                    return t.countryCode ? "string" == typeof t.countryCode && (r = t.countryCode.toUpperCase()) : (r = Yr[n]) || e._report("fatal.payreq.missing_country_code", {country: t.country}), Vr({}, t, {countryCode: r})
                }
                return "object" === (void 0 === t ? "undefined" : Hr(t)) ? t : null
            }, this._onToken = function (t) {
                return function (n) {
                    if (e.hasRegisteredListener("token") && e.emit("token", Vr({}, n, {complete: e._completePayment(t)})), e.hasRegisteredListener("source")) {
                        var r = n.token, o = B(n, ["token"]), i = o.payerPhone, a = o.payerEmail;
                        e._controller.action(tt.CREATE_SOURCE, {
                            data: {
                                type: "card",
                                token: r.id,
                                owner: {phone: i, email: a}
                            }
                        }).then(function (n) {
                            var i = n.source, a = n.error;
                            a ? (e._report("fatal.payreq.source_failed", {
                                error: a,
                                token: r
                            }), t.completePayment(window.ApplePaySession.STATUS_FAILURE)) : e.emit("source", Vr({}, o, {
                                source: i,
                                complete: e._completePayment(t)
                            }))
                        })
                    }
                }
            }, this._completePayment = function (t) {
                return function (n) {
                    var r = $e(lr, {status: n}, "status for PaymentRequest completion"), o = r.value;
                    r.warnings.forEach(function (t) {
                        return e._controller.warn(t)
                    }), e._paymentRequestOptions = we(e._paymentRequestOptions, o);
                    var i = Tr(e._paymentRequestOptions), a = i.status;
                    t.completePayment(a), e._isShowing = !1
                }
            }, this._shippingContactSelected = function (t) {
                return function (n) {
                    var r = Fr({shippingContact: e._normalizeContact(n.shippingContact)}, e._paymentRequestOptions).shippingAddress;
                    if (e.hasRegisteredListener("shippingaddresschange")) {
                        var o = {shippingAddress: r, updateWith: e._completeShippingContactSelection(t)};
                        e.emit("shippingaddresschange", o)
                    } else {
                        Ur(e._paymentRequestOptions.shippingOptions);
                        var i = Tr(e._paymentRequestOptions), a = i.total, s = i.lineItems, u = i.shippingMethods;
                        t.completeShippingContactSelection(window.ApplePaySession.STATUS_SUCCESS, u, a, s)
                    }
                }
            }, this._completeShippingContactSelection = function (t) {
                return function (n) {
                    var r = $e(lr, n || {}, "shipping address selection callback"), o = r.value;
                    if (r.warnings.forEach(function (t) {
                            return e._controller.warn(t)
                        }), e._paymentRequestOptions = we(e._paymentRequestOptions, o), e._paymentRequestOptions.status === sr.success) {
                        var i = Ur(e._paymentRequestOptions.shippingOptions);
                        e._privateShippingOption = i[0]
                    }
                    var a = Tr(e._paymentRequestOptions), s = a.status, u = a.shippingMethods, c = a.total, l = a.lineItems;
                    t.completeShippingContactSelection(s, u, c, l)
                }
            }, this._shippingMethodSelected = function (t) {
                return function (n) {
                    if (e._privateShippingOption = Fr({shippingMethod: n.shippingMethod}, e._paymentRequestOptions).shippingOption, e.hasRegisteredListener("shippingoptionchange")) {
                        var r = {
                            shippingOption: e._privateShippingOption,
                            updateWith: e._completeShippingMethodSelection(t)
                        };
                        e.emit("shippingoptionchange", r)
                    } else {
                        var o = Tr(e._paymentRequestOptions), i = o.total, a = o.lineItems;
                        t.completeShippingMethodSelection(window.ApplePaySession.STATUS_SUCCESS, i, a)
                    }
                }
            }, this._completeShippingMethodSelection = function (t) {
                return function (n) {
                    var r = $e(lr, n || {}, "shipping option selection callback"), o = r.value;
                    r.warnings.forEach(function (t) {
                        return e._controller.warn(t)
                    }), e._paymentRequestOptions = we(e._paymentRequestOptions, o);
                    var i = Tr(e._paymentRequestOptions), a = i.status, s = i.total, u = i.lineItems;
                    t.completeShippingMethodSelection(a, s, u)
                }
            }
        }, $r = Gr, Wr = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, Zr = function (e) {
            function t(e, n, r) {
                V(this, t);
                var o = K(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                Qr.call(o), o._showCalledByButtonElement = null, o._authentication = n, o._controller = e, o._report("payreq.options", {options: r}), o._cachedCanMakePayment = null, o._canMakePaymentCalled = !1;
                var i = $e(fr, r || {}, "paymentRequest()"), a = i.value;
                if (i.warnings.forEach(function (e) {
                        return o._controller.warn(e)
                    }), Kn && "https:" === window.location.protocol) {
                    o._controller.action(tt.FETCH_LOCALE, {locale: "auto"});
                    var s = o._controller.createHiddenFrame(rt.PAYMENT_REQUEST, {authentication: n});
                    o._setupPrFrame(s, a), o._prFrame = s
                } else o._prFrame = null;
                return o
            }

            return Y(t, e), t
        }(Rt), Qr = function () {
            var e = this;
            this.canMakePayment = qt(function () {
                return null === e._cachedCanMakePayment ? Qn(e._prFrame, zr(e._authentication.apiKey) === Dr.test).then(function (t) {
                    return e._canMakePaymentCalled = !0, e._cachedCanMakePayment = t, e._report("payreq.can_make_payment_response", {available: e._cachedCanMakePayment}), e._cachedCanMakePayment ? {applePay: !1} : null
                }) : gt.resolve().then(function () {
                    return e._canMakePaymentCalled = !0, e._report("payreq.can_make_payment_response", {
                        available: e._cachedCanMakePayment,
                        cached: !0
                    }), e._cachedCanMakePayment ? {applePay: !1} : null
                })
            }), this.update = qt(function (t) {
                var n = e._prFrame;
                if (n) {
                    var r = $e(pr, t, "PaymentRequest update()"), o = r.value;
                    r.warnings.forEach(function (t) {
                        return e._controller.warn(t)
                    }), n.send({action: "stripe-pr-update", payload: {data: o}})
                }
                e._report("payreq.update", {updates: t})
            }), this.show = qt(function () {
                if (null === e._showCalledByButtonElement && (e._showCalledByButtonElement = !1), e._usedByButtonElement && !e._showCalledByButtonElement && (e._report("payreq.show_called_with_button"), e._controller.warn("Do not call show() yourself if you are using the paymentRequestButton Element.\nThe Element handles showing the payment sheet.")), !e._canMakePaymentCalled) throw new de("You must first check the Payment Request API's\navailability using paymentRequest.canMakePayment() before calling show().");
                if (!e._cachedCanMakePayment || !e._prFrame) throw new de("Payment Request is not available in this browser.");
                e._prFrame.send({
                    action: "stripe-pr-show",
                    payload: {data: {usesButtonElement: e._showCalledByButtonElement}}
                }), e._report("payreq.show", {listeners: Object.keys(e._callbacks).sort()})
            }), this.abort = qt(function () {
                e._prFrame && (e._prFrame.send({action: "stripe-pr-abort", payload: {}}), e._report("payreq.abort"))
            }), this._report = function (t, n) {
                e._controller.report(t, Wr({}, n, null !== e._showCalledByButtonElement ? {usesButtonElement: e._showCalledByButtonElement} : {}, {impl: "prapi"}))
            }, this._elementShow = function () {
                e._showCalledByButtonElement = !0, e.show()
            }, this._registerElement = function () {
                e._usedByButtonElement = !0
            }, this._setupPrFrame = function (t, n) {
                t.send({action: "stripe-pr-initialize", payload: {data: n}}), t.on("pr-cancel", function () {
                    e.emit("cancel")
                }), t.on("pr-error", function (t) {
                    e._report("fatal.payreq.on_error", {error: "Would have emitted 'error' event, but 'error' is silenced."})
                }), t.on("pr-callback", function (r) {
                    var o = r.event, i = r.nonce, a = r.options;
                    if ("token" === o) {
                        var s = function (n) {
                            var r = $e(lr, {status: n}, "status for PaymentRequest completion"), o = r.value;
                            r.warnings.forEach(function (t) {
                                return e._controller.warn(t)
                            }), t.send({action: "stripe-pr-callback-complete", payload: {data: o, nonce: i}})
                        };
                        e._handleToken(t, a, s)
                    } else if ("shippingaddresschange" === o || "shippingoptionchange" === o) if (e.hasRegisteredListener(o)) {
                        var u = a.shippingAddress, c = a.shippingOption,
                            l = "shippingaddresschange" === o ? {shippingAddress: u} : {shippingOption: c};
                        e.emit(o, Wr({}, l, {
                            updateWith: function (r) {
                                var a = $e(lr, r || {}, o + " callback"), s = a.value;
                                a.warnings.forEach(function (t) {
                                    return e._controller.warn(t)
                                }), "shippingaddresschange" === o && s.status === sr.success && Ur(s.shippingOptions || n.shippingOptions), t.send({
                                    action: "stripe-pr-callback-complete",
                                    payload: {nonce: i, data: s}
                                })
                            }
                        }))
                    } else "shippingaddresschange" === o && Ur(n.shippingOptions), t.send({
                        action: "stripe-pr-callback-complete",
                        payload: {nonce: i, data: {status: sr.success}}
                    }); else e._report("error.payreq.unknown_event", {event: o, options: a})
                })
            }, this._handleToken = function (t, n, r) {
                var o = n._privateOwner, i = H(n, ["_privateOwner"]);
                if (e.hasRegisteredListener("token") && e.emit("token", Wr({}, i, {complete: r})), e.hasRegisteredListener("source")) {
                    var a = i.token, s = H(i, ["token"]), u = n.payerPhone || null, c = n.payerEmail || null;
                    e._controller.action(tt.CREATE_SOURCE, {
                        data: {
                            type: "card",
                            token: a.id,
                            owner: Wr({phone: u, email: c}, o || {})
                        }
                    }).then(function (t) {
                        var n = t.source, o = t.error;
                        o ? (e._report("fatal.payreq.source_failed", {
                            error: o,
                            token: a
                        }), r(sr.fail)) : e.emit("source", Wr({}, s, {source: n, complete: r}))
                    })
                }
            }
        }, Xr = Zr, eo = window.ApplePaySession ? function (e) {
            function t() {
                return G(this, t), J(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }

            return $(t, e), t
        }($r) : function (e) {
            function t() {
                return G(this, t), J(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }

            return $(t, e), t
        }(Xr), to = eo, no = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, ro = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), oo = {base: Me(ze), complete: Me(ze), empty: Me(ze), invalid: Me(ze), paymentRequestButton: Me(ze)}, io = {
            classes: Me(Je({
                base: Me(Fe),
                complete: Me(Fe),
                empty: Me(Fe),
                focus: Me(Fe),
                invalid: Me(Fe),
                webkitAutofill: Me(Fe)
            })),
            hidePostalCode: Me(Ue),
            hideIcon: Me(Ue),
            style: Me(Je(oo)),
            iconStyle: Me(Ne("solid", "default")),
            value: Me(Ie(Fe, ze)),
            __privateCvcOptional: Me(Ue),
            __privateValue: Me(Ie(Fe, ze)),
            error: Me(Je({type: Fe, code: Me(Fe), decline_code: Me(Fe), param: Me(Fe)})),
            locale: Ke("elements()"),
            fonts: Ke("elements()"),
            placeholder: Me(Fe),
            paymentRequest: Me(function (e, t) {
                return function (n, r) {
                    return n instanceof e ? je(n) : qe("a " + t + " instance", n, r)
                }
            }(to, "stripe.paymentRequest(...)"))
        }, ao = Je(io), so = {
            base: "StripeElement",
            focus: "StripeElement--focus",
            invalid: "StripeElement--invalid",
            complete: "StripeElement--complete",
            empty: "StripeElement--empty",
            webkitAutofill: "StripeElement--webkit-autofill"
        }, uo = {
            margin: "0",
            padding: "0",
            border: "none",
            display: "block",
            background: "transparent",
            position: "relative",
            opacity: "1"
        }, co = {
            border: "none",
            display: "block",
            position: "absolute",
            height: "1px",
            top: "0",
            left: "0",
            padding: "0",
            margin: "0",
            width: "100%",
            opacity: "0",
            background: "transparent",
            pointerEvents: "none"
        }, lo = function (e) {
            return parseFloat(e.toFixed(1))
        }, po = function (e) {
            return /^\d+(\.\d*)?px$/.test(e)
        }, fo = function (e) {
            function t(e) {
                Z(this, t);
                var n = Q(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                ho.call(n);
                var r = e.controller, o = e.componentName, i = e.paymentRequest;
                n._controller = r, n._componentName = o;
                var a = "paymentRequestButton" === n._componentName;
                if (a) {
                    if (!i) throw new de("You must pass in a stripe.paymentRequest object in order to use this Element.");
                    n._paymentRequest = i, n._paymentRequest._registerElement()
                }
                return n._createComponent(e, o), n._classes = no({}, so), n._changeClasses(e.classes || {}), n._lastBackgroundColor = "", n._destroyed = !1, n._focused = !1, n._empty = !a, n._invalid = !1, n._complete = !1, n._autofilled = !1, n._lastSubmittedAt = null, n.on("submit", n._formSubmit), n
            }

            return X(t, e), ro(t, [{
                key: "_checkDestroyed", value: function () {
                    if (this._destroyed) throw new de("This Element has already been destroyed. Please create a new one.")
                }
            }, {
                key: "_isMounted", value: function () {
                    return !!document.body && document.body.contains(this._component)
                }
            }, {
                key: "_mountToParent", value: function (e) {
                    var t = this._component.parentElement, n = this._isMounted();
                    if (e === t) {
                        if (n) return;
                        this.unmount(), this._mountTo(e)
                    } else if (t) {
                        if (n) throw new de("This Element is already mounted. Use `unmount()` to unmount the Element before re-mounting.");
                        this.unmount(), this._mountTo(e)
                    } else this._mountTo(e)
                }
            }, {
                key: "_mountTo", value: function (e) {
                    var t = Date.now(), n = Vn(e, null), r = !!n && "rtl" === n.getPropertyValue("direction");
                    for (this._parent = e; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(this._component), this._frame.send({
                        action: "stripe-user-mount",
                        payload: {mountTime: t, rtl: r}
                    }), this._findPossibleLabel(), this._updateClasses()
                }
            }, {
                key: "_updateClasses", value: function () {
                    this._parent && St(this._parent, [[this._classes.base, !0], [this._classes.empty, this._empty], [this._classes.focus, this._focused], [this._classes.invalid, this._invalid], [this._classes.complete, this._complete], [this._classes.webkitAutofill, this._autofilled]])
                }
            }, {
                key: "_removeClasses", value: function () {
                    this._parent && St(this._parent, [[this._classes.base, !1], [this._classes.empty, !1], [this._classes.focus, !1], [this._classes.invalid, !1], [this._classes.complete, !1], [this._classes.webkitAutofill, !1]])
                }
            }, {
                key: "_findPossibleLabel", value: function () {
                    var e = this._parent;
                    if (e) {
                        var t = e.getAttribute("id"), n = void 0;
                        if (t && (n = document.querySelector("label[for=" + t + "]")), n) e.addEventListener("click", this.focus); else for (n = n || e.parentElement; n && "LABEL" !== n.nodeName;) n = n.parentElement;
                        n ? (this._label = n, n.addEventListener("click", this.focus)) : e.addEventListener("click", this.focus)
                    }
                }
            }, {
                key: "_changeClasses", value: function (e) {
                    var t = {};
                    return Object.keys(e).forEach(function (n) {
                        if (!so[n]) throw new de(n + " is not a customizable class name.\nYou can customize: " + Object.keys(so).join(", "));
                        var r = e[n] || so[n];
                        t[n] = r.replace(/\./g, " ")
                    }), this._classes = no({}, this._classes, t), this
                }
            }, {
                key: "_setupEvents", value: function () {
                    var e = this;
                    this._frame.on("redirectfocus", function (t) {
                        var n = t.focusDirection, r = Bn(e._component, n);
                        r && r.focus()
                    }), this._frame.on("focus", function () {
                        e._focused = !0, e._updateClasses()
                    }), this._frame.on("blur", function () {
                        e._focused = !1, e._updateClasses(), e._lastSubmittedAt && "paymentRequestButton" === e._componentName && (e._controller.report("payment_request_button.sheet_visible", {latency: new Date - e._lastSubmittedAt}), e._lastSubmittedAt = null)
                    }), this._frame.on("submit", function () {
                        if ("paymentRequestButton" === e._componentName) {
                            e._lastSubmittedAt = new Date;
                            var t = !1, n = !1;
                            e.emit("click", {
                                preventDefault: function () {
                                    e._controller.report("payment_request_button.default_prevented"), t && e._controller.warn("event.preventDefault() was called after the payment sheet was shown. Make sure to call it synchronously when handling the `click` event."), n = !0
                                }
                            }), !n && e._paymentRequest && (e._paymentRequest._elementShow(), t = !0)
                        } else e.emit("submit")
                    }), ["ready", "focus", "blur", "escape"].forEach(function (t) {
                        e._frame.on(t, function () {
                            e.emit(t)
                        })
                    }), this._frame.on("change", function (t) {
                        var n = t.error, r = t.brand, o = t.value, i = t.empty, a = t.complete;
                        e.emit("change", {
                            error: n,
                            brand: r,
                            value: o,
                            empty: i,
                            complete: a
                        }), e._empty = i, e._invalid = !!n, e._complete = a, e._updateClasses()
                    }), this._frame.on("__privateIntegrationError", function (t) {
                        var n = t.message;
                        e.emit("__privateIntegrationError", {message: n})
                    }), this._frame.on("dimensions", function (t) {
                        if (e._parent) {
                            var n = Vn(e._parent, null);
                            if (n) {
                                var r = parseFloat(n.getPropertyValue("height")), o = t.height;
                                if ("border-box" === n.getPropertyValue("box-sizing")) {
                                    var i = parseFloat(n.getPropertyValue("padding-top")),
                                        a = parseFloat(n.getPropertyValue("padding-bottom"));
                                    r = r - parseFloat(n.getPropertyValue("border-top")) - parseFloat(n.getPropertyValue("border-bottom")) - i - a
                                }
                                0 !== r && lo(r) < lo(o) && e._controller.report("wrapper_height_mismatch", {
                                    height: o,
                                    outer_height: r
                                });
                                var s = e._component.getBoundingClientRect().height;
                                0 !== s && 0 !== o && lo(s) !== lo(o) && (e._frame.updateStyle({height: o + "px"}), e._controller.report("iframe_height_update", {
                                    height: o,
                                    calculated_height: s
                                }))
                            }
                        }
                    }), this._frame.on("autofill", function () {
                        if (e._parent) {
                            var t = e._parent.style.backgroundColor, n = "#faffbd" === t || "rgb(250, 255, 189)" === t;
                            e._lastBackgroundColor = n ? e._lastBackgroundColor : t, e._parent.style.backgroundColor = "#faffbd", e._autofilled = !0, e._updateClasses()
                        }
                    }), this._frame.on("autofill-cleared", function () {
                        e._autofilled = !1, e._parent && (e._parent.style.backgroundColor = e._lastBackgroundColor), e._updateClasses()
                    })
                }
            }, {
                key: "_createComponent", value: function (e, t) {
                    this._createElement(e, t), this._setupEvents(), this._updateFrameHeight(e, !0)
                }
            }, {
                key: "_updateFrameHeight", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if ("paymentRequestButton" === this._componentName) {
                        var n = e.style && e.style.paymentRequestButton || {}, r = n.height,
                            o = "string" == typeof r ? r : void 0;
                        (t || o) && (this._frame.updateStyle({height: o || this._lastHeight || "40px"}), this._lastHeight = o || this._lastHeight)
                    } else {
                        var i = e.style && e.style.base || {}, a = i.lineHeight, s = i.fontSize,
                            u = "string" != typeof a || isNaN(parseFloat(a)) ? void 0 : a,
                            c = "string" == typeof s ? s : void 0;
                        if (c && !po(c) && this._controller.warn("The fontSize style you specified (" + c + ") is not in px. We do not recommend using relative css units, as they will be calculated relative to our iframe's styles rather than your site's."), t || u || c) {
                            var l = zn(u || this._lastHeight, c || this._lastFontSize);
                            this._frame.updateStyle({height: l}), this._lastFontSize = c || this._lastFontSize, this._lastHeight = u || this._lastHeight
                        }
                    }
                }
            }, {
                key: "_createElement", value: function (e, t) {
                    var n = (e.classes, e.controller, e.paymentRequest, W(e, ["classes", "controller", "paymentRequest"])),
                        r = document.createElement("div");
                    r.className = "__PrivateStripeElement";
                    var o = document.createElement("input");
                    o.className = "__PrivateStripeElement-input", kt(r, uo), kt(o, co), o.setAttribute("aria-hidden", "true"), o.disabled = !0;
                    var i = Vn(document.body), a = !!i && "rtl" === i.getPropertyValue("direction"), s = mn[t],
                        u = this._controller.createElementFrame(s, no({}, n, {rtl: a}));
                    u.on("load", function () {
                        o.disabled = !1
                    }), o.addEventListener("focus", function () {
                        u.focus()
                    }), u.appendTo(r), r.appendChild(o), this._component = r, this._frame = u, this._fakeInput = o
                }
            }]), t
        }(Rt), ho = function () {
            var e = this;
            this.mount = qt(function (t) {
                e._checkDestroyed();
                var n = void 0;
                if (!t) throw new de("Missing argument. Make sure to call mount() with a valid DOM element or selector.");
                if ("string" == typeof t) {
                    var r = document.querySelectorAll(t);
                    if (r.length > 1 && e._controller.warn("The selector you specified (" + t + ") applies to " + r.length + " DOM elements that are currently on the page.\nThe Stripe Element will be mounted to the first one."), !r.length) throw new de("The selector you specified (" + t + ") applies to no DOM elements that are currently on the page.\nMake sure the element exists on the page before calling mount().");
                    n = r[0]
                } else {
                    if (!t.appendChild) throw new de("Invalid DOM element. Make sure to call mount() with a valid DOM element or selector.");
                    n = t
                }
                if ("INPUT" === n.nodeName) throw new de("Stripe Elements must be mounted in a DOM element that\ncan contain child nodes. `input` elements are not permitted to have child\nnodes. Try using a `div` element instead.");
                if (n.children.length && e._controller.warn("This Element will be mounted to a DOM element that contains child nodes."), e._paymentRequest) {
                    if (!e._paymentRequest._canMakePaymentCalled) throw new de("For paymentRequest Elements, you must first check the Payment Request API's\navailability using paymentRequest.canMakePayment() before mounting the Element.");
                    if (!e._paymentRequest._cachedCanMakePayment) throw new de("The " + e._componentName + " Element is not available in the current environment.");
                    e._mountToParent(n)
                } else e._mountToParent(n)
            }), this.update = qt(function (t) {
                e._checkDestroyed();
                var n = $e(ao, t || {}, "element.update()"), r = n.value;
                if (n.warnings.forEach(function (t) {
                        return e._controller.warn(t)
                    }), r) {
                    var o = r.classes, i = W(r, ["classes"]);
                    e._changeClasses(o || {}), e._updateFrameHeight(r), Object.keys(i).length && e._frame.update(i)
                }
                return e
            }), this.focus = qt(function (t) {
                return e._checkDestroyed(), t && t.preventDefault(), document.activeElement && document.activeElement.blur && document.activeElement.blur(), e._fakeInput.focus(), e
            }), this.blur = qt(function () {
                return e._checkDestroyed(), e._frame.blur(), e._fakeInput.blur(), e
            }), this.clear = qt(function () {
                return e._checkDestroyed(), e._frame.clear(), e
            }), this.unmount = qt(function () {
                e._checkDestroyed();
                var t = e._component.parentElement, n = e._label;
                return t && (t.removeChild(e._component), t.removeEventListener("click", e.focus), e._removeClasses()), e._parent = null, n && (n.removeEventListener("click", e.focus), e._label = null), e._fakeInput.disabled = !0, e._frame.unmount(), e
            }), this.destroy = qt(function () {
                return e._checkDestroyed(), e.unmount(), e._destroyed = !0, e.emit("destroy"), e
            }), this._formSubmit = function () {
                for (var t = e._component.parentElement; t && "FORM" !== t.nodeName;) t = t.parentElement;
                if (t) {
                    var n = document.createEvent("Event");
                    n.initEvent("submit", !0, !0), t.dispatchEvent(n)
                }
            }
        }, yo = fo, mo = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, _o = {locale: Me(Fe), fonts: Me(He(ze))}, vo = Je(_o), bo = function e(t, n) {
            var r = this;
            te(this, e), go.call(this);
            var o = $e(vo, n || {}, "elements()"), i = o.value;
            o.warnings.forEach(function (e) {
                return t.warn(e)
            }), t.report("elements", {options: n}), this._elements = [], this._id = ft("elements"), this._controller = t;
            var a = i.locale, s = i.fonts || [];
            this._controller.action(tt.FETCH_LOCALE, {locale: a || "auto"});
            var u = s.filter(function (e) {
                return !e.cssSrc || "string" != typeof e.cssSrc
            }), c = s.map(function (e) {
                return e.cssSrc
            }).reduce(function (e, t) {
                return "string" == typeof t ? [].concat(ee(e), [t]) : e
            }, []).map(function (e) {
                return We(e) ? e : Xe(window.location.href, e)
            });
            return this._pendingFonts = c.length, this._commonOptions = mo({}, i, {fonts: u}), c.forEach(function (e) {
                if ("string" == typeof e) {
                    var t = Date.now();
                    Ln(e).then(function (n) {
                        r._controller.report("font.loaded", {
                            load_time: Date.now() - t,
                            font_count: n.length,
                            css_src: e
                        }), r._controller.action(tt.UPDATE_CSS_FONTS, {
                            fonts: n.map(function (t) {
                                return mo({}, t, {__privateCssSrc: e})
                            }), groupId: r._id
                        })
                    }).catch(function (n) {
                        throw r._controller.report("error.font.not_loaded", {
                            load_time: Date.now() - t,
                            message: n.message,
                            css_src: e
                        }), n
                    })
                }
            }), this
        }, go = function () {
            var e = this;
            this.create = qt(function (t, n) {
                xn(t, e._elements);
                var r = $e(ao, n || {}, "create()"), o = r.value;
                r.warnings.forEach(function (t) {
                    return e._controller.warn(t)
                });
                var i = !!e._pendingFonts, a = new yo(mo({}, o, e._commonOptions, {
                    controller: e._controller,
                    componentName: t,
                    groupId: e._id,
                    wait: i
                }));
                return e._elements = [].concat(ee(e._elements), [t]), a.on("destroy", function () {
                    e._elements = e._elements.filter(function (e) {
                        return e !== t
                    })
                }), a
            })
        }, wo = bo, Eo = function (e) {
            var t = e.name, n = e.value, r = e.expiresIn, o = e.path, i = e.domain, a = new Date, s = r || 31536e6;
            a.setTime(a.getTime() + s);
            var u = o || "/", c = (n || "").replace(/[^!#-+\--:<-[\]-~]/g, encodeURIComponent),
                l = encodeURIComponent(t) + "=" + c + ";expires=" + a.toGMTString() + ";path=" + u;
            i && (l += ";domain=" + i), document.cookie = l
        }, Oo = function (e) {
            var t = me(document.cookie.split("; "), function (t) {
                var n = t.indexOf("=");
                return decodeURIComponent(t.substr(0, n)) === e
            });
            if (t) {
                var n = t.indexOf("=");
                return decodeURIComponent(t.substr(n + 1))
            }
            return null
        }, So = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), ko = "__privateStripeMetricsController", Po = {MERCHANT: "merchant", SESSION: "session"}, Co = function (e) {
            function t() {
                ne(this, t);
                var e = re(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e._muid = e._getID(Po.MERCHANT), e._sid = e._getID(Po.SESSION), e._id = ft(ko), e._controllerFrame = new Gt(rt.METRICS_CONTROLLER, e._id, {
                    autoload: !0,
                    queryString: e._buildFrameQueryString()
                }), e._establishMessageChannel(), e._startIntervalCheck(), setTimeout(e._testLatency.bind(e), 2e3 + 500 * Math.random()), e
            }

            return oe(t, e), So(t, [{
                key: "ids", value: function () {
                    return {guid: this._guid || "NA", muid: this._muid || "NA", sid: this._sid || "NA"}
                }
            }, {
                key: "_establishMessageChannel", value: function () {
                    var e = this;
                    window.addEventListener("message", function (t) {
                        try {
                            var n = JSON.parse(t.data), r = n.originatingScript, o = n.payload;
                            "m" === r && (e._guid = o)
                        } catch (e) {
                        }
                    })
                }
            }, {
                key: "_startIntervalCheck", value: function () {
                    var e = this, t = window.location.href;
                    setInterval(function () {
                        var n = window.location.href;
                        n !== t && (e._controllerFrame.send({
                            action: "ping",
                            payload: {
                                sid: e._getID(Po.SESSION),
                                muid: e._getID(Po.MERCHANT),
                                title: document.title,
                                referrer: document.referrer,
                                url: document.location.href
                            }
                        }), t = n)
                    }, 5e3)
                }
            }, {
                key: "report", value: function (e, t) {
                    try {
                        this._controllerFrame.send({
                            action: "track",
                            payload: {
                                sid: this._getID(Po.SESSION),
                                muid: this._getID(Po.MERCHANT),
                                url: document.location.href,
                                source: e,
                                data: t
                            }
                        })
                    } catch (e) {
                    }
                }
            }, {
                key: "_testLatency", value: function () {
                    var e = this, t = [], n = new Date, r = function r() {
                        try {
                            var o = new Date;
                            t.push(o - n), t.length >= 10 && (e.report("mouse-timings-10", t), document.removeEventListener("mousemove", r)), n = o
                        } catch (e) {
                        }
                    };
                    document.addEventListener("mousemove", r)
                }
            }, {
                key: "_buildFrameQueryString", value: function () {
                    var e = document.location.href, t = {
                        url: e,
                        title: document.title,
                        referrer: document.referrer,
                        muid: this._muid,
                        sid: this._sid,
                        preview: en(e)
                    };
                    return Object.keys(t).map(function (e) {
                        return e + "=" + encodeURIComponent(t[e].toString())
                    }).join("&")
                }
            }, {
                key: "_getID", value: function (e) {
                    switch (e) {
                        case Po.MERCHANT:
                            try {
                                var t = Oo("__stripe_mid") || dt();
                                return Eo({name: "__stripe_mid", value: t, domain: "." + document.location.hostname}), t
                            } catch (e) {
                                return "NA"
                            }
                        case Po.SESSION:
                            try {
                                var n = Oo("__stripe_sid") || dt();
                                return Eo({
                                    name: "__stripe_sid",
                                    value: n,
                                    domain: "." + document.location.hostname,
                                    expiresIn: 18e5
                                }), n
                            } catch (e) {
                                return "NA"
                            }
                        default:
                            throw new Error("Invalid ID type specified: " + e)
                    }
                }
            }]), t
        }(Rt), Ao = Co, To = function (e) {
            for (var t = 0, n = 0; n < e.length; n++) {
                t = 31 * t + e.charCodeAt(n), t |= 0
            }
            return t.toString()
        }, jo = To, Ro = {noop: {likelihood: .3}}, qo = function (e, t) {
            return e + "-" + t
        }, Mo = function (e) {
            try {
                window.localStorage.setItem("__stripe-js-v3-features__", JSON.stringify(e))
            } catch (e) {
            }
        }, Io = function () {
            var e = {};
            try {
                e = JSON.parse(window.localStorage.getItem("__stripe-js-v3-features__")) || {}
            } catch (e) {
            }
            return e
        }, No = function (e) {
            var t = Io(), n = {}, r = {};
            return Object.keys(Ro).forEach(function (o) {
                if (Ro[o]) {
                    var i = Ro[o], a = i.likelihood, s = i.whitelist, u = qo(o, a);
                    if (s && -1 === s.indexOf(jo(e))) n[o] = r[u] = !1; else {
                        var c = t[u], l = Math.random() < a;
                        n[o] = r[u] = void 0 !== c ? c : l
                    }
                }
            }), Mo(r), n
        }, Lo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, xo = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, Fo = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), Bo = Je({apiKey: Fe, stripeAccount: Me(Fe), __privateForcedFeatures: Me(ze)}), Uo = function () {
            function e(t, n) {
                var r = this;
                ae(this, e), Do.call(this);
                var o = $e(Bo, t || {}, "Stripe()"), i = o.value, a = o.warnings, s = i.apiKey, u = i.stripeAccount,
                    c = i.__privateForcedFeatures;
                if (0 === s.indexOf("sk_")) throw new de("You should not use your secret key with Stripe.js.\n        Please pass a publishable key instead.");
                this._apiKey = s, this._keyMode = zr(s);
                var l = this._initFeatures(c || {});
                this._stripeAccount = u || null, this._controller = new wn({
                    apiKey: s,
                    stripeAccount: u,
                    stripeJsId: e.stripeJsId,
                    features: l
                }), a.forEach(function (e) {
                    return r._controller.warn(e)
                }), this._ensureHTTPS(), this._ensureStripeHosted(n)
            }

            return Fo(e, [{
                key: "_redirect", value: function (e) {
                    window.location.href = e
                }
            }, {
                key: "_ensureHTTPS", value: function () {
                    var e = window.location.protocol, t = -1 !== ["https:", "file:"].indexOf(e),
                        n = -1 !== ["localhost", "127.0.0.1", "0.0.0.0"].indexOf(window.location.hostname),
                        r = this._keyMode === Dr.live,
                        o = "Live Stripe.js integrations must use HTTPS. For more information: https://stripe.com/docs/stripe-js/elements/quickstart#http-requirements";
                    if (!t) {
                        if (r && !n) throw this._controller.report("user_error.non_https_error", {protocol: e}), new de(o);
                        !r || n ? window.console && console.warn("You may test your Stripe.js integration over HTTP. However, live Stripe.js integrations must use HTTPS.") : window.console && console.warn(o)
                    }
                }
            }, {
                key: "_ensureStripeHosted", value: function (e) {
                    e || this._controller.report("user_error.self_hosted")
                }
            }, {
                key: "_initFeatures", value: function (e) {
                    var t = No(this._apiKey), n = xo({}, t);
                    return e && (Object.keys(e).forEach(function (e) {
                        Ro.hasOwnProperty(e) || console.error('Unrecognized feature "' + e + '" passed to "forcedFeatures".')
                    }), Object.keys(t).forEach(function (t) {
                        void 0 !== e[t] && (n = xo({}, n, ie({}, t, !!e[t])))
                    })), n
                }
            }]), e
        }();
    Uo.version = 3, Uo.stripeJsId = dt();
    var Do = function () {
        var e = this;
        this.elements = qt(function (t) {
            return new wo(e._controller, t)
        }), this.createToken = qt(function (t, n) {
            var r = "string" == typeof t ? t : void 0, o = t && t._frame && t._frame.id ? t._frame.id : void 0,
                i = n && "object" === (void 0 === n ? "undefined" : Lo(n)) ? n : {}, a = xo({type: r, frameId: o}, i);
            return Uo._ec && (a.mids = Uo._ec.ids()), e._controller.action(tt.TOKENIZE, a)
        }), this.createSource = qt(function (t, n) {
            var r = t && t._frame && t._frame.id ? t._frame.id : void 0, o = r ? n : t;
            return !r && o && "object" !== (void 0 === o ? "undefined" : Lo(o)) ? gt.reject(new de("Please provide Source creation parameters to createSource.")) : (Uo._ec && o && "object" === (void 0 === o ? "undefined" : Lo(o)) && (o.mids = Uo._ec.ids()), e._controller.action(tt.CREATE_SOURCE, {
                frameId: r,
                data: o
            }))
        }), this.retrieveSource = qt(function (t) {
            return e._controller.action(tt.RETRIEVE_SOURCE, {source: t})
        }), this.paymentRequest = qt(function (t) {
            if (e._keyMode === Dr.unknown) throw new de("It looks like you're using an older Stripe key. In order to use this API, you'll need to use a modern API key, which is prefixed with 'pk_live_' or 'pk_test_'.\n        You can roll your publishable key here: https://dashboard.stripe.com/account/apikeys");
            return new to(e._controller, {apiKey: e._apiKey, stripeAccount: e._stripeAccount}, t)
        }), this._authorizeSource = function (t) {
            return e._controller.action(tt.AUTHORIZE_SOURCE, {source: t}).then(function (t) {
                var n = t.source, r = t.authorizationStatus;
                if ("redirect" === t.nextAction) {
                    var o = n.redirect;
                    return e._redirect(o.url), new gt(function (t, n) {
                        setTimeout(function () {
                            e._controller.report("error.redirect_error", {url: o.url}), n({error: new Error("Failed to perform a redirect.")})
                        }, 1e4)
                    })
                }
                return {source: n, authorizationStatus: r}
            })
        }, this._getAuthorizationStatus = function (t) {
            return e._controller.action(tt.GET_AUTHORIZATION_STATUS, {source: t})
        }
    }, zo = Uo, Ho = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, Vo = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Ko = function () {
        if (document.currentScript) {
            var e = Ze(document.currentScript.src);
            return !e || en(e.origin)
        }
        return !0
    }(), Yo = function (e, t) {
        return new zo(Vo({apiKey: e}, t && "object" === (void 0 === t ? "undefined" : Ho(t)) ? t : {}), Ko)
    };
    Yo.version = zo.version, window.addEventListener("load", function () {
        zo._ec = new Ao
    }), window.Stripe && 2 === window.Stripe.version && !window.Stripe.StripeV3 ? window.Stripe.StripeV3 = Yo : window.Stripe ? window.console && console.warn("It looks like Stripe.js was loaded more than one time. Please only load it once per page.") : window.Stripe = Yo;
    t.default = Yo
}, function (e, t, n) {
    "use strict";

    function r(e) {
        var t = new o(o._61);
        return t._81 = 1, t._65 = e, t
    }

    var o = n(3);
    e.exports = o;
    var i = r(!0), a = r(!1), s = r(null), u = r(void 0), c = r(0), l = r("");
    o.resolve = function (e) {
        if (e instanceof o) return e;
        if (null === e) return s;
        if (void 0 === e) return u;
        if (!0 === e) return i;
        if (!1 === e) return a;
        if (0 === e) return c;
        if ("" === e) return l;
        if ("object" == typeof e || "function" == typeof e) try {
            var t = e.then;
            if ("function" == typeof t) return new o(t.bind(e))
        } catch (e) {
            return new o(function (t, n) {
                n(e)
            })
        }
        return r(e)
    }, o.all = function (e) {
        var t = Array.prototype.slice.call(e);
        return new o(function (e, n) {
            function r(a, s) {
                if (s && ("object" == typeof s || "function" == typeof s)) {
                    if (s instanceof o && s.then === o.prototype.then) {
                        for (; 3 === s._81;) s = s._65;
                        return 1 === s._81 ? r(a, s._65) : (2 === s._81 && n(s._65), void s.then(function (e) {
                            r(a, e)
                        }, n))
                    }
                    var u = s.then;
                    if ("function" == typeof u) {
                        return void new o(u.bind(s)).then(function (e) {
                            r(a, e)
                        }, n)
                    }
                }
                t[a] = s, 0 == --i && e(t)
            }

            if (0 === t.length) return e([]);
            for (var i = t.length, a = 0; a < t.length; a++) r(a, t[a])
        })
    }, o.reject = function (e) {
        return new o(function (t, n) {
            n(e)
        })
    }, o.race = function (e) {
        return new o(function (t, n) {
            e.forEach(function (e) {
                o.resolve(e).then(t, n)
            })
        })
    }, o.prototype.catch = function (e) {
        return this.then(null, e)
    }
}, function (e, t, n) {
    "use strict";

    function r() {
    }

    function o(e) {
        try {
            return e.then
        } catch (e) {
            return _ = e, v
        }
    }

    function i(e, t) {
        try {
            return e(t)
        } catch (e) {
            return _ = e, v
        }
    }

    function a(e, t, n) {
        try {
            e(t, n)
        } catch (e) {
            return _ = e, v
        }
    }

    function s(e) {
        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._45 = 0, this._81 = 0, this._65 = null, this._54 = null, e !== r && y(e, this)
    }

    function u(e, t, n) {
        return new e.constructor(function (o, i) {
            var a = new s(r);
            a.then(o, i), c(e, new h(t, n, a))
        })
    }

    function c(e, t) {
        for (; 3 === e._81;) e = e._65;
        if (s._10 && s._10(e), 0 === e._81) return 0 === e._45 ? (e._45 = 1, void(e._54 = t)) : 1 === e._45 ? (e._45 = 2, void(e._54 = [e._54, t])) : void e._54.push(t);
        l(e, t)
    }

    function l(e, t) {
        m(function () {
            var n = 1 === e._81 ? t.onFulfilled : t.onRejected;
            if (null === n) return void(1 === e._81 ? p(t.promise, e._65) : f(t.promise, e._65));
            var r = i(n, e._65);
            r === v ? f(t.promise, _) : p(t.promise, r)
        })
    }

    function p(e, t) {
        if (t === e) return f(e, new TypeError("A promise cannot be resolved with itself."));
        if (t && ("object" == typeof t || "function" == typeof t)) {
            var n = o(t);
            if (n === v) return f(e, _);
            if (n === e.then && t instanceof s) return e._81 = 3, e._65 = t, void d(e);
            if ("function" == typeof n) return void y(n.bind(t), e)
        }
        e._81 = 1, e._65 = t, d(e)
    }

    function f(e, t) {
        e._81 = 2, e._65 = t, s._97 && s._97(e, t), d(e)
    }

    function d(e) {
        if (1 === e._45 && (c(e, e._54), e._54 = null), 2 === e._45) {
            for (var t = 0; t < e._54.length; t++) c(e, e._54[t]);
            e._54 = null
        }
    }

    function h(e, t, n) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
    }

    function y(e, t) {
        var n = !1, r = a(e, function (e) {
            n || (n = !0, p(t, e))
        }, function (e) {
            n || (n = !0, f(t, e))
        });
        n || r !== v || (n = !0, f(t, _))
    }

    var m = n(4), _ = null, v = {};
    e.exports = s, s._10 = null, s._97 = null, s._61 = r, s.prototype.then = function (e, t) {
        if (this.constructor !== s) return u(this, e, t);
        var n = new s(r);
        return c(this, new h(e, t, n)), n
    }
}, function (e, t, n) {
    "use strict";
    (function (t) {
        function n(e) {
            a.length || (i(), s = !0), a[a.length] = e
        }

        function r() {
            for (; u < a.length;) {
                var e = u;
                if (u += 1, a[e].call(), u > c) {
                    for (var t = 0, n = a.length - u; t < n; t++) a[t] = a[t + u];
                    a.length -= u, u = 0
                }
            }
            a.length = 0, u = 0, s = !1
        }

        function o(e) {
            return function () {
                function t() {
                    clearTimeout(n), clearInterval(r), e()
                }

                var n = setTimeout(t, 0), r = setInterval(t, 50)
            }
        }

        e.exports = n;
        var i, a = [], s = !1, u = 0, c = 1024, l = void 0 !== t ? t : self,
            p = l.MutationObserver || l.WebKitMutationObserver;
        i = "function" == typeof p ? function (e) {
            var t = 1, n = new p(e), r = document.createTextNode("");
            return n.observe(r, {characterData: !0}), function () {
                t = -t, r.data = t
            }
        }(r) : o(r), n.requestFlush = i, n.makeRequestCallFromTimer = o
    }).call(t, n(5))
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t, n) {
    var r, o;
    !function () {
        "use strict";
        var n = function () {
            function e() {
            }

            function t(e, t) {
                for (var n = t.length, r = 0; r < n; ++r) i(e, t[r])
            }

            function n(e, t) {
                e[t] = !0
            }

            function r(e, t) {
                for (var n in t) s.call(t, n) && (e[n] = !!t[n])
            }

            function o(e, t) {
                for (var n = t.split(u), r = n.length, o = 0; o < r; ++o) e[n[o]] = !0
            }

            function i(e, i) {
                if (i) {
                    var a = typeof i;
                    "string" === a ? o(e, i) : Array.isArray(i) ? t(e, i) : "object" === a ? r(e, i) : "number" === a && n(e, i)
                }
            }

            function a() {
                for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                var i = new e;
                t(i, r);
                var a = [];
                for (var s in i) i[s] && a.push(s);
                return a.join(" ")
            }

            e.prototype = Object.create(null);
            var s = {}.hasOwnProperty, u = /\s+/;
            return a
        }();
        void 0 !== e && e.exports ? e.exports = n : (r = [], void 0 !== (o = function () {
            return n
        }.apply(t, r)) && (e.exports = o))
    }()
}]);