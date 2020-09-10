define(['react', '@grafana/ui', '@grafana/data'], function (e, t, n) {
  return (function (e) {
    var t = {};
    function n(i) {
      if (t[i]) return t[i].exports;
      var a = (t[i] = { i: i, l: !1, exports: {} });
      return e[i].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
      }),
      (n.r = function (e) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if ((n.r(i), Object.defineProperty(i, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
          for (var a in e)
            n.d(
              i,
              a,
              function (t) {
                return e[t];
              }.bind(null, a)
            );
        return i;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = '/'),
      n((n.s = 11))
    );
  })([
    function (t, n) {
      t.exports = e;
    },
    function (e, n) {
      e.exports = t;
    },
    function (e) {
      e.exports = {
        objectVisibility: {
          decalCenterPointTextRegion: 'Shift the center point of the text region',
          decalCenterBubble: 'Shift the point or center of a tooltip',
          forceCalqueLevel: 'Force a specific layer level',
          forceCourbSpecificLink: 'Force a specific link curvature',
          calcLevel: 'Layer level',
          courbure: 'Curvature',
        },
        basics: { abscisses: 'Abscissa', ordonnees: 'Ordered', delete: 'Delete', label: 'Label' },
        simpleEditor: {
          renduTextDefault: 'Default text rendering',
          display: 'Display',
          pictureLink: 'Image SVG',
          genericSettings: 'Generic parameters',
          genericSettingsBis: 'Generic parameters bis',
          spaceInitialVisualisation: 'Initial viewing space',
          CoordinateSpace: 'Coordinates space',
          objectVisibility: 'Visibility of objects',
          metricsSettings: 'Metrics Settings',
        },
        coordinateSpace: { addCoordinate: 'Add coordinates' },
        initialCoordonateSpace: { label: 'Initial coordinates space' },
        inputCoordinate: {
          minXPosition: 'Position X min',
          maxXPosition: 'Position X max',
          minYPosition: 'Position Y min',
          maxYPosition: 'Position Y max',
          image: 'Image',
          interfaceJson: 'Interface name',
          key: 'Key',
          valueKey: 'Value key',
        },
        textDefault: { police: 'Font', size: 'Size', style: 'Style' },
        genericParameter: {
          settingPrincipalMetric: 'Main metric parameter',
          graphicObject: 'Graphic object',
          variableColor: 'Variable color',
          traceBackground: 'Trace the background',
          traceContour: 'Trace the border',
        },
        metricPrincipalSetting: {
          followLink: 'Following link',
          link: 'Link',
          text: 'Text',
          linkTooltip: 'Link tooltip',
          textInTooltip: 'Text in tooltip',
        },
        colorVariable: {
          switchBackgroundColor: 'Edit background color',
          switchOutlineColor: 'Edit border color',
          thicknessOutline: 'Size border',
          variationNumber: 'Variation number',
          number: 'Number',
          addColor: 'Add color',
          infoSeuil: 'Info seuil',
        },
        textObject: {
          titleTextObject: 'A text object',
          optionalLegend: 'Optional legend',
          legend: 'Legend',
          value: 'Value',
          optionalUnit: 'Optional unit',
          unit: 'Unit',
          principalMetric: 'Principal metric',
          textRegion: 'Text region',
          colorBackground: 'Color background',
          colorText: 'Color text',
          colorTextOptional: 'Optional color text',
          textStyle: 'Text style',
          style: 'Style',
          textBubble: 'Text tooltip',
          generateTextObject: 'Generate text object',
          auxiliaryElement: 'Auxiliary element',
          digitalFormatting: 'Decimals',
          mesureUnit: 'Unit of measure (if metric)',
          objectDisplayTextTooltip: 'Object display in text or tooltip',
          objectDisplayInPermanentlyHover: 'Object display in permanently or hovering',
          backgroundColor: 'Background color',
          optionalBackgroundColor: 'Optional background color',
          save: 'Save',
        },
        defaultTextRendering: {},
      };
    },
    function (e, t, n) {
      'use strict';
      e.exports = function (e) {
        var t = [];
        return (
          (t.toString = function () {
            return this.map(function (t) {
              var n = (function (e, t) {
                var n = e[1] || '',
                  i = e[3];
                if (!i) return n;
                if (t && 'function' == typeof btoa) {
                  var a =
                      ((r = i),
                      (l = btoa(unescape(encodeURIComponent(JSON.stringify(r))))),
                      (s = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(l)),
                      '/*# '.concat(s, ' */')),
                    o = i.sources.map(function (e) {
                      return '/*# sourceURL='.concat(i.sourceRoot || '').concat(e, ' */');
                    });
                  return [n].concat(o).concat([a]).join('\n');
                }
                var r, l, s;
                return [n].join('\n');
              })(t, e);
              return t[2] ? '@media '.concat(t[2], ' {').concat(n, '}') : n;
            }).join('');
          }),
          (t.i = function (e, n, i) {
            'string' == typeof e && (e = [[null, e, '']]);
            var a = {};
            if (i)
              for (var o = 0; o < this.length; o++) {
                var r = this[o][0];
                null != r && (a[r] = !0);
              }
            for (var l = 0; l < e.length; l++) {
              var s = [].concat(e[l]);
              (i && a[s[0]]) || (n && (s[2] ? (s[2] = ''.concat(n, ' and ').concat(s[2])) : (s[2] = n)), t.push(s));
            }
          }),
          t
        );
      };
    },
    function (e, t, n) {
      var i,
        a,
        o = {},
        r =
          ((i = function () {
            return window && document && document.all && !window.atob;
          }),
          function () {
            return void 0 === a && (a = i.apply(this, arguments)), a;
          }),
        l = function (e, t) {
          return t ? t.querySelector(e) : document.querySelector(e);
        },
        s = (function (e) {
          var t = {};
          return function (e, n) {
            if ('function' == typeof e) return e();
            if (void 0 === t[e]) {
              var i = l.call(this, e, n);
              if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement)
                try {
                  i = i.contentDocument.head;
                } catch (e) {
                  i = null;
                }
              t[e] = i;
            }
            return t[e];
          };
        })(),
        p = null,
        c = 0,
        u = [],
        d = n(8);
      function h(e, t) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n],
            a = o[i.id];
          if (a) {
            a.refs++;
            for (var r = 0; r < a.parts.length; r++) a.parts[r](i.parts[r]);
            for (; r < i.parts.length; r++) a.parts.push(v(i.parts[r], t));
          } else {
            var l = [];
            for (r = 0; r < i.parts.length; r++) l.push(v(i.parts[r], t));
            o[i.id] = { id: i.id, refs: 1, parts: l };
          }
        }
      }
      function f(e, t) {
        for (var n = [], i = {}, a = 0; a < e.length; a++) {
          var o = e[a],
            r = t.base ? o[0] + t.base : o[0],
            l = { css: o[1], media: o[2], sourceMap: o[3] };
          i[r] ? i[r].parts.push(l) : n.push((i[r] = { id: r, parts: [l] }));
        }
        return n;
      }
      function m(e, t) {
        var n = s(e.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var i = u[u.length - 1];
        if ('top' === e.insertAt)
          i ? (i.nextSibling ? n.insertBefore(t, i.nextSibling) : n.appendChild(t)) : n.insertBefore(t, n.firstChild), u.push(t);
        else if ('bottom' === e.insertAt) n.appendChild(t);
        else {
          if ('object' != typeof e.insertAt || !e.insertAt.before)
            throw new Error(
              "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
            );
          var a = s(e.insertAt.before, n);
          n.insertBefore(t, a);
        }
      }
      function g(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = u.indexOf(e);
        t >= 0 && u.splice(t, 1);
      }
      function b(e) {
        var t = document.createElement('style');
        if ((void 0 === e.attrs.type && (e.attrs.type = 'text/css'), void 0 === e.attrs.nonce)) {
          var i = (function () {
            0;
            return n.nc;
          })();
          i && (e.attrs.nonce = i);
        }
        return y(t, e.attrs), m(e, t), t;
      }
      function y(e, t) {
        Object.keys(t).forEach(function (n) {
          e.setAttribute(n, t[n]);
        });
      }
      function v(e, t) {
        var n, i, a, o;
        if (t.transform && e.css) {
          if (!(o = 'function' == typeof t.transform ? t.transform(e.css) : t.transform.default(e.css))) return function () {};
          e.css = o;
        }
        if (t.singleton) {
          var r = c++;
          (n = p || (p = b(t))), (i = C.bind(null, n, r, !1)), (a = C.bind(null, n, r, !0));
        } else
          e.sourceMap &&
          'function' == typeof URL &&
          'function' == typeof URL.createObjectURL &&
          'function' == typeof URL.revokeObjectURL &&
          'function' == typeof Blob &&
          'function' == typeof btoa
            ? ((n = (function (e) {
                var t = document.createElement('link');
                return void 0 === e.attrs.type && (e.attrs.type = 'text/css'), (e.attrs.rel = 'stylesheet'), y(t, e.attrs), m(e, t), t;
              })(t)),
              (i = S.bind(null, n, t)),
              (a = function () {
                g(n), n.href && URL.revokeObjectURL(n.href);
              }))
            : ((n = b(t)),
              (i = I.bind(null, n)),
              (a = function () {
                g(n);
              }));
        return (
          i(e),
          function (t) {
            if (t) {
              if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
              i((e = t));
            } else a();
          }
        );
      }
      e.exports = function (e, t) {
        if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document)
          throw new Error('The style-loader cannot be used in a non-browser environment');
        ((t = t || {}).attrs = 'object' == typeof t.attrs ? t.attrs : {}),
          t.singleton || 'boolean' == typeof t.singleton || (t.singleton = r()),
          t.insertInto || (t.insertInto = 'head'),
          t.insertAt || (t.insertAt = 'bottom');
        var n = f(e, t);
        return (
          h(n, t),
          function (e) {
            for (var i = [], a = 0; a < n.length; a++) {
              var r = n[a];
              (l = o[r.id]).refs--, i.push(l);
            }
            e && h(f(e, t), t);
            for (a = 0; a < i.length; a++) {
              var l;
              if (0 === (l = i[a]).refs) {
                for (var s = 0; s < l.parts.length; s++) l.parts[s]();
                delete o[l.id];
              }
            }
          }
        );
      };
      var x,
        k =
          ((x = []),
          function (e, t) {
            return (x[e] = t), x.filter(Boolean).join('\n');
          });
      function C(e, t, n, i) {
        var a = n ? '' : i.css;
        if (e.styleSheet) e.styleSheet.cssText = k(t, a);
        else {
          var o = document.createTextNode(a),
            r = e.childNodes;
          r[t] && e.removeChild(r[t]), r.length ? e.insertBefore(o, r[t]) : e.appendChild(o);
        }
      }
      function I(e, t) {
        var n = t.css,
          i = t.media;
        if ((i && e.setAttribute('media', i), e.styleSheet)) e.styleSheet.cssText = n;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(n));
        }
      }
      function S(e, t, n) {
        var i = n.css,
          a = n.sourceMap,
          o = void 0 === t.convertToAbsoluteUrls && a;
        (t.convertToAbsoluteUrls || o) && (i = d(i)),
          a && (i += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + ' */');
        var r = new Blob([i], { type: 'text/css' }),
          l = e.href;
        (e.href = URL.createObjectURL(r)), l && URL.revokeObjectURL(l);
      }
    },
    function (e, t) {
      e.exports = n;
    },
    function (e, t, n) {
      var i = n(7);
      'string' == typeof i && (i = [[e.i, i, '']]);
      var a = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(4)(i, a);
      i.locals && (e.exports = i.locals);
    },
    function (e, t, n) {
      (t = n(3)(!0)).push([
        e.i,
        'div.inputCoor {\n  margin-bottom: 2%; }\n\ndiv.buttonAddCoor {\n  text-align: center; }\n',
        '',
        {
          version: 3,
          sources: ['CoordinateSpace.css'],
          names: [],
          mappings: 'AAAA;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB,EAAE',
          file: 'CoordinateSpace.css',
          sourcesContent: ['div.inputCoor {\n  margin-bottom: 2%; }\n\ndiv.buttonAddCoor {\n  text-align: center; }\n'],
        },
      ]),
        (e.exports = t);
    },
    function (e, t) {
      e.exports = function (e) {
        var t = 'undefined' != typeof window && window.location;
        if (!t) throw new Error('fixUrls requires window.location');
        if (!e || 'string' != typeof e) return e;
        var n = t.protocol + '//' + t.host,
          i = n + t.pathname.replace(/\/[^\/]*$/, '/');
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
          var a,
            o = t
              .trim()
              .replace(/^"(.*)"$/, function (e, t) {
                return t;
              })
              .replace(/^'(.*)'$/, function (e, t) {
                return t;
              });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)
            ? e
            : ((a = 0 === o.indexOf('//') ? o : 0 === o.indexOf('/') ? n + o : i + o.replace(/^\.\//, '')), 'url(' + JSON.stringify(a) + ')');
        });
      };
    },
    function (e, t, n) {
      var i = n(10);
      'string' == typeof i && (i = [[e.i, i, '']]);
      var a = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(4)(i, a);
      i.locals && (e.exports = i.locals);
    },
    function (e, t, n) {
      (t = n(3)(!0)).push([
        e.i,
        'div.divSimpleEditor {\n  width: 100%;\n  /* margin: 2%;\n  padding: 2%; */ }\n\ndiv.CoordinateSpaceInitital {\n  /* margin: 1%; */\n  /* margin-bottom: 8%; */ }\n\nh3.titreSection {\n  margin-bottom: 2%;\n  /*   color: blue; */ }\n\n.parameter-interface-container {\n  width: 100%; }\n\n.parameter-interface-list-title {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n  border-bottom: 4px solid white;\n  margin: 10px 0; }\n\n.parameter-interface-title {\n  padding: 10px;\n  list-style: none;\n  cursor: pointer; }\n',
        '',
        {
          version: 3,
          sources: ['SimpleEditor.css'],
          names: [],
          mappings:
            'AAAA;EACE,WAAW;EACX;gBACc,EAAE;;AAElB;EACE,gBAAgB;EAChB,uBAAuB,EAAE;;AAE3B;EACE,iBAAiB;EACjB,mBAAmB,EAAE;;AAEvB;EACE,WAAW,EAAE;;AAEf;EACE,qBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,2BAAmB;MAAnB,uBAAmB;UAAnB,mBAAmB;EACnB,qCAA6B;MAA7B,yBAA6B;UAA7B,6BAA6B;EAC7B,8BAA8B;EAC9B,cAAc,EAAE;;AAElB;EACE,aAAa;EACb,gBAAgB;EAChB,eAAe,EAAE',
          file: 'SimpleEditor.css',
          sourcesContent: [
            'div.divSimpleEditor {\n  width: 100%;\n  /* margin: 2%;\n  padding: 2%; */ }\n\ndiv.CoordinateSpaceInitital {\n  /* margin: 1%; */\n  /* margin-bottom: 8%; */ }\n\nh3.titreSection {\n  margin-bottom: 2%;\n  /*   color: blue; */ }\n\n.parameter-interface-container {\n  width: 100%; }\n\n.parameter-interface-list-title {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  border-bottom: 4px solid white;\n  margin: 10px 0; }\n\n.parameter-interface-title {\n  padding: 10px;\n  list-style: none;\n  cursor: pointer; }\n',
          ],
        },
      ]),
        (e.exports = t);
    },
    function (e, t, n) {
      'use strict';
      n.r(t);
      var i = n(5),
        a = function (e, t) {
          return (a =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        };
      function o(e, t) {
        function n() {
          this.constructor = e;
        }
        a(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
      }
      var r = function () {
        return (r =
          Object.assign ||
          function (e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
              for (var a in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      };
      function l(e, t, n, i) {
        return new (n || (n = Promise))(function (a, o) {
          function r(e) {
            try {
              s(i.next(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            try {
              s(i.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(r, l);
          }
          s((i = i.apply(e, t || [])).next());
        });
      }
      function s(e, t) {
        var n,
          i,
          a,
          o,
          r = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: l(0), throw: l(1), return: l(2) }),
          'function' == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function l(o) {
          return function (l) {
            return (function (o) {
              if (n) throw new TypeError('Generator is already executing.');
              for (; r; )
                try {
                  if (
                    ((n = 1),
                    i && (a = 2 & o[0] ? i.return : o[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, o[1])).done)
                  )
                    return a;
                  switch (((i = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                    case 0:
                    case 1:
                      a = o;
                      break;
                    case 4:
                      return r.label++, { value: o[1], done: !1 };
                    case 5:
                      r.label++, (i = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = r.ops.pop()), r.trys.pop();
                      continue;
                    default:
                      if (!((a = r.trys), (a = a.length > 0 && a[a.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
                        r = 0;
                        continue;
                      }
                      if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                        r.label = o[1];
                        break;
                      }
                      if (6 === o[0] && r.label < a[1]) {
                        (r.label = a[1]), (a = o);
                        break;
                      }
                      if (a && r.label < a[2]) {
                        (r.label = a[2]), r.ops.push(o);
                        break;
                      }
                      a[2] && r.ops.pop(), r.trys.pop();
                      continue;
                  }
                  o = t.call(e, r);
                } catch (e) {
                  (o = [6, e]), (i = 0);
                } finally {
                  n = a = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, l]);
          };
        }
      }
      function p(e) {
        var t = 'function' == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          i = 0;
        if (n) return n.call(e);
        if (e && 'number' == typeof e.length)
          return {
            next: function () {
              return e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e };
            },
          };
        throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
      }
      var c = n(0),
        u = n.n(c),
        d = n(1),
        h = function (e, t, n, i, a, o, r, l, s, p, c, u) {
          (this.id = e),
            (this.linkURL = t),
            (this.meta = n),
            (this.lowerLimit = i),
            (this.label = a),
            (this.textObj = o),
            (this.mainMetric = r),
            (this.metrics = l),
            (this.colorMode = s),
            (this.traceBack = p),
            (this.traceBorder = c),
            (this.positionParameter = u);
        },
        f = (function (e) {
          function t(t, n, i, a, o, r, l, s, p, c, u, d, h, f, m, g, b, y, v, x, k, C, I, S, E, M, L, O) {
            var T = e.call(this, t, n, i, a, o, r, l, s, p, c, u, d) || this;
            return (
              (T.name = h),
              (T.valueMetric = f),
              (T.drawGraphicMarker = m),
              (T.shape = g),
              (T.sizeWidth = b),
              (T.sizeHeight = y),
              (T.rotateArrow = v),
              (T.positionShapeX = x),
              (T.positionShapeY = k),
              (T.color = C),
              (T.associateOrientedLinksIn = I),
              (T.associateOrientedLinksOut = S),
              (T.widthInitialSpaceDefault = E),
              (T.heightInitialSpaceDefault = M),
              (T.positionXDefault = L),
              (T.positionYDefault = O),
              T
            );
          }
          return o(t, e), t;
        })(h),
        m = function (e, t, n, i, a, o) {
          (this.labelAPositionX = e),
            (this.labelAPositionY = t),
            (this.labelBPositionX = n),
            (this.labelBPositionY = i),
            (this.tooltipPositionA = a),
            (this.tooltipPositionB = o);
        },
        g = (function (e) {
          function t(t, n, i, a, o, r, l, s, p, c, u, d, h, f, m, g, b, y, v, x, k, C, I, S, E, M, L, O, T, B, A, D, w, P, j, G, V, R, F, U, z) {
            var Y = e.call(this, t, n, i, a, o, r, l, s, p, c, u, d) || this;
            return (
              (Y.name = h),
              (Y.orientationLink = f),
              (Y.size = m),
              (Y.pointAPositionX = g),
              (Y.pointAPositionY = b),
              (Y.colorCoordinateA = y),
              (Y.pointBPositionX = v),
              (Y.pointBPositionY = x),
              (Y.colorCoordinateB = k),
              (Y.valueMainMetricA = C),
              (Y.valueMainMetricB = I),
              (Y.pointIn = S),
              (Y.pointOut = E),
              (Y.regionIn = M),
              (Y.regionOut = L),
              (Y.zIndex = O),
              (Y.pointCPositionX = T),
              (Y.pointCPositionY = B),
              (Y.isIncurved = A),
              (Y.mainMetricB = D),
              (Y.metricsB = w),
              (Y.widthInitialSpaceDefault = P),
              (Y.heightInitialSpaceDefault = j),
              (Y.pointAPositionXDefault = G),
              (Y.pointAPositionYDefault = V),
              (Y.pointBPositionXDefault = R),
              (Y.pointBPositionYDefault = F),
              (Y.pointCPositionXDefault = U),
              (Y.pointCPositionYDefault = z),
              Y
            );
          }
          return o(t, e), t;
        })(h),
        b = function (e, t, n, i, a, o, r, l) {
          (this.value = e),
            (this.isTextTooltip = t),
            (this.colorBack = n),
            (this.colorText = i),
            (this.style = a),
            (this.generateObjectText = o),
            (this.valueGenerateObjectText = r),
            (this.generateAuxiliaryElement = l);
        },
        y = (function () {
          function e(e, t, n) {
            (this.followLink = e), (this.hoveringTooltipLink = t), (this.hoveringTooltipText = n);
          }
          return (
            Object.defineProperty(e.prototype, 'getFollowLink', {
              get: function () {
                return this.followLink;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'setFollowLink', {
              set: function (e) {
                this.followLink = e;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'getHoveringTooltipLink', {
              get: function () {
                return this.hoveringTooltipLink;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'setHoveringTooltipLink', {
              set: function (e) {
                this.hoveringTooltipLink = e;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'getHoveringTooltipText', {
              get: function () {
                return this.hoveringTooltipText;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'setHoveringTooltipText', {
              set: function (e) {
                this.hoveringTooltipText = e;
              },
              enumerable: !0,
              configurable: !0,
            }),
            e
          );
        })(),
        v = function (e, t) {
          var n,
            i,
            a = [];
          try {
            for (var o = p(t.data.series), r = o.next(); !r.done; r = o.next()) {
              var l = r.value;
              l.refId === e.mainMetric.refId && a.push(l);
            }
          } catch (e) {
            n = { error: e };
          } finally {
            try {
              r && !r.done && (i = o.return) && i.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          e.mainMetric.returnQuery = a;
        },
        x = function (e, t) {
          var n, i, a, o;
          try {
            for (var r = p(e.metrics), l = r.next(); !l.done; l = r.next()) {
              var s = l.value,
                c = [];
              try {
                for (var u = ((a = void 0), p(t.data.series)), d = u.next(); !d.done; d = u.next()) {
                  var h = d.value;
                  h.refId === s.refId && c.push(h);
                }
              } catch (e) {
                a = { error: e };
              } finally {
                try {
                  d && !d.done && (o = u.return) && o.call(u);
                } finally {
                  if (a) throw a.error;
                }
              }
              s.returnQuery = c;
            }
          } catch (e) {
            n = { error: e };
          } finally {
            try {
              l && !l.done && (i = r.return) && i.call(r);
            } finally {
              if (n) throw n.error;
            }
          }
        },
        k = function (e, t) {
          var n,
            i,
            a = [];
          try {
            for (var o = p(t.data.series), r = o.next(); !r.done; r = o.next()) {
              var l = r.value;
              l.refId === e.mainMetric.refId && a.push(l);
            }
          } catch (e) {
            n = { error: e };
          } finally {
            try {
              r && !r.done && (i = o.return) && i.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          e.mainMetric.returnQuery = a;
        },
        C = function (e, t) {
          var n, i, a, o;
          try {
            for (var r = p(e.metrics), l = r.next(); !l.done; l = r.next()) {
              var s = l.value,
                c = [];
              try {
                for (var u = ((a = void 0), p(t.data.series)), d = u.next(); !d.done; d = u.next()) {
                  var h = d.value;
                  h.refId === s.refId && c.push(h);
                }
              } catch (e) {
                a = { error: e };
              } finally {
                try {
                  d && !d.done && (o = u.return) && o.call(u);
                } finally {
                  if (a) throw a.error;
                }
              }
              s.returnQuery = c;
            }
          } catch (e) {
            n = { error: e };
          } finally {
            try {
              l && !l.done && (i = r.return) && i.call(r);
            } finally {
              if (n) throw n.error;
            }
          }
        },
        I = function (e, t) {
          var n,
            i,
            a = [],
            o = [];
          try {
            for (var r = p(t.data.series), l = r.next(); !l.done; l = r.next()) {
              var s = l.value;
              s.refId === e.mainMetric.refId && a.push(s), s.refId === e.mainMetricB.refId && o.push(s);
            }
          } catch (e) {
            n = { error: e };
          } finally {
            try {
              l && !l.done && (i = r.return) && i.call(r);
            } finally {
              if (n) throw n.error;
            }
          }
          (e.mainMetric.returnQuery = a), (e.mainMetricB.returnQuery = o);
        },
        S = function (e, t) {
          var n, i, a, o, r, l, s, c;
          try {
            for (var u = p(e.metrics), d = u.next(); !d.done; d = u.next()) {
              var h = d.value,
                f = [];
              try {
                for (var m = ((a = void 0), p(t.data.series)), g = m.next(); !g.done; g = m.next()) {
                  (C = g.value).refId === h.refId && f.push(C);
                }
              } catch (e) {
                a = { error: e };
              } finally {
                try {
                  g && !g.done && (o = m.return) && o.call(m);
                } finally {
                  if (a) throw a.error;
                }
              }
              h.returnQuery = f;
            }
          } catch (e) {
            n = { error: e };
          } finally {
            try {
              d && !d.done && (i = u.return) && i.call(u);
            } finally {
              if (n) throw n.error;
            }
          }
          try {
            for (var b = p(e.metricsB), y = b.next(); !y.done; y = b.next()) {
              h = y.value;
              var v = [];
              try {
                for (var x = ((s = void 0), p(t.data.series)), k = x.next(); !k.done; k = x.next()) {
                  var C;
                  (C = k.value).refId === h.refId && v.push(C);
                }
              } catch (e) {
                s = { error: e };
              } finally {
                try {
                  k && !k.done && (c = x.return) && c.call(x);
                } finally {
                  if (s) throw s.error;
                }
              }
              h.returnQuery = v;
            }
          } catch (e) {
            r = { error: e };
          } finally {
            try {
              y && !y.done && (l = b.return) && l.call(b);
            } finally {
              if (r) throw r.error;
            }
          }
        },
        E = function (e, t) {
          var n, i, a;
          if ('' === t.key && '' === t.keyValue) return !0;
          var o =
            (null === (a = e.name) || void 0 === a ? void 0 : a.split('{'))[1].split(',').flatMap(function (e) {
              return e.replace(/[\"{}]/gm, '');
            }) || [];
          if (o && o.length > 0)
            try {
              for (var r = p(o), l = r.next(); !l.done; l = r.next()) {
                var s = l.value.split('=');
                if (2 === s.length && s[0] === t.key && s[1] === t.keyValue) return !0;
              }
            } catch (e) {
              n = { error: e };
            } finally {
              try {
                l && !l.done && (i = r.return) && i.call(r);
              } finally {
                if (n) throw n.error;
              }
            }
          return !1;
        },
        M = function (e, t) {
          var n, i, a, o, r;
          if (!t.filter) return !0;
          var l = 0,
            s = t.filter,
            c =
              (null === (r = e.name) || void 0 === r ? void 0 : r.split('{'))[1].split(',').map(function (e) {
                return e.replace(/[\"{}]/gm, '');
              }) || [];
          if (c && c.length > 0) {
            try {
              for (var u = p(c), d = u.next(); !d.done; d = u.next()) {
                var h = d.value.split('=');
                try {
                  for (var f = ((a = void 0), p(s)), m = f.next(); !m.done; m = f.next()) {
                    var g = m.value;
                    2 === h.length && h[0] === g.label && h[1] === g.value && l++;
                  }
                } catch (e) {
                  a = { error: e };
                } finally {
                  try {
                    m && !m.done && (o = f.return) && o.call(f);
                  } finally {
                    if (a) throw a.error;
                  }
                }
              }
            } catch (e) {
              n = { error: e };
            } finally {
              try {
                d && !d.done && (i = u.return) && i.call(u);
              } finally {
                if (n) throw n.error;
              }
            }
            if (l === s.length) return !0;
          }
          return !1;
        },
        L = function (e) {
          var t,
            n,
            i,
            a,
            o = null;
          if (e.returnQuery && e.returnQuery.length > 0) {
            var r = [],
              l = 0;
            if (((o = 0), e.filter)) {
              try {
                for (var s = p(e.returnQuery), c = s.next(); !c.done; c = s.next()) {
                  h = c.value;
                  if (M(h, e))
                    for (f = h.fields[0].values.length, m = 0; m < f; m++)
                      h.fields.length > 0 && h.fields[0].values.get(m) && ((o += h.fields[0].values.get(m)), r.push(h.fields[0].values.get(m)), ++l);
                }
              } catch (e) {
                i = { error: e };
              } finally {
                try {
                  c && !c.done && (a = s.return) && a.call(s);
                } finally {
                  if (i) throw i.error;
                }
              }
              'avg' === e.manageValue ? (o /= l) : 'err' === e.manageValue && l > 1 && (o = null);
            } else {
              try {
                for (var u = p(e.returnQuery), d = u.next(); !d.done; d = u.next()) {
                  var h = d.value;
                  if (E(h, e))
                    for (var f = h.fields[0].values.length, m = 0; m < f; m++)
                      h.fields.length > 0 && h.fields[0].values.get(m) && ((o += h.fields[0].values.get(m)), r.push(h.fields[0].values.get(m)), ++l);
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  d && !d.done && (n = u.return) && n.call(u);
                } finally {
                  if (t) throw t.error;
                }
              }
              'avg' === e.manageValue ? (o /= l) : 'err' === e.manageValue && l > 1 && (o = null);
            }
          }
          return o;
        },
        O = (function (e) {
          function t(t, n, i, a, o, r, l, s, p, c, u, d, h, f, m, g, b, y, v, x) {
            var k = e.call(this, t, n, i, a, o, r, l, s, p, c, u, d) || this;
            return (
              (k.idSVG = h),
              (k.mode = b),
              (k.orientedLink = f),
              (k.coords = m),
              (k.coordsDefault = g),
              (k.img = y),
              (k.widthInitialSpaceDefault = v),
              (k.heightInitialSpaceDefault = x),
              k
            );
          }
          return o(t, e), t;
        })(h),
        T = function (e) {
          var t = e + 1,
            n = new b(
              '',
              !1,
              'rgb(255, 255, 255, 0)',
              'black',
              { bold: !1, italic: !1, underline: !1 },
              !0,
              {
                legendElement: '',
                numericFormatElement: '5',
                unit: '',
                displayObjectInTooltip: !1,
                addColorTextElement: !1,
                colorTextElement: 'white',
                addColorBackElement: !1,
                colorBackElement: 'black',
              },
              {
                legendElement: '',
                numericFormatElement: '5',
                unit: '',
                displayObjectInTooltip: !0,
                addColorTextElement: !1,
                colorTextElement: 'white',
                addColorBackElement: !1,
                colorBackElement: 'black',
              }
            ),
            i = new y('', '', ''),
            a = new m('0', '0', '0', '0', {}, {});
          return new O(
            t,
            i,
            [],
            [],
            '',
            n,
            { key: '', unit: '', format: '', keyValue: '', refId: '', manageValue: 'avg' },
            [],
            !1,
            !1,
            !1,
            a,
            '',
            [],
            { xMin: '0', xMax: '0', yMin: '0', yMax: '0' },
            { xMin: '0', xMax: '0', yMin: '0', yMax: '0' },
            !0,
            '',
            '',
            ''
          );
        },
        B = function (e, t, n, i, a, o, r) {
          var l = new b(
              e.textObj.value,
              e.textObj.isTextTooltip,
              e.textObj.colorBack,
              e.textObj.colorText,
              e.textObj.style,
              e.textObj.generateObjectText,
              e.textObj.valueGenerateObjectText,
              e.textObj.generateAuxiliaryElement
            ),
            s = new y(e.linkURL.followLink, e.linkURL.hoveringTooltipLink, e.linkURL.hoveringTooltipText),
            p = { xMin: e.coords.xMin, xMax: e.coords.xMax, yMin: e.coords.yMin, yMax: e.coords.yMax },
            c = { xMin: e.coordsDefault.xMin, xMax: e.coordsDefault.xMax, yMin: e.coordsDefault.yMin, yMax: e.coordsDefault.yMax },
            u = new m(
              e.positionParameter.labelAPositionX,
              e.positionParameter.labelAPositionY,
              e.positionParameter.labelBPositionX,
              e.positionParameter.labelBPositionY,
              e.positionParameter.tooltipPositionA,
              e.positionParameter.tooltipPositionB
            ),
            d = {
              key: e.mainMetric.key,
              unit: e.mainMetric.unit,
              format: e.mainMetric.format,
              keyValue: e.mainMetric.keyValue,
              refId: e.mainMetric.refId,
              expr: e.mainMetric.expr,
              returnQuery: e.mainMetric.returnQuery,
              manageValue: e.mainMetric.manageValue,
            };
          return new O(
            e.id,
            s,
            e.meta,
            e.lowerLimit,
            e.label,
            l,
            d,
            e.metrics,
            e.colorMode,
            e.traceBack,
            e.traceBorder,
            u,
            e.idSVG,
            e.orientedLink,
            p,
            c,
            e.mode,
            e.img,
            e.widthInitialSpaceDefault,
            e.heightInitialSpaceDefault
          );
        },
        A = function (e, t, n, i, a, o, r) {
          var l = new b(
              e.textObj.value,
              e.textObj.isTextTooltip,
              e.textObj.colorBack,
              e.textObj.colorText,
              e.textObj.style,
              e.textObj.generateObjectText,
              e.textObj.valueGenerateObjectText,
              e.textObj.generateAuxiliaryElement
            ),
            s = new y(e.linkURL.followLink, e.linkURL.hoveringTooltipLink, e.linkURL.hoveringTooltipText),
            p = new m(
              e.positionParameter.labelAPositionX,
              e.positionParameter.labelAPositionY,
              e.positionParameter.labelBPositionX,
              e.positionParameter.labelBPositionY,
              e.positionParameter.tooltipPositionA,
              e.positionParameter.tooltipPositionB
            ),
            c = {
              key: e.mainMetric.key,
              unit: e.mainMetric.unit,
              format: e.mainMetric.format,
              keyValue: e.mainMetric.keyValue,
              filter: e.mainMetric.filter,
              refId: e.mainMetric.refId,
              expr: e.mainMetric.expr,
              returnQuery: e.mainMetric.returnQuery,
              manageValue: e.mainMetric.manageValue,
            },
            u = n - t,
            d = (((parseInt(e.positionShapeX, 10) - t) / u) * i).toString(),
            h = o - a,
            g = (((parseInt(e.positionShapeY, 10) - a) / h) * r).toString();
          return new f(
            e.id,
            s,
            e.meta,
            e.lowerLimit,
            e.label,
            l,
            c,
            e.metrics,
            e.colorMode,
            e.traceBack,
            e.traceBorder,
            p,
            e.name,
            e.valueMetric,
            e.drawGraphicMarker,
            e.shape,
            e.sizeWidth,
            e.sizeHeight,
            e.rotateArrow,
            e.positionShapeX,
            e.positionShapeY,
            e.color,
            e.associateOrientedLinksIn,
            e.associateOrientedLinksOut,
            e.widthInitialSpaceDefault,
            e.heightInitialSpaceDefault,
            d,
            g
          );
        },
        D = function (e, t) {
          var n = e,
            i = t,
            a = new b(
              '',
              !1,
              'white',
              'black',
              { bold: !1, italic: !1, underline: !1 },
              !0,
              {
                legendElement: '',
                numericFormatElement: '5',
                unit: '',
                displayObjectInTooltip: !1,
                addColorTextElement: !1,
                colorTextElement: 'white',
                addColorBackElement: !1,
                colorBackElement: 'black',
              },
              {
                legendElement: '',
                numericFormatElement: '5',
                unit: '',
                displayObjectInTooltip: !0,
                addColorTextElement: !0,
                colorTextElement: 'white',
                addColorBackElement: !0,
                colorBackElement: 'black',
              }
            ),
            o = new y('', '', ''),
            r = new m('0', '0', '0', '0', {}, {});
          return new g(
            n,
            o,
            [],
            [],
            '',
            a,
            { key: '', unit: '', format: '', keyValue: '', refId: '', manageValue: 'avg' },
            [],
            !1,
            !1,
            !1,
            r,
            'orientedLink' + n.toString(),
            { label: 'Monodirectional', value: 'AB' },
            '9',
            '0',
            '0',
            '#5794F2',
            '0',
            '0',
            '#E54658',
            '',
            '',
            '',
            '',
            '',
            '',
            i,
            '',
            '',
            {},
            { key: '', unit: '', format: '', keyValue: '', refId: '', manageValue: 'avg' },
            [],
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0'
          );
        },
        w = function (e) {
          var t = new b(
              e.textObj.value,
              e.textObj.isTextTooltip,
              e.textObj.colorBack,
              e.textObj.colorText,
              e.textObj.style,
              e.textObj.generateObjectText,
              e.textObj.valueGenerateObjectText,
              e.textObj.generateAuxiliaryElement
            ),
            n = new y(e.linkURL.followLink, e.linkURL.hoveringTooltipLink, e.linkURL.hoveringTooltipText),
            i = new m(
              e.positionParameter.labelAPositionX,
              e.positionParameter.labelAPositionY,
              e.positionParameter.labelBPositionX,
              e.positionParameter.labelBPositionY,
              e.positionParameter.tooltipPositionA,
              e.positionParameter.tooltipPositionB
            ),
            a = {
              key: e.mainMetric.key,
              unit: e.mainMetric.unit,
              format: e.mainMetric.format,
              keyValue: e.mainMetric.keyValue,
              refId: e.mainMetric.refId,
              expr: e.mainMetric.expr,
              returnQuery: e.mainMetric.returnQuery,
              manageValue: e.mainMetric.manageValue,
            };
          return new g(
            e.id,
            n,
            e.meta,
            e.lowerLimit,
            e.label,
            t,
            a,
            e.metrics,
            e.colorMode,
            e.traceBack,
            e.traceBorder,
            i,
            e.name,
            e.orientationLink,
            e.size,
            e.pointAPositionX,
            e.pointAPositionY,
            e.colorCoordinateA,
            e.pointBPositionX,
            e.pointBPositionY,
            e.colorCoordinateB,
            e.valueMainMetricA,
            e.valueMainMetricB,
            e.pointIn,
            e.pointOut,
            e.regionIn,
            e.regionOut,
            e.zIndex,
            e.pointCPositionX,
            e.pointCPositionY,
            e.isIncurved,
            e.mainMetricB,
            e.metricsB,
            e.widthInitialSpaceDefault,
            e.heightInitialSpaceDefault,
            e.pointAPositionXDefault,
            e.pointAPositionYDefault,
            e.pointBPositionXDefault,
            e.pointBPositionYDefault,
            e.pointCPositionXDefault,
            e.pointCPositionYDefault
          );
        },
        P = (function () {
          function e(e, t) {
            (this.id = e), (this.uneClassInput = t);
          }
          return (
            (e.prototype.getId = function () {
              return this.id;
            }),
            (e.prototype.setId = function (e) {
              this.id = e;
            }),
            (e.prototype.getUneClassInput = function () {
              return this.uneClassInput;
            }),
            (e.prototype.setUneClassInput = function (e) {
              this.uneClassInput = e;
            }),
            e
          );
        })(),
        j = function (e) {
          var t = e.label,
            n = (e.value, e.name),
            i = e.required,
            a = e._handleChange,
            o = e.id;
          return !0 === e.withLabel
            ? u.a.createElement(
                'div',
                null,
                u.a.createElement(d.FormField, {
                  label: t,
                  labelWidth: 10,
                  inputWidth: 20,
                  type: 'button',
                  required: i,
                  name: n,
                  id: o,
                  onClick: a,
                  value: t || '',
                })
              )
            : u.a.createElement('div', null, u.a.createElement(d.Button, { onClick: a, variant: 'danger', id: o, size: 'md' }, 'Delete'));
        },
        G = function (e) {
          var t = e.label,
            n = e.name,
            i = e.placeholder,
            a = e.required,
            o = e.value,
            r = e._handleChange,
            l = e.disabled;
          return u.a.createElement(
            'div',
            null,
            u.a.createElement(d.FormField, {
              label: t,
              labelWidth: 15,
              inputWidth: 15,
              type: 'text',
              required: a,
              name: n,
              value: o,
              onChange: r,
              placeholder: i,
              disabled: l || !1,
            })
          );
        },
        V = (function () {
          function e(e, t, n, i, a, o, r) {
            (this.id = e), (this.label = t), (this.name = n), (this.inputType = i), (this.required = a), (this.placeholder = o), (this.value = r);
          }
          return (
            (e.prototype.getId = function () {
              return this.id;
            }),
            (e.prototype.setId = function (e) {
              this.id = e;
            }),
            (e.prototype.getLabel = function () {
              return this.label;
            }),
            (e.prototype.setLabel = function (e) {
              this.label = e;
            }),
            (e.prototype.getName = function () {
              return this.name;
            }),
            (e.prototype.setName = function (e) {
              this.name = e;
            }),
            (e.prototype.getInputType = function () {
              return this.inputType;
            }),
            (e.prototype.setInputType = function (e) {
              this.inputType = e;
            }),
            (e.prototype.getRequired = function () {
              return this.required;
            }),
            (e.prototype.setRequired = function (e) {
              this.required = e;
            }),
            (e.prototype.getPlaceholder = function () {
              return this.placeholder;
            }),
            (e.prototype.setPlaceholder = function (e) {
              this.placeholder = e;
            }),
            (e.prototype.getValue = function () {
              return this.value;
            }),
            (e.prototype.setValue = function (e) {
              this.value = e;
            }),
            e
          );
        })(),
        R = function (e, t) {
          var i = n(2),
            a = new V(e.toString() + 'label', i.basics.label, 'label' + e.toString(), 'text', !0, 'Label', void 0),
            o = new V(
              e.toString() + 'xMin',
              i.inputCoordinate.minXPosition,
              'positionXMin' + e.toString(),
              'text',
              !0,
              i.inputCoordinate.minXPosition,
              void 0
            ),
            r = new V(
              e.toString() + 'xMax',
              i.inputCoordinate.maxXPosition,
              'positionXMax' + e.toString(),
              'text',
              !0,
              i.inputCoordinate.maxXPosition,
              void 0
            ),
            l = new V(
              e.toString() + 'yMin',
              i.inputCoordinate.minYPosition,
              'positionYMin' + e.toString(),
              'text',
              !0,
              i.inputCoordinate.minYPosition,
              void 0
            ),
            s = new V(
              e.toString() + 'yMax',
              i.inputCoordinate.maxYPosition,
              'positionYMax' + e.toString(),
              'text',
              !0,
              i.inputCoordinate.maxYPosition,
              void 0
            );
          return t ? [a, o, r, l, s] : [a];
        },
        F = function (e, t, n, i, a) {
          return (
            e.startsWith('positionXMin')
              ? (t.coordinate.xMin = U(n, 1, i, a))
              : e.startsWith('positionXMax')
              ? (t.coordinate.xMax = U(n, 2, i, a))
              : e.startsWith('positionYMin')
              ? (t.coordinate.yMin = U(n, 3, i, a))
              : e.startsWith('positionYMax') && (t.coordinate.yMax = U(n, 4, i, a)),
            t
          );
        },
        U = function (e, t, n, i) {
          return e;
        },
        z = (function () {
          function e(e, t, n, i, a, o) {
            (this.id = e), (this.lowerLimitMin = t), (this.lowerLimitMax = n), (this.backColor = i), (this.borderColor = a), (this.sizeBorder = o);
          }
          return (
            Object.defineProperty(e.prototype, 'getId', {
              get: function () {
                return this.id;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'setId', {
              set: function (e) {
                this.id = e;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'getlowerLimitMin', {
              get: function () {
                return this.lowerLimitMin;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'setlowerLimitMin', {
              set: function (e) {
                this.lowerLimitMin = e;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'getlowerLimitMax', {
              get: function () {
                return this.lowerLimitMax;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'setlowerLimitMax', {
              set: function (e) {
                this.lowerLimitMax = e;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'getSeuilbackColor', {
              get: function () {
                return this.backColor;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'setSeuilbackColor', {
              set: function (e) {
                this.backColor = e;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'getSeuilborderColor', {
              get: function () {
                return this.borderColor;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'setSeuilborderColor', {
              set: function (e) {
                this.borderColor = e;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'getsizeBorder', {
              get: function () {
                return this.sizeBorder;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'setsizeBorder', {
              set: function (e) {
                this.sizeBorder = e;
              },
              enumerable: !0,
              configurable: !0,
            }),
            e
          );
        })(),
        Y = function (e) {
          var t = e.color,
            n = e.keyInt,
            i = e.text,
            a = e._onChange;
          e.width;
          return u.a.createElement(
            'div',
            { className: 'form-field' },
            u.a.createElement(d.FormLabel, { width: 15 }, i),
            u.a.createElement(
              'div',
              { id: 'colorPicker', style: { margin: '0.5%', padding: '0.5%', backgroundColor: '#1f1f20', border: '3px solid black' } },
              u.a.createElement(d.ColorPicker, {
                color: t,
                onChange: function (e) {
                  return a(n, e);
                },
              })
            )
          );
        },
        W = (function (e) {
          function t(t) {
            var i = e.call(this, t) || this;
            return (
              (i.setStateAsyncSeuil = function (e) {
                return new Promise(function (t) {
                  i.setState(e, t);
                });
              }),
              (i.callBack = function () {
                i.props.lowerLimitCallBack(i.state.lowerLimit);
              }),
              (i.onChangeColorFond = function (e, t) {
                return l(i, void 0, void 0, function () {
                  var e;
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return ((e = this.state.lowerLimit)[0].backColor = t), [4, this.setStateAsyncSeuil({ lowerLimit: e })];
                      case 1:
                        return n.sent(), this.callBack(), this.initComponent(), [2];
                    }
                  });
                });
              }),
              (i.onChangeColorContour = function (e, t) {
                return l(i, void 0, void 0, function () {
                  var e;
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return ((e = this.state.lowerLimit)[0].borderColor = t), [4, this.setStateAsyncSeuil({ lowerLimit: e })];
                      case 1:
                        return n.sent(), this.callBack(), this.initComponent(), [2];
                    }
                  });
                });
              }),
              (i.onChangeSzContour = function (e) {
                return l(i, void 0, void 0, function () {
                  var t;
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return ((t = this.state.lowerLimit)[0].sizeBorder = e), [4, this.setStateAsyncSeuil({ lowerLimit: t })];
                      case 1:
                        return n.sent(), this.callBack(), this.initComponent(), [2];
                    }
                  });
                });
              }),
              (i.addButtonColor = function () {
                var e = [],
                  t = n(2),
                  a = t.colorVariable.switchOutlineColor,
                  o = t.colorVariable.thicknessOutline,
                  r = t.colorVariable.thicknessOutline;
                if (i.props.traceBack) {
                  console.log('2');
                  e.push(
                    u.a.createElement(Y, {
                      key: '0FondcolorPicker',
                      color: i.state.lowerLimit[0].backColor,
                      keyInt: 0,
                      text: t.colorVariable.switchBackgroundColor,
                      _onChange: i.onChangeColorFond,
                    })
                  );
                }
                if (i.props.traceBorder) {
                  console.log('3');
                  e.push(
                    u.a.createElement(
                      'div',
                      { key: '0ContourDiv' },
                      u.a.createElement(Y, { color: i.state.lowerLimit[0].borderColor, keyInt: 0, text: a, _onChange: i.onChangeColorContour }),
                      u.a.createElement(d.FormField, {
                        labelWidth: 15,
                        label: o,
                        name: 'epaisseurContour',
                        placeholder: r,
                        value: i.state.lowerLimit[0].sizeBorder,
                        onChange: function (e) {
                          return i.onChangeSzContour(e.currentTarget.value);
                        },
                      })
                    )
                  );
                }
                return e;
              }),
              (i.initComponent = function () {
                i.setState({ htmlResult: u.a.createElement('div', null, i.addButtonColor()) });
              }),
              (i.componentDidMount = function () {
                return l(i, void 0, void 0, function () {
                  return s(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return 0 !== this.state.lowerLimit.length
                          ? [3, 2]
                          : [4, this.setStateAsyncSeuil({ lowerLimit: [new z(0, '', '', '', '', '2')] })];
                      case 1:
                        e.sent(), (e.label = 2);
                      case 2:
                        return this.initComponent(), [2];
                    }
                  });
                });
              }),
              (i.componentDidUpdate = function (e) {
                (e.traceBorder === i.props.traceBorder && e.traceBack === i.props.traceBack) || i.initComponent();
              }),
              (i.state = { lowerLimit: i.props.lowerLimit, htmlResult: u.a.createElement('div', null) }),
              i
            );
          }
          return (
            o(t, e),
            (t.prototype.render = function () {
              return u.a.createElement('div', null, this.state.htmlResult);
            }),
            t
          );
        })(u.a.Component);
      function X(e) {
        return (X =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
              })(e);
      }
      var N = (function (e) {
          function t(t) {
            var i = e.call(this, t) || this;
            return (
              (i.setStateAsyncArrayInputClass = function (e) {
                return new Promise(function (t) {
                  i.setState(e, t);
                });
              }),
              (i.setStateAsyncLowerLimit = function (e) {
                return new Promise(function (t) {
                  i.setState(e, t);
                });
              }),
              (i.setStateAsyncIndex = function (e) {
                return new Promise(function (t) {
                  i.setState(e, t);
                });
              }),
              (i.setStateAsyncNbVariation = function (e) {
                return new Promise(function (t) {
                  i.setState(e, t);
                });
              }),
              (i.callBack = function () {
                i.fillVarInput(), i.props.lowerLimitCallBack(i.state.lowerLimit);
              }),
              (i.saveData = function () {}),
              (i.addInput = function (e, t) {
                return l(i, void 0, void 0, function () {
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [
                          4,
                          this.setStateAsyncArrayInputClass({
                            arrayInputClass: this.state.arrayInputClass
                              .slice()
                              .concat(
                                new P(e, [
                                  new V('gestCouleurMin' + e.toString(), 'Seuil min', 'lowerLimitMin', 'text', !1, 'Seuil min', void 0),
                                  new V('gestCouleurMax' + e.toString(), 'Seuil max', 'lowerLimitMax', 'text', !1, 'Seuil max', void 0),
                                ])
                              ),
                          }),
                        ];
                      case 1:
                        return n.sent(), [4, this.setStateAsyncLowerLimit({ lowerLimit: this.state.lowerLimit.concat(t) })];
                      case 2:
                        return n.sent(), [4, this.setStateAsyncIndex({ index: e + 1 })];
                      case 3:
                        return n.sent(), [2];
                    }
                  });
                });
              }),
              (i.handleValueChange = function (e, t, n) {
                return l(i, void 0, void 0, function () {
                  var i;
                  return s(this, function (a) {
                    switch (a.label) {
                      case 0:
                        return (
                          (i = this.state.lowerLimit.slice()),
                          'lowerLimitMin' === t
                            ? (i[n].lowerLimitMin = e)
                            : ((i[n].lowerLimitMax = e), i.length > n + 1 && (i[n + 1].lowerLimitMin = '>' + e)),
                          [4, this.setStateAsyncLowerLimit({ lowerLimit: i })]
                        );
                      case 1:
                        return a.sent(), this.callBack(), [2];
                    }
                  });
                });
              }),
              (i.onChangeColorFond = function (e, t) {
                return l(i, void 0, void 0, function () {
                  var n;
                  return s(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return ((n = this.state.lowerLimit)[e].backColor = t), [4, this.setStateAsyncLowerLimit({ lowerLimit: n })];
                      case 1:
                        return i.sent(), this.callBack(), [2];
                    }
                  });
                });
              }),
              (i.onChangeColorContour = function (e, t) {
                return l(i, void 0, void 0, function () {
                  var n;
                  return s(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return ((n = this.state.lowerLimit)[e].borderColor = t), [4, this.setStateAsyncLowerLimit({ lowerLimit: n })];
                      case 1:
                        return i.sent(), this.callBack(), [2];
                    }
                  });
                });
              }),
              (i.onChangeSzContour = function (e, t) {
                return l(i, void 0, void 0, function () {
                  var n;
                  return s(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return ((n = this.state.lowerLimit)[e].sizeBorder = t), [4, this.setStateAsyncLowerLimit({ lowerLimit: n })];
                      case 1:
                        return i.sent(), this.callBack(), [2];
                    }
                  });
                });
              }),
              (i.addButtonColor = function (e) {
                var t = e.toString(),
                  a = [],
                  o = n(2);
                if (i.props.traceBack) {
                  var r = t + 'FondcolorPicker';
                  a.push(
                    u.a.createElement(Y, {
                      key: r,
                      color: i.state.lowerLimit[e].backColor,
                      keyInt: e,
                      text: o.colorVariable.switchBackgroundColor,
                      _onChange: i.onChangeColorFond,
                    })
                  );
                }
                if (i.props.traceBorder) {
                  var l = t + 'ContourDiv',
                    s = '';
                  (s = i.props.isLink ? 'Size' : o.colorVariable.thicknessOutline),
                    a.push(
                      u.a.createElement(
                        'div',
                        { key: l },
                        u.a.createElement(Y, {
                          color: i.state.lowerLimit[e].borderColor,
                          keyInt: e,
                          text: o.colorVariable.switchOutlineColor,
                          _onChange: i.onChangeColorContour,
                        }),
                        u.a.createElement(d.FormField, {
                          labelWidth: 15,
                          label: s,
                          name: 'epaisseurContour',
                          placeholder: o.colorVariable.thicknessOutline,
                          value: i.state.lowerLimit[e].sizeBorder,
                          onChange: function (t) {
                            return i.onChangeSzContour(e, t.currentTarget.value);
                          },
                        })
                      )
                    );
                }
                return a;
              }),
              (i.onChangeVariation = function (e) {
                return l(i, void 0, void 0, function () {
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, this.setStateAsyncNbVariation({ nbVariation: e.currentTarget.value })];
                      case 1:
                        return t.sent(), [2];
                    }
                  });
                });
              }),
              (i.test = function (e) {
                return l(i, void 0, void 0, function () {
                  var t, n, i, a, o, r, l, c;
                  return s(this, function (s) {
                    switch (s.label) {
                      case 0:
                        (t = this.state.arrayInputClass.slice()), (n = this.state.index), (i = this.state.lowerLimit);
                        try {
                          for (a = p(e), o = a.next(); !o.done; o = a.next())
                            (r = o.value),
                              t.push(
                                new P(n, [
                                  new V('gestCouleurMin' + n.toString(), 'Seuil min', 'lowerLimitMin', 'text', !1, 'Seuil min', void 0),
                                  new V('gestCouleurMax' + n.toString(), 'Seuil max', 'lowerLimitMax', 'text', !1, 'Seuil max', void 0),
                                ])
                              ),
                              n++,
                              i.push(r);
                        } catch (e) {
                          l = { error: e };
                        } finally {
                          try {
                            o && !o.done && (c = a.return) && c.call(a);
                          } finally {
                            if (l) throw l.error;
                          }
                        }
                        return [4, this.setStateAsyncArrayInputClass({ arrayInputClass: t })];
                      case 1:
                        return s.sent(), [4, this.setStateAsyncLowerLimit({ lowerLimit: i })];
                      case 2:
                        return s.sent(), [4, this.setStateAsyncIndex({ index: n })];
                      case 3:
                        return s.sent(), [2];
                    }
                  });
                });
              }),
              (i.addMultipleVariation = function (e, t) {
                return l(i, void 0, void 0, function () {
                  return s(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return t ? [4, this.test(t)] : [3, 2];
                      case 1:
                        e.sent(), this.fillVarInput(), (e.label = 2);
                      case 2:
                        return [2];
                    }
                  });
                });
              }),
              (i.addVariation = function (e, t) {
                return l(i, void 0, void 0, function () {
                  var n, i;
                  return s(this, function (a) {
                    switch (a.label) {
                      case 0:
                        (n = 0), (a.label = 1);
                      case 1:
                        return n < e
                          ? ((i = t ? t[n] : new z(n, '', '', '', '', '')),
                            this.props.isLink && (i = t ? t[n] : new z(n, '', '', '', '', '10')),
                            [4, this.addInput(n, i)])
                          : [3, 4];
                      case 2:
                        a.sent(), (a.label = 3);
                      case 3:
                        return n++, [3, 1];
                      case 4:
                        return this.fillVarInput(), [2];
                    }
                  });
                });
              }),
              (i.onClickVariation = function () {
                return l(i, void 0, void 0, function () {
                  var e;
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, this.setStateAsyncArrayInputClass({ arrayInputClass: [] })];
                      case 1:
                        return t.sent(), [4, this.setStateAsyncIndex({ index: 0 })];
                      case 2:
                        return t.sent(), [4, this.setStateAsyncLowerLimit({ lowerLimit: [] })];
                      case 3:
                        return t.sent(), this.setState({ displayInput: !0 }), (e = parseInt(this.state.nbVariation, 10)), [4, this.addVariation(e)];
                      case 4:
                        return t.sent(), [2];
                    }
                  });
                });
              }),
              (i.fillVarInput = function () {
                var e,
                  t,
                  n = [];
                if (0 !== i.state.lowerLimit.length) {
                  var a = 0,
                    o = function (e) {
                      if (e.uneClassInput.length <= 0) return i.setState({ dynamicInput: u.a.createElement('br', null) }), { value: void 0 };
                      var t = e.uneClassInput.map(function (t) {
                        return u.a.createElement(G, {
                          key: t.id,
                          label: t.label,
                          name: t.name,
                          placeholder: t.placeholder || '',
                          required: t.required,
                          value:
                            'lowerLimitMin' === t.name
                              ? 0 === e.id
                                ? '-∞'
                                : i.state.lowerLimit[a].lowerLimitMin
                              : e.id === i.state.index - 1
                              ? '+∞'
                              : i.state.lowerLimit[a].lowerLimitMax,
                          _handleChange: function (n) {
                            return i.handleValueChange(n.currentTarget.value, t.name, e.id);
                          },
                          disabled: 'lowerLimitMin' === t.name || e.id === i.state.index - 1,
                        });
                      });
                      a++;
                      var o = i.addButtonColor(e.id),
                        r = e.id.toString() + 'brGestColor';
                      n = n.concat(t.concat(o.concat(u.a.createElement('br', { key: r }))));
                    };
                  try {
                    for (var r = p(i.state.arrayInputClass), l = r.next(); !l.done; l = r.next()) {
                      var s = o(l.value);
                      if ('object' === X(s)) return s.value;
                    }
                  } catch (t) {
                    e = { error: t };
                  } finally {
                    try {
                      l && !l.done && (t = r.return) && t.call(r);
                    } finally {
                      if (e) throw e.error;
                    }
                  }
                  i.setState({ dynamicInput: u.a.createElement('ul', null, n) });
                } else i.setState({ dynamicInput: u.a.createElement('br', null) });
              }),
              (i.infoSeuil = function () {}),
              (i.componentDidMount = function () {
                if (i.props.lowerLimit.length > 0) {
                  var e = parseInt(i.state.nbVariation, 10);
                  i.addMultipleVariation(e, i.props.lowerLimit);
                }
              }),
              (i.componentDidUpdate = function (e) {
                (e.traceBorder === i.props.traceBorder && e.traceBack === i.props.traceBack) || i.fillVarInput();
              }),
              (i.state = {
                arrayInputClass: [],
                lowerLimit: [],
                index: 0,
                nbVariation: '3',
                dynamicInput: u.a.createElement('br', null),
                displayInput: !1,
              }),
              i
            );
          }
          return (
            o(t, e),
            (t.prototype.render = function () {
              var e = n(2);
              return u.a.createElement(
                'div',
                null,
                u.a.createElement(G, {
                  label: e.colorVariable.variationNumber,
                  name: 'nbVariation',
                  placeholder: e.colorVariable.number,
                  required: !0,
                  value: this.state.nbVariation,
                  _handleChange: this.onChangeVariation,
                }),
                u.a.createElement(d.Button, { onClick: this.onClickVariation }, e.colorVariable.addColor),
                u.a.createElement('br', null),
                u.a.createElement('br', null),
                this.state.dynamicInput
              );
            }),
            t
          );
        })(u.a.Component),
        _ = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.setStateAsyncCoordinate = function (e) {
                return new Promise(function (t) {
                  n.setState(e, t);
                });
              }),
              (n.setStateAsyncOpenLowerLimit = function (e) {
                return new Promise(function (t) {
                  n.setState(e, t);
                });
              }),
              (n.onSave = function () {
                n.props.callBack(n.props.coordinate), n.props.lowerLimitCallBack(n.state.coordinate.lowerLimit);
              }),
              (n.onSwitchFond = function () {
                return l(n, void 0, void 0, function () {
                  var e;
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return ((e = this.state.coordinate).traceBack = !e.traceBack), [4, this.setStateAsyncCoordinate({ coordinate: e })];
                      case 1:
                        return t.sent(), this.onSave(), [2];
                    }
                  });
                });
              }),
              (n.onSwitchContour = function () {
                return l(n, void 0, void 0, function () {
                  var e;
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return ((e = this.state.coordinate).traceBorder = !e.traceBorder), [4, this.setStateAsyncCoordinate({ coordinate: e })];
                      case 1:
                        return t.sent(), this.onSave(), [2];
                    }
                  });
                });
              }),
              (n.onSwitchColorMode = function () {
                return l(n, void 0, void 0, function () {
                  var e, t;
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          ((e = this.state.coordinate).colorMode = !e.colorMode),
                          this.state.coordinate.colorMode
                            ? [3, 2]
                            : ((t = ''),
                              this.props.isLink && (t = '10'),
                              (e.lowerLimit = [new z(0, '', '', '', '', t)]),
                              [4, this.setStateAsyncCoordinate({ coordinate: e })])
                        );
                      case 1:
                        return n.sent(), [3, 4];
                      case 2:
                        return (e.lowerLimit = []), [4, this.setStateAsyncCoordinate({ coordinate: e })];
                      case 3:
                        n.sent(), (n.label = 4);
                      case 4:
                        return this.onSave(), [2];
                    }
                  });
                });
              }),
              (n.onToggleLowerLimit = function (e) {
                n.setState({ openLowerLimit: e });
              }),
              (n.componentDidUpdate = function (e) {
                return l(n, void 0, void 0, function () {
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return e.coordinate === this.state.coordinate ? [3, 3] : [4, this.setStateAsyncCoordinate({ coordinate: e.coordinate })];
                      case 1:
                        return t.sent(), [4, this.setStateAsyncOpenLowerLimit({ openLowerLimit: !1 })];
                      case 2:
                        t.sent(), (t.label = 3);
                      case 3:
                        return [2];
                    }
                  });
                });
              }),
              (n.state = { coordinate: n.props.coordinate, openLowerLimit: !1 }),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype.render = function () {
              var e = n(2);
              return u.a.createElement(
                'div',
                null,
                u.a.createElement(
                  d.Collapse,
                  { label: 'Lower limit', isOpen: this.state.openLowerLimit, onToggle: this.onToggleLowerLimit },
                  u.a.createElement(
                    'div',
                    { style: { display: 'flex' } },
                    u.a.createElement(d.FormLabel, { width: 15 }, e.genericParameter.variableColor),
                    u.a.createElement(d.Switch, { label: '', checked: this.state.coordinate.colorMode, onChange: this.onSwitchColorMode })
                  ),
                  u.a.createElement('br', null),
                  u.a.createElement(
                    'div',
                    null,
                    u.a.createElement(
                      'div',
                      { style: { display: 'flex' } },
                      u.a.createElement(d.FormLabel, { width: 15 }, e.genericParameter.traceBackground),
                      u.a.createElement(d.Switch, { label: '', checked: this.state.coordinate.traceBack, onChange: this.onSwitchFond })
                    ),
                    u.a.createElement(
                      'div',
                      { style: { display: 'flex' } },
                      u.a.createElement(d.FormLabel, { width: 15 }, e.genericParameter.traceContour),
                      u.a.createElement(d.Switch, { label: '', checked: this.state.coordinate.traceBorder, onChange: this.onSwitchContour })
                    )
                  ),
                  this.state.coordinate.colorMode
                    ? u.a.createElement(N, {
                        traceBorder: this.state.coordinate.traceBorder,
                        traceBack: this.state.coordinate.traceBack,
                        lowerLimit: this.state.coordinate.lowerLimit,
                        lowerLimitCallBack: this.props.lowerLimitCallBack,
                        isLink: this.props.isLink,
                      })
                    : u.a.createElement(W, {
                        options: this.props.options,
                        onOptionsChange: this.props.onOptionsChange,
                        data: this.props.data,
                        traceBorder: this.state.coordinate.traceBorder,
                        traceBack: this.state.coordinate.traceBack,
                        lowerLimit: this.state.coordinate.lowerLimit,
                        lowerLimitCallBack: this.props.lowerLimitCallBack,
                        isLink: this.props.isLink,
                      })
                )
              );
            }),
            t
          );
        })(u.a.Component),
        Q = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.callBack = function () {
                n.props.callBackToParent(n.state.mainMetric, n.props.id);
              }),
              (n.callBackB = function () {
                n.props.callBackToParentMainMetricB && n.props.callBackToParentMainMetricB(n.state.mainMetricB, n.props.id);
              }),
              (n.getMainMetricB = function () {
                var e,
                  t,
                  i = {},
                  a = n.props.options.arrayOrientedLinks;
                try {
                  for (var o = p(a), r = o.next(); !r.done; r = o.next()) {
                    var l = r.value;
                    l.id === n.props.idCoordinate && (i = l.mainMetricB);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    r && !r.done && (t = o.return) && t.call(o);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return i;
              }),
              (n.onChangeSelectManageValue = function (e) {
                var t = n.state.mainMetric;
                (t.manageValue = e.value || 'err'), n.setState({ mainMetric: t }), n.callBack();
              }),
              (n.onChangeSelectManageValueB = function (e) {
                var t = n.state.mainMetricB;
                (t.manageValue = e.value || 'err'), n.setState({ mainMetricB: t }), n.callBackB();
              }),
              (n._handleChangeKey = function (e) {
                var t = n.state.mainMetric;
                (t.key = e), n.setState({ mainMetric: t }), n.callBack();
              }),
              (n._handleChangeKeyB = function (e) {
                var t = n.state.mainMetricB;
                (t.key = e), n.setState({ mainMetricB: t }), n.callBackB();
              }),
              (n._handleChangeKeyValue = function (e) {
                var t = n.state.mainMetric;
                (t.keyValue = e), n.setState({ mainMetric: t }), n.callBack();
              }),
              (n._handleChangeKeyValueB = function (e) {
                var t = n.state.mainMetricB;
                (t.keyValue = e), n.setState({ mainMetricB: t }), n.callBackB();
              }),
              (n.onChangeSelectQuery = function (e) {
                var t,
                  i = n.state.mainMetric;
                (i.refId = (null === (t = e.value) || void 0 === t ? void 0 : t.refId) || ''),
                  (i.expr = ''),
                  n.setState({ mainMetric: i, selectQueryDefault: e }),
                  n.callBack();
              }),
              (n.onChangeSelectQueryB = function (e) {
                var t,
                  i = n.state.mainMetricB;
                (i.refId = (null === (t = e.value) || void 0 === t ? void 0 : t.refId) || ''),
                  (i.expr = ''),
                  n.setState({ mainMetricB: i }),
                  n.callBackB();
              }),
              (n.onToggleMainMetric = function (e) {
                n.setState({ collapseMainMetric: e });
              }),
              (n.onToggleLinkA = function (e) {
                n.setState({ collapseLinkA: e });
              }),
              (n.onToggleLinkB = function (e) {
                n.setState({ collapseLinkB: e });
              }),
              (n.getDefaultQueryB = function () {
                var e,
                  t,
                  i = { label: 'No value', value: void 0 },
                  a = n.state.mainMetricB;
                try {
                  for (var o = p(n.state.selectQuery), r = o.next(); !r.done; r = o.next()) {
                    var l = r.value;
                    a.refId && a.refId === l.label && (i = l);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    r && !r.done && (t = o.return) && t.call(o);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return i;
              }),
              (n.getDefaultManageValue = function () {
                var e,
                  t,
                  i = { label: 'avg', value: 'avg' },
                  a = n.state.mainMetric;
                try {
                  for (var o = p(n.state.selectManageValue), r = o.next(); !r.done; r = o.next()) {
                    var l = r.value;
                    a.manageValue && a.manageValue === l.value && (i = l);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    r && !r.done && (t = o.return) && t.call(o);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return i;
              }),
              (n.getDefaultManageValueB = function () {
                var e,
                  t,
                  i = { label: 'avg', value: 'avg' },
                  a = n.state.mainMetricB;
                try {
                  for (var o = p(n.state.selectManageValue), r = o.next(); !r.done; r = o.next()) {
                    var l = r.value;
                    a.manageValue && a.manageValue === l.value && (i = l);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    r && !r.done && (t = o.return) && t.call(o);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return i;
              }),
              (n.fillSelectQuery = function () {
                var e,
                  t,
                  i,
                  a,
                  o,
                  r,
                  l,
                  s,
                  c,
                  u = [],
                  d = n.state.mainMetric;
                u.push({ value: void 0, label: 'No value' });
                try {
                  for (var h = p(n.props.data.series), f = h.next(); !f.done; f = h.next()) {
                    var m = f.value,
                      g = !1;
                    try {
                      for (var b = ((i = void 0), p(u)), y = b.next(); !y.done; y = b.next()) {
                        if ((null === (l = y.value.value) || void 0 === l ? void 0 : l.refId) === m.refId) {
                          g = !0;
                          break;
                        }
                      }
                    } catch (e) {
                      i = { error: e };
                    } finally {
                      try {
                        y && !y.done && (a = b.return) && a.call(b);
                      } finally {
                        if (i) throw i.error;
                      }
                    }
                    g || u.push({ value: m, label: m.refId });
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    f && !f.done && (t = h.return) && t.call(h);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                '' === d.refId && (d.refId = (u.length > 0 && (null === (s = u[0].value) || void 0 === s ? void 0 : s.refId)) || '');
                var v,
                  x = n.state.mainMetric.refId;
                if (((v = { value: void 0, label: 'No value' }), x))
                  try {
                    for (var k = p(u), C = k.next(); !C.done; C = k.next()) {
                      if ((null === (c = (m = C.value).value) || void 0 === c ? void 0 : c.refId) === x) {
                        v = m;
                        break;
                      }
                    }
                  } catch (e) {
                    o = { error: e };
                  } finally {
                    try {
                      C && !C.done && (r = k.return) && r.call(k);
                    } finally {
                      if (o) throw o.error;
                    }
                  }
                n.setState({ mainMetric: d, selectQuery: u, selectQueryDefault: v });
              }),
              (n.componentDidMount = function () {
                var e, t;
                n.fillSelectQuery();
                var i = [
                    { value: 'avg', label: 'average' },
                    { value: 'sum', label: 'total' },
                    { value: 'err', label: 'error' },
                  ],
                  a = i[0];
                try {
                  for (var o = p(i), r = o.next(); !r.done; r = o.next()) {
                    var l = r.value;
                    l.value === n.state.mainMetric.manageValue && (a = l);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    r && !r.done && (t = o.return) && t.call(o);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                n.setState({ selectManageValue: i, selectDefaultManageValue: a });
              }),
              (n.setStateAsyncMainMetric = function (e) {
                return new Promise(function (t) {
                  return n.setState(e, t);
                });
              }),
              (n.setStateAsyncMainMetricB = function (e) {
                return new Promise(function (t) {
                  return n.setState(e, t);
                });
              }),
              (n.componentDidUpdate = function (e) {
                return l(n, void 0, void 0, function () {
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return e.idCoordinate === this.props.idCoordinate
                          ? [3, 4]
                          : (this.setState({ collapseMainMetric: !1 }), [4, this.setStateAsyncMainMetric({ mainMetric: this.props.mainMetric })]);
                      case 1:
                        return (
                          t.sent(), this.props.mainMetricB ? [4, this.setStateAsyncMainMetricB({ mainMetricB: this.props.mainMetricB })] : [3, 3]
                        );
                      case 2:
                        t.sent(), (t.label = 3);
                      case 3:
                        this.fillSelectQuery(), (t.label = 4);
                      case 4:
                        return e.data.series !== this.props.data.series && this.fillSelectQuery(), [2];
                    }
                  });
                });
              }),
              (n.displayHtml = function () {
                var e,
                  t,
                  i,
                  a = n.props.options.arrayOrientedLinks;
                try {
                  for (var o = p(a), r = o.next(); !r.done; r = o.next()) {
                    var l = r.value;
                    l.id === n.props.idCoordinate && (i = l);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    r && !r.done && (t = o.return) && t.call(o);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return n.props.isLink && i && 'double' === i.orientationLink.value
                  ? u.a.createElement(
                      d.Collapse,
                      { isOpen: n.state.collapseMainMetric, label: 'Main metric', onToggle: n.onToggleMainMetric },
                      u.a.createElement(
                        d.Collapse,
                        { isOpen: n.state.collapseLinkA, label: 'Link A', onToggle: n.onToggleLinkA },
                        u.a.createElement(
                          'div',
                          { style: { display: 'flex' } },
                          u.a.createElement(d.FormLabel, { width: 15 }, 'Query'),
                          u.a.createElement(d.Select, {
                            onChange: function (e) {
                              return n.onChangeSelectQuery(e);
                            },
                            allowCustomValue: !1,
                            options: n.state.selectQuery,
                            width: 30,
                            value: n.state.selectQueryDefault,
                          })
                        ),
                        u.a.createElement(d.FormField, {
                          label: 'Key',
                          labelWidth: 15,
                          inputWidth: 30,
                          type: 'text',
                          value: n.state.mainMetric.key,
                          name: 'key',
                          onChange: function (e) {
                            return n._handleChangeKey(e.currentTarget.value);
                          },
                        }),
                        u.a.createElement(d.FormField, {
                          label: 'Value key',
                          labelWidth: 15,
                          inputWidth: 30,
                          type: 'text',
                          value: n.state.mainMetric.keyValue,
                          name: 'valueKey',
                          onChange: function (e) {
                            return n._handleChangeKeyValue(e.currentTarget.value);
                          },
                        }),
                        u.a.createElement(
                          'div',
                          { style: { display: 'flex' } },
                          u.a.createElement(d.FormLabel, { width: 15 }, 'Manipulate'),
                          u.a.createElement(d.Select, {
                            onChange: function (e) {
                              return n.onChangeSelectManageValue(e);
                            },
                            allowCustomValue: !1,
                            options: n.state.selectManageValue,
                            width: 30,
                            value: n.getDefaultManageValue(),
                          })
                        )
                      ),
                      u.a.createElement(
                        d.Collapse,
                        { isOpen: n.state.collapseLinkB, label: 'Link B', onToggle: n.onToggleLinkB },
                        u.a.createElement(
                          'div',
                          { style: { display: 'flex', marginTop: '10px' } },
                          u.a.createElement(d.FormLabel, { width: 15 }, 'Query'),
                          u.a.createElement(d.Select, {
                            onChange: function (e) {
                              return n.onChangeSelectQueryB(e);
                            },
                            allowCustomValue: !1,
                            options: n.state.selectQuery,
                            width: 30,
                            value: n.getDefaultQueryB(),
                          })
                        ),
                        u.a.createElement(d.FormField, {
                          label: 'Key',
                          labelWidth: 15,
                          inputWidth: 30,
                          type: 'text',
                          value: n.state.mainMetricB.key,
                          name: 'key',
                          onChange: function (e) {
                            return n._handleChangeKeyB(e.currentTarget.value);
                          },
                        }),
                        u.a.createElement(d.FormField, {
                          label: 'Value key',
                          labelWidth: 15,
                          inputWidth: 30,
                          type: 'text',
                          value: n.state.mainMetricB.keyValue,
                          name: 'valueKey',
                          onChange: function (e) {
                            return n._handleChangeKeyValueB(e.currentTarget.value);
                          },
                        }),
                        u.a.createElement(
                          'div',
                          { style: { display: 'flex' } },
                          u.a.createElement(d.FormLabel, { width: 15 }, 'Manipulate'),
                          u.a.createElement(d.Select, {
                            onChange: function (e) {
                              return n.onChangeSelectManageValueB(e);
                            },
                            allowCustomValue: !1,
                            options: n.state.selectManageValue,
                            width: 30,
                            value: n.getDefaultManageValueB(),
                          })
                        )
                      )
                    )
                  : u.a.createElement(
                      d.Collapse,
                      { isOpen: n.state.collapseMainMetric, label: 'Main metric', onToggle: n.onToggleMainMetric },
                      u.a.createElement(
                        'div',
                        { style: { display: 'flex' } },
                        u.a.createElement(d.FormLabel, { width: 15 }, 'Query'),
                        u.a.createElement(d.Select, {
                          onChange: function (e) {
                            return n.onChangeSelectQuery(e);
                          },
                          allowCustomValue: !1,
                          options: n.state.selectQuery,
                          width: 30,
                          value: n.state.selectQueryDefault,
                        })
                      ),
                      u.a.createElement(d.FormField, {
                        label: 'Key',
                        labelWidth: 15,
                        inputWidth: 30,
                        type: 'text',
                        value: n.state.mainMetric.key,
                        name: 'key',
                        onChange: function (e) {
                          return n._handleChangeKey(e.currentTarget.value);
                        },
                      }),
                      u.a.createElement(d.FormField, {
                        label: 'Value key',
                        labelWidth: 15,
                        inputWidth: 30,
                        type: 'text',
                        value: n.state.mainMetric.keyValue,
                        name: 'valueKey',
                        onChange: function (e) {
                          return n._handleChangeKeyValue(e.currentTarget.value);
                        },
                      }),
                      u.a.createElement(
                        'div',
                        { style: { display: 'flex' } },
                        u.a.createElement(d.FormLabel, { width: 15 }, 'Manipulate'),
                        u.a.createElement(d.Select, {
                          onChange: function (e) {
                            return n.onChangeSelectManageValue(e);
                          },
                          allowCustomValue: !1,
                          options: n.state.selectManageValue,
                          width: 30,
                          value: n.getDefaultManageValue(),
                        })
                      )
                    );
              }),
              (n.state = {
                mainMetric: n.props.mainMetric,
                mainMetricB: n.props.mainMetricB || { key: '', unit: '', format: '', keyValue: '', refId: '', manageValue: 'avg' },
                collapseMainMetric: !1,
                collapseLinkA: !1,
                collapseLinkB: !1,
                selectManageValue: [],
                selectDefaultManageValue: { value: 'avg', label: 'avg' },
                selectQuery: [],
                selectQueryDefault: [],
              }),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype.render = function () {
              return u.a.createElement('div', null, this.displayHtml());
            }),
            t
          );
        })(u.a.Component),
        q = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.setStateAsyncFollowLink = function (e) {
                return new Promise(function (t) {
                  n.setState(e, t);
                });
              }),
              (n.setStateAsyncHoveringTooltipLink = function (e) {
                return new Promise(function (t) {
                  n.setState(e, t);
                });
              }),
              (n.setStateAsyncHoveringTooltipText = function (e) {
                return new Promise(function (t) {
                  n.setState(e, t);
                });
              }),
              (n.callBack = function () {
                n.props.callBackToParent(n.state.followLink, n.state.hoveringTooltipLink, n.state.hoveringTooltipText, void 0);
              }),
              (n.onChangeFollowLink = function (e) {
                return l(n, void 0, void 0, function () {
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, this.setStateAsyncFollowLink({ followLink: e })];
                      case 1:
                        return t.sent(), this.callBack(), [2];
                    }
                  });
                });
              }),
              (n.onChangeHoveringTooltipLink = function (e) {
                return l(n, void 0, void 0, function () {
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, this.setStateAsyncHoveringTooltipLink({ hoveringTooltipLink: e })];
                      case 1:
                        return t.sent(), this.callBack(), [2];
                    }
                  });
                });
              }),
              (n.onChangeHoveringTooltipText = function (e) {
                return l(n, void 0, void 0, function () {
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, this.setStateAsyncHoveringTooltipText({ hoveringTooltipText: e })];
                      case 1:
                        return t.sent(), this.callBack(), [2];
                    }
                  });
                });
              }),
              (n.state = {
                followLink: n.props.coordinateSpace.linkURL.followLink,
                hoveringTooltipLink: n.props.coordinateSpace.linkURL.hoveringTooltipLink,
                hoveringTooltipText: n.props.coordinateSpace.linkURL.hoveringTooltipText,
              }),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype.componentDidUpdate = function (e) {
              e.coordinateSpace.id !== this.props.coordinateSpace.id &&
                this.setState({
                  followLink: e.coordinateSpace.linkURL.followLink,
                  hoveringTooltipLink: e.coordinateSpace.linkURL.hoveringTooltipLink,
                  hoveringTooltipText: e.coordinateSpace.linkURL.hoveringTooltipText,
                });
            }),
            (t.prototype.render = function () {
              var e = this,
                t = n(2);
              return u.a.createElement(
                'div',
                null,
                u.a.createElement(G, {
                  label: t.metricPrincipalSetting.followLink,
                  name: 'followLink',
                  placeholder: t.metricPrincipalSetting.link,
                  required: !1,
                  value: this.state.followLink,
                  _handleChange: function (t) {
                    return e.onChangeFollowLink(t.currentTarget.value);
                  },
                }),
                u.a.createElement(G, {
                  label: t.metricPrincipalSetting.linkTooltip,
                  name: 'linkTooltip',
                  placeholder: t.metricPrincipalSetting.link,
                  required: !1,
                  value: this.state.hoveringTooltipLink,
                  _handleChange: function (t) {
                    return e.onChangeHoveringTooltipLink(t.currentTarget.value);
                  },
                }),
                u.a.createElement(G, {
                  label: t.metricPrincipalSetting.textInTooltip,
                  name: 'textTooltip',
                  placeholder: t.metricPrincipalSetting.text,
                  required: !1,
                  value: this.state.hoveringTooltipText,
                  _handleChange: function (t) {
                    return e.onChangeHoveringTooltipText(t.currentTarget.value);
                  },
                }),
                u.a.createElement('br', null),
                u.a.createElement('br', null)
              );
            }),
            t
          );
        })(u.a.Component),
        H = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.callBack = function () {
                n.props.saveParent(n.state.style);
              }),
              (n.onChangeBold = function () {
                var e = n.state.style;
                (e.bold = !e.bold), n.setState({ style: e }), n.callBack();
              }),
              (n.onChangeItalic = function () {
                var e = n.state.style;
                (e.italic = !e.italic), n.setState({ style: e }), n.callBack();
              }),
              (n.onChangeUnderline = function () {
                var e = n.state.style;
                (e.underline = !e.underline), n.setState({ style: e }), n.callBack();
              }),
              (n.state = { style: n.props.oldStyle }),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype.render = function () {
              return u.a.createElement(
                'section',
                null,
                u.a.createElement(
                  'div',
                  { style: { display: 'flex' } },
                  u.a.createElement(d.FormLabel, { width: 15 }, 'Bold'),
                  u.a.createElement(d.Switch, { label: '', checked: this.state.style.bold, onChange: this.onChangeBold })
                ),
                u.a.createElement(
                  'div',
                  { style: { display: 'flex' } },
                  u.a.createElement(d.FormLabel, { width: 15 }, 'Italic'),
                  u.a.createElement(d.Switch, { label: '', checked: this.state.style.italic, onChange: this.onChangeItalic })
                ),
                u.a.createElement(
                  'div',
                  { style: { display: 'flex' } },
                  u.a.createElement(d.FormLabel, { width: 15 }, 'Underline'),
                  u.a.createElement(d.Switch, { label: '', checked: this.state.style.underline, onChange: this.onChangeUnderline })
                )
              );
            }),
            t
          );
        })(u.a.Component),
        K = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.stateAsyncTextObject = function (e) {
                return new Promise(function (t) {
                  n.setState(e, t);
                });
              }),
              (n.callBack = function () {
                n.props.callBackToParent(void 0, void 0, void 0, n.state.textObject);
              }),
              (n.onChangeValeur = function (e) {
                return l(n, void 0, void 0, function () {
                  var t;
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return ((t = this.state.textObject).value = e), [4, this.stateAsyncTextObject({ textObject: t })];
                      case 1:
                        return n.sent(), this.callBack(), [2];
                    }
                  });
                });
              }),
              (n.onChangeBackColor = function (e, t) {
                return l(n, void 0, void 0, function () {
                  var e;
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return ((e = this.state.textObject).colorBack = t), [4, this.stateAsyncTextObject({ textObject: e })];
                      case 1:
                        return n.sent(), this.callBack(), [2];
                    }
                  });
                });
              }),
              (n.onChangeColorText = function (e, t) {
                return l(n, void 0, void 0, function () {
                  var e;
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return ((e = this.state.textObject).colorText = t), [4, this.stateAsyncTextObject({ textObject: e })];
                      case 1:
                        return n.sent(), this.callBack(), [2];
                    }
                  });
                });
              }),
              (n.onSwitchGenerateObjectText = function () {
                return l(n, void 0, void 0, function () {
                  var e;
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          ((e = this.state.textObject).generateObjectText = !this.state.textObject.generateObjectText),
                          [4, this.stateAsyncTextObject({ textObject: e })]
                        );
                      case 1:
                        return t.sent(), this.callBack(), [2];
                    }
                  });
                });
              }),
              (n.onChangeLegendElement = function (e) {
                return l(n, void 0, void 0, function () {
                  var t;
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          ((t = this.state.textObject).generateAuxiliaryElement.legendElement = e.currentTarget.value),
                          [4, this.stateAsyncTextObject({ textObject: t })]
                        );
                      case 1:
                        return n.sent(), this.callBack(), [2];
                    }
                  });
                });
              }),
              (n.onChangeunit = function (e) {
                return l(n, void 0, void 0, function () {
                  var t;
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          ((t = this.state.textObject).generateAuxiliaryElement.unit = e.currentTarget.value),
                          [4, this.stateAsyncTextObject({ textObject: t })]
                        );
                      case 1:
                        return n.sent(), this.callBack(), [2];
                    }
                  });
                });
              }),
              (n.onChangeFormatageNumeriqueTextObject = function (e) {
                return l(n, void 0, void 0, function () {
                  var t;
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          ((t = this.state.textObject).generateAuxiliaryElement.numericFormatElement = e.currentTarget.value),
                          [4, this.stateAsyncTextObject({ textObject: t })]
                        );
                      case 1:
                        return n.sent(), this.callBack(), [2];
                    }
                  });
                });
              }),
              (n.onSwitchdisplayObjectInTooltip = function () {
                return l(n, void 0, void 0, function () {
                  var e;
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          ((e = this.state.textObject).generateAuxiliaryElement.displayObjectInTooltip = !this.state.textObject
                            .generateAuxiliaryElement.displayObjectInTooltip),
                          [4, this.stateAsyncTextObject({ textObject: e })]
                        );
                      case 1:
                        return t.sent(), this.callBack(), [2];
                    }
                  });
                });
              }),
              (n.onSwitchAddColorTextElement = function () {
                return l(n, void 0, void 0, function () {
                  var e;
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          ((e = this.state.textObject).generateAuxiliaryElement.addColorTextElement = !this.state.textObject.generateAuxiliaryElement
                            .addColorTextElement),
                          [4, this.stateAsyncTextObject({ textObject: e })]
                        );
                      case 1:
                        return t.sent(), this.callBack(), [2];
                    }
                  });
                });
              }),
              (n.onSwitchAddColorBackElement = function () {
                return l(n, void 0, void 0, function () {
                  var e;
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          ((e = this.state.textObject).generateAuxiliaryElement.addColorBackElement = !this.state.textObject.generateAuxiliaryElement
                            .addColorBackElement),
                          [4, this.stateAsyncTextObject({ textObject: e })]
                        );
                      case 1:
                        return t.sent(), this.callBack(), [2];
                    }
                  });
                });
              }),
              (n.onSwitchisTextTooltip = function () {
                return l(n, void 0, void 0, function () {
                  var e;
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          ((e = this.state.textObject).isTextTooltip = !this.state.textObject.isTextTooltip),
                          [4, this.stateAsyncTextObject({ textObject: e })]
                        );
                      case 1:
                        return t.sent(), this.callBack(), [2];
                    }
                  });
                });
              }),
              (n.onChangeColorTextElement = function (e, t) {
                return l(n, void 0, void 0, function () {
                  var e;
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          ((e = this.state.textObject).generateAuxiliaryElement.colorTextElement = t),
                          [4, this.stateAsyncTextObject({ textObject: e })]
                        );
                      case 1:
                        return n.sent(), this.callBack(), [2];
                    }
                  });
                });
              }),
              (n.onChangeColorBackElement = function (e, t) {
                return l(n, void 0, void 0, function () {
                  var e;
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          ((e = this.state.textObject).generateAuxiliaryElement.colorBackElement = t),
                          [4, this.stateAsyncTextObject({ textObject: e })]
                        );
                      case 1:
                        return n.sent(), this.callBack(), [2];
                    }
                  });
                });
              }),
              (n.onChangeValueGenerateObjectTextLegendElement = function (e) {
                return l(n, void 0, void 0, function () {
                  var t;
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          ((t = this.state.textObject).valueGenerateObjectText.legendElement = e.currentTarget.value),
                          [4, this.stateAsyncTextObject({ textObject: t })]
                        );
                      case 1:
                        return n.sent(), this.callBack(), [2];
                    }
                  });
                });
              }),
              (n.onChangeValueGenerateObjectTextunit = function (e) {
                return l(n, void 0, void 0, function () {
                  var t;
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          ((t = this.state.textObject).valueGenerateObjectText.unit = e.currentTarget.value),
                          [4, this.stateAsyncTextObject({ textObject: t })]
                        );
                      case 1:
                        return n.sent(), this.callBack(), [2];
                    }
                  });
                });
              }),
              (n.onChangeValueGenerateObjectTextFormatageNumeriqueTextObject = function (e) {
                return l(n, void 0, void 0, function () {
                  var t;
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          ((t = this.state.textObject).valueGenerateObjectText.numericFormatElement = e.currentTarget.value),
                          [4, this.stateAsyncTextObject({ textObject: t })]
                        );
                      case 1:
                        return n.sent(), this.callBack(), [2];
                    }
                  });
                });
              }),
              (n.onSwitchValueGenerateObjectTextdisplayObjectInTooltip = function () {
                return l(n, void 0, void 0, function () {
                  var e;
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          ((e = this.state.textObject).valueGenerateObjectText.displayObjectInTooltip = !this.state.textObject.valueGenerateObjectText
                            .displayObjectInTooltip),
                          [4, this.stateAsyncTextObject({ textObject: e })]
                        );
                      case 1:
                        return t.sent(), this.callBack(), [2];
                    }
                  });
                });
              }),
              (n.onSwitchValueGenerateObjectTextAddColorTextElement = function () {
                return l(n, void 0, void 0, function () {
                  var e;
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          ((e = this.state.textObject).valueGenerateObjectText.addColorTextElement = !this.state.textObject.valueGenerateObjectText
                            .addColorTextElement),
                          [4, this.stateAsyncTextObject({ textObject: e })]
                        );
                      case 1:
                        return t.sent(), this.callBack(), [2];
                    }
                  });
                });
              }),
              (n.onSwitchValueGenerateObjectTextAddColorBackElement = function () {
                return l(n, void 0, void 0, function () {
                  var e;
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          ((e = this.state.textObject).valueGenerateObjectText.addColorBackElement = !this.state.textObject.valueGenerateObjectText
                            .addColorBackElement),
                          [4, this.stateAsyncTextObject({ textObject: e })]
                        );
                      case 1:
                        return t.sent(), this.callBack(), [2];
                    }
                  });
                });
              }),
              (n.onChangeValueGenerateObjectTextColorTextElement = function (e, t) {
                return l(n, void 0, void 0, function () {
                  var e;
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          ((e = this.state.textObject).valueGenerateObjectText.colorTextElement = t),
                          [4, this.stateAsyncTextObject({ textObject: e })]
                        );
                      case 1:
                        return n.sent(), this.callBack(), [2];
                    }
                  });
                });
              }),
              (n.onChangeValueGenerateObjectTextColorBackElement = function (e, t) {
                return l(n, void 0, void 0, function () {
                  var e;
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          ((e = this.state.textObject).valueGenerateObjectText.colorBackElement = t),
                          [4, this.stateAsyncTextObject({ textObject: e })]
                        );
                      case 1:
                        return n.sent(), this.callBack(), [2];
                    }
                  });
                });
              }),
              (n.saveData = function (e) {
                var t = n.state.textObject;
                (t.style = e), n.setState({ textObject: t }), n.callBack();
              }),
              (n.state = { textObject: n.props.coordinateSpace.textObj }),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype.render = function () {
              var e = n(2);
              return u.a.createElement(
                'div',
                null,
                u.a.createElement(
                  'div',
                  null,
                  u.a.createElement('h4', null, e.textObject.principalMetric),
                  u.a.createElement(
                    'div',
                    { style: { display: 'flex' } },
                    u.a.createElement(d.FormLabel, { width: 15 }, 'Display text in region or tooltip'),
                    u.a.createElement(d.Switch, { label: '', checked: this.state.textObject.isTextTooltip, onChange: this.onSwitchisTextTooltip })
                  ),
                  u.a.createElement('h5', { hidden: this.state.textObject.isTextTooltip }, e.textObject.textRegion),
                  u.a.createElement('h5', { hidden: !this.state.textObject.isTextTooltip }, e.textObject.textBubble),
                  u.a.createElement(Y, {
                    color: this.state.textObject.colorBack,
                    keyInt: 0,
                    text: e.textObject.colorBackground,
                    _onChange: this.onChangeBackColor,
                  }),
                  u.a.createElement(Y, {
                    color: this.state.textObject.colorText,
                    keyInt: 0,
                    text: e.textObject.colorText,
                    _onChange: this.onChangeColorText,
                  }),
                  u.a.createElement(H, { oldStyle: this.state.textObject.style, saveParent: this.saveData }),
                  u.a.createElement('br', null),
                  u.a.createElement('br', null)
                ),
                u.a.createElement(
                  'div',
                  null,
                  u.a.createElement('h4', null, 'Generate text object'),
                  u.a.createElement(
                    'div',
                    { style: { display: 'flex' } },
                    u.a.createElement(d.FormLabel, { width: 15 }, e.textObject.generateTextObject),
                    u.a.createElement(d.Switch, {
                      label: '',
                      checked: this.state.textObject.generateObjectText,
                      onChange: this.onSwitchGenerateObjectText,
                    })
                  ),
                  this.state.textObject.generateObjectText &&
                    u.a.createElement(
                      'div',
                      null,
                      u.a.createElement(G, {
                        label: e.textObject.legend,
                        name: 'legendTextObject',
                        placeholder: e.textObject.legend,
                        required: !1,
                        value: this.state.textObject.valueGenerateObjectText.legendElement,
                        _handleChange: this.onChangeValueGenerateObjectTextLegendElement,
                      }),
                      u.a.createElement(G, {
                        label: e.textObject.digitalFormatting,
                        name: 'formatageNumeriqueTextObject',
                        placeholder: e.textObject.digitalFormatting,
                        required: !1,
                        value: this.state.textObject.valueGenerateObjectText.numericFormatElement,
                        _handleChange: this.onChangeValueGenerateObjectTextFormatageNumeriqueTextObject,
                      }),
                      u.a.createElement(G, {
                        label: e.textObject.mesureUnit,
                        name: 'mesureUnityTextObject',
                        placeholder: e.textObject.unit,
                        required: !1,
                        value: this.state.textObject.valueGenerateObjectText.unit,
                        _handleChange: this.onChangeValueGenerateObjectTextunit,
                      }),
                      u.a.createElement(
                        'div',
                        { style: { display: 'flex' } },
                        u.a.createElement(d.FormLabel, { width: 15 }, e.textObject.objectDisplayTextTooltip),
                        u.a.createElement(d.Switch, {
                          label: '',
                          checked: this.state.textObject.valueGenerateObjectText.displayObjectInTooltip,
                          onChange: this.onSwitchValueGenerateObjectTextdisplayObjectInTooltip,
                        })
                      ),
                      u.a.createElement(
                        'div',
                        { style: { display: 'flex' } },
                        u.a.createElement(d.FormLabel, { width: 15 }, e.textObject.colorText),
                        u.a.createElement(d.Switch, {
                          label: '',
                          checked: this.state.textObject.valueGenerateObjectText.addColorTextElement,
                          onChange: this.onSwitchValueGenerateObjectTextAddColorTextElement,
                        })
                      ),
                      this.state.textObject.valueGenerateObjectText.addColorTextElement &&
                        u.a.createElement(Y, {
                          color: this.state.textObject.valueGenerateObjectText.colorTextElement,
                          keyInt: 0,
                          text: e.textObject.colorTextOptional,
                          _onChange: this.onChangeValueGenerateObjectTextColorTextElement,
                        }),
                      u.a.createElement(
                        'div',
                        { style: { display: 'flex' } },
                        u.a.createElement(d.FormLabel, { width: 15 }, e.textObject.backgroundColor),
                        u.a.createElement(d.Switch, {
                          label: '',
                          checked: this.state.textObject.valueGenerateObjectText.addColorBackElement,
                          onChange: this.onSwitchValueGenerateObjectTextAddColorBackElement,
                        })
                      ),
                      this.state.textObject.valueGenerateObjectText.addColorBackElement &&
                        u.a.createElement(Y, {
                          color: this.state.textObject.valueGenerateObjectText.colorBackElement,
                          keyInt: 0,
                          text: e.textObject.optionalBackgroundColor,
                          _onChange: this.onChangeValueGenerateObjectTextColorBackElement,
                        })
                    ),
                  u.a.createElement('br', null),
                  u.a.createElement('br', null)
                ),
                u.a.createElement(
                  'div',
                  null,
                  u.a.createElement('h4', null, e.textObject.auxiliaryElement),
                  u.a.createElement(G, {
                    label: e.textObject.legend,
                    name: 'legendTextObject',
                    placeholder: e.textObject.legend,
                    required: !1,
                    value: this.state.textObject.generateAuxiliaryElement.legendElement,
                    _handleChange: this.onChangeLegendElement,
                  }),
                  u.a.createElement(G, {
                    label: e.textObject.digitalFormatting,
                    name: 'formatageNumeriqueTextObject',
                    placeholder: e.textObject.digitalFormatting,
                    required: !1,
                    value: this.state.textObject.generateAuxiliaryElement.numericFormatElement,
                    _handleChange: this.onChangeFormatageNumeriqueTextObject,
                  }),
                  u.a.createElement(G, {
                    label: e.textObject.mesureUnit,
                    name: 'mesureUnityTextObject',
                    placeholder: e.textObject.unit,
                    required: !1,
                    value: this.state.textObject.generateAuxiliaryElement.unit,
                    _handleChange: this.onChangeunit,
                  }),
                  u.a.createElement(
                    'div',
                    { style: { display: 'flex' } },
                    u.a.createElement(d.FormLabel, { width: 15 }, e.textObject.objectDisplayTextTooltip),
                    u.a.createElement(d.Switch, {
                      label: '',
                      checked: this.state.textObject.generateAuxiliaryElement.displayObjectInTooltip,
                      onChange: this.onSwitchdisplayObjectInTooltip,
                    })
                  ),
                  u.a.createElement(
                    'div',
                    { style: { display: 'flex' } },
                    u.a.createElement(d.FormLabel, { width: 15 }, e.textObject.colorText),
                    u.a.createElement(d.Switch, {
                      label: '',
                      checked: this.state.textObject.generateAuxiliaryElement.addColorTextElement,
                      onChange: this.onSwitchAddColorTextElement,
                    })
                  ),
                  this.state.textObject.generateAuxiliaryElement.addColorTextElement &&
                    u.a.createElement(Y, {
                      color: this.state.textObject.generateAuxiliaryElement.colorTextElement,
                      keyInt: 0,
                      text: e.textObject.colorTextOptional,
                      _onChange: this.onChangeColorTextElement,
                    }),
                  u.a.createElement(
                    'div',
                    { style: { display: 'flex' } },
                    u.a.createElement(d.FormLabel, { width: 15 }, e.textObject.backgroundColor),
                    u.a.createElement(d.Switch, {
                      label: '',
                      checked: this.state.textObject.generateAuxiliaryElement.addColorBackElement,
                      onChange: this.onSwitchAddColorBackElement,
                    })
                  ),
                  this.state.textObject.generateAuxiliaryElement.addColorBackElement &&
                    u.a.createElement(Y, {
                      color: this.state.textObject.generateAuxiliaryElement.colorBackElement,
                      keyInt: 0,
                      text: e.textObject.optionalBackgroundColor,
                      _onChange: this.onChangeColorBackElement,
                    }),
                  u.a.createElement('br', null),
                  u.a.createElement('br', null)
                )
              );
            }),
            t
          );
        })(u.a.Component),
        J = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.onToggleLinkCollapse = function (e) {
                n.setState({ collapseLink: e });
              }),
              (n.onToggleTextObject = function (e) {
                n.setState({ collapseTextObject: e });
              }),
              (n.componentDidUpdate = function (e) {
                e.coordinateSpace !== n.props.coordinateSpace && n.setState({ collapseLink: !1, collapseTextObject: !1 });
              }),
              (n.state = { collapseLink: !1, collapseTextObject: !1 }),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype.render = function () {
              return u.a.createElement(
                'div',
                null,
                u.a.createElement(
                  d.Collapse,
                  { isOpen: this.state.collapseLink, label: 'Manage link', onToggle: this.onToggleLinkCollapse },
                  u.a.createElement(
                    'div',
                    null,
                    u.a.createElement(q, { coordinateSpace: this.props.coordinateSpace, callBackToParent: this.props.callBackToParent })
                  )
                ),
                u.a.createElement(
                  d.Collapse,
                  { isOpen: this.state.collapseTextObject, label: 'Text object', onToggle: this.onToggleTextObject },
                  u.a.createElement(
                    'div',
                    null,
                    u.a.createElement(K, { coordinateSpace: this.props.coordinateSpace, callBackToParent: this.props.callBackToParent })
                  )
                )
              );
            }),
            t
          );
        })(u.a.Component),
        Z =
          (n(6),
          (function (e) {
            function t(t) {
              var n = e.call(this, t) || this;
              return (
                (n.saveAuxMetrics = function (e, t) {
                  var i,
                    a,
                    o,
                    l,
                    s,
                    c,
                    u = n.props.idCoordinate;
                  if (n.props.isPoint) {
                    var d = n.props.options.arrayPoints;
                    try {
                      for (var h = p(d), f = h.next(); !f.done; f = h.next()) {
                        var m = f.value;
                        m.id === u && (m.metrics = e);
                      }
                    } catch (e) {
                      i = { error: e };
                    } finally {
                      try {
                        f && !f.done && (a = h.return) && a.call(h);
                      } finally {
                        if (i) throw i.error;
                      }
                    }
                    n.props.onOptionsChange(r(r({}, n.props.options), { arrayPoints: d }));
                  } else if (n.props.isLink) {
                    var g = n.props.options.arrayOrientedLinks;
                    try {
                      for (var b = p(g), y = b.next(); !y.done; y = b.next()) {
                        var v = y.value;
                        v.id === u && (t ? (v.metricsB = e) : (v.metrics = e));
                      }
                    } catch (e) {
                      o = { error: e };
                    } finally {
                      try {
                        y && !y.done && (l = b.return) && l.call(b);
                      } finally {
                        if (o) throw o.error;
                      }
                    }
                    n.props.onOptionsChange(r(r({}, n.props.options), { arrayOrientedLinks: g }));
                  } else if (n.props.isRegion) {
                    var x = n.props.options.regionCoordinateSpace;
                    try {
                      for (var k = p(x), C = k.next(); !C.done; C = k.next()) {
                        var I = C.value;
                        I.id === u && (I.metrics = e);
                      }
                    } catch (e) {
                      s = { error: e };
                    } finally {
                      try {
                        C && !C.done && (c = k.return) && c.call(k);
                      } finally {
                        if (s) throw s.error;
                      }
                    }
                    n.props.onOptionsChange(r(r({}, n.props.options), { regionCoordinateSpace: x }));
                  }
                }),
                (n.getAuxiliaryMetrics = function (e) {
                  var t,
                    i,
                    a,
                    o,
                    r,
                    l,
                    s = [],
                    c = n.props.idCoordinate;
                  if (n.props.isLink) {
                    var u = n.props.options.arrayOrientedLinks;
                    try {
                      for (var d = p(u), h = d.next(); !h.done; h = d.next()) {
                        var f = h.value;
                        f.id === c && (s = e ? f.metricsB : f.metrics);
                      }
                    } catch (e) {
                      t = { error: e };
                    } finally {
                      try {
                        h && !h.done && (i = d.return) && i.call(d);
                      } finally {
                        if (t) throw t.error;
                      }
                    }
                  } else if (n.props.isPoint) {
                    var m = n.props.options.arrayPoints;
                    try {
                      for (var g = p(m), b = g.next(); !b.done; b = g.next()) {
                        var y = b.value;
                        y.id === c && (s = y.metrics);
                      }
                    } catch (e) {
                      a = { error: e };
                    } finally {
                      try {
                        b && !b.done && (o = g.return) && o.call(g);
                      } finally {
                        if (a) throw a.error;
                      }
                    }
                  } else if (n.props.isRegion) {
                    var v = n.props.options.regionCoordinateSpace;
                    try {
                      for (var x = p(v), k = x.next(); !k.done; k = x.next()) {
                        var C = k.value;
                        C.id === c && (s = C.metrics);
                      }
                    } catch (e) {
                      r = { error: e };
                    } finally {
                      try {
                        k && !k.done && (l = x.return) && l.call(x);
                      } finally {
                        if (r) throw r.error;
                      }
                    }
                  }
                  return s;
                }),
                (n.onToggleCollapse = function (e) {
                  n.setState({ collapse: e });
                }),
                (n.onToggleCollapseLinkA = function (e) {
                  n.setState({ collapseLinkA: e });
                }),
                (n.onToggleCollapseLinkB = function (e) {
                  n.setState({ collapseLinkB: e });
                }),
                (n.getAllQuery = function (e) {
                  var t,
                    i,
                    a,
                    o,
                    r,
                    l = [];
                  l.push({ id: e, value: void 0, label: 'No value' });
                  try {
                    for (var s = p(n.props.data.series), c = s.next(); !c.done; c = s.next()) {
                      var u = c.value,
                        d = !1;
                      try {
                        for (var h = ((a = void 0), p(l)), f = h.next(); !f.done; f = h.next()) {
                          if ((null === (r = f.value.value) || void 0 === r ? void 0 : r.refId) === u.refId) {
                            d = !0;
                            break;
                          }
                        }
                      } catch (e) {
                        a = { error: e };
                      } finally {
                        try {
                          f && !f.done && (o = h.return) && o.call(h);
                        } finally {
                          if (a) throw a.error;
                        }
                      }
                      d || l.push({ id: e, value: u, label: u.refId });
                    }
                  } catch (e) {
                    t = { error: e };
                  } finally {
                    try {
                      c && !c.done && (i = s.return) && i.call(s);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
                  return l;
                }),
                (n.getCurrentQuery = function (e, t) {
                  return { id: e, label: n.getAuxiliaryMetrics(!1)[parseInt(e, 10)].refId };
                }),
                (n.getCurrentQueryB = function (e, t) {
                  return { id: e, label: n.getAuxiliaryMetrics(!0)[parseInt(e, 10)].refId };
                }),
                (n.onChangeSelectQuery = function (e) {
                  var t = n.getAuxiliaryMetrics(!1);
                  (t[e.id].refId = e.label), n.saveAuxMetrics(t, !1);
                }),
                (n.onChangeSelectQueryB = function (e) {
                  var t = n.getAuxiliaryMetrics(!0);
                  (t[e.id].refId = e.label), n.saveAuxMetrics(t, !0);
                }),
                (n.onChangeKey = function (e) {
                  var t = n.getAuxiliaryMetrics(!1),
                    i = e.currentTarget.id,
                    a = e.currentTarget.value;
                  (t[i].key = a), n.saveAuxMetrics(t, !1);
                }),
                (n.onChangeKeyB = function (e) {
                  var t = n.getAuxiliaryMetrics(!0),
                    i = e.currentTarget.id,
                    a = e.currentTarget.value;
                  (t[i].key = a), n.saveAuxMetrics(t, !0);
                }),
                (n.onChangeValueKey = function (e) {
                  var t = n.getAuxiliaryMetrics(!1),
                    i = e.currentTarget.id,
                    a = e.currentTarget.value;
                  (t[i].keyValue = a), n.saveAuxMetrics(t, !1);
                }),
                (n.onChangeValueKeyB = function (e) {
                  var t = n.getAuxiliaryMetrics(!0),
                    i = e.currentTarget.id,
                    a = e.currentTarget.value;
                  (t[i].keyValue = a), n.saveAuxMetrics(t, !0);
                }),
                (n.onChangeManageValue = function (e) {
                  var t = n.getAuxiliaryMetrics(!1);
                  (t[e.id].manageValue = e.value), n.saveAuxMetrics(t, !1);
                }),
                (n.onChangeManageValueB = function (e) {
                  var t = n.getAuxiliaryMetrics(!0);
                  (t[e.id].manageValue = e.value), n.saveAuxMetrics(t, !0);
                }),
                (n.addAuxiliaryMetric = function () {
                  var e = n.getAuxiliaryMetrics(!1);
                  e.push({ key: '', unit: '', format: '', keyValue: '', refId: '', manageValue: 'avg' }),
                    n.saveAuxMetrics(e, !1),
                    n.displayInputs(!1);
                }),
                (n.addAuxiliaryMetricB = function () {
                  var e = n.getAuxiliaryMetrics(!0);
                  e.push({ key: '', unit: '', format: '', keyValue: '', refId: '', manageValue: 'avg' }),
                    n.saveAuxMetrics(e, !0),
                    n.displayInputs(!0);
                }),
                (n.deleteAuxiliaryMetric = function (e) {
                  var t = e.currentTarget.id,
                    i = n.getAuxiliaryMetrics(!1);
                  i.splice(t, 1), n.saveAuxMetrics(i, !1), n.displayInputs(!1);
                }),
                (n.deleteAuxiliaryMetricB = function (e) {
                  var t = e.currentTarget.id,
                    i = n.getAuxiliaryMetrics(!0);
                  i.splice(t, 1), n.saveAuxMetrics(i, !0), n.displayInputs(!0);
                }),
                (n.getAllManageValue = function (e) {
                  return [
                    { id: e, value: 'avg', label: 'average' },
                    { id: e, value: 'sum', label: 'total' },
                    { id: e, value: 'err', label: 'error' },
                  ];
                }),
                (n.getCurrentManageValue = function (e, t) {
                  var i = '',
                    a = n.getAuxiliaryMetrics(t);
                  return (
                    'avg' === a[e].manageValue
                      ? (i = 'average')
                      : 'sum' === a[e].manageValue
                      ? (i = 'total')
                      : 'err' === a[e].manageValue && (i = 'error'),
                    { id: e, value: a[e].manageValue, label: i }
                  );
                }),
                (n.generateInputs = function (e, t) {
                  var i,
                    a,
                    o,
                    r,
                    l = e,
                    s = n.getAuxiliaryMetrics(t),
                    p = (null === (i = n.props.idCoordinate) || void 0 === i ? void 0 : i.toString()) || '',
                    c = { marginTop: '10px', textAlign: 'center' },
                    h = { marginTop: '5px', border: '1px solid rgb(23, 23, 24)' },
                    f = { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '5px' },
                    m = { display: 'flex', flexDirection: 'row', marginBottom: '2px' };
                  return (
                    (r = t
                      ? u.a.createElement(
                          'div',
                          { key: p + 'mainDiv' + l.toString(), style: h },
                          u.a.createElement('p', { key: p + 'title' + l.toString(), style: c }, 'Metric ' + (l + 1).toString()),
                          u.a.createElement(
                            'div',
                            { key: p + 'content' + l.toString(), style: f },
                            u.a.createElement(
                              'div',
                              { key: p + 'inputs' + l.toString() },
                              u.a.createElement(
                                'div',
                                { key: p + 'refBloc' + l.toString(), style: { display: 'flex' } },
                                u.a.createElement(d.FormLabel, { key: p + 'labelref' + l.toString(), width: 15 }, 'Query'),
                                u.a.createElement(d.Select, {
                                  key: (null === (a = n.props.idCoordinate) || void 0 === a ? void 0 : a.toString()) || 'refValue' + l.toString(),
                                  onChange: n.onChangeSelectQueryB,
                                  allowCustomValue: !1,
                                  options: n.getAllQuery(l.toString()),
                                  width: 30,
                                  value: n.getCurrentQueryB(l.toString(), t),
                                })
                              ),
                              u.a.createElement(d.FormField, {
                                key: p + 'inputKey' + l.toString(),
                                id: l.toString(),
                                label: 'Key',
                                labelWidth: 15,
                                inputWidth: 30,
                                type: 'text',
                                value: s[l].key,
                                name: 'key',
                                onChange: n.onChangeKeyB,
                              }),
                              u.a.createElement(d.FormField, {
                                key: p + 'valueKey' + l.toString(),
                                id: l.toString(),
                                label: 'Value key',
                                labelWidth: 15,
                                inputWidth: 30,
                                type: 'text',
                                value: s[l].keyValue,
                                name: 'valueKey',
                                onChange: n.onChangeValueKeyB,
                              }),
                              u.a.createElement(
                                'div',
                                { key: p + 'divTypeOfValue' + l.toString(), id: l.toString(), style: m },
                                u.a.createElement(d.FormLabel, { key: p + 'labelTypeOfValue' + l.toString(), width: 15 }, 'Value'),
                                u.a.createElement(d.Select, {
                                  key: p + 'selectTypeOfValue' + l.toString(),
                                  onChange: n.onChangeManageValueB,
                                  allowCustomValue: !1,
                                  options: n.getAllManageValue(l.toString()),
                                  width: 30,
                                  value: n.getCurrentManageValue(l, t),
                                })
                              )
                            ),
                            u.a.createElement(
                              'div',
                              { key: p + 'buttonDelete' + l.toString() },
                              u.a.createElement(d.Button, { id: l.toString(), onClick: n.deleteAuxiliaryMetricB, variant: 'danger' }, 'Delete')
                            )
                          )
                        )
                      : u.a.createElement(
                          'div',
                          { key: p + 'mainDiv' + l.toString(), style: h },
                          u.a.createElement('p', { key: p + 'title' + l.toString(), style: c }, 'Metric ' + (l + 1).toString()),
                          u.a.createElement(
                            'div',
                            { key: p + 'content' + l.toString(), style: f },
                            u.a.createElement(
                              'div',
                              { key: p + 'inputs' + l.toString() },
                              u.a.createElement(
                                'div',
                                { key: p + 'refBloc' + l.toString(), style: { display: 'flex' } },
                                u.a.createElement(d.FormLabel, { key: p + 'labelref' + l.toString(), width: 15 }, 'Query'),
                                u.a.createElement(d.Select, {
                                  key: (null === (o = n.props.idCoordinate) || void 0 === o ? void 0 : o.toString()) || 'refValue' + l.toString(),
                                  onChange: n.onChangeSelectQuery,
                                  allowCustomValue: !1,
                                  options: n.getAllQuery(l.toString()),
                                  width: 30,
                                  value: n.getCurrentQuery(l.toString(), t),
                                })
                              ),
                              u.a.createElement(d.FormField, {
                                key: p + 'inputKey' + l.toString(),
                                id: l.toString(),
                                label: 'Key',
                                labelWidth: 15,
                                inputWidth: 30,
                                type: 'text',
                                value: s[l].key,
                                name: 'key',
                                onChange: n.onChangeKey,
                              }),
                              u.a.createElement(d.FormField, {
                                key: p + 'valueKey' + l.toString(),
                                id: l.toString(),
                                label: 'Value key',
                                labelWidth: 15,
                                inputWidth: 30,
                                type: 'text',
                                value: s[l].keyValue,
                                name: 'valueKey',
                                onChange: n.onChangeValueKey,
                              }),
                              u.a.createElement(
                                'div',
                                { key: p + 'divTypeOfValue' + l.toString(), id: l.toString(), style: m },
                                u.a.createElement(d.FormLabel, { key: p + 'labelTypeOfValue' + l.toString(), width: 15 }, 'Value'),
                                u.a.createElement(d.Select, {
                                  key: p + 'selectTypeOfValue' + l.toString(),
                                  onChange: n.onChangeManageValue,
                                  allowCustomValue: !1,
                                  options: n.getAllManageValue(l.toString()),
                                  width: 30,
                                  value: n.getCurrentManageValue(l, t),
                                })
                              )
                            ),
                            u.a.createElement(
                              'div',
                              { key: p + 'buttonDelete' + l.toString() },
                              u.a.createElement(d.Button, { id: l.toString(), onClick: n.deleteAuxiliaryMetric, variant: 'danger' }, 'Delete')
                            )
                          )
                        )),
                    u.a.createElement('div', { key: p + 'listInputOneMetric' + l.toString() }, r)
                  );
                }),
                (n.displayInputs = function (e) {
                  var t,
                    i = (null === (t = n.props.idCoordinate) || void 0 === t ? void 0 : t.toString()) || '',
                    a = n.getAuxiliaryMetrics(e),
                    o = [],
                    r = 0;
                  return (
                    a.forEach(function () {
                      var t = n.generateInputs(r, e);
                      o.push(t), r++;
                    }),
                    u.a.createElement('div', { key: i + 'listInputAllMetrics' }, o)
                  );
                }),
                (n.componentDidMount = function () {}),
                (n.state = { collapse: !1, collapseLinkA: !1, collapseLinkB: !1, currentRefQuery: '', currentRefQueryB: '' }),
                n
              );
            }
            return (
              o(t, e),
              (t.prototype.render = function () {
                var e,
                  t,
                  n,
                  i,
                  a = (null === (n = this.props.idCoordinate) || void 0 === n ? void 0 : n.toString()) || '',
                  o = { display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '10px' },
                  r = this.props.options.arrayOrientedLinks;
                try {
                  for (var l = p(r), s = l.next(); !s.done; s = l.next()) {
                    var c = s.value;
                    c.id === this.props.idCoordinate && (i = c);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    s && !s.done && (t = l.return) && t.call(l);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return this.props.isLink && i && 'double' === i.orientationLink.value
                  ? u.a.createElement(
                      d.Collapse,
                      { isOpen: this.state.collapse, label: 'Auxiliary metrics', onToggle: this.onToggleCollapse },
                      u.a.createElement(
                        d.Collapse,
                        { isOpen: this.state.collapseLinkA, label: 'Link A', onToggle: this.onToggleCollapseLinkA },
                        this.displayInputs(!1),
                        u.a.createElement(
                          'div',
                          { key: a + 'buttonAdd', style: o },
                          u.a.createElement(d.Button, { onClick: this.addAuxiliaryMetric }, 'Add Auxiliary Metric')
                        )
                      ),
                      u.a.createElement(
                        d.Collapse,
                        { isOpen: this.state.collapseLinkB, label: 'Link B', onToggle: this.onToggleCollapseLinkB },
                        this.displayInputs(!0),
                        u.a.createElement(
                          'div',
                          { key: a + 'buttonAdd', style: o },
                          u.a.createElement(d.Button, { onClick: this.addAuxiliaryMetricB }, 'Add Auxiliary Metric')
                        )
                      )
                    )
                  : u.a.createElement(
                      d.Collapse,
                      { isOpen: this.state.collapse, label: 'Auxiliary metrics', onToggle: this.onToggleCollapse },
                      this.displayInputs(!1),
                      u.a.createElement(
                        'div',
                        { key: a + 'buttonAdd', style: o },
                        u.a.createElement(d.Button, { onClick: this.addAuxiliaryMetric }, 'Add Auxiliary Metric')
                      )
                    );
              }),
              t
            );
          })(u.a.Component)),
        $ = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.setStateAsyncArrayCoor = function (e) {
                return new Promise(function (t) {
                  n.setState(e, t);
                });
              }),
              (n.setStateAsyncArrayInput = function (e) {
                return new Promise(function (t) {
                  n.setState(e, t);
                });
              }),
              (n.addInput = function (e) {
                return l(n, void 0, void 0, function () {
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, this.setStateAsyncArrayInput({ arrayInput: this.state.arrayInput.concat([new P(e, R(e, !1))]) })];
                      case 1:
                        return t.sent(), [2];
                    }
                  });
                });
              }),
              (n.deleteOwnInput = function () {
                confirm('Delete "' + n.state.arrayCoor.label + '" ?') && n.props.callBackToParent(n.state.arrayCoor.id, void 0);
              }),
              (n.onChangeSelectSVG = function (e) {
                var t = n.state.arrayCoor;
                (t.idSVG = e.value || ''), n.setState({ selectedDefaultSVG: e, arrayCoor: t }), !1 === n.props.isAddCoordinate && n.callBack();
              }),
              (n.callBack = function () {
                var e = n.state.arrayCoor;
                (e.widthInitialSpaceDefault = (
                  parseInt(n.props.options.coordinateSpaceInitial.coordinate.xMax, 10) -
                  parseInt(n.props.options.coordinateSpaceInitial.coordinate.xMin, 10)
                ).toString()),
                  (e.heightInitialSpaceDefault = (
                    parseInt(n.props.options.coordinateSpaceInitial.coordinate.yMax, 10) -
                    parseInt(n.props.options.coordinateSpaceInitial.coordinate.yMin, 10)
                  ).toString()),
                  n.setState({ arrayCoor: e });
                '' === n.state.arrayCoor.label
                  ? (n.setState({ severityAlert: 'error', titleAlert: 'Error: label is empty', hiddenAlert: !1 }),
                    setTimeout(function () {
                      n.setState({ hiddenAlert: !0 });
                    }, 3e3))
                  : (n.props.callBackToParent(n.state.arrayCoor.id, n.state.arrayCoor),
                    n.setState({ severityAlert: 'success', titleAlert: 'Save', hiddenAlert: !1 }),
                    n.props.isAddCoordinate ||
                      setTimeout(function () {
                        n.setState({ hiddenAlert: !0 });
                      }, 3e3));
              }),
              (n.callBackToOther = function (e, t, i, a) {
                var o = n.state.arrayCoor;
                (e || '' === e) && (o.linkURL.followLink = e),
                  (t || '' === t) && (o.linkURL.hoveringTooltipLink = t),
                  (i || '' === i) && (o.linkURL.hoveringTooltipText = i),
                  a && (o.textObj = a),
                  n.setState({ arrayCoor: o }),
                  !1 === n.props.isAddCoordinate && n.callBack();
              }),
              (n.callBackManageLowerLimit = function (e) {
                var t = n.state.arrayCoor;
                (t.colorMode = e.colorMode),
                  (t.traceBorder = e.traceBorder),
                  (t.traceBack = e.traceBack),
                  n.setState({ arrayCoor: t }),
                  !1 === n.props.isAddCoordinate && n.callBack();
              }),
              (n.callBackLowerLimit = function (e) {
                var t = n.state.arrayCoor;
                (t.lowerLimit = e), n.setState({ arrayCoor: t }), !1 === n.props.isAddCoordinate && n.callBack();
              }),
              (n.callBackMainMetric = function (e) {
                var t = n.state.arrayCoor;
                (t.mainMetric = e), n.setState({ arrayCoor: t }), !1 === n.props.isAddCoordinate && n.callBack();
              }),
              (n.onChangeRadioMode = function (e) {
                var t = n.state.arrayCoor;
                (t.mode = 'svgMode' === e.currentTarget.value),
                  n.setState({ selectedRadio: e.currentTarget.value, arrayCoor: t }),
                  !1 === n.props.isAddCoordinate && n.callBack();
              }),
              (n.fillSelectSVG = function () {
                var e,
                  t,
                  i = [];
                if (n.state.allIDSelected.length > 0) {
                  var a = n.state.allIDSelected,
                    o = a[0];
                  try {
                    for (var r = p(a), l = r.next(); !l.done; l = r.next()) {
                      var s = l.value;
                      s.value === n.state.arrayCoor.idSVG && (o = s);
                    }
                  } catch (t) {
                    e = { error: t };
                  } finally {
                    try {
                      l && !l.done && (t = r.return) && t.call(r);
                    } finally {
                      if (e) throw e.error;
                    }
                  }
                  n.setState({ selectedDefaultSVG: o });
                } else {
                  if (n.props.options.baseMap.modeSVG)
                    var c = setInterval(function () {
                      var e,
                        t,
                        a,
                        o,
                        r = (function (e, t) {
                          var n,
                            i = [],
                            a = [],
                            o = null === (n = document.getElementById(t.idSVG)) || void 0 === n ? void 0 : n.querySelectorAll('*[id]');
                          return (
                            o
                              ? (Array.from(o).forEach(function (e) {
                                  ('path' !== e.localName && 'rect' !== e.localName && 'ellipse' !== e.localName) || i.push(e.id), a.push(e.id);
                                }),
                                i.sort(function (e, t) {
                                  return e < t ? -1 : e > t ? 1 : 0;
                                }))
                              : console.error('id svg not found'),
                            i
                          );
                        })(n.props.options.coordinateSpaceInitial.coordinate, n.props.options.baseMap);
                      if (r.length > 0) {
                        try {
                          for (var l = p(r), s = l.next(); !s.done; s = l.next()) {
                            var u = s.value;
                            i.push({ value: u, label: u });
                          }
                        } catch (t) {
                          e = { error: t };
                        } finally {
                          try {
                            s && !s.done && (t = l.return) && t.call(l);
                          } finally {
                            if (e) throw e.error;
                          }
                        }
                        var d = i[0];
                        try {
                          for (var h = p(i), f = h.next(); !f.done; f = h.next()) {
                            (u = f.value).value === n.state.arrayCoor.idSVG && (d = u);
                          }
                        } catch (e) {
                          a = { error: e };
                        } finally {
                          try {
                            f && !f.done && (o = h.return) && o.call(h);
                          } finally {
                            if (a) throw a.error;
                          }
                        }
                        n.setState({ allIDSelected: i, selectedDefaultSVG: d }), clearInterval(c);
                      }
                    }, 1e3);
                }
              }),
              (n.getDataInInput = function () {
                return l(n, void 0, void 0, function () {
                  return s(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [4, this.addInput(this.props.coordinate.id)];
                      case 1:
                        return e.sent(), this.fillInputEspaceCoor(), this.fillSelectSVG(), [2];
                    }
                  });
                });
              }),
              (n.componentDidMount = function () {
                n.getDataInInput();
              }),
              (n.componentDidUpdate = function (e, t) {
                return l(n, void 0, void 0, function () {
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return e.coordinate.id === this.props.coordinate.id
                          ? [3, 3]
                          : [
                              4,
                              this.setStateAsyncArrayCoor({
                                arrayCoor: B(
                                  this.props.coordinate,
                                  parseInt(this.props.options.coordinateSpaceInitial.coordinate.xMin, 10),
                                  parseInt(this.props.options.coordinateSpaceInitial.coordinate.xMax, 10),
                                  parseInt(this.props.options.baseMap.width, 10),
                                  parseInt(this.props.options.coordinateSpaceInitial.coordinate.yMin, 10),
                                  parseInt(this.props.options.coordinateSpaceInitial.coordinate.yMax, 10),
                                  parseInt(this.props.options.baseMap.height, 10)
                                ),
                              }),
                            ];
                      case 1:
                        return t.sent(), [4, this.setStateAsyncArrayInput({ arrayInput: [] })];
                      case 2:
                        t.sent(), this.getDataInInput(), (t.label = 3);
                      case 3:
                        return [2];
                    }
                  });
                });
              }),
              (n.state = {
                arrayCoor: B(
                  n.props.coordinate,
                  parseInt(n.props.options.coordinateSpaceInitial.coordinate.xMin, 10),
                  parseInt(n.props.options.coordinateSpaceInitial.coordinate.xMax, 10),
                  parseInt(n.props.options.baseMap.width, 10),
                  parseInt(n.props.options.coordinateSpaceInitial.coordinate.yMin, 10),
                  parseInt(n.props.options.coordinateSpaceInitial.coordinate.yMax, 10),
                  parseInt(n.props.options.baseMap.height, 10)
                ),
                arrayInput: [],
                htmlInput: u.a.createElement('div', null),
                hiddenAlert: !0,
                titleAlert: 'Error: label is empty',
                severityAlert: 'error',
                selectedRadio: 'svgMode',
                allIDSelected: [],
                selectedDefaultSVG: [],
              }),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype._handleChange = function (e, t, n) {
              var i = this.state.arrayCoor,
                a = parseInt(this.props.options.baseMap.width, 10),
                o = parseInt(this.props.options.coordinateSpaceInitial.coordinate.xMin, 10),
                r = parseInt(this.props.options.coordinateSpaceInitial.coordinate.xMax, 10) - o,
                l = i.coordsDefault;
              t.startsWith('positionXMin') && (l.xMin = (((parseInt(e, 10) - o) / r) * a).toString()),
                t.startsWith('positionXMax') && (l.xMax = (((parseInt(e, 10) - o) / r) * a).toString());
              var s = parseInt(this.props.options.baseMap.height, 10),
                p = parseInt(this.props.options.coordinateSpaceInitial.coordinate.yMin, 10),
                c = parseInt(this.props.options.coordinateSpaceInitial.coordinate.yMax, 10) - p;
              t.startsWith('positionYMin') && (l.yMin = (((parseInt(e, 10) - p) / c) * s).toString()),
                t.startsWith('positionYMax') && (l.yMax = (((parseInt(e, 10) - p) / c) * s).toString()),
                (i.coordsDefault = l),
                (i = (function (e, t, n) {
                  return (
                    e.startsWith('positionXMin')
                      ? (t.coords.xMin = n)
                      : e.startsWith('positionXMax')
                      ? (t.coords.xMax = n)
                      : e.startsWith('positionYMin')
                      ? (t.coords.yMin = n)
                      : e.startsWith('positionYMax')
                      ? (t.coords.yMax = n)
                      : e.startsWith('label')
                      ? (t.label = n)
                      : e.startsWith('image')
                      ? (t.img = n)
                      : e.startsWith('key')
                      ? (t.mainMetric.key = n)
                      : e.startsWith('valueKey') && (t.mainMetric.keyValue = n),
                    t
                  );
                })(t, i, e)),
                console.log(i),
                this.setState({ arrayCoor: i }),
                this.fillInputEspaceCoor(),
                !1 === this.props.isAddCoordinate && this.callBack();
            }),
            (t.prototype.getGoodValue = function (e, t) {
              var n;
              return (
                (n = ''),
                t.startsWith('positionXMin')
                  ? (n = this.state.arrayCoor.coords.xMin)
                  : t.startsWith('positionXMax')
                  ? (n = this.state.arrayCoor.coords.xMax)
                  : t.startsWith('positionYMin')
                  ? (n = this.state.arrayCoor.coords.yMin)
                  : t.startsWith('positionYMax')
                  ? (n = this.state.arrayCoor.coords.yMax)
                  : t.startsWith('label')
                  ? (n = this.state.arrayCoor.label)
                  : t.startsWith('image')
                  ? (n = this.state.arrayCoor.img)
                  : t.startsWith('key')
                  ? (n = this.state.arrayCoor.mainMetric.key)
                  : t.startsWith('valueKey') && (n = this.state.arrayCoor.mainMetric.keyValue),
                n
              );
            }),
            (t.prototype.fillInputEspaceCoor = function () {
              var e,
                t,
                n = this,
                i = this.state.arrayInput,
                a = [],
                o = function (e) {
                  var t = e.getUneClassInput().map(function (t) {
                      return 'text' === t.getInputType()
                        ? u.a.createElement(G, {
                            key: t.getId(),
                            label: t.getLabel(),
                            name: t.getName(),
                            placeholder: t.getPlaceholder() || '',
                            required: t.getRequired(),
                            value: n.getGoodValue(e.getId(), t.getName()),
                            _handleChange: function (i) {
                              return n._handleChange(i.currentTarget.value, t.getName(), e.getId());
                            },
                          })
                        : n.props.isAddCoordinate
                        ? u.a.createElement('div', null)
                        : u.a.createElement(j, {
                            key: t.getId(),
                            label: t.getLabel(),
                            value: t.getValue() || '',
                            name: t.getName(),
                            required: t.getRequired(),
                            _handleChange: n.deleteOwnInput,
                            id: t.getId(),
                          });
                    }),
                    i = 'inputCoor' + e.getId().toString(),
                    o = u.a.createElement('div', { key: 'addCoordinate' + i, className: 'inputCoor' }, t);
                  a = a.concat(o);
                };
              try {
                for (var r = p(i), l = r.next(); !l.done; l = r.next()) {
                  o(l.value);
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  l && !l.done && (t = r.return) && t.call(r);
                } finally {
                  if (e) throw e.error;
                }
              }
              this.setState(function (e) {
                return { htmlInput: u.a.createElement('ul', null, a), selectedRadio: e.arrayCoor.mode ? 'svgMode' : 'coordinateMode' };
              });
            }),
            (t.prototype.render = function () {
              var e = this;
              return u.a.createElement(
                'div',
                null,
                u.a.createElement(
                  'div',
                  { style: { position: 'fixed', bottom: '5%', right: '5%', zIndex: 9999 }, hidden: this.state.hiddenAlert },
                  u.a.createElement(d.Alert, { title: this.state.titleAlert, severity: this.state.severityAlert })
                ),
                u.a.createElement('div', null, this.state.htmlInput),
                u.a.createElement(
                  'div',
                  null,
                  u.a.createElement(Q, {
                    options: this.props.options,
                    onOptionsChange: this.props.onOptionsChange,
                    data: this.props.data,
                    idCoordinate: this.state.arrayCoor.id,
                    mainMetric: this.state.arrayCoor.mainMetric,
                    callBackToParent: this.callBackMainMetric,
                    isLink: !1,
                  })
                ),
                !this.props.isAddCoordinate &&
                  u.a.createElement(
                    'div',
                    null,
                    u.a.createElement(Z, {
                      options: this.props.options,
                      onOptionsChange: this.props.onOptionsChange,
                      data: this.props.data,
                      idCoordinate: this.state.arrayCoor.id,
                      metrics: this.state.arrayCoor.metrics,
                      isRegion: !0,
                    })
                  ),
                u.a.createElement(
                  'div',
                  null,
                  u.a.createElement(J, {
                    options: this.props.options,
                    onOptionsChange: this.props.onOptionsChange,
                    data: this.props.data,
                    coordinateSpace: this.state.arrayCoor,
                    callBackToParent: this.callBackToOther,
                  })
                ),
                u.a.createElement(
                  'div',
                  null,
                  u.a.createElement(_, {
                    options: this.props.options,
                    onOptionsChange: this.props.onOptionsChange,
                    data: this.props.data,
                    coordinate: this.state.arrayCoor,
                    callBack: this.callBackManageLowerLimit,
                    lowerLimitCallBack: this.callBackLowerLimit,
                    isLink: !1,
                  })
                ),
                u.a.createElement('br', null),
                u.a.createElement(
                  'div',
                  null,
                  u.a.createElement(
                    'div',
                    { className: 'radio' },
                    u.a.createElement(
                      'label',
                      null,
                      u.a.createElement('input', {
                        type: 'radio',
                        value: 'svgMode',
                        checked: 'svgMode' === this.state.selectedRadio,
                        onChange: this.onChangeRadioMode,
                      }),
                      'SVG mode'
                    )
                  ),
                  u.a.createElement(
                    'div',
                    { className: 'radio' },
                    u.a.createElement(
                      'label',
                      null,
                      u.a.createElement('input', {
                        type: 'radio',
                        value: 'coordinateMode',
                        checked: 'coordinateMode' === this.state.selectedRadio,
                        onChange: this.onChangeRadioMode,
                      }),
                      'Coordinate mode'
                    )
                  ),
                  u.a.createElement('br', null),
                  'svgMode' === this.state.selectedRadio
                    ? u.a.createElement(
                        'div',
                        { className: 'svgMode' },
                        u.a.createElement(
                          'div',
                          { style: { display: 'flex' } },
                          u.a.createElement(d.FormLabel, { width: 15 }, 'Zone SVG'),
                          u.a.createElement(d.Select, {
                            onChange: function (t) {
                              return e.onChangeSelectSVG(t);
                            },
                            allowCustomValue: !1,
                            options: this.state.allIDSelected,
                            width: 10,
                            value: this.state.selectedDefaultSVG,
                          })
                        )
                      )
                    : u.a.createElement(
                        'div',
                        { className: 'classRegion' },
                        u.a.createElement(d.FormField, {
                          label: 'Image',
                          labelWidth: 15,
                          inputWidth: 20,
                          type: 'text',
                          value: this.state.arrayCoor.img,
                          name: 'image',
                          onChange: function (t) {
                            return e._handleChange(t.currentTarget.value, 'image', e.state.arrayCoor.id);
                          },
                        }),
                        u.a.createElement(d.FormField, {
                          label: 'X min',
                          labelWidth: 15,
                          inputWidth: 20,
                          type: 'text',
                          value: this.state.arrayCoor.coords.xMin,
                          name: 'positionXMin',
                          onChange: function (t) {
                            return e._handleChange(t.currentTarget.value, 'positionXMin', e.state.arrayCoor.id);
                          },
                        }),
                        u.a.createElement(d.FormField, {
                          label: 'X max',
                          labelWidth: 15,
                          inputWidth: 20,
                          type: 'text',
                          value: this.state.arrayCoor.coords.xMax,
                          name: 'positionXMax',
                          onChange: function (t) {
                            return e._handleChange(t.currentTarget.value, 'positionXMax', e.state.arrayCoor.id);
                          },
                        }),
                        u.a.createElement(d.FormField, {
                          label: 'Y min',
                          labelWidth: 15,
                          inputWidth: 20,
                          type: 'text',
                          value: this.state.arrayCoor.coords.yMin,
                          name: 'positionYMin',
                          onChange: function (t) {
                            return e._handleChange(t.currentTarget.value, 'positionYMin', e.state.arrayCoor.id);
                          },
                        }),
                        u.a.createElement(d.FormField, {
                          label: 'Y max',
                          labelWidth: 15,
                          inputWidth: 20,
                          type: 'text',
                          value: this.state.arrayCoor.coords.yMax,
                          name: 'positionYMax',
                          onChange: function (t) {
                            return e._handleChange(t.currentTarget.value, 'positionYMax', e.state.arrayCoor.id);
                          },
                        })
                      )
                ),
                u.a.createElement('br', null),
                u.a.createElement(
                  'div',
                  { style: { textAlign: 'center' }, className: 'buttonSave' },
                  this.props.isAddCoordinate &&
                    u.a.createElement(
                      d.Button,
                      {
                        style: { marginRight: '1%' },
                        onClick: function () {
                          return e.callBack();
                        },
                      },
                      'Save'
                    ),
                  !this.props.isAddCoordinate && u.a.createElement(d.Button, { onClick: this.deleteOwnInput, variant: 'danger' }, 'Delete')
                )
              );
            }),
            t
          );
        })(u.a.Component),
        ee = (function () {
          function e(e, t, n, i, a, o, r, l, s) {
            (this.id = e),
              (this.label = t),
              (this.name = n),
              (this.input_type = i),
              (this.optionValues = a),
              (this.defaultValueColor = o),
              (this.required = r),
              (this.placeholder = l),
              (this.value = s);
          }
          return (
            (e.prototype.getId = function () {
              return this.id;
            }),
            (e.prototype.setId = function (e) {
              this.id = e;
            }),
            (e.prototype.getLabel = function () {
              return this.label;
            }),
            (e.prototype.setLabel = function (e) {
              this.label = e;
            }),
            (e.prototype.getName = function () {
              return this.name;
            }),
            (e.prototype.setName = function (e) {
              this.name = e;
            }),
            (e.prototype.getInputType = function () {
              return this.input_type;
            }),
            (e.prototype.setInputType = function (e) {
              this.input_type = e;
            }),
            (e.prototype.getRequired = function () {
              return this.required;
            }),
            (e.prototype.setRequired = function (e) {
              this.required = e;
            }),
            (e.prototype.getPlaceholder = function () {
              return this.placeholder;
            }),
            (e.prototype.setPlaceholder = function (e) {
              this.placeholder = e;
            }),
            (e.prototype.getValue = function () {
              return this.value;
            }),
            (e.prototype.setValue = function (e) {
              this.value = e;
            }),
            (e.prototype.getOptionValues = function () {
              return this.optionValues;
            }),
            (e.prototype.setOptionValues = function (e) {
              this.optionValues = e;
            }),
            (e.prototype.getDefaultValueColor = function () {
              return this.defaultValueColor;
            }),
            (e.prototype.setDefaultValueColor = function (e) {
              this.defaultValueColor = e;
            }),
            e
          );
        })(),
        te = function (e) {
          var t = new ee(
              e.toString() + 'drawGraphicMarker',
              'Display ',
              'drawGraphicMarker' + e.toString(),
              'select',
              [
                { value: 'true', label: 'Yes' },
                { value: 'false', label: 'No' },
              ],
              '',
              !0,
              'drawGraphicMarker',
              void 0
            ),
            n = new ee(
              e.toString() + 'shape',
              'Shape',
              'shape' + e.toString(),
              'select',
              [
                { value: 'none', label: 'None' },
                { value: 'circle', label: 'Circle' },
                { value: 'square', label: 'Square' },
                { value: 'diamond', label: 'Diamond' },
              ],
              '',
              !0,
              'Shape',
              void 0
            ),
            i = new ee(e.toString() + 'sizeWidth', 'Size (px)', 'sizeWidth' + e.toString(), 'text', [], '', !0, 'SizeWidth', void 0),
            a = new ee(
              e.toString() + 'sizeHeight',
              'Width',
              'sizeHeight' + e.toString(),
              'select',
              [
                { value: 'small', label: 'Small' },
                { value: 'medium', label: 'Medium' },
                { value: 'large', label: 'Large' },
              ],
              '',
              !0,
              'SizeHeight',
              void 0
            ),
            o = new ee(e.toString() + 'rotateArrow', 'Orientation', 'rotateArrow' + e.toString(), 'text', [], '', !0, 'RotateArrow', void 0),
            r = new ee(
              e.toString() + 'positionShapeX',
              'Position X',
              'positionShapeX' + e.toString(),
              'text',
              [],
              '',
              !0,
              'Position X Shape',
              void 0
            ),
            l = new ee(
              e.toString() + 'positionShapeY',
              'Position Y',
              'positionShapeY' + e.toString(),
              'text',
              [],
              '',
              !0,
              'Position Y Shape',
              void 0
            );
          return [
            new ee(e.toString() + 'labelPoint', 'Label', 'labelPoint' + e.toString(), 'text', [], '', !0, 'Label', void 0),
            t,
            n,
            i,
            a,
            o,
            r,
            l,
            new ee(e.toString() + 'deletePoint', 'Delete', 'delete' + e.toString(), 'button', [], '', !0, void 0, 'Delete'),
          ];
        },
        ne = function (e) {
          var t = e.label,
            n = e.name,
            i = e.placeholder,
            a = e.required,
            o = e.value,
            r = e._handleChange,
            l = e.shape;
          return void 0 !== n && 'arrow' !== l && n.startsWith('rotateArrow')
            ? u.a.createElement('div', null)
            : u.a.createElement(
                'div',
                null,
                u.a.createElement(d.FormField, {
                  label: t,
                  labelWidth: 15,
                  inputWidth: 20,
                  type: 'text',
                  required: a,
                  name: n,
                  value: o,
                  onChange: r,
                  placeholder: i,
                })
              );
        },
        ie = (function () {
          function e(e, t) {
            (this.id = e), (this.uneClassInput = t);
          }
          return (
            (e.prototype.getId = function () {
              return this.id;
            }),
            (e.prototype.setId = function (e) {
              this.id = e;
            }),
            (e.prototype.getUneClassInput = function () {
              return this.uneClassInput;
            }),
            (e.prototype.setUneClassInput = function (e) {
              this.uneClassInput = e;
            }),
            e
          );
        })(),
        ae = function (e, t, n, i) {
          return (
            e.startsWith('label')
              ? (t.label = n)
              : e.startsWith('drawGraphicMarker')
              ? (t.drawGraphicMarker = i)
              : e.startsWith('shape')
              ? (t.shape = i)
              : e.startsWith('sizeWidth')
              ? (t.sizeWidth = n)
              : e.startsWith('sizeHeight')
              ? (t.sizeHeight = i)
              : e.startsWith('rotateArrow')
              ? (t.rotateArrow = n)
              : e.startsWith('positionShapeX')
              ? (t.positionShapeX = n)
              : e.startsWith('positionShapeY')
              ? (t.positionShapeY = n)
              : e.startsWith('color')
              ? (t.color = n)
              : e.startsWith('refIdMainMetric')
              ? (t.mainMetric.refId = n)
              : e.startsWith('keyMainMetric')
              ? (t.mainMetric.key = n)
              : e.startsWith('keyValueMainMetric') && (t.mainMetric.keyValue = n),
            t
          );
        },
        oe = function (e) {
          var t = e._onChange,
            n = e.data,
            i = e.index,
            a = e.defaultValue,
            o = e.name,
            r = e.shape,
            l = e.label;
          return void 0 !== o && 'arrow' !== r && o.startsWith('sizeHeight')
            ? u.a.createElement('div', null)
            : u.a.createElement(
                'div',
                { style: { display: 'flex', marginBottom: '2px' } },
                u.a.createElement(d.FormLabel, { width: 15 }, l),
                u.a.createElement(d.Select, {
                  onChange: function (e) {
                    return t(e, o, i);
                  },
                  allowCustomValue: !1,
                  options: n,
                  value: a,
                  width: 20,
                })
              );
        },
        re = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.savePositionParameter = function (e) {
                var t,
                  i,
                  a,
                  o,
                  l,
                  s,
                  c = n.props.id || 0;
                if (n.props.isPoint) {
                  var u = n.props.options.arrayPoints;
                  try {
                    for (var d = p(u), h = d.next(); !h.done; h = d.next()) {
                      var f = h.value;
                      f.id === c && (f.positionParameter = e);
                    }
                  } catch (e) {
                    t = { error: e };
                  } finally {
                    try {
                      h && !h.done && (i = d.return) && i.call(d);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
                  n.props.onOptionsChange(r(r({}, n.props.options), { arrayPoints: u }));
                } else if (n.props.isLink) {
                  var m = n.props.options.arrayOrientedLinks;
                  try {
                    for (var g = p(m), b = g.next(); !b.done; b = g.next()) {
                      var y = b.value;
                      y.id === c && (y.positionParameter = e);
                    }
                  } catch (e) {
                    a = { error: e };
                  } finally {
                    try {
                      b && !b.done && (o = g.return) && o.call(g);
                    } finally {
                      if (a) throw a.error;
                    }
                  }
                  n.props.onOptionsChange(r(r({}, n.props.options), { arrayOrientedLinks: m }));
                } else if (n.props.isRegion) {
                  var v = n.props.options.regionCoordinateSpace;
                  try {
                    for (var x = p(v), k = x.next(); !k.done; k = x.next()) {
                      var C = k.value;
                      C.id === c && (C.positionParameter = e);
                    }
                  } catch (e) {
                    l = { error: e };
                  } finally {
                    try {
                      k && !k.done && (s = x.return) && s.call(x);
                    } finally {
                      if (l) throw l.error;
                    }
                  }
                  n.props.onOptionsChange(r(r({}, n.props.options), { regionCoordinateSpace: v }));
                }
              }),
              (n.getPositionParameter = function () {
                var e,
                  t,
                  i,
                  a,
                  o,
                  r,
                  l = {
                    labelAPositionX: '0',
                    labelAPositionY: '0',
                    labelBPositionX: '0',
                    labelBPositionY: '0',
                    tooltipPositionA: {},
                    tooltipPositionB: {},
                  },
                  s = n.props.id || 0;
                if (n.props.isLink) {
                  var c = n.props.options.arrayOrientedLinks;
                  try {
                    for (var u = p(c), d = u.next(); !d.done; d = u.next()) {
                      var h = d.value;
                      h.id === s && (l = h.positionParameter);
                    }
                  } catch (t) {
                    e = { error: t };
                  } finally {
                    try {
                      d && !d.done && (t = u.return) && t.call(u);
                    } finally {
                      if (e) throw e.error;
                    }
                  }
                } else if (n.props.isPoint) {
                  var f = n.props.options.arrayPoints;
                  try {
                    for (var m = p(f), g = m.next(); !g.done; g = m.next()) {
                      var b = g.value;
                      b.id === s && (l = b.positionParameter);
                    }
                  } catch (e) {
                    i = { error: e };
                  } finally {
                    try {
                      g && !g.done && (a = m.return) && a.call(m);
                    } finally {
                      if (i) throw i.error;
                    }
                  }
                } else if (n.props.isRegion) {
                  var y = n.props.options.regionCoordinateSpace;
                  try {
                    for (var v = p(y), x = v.next(); !x.done; x = v.next()) {
                      var k = x.value;
                      k.id === s && (l = k.positionParameter);
                    }
                  } catch (e) {
                    o = { error: e };
                  } finally {
                    try {
                      x && !x.done && (r = v.return) && r.call(v);
                    } finally {
                      if (o) throw o.error;
                    }
                  }
                }
                return l;
              }),
              (n.handleChangeLabelAPositionX = function (e) {
                var t = n.getPositionParameter();
                (t.labelAPositionX = e.currentTarget.value), n.savePositionParameter(t);
              }),
              (n.handleChangeLabelAPositionY = function (e) {
                var t = n.getPositionParameter();
                (t.labelAPositionY = e.currentTarget.value), n.savePositionParameter(t);
              }),
              (n.handleChangeLabelBPositionX = function (e) {
                var t = n.getPositionParameter();
                (t.labelBPositionX = e.currentTarget.value), n.savePositionParameter(t);
              }),
              (n.handleChangeLabelBPositionY = function (e) {
                var t = n.getPositionParameter();
                (t.labelBPositionY = e.currentTarget.value), n.savePositionParameter(t);
              }),
              (n.handleChangeTooltipPositionA = function (e) {
                var t = n.getPositionParameter();
                (t.tooltipPositionA = { label: e.value, value: e.value }), n.savePositionParameter(t);
              }),
              (n.handleChangeTooltipPositionB = function (e) {
                var t = n.getPositionParameter();
                (t.tooltipPositionB = { label: e.value, value: e.value }), n.savePositionParameter(t);
              }),
              (n.handleChangeSelectOrientedLinkToUpgrade = function (e) {
                var t = { label: e.label, value: e.value };
                n.setState({ orientedLinkComparedToUpgrade: t });
              }),
              (n.handleChangeSelectOrientedLinkToDowngrade = function (e) {
                var t = { label: e.label, value: e.value };
                n.setState({ orientedLinkComparedToDowngrade: t });
              }),
              (n.downgradeLayerLevel = function () {
                var e = n.state.orientedLinkComparedToDowngrade.value.zIndex - 1;
                n.callBackZIndex(e, n.props.id || 0);
              }),
              (n.upgradeLayerLevel = function () {
                var e = n.state.orientedLinkComparedToUpgrade.value.zIndex + 1;
                n.callBackZIndex(e, n.props.id || 0);
              }),
              (n.defineListOrientedLink = function () {
                var e = [];
                return (
                  n.props.options.arrayOrientedLinks.forEach(function (t) {
                    var n = { label: t.label || t.name, value: t };
                    e.push(n);
                  }),
                  e
                );
              }),
              (n.defineLabelPositionInputs = function () {
                var e,
                  t,
                  i,
                  a = n.getPositionParameter(),
                  o = n.props.options.arrayOrientedLinks;
                try {
                  for (var r = p(o), l = r.next(); !l.done; l = r.next()) {
                    var s = l.value;
                    s.id === n.props.id && (i = s);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    l && !l.done && (t = r.return) && t.call(r);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return n.props.isLink && i && 'double' === i.orientationLink.value
                  ? u.a.createElement(
                      'div',
                      null,
                      u.a.createElement(
                        'div',
                        null,
                        u.a.createElement(
                          'div',
                          null,
                          u.a.createElement(d.FormField, {
                            label: 'Label A Position X',
                            labelWidth: 10,
                            inputWidth: 20,
                            type: 'text',
                            value: a.labelAPositionX,
                            onChange: n.handleChangeLabelAPositionX,
                            placeholder: 'Label A Position X',
                          }),
                          u.a.createElement(d.FormField, {
                            label: 'Label A Position Y',
                            labelWidth: 10,
                            inputWidth: 20,
                            type: 'text',
                            value: a.labelAPositionY,
                            onChange: n.handleChangeLabelAPositionY,
                            placeholder: 'Label A Position Y',
                          })
                        )
                      ),
                      u.a.createElement(
                        'div',
                        null,
                        u.a.createElement(
                          'div',
                          null,
                          u.a.createElement(d.FormField, {
                            label: 'Label B Position X',
                            labelWidth: 10,
                            inputWidth: 20,
                            type: 'text',
                            value: a.labelBPositionX,
                            onChange: n.handleChangeLabelBPositionX,
                            placeholder: 'Label B Position X',
                          }),
                          u.a.createElement(d.FormField, {
                            label: 'Label B Position Y',
                            labelWidth: 10,
                            inputWidth: 20,
                            type: 'text',
                            value: a.labelBPositionY,
                            onChange: n.handleChangeLabelBPositionY,
                            placeholder: 'Label B Position Y',
                          })
                        )
                      )
                    )
                  : u.a.createElement(
                      'div',
                      null,
                      u.a.createElement(d.FormField, {
                        label: 'Position X',
                        labelWidth: 10,
                        inputWidth: 20,
                        type: 'text',
                        value: a.labelAPositionX,
                        onChange: n.handleChangeLabelAPositionX,
                        placeholder: 'Position X',
                      }),
                      u.a.createElement(d.FormField, {
                        label: 'Position Y',
                        labelWidth: 10,
                        inputWidth: 20,
                        type: 'text',
                        value: a.labelAPositionY,
                        onChange: n.handleChangeLabelAPositionY,
                        placeholder: 'Position Y',
                      })
                    );
              }),
              (n.defineTooltipPositionInputs = function () {
                var e,
                  t,
                  i,
                  a = [
                    { label: 'Top', value: 'Top' },
                    { label: 'Bottom', value: 'Bottom' },
                    { label: 'Left', value: 'Left' },
                    { label: 'Right', value: 'Right' },
                  ],
                  o = n.getPositionParameter(),
                  r = n.props.options.arrayOrientedLinks;
                try {
                  for (var l = p(r), s = l.next(); !s.done; s = l.next()) {
                    var c = s.value;
                    c.id === n.props.id && (i = c);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    s && !s.done && (t = l.return) && t.call(l);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return n.props.isLink && i && 'double' === i.orientationLink.value
                  ? u.a.createElement(
                      'div',
                      null,
                      u.a.createElement(
                        'div',
                        { style: { display: 'flex' } },
                        u.a.createElement(d.FormLabel, { width: 10 }, 'Tooltip A Position'),
                        u.a.createElement(d.Select, {
                          onChange: n.handleChangeTooltipPositionA,
                          allowCustomValue: !1,
                          options: a,
                          value: o.tooltipPositionA,
                          width: 20,
                        })
                      ),
                      u.a.createElement(
                        'div',
                        { style: { display: 'flex' } },
                        u.a.createElement(d.FormLabel, { width: 10 }, 'Tooltip B Position'),
                        u.a.createElement(d.Select, {
                          onChange: n.handleChangeTooltipPositionB,
                          allowCustomValue: !1,
                          options: a,
                          value: o.tooltipPositionB,
                          width: 20,
                        })
                      )
                    )
                  : u.a.createElement(
                      'div',
                      { style: { display: 'flex' } },
                      u.a.createElement(d.FormLabel, { width: 10 }, 'Tooltip position'),
                      u.a.createElement(d.Select, {
                        onChange: n.handleChangeTooltipPositionA,
                        allowCustomValue: !1,
                        options: a,
                        value: o.tooltipPositionA,
                        width: 20,
                      })
                    );
              }),
              (n.defineLayerLevel = function () {
                var e = n.defineListOrientedLink();
                return n.props.isLink
                  ? u.a.createElement(
                      d.Collapse,
                      {
                        isOpen: n.state.collapseLayerLevel,
                        label: 'LayerLevel',
                        onToggle: function (e) {
                          n.setState({ collapseLayerLevel: e });
                        },
                      },
                      u.a.createElement(
                        'div',
                        { style: { display: 'flex' } },
                        u.a.createElement(d.FormLabel, { width: 15 }, 'Upgrade on '),
                        u.a.createElement(d.Select, {
                          onChange: n.handleChangeSelectOrientedLinkToUpgrade,
                          allowCustomValue: !1,
                          options: e,
                          value: n.state.orientedLinkComparedToUpgrade,
                          width: 15,
                        }),
                        u.a.createElement(d.Button, { onClick: n.upgradeLayerLevel }, 'Submit')
                      ),
                      u.a.createElement(
                        'div',
                        { style: { display: 'flex' } },
                        u.a.createElement(d.FormLabel, { width: 15 }, 'Downgrade on'),
                        u.a.createElement(d.Select, {
                          onChange: n.handleChangeSelectOrientedLinkToDowngrade,
                          allowCustomValue: !1,
                          options: e,
                          value: n.state.orientedLinkComparedToDowngrade,
                          width: 15,
                        }),
                        u.a.createElement(d.Button, { onClick: n.downgradeLayerLevel }, 'Submit')
                      )
                    )
                  : u.a.createElement('div', null);
              }),
              (n.state = {
                collapsepositionParameter: !1,
                collapseLabel: !1,
                collapseTooltip: !1,
                collapseLayerLevel: !1,
                orientedLinkComparedToDowngrade: {},
                orientedLinkComparedToUpgrade: {},
              }),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype.callBackZIndex = function (e, t) {
              this.props.callBackToParentZIndex(e, t);
            }),
            (t.prototype.render = function () {
              var e = this;
              return u.a.createElement(
                d.Collapse,
                {
                  isOpen: this.state.collapsepositionParameter,
                  label: 'Position Parameter',
                  onToggle: function (t) {
                    e.setState({ collapsepositionParameter: t });
                  },
                },
                u.a.createElement(
                  d.Collapse,
                  {
                    isOpen: this.state.collapseLabel,
                    label: 'Label',
                    onToggle: function (t) {
                      e.setState({ collapseLabel: t });
                    },
                  },
                  u.a.createElement('div', null, this.defineLabelPositionInputs())
                ),
                u.a.createElement(
                  d.Collapse,
                  {
                    isOpen: this.state.collapseTooltip,
                    label: 'Tooltip',
                    onToggle: function (t) {
                      e.setState({ collapseTooltip: t });
                    },
                  },
                  u.a.createElement('div', null, this.defineTooltipPositionInputs())
                ),
                u.a.createElement('div', null, this.defineLayerLevel())
              );
            }),
            t
          );
        })(u.a.Component),
        le = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.setStateAsyncArrayCoor = function (e) {
                return new Promise(function (t) {
                  n.setState(e, t);
                });
              }),
              (n.setStateAsyncArrayInput = function (e) {
                return new Promise(function (t) {
                  n.setState(e, t);
                });
              }),
              (n.addInput = function (e) {
                return l(n, void 0, void 0, function () {
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, this.setStateAsyncArrayInput({ arrayInput: this.state.arrayInput.concat([new ie(e, te(e))]) })];
                      case 1:
                        return t.sent(), [2];
                    }
                  });
                });
              }),
              (n.deleteOwnInput = function () {
                var e = n.state.point.label || n.state.point.name;
                confirm('Delete "' + e + '" ?') && n.props.callBackToParent(n.state.point.id, void 0);
              }),
              (n.callBack = function () {
                '' === n.state.point.label
                  ? (n.setState({ severityAlert: 'error', titleAlert: 'Error: label is empty', hiddenAlert: !1 }),
                    setTimeout(function () {
                      n.setState({ hiddenAlert: !0 });
                    }, 3e3))
                  : (n.props.callBackToParent(n.state.point.id, n.state.point),
                    n.setState({ severityAlert: 'success', titleAlert: 'Save', hiddenAlert: !1 }),
                    n.props.isAddPoint ||
                      setTimeout(function () {
                        n.setState({ hiddenAlert: !0 });
                      }, 3e3));
              }),
              (n.callBackToOther = function (e, t, i, a) {
                var o = n.state.point;
                e && (o.linkURL.followLink = e),
                  t && (o.linkURL.hoveringTooltipLink = t),
                  i && (o.linkURL.hoveringTooltipText = i),
                  a && (o.textObj = a),
                  n.setState({ point: o }),
                  !1 === n.props.isAddPoint && n.callBack();
              }),
              (n.callBackManageLowerLimit = function (e, t) {
                var i = n.state.point;
                (i.colorMode = e.colorMode),
                  (i.traceBorder = e.traceBorder),
                  (i.traceBack = e.traceBack),
                  n.setState({ point: i }),
                  !1 === n.props.isAddPoint && n.callBack();
              }),
              (n.callBackLowerLimit = function (e, t) {
                var i = n.state.point;
                (i.lowerLimit = e), n.setState({ point: i }), !1 === n.props.isAddPoint && n.callBack();
              }),
              (n.callBackMainMetric = function (e, t) {
                var i = n.state.point;
                (i.mainMetric = e), n.setState({ point: i }), !1 === n.props.isAddPoint && n.callBack();
              }),
              (n.getDataInInput = function () {
                return l(n, void 0, void 0, function () {
                  return s(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [4, this.addInput(this.props.point.id)];
                      case 1:
                        return e.sent(), this.generateInputsPoint(), [2];
                    }
                  });
                });
              }),
              (n.componentDidMount = function () {
                n.getDataInInput();
              }),
              (n.componentDidUpdate = function (e, t) {
                return l(n, void 0, void 0, function () {
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return e.point.id === this.props.point.id
                          ? [3, 3]
                          : [
                              4,
                              this.setStateAsyncArrayCoor({
                                point: A(
                                  this.props.point,
                                  parseInt(this.props.options.coordinateSpaceInitial.coordinate.xMin, 10),
                                  parseInt(this.props.options.coordinateSpaceInitial.coordinate.xMax, 10),
                                  parseInt(this.props.options.baseMap.width, 10),
                                  parseInt(this.props.options.coordinateSpaceInitial.coordinate.yMin, 10),
                                  parseInt(this.props.options.coordinateSpaceInitial.coordinate.yMax, 10),
                                  parseInt(this.props.options.baseMap.height, 10)
                                ),
                              }),
                            ];
                      case 1:
                        return t.sent(), [4, this.setStateAsyncArrayInput({ arrayInput: [] })];
                      case 2:
                        t.sent(), this.getDataInInput(), (t.label = 3);
                      case 3:
                        return [2];
                    }
                  });
                });
              }),
              (n.state = {
                arrayInput: [],
                point: A(
                  n.props.point,
                  parseInt(n.props.options.coordinateSpaceInitial.coordinate.xMin, 10),
                  parseInt(n.props.options.coordinateSpaceInitial.coordinate.xMax, 10),
                  parseInt(n.props.options.baseMap.width, 10),
                  parseInt(n.props.options.coordinateSpaceInitial.coordinate.yMin, 10),
                  parseInt(n.props.options.coordinateSpaceInitial.coordinate.yMax, 10),
                  parseInt(n.props.options.baseMap.height, 10)
                ),
                arrayPointClass: [],
                htmlInput: u.a.createElement('div', null),
                hiddenAlert: !0,
                titleAlert: 'Error: label is empty',
                severityAlert: 'error',
              }),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype._handleChange = function (e, t, n) {
              var i = this.state.point,
                a = parseInt(this.props.options.baseMap.width, 10),
                o = parseInt(this.props.options.coordinateSpaceInitial.coordinate.xMin, 10),
                r = parseInt(this.props.options.coordinateSpaceInitial.coordinate.xMax, 10) - o;
              t.startsWith('positionShapeX') && (i.positionXDefault = (((parseInt(e, 10) - o) / r) * a).toString());
              var l = parseInt(this.props.options.baseMap.height, 10),
                s = parseInt(this.props.options.coordinateSpaceInitial.coordinate.yMin, 10),
                p = parseInt(this.props.options.coordinateSpaceInitial.coordinate.yMax, 10) - s;
              t.startsWith('positionShapeY') && (i.positionYDefault = (((parseInt(e, 10) - s) / p) * l).toString()),
                (i = ae(t, i, e, {})),
                this.setState({ point: i }),
                this.generateInputsPoint(),
                !1 === this.props.isAddPoint && this.callBack();
            }),
            (t.prototype.getGoodValue = function (e) {
              var t, n;
              return (
                (t = ''),
                (n = {}),
                e.startsWith('drawGraphicMarker') || e.startsWith('shape') || e.startsWith('sizeHeight') || e.startsWith('linkWithCoordinateSpace')
                  ? (e.startsWith('drawGraphicMarker')
                      ? (n = this.state.point.drawGraphicMarker)
                      : e.startsWith('shape')
                      ? (n = this.state.point.shape)
                      : e.startsWith('sizeWidth') || (e.startsWith('sizeHeight') && (n = this.state.point.sizeHeight)),
                    n)
                  : (e.startsWith('rotateArrow')
                      ? (t = this.state.point.rotateArrow)
                      : e.startsWith('positionShapeX')
                      ? (t = this.state.point.positionShapeX)
                      : e.startsWith('positionShapeY')
                      ? (t = this.state.point.positionShapeY)
                      : e.startsWith('label')
                      ? (t = this.state.point.label)
                      : e.startsWith('color')
                      ? (t = this.state.point.color)
                      : e.startsWith('sizeWidth') && (t = this.state.point.sizeWidth),
                    t)
              );
            }),
            (t.prototype.generateInputsPoint = function () {
              var e,
                t,
                n = this,
                i = this.state.arrayInput,
                a = u.a.createElement('div', null),
                o = [],
                r = function (e) {
                  var t = [];
                  e.uneClassInput.forEach(function (i) {
                    (a =
                      'text' === i.input_type
                        ? u.a.createElement(ne, {
                            key: i.id,
                            label: i.label,
                            name: i.name,
                            placeholder: i.placeholder || '',
                            required: i.required,
                            value: n.getGoodValue(i.name),
                            _handleChange: function (t) {
                              n._handleChange(t.currentTarget.value, i.name, e.id);
                            },
                            shape: n.getGoodValue('shape').value,
                          })
                        : 'select' === i.input_type
                        ? u.a.createElement(oe, {
                            key: i.id,
                            _onChange: function (e, t, i) {
                              var a = n.state.point;
                              ae(t, a, '', e), n.setState({ point: a }), n.generateInputsPoint(), !1 === n.props.isAddPoint && n.callBack();
                            },
                            name: i.name,
                            index: e.id,
                            data: i.optionValues,
                            defaultValue: n.getGoodValue(i.name),
                            shape: n.getGoodValue('shape').value,
                            label: i.label,
                          })
                        : u.a.createElement('div', { key: i.id })),
                      t.push(a);
                  });
                  var i = u.a.createElement('div', { key: 'inputPoint' + e.id.toString(), className: 'inputCoor', id: 'point' + e.id.toString() }, t);
                  o = o.concat(i);
                };
              try {
                for (var l = p(i), s = l.next(); !s.done; s = l.next()) {
                  r(s.value);
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  s && !s.done && (t = l.return) && t.call(l);
                } finally {
                  if (e) throw e.error;
                }
              }
              this.setState(function (e) {
                return { htmlInput: u.a.createElement('ul', null, o) };
              });
            }),
            (t.prototype.render = function () {
              var e = this;
              return u.a.createElement(
                'div',
                null,
                u.a.createElement(
                  'div',
                  { style: { position: 'fixed', bottom: '5%', right: '5%', zIndex: 9999 }, hidden: this.state.hiddenAlert },
                  u.a.createElement(d.Alert, { title: this.state.titleAlert, severity: this.state.severityAlert })
                ),
                u.a.createElement(
                  'div',
                  null,
                  u.a.createElement(Q, {
                    options: this.props.options,
                    onOptionsChange: this.props.onOptionsChange,
                    data: this.props.data,
                    idCoordinate: this.state.point.id,
                    mainMetric: this.state.point.mainMetric,
                    callBackToParent: this.callBackMainMetric,
                    isLink: !1,
                  })
                ),
                !this.props.isAddPoint &&
                  u.a.createElement(
                    'div',
                    null,
                    u.a.createElement(Z, {
                      options: this.props.options,
                      onOptionsChange: this.props.onOptionsChange,
                      data: this.props.data,
                      idCoordinate: this.state.point.id,
                      metrics: this.state.point.metrics,
                      isPoint: !0,
                    })
                  ),
                u.a.createElement(
                  'div',
                  null,
                  u.a.createElement(J, {
                    options: this.props.options,
                    onOptionsChange: this.props.onOptionsChange,
                    data: this.props.data,
                    coordinateSpace: this.state.point,
                    callBackToParent: this.callBackToOther,
                  })
                ),
                u.a.createElement(
                  'div',
                  null,
                  u.a.createElement(_, {
                    options: this.props.options,
                    onOptionsChange: this.props.onOptionsChange,
                    data: this.props.data,
                    coordinate: this.state.point,
                    callBack: this.callBackManageLowerLimit,
                    lowerLimitCallBack: this.callBackLowerLimit,
                    isLink: !1,
                  })
                ),
                u.a.createElement(
                  'div',
                  null,
                  u.a.createElement(re, {
                    options: this.props.options,
                    onOptionsChange: this.props.onOptionsChange,
                    data: this.props.data,
                    callBackToParentZIndex: function () {},
                    isPoint: !0,
                    isLink: !1,
                    isRegion: !1,
                    id: this.state.point.id,
                  })
                ),
                u.a.createElement('div', null, this.state.htmlInput),
                u.a.createElement(
                  'div',
                  { style: { textAlign: 'center' }, className: 'buttonSave' },
                  this.props.isAddPoint &&
                    u.a.createElement(
                      d.Button,
                      {
                        style: { marginRight: '1%' },
                        onClick: function () {
                          return e.callBack();
                        },
                      },
                      'Save'
                    ),
                  !this.props.isAddPoint && u.a.createElement(d.Button, { onClick: this.deleteOwnInput, variant: 'danger' }, 'Delete')
                )
              );
            }),
            t
          );
        })(u.a.Component),
        se = function (e) {
          var t = e.label,
            n = e.name,
            i = e.placeholder,
            a = e.required,
            o = e.value,
            r = e._handleChange,
            l = e.isIncurved;
          return n.startsWith('pointCX') || n.startsWith('pointCY')
            ? l.value
              ? u.a.createElement(
                  'div',
                  null,
                  u.a.createElement(d.FormField, {
                    label: t,
                    labelWidth: 15,
                    inputWidth: 20,
                    type: 'text',
                    required: a,
                    name: n,
                    value: o,
                    onChange: r,
                    placeholder: i,
                  })
                )
              : u.a.createElement('div', null)
            : u.a.createElement(
                'div',
                null,
                u.a.createElement(d.FormField, {
                  label: t,
                  labelWidth: 15,
                  inputWidth: 20,
                  type: 'text',
                  required: a,
                  name: n,
                  value: o,
                  onChange: r,
                  placeholder: i,
                })
              );
        },
        pe = function (e) {
          var t = e._onChange,
            n = e.data,
            i = e.index,
            a = e.defaultValue,
            o = e.name,
            r = e.label;
          return u.a.createElement(
            'div',
            { style: { display: 'flex', marginBottom: '2px' } },
            u.a.createElement(d.FormLabel, { width: 15 }, r),
            u.a.createElement(d.Select, {
              onChange: function (e) {
                return t(e, o, i);
              },
              allowCustomValue: !1,
              options: n,
              value: a,
              width: 20,
            })
          );
        },
        ce = function (e, t, n) {
          var i = new ee(
              e.toString() + 'orientationLink',
              'Orientation',
              'orientationLink' + e.toString(),
              'select',
              [
                { label: 'Nodirectional', value: 'no' },
                { label: 'Monodirectional', value: 'AB' },
                { label: 'Bidirectional', value: 'double' },
              ],
              '',
              !0,
              'Orientation',
              void 0
            ),
            a = new ee(e.toString() + 'size', 'Size (px)', 'size' + e.toString(), 'text', [], '', !0, 'Size', void 0),
            o = new ee(e.toString() + 'pointAX', 'CoordinateClick A - X', 'pointAX' + e.toString(), 'text', [], '', !0, 'PointA-X', void 0),
            r = new ee(e.toString() + 'pointAY', 'CoordinateClick A - Y', 'pointAY' + e.toString(), 'text', [], '', !0, 'PointA-Y', void 0),
            l = new ee(e.toString() + 'pointBX', 'CoordinateClick B - X', 'pointBX' + e.toString(), 'text', [], '', !0, 'PointB-X', void 0),
            s = new ee(e.toString() + 'pointBY', 'CoordinateClick B - Y', 'pointBY' + e.toString(), 'text', [], '', !0, 'PointB-Y', void 0),
            p = new ee(e.toString() + 'labelLink', 'Label', 'label' + e.toString(), 'text', [], '', !0, 'Label', void 0),
            c = new ee(e.toString() + 'regionIn', 'AssociateRegionIn', 'regionIn' + e.toString(), 'select', t, '', !0, 'Associate Region In', void 0),
            u = new ee(
              e.toString() + 'regionOut',
              'AssociateRegionOut',
              'regionOut' + e.toString(),
              'select',
              t,
              '',
              !0,
              'Associate Region Out',
              void 0
            );
          return [
            p,
            i,
            a,
            new ee(e.toString() + 'pointIn', 'AssociatePointIn', 'pointIn' + e.toString(), 'select', n, '', !0, 'Associate Point In', void 0),
            c,
            o,
            r,
            new ee(e.toString() + 'pointOut', 'AssociatePointOut', 'pointOut' + e.toString(), 'select', n, '', !0, 'Associate Point Out', void 0),
            u,
            l,
            s,
            new ee(
              e.toString() + 'isIncurved',
              'Incurved',
              'isIncurved' + e.toString(),
              'select',
              [
                { label: 'Yes', value: !0 },
                { label: 'No', value: !1 },
              ],
              '',
              !0,
              'Incurved',
              void 0
            ),
            new ee(e.toString() + 'pointCX', 'CoordinateClick C - X', 'pointCX' + e.toString(), 'text', [], '', !0, 'PointC-X', void 0),
            new ee(e.toString() + 'pointCY', 'CoordinateClick C - Y', 'pointCY' + e.toString(), 'text', [], '', !0, 'PointC-Y', void 0),
            new ee(e.toString() + 'deleteLink', 'Delete', 'delete' + e.toString(), 'button', [], '', !1, void 0, 'delete'),
          ];
        },
        ue = function (e, t, n, i) {
          return (
            console.log('edit'),
            e.startsWith('label')
              ? (t.label = n)
              : e.startsWith('orientationLink')
              ? (t.orientationLink = i)
              : e.startsWith('pointAX')
              ? (t.pointAPositionX = n)
              : e.startsWith('pointAY')
              ? (t.pointAPositionY = n)
              : e.startsWith('pointBX')
              ? (t.pointBPositionX = n)
              : e.startsWith('pointBY')
              ? (t.pointBPositionY = n)
              : e.startsWith('colorCoordinateA')
              ? (t.colorCoordinateA = n)
              : e.startsWith('colorCoordinateB')
              ? (t.colorCoordinateB = n)
              : e.startsWith('refIdMainMetric')
              ? (t.mainMetric.refId = n)
              : e.startsWith('keyMainMetric')
              ? (t.mainMetric.key = n)
              : e.startsWith('keyValueMainMetric')
              ? (t.mainMetric.keyValue = n)
              : e.startsWith('isIncurved')
              ? (t.isIncurved = i)
              : e.startsWith('pointCX')
              ? (t.pointCPositionX = n)
              : e.startsWith('pointCY')
              ? (t.pointCPositionY = n)
              : e.startsWith('pointIn')
              ? (t.pointIn = n)
              : e.startsWith('pointOut')
              ? (t.pointOut = n)
              : e.startsWith('regionIn')
              ? (t.regionIn = n)
              : e.startsWith('regionOut')
              ? (t.regionOut = n)
              : e.startsWith('size') && (t.size = n),
            t
          );
        },
        de = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.setStateAsyncOrientedLink = function (e) {
                return new Promise(function (t) {
                  n.setState(e, t);
                });
              }),
              (n.setStateAsyncArrayInput = function (e) {
                return new Promise(function (t) {
                  n.setState(e, t);
                });
              }),
              (n.addInput = function (e) {
                return l(n, void 0, void 0, function () {
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [
                          4,
                          this.setStateAsyncArrayInput({
                            arrayInput: this.state.arrayInput.concat([new ie(e, ce(e, this.defineDataRegion(), this.defineDataPoint()))]),
                          }),
                        ];
                      case 1:
                        return t.sent(), [2];
                    }
                  });
                });
              }),
              (n.deleteOwnInput = function () {
                var e = n.state.orientedLink.label || n.state.orientedLink.name;
                confirm('Delete "' + e + '" ?') && n.props.callBackToParent(n.state.orientedLink.id, void 0);
              }),
              (n.updateAssociatePointAndRegion = function (e, t) {
                var i = n.props.options.arrayPoints,
                  a = n.props.options.regionCoordinateSpace;
                return (
                  t.startsWith('pointIn')
                    ? ((e = ue('regionIn', e, '', {})),
                      i.forEach(function (t) {
                        (n.state.orientedLink.pointIn !== t.name && n.state.orientedLink.pointIn !== t.label) ||
                          ((e.pointAPositionXDefault = t.positionXDefault),
                          (e.pointAPositionYDefault = t.positionYDefault),
                          (e = ue('pointAX', e, t.positionShapeX, {})),
                          (e = ue('pointAY', e, t.positionShapeY, {})));
                      }))
                    : t.startsWith('regionIn')
                    ? ((e = ue('pointIn', e, '', {})),
                      a.forEach(function (t) {
                        n.state.orientedLink.regionIn === t.label &&
                          ((e = ue('pointAX', e, (parseInt(t.coords.xMax, 10) - parseInt(t.coords.xMin, 10)).toString(), {})),
                          (e = ue('pointAY', e, (parseInt(t.coords.yMax, 10) - parseInt(t.coords.yMin, 10)).toString(), {})),
                          (n.state.orientedLink.pointAPositionXDefault = (
                            parseInt(t.coordsDefault.xMax, 10) - parseInt(t.coordsDefault.xMin, 10)
                          ).toString()),
                          (n.state.orientedLink.pointAPositionYDefault = (
                            parseInt(t.coordsDefault.yMax, 10) - parseInt(t.coordsDefault.yMin, 10)
                          ).toString()));
                      }))
                    : t.startsWith('pointOut')
                    ? ((e = ue('regionOut', e, '', {})),
                      i.forEach(function (t) {
                        (n.state.orientedLink.pointOut !== t.name && n.state.orientedLink.pointOut !== t.label) ||
                          ((n.state.orientedLink.pointBPositionXDefault = t.positionXDefault),
                          (n.state.orientedLink.pointBPositionYDefault = t.positionYDefault),
                          (e = ue('pointBX', e, t.positionShapeX, {})),
                          (e = ue('pointBY', e, t.positionShapeY, {})));
                      }))
                    : t.startsWith('regionOut') &&
                      ((e = ue('pointOut', e, '', {})),
                      a.forEach(function (t) {
                        n.state.orientedLink.regionOut === t.label &&
                          ((n.state.orientedLink.pointBPositionXDefault = (
                            parseInt(t.coordsDefault.xMax, 10) - parseInt(t.coordsDefault.xMin, 10)
                          ).toString()),
                          (n.state.orientedLink.pointBPositionYDefault = (
                            parseInt(t.coordsDefault.yMax, 10) - parseInt(t.coordsDefault.yMin, 10)
                          ).toString()),
                          (e = ue('pointBX', e, (parseInt(t.coords.xMax, 10) - parseInt(t.coords.xMin, 10)).toString(), {})),
                          (e = ue('pointBY', e, (parseInt(t.coords.yMax, 10) - parseInt(t.coords.yMin, 10)).toString(), {})));
                      })),
                  e
                );
              }),
              (n.callBack = function () {
                '' === n.state.orientedLink.label
                  ? (n.setState({ severityAlert: 'error', titleAlert: 'Error: label is empty', hiddenAlert: !1 }),
                    setTimeout(function () {
                      n.setState({ hiddenAlert: !0 });
                    }, 3e3))
                  : (n.props.callBackToParent(n.state.orientedLink.id, n.state.orientedLink),
                    n.setState({ severityAlert: 'success', titleAlert: 'Save', hiddenAlert: !1 }),
                    n.props.isAddLink ||
                      setTimeout(function () {
                        n.setState({ hiddenAlert: !0 });
                      }, 3e3));
              }),
              (n.callBackToOther = function (e, t, i, a) {
                var o = n.state.orientedLink;
                e && (o.linkURL.followLink = e),
                  t && (o.linkURL.hoveringTooltipLink = t),
                  i && (o.linkURL.hoveringTooltipText = i),
                  a && (o.textObj = a),
                  n.setState({ orientedLink: o }),
                  !1 === n.props.isAddLink && n.callBack();
              }),
              (n.callBackManageLowerLimit = function (e, t) {
                var i = n.state.orientedLink;
                (i.colorMode = e.colorMode),
                  (i.traceBorder = e.traceBorder),
                  (i.traceBack = e.traceBack),
                  n.setState({ orientedLink: i }),
                  !1 === n.props.isAddLink && n.callBack();
              }),
              (n.callBackLowerLimit = function (e, t) {
                var i = n.state.orientedLink;
                (i.lowerLimit = e), n.setState({ orientedLink: i }), !1 === n.props.isAddLink && n.callBack();
              }),
              (n.callBackMainMetric = function (e, t) {
                var i = n.state.orientedLink;
                (i.mainMetric = e), n.setState({ orientedLink: i }), !1 === n.props.isAddLink && n.callBack();
              }),
              (n.callBackMainMetricB = function (e, t) {
                var i = n.state.orientedLink;
                (i.mainMetricB = e), n.setState({ orientedLink: i }), !1 === n.props.isAddLink && n.callBack();
              }),
              (n.getDataInInput = function () {
                return l(n, void 0, void 0, function () {
                  return s(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [4, this.addInput(this.props.orientedLink.id)];
                      case 1:
                        return e.sent(), this.generateInputsOrientedLink(), [2];
                    }
                  });
                });
              }),
              (n.componentDidMount = function () {
                n.getDataInInput();
              }),
              (n.componentDidUpdate = function (e, t) {
                return l(n, void 0, void 0, function () {
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return e.orientedLink.id === this.props.orientedLink.id
                          ? [3, 3]
                          : [4, this.setStateAsyncOrientedLink({ orientedLink: w(this.props.orientedLink) })];
                      case 1:
                        return t.sent(), [4, this.setStateAsyncArrayInput({ arrayInput: [] })];
                      case 2:
                        t.sent(), this.getDataInInput(), (t.label = 3);
                      case 3:
                        return [2];
                    }
                  });
                });
              }),
              (n.state = {
                arrayInput: [],
                orientedLink: w(n.props.orientedLink),
                arrayOrientedLink: [],
                htmlInput: u.a.createElement('div', null),
                hiddenAlert: !0,
                titleAlert: 'Error: label is empty',
                severityAlert: 'error',
              }),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype.defineDataRegion = function () {
              var e = this.props.options.regionCoordinateSpace,
                t = [];
              return (
                t.push({ label: 'None', value: '' }),
                e.forEach(function (e) {
                  var n = { label: e.label, value: e.label };
                  t.push(n);
                }),
                t
              );
            }),
            (t.prototype.defineDataPoint = function () {
              var e = this.props.options.arrayPoints,
                t = [];
              return (
                t.push({ label: 'None', value: '' }),
                e.forEach(function (e) {
                  var n = e.label || e.name,
                    i = { label: n, value: n };
                  t.push(i);
                }),
                t
              );
            }),
            (t.prototype._handleChange = function (e, t, n) {
              var i = this.state.orientedLink,
                a = parseInt(this.props.options.baseMap.width, 10),
                o = parseInt(this.props.options.coordinateSpaceInitial.coordinate.xMin, 10),
                r = parseInt(this.props.options.coordinateSpaceInitial.coordinate.xMax, 10) - o;
              t.startsWith('pointAX')
                ? (i.pointAPositionXDefault = (((parseInt(e, 10) - o) / r) * a).toString())
                : t.startsWith('pointBX')
                ? (i.pointBPositionXDefault = (((parseInt(e, 10) - o) / r) * a).toString())
                : t.startsWith('pointCX') && (i.pointCPositionXDefault = (((parseInt(e, 10) - o) / r) * a).toString());
              var l = parseInt(this.props.options.baseMap.height, 10),
                s = parseInt(this.props.options.coordinateSpaceInitial.coordinate.yMin, 10),
                p = parseInt(this.props.options.coordinateSpaceInitial.coordinate.yMax, 10) - s;
              t.startsWith('pointAY')
                ? (i.pointAPositionYDefault = (((parseInt(e, 10) - s) / p) * l).toString())
                : t.startsWith('pointBY')
                ? (i.pointBPositionYDefault = (((parseInt(e, 10) - s) / p) * l).toString())
                : t.startsWith('pointCY') && (i.pointCPositionYDefault = (((parseInt(e, 10) - s) / p) * l).toString()),
                (i = ue(t, i, e, {})),
                this.setState({ orientedLink: i }),
                this.generateInputsOrientedLink(),
                !1 === this.props.isAddLink && this.callBack();
            }),
            (t.prototype.getGoodValue = function (e) {
              var t, n;
              return (
                (t = ''),
                (n = {}),
                e.startsWith('orientationLink') ||
                e.startsWith('isIncurved') ||
                e.startsWith('pointIn') ||
                e.startsWith('pointOut') ||
                e.startsWith('regionIn') ||
                e.startsWith('regionOut')
                  ? (e.startsWith('orientationLink')
                      ? (n = this.state.orientedLink.orientationLink)
                      : e.startsWith('isIncurved')
                      ? (n = this.state.orientedLink.isIncurved)
                      : e.startsWith('pointIn')
                      ? (n = { label: this.state.orientedLink.pointIn, value: this.state.orientedLink.pointIn })
                      : e.startsWith('pointOut')
                      ? (n = { label: this.state.orientedLink.pointOut, value: this.state.orientedLink.pointOut })
                      : e.startsWith('regionIn')
                      ? (n = { label: this.state.orientedLink.regionIn, value: this.state.orientedLink.regionIn })
                      : e.startsWith('regionOut') && (n = { label: this.state.orientedLink.regionOut, value: this.state.orientedLink.regionOut }),
                    n)
                  : e.startsWith('mainMetric')
                  ? this.state.orientedLink.mainMetric
                  : (e.startsWith('label')
                      ? (t = this.state.orientedLink.label)
                      : e.startsWith('pointAX')
                      ? (t = this.state.orientedLink.pointAPositionX)
                      : e.startsWith('pointAY')
                      ? (t = this.state.orientedLink.pointAPositionY)
                      : e.startsWith('pointBX')
                      ? (t = this.state.orientedLink.pointBPositionX)
                      : e.startsWith('pointBY')
                      ? (t = this.state.orientedLink.pointBPositionY)
                      : e.startsWith('colorCoordinateA')
                      ? (t = this.state.orientedLink.colorCoordinateA)
                      : e.startsWith('colorCoordinateB')
                      ? (t = this.state.orientedLink.colorCoordinateB)
                      : e.startsWith('refIdMainMetric')
                      ? (t = this.state.orientedLink.mainMetric.refId || '')
                      : e.startsWith('keyMainMetric')
                      ? (t = this.state.orientedLink.mainMetric.key || '')
                      : e.startsWith('keyValueMainMetric')
                      ? (t = this.state.orientedLink.mainMetric.keyValue || '')
                      : e.startsWith('pointCX')
                      ? (t = this.state.orientedLink.pointCPositionX)
                      : e.startsWith('pointCY')
                      ? (t = this.state.orientedLink.pointCPositionY)
                      : e.startsWith('size') && (t = this.state.orientedLink.size),
                    t)
              );
            }),
            (t.prototype.generateInputsOrientedLink = function () {
              var e,
                t,
                n = this,
                i = this.state.arrayInput,
                a = [],
                o = u.a.createElement('div', null),
                r = function (e) {
                  var t = [];
                  e.uneClassInput.forEach(function (i) {
                    (o =
                      'text' === i.input_type
                        ? u.a.createElement(se, {
                            key: i.id,
                            label: i.label,
                            name: i.name,
                            placeholder: i.placeholder || '',
                            required: i.required,
                            value: n.getGoodValue(i.name),
                            _handleChange: function (t) {
                              n._handleChange(t.currentTarget.value, i.name, e.id);
                            },
                            isIncurved: n.getGoodValue('isIncurved'),
                          })
                        : 'select' === i.input_type
                        ? u.a.createElement(pe, {
                            key: i.id,
                            _onChange: function (e, t, i) {
                              var a = n.state.orientedLink;
                              ue(t, a, e.value || '', e),
                                n.updateAssociatePointAndRegion(a, t),
                                n.setState({ orientedLink: a }),
                                n.generateInputsOrientedLink(),
                                !1 === n.props.isAddLink && n.callBack();
                            },
                            name: i.name,
                            index: e.id,
                            data: i.optionValues,
                            defaultValue: n.getGoodValue(i.name),
                            label: i.label,
                          })
                        : u.a.createElement('div', { key: i.id })),
                      t.push(o);
                  });
                  var i = u.a.createElement(
                    'div',
                    { key: 'inputOrientedLink' + e.id.toString(), className: 'inputCoor', id: 'orientedLink' + e.id.toString() },
                    t
                  );
                  a = a.concat(i);
                };
              try {
                for (var l = p(i), s = l.next(); !s.done; s = l.next()) {
                  r(s.value);
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  s && !s.done && (t = l.return) && t.call(l);
                } finally {
                  if (e) throw e.error;
                }
              }
              this.setState(function (e) {
                return { htmlInput: u.a.createElement('ul', null, a) };
              });
            }),
            (t.prototype.callBackZIndex = function (e, t) {
              var n = this.state.orientedLink;
              (n.zIndex = e), this.setState({ orientedLink: n }), !1 === this.props.isAddLink && this.callBack();
            }),
            (t.prototype.render = function () {
              var e = this;
              return u.a.createElement(
                'div',
                null,
                u.a.createElement(
                  'div',
                  { style: { position: 'fixed', bottom: '5%', right: '5%', zIndex: 9999 }, hidden: this.state.hiddenAlert },
                  u.a.createElement(d.Alert, { title: this.state.titleAlert, severity: this.state.severityAlert })
                ),
                u.a.createElement(
                  'div',
                  null,
                  u.a.createElement(Q, {
                    options: this.props.options,
                    onOptionsChange: this.props.onOptionsChange,
                    data: this.props.data,
                    idCoordinate: this.state.orientedLink.id,
                    mainMetric: this.state.orientedLink.mainMetric,
                    mainMetricB: this.state.orientedLink.mainMetricB,
                    callBackToParent: this.callBackMainMetric,
                    callBackToParentMainMetricB: this.callBackMainMetricB,
                    isLink: !0,
                  })
                ),
                u.a.createElement(
                  'div',
                  null,
                  u.a.createElement(Z, {
                    options: this.props.options,
                    onOptionsChange: this.props.onOptionsChange,
                    data: this.props.data,
                    idCoordinate: this.state.orientedLink.id,
                    metrics: this.state.orientedLink.metrics,
                    isLink: !0,
                  })
                ),
                u.a.createElement(
                  'div',
                  null,
                  u.a.createElement(J, {
                    options: this.props.options,
                    onOptionsChange: this.props.onOptionsChange,
                    data: this.props.data,
                    coordinateSpace: this.state.orientedLink,
                    callBackToParent: this.callBackToOther,
                  })
                ),
                u.a.createElement(
                  'div',
                  null,
                  u.a.createElement(_, {
                    options: this.props.options,
                    onOptionsChange: this.props.onOptionsChange,
                    data: this.props.data,
                    coordinate: this.state.orientedLink,
                    callBack: this.callBackManageLowerLimit,
                    lowerLimitCallBack: this.callBackLowerLimit,
                    isLink: !0,
                  })
                ),
                u.a.createElement(
                  'div',
                  null,
                  u.a.createElement(re, {
                    options: this.props.options,
                    onOptionsChange: this.props.onOptionsChange,
                    data: this.props.data,
                    callBackToParentZIndex: this.callBackZIndex.bind(this),
                    isPoint: !1,
                    isLink: !0,
                    isRegion: !1,
                    id: this.state.orientedLink.id,
                  })
                ),
                u.a.createElement('div', null, this.state.htmlInput),
                u.a.createElement(
                  'div',
                  { style: { textAlign: 'center' }, className: 'buttonSave' },
                  this.props.isAddLink &&
                    u.a.createElement(
                      d.Button,
                      {
                        style: { marginRight: '1%' },
                        onClick: function () {
                          return e.callBack();
                        },
                      },
                      'Save'
                    ),
                  !this.props.isAddLink && u.a.createElement(d.Button, { onClick: this.deleteOwnInput, variant: 'danger' }, 'Delete')
                )
              );
            }),
            t
          );
        })(u.a.Component),
        he = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.searchNewId = function (e) {
                var t,
                  n,
                  i = -1;
                try {
                  for (var a = p(e), o = a.next(); !o.done; o = a.next()) {
                    var r = o.value;
                    r.id > i && (i = r.id);
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    o && !o.done && (n = a.return) && n.call(a);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                return (i += 1);
              }),
              (n.defineIdPoint = function () {
                var e = 1;
                return 0 === n.props.options.arrayPoints.length
                  ? e
                  : (e = n.props.options.arrayPoints[n.props.options.arrayPoints.length - 1].id + 1);
              }),
              (n.defineIdOrientedLink = function () {
                var e = 1;
                return 0 === n.props.options.arrayOrientedLinks.length
                  ? e
                  : (e = n.props.options.arrayOrientedLinks[n.props.options.arrayOrientedLinks.length - 1].id + 1);
              }),
              (n.lastId = function () {
                var e,
                  t,
                  i = n.props.options.regionCoordinateSpace,
                  a = 0;
                try {
                  for (var o = p(i), r = o.next(); !r.done; r = o.next()) {
                    var l = r.value;
                    l.id > a && (a = l.id);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    r && !r.done && (t = o.return) && t.call(o);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return a;
              }),
              (n.componentDidMount = function () {
                if (n.props.isRegion) n.setState({ coordinate: T(n.lastId()) });
                else if (n.props.isPoint) {
                  var e = n.defineIdPoint();
                  n.setState({
                    point:
                      ((i = e),
                      (a = i),
                      (o = new b(
                        '',
                        !1,
                        'white',
                        'black',
                        { italic: !1, bold: !1, underline: !1 },
                        !0,
                        {
                          legendElement: '',
                          numericFormatElement: '5',
                          unit: '',
                          displayObjectInTooltip: !1,
                          addColorTextElement: !1,
                          colorTextElement: 'white',
                          addColorBackElement: !1,
                          colorBackElement: 'black',
                        },
                        {
                          legendElement: '',
                          numericFormatElement: '5',
                          unit: '',
                          displayObjectInTooltip: !0,
                          addColorTextElement: !0,
                          colorTextElement: '',
                          addColorBackElement: !0,
                          colorBackElement: 'black',
                        }
                      )),
                      (l = new y('', '', '')),
                      (s = new m('0', '0', '0', '0', {}, {})),
                      new f(
                        a,
                        l,
                        [],
                        [],
                        '',
                        o,
                        { key: '', unit: '', format: '', keyValue: '', refId: '', manageValue: 'avg' },
                        [],
                        !1,
                        !1,
                        !1,
                        s,
                        'point' + a.toString(),
                        '',
                        { label: 'Yes', value: 'true' },
                        { label: 'Circle', value: 'circle' },
                        '12',
                        { label: 'Medium', value: 'medium' },
                        '0',
                        '0',
                        '0',
                        'black',
                        [],
                        [],
                        '0',
                        '0',
                        '0',
                        '0'
                      )),
                  });
                } else if (n.props.isLink) {
                  e = n.defineIdOrientedLink();
                  var t = n.props.options.zIndexOrientedLink + 1;
                  n.setState({ orientedLink: D(e, t) }), n.props.onOptionsChange(r(r({}, n.props.options), { zIndexOrientedLink: t }));
                }
                var i, a, o, l, s;
              }),
              (n.setAsyncOption = function (e) {
                return Promise.resolve('Success').then(function () {
                  n.props.isRegion
                    ? n.props.onOptionsChange(r(r({}, n.props.options), { indexRegion: e }))
                    : n.props.isPoint
                    ? n.props.onOptionsChange(r(r({}, n.props.options), { indexPoint: e }))
                    : n.props.isLink && n.props.onOptionsChange(r(r({}, n.props.options), { indexOrientedLink: e }));
                });
              }),
              (n.callBack = function (e, t) {
                return l(n, void 0, void 0, function () {
                  var e;
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return t ? ((e = this.props.options.regionCoordinateSpace.slice()), [4, this.setAsyncOption(t.id)]) : [3, 2];
                      case 1:
                        n.sent(),
                          this.props.onOptionsChange(r(r({}, this.props.options), { regionCoordinateSpace: e.concat(t) })),
                          this.props.returnEditMode && this.props.returnEditMode(),
                          (n.label = 2);
                      case 2:
                        return [2];
                    }
                  });
                });
              }),
              (n.callBackPoint = function (e, t) {
                return l(n, void 0, void 0, function () {
                  var e;
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return t ? ((e = this.props.options.arrayPoints.slice()), [4, this.setAsyncOption(t.id)]) : [3, 2];
                      case 1:
                        n.sent(),
                          this.props.onOptionsChange(r(r({}, this.props.options), { arrayPoints: e.concat(t) })),
                          this.props.returnEditMode && this.props.returnEditMode(),
                          (n.label = 2);
                      case 2:
                        return [2];
                    }
                  });
                });
              }),
              (n.callBackOrientedLink = function (e, t) {
                return l(n, void 0, void 0, function () {
                  var e;
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return t ? ((e = this.props.options.arrayOrientedLinks.slice()), [4, this.setAsyncOption(t.id)]) : [3, 2];
                      case 1:
                        n.sent(),
                          this.props.onOptionsChange(r(r({}, this.props.options), { arrayOrientedLinks: e.concat(t) })),
                          this.props.returnEditMode && this.props.returnEditMode(),
                          (n.label = 2);
                      case 2:
                        return [2];
                    }
                  });
                });
              }),
              (n.state = { coordinate: void 0, point: void 0, orientedLink: void 0 }),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype.render = function () {
              return this.props.isRegion
                ? u.a.createElement(
                    'div',
                    null,
                    this.state.coordinate &&
                      u.a.createElement($, {
                        options: this.props.options,
                        onOptionsChange: this.props.onOptionsChange,
                        data: this.props.data,
                        coordinate: this.state.coordinate,
                        callBackToParent: this.callBack,
                        isAddCoordinate: !0,
                      })
                  )
                : this.props.isPoint
                ? u.a.createElement(
                    'div',
                    null,
                    this.state.point &&
                      u.a.createElement(le, {
                        options: this.props.options,
                        onOptionsChange: this.props.onOptionsChange,
                        data: this.props.data,
                        point: this.state.point,
                        callBackToParent: this.callBackPoint,
                        isAddPoint: !0,
                      })
                  )
                : this.props.isLink
                ? u.a.createElement(
                    'div',
                    null,
                    this.state.orientedLink &&
                      u.a.createElement(de, {
                        options: this.props.options,
                        onOptionsChange: this.props.onOptionsChange,
                        data: this.props.data,
                        orientedLink: this.state.orientedLink,
                        callBackToParent: this.callBackOrientedLink,
                        isAddLink: !0,
                      })
                  )
                : u.a.createElement('div', null);
            }),
            t
          );
        })(u.a.Component),
        fe = function (e) {
          return String(e).match(/^-{0,1}\d+$/) || String(e).match(/^\d+\.\d+$/) ? 1 : 0;
        },
        me = function (e) {
          var t = e,
            n = '';
          if (e.indexOf('#') > -1 && (t = e.replace('rgba', 'rgb')).indexOf(',') > -1) {
            var i = t.split(',');
            (t = i[0] + ',' + i[1] + ',' + i[2] + ')'), i.length > 3 && (n = i[3].replace(')', ''));
          }
          return { color: t, transparency: n };
        },
        ge = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.editColorSvgZone = function (e, t, n, i) {
                var a = me(t),
                  o = me(n),
                  r = document.getElementById(e);
                r &&
                  ((r.style.fill = a.color),
                  (r.style.fillOpacity = a.transparency),
                  (r.style.stroke = o.color),
                  (r.style.strokeOpacity = o.transparency),
                  (r.style.strokeWidth = i));
              }),
              (n.generateValueMetricElement = function (e, t) {
                var n = 'NaN',
                  i = e.textObj.valueGenerateObjectText ? parseInt(e.textObj.valueGenerateObjectText.numericFormatElement, 10) : 1;
                t && e.textObj.valueGenerateObjectText && '' !== e.textObj.valueGenerateObjectText.numericFormatElement && i
                  ? (n = (t || 0).toPrecision(i).toString())
                  : t && (n = t.toString());
                var a = n;
                return (
                  e.textObj.valueGenerateObjectText &&
                    'NaN' !== n &&
                    (a = e.textObj.valueGenerateObjectText.legendElement + ' ' + n + ' ' + e.textObj.valueGenerateObjectText.unit),
                  'NaN' === a ? '' : a
                );
              }),
              (n.setStateTooltip = function (e, t, i) {
                var a = { color: t.textObj.colorText, backgroundColor: t.textObj.colorBack },
                  o = {
                    color: t.textObj.valueGenerateObjectText ? t.textObj.valueGenerateObjectText.colorTextElement : 'white',
                    backgroundColor: t.textObj.valueGenerateObjectText ? t.textObj.valueGenerateObjectText.colorBackElement : 'black',
                  },
                  r = n.generateValueMetricElement(t, i);
                return {
                  tooltipValue:
                    '' !== r
                      ? u.a.createElement(
                          'div',
                          null,
                          u.a.createElement(
                            'div',
                            { style: a },
                            u.a.createElement('a', { href: t.linkURL.hoveringTooltipLink }, t.linkURL.hoveringTooltipText),
                            t.textObj.isTextTooltip && u.a.createElement('p', null, t.label)
                          ),
                          u.a.createElement(
                            'div',
                            { style: o },
                            t.textObj.generateObjectText &&
                              t.textObj.valueGenerateObjectText &&
                              t.textObj.valueGenerateObjectText.displayObjectInTooltip &&
                              u.a.createElement('p', null, r)
                          ),
                          u.a.createElement('div', null, n.displayValuesAuxMetrics())
                        )
                      : null,
                  backgroundColor: e.colorBack,
                  borderColor: e.colorBorder,
                  sizeBorder: e.sizeBorder,
                  valueQuery: r,
                };
              }),
              (n.displayValueQuery = function (e) {
                return !(
                  !e.textObj.generateObjectText ||
                  !e.textObj.valueGenerateObjectText ||
                  e.textObj.valueGenerateObjectText.displayObjectInTooltip
                );
              }),
              (n.getPositionTextObjectRegionSVG = function (e) {
                var t,
                  i = { top: '0', bottom: '0', left: '0', right: '0' };
                if ((t = n.props.options.baseMap.isUploaded ? document.getElementById(e) : document.getElementById('oct' + e))) {
                  var a = 0,
                    o = 0,
                    r = 0,
                    l = 0,
                    s = '',
                    p = '';
                  if ('path' === t.localName) {
                    for (var c = t.attributes.d.nodeValue.split(' '), u = -2, d = 1e6, h = 0, f = -1, m = 1e6, g = 0, b = 0; b < c.length; b++) {
                      var y = parseInt(c[b], 10);
                      b === u + 3 && (y < d && (d = y), y > h && (h = y), (u = b)), b === f + 3 && (y < m && (m = y), y > g && (g = y), (f = b));
                    }
                    (p = h.toString()), (s = g.toString());
                  } else if ('ellipse' === t.localName) {
                    (a = parseInt(t.attributes.cx.nodeValue, 10)), (o = parseInt(t.attributes.cy.nodeValue, 10));
                    var v = 2 * parseInt(t.attributes.rx.nodeValue, 10),
                      x = 2 * parseInt(t.attributes.ry.nodeValue, 10);
                    (p = (a + v).toString()), (s = (o + x).toString());
                  } else
                    'rect' === t.localName &&
                      ((a = parseInt(t.attributes.x.nodeValue, 10)),
                      (o = parseInt(t.attributes.y.nodeValue, 10)),
                      (r = parseInt(t.attributes.width.nodeValue, 10)),
                      (l = parseInt(t.attributes.height.nodeValue, 10)),
                      (p = (a + r).toString()),
                      (s = (o + l).toString()));
                  (i.top = s), (i.left = p);
                }
                return i;
              }),
              (n.generateTooltipAndEditColor = function (e, t) {
                var i = !1,
                  a = (function (e, t) {
                    var n,
                      i,
                      a = e.lowerLimit,
                      o = { colorBack: '', colorBorder: '', sizeBorder: 0 };
                    if (e.colorMode && t)
                      try {
                        for (var r = p(a), l = r.next(); !l.done; l = r.next()) {
                          var s = l.value,
                            c = s.lowerLimitMin.replace('>', ''),
                            u = parseFloat(c),
                            d = parseFloat(s.lowerLimitMax);
                          if ((u <= t || !s.lowerLimitMin) && (d >= t || !s.lowerLimitMax) && a.length > 0) {
                            (o.colorBack = e.traceBack ? s.backColor : ''),
                              (o.colorBorder = e.traceBorder ? s.borderColor : ''),
                              (o.sizeBorder = e.traceBorder ? parseInt(s.sizeBorder, 10) : 0);
                            break;
                          }
                        }
                      } catch (e) {
                        n = { error: e };
                      } finally {
                        try {
                          l && !l.done && (i = r.return) && i.call(r);
                        } finally {
                          if (n) throw n.error;
                        }
                      }
                    else
                      a.length > 0 &&
                        ((o.colorBack = e.traceBack ? a[0].backColor : ''),
                        (o.colorBorder = e.traceBorder ? a[0].borderColor : ''),
                        (o.sizeBorder = e.traceBorder ? parseInt(a[0].sizeBorder, 10) : 0));
                    return o;
                  })(e, t);
                e.mode && n.editColorSvgZone(e.idSVG, a.colorBack, a.colorBorder, a.sizeBorder.toString());
                var o = n.setStateTooltip(a, e, t);
                if (e.mode) {
                  var r = n.getPositionTextObjectRegionSVG(e.idSVG);
                  i = !0;
                  var l = e.textObj.style,
                    s = { width: 'auto', position: 'absolute', zIndex: 999, left: r.left + 'px', top: r.top + 'px', border: '1px solid black' },
                    c = {
                      textDecoration: n.defineTextDecoration(l),
                      fontStyle: n.defineFontStyle(l),
                      fontWeight: n.defineFontWeight(l),
                      fontSize: n.props.options.display.size,
                      fontFamily: n.props.options.display.police,
                      color: e.textObj.colorText,
                      backgroundColor: e.textObj.colorBack,
                      margin: 0,
                      padding: '5px 5px 0 5px',
                    },
                    d = {
                      textDecoration: n.defineTextDecoration(l),
                      fontStyle: n.defineFontStyle(l),
                      fontWeight: n.defineFontWeight(l),
                      color: e.textObj.valueGenerateObjectText.addColorTextElement ? e.textObj.valueGenerateObjectText.colorTextElement : 'white',
                      backgroundColor: e.textObj.valueGenerateObjectText.addColorBackElement
                        ? e.textObj.valueGenerateObjectText.colorBackElement
                        : 'black',
                      fontSize: n.props.options.display.size,
                      fontFamily: n.props.options.display.police,
                      margin: 0,
                      padding: '5px 5px 0 5px',
                    },
                    h = u.a.createElement(
                      'div',
                      { style: s },
                      !e.textObj.isTextTooltip && u.a.createElement('p', { style: c }, e.label),
                      e.textObj.generateObjectText &&
                        !e.textObj.valueGenerateObjectText.displayObjectInTooltip &&
                        u.a.createElement('p', { style: d }, n.displayValueQuery(e) && o.valueQuery)
                    );
                  e.textObj.isTextTooltip && e.textObj.valueGenerateObjectText.displayObjectInTooltip && (h = u.a.createElement('div', null)),
                    n.setState({
                      htmlResult: h,
                      tooltipValue: o.tooltipValue,
                      backgroundColor: o.backgroundColor,
                      borderColor: o.borderColor,
                      sizeBorder: o.sizeBorder,
                      valueQuery: o.valueQuery,
                    });
                }
                i ||
                  n.setState({
                    tooltipValue: o.tooltipValue,
                    backgroundColor: o.backgroundColor,
                    borderColor: o.borderColor,
                    sizeBorder: o.sizeBorder,
                    valueQuery: o.valueQuery,
                  });
              }),
              (n.reqMetrics = function () {
                var e = n.props.uneCoor;
                if ((v(e, n.props), e.mainMetric.returnQuery && e.mainMetric.returnQuery.length > 0)) {
                  var t = L(e.mainMetric);
                  n.generateTooltipAndEditColor(e, t);
                } else n.generateTooltipAndEditColor(e, null);
              }),
              (n.getValuesAuxiliaryMetrics = function () {
                var e = n.props.uneCoor;
                x(e, n.props);
                var t = e.mainMetric,
                  i = e.metrics,
                  a = [];
                return (
                  i.forEach(function (e) {
                    var n,
                      i = 0,
                      o = 0,
                      r = '';
                    if (e.returnQuery && e.returnQuery.length > 0) {
                      var l = (null === (n = e.returnQuery) || void 0 === n ? void 0 : n.length) || 0;
                      if ('' !== e.key && '' !== e.keyValue)
                        for (var s = 0; s < l; s++) {
                          if (
                            (u = e.returnQuery[s]).fields[0].labels &&
                            '' !== t.refId &&
                            (u.fields[0].labels[t.key] === t.keyValue || ('' === t.key && '' === t.keyValue)) &&
                            u.fields[0].labels[e.key] === e.keyValue
                          )
                            for (var p = u.fields[0].values.length, c = 0; c < p; c++)
                              u.fields[0].values.get(c) && ((o += u.fields[0].values.get(c)), i++);
                        }
                      else
                        for (s = 0; s < l; s++) {
                          var u;
                          if (
                            (u = e.returnQuery[s]).fields[0].labels &&
                            t.refId &&
                            (u.fields[0].labels[t.key] === t.keyValue || ('' === t.key && '' === t.keyValue))
                          ) {
                            p = u.fields[0].values.length;
                            for (var d = 0; d < p; d++) u.fields[0].values.get(d) && ((o += u.fields[0].values.get(d)), i++);
                          }
                        }
                      'avg' === e.manageValue
                        ? (r = (o / i).toString())
                        : 'sum' === e.manageValue
                        ? (r = o.toString())
                        : 'err' === e.manageValue && (r = i > 1 ? 'error' : o.toString());
                    }
                    '' !== r && a.push(r);
                  }),
                  a
                );
              }),
              (n.getConvertValueAuxMetrics = function (e) {
                var t = n.props.uneCoor,
                  i = parseInt(t.textObj.generateAuxiliaryElement.numericFormatElement, 10) || 1,
                  a = t.textObj.generateAuxiliaryElement.unit;
                return parseFloat(e).toPrecision(i).toString() + ' ' + a;
              }),
              (n.displayValuesAuxMetrics = function () {
                var e,
                  t,
                  i = [],
                  a = n.props.uneCoor,
                  o = n.getValuesAuxiliaryMetrics(),
                  r = a.metrics,
                  l = a.textObj.generateAuxiliaryElement.addColorTextElement,
                  s = a.textObj.generateAuxiliaryElement.addColorBackElement,
                  c = a.textObj.generateAuxiliaryElement.legendElement,
                  d = '',
                  h = '';
                (d = l ? a.textObj.generateAuxiliaryElement.colorTextElement : 'white'),
                  (h = s ? a.textObj.generateAuxiliaryElement.colorBackElement : 'black');
                var f = { fontFamily: n.props.options.display.police, fontSize: '10px', marginTop: '5px', marginBottom: '0px', color: d },
                  m = {
                    fontFamily: n.props.options.display.police,
                    fontSize: '10px',
                    marginTop: '5px',
                    marginLeft: '5px',
                    marginBottom: '0px',
                    color: d,
                  },
                  g = { fontFamily: n.props.options.display.police, fontSize: '9px', marginLeft: '10px', marginBottom: '0px', color: d };
                if (r.length > 0) {
                  i.push(u.a.createElement('p', { key: 'region' + a.id + 'contentToolTip1', style: f }, 'Auxiliary Metric')),
                    i.push(u.a.createElement('p', { key: 'region' + a.id + 'contentToolTip2', style: f }, c));
                  var b = 1;
                  try {
                    for (var y = p(r), v = y.next(); !v.done; v = y.next()) {
                      var x = v.value,
                        k = n.getConvertValueAuxMetrics(o[b - 1]);
                      i.push(u.a.createElement('p', { key: b + 'region' + a.id + 'contentToolTip3', style: m }, '+ Metric ', b)),
                        i.push(u.a.createElement('p', { key: b + 'region' + a.id + 'contentToolTip4', style: g }, '- Reference : ', x.refId)),
                        i.push(
                          u.a.createElement('p', { key: b + 'region' + a.id + 'contentToolTip5', style: g }, '- Value : ', !isNaN(parseFloat(k)) && k)
                        ),
                        i.push(u.a.createElement('p', { key: b + 'region' + a.id + 'contentToolTip6', style: g }, '- Key : ', x.key)),
                        i.push(u.a.createElement('p', { key: b + 'region' + a.id + 'contentToolTip7', style: g }, '- KeyValue : ', x.keyValue)),
                        i.push(u.a.createElement('p', { key: b + 'region' + a.id + 'contentToolTip8', style: g }, '- Type : ', x.manageValue)),
                        b++;
                    }
                  } catch (t) {
                    e = { error: t };
                  } finally {
                    try {
                      v && !v.done && (t = y.return) && t.call(y);
                    } finally {
                      if (e) throw e.error;
                    }
                  }
                }
                return u.a.createElement('div', { style: { backgroundColor: h } }, i);
              }),
              (n.getCoordinatePxAdaptToInitialSpace = function (e, t, i, a, o) {
                var r,
                  l,
                  s = parseInt(n.props.options.baseMap.width, 10),
                  p = parseInt(n.props.options.baseMap.height, 10),
                  c = n.props.options.coordinateSpaceInitial.coordinate,
                  u = parseInt(c.xMin, 10),
                  d = parseInt(c.xMax, 10),
                  h = parseInt(c.yMin, 10),
                  f = parseInt(c.yMax, 10),
                  m = d - u,
                  g = f - h,
                  b = 0,
                  y = 0,
                  v = parseInt(i.xMin, 10) / s,
                  x = (s - parseInt(i.xMax, 10)) / s,
                  k = (p - parseInt(i.yMax, 10)) / p,
                  C = parseInt(i.yMin, 10) / p;
                (b = Math.round(n.defineLimitX(u + m * v))),
                  (r = Math.round(n.defineLimitX(m * x + (s - d)))),
                  (l = Math.round(n.defineLimitY(g * k + (p - f)))),
                  (y = Math.round(n.defineLimitY(h + g * C)));
                var I = n.props.options.regionCoordinateSpace;
                I.forEach(function (t) {
                  t.id === e.id &&
                    ((t.coords.xMin = b.toString()),
                    (t.coords.xMax = (s - r).toString()),
                    (t.coords.yMin = y.toString()),
                    (t.coords.yMax = (p - l).toString()));
                }),
                  (n.props.options.regionCoordinateSpace = I);
                var S = ((b - u) / m) * s,
                  E = ((r - (s - d)) / m) * s,
                  M = ((y - h) / g) * p;
                return {
                  top: (((l - (p - f)) / g) * p).toString() + 'px',
                  bottom: M.toString() + 'px',
                  left: S.toString() + 'px',
                  right: E.toString() + 'px',
                };
              }),
              (n.renduFinal = function () {
                if (!n.props.uneCoor.mode) {
                  var e,
                    t = n.props.uneCoor,
                    i = n.state.sizeBorder.toString() + 'px solid ' + n.state.borderColor,
                    a = t.textObj.colorBack,
                    o = t.textObj.colorText,
                    r = n.getCoordinatePxAdaptToInitialSpace(
                      t,
                      t.coords,
                      t.coordsDefault,
                      parseInt(t.widthInitialSpaceDefault, 10),
                      parseInt(t.heightInitialSpaceDefault, 10)
                    ),
                    l = t.textObj.style,
                    s = {
                      position: 'absolute',
                      border: i,
                      top: r.top,
                      bottom: r.bottom,
                      left: r.left,
                      right: r.right,
                      zIndex: 999,
                      justifyContent: 'center',
                      background: 'url(' + t.img + ') no-repeat center center',
                      backgroundColor: n.state.backgroundColor,
                      backgroundSize: 'contain',
                      cursor: 'pointer',
                    },
                    p = {
                      backgroundColor: a,
                      textDecoration: n.defineTextDecoration(l),
                      fontStyle: n.defineFontStyle(l),
                      fontWeight: n.defineFontWeight(l),
                      color: o,
                      verticalAlign: 'middle',
                    },
                    c = {
                      backgroundColor: t.textObj.valueGenerateObjectText ? t.textObj.valueGenerateObjectText.colorBackElement : 'black',
                      color: t.textObj.valueGenerateObjectText ? t.textObj.valueGenerateObjectText.colorTextElement : 'white',
                      verticalAlign: 'middle',
                    };
                  n.props.buttonAddLinkIsActive || n.props.buttonAddIncurvedLinkIsActive
                    ? ((e = u.a.createElement(
                        'div',
                        { style: s, id: n.props.id },
                        (!t.textObj.isTextTooltip || t.textObj.generateObjectText) &&
                          u.a.createElement(
                            'div',
                            null,
                            u.a.createElement('div', { style: p }, !t.textObj.isTextTooltip && t.label),
                            u.a.createElement(
                              'div',
                              { style: c },
                              t.textObj.generateObjectText && !t.textObj.valueGenerateObjectText.displayObjectInTooltip && n.state.valueQuery
                            )
                          )
                      )),
                      (t.textObj.isTextTooltip ||
                        (t.textObj.generateObjectText && t.textObj.valueGenerateObjectText.displayObjectInTooltip) ||
                        t.textObj.generateAuxiliaryElement.displayObjectInTooltip) &&
                        (n.state.tooltipValue
                          ? (e = u.a.createElement(d.Tooltip, { content: n.state.tooltipValue }, e))
                          : u.a.createElement('div', null, e)))
                    : ((e = u.a.createElement(
                        'div',
                        { style: s, id: n.props.id },
                        u.a.createElement(
                          'a',
                          { href: t.linkURL.followLink },
                          u.a.createElement(
                            'div',
                            { style: { height: '100%', width: '100%' } },
                            (!t.textObj.isTextTooltip || t.textObj.generateObjectText) &&
                              u.a.createElement(
                                'div',
                                null,
                                u.a.createElement('div', { style: p }, !t.textObj.isTextTooltip && t.label),
                                u.a.createElement(
                                  'div',
                                  { style: c },
                                  t.textObj.generateObjectText && !t.textObj.valueGenerateObjectText.displayObjectInTooltip && n.state.valueQuery
                                )
                              )
                          )
                        )
                      )),
                      (t.textObj.isTextTooltip ||
                        (t.textObj.generateObjectText && t.textObj.valueGenerateObjectText.displayObjectInTooltip) ||
                        t.textObj.generateAuxiliaryElement.displayObjectInTooltip) &&
                        (n.state.tooltipValue
                          ? (e = u.a.createElement(d.Tooltip, { content: n.state.tooltipValue }, e))
                          : u.a.createElement('div', null, e))),
                    n.setState({ htmlResult: e });
                }
              }),
              (n.fillState = function () {
                return l(n, void 0, void 0, function () {
                  var e = this;
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [
                          4,
                          Promise.resolve('Success').then(function () {
                            e.reqMetrics();
                          }),
                        ];
                      case 1:
                        return (
                          t.sent(),
                          [
                            4,
                            Promise.resolve('Success').then(function () {
                              e.renduFinal();
                            }),
                          ]
                        );
                      case 2:
                        return t.sent(), [2];
                    }
                  });
                });
              }),
              (n.defineTextDecoration = function (e) {
                return e.underline || n.props.options.display.style.underline ? 'underline' : 'none';
              }),
              (n.defineFontStyle = function (e) {
                return e.italic || n.props.options.display.style.italic ? 'italic' : 'normal';
              }),
              (n.defineFontWeight = function (e) {
                return e.bold || n.props.options.display.style.bold ? 'bold' : 'normal';
              }),
              (n.componentDidMount = function () {
                n.fillState();
              }),
              (n.state = {
                tooltipValue: null,
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: 'rgba(255, 255, 255, 0)',
                sizeBorder: 1,
                htmlResult: u.a.createElement('div', null),
                valueQuery: '',
              }),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype.defineLimitX = function (e) {
              return e;
            }),
            (t.prototype.defineLimitY = function (e) {
              return e;
            }),
            (t.prototype.componentDidUpdate = function (e) {
              e !== this.props && this.fillState();
            }),
            (t.prototype.render = function () {
              return this.state.htmlResult;
            }),
            t
          );
        })(u.a.Component),
        be = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.transformCoordonneesToPx = function (e, t, n) {
                return 0;
              }),
              (n.limitValueBorder = function (e, t) {
                var i = parseInt(n.props.options.baseMap.width, 10),
                  a = parseInt(n.props.options.baseMap.height, 10),
                  o = e;
                return 1 === t || 2 === t ? e > i && (o = i) : (3 !== t && 4 !== t) || (e > a && (o = a)), o;
              }),
              (n.getPositionBorder = function (e, t) {
                return 0;
              }),
              (n.fillCoordinate = function () {
                var e,
                  t = n.props.options,
                  i = parseInt(t.coordinateSpaceInitial.coordinate.xMin, 10),
                  a = parseInt(t.coordinateSpaceInitial.coordinate.xMax, 10),
                  o = parseInt(t.coordinateSpaceInitial.coordinate.yMin, 10),
                  r = parseInt(t.coordinateSpaceInitial.coordinate.yMax, 10);
                return (
                  (e = t.regionCoordinateSpace.map(function (e, l) {
                    return u.a.createElement(ge, {
                      key: 'drawRectangleExtend' + l.toString(),
                      uneCoor: e,
                      useLimit: !1,
                      limit: t.coordinateSpaceInitial.coordinate,
                      onOptionsChange: n.props.onOptionsChange,
                      options: n.props.options,
                      data: n.props.data,
                      id: 'region' + e.id.toString(),
                      buttonAddLinkIsActive: n.props.buttonAddLinkIsActive,
                      buttonAddIncurvedLinkIsActive: n.props.buttonAddIncurvedLinkIsActive,
                      widthInitialSpaceDefault: (a - i).toString(),
                      heightInitialSpaceDefault: (r - o).toString(),
                    });
                  })),
                  u.a.createElement('ul', null, e)
                );
              }),
              (n.createRectangle = function () {
                var e,
                  t,
                  i,
                  a,
                  o,
                  r,
                  l,
                  s,
                  p = n.props.coordinateInitial.coordinate,
                  c = n.props.coordinateInitial.displayArea ? '3px solid ' + n.props.color : '';
                (o = fe(p.xMin) ? parseInt(p.xMin, 10) : 0),
                  (r = fe(p.xMax) ? parseInt(p.xMax, 10) : 0),
                  (l = fe(p.yMin) ? parseInt(p.yMin, 10) : 0),
                  (s = fe(p.yMax) ? parseInt(p.yMax, 10) : 0),
                  (e = n.getPositionBorder(o, 1).toString() + 'px'),
                  (t = n.getPositionBorder(r, 2).toString() + 'px'),
                  (i = n.getPositionBorder(s, 3).toString() + 'px'),
                  (a = n.getPositionBorder(l, 4).toString() + 'px');
                var d = u.a.createElement('div', {
                  style: { border: c, bottom: a, left: e, position: 'absolute', right: t, top: i },
                  id: n.props.id,
                });
                n.setState({ resultHTML: d });
              }),
              (n.componentDidMount = function () {
                n.createRectangle();
              }),
              (n.state = { resultHTML: u.a.createElement('div', null) }),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype.componentDidUpdate = function (e) {
              e !== this.props && this.createRectangle();
            }),
            (t.prototype.render = function () {
              var e = {
                position: 'absolute',
                textAlign: 'center',
                height: this.props.options.baseMap.height + 'px',
                width: this.props.options.baseMap.width + 'px',
              };
              return u.a.createElement('div', { style: e }, this.state.resultHTML);
            }),
            t
          );
        })(u.a.Component),
        ye = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.defineBorderRadius = function () {
                var e = 0;
                return 'circle' === (n.props.shape.value || '') && (e = 50), e;
              }),
              (n.defineRotate = function () {
                var e = 'rotate(0deg)';
                return 'diamond' === (n.props.shape.value || '') && (e = 'rotate(45deg)'), e;
              }),
              (n.definePositionLabelX = function (e) {
                var t = parseInt(n.props.labelPositionX, 10);
                return 'true' === n.props.drawGraphicMarker.value ? e + t + parseInt(n.props.size, 10) + 5 : e + t;
              }),
              (n.definePositionLabelY = function (e) {
                var t = -1 * parseInt(n.props.labelPositionY, 10);
                return 'true' === n.props.drawGraphicMarker.value ? e + t + parseInt(n.props.size, 10) + 5 : e + t;
              }),
              (n.defineMainMetric = function (e) {
                var t = n.props.textObject.valueGenerateObjectText.unit,
                  i = n.props.textObject.valueGenerateObjectText.numericFormatElement,
                  a = parseInt(i, 10) || 1;
                return '' !== i ? parseFloat(e).toPrecision(a) + ' ' + t : e + ' ' + t;
              }),
              (n.defineAuxMetric = function (e) {
                var t = n.props.textObject.generateAuxiliaryElement.unit,
                  i = n.props.textObject.generateAuxiliaryElement.numericFormatElement,
                  a = parseInt(i, 10) || 1;
                return '' !== i ? parseFloat(e).toPrecision(a) + ' ' + t : e + ' ' + t;
              }),
              (n.defineTextObject = function (e) {
                var t = [],
                  i = [],
                  a = n.props.textObject.isTextTooltip,
                  o = n.props.textObject.colorText,
                  r = n.props.textObject.colorBack,
                  l = n.props.textObject.generateObjectText,
                  s = n.props.textObject.valueGenerateObjectText.displayObjectInTooltip,
                  p = n.props.textObject.valueGenerateObjectText.addColorTextElement,
                  c = n.props.textObject.valueGenerateObjectText.addColorBackElement,
                  d = n.props.textObject.valueGenerateObjectText.colorTextElement,
                  h = n.props.textObject.valueGenerateObjectText.colorBackElement,
                  f = n.props.textObject.valueGenerateObjectText.legendElement,
                  m = { color: o, backgroundColor: r, textAlign: 'center', margin: 0, padding: '0 5px' },
                  g = { color: p ? d : o, margin: 0, padding: 0, whiteSpace: 'nowrap' };
                a ||
                  t.push(u.a.createElement('p', { key: 'contentTextObject1' + n.props.name, style: m }, n.props.label || n.props.name.toUpperCase())),
                  l &&
                    (s ||
                      (f && i.push(u.a.createElement('p', { key: 'contentTextObject2' + n.props.name, style: g }, f)),
                      i.push(
                        u.a.createElement(
                          'p',
                          { key: 'contentTextObject3' + n.props.name, style: g },
                          !isNaN(parseFloat(n.defineMainMetric(e))) && n.defineMainMetric(e)
                        )
                      )));
                var b = { backgroundColor: r, border: '1px solid black' };
                return (
                  (!l || (l && s)) && (b = { backgroundColor: r }),
                  u.a.createElement('div', { style: b }, t, u.a.createElement('div', { style: { backgroundColor: c ? h : r, padding: '0 5px' } }, i))
                );
              }),
              (n.defineHtmlLinkTooltip = function () {
                var e = u.a.createElement('div', null);
                return (
                  '' !== n.props.linkUrl.hoveringTooltipText &&
                    (e = u.a.createElement(
                      'a',
                      {
                        style: { fontFamily: n.props.police, fontSize: '11px', marginBottom: '0px', textAlign: 'center' },
                        href: n.props.linkUrl.hoveringTooltipLink,
                      },
                      n.props.linkUrl.hoveringTooltipText
                    )),
                  e
                );
              }),
              (n.defineTextDecoration = function () {
                return n.props.textObject.style.underline || n.props.options.display.style.underline ? 'underline' : 'none';
              }),
              (n.defineFontStyle = function () {
                return n.props.textObject.style.italic || n.props.options.display.style.italic ? 'italic' : 'normal';
              }),
              (n.defineFontWeight = function () {
                return n.props.textObject.style.bold || n.props.options.display.style.bold ? 'bold' : 'normal';
              }),
              (n.state = {}),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype.defineLimitX = function (e) {
              var t = e,
                n = parseInt(this.props.options.coordinateSpaceInitial.coordinate.xMin, 10),
                i = parseInt(this.props.options.coordinateSpaceInitial.coordinate.xMax, 10);
              return e < n ? (t = n) : e > i && (t = i), t;
            }),
            (t.prototype.defineLimitY = function (e) {
              var t = e,
                n = parseInt(this.props.options.coordinateSpaceInitial.coordinate.yMin, 10),
                i = parseInt(this.props.options.coordinateSpaceInitial.coordinate.yMax, 10);
              return e < n ? (t = n) : e > i && (t = i), t;
            }),
            (t.prototype.definePositionX = function (e, t, n, i) {
              var a = this,
                o = parseInt(t.xMin, 10),
                r = parseInt(t.xMax, 10) - o,
                l = parseInt(this.props.positionXDefault, 10) / this.props.widthImage,
                s = Math.round(o + r * l),
                p = this.props.options.arrayPoints;
              return (
                p.forEach(function (e) {
                  e.name === a.props.name && (e.positionShapeX = s.toString());
                }),
                (this.props.options.arrayPoints = p),
                ((this.defineLimitX(s) - o) / r) * this.props.widthImage - (n + parseInt(this.defineBorderSize(), 10))
              );
            }),
            (t.prototype.definePositionY = function (e, t, n, i) {
              var a = this,
                o = parseInt(t.yMin, 10),
                r = parseInt(t.yMax, 10) - o,
                l = parseInt(this.props.positionYDefault, 10) / this.props.heightImage,
                s = Math.round(o + r * l),
                p = this.props.options.arrayPoints;
              return (
                p.forEach(function (e) {
                  e.name === a.props.name && (e.positionShapeY = s.toString());
                }),
                (this.props.options.arrayPoints = p),
                ((o + r - this.defineLimitY(s)) / r) * this.props.heightImage - (n + parseInt(this.defineBorderSize(), 10))
              );
            }),
            (t.prototype.defineSizeGraphicMarkerPx = function (e, t) {
              return 'none' === this.props.shape.value ? 0 : parseInt(e, 10) / 2;
            }),
            (t.prototype.drawPoint = function (e, t, n, i) {
              var a = this.defineContentTooltip('point'),
                o = this.props.linkUrl.followLink,
                r = this.defineBorderRadius() + 'px',
                l = this.defineRotate();
              return 'true' === e
                ? this.props.buttonAddLinkIsActive || this.props.buttonAddIncurvedLinkIsActive
                  ? null === a
                    ? u.a.createElement('div', {
                        style: {
                          border: this.defineBorderSize() + 'px solid ' + this.defineBorderColor(),
                          backgroundColor: this.defineBackgroundColor(),
                          borderRadius: r,
                          padding: t + 'px',
                          position: 'absolute',
                          zIndex: 1e3,
                          left: n,
                          top: i,
                          transform: l,
                        },
                        id: this.props.idPoint,
                      })
                    : u.a.createElement(
                        d.Tooltip,
                        { key: 'tooltip' + this.props.name, content: a, placement: this.props.tooltipPosition.value },
                        u.a.createElement('div', {
                          style: {
                            border: this.defineBorderSize() + 'px solid ' + this.defineBorderColor(),
                            backgroundColor: this.defineBackgroundColor(),
                            borderRadius: r,
                            padding: t + 'px',
                            position: 'absolute',
                            zIndex: 1e3,
                            left: n,
                            top: i,
                            transform: l,
                          },
                          id: this.props.idPoint,
                        })
                      )
                  : null === a
                  ? u.a.createElement(
                      'div',
                      null,
                      u.a.createElement('a', {
                        href: o,
                        style: {
                          border: this.defineBorderSize() + 'px solid ' + this.defineBorderColor(),
                          backgroundColor: this.defineBackgroundColor(),
                          borderRadius: r,
                          padding: t + 'px',
                          position: 'absolute',
                          zIndex: 1e3,
                          left: n,
                          top: i,
                          transform: l,
                        },
                        id: this.props.idPoint,
                      })
                    )
                  : u.a.createElement(
                      d.Tooltip,
                      { key: 'tooltip' + this.props.name, content: a, placement: this.props.tooltipPosition.value },
                      u.a.createElement('a', {
                        href: o,
                        style: {
                          border: this.defineBorderSize() + 'px solid ' + this.defineBorderColor(),
                          backgroundColor: this.defineBackgroundColor(),
                          borderRadius: r,
                          padding: t + 'px',
                          position: 'absolute',
                          zIndex: 1e3,
                          left: n,
                          top: i,
                          transform: l,
                        },
                        id: this.props.idPoint,
                      })
                    )
                : u.a.createElement('div', null);
            }),
            (t.prototype.displayLabel = function (e, t, n, i, a) {
              var o = this.defineContentTooltip('label');
              return null === o
                ? u.a.createElement(
                    'div',
                    {
                      style: {
                        textDecoration: this.defineTextDecoration(),
                        fontStyle: this.defineFontStyle(),
                        fontWeight: this.defineFontWeight(),
                        fontSize: this.props.sizePolice,
                        fontFamily: a,
                        color: this.props.textObject.colorText || 'black',
                        position: 'absolute',
                        zIndex: 1e3,
                        top: this.definePositionLabelY(i),
                        left: this.definePositionLabelX(n),
                      },
                    },
                    this.defineTextObject(this.props.valueMainMetric)
                  )
                : u.a.createElement(
                    d.Tooltip,
                    { key: 'tooltipLabel' + this.props.name, content: o, placement: this.props.tooltipPosition.value },
                    u.a.createElement(
                      'div',
                      {
                        style: {
                          textDecoration: this.defineTextDecoration(),
                          fontStyle: this.defineFontStyle(),
                          fontWeight: this.defineFontWeight(),
                          fontSize: this.props.sizePolice,
                          fontFamily: a,
                          color: this.props.textObject.colorText || 'black',
                          position: 'absolute',
                          zIndex: 1e3,
                          top: this.definePositionLabelY(i),
                          left: this.definePositionLabelX(n),
                        },
                      },
                      this.defineTextObject(this.props.valueMainMetric)
                    )
                  );
            }),
            (t.prototype.defineContentTooltip = function (e) {
              var t = this,
                n = [],
                i = [],
                a = [],
                o = [],
                r = this.props.associateOrientedLinkIn,
                l = this.props.associateOrientedLinkOut,
                s = this.props.refMainMetric,
                p = this.props.textObject.isTextTooltip,
                c = this.props.textObject.colorText,
                d = this.props.textObject.colorBack,
                h = this.props.textObject.generateObjectText,
                f = this.props.textObject.valueGenerateObjectText.displayObjectInTooltip,
                m = this.props.textObject.valueGenerateObjectText.addColorTextElement,
                g = this.props.textObject.valueGenerateObjectText.addColorBackElement,
                b = this.props.textObject.valueGenerateObjectText.colorTextElement,
                y = this.props.textObject.valueGenerateObjectText.colorBackElement,
                v = this.props.textObject.valueGenerateObjectText.legendElement,
                x = this.props.textObject.generateAuxiliaryElement.displayObjectInTooltip,
                k = this.props.textObject.generateAuxiliaryElement.addColorTextElement,
                C = this.props.textObject.generateAuxiliaryElement.addColorBackElement,
                I = this.props.textObject.generateAuxiliaryElement.colorTextElement,
                S = this.props.textObject.generateAuxiliaryElement.colorBackElement,
                E = this.props.textObject.generateAuxiliaryElement.legendElement,
                M = { fontFamily: this.props.police, fontSize: '11px', marginBottom: '0px', textAlign: 'center', color: c, backgroundColor: d },
                L = { fontFamily: this.props.police, fontSize: '10px', marginTop: '5px', marginBottom: '0px', color: m ? b : c },
                O = { fontFamily: this.props.police, fontSize: '10px', marginTop: '5px', marginBottom: '0px', color: k ? I : c },
                T = { fontFamily: this.props.police, fontSize: '10px', marginTop: '5px', marginLeft: '5px', marginBottom: '0px', color: k ? I : c },
                B = { fontFamily: this.props.police, fontSize: '9px', marginLeft: '10px', marginBottom: '0px', color: m ? b : c },
                A = { fontFamily: this.props.police, fontSize: '9px', marginLeft: '10px', marginBottom: '0px', color: k ? I : c },
                D = { fontFamily: this.props.police, fontSize: '10px', marginTop: '5px', marginBottom: '0px' },
                w = { fontFamily: this.props.police, fontSize: '9px', marginLeft: '10px', marginBottom: '0px' };
              if (
                (p &&
                  n.push(
                    u.a.createElement(
                      'p',
                      { key: e + 'ContentTooltip1' + this.props.name, style: M },
                      this.props.label || this.props.name.toUpperCase()
                    )
                  ),
                h &&
                  f &&
                  (v && i.push(u.a.createElement('p', { key: e + 'ContentTooltip2' + this.props.name, style: L }, v)),
                  i.push(u.a.createElement('p', { key: e + 'ContentTooltip3' + this.props.name, style: L }, 'Main Metric')),
                  i.push(u.a.createElement('p', { key: e + 'ContentTooltip4' + this.props.name, style: B }, '- Reference : ', s)),
                  i.push(
                    u.a.createElement(
                      'p',
                      { key: e + 'ContentTooltip5' + this.props.name, style: B },
                      '- Value : ',
                      this.defineMainMetric(this.props.valueMainMetric)
                    )
                  )),
                x &&
                  (E && i.push(u.a.createElement('p', { key: e + 'ContentTooltip6' + this.props.name, style: O }, E)),
                  this.props.auxiliaryMetrics.length > 0))
              ) {
                a.push(u.a.createElement('p', { key: e + 'ContentTooltip7' + this.props.name, style: O }, 'Auxiliary Metric'));
                var P = 1;
                this.props.auxiliaryMetrics.forEach(function (n) {
                  a.push(u.a.createElement('p', { key: P.toString() + e + 'ContentTooltip8' + t.props.name, style: T }, '+ Metric ', P)),
                    a.push(u.a.createElement('p', { key: P.toString() + e + 'ContentTooltip9' + t.props.name, style: A }, '- Reference : ', n.refId)),
                    a.push(
                      u.a.createElement(
                        'p',
                        { key: P.toString() + e + 'ContentTooltip10' + t.props.name, style: A },
                        '- Value :',
                        ' ',
                        !isNaN(parseFloat(t.defineAuxMetric(t.props.valuesAuxiliaryMetrics[P - 1]))) &&
                          t.defineAuxMetric(t.props.valuesAuxiliaryMetrics[P - 1])
                      )
                    ),
                    a.push(u.a.createElement('p', { key: P.toString() + e + 'ContentTooltip11' + t.props.name, style: A }, '- Key : ', n.key)),
                    a.push(
                      u.a.createElement('p', { key: P.toString() + e + 'ContentTooltip12' + t.props.name, style: A }, '- KeyValue : ', n.keyValue)
                    ),
                    a.push(
                      u.a.createElement('p', { key: P.toString() + e + 'ContentTooltip13' + t.props.name, style: A }, '- Type : ', n.manageValue)
                    ),
                    P++;
                });
              }
              return (
                0 !== r.length &&
                  (o.push(u.a.createElement('p', { key: e + 'ContentTooltip14' + this.props.name, style: D }, 'Associate Link In :')),
                  r.forEach(function (n) {
                    var i = n.label || n.name;
                    o.push(u.a.createElement('p', { key: e + 'ContentTooltip15' + t.props.name + i, style: w }, '- ', i));
                  })),
                0 !== l.length &&
                  (o.push(u.a.createElement('p', { key: e + 'ContentTooltip16' + this.props.name, style: D }, 'Associate Link Out :')),
                  l.forEach(function (n) {
                    var i = n.label || n.name;
                    o.push(u.a.createElement('p', { key: e + 'ContentTooltip17' + t.props.name + i, style: w }, '- ', i));
                  })),
                0 === n.length && 0 === i.length && 0 === o.length
                  ? null
                  : u.a.createElement(
                      'div',
                      null,
                      u.a.createElement(
                        'div',
                        { style: { border: '1px solid black', padding: 0 } },
                        n,
                        u.a.createElement('div', { style: { backgroundColor: g ? y : d, padding: '0 5px' } }, i),
                        u.a.createElement('div', { style: { backgroundColor: C ? S : d, padding: '0 5px' } }, a),
                        u.a.createElement('div', null, o),
                        this.defineHtmlLinkTooltip()
                      )
                    )
              );
            }),
            (t.prototype.defineBackgroundColor = function () {
              var e = this,
                t = '';
              t = this.props.seuil.length > 0 && '' !== this.props.seuil[0].backColor ? this.props.seuil[0].backColor : 'black';
              var n = parseInt(this.props.valueMainMetric, 10),
                i = 0;
              return (
                this.props.seuil.forEach(function (a) {
                  var o = 0;
                  0 === (o = '' === a.lowerLimitMin ? 0 : parseInt(a.lowerLimitMin.substring(1), 10))
                    ? n >= o && n <= parseInt(a.lowerLimitMax, 10) && (t = a.backColor)
                    : e.props.seuil.length === i + 1
                    ? n > o && (t = a.backColor)
                    : n > o && n <= parseInt(a.lowerLimitMax, 10) && (t = a.backColor),
                    i++;
                }),
                '' === t && (t = 'black'),
                t
              );
            }),
            (t.prototype.defineBorderColor = function () {
              var e = this,
                t = '';
              t = this.props.seuil.length > 0 && '' !== this.props.seuil[0].borderColor ? this.props.seuil[0].borderColor : 'black';
              var n = parseInt(this.props.valueMainMetric, 10),
                i = 0;
              return (
                this.props.seuil.forEach(function (a) {
                  var o = 0;
                  0 === (o = '' === a.lowerLimitMin ? 0 : parseInt(a.lowerLimitMin.substring(1), 10))
                    ? n >= o && n <= parseInt(a.lowerLimitMax, 10) && (t = a.borderColor)
                    : e.props.seuil.length === i + 1
                    ? n > o && (t = a.borderColor)
                    : n > o && n <= parseInt(a.lowerLimitMax, 10) && (t = a.borderColor),
                    i++;
                }),
                t
              );
            }),
            (t.prototype.defineBorderSize = function () {
              var e = this,
                t = '';
              t = this.props.seuil.length > 0 ? this.props.seuil[0].sizeBorder : '1';
              var n = parseInt(this.props.valueMainMetric, 10),
                i = 0;
              return (
                this.props.seuil.forEach(function (a) {
                  var o = 0;
                  0 === (o = '' === a.lowerLimitMin ? 0 : parseInt(a.lowerLimitMin.substring(1), 10))
                    ? n >= o && n <= parseInt(a.lowerLimitMax, 10) && (t = a.sizeBorder)
                    : e.props.seuil.length === i + 1
                    ? n > o && (t = a.sizeBorder)
                    : n > o && n <= parseInt(a.lowerLimitMax, 10) && (t = a.sizeBorder),
                    i++;
                }),
                t
              );
            }),
            (t.prototype.render = function () {
              var e = this.props.options.coordinateSpaceInitial.coordinate,
                t = this.props.shape.value || '',
                n = this.defineSizeGraphicMarkerPx(this.props.size || '', t),
                i = parseInt(this.props.positionShapeX, 10) || 0,
                a = parseInt(this.props.positionShapeY, 10) || 0,
                o = this.definePositionX(i, e, n, t),
                r = this.definePositionY(a, e, n, t),
                l = this.props.label,
                s = this.props.name,
                p = this.props.drawGraphicMarker.value || '',
                c = this.props.police;
              return u.a.createElement(
                'div',
                { key: this.props.name, style: { cursor: 'pointer' } },
                this.displayLabel(l, s, o, r, c),
                this.drawPoint(p, n, o, r)
              );
            }),
            t
          );
        })(u.a.Component),
        ve = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.labelSynchroX = function (e) {
                var t,
                  i,
                  a = 0,
                  o = null;
                return (
                  (null ===
                    (t = o =
                      'A' === e
                        ? document.getElementById('labelMainMetric' + n.props.id)
                        : document.getElementById('labelMainMetricB' + n.props.id)) || void 0 === t
                    ? void 0
                    : t.offsetWidth) && (a = (null === (i = o) || void 0 === i ? void 0 : i.offsetWidth) / 2),
                  a
                );
              }),
              (n.labelSynchroY = function (e) {
                var t,
                  i,
                  a = 0,
                  o = null;
                return (
                  (null ===
                    (t = o =
                      'A' === e
                        ? document.getElementById('labelMainMetric' + n.props.id)
                        : document.getElementById('labelMainMetricB' + n.props.id)) || void 0 === t
                    ? void 0
                    : t.offsetHeight) && (a = (null === (i = o) || void 0 === i ? void 0 : i.offsetHeight) / 2),
                  a
                );
              }),
              (n.defineParallelOrientedLinks = function () {
                var e = n.props.options.arrayOrientedLinks,
                  t = [];
                return (
                  t.push(parseInt(n.props.id, 10)),
                  e.forEach(function (e) {
                    n.props.name !== e.name &&
                      ('' !== n.props.associateRegionIn && '' !== n.props.associateRegionOut
                        ? (n.props.associateRegionIn !== e.regionIn && n.props.associateRegionIn !== e.regionOut) ||
                          (n.props.associateRegionOut !== e.regionIn && n.props.associateRegionOut !== e.regionOut) ||
                          t.push(e.id)
                        : '' !== n.props.associatePointIn && '' !== n.props.associatePointOut
                        ? (n.props.associatePointIn !== e.pointIn && n.props.associatePointIn !== e.pointOut) ||
                          (n.props.associatePointOut !== e.pointIn && n.props.associatePointOut !== e.pointOut) ||
                          t.push(e.id)
                        : '' !== n.props.associateRegionIn && '' !== n.props.associatePointOut
                        ? (n.props.associateRegionIn !== e.regionIn && n.props.associateRegionIn !== e.regionOut) ||
                          (n.props.associatePointOut !== e.pointOut && n.props.associatePointOut !== e.pointIn) ||
                          t.push(e.id)
                        : '' !== n.props.associatePointIn &&
                          '' !== n.props.associateRegionOut &&
                          ((n.props.associatePointIn !== e.pointIn && n.props.associatePointIn !== e.pointOut) ||
                            (n.props.associateRegionOut !== e.regionOut && n.props.associateRegionOut !== e.regionIn) ||
                            t.push(e.id)));
                  }),
                  t.sort(function (e, t) {
                    return e - t;
                  })
                );
              }),
              (n.defineCoor4DRegion = function (e) {
                var t = 0,
                  i = 0,
                  a = 0,
                  o = 0;
                if ('' !== e.idSVG) {
                  var r = parseInt(n.props.options.baseMap.height, 10),
                    l = parseInt(n.props.options.baseMap.width, 10),
                    s = n.props.options.coordinateSpaceInitial.coordinate,
                    p = (parseInt(s.xMin, 10) + 100) * (l / 200),
                    c = (parseInt(s.xMax, 10) + 100) * (l / 200) - p,
                    u = (parseInt(s.yMin, 10) + 100) * (r / 200),
                    d = (parseInt(s.yMax, 10) + 100) * (r / 200) - u,
                    h = void 0,
                    f = 0,
                    m = 0,
                    g = 0,
                    b = 0,
                    y = 0,
                    v = 0;
                  if ((h = n.props.options.baseMap.isUploaded ? document.getElementById(e.idSVG) : document.getElementById('oct' + e.idSVG)))
                    if ('rect' === h.localName)
                      (f = parseInt(h.attributes.width.nodeValue, 10)),
                        (m = parseInt(h.attributes.height.nodeValue, 10)),
                        (b = (g = parseInt(h.attributes.x.nodeValue, 10)) + f),
                        (v = (y = parseInt(h.attributes.y.nodeValue, 10)) + m);
                    else if ('ellipse' === h.localName) {
                      var x = parseInt(h.attributes.rx.nodeValue, 10),
                        k = parseInt(h.attributes.ry.nodeValue, 10);
                      (g = parseInt(h.attributes.cx.nodeValue, 10) - x),
                        (b = parseInt(h.attributes.cx.nodeValue, 10) + x),
                        (v = parseInt(h.attributes.cy.nodeValue, 10) + k),
                        (y = parseInt(h.attributes.cy.nodeValue, 10) - k);
                    } else if ('path' === h.localName) {
                      for (var C = h.attributes.d.nodeValue.split(' '), I = -2, S = 1e6, E = 0, M = -1, L = 1e6, O = 0, T = 0; T < C.length; T++) {
                        var B = parseInt(C[T], 10);
                        T === I + 3 && (B < S && (S = B), B > E && (E = B), (I = T)), T === M + 3 && (B < L && (L = B), B > O && (O = B), (M = T));
                      }
                      (g = S), (b = E), (v = O), (y = L);
                    }
                  var A = 2 * Math.round((100 / c) * (g - c / 2)),
                    D = 2 * Math.round((100 / c) * (b - c / 2)),
                    w = 2 * Math.round((100 / d) * (v - d / 2)) * -1,
                    P = 2 * Math.round((100 / d) * (y - d / 2)) * -1;
                  (t = Math.round(g)),
                    (i = Math.round(b)),
                    (a = Math.round(n.props.heightImage - v)),
                    (o = Math.round(n.props.heightImage - y)),
                    t < 0 && i < 0 && ((t = D), (i = A)),
                    a < 0 && o < 0 && ((a = P), (o = w));
                } else
                  (t = parseInt(e.coordsDefault.xMin, 10)),
                    (i = parseInt(e.coordsDefault.xMax, 10)),
                    (a = parseInt(e.coordsDefault.yMin, 10)),
                    (o = parseInt(e.coordsDefault.yMax, 10));
                return { xMin: t.toString(), xMax: i.toString(), yMin: a.toString(), yMax: o.toString() };
              }),
              (n.getPaddingPoint = function (e, t) {
                var i = 0,
                  a = document.getElementById(e.name);
                return a && ((i = parseInt(a.style.padding.substring(-2), 10) + parseInt(n.props.size, 10) / 10), 2 === t && (i /= 2)), i;
              }),
              (n.definePositionX = function (e, t) {
                var i,
                  a,
                  o,
                  r,
                  l = 0,
                  s = n.props.options.regionCoordinateSpace,
                  p = n.props.options.arrayPoints,
                  c = 0,
                  u = 0,
                  d = 0,
                  h = 0,
                  f = 0,
                  m = 0,
                  g = 0,
                  b = 0,
                  y = 0;
                '' !== n.props.associatePointIn && '' !== n.props.associateRegionOut
                  ? (p.forEach(function (e) {
                      (y = n.getPaddingPoint(e, t)),
                        (e.label || e.name) === n.props.associatePointIn &&
                          ((c = parseInt(e.positionXDefault, 10) - y),
                          (u = parseInt(e.positionXDefault, 10) + y),
                          (f = parseInt(e.positionYDefault, 10) - y),
                          (m = parseInt(e.positionYDefault, 10) + y),
                          c < 0 && u < 0 && ((c = parseInt(e.positionXDefault, 10) + y), (u = parseInt(e.positionXDefault, 10) - y)),
                          f < 0 && m < 0 && ((f = parseInt(e.positionYDefault, 10) + y), (m = parseInt(e.positionYDefault, 10) - y)));
                    }),
                    s.forEach(function (e) {
                      e.label === n.props.associateRegionOut &&
                        ((d = parseInt(n.defineCoor4DRegion(e).xMin, 10)),
                        (h = parseInt(n.defineCoor4DRegion(e).xMax, 10)),
                        (g = parseInt(n.defineCoor4DRegion(e).yMin, 10)),
                        (b = parseInt(n.defineCoor4DRegion(e).yMax, 10)));
                    }))
                  : '' !== n.props.associateRegionIn && '' !== n.props.associatePointOut
                  ? (s.forEach(function (e) {
                      e.label === n.props.associateRegionIn &&
                        ((c = parseInt(n.defineCoor4DRegion(e).xMin, 10)),
                        (u = parseInt(n.defineCoor4DRegion(e).xMax, 10)),
                        (f = parseInt(n.defineCoor4DRegion(e).yMin, 10)),
                        (m = parseInt(n.defineCoor4DRegion(e).yMax, 10)));
                    }),
                    p.forEach(function (e) {
                      (y = n.getPaddingPoint(e, t)),
                        (e.label || e.name) === n.props.associatePointOut &&
                          ((d = parseInt(e.positionXDefault, 10) - y),
                          (h = parseInt(e.positionXDefault, 10) + y),
                          (g = parseInt(e.positionYDefault, 10) - y),
                          (b = parseInt(e.positionYDefault, 10) + y),
                          d < 0 && h < 0 && ((d = parseInt(e.positionXDefault, 10) + y), (h = parseInt(e.positionXDefault, 10) - y)),
                          g < 0 && b < 0 && ((g = parseInt(e.positionYDefault, 10) + y), (b = parseInt(e.positionYDefault, 10) - y)));
                    }))
                  : '' === n.props.associatePointIn && '' === n.props.associateRegionIn && '' !== n.props.associateRegionOut
                  ? (s.forEach(function (e) {
                      e.label === n.props.associateRegionOut &&
                        ((d = parseInt(n.defineCoor4DRegion(e).xMin, 10)),
                        (h = parseInt(n.defineCoor4DRegion(e).xMax, 10)),
                        (g = parseInt(n.defineCoor4DRegion(e).yMin, 10)),
                        (b = parseInt(n.defineCoor4DRegion(e).yMax, 10)));
                    }),
                    (c = parseInt(n.props.positionXADefault, 10)),
                    (u = parseInt(n.props.positionXADefault, 10)),
                    (f = parseInt(n.props.positionYADefault, 10)),
                    (m = parseInt(n.props.positionYADefault, 10)))
                  : '' !== n.props.associateRegionIn && '' === n.props.associatePointOut && '' === n.props.associateRegionOut
                  ? (s.forEach(function (e) {
                      e.label === n.props.associateRegionIn &&
                        ((c = parseInt(n.defineCoor4DRegion(e).xMin, 10)),
                        (u = parseInt(n.defineCoor4DRegion(e).xMax, 10)),
                        (f = parseInt(n.defineCoor4DRegion(e).yMin, 10)),
                        (m = parseInt(n.defineCoor4DRegion(e).yMax, 10)));
                    }),
                    (d = parseInt(n.props.positionXBDefault, 10)),
                    (h = parseInt(n.props.positionXBDefault, 10)),
                    (g = parseInt(n.props.positionYBDefault, 10)),
                    (b = parseInt(n.props.positionYBDefault, 10)))
                  : '' !== n.props.associatePointIn && '' === n.props.associatePointOut && '' === n.props.associateRegionOut
                  ? (p.forEach(function (e) {
                      (y = n.getPaddingPoint(e, t)),
                        (e.label || e.name) === n.props.associatePointIn &&
                          ((c = parseInt(e.positionXDefault, 10) - y),
                          (u = parseInt(e.positionXDefault, 10) + y),
                          (f = parseInt(e.positionYDefault, 10) - y),
                          (m = parseInt(e.positionYDefault, 10) + y),
                          c < 0 && u < 0 && ((c = parseInt(e.positionXDefault, 10) + y), (u = parseInt(e.positionXDefault, 10) - y)),
                          f < 0 && m < 0 && ((f = parseInt(e.positionYDefault, 10) + y), (m = parseInt(e.positionYDefault, 10) - y)));
                    }),
                    (d = parseInt(n.props.positionXBDefault, 10)),
                    (h = parseInt(n.props.positionXBDefault, 10)),
                    (g = parseInt(n.props.positionYBDefault, 10)),
                    (b = parseInt(n.props.positionYBDefault, 10)))
                  : '' === n.props.associatePointIn && '' === n.props.associateRegionIn && '' !== n.props.associatePointOut
                  ? (p.forEach(function (e) {
                      (y = n.getPaddingPoint(e, t)),
                        (e.label || e.name) === n.props.associatePointOut &&
                          ((d = parseInt(e.positionXDefault, 10) - y),
                          (h = parseInt(e.positionXDefault, 10) + y),
                          (g = parseInt(e.positionYDefault, 10) - y),
                          (b = parseInt(e.positionYDefault, 10) + y),
                          d < 0 && h < 0 && ((d = parseInt(e.positionXDefault, 10) + y), (h = parseInt(e.positionXDefault, 10) - y)),
                          g < 0 && b < 0 && ((g = parseInt(e.positionYDefault, 10) + y), (b = parseInt(e.positionYDefault, 10) - y)));
                    }),
                    (c = parseInt(n.props.positionXADefault, 10)),
                    (u = parseInt(n.props.positionXADefault, 10)),
                    (f = parseInt(n.props.positionYADefault, 10)),
                    (m = parseInt(n.props.positionYADefault, 10)))
                  : '' !== n.props.associatePointIn && '' !== n.props.associatePointOut
                  ? p.forEach(function (e) {
                      y = n.getPaddingPoint(e, t);
                      var i = e.label || e.name;
                      i === n.props.associatePointIn &&
                        ((c = parseInt(e.positionXDefault, 10) - y),
                        (u = parseInt(e.positionXDefault, 10) + y),
                        (f = parseInt(e.positionYDefault, 10) - y),
                        (m = parseInt(e.positionYDefault, 10) + y),
                        c < 0 && u < 0 && ((c = parseInt(e.positionXDefault, 10) + y), (u = parseInt(e.positionXDefault, 10) - y)),
                        f < 0 && m < 0 && ((f = parseInt(e.positionYDefault, 10) + y), (m = parseInt(e.positionYDefault, 10) - y))),
                        i === n.props.associatePointOut &&
                          ((d = parseInt(e.positionXDefault, 10) - y),
                          (h = parseInt(e.positionXDefault, 10) + y),
                          (g = parseInt(e.positionYDefault, 10) - y),
                          (b = parseInt(e.positionYDefault, 10) + y),
                          d < 0 && h < 0 && ((d = parseInt(e.positionXDefault, 10) + y), (h = parseInt(e.positionXDefault, 10) - y)),
                          g < 0 && b < 0 && ((g = parseInt(e.positionYDefault, 10) + y), (b = parseInt(e.positionYDefault, 10) - y)));
                    })
                  : s.forEach(function (e) {
                      e.label === n.props.associateRegionIn &&
                        ((c = parseInt(n.defineCoor4DRegion(e).xMin, 10)),
                        (u = parseInt(n.defineCoor4DRegion(e).xMax, 10)),
                        (f = parseInt(n.defineCoor4DRegion(e).yMin, 10)),
                        (m = parseInt(n.defineCoor4DRegion(e).yMax, 10))),
                        e.label === n.props.associateRegionOut &&
                          ((d = parseInt(n.defineCoor4DRegion(e).xMin, 10)),
                          (h = parseInt(n.defineCoor4DRegion(e).xMax, 10)),
                          (g = parseInt(n.defineCoor4DRegion(e).yMin, 10)),
                          (b = parseInt(n.defineCoor4DRegion(e).yMax, 10)));
                    }),
                  (a = (d + h) / 2),
                  (o = (f + m) / 2),
                  (r = (g + b) / 2);
                var v = (i = (c + u) / 2) / n.props.widthImage,
                  x = a / n.props.widthImage;
                e
                  ? 0 === t
                    ? i > a
                      ? o > r || o < r
                        ? (l = c < 0 && u < 0 ? c : u)
                        : o === r && (l = i)
                      : i < a
                      ? o > r
                        ? (l = c < 0 && u < 0 ? c : u)
                        : o < r
                        ? (l = c < 0 && u < 0 ? u : c)
                        : o === r && (l = i)
                      : i === a && (l = i)
                    : 1 === t
                    ? i > a
                      ? o > r
                        ? (l = c < 0 && u < 0 ? c : u)
                        : o < r
                        ? (l = c < 0 && u < 0 ? u : c)
                        : o === r && (l = i)
                      : i < a && (o > r || i < a)
                      ? (l = c < 0 && u < 0 ? u : c)
                      : i === a && (l = i)
                    : 2 === t &&
                      ('' !== n.props.associatePointIn && '' === n.props.associateRegionIn
                        ? o === r
                          ? (a > c && a < u) || (a < c && a > u)
                            ? (l = i)
                            : i > a
                            ? (l = c < 0 && u < 0 ? u : c)
                            : i < a
                            ? (l = c < 0 && u < 0 ? c : u)
                            : i === a && (l = c)
                          : (a > c && a < u) || (a < c && a > u)
                          ? (l = i)
                          : i > a
                          ? (l =
                              v - x < 0.05
                                ? i
                                : v - x < 0.11
                                ? i + y - parseInt(n.props.size, 10) / 2
                                : v - x < 0.37
                                ? i - y / 2
                                : c < 0 && u < 0
                                ? u
                                : c)
                          : i < a
                          ? (l =
                              x - v < 0.05
                                ? i
                                : x - v < 0.11
                                ? i - y + parseInt(n.props.size, 10) / 2
                                : x - v < 0.37
                                ? i + y / 2
                                : c < 0 && u < 0
                                ? c
                                : u)
                          : i === a && (l = i)
                        : '' === n.props.associatePointIn &&
                          '' !== n.props.associateRegionIn &&
                          (o === r
                            ? (a > c && a < u) || (a < c && a > u)
                              ? (l = i)
                              : i > a
                              ? (l = c < 0 && u < 0 ? u : c)
                              : i < a
                              ? (l = c < 0 && u < 0 ? c : u)
                              : i === a && (l = c)
                            : (a > c && a < u) || (a < c && a > u)
                            ? (l = i)
                            : i > a
                            ? (l = c < 0 && u < 0 ? u : c)
                            : i < a
                            ? (l = c < 0 && u < 0 ? c : u)
                            : i === a && (l = i)))
                  : 0 === t
                  ? i > a || i < a
                    ? o > r || o < r
                      ? (l = d < 0 && h < 0 ? d : h)
                      : o === r && (l = a)
                    : i === a && (l = a)
                  : 1 === t
                  ? i > a
                    ? o > r
                      ? (l = d < 0 && h < 0 ? d : h)
                      : o < r
                      ? (l = d < 0 && h < 0 ? h : d)
                      : o === r && (l = a)
                    : i < a
                    ? o > r || o < r
                      ? (l = d < 0 && h < 0 ? h : d)
                      : o === r && (l = a)
                    : i === a && (l = a)
                  : 2 === t &&
                    ('' !== n.props.associatePointOut && '' === n.props.associateRegionOut
                      ? o === r
                        ? i > a
                          ? (l = d < 0 && h < 0 ? d : h)
                          : i < a
                          ? (l = d < 0 && h < 0 ? h : d)
                          : i === a && (l = d)
                        : (i > d && i < h) || (i < d && i > h)
                        ? (l = a)
                        : i > a
                        ? (l = v - x < 0.23 ? a : d < 0 && h < 0 ? d : h)
                        : i < a
                        ? (l = x - v < 0.23 ? a : d < 0 && h < 0 ? h : d)
                        : i === a && (l = a)
                      : '' === n.props.associatePointOut &&
                        '' !== n.props.associateRegionOut &&
                        ((i > d && i < h) || (i < d && i > h)
                          ? (l = a)
                          : i > a
                          ? (l = d < 0 && h < 0 ? d : h)
                          : i < a
                          ? (l = d < 0 && h < 0 ? h : d)
                          : i === a && (l = a)));
                var k = n.props.options.arrayOrientedLinks;
                return (
                  k.forEach(function (t) {
                    t.name === n.props.name &&
                      (e
                        ? ((t.pointAPositionX = l.toString()), (t.pointAPositionXDefault = l.toString()))
                        : ((t.pointBPositionX = l.toString()), (t.pointBPositionXDefault = l.toString())));
                  }),
                  (n.props.options.arrayOrientedLinks = k),
                  l
                );
              }),
              (n.definePositionY = function (e, t) {
                var i,
                  a,
                  o,
                  r,
                  l = 0,
                  s = n.props.options.arrayPoints,
                  p = n.props.options.regionCoordinateSpace,
                  c = 0,
                  u = 0,
                  d = 0,
                  h = 0,
                  f = 0,
                  m = 0,
                  g = 0,
                  b = 0;
                '' !== n.props.associatePointIn && '' !== n.props.associateRegionOut
                  ? (s.forEach(function (e) {
                      var i = n.getPaddingPoint(e, t);
                      (e.label || e.name) === n.props.associatePointIn &&
                        ((c = parseInt(e.positionXDefault, 10) - i),
                        (u = parseInt(e.positionXDefault, 10) + i),
                        (f = parseInt(e.positionYDefault, 10) - i),
                        (m = parseInt(e.positionYDefault, 10) + i),
                        c < 0 && u < 0 && ((c = parseInt(e.positionXDefault, 10) + i), (u = parseInt(e.positionXDefault, 10) - i)),
                        f < 0 && m < 0 && ((f = parseInt(e.positionYDefault, 10) + i), (m = parseInt(e.positionYDefault, 10) - i)));
                    }),
                    p.forEach(function (e) {
                      e.label === n.props.associateRegionOut &&
                        ((d = parseInt(n.defineCoor4DRegion(e).xMin, 10)),
                        (h = parseInt(n.defineCoor4DRegion(e).xMax, 10)),
                        (g = parseInt(n.defineCoor4DRegion(e).yMin, 10)),
                        (b = parseInt(n.defineCoor4DRegion(e).yMax, 10)));
                    }))
                  : '' !== n.props.associateRegionIn && '' !== n.props.associatePointOut
                  ? (p.forEach(function (e) {
                      e.label === n.props.associateRegionIn &&
                        ((c = parseInt(n.defineCoor4DRegion(e).xMin, 10)),
                        (u = parseInt(n.defineCoor4DRegion(e).xMax, 10)),
                        (f = parseInt(n.defineCoor4DRegion(e).yMin, 10)),
                        (m = parseInt(n.defineCoor4DRegion(e).yMax, 10)));
                    }),
                    s.forEach(function (e) {
                      var i = n.getPaddingPoint(e, t);
                      (e.label || e.name) === n.props.associatePointOut &&
                        ((d = parseInt(e.positionXDefault, 10) - i),
                        (h = parseInt(e.positionXDefault, 10) + i),
                        (g = parseInt(e.positionYDefault, 10) - i),
                        (b = parseInt(e.positionYDefault, 10) + i),
                        d < 0 && h < 0 && ((d = parseInt(e.positionXDefault, 10) + i), (h = parseInt(e.positionXDefault, 10) - i)),
                        g < 0 && b < 0 && ((g = parseInt(e.positionYDefault, 10) + i), (b = parseInt(e.positionYDefault, 10) - i)));
                    }))
                  : '' === n.props.associatePointIn && '' === n.props.associateRegionIn && '' !== n.props.associateRegionOut
                  ? (p.forEach(function (e) {
                      e.label === n.props.associateRegionOut &&
                        ((d = parseInt(n.defineCoor4DRegion(e).xMin, 10)),
                        (h = parseInt(n.defineCoor4DRegion(e).xMax, 10)),
                        (g = parseInt(n.defineCoor4DRegion(e).yMin, 10)),
                        (b = parseInt(n.defineCoor4DRegion(e).yMax, 10)));
                    }),
                    (c = parseInt(n.props.positionXADefault, 10)),
                    (u = parseInt(n.props.positionXADefault, 10)),
                    (f = parseInt(n.props.positionYADefault, 10)),
                    (m = parseInt(n.props.positionYADefault, 10)))
                  : '' !== n.props.associateRegionIn && '' === n.props.associatePointOut && '' === n.props.associateRegionOut
                  ? (p.forEach(function (e) {
                      e.label === n.props.associateRegionIn &&
                        ((c = parseInt(n.defineCoor4DRegion(e).xMin, 10)),
                        (u = parseInt(n.defineCoor4DRegion(e).xMax, 10)),
                        (f = parseInt(n.defineCoor4DRegion(e).yMin, 10)),
                        (m = parseInt(n.defineCoor4DRegion(e).yMax, 10)));
                    }),
                    (d = parseInt(n.props.positionXBDefault, 10)),
                    (h = parseInt(n.props.positionXBDefault, 10)),
                    (g = parseInt(n.props.positionYBDefault, 10)),
                    (b = parseInt(n.props.positionYBDefault, 10)))
                  : '' !== n.props.associatePointIn && '' === n.props.associatePointOut && '' === n.props.associateRegionOut
                  ? (s.forEach(function (e) {
                      var i = n.getPaddingPoint(e, t);
                      (e.label || e.name) === n.props.associatePointIn &&
                        ((c = parseInt(e.positionXDefault, 10) - i),
                        (u = parseInt(e.positionXDefault, 10) + i),
                        (f = parseInt(e.positionYDefault, 10) - i),
                        (m = parseInt(e.positionYDefault, 10) + i),
                        c < 0 && u < 0 && ((c = parseInt(e.positionXDefault, 10) + i), (u = parseInt(e.positionXDefault, 10) - i)),
                        f < 0 && m < 0 && ((f = parseInt(e.positionYDefault, 10) + i), (m = parseInt(e.positionYDefault, 10) - i)));
                    }),
                    (d = parseInt(n.props.positionXBDefault, 10)),
                    (h = parseInt(n.props.positionXBDefault, 10)),
                    (g = parseInt(n.props.positionYBDefault, 10)),
                    (b = parseInt(n.props.positionYBDefault, 10)))
                  : '' === n.props.associatePointIn && '' === n.props.associateRegionIn && '' !== n.props.associatePointOut
                  ? (s.forEach(function (e) {
                      var i = n.getPaddingPoint(e, t);
                      (e.label || e.name) === n.props.associatePointOut &&
                        ((d = parseInt(e.positionXDefault, 10) - i),
                        (h = parseInt(e.positionXDefault, 10) + i),
                        (g = parseInt(e.positionYDefault, 10) - i),
                        (b = parseInt(e.positionYDefault, 10) + i),
                        d < 0 && h < 0 && ((d = parseInt(e.positionXDefault, 10) + i), (h = parseInt(e.positionXDefault, 10) - i)),
                        g < 0 && b < 0 && ((g = parseInt(e.positionYDefault, 10) + i), (b = parseInt(e.positionYDefault, 10) - i)));
                    }),
                    (c = parseInt(n.props.positionXADefault, 10)),
                    (u = parseInt(n.props.positionXADefault, 10)),
                    (f = parseInt(n.props.positionYADefault, 10)),
                    (m = parseInt(n.props.positionYADefault, 10)))
                  : '' !== n.props.associatePointIn && '' !== n.props.associatePointOut
                  ? s.forEach(function (e) {
                      var i = n.getPaddingPoint(e, t),
                        a = e.label || e.name;
                      a === n.props.associatePointIn &&
                        ((c = parseInt(e.positionXDefault, 10) - i),
                        (u = parseInt(e.positionXDefault, 10) + i),
                        (f = parseInt(e.positionYDefault, 10) - i),
                        (m = parseInt(e.positionYDefault, 10) + i),
                        c < 0 && u < 0 && ((c = parseInt(e.positionXDefault, 10) + i), (u = parseInt(e.positionXDefault, 10) - i)),
                        f < 0 && m < 0 && ((f = parseInt(e.positionYDefault, 10) + i), (m = parseInt(e.positionYDefault, 10) - i))),
                        a === n.props.associatePointOut &&
                          ((d = parseInt(e.positionXDefault, 10) - i),
                          (h = parseInt(e.positionXDefault, 10) + i),
                          (g = parseInt(e.positionYDefault, 10) - i),
                          (b = parseInt(e.positionYDefault, 10) + i),
                          d < 0 && h < 0 && ((d = parseInt(e.positionXDefault, 10) + i), (h = parseInt(e.positionXDefault, 10) - i)),
                          g < 0 && b < 0 && ((g = parseInt(e.positionYDefault, 10) + i), (b = parseInt(e.positionYDefault, 10) - i)));
                    })
                  : p.forEach(function (e) {
                      e.label === n.props.associateRegionIn &&
                        ((c = parseInt(n.defineCoor4DRegion(e).xMin, 10)),
                        (u = parseInt(n.defineCoor4DRegion(e).xMax, 10)),
                        (f = parseInt(n.defineCoor4DRegion(e).yMin, 10)),
                        (m = parseInt(n.defineCoor4DRegion(e).yMax, 10))),
                        e.label === n.props.associateRegionOut &&
                          ((d = parseInt(n.defineCoor4DRegion(e).xMin, 10)),
                          (h = parseInt(n.defineCoor4DRegion(e).xMax, 10)),
                          (g = parseInt(n.defineCoor4DRegion(e).yMin, 10)),
                          (b = parseInt(n.defineCoor4DRegion(e).yMax, 10)));
                    }),
                  (i = (c + u) / 2),
                  (a = (d + h) / 2),
                  (o = (f + m) / 2),
                  (r = (g + b) / 2),
                  e
                    ? 0 === t
                      ? o > r
                        ? i > a
                          ? (l = f < 0 && m < 0 ? m : f)
                          : i < a
                          ? (l = f < 0 && m < 0 ? f : m)
                          : i === a && (l = o)
                        : o < r
                        ? i > a
                          ? (l = f < 0 && m < 0 ? f : m)
                          : o < r
                          ? (l = f < 0 && m < 0 ? m : f)
                          : o === r && (l = o)
                        : o === r && (l = o)
                      : 1 === t
                      ? o > r
                        ? i > a
                          ? (l = f < 0 && m < 0 ? f : m)
                          : i < a
                          ? (l = f < 0 && m < 0 ? m : f)
                          : i === a && (l = o)
                        : o < r
                        ? i > a
                          ? (l = f < 0 && m < 0 ? m : f)
                          : i < a
                          ? (l = f < 0 && m < 0 ? f : m)
                          : i === a && (l = o)
                        : o === r && (l = o)
                      : 2 === t &&
                        ('' !== n.props.associatePointIn && '' === n.props.associateRegionIn
                          ? i === a
                            ? o > r
                              ? (l = f < 0 && m < 0 ? m : f)
                              : o < r && (l = f < 0 && m < 0 ? f : m)
                            : (l = o)
                          : '' === n.props.associatePointIn &&
                            '' !== n.props.associateRegionIn &&
                            (o > r ? (l = f < 0 && m < 0 ? m : f) : o < r ? (l = f < 0 && m < 0 ? f : m) : o === r && (l = o)))
                    : 0 === t
                    ? o > r
                      ? i > a
                        ? (l = g < 0 && b < 0 ? b : g)
                        : i < a
                        ? (l = g < 0 && b < 0 ? g : b)
                        : i === a && (l = r)
                      : o < r
                      ? i > a
                        ? (l = g < 0 && b < 0 ? g : b)
                        : i < a
                        ? (l = g < 0 && b < 0 ? b : g)
                        : i === a && (l = r)
                      : o === r && (l = r)
                    : 1 === t
                    ? o > r
                      ? i > a
                        ? (l = g < 0 && b < 0 ? g : b)
                        : i < a
                        ? (l = g < 0 && b < 0 ? b : g)
                        : i === a && (l = r)
                      : o < r
                      ? i > a
                        ? (l = g < 0 && b < 0 ? b : g)
                        : i < a
                        ? (l = g < 0 && b < 0 ? g : b)
                        : i === a && (l = r)
                      : o === r && (l = r)
                    : 2 === t &&
                      ('' !== n.props.associatePointOut && '' === n.props.associateRegionOut
                        ? i === a
                          ? o > r
                            ? (l = g < 0 && b < 0 ? g : b)
                            : o < r && (l = g < 0 && b < 0 ? b : g)
                          : (l = r)
                        : '' === n.props.associatePointOut &&
                          '' !== n.props.associateRegionOut &&
                          (o > r ? (l = g < 0 && b < 0 ? g : b) : o < r ? (l = g < 0 && b < 0 ? b : g) : o === r && (l = r)));
                var y = n.props.options.arrayOrientedLinks;
                return (
                  y.forEach(function (t) {
                    t.name === n.props.name &&
                      (e
                        ? ((t.pointAPositionY = l.toString()), (t.pointAPositionYDefault = l.toString()))
                        : ((t.pointBPositionY = l.toString()), (t.pointBPositionYDefault = l.toString())));
                  }),
                  (n.props.options.arrayOrientedLinks = y),
                  l
                );
              }),
              (n.defineMainMetric = function (e) {
                var t = n.props.textObject.valueGenerateObjectText.unit,
                  i = n.props.textObject.valueGenerateObjectText.numericFormatElement,
                  a = parseInt(i, 10) || 1;
                return '' !== i ? parseFloat(e).toPrecision(a) + ' ' + t : e + ' ' + t;
              }),
              (n.defineAuxMetric = function (e) {
                var t = n.props.textObject.generateAuxiliaryElement.unit,
                  i = n.props.textObject.generateAuxiliaryElement.numericFormatElement,
                  a = parseInt(i, 10) || 1;
                return '' !== i ? parseFloat(e).toPrecision(a) + ' ' + t : e + ' ' + t;
              }),
              (n.defineTextObject = function (e) {
                var t = [],
                  i = [],
                  a = n.props.textObject.isTextTooltip,
                  o = n.props.textObject.colorText,
                  r = n.props.textObject.colorBack,
                  l = n.props.textObject.generateObjectText,
                  s = n.props.textObject.valueGenerateObjectText.displayObjectInTooltip,
                  p = n.props.textObject.valueGenerateObjectText.addColorTextElement,
                  c = n.props.textObject.valueGenerateObjectText.addColorBackElement,
                  d = n.props.textObject.valueGenerateObjectText.colorTextElement,
                  h = n.props.textObject.valueGenerateObjectText.colorBackElement,
                  f = n.props.textObject.valueGenerateObjectText.legendElement,
                  m = { color: o, backgroundColor: r, textAlign: 'center', margin: 0, padding: '0 5px' },
                  g = { color: p ? d : o, margin: 0, padding: 0, whiteSpace: 'nowrap' };
                a ||
                  t.push(u.a.createElement('p', { key: 'contentTextObject1' + n.props.name, style: m }, n.props.label || n.props.name.toUpperCase())),
                  l &&
                    (s ||
                      (f && i.push(u.a.createElement('p', { key: 'contentTextObject2' + n.props.name, style: g }, f)),
                      i.push(
                        u.a.createElement(
                          'p',
                          { key: 'contentTextObject3' + n.props.name, style: g },
                          !isNaN(parseFloat(n.defineMainMetric(e))) && n.defineMainMetric(e)
                        )
                      )));
                var b = { backgroundColor: r, border: '1px solid black' };
                return (
                  (!l || (l && s)) && (b = { backgroundColor: r }),
                  u.a.createElement('div', { style: b }, t, u.a.createElement('div', { style: { backgroundColor: c ? h : r, padding: '0 5px' } }, i))
                );
              }),
              (n.defineHtmlLinkTooltip = function () {
                var e = u.a.createElement('div', null);
                return (
                  '' !== n.props.linkUrl.hoveringTooltipText &&
                    (e = u.a.createElement('a', { href: n.props.linkUrl.hoveringTooltipLink }, n.props.linkUrl.hoveringTooltipText)),
                  e
                );
              }),
              (n.defineValueTooptip = function (e, t) {
                var i = [],
                  a = [],
                  o = [],
                  r = n.props.valueMainMetricA,
                  l = n.props.valueMainMetricB,
                  s = n.props.refMainMetricA,
                  p = n.props.refMainMetricB,
                  c = n.props.textObject.isTextTooltip,
                  d = n.props.textObject.colorText,
                  h = n.props.textObject.colorBack,
                  f = n.props.textObject.generateObjectText,
                  m = n.props.textObject.valueGenerateObjectText.displayObjectInTooltip,
                  g = n.props.textObject.valueGenerateObjectText.addColorTextElement,
                  b = n.props.textObject.valueGenerateObjectText.addColorBackElement,
                  y = n.props.textObject.valueGenerateObjectText.colorTextElement,
                  v = n.props.textObject.valueGenerateObjectText.colorBackElement,
                  x = n.props.textObject.valueGenerateObjectText.legendElement,
                  k = n.props.textObject.generateAuxiliaryElement.displayObjectInTooltip,
                  C = n.props.textObject.generateAuxiliaryElement.addColorTextElement,
                  I = n.props.textObject.generateAuxiliaryElement.addColorBackElement,
                  S = n.props.textObject.generateAuxiliaryElement.colorTextElement,
                  E = n.props.textObject.generateAuxiliaryElement.colorBackElement,
                  M = n.props.textObject.generateAuxiliaryElement.legendElement,
                  L = { fontFamily: n.props.police, fontSize: '11px', marginBottom: '0px', textAlign: 'center', color: d, backgroundColor: h },
                  O = { fontFamily: n.props.police, fontSize: '10px', marginTop: '5px', marginBottom: '0px', color: g ? y : d },
                  T = { fontFamily: n.props.police, fontSize: '10px', marginTop: '5px', marginBottom: '0px', color: C ? S : d },
                  B = { fontFamily: n.props.police, fontSize: '10px', marginTop: '5px', marginLeft: '5px', marginBottom: '0px', color: g ? y : d },
                  A = { fontFamily: n.props.police, fontSize: '10px', marginTop: '5px', marginLeft: '5px', marginBottom: '0px', color: C ? S : d },
                  D = { fontFamily: n.props.police, fontSize: '9px', marginLeft: '10px', marginBottom: '0px', color: g ? y : d },
                  w = { fontFamily: n.props.police, fontSize: '9px', marginLeft: '10px', marginBottom: '0px', color: C ? S : d };
                if (
                  (c &&
                    i.push(u.a.createElement('p', { key: 'contentTooltip1' + n.props.name, style: L }, n.props.label || n.props.name.toUpperCase())),
                  f &&
                    m &&
                    (x && a.push(u.a.createElement('p', { style: O }, x)),
                    a.push(u.a.createElement('p', { key: 'contentTooltip1' + n.props.name, style: O }, 'Main Metric')),
                    'bidirectional' === e
                      ? 'A' === t
                        ? (a.push(u.a.createElement('p', { key: 'contentTooltip2' + n.props.name, style: B }, '+ Link A')),
                          a.push(u.a.createElement('p', { key: 'contentTooltip3' + n.props.name, style: D }, ' ', '- Reference : ', s)),
                          a.push(
                            u.a.createElement('p', { key: 'contentTooltip4' + n.props.name, style: D }, ' ', '- Value : ', n.defineMainMetric(r))
                          ))
                        : (a.push(u.a.createElement('p', { key: 'contentTooltip5' + n.props.name, style: B }, '+ Link B')),
                          a.push(u.a.createElement('p', { key: 'contentTooltip6' + n.props.name, style: D }, ' ', '- Reference : ', p)),
                          a.push(
                            u.a.createElement('p', { key: 'contentTooltip7' + n.props.name, style: D }, ' ', '- Value : ', n.defineMainMetric(l))
                          ))
                      : 'monodirectional' === e &&
                        (a.push(u.a.createElement('p', { key: 'contentTooltip8' + n.props.name, style: D }, ' ', '- Reference : ', s)),
                        a.push(
                          u.a.createElement('p', { key: 'contentTooltip9' + n.props.name, style: D }, ' ', '- Value : ', n.defineMainMetric(r))
                        ))),
                  k)
                )
                  if ((M && o.push(u.a.createElement('p', { style: T }, M)), 'bidirectional' === e)) {
                    if ('A' === t) {
                      if (n.props.auxiliaryMetrics.length > 0) {
                        o.push(u.a.createElement('p', { key: 'contentTooltip10' + n.props.name, style: T }, 'Auxiliary Metric'));
                        var P = 1;
                        n.props.auxiliaryMetrics.forEach(function (e) {
                          o.push(u.a.createElement('p', { key: P.toString() + 'contentTooltip11' + n.props.name, style: A }, '+ Metric ', P)),
                            o.push(
                              u.a.createElement('p', { key: P.toString() + 'contentTooltip12' + n.props.name, style: w }, '- Reference : ', e.refId)
                            ),
                            o.push(
                              u.a.createElement(
                                'p',
                                { key: P.toString() + 'contentTooltip13' + n.props.name, style: w },
                                '- Value :',
                                ' ',
                                !isNaN(parseFloat(n.defineAuxMetric(n.props.valuesAuxiliaryMetrics[P - 1]))) &&
                                  n.defineAuxMetric(n.props.valuesAuxiliaryMetrics[P - 1])
                              )
                            ),
                            o.push(u.a.createElement('p', { key: P.toString() + 'contentTooltip14' + n.props.name, style: w }, '- Key : ', e.key)),
                            o.push(
                              u.a.createElement('p', { key: P.toString() + 'contentTooltip15' + n.props.name, style: w }, '- KeyValue : ', e.keyValue)
                            ),
                            o.push(
                              u.a.createElement('p', { key: P.toString() + 'contentTooltip16' + n.props.name, style: w }, '- Type : ', e.manageValue)
                            ),
                            P++;
                        });
                      }
                    } else if (n.props.auxiliaryMetricsB.length > 0) {
                      o.push(u.a.createElement('p', { key: 'contentTooltip17' + n.props.name, style: T }, 'Auxiliary Metric'));
                      var j = 1;
                      n.props.auxiliaryMetricsB.forEach(function (e) {
                        o.push(u.a.createElement('p', { key: j.toString() + 'contentTooltip18' + n.props.name, style: A }, '+ Metric ', j)),
                          o.push(
                            u.a.createElement('p', { key: j.toString() + 'contentTooltip19' + n.props.name, style: w }, '- Reference : ', e.refId)
                          ),
                          o.push(
                            u.a.createElement(
                              'p',
                              { key: j.toString() + 'contentTooltip20' + n.props.name, style: w },
                              '- Value :',
                              ' ',
                              !isNaN(parseFloat(n.defineAuxMetric(n.props.valuesAuxiliaryMetricsB[j - 1]))) &&
                                n.defineAuxMetric(n.props.valuesAuxiliaryMetricsB[j - 1])
                            )
                          ),
                          o.push(u.a.createElement('p', { key: j.toString() + 'contentTooltip21' + n.props.name, style: w }, '- Key : ', e.key)),
                          o.push(
                            u.a.createElement('p', { key: j.toString() + 'contentTooltip22' + n.props.name, style: w }, '- KeyValue : ', e.keyValue)
                          ),
                          o.push(
                            u.a.createElement('p', { key: j.toString() + 'contentTooltip23' + n.props.name, style: w }, '- Type : ', e.manageValue)
                          ),
                          j++;
                      });
                    }
                  } else if ('monodirectional' === e && n.props.auxiliaryMetrics.length > 0) {
                    o.push(u.a.createElement('p', { key: 'contentTooltip24' + n.props.name, style: T }, 'Auxiliary Metric'));
                    var G = 1;
                    n.props.auxiliaryMetrics.forEach(function (e) {
                      o.push(u.a.createElement('p', { key: G.toString() + 'contentTooltip25' + n.props.name, style: A }, '+ Metric ', G)),
                        o.push(
                          u.a.createElement('p', { key: G.toString() + 'contentTooltip26' + n.props.name, style: w }, '- Reference : ', e.refId)
                        ),
                        o.push(
                          u.a.createElement(
                            'p',
                            { key: G.toString() + 'contentTooltip27' + n.props.name, style: w },
                            '- Value :',
                            ' ',
                            !isNaN(parseFloat(n.defineAuxMetric(n.props.valuesAuxiliaryMetrics[G - 1]))) &&
                              n.defineAuxMetric(n.props.valuesAuxiliaryMetrics[G - 1])
                          )
                        ),
                        o.push(u.a.createElement('p', { key: G.toString() + 'contentTooltip28' + n.props.name, style: w }, '- Key : ', e.key)),
                        o.push(
                          u.a.createElement('p', { key: G.toString() + 'contentTooltip29' + n.props.name, style: w }, '- KeyValue : ', e.keyValue)
                        ),
                        o.push(
                          u.a.createElement('p', { key: G.toString() + 'contentTooltip30' + n.props.name, style: w }, '- Type : ', e.manageValue)
                        ),
                        G++;
                    });
                  }
                return 0 === i.length && 0 === o.length && 0 === a.length
                  ? null
                  : u.a.createElement(
                      'div',
                      { style: { border: '1px solid black', padding: 0 } },
                      i,
                      u.a.createElement('div', { style: { backgroundColor: b ? v : h, padding: '0 5px' } }, a),
                      u.a.createElement('div', { style: { backgroundColor: I ? E : h, padding: '0 5px' } }, o),
                      n.defineHtmlLinkTooltip()
                    );
              }),
              (n.defineTextDecoration = function () {
                return n.props.textObject.style.underline || n.props.options.display.style.underline ? 'underline' : 'none';
              }),
              (n.defineFontStyle = function () {
                return n.props.textObject.style.italic || n.props.options.display.style.italic ? 'italic' : 'normal';
              }),
              (n.defineFontWeight = function () {
                return n.props.textObject.style.bold || n.props.options.display.style.bold ? 'bold' : 'normal';
              }),
              (n.defineColorTextLabel = function () {
                return n.props.textObject.colorText ? n.props.textObject.colorText : 'black';
              }),
              (n.defineSizeLink = function () {
                var e = '';
                n.props.size ? (e = n.props.size || '') : (e = '2');
                return e;
              }),
              (n.state = {}),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype.defineLimitX = function (e) {
              var t = e,
                n = parseInt(this.props.options.coordinateSpaceInitial.coordinate.xMin, 10),
                i = parseInt(this.props.options.coordinateSpaceInitial.coordinate.xMax, 10);
              return e < n ? (t = n) : e > i && (t = i), t;
            }),
            (t.prototype.defineLimitY = function (e) {
              var t = e,
                n = parseInt(this.props.options.coordinateSpaceInitial.coordinate.yMin, 10),
                i = parseInt(this.props.options.coordinateSpaceInitial.coordinate.yMax, 10);
              return e < n ? (t = n) : e > i && (t = i), t;
            }),
            (t.prototype.synchroLinkX = function (e, t) {
              var n = this,
                i = this.props.options.coordinateSpaceInitial.coordinate,
                a = parseInt(i.xMin, 10),
                o = parseInt(i.xMax, 10) - a,
                r = e / this.props.widthImage,
                l = Math.round(a + o * r),
                s = this.props.options.arrayOrientedLinks;
              return (
                s.forEach(function (e) {
                  e.name === n.props.name &&
                    ('xA' === t
                      ? (e.pointAPositionX = l.toString())
                      : 'xB' === t
                      ? (e.pointBPositionX = l.toString())
                      : 'xC' === t && (e.pointCPositionX = l.toString()));
                }),
                (this.props.options.arrayOrientedLinks = s),
                ((this.defineLimitX(l) - a) / o) * this.props.widthImage
              );
            }),
            (t.prototype.synchroLinkY = function (e, t) {
              var n = this,
                i = this.props.options.coordinateSpaceInitial.coordinate,
                a = parseInt(i.yMin, 10),
                o = parseInt(i.yMax, 10) - a,
                r = e / this.props.heightImage,
                l = Math.round(a + o * r),
                s = this.props.options.arrayOrientedLinks;
              return (
                s.forEach(function (e) {
                  e.name === n.props.name &&
                    ('yA' === t
                      ? (e.pointAPositionY = l.toString())
                      : 'yB' === t
                      ? (e.pointBPositionY = l.toString())
                      : 'yC' === t && (e.pointCPositionY = l.toString()));
                }),
                (this.props.options.arrayOrientedLinks = s),
                ((a + o - this.defineLimitY(l)) / o) * this.props.heightImage
              );
            }),
            (t.prototype.drawLink = function (e, t, n, i, a, o, r) {
              var l = this,
                s = this.defineParallelOrientedLinks(),
                p = 0,
                c = 0,
                h = 0,
                f = 0,
                m = 0,
                g = 0;
              if (s.length > 1) {
                var b = 0;
                s.forEach(function (e) {
                  e === parseInt(l.props.id, 10) &&
                    (0 === b
                      ? ((p = l.synchroLinkX(l.definePositionX(!0, 0))),
                        (c = l.synchroLinkY(l.definePositionY(!0, 0))),
                        (h = l.synchroLinkX(l.definePositionX(!1, 0))),
                        (f = l.synchroLinkY(l.definePositionY(!1, 0))),
                        (m = a || (p + h) / 2),
                        (g = o || (c + f) / 2))
                      : 1 === b
                      ? ((p = l.synchroLinkX(l.definePositionX(!0, 1))),
                        (c = l.synchroLinkY(l.definePositionY(!0, 1))),
                        (h = l.synchroLinkX(l.definePositionX(!1, 1))),
                        (f = l.synchroLinkY(l.definePositionY(!1, 1))),
                        (m = a || (p + h) / 2),
                        (g = o || (c + f) / 2))
                      : 2 === b &&
                        ((p = l.synchroLinkX(l.definePositionX(!0, 2))),
                        (c = l.synchroLinkY(l.definePositionY(!0, 2))),
                        (h = l.synchroLinkX(l.definePositionX(!1, 2))),
                        (f = l.synchroLinkY(l.definePositionY(!1, 2))),
                        (m = a || (p + h) / 2),
                        (g = o || (c + f) / 2))),
                    b++;
                });
              } else
                ('' === this.props.associateRegionIn && '' === this.props.associatePointIn) ||
                '' !== this.props.associateRegionOut ||
                '' !== this.props.associatePointOut
                  ? ('' !== this.props.associateRegionIn && '' !== this.props.associatePointIn) ||
                    '' === this.props.associateRegionOut ||
                    '' === this.props.associatePointOut
                    ? ('' !== this.props.associatePointIn && '' !== this.props.associatePointOut) ||
                      ('' !== this.props.associatePointIn && '' !== this.props.associateRegionOut) ||
                      ('' !== this.props.associateRegionIn && '' !== this.props.associatePointOut) ||
                      ('' !== this.props.associateRegionIn && '' !== this.props.associateRegionOut)
                      ? ((p = this.synchroLinkX(this.definePositionX(!0, 2))),
                        (c = this.synchroLinkY(this.definePositionY(!0, 2))),
                        (h = this.synchroLinkX(this.definePositionX(!1, 2))),
                        (f = this.synchroLinkY(this.definePositionY(!1, 2))),
                        (m = a || (p + h) / 2),
                        (g = o || (c + f) / 2))
                      : ((p = e), (c = t), (h = n), (f = i), (m = a), (g = o))
                    : ((p = e),
                      (c = t),
                      (h = this.synchroLinkX(this.definePositionX(!1, 2))),
                      (f = this.synchroLinkY(this.definePositionY(!1, 2))),
                      (m = a || (p + h) / 2),
                      (g = o || (c + f) / 2))
                  : ((p = this.synchroLinkX(this.definePositionX(!0, 2))),
                    (c = this.synchroLinkY(this.definePositionY(!0, 2))),
                    (h = n),
                    (f = i),
                    (m = a || (p + h) / 2),
                    (g = o || (c + f) / 2));
              var y = 0,
                v = 0;
              this.props.isIncurved.value ? ((y = m), (v = g)) : ((y = (p + h) / 2), (v = (c + f) / 2));
              var x = Math.sqrt((p - y) * (p - y) + (c - v) * (c - v)),
                k = (180 * Math.atan2(c - v, p - y)) / Math.PI,
                C = (p + y) / 2,
                I = (c + v) / 2,
                S = C - x / 2,
                E = I,
                M = Math.sqrt((h - y) * (h - y) + (f - v) * (f - v)),
                L = (180 * Math.atan2(f - v, h - y)) / Math.PI,
                O = (h + y) / 2,
                T = (f + v) / 2,
                B = O - M / 2,
                A = T,
                D = Math.sqrt((p - h) * (p - h) + (c - f) * (c - f)),
                w = (180 * Math.atan2(c - f, p - h)) / Math.PI,
                P = (p + h) / 2,
                j = (c + f) / 2,
                G = P - D / 2,
                V = j,
                R = this.defineValueTooptip('monodirectional'),
                F = this.defineValueTooptip('bidirectional', 'A'),
                U = this.defineValueTooptip('bidirectional', 'B'),
                z = this.props.linkUrl.followLink;
              if ('double' === r) {
                var Y = u.a.createElement('div', null);
                Y = F
                  ? u.a.createElement(
                      d.Tooltip,
                      { content: F, placement: this.props.tooltipPositionA.value },
                      u.a.createElement(
                        'div',
                        {
                          id: 'linkA',
                          style: {
                            position: 'absolute',
                            zIndex: this.props.zIndex,
                            top: E - 4,
                            left: S,
                            transform: 'rotate(' + k.toString() + 'deg)',
                            width: x,
                          },
                        },
                        u.a.createElement(
                          'div',
                          { id: 'arrow1', style: { display: 'flex', alignContent: 'stretch' } },
                          u.a.createElement('div', {
                            className: 'arrowTriangle',
                            style: {
                              width: '0',
                              height: '0',
                              borderLeft: this.defineSizeLink() + 'px solid transparent',
                              borderRight: this.defineSizeLink() + 'px solid transparent',
                              borderBottom: this.defineSizeLink() + 'px solid ' + this.defineBackColor('A'),
                              transform: 'rotate(270deg)',
                            },
                          }),
                          u.a.createElement('div', {
                            style: {
                              border: this.defineBorderSize('A') + 'px solid ' + this.defineBorderColor('A'),
                              backgroundColor: this.defineBackColor('A'),
                              width: x,
                              height: this.defineSizeLink() + 'px',
                            },
                          })
                        )
                      )
                    )
                  : u.a.createElement(
                      'div',
                      {
                        id: 'linkA',
                        style: {
                          position: 'absolute',
                          zIndex: this.props.zIndex,
                          top: E - 4,
                          left: S,
                          transform: 'rotate(' + k.toString() + 'deg)',
                          width: x,
                        },
                      },
                      u.a.createElement(
                        'div',
                        { id: 'arrow1', style: { display: 'flex', alignContent: 'stretch' } },
                        u.a.createElement('div', {
                          className: 'arrowTriangle',
                          style: {
                            width: '0',
                            height: '0',
                            borderLeft: this.defineSizeLink() + 'px solid transparent',
                            borderRight: this.defineSizeLink() + 'px solid transparent',
                            borderBottom: this.defineSizeLink() + 'px solid ' + this.defineBackColor('A'),
                            transform: 'rotate(270deg)',
                          },
                        }),
                        u.a.createElement('div', {
                          style: {
                            border: this.defineBorderSize('A') + 'px solid ' + this.defineBorderColor('A'),
                            backgroundColor: this.defineBackColor('A'),
                            width: x,
                            height: this.defineSizeLink() + 'px',
                          },
                        })
                      )
                    );
                var W = u.a.createElement('div', null);
                return (
                  (W = U
                    ? u.a.createElement(
                        d.Tooltip,
                        { content: U, placement: this.props.tooltipPositionB.value },
                        u.a.createElement(
                          'div',
                          {
                            id: 'linkB',
                            style: {
                              position: 'absolute',
                              zIndex: this.props.zIndex,
                              top: A - 4,
                              left: B,
                              transform: 'rotate(' + L.toString() + 'deg)',
                              width: M,
                            },
                          },
                          u.a.createElement(
                            'div',
                            { id: 'arrow2', style: { display: 'flex', alignContent: 'stretch' } },
                            u.a.createElement('div', {
                              className: 'arrowTriangle',
                              style: {
                                width: '0',
                                height: '0',
                                borderLeft: this.defineSizeLink() + 'px solid transparent',
                                borderRight: this.defineSizeLink() + 'px solid transparent',
                                borderBottom: this.defineSizeLink() + 'px solid ' + this.defineBackColor('B'),
                                transform: 'rotate(270deg)',
                              },
                            }),
                            u.a.createElement('div', {
                              style: {
                                border: this.defineBorderSize('B') + 'px solid ' + this.defineBorderColor('B'),
                                backgroundColor: this.defineBackColor('B'),
                                width: M,
                                height: this.defineSizeLink() + 'px',
                              },
                            })
                          )
                        )
                      )
                    : u.a.createElement(
                        'div',
                        {
                          id: 'linkB',
                          style: {
                            position: 'absolute',
                            zIndex: this.props.zIndex,
                            top: A - 4,
                            left: B,
                            transform: 'rotate(' + L.toString() + 'deg)',
                            width: M,
                          },
                        },
                        u.a.createElement(
                          'div',
                          { id: 'arrow2', style: { display: 'flex', alignContent: 'stretch' } },
                          u.a.createElement('div', {
                            className: 'arrowTriangle',
                            style: {
                              width: '0',
                              height: '0',
                              borderLeft: this.defineSizeLink() + 'px solid transparent',
                              borderRight: this.defineSizeLink() + 'px solid transparent',
                              borderBottom: this.defineSizeLink() + 'px solid ' + this.defineBackColor('B'),
                              transform: 'rotate(270deg)',
                            },
                          }),
                          u.a.createElement('div', {
                            style: {
                              border: this.defineBorderSize('B') + 'px solid ' + this.defineBorderColor('B'),
                              backgroundColor: this.defineBackColor('B'),
                              width: M,
                              height: this.defineSizeLink() + 'px',
                            },
                          })
                        )
                      )),
                  u.a.createElement(
                    'a',
                    { href: z, id: 'link' },
                    u.a.createElement(
                      'div',
                      null,
                      Y,
                      u.a.createElement(
                        'div',
                        {
                          id: 'labelMainMetric' + this.props.id,
                          style: {
                            textDecoration: this.defineTextDecoration(),
                            fontStyle: this.defineFontStyle(),
                            fontWeight: this.defineFontWeight(),
                            position: 'absolute',
                            zIndex: 9999,
                            top: I + -1 * parseInt(this.props.labelAPositionY, 10) - this.labelSynchroY('A'),
                            left: C + parseInt(this.props.labelAPositionX, 10) - this.labelSynchroX('A'),
                            fontSize: this.props.sizePolice,
                            backgroundColor: 'white',
                            color: this.defineColorTextLabel(),
                            padding: '0',
                          },
                        },
                        this.defineTextObject(this.props.valueMainMetricA)
                      )
                    ),
                    u.a.createElement(
                      'div',
                      null,
                      W,
                      u.a.createElement(
                        'div',
                        {
                          id: 'labelMainMetricB' + this.props.id,
                          style: {
                            textDecoration: this.defineTextDecoration(),
                            fontStyle: this.defineFontStyle(),
                            fontWeight: this.defineFontWeight(),
                            position: 'absolute',
                            zIndex: 9999,
                            top: T + -1 * parseInt(this.props.labelBPositionY, 10) - this.labelSynchroY('B'),
                            left: O + parseInt(this.props.labelBPositionX, 10) - this.labelSynchroX('B'),
                            fontSize: this.props.sizePolice,
                            backgroundColor: 'white',
                            color: this.defineColorTextLabel(),
                            padding: '0',
                          },
                        },
                        this.defineTextObject(this.props.valueMainMetricB)
                      )
                    )
                  )
                );
              }
              if ('AB' === r) {
                Y = u.a.createElement('div', null);
                Y = R
                  ? u.a.createElement(
                      d.Tooltip,
                      { content: R, placement: this.props.tooltipPositionA.value },
                      u.a.createElement(
                        'div',
                        {
                          id: 'partA',
                          style: {
                            position: 'absolute',
                            zIndex: this.props.zIndex,
                            top: E - 4,
                            left: S,
                            transform: 'rotate(' + k.toString() + 'deg)',
                            width: x,
                          },
                        },
                        u.a.createElement('div', {
                          style: {
                            padding: parseInt(this.defineBorderSize('A'), 10) / 2 + 'px',
                            border: this.defineBorderSize('A') + 'px solid ' + this.defineBorderColor('A'),
                            backgroundColor: this.defineBackColor('A'),
                            width: x,
                            height: this.defineSizeLink() + 'px',
                          },
                        })
                      )
                    )
                  : u.a.createElement(
                      'div',
                      {
                        id: 'partA',
                        style: {
                          position: 'absolute',
                          zIndex: this.props.zIndex,
                          top: E - 4,
                          left: S,
                          transform: 'rotate(' + k.toString() + 'deg)',
                          width: x,
                        },
                      },
                      u.a.createElement('div', {
                        style: {
                          padding: parseInt(this.defineBorderSize('A'), 10) / 2 + 'px',
                          border: this.defineBorderSize('A') + 'px solid ' + this.defineBorderColor('A'),
                          backgroundColor: this.defineBackColor('A'),
                          width: x,
                          height: this.defineSizeLink() + 'px',
                        },
                      })
                    );
                W = u.a.createElement('div', null);
                if (
                  ((W = R
                    ? u.a.createElement(
                        d.Tooltip,
                        { content: R, placement: this.props.tooltipPositionA.value },
                        u.a.createElement(
                          'div',
                          {
                            id: 'partB',
                            style: {
                              position: 'absolute',
                              zIndex: this.props.zIndex,
                              top: A - 4,
                              left: B,
                              transform: 'rotate(' + L.toString() + 'deg)',
                              width: M,
                            },
                          },
                          u.a.createElement(
                            'div',
                            { id: 'arrow2', style: { display: 'flex' } },
                            u.a.createElement('div', {
                              style: {
                                border: this.defineBorderSize('A') + 'px solid ' + this.defineBorderColor('A'),
                                backgroundColor: this.defineBackColor('A'),
                                width: M,
                                height: this.defineSizeLink() + 'px',
                              },
                            }),
                            u.a.createElement('div', {
                              className: 'arrowTriangle',
                              style: {
                                width: '0',
                                height: '0',
                                borderLeft: this.defineSizeLink() + 'px solid transparent',
                                borderRight: this.defineSizeLink() + 'px solid transparent',
                                borderBottom: this.defineSizeLink() + 'px solid ' + this.defineBackColor('A'),
                                transform: 'rotate(90deg)',
                              },
                            })
                          )
                        )
                      )
                    : u.a.createElement(
                        'div',
                        {
                          id: 'partB',
                          style: {
                            position: 'absolute',
                            zIndex: this.props.zIndex,
                            top: A - 4,
                            left: B,
                            transform: 'rotate(' + L.toString() + 'deg)',
                            width: M,
                            height: this.defineSizeLink() + 'px',
                          },
                        },
                        u.a.createElement(
                          'div',
                          { id: 'arrow2', style: { display: 'flex' } },
                          u.a.createElement('div', {
                            style: {
                              border: this.defineBorderSize('A') + 'px solid ' + this.defineBorderColor('A'),
                              backgroundColor: this.defineBackColor('A'),
                              width: M,
                              height: this.defineSizeLink() + 'px',
                            },
                          }),
                          u.a.createElement('div', {
                            className: 'arrowTriangle',
                            style: {
                              width: '0',
                              height: '0',
                              borderLeft: this.defineSizeLink() + 'px solid transparent',
                              borderRight: this.defineSizeLink() + 'px solid transparent',
                              borderBottom: this.defineSizeLink() + 'px solid ' + this.defineBackColor('A'),
                              transform: 'rotate(90deg)',
                            },
                          })
                        )
                      )),
                  this.props.isIncurved.value)
                )
                  return u.a.createElement(
                    'a',
                    { href: z },
                    Y,
                    W,
                    u.a.createElement(
                      'div',
                      {
                        id: 'labelMainMetric' + this.props.id,
                        style: {
                          textDecoration: this.defineTextDecoration(),
                          fontStyle: this.defineFontStyle(),
                          fontWeight: this.defineFontWeight(),
                          position: 'absolute',
                          zIndex: 9999,
                          top: v + -1 * parseInt(this.props.labelAPositionY, 10) - this.labelSynchroY('A'),
                          left: y + parseInt(this.props.labelAPositionX, 10) - this.labelSynchroX('A'),
                          backgroundColor: 'white',
                          fontSize: this.props.sizePolice,
                          color: this.defineColorTextLabel(),
                          padding: '0',
                          cursor: 'pointer',
                        },
                      },
                      this.defineTextObject(this.props.valueMainMetricA)
                    )
                  );
                var X = u.a.createElement('div', null);
                return (
                  (X = R
                    ? u.a.createElement(
                        d.Tooltip,
                        { content: R, placement: this.props.tooltipPositionA.value },
                        u.a.createElement(
                          'div',
                          {
                            id: 'link',
                            style: {
                              position: 'absolute',
                              zIndex: this.props.zIndex,
                              top: V - 4,
                              left: G,
                              transform: 'rotate(' + w.toString() + 'deg)',
                              width: D,
                            },
                          },
                          u.a.createElement(
                            'div',
                            { id: 'arrow1', style: { display: 'flex', justifyContent: 'center' } },
                            u.a.createElement('div', {
                              className: 'arrowTriangle',
                              style: {
                                width: '0',
                                height: '0',
                                borderLeft: this.defineSizeLink() + 'px solid transparent',
                                borderRight: this.defineSizeLink() + 'px solid transparent',
                                borderBottom: this.defineSizeLink() + 'px solid ' + this.defineBackColor('A'),
                                transform: 'rotate(270deg)',
                              },
                            }),
                            u.a.createElement('div', {
                              style: {
                                border: this.defineBorderSize('A') + 'px solid ' + this.defineBorderColor('A'),
                                backgroundColor: this.defineBackColor('A'),
                                width: D,
                                height: this.defineSizeLink() + 'px',
                              },
                            })
                          )
                        )
                      )
                    : u.a.createElement(
                        'div',
                        {
                          id: 'link',
                          style: {
                            position: 'absolute',
                            zIndex: this.props.zIndex,
                            top: V - 4,
                            left: G,
                            transform: 'rotate(' + w.toString() + 'deg)',
                            width: D,
                          },
                        },
                        u.a.createElement(
                          'div',
                          { id: 'arrow1', style: { display: 'flex', justifyContent: 'center' } },
                          u.a.createElement('div', {
                            className: 'arrowTriangle',
                            style: {
                              width: '0',
                              height: '0',
                              borderLeft: this.defineSizeLink() + 'px solid transparent',
                              borderRight: this.defineSizeLink() + 'px solid transparent',
                              borderBottom: this.defineSizeLink() + 'px solid ' + this.defineBackColor('A'),
                              transform: 'rotate(270deg)',
                            },
                          }),
                          u.a.createElement('div', {
                            style: {
                              border: this.defineBorderSize('A') + 'px solid ' + this.defineBorderColor('A'),
                              backgroundColor: this.defineBackColor('A'),
                              width: D,
                              height: this.defineSizeLink() + 'px',
                            },
                          })
                        )
                      )),
                  u.a.createElement(
                    'a',
                    { href: z, target: '_blank' },
                    X,
                    u.a.createElement(
                      'div',
                      {
                        id: 'labelMainMetric' + this.props.id,
                        style: {
                          textDecoration: this.defineTextDecoration(),
                          fontStyle: this.defineFontStyle(),
                          fontWeight: this.defineFontWeight(),
                          position: 'absolute',
                          zIndex: 9999,
                          top: j + -1 * parseInt(this.props.labelAPositionY, 10) - this.labelSynchroY('A'),
                          left: P + parseInt(this.props.labelAPositionX, 10) - this.labelSynchroX('A'),
                          backgroundColor: 'white',
                          fontSize: this.props.sizePolice,
                          color: this.defineColorTextLabel(),
                          padding: '0',
                          cursor: 'pointer',
                        },
                      },
                      this.defineTextObject(this.props.valueMainMetricA)
                    )
                  )
                );
              }
              if ('no' === r) {
                if (this.props.isIncurved.value) {
                  Y = u.a.createElement('div', null);
                  Y = R
                    ? u.a.createElement(
                        d.Tooltip,
                        { content: R, placement: this.props.tooltipPositionA.value },
                        u.a.createElement('div', {
                          id: 'partA',
                          style: {
                            position: 'absolute',
                            zIndex: this.props.zIndex,
                            top: E,
                            left: S,
                            transform: 'rotate(' + k.toString() + 'deg)',
                            height: this.defineBorderSize('A') + 'px',
                            width: x,
                            border: this.defineBorderSize('A') + ' solid ' + this.defineBorderColor('A'),
                            backgroundColor: this.defineBackColor('A'),
                          },
                        })
                      )
                    : u.a.createElement('div', {
                        id: 'partA',
                        style: {
                          position: 'absolute',
                          zIndex: this.props.zIndex,
                          top: E,
                          left: S,
                          transform: 'rotate(' + k.toString() + 'deg)',
                          height: this.defineBorderSize('A') + 'px',
                          width: x,
                          border: this.defineBorderSize('A') + ' solid ' + this.defineBorderColor('A'),
                          backgroundColor: this.defineBackColor('A'),
                        },
                      });
                  W = u.a.createElement('div', null);
                  return (
                    (W = R
                      ? u.a.createElement(
                          d.Tooltip,
                          { content: R, placement: this.props.tooltipPositionA.value },
                          u.a.createElement('div', {
                            id: 'partB',
                            style: {
                              position: 'absolute',
                              zIndex: this.props.zIndex,
                              top: A,
                              left: B,
                              transform: 'rotate(' + L.toString() + 'deg)',
                              height: this.defineBorderSize('A') + 'px',
                              width: M,
                              border: this.defineBorderSize('A') + ' solid ' + this.defineBorderColor('A'),
                              backgroundColor: this.defineBackColor('A'),
                            },
                          })
                        )
                      : u.a.createElement('div', {
                          id: 'partB',
                          style: {
                            position: 'absolute',
                            zIndex: this.props.zIndex,
                            top: A,
                            left: B,
                            transform: 'rotate(' + L.toString() + 'deg)',
                            height: this.defineBorderSize('A') + 'px',
                            width: M,
                            border: this.defineBorderSize('A') + ' solid ' + this.defineBorderColor('A'),
                            backgroundColor: this.defineBackColor('A'),
                          },
                        })),
                    u.a.createElement(
                      'a',
                      { href: z },
                      Y,
                      W,
                      u.a.createElement(
                        'div',
                        {
                          id: 'labelMainMetric' + this.props.id,
                          style: {
                            textDecoration: this.defineTextDecoration(),
                            fontStyle: this.defineFontStyle(),
                            fontWeight: this.defineFontWeight(),
                            position: 'absolute',
                            zIndex: 9999,
                            top: v + -1 * parseInt(this.props.labelAPositionY, 10) - this.labelSynchroY('A'),
                            left: y + parseInt(this.props.labelAPositionX, 10) - this.labelSynchroX('A'),
                            backgroundColor: 'white',
                            fontSize: this.props.sizePolice,
                            color: this.defineColorTextLabel(),
                            padding: '0',
                            cursor: 'pointer',
                          },
                        },
                        this.defineTextObject(this.props.valueMainMetricA)
                      )
                    )
                  );
                }
                Y = u.a.createElement('div', null);
                return (
                  (Y = R
                    ? u.a.createElement(
                        d.Tooltip,
                        { content: R, placement: this.props.tooltipPositionA.value },
                        u.a.createElement('div', {
                          id: 'link',
                          style: {
                            position: 'absolute',
                            zIndex: this.props.zIndex,
                            top: V,
                            left: G,
                            transform: 'rotate(' + w.toString() + 'deg)',
                            width: D,
                            height: this.defineBorderSize('A') + 'px',
                            border: this.defineBorderSize('A') + ' solid ' + this.defineBorderColor('A'),
                            backgroundColor: this.defineBackColor('A'),
                          },
                        })
                      )
                    : u.a.createElement('div', {
                        id: 'link',
                        style: {
                          position: 'absolute',
                          zIndex: this.props.zIndex,
                          top: V,
                          left: G,
                          transform: 'rotate(' + w.toString() + 'deg)',
                          width: D,
                          height: this.defineBorderSize('A') + 'px',
                          border: this.defineBorderSize('A') + ' solid ' + this.defineBorderColor('A'),
                          backgroundColor: this.defineBackColor('A'),
                        },
                      })),
                  u.a.createElement(
                    'a',
                    { href: z, target: '_blank' },
                    Y,
                    u.a.createElement(
                      'div',
                      {
                        id: 'labelMainMetric' + this.props.id,
                        style: {
                          textDecoration: this.defineTextDecoration(),
                          fontStyle: this.defineFontStyle(),
                          fontWeight: this.defineFontWeight(),
                          position: 'absolute',
                          zIndex: 9999,
                          top: j + -1 * parseInt(this.props.labelAPositionY, 10) - this.labelSynchroY('A'),
                          left: P + parseInt(this.props.labelAPositionX, 10) - this.labelSynchroX('A'),
                          backgroundColor: 'white',
                          fontSize: this.props.sizePolice,
                          color: this.defineColorTextLabel(),
                          padding: '0',
                          cursor: 'pointer',
                        },
                      },
                      this.defineTextObject(this.props.valueMainMetricA)
                    )
                  )
                );
              }
              return u.a.createElement('div', null);
            }),
            (t.prototype.defineBackColor = function (e) {
              var t = this,
                n = '',
                i = this.props.seuil,
                a = 0;
              (a = 'A' === e ? parseInt(this.props.valueMainMetricA, 10) : parseInt(this.props.valueMainMetricB, 10)),
                (n = this.props.traceBack && i.length > 0 && '' !== i[0].backColor ? i[0].backColor : 'black');
              var o = 0;
              return (
                i.forEach(function (e) {
                  var i = 0;
                  0 === (i = '' === e.lowerLimitMin ? 0 : parseInt(e.lowerLimitMin.substring(1), 10))
                    ? a >= i && a <= parseInt(e.lowerLimitMax, 10) && (n = e.backColor)
                    : t.props.seuil.length === o + 1
                    ? a > i && (n = e.backColor)
                    : a > i && a <= parseInt(e.lowerLimitMax, 10) && (n = e.backColor),
                    o++;
                }),
                n
              );
            }),
            (t.prototype.defineBorderColor = function (e) {
              var t = this,
                n = '',
                i = this.props.seuil,
                a = 0;
              (a = 'A' === e ? parseInt(this.props.valueMainMetricA, 10) : parseInt(this.props.valueMainMetricB, 10)),
                (n = this.props.traceBorder && i.length > 0 && '' !== i[0].borderColor ? i[0].borderColor : 'black');
              var o = 0;
              return (
                i.forEach(function (e) {
                  var i = 0;
                  0 === (i = '' === e.lowerLimitMin ? 0 : parseInt(e.lowerLimitMin.substring(1), 10))
                    ? a >= i && a <= parseInt(e.lowerLimitMax, 10) && (n = e.borderColor)
                    : t.props.seuil.length === o + 1
                    ? a > i && (n = e.borderColor)
                    : a > i && a <= parseInt(e.lowerLimitMax, 10) && (n = e.borderColor),
                    o++;
                }),
                n
              );
            }),
            (t.prototype.defineBorderSize = function (e) {
              var t = this,
                n = '',
                i = this.props.seuil,
                a = 0;
              (a = 'A' === e ? parseInt(this.props.valueMainMetricA, 10) : parseInt(this.props.valueMainMetricB, 10)),
                (n = this.props.traceBorder && i.length > 0 && '' !== i[0].sizeBorder ? i[0].sizeBorder : '0');
              var o = 0;
              return (
                i.forEach(function (e) {
                  var i = 0;
                  0 === (i = '' === e.lowerLimitMin ? 0 : parseInt(e.lowerLimitMin.substring(1), 10))
                    ? a >= i && a <= parseInt(e.lowerLimitMax, 10) && (n = e.sizeBorder)
                    : t.props.seuil.length === o + 1
                    ? a > i && (n = e.sizeBorder)
                    : a > i && a <= parseInt(e.lowerLimitMax, 10) && (n = e.sizeBorder),
                    o++;
                }),
                n
              );
            }),
            (t.prototype.render = function () {
              var e = this.synchroLinkX(parseInt(this.props.positionXADefault, 10), 'xA'),
                t = this.synchroLinkY(parseInt(this.props.positionYADefault, 10), 'yA'),
                n = this.synchroLinkX(parseInt(this.props.positionXBDefault, 10), 'xB'),
                i = this.synchroLinkY(parseInt(this.props.positionYBDefault, 10), 'yB'),
                a = this.synchroLinkX(parseInt(this.props.positionXCDefault, 10) || 0, 'xC'),
                o = this.synchroLinkY(parseInt(this.props.positionYCDefault, 10) || 0, 'yC'),
                r = this.props.orientationLink;
              return u.a.createElement('div', null, this.drawLink(e, t, n, i, a, o, r));
            }),
            t
          );
        })(u.a.Component),
        xe = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.setStateAsyncFinalHTML = function (e) {
                return new Promise(function (t) {
                  n.setState(e, t);
                });
              }),
              (n.fillLowerLimit = function (e, t) {
                var n,
                  i,
                  a = [],
                  o = 0,
                  r = e.length - 1;
                try {
                  for (var l = p(e), s = l.next(); !s.done; s = l.next()) {
                    var c = s.value;
                    a.push(
                      u.a.createElement(
                        'div',
                        { key: t + 'LowerLimit' + o, className: 'LegendMatt' },
                        u.a.createElement(
                          'span',
                          {
                            style: {
                              padding: '5px',
                              width: '130px',
                              backgroundColor: c.backColor,
                              border: c.sizeBorder + 'px solid ' + c.borderColor,
                              listStyleType: 'none',
                              display: 'inline-block',
                              textAlign: 'center',
                            },
                          },
                          e.length > 1 &&
                            u.a.createElement(
                              'span',
                              { style: { fontSize: '10px' } },
                              0 === o ? '-∞' : c.lowerLimitMin,
                              ' - ',
                              o === r ? '+∞' : c.lowerLimitMax
                            )
                        )
                      )
                    ),
                      ++o;
                  }
                } catch (e) {
                  n = { error: e };
                } finally {
                  try {
                    s && !s.done && (i = l.return) && i.call(l);
                  } finally {
                    if (n) throw n.error;
                  }
                }
                return a;
              }),
              (n.fillRegion = function () {
                var e,
                  t,
                  i = n.props.options.regionCoordinateSpace,
                  a = [];
                try {
                  for (var o = p(i), r = o.next(); !r.done; r = o.next()) {
                    var l = r.value,
                      s = n.fillLowerLimit(l.lowerLimit, 'region'),
                      c = u.a.createElement('div', { key: l.id + 'DisplayLegendRegion' }, l.label, s);
                    a.push(c);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    r && !r.done && (t = o.return) && t.call(o);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return a;
              }),
              (n.closeLegend = function (e) {
                n.props.callBackClose();
              }),
              (n.fillPoint = function () {
                var e,
                  t,
                  i = n.props.options.arrayPoints,
                  a = [];
                try {
                  for (var o = p(i), r = o.next(); !r.done; r = o.next()) {
                    var l = r.value,
                      s = n.fillLowerLimit(l.lowerLimit, 'point'),
                      c = l.label || l.name,
                      d = u.a.createElement('div', { key: c + 'DisplayLegendPoint' }, c, s);
                    a.push(d);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    r && !r.done && (t = o.return) && t.call(o);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return a;
              }),
              (n.fillLink = function () {
                var e,
                  t,
                  i = n.props.options.arrayOrientedLinks,
                  a = [];
                try {
                  for (var o = p(i), r = o.next(); !r.done; r = o.next()) {
                    var l = r.value,
                      s = n.fillLowerLimit(l.lowerLimit, 'link'),
                      c = l.label || l.name,
                      d = u.a.createElement('div', { key: c + 'DisplayLegendLink' }, c, s);
                    a.push(d);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    r && !r.done && (t = o.return) && t.call(o);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                return a;
              }),
              (n.renduState = function () {
                return l(n, void 0, void 0, function () {
                  var e;
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          (e = u.a.createElement(
                            'div',
                            {
                              key: 'contentLegend',
                              style: { position: 'relative', left: this.state.legend.x, top: this.state.legend.y, maxWidth: '100%', zIndex: 'auto' },
                              hidden: this.state.legend.hiddenLegend,
                            },
                            u.a.createElement(
                              'article',
                              {
                                id: 'L',
                                style: {
                                  width: '200px',
                                  position: 'absolute',
                                  overflowY: 'scroll',
                                  margin: '0',
                                  height: '240px',
                                  backgroundColor: '#FFF',
                                  color: '#000',
                                  border: '4px solid #299c46',
                                  borderRadius: '4px',
                                  scrollbarColor: '#299c46',
                                  scrollbarWidth: 'thin',
                                  zIndex: 9999,
                                  resize: 'both',
                                },
                              },
                              u.a.createElement(
                                'div',
                                { key: 'legendTitle', style: { backgroundImage: 'linear-gradient(90deg, rgb(41, 42, 45), rgb(0, 0, 0))' } },
                                u.a.createElement(
                                  'h5',
                                  { style: { width: '100%', fontSize: '20px', display: 'flex', padding: '10px' } },
                                  'Legend',
                                  u.a.createElement(
                                    d.Button,
                                    { onClick: this.closeLegend, style: { marginLeft: 'auto' }, id: 'iconclose' },
                                    u.a.createElement('i', { className: 'fa fa-times', 'aria-hidden': 'true' })
                                  )
                                ),
                                u.a.createElement(
                                  'div',
                                  { key: 'legendTitleRegion', style: { backgroundImage: 'linear-gradient(90deg, rgb(41, 42, 45), rgb(0, 0, 0))' } },
                                  u.a.createElement(
                                    'p',
                                    { style: { fontSize: '15px', padding: '10px 0 10px 14px', fontWeight: 'bold', color: 'white' } },
                                    'Region'
                                  )
                                )
                              ),
                              u.a.createElement('div', { key: 'regionLegend', style: { paddingLeft: '5px', lineHeight: '1.5' } }, this.fillRegion()),
                              u.a.createElement(
                                'div',
                                { key: 'legendTitlePoint', style: { backgroundImage: 'linear-gradient(90deg, rgb(41, 42, 45), rgb(0, 0, 0))' } },
                                u.a.createElement(
                                  'p',
                                  { style: { fontSize: '15px', padding: '10px 0 10px 14px', fontWeight: 'bold', color: 'white' } },
                                  'Point'
                                )
                              ),
                              u.a.createElement('div', { key: 'pointLegend', style: { paddingLeft: '5px', lineHeight: '1.5' } }, this.fillPoint()),
                              u.a.createElement(
                                'div',
                                { key: 'legendTitleLink', style: { backgroundImage: 'linear-gradient(90deg, rgb(41, 42, 45), rgb(0, 0, 0))' } },
                                u.a.createElement(
                                  'p',
                                  { style: { fontSize: '15px', padding: '10px 0 10px 14px', fontWeight: 'bold', color: 'white' } },
                                  'Oriented Link'
                                )
                              ),
                              u.a.createElement('div', { key: 'linkLegend', style: { paddingLeft: '5px' } }, this.fillLink())
                            )
                          )),
                          [4, this.setStateAsyncFinalHTML({ finalHTML: e })]
                        );
                      case 1:
                        return t.sent(), [2];
                    }
                  });
                });
              }),
              (n.setStateLegendAsync = function (e) {
                return new Promise(function (t) {
                  n.setState(e, t);
                });
              }),
              (n.componentDidUpdate = function (e, t) {
                return l(n, void 0, void 0, function () {
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return e === this.props && t.legend.hiddenLegend === this.props.options.legend.hiddenLegend
                          ? [3, 2]
                          : [4, this.setStateLegendAsync({ legend: this.props.options.legend })];
                      case 1:
                        n.sent(), this.renduState(), (n.label = 2);
                      case 2:
                        return [2];
                    }
                  });
                });
              }),
              (n.componentDidMount = function () {
                n.renduState();
              }),
              (n.state = { finalHTML: u.a.createElement('div', null), legend: n.props.options.legend }),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype.render = function () {
              return u.a.createElement('div', { key: 'contentHtmlLegend' }, this.state.finalHTML);
            }),
            t
          );
        })(u.a.Component),
        ke = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.defineLimit = function () {
                var e = n.props.options.coordinateSpaceInitial,
                  t = u.a.createElement('div', null);
                return (
                  '' !== n.props.options.baseMap.image ||
                    n.props.options.baseMap.modeSVG ||
                    (t = u.a.createElement(be, {
                      key: 'limitCoor',
                      color: 'orange',
                      coordinateInitial: e,
                      id: 'initialSpace',
                      onOptionsChange: n.props.onOptionsChange,
                      options: n.props.options,
                      data: n.props.data,
                      buttonAddLinkIsActive: n.state.buttonAddLinkIsActive,
                      buttonAddIncurvedLinkIsActive: n.state.buttonAddIncurvedLinkIsActive,
                    })),
                  t
                );
              }),
              (n.getCoordinatesToDrawPointWithClick = function (e) {
                var t,
                  i,
                  a = n.props.options.coordinateSpaceInitial.coordinate,
                  o = parseInt(a.xMin, 10),
                  r = parseInt(a.xMax, 10),
                  l = parseInt(a.yMin, 10),
                  s = parseInt(a.yMax, 10),
                  p = e.nativeEvent.clientX - 24,
                  c = r - o,
                  u = s - l,
                  d = parseInt(n.props.options.baseMap.height, 10);
                (t = Math.round(p)),
                  (i = Math.round(d - e.nativeEvent.layerY)),
                  ('initialSpace' !== e.nativeEvent.target.id &&
                    'mainPanel' !== e.nativeEvent.target.id &&
                    'Intent' !== e.nativeEvent.target.id &&
                    e.nativeEvent.target.id !== 'oct' + n.props.options.baseMap.idSVG &&
                    e.nativeEvent.target.id !== n.props.options.baseMap.idSVG) ||
                    n.createPointToClick(t, i, c, u);
              }),
              (n.defineIdPoint = function () {
                var e = 1;
                return 0 === n.props.options.arrayPoints.length
                  ? e
                  : (e = n.props.options.arrayPoints[n.props.options.arrayPoints.length - 1].id + 1);
              }),
              (n.createPointToClick = function (e, t, i, a) {
                var o = n.defineIdPoint(),
                  l = new b(
                    '',
                    !1,
                    'white',
                    'black',
                    { bold: !1, italic: !1, underline: !1 },
                    !0,
                    {
                      legendElement: '',
                      numericFormatElement: '5',
                      unit: '',
                      displayObjectInTooltip: !1,
                      addColorTextElement: !1,
                      colorTextElement: 'white',
                      addColorBackElement: !1,
                      colorBackElement: 'black',
                    },
                    {
                      legendElement: '',
                      numericFormatElement: '5',
                      unit: '',
                      displayObjectInTooltip: !0,
                      addColorTextElement: !0,
                      colorTextElement: 'white',
                      addColorBackElement: !0,
                      colorBackElement: 'black',
                    }
                  ),
                  s = new y('', '', ''),
                  p = new m('0', '0', '0', '0', {}, {}),
                  c = new f(
                    o,
                    s,
                    [],
                    [],
                    '',
                    l,
                    { key: '', unit: '', format: '', keyValue: '', refId: '', manageValue: 'avg' },
                    [],
                    !1,
                    !1,
                    !1,
                    p,
                    'point' + o.toString(),
                    '',
                    { label: 'Yes', value: 'true' },
                    { label: 'Circle', value: 'circle' },
                    '12',
                    { label: 'Medium', value: 'medium' },
                    '0',
                    e.toString(),
                    t.toString(),
                    'black',
                    [],
                    [],
                    i.toString(),
                    a.toString(),
                    e.toString(),
                    t.toString()
                  ),
                  u = n.props.options.arrayPoints;
                u.push(c), n.props.onOptionsChange(r(r({}, n.props.options), { indexPoint: o, arrayPoints: u })), (n.props.options.newPoint = !0);
              }),
              (n.updatePositionOrientedLink = function (e) {
                var t,
                  i,
                  a,
                  o,
                  r,
                  l,
                  s = n.props.options.arrayOrientedLinks;
                try {
                  for (var c = p(s), u = c.next(); !u.done; u = c.next()) {
                    var d = u.value;
                    try {
                      for (var h = ((a = void 0), p(e.associateOrientedLinksIn)), f = h.next(); !f.done; f = h.next()) {
                        f.value.name === d.name && ((d.pointAPositionX = e.positionShapeX), (d.pointAPositionY = e.positionShapeY));
                      }
                    } catch (e) {
                      a = { error: e };
                    } finally {
                      try {
                        f && !f.done && (o = h.return) && o.call(h);
                      } finally {
                        if (a) throw a.error;
                      }
                    }
                    try {
                      for (var m = ((r = void 0), p(e.associateOrientedLinksOut)), g = m.next(); !g.done; g = m.next()) {
                        g.value.name === d.name && ((d.pointBPositionX = e.positionShapeX), (d.pointBPositionY = e.positionShapeY));
                      }
                    } catch (e) {
                      r = { error: e };
                    } finally {
                      try {
                        g && !g.done && (l = m.return) && l.call(m);
                      } finally {
                        if (r) throw r.error;
                      }
                    }
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    u && !u.done && (i = c.return) && i.call(c);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              }),
              (n.addAssociateOrientedLinkToPoint = function (e, t, i) {
                var a = 0;
                n.props.options.arrayPoints.forEach(function (o) {
                  var r = o.label || o.name;
                  e === r
                    ? n.props.options.arrayOrientedLinks.forEach(function (e) {
                        e.id === i && n.props.options.arrayPoints[a].associateOrientedLinksIn.push({ label: e.label, name: e.name });
                      })
                    : t === r &&
                      n.props.options.arrayOrientedLinks.forEach(function (e) {
                        e.id === i && n.props.options.arrayPoints[a].associateOrientedLinksOut.push({ label: e.label, name: e.name });
                      }),
                    a++;
                });
              }),
              (n.updateAssociateOrientedLinkInToPoint = function () {
                var e = 0;
                n.props.options.arrayPoints.forEach(function (t) {
                  var i = [],
                    a = t.label || t.name;
                  n.props.options.arrayOrientedLinks.forEach(function (e) {
                    e.pointIn === a && i.push({ label: e.label, name: e.name });
                  }),
                    (n.props.options.arrayPoints[e].associateOrientedLinksIn = i),
                    e++;
                });
              }),
              (n.updateAssociateOrientedLinkOutToPoint = function () {
                var e = 0;
                n.props.options.arrayPoints.forEach(function (t) {
                  var i = [],
                    a = t.label || t.name;
                  n.props.options.arrayOrientedLinks.forEach(function (e) {
                    e.pointOut === a && i.push({ label: e.label, name: e.name });
                  }),
                    (n.props.options.arrayPoints[e].associateOrientedLinksOut = i),
                    e++;
                });
              }),
              (n.resetCoordinatesToDrawLinkWithClick = function () {
                (n.props.options.coordinatesToDrawLinkWithClick[1].labelPoint = ''),
                  (n.props.options.coordinatesToDrawLinkWithClick[1].point = {}),
                  (n.props.options.coordinatesToDrawLinkWithClick[1].labelRegion = ''),
                  (n.props.options.coordinatesToDrawLinkWithClick[1].region = {}),
                  (n.props.options.coordinatesToDrawLinkWithClick[2].labelPoint = ''),
                  (n.props.options.coordinatesToDrawLinkWithClick[2].point = {}),
                  (n.props.options.coordinatesToDrawLinkWithClick[2].labelRegion = ''),
                  (n.props.options.coordinatesToDrawLinkWithClick[2].region = {});
              }),
              (n.getCoordinatesToDrawOrientedLinkWithClick = function (e) {
                var t = n.props.options.coordinatesToDrawLinkWithClick,
                  i = t[1],
                  a = t[2],
                  o = t[3],
                  r = parseInt(n.props.options.baseMap.height, 10),
                  l = n.props.options.coordinateSpaceInitial.coordinate,
                  s = parseInt(l.xMin, 10),
                  p = parseInt(l.xMax, 10),
                  c = parseInt(l.yMin, 10),
                  u = parseInt(l.yMax, 10),
                  d = p - s,
                  h = u - c,
                  f = e.nativeEvent.clientX - 24,
                  m = 0,
                  g = 0;
                if (
                  ((m = Math.round(f)),
                  (g = Math.round(r - e.nativeEvent.layerY)),
                  'initialSpace' === e.nativeEvent.target.id ||
                    'Intent' === e.nativeEvent.target.id ||
                    'mainPanel' === e.nativeEvent.target.id ||
                    e.nativeEvent.target.id === 'oct' + n.props.options.baseMap.idSVG ||
                    e.nativeEvent.target.id === n.props.options.baseMap.idSVG)
                )
                  0 === t[0].id
                    ? ((i.x = m), (i.xDefault = m), (i.y = g), (i.yDefault = g), t[0].id++)
                    : 1 === t[0].id &&
                      ((a.x = m),
                      (a.xDefault = m),
                      (a.y = g),
                      (a.yDefault = g),
                      (o.x = ((parseInt(i.x, 10) + parseInt(a.x, 10)) / 2).toString()),
                      (o.y = ((parseInt(i.y, 10) + parseInt(a.y, 10)) / 2).toString()),
                      (t[0].id = 0),
                      n.createOrientedLinkToClick({ label: 'No', value: !1 }, d.toString(), h.toString()),
                      n.resetCoordinatesToDrawLinkWithClick());
                else if (e.nativeEvent.target.id.startsWith('point')) {
                  var b = parseInt(e.nativeEvent.target.id.charAt(5) + e.nativeEvent.target.id.charAt(6), 10);
                  n.props.options.arrayPoints.forEach(function (e) {
                    if (e.id === b) {
                      var t = n.props.options.coordinatesToDrawLinkWithClick,
                        r = e.label || e.name;
                      0 === t[0].id
                        ? ((i.x = e.positionShapeX),
                          (i.xDefault = e.positionXDefault),
                          (i.y = e.positionShapeY),
                          (i.yDefault = e.positionYDefault),
                          (i.labelPoint = r),
                          (i.point = e),
                          t[0].id++)
                        : 1 === t[0].id &&
                          ((a.x = e.positionShapeX),
                          (a.xDefault = e.positionXDefault),
                          (a.y = e.positionShapeY),
                          (a.yDefault = e.positionYDefault),
                          (a.labelPoint = r),
                          (a.point = e),
                          (o.x = ((parseInt(i.x, 10) + parseInt(a.x, 10)) / 2).toString()),
                          (o.y = ((parseInt(i.y, 10) + parseInt(a.y, 10)) / 2).toString()),
                          (t[0].id = 0),
                          n.createOrientedLinkToClick({ label: 'No', value: !1 }, d.toString(), h.toString()),
                          n.resetCoordinatesToDrawLinkWithClick());
                    }
                  });
                } else {
                  n.props.options.regionCoordinateSpace.forEach(function (t) {
                    var r = parseInt(t.coords.xMin, 10),
                      l = parseInt(t.coords.xMax, 10),
                      s = parseInt(t.coords.yMin, 10),
                      p = parseInt(t.coords.yMax, 10),
                      c = parseInt(t.coordsDefault.xMin, 10),
                      u = parseInt(t.coordsDefault.xMax, 10),
                      f = parseInt(t.coordsDefault.yMin, 10),
                      b = parseInt(t.coordsDefault.yMax, 10);
                    if (e.nativeEvent.target.id.startsWith('region')) {
                      if (parseInt(e.nativeEvent.target.id.charAt(6) + e.nativeEvent.target.id.charAt(7), 10) === t.id) {
                        var y = n.props.options.coordinatesToDrawLinkWithClick;
                        (m = (r + l) / 2), (g = (p + s) / 2);
                        var v = (c + u) / 2,
                          x = (b + f) / 2;
                        0 === y[0].id
                          ? ((i.x = m), (i.xDefault = v), (i.y = g), (i.yDefault = x), (i.labelRegion = t.label), (i.region = t), y[0].id++)
                          : 1 === y[0].id &&
                            ((a.x = m),
                            (a.xDefault = v),
                            (a.y = g),
                            (a.yDefault = x),
                            (a.labelRegion = t.label),
                            (a.region = t),
                            (o.x = ((parseInt(i.x, 10) + parseInt(a.x, 10)) / 2).toString()),
                            (o.y = ((parseInt(i.y, 10) + parseInt(a.y, 10)) / 2).toString()),
                            (y[0].id = 0),
                            n.createOrientedLinkToClick({ label: 'No', value: !1 }, d.toString(), h.toString()),
                            n.resetCoordinatesToDrawLinkWithClick());
                      }
                    } else if (
                      (e.nativeEvent.target.id !== 'oct' + n.props.options.baseMap.idSVG && e.nativeEvent.target.id.startsWith('oct')) ||
                      (e.nativeEvent.target.id !== n.props.options.baseMap.idSVG &&
                        (e.nativeEvent.target.id.startsWith('path') ||
                          e.nativeEvent.target.id.startsWith('rect') ||
                          e.nativeEvent.target.id.startsWith('ellipse')))
                    ) {
                      if ((n.props.options.baseMap.isUploaded ? e.nativeEvent.target.id : e.nativeEvent.target.id.substr(3)) === t.idSVG) {
                        var k = n.props.options.coordinatesToDrawLinkWithClick;
                        (m = 0),
                          (g = 0),
                          0 === k[0].id
                            ? ((i.x = m), (i.xDefault = m), (i.y = g), (i.yDefault = g), (i.labelRegion = t.label), (i.region = t), k[0].id++)
                            : 1 === k[0].id &&
                              ((a.x = m),
                              (a.xDefault = m),
                              (a.y = g),
                              (a.yDefault = g),
                              (a.labelRegion = t.label),
                              (a.region = t),
                              (o.x = ((parseInt(i.x, 10) + parseInt(a.x, 10)) / 2).toString()),
                              (o.y = ((parseInt(i.y, 10) + parseInt(a.y, 10)) / 2).toString()),
                              (k[0].id = 0),
                              n.createOrientedLinkToClick({ label: 'No', value: !1 }, d.toString(), h.toString()),
                              n.resetCoordinatesToDrawLinkWithClick());
                      }
                    } else {
                      if (parseInt(e.nativeEvent.target.offsetParent.id.charAt(6) + e.nativeEvent.target.offsetParent.id.charAt(7), 10) === t.id) {
                        var C = n.props.options.coordinatesToDrawLinkWithClick;
                        (m = (r + l) / 2),
                          (g = (p + s) / 2),
                          0 === C[0].id
                            ? ((i.x = m), (i.y = g), (i.labelRegion = t.label), (i.region = t), C[0].id++)
                            : 1 === C[0].id &&
                              ((a.x = m),
                              (a.y = g),
                              (a.labelRegion = t.label),
                              (a.region = t),
                              (o.x = ((parseInt(i.x, 10) + parseInt(a.x, 10)) / 2).toString()),
                              (o.y = ((parseInt(i.y, 10) + parseInt(a.y, 10)) / 2).toString()),
                              (C[0].id = 0),
                              n.createOrientedLinkToClick({ label: 'No', value: !1 }, d.toString(), h.toString()),
                              n.resetCoordinatesToDrawLinkWithClick());
                      }
                    }
                  });
                }
              }),
              (n.getCoordinatesToDrawIncurvedOrientedLinkWithClick = function (e) {
                var t = n.props.options.coordinatesToDrawLinkWithClick,
                  i = t[1],
                  a = t[2],
                  o = t[3],
                  r = parseInt(n.props.options.baseMap.height, 10),
                  l = n.props.options.coordinateSpaceInitial.coordinate,
                  s = parseInt(l.xMin, 10),
                  p = parseInt(l.xMax, 10),
                  c = parseInt(l.yMin, 10),
                  u = parseInt(l.yMax, 10),
                  d = p - s,
                  h = u - c,
                  f = e.nativeEvent.clientX - 24,
                  m = 0,
                  g = 0;
                if (
                  ((m = Math.round(f)),
                  (g = Math.round(r - e.nativeEvent.layerY)),
                  'mainPanel' === e.nativeEvent.target.id ||
                    'initialSpace' === e.nativeEvent.target.id ||
                    'Intent' === e.nativeEvent.target.id ||
                    e.nativeEvent.target.id === 'oct' + n.props.options.baseMap.idSVG ||
                    e.nativeEvent.target.id === n.props.options.baseMap.idSVG)
                )
                  0 === t[0].id
                    ? ((i.x = m), (i.y = g), t[0].id++)
                    : 1 === t[0].id
                    ? ((a.x = m), (a.y = g), t[0].id++)
                    : 2 === t[0].id &&
                      ((o.x = m),
                      (o.y = g),
                      (t[0].id = 0),
                      n.createOrientedLinkToClick({ label: 'Yes', value: !0 }, d.toString(), h.toString()),
                      n.resetCoordinatesToDrawLinkWithClick());
                else if (e.nativeEvent.target.id.startsWith('point')) {
                  var b = parseInt(e.nativeEvent.target.id.charAt(5) + e.nativeEvent.target.id.charAt(6), 10);
                  n.props.options.arrayPoints.forEach(function (e) {
                    if (e.id === b) {
                      var t = n.props.options.coordinatesToDrawLinkWithClick,
                        r = e.label || e.name;
                      0 === t[0].id
                        ? ((i.x = e.positionShapeX), (i.y = e.positionShapeY), (i.labelPoint = r), (i.point = e), t[0].id++)
                        : 1 === t[0].id
                        ? ((a.x = e.positionShapeX), (a.y = e.positionShapeY), (a.labelPoint = r), (a.point = e), t[0].id++)
                        : 2 === t[0].id &&
                          ((o.x = e.positionShapeX),
                          (o.y = e.positionShapeY),
                          (t[0].id = 0),
                          n.createOrientedLinkToClick({ label: 'Yes', value: !0 }, d.toString(), h.toString()),
                          n.resetCoordinatesToDrawLinkWithClick());
                    }
                  });
                } else {
                  n.props.options.regionCoordinateSpace.forEach(function (t) {
                    var r = parseInt(t.coords.xMin, 10),
                      l = parseInt(t.coords.xMax, 10),
                      s = parseInt(t.coords.yMin, 10),
                      p = parseInt(t.coords.yMax, 10);
                    if (e.nativeEvent.target.id.startsWith('region')) {
                      if (parseInt(e.nativeEvent.target.id.charAt(6) + e.nativeEvent.target.id.charAt(7), 10) === t.id) {
                        var c = n.props.options.coordinatesToDrawLinkWithClick;
                        (m = (r + l) / 2),
                          (g = (p + s) / 2),
                          0 === c[0].id
                            ? ((i.x = m), (i.y = g), (i.labelRegion = t.label), (i.region = t), c[0].id++)
                            : 1 === c[0].id
                            ? ((a.x = m), (a.y = g), (a.labelRegion = t.label), (a.region = t), c[0].id++)
                            : 2 === c[0].id &&
                              ((o.x = m),
                              (o.y = g),
                              (c[0].id = 0),
                              n.createOrientedLinkToClick({ label: 'Yes', value: !0 }, d.toString(), h.toString()),
                              n.resetCoordinatesToDrawLinkWithClick());
                      }
                    } else if (
                      (e.nativeEvent.target.id !== 'oct' + n.props.options.baseMap.idSVG && e.nativeEvent.target.id.startsWith('oct')) ||
                      (e.nativeEvent.target.id !== n.props.options.baseMap.idSVG &&
                        (e.nativeEvent.target.id.startsWith('path') ||
                          e.nativeEvent.target.id.startsWith('rect') ||
                          e.nativeEvent.target.id.startsWith('ellipse')))
                    ) {
                      if ((n.props.options.baseMap.isUploaded ? e.nativeEvent.target.id : e.nativeEvent.target.id.substr(3)) === t.idSVG) {
                        var u = n.props.options.coordinatesToDrawLinkWithClick;
                        (m = 0),
                          (g = 0),
                          0 === u[0].id
                            ? ((i.x = m), (i.y = g), (i.labelRegion = t.label), (i.region = t), u[0].id++)
                            : 1 === u[0].id
                            ? ((a.x = m), (a.y = g), (a.labelRegion = t.label), (a.region = t), u[0].id++)
                            : 2 === u[0].id &&
                              ((o.x = m),
                              (o.y = g),
                              (u[0].id = 0),
                              n.createOrientedLinkToClick({ label: 'Yes', value: !0 }, d.toString(), h.toString()),
                              n.resetCoordinatesToDrawLinkWithClick());
                      }
                    } else {
                      if (parseInt(e.nativeEvent.target.offsetParent.id.charAt(6) + e.nativeEvent.target.offsetParent.id.charAt(7), 10) === t.id) {
                        var f = n.props.options.coordinatesToDrawLinkWithClick;
                        (m = (r + l) / 2),
                          (g = (p + s) / 2),
                          0 === f[0].id
                            ? ((i.x = m), (i.y = g), (i.labelRegion = t.label), (i.region = t), f[0].id++)
                            : 1 === f[0].id
                            ? ((a.x = m), (a.y = g), (a.labelRegion = t.label), (a.region = t), f[0].id++)
                            : 2 === f[0].id &&
                              ((o.x = m),
                              (o.y = g),
                              (f[0].id = 0),
                              n.createOrientedLinkToClick({ label: 'Yes', value: !0 }, d.toString(), h.toString()),
                              n.resetCoordinatesToDrawLinkWithClick());
                      }
                    }
                  });
                }
              }),
              (n.defineIdOrientedLink = function () {
                var e = 1;
                return 0 === n.props.options.arrayOrientedLinks.length
                  ? e
                  : (e = n.props.options.arrayOrientedLinks[n.props.options.arrayOrientedLinks.length - 1].id + 1);
              }),
              (n.createOrientedLinkToClick = function (e, t, i) {
                var a = n.props.options.coordinatesToDrawLinkWithClick,
                  o = n.defineIdOrientedLink(),
                  l = 'orientedLink' + o.toString(),
                  s = n.props.options.zIndexOrientedLink + 1,
                  p = a[1],
                  c = a[2],
                  u = a[3],
                  d = new b(
                    '',
                    !1,
                    'white',
                    'black',
                    { bold: !1, italic: !1, underline: !1 },
                    !0,
                    {
                      legendElement: '',
                      numericFormatElement: '5',
                      unit: '',
                      displayObjectInTooltip: !1,
                      addColorTextElement: !1,
                      colorTextElement: 'white',
                      addColorBackElement: !1,
                      colorBackElement: 'black',
                    },
                    {
                      legendElement: '',
                      numericFormatElement: '5',
                      unit: '',
                      displayObjectInTooltip: !0,
                      addColorTextElement: !0,
                      colorTextElement: 'white',
                      addColorBackElement: !0,
                      colorBackElement: 'black',
                    }
                  ),
                  h = new y('', '', ''),
                  f = new m('0', '0', '0', '0', {}, {}),
                  v = new g(
                    o,
                    h,
                    [],
                    [],
                    '',
                    d,
                    { key: '', unit: '', format: '', keyValue: '', refId: '', manageValue: 'avg' },
                    [],
                    !1,
                    !1,
                    !1,
                    f,
                    l,
                    { label: 'Monodirectional', value: 'AB' },
                    '9',
                    p.x.toString(),
                    p.y.toString(),
                    '#5794F2',
                    c.x.toString(),
                    c.y.toString(),
                    '#E54658',
                    '',
                    '',
                    p.labelPoint,
                    c.labelPoint,
                    p.labelRegion,
                    c.labelRegion,
                    s,
                    u.x,
                    u.y,
                    e,
                    { key: '', unit: '', format: '', keyValue: '', refId: '', manageValue: 'avg' },
                    [],
                    t,
                    i,
                    p.xDefault.toString(),
                    p.yDefault.toString(),
                    c.xDefault.toString(),
                    c.yDefault.toString(),
                    u.x,
                    u.y
                  ),
                  x = n.props.options.arrayOrientedLinks;
                x.push(v),
                  n.props.onOptionsChange(
                    r(r({}, n.props.options), { arrayOrientedLinks: x, indexOrientedLink: o, zIndexOrientedLink: s, newOrientedLink: !0 })
                  ),
                  (n.props.options.arrayOrientedLinks = x),
                  (n.props.options.indexOrientedLink = o),
                  (n.props.options.zIndexOrientedLink = s),
                  (n.props.options.newOrientedLink = !0),
                  n.addAssociateOrientedLinkToPoint(p.labelPoint || '', c.labelPoint || '', v.id);
              }),
              (n.defineValueX = function (e, t, i) {
                var a = '';
                if (i)
                  if ('' !== e.pointIn)
                    n.props.options.arrayPoints.forEach(function (n) {
                      (n.name !== e.pointIn && n.label !== e.pointIn) || (a = t ? n.positionXDefault : n.positionShapeX);
                    });
                  else if ('' !== e.regionIn) {
                    n.props.options.regionCoordinateSpace.forEach(function (n) {
                      n.label === e.regionIn &&
                        (a = t
                          ? (parseInt(n.coords.xMax, 10) - parseInt(n.coords.xMin, 10)).toString()
                          : (parseInt(n.coordsDefault.xMax, 10) - parseInt(n.coordsDefault.xMin, 10)).toString());
                    });
                  } else a = t ? e.pointAPositionXDefault : e.pointAPositionX;
                else if ('' !== e.pointOut)
                  n.props.options.arrayPoints.forEach(function (n) {
                    (n.name !== e.pointOut && n.label !== e.pointOut) || (a = t ? n.positionXDefault : n.positionShapeX);
                  });
                else if ('' !== e.regionOut) {
                  n.props.options.regionCoordinateSpace.forEach(function (n) {
                    n.label === e.regionOut &&
                      (a = t
                        ? (parseInt(n.coords.xMax, 10) - parseInt(n.coords.xMin, 10)).toString()
                        : (parseInt(n.coordsDefault.xMax, 10) - parseInt(n.coordsDefault.xMin, 10)).toString());
                  });
                } else a = t ? e.pointBPositionXDefault : e.pointBPositionX;
                return a;
              }),
              (n.defineValueY = function (e, t, i) {
                var a = '';
                if (i)
                  if ('' !== e.pointIn)
                    n.props.options.arrayPoints.forEach(function (n) {
                      n.name === e.pointIn && (a = t ? n.positionYDefault : n.positionShapeY);
                    });
                  else if ('' !== e.regionIn) {
                    n.props.options.regionCoordinateSpace.forEach(function (n) {
                      n.label === e.regionIn &&
                        (a = t
                          ? (parseInt(n.coords.yMax, 10) - parseInt(n.coords.yMin, 10)).toString()
                          : (parseInt(n.coordsDefault.yMax, 10) - parseInt(n.coordsDefault.yMin, 10)).toString());
                    });
                  } else a = t ? e.pointAPositionYDefault : e.pointAPositionY;
                else if ('' !== e.pointOut)
                  n.props.options.arrayPoints.forEach(function (n) {
                    n.name === e.pointIn && (a = t ? n.positionYDefault : n.positionShapeY);
                  });
                else if ('' !== e.regionOut) {
                  n.props.options.regionCoordinateSpace.forEach(function (n) {
                    n.label === e.regionIn &&
                      (a = t
                        ? (parseInt(n.coords.yMax, 10) - parseInt(n.coords.yMin, 10)).toString()
                        : (parseInt(n.coordsDefault.yMax, 10) - parseInt(n.coordsDefault.yMin, 10)).toString());
                  });
                } else a = t ? e.pointBPositionYDefault : e.pointBPositionY;
                return a;
              }),
              (n.getValuesAuxiliaryMetricsPoint = function (e) {
                return C(e, n.props), n.getValuesAuxiliaryMetrics(e.metrics, e.mainMetric);
              }),
              (n.getValuesAuxiliaryMetricsOrientedLink = function (e) {
                return S(e, n.props), n.getValuesAuxiliaryMetrics(e.metrics, e.mainMetric);
              }),
              (n.getValuesAuxiliaryMetricsOrientedLinkB = function (e) {
                return S(e, n.props), n.getValuesAuxiliaryMetrics(e.metricsB, e.mainMetricB);
              }),
              (n.getValuesAuxiliaryMetrics = function (e, t) {
                var n = [];
                return (
                  e.length < 1 &&
                    e.forEach(function (e) {
                      var i,
                        a = 0,
                        o = 0,
                        r = '';
                      if (e.returnQuery && e.returnQuery.length > 0) {
                        var l = (null === (i = e.returnQuery) || void 0 === i ? void 0 : i.length) || 0;
                        if ('' !== e.key && '' !== e.keyValue)
                          for (var s = 0; s < l; s++) {
                            if (
                              (u = e.returnQuery[s]).fields[0].labels &&
                              '' !== t.refId &&
                              (u.fields[0].labels[t.key] === t.keyValue || ('' === t.key && '' === t.keyValue)) &&
                              u.fields[0].labels[e.key] === e.keyValue
                            )
                              for (var p = u.fields[0].values.length, c = 0; c < p; c++)
                                u.fields[0].values.get(c) && ((o += u.fields[0].values.get(c)), a++);
                          }
                        else if ('' !== t.refId)
                          for (s = 0; s < l; s++) {
                            var u;
                            if (
                              (u = e.returnQuery[s]).fields[0].labels &&
                              (u.fields[0].labels[t.key] === t.keyValue || ('' === t.key && '' === t.keyValue))
                            ) {
                              p = u.fields[0].values.length;
                              for (var d = 0; d < p; d++) u.fields[0].values.get(d) && ((o += u.fields[0].values.get(d)), a++);
                            }
                          }
                        'avg' === e.manageValue
                          ? (r = (o / a).toString())
                          : 'sum' === e.manageValue
                          ? (r = o.toString())
                          : 'err' === e.manageValue && (r = a > 1 ? 'error' : o.toString());
                      }
                      '' !== r && n.push(r);
                    }),
                  n
                );
              }),
              (n.changeValueButtonToLink = function () {
                n.setState({ valueButton: 'link' });
              }),
              (n.changeValueButtonToIncurvedLink = function () {
                n.setState({ valueButton: 'incurvedLink' });
              }),
              (n.changeValueButtonToPoint = function () {
                n.setState({ valueButton: 'point' });
              }),
              (n.getCoordinates = function (e) {
                var t = n.state.valueButton;
                0 !== n.state.numberClickDiv &&
                  ('link' === t
                    ? n.getCoordinatesToDrawOrientedLinkWithClick(e)
                    : 'incurvedLink' === t
                    ? n.getCoordinatesToDrawIncurvedOrientedLinkWithClick(e)
                    : 'point' === t && n.getCoordinatesToDrawPointWithClick(e));
              }),
              (n.callInFunc = function () {
                n.state.buttonAddIncurvedLinkIsActive &&
                  n.setState(function (e) {
                    return { buttonAddIncurvedLinkIsActive: !e.buttonAddIncurvedLinkIsActive };
                  }),
                  n.state.buttonAddLinkIsActive &&
                    n.setState(function (e) {
                      return { buttonAddLinkIsActive: !e.buttonAddLinkIsActive };
                    }),
                  n.resetButtonManage(2);
              }),
              (n.updateButtonCss = function () {
                var e = u.a.createElement(
                  'div',
                  { id: 'allButton', style: { marginTop: '1%', marginBottom: '50px' } },
                  u.a.createElement(
                    d.Button,
                    {
                      style: { marginLeft: '1%', zIndex: 18, position: 'absolute' },
                      variant: n.state.buttonManage[0] ? 'danger' : 'primary',
                      className: 'button',
                      onClick: n.addNode,
                    },
                    'Add Region'
                  ),
                  u.a.createElement(
                    d.Button,
                    {
                      style: { marginLeft: '15%', zIndex: 18, position: 'absolute' },
                      variant: n.state.buttonManage[3] ? 'danger' : 'primary',
                      className: 'button',
                      onClick: n.addPoint,
                    },
                    'Add Point'
                  ),
                  u.a.createElement(
                    d.Button,
                    {
                      style: { marginLeft: '27%', zIndex: 18, position: 'absolute' },
                      variant: n.state.buttonManage[1] ? 'danger' : 'primary',
                      className: 'button',
                      onClick: n.addLink,
                    },
                    'Add Oriented Link'
                  ),
                  u.a.createElement(
                    d.Button,
                    {
                      style: { marginLeft: '46%', zIndex: 18, position: 'absolute' },
                      variant: n.state.buttonManage[4] ? 'danger' : 'primary',
                      className: 'button',
                      onClick: n.addIncurvedLink,
                    },
                    'Add Incurved Oriented Link'
                  ),
                  u.a.createElement(
                    d.Button,
                    {
                      id: 'legnd',
                      style: { marginLeft: '67%', zIndex: 18, position: 'absolute' },
                      variant: n.state.buttonManage[2] ? 'danger' : 'primary',
                      className: 'button',
                      onClick: n.callInFunc,
                    },
                    'Position Legend'
                  ),
                  u.a.createElement(
                    d.Button,
                    { id: 'zoompan', style: { marginLeft: '80%', zIndex: 18, position: 'absolute' }, variant: 'primary', onClick: n.ZoomSVG },
                    'Zoom [P/M]'
                  )
                );
                n.setState({ allActionButton: e });
              }),
              (n.callMethod = function () {
                return l(n, void 0, void 0, function () {
                  return s(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return 0 !== this.state.numberClickDiv ? [3, 1] : (this.setState({ numberClickDiv: 1 }), [3, 3]);
                      case 1:
                        return [4, this.setAsyncButtonManage({ buttonManage: [!1, !1, !1, !1, !1] })];
                      case 2:
                        e.sent(), this.setState({ numberClickDiv: 0 }), this.updateButtonCss(), (e.label = 3);
                      case 3:
                        return [2];
                    }
                  });
                });
              }),
              (n.setAsyncButtonManage = function (e) {
                return new Promise(function (t) {
                  n.setState(e, t);
                });
              }),
              (n.resetButtonManage = function (e) {
                return l(n, void 0, void 0, function () {
                  var t, n;
                  return s(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return (
                          (t = this.state.buttonManage),
                          (n = t[e]),
                          (t = [!1, !1, !1, !1, !1]),
                          n
                            ? ((t[e] = !1), this.setState({ numberClickDiv: 0 }))
                            : (2 === e && this.setState({ hiddenLegend: !1, valueButton: '' }), (t[e] = !0), this.setState({ numberClickDiv: 1 })),
                          [4, this.setAsyncButtonManage({ buttonManage: t })]
                        );
                      case 1:
                        return i.sent(), this.updateButtonCss(), [2];
                    }
                  });
                });
              }),
              (n.addNode = function () {
                n.state.buttonAddIncurvedLinkIsActive &&
                  n.setState(function (e) {
                    return { buttonAddIncurvedLinkIsActive: !e.buttonAddIncurvedLinkIsActive };
                  }),
                  n.state.buttonAddLinkIsActive &&
                    n.setState(function (e) {
                      return { buttonAddLinkIsActive: !e.buttonAddLinkIsActive };
                    }),
                  n.setState(function (e) {
                    return { nbClickButton: !e.buttonManage[0] };
                  }),
                  n.resetButtonManage(0),
                  n.changeValueButtonToPoint();
              }),
              (n.addPoint = function () {
                n.state.buttonAddIncurvedLinkIsActive &&
                  n.setState(function (e) {
                    return { buttonAddIncurvedLinkIsActive: !e.buttonAddIncurvedLinkIsActive };
                  }),
                  n.state.buttonAddLinkIsActive &&
                    n.setState(function (e) {
                      return { buttonAddLinkIsActive: !e.buttonAddLinkIsActive };
                    }),
                  n.setState(function (e) {
                    return { nbClickButton: !e.buttonManage[3], valueButton: 'point' };
                  }),
                  n.resetButtonManage(3),
                  n.changeValueButtonToPoint();
              }),
              (n.addLink = function () {
                n.state.buttonAddIncurvedLinkIsActive &&
                  n.setState(function (e) {
                    return { buttonAddIncurvedLinkIsActive: !e.buttonAddIncurvedLinkIsActive };
                  }),
                  n.setState(function (e) {
                    return { nbClickButton: !e.buttonManage[1], buttonAddLinkIsActive: !e.buttonAddLinkIsActive };
                  }),
                  n.resetButtonManage(1),
                  n.changeValueButtonToLink();
              }),
              (n.addIncurvedLink = function () {
                n.state.buttonAddLinkIsActive &&
                  n.setState(function (e) {
                    return { buttonAddLinkIsActive: !e.buttonAddLinkIsActive };
                  }),
                  n.setState(function (e) {
                    return { nbClickButton: !e.buttonManage[4], buttonAddIncurvedLinkIsActive: !e.buttonAddIncurvedLinkIsActive };
                  }),
                  n.resetButtonManage(4),
                  n.changeValueButtonToIncurvedLink();
              }),
              (n.positionLegend = function (e) {
                if (n.state.buttonManage[2]) {
                  var t = n.state.legend;
                  (t.x = e.nativeEvent.offsetX),
                    (t.y =
                      n.props.options.baseMap.height > e.nativeEvent.offsetY
                        ? parseInt(e.nativeEvent.offsetY, 10)
                        : parseInt(e.nativeEvent.offsetY, 10) - 28),
                    (t.hiddenLegend = !1),
                    n.setState({ legend: t }),
                    n.props.onOptionsChange(r(r({}, n.props.options), { legend: t }));
                }
              }),
              (n.handleClick = function (e) {
                var t = n.state.legend;
                (t.hiddenLegend = !n.state.legend.hiddenLegend),
                  n.setState(function (e) {
                    return { legend: t };
                  });
              }),
              (n.tt = function () {
                var e = document.getElementById('path836');
                e && (e.style.fill = 'red');
              }),
              (n.chargeRegion = function () {
                n.setState({
                  displayRegion: u.a.createElement(be, {
                    key: 'limitCoor',
                    color: 'orange',
                    coordinateInitial: n.props.options.coordinateSpaceInitial,
                    id: 'initialSpace',
                    onOptionsChange: n.props.onOptionsChange,
                    options: n.props.options,
                    data: n.props.data,
                    buttonAddLinkIsActive: n.state.buttonAddLinkIsActive,
                    buttonAddIncurvedLinkIsActive: n.state.buttonAddIncurvedLinkIsActive,
                  }),
                });
              }),
              (n.editIdString = function (e) {
                for (var t = e.slice().split('id="'), n = '', i = 0; t.length > i; i++)
                  if (t[i]) {
                    if (i > 0) {
                      var a = t[i];
                      t[i] = 'id="oct' + a;
                    }
                    n += t[i];
                  }
                return n;
              }),
              (n.checkIfDisplayButton = function () {
                var e,
                  t,
                  i = window.location.href.split('&'),
                  a = !1;
                try {
                  for (var o = p(i), l = o.next(); !l.done; l = o.next()) {
                    'edit' === l.value && (a = !0);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    l && !l.done && (t = o.return) && t.call(o);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                a || n.props.onOptionsChange(r(r({}, n.props.options), { displayButton: !1 }));
              }),
              (n.componentDidMount = function () {
                return l(n, void 0, void 0, function () {
                  var e,
                    t,
                    n,
                    i,
                    a,
                    o,
                    l,
                    p,
                    c = this;
                  return s(this, function (s) {
                    return (
                      this.checkIfDisplayButton(),
                      this.setState({ currentImage: this.props.options.baseMap.image }),
                      this.props.options.baseMap.modeSVG && '' !== this.props.options.baseMap.image
                        ? this.props.options.baseMap.isUploaded
                          ? ((e = ''),
                            (t = ''),
                            (n = this.props.options.baseMap.image),
                            this.setState({ svg: n }),
                            (i = /id=["']\w*["']/i.exec(n)),
                            (a = /width=["']\w*["']/i.exec(n)) && a.length > 0 && (e = a[0].split('"')[1]),
                            (o = /height=["']\w*["']/i.exec(n)) && o.length > 0 && (t = o[0].split('"')[1]),
                            i &&
                              i.length > 0 &&
                              (l = i[0].split('"')).length > 1 &&
                              (((p = this.props.options.baseMap).idSVG = l[1]),
                              (p.layerImage = this.props.options.baseMap.image),
                              (p.width = parseInt(e || '0', 10).toString() || ''),
                              (p.height = parseInt(t || '0', 10).toString() || ''),
                              this.props.onOptionsChange(r(r({}, this.props.options), { baseMap: p }))),
                            this.chargeRegion())
                          : fetch(this.props.options.baseMap.image)
                              .then(function (e) {
                                return e.text();
                              })
                              .then(function (e) {
                                var t;
                                (t =
                                  'base64' === c.props.options.baseMap.image.split(',')[0] ? atob(c.props.options.baseMap.image.split(',')[1]) : e),
                                  c.setState({ svg: t });
                                var n = /id=["']\w*["']/i.exec(t);
                                if (n && n.length > 0) {
                                  var i = n[0].split('"');
                                  if (i.length > 1) {
                                    var a = document.getElementById(i[1]);
                                    if (a) {
                                      var o = c.props.options.baseMap;
                                      (o.idSVG = i[1]),
                                        (o.width = parseInt(a.getAttribute('width') || '0', 10).toString() || ''),
                                        (o.height = parseInt(a.getAttribute('height') || '0', 10).toString() || ''),
                                        c.props.onOptionsChange(r(r({}, c.props.options), { baseMap: o }));
                                    }
                                  }
                                }
                              })
                              .then(function () {
                                return c.chargeRegion();
                              })
                              .then(function () {
                                var e = c.editIdString(c.state.svg),
                                  t = c.props.options.baseMap;
                                (t.layerImage = e), c.props.onOptionsChange(r(r({}, c.props.options), { baseMap: t }));
                              })
                        : this.chargeRegion(),
                      (this.props.options.coordinateSpaceInitial.coordinate.xMax = this.props.options.baseMap.width),
                      (this.props.options.coordinateSpaceInitial.coordinate.yMax = this.props.options.baseMap.height),
                      this.updateButtonCss(),
                      [2]
                    );
                  });
                });
              }),
              (n.ZoomSVG = function (e) {
                var t = document.getElementById('coordinateSpaces');
                t &&
                  document.body.addEventListener('keyup', function (e) {
                    80 === e.keyCode
                      ? ((t.style.cursor = 'zoom-in'), (t.style.transform += 'scale(1.01,1.01)translate(0.5%)translateY(0.5%)'))
                      : 77 === e.keyCode && ((t.style.cursor = 'zoom-out'), (t.style.transform += 'scale(0.98,0.98)translate(-1%)translateY(-1%)'));
                  });
              }),
              (n.displayTooltipSVG = function (e) {
                var t,
                  i,
                  a = '';
                a = n.props.options.baseMap.isUploaded ? e.target.id : e.target.id.substring(3);
                var o = n.props.options.regionCoordinateSpace,
                  r = { idSVG: a, x: '', y: '' };
                try {
                  for (var l = p(o), s = l.next(); !s.done; s = l.next()) {
                    if (s.value.idSVG === a) {
                      var c = 0,
                        u = 0,
                        d = 0,
                        h = 0,
                        f = '',
                        m = '';
                      if ('rect' === e.target.localName)
                        (c = parseInt(e.target.attributes.x.nodeValue, 10)),
                          (u = parseInt(e.target.attributes.y.nodeValue, 10)),
                          (d = parseInt(e.target.attributes.width.nodeValue, 10)),
                          (h = parseInt(e.target.attributes.height.nodeValue, 10)),
                          (f = (c + d).toString()),
                          (m = (u - h / 2).toString());
                      else if ('ellipse' === e.target.localName)
                        (c = parseInt(e.target.attributes.cx.nodeValue, 10)),
                          (u = parseInt(e.target.attributes.cy.nodeValue, 10)),
                          (d = 2 * parseInt(e.target.attributes.rx.nodeValue, 10)),
                          (h = 2 * parseInt(e.target.attributes.ry.nodeValue, 10)),
                          (f = c.toString()),
                          (m = u.toString());
                      else if ('path' === e.target.localName) {
                        for (
                          var g = e.target.attributes.d.nodeValue.split(' '), b = -2, y = 1e6, v = 0, x = -1, k = 1e6, C = 0, I = 0;
                          I < g.length;
                          I++
                        ) {
                          var S = parseInt(g[I], 10);
                          I === b + 3 && (S < y && (y = S), S > v && (v = S), (b = I)), I === x + 3 && (S < k && (k = S), S > C && (C = S), (x = I));
                        }
                        (u = k), (f = ((c = y) + (d = v - y)).toString()), (m = u.toString());
                      }
                      (r.x = f), (r.y = m), n.setState({ dataTooltipSVG: r });
                      var E = document.getElementById('tooltipSVG');
                      E && (E.style.display = 'initial');
                    }
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    s && !s.done && (i = l.return) && i.call(l);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              }),
              (n.hideTooltipSVG = function (e) {
                var t,
                  i,
                  a = '';
                a = n.props.options.baseMap.isUploaded ? e.target.id : e.target.id.substring(3);
                var o = n.props.options.regionCoordinateSpace;
                try {
                  for (var r = p(o), l = r.next(); !l.done; l = r.next()) {
                    if (l.value.idSVG === a) document.getElementById('tooltipSVG').style.display = 'none';
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    l && !l.done && (i = r.return) && i.call(r);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              }),
              (n.SVG_PathImage = function (e) {
                var t, i;
                n.displayTooltipSVG(e);
                var a = e.target,
                  o = a.parentNode,
                  r = '';
                r = n.props.options.baseMap.isUploaded ? e.target.id : e.target.id.substring(3);
                var l = n.props.options.regionCoordinateSpace;
                try {
                  for (var s = p(l), c = s.next(); !c.done; c = s.next()) {
                    var u = c.value;
                    if (u.idSVG === r) {
                      var d = u.linkURL.followLink;
                      if (d && !document.getElementById('a' + r) && !n.state.buttonAddIncurvedLinkIsActive && !n.state.buttonAddLinkIsActive) {
                        var h = document.createElementNS('http://www.w3.org/2000/svg', 'a');
                        h.setAttribute('id', 'a' + r), h.setAttribute('href', d), h.appendChild(a), o.appendChild(h);
                      }
                    }
                  }
                } catch (e) {
                  t = { error: e };
                } finally {
                  try {
                    c && !c.done && (i = s.return) && i.call(s);
                  } finally {
                    if (t) throw t.error;
                  }
                }
              }),
              (n.fillCoordinate = function () {
                var e,
                  t = n.props.options,
                  i = { position: 'absolute', width: t.baseMap.width + 'px', height: t.baseMap.height + 'px', top: '15%', left: 0 };
                return (
                  (e = t.regionCoordinateSpace.map(function (e, i) {
                    return u.a.createElement(ge, {
                      key: 'drawRectangleExtend' + i.toString(),
                      uneCoor: e,
                      useLimit: !1,
                      limit: t.coordinateSpaceInitial.coordinate,
                      onOptionsChange: n.props.onOptionsChange,
                      options: n.props.options,
                      data: n.props.data,
                      id: 'region' + e.id.toString(),
                      buttonAddLinkIsActive: n.state.buttonAddLinkIsActive,
                      buttonAddIncurvedLinkIsActive: n.state.buttonAddIncurvedLinkIsActive,
                      widthInitialSpaceDefault: e.widthInitialSpaceDefault,
                      heightInitialSpaceDefault: e.heightInitialSpaceDefault,
                    });
                  })),
                  u.a.createElement('ul', { style: i }, e)
                );
              }),
              (n.getValuesAuxiliaryMetricsRegionSVG = function (e) {
                return x(e, n.props), n.getValuesAuxiliaryMetrics(e.metrics, e.mainMetric);
              }),
              (n.getConvertValueAuxMetrics = function (e, t) {
                var n = t.textObj.generateAuxiliaryElement.numericFormatElement,
                  i = parseInt(n, 10) || 1,
                  a = t.textObj.generateAuxiliaryElement.unit;
                return ('' !== n ? parseFloat(e).toPrecision(i) : e) + ' ' + a;
              }),
              (n.displayAuxiliaryMetricsRegionSVG = function (e) {
                var t,
                  i,
                  a = [],
                  o = n.getValuesAuxiliaryMetrics(e.metrics, e.mainMetric),
                  r = e.metrics,
                  l = e.textObj.generateAuxiliaryElement.addColorTextElement,
                  s = e.textObj.generateAuxiliaryElement.addColorBackElement,
                  c = e.textObj.generateAuxiliaryElement.legendElement,
                  d = '',
                  h = '';
                (d = l ? e.textObj.generateAuxiliaryElement.colorTextElement : 'white'),
                  (h = s ? e.textObj.generateAuxiliaryElement.colorBackElement : 'black');
                var f = { fontFamily: n.props.options.display.police, fontSize: '10px', marginTop: '5px', marginBottom: '0px', color: d },
                  m = {
                    fontFamily: n.props.options.display.police,
                    fontSize: '10px',
                    marginTop: '5px',
                    marginLeft: '5px',
                    marginBottom: '0px',
                    color: d,
                  },
                  g = {
                    fontFamily: n.props.options.display.police,
                    fontSize: '9px',
                    marginLeft: '10px',
                    marginBottom: '0px',
                    color: d,
                    whiteSpace: 'nowrap',
                  };
                if (r.length > 0) {
                  a.push(u.a.createElement('p', { key: e.id + 'contentToolTip1', style: f }, 'Auxiliary Metric')),
                    a.push(u.a.createElement('p', { key: e.idSVG + 'contentToolTip2', style: f }, c));
                  var b = 1;
                  try {
                    for (var y = p(r), v = y.next(); !v.done; v = y.next()) {
                      var x = v.value,
                        k = n.getConvertValueAuxMetrics(o[b - 1], e);
                      a.push(u.a.createElement('p', { key: b + 'region' + e.idSVG + 'contentToolTip3', style: m }, '+ Metric ', b)),
                        a.push(u.a.createElement('p', { key: b + 'region' + e.idSVG + 'contentToolTip4', style: g }, '- Value : ', k)),
                        a.push(u.a.createElement('p', { key: b + 'region' + e.idSVG + 'contentToolTip5', style: g }, '- Key : ', x.key)),
                        a.push(u.a.createElement('p', { key: b + 'region' + e.idSVG + 'contentToolTip6', style: g }, '- KeyValue : ', x.keyValue)),
                        a.push(u.a.createElement('p', { key: b + 'region' + e.idSVG + 'contentToolTip7', style: g }, '- Type : ', x.manageValue)),
                        b++;
                    }
                  } catch (e) {
                    t = { error: e };
                  } finally {
                    try {
                      v && !v.done && (i = y.return) && i.call(y);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
                }
                return u.a.createElement('div', { style: { backgroundColor: h } }, a);
              }),
              (n.defineMainMetric = function (e) {
                var t = '',
                  n = e.textObj.valueGenerateObjectText.legendElement,
                  i = e.textObj.valueGenerateObjectText.unit,
                  a = e.textObj.valueGenerateObjectText.numericFormatElement,
                  o = parseInt(a, 10) || 1,
                  r = L(e.mainMetric) || 0;
                return (t = '' !== a ? r.toPrecision(o) + ' ' + i : r + ' ' + i), n && (t = n + ': ' + t), t;
              }),
              (n.defineTextDecoration = function (e) {
                return e.textObj.style.underline || n.props.options.display.style.underline ? 'underline' : 'none';
              }),
              (n.defineFontStyle = function (e) {
                return e.textObj.style.italic || n.props.options.display.style.italic ? 'italic' : 'normal';
              }),
              (n.defineFontWeight = function (e) {
                return e.textObj.style.bold || n.props.options.display.style.bold ? 'bold' : 'normal';
              }),
              (n.stopDisplayLegend = function () {
                n.callInFunc(), n.setState({ hiddenLegend: !0 });
              }),
              (n.htmlTooltipRegionSVG = function () {
                var e,
                  t,
                  i = T(1e3);
                try {
                  for (var a = p(n.props.options.regionCoordinateSpace), o = a.next(); !o.done; o = a.next()) {
                    var r = o.value;
                    r.idSVG === n.state.dataTooltipSVG.idSVG && (i = r);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    o && !o.done && (t = a.return) && t.call(a);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                var l = {
                    display: 'none',
                    position: 'absolute',
                    top: parseInt(n.state.dataTooltipSVG.y, 10),
                    left: parseInt(n.state.dataTooltipSVG.x, 10),
                    zIndex: 9999,
                    width: 'auto',
                    border: '1px solid black',
                    borderRadius: '5px',
                    backgroundColor: 'black',
                    padding: 5,
                  },
                  s = {
                    textDecoration: n.defineTextDecoration(i),
                    fontStyle: n.defineFontStyle(i),
                    fontWeight: n.defineFontWeight(i),
                    fontSize: n.props.options.display.size,
                    fontFamily: n.props.options.display.police,
                    color: i.textObj.colorText,
                    backgroundColor: i.textObj.colorBack,
                  },
                  c = {
                    textDecoration: n.defineTextDecoration(i),
                    fontStyle: n.defineFontStyle(i),
                    fontWeight: n.defineFontWeight(i),
                    color: i.textObj.valueGenerateObjectText.addColorTextElement ? i.textObj.valueGenerateObjectText.colorTextElement : 'white',
                    backgroundColor: i.textObj.valueGenerateObjectText.addColorBackElement
                      ? i.textObj.valueGenerateObjectText.colorBackElement
                      : 'black',
                    fontSize: n.props.options.display.size,
                    fontFamily: n.props.options.display.police,
                  },
                  d = { color: 'white', fontSize: n.props.options.display.size, fontFamily: n.props.options.display.police };
                return u.a.createElement(
                  'div',
                  {
                    id: 'tooltipSVG',
                    style: l,
                    onMouseOver: function (e) {
                      var t = document.getElementById('tooltipSVG');
                      ('tooltipSVG' !== e.target.id && 'tooltipSVG' !== e.target.parentElement.id) || (t.style.display = 'initial');
                    },
                    onMouseOut: function (e) {
                      var t = document.getElementById('tooltipSVG');
                      ('tooltipSVG' === e.target.id && 'tooltipSVG' === e.target.parentElement.id) || (t.style.display = 'none');
                    },
                  },
                  i.textObj.isTextTooltip && u.a.createElement('p', { style: s }, i.label),
                  i.textObj.generateObjectText &&
                    i.textObj.valueGenerateObjectText.displayObjectInTooltip &&
                    u.a.createElement('p', { style: c }, n.defineMainMetric(i)),
                  i.textObj.generateAuxiliaryElement.displayObjectInTooltip && n.displayAuxiliaryMetricsRegionSVG(i),
                  u.a.createElement('a', { style: d, href: i.linkURL.hoveringTooltipLink }, i.linkURL.hoveringTooltipText)
                );
              }),
              (n.state = {
                valueButton: '',
                buttonManage: [!1, !1, !1, !1, !1],
                numberClickDiv: 0,
                allActionButton: u.a.createElement('div', null),
                nbClickButton: !1,
                legend: { hiddenLegend: !0, x: 0, y: 0 },
                svg: '',
                displayRegion: u.a.createElement('div', null),
                tooltip: u.a.createElement('div', null, 'salut'),
                idSVG: '',
                buttonAddLinkIsActive: !1,
                buttonAddIncurvedLinkIsActive: !1,
                dataTooltipSVG: { idSVG: '', x: '0', y: '0' },
                hiddenLegend: !1,
                currentImage: '',
              }),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype.displayPoint = function () {
              var e = this,
                t = [];
              return (
                this.props.options.arrayPoints.forEach(function (n) {
                  var i = e.getValuesMainMetricPoint(n).toString();
                  e.updatePositionOrientedLink(n);
                  var a = e.getValuesAuxiliaryMetricsPoint(n),
                    o = u.a.createElement(ye, {
                      key: 'point' + n.id.toString(),
                      drawGraphicMarker: n.drawGraphicMarker,
                      shape: n.shape,
                      size: n.sizeWidth,
                      positionShapeX: n.positionShapeX,
                      positionShapeY: n.positionShapeY,
                      label: n.label,
                      widthImage: parseInt(e.props.options.baseMap.width, 10),
                      heightImage: parseInt(e.props.options.baseMap.height, 10),
                      police: e.props.options.display.police,
                      sizePolice: e.props.options.display.size,
                      color: n.color,
                      idPoint: 'point' + n.id.toString(),
                      name: n.name,
                      options: e.props.options,
                      onOptionsChange: e.props.onOptionsChange,
                      data: e.props.data,
                      textObject: n.textObj,
                      seuil: n.lowerLimit,
                      valueMainMetric: i,
                      refMainMetric: n.mainMetric.refId || '',
                      associateOrientedLinkIn: n.associateOrientedLinksIn,
                      associateOrientedLinkOut: n.associateOrientedLinksOut,
                      labelPositionX: n.positionParameter.labelAPositionX,
                      labelPositionY: n.positionParameter.labelAPositionY,
                      tooltipPosition: n.positionParameter.tooltipPositionA,
                      auxiliaryMetrics: n.metrics,
                      valuesAuxiliaryMetrics: a,
                      linkUrl: n.linkURL,
                      buttonAddLinkIsActive: e.state.buttonAddLinkIsActive,
                      buttonAddIncurvedLinkIsActive: e.state.buttonAddIncurvedLinkIsActive,
                      widthInitialSpaceDefault: n.widthInitialSpaceDefault,
                      heightInitialSpaceDefault: n.heightInitialSpaceDefault,
                      positionXDefault: n.positionXDefault,
                      positionYDefault: n.positionYDefault,
                    });
                  t.push(o);
                }),
                u.a.createElement('div', null, t)
              );
            }),
            (t.prototype.displayOrientedLink = function () {
              var e = this,
                t = this.props.options.arrayOrientedLinks,
                n = [],
                i = u.a.createElement('div', null);
              return (
                t.forEach(function (t) {
                  var a = e.getValuesMainMetricOrientedLink(t).toString(),
                    o = e.getValuesMainMetricOrientedLinkB(t).toString();
                  e.getValuesMainMetricOrientedLinkB(t);
                  var r = e.getValuesAuxiliaryMetricsOrientedLink(t),
                    l = e.getValuesAuxiliaryMetricsOrientedLinkB(t),
                    s = e.defineValueX(t, !1, !0),
                    p = e.defineValueX(t, !0, !0),
                    c = e.defineValueX(t, !1, !1),
                    d = e.defineValueX(t, !0, !1),
                    h = e.defineValueY(t, !1, !0),
                    f = e.defineValueY(t, !0, !0),
                    m = e.defineValueY(t, !1, !1),
                    g = e.defineValueY(t, !0, !1);
                  (i = u.a.createElement(ve, {
                    key: 'orientedLink' + t.id.toString(),
                    id: t.id.toString(),
                    orientationLink: t.orientationLink.value || '',
                    pointAPositionX: s,
                    pointAPositionY: h,
                    pointBPositionX: c,
                    pointBPositionY: m,
                    colorA: t.colorCoordinateA,
                    colorB: t.colorCoordinateB,
                    associatePointIn: t.pointIn,
                    associatePointOut: t.pointOut,
                    associateRegionIn: t.regionIn,
                    associateRegionOut: t.regionOut,
                    widthImage: parseInt(e.props.options.baseMap.width, 10),
                    heightImage: parseInt(e.props.options.baseMap.height, 10),
                    label: t.label,
                    name: t.name,
                    valueMainMetricA: a,
                    valueMainMetricB: o,
                    refMainMetricA: t.mainMetric.refId || '',
                    refMainMetricB: t.mainMetricB.refId || '',
                    options: e.props.options,
                    onOptionsChange: e.props.onOptionsChange,
                    data: e.props.data,
                    textObject: t.textObj,
                    seuil: t.lowerLimit,
                    traceBorder: t.traceBorder,
                    traceBack: t.traceBack,
                    labelAPositionX: t.positionParameter.labelAPositionX,
                    labelAPositionY: t.positionParameter.labelAPositionY,
                    labelBPositionX: t.positionParameter.labelBPositionX,
                    labelBPositionY: t.positionParameter.labelBPositionY,
                    tooltipPositionA: t.positionParameter.tooltipPositionA,
                    tooltipPositionB: t.positionParameter.tooltipPositionB,
                    zIndex: t.zIndex,
                    pointCPositionX: t.pointCPositionX,
                    pointCPositionY: t.pointCPositionY,
                    isIncurved: t.isIncurved,
                    auxiliaryMetrics: t.metrics,
                    auxiliaryMetricsB: t.metricsB,
                    valuesAuxiliaryMetrics: r,
                    valuesAuxiliaryMetricsB: l,
                    police: e.props.options.display.police,
                    sizePolice: e.props.options.display.size,
                    linkUrl: t.linkURL,
                    size: t.size,
                    widthInitialSpaceDefault: t.widthInitialSpaceDefault,
                    heightInitialSpaceDefault: t.heightInitialSpaceDefault,
                    positionXADefault: p,
                    positionYADefault: f,
                    positionXBDefault: d,
                    positionYBDefault: g,
                    positionXCDefault: t.pointCPositionXDefault,
                    positionYCDefault: t.pointCPositionYDefault,
                  })),
                    n.push(i);
                }),
                this.updateAssociateOrientedLinkInToPoint(),
                this.updateAssociateOrientedLinkOutToPoint(),
                u.a.createElement('div', null, n)
              );
            }),
            (t.prototype.getValuesMainMetricPoint = function (e) {
              k(e, this.props);
              return L(e.mainMetric) || NaN;
            }),
            (t.prototype.getValuesMainMetricOrientedLink = function (e) {
              I(e, this.props);
              return L(e.mainMetric) || NaN;
            }),
            (t.prototype.getValuesMainMetricOrientedLinkB = function (e) {
              I(e, this.props);
              return L(e.mainMetricB) || NaN;
            }),
            (t.prototype.componentDidUpdate = function (e) {
              this.state.currentImage !== this.props.options.baseMap.image && this.componentDidMount(),
                this.props.options.baseMap.width === this.props.options.coordinateSpaceInitial.coordinate.xMax ||
                  this.props.options.updateOnlyInitialSpace ||
                  (this.props.options.coordinateSpaceInitial.coordinate.xMax = this.props.options.baseMap.width),
                this.props.options.baseMap.height === this.props.options.coordinateSpaceInitial.coordinate.yMax ||
                  this.props.options.updateOnlyInitialSpace ||
                  (this.props.options.coordinateSpaceInitial.coordinate.yMax = this.props.options.baseMap.height),
                this.props !== e && this.chargeRegion();
            }),
            (t.prototype.render = function () {
              var e,
                t = this;
              e = this.props.options.baseMap.modeSVG
                ? { height: this.props.options.baseMap.height + 'px', width: this.props.options.baseMap.width + 'px' }
                : 'base64' === this.props.options.baseMap.image.split(',')[0]
                ? {
                    position: 'absolute',
                    textAlign: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: 'url(data:image/jpeg;' + this.props.options.baseMap.image + ')',
                    backgroundSize: this.props.options.baseMap.width + 'px ' + this.props.options.baseMap.height + 'px',
                    height: this.props.options.baseMap.height + 'px',
                    width: this.props.options.baseMap.width + 'px',
                    opacity: 0.8,
                    zIndex: 4,
                  }
                : {
                    position: 'absolute',
                    textAlign: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: 'url(' + this.props.options.baseMap.image + ')',
                    backgroundSize: this.props.options.baseMap.width + 'px ' + this.props.options.baseMap.height + 'px',
                    height: this.props.options.baseMap.height + 'px',
                    width: this.props.options.baseMap.width + 'px',
                    opacity: 0.8,
                    zIndex: 4,
                  };
              var n = {
                  position: 'absolute',
                  textAlign: 'center',
                  backgroundRepeat: 'no-repeat',
                  height: this.props.options.baseMap.height + 'px',
                  width: this.props.options.baseMap.width + 'px',
                  opacity: 0,
                  zIndex: 2,
                },
                i = {
                  height: '100vh',
                  width: '100vw',
                  fontFamily: this.props.options.display.police,
                  fontSize: this.props.options.display.size,
                  fontStyle: this.props.options.display.style.italic ? 'italic' : 'normal',
                  fontWeight: this.props.options.display.style.bold ? 'bold' : 'normal',
                  textDecoration: this.props.options.display.style.underline ? 'underline' : 'none',
                };
              return u.a.createElement(
                d.CustomScrollbar,
                { autoHide: !1, hideHorizontalTrack: !1, autoHeightMax: '100%' },
                u.a.createElement('div', { id: 'zoom', style: { display: 'inline-flex', marginTop: '-7px', marginLeft: '86%' } }),
                u.a.createElement(
                  'div',
                  { style: { textAlign: 'left', position: 'relative', display: 'inline-grid' } },
                  this.props.options.displayButton && this.state.allActionButton
                ),
                u.a.createElement(
                  'section',
                  { style: i, onClick: this.positionLegend },
                  u.a.createElement(
                    'div',
                    null,
                    this.state.buttonManage[0] &&
                      u.a.createElement(
                        'div',
                        {
                          style: {
                            width: '200px',
                            position: 'absolute',
                            overflowY: 'scroll',
                            marginLeft: '20%',
                            marginRight: '20%',
                            marginTop: '20%',
                            marginBottom: '20%',
                            border: '5px solid aliceblue',
                            height: '40%',
                          },
                        },
                        u.a.createElement(
                          d.Modal,
                          { title: 'Add Region', onDismiss: this.addNode, onClickBackdrop: this.addNode, isOpen: this.state.nbClickButton },
                          u.a.createElement(he, {
                            options: this.props.options,
                            onOptionsChange: this.props.onOptionsChange,
                            data: this.props.data,
                            isRegion: !0,
                            isPoint: !1,
                            isLink: !1,
                          })
                        )
                      ),
                    !this.state.hiddenLegend &&
                      u.a.createElement(
                        xe,
                        r(
                          { options: this.props.options, onOptionsChange: this.props.onOptionsChange, data: this.props.data },
                          this.props.options.legend,
                          { callBack: this.handleClick, callBackClose: this.stopDisplayLegend }
                        )
                      ),
                    u.a.createElement('div', { onClick: this.callMethod }),
                    u.a.createElement(
                      'div',
                      { onClick: this.getCoordinates, id: 'coordinateSpaces', style: e },
                      this.defineLimit(),
                      u.a.createElement(
                        'div',
                        null,
                        u.a.createElement('div', { className: 'tooltip' }),
                        u.a.createElement(
                          'div',
                          { id: 'mainPanel', style: { position: 'absolute', zIndex: 1 } },
                          u.a.createElement('div', {
                            style: { position: 'absolute', zIndex: 2 },
                            dangerouslySetInnerHTML: { __html: this.state.svg },
                          }),
                          u.a.createElement('div', {
                            id: 'Intent',
                            style: n,
                            onMouseOver: this.SVG_PathImage,
                            onMouseOut: function (e) {
                              t.hideTooltipSVG(e);
                            },
                            dangerouslySetInnerHTML: { __html: this.props.options.baseMap.layerImage },
                          }),
                          this.htmlTooltipRegionSVG(),
                          this.displayOrientedLink(),
                          this.fillCoordinate(),
                          this.displayPoint()
                        )
                      )
                    )
                  )
                )
              );
            }),
            t
          );
        })(c.PureComponent),
        Ce = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.callBack = function () {
                n.props.onOptionsChange(r(r({}, n.props.options), { coordinateSpaceInitial: n.state.arrayCoor }));
              }),
              (n.onChangeSwitchDisplayInitialSpace = function () {
                var e = n.state.arrayCoor;
                (e.displayArea = !e.displayArea), n.setState({ arrayCoor: e }), n.callBack();
              }),
              (n.componentDidMount = function () {}),
              (n.componentDidUpdate = function () {}),
              (n.state = { arrayCoor: n.props.options.coordinateSpaceInitial }),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype._handleChange = function (e, t) {
              var n = this;
              (this.props.options.updateOnlyInitialSpace = !0),
                this.setState(function (i) {
                  return {
                    arrayCoor: F(t, i.arrayCoor, e, parseInt(n.props.options.baseMap.width, 10), parseInt(n.props.options.baseMap.height, 10)),
                  };
                }),
                this.callBack();
            }),
            (t.prototype.getGoodValue = function (e, t) {
              var n;
              return (
                (n = ''),
                t.startsWith('positionXMin')
                  ? (n = this.state.arrayCoor.coordinate.xMin)
                  : t.startsWith('positionXMax')
                  ? (n = this.state.arrayCoor.coordinate.xMax)
                  : t.startsWith('positionYMin')
                  ? (n = this.state.arrayCoor.coordinate.yMin)
                  : t.startsWith('positionYMax') && (n = this.state.arrayCoor.coordinate.yMax),
                n
              );
            }),
            (t.prototype.render = function () {
              var e = this;
              return u.a.createElement(
                'div',
                { className: 'coordinateSpaceInitial' },
                u.a.createElement(
                  'div',
                  { style: { display: 'flex' } },
                  u.a.createElement(d.FormLabel, { width: 15 }, 'Display space initial'),
                  u.a.createElement(d.Switch, {
                    label: '',
                    checked: this.state.arrayCoor.displayArea,
                    onChange: this.onChangeSwitchDisplayInitialSpace,
                  })
                ),
                u.a.createElement(d.FormField, {
                  label: 'X min',
                  labelWidth: 15,
                  inputWidth: 20,
                  type: 'text',
                  required: !0,
                  name: 'xMin',
                  value: this.state.arrayCoor.coordinate.xMin,
                  onChange: function (t) {
                    return e._handleChange(t.currentTarget.value, 'positionXMin');
                  },
                  placeholder: 'X minimum',
                }),
                u.a.createElement(d.FormField, {
                  label: 'X max',
                  labelWidth: 15,
                  inputWidth: 20,
                  type: 'text',
                  required: !0,
                  name: 'xMax',
                  value: this.state.arrayCoor.coordinate.xMax,
                  onChange: function (t) {
                    return e._handleChange(t.currentTarget.value, 'positionXMax');
                  },
                  placeholder: 'X max',
                }),
                u.a.createElement(d.FormField, {
                  label: 'Y min',
                  labelWidth: 15,
                  inputWidth: 20,
                  type: 'text',
                  required: !0,
                  name: 'yMin',
                  value: this.state.arrayCoor.coordinate.yMin,
                  onChange: function (t) {
                    return e._handleChange(t.currentTarget.value, 'positionYMin');
                  },
                  placeholder: 'Y minimum',
                }),
                u.a.createElement(d.FormField, {
                  label: 'Y max',
                  labelWidth: 15,
                  inputWidth: 20,
                  type: 'text',
                  required: !0,
                  name: 'yMax',
                  value: this.state.arrayCoor.coordinate.yMax,
                  onChange: function (t) {
                    return e._handleChange(t.currentTarget.value, 'positionYMax');
                  },
                  placeholder: 'Y max',
                })
              );
            }),
            t
          );
        })(u.a.Component),
        Ie = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.fileReader = null),
              (n.onChangeHandler = function (e) {
                n.setState({ selectedFile: e.target.files[0], readerFile: new FileReader() });
              }),
              (n.upload = function () {
                n.state.selectedFile.onload = function (e) {
                  var t;
                  null != (null === (t = e.target) || void 0 === t ? void 0 : t.result) &&
                    (this.props.options.saveImportFile.push(this.state.readerFile.result),
                    this.props.onOptionsChange(r(r({}, this.props.options), { saveImportFile: this.props.options.saveImportFile })));
                };
                var e = n.state.selectedFile.name.split('.')[1];
                'jpg' === e || 'png' === e || 'gif' === e
                  ? n.state.readerFile.readAsDataURL(n.state.selectedFile)
                  : n.state.readerFile.readAsText(n.state.selectedFile);
              }),
              (n.save = function () {
                if (null != n.state.readerFile.result) {
                  n.props.options.saveImportFile.push({ name: n.state.selectedFile.name, content: n.state.readerFile.result });
                  var e = new Se(n.props);
                  n.props.options.saveImportFile.forEach(function (t) {
                    if (t.name) {
                      var i = t.name.split('.'),
                        a = n.props.options.baseMap;
                      'svg' === i[1]
                        ? ((a.image = t.content), (a.modeSVG = !0), (a.isUploaded = !0))
                        : ('jpg' !== i[1] && 'png' !== i[1] && 'gif' !== i[1]) || ((a.image = t.content), (a.modeSVG = !1), (a.isUploaded = !0)),
                        n.props.onOptionsChange(r(r({}, n.props.options), { baseMap: a }));
                    }
                    JSON.parse(t.content).hasOwnProperty('regions') && (e.loadMultiRegions(JSON.parse(t.content)), console.log('Load Region')),
                      JSON.parse(t.content).hasOwnProperty('points') && (e.loadMultiPoints(JSON.parse(t.content)), console.log('Load Point')),
                      JSON.parse(t.content).hasOwnProperty('links') && (e.loadMultiLinks(JSON.parse(t.content)), console.log('Load Links'));
                  });
                }
                console.log(n.props.options.saveImportFile);
              }),
              (n.test = function () {
                console.log(JSON.stringify(n.props));
              }),
              (n.onMultiListFileChanged = function (e) {
                var t = n.props.options.saveImportFile.slice();
                (t[parseInt(e.currentTarget.id, 10)].name = e.currentTarget.value),
                  (n.props.options.saveImportFile = t),
                  n.props.onOptionsChange(r(r({}, n.props.options), { saveImportFile: n.props.options.saveImportFile }));
              }),
              (n.multiDeletFile = function (e) {
                n.props.options.saveImportFile.splice(
                  n.props.options.saveImportFile.findIndex(function (t) {
                    return t === n.props.options.saveImportFile[parseInt(e.currentTarget.id, 10)];
                  }),
                  1
                ),
                  n.props.onOptionsChange(r(r({}, n.props.options), { saveImportFile: n.props.options.saveImportFile }));
              }),
              (n.multiUploadDisplay = function (e) {
                if (0 !== e.file.lenght) {
                  var t = e.file.map(function (e, t) {
                    return u.a.createElement(
                      'div',
                      { key: 'MultiFileDiv' + t.toString(), style: { display: 'flex' } },
                      u.a.createElement(d.FormField, {
                        id: t.toString(),
                        key: 'MultiFile' + t.toString(),
                        label: 'File',
                        labelWidth: 5,
                        inputWidth: 20,
                        onChange: n.onMultiListFileChanged.bind(n),
                        type: 'string',
                        value: e.name || '',
                      }),
                      u.a.createElement(
                        d.Button,
                        { variant: 'danger', id: t.toString(), key: 'ButtunDel' + t.toString(), onClick: n.multiDeletFile.bind(n) },
                        'Del'
                      )
                    );
                  });
                  return u.a.createElement('div', null, t);
                }
                return u.a.createElement('div', null, 'No targets avalaible');
              }),
              (n.state = { selectedFile: null, readerFile: new FileReader() }),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype.render = function () {
              return u.a.createElement(
                'div',
                null,
                u.a.createElement(
                  'div',
                  null,
                  u.a.createElement('input', { type: 'file', name: 'file', onChange: this.onChangeHandler }),
                  u.a.createElement(d.Button, { onClick: this.upload }, 'add'),
                  u.a.createElement(d.Button, { onClick: this.save }, 'finish')
                ),
                u.a.createElement('div', null, u.a.createElement(this.multiUploadDisplay, { file: this.props.options.saveImportFile }))
              );
            }),
            t
          );
        })(u.a.Component),
        Se = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.result = []),
              (n.totalResult = []),
              (n.PointValidator = function (e) {
                var t = 0;
                return (
                  n.props.options.arrayPoints.forEach(function (n) {
                    e.id === n.id && (t = e.name === n.name ? 2 : 1);
                  }),
                  t
                );
              }),
              (n.RegionValidator = function (e) {
                var t = 0;
                return (
                  n.props.options.regionCoordinateSpace.forEach(function (n) {
                    e.id === n.id && (t = e.label === n.label ? 2 : 1);
                  }),
                  t
                );
              }),
              (n.LinkValidator = function (e) {
                var t = 0;
                return (
                  n.props.options.arrayOrientedLinks.forEach(function (n) {
                    e.id === n.id && (t = e.name === n.name ? 2 : 1);
                  }),
                  t
                );
              }),
              (n.UrlValidator = function (e) {
                var t = !0;
                for (var i in n.props.options.saveImportUrl.multi)
                  if (n.props.options.saveImportUrl.multi[i] === e) {
                    t = !1;
                    break;
                  }
                return t;
              }),
              (n.pointUpdate = function (e) {
                n.props.options.arrayPoints.forEach(function (t, i) {
                  e.id === t.id &&
                    e.name === t.name &&
                    ((n.props.options.arrayPoints[i] = e),
                    n.props.onOptionsChange(r(r({}, n.props.options), { arrayPoints: n.props.options.arrayPoints })));
                });
              }),
              (n.loadMonoPoint = function (e) {
                var t = parseInt(n.props.options.coordinateSpaceInitial.coordinate.xMin, 10),
                  i = parseInt(n.props.options.coordinateSpaceInitial.coordinate.xMax, 10),
                  a = parseInt(n.props.options.coordinateSpaceInitial.coordinate.yMin, 10),
                  o = parseInt(n.props.options.coordinateSpaceInitial.coordinate.yMax, 10),
                  r = (i - t).toString(),
                  l = (o - a).toString(),
                  s = new f(
                    e.id,
                    e.linkURL,
                    e.meta,
                    e.lowerLimit,
                    e.label,
                    e.textObj,
                    e.mainMetric,
                    e.metrics,
                    e.colorMode,
                    e.traceBack,
                    e.traceBorder,
                    e.positionParameter,
                    e.name,
                    e.valueMetric,
                    e.drawGraphicMarker,
                    e.shape,
                    e.sizeWidth,
                    e.sizeHeight,
                    e.rotateArrow,
                    e.positionShapeX,
                    e.positionShapeY,
                    e.color,
                    e.associateOrientedLinksIn,
                    e.associateOrientedLinksOut,
                    r,
                    l,
                    e.positionXDefault,
                    e.positionYDefault
                  ),
                  p = n.PointValidator(s);
                0 === p && n.props.options.arrayPoints.push(s), 2 === p && n.pointUpdate(s);
              }),
              (n.regionUpdate = function (e) {
                n.props.options.regionCoordinateSpace.forEach(function (t, i) {
                  e.id === t.id &&
                    e.label === t.label &&
                    ((n.props.options.regionCoordinateSpace[i] = e),
                    n.props.onOptionsChange(r(r({}, n.props.options), { regionCoordinateSpace: n.props.options.regionCoordinateSpace })));
                });
              }),
              (n.loadMonoRegion = function (e) {
                var t = parseInt(n.props.options.coordinateSpaceInitial.coordinate.xMin, 10),
                  i = parseInt(n.props.options.coordinateSpaceInitial.coordinate.xMax, 10),
                  a = parseInt(n.props.options.coordinateSpaceInitial.coordinate.yMin, 10),
                  o = parseInt(n.props.options.coordinateSpaceInitial.coordinate.yMax, 10),
                  r = (i - t).toString(),
                  l = (o - a).toString(),
                  s = new O(
                    e.id,
                    e.linkURL,
                    e.meta,
                    e.lowerLimit,
                    e.label,
                    e.textObj,
                    e.mainMetric,
                    e.metrics,
                    e.colorMode,
                    e.traceBack,
                    e.traceBorder,
                    e.positionParameter,
                    e.idSVG,
                    e.orientedLink,
                    e.coords,
                    e.coordsDefault,
                    e.mode,
                    e.img,
                    r,
                    l
                  ),
                  p = n.RegionValidator(s);
                0 === p && n.props.options.regionCoordinateSpace.push(s), 2 === p && n.regionUpdate(s);
              }),
              (n.linkUpdate = function (e) {
                n.props.options.arrayOrientedLinks.forEach(function (t, i) {
                  e.id === t.id &&
                    e.name === t.name &&
                    ((n.props.options.arrayOrientedLinks[i] = e),
                    n.props.onOptionsChange(r(r({}, n.props.options), { arrayOrientedLinks: n.props.options.arrayOrientedLinks })));
                });
              }),
              (n.loadMonoLink = function (e) {
                var t = parseInt(n.props.options.coordinateSpaceInitial.coordinate.xMin, 10),
                  i = parseInt(n.props.options.coordinateSpaceInitial.coordinate.xMax, 10),
                  a = parseInt(n.props.options.coordinateSpaceInitial.coordinate.yMin, 10),
                  o = parseInt(n.props.options.coordinateSpaceInitial.coordinate.yMax, 10),
                  r = (i - t).toString(),
                  l = (o - a).toString(),
                  s = new g(
                    e.id,
                    e.linkURL,
                    e.meta,
                    e.lowerLimit,
                    e.label,
                    e.textObj,
                    e.mainMetric,
                    e.metrics,
                    e.colorMode,
                    e.traceBack,
                    e.traceBorder,
                    e.positionParameter,
                    e.name,
                    e.orientationLink,
                    e.size,
                    e.pointAPositionX,
                    e.pointAPositionY,
                    e.colorCoordinateA,
                    e.pointBPositionX,
                    e.pointBPositionY,
                    e.colorCoordinateB,
                    e.valueMainMetricA,
                    e.valueMainMetricB,
                    e.pointIn,
                    e.pointOut,
                    e.regionIn,
                    e.regionOut,
                    e.zIndex,
                    e.pointCPositionX,
                    e.pointCPositionY,
                    e.isIncurved,
                    e.mainMetricB,
                    e.metricsB,
                    r,
                    l,
                    e.pointAPositionXDefault,
                    e.pointAPositionYDefault,
                    e.pointBPositionXDefault,
                    e.pointBPositionYDefault,
                    e.pointCPositionXDefault,
                    e.pointCPositionYDefault
                  ),
                  p = n.LinkValidator(s);
                0 === p && n.props.options.arrayOrientedLinks.push(s), 2 === p && n.linkUpdate(s);
              }),
              (n.loadMultiPoints = function (e) {
                e.points.forEach(function (e) {
                  n.loadMonoPoint(e);
                });
              }),
              (n.loadMultiRegions = function (e) {
                e.regions.forEach(function (e) {
                  n.loadMonoRegion(e);
                });
              }),
              (n.loadMultiLinks = function (e) {
                e.links.forEach(function (e) {
                  n.loadMonoLink(e);
                });
              }),
              (n.loadTotal = function (e) {
                (n.props.options.baseMap = e.baseMap),
                  (n.props.options.display.police = e.texteSettings.police),
                  (n.props.options.display.size = e.texteSettings.size),
                  (n.props.options.display.style = e.texteSettings.style),
                  (n.props.options.coordinateSpaceInitial = e.coordinateSpaceInitial),
                  e.regions.forEach(function (e) {
                    !0 === n.UrlValidator(e) && n.props.options.saveImportUrl.multi.push(e);
                  }),
                  e.points.forEach(function (e) {
                    !0 === n.UrlValidator(e) && n.props.options.saveImportUrl.multi.push(e);
                  }),
                  e.links.forEach(function (e) {
                    !0 === n.UrlValidator(e) && n.props.options.saveImportUrl.multi.push(e);
                  }),
                  n.fetchMulti();
              }),
              (n.loaderTotal = function () {
                return l(n, void 0, void 0, function () {
                  var e, t;
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return n.trys.push([0, 3, , 4]), [4, fetch(this.props.options.totalUrlInput)];
                      case 1:
                        return [4, n.sent().json()];
                      case 2:
                        return (e = n.sent()), this.loadTotal(e), [3, 4];
                      case 3:
                        return (t = n.sent()), console.error(t), [3, 4];
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (n.fetchMulti = function () {
                n.props.options.saveImportUrl.multi.forEach(function (e) {
                  return l(n, void 0, void 0, function () {
                    var t;
                    return s(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return n.trys.push([0, 3, , 4]), (t = {}), [4, fetch(e)];
                        case 1:
                          return [4, n.sent().json()];
                        case 2:
                          return (
                            (t = n.sent()).hasOwnProperty('regions') && this.loadMultiRegions(t),
                            t.hasOwnProperty('points') && this.loadMultiPoints(t),
                            t.hasOwnProperty('links') && this.loadMultiLinks(t),
                            [3, 4]
                          );
                        case 3:
                          return n.sent(), [3, 4];
                        case 4:
                          return [2];
                      }
                    });
                  });
                });
              }),
              (n.onToggleTotalUrl = function (e) {
                n.setState({ collapseTotalUrl: e });
              }),
              (n.onToggleMultiUrl = function (e) {
                n.setState({ collapseMultiUrl: e });
              }),
              (n.onToggleMultiUpload = function (e) {
                n.setState({ collapseMultiUpload: e });
              }),
              (n.onTotalUrlChanged = function (e) {
                var t;
                (t = e.currentTarget.value), n.props.onOptionsChange(r(r({}, n.props.options), { totalUrlInput: t }));
              }),
              (n.onTotalListUrlChanged = function (e) {
                var t = n.props.options.saveImportUrl.total.slice();
                (t[parseInt(e.currentTarget.id, 10)] = e.currentTarget.value),
                  (n.props.options.saveImportUrl.total = t),
                  n.props.onOptionsChange(r(r({}, n.props.options), { saveImportUrl: n.props.options.saveImportUrl }));
              }),
              (n.onMultiUrlChanged = function (e) {
                var t;
                (t = e.currentTarget.value), n.props.onOptionsChange(r(r({}, n.props.options), { multiUrlInput: t }));
              }),
              (n.onMultiListUrlChanged = function (e) {
                var t = n.props.options.saveImportUrl.multi.slice();
                (t[parseInt(e.currentTarget.id, 10)] = e.currentTarget.value),
                  (n.props.options.saveImportUrl.multi = t),
                  n.props.onOptionsChange(r(r({}, n.props.options), { saveImportUrl: n.props.options.saveImportUrl }));
              }),
              (n.addTotalUrlInput = function (e) {
                n.props.options.saveImportUrl.total.push(n.props.options.totalUrlInput),
                  (n.props.options.totalUrlInput = ''),
                  n.props.onOptionsChange(r(r({}, n.props.options), { saveImportUrl: n.props.options.saveImportUrl }));
              }),
              (n.addMultiUrlInput = function (e) {
                n.props.options.saveImportUrl.multi.push(n.props.options.multiUrlInput),
                  (n.props.options.multiUrlInput = ''),
                  n.props.onOptionsChange(r(r({}, n.props.options), { saveImportUrl: n.props.options.saveImportUrl }));
              }),
              (n.totalDeletUrl = function (e) {
                n.props.options.saveImportUrl.total.splice(
                  n.props.options.saveImportUrl.total.findIndex(function (t) {
                    return t === n.props.options.saveImportUrl.total[parseInt(e.currentTarget.id, 10)];
                  }),
                  1
                ),
                  n.props.onOptionsChange(r(r({}, n.props.options), { saveImportUrl: n.props.options.saveImportUrl }));
              }),
              (n.multiDeletUrl = function (e) {
                n.props.options.saveImportUrl.multi.splice(
                  n.props.options.saveImportUrl.multi.findIndex(function (t) {
                    return t === n.props.options.saveImportUrl.multi[parseInt(e.currentTarget.id, 10)];
                  }),
                  1
                ),
                  n.props.onOptionsChange(r(r({}, n.props.options), { saveImportUrl: n.props.options.saveImportUrl }));
              }),
              (n.tempo = function () {}),
              (n.totalUrlDisplay = function (e) {
                if (0 !== e.list.total.lenght) {
                  var t = e.list.total.map(function (e, t) {
                    return u.a.createElement(
                      'div',
                      { key: 'TotalUrlDiv' + t.toString(), style: { display: 'flex' } },
                      u.a.createElement(d.FormField, {
                        id: t.toString(),
                        key: 'TotalUrl' + t.toString(),
                        label: 'Url',
                        labelWidth: 5,
                        inputWidth: 20,
                        onChange: n.onTotalListUrlChanged.bind(n),
                        type: 'string',
                        value: e || '',
                      }),
                      u.a.createElement(
                        d.Button,
                        { variant: 'danger', id: t.toString(), key: 'ButtunDel' + t.toString(), onClick: n.totalDeletUrl.bind(n) },
                        'Del'
                      )
                    );
                  });
                  return u.a.createElement('div', null, t);
                }
                return u.a.createElement('div', null, 'No targets avalaible');
              }),
              (n.multiUrlDisplay = function (e) {
                if (0 !== e.list.multi.lenght) {
                  var t = e.list.multi.map(function (e, t) {
                    return u.a.createElement(
                      'div',
                      { key: 'MultiUrlDiv' + t.toString(), style: { display: 'flex' } },
                      u.a.createElement(d.FormField, {
                        id: t.toString(),
                        key: 'MultiUrl' + t.toString(),
                        label: 'Url',
                        labelWidth: 5,
                        inputWidth: 20,
                        onChange: n.onMultiListUrlChanged.bind(n),
                        type: 'string',
                        value: e || '',
                      }),
                      u.a.createElement(
                        d.Button,
                        { variant: 'danger', id: t.toString(), key: 'ButtunDel' + t.toString(), onClick: n.multiDeletUrl.bind(n) },
                        'Del'
                      )
                    );
                  });
                  return u.a.createElement('div', null, t);
                }
                return u.a.createElement('div', null, 'No targets avalaible');
              }),
              (n.delAll = function () {
                (n.props.options.saveImportUrl.total = []),
                  (n.props.options.saveImportUrl.multi = []),
                  n.props.onOptionsChange(r(r({}, n.props.options), { saveImportUrl: n.props.options.saveImportUrl }));
              }),
              (n.toDel = function () {}),
              (n.state = { collapseTotalUrl: !1, collapseMultiUrl: !1, collapseMultiUpload: !0 }),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype.render = function () {
              var e = this.props.options;
              return u.a.createElement(
                'div',
                null,
                u.a.createElement(
                  d.Collapse,
                  { isOpen: this.state.collapseTotalUrl, label: 'Global Url Import', onToggle: this.onToggleTotalUrl },
                  u.a.createElement(d.FormField, {
                    label: 'Total Url',
                    labelWidth: 8,
                    key: 'TotalUrl',
                    inputWidth: 20,
                    onChange: this.onTotalUrlChanged.bind(this),
                    type: 'string',
                    value: e.totalUrlInput || '',
                  }),
                  u.a.createElement(
                    'div',
                    { className: 'section gf-form-group' },
                    u.a.createElement(d.Button, { onClick: this.loaderTotal }, 'Finish'),
                    u.a.createElement(this.totalUrlDisplay, { list: e.saveImportUrl })
                  )
                ),
                u.a.createElement(
                  d.Collapse,
                  { isOpen: this.state.collapseMultiUrl, label: 'Multi Url Import', onToggle: this.onToggleMultiUrl },
                  u.a.createElement(d.FormField, {
                    label: 'Multi Url',
                    labelWidth: 8,
                    key: 'MultiUrl',
                    inputWidth: 20,
                    onChange: this.onMultiUrlChanged.bind(this),
                    type: 'string',
                    value: e.multiUrlInput || '',
                  }),
                  u.a.createElement(d.Button, { key: 'AddMultiUrl', onClick: this.addMultiUrlInput }, 'Add'),
                  u.a.createElement(
                    'div',
                    { className: 'section gf-form-group' },
                    u.a.createElement(d.Button, { onClick: this.fetchMulti }, 'Finish'),
                    u.a.createElement(this.multiUrlDisplay, { list: e.saveImportUrl })
                  )
                ),
                u.a.createElement(
                  d.Collapse,
                  { isOpen: this.state.collapseMultiUpload, label: 'Multi Local Import', onToggle: this.onToggleMultiUpload },
                  u.a.createElement(
                    'div',
                    null,
                    u.a.createElement(Ie, { options: this.props.options, onOptionsChange: this.props.onOptionsChange, data: this.props.data })
                  )
                ),
                u.a.createElement(
                  'div',
                  { className: 'section gf-form-group' },
                  u.a.createElement(d.Button, { key: 'delAll', onClick: this.delAll }, 'Del all urls')
                ),
                u.a.createElement(d.Button, { onClick: this.toDel }, 'toDel')
              );
            }),
            t
          );
        })(u.a.Component),
        Ee = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.callBack = function (e, t) {
                var i, a, o, l;
                if (t) {
                  var s = n.props.options.regionCoordinateSpace.slice(),
                    c = 0;
                  try {
                    for (var u = p(s), d = u.next(); !d.done; d = u.next()) {
                      if (d.value.id === e) {
                        s[c] = t;
                        break;
                      }
                      ++c;
                    }
                  } catch (e) {
                    i = { error: e };
                  } finally {
                    try {
                      d && !d.done && (a = u.return) && a.call(u);
                    } finally {
                      if (i) throw i.error;
                    }
                  }
                  n.props.onOptionsChange(r(r({}, n.props.options), { regionCoordinateSpace: s }));
                } else {
                  var h = !1;
                  (s = n.props.options.regionCoordinateSpace.slice()), (c = 0);
                  try {
                    for (var f = p(s), m = f.next(); !m.done; m = f.next()) {
                      if (m.value.id === e) {
                        h = !0;
                        break;
                      }
                      ++c;
                    }
                  } catch (e) {
                    o = { error: e };
                  } finally {
                    try {
                      m && !m.done && (l = f.return) && l.call(f);
                    } finally {
                      if (o) throw o.error;
                    }
                  }
                  h && (s.splice(c, 1), n.props.onOptionsChange(r(r({}, n.props.options), { regionCoordinateSpace: s })), n.fillSelectRegionSpace());
                }
              }),
              (n.onChangeSelectCoordinate = function (e) {
                n.setState({ selectCoordinateSpaceDefault: e });
              }),
              (n.fillSelectRegionSpace = function () {
                var e,
                  t,
                  i,
                  a,
                  o,
                  r = !1,
                  l = [],
                  s = n.props.options.regionCoordinateSpace.slice();
                try {
                  for (var c = p(s), u = c.next(); !u.done; u = c.next()) {
                    var d = u.value;
                    l.push({ value: d, label: d.label });
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    u && !u.done && (t = c.return) && t.call(c);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                if (n.state.selectCoordinateSpaceDefault)
                  try {
                    for (var h = p(s), f = h.next(); !f.done; f = h.next()) {
                      if ((d = f.value).id === (null === (o = n.state.selectCoordinateSpaceDefault.value) || void 0 === o ? void 0 : o.id)) {
                        r = !0;
                        break;
                      }
                    }
                  } catch (e) {
                    i = { error: e };
                  } finally {
                    try {
                      f && !f.done && (a = h.return) && a.call(h);
                    } finally {
                      if (i) throw i.error;
                    }
                  }
                n.setState(function (e) {
                  return { selectCoordinateSpace: l, selectCoordinateSpaceDefault: r ? e.selectCoordinateSpaceDefault : l.length > 0 ? l[0] : [] };
                });
              }),
              (n.componentDidMount = function () {
                n.fillSelectRegionSpace();
              }),
              (n.componentDidUpdate = function (e) {
                e.options.regionCoordinateSpace !== n.props.options.regionCoordinateSpace && n.fillSelectRegionSpace();
              }),
              (n.state = { selectCoordinateSpace: [], selectCoordinateSpaceDefault: [] }),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype.render = function () {
              var e = this;
              return u.a.createElement(
                'div',
                null,
                u.a.createElement(
                  'div',
                  { style: { display: 'flex' } },
                  u.a.createElement(d.FormLabel, { width: 15 }, 'Select Region'),
                  u.a.createElement(d.Select, {
                    onChange: function (t) {
                      return e.onChangeSelectCoordinate(t);
                    },
                    allowCustomValue: !1,
                    options: this.state.selectCoordinateSpace,
                    width: 10,
                    value: this.state.selectCoordinateSpaceDefault,
                  })
                ),
                u.a.createElement('br', null),
                u.a.createElement(
                  'div',
                  null,
                  this.state.selectCoordinateSpaceDefault.value
                    ? u.a.createElement($, {
                        options: this.props.options,
                        onOptionsChange: this.props.onOptionsChange,
                        data: this.props.data,
                        coordinate: this.state.selectCoordinateSpaceDefault.value,
                        callBackToParent: this.callBack,
                        isAddCoordinate: !1,
                      })
                    : u.a.createElement('p', { style: { textAlign: 'center', fontSize: '20px', marginTop: '50px' } }, 'Data not set')
                )
              );
            }),
            t
          );
        })(u.a.Component),
        Me = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.callBack = function (e, t) {
                var i, a, o, l;
                if (t) {
                  var s = n.props.options.arrayPoints.slice(),
                    c = 0;
                  try {
                    for (var u = p(s), d = u.next(); !d.done; d = u.next()) {
                      if (d.value.id === e) {
                        s[c] = t;
                        break;
                      }
                      ++c;
                    }
                  } catch (e) {
                    i = { error: e };
                  } finally {
                    try {
                      d && !d.done && (a = u.return) && a.call(u);
                    } finally {
                      if (i) throw i.error;
                    }
                  }
                  n.props.onOptionsChange(r(r({}, n.props.options), { arrayPoints: s }));
                } else {
                  var h = !1;
                  (s = n.props.options.arrayPoints.slice()), (c = 0);
                  try {
                    for (var f = p(s), m = f.next(); !m.done; m = f.next()) {
                      if (m.value.id === e) {
                        h = !0;
                        break;
                      }
                      ++c;
                    }
                  } catch (e) {
                    o = { error: e };
                  } finally {
                    try {
                      m && !m.done && (l = f.return) && l.call(f);
                    } finally {
                      if (o) throw o.error;
                    }
                  }
                  h && (s.splice(c, 1), n.props.onOptionsChange(r(r({}, n.props.options), { arrayPoints: s })), n.fillSelectPoint());
                }
              }),
              (n.onChangeSelectCoordinate = function (e) {
                n.setState({ selectCoordinateSpaceDefault: e });
              }),
              (n.fillSelectPoint = function () {
                var e,
                  t,
                  i,
                  a,
                  o,
                  r = !1,
                  l = [],
                  s = n.props.options.arrayPoints.slice();
                try {
                  for (var c = p(s), u = c.next(); !u.done; u = c.next()) {
                    var d = (m = u.value).label || m.name;
                    l.push({ value: m, label: d });
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    u && !u.done && (t = c.return) && t.call(c);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                if (n.state.selectCoordinateSpaceDefault)
                  try {
                    for (var h = p(s), f = h.next(); !f.done; f = h.next()) {
                      var m;
                      if ((m = f.value).id === (null === (o = n.state.selectCoordinateSpaceDefault.value) || void 0 === o ? void 0 : o.id)) {
                        r = !0;
                        break;
                      }
                    }
                  } catch (e) {
                    i = { error: e };
                  } finally {
                    try {
                      f && !f.done && (a = h.return) && a.call(h);
                    } finally {
                      if (i) throw i.error;
                    }
                  }
                n.setState(function (e) {
                  return { selectCoordinateSpace: l, selectCoordinateSpaceDefault: r ? e.selectCoordinateSpaceDefault : l.length > 0 ? l[0] : [] };
                });
              }),
              (n.componentDidMount = function () {
                n.fillSelectPoint();
              }),
              (n.componentDidUpdate = function (e) {
                e.options.arrayPoints !== n.props.options.arrayPoints && n.fillSelectPoint(),
                  e.options.newPoint && (n.fillSelectPoint(), (n.props.options.newPoint = !1));
              }),
              (n.state = { selectCoordinateSpace: [], selectCoordinateSpaceDefault: [] }),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype.render = function () {
              var e = this;
              return u.a.createElement(
                'div',
                null,
                u.a.createElement(
                  'div',
                  { style: { display: 'flex' } },
                  u.a.createElement(d.FormLabel, { width: 15 }, 'Select Point'),
                  u.a.createElement(d.Select, {
                    onChange: function (t) {
                      return e.onChangeSelectCoordinate(t);
                    },
                    allowCustomValue: !1,
                    options: this.state.selectCoordinateSpace,
                    width: 10,
                    value: this.state.selectCoordinateSpaceDefault,
                  })
                ),
                u.a.createElement('br', null),
                u.a.createElement(
                  'div',
                  null,
                  this.state.selectCoordinateSpaceDefault.value
                    ? u.a.createElement(le, {
                        options: this.props.options,
                        onOptionsChange: this.props.onOptionsChange,
                        data: this.props.data,
                        point: this.state.selectCoordinateSpaceDefault.value,
                        callBackToParent: this.callBack,
                        isAddPoint: !1,
                      })
                    : u.a.createElement('p', { style: { textAlign: 'center', fontSize: '20px', marginTop: '50px' } }, 'Data not set')
                )
              );
            }),
            t
          );
        })(u.a.Component),
        Le = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.callBack = function (e, t) {
                var i, a, o, l;
                if (t) {
                  var s = n.props.options.arrayOrientedLinks.slice(),
                    c = 0;
                  try {
                    for (var u = p(s), d = u.next(); !d.done; d = u.next()) {
                      if (d.value.id === e) {
                        s[c] = t;
                        break;
                      }
                      ++c;
                    }
                  } catch (e) {
                    i = { error: e };
                  } finally {
                    try {
                      d && !d.done && (a = u.return) && a.call(u);
                    } finally {
                      if (i) throw i.error;
                    }
                  }
                  n.props.onOptionsChange(r(r({}, n.props.options), { arrayOrientedLinks: s }));
                } else {
                  var h = !1;
                  (s = n.props.options.arrayOrientedLinks.slice()), (c = 0);
                  try {
                    for (var f = p(s), m = f.next(); !m.done; m = f.next()) {
                      if (m.value.id === e) {
                        h = !0;
                        break;
                      }
                      ++c;
                    }
                  } catch (e) {
                    o = { error: e };
                  } finally {
                    try {
                      m && !m.done && (l = f.return) && l.call(f);
                    } finally {
                      if (o) throw o.error;
                    }
                  }
                  h && (s.splice(c, 1), n.props.onOptionsChange(r(r({}, n.props.options), { arrayOrientedLinks: s })), n.fillSelectOrientedLink());
                }
              }),
              (n.onChangeSelectCoordinate = function (e) {
                n.setState({ selectCoordinateSpaceDefault: e });
              }),
              (n.fillSelectOrientedLink = function () {
                var e,
                  t,
                  i,
                  a,
                  o,
                  r = !1,
                  l = [],
                  s = n.props.options.arrayOrientedLinks.slice();
                try {
                  for (var c = p(s), u = c.next(); !u.done; u = c.next()) {
                    var d = (m = u.value).label || m.name;
                    l.push({ value: m, label: d });
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    u && !u.done && (t = c.return) && t.call(c);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                if (n.state.selectCoordinateSpaceDefault)
                  try {
                    for (var h = p(s), f = h.next(); !f.done; f = h.next()) {
                      var m;
                      if ((m = f.value).id === (null === (o = n.state.selectCoordinateSpaceDefault.value) || void 0 === o ? void 0 : o.id)) {
                        r = !0;
                        break;
                      }
                    }
                  } catch (e) {
                    i = { error: e };
                  } finally {
                    try {
                      f && !f.done && (a = h.return) && a.call(h);
                    } finally {
                      if (i) throw i.error;
                    }
                  }
                n.setState(function (e) {
                  return { selectCoordinateSpace: l, selectCoordinateSpaceDefault: r ? e.selectCoordinateSpaceDefault : l.length > 0 ? l[0] : [] };
                });
              }),
              (n.componentDidMount = function () {
                n.fillSelectOrientedLink();
              }),
              (n.componentDidUpdate = function (e) {
                e.options.arrayOrientedLinks !== n.props.options.arrayOrientedLinks && n.fillSelectOrientedLink(),
                  e.options.newOrientedLink && (n.fillSelectOrientedLink(), (n.props.options.newOrientedLink = !1));
              }),
              (n.state = { selectCoordinateSpace: [], selectCoordinateSpaceDefault: [] }),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype.render = function () {
              var e = this;
              return u.a.createElement(
                'div',
                null,
                u.a.createElement(
                  'div',
                  { style: { display: 'flex' } },
                  u.a.createElement(d.FormLabel, { width: 15 }, 'Select Oriented Link'),
                  u.a.createElement(d.Select, {
                    onChange: function (t) {
                      return e.onChangeSelectCoordinate(t);
                    },
                    allowCustomValue: !1,
                    options: this.state.selectCoordinateSpace,
                    width: 10,
                    value: this.state.selectCoordinateSpaceDefault,
                  })
                ),
                u.a.createElement('br', null),
                u.a.createElement(
                  'div',
                  null,
                  this.state.selectCoordinateSpaceDefault.value
                    ? u.a.createElement(de, {
                        options: this.props.options,
                        onOptionsChange: this.props.onOptionsChange,
                        data: this.props.data,
                        orientedLink: this.state.selectCoordinateSpaceDefault.value,
                        callBackToParent: this.callBack,
                        isAddLink: !1,
                      })
                    : u.a.createElement('p', { style: { textAlign: 'center', fontSize: '20px', marginTop: '50px' } }, 'Data not set')
                )
              );
            }),
            t
          );
        })(u.a.Component),
        Oe = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.returnEditMode = function () {
                n.setState({ tabsVariable: [!1, !0] });
              }),
              (n.goToTab = function (e) {
                for (var t = n.state.tabsVariable.slice(), i = t.length, a = 0; a < i; a++) t[a] = a === e;
                n.setState({ tabsVariable: t });
              }),
              (n.contentTabEdit = function () {
                var e = u.a.createElement('div', null);
                return (
                  n.props.isRegion
                    ? (e = u.a.createElement(
                        'div',
                        null,
                        u.a.createElement(Ee, { onOptionsChange: n.props.onOptionsChange, options: n.props.options, data: n.props.data })
                      ))
                    : n.props.isPoint
                    ? (e = u.a.createElement(
                        'div',
                        null,
                        u.a.createElement(Me, { onOptionsChange: n.props.onOptionsChange, options: n.props.options, data: n.props.data })
                      ))
                    : n.props.isLink &&
                      (e = u.a.createElement(
                        'div',
                        null,
                        u.a.createElement(Le, { onOptionsChange: n.props.onOptionsChange, options: n.props.options, data: n.props.data })
                      )),
                  e
                );
              }),
              (n.state = { tabsVariable: [!1, !0] }),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype.render = function () {
              var e = this;
              return this.props.isLink
                ? u.a.createElement(
                    'div',
                    null,
                    u.a.createElement(
                      d.TabsBar,
                      { className: 'page-header tabs', hideBorder: !1 },
                      u.a.createElement(d.Tab, {
                        key: 'tabDisplayCoordinateSpaceEdit',
                        label: 'Edit coordinate space',
                        active: this.state.tabsVariable[1],
                        onChangeTab: function () {
                          return e.goToTab(1);
                        },
                      })
                    ),
                    u.a.createElement(d.TabContent, null, this.state.tabsVariable[1] && this.contentTabEdit())
                  )
                : u.a.createElement(
                    'div',
                    null,
                    u.a.createElement(
                      d.TabsBar,
                      { className: 'page-header tabs', hideBorder: !1 },
                      u.a.createElement(d.Tab, {
                        key: 'tabDisplayCoordinateSpaceAdd',
                        label: 'Add coordinate space',
                        active: this.state.tabsVariable[0],
                        onChangeTab: function () {
                          return e.goToTab(0);
                        },
                      }),
                      u.a.createElement(d.Tab, {
                        key: 'tabDisplayCoordinateSpaceEdit',
                        label: 'Edit coordinate space',
                        active: this.state.tabsVariable[1],
                        onChangeTab: function () {
                          return e.goToTab(1);
                        },
                      })
                    ),
                    u.a.createElement(
                      d.TabContent,
                      null,
                      this.state.tabsVariable[0] &&
                        u.a.createElement(he, {
                          onOptionsChange: this.props.onOptionsChange,
                          options: this.props.options,
                          data: this.props.data,
                          returnEditMode: this.returnEditMode,
                          isRegion: this.props.isRegion,
                          isPoint: this.props.isPoint,
                          isLink: this.props.isLink,
                        }),
                      this.state.tabsVariable[1] && this.contentTabEdit()
                    )
                  );
            }),
            t
          );
        })(u.a.Component),
        Te = function (e) {
          var t = e._onChange,
            n = e.data,
            i = e.defaultValue;
          return u.a.createElement(
            'div',
            null,
            u.a.createElement(d.Select, {
              onChange: function (e) {
                return t(e);
              },
              allowCustomValue: !1,
              options: n,
              width: 30,
              value: i,
            })
          );
        },
        Be = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.callParent = function () {
                var e = n.state,
                  t = e.newPolice,
                  i = e.size,
                  a = e.style,
                  o = t.value || '',
                  l = i,
                  s = a;
                n.props.onOptionsChange(r(r({}, n.props.options), { display: { police: o, size: l, style: s } }));
              }),
              (n.setStateAsyncPolice = function (e) {
                return new Promise(function (t) {
                  n.setState(e, t), n.callParent();
                });
              }),
              (n.setStateAsyncsize = function (e) {
                return new Promise(function (t) {
                  n.setState(e, t), n.callParent();
                });
              }),
              (n.setStateAsyncStyle = function (e) {
                return new Promise(function (t) {
                  n.setState(e, t), n.callParent();
                });
              }),
              (n.handleChangesize = function (e) {
                return l(n, void 0, void 0, function () {
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, this.setStateAsyncsize({ size: e.target.value })];
                      case 1:
                        return t.sent(), this.callParent(), [2];
                    }
                  });
                });
              }),
              (n.onChangePolice = function (e) {
                return l(n, void 0, void 0, function () {
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, this.setStateAsyncPolice({ newPolice: e })];
                      case 1:
                        return t.sent(), this.callParent(), [2];
                    }
                  });
                });
              }),
              (n.onImageChanged = function (e) {
                var t = n.props.options.baseMap,
                  i = e.target.value;
                (t.image = i), n.props.onOptionsChange(r(r({}, n.props.options), { baseMap: t }));
              }),
              (n.onChangeSwitchModeSVG = function () {
                var e = n.props,
                  t = e.options,
                  i = e.onOptionsChange,
                  a = t.baseMap;
                (a.modeSVG = !a.modeSVG), i(r(r({}, t), { baseMap: a }));
              }),
              (n.onChangeHeightBaseMap = function (e) {
                n.props.options.updateOnlyInitialSpace = !1;
                var t = n.props,
                  i = t.options,
                  a = t.onOptionsChange,
                  o = i.baseMap;
                (o.height = e.target.value), a(r(r({}, i), { baseMap: o }));
              }),
              (n.onChangeWidthBaseMap = function (e) {
                n.props.options.updateOnlyInitialSpace = !1;
                var t = n.props,
                  i = t.options,
                  a = t.onOptionsChange,
                  o = i.baseMap;
                (o.width = e.target.value), a(r(r({}, i), { baseMap: o }));
              }),
              (n.saveStyleData = function (e) {
                n.setStateAsyncStyle({ style: e });
              }),
              (n.uploadImage = function (e) {
                var t,
                  i = new FileReader(),
                  a = e.target.files[0],
                  o = a.name.split('.')[1];
                'jpg' === o || 'png' === o || 'gif' === o ? i.readAsDataURL(a) : i.readAsText(a),
                  (i.onload = function () {
                    t = i.result;
                  }),
                  setTimeout(function () {
                    var e = n.props.options.baseMap;
                    'svg' === o
                      ? ((e.image = t), (e.modeSVG = !0), (e.isUploaded = !0), (e.nameUploadedImage = a.name))
                      : ('jpg' !== o && 'png' !== o && 'gif' !== o) ||
                        ((e.image = t), (e.modeSVG = !1), (e.isUploaded = !0), (e.nameUploadedImage = a.name)),
                      n.props.onOptionsChange(r(r({}, n.props.options), { baseMap: e }));
                  }, 1e3);
              }),
              (n.defineValueImage = function () {
                var e = '';
                return n.props.options.baseMap.isUploaded || (e = n.props.options.baseMap.image || ''), e;
              }),
              (n.state = {
                newPolice: { value: n.props.options.display.police, label: n.props.options.display.police },
                size: n.props.options.display.size,
                style: n.props.options.display.style,
                imageUploaded: '',
              }),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype.render = function () {
              var e = this.props.options,
                t = n(2);
              return u.a.createElement(
                'div',
                null,
                u.a.createElement(
                  'div',
                  { style: { display: 'flex', marginBottom: 1 } },
                  u.a.createElement(d.FormLabel, { width: 15 }, 'Police'),
                  u.a.createElement(Te, {
                    _onChange: this.onChangePolice,
                    data: [
                      { value: 'Helvetica', label: 'Helvetica' },
                      { value: 'Arial', label: 'Arial' },
                      { value: 'sans-serif', label: 'sans-serif' },
                      { value: 'mono', label: 'mono' },
                    ],
                    defaultValue: this.state.newPolice,
                  })
                ),
                u.a.createElement(d.FormField, {
                  label: t.textDefault.size,
                  labelWidth: 15,
                  inputWidth: 30,
                  required: !0,
                  value: this.state.size,
                  onChange: this.handleChangesize,
                }),
                u.a.createElement(H, { oldStyle: this.state.style, saveParent: this.saveStyleData }),
                u.a.createElement(
                  'div',
                  { style: { display: 'flex' } },
                  u.a.createElement(d.FormLabel, { width: 15 }, 'Use SVG'),
                  u.a.createElement(d.Switch, { labelClass: '', label: '', checked: e.baseMap.modeSVG, onChange: this.onChangeSwitchModeSVG })
                ),
                u.a.createElement(
                  'div',
                  null,
                  u.a.createElement(d.FormField, {
                    label: 'Image',
                    labelWidth: 15,
                    inputWidth: 30,
                    placeholder: 'URL',
                    type: 'text',
                    onChange: this.onImageChanged,
                    value: this.defineValueImage(),
                  }),
                  u.a.createElement(
                    'div',
                    { style: { display: 'flex', margin: '2px 0' } },
                    u.a.createElement(d.FormLabel, { width: 15 }, 'Upload Image'),
                    u.a.createElement('input', {
                      style: { border: '1px solid #262628', borderRadius: '0 3px 3px 0', width: '416px' },
                      type: 'file',
                      name: 'file',
                      onChange: this.uploadImage,
                    }),
                    u.a.createElement(
                      'p',
                      { style: { margin: '10px 0 0 10px', fontSize: '10px' } },
                      this.props.options.baseMap.nameUploadedImage || ''
                    )
                  ),
                  u.a.createElement(d.FormField, {
                    label: 'Width',
                    labelWidth: 15,
                    inputWidth: 30,
                    type: 'text',
                    onChange: this.onChangeWidthBaseMap,
                    value: e.baseMap.width || '',
                  }),
                  u.a.createElement(d.FormField, {
                    label: 'Height',
                    labelWidth: 15,
                    inputWidth: 30,
                    type: 'text',
                    onChange: this.onChangeHeightBaseMap,
                    value: e.baseMap.height || '',
                  })
                )
              );
            }),
            t
          );
        })(u.a.Component),
        Ae = function (e) {
          var t = e.split('#'),
            n = { x: '', y: '' };
          return (n.x = t[0].split('|')[1]), (n.y = t[1].split('|')[1]), n;
        },
        De = function (e) {
          var t = e.split('#'),
            n = { xMin: '', xMax: '', yMin: '', yMax: '' };
          return (n.xMin = t[0].split('|')[1]), (n.xMax = t[1].split('|')[1]), (n.yMin = t[2].split('|')[1]), (n.yMax = t[3].split('|')[1]), n;
        },
        we = function (e) {
          var t = e.split('#'),
            n = [];
          return (
            t.forEach(function (e) {
              var t = e.split('|');
              n.push({ label: t[0], value: t[1] });
            }),
            n
          );
        },
        Pe = function (e) {
          if (e.length > 0) {
            var t = e.split('#'),
              n = [];
            return (
              t.forEach(function (e) {
                var t = e.split('|');
                n.push({ label: t[0], value: t[1] });
              }),
              n
            );
          }
          return [];
        },
        je = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.result = []),
              (n.onChangeSelectQuerryID = function (e, t) {
                var i = n.props.options.saveGabaritFile;
                (i[t].queryID = e.value), n.props.onOptionsChange(r(r({}, n.props.options), { saveGabaritFile: i }));
              }),
              (n.onToggleSelectUrl = function (e) {
                n.setState({ collapseSelectURL: e });
              }),
              (n.UrlValidator = function (e) {
                var t = !0;
                for (var i in n.props.options.saveGabaritURL)
                  if (n.props.options.saveGabaritURL[i] === e) {
                    t = !1;
                    break;
                  }
                return t;
              }),
              (n.GabaritValidator = function (e) {
                var t = !0;
                return (
                  n.props.options.saveGabaritFile.forEach(function (n) {
                    n.fileName === e && (console.log('LoadGabaritFileReject'), (t = !1));
                  }),
                  t
                );
              }),
              (n.loadGabarit = function (e, t) {
                var i = t.split('/');
                if (n.GabaritValidator(i[i.length - 1])) {
                  var a = {
                    queryID: 'null',
                    fileName: i[i.length - 1],
                    loaded: !1,
                    globalGabarit: e.global,
                    templateGabaritPoint: [],
                    templateGabaritRegion: [],
                    templateGabaritLink: [],
                    templateGabaritPointDefault: [],
                    templateGabaritRegionDefault: [],
                    templateGabaritLinkDefault: [],
                  };
                  e.templates.forEach(function (e) {
                    'point' === e.type && a.templateGabaritPoint.push(e),
                      'region' === e.type && a.templateGabaritRegion.push(e),
                      'link' === e.type && a.templateGabaritLink.push(e);
                  }),
                    e.default.templates.forEach(function (e) {
                      'point' === e.type && a.templateGabaritPointDefault.push(e),
                        'region' === e.type && a.templateGabaritRegionDefault.push(e),
                        'link' === e.type && a.templateGabaritLinkDefault.push(e);
                    }),
                    n.props.options.saveGabaritFile.push(a);
                }
              }),
              (n.fetchUrl = function (e) {
                return l(n, void 0, void 0, function () {
                  var t;
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return n.trys.push([0, 3, , 4]), {}, [4, fetch(e)];
                      case 1:
                        return [4, n.sent().json()];
                      case 2:
                        return [2, n.sent()];
                      case 3:
                        return (t = n.sent()), console.error(t), [3, 4];
                      case 4:
                        return [2, null];
                    }
                  });
                });
              }),
              (n.loadDefaultGabarit = function (e, t) {
                return l(n, void 0, void 0, function () {
                  var n, i;
                  return s(this, function (a) {
                    return (
                      (n = t.split('/')),
                      (i = {
                        queryID: 'null',
                        fileName: n[n.length - 1],
                        loaded: !1,
                        globalGabarit: e.global,
                        templateGabaritPoint: [],
                        templateGabaritRegion: [],
                        templateGabaritLink: [],
                        templateGabaritPointDefault: [],
                        templateGabaritRegionDefault: [],
                        templateGabaritLinkDefault: [],
                      }),
                      e.default.templates.forEach(function (e) {
                        'point' === e.type && i.templateGabaritPointDefault.push(e),
                          'region' === e.type && i.templateGabaritRegionDefault.push(e),
                          'link' === e.type && i.templateGabaritLinkDefault.push(e);
                      }),
                      (this.props.options.gabaritDefault = i),
                      [2]
                    );
                  });
                });
              }),
              (n.fetchGabarit = function () {
                n.props.options.saveGabaritURL.forEach(function (e) {
                  return l(n, void 0, void 0, function () {
                    var t, n;
                    return s(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return i.trys.push([0, 3, , 4]), (t = {}), [4, fetch(e)];
                        case 1:
                          return [4, i.sent().json()];
                        case 2:
                          return (t = i.sent()), this.loadGabarit(t, e), [3, 4];
                        case 3:
                          return (n = i.sent()), console.error(n), [3, 4];
                        case 4:
                          return [2];
                      }
                    });
                  });
                });
              }),
              (n.addFilterDynamic = function (e, t, n) {
                var i = {
                  key: e.key,
                  unit: e.unit,
                  format: e.format,
                  keyValue: e.keyValue,
                  filter: JSON.parse(JSON.stringify(e.filter)),
                  expr: e.expr,
                  returnQuery: e.returnQuery,
                  manageValue: e.manageValue,
                };
                return t.x !== n.x && i.filter.push({ label: t.x, value: n.x }), t.y !== n.y && i.filter.push({ label: t.y, value: n.y }), i;
              }),
              (n.checkCoordinateFilterPoint = function (e, t) {
                var i;
                k(e, t),
                  null === (i = e.mainMetric.returnQuery) ||
                    void 0 === i ||
                    i.forEach(function (t) {
                      M(t, e.mainMetric) ? n.props.options.arrayPoints.push(e) : console.log('Filter not found -> no load');
                    });
              }),
              (n.checkCoordinateFilterLink = function (e, t) {
                var i;
                I(e, t),
                  null === (i = e.mainMetric.returnQuery) ||
                    void 0 === i ||
                    i.forEach(function (t) {
                      M(t, e.mainMetric) ? n.props.options.arrayOrientedLinks.push(e) : console.log('Filter not found -> no load');
                    });
              }),
              (n.onToggleGabaritUrl = function (e) {
                n.setState({ collapseSelectURL: e });
              }),
              (n.onToggleGabaritDefault = function (e) {
                n.setState({ collapseGabaritDefault: e });
              }),
              (n.onToggleGabarit = function (e) {
                n.setState({ collapseGabarit: e });
              }),
              (n.onGabaritUrlChanged = function (e) {
                var t;
                (t = e.currentTarget.value), n.props.onOptionsChange(r(r({}, n.props.options), { gabaritUrlInput: t }));
              }),
              (n.onGabaritDefaultUrlChanged = function (e) {
                var t;
                (t = e.currentTarget.value), n.props.onOptionsChange(r(r({}, n.props.options), { saveGabaritDefaultUrl: t }));
              }),
              (n.onGabaritListUrlChanged = function (e) {
                var t = n.props.options.saveGabaritURL.slice();
                (t[parseInt(e.currentTarget.id, 10)] = e.currentTarget.value),
                  (n.props.options.saveGabaritURL = t),
                  n.props.onOptionsChange(r(r({}, n.props.options), { saveGabaritURL: n.props.options.saveGabaritURL }));
              }),
              (n.addGabaritUrlInput = function (e) {
                var t = !0;
                n.props.options.saveGabaritURL.forEach(function (e) {
                  n.props.options.gabaritUrlInput === e && (t = !1);
                }),
                  !0 === t &&
                    (n.props.options.saveGabaritURL.push(n.props.options.gabaritUrlInput),
                    (n.props.options.gabaritUrlInput = ''),
                    n.props.onOptionsChange(r(r({}, n.props.options), { saveGabaritURL: n.props.options.saveGabaritURL })));
              }),
              (n.addGabaritDefaultUrlInput = function (e) {
                return l(n, void 0, void 0, function () {
                  var e, t, n;
                  return s(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return (
                          i.trys.push([0, 3, , 4]),
                          (e = this.props.options.saveGabaritDefaultUrl),
                          (t = {}),
                          [4, fetch(this.props.options.saveGabaritDefaultUrl)]
                        );
                      case 1:
                        return [4, i.sent().json()];
                      case 2:
                        return (t = i.sent()), this.loadDefaultGabarit(t, e), [3, 4];
                      case 3:
                        return (n = i.sent()), console.log('Default gabarit error:'), console.error(n), [3, 4];
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (n.gabaritDeletUrl = function (e) {
                n.props.options.saveGabaritURL.splice(
                  n.props.options.saveGabaritURL.findIndex(function (t) {
                    return t === n.props.options.saveGabaritURL[parseInt(e.currentTarget.id, 10)];
                  }),
                  1
                ),
                  n.props.onOptionsChange(r(r({}, n.props.options), { saveGabaritURL: n.props.options.saveGabaritURL }));
              }),
              (n.gabaritDeletFile = function (e) {
                n.props.options.saveGabaritFile.splice(
                  n.props.options.saveGabaritFile.findIndex(function (t) {
                    return t === n.props.options.saveGabaritFile[parseInt(e.currentTarget.id, 10)];
                  }),
                  1
                ),
                  n.props.onOptionsChange(r(r({}, n.props.options), { saveGabaritFile: n.props.options.saveGabaritFile }));
              }),
              (n.gabaritDeletFileDefault = function (e) {
                (n.props.options.gabaritDefault = {
                  queryID: 'A',
                  fileName: '',
                  loaded: !1,
                  globalGabarit: {
                    lowerLimit: [{ id: 0, lowerLimitMin: '0', lowerLimitMax: '0', backColor: 'blue', borderColor: 'red', sizeBorder: '1px' }],
                    textObject: {
                      value: 'default',
                      isTextTooltip: !1,
                      colorBack: 'blue',
                      colorText: 'black',
                      style: { bold: !1, italic: !1, underline: !1 },
                      generateObjectText: !1,
                      valueGenerateObjectText: {
                        legendElement: 'default',
                        numericFormatElement: 'default',
                        unit: 'default',
                        displayObjectInTooltip: !1,
                        addColorTextElement: !1,
                        colorTextElement: 'black',
                        addColorBackElement: !1,
                        colorBackElement: 'white',
                      },
                      generateAuxiliaryElement: {
                        legendElement: 'default',
                        numericFormatElement: 'default',
                        unit: 'default',
                        displayObjectInTooltip: !1,
                        addColorTextElement: !1,
                        colorTextElement: 'black',
                        addColorBackElement: !1,
                        colorBackElement: 'white',
                      },
                    },
                    defaultColor: 'black',
                    colorMode: !0,
                    traceBack: !0,
                    traceBorder: !0,
                  },
                  templateGabaritPoint: [],
                  templateGabaritRegion: [],
                  templateGabaritLink: [],
                  templateGabaritPointDefault: [],
                  templateGabaritRegionDefault: [],
                  templateGabaritLinkDefault: [],
                }),
                  n.props.onOptionsChange(r(r({}, n.props.options), { gabaritDefault: n.props.options.gabaritDefault }));
              }),
              (n.checkLoaderGabarit = function (e) {
                n.props.options.saveGabaritFile[parseInt(e.currentTarget.id, 10)].loaded
                  ? console.log('loadGabaritReject')
                  : n.loaderGabarit(n.props.options.saveGabaritFile[parseInt(e.currentTarget.id, 10)], parseInt(e.currentTarget.id, 10));
              }),
              (n.loaderGabarit = function (e, t) {
                var i,
                  a,
                  o,
                  r,
                  l,
                  s,
                  c,
                  u,
                  d,
                  h,
                  v,
                  x = [],
                  k = [],
                  C = [],
                  I = [],
                  S = [],
                  E = [],
                  M = [],
                  L = [],
                  T = [],
                  B = [],
                  A = [],
                  D = [],
                  w = [],
                  P = [],
                  j = [],
                  G = [],
                  V = [],
                  R = parseInt(n.props.options.baseMap.width, 10),
                  F = parseInt(n.props.options.coordinateSpaceInitial.coordinate.xMin, 10),
                  U = parseInt(n.props.options.coordinateSpaceInitial.coordinate.xMax, 10) - F,
                  z = parseInt(n.props.options.baseMap.height, 10),
                  Y = parseInt(n.props.options.coordinateSpaceInitial.coordinate.yMin, 10),
                  W = parseInt(n.props.options.coordinateSpaceInitial.coordinate.yMax, 10) - Y,
                  X = e;
                (l = Boolean(X.globalGabarit.colorMode)),
                  (s = Boolean(X.globalGabarit.traceBack)),
                  (c = Boolean(X.globalGabarit.traceBorder)),
                  (h = {
                    legendElement: X.globalGabarit.textObject.valueGenerateObjectText.legendElement,
                    numericFormatElement: X.globalGabarit.textObject.valueGenerateObjectText.numericFormatElement,
                    unit: X.globalGabarit.textObject.valueGenerateObjectText.unit,
                    displayObjectInTooltip: Boolean(X.globalGabarit.textObject.valueGenerateObjectText.displayObjectInTooltip),
                    addColorTextElement: Boolean(X.globalGabarit.textObject.valueGenerateObjectText.addColorTextElement),
                    colorTextElement: X.globalGabarit.textObject.valueGenerateObjectText.colorTextElement,
                    addColorBackElement: Boolean(X.globalGabarit.textObject.valueGenerateObjectText.addColorBackElement),
                    colorBackElement: X.globalGabarit.textObject.valueGenerateObjectText.colorBackElement,
                  }).unit ||
                    (h = {
                      legendElement: n.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.legendElement,
                      numericFormatElement: n.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.numericFormatElement,
                      unit: n.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.unit,
                      displayObjectInTooltip: Boolean(
                        n.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.displayObjectInTooltip
                      ),
                      addColorTextElement: Boolean(
                        n.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.addColorTextElement
                      ),
                      colorTextElement: n.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.colorTextElement,
                      addColorBackElement: Boolean(
                        n.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.addColorBackElement
                      ),
                      colorBackElement: n.props.options.gabaritDefault.globalGabarit.textObject.valueGenerateObjectText.colorBackElement,
                    }),
                  (v = {
                    legendElement: X.globalGabarit.textObject.generateAuxiliaryElement.legendElement,
                    numericFormatElement: X.globalGabarit.textObject.generateAuxiliaryElement.numericFormatElement,
                    unit: X.globalGabarit.textObject.generateAuxiliaryElement.unit,
                    displayObjectInTooltip: Boolean(X.globalGabarit.textObject.generateAuxiliaryElement.displayObjectInTooltip),
                    addColorTextElement: Boolean(X.globalGabarit.textObject.generateAuxiliaryElement.addColorTextElement),
                    colorTextElement: X.globalGabarit.textObject.generateAuxiliaryElement.colorTextElement,
                    addColorBackElement: Boolean(X.globalGabarit.textObject.generateAuxiliaryElement.addColorBackElement),
                    colorBackElement: X.globalGabarit.textObject.generateAuxiliaryElement.colorBackElement,
                  }).unit ||
                    (v = {
                      legendElement: n.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.legendElement,
                      numericFormatElement: n.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.numericFormatElement,
                      unit: n.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.unit,
                      displayObjectInTooltip: Boolean(
                        n.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.displayObjectInTooltip
                      ),
                      addColorTextElement: Boolean(
                        n.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.addColorTextElement
                      ),
                      colorTextElement: n.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.colorTextElement,
                      addColorBackElement: Boolean(
                        n.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.addColorBackElement
                      ),
                      colorBackElement: n.props.options.gabaritDefault.globalGabarit.textObject.generateAuxiliaryElement.colorBackElement,
                    }),
                  (d = {
                    bold: Boolean(X.globalGabarit.textObject.style.bold),
                    italic: Boolean(X.globalGabarit.textObject.style.italic),
                    underline: Boolean(X.globalGabarit.textObject),
                  }).bold ||
                    (d = {
                      bold: Boolean(n.props.options.gabaritDefault.globalGabarit.textObject.style.bold),
                      italic: Boolean(n.props.options.gabaritDefault.globalGabarit.textObject.style.italic),
                      underline: Boolean(n.props.options.gabaritDefault.globalGabarit.textObject.style.underline),
                    }),
                  (u = new b(
                    X.globalGabarit.textObject.value,
                    Boolean(X.globalGabarit.textObject.isTextTooltip),
                    X.globalGabarit.textObject.colorBack,
                    X.globalGabarit.textObject.colorText,
                    d,
                    Boolean(X.globalGabarit.textObject.generateObjectText),
                    h,
                    v
                  )).value ||
                    (u = new b(
                      n.props.options.gabaritDefault.globalGabarit.textObject.value,
                      Boolean(n.props.options.gabaritDefault.globalGabarit.textObject.isTextTooltip),
                      n.props.options.gabaritDefault.globalGabarit.textObject.colorBack,
                      n.props.options.gabaritDefault.globalGabarit.textObject.colorText,
                      d,
                      Boolean(n.props.options.gabaritDefault.globalGabarit.textObject.generateObjectText),
                      h,
                      v
                    )),
                  X.templateGabaritPoint.forEach(function (e, t) {
                    'false' === e.labelfix.toString()
                      ? (k.push(Ae(e.xylabel)),
                        (k[t].y && k[t].x) || (k[t] = Ae(X.templateGabaritPointDefault[0].xylabel)),
                        (k[t].y && k[t].x) || (k[t] = Ae(n.props.options.gabaritDefault.templateGabaritPointDefault[0].xylabel)))
                      : (k.push(Ae(e.xylabelfix)),
                        (k[t].y && k[t].x) || (k[t] = Ae(X.templateGabaritPointDefault[0].xylabelfix)),
                        (k[t].y && k[t].x) || (k[t] = Ae(n.props.options.gabaritDefault.templateGabaritPointDefault[0].xylabelfix))),
                      x.push(Pe(e.filtered)),
                      x[t][0] || (x[t] = Pe(X.templateGabaritPointDefault[0].filtered)),
                      x[t][0] || (x[t] = Pe(n.props.options.gabaritDefault.templateGabaritPointDefault[0].filtered)),
                      C.push(e.name),
                      C[t] || (C[t] = X.templateGabaritPointDefault[0].name),
                      C[t] || (C[t] = n.props.options.gabaritDefault.templateGabaritPointDefault[0].name),
                      I.push(e.meta),
                      I[t] || (I[t] = X.templateGabaritPointDefault[0].meta),
                      I[t] || (I[t] = n.props.options.gabaritDefault.templateGabaritPointDefault[0].meta),
                      S.push(e.label),
                      S[t] || (S[t] = X.templateGabaritPointDefault[0].label),
                      S[t] || (S[t] = n.props.options.gabaritDefault.templateGabaritPointDefault[0].label),
                      M.push({
                        key: e.mainMetric.key,
                        unit: e.mainMetric.unit,
                        format: e.mainMetric.format,
                        keyValue: '',
                        filter: x[t],
                        refId: X.queryID,
                        expr: '',
                        returnQuery: [],
                        manageValue: e.mainMetric.manageValue,
                      }),
                      M[t].unit ||
                        (M[t] = {
                          key: X.templateGabaritPointDefault[0].mainMetric.key,
                          unit: X.templateGabaritPointDefault[0].mainMetric.unit,
                          format: X.templateGabaritPointDefault[0].mainMetric.format,
                          keyValue: '',
                          filter: x[t],
                          refId: X.queryID,
                          expr: '',
                          returnQuery: [],
                          manageValue: X.templateGabaritPointDefault[0].mainMetric.manageValue,
                        }),
                      M[t].unit ||
                        (M[t] = {
                          key: n.props.options.gabaritDefault.templateGabaritPointDefault[0].mainMetric.key,
                          unit: n.props.options.gabaritDefault.templateGabaritPointDefault[0].mainMetric.unit,
                          format: n.props.options.gabaritDefault.templateGabaritPointDefault[0].mainMetric.format,
                          keyValue: '',
                          filter: x[t],
                          refId: X.queryID,
                          expr: '',
                          returnQuery: [],
                          manageValue: n.props.options.gabaritDefault.templateGabaritPointDefault[0].mainMetric.manageValue,
                        }),
                      M[t].refId || (M[t].refId = 'A'),
                      e.metrics.forEach(function (e) {
                        L[t].push({
                          key: e.key,
                          unit: e.unit,
                          format: e.format,
                          keyValue: '',
                          filter: x[t],
                          refId: X.queryID,
                          expr: '',
                          returnQuery: [],
                          manageValue: e.manageValue,
                        });
                      }),
                      B.push(e.valueMetric),
                      A.push({ label: e.drawGraphicMarker.label, value: e.drawGraphicMarker.value }),
                      (A[t].label && A[t].label) ||
                        (A[t] = {
                          label: X.templateGabaritPointDefault[0].drawGraphicMarker.label,
                          value: X.templateGabaritPointDefault[0].drawGraphicMarker.value,
                        }),
                      (A[t].label && A[t].label) ||
                        (A[t] = {
                          label: n.props.options.gabaritDefault.templateGabaritPointDefault[0].drawGraphicMarker.label,
                          value: n.props.options.gabaritDefault.templateGabaritPointDefault[0].drawGraphicMarker.value,
                        }),
                      D.push(e.shape),
                      D[t] || (D[t] = X.templateGabaritPointDefault[0].shape),
                      D[t] || (D[t] = n.props.options.gabaritDefault.templateGabaritPointDefault[0].shape),
                      w.push(e.sizeWidth),
                      w[t] || (w[t] = X.templateGabaritPointDefault[0].sizeWidth),
                      w[t] || (w[t] = n.props.options.gabaritDefault.templateGabaritPointDefault[0].sizeWidth),
                      P.push(e.sizeHeight),
                      P[t] || (P[t] = X.templateGabaritPointDefault[0].sizeHeight),
                      P[t] || (P[t] = n.props.options.gabaritDefault.templateGabaritPointDefault[0].sizeHeight),
                      0 !== e.color.length ? j.push(e.color) : j.push(X.globalGabarit.defaultColor),
                      j[t] || (j[t] = n.props.options.gabaritDefault.templateGabaritPointDefault[0].color),
                      G.push(e.associateOrientedLinksIn),
                      G[t] || (G[t] = X.templateGabaritPointDefault[0].associateOrientedLinksIn),
                      G[t] || (G[t] = n.props.options.gabaritDefault.templateGabaritPointDefault[0].associateOrientedLinksIn),
                      V.push(e.associateOrientedLinksOut),
                      V[t] || (V[t] = X.templateGabaritPointDefault[0].associateOrientedLinksOut),
                      V[t] || (V[t] = n.props.options.gabaritDefault.templateGabaritPointDefault[0].associateOrientedLinksOut),
                      ((o = { label: e.positionParameter.tooltipA, value: e.positionParameter.tooltipA }).label && o.value) ||
                        (o = {
                          label: X.templateGabaritPointDefault[0].positionParameter.tooltipA,
                          value: X.templateGabaritPointDefault[0].positionParameter.tooltipA,
                        }),
                      (o.label && o.value) ||
                        (o = {
                          label: n.props.options.gabaritDefault.templateGabaritPointDefault[0].positionParameter.tooltipA,
                          value: n.props.options.gabaritDefault.templateGabaritPointDefault[0].positionParameter.tooltipA,
                        }),
                      ((r = { label: e.positionParameter.tooltipB, value: e.positionParameter.tooltipB }).label && r.value) ||
                        (r = {
                          label: X.templateGabaritPointDefault[0].positionParameter.tooltipB,
                          value: X.templateGabaritPointDefault[0].positionParameter.tooltipB,
                        }),
                      (r.label && r.value) ||
                        (r = {
                          label: n.props.options.gabaritDefault.templateGabaritPointDefault[0].positionParameter.tooltipB,
                          value: n.props.options.gabaritDefault.templateGabaritPointDefault[0].positionParameter.tooltipB,
                        }),
                      ((i = Ae(e.positionParameter.xylabelA)).x && i.y) ||
                        (i = {
                          x: X.templateGabaritPointDefault[0].positionParameter.xylabelA,
                          y: X.templateGabaritPointDefault[0].positionParameter.xylabelA,
                        }),
                      (i.x && i.y) ||
                        (i = {
                          x: n.props.options.gabaritDefault.templateGabaritPointDefault[0].positionParameter.xylabelA,
                          y: n.props.options.gabaritDefault.templateGabaritPointDefault[0].positionParameter.xylabelA,
                        }),
                      ((a = Ae(e.positionParameter.xylabelB)).x && a.y) ||
                        (a = {
                          x: X.templateGabaritPointDefault[0].positionParameter.xylabelB,
                          y: X.templateGabaritPointDefault[0].positionParameter.xylabelB,
                        }),
                      (a.x && a.y) ||
                        (a = {
                          x: n.props.options.gabaritDefault.templateGabaritPointDefault[0].positionParameter.xylabelB,
                          y: n.props.options.gabaritDefault.templateGabaritPointDefault[0].positionParameter.xylabelB,
                        }),
                      E.push(new m(i.x, i.y, a.x, a.y, o, r)),
                      T.push(new y(e.linkURL.followLink, e.linkURL.hoveringTooltipLink, e.linkURL.hoveringTooltipText)),
                      T[t].followLink ||
                        (T[t] = new y(
                          X.templateGabaritPointDefault[0].linkURL.followLink,
                          X.templateGabaritPointDefault[0].linkURL.hoveringTooltipLink,
                          X.templateGabaritPointDefault[0].linkURL.hoveringTooltipText
                        )),
                      T[t].followLink ||
                        (T[t] = new y(
                          n.props.options.gabaritDefault.templateGabaritPointDefault[0].linkURL.followLink,
                          n.props.options.gabaritDefault.templateGabaritPointDefault[0].linkURL.hoveringTooltipLink,
                          n.props.options.gabaritDefault.templateGabaritPointDefault[0].linkURL.hoveringTooltipText
                        ));
                  });
                var N = 0;
                n.props.options.arrayPoints.forEach(function (e) {
                  N++;
                });
                var _ = [],
                  Q = [],
                  q = [];
                k.forEach(function (e, t) {
                  'false' === X.templateGabaritPoint[t].labelfix.toString() &&
                    (n.props.data.series.forEach(function (n) {
                      var i, a, o;
                      if (n.refId === M[t].refId) {
                        var r =
                          (null === (o = n.name) || void 0 === o
                            ? void 0
                            : o.split(',').map(function (e) {
                                return e.replace(/[\"{}]/gm, '');
                              })) || [];
                        try {
                          for (var l = p(r), s = l.next(); !s.done; s = l.next()) {
                            var c = s.value;
                            if (r && r.length > 0) {
                              var u = c.split('=');
                              u[0] === e.x && _.push(u[1]), u[0] === e.y && Q.push(u[1]);
                            }
                          }
                        } catch (e) {
                          i = { error: e };
                        } finally {
                          try {
                            s && !s.done && (a = l.return) && a.call(l);
                          } finally {
                            if (i) throw i.error;
                          }
                        }
                      }
                    }),
                    _.length > Q.length
                      ? _.forEach(function (t, n) {
                          _[n] || (_[n] = e.x), Q[n] || (Q[n] = e.y);
                        })
                      : Q.forEach(function (t, n) {
                          _[n] || (_[n] = e.x), Q[n] || (Q[n] = e.y);
                        })),
                    _.length > 0
                      ? (q.push([]),
                        _.forEach(function (e, n) {
                          q[t].push({ x: _[n], y: Q[n] });
                        }))
                      : (q[t] = []);
                }),
                  q.forEach(function (e) {
                    var t, i;
                    if (e.length > 0) {
                      var a = function (e) {
                        x.forEach(function (t, i) {
                          var a = (((parseInt(e.x, 10) - F) / U) * R).toString(),
                            o = (((parseInt(e.y, 10) - Y) / W) * z).toString();
                          if (L.length > 0) {
                            var r = new f(
                              N + 1,
                              T[i],
                              I[i],
                              X.globalGabarit.lowerLimit,
                              S[i] + '_' + N,
                              u,
                              n.addFilterDynamic(M[i], k[i], e),
                              L[i],
                              l,
                              s,
                              c,
                              E[i],
                              C[i] + '_' + N,
                              B[i],
                              A[i],
                              D[i],
                              w[i],
                              P[i],
                              '',
                              e.x,
                              e.y,
                              j[i],
                              G[i],
                              V[i],
                              U.toString(),
                              W.toString(),
                              a,
                              o
                            );
                            N++, n.checkCoordinateFilterPoint(r, n.props);
                          } else {
                            r = new f(
                              N + 1,
                              T[i],
                              I[i],
                              X.globalGabarit.lowerLimit,
                              S[i] + '_' + N,
                              u,
                              n.addFilterDynamic(M[i], k[i], e),
                              [],
                              l,
                              s,
                              c,
                              E[i],
                              C[i] + '_' + N,
                              B[i],
                              A[i],
                              D[i],
                              w[i],
                              P[i],
                              '',
                              e.x,
                              e.y,
                              j[i],
                              G[i],
                              V[i],
                              U.toString(),
                              W.toString(),
                              a,
                              o
                            );
                            N++, n.checkCoordinateFilterPoint(r, n.props);
                          }
                        });
                      };
                      try {
                        for (var o = p(e), r = o.next(); !r.done; r = o.next()) {
                          a(r.value);
                        }
                      } catch (e) {
                        t = { error: e };
                      } finally {
                        try {
                          r && !r.done && (i = o.return) && i.call(o);
                        } finally {
                          if (t) throw t.error;
                        }
                      }
                    } else
                      x.forEach(function (e, t) {
                        var i = (((parseInt(k[t].x, 10) - F) / U) * R).toString(),
                          a = (((parseInt(k[t].y, 10) - Y) / W) * z).toString();
                        if (L.length > 0) {
                          var o = new f(
                            N + 1,
                            T[t],
                            [],
                            X.globalGabarit.lowerLimit,
                            S[t] + '_' + N,
                            u,
                            M[t],
                            L[t],
                            l,
                            s,
                            c,
                            E[t],
                            C[t] + '_' + N,
                            B[t],
                            A[t],
                            D[t],
                            w[t],
                            P[t],
                            '',
                            k[t].x,
                            k[t].y,
                            j[t],
                            G[t],
                            V[t],
                            U.toString(),
                            W.toString(),
                            i,
                            a
                          );
                          N++, n.checkCoordinateFilterPoint(o, n.props);
                        } else {
                          o = new f(
                            N + 1,
                            T[t],
                            [],
                            X.globalGabarit.lowerLimit,
                            S[t] + '_' + N,
                            u,
                            M[t],
                            [],
                            l,
                            s,
                            c,
                            E[t],
                            C[t] + '_' + N,
                            B[t],
                            A[t],
                            D[t],
                            w[t],
                            P[t],
                            '',
                            k[t].x,
                            k[t].y,
                            j[t],
                            G[t],
                            V[t],
                            U.toString(),
                            W.toString(),
                            i,
                            a
                          );
                          N++, n.checkCoordinateFilterPoint(o, n.props);
                        }
                      });
                  });
                var H = [],
                  K = [],
                  J = [],
                  Z = [],
                  $ = [],
                  ee = [],
                  te = [],
                  ne = [],
                  ie = [],
                  ae = [],
                  oe = [],
                  re = [],
                  le = [],
                  se = [],
                  pe = [],
                  ce = [],
                  ue = [],
                  de = [],
                  he = [],
                  fe = [],
                  me = [],
                  ge = [],
                  be = [],
                  ye = [];
                X.templateGabaritLink.forEach(function (e, t) {
                  'false' === e.labelfix.toString()
                    ? (K.push(Ae(e.xylabelA)),
                      (K[t].x && K[t].y) || (K[t] = Ae(X.templateGabaritLinkDefault[0].xylabelA)),
                      (K[t].x && K[t].y) || (K[t] = Ae(n.props.options.gabaritDefault.templateGabaritLinkDefault[0].xylabelA)),
                      J.push(Ae(e.xylabelB)),
                      (J[t].x && J[t].y) || (J[t] = Ae(X.templateGabaritLinkDefault[0].xylabelB)),
                      (J[t].x && J[t].y) || (J[t] = Ae(n.props.options.gabaritDefault.templateGabaritLinkDefault[0].xylabelB)),
                      Z.push(Ae(e.xylabelC)),
                      (Z[t].x && Z[t].y) || (Z[t] = Ae(X.templateGabaritLinkDefault[0].xylabelC)),
                      (Z[t].x && Z[t].y) || (Z[t] = Ae(n.props.options.gabaritDefault.templateGabaritLinkDefault[0].xylabelC)))
                    : (K.push(Ae(e.xylabelfixA)),
                      (K[t].x && K[t].y) || (K[t] = Ae(X.templateGabaritLinkDefault[0].xylabelfixA)),
                      (K[t].x && K[t].y) || (K[t] = Ae(n.props.options.gabaritDefault.templateGabaritLinkDefault[0].xylabelfixA)),
                      J.push(Ae(e.xylabelfixB)),
                      (J[t].x && J[t].y) || (J[t] = Ae(X.templateGabaritLinkDefault[0].xylabelfixB)),
                      (J[t].x && J[t].y) || (J[t] = Ae(n.props.options.gabaritDefault.templateGabaritLinkDefault[0].xylabelfixB)),
                      Z.push(Ae(e.xylabelfixC)),
                      (Z[t].x && Z[t].y) || (Z[t] = Ae(X.templateGabaritLinkDefault[0].xylabelfixC)),
                      (Z[t].x && Z[t].y) || (Z[t] = Ae(n.props.options.gabaritDefault.templateGabaritLinkDefault[0].xylabelfixC))),
                    H.push(Pe(e.filtered)),
                    H[t] || (H[t] = Pe(X.templateGabaritLinkDefault[0].filtered)),
                    H[t] || (H[t] = Pe(n.props.options.gabaritDefault.templateGabaritLinkDefault[0].filtered)),
                    $.push(e.name),
                    $[t] || ($[t] = X.templateGabaritLinkDefault[0].name),
                    $[t] || ($[t] = n.props.options.gabaritDefault.templateGabaritLinkDefault[0].name),
                    ee.push(e.meta.toString()),
                    ee[t] || X.templateGabaritLinkDefault[0].meta,
                    ee[t] || n.props.options.gabaritDefault.templateGabaritLinkDefault[0].meta,
                    te.push(e.label),
                    te[t] || (te[t] = X.templateGabaritLinkDefault[0].label),
                    te[t] || (te[t] = n.props.options.gabaritDefault.templateGabaritLinkDefault[0].label),
                    ie.push({
                      key: e.mainMetric.key,
                      unit: e.mainMetric.unit,
                      format: e.mainMetric.format,
                      keyValue: '',
                      filter: H[t],
                      refId: X.queryID,
                      expr: '',
                      returnQuery: [],
                      manageValue: e.mainMetric.manageValue,
                    }),
                    ie[t].unit ||
                      (ie[t] = {
                        key: X.templateGabaritLinkDefault[0].mainMetric.key,
                        unit: X.templateGabaritLinkDefault[0].mainMetric.unit,
                        format: X.templateGabaritLinkDefault[0].mainMetric.format,
                        keyValue: '',
                        filter: H[t],
                        refId: X.queryID,
                        expr: '',
                        returnQuery: [],
                        manageValue: X.templateGabaritLinkDefault[0].mainMetric.manageValue,
                      }),
                    ie[t].unit ||
                      (ie[t] = {
                        key: n.props.options.gabaritDefault.templateGabaritLinkDefault[0].mainMetric.key,
                        unit: n.props.options.gabaritDefault.templateGabaritLinkDefault[0].mainMetric.unit,
                        format: n.props.options.gabaritDefault.templateGabaritLinkDefault[0].mainMetric.format,
                        keyValue: '',
                        filter: H[t],
                        refId: X.queryID,
                        expr: '',
                        returnQuery: [],
                        manageValue: n.props.options.gabaritDefault.templateGabaritLinkDefault[0].mainMetric.manageValue,
                      }),
                    ie[t].refId || (ie[t].refId = 'A'),
                    e.metrics.forEach(function (e) {
                      ae[t].push({
                        key: e.key,
                        unit: e.unit,
                        format: e.format,
                        keyValue: '',
                        filter: H[t],
                        refId: X.queryID,
                        expr: '',
                        returnQuery: [],
                        manageValue: e.manageValue,
                      });
                    }),
                    oe.push({
                      key: e.mainMetricB.key,
                      unit: e.mainMetricB.unit,
                      format: e.mainMetricB.format,
                      keyValue: '',
                      filter: H[t],
                      refId: X.queryID,
                      expr: '',
                      returnQuery: [],
                      manageValue: e.mainMetricB.manageValue,
                    }),
                    oe[t].unit ||
                      (oe[t] = {
                        key: X.templateGabaritLinkDefault[0].mainMetric.key,
                        unit: X.templateGabaritLinkDefault[0].mainMetric.unit,
                        format: X.templateGabaritLinkDefault[0].mainMetric.format,
                        keyValue: '',
                        filter: H[t],
                        refId: X.queryID,
                        expr: '',
                        returnQuery: [],
                        manageValue: X.templateGabaritLinkDefault[0].mainMetric.manageValue,
                      }),
                    oe[t].unit ||
                      (oe[t] = {
                        key: n.props.options.gabaritDefault.templateGabaritLinkDefault[0].mainMetric.key,
                        unit: n.props.options.gabaritDefault.templateGabaritLinkDefault[0].mainMetric.unit,
                        format: n.props.options.gabaritDefault.templateGabaritLinkDefault[0].mainMetric.format,
                        keyValue: '',
                        filter: H[t],
                        refId: X.queryID,
                        expr: '',
                        returnQuery: [],
                        manageValue: n.props.options.gabaritDefault.templateGabaritLinkDefault[0].mainMetric.manageValue,
                      }),
                    ie[t].refId || (oe[t].refId = 'A'),
                    e.metricsB.forEach(function (e) {
                      re[t].push({
                        key: e.key,
                        unit: e.unit,
                        format: e.format,
                        keyValue: '',
                        filter: H[t],
                        refId: X.queryID,
                        expr: '',
                        returnQuery: [],
                        manageValue: e.manageValue,
                      });
                    }),
                    de.push(e.valueMainMetricA),
                    de[t] || (de[t] = X.templateGabaritLinkDefault[0].valueMainMetricA),
                    de[t] || (de[t] = n.props.options.gabaritDefault.templateGabaritLinkDefault[0].valueMainMetricA),
                    he.push(e.valueMainMetricB),
                    he[t] || (he[t] = X.templateGabaritLinkDefault[0].valueMainMetricB),
                    he[t] || (he[t] = n.props.options.gabaritDefault.templateGabaritLinkDefault[0].valueMainMetricB),
                    pe.push(e.size),
                    pe[t] || (pe[t] = X.templateGabaritLinkDefault[0].size),
                    pe[t] || (pe[t] = n.props.options.gabaritDefault.templateGabaritLinkDefault[0].size),
                    0 !== e.colorCoordinateA.length
                      ? (ce.push(e.colorCoordinateA), ue.push(e.colorCoordinateB))
                      : (ce.push(X.globalGabarit.defaultColor), ue.push(X.globalGabarit.defaultColor)),
                    ce[t] || (ce[t] = n.props.options.gabaritDefault.templateGabaritLinkDefault[0].colorCoordinateA),
                    ue[t] || (ue[t] = n.props.options.gabaritDefault.templateGabaritLinkDefault[0].colorCoordinateB),
                    ((o = { label: e.positionParameter.tooltipA, value: e.positionParameter.tooltipA }).value && o.label) ||
                      (o = {
                        label: X.templateGabaritLinkDefault[0].positionParameter.tooltipA,
                        value: X.templateGabaritLinkDefault[0].positionParameter.tooltipA,
                      }),
                    (o.value && o.label) ||
                      (o = {
                        label: n.props.options.gabaritDefault.templateGabaritLinkDefault[0].positionParameter.tooltipA,
                        value: n.props.options.gabaritDefault.templateGabaritLinkDefault[0].positionParameter.tooltipA,
                      }),
                    ((r = { label: e.positionParameter.tooltipB, value: e.positionParameter.tooltipB }).value && r.label) ||
                      (r = {
                        label: X.templateGabaritLinkDefault[0].positionParameter.tooltipB,
                        value: X.templateGabaritLinkDefault[0].positionParameter.tooltipB,
                      }),
                    (r.value && r.label) ||
                      (r = {
                        label: n.props.options.gabaritDefault.templateGabaritLinkDefault[0].positionParameter.tooltipB,
                        value: n.props.options.gabaritDefault.templateGabaritLinkDefault[0].positionParameter.tooltipB,
                      }),
                    (i = Ae(e.positionParameter.xylabelA)) || (i = Ae(X.templateGabaritLinkDefault[0].positionParameter.xylabelA)),
                    i || (i = Ae(n.props.options.gabaritDefault.templateGabaritLinkDefault[0].positionParameter.xylabelA)),
                    (a = Ae(e.positionParameter.xylabelB)) || (a = Ae(X.templateGabaritLinkDefault[0].positionParameter.xylabelB)),
                    a || (a = Ae(n.props.options.gabaritDefault.templateGabaritLinkDefault[0].positionParameter.xylabelB)),
                    ne.push(new m(i.x, i.y, a.x, a.y, o, r)),
                    le.push(new y(e.linkURL.followLink, e.linkURL.hoveringTooltipLink, e.linkURL.hoveringTooltipText)),
                    le[t].followLink ||
                      (le[t] = new y(
                        X.templateGabaritLinkDefault[0].linkURL.followLink,
                        X.templateGabaritLinkDefault[0].linkURL.hoveringTooltipLink,
                        X.templateGabaritLinkDefault[0].linkURL.hoveringTooltipText
                      )),
                    le[t].followLink ||
                      (le[t] = new y(
                        n.props.options.gabaritDefault.templateGabaritLinkDefault[0].linkURL.followLink,
                        n.props.options.gabaritDefault.templateGabaritLinkDefault[0].linkURL.hoveringTooltipLink,
                        n.props.options.gabaritDefault.templateGabaritLinkDefault[0].linkURL.hoveringTooltipText
                      )),
                    se.push(e.orientationLink),
                    se[t] || (se[t] = X.templateGabaritLinkDefault[0].orientationLink),
                    se[t] || (se[t] = n.props.options.gabaritDefault.templateGabaritLinkDefault[0].orientationLink),
                    fe.push(e.pointIn),
                    fe[t] || (fe[t] = X.templateGabaritLinkDefault[0].pointIn),
                    fe[t] || (fe[t] = n.props.options.gabaritDefault.templateGabaritLinkDefault[0].pointIn),
                    me.push(e.pointOut),
                    me[t] || (me[t] = X.templateGabaritLinkDefault[0].pointOut),
                    me[t] || (me[t] = n.props.options.gabaritDefault.templateGabaritLinkDefault[0].pointOut),
                    ge.push(e.regionIn),
                    ge[t] || (ge[t] = X.templateGabaritLinkDefault[0].regionIn),
                    ge[t] || (ge[t] = n.props.options.gabaritDefault.templateGabaritLinkDefault[0].regionIn),
                    be.push(e.regionOut),
                    be[t] || (be[t] = X.templateGabaritLinkDefault[0].regionOut),
                    be[t] || (be[t] = n.props.options.gabaritDefault.templateGabaritLinkDefault[0].regionOut),
                    ye.push({ label: e.isIncurved.label, value: Boolean(e.isIncurved.value) }),
                    (ye[t].label && ye[t].value) ||
                      (ye[t] = {
                        label: X.templateGabaritLinkDefault[0].isIncurved.label,
                        value: Boolean(X.templateGabaritLinkDefault[0].isIncurved.value),
                      }),
                    (ye[t].label && ye[t].value) ||
                      (ye[t] = {
                        label: n.props.options.gabaritDefault.templateGabaritLinkDefault[0].isIncurved.label,
                        value: Boolean(n.props.options.gabaritDefault.templateGabaritLinkDefault[0].isIncurved.value),
                      });
                }),
                  (N = 0),
                  n.props.options.arrayOrientedLinks.forEach(function (e) {
                    N++;
                  }),
                  (_ = []),
                  (Q = []);
                var ve = [];
                K.forEach(function (e, t) {
                  'false' === X.templateGabaritLink[t].labelfix.toString() &&
                    (n.props.data.series.forEach(function (n) {
                      var i, a, o;
                      if (n.refId === ie[t].refId) {
                        var r =
                          (null === (o = n.name) || void 0 === o
                            ? void 0
                            : o.split(',').map(function (e) {
                                return e.replace(/[\"{}]/gm, '');
                              })) || [];
                        try {
                          for (var l = p(r), s = l.next(); !s.done; s = l.next()) {
                            var c = s.value;
                            if (r && r.length > 0) {
                              var u = c.split('=');
                              u[0] === e.x && _.push(u[1]), u[0] === e.y && Q.push(u[1]);
                            }
                          }
                        } catch (e) {
                          i = { error: e };
                        } finally {
                          try {
                            s && !s.done && (a = l.return) && a.call(l);
                          } finally {
                            if (i) throw i.error;
                          }
                        }
                      }
                    }),
                    _.length > Q.length
                      ? _.forEach(function (t, n) {
                          _[n] || (_[n] = e.x), Q[n] || (Q[n] = e.y);
                        })
                      : Q.forEach(function (t, n) {
                          _[n] || (_[n] = e.x), Q[n] || (Q[n] = e.y);
                        })),
                    _.length > 0
                      ? _.forEach(function (e, t) {
                          ve[t].push({ x: _[t], y: Q[t] });
                        })
                      : (ve[t] = []);
                }),
                  (_ = []),
                  (Q = []);
                var xe = [];
                K.forEach(function (e, t) {
                  'false' === X.templateGabaritLink[t].labelfix.toString() &&
                    (n.props.data.series.forEach(function (n) {
                      var i, a, o;
                      if (n.refId === oe[t].refId) {
                        var r =
                          (null === (o = n.name) || void 0 === o
                            ? void 0
                            : o.split(',').map(function (e) {
                                return e.replace(/[\"{}]/gm, '');
                              })) || [];
                        try {
                          for (var l = p(r), s = l.next(); !s.done; s = l.next()) {
                            var c = s.value;
                            if (r && r.length > 0) {
                              var u = c.split('=');
                              u[0] === e.x && _.push(u[1]), u[0] === e.y && Q.push(u[1]);
                            }
                          }
                        } catch (e) {
                          i = { error: e };
                        } finally {
                          try {
                            s && !s.done && (a = l.return) && a.call(l);
                          } finally {
                            if (i) throw i.error;
                          }
                        }
                      }
                    }),
                    _.length > Q.length
                      ? _.forEach(function (t, n) {
                          _[n] || (_[n] = e.x), Q[n] || (Q[n] = e.y);
                        })
                      : Q.forEach(function (t, n) {
                          _[n] || (_[n] = e.x), Q[n] || (Q[n] = e.y);
                        })),
                    _.length > 0
                      ? _.forEach(function (e, t) {
                          xe[t].push({ x: _[t], y: Q[t] });
                        })
                      : (xe[t] = []);
                }),
                  (_ = []),
                  (Q = []);
                var ke = [];
                K.forEach(function (e, t) {
                  'false' === X.templateGabaritLink[t].labelfix.toString() &&
                    (n.props.data.series.forEach(function (t) {
                      var n,
                        i,
                        a,
                        o =
                          (null === (a = t.name) || void 0 === a
                            ? void 0
                            : a.split(',').map(function (e) {
                                return e.replace(/[\"{}]/gm, '');
                              })) || [];
                      try {
                        for (var r = p(o), l = r.next(); !l.done; l = r.next()) {
                          var s = l.value;
                          if (o && o.length > 0) {
                            var c = s.split('=');
                            c[0] === e.x && _.push(c[1]), c[0] === e.y && Q.push(c[1]);
                          }
                        }
                      } catch (e) {
                        n = { error: e };
                      } finally {
                        try {
                          l && !l.done && (i = r.return) && i.call(r);
                        } finally {
                          if (n) throw n.error;
                        }
                      }
                    }),
                    _.length > Q.length
                      ? _.forEach(function (t, n) {
                          _[n] || (_[n] = e.x), Q[n] || (Q[n] = e.y);
                        })
                      : Q.forEach(function (t, n) {
                          _[n] || (_[n] = e.x), Q[n] || (Q[n] = e.y);
                        })),
                    _.length > 0
                      ? _.forEach(function (e, t) {
                          ke[t].push({ x: _[t], y: Q[t] });
                        })
                      : (ke[t] = []);
                }),
                  ve.forEach(function (e, t) {
                    var i, a;
                    if (e.length > 0) {
                      var o = function (e) {
                        H.forEach(function (i, a) {
                          var o = (((parseInt(e.x, 10) - F) / U) * R).toString(),
                            r = (((parseInt(xe[t][a].x, 10) - F) / U) * R).toString(),
                            p = (((parseInt(ke[t][a].x, 10) - F) / U) * R).toString(),
                            d = (((parseInt(e.y, 10) - Y) / W) * z).toString(),
                            h = (((parseInt(xe[t][a].y, 10) - Y) / W) * z).toString(),
                            f = (((parseInt(ke[t][a].y, 10) - Y) / W) * z).toString(),
                            m = ae.length,
                            b = re.length;
                          if (m > 0 && b > 0) {
                            var y = new g(
                              N + 1,
                              le[a],
                              [],
                              X.globalGabarit.lowerLimit,
                              te[a] + '_' + N,
                              u,
                              n.addFilterDynamic(ie[a], K[a], e),
                              ae[a],
                              l,
                              s,
                              c,
                              ne[a],
                              $[a],
                              se[a],
                              pe[a],
                              e.x,
                              e.y,
                              ce[a],
                              xe[t][a].x,
                              xe[t][a].y,
                              ue[a],
                              de[a],
                              he[a],
                              fe[a],
                              me[a],
                              ge[a],
                              be[a],
                              n.props.options.zIndexOrientedLink + 1,
                              ke[t][a].x,
                              ke[t][a].y,
                              ye[a],
                              n.addFilterDynamic(oe[a], K[a], e),
                              re[a],
                              U.toString(),
                              W.toString(),
                              o,
                              d,
                              r,
                              h,
                              p,
                              f
                            );
                            N++, n.checkCoordinateFilterLink(y, n.props);
                          }
                          if (!(m > 0) && b > 0) {
                            y = new g(
                              N + 1,
                              le[a],
                              [],
                              X.globalGabarit.lowerLimit,
                              te[a] + '_' + N,
                              u,
                              n.addFilterDynamic(ie[a], K[a], e),
                              [],
                              l,
                              s,
                              c,
                              ne[a],
                              $[a],
                              se[a],
                              pe[a],
                              e.x,
                              e.y,
                              ce[a],
                              xe[t][a].x,
                              xe[t][a].y,
                              ue[a],
                              de[a],
                              he[a],
                              fe[a],
                              me[a],
                              ge[a],
                              be[a],
                              n.props.options.zIndexOrientedLink + 1,
                              ke[t][a].x,
                              ke[t][a].y,
                              ye[a],
                              n.addFilterDynamic(oe[a], K[a], e),
                              re[a],
                              U.toString(),
                              W.toString(),
                              o,
                              d,
                              r,
                              h,
                              p,
                              f
                            );
                            N++, n.checkCoordinateFilterLink(y, n.props);
                          } else if (m > 0 && !(b > 0)) {
                            y = new g(
                              N + 1,
                              le[a],
                              [],
                              X.globalGabarit.lowerLimit,
                              te[a] + '_' + N,
                              u,
                              n.addFilterDynamic(ie[a], K[a], e),
                              ae[a],
                              l,
                              s,
                              c,
                              ne[a],
                              $[a],
                              se[a],
                              pe[a],
                              e.x,
                              e.y,
                              ce[a],
                              xe[t][a].x,
                              xe[t][a].y,
                              ue[a],
                              de[a],
                              he[a],
                              fe[a],
                              me[a],
                              ge[a],
                              be[a],
                              n.props.options.zIndexOrientedLink + 1,
                              ke[t][a].x,
                              ke[t][a].y,
                              ye[a],
                              n.addFilterDynamic(oe[a], K[a], e),
                              [],
                              U.toString(),
                              W.toString(),
                              o,
                              d,
                              r,
                              h,
                              p,
                              f
                            );
                            N++, n.checkCoordinateFilterLink(y, n.props);
                          } else {
                            y = new g(
                              N + 1,
                              le[a],
                              [],
                              X.globalGabarit.lowerLimit,
                              te[a] + '_' + N,
                              u,
                              n.addFilterDynamic(ie[a], K[a], e),
                              [],
                              l,
                              s,
                              c,
                              ne[a],
                              $[a],
                              se[a],
                              pe[a],
                              e.x,
                              e.y,
                              ce[a],
                              xe[t][a].x,
                              xe[t][a].y,
                              ue[a],
                              de[a],
                              he[a],
                              fe[a],
                              me[a],
                              ge[a],
                              be[a],
                              n.props.options.zIndexOrientedLink + 1,
                              ke[t][a].x,
                              ke[t][a].y,
                              ye[a],
                              n.addFilterDynamic(oe[a], K[a], e),
                              [],
                              U.toString(),
                              W.toString(),
                              o,
                              d,
                              r,
                              h,
                              p,
                              f
                            );
                            N++, n.checkCoordinateFilterLink(y, n.props);
                          }
                        });
                      };
                      try {
                        for (var r = p(e), d = r.next(); !d.done; d = r.next()) {
                          o(d.value);
                        }
                      } catch (e) {
                        i = { error: e };
                      } finally {
                        try {
                          d && !d.done && (a = r.return) && a.call(r);
                        } finally {
                          if (i) throw i.error;
                        }
                      }
                    } else
                      H.forEach(function (e, t) {
                        var i = (((parseInt(K[t].x, 10) - F) / U) * R).toString(),
                          a = (((parseInt(J[t].x, 10) - F) / U) * R).toString(),
                          o = (((parseInt(Z[t].x, 10) - F) / U) * R).toString(),
                          r = (((parseInt(K[t].y, 10) - Y) / W) * z).toString(),
                          p = (((parseInt(J[t].y, 10) - Y) / W) * z).toString(),
                          d = (((parseInt(Z[t].y, 10) - Y) / W) * z).toString(),
                          h = ae.length,
                          f = re.length;
                        if (h > 0 && f > 0) {
                          var m = new g(
                            N + 1,
                            le[t],
                            [],
                            X.globalGabarit.lowerLimit,
                            te[t] + '_' + N,
                            u,
                            ie[t],
                            ae[t],
                            l,
                            s,
                            c,
                            ne[t],
                            $[t],
                            se[t],
                            pe[t],
                            K[t].x,
                            K[t].y,
                            ce[t],
                            J[t].x,
                            J[t].y,
                            ue[t],
                            de[t],
                            he[t],
                            fe[t],
                            me[t],
                            ge[t],
                            be[t],
                            n.props.options.zIndexOrientedLink + 1,
                            Z[t].x,
                            Z[t].y,
                            ye[t],
                            oe[t],
                            re[t],
                            U.toString(),
                            W.toString(),
                            i,
                            r,
                            a,
                            p,
                            o,
                            d
                          );
                          N++, n.checkCoordinateFilterLink(m, n.props);
                        }
                        if (!(h > 0) && f > 0) {
                          m = new g(
                            N + 1,
                            le[t],
                            [],
                            X.globalGabarit.lowerLimit,
                            te[t] + '_' + N,
                            u,
                            ie[t],
                            [],
                            l,
                            s,
                            c,
                            ne[t],
                            $[t],
                            se[t],
                            pe[t],
                            K[t].x,
                            K[t].y,
                            ce[t],
                            J[t].x,
                            J[t].y,
                            ue[t],
                            de[t],
                            he[t],
                            fe[t],
                            me[t],
                            ge[t],
                            be[t],
                            n.props.options.zIndexOrientedLink + 1,
                            Z[t].x,
                            Z[t].y,
                            ye[t],
                            oe[t],
                            re[t],
                            U.toString(),
                            W.toString(),
                            i,
                            r,
                            a,
                            p,
                            o,
                            d
                          );
                          N++, n.checkCoordinateFilterLink(m, n.props);
                        } else if (h > 0 && !(f > 0)) {
                          m = new g(
                            N + 1,
                            le[t],
                            [],
                            X.globalGabarit.lowerLimit,
                            te[t] + '_' + N,
                            u,
                            ie[t],
                            ae[t],
                            l,
                            s,
                            c,
                            ne[t],
                            $[t],
                            se[t],
                            pe[t],
                            K[t].x,
                            K[t].y,
                            ce[t],
                            J[t].x,
                            J[t].y,
                            ue[t],
                            de[t],
                            he[t],
                            fe[t],
                            me[t],
                            ge[t],
                            be[t],
                            n.props.options.zIndexOrientedLink + 1,
                            Z[t].x,
                            Z[t].y,
                            ye[t],
                            oe[t],
                            [],
                            U.toString(),
                            W.toString(),
                            i,
                            r,
                            a,
                            p,
                            o,
                            d
                          );
                          N++, n.checkCoordinateFilterLink(m, n.props);
                        } else {
                          m = new g(
                            N + 1,
                            le[t],
                            [],
                            X.globalGabarit.lowerLimit,
                            te[t] + '_' + N,
                            u,
                            ie[t],
                            [],
                            l,
                            s,
                            c,
                            ne[t],
                            $[t],
                            se[t],
                            pe[t],
                            K[t].x,
                            K[t].y,
                            ce[t],
                            J[t].x,
                            J[t].y,
                            ue[t],
                            de[t],
                            he[t],
                            fe[t],
                            me[t],
                            ge[t],
                            be[t],
                            n.props.options.zIndexOrientedLink + 1,
                            Z[t].x,
                            Z[t].y,
                            ye[t],
                            oe[t],
                            [],
                            U.toString(),
                            W.toString(),
                            i,
                            r,
                            a,
                            p,
                            o,
                            d
                          );
                          N++, n.checkCoordinateFilterLink(m, n.props);
                        }
                      });
                  });
                var Ce = [],
                  Ie = [],
                  Se = [],
                  Ee = [],
                  Me = [],
                  Le = [],
                  Oe = [],
                  Te = [],
                  Be = [],
                  je = [],
                  Ge = [],
                  Ve = [];
                X.templateGabaritRegion.forEach(function (e, t) {
                  'false' === e.labelfix.toString()
                    ? (Ie.push(De(e.xylabel)),
                      (Ie[t].xMax && Ie[t].xMin && Ie[t].yMax && Ie[t].yMin) || (Ie[t] = De(X.templateGabaritRegionDefault[0].xylabel)),
                      (Ie[t].xMax && Ie[t].xMin && Ie[t].yMax && Ie[t].yMin) ||
                        (Ie[t] = De(n.props.options.gabaritDefault.templateGabaritRegionDefault[0].xylabel)))
                    : (Ie.push(De(e.xylabelfix)),
                      (Ie[t].xMax && Ie[t].xMin && Ie[t].yMax && Ie[t].yMin) || (Ie[t] = De(X.templateGabaritRegionDefault[0].xylabelfix)),
                      (Ie[t].xMax && Ie[t].xMin && Ie[t].yMax && Ie[t].yMin) ||
                        (Ie[t] = De(n.props.options.gabaritDefault.templateGabaritRegionDefault[0].xylabelfix))),
                    Ce.push(we(e.filtered)),
                    Ce[t] || (Ce[t] = we(X.templateGabaritRegionDefault[0].filtered)),
                    Ce[t] || (Ce[t] = we(n.props.options.gabaritDefault.templateGabaritRegionDefault[0].filtered)),
                    Te.push(new y(e.linkURL.followLink, e.linkURL.hoveringTooltipLink, e.linkURL.hoveringTooltipTex)),
                    Te[t].followLink ||
                      (Te[t] = new y(
                        X.templateGabaritRegionDefault[0].linkURL.followLink,
                        X.templateGabaritRegionDefault[0].linkURL.hoveringTooltipLink,
                        X.templateGabaritRegionDefault[0].linkURL.hoveringTooltipText
                      )),
                    Te[t].followLink ||
                      (Te[t] = new y(
                        n.props.options.gabaritDefault.templateGabaritRegionDefault[0].linkURL.followLink,
                        n.props.options.gabaritDefault.templateGabaritRegionDefault[0].linkURL.hoveringTooltipLink,
                        n.props.options.gabaritDefault.templateGabaritRegionDefault[0].linkURL.hoveringTooltipText
                      )),
                    Se.push(e.meta.toString()),
                    Se[t] || X.templateGabaritRegionDefault[0].meta,
                    Se[t] || n.props.options.gabaritDefault.templateGabaritRegionDefault[0].meta,
                    Ee.push(e.label),
                    Ee[t] || (Ee[t] = X.templateGabaritRegionDefault[0].label),
                    Ee[t] || (Ee[t] = n.props.options.gabaritDefault.templateGabaritRegionDefault[0].label),
                    Le.push({
                      key: e.mainMetric.key,
                      unit: e.mainMetric.unit,
                      format: e.mainMetric.format,
                      keyValue: '',
                      filter: Ce[t],
                      refId: X.queryID,
                      expr: '',
                      returnQuery: [],
                      manageValue: e.mainMetric.manageValue,
                    }),
                    Le[t].unit ||
                      (Le[t] = {
                        key: X.templateGabaritRegionDefault[0].mainMetric.key,
                        unit: X.templateGabaritRegionDefault[0].mainMetric.unit,
                        format: X.templateGabaritRegionDefault[0].mainMetric.format,
                        keyValue: '',
                        filter: Ce[t],
                        refId: X.queryID,
                        expr: '',
                        returnQuery: [],
                        manageValue: X.templateGabaritRegionDefault[0].mainMetric.manageValue,
                      }),
                    Le[t].unit ||
                      (Le[t] = {
                        key: n.props.options.gabaritDefault.templateGabaritRegionDefault[0].mainMetric.key,
                        unit: n.props.options.gabaritDefault.templateGabaritRegionDefault[0].mainMetric.unit,
                        format: n.props.options.gabaritDefault.templateGabaritRegionDefault[0].mainMetric.format,
                        keyValue: '',
                        filter: Ce[t],
                        refId: X.queryID,
                        expr: '',
                        returnQuery: [],
                        manageValue: n.props.options.gabaritDefault.templateGabaritRegionDefault[0].mainMetric.manageValue,
                      }),
                    Le[t].refId || (Le[t].refId = 'A'),
                    e.metrics.forEach(function (e) {
                      Oe[t].push({
                        key: e.key,
                        unit: e.unit,
                        format: e.format,
                        keyValue: '',
                        filter: Ce[t],
                        refId: X.queryID,
                        expr: '',
                        returnQuery: [],
                        manageValue: e.manageValue,
                      });
                    }),
                    je.push(Boolean(e.mode)),
                    je[t] || (je[t] = Boolean(X.templateGabaritRegionDefault[0].mode)),
                    je[t] || (je[t] = Boolean(n.props.options.gabaritDefault.templateGabaritRegionDefault[0].mode)),
                    Be.push(e.idSVG),
                    Be[t] || (Be[t] = X.templateGabaritRegionDefault[0].idSVG),
                    Be[t] || (Be[t] = n.props.options.gabaritDefault.templateGabaritRegionDefault[0].idSVG),
                    Ge.push(e.img),
                    Ge[t] || (Ge[t] = X.templateGabaritRegionDefault[0].img),
                    Ge[t] || (Ge[t] = n.props.options.gabaritDefault.templateGabaritRegionDefault[0].img),
                    ((o = { label: e.positionParameter.tooltipA, value: e.positionParameter.tooltipA }).label && o.value) ||
                      (o = {
                        label: X.templateGabaritRegionDefault[0].positionParameter.tooltipA,
                        value: X.templateGabaritRegionDefault[0].positionParameter.tooltipA,
                      }),
                    (o.label && o.value) ||
                      (o = {
                        label: n.props.options.gabaritDefault.templateGabaritRegionDefault[0].positionParameter.tooltipA,
                        value: n.props.options.gabaritDefault.templateGabaritRegionDefault[0].positionParameter.tooltipA,
                      }),
                    ((r = { label: e.positionParameter.tooltipB, value: e.positionParameter.tooltipB }).label && r.value) ||
                      (r = {
                        label: X.templateGabaritRegionDefault[0].positionParameter.tooltipB,
                        value: X.templateGabaritRegionDefault[0].positionParameter.tooltipB,
                      }),
                    (r.label && r.value) ||
                      (r = {
                        label: n.props.options.gabaritDefault.templateGabaritRegionDefault[0].positionParameter.tooltipB,
                        value: n.props.options.gabaritDefault.templateGabaritRegionDefault[0].positionParameter.tooltipB,
                      }),
                    (i = Ae(e.positionParameter.xylabelA)) || (i = Ae(X.templateGabaritRegionDefault[0].positionParameter.xylabelA)),
                    i || (i = Ae(n.props.options.gabaritDefault.templateGabaritRegionDefault[0].positionParameter.xylabelA)),
                    (a = Ae(e.positionParameter.xylabelB)) || (a = Ae(X.templateGabaritRegionDefault[0].positionParameter.xylabelB)),
                    a || (a = Ae(n.props.options.gabaritDefault.templateGabaritRegionDefault[0].positionParameter.xylabelB)),
                    Me.push(new m(i.x, i.y, a.x, a.y, o, r)),
                    Ve.push(e.orientedLink),
                    Ve[t] || (Ve[t] = X.templateGabaritRegionDefault[0].orientedLink),
                    Ve[t] || (Ve[t] = n.props.options.gabaritDefault.templateGabaritRegionDefault[0].orientedLink);
                }),
                  (N = 0),
                  n.props.options.regionCoordinateSpace.forEach(function (e) {
                    N++;
                  }),
                  Ce.forEach(function (e, t) {
                    if (Oe.length > 0) {
                      var i = new O(
                        N + 1,
                        Te[t],
                        [],
                        X.globalGabarit.lowerLimit,
                        Ee[t] + '_' + N,
                        u,
                        Le[t],
                        Oe[t],
                        l,
                        s,
                        c,
                        Me[t],
                        Be[t],
                        Ve[t],
                        Ie[t],
                        Ie[t],
                        je[t],
                        Ge[t],
                        U.toString(),
                        W.toString()
                      );
                      N++, n.props.options.regionCoordinateSpace.push(i);
                    } else {
                      i = new O(
                        N + 1,
                        Te[t],
                        [],
                        X.globalGabarit.lowerLimit,
                        Ee[t] + '_' + N,
                        u,
                        Le[t],
                        [],
                        l,
                        s,
                        c,
                        Me[t],
                        Be[t],
                        Ve[t],
                        Ie[t],
                        Ie[t],
                        je[t],
                        Ge[t],
                        U.toString(),
                        W.toString()
                      );
                      N++, n.props.options.regionCoordinateSpace.push(i);
                    }
                  });
              }),
              (n.gabaritUrlDisplay = function (e) {
                if (0 !== e.list.lenght) {
                  var t = e.list.map(function (e, t) {
                    return u.a.createElement(
                      'div',
                      { key: 'GabaritUrlDiv' + t.toString(), style: { display: 'flex' } },
                      u.a.createElement(d.FormField, {
                        id: t.toString(),
                        key: 'GabaritUrl' + t.toString(),
                        label: 'Url',
                        labelWidth: 5,
                        inputWidth: 20,
                        onChange: n.onGabaritListUrlChanged.bind(n),
                        type: 'string',
                        value: e || '',
                      }),
                      u.a.createElement(
                        d.Button,
                        { variant: 'danger', id: t.toString(), key: 'ButtunDel' + t.toString(), onClick: n.gabaritDeletUrl.bind(n) },
                        'Del'
                      )
                    );
                  });
                  return u.a.createElement('div', null, t);
                }
                return u.a.createElement('div', null, 'No targets avalaible');
              }),
              (n.gabaritDisplay = function (e) {
                if (0 !== e.list.lenght) {
                  var t = e.list.map(function (e, t) {
                    return u.a.createElement(
                      'div',
                      { key: 'GabaritDiv' + t.toString(), style: { display: 'flex' } },
                      u.a.createElement(d.FormField, {
                        id: t.toString(),
                        key: 'Gabarit' + t.toString(),
                        label: 'Gabarit',
                        labelWidth: 5,
                        inputWidth: 20,
                        type: 'string',
                        value: e.fileName || '',
                        readOnly: !0,
                      }),
                      u.a.createElement(d.FormLabel, { width: 15 }, 'Querry ID'),
                      u.a.createElement(d.Select, {
                        onChange: function (e) {
                          return n.onChangeSelectQuerryID(e, t);
                        },
                        allowCustomValue: !1,
                        options: n.state.selectQuerryID,
                        width: 10,
                        value: { label: n.props.options.saveGabaritFile[t].queryID, value: n.props.options.saveGabaritFile[t].queryID },
                      }),
                      u.a.createElement(
                        d.Button,
                        { id: t.toString(), key: 'ButtunLoad' + t.toString(), onClick: n.checkLoaderGabarit.bind(n) },
                        'Load'
                      ),
                      u.a.createElement(
                        d.Button,
                        { variant: 'danger', id: t.toString(), key: 'ButtunDel' + t.toString(), onClick: n.gabaritDeletFile.bind(n) },
                        'Del'
                      )
                    );
                  });
                  return u.a.createElement('div', null, t);
                }
                return u.a.createElement('div', null, 'No targets avalaible');
              }),
              (n.gabaritDefaultDisplay = function (e) {
                if (e) {
                  var t = u.a.createElement(
                    'div',
                    { style: { display: 'flex' } },
                    u.a.createElement(d.FormField, {
                      key: 'GabaritDefault',
                      label: 'GabaritDefault',
                      labelWidth: 10,
                      inputWidth: 20,
                      type: 'string',
                      value: e.list.fileName || '',
                      readOnly: !0,
                    }),
                    u.a.createElement(d.Button, { variant: 'danger', key: 'ButtunDelDefault', onClick: n.gabaritDeletFileDefault.bind(n) }, 'Del')
                  );
                  return u.a.createElement('div', null, t);
                }
                return u.a.createElement('div', null, 'No targets avalaible');
              }),
              (n.delAll = function () {
                (n.props.options.saveGabaritURL = []),
                  (n.props.options.saveGabaritURL = []),
                  n.props.onOptionsChange(r(r({}, n.props.options), { saveGabaritURL: n.props.options.saveGabaritURL }));
              }),
              (n.printDefault = function () {
                console.log('gabaritDefault'), console.log(n.props.options.gabaritDefault);
              }),
              (n.printPoint = function () {
                console.log('gabaritPoint'), console.log(n.props.options.arrayPoints);
              }),
              (n.printRegion = function () {
                console.log('gabaritRegion'), console.log(n.props.options.regionCoordinateSpace);
              }),
              (n.printLink = function () {
                console.log('gabaritDefault'), console.log(n.props.options.arrayOrientedLinks);
              }),
              (n.printTemp = function () {
                console.log('gabaritDefault'), console.log(n.props.options.gabaritDefault);
              }),
              (n.state = {
                selectQuerryID: [
                  { label: 'A', value: 'A' },
                  { label: 'B', value: 'B' },
                  { label: 'C', value: 'C' },
                  { label: 'D', value: 'D' },
                  { label: 'E', value: 'E' },
                  { label: 'F', value: 'F' },
                  { label: 'G', value: 'G' },
                  { label: 'H', value: 'H' },
                  { label: 'I', value: 'I' },
                  { label: 'J', value: 'J' },
                  { label: 'K', value: 'K' },
                  { label: 'L', value: 'L' },
                  { label: 'M', value: 'M' },
                  { label: 'N', value: 'N' },
                  { label: 'O', value: 'O' },
                  { label: 'P', value: 'P' },
                  { label: 'Q', value: 'Q' },
                  { label: 'R', value: 'R' },
                  { label: 'S', value: 'S' },
                  { label: 'T', value: 'T' },
                  { label: 'U', value: 'U' },
                  { label: 'V', value: 'V' },
                  { label: 'W', value: 'W' },
                  { label: 'X', value: 'X' },
                  { label: 'Y', value: 'Y' },
                  { label: 'Z', value: 'Z' },
                ],
                collapseSelectURL: !1,
                collapseGabarit: !1,
                collapseGabaritDefault: !1,
              }),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype.render = function () {
              var e = this.props.options;
              return u.a.createElement(
                'div',
                null,
                u.a.createElement(
                  d.Collapse,
                  { isOpen: this.state.collapseGabaritDefault, label: 'Default Gabarit URL', onToggle: this.onToggleGabaritDefault },
                  u.a.createElement(d.FormField, {
                    label: 'Gabarit Default Url',
                    labelWidth: 10,
                    key: 'GabaritDefaultUrl',
                    inputWidth: 18,
                    onChange: this.onGabaritDefaultUrlChanged.bind(this),
                    type: 'string',
                    value: e.saveGabaritDefaultUrl || '',
                  }),
                  u.a.createElement(d.Button, { key: 'AddGabaritDefaultUrl', onClick: this.addGabaritDefaultUrlInput }, 'Add'),
                  u.a.createElement(this.gabaritDefaultDisplay, { list: e.gabaritDefault })
                ),
                u.a.createElement(
                  d.Collapse,
                  { isOpen: this.state.collapseSelectURL, label: 'Url List', onToggle: this.onToggleSelectUrl },
                  u.a.createElement(d.FormField, {
                    label: 'Gabarit Url',
                    labelWidth: 8,
                    key: 'GabaritUrl',
                    inputWidth: 20,
                    onChange: this.onGabaritUrlChanged.bind(this),
                    type: 'string',
                    value: e.gabaritUrlInput || '',
                  }),
                  u.a.createElement(d.Button, { key: 'AddGabaritUrl', onClick: this.addGabaritUrlInput }, 'Add'),
                  u.a.createElement(
                    'div',
                    { className: 'section gf-form-group' },
                    u.a.createElement(d.Button, { onClick: this.fetchGabarit }, 'Finish'),
                    u.a.createElement(this.gabaritUrlDisplay, { list: e.saveGabaritURL }),
                    u.a.createElement(d.Button, { key: 'delAll', onClick: this.delAll }, 'Del all urls')
                  )
                ),
                u.a.createElement(
                  d.Collapse,
                  { isOpen: this.state.collapseGabarit, label: 'Gabarit List', onToggle: this.onToggleGabarit },
                  u.a.createElement(this.gabaritDisplay, { list: e.saveGabaritFile })
                ),
                u.a.createElement(d.Button, { onClick: this.printDefault }, 'Default'),
                u.a.createElement(d.Button, { onClick: this.printPoint }, 'Point'),
                u.a.createElement(d.Button, { onClick: this.printRegion }, 'Region'),
                u.a.createElement(d.Button, { onClick: this.printLink }, 'Link'),
                u.a.createElement(d.Button, { onClick: this.printTemp }, 'Temp')
              );
            }),
            t
          );
        })(u.a.Component),
        Ge = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.setPromiseMeta = function (e) {
                return new Promise(function (t) {
                  n.setState(e, t);
                });
              }),
              (n._handleChange = function (e) {
                return l(n, void 0, void 0, function () {
                  var t;
                  return s(this, function (n) {
                    return ((t = this.state.meta).meta = e), console.log(t), this.setState({ meta: t }), this.initArrayTag(), [2];
                  });
                });
              }),
              (n.addElement = function (e) {
                return u.a.createElement(G, {
                  key: 'meta' + e,
                  label: 'Meta',
                  name: 'Meta',
                  required: !0,
                  placeholder: 'Enter meta',
                  value: n.state.meta.meta[e],
                  _handleChange: function (e) {
                    return n._handleChange(e.currentTarget.value);
                  },
                });
              }),
              (n.initArrayTag = function () {
                var e,
                  t,
                  i = 0,
                  a = [];
                try {
                  for (var o = p(n.state.tagArray), r = o.next(); !r.done; r = o.next()) {
                    var l = r.value;
                    console.log(l), a.push(n.addElement(i)), ++i;
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    r && !r.done && (t = o.return) && t.call(o);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                var s = u.a.createElement('ul', null, a);
                n.setState({ fonctionne: u.a.createElement('ul', null, s), index: i });
              }),
              (n.addStatsdrgdhtjfy = function () {
                return l(n, void 0, void 0, function () {
                  var e;
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (e = this.state.meta).meta, [4, this.setPromiseMeta({ meta: e })];
                      case 1:
                        return t.sent(), [2];
                    }
                  });
                });
              }),
              (n.addElementArray = function () {
                n.addStatsdrgdhtjfy();
                var e = n.state.tagArray;
                e.push(n.addElement(n.state.index + 1));
                var t = u.a.createElement('ul', null, e);
                n.setState({ tagArray: e, fonctionne: t, index: n.state.index + 1 });
              }),
              (n.componentDidMount = function () {
                n.initArrayTag(), console.log('ddd');
              }),
              (n.testMoi = function () {
                return u.a.createElement('div', null, n.state.tagArray);
              }),
              (n.state = { meta: n.props.meta, tagArray: [], fonctionne: u.a.createElement('br', null), index: 0 }),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype.render = function () {
              var e = this;
              return u.a.createElement(
                'div',
                null,
                this.state.fonctionne,
                u.a.createElement(
                  d.Button,
                  {
                    variant: 'primary',
                    className: 'button',
                    onClick: function () {
                      return e.addElementArray();
                    },
                  },
                  'Add'
                )
              );
            }),
            t
          );
        })(u.a.Component),
        Ve =
          (n(9),
          (function (e) {
            function t(t) {
              var n = e.call(this, t) || this;
              return (
                (n.onRefreshChanged = function (e) {
                  var t = e.target;
                  n.props.onOptionsChange(r(r({}, n.props.options), { refresh: t.value }));
                }),
                (n.onTimeZoneChanged = function (e) {
                  var t = e.target;
                  n.props.onOptionsChange(r(r({}, n.props.options), { timezone: t.value }));
                }),
                (n.onPanelChanged = function (e, t) {
                  var i = e.target;
                  n.props.onOptionsChange(r(r({}, n.props.options), { Id: i.value }));
                }),
                (n.onToggleDashboardData = function (e) {
                  n.setState({ collapseDashboardData: e });
                }),
                (n.onToggleTimeSelector = function (e) {
                  n.setState({ collapseTimeSelector: e });
                }),
                (n.onTogglePanelData = function (e) {
                  n.setState({ collapsePanelData: e });
                }),
                (n.onTogglePrincipalTargets = function (e) {
                  n.setState({ collapsePrincipalTarget: e });
                }),
                (n.goToTab = function (e) {
                  for (var t = n.state.tabsVariable.slice(), i = t.length, a = 0; a < i; a++) t[a] = a === e;
                  n.setState({ tabsVariable: t });
                }),
                (n.goToTabCoordinateSpace = function (e) {
                  for (var t = n.state.tabsCoordinateSpace.slice(), i = t.length, a = 0; a < i; a++) t[a] = a === e;
                  n.setState({ tabsCoordinateSpace: t });
                }),
                (n.componentDidMount = function () {
                  return l(n, void 0, void 0, function () {
                    var e,
                      t,
                      n,
                      i,
                      a,
                      o,
                      l = this;
                    return s(this, function (s) {
                      switch (s.label) {
                        case 0:
                          (e = window.location.pathname), (t = e.split('/'));
                          try {
                            for (n = p(t), i = n.next(); !i.done; i = n.next())
                              'new' !== i.value ||
                                this.props.options.currentDashboard ||
                                this.props.onOptionsChange(
                                  r(r({}, this.props.options), {
                                    arrayPoints: [],
                                    arrayOrientedLinks: [],
                                    regionCoordinateSpace: [],
                                    saveImportUrl: { total: [], mono: [], multi: [] },
                                    saveImportFile: [],
                                    totalUrlInput: '',
                                    multiUrlInput: '',
                                    monoUrlInput: '',
                                    baseMap: { image: '', layerImage: '', modeSVG: !0, idSVG: '', width: '', height: '', isUploaded: !1 },
                                  })
                                );
                          } catch (e) {
                            a = { error: e };
                          } finally {
                            try {
                              i && !i.done && (o = n.return) && o.call(n);
                            } finally {
                              if (a) throw a.error;
                            }
                          }
                          return [
                            4,
                            Promise.resolve('Success').then(function () {
                              l.props.onOptionsChange(r(r({}, l.props.options), { displayButton: !0, currentDashboard: !1 }));
                            }),
                          ];
                        case 1:
                          return s.sent(), [2];
                      }
                    });
                  });
                }),
                (n.componentWillUnmount = function () {
                  return l(n, void 0, void 0, function () {
                    var e = this;
                    return s(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [
                            4,
                            Promise.resolve('Success').then(function () {
                              e.props.onOptionsChange(r(r({}, e.props.options), { displayButton: !1, currentDashboard: !0 }));
                            }),
                          ];
                        case 1:
                          return t.sent(), [2];
                      }
                    });
                  });
                }),
                (n.state = {
                  collapseDashboardData: !1,
                  collapsePanelData: !1,
                  collapseTimeSelector: !1,
                  collapsePrincipalTarget: !1,
                  tabsVariable: [!0, !1, !1, !1, !1],
                  tabsCoordinateSpace: [!0, !1, !1, !1],
                }),
                n
              );
            }
            return (
              o(t, e),
              (t.prototype.render = function () {
                var e = this,
                  t = {
                    meta: '',
                    obj: new b(
                      '',
                      !1,
                      'white',
                      'black',
                      { bold: !1, italic: !1, underline: !1 },
                      !0,
                      {
                        legendElement: '',
                        numericFormatElement: '5',
                        unit: '',
                        displayObjectInTooltip: !1,
                        addColorTextElement: !1,
                        colorTextElement: 'white',
                        addColorBackElement: !1,
                        colorBackElement: 'black',
                      },
                      {
                        legendElement: '',
                        numericFormatElement: '5',
                        unit: '',
                        displayObjectInTooltip: !0,
                        addColorTextElement: !0,
                        colorTextElement: 'white',
                        addColorBackElement: !0,
                        colorBackElement: 'black',
                      }
                    ),
                  },
                  i = n(2);
                return u.a.createElement(
                  'div',
                  { className: 'divSimpleEditor' },
                  u.a.createElement(
                    d.TabsBar,
                    { className: 'page-header tabs', hideBorder: !1 },
                    u.a.createElement(d.Tab, {
                      key: 'tabDisplay',
                      label: i.simpleEditor.display,
                      active: this.state.tabsVariable[0],
                      onChangeTab: function () {
                        return e.goToTab(0);
                      },
                    }),
                    u.a.createElement(d.Tab, {
                      key: 'tabSpaceInitialVisualisation',
                      label: i.simpleEditor.spaceInitialVisualisation,
                      active: this.state.tabsVariable[1],
                      onChangeTab: function () {
                        return e.goToTab(1);
                      },
                    }),
                    u.a.createElement(d.Tab, {
                      key: 'tabCoordinateSpace',
                      label: i.simpleEditor.CoordinateSpace,
                      active: this.state.tabsVariable[2],
                      onChangeTab: function () {
                        return e.goToTab(2);
                      },
                    }),
                    u.a.createElement(d.Tab, {
                      key: 'tabGabarit',
                      label: 'Gabarit',
                      active: this.state.tabsVariable[3],
                      onChangeTab: function () {
                        return e.goToTab(3);
                      },
                    }),
                    u.a.createElement(d.Tab, {
                      key: 'tabImportInput',
                      label: 'Import Files',
                      active: this.state.tabsVariable[4],
                      onChangeTab: function () {
                        return e.goToTab(4);
                      },
                    })
                  ),
                  u.a.createElement(
                    d.TabContent,
                    null,
                    this.state.tabsVariable[0] &&
                      u.a.createElement(Be, { options: this.props.options, onOptionsChange: this.props.onOptionsChange, data: this.props.data }),
                    this.state.tabsVariable[1] &&
                      u.a.createElement(Ce, { options: this.props.options, onOptionsChange: this.props.onOptionsChange, data: this.props.data }),
                    this.state.tabsVariable[2] &&
                      u.a.createElement(
                        'div',
                        null,
                        u.a.createElement(
                          d.TabsBar,
                          { className: 'page-header tabs', hideBorder: !1 },
                          u.a.createElement(d.Tab, {
                            key: 'tabDisplayManageCoordinateSpace',
                            label: 'Region',
                            active: this.state.tabsCoordinateSpace[0],
                            onChangeTab: function () {
                              return e.goToTabCoordinateSpace(0);
                            },
                          }),
                          u.a.createElement(d.Tab, {
                            key: 'tabDisplayPoint',
                            label: 'Point',
                            active: this.state.tabsCoordinateSpace[1],
                            onChangeTab: function () {
                              return e.goToTabCoordinateSpace(1);
                            },
                          }),
                          u.a.createElement(d.Tab, {
                            key: 'tabDisplayOrientedLink',
                            label: 'OrientedLink',
                            active: this.state.tabsCoordinateSpace[3],
                            onChangeTab: function () {
                              return e.goToTabCoordinateSpace(3);
                            },
                          })
                        ),
                        u.a.createElement(
                          d.TabContent,
                          null,
                          this.state.tabsCoordinateSpace[0] &&
                            u.a.createElement(Oe, {
                              options: this.props.options,
                              onOptionsChange: this.props.onOptionsChange,
                              data: this.props.data,
                              isRegion: !0,
                              isPoint: !1,
                              isLink: !1,
                            }),
                          this.state.tabsCoordinateSpace[1] &&
                            u.a.createElement(Oe, {
                              options: this.props.options,
                              onOptionsChange: this.props.onOptionsChange,
                              data: this.props.data,
                              isRegion: !1,
                              isPoint: !0,
                              isLink: !1,
                            }),
                          this.state.tabsCoordinateSpace[3] &&
                            u.a.createElement(Oe, {
                              options: this.props.options,
                              onOptionsChange: this.props.onOptionsChange,
                              data: this.props.data,
                              isRegion: !1,
                              isPoint: !1,
                              isLink: !0,
                            })
                        )
                      ),
                    this.state.tabsVariable[3] &&
                      u.a.createElement(
                        'div',
                        null,
                        u.a.createElement(je, { options: this.props.options, onOptionsChange: this.props.onOptionsChange, data: this.props.data })
                      ),
                    this.state.tabsVariable[4] &&
                      u.a.createElement(
                        'div',
                        null,
                        u.a.createElement(Se, { options: this.props.options, onOptionsChange: this.props.onOptionsChange, data: this.props.data })
                      )
                  ),
                  u.a.createElement(Ge, { options: this.props.options, onOptionsChange: this.props.onOptionsChange, data: this.props.data, meta: t })
                );
              }),
              t
            );
          })(u.a.PureComponent));
      n.d(t, 'plugin', function () {
        return Re;
      });
      var Re = new i.PanelPlugin(ke)
        .setDefaults({
          saveGabaritDefaultUrl: '',
          saveDefaultGabaritFile: {
            queryID: 'A',
            fileName: '',
            loaded: !1,
            globalGabarit: {
              lowerLimit: [{ id: 0, lowerLimitMin: '0', lowerLimitMax: '0', backColor: 'blue', borderColor: 'red', sizeBorder: '1px' }],
              textObject: {
                value: 'default',
                isTextTooltip: !1,
                colorBack: 'blue',
                colorText: 'black',
                style: { bold: !1, italic: !1, underline: !1 },
                generateObjectText: !1,
                valueGenerateObjectText: {
                  legendElement: 'default',
                  numericFormatElement: 'default',
                  unit: 'default',
                  displayObjectInTooltip: !1,
                  addColorTextElement: !1,
                  colorTextElement: 'black',
                  addColorBackElement: !1,
                  colorBackElement: 'white',
                },
                generateAuxiliaryElement: {
                  legendElement: 'default',
                  numericFormatElement: 'default',
                  unit: 'default',
                  displayObjectInTooltip: !1,
                  addColorTextElement: !1,
                  colorTextElement: 'black',
                  addColorBackElement: !1,
                  colorBackElement: 'white',
                },
              },
              defaultColor: 'black',
              colorMode: !0,
              traceBack: !0,
              traceBorder: !0,
            },
            templateGabaritPoint: [],
            templateGabaritRegion: [],
            templateGabaritLink: [],
            templateGabaritPointDefault: [],
            templateGabaritRegionDefault: [],
            templateGabaritLinkDefault: [],
          },
          legend: { hiddenLegend: !0, x: 0, y: 0 },
          baseMap: { image: '', layerImage: '', modeSVG: !0, width: '', height: '', idSVG: '', isUploaded: !1 },
          coordinateSpaceInitial: { coordinate: { xMin: '0', xMax: '0', yMin: '0', yMax: '0' }, displayArea: !0 },
          displayButton: !1,
          regionCoordinateSpace: [],
          arrayPoints: [],
          arrayLinks: [],
          arrayOrientedLinks: [],
          display: { police: 'Helvetica', size: '1em', style: { italic: !1, bold: !1, underline: !1 } },
          fondIsActive: !0,
          contourIsActive: !0,
          lowerLimit: [],
          colorMode: !0,
          contentJson: 'contenu du dashboard',
          Id: 0,
          uid: '',
          title: '',
          style: '',
          editable: '',
          version: 0,
          refresh: { value: '0', label: '0' },
          shemaVersion: 0,
          timezone: '',
          actualPanel: { value: '0', label: '0' },
          panelList: [{ value: '0', label: '0' }],
          panelId: 0,
          panelType: '',
          panelTargets: [],
          promTargets: [],
          promGlobalTargets: [],
          Json: {},
          timeRange: { from: '2020-01-02 00:00:00', to: '2020-01-02 00:00:00' },
          personalTarget: { expr: '' },
          timeQuery: '2020-01-02 00:00:00',
          promUrl: 'http://localhost:9090/api/v1/',
          queryProm: [],
          queryPromGlobal: [],
          queryPromRange: [],
          listStep: [{ value: '0', label: '0' }],
          jsonQueryReturn: [],
          jsonGlobalQueryReturn: [],
          mainTarget: { expr: '' },
          mainQueryProm: '',
          mainQueryReturn: { status: '', data: { resultType: '', result: [{ metric: { __name__: '', job: '' }, value: [] }] } },
          testMainQueryReturn: {},
          coordinatesToDrawLinkWithClick: [
            { id: 0 },
            { x: 0, xDefault: 0, y: 0, yDefault: 0, labelPoint: '', point: {}, labelRegion: '', region: {} },
            { x: 0, xDefault: 0, y: 0, yDefault: 0, labelPoint: '', point: {}, labelRegion: '', region: {} },
            { x: 0, y: 0, labelPoint: '', point: {}, labelRegion: '', region: {} },
          ],
          indexOrientedLink: 0,
          indexPoint: 0,
          indexRegion: 0,
          listCollapsePoint: [],
          listCollapseOrientedLink: [],
          saveImportUrl: { total: [], multi: [], mono: [] },
          saveImportFile: [],
          totalUrlInput: '',
          multiUrlInput: '',
          monoUrlInput: '',
          zIndexOrientedLink: 1,
          orientedLinkToUpgrade: {},
          orientedLinkToDowngrade: {},
          checkIndexMultiLink: 0,
          newPoint: !0,
          newOrientedLink: !0,
          currentDashboard: !1,
          gabaritUrlInput: '',
          saveGabaritURL: [],
          saveGabaritFile: [],
          gabaritDefault: {
            queryID: 'A',
            fileName: 'default',
            loaded: !1,
            globalGabarit: {
              lowerLimit: [{ id: 0, lowerLimitMin: '0', lowerLimitMax: '0', backColor: 'blue', borderColor: 'red', sizeBorder: '1px' }],
              textObject: {
                value: 'default',
                isTextTooltip: !1,
                colorBack: 'blue',
                colorText: 'black',
                style: { bold: !1, italic: !1, underline: !1 },
                generateObjectText: !1,
                valueGenerateObjectText: {
                  legendElement: 'default',
                  numericFormatElement: 'default',
                  unit: 'default',
                  displayObjectInTooltip: !1,
                  addColorTextElement: !1,
                  colorTextElement: 'black',
                  addColorBackElement: !1,
                  colorBackElement: 'white',
                },
                generateAuxiliaryElement: {
                  legendElement: 'default',
                  numericFormatElement: 'default',
                  unit: 'default',
                  displayObjectInTooltip: !1,
                  addColorTextElement: !1,
                  colorTextElement: 'black',
                  addColorBackElement: !1,
                  colorBackElement: 'white',
                },
              },
              defaultColor: 'black',
              colorMode: !0,
              traceBack: !0,
              traceBorder: !0,
            },
            templateGabaritPoint: [],
            templateGabaritRegion: [],
            templateGabaritLink: [],
            templateGabaritPointDefault: [],
            templateGabaritRegionDefault: [],
            templateGabaritLinkDefault: [],
          },
          updateOnlyInitialSpace: !1,
        })
        .setEditor(Ve);
    },
  ]);
});
//# sourceMappingURL=module.js.map
