/* jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */ ! function(B, A) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = B.document ? A(B, !0) : function(C) {
        if (!C.document) {
            throw new Error("jQuery requires a window with a document")
        }
        return A(C)
    } : A(B)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = a.document,
        m = "2.1.3",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return n.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
            if (null != (a = arguments[h])) {
                for (b in a) {
                    c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d))
                }
            }
        }
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return !n.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isPlainObject: function(a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) {
                return !1
            }
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++) {
                        if (d = b.apply(a[e], c), d === !1) {
                            break
                        }
                    }
                } else {
                    for (e in a) {
                        if (d = b.apply(a[e], c), d === !1) {
                            break
                        }
                    }
                }
            } else {
                if (g) {
                    for (; f > e; e++) {
                        if (d = b.call(a[e], e, a[e]), d === !1) {
                            break
                        }
                    }
                } else {
                    for (e in a) {
                        if (d = b.call(a[e], e, a[e]), d === !1) {
                            break
                        }
                    }
                }
            }
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : g.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
                a[e++] = b[d]
            }
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
                d = !b(a[f], f), d !== h && e.push(a[f])
            }
            return e
        },
        map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = s(a),
                i = [];
            if (h) {
                for (; g > f; f++) {
                    d = b(a[f], f, c), null != d && i.push(d)
                }
            } else {
                for (f in a) {
                    d = b(a[f], f, c), null != d && i.push(d)
                }
            }
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function() {
                return a.apply(b || this, e.concat(d.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        },
        now: Date.now,
        support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = hb(),
            z = hb(),
            A = hb(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++) {
                    if (a[c] === b) {
                        return c
                    }
                }
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = M.replace("w", "w#"),
            O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
            P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
            Q = new RegExp(L + "+", "g"),
            R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            S = new RegExp("^" + L + "*," + L + "*"),
            T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            V = new RegExp(P),
            W = new RegExp("^" + N + "$"),
            X = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + O),
                PSEUDO: new RegExp("^" + P),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ab = /[+~]/,
            bb = /'|\\/g,
            cb = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            db = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            eb = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (fb) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]) {}
                    a.length = c - 1
                }
            }
        }

        function gb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) {
                return d
            }
            if (!e && p) {
                if (11 !== k && (f = _.exec(a))) {
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode) {
                                return d
                            }
                            if (h.id === j) {
                                return d.push(h), d
                            }
                        } else {
                            if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) {
                                return d.push(h), d
                            }
                        }
                    } else {
                        if (f[2]) {
                            return H.apply(d, b.getElementsByTagName(a)), d
                        }
                        if ((j = f[3]) && c.getElementsByClassName) {
                            return H.apply(d, b.getElementsByClassName(j)), d
                        }
                    }
                }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) {
                            o[l] = s + rb(o[l])
                        }
                        w = ab.test(a) && pb(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) {
                        try {
                            return H.apply(d, w.querySelectorAll(x)), d
                        } catch (y) {} finally {
                            r || b.removeAttribute("id")
                        }
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function hb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ib(a) {
            return a[u] = !0, a
        }

        function jb(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function kb(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) {
                d.attrHandle[c[e]] = b
            }
        }

        function lb(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) {
                return d
            }
            if (c) {
                while (c = c.nextSibling) {
                    if (c === b) {
                        return -1
                    }
                }
            }
            return a ? 1 : -1
        }

        function mb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function nb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function ob(a) {
            return ib(function(b) {
                return b = +b, ib(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) {
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    }
                })
            })
        }

        function pb(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = gb.support = {}, f = gb.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = gb.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", eb, !1) : e.attachEvent && e.attachEvent("onunload", eb)), p = !f(g), c.attributes = jb(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = jb(function(a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = jb(function(a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) {
                        1 === c.nodeType && d.push(c)
                    }
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (jb(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), jb(function(a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && jb(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b) {
                    while (b = b.parentNode) {
                        if (b === a) {
                            return !0
                        }
                    }
                }
                return !1
            }, B = b ? function(a, b) {
                if (a === b) {
                    return l = !0, 0
                }
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) {
                    return l = !0, 0
                }
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                if (!e || !f) {
                    return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0
                }
                if (e === f) {
                    return lb(a, b)
                }
                c = a;
                while (c = c.parentNode) {
                    h.unshift(c)
                }
                c = b;
                while (c = c.parentNode) {
                    i.unshift(c)
                }
                while (h[d] === i[d]) {
                    d++
                }
                return d ? lb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, g) : n
        }, gb.matches = function(a, b) {
            return gb(a, null, null, b)
        }, gb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) {
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) {
                        return d
                    }
                } catch (e) {}
            }
            return gb(b, n, null, [a]).length > 0
        }, gb.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, gb.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, gb.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, gb.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) {
                    b === a[f] && (e = d.push(f))
                }
                while (e--) {
                    a.splice(d[e], 1)
                }
            }
            return k = null, a
        }, e = gb.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) {
                        return a.textContent
                    }
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        c += e(a)
                    }
                } else {
                    if (3 === f || 4 === f) {
                        return a.nodeValue
                    }
                }
            } else {
                while (b = a[d++]) {
                    c += e(b)
                }
            }
            return c
        }, d = gb.selectors = {
            cacheLength: 50,
            createPseudo: ib,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || gb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && gb.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = gb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p]) {
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) {
                                            return !1
                                        }
                                    }
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                                }
                            } else {
                                if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) {
                                    m = j[1]
                                } else {
                                    while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                                        if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) {
                                            break
                                        }
                                    }
                                }
                            }
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || gb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ib(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) {
                            d = J(a, f[g]), a[d] = !(c[d] = f[g])
                        }
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ib(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));
                    return d[u] ? ib(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--) {
                            (f = g[h]) && (a[h] = !(b[h] = f))
                        }
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ib(function(a) {
                    return function(b) {
                        return gb(a, b).length > 0
                    }
                }),
                contains: ib(function(a) {
                    return a = a.replace(cb, db),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ib(function(a) {
                    return W.test(a || "") || gb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(),
                        function(b) {
                            var c;
                            do {
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) {
                                    return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-")
                                }
                            } while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        if (a.nodeType < 6) {
                            return !1
                        }
                    }
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Z.test(a.nodeName)
                },
                input: function(a) {
                    return Y.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: ob(function() {
                    return [0]
                }),
                last: ob(function(a, b) {
                    return [b - 1]
                }),
                eq: ob(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: ob(function(a, b) {
                    for (var c = 0; b > c; c += 2) {
                        a.push(c)
                    }
                    return a
                }),
                odd: ob(function(a, b) {
                    for (var c = 1; b > c; c += 2) {
                        a.push(c)
                    }
                    return a
                }),
                lt: ob(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) {
                        a.push(d)
                    }
                    return a
                }),
                gt: ob(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) {
                        a.push(d)
                    }
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) {
            d.pseudos[b] = mb(b)
        }
        for (b in {
                submit: !0,
                reset: !0
            }) {
            d.pseudos[b] = nb(b)
        }

        function qb() {}
        qb.prototype = d.filters = d.pseudos, d.setFilters = new qb, g = gb.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) {
                return b ? 0 : k.slice(0)
            }
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) {
                    !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                        value: c,
                        type: g,
                        matches: e
                    }), h = h.slice(c.length))
                }
                if (!c) {
                    break
                }
            }
            return b ? h.length : h ? gb.error(a) : z(a, i).slice(0)
        };

        function rb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) {
                d += a[b].value
            }
            return d
        }

        function sb(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d]) {
                    if (1 === b.nodeType || e) {
                        return a(b, c, f)
                    }
                }
            } : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d]) {
                        if ((1 === b.nodeType || e) && a(b, c, g)) {
                            return !0
                        }
                    }
                } else {
                    while (b = b[d]) {
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) {
                                return j[2] = h[2]
                            }
                            if (i[d] = j, j[2] = a(b, c, g)) {
                                return !0
                            }
                        }
                    }
                }
            }
        }

        function tb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--) {
                    if (!a[e](b, c, d)) {
                        return !1
                    }
                }
                return !0
            } : a[0]
        }

        function ub(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) {
                gb(a, b[d], c)
            }
            return c
        }

        function vb(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h))
            }
            return g
        }

        function wb(a, b, c, d, e, f) {
            return d && !d[u] && (d = wb(d)), e && !e[u] && (e = wb(e, f)), ib(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ub(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : vb(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = vb(r, n), d(j, [], h, i), k = j.length;
                    while (k--) {
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                    }
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) {
                                (l = r[k]) && j.push(q[k] = l)
                            }
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--) {
                            (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                        }
                    }
                } else {
                    r = vb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
                }
            })
        }

        function xb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sb(function(a) {
                    return a === b
                }, h, !0), l = sb(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++) {
                if (c = d.relative[a[i].type]) {
                    m = [sb(tb(m), c)]
                } else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++) {
                            if (d.relative[a[e].type]) {
                                break
                            }
                        }
                        return wb(i > 1 && tb(m), i > 1 && rb(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && xb(a.slice(i, e)), f > e && xb(a = a.slice(e)), f > e && rb(a))
                    }
                    m.push(c)
                }
            }
            return tb(m)
        }

        function yb(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, m, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = j,
                        u = f || e && d.find.TAG("*", k),
                        v = w += null == t ? 1 : Math.random() || 0.1,
                        x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++]) {
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break
                                }
                            }
                            k && (w = v)
                        }
                        c && ((l = !o && l) && p--, f && r.push(l))
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        while (o = b[m++]) {
                            o(r, s, g, h)
                        }
                        if (f) {
                            if (p > 0) {
                                while (q--) {
                                    r[q] || s[q] || (s[q] = F.call(i))
                                }
                            }
                            s = vb(s)
                        }
                        H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && gb.uniqueSort(i)
                    }
                    return k && (w = v, j = t), r
                };
            return c ? ib(f) : f
        }
        return h = gb.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) {
                    f = xb(b[c]), f[u] ? d.push(f) : e.push(f)
                }
                f = A(a, yb(e, d)), f.selector = a
            }
            return f
        }, i = gb.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) {
                        return e
                    }
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) {
                        break
                    }
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && pb(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && rb(j), !a) {
                            return H.apply(e, f), e
                        }
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && pb(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = jb(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), jb(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || kb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && jb(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || kb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), jb(function(a) {
            return null == a.getAttribute("disabled")
        }) || kb(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), gb
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;

    function x(a, b, c) {
        if (n.isFunction(b)) {
            return n.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            })
        }
        if (b.nodeType) {
            return n.grep(a, function(a) {
                return a === b !== c
            })
        }
        if ("string" == typeof b) {
            if (w.test(b)) {
                return n.filter(b, a, c)
            }
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return g.call(b, a) >= 0 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) {
                return this.pushStack(n(a).filter(function() {
                    for (b = 0; c > b; b++) {
                        if (n.contains(e[b], this)) {
                            return !0
                        }
                    }
                }))
            }
            for (b = 0; c > b; b++) {
                n.find(a, e[b], d)
            }
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(x(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(x(this, a || [], !0))
        },
        is: function(a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = n.fn.init = function(a, b) {
            var c, d;
            if (!a) {
                return this
            }
            if ("string" == typeof a) {
                if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) {
                    return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a)
                }
                if (c[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b)) {
                        for (c in b) {
                            n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c])
                        }
                    }
                    return this
                }
                return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.extend({
        dir: function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType) {
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) {
                        break
                    }
                    d.push(a)
                }
            }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) {
                1 === a.nodeType && a !== b && c.push(a)
            }
            return c
        }
    }), n.fn.extend({
        has: function(a) {
            var b = n(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++) {
                    if (n.contains(this, b[a])) {
                        return !0
                    }
                }
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) {
                for (c = this[d]; c && c !== b; c = c.parentNode) {
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
                }
            }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType) {}
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return n.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return n.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return n.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return n.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return n.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return n.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return n.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var E = /\S+/g,
        F = {};

    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) {
                for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) {
                    if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        b = !1;
                        break
                    }
                }
                d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
            },
            k = {
                add: function() {
                    if (h) {
                        var c = h.length;
                        ! function g(b) {
                            n.each(b, function(b, c) {
                                var d = n.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                            })
                        }(arguments), d ? f = h.length : b && (e = c, j(b))
                    }
                    return this
                },
                remove: function() {
                    return h && n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, h, c)) > -1) {
                            h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
                        }
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function() {
                    return h = [], f = 0, this
                },
                disable: function() {
                    return h = i = b = void 0, this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return i = void 0, b || k.disable(), this
                },
                locked: function() {
                    return !i
                },
                fireWith: function(a, b) {
                    return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!c
                }
            };
        return k
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (e > 1) {
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) {
                    c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f
                }
            }
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
        }
    });

    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
    }
    n.ready.promise = function(b) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
    }, n.ready.promise();
    var J = n.access = function(a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c) {
                n.access(a, b, h, c[h], !0, f, g)
            }
        } else {
            if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(n(a), c)
                })), b)) {
                for (; i > h; h++) {
                    b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)))
                }
            }
        }
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    n.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };

    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = n.expando + K.uid++
    }
    K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function(a) {
            if (!K.accepts(a)) {
                return 0
            }
            var b = {},
                c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function(a, b, c) {
            var d, e = this.key(a),
                f = this.cache[e];
            if ("string" == typeof b) {
                f[b] = c
            } else {
                if (n.isEmptyObject(f)) {
                    n.extend(this.cache[e], b)
                } else {
                    for (d in b) {
                        f[d] = b[d]
                    }
                }
            }
            return f
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a),
                g = this.cache[f];
            if (void 0 === b) {
                this.cache[f] = {}
            } else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
                while (c--) {
                    delete g[d[c]]
                }
            }
        },
        hasData: function(a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var L = new K,
        M = new K,
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) {
            if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                M.set(a, b, c)
            } else {
                c = void 0
            }
        }
        return c
    }
    n.extend({
        hasData: function(a) {
            return M.hasData(a) || L.hasData(a)
        },
        data: function(a, b, c) {
            return M.access(a, b, c)
        },
        removeData: function(a, b) {
            M.remove(a, b)
        },
        _data: function(a, b, c) {
            return L.access(a, b, c)
        },
        _removeData: function(a, b) {
            L.remove(a, b)
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) {
                        g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])))
                    }
                    L.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                M.set(this, a)
            }) : J(this, function(b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c) {
                        return c
                    }
                    if (c = M.get(f, d), void 0 !== c) {
                        return c
                    }
                    if (c = P(f, d, void 0), void 0 !== c) {
                        return c
                    }
                } else {
                    this.each(function() {
                        var c = M.get(this, d);
                        M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                    })
                }
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                M.remove(this, a)
            })
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function() {
                    n.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    L.remove(a, [b + "queue", c])
                })
            })
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) {
                c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h))
            }
            return h(), e.promise(b)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        R = ["Top", "Right", "Bottom", "Left"],
        S = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        },
        T = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = l.createDocumentFragment(),
            b = a.appendChild(l.createElement("div")),
            c = l.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/,
        W = /^(?:mouse|pointer|contextmenu)|click/,
        X = /^(?:focusinfocus|focusoutblur)$/,
        Y = /^([^.]*)(?:\.(.+)|)$/;

    function Z() {
        return !0
    }

    function $() {
        return !1
    }

    function _() {
        try {
            return l.activeElement
        } catch (a) {}
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(E) || [""], j = b.length;
                while (j--) {
                    h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
                }
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--) {
                    if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) {
                            k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k))
                        }
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                    } else {
                        for (o in i) {
                            n.event.remove(a, o + b[j], c, d, !0)
                        }
                    }
                }
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, m, o, p = [d || l],
                q = j.call(b, "type") ? b.type : b,
                r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) {
                        p.push(g), h = g
                    }
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
                }
                f = 0;
                while ((g = p[f++]) && !b.isPropagationStopped()) {
                    b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault())
                }
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (L.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
                        (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
                    }
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) {
                for (; i !== this; i = i.parentNode || this) {
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [], c = 0; h > c; c++) {
                            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f)
                        }
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
                }
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[n.expando]) {
                return a
            }
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--) {
                c = d[b], a[c] = f[c]
            }
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) {
                    this.on(g, b, c, a[g], e)
                }
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) {
                d = $
            } else {
                if (!d) {
                    return this
                }
            }
            return 1 === e && (f = d, d = function(a) {
                return n().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function() {
                n.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) {
                return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this
            }
            if ("object" == typeof a) {
                for (e in a) {
                    this.off(e, b, a[e])
                }
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bb = /<([\w:]+)/,
        cb = /<|&#?\w+;/,
        db = /<(?:script|style|link)/i,
        eb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fb = /^$|\/(?:java|ecma)script/i,
        gb = /^true\/(.*)/,
        hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ib = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td;

    function jb(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function kb(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function lb(a) {
        var b = gb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function mb(a, b) {
        for (var c = 0, d = a.length; d > c; c++) {
            L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
        }
    }

    function nb(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) {
                    for (c = 0, d = j[e].length; d > c; c++) {
                        n.event.add(b, e, j[e][c])
                    }
                }
            }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
        }
    }

    function ob(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function pb(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
    n.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) {
                for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++) {
                    pb(f[d], g[d])
                }
            }
            if (b) {
                if (c) {
                    for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++) {
                        nb(f[d], g[d])
                    }
                } else {
                    nb(a, h)
                }
            }
            return g = ob(h, "script"), g.length > 0 && mb(g, !i && ob(a, "script")), h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) {
                if (e = a[m], e || 0 === e) {
                    if ("object" === n.type(e)) {
                        n.merge(l, e.nodeType ? [e] : e)
                    } else {
                        if (cb.test(e)) {
                            f = f || k.appendChild(b.createElement("div")), g = (bb.exec(e) || ["", ""])[1].toLowerCase(), h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2], j = h[0];
                            while (j--) {
                                f = f.lastChild
                            }
                            n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
                        } else {
                            l.push(b.createTextNode(e))
                        }
                    }
                }
            }
            k.textContent = "", m = 0;
            while (e = l[m++]) {
                if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = ob(k.appendChild(e), "script"), i && mb(f), c)) {
                    j = 0;
                    while (e = f[j++]) {
                        fb.test(e.type || "") && c.push(e)
                    }
                }
            }
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events) {
                        for (d in b.events) {
                            f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle)
                        }
                    }
                    L.cache[e] && delete L.cache[e]
                }
                delete M.cache[c[M.expando]]
            }
        }
    }), n.fn.extend({
        text: function(a) {
            return J(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) {
                b || 1 !== c.nodeType || n.cleanData(ob(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && mb(ob(c, "script")), c.parentNode.removeChild(c))
            }
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && (n.cleanData(ob(a, !1)), a.textContent = "")
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return J(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) {
                    return b.innerHTML
                }
                if ("string" == typeof a && !db.test(a) && !ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(ab, "<$1></$2>");
                    try {
                        for (; d > c; c++) {
                            b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ob(b, !1)), b.innerHTML = a)
                        }
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, n.cleanData(ob(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                l = this.length,
                m = this,
                o = l - 1,
                p = a[0],
                q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && eb.test(p)) {
                return this.each(function(c) {
                    var d = m.eq(c);
                    q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
                })
            }
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(ob(c, "script"), kb), g = f.length; l > j; j++) {
                    h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, ob(h, "script"))), b.call(this[j], h, j)
                }
                if (g) {
                    for (i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0; g > j; j++) {
                        h = f[j], fb.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(hb, "")))
                    }
                }
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) {
                c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get())
            }
            return this.pushStack(d)
        }
    });
    var qb, rb = {};

    function sb(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
        return e.detach(), f
    }

    function tb(a) {
        var b = l,
            c = rb[a];
        return c || (c = sb(a, b), "none" !== c && c || (qb = (qb || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), c
    }
    var ub = /^margin/,
        vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
        wb = function(b) {
            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
        };

    function xb(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function yb(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }! function() {
        var b, c, d = l.documentElement,
            e = l.createElement("div"),
            f = l.createElement("div");
        if (f.style) {
            f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);

            function g() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
            }
            a.getComputedStyle && n.extend(k, {
                pixelPosition: function() {
                    return g(), b
                },
                boxSizingReliable: function() {
                    return null == c && g(), c
                },
                reliableMarginRight: function() {
                    var b, c = f.appendChild(l.createElement("div"));
                    return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b
                }
            })
        }
    }(), n.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) {
            g[f] = a.style[f], a.style[f] = b[f]
        }
        e = c.apply(a, d || []);
        for (f in b) {
            a.style[f] = g[f]
        }
        return e
    };
    var zb = /^(none|table(?!-c[ea]).+)/,
        Ab = new RegExp("^(" + Q + ")(.*)$", "i"),
        Bb = new RegExp("^([+-])=(" + Q + ")", "i"),
        Cb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Db = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Eb = ["Webkit", "O", "Moz", "ms"];

    function Fb(a, b) {
        if (b in a) {
            return b
        }
        var c = b[0].toUpperCase() + b.slice(1),
            d = b,
            e = Eb.length;
        while (e--) {
            if (b = Eb[e] + c, b in a) {
                return b
            }
        }
        return d
    }

    function Gb(a, b, c) {
        var d = Ab.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Hb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
            "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)))
        }
        return g
    }

    function Ib(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = wb(a),
            g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e)) {
                return e
            }
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Jb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
            d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))))
        }
        for (g = 0; h > g; g++) {
            d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"))
        }
        return a
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = xb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), "normal" === e && b in Db && (e = Db[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? zb.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Cb, function() {
                    return Ib(a, b, d)
                }) : Ib(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && wb(a);
                return Gb(a, c, d ? Hb(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), n.cssHooks.marginRight = yb(k.reliableMarginRight, function(a, b) {
        return b ? n.swap(a, {
            display: "inline-block"
        }, xb, [a, "marginRight"]) : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
                    e[a + R[d] + b] = f[d] || f[d - 2] || f[0]
                }
                return e
            }
        }, ub.test(a) || (n.cssHooks[a + b].set = Gb)
    }), n.fn.extend({
        css: function(a, b) {
            return J(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = wb(a), e = b.length; e > g; g++) {
                        f[b[g]] = n.css(a, b[g], !1, d)
                    }
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Jb(this, !0)
        },
        hide: function() {
            return Jb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                S(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function Kb(a, b, c, d, e) {
        return new Kb.prototype.init(a, b, c, d, e)
    }
    n.Tween = Kb, Kb.prototype = {
        constructor: Kb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Kb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Kb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Kb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this
        }
    }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return 0.5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = Kb.prototype.init, n.fx.step = {};
    var Lb, Mb, Nb = /^(?:toggle|show|hide)$/,
        Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        Pb = /queueHooks$/,
        Qb = [Vb],
        Rb = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = Ob.exec(b),
                    f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
                    g = (n.cssNumber[a] || "px" !== f && +d) && Ob.exec(n.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do {
                        h = h || ".5", g /= h, n.style(c.elem, a, g + f)
                    } while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function Sb() {
        return setTimeout(function() {
            Lb = void 0
        }), Lb = n.now()
    }

    function Tb(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
            c = R[d], e["margin" + c] = e["padding" + c] = a
        }
        return b && (e.opacity = e.width = a), e
    }

    function Ub(a, b, c) {
        for (var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length; g > f; f++) {
            if (d = e[f].call(c, b, a)) {
                return d
            }
        }
    }

    function Vb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            o = a.style,
            p = a.nodeType && S(a),
            q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || tb(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b) {
            if (e = b[d], Nb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) {
                        continue
                    }
                    p = !0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else {
                j = void 0
            }
        }
        if (n.isEmptyObject(m)) {
            "inline" === ("none" === j ? tb(a.nodeName) : j) && (o.display = j)
        } else {
            q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() {
                n(a).hide()
            }), l.done(function() {
                var b;
                L.remove(a, "fxshow");
                for (b in m) {
                    n.style(a, b, m[b])
                }
            });
            for (d in m) {
                g = Ub(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }
    }

    function Wb(a, b) {
        var c, d, e, f, g;
        for (c in a) {
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) {
                    c in a || (a[c] = f[c], b[c] = e)
                }
            } else {
                b[d] = e
            }
        }
    }

    function Xb(a, b, c) {
        var d, e, f = 0,
            g = Qb.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) {
                    return !1
                }
                for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
                    j.tweens[g].run(f)
                }
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Lb || Sb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) {
                        return this
                    }
                    for (e = !0; d > c; c++) {
                        j.tweens[c].run(1)
                    }
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (Wb(k, j.opts.specialEasing); g > f; f++) {
            if (d = Qb[f].call(j, a, k, j.opts)) {
                return d
            }
        }
        return n.map(k, Ub, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(Xb, {
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) {
                    c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b)
                }
            },
            prefilter: function(a, b) {
                b ? Qb.unshift(a) : Qb.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(S).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = Xb(this, n.extend({}, a), f);
                        (e || L.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = L.get(this);
                    if (e) {
                        g[e] && g[e].stop && d(g[e])
                    } else {
                        for (e in g) {
                            g[e] && g[e].stop && Pb.test(e) && d(g[e])
                        }
                    }
                    for (e = f.length; e--;) {
                        f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1))
                    }(b || !c) && n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = L.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
                        f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1))
                    }
                    for (b = 0; g > b; b++) {
                        d[b] && d[b].finish && d[b].finish.call(this)
                    }
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: Tb("show"),
            slideUp: Tb("hide"),
            slideToggle: Tb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = 0,
                c = n.timers;
            for (Lb = n.now(); b < c.length; b++) {
                a = c[b], a() || c[b] !== a || c.splice(b--, 1)
            }
            c.length || n.fx.stop(), Lb = void 0
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            Mb || (Mb = setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            clearInterval(Mb), Mb = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(a, b) {
            return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        function() {
            var a = l.createElement("input"),
                b = l.createElement("select"),
                c = b.appendChild(l.createElement("option"));
            a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
        }();
    var Yb, Zb, $b = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return J(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) {
                return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType) {
                while (c = f[e++]) {
                    d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
                }
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), Zb = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = $b[b] || n.find.attr;
        $b[b] = function(a, b, d) {
            var e, f;
            return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $b[b] = f), e
        }
    });
    var _b = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return J(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) {
                return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    });
    var ac = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (n.isFunction(a)) {
                return this.each(function(b) {
                    n(this).addClass(a.call(this, b, this.className))
                })
            }
            if (h) {
                for (b = (a || "").match(E) || []; j > i; i++) {
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) {
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ")
                        }
                        g = n.trim(d), c.className !== g && (c.className = g)
                    }
                }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (n.isFunction(a)) {
                return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, this.className))
                })
            }
            if (h) {
                for (b = (a || "").match(E) || []; j > i; i++) {
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) {
                        f = 0;
                        while (e = b[f++]) {
                            while (d.indexOf(" " + e + " ") >= 0) {
                                d = d.replace(" " + e + " ", " ")
                            }
                        }
                        g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
                    }
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c) {
                    var b, d = 0,
                        e = n(this),
                        f = a.match(E) || [];
                    while (b = f[d++]) {
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                    }
                } else {
                    (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
                }
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) {
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0) {
                    return !0
                }
            }
            return !1
        }
    });
    var bc = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            if (arguments.length) {
                return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                })
            }
            if (e) {
                return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) {
                                return b
                            }
                            g.push(b)
                        }
                    }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--) {
                        d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0)
                    }
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var cc = n.now(),
        dc = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, n.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) {
            return null
        }
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
    };
    var ec = /#.*$/,
        fc = /([?&])_=[^&]*/,
        gc = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        hc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ic = /^(?:GET|HEAD)$/,
        jc = /^\/\//,
        kc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        lc = {},
        mc = {},
        nc = "*/".concat("*"),
        oc = a.location.href,
        pc = kc.exec(oc.toLowerCase()) || [];

    function qc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c)) {
                while (d = f[e++]) {
                    "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
                }
            }
        }
    }

    function rc(a, b, c, d) {
        var e = {},
            f = a === mc;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function sc(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) {
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c])
        }
        return d && n.extend(!0, a, d), a
    }

    function tc(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) {
            i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"))
        }
        if (d) {
            for (e in h) {
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
            }
        }
        if (i[0] in c) {
            f = i[0]
        } else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function uc(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1]) {
            for (g in a.converters) {
                j[g.toLowerCase()] = a.converters[g]
            }
        }
        f = k.shift();
        while (f) {
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) {
                if ("*" === f) {
                    f = i
                } else {
                    if ("*" !== i && i !== f) {
                        if (g = j[i + " " + f] || j["* " + f], !g) {
                            for (e in j) {
                                if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                    g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                    break
                                }
                            }
                        }
                        if (g !== !0) {
                            if (g && a["throws"]) {
                                b = g(b)
                            } else {
                                try {
                                    b = g(b)
                                } catch (l) {
                                    return {
                                        state: "parsererror",
                                        error: g ? l : "No conversion from " + i + " to " + f
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: oc,
            type: "GET",
            isLocal: hc.test(pc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": nc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? sc(sc(a, n.ajaxSettings), b) : sc(n.ajaxSettings, a)
        },
        ajaxPrefilter: qc(lc),
        ajaxTransport: qc(mc),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b),
                l = k.context || k,
                m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
                o = n.Deferred(),
                p = n.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!f) {
                                f = {};
                                while (b = gc.exec(e)) {
                                    f[b[1].toLowerCase()] = b[2]
                                }
                            }
                            b = f[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? e : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a) {
                            if (2 > t) {
                                for (b in a) {
                                    q[b] = [q[b], a[b]]
                                }
                            } else {
                                v.always(a[v.status])
                            }
                        }
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return c && c.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || oc) + "").replace(ec, "").replace(jc, pc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kc.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pc[1] && h[2] === pc[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pc[3] || ("http:" === pc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rc(lc, k, b, v), 2 === t) {
                return v
            }
            i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ic.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fc.test(d) ? d.replace(fc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nc + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers) {
                v.setRequestHeader(j, k.headers[j])
            }
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) {
                return v.abort()
            }
            u = "abort";
            for (j in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) {
                v[j](k[j])
            }
            if (c = rc(mc, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, c.send(r, x)
                } catch (w) {
                    if (!(2 > t)) {
                        throw w
                    }
                    x(-1, w)
                }
            } else {
                x(-1, "No Transport")
            }

            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tc(k, v, f)), u = uc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild) {
                    a = a.firstElementChild
                }
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return this.each(n.isFunction(a) ? function(b) {
                n(this).wrapInner(a.call(this, b))
            } : function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    };
    var vc = /%20/g,
        wc = /\[\]$/,
        xc = /\r?\n/g,
        yc = /^(?:submit|button|image|reset|file)$/i,
        zc = /^(?:input|select|textarea|keygen)/i;

    function Ac(a, b, c, d) {
        var e;
        if (n.isArray(b)) {
            n.each(b, function(b, e) {
                c || wc.test(a) ? d(a, e) : Ac(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            })
        } else {
            if (c || "object" !== n.type(b)) {
                d(a, b)
            } else {
                for (e in b) {
                    Ac(a + "[" + e + "]", b[e], c, d)
                }
            }
        }
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) {
            n.each(a, function() {
                e(this.name, this.value)
            })
        } else {
            for (c in a) {
                Ac(c, a[c], b, e)
            }
        }
        return d.join("&").replace(vc, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && zc.test(this.nodeName) && !yc.test(a) && (this.checked || !T.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(xc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(xc, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var Bc = 0,
        Cc = {},
        Dc = {
            0: 200,
            1223: 204
        },
        Ec = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Cc) {
            Cc[a]()
        }
    }), k.cors = !!Ec && "withCredentials" in Ec, k.ajax = Ec = !!Ec, n.ajaxTransport(function(a) {
        var b;
        return k.cors || Ec && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(),
                    g = ++Bc;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) {
                    for (e in a.xhrFields) {
                        f[e] = a.xhrFields[e]
                    }
                }
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) {
                    f.setRequestHeader(e, c[e])
                }
                b = function(a) {
                    return function() {
                        b && (delete Cc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Dc[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Cc[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b) {
                        throw h
                    }
                }
            },
            abort: function() {
                b && b()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), l.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Fc = [],
        Gc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Fc.pop() || n.expando + "_" + cc++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Gc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gc, "$1" + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) {
            return null
        }
        "boolean" == typeof b && (c = b, b = !1), b = b || l;
        var d = v.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var Hc = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Hc) {
            return Hc.apply(this, arguments)
        }
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };
    var Ic = a.document.documentElement;

    function Jc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) {
                return void 0 === a ? this : this.each(function(b) {
                    n.offset.setOffset(this, a, b)
                })
            }
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            if (f) {
                return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jc(f), {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e
            }
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || Ic;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) {
                    a = a.offsetParent
                }
                return a || Ic
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function(e) {
            return J(this, function(b, e, f) {
                var g = Jc(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = yb(k.pixelPosition, function(a, c) {
            return c ? (c = xb(a, b), vb.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var Kc = a.jQuery,
        Lc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Lc), b && a.jQuery === n && (a.jQuery = Kc), n
    }, typeof b === U && (a.jQuery = a.$ = n), n
});
/* jQuery UI - v1.10.3 - 2013-07-29
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
 * Copyright 2013 jQuery Foundation and other contributors Licensed MIT */
(function(B, F) {
    var A = 0,
        E = /^ui-id-\d+$/;
    B.ui = B.ui || {};
    B.extend(B.ui, {
        version: "1.10.3",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });
    B.fn.extend({
        focus: (function(G) {
            return function(H, I) {
                return typeof H === "number" ? this.each(function() {
                    var J = this;
                    setTimeout(function() {
                        B(J).focus();
                        if (I) {
                            I.call(J)
                        }
                    }, H)
                }) : G.apply(this, arguments)
            }
        })(B.fn.focus),
        scrollParent: function() {
            var G;
            if ((B.ui.ie && (/(static|relative)/).test(this.css("position"))) || (/absolute/).test(this.css("position"))) {
                G = this.parents().filter(function() {
                    return (/(relative|absolute|fixed)/).test(B.css(this, "position")) && (/(auto|scroll)/).test(B.css(this, "overflow") + B.css(this, "overflow-y") + B.css(this, "overflow-x"))
                }).eq(0)
            } else {
                G = this.parents().filter(function() {
                    return (/(auto|scroll)/).test(B.css(this, "overflow") + B.css(this, "overflow-y") + B.css(this, "overflow-x"))
                }).eq(0)
            }
            return (/fixed/).test(this.css("position")) || !G.length ? B(document) : G
        },
        zIndex: function(J) {
            if (J !== F) {
                return this.css("zIndex", J)
            }
            if (this.length) {
                var H = B(this[0]),
                    G, I;
                while (H.length && H[0] !== document) {
                    G = H.css("position");
                    if (G === "absolute" || G === "relative" || G === "fixed") {
                        I = parseInt(H.css("zIndex"), 10);
                        if (!isNaN(I) && I !== 0) {
                            return I
                        }
                    }
                    H = H.parent()
                }
            }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                if (!this.id) {
                    this.id = "ui-id-" + (++A)
                }
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                if (E.test(this.id)) {
                    B(this).removeAttr("id")
                }
            })
        }
    });

    function D(I, G) {
        var K, J, H, L = I.nodeName.toLowerCase();
        if ("area" === L) {
            K = I.parentNode;
            J = K.name;
            if (!I.href || !J || K.nodeName.toLowerCase() !== "map") {
                return false
            }
            H = B("img[usemap=#" + J + "]")[0];
            return !!H && C(H)
        }
        return (/input|select|textarea|button|object/.test(L) ? !I.disabled : "a" === L ? I.href || G : G) && C(I)
    }

    function C(G) {
        return B.expr.filters.visible(G) && !B(G).parents().addBack().filter(function() {
            return B.css(this, "visibility") === "hidden"
        }).length
    }
    B.extend(B.expr[":"], {
        data: B.expr.createPseudo ? B.expr.createPseudo(function(G) {
            return function(H) {
                return !!B.data(H, G)
            }
        }) : function(I, H, G) {
            return !!B.data(I, G[3])
        },
        focusable: function(G) {
            return D(G, !isNaN(B.attr(G, "tabindex")))
        },
        tabbable: function(I) {
            var G = B.attr(I, "tabindex"),
                H = isNaN(G);
            return (H || G >= 0) && D(I, !H)
        }
    });
    if (!B("<a>").outerWidth(1).jquery) {
        B.each(["Width", "Height"], function(I, G) {
            var H = G === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
                J = G.toLowerCase(),
                L = {
                    innerWidth: B.fn.innerWidth,
                    innerHeight: B.fn.innerHeight,
                    outerWidth: B.fn.outerWidth,
                    outerHeight: B.fn.outerHeight
                };

            function K(O, N, M, P) {
                B.each(H, function() {
                    N -= parseFloat(B.css(O, "padding" + this)) || 0;
                    if (M) {
                        N -= parseFloat(B.css(O, "border" + this + "Width")) || 0
                    }
                    if (P) {
                        N -= parseFloat(B.css(O, "margin" + this)) || 0
                    }
                });
                return N
            }
            B.fn["inner" + G] = function(M) {
                if (M === F) {
                    return L["inner" + G].call(this)
                }
                return this.each(function() {
                    B(this).css(J, K(this, M) + "px")
                })
            };
            B.fn["outer" + G] = function(M, N) {
                if (typeof M !== "number") {
                    return L["outer" + G].call(this, M)
                }
                return this.each(function() {
                    B(this).css(J, K(this, M, true, N) + "px")
                })
            }
        })
    }
    if (!B.fn.addBack) {
        B.fn.addBack = function(G) {
            return this.add(G == null ? this.prevObject : this.prevObject.filter(G))
        }
    }
    if (B("<a>").data("a-b", "a").removeData("a-b").data("a-b")) {
        B.fn.removeData = (function(G) {
            return function(H) {
                if (arguments.length) {
                    return G.call(this, B.camelCase(H))
                } else {
                    return G.call(this)
                }
            }
        })(B.fn.removeData)
    }
    B.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    B.support.selectstart = "onselectstart" in document.createElement("div");
    B.fn.extend({
        disableSelection: function() {
            return this.bind((B.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(G) {
                G.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    });
    B.extend(B.ui, {
        plugin: {
            add: function(H, I, K) {
                var G, J = B.ui[H].prototype;
                for (G in K) {
                    J.plugins[G] = J.plugins[G] || [];
                    J.plugins[G].push([I, K[G]])
                }
            },
            call: function(G, I, H) {
                var J, K = G.plugins[I];
                if (!K || !G.element[0].parentNode || G.element[0].parentNode.nodeType === 11) {
                    return
                }
                for (J = 0; J < K.length; J++) {
                    if (G.options[K[J][0]]) {
                        K[J][1].apply(G.element, H)
                    }
                }
            }
        },
        hasScroll: function(J, H) {
            if (B(J).css("overflow") === "hidden") {
                return false
            }
            var G = (H && H === "left") ? "scrollLeft" : "scrollTop",
                I = false;
            if (J[G] > 0) {
                return true
            }
            J[G] = 1;
            I = (J[G] > 0);
            J[G] = 0;
            return I
        }
    })
})(jQuery);
(function(B, E) {
    var A = 0,
        D = Array.prototype.slice,
        C = B.cleanData;
    B.cleanData = function(F) {
        for (var G = 0, H;
            (H = F[G]) != null; G++) {
            try {
                B(H).triggerHandler("remove")
            } catch (I) {}
        }
        C(F)
    };
    B.widget = function(F, G, N) {
        var K, L, I, M, H = {},
            J = F.split(".")[0];
        F = F.split(".")[1];
        K = J + "-" + F;
        if (!N) {
            N = G;
            G = B.Widget
        }
        B.expr[":"][K.toLowerCase()] = function(O) {
            return !!B.data(O, K)
        };
        B[J] = B[J] || {};
        L = B[J][F];
        I = B[J][F] = function(O, P) {
            if (!this._createWidget) {
                return new I(O, P)
            }
            if (arguments.length) {
                this._createWidget(O, P)
            }
        };
        B.extend(I, L, {
            version: N.version,
            _proto: B.extend({}, N),
            _childConstructors: []
        });
        M = new G();
        M.options = B.widget.extend({}, M.options);
        B.each(N, function(P, O) {
            if (!B.isFunction(O)) {
                H[P] = O;
                return
            }
            H[P] = (function() {
                var Q = function() {
                        return G.prototype[P].apply(this, arguments)
                    },
                    R = function(S) {
                        return G.prototype[P].apply(this, S)
                    };
                return function() {
                    var U = this._super,
                        S = this._superApply,
                        T;
                    this._super = Q;
                    this._superApply = R;
                    T = O.apply(this, arguments);
                    this._super = U;
                    this._superApply = S;
                    return T
                }
            })()
        });
        I.prototype = B.widget.extend(M, {
            widgetEventPrefix: L ? M.widgetEventPrefix : F
        }, H, {
            constructor: I,
            namespace: J,
            widgetName: F,
            widgetFullName: K
        });
        if (L) {
            B.each(L._childConstructors, function(P, Q) {
                var O = Q.prototype;
                B.widget(O.namespace + "." + O.widgetName, I, Q._proto)
            });
            delete L._childConstructors
        } else {
            G._childConstructors.push(I)
        }
        B.widget.bridge(F, I)
    };
    B.widget.extend = function(K) {
        var G = D.call(arguments, 1),
            J = 0,
            F = G.length,
            H, I;
        for (; J < F; J++) {
            for (H in G[J]) {
                I = G[J][H];
                if (G[J].hasOwnProperty(H) && I !== E) {
                    if (B.isPlainObject(I)) {
                        K[H] = B.isPlainObject(K[H]) ? B.widget.extend({}, K[H], I) : B.widget.extend({}, I)
                    } else {
                        K[H] = I
                    }
                }
            }
        }
        return K
    };
    B.widget.bridge = function(G, F) {
        var H = F.prototype.widgetFullName || G;
        B.fn[G] = function(K) {
            var I = typeof K === "string",
                J = D.call(arguments, 1),
                L = this;
            K = !I && J.length ? B.widget.extend.apply(null, [K].concat(J)) : K;
            if (I) {
                this.each(function() {
                    var N, M = B.data(this, H);
                    if (!M) {
                        return B.error("cannot call methods on " + G + " prior to initialization; attempted to call method '" + K + "'")
                    }
                    if (!B.isFunction(M[K]) || K.charAt(0) === "_") {
                        return B.error("no such method '" + K + "' for " + G + " widget instance")
                    }
                    N = M[K].apply(M, J);
                    if (N !== M && N !== E) {
                        L = N && N.jquery ? L.pushStack(N.get()) : N;
                        return false
                    }
                })
            } else {
                this.each(function() {
                    var M = B.data(this, H);
                    if (M) {
                        M.option(K || {})._init()
                    } else {
                        B.data(this, H, new F(K, this))
                    }
                })
            }
            return L
        }
    };
    B.Widget = function() {};
    B.Widget._childConstructors = [];
    B.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: false,
            create: null
        },
        _createWidget: function(F, G) {
            G = B(G || this.defaultElement || this)[0];
            this.element = B(G);
            this.uuid = A++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.options = B.widget.extend({}, this.options, this._getCreateOptions(), F);
            this.bindings = B();
            this.hoverable = B();
            this.focusable = B();
            if (G !== this) {
                B.data(G, this.widgetFullName, this);
                this._on(true, this.element, {
                    remove: function(H) {
                        if (H.target === G) {
                            this.destroy()
                        }
                    }
                });
                this.document = B(G.style ? G.ownerDocument : G.document || G);
                this.window = B(this.document[0].defaultView || this.document[0].parentWindow)
            }
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: B.noop,
        _getCreateEventData: B.noop,
        _create: B.noop,
        _init: B.noop,
        destroy: function() {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(B.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: B.noop,
        widget: function() {
            return this.element
        },
        option: function(I, J) {
            var F = I,
                K, H, G;
            if (arguments.length === 0) {
                return B.widget.extend({}, this.options)
            }
            if (typeof I === "string") {
                F = {};
                K = I.split(".");
                I = K.shift();
                if (K.length) {
                    H = F[I] = B.widget.extend({}, this.options[I]);
                    for (G = 0; G < K.length - 1; G++) {
                        H[K[G]] = H[K[G]] || {};
                        H = H[K[G]]
                    }
                    I = K.pop();
                    if (J === E) {
                        return H[I] === E ? null : H[I]
                    }
                    H[I] = J
                } else {
                    if (J === E) {
                        return this.options[I] === E ? null : this.options[I]
                    }
                    F[I] = J
                }
            }
            this._setOptions(F);
            return this
        },
        _setOptions: function(F) {
            var G;
            for (G in F) {
                this._setOption(G, F[G])
            }
            return this
        },
        _setOption: function(F, G) {
            this.options[F] = G;
            if (F === "disabled") {
                this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!G).attr("aria-disabled", G);
                this.hoverable.removeClass("ui-state-hover");
                this.focusable.removeClass("ui-state-focus")
            }
            return this
        },
        enable: function() {
            return this._setOption("disabled", false)
        },
        disable: function() {
            return this._setOption("disabled", true)
        },
        _on: function(I, H, G) {
            var J, F = this;
            if (typeof I !== "boolean") {
                G = H;
                H = I;
                I = false
            }
            if (!G) {
                G = H;
                H = this.element;
                J = this.widget()
            } else {
                H = J = B(H);
                this.bindings = this.bindings.add(H)
            }
            B.each(G, function(P, O) {
                function M() {
                    if (!I && (F.options.disabled === true || B(this).hasClass("ui-state-disabled"))) {
                        return
                    }
                    return (typeof O === "string" ? F[O] : O).apply(F, arguments)
                }
                if (typeof O !== "string") {
                    M.guid = O.guid = O.guid || M.guid || B.guid++
                }
                var N = P.match(/^(\w+)\s*(.*)$/),
                    L = N[1] + F.eventNamespace,
                    K = N[2];
                if (K) {
                    J.delegate(K, L, M)
                } else {
                    H.bind(L, M)
                }
            })
        },
        _off: function(G, F) {
            F = (F || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            G.unbind(F).undelegate(F)
        },
        _delay: function(I, H) {
            function G() {
                return (typeof I === "string" ? F[I] : I).apply(F, arguments)
            }
            var F = this;
            return setTimeout(G, H || 0)
        },
        _hoverable: function(F) {
            this.hoverable = this.hoverable.add(F);
            this._on(F, {
                mouseenter: function(G) {
                    B(G.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(G) {
                    B(G.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(F) {
            this.focusable = this.focusable.add(F);
            this._on(F, {
                focusin: function(G) {
                    B(G.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(G) {
                    B(G.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(F, G, H) {
            var K, J, I = this.options[F];
            H = H || {};
            G = B.Event(G);
            G.type = (F === this.widgetEventPrefix ? F : this.widgetEventPrefix + F).toLowerCase();
            G.target = this.element[0];
            J = G.originalEvent;
            if (J) {
                for (K in J) {
                    if (!(K in G)) {
                        G[K] = J[K]
                    }
                }
            }
            this.element.trigger(G, H);
            return !(B.isFunction(I) && I.apply(this.element[0], [G].concat(H)) === false || G.isDefaultPrevented())
        }
    };
    B.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(G, F) {
        B.Widget.prototype["_" + G] = function(J, I, L) {
            if (typeof I === "string") {
                I = {
                    effect: I
                }
            }
            var K, H = !I ? G : I === true || typeof I === "number" ? F : I.effect || F;
            I = I || {};
            if (typeof I === "number") {
                I = {
                    duration: I
                }
            }
            K = !B.isEmptyObject(I);
            I.complete = L;
            if (I.delay) {
                J.delay(I.delay)
            }
            if (K && B.effects && B.effects.effect[H]) {
                J[G](I)
            } else {
                if (H !== G && J[H]) {
                    J[H](I.duration, I.easing, L)
                } else {
                    J.queue(function(M) {
                        B(this)[G]();
                        if (L) {
                            L.call(J[0])
                        }
                        M()
                    })
                }
            }
        }
    })
})(jQuery);
(function(B, C) {
    var A = false;
    B(document).mouseup(function() {
        A = false
    });
    B.widget("ui.mouse", {
        version: "1.10.3",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var D = this;
            this.element.bind("mousedown." + this.widgetName, function(E) {
                return D._mouseDown(E)
            }).bind("click." + this.widgetName, function(E) {
                if (true === B.data(E.target, D.widgetName + ".preventClickEvent")) {
                    B.removeData(E.target, D.widgetName + ".preventClickEvent");
                    E.stopImmediatePropagation();
                    return false
                }
            });
            this.started = false
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName);
            if (this._mouseMoveDelegate) {
                B(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            }
        },
        _mouseDown: function(F) {
            if (A) {
                return
            }(this._mouseStarted && this._mouseUp(F));
            this._mouseDownEvent = F;
            var E = this,
                G = (F.which === 1),
                D = (typeof this.options.cancel === "string" && F.target.nodeName ? B(F.target).closest(this.options.cancel).length : false);
            if (!G || D || !this._mouseCapture(F)) {
                return true
            }
            this.mouseDelayMet = !this.options.delay;
            if (!this.mouseDelayMet) {
                this._mouseDelayTimer = setTimeout(function() {
                    E.mouseDelayMet = true
                }, this.options.delay)
            }
            if (this._mouseDistanceMet(F) && this._mouseDelayMet(F)) {
                this._mouseStarted = (this._mouseStart(F) !== false);
                if (!this._mouseStarted) {
                    F.preventDefault();
                    return true
                }
            }
            if (true === B.data(F.target, this.widgetName + ".preventClickEvent")) {
                B.removeData(F.target, this.widgetName + ".preventClickEvent")
            }
            this._mouseMoveDelegate = function(H) {
                return E._mouseMove(H)
            };
            this._mouseUpDelegate = function(H) {
                return E._mouseUp(H)
            };
            B(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
            F.preventDefault();
            A = true;
            return true
        },
        _mouseMove: function(D) {
            if (B.ui.ie && (!document.documentMode || document.documentMode < 9) && !D.button) {
                return this._mouseUp(D)
            }
            if (this._mouseStarted) {
                this._mouseDrag(D);
                return D.preventDefault()
            }
            if (this._mouseDistanceMet(D) && this._mouseDelayMet(D)) {
                this._mouseStarted = (this._mouseStart(this._mouseDownEvent, D) !== false);
                (this._mouseStarted ? this._mouseDrag(D) : this._mouseUp(D))
            }
            return !this._mouseStarted
        },
        _mouseUp: function(D) {
            B(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            if (this._mouseStarted) {
                this._mouseStarted = false;
                if (D.target === this._mouseDownEvent.target) {
                    B.data(D.target, this.widgetName + ".preventClickEvent", true)
                }
                this._mouseStop(D)
            }
            return false
        },
        _mouseDistanceMet: function(D) {
            return (Math.max(Math.abs(this._mouseDownEvent.pageX - D.pageX), Math.abs(this._mouseDownEvent.pageY - D.pageY)) >= this.options.distance)
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return true
        }
    })
})(jQuery);
(function(E, C) {
    E.ui = E.ui || {};
    var J, K = Math.max,
        O = Math.abs,
        M = Math.round,
        D = /left|center|right/,
        H = /top|center|bottom/,
        A = /[\+\-]\d+(\.[\d]+)?%?/,
        L = /^\w+/,
        B = /%$/,
        G = E.fn.position;

    function N(R, Q, P) {
        return [parseFloat(R[0]) * (B.test(R[0]) ? Q / 100 : 1), parseFloat(R[1]) * (B.test(R[1]) ? P / 100 : 1)]
    }

    function I(P, Q) {
        return parseInt(E.css(P, Q), 10) || 0
    }

    function F(Q) {
        var P = Q[0];
        if (P.nodeType === 9) {
            return {
                width: Q.width(),
                height: Q.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            }
        }
        if (E.isWindow(P)) {
            return {
                width: Q.width(),
                height: Q.height(),
                offset: {
                    top: Q.scrollTop(),
                    left: Q.scrollLeft()
                }
            }
        }
        if (P.preventDefault) {
            return {
                width: 0,
                height: 0,
                offset: {
                    top: P.pageY,
                    left: P.pageX
                }
            }
        }
        return {
            width: Q.outerWidth(),
            height: Q.outerHeight(),
            offset: Q.offset()
        }
    }
    E.position = {
        scrollbarWidth: function() {
            if (J !== C) {
                return J
            }
            var Q, P, S = E("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                R = S.children()[0];
            E("body").append(S);
            Q = R.offsetWidth;
            S.css("overflow", "scroll");
            P = R.offsetWidth;
            if (Q === P) {
                P = S[0].clientWidth
            }
            S.remove();
            return (J = Q - P)
        },
        getScrollInfo: function(T) {
            var S = T.isWindow ? "" : T.element.css("overflow-x"),
                R = T.isWindow ? "" : T.element.css("overflow-y"),
                Q = S === "scroll" || (S === "auto" && T.width < T.element[0].scrollWidth),
                P = R === "scroll" || (R === "auto" && T.height < T.element[0].scrollHeight);
            return {
                width: P ? E.position.scrollbarWidth() : 0,
                height: Q ? E.position.scrollbarWidth() : 0
            }
        },
        getWithinInfo: function(Q) {
            var R = E(Q || window),
                P = E.isWindow(R[0]);
            return {
                element: R,
                isWindow: P,
                offset: R.offset() || {
                    left: 0,
                    top: 0
                },
                scrollLeft: R.scrollLeft(),
                scrollTop: R.scrollTop(),
                width: P ? R.width() : R.outerWidth(),
                height: P ? R.height() : R.outerHeight()
            }
        }
    };
    E.fn.position = function(Z) {
        if (!Z || !Z.of) {
            return G.apply(this, arguments)
        }
        Z = E.extend({}, Z);
        var a, W, U, Y, T, P, V = E(Z.of),
            S = E.position.getWithinInfo(Z.within),
            Q = E.position.getScrollInfo(S),
            X = (Z.collision || "flip").split(" "),
            R = {};
        P = F(V);
        if (V[0].preventDefault) {
            Z.at = "left top"
        }
        W = P.width;
        U = P.height;
        Y = P.offset;
        T = E.extend({}, Y);
        E.each(["my", "at"], function() {
            var d = (Z[this] || "").split(" "),
                c, b;
            if (d.length === 1) {
                d = D.test(d[0]) ? d.concat(["center"]) : H.test(d[0]) ? ["center"].concat(d) : ["center", "center"]
            }
            d[0] = D.test(d[0]) ? d[0] : "center";
            d[1] = H.test(d[1]) ? d[1] : "center";
            c = A.exec(d[0]);
            b = A.exec(d[1]);
            R[this] = [c ? c[0] : 0, b ? b[0] : 0];
            Z[this] = [L.exec(d[0])[0], L.exec(d[1])[0]]
        });
        if (X.length === 1) {
            X[1] = X[0]
        }
        if (Z.at[0] === "right") {
            T.left += W
        } else {
            if (Z.at[0] === "center") {
                T.left += W / 2
            }
        }
        if (Z.at[1] === "bottom") {
            T.top += U
        } else {
            if (Z.at[1] === "center") {
                T.top += U / 2
            }
        }
        a = N(R.at, W, U);
        T.left += a[0];
        T.top += a[1];
        return this.each(function() {
            var c, l, e = E(this),
                g = e.outerWidth(),
                d = e.outerHeight(),
                f = I(this, "marginLeft"),
                b = I(this, "marginTop"),
                k = g + f + I(this, "marginRight") + Q.width,
                j = d + b + I(this, "marginBottom") + Q.height,
                h = E.extend({}, T),
                i = N(R.my, e.outerWidth(), e.outerHeight());
            if (Z.my[0] === "right") {
                h.left -= g
            } else {
                if (Z.my[0] === "center") {
                    h.left -= g / 2
                }
            }
            if (Z.my[1] === "bottom") {
                h.top -= d
            } else {
                if (Z.my[1] === "center") {
                    h.top -= d / 2
                }
            }
            h.left += i[0];
            h.top += i[1];
            if (!E.support.offsetFractions) {
                h.left = M(h.left);
                h.top = M(h.top)
            }
            c = {
                marginLeft: f,
                marginTop: b
            };
            E.each(["left", "top"], function(n, m) {
                if (E.ui.position[X[n]]) {
                    E.ui.position[X[n]][m](h, {
                        targetWidth: W,
                        targetHeight: U,
                        elemWidth: g,
                        elemHeight: d,
                        collisionPosition: c,
                        collisionWidth: k,
                        collisionHeight: j,
                        offset: [a[0] + i[0], a[1] + i[1]],
                        my: Z.my,
                        at: Z.at,
                        within: S,
                        elem: e
                    })
                }
            });
            if (Z.using) {
                l = function(p) {
                    var r = Y.left - h.left,
                        o = r + W - g,
                        q = Y.top - h.top,
                        n = q + U - d,
                        m = {
                            target: {
                                element: V,
                                left: Y.left,
                                top: Y.top,
                                width: W,
                                height: U
                            },
                            element: {
                                element: e,
                                left: h.left,
                                top: h.top,
                                width: g,
                                height: d
                            },
                            horizontal: o < 0 ? "left" : r > 0 ? "right" : "center",
                            vertical: n < 0 ? "top" : q > 0 ? "bottom" : "middle"
                        };
                    if (W < g && O(r + o) < W) {
                        m.horizontal = "center"
                    }
                    if (U < d && O(q + n) < U) {
                        m.vertical = "middle"
                    }
                    if (K(O(r), O(o)) > K(O(q), O(n))) {
                        m.important = "horizontal"
                    } else {
                        m.important = "vertical"
                    }
                    Z.using.call(this, p, m)
                }
            }
            e.offset(E.extend(h, {
                using: l
            }))
        })
    };
    E.ui.position = {
        fit: {
            left: function(T, S) {
                var R = S.within,
                    V = R.isWindow ? R.scrollLeft : R.offset.left,
                    X = R.width,
                    U = T.left - S.collisionPosition.marginLeft,
                    W = V - U,
                    Q = U + S.collisionWidth - X - V,
                    P;
                if (S.collisionWidth > X) {
                    if (W > 0 && Q <= 0) {
                        P = T.left + W + S.collisionWidth - X - V;
                        T.left += W - P
                    } else {
                        if (Q > 0 && W <= 0) {
                            T.left = V
                        } else {
                            if (W > Q) {
                                T.left = V + X - S.collisionWidth
                            } else {
                                T.left = V
                            }
                        }
                    }
                } else {
                    if (W > 0) {
                        T.left += W
                    } else {
                        if (Q > 0) {
                            T.left -= Q
                        } else {
                            T.left = K(T.left - U, T.left)
                        }
                    }
                }
            },
            top: function(S, R) {
                var Q = R.within,
                    W = Q.isWindow ? Q.scrollTop : Q.offset.top,
                    X = R.within.height,
                    U = S.top - R.collisionPosition.marginTop,
                    V = W - U,
                    T = U + R.collisionHeight - X - W,
                    P;
                if (R.collisionHeight > X) {
                    if (V > 0 && T <= 0) {
                        P = S.top + V + R.collisionHeight - X - W;
                        S.top += V - P
                    } else {
                        if (T > 0 && V <= 0) {
                            S.top = W
                        } else {
                            if (V > T) {
                                S.top = W + X - R.collisionHeight
                            } else {
                                S.top = W
                            }
                        }
                    }
                } else {
                    if (V > 0) {
                        S.top += V
                    } else {
                        if (T > 0) {
                            S.top -= T
                        } else {
                            S.top = K(S.top - U, S.top)
                        }
                    }
                }
            }
        },
        flip: {
            left: function(V, U) {
                var T = U.within,
                    Z = T.offset.left + T.scrollLeft,
                    c = T.width,
                    R = T.isWindow ? T.scrollLeft : T.offset.left,
                    W = V.left - U.collisionPosition.marginLeft,
                    a = W - R,
                    Q = W + U.collisionWidth - c - R,
                    Y = U.my[0] === "left" ? -U.elemWidth : U.my[0] === "right" ? U.elemWidth : 0,
                    b = U.at[0] === "left" ? U.targetWidth : U.at[0] === "right" ? -U.targetWidth : 0,
                    S = -2 * U.offset[0],
                    P, X;
                if (a < 0) {
                    P = V.left + Y + b + S + U.collisionWidth - c - Z;
                    if (P < 0 || P < O(a)) {
                        V.left += Y + b + S
                    }
                } else {
                    if (Q > 0) {
                        X = V.left - U.collisionPosition.marginLeft + Y + b + S - R;
                        if (X > 0 || O(X) < Q) {
                            V.left += Y + b + S
                        }
                    }
                }
            },
            top: function(U, T) {
                var S = T.within,
                    b = S.offset.top + S.scrollTop,
                    c = S.height,
                    P = S.isWindow ? S.scrollTop : S.offset.top,
                    W = U.top - T.collisionPosition.marginTop,
                    Y = W - P,
                    V = W + T.collisionHeight - c - P,
                    Z = T.my[1] === "top",
                    X = Z ? -T.elemHeight : T.my[1] === "bottom" ? T.elemHeight : 0,
                    d = T.at[1] === "top" ? T.targetHeight : T.at[1] === "bottom" ? -T.targetHeight : 0,
                    R = -2 * T.offset[1],
                    a, Q;
                if (Y < 0) {
                    Q = U.top + X + d + R + T.collisionHeight - c - b;
                    if ((U.top + X + d + R) > Y && (Q < 0 || Q < O(Y))) {
                        U.top += X + d + R
                    }
                } else {
                    if (V > 0) {
                        a = U.top - T.collisionPosition.marginTop + X + d + R - P;
                        if ((U.top + X + d + R) > V && (a > 0 || O(a) < V)) {
                            U.top += X + d + R
                        }
                    }
                }
            }
        },
        flipfit: {
            left: function() {
                E.ui.position.flip.left.apply(this, arguments);
                E.ui.position.fit.left.apply(this, arguments)
            },
            top: function() {
                E.ui.position.flip.top.apply(this, arguments);
                E.ui.position.fit.top.apply(this, arguments)
            }
        }
    };
    (function() {
        var T, V, Q, S, R, P = document.getElementsByTagName("body")[0],
            U = document.createElement("div");
        T = document.createElement(P ? "div" : "body");
        Q = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        };
        if (P) {
            E.extend(Q, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            })
        }
        for (R in Q) {
            T.style[R] = Q[R]
        }
        T.appendChild(U);
        V = P || document.documentElement;
        V.insertBefore(T, V.firstChild);
        U.style.cssText = "position: absolute; left: 10.7432222px;";
        S = E(U).offset().left;
        E.support.offsetFractions = S > 10 && S < 11;
        T.innerHTML = "";
        V.removeChild(T)
    })()
}(jQuery));
(function(A, B) {
    A.widget("ui.draggable", A.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "drag",
        options: {
            addClasses: true,
            appendTo: "parent",
            axis: false,
            connectToSortable: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            grid: false,
            handle: false,
            helper: "original",
            iframeFix: false,
            opacity: false,
            refreshPositions: false,
            revert: false,
            revertDuration: 500,
            scope: "default",
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: false,
            snapMode: "both",
            snapTolerance: 20,
            stack: false,
            zIndex: false,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            if (this.options.helper === "original" && !(/^(?:r|a|f)/).test(this.element.css("position"))) {
                this.element[0].style.position = "relative"
            }
            if (this.options.addClasses) {
                this.element.addClass("ui-draggable")
            }
            if (this.options.disabled) {
                this.element.addClass("ui-draggable-disabled")
            }
            this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
            this._mouseDestroy()
        },
        _mouseCapture: function(C) {
            var D = this.options;
            if (this.helper || D.disabled || A(C.target).closest(".ui-resizable-handle").length > 0) {
                return false
            }
            this.handle = this._getHandle(C);
            if (!this.handle) {
                return false
            }
            A(D.iframeFix === true ? "iframe" : D.iframeFix).each(function() {
                A("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1000
                }).css(A(this).offset()).appendTo("body")
            });
            return true
        },
        _mouseStart: function(C) {
            var D = this.options;
            this.helper = this._createHelper(C);
            this.helper.addClass("ui-draggable-dragging");
            this._cacheHelperProportions();
            if (A.ui.ddmanager) {
                A.ui.ddmanager.current = this
            }
            this._cacheMargins();
            this.cssPosition = this.helper.css("position");
            this.scrollParent = this.helper.scrollParent();
            this.offsetParent = this.helper.offsetParent();
            this.offsetParentCssPosition = this.offsetParent.css("position");
            this.offset = this.positionAbs = this.element.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };
            this.offset.scroll = false;
            A.extend(this.offset, {
                click: {
                    left: C.pageX - this.offset.left,
                    top: C.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            });
            this.originalPosition = this.position = this._generatePosition(C);
            this.originalPageX = C.pageX;
            this.originalPageY = C.pageY;
            (D.cursorAt && this._adjustOffsetFromHelper(D.cursorAt));
            this._setContainment();
            if (this._trigger("start", C) === false) {
                this._clear();
                return false
            }
            this._cacheHelperProportions();
            if (A.ui.ddmanager && !D.dropBehaviour) {
                A.ui.ddmanager.prepareOffsets(this, C)
            }
            this._mouseDrag(C, true);
            if (A.ui.ddmanager) {
                A.ui.ddmanager.dragStart(this, C)
            }
            return true
        },
        _mouseDrag: function(C, E) {
            if (this.offsetParentCssPosition === "fixed") {
                this.offset.parent = this._getParentOffset()
            }
            this.position = this._generatePosition(C);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!E) {
                var D = this._uiHash();
                if (this._trigger("drag", C, D) === false) {
                    this._mouseUp({});
                    return false
                }
                this.position = D.position
            }
            if (!this.options.axis || this.options.axis !== "y") {
                this.helper[0].style.left = this.position.left + "px"
            }
            if (!this.options.axis || this.options.axis !== "x") {
                this.helper[0].style.top = this.position.top + "px"
            }
            if (A.ui.ddmanager) {
                A.ui.ddmanager.drag(this, C)
            }
            return false
        },
        _mouseStop: function(D) {
            var C = this,
                E = false;
            if (A.ui.ddmanager && !this.options.dropBehaviour) {
                E = A.ui.ddmanager.drop(this, D)
            }
            if (this.dropped) {
                E = this.dropped;
                this.dropped = false
            }
            if (this.options.helper === "original" && !A.contains(this.element[0].ownerDocument, this.element[0])) {
                return false
            }
            if ((this.options.revert === "invalid" && !E) || (this.options.revert === "valid" && E) || this.options.revert === true || (A.isFunction(this.options.revert) && this.options.revert.call(this.element, E))) {
                A(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    if (C._trigger("stop", D) !== false) {
                        C._clear()
                    }
                })
            } else {
                if (this._trigger("stop", D) !== false) {
                    this._clear()
                }
            }
            return false
        },
        _mouseUp: function(C) {
            A("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            });
            if (A.ui.ddmanager) {
                A.ui.ddmanager.dragStop(this, C)
            }
            return A.ui.mouse.prototype._mouseUp.call(this, C)
        },
        cancel: function() {
            if (this.helper.is(".ui-draggable-dragging")) {
                this._mouseUp({})
            } else {
                this._clear()
            }
            return this
        },
        _getHandle: function(C) {
            return this.options.handle ? !!A(C.target).closest(this.element.find(this.options.handle)).length : true
        },
        _createHelper: function(D) {
            var E = this.options,
                C = A.isFunction(E.helper) ? A(E.helper.apply(this.element[0], [D])) : (E.helper === "clone" ? this.element.clone().removeAttr("id") : this.element);
            if (!C.parents("body").length) {
                C.appendTo((E.appendTo === "parent" ? this.element[0].parentNode : E.appendTo))
            }
            if (C[0] !== this.element[0] && !(/(fixed|absolute)/).test(C.css("position"))) {
                C.css("position", "absolute")
            }
            return C
        },
        _adjustOffsetFromHelper: function(C) {
            if (typeof C === "string") {
                C = C.split(" ")
            }
            if (A.isArray(C)) {
                C = {
                    left: +C[0],
                    top: +C[1] || 0
                }
            }
            if ("left" in C) {
                this.offset.click.left = C.left + this.margins.left
            }
            if ("right" in C) {
                this.offset.click.left = this.helperProportions.width - C.right + this.margins.left
            }
            if ("top" in C) {
                this.offset.click.top = C.top + this.margins.top
            }
            if ("bottom" in C) {
                this.offset.click.top = this.helperProportions.height - C.bottom + this.margins.top
            }
        },
        _getParentOffset: function() {
            var C = this.offsetParent.offset();
            if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && A.contains(this.scrollParent[0], this.offsetParent[0])) {
                C.left += this.scrollParent.scrollLeft();
                C.top += this.scrollParent.scrollTop()
            }
            if ((this.offsetParent[0] === document.body) || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && A.ui.ie)) {
                C = {
                    top: 0,
                    left: 0
                }
            }
            return {
                top: C.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: C.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition === "relative") {
                var C = this.element.position();
                return {
                    top: C.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: C.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            } else {
                return {
                    top: 0,
                    left: 0
                }
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: (parseInt(this.element.css("marginLeft"), 10) || 0),
                top: (parseInt(this.element.css("marginTop"), 10) || 0),
                right: (parseInt(this.element.css("marginRight"), 10) || 0),
                bottom: (parseInt(this.element.css("marginBottom"), 10) || 0)
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var D, F, C, E = this.options;
            if (!E.containment) {
                this.containment = null;
                return
            }
            if (E.containment === "window") {
                this.containment = [A(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, A(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, A(window).scrollLeft() + A(window).width() - this.helperProportions.width - this.margins.left, A(window).scrollTop() + (A(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                return
            }
            if (E.containment === "document") {
                this.containment = [0, 0, A(document).width() - this.helperProportions.width - this.margins.left, (A(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                return
            }
            if (E.containment.constructor === Array) {
                this.containment = E.containment;
                return
            }
            if (E.containment === "parent") {
                E.containment = this.helper[0].parentNode
            }
            F = A(E.containment);
            C = F[0];
            if (!C) {
                return
            }
            D = F.css("overflow") !== "hidden";
            this.containment = [(parseInt(F.css("borderLeftWidth"), 10) || 0) + (parseInt(F.css("paddingLeft"), 10) || 0), (parseInt(F.css("borderTopWidth"), 10) || 0) + (parseInt(F.css("paddingTop"), 10) || 0), (D ? Math.max(C.scrollWidth, C.offsetWidth) : C.offsetWidth) - (parseInt(F.css("borderRightWidth"), 10) || 0) - (parseInt(F.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (D ? Math.max(C.scrollHeight, C.offsetHeight) : C.offsetHeight) - (parseInt(F.css("borderBottomWidth"), 10) || 0) - (parseInt(F.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
            this.relative_container = F
        },
        _convertPositionTo: function(E, F) {
            if (!F) {
                F = this.position
            }
            var D = E === "absolute" ? 1 : -1,
                C = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && A.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent;
            if (!this.offset.scroll) {
                this.offset.scroll = {
                    top: C.scrollTop(),
                    left: C.scrollLeft()
                }
            }
            return {
                top: (F.top + this.offset.relative.top * D + this.offset.parent.top * D - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * D)),
                left: (F.left + this.offset.relative.left * D + this.offset.parent.left * D - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * D))
            }
        },
        _generatePosition: function(D) {
            var C, I, J, F, E = this.options,
                K = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && A.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                H = D.pageX,
                G = D.pageY;
            if (!this.offset.scroll) {
                this.offset.scroll = {
                    top: K.scrollTop(),
                    left: K.scrollLeft()
                }
            }
            if (this.originalPosition) {
                if (this.containment) {
                    if (this.relative_container) {
                        I = this.relative_container.offset();
                        C = [this.containment[0] + I.left, this.containment[1] + I.top, this.containment[2] + I.left, this.containment[3] + I.top]
                    } else {
                        C = this.containment
                    }
                    if (D.pageX - this.offset.click.left < C[0]) {
                        H = C[0] + this.offset.click.left
                    }
                    if (D.pageY - this.offset.click.top < C[1]) {
                        G = C[1] + this.offset.click.top
                    }
                    if (D.pageX - this.offset.click.left > C[2]) {
                        H = C[2] + this.offset.click.left
                    }
                    if (D.pageY - this.offset.click.top > C[3]) {
                        G = C[3] + this.offset.click.top
                    }
                }
                if (E.grid) {
                    J = E.grid[1] ? this.originalPageY + Math.round((G - this.originalPageY) / E.grid[1]) * E.grid[1] : this.originalPageY;
                    G = C ? ((J - this.offset.click.top >= C[1] || J - this.offset.click.top > C[3]) ? J : ((J - this.offset.click.top >= C[1]) ? J - E.grid[1] : J + E.grid[1])) : J;
                    F = E.grid[0] ? this.originalPageX + Math.round((H - this.originalPageX) / E.grid[0]) * E.grid[0] : this.originalPageX;
                    H = C ? ((F - this.offset.click.left >= C[0] || F - this.offset.click.left > C[2]) ? F : ((F - this.offset.click.left >= C[0]) ? F - E.grid[0] : F + E.grid[0])) : F
                }
            }
            return {
                top: (G - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top)),
                left: (H - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left))
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging");
            if (this.helper[0] !== this.element[0] && !this.cancelHelperRemoval) {
                this.helper.remove()
            }
            this.helper = null;
            this.cancelHelperRemoval = false
        },
        _trigger: function(C, D, E) {
            E = E || this._uiHash();
            A.ui.plugin.call(this, C, [D, E]);
            if (C === "drag") {
                this.positionAbs = this._convertPositionTo("absolute")
            }
            return A.Widget.prototype._trigger.call(this, C, D, E)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    });
    A.ui.plugin.add("draggable", "connectToSortable", {
        start: function(D, F) {
            var E = A(this).data("ui-draggable"),
                G = E.options,
                C = A.extend({}, F, {
                    item: E.element
                });
            E.sortables = [];
            A(G.connectToSortable).each(function() {
                var H = A.data(this, "ui-sortable");
                if (H && !H.options.disabled) {
                    E.sortables.push({
                        instance: H,
                        shouldRevert: H.options.revert
                    });
                    H.refreshPositions();
                    H._trigger("activate", D, C)
                }
            })
        },
        stop: function(D, F) {
            var E = A(this).data("ui-draggable"),
                C = A.extend({}, F, {
                    item: E.element
                });
            A.each(E.sortables, function() {
                if (this.instance.isOver) {
                    this.instance.isOver = 0;
                    E.cancelHelperRemoval = true;
                    this.instance.cancelHelperRemoval = false;
                    if (this.shouldRevert) {
                        this.instance.options.revert = this.shouldRevert
                    }
                    this.instance._mouseStop(D);
                    this.instance.options.helper = this.instance.options._helper;
                    if (E.options.helper === "original") {
                        this.instance.currentItem.css({
                            top: "auto",
                            left: "auto"
                        })
                    }
                } else {
                    this.instance.cancelHelperRemoval = false;
                    this.instance._trigger("deactivate", D, C)
                }
            })
        },
        drag: function(D, F) {
            var E = A(this).data("ui-draggable"),
                C = this;
            A.each(E.sortables, function() {
                var G = false,
                    H = this;
                this.instance.positionAbs = E.positionAbs;
                this.instance.helperProportions = E.helperProportions;
                this.instance.offset.click = E.offset.click;
                if (this.instance._intersectsWith(this.instance.containerCache)) {
                    G = true;
                    A.each(E.sortables, function() {
                        this.instance.positionAbs = E.positionAbs;
                        this.instance.helperProportions = E.helperProportions;
                        this.instance.offset.click = E.offset.click;
                        if (this !== H && this.instance._intersectsWith(this.instance.containerCache) && A.contains(H.instance.element[0], this.instance.element[0])) {
                            G = false
                        }
                        return G
                    })
                }
                if (G) {
                    if (!this.instance.isOver) {
                        this.instance.isOver = 1;
                        this.instance.currentItem = A(C).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", true);
                        this.instance.options._helper = this.instance.options.helper;
                        this.instance.options.helper = function() {
                            return F.helper[0]
                        };
                        D.target = this.instance.currentItem[0];
                        this.instance._mouseCapture(D, true);
                        this.instance._mouseStart(D, true, true);
                        this.instance.offset.click.top = E.offset.click.top;
                        this.instance.offset.click.left = E.offset.click.left;
                        this.instance.offset.parent.left -= E.offset.parent.left - this.instance.offset.parent.left;
                        this.instance.offset.parent.top -= E.offset.parent.top - this.instance.offset.parent.top;
                        E._trigger("toSortable", D);
                        E.dropped = this.instance.element;
                        E.currentItem = E.element;
                        this.instance.fromOutside = E
                    }
                    if (this.instance.currentItem) {
                        this.instance._mouseDrag(D)
                    }
                } else {
                    if (this.instance.isOver) {
                        this.instance.isOver = 0;
                        this.instance.cancelHelperRemoval = true;
                        this.instance.options.revert = false;
                        this.instance._trigger("out", D, this.instance._uiHash(this.instance));
                        this.instance._mouseStop(D, true);
                        this.instance.options.helper = this.instance.options._helper;
                        this.instance.currentItem.remove();
                        if (this.instance.placeholder) {
                            this.instance.placeholder.remove()
                        }
                        E._trigger("fromSortable", D);
                        E.dropped = false
                    }
                }
            })
        }
    });
    A.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var C = A("body"),
                D = A(this).data("ui-draggable").options;
            if (C.css("cursor")) {
                D._cursor = C.css("cursor")
            }
            C.css("cursor", D.cursor)
        },
        stop: function() {
            var C = A(this).data("ui-draggable").options;
            if (C._cursor) {
                A("body").css("cursor", C._cursor)
            }
        }
    });
    A.ui.plugin.add("draggable", "opacity", {
        start: function(D, E) {
            var C = A(E.helper),
                F = A(this).data("ui-draggable").options;
            if (C.css("opacity")) {
                F._opacity = C.css("opacity")
            }
            C.css("opacity", F.opacity)
        },
        stop: function(C, D) {
            var E = A(this).data("ui-draggable").options;
            if (E._opacity) {
                A(D.helper).css("opacity", E._opacity)
            }
        }
    });
    A.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var C = A(this).data("ui-draggable");
            if (C.scrollParent[0] !== document && C.scrollParent[0].tagName !== "HTML") {
                C.overflowOffset = C.scrollParent.offset()
            }
        },
        drag: function(E) {
            var D = A(this).data("ui-draggable"),
                F = D.options,
                C = false;
            if (D.scrollParent[0] !== document && D.scrollParent[0].tagName !== "HTML") {
                if (!F.axis || F.axis !== "x") {
                    if ((D.overflowOffset.top + D.scrollParent[0].offsetHeight) - E.pageY < F.scrollSensitivity) {
                        D.scrollParent[0].scrollTop = C = D.scrollParent[0].scrollTop + F.scrollSpeed
                    } else {
                        if (E.pageY - D.overflowOffset.top < F.scrollSensitivity) {
                            D.scrollParent[0].scrollTop = C = D.scrollParent[0].scrollTop - F.scrollSpeed
                        }
                    }
                }
                if (!F.axis || F.axis !== "y") {
                    if ((D.overflowOffset.left + D.scrollParent[0].offsetWidth) - E.pageX < F.scrollSensitivity) {
                        D.scrollParent[0].scrollLeft = C = D.scrollParent[0].scrollLeft + F.scrollSpeed
                    } else {
                        if (E.pageX - D.overflowOffset.left < F.scrollSensitivity) {
                            D.scrollParent[0].scrollLeft = C = D.scrollParent[0].scrollLeft - F.scrollSpeed
                        }
                    }
                }
            } else {
                if (!F.axis || F.axis !== "x") {
                    if (E.pageY - A(document).scrollTop() < F.scrollSensitivity) {
                        C = A(document).scrollTop(A(document).scrollTop() - F.scrollSpeed)
                    } else {
                        if (A(window).height() - (E.pageY - A(document).scrollTop()) < F.scrollSensitivity) {
                            C = A(document).scrollTop(A(document).scrollTop() + F.scrollSpeed)
                        }
                    }
                }
                if (!F.axis || F.axis !== "y") {
                    if (E.pageX - A(document).scrollLeft() < F.scrollSensitivity) {
                        C = A(document).scrollLeft(A(document).scrollLeft() - F.scrollSpeed)
                    } else {
                        if (A(window).width() - (E.pageX - A(document).scrollLeft()) < F.scrollSensitivity) {
                            C = A(document).scrollLeft(A(document).scrollLeft() + F.scrollSpeed)
                        }
                    }
                }
            }
            if (C !== false && A.ui.ddmanager && !F.dropBehaviour) {
                A.ui.ddmanager.prepareOffsets(D, E)
            }
        }
    });
    A.ui.plugin.add("draggable", "snap", {
        start: function() {
            var C = A(this).data("ui-draggable"),
                D = C.options;
            C.snapElements = [];
            A(D.snap.constructor !== String ? (D.snap.items || ":data(ui-draggable)") : D.snap).each(function() {
                var F = A(this),
                    E = F.offset();
                if (this !== C.element[0]) {
                    C.snapElements.push({
                        item: this,
                        width: F.outerWidth(),
                        height: F.outerHeight(),
                        top: E.top,
                        left: E.left
                    })
                }
            })
        },
        drag: function(O, L) {
            var C, T, H, I, N, K, J, U, P, G, F = A(this).data("ui-draggable"),
                M = F.options,
                S = M.snapTolerance,
                R = L.offset.left,
                Q = R + F.helperProportions.width,
                E = L.offset.top,
                D = E + F.helperProportions.height;
            for (P = F.snapElements.length - 1; P >= 0; P--) {
                N = F.snapElements[P].left;
                K = N + F.snapElements[P].width;
                J = F.snapElements[P].top;
                U = J + F.snapElements[P].height;
                if (Q < N - S || R > K + S || D < J - S || E > U + S || !A.contains(F.snapElements[P].item.ownerDocument, F.snapElements[P].item)) {
                    if (F.snapElements[P].snapping) {
                        (F.options.snap.release && F.options.snap.release.call(F.element, O, A.extend(F._uiHash(), {
                            snapItem: F.snapElements[P].item
                        })))
                    }
                    F.snapElements[P].snapping = false;
                    continue
                }
                if (M.snapMode !== "inner") {
                    C = Math.abs(J - D) <= S;
                    T = Math.abs(U - E) <= S;
                    H = Math.abs(N - Q) <= S;
                    I = Math.abs(K - R) <= S;
                    if (C) {
                        L.position.top = F._convertPositionTo("relative", {
                            top: J - F.helperProportions.height,
                            left: 0
                        }).top - F.margins.top
                    }
                    if (T) {
                        L.position.top = F._convertPositionTo("relative", {
                            top: U,
                            left: 0
                        }).top - F.margins.top
                    }
                    if (H) {
                        L.position.left = F._convertPositionTo("relative", {
                            top: 0,
                            left: N - F.helperProportions.width
                        }).left - F.margins.left
                    }
                    if (I) {
                        L.position.left = F._convertPositionTo("relative", {
                            top: 0,
                            left: K
                        }).left - F.margins.left
                    }
                }
                G = (C || T || H || I);
                if (M.snapMode !== "outer") {
                    C = Math.abs(J - E) <= S;
                    T = Math.abs(U - D) <= S;
                    H = Math.abs(N - R) <= S;
                    I = Math.abs(K - Q) <= S;
                    if (C) {
                        L.position.top = F._convertPositionTo("relative", {
                            top: J,
                            left: 0
                        }).top - F.margins.top
                    }
                    if (T) {
                        L.position.top = F._convertPositionTo("relative", {
                            top: U - F.helperProportions.height,
                            left: 0
                        }).top - F.margins.top
                    }
                    if (H) {
                        L.position.left = F._convertPositionTo("relative", {
                            top: 0,
                            left: N
                        }).left - F.margins.left
                    }
                    if (I) {
                        L.position.left = F._convertPositionTo("relative", {
                            top: 0,
                            left: K - F.helperProportions.width
                        }).left - F.margins.left
                    }
                }
                if (!F.snapElements[P].snapping && (C || T || H || I || G)) {
                    (F.options.snap.snap && F.options.snap.snap.call(F.element, O, A.extend(F._uiHash(), {
                        snapItem: F.snapElements[P].item
                    })))
                }
                F.snapElements[P].snapping = (C || T || H || I || G)
            }
        }
    });
    A.ui.plugin.add("draggable", "stack", {
        start: function() {
            var C, E = this.data("ui-draggable").options,
                D = A.makeArray(A(E.stack)).sort(function(G, F) {
                    return (parseInt(A(G).css("zIndex"), 10) || 0) - (parseInt(A(F).css("zIndex"), 10) || 0)
                });
            if (!D.length) {
                return
            }
            C = parseInt(A(D[0]).css("zIndex"), 10) || 0;
            A(D).each(function(F) {
                A(this).css("zIndex", C + F)
            });
            this.css("zIndex", (C + D.length))
        }
    });
    A.ui.plugin.add("draggable", "zIndex", {
        start: function(D, E) {
            var C = A(E.helper),
                F = A(this).data("ui-draggable").options;
            if (C.css("zIndex")) {
                F._zIndex = C.css("zIndex")
            }
            C.css("zIndex", F.zIndex)
        },
        stop: function(C, D) {
            var E = A(this).data("ui-draggable").options;
            if (E._zIndex) {
                A(D.helper).css("zIndex", E._zIndex)
            }
        }
    })
})(jQuery);
(function(B, C) {
    function A(E, D, F) {
        return (E > D) && (E < (D + F))
    }
    B.widget("ui.droppable", {
        version: "1.10.3",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: false,
            addClasses: true,
            greedy: false,
            hoverClass: false,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var E = this.options,
                D = E.accept;
            this.isover = false;
            this.isout = true;
            this.accept = B.isFunction(D) ? D : function(F) {
                return F.is(D)
            };
            this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            };
            B.ui.ddmanager.droppables[E.scope] = B.ui.ddmanager.droppables[E.scope] || [];
            B.ui.ddmanager.droppables[E.scope].push(this);
            (E.addClasses && this.element.addClass("ui-droppable"))
        },
        _destroy: function() {
            var E = 0,
                D = B.ui.ddmanager.droppables[this.options.scope];
            for (; E < D.length; E++) {
                if (D[E] === this) {
                    D.splice(E, 1)
                }
            }
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(D, E) {
            if (D === "accept") {
                this.accept = B.isFunction(E) ? E : function(F) {
                    return F.is(E)
                }
            }
            B.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(E) {
            var D = B.ui.ddmanager.current;
            if (this.options.activeClass) {
                this.element.addClass(this.options.activeClass)
            }
            if (D) {
                this._trigger("activate", E, this.ui(D))
            }
        },
        _deactivate: function(E) {
            var D = B.ui.ddmanager.current;
            if (this.options.activeClass) {
                this.element.removeClass(this.options.activeClass)
            }
            if (D) {
                this._trigger("deactivate", E, this.ui(D))
            }
        },
        _over: function(E) {
            var D = B.ui.ddmanager.current;
            if (!D || (D.currentItem || D.element)[0] === this.element[0]) {
                return
            }
            if (this.accept.call(this.element[0], (D.currentItem || D.element))) {
                if (this.options.hoverClass) {
                    this.element.addClass(this.options.hoverClass)
                }
                this._trigger("over", E, this.ui(D))
            }
        },
        _out: function(E) {
            var D = B.ui.ddmanager.current;
            if (!D || (D.currentItem || D.element)[0] === this.element[0]) {
                return
            }
            if (this.accept.call(this.element[0], (D.currentItem || D.element))) {
                if (this.options.hoverClass) {
                    this.element.removeClass(this.options.hoverClass)
                }
                this._trigger("out", E, this.ui(D))
            }
        },
        _drop: function(E, F) {
            var D = F || B.ui.ddmanager.current,
                G = false;
            if (!D || (D.currentItem || D.element)[0] === this.element[0]) {
                return false
            }
            this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var H = B.data(this, "ui-droppable");
                if (H.options.greedy && !H.options.disabled && H.options.scope === D.options.scope && H.accept.call(H.element[0], (D.currentItem || D.element)) && B.ui.intersect(D, B.extend(H, {
                        offset: H.element.offset()
                    }), H.options.tolerance)) {
                    G = true;
                    return false
                }
            });
            if (G) {
                return false
            }
            if (this.accept.call(this.element[0], (D.currentItem || D.element))) {
                if (this.options.activeClass) {
                    this.element.removeClass(this.options.activeClass)
                }
                if (this.options.hoverClass) {
                    this.element.removeClass(this.options.hoverClass)
                }
                this._trigger("drop", E, this.ui(D));
                return this.element
            }
            return false
        },
        ui: function(D) {
            return {
                draggable: (D.currentItem || D.element),
                helper: D.helper,
                position: D.position,
                offset: D.positionAbs
            }
        }
    });
    B.ui.intersect = function(P, J, N) {
        if (!J.offset) {
            return false
        }
        var H, I, F = (P.positionAbs || P.position.absolute).left,
            E = F + P.helperProportions.width,
            M = (P.positionAbs || P.position.absolute).top,
            L = M + P.helperProportions.height,
            G = J.offset.left,
            D = G + J.proportions.width,
            O = J.offset.top,
            K = O + J.proportions.height;
        switch (N) {
            case "fit":
                return (G <= F && E <= D && O <= M && L <= K);
            case "intersect":
                return (G < F + (P.helperProportions.width / 2) && E - (P.helperProportions.width / 2) < D && O < M + (P.helperProportions.height / 2) && L - (P.helperProportions.height / 2) < K);
            case "pointer":
                H = ((P.positionAbs || P.position.absolute).left + (P.clickOffset || P.offset.click).left);
                I = ((P.positionAbs || P.position.absolute).top + (P.clickOffset || P.offset.click).top);
                return A(I, O, J.proportions.height) && A(H, G, J.proportions.width);
            case "touch":
                return ((M >= O && M <= K) || (L >= O && L <= K) || (M < O && L > K)) && ((F >= G && F <= D) || (E >= G && E <= D) || (F < G && E > D));
            default:
                return false
        }
    };
    B.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(G, I) {
            var F, E, D = B.ui.ddmanager.droppables[G.options.scope] || [],
                H = I ? I.type : null,
                J = (G.currentItem || G.element).find(":data(ui-droppable)").addBack();
            droppablesLoop: for (F = 0; F < D.length; F++) {
                if (D[F].options.disabled || (G && !D[F].accept.call(D[F].element[0], (G.currentItem || G.element)))) {
                    continue
                }
                for (E = 0; E < J.length; E++) {
                    if (J[E] === D[F].element[0]) {
                        D[F].proportions.height = 0;
                        continue droppablesLoop
                    }
                }
                D[F].visible = D[F].element.css("display") !== "none";
                if (!D[F].visible) {
                    continue
                }
                if (H === "mousedown") {
                    D[F]._activate.call(D[F], I)
                }
                D[F].offset = D[F].element.offset();
                D[F].proportions = {
                    width: D[F].element[0].offsetWidth,
                    height: D[F].element[0].offsetHeight
                }
            }
        },
        drop: function(D, E) {
            var F = false;
            B.each((B.ui.ddmanager.droppables[D.options.scope] || []).slice(), function() {
                if (!this.options) {
                    return
                }
                if (!this.options.disabled && this.visible && B.ui.intersect(D, this, this.options.tolerance)) {
                    F = this._drop.call(this, E) || F
                }
                if (!this.options.disabled && this.visible && this.accept.call(this.element[0], (D.currentItem || D.element))) {
                    this.isout = true;
                    this.isover = false;
                    this._deactivate.call(this, E)
                }
            });
            return F
        },
        dragStart: function(D, E) {
            D.element.parentsUntil("body").bind("scroll.droppable", function() {
                if (!D.options.refreshPositions) {
                    B.ui.ddmanager.prepareOffsets(D, E)
                }
            })
        },
        drag: function(D, E) {
            if (D.options.refreshPositions) {
                B.ui.ddmanager.prepareOffsets(D, E)
            }
            B.each(B.ui.ddmanager.droppables[D.options.scope] || [], function() {
                if (this.options.disabled || this.greedyChild || !this.visible) {
                    return
                }
                var I, G, F, H = B.ui.intersect(D, this, this.options.tolerance),
                    J = !H && this.isover ? "isout" : (H && !this.isover ? "isover" : null);
                if (!J) {
                    return
                }
                if (this.options.greedy) {
                    G = this.options.scope;
                    F = this.element.parents(":data(ui-droppable)").filter(function() {
                        return B.data(this, "ui-droppable").options.scope === G
                    });
                    if (F.length) {
                        I = B.data(F[0], "ui-droppable");
                        I.greedyChild = (J === "isover")
                    }
                }
                if (I && J === "isover") {
                    I.isover = false;
                    I.isout = true;
                    I._out.call(I, E)
                }
                this[J] = true;
                this[J === "isout" ? "isover" : "isout"] = false;
                this[J === "isover" ? "_over" : "_out"].call(this, E);
                if (I && J === "isout") {
                    I.isout = false;
                    I.isover = true;
                    I._over.call(I, E)
                }
            })
        },
        dragStop: function(D, E) {
            D.element.parentsUntil("body").unbind("scroll.droppable");
            if (!D.options.refreshPositions) {
                B.ui.ddmanager.prepareOffsets(D, E)
            }
        }
    }
})(jQuery);
(function(C, D) {
    function B(E) {
        return parseInt(E, 10) || 0
    }

    function A(E) {
        return !isNaN(parseInt(E, 10))
    }
    C.widget("ui.resizable", C.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: false,
            animate: false,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: false,
            autoHide: false,
            containment: false,
            ghost: false,
            grid: false,
            handles: "e,s,se",
            helper: false,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _create: function() {
            var K, F, I, G, E, H = this,
                J = this.options;
            this.element.addClass("ui-resizable");
            C.extend(this, {
                _aspectRatio: !!(J.aspectRatio),
                aspectRatio: J.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: J.helper || J.ghost || J.animate ? J.helper || "ui-resizable-helper" : null
            });
            if (this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)) {
                this.element.wrap(C("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                }));
                this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable"));
                this.elementIsWrapper = true;
                this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                });
                this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                });
                this.originalResizeStyle = this.originalElement.css("resize");
                this.originalElement.css("resize", "none");
                this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                }));
                this.originalElement.css({
                    margin: this.originalElement.css("margin")
                });
                this._proportionallyResize()
            }
            this.handles = J.handles || (!C(".ui-resizable-handle", this.element).length ? "e,s,se" : {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            });
            if (this.handles.constructor === String) {
                if (this.handles === "all") {
                    this.handles = "n,e,s,w,se,sw,ne,nw"
                }
                K = this.handles.split(",");
                this.handles = {};
                for (F = 0; F < K.length; F++) {
                    I = C.trim(K[F]);
                    E = "ui-resizable-" + I;
                    G = C("<div class='ui-resizable-handle " + E + "'></div>");
                    G.css({
                        zIndex: J.zIndex
                    });
                    if ("se" === I) {
                        G.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
                    }
                    this.handles[I] = ".ui-resizable-" + I;
                    this.element.append(G)
                }
            }
            this._renderAxis = function(P) {
                var M, N, L, O;
                P = P || this.element;
                for (M in this.handles) {
                    if (this.handles[M].constructor === String) {
                        this.handles[M] = C(this.handles[M], this.element).show()
                    }
                    if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                        N = C(this.handles[M], this.element);
                        O = /sw|ne|nw|se|n|s/.test(M) ? N.outerHeight() : N.outerWidth();
                        L = ["padding", /ne|nw|n/.test(M) ? "Top" : /se|sw|s/.test(M) ? "Bottom" : /^e$/.test(M) ? "Right" : "Left"].join("");
                        P.css(L, O);
                        this._proportionallyResize()
                    }
                    if (!C(this.handles[M]).length) {
                        continue
                    }
                }
            };
            this._renderAxis(this.element);
            this._handles = C(".ui-resizable-handle", this.element).disableSelection();
            this._handles.mouseover(function() {
                if (!H.resizing) {
                    if (this.className) {
                        G = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
                    }
                    H.axis = G && G[1] ? G[1] : "se"
                }
            });
            if (J.autoHide) {
                this._handles.hide();
                C(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                    if (J.disabled) {
                        return
                    }
                    C(this).removeClass("ui-resizable-autohide");
                    H._handles.show()
                }).mouseleave(function() {
                    if (J.disabled) {
                        return
                    }
                    if (!H.resizing) {
                        C(this).addClass("ui-resizable-autohide");
                        H._handles.hide()
                    }
                })
            }
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var F, E = function(G) {
                C(G).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            if (this.elementIsWrapper) {
                E(this.element);
                F = this.element;
                this.originalElement.css({
                    position: F.css("position"),
                    width: F.outerWidth(),
                    height: F.outerHeight(),
                    top: F.css("top"),
                    left: F.css("left")
                }).insertAfter(F);
                F.remove()
            }
            this.originalElement.css("resize", this.originalResizeStyle);
            E(this.originalElement);
            return this
        },
        _mouseCapture: function(G) {
            var F, H, E = false;
            for (F in this.handles) {
                H = C(this.handles[F])[0];
                if (H === G.target || C.contains(H, G.target)) {
                    E = true
                }
            }
            return !this.options.disabled && E
        },
        _mouseStart: function(G) {
            var K, H, J, I = this.options,
                F = this.element.position(),
                E = this.element;
            this.resizing = true;
            if ((/absolute/).test(E.css("position"))) {
                E.css({
                    position: "absolute",
                    top: E.css("top"),
                    left: E.css("left")
                })
            } else {
                if (E.is(".ui-draggable")) {
                    E.css({
                        position: "absolute",
                        top: F.top,
                        left: F.left
                    })
                }
            }
            this._renderProxy();
            K = B(this.helper.css("left"));
            H = B(this.helper.css("top"));
            if (I.containment) {
                K += C(I.containment).scrollLeft() || 0;
                H += C(I.containment).scrollTop() || 0
            }
            this.offset = this.helper.offset();
            this.position = {
                left: K,
                top: H
            };
            this.size = this._helper ? {
                width: E.outerWidth(),
                height: E.outerHeight()
            } : {
                width: E.width(),
                height: E.height()
            };
            this.originalSize = this._helper ? {
                width: E.outerWidth(),
                height: E.outerHeight()
            } : {
                width: E.width(),
                height: E.height()
            };
            this.originalPosition = {
                left: K,
                top: H
            };
            this.sizeDiff = {
                width: E.outerWidth() - E.width(),
                height: E.outerHeight() - E.height()
            };
            this.originalMousePosition = {
                left: G.pageX,
                top: G.pageY
            };
            this.aspectRatio = (typeof I.aspectRatio === "number") ? I.aspectRatio : ((this.originalSize.width / this.originalSize.height) || 1);
            J = C(".ui-resizable-" + this.axis).css("cursor");
            C("body").css("cursor", J === "auto" ? this.axis + "-resize" : J);
            E.addClass("ui-resizable-resizing");
            this._propagate("start", G);
            return true
        },
        _mouseDrag: function(E) {
            var K, G = this.helper,
                L = {},
                I = this.originalMousePosition,
                M = this.axis,
                O = this.position.top,
                F = this.position.left,
                N = this.size.width,
                J = this.size.height,
                Q = (E.pageX - I.left) || 0,
                P = (E.pageY - I.top) || 0,
                H = this._change[M];
            if (!H) {
                return false
            }
            K = H.apply(this, [E, Q, P]);
            this._updateVirtualBoundaries(E.shiftKey);
            if (this._aspectRatio || E.shiftKey) {
                K = this._updateRatio(K, E)
            }
            K = this._respectSize(K, E);
            this._updateCache(K);
            this._propagate("resize", E);
            if (this.position.top !== O) {
                L.top = this.position.top + "px"
            }
            if (this.position.left !== F) {
                L.left = this.position.left + "px"
            }
            if (this.size.width !== N) {
                L.width = this.size.width + "px"
            }
            if (this.size.height !== J) {
                L.height = this.size.height + "px"
            }
            G.css(L);
            if (!this._helper && this._proportionallyResizeElements.length) {
                this._proportionallyResize()
            }
            if (!C.isEmptyObject(L)) {
                this._trigger("resize", E, this.ui())
            }
            return false
        },
        _mouseStop: function(H) {
            this.resizing = false;
            var G, E, F, K, N, J, M, I = this.options,
                L = this;
            if (this._helper) {
                G = this._proportionallyResizeElements;
                E = G.length && (/textarea/i).test(G[0].nodeName);
                F = E && C.ui.hasScroll(G[0], "left") ? 0 : L.sizeDiff.height;
                K = E ? 0 : L.sizeDiff.width;
                N = {
                    width: (L.helper.width() - K),
                    height: (L.helper.height() - F)
                };
                J = (parseInt(L.element.css("left"), 10) + (L.position.left - L.originalPosition.left)) || null;
                M = (parseInt(L.element.css("top"), 10) + (L.position.top - L.originalPosition.top)) || null;
                if (!I.animate) {
                    this.element.css(C.extend(N, {
                        top: M,
                        left: J
                    }))
                }
                L.helper.height(L.size.height);
                L.helper.width(L.size.width);
                if (this._helper && !I.animate) {
                    this._proportionallyResize()
                }
            }
            C("body").css("cursor", "auto");
            this.element.removeClass("ui-resizable-resizing");
            this._propagate("stop", H);
            if (this._helper) {
                this.helper.remove()
            }
            return false
        },
        _updateVirtualBoundaries: function(G) {
            var I, H, F, K, E, J = this.options;
            E = {
                minWidth: A(J.minWidth) ? J.minWidth : 0,
                maxWidth: A(J.maxWidth) ? J.maxWidth : Infinity,
                minHeight: A(J.minHeight) ? J.minHeight : 0,
                maxHeight: A(J.maxHeight) ? J.maxHeight : Infinity
            };
            if (this._aspectRatio || G) {
                I = E.minHeight * this.aspectRatio;
                F = E.minWidth / this.aspectRatio;
                H = E.maxHeight * this.aspectRatio;
                K = E.maxWidth / this.aspectRatio;
                if (I > E.minWidth) {
                    E.minWidth = I
                }
                if (F > E.minHeight) {
                    E.minHeight = F
                }
                if (H < E.maxWidth) {
                    E.maxWidth = H
                }
                if (K < E.maxHeight) {
                    E.maxHeight = K
                }
            }
            this._vBoundaries = E
        },
        _updateCache: function(E) {
            this.offset = this.helper.offset();
            if (A(E.left)) {
                this.position.left = E.left
            }
            if (A(E.top)) {
                this.position.top = E.top
            }
            if (A(E.height)) {
                this.size.height = E.height
            }
            if (A(E.width)) {
                this.size.width = E.width
            }
        },
        _updateRatio: function(G) {
            var H = this.position,
                F = this.size,
                E = this.axis;
            if (A(G.height)) {
                G.width = (G.height * this.aspectRatio)
            } else {
                if (A(G.width)) {
                    G.height = (G.width / this.aspectRatio)
                }
            }
            if (E === "sw") {
                G.left = H.left + (F.width - G.width);
                G.top = null
            }
            if (E === "nw") {
                G.top = H.top + (F.height - G.height);
                G.left = H.left + (F.width - G.width)
            }
            return G
        },
        _respectSize: function(J) {
            var G = this._vBoundaries,
                M = this.axis,
                O = A(J.width) && G.maxWidth && (G.maxWidth < J.width),
                K = A(J.height) && G.maxHeight && (G.maxHeight < J.height),
                H = A(J.width) && G.minWidth && (G.minWidth > J.width),
                N = A(J.height) && G.minHeight && (G.minHeight > J.height),
                F = this.originalPosition.left + this.originalSize.width,
                L = this.position.top + this.size.height,
                I = /sw|nw|w/.test(M),
                E = /nw|ne|n/.test(M);
            if (H) {
                J.width = G.minWidth
            }
            if (N) {
                J.height = G.minHeight
            }
            if (O) {
                J.width = G.maxWidth
            }
            if (K) {
                J.height = G.maxHeight
            }
            if (H && I) {
                J.left = F - G.minWidth
            }
            if (O && I) {
                J.left = F - G.maxWidth
            }
            if (N && E) {
                J.top = L - G.minHeight
            }
            if (K && E) {
                J.top = L - G.maxHeight
            }
            if (!J.width && !J.height && !J.left && J.top) {
                J.top = null
            } else {
                if (!J.width && !J.height && !J.top && J.left) {
                    J.left = null
                }
            }
            return J
        },
        _proportionallyResize: function() {
            if (!this._proportionallyResizeElements.length) {
                return
            }
            var H, F, J, E, I, G = this.helper || this.element;
            for (H = 0; H < this._proportionallyResizeElements.length; H++) {
                I = this._proportionallyResizeElements[H];
                if (!this.borderDif) {
                    this.borderDif = [];
                    J = [I.css("borderTopWidth"), I.css("borderRightWidth"), I.css("borderBottomWidth"), I.css("borderLeftWidth")];
                    E = [I.css("paddingTop"), I.css("paddingRight"), I.css("paddingBottom"), I.css("paddingLeft")];
                    for (F = 0; F < J.length; F++) {
                        this.borderDif[F] = (parseInt(J[F], 10) || 0) + (parseInt(E[F], 10) || 0)
                    }
                }
                I.css({
                    height: (G.height() - this.borderDif[0] - this.borderDif[2]) || 0,
                    width: (G.width() - this.borderDif[1] - this.borderDif[3]) || 0
                })
            }
        },
        _renderProxy: function() {
            var E = this.element,
                F = this.options;
            this.elementOffset = E.offset();
            if (this._helper) {
                this.helper = this.helper || C("<div style='overflow:hidden;'></div>");
                this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() - 1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++F.zIndex
                });
                this.helper.appendTo("body").disableSelection()
            } else {
                this.helper = this.element
            }
        },
        _change: {
            e: function(F, E) {
                return {
                    width: this.originalSize.width + E
                }
            },
            w: function(G, E) {
                var F = this.originalSize,
                    H = this.originalPosition;
                return {
                    left: H.left + E,
                    width: F.width - E
                }
            },
            n: function(H, F, E) {
                var G = this.originalSize,
                    I = this.originalPosition;
                return {
                    top: I.top + E,
                    height: G.height - E
                }
            },
            s: function(G, F, E) {
                return {
                    height: this.originalSize.height + E
                }
            },
            se: function(G, F, E) {
                return C.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [G, F, E]))
            },
            sw: function(G, F, E) {
                return C.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [G, F, E]))
            },
            ne: function(G, F, E) {
                return C.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [G, F, E]))
            },
            nw: function(G, F, E) {
                return C.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [G, F, E]))
            }
        },
        _propagate: function(F, E) {
            C.ui.plugin.call(this, F, [E, this.ui()]);
            (F !== "resize" && this._trigger(F, E, this.ui()))
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    });
    C.ui.plugin.add("resizable", "animate", {
        stop: function(H) {
            var M = C(this).data("ui-resizable"),
                J = M.options,
                G = M._proportionallyResizeElements,
                E = G.length && (/textarea/i).test(G[0].nodeName),
                F = E && C.ui.hasScroll(G[0], "left") ? 0 : M.sizeDiff.height,
                L = E ? 0 : M.sizeDiff.width,
                I = {
                    width: (M.size.width - L),
                    height: (M.size.height - F)
                },
                K = (parseInt(M.element.css("left"), 10) + (M.position.left - M.originalPosition.left)) || null,
                N = (parseInt(M.element.css("top"), 10) + (M.position.top - M.originalPosition.top)) || null;
            M.element.animate(C.extend(I, N && K ? {
                top: N,
                left: K
            } : {}), {
                duration: J.animateDuration,
                easing: J.animateEasing,
                step: function() {
                    var O = {
                        width: parseInt(M.element.css("width"), 10),
                        height: parseInt(M.element.css("height"), 10),
                        top: parseInt(M.element.css("top"), 10),
                        left: parseInt(M.element.css("left"), 10)
                    };
                    if (G && G.length) {
                        C(G[0]).css({
                            width: O.width,
                            height: O.height
                        })
                    }
                    M._updateCache(O);
                    M._propagate("resize", H)
                }
            })
        }
    });
    C.ui.plugin.add("resizable", "containment", {
        start: function() {
            var M, G, O, E, L, H, P, N = C(this).data("ui-resizable"),
                K = N.options,
                J = N.element,
                F = K.containment,
                I = (F instanceof C) ? F.get(0) : (/parent/.test(F)) ? J.parent().get(0) : F;
            if (!I) {
                return
            }
            N.containerElement = C(I);
            if (/document/.test(F) || F === document) {
                N.containerOffset = {
                    left: 0,
                    top: 0
                };
                N.containerPosition = {
                    left: 0,
                    top: 0
                };
                N.parentData = {
                    element: C(document),
                    left: 0,
                    top: 0,
                    width: C(document).width(),
                    height: C(document).height() || document.body.parentNode.scrollHeight
                }
            } else {
                M = C(I);
                G = [];
                C(["Top", "Right", "Left", "Bottom"]).each(function(R, Q) {
                    G[R] = B(M.css("padding" + Q))
                });
                N.containerOffset = M.offset();
                N.containerPosition = M.position();
                N.containerSize = {
                    height: (M.innerHeight() - G[3]),
                    width: (M.innerWidth() - G[1])
                };
                O = N.containerOffset;
                E = N.containerSize.height;
                L = N.containerSize.width;
                H = (C.ui.hasScroll(I, "left") ? I.scrollWidth : L);
                P = (C.ui.hasScroll(I) ? I.scrollHeight : E);
                N.parentData = {
                    element: I,
                    left: O.left,
                    top: O.top,
                    width: H,
                    height: P
                }
            }
        },
        resize: function(F) {
            var K, P, J, I, L = C(this).data("ui-resizable"),
                H = L.options,
                N = L.containerOffset,
                M = L.position,
                O = L._aspectRatio || F.shiftKey,
                E = {
                    top: 0,
                    left: 0
                },
                G = L.containerElement;
            if (G[0] !== document && (/static/).test(G.css("position"))) {
                E = N
            }
            if (M.left < (L._helper ? N.left : 0)) {
                L.size.width = L.size.width + (L._helper ? (L.position.left - N.left) : (L.position.left - E.left));
                if (O) {
                    L.size.height = L.size.width / L.aspectRatio
                }
                L.position.left = H.helper ? N.left : 0
            }
            if (M.top < (L._helper ? N.top : 0)) {
                L.size.height = L.size.height + (L._helper ? (L.position.top - N.top) : L.position.top);
                if (O) {
                    L.size.width = L.size.height * L.aspectRatio
                }
                L.position.top = L._helper ? N.top : 0
            }
            L.offset.left = L.parentData.left + L.position.left;
            L.offset.top = L.parentData.top + L.position.top;
            K = Math.abs((L._helper ? L.offset.left - E.left : (L.offset.left - E.left)) + L.sizeDiff.width);
            P = Math.abs((L._helper ? L.offset.top - E.top : (L.offset.top - N.top)) + L.sizeDiff.height);
            J = L.containerElement.get(0) === L.element.parent().get(0);
            I = /relative|absolute/.test(L.containerElement.css("position"));
            if (J && I) {
                K -= L.parentData.left
            }
            if (K + L.size.width >= L.parentData.width) {
                L.size.width = L.parentData.width - K;
                if (O) {
                    L.size.height = L.size.width / L.aspectRatio
                }
            }
            if (P + L.size.height >= L.parentData.height) {
                L.size.height = L.parentData.height - P;
                if (O) {
                    L.size.width = L.size.height * L.aspectRatio
                }
            }
        },
        stop: function() {
            var J = C(this).data("ui-resizable"),
                F = J.options,
                K = J.containerOffset,
                E = J.containerPosition,
                G = J.containerElement,
                H = C(J.helper),
                M = H.offset(),
                L = H.outerWidth() - J.sizeDiff.width,
                I = H.outerHeight() - J.sizeDiff.height;
            if (J._helper && !F.animate && (/relative/).test(G.css("position"))) {
                C(this).css({
                    left: M.left - E.left - K.left,
                    width: L,
                    height: I
                })
            }
            if (J._helper && !F.animate && (/static/).test(G.css("position"))) {
                C(this).css({
                    left: M.left - E.left - K.left,
                    width: L,
                    height: I
                })
            }
        }
    });
    C.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var E = C(this).data("ui-resizable"),
                G = E.options,
                F = function(H) {
                    C(H).each(function() {
                        var I = C(this);
                        I.data("ui-resizable-alsoresize", {
                            width: parseInt(I.width(), 10),
                            height: parseInt(I.height(), 10),
                            left: parseInt(I.css("left"), 10),
                            top: parseInt(I.css("top"), 10)
                        })
                    })
                };
            if (typeof(G.alsoResize) === "object" && !G.alsoResize.parentNode) {
                if (G.alsoResize.length) {
                    G.alsoResize = G.alsoResize[0];
                    F(G.alsoResize)
                } else {
                    C.each(G.alsoResize, function(H) {
                        F(H)
                    })
                }
            } else {
                F(G.alsoResize)
            }
        },
        resize: function(G, I) {
            var F = C(this).data("ui-resizable"),
                J = F.options,
                H = F.originalSize,
                L = F.originalPosition,
                K = {
                    height: (F.size.height - H.height) || 0,
                    width: (F.size.width - H.width) || 0,
                    top: (F.position.top - L.top) || 0,
                    left: (F.position.left - L.left) || 0
                },
                E = function(M, N) {
                    C(M).each(function() {
                        var Q = C(this),
                            R = C(this).data("ui-resizable-alsoresize"),
                            P = {},
                            O = N && N.length ? N : Q.parents(I.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        C.each(O, function(S, U) {
                            var T = (R[U] || 0) + (K[U] || 0);
                            if (T && T >= 0) {
                                P[U] = T || null
                            }
                        });
                        Q.css(P)
                    })
                };
            if (typeof(J.alsoResize) === "object" && !J.alsoResize.nodeType) {
                C.each(J.alsoResize, function(M, N) {
                    E(M, N)
                })
            } else {
                E(J.alsoResize)
            }
        },
        stop: function() {
            C(this).removeData("resizable-alsoresize")
        }
    });
    C.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var F = C(this).data("ui-resizable"),
                G = F.options,
                E = F.size;
            F.ghost = F.originalElement.clone();
            F.ghost.css({
                opacity: 0.25,
                display: "block",
                position: "relative",
                height: E.height,
                width: E.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof G.ghost === "string" ? G.ghost : "");
            F.ghost.appendTo(F.helper)
        },
        resize: function() {
            var E = C(this).data("ui-resizable");
            if (E.ghost) {
                E.ghost.css({
                    position: "relative",
                    height: E.size.height,
                    width: E.size.width
                })
            }
        },
        stop: function() {
            var E = C(this).data("ui-resizable");
            if (E.ghost && E.helper) {
                E.helper.get(0).removeChild(E.ghost.get(0))
            }
        }
    });
    C.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var Q = C(this).data("ui-resizable"),
                I = Q.options,
                R = Q.size,
                K = Q.originalSize,
                N = Q.originalPosition,
                S = Q.axis,
                F = typeof I.grid === "number" ? [I.grid, I.grid] : I.grid,
                O = (F[0] || 1),
                M = (F[1] || 1),
                H = Math.round((R.width - K.width) / O) * O,
                G = Math.round((R.height - K.height) / M) * M,
                L = K.width + H,
                E = K.height + G,
                J = I.maxWidth && (I.maxWidth < L),
                T = I.maxHeight && (I.maxHeight < E),
                P = I.minWidth && (I.minWidth > L),
                U = I.minHeight && (I.minHeight > E);
            I.grid = F;
            if (P) {
                L = L + O
            }
            if (U) {
                E = E + M
            }
            if (J) {
                L = L - O
            }
            if (T) {
                E = E - M
            }
            if (/^(se|s|e)$/.test(S)) {
                Q.size.width = L;
                Q.size.height = E
            } else {
                if (/^(ne)$/.test(S)) {
                    Q.size.width = L;
                    Q.size.height = E;
                    Q.position.top = N.top - G
                } else {
                    if (/^(sw)$/.test(S)) {
                        Q.size.width = L;
                        Q.size.height = E;
                        Q.position.left = N.left - H
                    } else {
                        Q.size.width = L;
                        Q.size.height = E;
                        Q.position.top = N.top - G;
                        Q.position.left = N.left - H
                    }
                }
            }
        }
    })
})(jQuery);
(function(A, B) {
    A.widget("ui.selectable", A.ui.mouse, {
        version: "1.10.3",
        options: {
            appendTo: "body",
            autoRefresh: true,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var D, C = this;
            this.element.addClass("ui-selectable");
            this.dragged = false;
            this.refresh = function() {
                D = A(C.options.filter, C.element[0]);
                D.addClass("ui-selectee");
                D.each(function() {
                    var E = A(this),
                        F = E.offset();
                    A.data(this, "selectable-item", {
                        element: this,
                        $element: E,
                        left: F.left,
                        top: F.top,
                        right: F.left + E.outerWidth(),
                        bottom: F.top + E.outerHeight(),
                        startselected: false,
                        selected: E.hasClass("ui-selected"),
                        selecting: E.hasClass("ui-selecting"),
                        unselecting: E.hasClass("ui-unselecting")
                    })
                })
            };
            this.refresh();
            this.selectees = D.addClass("ui-selectee");
            this._mouseInit();
            this.helper = A("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item");
            this.element.removeClass("ui-selectable ui-selectable-disabled");
            this._mouseDestroy()
        },
        _mouseStart: function(E) {
            var D = this,
                C = this.options;
            this.opos = [E.pageX, E.pageY];
            if (this.options.disabled) {
                return
            }
            this.selectees = A(C.filter, this.element[0]);
            this._trigger("start", E);
            A(C.appendTo).append(this.helper);
            this.helper.css({
                left: E.pageX,
                top: E.pageY,
                width: 0,
                height: 0
            });
            if (C.autoRefresh) {
                this.refresh()
            }
            this.selectees.filter(".ui-selected").each(function() {
                var F = A.data(this, "selectable-item");
                F.startselected = true;
                if (!E.metaKey && !E.ctrlKey) {
                    F.$element.removeClass("ui-selected");
                    F.selected = false;
                    F.$element.addClass("ui-unselecting");
                    F.unselecting = true;
                    D._trigger("unselecting", E, {
                        unselecting: F.element
                    })
                }
            });
            A(E.target).parents().addBack().each(function() {
                var F, G = A.data(this, "selectable-item");
                if (G) {
                    F = (!E.metaKey && !E.ctrlKey) || !G.$element.hasClass("ui-selected");
                    G.$element.removeClass(F ? "ui-unselecting" : "ui-selected").addClass(F ? "ui-selecting" : "ui-unselecting");
                    G.unselecting = !F;
                    G.selecting = F;
                    G.selected = F;
                    if (F) {
                        D._trigger("selecting", E, {
                            selecting: G.element
                        })
                    } else {
                        D._trigger("unselecting", E, {
                            unselecting: G.element
                        })
                    }
                    return false
                }
            })
        },
        _mouseDrag: function(J) {
            this.dragged = true;
            if (this.options.disabled) {
                return
            }
            var G, I = this,
                E = this.options,
                D = this.opos[0],
                H = this.opos[1],
                C = J.pageX,
                F = J.pageY;
            if (D > C) {
                G = C;
                C = D;
                D = G
            }
            if (H > F) {
                G = F;
                F = H;
                H = G
            }
            this.helper.css({
                left: D,
                top: H,
                width: C - D,
                height: F - H
            });
            this.selectees.each(function() {
                var K = A.data(this, "selectable-item"),
                    L = false;
                if (!K || K.element === I.element[0]) {
                    return
                }
                if (E.tolerance === "touch") {
                    L = (!(K.left > C || K.right < D || K.top > F || K.bottom < H))
                } else {
                    if (E.tolerance === "fit") {
                        L = (K.left > D && K.right < C && K.top > H && K.bottom < F)
                    }
                }
                if (L) {
                    if (K.selected) {
                        K.$element.removeClass("ui-selected");
                        K.selected = false
                    }
                    if (K.unselecting) {
                        K.$element.removeClass("ui-unselecting");
                        K.unselecting = false
                    }
                    if (!K.selecting) {
                        K.$element.addClass("ui-selecting");
                        K.selecting = true;
                        I._trigger("selecting", J, {
                            selecting: K.element
                        })
                    }
                } else {
                    if (K.selecting) {
                        if ((J.metaKey || J.ctrlKey) && K.startselected) {
                            K.$element.removeClass("ui-selecting");
                            K.selecting = false;
                            K.$element.addClass("ui-selected");
                            K.selected = true
                        } else {
                            K.$element.removeClass("ui-selecting");
                            K.selecting = false;
                            if (K.startselected) {
                                K.$element.addClass("ui-unselecting");
                                K.unselecting = true
                            }
                            I._trigger("unselecting", J, {
                                unselecting: K.element
                            })
                        }
                    }
                    if (K.selected) {
                        if (!J.metaKey && !J.ctrlKey && !K.startselected) {
                            K.$element.removeClass("ui-selected");
                            K.selected = false;
                            K.$element.addClass("ui-unselecting");
                            K.unselecting = true;
                            I._trigger("unselecting", J, {
                                unselecting: K.element
                            })
                        }
                    }
                }
            });
            return false
        },
        _mouseStop: function(D) {
            var C = this;
            this.dragged = false;
            A(".ui-unselecting", this.element[0]).each(function() {
                var E = A.data(this, "selectable-item");
                E.$element.removeClass("ui-unselecting");
                E.unselecting = false;
                E.startselected = false;
                C._trigger("unselected", D, {
                    unselected: E.element
                })
            });
            A(".ui-selecting", this.element[0]).each(function() {
                var E = A.data(this, "selectable-item");
                E.$element.removeClass("ui-selecting").addClass("ui-selected");
                E.selecting = false;
                E.selected = true;
                E.startselected = true;
                C._trigger("selected", D, {
                    selected: E.element
                })
            });
            this._trigger("stop", D);
            this.helper.remove();
            return false
        }
    })
})(jQuery);
(function(B, D) {
    function A(F, E, G) {
        return (F > E) && (F < (E + G))
    }

    function C(E) {
        return (/left|right/).test(E.css("float")) || (/inline|table-cell/).test(E.css("display"))
    }
    B.widget("ui.sortable", B.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "sort",
        ready: false,
        options: {
            appendTo: "parent",
            axis: false,
            connectWith: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            dropOnEmpty: true,
            forcePlaceholderSize: false,
            forceHelperSize: false,
            grid: false,
            handle: false,
            helper: "original",
            items: "> *",
            opacity: false,
            placeholder: false,
            revert: false,
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1000,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function() {
            var E = this.options;
            this.containerCache = {};
            this.element.addClass("ui-sortable");
            this.refresh();
            this.floating = this.items.length ? E.axis === "x" || C(this.items[0].item) : false;
            this.offset = this.element.offset();
            this._mouseInit();
            this.ready = true
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled");
            this._mouseDestroy();
            for (var E = this.items.length - 1; E >= 0; E--) {
                this.items[E].item.removeData(this.widgetName + "-item")
            }
            return this
        },
        _setOption: function(E, F) {
            if (E === "disabled") {
                this.options[E] = F;
                this.widget().toggleClass("ui-sortable-disabled", !!F)
            } else {
                B.Widget.prototype._setOption.apply(this, arguments)
            }
        },
        _mouseCapture: function(G, H) {
            var E = null,
                I = false,
                F = this;
            if (this.reverting) {
                return false
            }
            if (this.options.disabled || this.options.type === "static") {
                return false
            }
            this._refreshItems(G);
            B(G.target).parents().each(function() {
                if (B.data(this, F.widgetName + "-item") === F) {
                    E = B(this);
                    return false
                }
            });
            if (B.data(G.target, F.widgetName + "-item") === F) {
                E = B(G.target)
            }
            if (!E) {
                return false
            }
            if (this.options.handle && !H) {
                B(this.options.handle, E).find("*").addBack().each(function() {
                    if (this === G.target) {
                        I = true
                    }
                });
                if (!I) {
                    return false
                }
            }
            this.currentItem = E;
            this._removeCurrentsFromItems();
            return true
        },
        _mouseStart: function(H, I, F) {
            var G, E, J = this.options;
            this.currentContainer = this;
            this.refreshPositions();
            this.helper = this._createHelper(H);
            this._cacheHelperProportions();
            this._cacheMargins();
            this.scrollParent = this.helper.scrollParent();
            this.offset = this.currentItem.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };
            B.extend(this.offset, {
                click: {
                    left: H.pageX - this.offset.left,
                    top: H.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            });
            this.helper.css("position", "absolute");
            this.cssPosition = this.helper.css("position");
            this.originalPosition = this._generatePosition(H);
            this.originalPageX = H.pageX;
            this.originalPageY = H.pageY;
            (J.cursorAt && this._adjustOffsetFromHelper(J.cursorAt));
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            };
            if (this.helper[0] !== this.currentItem[0]) {
                this.currentItem.hide()
            }
            this._createPlaceholder();
            if (J.containment) {
                this._setContainment()
            }
            if (J.cursor && J.cursor !== "auto") {
                E = this.document.find("body");
                this.storedCursor = E.css("cursor");
                E.css("cursor", J.cursor);
                this.storedStylesheet = B("<style>*{ cursor: " + J.cursor + " !important; }</style>").appendTo(E)
            }
            if (J.opacity) {
                if (this.helper.css("opacity")) {
                    this._storedOpacity = this.helper.css("opacity")
                }
                this.helper.css("opacity", J.opacity)
            }
            if (J.zIndex) {
                if (this.helper.css("zIndex")) {
                    this._storedZIndex = this.helper.css("zIndex")
                }
                this.helper.css("zIndex", J.zIndex)
            }
            if (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML") {
                this.overflowOffset = this.scrollParent.offset()
            }
            this._trigger("start", H, this._uiHash());
            if (!this._preserveHelperProportions) {
                this._cacheHelperProportions()
            }
            if (!F) {
                for (G = this.containers.length - 1; G >= 0; G--) {
                    this.containers[G]._trigger("activate", H, this._uiHash(this))
                }
            }
            if (B.ui.ddmanager) {
                B.ui.ddmanager.current = this
            }
            if (B.ui.ddmanager && !J.dropBehaviour) {
                B.ui.ddmanager.prepareOffsets(this, H)
            }
            this.dragging = true;
            this.helper.addClass("ui-sortable-helper");
            this._mouseDrag(H);
            return true
        },
        _mouseDrag: function(I) {
            var G, H, F, K, J = this.options,
                E = false;
            this.position = this._generatePosition(I);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.lastPositionAbs) {
                this.lastPositionAbs = this.positionAbs
            }
            if (this.options.scroll) {
                if (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML") {
                    if ((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - I.pageY < J.scrollSensitivity) {
                        this.scrollParent[0].scrollTop = E = this.scrollParent[0].scrollTop + J.scrollSpeed
                    } else {
                        if (I.pageY - this.overflowOffset.top < J.scrollSensitivity) {
                            this.scrollParent[0].scrollTop = E = this.scrollParent[0].scrollTop - J.scrollSpeed
                        }
                    }
                    if ((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - I.pageX < J.scrollSensitivity) {
                        this.scrollParent[0].scrollLeft = E = this.scrollParent[0].scrollLeft + J.scrollSpeed
                    } else {
                        if (I.pageX - this.overflowOffset.left < J.scrollSensitivity) {
                            this.scrollParent[0].scrollLeft = E = this.scrollParent[0].scrollLeft - J.scrollSpeed
                        }
                    }
                } else {
                    if (I.pageY - B(document).scrollTop() < J.scrollSensitivity) {
                        E = B(document).scrollTop(B(document).scrollTop() - J.scrollSpeed)
                    } else {
                        if (B(window).height() - (I.pageY - B(document).scrollTop()) < J.scrollSensitivity) {
                            E = B(document).scrollTop(B(document).scrollTop() + J.scrollSpeed)
                        }
                    }
                    if (I.pageX - B(document).scrollLeft() < J.scrollSensitivity) {
                        E = B(document).scrollLeft(B(document).scrollLeft() - J.scrollSpeed)
                    } else {
                        if (B(window).width() - (I.pageX - B(document).scrollLeft()) < J.scrollSensitivity) {
                            E = B(document).scrollLeft(B(document).scrollLeft() + J.scrollSpeed)
                        }
                    }
                }
                if (E !== false && B.ui.ddmanager && !J.dropBehaviour) {
                    B.ui.ddmanager.prepareOffsets(this, I)
                }
            }
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.options.axis || this.options.axis !== "y") {
                this.helper[0].style.left = this.position.left + "px"
            }
            if (!this.options.axis || this.options.axis !== "x") {
                this.helper[0].style.top = this.position.top + "px"
            }
            for (G = this.items.length - 1; G >= 0; G--) {
                H = this.items[G];
                F = H.item[0];
                K = this._intersectsWithPointer(H);
                if (!K) {
                    continue
                }
                if (H.instance !== this.currentContainer) {
                    continue
                }
                if (F !== this.currentItem[0] && this.placeholder[K === 1 ? "next" : "prev"]()[0] !== F && !B.contains(this.placeholder[0], F) && (this.options.type === "semi-dynamic" ? !B.contains(this.element[0], F) : true)) {
                    this.direction = K === 1 ? "down" : "up";
                    if (this.options.tolerance === "pointer" || this._intersectsWithSides(H)) {
                        this._rearrange(I, H)
                    } else {
                        break
                    }
                    this._trigger("change", I, this._uiHash());
                    break
                }
            }
            this._contactContainers(I);
            if (B.ui.ddmanager) {
                B.ui.ddmanager.drag(this, I)
            }
            this._trigger("sort", I, this._uiHash());
            this.lastPositionAbs = this.positionAbs;
            return false
        },
        _mouseStop: function(G, I) {
            if (!G) {
                return
            }
            if (B.ui.ddmanager && !this.options.dropBehaviour) {
                B.ui.ddmanager.drop(this, G)
            }
            if (this.options.revert) {
                var F = this,
                    J = this.placeholder.offset(),
                    E = this.options.axis,
                    H = {};
                if (!E || E === "x") {
                    H.left = J.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)
                }
                if (!E || E === "y") {
                    H.top = J.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)
                }
                this.reverting = true;
                B(this.helper).animate(H, parseInt(this.options.revert, 10) || 500, function() {
                    F._clear(G)
                })
            } else {
                this._clear(G, I)
            }
            return false
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                });
                if (this.options.helper === "original") {
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else {
                    this.currentItem.show()
                }
                for (var E = this.containers.length - 1; E >= 0; E--) {
                    this.containers[E]._trigger("deactivate", null, this._uiHash(this));
                    if (this.containers[E].containerCache.over) {
                        this.containers[E]._trigger("out", null, this._uiHash(this));
                        this.containers[E].containerCache.over = 0
                    }
                }
            }
            if (this.placeholder) {
                if (this.placeholder[0].parentNode) {
                    this.placeholder[0].parentNode.removeChild(this.placeholder[0])
                }
                if (this.options.helper !== "original" && this.helper && this.helper[0].parentNode) {
                    this.helper.remove()
                }
                B.extend(this, {
                    helper: null,
                    dragging: false,
                    reverting: false,
                    _noFinalSort: null
                });
                if (this.domPosition.prev) {
                    B(this.domPosition.prev).after(this.currentItem)
                } else {
                    B(this.domPosition.parent).prepend(this.currentItem)
                }
            }
            return this
        },
        serialize: function(G) {
            var E = this._getItemsAsjQuery(G && G.connected),
                F = [];
            G = G || {};
            B(E).each(function() {
                var H = (B(G.item || this).attr(G.attribute || "id") || "").match(G.expression || (/(.+)[\-=_](.+)/));
                if (H) {
                    F.push((G.key || H[1] + "[]") + "=" + (G.key && G.expression ? H[1] : H[2]))
                }
            });
            if (!F.length && G.key) {
                F.push(G.key + "=")
            }
            return F.join("&")
        },
        toArray: function(G) {
            var E = this._getItemsAsjQuery(G && G.connected),
                F = [];
            G = G || {};
            E.each(function() {
                F.push(B(G.item || this).attr(G.attribute || "id") || "")
            });
            return F
        },
        _intersectsWith: function(P) {
            var G = this.positionAbs.left,
                F = G + this.helperProportions.width,
                N = this.positionAbs.top,
                M = N + this.helperProportions.height,
                H = P.left,
                E = H + P.width,
                Q = P.top,
                L = Q + P.height,
                R = this.offset.click.top,
                K = this.offset.click.left,
                J = (this.options.axis === "x") || ((N + R) > Q && (N + R) < L),
                O = (this.options.axis === "y") || ((G + K) > H && (G + K) < E),
                I = J && O;
            if (this.options.tolerance === "pointer" || this.options.forcePointerForContainers || (this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > P[this.floating ? "width" : "height"])) {
                return I
            } else {
                return (H < G + (this.helperProportions.width / 2) && F - (this.helperProportions.width / 2) < E && Q < N + (this.helperProportions.height / 2) && M - (this.helperProportions.height / 2) < L)
            }
        },
        _intersectsWithPointer: function(G) {
            var H = (this.options.axis === "x") || A(this.positionAbs.top + this.offset.click.top, G.top, G.height),
                F = (this.options.axis === "y") || A(this.positionAbs.left + this.offset.click.left, G.left, G.width),
                J = H && F,
                E = this._getDragVerticalDirection(),
                I = this._getDragHorizontalDirection();
            if (!J) {
                return false
            }
            return this.floating ? (((I && I === "right") || E === "down") ? 2 : 1) : (E && (E === "down" ? 2 : 1))
        },
        _intersectsWithSides: function(H) {
            var F = A(this.positionAbs.top + this.offset.click.top, H.top + (H.height / 2), H.height),
                G = A(this.positionAbs.left + this.offset.click.left, H.left + (H.width / 2), H.width),
                E = this._getDragVerticalDirection(),
                I = this._getDragHorizontalDirection();
            if (this.floating && I) {
                return ((I === "right" && G) || (I === "left" && !G))
            } else {
                return E && ((E === "down" && F) || (E === "up" && !F))
            }
        },
        _getDragVerticalDirection: function() {
            var E = this.positionAbs.top - this.lastPositionAbs.top;
            return E !== 0 && (E > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var E = this.positionAbs.left - this.lastPositionAbs.left;
            return E !== 0 && (E > 0 ? "right" : "left")
        },
        refresh: function(E) {
            this._refreshItems(E);
            this.refreshPositions();
            return this
        },
        _connectWith: function() {
            var E = this.options;
            return E.connectWith.constructor === String ? [E.connectWith] : E.connectWith
        },
        _getItemsAsjQuery: function(J) {
            var H, G, L, K, E = [],
                F = [],
                I = this._connectWith();
            if (I && J) {
                for (H = I.length - 1; H >= 0; H--) {
                    L = B(I[H]);
                    for (G = L.length - 1; G >= 0; G--) {
                        K = B.data(L[G], this.widgetFullName);
                        if (K && K !== this && !K.options.disabled) {
                            F.push([B.isFunction(K.options.items) ? K.options.items.call(K.element) : B(K.options.items, K.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), K])
                        }
                    }
                }
            }
            F.push([B.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : B(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (H = F.length - 1; H >= 0; H--) {
                F[H][0].each(function() {
                    E.push(this)
                })
            }
            return B(E)
        },
        _removeCurrentsFromItems: function() {
            var E = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = B.grep(this.items, function(G) {
                for (var F = 0; F < E.length; F++) {
                    if (E[F] === G.item[0]) {
                        return false
                    }
                }
                return true
            })
        },
        _refreshItems: function(E) {
            this.items = [];
            this.containers = [this];
            var I, G, N, J, M, F, P, O, K = this.items,
                H = [
                    [B.isFunction(this.options.items) ? this.options.items.call(this.element[0], E, {
                        item: this.currentItem
                    }) : B(this.options.items, this.element), this]
                ],
                L = this._connectWith();
            if (L && this.ready) {
                for (I = L.length - 1; I >= 0; I--) {
                    N = B(L[I]);
                    for (G = N.length - 1; G >= 0; G--) {
                        J = B.data(N[G], this.widgetFullName);
                        if (J && J !== this && !J.options.disabled) {
                            H.push([B.isFunction(J.options.items) ? J.options.items.call(J.element[0], E, {
                                item: this.currentItem
                            }) : B(J.options.items, J.element), J]);
                            this.containers.push(J)
                        }
                    }
                }
            }
            for (I = H.length - 1; I >= 0; I--) {
                M = H[I][1];
                F = H[I][0];
                for (G = 0, O = F.length; G < O; G++) {
                    P = B(F[G]);
                    P.data(this.widgetName + "-item", M);
                    K.push({
                        item: P,
                        instance: M,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
                }
            }
        },
        refreshPositions: function(E) {
            if (this.offsetParent && this.helper) {
                this.offset.parent = this._getParentOffset()
            }
            var G, H, F, I;
            for (G = this.items.length - 1; G >= 0; G--) {
                H = this.items[G];
                if (H.instance !== this.currentContainer && this.currentContainer && H.item[0] !== this.currentItem[0]) {
                    continue
                }
                F = this.options.toleranceElement ? B(this.options.toleranceElement, H.item) : H.item;
                if (!E) {
                    H.width = F.outerWidth();
                    H.height = F.outerHeight()
                }
                I = F.offset();
                H.left = I.left;
                H.top = I.top
            }
            if (this.options.custom && this.options.custom.refreshContainers) {
                this.options.custom.refreshContainers.call(this)
            } else {
                for (G = this.containers.length - 1; G >= 0; G--) {
                    I = this.containers[G].element.offset();
                    this.containers[G].containerCache.left = I.left;
                    this.containers[G].containerCache.top = I.top;
                    this.containers[G].containerCache.width = this.containers[G].element.outerWidth();
                    this.containers[G].containerCache.height = this.containers[G].element.outerHeight()
                }
            }
            return this
        },
        _createPlaceholder: function(F) {
            F = F || this;
            var E, G = F.options;
            if (!G.placeholder || G.placeholder.constructor === String) {
                E = G.placeholder;
                G.placeholder = {
                    element: function() {
                        var I = F.currentItem[0].nodeName.toLowerCase(),
                            H = B("<" + I + ">", F.document[0]).addClass(E || F.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                        if (I === "tr") {
                            F.currentItem.children().each(function() {
                                B("<td>&#160;</td>", F.document[0]).attr("colspan", B(this).attr("colspan") || 1).appendTo(H)
                            })
                        } else {
                            if (I === "img") {
                                H.attr("src", F.currentItem.attr("src"))
                            }
                        }
                        if (!E) {
                            H.css("visibility", "hidden")
                        }
                        return H
                    },
                    update: function(H, I) {
                        if (E && !G.forcePlaceholderSize) {
                            return
                        }
                        if (!I.height()) {
                            I.height(F.currentItem.innerHeight() - parseInt(F.currentItem.css("paddingTop") || 0, 10) - parseInt(F.currentItem.css("paddingBottom") || 0, 10))
                        }
                        if (!I.width()) {
                            I.width(F.currentItem.innerWidth() - parseInt(F.currentItem.css("paddingLeft") || 0, 10) - parseInt(F.currentItem.css("paddingRight") || 0, 10))
                        }
                    }
                }
            }
            F.placeholder = B(G.placeholder.element.call(F.element, F.currentItem));
            F.currentItem.after(F.placeholder);
            G.placeholder.update(F, F.placeholder)
        },
        _contactContainers: function(E) {
            var J, H, N, K, L, P, F, Q, I, M, G = null,
                O = null;
            for (J = this.containers.length - 1; J >= 0; J--) {
                if (B.contains(this.currentItem[0], this.containers[J].element[0])) {
                    continue
                }
                if (this._intersectsWith(this.containers[J].containerCache)) {
                    if (G && B.contains(this.containers[J].element[0], G.element[0])) {
                        continue
                    }
                    G = this.containers[J];
                    O = J
                } else {
                    if (this.containers[J].containerCache.over) {
                        this.containers[J]._trigger("out", E, this._uiHash(this));
                        this.containers[J].containerCache.over = 0
                    }
                }
            }
            if (!G) {
                return
            }
            if (this.containers.length === 1) {
                if (!this.containers[O].containerCache.over) {
                    this.containers[O]._trigger("over", E, this._uiHash(this));
                    this.containers[O].containerCache.over = 1
                }
            } else {
                N = 10000;
                K = null;
                M = G.floating || C(this.currentItem);
                L = M ? "left" : "top";
                P = M ? "width" : "height";
                F = this.positionAbs[L] + this.offset.click[L];
                for (H = this.items.length - 1; H >= 0; H--) {
                    if (!B.contains(this.containers[O].element[0], this.items[H].item[0])) {
                        continue
                    }
                    if (this.items[H].item[0] === this.currentItem[0]) {
                        continue
                    }
                    if (M && !A(this.positionAbs.top + this.offset.click.top, this.items[H].top, this.items[H].height)) {
                        continue
                    }
                    Q = this.items[H].item.offset()[L];
                    I = false;
                    if (Math.abs(Q - F) > Math.abs(Q + this.items[H][P] - F)) {
                        I = true;
                        Q += this.items[H][P]
                    }
                    if (Math.abs(Q - F) < N) {
                        N = Math.abs(Q - F);
                        K = this.items[H];
                        this.direction = I ? "up" : "down"
                    }
                }
                if (!K && !this.options.dropOnEmpty) {
                    return
                }
                if (this.currentContainer === this.containers[O]) {
                    return
                }
                K ? this._rearrange(E, K, null, true) : this._rearrange(E, null, this.containers[O].element, true);
                this._trigger("change", E, this._uiHash());
                this.containers[O]._trigger("change", E, this._uiHash(this));
                this.currentContainer = this.containers[O];
                this.options.placeholder.update(this.currentContainer, this.placeholder);
                this.containers[O]._trigger("over", E, this._uiHash(this));
                this.containers[O].containerCache.over = 1
            }
        },
        _createHelper: function(F) {
            var G = this.options,
                E = B.isFunction(G.helper) ? B(G.helper.apply(this.element[0], [F, this.currentItem])) : (G.helper === "clone" ? this.currentItem.clone() : this.currentItem);
            if (!E.parents("body").length) {
                B(G.appendTo !== "parent" ? G.appendTo : this.currentItem[0].parentNode)[0].appendChild(E[0])
            }
            if (E[0] === this.currentItem[0]) {
                this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }
            }
            if (!E[0].style.width || G.forceHelperSize) {
                E.width(this.currentItem.width())
            }
            if (!E[0].style.height || G.forceHelperSize) {
                E.height(this.currentItem.height())
            }
            return E
        },
        _adjustOffsetFromHelper: function(E) {
            if (typeof E === "string") {
                E = E.split(" ")
            }
            if (B.isArray(E)) {
                E = {
                    left: +E[0],
                    top: +E[1] || 0
                }
            }
            if ("left" in E) {
                this.offset.click.left = E.left + this.margins.left
            }
            if ("right" in E) {
                this.offset.click.left = this.helperProportions.width - E.right + this.margins.left
            }
            if ("top" in E) {
                this.offset.click.top = E.top + this.margins.top
            }
            if ("bottom" in E) {
                this.offset.click.top = this.helperProportions.height - E.bottom + this.margins.top
            }
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var E = this.offsetParent.offset();
            if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && B.contains(this.scrollParent[0], this.offsetParent[0])) {
                E.left += this.scrollParent.scrollLeft();
                E.top += this.scrollParent.scrollTop()
            }
            if (this.offsetParent[0] === document.body || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && B.ui.ie)) {
                E = {
                    top: 0,
                    left: 0
                }
            }
            return {
                top: E.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: E.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition === "relative") {
                var E = this.currentItem.position();
                return {
                    top: E.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: E.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            } else {
                return {
                    top: 0,
                    left: 0
                }
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: (parseInt(this.currentItem.css("marginLeft"), 10) || 0),
                top: (parseInt(this.currentItem.css("marginTop"), 10) || 0)
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var F, H, E, G = this.options;
            if (G.containment === "parent") {
                G.containment = this.helper[0].parentNode
            }
            if (G.containment === "document" || G.containment === "window") {
                this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, B(G.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (B(G.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
            }
            if (!(/^(document|window|parent)$/).test(G.containment)) {
                F = B(G.containment)[0];
                H = B(G.containment).offset();
                E = (B(F).css("overflow") !== "hidden");
                this.containment = [H.left + (parseInt(B(F).css("borderLeftWidth"), 10) || 0) + (parseInt(B(F).css("paddingLeft"), 10) || 0) - this.margins.left, H.top + (parseInt(B(F).css("borderTopWidth"), 10) || 0) + (parseInt(B(F).css("paddingTop"), 10) || 0) - this.margins.top, H.left + (E ? Math.max(F.scrollWidth, F.offsetWidth) : F.offsetWidth) - (parseInt(B(F).css("borderLeftWidth"), 10) || 0) - (parseInt(B(F).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, H.top + (E ? Math.max(F.scrollHeight, F.offsetHeight) : F.offsetHeight) - (parseInt(B(F).css("borderTopWidth"), 10) || 0) - (parseInt(B(F).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function(G, I) {
            if (!I) {
                I = this.position
            }
            var F = G === "absolute" ? 1 : -1,
                E = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && B.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                H = (/(html|body)/i).test(E[0].tagName);
            return {
                top: (I.top + this.offset.relative.top * F + this.offset.parent.top * F - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : (H ? 0 : E.scrollTop())) * F)),
                left: (I.left + this.offset.relative.left * F + this.offset.parent.left * F - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : H ? 0 : E.scrollLeft()) * F))
            }
        },
        _generatePosition: function(H) {
            var J, I, K = this.options,
                G = H.pageX,
                F = H.pageY,
                E = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && B.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                L = (/(html|body)/i).test(E[0].tagName);
            if (this.cssPosition === "relative" && !(this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0])) {
                this.offset.relative = this._getRelativeOffset()
            }
            if (this.originalPosition) {
                if (this.containment) {
                    if (H.pageX - this.offset.click.left < this.containment[0]) {
                        G = this.containment[0] + this.offset.click.left
                    }
                    if (H.pageY - this.offset.click.top < this.containment[1]) {
                        F = this.containment[1] + this.offset.click.top
                    }
                    if (H.pageX - this.offset.click.left > this.containment[2]) {
                        G = this.containment[2] + this.offset.click.left
                    }
                    if (H.pageY - this.offset.click.top > this.containment[3]) {
                        F = this.containment[3] + this.offset.click.top
                    }
                }
                if (K.grid) {
                    J = this.originalPageY + Math.round((F - this.originalPageY) / K.grid[1]) * K.grid[1];
                    F = this.containment ? ((J - this.offset.click.top >= this.containment[1] && J - this.offset.click.top <= this.containment[3]) ? J : ((J - this.offset.click.top >= this.containment[1]) ? J - K.grid[1] : J + K.grid[1])) : J;
                    I = this.originalPageX + Math.round((G - this.originalPageX) / K.grid[0]) * K.grid[0];
                    G = this.containment ? ((I - this.offset.click.left >= this.containment[0] && I - this.offset.click.left <= this.containment[2]) ? I : ((I - this.offset.click.left >= this.containment[0]) ? I - K.grid[0] : I + K.grid[0])) : I
                }
            }
            return {
                top: (F - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : (L ? 0 : E.scrollTop())))),
                left: (G - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : L ? 0 : E.scrollLeft())))
            }
        },
        _rearrange: function(I, H, F, G) {
            F ? F[0].appendChild(this.placeholder[0]) : H.item[0].parentNode.insertBefore(this.placeholder[0], (this.direction === "down" ? H.item[0] : H.item[0].nextSibling));
            this.counter = this.counter ? ++this.counter : 1;
            var E = this.counter;
            this._delay(function() {
                if (E === this.counter) {
                    this.refreshPositions(!G)
                }
            })
        },
        _clear: function(F, G) {
            this.reverting = false;
            var E, H = [];
            if (!this._noFinalSort && this.currentItem.parent().length) {
                this.placeholder.before(this.currentItem)
            }
            this._noFinalSort = null;
            if (this.helper[0] === this.currentItem[0]) {
                for (E in this._storedCSS) {
                    if (this._storedCSS[E] === "auto" || this._storedCSS[E] === "static") {
                        this._storedCSS[E] = ""
                    }
                }
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else {
                this.currentItem.show()
            }
            if (this.fromOutside && !G) {
                H.push(function(I) {
                    this._trigger("receive", I, this._uiHash(this.fromOutside))
                })
            }
            if ((this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !G) {
                H.push(function(I) {
                    this._trigger("update", I, this._uiHash())
                })
            }
            if (this !== this.currentContainer) {
                if (!G) {
                    H.push(function(I) {
                        this._trigger("remove", I, this._uiHash())
                    });
                    H.push((function(I) {
                        return function(J) {
                            I._trigger("receive", J, this._uiHash(this))
                        }
                    }).call(this, this.currentContainer));
                    H.push((function(I) {
                        return function(J) {
                            I._trigger("update", J, this._uiHash(this))
                        }
                    }).call(this, this.currentContainer))
                }
            }
            for (E = this.containers.length - 1; E >= 0; E--) {
                if (!G) {
                    H.push((function(I) {
                        return function(J) {
                            I._trigger("deactivate", J, this._uiHash(this))
                        }
                    }).call(this, this.containers[E]))
                }
                if (this.containers[E].containerCache.over) {
                    H.push((function(I) {
                        return function(J) {
                            I._trigger("out", J, this._uiHash(this))
                        }
                    }).call(this, this.containers[E]));
                    this.containers[E].containerCache.over = 0
                }
            }
            if (this.storedCursor) {
                this.document.find("body").css("cursor", this.storedCursor);
                this.storedStylesheet.remove()
            }
            if (this._storedOpacity) {
                this.helper.css("opacity", this._storedOpacity)
            }
            if (this._storedZIndex) {
                this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex)
            }
            this.dragging = false;
            if (this.cancelHelperRemoval) {
                if (!G) {
                    this._trigger("beforeStop", F, this._uiHash());
                    for (E = 0; E < H.length; E++) {
                        H[E].call(this, F)
                    }
                    this._trigger("stop", F, this._uiHash())
                }
                this.fromOutside = false;
                return false
            }
            if (!G) {
                this._trigger("beforeStop", F, this._uiHash())
            }
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
            if (this.helper[0] !== this.currentItem[0]) {
                this.helper.remove()
            }
            this.helper = null;
            if (!G) {
                for (E = 0; E < H.length; E++) {
                    H[E].call(this, F)
                }
                this._trigger("stop", F, this._uiHash())
            }
            this.fromOutside = false;
            return true
        },
        _trigger: function() {
            if (B.Widget.prototype._trigger.apply(this, arguments) === false) {
                this.cancel()
            }
        },
        _uiHash: function(E) {
            var F = E || this;
            return {
                helper: F.helper,
                placeholder: F.placeholder || B([]),
                position: F.position,
                originalPosition: F.originalPosition,
                offset: F.positionAbs,
                item: F.currentItem,
                sender: E ? E.element : null
            }
        }
    })
})(jQuery);
(function(D, E) {
    var B = 0,
        C = {},
        A = {};
    C.height = C.paddingTop = C.paddingBottom = C.borderTopWidth = C.borderBottomWidth = "hide";
    A.height = A.paddingTop = A.paddingBottom = A.borderTopWidth = A.borderBottomWidth = "show";
    D.widget("ui.accordion", {
        version: "1.10.3",
        options: {
            active: 0,
            animate: {},
            collapsible: false,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        _create: function() {
            var F = this.options;
            this.prevShow = this.prevHide = D();
            this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist");
            if (!F.collapsible && (F.active === false || F.active == null)) {
                F.active = 0
            }
            this._processPanels();
            if (F.active < 0) {
                F.active += this.headers.length
            }
            this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: !this.active.length ? D() : this.active.next(),
                content: !this.active.length ? D() : this.active.next()
            }
        },
        _createIcons: function() {
            var F = this.options.icons;
            if (F) {
                D("<span>").addClass("ui-accordion-header-icon ui-icon " + F.header).prependTo(this.headers);
                this.active.children(".ui-accordion-header-icon").removeClass(F.header).addClass(F.activeHeader);
                this.headers.addClass("ui-accordion-icons")
            }
        },
        _destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var F;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
            this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                if (/^ui-accordion/.test(this.id)) {
                    this.removeAttribute("id")
                }
            });
            this._destroyIcons();
            F = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                if (/^ui-accordion/.test(this.id)) {
                    this.removeAttribute("id")
                }
            });
            if (this.options.heightStyle !== "content") {
                F.css("height", "")
            }
        },
        _setOption: function(F, G) {
            if (F === "active") {
                this._activate(G);
                return
            }
            if (F === "event") {
                if (this.options.event) {
                    this._off(this.headers, this.options.event)
                }
                this._setupEvents(G)
            }
            this._super(F, G);
            if (F === "collapsible" && !G && this.options.active === false) {
                this._activate(0)
            }
            if (F === "icons") {
                this._destroyIcons();
                if (G) {
                    this._createIcons()
                }
            }
            if (F === "disabled") {
                this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!G)
            }
        },
        _keydown: function(I) {
            if (I.altKey || I.ctrlKey) {
                return
            }
            var J = D.ui.keyCode,
                H = this.headers.length,
                F = this.headers.index(I.target),
                G = false;
            switch (I.keyCode) {
                case J.RIGHT:
                case J.DOWN:
                    G = this.headers[(F + 1) % H];
                    break;
                case J.LEFT:
                case J.UP:
                    G = this.headers[(F - 1 + H) % H];
                    break;
                case J.SPACE:
                case J.ENTER:
                    this._eventHandler(I);
                    break;
                case J.HOME:
                    G = this.headers[0];
                    break;
                case J.END:
                    G = this.headers[H - 1];
                    break
            }
            if (G) {
                D(I.target).attr("tabIndex", -1);
                D(G).attr("tabIndex", 0);
                G.focus();
                I.preventDefault()
            }
        },
        _panelKeyDown: function(F) {
            if (F.keyCode === D.ui.keyCode.UP && F.ctrlKey) {
                D(F.currentTarget).prev().focus()
            }
        },
        refresh: function() {
            var F = this.options;
            this._processPanels();
            if ((F.active === false && F.collapsible === true) || !this.headers.length) {
                F.active = false;
                this.active = D()
            } else {
                if (F.active === false) {
                    this._activate(0)
                } else {
                    if (this.active.length && !D.contains(this.element[0], this.active[0])) {
                        if (this.headers.length === this.headers.find(".ui-state-disabled").length) {
                            F.active = false;
                            this.active = D()
                        } else {
                            this._activate(Math.max(0, F.active - 1))
                        }
                    } else {
                        F.active = this.headers.index(this.active)
                    }
                }
            }
            this._destroyIcons();
            this._refresh()
        },
        _processPanels: function() {
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");
            this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
        },
        _refresh: function() {
            var J, H = this.options,
                G = H.heightStyle,
                I = this.element.parent(),
                F = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++B);
            this.active = this._findActive(H.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
            this.active.next().addClass("ui-accordion-content-active").show();
            this.headers.attr("role", "tab").each(function(N) {
                var O = D(this),
                    M = O.attr("id"),
                    K = O.next(),
                    L = K.attr("id");
                if (!M) {
                    M = F + "-header-" + N;
                    O.attr("id", M)
                }
                if (!L) {
                    L = F + "-panel-" + N;
                    K.attr("id", L)
                }
                O.attr("aria-controls", L);
                K.attr("aria-labelledby", M)
            }).next().attr("role", "tabpanel");
            this.headers.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }).next().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }).hide();
            if (!this.active.length) {
                this.headers.eq(0).attr("tabIndex", 0)
            } else {
                this.active.attr({
                    "aria-selected": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                })
            }
            this._createIcons();
            this._setupEvents(H.event);
            if (G === "fill") {
                J = I.height();
                this.element.siblings(":visible").each(function() {
                    var L = D(this),
                        K = L.css("position");
                    if (K === "absolute" || K === "fixed") {
                        return
                    }
                    J -= L.outerHeight(true)
                });
                this.headers.each(function() {
                    J -= D(this).outerHeight(true)
                });
                this.headers.next().each(function() {
                    D(this).height(Math.max(0, J - D(this).innerHeight() + D(this).height()))
                }).css("overflow", "auto")
            } else {
                if (G === "auto") {
                    J = 0;
                    this.headers.next().each(function() {
                        J = Math.max(J, D(this).css("height", "").height())
                    }).height(J)
                }
            }
        },
        _activate: function(F) {
            var G = this._findActive(F)[0];
            if (G === this.active[0]) {
                return
            }
            G = G || this.active[0];
            this._eventHandler({
                target: G,
                currentTarget: G,
                preventDefault: D.noop
            })
        },
        _findActive: function(F) {
            return typeof F === "number" ? this.headers.eq(F) : D()
        },
        _setupEvents: function(G) {
            var F = {
                keydown: "_keydown"
            };
            if (G) {
                D.each(G.split(" "), function(I, H) {
                    F[H] = "_eventHandler"
                })
            }
            this._off(this.headers.add(this.headers.next()));
            this._on(this.headers, F);
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            });
            this._hoverable(this.headers);
            this._focusable(this.headers)
        },
        _eventHandler: function(F) {
            var N = this.options,
                I = this.active,
                J = D(F.currentTarget),
                L = J[0] === I[0],
                G = L && N.collapsible,
                H = G ? D() : J.next(),
                K = I.next(),
                M = {
                    oldHeader: I,
                    oldPanel: K,
                    newHeader: G ? D() : J,
                    newPanel: H
                };
            F.preventDefault();
            if ((L && !N.collapsible) || (this._trigger("beforeActivate", F, M) === false)) {
                return
            }
            N.active = G ? false : this.headers.index(J);
            this.active = L ? D() : J;
            this._toggle(M);
            I.removeClass("ui-accordion-header-active ui-state-active");
            if (N.icons) {
                I.children(".ui-accordion-header-icon").removeClass(N.icons.activeHeader).addClass(N.icons.header)
            }
            if (!L) {
                J.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");
                if (N.icons) {
                    J.children(".ui-accordion-header-icon").removeClass(N.icons.header).addClass(N.icons.activeHeader)
                }
                J.next().addClass("ui-accordion-content-active")
            }
        },
        _toggle: function(H) {
            var F = H.newPanel,
                G = this.prevShow.length ? this.prevShow : H.oldPanel;
            this.prevShow.add(this.prevHide).stop(true, true);
            this.prevShow = F;
            this.prevHide = G;
            if (this.options.animate) {
                this._animate(F, G, H)
            } else {
                G.hide();
                F.show();
                this._toggleComplete(H)
            }
            G.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            });
            G.prev().attr("aria-selected", "false");
            if (F.length && G.length) {
                G.prev().attr("tabIndex", -1)
            } else {
                if (F.length) {
                    this.headers.filter(function() {
                        return D(this).attr("tabIndex") === 0
                    }).attr("tabIndex", -1)
                }
            }
            F.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }).prev().attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _animate: function(F, N, J) {
            var M, L, I, K = this,
                O = 0,
                P = F.length && (!N.length || (F.index() < N.index())),
                H = this.options.animate || {},
                Q = P && H.down || H,
                G = function() {
                    K._toggleComplete(J)
                };
            if (typeof Q === "number") {
                I = Q
            }
            if (typeof Q === "string") {
                L = Q
            }
            L = L || Q.easing || H.easing;
            I = I || Q.duration || H.duration;
            if (!N.length) {
                return F.animate(A, I, L, G)
            }
            if (!F.length) {
                return N.animate(C, I, L, G)
            }
            M = F.show().outerHeight();
            N.animate(C, {
                duration: I,
                easing: L,
                step: function(R, S) {
                    S.now = Math.round(R)
                }
            });
            F.hide().animate(A, {
                duration: I,
                easing: L,
                complete: G,
                step: function(R, S) {
                    S.now = Math.round(R);
                    if (S.prop !== "height") {
                        O += S.now
                    } else {
                        if (K.options.heightStyle !== "content") {
                            S.now = Math.round(M - N.outerHeight() - O);
                            O = 0
                        }
                    }
                }
            })
        },
        _toggleComplete: function(G) {
            var F = G.oldPanel;
            F.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
            if (F.length) {
                F.parent()[0].className = F.parent()[0].className
            }
            this._trigger("activate", null, G)
        }
    })
})(jQuery);
(function(A, B) {
    var C = 0;
    A.widget("ui.autocomplete", {
        version: "1.10.3",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: false,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        pending: 0,
        _create: function() {
            var F, D, G, I = this.element[0].nodeName.toLowerCase(),
                H = I === "textarea",
                E = I === "input";
            this.isMultiLine = H ? true : E ? false : this.element.prop("isContentEditable");
            this.valueMethod = this.element[H || E ? "val" : "text"];
            this.isNewMenu = true;
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
            this._on(this.element, {
                keydown: function(J) {
                    if (this.element.prop("readOnly")) {
                        F = true;
                        G = true;
                        D = true;
                        return
                    }
                    F = false;
                    G = false;
                    D = false;
                    var K = A.ui.keyCode;
                    switch (J.keyCode) {
                        case K.PAGE_UP:
                            F = true;
                            this._move("previousPage", J);
                            break;
                        case K.PAGE_DOWN:
                            F = true;
                            this._move("nextPage", J);
                            break;
                        case K.UP:
                            F = true;
                            this._keyEvent("previous", J);
                            break;
                        case K.DOWN:
                            F = true;
                            this._keyEvent("next", J);
                            break;
                        case K.ENTER:
                        case K.NUMPAD_ENTER:
                            if (this.menu.active) {
                                F = true;
                                J.preventDefault();
                                this.menu.select(J)
                            }
                            break;
                        case K.TAB:
                            if (this.menu.active) {
                                this.menu.select(J)
                            }
                            break;
                        case K.ESCAPE:
                            if (this.menu.element.is(":visible")) {
                                this._value(this.term);
                                this.close(J);
                                J.preventDefault()
                            }
                            break;
                        default:
                            D = true;
                            this._searchTimeout(J);
                            break
                    }
                },
                keypress: function(J) {
                    if (F) {
                        F = false;
                        if (!this.isMultiLine || this.menu.element.is(":visible")) {
                            J.preventDefault()
                        }
                        return
                    }
                    if (D) {
                        return
                    }
                    var K = A.ui.keyCode;
                    switch (J.keyCode) {
                        case K.PAGE_UP:
                            this._move("previousPage", J);
                            break;
                        case K.PAGE_DOWN:
                            this._move("nextPage", J);
                            break;
                        case K.UP:
                            this._keyEvent("previous", J);
                            break;
                        case K.DOWN:
                            this._keyEvent("next", J);
                            break
                    }
                },
                input: function(J) {
                    if (G) {
                        G = false;
                        J.preventDefault();
                        return
                    }
                    this._searchTimeout(J)
                },
                focus: function() {
                    this.selectedItem = null;
                    this.previous = this._value()
                },
                blur: function(J) {
                    if (this.cancelBlur) {
                        delete this.cancelBlur;
                        return
                    }
                    clearTimeout(this.searching);
                    this.close(J);
                    this._change(J)
                }
            });
            this._initSource();
            this.menu = A("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().data("ui-menu");
            this._on(this.menu.element, {
                mousedown: function(J) {
                    J.preventDefault();
                    this.cancelBlur = true;
                    this._delay(function() {
                        delete this.cancelBlur
                    });
                    var K = this.menu.element[0];
                    if (!A(J.target).closest(".ui-menu-item").length) {
                        this._delay(function() {
                            var L = this;
                            this.document.one("mousedown", function(M) {
                                if (M.target !== L.element[0] && M.target !== K && !A.contains(K, M.target)) {
                                    L.close()
                                }
                            })
                        })
                    }
                },
                menufocus: function(K, L) {
                    if (this.isNewMenu) {
                        this.isNewMenu = false;
                        if (K.originalEvent && /^mouse/.test(K.originalEvent.type)) {
                            this.menu.blur();
                            this.document.one("mousemove", function() {
                                A(K.target).trigger(K.originalEvent)
                            });
                            return
                        }
                    }
                    var J = L.item.data("ui-autocomplete-item");
                    if (false !== this._trigger("focus", K, {
                            item: J
                        })) {
                        if (K.originalEvent && /^key/.test(K.originalEvent.type)) {
                            this._value(J.value)
                        }
                    } else {
                        this.liveRegion.text(J.value)
                    }
                },
                menuselect: function(L, M) {
                    var K = M.item.data("ui-autocomplete-item"),
                        J = this.previous;
                    if (this.element[0] !== this.document[0].activeElement) {
                        this.element.focus();
                        this.previous = J;
                        this._delay(function() {
                            this.previous = J;
                            this.selectedItem = K
                        })
                    }
                    if (false !== this._trigger("select", L, {
                            item: K
                        })) {
                        this._value(K.value)
                    }
                    this.term = this._value();
                    this.close(L);
                    this.selectedItem = K
                }
            });
            this.liveRegion = A("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertBefore(this.element);
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching);
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
            this.menu.element.remove();
            this.liveRegion.remove()
        },
        _setOption: function(D, E) {
            this._super(D, E);
            if (D === "source") {
                this._initSource()
            }
            if (D === "appendTo") {
                this.menu.element.appendTo(this._appendTo())
            }
            if (D === "disabled" && E && this.xhr) {
                this.xhr.abort()
            }
        },
        _appendTo: function() {
            var D = this.options.appendTo;
            if (D) {
                D = D.jquery || D.nodeType ? A(D) : this.document.find(D).eq(0)
            }
            if (!D) {
                D = this.element.closest(".ui-front")
            }
            if (!D.length) {
                D = this.document[0].body
            }
            return D
        },
        _initSource: function() {
            var F, D, E = this;
            if (A.isArray(this.options.source)) {
                F = this.options.source;
                this.source = function(H, G) {
                    G(A.ui.autocomplete.filter(F, H.term))
                }
            } else {
                if (typeof this.options.source === "string") {
                    D = this.options.source;
                    this.source = function(H, G) {
                        if (E.xhr) {
                            E.xhr.abort()
                        }
                        E.xhr = A.ajax({
                            url: D,
                            data: H,
                            dataType: "json",
                            success: function(I) {
                                G(I)
                            },
                            error: function() {
                                G([])
                            }
                        })
                    }
                } else {
                    this.source = this.options.source
                }
            }
        },
        _searchTimeout: function(D) {
            clearTimeout(this.searching);
            this.searching = this._delay(function() {
                if (this.term !== this._value()) {
                    this.selectedItem = null;
                    this.search(null, D)
                }
            }, this.options.delay)
        },
        search: function(E, D) {
            E = E != null ? E : this._value();
            this.term = this._value();
            if (E.length < this.options.minLength) {
                return this.close(D)
            }
            if (this._trigger("search", D) === false) {
                return
            }
            return this._search(E)
        },
        _search: function(D) {
            this.pending++;
            this.element.addClass("ui-autocomplete-loading");
            this.cancelSearch = false;
            this.source({
                term: D
            }, this._response())
        },
        _response: function() {
            var E = this,
                D = ++C;
            return function(F) {
                if (D === C) {
                    E.__response(F)
                }
                E.pending--;
                if (!E.pending) {
                    E.element.removeClass("ui-autocomplete-loading")
                }
            }
        },
        __response: function(D) {
            if (D) {
                D = this._normalize(D)
            }
            this._trigger("response", null, {
                content: D
            });
            if (!this.options.disabled && D && D.length && !this.cancelSearch) {
                this._suggest(D);
                this._trigger("open")
            } else {
                this._close()
            }
        },
        close: function(D) {
            this.cancelSearch = true;
            this._close(D)
        },
        _close: function(D) {
            if (this.menu.element.is(":visible")) {
                this.menu.element.hide();
                this.menu.blur();
                this.isNewMenu = true;
                this._trigger("close", D)
            }
        },
        _change: function(D) {
            if (this.previous !== this._value()) {
                this._trigger("change", D, {
                    item: this.selectedItem
                })
            }
        },
        _normalize: function(D) {
            if (D.length && D[0].label && D[0].value) {
                return D
            }
            return A.map(D, function(E) {
                if (typeof E === "string") {
                    return {
                        label: E,
                        value: E
                    }
                }
                return A.extend({
                    label: E.label || E.value,
                    value: E.value || E.label
                }, E)
            })
        },
        _suggest: function(D) {
            var E = this.menu.element.empty();
            this._renderMenu(E, D);
            this.isNewMenu = true;
            this.menu.refresh();
            E.show();
            this._resizeMenu();
            E.position(A.extend({
                of: this.element
            }, this.options.position));
            if (this.options.autoFocus) {
                this.menu.next()
            }
        },
        _resizeMenu: function() {
            var D = this.menu.element;
            D.outerWidth(Math.max(D.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(E, D) {
            var F = this;
            A.each(D, function(G, H) {
                F._renderItemData(E, H)
            })
        },
        _renderItemData: function(D, E) {
            return this._renderItem(D, E).data("ui-autocomplete-item", E)
        },
        _renderItem: function(D, E) {
            return A("<li>").append(A("<a>").text(E.label)).appendTo(D)
        },
        _move: function(E, D) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, D);
                return
            }
            if (this.menu.isFirstItem() && /^previous/.test(E) || this.menu.isLastItem() && /^next/.test(E)) {
                this._value(this.term);
                this.menu.blur();
                return
            }
            this.menu[E](D)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(E, D) {
            if (!this.isMultiLine || this.menu.element.is(":visible")) {
                this._move(E, D);
                D.preventDefault()
            }
        }
    });
    A.extend(A.ui.autocomplete, {
        escapeRegex: function(D) {
            return D.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(F, D) {
            var E = new RegExp(A.ui.autocomplete.escapeRegex(D), "i");
            return A.grep(F, function(G) {
                return E.test(G.label || G.value || G)
            })
        }
    });
    A.widget("ui.autocomplete", A.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(D) {
                    return D + (D > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(E) {
            var D;
            this._superApply(arguments);
            if (this.options.disabled || this.cancelSearch) {
                return
            }
            if (E && E.length) {
                D = this.options.messages.results(E.length)
            } else {
                D = this.options.messages.noResults
            }
            this.liveRegion.text(D)
        }
    })
}(jQuery));
(function(F, B) {
    var K, E, A, H, I = "ui-button ui-widget ui-state-default ui-corner-all",
        C = "ui-state-hover ui-state-active ",
        G = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        J = function() {
            var L = F(this);
            setTimeout(function() {
                L.find(":ui-button").button("refresh")
            }, 1)
        },
        D = function(M) {
            var L = M.name,
                N = M.form,
                O = F([]);
            if (L) {
                L = L.replace(/'/g, "\\'");
                if (N) {
                    O = F(N).find("[name='" + L + "']")
                } else {
                    O = F("[name='" + L + "']", M.ownerDocument).filter(function() {
                        return !this.form
                    })
                }
            }
            return O
        };
    F.widget("ui.button", {
        version: "1.10.3",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: true,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, J);
            if (typeof this.options.disabled !== "boolean") {
                this.options.disabled = !!this.element.prop("disabled")
            } else {
                this.element.prop("disabled", this.options.disabled)
            }
            this._determineButtonType();
            this.hasTitle = !!this.buttonElement.attr("title");
            var O = this,
                M = this.options,
                P = this.type === "checkbox" || this.type === "radio",
                N = !P ? "ui-state-active" : "",
                L = "ui-state-focus";
            if (M.label === null) {
                M.label = (this.type === "input" ? this.buttonElement.val() : this.buttonElement.html())
            }
            this._hoverable(this.buttonElement);
            this.buttonElement.addClass(I).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                if (M.disabled) {
                    return
                }
                if (this === K) {
                    F(this).addClass("ui-state-active")
                }
            }).bind("mouseleave" + this.eventNamespace, function() {
                if (M.disabled) {
                    return
                }
                F(this).removeClass(N)
            }).bind("click" + this.eventNamespace, function(Q) {
                if (M.disabled) {
                    Q.preventDefault();
                    Q.stopImmediatePropagation()
                }
            });
            this.element.bind("focus" + this.eventNamespace, function() {
                O.buttonElement.addClass(L)
            }).bind("blur" + this.eventNamespace, function() {
                O.buttonElement.removeClass(L)
            });
            if (P) {
                this.element.bind("change" + this.eventNamespace, function() {
                    if (H) {
                        return
                    }
                    O.refresh()
                });
                this.buttonElement.bind("mousedown" + this.eventNamespace, function(Q) {
                    if (M.disabled) {
                        return
                    }
                    H = false;
                    E = Q.pageX;
                    A = Q.pageY
                }).bind("mouseup" + this.eventNamespace, function(Q) {
                    if (M.disabled) {
                        return
                    }
                    if (E !== Q.pageX || A !== Q.pageY) {
                        H = true
                    }
                })
            }
            if (this.type === "checkbox") {
                this.buttonElement.bind("click" + this.eventNamespace, function() {
                    if (M.disabled || H) {
                        return false
                    }
                })
            } else {
                if (this.type === "radio") {
                    this.buttonElement.bind("click" + this.eventNamespace, function() {
                        if (M.disabled || H) {
                            return false
                        }
                        F(this).addClass("ui-state-active");
                        O.buttonElement.attr("aria-pressed", "true");
                        var Q = O.element[0];
                        D(Q).not(Q).map(function() {
                            return F(this).button("widget")[0]
                        }).removeClass("ui-state-active").attr("aria-pressed", "false")
                    })
                } else {
                    this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                        if (M.disabled) {
                            return false
                        }
                        F(this).addClass("ui-state-active");
                        K = this;
                        O.document.one("mouseup", function() {
                            K = null
                        })
                    }).bind("mouseup" + this.eventNamespace, function() {
                        if (M.disabled) {
                            return false
                        }
                        F(this).removeClass("ui-state-active")
                    }).bind("keydown" + this.eventNamespace, function(Q) {
                        if (M.disabled) {
                            return false
                        }
                        if (Q.keyCode === F.ui.keyCode.SPACE || Q.keyCode === F.ui.keyCode.ENTER) {
                            F(this).addClass("ui-state-active")
                        }
                    }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                        F(this).removeClass("ui-state-active")
                    });
                    if (this.buttonElement.is("a")) {
                        this.buttonElement.keyup(function(Q) {
                            if (Q.keyCode === F.ui.keyCode.SPACE) {
                                F(this).click()
                            }
                        })
                    }
                }
            }
            this._setOption("disabled", M.disabled);
            this._resetButton()
        },
        _determineButtonType: function() {
            var L, N, M;
            if (this.element.is("[type=checkbox]")) {
                this.type = "checkbox"
            } else {
                if (this.element.is("[type=radio]")) {
                    this.type = "radio"
                } else {
                    if (this.element.is("input")) {
                        this.type = "input"
                    } else {
                        this.type = "button"
                    }
                }
            }
            if (this.type === "checkbox" || this.type === "radio") {
                L = this.element.parents().last();
                N = "label[for='" + this.element.attr("id") + "']";
                this.buttonElement = L.find(N);
                if (!this.buttonElement.length) {
                    L = L.length ? L.siblings() : this.element.siblings();
                    this.buttonElement = L.filter(N);
                    if (!this.buttonElement.length) {
                        this.buttonElement = L.find(N)
                    }
                }
                this.element.addClass("ui-helper-hidden-accessible");
                M = this.element.is(":checked");
                if (M) {
                    this.buttonElement.addClass("ui-state-active")
                }
                this.buttonElement.prop("aria-pressed", M)
            } else {
                this.buttonElement = this.element
            }
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible");
            this.buttonElement.removeClass(I + " " + C + " " + G).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
            if (!this.hasTitle) {
                this.buttonElement.removeAttr("title")
            }
        },
        _setOption: function(L, M) {
            this._super(L, M);
            if (L === "disabled") {
                if (M) {
                    this.element.prop("disabled", true)
                } else {
                    this.element.prop("disabled", false)
                }
                return
            }
            this._resetButton()
        },
        refresh: function() {
            var L = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            if (L !== this.options.disabled) {
                this._setOption("disabled", L)
            }
            if (this.type === "radio") {
                D(this.element[0]).each(function() {
                    if (F(this).is(":checked")) {
                        F(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true")
                    } else {
                        F(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                    }
                })
            } else {
                if (this.type === "checkbox") {
                    if (this.element.is(":checked")) {
                        this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true")
                    } else {
                        this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false")
                    }
                }
            }
        },
        _resetButton: function() {
            if (this.type === "input") {
                if (this.options.label) {
                    this.element.val(this.options.label)
                }
                return
            }
            var P = this.buttonElement.removeClass(G),
                N = F("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(P.empty()).text(),
                M = this.options.icons,
                L = M.primary && M.secondary,
                O = [];
            if (M.primary || M.secondary) {
                if (this.options.text) {
                    O.push("ui-button-text-icon" + (L ? "s" : (M.primary ? "-primary" : "-secondary")))
                }
                if (M.primary) {
                    P.prepend("<span class='ui-button-icon-primary ui-icon " + M.primary + "'></span>")
                }
                if (M.secondary) {
                    P.append("<span class='ui-button-icon-secondary ui-icon " + M.secondary + "'></span>")
                }
                if (!this.options.text) {
                    O.push(L ? "ui-button-icons-only" : "ui-button-icon-only");
                    if (!this.hasTitle) {
                        P.attr("title", F.trim(N))
                    }
                }
            } else {
                O.push("ui-button-text-only")
            }
            P.addClass(O.join(" "))
        }
    });
    F.widget("ui.buttonset", {
        version: "1.10.3",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(L, M) {
            if (L === "disabled") {
                this.buttons.button("option", L, M)
            }
            this._super(L, M)
        },
        refresh: function() {
            var L = this.element.css("direction") === "rtl";
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return F(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(L ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(L ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset");
            this.buttons.map(function() {
                return F(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
}(jQuery));
(function(E, G) {
    E.extend(E.ui, {
        datepicker: {
            version: "1.10.3"
        }
    });
    var F = "datepicker",
        C;

    function B() {
        this._curInst = null;
        this._keyEvent = false;
        this._disabledInputs = [];
        this._datepickerShowing = false;
        this._inDialog = false;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ""
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: false,
            hideIfNoPrevNext: false,
            navigationAsDateFormat: false,
            gotoCurrent: false,
            changeMonth: false,
            changeYear: false,
            yearRange: "c-10:c+10",
            showOtherMonths: false,
            selectOtherMonths: false,
            showWeek: false,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: true,
            showButtonPanel: false,
            autoSize: false,
            disabled: false
        };
        E.extend(this._defaults, this.regional[""]);
        this.dpDiv = D(E("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }
    E.extend(B.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(H) {
            A(this._defaults, H || {});
            return this
        },
        _attachDatepicker: function(K, H) {
            var L, J, I;
            L = K.nodeName.toLowerCase();
            J = (L === "div" || L === "span");
            if (!K.id) {
                this.uuid += 1;
                K.id = "dp" + this.uuid
            }
            I = this._newInst(E(K), J);
            I.settings = E.extend({}, H || {});
            if (L === "input") {
                this._connectDatepicker(K, I)
            } else {
                if (J) {
                    this._inlineDatepicker(K, I)
                }
            }
        },
        _newInst: function(I, H) {
            var J = I[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: J,
                input: I,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: H,
                dpDiv: (!H ? this.dpDiv : D(E("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))
            }
        },
        _connectDatepicker: function(J, I) {
            var H = E(J);
            I.append = E([]);
            I.trigger = E([]);
            if (H.hasClass(this.markerClassName)) {
                return
            }
            this._attachments(H, I);
            H.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);
            this._autoSize(I);
            E.data(J, F, I);
            if (I.settings.disabled) {
                this._disableDatepicker(J)
            }
        },
        _attachments: function(J, M) {
            var I, L, H, N = this._get(M, "appendText"),
                K = this._get(M, "isRTL");
            if (M.append) {
                M.append.remove()
            }
            if (N) {
                M.append = E("<span class='" + this._appendClass + "'>" + N + "</span>");
                J[K ? "before" : "after"](M.append)
            }
            J.unbind("focus", this._showDatepicker);
            if (M.trigger) {
                M.trigger.remove()
            }
            I = this._get(M, "showOn");
            if (I === "focus" || I === "both") {
                J.focus(this._showDatepicker)
            }
            if (I === "button" || I === "both") {
                L = this._get(M, "buttonText");
                H = this._get(M, "buttonImage");
                M.trigger = E(this._get(M, "buttonImageOnly") ? E("<img/>").addClass(this._triggerClass).attr({
                    src: H,
                    alt: L,
                    title: L
                }) : E("<button type='button'></button>").addClass(this._triggerClass).html(!H ? L : E("<img/>").attr({
                    src: H,
                    alt: L,
                    title: L
                })));
                J[K ? "before" : "after"](M.trigger);
                M.trigger.click(function() {
                    if (E.datepicker._datepickerShowing && E.datepicker._lastInput === J[0]) {
                        E.datepicker._hideDatepicker()
                    } else {
                        if (E.datepicker._datepickerShowing && E.datepicker._lastInput !== J[0]) {
                            E.datepicker._hideDatepicker();
                            E.datepicker._showDatepicker(J[0])
                        } else {
                            E.datepicker._showDatepicker(J[0])
                        }
                    }
                    return false
                })
            }
        },
        _autoSize: function(N) {
            if (this._get(N, "autoSize") && !N.inline) {
                var K, I, J, M, L = new Date(2009, 12 - 1, 20),
                    H = this._get(N, "dateFormat");
                if (H.match(/[DM]/)) {
                    K = function(O) {
                        I = 0;
                        J = 0;
                        for (M = 0; M < O.length; M++) {
                            if (O[M].length > I) {
                                I = O[M].length;
                                J = M
                            }
                        }
                        return J
                    };
                    L.setMonth(K(this._get(N, (H.match(/MM/) ? "monthNames" : "monthNamesShort"))));
                    L.setDate(K(this._get(N, (H.match(/DD/) ? "dayNames" : "dayNamesShort"))) + 20 - L.getDay())
                }
                N.input.attr("size", this._formatDate(N, L).length)
            }
        },
        _inlineDatepicker: function(I, H) {
            var J = E(I);
            if (J.hasClass(this.markerClassName)) {
                return
            }
            J.addClass(this.markerClassName).append(H.dpDiv);
            E.data(I, F, H);
            this._setDate(H, this._getDefaultDate(H), true);
            this._updateDatepicker(H);
            this._updateAlternate(H);
            if (H.settings.disabled) {
                this._disableDatepicker(I)
            }
            H.dpDiv.css("display", "block")
        },
        _dialogDatepicker: function(O, I, M, J, N) {
            var H, R, L, Q, P, K = this._dialogInst;
            if (!K) {
                this.uuid += 1;
                H = "dp" + this.uuid;
                this._dialogInput = E("<input type='text' id='" + H + "' style='position: absolute; top: -100px; width: 0px;'/>");
                this._dialogInput.keydown(this._doKeyDown);
                E("body").append(this._dialogInput);
                K = this._dialogInst = this._newInst(this._dialogInput, false);
                K.settings = {};
                E.data(this._dialogInput[0], F, K)
            }
            A(K.settings, J || {});
            I = (I && I.constructor === Date ? this._formatDate(K, I) : I);
            this._dialogInput.val(I);
            this._pos = (N ? (N.length ? N : [N.pageX, N.pageY]) : null);
            if (!this._pos) {
                R = document.documentElement.clientWidth;
                L = document.documentElement.clientHeight;
                Q = document.documentElement.scrollLeft || document.body.scrollLeft;
                P = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [(R / 2) - 100 + Q, (L / 2) - 150 + P]
            }
            this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px");
            K.settings.onSelect = M;
            this._inDialog = true;
            this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]);
            if (E.blockUI) {
                E.blockUI(this.dpDiv)
            }
            E.data(this._dialogInput[0], F, K);
            return this
        },
        _destroyDatepicker: function(J) {
            var K, H = E(J),
                I = E.data(J, F);
            if (!H.hasClass(this.markerClassName)) {
                return
            }
            K = J.nodeName.toLowerCase();
            E.removeData(J, F);
            if (K === "input") {
                I.append.remove();
                I.trigger.remove();
                H.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)
            } else {
                if (K === "div" || K === "span") {
                    H.removeClass(this.markerClassName).empty()
                }
            }
        },
        _enableDatepicker: function(K) {
            var L, J, H = E(K),
                I = E.data(K, F);
            if (!H.hasClass(this.markerClassName)) {
                return
            }
            L = K.nodeName.toLowerCase();
            if (L === "input") {
                K.disabled = false;
                I.trigger.filter("button").each(function() {
                    this.disabled = false
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })
            } else {
                if (L === "div" || L === "span") {
                    J = H.children("." + this._inlineClass);
                    J.children().removeClass("ui-state-disabled");
                    J.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", false)
                }
            }
            this._disabledInputs = E.map(this._disabledInputs, function(M) {
                return (M === K ? null : M)
            })
        },
        _disableDatepicker: function(K) {
            var L, J, H = E(K),
                I = E.data(K, F);
            if (!H.hasClass(this.markerClassName)) {
                return
            }
            L = K.nodeName.toLowerCase();
            if (L === "input") {
                K.disabled = true;
                I.trigger.filter("button").each(function() {
                    this.disabled = true
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })
            } else {
                if (L === "div" || L === "span") {
                    J = H.children("." + this._inlineClass);
                    J.children().addClass("ui-state-disabled");
                    J.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", true)
                }
            }
            this._disabledInputs = E.map(this._disabledInputs, function(M) {
                return (M === K ? null : M)
            });
            this._disabledInputs[this._disabledInputs.length] = K
        },
        _isDisabledDatepicker: function(I) {
            if (!I) {
                return false
            }
            for (var H = 0; H < this._disabledInputs.length; H++) {
                if (this._disabledInputs[H] === I) {
                    return true
                }
            }
            return false
        },
        _getInst: function(I) {
            try {
                return E.data(I, F)
            } catch (H) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(N, I, M) {
            var J, H, L, O, K = this._getInst(N);
            if (arguments.length === 2 && typeof I === "string") {
                return (I === "defaults" ? E.extend({}, E.datepicker._defaults) : (K ? (I === "all" ? E.extend({}, K.settings) : this._get(K, I)) : null))
            }
            J = I || {};
            if (typeof I === "string") {
                J = {};
                J[I] = M
            }
            if (K) {
                if (this._curInst === K) {
                    this._hideDatepicker()
                }
                H = this._getDateDatepicker(N, true);
                L = this._getMinMaxDate(K, "min");
                O = this._getMinMaxDate(K, "max");
                A(K.settings, J);
                if (L !== null && J.dateFormat !== G && J.minDate === G) {
                    K.settings.minDate = this._formatDate(K, L)
                }
                if (O !== null && J.dateFormat !== G && J.maxDate === G) {
                    K.settings.maxDate = this._formatDate(K, O)
                }
                if ("disabled" in J) {
                    if (J.disabled) {
                        this._disableDatepicker(N)
                    } else {
                        this._enableDatepicker(N)
                    }
                }
                this._attachments(E(N), K);
                this._autoSize(K);
                this._setDate(K, H);
                this._updateAlternate(K);
                this._updateDatepicker(K)
            }
        },
        _changeDatepicker: function(J, H, I) {
            this._optionDatepicker(J, H, I)
        },
        _refreshDatepicker: function(I) {
            var H = this._getInst(I);
            if (H) {
                this._updateDatepicker(H)
            }
        },
        _setDateDatepicker: function(J, H) {
            var I = this._getInst(J);
            if (I) {
                this._setDate(I, H);
                this._updateDatepicker(I);
                this._updateAlternate(I)
            }
        },
        _getDateDatepicker: function(J, H) {
            var I = this._getInst(J);
            if (I && !I.inline) {
                this._setDateFromField(I, H)
            }
            return (I ? this._getDate(I) : null)
        },
        _doKeyDown: function(K) {
            var I, H, M, L = E.datepicker._getInst(K.target),
                N = true,
                J = L.dpDiv.is(".ui-datepicker-rtl");
            L._keyEvent = true;
            if (E.datepicker._datepickerShowing) {
                switch (K.keyCode) {
                    case 9:
                        E.datepicker._hideDatepicker();
                        N = false;
                        break;
                    case 13:
                        M = E("td." + E.datepicker._dayOverClass + ":not(." + E.datepicker._currentClass + ")", L.dpDiv);
                        if (M[0]) {
                            E.datepicker._selectDay(K.target, L.selectedMonth, L.selectedYear, M[0])
                        }
                        I = E.datepicker._get(L, "onSelect");
                        if (I) {
                            H = E.datepicker._formatDate(L);
                            I.apply((L.input ? L.input[0] : null), [H, L])
                        } else {
                            E.datepicker._hideDatepicker()
                        }
                        return false;
                    case 27:
                        E.datepicker._hideDatepicker();
                        break;
                    case 33:
                        E.datepicker._adjustDate(K.target, (K.ctrlKey ? -E.datepicker._get(L, "stepBigMonths") : -E.datepicker._get(L, "stepMonths")), "M");
                        break;
                    case 34:
                        E.datepicker._adjustDate(K.target, (K.ctrlKey ? +E.datepicker._get(L, "stepBigMonths") : +E.datepicker._get(L, "stepMonths")), "M");
                        break;
                    case 35:
                        if (K.ctrlKey || K.metaKey) {
                            E.datepicker._clearDate(K.target)
                        }
                        N = K.ctrlKey || K.metaKey;
                        break;
                    case 36:
                        if (K.ctrlKey || K.metaKey) {
                            E.datepicker._gotoToday(K.target)
                        }
                        N = K.ctrlKey || K.metaKey;
                        break;
                    case 37:
                        if (K.ctrlKey || K.metaKey) {
                            E.datepicker._adjustDate(K.target, (J ? +1 : -1), "D")
                        }
                        N = K.ctrlKey || K.metaKey;
                        if (K.originalEvent.altKey) {
                            E.datepicker._adjustDate(K.target, (K.ctrlKey ? -E.datepicker._get(L, "stepBigMonths") : -E.datepicker._get(L, "stepMonths")), "M")
                        }
                        break;
                    case 38:
                        if (K.ctrlKey || K.metaKey) {
                            E.datepicker._adjustDate(K.target, -7, "D")
                        }
                        N = K.ctrlKey || K.metaKey;
                        break;
                    case 39:
                        if (K.ctrlKey || K.metaKey) {
                            E.datepicker._adjustDate(K.target, (J ? -1 : +1), "D")
                        }
                        N = K.ctrlKey || K.metaKey;
                        if (K.originalEvent.altKey) {
                            E.datepicker._adjustDate(K.target, (K.ctrlKey ? +E.datepicker._get(L, "stepBigMonths") : +E.datepicker._get(L, "stepMonths")), "M")
                        }
                        break;
                    case 40:
                        if (K.ctrlKey || K.metaKey) {
                            E.datepicker._adjustDate(K.target, +7, "D")
                        }
                        N = K.ctrlKey || K.metaKey;
                        break;
                    default:
                        N = false
                }
            } else {
                if (K.keyCode === 36 && K.ctrlKey) {
                    E.datepicker._showDatepicker(this)
                } else {
                    N = false
                }
            }
            if (N) {
                K.preventDefault();
                K.stopPropagation()
            }
        },
        _doKeyPress: function(J) {
            var I, H, K = E.datepicker._getInst(J.target);
            if (E.datepicker._get(K, "constrainInput")) {
                I = E.datepicker._possibleChars(E.datepicker._get(K, "dateFormat"));
                H = String.fromCharCode(J.charCode == null ? J.keyCode : J.charCode);
                return J.ctrlKey || J.metaKey || (H < " " || !I || I.indexOf(H) > -1)
            }
        },
        _doKeyUp: function(J) {
            var H, K = E.datepicker._getInst(J.target);
            if (K.input.val() !== K.lastVal) {
                try {
                    H = E.datepicker.parseDate(E.datepicker._get(K, "dateFormat"), (K.input ? K.input.val() : null), E.datepicker._getFormatConfig(K));
                    if (H) {
                        E.datepicker._setDateFromField(K);
                        E.datepicker._updateAlternate(K);
                        E.datepicker._updateDatepicker(K)
                    }
                } catch (I) {}
            }
            return true
        },
        _showDatepicker: function(I) {
            I = I.target || I;
            if (I.nodeName.toLowerCase() !== "input") {
                I = E("input", I.parentNode)[0]
            }
            if (E.datepicker._isDisabledDatepicker(I) || E.datepicker._lastInput === I) {
                return
            }
            var K, O, J, M, N, H, L;
            K = E.datepicker._getInst(I);
            if (E.datepicker._curInst && E.datepicker._curInst !== K) {
                E.datepicker._curInst.dpDiv.stop(true, true);
                if (K && E.datepicker._datepickerShowing) {
                    E.datepicker._hideDatepicker(E.datepicker._curInst.input[0])
                }
            }
            O = E.datepicker._get(K, "beforeShow");
            J = O ? O.apply(I, [I, K]) : {};
            if (J === false) {
                return
            }
            A(K.settings, J);
            K.lastVal = null;
            E.datepicker._lastInput = I;
            E.datepicker._setDateFromField(K);
            if (E.datepicker._inDialog) {
                I.value = ""
            }
            if (!E.datepicker._pos) {
                E.datepicker._pos = E.datepicker._findPos(I);
                E.datepicker._pos[1] += I.offsetHeight
            }
            M = false;
            E(I).parents().each(function() {
                M |= E(this).css("position") === "fixed";
                return !M
            });
            N = {
                left: E.datepicker._pos[0],
                top: E.datepicker._pos[1]
            };
            E.datepicker._pos = null;
            K.dpDiv.empty();
            K.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            });
            E.datepicker._updateDatepicker(K);
            N = E.datepicker._checkOffset(K, N, M);
            K.dpDiv.css({
                position: (E.datepicker._inDialog && E.blockUI ? "static" : (M ? "fixed" : "absolute")),
                display: "none",
                left: N.left + "px",
                top: N.top + "px"
            });
            if (!K.inline) {
                H = E.datepicker._get(K, "showAnim");
                L = E.datepicker._get(K, "duration");
                K.dpDiv.zIndex(E(I).zIndex() + 1);
                E.datepicker._datepickerShowing = true;
                if (E.effects && E.effects.effect[H]) {
                    K.dpDiv.show(H, E.datepicker._get(K, "showOptions"), L)
                } else {
                    K.dpDiv[H || "show"](H ? L : null)
                }
                if (E.datepicker._shouldFocusInput(K)) {
                    K.input.focus()
                }
                E.datepicker._curInst = K
            }
        },
        _updateDatepicker: function(J) {
            this.maxRows = 4;
            C = J;
            J.dpDiv.empty().append(this._generateHTML(J));
            this._attachHandlers(J);
            J.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var L, H = this._getNumberOfMonths(J),
                K = H[1],
                I = 17;
            J.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            if (K > 1) {
                J.dpDiv.addClass("ui-datepicker-multi-" + K).css("width", (I * K) + "em")
            }
            J.dpDiv[(H[0] !== 1 || H[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            J.dpDiv[(this._get(J, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            if (J === E.datepicker._curInst && E.datepicker._datepickerShowing && E.datepicker._shouldFocusInput(J)) {
                J.input.focus()
            }
            if (J.yearshtml) {
                L = J.yearshtml;
                setTimeout(function() {
                    if (L === J.yearshtml && J.yearshtml) {
                        J.dpDiv.find("select.ui-datepicker-year:first").replaceWith(J.yearshtml)
                    }
                    L = J.yearshtml = null
                }, 0)
            }
        },
        _shouldFocusInput: function(H) {
            return H.input && H.input.is(":visible") && !H.input.is(":disabled") && !H.input.is(":focus")
        },
        _checkOffset: function(M, K, J) {
            var L = M.dpDiv.outerWidth(),
                P = M.dpDiv.outerHeight(),
                O = M.input ? M.input.outerWidth() : 0,
                H = M.input ? M.input.outerHeight() : 0,
                N = document.documentElement.clientWidth + (J ? 0 : E(document).scrollLeft()),
                I = document.documentElement.clientHeight + (J ? 0 : E(document).scrollTop());
            K.left -= (this._get(M, "isRTL") ? (L - O) : 0);
            K.left -= (J && K.left === M.input.offset().left) ? E(document).scrollLeft() : 0;
            K.top -= (J && K.top === (M.input.offset().top + H)) ? E(document).scrollTop() : 0;
            K.left -= Math.min(K.left, (K.left + L > N && N > L) ? Math.abs(K.left + L - N) : 0);
            K.top -= Math.min(K.top, (K.top + P > I && I > P) ? Math.abs(P + H) : 0);
            return K
        },
        _findPos: function(K) {
            var H, J = this._getInst(K),
                I = this._get(J, "isRTL");
            while (K && (K.type === "hidden" || K.nodeType !== 1 || E.expr.filters.hidden(K))) {
                K = K[I ? "previousSibling" : "nextSibling"]
            }
            H = E(K).offset();
            return [H.left, H.top]
        },
        _hideDatepicker: function(J) {
            var I, M, L, H, K = this._curInst;
            if (!K || (J && K !== E.data(J, F))) {
                return
            }
            if (this._datepickerShowing) {
                I = this._get(K, "showAnim");
                M = this._get(K, "duration");
                L = function() {
                    E.datepicker._tidyDialog(K)
                };
                if (E.effects && (E.effects.effect[I] || E.effects[I])) {
                    K.dpDiv.hide(I, E.datepicker._get(K, "showOptions"), M, L)
                } else {
                    K.dpDiv[(I === "slideDown" ? "slideUp" : (I === "fadeIn" ? "fadeOut" : "hide"))]((I ? M : null), L)
                }
                if (!I) {
                    L()
                }
                this._datepickerShowing = false;
                H = this._get(K, "onClose");
                if (H) {
                    H.apply((K.input ? K.input[0] : null), [(K.input ? K.input.val() : ""), K])
                }
                this._lastInput = null;
                if (this._inDialog) {
                    this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px"
                    });
                    if (E.blockUI) {
                        E.unblockUI();
                        E("body").append(this.dpDiv)
                    }
                }
                this._inDialog = false
            }
        },
        _tidyDialog: function(H) {
            H.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(I) {
            if (!E.datepicker._curInst) {
                return
            }
            var H = E(I.target),
                J = E.datepicker._getInst(H[0]);
            if (((H[0].id !== E.datepicker._mainDivId && H.parents("#" + E.datepicker._mainDivId).length === 0 && !H.hasClass(E.datepicker.markerClassName) && !H.closest("." + E.datepicker._triggerClass).length && E.datepicker._datepickerShowing && !(E.datepicker._inDialog && E.blockUI))) || (H.hasClass(E.datepicker.markerClassName) && E.datepicker._curInst !== J)) {
                E.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(L, K, J) {
            var I = E(L),
                H = this._getInst(I[0]);
            if (this._isDisabledDatepicker(I[0])) {
                return
            }
            this._adjustInstDate(H, K + (J === "M" ? this._get(H, "showCurrentAtPos") : 0), J);
            this._updateDatepicker(H)
        },
        _gotoToday: function(K) {
            var H, J = E(K),
                I = this._getInst(J[0]);
            if (this._get(I, "gotoCurrent") && I.currentDay) {
                I.selectedDay = I.currentDay;
                I.drawMonth = I.selectedMonth = I.currentMonth;
                I.drawYear = I.selectedYear = I.currentYear
            } else {
                H = new Date();
                I.selectedDay = H.getDate();
                I.drawMonth = I.selectedMonth = H.getMonth();
                I.drawYear = I.selectedYear = H.getFullYear()
            }
            this._notifyChange(I);
            this._adjustDate(J)
        },
        _selectMonthYear: function(L, H, K) {
            var J = E(L),
                I = this._getInst(J[0]);
            I["selected" + (K === "M" ? "Month" : "Year")] = I["draw" + (K === "M" ? "Month" : "Year")] = parseInt(H.options[H.selectedIndex].value, 10);
            this._notifyChange(I);
            this._adjustDate(J)
        },
        _selectDay: function(M, K, H, L) {
            var I, J = E(M);
            if (E(L).hasClass(this._unselectableClass) || this._isDisabledDatepicker(J[0])) {
                return
            }
            I = this._getInst(J[0]);
            I.selectedDay = I.currentDay = E("a", L).html();
            I.selectedMonth = I.currentMonth = K;
            I.selectedYear = I.currentYear = H;
            this._selectDate(M, this._formatDate(I, I.currentDay, I.currentMonth, I.currentYear))
        },
        _clearDate: function(I) {
            var H = E(I);
            this._selectDate(H, "")
        },
        _selectDate: function(L, H) {
            var I, K = E(L),
                J = this._getInst(K[0]);
            H = (H != null ? H : this._formatDate(J));
            if (J.input) {
                J.input.val(H)
            }
            this._updateAlternate(J);
            I = this._get(J, "onSelect");
            if (I) {
                I.apply((J.input ? J.input[0] : null), [H, J])
            } else {
                if (J.input) {
                    J.input.trigger("change")
                }
            }
            if (J.inline) {
                this._updateDatepicker(J)
            } else {
                this._hideDatepicker();
                this._lastInput = J.input[0];
                if (typeof(J.input[0]) !== "object") {
                    J.input.focus()
                }
                this._lastInput = null
            }
        },
        _updateAlternate: function(L) {
            var K, J, H, I = this._get(L, "altField");
            if (I) {
                K = this._get(L, "altFormat") || this._get(L, "dateFormat");
                J = this._getDate(L);
                H = this.formatDate(K, J, this._getFormatConfig(L));
                E(I).each(function() {
                    E(this).val(H)
                })
            }
        },
        noWeekends: function(I) {
            var H = I.getDay();
            return [(H > 0 && H < 6), ""]
        },
        iso8601Week: function(H) {
            var I, J = new Date(H.getTime());
            J.setDate(J.getDate() + 4 - (J.getDay() || 7));
            I = J.getTime();
            J.setMonth(0);
            J.setDate(1);
            return Math.floor(Math.round((I - J) / 86400000) / 7) + 1
        },
        parseDate: function(X, S, Z) {
            if (X == null || S == null) {
                throw "Invalid arguments"
            }
            S = (typeof S === "object" ? S.toString() : S + "");
            if (S === "") {
                return null
            }
            var K, U, I, Y = 0,
                N = (Z ? Z.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                J = (typeof N !== "string" ? N : new Date().getFullYear() % 100 + parseInt(N, 10)),
                Q = (Z ? Z.dayNamesShort : null) || this._defaults.dayNamesShort,
                b = (Z ? Z.dayNames : null) || this._defaults.dayNames,
                H = (Z ? Z.monthNamesShort : null) || this._defaults.monthNamesShort,
                L = (Z ? Z.monthNames : null) || this._defaults.monthNames,
                M = -1,
                c = -1,
                W = -1,
                P = -1,
                V = false,
                a, R = function(e) {
                    var f = (K + 1 < X.length && X.charAt(K + 1) === e);
                    if (f) {
                        K++
                    }
                    return f
                },
                d = function(g) {
                    var e = R(g),
                        h = (g === "@" ? 14 : (g === "!" ? 20 : (g === "y" && e ? 4 : (g === "o" ? 3 : 2)))),
                        i = new RegExp("^\\d{1," + h + "}"),
                        f = S.substring(Y).match(i);
                    if (!f) {
                        throw "Missing number at position " + Y
                    }
                    Y += f[0].length;
                    return parseInt(f[0], 10)
                },
                O = function(f, g, i) {
                    var e = -1,
                        h = E.map(R(f) ? i : g, function(l, j) {
                            return [
                                [j, l]
                            ]
                        }).sort(function(k, j) {
                            return -(k[1].length - j[1].length)
                        });
                    E.each(h, function(k, l) {
                        var j = l[1];
                        if (S.substr(Y, j.length).toLowerCase() === j.toLowerCase()) {
                            e = l[0];
                            Y += j.length;
                            return false
                        }
                    });
                    if (e !== -1) {
                        return e + 1
                    } else {
                        throw "Unknown name at position " + Y
                    }
                },
                T = function() {
                    if (S.charAt(Y) !== X.charAt(K)) {
                        throw "Unexpected literal at position " + Y
                    }
                    Y++
                };
            for (K = 0; K < X.length; K++) {
                if (V) {
                    if (X.charAt(K) === "'" && !R("'")) {
                        V = false
                    } else {
                        T()
                    }
                } else {
                    switch (X.charAt(K)) {
                        case "d":
                            W = d("d");
                            break;
                        case "D":
                            O("D", Q, b);
                            break;
                        case "o":
                            P = d("o");
                            break;
                        case "m":
                            c = d("m");
                            break;
                        case "M":
                            c = O("M", H, L);
                            break;
                        case "y":
                            M = d("y");
                            break;
                        case "@":
                            a = new Date(d("@"));
                            M = a.getFullYear();
                            c = a.getMonth() + 1;
                            W = a.getDate();
                            break;
                        case "!":
                            a = new Date((d("!") - this._ticksTo1970) / 10000);
                            M = a.getFullYear();
                            c = a.getMonth() + 1;
                            W = a.getDate();
                            break;
                        case "'":
                            if (R("'")) {
                                T()
                            } else {
                                V = true
                            }
                            break;
                        default:
                            T()
                    }
                }
            }
            if (Y < S.length) {
                I = S.substr(Y);
                if (!/^\s+/.test(I)) {
                    throw "Extra/unparsed characters found in date: " + I
                }
            }
            if (M === -1) {
                M = new Date().getFullYear()
            } else {
                if (M < 100) {
                    M += new Date().getFullYear() - new Date().getFullYear() % 100 + (M <= J ? 0 : -100)
                }
            }
            if (P > -1) {
                c = 1;
                W = P;
                do {
                    U = this._getDaysInMonth(M, c - 1);
                    if (W <= U) {
                        break
                    }
                    c++;
                    W -= U
                } while (true)
            }
            a = this._daylightSavingAdjust(new Date(M, c - 1, W));
            if (a.getFullYear() !== M || a.getMonth() + 1 !== c || a.getDate() !== W) {
                throw "Invalid date"
            }
            return a
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),
        formatDate: function(Q, K, L) {
            if (!K) {
                return ""
            }
            var S, T = (L ? L.dayNamesShort : null) || this._defaults.dayNamesShort,
                I = (L ? L.dayNames : null) || this._defaults.dayNames,
                O = (L ? L.monthNamesShort : null) || this._defaults.monthNamesShort,
                M = (L ? L.monthNames : null) || this._defaults.monthNames,
                R = function(U) {
                    var V = (S + 1 < Q.length && Q.charAt(S + 1) === U);
                    if (V) {
                        S++
                    }
                    return V
                },
                H = function(W, X, U) {
                    var V = "" + X;
                    if (R(W)) {
                        while (V.length < U) {
                            V = "0" + V
                        }
                    }
                    return V
                },
                N = function(U, W, V, X) {
                    return (R(U) ? X[W] : V[W])
                },
                J = "",
                P = false;
            if (K) {
                for (S = 0; S < Q.length; S++) {
                    if (P) {
                        if (Q.charAt(S) === "'" && !R("'")) {
                            P = false
                        } else {
                            J += Q.charAt(S)
                        }
                    } else {
                        switch (Q.charAt(S)) {
                            case "d":
                                J += H("d", K.getDate(), 2);
                                break;
                            case "D":
                                J += N("D", K.getDay(), T, I);
                                break;
                            case "o":
                                J += H("o", Math.round((new Date(K.getFullYear(), K.getMonth(), K.getDate()).getTime() - new Date(K.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                                break;
                            case "m":
                                J += H("m", K.getMonth() + 1, 2);
                                break;
                            case "M":
                                J += N("M", K.getMonth(), O, M);
                                break;
                            case "y":
                                J += (R("y") ? K.getFullYear() : (K.getYear() % 100 < 10 ? "0" : "") + K.getYear() % 100);
                                break;
                            case "@":
                                J += K.getTime();
                                break;
                            case "!":
                                J += K.getTime() * 10000 + this._ticksTo1970;
                                break;
                            case "'":
                                if (R("'")) {
                                    J += "'"
                                } else {
                                    P = true
                                }
                                break;
                            default:
                                J += Q.charAt(S)
                        }
                    }
                }
            }
            return J
        },
        _possibleChars: function(L) {
            var K, J = "",
                I = false,
                H = function(M) {
                    var N = (K + 1 < L.length && L.charAt(K + 1) === M);
                    if (N) {
                        K++
                    }
                    return N
                };
            for (K = 0; K < L.length; K++) {
                if (I) {
                    if (L.charAt(K) === "'" && !H("'")) {
                        I = false
                    } else {
                        J += L.charAt(K)
                    }
                } else {
                    switch (L.charAt(K)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            J += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            if (H("'")) {
                                J += "'"
                            } else {
                                I = true
                            }
                            break;
                        default:
                            J += L.charAt(K)
                    }
                }
            }
            return J
        },
        _get: function(I, H) {
            return I.settings[H] !== G ? I.settings[H] : this._defaults[H]
        },
        _setDateFromField: function(M, J) {
            if (M.input.val() === M.lastVal) {
                return
            }
            var H = this._get(M, "dateFormat"),
                O = M.lastVal = M.input ? M.input.val() : null,
                N = this._getDefaultDate(M),
                I = N,
                K = this._getFormatConfig(M);
            try {
                I = this.parseDate(H, O, K) || N
            } catch (L) {
                O = (J ? "" : O)
            }
            M.selectedDay = I.getDate();
            M.drawMonth = M.selectedMonth = I.getMonth();
            M.drawYear = M.selectedYear = I.getFullYear();
            M.currentDay = (O ? I.getDate() : 0);
            M.currentMonth = (O ? I.getMonth() : 0);
            M.currentYear = (O ? I.getFullYear() : 0);
            this._adjustInstDate(M)
        },
        _getDefaultDate: function(H) {
            return this._restrictMinMax(H, this._determineDate(H, this._get(H, "defaultDate"), new Date()))
        },
        _determineDate: function(L, I, M) {
            var K = function(O) {
                    var N = new Date();
                    N.setDate(N.getDate() + O);
                    return N
                },
                J = function(U) {
                    try {
                        return E.datepicker.parseDate(E.datepicker._get(L, "dateFormat"), U, E.datepicker._getFormatConfig(L))
                    } catch (T) {}
                    var O = (U.toLowerCase().match(/^c/) ? E.datepicker._getDate(L) : null) || new Date(),
                        P = O.getFullYear(),
                        S = O.getMonth(),
                        N = O.getDate(),
                        R = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                        Q = R.exec(U);
                    while (Q) {
                        switch (Q[2] || "d") {
                            case "d":
                            case "D":
                                N += parseInt(Q[1], 10);
                                break;
                            case "w":
                            case "W":
                                N += parseInt(Q[1], 10) * 7;
                                break;
                            case "m":
                            case "M":
                                S += parseInt(Q[1], 10);
                                N = Math.min(N, E.datepicker._getDaysInMonth(P, S));
                                break;
                            case "y":
                            case "Y":
                                P += parseInt(Q[1], 10);
                                N = Math.min(N, E.datepicker._getDaysInMonth(P, S));
                                break
                        }
                        Q = R.exec(U)
                    }
                    return new Date(P, S, N)
                },
                H = (I == null || I === "" ? M : (typeof I === "string" ? J(I) : (typeof I === "number" ? (isNaN(I) ? M : K(I)) : new Date(I.getTime()))));
            H = (H && H.toString() === "Invalid Date" ? M : H);
            if (H) {
                H.setHours(0);
                H.setMinutes(0);
                H.setSeconds(0);
                H.setMilliseconds(0)
            }
            return this._daylightSavingAdjust(H)
        },
        _daylightSavingAdjust: function(H) {
            if (!H) {
                return null
            }
            H.setHours(H.getHours() > 12 ? H.getHours() + 2 : 0);
            return H
        },
        _setDate: function(N, K, M) {
            var H = !K,
                J = N.selectedMonth,
                L = N.selectedYear,
                I = this._restrictMinMax(N, this._determineDate(N, K, new Date()));
            N.selectedDay = N.currentDay = I.getDate();
            N.drawMonth = N.selectedMonth = N.currentMonth = I.getMonth();
            N.drawYear = N.selectedYear = N.currentYear = I.getFullYear();
            if ((J !== N.selectedMonth || L !== N.selectedYear) && !M) {
                this._notifyChange(N)
            }
            this._adjustInstDate(N);
            if (N.input) {
                N.input.val(H ? "" : this._formatDate(N))
            }
        },
        _getDate: function(I) {
            var H = (!I.currentYear || (I.input && I.input.val() === "") ? null : this._daylightSavingAdjust(new Date(I.currentYear, I.currentMonth, I.currentDay)));
            return H
        },
        _attachHandlers: function(I) {
            var H = this._get(I, "stepMonths"),
                J = "#" + I.id.replace(/\\\\/g, "\\");
            I.dpDiv.find("[data-handler]").map(function() {
                var K = {
                    prev: function() {
                        E.datepicker._adjustDate(J, -H, "M")
                    },
                    next: function() {
                        E.datepicker._adjustDate(J, +H, "M")
                    },
                    hide: function() {
                        E.datepicker._hideDatepicker()
                    },
                    today: function() {
                        E.datepicker._gotoToday(J)
                    },
                    selectDay: function() {
                        E.datepicker._selectDay(J, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
                        return false
                    },
                    selectMonth: function() {
                        E.datepicker._selectMonthYear(J, this, "M");
                        return false
                    },
                    selectYear: function() {
                        E.datepicker._selectMonthYear(J, this, "Y");
                        return false
                    }
                };
                E(this).bind(this.getAttribute("data-event"), K[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(x) {
            var a, Z, s, k, L, AB, v, o, AE, i, AI, S, U, T, I, AA, Q, d, AD, q, AJ, c, h, R, M, t, m, p, n, P, f, V, w, z, K, AC, AG, l, W, y = new Date(),
                b = this._daylightSavingAdjust(new Date(y.getFullYear(), y.getMonth(), y.getDate())),
                AF = this._get(x, "isRTL"),
                AH = this._get(x, "showButtonPanel"),
                r = this._get(x, "hideIfNoPrevNext"),
                g = this._get(x, "navigationAsDateFormat"),
                X = this._getNumberOfMonths(x),
                O = this._get(x, "showCurrentAtPos"),
                j = this._get(x, "stepMonths"),
                e = (X[0] !== 1 || X[1] !== 1),
                J = this._daylightSavingAdjust((!x.currentDay ? new Date(9999, 9, 9) : new Date(x.currentYear, x.currentMonth, x.currentDay))),
                N = this._getMinMaxDate(x, "min"),
                Y = this._getMinMaxDate(x, "max"),
                H = x.drawMonth - O,
                u = x.drawYear;
            if (H < 0) {
                H += 12;
                u--
            }
            if (Y) {
                a = this._daylightSavingAdjust(new Date(Y.getFullYear(), Y.getMonth() - (X[0] * X[1]) + 1, Y.getDate()));
                a = (N && a < N ? N : a);
                while (this._daylightSavingAdjust(new Date(u, H, 1)) > a) {
                    H--;
                    if (H < 0) {
                        H = 11;
                        u--
                    }
                }
            }
            x.drawMonth = H;
            x.drawYear = u;
            Z = this._get(x, "prevText");
            Z = (!g ? Z : this.formatDate(Z, this._daylightSavingAdjust(new Date(u, H - j, 1)), this._getFormatConfig(x)));
            s = (this._canAdjustMonth(x, -1, u, H) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + Z + "'><span class='ui-icon ui-icon-circle-triangle-" + (AF ? "e" : "w") + "'>" + Z + "</span></a>" : (r ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + Z + "'><span class='ui-icon ui-icon-circle-triangle-" + (AF ? "e" : "w") + "'>" + Z + "</span></a>"));
            k = this._get(x, "nextText");
            k = (!g ? k : this.formatDate(k, this._daylightSavingAdjust(new Date(u, H + j, 1)), this._getFormatConfig(x)));
            L = (this._canAdjustMonth(x, +1, u, H) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + k + "'><span class='ui-icon ui-icon-circle-triangle-" + (AF ? "w" : "e") + "'>" + k + "</span></a>" : (r ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + k + "'><span class='ui-icon ui-icon-circle-triangle-" + (AF ? "w" : "e") + "'>" + k + "</span></a>"));
            AB = this._get(x, "currentText");
            v = (this._get(x, "gotoCurrent") && x.currentDay ? J : b);
            AB = (!g ? AB : this.formatDate(AB, v, this._getFormatConfig(x)));
            o = (!x.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(x, "closeText") + "</button>" : "");
            AE = (AH) ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (AF ? o : "") + (this._isInRange(x, v) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + AB + "</button>" : "") + (AF ? "" : o) + "</div>" : "";
            i = parseInt(this._get(x, "firstDay"), 10);
            i = (isNaN(i) ? 0 : i);
            AI = this._get(x, "showWeek");
            S = this._get(x, "dayNames");
            U = this._get(x, "dayNamesMin");
            T = this._get(x, "monthNames");
            I = this._get(x, "monthNamesShort");
            AA = this._get(x, "beforeShowDay");
            Q = this._get(x, "showOtherMonths");
            d = this._get(x, "selectOtherMonths");
            AD = this._getDefaultDate(x);
            q = "";
            AJ;
            for (c = 0; c < X[0]; c++) {
                h = "";
                this.maxRows = 4;
                for (R = 0; R < X[1]; R++) {
                    M = this._daylightSavingAdjust(new Date(u, H, x.selectedDay));
                    t = " ui-corner-all";
                    m = "";
                    if (e) {
                        m += "<div class='ui-datepicker-group";
                        if (X[1] > 1) {
                            switch (R) {
                                case 0:
                                    m += " ui-datepicker-group-first";
                                    t = " ui-corner-" + (AF ? "right" : "left");
                                    break;
                                case X[1] - 1:
                                    m += " ui-datepicker-group-last";
                                    t = " ui-corner-" + (AF ? "left" : "right");
                                    break;
                                default:
                                    m += " ui-datepicker-group-middle";
                                    t = "";
                                    break
                            }
                        }
                        m += "'>"
                    }
                    m += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + t + "'>" + (/all|left/.test(t) && c === 0 ? (AF ? L : s) : "") + (/all|right/.test(t) && c === 0 ? (AF ? s : L) : "") + this._generateMonthYearHeader(x, H, u, N, Y, c > 0 || R > 0, T, I) + "</div><table class='ui-datepicker-calendar'><thead><tr>";
                    p = (AI ? "<th class='ui-datepicker-week-col'>" + this._get(x, "weekHeader") + "</th>" : "");
                    for (AJ = 0; AJ < 7; AJ++) {
                        n = (AJ + i) % 7;
                        p += "<th" + ((AJ + i + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + S[n] + "'>" + U[n] + "</span></th>"
                    }
                    m += p + "</tr></thead><tbody>";
                    P = this._getDaysInMonth(u, H);
                    if (u === x.selectedYear && H === x.selectedMonth) {
                        x.selectedDay = Math.min(x.selectedDay, P)
                    }
                    f = (this._getFirstDayOfMonth(u, H) - i + 7) % 7;
                    V = Math.ceil((f + P) / 7);
                    w = (e ? this.maxRows > V ? this.maxRows : V : V);
                    this.maxRows = w;
                    z = this._daylightSavingAdjust(new Date(u, H, 1 - f));
                    for (K = 0; K < w; K++) {
                        m += "<tr>";
                        AC = (!AI ? "" : "<td class='ui-datepicker-week-col'>" + this._get(x, "calculateWeek")(z) + "</td>");
                        for (AJ = 0; AJ < 7; AJ++) {
                            AG = (AA ? AA.apply((x.input ? x.input[0] : null), [z]) : [true, ""]);
                            l = (z.getMonth() !== H);
                            W = (l && !d) || !AG[0] || (N && z < N) || (Y && z > Y);
                            AC += "<td class='" + ((AJ + i + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (l ? " ui-datepicker-other-month" : "") + ((z.getTime() === M.getTime() && H === x.selectedMonth && x._keyEvent) || (AD.getTime() === z.getTime() && AD.getTime() === M.getTime()) ? " " + this._dayOverClass : "") + (W ? " " + this._unselectableClass + " ui-state-disabled" : "") + (l && !Q ? "" : " " + AG[1] + (z.getTime() === J.getTime() ? " " + this._currentClass : "") + (z.getTime() === b.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!l || Q) && AG[2] ? " title='" + AG[2].replace(/'/g, "&#39;") + "'" : "") + (W ? "" : " data-handler='selectDay' data-event='click' data-month='" + z.getMonth() + "' data-year='" + z.getFullYear() + "'") + ">" + (l && !Q ? "&#xa0;" : (W ? "<span class='ui-state-default'>" + z.getDate() + "</span>" : "<a class='ui-state-default" + (z.getTime() === b.getTime() ? " ui-state-highlight" : "") + (z.getTime() === J.getTime() ? " ui-state-active" : "") + (l ? " ui-priority-secondary" : "") + "' href='#'>" + z.getDate() + "</a>")) + "</td>";
                            z.setDate(z.getDate() + 1);
                            z = this._daylightSavingAdjust(z)
                        }
                        m += AC + "</tr>"
                    }
                    H++;
                    if (H > 11) {
                        H = 0;
                        u++
                    }
                    m += "</tbody></table>" + (e ? "</div>" + ((X[0] > 0 && R === X[1] - 1) ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
                    h += m
                }
                q += h
            }
            q += AE;
            x._keyEvent = false;
            return q
        },
        _generateMonthYearHeader: function(L, J, T, N, R, U, P, H) {
            var Y, I, Z, W, M, V, S, O, K = this._get(L, "changeMonth"),
                a = this._get(L, "changeYear"),
                b = this._get(L, "showMonthAfterYear"),
                Q = "<div class='ui-datepicker-title'>",
                X = "";
            if (U || !K) {
                X += "<span class='ui-datepicker-month'>" + P[J] + "</span>"
            } else {
                Y = (N && N.getFullYear() === T);
                I = (R && R.getFullYear() === T);
                X += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
                for (Z = 0; Z < 12; Z++) {
                    if ((!Y || Z >= N.getMonth()) && (!I || Z <= R.getMonth())) {
                        X += "<option value='" + Z + "'" + (Z === J ? " selected='selected'" : "") + ">" + H[Z] + "</option>"
                    }
                }
                X += "</select>"
            }
            if (!b) {
                Q += X + (U || !(K && a) ? "&#xa0;" : "")
            }
            if (!L.yearshtml) {
                L.yearshtml = "";
                if (U || !a) {
                    Q += "<span class='ui-datepicker-year'>" + T + "</span>"
                } else {
                    W = this._get(L, "yearRange").split(":");
                    M = new Date().getFullYear();
                    V = function(d) {
                        var c = (d.match(/c[+\-].*/) ? T + parseInt(d.substring(1), 10) : (d.match(/[+\-].*/) ? M + parseInt(d, 10) : parseInt(d, 10)));
                        return (isNaN(c) ? M : c)
                    };
                    S = V(W[0]);
                    O = Math.max(S, V(W[1] || ""));
                    S = (N ? Math.max(S, N.getFullYear()) : S);
                    O = (R ? Math.min(O, R.getFullYear()) : O);
                    L.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                    for (; S <= O; S++) {
                        L.yearshtml += "<option value='" + S + "'" + (S === T ? " selected='selected'" : "") + ">" + S + "</option>"
                    }
                    L.yearshtml += "</select>";
                    Q += L.yearshtml;
                    L.yearshtml = null
                }
            }
            Q += this._get(L, "yearSuffix");
            if (b) {
                Q += (U || !(K && a) ? "&#xa0;" : "") + X
            }
            Q += "</div>";
            return Q
        },
        _adjustInstDate: function(K, N, M) {
            var J = K.drawYear + (M === "Y" ? N : 0),
                L = K.drawMonth + (M === "M" ? N : 0),
                H = Math.min(K.selectedDay, this._getDaysInMonth(J, L)) + (M === "D" ? N : 0),
                I = this._restrictMinMax(K, this._daylightSavingAdjust(new Date(J, L, H)));
            K.selectedDay = I.getDate();
            K.drawMonth = K.selectedMonth = I.getMonth();
            K.drawYear = K.selectedYear = I.getFullYear();
            if (M === "M" || M === "Y") {
                this._notifyChange(K)
            }
        },
        _restrictMinMax: function(K, I) {
            var J = this._getMinMaxDate(K, "min"),
                L = this._getMinMaxDate(K, "max"),
                H = (J && I < J ? J : I);
            return (L && H > L ? L : H)
        },
        _notifyChange: function(I) {
            var H = this._get(I, "onChangeMonthYear");
            if (H) {
                H.apply((I.input ? I.input[0] : null), [I.selectedYear, I.selectedMonth + 1, I])
            }
        },
        _getNumberOfMonths: function(I) {
            var H = this._get(I, "numberOfMonths");
            return (H == null ? [1, 1] : (typeof H === "number" ? [1, H] : H))
        },
        _getMinMaxDate: function(I, H) {
            return this._determineDate(I, this._get(I, H + "Date"), null)
        },
        _getDaysInMonth: function(H, I) {
            return 32 - this._daylightSavingAdjust(new Date(H, I, 32)).getDate()
        },
        _getFirstDayOfMonth: function(H, I) {
            return new Date(H, I, 1).getDay()
        },
        _canAdjustMonth: function(K, M, J, L) {
            var H = this._getNumberOfMonths(K),
                I = this._daylightSavingAdjust(new Date(J, L + (M < 0 ? M : H[0] * H[1]), 1));
            if (M < 0) {
                I.setDate(this._getDaysInMonth(I.getFullYear(), I.getMonth()))
            }
            return this._isInRange(K, I)
        },
        _isInRange: function(L, J) {
            var I, O, K = this._getMinMaxDate(L, "min"),
                H = this._getMinMaxDate(L, "max"),
                P = null,
                M = null,
                N = this._get(L, "yearRange");
            if (N) {
                I = N.split(":");
                O = new Date().getFullYear();
                P = parseInt(I[0], 10);
                M = parseInt(I[1], 10);
                if (I[0].match(/[+\-].*/)) {
                    P += O
                }
                if (I[1].match(/[+\-].*/)) {
                    M += O
                }
            }
            return ((!K || J.getTime() >= K.getTime()) && (!H || J.getTime() <= H.getTime()) && (!P || J.getFullYear() >= P) && (!M || J.getFullYear() <= M))
        },
        _getFormatConfig: function(H) {
            var I = this._get(H, "shortYearCutoff");
            I = (typeof I !== "string" ? I : new Date().getFullYear() % 100 + parseInt(I, 10));
            return {
                shortYearCutoff: I,
                dayNamesShort: this._get(H, "dayNamesShort"),
                dayNames: this._get(H, "dayNames"),
                monthNamesShort: this._get(H, "monthNamesShort"),
                monthNames: this._get(H, "monthNames")
            }
        },
        _formatDate: function(K, H, L, J) {
            if (!H) {
                K.currentDay = K.selectedDay;
                K.currentMonth = K.selectedMonth;
                K.currentYear = K.selectedYear
            }
            var I = (H ? (typeof H === "object" ? H : this._daylightSavingAdjust(new Date(J, L, H))) : this._daylightSavingAdjust(new Date(K.currentYear, K.currentMonth, K.currentDay)));
            return this.formatDate(this._get(K, "dateFormat"), I, this._getFormatConfig(K))
        }
    });

    function D(I) {
        var H = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return I.delegate(H, "mouseout", function() {
            E(this).removeClass("ui-state-hover");
            if (this.className.indexOf("ui-datepicker-prev") !== -1) {
                E(this).removeClass("ui-datepicker-prev-hover")
            }
            if (this.className.indexOf("ui-datepicker-next") !== -1) {
                E(this).removeClass("ui-datepicker-next-hover")
            }
        }).delegate(H, "mouseover", function() {
            if (!E.datepicker._isDisabledDatepicker(C.inline ? I.parent()[0] : C.input[0])) {
                E(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
                E(this).addClass("ui-state-hover");
                if (this.className.indexOf("ui-datepicker-prev") !== -1) {
                    E(this).addClass("ui-datepicker-prev-hover")
                }
                if (this.className.indexOf("ui-datepicker-next") !== -1) {
                    E(this).addClass("ui-datepicker-next-hover")
                }
            }
        })
    }

    function A(J, I) {
        E.extend(J, I);
        for (var H in I) {
            if (I[H] == null) {
                J[H] = I[H]
            }
        }
        return J
    }
    E.fn.datepicker = function(I) {
        if (!this.length) {
            return this
        }
        if (!E.datepicker.initialized) {
            E(document).mousedown(E.datepicker._checkExternalClick);
            E.datepicker.initialized = true
        }
        if (E("#" + E.datepicker._mainDivId).length === 0) {
            E("body").append(E.datepicker.dpDiv)
        }
        var H = Array.prototype.slice.call(arguments, 1);
        if (typeof I === "string" && (I === "isDisabled" || I === "getDate" || I === "widget")) {
            return E.datepicker["_" + I + "Datepicker"].apply(E.datepicker, [this[0]].concat(H))
        }
        if (I === "option" && arguments.length === 2 && typeof arguments[1] === "string") {
            return E.datepicker["_" + I + "Datepicker"].apply(E.datepicker, [this[0]].concat(H))
        }
        return this.each(function() {
            typeof I === "string" ? E.datepicker["_" + I + "Datepicker"].apply(E.datepicker, [this].concat(H)) : E.datepicker._attachDatepicker(this, I)
        })
    };
    E.datepicker = new B();
    E.datepicker.initialized = false;
    E.datepicker.uuid = new Date().getTime();
    E.datepicker.version = "1.10.3"
})(jQuery);
(function(C, D) {
    var A = {
            buttons: true,
            height: true,
            maxHeight: true,
            maxWidth: true,
            minHeight: true,
            minWidth: true,
            width: true
        },
        B = {
            maxHeight: true,
            maxWidth: true,
            minHeight: true,
            minWidth: true
        };
    C.widget("ui.dialog", {
        version: "1.10.3",
        options: {
            appendTo: "body",
            autoOpen: true,
            buttons: [],
            closeOnEscape: true,
            closeText: "close",
            dialogClass: "",
            draggable: true,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: false,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(F) {
                    var E = C(this).css(F).offset().top;
                    if (E < 0) {
                        C(this).css("top", F.top - E)
                    }
                }
            },
            resizable: true,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            };
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            };
            this.originalTitle = this.element.attr("title");
            this.options.title = this.options.title || this.originalTitle;
            this._createWrapper();
            this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
            this._createTitlebar();
            this._createButtonPane();
            if (this.options.draggable && C.fn.draggable) {
                this._makeDraggable()
            }
            if (this.options.resizable && C.fn.resizable) {
                this._makeResizable()
            }
            this._isOpen = false
        },
        _init: function() {
            if (this.options.autoOpen) {
                this.open()
            }
        },
        _appendTo: function() {
            var E = this.options.appendTo;
            if (E && (E.jquery || E.nodeType)) {
                return C(E)
            }
            return this.document.find(E || "body").eq(0)
        },
        _destroy: function() {
            var F, E = this.originalPosition;
            this._destroyOverlay();
            this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
            this.uiDialog.stop(true, true).remove();
            if (this.originalTitle) {
                this.element.attr("title", this.originalTitle)
            }
            F = E.parent.children().eq(E.index);
            if (F.length && F[0] !== this.element[0]) {
                F.before(this.element)
            } else {
                E.parent.append(this.element)
            }
        },
        widget: function() {
            return this.uiDialog
        },
        disable: C.noop,
        enable: C.noop,
        close: function(F) {
            var E = this;
            if (!this._isOpen || this._trigger("beforeClose", F) === false) {
                return
            }
            this._isOpen = false;
            this._destroyOverlay();
            if (!this.opener.filter(":focusable").focus().length) {
                C(this.document[0].activeElement).blur()
            }
            this._hide(this.uiDialog, this.options.hide, function() {
                E._trigger("close", F)
            })
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(G, E) {
            var F = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
            if (F && !E) {
                this._trigger("focus", G)
            }
            return F
        },
        open: function() {
            var E = this;
            if (this._isOpen) {
                if (this._moveToTop()) {
                    this._focusTabbable()
                }
                return
            }
            this._isOpen = true;
            this.opener = C(this.document[0].activeElement);
            this._size();
            this._position();
            this._createOverlay();
            this._moveToTop(null, true);
            this._show(this.uiDialog, this.options.show, function() {
                E._focusTabbable();
                E._trigger("focus")
            });
            this._trigger("open")
        },
        _focusTabbable: function() {
            var E = this.element.find("[autofocus]");
            if (!E.length) {
                E = this.element.find(":tabbable")
            }
            if (!E.length) {
                E = this.uiDialogButtonPane.find(":tabbable")
            }
            if (!E.length) {
                E = this.uiDialogTitlebarClose.filter(":tabbable")
            }
            if (!E.length) {
                E = this.uiDialog
            }
            E.eq(0).focus()
        },
        _keepFocus: function(E) {
            function F() {
                var H = this.document[0].activeElement,
                    G = this.uiDialog[0] === H || C.contains(this.uiDialog[0], H);
                if (!G) {
                    this._focusTabbable()
                }
            }
            E.preventDefault();
            F.call(this);
            this._delay(F)
        },
        _createWrapper: function() {
            this.uiDialog = C("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo());
            this._on(this.uiDialog, {
                keydown: function(G) {
                    if (this.options.closeOnEscape && !G.isDefaultPrevented() && G.keyCode && G.keyCode === C.ui.keyCode.ESCAPE) {
                        G.preventDefault();
                        this.close(G);
                        return
                    }
                    if (G.keyCode !== C.ui.keyCode.TAB) {
                        return
                    }
                    var F = this.uiDialog.find(":tabbable"),
                        H = F.filter(":first"),
                        E = F.filter(":last");
                    if ((G.target === E[0] || G.target === this.uiDialog[0]) && !G.shiftKey) {
                        H.focus(1);
                        G.preventDefault()
                    } else {
                        if ((G.target === H[0] || G.target === this.uiDialog[0]) && G.shiftKey) {
                            E.focus(1);
                            G.preventDefault()
                        }
                    }
                },
                mousedown: function(E) {
                    if (this._moveToTop(E)) {
                        this._focusTabbable()
                    }
                }
            });
            if (!this.element.find("[aria-describedby]").length) {
                this.uiDialog.attr({
                    "aria-describedby": this.element.uniqueId().attr("id")
                })
            }
        },
        _createTitlebar: function() {
            var E;
            this.uiDialogTitlebar = C("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
            this._on(this.uiDialogTitlebar, {
                mousedown: function(F) {
                    if (!C(F.target).closest(".ui-dialog-titlebar-close")) {
                        this.uiDialog.focus()
                    }
                }
            });
            this.uiDialogTitlebarClose = C("<button></button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: false
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
            this._on(this.uiDialogTitlebarClose, {
                click: function(F) {
                    F.preventDefault();
                    this.close(F)
                }
            });
            E = C("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
            this._title(E);
            this.uiDialog.attr({
                "aria-labelledby": E.attr("id")
            })
        },
        _title: function(E) {
            if (!this.options.title) {
                E.html("&#160;")
            }
            E.text(this.options.title)
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = C("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
            this.uiButtonSet = C("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
            this._createButtons()
        },
        _createButtons: function() {
            var F = this,
                E = this.options.buttons;
            this.uiDialogButtonPane.remove();
            this.uiButtonSet.empty();
            if (C.isEmptyObject(E) || (C.isArray(E) && !E.length)) {
                this.uiDialog.removeClass("ui-dialog-buttons");
                return
            }
            C.each(E, function(G, H) {
                var I, J;
                H = C.isFunction(H) ? {
                    click: H,
                    text: G
                } : H;
                H = C.extend({
                    type: "button"
                }, H);
                I = H.click;
                H.click = function() {
                    I.apply(F.element[0], arguments)
                };
                J = {
                    icons: H.icons,
                    text: H.showText
                };
                delete H.icons;
                delete H.showText;
                C("<button></button>", H).button(J).appendTo(F.uiButtonSet)
            });
            this.uiDialog.addClass("ui-dialog-buttons");
            this.uiDialogButtonPane.appendTo(this.uiDialog)
        },
        _makeDraggable: function() {
            var G = this,
                F = this.options;

            function E(H) {
                return {
                    position: H.position,
                    offset: H.offset
                }
            }
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(H, I) {
                    C(this).addClass("ui-dialog-dragging");
                    G._blockFrames();
                    G._trigger("dragStart", H, E(I))
                },
                drag: function(H, I) {
                    G._trigger("drag", H, E(I))
                },
                stop: function(H, I) {
                    F.position = [I.position.left - G.document.scrollLeft(), I.position.top - G.document.scrollTop()];
                    C(this).removeClass("ui-dialog-dragging");
                    G._unblockFrames();
                    G._trigger("dragStop", H, E(I))
                }
            })
        },
        _makeResizable: function() {
            var J = this,
                H = this.options,
                I = H.resizable,
                E = this.uiDialog.css("position"),
                G = typeof I === "string" ? I : "n,e,s,w,se,sw,ne,nw";

            function F(K) {
                return {
                    originalPosition: K.originalPosition,
                    originalSize: K.originalSize,
                    position: K.position,
                    size: K.size
                }
            }
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: H.maxWidth,
                maxHeight: H.maxHeight,
                minWidth: H.minWidth,
                minHeight: this._minHeight(),
                handles: G,
                start: function(K, L) {
                    C(this).addClass("ui-dialog-resizing");
                    J._blockFrames();
                    J._trigger("resizeStart", K, F(L))
                },
                resize: function(K, L) {
                    J._trigger("resize", K, F(L))
                },
                stop: function(K, L) {
                    H.height = C(this).height();
                    H.width = C(this).width();
                    C(this).removeClass("ui-dialog-resizing");
                    J._unblockFrames();
                    J._trigger("resizeStop", K, F(L))
                }
            }).css("position", E)
        },
        _minHeight: function() {
            var E = this.options;
            return E.height === "auto" ? E.minHeight : Math.min(E.minHeight, E.height)
        },
        _position: function() {
            var E = this.uiDialog.is(":visible");
            if (!E) {
                this.uiDialog.show()
            }
            this.uiDialog.position(this.options.position);
            if (!E) {
                this.uiDialog.hide()
            }
        },
        _setOptions: function(G) {
            var H = this,
                F = false,
                E = {};
            C.each(G, function(I, J) {
                H._setOption(I, J);
                if (I in A) {
                    F = true
                }
                if (I in B) {
                    E[I] = J
                }
            });
            if (F) {
                this._size();
                this._position()
            }
            if (this.uiDialog.is(":data(ui-resizable)")) {
                this.uiDialog.resizable("option", E)
            }
        },
        _setOption: function(G, H) {
            var F, I, E = this.uiDialog;
            if (G === "dialogClass") {
                E.removeClass(this.options.dialogClass).addClass(H)
            }
            if (G === "disabled") {
                return
            }
            this._super(G, H);
            if (G === "appendTo") {
                this.uiDialog.appendTo(this._appendTo())
            }
            if (G === "buttons") {
                this._createButtons()
            }
            if (G === "closeText") {
                this.uiDialogTitlebarClose.button({
                    label: "" + H
                })
            }
            if (G === "draggable") {
                F = E.is(":data(ui-draggable)");
                if (F && !H) {
                    E.draggable("destroy")
                }
                if (!F && H) {
                    this._makeDraggable()
                }
            }
            if (G === "position") {
                this._position()
            }
            if (G === "resizable") {
                I = E.is(":data(ui-resizable)");
                if (I && !H) {
                    E.resizable("destroy")
                }
                if (I && typeof H === "string") {
                    E.resizable("option", "handles", H)
                }
                if (!I && H !== false) {
                    this._makeResizable()
                }
            }
            if (G === "title") {
                this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))
            }
        },
        _size: function() {
            var E, G, H, F = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            });
            if (F.minWidth > F.width) {
                F.width = F.minWidth
            }
            E = this.uiDialog.css({
                height: "auto",
                width: F.width
            }).outerHeight();
            G = Math.max(0, F.minHeight - E);
            H = typeof F.maxHeight === "number" ? Math.max(0, F.maxHeight - E) : "none";
            if (F.height === "auto") {
                this.element.css({
                    minHeight: G,
                    maxHeight: H,
                    height: "auto"
                })
            } else {
                this.element.height(Math.max(0, F.height - E))
            }
            if (this.uiDialog.is(":data(ui-resizable)")) {
                this.uiDialog.resizable("option", "minHeight", this._minHeight())
            }
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var E = C(this);
                return C("<div>").css({
                    position: "absolute",
                    width: E.outerWidth(),
                    height: E.outerHeight()
                }).appendTo(E.parent()).offset(E.offset())[0]
            })
        },
        _unblockFrames: function() {
            if (this.iframeBlocks) {
                this.iframeBlocks.remove();
                delete this.iframeBlocks
            }
        },
        _allowInteraction: function(E) {
            if (C(E.target).closest(".ui-dialog").length) {
                return true
            }
            return !!C(E.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (!this.options.modal) {
                return
            }
            var F = this,
                E = this.widgetFullName;
            if (!C.ui.dialog.overlayInstances) {
                this._delay(function() {
                    if (C.ui.dialog.overlayInstances) {
                        this.document.bind("focusin.dialog", function(G) {
                            if (!F._allowInteraction(G)) {
                                G.preventDefault();
                                C(".ui-dialog:visible:last .ui-dialog-content").data(E)._focusTabbable()
                            }
                        })
                    }
                })
            }
            this.overlay = C("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
            this._on(this.overlay, {
                mousedown: "_keepFocus"
            });
            C.ui.dialog.overlayInstances++
        },
        _destroyOverlay: function() {
            if (!this.options.modal) {
                return
            }
            if (this.overlay) {
                C.ui.dialog.overlayInstances--;
                if (!C.ui.dialog.overlayInstances) {
                    this.document.unbind("focusin.dialog")
                }
                this.overlay.remove();
                this.overlay = null
            }
        }
    });
    C.ui.dialog.overlayInstances = 0;
    if (C.uiBackCompat !== false) {
        C.widget("ui.dialog", C.ui.dialog, {
            _position: function() {
                var F = this.options.position,
                    G = [],
                    H = [0, 0],
                    E;
                if (F) {
                    if (typeof F === "string" || (typeof F === "object" && "0" in F)) {
                        G = F.split ? F.split(" ") : [F[0], F[1]];
                        if (G.length === 1) {
                            G[1] = G[0]
                        }
                        C.each(["left", "top"], function(J, I) {
                            if (+G[J] === G[J]) {
                                H[J] = G[J];
                                G[J] = I
                            }
                        });
                        F = {
                            my: G[0] + (H[0] < 0 ? H[0] : "+" + H[0]) + " " + G[1] + (H[1] < 0 ? H[1] : "+" + H[1]),
                            at: G.join(" ")
                        }
                    }
                    F = C.extend({}, C.ui.dialog.prototype.options.position, F)
                } else {
                    F = C.ui.dialog.prototype.options.position
                }
                E = this.uiDialog.is(":visible");
                if (!E) {
                    this.uiDialog.show()
                }
                this.uiDialog.position(F);
                if (!E) {
                    this.uiDialog.hide()
                }
            }
        })
    }
}(jQuery));
(function(A, B) {
    A.widget("ui.menu", {
        version: "1.10.3",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element;
            this.mouseHandled = false;
            this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, A.proxy(function(C) {
                if (this.options.disabled) {
                    C.preventDefault()
                }
            }, this));
            if (this.options.disabled) {
                this.element.addClass("ui-state-disabled").attr("aria-disabled", "true")
            }
            this._on({
                "mousedown .ui-menu-item > a": function(C) {
                    C.preventDefault()
                },
                "click .ui-state-disabled > a": function(C) {
                    C.preventDefault()
                },
                "click .ui-menu-item:has(a)": function(C) {
                    var D = A(C.target).closest(".ui-menu-item");
                    if (!this.mouseHandled && D.not(".ui-state-disabled").length) {
                        this.mouseHandled = true;
                        this.select(C);
                        if (D.has(".ui-menu").length) {
                            this.expand(C)
                        } else {
                            if (!this.element.is(":focus")) {
                                this.element.trigger("focus", [true]);
                                if (this.active && this.active.parents(".ui-menu").length === 1) {
                                    clearTimeout(this.timer)
                                }
                            }
                        }
                    }
                },
                "mouseenter .ui-menu-item": function(C) {
                    var D = A(C.currentTarget);
                    D.siblings().children(".ui-state-active").removeClass("ui-state-active");
                    this.focus(C, D)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(E, C) {
                    var D = this.active || this.element.children(".ui-menu-item").eq(0);
                    if (!C) {
                        this.focus(E, D)
                    }
                },
                blur: function(C) {
                    this._delay(function() {
                        if (!A.contains(this.element[0], this.document[0].activeElement)) {
                            this.collapseAll(C)
                        }
                    })
                },
                keydown: "_keydown"
            });
            this.refresh();
            this._on(this.document, {
                click: function(C) {
                    if (!A(C.target).closest(".ui-menu").length) {
                        this.collapseAll(C)
                    }
                    this.mouseHandled = false
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
            this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var C = A(this);
                if (C.data("ui-menu-submenu-carat")) {
                    C.remove()
                }
            });
            this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(I) {
            var D, H, J, G, F, C = true;

            function E(K) {
                return K.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            switch (I.keyCode) {
                case A.ui.keyCode.PAGE_UP:
                    this.previousPage(I);
                    break;
                case A.ui.keyCode.PAGE_DOWN:
                    this.nextPage(I);
                    break;
                case A.ui.keyCode.HOME:
                    this._move("first", "first", I);
                    break;
                case A.ui.keyCode.END:
                    this._move("last", "last", I);
                    break;
                case A.ui.keyCode.UP:
                    this.previous(I);
                    break;
                case A.ui.keyCode.DOWN:
                    this.next(I);
                    break;
                case A.ui.keyCode.LEFT:
                    this.collapse(I);
                    break;
                case A.ui.keyCode.RIGHT:
                    if (this.active && !this.active.is(".ui-state-disabled")) {
                        this.expand(I)
                    }
                    break;
                case A.ui.keyCode.ENTER:
                case A.ui.keyCode.SPACE:
                    this._activate(I);
                    break;
                case A.ui.keyCode.ESCAPE:
                    this.collapse(I);
                    break;
                default:
                    C = false;
                    H = this.previousFilter || "";
                    J = String.fromCharCode(I.keyCode);
                    G = false;
                    clearTimeout(this.filterTimer);
                    if (J === H) {
                        G = true
                    } else {
                        J = H + J
                    }
                    F = new RegExp("^" + E(J), "i");
                    D = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return F.test(A(this).children("a").text())
                    });
                    D = G && D.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : D;
                    if (!D.length) {
                        J = String.fromCharCode(I.keyCode);
                        F = new RegExp("^" + E(J), "i");
                        D = this.activeMenu.children(".ui-menu-item").filter(function() {
                            return F.test(A(this).children("a").text())
                        })
                    }
                    if (D.length) {
                        this.focus(I, D);
                        if (D.length > 1) {
                            this.previousFilter = J;
                            this.filterTimer = this._delay(function() {
                                delete this.previousFilter
                            }, 1000)
                        } else {
                            delete this.previousFilter
                        }
                    } else {
                        delete this.previousFilter
                    }
            }
            if (C) {
                I.preventDefault()
            }
        },
        _activate: function(C) {
            if (!this.active.is(".ui-state-disabled")) {
                if (this.active.children("a[aria-haspopup='true']").length) {
                    this.expand(C)
                } else {
                    this.select(C)
                }
            }
        },
        refresh: function() {
            var E, D = this.options.icons.submenu,
                C = this.element.find(this.options.menus);
            C.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var H = A(this),
                    G = H.prev("a"),
                    F = A("<span>").addClass("ui-menu-icon ui-icon " + D).data("ui-menu-submenu-carat", true);
                G.attr("aria-haspopup", "true").prepend(F);
                H.attr("aria-labelledby", G.attr("id"))
            });
            E = C.add(this.element);
            E.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            });
            E.children(":not(.ui-menu-item)").each(function() {
                var F = A(this);
                if (!/[^\-\u2014\u2013\s]/.test(F.text())) {
                    F.addClass("ui-widget-content ui-menu-divider")
                }
            });
            E.children(".ui-state-disabled").attr("aria-disabled", "true");
            if (this.active && !A.contains(this.element[0], this.active[0])) {
                this.blur()
            }
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(C, D) {
            if (C === "icons") {
                this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(D.submenu)
            }
            this._super(C, D)
        },
        focus: function(D, C) {
            var F, E;
            this.blur(D, D && D.type === "focus");
            this._scrollIntoView(C);
            this.active = C.first();
            E = this.active.children("a").addClass("ui-state-focus");
            if (this.options.role) {
                this.element.attr("aria-activedescendant", E.attr("id"))
            }
            this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");
            if (D && D.type === "keydown") {
                this._close()
            } else {
                this.timer = this._delay(function() {
                    this._close()
                }, this.delay)
            }
            F = C.children(".ui-menu");
            if (F.length && (/^mouse/.test(D.type))) {
                this._startOpening(F)
            }
            this.activeMenu = C.parent();
            this._trigger("focus", D, {
                item: C
            })
        },
        _scrollIntoView: function(F) {
            var I, E, G, C, D, H;
            if (this._hasScroll()) {
                I = parseFloat(A.css(this.activeMenu[0], "borderTopWidth")) || 0;
                E = parseFloat(A.css(this.activeMenu[0], "paddingTop")) || 0;
                G = F.offset().top - this.activeMenu.offset().top - I - E;
                C = this.activeMenu.scrollTop();
                D = this.activeMenu.height();
                H = F.height();
                if (G < 0) {
                    this.activeMenu.scrollTop(C + G)
                } else {
                    if (G + H > D) {
                        this.activeMenu.scrollTop(C + G - D + H)
                    }
                }
            }
        },
        blur: function(D, C) {
            if (!C) {
                clearTimeout(this.timer)
            }
            if (!this.active) {
                return
            }
            this.active.children("a").removeClass("ui-state-focus");
            this.active = null;
            this._trigger("blur", D, {
                item: this.active
            })
        },
        _startOpening: function(C) {
            clearTimeout(this.timer);
            if (C.attr("aria-hidden") !== "true") {
                return
            }
            this.timer = this._delay(function() {
                this._close();
                this._open(C)
            }, this.delay)
        },
        _open: function(D) {
            var C = A.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer);
            this.element.find(".ui-menu").not(D.parents(".ui-menu")).hide().attr("aria-hidden", "true");
            D.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(C)
        },
        collapseAll: function(D, C) {
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                var E = C ? this.element : A(D && D.target).closest(this.element.find(".ui-menu"));
                if (!E.length) {
                    E = this.element
                }
                this._close(E);
                this.blur(D);
                this.activeMenu = E
            }, this.delay)
        },
        _close: function(C) {
            if (!C) {
                C = this.active ? this.active.parent() : this.element
            }
            C.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function(D) {
            var C = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            if (C && C.length) {
                this._close();
                this.focus(D, C)
            }
        },
        expand: function(D) {
            var C = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            if (C && C.length) {
                this._open(C.parent());
                this._delay(function() {
                    this.focus(D, C)
                })
            }
        },
        next: function(C) {
            this._move("next", "first", C)
        },
        previous: function(C) {
            this._move("prev", "last", C)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(F, D, E) {
            var C;
            if (this.active) {
                if (F === "first" || F === "last") {
                    C = this.active[F === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1)
                } else {
                    C = this.active[F + "All"](".ui-menu-item").eq(0)
                }
            }
            if (!C || !C.length || !this.active) {
                C = this.activeMenu.children(".ui-menu-item")[D]()
            }
            this.focus(E, C)
        },
        nextPage: function(E) {
            var D, F, C;
            if (!this.active) {
                this.next(E);
                return
            }
            if (this.isLastItem()) {
                return
            }
            if (this._hasScroll()) {
                F = this.active.offset().top;
                C = this.element.height();
                this.active.nextAll(".ui-menu-item").each(function() {
                    D = A(this);
                    return D.offset().top - F - C < 0
                });
                this.focus(E, D)
            } else {
                this.focus(E, this.activeMenu.children(".ui-menu-item")[!this.active ? "first" : "last"]())
            }
        },
        previousPage: function(E) {
            var D, F, C;
            if (!this.active) {
                this.next(E);
                return
            }
            if (this.isFirstItem()) {
                return
            }
            if (this._hasScroll()) {
                F = this.active.offset().top;
                C = this.element.height();
                this.active.prevAll(".ui-menu-item").each(function() {
                    D = A(this);
                    return D.offset().top - F + C > 0
                });
                this.focus(E, D)
            } else {
                this.focus(E, this.activeMenu.children(".ui-menu-item").first())
            }
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(C) {
            this.active = this.active || A(C.target).closest(".ui-menu-item");
            var D = {
                item: this.active
            };
            if (!this.active.has(".ui-menu").length) {
                this.collapseAll(C, true)
            }
            this._trigger("select", C, D)
        }
    })
}(jQuery));
(function(A, B) {
    A.widget("ui.progressbar", {
        version: "1.10.3",
        options: {
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue();
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min
            });
            this.valueDiv = A("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
            this._refreshValue()
        },
        _destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
            this.valueDiv.remove()
        },
        value: function(C) {
            if (C === B) {
                return this.options.value
            }
            this.options.value = this._constrainedValue(C);
            this._refreshValue()
        },
        _constrainedValue: function(C) {
            if (C === B) {
                C = this.options.value
            }
            this.indeterminate = C === false;
            if (typeof C !== "number") {
                C = 0
            }
            return this.indeterminate ? false : Math.min(this.options.max, Math.max(this.min, C))
        },
        _setOptions: function(C) {
            var D = C.value;
            delete C.value;
            this._super(C);
            this.options.value = this._constrainedValue(D);
            this._refreshValue()
        },
        _setOption: function(C, D) {
            if (C === "max") {
                D = Math.max(this.min, D)
            }
            this._super(C, D)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var D = this.options.value,
                C = this._percentage();
            this.valueDiv.toggle(this.indeterminate || D > this.min).toggleClass("ui-corner-right", D === this.options.max).width(C.toFixed(0) + "%");
            this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate);
            if (this.indeterminate) {
                this.element.removeAttr("aria-valuenow");
                if (!this.overlayDiv) {
                    this.overlayDiv = A("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv)
                }
            } else {
                this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": D
                });
                if (this.overlayDiv) {
                    this.overlayDiv.remove();
                    this.overlayDiv = null
                }
            }
            if (this.oldValue !== D) {
                this.oldValue = D;
                this._trigger("change")
            }
            if (D === this.options.max) {
                this._trigger("complete")
            }
        }
    })
})(jQuery);
(function(B, C) {
    var A = 5;
    B.widget("ui.slider", B.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "slide",
        options: {
            animate: false,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: false,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._keySliding = false;
            this._mouseSliding = false;
            this._animateOff = true;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all");
            this._refresh();
            this._setOption("disabled", this.options.disabled);
            this._animateOff = false
        },
        _refresh: function() {
            this._createRange();
            this._createHandles();
            this._setupEvents();
            this._refreshValue()
        },
        _createHandles: function() {
            var G, D, E = this.options,
                I = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                H = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                F = [];
            D = (E.values && E.values.length) || 1;
            if (I.length > D) {
                I.slice(D).remove();
                I = I.slice(0, D)
            }
            for (G = I.length; G < D; G++) {
                F.push(H)
            }
            this.handles = I.add(B(F.join("")).appendTo(this.element));
            this.handle = this.handles.eq(0);
            this.handles.each(function(J) {
                B(this).data("ui-slider-handle-index", J)
            })
        },
        _createRange: function() {
            var D = this.options,
                E = "";
            if (D.range) {
                if (D.range === true) {
                    if (!D.values) {
                        D.values = [this._valueMin(), this._valueMin()]
                    } else {
                        if (D.values.length && D.values.length !== 2) {
                            D.values = [D.values[0], D.values[0]]
                        } else {
                            if (B.isArray(D.values)) {
                                D.values = D.values.slice(0)
                            }
                        }
                    }
                }
                if (!this.range || !this.range.length) {
                    this.range = B("<div></div>").appendTo(this.element);
                    E = "ui-slider-range ui-widget-header ui-corner-all"
                } else {
                    this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                        left: "",
                        bottom: ""
                    })
                }
                this.range.addClass(E + ((D.range === "min" || D.range === "max") ? " ui-slider-range-" + D.range : ""))
            } else {
                this.range = B([])
            }
        },
        _setupEvents: function() {
            var D = this.handles.add(this.range).filter("a");
            this._off(D);
            this._on(D, this._handleEvents);
            this._hoverable(D);
            this._focusable(D)
        },
        _destroy: function() {
            this.handles.remove();
            this.range.remove();
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
            this._mouseDestroy()
        },
        _mouseCapture: function(F) {
            var J, M, E, H, L, N, I, D, K = this,
                G = this.options;
            if (G.disabled) {
                return false
            }
            this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            };
            this.elementOffset = this.element.offset();
            J = {
                x: F.pageX,
                y: F.pageY
            };
            M = this._normValueFromMouse(J);
            E = this._valueMax() - this._valueMin() + 1;
            this.handles.each(function(O) {
                var P = Math.abs(M - K.values(O));
                if ((E > P) || (E === P && (O === K._lastChangedValue || K.values(O) === G.min))) {
                    E = P;
                    H = B(this);
                    L = O
                }
            });
            N = this._start(F, L);
            if (N === false) {
                return false
            }
            this._mouseSliding = true;
            this._handleIndex = L;
            H.addClass("ui-state-active").focus();
            I = H.offset();
            D = !B(F.target).parents().addBack().is(".ui-slider-handle");
            this._clickOffset = D ? {
                left: 0,
                top: 0
            } : {
                left: F.pageX - I.left - (H.width() / 2),
                top: F.pageY - I.top - (H.height() / 2) - (parseInt(H.css("borderTopWidth"), 10) || 0) - (parseInt(H.css("borderBottomWidth"), 10) || 0) + (parseInt(H.css("marginTop"), 10) || 0)
            };
            if (!this.handles.hasClass("ui-state-hover")) {
                this._slide(F, L, M)
            }
            this._animateOff = true;
            return true
        },
        _mouseStart: function() {
            return true
        },
        _mouseDrag: function(F) {
            var D = {
                    x: F.pageX,
                    y: F.pageY
                },
                E = this._normValueFromMouse(D);
            this._slide(F, this._handleIndex, E);
            return false
        },
        _mouseStop: function(D) {
            this.handles.removeClass("ui-state-active");
            this._mouseSliding = false;
            this._stop(D, this._handleIndex);
            this._change(D, this._handleIndex);
            this._handleIndex = null;
            this._clickOffset = null;
            this._animateOff = false;
            return false
        },
        _detectOrientation: function() {
            this.orientation = (this.options.orientation === "vertical") ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(E) {
            var D, H, G, F, I;
            if (this.orientation === "horizontal") {
                D = this.elementSize.width;
                H = E.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)
            } else {
                D = this.elementSize.height;
                H = E.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)
            }
            G = (H / D);
            if (G > 1) {
                G = 1
            }
            if (G < 0) {
                G = 0
            }
            if (this.orientation === "vertical") {
                G = 1 - G
            }
            F = this._valueMax() - this._valueMin();
            I = this._valueMin() + G * F;
            return this._trimAlignValue(I)
        },
        _start: function(F, E) {
            var D = {
                handle: this.handles[E],
                value: this.value()
            };
            if (this.options.values && this.options.values.length) {
                D.value = this.values(E);
                D.values = this.values()
            }
            return this._trigger("start", F, D)
        },
        _slide: function(H, G, F) {
            var D, E, I;
            if (this.options.values && this.options.values.length) {
                D = this.values(G ? 0 : 1);
                if ((this.options.values.length === 2 && this.options.range === true) && ((G === 0 && F > D) || (G === 1 && F < D))) {
                    F = D
                }
                if (F !== this.values(G)) {
                    E = this.values();
                    E[G] = F;
                    I = this._trigger("slide", H, {
                        handle: this.handles[G],
                        value: F,
                        values: E
                    });
                    D = this.values(G ? 0 : 1);
                    if (I !== false) {
                        this.values(G, F, true)
                    }
                }
            } else {
                if (F !== this.value()) {
                    I = this._trigger("slide", H, {
                        handle: this.handles[G],
                        value: F
                    });
                    if (I !== false) {
                        this.value(F)
                    }
                }
            }
        },
        _stop: function(F, E) {
            var D = {
                handle: this.handles[E],
                value: this.value()
            };
            if (this.options.values && this.options.values.length) {
                D.value = this.values(E);
                D.values = this.values()
            }
            this._trigger("stop", F, D)
        },
        _change: function(F, E) {
            if (!this._keySliding && !this._mouseSliding) {
                var D = {
                    handle: this.handles[E],
                    value: this.value()
                };
                if (this.options.values && this.options.values.length) {
                    D.value = this.values(E);
                    D.values = this.values()
                }
                this._lastChangedValue = E;
                this._trigger("change", F, D)
            }
        },
        value: function(D) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(D);
                this._refreshValue();
                this._change(null, 0);
                return
            }
            return this._value()
        },
        values: function(E, H) {
            var G, D, F;
            if (arguments.length > 1) {
                this.options.values[E] = this._trimAlignValue(H);
                this._refreshValue();
                this._change(null, E);
                return
            }
            if (arguments.length) {
                if (B.isArray(arguments[0])) {
                    G = this.options.values;
                    D = arguments[0];
                    for (F = 0; F < G.length; F += 1) {
                        G[F] = this._trimAlignValue(D[F]);
                        this._change(null, F)
                    }
                    this._refreshValue()
                } else {
                    if (this.options.values && this.options.values.length) {
                        return this._values(E)
                    } else {
                        return this.value()
                    }
                }
            } else {
                return this._values()
            }
        },
        _setOption: function(E, F) {
            var D, G = 0;
            if (E === "range" && this.options.range === true) {
                if (F === "min") {
                    this.options.value = this._values(0);
                    this.options.values = null
                } else {
                    if (F === "max") {
                        this.options.value = this._values(this.options.values.length - 1);
                        this.options.values = null
                    }
                }
            }
            if (B.isArray(this.options.values)) {
                G = this.options.values.length
            }
            B.Widget.prototype._setOption.apply(this, arguments);
            switch (E) {
                case "orientation":
                    this._detectOrientation();
                    this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
                    this._refreshValue();
                    break;
                case "value":
                    this._animateOff = true;
                    this._refreshValue();
                    this._change(null, 0);
                    this._animateOff = false;
                    break;
                case "values":
                    this._animateOff = true;
                    this._refreshValue();
                    for (D = 0; D < G; D += 1) {
                        this._change(null, D)
                    }
                    this._animateOff = false;
                    break;
                case "min":
                case "max":
                    this._animateOff = true;
                    this._refreshValue();
                    this._animateOff = false;
                    break;
                case "range":
                    this._animateOff = true;
                    this._refresh();
                    this._animateOff = false;
                    break
            }
        },
        _value: function() {
            var D = this.options.value;
            D = this._trimAlignValue(D);
            return D
        },
        _values: function(D) {
            var G, F, E;
            if (arguments.length) {
                G = this.options.values[D];
                G = this._trimAlignValue(G);
                return G
            } else {
                if (this.options.values && this.options.values.length) {
                    F = this.options.values.slice();
                    for (E = 0; E < F.length; E += 1) {
                        F[E] = this._trimAlignValue(F[E])
                    }
                    return F
                } else {
                    return []
                }
            }
        },
        _trimAlignValue: function(G) {
            if (G <= this._valueMin()) {
                return this._valueMin()
            }
            if (G >= this._valueMax()) {
                return this._valueMax()
            }
            var D = (this.options.step > 0) ? this.options.step : 1,
                F = (G - this._valueMin()) % D,
                E = G - F;
            if (Math.abs(F) * 2 >= D) {
                E += (F > 0) ? D : (-D)
            }
            return parseFloat(E.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var I, H, L, J, M, G = this.options.range,
                F = this.options,
                K = this,
                E = (!this._animateOff) ? F.animate : false,
                D = {};
            if (this.options.values && this.options.values.length) {
                this.handles.each(function(N) {
                    H = (K.values(N) - K._valueMin()) / (K._valueMax() - K._valueMin()) * 100;
                    D[K.orientation === "horizontal" ? "left" : "bottom"] = H + "%";
                    B(this).stop(1, 1)[E ? "animate" : "css"](D, F.animate);
                    if (K.options.range === true) {
                        if (K.orientation === "horizontal") {
                            if (N === 0) {
                                K.range.stop(1, 1)[E ? "animate" : "css"]({
                                    left: H + "%"
                                }, F.animate)
                            }
                            if (N === 1) {
                                K.range[E ? "animate" : "css"]({
                                    width: (H - I) + "%"
                                }, {
                                    queue: false,
                                    duration: F.animate
                                })
                            }
                        } else {
                            if (N === 0) {
                                K.range.stop(1, 1)[E ? "animate" : "css"]({
                                    bottom: (H) + "%"
                                }, F.animate)
                            }
                            if (N === 1) {
                                K.range[E ? "animate" : "css"]({
                                    height: (H - I) + "%"
                                }, {
                                    queue: false,
                                    duration: F.animate
                                })
                            }
                        }
                    }
                    I = H
                })
            } else {
                L = this.value();
                J = this._valueMin();
                M = this._valueMax();
                H = (M !== J) ? (L - J) / (M - J) * 100 : 0;
                D[this.orientation === "horizontal" ? "left" : "bottom"] = H + "%";
                this.handle.stop(1, 1)[E ? "animate" : "css"](D, F.animate);
                if (G === "min" && this.orientation === "horizontal") {
                    this.range.stop(1, 1)[E ? "animate" : "css"]({
                        width: H + "%"
                    }, F.animate)
                }
                if (G === "max" && this.orientation === "horizontal") {
                    this.range[E ? "animate" : "css"]({
                        width: (100 - H) + "%"
                    }, {
                        queue: false,
                        duration: F.animate
                    })
                }
                if (G === "min" && this.orientation === "vertical") {
                    this.range.stop(1, 1)[E ? "animate" : "css"]({
                        height: H + "%"
                    }, F.animate)
                }
                if (G === "max" && this.orientation === "vertical") {
                    this.range[E ? "animate" : "css"]({
                        height: (100 - H) + "%"
                    }, {
                        queue: false,
                        duration: F.animate
                    })
                }
            }
        },
        _handleEvents: {
            keydown: function(H) {
                var I, F, E, G, D = B(H.target).data("ui-slider-handle-index");
                switch (H.keyCode) {
                    case B.ui.keyCode.HOME:
                    case B.ui.keyCode.END:
                    case B.ui.keyCode.PAGE_UP:
                    case B.ui.keyCode.PAGE_DOWN:
                    case B.ui.keyCode.UP:
                    case B.ui.keyCode.RIGHT:
                    case B.ui.keyCode.DOWN:
                    case B.ui.keyCode.LEFT:
                        H.preventDefault();
                        if (!this._keySliding) {
                            this._keySliding = true;
                            B(H.target).addClass("ui-state-active");
                            I = this._start(H, D);
                            if (I === false) {
                                return
                            }
                        }
                        break
                }
                G = this.options.step;
                if (this.options.values && this.options.values.length) {
                    F = E = this.values(D)
                } else {
                    F = E = this.value()
                }
                switch (H.keyCode) {
                    case B.ui.keyCode.HOME:
                        E = this._valueMin();
                        break;
                    case B.ui.keyCode.END:
                        E = this._valueMax();
                        break;
                    case B.ui.keyCode.PAGE_UP:
                        E = this._trimAlignValue(F + ((this._valueMax() - this._valueMin()) / A));
                        break;
                    case B.ui.keyCode.PAGE_DOWN:
                        E = this._trimAlignValue(F - ((this._valueMax() - this._valueMin()) / A));
                        break;
                    case B.ui.keyCode.UP:
                    case B.ui.keyCode.RIGHT:
                        if (F === this._valueMax()) {
                            return
                        }
                        E = this._trimAlignValue(F + G);
                        break;
                    case B.ui.keyCode.DOWN:
                    case B.ui.keyCode.LEFT:
                        if (F === this._valueMin()) {
                            return
                        }
                        E = this._trimAlignValue(F - G);
                        break
                }
                this._slide(H, D, E)
            },
            click: function(D) {
                D.preventDefault()
            },
            keyup: function(E) {
                var D = B(E.target).data("ui-slider-handle-index");
                if (this._keySliding) {
                    this._keySliding = false;
                    this._stop(E, D);
                    this._change(E, D);
                    B(E.target).removeClass("ui-state-active")
                }
            }
        }
    })
}(jQuery));
(function(B) {
    function A(C) {
        return function() {
            var D = this.element.val();
            C.apply(this, arguments);
            this._refresh();
            if (D !== this.element.val()) {
                this._trigger("change")
            }
        }
    }
    B.widget("ui.spinner", {
        version: "1.10.3",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: true,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max);
            this._setOption("min", this.options.min);
            this._setOption("step", this.options.step);
            this._value(this.element.val(), true);
            this._draw();
            this._on(this._events);
            this._refresh();
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var C = {},
                D = this.element;
            B.each(["min", "max", "step"], function(E, F) {
                var G = D.attr(F);
                if (G !== undefined && G.length) {
                    C[F] = G
                }
            });
            return C
        },
        _events: {
            keydown: function(C) {
                if (this._start(C) && this._keydown(C)) {
                    C.preventDefault()
                }
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(C) {
                if (this.cancelBlur) {
                    delete this.cancelBlur;
                    return
                }
                this._stop();
                this._refresh();
                if (this.previous !== this.element.val()) {
                    this._trigger("change", C)
                }
            },
            mousewheel: function(C, D) {
                if (!D) {
                    return
                }
                if (!this.spinning && !this._start(C)) {
                    return false
                }
                this._spin((D > 0 ? 1 : -1) * this.options.step, C);
                clearTimeout(this.mousewheelTimer);
                this.mousewheelTimer = this._delay(function() {
                    if (this.spinning) {
                        this._stop(C)
                    }
                }, 100);
                C.preventDefault()
            },
            "mousedown .ui-spinner-button": function(D) {
                var C;
                C = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val();

                function E() {
                    var F = this.element[0] === this.document[0].activeElement;
                    if (!F) {
                        this.element.focus();
                        this.previous = C;
                        this._delay(function() {
                            this.previous = C
                        })
                    }
                }
                D.preventDefault();
                E.call(this);
                this.cancelBlur = true;
                this._delay(function() {
                    delete this.cancelBlur;
                    E.call(this)
                });
                if (this._start(D) === false) {
                    return
                }
                this._repeat(null, B(D.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, D)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(C) {
                if (!B(C.currentTarget).hasClass("ui-state-active")) {
                    return
                }
                if (this._start(C) === false) {
                    return false
                }
                this._repeat(null, B(C.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, C)
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function() {
            var C = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton");
            this.buttons = C.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all");
            if (this.buttons.height() > Math.ceil(C.height() * 0.5) && C.height() > 0) {
                C.height(C.height())
            }
            if (this.options.disabled) {
                this.disable()
            }
        },
        _keydown: function(D) {
            var C = this.options,
                E = B.ui.keyCode;
            switch (D.keyCode) {
                case E.UP:
                    this._repeat(null, 1, D);
                    return true;
                case E.DOWN:
                    this._repeat(null, -1, D);
                    return true;
                case E.PAGE_UP:
                    this._repeat(null, C.page, D);
                    return true;
                case E.PAGE_DOWN:
                    this._repeat(null, -C.page, D);
                    return true
            }
            return false
        },
        _uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },
        _buttonHtml: function() {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
        },
        _start: function(C) {
            if (!this.spinning && this._trigger("start", C) === false) {
                return false
            }
            if (!this.counter) {
                this.counter = 1
            }
            this.spinning = true;
            return true
        },
        _repeat: function(D, C, E) {
            D = D || 500;
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                this._repeat(40, C, E)
            }, D);
            this._spin(C * this.options.step, E)
        },
        _spin: function(D, C) {
            var E = this.value() || 0;
            if (!this.counter) {
                this.counter = 1
            }
            E = this._adjustValue(E + D * this._increment(this.counter));
            if (!this.spinning || this._trigger("spin", C, {
                    value: E
                }) !== false) {
                this._value(E);
                this.counter++
            }
        },
        _increment: function(C) {
            var D = this.options.incremental;
            if (D) {
                return B.isFunction(D) ? D(C) : Math.floor(C * C * C / 50000 - C * C / 500 + 17 * C / 200 + 1)
            }
            return 1
        },
        _precision: function() {
            var C = this._precisionOf(this.options.step);
            if (this.options.min !== null) {
                C = Math.max(C, this._precisionOf(this.options.min))
            }
            return C
        },
        _precisionOf: function(D) {
            var E = D.toString(),
                C = E.indexOf(".");
            return C === -1 ? 0 : E.length - C - 1
        },
        _adjustValue: function(E) {
            var D, F, C = this.options;
            D = C.min !== null ? C.min : 0;
            F = E - D;
            F = Math.round(F / C.step) * C.step;
            E = D + F;
            E = parseFloat(E.toFixed(this._precision()));
            if (C.max !== null && E > C.max) {
                return C.max
            }
            if (C.min !== null && E < C.min) {
                return C.min
            }
            return E
        },
        _stop: function(C) {
            if (!this.spinning) {
                return
            }
            clearTimeout(this.timer);
            clearTimeout(this.mousewheelTimer);
            this.counter = 0;
            this.spinning = false;
            this._trigger("stop", C)
        },
        _setOption: function(C, D) {
            if (C === "culture" || C === "numberFormat") {
                var E = this._parse(this.element.val());
                this.options[C] = D;
                this.element.val(this._format(E));
                return
            }
            if (C === "max" || C === "min" || C === "step") {
                if (typeof D === "string") {
                    D = this._parse(D)
                }
            }
            if (C === "icons") {
                this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(D.up);
                this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(D.down)
            }
            this._super(C, D);
            if (C === "disabled") {
                if (D) {
                    this.element.prop("disabled", true);
                    this.buttons.button("disable")
                } else {
                    this.element.prop("disabled", false);
                    this.buttons.button("enable")
                }
            }
        },
        _setOptions: A(function(C) {
            this._super(C);
            this._value(this.element.val())
        }),
        _parse: function(C) {
            if (typeof C === "string" && C !== "") {
                C = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(C, 10, this.options.culture) : +C
            }
            return C === "" || isNaN(C) ? null : C
        },
        _format: function(C) {
            if (C === "") {
                return ""
            }
            return window.Globalize && this.options.numberFormat ? Globalize.format(C, this.options.numberFormat, this.options.culture) : C
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        _value: function(E, C) {
            var D;
            if (E !== "") {
                D = this._parse(E);
                if (D !== null) {
                    if (!C) {
                        D = this._adjustValue(D)
                    }
                    E = this._format(D)
                }
            }
            this.element.val(E);
            this._refresh()
        },
        _destroy: function() {
            this.element.removeClass("ui-spinner-input").prop("disabled", false).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
            this.uiSpinner.replaceWith(this.element)
        },
        stepUp: A(function(C) {
            this._stepUp(C)
        }),
        _stepUp: function(C) {
            if (this._start()) {
                this._spin((C || 1) * this.options.step);
                this._stop()
            }
        },
        stepDown: A(function(C) {
            this._stepDown(C)
        }),
        _stepDown: function(C) {
            if (this._start()) {
                this._spin((C || 1) * -this.options.step);
                this._stop()
            }
        },
        pageUp: A(function(C) {
            this._stepUp((C || 1) * this.options.page)
        }),
        pageDown: A(function(C) {
            this._stepDown((C || 1) * this.options.page)
        }),
        value: function(C) {
            if (!arguments.length) {
                return this._parse(this.element.val())
            }
            A(this._value).call(this, C)
        },
        widget: function() {
            return this.uiSpinner
        }
    })
}(jQuery));
(function(C, E) {
    var A = 0,
        F = /#.*$/;

    function D() {
        return ++A
    }

    function B(G) {
        return G.hash.length > 1 && decodeURIComponent(G.href.replace(F, "")) === decodeURIComponent(location.href.replace(F, ""))
    }
    C.widget("ui.tabs", {
        version: "1.10.3",
        delay: 300,
        options: {
            active: null,
            collapsible: false,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _create: function() {
            var H = this,
                G = this.options;
            this.running = false;
            this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", G.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(I) {
                if (C(this).is(".ui-state-disabled")) {
                    I.preventDefault()
                }
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                if (C(this).closest("li").is(".ui-state-disabled")) {
                    this.blur()
                }
            });
            this._processTabs();
            G.active = this._initialActive();
            if (C.isArray(G.disabled)) {
                G.disabled = C.unique(G.disabled.concat(C.map(this.tabs.filter(".ui-state-disabled"), function(I) {
                    return H.tabs.index(I)
                }))).sort()
            }
            if (this.options.active !== false && this.anchors.length) {
                this.active = this._findActive(G.active)
            } else {
                this.active = C()
            }
            this._refresh();
            if (this.active.length) {
                this.load(G.active)
            }
        },
        _initialActive: function() {
            var H = this.options.active,
                G = this.options.collapsible,
                I = location.hash.substring(1);
            if (H === null) {
                if (I) {
                    this.tabs.each(function(J, K) {
                        if (C(K).attr("aria-controls") === I) {
                            H = J;
                            return false
                        }
                    })
                }
                if (H === null) {
                    H = this.tabs.index(this.tabs.filter(".ui-tabs-active"))
                }
                if (H === null || H === -1) {
                    H = this.tabs.length ? 0 : false
                }
            }
            if (H !== false) {
                H = this.tabs.index(this.tabs.eq(H));
                if (H === -1) {
                    H = G ? false : 0
                }
            }
            if (!G && H === false && this.anchors.length) {
                H = 0
            }
            return H
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: !this.active.length ? C() : this._getPanelForTab(this.active)
            }
        },
        _tabKeydown: function(I) {
            var H = C(this.document[0].activeElement).closest("li"),
                G = this.tabs.index(H),
                J = true;
            if (this._handlePageNav(I)) {
                return
            }
            switch (I.keyCode) {
                case C.ui.keyCode.RIGHT:
                case C.ui.keyCode.DOWN:
                    G++;
                    break;
                case C.ui.keyCode.UP:
                case C.ui.keyCode.LEFT:
                    J = false;
                    G--;
                    break;
                case C.ui.keyCode.END:
                    G = this.anchors.length - 1;
                    break;
                case C.ui.keyCode.HOME:
                    G = 0;
                    break;
                case C.ui.keyCode.SPACE:
                    I.preventDefault();
                    clearTimeout(this.activating);
                    this._activate(G);
                    return;
                case C.ui.keyCode.ENTER:
                    I.preventDefault();
                    clearTimeout(this.activating);
                    this._activate(G === this.options.active ? false : G);
                    return;
                default:
                    return
            }
            I.preventDefault();
            clearTimeout(this.activating);
            G = this._focusNextTab(G, J);
            if (!I.ctrlKey) {
                H.attr("aria-selected", "false");
                this.tabs.eq(G).attr("aria-selected", "true");
                this.activating = this._delay(function() {
                    this.option("active", G)
                }, this.delay)
            }
        },
        _panelKeydown: function(G) {
            if (this._handlePageNav(G)) {
                return
            }
            if (G.ctrlKey && G.keyCode === C.ui.keyCode.UP) {
                G.preventDefault();
                this.active.focus()
            }
        },
        _handlePageNav: function(G) {
            if (G.altKey && G.keyCode === C.ui.keyCode.PAGE_UP) {
                this._activate(this._focusNextTab(this.options.active - 1, false));
                return true
            }
            if (G.altKey && G.keyCode === C.ui.keyCode.PAGE_DOWN) {
                this._activate(this._focusNextTab(this.options.active + 1, true));
                return true
            }
        },
        _findNextTab: function(H, I) {
            var G = this.tabs.length - 1;

            function J() {
                if (H > G) {
                    H = 0
                }
                if (H < 0) {
                    H = G
                }
                return H
            }
            while (C.inArray(J(), this.options.disabled) !== -1) {
                H = I ? H + 1 : H - 1
            }
            return H
        },
        _focusNextTab: function(G, H) {
            G = this._findNextTab(G, H);
            this.tabs.eq(G).focus();
            return G
        },
        _setOption: function(G, H) {
            if (G === "active") {
                this._activate(H);
                return
            }
            if (G === "disabled") {
                this._setupDisabled(H);
                return
            }
            this._super(G, H);
            if (G === "collapsible") {
                this.element.toggleClass("ui-tabs-collapsible", H);
                if (!H && this.options.active === false) {
                    this._activate(0)
                }
            }
            if (G === "event") {
                this._setupEvents(H)
            }
            if (G === "heightStyle") {
                this._setupHeightStyle(H)
            }
        },
        _tabId: function(G) {
            return G.attr("aria-controls") || "ui-tabs-" + D()
        },
        _sanitizeSelector: function(G) {
            return G ? G.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var H = this.options,
                G = this.tablist.children(":has(a[href])");
            H.disabled = C.map(G.filter(".ui-state-disabled"), function(I) {
                return G.index(I)
            });
            this._processTabs();
            if (H.active === false || !this.anchors.length) {
                H.active = false;
                this.active = C()
            } else {
                if (this.active.length && !C.contains(this.tablist[0], this.active[0])) {
                    if (this.tabs.length === H.disabled.length) {
                        H.active = false;
                        this.active = C()
                    } else {
                        this._activate(this._findNextTab(Math.max(0, H.active - 1), false))
                    }
                } else {
                    H.active = this.tabs.index(this.active)
                }
            }
            this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled);
            this._setupEvents(this.options.event);
            this._setupHeightStyle(this.options.heightStyle);
            this.tabs.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            });
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            });
            if (!this.active.length) {
                this.tabs.eq(0).attr("tabIndex", 0)
            } else {
                this.active.addClass("ui-tabs-active ui-state-active").attr({
                    "aria-selected": "true",
                    tabIndex: 0
                });
                this._getPanelForTab(this.active).show().attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                })
            }
        },
        _processTabs: function() {
            var G = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist");
            this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            });
            this.anchors = this.tabs.map(function() {
                return C("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            });
            this.panels = C();
            this.anchors.each(function(M, K) {
                var H, I, L, J = C(K).uniqueId().attr("id"),
                    N = C(K).closest("li"),
                    O = N.attr("aria-controls");
                if (B(K)) {
                    H = K.hash;
                    I = G.element.find(G._sanitizeSelector(H))
                } else {
                    L = G._tabId(N);
                    H = "#" + L;
                    I = G.element.find(H);
                    if (!I.length) {
                        I = G._createPanel(L);
                        I.insertAfter(G.panels[M - 1] || G.tablist)
                    }
                    I.attr("aria-live", "polite")
                }
                if (I.length) {
                    G.panels = G.panels.add(I)
                }
                if (O) {
                    N.data("ui-tabs-aria-controls", O)
                }
                N.attr({
                    "aria-controls": H.substring(1),
                    "aria-labelledby": J
                });
                I.attr("aria-labelledby", J)
            });
            this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },
        _getList: function() {
            return this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(G) {
            return C("<div>").attr("id", G).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", true)
        },
        _setupDisabled: function(I) {
            if (C.isArray(I)) {
                if (!I.length) {
                    I = false
                } else {
                    if (I.length === this.anchors.length) {
                        I = true
                    }
                }
            }
            for (var H = 0, G;
                (G = this.tabs[H]); H++) {
                if (I === true || C.inArray(H, I) !== -1) {
                    C(G).addClass("ui-state-disabled").attr("aria-disabled", "true")
                } else {
                    C(G).removeClass("ui-state-disabled").removeAttr("aria-disabled")
                }
            }
            this.options.disabled = I
        },
        _setupEvents: function(H) {
            var G = {
                click: function(I) {
                    I.preventDefault()
                }
            };
            if (H) {
                C.each(H.split(" "), function(J, I) {
                    G[I] = "_eventHandler"
                })
            }
            this._off(this.anchors.add(this.tabs).add(this.panels));
            this._on(this.anchors, G);
            this._on(this.tabs, {
                keydown: "_tabKeydown"
            });
            this._on(this.panels, {
                keydown: "_panelKeydown"
            });
            this._focusable(this.tabs);
            this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(G) {
            var I, H = this.element.parent();
            if (G === "fill") {
                I = H.height();
                I -= this.element.outerHeight() - this.element.height();
                this.element.siblings(":visible").each(function() {
                    var K = C(this),
                        J = K.css("position");
                    if (J === "absolute" || J === "fixed") {
                        return
                    }
                    I -= K.outerHeight(true)
                });
                this.element.children().not(this.panels).each(function() {
                    I -= C(this).outerHeight(true)
                });
                this.panels.each(function() {
                    C(this).height(Math.max(0, I - C(this).innerHeight() + C(this).height()))
                }).css("overflow", "auto")
            } else {
                if (G === "auto") {
                    I = 0;
                    this.panels.each(function() {
                        I = Math.max(I, C(this).height("").height())
                    }).height(I)
                }
            }
        },
        _eventHandler: function(G) {
            var P = this.options,
                K = this.active,
                L = C(G.currentTarget),
                J = L.closest("li"),
                N = J[0] === K[0],
                H = N && P.collapsible,
                I = H ? C() : this._getPanelForTab(J),
                M = !K.length ? C() : this._getPanelForTab(K),
                O = {
                    oldTab: K,
                    oldPanel: M,
                    newTab: H ? C() : J,
                    newPanel: I
                };
            G.preventDefault();
            if (J.hasClass("ui-state-disabled") || J.hasClass("ui-tabs-loading") || this.running || (N && !P.collapsible) || (this._trigger("beforeActivate", G, O) === false)) {
                return
            }
            P.active = H ? false : this.tabs.index(J);
            this.active = N ? C() : J;
            if (this.xhr) {
                this.xhr.abort()
            }
            if (!M.length && !I.length) {
                C.error("jQuery UI Tabs: Mismatching fragment identifier.")
            }
            if (I.length) {
                this.load(this.tabs.index(J), G)
            }
            this._toggle(G, O)
        },
        _toggle: function(M, L) {
            var K = this,
                G = L.newPanel,
                J = L.oldPanel;
            this.running = true;

            function I() {
                K.running = false;
                K._trigger("activate", M, L)
            }

            function H() {
                L.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
                if (G.length && K.options.show) {
                    K._show(G, K.options.show, I)
                } else {
                    G.show();
                    I()
                }
            }
            if (J.length && this.options.hide) {
                this._hide(J, this.options.hide, function() {
                    L.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
                    H()
                })
            } else {
                L.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
                J.hide();
                H()
            }
            J.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            });
            L.oldTab.attr("aria-selected", "false");
            if (G.length && J.length) {
                L.oldTab.attr("tabIndex", -1)
            } else {
                if (G.length) {
                    this.tabs.filter(function() {
                        return C(this).attr("tabIndex") === 0
                    }).attr("tabIndex", -1)
                }
            }
            G.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            });
            L.newTab.attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _activate: function(H) {
            var G, I = this._findActive(H);
            if (I[0] === this.active[0]) {
                return
            }
            if (!I.length) {
                I = this.active
            }
            G = I.find(".ui-tabs-anchor")[0];
            this._eventHandler({
                target: G,
                currentTarget: G,
                preventDefault: C.noop
            })
        },
        _findActive: function(G) {
            return G === false ? C() : this.tabs.eq(G)
        },
        _getIndex: function(G) {
            if (typeof G === "string") {
                G = this.anchors.index(this.anchors.filter("[href$='" + G + "']"))
            }
            return G
        },
        _destroy: function() {
            if (this.xhr) {
                this.xhr.abort()
            }
            this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
            this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
            this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
            this.tabs.add(this.panels).each(function() {
                if (C.data(this, "ui-tabs-destroy")) {
                    C(this).remove()
                } else {
                    C(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                }
            });
            this.tabs.each(function() {
                var G = C(this),
                    H = G.data("ui-tabs-aria-controls");
                if (H) {
                    G.attr("aria-controls", H).removeData("ui-tabs-aria-controls")
                } else {
                    G.removeAttr("aria-controls")
                }
            });
            this.panels.show();
            if (this.options.heightStyle !== "content") {
                this.panels.css("height", "")
            }
        },
        enable: function(G) {
            var H = this.options.disabled;
            if (H === false) {
                return
            }
            if (G === E) {
                H = false
            } else {
                G = this._getIndex(G);
                if (C.isArray(H)) {
                    H = C.map(H, function(I) {
                        return I !== G ? I : null
                    })
                } else {
                    H = C.map(this.tabs, function(I, J) {
                        return J !== G ? J : null
                    })
                }
            }
            this._setupDisabled(H)
        },
        disable: function(G) {
            var H = this.options.disabled;
            if (H === true) {
                return
            }
            if (G === E) {
                H = true
            } else {
                G = this._getIndex(G);
                if (C.inArray(G, H) !== -1) {
                    return
                }
                if (C.isArray(H)) {
                    H = C.merge([G], H).sort()
                } else {
                    H = [G]
                }
            }
            this._setupDisabled(H)
        },
        load: function(I, M) {
            I = this._getIndex(I);
            var L = this,
                J = this.tabs.eq(I),
                H = J.find(".ui-tabs-anchor"),
                G = this._getPanelForTab(J),
                K = {
                    tab: J,
                    panel: G
                };
            if (B(H[0])) {
                return
            }
            this.xhr = C.ajax(this._ajaxSettings(H, M, K));
            if (this.xhr && this.xhr.statusText !== "canceled") {
                J.addClass("ui-tabs-loading");
                G.attr("aria-busy", "true");
                this.xhr.success(function(N) {
                    setTimeout(function() {
                        G.html(N);
                        L._trigger("load", M, K)
                    }, 1)
                }).complete(function(O, N) {
                    setTimeout(function() {
                        if (N === "abort") {
                            L.panels.stop(false, true)
                        }
                        J.removeClass("ui-tabs-loading");
                        G.removeAttr("aria-busy");
                        if (O === L.xhr) {
                            delete L.xhr
                        }
                    }, 1)
                })
            }
        },
        _ajaxSettings: function(G, J, I) {
            var H = this;
            return {
                url: G.attr("href"),
                beforeSend: function(L, K) {
                    return H._trigger("beforeLoad", J, C.extend({
                        jqXHR: L,
                        ajaxSettings: K
                    }, I))
                }
            }
        },
        _getPanelForTab: function(G) {
            var H = C(G).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + H))
        }
    })
})(jQuery);
(function(D) {
    var B = 0;

    function C(F, G) {
        var E = (F.attr("aria-describedby") || "").split(/\s+/);
        E.push(G);
        F.data("ui-tooltip-id", G).attr("aria-describedby", D.trim(E.join(" ")))
    }

    function A(G) {
        var H = G.data("ui-tooltip-id"),
            F = (G.attr("aria-describedby") || "").split(/\s+/),
            E = D.inArray(H, F);
        if (E !== -1) {
            F.splice(E, 1)
        }
        G.removeData("ui-tooltip-id");
        F = D.trim(F.join(" "));
        if (F) {
            G.attr("aria-describedby", F)
        } else {
            G.removeAttr("aria-describedby")
        }
    }
    D.widget("ui.tooltip", {
        version: "1.10.3",
        options: {
            content: function() {
                var E = D(this).attr("title") || "";
                return D("<a>").text(E).html()
            },
            hide: true,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: true,
            tooltipClass: null,
            track: false,
            close: null,
            open: null
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            });
            this.tooltips = {};
            this.parents = {};
            if (this.options.disabled) {
                this._disable()
            }
        },
        _setOption: function(E, G) {
            var F = this;
            if (E === "disabled") {
                this[G ? "_disable" : "_enable"]();
                this.options[E] = G;
                return
            }
            this._super(E, G);
            if (E === "content") {
                D.each(this.tooltips, function(I, H) {
                    F._updateContent(H)
                })
            }
        },
        _disable: function() {
            var E = this;
            D.each(this.tooltips, function(H, F) {
                var G = D.Event("blur");
                G.target = G.currentTarget = F[0];
                E.close(G, true)
            });
            this.element.find(this.options.items).addBack().each(function() {
                var F = D(this);
                if (F.is("[title]")) {
                    F.data("ui-tooltip-title", F.attr("title")).attr("title", "")
                }
            })
        },
        _enable: function() {
            this.element.find(this.options.items).addBack().each(function() {
                var E = D(this);
                if (E.data("ui-tooltip-title")) {
                    E.attr("title", E.data("ui-tooltip-title"))
                }
            })
        },
        open: function(F) {
            var E = this,
                G = D(F ? F.target : this.element).closest(this.options.items);
            if (!G.length || G.data("ui-tooltip-id")) {
                return
            }
            if (G.attr("title")) {
                G.data("ui-tooltip-title", G.attr("title"))
            }
            G.data("ui-tooltip-open", true);
            if (F && F.type === "mouseover") {
                G.parents().each(function() {
                    var I = D(this),
                        H;
                    if (I.data("ui-tooltip-open")) {
                        H = D.Event("blur");
                        H.target = H.currentTarget = this;
                        E.close(H, true)
                    }
                    if (I.attr("title")) {
                        I.uniqueId();
                        E.parents[this.id] = {
                            element: this,
                            title: I.attr("title")
                        };
                        I.attr("title", "")
                    }
                })
            }
            this._updateContent(G, F)
        },
        _updateContent: function(J, I) {
            var H, E = this.options.content,
                G = this,
                F = I ? I.type : null;
            if (typeof E === "string") {
                return this._open(I, J, E)
            }
            H = E.call(J[0], function(K) {
                if (!J.data("ui-tooltip-open")) {
                    return
                }
                G._delay(function() {
                    if (I) {
                        I.type = F
                    }
                    this._open(I, J, K)
                })
            });
            if (H) {
                this._open(I, J, H)
            }
        },
        _open: function(I, K, H) {
            var J, G, F, L = D.extend({}, this.options.position);
            if (!H) {
                return
            }
            J = this._find(K);
            if (J.length) {
                J.find(".ui-tooltip-content").html(H);
                return
            }
            if (K.is("[title]")) {
                if (I && I.type === "mouseover") {
                    K.attr("title", "")
                } else {
                    K.removeAttr("title")
                }
            }
            J = this._tooltip(K);
            C(K, J.attr("id"));
            J.find(".ui-tooltip-content").html(H);

            function E(M) {
                L.of = M;
                if (J.is(":hidden")) {
                    return
                }
                J.position(L)
            }
            if (this.options.track && I && /^mouse/.test(I.type)) {
                this._on(this.document, {
                    mousemove: E
                });
                E(I)
            } else {
                J.position(D.extend({
                    of: K
                }, this.options.position))
            }
            J.hide();
            this._show(J, this.options.show);
            if (this.options.show && this.options.show.delay) {
                F = this.delayedShow = setInterval(function() {
                    if (J.is(":visible")) {
                        E(L.of);
                        clearInterval(F)
                    }
                }, D.fx.interval)
            }
            this._trigger("open", I, {
                tooltip: J
            });
            G = {
                keyup: function(M) {
                    if (M.keyCode === D.ui.keyCode.ESCAPE) {
                        var N = D.Event(M);
                        N.currentTarget = K[0];
                        this.close(N, true)
                    }
                },
                remove: function() {
                    this._removeTooltip(J)
                }
            };
            if (!I || I.type === "mouseover") {
                G.mouseleave = "close"
            }
            if (!I || I.type === "focusin") {
                G.focusout = "close"
            }
            this._on(true, K, G)
        },
        close: function(F) {
            var E = this,
                H = D(F ? F.currentTarget : this.element),
                G = this._find(H);
            if (this.closing) {
                return
            }
            clearInterval(this.delayedShow);
            if (H.data("ui-tooltip-title")) {
                H.attr("title", H.data("ui-tooltip-title"))
            }
            A(H);
            G.stop(true);
            this._hide(G, this.options.hide, function() {
                E._removeTooltip(D(this))
            });
            H.removeData("ui-tooltip-open");
            this._off(H, "mouseleave focusout keyup");
            if (H[0] !== this.element[0]) {
                this._off(H, "remove")
            }
            this._off(this.document, "mousemove");
            if (F && F.type === "mouseleave") {
                D.each(this.parents, function(J, I) {
                    D(I.element).attr("title", I.title);
                    delete E.parents[J]
                })
            }
            this.closing = true;
            this._trigger("close", F, {
                tooltip: G
            });
            this.closing = false
        },
        _tooltip: function(E) {
            var G = "ui-tooltip-" + B++,
                F = D("<div>").attr({
                    id: G,
                    role: "tooltip"
                }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            D("<div>").addClass("ui-tooltip-content").appendTo(F);
            F.appendTo(this.document[0].body);
            this.tooltips[G] = E;
            return F
        },
        _find: function(E) {
            var F = E.data("ui-tooltip-id");
            return F ? D("#" + F) : D()
        },
        _removeTooltip: function(E) {
            E.remove();
            delete this.tooltips[E.attr("id")]
        },
        _destroy: function() {
            var E = this;
            D.each(this.tooltips, function(H, F) {
                var G = D.Event("blur");
                G.target = G.currentTarget = F[0];
                E.close(G, true);
                D("#" + H).remove();
                if (F.data("ui-tooltip-title")) {
                    F.attr("title", F.data("ui-tooltip-title"));
                    F.removeData("ui-tooltip-title")
                }
            })
        }
    })
}(jQuery));
(function($, undefined) {
    var dataSpace = "ui-effects-";
    $.effects = {
        effect: {}
    };
    /*
     * jQuery Color Animations v2.1.2
     * https://github.com/jquery/jquery-color
     *
     * Copyright 2013 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * Date: Wed Jan 16 08:47:09 2013 -0600
     */
    (function(jQuery, undefined) {
        var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
            rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,
            stringParsers = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function(execResult) {
                    return [execResult[1], execResult[2], execResult[3], execResult[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function(execResult) {
                    return [execResult[1] * 2.55, execResult[2] * 2.55, execResult[3] * 2.55, execResult[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                parse: function(execResult) {
                    return [parseInt(execResult[1], 16), parseInt(execResult[2], 16), parseInt(execResult[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                parse: function(execResult) {
                    return [parseInt(execResult[1] + execResult[1], 16), parseInt(execResult[2] + execResult[2], 16), parseInt(execResult[3] + execResult[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function(execResult) {
                    return [execResult[1], execResult[2] / 100, execResult[3] / 100, execResult[4]]
                }
            }],
            color = jQuery.Color = function(color, green, blue, alpha) {
                return new jQuery.Color.fn.parse(color, green, blue, alpha)
            },
            spaces = {
                rgba: {
                    props: {
                        red: {
                            idx: 0,
                            type: "byte"
                        },
                        green: {
                            idx: 1,
                            type: "byte"
                        },
                        blue: {
                            idx: 2,
                            type: "byte"
                        }
                    }
                },
                hsla: {
                    props: {
                        hue: {
                            idx: 0,
                            type: "degrees"
                        },
                        saturation: {
                            idx: 1,
                            type: "percent"
                        },
                        lightness: {
                            idx: 2,
                            type: "percent"
                        }
                    }
                }
            },
            propTypes = {
                "byte": {
                    floor: true,
                    max: 255
                },
                percent: {
                    max: 1
                },
                degrees: {
                    mod: 360,
                    floor: true
                }
            },
            support = color.support = {},
            supportElem = jQuery("<p>")[0],
            colors, each = jQuery.each;
        supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
        support.rgba = supportElem.style.backgroundColor.indexOf("rgba") > -1;
        each(spaces, function(spaceName, space) {
            space.cache = "_" + spaceName;
            space.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        });

        function clamp(value, prop, allowEmpty) {
            var type = propTypes[prop.type] || {};
            if (value == null) {
                return (allowEmpty || !prop.def) ? null : prop.def
            }
            value = type.floor ? ~~value : parseFloat(value);
            if (isNaN(value)) {
                return prop.def
            }
            if (type.mod) {
                return (value + type.mod) % type.mod
            }
            return 0 > value ? 0 : type.max < value ? type.max : value
        }

        function stringParse(string) {
            var inst = color(),
                rgba = inst._rgba = [];
            string = string.toLowerCase();
            each(stringParsers, function(i, parser) {
                var parsed, match = parser.re.exec(string),
                    values = match && parser.parse(match),
                    spaceName = parser.space || "rgba";
                if (values) {
                    parsed = inst[spaceName](values);
                    inst[spaces[spaceName].cache] = parsed[spaces[spaceName].cache];
                    rgba = inst._rgba = parsed._rgba;
                    return false
                }
            });
            if (rgba.length) {
                if (rgba.join() === "0,0,0,0") {
                    jQuery.extend(rgba, colors.transparent)
                }
                return inst
            }
            return colors[string]
        }
        color.fn = jQuery.extend(color.prototype, {
            parse: function(red, green, blue, alpha) {
                if (red === undefined) {
                    this._rgba = [null, null, null, null];
                    return this
                }
                if (red.jquery || red.nodeType) {
                    red = jQuery(red).css(green);
                    green = undefined
                }
                var inst = this,
                    type = jQuery.type(red),
                    rgba = this._rgba = [];
                if (green !== undefined) {
                    red = [red, green, blue, alpha];
                    type = "array"
                }
                if (type === "string") {
                    return this.parse(stringParse(red) || colors._default)
                }
                if (type === "array") {
                    each(spaces.rgba.props, function(key, prop) {
                        rgba[prop.idx] = clamp(red[prop.idx], prop)
                    });
                    return this
                }
                if (type === "object") {
                    if (red instanceof color) {
                        each(spaces, function(spaceName, space) {
                            if (red[space.cache]) {
                                inst[space.cache] = red[space.cache].slice()
                            }
                        })
                    } else {
                        each(spaces, function(spaceName, space) {
                            var cache = space.cache;
                            each(space.props, function(key, prop) {
                                if (!inst[cache] && space.to) {
                                    if (key === "alpha" || red[key] == null) {
                                        return
                                    }
                                    inst[cache] = space.to(inst._rgba)
                                }
                                inst[cache][prop.idx] = clamp(red[key], prop, true)
                            });
                            if (inst[cache] && jQuery.inArray(null, inst[cache].slice(0, 3)) < 0) {
                                inst[cache][3] = 1;
                                if (space.from) {
                                    inst._rgba = space.from(inst[cache])
                                }
                            }
                        })
                    }
                    return this
                }
            },
            is: function(compare) {
                var is = color(compare),
                    same = true,
                    inst = this;
                each(spaces, function(_, space) {
                    var localCache, isCache = is[space.cache];
                    if (isCache) {
                        localCache = inst[space.cache] || space.to && space.to(inst._rgba) || [];
                        each(space.props, function(_, prop) {
                            if (isCache[prop.idx] != null) {
                                same = (isCache[prop.idx] === localCache[prop.idx]);
                                return same
                            }
                        })
                    }
                    return same
                });
                return same
            },
            _space: function() {
                var used = [],
                    inst = this;
                each(spaces, function(spaceName, space) {
                    if (inst[space.cache]) {
                        used.push(spaceName)
                    }
                });
                return used.pop()
            },
            transition: function(other, distance) {
                var end = color(other),
                    spaceName = end._space(),
                    space = spaces[spaceName],
                    startColor = this.alpha() === 0 ? color("transparent") : this,
                    start = startColor[space.cache] || space.to(startColor._rgba),
                    result = start.slice();
                end = end[space.cache];
                each(space.props, function(key, prop) {
                    var index = prop.idx,
                        startValue = start[index],
                        endValue = end[index],
                        type = propTypes[prop.type] || {};
                    if (endValue === null) {
                        return
                    }
                    if (startValue === null) {
                        result[index] = endValue
                    } else {
                        if (type.mod) {
                            if (endValue - startValue > type.mod / 2) {
                                startValue += type.mod
                            } else {
                                if (startValue - endValue > type.mod / 2) {
                                    startValue -= type.mod
                                }
                            }
                        }
                        result[index] = clamp((endValue - startValue) * distance + startValue, prop)
                    }
                });
                return this[spaceName](result)
            },
            blend: function(opaque) {
                if (this._rgba[3] === 1) {
                    return this
                }
                var rgb = this._rgba.slice(),
                    a = rgb.pop(),
                    blend = color(opaque)._rgba;
                return color(jQuery.map(rgb, function(v, i) {
                    return (1 - a) * blend[i] + a * v
                }))
            },
            toRgbaString: function() {
                var prefix = "rgba(",
                    rgba = jQuery.map(this._rgba, function(v, i) {
                        return v == null ? (i > 2 ? 1 : 0) : v
                    });
                if (rgba[3] === 1) {
                    rgba.pop();
                    prefix = "rgb("
                }
                return prefix + rgba.join() + ")"
            },
            toHslaString: function() {
                var prefix = "hsla(",
                    hsla = jQuery.map(this.hsla(), function(v, i) {
                        if (v == null) {
                            v = i > 2 ? 1 : 0
                        }
                        if (i && i < 3) {
                            v = Math.round(v * 100) + "%"
                        }
                        return v
                    });
                if (hsla[3] === 1) {
                    hsla.pop();
                    prefix = "hsl("
                }
                return prefix + hsla.join() + ")"
            },
            toHexString: function(includeAlpha) {
                var rgba = this._rgba.slice(),
                    alpha = rgba.pop();
                if (includeAlpha) {
                    rgba.push(~~(alpha * 255))
                }
                return "#" + jQuery.map(rgba, function(v) {
                    v = (v || 0).toString(16);
                    return v.length === 1 ? "0" + v : v
                }).join("")
            },
            toString: function() {
                return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
            }
        });
        color.fn.parse.prototype = color.fn;

        function hue2rgb(p, q, h) {
            h = (h + 1) % 1;
            if (h * 6 < 1) {
                return p + (q - p) * h * 6
            }
            if (h * 2 < 1) {
                return q
            }
            if (h * 3 < 2) {
                return p + (q - p) * ((2 / 3) - h) * 6
            }
            return p
        }
        spaces.hsla.to = function(rgba) {
            if (rgba[0] == null || rgba[1] == null || rgba[2] == null) {
                return [null, null, null, rgba[3]]
            }
            var r = rgba[0] / 255,
                g = rgba[1] / 255,
                b = rgba[2] / 255,
                a = rgba[3],
                max = Math.max(r, g, b),
                min = Math.min(r, g, b),
                diff = max - min,
                add = max + min,
                l = add * 0.5,
                h, s;
            if (min === max) {
                h = 0
            } else {
                if (r === max) {
                    h = (60 * (g - b) / diff) + 360
                } else {
                    if (g === max) {
                        h = (60 * (b - r) / diff) + 120
                    } else {
                        h = (60 * (r - g) / diff) + 240
                    }
                }
            }
            if (diff === 0) {
                s = 0
            } else {
                if (l <= 0.5) {
                    s = diff / add
                } else {
                    s = diff / (2 - add)
                }
            }
            return [Math.round(h) % 360, s, l, a == null ? 1 : a]
        };
        spaces.hsla.from = function(hsla) {
            if (hsla[0] == null || hsla[1] == null || hsla[2] == null) {
                return [null, null, null, hsla[3]]
            }
            var h = hsla[0] / 360,
                s = hsla[1],
                l = hsla[2],
                a = hsla[3],
                q = l <= 0.5 ? l * (1 + s) : l + s - l * s,
                p = 2 * l - q;
            return [Math.round(hue2rgb(p, q, h + (1 / 3)) * 255), Math.round(hue2rgb(p, q, h) * 255), Math.round(hue2rgb(p, q, h - (1 / 3)) * 255), a]
        };
        each(spaces, function(spaceName, space) {
            var props = space.props,
                cache = space.cache,
                to = space.to,
                from = space.from;
            color.fn[spaceName] = function(value) {
                if (to && !this[cache]) {
                    this[cache] = to(this._rgba)
                }
                if (value === undefined) {
                    return this[cache].slice()
                }
                var ret, type = jQuery.type(value),
                    arr = (type === "array" || type === "object") ? value : arguments,
                    local = this[cache].slice();
                each(props, function(key, prop) {
                    var val = arr[type === "object" ? key : prop.idx];
                    if (val == null) {
                        val = local[prop.idx]
                    }
                    local[prop.idx] = clamp(val, prop)
                });
                if (from) {
                    ret = color(from(local));
                    ret[cache] = local;
                    return ret
                } else {
                    return color(local)
                }
            };
            each(props, function(key, prop) {
                if (color.fn[key]) {
                    return
                }
                color.fn[key] = function(value) {
                    var vtype = jQuery.type(value),
                        fn = (key === "alpha" ? (this._hsla ? "hsla" : "rgba") : spaceName),
                        local = this[fn](),
                        cur = local[prop.idx],
                        match;
                    if (vtype === "undefined") {
                        return cur
                    }
                    if (vtype === "function") {
                        value = value.call(this, cur);
                        vtype = jQuery.type(value)
                    }
                    if (value == null && prop.empty) {
                        return this
                    }
                    if (vtype === "string") {
                        match = rplusequals.exec(value);
                        if (match) {
                            value = cur + parseFloat(match[2]) * (match[1] === "+" ? 1 : -1)
                        }
                    }
                    local[prop.idx] = value;
                    return this[fn](local)
                }
            })
        });
        color.hook = function(hook) {
            var hooks = hook.split(" ");
            each(hooks, function(i, hook) {
                jQuery.cssHooks[hook] = {
                    set: function(elem, value) {
                        var parsed, curElem, backgroundColor = "";
                        if (value !== "transparent" && (jQuery.type(value) !== "string" || (parsed = stringParse(value)))) {
                            value = color(parsed || value);
                            if (!support.rgba && value._rgba[3] !== 1) {
                                curElem = hook === "backgroundColor" ? elem.parentNode : elem;
                                while ((backgroundColor === "" || backgroundColor === "transparent") && curElem && curElem.style) {
                                    try {
                                        backgroundColor = jQuery.css(curElem, "backgroundColor");
                                        curElem = curElem.parentNode
                                    } catch (e) {}
                                }
                                value = value.blend(backgroundColor && backgroundColor !== "transparent" ? backgroundColor : "_default")
                            }
                            value = value.toRgbaString()
                        }
                        try {
                            elem.style[hook] = value
                        } catch (e) {}
                    }
                };
                jQuery.fx.step[hook] = function(fx) {
                    if (!fx.colorInit) {
                        fx.start = color(fx.elem, hook);
                        fx.end = color(fx.end);
                        fx.colorInit = true
                    }
                    jQuery.cssHooks[hook].set(fx.elem, fx.start.transition(fx.end, fx.pos))
                }
            })
        };
        color.hook(stepHooks);
        jQuery.cssHooks.borderColor = {
            expand: function(value) {
                var expanded = {};
                each(["Top", "Right", "Bottom", "Left"], function(i, part) {
                    expanded["border" + part + "Color"] = value
                });
                return expanded
            }
        };
        colors = jQuery.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    })(jQuery);
    (function() {
        var classAnimationActions = ["add", "remove", "toggle"],
            shorthandStyles = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
        $.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(_, prop) {
            $.fx.step[prop] = function(fx) {
                if (fx.end !== "none" && !fx.setAttr || fx.pos === 1 && !fx.setAttr) {
                    jQuery.style(fx.elem, prop, fx.end);
                    fx.setAttr = true
                }
            }
        });

        function getElementStyles(elem) {
            var key, len, style = elem.ownerDocument.defaultView ? elem.ownerDocument.defaultView.getComputedStyle(elem, null) : elem.currentStyle,
                styles = {};
            if (style && style.length && style[0] && style[style[0]]) {
                len = style.length;
                while (len--) {
                    key = style[len];
                    if (typeof style[key] === "string") {
                        styles[$.camelCase(key)] = style[key]
                    }
                }
            } else {
                for (key in style) {
                    if (typeof style[key] === "string") {
                        styles[key] = style[key]
                    }
                }
            }
            return styles
        }

        function styleDifference(oldStyle, newStyle) {
            var diff = {},
                name, value;
            for (name in newStyle) {
                value = newStyle[name];
                if (oldStyle[name] !== value) {
                    if (!shorthandStyles[name]) {
                        if ($.fx.step[name] || !isNaN(parseFloat(value))) {
                            diff[name] = value
                        }
                    }
                }
            }
            return diff
        }
        if (!$.fn.addBack) {
            $.fn.addBack = function(selector) {
                return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector))
            }
        }
        $.effects.animateClass = function(value, duration, easing, callback) {
            var o = $.speed(duration, easing, callback);
            return this.queue(function() {
                var animated = $(this),
                    baseClass = animated.attr("class") || "",
                    applyClassChange, allAnimations = o.children ? animated.find("*").addBack() : animated;
                allAnimations = allAnimations.map(function() {
                    var el = $(this);
                    return {
                        el: el,
                        start: getElementStyles(this)
                    }
                });
                applyClassChange = function() {
                    $.each(classAnimationActions, function(i, action) {
                        if (value[action]) {
                            animated[action + "Class"](value[action])
                        }
                    })
                };
                applyClassChange();
                allAnimations = allAnimations.map(function() {
                    this.end = getElementStyles(this.el[0]);
                    this.diff = styleDifference(this.start, this.end);
                    return this
                });
                animated.attr("class", baseClass);
                allAnimations = allAnimations.map(function() {
                    var styleInfo = this,
                        dfd = $.Deferred(),
                        opts = $.extend({}, o, {
                            queue: false,
                            complete: function() {
                                dfd.resolve(styleInfo)
                            }
                        });
                    this.el.animate(this.diff, opts);
                    return dfd.promise()
                });
                $.when.apply($, allAnimations.get()).done(function() {
                    applyClassChange();
                    $.each(arguments, function() {
                        var el = this.el;
                        $.each(this.diff, function(key) {
                            el.css(key, "")
                        })
                    });
                    o.complete.call(animated[0])
                })
            })
        };
        $.fn.extend({
            addClass: (function(orig) {
                return function(classNames, speed, easing, callback) {
                    return speed ? $.effects.animateClass.call(this, {
                        add: classNames
                    }, speed, easing, callback) : orig.apply(this, arguments)
                }
            })($.fn.addClass),
            removeClass: (function(orig) {
                return function(classNames, speed, easing, callback) {
                    return arguments.length > 1 ? $.effects.animateClass.call(this, {
                        remove: classNames
                    }, speed, easing, callback) : orig.apply(this, arguments)
                }
            })($.fn.removeClass),
            toggleClass: (function(orig) {
                return function(classNames, force, speed, easing, callback) {
                    if (typeof force === "boolean" || force === undefined) {
                        if (!speed) {
                            return orig.apply(this, arguments)
                        } else {
                            return $.effects.animateClass.call(this, (force ? {
                                add: classNames
                            } : {
                                remove: classNames
                            }), speed, easing, callback)
                        }
                    } else {
                        return $.effects.animateClass.call(this, {
                            toggle: classNames
                        }, force, speed, easing)
                    }
                }
            })($.fn.toggleClass),
            switchClass: function(remove, add, speed, easing, callback) {
                return $.effects.animateClass.call(this, {
                    add: add,
                    remove: remove
                }, speed, easing, callback)
            }
        })
    })();
    (function() {
        $.extend($.effects, {
            version: "1.10.3",
            save: function(element, set) {
                for (var i = 0; i < set.length; i++) {
                    if (set[i] !== null) {
                        element.data(dataSpace + set[i], element[0].style[set[i]])
                    }
                }
            },
            restore: function(element, set) {
                var val, i;
                for (i = 0; i < set.length; i++) {
                    if (set[i] !== null) {
                        val = element.data(dataSpace + set[i]);
                        if (val === undefined) {
                            val = ""
                        }
                        element.css(set[i], val)
                    }
                }
            },
            setMode: function(el, mode) {
                if (mode === "toggle") {
                    mode = el.is(":hidden") ? "show" : "hide"
                }
                return mode
            },
            getBaseline: function(origin, original) {
                var y, x;
                switch (origin[0]) {
                    case "top":
                        y = 0;
                        break;
                    case "middle":
                        y = 0.5;
                        break;
                    case "bottom":
                        y = 1;
                        break;
                    default:
                        y = origin[0] / original.height
                }
                switch (origin[1]) {
                    case "left":
                        x = 0;
                        break;
                    case "center":
                        x = 0.5;
                        break;
                    case "right":
                        x = 1;
                        break;
                    default:
                        x = origin[1] / original.width
                }
                return {
                    x: x,
                    y: y
                }
            },
            createWrapper: function(element) {
                if (element.parent().is(".ui-effects-wrapper")) {
                    return element.parent()
                }
                var props = {
                        width: element.outerWidth(true),
                        height: element.outerHeight(true),
                        "float": element.css("float")
                    },
                    wrapper = $("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }),
                    size = {
                        width: element.width(),
                        height: element.height()
                    },
                    active = document.activeElement;
                try {
                    active.id
                } catch (e) {
                    active = document.body
                }
                element.wrap(wrapper);
                if (element[0] === active || $.contains(element[0], active)) {
                    $(active).focus()
                }
                wrapper = element.parent();
                if (element.css("position") === "static") {
                    wrapper.css({
                        position: "relative"
                    });
                    element.css({
                        position: "relative"
                    })
                } else {
                    $.extend(props, {
                        position: element.css("position"),
                        zIndex: element.css("z-index")
                    });
                    $.each(["top", "left", "bottom", "right"], function(i, pos) {
                        props[pos] = element.css(pos);
                        if (isNaN(parseInt(props[pos], 10))) {
                            props[pos] = "auto"
                        }
                    });
                    element.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })
                }
                element.css(size);
                return wrapper.css(props).show()
            },
            removeWrapper: function(element) {
                var active = document.activeElement;
                if (element.parent().is(".ui-effects-wrapper")) {
                    element.parent().replaceWith(element);
                    if (element[0] === active || $.contains(element[0], active)) {
                        $(active).focus()
                    }
                }
                return element
            },
            setTransition: function(element, list, factor, value) {
                value = value || {};
                $.each(list, function(i, x) {
                    var unit = element.cssUnit(x);
                    if (unit[0] > 0) {
                        value[x] = unit[0] * factor + unit[1]
                    }
                });
                return value
            }
        });

        function _normalizeArguments(effect, options, speed, callback) {
            if ($.isPlainObject(effect)) {
                options = effect;
                effect = effect.effect
            }
            effect = {
                effect: effect
            };
            if (options == null) {
                options = {}
            }
            if ($.isFunction(options)) {
                callback = options;
                speed = null;
                options = {}
            }
            if (typeof options === "number" || $.fx.speeds[options]) {
                callback = speed;
                speed = options;
                options = {}
            }
            if ($.isFunction(speed)) {
                callback = speed;
                speed = null
            }
            if (options) {
                $.extend(effect, options)
            }
            speed = speed || options.duration;
            effect.duration = $.fx.off ? 0 : typeof speed === "number" ? speed : speed in $.fx.speeds ? $.fx.speeds[speed] : $.fx.speeds._default;
            effect.complete = callback || options.complete;
            return effect
        }

        function standardAnimationOption(option) {
            if (!option || typeof option === "number" || $.fx.speeds[option]) {
                return true
            }
            if (typeof option === "string" && !$.effects.effect[option]) {
                return true
            }
            if ($.isFunction(option)) {
                return true
            }
            if (typeof option === "object" && !option.effect) {
                return true
            }
            return false
        }
        $.fn.extend({
            effect: function() {
                var args = _normalizeArguments.apply(this, arguments),
                    mode = args.mode,
                    queue = args.queue,
                    effectMethod = $.effects.effect[args.effect];
                if ($.fx.off || !effectMethod) {
                    if (mode) {
                        return this[mode](args.duration, args.complete)
                    } else {
                        return this.each(function() {
                            if (args.complete) {
                                args.complete.call(this)
                            }
                        })
                    }
                }

                function run(next) {
                    var elem = $(this),
                        complete = args.complete,
                        mode = args.mode;

                    function done() {
                        if ($.isFunction(complete)) {
                            complete.call(elem[0])
                        }
                        if ($.isFunction(next)) {
                            next()
                        }
                    }
                    if (elem.is(":hidden") ? mode === "hide" : mode === "show") {
                        elem[mode]();
                        done()
                    } else {
                        effectMethod.call(elem[0], args, done)
                    }
                }
                return queue === false ? this.each(run) : this.queue(queue || "fx", run)
            },
            show: (function(orig) {
                return function(option) {
                    if (standardAnimationOption(option)) {
                        return orig.apply(this, arguments)
                    } else {
                        var args = _normalizeArguments.apply(this, arguments);
                        args.mode = "show";
                        return this.effect.call(this, args)
                    }
                }
            })($.fn.show),
            hide: (function(orig) {
                return function(option) {
                    if (standardAnimationOption(option)) {
                        return orig.apply(this, arguments)
                    } else {
                        var args = _normalizeArguments.apply(this, arguments);
                        args.mode = "hide";
                        return this.effect.call(this, args)
                    }
                }
            })($.fn.hide),
            toggle: (function(orig) {
                return function(option) {
                    if (standardAnimationOption(option) || typeof option === "boolean") {
                        return orig.apply(this, arguments)
                    } else {
                        var args = _normalizeArguments.apply(this, arguments);
                        args.mode = "toggle";
                        return this.effect.call(this, args)
                    }
                }
            })($.fn.toggle),
            cssUnit: function(key) {
                var style = this.css(key),
                    val = [];
                $.each(["em", "px", "%", "pt"], function(i, unit) {
                    if (style.indexOf(unit) > 0) {
                        val = [parseFloat(style), unit]
                    }
                });
                return val
            }
        })
    })();
    (function() {
        var baseEasings = {};
        $.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(i, name) {
            baseEasings[name] = function(p) {
                return Math.pow(p, i + 2)
            }
        });
        $.extend(baseEasings, {
            Sine: function(p) {
                return 1 - Math.cos(p * Math.PI / 2)
            },
            Circ: function(p) {
                return 1 - Math.sqrt(1 - p * p)
            },
            Elastic: function(p) {
                return p === 0 || p === 1 ? p : -Math.pow(2, 8 * (p - 1)) * Math.sin(((p - 1) * 80 - 7.5) * Math.PI / 15)
            },
            Back: function(p) {
                return p * p * (3 * p - 2)
            },
            Bounce: function(p) {
                var pow2, bounce = 4;
                while (p < ((pow2 = Math.pow(2, --bounce)) - 1) / 11) {}
                return 1 / Math.pow(4, 3 - bounce) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - p, 2)
            }
        });
        $.each(baseEasings, function(name, easeIn) {
            $.easing["easeIn" + name] = easeIn;
            $.easing["easeOut" + name] = function(p) {
                return 1 - easeIn(1 - p)
            };
            $.easing["easeInOut" + name] = function(p) {
                return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn(p * -2 + 2) / 2
            }
        })
    })()
})(jQuery);
(function(B, D) {
    var A = /up|down|vertical/,
        C = /up|left|vertical|horizontal/;
    B.effects.effect.blind = function(G, M) {
        var H = B(this),
            P = ["position", "top", "bottom", "left", "right", "height", "width"],
            N = B.effects.setMode(H, G.mode || "hide"),
            Q = G.direction || "up",
            J = A.test(Q),
            I = J ? "height" : "width",
            O = J ? "top" : "left",
            S = C.test(Q),
            L = {},
            R = N === "show",
            F, E, K;
        if (H.parent().is(".ui-effects-wrapper")) {
            B.effects.save(H.parent(), P)
        } else {
            B.effects.save(H, P)
        }
        H.show();
        F = B.effects.createWrapper(H).css({
            overflow: "hidden"
        });
        E = F[I]();
        K = parseFloat(F.css(O)) || 0;
        L[I] = R ? E : 0;
        if (!S) {
            H.css(J ? "bottom" : "right", 0).css(J ? "top" : "left", "auto").css({
                position: "absolute"
            });
            L[O] = R ? K : E + K
        }
        if (R) {
            F.css(I, 0);
            if (!S) {
                F.css(O, K + E)
            }
        }
        F.animate(L, {
            duration: G.duration,
            easing: G.easing,
            queue: false,
            complete: function() {
                if (N === "hide") {
                    H.hide()
                }
                B.effects.restore(H, P);
                B.effects.removeWrapper(H);
                M()
            }
        })
    }
})(jQuery);
(function(A, B) {
    A.effects.effect.bounce = function(L, K) {
        var C = A(this),
            D = ["position", "top", "bottom", "left", "right", "height", "width"],
            J = A.effects.setMode(C, L.mode || "effect"),
            I = J === "hide",
            T = J === "show",
            U = L.direction || "up",
            E = L.distance,
            H = L.times || 5,
            V = H * 2 + (T || I ? 1 : 0),
            S = L.duration / V,
            N = L.easing,
            F = (U === "up" || U === "down") ? "top" : "left",
            M = (U === "up" || U === "left"),
            R, G, Q, O = C.queue(),
            P = O.length;
        if (T || I) {
            D.push("opacity")
        }
        A.effects.save(C, D);
        C.show();
        A.effects.createWrapper(C);
        if (!E) {
            E = C[F === "top" ? "outerHeight" : "outerWidth"]() / 3
        }
        if (T) {
            Q = {
                opacity: 1
            };
            Q[F] = 0;
            C.css("opacity", 0).css(F, M ? -E * 2 : E * 2).animate(Q, S, N)
        }
        if (I) {
            E = E / Math.pow(2, H - 1)
        }
        Q = {};
        Q[F] = 0;
        for (R = 0; R < H; R++) {
            G = {};
            G[F] = (M ? "-=" : "+=") + E;
            C.animate(G, S, N).animate(Q, S, N);
            E = I ? E * 2 : E / 2
        }
        if (I) {
            G = {
                opacity: 0
            };
            G[F] = (M ? "-=" : "+=") + E;
            C.animate(G, S, N)
        }
        C.queue(function() {
            if (I) {
                C.hide()
            }
            A.effects.restore(C, D);
            A.effects.removeWrapper(C);
            K()
        });
        if (P > 1) {
            O.splice.apply(O, [1, 0].concat(O.splice(P, V + 1)))
        }
        C.dequeue()
    }
})(jQuery);
(function(A, B) {
    A.effects.effect.clip = function(F, I) {
        var G = A(this),
            M = ["position", "top", "bottom", "left", "right", "height", "width"],
            L = A.effects.setMode(G, F.mode || "hide"),
            O = L === "show",
            N = F.direction || "vertical",
            K = N === "vertical",
            P = K ? "height" : "width",
            J = K ? "top" : "left",
            H = {},
            D, E, C;
        A.effects.save(G, M);
        G.show();
        D = A.effects.createWrapper(G).css({
            overflow: "hidden"
        });
        E = (G[0].tagName === "IMG") ? D : G;
        C = E[P]();
        if (O) {
            E.css(P, 0);
            E.css(J, C / 2)
        }
        H[P] = O ? C : 0;
        H[J] = O ? 0 : C / 2;
        E.animate(H, {
            queue: false,
            duration: F.duration,
            easing: F.easing,
            complete: function() {
                if (!O) {
                    G.hide()
                }
                A.effects.restore(G, M);
                A.effects.removeWrapper(G);
                I()
            }
        })
    }
})(jQuery);
(function(A, B) {
    A.effects.effect.drop = function(D, H) {
        var E = A(this),
            J = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
            I = A.effects.setMode(E, D.mode || "hide"),
            L = I === "show",
            K = D.direction || "left",
            F = (K === "up" || K === "down") ? "top" : "left",
            M = (K === "up" || K === "left") ? "pos" : "neg",
            G = {
                opacity: L ? 1 : 0
            },
            C;
        A.effects.save(E, J);
        E.show();
        A.effects.createWrapper(E);
        C = D.distance || E[F === "top" ? "outerHeight" : "outerWidth"](true) / 2;
        if (L) {
            E.css("opacity", 0).css(F, M === "pos" ? -C : C)
        }
        G[F] = (L ? (M === "pos" ? "+=" : "-=") : (M === "pos" ? "-=" : "+=")) + C;
        E.animate(G, {
            queue: false,
            duration: D.duration,
            easing: D.easing,
            complete: function() {
                if (I === "hide") {
                    E.hide()
                }
                A.effects.restore(E, J);
                A.effects.removeWrapper(E);
                H()
            }
        })
    }
})(jQuery);
(function(A, B) {
    A.effects.effect.explode = function(P, O) {
        var I = P.pieces ? Math.round(Math.sqrt(P.pieces)) : 3,
            D = I,
            C = A(this),
            K = A.effects.setMode(C, P.mode || "hide"),
            T = K === "show",
            G = C.show().css("visibility", "hidden").offset(),
            Q = Math.ceil(C.outerWidth() / D),
            N = Math.ceil(C.outerHeight() / I),
            H = [],
            S, R, E, M, L, J;

        function U() {
            H.push(this);
            if (H.length === I * D) {
                F()
            }
        }
        for (S = 0; S < I; S++) {
            M = G.top + S * N;
            J = S - (I - 1) / 2;
            for (R = 0; R < D; R++) {
                E = G.left + R * Q;
                L = R - (D - 1) / 2;
                C.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -R * Q,
                    top: -S * N
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: Q,
                    height: N,
                    left: E + (T ? L * Q : 0),
                    top: M + (T ? J * N : 0),
                    opacity: T ? 0 : 1
                }).animate({
                    left: E + (T ? 0 : L * Q),
                    top: M + (T ? 0 : J * N),
                    opacity: T ? 1 : 0
                }, P.duration || 500, P.easing, U)
            }
        }

        function F() {
            C.css({
                visibility: "visible"
            });
            A(H).remove();
            if (!T) {
                C.hide()
            }
            O()
        }
    }
})(jQuery);
(function(A, B) {
    A.effects.effect.fade = function(F, C) {
        var D = A(this),
            E = A.effects.setMode(D, F.mode || "toggle");
        D.animate({
            opacity: E
        }, {
            queue: false,
            duration: F.duration,
            easing: F.easing,
            complete: C
        })
    }
})(jQuery);
(function(A, B) {
    A.effects.effect.fold = function(E, I) {
        var F = A(this),
            N = ["position", "top", "bottom", "left", "right", "height", "width"],
            K = A.effects.setMode(F, E.mode || "hide"),
            Q = K === "show",
            L = K === "hide",
            S = E.size || 15,
            M = /([0-9]+)%/.exec(S),
            R = !!E.horizFirst,
            J = Q !== R,
            G = J ? ["width", "height"] : ["height", "width"],
            H = E.duration / 2,
            D, C, P = {},
            O = {};
        A.effects.save(F, N);
        F.show();
        D = A.effects.createWrapper(F).css({
            overflow: "hidden"
        });
        C = J ? [D.width(), D.height()] : [D.height(), D.width()];
        if (M) {
            S = parseInt(M[1], 10) / 100 * C[L ? 0 : 1]
        }
        if (Q) {
            D.css(R ? {
                height: 0,
                width: S
            } : {
                height: S,
                width: 0
            })
        }
        P[G[0]] = Q ? C[0] : S;
        O[G[1]] = Q ? C[1] : 0;
        D.animate(P, H, E.easing).animate(O, H, E.easing, function() {
            if (L) {
                F.hide()
            }
            A.effects.restore(F, N);
            A.effects.removeWrapper(F);
            I()
        })
    }
})(jQuery);
(function(A, B) {
    A.effects.effect.highlight = function(H, C) {
        var E = A(this),
            D = ["backgroundImage", "backgroundColor", "opacity"],
            G = A.effects.setMode(E, H.mode || "show"),
            F = {
                backgroundColor: E.css("backgroundColor")
            };
        if (G === "hide") {
            F.opacity = 0
        }
        A.effects.save(E, D);
        E.show().css({
            backgroundImage: "none",
            backgroundColor: H.color || "#ffff99"
        }).animate(F, {
            queue: false,
            duration: H.duration,
            easing: H.easing,
            complete: function() {
                if (G === "hide") {
                    E.hide()
                }
                A.effects.restore(E, D);
                C()
            }
        })
    }
})(jQuery);
(function(A, B) {
    A.effects.effect.pulsate = function(C, G) {
        var E = A(this),
            J = A.effects.setMode(E, C.mode || "show"),
            N = J === "show",
            K = J === "hide",
            O = (N || J === "hide"),
            L = ((C.times || 5) * 2) + (O ? 1 : 0),
            F = C.duration / L,
            M = 0,
            I = E.queue(),
            D = I.length,
            H;
        if (N || !E.is(":visible")) {
            E.css("opacity", 0).show();
            M = 1
        }
        for (H = 1; H < L; H++) {
            E.animate({
                opacity: M
            }, F, C.easing);
            M = 1 - M
        }
        E.animate({
            opacity: M
        }, F, C.easing);
        E.queue(function() {
            if (K) {
                E.hide()
            }
            G()
        });
        if (D > 1) {
            I.splice.apply(I, [1, 0].concat(I.splice(D, L + 1)))
        }
        E.dequeue()
    }
})(jQuery);
(function(A, B) {
    A.effects.effect.puff = function(J, C) {
        var H = A(this),
            I = A.effects.setMode(H, J.mode || "hide"),
            F = I === "hide",
            G = parseInt(J.percent, 10) || 150,
            E = G / 100,
            D = {
                height: H.height(),
                width: H.width(),
                outerHeight: H.outerHeight(),
                outerWidth: H.outerWidth()
            };
        A.extend(J, {
            effect: "scale",
            queue: false,
            fade: true,
            mode: I,
            complete: C,
            percent: F ? G : 100,
            from: F ? D : {
                height: D.height * E,
                width: D.width * E,
                outerHeight: D.outerHeight * E,
                outerWidth: D.outerWidth * E
            }
        });
        H.effect(J)
    };
    A.effects.effect.scale = function(C, F) {
        var D = A(this),
            L = A.extend(true, {}, C),
            G = A.effects.setMode(D, C.mode || "effect"),
            H = parseInt(C.percent, 10) || (parseInt(C.percent, 10) === 0 ? 0 : (G === "hide" ? 0 : 100)),
            J = C.direction || "both",
            K = C.origin,
            E = {
                height: D.height(),
                width: D.width(),
                outerHeight: D.outerHeight(),
                outerWidth: D.outerWidth()
            },
            I = {
                y: J !== "horizontal" ? (H / 100) : 1,
                x: J !== "vertical" ? (H / 100) : 1
            };
        L.effect = "size";
        L.queue = false;
        L.complete = F;
        if (G !== "effect") {
            L.origin = K || ["middle", "center"];
            L.restore = true
        }
        L.from = C.from || (G === "show" ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : E);
        L.to = {
            height: E.height * I.y,
            width: E.width * I.x,
            outerHeight: E.outerHeight * I.y,
            outerWidth: E.outerWidth * I.x
        };
        if (L.fade) {
            if (G === "show") {
                L.from.opacity = 0;
                L.to.opacity = 1
            }
            if (G === "hide") {
                L.from.opacity = 1;
                L.to.opacity = 0
            }
        }
        D.effect(L)
    };
    A.effects.effect.size = function(L, K) {
        var P, I, J, C = A(this),
            O = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
            N = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
            M = ["width", "height", "overflow"],
            G = ["fontSize"],
            R = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            D = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            H = A.effects.setMode(C, L.mode || "effect"),
            Q = L.restore || H !== "effect",
            U = L.scale || "both",
            S = L.origin || ["middle", "center"],
            T = C.css("position"),
            E = Q ? O : N,
            F = {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            };
        if (H === "show") {
            C.show()
        }
        P = {
            height: C.height(),
            width: C.width(),
            outerHeight: C.outerHeight(),
            outerWidth: C.outerWidth()
        };
        if (L.mode === "toggle" && H === "show") {
            C.from = L.to || F;
            C.to = L.from || P
        } else {
            C.from = L.from || (H === "show" ? F : P);
            C.to = L.to || (H === "hide" ? F : P)
        }
        J = {
            from: {
                y: C.from.height / P.height,
                x: C.from.width / P.width
            },
            to: {
                y: C.to.height / P.height,
                x: C.to.width / P.width
            }
        };
        if (U === "box" || U === "both") {
            if (J.from.y !== J.to.y) {
                E = E.concat(R);
                C.from = A.effects.setTransition(C, R, J.from.y, C.from);
                C.to = A.effects.setTransition(C, R, J.to.y, C.to)
            }
            if (J.from.x !== J.to.x) {
                E = E.concat(D);
                C.from = A.effects.setTransition(C, D, J.from.x, C.from);
                C.to = A.effects.setTransition(C, D, J.to.x, C.to)
            }
        }
        if (U === "content" || U === "both") {
            if (J.from.y !== J.to.y) {
                E = E.concat(G).concat(M);
                C.from = A.effects.setTransition(C, G, J.from.y, C.from);
                C.to = A.effects.setTransition(C, G, J.to.y, C.to)
            }
        }
        A.effects.save(C, E);
        C.show();
        A.effects.createWrapper(C);
        C.css("overflow", "hidden").css(C.from);
        if (S) {
            I = A.effects.getBaseline(S, P);
            C.from.top = (P.outerHeight - C.outerHeight()) * I.y;
            C.from.left = (P.outerWidth - C.outerWidth()) * I.x;
            C.to.top = (P.outerHeight - C.to.outerHeight) * I.y;
            C.to.left = (P.outerWidth - C.to.outerWidth) * I.x
        }
        C.css(C.from);
        if (U === "content" || U === "both") {
            R = R.concat(["marginTop", "marginBottom"]).concat(G);
            D = D.concat(["marginLeft", "marginRight"]);
            M = O.concat(R).concat(D);
            C.find("*[width]").each(function() {
                var W = A(this),
                    V = {
                        height: W.height(),
                        width: W.width(),
                        outerHeight: W.outerHeight(),
                        outerWidth: W.outerWidth()
                    };
                if (Q) {
                    A.effects.save(W, M)
                }
                W.from = {
                    height: V.height * J.from.y,
                    width: V.width * J.from.x,
                    outerHeight: V.outerHeight * J.from.y,
                    outerWidth: V.outerWidth * J.from.x
                };
                W.to = {
                    height: V.height * J.to.y,
                    width: V.width * J.to.x,
                    outerHeight: V.height * J.to.y,
                    outerWidth: V.width * J.to.x
                };
                if (J.from.y !== J.to.y) {
                    W.from = A.effects.setTransition(W, R, J.from.y, W.from);
                    W.to = A.effects.setTransition(W, R, J.to.y, W.to)
                }
                if (J.from.x !== J.to.x) {
                    W.from = A.effects.setTransition(W, D, J.from.x, W.from);
                    W.to = A.effects.setTransition(W, D, J.to.x, W.to)
                }
                W.css(W.from);
                W.animate(W.to, L.duration, L.easing, function() {
                    if (Q) {
                        A.effects.restore(W, M)
                    }
                })
            })
        }
        C.animate(C.to, {
            queue: false,
            duration: L.duration,
            easing: L.easing,
            complete: function() {
                if (C.to.opacity === 0) {
                    C.css("opacity", C.from.opacity)
                }
                if (H === "hide") {
                    C.hide()
                }
                A.effects.restore(C, E);
                if (!Q) {
                    if (T === "static") {
                        C.css({
                            position: "relative",
                            top: C.to.top,
                            left: C.to.left
                        })
                    } else {
                        A.each(["top", "left"], function(V, W) {
                            C.css(W, function(Y, a) {
                                var Z = parseInt(a, 10),
                                    X = V ? C.to.left : C.to.top;
                                if (a === "auto") {
                                    return X + "px"
                                }
                                return Z + X + "px"
                            })
                        })
                    }
                }
                A.effects.removeWrapper(C);
                K()
            }
        })
    }
})(jQuery);
(function(A, B) {
    A.effects.effect.shake = function(K, J) {
        var C = A(this),
            D = ["position", "top", "bottom", "left", "right", "height", "width"],
            I = A.effects.setMode(C, K.mode || "effect"),
            S = K.direction || "left",
            E = K.distance || 20,
            H = K.times || 3,
            T = H * 2 + 1,
            O = Math.round(K.duration / T),
            G = (S === "up" || S === "down") ? "top" : "left",
            F = (S === "up" || S === "left"),
            R = {},
            Q = {},
            P = {},
            N, L = C.queue(),
            M = L.length;
        A.effects.save(C, D);
        C.show();
        A.effects.createWrapper(C);
        R[G] = (F ? "-=" : "+=") + E;
        Q[G] = (F ? "+=" : "-=") + E * 2;
        P[G] = (F ? "-=" : "+=") + E * 2;
        C.animate(R, O, K.easing);
        for (N = 1; N < H; N++) {
            C.animate(Q, O, K.easing).animate(P, O, K.easing)
        }
        C.animate(Q, O, K.easing).animate(R, O / 2, K.easing).queue(function() {
            if (I === "hide") {
                C.hide()
            }
            A.effects.restore(C, D);
            A.effects.removeWrapper(C);
            J()
        });
        if (M > 1) {
            L.splice.apply(L, [1, 0].concat(L.splice(M, T + 1)))
        }
        C.dequeue()
    }
})(jQuery);
(function(A, B) {
    A.effects.effect.slide = function(E, I) {
        var F = A(this),
            K = ["position", "top", "bottom", "left", "right", "width", "height"],
            J = A.effects.setMode(F, E.mode || "show"),
            M = J === "show",
            L = E.direction || "left",
            G = (L === "up" || L === "down") ? "top" : "left",
            D = (L === "up" || L === "left"),
            C, H = {};
        A.effects.save(F, K);
        F.show();
        C = E.distance || F[G === "top" ? "outerHeight" : "outerWidth"](true);
        A.effects.createWrapper(F).css({
            overflow: "hidden"
        });
        if (M) {
            F.css(G, D ? (isNaN(C) ? "-" + C : -C) : C)
        }
        H[G] = (M ? (D ? "+=" : "-=") : (D ? "-=" : "+=")) + C;
        F.animate(H, {
            queue: false,
            duration: E.duration,
            easing: E.easing,
            complete: function() {
                if (J === "hide") {
                    F.hide()
                }
                A.effects.restore(F, K);
                A.effects.removeWrapper(F);
                I()
            }
        })
    }
})(jQuery);
(function(A, B) {
    A.effects.effect.transfer = function(D, H) {
        var F = A(this),
            K = A(D.to),
            N = K.css("position") === "fixed",
            J = A("body"),
            L = N ? J.scrollTop() : 0,
            M = N ? J.scrollLeft() : 0,
            C = K.offset(),
            G = {
                top: C.top - L,
                left: C.left - M,
                height: K.innerHeight(),
                width: K.innerWidth()
            },
            I = F.offset(),
            E = A("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(D.className).css({
                top: I.top - L,
                left: I.left - M,
                height: F.innerHeight(),
                width: F.innerWidth(),
                position: N ? "fixed" : "absolute"
            }).animate(G, D.duration, D.easing, function() {
                E.remove();
                H()
            })
    }
})(jQuery);
var promoMsgArr = ["Create your own station", "Powered by SAM Broadcaster", "Powered by SAM", "Start your internet radio now!"];

function getRandomPromoMsg() {
    var B = promoMsgArr.length - 1;
    var A = Math.floor(Math.random() * B);
    return Shuffle(promoMsgArr)[A]
}

function Shuffle(D) {
    for (var B, A, C = D.length; C; B = parseInt(Math.random() * C), A = D[--C], D[C] = D[B], D[B] = A) {}
    return D
}
var baseURL = "//listen.samcloud.com/webapi/station/";
var fallbackURL = "https://samclient.spacialaudio.com:8081/webapi/station/";
var scriptBase = "//samcloudmedia.spacial.com/webwidgets/widget/v5";
var playerBaseURL = "//samcloudmedia.spacial.com/webwidgets/player/v4";
var storageUrl = "//listen.samcloud.com";
var playerPlatFormId = "prod01";
$.widget("spacial.stationInfoWidget", {
    station: null,
    shared: null,
    showPlayer: null,
    playerBaseURL: null,
    transparent: null,
    logo: null,
    name: null,
    description: null,
    website: null,
    stationId: null,
    player: null,
    _create: function() {
        var C = this.options.station;
        var G = this.options.shared;
        var B = this.options.showPlayer;
        var F = this.options.playerBaseURL;
        var H = this.options.transparent;
        this.logo = C.LogoUrl && C.LogoUrl.indexOf("http:") > -1 ? C.LogoUrl.substring("http:".length, C.LogoUrl.length) : (C.LogoUrl && C.LogoUrl.indexOf("https:") > -1 ? C.LogoUrl.substring("https:".length, C.LogoUrl.length) : C.LogoUrl);
        this.name = C.StationName;
        this.description = C.StationDescription || "";
        this.website = C.WebsiteUrl;
        this.stationId = C.StationId;
        this.element[0].innerHTML = "";
        this.div = $("<div></div>");
        this.div.html(H ? this.templateStringTransparent : this.templateString);
        this.div = this.div[0];
        this.logoNode = this.div.getElementsByClassName("station-logo")[0];
        this.nameNode = this.div.getElementsByClassName("station-name")[0];
        this.descriptionNode = this.div.getElementsByClassName("station-description")[0];
        this.nowPlayingNode = this.div.getElementsByClassName("player-widget")[0];
        this.createStationLink = this.div.getElementsByClassName("create-station-link")[0];
        if (this.createStationLink) {
            var E = this.createStationLink.getElementsByTagName("a")[0];
            E.innerHTML = getRandomPromoMsg()
        }
        if (this.website) {
            if (this.logo) {
                this.logoNode.innerHTML = ("<a href='" + this.website + "' target='_blank' title='Want more? Visit us.'><img src=" + this.logo + " alt='Want more? Visit us.' title='Want more? Visit us.'/></a>")
            }
            this.nameNode.innerHTML = ("<a href='" + this.website + "' target='_blank' title='Want more? Visit us.'>" + this.name + "</a>")
        } else {
            if (this.logo) {
                this.logoNode.innerHTML = ("<img src=" + this.logo + " alt='Station Logo' title=''/>")
            }
            this.nameNode.innerHTML = (this.name)
        }
        this.descriptionNode.innerHTML = (this.description);
        this.descriptionNode.title = (this.description);
        if (B) {
            var D = F + "/index.html?startstation=false&size=auto&status=false&hideBorders=true&theme=" + G.theme + ((G.bgColor) ? ("&bgColor=" + G.bgColor) : "") + ((G.fontColor) ? ("&fontColor=" + G.fontColor) : "") + ((G.buttonColor) ? ("&buttonColor=" + G.buttonColor) : "") + ((G.borderColor) ? ("&borderColor=" + G.borderColor) : "");
            this.player = D + "&sid=" + this.stationId;
            this.player += "&showBuyButton=" + G.showBuyButton;
            this.player += "&token=" + G.token;
            var A = "<iframe src='" + this.player + "'></iframe>";
            this.nowPlayingNode.parentNode.innerHTML = A
        } else {
            if (this.nowPlayingNode) {
                this.nowPlayingNode.parentNode.classList.add("hide")
            }
        }
        this.div.firstChild.id = "station-" + this.stationId;
        this.element.append(this.div.firstChild)
    },
    updateTextWidth: function() {
        var A = this;
        var B = this.element[0];
        this.timer = setTimeout(function() {
            if (B && B.offsetWidth > 0) {
                var C = B.offsetWidth - 150;
                A.descriptionNode.style.maxWidth = C + "px";
                A.nameNode.style.maxWidth = C + "px"
            } else {
                A.updateTextWidth()
            }
        }, 700)
    },
    templateString: '<div id="mep_2" class="container improved-skin">    <div class="inner">           <div class="layer">              <div class="stationInfo">                <table style="width: 100%">                    <tr>                        <td rowspan="2" class="station-logo"></td>                         <td></td>                    </tr>                    <tr>                        <td>                            <table>                                <tr><td class="text station-name"></td></tr>                                <tr><td class="text station-description"></td></tr>                            </table>                        </td>                    </tr>                </table>            </div>        </div>        <div class="layer">            <div class="player-widget">            </div>        </div>    </div>    <p class="create-station-link"><a href="//spacial.com/what-we-do-features" target="_blank">Create your own station</a></p></div>',
    templateStringTransparent: '<div class="stationInfo">    <table style="width: 100%">        <tr>            <td rowspan="2" class="station-logo"></td>             <td></td>        </tr>        <tr>            <td>                <table>                    <tr><td class="text station-name"></td></tr>                    <tr><td class="text station-description"></td></tr>                </table>            </td>        </tr>    </table></div>'
});
$.widget("spacial.nowPlayingWidget", {
    _create: function() {
        var A = this.options.mediaItem;
        var E = this.options.shared;
        var F = new WebapiHelper(E);
        var D = false;
        var C = true;
        this.element[0].innerHTML = "";
        this.div = $("<div></div>");
        this.div.html(this.templateString);
        this.div = this.div[0];
        this.createStationLink = this.div.getElementsByClassName("create-station-link")[0];
        if (this.createStationLink) {
            var B = this.createStationLink.getElementsByTagName("a")[0];
            B.innerHTML = getRandomPromoMsg()
        }
        this.contentNode = this.div.getElementsByClassName("now-widget")[0];
        if (A.Picture) {
            D = true
        }
        this.contentNode.innerHTML = "";
        $(this.contentNode).mediaItem({
            mediaItem: A,
            shared: E,
            webApi: F,
            showCoverArt: D,
            showRequestButton: false,
            showButtonContainer: C
        });
        $(this.contentNode).mediaItem("updateTextWidth", this.div.firstChild);
        this.element.append(this.div.firstChild)
    },
    templateString: '<div id="mep_2" class="container improved-skin">    <div class="inner">           <div class="layer now-widget" >                     </div>    </div>    <p class="create-station-link"><a href="//spacial.com/what-we-do-features" target="_blank">Create your own station</a></p></div>'
});
$.widget("spacial.mediaItem", {
    mediaItem: null,
    shared: null,
    webApi: null,
    showCoverArt: null,
    showRequestButton: null,
    showButtonContainer: null,
    artist: null,
    title: null,
    album: null,
    duration: null,
    buyLink: null,
    website: null,
    picture: null,
    id: null,
    retryCount: 3,
    _create: function() {
        this.mediaItem = this.options.mediaItem;
        this.shared = this.options.shared;
        this.webApi = this.options.webApi;
        this.showCoverArt = this.options.showCoverArt;
        this.showRequestButton = this.options.showRequestButton;
        this.showButtonContainer = this.options.showButtonContainer;
        this.coverArtBase = this.shared.coverArtBase;
        this.ShowBuyButton = this.shared.showBuyButton;
        this.id = this.mediaItem.MediaItemId;
        this.artist = this.mediaItem.Artist;
        this.title = this.mediaItem.Title;
        this.album = this.mediaItem.Album;
        this.duration = this.mediaItem.Duration;
        this.buyLink = this.mediaItem.BuyLink;
        this.website = this.mediaItem.Website;
        this.picture = this.mediaItem.Picture;
        var A = this;
        this.div = $("<div></div>");
        this.div.html(this.templateString);
        this.div = this.div[0];
        this.pictureNode = this.div.getElementsByClassName("media-item-coverArt")[0];
        if (this.shared.showArt === "true" || (this.shared.showArt === "auto" && this.showCoverArt)) {
            this.pictureNode.id = this.id + "-coverArt";
            this.pictureNode.src = resolveCoverArtSource(this.id, this.coverArtBase);
            this.pictureNode.onerror = function(B) {
                if (A.retryCount > 0 && A.Picture) {
                    A.pictureNode.src = A.Picture
                } else {
                    A.pictureNode.onerror = null;
                    A.pictureNode.src = A.shared.scriptBase + "/images/no-album.png"
                }
                A.retryCount--
            };
            if (this.website) {
                this.pictureNode.parentNode.href = this.website
            } else {
                if (this.buyLink) {
                    if (this.mediaItem && this.mediaItem.MediaType && (this.mediaItem.MediaType.TypeCode !== "NWS" || this.mediaItem.MediaType.TypeCode !== "INT")) {
                        this.pictureNode.parentNode.href = this.buyLink
                    }
                }
            }
        } else {
            this.pictureNode.parentNode.classList.add("hide")
        }
        this.titleNode = this.div.getElementsByClassName("media-item-title")[0];
        this.titleNode.id = this.id + "-title";
        this.titleNode.innerHTML = this.title;
        this.artistNode = this.div.getElementsByClassName("media-item-artist")[0];
        this.artistNode.id = this.id + "-artist";
        this.artistNode.innerHTML = this.artist;
        this.durationNode = this.div.getElementsByClassName("media-item-duration")[0];
        this.durationNode.id = this.id + "-duration";
        this.durationNode.innerHTML = this.duration && this.duration.indexOf("PT") === 0 ? getDurationFromTimeSpan(this.duration) : this.duration;
        this.buyLinkNode = this.div.getElementsByClassName("media-item-buy-button")[0];
        this.buyLinkNode.id = this.id + "-buy-button";
        this.updateBuyLink(this.buyLinkNode);
        if (this.ShowBuyButton === "always" || (this.ShowBuyButton === "populated" && this.mediaItem.BuyLink !== null && this.mediaItem.BuyLink.length > 0)) {
            if (this.buyLinkNode.parentNode.parentNode.tagName.toUpperCase() === "TR") {
                this.buyLinkNode.parentNode.parentNode.classList.remove("hide")
            }
            this.buyLinkNode.classList.remove("hide");
            this.showBuyButtonContainer = true
        } else {
            if (this.buyLinkNode.parentNode.parentNode.tagName.toUpperCase() === "TR") {
                this.buyLinkNode.parentNode.parentNode.classList.add("hide")
            }
            this.buyLinkNode.classList.add("hide");
            this.showBuyButtonContainer = false
        }
        this.requestNode = this.div.getElementsByClassName("media-item-request-button")[0];
        if (this.showRequestButton && this.shared.requestEnabled) {
            this.requestNode.id = this.id + "-request-button";
            this.requestNode.classList.remove("hide");
            this.requestNode.onclick = function() {
                showRequestDialog(A.mediaItem, A.shared)
            }
        } else {
            if (this.requestNode.parentNode.parentNode.tagName.toUpperCase() === "TR") {
                this.requestNode.parentNode.parentNode.classList.add("hide")
            }
            this.requestNode.classList.add("hide")
        }
        this.updateMediaItemInfoButtons();
        this.div.firstChild.id = this.id;
        this.element.append(this.div.firstChild)
    },
    updateMediaItemInfoButtons: function() {
        var E = this;
        E.mediaItemInfoButtonsNode = E.div.getElementsByClassName("media-item-info-buttons")[0];
        var H = $('<tr><td><button class="fa-info" title="Track info"></button></tr></td>');
        var G = $('<tr><td><a class="home-link" target="_blank"><button class="fa-home" title="Artist page"></button></a></tr></td>');
        var C = $('<tr><td><button class="fa-commenting" title="Dedication messages"></button></tr></td>');
        var B = H[0].getElementsByTagName("button")[0];
        B.id = "info-button-" + E.mediaItem.MediaItemId;
        B.onclick = function() {
            showMediaItemInfoDialog(E.mediaItem, E.shared)
        };
        if (this.website) {
            var F = G[0].getElementsByClassName("home-link")[0];
            F.href = this.website
        } else {
            var D = G[0].getElementsByTagName("button")[0];
            D.classList.remove("fa-home")
        }
        var A = C[0].getElementsByTagName("button")[0];
        if (E.shared.requestEnabled && this.mediaItem.Requested) {
            A.onclick = function() {
                if (E.webApi) {
                    var I = 1;
                    var J = E.mediaItem.MediaItemId;
                    if (E.mediaItem.HistoryItemId) {
                        J = E.mediaItem.HistoryItemId;
                        I = 3
                    }
                    E.webApi.getMediaItemDedications(null, E.mediaItem.MediaItemId, I, "showDedicationMessagesDialog", J)
                }
            }
        } else {
            A.classList.remove("fa-commenting")
        }
        E.mediaItemInfoButtonsNode.appendChild(H[0]);
        E.mediaItemInfoButtonsNode.appendChild(G[0]);
        E.mediaItemInfoButtonsNode.appendChild(C[0])
    },
    updateBuyLink: function(A) {
        var B = this;
        var C = A.getElementsByTagName("a")[0];
        if ((this.mediaItem.MediaType && this.mediaItem.MediaType.TypeCode === "MUS") || this.mediaItem.MediaTypeId === "00000000-0000-0000-0000-000000010000" || this.mediaItem.MediaTypeId === "00000000-0000-0000-0000-000000070000") {
            if (!this.buyLink) {
                this.buyLink = this.shared.baseURL + this.shared.stationId + "/buy/song?artist=" + (this.artist ? this.artist.split(/\s+/).join("+") : "") + "&song=" + (this.title ? this.title.split(/\s+/).join("+") : "");
                A.classList.add("fa-amazon");
                A.title = "Buy now on Amazon"
            } else {
                if (this.buyLink.indexOf("itunes.apple.com/") > -1) {
                    A.classList.add("fa-apple");
                    A.title = "Buy now on iTunes"
                } else {
                    if (this.buyLink.indexOf("www.amazon.com") > -1) {
                        A.classList.add("fa-amazon");
                        A.title = "Buy now on Amazon"
                    } else {
                        A.classList.add("fa-usd");
                        A.title = "Buy now"
                    }
                }
            }
            C.href = this.buyLink || "#"
        } else {
            C.innerHTML = "Speech";
            A.classList.add("fa-microphone");
            A.title = "News or Interview";
            A.onclick = function() {
                showMediaItemInfoDialog(B.mediaItem, B.shared)
            }
        }
    },
    updateTextWidth: function(B) {
        var A = this;
        this.timer = setTimeout(function() {
            if (B.offsetWidth > 0) {
                var C = B.offsetWidth - 190;
                A.titleNode.style.maxWidth = C + "px";
                A.artistNode.style.maxWidth = C + "px"
            } else {
                A.updateTextWidth(B)
            }
        }, 700)
    },
    templateString: '<div class="mediaItemInfo">    <table style="width: 100%">        <tr>            <td rowspan="2" class="coverArt">                <a target="_blank"><img class="media-item-coverArt" /></a>            </td>         </tr>        <tr>            <td>                <table>                    <tr><td class="media-item-title text"></td></tr>                    <tr><td class="media-item-artist text"></td></tr>                    <!--<tr><td class="media-item-album text"></td></tr>-->                    <tr><td class="media-item-duration text"></td></tr>                </table>            </td>            <td class="media-item-info-buttons-container">                <table class="media-item-info-buttons fa">                                    </table>            </td>            <td class="media-item-buttons-container">                <table class="media-item-buttons-table">                    <tr>                        <td>                            <div class="media-item-request-button button hide fa fa-hand-o-up">                                Request                            </div>                        </td>                    </tr>                    <tr>                        <td>                            <div class="media-item-buy-button button fa">                                <a href="" target="_blank">                                    Buy now                                </a>                            </div>                        </td>                    </tr>                </table>            </td>        </tr>    </table></div>'
});
$.widget("spacial.historyWidget", {
    historyItems: null,
    shared: null,
    coverArtBase: null,
    webApi: null,
    mediaItemWidgets: [],
    _create: function() {
        var showButtonContainer = true;
        this.historyItems = this.options.historyItems;
        this.shared = this.options.shared;
        this.coverArtBase = this.options.shared.coverArtBase;
        this.webApi = new WebapiHelper(this.options.shared);
        this.element[0].innerHTML = "";
        this.div = $("<div></div>");
        this.div.html(this.templateString);
        this.div = this.div[0];
        this.contentNode = this.div.getElementsByClassName("history-widget")[0];
        this.createStationLink = this.div.getElementsByClassName("create-station-link")[0];
        if (this.createStationLink) {
            var link = this.createStationLink.getElementsByTagName("a")[0];
            link.innerHTML = getRandomPromoMsg()
        }
        for (var i = 0; i < this.historyItems.length; i++) {
            var item = this.historyItems[i];
            if (item) {
                var div = $("<div>");
                div.mediaItem({
                    mediaItem: item,
                    shared: this.shared,
                    webApi: this.webApi,
                    showCoverArt: this.shared.showArt === "true",
                    showRequestButton: false,
                    showButtonContainer: showButtonContainer
                });
                var firstChild = div[0].firstChild;
                $(this.contentNode).append(firstChild);
                div.mediaItem("updateTextWidth", firstChild)
            }
        }
        if (this.historyItems.length < 1) {
            this.contentNode.innerHTML = "<div class='inline'>no results found</div>";
            if (this.element.attr("onEmpty")) {
                try {
                    eval(this.element.attr("onEmpty"))()
                } catch (e) {
                    console.error(e)
                }
            }
        } else {
            if (this.element.attr("onResultsFound")) {
                try {
                    eval(this.element.attr("onResultsFound"))()
                } catch (e) {
                    console.error(e)
                }
            }
        }
        if (!showButtonContainer) {
            this.div.firstChild.classList.add("no-buttons")
        }
        this.element.append(this.div.firstChild)
    },
    templateString: '<div id="mep_2" class="container improved-skin">     <div class="inner">            <div class="layer history-widget">                     </div>     </div>    <p class="create-station-link"><a href="//spacial.com/what-we-do-features" target="_blank">Create your own station</a></p> </div>   '
});
$.widget("spacial.libraryWidget", {
    libraryItems: null,
    shared: null,
    caller: null,
    offset: null,
    contentRange: null,
    focusInput: null,
    showCoverArt: false,
    alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    total: 0,
    currentPage: 0,
    _create: function() {
        this.libraryItems = this.options.libraryItems;
        this.shared = this.options.shared;
        this.caller = this.options.caller;
        this.offset = this.options.offset;
        this.contentRange = this.options.contentRange;
        this.focusInput = this.options.focusInput;
        var context = this;
        this.element[0].innerHTML = "";
        this.div = $("<div></div>");
        this.div.html(this.templateString);
        this.div = this.div[0];
        this.createStationLink = this.div.getElementsByClassName("create-station-link")[0];
        if (this.createStationLink) {
            var link = this.createStationLink.getElementsByTagName("a")[0];
            link.innerHTML = getRandomPromoMsg()
        }
        var filterOptions = this.div.getElementsByClassName("filter-options")[0];
        var filterForm = this.div.getElementsByClassName("filter-form")[0];
        var showFilterButton = this.div.getElementsByClassName("show-filter-button")[0];
        var clearFilterButton = this.div.getElementsByClassName("clear-filter-button")[0];
        var searchButton = this.div.getElementsByClassName("search-button")[0];
        var chkAlbum = this.div.getElementsByClassName("chkAlbum")[0];
        var chkArtist = this.div.getElementsByClassName("chkArtist")[0];
        var chkTitle = this.div.getElementsByClassName("chkTitle")[0];
        var previousButton = this.div.getElementsByClassName("nav-previous-button")[0];
        var firstButton = this.div.getElementsByClassName("nav-first-button")[0];
        var navPageDiv = this.div.getElementsByClassName("nav-page")[0];
        var navTotalPageDiv = this.div.getElementsByClassName("nav-total-pages")[0];
        var pageIndicator = navPageDiv.getElementsByTagName("input")[0];
        var nextButton = this.div.getElementsByClassName("nav-next-button")[0];
        var lastButton = this.div.getElementsByClassName("nav-last-button")[0];
        this.SearchContainerNode = this.div.getElementsByClassName("library-search")[0];
        var input = this.SearchContainerNode.getElementsByTagName("input")[0];
        input.id = "library-search-" + this.caller.stationId;
        input.value = this.caller.searchTearm;
        if (this.focusInput) {
            var focusTimer = setTimeout(function() {
                input.focus()
            }, 200)
        } else {
            var focusTimer = setTimeout(function() {
                pageIndicator.focus();
                pageIndicator.select()
            }, 200)
        }
        var timer = null;
        searchButton.onclick = function() {
            context.search()
        };
        this.search = function() {
            var fields = null;
            if (!filterForm.classList.contains("hide")) {
                fields = this.getSelectedFilterFields()
            }
            this.caller.searchLibrary(input.value, fields)
        };
        var lastValue = input.value;
        input.onkeyup = function(event) {
            clearTimeout(timer);
            if (event.which === 13) {
                context.search()
            } else {
                timer = setTimeout(function() {
                    if (lastValue !== input.value) {
                        context.search()
                    }
                    lastValue = input.value
                }, 700)
            }
        };
        var range = this.contentRange.split("/");
        this.total = range[1] / range[0].split("-")[1];
        this.currentPage = (range[0].split("-")[0] / range[0].split("-")[1]) + 1;
        pageIndicator.value = this.currentPage;
        navTotalPageDiv.innerHTML = "|" + Math.ceil(this.total);
        pageIndicator.style.width = (navTotalPageDiv.innerHTML.length * 8) + "px";
        var pageTimer = null;
        var lastValue = this.currentPage;
        pageIndicator.onkeyup = function(event) {
            clearTimeout(pageTimer);
            if (event.which === 13) {
                var pageNumber = pageIndicator.value > context.total ? (context.caller.libraryLimit * (Math.ceil(context.total) - 1)) : (pageIndicator.value * context.caller.libraryLimit) - context.caller.libraryLimit;
                context.caller.nextPrevious("next", pageNumber)
            } else {
                pageTimer = setTimeout(function() {
                    if (lastValue !== pageIndicator.value) {
                        var pageNumber = pageIndicator.value > context.total ? (context.caller.libraryLimit * (Math.ceil(context.total) - 1)) : (pageIndicator.value * context.caller.libraryLimit) - context.caller.libraryLimit;
                        context.caller.nextPrevious("next", pageNumber)
                    }
                    lastValue = pageIndicator.value
                }, 700)
            }
        };
        if (parseInt(this.offset) > 0) {
            previousButton.onclick = function() {
                context.caller.nextPrevious("prev")
            };
            firstButton.onclick = function() {
                context.caller.nextPrevious("first")
            }
        }
        if (this.libraryItems.length === parseInt(this.caller.libraryLimit)) {
            nextButton.onclick = function() {
                if (context.currentPage < context.total) {
                    context.caller.nextPrevious("next")
                }
            };
            lastButton.onclick = function() {
                context.caller.nextPrevious("last", context.libraryItems.length * (Math.ceil(context.total) - 1))
            }
        }
        this.contentNode = this.div.getElementsByClassName("library-widget")[0];
        for (var i = 0; i < this.libraryItems.length; i++) {
            var item = this.libraryItems[i];
            if (item.Picture) {
                this.showCoverArt = true;
                break
            }
        }
        for (var i = 0; i < this.libraryItems.length; i++) {
            var item = this.libraryItems[i];
            if (item) {
                var div = $("<div>");
                div.mediaItem({
                    mediaItem: item,
                    shared: this.shared,
                    webApi: this.webApi,
                    showCoverArt: this.showCoverArt === true || this.showCoverArt === "true",
                    showRequestButton: true,
                    showButtonContainer: true
                });
                var firstChild = div[0].firstChild;
                $(this.contentNode).append(firstChild);
                div.mediaItem("updateTextWidth", firstChild)
            }
        }
        if (this.libraryItems.length < 1) {
            this.contentNode.innerHTML = "<div class='inline'>no results found</div>";
            if ($(parent).attr("onEmpty")) {
                try {
                    eval($(parent).attr("onEmpty"))()
                } catch (e) {
                    console.error(e)
                }
            }
        } else {
            if (this.element.attr("onResultsFound")) {
                try {
                    eval(this.element.attr("onResultsFound"))()
                } catch (e) {
                    console.error(e)
                }
            }
        }
        showFilterButton.onclick = function() {
            context.toggleFilterForm()
        };
        clearFilterButton.onclick = function() {
            context.caller.searchLibrary("", "")
        };
        this.toggleFilterForm = function() {
            if (filterForm.classList.contains("hide")) {
                filterForm.classList.remove("hide");
                showFilterButton.classList.add("selected")
            } else {
                filterForm.classList.add("hide");
                showFilterButton.classList.remove("selected")
            }
        };
        this.applyFilter = function(filter) {
            var fields = this.getSelectedFilterFields();
            this.caller.filterLibrary(filter, fields);
            this.toggleFilterForm()
        };
        this.getSelectedFilterFields = function() {
            var fields = [];
            if (chkAlbum.checked) {
                fields.push("Album")
            }
            if (chkArtist.checked) {
                fields.push("Artist")
            }
            if (chkTitle.checked) {
                fields.push("Title")
            }
            if (!chkAlbum.checked && !chkArtist.checked && !chkTitle.checked) {
                fields.push("Artist")
            }
            return fields
        };
        var filterOptionsTable = $("<table>");
        var numberTr = $("<tr>");
        for (var i = 0; i < 10; i++) {
            var number = $("<td val='" + i + "'>" + i + "</td>");
            if (parseInt(this.caller.startsWith) === i) {
                number[0].classList.add("selected")
            }
            number[0].onclick = function() {
                context.applyFilter(this.attributes.val.value)
            };
            numberTr.append(number)
        }
        filterOptionsTable.append(numberTr);
        var lettersTr;
        for (var i = 0; i < this.alphabet.length; i++) {
            if (i % 13 === 0) {
                lettersTr = $("<tr>");
                filterOptionsTable.append(lettersTr)
            }
            var letter = $("<td val='" + this.alphabet[i] + "'>" + this.alphabet[i] + "</td>");
            if (this.caller.startsWith === this.alphabet[i]) {
                letter[0].classList.add("selected")
            }
            letter[0].onclick = function() {
                if (this.classList.contains("selected")) {
                    context.applyFilter("")
                } else {
                    context.applyFilter(this.attributes.val.value)
                }
            };
            lettersTr.append(letter)
        }
        filterOptions.innerHTML = "";
        filterOptions.appendChild(filterOptionsTable[0]);
        if (this.caller.filterFields && this.caller.filterFields.length > 0) {
            chkAlbum.checked = false;
            chkArtist.checked = false;
            chkTitle.checked = false;
            var selectedFields = this.caller.filterFields.split(",");
            for (var i = 0; i < selectedFields.length; i++) {
                if (selectedFields[i] === "Album") {
                    chkAlbum.checked = true
                } else {
                    if (selectedFields[i] === "Artist") {
                        chkArtist.checked = true
                    } else {
                        if (selectedFields[i] === "Title") {
                            chkTitle.checked = true
                        }
                    }
                }
            }
        }
        if ((this.caller.filterFields && this.caller.filterFields.length > 0) || (this.caller.searchTearm && this.caller.searchTearm.length > 0)) {
            clearFilterButton.classList.remove("hide")
        }
        this.element.append(this.div.firstChild)
    },
    templateString: '<div id="mep_2" class="container improved-skin">     <div class="inner">            <div class="layer library-search">             <span class="search-container">                 <input type="text"  name="search" value="" >             </span>             <span class="filter-container">                 <i class="fa fa-search search-button" title="Search"></i>                 <i class="fa fa-filter show-filter-button" title="Show advanced filters"></i>                 <i class="fa fa-ban clear-filter-button hide" title="Clear all filters"></i>             </span>             <div class="filter-form hide">                  <div class="filter-fields">                      <table>                          <tr>                              <td class="checkbox"><input id="chkAlbum" class="chkAlbum" type="checkbox" checked><label for="chkAlbum">Album</label></td>                              <td class="checkbox"><input id="chkArtist" class="chkArtist" type="checkbox" checked><label for="chkArtist">Artist</label></td>                              <td class="checkbox"><input id="chkTitle" class="chkTitle" type="checkbox" checked><label for="chkTitle">Title</label></td>                          </tr>                     </table>                     <hr>                     <div class="filter-options">                     </div>                 </div>             </div>             <div class="nav-container">                 <button class="nav-last-button" title="last"> >> </button>                 <button class="nav-next-button" title="next"> > </button>                 <div class="nav-page"> <input type="text" value="0"/> <div class="nav-total-pages"></div> </div>                 <button class="nav-previous-button" title="previous"> < </button>                 <button class="nav-first-button" title="first"> << </button>             </div>         </div>          <div class="layer library-widget">                     </div>     </div>     <p class="create-station-link"><a href="//spacial.com/what-we-do-features" target="_blank">Create your own station</a></p> </div>  '
});
$.widget("spacial.lineupWidget", {
    mediaItems: null,
    shared: null,
    coverArtBase: null,
    _create: function() {
        this.mediaItems = this.options.mediaItems;
        this.shared = this.options.shared;
        this.coverArtBase = this.shared.coverArtBase;
        var C = this;
        this.element[0].innerHTML = "";
        this.div = $("<div></div>");
        this.div.html(this.inlineTemplateString);
        this.div = this.div[0];
        this.createStationLink = this.div.getElementsByClassName("create-station-link")[0];
        if (this.createStationLink) {
            var E = this.createStationLink.getElementsByTagName("a")[0];
            E.innerHTML = getRandomPromoMsg()
        }
        this.contentNode = this.div.getElementsByClassName("clean-widget")[0];
        var A = "";
        for (var B = 0; B < this.mediaItems.length; B++) {
            var D = this.mediaItems[B];
            A += D.MediaItem.Artist + (B < this.mediaItems.length - 1 ? "   |   " : "")
        }
        $(this.contentNode).ready(function() {
            var F = $("<div></div>").addClass("inline");
            if (C.mediaItems.length < 1) {
                F.html("Queue is empty")
            } else {
                F.html(A)
            }
            C.contentNode.appendChild(F[0])
        });
        this.element.append(this.div.firstChild)
    },
    inlineTemplateString: '<div id="mep_2" class="container improved-skin">     <div class="inner">            <div class="layer clean-widget">                     </div>     </div>     <p class="create-station-link"><a href="//spacial.com/what-we-do-features" target="_blank">Create your own station</a></p> </div>  '
});
$.widget("spacial.mediaSlideWidget", {
    shared: null,
    slideItems: null,
    initScroll: 0,
    coverArtBase: null,
    webApi: null,
    nextClicks: 0,
    prevClicks: 0,
    touchStartX: 0,
    currentTouchX: 0,
    beforeTouch: 0,
    toushStartTime: null,
    toushEndTime: null,
    currentScrollX: 0,
    _create: function() {
        this.shared = this.options.shared;
        this.slideItems = this.options.slideItems;
        this.initScroll = this.options.initScroll;
        this.coverArtBase = this.shared.coverArtBase;
        this.webApi = new WebapiHelper(this.shared);
        var B = this;
        this.element[0].innerHTML = "";
        this.div = $("<div></div>");
        this.div.html(this.templateString);
        this.div = this.div[0];
        this.contentNode = this.div.getElementsByClassName("media-slide-widget")[0];
        this.prevNode = this.div.getElementsByClassName("pager-previous")[0];
        this.nextNode = this.div.getElementsByClassName("pager-next")[0];
        this.contentSize = 98 * (this.slideItems.length);
        for (var A = 0; A < this.slideItems.length; A++) {
            var C = this.slideItems[A].MediaItem;
            if (C) {
                var D = $("<div>");
                D.mediaSlideItem({
                    mediaItem: C,
                    webApi: this.webApi,
                    shared: this.shared,
                    queueItemId: this.slideItems[A].QueueItemId
                });
                $(this.contentNode).append(D[0].firstElementChild)
            }
        }
        if (this.slideItems.length < 1) {
            this.contentNode.innerHTML = "<div class='inline'>The queue is empty</div>";
            this.contentNode.classList.add("no-results")
        } else {
            this.contentNode.classList.remove("no-results");
            this.contentNode.style.width = this.contentSize + "px"
        }
        this.nextNode.onclick = function(F) {
            B.nextClicks++;
            if (B.nextClicks === 1) {
                B.nextTimer = setTimeout(function() {
                    var H = $(B.contentNode.parentNode);
                    var G = H.scrollLeft();
                    B.scroll(H, G + H.width());
                    B.nextClicks = 0
                }, 200)
            } else {
                clearTimeout(B.nextTimer);
                var E = $(B.contentNode.parentNode);
                B.scroll(E, B.contentSize);
                B.nextClicks = 0
            }
        };
        this.prevNode.onclick = function(F) {
            B.prevClicks++;
            if (B.prevClicks === 1) {
                B.prevTimer = setTimeout(function() {
                    var H = $(B.contentNode.parentNode);
                    var G = H.scrollLeft();
                    B.scroll(H, G - H.width());
                    B.prevClicks = 0
                }, 200)
            } else {
                clearTimeout(B.prevTimer);
                B.prevClicks = 0;
                var E = $(B.contentNode.parentNode);
                B.scroll(E, 0)
            }
        };
        $(this.contentNode.parentNode).on("touchstart", function(F) {
            var E = $(this);
            B.touchStartX = F.originalEvent.touches[0].clientX;
            B.beforeTouch = E.scrollLeft();
            this.toushStartTime = new Date().getTime()
        });
        $(this.contentNode.parentNode).on("touchmove", function(H) {
            var F = $(this);
            B.currentTouchX = H.originalEvent.touches[0].clientX;
            var G = B.touchStartX - B.currentTouchX;
            var E = B.beforeTouch + G;
            F.scrollLeft(E);
            B.pagingAllowed(F, B.beforeTouch, E);
            B._setCurrentScrollX($(this).scrollLeft())
        });
        $(this.contentNode.parentNode).on("touchend", function(G) {
            this.toushEndTime = new Date().getTime();
            var H = this.toushEndTime - this.toushStartTime;
            var F = B.touchStartX - B.currentTouchX;
            var E = $(this).width() / 3;
            if (H < 300 && (F > 0 ? F : F * -1) >= E) {
                if (F > 0) {
                    B.scroll($(this), B.contentSize)
                } else {
                    B.scroll($(this), 0)
                }
            }
            B._setCurrentScrollX($(this).scrollLeft())
        });
        this.contentNode.id = "media-slide-widget-" + this.shared.stationId;
        this.element.append(this.div.firstChild);
        var C = $(this.contentNode.parentNode);
        C.scrollLeft(this.initScroll);
        this.pagingAllowed(C, 0, this.initScroll);
        this._setCurrentScrollX(this.initScroll)
    },
    scroll: function(B, D) {
        var A = this;
        var C = B.scrollLeft();
        B.animate({
            scrollLeft: D
        }, 800, function() {
            A._setCurrentScrollX(B.scrollLeft());
            A.pagingAllowed(B, C, D)
        })
    },
    pagingAllowed: function(A, B, C) {
        if ((A.scrollLeft() === B && A.scrollLeft() !== 0) || (A[0].scrollWidth - (A.scrollLeft()) < (C - B + 105))) {
            this.nextNode.classList.add("disabled")
        } else {
            this.nextNode.classList.remove("disabled")
        }
        if (A.scrollLeft() === 0) {
            this.prevNode.classList.add("disabled")
        } else {
            this.prevNode.classList.remove("disabled")
        }
    },
    getCurrentScrollX: function() {
        return this.currentScrollX
    },
    _setCurrentScrollX: function(A) {
        this.currentScrollX = A;
        this.element.attr("slide-scroll-x", A)
    },
    templateString: '<div class="container">    <section class="station-playlist songs">        <div class="tile-list" >            <ul class="coming-up tile media-slide-widget" style="display: block;">            </ul>        </div>        <div class="pagination">            <div  class="pager-previous col disabled" ><span class="icon"><</span></div>            <div  class="pager-next col disabled"><span class="icon">></span></div>        </div>    </section>    <p class="create-station-link"><a href="//spacial.com/what-we-do-features" target="_blank">Create your own station</a></p></div> '
});
$.widget("spacial.mediaSlideItem", {
    mediaItem: null,
    webApi: null,
    shared: null,
    queueItemId: null,
    artist: null,
    title: null,
    album: null,
    duration: null,
    buyLink: null,
    website: null,
    picture: null,
    id: null,
    coverArtBase: null,
    websiteNode: null,
    retryCount: 3,
    _create: function() {
        this.mediaItem = this.options.mediaItem;
        this.webApi = this.options.webApi;
        this.shared = this.options.shared;
        this.queueItemId = this.options.queueItemId;
        this.artist = this.mediaItem.Artist;
        this.title = this.mediaItem.Title;
        this.album = this.mediaItem.Album;
        this.duration = this.mediaItem.Duration;
        this.buyLink = this.mediaItem.BuyLink;
        this.website = this.mediaItem.Website;
        this.picture = this.mediaItem.Picture;
        this.id = this.mediaItem.MediaItemId;
        this.coverArtBase = this.shared.coverArtBase;
        var A = this;
        this.element[0].innerHTML = "";
        this.div = $("<div></div>");
        this.div.html(this.templateString);
        this.div = this.div[0];
        this.pictureNode = this.div.getElementsByClassName("media-item-coverArt")[0];
        this.titleNode = this.div.getElementsByClassName("media-item-title")[0];
        this.artistNode = this.div.getElementsByClassName("media-item-artist")[0];
        this.footerArtistNode = this.div.getElementsByClassName("footer-artist")[0];
        this.buyLinkNode = this.div.getElementsByClassName("buy-link")[0].getElementsByTagName("a")[0];
        this.infoButton = this.div.getElementsByClassName("mis-info")[0];
        this.dedicationButton = this.div.getElementsByClassName("dedication-button")[0];
        this.pictureNode.id = this.id + "-coverArt";
        this.pictureNode.src = resolveCoverArtSource(this.id, this.coverArtBase);
        this.pictureNode.onerror = function(B) {
            if (A.retryCount > 0 && A.Picture) {
                A.pictureNode.src = A.Picture
            } else {
                A.pictureNode.onerror = null;
                A.pictureNode.src = A.shared.scriptBase + "/images/no-album.png"
            }
            A.retryCount--
        };
        this.titleNode.id = this.id + "-title";
        this.titleNode.innerHTML = this.title;
        this.titleNode.title = this.title;
        this.artistNode.id = this.id + "-artist";
        this.artistNode.innerHTML = this.artist;
        this.artistNode.title = this.artist;
        this.footerArtistNode.id = this.id + "footer-artist";
        this.footerArtistNode.innerHTML = this.artist;
        this.footerArtistNode.title = this.artist;
        if ((A.mediaItem.MediaType && this.mediaItem.MediaType.TypeCode === "MUS") || this.mediaItem.MediaTypeId === "00000000-0000-0000-0000-000000010000" || this.mediaItem.MediaTypeId === "00000000-0000-0000-0000-000000070000") {
            if (!this.buyLink) {
                this.buyLink = this.shared.baseURL + this.shared.stationId + "/buy/song?artist=" + (this.artist ? this.artist.split(/\s+/).join("+") : "") + "&song=" + (this.title ? this.title.split(/\s+/).join("+") : "")
            }
            this.buyLinkNode.href = this.buyLink || "#"
        } else {
            this.buyLinkNode.classList.add("hide")
        }
        this.infoButton.onclick = function() {
            showMediaItemInfoDialog(this.mediaItem, this.shared)
        };
        if (A.shared.requestEnabled && this.mediaItem.Requested) {
            this.dedicationButton.onclick = function() {
                if (A.webApi) {
                    var B = this.mediaItem.MediaItemId;
                    if (A.mediaItem.HistoryItemId) {
                        B = this.mediaItem.HistoryItemId
                    } else {
                        if (A.queueItemId) {
                            B = A.queueItemId
                        }
                    }
                    this.webApi.getMediaItemDedications(null, this.mediaItem.MediaItemId, 2, "showDedicationMessagesDialog", B)
                }
            }
        } else {
            this.dedicationButton.classList.add("hide")
        }
        this.element.append(this.div.firstElementChild)
    },
    templateString: ' <li>     <div class="album-art">             <img class="media-item-coverArt" />             <div class="playlist-overlay">                     <div class="top"></div>                     <div class="song-info">                             <div class="title media-item-title"></div>                             <div class="artist media-item-artist"></div>                     </div>            </div>    </div>     <div class="buy-link fa">             <a class="buy" href="" target="_blank">Buy</a>            <span class="mis-info">Info</span>            <span class="dedication-button fa-commenting" title="Dedication messages"></span>    </div>     <div class="expand">             <span class="artist footer-artist"></span>     </div></li>  '
});
$.widget("spacial.dedicationWidget", {
    shared: null,
    requestItems: null,
    playingItem: null,
    retryCount: 3,
    _create: function() {
        this.shared = this.options.shared;
        this.requestItems = this.options.requestItems;
        this.playingItem = this.options.playingItem;
        var C = this;
        this.element[0].innerHTML = "";
        this.div = $("<div></div>");
        this.div.html(this.templateString);
        this.div = this.div[0];
        this.createStationLink = this.div.getElementsByClassName("create-station-link")[0];
        if (this.createStationLink) {
            var E = this.createStationLink.getElementsByTagName("a")[0];
            E.innerHTML = getRandomPromoMsg()
        }
        if (this.requestItems.length > 0 && this.requestItems[0]) {
            this.mediaItem = this.requestItems[0]
        } else {
            this.mediaItem = this.playingItem
        }
        if (this.mediaItem) {
            this.pictureNode = this.div.getElementsByClassName("media-item-coverArt")[0];
            if (this.shared.showArt === "true" || (this.shared.showArt === "auto")) {
                this.pictureNode.id = this.mediaItem.MediaItemId.Id + "-coverArt";
                this.pictureNode.src = resolveCoverArtSource(this.mediaItem.MediaItemId, this.shared.coverArtBase);
                this.pictureNode.onerror = function(G) {
                    if (C.retryCount > 0 && C.mediaItem.Picture) {
                        C.pictureNode.src = C.mediaItem.Picture
                    } else {
                        C.pictureNode.onerror = null;
                        C.pictureNode.src = C.shared.scriptBase + "/images/no-album.png"
                    }
                    C.retryCount--
                }
            } else {
                this.pictureNode.parentNode.classList.add("hide")
            }
            this.titleNode = this.div.getElementsByClassName("media-item-title")[0];
            this.titleNode.id = this.mediaItem.MediaItemId + "-title";
            this.titleNode.innerHTML = this.mediaItem.Title;
            this.titleNode.title = this.mediaItem.Title;
            this.artistNode = this.div.getElementsByClassName("media-item-artist")[0];
            this.artistNode.id = this.mediaItem.MediaItemId + "-artist";
            this.artistNode.innerHTML = this.mediaItem.Artist;
            this.artistNode.title = this.mediaItem.Artist;
            this.dedicationMessageUl = this.div.getElementsByClassName("dedication-message-ul")[0];
            for (var B = 0; B < this.requestItems.length; B++) {
                var D = this.requestItems[B];
                if (D.RequestorName && D.RequestorMessage) {
                    var A = $("<li>" + D.RequestorName + ": <span>" + D.RequestorMessage + "</span></li>")[0];
                    this.dedicationMessageUl.appendChild(A)
                }
            }
            this.upNode = this.div.getElementsByClassName("pager-up")[0];
            this.downNode = this.div.getElementsByClassName("pager-down")[0];
            this.upNode.onclick = function(I) {
                var G = $(this.dedicationMessageUl);
                var H = G.scrollTop();
                G.scrollTop(H - 20)
            };
            this.downNode.onclick = function(I) {
                var G = $(C.dedicationMessageUl);
                var H = G.scrollTop();
                G.scrollTop(H + 20)
            }
        }
        if (this.requestItems.length === 0) {
            this.dedicationMessages = this.div.getElementsByClassName("dedication-messages")[0];
            this.dedicationMessages.innerHTML = "There are no dedication messages."
        }
        var F = this.div.firstChild;
        this.element.append(F);
        this.updateTextWidth(F)
    },
    updateTextWidth: function(B) {
        var A = this;
        this.timer = setTimeout(function() {
            if (B.offsetWidth > 0) {
                var C = B.offsetWidth - 50;
                A.titleNode.style.maxWidth = C + "px";
                A.artistNode.style.maxWidth = C + "px"
            } else {
                A.updateTextWidth(B)
            }
        }, 700)
    },
    templateString: '<div id="mep_2" class="container improved-skin">    <div class="inner">        <div class="layer dedication-widget">            <div class="mediaItemInfo">                <table>                        <tr>                            <td rowspan="2">                                    <img class="media-item-coverArt" >                            </td>                            <td class="media-item-title text">                            </td>                        </tr>                        <tr>                            <td class="media-item-artist text"></td>                        </tr>                </table>            </div>            <div class="pagination">                <div  class="pager-up" ><span class="icon">^</span></div>                <div  class="pager-down"><span class="icon">^</span></div>            </div>            <div class="dedication-messages">                <ul class="dedication-message-ul">                </ul>            </div>        </div>    </div>    <p class="create-station-link"><a href="//spacial.com/what-we-do-features" target="_blank">Create your own station</a></p></div> '
});
$.widget("spacial.currentShowWidget", {
    shared: null,
    scheduledShow: null,
    _create: function() {
        this.shared = this.options.shared;
        this.scheduledShow = this.options.scheduledShow;
        var B = this;
        this.element[0].innerHTML = "";
        this.div = $("<div></div>");
        this.div.html(this.templateString);
        this.div = this.div[0];
        if (this.scheduledShow) {
            var F = this.div.getElementsByClassName("current-show-name")[0];
            var D = this.div.getElementsByClassName("current-show-dj")[0];
            var H = this.div.getElementsByClassName("current-show-time")[0];
            var G = this.div.getElementsByClassName("loading")[0];
            F.innerHTML = this.scheduledShow.Name;
            D.innerHTML = this.scheduledShow.OnAirDj ? this.scheduledShow.OnAirDj.DjName || this.scheduledShow.OnAirDj.FirstName : "off-air";
            H.innerHTML = this.scheduledShow.ScheduledDuration;
            F.title = this.scheduledShow.Name;
            D.title = this.scheduledShow.OnAirDj ? "More info about " + this.scheduledShow.OnAirDj.DjName || this.scheduledShow.OnAirDj.FirstName : "There is no on-air DJ.";
            H.title = this.scheduledShow.ScheduledDuration;
            if (this.scheduledShow.OnAirDj) {
                D.onclick = function(K) {
                    showScheduledDJInfoDialog(B.shared, B.scheduledShow.OnAirDj)
                }
            }
            var J = this.div.getElementsByClassName("show-image")[0];
            J.src = resolvePublicPicture(this.scheduledShow.ShowImage, this.shared.pictureStorageBase);
            var A = 0;
            J.onerror = function(K) {
                if (A++ > 0) {
                    this.onerror = null;
                    this.src = B.shared.scriptBase + "/images/default-show.png"
                } else {
                    this.src = resolvePublicPicture(B.scheduledShow.ShowImage, B.shared.pictureStorageBase, true)
                }
            };
            J.onload = function() {
                G.classList.add("hide")
            };
            var E = this.div.getElementsByClassName("info-button")[0];
            E.onclick = function() {
                B.showScheduledShowDialog(B.scheduledShow)
            }
        } else {
            var I = this.div.getElementsByClassName("show-information-container")[0];
            var C = this.div.getElementsByClassName("no-show-container")[0];
            I.classList.add("hide");
            C.classList.remove("hide")
        }
        this.element.append(this.div.firstChild);
        if (this.scheduledShow) {
            this.updateTextWidth(this.element[0].firstChild, [F, D, H])
        }
    },
    generateDialogTemplate: function(N) {
        var C = this;
        N.innerHTML = "";
        var B = $("<div></div>");
        B.html(this.dialogTemplateString);
        B = B[0];
        var G = B.getElementsByClassName("current-show-description")[0];
        var E = B.getElementsByClassName("current-show-dj")[0];
        var J = B.getElementsByClassName("current-show-allowed-dj")[0];
        var M = B.getElementsByClassName("current-show-time")[0];
        var F = B.getElementsByClassName("current-show-time-local")[0];
        var L = B.getElementsByClassName("loading")[0];
        G.innerHTML = this.scheduledShow.Description;
        E.innerHTML = this.scheduledShow.OnAirDj ? this.scheduledShow.OnAirDj.DjName || this.scheduledShow.OnAirDj.FirstName : "off-air";
        if (this.scheduledShow.OnAirDj) {
            E.appendChild($("<div class='onAirDj' title='On-Air DJ'></div>")[0])
        }
        var K = [];
        for (var H = 0; H < this.scheduledShow.ScheduledDjs.length; H++) {
            var E = this.scheduledShow.ScheduledDjs[H];
            if ((!this.scheduledShow.OnAirDj || E.Email !== this.scheduledShow.OnAirDj.Email) && (E.DjName || E.FirstName)) {
                K.push(E.DjName || E.FirstName)
            }
        }
        J.innerHTML = K.length > 0 ? ", " + K.join(", ") : "";
        M.innerHTML = this.scheduledShow.ScheduledDuration;
        var D = new Date(this.scheduledShow.StartTimeUTC);
        var I = new Date(this.scheduledShow.EndTimeUTC);
        F.innerHTML = D.getHours() + ":" + D.getMinutes() + " - " + I.getHours() + ":" + I.getMinutes() + " (Local Time)";
        var O = B.getElementsByClassName("show-image")[0];
        O.src = resolvePublicPicture(this.scheduledShow.ShowImage, this.shared.pictureStorageBase);
        var A = 0;
        O.onerror = function(P) {
            if (A++ > 0) {
                this.onerror = null;
                this.src = C.shared.scriptBase + "/images/default-show.png"
            } else {
                this.src = resolvePublicPicture(C.scheduledShow.ShowImage, C.shared.pictureStorageBase, true)
            }
        };
        O.onload = function() {
            L.classList.add("hide")
        };
        N.appendChild(B.firstChild)
    },
    showScheduledShowDialog: function(A) {
        if ($("#dialog")[0]) {
            D = $("#dialog")[0]
        } else {
            var D = $('<div id="dialog" style="display: none!important;"></div>')[0];
            $("body")[0].appendChild(D)
        }
        D.innerHTML = "";
        this.generateDialogTemplate(D);
        D.title = A.Name;
        var C = [{
            text: "Close",
            click: function() {
                $(this).dialog("destroy")
            }
        }];
        var B = $("#dialog").dialog({
            resizable: false,
            width: "auto",
            height: "auto",
            close: function() {
                $(this).dialog("destroy")
            },
            buttons: C,
            dialogClass: "spacial-widget-dialog"
        });
        if (this.shared.themeType !== "custom") {
            B.parent().addClass(this.shared.theme + "-theme")
        }
    },
    updateTextWidth: function(C, A) {
        var B = this;
        this.timer = setTimeout(function() {
            if (C.offsetWidth > 0) {
                var E = C.offsetWidth - 50;
                for (var D = 0; D < A.length; D++) {
                    A[D].parentNode.style.maxWidth = E + "px"
                }
            } else {
                B.updateTextWidth(C, A)
            }
        }, 700)
    },
    templateString: '<div id="mep_2" class="container improved-skin">    <div class="inner">        <div class="layer current-show-widget">            <div class="show-information-container">                <table>                    <tr>                        <td rowspan="3">                            <div class="current-show-image-container">                                <img class="show-image">                                <span class="loading"><span class="fa fa-spinner fa-spin"></span></span>                            </div>                        </td>                        <td class="text">                            <div class="fa fa-tag"></div>                            <span class="current-show-name">show name</span>                        </td>                    </tr>                    <tr>                        <td class=" text">                            <div class="fa fa-microphone"></div>                            <span class="current-show-dj">dj name</span>                        </td>                    </tr>                    <tr>                        <td class=" text">                            <div class="fa fa-clock-o"></div>                            <span class="current-show-time">09:00 - 12:00 (UTC+02:00)</span>                        </td>                    </tr>                </table>                <div class="current-show-button-container fa"><button class="fa-info info-button" title="More about this show"></button></div>            </div>            <div class="no-show-container hide">            There is no show at the moment            </div>        </div>    </div></div> ',
    dialogTemplateString: '<div class="spacial-widget">    <table class="current-show-extended-info">        <tr>            <td class="text"><div class="fa fa-microphone"></div><div class="current-show-dj" title="On-Air DJ"></div><span class="current-show-allowed-dj"></span></td>            <td rowspan="3" class="current-show-image-container"><div class="container">                <img class="show-image">                <span class="loading"><span class="fa fa-spinner fa-spin"></span></span>            </div></td>        </tr>        <tr>            <td class="text"><div class="fa fa-clock-o"></div><span class="current-show-time"></span></td>        </tr>        <tr>            <td class="text"><div class="fa fa-clock-o"></div><span class="current-show-time-local"></span></td>        </tr>        <tr><td class="text current-show-description" colspan="2"></td></tr>    </table></div> '
});
$.widget("spacial.showTimelineWidget", {
    shared: null,
    scheduledShows: null,
    _create: function() {
        this.shared = this.options.shared;
        this.scheduledShows = this.options.scheduledShows;
        var C = this;
        this.element[0].innerHTML = "";
        this.widget = $("<div></div>");
        this.widget.html(this.templateString);
        this.widget = C.widget[0];
        if (this.scheduledShows && this.scheduledShows.length > 0) {
            this.contentNode = this.widget.getElementsByClassName("entries-container")[0];
            var D = 0;
            var A = 0;
            var G = [];
            for (var F = 0; F < this.scheduledShows.length + 1; F++) {
                var I = this.scheduledShows[F];
                if (I && D == 0) {
                    D = new Date(I.StartTimeUTC).getHours()
                }
                if (I && new Date(I.StartTimeUTC).getHours() == D) {
                    A = D;
                    G.push(I);
                    continue
                } else {
                    if (I) {
                        --F;
                        D = new Date(I.StartTimeUTC).getHours()
                    }
                }
                if (G.length > 0) {
                    var B = $("<div>");
                    B.showEntryWidget({
                        shared: this.shared,
                        shows: G,
                        startHour: A,
                        showTimelineWidgetElement: this.element
                    });
                    var H = B[0].firstChild;
                    $(this.contentNode).append(H)
                }
                G = []
            }
        }
        var E = this.widget.getElementsByClassName("refresh-timeline")[0];
        E.onclick = function(J) {
            J.stopPropagation();
            E.classList.add("fa-spin");
            widgetController.refreshShowTimeline(function() {
                E.classList.remove("fa-spin")
            });
            widgetController.resetShowTimelineTimeout(60 * 1000)
        };
        this.element.append(this.widget.firstChild)
    },
    templateString: '<div id="mep_2" class="container improved-skin">    <div class="inner">        <div class="layer show-lineup-widget">            <span class="fa fa-refresh refresh-timeline"></span>            <ul class="entries-container">            </ul>        </div>    </div></div>'
});
$.widget("spacial.showEntryWidget", {
    shared: null,
    shows: null,
    startHour: null,
    showTimelineWidgetElement: null,
    _create: function() {
        this.shared = this.options.shared;
        this.shows = this.options.shows;
        this.startHour = this.options.startHour;
        this.showTimelineWidgetElement = this.options.showTimelineWidgetElement;
        var C = this;
        this.element[0].innerHTML = "";
        this.div = $("<div></div>");
        this.div.html(this.templateString);
        this.div = this.div[0];
        this.accordianContainer = this.div.getElementsByClassName("accordian-container")[0];
        var A = this.div.getElementsByClassName("schedule-time")[0];
        A.innerHTML = this.startHour + ":00";
        for (var B = 0; B < this.shows.length; B++) {
            var D = this.shows[B];
            if (D) {
                var F = $("<div>");
                F.showAccordianWidget({
                    shared: this.shared,
                    show: D,
                    showTimelineWidgetElement: this.showTimelineWidgetElement
                });
                var E = F[0].firstChild;
                $(this.accordianContainer).append(E)
            }
        }
        this.element.append(this.div.firstChild)
    },
    templateString: '<li class="show-entry">    <div class="schedule-time">1AM</div>    <div class="timeline-nub">        <div class="bullet"></div>    </div>    <div class="accordian-container"></div></li>'
});
$.widget("spacial.showAccordianWidget", {
    shared: null,
    show: null,
    showTimelineWidgetElement: null,
    allDjs: [],
    _create: function() {
        this.shared = this.options.shared;
        this.show = this.options.show;
        this.showTimelineWidgetElement = this.options.showTimelineWidgetElement;
        var B = this;
        this.element[0].innerHTML = "";
        this.div = $("<div></div>");
        this.div.html(this.templateString);
        this.div = this.div[0];
        var K = this.div.getElementsByClassName("show-name")[0];
        var P = this.div.getElementsByClassName("show-time")[0];
        var M = this.div.getElementsByClassName("show-time-local")[0];
        var J = this.div.getElementsByClassName("show-description")[0];
        var O = this.div.getElementsByClassName("allowed-djs")[0];
        var F = this.div.getElementsByClassName("accordian")[0];
        var E = this.div.getElementsByClassName("loading")[0];
        K.innerHTML = this.show.Name;
        K.title = this.show.Name;
        P.innerHTML = this.show.ScheduledDuration;
        P.title = this.show.ScheduledDuration;
        var D = new Date(this.show.StartTimeUTC);
        var I = new Date(this.show.EndTimeUTC);
        M.innerHTML = formatTime(D.getHours(), D.getMinutes()) + " - " + formatTime(I.getHours(), I.getMinutes()) + " (Local Time)";
        J.innerHTML = this.show.Description;
        var H = document.createElement("ul");
        for (var G = 0; G < this.show.ScheduledDjs.length; G++) {
            var L = this.show.ScheduledDjs[G];
            this.allDjs[L.Id] = L;
            if (L.DjName || L.FirstName) {
                var C = document.createElement("li");
                C.innerHTML = L.DjName || L.FirstName;
                C.id = L.Id;
                C.title = "More about " + L.DjName || L.FirstName;
                H.appendChild(C);
                C.onclick = function(Q) {
                    Q.stopPropagation();
                    showScheduledDJInfoDialog(B.shared, B.allDjs[this.id])
                }
            }
        }
        O.appendChild(H);
        var N = this.div.getElementsByClassName("show-image")[0];
        N.src = resolvePublicPicture(this.show.ShowImage, this.shared.pictureStorageBase);
        N.showImage = this.show.ShowImage;
        var A = 0;
        N.onerror = function(Q) {
            if (A++ > 0) {
                this.onerror = null;
                this.src = B.shared.scriptBase + "/images/default-show.png"
            } else {
                this.src = resolvePublicPicture(this.showImage, B.shared.pictureStorageBase, true)
            }
        };
        N.onload = function() {
            E.classList.add("hide")
        };
        $(F).accordion({
            collapsible: true,
            active: false,
            header: ".accordian-header",
            animate: false
        });
        this.element.append(this.div.firstChild);
        this.element.onclick = function() {
            widgetController.resetShowTimelineTimeout(5 * 60 * 1000)
        };
        this.updateTextWidth(this.showTimelineWidgetElement[0], [K, J, O])
    },
    updateTextWidth: function(C, A) {
        var B = this;
        this.timer = setTimeout(function() {
            if (C.offsetWidth > 0) {
                var E = C.offsetWidth - 150;
                for (var D = 0; D < A.length; D++) {
                    A[D].style.maxWidth = E + "px"
                }
            } else {
                B.updateTextWidth(C, A)
            }
        }, 700)
    },
    templateString: '<div class="accordian">   <div class="accordian-header">       <div class="nav-icon"></div>       <table>            <tr>                <td rowspan="4"><div class="show-iamge-container">                    <img class="show-image" >                    <span class="loading"><span class="fa fa-spinner fa-spin"></span></span>                </div></td>                <td class="show-name fa fa-tag text"></td>            </tr>            <tr>                <td class="show-time fa fa-clock-o text">00:00 - 00:00 (UTC+02)</td>            </tr>             <tr>                <td class="show-time-local fa fa-clock-o text">00:00 - 00:00 (Local Time)</td>            </tr>             <tr>                <td class="allowed-djs fa fa-microphone"></td>            </tr>        </table>   </div>   <div>        <div class="show-description">        </div>   </div></div>'
});
$.widget("spacial.playerWidget", {
    shared: null,
    style: null,
    playerTrackTitleColor: null,
    playerAccentColor: null,
    playerBackgroundColor: null,
    playerPrimaryColor: null,
    textColor: null,
    _create: function() {
        this.shared = this.options.shared;
        this.style = this.options.style;
        this.playerTrackTitleColor = this.options.playerTrackTitleColor;
        this.playerAccentColor = this.options.playerAccentColor;
        this.playerBackgroundColor = this.options.playerBackgroundColor;
        this.playerPrimaryColor = this.options.playerPrimaryColor;
        this.textColor = this.options.textColor;
        var B = this;
        this.element[0].innerHTML = "";
        this.div = $("<div></div>");
        this.includeHowler();
        this.includeTDPlayer();
        if (this.style === 2) {
            this.div.html(this.templateStyle2);
            this.initFacebookShareButton();
            this.initTwitterShareButton();
            window.setTimeout(function() {
                $(".spacial-player-widget-container").tooltip({
                    tooltipClass: "spacial-player-widget-tooltip"
                })
            }, 200)
        } else {
            this.div.html(this.templateStyle1)
        }
        this.div = this.div[0];
        this.createStationLink = this.div.getElementsByClassName("create-station-link")[0];
        this.popoutButton = this.div.getElementsByClassName("popout-button")[0];
        this.fbShareButton = this.div.getElementsByClassName("fb-share-button")[0];
        if (this.createStationLink) {
            var C = this.createStationLink.getElementsByTagName("a")[0];
            C.innerHTML = getRandomPromoMsg()
        }
        if (this.popoutButton) {
            var C = this.popoutButton.getElementsByTagName("a")[0];
            C.href = playerBaseURL + "/index.html?sid=" + this.shared.stationId + "&token=" + this.shared.token + "&startstation=true"
        }
        if (this.fbShareButton) {
            this.fbShareButton.onclick = function() {
                B.shareOnFacebook()
            }
        }
        if (this.style === 2) {
            if (this.textColor) {
                $(this.div).find(".nowPlayingInfo .text").css("color", this.textColor + "!important");
                $(this.div).find(".spacial-player-widget-container .nowPlayingCard .song .artist").css("color", this.textColor + "!important");
                $(this.div).find(".spacial-player-widget-container .nowPlayingCard .song .album").css("color", this.textColor + "!important");
                $(this.div).find(".popout button").css("color", this.textColor + "!important");
                var A = btoa(Math.random()).substring(0, 12);
                $(this.div).find(".shortInfos .infos").addClass(A);
                window.setInterval(function() {
                    $(".shortInfos .infos." + A + " div.song a").css("color", B.textColor + "!important")
                }, 200)
            }
            if (this.playerTrackTitleColor) {
                $(this.div).find(".spacial-player-widget-container .nowPlayingCard .song .title").css("color", this.playerTrackTitleColor)
            }
            if (this.playerAccentColor) {
                $(this.div).find(".miniStatusBar").css("background", this.playerAccentColor);
                $(this.div).find(".miniStatusBar").css("background-color", this.playerAccentColor);
                $(this.div).find(".controls .actions a").css("background", this.playerAccentColor);
                $(this.div).find(".controls .actions a").css("background-color", this.playerAccentColor)
            }
            if (this.playerBackgroundColor) {
                $(this.div).find(".spacial-player-widget-container").css("background", this.playerBackgroundColor);
                $(this.div).find(".spacial-player-widget-container").css("background-color", this.playerBackgroundColor)
            }
            if (this.playerPrimaryColor) {
                $(this.div).find(".spacial-player-widget-container .controls").css("background", this.playerPrimaryColor);
                $(this.div).find(".spacial-player-widget-container .controls").css("background-color", this.playerPrimaryColor)
            }
        }
        this.element.append(this.div.firstChild)
    },
    includeHowler: function() {
        (function(D, A, E) {
            var C, B = D.getElementsByTagName(A)[0];
            if (D.getElementById(E)) {
                return
            }
            C = D.createElement(A);
            C.id = E;
            C.src = "//samcloudmedia.spacial.com/webwidgets/player/v4/js/howler/howler.min.js";
            B.parentNode.insertBefore(C, B)
        }(document, "script", "howler-sdk"))
    },
    includeTDPlayer: function() {
        (function(D, A, E) {
            var C, B = D.getElementsByTagName(A)[0];
            if (D.getElementById(E)) {
                return
            }
            C = D.createElement(A);
            C.id = E;
            C.src = "//sdk.listenlive.co/web/2.9/td-sdk.min.js";
            B.parentNode.insertBefore(C, B)
        }(document, "script", "td-sdk"))
    },
    shareOnFacebook: function() {
        FB.ui({
            method: "share",
            href: window.location.href,
        }, function(A) {})
    },
    shareOnGooglePlus: function() {
        PopupUtil.openWindow("https://plus.google.com/share?url=" + encodeURIComponent(trackUrl), 600, 600, "gplus-song-share")
    },
    initFacebookShareButton: function() {
        window.fbAsyncInit = function() {
            FB.init({
                appId: "941185176034841",
                xfbml: true,
                version: "v2.10"
            })
        };
        (function(D, A, E) {
            var C, B = D.getElementsByTagName(A)[0];
            if (D.getElementById(E)) {
                return
            }
            C = D.createElement(A);
            C.id = E;
            C.src = "https://connect.facebook.net/en_US/sdk.js";
            B.parentNode.insertBefore(C, B)
        }(document, "script", "facebook-jssdk"))
    },
    initTwitterShareButton: function() {
        window.twttr = (function(E, B, F) {
            var D, C = E.getElementsByTagName(B)[0],
                A = window.twttr || {};
            if (E.getElementById(F)) {
                return A
            }
            D = E.createElement(B);
            D.id = F;
            D.src = "https://platform.twitter.com/widgets.js";
            C.parentNode.insertBefore(D, C);
            A._e = [];
            A.ready = function(G) {
                A._e.push(G)
            };
            return A
        }(document, "script", "twitter-wjs"))
    },
    templateStyle1: '<div id="mep_2" class="container improved-skin"> <div class="transparent-player transparent-150 nowPlayingInfo">     <table>         <tr>             <td rowspan="2">                 <div class="controls">                                                     <div id="play-button" class="button playpause-button play hide">                             <button type="button" aria-controls="mep_2" title="Play" aria-label="Play" onclick="play()"></button>                     </div>                       <div id="stop-botton" class="button playpause-button stop hide ">                             <button type="button" aria-controls="mep_2" title="Stop" aria-label="Stop" onclick="stop()"></button>                     </div>                       <div id="loading-botton" class="button playpause-button loading">                             <button type="button" aria-controls="mep_2" title="Loading/Stop" aria-label="Loading/Stop" onclick="stop()"></button>                     </div>                       <div class="vertical-volume-slider mute" id="volume-slider-container">                             <div id="volume-slider" class="vertical"></div>                     </div>                       <div class="button volume-button mute" id="mute-button">                             <button type="button" aria-controls="mep_2" title="Mute Toggle" aria-label="Mute Toggle" >                             </button>                     </div>                                                 </div>             </td>             <td rowspan="2" class="coverArt">                     <img id="coverArt" src="" alt="" />             </td>         </tr>         <tr class="">             <td>                     <table id="spacial-player-widget-info" class="hide">                             <tr>                                     <td  class="text ">                                             <span id="title"></span>                                             <div class="button popout popout-button">                                                     <a href="#" target="_blank">                                                             <button type="button" aria-controls="mep_2" title="Open external player" aria-label="Open external player" onclick="stop()">                                                             </button>                                                     </a>                                             </div>                                     </td>                             </tr>                             <tr><td id="artist" class="text"></td></tr>                             <tr><td id="album" class="text"></td></tr>                             <tr>                                     <td >                                             <span id="duration" class="hide status"></span>                                             <a class="button buy-box-buttons" id="buy-button-container">                                             </a>                                     </td>                             </tr>                     </table>             </td>     </tr>     </table> </div> <div> <div id="td_container"></div> ',
    templateStyle2: '<div class="spacial-player-widget-container">                <div class="miniStatusBar">                    <div class="shortInfos">                        <div class="infos">                            <div id="station-status" class="song status">                            </div>                        </div>                        <div class="button popout popout-button">                            <a href="" target="_blank">                                <div title="Open external player" aria-label="Open external player" onclick="stop()" class="button">                                </div>                            </a>                        </div>                    </div>                </div>                <div id="spacial-player-widget-info">                    <div class="scroller">                        <div class="nowPlayingCard">                            <figure>                                <img id="coverArt" alt="" src="">                            </figure>                            <div class="song">                                <div class="title" id="title"></div>                                <div class="artist" id="artist"></div>                                <div class="album" id="album"></div>                            </div>                        </div>                    </div>                </div>                <div class="controls">                    <div class="actions">                        <a id="player-share-facebook" href="#" class="fb-share-button" title="Share this song on Facebook" alt="Share on Facebook"><i class="fa fa-facebook"></i></a>                        <a id="player-share-twitter" href="https://twitter.com/share" title="Share this song on Twitter" alt="Share on Twitter"><i class="fa fa-twitter"></i></a>                         <!-- <a id="player-share-google" href="#" class="" title="Share this song on  Google+" alt="Share on Google+"><i class="fa fa-google-plus"></i></a>-->                          <span id="buy-button-container">                            <a class="buy" href="" target="_blank">Buy</a>                        </span>                    </div>                    <div class="player-actions">                        <div id="play-button" class="button playpause-button play  hide">                            <span class="button" title="Play" onclick="play()"></span>                        </div>                          <div id="stop-botton" class="button playpause-button stop  hide">                            <span class="button" title="Stop" onclick="stop()"></span>                        </div>                          <div id="loading-botton" class="button playpause-button loading">                            <span class="button" title="Loading/Stop" onclick="stop()"></span>                        </div>                          <div class="button volume-button mute" id="mute-button">                            <button class="button" title="Mute Toggle" ></button>                        </div>                        <div class="horizontal-volume-slider" id="volume-slider-container">                            <div id="volume-slider"></div>                        </div>                     </div>                </div>                <div id="td_container"></div>            </div>'
});
$.widget("spacial.mediaItemInfoDialogWidget", $.ui.dialog, {
    shared: null,
    mediaItem: null,
    retryCount: 3,
    _create: function() {
        this.shared = this.options.shared;
        this.mediaItem = this.options.mediaItem;
        var A = this;
        this.element[0].innerHTML = "";
        this.div = $("<div></div>");
        this.div.html(this.templateString);
        this.div = this.div[0];
        this.mediaItemTitle = this.div.getElementsByClassName("media-item-title")[0];
        this.mediaItemArtist = this.div.getElementsByClassName("media-item-artist")[0];
        this.mediaItemAlbum = this.div.getElementsByClassName("media-item-album")[0];
        this.mediaItemDuration = this.div.getElementsByClassName("media-item-duration")[0];
        this.mediaItemYear = this.div.getElementsByClassName("media-item-year")[0];
        this.mediaItemGenre = this.div.getElementsByClassName("media-item-genre")[0];
        this.mediaItemTitle.innerHTML = this.mediaItem.Title || "";
        this.mediaItemArtist.innerHTML = this.mediaItem.Artist || "";
        this.mediaItemAlbum.innerHTML = this.mediaItem.Album || "";
        this.mediaItemDuration.innerHTML = this.mediaItem.Duration && this.mediaItem.Duration.indexOf("PT") === 0 ? getDurationFromTimeSpan(A.mediaItem.Duration) : this.mediaItem.Duration || "";
        this.mediaItemYear.innerHTML = this.mediaItem.Year || "";
        this.mediaItemGenre.innerHTML = this.mediaItem.Genre || "";
        this.mediaItemTitle.title = this.mediaItem.Title || "";
        this.mediaItemArtist.title = this.mediaItem.Artist || "";
        this.mediaItemAlbum.title = this.mediaItem.Album || "";
        this.mediaItemDuration.title = this.mediaItem.Duration && this.mediaItem.Duration.indexOf("PT") === 0 ? getDurationFromTimeSpan(A.mediaItem.Duration) : this.mediaItem.Duration || "";
        this.mediaItemYear.title = this.mediaItem.Year || "";
        this.mediaItemGenre.title = this.mediaItem.Genre || "";
        this.pictureNode = this.div.getElementsByClassName("media-item-coverArt")[0];
        if (A.shared.showArt === "true" || (A.shared.showArt === "auto")) {
            this.pictureNode.id = this.mediaItem.MediaItemId + "-coverArt";
            this.pictureNode.src = resolveCoverArtSource(A.mediaItem.MediaItemId, this.shared.coverArtBase);
            this.pictureNode.onerror = function(B) {
                if (A.retryCount > 0 && A.mediaItem.Picture) {
                    A.pictureNode.src = A.mediaItem.Picture
                } else {
                    A.pictureNode.onerror = null;
                    A.pictureNode.src = A.shared.scriptBase + "/images/no-album.png"
                }
                A.retryCount--
            };
            if (A.mediaItem.Website) {
                this.pictureNode.parentNode.href = this.mediaItem.Website
            }
        } else {
            this.pictureNode.parentNode.classList.add("hide")
        }
        this.element[0].title = "Track Information";
        if (this.shared.themeType !== "custom") {
            this.element.addClass(this.shared.theme + "-theme")
        }
        this.div.firstChild.id = this.Id;
        this.element.append(this.div.firstChild);
        this._super(this)
    },
    templateString: '<div class="spacial-widget">    <table class="media-item-extended-info">        <tr>            <td>Title<span class="media-item-title"></span></td>            <td rowspan="6" class="coverArt">                <a target="_blank"><img class="media-item-coverArt" /></a>            </td>        </tr>        <tr><td>Artist<span class="media-item-artist"></span></td></tr>        <tr><td>Album<span class="media-item-album"></span></td></tr>        <tr><td>Duration<span class="media-item-duration"></span></td></tr>        <tr><td>Year<span class="media-item-year"></span></td></tr>        <tr><td>Genre<span class="media-item-genre"></span></td></tr>    </table></div>'
});
$.widget("spacial.scheduledDJInfoDialogWidget", $.ui.dialog, {
    shared: null,
    djInfo: {},
    _create: function() {
        this.shared = this.options.shared;
        this.djInfo = this.options.djInfo;
        var D = this;
        this.element.innerHTML = "";
        var H = $("<div></div>");
        H.html(this.templateString);
        H = H[0];
        var C = H.getElementsByClassName("first-name")[0];
        var F = H.getElementsByClassName("dj-name")[0];
        var G = H.getElementsByClassName("biography")[0];
        var A = H.getElementsByClassName("loading")[0];
        var E = H.getElementsByClassName("profile-image")[0];
        C.innerHTML = this.djInfo.FirstName;
        F.innerHTML = this.djInfo.DjName;
        G.innerHTML = this.djInfo.Biography;
        E.src = resolvePublicPicture(this.djInfo.ProfileImage, this.shared.pictureStorageBase);
        var B = 0;
        E.onerror = function(I) {
            if (B++ > 0) {
                this.onerror = null;
                this.src = D.shared.scriptBase + "/images/default-profile.jpg"
            } else {
                this.src = resolvePublicPicture(D.djInfo.ProfileImage, D.shared.pictureStorageBase, true)
            }
        };
        E.onload = function() {
            A.classList.add("hide")
        };
        if (this.shared.themeType !== "custom") {
            this.element.addClass(this.shared.theme + "-theme")
        }
        this.element[0].title = this.djInfo.DjName + " - " + this.djInfo.FirstName;
        $(this.element).append(H.firstChild);
        this._super(this)
    },
    templateString: '<div class="spacial-widget">    <table class="scheduled-dj-info">        <tr>            <td class="text"><div class="first-name" title="First Name"></div></td>            <td rowspan="3" class="profile-image-container"><div>                <img class="profile-image" >                <span class="loading"><span class="fa fa-spinner fa-spin"></span></span>            </div></td>        </tr>        <tr><td class="text"><div class="dj-name" title="DJ Name"></div></td></tr>        <tr><td class="biography"></td></tr>    </table></div>'
});
$.widget("spacial.requestDialogWidget", $.ui.dialog, {
    shared: null,
    mediaItem: null,
    maxMessageChars: 400,
    maxColumnChars: 100,
    maxEmailChars: 100,
    _create: function() {
        this.shared = this.options.shared;
        this.mediaItem = this.options.mediaItem;
        var B = this;
        this.element[0].innerHTML = "";
        this.div = $("<div></div>");
        this.div.html(this.templateString);
        this.div = this.div[0];
        var G = this.div.getElementsByClassName("media-item-title")[0];
        var D = this.div.getElementsByClassName("media-item-artist")[0];
        var C = this.div.getElementsByClassName("media-item-album")[0];
        var H = this.div.getElementsByClassName("dedication-form")[0];
        var F = this.div.getElementsByClassName("cbDedicate")[0];
        var I = this.div.getElementsByClassName("requestor-message")[0];
        var A = this.div.getElementsByClassName("requestor-name")[0];
        var M = this.div.getElementsByClassName("requestor-email")[0];
        var K = this.div.getElementsByClassName("msg-char-count")[0];
        var E = this.div.getElementsByClassName("btnDedicate")[0];
        K.innerHTML = this.maxMessageChars;
        G.innerHTML = this.mediaItem.Title;
        G.title = this.mediaItem.Title;
        D.innerHTML = this.mediaItem.Artist;
        D.title = this.mediaItem.Artist;
        C.innerHTML = this.mediaItem.Album;
        C.title = this.mediaItem.Album;
        I.onkeyup = function(N) {
            J(N, this, B.maxMessageChars, K)
        };
        I.onpaste = function(N) {
            L(N, this, B.maxMessageChars, K)
        };
        A.onkeyup = function(N) {
            J(N, this, B.maxColumnChars)
        };
        A.onpaste = function(N) {
            L(N, this, B.maxColumnChars)
        };
        M.onkeyup = function(N) {
            J(N, this, B.maxEmailChars)
        };
        M.onpaste = function(N) {
            L(N, this, B.maxEmailChars)
        };
        var J = function(P, O, N, Q) {
            if (O.value.length >= N) {
                O.value = O.value.substring(0, N)
            }
            if (Q) {
                Q.innerHTML = (N - O.value.length)
            }
        };
        var L = function(Q, P, N, R) {
            var O = P;
            if (R) {
                K.innerHTML = (N - P.value.length)
            }
            if (P.value.length >= N) {
                setTimeout(function() {
                    O.value = O.value.substring(0, N);
                    if (R) {
                        K.innerHTML = (N - O.value.length)
                    }
                }, 100)
            }
        };
        E.onclick = function() {
            var O = B.element[0].getElementsByClassName("error-messages")[0];
            O.innerHTML = "";
            var N = null;
            if (F.checked) {
                if (A.value.length > B.maxColumnChars || A.value.length < 2) {
                    O.innerHTML = "Check <i><b>Name field</b></i>. Characters should be between 2 and " + B.maxColumnChars;
                    $(A).focus();
                    return
                }
                if (M.value.length > B.maxEmailChars) {
                    O.innerHTML = "Check <i><b>Email field</b></i>. Characters should be less than " + B.maxEmailChars;
                    $(M).focus();
                    return
                }
                if (I.value.length > B.maxMessageChars || I.value.length < 2) {
                    O.innerHTML = "Check <i><b>Dedication message field</b></i>. Characters should be between 2 and " + B.maxMessageChars;
                    $(I).focus();
                    return
                }
                N = "<RequestItemDto><requestorName>" + A.value + "</requestorName><requestorHostAddress></requestorHostAddress><requestorEmail>" + M.value + "</requestorEmail><requestorMessage>" + I.value + "</requestorMessage></RequestItemDto>"
            }
            if (widgetController.writeToken) {
                widgetController.webapi.requestMediaItem(function() {
                    B.requestCallback()
                }, function(P, R, Q) {
                    B.requestErrorCallback(P, R, Q)
                }, B.mediaItem.MediaItemId, N, widgetController.writeToken, true)
            } else {
                widgetController.webapi.getStationData(function(P, Q, R) {
                    widgetController.updateStationInfo(P, Q, R);
                    widgetController.webapi.requestMediaItem(function() {
                        B.requestCallback()
                    }, function(S, U, T) {
                        B.requestErrorCallback(S, U, T)
                    }, B.mediaItem.MediaItemId, N, P.writeToken, true)
                }, true, true)
            }
        };
        if (this.shared.requestEnabled && this.shared.dedicationEnabled) {
            F.onchange = function(N) {
                if (this.checked) {
                    H.classList.remove("hide");
                    E.innerHTML = "Dedicate it!"
                } else {
                    H.classList.add("hide");
                    E.innerHTML = "Request it!"
                }
            };
            F.parentNode.classList.remove("hide")
        } else {
            F.parentNode.classList.add("hide")
        }
        if (this.shared.themeType !== "custom") {
            this.element.addClass(this.shared.theme + "-theme")
        }
        this.element[0].title = "Request track";
        $(this.element).append(this.div.firstChild);
        this._super(this)
    },
    requestCallback: function() {
        this.element[0].innerHTML = "Track successfully requested.";
        this.options.buttons[0].text = "Close";
        this._setOptions(this.options)
    },
    requestErrorCallback: function(A, D, B) {
        var C = this.element[0].getElementsByClassName("error-messages")[0];
        if (A.responseJSON) {
            C.innerHTML = "ERROR: " + A.responseJSON
        } else {
            C.innerHTML = "ERROR: " + A.statusText
        }
    },
    templateString: '<div class="request-dialog"><ul>    <li class="text">Title<span class="media-item-title"></span></li>    <li class="text">Artist<span class="media-item-artist"></span></li>    <li class="text">Album<span class="media-item-album"></span></li>    <li><label class="hide"><input type="checkbox" name="cbDedicate" value="true" class="cbDedicate">Dedicate it?</label></li>    <li>        <ul class="dedication-form hide">            <li><br/>Dedications</li>            <li>Your name:<i class="red">*</i></li>            <li><input type="text" class="requestor-name" size="24"></li>            <li>Your email (optional):</li>            <li><input type="text" class="requestor-email" size="24"></li>            <li>Your dedication message:<i class="red">*</i></li>            <li><textarea class="requestor-message" rows="4" name="rmessage" cols="24"></textarea></li>            <li><div class="msg-char-count"><\div></li>        </ul>    </li>    <li><button class="btnDedicate">Request it!</button></li>    <li><div class="error-messages error"></div></li></div>'
});
$.widget("spacial.dedicationMessagesDialogWidget", $.ui.dialog, {
    theme: null,
    themeType: null,
    requestItems: null,
    _create: function() {
        this.theme = this.options.theme;
        this.themeType = this.options.themeType;
        this.requestItems = this.options.requestItems;
        var B = this;
        this.element[0].innerHTML = "";
        this.div = $("<div></div>");
        this.div.html(this.templateString);
        this.div = this.div[0];
        var C = this.div.getElementsByClassName("dedicationMessageTable")[0];
        if (this.requestItems.length > 0) {
            for (var A = 0; A < this.requestItems.length; A++) {
                var D = this.requestItems[A];
                var E = $("<tr><td><b>" + D.RequestorName + "</b> : " + D.RequestorMessage + "</td></tr>");
                C.append(E[0])
            }
        } else {
            var E = $("<tr><td><b>No dedication messages</b></td></tr>");
            C.append(E[0])
        }
        if (this.themeType !== "custom") {
            this.element.addClass(this.theme + "-theme")
        }
        this.element[0].title = "Dedication Messages";
        $(this.element).append(this.div.firstChild);
        this._super(this)
    },
    templateString: '<div class="dedicationMessageContainer"><table class="dedicationMessageTable"></table></div>'
});
/*
 * (c) Copyright Spacial Audio Solutions, LLC - 2018.
 * Please make sure to read the license before making any use of this software.
 * https://spacial.com
 */
$(document).ready(function() {
    var E;
    var K;
    var G;
    var J;
    var A;
    var P;
    var M;
    var B;
    var I;
    var N;
    var L;
    var D;
    var Q;
    this.widgetController;
    $.loadScript = function(R, S) {
        $.ajax({
            url: R,
            dataType: "script",
            async: false,
            success: function(T) {
                if (S) {
                    S()
                }
            }
        })
    };
    var F = document.getElementsByTagName("script");
    for (var H = 0; H < F.length; H++) {
        var C = F[H].src;
        if (C.indexOf("spacialwidget.js") >= 0) {
            E = O(C, "his") || 6;
            K = O(C, "lib") || 15;
            G = O(C, "queue") || 6;
            I = O(C, "hours") || 24;
            J = O(C, "theme") || "light";
            A = O(C, "themeType") || "defined";
            P = O(C, "art") || "auto";
            M = O(C, "showBuyButton") || "always";
            B = O(C, "startPlayer") == "true" && !mobilecheck();
            N = O(C, "bgColor") || "";
            L = O(C, "fontColor") || "";
            D = O(C, "borderColor") || "";
            Q = O(C, "buttonColor") || ""
        }
    }
    if (N) {
        $("<style type='text/css'>.spacial-widget .inner > div, .spacial-widget .station-playlist,#dialog, .spacial-widget-dialog .ui-widget-content, .spacial-widget .ui-widget-content {background-color:" + N + " !important; background-image: none !important;} </style>").appendTo("head");
        $("<style type='text/css'>.spacial-widget-dialog .ui-dialog-titlebar,.spacial-widget-dialog .ui-dialog-buttonpane {background-color:" + N + " !important; background-image: none !important; filter: brightness(90%);} </style>").appendTo("head")
    }
    if (L) {
        $("<style type='text/css'>.spacial-widget a, .spacial-widget .inline, .spacial-widget .mediaItemInfo .text, \n			.station-name,.spacial-widget .fa-info,.spacial-widget .fa-refresh, .spacial-widget .fa-home,\n			.spacial-widget .fa-search, .spacial-widget .fa-filter,.spacial-widget .fa-ban,\n			.spacial-widget .dedication-widget .dedication-messages,.spacial-widget .media-item-request-button,\n			.spacial-widget .nav-last-button, .spacial-widget .nav-next-button,.spacial-widget .nav-total-pages, \n			.spacial-widget .nav-previous-button, .spacial-widget .nav-first-button,.spacial-widget .library-search .nav-container div,\n			.spacial-widget .current-show-widget *, .spacial-widget .show-lineup-widget *,.spacial-widget .stationInfo,.spacial-widget-dialog.ui-dialog td,\n			.spacial-widget-dialog.ui-dialog .ui-dialog-buttonpane button,.spacial-widget-dialog .ui-dialog-title  {color:" + L + " !important;} </style>").appendTo("head");
        $("<style type='text/css'>.spacial-widget .fa-amazon:before, .spacial-widget .fa-hand-o-up:before {color:" + L + " !important; !important; opacity:0.7} </style>").appendTo("head")
    }
    if (D) {
        $("<style type='text/css'>.spacial-widget .inner > div, .spacial-widget .layer > div,\n		.spacial-widget .mediaItemInfo, .spacial-widget .station-playlist, .spacial-widget .mediaItemInfo .media-item-buttons-table, \n		.spacial-widget-dialog .ui-widget-content , .spacial-widget .ui-widget-content {border-color:" + D + " !important;} </style>").appendTo("head");
        $("<style type='text/css'>.spacial-widget .library-widget {border-top:none !important;} </style>").appendTo("head");
        $("<style type='text/css'>.container .inner .layer:nth-child(2) { border-top: 0px;} </style>").appendTo("head")
    }
    if (Q) {
        $("<style type='text/css'>.spacial-widget .media-item-buy-button, .spacial-widget .media-item-request-button,\n			 .spacial-widget-dialog .ui-widget-content .ui-state-hover, .spacial-widget .ui-widget-content .ui-state-hover {background-color:" + Q + " !important;} </style>").appendTo("head");
        $("<style type='text/css'>.spacial-widget-dialog.ui-dialog .ui-dialog-buttonpane button {background-color:" + Q + " !important; background-image: none !important} </style>").appendTo("head");
        $("<style type='text/css'>.spacial-widget .nav-last-button, .spacial-widget .nav-next-button, \n				.spacial-widget .nav-previous-button, .spacial-widget .nav-first-button,\n				.spacial-widget .library-search .nav-container div {background-color:" + Q + " !important} </style>").appendTo("head");
        $("<style type='text/css'>.spacial-widget .pager-next .icon, .spacial-widget .pager-previous .icon, .spacial-widget .pagination .pager-up .icon,\n		.spacial-widget .pagination .pager-down .icon {color:" + Q + " !important;} </style>").appendTo("head")
    }
    start = function() {
        $("head").append('<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css"  media="all">');
        $("head").append('<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">');
        if (A === "custom") {
            if (J.indexOf(".css") > -1) {
                J = decodeURIComponent(J);
                $("head").append('<link rel="stylesheet" href="' + J + '"  media="all">')
            } else {
                $("head").append('<link rel="stylesheet" href="' + scriptBase + '/css/style.css"  media="all">')
            }
        } else {
            $("head").append('<link rel="stylesheet" href="' + scriptBase + '/css/style.css"  media="all">')
        }
        createWidgetController()
    };
    createWidgetController = function() {
        this.widgetController = new WidgetController({
            baseUrl: baseURL,
            fallbackURL: fallbackURL,
            showArt: P,
            historyLimit: E,
            libraryLimit: K,
            queueLimit: G,
            timelineHours: I,
            theme: J,
            themeType: A,
            playerBaseURL: playerBaseURL,
            scriptBase: scriptBase,
            showBuyButton: M,
            startPlayer: B,
            storageUrl: storageUrl,
            bgColor: N,
            fontColor: L,
            borderColor: D,
            buttonColor: Q
        });
        this.widgetController.GenerateWidgets()
    };
    $.urlParam = function(R) {
        var S = new RegExp("[\\?&]" + R + "=([^&#]*)").exec(window.location.href);
        if (!S) {
            return null
        } else {
            return S[1]
        }
    };

    function O(S, T) {
        var W;
        var V = S.substr(S.indexOf("?") + 1);
        V = V.split("&");
        for (var R = 0; R < V.length; R++) {
            var U = V[R].split("=");
            if (U[0] == T) {
                W = U[1]
            }
        }
        return W
    }
    if ((jQuery || $)("div[class*='spacial-widget-player-']").length > 0) {
        window.playerBaseURL = playerBaseURL;
        $.loadScript(playerBaseURL + "/js/class.PlayerWidget.js", function() {
            document.scriptsLoaded = true
        });
        $.loadScript(playerBaseURL + "/js/class.TDPlayerWrapper.js");
        $.loadScript(playerBaseURL + "/js/class.HowlerPlayerWrapper.js");
        $.loadScript(playerBaseURL + "/js/jplayer/jquery.jplayer.js");
        $.loadScript(playerBaseURL + "/js/class.jPlayerWrapper.js")
    }
    start();
    calculateDuration = function(T) {
        var U = 0;
        var S = 0;
        var R = 0;
        while (T > 1000) {
            U++;
            T -= 1000
        }
        while (U > 360) {
            R++;
            U -= 360
        }
        while (U > 60) {
            S++;
            U -= 60
        }
        return (R > 0 ? R < 10 ? "0" + R + ":" : R + ":" : "") + (S < 10 ? "0" + S : S) + ":" + (U < 10 ? "0" + U : U)
    };
    getDurationFromTimeSpan = function(U) {
        var T = 0;
        var S = 0;
        var R = 0;
        U = U.replace("PT", "");
        if (U.indexOf("H") > -1) {
            R = U.split("H")[0];
            U = U.split("H")[1]
        }
        if (U.indexOf("M") > -1) {
            S = U.split("M")[0];
            U = U.split("M")[1]
        }
        T = U.split(".")[0];
        return (R > 0 ? R < 10 ? "0" + R + ":" : R + ":" : "") + (S < 10 ? "0" + S : S) + ":" + (T < 10 ? "0" + T : T)
    };
    resolveCoverArtSource = function(R, S) {
        if (R && S) {
            return S.replace("PLACEHOLDER_KEY", R + "_144x144.jpg")
        }
        return null
    };
    resolvePublicPicture = function(T, R, S) {
        if (T && R) {
            if (!S) {
                return storageUrl + "/public-picture/" + T
            } else {
                return R.replace("PLACEHOLDER_KEY", T)
            }
        }
        return null
    };
    showRequestDialog = function(R, T) {
        var S = [{
            text: "Cancel",
            click: function() {
                $(this).requestDialogWidget("destroy")
            }
        }];
        $("<div>").requestDialogWidget({
            shared: T,
            mediaItem: R,
            resizable: false,
            width: "auto",
            height: "auto",
            dialogClass: "spacial-widget-dialog",
            close: function() {
                $(this).requestDialogWidget("destroy")
            },
            buttons: S
        })
    };
    showMediaItemInfoDialog = function(R, T) {
        var S = [{
            text: "Close",
            click: function() {
                $(this).mediaItemInfoDialogWidget("destroy")
            }
        }];
        $("<div>").mediaItemInfoDialogWidget({
            shared: T,
            mediaItem: R,
            resizable: false,
            width: "auto",
            height: "auto",
            dialogClass: "spacial-widget-dialog",
            close: function() {
                $(this).mediaItemInfoDialogWidget("destroy")
            },
            buttons: S
        })
    };
    showScheduledDJInfoDialog = function(T, R) {
        var S = [{
            text: "Close",
            click: function() {
                $(this).scheduledDJInfoDialogWidget("destroy")
            }
        }];
        $("<div>").scheduledDJInfoDialogWidget({
            shared: T,
            djInfo: R,
            resizable: false,
            width: "auto",
            height: "auto",
            dialogClass: "spacial-widget-dialog",
            close: function() {
                $(this).scheduledDJInfoDialogWidget("destroy")
            },
            buttons: S
        })
    };
    showDedicationMessagesDialog = function(S) {
        var R = [{
            text: "Cancel",
            click: function() {
                $(this).dedicationMessagesDialogWidget("destroy")
            }
        }];
        $("<div>").dedicationMessagesDialogWidget({
            requestItems: S,
            theme: J,
            themeType: A,
            resizable: false,
            width: "auto",
            height: "auto",
            dialogClass: "spacial-widget-dialog",
            close: function() {
                $(this).dedicationMessagesDialogWidget("destroy")
            },
            buttons: R
        })
    }
});
WidgetController = function(args) {
    this.baseURL = args.baseUrl;
    this.fallbackURL = args.fallbackURL;
    this.showArt = args.showArt;
    this.historyLimit = args.historyLimit;
    this.libraryLimit = args.libraryLimit;
    this.queueLimit = args.queueLimit;
    this.timelineHours = args.timelineHours;
    this.theme = args.theme;
    this.themeType = args.themeType;
    this.playerBaseURL = args.playerBaseURL;
    this.scriptBase = args.scriptBase;
    this.showBuyButton = args.showBuyButton;
    this.startPlayer = args.startPlayer;
    this.storageUrl = args.storageUrl;
    this.bgColor = args.bgColor;
    this.fontColor = args.fontColor;
    this.borderColor = args.borderColor;
    this.buttonColor = args.buttonColor;
    this.libraryStart = 0;
    this.searchTearm = "";
    this.startsWith = "";
    this.filterFields = "";
    this.isSearch = false;
    this.coverArtBase = "";
    this.pictureStorageBase = "";
    this.token = "";
    this.stationId = "";
    this.subscribeTo = "";
    this.stationResult = null;
    this.requestEnabled = false;
    this.lastDedicationItemId = null;
    this.webapi = null;
    var context = this;
    this.GenerateWidgets = function() {
        var context = this;
        $ = jQuery;
        $("div[class*='spacial-widget-']").each(function() {
            var classList = $(this)[0].classList;
            var info;
            for (var i = 0; i < classList.length; i++) {
                if (classList[i].indexOf("spacial-widget-") === 0) {
                    info = classList[i];
                    break
                }
            }
            $(this).addClass("spacial-widget");
            if (context.themeType !== "custom" || (context.themeType === "custom" && context.theme.indexOf(".css") === -1)) {
                $(this).addClass(context.theme + "-theme")
            }
            $(this).html("<div class='loading-widget'><span class='fa fa-spin fa-spinner'></span><span class='loading-text'>Loading, please be patient...</span></div>");
            info = info.split("-");
            if (context.subscribeTo.split("|").indexOf(info[2]) === -1) {
                context.subscribeTo += info[2] + "|"
            }
            context.stationId = info[3];
            context.token = info[4]
        });
        this.subscribeTo = this.subscribeTo.substring(0, this.subscribeTo.length - 1);
        var SharedVars = {
            baseURL: this.baseURL,
            fallbackURL: this.fallbackURL,
            stationId: this.stationId,
            token: this.token,
            showArt: this.showArt,
            playerBaseURL: this.playerBaseURL,
            scriptBase: this.scriptBase,
            theme: this.theme,
            themeType: this.themeType,
            requestEnabled: this.requestEnabled,
            dedicationEnabled: this.dedicationEnabled,
            controller: this,
            showBuyButton: this.showBuyButton,
            storageUrl: this.storageUrl,
            bgColor: this.bgColor,
            fontColor: this.fontColor,
            borderColor: this.borderColor,
            buttonColor: this.buttonColor
        };
        this.webapi = new WebapiHelper(SharedVars);
        var widgets = this.subscribeTo ? this.subscribeTo.split("|") : [];
        if (widgets.length > 0) {
            this.webapi.getStationData(function(result) {
                context.stationResult = result;
                context.coverArtBase = result.CoverArtBase;
                context.pictureStorageBase = result.PictureStorageBase;
                context.webapi.setCoverArtBase(result.CoverArtBase);
                context.webapi.setPictureStorageBase(result.PictureStorageBase);
                context.webapi.setRequestEnabled(result.RequestEnabled);
                context.requestEnabled = result.RequestEnabled;
                context.webapi.setDedicationEnabled(result.DedicationEnabled);
                context.dedicationEnabled = result.DedicationEnabled;
                context.writeToken = result.WriteToken;
                context.updateWidgets(widgets)
            }, false)
        }
    };
    this.updateWidgets = function(widgets, timer) {
        var context = this;
        this.widgets = widgets;
        for (var i = 0; i < widgets.length; i++) {
            switch (widgets[i]) {
                case "info":
                    if (!timer) {
                        if (this.stationResult) {
                            this.updateStationInfo(this.stationResult, this.webapi.shared, true, false)
                        } else {
                            this.webapi.getStationData(this.updateStationInfo, true, true, false)
                        }
                    }
                    break;
                case "infoTrans":
                    if (!timer) {
                        this.webapi.getStationData(this.updateStationInfo, true, false, true)
                    }
                    break;
                case "library":
                    if (!timer) {
                        this.libraryStart = 0;
                        this.webapi.getLibrary(this.updateLibrary, this.libraryStart, this.libraryLimit, null, "MUS", null, null, true, this)
                    }
                    break;
                case "now":
                    this.webapi.getNowPlaying(this.updateNowPlaying);
                    break;
                case "history":
                    this.webapi.getHistory(this.updateHistory, this.historyLimit);
                    break;
                case "linupTile":
                case "linup":
                    this.webapi.getQueue(this.updateLineup, this.queueLimit, "MUS,NWS,INT");
                    break;
                case "dedication":
                    var context = this;
                    this.webapi.getNowPlaying(function(result, shared) {
                        var historyItemId = result.m_Item1;
                        var mediaItem = result.m_Item2;
                        mediaItem.HistoryItemId = historyItemId;
                        context.nowPlayingResult = mediaItem;
                        shared.controller.nowPlayingResult = mediaItem;
                        context.webapi.getMediaItemDedications(context.updateDedications, context.nowPlayingResult.MediaItemId, 3, null, context.nowPlayingResult.HistoryItemId)
                    });
                    break;
                case "player":
                    if (!timer) {
                        this.updatePlayerWidget(this.webapi.shared)
                    }
                    break;
                case "currentShow":
                    var context = this;
                    this.webapi.getCurrentShow(function(scheduledShow, shared) {
                        context.updateCurrentShowWidget(scheduledShow, shared)
                    });
                    break;
                case "showTimeline":
                    var context = this;
                    if (!timer) {
                        this.refreshShowTimeline();
                        this.resetShowTimelineTimeout(60000)
                    }
                    break
            }
        }
        setTimeout(function() {
            context.updateWidgets(widgets, true)
        }, 30000)
    };
    this.refreshShowTimeline = function(callback) {
        var context = this;
        this.webapi.getShowTimeline(function(scheduledShows, shared) {
            if (callback) {
                callback()
            }
            context.updateShowTimelineWidget(scheduledShows, shared);
            context.lastScheduledShows = scheduledShows
        }, this.timelineHours)
    };
    this.resetShowTimelineTimeout = function(timeout) {
        if (window.spacialShowTimelineTimeout) {
            window.clearTimeout(window.spacialShowTimelineTimeout);
            window.spacialShowTimelineTimeout = null
        }
        window.spacialShowTimelineTimeout = window.setTimeout(function() {
            context.refreshShowTimeline();
            context.resetShowTimelineTimeout(timeout)
        }, timeout)
    };
    this.updateStationInfo = function(result, shared, showPlayer) {
        var context = this;
        this.coverArtBase = result.CoverArtBase;
        this.pictureStorageBase = result.PictureStorageBase;
        var stationInfoWidgetContainers = [];
        stationInfoWidgetContainers.push($(".spacial-widget-info-" + shared.stationId + "-" + shared.token));
        stationInfoWidgetContainers.push($(".spacial-widget-infoTrans-" + shared.stationId + "-" + shared.token));
        context.stationInfoWidgets = context.stationInfoWidgets ? context.stationInfoWidgets : [];
        for (var i in stationInfoWidgetContainers) {
            var stationInfoWidgetContainer = stationInfoWidgetContainers[i];
            stationInfoWidgetContainer.each(function() {
                window.stationInfoWidgetId = window.stationInfoWidgetId ? window.stationInfoWidgetId : 0;
                var id;
                if ($(this).attr("widgetid")) {
                    id = $(this).attr("widgetid")
                } else {
                    id = "spacial/stationInfoWidget-" + ++window.stationInfoWidgetId;
                    $(this).attr("widgetid", id)
                }
                if (context.stationInfoWidgets[id]) {
                    $(context.stationInfoWidgets[id][0].id).stationInfoWidget("destroy")
                }
                context.stationInfoWidgets[id] = $(this).stationInfoWidget({
                    station: result,
                    shared: shared,
                    showPlayer: !$(this).hasClass("spacial-widget-infoTrans-" + shared.stationId + "-" + shared.token),
                    playerBaseURL: shared.playerBaseURL,
                    transparent: $(this).hasClass("spacial-widget-infoTrans-" + shared.stationId + "-" + shared.token)
                });
                $(this).stationInfoWidget("updateTextWidth");
                try {
                    window.widgetController._attachEvents(context.stationInfoWidgets[id], stationInfoWidgetContainer);
                    if (context.stationInfoWidgets[id].onresult) {
                        context.stationInfoWidgets[id].onresult(result)
                    }
                } catch (e) {
                    console.error(e)
                }
            })
        }
    };
    this.updateNowPlaying = function(result, shared) {
        var context = this;
        var historyItemId = result.m_Item1;
        var mediaItem = result.m_Item2;
        mediaItem.HistoryItemId = historyItemId;
        try {
            if (this.nowPlayingResult && this.nowPlayingResult.MediaItemId === mediaItem.MediaItemId) {
                return
            }
        } catch (e) {
            return
        }
        this.nowPlayingResult = mediaItem;
        shared.controller.nowPlayingResult = mediaItem;
        var nowPlayingWidgetContainer = $(".spacial-widget-now-" + shared.stationId + "-" + shared.token);
        nowPlayingWidgetContainer.each(function() {
            if (context.nowPlayingWidget) {
                $(this).nowPlayingWidget("destroy")
            }
            context.nowPlayingWidget = $(this).nowPlayingWidget({
                mediaItem: mediaItem,
                shared: shared
            })
        })
    };
    this.updateHistory = function(results, shared) {
        var context = this;
        var i = results.length - 1;
        try {
            if (this.historyResults && this.historyResults !== undefined && this.historyResults.length === results.length && this.historyResults[0].MediaItemId === results[0].MediaItemId && this.historyResults[i].MediaItemId === results[i].MediaItemId) {
                return
            }
        } catch (e) {
            return
        }
        this.historyResults = results;
        var historyWidgetContainer = $(".spacial-widget-history-" + shared.stationId + "-" + shared.token);
        historyWidgetContainer.each(function() {
            if (context.historyWidget) {
                $(this).historyWidget("destroy")
            }
            context.historyWidget = $(this).historyWidget({
                historyItems: results,
                shared: shared
            });
            try {
                window.widgetController._attachEvents(context.historyWidget, historyWidgetContainer);
                if (context.historyWidget.onresult) {
                    context.historyWidget.onresult(results)
                }
            } catch (e) {
                console.error(e)
            }
        })
    };
    this.updateLineup = function(results, shared) {
        var context = this;
        try {
            var refresh = false;
            if (this.linupResults && this.linupResults.length === results.length) {
                for (var i = 0; i < results.length; i++) {
                    if (this.linupResults[i].MediaItem.MediaItemId !== results[i].MediaItem.MediaItemId) {
                        refresh = true;
                        break
                    }
                }
                if (!refresh) {
                    return
                }
            }
        } catch (e) {
            return
        }
        this.linupResults = results;
        var lineupInlineWidgetContainer = $(".spacial-widget-linup-" + shared.stationId + "-" + shared.token);
        if (lineupInlineWidgetContainer[0]) {
            lineupInlineWidgetContainer.each(function() {
                if (context.lineupInlineWidget) {
                    $(this).lineupWidget("destroy")
                }
                context.lineupInlineWidget = $(this).lineupWidget({
                    mediaItems: results,
                    shared: shared
                });
                try {
                    window.widgetController._attachEvents(context.lineupInlineWidget, $(this));
                    if (results.length === 0 && context.lineupInlineWidget.onempty) {
                        context.lineupInlineWidget.onempty()
                    }
                    if (context.lineupInlineWidget.onresult) {
                        context.lineupInlineWidget.onresult(results)
                    }
                } catch (e) {
                    console.error(e)
                }
            })
        }
        var linupTileContainer = $(".spacial-widget-linupTile-" + shared.stationId + "-" + shared.token);
        if (linupTileContainer[0]) {
            context.mediaSlideWidget = context.mediaSlideWidget ? context.mediaSlideWidget : [];
            linupTileContainer.each(function() {
                var initScroll = $(this).attr("slide-scroll-x") ? window.parseInt($(this).attr("slide-scroll-x")) || 0 : 0;
                window.linupTileWidgetId = window.linupTileWidgetId ? window.linupTileWidgetId : 0;
                var id;
                if ($(this).attr("widgetid")) {
                    id = $(this).attr("widgetid")
                } else {
                    id = "spacial/linupTile-" + ++window.linupTileWidgetId;
                    $(this).attr("widgetid", id)
                }
                if (context.mediaSlideWidget[id]) {
                    $(context.mediaSlideWidget[id][0].id).mediaSlideWidget("destroy")
                }
                context.mediaSlideWidget[id] = $(this).mediaSlideWidget({
                    shared: shared,
                    slideItems: results,
                    initScroll: initScroll
                });
                try {
                    window.widgetController._attachEvents(context.mediaSlideWidget[id], $(this));
                    if (results.length === 0 && context.mediaSlideWidget[id].onempty) {
                        context.mediaSlideWidget[id].onempty()
                    }
                    if (context.mediaSlideWidget[id].onresult) {
                        context.mediaSlideWidget[id].onresult(results)
                    }
                } catch (e) {
                    console.error(e)
                }
            })
        }
    };
    this.searchLibrary = function(search, fields) {
        this.libraryStart = 0;
        this.startsWith = null;
        this.filterFields = fields ? fields.join() : null;
        this.searchTearm = search;
        this.isSearch = search ? true : false;
        this.webapi.getLibrary(this.updateLibrary, this.libraryStart, this.libraryLimit, search, "MUS", this.filterFields, null, true, this)
    };
    this.nextPrevious = function(direction, start) {
        this.isSearch = false;
        if (direction === "next") {
            this.libraryStart += parseInt(this.libraryLimit)
        } else {
            if (direction === "last") {
                this.libraryStart -= parseInt(this.libraryLimit)
            } else {
                if (direction === "prev") {
                    this.libraryStart -= parseInt(this.libraryLimit)
                } else {
                    if (direction === "first") {
                        this.libraryStart = 0
                    }
                }
            }
        }
        if (start || start > -1) {
            this.libraryStart = start < 0 ? 0 : start
        }
        this.webapi.getLibrary(this.updateLibrary, this.libraryStart, this.libraryLimit, this.searchTearm, "MUS", this.filterFields, this.startsWith, true, this)
    };
    this.filterLibrary = function(startsWith, fields) {
        this.libraryStart = 0;
        this.searchTearm = "";
        this.startsWith = startsWith;
        this.filterFields = fields.join();
        this.webapi.getLibrary(this.updateLibrary, this.libraryStart, this.libraryLimit, "", "MUS", this.filterFields, this.startsWith, true, this)
    };
    this.updateLibrary = function(result, shared, parent, startAt, contentRange) {
        var libraryWidgetContainer = $(".spacial-widget-library-" + shared.stationId + "-" + shared.token);
        libraryWidgetContainer.each(function() {
            if (context.libraryWidget) {
                $(this).libraryWidget("destroy")
            }
            context.libraryWidget = $(this).libraryWidget({
                libraryItems: result,
                shared: shared,
                caller: parent,
                offset: startAt,
                contentRange: contentRange,
                focusInput: parent.isSearch
            });
            try {
                window.widgetController._attachEvents(context.libraryWidget, libraryWidgetContainer);
                if (context.libraryWidget.onresult) {
                    context.libraryWidget.onresult(result)
                }
            } catch (e) {
                console.error(e)
            }
        })
    };
    this.updateDedications = function(result, shared) {
        var dedicationWidgetContainer = $(".spacial-widget-dedication-" + shared.stationId + "-" + shared.token);
        context.dedicationWidgets = context.dedicationWidgets ? context.dedicationWidgets : [];
        dedicationWidgetContainer.each(function() {
            window.dedicationWidgetId = window.dedicationWidgetId ? window.dedicationWidgetId : 0;
            var id;
            if ($(this).attr("widgetid")) {
                id = $(this).attr("widgetid")
            } else {
                id = "spacial/dedicationWidget-" + ++window.dedicationWidgetId;
                $(this).attr("widgetid", id)
            }
            if (context.dedicationWidgets[id]) {
                $(context.dedicationWidgets[id][0].id).dedicationWidget("destroy")
            }
            context.dedicationWidgets[id] = $(this).dedicationWidget({
                shared: shared,
                requestItems: result,
                playingItem: shared.controller.nowPlayingResult
            });
            try {
                window.widgetController._attachEvents(context.dedicationWidgets[id], $(this));
                if (context.dedicationWidgets[id].onresult) {
                    context.dedicationWidgets[id].onresult(result)
                }
                if (context.dedicationWidgets[id].ondedicationstatus) {
                    context.dedicationWidgets[id].ondedicationstatus(shared.requestEnabled && shared.dedicationEnabled)
                }
            } catch (e) {
                console.error(e)
            }
        })
    };
    this.updateCurrentShowWidget = function(scheduledShow, shared) {
        context.currentShowWidgets = context.currentShowWidgets ? context.currentShowWidgets : [];
        var currentShowWidgetContainer = $(".spacial-widget-currentShow-" + shared.stationId + "-" + shared.token);
        currentShowWidgetContainer.each(function() {
            window.currentShowWidgetId = window.currentShowWidgetId ? window.currentShowWidgetId : 0;
            var id;
            if ($(this).attr("widgetid")) {
                id = $(this).attr("widgetid")
            } else {
                id = "spacial/currentShowWidget-" + ++window.currentShowWidgetId;
                $(this).attr("widgetid", id)
            }
            if (context.currentShowWidgets[id]) {
                $(context.currentShowWidgets[id][0].id).currentShowWidget("destroy")
            }
            context.currentShowWidgets[id] = $(this).currentShowWidget({
                shared: shared,
                scheduledShow: scheduledShow
            });
            try {
                window.widgetController._attachEvents(context.currentShowWidgets[id], $(this));
                if (context.currentShowWidgets[id].onresult) {
                    context.currentShowWidgets[id].onresult(scheduledShow)
                }
                if (!scheduledShow && context.currentShowWidgets[id].onempty) {
                    context.currentShowWidgets[id].onempty()
                }
            } catch (e) {
                console.error(e)
            }
        })
    };
    this.updateShowTimelineWidget = function(scheduledShows, shared) {
        context.showTimelineWidgets = context.showTimelineWidgets ? context.showTimelineWidgets : [];
        var showTimelineWidgetContainer = $(".spacial-widget-showTimeline-" + shared.stationId + "-" + shared.token);
        showTimelineWidgetContainer.each(function() {
            window.showTimelineWidgetId = window.showTimelineWidgetId ? window.showTimelineWidgetId : 0;
            var id;
            if ($(this).attr("widgetid")) {
                id = $(this).attr("widgetid")
            } else {
                id = "spacial/showTimelineWidget-" + ++window.showTimelineWidgetId;
                $(this).attr("widgetid", id)
            }
            if (context.showTimelineWidgets[id]) {
                $(context.showTimelineWidgets[id][0].id).showTimelineWidget("destroy")
            }
            context.showTimelineWidgets[id] = $(this).showTimelineWidget({
                shared: shared,
                scheduledShows: scheduledShows
            });
            try {
                window.widgetController._attachEvents(context.showTimelineWidgets[id], $(this));
                if (context.showTimelineWidgets[id].onresult) {
                    context.showTimelineWidgets[id].onresult(scheduledShows)
                }
                if ((!scheduledShows || scheduledShows.length === 0) && context.showTimelineWidgets[id].onempty) {
                    context.showTimelineWidgets[id].onempty()
                }
            } catch (e) {
                console.error(e)
            }
        })
    };
    this.updatePlayerWidget = function(shared) {
        var playerWidgetContainer = $(".spacial-widget-player-" + shared.stationId + "-" + shared.token);
        var options = {};
        options.shared = shared;
        context.playerWidgets = context.playerWidgets ? context.playerWidgets : [];
        playerWidgetContainer.each(function() {
            if ($(this).attr("data-style") && $(this).attr("data-style") == 2) {
                options.style = 2
            } else {
                options.style = 1
            }
            if ($(this).attr("data-autostart")) {
                context.startPlayer = $(this).attr("data-autostart") == "true"
            }
            if ($(this).attr("data-rid")) {
                try {
                    context.rid = window.parseInt($(this).attr("data-rid"))
                } catch (ex) {
                    console.warn("rid is not of type int");
                    context.rid = 0
                }
            }
            if ($(this).attr("data-playerTrackTitleColor")) {
                options.playerTrackTitleColor = $(this).attr("data-playerTrackTitleColor")
            }
            if ($(this).attr("data-playerAccentColor")) {
                options.playerAccentColor = $(this).attr("data-playerAccentColor")
            }
            if ($(this).attr("data-playerBackgroundColor")) {
                options.playerBackgroundColor = $(this).attr("data-playerBackgroundColor")
            }
            if ($(this).attr("data-playerPrimaryColor")) {
                options.playerPrimaryColor = $(this).attr("data-playerPrimaryColor")
            }
            if ($(this).attr("data-textColor")) {
                options.textColor = $(this).attr("data-textColor")
            }
            window.playerWidgetId = window.playerWidgetId ? window.playerWidgetId : 0;
            var id;
            if ($(this).attr("widgetid")) {
                id = $(this).attr("widgetid")
            } else {
                id = "spacial/playerWidget-" + ++window.playerWidgetId;
                $(this).attr("widgetid", id)
            }
            if (context.playerWidgets[id]) {
                $(context.playerWidgets[id][0].id).playerWidget("destroy")
            }
            context.playerWidgets[id] = $(this).playerWidget(options);
            try {
                window.widgetController._attachEvents(context.playerWidgets[id], $(this));
                if (context.playerWidgets[id].onload) {
                    context.playerWidgets[id].onload()
                }
            } catch (e) {
                console.error(e)
            }
        });
        this.tdPlayerApiReady(options.style !== 2)
    };
    this.tdPlayerApiReady = function(ShowBuyButtonIcons) {
        var context = this;
        setTimeout(function() {
            if (document.scriptsLoaded) {
                context.wrapper = new PlayerWidget();
                context.wrapper.constructor({
                    StationId: context.stationId,
                    Token: context.token,
                    RID: context.rid || 0,
                    BaseURL: baseURL,
                    FallbackURL: fallbackURL,
                    PlayerPlatFormId: playerPlatFormId,
                    StartPlayer: context.startPlayer,
                    MaxSliderWidth: 200,
                    ShowStatus: false,
                    ShowBuyButton: context.showBuyButton,
                    storageUrl: storageUrl,
                    ShowBuyButtonIcons: ShowBuyButtonIcons
                });
                if ($("#isPollingEnabled") && $("#isPollingEnabled").val()) {
                    context.wrapper.isPollingEnabled = $("#isPollingEnabled").val() === "true" ? true : false
                }
                context.wrapper.createPlayer()
            } else {
                context.tdPlayerApiReady()
            }
        }, 700)
    };
    this.getLastPlayed = function() {
        if (this.wrapper) {
            this.wrapper.getLastPlayed()
        }
    };
    this._attachEvents = function(widget, widgetContainer) {
        try {
            if (widget && widgetContainer.attr("data-spacial-attach-event")) {
                var attachEvent = widgetContainer.attr("data-spacial-attach-event");
                var event, events = attachEvent.split(/\s*,\s*/);
                while ((event = events.shift())) {
                    if (event) {
                        var thisFunc = null;
                        if (event.indexOf(":") !== -1) {
                            var funcNameArr = event.split(":");
                            event = funcNameArr[0].trim();
                            thisFunc = funcNameArr[1].trim()
                        } else {
                            event = event.trim()
                        }
                        if (!thisFunc) {
                            thisFunc = event
                        }
                        widget[event.toLowerCase()] = eval(thisFunc)
                    }
                }
            }
        } catch (e) {
            console.error(e)
        }
    }
};
var wrapper;

function play() {
    this.widgetController.wrapper.play()
}

function stop() {
    this.widgetController.wrapper.stop()
}

function updateStationInfo(A) {
    var B = $("#spacial-player-widget-info")[0];
    if (B) {
        this.widgetController.wrapper.updateStationInfo(A)
    }
}

function updateFromMediaItem(A) {
    this.widgetController.wrapper.updateFromMediaItem(A)
}

function updateDedications(A) {
    this.widgetController.wrapper.updateDedications(A)
}
var codec = null;
checkBrowserCodecSupport = function() {
    if (!codec) {
        var A = null;
        A = new Audio();
        codec = {
            mp3: !!A.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            opus: !!A.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!A.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!A.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
            aac: !!A.canPlayType("audio/aac;").replace(/^no$/, ""),
            m4a: !!(A.canPlayType("audio/x-m4a;") || A.canPlayType("audio/m4a;") || A.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(A.canPlayType("audio/x-mp4;") || A.canPlayType("audio/mp4;") || A.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !!A.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
        }
    }
    return codec
};

function mobilecheck() {
    var A = false;
    (function(B) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(B) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(B.substr(0, 4))) {
            A = true
        }
    })(navigator.userAgent || navigator.vendor || window.opera);
    return A
}

function formatTime(A, B, C) {
    return (A ? ((A < 10 ? "0" : "") + A) : "") + (":" + (B < 10 ? "0" : "") + B) + (C ? (":" + (C < 10 ? "0" : "") + C) : "")
}

function tdPlayerApiReady() {
    document.tdPlayerReady = true
}
WebapiHelper = function(A) {
    this.baseURL = A.baseURL;
    this.fallbackURL = A.fallbackURL;
    this.stationId = A.stationId;
    this.token = A.token;
    this.shared = A;
    this.coverArtBase = null;
    this.retry = 0;
    this.backoffTimout = 800;
    var B = this;
    this.getStationData = function(G, D, F, E) {
        var C = this.baseURL + this.stationId + "?token=" + this.token + "&format=json";
        $.ajax({
            url: C,
            cache: false,
            datatype: "jsonp",
            type: "GET",
            timeout: 10000,
            async: D ? D : true,
            success: function(H) {
                G(H, B.shared, F, E);
                try {
                    spacialStationDetailsCallback(H, B.shared)
                } catch (I) {}
            },
            error: function(H, J, I) {
                B.retry++;
                setTimeout(function() {
                    if (B.retry > 2) {
                        B.baseURL = B.fallbackURL
                    }
                    B.backoffTimout *= 2;
                    B.getStationData(G, D, F)
                }, B.backoffTimout);
                H.abort()
            }
        })
    };
    this.getNowPlaying = function(F, E) {
        var D = this;
        if (D.baseURL !== D.fallbackURL) {
            var C = this.baseURL + this.stationId + "/history/npe?token=" + this.token + "&format=json";
            $.ajax({
                url: C,
                cache: false,
                datatype: "jsonp",
                type: "GET",
                timeout: 10000,
                async: E ? E : true,
                success: function(G) {
                    F(G, D.shared);
                    try {
                        spacialNowPlayingCallback(G, D.shared)
                    } catch (H) {}
                },
                error: function(G, I, H) {
                    G.abort()
                }
            })
        }
    };
    this.getHistory = function(G, C, F) {
        var E = this;
        if (E.baseURL !== E.fallbackURL) {
            var D = this.baseURL + this.stationId + "/history?token=" + this.token + "&top=" + C + "&mediaTypeCodes=MUS,COM,NWS,INT&format=json";
            $.ajax({
                url: D,
                cache: false,
                datatype: "jsonp",
                type: "GET",
                timeout: 10000,
                async: F ? F : true,
                success: function(H) {
                    G(H, E.shared);
                    try {
                        spacialHistoryCallback(H, E.shared)
                    } catch (I) {}
                },
                error: function(H, J, I) {
                    H.abort()
                }
            })
        }
    };
    this.getQueue = function(H, D, F, G) {
        var E = this;
        if (E.baseURL !== E.fallbackURL) {
            var C = this.baseURL + this.stationId + "/queue?token=" + this.token + "&top=" + D + "&musicTypeCodes=" + F + "&format=json";
            $.ajax({
                url: C,
                cache: false,
                datatype: "jsonp",
                type: "GET",
                timeout: 10000,
                async: G ? G : true,
                success: function(I) {
                    H(I, E.shared);
                    try {
                        spacialLinupCallback(I, E.shared)
                    } catch (J) {}
                },
                error: function(I, K, J) {
                    I.abort()
                }
            })
        }
    };
    this.getLibrary = function(Q, K, H, J, F, M, I, G, P) {
        var E = this;
        if (E.baseURL !== E.fallbackURL) {
            var D = K ? K : 0;
            var L = H ? H : 0;
            var S = J ? J : "";
            var R = F ? F : "";
            var O = M ? M : "";
            var N = I ? I : "";
            var C = this.baseURL + this.stationId + "/library?format=json&token=" + this.token + "&start=" + D + "&top=" + L + "&search=" + S + "&mediaTypeCodes=" + R + "&browseField=" + O + "&startsWith=" + N + "";
            $.ajax({
                url: C,
                cache: false,
                datatype: "jsonp",
                type: "GET",
                timeout: 10000,
                async: G ? G : true,
                success: function(T, U, W) {
                    Q(T, E.shared, P, K, W.getResponseHeader("Content-Range"));
                    try {
                        spacialLibraryCallback(T, E.shared, K, W.getResponseHeader("Content-Range"))
                    } catch (V) {}
                },
                error: function(T, V, U) {
                    T.abort()
                }
            })
        }
    };
    this.requestMediaItem = function(J, D, H, C, I, G) {
        var F = this;
        var E = this.fallbackURL + this.stationId + "/request/" + H + "?token=" + I + "&format=json";
        $.ajax({
            url: E,
            datatype: "jsonp",
            type: "POST",
            timeout: 10000,
            cache: false,
            data: C,
            success: function(K) {
                J(K, F.shared)
            },
            error: function(K, M, L) {
                D(K, M, L);
                K.abort()
            }
        })
    };
    this.getMediaItemDedications = function(H, D, C, F, G) {
        if (B.baseURL !== B.fallbackURL) {
            var E = B.baseURL + this.stationId + "/mediaitemdedications/" + D + "?dedicationView=" + C + "&itemId=" + G + "&token=" + this.token + "&format=json" + (F ? "&callback=" + F : "");
            $.ajax({
                url: E,
                cache: false,
                datatype: "jsonp",
                callback: "jsonCallback",
                type: "GET",
                timeout: 10000,
                success: function(I) {
                    if (H) {
                        H(I, B.shared)
                    }
                    try {
                        spacialDedicationsCallback(I, B.shared)
                    } catch (J) {}
                },
                error: function(I, K, J) {
                    I.abort()
                }
            })
        }
    };
    this.getCurrentShow = function(E, D) {
        var C = this.baseURL + this.stationId + "/RetrieveOnAirShow?token=" + this.token + "&format=json";
        $.ajax({
            url: C,
            cache: false,
            datatype: "jsonp",
            type: "GET",
            timeout: 10000,
            async: D ? D : true,
            success: function(F) {
                E(F, B.shared)
            },
            error: function(F, H, G) {
                F.abort()
            }
        })
    };
    this.getShowTimeline = function(F, D, E) {
        var C = this.baseURL + this.stationId + "/RetrieveScheduledShows?token=" + this.token + "&hours=" + D + "&format=json";
        $.ajax({
            url: C,
            cache: false,
            datatype: "jsonp",
            type: "GET",
            timeout: 10000,
            async: E ? E : true,
            success: function(G) {
                F(G, B.shared)
            },
            error: function(G, I, H) {
                G.abort()
            }
        })
    };
    this.setCoverArtBase = function(C) {
        this.shared.coverArtBase = C;
        this.coverArtBase = C
    };
    this.setPictureStorageBase = function(C) {
        this.shared.pictureStorageBase = C;
        this.pictureStorageBase = C
    };
    this.setRequestEnabled = function(C) {
        this.shared.requestEnabled = C;
        this.requestEnabled = C
    };
    this.setDedicationEnabled = function(C) {
        this.shared.dedicationEnabled = C;
        this.dedicationEnabled = C
    }
};