(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    5557: function(e, n, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return t(9071)
        }
        ])
    },
    9071: function(e, n, t) {
        "use strict";
        t.r(n),
        t.d(n, {
            default: function() {
                return b
            }
        });
        var r = t(5893)
          , o = t(9008)
          , i = t.n(o)
          , a = t(7294);
        function c(e, n, t, r) {
            return new (t || (t = Promise))(function(o, i) {
                function a(e) {
                    try {
                        u(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function c(e) {
                    try {
                        u(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function u(e) {
                    var n;
                    e.done ? o(e.value) : ((n = e.value)instanceof t ? n : new t(function(e) {
                        e(n)
                    }
                    )).then(a, c)
                }
                u((r = r.apply(e, n || [])).next())
            }
            )
        }
        function u(e, n) {
            var t, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function c(i) {
                return function(c) {
                    return function(i) {
                        if (t)
                            throw TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                0) : r.next) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [2 & i[0], o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = n.call(e, a)
                            } catch (e) {
                                i = [6, e],
                                r = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, c])
                }
            }
        }
        function l(e) {
            var n = "function" == typeof Symbol && Symbol.iterator
              , t = n && e[n]
              , r = 0;
            if (t)
                return t.call(e);
            if (e && "number" == typeof e.length)
                return {
                    next: function() {
                        return e && r >= e.length && (e = void 0),
                        {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
            throw TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
        function s(e, n) {
            var t = "function" == typeof Symbol && e[Symbol.iterator];
            if (!t)
                return e;
            var r, o, i = t.call(e), a = [];
            try {
                for (; (void 0 === n || n-- > 0) && !(r = i.next()).done; )
                    a.push(r.value)
            } catch (e) {
                o = {
                    error: e
                }
            } finally {
                try {
                    r && !r.done && (t = i.return) && t.call(i)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return a
        }
        function f(e, n, t) {
            if (t || 2 == arguments.length)
                for (var r, o = 0, i = n.length; o < i; o++)
                    !r && o in n || (r || (r = Array.prototype.slice.call(n, 0, o)),
                    r[o] = n[o]);
            return e.concat(r || Array.prototype.slice.call(n))
        }
        function d(e, n, t, r, o) {
            for (var i = [], a = 5; a < arguments.length; a++)
                i[a - 5] = arguments[a];
            return c(this, void 0, void 0, function() {
                var a, d, h, y, b;
                return u(this, function(v) {
                    switch (v.label) {
                    case 0:
                        v.trys.push([0, 12, 13, 14]),
                        d = (a = l(i)).next(),
                        v.label = 1;
                    case 1:
                        if (d.done)
                            return [3, 11];
                        switch (typeof (h = d.value)) {
                        case "string":
                            return [3, 2];
                        case "number":
                            return [3, 4];
                        case "function":
                            return [3, 6]
                        }
                        return [3, 8];
                    case 2:
                        return [4, function(e, n, t, r, o, i) {
                            return c(this, void 0, void 0, function() {
                                var a, d;
                                return u(this, function(h) {
                                    switch (h.label) {
                                    case 0:
                                        var y, b;
                                        return y = a = e.textContent || "",
                                        b = s(t).slice(0),
                                        d = f(f([], s(y), !1), [NaN], !1).findIndex(function(e, n) {
                                            return b[n] !== e
                                        }),
                                        [4, function(e, n, t, r, o) {
                                            return c(this, void 0, void 0, function() {
                                                var i, a, c, f, d, h, y, b, v, m, x, g;
                                                return u(this, function(w) {
                                                    switch (w.label) {
                                                    case 0:
                                                        if (i = n,
                                                        o) {
                                                            for (a = 0,
                                                            c = 1; c < n.length; c++)
                                                                if (d = (f = s([n[c - 1], n[c]], 2))[0],
                                                                (h = f[1]).length > d.length || "" === h) {
                                                                    a = c;
                                                                    break
                                                                }
                                                            i = n.slice(a, n.length)
                                                        }
                                                        w.label = 1;
                                                    case 1:
                                                        w.trys.push([1, 6, 7, 8]),
                                                        b = (y = l(function(e) {
                                                            var n, t, r, o, i, a;
                                                            return u(this, function(c) {
                                                                switch (c.label) {
                                                                case 0:
                                                                    n = function(e) {
                                                                        return u(this, function(n) {
                                                                            switch (n.label) {
                                                                            case 0:
                                                                                return [4, {
                                                                                    op: function(n) {
                                                                                        return requestAnimationFrame(function() {
                                                                                            return n.textContent = e
                                                                                        })
                                                                                    },
                                                                                    opCode: function(n) {
                                                                                        var t = n.textContent || "";
                                                                                        return "" === e || t.length > e.length ? "DELETE" : "WRITING"
                                                                                    }
                                                                                }];
                                                                            case 1:
                                                                                return n.sent(),
                                                                                [2]
                                                                            }
                                                                        })
                                                                    }
                                                                    ,
                                                                    c.label = 1;
                                                                case 1:
                                                                    c.trys.push([1, 6, 7, 8]),
                                                                    r = (t = l(e)).next(),
                                                                    c.label = 2;
                                                                case 2:
                                                                    return r.done ? [3, 5] : (o = r.value,
                                                                    [5, n(o)]);
                                                                case 3:
                                                                    c.sent(),
                                                                    c.label = 4;
                                                                case 4:
                                                                    return r = t.next(),
                                                                    [3, 2];
                                                                case 5:
                                                                    return [3, 8];
                                                                case 6:
                                                                    return i = {
                                                                        error: c.sent()
                                                                    },
                                                                    [3, 8];
                                                                case 7:
                                                                    try {
                                                                        r && !r.done && (a = t.return) && a.call(t)
                                                                    } finally {
                                                                        if (i)
                                                                            throw i.error
                                                                    }
                                                                    return [7];
                                                                case 8:
                                                                    return [2]
                                                                }
                                                            })
                                                        }(i))).next(),
                                                        w.label = 2;
                                                    case 2:
                                                        return b.done ? [3, 5] : (m = "WRITING" === (v = b.value).opCode(e) ? t + t * (Math.random() - .5) : r + r * (Math.random() - .5),
                                                        v.op(e),
                                                        [4, p(m)]);
                                                    case 3:
                                                        w.sent(),
                                                        w.label = 4;
                                                    case 4:
                                                        return b = y.next(),
                                                        [3, 2];
                                                    case 5:
                                                        return [3, 8];
                                                    case 6:
                                                        return x = {
                                                            error: w.sent()
                                                        },
                                                        [3, 8];
                                                    case 7:
                                                        try {
                                                            b && !b.done && (g = y.return) && g.call(y)
                                                        } finally {
                                                            if (x)
                                                                throw x.error
                                                        }
                                                        return [7];
                                                    case 8:
                                                        return [2]
                                                    }
                                                })
                                            })
                                        }(e, f(f([], s(function(e, n, t) {
                                            var r, o;
                                            return void 0 === t && (t = 0),
                                            u(this, function(i) {
                                                switch (i.label) {
                                                case 0:
                                                    o = (r = n(e)).length,
                                                    i.label = 1;
                                                case 1:
                                                    return o > t ? [4, r.slice(0, --o).join("")] : [3, 3];
                                                case 2:
                                                    return i.sent(),
                                                    [3, 1];
                                                case 3:
                                                    return [2]
                                                }
                                            })
                                        }(a, n, d)), !1), s(function(e, n, t) {
                                            var r, o;
                                            return void 0 === t && (t = 0),
                                            u(this, function(i) {
                                                switch (i.label) {
                                                case 0:
                                                    o = (r = n(e)).length,
                                                    i.label = 1;
                                                case 1:
                                                    return t < o ? [4, r.slice(0, ++t).join("")] : [3, 3];
                                                case 2:
                                                    return i.sent(),
                                                    [3, 1];
                                                case 3:
                                                    return [2]
                                                }
                                            })
                                        }(t, n, d)), !1), r, o, i)];
                                    case 1:
                                        return h.sent(),
                                        [2]
                                    }
                                })
                            })
                        }(e, n, h, t, r, o)];
                    case 3:
                    case 5:
                    case 7:
                        return v.sent(),
                        [3, 10];
                    case 4:
                        return [4, p(h)];
                    case 6:
                        return [4, h.apply(void 0, f([e, n, t, r, o], s(i), !1))];
                    case 8:
                        return [4, h];
                    case 9:
                        v.sent(),
                        v.label = 10;
                    case 10:
                        return d = a.next(),
                        [3, 1];
                    case 11:
                        return [3, 14];
                    case 12:
                        return y = {
                            error: v.sent()
                        },
                        [3, 14];
                    case 13:
                        try {
                            d && !d.done && (b = a.return) && b.call(a)
                        } finally {
                            if (y)
                                throw y.error
                        }
                        return [7];
                    case 14:
                        return [2]
                    }
                })
            })
        }
        function p(e) {
            return c(this, void 0, void 0, function() {
                return u(this, function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, new Promise(function(n) {
                            return setTimeout(n, e)
                        }
                        )];
                    case 1:
                        return n.sent(),
                        [2]
                    }
                })
            })
        }
        !function(e, n) {
            void 0 === n && (n = {});
            var t = n.insertAt;
            if (e && "undefined" != typeof document) {
                var r = document.head || document.getElementsByTagName("head")[0]
                  , o = document.createElement("style");
                o.type = "text/css",
                "top" === t && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o),
                o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e))
            }
        }(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");
        var h = (0,
        a.memo)((0,
        a.forwardRef)(function(e, n) {
            var t = e.sequence
              , r = e.repeat
              , o = e.className
              , i = e.speed
              , c = void 0 === i ? 40 : i
              , u = e.deletionSpeed
              , l = e.omitDeletionAnimation
              , p = void 0 !== l && l
              , h = e.preRenderFirstString
              , y = e.wrapper
              , b = e.splitter
              , v = void 0 === b ? function(e) {
                return f([], s(e), !1)
            }
            : b
              , m = e.cursor
              , x = void 0 === m || m
              , g = e.style
              , w = function(e, n) {
                var t = {};
                for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && 0 > n.indexOf(r) && (t[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                        0 > n.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]])
                }
                return t
            }(e, ["sequence", "repeat", "className", "speed", "deletionSpeed", "omitDeletionAnimation", "preRenderFirstString", "wrapper", "splitter", "cursor", "style"])
              , _ = w["aria-label"]
              , E = w["aria-hidden"]
              , S = w.role;
            u || (u = c);
            var j = [, , ].fill(40);
            [c, u].forEach(function(e, n) {
                switch (typeof e) {
                case "number":
                    j[n] = Math.abs(e - 100);
                    break;
                case "object":
                    var t = e.type
                      , r = e.value;
                    if ("number" != typeof r)
                        break;
                    "keyStrokeDelayInMs" === t && (j[n] = r)
                }
            });
            var k, N, T, C, O, P, R, A, I = j[0], F = j[1], G = (void 0 === k && (k = null),
            N = (0,
            a.useRef)(k),
            (0,
            a.useEffect)(function() {
                n && ("function" == typeof n ? n(N.current) : n.current = N.current)
            }, [n]),
            N), q = "index-module_type__E-SaG";
            T = o ? "".concat(x ? q + " " : "").concat(o) : x ? q : "",
            C = (0,
            a.useRef)(function() {
                var e, n = t;
                r === 1 / 0 ? e = d : "number" == typeof r && (n = Array(1 + r).fill(t).flat());
                var o = e ? f(f([], s(n), !1), [e], !1) : f([], s(n), !1);
                return d.apply(void 0, f([G.current, v, I, F, p], s(o), !1)),
                function() {
                    G.current
                }
            }),
            O = (0,
            a.useRef)(),
            P = (0,
            a.useRef)(!1),
            R = (0,
            a.useRef)(!1),
            A = s((0,
            a.useState)(0), 2)[1],
            P.current && (R.current = !0),
            (0,
            a.useEffect)(function() {
                return P.current || (O.current = C.current(),
                P.current = !0),
                A(function(e) {
                    return e + 1
                }),
                function() {
                    R.current && O.current && O.current()
                }
            }, []);
            var D = void 0 !== h && h ? t.find(function(e) {
                return "string" == typeof e
            }) || "" : null;
            return a.createElement(void 0 === y ? "span" : y, {
                "aria-hidden": E,
                "aria-label": _,
                role: S,
                style: g,
                className: T,
                children: _ ? a.createElement("span", {
                    "aria-hidden": "true",
                    ref: G,
                    children: D
                }) : D,
                ref: _ ? void 0 : G
            })
        }), function(e, n) {
            return !0
        });
        function y() {
            return (0,
            r.jsx)(r.Fragment, {
                children: (0,
                r.jsx)("section", {
                    id: "hero",
                    className: "bg-[#188B67] bg-[url('/bg2.png')]    md:bg-[url('/bg1.png')]   min-h-screen relative overflow-hidden bg-no-repeat  bg-center bg-cover bg-fixed",
                    children: (0,
                    r.jsx)("div", {
                        className: " min-h-screen w-full customTextShadow px-40 hidden max-w-[3xl] !font-bold lg:flex items-end lg:text-2xl  capitalize text-center justify-center text-[#18465F] lg:!leading-[80px] lg:pb-5",
                        children: (0,
                        r.jsx)(h, {
                            sequence: ["Welcome to Trump Crypto Era.", 5e3, "Ticker: $TCE.", 5e3],
                            wrapper: "span",
                            speed: 50,
                            style: {
                                fontSize: "2em",
                                display: "inline-block"
                            },
                            repeat: 1 / 0
                        })
                    })
                })
            })
        }
        function b() {
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(i(), {
                    children: (0,
                    r.jsx)("title", {
                        children: "Trump Crypto Era"
                    })
                }), (0,
                r.jsx)("div", {
                    children: (0,
                    r.jsx)(y, {})
                })]
            })
        }
    },
    9008: function(e, n, t) {
        e.exports = t(6665)
    }
}, function(e) {
    e.O(0, [888, 774, 179], function() {
        return e(e.s = 5557)
    }),
    _N_E = e.O()
}
]);
