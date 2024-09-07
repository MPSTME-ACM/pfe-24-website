!(function () {
  "use strict";
  "undefined" != typeof Element &&
    (Element.prototype.matches ||
      (Element.prototype.matches =
        Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector),
    Element.prototype.closest ||
      (Element.prototype.closest = function (e) {
        var t = this;
        do {
          if (t.matches(e)) return t;
          t = t.parentElement || t.parentNode;
        } while (null !== t && 1 === t.nodeType);
        return null;
      })),
    Array.prototype.forEach ||
      (Array.prototype.forEach = function (e, t) {
        t = t || window;
        for (var n = 0; n < this.length; n++) e.call(t, this[n], n, this);
      }),
    "undefined" != typeof window &&
      window.NodeList &&
      !NodeList.prototype.forEach &&
      (NodeList.prototype.forEach = Array.prototype.forEach),
    (function (e) {
      if ("undefined" != typeof window) {
        var t,
          n = 0,
          o = !1,
          i = !1,
          a = 7,
          r = "[iFrameSizer]",
          l = r.length,
          d = null,
          s = window.requestAnimationFrame,
          c = Object.freeze({
            max: 1,
            scroll: 1,
            bodyScroll: 1,
            documentElementScroll: 1,
          }),
          u = {},
          m = null,
          f = Object.freeze({
            autoResize: !0,
            bodyBackground: null,
            bodyMargin: null,
            bodyMarginV1: 8,
            bodyPadding: null,
            checkOrigin: !0,
            inPageLinks: !1,
            enablePublicMethods: !0,
            heightCalculationMethod: "bodyOffset",
            id: "iFrameResizer",
            interval: 32,
            log: !1,
            maxHeight: 1 / 0,
            maxWidth: 1 / 0,
            minHeight: 0,
            minWidth: 0,
            mouseEvents: !0,
            resizeFrom: "parent",
            scrolling: !1,
            sizeHeight: !0,
            sizeWidth: !1,
            warningTimeout: 5e3,
            tolerance: 0,
            widthCalculationMethod: "scroll",
            onClose: function () {
              return !0;
            },
            onClosed: function () {},
            onInit: function () {},
            onMessage: function () {
              x("onMessage function not defined");
            },
            onMouseEnter: function () {},
            onMouseLeave: function () {},
            onResized: function () {},
            onScroll: function () {
              return !0;
            },
          }),
          p = {};
        window.jQuery !== e &&
          ((t = window.jQuery).fn
            ? t.fn.iFrameResize ||
              (t.fn.iFrameResize = function (e) {
                return this.filter("iframe")
                  .each(function (t, n) {
                    N(n, e);
                  })
                  .end();
              })
            : w("", "Unable to bind to jQuery, it is not fully loaded.")),
          "function" == typeof define && define.amd
            ? define([], B)
            : "object" == typeof module &&
              "object" == typeof module.exports &&
              (module.exports = B()),
          (window.iFrameResize = window.iFrameResize || B());
      }
      function y() {
        return (
          window.MutationObserver ||
          window.WebKitMutationObserver ||
          window.MozMutationObserver
        );
      }
      function h(e, t, n) {
        e.addEventListener(t, n, !1);
      }
      function g(e, t, n) {
        e.removeEventListener(t, n, !1);
      }
      function b(e) {
        return (
          r +
          "[" +
          (function (e) {
            var t = "Host page: " + e;
            return (
              window.top !== window.self &&
                (t =
                  window.parentIFrame && window.parentIFrame.getId
                    ? window.parentIFrame.getId() + ": " + e
                    : "Nested host page: " + e),
              t
            );
          })(e) +
          "]"
        );
      }
      function v(e) {
        return u[e] ? u[e].log : o;
      }
      function _(e, t) {
        k("log", e, t, v(e));
      }
      function w(e, t) {
        k("info", e, t, v(e));
      }
      function x(e, t) {
        k("warn", e, t, !0);
      }
      function k(e, t, n, o) {
        !0 === o && "object" == typeof window.console && console[e](b(t), n);
      }
      function O(e) {
        function t() {
          i("Height"),
            i("Width"),
            F(
              function () {
                R(H), C(B), v("onResized", H);
              },
              H,
              "init"
            );
        }
        function n(e) {
          return "border-box" !== e.boxSizing
            ? 0
            : (e.paddingTop ? parseInt(e.paddingTop, 10) : 0) +
                (e.paddingBottom ? parseInt(e.paddingBottom, 10) : 0);
        }
        function o(e) {
          return "border-box" !== e.boxSizing
            ? 0
            : (e.borderTopWidth ? parseInt(e.borderTopWidth, 10) : 0) +
                (e.borderBottomWidth ? parseInt(e.borderBottomWidth, 10) : 0);
        }
        function i(e) {
          var t = Number(u[B]["max" + e]),
            n = Number(u[B]["min" + e]),
            o = e.toLowerCase(),
            i = Number(H[o]);
          _(B, "Checking " + o + " is in range " + n + "-" + t),
            i < n && ((i = n), _(B, "Set " + o + " to min value")),
            i > t && ((i = t), _(B, "Set " + o + " to max value")),
            (H[o] = "" + i);
        }
        function s(e) {
          return A.slice(A.indexOf(":") + a + e);
        }
        function c(e, t) {
          var n, o, i;
          (n = function () {
            var n, o;
            z(
              "Send Page Info",
              "pageInfo:" +
                ((n = document.body.getBoundingClientRect()),
                (o = H.iframe.getBoundingClientRect()),
                JSON.stringify({
                  iframeHeight: o.height,
                  iframeWidth: o.width,
                  clientHeight: Math.max(
                    document.documentElement.clientHeight,
                    window.innerHeight || 0
                  ),
                  clientWidth: Math.max(
                    document.documentElement.clientWidth,
                    window.innerWidth || 0
                  ),
                  offsetTop: parseInt(o.top - n.top, 10),
                  offsetLeft: parseInt(o.left - n.left, 10),
                  scrollTop: window.pageYOffset,
                  scrollLeft: window.pageXOffset,
                  documentHeight: document.documentElement.clientHeight,
                  documentWidth: document.documentElement.clientWidth,
                  windowHeight: window.innerHeight,
                  windowWidth: window.innerWidth,
                })),
              e,
              t
            );
          }),
            (o = 32),
            p[(i = t)] ||
              (p[i] = setTimeout(function () {
                (p[i] = null), n();
              }, o));
        }
        function m(e) {
          var t = e.getBoundingClientRect();
          return (
            T(B),
            {
              x: Math.floor(Number(t.left) + Number(d.x)),
              y: Math.floor(Number(t.top) + Number(d.y)),
            }
          );
        }
        function f(e) {
          var t = e ? m(H.iframe) : { x: 0, y: 0 },
            n = { x: Number(H.width) + t.x, y: Number(H.height) + t.y };
          _(
            B,
            "Reposition requested from iFrame (offset x:" +
              t.x +
              " y:" +
              t.y +
              ")"
          ),
            window.top === window.self
              ? ((d = n), y(), _(B, "--"))
              : window.parentIFrame
              ? window.parentIFrame["scrollTo" + (e ? "Offset" : "")](n.x, n.y)
              : x(
                  B,
                  "Unable to scroll to requested position, window.parentIFrame not found"
                );
        }
        function y() {
          !1 === v("onScroll", d) ? j() : C(B);
        }
        function b(e) {
          var t = {};
          if (0 === Number(H.width) && 0 === Number(H.height)) {
            var n = s(9).split(":");
            t = { x: n[1], y: n[0] };
          } else t = { x: H.width, y: H.height };
          v(e, {
            iframe: H.iframe,
            screenX: Number(t.x),
            screenY: Number(t.y),
            type: H.type,
          });
        }
        function v(e, t) {
          return E(B, e, t);
        }
        var k,
          O,
          I,
          N,
          W,
          L,
          A = e.data,
          H = {},
          B = null;
        "[iFrameResizerChild]Ready" === A
          ? (function () {
              for (var e in u) z("iFrame requested init", P(e), u[e].iframe, e);
            })()
          : r === ("" + A).slice(0, l) && A.slice(l).split(":")[0] in u
          ? ((I = A.slice(l).split(":")),
            (N = I[1] ? parseInt(I[1], 10) : 0),
            (W = u[I[0]] && u[I[0]].iframe),
            (L = getComputedStyle(W)),
            (H = {
              iframe: W,
              id: I[0],
              height: N + n(L) + o(L),
              width: I[2],
              type: I[3],
            }),
            (B = H.id),
            u[B] && (u[B].loaded = !0),
            (O = H.type in { true: 1, false: 1, undefined: 1 }) &&
              _(B, "Ignoring init message from meta parent page"),
            !O &&
              (function (e) {
                var t = !0;
                return (
                  u[e] ||
                    ((t = !1),
                    x(
                      H.type + " No settings for " + e + ". Message was: " + A
                    )),
                  t
                );
              })(B) &&
              (_(B, "Received: " + A),
              (k = !0),
              null === H.iframe &&
                (x(B, "IFrame (" + H.id + ") not found"), (k = !1)),
              k &&
                (function () {
                  var t,
                    n = e.origin,
                    o = u[B] && u[B].checkOrigin;
                  if (
                    o &&
                    "" + n != "null" &&
                    !(o.constructor === Array
                      ? (function () {
                          var e = 0,
                            t = !1;
                          for (
                            _(
                              B,
                              "Checking connection is from allowed list of origins: " +
                                o
                            );
                            e < o.length;
                            e++
                          )
                            if (o[e] === n) {
                              t = !0;
                              break;
                            }
                          return t;
                        })()
                      : ((t = u[B] && u[B].remoteHost),
                        _(B, "Checking connection is from: " + t),
                        n === t))
                  )
                    throw new Error(
                      "Unexpected message received from: " +
                        n +
                        " for " +
                        H.iframe.id +
                        ". Message was: " +
                        e.data +
                        ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains."
                    );
                  return !0;
                })() &&
                (function () {
                  switch (
                    (u[B] && u[B].firstRun && u[B] && (u[B].firstRun = !1),
                    H.type)
                  ) {
                    case "close":
                      S(H.iframe);
                      break;
                    case "message":
                      (a = s(6)),
                        _(
                          B,
                          "onMessage passed: {iframe: " +
                            H.iframe.id +
                            ", message: " +
                            a +
                            "}"
                        ),
                        v("onMessage", {
                          iframe: H.iframe,
                          message: JSON.parse(a),
                        }),
                        _(B, "--");
                      break;
                    case "mouseenter":
                      b("onMouseEnter");
                      break;
                    case "mouseleave":
                      b("onMouseLeave");
                      break;
                    case "autoResize":
                      u[B].autoResize = JSON.parse(s(9));
                      break;
                    case "scrollTo":
                      f(!1);
                      break;
                    case "scrollToOffset":
                      f(!0);
                      break;
                    case "pageInfo":
                      c(u[B] && u[B].iframe, B),
                        (function () {
                          function e(e, o) {
                            function i() {
                              u[n] ? c(u[n].iframe, n) : t();
                            }
                            ["scroll", "resize"].forEach(function (t) {
                              _(n, e + t + " listener for sendPageInfo"),
                                o(window, t, i);
                            });
                          }
                          function t() {
                            e("Remove ", g);
                          }
                          var n = B;
                          e("Add ", h), u[n] && (u[n].stopPageInfo = t);
                        })();
                      break;
                    case "pageInfoStop":
                      u[B] &&
                        u[B].stopPageInfo &&
                        (u[B].stopPageInfo(), delete u[B].stopPageInfo);
                      break;
                    case "inPageLink":
                      (n = s(9).split("#")[1] || ""),
                        (o = decodeURIComponent(n)),
                        (i =
                          document.getElementById(o) ||
                          document.getElementsByName(o)[0])
                          ? ((e = m(i)),
                            _(
                              B,
                              "Moving to in page link (#" +
                                n +
                                ") at x: " +
                                e.x +
                                " y: " +
                                e.y
                            ),
                            (d = { x: e.x, y: e.y }),
                            y(),
                            _(B, "--"))
                          : window.top === window.self
                          ? _(B, "In page link #" + n + " not found")
                          : window.parentIFrame
                          ? window.parentIFrame.moveToAnchor(n)
                          : _(
                              B,
                              "In page link #" +
                                n +
                                " not found and window.parentIFrame not found"
                            );
                      break;
                    case "reset":
                      M(H);
                      break;
                    case "init":
                      t(), v("onInit", H.iframe);
                      break;
                    default:
                      0 === Number(H.width) && 0 === Number(H.height)
                        ? x(
                            "Unsupported message received (" +
                              H.type +
                              "), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"
                          )
                        : t();
                  }
                  var e, n, o, i, a;
                })()))
          : w(B, "Ignored: " + A);
      }
      function E(e, t, n) {
        var o = null,
          i = null;
        if (u[e]) {
          if ("function" != typeof (o = u[e][t]))
            throw new TypeError(t + " on iFrame[" + e + "] is not a function");
          i = o(n);
        }
        return i;
      }
      function I(e) {
        var t = e.id;
        delete u[t];
      }
      function S(e) {
        var t = e.id;
        if (!1 !== E(t, "onClose", t)) {
          _(t, "Removing iFrame: " + t);
          try {
            e.parentNode && e.parentNode.removeChild(e);
          } catch (e) {
            x(e);
          }
          E(t, "onClosed", t), _(t, "--"), I(e);
        } else _(t, "Close iframe cancelled by onClose event");
      }
      function T(t) {
        null === d &&
          _(
            t,
            "Get page position: " +
              (d = {
                x:
                  window.pageXOffset === e
                    ? document.documentElement.scrollLeft
                    : window.pageXOffset,
                y:
                  window.pageYOffset === e
                    ? document.documentElement.scrollTop
                    : window.pageYOffset,
              }).x +
              "," +
              d.y
          );
      }
      function C(e) {
        null !== d &&
          (window.scrollTo(d.x, d.y),
          _(e, "Set page position: " + d.x + "," + d.y),
          j());
      }
      function j() {
        d = null;
      }
      function M(e) {
        _(
          e.id,
          "Size reset requested by " +
            ("init" === e.type ? "host page" : "iFrame")
        ),
          T(e.id),
          F(
            function () {
              R(e), z("reset", "reset", e.iframe, e.id);
            },
            e,
            "reset"
          );
      }
      function R(e) {
        function t(t) {
          i ||
            "0" !== e[t] ||
            ((i = !0),
            _(o, "Hidden iFrame detected, creating visibility listener"),
            (function () {
              function e() {
                function e(e) {
                  function t(t) {
                    return "0px" === (u[e] && u[e].iframe.style[t]);
                  }
                  function n(e) {
                    return null !== e.offsetParent;
                  }
                  u[e] &&
                    n(u[e].iframe) &&
                    (t("height") || t("width")) &&
                    z("Visibility change", "resize", u[e].iframe, e);
                }
                Object.keys(u).forEach(function (t) {
                  e(t);
                });
              }
              function t(t) {
                _(
                  "window",
                  "Mutation observed: " + t[0].target + " " + t[0].type
                ),
                  W(e, 16);
              }
              function n() {
                var e = document.querySelector("body"),
                  n = {
                    attributes: !0,
                    attributeOldValue: !1,
                    characterData: !0,
                    characterDataOldValue: !1,
                    childList: !0,
                    subtree: !0,
                  };
                new o(t).observe(e, n);
              }
              var o = y();
              o && n();
            })());
        }
        function n(n) {
          !(function (t) {
            e.id
              ? ((e.iframe.style[t] = e[t] + "px"),
                _(e.id, "IFrame (" + o + ") " + t + " set to " + e[t] + "px"))
              : _("undefined", "messageData id not set");
          })(n),
            t(n);
        }
        var o = e.iframe.id;
        u[o] && (u[o].sizeHeight && n("height"), u[o].sizeWidth && n("width"));
      }
      function F(e, t, n) {
        n !== t.type && s && !window.jasmine
          ? (_(t.id, "Requesting animation frame"), s(e))
          : e();
      }
      function z(e, t, n, o, i) {
        var a,
          l = !1;
        (o = o || n.id),
          u[o] &&
            (n && "contentWindow" in n && null !== n.contentWindow
              ? ((a = u[o] && u[o].targetOrigin),
                _(
                  o,
                  "[" +
                    e +
                    "] Sending msg to iframe[" +
                    o +
                    "] (" +
                    t +
                    ") targetOrigin: " +
                    a
                ),
                n.contentWindow.postMessage(r + t, a))
              : x(o, "[" + e + "] IFrame(" + o + ") not found"),
            i &&
              u[o] &&
              u[o].warningTimeout &&
              (u[o].msgTimeout = setTimeout(function () {
                !u[o] ||
                  u[o].loaded ||
                  l ||
                  ((l = !0),
                  x(
                    o,
                    "IFrame has not responded within " +
                      u[o].warningTimeout / 1e3 +
                      " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."
                  ));
              }, u[o].warningTimeout)));
      }
      function P(e) {
        return (
          e +
          ":" +
          u[e].bodyMarginV1 +
          ":" +
          u[e].sizeWidth +
          ":" +
          u[e].log +
          ":" +
          u[e].interval +
          ":" +
          u[e].enablePublicMethods +
          ":" +
          u[e].autoResize +
          ":" +
          u[e].bodyMargin +
          ":" +
          u[e].heightCalculationMethod +
          ":" +
          u[e].bodyBackground +
          ":" +
          u[e].bodyPadding +
          ":" +
          u[e].tolerance +
          ":" +
          u[e].inPageLinks +
          ":" +
          u[e].resizeFrom +
          ":" +
          u[e].widthCalculationMethod +
          ":" +
          u[e].mouseEvents
        );
      }
      function N(t, i) {
        function a(e) {
          var t = e.split("Callback");
          if (2 === t.length) {
            var n = "on" + t[0].charAt(0).toUpperCase() + t[0].slice(1);
            (this[n] = this[e]),
              delete this[e],
              x(
                d,
                "Deprecated: '" +
                  e +
                  "' has been renamed '" +
                  n +
                  "'. The old method will be removed in the next major version."
              );
          }
        }
        var r,
          l,
          d = (function (e) {
            if ("string" != typeof e)
              throw new TypeError("Invaild id for iFrame. Expected String");
            var a;
            return (
              "" === e &&
                ((t.id =
                  ((a = (i && i.id) || f.id + n++),
                  null !== document.getElementById(a) && (a += n++),
                  (e = a))),
                (o = (i || {}).log),
                _(e, "Added missing iframe ID: " + e + " (" + t.src + ")")),
              e
            );
          })(t.id);
        d in u && "iFrameResizer" in t
          ? x(d, "Ignored iFrame, already setup.")
          : (!(function (e) {
              var n;
              (e = e || {}),
                (u[d] = Object.create(null)),
                (u[d].iframe = t),
                (u[d].firstRun = !0),
                (u[d].remoteHost =
                  t.src && t.src.split("/").slice(0, 3).join("/")),
                (function (e) {
                  if ("object" != typeof e)
                    throw new TypeError("Options is not an object");
                })(e),
                Object.keys(e).forEach(a, e),
                (function (e) {
                  for (var t in f)
                    Object.prototype.hasOwnProperty.call(f, t) &&
                      (u[d][t] = Object.prototype.hasOwnProperty.call(e, t)
                        ? e[t]
                        : f[t]);
                })(e),
                u[d] &&
                  (u[d].targetOrigin =
                    !0 === u[d].checkOrigin
                      ? "" === (n = u[d].remoteHost) ||
                        null !== n.match(/^(about:blank|javascript:|file:\/\/)/)
                        ? "*"
                        : n
                      : "*");
            })(i),
            (function () {
              switch (
                (_(
                  d,
                  "IFrame scrolling " +
                    (u[d] && u[d].scrolling ? "enabled" : "disabled") +
                    " for " +
                    d
                ),
                (t.style.overflow =
                  !1 === (u[d] && u[d].scrolling) ? "hidden" : "auto"),
                u[d] && u[d].scrolling)
              ) {
                case "omit":
                  break;
                case !0:
                  t.scrolling = "yes";
                  break;
                case !1:
                  t.scrolling = "no";
                  break;
                default:
                  t.scrolling = u[d] ? u[d].scrolling : "no";
              }
            })(),
            (function () {
              function e(e) {
                var n = u[d][e];
                1 / 0 !== n &&
                  0 !== n &&
                  ((t.style[e] = "number" == typeof n ? n + "px" : n),
                  _(d, "Set " + e + " = " + t.style[e]));
              }
              function n(e) {
                if (u[d]["min" + e] > u[d]["max" + e])
                  throw new Error(
                    "Value for min" + e + " can not be greater than max" + e
                  );
              }
              n("Height"),
                n("Width"),
                e("maxHeight"),
                e("minHeight"),
                e("maxWidth"),
                e("minWidth");
            })(),
            ("number" != typeof (u[d] && u[d].bodyMargin) &&
              "0" !== (u[d] && u[d].bodyMargin)) ||
              ((u[d].bodyMarginV1 = u[d].bodyMargin),
              (u[d].bodyMargin = u[d].bodyMargin + "px")),
            (r = P(d)),
            (l = y()) &&
              (function (e) {
                t.parentNode &&
                  new e(function (e) {
                    e.forEach(function (e) {
                      Array.prototype.slice
                        .call(e.removedNodes)
                        .forEach(function (e) {
                          e === t && S(t);
                        });
                    });
                  }).observe(t.parentNode, { childList: !0 });
              })(l),
            h(t, "load", function () {
              var n, o;
              z("iFrame.onload", r, t, e, !0),
                (n = u[d] && u[d].firstRun),
                (o = u[d] && u[d].heightCalculationMethod in c),
                !n && o && M({ iframe: t, height: 0, width: 0, type: "init" });
            }),
            z("init", r, t, e, !0),
            u[d] &&
              (u[d].iframe.iFrameResizer = {
                close: S.bind(null, u[d].iframe),
                removeListeners: I.bind(null, u[d].iframe),
                resize: z.bind(null, "Window resize", "resize", u[d].iframe),
                moveToAnchor: function (e) {
                  z("Move to anchor", "moveToAnchor:" + e, u[d].iframe, d);
                },
                sendMessage: function (e) {
                  z(
                    "Send Message",
                    "message:" + (e = JSON.stringify(e)),
                    u[d].iframe,
                    d
                  );
                },
              }));
      }
      function W(e, t) {
        null === m &&
          (m = setTimeout(function () {
            (m = null), e();
          }, t));
      }
      function L() {
        "hidden" !== document.visibilityState &&
          (_("document", "Trigger event: Visibility change"),
          W(function () {
            A("Tab Visible", "resize");
          }, 16));
      }
      function A(e, t) {
        Object.keys(u).forEach(function (n) {
          (function (e) {
            return (
              u[e] &&
              "parent" === u[e].resizeFrom &&
              u[e].autoResize &&
              !u[e].firstRun
            );
          })(n) && z(e, t, u[n].iframe, n);
        });
      }
      function H() {
        h(window, "message", O),
          h(window, "resize", function () {
            var e;
            _("window", "Trigger event: " + (e = "resize")),
              W(function () {
                A("Window " + e, "resize");
              }, 16);
          }),
          h(document, "visibilitychange", L),
          h(document, "-webkit-visibilitychange", L);
      }
      function B() {
        function t(e, t) {
          t &&
            (!(function () {
              if (!t.tagName)
                throw new TypeError("Object is not a valid DOM element");
              if ("IFRAME" !== t.tagName.toUpperCase())
                throw new TypeError(
                  "Expected <IFRAME> tag, found <" + t.tagName + ">"
                );
            })(),
            N(t, e),
            n.push(t));
        }
        var n;
        return (
          (function () {
            var e,
              t = ["moz", "webkit", "o", "ms"];
            for (e = 0; e < t.length && !s; e += 1)
              s = window[t[e] + "RequestAnimationFrame"];
            s
              ? (s = s.bind(window))
              : _("setup", "RequestAnimationFrame not supported");
          })(),
          H(),
          function (o, i) {
            switch (
              ((n = []),
              (function (e) {
                e &&
                  e.enablePublicMethods &&
                  x(
                    "enablePublicMethods option has been removed, public methods are now always available in the iFrame"
                  );
              })(o),
              typeof i)
            ) {
              case "undefined":
              case "string":
                Array.prototype.forEach.call(
                  document.querySelectorAll(i || "iframe"),
                  t.bind(e, o)
                );
                break;
              case "object":
                t(o, i);
                break;
              default:
                throw new TypeError("Unexpected data type (" + typeof i + ")");
            }
            return n;
          }
        );
      }
    })();
  var e = function (e) {
      try {
        return localStorage.getItem(e);
      } catch (e) {
        return null;
      }
    },
    t = function (e, t) {
      try {
        localStorage.setItem(e, t);
      } catch (e) {}
    },
    n = function (e) {
      for (
        var t = e.source,
          n = document.getElementsByTagName("iframe"),
          o = null,
          i = 0;
        i < n.length;
        i++
      ) {
        var a = n[i];
        if (
          a.contentWindow == t ||
          a.contentWindow == (null == t ? void 0 : t.parent)
        ) {
          o = a;
          break;
        }
      }
      return o;
    };
  var o = {
    overlay: "index-module_overlay__PyXAN",
    layoutDefault: "index-module_layoutDefault__7yBRe",
    layoutModal: "index-module_layoutModal__3-Tik",
    popupContainer: "index-module_popupContainer__R7hrk",
    loadingIndicator: "index-module_loadingIndicator__bai61",
    loadingIndicatorNoOverlay: "index-module_loadingIndicatorNoOverlay__Pyhdd",
    spin: "index-module_spin__r2-rl",
    emoji: "index-module_emoji__MDuRJ",
    animate__wave: "index-module_animate__wave__Rfv7x",
    wave: "index-module_wave__JTStX",
    "animate__heart-beat": "index-module_animate__heart-beat__M8Vjv",
    heartBeat: "index-module_heartBeat__Jdux6",
    animate__flash: "index-module_animate__flash__zfXXt",
    flash: "index-module_flash__BHax5",
    animate__bounce: "index-module_animate__bounce__YkmGJ",
    bounce: "index-module_bounce__46Q2t",
    "animate__rubber-band": "index-module_animate__rubber-band__o0ymG",
    rubberBand: "index-module_rubberBand__QnP44",
    "animate__head-shake": "index-module_animate__head-shake__SgYWR",
    headShake: "index-module_headShake__4JK7O",
    animate__tada: "index-module_animate__tada__3dUYE",
    tada: "index-module_tada__m5Cd2",
    animate__spin: "index-module_animate__spin__dJxXR",
  };
  function i(e) {
    return (
      (i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      i(e)
    );
  }
  function a(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t &&
        (o = o.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, o);
    }
    return n;
  }
  function r(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? a(Object(n), !0).forEach(function (t) {
            l(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : a(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function l(e, t, n) {
    return (
      (t = (function (e) {
        var t = (function (e, t) {
          if ("object" != i(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var o = n.call(e, t || "default");
            if ("object" != i(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == i(t) ? t : t + "";
      })(t)) in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  !(function (e, t) {
    void 0 === t && (t = {});
    var n = t.insertAt;
    if ("undefined" != typeof document) {
      var o = document.head || document.getElementsByTagName("head")[0],
        i = document.createElement("style");
      (i.type = "text/css"),
        "top" === n && o.firstChild
          ? o.insertBefore(i, o.firstChild)
          : o.appendChild(i),
        i.styleSheet
          ? (i.styleSheet.cssText = e)
          : i.appendChild(document.createTextNode(e));
    }
  })(
    "@keyframes index-module_spin__r2-rl{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes index-module_wave__JTStX{0%{transform:rotate(0deg)}50%{transform:rotate(20deg)}to{transform:rotate(0deg)}}@keyframes index-module_heartBeat__Jdux6{0%{transform:scale(1)}50%{transform:scale(1.08)}to{transform:scale(1)}}@keyframes index-module_flash__BHax5{0%,50%,to{opacity:1}25%,75%{opacity:.2}}@keyframes index-module_bounce__46Q2t{0%,20%,53%,to{transform:translateZ(0)}40%,43%{transform:translate3d(0,-30px,0) scaleY(1.1)}70%{transform:translate3d(0,-15px,0) scaleY(1.05)}80%{transform:translateZ(0) scaleY(.95)}90%{transform:translate3d(0,-4px,0) scaleY(1.02)}}@keyframes index-module_rubberBand__QnP44{0%{transform:scaleX(1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}to{transform:scaleX(1)}}@keyframes index-module_headShake__4JK7O{0%{transform:translateX(0)}6.5%{transform:translateX(-6px) rotateY(-9deg)}18.5%{transform:translateX(5px) rotateY(7deg)}31.5%{transform:translateX(-3px) rotateY(-5deg)}43.5%{transform:translateX(2px) rotateY(3deg)}50%{transform:translateX(0)}}@keyframes index-module_tada__m5Cd2{0%{transform:scaleX(1)}10%,20%{transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{transform:scaleX(1)}}.index-module_overlay__PyXAN{-ms-flex-pack:center;-ms-flex-align:center;align-items:center;background-color:hsla(0,0%,6%,.6);bottom:0;display:-ms-flexbox;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1000000006}.index-module_layoutDefault__7yBRe{bottom:20px;position:fixed;right:20px;width:auto}.index-module_layoutDefault__7yBRe,.index-module_layoutModal__3-Tik{background-color:transparent;border-radius:5px;box-shadow:0 0 0 1px hsla(0,0%,6%,.05),0 3px 6px hsla(0,0%,6%,.1),0 9px 24px hsla(0,0%,6%,.2);display:-ms-flexbox;display:flex;height:auto;max-width:95vw;opacity:0;z-index:2147483000}.index-module_layoutModal__3-Tik{position:relative;width:700px}.index-module_popupContainer__R7hrk{border-radius:5px;display:-ms-flexbox;display:flex;overflow-y:auto;width:100%}.index-module_popupContainer__R7hrk iframe{border-radius:5px;max-height:95vh}.index-module_loadingIndicator__bai61{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;background-color:#f5f5f5;border-radius:50%;color:#444;display:-ms-inline-flexbox;display:inline-flex;height:50px;justify-content:center;position:absolute;width:50px;z-index:2147483000}.index-module_loadingIndicatorNoOverlay__Pyhdd{bottom:10px;position:fixed;right:10px}.index-module_loadingIndicator__bai61 svg{animation:index-module_spin__r2-rl 1.618s linear infinite;height:20px;width:20px}.index-module_emoji__MDuRJ{display:inline-block;font-size:42px;left:-21px;line-height:1;position:absolute;top:-21px}.index-module_animate__wave__Rfv7x{animation:index-module_wave__JTStX 1s ease-in-out 20}.index-module_animate__heart-beat__M8Vjv{animation:index-module_heartBeat__Jdux6 1.3s ease-in-out 20}.index-module_animate__flash__zfXXt{animation:index-module_flash__BHax5 2.5s 20}.index-module_animate__bounce__YkmGJ{animation:index-module_bounce__46Q2t 1.5s 20;-ms-transform-origin:center bottom;transform-origin:center bottom}.index-module_animate__rubber-band__o0ymG{animation:index-module_rubberBand__QnP44 1.5s 20}.index-module_animate__head-shake__SgYWR{animation:index-module_headShake__4JK7O 1.5s ease-in-out 20}.index-module_animate__tada__3dUYE{animation:index-module_tada__m5Cd2 1.5s 20}.index-module_animate__spin__dJxXR{animation:index-module_spin__r2-rl 1.618s linear 20}@media (max-height:1000px){.index-module_popupContainer__R7hrk iframe{max-height:85vh}}@media (max-width:576px){.index-module_popupContainer__R7hrk iframe{max-height:70vh}.index-module_layoutDefault__7yBRe,.index-module_layoutModal__3-Tik{max-width:calc(100% - 40px)}}"
  ),
    (function (i, a) {
      var d,
        s,
        c,
        u = i.document,
        m = {},
        f = !1,
        p = !1,
        y = function () {
          u
            .querySelectorAll("iframe[data-tally-src]:not([src])")
            .forEach(function (e) {
              if (!e.dataset.tallyEmbedWidgetInitialized)
                if (i.IntersectionObserver) {
                  var t = new IntersectionObserver(
                    function (n) {
                      n.forEach(function (n) {
                        n.intersectionRatio > 0 && (h(e), t.unobserve(e));
                      });
                    },
                    { root: null, rootMargin: "500px", threshold: [0.01] }
                  );
                  t.observe(e);
                } else h(e);
            }),
            u
              .querySelectorAll("iframe:not([data-tally-src])")
              .forEach(function (e) {
                var t;
                e.dataset.tallyEmbedWidgetInitialized ||
                  (-1 !==
                    (null === (t = e.src) || void 0 === t
                      ? void 0
                      : t.indexOf("dynamicHeight=1")) &&
                    (void 0 !== e.sandbox && e.removeAttribute("sandbox"),
                    (e.dataset.tallyEmbedWidgetInitialized = "1"),
                    iFrameResize(
                      {
                        checkOrigin: !1,
                        heightCalculationMethod: "taggedElement",
                        scrolling: !1,
                      },
                      e
                    )));
              });
        },
        h = function (e) {
          if (!e.dataset.tallyEmbedWidgetInitialized) {
            (e.dataset.tallyEmbedWidgetInitialized = "1"),
              e.setAttribute("loading", "lazy");
            var t = e.dataset.tallySrc;
            t &&
              (void 0 !== e.sandbox && e.removeAttribute("sandbox"),
              (t += t.indexOf("?") > -1 ? "&" : "?"),
              (t += "originPage=".concat(
                encodeURIComponent(i.location.pathname)
              )),
              i.location.search &&
                (t += "&".concat(i.location.search.substring(1))),
              (e.src = t),
              -1 !== t.indexOf("dynamicHeight=1") &&
                iFrameResize(
                  {
                    checkOrigin: !1,
                    heightCalculationMethod: "taggedElement",
                    scrolling: !1,
                  },
                  e
                ));
          }
        },
        g = function (e, t) {
          var n;
          return null !== (n = null == t ? void 0 : t.key) && void 0 !== n
            ? n
            : "Tally.showOnce_".concat(e);
        },
        b = function (e, t) {
          var n;
          return null !== (n = null == t ? void 0 : t.key) && void 0 !== n
            ? n
            : "Tally.doNotShowAfterSubmit_".concat(e);
        },
        v = function (e) {
          e.preventDefault();
        },
        _ = function () {
          f ||
            (i.addEventListener("message", function (e) {
              if ("string" == typeof e.data)
                try {
                  var o,
                    i = JSON.parse(e.data);
                  if (
                    null == i ||
                    null === (o = i.event) ||
                    void 0 === o ||
                    !o.startsWith("Tally.")
                  )
                    return;
                  switch (i.event) {
                    case "Tally.FormLoaded":
                      y();
                      var a = m[i.payload.formId];
                      null != a && a.showOnce && t(g(i.payload.formId, a), "1");
                      break;
                    case "Tally.FormPageView":
                      var r,
                        l = m[i.payload.formId];
                      if (
                        (null != l &&
                          l.onPageView &&
                          l.onPageView(i.payload.page),
                        null != l && l.emoji && i.payload.page > 1)
                      )
                        null === (r = u.querySelector(".emoji")) ||
                          void 0 === r ||
                          r.remove();
                      var d = n(e);
                      d &&
                        d.getBoundingClientRect().top < 0 &&
                        d.scrollIntoView();
                      break;
                    case "Tally.FormSubmitted":
                      var s,
                        c = m[i.payload.formId];
                      if (
                        (null != c && c.onSubmit && c.onSubmit(i.payload),
                        void 0 !== (null == c ? void 0 : c.autoClose) &&
                          setTimeout(function () {
                            x(i.payload.formId);
                          }, c.autoClose),
                        null != c && c.emoji)
                      )
                        null === (s = u.querySelector(".emoji")) ||
                          void 0 === s ||
                          s.remove();
                      null != c &&
                        c.doNotShowAfterSubmit &&
                        t(b(i.payload.formId, c), "1");
                      break;
                    case "Tally.PopupClosed":
                      x(i.payload.formId);
                  }
                } catch (e) {}
            }),
            (f = !0));
        },
        w = function (e, t) {
          var n,
            a,
            l,
            d,
            s = (null == t ? void 0 : t.width) || 376,
            c =
              null != t && t.customFormUrl
                ? t.customFormUrl
                : "".concat("https://tally.so", "/popup/").concat(e),
            m = "".concat(c).concat(
              ((a = r(
                r(
                  r(
                    { originPage: encodeURIComponent(i.location.pathname) },
                    ((d = {}),
                    new URLSearchParams(i.location.search).forEach(function (
                      e,
                      t
                    ) {
                      d[t] = encodeURIComponent(e);
                    }),
                    d)
                  ),
                  (null == t ? void 0 : t.hiddenFields) || {}
                ),
                {},
                {
                  popup: null != t && t.customFormUrl ? "1" : void 0,
                  alignLeft:
                    (null != t && t.alignLeft) || s <= 500 ? "1" : void 0,
                  hideTitle: null != t && t.hideTitle ? "1" : void 0,
                  preview: null != t && t.preview ? "1" : void 0,
                }
              )),
              (l = Object.keys(a)
                .filter(function (e) {
                  return void 0 !== a[e] && null !== a[e];
                })
                .map(function (e) {
                  return "".concat(e, "=").concat(a[e]);
                })
                .join("&"))
                ? "?".concat(l)
                : "")
            );
          if (null === u.querySelector('iframe[src="'.concat(m, '"]'))) {
            var f = o.layoutDefault;
            "modal" === (null == t ? void 0 : t.layout) && (f = o.layoutModal);
            var y = u.createElement("div");
            (y.className = "tally-popup ".concat(f, " tally-form-").concat(e)),
              (y.innerHTML = '<div class="'
                .concat(o.popupContainer, '"><iframe src="')
                .concat(
                  m,
                  '" frameborder="0" marginheight="0" marginwidth="0" title="Tally Forms" style="width: 1px; min-width: 100%;" allow="fullscreen"></iframe></div>'
                )),
              (y.style.width = "".concat(s, "px"));
            var h = y.querySelector("iframe");
            if (null != t && null !== (n = t.emoji) && void 0 !== n && n.text) {
              var g,
                b = u.createElement("div");
              (b.className = "emoji "
                .concat(o.emoji, " ")
                .concat(
                  null !== (g = o["animate__".concat(t.emoji.animation)]) &&
                    void 0 !== g
                    ? g
                    : ""
                )),
                (b.innerHTML = t.emoji.text),
                y.appendChild(b);
            }
            var _ = u.createElement("div");
            (_.className = "tally-overlay ".concat(o.overlay)),
              (_.onclick = function () {
                x(e);
              });
            var w = o.loadingIndicator;
            (null != t && t.overlay) ||
              "modal" === (null == t ? void 0 : t.layout) ||
              (w = ""
                .concat(o.loadingIndicator, " ")
                .concat(o.loadingIndicatorNoOverlay));
            var k = u.createElement("div");
            (k.className = "tally-loading-indicator ".concat(w)),
              (k.innerHTML =
                '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>'),
              (null != t && t.overlay) ||
              "modal" === (null == t ? void 0 : t.layout)
                ? (_.appendChild(k),
                  _.appendChild(y),
                  u.body.appendChild(_),
                  (p = "hidden" === u.body.style.overflow) ||
                    ((u.body.style.overflow = "hidden"),
                    u.body.addEventListener("touchmove", v, !1)))
                : (u.body.appendChild(k), u.body.appendChild(y)),
              h &&
                ((h.dataset.tallyEmbedWidgetInitialized = "1"),
                iFrameResize(
                  {
                    checkOrigin: !1,
                    heightCalculationMethod: "bodyOffset",
                    scrolling: !0,
                    onInit: function () {
                      k.remove(),
                        (y.style.opacity = "1"),
                        null != t && t.onOpen && t.onOpen();
                    },
                  },
                  h
                ));
          }
        },
        x = function (e) {
          var t,
            n = u.querySelector(".tally-form-".concat(e));
          if (n) {
            var o = n.querySelector("iframe");
            if (o) {
              n.remove(),
                null === (t = o.iFrameResizer) || void 0 === t || t.close(),
                u.querySelectorAll(".tally-overlay").forEach(function (e) {
                  e.remove(),
                    p ||
                      ((u.body.style.overflow = "visible"),
                      u.body.removeEventListener("touchmove", v, !1));
                }),
                u
                  .querySelectorAll(".tally-loading-indicator")
                  .forEach(function (e) {
                    e.remove();
                  });
              var i = m[e];
              null != i && i.onClose && i.onClose();
            }
          }
        },
        k = function (t, n) {
          var o, a, r, l, d;
          if (
            ((m[t] = n),
            !(
              (null != n && n.showOnce && null !== e(g(t, n))) ||
              (null != n && n.doNotShowAfterSubmit && null !== e(b(t, n)))
            ))
          )
            if (
              "time" !==
                (null == n || null === (o = n.open) || void 0 === o
                  ? void 0
                  : o.trigger) ||
              "number" !=
                typeof (null == n || null === (a = n.open) || void 0 === a
                  ? void 0
                  : a.ms)
            )
              if (
                "exit" !==
                (null == n || null === (r = n.open) || void 0 === r
                  ? void 0
                  : r.trigger)
              )
                if (
                  "scroll" !==
                    (null == n || null === (l = n.open) || void 0 === l
                      ? void 0
                      : l.trigger) ||
                  "number" !=
                    typeof (null == n || null === (d = n.open) || void 0 === d
                      ? void 0
                      : d.scrollPercent)
                )
                  w(t, n);
                else {
                  var s = function () {
                    var e =
                      (i.document.body.scrollHeight - i.innerHeight) *
                      (n.open.scrollPercent / 100);
                    u.documentElement.scrollTop >= e &&
                      (w(t, n), u.removeEventListener("scroll", s));
                  };
                  u.addEventListener("scroll", s);
                }
              else {
                var c = function (e) {
                  e.toElement ||
                    e.relatedTarget ||
                    (w(t, n), u.removeEventListener("mouseout", c));
                };
                u.addEventListener("mouseout", c);
              }
            else
              setTimeout(function () {
                return w(t, n);
              }, n.open.ms);
        };
      if (!i.Tally) {
        var O = {};
        (O.openPopup = k),
          (O.closePopup = x),
          (O.loadEmbeds = y),
          (i.Tally = O);
      }
      (d = null !== (a = i.TallyConfig) && void 0 !== a ? a : {}),
        (s = d.formId),
        (c = d.popup),
        s && k(s, c),
        y(),
        _(),
        u.addEventListener("click", function (e) {
          var t = e.target.closest("[data-tally-open]");
          if (t) {
            e.preventDefault();
            var n = t.dataset,
              o = {};
            for (var a in ((o.layout = n.tallyLayout),
            (o.width =
              void 0 !== n.tallyWidth ? parseInt(n.tallyWidth, 10) : void 0),
            (o.alignLeft = n.tallyAlignLeft
              ? "1" === n.tallyAlignLeft
              : void 0),
            (o.hideTitle = n.tallyHideTitle
              ? "1" === n.tallyHideTitle
              : void 0),
            (o.overlay = n.tallyOverlay ? "1" === n.tallyOverlay : void 0),
            n.tallyEmojiText &&
              n.tallyEmojiAnimation &&
              (o.emoji = {
                text: n.tallyEmojiText,
                animation: n.tallyEmojiAnimation,
              }),
            (o.autoClose =
              void 0 !== n.tallyAutoClose
                ? parseInt(n.tallyAutoClose, 10)
                : void 0),
            (o.customFormUrl = n.tallyCustomFormUrl),
            n.tallyOnOpen &&
              "function" == typeof i[n.tallyOnOpen] &&
              (o.onOpen = i[n.tallyOnOpen]),
            n.tallyOnClose &&
              "function" == typeof i[n.tallyOnClose] &&
              (o.onClose = i[n.tallyOnClose]),
            n.tallyOnPageView &&
              "function" == typeof i[n.tallyOnPageView] &&
              (o.onPageView = i[n.tallyOnPageView]),
            n.tallyOnSubmit &&
              "function" == typeof i[n.tallyOnSubmit] &&
              (o.onSubmit = i[n.tallyOnSubmit]),
            n))
              a.startsWith("tally") ||
                (o.hiddenFields = r(
                  r({}, o.hiddenFields || {}),
                  {},
                  l({}, a, n[a])
                ));
            k(n.tallyOpen, o);
          } else {
            var d = e.target.closest("a");
            if (
              d &&
              d.href &&
              d.href.indexOf("#") < d.href.indexOf("tally-open")
            ) {
              e.preventDefault();
              var s = d.href.substring(d.href.indexOf("#") + 1),
                c = new URLSearchParams(s),
                u = {};
              c.forEach(function (e, t) {
                switch (t.replace("tally-", "")) {
                  case "layout":
                    u.layout = e;
                    break;
                  case "width":
                    u.width = parseInt(e, 10);
                    break;
                  case "align-left":
                    u.alignLeft = "1" === e || void 0;
                    break;
                  case "hide-title":
                    u.hideTitle = "1" === e || void 0;
                    break;
                  case "overlay":
                    u.overlay = "1" === e || void 0;
                    break;
                  case "emoji-text":
                    u.emoji = r(
                      r({}, u.emoji || {}),
                      {},
                      { text: e, animation: c.get("tally-emoji-animation") }
                    );
                    break;
                  case "auto-close":
                    u.autoClose = parseInt(e, 10);
                    break;
                  case "custom-form-url":
                    u.customFormUrl = e;
                    break;
                  case "on-open":
                    u.onOpen = "function" == typeof i[e] ? e : void 0;
                    break;
                  case "on-close":
                    u.onClose = "function" == typeof i[e] ? e : void 0;
                    break;
                  case "on-page-view":
                    u.onPageView = "function" == typeof i[e] ? e : void 0;
                    break;
                  case "on-submit":
                    u.onSubmit = "function" == typeof i[e] ? e : void 0;
                }
              }),
                c.forEach(function (e, t) {
                  -1 === t.indexOf("tally-") &&
                    (u.hiddenFields = r(
                      r({}, u.hiddenFields || {}),
                      {},
                      l({}, t, e)
                    ));
                }),
                k(c.get("tally-open"), u);
            }
          }
        });
    })(window);
})();
