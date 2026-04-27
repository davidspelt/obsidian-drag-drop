var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/sortablejs/Sortable.min.js
var require_Sortable_min = __commonJS({
  "node_modules/sortablejs/Sortable.min.js"(exports, module2) {
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module2 ? module2.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).Sortable = e();
    }(exports, function() {
      "use strict";
      function o(t2, e2) {
        (null == e2 || e2 > t2.length) && (e2 = t2.length);
        for (var n2 = 0, o2 = Array(e2); n2 < e2; n2++)
          o2[n2] = t2[n2];
        return o2;
      }
      function i(t2, e2, n2) {
        return (e2 = function(t3) {
          t3 = function(t4, e3) {
            if ("object" != typeof t4 || !t4)
              return t4;
            var n3 = t4[Symbol.toPrimitive];
            if (void 0 === n3)
              return ("string" === e3 ? String : Number)(t4);
            e3 = n3.call(t4, e3 || "default");
            if ("object" != typeof e3)
              return e3;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }(t3, "string");
          return "symbol" == typeof t3 ? t3 : t3 + "";
        }(e2)) in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
      }
      function a() {
        return (a = Object.assign ? Object.assign.bind() : function(t2) {
          for (var e2 = 1; e2 < arguments.length; e2++) {
            var n2, o2 = arguments[e2];
            for (n2 in o2)
              !{}.hasOwnProperty.call(o2, n2) || (t2[n2] = o2[n2]);
          }
          return t2;
        }).apply(null, arguments);
      }
      function r(e2, t2) {
        var n2, o2 = Object.keys(e2);
        return Object.getOwnPropertySymbols && (n2 = Object.getOwnPropertySymbols(e2), t2 && (n2 = n2.filter(function(t3) {
          return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
        })), o2.push.apply(o2, n2)), o2;
      }
      function I(e2) {
        for (var t2 = 1; t2 < arguments.length; t2++) {
          var n2 = null != arguments[t2] ? arguments[t2] : {};
          t2 % 2 ? r(Object(n2), true).forEach(function(t3) {
            i(e2, t3, n2[t3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : r(Object(n2)).forEach(function(t3) {
            Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
        }
        return e2;
      }
      function l(t2, e2) {
        if (null == t2)
          return {};
        var n2, o2 = function(t3, e3) {
          if (null == t3)
            return {};
          var n3, o3 = {};
          for (n3 in t3)
            if ({}.hasOwnProperty.call(t3, n3)) {
              if (-1 !== e3.indexOf(n3))
                continue;
              o3[n3] = t3[n3];
            }
          return o3;
        }(t2, e2);
        if (Object.getOwnPropertySymbols)
          for (var i2 = Object.getOwnPropertySymbols(t2), r2 = 0; r2 < i2.length; r2++)
            n2 = i2[r2], -1 === e2.indexOf(n2) && {}.propertyIsEnumerable.call(t2, n2) && (o2[n2] = t2[n2]);
        return o2;
      }
      function e(t2) {
        return function(t3) {
          if (Array.isArray(t3))
            return o(t3);
        }(t2) || function(t3) {
          if ("undefined" != typeof Symbol && null != t3[Symbol.iterator] || null != t3["@@iterator"])
            return Array.from(t3);
        }(t2) || function(t3, e2) {
          if (t3) {
            if ("string" == typeof t3)
              return o(t3, e2);
            var n2 = {}.toString.call(t3).slice(8, -1);
            return "Map" === (n2 = "Object" === n2 && t3.constructor ? t3.constructor.name : n2) || "Set" === n2 ? Array.from(t3) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? o(t3, e2) : void 0;
          }
        }(t2) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function s(t2) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
          return typeof t3;
        } : function(t3) {
          return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
        })(t2);
      }
      function t(t2) {
        if ("undefined" != typeof window && window.navigator)
          return !!navigator.userAgent.match(t2);
      }
      var y = t(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), w = t(/Edge/i), c = t(/firefox/i), u = t(/safari/i) && !t(/chrome/i) && !t(/android/i), d = t(/iP(ad|od|hone)/i), n = t(/chrome/i) && t(/android/i), h = { capture: false, passive: false };
      function f(t2, e2, n2) {
        t2.addEventListener(e2, n2, !y && h);
      }
      function p(t2, e2, n2) {
        t2.removeEventListener(e2, n2, !y && h);
      }
      function g(t2, e2) {
        if (e2 && (">" === e2[0] && (e2 = e2.substring(1)), t2))
          try {
            if (t2.matches)
              return t2.matches(e2);
            if (t2.msMatchesSelector)
              return t2.msMatchesSelector(e2);
            if (t2.webkitMatchesSelector)
              return t2.webkitMatchesSelector(e2);
          } catch (t3) {
            return;
          }
      }
      function m(t2) {
        return t2.host && t2 !== document && t2.host.nodeType && t2.host !== t2 ? t2.host : t2.parentNode;
      }
      function P(t2, e2, n2, o2) {
        if (t2) {
          n2 = n2 || document;
          do {
            if (null != e2 && (">" !== e2[0] || t2.parentNode === n2) && g(t2, e2) || o2 && t2 === n2)
              return t2;
          } while (t2 !== n2 && (t2 = m(t2)));
        }
        return null;
      }
      var v, b = /\s+/g;
      function k(t2, e2, n2) {
        var o2;
        t2 && e2 && (t2.classList ? t2.classList[n2 ? "add" : "remove"](e2) : (o2 = (" " + t2.className + " ").replace(b, " ").replace(" " + e2 + " ", " "), t2.className = (o2 + (n2 ? " " + e2 : "")).replace(b, " ")));
      }
      function R(t2, e2, n2) {
        var o2 = t2 && t2.style;
        if (o2) {
          if (void 0 === n2)
            return document.defaultView && document.defaultView.getComputedStyle ? n2 = document.defaultView.getComputedStyle(t2, "") : t2.currentStyle && (n2 = t2.currentStyle), void 0 === e2 ? n2 : n2[e2];
          o2[e2 = !(e2 in o2 || -1 !== e2.indexOf("webkit")) ? "-webkit-" + e2 : e2] = n2 + ("string" == typeof n2 ? "" : "px");
        }
      }
      function D(t2, e2) {
        var n2 = "";
        if ("string" == typeof t2)
          n2 = t2;
        else
          do {
            var o2 = R(t2, "transform");
          } while (o2 && "none" !== o2 && (n2 = o2 + " " + n2), !e2 && (t2 = t2.parentNode));
        var i2 = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
        return i2 && new i2(n2);
      }
      function E(t2, e2, n2) {
        if (t2) {
          var o2 = t2.getElementsByTagName(e2), i2 = 0, r2 = o2.length;
          if (n2)
            for (; i2 < r2; i2++)
              n2(o2[i2], i2);
          return o2;
        }
        return [];
      }
      function O() {
        var t2 = document.scrollingElement;
        return t2 || document.documentElement;
      }
      function X(t2, e2, n2, o2, i2) {
        if (t2.getBoundingClientRect || t2 === window) {
          var r2, a2, l2, s2, c2, u2, d2 = t2 !== window && t2.parentNode && t2 !== O() ? (a2 = (r2 = t2.getBoundingClientRect()).top, l2 = r2.left, s2 = r2.bottom, c2 = r2.right, u2 = r2.height, r2.width) : (l2 = a2 = 0, s2 = window.innerHeight, c2 = window.innerWidth, u2 = window.innerHeight, window.innerWidth);
          if ((e2 || n2) && t2 !== window && (i2 = i2 || t2.parentNode, !y))
            do {
              if (i2 && i2.getBoundingClientRect && ("none" !== R(i2, "transform") || n2 && "static" !== R(i2, "position"))) {
                var h2 = i2.getBoundingClientRect();
                a2 -= h2.top + parseInt(R(i2, "border-top-width")), l2 -= h2.left + parseInt(R(i2, "border-left-width")), s2 = a2 + r2.height, c2 = l2 + r2.width;
                break;
              }
            } while (i2 = i2.parentNode);
          return o2 && t2 !== window && (o2 = (e2 = D(i2 || t2)) && e2.a, t2 = e2 && e2.d, e2 && (s2 = (a2 /= t2) + (u2 /= t2), c2 = (l2 /= o2) + (d2 /= o2))), { top: a2, left: l2, bottom: s2, right: c2, width: d2, height: u2 };
        }
      }
      function Y(t2, e2, n2) {
        for (var o2 = M(t2, true), i2 = X(t2)[e2]; o2; ) {
          var r2 = X(o2)[n2];
          if (!("top" === n2 || "left" === n2 ? r2 <= i2 : i2 <= r2))
            return o2;
          if (o2 === O())
            break;
          o2 = M(o2, false);
        }
        return false;
      }
      function B(t2, e2, n2, o2) {
        for (var i2 = 0, r2 = 0, a2 = t2.children; r2 < a2.length; ) {
          if ("none" !== a2[r2].style.display && a2[r2] !== Ht.ghost && (o2 || a2[r2] !== Ht.dragged) && P(a2[r2], n2.draggable, t2, false)) {
            if (i2 === e2)
              return a2[r2];
            i2++;
          }
          r2++;
        }
        return null;
      }
      function F(t2, e2) {
        for (var n2 = t2.lastElementChild; n2 && (n2 === Ht.ghost || "none" === R(n2, "display") || e2 && !g(n2, e2)); )
          n2 = n2.previousElementSibling;
        return n2 || null;
      }
      function j(t2, e2) {
        var n2 = 0;
        if (!t2 || !t2.parentNode)
          return -1;
        for (; t2 = t2.previousElementSibling; )
          "TEMPLATE" === t2.nodeName.toUpperCase() || t2 === Ht.clone || e2 && !g(t2, e2) || n2++;
        return n2;
      }
      function S(t2) {
        var e2 = 0, n2 = 0, o2 = O();
        if (t2)
          do {
            var i2 = D(t2), r2 = i2.a, i2 = i2.d;
          } while (e2 += t2.scrollLeft * r2, n2 += t2.scrollTop * i2, t2 !== o2 && (t2 = t2.parentNode));
        return [e2, n2];
      }
      function M(t2, e2) {
        if (!t2 || !t2.getBoundingClientRect)
          return O();
        var n2 = t2, o2 = false;
        do {
          if (n2.clientWidth < n2.scrollWidth || n2.clientHeight < n2.scrollHeight) {
            var i2 = R(n2);
            if (n2.clientWidth < n2.scrollWidth && ("auto" == i2.overflowX || "scroll" == i2.overflowX) || n2.clientHeight < n2.scrollHeight && ("auto" == i2.overflowY || "scroll" == i2.overflowY)) {
              if (!n2.getBoundingClientRect || n2 === document.body)
                return O();
              if (o2 || e2)
                return n2;
              o2 = true;
            }
          }
        } while (n2 = n2.parentNode);
        return O();
      }
      function _(t2, e2) {
        return Math.round(t2.top) === Math.round(e2.top) && Math.round(t2.left) === Math.round(e2.left) && Math.round(t2.height) === Math.round(e2.height) && Math.round(t2.width) === Math.round(e2.width);
      }
      function C(e2, n2) {
        return function() {
          var t2;
          v || (1 === (t2 = arguments).length ? e2.call(this, t2[0]) : e2.apply(this, t2), v = setTimeout(function() {
            v = void 0;
          }, n2));
        };
      }
      function H(t2, e2, n2) {
        t2.scrollLeft += e2, t2.scrollTop += n2;
      }
      function T(t2) {
        var e2 = window.Polymer, n2 = window.jQuery || window.Zepto;
        return e2 && e2.dom ? e2.dom(t2).cloneNode(true) : n2 ? n2(t2).clone(true)[0] : t2.cloneNode(true);
      }
      function x(t2, e2) {
        R(t2, "position", "absolute"), R(t2, "top", e2.top), R(t2, "left", e2.left), R(t2, "width", e2.width), R(t2, "height", e2.height);
      }
      function A(t2) {
        R(t2, "position", ""), R(t2, "top", ""), R(t2, "left", ""), R(t2, "width", ""), R(t2, "height", "");
      }
      function L(n2, o2, i2) {
        var r2 = {};
        return Array.from(n2.children).forEach(function(t2) {
          var e2;
          P(t2, o2.draggable, n2, false) && !t2.animated && t2 !== i2 && (e2 = X(t2), r2.left = Math.min(null !== (t2 = r2.left) && void 0 !== t2 ? t2 : 1 / 0, e2.left), r2.top = Math.min(null !== (t2 = r2.top) && void 0 !== t2 ? t2 : 1 / 0, e2.top), r2.right = Math.max(null !== (t2 = r2.right) && void 0 !== t2 ? t2 : -1 / 0, e2.right), r2.bottom = Math.max(null !== (t2 = r2.bottom) && void 0 !== t2 ? t2 : -1 / 0, e2.bottom));
        }), r2.width = r2.right - r2.left, r2.height = r2.bottom - r2.top, r2.x = r2.left, r2.y = r2.top, r2;
      }
      var K = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
      function N() {
        var e2, o2 = [];
        return { captureAnimationState: function() {
          o2 = [], this.options.animation && [].slice.call(this.el.children).forEach(function(t2) {
            var e3, n2;
            "none" !== R(t2, "display") && t2 !== Ht.ghost && (o2.push({ target: t2, rect: X(t2) }), e3 = I({}, o2[o2.length - 1].rect), !t2.thisAnimationDuration || (n2 = D(t2, true)) && (e3.top -= n2.f, e3.left -= n2.e), t2.fromRect = e3);
          });
        }, addAnimationState: function(t2) {
          o2.push(t2);
        }, removeAnimationState: function(t2) {
          o2.splice(function(t3, e3) {
            for (var n2 in t3)
              if (t3.hasOwnProperty(n2)) {
                for (var o3 in e3)
                  if (e3.hasOwnProperty(o3) && e3[o3] === t3[n2][o3])
                    return Number(n2);
              }
            return -1;
          }(o2, { target: t2 }), 1);
        }, animateAll: function(t2) {
          var c2 = this;
          if (!this.options.animation)
            return clearTimeout(e2), void ("function" == typeof t2 && t2());
          var u2 = false, d2 = 0;
          o2.forEach(function(t3) {
            var e3 = 0, n2 = t3.target, o3 = n2.fromRect, i2 = X(n2), r2 = n2.prevFromRect, a2 = n2.prevToRect, l2 = t3.rect, s2 = D(n2, true);
            s2 && (i2.top -= s2.f, i2.left -= s2.e), n2.toRect = i2, n2.thisAnimationDuration && _(r2, i2) && !_(o3, i2) && (l2.top - i2.top) / (l2.left - i2.left) == (o3.top - i2.top) / (o3.left - i2.left) && (t3 = l2, s2 = r2, r2 = a2, a2 = c2.options, e3 = Math.sqrt(Math.pow(s2.top - t3.top, 2) + Math.pow(s2.left - t3.left, 2)) / Math.sqrt(Math.pow(s2.top - r2.top, 2) + Math.pow(s2.left - r2.left, 2)) * a2.animation), _(i2, o3) || (n2.prevFromRect = o3, n2.prevToRect = i2, e3 = e3 || c2.options.animation, c2.animate(n2, l2, i2, e3)), e3 && (u2 = true, d2 = Math.max(d2, e3), clearTimeout(n2.animationResetTimer), n2.animationResetTimer = setTimeout(function() {
              n2.animationTime = 0, n2.prevFromRect = null, n2.fromRect = null, n2.prevToRect = null, n2.thisAnimationDuration = null;
            }, e3), n2.thisAnimationDuration = e3);
          }), clearTimeout(e2), u2 ? e2 = setTimeout(function() {
            "function" == typeof t2 && t2();
          }, d2) : "function" == typeof t2 && t2(), o2 = [];
        }, animate: function(t2, e3, n2, o3) {
          var i2, r2;
          o3 && (R(t2, "transition", ""), R(t2, "transform", ""), i2 = (r2 = D(this.el)) && r2.a, r2 = r2 && r2.d, i2 = (e3.left - n2.left) / (i2 || 1), r2 = (e3.top - n2.top) / (r2 || 1), t2.animatingX = !!i2, t2.animatingY = !!r2, R(t2, "transform", "translate3d(" + i2 + "px," + r2 + "px,0)"), this.forRepaintDummy = t2.offsetWidth, R(t2, "transition", "transform " + o3 + "ms" + (this.options.easing ? " " + this.options.easing : "")), R(t2, "transform", "translate3d(0,0,0)"), "number" == typeof t2.animated && clearTimeout(t2.animated), t2.animated = setTimeout(function() {
            R(t2, "transition", ""), R(t2, "transform", ""), t2.animated = false, t2.animatingX = false, t2.animatingY = false;
          }, o3));
        } };
      }
      var W = [], z = { initializeByDefault: true }, G = { mount: function(e2) {
        for (var t2 in z)
          !z.hasOwnProperty(t2) || t2 in e2 || (e2[t2] = z[t2]);
        W.forEach(function(t3) {
          if (t3.pluginName === e2.pluginName)
            throw "Sortable: Cannot mount plugin ".concat(e2.pluginName, " more than once");
        }), W.push(e2);
      }, pluginEvent: function(e2, n2, o2) {
        var t2 = this;
        this.eventCanceled = false, o2.cancel = function() {
          t2.eventCanceled = true;
        };
        var i2 = e2 + "Global";
        W.forEach(function(t3) {
          n2[t3.pluginName] && (n2[t3.pluginName][i2] && n2[t3.pluginName][i2](I({ sortable: n2 }, o2)), n2.options[t3.pluginName] && n2[t3.pluginName][e2] && n2[t3.pluginName][e2](I({ sortable: n2 }, o2)));
        });
      }, initializePlugins: function(n2, o2, i2, t2) {
        for (var e2 in W.forEach(function(t3) {
          var e3 = t3.pluginName;
          (n2.options[e3] || t3.initializeByDefault) && ((t3 = new t3(n2, o2, n2.options)).sortable = n2, t3.options = n2.options, n2[e3] = t3, a(i2, t3.defaults));
        }), n2.options) {
          var r2;
          n2.options.hasOwnProperty(e2) && (void 0 !== (r2 = this.modifyOption(n2, e2, n2.options[e2])) && (n2.options[e2] = r2));
        }
      }, getEventProperties: function(e2, n2) {
        var o2 = {};
        return W.forEach(function(t2) {
          "function" == typeof t2.eventProperties && a(o2, t2.eventProperties.call(n2[t2.pluginName], e2));
        }), o2;
      }, modifyOption: function(e2, n2, o2) {
        var i2;
        return W.forEach(function(t2) {
          e2[t2.pluginName] && t2.optionListeners && "function" == typeof t2.optionListeners[n2] && (i2 = t2.optionListeners[n2].call(e2[t2.pluginName], o2));
        }), i2;
      } };
      function U(t2) {
        var e2 = t2.sortable, n2 = t2.rootEl, o2 = t2.name, i2 = t2.targetEl, r2 = t2.cloneEl, a2 = t2.toEl, l2 = t2.fromEl, s2 = t2.oldIndex, c2 = t2.newIndex, u2 = t2.oldDraggableIndex, d2 = t2.newDraggableIndex, h2 = t2.originalEvent, f2 = t2.putSortable, p2 = t2.extraEventProperties;
        if (e2 = e2 || n2 && n2[K]) {
          var g2, m2 = e2.options, t2 = "on" + o2.charAt(0).toUpperCase() + o2.substr(1);
          !window.CustomEvent || y || w ? (g2 = document.createEvent("Event")).initEvent(o2, true, true) : g2 = new CustomEvent(o2, { bubbles: true, cancelable: true }), g2.to = a2 || n2, g2.from = l2 || n2, g2.item = i2 || n2, g2.clone = r2, g2.oldIndex = s2, g2.newIndex = c2, g2.oldDraggableIndex = u2, g2.newDraggableIndex = d2, g2.originalEvent = h2, g2.pullMode = f2 ? f2.lastPutMode : void 0;
          var v2, b2 = I(I({}, p2), G.getEventProperties(o2, e2));
          for (v2 in b2)
            g2[v2] = b2[v2];
          n2 && n2.dispatchEvent(g2), m2[t2] && m2[t2].call(e2, g2);
        }
      }
      function q(t2, e2) {
        var n2 = (o2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).evt, o2 = l(o2, V);
        G.pluginEvent.bind(Ht)(t2, e2, I({ dragEl: $, parentEl: Q, ghostEl: J, rootEl: tt, nextEl: et, lastDownEl: nt, cloneEl: ot, cloneHidden: it, dragStarted: vt, putSortable: ut, activeSortable: Ht.active, originalEvent: n2, oldIndex: rt, oldDraggableIndex: lt, newIndex: at, newDraggableIndex: st, hideGhostForTarget: Yt, unhideGhostForTarget: Bt, cloneNowHidden: function() {
          it = true;
        }, cloneNowShown: function() {
          it = false;
        }, dispatchSortableEvent: function(t3) {
          Z({ sortable: e2, name: t3, originalEvent: n2 });
        } }, o2));
      }
      var V = ["evt"];
      function Z(t2) {
        U(I({ putSortable: ut, cloneEl: ot, targetEl: $, rootEl: tt, oldIndex: rt, oldDraggableIndex: lt, newIndex: at, newDraggableIndex: st }, t2));
      }
      var $, Q, J, tt, et, nt, ot, it, rt, at, lt, st, ct, ut, dt, ht, ft, pt, gt, mt, vt, bt, yt, wt, Dt, Et = false, St = false, _t = [], Ct = false, Tt = false, xt = [], Ot = false, Mt = [], At = "undefined" != typeof document, Nt = d, It = w || y ? "cssFloat" : "float", Pt = At && !n && !d && "draggable" in document.createElement("div"), kt = function() {
        if (At) {
          if (y)
            return false;
          var t2 = document.createElement("x");
          return t2.style.cssText = "pointer-events:auto", "auto" === t2.style.pointerEvents;
        }
      }(), Rt = function(t2, e2) {
        var n2 = R(t2), o2 = parseInt(n2.width) - parseInt(n2.paddingLeft) - parseInt(n2.paddingRight) - parseInt(n2.borderLeftWidth) - parseInt(n2.borderRightWidth), i2 = B(t2, 0, e2), r2 = B(t2, 1, e2), a2 = i2 && R(i2), l2 = r2 && R(r2), s2 = a2 && parseInt(a2.marginLeft) + parseInt(a2.marginRight) + X(i2).width, t2 = l2 && parseInt(l2.marginLeft) + parseInt(l2.marginRight) + X(r2).width;
        if ("flex" === n2.display)
          return "column" === n2.flexDirection || "column-reverse" === n2.flexDirection ? "vertical" : "horizontal";
        if ("grid" === n2.display)
          return n2.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
        if (i2 && a2.float && "none" !== a2.float) {
          e2 = "left" === a2.float ? "left" : "right";
          return !r2 || "both" !== l2.clear && l2.clear !== e2 ? "horizontal" : "vertical";
        }
        return i2 && ("block" === a2.display || "flex" === a2.display || "table" === a2.display || "grid" === a2.display || o2 <= s2 && "none" === n2[It] || r2 && "none" === n2[It] && o2 < s2 + t2) ? "vertical" : "horizontal";
      }, Xt = function(t2) {
        function l2(r2, a2) {
          return function(t3, e3, n3, o2) {
            var i2 = t3.options.group.name && e3.options.group.name && t3.options.group.name === e3.options.group.name;
            if (null == r2 && (a2 || i2))
              return true;
            if (null == r2 || false === r2)
              return false;
            if (a2 && "clone" === r2)
              return r2;
            if ("function" == typeof r2)
              return l2(r2(t3, e3, n3, o2), a2)(t3, e3, n3, o2);
            e3 = (a2 ? t3 : e3).options.group.name;
            return true === r2 || "string" == typeof r2 && r2 === e3 || r2.join && -1 < r2.indexOf(e3);
          };
        }
        var e2 = {}, n2 = t2.group;
        n2 && "object" == s(n2) || (n2 = { name: n2 }), e2.name = n2.name, e2.checkPull = l2(n2.pull, true), e2.checkPut = l2(n2.put), e2.revertClone = n2.revertClone, t2.group = e2;
      }, Yt = function() {
        !kt && J && R(J, "display", "none");
      }, Bt = function() {
        !kt && J && R(J, "display", "");
      };
      At && !n && document.addEventListener("click", function(t2) {
        if (St)
          return t2.preventDefault(), t2.stopPropagation && t2.stopPropagation(), t2.stopImmediatePropagation && t2.stopImmediatePropagation(), St = false;
      }, true);
      function Ft(t2) {
        if ($) {
          t2 = t2.touches ? t2.touches[0] : t2;
          var e2 = (i2 = t2.clientX, r2 = t2.clientY, _t.some(function(t3) {
            var e3 = t3[K].options.emptyInsertThreshold;
            if (e3 && !F(t3)) {
              var n3 = X(t3), o3 = i2 >= n3.left - e3 && i2 <= n3.right + e3, e3 = r2 >= n3.top - e3 && r2 <= n3.bottom + e3;
              return o3 && e3 ? a2 = t3 : void 0;
            }
          }), a2);
          if (e2) {
            var n2, o2 = {};
            for (n2 in t2)
              t2.hasOwnProperty(n2) && (o2[n2] = t2[n2]);
            o2.target = o2.rootEl = e2, o2.preventDefault = void 0, o2.stopPropagation = void 0, e2[K]._onDragOver(o2);
          }
        }
        var i2, r2, a2;
      }
      function jt(t2) {
        $ && $.parentNode[K]._isOutsideThisEl(t2.target);
      }
      function Ht(t2, e2) {
        if (!t2 || !t2.nodeType || 1 !== t2.nodeType)
          throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t2));
        this.el = t2, this.options = e2 = a({}, e2), t2[K] = this;
        var n2, o2, i2 = { group: null, sort: true, disabled: false, store: null, handle: null, draggable: /^[uo]l$/i.test(t2.nodeName) ? ">li" : ">*", swapThreshold: 1, invertSwap: false, invertedSwapThreshold: null, removeCloneOnHide: true, direction: function() {
          return Rt(t2, this.options);
        }, ghostClass: "sortable-ghost", chosenClass: "sortable-chosen", dragClass: "sortable-drag", ignore: "a, img", filter: null, preventOnFilter: true, animation: 0, easing: null, setData: function(t3, e3) {
          t3.setData("Text", e3.textContent);
        }, dropBubble: false, dragoverBubble: false, dataIdAttr: "data-id", delay: 0, delayOnTouchOnly: false, touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1, forceFallback: false, fallbackClass: "sortable-fallback", fallbackOnBody: false, fallbackTolerance: 0, fallbackOffset: { x: 0, y: 0 }, supportPointer: false !== Ht.supportPointer && "PointerEvent" in window && (!u || d), emptyInsertThreshold: 5 };
        for (n2 in G.initializePlugins(this, t2, i2), i2)
          n2 in e2 || (e2[n2] = i2[n2]);
        for (o2 in Xt(e2), this)
          "_" === o2.charAt(0) && "function" == typeof this[o2] && (this[o2] = this[o2].bind(this));
        this.nativeDraggable = !e2.forceFallback && Pt, this.nativeDraggable && (this.options.touchStartThreshold = 1), e2.supportPointer ? f(t2, "pointerdown", this._onTapStart) : (f(t2, "mousedown", this._onTapStart), f(t2, "touchstart", this._onTapStart)), this.nativeDraggable && (f(t2, "dragover", this), f(t2, "dragenter", this)), _t.push(this.el), e2.store && e2.store.get && this.sort(e2.store.get(this) || []), a(this, N());
      }
      function Lt(t2, e2, n2, o2, i2, r2, a2, l2) {
        var s2, c2, u2 = t2[K], d2 = u2.options.onMove;
        return !window.CustomEvent || y || w ? (s2 = document.createEvent("Event")).initEvent("move", true, true) : s2 = new CustomEvent("move", { bubbles: true, cancelable: true }), s2.to = e2, s2.from = t2, s2.dragged = n2, s2.draggedRect = o2, s2.related = i2 || e2, s2.relatedRect = r2 || X(e2), s2.willInsertAfter = l2, s2.originalEvent = a2, t2.dispatchEvent(s2), c2 = d2 ? d2.call(u2, s2, a2) : c2;
      }
      function Kt(t2) {
        t2.draggable = false;
      }
      function Wt() {
        Ot = false;
      }
      function zt(t2) {
        return setTimeout(t2, 0);
      }
      function Gt(t2) {
        return clearTimeout(t2);
      }
      Ht.prototype = { constructor: Ht, _isOutsideThisEl: function(t2) {
        this.el.contains(t2) || t2 === this.el || (bt = null);
      }, _getDirection: function(t2, e2) {
        return "function" == typeof this.options.direction ? this.options.direction.call(this, t2, e2, $) : this.options.direction;
      }, _onTapStart: function(e2) {
        if (e2.cancelable) {
          var n2 = this, o2 = this.el, t2 = this.options, i2 = t2.preventOnFilter, r2 = e2.type, a2 = e2.touches && e2.touches[0] || e2.pointerType && "touch" === e2.pointerType && e2, l2 = (a2 || e2).target, s2 = e2.target.shadowRoot && (e2.path && e2.path[0] || e2.composedPath && e2.composedPath()[0]) || l2, c2 = t2.filter;
          if (!function(t3) {
            Mt.length = 0;
            var e3 = t3.getElementsByTagName("input"), n3 = e3.length;
            for (; n3--; ) {
              var o3 = e3[n3];
              o3.checked && Mt.push(o3);
            }
          }(o2), !$ && !(/mousedown|pointerdown/.test(r2) && 0 !== e2.button || t2.disabled) && !s2.isContentEditable && (this.nativeDraggable || !u || !l2 || "SELECT" !== l2.tagName.toUpperCase()) && !((l2 = P(l2, t2.draggable, o2, false)) && l2.animated || nt === l2)) {
            if (rt = j(l2), lt = j(l2, t2.draggable), "function" == typeof c2) {
              if (c2.call(this, e2, l2, this))
                return Z({ sortable: n2, rootEl: s2, name: "filter", targetEl: l2, toEl: o2, fromEl: o2 }), q("filter", n2, { evt: e2 }), void (i2 && e2.preventDefault());
            } else if (c2 = c2 && c2.split(",").some(function(t3) {
              if (t3 = P(s2, t3.trim(), o2, false))
                return Z({ sortable: n2, rootEl: t3, name: "filter", targetEl: l2, fromEl: o2, toEl: o2 }), q("filter", n2, { evt: e2 }), true;
            }))
              return void (i2 && e2.preventDefault());
            t2.handle && !P(s2, t2.handle, o2, false) || this._prepareDragStart(e2, a2, l2);
          }
        }
      }, _prepareDragStart: function(t2, e2, n2) {
        var o2, i2 = this, r2 = i2.el, a2 = i2.options, l2 = r2.ownerDocument;
        n2 && !$ && n2.parentNode === r2 && (o2 = X(n2), tt = r2, Q = ($ = n2).parentNode, et = $.nextSibling, nt = n2, ct = a2.group, dt = { target: Ht.dragged = $, clientX: (e2 || t2).clientX, clientY: (e2 || t2).clientY }, gt = dt.clientX - o2.left, mt = dt.clientY - o2.top, this._lastX = (e2 || t2).clientX, this._lastY = (e2 || t2).clientY, $.style["will-change"] = "all", o2 = function() {
          q("delayEnded", i2, { evt: t2 }), Ht.eventCanceled ? i2._onDrop() : (i2._disableDelayedDragEvents(), !c && i2.nativeDraggable && ($.draggable = true), i2._triggerDragStart(t2, e2), Z({ sortable: i2, name: "choose", originalEvent: t2 }), k($, a2.chosenClass, true));
        }, a2.ignore.split(",").forEach(function(t3) {
          E($, t3.trim(), Kt);
        }), f(l2, "dragover", Ft), f(l2, "mousemove", Ft), f(l2, "touchmove", Ft), a2.supportPointer ? (f(l2, "pointerup", i2._onDrop), this.nativeDraggable || f(l2, "pointercancel", i2._onDrop)) : (f(l2, "mouseup", i2._onDrop), f(l2, "touchend", i2._onDrop), f(l2, "touchcancel", i2._onDrop)), c && this.nativeDraggable && (this.options.touchStartThreshold = 4, $.draggable = true), q("delayStart", this, { evt: t2 }), !a2.delay || a2.delayOnTouchOnly && !e2 || this.nativeDraggable && (w || y) ? o2() : Ht.eventCanceled ? this._onDrop() : (a2.supportPointer ? (f(l2, "pointerup", i2._disableDelayedDrag), f(l2, "pointercancel", i2._disableDelayedDrag)) : (f(l2, "mouseup", i2._disableDelayedDrag), f(l2, "touchend", i2._disableDelayedDrag), f(l2, "touchcancel", i2._disableDelayedDrag)), f(l2, "mousemove", i2._delayedDragTouchMoveHandler), f(l2, "touchmove", i2._delayedDragTouchMoveHandler), a2.supportPointer && f(l2, "pointermove", i2._delayedDragTouchMoveHandler), i2._dragStartTimer = setTimeout(o2, a2.delay)));
      }, _delayedDragTouchMoveHandler: function(t2) {
        t2 = t2.touches ? t2.touches[0] : t2;
        Math.max(Math.abs(t2.clientX - this._lastX), Math.abs(t2.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
      }, _disableDelayedDrag: function() {
        $ && Kt($), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
      }, _disableDelayedDragEvents: function() {
        var t2 = this.el.ownerDocument;
        p(t2, "mouseup", this._disableDelayedDrag), p(t2, "touchend", this._disableDelayedDrag), p(t2, "touchcancel", this._disableDelayedDrag), p(t2, "pointerup", this._disableDelayedDrag), p(t2, "pointercancel", this._disableDelayedDrag), p(t2, "mousemove", this._delayedDragTouchMoveHandler), p(t2, "touchmove", this._delayedDragTouchMoveHandler), p(t2, "pointermove", this._delayedDragTouchMoveHandler);
      }, _triggerDragStart: function(t2, e2) {
        e2 = e2 || "touch" == t2.pointerType && t2, !this.nativeDraggable || e2 ? this.options.supportPointer ? f(document, "pointermove", this._onTouchMove) : f(document, e2 ? "touchmove" : "mousemove", this._onTouchMove) : (f($, "dragend", this), f(tt, "dragstart", this._onDragStart));
        try {
          document.selection ? zt(function() {
            document.selection.empty();
          }) : window.getSelection().removeAllRanges();
        } catch (t3) {
        }
      }, _dragStarted: function(t2, e2) {
        var n2;
        Et = false, tt && $ ? (q("dragStarted", this, { evt: e2 }), this.nativeDraggable && f(document, "dragover", jt), n2 = this.options, t2 || k($, n2.dragClass, false), k($, n2.ghostClass, true), Ht.active = this, t2 && this._appendGhost(), Z({ sortable: this, name: "start", originalEvent: e2 })) : this._nulling();
      }, _emulateDragOver: function() {
        if (ht) {
          this._lastX = ht.clientX, this._lastY = ht.clientY, Yt();
          for (var t2 = document.elementFromPoint(ht.clientX, ht.clientY), e2 = t2; t2 && t2.shadowRoot && (t2 = t2.shadowRoot.elementFromPoint(ht.clientX, ht.clientY)) !== e2; )
            e2 = t2;
          if ($.parentNode[K]._isOutsideThisEl(t2), e2)
            do {
              if (e2[K]) {
                if (e2[K]._onDragOver({ clientX: ht.clientX, clientY: ht.clientY, target: t2, rootEl: e2 }) && !this.options.dragoverBubble)
                  break;
              }
            } while (e2 = m(t2 = e2));
          Bt();
        }
      }, _onTouchMove: function(t2) {
        if (dt) {
          var e2 = this.options, n2 = e2.fallbackTolerance, o2 = e2.fallbackOffset, i2 = t2.touches ? t2.touches[0] : t2, r2 = J && D(J, true), a2 = J && r2 && r2.a, l2 = J && r2 && r2.d, e2 = Nt && Dt && S(Dt), a2 = (i2.clientX - dt.clientX + o2.x) / (a2 || 1) + (e2 ? e2[0] - xt[0] : 0) / (a2 || 1), l2 = (i2.clientY - dt.clientY + o2.y) / (l2 || 1) + (e2 ? e2[1] - xt[1] : 0) / (l2 || 1);
          if (!Ht.active && !Et) {
            if (n2 && Math.max(Math.abs(i2.clientX - this._lastX), Math.abs(i2.clientY - this._lastY)) < n2)
              return;
            this._onDragStart(t2, true);
          }
          J && (r2 ? (r2.e += a2 - (ft || 0), r2.f += l2 - (pt || 0)) : r2 = { a: 1, b: 0, c: 0, d: 1, e: a2, f: l2 }, r2 = "matrix(".concat(r2.a, ",").concat(r2.b, ",").concat(r2.c, ",").concat(r2.d, ",").concat(r2.e, ",").concat(r2.f, ")"), R(J, "webkitTransform", r2), R(J, "mozTransform", r2), R(J, "msTransform", r2), R(J, "transform", r2), ft = a2, pt = l2, ht = i2), t2.cancelable && t2.preventDefault();
        }
      }, _appendGhost: function() {
        if (!J) {
          var t2 = this.options.fallbackOnBody ? document.body : tt, e2 = X($, true, Nt, true, t2), n2 = this.options;
          if (Nt) {
            for (Dt = t2; "static" === R(Dt, "position") && "none" === R(Dt, "transform") && Dt !== document; )
              Dt = Dt.parentNode;
            Dt !== document.body && Dt !== document.documentElement ? (Dt === document && (Dt = O()), e2.top += Dt.scrollTop, e2.left += Dt.scrollLeft) : Dt = O(), xt = S(Dt);
          }
          k(J = $.cloneNode(true), n2.ghostClass, false), k(J, n2.fallbackClass, true), k(J, n2.dragClass, true), R(J, "transition", ""), R(J, "transform", ""), R(J, "box-sizing", "border-box"), R(J, "margin", 0), R(J, "top", e2.top), R(J, "left", e2.left), R(J, "width", e2.width), R(J, "height", e2.height), R(J, "opacity", "0.8"), R(J, "position", Nt ? "absolute" : "fixed"), R(J, "zIndex", "100000"), R(J, "pointerEvents", "none"), Ht.ghost = J, t2.appendChild(J), R(J, "transform-origin", gt / parseInt(J.style.width) * 100 + "% " + mt / parseInt(J.style.height) * 100 + "%");
        }
      }, _onDragStart: function(t2, e2) {
        var n2 = this, o2 = t2.dataTransfer, i2 = n2.options;
        q("dragStart", this, { evt: t2 }), Ht.eventCanceled ? this._onDrop() : (q("setupClone", this), Ht.eventCanceled || ((ot = T($)).removeAttribute("id"), ot.draggable = false, ot.style["will-change"] = "", this._hideClone(), k(ot, this.options.chosenClass, false), Ht.clone = ot), n2.cloneId = zt(function() {
          q("clone", n2), Ht.eventCanceled || (n2.options.removeCloneOnHide || tt.insertBefore(ot, $), n2._hideClone(), Z({ sortable: n2, name: "clone" }));
        }), e2 || k($, i2.dragClass, true), e2 ? (St = true, n2._loopId = setInterval(n2._emulateDragOver, 50)) : (p(document, "mouseup", n2._onDrop), p(document, "touchend", n2._onDrop), p(document, "touchcancel", n2._onDrop), o2 && (o2.effectAllowed = "move", i2.setData && i2.setData.call(n2, o2, $)), f(document, "drop", n2), R($, "transform", "translateZ(0)")), Et = true, n2._dragStartId = zt(n2._dragStarted.bind(n2, e2, t2)), f(document, "selectstart", n2), vt = true, window.getSelection().removeAllRanges(), u && R(document.body, "user-select", "none"));
      }, _onDragOver: function(n2) {
        var o2, i2, r2, t2, e2, a2 = this.el, l2 = n2.target, s2 = this.options, c2 = s2.group, u2 = Ht.active, d2 = ct === c2, h2 = s2.sort, f2 = ut || u2, p2 = this, g2 = false;
        if (!Ot) {
          if (void 0 !== n2.preventDefault && n2.cancelable && n2.preventDefault(), l2 = P(l2, s2.draggable, a2, true), O2("dragOver"), Ht.eventCanceled)
            return g2;
          if ($.contains(n2.target) || l2.animated && l2.animatingX && l2.animatingY || p2._ignoreWhileAnimating === l2)
            return A2(false);
          if (St = false, u2 && !s2.disabled && (d2 ? h2 || (i2 = Q !== tt) : ut === this || (this.lastPutMode = ct.checkPull(this, u2, $, n2)) && c2.checkPut(this, u2, $, n2))) {
            if (r2 = "vertical" === this._getDirection(n2, l2), o2 = X($), O2("dragOverValid"), Ht.eventCanceled)
              return g2;
            if (i2)
              return Q = tt, M2(), this._hideClone(), O2("revert"), Ht.eventCanceled || (et ? tt.insertBefore($, et) : tt.appendChild($)), A2(true);
            var m2 = F(a2, s2.draggable);
            if (m2 && (S2 = n2, c2 = r2, x2 = X(F((E2 = this).el, E2.options.draggable)), E2 = L(E2.el, E2.options, J), !(c2 ? S2.clientX > E2.right + 10 || S2.clientY > x2.bottom && S2.clientX > x2.left : S2.clientY > E2.bottom + 10 || S2.clientX > x2.right && S2.clientY > x2.top) || m2.animated)) {
              if (m2 && (t2 = n2, e2 = r2, C2 = X(B((_2 = this).el, 0, _2.options, true)), _2 = L(_2.el, _2.options, J), e2 ? t2.clientX < _2.left - 10 || t2.clientY < C2.top && t2.clientX < C2.right : t2.clientY < _2.top - 10 || t2.clientY < C2.bottom && t2.clientX < C2.left)) {
                var v2 = B(a2, 0, s2, true);
                if (v2 === $)
                  return A2(false);
                if (D2 = X(l2 = v2), false !== Lt(tt, a2, $, o2, l2, D2, n2, false))
                  return M2(), a2.insertBefore($, v2), Q = a2, N2(), A2(true);
              } else if (l2.parentNode === a2) {
                var b2, y2, w2, D2 = X(l2), E2 = $.parentNode !== a2, S2 = (S2 = $.animated && $.toRect || o2, x2 = l2.animated && l2.toRect || D2, _2 = (e2 = r2) ? S2.left : S2.top, t2 = e2 ? S2.right : S2.bottom, C2 = e2 ? S2.width : S2.height, v2 = e2 ? x2.left : x2.top, S2 = e2 ? x2.right : x2.bottom, x2 = e2 ? x2.width : x2.height, !(_2 === v2 || t2 === S2 || _2 + C2 / 2 === v2 + x2 / 2)), _2 = r2 ? "top" : "left", C2 = Y(l2, "top", "top") || Y($, "top", "top"), v2 = C2 ? C2.scrollTop : void 0;
                if (bt !== l2 && (y2 = D2[_2], Ct = false, Tt = !S2 && s2.invertSwap || E2), 0 !== (b2 = function(t3, e3, n3, o3, i3, r3, a3, l3) {
                  var s3 = o3 ? t3.clientY : t3.clientX, c3 = o3 ? n3.height : n3.width, t3 = o3 ? n3.top : n3.left, o3 = o3 ? n3.bottom : n3.right, n3 = false;
                  if (!a3) {
                    if (l3 && wt < c3 * i3) {
                      if (Ct = !Ct && (1 === yt ? t3 + c3 * r3 / 2 < s3 : s3 < o3 - c3 * r3 / 2) ? true : Ct)
                        n3 = true;
                      else if (1 === yt ? s3 < t3 + wt : o3 - wt < s3)
                        return -yt;
                    } else if (t3 + c3 * (1 - i3) / 2 < s3 && s3 < o3 - c3 * (1 - i3) / 2)
                      return function(t4) {
                        return j($) < j(t4) ? 1 : -1;
                      }(e3);
                  }
                  if ((n3 = n3 || a3) && (s3 < t3 + c3 * r3 / 2 || o3 - c3 * r3 / 2 < s3))
                    return t3 + c3 / 2 < s3 ? 1 : -1;
                  return 0;
                }(n2, l2, D2, r2, S2 ? 1 : s2.swapThreshold, null == s2.invertedSwapThreshold ? s2.swapThreshold : s2.invertedSwapThreshold, Tt, bt === l2)))
                  for (var T2 = j($); (w2 = Q.children[T2 -= b2]) && ("none" === R(w2, "display") || w2 === J); )
                    ;
                if (0 === b2 || w2 === l2)
                  return A2(false);
                yt = b2;
                var x2 = (bt = l2).nextElementSibling, E2 = false, S2 = Lt(tt, a2, $, o2, l2, D2, n2, E2 = 1 === b2);
                if (false !== S2)
                  return 1 !== S2 && -1 !== S2 || (E2 = 1 === S2), Ot = true, setTimeout(Wt, 30), M2(), E2 && !x2 ? a2.appendChild($) : l2.parentNode.insertBefore($, E2 ? x2 : l2), C2 && H(C2, 0, v2 - C2.scrollTop), Q = $.parentNode, void 0 === y2 || Tt || (wt = Math.abs(y2 - X(l2)[_2])), N2(), A2(true);
              }
            } else {
              if (m2 === $)
                return A2(false);
              if ((l2 = m2 && a2 === n2.target ? m2 : l2) && (D2 = X(l2)), false !== Lt(tt, a2, $, o2, l2, D2, n2, !!l2))
                return M2(), m2 && m2.nextSibling ? a2.insertBefore($, m2.nextSibling) : a2.appendChild($), Q = a2, N2(), A2(true);
            }
            if (a2.contains($))
              return A2(false);
          }
          return false;
        }
        function O2(t3, e3) {
          q(t3, p2, I({ evt: n2, isOwner: d2, axis: r2 ? "vertical" : "horizontal", revert: i2, dragRect: o2, targetRect: D2, canSort: h2, fromSortable: f2, target: l2, completed: A2, onMove: function(t4, e4) {
            return Lt(tt, a2, $, o2, t4, X(t4), n2, e4);
          }, changed: N2 }, e3));
        }
        function M2() {
          O2("dragOverAnimationCapture"), p2.captureAnimationState(), p2 !== f2 && f2.captureAnimationState();
        }
        function A2(t3) {
          return O2("dragOverCompleted", { insertion: t3 }), t3 && (d2 ? u2._hideClone() : u2._showClone(p2), p2 !== f2 && (k($, (ut || u2).options.ghostClass, false), k($, s2.ghostClass, true)), ut !== p2 && p2 !== Ht.active ? ut = p2 : p2 === Ht.active && ut && (ut = null), f2 === p2 && (p2._ignoreWhileAnimating = l2), p2.animateAll(function() {
            O2("dragOverAnimationComplete"), p2._ignoreWhileAnimating = null;
          }), p2 !== f2 && (f2.animateAll(), f2._ignoreWhileAnimating = null)), (l2 === $ && !$.animated || l2 === a2 && !l2.animated) && (bt = null), s2.dragoverBubble || n2.rootEl || l2 === document || ($.parentNode[K]._isOutsideThisEl(n2.target), t3 || Ft(n2)), !s2.dragoverBubble && n2.stopPropagation && n2.stopPropagation(), g2 = true;
        }
        function N2() {
          at = j($), st = j($, s2.draggable), Z({ sortable: p2, name: "change", toEl: a2, newIndex: at, newDraggableIndex: st, originalEvent: n2 });
        }
      }, _ignoreWhileAnimating: null, _offMoveEvents: function() {
        p(document, "mousemove", this._onTouchMove), p(document, "touchmove", this._onTouchMove), p(document, "pointermove", this._onTouchMove), p(document, "dragover", Ft), p(document, "mousemove", Ft), p(document, "touchmove", Ft);
      }, _offUpEvents: function() {
        var t2 = this.el.ownerDocument;
        p(t2, "mouseup", this._onDrop), p(t2, "touchend", this._onDrop), p(t2, "pointerup", this._onDrop), p(t2, "pointercancel", this._onDrop), p(t2, "touchcancel", this._onDrop), p(document, "selectstart", this);
      }, _onDrop: function(t2) {
        var e2 = this.el, n2 = this.options;
        at = j($), st = j($, n2.draggable), q("drop", this, { evt: t2 }), Q = $ && $.parentNode, at = j($), st = j($, n2.draggable), Ht.eventCanceled || (Ct = Tt = Et = false, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Gt(this.cloneId), Gt(this._dragStartId), this.nativeDraggable && (p(document, "drop", this), p(e2, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), u && R(document.body, "user-select", ""), R($, "transform", ""), t2 && (vt && (t2.cancelable && t2.preventDefault(), n2.dropBubble || t2.stopPropagation()), J && J.parentNode && J.parentNode.removeChild(J), (tt === Q || ut && "clone" !== ut.lastPutMode) && ot && ot.parentNode && ot.parentNode.removeChild(ot), $ && (this.nativeDraggable && p($, "dragend", this), Kt($), $.style["will-change"] = "", vt && !Et && k($, (ut || this).options.ghostClass, false), k($, this.options.chosenClass, false), Z({ sortable: this, name: "unchoose", toEl: Q, newIndex: null, newDraggableIndex: null, originalEvent: t2 }), tt !== Q ? (0 <= at && (Z({ rootEl: Q, name: "add", toEl: Q, fromEl: tt, originalEvent: t2 }), Z({ sortable: this, name: "remove", toEl: Q, originalEvent: t2 }), Z({ rootEl: Q, name: "sort", toEl: Q, fromEl: tt, originalEvent: t2 }), Z({ sortable: this, name: "sort", toEl: Q, originalEvent: t2 })), ut && ut.save()) : at !== rt && 0 <= at && (Z({ sortable: this, name: "update", toEl: Q, originalEvent: t2 }), Z({ sortable: this, name: "sort", toEl: Q, originalEvent: t2 })), Ht.active && (null != at && -1 !== at || (at = rt, st = lt), Z({ sortable: this, name: "end", toEl: Q, originalEvent: t2 }), this.save())))), this._nulling();
      }, _nulling: function() {
        q("nulling", this), tt = $ = Q = J = et = ot = nt = it = dt = ht = vt = at = st = rt = lt = bt = yt = ut = ct = Ht.dragged = Ht.ghost = Ht.clone = Ht.active = null;
        var e2 = this.el;
        Mt.forEach(function(t2) {
          e2.contains(t2) && (t2.checked = true);
        }), Mt.length = ft = pt = 0;
      }, handleEvent: function(t2) {
        switch (t2.type) {
          case "drop":
          case "dragend":
            this._onDrop(t2);
            break;
          case "dragenter":
          case "dragover":
            $ && (this._onDragOver(t2), function(t3) {
              t3.dataTransfer && (t3.dataTransfer.dropEffect = "move");
              t3.cancelable && t3.preventDefault();
            }(t2));
            break;
          case "selectstart":
            t2.preventDefault();
        }
      }, toArray: function() {
        for (var t2, e2 = [], n2 = this.el.children, o2 = 0, i2 = n2.length, r2 = this.options; o2 < i2; o2++)
          P(t2 = n2[o2], r2.draggable, this.el, false) && e2.push(t2.getAttribute(r2.dataIdAttr) || function(t3) {
            var e3 = t3.tagName + t3.className + t3.src + t3.href + t3.textContent, n3 = e3.length, o3 = 0;
            for (; n3--; )
              o3 += e3.charCodeAt(n3);
            return o3.toString(36);
          }(t2));
        return e2;
      }, sort: function(t2, e2) {
        var n2 = {}, o2 = this.el;
        this.toArray().forEach(function(t3, e3) {
          e3 = o2.children[e3];
          P(e3, this.options.draggable, o2, false) && (n2[t3] = e3);
        }, this), e2 && this.captureAnimationState(), t2.forEach(function(t3) {
          n2[t3] && (o2.removeChild(n2[t3]), o2.appendChild(n2[t3]));
        }), e2 && this.animateAll();
      }, save: function() {
        var t2 = this.options.store;
        t2 && t2.set && t2.set(this);
      }, closest: function(t2, e2) {
        return P(t2, e2 || this.options.draggable, this.el, false);
      }, option: function(t2, e2) {
        var n2 = this.options;
        if (void 0 === e2)
          return n2[t2];
        var o2 = G.modifyOption(this, t2, e2);
        n2[t2] = void 0 !== o2 ? o2 : e2, "group" === t2 && Xt(n2);
      }, destroy: function() {
        q("destroy", this);
        var t2 = this.el;
        t2[K] = null, p(t2, "mousedown", this._onTapStart), p(t2, "touchstart", this._onTapStart), p(t2, "pointerdown", this._onTapStart), this.nativeDraggable && (p(t2, "dragover", this), p(t2, "dragenter", this)), Array.prototype.forEach.call(t2.querySelectorAll("[draggable]"), function(t3) {
          t3.removeAttribute("draggable");
        }), this._onDrop(), this._disableDelayedDragEvents(), _t.splice(_t.indexOf(this.el), 1), this.el = t2 = null;
      }, _hideClone: function() {
        it || (q("hideClone", this), Ht.eventCanceled || (R(ot, "display", "none"), this.options.removeCloneOnHide && ot.parentNode && ot.parentNode.removeChild(ot), it = true));
      }, _showClone: function(t2) {
        "clone" === t2.lastPutMode ? it && (q("showClone", this), Ht.eventCanceled || ($.parentNode != tt || this.options.group.revertClone ? et ? tt.insertBefore(ot, et) : tt.appendChild(ot) : tt.insertBefore(ot, $), this.options.group.revertClone && this.animate($, ot), R(ot, "display", ""), it = false)) : this._hideClone();
      } }, At && f(document, "touchmove", function(t2) {
        (Ht.active || Et) && t2.cancelable && t2.preventDefault();
      }), Ht.utils = { on: f, off: p, css: R, find: E, is: function(t2, e2) {
        return !!P(t2, e2, t2, false);
      }, extend: function(t2, e2) {
        if (t2 && e2)
          for (var n2 in e2)
            e2.hasOwnProperty(n2) && (t2[n2] = e2[n2]);
        return t2;
      }, throttle: C, closest: P, toggleClass: k, clone: T, index: j, nextTick: zt, cancelNextTick: Gt, detectDirection: Rt, getChild: B, expando: K }, Ht.get = function(t2) {
        return t2[K];
      }, Ht.mount = function() {
        for (var t2 = arguments.length, e2 = new Array(t2), n2 = 0; n2 < t2; n2++)
          e2[n2] = arguments[n2];
        (e2 = e2[0].constructor === Array ? e2[0] : e2).forEach(function(t3) {
          if (!t3.prototype || !t3.prototype.constructor)
            throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t3));
          t3.utils && (Ht.utils = I(I({}, Ht.utils), t3.utils)), G.mount(t3);
        });
      }, Ht.create = function(t2, e2) {
        return new Ht(t2, e2);
      };
      var Ut, qt, Vt, Zt, $t, Qt, Jt = [], te = !(Ht.version = "1.15.7");
      function ee() {
        Jt.forEach(function(t2) {
          clearInterval(t2.pid);
        }), Jt = [];
      }
      function ne() {
        clearInterval(Qt);
      }
      var oe, ie = C(function(n2, t2, e2, o2) {
        if (t2.scroll) {
          var i2, r2 = (n2.touches ? n2.touches[0] : n2).clientX, a2 = (n2.touches ? n2.touches[0] : n2).clientY, l2 = t2.scrollSensitivity, s2 = t2.scrollSpeed, c2 = O(), u2 = false;
          qt !== e2 && (qt = e2, ee(), Ut = t2.scroll, i2 = t2.scrollFn, true === Ut && (Ut = M(e2, true)));
          var d2 = 0, h2 = Ut;
          do {
            var f2 = h2, p2 = X(f2), g2 = p2.top, m2 = p2.bottom, v2 = p2.left, b2 = p2.right, y2 = p2.width, w2 = p2.height, D2 = void 0, E2 = void 0, S2 = f2.scrollWidth, _2 = f2.scrollHeight, C2 = R(f2), T2 = f2.scrollLeft, p2 = f2.scrollTop, E2 = f2 === c2 ? (D2 = y2 < S2 && ("auto" === C2.overflowX || "scroll" === C2.overflowX || "visible" === C2.overflowX), w2 < _2 && ("auto" === C2.overflowY || "scroll" === C2.overflowY || "visible" === C2.overflowY)) : (D2 = y2 < S2 && ("auto" === C2.overflowX || "scroll" === C2.overflowX), w2 < _2 && ("auto" === C2.overflowY || "scroll" === C2.overflowY)), T2 = D2 && (Math.abs(b2 - r2) <= l2 && T2 + y2 < S2) - (Math.abs(v2 - r2) <= l2 && !!T2), p2 = E2 && (Math.abs(m2 - a2) <= l2 && p2 + w2 < _2) - (Math.abs(g2 - a2) <= l2 && !!p2);
            if (!Jt[d2])
              for (var x2 = 0; x2 <= d2; x2++)
                Jt[x2] || (Jt[x2] = {});
            Jt[d2].vx == T2 && Jt[d2].vy == p2 && Jt[d2].el === f2 || (Jt[d2].el = f2, Jt[d2].vx = T2, Jt[d2].vy = p2, clearInterval(Jt[d2].pid), 0 == T2 && 0 == p2 || (u2 = true, Jt[d2].pid = setInterval(function() {
              o2 && 0 === this.layer && Ht.active._onTouchMove($t);
              var t3 = Jt[this.layer].vy ? Jt[this.layer].vy * s2 : 0, e3 = Jt[this.layer].vx ? Jt[this.layer].vx * s2 : 0;
              "function" == typeof i2 && "continue" !== i2.call(Ht.dragged.parentNode[K], e3, t3, n2, $t, Jt[this.layer].el) || H(Jt[this.layer].el, e3, t3);
            }.bind({ layer: d2 }), 24))), d2++;
          } while (t2.bubbleScroll && h2 !== c2 && (h2 = M(h2, false)));
          te = u2;
        }
      }, 30), n = function(t2) {
        var e2 = t2.originalEvent, n2 = t2.putSortable, o2 = t2.dragEl, i2 = t2.activeSortable, r2 = t2.dispatchSortableEvent, a2 = t2.hideGhostForTarget, t2 = t2.unhideGhostForTarget;
        e2 && (i2 = n2 || i2, a2(), e2 = e2.changedTouches && e2.changedTouches.length ? e2.changedTouches[0] : e2, e2 = document.elementFromPoint(e2.clientX, e2.clientY), t2(), i2 && !i2.el.contains(e2) && (r2("spill"), this.onSpill({ dragEl: o2, putSortable: n2 })));
      };
      function re() {
      }
      function ae() {
      }
      re.prototype = { startIndex: null, dragStart: function(t2) {
        t2 = t2.oldDraggableIndex;
        this.startIndex = t2;
      }, onSpill: function(t2) {
        var e2 = t2.dragEl, n2 = t2.putSortable;
        this.sortable.captureAnimationState(), n2 && n2.captureAnimationState();
        t2 = B(this.sortable.el, this.startIndex, this.options);
        t2 ? this.sortable.el.insertBefore(e2, t2) : this.sortable.el.appendChild(e2), this.sortable.animateAll(), n2 && n2.animateAll();
      }, drop: n }, a(re, { pluginName: "revertOnSpill" }), ae.prototype = { onSpill: function(t2) {
        var e2 = t2.dragEl, t2 = t2.putSortable || this.sortable;
        t2.captureAnimationState(), e2.parentNode && e2.parentNode.removeChild(e2), t2.animateAll();
      }, drop: n }, a(ae, { pluginName: "removeOnSpill" });
      var le, se, ce, ue, de, he = [], fe = [], pe = false, ge = false, me = false;
      function ve(n2, o2) {
        fe.forEach(function(t2, e2) {
          e2 = o2.children[t2.sortableIndex + (n2 ? Number(e2) : 0)];
          e2 ? o2.insertBefore(t2, e2) : o2.appendChild(t2);
        });
      }
      function be() {
        he.forEach(function(t2) {
          t2 !== ce && t2.parentNode && t2.parentNode.removeChild(t2);
        });
      }
      return Ht.mount(new function() {
        function t2() {
          for (var t3 in this.defaults = { scroll: true, forceAutoScrollFallback: false, scrollSensitivity: 30, scrollSpeed: 10, bubbleScroll: true }, this)
            "_" === t3.charAt(0) && "function" == typeof this[t3] && (this[t3] = this[t3].bind(this));
        }
        return t2.prototype = { dragStarted: function(t3) {
          t3 = t3.originalEvent;
          this.sortable.nativeDraggable ? f(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? f(document, "pointermove", this._handleFallbackAutoScroll) : t3.touches ? f(document, "touchmove", this._handleFallbackAutoScroll) : f(document, "mousemove", this._handleFallbackAutoScroll);
        }, dragOverCompleted: function(t3) {
          t3 = t3.originalEvent;
          this.options.dragOverBubble || t3.rootEl || this._handleAutoScroll(t3);
        }, drop: function() {
          this.sortable.nativeDraggable ? p(document, "dragover", this._handleAutoScroll) : (p(document, "pointermove", this._handleFallbackAutoScroll), p(document, "touchmove", this._handleFallbackAutoScroll), p(document, "mousemove", this._handleFallbackAutoScroll)), ne(), ee(), clearTimeout(v), v = void 0;
        }, nulling: function() {
          $t = qt = Ut = te = Qt = Vt = Zt = null, Jt.length = 0;
        }, _handleFallbackAutoScroll: function(t3) {
          this._handleAutoScroll(t3, true);
        }, _handleAutoScroll: function(e2, n2) {
          var o2, i2 = this, r2 = (e2.touches ? e2.touches[0] : e2).clientX, a2 = (e2.touches ? e2.touches[0] : e2).clientY, t3 = document.elementFromPoint(r2, a2);
          $t = e2, n2 || this.options.forceAutoScrollFallback || w || y || u ? (ie(e2, this.options, t3, n2), o2 = M(t3, true), !te || Qt && r2 === Vt && a2 === Zt || (Qt && ne(), Qt = setInterval(function() {
            var t4 = M(document.elementFromPoint(r2, a2), true);
            t4 !== o2 && (o2 = t4, ee()), ie(e2, i2.options, t4, n2);
          }, 10), Vt = r2, Zt = a2)) : this.options.bubbleScroll && M(t3, true) !== O() ? ie(e2, this.options, M(t3, false), false) : ee();
        } }, a(t2, { pluginName: "scroll", initializeByDefault: true });
      }()), Ht.mount(ae, re), Ht.mount(new function() {
        function t2() {
          this.defaults = { swapClass: "sortable-swap-highlight" };
        }
        return t2.prototype = { dragStart: function(t3) {
          t3 = t3.dragEl;
          oe = t3;
        }, dragOverValid: function(t3) {
          var e2 = t3.completed, n2 = t3.target, o2 = t3.onMove, i2 = t3.activeSortable, r2 = t3.changed, a2 = t3.cancel;
          i2.options.swap && (t3 = this.sortable.el, i2 = this.options, n2 && n2 !== t3 && (t3 = oe, oe = false !== o2(n2) ? (k(n2, i2.swapClass, true), n2) : null, t3 && t3 !== oe && k(t3, i2.swapClass, false)), r2(), e2(true), a2());
        }, drop: function(t3) {
          var e2, n2, o2 = t3.activeSortable, i2 = t3.putSortable, r2 = t3.dragEl, a2 = i2 || this.sortable, l2 = this.options;
          oe && k(oe, l2.swapClass, false), oe && (l2.swap || i2 && i2.options.swap) && r2 !== oe && (a2.captureAnimationState(), a2 !== o2 && o2.captureAnimationState(), n2 = oe, t3 = (e2 = r2).parentNode, l2 = n2.parentNode, t3 && l2 && !t3.isEqualNode(n2) && !l2.isEqualNode(e2) && (i2 = j(e2), r2 = j(n2), t3.isEqualNode(l2) && i2 < r2 && r2++, t3.insertBefore(n2, t3.children[i2]), l2.insertBefore(e2, l2.children[r2])), a2.animateAll(), a2 !== o2 && o2.animateAll());
        }, nulling: function() {
          oe = null;
        } }, a(t2, { pluginName: "swap", eventProperties: function() {
          return { swapItem: oe };
        } });
      }()), Ht.mount(new function() {
        function t2(o2) {
          for (var t3 in this)
            "_" === t3.charAt(0) && "function" == typeof this[t3] && (this[t3] = this[t3].bind(this));
          o2.options.avoidImplicitDeselect || (o2.options.supportPointer ? f(document, "pointerup", this._deselectMultiDrag) : (f(document, "mouseup", this._deselectMultiDrag), f(document, "touchend", this._deselectMultiDrag))), f(document, "keydown", this._checkKeyDown), f(document, "keyup", this._checkKeyUp), this.defaults = { selectedClass: "sortable-selected", multiDragKey: null, avoidImplicitDeselect: false, setData: function(t4, e2) {
            var n2 = "";
            he.length && se === o2 ? he.forEach(function(t5, e3) {
              n2 += (e3 ? ", " : "") + t5.textContent;
            }) : n2 = e2.textContent, t4.setData("Text", n2);
          } };
        }
        return t2.prototype = { multiDragKeyDown: false, isMultiDrag: false, delayStartGlobal: function(t3) {
          t3 = t3.dragEl;
          ce = t3;
        }, delayEnded: function() {
          this.isMultiDrag = ~he.indexOf(ce);
        }, setupClone: function(t3) {
          var e2 = t3.sortable, t3 = t3.cancel;
          if (this.isMultiDrag) {
            for (var n2 = 0; n2 < he.length; n2++)
              fe.push(T(he[n2])), fe[n2].sortableIndex = he[n2].sortableIndex, fe[n2].draggable = false, fe[n2].style["will-change"] = "", k(fe[n2], this.options.selectedClass, false), he[n2] === ce && k(fe[n2], this.options.chosenClass, false);
            e2._hideClone(), t3();
          }
        }, clone: function(t3) {
          var e2 = t3.sortable, n2 = t3.rootEl, o2 = t3.dispatchSortableEvent, t3 = t3.cancel;
          this.isMultiDrag && (this.options.removeCloneOnHide || he.length && se === e2 && (ve(true, n2), o2("clone"), t3()));
        }, showClone: function(t3) {
          var e2 = t3.cloneNowShown, n2 = t3.rootEl, t3 = t3.cancel;
          this.isMultiDrag && (ve(false, n2), fe.forEach(function(t4) {
            R(t4, "display", "");
          }), e2(), de = false, t3());
        }, hideClone: function(t3) {
          var e2 = this, n2 = (t3.sortable, t3.cloneNowHidden), t3 = t3.cancel;
          this.isMultiDrag && (fe.forEach(function(t4) {
            R(t4, "display", "none"), e2.options.removeCloneOnHide && t4.parentNode && t4.parentNode.removeChild(t4);
          }), n2(), de = true, t3());
        }, dragStartGlobal: function(t3) {
          t3.sortable;
          !this.isMultiDrag && se && se.multiDrag._deselectMultiDrag(), he.forEach(function(t4) {
            t4.sortableIndex = j(t4);
          }), he = he.sort(function(t4, e2) {
            return t4.sortableIndex - e2.sortableIndex;
          }), me = true;
        }, dragStarted: function(t3) {
          var e2, n2 = this, t3 = t3.sortable;
          this.isMultiDrag && (this.options.sort && (t3.captureAnimationState(), this.options.animation && (he.forEach(function(t4) {
            t4 !== ce && R(t4, "position", "absolute");
          }), e2 = X(ce, false, true, true), he.forEach(function(t4) {
            t4 !== ce && x(t4, e2);
          }), pe = ge = true)), t3.animateAll(function() {
            pe = ge = false, n2.options.animation && he.forEach(function(t4) {
              A(t4);
            }), n2.options.sort && be();
          }));
        }, dragOver: function(t3) {
          var e2 = t3.target, n2 = t3.completed, t3 = t3.cancel;
          ge && ~he.indexOf(e2) && (n2(false), t3());
        }, revert: function(t3) {
          var n2, o2, e2 = t3.fromSortable, i2 = t3.rootEl, r2 = t3.sortable, a2 = t3.dragRect;
          1 < he.length && (he.forEach(function(t4) {
            r2.addAnimationState({ target: t4, rect: ge ? X(t4) : a2 }), A(t4), t4.fromRect = a2, e2.removeAnimationState(t4);
          }), ge = false, n2 = !this.options.removeCloneOnHide, o2 = i2, he.forEach(function(t4, e3) {
            e3 = o2.children[t4.sortableIndex + (n2 ? Number(e3) : 0)];
            e3 ? o2.insertBefore(t4, e3) : o2.appendChild(t4);
          }));
        }, dragOverCompleted: function(t3) {
          var e2, n2 = t3.sortable, o2 = t3.isOwner, i2 = t3.insertion, r2 = t3.activeSortable, a2 = t3.parentEl, l2 = t3.putSortable, t3 = this.options;
          i2 && (o2 && r2._hideClone(), pe = false, t3.animation && 1 < he.length && (ge || !o2 && !r2.options.sort && !l2) && (e2 = X(ce, false, true, true), he.forEach(function(t4) {
            t4 !== ce && (x(t4, e2), a2.appendChild(t4));
          }), ge = true), o2 || (ge || be(), 1 < he.length ? (o2 = de, r2._showClone(n2), r2.options.animation && !de && o2 && fe.forEach(function(t4) {
            r2.addAnimationState({ target: t4, rect: ue }), t4.fromRect = ue, t4.thisAnimationDuration = null;
          })) : r2._showClone(n2)));
        }, dragOverAnimationCapture: function(t3) {
          var e2 = t3.dragRect, n2 = t3.isOwner, t3 = t3.activeSortable;
          he.forEach(function(t4) {
            t4.thisAnimationDuration = null;
          }), t3.options.animation && !n2 && t3.multiDrag.isMultiDrag && (ue = a({}, e2), e2 = D(ce, true), ue.top -= e2.f, ue.left -= e2.e);
        }, dragOverAnimationComplete: function() {
          ge && (ge = false, be());
        }, drop: function(t3) {
          var o2, i2, r2, a2, n2, e2, l2, s2 = t3.originalEvent, c2 = t3.rootEl, u2 = t3.parentEl, d2 = t3.sortable, h2 = t3.dispatchSortableEvent, f2 = t3.oldIndex, t3 = t3.putSortable, p2 = t3 || this.sortable;
          s2 && (o2 = this.options, i2 = u2.children, me || (o2.multiDragKey && !this.multiDragKeyDown && this._deselectMultiDrag(), k(ce, o2.selectedClass, !~he.indexOf(ce)), ~he.indexOf(ce) ? (he.splice(he.indexOf(ce), 1), le = null, U({ sortable: d2, rootEl: c2, name: "deselect", targetEl: ce, originalEvent: s2 })) : (he.push(ce), U({ sortable: d2, rootEl: c2, name: "select", targetEl: ce, originalEvent: s2 }), s2.shiftKey && le && d2.el.contains(le) ? (r2 = j(le), a2 = j(ce), ~r2 && ~a2 && r2 !== a2 && function() {
            for (var e3, t4 = r2 < a2 ? (e3 = r2, a2) : (e3 = a2, r2 + 1), n3 = o2.filter; e3 < t4; e3++)
              ~he.indexOf(i2[e3]) || P(i2[e3], o2.draggable, u2, false) && (n3 && ("function" == typeof n3 ? n3.call(d2, s2, i2[e3], d2) : n3.split(",").some(function(t5) {
                return P(i2[e3], t5.trim(), u2, false);
              })) || (k(i2[e3], o2.selectedClass, true), he.push(i2[e3]), U({ sortable: d2, rootEl: c2, name: "select", targetEl: i2[e3], originalEvent: s2 })));
          }()) : le = ce, se = p2)), me && this.isMultiDrag && (ge = false, (u2[K].options.sort || u2 !== c2) && 1 < he.length && (n2 = X(ce), e2 = j(ce, ":not(." + this.options.selectedClass + ")"), !pe && o2.animation && (ce.thisAnimationDuration = null), p2.captureAnimationState(), pe || (o2.animation && (ce.fromRect = n2, he.forEach(function(t4) {
            var e3;
            t4.thisAnimationDuration = null, t4 !== ce && (e3 = ge ? X(t4) : n2, t4.fromRect = e3, p2.addAnimationState({ target: t4, rect: e3 }));
          })), be(), he.forEach(function(t4) {
            i2[e2] ? u2.insertBefore(t4, i2[e2]) : u2.appendChild(t4), e2++;
          }), f2 === j(ce) && (l2 = false, he.forEach(function(t4) {
            t4.sortableIndex !== j(t4) && (l2 = true);
          }), l2 && (h2("update"), h2("sort")))), he.forEach(function(t4) {
            A(t4);
          }), p2.animateAll()), se = p2), (c2 === u2 || t3 && "clone" !== t3.lastPutMode) && fe.forEach(function(t4) {
            t4.parentNode && t4.parentNode.removeChild(t4);
          }));
        }, nullingGlobal: function() {
          this.isMultiDrag = me = false, fe.length = 0;
        }, destroyGlobal: function() {
          this._deselectMultiDrag(), p(document, "pointerup", this._deselectMultiDrag), p(document, "mouseup", this._deselectMultiDrag), p(document, "touchend", this._deselectMultiDrag), p(document, "keydown", this._checkKeyDown), p(document, "keyup", this._checkKeyUp);
        }, _deselectMultiDrag: function(t3) {
          if (!(void 0 !== me && me || se !== this.sortable || t3 && P(t3.target, this.options.draggable, this.sortable.el, false) || t3 && 0 !== t3.button))
            for (; he.length; ) {
              var e2 = he[0];
              k(e2, this.options.selectedClass, false), he.shift(), U({ sortable: this.sortable, rootEl: this.sortable.el, name: "deselect", targetEl: e2, originalEvent: t3 });
            }
        }, _checkKeyDown: function(t3) {
          t3.key === this.options.multiDragKey && (this.multiDragKeyDown = true);
        }, _checkKeyUp: function(t3) {
          t3.key === this.options.multiDragKey && (this.multiDragKeyDown = false);
        } }, a(t2, { pluginName: "multiDrag", utils: { select: function(t3) {
          var e2 = t3.parentNode[K];
          e2 && e2.options.multiDrag && !~he.indexOf(t3) && (se && se !== e2 && (se.multiDrag._deselectMultiDrag(), se = e2), k(t3, e2.options.selectedClass, true), he.push(t3));
        }, deselect: function(t3) {
          var e2 = t3.parentNode[K], n2 = he.indexOf(t3);
          e2 && e2.options.multiDrag && ~n2 && (k(t3, e2.options.selectedClass, false), he.splice(n2, 1));
        } }, eventProperties: function() {
          var n2 = this, o2 = [], i2 = [];
          return he.forEach(function(t3) {
            var e2;
            o2.push({ multiDragElement: t3, index: t3.sortableIndex }), e2 = ge && t3 !== ce ? -1 : ge ? j(t3, ":not(." + n2.options.selectedClass + ")") : j(t3), i2.push({ multiDragElement: t3, index: e2 });
          }), { items: e(he), clones: [].concat(fe), oldIndicies: o2, newIndicies: i2 };
        }, optionListeners: { multiDragKey: function(t3) {
          return "ctrl" === (t3 = t3.toLowerCase()) ? t3 = "Control" : 1 < t3.length && (t3 = t3.charAt(0).toUpperCase() + t3.substr(1)), t3;
        } } });
      }()), Ht;
    });
  }
});

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => UniversalDragAndDrop
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var import_sortablejs = __toESM(require_Sortable_min());
var UniversalDragAndDrop = class extends import_obsidian.Plugin {
  async onload() {
    console.log("Universal Drag and Drop geladen");
    this.registerEvent(
      this.app.workspace.on("layout-change", () => this.setupDragAndDrop())
    );
    this.registerEvent(
      this.app.workspace.on("active-leaf-change", () => this.setupDragAndDrop())
    );
  }
  setupDragAndDrop() {
    const activeView = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
    if (!activeView)
      return;
    const editorEl = activeView.contentEl.querySelector(".cm-content");
    if (!editorEl || editorEl.classList.contains("sjs-enabled"))
      return;
    editorEl.classList.add("sjs-enabled");
    import_sortablejs.default.create(editorEl, {
      animation: 150,
      draggable: ".cm-line",
      // Elke regel in de editor is nu een 'item'
      scroll: true,
      bubbleScroll: true,
      // Delay voor mobiel zodat scrollen nog mogelijk is
      delay: 150,
      delayOnTouchOnly: true,
      touchStartThreshold: 5,
      onEnd: async (evt) => {
        const { oldIndex, newIndex } = evt;
        if (oldIndex === newIndex || oldIndex === void 0 || newIndex === void 0)
          return;
        await this.reorderFile(activeView, oldIndex, newIndex);
      }
    });
  }
  async reorderFile(view, from, to) {
    const file = view.file;
    if (!file)
      return;
    const content = await this.app.vault.read(file);
    const lines = content.split("\n");
    const [movedLine] = lines.splice(from, 1);
    lines.splice(to, 0, movedLine);
    await this.app.vault.modify(file, lines.join("\n"));
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
/*! Bundled license information:

sortablejs/Sortable.min.js:
  (*! Sortable 1.15.7 - MIT | git://github.com/SortableJS/Sortable.git *)
*/
