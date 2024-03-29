! function(t) {
  if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
      ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).ProgressBar = t()
  }
}(function() {
  return function o(s, a, u) {
      function h(n, t) {
          if (!a[n]) {
              if (!s[n]) {
                  var e = "function" == typeof require && require;
                  if (!t && e) return e(n, !0);
                  if (p) return p(n, !0);
                  var i = new Error("Cannot find module '" + n + "'");
                  throw i.code = "MODULE_NOT_FOUND", i
              }
              var r = a[n] = {
                  exports: {}
              };
              s[n][0].call(r.exports, function(t) {
                  var e = s[n][1][t];
                  return h(e || t)
              }, r, r.exports, o, s, a, u)
          }
          return a[n].exports
      }
      for (var p = "function" == typeof require && require, t = 0; t < u.length; t++) h(u[t]);
      return h
  }({
      1: [function(t, b, k) {
          (function() {
              var p, h, o, s, a, u, c, i, l, n, f, e = this || Function("return this")(),
                  d = function() {
                      "use strict";
                      var c, n, l, f, d, _, r = "linear",
                          t = Date.now ? Date.now : function() {
                              return +new Date
                          },
                          g = "undefined" != typeof SHIFTY_DEBUG_NOW ? SHIFTY_DEBUG_NOW : t;

                      function o() {}

                      function s(t, e) {
                          var n;
                          for (n in t) Object.hasOwnProperty.call(t, n) && e(n)
                      }

                      function a(e, n) {
                          return s(n, function(t) {
                              e[t] = n[t]
                          }), e
                      }

                      function u(e, n) {
                          s(n, function(t) {
                              void 0 === e[t] && (e[t] = n[t])
                          })
                      }

                      function w(t, e, n, i, r, o, s) {
                          var a, u, h, p = t < o ? 0 : (t - o) / r;
                          for (a in e) e.hasOwnProperty(a) && (h = "function" == typeof(u = s[a]) ? u : c[u], e[a] = y(n[a], i[a], h, p));
                          return e
                      }

                      function y(t, e, n, i) {
                          return t + (e - t) * n(i)
                      }

                      function m(e, n) {
                          var i = v.prototype.filter,
                              r = e._filterArgs;
                          s(i, function(t) {
                              void 0 !== i[t][n] && i[t][n].apply(e, r)
                          })
                      }

                      function h(t, e, n, i, r, o, s, a, u, h, p) {
                          l = e + n + i, f = Math.min(p || g(), l), d = l <= f, _ = i - (l - f), t.isPlaying() && (d ? (u(s, t._attachment, _), t.stop(!0)) : (t._scheduleId = h(t._timeoutHandler, 1e3 / 60), m(t, "beforeTween"), f < e + n ? w(1, r, o, s, 1, 1, a) : w(f, r, o, s, i, e + n, a), m(t, "afterTween"), u(r, t._attachment, _)))
                      }

                      function p(t, e) {
                          var n = {},
                              i = typeof e;
                          return s(t, "string" == i || "function" == i ? function(t) {
                              n[t] = e
                          } : function(t) {
                              n[t] || (n[t] = e[t] || r)
                          }), n
                      }

                      function v(t, e) {
                          this._currentState = t || {}, this._configured = !1, this._scheduleFunction = n, void 0 !== e && this.setConfig(e)
                      }
                      return n = "undefined" != typeof window && (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.mozCancelRequestAnimationFrame && window.mozRequestAnimationFrame) || setTimeout, v.prototype.tween = function(t) {
                          return this._isTweening ? this : (void 0 === t && this._configured || this.setConfig(t), this._timestamp = g(), this._start(this.get(), this._attachment), this.resume())
                      }, v.prototype.setConfig = function(t) {
                          t = t || {}, this._configured = !0, this._attachment = t.attachment, this._pausedAtTime = null, this._scheduleId = null, this._delay = t.delay || 0, this._start = t.start || o, this._step = t.step || o, this._finish = t.finish || o, this._duration = t.duration || 500, this._currentState = a({}, t.from || this.get()), this._originalState = this.get(), this._targetState = a({}, t.to || this.get());
                          var e = this;
                          this._timeoutHandler = function() {
                              h(e, e._timestamp, e._delay, e._duration, e._currentState, e._originalState, e._targetState, e._easing, e._step, e._scheduleFunction)
                          };
                          var n = this._currentState,
                              i = this._targetState;
                          return u(i, n), this._easing = p(n, t.easing || r), this._filterArgs = [n, this._originalState, i, this._easing], m(this, "tweenCreated"), this
                      }, v.prototype.get = function() {
                          return a({}, this._currentState)
                      }, v.prototype.set = function(t) {
                          this._currentState = t
                      }, v.prototype.pause = function() {
                          return this._pausedAtTime = g(), this._isPaused = !0, this
                      }, v.prototype.resume = function() {
                          return this._isPaused && (this._timestamp += g() - this._pausedAtTime), this._isPaused = !1, this._isTweening = !0, this._timeoutHandler(), this
                      }, v.prototype.seek = function(t) {
                          t = Math.max(t, 0);
                          var e = g();
                          return this._timestamp + t === 0 || (this._timestamp = e - t, this.isPlaying() || (this._isTweening = !0, this._isPaused = !1, h(this, this._timestamp, this._delay, this._duration, this._currentState, this._originalState, this._targetState, this._easing, this._step, this._scheduleFunction, e), this.pause())), this
                      }, v.prototype.stop = function(t) {
                          return this._isTweening = !1, this._isPaused = !1, this._timeoutHandler = o, (e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.oCancelAnimationFrame || e.msCancelAnimationFrame || e.mozCancelRequestAnimationFrame || e.clearTimeout)(this._scheduleId), t && (m(this, "beforeTween"), w(1, this._currentState, this._originalState, this._targetState, 1, 0, this._easing), m(this, "afterTween"), m(this, "afterTweenEnd"), this._finish.call(this, this._currentState, this._attachment)), this
                      }, v.prototype.isPlaying = function() {
                          return this._isTweening && !this._isPaused
                      }, v.prototype.setScheduleFunction = function(t) {
                          this._scheduleFunction = t
                      }, v.prototype.dispose = function() {
                          var t;
                          for (t in this) this.hasOwnProperty(t) && delete this[t]
                      }, v.prototype.filter = {}, c = v.prototype.formula = {
                          linear: function(t) {
                              return t
                          }
                      }, a(v, {
                          now: g,
                          each: s,
                          tweenProps: w,
                          tweenProp: y,
                          applyFilter: m,
                          shallowCopy: a,
                          defaults: u,
                          composeEasingObject: p
                      }), "function" == typeof SHIFTY_DEBUG_NOW && (e.timeoutHandler = h), "object" == typeof k ? b.exports = v : void 0 === e.Tweenable && (e.Tweenable = v), v
                  }();

              function _(t, e, n, i, r, o) {
                  var s, h = 0,
                      p = 0,
                      c = 0,
                      a = 0,
                      u = 0,
                      l = 0;

                  function f(t) {
                      return ((h * t + p) * t + c) * t
                  }

                  function d(t) {
                      return 0 <= t ? t : 0 - t
                  }
                  return h = 1 - (c = 3 * e) - (p = 3 * (i - e) - c), a = 1 - (l = 3 * n) - (u = 3 * (r - n) - l), s = function(t, e) {
                      var n, i, r, o, s, a, u;
                      for (r = t, a = 0; a < 8; a++) {
                          if (d(o = f(r) - t) < e) return r;
                          if (d(s = (3 * h * (u = r) + 2 * p) * u + c) < 1e-6) break;
                          r -= o / s
                      }
                      if (i = 1, (r = t) < (n = 0)) return n;
                      if (i < r) return i;
                      for (; n < i;) {
                          if (d((o = f(r)) - t) < e) return r;
                          o < t ? n = r : i = r, r = .5 * (i - n) + n
                      }
                      return r
                  }(t, 1 / (200 * o)), ((a * s + u) * s + l) * s
              }

              function r(n) {
                  h.each(n, function(t) {
                      var e = n[t];
                      "string" == typeof e && e.match(i) && (n[t] = function(t) {
                          return y(i, t, g)
                      }(e))
                  })
              }

              function g(t) {
                  var e = function(t) {
                      3 === (t = t.replace(/#/, "")).length && (t = (t = t.split(""))[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
                      return n[0] = w(t.substr(0, 2)), n[1] = w(t.substr(2, 2)), n[2] = w(t.substr(4, 2)), n
                  }(t);
                  return "rgb(" + e[0] + "," + e[1] + "," + e[2] + ")"
              }

              function w(t) {
                  return parseInt(t, 16)
              }

              function y(t, e, n) {
                  var i = e.match(t),
                      r = e.replace(t, l);
                  if (i)
                      for (var o, s = i.length, a = 0; a < s; a++) o = i.shift(), r = r.replace(l, n(o));
                  return r
              }

              function m(t) {
                  for (var e = t.match(a), n = e.length, i = t.match(c)[0], r = 0; r < n; r++) i += parseInt(e[r], 10) + ",";
                  return i = i.slice(0, -1) + ")"
              }

              function v(i) {
                  var r = {};
                  return h.each(i, function(t) {
                      var e = i[t];
                      if ("string" == typeof e) {
                          var n = O(e);
                          r[t] = {
                              formatString: function(t) {
                                  var e = t.match(s);
                                  return e ? 1 !== e.length && !t.charAt(0).match(o) || e.unshift("") : e = ["", ""], e.join(l)
                              }(e),
                              chunkNames: function(t, e) {
                                  var n, i = [],
                                      r = t.length;
                                  for (n = 0; n < r; n++) i.push("_" + e + "_" + n);
                                  return i
                              }(n, t)
                          }
                      }
                  }), r
              }

              function S(r, o) {
                  h.each(o, function(t) {
                      for (var e = O(r[t]), n = e.length, i = 0; i < n; i++) r[o[t].chunkNames[i]] = +e[i];
                      delete r[t]
                  })
              }

              function x(i, r) {
                  h.each(r, function(t) {
                      var e = i[t],
                          n = function(t, e) {
                              f.length = 0;
                              for (var n = e.length, i = 0; i < n; i++) f.push(t[e[i]]);
                              return f
                          }(function(t, e) {
                              for (var n, i = {}, r = e.length, o = 0; o < r; o++) n = e[o], i[n] = t[n], delete t[n];
                              return i
                          }(i, r[t].chunkNames), r[t].chunkNames);
                      e = function(t, e) {
                          for (var n = t, i = e.length, r = 0; r < i; r++) n = n.replace(l, +e[r].toFixed(4));
                          return n
                      }(r[t].formatString, n), i[t] = function(t) {
                          return y(u, t, m)
                      }(e)
                  })
              }

              function O(t) {
                  return t.match(a)
              }
              d.shallowCopy(d.prototype.formula, {
                  easeInQuad: function(t) {
                      return Math.pow(t, 2)
                  },
                  easeOutQuad: function(t) {
                      return -(Math.pow(t - 1, 2) - 1)
                  },
                  easeInOutQuad: function(t) {
                      return (t /= .5) < 1 ? .5 * Math.pow(t, 2) : -.5 * ((t -= 2) * t - 2)
                  },
                  easeInCubic: function(t) {
                      return Math.pow(t, 3)
                  },
                  easeOutCubic: function(t) {
                      return Math.pow(t - 1, 3) + 1
                  },
                  easeInOutCubic: function(t) {
                      return (t /= .5) < 1 ? .5 * Math.pow(t, 3) : .5 * (Math.pow(t - 2, 3) + 2)
                  },
                  easeInQuart: function(t) {
                      return Math.pow(t, 4)
                  },
                  easeOutQuart: function(t) {
                      return -(Math.pow(t - 1, 4) - 1)
                  },
                  easeInOutQuart: function(t) {
                      return (t /= .5) < 1 ? .5 * Math.pow(t, 4) : -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
                  },
                  easeInQuint: function(t) {
                      return Math.pow(t, 5)
                  },
                  easeOutQuint: function(t) {
                      return Math.pow(t - 1, 5) + 1
                  },
                  easeInOutQuint: function(t) {
                      return (t /= .5) < 1 ? .5 * Math.pow(t, 5) : .5 * (Math.pow(t - 2, 5) + 2)
                  },
                  easeInSine: function(t) {
                      return 1 - Math.cos(t * (Math.PI / 2))
                  },
                  easeOutSine: function(t) {
                      return Math.sin(t * (Math.PI / 2))
                  },
                  easeInOutSine: function(t) {
                      return -.5 * (Math.cos(Math.PI * t) - 1)
                  },
                  easeInExpo: function(t) {
                      return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
                  },
                  easeOutExpo: function(t) {
                      return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                  },
                  easeInOutExpo: function(t) {
                      return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
                  },
                  easeInCirc: function(t) {
                      return -(Math.sqrt(1 - t * t) - 1)
                  },
                  easeOutCirc: function(t) {
                      return Math.sqrt(1 - Math.pow(t - 1, 2))
                  },
                  easeInOutCirc: function(t) {
                      return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                  },
                  easeOutBounce: function(t) {
                      return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                  },
                  easeInBack: function(t) {
                      return t * t * (2.70158 * t - 1.70158)
                  },
                  easeOutBack: function(t) {
                      return (t -= 1) * t * (2.70158 * t + 1.70158) + 1
                  },
                  easeInOutBack: function(t) {
                      var e = 1.70158;
                      return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                  },
                  elastic: function(t) {
                      return -1 * Math.pow(4, -8 * t) * Math.sin((6 * t - 1) * (2 * Math.PI) / 2) + 1
                  },
                  swingFromTo: function(t) {
                      var e = 1.70158;
                      return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                  },
                  swingFrom: function(t) {
                      return t * t * (2.70158 * t - 1.70158)
                  },
                  swingTo: function(t) {
                      return (t -= 1) * t * (2.70158 * t + 1.70158) + 1
                  },
                  bounce: function(t) {
                      return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                  },
                  bouncePast: function(t) {
                      return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                  },
                  easeFromTo: function(t) {
                      return (t /= .5) < 1 ? .5 * Math.pow(t, 4) : -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
                  },
                  easeFrom: function(t) {
                      return Math.pow(t, 4)
                  },
                  easeTo: function(t) {
                      return Math.pow(t, .25)
                  }
              }), d.setBezierFunction = function(t, e, n, i, r) {
                  var o = function(e, n, i, r) {
                      return function(t) {
                          return _(t, e, n, i, r, 1)
                      }
                  }(e, n, i, r);
                  return o.displayName = t, o.x1 = e, o.y1 = n, o.x2 = i, o.y2 = r, d.prototype.formula[t] = o
              }, d.unsetBezierFunction = function(t) {
                  delete d.prototype.formula[t]
              }, (p = new d)._filterArgs = [], d.interpolate = function(t, e, n, i, r) {
                  var o = d.shallowCopy({}, t),
                      s = r || 0,
                      a = d.composeEasingObject(t, i || "linear");
                  p.set({});
                  var u = p._filterArgs;
                  u.length = 0, u[0] = o, u[1] = t, u[2] = e, u[3] = a, d.applyFilter(p, "tweenCreated"), d.applyFilter(p, "beforeTween");
                  var h = function(t, e, n, i, r, o) {
                      return d.tweenProps(i, e, t, n, 1, o, r)
                  }(t, o, e, n, a, s);
                  return d.applyFilter(p, "afterTween"), h
              }, h = d, o = /(\d|\-|\.)/, s = /([^\-0-9\.]+)/g, a = /[0-9.\-]+/g, u = new RegExp("rgb\\(" + a.source + /,\s*/.source + a.source + /,\s*/.source + a.source + "\\)", "g"), c = /^.*\(/, i = /#([0-9]|[a-f]){3,6}/gi, l = "VAL", n = [], f = [], h.prototype.filter.token = {
                  tweenCreated: function(t, e, n, i) {
                      r(t), r(e), r(n), this._tokenData = v(t)
                  },
                  beforeTween: function(t, e, n, i) {
                      ! function(a, u) {
                          h.each(u, function(t) {
                              var e, n = u[t].chunkNames,
                                  i = n.length,
                                  r = a[t];
                              if ("string" == typeof r) {
                                  var o = r.split(" "),
                                      s = o[o.length - 1];
                                  for (e = 0; e < i; e++) a[n[e]] = o[e] || s
                              } else
                                  for (e = 0; e < i; e++) a[n[e]] = r;
                              delete a[t]
                          })
                      }(i, this._tokenData), S(t, this._tokenData), S(e, this._tokenData), S(n, this._tokenData)
                  },
                  afterTween: function(t, e, n, i) {
                      x(t, this._tokenData), x(e, this._tokenData), x(n, this._tokenData),
                          function(s, a) {
                              h.each(a, function(t) {
                                  var e = a[t].chunkNames,
                                      n = e.length,
                                      i = s[e[0]];
                                  if ("string" == typeof i) {
                                      for (var r = "", o = 0; o < n; o++) r += " " + s[e[o]], delete s[e[o]];
                                      s[t] = r.substr(1)
                                  } else s[t] = i
                              })
                          }(i, this._tokenData)
                  }
              }
          }).call(null)
      }, {}],
      2: [function(t, e, n) {
          function i(t, e) {
              this._pathTemplate = "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}", this.containerAspectRatio = 1, r.apply(this, arguments)
          }
          var r = t("./shape"),
              o = t("./utils");
          ((i.prototype = new r).constructor = i).prototype._pathString = function(t) {
              var e = t.strokeWidth;
              t.trailWidth && t.trailWidth > t.strokeWidth && (e = t.trailWidth);
              var n = 50 - e / 2;
              return o.render(this._pathTemplate, {
                  radius: n,
                  "2radius": 2 * n
              })
          }, i.prototype._trailString = function(t) {
              return this._pathString(t)
          }, e.exports = i
      }, {
          "./shape": 7,
          "./utils": 9
      }],
      3: [function(t, e, n) {
          function i(t, e) {
              this._pathTemplate = "M 0,{center} L 100,{center}", r.apply(this, arguments)
          }
          var r = t("./shape"),
              o = t("./utils");
          ((i.prototype = new r).constructor = i).prototype._initializeSvg = function(t, e) {
              t.setAttribute("viewBox", "0 0 100 " + e.strokeWidth), t.setAttribute("preserveAspectRatio", "none")
          }, i.prototype._pathString = function(t) {
              return o.render(this._pathTemplate, {
                  center: t.strokeWidth / 2
              })
          }, i.prototype._trailString = function(t) {
              return this._pathString(t)
          }, e.exports = i
      }, {
          "./shape": 7,
          "./utils": 9
      }],
      4: [function(t, e, n) {
          e.exports = {
              Line: t("./line"),
              Circle: t("./circle"),
              SemiCircle: t("./semicircle"),
              Square: t("./square"),
              Path: t("./path"),
              Shape: t("./shape"),
              utils: t("./utils")
          }
      }, {
          "./circle": 2,
          "./line": 3,
          "./path": 5,
          "./semicircle": 6,
          "./shape": 7,
          "./square": 8,
          "./utils": 9
      }],
      5: [function(t, e, n) {
          function r(t, e) {
              if (!(this instanceof r)) throw new Error("Constructor was called without new keyword");
              var n;
              e = c.extend({
                  duration: 800,
                  easing: "linear",
                  from: {},
                  to: {},
                  step: function() {}
              }, e), n = c.isString(t) ? document.querySelector(t) : t, this.path = n, this._opts = e, this._tweenable = null;
              var i = this.path.getTotalLength();
              this.path.style.strokeDasharray = i + " " + i, this.set(0)
          }
          var p = t("shifty"),
              c = t("./utils"),
              i = {
                  easeIn: "easeInCubic",
                  easeOut: "easeOutCubic",
                  easeInOut: "easeInOutCubic"
              };
          r.prototype.value = function() {
              var t = this._getComputedDashOffset(),
                  e = this.path.getTotalLength();
              return parseFloat((1 - t / e).toFixed(6), 10)
          }, r.prototype.set = function(t) {
              this.stop(), this.path.style.strokeDashoffset = this._progressToOffset(t);
              var e = this._opts.step;
              if (c.isFunction(e)) {
                  var n = this._easing(this._opts.easing);
                  e(this._calculateTo(t, n), this._opts.shape || this, this._opts.attachment)
              }
          }, r.prototype.stop = function() {
              this._stopTween(), this.path.style.strokeDashoffset = this._getComputedDashOffset()
          }, r.prototype.animate = function(t, n, e) {
              n = n || {}, c.isFunction(n) && (e = n, n = {});
              var i = c.extend({}, n),
                  r = c.extend({}, this._opts);
              n = c.extend(r, n);
              var o = this._easing(n.easing),
                  s = this._resolveFromAndTo(t, o, i);
              this.stop(), this.path.getBoundingClientRect();
              var a = this._getComputedDashOffset(),
                  u = this._progressToOffset(t),
                  h = this;
              this._tweenable = new p, this._tweenable.tween({
                  from: c.extend({
                      offset: a
                  }, s.from),
                  to: c.extend({
                      offset: u
                  }, s.to),
                  duration: n.duration,
                  easing: o,
                  step: function(t) {
                      h.path.style.strokeDashoffset = t.offset;
                      var e = n.shape || h;
                      n.step(t, e, n.attachment)
                  },
                  finish: function(t) {
                      c.isFunction(e) && e()
                  }
              })
          }, r.prototype._getComputedDashOffset = function() {
              var t = window.getComputedStyle(this.path, null);
              return parseFloat(t.getPropertyValue("stroke-dashoffset"), 10)
          }, r.prototype._progressToOffset = function(t) {
              var e = this.path.getTotalLength();
              return e - t * e
          }, r.prototype._resolveFromAndTo = function(t, e, n) {
              return n.from && n.to ? {
                  from: n.from,
                  to: n.to
              } : {
                  from: this._calculateFrom(e),
                  to: this._calculateTo(t, e)
              }
          }, r.prototype._calculateFrom = function(t) {
              return p.interpolate(this._opts.from, this._opts.to, this.value(), t)
          }, r.prototype._calculateTo = function(t, e) {
              return p.interpolate(this._opts.from, this._opts.to, t, e)
          }, r.prototype._stopTween = function() {
              null !== this._tweenable && (this._tweenable.stop(), this._tweenable = null)
          }, r.prototype._easing = function(t) {
              return i.hasOwnProperty(t) ? i[t] : t
          }, e.exports = r
      }, {
          "./utils": 9,
          shifty: 1
      }],
      6: [function(t, e, n) {
          function i(t, e) {
              this._pathTemplate = "M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0", this.containerAspectRatio = 2, r.apply(this, arguments)
          }
          var r = t("./shape"),
              o = t("./circle"),
              s = t("./utils");
          ((i.prototype = new r).constructor = i).prototype._initializeSvg = function(t, e) {
              t.setAttribute("viewBox", "0 0 100 50")
          }, i.prototype._initializeTextContainer = function(t, e, n) {
              t.text.style && (n.style.top = "auto", n.style.bottom = "0", t.text.alignToBottom ? s.setStyle(n, "transform", "translate(-50%, 0)") : s.setStyle(n, "transform", "translate(-50%, 50%)"))
          }, i.prototype._pathString = o.prototype._pathString, i.prototype._trailString = o.prototype._trailString, e.exports = i
      }, {
          "./circle": 2,
          "./shape": 7,
          "./utils": 9
      }],
      7: [function(t, e, n) {
          function o(t, e) {
              if (!(this instanceof o)) throw new Error("Constructor was called without new keyword");
              if (0 !== arguments.length) {
                  this._opts = a.extend({
                      color: "#000",
                      strokeWidth: 1,
                      trailColor: null,
                      trailWidth: null,
                      fill: null,
                      text: {
                          style: {
                              color: null,
                              position: "absolute",
                              left: "50%",
                              top: "50%",
                              padding: 0,
                              margin: 0,
                              transform: {
                                  prefix: !0,
                                  value: "translate(-50%, -50%)"
                              }
                          },
                          autoStyleContainer: !0,
                          alignToBottom: !0,
                          value: null,
                          className: "progressbar-text"
                      },
                      svgStyle: {
                          display: "block",
                          width: "100%"
                      },
                      warnings: !1
                  }, e, !0), a.isObject(e) && void 0 !== e.svgStyle && (this._opts.svgStyle = e.svgStyle), a.isObject(e) && a.isObject(e.text) && void 0 !== e.text.style && (this._opts.text.style = e.text.style);
                  var n, i = this._createSvgView(this._opts);
                  if (!(n = a.isString(t) ? document.querySelector(t) : t)) throw new Error("Container does not exist: " + t);
                  this._container = n, this._container.appendChild(i.svg), this._opts.warnings && this._warnContainerAspectRatio(this._container), this._opts.svgStyle && a.setStyles(i.svg, this._opts.svgStyle), this.svg = i.svg, this.path = i.path, this.trail = i.trail, this.text = null;
                  var r = a.extend({
                      attachment: void 0,
                      shape: this
                  }, this._opts);
                  this._progressPath = new s(i.path, r), a.isObject(this._opts.text) && null !== this._opts.text.value && this.setText(this._opts.text.value)
              }
          }
          var s = t("./path"),
              a = t("./utils"),
              i = "Object is destroyed";
          o.prototype.animate = function(t, e, n) {
              if (null === this._progressPath) throw new Error(i);
              this._progressPath.animate(t, e, n)
          }, o.prototype.stop = function() {
              if (null === this._progressPath) throw new Error(i);
              void 0 !== this._progressPath && this._progressPath.stop()
          }, o.prototype.destroy = function() {
              if (null === this._progressPath) throw new Error(i);
              this.stop(), this.svg.parentNode.removeChild(this.svg), this.svg = null, this.path = null, this.trail = null, (this._progressPath = null) !== this.text && (this.text.parentNode.removeChild(this.text), this.text = null)
          }, o.prototype.set = function(t) {
              if (null === this._progressPath) throw new Error(i);
              this._progressPath.set(t)
          }, o.prototype.value = function() {
              if (null === this._progressPath) throw new Error(i);
              return void 0 === this._progressPath ? 0 : this._progressPath.value()
          }, o.prototype.setText = function(t) {
              if (null === this._progressPath) throw new Error(i);
              null === this.text && (this.text = this._createTextContainer(this._opts, this._container), this._container.appendChild(this.text)), a.isObject(t) ? (a.removeChildren(this.text), this.text.appendChild(t)) : this.text.innerHTML = t
          }, o.prototype._createSvgView = function(t) {
              var e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
              this._initializeSvg(e, t);
              var n = null;
              (t.trailColor || t.trailWidth) && (n = this._createTrail(t), e.appendChild(n));
              var i = this._createPath(t);
              return e.appendChild(i), {
                  svg: e,
                  path: i,
                  trail: n
              }
          }, o.prototype._initializeSvg = function(t, e) {
              t.setAttribute("viewBox", "0 0 100 100")
          }, o.prototype._createPath = function(t) {
              var e = this._pathString(t);
              return this._createPathElement(e, t)
          }, o.prototype._createTrail = function(t) {
              var e = this._trailString(t),
                  n = a.extend({}, t);
              return n.trailColor || (n.trailColor = "#ccc"), n.trailWidth || (n.trailWidth = n.strokeWidth), n.color = n.trailColor, n.strokeWidth = n.trailWidth, n.fill = null, this._createPathElement(e, n)
          }, o.prototype._createPathElement = function(t, e) {
              var n = document.createElementNS("http://www.w3.org/2000/svg", "path");
              return n.setAttribute("d", t), n.setAttribute("stroke", e.color), n.setAttribute("stroke-width", e.strokeWidth), e.fill ? n.setAttribute("fill", e.fill) : n.setAttribute("fill-opacity", "0"), n
          }, o.prototype._createTextContainer = function(t, e) {
              var n = document.createElement("div");
              n.className = t.text.className;
              var i = t.text.style;
              return i && (t.text.autoStyleContainer && (e.style.position = "relative"), a.setStyles(n, i), i.color || (n.style.color = "#000")), this._initializeTextContainer(t, e, n), n
          }, o.prototype._initializeTextContainer = function(t, e, n) {}, o.prototype._pathString = function(t) {
              throw new Error("Override this function for each progress bar")
          }, o.prototype._trailString = function(t) {
              throw new Error("Override this function for each progress bar")
          }, o.prototype._warnContainerAspectRatio = function(t) {
              if (this.containerAspectRatio) {
                  var e = window.getComputedStyle(t, null),
                      n = parseFloat(e.getPropertyValue("width"), 10),
                      i = parseFloat(e.getPropertyValue("height"), 10);
                  a.floatEquals(this.containerAspectRatio, n / i) || (console.warn("Incorrect aspect ratio of container", "#" + t.id, "detected:", e.getPropertyValue("width") + "(width)", "/", e.getPropertyValue("height") + "(height)", "=", n / i), console.warn("Aspect ratio of should be", this.containerAspectRatio))
              }
          }, e.exports = o
      }, {
          "./path": 5,
          "./utils": 9
      }],
      8: [function(t, e, n) {
          function i(t, e) {
              this._pathTemplate = "M 0,{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{strokeWidth}", this._trailTemplate = "M {startMargin},{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{halfOfStrokeWidth}", r.apply(this, arguments)
          }
          var r = t("./shape"),
              o = t("./utils");
          ((i.prototype = new r).constructor = i).prototype._pathString = function(t) {
              var e = 100 - t.strokeWidth / 2;
              return o.render(this._pathTemplate, {
                  width: e,
                  strokeWidth: t.strokeWidth,
                  halfOfStrokeWidth: t.strokeWidth / 2
              })
          }, i.prototype._trailString = function(t) {
              var e = 100 - t.strokeWidth / 2;
              return o.render(this._trailTemplate, {
                  width: e,
                  strokeWidth: t.strokeWidth,
                  halfOfStrokeWidth: t.strokeWidth / 2,
                  startMargin: t.strokeWidth / 2 - t.trailWidth / 2
              })
          }, e.exports = i
      }, {
          "./shape": 7,
          "./utils": 9
      }],
      9: [function(t, e, n) {
          var o = "Webkit Moz O ms".split(" ");

          function i(t, e, n) {
              for (var i = t.style, r = 0; r < o.length; ++r) {
                  i[o[r] + s(e)] = n
              }
              i[e] = n
          }

          function s(t) {
              return t.charAt(0).toUpperCase() + t.slice(1)
          }

          function a(t) {
              return ! function(t) {
                  return "[object Array]" === Object.prototype.toString.call(t)
              }(t) && ("object" == typeof t && !!t)
          }

          function r(t, e) {
              for (var n in t) {
                  if (t.hasOwnProperty(n)) e(t[n], n)
              }
          }
          e.exports = {
              extend: function t(e, n, i) {
                  for (var r in e = e || {}, i = i || !1, n = n || {})
                      if (n.hasOwnProperty(r)) {
                          var o = e[r],
                              s = n[r];
                          i && a(o) && a(s) ? e[r] = t(o, s, i) : e[r] = s
                      }
                  return e
              },
              render: function(t, e) {
                  var n = t;
                  for (var i in e)
                      if (e.hasOwnProperty(i)) {
                          var r = e[i],
                              o = new RegExp("\\{" + i + "\\}", "g");
                          n = n.replace(o, r)
                      }
                  return n
              },
              setStyle: i,
              setStyles: function(n, t) {
                  r(t, function(t, e) {
                      null != t && (a(t) && !0 === t.prefix ? i(n, e, t.value) : n.style[e] = t)
                  })
              },
              capitalize: s,
              isString: function(t) {
                  return "string" == typeof t || t instanceof String
              },
              isFunction: function(t) {
                  return "function" == typeof t
              },
              isObject: a,
              forEachObject: r,
              floatEquals: function(t, e) {
                  return Math.abs(t - e) < .001
              },
              removeChildren: function(t) {
                  for (; t.firstChild;) t.removeChild(t.firstChild)
              }
          }
      }, {}]
  }, {}, [4])(4)
});