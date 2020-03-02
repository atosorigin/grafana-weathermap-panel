define(["@grafana/data","@grafana/ui","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/lib/loader.js!./style/CoordinateSpace.css":
/*!***************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--8-1!../node_modules/postcss-loader/src??ref--8-2!../node_modules/sass-loader/lib/loader.js!./style/CoordinateSpace.css ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "div.inputCoor {\n  margin-bottom: 5%; }\n\ndiv.buttonAddCoor {\n  text-align: center; }\n", "",{"version":3,"sources":["CoordinateSpace.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB,EAAE","file":"CoordinateSpace.css","sourcesContent":["div.inputCoor {\n  margin-bottom: 5%; }\n\ndiv.buttonAddCoor {\n  text-align: center; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/lib/loader.js!./style/SimpleEditor.css":
/*!************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--8-1!../node_modules/postcss-loader/src??ref--8-2!../node_modules/sass-loader/lib/loader.js!./style/SimpleEditor.css ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "div.divSimpleEditor {\n  width: 100%;\n  /* margin: 2%;\n  padding: 2%; */ }\n\ndiv.CoordinateSpaceInitital {\n  /* margin: 1%; */\n  /* margin-bottom: 8%; */ }\n\nh3.titreSection {\n  margin-bottom: 2%;\n  /*   color: blue; */ }\n\n.parameter-interface-container {\n  width: 100%; }\n\n.parameter-interface-list-title {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n  border-bottom: 4px solid white;\n  margin: 10px 0; }\n\n.parameter-interface-title {\n  padding: 10px;\n  list-style: none;\n  cursor: pointer; }\n", "",{"version":3,"sources":["SimpleEditor.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX;gBACc,EAAE;;AAElB;EACE,gBAAgB;EAChB,uBAAuB,EAAE;;AAE3B;EACE,iBAAiB;EACjB,mBAAmB,EAAE;;AAEvB;EACE,WAAW,EAAE;;AAEf;EACE,qBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,2BAAmB;MAAnB,uBAAmB;UAAnB,mBAAmB;EACnB,qCAA6B;MAA7B,yBAA6B;UAA7B,6BAA6B;EAC7B,8BAA8B;EAC9B,cAAc,EAAE;;AAElB;EACE,aAAa;EACb,gBAAgB;EAChB,eAAe,EAAE","file":"SimpleEditor.css","sourcesContent":["div.divSimpleEditor {\n  width: 100%;\n  /* margin: 2%;\n  padding: 2%; */ }\n\ndiv.CoordinateSpaceInitital {\n  /* margin: 1%; */\n  /* margin-bottom: 8%; */ }\n\nh3.titreSection {\n  margin-bottom: 2%;\n  /*   color: blue; */ }\n\n.parameter-interface-container {\n  width: 100%; }\n\n.parameter-interface-list-title {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  border-bottom: 4px solid white;\n  margin: 10px 0; }\n\n.parameter-interface-title {\n  padding: 10px;\n  list-style: none;\n  cursor: pointer; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../node_modules/style-loader/lib/addStyles.js":
/*!*****************************************************!*\
  !*** ../node_modules/style-loader/lib/addStyles.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "../node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../node_modules/style-loader/lib/urls.js":
/*!************************************************!*\
  !*** ../node_modules/style-loader/lib/urls.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./Functions/Input/inputButton.tsx":
/*!*****************************************!*\
  !*** ./Functions/Input/inputButton.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);



var InputButtonField = function InputButtonField(_a) {
  var label = _a.label,
      value = _a.value,
      name = _a.name,
      required = _a.required,
      _handleChange = _a._handleChange,
      id = _a.id,
      withLabel = _a.withLabel;

  if (withLabel === true) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["FormField"], {
      label: label,
      labelWidth: 10,
      inputWidth: 20,
      type: 'button',
      required: required,
      name: name,
      id: id,
      onClick: _handleChange,
      value: label || ''
    }));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: _handleChange,
      variant: 'danger',
      id: id,
      size: 'md'
    }, "Delete"));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (InputButtonField);

/***/ }),

/***/ "./Functions/Input/inputSelect.tsx":
/*!*****************************************!*\
  !*** ./Functions/Input/inputSelect.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);



var InputSelect = function InputSelect(_a) {
  var _onChange = _a._onChange,
      data = _a.data,
      defaultValue = _a.defaultValue;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    onChange: function onChange(value) {
      return _onChange(value);
    },
    allowCustomValue: false,
    options: data,
    width: 10,
    value: defaultValue
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (InputSelect);

/***/ }),

/***/ "./Functions/Input/inputSelectLink.tsx":
/*!*********************************************!*\
  !*** ./Functions/Input/inputSelectLink.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);



var InputSelectLink = function InputSelectLink(_a) {
  var _onChange = _a._onChange,
      data = _a.data,
      index = _a.index,
      defaultValue = _a.defaultValue,
      name = _a.name,
      defineHowToGetCoordinate = _a.defineHowToGetCoordinate,
      label = _a.label,
      orientationLink = _a.orientationLink;

  if (name.startsWith('pointIn') || name.startsWith('pointOut')) {
    if (defineHowToGetCoordinate === 'point') {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: 'flex',
          marginBottom: '2px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
        width: 10
      }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
        onChange: function onChange(value) {
          return _onChange(value, name, index);
        },
        allowCustomValue: false,
        options: data,
        value: defaultValue,
        width: 20
      }));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
    }
  } else if (name.startsWith('regionIn') || name.startsWith('regionOut')) {
    if (defineHowToGetCoordinate === 'region') {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: 'flex',
          marginBottom: '2px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
        width: 10
      }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
        onChange: function onChange(value) {
          return _onChange(value, name, index);
        },
        allowCustomValue: false,
        options: data,
        value: defaultValue,
        width: 20
      }));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
    }
  } else if (name.startsWith('orientationLink')) {
    if (defineHowToGetCoordinate !== undefined) {
      if (orientationLink === undefined) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            display: 'flex',
            marginTop: '2px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
          width: 10
        }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
          onChange: function onChange(value) {
            return _onChange(value, name, index);
          },
          allowCustomValue: false,
          options: data,
          value: defaultValue,
          width: 20
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          style: {
            color: 'red',
            paddingLeft: '20px',
            paddingTop: '8px'
          }
        }, "Please select a value"));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            display: 'flex',
            marginBottom: '2px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
          width: 10
        }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
          onChange: function onChange(value) {
            return _onChange(value, name, index);
          },
          allowCustomValue: false,
          options: data,
          value: defaultValue,
          width: 20
        }));
      }
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
    }
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: 'flex',
        marginBottom: '2px'
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
      width: 10
    }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      onChange: function onChange(value) {
        return _onChange(value, name, index);
      },
      allowCustomValue: false,
      options: data,
      value: defaultValue,
      width: 20
    }));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (InputSelectLink);

/***/ }),

/***/ "./Functions/Input/inputSelectOrientedLink.tsx":
/*!*****************************************************!*\
  !*** ./Functions/Input/inputSelectOrientedLink.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);



var InputSelectOrientedLink = function InputSelectOrientedLink(_a) {
  var _onChange = _a._onChange,
      data = _a.data,
      index = _a.index,
      defaultValue = _a.defaultValue,
      name = _a.name,
      label = _a.label;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      marginBottom: '2px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
    width: 10
  }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    onChange: function onChange(value) {
      return _onChange(value, name, index);
    },
    allowCustomValue: false,
    options: data,
    value: defaultValue,
    width: 20
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (InputSelectOrientedLink);

/***/ }),

/***/ "./Functions/Input/inputSelectPoint.tsx":
/*!**********************************************!*\
  !*** ./Functions/Input/inputSelectPoint.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);



var InputSelectPoint = function InputSelectPoint(_a) {
  var _onChange = _a._onChange,
      data = _a.data,
      index = _a.index,
      defaultValue = _a.defaultValue,
      name = _a.name,
      shape = _a.shape,
      label = _a.label;

  if (name !== undefined) {
    if (shape !== 'arrow' && name.startsWith('sizeHeight')) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: 'flex',
          marginBottom: '2px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
        width: 10
      }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
        onChange: function onChange(value) {
          return _onChange(value, name, index);
        },
        allowCustomValue: false,
        options: data,
        value: defaultValue,
        width: 20
      }));
    }
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: 'flex',
        marginBottom: '2px'
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
      width: 10
    }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      onChange: function onChange(value) {
        return _onChange(value, name, index);
      },
      allowCustomValue: false,
      options: data,
      value: defaultValue,
      width: 20
    }));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (InputSelectPoint);

/***/ }),

/***/ "./Functions/Input/inputSeriesColorPicker.tsx":
/*!****************************************************!*\
  !*** ./Functions/Input/inputSeriesColorPicker.tsx ***!
  \****************************************************/
/*! exports provided: InputSeriesColorPicker, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSeriesColorPicker", function() { return InputSeriesColorPicker; });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * 1.7 -> taille approximative d'un caractere
 * @param param0 voir InputTextFieldProps
 */

var InputSeriesColorPicker = function InputSeriesColorPicker(_a) {
  var color = _a.color,
      keyInt = _a.keyInt,
      text = _a.text,
      _onChange = _a._onChange,
      width = _a.width;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'form-field'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["FormLabel"], {
    width: width || Math.round(text.length * 1.7)
  }, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: 'colorPicker',
    style: {
      margin: '1%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["ColorPicker"], {
    color: color,
    onChange: function onChange(newColor) {
      return _onChange(keyInt, newColor);
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (InputSeriesColorPicker);

/***/ }),

/***/ "./Functions/Input/inputSeriesColorPickerLink.tsx":
/*!********************************************************!*\
  !*** ./Functions/Input/inputSeriesColorPickerLink.tsx ***!
  \********************************************************/
/*! exports provided: InputSeriesColorPickerLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSeriesColorPickerLink", function() { return InputSeriesColorPickerLink; });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var InputSeriesColorPickerLink = function InputSeriesColorPickerLink(_a) {
  var color = _a.color,
      keyInt = _a.keyInt,
      text = _a.text,
      _onChange = _a._onChange,
      defineHowToGetCoordinate = _a.defineHowToGetCoordinate,
      name = _a.name,
      width = _a.width; // console.log(defineHowToGetCoordinate)

  if (defineHowToGetCoordinate === 'coordinate') {
    if (name.startsWith('colorCoordinate')) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: 'form-field'
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["FormLabel"], {
        width: width || Math.round(text.length * 1.7)
      }, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: 'colorPicker',
        style: {
          marginTop: '10px',
          marginLeft: '131px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["ColorPicker"], {
        color: color,
        onChange: function onChange(newColor) {
          return _onChange(keyInt, newColor);
        }
      })));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
    }
  } else if (defineHowToGetCoordinate === 'region') {
    if (name.startsWith('colorRegion')) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: 'form-field'
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["FormLabel"], {
        width: width || Math.round(text.length * 1.7)
      }, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: 'colorPicker',
        style: {
          marginTop: '10px',
          marginLeft: '131px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["ColorPicker"], {
        color: color,
        onChange: function onChange(newColor) {
          return _onChange(keyInt, newColor);
        }
      })));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
    }
  } else {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (InputSeriesColorPickerLink);

/***/ }),

/***/ "./Functions/Input/inputSeriesColorPickerOrientedLink.tsx":
/*!****************************************************************!*\
  !*** ./Functions/Input/inputSeriesColorPickerOrientedLink.tsx ***!
  \****************************************************************/
/*! exports provided: InputSeriesColorPickerOrientedLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSeriesColorPickerOrientedLink", function() { return InputSeriesColorPickerOrientedLink; });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var InputSeriesColorPickerOrientedLink = function InputSeriesColorPickerOrientedLink(_a) {
  var color = _a.color,
      keyInt = _a.keyInt,
      text = _a.text,
      _onChange = _a._onChange,
      width = _a.width;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'form-field'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["FormLabel"], {
    width: width || Math.round(text.length * 1.7)
  }, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: 'colorPicker',
    style: {
      marginTop: '10px',
      marginLeft: '131px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["ColorPicker"], {
    color: color,
    onChange: function onChange(newColor) {
      return _onChange(keyInt, newColor);
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (InputSeriesColorPickerOrientedLink);

/***/ }),

/***/ "./Functions/Input/inputSeriesColorPickerPoint.tsx":
/*!*********************************************************!*\
  !*** ./Functions/Input/inputSeriesColorPickerPoint.tsx ***!
  \*********************************************************/
/*! exports provided: InputSeriesColorPickerPoint, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSeriesColorPickerPoint", function() { return InputSeriesColorPickerPoint; });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * 1.7 -> taille approximative d'un caractere
 * @param param0 voir InputTextFieldProps
 */

var InputSeriesColorPickerPoint = function InputSeriesColorPickerPoint(_a) {
  var color = _a.color,
      keyInt = _a.keyInt,
      text = _a.text,
      _onChange = _a._onChange,
      width = _a.width;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'form-field'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["FormLabel"], {
    width: width || Math.round(text.length * 1.7)
  }, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: 'colorPicker',
    style: {
      marginTop: '10px',
      marginLeft: '131px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["ColorPicker"], {
    color: color,
    onChange: function onChange(newColor) {
      return _onChange(keyInt, newColor);
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (InputSeriesColorPickerPoint);

/***/ }),

/***/ "./Functions/Input/inputText.tsx":
/*!***************************************!*\
  !*** ./Functions/Input/inputText.tsx ***!
  \***************************************/
/*! exports provided: InputTextField, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextField", function() { return InputTextField; });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var InputTextField = function InputTextField(_a) {
  var label = _a.label,
      name = _a.name,
      placeholder = _a.placeholder,
      required = _a.required,
      value = _a.value,
      _handleChange = _a._handleChange,
      disabled = _a.disabled;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["FormField"], {
    label: label,
    labelWidth: Math.round((label && label.length > 0 ? label.length : 1) * 1.7),
    inputWidth: 20,
    type: 'text',
    required: required,
    name: name,
    value: value,
    onChange: _handleChange,
    placeholder: placeholder,
    disabled: disabled ? disabled : false
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (InputTextField);

/***/ }),

/***/ "./Functions/Input/inputTextLink.tsx":
/*!*******************************************!*\
  !*** ./Functions/Input/inputTextLink.tsx ***!
  \*******************************************/
/*! exports provided: InputTextLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextLink", function() { return InputTextLink; });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var InputTextLink = function InputTextLink(_a) {
  var label = _a.label,
      name = _a.name,
      placeholder = _a.placeholder,
      required = _a.required,
      value = _a.value,
      _handleChange = _a._handleChange,
      defineHowToGetCoordinate = _a.defineHowToGetCoordinate;

  if (name.startsWith('pointAX') || name.startsWith('pointAY') || name.startsWith('pointBX') || name.startsWith('pointBY')) {
    if (defineHowToGetCoordinate === 'coordinate') {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["FormField"], {
        label: label,
        labelWidth: 10,
        inputWidth: 20,
        type: 'text',
        required: required,
        name: name,
        value: value,
        onChange: _handleChange,
        placeholder: placeholder
      }));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
    }
  } else if (name.startsWith('labelLink') || name.startsWith('positionXLabelLinkA') || name.startsWith('positionYLabelLinkA') || name.startsWith('positionXLabelLinkB') || name.startsWith('positionYLabelLinkB')) {
    if (defineHowToGetCoordinate === undefined) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["FormField"], {
        label: label,
        labelWidth: 10,
        inputWidth: 20,
        type: 'text',
        required: required,
        name: name,
        value: value,
        onChange: _handleChange,
        placeholder: placeholder
      }));
    }
  } else {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["FormField"], {
      label: label,
      labelWidth: 10,
      inputWidth: 20,
      type: 'text',
      required: required,
      name: name,
      value: value,
      onChange: _handleChange,
      placeholder: placeholder
    }));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (InputTextLink);

/***/ }),

/***/ "./Functions/Input/inputTextOrientedLink.tsx":
/*!***************************************************!*\
  !*** ./Functions/Input/inputTextOrientedLink.tsx ***!
  \***************************************************/
/*! exports provided: InputTextOrientedLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextOrientedLink", function() { return InputTextOrientedLink; });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var InputTextOrientedLink = function InputTextOrientedLink(_a) {
  var label = _a.label,
      name = _a.name,
      placeholder = _a.placeholder,
      required = _a.required,
      value = _a.value,
      _handleChange = _a._handleChange;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["FormField"], {
    label: label,
    labelWidth: 10,
    inputWidth: 20,
    type: 'text',
    required: required,
    name: name,
    value: value,
    onChange: _handleChange,
    placeholder: placeholder
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (InputTextOrientedLink);

/***/ }),

/***/ "./Functions/Input/inputTextPoint.tsx":
/*!********************************************!*\
  !*** ./Functions/Input/inputTextPoint.tsx ***!
  \********************************************/
/*! exports provided: InputTextPoint, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextPoint", function() { return InputTextPoint; });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var InputTextPoint = function InputTextPoint(_a) {
  var label = _a.label,
      name = _a.name,
      placeholder = _a.placeholder,
      required = _a.required,
      value = _a.value,
      _handleChange = _a._handleChange,
      shape = _a.shape;

  if (name !== undefined) {
    if (shape !== 'arrow' && name.startsWith('rotateArrow')) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["FormField"], {
        label: label,
        labelWidth: 10,
        inputWidth: 20,
        type: 'text',
        required: required,
        name: name,
        value: value,
        onChange: _handleChange,
        placeholder: placeholder
      }));
    }
  } else {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["FormField"], {
      label: label,
      labelWidth: 10,
      inputWidth: 20,
      type: 'text',
      required: required,
      name: name,
      value: value,
      onChange: _handleChange,
      placeholder: placeholder
    }));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (InputTextPoint);

/***/ }),

/***/ "./Functions/createInputCoor.tsx":
/*!***************************************!*\
  !*** ./Functions/createInputCoor.tsx ***!
  \***************************************/
/*! exports provided: createInputCoor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInputCoor", function() { return createInputCoor; });
/* harmony import */ var Models_InputClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Models/InputClass */ "./Models/InputClass.tsx");

var createInputCoor = function createInputCoor(id, isInitial) {
  var l10n = __webpack_require__(/*! Localization/en.json */ "./Localization/en.json");

  var newFieldLabel = new Models_InputClass__WEBPACK_IMPORTED_MODULE_0__["InputClass"](id.toString() + 'label', l10n.basics.label, 'label' + id.toString(), 'text', true, 'Label', undefined);
  var newFieldPositionXMin = new Models_InputClass__WEBPACK_IMPORTED_MODULE_0__["InputClass"](id.toString() + 'xMin', l10n.inputCoordinate.minXPosition, 'positionXMin' + id.toString(), 'text', true, l10n.inputCoordinate.minXPosition, undefined);
  var newFieldPositionXMax = new Models_InputClass__WEBPACK_IMPORTED_MODULE_0__["InputClass"](id.toString() + 'xMax', l10n.inputCoordinate.maxXPosition, 'positionXMax' + id.toString(), 'text', true, l10n.inputCoordinate.maxXPosition, undefined);
  var newFieldPositionYMin = new Models_InputClass__WEBPACK_IMPORTED_MODULE_0__["InputClass"](id.toString() + 'yMin', l10n.inputCoordinate.minYPosition, 'positionYMin' + id.toString(), 'text', true, l10n.inputCoordinate.minYPosition, undefined);
  var newFieldPositionYMax = new Models_InputClass__WEBPACK_IMPORTED_MODULE_0__["InputClass"](id.toString() + 'yMax', l10n.inputCoordinate.maxYPosition, 'positionYMax' + id.toString(), 'text', true, l10n.inputCoordinate.maxYPosition, undefined); // const newFieldKey: InputClass = new InputClass(id.toString() + 'key',
  // 	l10n.inputCoordinate.key, 'key' + id.toString(),
  // 	'text', true, l10n.inputCoordinate.key, undefined);
  // const newFieldValueKey: InputClass = new InputClass(id.toString() + 'valueKey',
  // 	l10n.inputCoordinate.valueKey, 'valueKey' + id.toString(),
  // 	'text', true, l10n.inputCoordinate.valueKey, undefined);
  // const newFieldButton: InputClass = new InputClass(id.toString() + 'supprimer',
  // 	l10n.basics.delete, 'supprimer' + id.toString(),
  // 	'button', false, undefined, l10n.basics.delete);

  var finalArray = [];

  if (!isInitial) {
    finalArray = [newFieldLabel];
  } else {
    finalArray = [newFieldLabel, newFieldPositionXMin, newFieldPositionXMax, newFieldPositionYMin, newFieldPositionYMax];
  }

  return finalArray;
};

/***/ }),

/***/ "./Functions/createInputsLink.tsx":
/*!****************************************!*\
  !*** ./Functions/createInputsLink.tsx ***!
  \****************************************/
/*! exports provided: createInputsLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInputsLink", function() { return createInputsLink; });
/* harmony import */ var Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Models/InputSelectableClass */ "./Models/InputSelectableClass.tsx");

var createInputsLink = function createInputsLink(id, dataPoint, dataRegion) {
  var newFieldCoordinates = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'GetCoordinate', 'Coordinates type', 'getCoordinate' + id.toString(), 'select', [{
    label: 'Coordinate',
    value: 'coordinate'
  }, {
    label: 'Point',
    value: 'point'
  }, {
    label: 'Region',
    value: 'region'
  }], '', true, 'getCoordinate', undefined);
  var newFieldOrientationLink = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'orientationLink', 'Orientation', 'orientationLink' + id.toString(), 'select', [{
    label: 'Unidirectional',
    value: 'AB'
  }, {
    label: 'Bidirectional',
    value: 'double'
  }], '', true, 'Orientation', undefined);
  var newFieldPointAPositionX = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'pointAX', 'Point A - X', 'pointAX' + id.toString(), 'text', [], '', true, 'PointA-X', undefined);
  var newFieldPointAPositionY = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'pointAY', 'Point A - Y', 'pointAY' + id.toString(), 'text', [], '', true, 'PointA-Y', undefined); // const newFieldColorCoordinateA: InputSelectableClass = new InputSelectableClass(id.toString() + 'colorCoordinateA',
  // 	'Color A', 'colorCoordinateA' + id.toString(), 'color',
  // 	[], '', true, '', undefined);

  var newFieldPointBPositionX = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'pointBX', 'Point B - X', 'pointBX' + id.toString(), 'text', [], '', true, 'PointB-X', undefined);
  var newFieldPointBPositionY = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'pointBY', 'Point B - Y', 'pointBY' + id.toString(), 'text', [], '', true, 'PointB-Y', undefined); // const newFieldColorCoordinateB: InputSelectableClass = new InputSelectableClass(id.toString() + 'colorCoordinateB',
  // 	'Color B', 'colorCoordinateB' + id.toString(), 'color',
  // 	[], '', true, '', undefined);

  var newFieldPointIn = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'pointIn', 'Point in', 'pointIn' + id.toString(), 'select', dataPoint, '', true, 'Point in', undefined);
  var newFieldPointOut = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'pointOut', 'Point out', 'pointOut' + id.toString(), 'select', dataPoint, '', true, 'Point out', undefined);
  var newFieldRegionIn = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'regionIn', 'Region in', 'regionIn' + id.toString(), 'select', dataRegion, '', true, 'Region in', undefined); // const newFieldColorRegionIn: InputSelectableClass = new InputSelectableClass(id.toString() + 'colorRegionIn',
  // 	'Color A', 'colorRegionIn' + id.toString(), 'color',
  // 	[], '', true, '', undefined);

  var newFieldRegionOut = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'regionOut', 'Region out', 'regionOut' + id.toString(), 'select', dataRegion, '', true, 'Region out', undefined); // const newFieldColorRegionOut: InputSelectableClass = new InputSelectableClass(id.toString() + 'colorRegionOut',
  // 	'Color B', 'colorRegionOut' + id.toString(), 'color',
  // 	[], '', true, '', undefined);
  // const newFieldLabelLinkA: InputSelectableClass = new InputSelectableClass(id.toString() + 'labelLinkA',
  // 	'Label A', 'labelLinkA' + id.toString(), 'text',
  // 	[], '', true, 'Label A', undefined);
  // const newFieldLabelLinkAPositionX: InputSelectableClass = new InputSelectableClass(id.toString() + 'positionXLabelLinkA',
  // 	'Label A - X', 'positionXLabelLinkA' + id.toString(), 'text',
  // 	[], '', true, 'Label A - Position X', undefined);
  // const newFieldLabelLinkAPositionY: InputSelectableClass = new InputSelectableClass(id.toString() + 'posiitonYLabelLinkA',
  // 	'Label A - Y', 'positionYLabelLinkA' + id.toString(), 'text',
  // 	[], '', true, 'Label A - Position Y', undefined);
  // const newFieldLabelLinkB: InputSelectableClass = new InputSelectableClass(id.toString() + 'labelLinkB',
  // 	'Label B', 'labelLinkB' + id.toString(), 'text',
  // 	[], '', true, 'Label B', undefined);
  // const newFieldLabelLinkBPositionX: InputSelectableClass = new InputSelectableClass(id.toString() + 'positionXLabelLinkB',
  // 	'Label B - X', 'positionXLabelLinkB' + id.toString(), 'text',
  // 	[], '', true, 'Label B - Position X', undefined);
  // const newFieldLabelLinkBPositionY: InputSelectableClass = new InputSelectableClass(id.toString() + 'posiitonYLabelLinkB',
  // 	'Label B - Y', 'positionYLabelLinkB' + id.toString(), 'text',
  // 	[], '', true, 'Label B - Position Y', undefined);

  var newFieldButton = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'delete', 'Delete', 'delete' + id.toString(), 'button', [], '', false, undefined, 'delete');
  var finalArray = [newFieldCoordinates, newFieldOrientationLink, newFieldPointAPositionX, newFieldPointAPositionY, newFieldPointIn, newFieldRegionIn, // newFieldLabelLinkA,
  // newFieldLabelLinkAPositionX,
  // newFieldLabelLinkAPositionY,
  // newFieldColorCoordinateA,
  // newFieldColorRegionIn,
  newFieldPointBPositionX, newFieldPointBPositionY, newFieldPointOut, newFieldRegionOut, // newFieldLabelLinkB,
  // newFieldLabelLinkBPositionX,
  // newFieldLabelLinkBPositionY,
  // newFieldColorCoordinateB,
  // newFieldColorRegionOut,
  newFieldButton];
  return finalArray;
};

/***/ }),

/***/ "./Functions/createInputsOrientedLink.tsx":
/*!************************************************!*\
  !*** ./Functions/createInputsOrientedLink.tsx ***!
  \************************************************/
/*! exports provided: createInputsOrientedLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInputsOrientedLink", function() { return createInputsOrientedLink; });
/* harmony import */ var Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Models/InputSelectableClass */ "./Models/InputSelectableClass.tsx");

var createInputsOrientedLink = function createInputsOrientedLink(id, dataCoordinateSpace, dataPoint) {
  var newFieldOrientationLink = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'orientationLink', 'Orientation', 'orientationLink' + id.toString(), 'select', [{
    label: 'Unidirectional',
    value: 'AB'
  }, {
    label: 'Bidirectional',
    value: 'double'
  }], '', true, 'Orientation', undefined);
  var newFieldPointAPositionX = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'pointAX', 'Point A - X', 'pointAX' + id.toString(), 'text', [], '', true, 'PointA-X', undefined);
  var newFieldPointAPositionY = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'pointAY', 'Point A - Y', 'pointAY' + id.toString(), 'text', [], '', true, 'PointA-Y', undefined); // const newFieldColorCoordinateA: InputSelectableClass = new InputSelectableClass(id.toString() + 'colorCoordinateA',
  // 	'Color A', 'colorCoordinateA' + id.toString(), 'color',
  // 	[], '', true, '', undefined);

  var newFieldPointBPositionX = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'pointBX', 'Point B - X', 'pointBX' + id.toString(), 'text', [], '', true, 'PointB-X', undefined);
  var newFieldPointBPositionY = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'pointBY', 'Point B - Y', 'pointBY' + id.toString(), 'text', [], '', true, 'PointB-Y', undefined); // const newFieldColorCoordinateB: InputSelectableClass = new InputSelectableClass(id.toString() + 'colorCoordinateB',
  // 	'Color B', 'colorCoordinateB' + id.toString(), 'color',
  // 	[], '', true, '', undefined);
  // const newFieldLabelLinkA: InputSelectableClass = new InputSelectableClass(id.toString() + 'labelLinkA',
  // 	'Label A', 'labelLinkA' + id.toString(), 'text',
  // 	[], '', true, 'Label A', undefined);
  // const newFieldLabelLinkB: InputSelectableClass = new InputSelectableClass(id.toString() + 'labelLinkB',
  // 	'Label B', 'labelLinkB' + id.toString(), 'text',
  // 	[], '', true, 'Label B', undefined);
  // const newFieldLabelLinkAPositionX: InputSelectableClass = new InputSelectableClass(id.toString() + 'positionXLabelLinkA',
  // 	'Label A - X', 'positionXLabelLinkA' + id.toString(), 'text',
  // 	[], '', true, 'Label A - Position X', undefined);
  // const newFieldLabelLinkAPositionY: InputSelectableClass = new InputSelectableClass(id.toString() + 'posiitonYLabelLinkA',
  // 	'Label A - Y', 'positionYLabelLinkA' + id.toString(), 'text',
  // 	[], '', true, 'Label A - Position Y', undefined);
  // const newFieldLabelLinkBPositionX: InputSelectableClass = new InputSelectableClass(id.toString() + 'positionXLabelLinkB',
  // 	'Label B - X', 'positionXLabelLinkB' + id.toString(), 'text',
  // 	[], '', true, 'Label B - Position X', undefined);
  // const newFieldLabelLinkBPositionY: InputSelectableClass = new InputSelectableClass(id.toString() + 'posiitonYLabelLinkB',
  // 	'Label B - Y', 'positionYLabelLinkB' + id.toString(), 'text',
  // 	[], '', true, 'Label B - Position Y', undefined);
  // const newFieldRegionIn: InputSelectableClass = new InputSelectableClass(id.toString() + 'CoordinateSpaceAssociatePointA',
  // 	'AssociateRegionIn', 'CoordinateSpaceAssociatePointA' + id.toString(), 'select',
  // 	dataCoordinateSpace, '', true, 'Associate Region In', undefined);
  // const newFieldRegionOut: InputSelectableClass = new InputSelectableClass(id.toString() + 'CoordinateSpaceAssociatePointB',
  // 	'AssociateRegionOut', 'CoordinateSpaceAssociatePointB' + id.toString(), 'select',
  // 	dataCoordinateSpace, '', true, 'Associate Region Out', undefined);
  // const newFieldPointIn: InputSelectableClass = new InputSelectableClass(id.toString() + 'pointIn',
  // 	'AssociatePointIn', 'pointIn' + id.toString(), 'select',
  // 	dataPoint, '', true, 'Associate Point In', undefined);
  // const newFieldPointOut: InputSelectableClass = new InputSelectableClass(id.toString() + 'pointOut',
  // 	'AssociatePointOut', 'pointOut' + id.toString(), 'select',
  // 	dataPoint, '', true, 'Associate Point Out', undefined);

  var newFieldMainMetric = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'refIdMainMetric', 'Ref Id Main Metric', 'refIdMainMetric' + id.toString(), 'text', [], '', true, 'RefId Main Metric', undefined);
  var newFieldKeyMainMetric = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'keyMainMetric', 'Key Main Metric', 'keyMainMetric' + id.toString(), 'text', [], '', true, 'Key Main Metric', undefined);
  var newFieldKeyValueMainMetric = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'keyValueMainMetric', 'Key Value Main Metric', 'keyValueMainMetric' + id.toString(), 'text', [], '', true, 'Key Value Main Metric', undefined);
  var newFieldButton = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'delete', 'Delete', 'delete' + id.toString(), 'button', [], '', false, undefined, 'delete');
  var finalArray = [newFieldOrientationLink, //newFieldPointIn,
  //newFieldRegionIn,
  newFieldPointAPositionX, newFieldPointAPositionY, //newFieldLabelLinkA,
  //newFieldLabelLinkAPositionX,
  //newFieldLabelLinkAPositionY,
  //newFieldColorCoordinateA,
  //newFieldPointOut,
  //newFieldRegionOut,
  newFieldPointBPositionX, newFieldPointBPositionY, //newFieldLabelLinkB,
  //newFieldLabelLinkBPositionX,
  //newFieldLabelLinkBPositionY,
  //newFieldColorCoordinateB,
  newFieldMainMetric, newFieldKeyMainMetric, newFieldKeyValueMainMetric, newFieldButton];
  return finalArray;
};

/***/ }),

/***/ "./Functions/createInputsPoint.tsx":
/*!*****************************************!*\
  !*** ./Functions/createInputsPoint.tsx ***!
  \*****************************************/
/*! exports provided: createInputsPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInputsPoint", function() { return createInputsPoint; });
/* harmony import */ var Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Models/InputSelectableClass */ "./Models/InputSelectableClass.tsx");

var createInputsPoint = function createInputsPoint(id, dataEspaceCoor) {
  // const newFieldLinkWithCoordonateSpace: InputSelectableClass = new InputSelectableClass(id.toString() + 'LinkWithCoordinateSpace',
  // 	'Associate region', 'linkWithCoordinateSpace' + id.toString(), 'select',
  // 	dataEspaceCoor, '', true, 'Associate region', undefined);
  var newFieldDrawGraphicMarker = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'drawGraphicMarker', 'Display ', 'drawGraphicMarker' + id.toString(), 'select', [{
    value: 'true',
    label: 'Yes'
  }, {
    value: 'false',
    label: 'No'
  }], '', true, 'drawGraphicMarker', undefined); // const newFieldShape: InputSelectableClass = new InputSelectableClass(id.toString() + 'shape',
  // 	'GraphicMarker', 'shape' + id.toString(), 'select',
  // 	[
  // 		{ value: 'arrow', label: 'Arrow' },
  // 		{ value: 'circle', label: 'Circle' },
  // 		{ value: 'cross', label: 'Cross' },
  // 	],
  // 	'', true, 'Shape', undefined);

  var newFieldSizeWidthShape = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'sizeWidth', 'Size', 'sizeWidth' + id.toString(), 'select', [{
    value: 'small',
    label: 'Small'
  }, {
    value: 'medium',
    label: 'Medium'
  }, {
    value: 'large',
    label: 'Large'
  }], '', true, 'SizeWidth', undefined);
  var newFieldSizeHeightShape = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'sizeHeight', 'Width', 'sizeHeight' + id.toString(), 'select', [{
    value: 'small',
    label: 'Small'
  }, {
    value: 'medium',
    label: 'Medium'
  }, {
    value: 'large',
    label: 'Large'
  }], '', true, 'SizeHeight', undefined); // const newFieldColor: InputSelectableClass = new InputSelectableClass(id.toString() + 'color',
  // 	'Color', 'color' + id.toString(), 'color', [],
  // 	'#5794F2', true, 'Color', undefined);

  var newFieldRotateArrow = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'rotateArrow', 'Orientation', 'rotateArrow' + id.toString(), 'text', [], '', true, 'RotateArrow', undefined);
  var newFieldPositionXShape = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'positionShapeX', 'Position X', 'positionShapeX' + id.toString(), 'text', [], '', true, 'Position X Shape', undefined);
  var newFieldPositionYShape = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'positionShapeY', 'Position Y', 'positionShapeY' + id.toString(), 'text', [], '', true, 'Position Y Shape', undefined);
  var newFieldLabel = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'labelPoint', 'Label', 'labelPoint' + id.toString(), 'text', [], '', true, 'Label', undefined); // const newFieldPositionLabelX: InputSelectableClass = new InputSelectableClass(id.toString() + 'positionLabelX',
  // 	'Position X Label', 'positionLabelX' + id.toString(),
  // 	'text', [], '', true, 'Position X Label', undefined);
  // const newFieldPositionLabelY: InputSelectableClass = new InputSelectableClass(id.toString() + 'positionLabelY',
  // 	'Position Y Label', 'positionLabelY' + id.toString(),
  // 	'text', [], '', true, 'Position Y Label', undefined);

  var newFieldMainMetric = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'refIdMainMetric', 'Ref Id Main Metric', 'refIdMainMetric' + id.toString(), 'text', [], '', true, 'RefId Main Metric', undefined);
  var newFieldKeyMainMetric = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'keyMainMetric', 'Key Main Metric', 'keyMainMetric' + id.toString(), 'text', [], '', true, 'Key Main Metric', undefined);
  var newFieldKeyValueMainMetric = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'keyValueMainMetric', 'Key Value Main Metric', 'keyValueMainMetric' + id.toString(), 'text', [], '', true, 'Key Value Main Metric', undefined);
  var newFieldButton = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'delete', 'Delete', 'delete' + id.toString(), 'button', [], '', true, undefined, 'Delete');
  var finalArray = [newFieldLabel, //newFieldLinkWithCoordonateSpace,
  newFieldDrawGraphicMarker, //newFieldShape,
  newFieldSizeWidthShape, newFieldSizeHeightShape, //newFieldColor,
  newFieldRotateArrow, newFieldPositionXShape, newFieldPositionYShape, // newFieldPositionLabelX,
  // newFieldPositionLabelY,
  newFieldMainMetric, newFieldKeyMainMetric, newFieldKeyValueMainMetric, newFieldButton];
  return finalArray;
};

/***/ }),

/***/ "./Functions/editGoodParameter.tsx":
/*!*****************************************!*\
  !*** ./Functions/editGoodParameter.tsx ***!
  \*****************************************/
/*! exports provided: editGoodParameter, editGoodParameterExtend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editGoodParameter", function() { return editGoodParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editGoodParameterExtend", function() { return editGoodParameterExtend; });
/**
 * Edit the parameter in Coor object
 * @param {string} name parameter to edit
 * @param {Coor} editCoor object to edit
 * @param {string} newValue value to insert in the parameter
 * @returns {Coor} object edit
 */
var editGoodParameter = function editGoodParameter(name, editCoor, newValue) {
  if (name.startsWith('positionXMin')) {
    editCoor.setXMin(newValue);
  } else if (name.startsWith('positionXMax')) {
    editCoor.setXMax(newValue);
  } else if (name.startsWith('positionYMin')) {
    editCoor.setYMin(newValue);
  } else if (name.startsWith('positionYMax')) {
    editCoor.setYMax(newValue);
  } else if (name.startsWith('label')) {
    editCoor.setLabel(newValue);
  }

  return editCoor;
};
var editGoodParameterExtend = function editGoodParameterExtend(name, editCoor, newValue) {
  if (name.startsWith('positionXMin')) {
    editCoor.coords.xMin = newValue;
  } else if (name.startsWith('positionXMax')) {
    editCoor.coords.xMax = newValue;
  } else if (name.startsWith('positionYMin')) {
    editCoor.coords.yMin = newValue;
  } else if (name.startsWith('positionYMax')) {
    editCoor.coords.yMax = newValue;
  } else if (name.startsWith('label')) {
    editCoor.label = newValue;
  } else if (name.startsWith('image')) {
    editCoor.img = newValue;
  } else if (name.startsWith('key')) {
    editCoor.mainMetric.key = newValue;
  } else if (name.startsWith('valueKey')) {
    editCoor.mainMetric.keyValue = newValue;
  }

  return editCoor;
};

/***/ }),

/***/ "./Functions/editGoodParameterLink.tsx":
/*!*********************************************!*\
  !*** ./Functions/editGoodParameterLink.tsx ***!
  \*********************************************/
/*! exports provided: editGoodParameterLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editGoodParameterLink", function() { return editGoodParameterLink; });
/**
 * Edit the parameter in Coor object
 * @param {string} name parameter to edit
 * @param {Coor} editCoor object to edit
 * @param {string} newValue value to insert in the parameter
 * @returns {Coor} object edit
 */
var editGoodParameterLink = function editGoodParameterLink(name, editCoor, newValue, newValueSelect) {
  if (name.startsWith('getCoordinate')) {
    editCoor.defineHowToGetCoordonate = newValueSelect;
  } else if (name.startsWith('orientationLink')) {
    editCoor.orientationLink = newValueSelect;
  } else if (name.startsWith('pointIn')) {
    editCoor.pointIn = newValueSelect;
  } else if (name.startsWith('pointOut')) {
    editCoor.pointOut = newValueSelect;
  } else if (name.startsWith('regionIn')) {
    editCoor.regionIn = newValueSelect;
  } else if (name.startsWith('regionOut')) {
    editCoor.regionOut = newValueSelect;
  } else if (name.startsWith('pointAX')) {
    editCoor.pointAPositionX = newValue;
  } else if (name.startsWith('pointAY')) {
    editCoor.pointAPositionY = newValue;
  } else if (name.startsWith('pointBX')) {
    editCoor.pointBPositionX = newValue;
  } else if (name.startsWith('pointBY')) {
    editCoor.pointBPositionY = newValue;
  } else if (name.startsWith('colorCoordinateA')) {
    editCoor.colorCoordinateA = newValue;
  } else if (name.startsWith('colorCoordinateB')) {
    editCoor.colorCoordinateB = newValue;
  } else if (name.startsWith('colorRegionIn')) {
    editCoor.colorRegionIn = newValue;
  } else if (name.startsWith('colorRegionOut')) {
    editCoor.colorRegionOut = newValue;
  } else if (name.startsWith('labelLinkA')) {
    editCoor.labelLinkA = newValue;
  } else if (name.startsWith('labelLinkB')) {
    editCoor.labelLinkB = newValue;
  } else if (name.startsWith('positionXLabelLinkA')) {
    editCoor.positionXLabelA = newValue;
  } else if (name.startsWith('positionYLabelLinkA')) {
    editCoor.positionYLabelA = newValue;
  } else if (name.startsWith('positionXLabelLinkB')) {
    editCoor.positionXLabelB = newValue;
  } else if (name.startsWith('positionYLabelLinkB')) {
    editCoor.positionYLabelB = newValue;
  }

  return editCoor;
};

/***/ }),

/***/ "./Functions/editGoodParameterOrientedLink.tsx":
/*!*****************************************************!*\
  !*** ./Functions/editGoodParameterOrientedLink.tsx ***!
  \*****************************************************/
/*! exports provided: editGoodParameterOrientedLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editGoodParameterOrientedLink", function() { return editGoodParameterOrientedLink; });
/**
 * Edit the parameter in Coor object
 * @param {string} name parameter to edit
 * @param {Coor} editCoor object to edit
 * @param {string} newValue value to insert in the parameter
 * @returns {Coor} object edit
 */
var editGoodParameterOrientedLink = function editGoodParameterOrientedLink(name, editCoor, newValue, newValueSelect) {
  if (name.startsWith('orientationLink')) {
    editCoor.orientationLink = newValueSelect;
  } else if (name.startsWith('pointAX')) {
    editCoor.pointAPositionX = newValue;
  } else if (name.startsWith('pointAY')) {
    editCoor.pointAPositionY = newValue;
  } else if (name.startsWith('pointBX')) {
    editCoor.pointBPositionX = newValue;
  } else if (name.startsWith('pointBY')) {
    editCoor.pointBPositionY = newValue;
  } else if (name.startsWith('colorCoordinateA')) {
    editCoor.colorCoordinateA = newValue;
  } else if (name.startsWith('colorCoordinateB')) {
    editCoor.colorCoordinateB = newValue;
  } else if (name.startsWith('CoordinateSpaceAssociatePointA')) {
    editCoor.regionIn = newValueSelect;
  } else if (name.startsWith('CoordinateSpaceAssociatePointB')) {
    editCoor.regionOut = newValueSelect;
  } else if (name.startsWith('pointIn')) {
    editCoor.pointIn = newValueSelect;
  } else if (name.startsWith('pointOut')) {
    editCoor.pointOut = newValueSelect;
  } else if (name.startsWith('refIdMainMetric')) {
    editCoor.mainMetric.refId = newValue;
  } else if (name.startsWith('keyMainMetric')) {
    editCoor.mainMetric.key = newValue;
  } else if (name.startsWith('keyValueMainMetric')) {
    editCoor.mainMetric.keyValue = newValue;
  } // else if (name.startsWith('labelLinkA')) {
  // 	editCoor.labelLinkA = newValue;
  // } else if (name.startsWith('labelLinkB')) {
  // 	editCoor.labelLinkB = newValue;
  // } else if (name.startsWith('positionXLabelLinkA')) {
  // 	editCoor.positionXLabelA = newValue;
  // } else if (name.startsWith('positionYLabelLinkA')) {
  // 	editCoor.positionYLabelA = newValue;
  // } else if (name.startsWith('positionXLabelLinkB')) {
  // 	editCoor.positionXLabelB = newValue;
  // } else if (name.startsWith('positionYLabelLinkB')) {
  // 	editCoor.positionYLabelB = newValue;
  // }


  return editCoor;
};

/***/ }),

/***/ "./Functions/editGoodParameterPoint.tsx":
/*!**********************************************!*\
  !*** ./Functions/editGoodParameterPoint.tsx ***!
  \**********************************************/
/*! exports provided: editGoodParameterPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editGoodParameterPoint", function() { return editGoodParameterPoint; });
/**
 * Edit the parameter in Coor object
 * @param {string} name parameter to edit
 * @param {Coor} editCoor object to edit
 * @param {string} newValue value to insert in the parameter
 * @returns {Coor} object edit
 */
var editGoodParameterPoint = function editGoodParameterPoint(name, editCoor, newValue, newValueSelect) {
  if (name.startsWith('label')) {
    editCoor.label = newValue;
  } else if (name.startsWith('linkWithCoordinateSpace')) {
    editCoor.coordinateSpace = newValueSelect;
  } else if (name.startsWith('drawGraphicMarker')) {
    editCoor.drawGraphicMarker = newValueSelect;
  } else if (name.startsWith('shape')) {
    editCoor.shape = newValueSelect;
  } else if (name.startsWith('sizeWidth')) {
    editCoor.sizeWidth = newValueSelect;
  } else if (name.startsWith('sizeHeight')) {
    editCoor.sizeHeight = newValueSelect;
  } else if (name.startsWith('rotateArrow')) {
    editCoor.rotateArrow = newValue;
  } else if (name.startsWith('positionShapeX')) {
    editCoor.positionShapeX = newValue;
  } else if (name.startsWith('positionShapeY')) {
    editCoor.positionShapeY = newValue;
  } else if (name.startsWith('positionLabelX')) {
    editCoor.positionLabelX = newValue;
  } else if (name.startsWith('positionLabelY')) {
    editCoor.positionLabelY = newValue;
  } else if (name.startsWith('color')) {
    editCoor.color = newValue;
  } else if (name.startsWith('refIdMainMetric')) {
    editCoor.mainMetric.refId = newValue;
  } else if (name.startsWith('keyMainMetric')) {
    editCoor.mainMetric.key = newValue;
  } else if (name.startsWith('keyValueMainMetric')) {
    editCoor.mainMetric.keyValue = newValue;
  }

  return editCoor;
};

/***/ }),

/***/ "./Functions/fetchMetrics.tsx":
/*!************************************!*\
  !*** ./Functions/fetchMetrics.tsx ***!
  \************************************/
/*! exports provided: reqMetricRegion, reqMetricAuxRegion, reqMetricPoint, reqMetricAuxPoint, reqMetricLink, reqMetricAuxLink, reqMetricOrientedLink, reqMetricAuxOrientedLink, reqUpdateMetrics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reqMetricRegion", function() { return reqMetricRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reqMetricAuxRegion", function() { return reqMetricAuxRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reqMetricPoint", function() { return reqMetricPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reqMetricAuxPoint", function() { return reqMetricAuxPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reqMetricLink", function() { return reqMetricLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reqMetricAuxLink", function() { return reqMetricAuxLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reqMetricOrientedLink", function() { return reqMetricOrientedLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reqMetricAuxOrientedLink", function() { return reqMetricAuxOrientedLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reqUpdateMetrics", function() { return reqUpdateMetrics; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");

var reqMetricRegion = function reqMetricRegion(region, props) {
  var e_1, _a;

  var data = {
    'fields': [],
    'length': 0
  };

  try {
    for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.data.series), _c = _b.next(); !_c.done; _c = _b.next()) {
      var line = _c.value;

      if (line.refId === region.mainMetric.refId) {
        data = line;
        break;
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  region.mainMetric.returnQuery = data;
};
var reqMetricAuxRegion = function reqMetricAuxRegion(region, props) {
  var e_2, _a, e_3, _b;

  var data = {
    'fields': [],
    'length': 0
  };

  try {
    for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(region.metrics), _d = _c.next(); !_d.done; _d = _c.next()) {
      var metric = _d.value;

      try {
        for (var _e = (e_3 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.data.series)), _f = _e.next(); !_f.done; _f = _e.next()) {
          var line = _f.value;

          if (line.refId === metric.refId) {
            data = line;
            break;
          }
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
        } finally {
          if (e_3) throw e_3.error;
        }
      }

      metric.returnQuery = data;
    }
  } catch (e_2_1) {
    e_2 = {
      error: e_2_1
    };
  } finally {
    try {
      if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
    } finally {
      if (e_2) throw e_2.error;
    }
  }
};
var reqMetricPoint = function reqMetricPoint(point, props) {
  var e_4, _a;

  var data = {
    'fields': [],
    'length': 0
  };

  try {
    for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.data.series), _c = _b.next(); !_c.done; _c = _b.next()) {
      var line = _c.value;

      if (line.refId === point.mainMetric.refId) {
        data = line;
        break;
      }
    }
  } catch (e_4_1) {
    e_4 = {
      error: e_4_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
    } finally {
      if (e_4) throw e_4.error;
    }
  }

  point.mainMetric.returnQuery = data;
};
var reqMetricAuxPoint = function reqMetricAuxPoint(point, props) {
  var e_5, _a, e_6, _b;

  var data = {
    'fields': [],
    'length': 0
  };

  try {
    for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(point.metrics), _d = _c.next(); !_d.done; _d = _c.next()) {
      var metric = _d.value;

      try {
        for (var _e = (e_6 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.data.series)), _f = _e.next(); !_f.done; _f = _e.next()) {
          var line = _f.value;

          if (line.refId === metric.refId) {
            data = line;
            break;
          }
        }
      } catch (e_6_1) {
        e_6 = {
          error: e_6_1
        };
      } finally {
        try {
          if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
        } finally {
          if (e_6) throw e_6.error;
        }
      }

      metric.returnQuery = data;
    }
  } catch (e_5_1) {
    e_5 = {
      error: e_5_1
    };
  } finally {
    try {
      if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
    } finally {
      if (e_5) throw e_5.error;
    }
  }
};
var reqMetricLink = function reqMetricLink(link, props) {
  var e_7, _a;

  var data = {
    'fields': [],
    'length': 0
  };

  try {
    for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.data.series), _c = _b.next(); !_c.done; _c = _b.next()) {
      var line = _c.value;

      if (line.refId === link.mainMetric.refId) {
        data = line;
        break;
      }
    }
  } catch (e_7_1) {
    e_7 = {
      error: e_7_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
    } finally {
      if (e_7) throw e_7.error;
    }
  }

  link.mainMetric.returnQuery = data;
};
var reqMetricAuxLink = function reqMetricAuxLink(link, props) {
  var e_8, _a, e_9, _b;

  var data = {
    'fields': [],
    'length': 0
  };

  try {
    for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(link.metrics), _d = _c.next(); !_d.done; _d = _c.next()) {
      var metric = _d.value;

      try {
        for (var _e = (e_9 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.data.series)), _f = _e.next(); !_f.done; _f = _e.next()) {
          var line = _f.value;

          if (line.refId === metric.refId) {
            data = line;
            break;
          }
        }
      } catch (e_9_1) {
        e_9 = {
          error: e_9_1
        };
      } finally {
        try {
          if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
        } finally {
          if (e_9) throw e_9.error;
        }
      }

      metric.returnQuery = data;
    }
  } catch (e_8_1) {
    e_8 = {
      error: e_8_1
    };
  } finally {
    try {
      if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
    } finally {
      if (e_8) throw e_8.error;
    }
  }
};
var reqMetricOrientedLink = function reqMetricOrientedLink(orientedLink, props) {
  var e_10, _a;

  var data = {
    'fields': [],
    'length': 0
  };

  try {
    for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.data.series), _c = _b.next(); !_c.done; _c = _b.next()) {
      var line = _c.value;

      if (line.refId === orientedLink.mainMetric.refId) {
        data = line;
        break;
      }
    }
  } catch (e_10_1) {
    e_10 = {
      error: e_10_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
    } finally {
      if (e_10) throw e_10.error;
    }
  }

  orientedLink.mainMetric.returnQuery = data;
};
var reqMetricAuxOrientedLink = function reqMetricAuxOrientedLink(orientedLink, props) {
  var e_11, _a, e_12, _b;

  var data = {
    'fields': [],
    'length': 0
  };

  try {
    for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(orientedLink.metrics), _d = _c.next(); !_d.done; _d = _c.next()) {
      var metric = _d.value;

      try {
        for (var _e = (e_12 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.data.request.targets)), _f = _e.next(); !_f.done; _f = _e.next()) {
          var line = _f.value;

          if (line.expr === metric.expr) {
            data = line;
            break;
          }
        }
      } catch (e_12_1) {
        e_12 = {
          error: e_12_1
        };
      } finally {
        try {
          if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
        } finally {
          if (e_12) throw e_12.error;
        }
      }

      metric.returnQuery = data;
    }
  } catch (e_11_1) {
    e_11 = {
      error: e_11_1
    };
  } finally {
    try {
      if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
    } finally {
      if (e_11) throw e_11.error;
    }
  }
};
var reqUpdateMetrics = function reqUpdateMetrics(props) {
  var e_13, _a, e_14, _b, e_15, _c;

  try {
    // Update regions
    for (var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.options.arrayCoordinateSpace), _e = _d.next(); !_e.done; _e = _d.next()) {
      var region = _e.value;
      reqMetricRegion(region, props);
      reqMetricAuxRegion(region, props);
    }
  } catch (e_13_1) {
    e_13 = {
      error: e_13_1
    };
  } finally {
    try {
      if (_e && !_e.done && (_a = _d["return"])) _a.call(_d);
    } finally {
      if (e_13) throw e_13.error;
    }
  }

  try {
    // Update links
    for (var _f = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.options.arrayLinks), _g = _f.next(); !_g.done; _g = _f.next()) {
      var link = _g.value;
      reqMetricLink(link, props);
      reqMetricAuxLink(link, props);
    }
  } catch (e_14_1) {
    e_14 = {
      error: e_14_1
    };
  } finally {
    try {
      if (_g && !_g.done && (_b = _f["return"])) _b.call(_f);
    } finally {
      if (e_14) throw e_14.error;
    }
  }

  try {
    // Update points
    for (var _h = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.options.arrayLinks), _j = _h.next(); !_j.done; _j = _h.next()) {
      var point = _j.value;
      reqMetricPoint(point, props);
      reqMetricAuxPoint(point, props);
    }
  } catch (e_15_1) {
    e_15 = {
      error: e_15_1
    };
  } finally {
    try {
      if (_j && !_j.done && (_c = _h["return"])) _c.call(_h);
    } finally {
      if (e_15) throw e_15.error;
    }
  }
};

/***/ }),

/***/ "./Functions/initRegionCoordinateSpace.tsx":
/*!*************************************************!*\
  !*** ./Functions/initRegionCoordinateSpace.tsx ***!
  \*************************************************/
/*! exports provided: initRegionCoordinateSpace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initRegionCoordinateSpace", function() { return initRegionCoordinateSpace; });
/* harmony import */ var Models_RegionClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Models/RegionClass */ "./Models/RegionClass.tsx");
/* harmony import */ var Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Models/TextObjectClass */ "./Models/TextObjectClass.tsx");
/* harmony import */ var Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Models/LinkURLClass */ "./Models/LinkURLClass.tsx");



/** init CoordinateSpaceExtendClass */

var initRegionCoordinateSpace = function initRegionCoordinateSpace(index) {
  var newId = index + 1;
  var initTextObject = new Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_1__["TextObject"]('', '', '', false, 'rgba(255, 255, 255, 0)', 'rgba(0, 0, 0, 1)', '', false, '', '', '', false, false, false, '', false, '');
  var linkURL = new Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_2__["LinkURLClass"]('', '', '');
  var coords = {
    'xMin': '0',
    'xMax': '0',
    'yMin': '0',
    'yMax': '0'
  };
  var newCoordinate = new Models_RegionClass__WEBPACK_IMPORTED_MODULE_0__["RegionClass"](newId, linkURL, '', [], '', initTextObject, {
    'key': '',
    'unit': '',
    'format': '',
    'keyValue': '',
    'refId': ''
  }, [], false, false, false, '', [], coords, '');
  return newCoordinate;
};

/***/ }),

/***/ "./Functions/isNumFloat.tsx":
/*!**********************************!*\
  !*** ./Functions/isNumFloat.tsx ***!
  \**********************************/
/*! exports provided: isNumFloat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumFloat", function() { return isNumFloat; });
var isNumFloat = function isNumFloat(value) {
  if (String(value).match(/^-{0,1}\d+$/) || String(value).match(/^\d+\.\d+$/)) {
    return 1;
  }

  return 0;
};

/***/ }),

/***/ "./Localization/en.json":
/*!******************************!*\
  !*** ./Localization/en.json ***!
  \******************************/
/*! exports provided: objectVisibility, basics, simpleEditor, coordinateSpace, initialCoordonateSpace, inputCoordinate, textDefault, genericParameter, metricPrincipalSetting, colorVariable, textObject, defaultTextRendering, default */
/***/ (function(module) {

module.exports = {"objectVisibility":{"decalCenterPointTextRegion":"Shift the center point of the text region","decalCenterBubble":"Shift the point or center of a bubble","forceCalqueLevel":"Force a specific layer level","forceCourbSpecificLink":"Force a specific link curvature","calcLevel":"Layer level","courbure":"Curvature"},"basics":{"abscisses":"Abscissa","ordonnees":"Ordered","delete":"Delete","label":"Label"},"simpleEditor":{"renduTextDefault":"Default text rendering","display":"Display","pictureLink":"Image URL","genericSettings":"Generic parameters","genericSettingsBis":"Generic parameters bis","spaceInitialVisualisation":"Initial viewing space","CoordinateSpace":"Coordinates space","objectVisibility":"Visibility of objects","metricsSettings":"Metrics Settings"},"coordinateSpace":{"addCoordinate":"Add coordinates"},"initialCoordonateSpace":{"label":"Initial coordinates space"},"inputCoordinate":{"minXPosition":"Position X min","maxXPosition":"Position X max","minYPosition":"Position Y min","maxYPosition":"Position Y max","image":"Image","interfaceJson":"Interface name","key":"Key","valueKey":"Value key"},"textDefault":{"police":"Font","size":"Size","style":"Style"},"genericParameter":{"settingPrincipalMetric":"Main metric parameter","graphicObject":"Graphic object","variableColor":"Variable color","traceBackground":"Trace the background","traceContour":"Trace the outline"},"metricPrincipalSetting":{"followLink":"Following link","link":"Link","text":"Text","linkTooltip":"Link tooltip","textInTooltip":"Text in tooltip"},"colorVariable":{"switchBackgroundColor":"Edit background color","switchOutlineColor":"Edit outline color","thicknessOutline":"Thickness outline","variationNumber":"Variation number","number":"Number","addColor":"Add color","infoSeuil":"Info seuil"},"textObject":{"titleTextObject":"A text object","optionalLegend":"Optional legend","legend":"Legend","value":"Value","optionalUnit":"Optional unit","unit":"Unit","principalMetric":"Principal metric","textRegion":"Text region","colorBackground":"Color background","colorText":"Color text","colorTextOptional":"Optional color text","textStyle":"Text style","style":"Style","textBubble":"Text bubble","generateTextObject":"Generate text object","auxiliaryElement":"Auxiliary element","digitalFormatting":"Digital formatting (if metric)","mesureUnit":"Unit of mesure (if metric)","objectDisplayTextTooltip":"Object display in text or tooltip","objectDisplayInPermanentlyHover":"Object display in permanently or hovering","backgroundColor":"Background color","optionalBackgroundColor":"Optional background color","save":"Save"},"defaultTextRendering":{}};

/***/ }),

/***/ "./Localization/fr.json":
/*!******************************!*\
  !*** ./Localization/fr.json ***!
  \******************************/
/*! exports provided: objectVisibility, basics, simpleEditor, coordinateSpace, initialCoordonateSpace, inputCoordinate, textDefault, genericParameter, metricPrincipalSetting, colorVariable, textObject, default */
/***/ (function(module) {

module.exports = {"objectVisibility":{"decalCenterPointTextRegion":"Décaler le point de centrage de la région de texte","decalCenterBubble":"Décaler la pointe ou le centre d’une bulle","forceCalqueLevel":"Forcer un niveau de calque spécifique","forceCourbSpecificLink":"Forcer une courbure de lien spécifique","calcLevel":"Niveau de calque","courbure":"Courbure"},"basics":{"abscisses":"Abscisses","ordonnees":"Ordonnées","delete":"Supprimer","label":"Label"},"simpleEditor":{"renduTextDefault":"Rendu du texte par défaut","display":"Affichage","pictureLink":"URL de l'image","genericSettings":"Parametres Generiques","genericSettingsBis":"Parametres Generiques bis","spaceInitialVisualisation":"Espace de visualisation initial","CoordinateSpace":"Espace de coordonnées","objectVisibility":"Visibilité des objets","metricsSettings":"Paramètres des données"},"coordinateSpace":{"addCoordinate":"Ajouter des coordonnées"},"initialCoordonateSpace":{"label":"Espace Coordonnées Initial"},"inputCoordinate":{"minXPosition":"Position X min","maxXPosition":"Position X max","minYPosition":"Position Y min","maxYPosition":"Position Y max","image":"Image","key":"Clé","valueKey":"Valeur de la clé"},"textDefault":{"police":"Police","size":"Taille","style":"Style"},"genericParameter":{"settingPrincipalMetric":"Paramétrage d'une métrique principale","graphicObject":"Objets graphiques","variableColor":"Couleur variable","traceBackground":"Tracer le fond","traceContour":"Tracer le contour"},"metricPrincipalSetting":{"followLink":"Lien à suivre","link":"Link","text":"Text","linkTooltip":"Lien info bulle","textInTooltip":"Texte dans l'info bulle"},"colorVariable":{"switchBackgroundColor":"Changer la couleur du fond","switchOutlineColor":"Changer la couleur du contour","thicknessOutline":"Épaisseur du contour","variationNumber":"Nombre de variation","number":"Nombre","addColor":"Ajouter couleur","infoSeuil":"Info seuil"},"textObject":{"titleTextObject":"Un objet texte","optionalLegend":"Légende (optionnelle)","legend":"Légende","value":"Valeur","optionalUnit":"Unité optionnelle","unit":"Unité","principalMetric":"Métrique principal","textRegion":"Région texte","colorBackground":"Couleur du fond","colorText":"Couleur du texte","colorTextOptional":"Couleur du text optionnelle","textStyle":"Style du texte","style":"Style","textBubble":"Bulle de texte","generateTextObject":"Générer un objet texte","auxiliaryElement":"Élément auxiliaire","digitalFormatting":"Formatage numérique (si métrique)","mesureUnit":"Unité de mesure (si métrique)","objectDisplayTextTooltip":"Objet affiché dans le texte ou dans le tooltip","objectDisplayInPermanentlyHover":"Objet affiché en permanence ou en survol","backgroundColor":"Couleur du fond","optionalBackgroundColor":"Couleur du fond optionnelle","save":"Enregistrer"}};

/***/ }),

/***/ "./Models/ArrayInputClass.tsx":
/*!************************************!*\
  !*** ./Models/ArrayInputClass.tsx ***!
  \************************************/
/*! exports provided: ArrayInputClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayInputClass", function() { return ArrayInputClass; });
/**
 * class ArayInput
 * @param id number
 * @param uneClassInput InputClass[]
 */
var ArrayInputClass =
/** @class */
function () {
  function ArrayInputClass(id, uneClassInput) {
    this.id = id;
    this.uneClassInput = uneClassInput;
  }
  /**
   * get id
   */


  ArrayInputClass.prototype.getId = function () {
    return this.id;
  };
  /**
   * set id
   * @param id new id
   */


  ArrayInputClass.prototype.setId = function (id) {
    this.id = id;
  };
  /**
   * get value of InputClass[]
   */


  ArrayInputClass.prototype.getUneClassInput = function () {
    return this.uneClassInput;
  };
  /**
   * set a new InputClass[]
   * @param uneClassInput new object InputClass[]
   */


  ArrayInputClass.prototype.setUneClassInput = function (uneClassInput) {
    this.uneClassInput = uneClassInput;
  };

  return ArrayInputClass;
}();



/***/ }),

/***/ "./Models/ArrayInputSelectableClass.tsx":
/*!**********************************************!*\
  !*** ./Models/ArrayInputSelectableClass.tsx ***!
  \**********************************************/
/*! exports provided: ArrayInputSelectableClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayInputSelectableClass", function() { return ArrayInputSelectableClass; });
/**
 * class ArayInput
 * @param id number
 * @param uneClassInput InputClass[]
 */
var ArrayInputSelectableClass =
/** @class */
function () {
  function ArrayInputSelectableClass(id, uneClassInput) {
    this.id = id;
    this.uneClassInput = uneClassInput;
  }
  /**
   * get id
   */


  ArrayInputSelectableClass.prototype.getId = function () {
    return this.id;
  };
  /**
   * set id
   * @param id new id
   */


  ArrayInputSelectableClass.prototype.setId = function (id) {
    this.id = id;
  };
  /**
   * get value of InputClass[]
   */


  ArrayInputSelectableClass.prototype.getUneClassInput = function () {
    return this.uneClassInput;
  };
  /**
   * set a new InputClass[]
   * @param uneClassInput new object InputClass[]
   */


  ArrayInputSelectableClass.prototype.setUneClassInput = function (uneClassInput) {
    this.uneClassInput = uneClassInput;
  };

  return ArrayInputSelectableClass;
}();



/***/ }),

/***/ "./Models/CoordinateSpaceClass.tsx":
/*!*****************************************!*\
  !*** ./Models/CoordinateSpaceClass.tsx ***!
  \*****************************************/
/*! exports provided: CoordinateSpaceClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinateSpaceClass", function() { return CoordinateSpaceClass; });
var CoordinateSpaceClass =
/** @class */
function () {
  function CoordinateSpaceClass(id, linkURL, meta, lowerLimit, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder) {
    this.id = id;
    this.linkURL = linkURL;
    this.meta = meta;
    this.lowerLimit = lowerLimit;
    this.label = label;
    this.textObj = textObj;
    this.mainMetric = mainMetric;
    this.metrics = metrics;
    this.colorMode = colorMode;
    this.traceBack = traceBack;
    this.traceBorder = traceBorder;
  }

  return CoordinateSpaceClass;
}();



/***/ }),

/***/ "./Models/CoordinateSpaceInittialClass.tsx":
/*!*************************************************!*\
  !*** ./Models/CoordinateSpaceInittialClass.tsx ***!
  \*************************************************/
/*! exports provided: CoordinateSpaceInitialClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinateSpaceInitialClass", function() { return CoordinateSpaceInitialClass; });
/**
 * class CoordinateSpaceClass
 */
var CoordinateSpaceInitialClass =
/** @class */
function () {
  /**
   * r
   * @param id r
   * @param xMin r
   * @param xMax r
   * @param yMin r
   * @param yMax r
   * @param label r
   */
  function CoordinateSpaceInitialClass(id, xMin, xMax, yMin, yMax, label) {
    this.id = id;
    this.xMin = xMin;
    this.xMax = xMax;
    this.yMin = yMin;
    this.yMax = yMax;
    this.label = label;
  }

  CoordinateSpaceInitialClass.prototype.getId = function () {
    return this.id;
  };

  CoordinateSpaceInitialClass.prototype.setId = function (id) {
    this.id = id;
  };

  CoordinateSpaceInitialClass.prototype.getXMin = function () {
    return this.xMin;
  };

  CoordinateSpaceInitialClass.prototype.setXMin = function (xMin) {
    this.xMin = xMin;
  };

  CoordinateSpaceInitialClass.prototype.getXMax = function () {
    return this.xMax;
  };

  CoordinateSpaceInitialClass.prototype.setXMax = function (xMax) {
    this.xMax = xMax;
  };

  CoordinateSpaceInitialClass.prototype.getYMin = function () {
    return this.yMin;
  };

  CoordinateSpaceInitialClass.prototype.setYMin = function (yMin) {
    this.yMin = yMin;
  };

  CoordinateSpaceInitialClass.prototype.getYMax = function () {
    return this.yMax;
  };

  CoordinateSpaceInitialClass.prototype.setYMax = function (yMax) {
    this.yMax = yMax;
  };

  CoordinateSpaceInitialClass.prototype.getLabel = function () {
    return this.label;
  };

  CoordinateSpaceInitialClass.prototype.setLabel = function (label) {
    this.label = label;
  };

  return CoordinateSpaceInitialClass;
}();



/***/ }),

/***/ "./Models/InputClass.tsx":
/*!*******************************!*\
  !*** ./Models/InputClass.tsx ***!
  \*******************************/
/*! exports provided: InputClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputClass", function() { return InputClass; });
/**
 * class InputClass
 * @param id string
 * @param label string
 * @param name string
 * @param inputType string
 * @param required boolean
 * @param placeholder string?
 * @param value string?
 */
var InputClass =
/** @class */
function () {
  function InputClass(id, label, name, inputType, required, placeholder, value) {
    this.id = id;
    this.label = label;
    this.name = name;
    this.inputType = inputType;
    this.required = required;
    this.placeholder = placeholder;
    this.value = value;
  }
  /**
   * get id
   */


  InputClass.prototype.getId = function () {
    return this.id;
  };
  /**
   * set id
   * @param id new id
   */


  InputClass.prototype.setId = function (id) {
    this.id = id;
  };
  /**
   * get label
   */


  InputClass.prototype.getLabel = function () {
    return this.label;
  };
  /**
   * set label
   * @param label new label
   */


  InputClass.prototype.setLabel = function (label) {
    this.label = label;
  };
  /**
   * get name
   */


  InputClass.prototype.getName = function () {
    return this.name;
  };
  /**
   * set name
   * @param name new name
   */


  InputClass.prototype.setName = function (name) {
    this.name = name;
  };
  /**
   * get type input
   */


  InputClass.prototype.getInputType = function () {
    return this.inputType;
  };
  /**
   * set type input
   * @param inputType new input type
   */


  InputClass.prototype.setInputType = function (inputType) {
    this.inputType = inputType;
  };
  /**
   * get required
   */


  InputClass.prototype.getRequired = function () {
    return this.required;
  };
  /**
   * set required
   * @param required new value required
   */


  InputClass.prototype.setRequired = function (required) {
    this.required = required;
  };
  /**
   * get placeholder
   */


  InputClass.prototype.getPlaceholder = function () {
    return this.placeholder;
  };
  /**
   * set placeholder
   * @param placeholder new value placeholder
   */


  InputClass.prototype.setPlaceholder = function (placeholder) {
    this.placeholder = placeholder;
  };
  /**
   * get value
   */


  InputClass.prototype.getValue = function () {
    return this.value;
  };
  /**
   * set value
   * @param value new value
   */


  InputClass.prototype.setValue = function (value) {
    this.value = value;
  };

  return InputClass;
}();



/***/ }),

/***/ "./Models/InputSelectableClass.tsx":
/*!*****************************************!*\
  !*** ./Models/InputSelectableClass.tsx ***!
  \*****************************************/
/*! exports provided: InputSelectableClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSelectableClass", function() { return InputSelectableClass; });
/**
 * class InputClass
 */
var InputSelectableClass =
/** @class */
function () {
  function InputSelectableClass(id, label, name, input_type, optionValues, defaultValueColor, required, placeholder, value) {
    this.id = id;
    this.label = label;
    this.name = name;
    this.input_type = input_type;
    this.optionValues = optionValues;
    this.defaultValueColor = defaultValueColor;
    this.required = required;
    this.placeholder = placeholder;
    this.value = value;
  }

  InputSelectableClass.prototype.getId = function () {
    return this.id;
  };

  InputSelectableClass.prototype.setId = function (id) {
    this.id = id;
  };

  InputSelectableClass.prototype.getLabel = function () {
    return this.label;
  };

  InputSelectableClass.prototype.setLabel = function (label) {
    this.label = label;
  };

  InputSelectableClass.prototype.getName = function () {
    return this.name;
  };

  InputSelectableClass.prototype.setName = function (name) {
    this.name = name;
  };

  InputSelectableClass.prototype.getInputType = function () {
    return this.input_type;
  };

  InputSelectableClass.prototype.setInputType = function (input_type) {
    this.input_type = input_type;
  };

  InputSelectableClass.prototype.getRequired = function () {
    return this.required;
  };

  InputSelectableClass.prototype.setRequired = function (required) {
    this.required = required;
  };

  InputSelectableClass.prototype.getPlaceholder = function () {
    return this.placeholder;
  };

  InputSelectableClass.prototype.setPlaceholder = function (placeholder) {
    this.placeholder = placeholder;
  };

  InputSelectableClass.prototype.getValue = function () {
    return this.value;
  };

  InputSelectableClass.prototype.setValue = function (value) {
    this.value = value;
  };

  InputSelectableClass.prototype.getOptionValues = function () {
    return this.optionValues;
  };

  InputSelectableClass.prototype.setOptionValues = function (optionValues) {
    this.optionValues = optionValues;
  };

  InputSelectableClass.prototype.getDefaultValueColor = function () {
    return this.defaultValueColor;
  };

  InputSelectableClass.prototype.setDefaultValueColor = function (defaultValueColor) {
    this.defaultValueColor = defaultValueColor;
  };

  return InputSelectableClass;
}();



/***/ }),

/***/ "./Models/LinkClass.tsx":
/*!******************************!*\
  !*** ./Models/LinkClass.tsx ***!
  \******************************/
/*! exports provided: LinkClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkClass", function() { return LinkClass; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _CoordinateSpaceClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoordinateSpaceClass */ "./Models/CoordinateSpaceClass.tsx");



var LinkClass =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LinkClass, _super);

  function LinkClass(id, linkURL, meta, lowerLimitClass, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder, name, defineHowToGetCoordonate, orientationLink, pointAPositionX, pointAPositionY, colorCoordinateA, pointBPositionX, pointBPositionY, colorCoordinateB, pointIn, pointOut, regionIn, colorRegionIn, regionOut, colorRegionOut, labelLinkA, positionXLabelA, positionYLabelA, labelLinkB, positionXLabelB, positionYLabelB) {
    var _this = _super.call(this, id, linkURL, meta, lowerLimitClass, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder) || this;

    _this.name = name;
    _this.defineHowToGetCoordonate = defineHowToGetCoordonate;
    _this.orientationLink = orientationLink;
    _this.pointAPositionX = pointAPositionX;
    _this.pointAPositionY = pointAPositionY;
    _this.colorCoordinateA = colorCoordinateA;
    _this.pointBPositionX = pointBPositionX;
    _this.pointBPositionY = pointBPositionY;
    _this.colorCoordinateB = colorCoordinateB;
    _this.pointIn = pointIn;
    _this.pointOut = pointOut;
    _this.regionIn = regionIn;
    _this.colorRegionIn = colorRegionIn;
    _this.regionOut = regionOut;
    _this.colorRegionOut = colorRegionOut;
    _this.labelLinkA = labelLinkA;
    _this.positionXLabelA = positionXLabelA;
    _this.positionYLabelA = positionYLabelA;
    _this.labelLinkB = labelLinkB;
    _this.positionXLabelB = positionXLabelB;
    _this.positionYLabelB = positionYLabelB;
    return _this;
  }

  return LinkClass;
}(_CoordinateSpaceClass__WEBPACK_IMPORTED_MODULE_1__["CoordinateSpaceClass"]);



/***/ }),

/***/ "./Models/LinkURLClass.tsx":
/*!*********************************!*\
  !*** ./Models/LinkURLClass.tsx ***!
  \*********************************/
/*! exports provided: LinkURLClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkURLClass", function() { return LinkURLClass; });
/**
 * class for parametrage metric
 */
var LinkURLClass =
/** @class */
function () {
  function LinkURLClass(followLink, hoveringTooltipLink, hoveringTooltipText) {
    this.followLink = followLink;
    this.hoveringTooltipLink = hoveringTooltipLink;
    this.hoveringTooltipText = hoveringTooltipText;
  }

  Object.defineProperty(LinkURLClass.prototype, "getFollowLink", {
    /**
     * get followingLink
     */
    get: function get() {
      return this.followLink;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LinkURLClass.prototype, "setFollowLink", {
    /**
     * set followingLink
     * @param {string} value new value
     */
    set: function set(value) {
      this.followLink = value;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LinkURLClass.prototype, "getHoveringTooltipLink", {
    /**
     * get hoveringTooltipLink
     */
    get: function get() {
      return this.hoveringTooltipLink;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LinkURLClass.prototype, "setHoveringTooltipLink", {
    /**
     * setHoveringTooltipLink
     * @param {string} value new value
     */
    set: function set(value) {
      this.hoveringTooltipLink = value;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LinkURLClass.prototype, "getHoveringTooltipText", {
    /**
     * get hoveringTooltipText
     */
    get: function get() {
      return this.hoveringTooltipText;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LinkURLClass.prototype, "setHoveringTooltipText", {
    /**
     * set hoveringTooltipText
     * @param {string} value new Value
     */
    set: function set(value) {
      this.hoveringTooltipText = value;
    },
    enumerable: true,
    configurable: true
  });
  return LinkURLClass;
}();



/***/ }),

/***/ "./Models/LowerLimitClass.tsx":
/*!************************************!*\
  !*** ./Models/LowerLimitClass.tsx ***!
  \************************************/
/*! exports provided: LowerLimitClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LowerLimitClass", function() { return LowerLimitClass; });
var LowerLimitClass =
/** @class */
function () {
  function LowerLimitClass(id, seuilMin, seuilMax, couleurFond, couleurContour, sizeContour) {
    this.id = id;
    this.seuilMin = seuilMin;
    this.seuilMax = seuilMax;
    this.couleurFond = couleurFond;
    this.couleurContour = couleurContour;
    this.sizeContour = sizeContour;
  }

  Object.defineProperty(LowerLimitClass.prototype, "getId", {
    get: function get() {
      return this.id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "setId", {
    set: function set(id) {
      this.id = id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "getSeuilMin", {
    get: function get() {
      return this.seuilMin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "setSeuilMin", {
    set: function set(seuilMin) {
      this.seuilMin = seuilMin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "getSeuilMax", {
    get: function get() {
      return this.seuilMax;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "setSeuilMax", {
    set: function set(seuilMax) {
      this.seuilMax = seuilMax;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "getSeuilCouleurFond", {
    get: function get() {
      return this.couleurFond;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "setSeuilCouleurFond", {
    set: function set(couleur) {
      this.couleurFond = couleur;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "getSeuilCouleurContour", {
    get: function get() {
      return this.couleurContour;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "setSeuilCouleurContour", {
    set: function set(couleur) {
      this.couleurContour = couleur;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "getSizeContour", {
    get: function get() {
      return this.sizeContour;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "setSizeContour", {
    set: function set(size) {
      this.sizeContour = size;
    },
    enumerable: true,
    configurable: true
  });
  return LowerLimitClass;
}();



/***/ }),

/***/ "./Models/OrientedLinkClass.tsx":
/*!**************************************!*\
  !*** ./Models/OrientedLinkClass.tsx ***!
  \**************************************/
/*! exports provided: OrientedLinkClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrientedLinkClass", function() { return OrientedLinkClass; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _CoordinateSpaceClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoordinateSpaceClass */ "./Models/CoordinateSpaceClass.tsx");



var OrientedLinkClass =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OrientedLinkClass, _super);

  function OrientedLinkClass(id, linkURL, meta, lowerLimitClass, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder, name, orientationLink, pointAPositionX, pointAPositionY, colorCoordinateA, pointBPositionX, pointBPositionY, colorCoordinateB, valueMainMetricA, valueMainMetricB, // labelLinkA: string,
  // labelLinkB: string,
  // positionXLabelA: string,
  // positionYLabelA: string,
  // positionXLabelB: string,
  // positionYLabelB: string,
  pointIn, pointOut, regionIn, regionOut) {
    var _this = _super.call(this, id, linkURL, meta, lowerLimitClass, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder) || this;

    _this.name = name;
    _this.orientationLink = orientationLink;
    _this.pointAPositionX = pointAPositionX;
    _this.pointAPositionY = pointAPositionY;
    _this.colorCoordinateA = colorCoordinateA;
    _this.pointBPositionX = pointBPositionX;
    _this.pointBPositionY = pointBPositionY;
    _this.colorCoordinateB = colorCoordinateB; // this.labelLinkA = labelLinkA;
    // this.labelLinkB = labelLinkB;
    // this.positionXLabelA = positionXLabelA;
    // this.positionYLabelA = positionYLabelA;
    // this.positionXLabelB = positionXLabelB;
    // this.positionYLabelB = positionYLabelB;

    _this.valueMainMetricA = valueMainMetricA;
    _this.valueMainMetricB = valueMainMetricB;
    _this.pointIn = pointIn;
    _this.pointOut = pointOut;
    _this.regionIn = regionIn;
    _this.regionOut = regionOut;
    return _this;
  }

  return OrientedLinkClass;
}(_CoordinateSpaceClass__WEBPACK_IMPORTED_MODULE_1__["CoordinateSpaceClass"]);



/***/ }),

/***/ "./Models/PointClass.tsx":
/*!*******************************!*\
  !*** ./Models/PointClass.tsx ***!
  \*******************************/
/*! exports provided: PointClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointClass", function() { return PointClass; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _CoordinateSpaceClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoordinateSpaceClass */ "./Models/CoordinateSpaceClass.tsx");


/**
 * to do
 */

var PointClass =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PointClass, _super);

  function PointClass(id, linkURL, meta, lowerLimitClass, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder, name, valueMetric, coordinateSpace, drawGraphicMarker, shape, sizeWidth, sizeHeight, rotateArrow, positionShapeX, positionShapeY, positionLabelX, positionLabelY, color, associateLinkIn, associateLinkOut, associateOrientedLinksIn, associateOrientedLinksOut) {
    var _this = _super.call(this, id, linkURL, meta, lowerLimitClass, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder) || this;

    _this.name = name;
    _this.valueMetric = valueMetric;
    _this.coordinateSpace = coordinateSpace;
    _this.drawGraphicMarker = drawGraphicMarker;
    _this.shape = shape;
    _this.sizeWidth = sizeWidth;
    _this.sizeHeight = sizeHeight;
    _this.rotateArrow = rotateArrow;
    _this.positionShapeX = positionShapeX;
    _this.positionShapeY = positionShapeY;
    _this.positionLabelX = positionLabelX;
    _this.positionLabelY = positionLabelY;
    _this.color = color;
    _this.associateLinkIn = associateLinkIn;
    _this.associateLinkOut = associateLinkOut;
    _this.associateOrientedLinksIn = associateOrientedLinksIn;
    _this.associateOrientedLinksOut = associateOrientedLinksOut;
    return _this;
  }

  return PointClass;
}(_CoordinateSpaceClass__WEBPACK_IMPORTED_MODULE_1__["CoordinateSpaceClass"]);



/***/ }),

/***/ "./Models/RegionClass.tsx":
/*!********************************!*\
  !*** ./Models/RegionClass.tsx ***!
  \********************************/
/*! exports provided: RegionClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionClass", function() { return RegionClass; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _CoordinateSpaceClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoordinateSpaceClass */ "./Models/CoordinateSpaceClass.tsx");



var RegionClass =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RegionClass, _super);

  function RegionClass(id, linkURL, meta, lowerLimitClass, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder, idSVG, orientedLink, coords, img // refId?: DataFrame
  ) {
    var _this = _super.call(this, id, linkURL, meta, lowerLimitClass, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder) || this;

    _this.idSVG = idSVG;
    _this.orientedLink = orientedLink;
    _this.coords = coords;
    _this.img = img;
    return _this;
  }

  return RegionClass;
}(_CoordinateSpaceClass__WEBPACK_IMPORTED_MODULE_1__["CoordinateSpaceClass"]);



/***/ }),

/***/ "./Models/TextObjectClass.tsx":
/*!************************************!*\
  !*** ./Models/TextObjectClass.tsx ***!
  \************************************/
/*! exports provided: TextObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextObject", function() { return TextObject; });
/** value of textObjects component */
var TextObject =
/** @class */
function () {
  function TextObject(legende, valeur, unite, isTextRegion, colorBack, colorText, styleText, generateObjectText, legendElement, numericFormatElement, unityMesureElement, displayObjectInText, displayObjectPermanently, addColorTextElement, colorTextElement, addColorBackElement, colorBackElement) {
    this.legende = legende;
    this.valeur = valeur;
    this.unite = unite;
    this.isTextRegion = isTextRegion;
    this.colorBack = colorBack;
    this.colorText = colorText;
    this.styleText = styleText;
    this.generateObjectText = generateObjectText;
    this.legendElement = legendElement;
    this.numericFormatElement = numericFormatElement;
    this.unityMesureElement = unityMesureElement;
    this.displayObjectInText = displayObjectInText;
    this.displayObjectPermanently = displayObjectPermanently;
    this.addColorTextElement = addColorTextElement;
    this.colorTextElement = colorTextElement;
    this.addColorBackElement = addColorBackElement;
    this.colorBackElement = colorBackElement;
  }

  return TextObject;
}();



/***/ }),

/***/ "./SimpleEditor.tsx":
/*!**************************!*\
  !*** ./SimpleEditor.tsx ***!
  \**************************/
/*! exports provided: SimpleEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleEditor", function() { return SimpleEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_coordinateSpaceInitial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/coordinateSpaceInitial */ "./components/coordinateSpaceInitial.tsx");
/* harmony import */ var components_dashboardData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/dashboardData */ "./components/dashboardData.tsx");
/* harmony import */ var components_linkForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/linkForm */ "./components/linkForm.tsx");
/* harmony import */ var components_mainTarget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/mainTarget */ "./components/mainTarget.tsx");
/* harmony import */ var components_CoordinateSpace_manageCoordinateSpace__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/CoordinateSpace/manageCoordinateSpace */ "./components/CoordinateSpace/manageCoordinateSpace.tsx");
/* harmony import */ var components_objectVisibility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/objectVisibility */ "./components/objectVisibility.tsx");
/* harmony import */ var components_orientedLinkForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/orientedLinkForm */ "./components/orientedLinkForm.tsx");
/* harmony import */ var components_panelData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/panelData */ "./components/panelData.tsx");
/* harmony import */ var components_pointForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/pointForm */ "./components/pointForm.tsx");
/* harmony import */ var components_renduTextDefault__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/renduTextDefault */ "./components/renduTextDefault.tsx");
/* harmony import */ var components_timeSelector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/timeSelector */ "./components/timeSelector.tsx");
/* harmony import */ var style_SimpleEditor_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! style/SimpleEditor.css */ "./style/SimpleEditor.css");
/* harmony import */ var style_SimpleEditor_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(style_SimpleEditor_css__WEBPACK_IMPORTED_MODULE_14__);
















/**
 * class SimpleEditor
 */

var SimpleEditor =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SimpleEditor, _super);

  function SimpleEditor(props) {
    var _this = _super.call(this, props) || this;
    /**
     * edit default text
     */


    _this.myCallBackDefaultText = function (datafromChild) {
      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        police: datafromChild.police,
        taille: datafromChild.taille,
        style: datafromChild.style
      }));
    };

    _this.myCallBackArrayPoints = function (dataFromChild) {
      _this.setState({
        arrayPoints: dataFromChild
      });

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        arrayPoints: dataFromChild
      }));
    };

    _this.myCallBackArrayLinks = function (dataFromChild) {
      _this.setState({
        arrayLinks: dataFromChild
      });

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        arrayLinks: dataFromChild
      }));
    };

    _this.myCallBackArrayOrientedLinks = function (dataFromChild) {
      _this.setState({
        arrayOrientedLinks: dataFromChild
      });

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        arrayOrientedLinks: dataFromChild
      }));
    }; /// Adrien


    _this.onInfoChanged = function (_a) {
      var target = _a.target;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        info: target.value
      }));
    };

    _this.onRefreshChanged = function (_a) {
      var target = _a.target;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        refresh: target.value
      }));
    };

    _this.onTimeZoneChanged = function (_a) {
      var target = _a.target;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        timezone: target.value
      }));
    };

    _this.onPanelChanged = function (_a, index) {
      var target = _a.target;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        Id: target.value
      }));
    };

    _this.onToggleDashboardData = function (isOpen) {
      _this.setState({
        collapseDashboardData: isOpen
      });
    };

    _this.onToggleTimeSelector = function (isOpen) {
      _this.setState({
        collapseTimeSelector: isOpen
      });
    };

    _this.onTogglePanelData = function (isOpen) {
      _this.setState({
        collapsePanelData: isOpen
      });
    };

    _this.onTogglePoint = function (isOpen) {
      _this.setState({
        collapsePoint: isOpen
      });
    };

    _this.onToggleLink = function (isOpen) {
      _this.setState({
        collapseLink: isOpen
      });
    };

    _this.onToggleOrientedLink = function (isOpen) {
      _this.setState({
        collapseOrientedLink: isOpen
      });
    };

    _this.onToggleTargets = function (isOpen) {
      _this.setState({
        collapseTargets: isOpen
      });
    };

    _this.onTogglePrincipalTargets = function (isOpen) {
      _this.setState({
        collapsePrincipalTarget: isOpen
      });
    };
    /**
     * switch tab
     * @param {number} id id to to new tab
     */


    _this.goToTab = function (id) {
      var oldValue = _this.state.tabsVariable.slice();

      var size = oldValue.length;

      for (var i = 0; i < size; i++) {
        oldValue[i] = i === id ? true : false;
      }

      _this.setState({
        tabsVariable: oldValue
      });
    };
    /**
     * swtith tab Coordinate space
     */


    _this.goToTabCoordinateSpace = function (id) {
      var oldValue = _this.state.tabsCoordinateSpace.slice();

      var size = oldValue.length;

      for (var i = 0; i < size; i++) {
        oldValue[i] = i === id ? true : false;
      }

      _this.setState({
        tabsCoordinateSpace: oldValue
      });
    };

    _this.state = {
      collapseDashboardData: false,
      collapsePanelData: false,
      collapseTimeSelector: false,
      arrayCoordinateSpace: _this.props.options.arrayCoordinateSpace,
      collapseDefaultText: false,
      collapseDisplay: false,
      collapseGenericSettings: false,
      collapseInitialDisplay: false,
      collapseCoorSpace: false,
      collapseGenericSettingsBis: false,
      collapseObjectVisibility: false,
      collapsePoint: false,
      collapseLink: false,
      collapseOrientedLink: false,
      arrayPoints: _this.props.options.arrayPoints,
      arrayLinks: _this.props.options.arrayLinks,
      arrayOrientedLinks: _this.props.options.arrayOrientedLinks,
      index: 0,
      collapseTargets: false,
      collapsePrincipalTarget: false,
      tabsVariable: [false, false, true, false, false, false, false],
      tabsCoordinateSpace: [true, false, false, false]
    };
    return _this;
  }
  /**
   * HTML code
   */


  SimpleEditor.prototype.render = function () {
    var _this = this;

    var l10n = __webpack_require__(/*! Localization/en.json */ "./Localization/en.json");

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: 'divSimpleEditor'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["TabsBar"], {
      className: 'page-header tabs',
      hideBorder: false
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: 'tabDisplay',
      label: l10n.simpleEditor.display,
      active: this.state.tabsVariable[0],
      onChangeTab: function onChangeTab() {
        return _this.goToTab(0);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: 'tabSpaceInitialVisualisation',
      label: l10n.simpleEditor.spaceInitialVisualisation,
      active: this.state.tabsVariable[1],
      onChangeTab: function onChangeTab() {
        return _this.goToTab(1);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: 'tabCoordinateSpace',
      label: l10n.simpleEditor.CoordinateSpace,
      active: this.state.tabsVariable[2],
      onChangeTab: function onChangeTab() {
        return _this.goToTab(2);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: 'tabObjectVisibility',
      label: l10n.simpleEditor.objectVisibility,
      active: this.state.tabsVariable[3],
      onChangeTab: function onChangeTab() {
        return _this.goToTab(3);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: 'tabMetricsSettings',
      label: l10n.simpleEditor.metricsSettings,
      active: this.state.tabsVariable[4],
      onChangeTab: function onChangeTab() {
        return _this.goToTab(4);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: 'tabGraphicalObject',
      label: 'Graphical object',
      active: this.state.tabsVariable[5],
      onChangeTab: function onChangeTab() {
        return _this.goToTab(5);
      }
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["TabContent"], null, this.state.tabsVariable[0] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_renduTextDefault__WEBPACK_IMPORTED_MODULE_12__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data
    }), this.state.tabsVariable[1] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_coordinateSpaceInitial__WEBPACK_IMPORTED_MODULE_3__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data
    }), this.state.tabsVariable[2] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["TabsBar"], {
      className: 'page-header tabs',
      hideBorder: false
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: 'tabDisplayManageCoordinateSpace',
      label: 'Region',
      active: this.state.tabsCoordinateSpace[0],
      onChangeTab: function onChangeTab() {
        return _this.goToTabCoordinateSpace(0);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: 'tabDisplayPoint',
      label: 'Point',
      active: this.state.tabsCoordinateSpace[1],
      onChangeTab: function onChangeTab() {
        return _this.goToTabCoordinateSpace(1);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: 'tabDisplayLink',
      label: 'Link',
      active: this.state.tabsCoordinateSpace[2],
      onChangeTab: function onChangeTab() {
        return _this.goToTabCoordinateSpace(2);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: 'tabDisplayOrientedLink',
      label: 'OrientedLink',
      active: this.state.tabsCoordinateSpace[3],
      onChangeTab: function onChangeTab() {
        return _this.goToTabCoordinateSpace(3);
      }
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["TabContent"], null, this.state.tabsCoordinateSpace[0] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CoordinateSpace_manageCoordinateSpace__WEBPACK_IMPORTED_MODULE_7__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data
    }), this.state.tabsCoordinateSpace[1] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_pointForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
      callBackFromParent: this.myCallBackArrayPoints.bind(this),
      arrayCoordinateSpace: this.props.options.arrayCoordinateSpace,
      oldArrayPointClass: this.props.options.arrayPoints,
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data
    }), this.state.tabsCoordinateSpace[2] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_linkForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
      arrayCoordinateSpace: this.props.options.arrayCoordinateSpace,
      oldArrayLinkClass: this.props.options.arrayLinks,
      arrayPointClass: this.props.options.arrayPoints,
      callBackFromParent: this.myCallBackArrayLinks.bind(this)
    }), this.state.tabsCoordinateSpace[3] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_orientedLinkForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
      arrayPoint: this.props.options.arrayPoints,
      arrayCoordinateSpace: this.props.options.arrayCoordinateSpace,
      oldArrayOrientedLinkClass: this.props.options.arrayOrientedLinks,
      callBackFromParent: this.myCallBackArrayOrientedLinks.bind(this),
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data
    }))), this.state.tabsVariable[3] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_objectVisibility__WEBPACK_IMPORTED_MODULE_8__["default"], null), this.state.tabsVariable[4] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: 'adrien'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.collapseDashboardData,
      label: 'Dashboard Data Display',
      onToggle: this.onToggleDashboardData
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_dashboardData__WEBPACK_IMPORTED_MODULE_4__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.collapseTimeSelector,
      label: 'Time Selector Display',
      onToggle: this.onToggleTimeSelector
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_timeSelector__WEBPACK_IMPORTED_MODULE_13__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.collapsePrincipalTarget,
      label: 'Metrics Principal',
      onToggle: this.onTogglePrincipalTargets
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_mainTarget__WEBPACK_IMPORTED_MODULE_6__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.collapsePanelData,
      label: 'Metrics Aux',
      onToggle: this.onTogglePanelData
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_panelData__WEBPACK_IMPORTED_MODULE_10__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data
    }))), this.state.tabsVariable[5] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: 'CoordinateSpaceInitital'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.collapsePoint,
      label: 'Point',
      onToggle: this.onTogglePoint
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_pointForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
      oldArrayPointClass: this.props.options.arrayPoints,
      callBackFromParent: this.myCallBackArrayPoints.bind(this),
      arrayCoordinateSpace: this.props.options.arrayCoordinateSpace,
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: 'CoordinateSpaceInitital'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.collapseLink,
      label: 'Link',
      onToggle: this.onToggleLink
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_linkForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
      arrayCoordinateSpace: this.props.options.arrayCoordinateSpace,
      oldArrayLinkClass: this.props.options.arrayLinks,
      arrayPointClass: this.props.options.arrayPoints,
      callBackFromParent: this.myCallBackArrayLinks.bind(this)
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: 'CoordinateSpaceInitital'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.collapseOrientedLink,
      label: 'Oriented Link',
      onToggle: this.onToggleOrientedLink
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_orientedLinkForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
      arrayPoint: this.props.options.arrayPoints,
      arrayCoordinateSpace: this.props.options.arrayCoordinateSpace,
      oldArrayOrientedLinkClass: this.props.options.arrayOrientedLinks,
      callBackFromParent: this.myCallBackArrayOrientedLinks.bind(this),
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data
    }))))));
  };

  return SimpleEditor;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent);



/***/ }),

/***/ "./SimplePanel.tsx":
/*!*************************!*\
  !*** ./SimplePanel.tsx ***!
  \*************************/
/*! exports provided: SimplePanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePanel", function() { return SimplePanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Models_PointClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Models/PointClass */ "./Models/PointClass.tsx");
/* harmony import */ var Models_OrientedLinkClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Models/OrientedLinkClass */ "./Models/OrientedLinkClass.tsx");
/* harmony import */ var Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Models/TextObjectClass */ "./Models/TextObjectClass.tsx");
/* harmony import */ var Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Models/LinkURLClass */ "./Models/LinkURLClass.tsx");
/* harmony import */ var Functions_fetchMetrics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Functions/fetchMetrics */ "./Functions/fetchMetrics.tsx");
/* harmony import */ var components_CoordinateSpace_addCoordinate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/CoordinateSpace/addCoordinate */ "./components/CoordinateSpace/addCoordinate.tsx");
/* harmony import */ var _components_Draw_drawRectangle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Draw/drawRectangle */ "./components/Draw/drawRectangle.tsx");
/* harmony import */ var _components_Draw_drawRectangleExtend__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Draw/drawRectangleExtend */ "./components/Draw/drawRectangleExtend.tsx");
/* harmony import */ var _components_Draw_drawCircleCross__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Draw/drawCircleCross */ "./components/Draw/drawCircleCross.tsx");
/* harmony import */ var _components_Draw_drawArrow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Draw/drawArrow */ "./components/Draw/drawArrow.tsx");
/* harmony import */ var _components_Draw_drawLinkWithCoordinates__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Draw/drawLinkWithCoordinates */ "./components/Draw/drawLinkWithCoordinates.tsx");
/* harmony import */ var _components_Draw_drawLinkWithPoints__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/Draw/drawLinkWithPoints */ "./components/Draw/drawLinkWithPoints.tsx");
/* harmony import */ var _components_Draw_drawLinkWithRegions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/Draw/drawLinkWithRegions */ "./components/Draw/drawLinkWithRegions.tsx");
/* harmony import */ var _components_Draw_drawOrientedLink__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/Draw/drawOrientedLink */ "./components/Draw/drawOrientedLink.tsx");

















/**
 * Affichage
 */

var SimplePanel =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SimplePanel, _super);

  function SimplePanel(props) {
    var _this = _super.call(this, props) || this;
    /**
     * TODO
     */


    _this.fillCoordinate = function () {
      var options = _this.props.options;
      var mapItems;
      mapItems = options.arrayCoordinateSpace.map(function (line, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Draw_drawRectangleExtend__WEBPACK_IMPORTED_MODULE_10__["default"], {
          key: 'drawRectangleExtend' + index.toString(),
          color: 'red',
          uneCoor: line,
          useLimit: true,
          limit: options.arrayCoordinateSpaceInitial,
          contentTooltip: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, "salut"),
          onOptionsChange: _this.props.onOptionsChange,
          options: _this.props.options,
          data: _this.props.data,
          id: 'region' + line.id.toString(),
          isEnabled: !_this.state.buttonManage[1]
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, mapItems);
    };
    /**
     * Display limit (arrayCoordinateSpaceInitial)
     * @returns JSX.Element
     */


    _this.defineLimit = function () {
      var arrayCoordinateSpaceInitial = _this.props.options.arrayCoordinateSpaceInitial;
      var jsxItems;
      jsxItems = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Draw_drawRectangle__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: 'limitCoor',
        color: 'orange',
        uneCoor: arrayCoordinateSpaceInitial,
        id: 'initialSpace'
      });
      return jsxItems;
    };
    /**
     * to do
     */


    _this.resetCoordinatesToDrawLinkWithClick = function () {
      _this.props.options.coordinatesToDrawLinkWithClick[1].labelPoint = '';
      _this.props.options.coordinatesToDrawLinkWithClick[1].point = {};
      _this.props.options.coordinatesToDrawLinkWithClick[1].labelRegion = '';
      _this.props.options.coordinatesToDrawLinkWithClick[1].region = {};
      _this.props.options.coordinatesToDrawLinkWithClick[2].labelPoint = '';
      _this.props.options.coordinatesToDrawLinkWithClick[2].point = {};
      _this.props.options.coordinatesToDrawLinkWithClick[2].labelRegion = '';
      _this.props.options.coordinatesToDrawLinkWithClick[2].region = {};
    };
    /** get coordinate when use click in panel */


    _this.getCoordinatesToDrawOrientedLinkWithClick = function (event) {
      var positionX = 0;
      var positionY = 0;
      var coordinates = _this.props.options.coordinatesToDrawLinkWithClick;
      var pointA = coordinates[1];
      var pointB = coordinates[2];
      var sidePanel = _this.state.sizePanel;

      if (event.nativeEvent.target.id === 'mainPanel' || event.nativeEvent.target.id === 'initialSpace') {
        positionX = Math.round((event.nativeEvent.offsetX - sidePanel / 2) * (100 / sidePanel)) * 2;
        positionY = Math.round((event.nativeEvent.offsetY - sidePanel / 2) * (100 / sidePanel)) * 2;

        if (coordinates[0].id % 2 === 0) {
          pointA.x = positionX;
          pointA.y = positionY * -1;
          coordinates[0].id++;
        } else {
          pointB.x = positionX;
          pointB.y = positionY * -1;
          coordinates[0].id++;

          _this.displayLinkClick({}, {}, {}, {});
        }
      } else if (event.nativeEvent.target.id.startsWith('point')) {
        var id_1 = parseInt(event.nativeEvent.target.id.charAt(5) + event.nativeEvent.target.id.charAt(6), 10);
        var arrayPoint = _this.props.options.arrayPoints;
        arrayPoint.forEach(function (point) {
          if (point.id === id_1) {
            var coordinates_1 = _this.props.options.coordinatesToDrawLinkWithClick;

            if (coordinates_1[0].id % 2 === 0) {
              pointA.x = point.positionShapeX;
              pointA.y = point.positionShapeY;
              pointA.labelPoint = point.name;
              pointA.point = point;
              coordinates_1[0].id++;
            } else {
              pointB.x = point.positionShapeX;
              pointB.y = point.positionShapeY;
              pointB.labelPoint = point.name;
              pointB.point = point;
              coordinates_1[0].id++;

              _this.displayLinkClick({
                label: pointA.labelPoint,
                value: pointA.point
              }, {
                label: pointB.labelPoint,
                value: pointB.point
              }, {
                label: pointA.labelRegion,
                value: pointA.region
              }, {
                label: pointB.labelRegion,
                value: pointB.region
              });

              _this.resetCoordinatesToDrawLinkWithClick();
            }
          }
        });
      } else {
        var arrayRegion = _this.props.options.arrayCoordinateSpace;
        arrayRegion.forEach(function (region) {
          var xMin = parseInt(region.coords.xMin, 10);
          var xMax = parseInt(region.coords.xMax, 10);
          var yMin = parseInt(region.coords.yMin, 10);
          var yMax = parseInt(region.coords.yMax, 10);

          if (event.nativeEvent.target.id.startsWith('region')) {
            var id = parseInt(event.nativeEvent.target.id.charAt(6) + event.nativeEvent.target.id.charAt(7), 10);

            if (id === region.id) {
              var coordinates_2 = _this.props.options.coordinatesToDrawLinkWithClick;
              positionX = (xMin + xMax) / 2;
              positionY = (yMax + yMin) / 2;

              if (coordinates_2[0].id % 2 === 0) {
                pointA.x = positionX;
                pointA.y = positionY;
                coordinates_2[0].id++;
                pointA.labelRegion = region.label;
                pointA.region = region;
              } else {
                pointB.x = positionX;
                pointB.y = positionY;
                coordinates_2[0].id++;
                pointB.labelRegion = region.label;
                pointB.region = region;

                _this.displayLinkClick({
                  label: pointA.labelPoint,
                  value: pointA.point
                }, {
                  label: pointB.labelPoint,
                  value: pointB.point
                }, {
                  label: pointA.labelRegion,
                  value: pointA.region
                }, {
                  label: pointB.labelRegion,
                  value: pointB.region
                });

                _this.resetCoordinatesToDrawLinkWithClick();
              }
            }
          } else {
            var id = parseInt(event.nativeEvent.target.offsetParent.id.charAt(6) + event.nativeEvent.target.offsetParent.id.charAt(7), 10);

            if (id === region.id) {
              var coordinates_3 = _this.props.options.coordinatesToDrawLinkWithClick;
              positionX = (xMin + xMax) / 2;
              positionY = (yMax + yMin) / 2;

              if (coordinates_3[0].id % 2 === 0) {
                pointA.x = positionX;
                pointA.y = positionY;
                coordinates_3[0].id++;
                pointA.labelRegion = region.label;
                pointA.region = region;
              } else {
                pointB.x = positionX;
                pointB.y = positionY;
                coordinates_3[0].id++;
                pointB.labelRegion = region.label;
                pointB.region = region;

                _this.displayLinkClick({
                  label: pointA.labelPoint,
                  value: pointA.point
                }, {
                  label: pointB.labelPoint,
                  value: pointB.point
                }, {
                  label: pointA.labelRegion,
                  value: pointA.region
                }, {
                  label: pointB.labelRegion,
                  value: pointB.region
                });

                _this.resetCoordinatesToDrawLinkWithClick();
              }
            }
          }
        });
      }
    };
    /**
     * to do
     */


    _this.displayLinkClick = function (associatePointIn, associatePointOut, associateRegionIn, associateRegionOut) {
      var coordinates = _this.props.options.coordinatesToDrawLinkWithClick;
      var id = _this.props.options.indexOrientedLink + 1;
      var pointA = coordinates[1];
      var pointB = coordinates[2];
      var initTextObject = new Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_5__["TextObject"]('', '', '', false, '', '', '', false, '', '', '', false, false, false, '', false, '');
      var parametrageMetric = new Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_6__["LinkURLClass"]('', '', '');
      var newOrientedLink = new Models_OrientedLinkClass__WEBPACK_IMPORTED_MODULE_4__["OrientedLinkClass"](id, parametrageMetric, '', [], '', initTextObject, {
        'key': '',
        'unit': '',
        'format': '',
        'keyValue': '',
        'refId': ''
      }, [], false, false, false, 'orientedLink' + id.toString(), {
        label: 'Unidirectional',
        value: 'AB'
      }, pointA.x.toString(), pointA.y.toString(), '#5794F2', pointB.x.toString(), pointB.y.toString(), '#E54658', '', '', associatePointIn, associatePointOut, associateRegionIn, associateRegionOut);

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        //arrayOrientedLinks: this.props.options.arrayOrientedLinks.concat(newOrientedLink),
        indexOrientedLink: id
      }));

      _this.props.options.arrayOrientedLinks.push(newOrientedLink);

      setTimeout(function () {
        _this.displayOrientedLink();
      }, 100);
    };
    /**
     * to do
     */


    _this.getCoordinatesToDrawPointWithClick = function (event) {
      var positionX = 0;
      var positionY = 0;
      var sidePanel = _this.state.sizePanel;
      positionX = Math.round((event.nativeEvent.offsetX - sidePanel / 2) * (100 / sidePanel)) * 2;
      positionY = Math.round((event.nativeEvent.offsetY - sidePanel / 2) * (100 / sidePanel)) * 2 * -1;
      console.log(event.nativeEvent.target);

      if (event.nativeEvent.target.id === 'mainPanel' || event.nativeEvent.target.id === 'initialSpace') {
        _this.createPointToClick(positionX, positionY);
      }
    };

    _this.createPointToClick = function (x, y) {
      var id = _this.props.options.indexPoint + 1;
      var initTextObject = new Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_5__["TextObject"]('', '', '', false, '', '', '', false, '', '', '', false, false, false, '', false, '');
      var parametrageMetric = new Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_6__["LinkURLClass"]('', '', '');
      var newPoint = new Models_PointClass__WEBPACK_IMPORTED_MODULE_3__["PointClass"](id, parametrageMetric, '', [], '', initTextObject, {
        'key': '',
        'unit': '',
        'format': '',
        'keyValue': '',
        'refId': ''
      }, [], false, false, false, 'point' + id.toString(), '', {}, {
        label: 'Yes',
        value: 'true'
      }, {
        label: 'Circle',
        value: 'circle'
      }, {
        label: 'Small',
        value: 'small'
      }, {
        label: 'Small',
        value: 'small'
      }, '0', x.toString(), y.toString(), '0', '0', 'black', [], [], [], []);

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        indexPoint: id
      }));

      _this.props.options.arrayPoints.push(newPoint);

      setTimeout(function () {
        _this.displayPoint();
      }, 100);
    };

    _this.changeValueButtonToLink = function () {
      _this.setState({
        valueButton: 'link'
      });
    };

    _this.changeValueButtonToPoint = function () {
      _this.setState({
        valueButton: 'point'
      });
    };

    _this.changeDisplayButtonlegend = function () {
      _this.setState({
        valueLegend: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null)
      });
    };

    _this.getCoordinates = function (event) {
      var valueButton = _this.state.valueButton;

      if (_this.state.numberClickDiv === 0) {
        return;
      }

      if (valueButton === 'link') {
        _this.getCoordinatesToDrawOrientedLinkWithClick(event);
      } else if (valueButton === 'point') {
        _this.getCoordinatesToDrawPointWithClick(event);
      }
    }; // function after buttonclick


    _this.updateButtonCss = function () {
      var _final = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        variant: _this.state.buttonManage[0] ? 'danger' : 'primary',
        className: 'button',
        onClick: _this.addNode
      }, "Add Region"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        variant: _this.state.buttonManage[3] ? 'danger' : 'primary',
        className: 'button',
        onClick: _this.addPoint
      }, "Add Point"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        variant: _this.state.buttonManage[1] ? 'danger' : 'primary',
        className: 'button',
        onClick: _this.addLink
      }, "Add Oriented Link"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        variant: _this.state.buttonManage[2] ? 'danger' : 'primary',
        className: 'button',
        onClick: _this.positionLegend
      }, "Position Legend"));

      _this.setState({
        allActionButton: _final
      });
    };

    _this.callMethod = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!(this.state.numberClickDiv === 0)) return [3
              /*break*/
              , 1];
              this.setState({
                numberClickDiv: 1
              });
              return [3
              /*break*/
              , 3];

            case 1:
              return [4
              /*yield*/
              , this.setAsyncButtonManage({
                buttonManage: [false, false, false, false]
              })];

            case 2:
              _a.sent();

              this.setState({
                numberClickDiv: 0
              });
              this.updateButtonCss();
              _a.label = 3;

            case 3:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.setAsyncButtonManage = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };

    _this.resetButtonManage = function (index) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var tmp, oldValue;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              tmp = this.state.buttonManage;
              oldValue = tmp[index];
              tmp = [false, false, false, false];

              if (oldValue) {
                tmp[index] = false;
                this.setState({
                  numberClickDiv: 0
                });
              } else {
                tmp[index] = true;
                this.setState({
                  numberClickDiv: 1
                });
              } // tmp[index] = (oldValue) ? false : true;


              return [4
              /*yield*/
              , this.setAsyncButtonManage({
                buttonManage: tmp
              })];

            case 1:
              // tmp[index] = (oldValue) ? false : true;
              _a.sent();

              this.updateButtonCss();
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.addNode = function () {
      _this.setState(function (prevState) {
        return {
          nbClickButton: prevState.buttonManage[0] ? false : true
        };
      });

      _this.resetButtonManage(0);

      _this.changeValueButtonToPoint();
    };

    _this.addPoint = function () {
      _this.setState(function (prevState) {
        return {
          nbClickButton: prevState.buttonManage[3] ? false : true,
          valueButton: 'point'
        };
      });

      _this.resetButtonManage(3);

      _this.changeValueButtonToPoint();
    };

    _this.addLink = function () {
      _this.setState(function (prevState) {
        return {
          nbClickButton: prevState.buttonManage[1] ? false : true
        };
      });

      _this.resetButtonManage(1);

      _this.changeValueButtonToLink();
    };

    _this.positionLegend = function () {
      _this.setState(function (prevState) {
        return {
          nbClickButton: prevState.buttonManage[2] ? false : true
        };
      });

      _this.resetButtonManage(2);

      _this.changeDisplayButtonlegend();
    };
    /**
     * update button css when mount component
     */


    _this.componentDidMount = function () {
      _this.updateButtonCss();
    };

    _this.state = {
      isUpdate: false,
      sizePanel: 300,
      idOrientedLink: _this.props.options.indexOrientedLink,
      valueButton: '',
      buttonManage: [false, false, false, false],
      numberClickDiv: 0,
      allActionButton: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null),
      valueLegend: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null),
      seuil: [],
      nbClickButton: false
    };
    return _this;
  }
  /**
   * to do
   */


  SimplePanel.prototype.displayPoint = function () {
    var _this = this;

    var mapItems = [];
    this.props.options.arrayPoints.forEach(function (line) {
      if (line.shape.value === 'arrow') {
        var item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Draw_drawArrow__WEBPACK_IMPORTED_MODULE_12__["default"], {
          key: 'point' + line.id.toString(),
          coordinateSpace: line.coordinateSpace,
          drawGraphicmarker: line.drawGraphicMarker,
          shape: line.shape,
          sizeWidth: line.sizeWidth,
          sizeHeight: line.sizeHeight,
          rotate: line.rotateArrow,
          positionShapeX: line.positionShapeX,
          positionShapeY: line.positionShapeY,
          label: line.label,
          positionLabelX: line.positionLabelX,
          positionLabelY: line.positionLabelY,
          height: _this.state.sizePanel,
          police: _this.props.options.police,
          sizePolice: _this.props.options.taille,
          color: line.color,
          idPoint: 'point' + line.id.toString(),
          name: line.name,
          orientedLinksIn: line.associateOrientedLinksIn,
          orientedLinksOut: line.associateOrientedLinksOut,
          textObject: line.textObj,
          seuil: line.lowerLimit
        });
        mapItems.push(item);
      } else if (line.shape.value === 'circle' || line.shape.value === 'cross') {
        var item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Draw_drawCircleCross__WEBPACK_IMPORTED_MODULE_11__["default"], {
          key: 'point' + line.id.toString(),
          coordinateSpace: line.coordinateSpace,
          drawGraphicMarker: line.drawGraphicMarker,
          shape: line.shape,
          size: line.sizeWidth,
          positionShapeX: line.positionShapeX,
          positionShapeY: line.positionShapeY,
          label: line.label,
          positionLabelX: line.positionLabelX,
          positionLabelY: line.positionLabelY,
          height: _this.state.sizePanel,
          police: _this.props.options.police,
          sizePolice: _this.props.options.taille,
          color: line.color,
          idPoint: 'point' + line.id.toString(),
          name: line.name,
          options: _this.props.options,
          onOptionsChange: _this.props.onOptionsChange,
          data: _this.props.data,
          textObject: line.textObj,
          seuil: line.lowerLimit,
          valueMainMetric: line.valueMetric
        });
        mapItems.push(item);
      }
    });
    this.getValueMainMetricOfPoint();
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, mapItems);
  };
  /** display link with coordinate */


  SimplePanel.prototype.displayLink = function () {
    var _this = this;

    var options = this.props.options;
    var mapItems = [];
    var arrayLinks = options.arrayLinks;
    arrayLinks.forEach(function (link) {
      var item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);

      if (link.defineHowToGetCoordonate.value === 'coordinate') {
        item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Draw_drawLinkWithCoordinates__WEBPACK_IMPORTED_MODULE_13__["default"], {
          key: 'link' + link.id.toString(),
          pointAPositionX: link.pointAPositionX,
          pointAPositionY: link.pointAPositionY,
          pointBPositionX: link.pointBPositionX,
          pointBPositionY: link.pointBPositionY,
          colorA: link.colorCoordinateA,
          colorB: link.colorCoordinateB,
          orientationLink: link.orientationLink.value || '',
          labelA: link.labelLinkA,
          labelB: link.labelLinkB,
          labelAPositionX: link.positionXLabelA,
          labelAPositionY: link.positionYLabelA,
          labelBPositionX: link.positionXLabelB,
          labelBPositionY: link.positionYLabelB,
          height: _this.state.sizePanel,
          name: link.name
        });
      } else if (link.defineHowToGetCoordonate.value === 'point') {
        item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Draw_drawLinkWithPoints__WEBPACK_IMPORTED_MODULE_14__["default"], {
          key: 'link' + link.id.toString(),
          pointIn: link.pointIn,
          pointOut: link.pointOut,
          labelA: link.labelLinkA,
          labelB: link.labelLinkB,
          labelAPositionX: link.positionXLabelA,
          labelAPositionY: link.positionYLabelA,
          labelBPositionX: link.positionXLabelB,
          labelBPositionY: link.positionYLabelB,
          orientationLink: link.orientationLink.value || '',
          height: _this.state.sizePanel,
          name: link.name
        });
      } else if (link.defineHowToGetCoordonate.value === 'region') {
        item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Draw_drawLinkWithRegions__WEBPACK_IMPORTED_MODULE_15__["default"], {
          key: 'link' + link.id.toString(),
          regionIn: link.regionIn,
          regionOut: link.regionOut,
          colorA: link.colorRegionIn,
          colorB: link.colorRegionOut,
          labelA: link.labelLinkA,
          labelB: link.labelLinkB,
          labelAPositionX: link.positionXLabelA,
          labelAPositionY: link.positionYLabelA,
          labelBPositionX: link.positionXLabelB,
          labelBPositionY: link.positionYLabelB,
          orientationLink: link.orientationLink.value || '',
          height: _this.state.sizePanel,
          name: link.name
        });
      }

      mapItems.push(item);
    });
    this.defineAssociateLinksToPoint();
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, mapItems);
  };

  SimplePanel.prototype.defineAssociateOrientedLinkToRegion = function () {
    var arrayRegion = this.props.options.arrayCoordinateSpace;
    var arrayAllOrientedLink = this.props.options.arrayOrientedLinks;
    var arrayOrientedLinkAssociateRegionIn = [];
    var arrayOrientedLinkAssociateRegionOut = [];
    var arrayToReturn = [];
    arrayRegion.forEach(function (region) {
      arrayAllOrientedLink.forEach(function (orientedLink) {
        arrayToReturn = [];

        if (region.id === orientedLink.regionIn.id) {
          arrayOrientedLinkAssociateRegionIn.push(orientedLink);
          arrayToReturn = arrayOrientedLinkAssociateRegionIn;
          region.orientedLink = arrayToReturn;
        }

        if (region.id === orientedLink.regionOut.id) {
          arrayOrientedLinkAssociateRegionOut.push(orientedLink);
          arrayToReturn = arrayOrientedLinkAssociateRegionOut;
          region.orientedLink = arrayToReturn;
        }
      });
    });
    return arrayToReturn;
  };
  /**
   * to do
   */


  SimplePanel.prototype.displayOrientedLink = function () {
    var _this = this;

    var arrayOrientedLink = this.props.options.arrayOrientedLinks;
    var mapItems = [];
    var item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
    this.getValueMainMetricOfOrientedLink();
    arrayOrientedLink.forEach(function (orientedLink) {
      item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Draw_drawOrientedLink__WEBPACK_IMPORTED_MODULE_16__["default"], {
        key: 'orientedLink' + orientedLink.id.toString(),
        orientationLink: orientedLink.orientationLink.value || '',
        pointAPositionX: orientedLink.pointAPositionX,
        pointAPositionY: orientedLink.pointAPositionY,
        pointBPositionX: orientedLink.pointBPositionX,
        pointBPositionY: orientedLink.pointBPositionY,
        colorA: orientedLink.colorCoordinateA,
        colorB: orientedLink.colorCoordinateB,
        associatePointIn: orientedLink.pointIn,
        associatePointOut: orientedLink.pointOut,
        associateRegionIn: orientedLink.regionIn,
        associateRegionOut: orientedLink.regionOut,
        sidePanel: _this.state.sizePanel,
        name: orientedLink.name,
        valueMainMetricA: orientedLink.valueMainMetricA,
        valueMainMetricB: orientedLink.valueMainMetricB,
        refMainMetric: orientedLink.mainMetric.refId || '',
        options: _this.props.options,
        onOptionsChange: _this.props.onOptionsChange,
        data: _this.props.data,
        textObject: orientedLink.textObj,
        seuil: orientedLink.lowerLimit
      });
      mapItems.push(item);
    });
    this.defineAssociateOrientedLinksToPoint();
    this.defineAssociateOrientedLinkToRegion();
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, mapItems);
  };
  /**
   * to do
   */


  SimplePanel.prototype.getValueMainMetricOfPoint = function () {
    var _this = this;

    var arrayPoints = this.props.options.arrayPoints;
    var valueMainMetric = 0;
    var totalValuesCount = 0;
    arrayPoints.forEach(function (point) {
      var _a, _b, _c, _d, _e, _f;

      Object(Functions_fetchMetrics__WEBPACK_IMPORTED_MODULE_7__["reqMetricPoint"])(point, _this.props);
      var key = point.mainMetric.key;
      var keyValue = point.mainMetric.keyValue;

      if ((_a = point.mainMetric.returnQuery) === null || _a === void 0 ? void 0 : _a.fields[0]) {
        if ((_b = point.mainMetric.returnQuery) === null || _b === void 0 ? void 0 : _b.fields[0].labels) {
          if (((_c = point.mainMetric.returnQuery) === null || _c === void 0 ? void 0 : _c.fields[0].labels[key]) === keyValue) {
            var sizeQuery = ((_d = point.mainMetric.returnQuery) === null || _d === void 0 ? void 0 : _d.fields[0].values.length) || 0;

            for (var i = 0; i < sizeQuery; i++) {
              if ((_e = point.mainMetric.returnQuery) === null || _e === void 0 ? void 0 : _e.fields[0].values.get(i)) {
                totalValuesCount++;
                valueMainMetric += (_f = point.mainMetric.returnQuery) === null || _f === void 0 ? void 0 : _f.fields[0].values.get(i);
              }
            }

            point.valueMetric = Math.round(valueMainMetric / totalValuesCount).toString();
          } else {
            point.valueMetric = 'no value';
          }
        }
      }
    });
  };
  /**
   * to do
   */


  SimplePanel.prototype.getValueMainMetricOfOrientedLink = function () {
    var _this = this;

    var arrayOrientedLinks = this.props.options.arrayOrientedLinks;
    var valueMainMetric = 0;
    var totalValuesCount = 0;
    arrayOrientedLinks.forEach(function (orientedLink) {
      var _a, _b, _c, _d, _e, _f;

      Object(Functions_fetchMetrics__WEBPACK_IMPORTED_MODULE_7__["reqMetricOrientedLink"])(orientedLink, _this.props);
      var key = orientedLink.mainMetric.key;
      var keyValue = orientedLink.mainMetric.keyValue;

      if ((_a = orientedLink.mainMetric.returnQuery) === null || _a === void 0 ? void 0 : _a.fields[0]) {
        if ((_b = orientedLink.mainMetric.returnQuery) === null || _b === void 0 ? void 0 : _b.fields[0].labels) {
          if (((_c = orientedLink.mainMetric.returnQuery) === null || _c === void 0 ? void 0 : _c.fields[0].labels[key]) === keyValue) {
            var sizeQuery = ((_d = orientedLink.mainMetric.returnQuery) === null || _d === void 0 ? void 0 : _d.fields[0].values.length) || 0;

            for (var i = 0; i < sizeQuery; i++) {
              if ((_e = orientedLink.mainMetric.returnQuery) === null || _e === void 0 ? void 0 : _e.fields[0].values.get(i)) {
                totalValuesCount++;
                valueMainMetric += (_f = orientedLink.mainMetric.returnQuery) === null || _f === void 0 ? void 0 : _f.fields[0].values.get(i);
              }
            }

            orientedLink.valueMainMetricA = Math.round(valueMainMetric / totalValuesCount).toString();
            orientedLink.valueMainMetricB = Math.round(valueMainMetric / totalValuesCount).toString();
          } else {
            orientedLink.valueMainMetricA = 'no value';
            orientedLink.valueMainMetricB = 'no value';
          }
        }
      }
    });
  };

  SimplePanel.prototype.defineAssociateLinksToPoint = function () {
    var arrayAssociateLinks = this.props.options.arrayLinks;
    var arrayPoints = this.props.options.arrayPoints;
    arrayPoints.forEach(function (point) {
      point.associateLinkIn = [];
      point.associateLinkOut = [];
    });
    arrayAssociateLinks.forEach(function (link) {
      arrayPoints.forEach(function (point) {
        var _a, _b;

        if (((_a = link.pointIn.value) === null || _a === void 0 ? void 0 : _a.id) === point.id) {
          point.associateLinkIn.push(link);
        } else if (((_b = link.pointOut.value) === null || _b === void 0 ? void 0 : _b.id) === point.id) {
          point.associateLinkOut.push(link);
        }
      });
    });
  };

  SimplePanel.prototype.defineAssociateOrientedLinksToPoint = function () {
    var arrayOrientedLinks = this.props.options.arrayOrientedLinks;
    var arrayPoints = this.props.options.arrayPoints;
    arrayPoints.forEach(function (point) {
      point.associateOrientedLinksIn = [];
      point.associateOrientedLinksOut = [];
    });
    arrayOrientedLinks.forEach(function (orientedLink) {
      arrayPoints.forEach(function (point) {
        var _a, _b;

        if (((_a = orientedLink.pointIn.value) === null || _a === void 0 ? void 0 : _a.id) === point.id) {
          point.associateOrientedLinksIn.push(orientedLink);
        } else if (((_b = orientedLink.pointOut.value) === null || _b === void 0 ? void 0 : _b.id) === point.id) {
          point.associateOrientedLinksOut.push(orientedLink);
        }
      });
    });
  };
  /** render */


  SimplePanel.prototype.render = function () {
    var styleBackground = {
      position: 'relative',
      textAlign: 'center',
      margin: 0,
      padding: 0,
      backgroundImage: 'url(' + this.props.options.imageUrl + ')',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '300px ',
      height: this.state.sizePanel.toString() + 'px',
      width: this.state.sizePanel.toString() + 'px',
      opacity: 0.8,
      zIndex: 1
    };
    var defaultStyle = {
      height: '100vh',
      width: '100vw',
      fontFamily: this.props.options.police,
      fontSize: this.props.options.taille,
      fontStyle: this.props.options.style !== 'bold' ? this.props.options.style : 'normal',
      fontWeight: this.props.options.style === 'bold' ? 'bold' : 'normal'
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["CustomScrollbar"], {
      autoHide: false,
      hideHorizontalTrack: true
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      style: defaultStyle
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        textAlign: 'left',
        position: 'relative',
        display: 'inline-grid'
      }
    }, this.state.allActionButton), this.state.buttonManage[0] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        width: '200px',
        position: 'relative',
        overflowY: 'scroll',
        marginLeft: '20%',
        marginRight: '20%',
        marginTop: '20%',
        marginBottom: '20%',
        border: '5px solid aliceblue',
        height: '40%'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
      title: 'Add Region',
      onDismiss: this.addNode,
      onClickBackdrop: this.addNode,
      isOpen: this.state.nbClickButton
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CoordinateSpace_addCoordinate__WEBPACK_IMPORTED_MODULE_8__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data
    }))), this.state.buttonManage[2] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        position: 'relative',
        left: '50%',
        top: '20%',
        maxWidth: '30%',
        zIndex: 3
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
      style: {
        maxWidth: '100%',
        width: '700px',
        position: 'relative',
        overflowY: 'scroll',
        marginLeft: '20%',
        marginRight: '20%',
        marginTop: '0px',
        marginBottom: '20%',
        "float": 'right',
        height: '200px',
        backgroundColor: '#212124',
        color: '#d8d9da',
        border: '4px solid #299c46',
        borderRadius: '4px',
        scrollbarColor: '#09090b #212124',
        scrollbarWidth: 'thin'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        backgroundImage: 'linear-gradient(90deg, rgb(41, 42, 45), rgb(0, 0, 0))'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
      style: {
        width: '100%',
        fontSize: '20px',
        display: 'inline-flex'
      }
    }, "Legend", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      style: {
        marginLeft: '78%'
      },
      className: 'fa fa-close'
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      style: {
        fontSize: '15px',
        marginLeft: '14px',
        fontWeight: 'bold'
      }
    }, "Region"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      style: {
        fontSize: '11px',
        marginLeft: '17px'
      }
    }, "Label")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: 'LegendMatt'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      style: {
        padding: 4,
        margin: 9,
        width: '3.5rem',
        borderRadius: '39%',
        backgroundColor: 'red',
        border: '3px solid yellow',
        listStyleType: 'none',
        display: 'inline-block'
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      style: {
        display: 'inline-block',
        verticalAlign: 'middle',
        marginBottom: '1.25rem',
        fontSize: '9px'
      }
    }, "Min-Max")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: 'LegendMatt'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      style: {
        padding: 4,
        margin: 9,
        width: '3.5rem',
        borderRadius: '39%',
        backgroundColor: 'green',
        border: '3px solid yellow',
        listStyleType: 'none',
        display: 'inline-block'
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      style: {
        display: 'inline-block',
        verticalAlign: 'middle',
        marginBottom: '1.25rem',
        fontSize: '9px'
      }
    }, "Min-Max")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: 'LegendMatt'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      style: {
        padding: 4,
        margin: 9,
        width: '3.5rem',
        borderRadius: '39%',
        backgroundColor: 'orange',
        border: '3px solid yellow',
        listStyleType: 'none',
        display: 'inline-block'
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      style: {
        display: 'inline-block',
        verticalAlign: 'middle',
        marginBottom: '1.25rem',
        fontSize: '9px'
      }
    }, "Min-Max")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: 'LegendMatt'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      style: {
        padding: 4,
        margin: 9,
        width: '3.5rem',
        borderRadius: '39%',
        backgroundColor: 'purple',
        border: '3px solid yellow',
        listStyleType: 'none',
        display: 'inline-block'
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      style: {
        display: 'inline-block',
        verticalAlign: 'middle',
        marginBottom: '1.25rem',
        fontSize: '9px'
      }
    }, "Min-Max")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: 'LegendMatt'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      style: {
        padding: 4,
        margin: 9,
        width: '3.5rem',
        borderRadius: '39%',
        backgroundColor: 'green',
        border: '3px solid yellow',
        listStyleType: 'none',
        display: 'inline-block'
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      style: {
        display: 'inline-block',
        verticalAlign: 'middle',
        marginBottom: '1.25rem',
        fontSize: '9px'
      }
    }, "Min-Max")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: 'LegendMatt'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      style: {
        padding: 4,
        margin: 9,
        width: '3.5rem',
        borderRadius: '39%',
        backgroundColor: 'purple',
        border: '3px solid yellow',
        listStyleType: 'none',
        display: 'inline-block'
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      style: {
        display: 'inline-block',
        verticalAlign: 'middle',
        marginBottom: '1.25rem',
        fontSize: '9px'
      }
    }, "Min-Max")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: 'LegendMatt'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      style: {
        padding: 4,
        margin: 9,
        width: '3.5rem',
        borderRadius: '39%',
        backgroundColor: 'orange',
        border: '3px solid yellow',
        listStyleType: 'none',
        display: 'inline-block'
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      style: {
        display: 'inline-block',
        verticalAlign: 'middle',
        marginBottom: '1.25rem',
        fontSize: '9px'
      }
    }, "Min-Max")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: 'LegendMatt'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      style: {
        padding: 4,
        margin: 9,
        width: '3.5rem',
        borderRadius: '39%',
        backgroundColor: 'red',
        border: '3px solid yellow',
        listStyleType: 'none',
        display: 'inline-block'
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      style: {
        display: 'inline-block',
        verticalAlign: 'middle',
        marginBottom: '1.25rem',
        fontSize: '9px'
      }
    }, "Min-Max"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      style: {
        fontSize: '11px',
        marginLeft: '17px'
      }
    }, "Label"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: 'LegendMatt'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      style: {
        padding: 4,
        margin: 9,
        width: '3.5rem',
        borderRadius: '39%',
        backgroundColor: 'red',
        border: '3px solid yellow',
        listStyleType: 'none',
        display: 'inline-block'
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      style: {
        display: 'inline-block',
        verticalAlign: 'middle',
        marginBottom: '1.25rem',
        fontSize: '9px'
      }
    }, "No Variable"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      style: {
        fontSize: '15px',
        marginLeft: '10px'
      }
    }, "Point"))), this.state.buttonManage[3] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      onClick: this.callMethod
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        backgroundSize: 'cover'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      onClick: this.getCoordinates,
      style: styleBackground,
      id: 'mainPanel'
    }, this.defineLimit(), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), this.fillCoordinate(), this.displayLink(), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.displayPoint()), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.displayOrientedLink()))))))));
  };

  return SimplePanel;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./components/CoordinateSpace/addCoordinate.tsx":
/*!******************************************************!*\
  !*** ./components/CoordinateSpace/addCoordinate.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Functions_initRegionCoordinateSpace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Functions/initRegionCoordinateSpace */ "./Functions/initRegionCoordinateSpace.tsx");
/* harmony import */ var components_CoordinateSpace_coordinateSpace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/CoordinateSpace/coordinateSpace */ "./components/CoordinateSpace/coordinateSpace.tsx");




/** Add new coordinate space */

var AddCoordinate =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AddCoordinate, _super);

  function AddCoordinate(props) {
    var _this = _super.call(this, props) || this;
    /** search new id for espacecoordinneesclass */


    _this.searchNewId = function (allCoordinateSpace) {
      var e_1, _a;

      var id = -1;

      try {
        for (var allCoordinateSpace_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(allCoordinateSpace), allCoordinateSpace_1_1 = allCoordinateSpace_1.next(); !allCoordinateSpace_1_1.done; allCoordinateSpace_1_1 = allCoordinateSpace_1.next()) {
          var line = allCoordinateSpace_1_1.value;

          if (line.id > id) {
            id = line.id;
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (allCoordinateSpace_1_1 && !allCoordinateSpace_1_1.done && (_a = allCoordinateSpace_1["return"])) _a.call(allCoordinateSpace_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      id += 1;
      return id;
    };
    /** call init class for coordinate state */


    _this.componentDidMount = function () {
      _this.setState({
        coordinate: Object(Functions_initRegionCoordinateSpace__WEBPACK_IMPORTED_MODULE_2__["initRegionCoordinateSpace"])(_this.props.options.indexRegion)
      });
    };
    /** update onOptionsChange */


    _this.setAsyncOption = function (newIdx) {
      return Promise.resolve('Success').then(function () {
        _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
          indexRegion: newIdx
        }));
      });
    };
    /** send data for parent */


    _this.callBack = function (id, newCoordinate) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var allCoordinateSpace;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!newCoordinate) return [3
              /*break*/
              , 2];
              allCoordinateSpace = this.props.options.arrayCoordinateSpace.slice();
              return [4
              /*yield*/
              , this.setAsyncOption(newCoordinate.id)];

            case 1:
              _a.sent();

              this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.options), {
                arrayCoordinateSpace: allCoordinateSpace.concat(newCoordinate)
              }));

              if (this.props.returnEditMode) {
                this.props.returnEditMode();
              }

              _a.label = 2;

            case 2:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.state = {
      coordinate: undefined
    };
    return _this;
  }
  /** result */


  AddCoordinate.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.coordinate && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CoordinateSpace_coordinateSpace__WEBPACK_IMPORTED_MODULE_3__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      coordinate: this.state.coordinate,
      callBackToParent: this.callBack,
      isAddCoordinate: true
    }));
  };

  return AddCoordinate;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AddCoordinate);

/***/ }),

/***/ "./components/CoordinateSpace/coordinateSpace.tsx":
/*!********************************************************!*\
  !*** ./components/CoordinateSpace/coordinateSpace.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Models_ArrayInputClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Models/ArrayInputClass */ "./Models/ArrayInputClass.tsx");
/* harmony import */ var Functions_Input_inputButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Functions/Input/inputButton */ "./Functions/Input/inputButton.tsx");
/* harmony import */ var Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Functions/Input/inputText */ "./Functions/Input/inputText.tsx");
/* harmony import */ var Functions_createInputCoor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Functions/createInputCoor */ "./Functions/createInputCoor.tsx");
/* harmony import */ var Functions_editGoodParameter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Functions/editGoodParameter */ "./Functions/editGoodParameter.tsx");
/* harmony import */ var style_CoordinateSpace_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! style/CoordinateSpace.css */ "./style/CoordinateSpace.css");
/* harmony import */ var style_CoordinateSpace_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(style_CoordinateSpace_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_Parametrage_parametresGeneriques__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Parametrage/parametresGeneriques */ "./components/Parametrage/parametresGeneriques.tsx");
/* harmony import */ var components_Parametrage_manageLowerLimit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Parametrage/manageLowerLimit */ "./components/Parametrage/manageLowerLimit.tsx");











/**
 * component edit space coordinate
 */

var CoordinateSpace =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CoordinateSpace, _super);

  function CoordinateSpace(props) {
    var _this = _super.call(this, props) || this;
    /** update state with promise */


    _this.setStateAsyncArrayCoor = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /** update state with promise */


    _this.setStateAsyncArrayInput = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /**
     * call function to return arrayCoor a SimpleEditor
     */


    _this.callBack = function () {
      var waitAlert = 3000;

      if (_this.state.arrayCoor.label === '') {
        _this.setState({
          severityAlert: 'error',
          titleAlert: 'Error: label is empty',
          hiddenAlert: false
        });

        setTimeout(function () {
          _this.setState({
            hiddenAlert: true
          });
        }, waitAlert);
      } else {
        if (_this.state.checkedRadio[0]) {
          _this.props.callBackToParent(_this.state.arrayCoor.id, _this.state.arrayCoor);
        } else if (_this.state.checkedRadio[1]) {
          if (_this.props.isAddCoordinate) {} else {}
        }

        _this.setState({
          severityAlert: 'success',
          titleAlert: 'Save',
          hiddenAlert: false
        });

        if (!_this.props.isAddCoordinate) {
          setTimeout(function () {
            _this.setState({
              hiddenAlert: true
            });
          }, waitAlert);
        }
      }
    };
    /** save data in parent */


    _this.callBackToOther = function (followLink, hoveringTooltipLink, hoveringTooltipText, textObj) {
      var oldCoor = _this.state.arrayCoor;

      if (followLink) {
        oldCoor.linkURL.followLink = followLink;
      }

      if (hoveringTooltipLink) {
        oldCoor.linkURL.hoveringTooltipLink = hoveringTooltipLink;
      }

      if (hoveringTooltipText) {
        oldCoor.linkURL.hoveringTooltipText = hoveringTooltipText;
      }

      if (textObj) {
        oldCoor.textObj = textObj;
      }

      _this.setState({
        arrayCoor: oldCoor
      });
    };
    /**
     * add inputs for a new coordiante
     */


    _this.addInput = function (id) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.setStateAsyncArrayInput({
                arrayInput: this.state.arrayInput.concat([new Models_ArrayInputClass__WEBPACK_IMPORTED_MODULE_2__["ArrayInputClass"](id, Object(Functions_createInputCoor__WEBPACK_IMPORTED_MODULE_5__["createInputCoor"])(id, false))])
              })];

            case 1:
              _a.sent();

              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * Delete array input and value
     * @param {event} event event click delete button
     */


    _this.deleteOwnInput = function () {
      var del = confirm('Delete "' + _this.state.arrayCoor.label + '" ?'); // alert(del);

      if (del) {
        _this.props.callBackToParent(_this.state.arrayCoor.id, undefined);
      }
    };
    /** edit value for select */


    _this.onChangeSelectQuery = function (value) {
      var _a;

      var newArrayCoor = _this.state.arrayCoor;
      newArrayCoor.mainMetric.refId = ((_a = value.value) === null || _a === void 0 ? void 0 : _a.refId) || '';
      newArrayCoor.mainMetric.expr = 'rate(go_memstats_alloc_bytes[5m])';

      _this.setState({
        arrayCoor: newArrayCoor,
        selectQueryDefault: value
      });
    };
    /**
     * Call function in load component
     */


    _this.componentDidMount = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var element, valueSelect, _a, _b, line, newArrayCoor;

        var e_1, _c;

        var _d;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_e) {
          switch (_e.label) {
            case 0:
              element = this.props.coordinate;
              return [4
              /*yield*/
              , this.addInput(element.id)];

            case 1:
              _e.sent();

              this.fillInputEspaceCoor();

              if (this.props.data.series) {
                valueSelect = [];

                try {
                  for (_a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.props.data.series), _b = _a.next(); !_b.done; _b = _a.next()) {
                    line = _b.value;
                    valueSelect.push({
                      value: line,
                      label: line.refId
                    });
                  }
                } catch (e_1_1) {
                  e_1 = {
                    error: e_1_1
                  };
                } finally {
                  try {
                    if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                  } finally {
                    if (e_1) throw e_1.error;
                  }
                }

                newArrayCoor = this.state.arrayCoor;
                newArrayCoor.mainMetric.refId = valueSelect.length > 0 ? ((_d = valueSelect[0].value) === null || _d === void 0 ? void 0 : _d.refId) || '' : '';
                this.setState({
                  arrayCoor: newArrayCoor,
                  selectQuery: valueSelect,
                  selectQueryDefault: valueSelect[0]
                });
              }

              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * function is call when props is update. Update state
     */


    _this.componentDidUpdate = function (prevProps, prevState) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var valueSelect, _a, _b, line, newArrayCoor;

        var e_2, _c;

        var _d;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_e) {
          switch (_e.label) {
            case 0:
              if (!(prevProps.coordinate !== this.props.coordinate)) return [3
              /*break*/
              , 2];
              return [4
              /*yield*/
              , this.setStateAsyncArrayCoor({
                arrayCoor: this.props.coordinate
              })];

            case 1:
              _e.sent();

              this.fillInputEspaceCoor();
              _e.label = 2;

            case 2:
              if (prevProps.data.series !== this.props.data.series) {
                valueSelect = [];

                try {
                  for (_a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.props.data.series), _b = _a.next(); !_b.done; _b = _a.next()) {
                    line = _b.value;
                    valueSelect.push({
                      value: line,
                      label: line.refId
                    });
                  }
                } catch (e_2_1) {
                  e_2 = {
                    error: e_2_1
                  };
                } finally {
                  try {
                    if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                  } finally {
                    if (e_2) throw e_2.error;
                  }
                }

                newArrayCoor = this.state.arrayCoor;
                newArrayCoor.mainMetric.refId = valueSelect.length > 0 ? ((_d = valueSelect[0].value) === null || _d === void 0 ? void 0 : _d.refId) || '' : '';
                this.setState({
                  arrayCoor: newArrayCoor,
                  selectQuery: valueSelect,
                  selectQueryDefault: valueSelect[0]
                });
              }

              if (prevProps.options.arrayOrientedLinks.length !== this.state.oldData.length) {//console.log('update that');
              }

              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** event change value click radio button */


    _this.onChangeRadio = function (event) {
      var idElement = event.currentTarget.id;
      var resulFinal = _this.state.checkedRadio;

      if (idElement === 'region') {
        resulFinal = [true, false, false];
      } else if (idElement === 'lien') {
        resulFinal = [false, true, false];
      } else if (idElement === 'point') {
        resulFinal = [false, false, true];
      }

      _this.setState({
        checkedRadio: resulFinal
      });
    };
    /** update lower limit */


    _this.callBackManageLowerLimit = function (coordiante) {
      var newValue = _this.state.arrayCoor;
      newValue.colorMode = coordiante.colorMode;
      newValue.traceBorder = coordiante.traceBorder;
      newValue.traceBack = coordiante.traceBack; // newValue.lowerLimit = coordiante.lowerLimit;

      _this.setState({
        arrayCoor: newValue
      });
    };
    /** save lower limit data */


    _this.callBackLowerLimit = function (lowerLimit) {
      var newValue = _this.state.arrayCoor;
      newValue.lowerLimit = lowerLimit;

      _this.setState({
        arrayCoor: newValue
      });
    };

    _this.myCallBackArrayPoints = function (dataFromChild) {
      _this.setState({
        arrayPoints: dataFromChild
      });

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        arrayPoints: dataFromChild
      }));
    };

    _this.myCallBackArrayLinks = function (dataFromChild) {
      _this.setState({
        arrayLinks: dataFromChild
      });

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        arrayLinks: dataFromChild
      }));
    };

    _this.myCallBackArrayOrientedLinks = function (dataFromChild) {
      _this.setState({
        arrayOrientedLinks: dataFromChild
      });

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        arrayOrientedLinks: dataFromChild
      }));
    };

    _this.onToggleOrientedLink = function (isOpen) {
      _this.setState({
        openCollapseOrientedLink: isOpen
      });
    };

    _this.state = {
      arrayCoor: _this.props.coordinate,
      arrayInput: [],
      htmlInput: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null),
      selectQuery: [],
      selectQueryDefault: [],
      hiddenAlert: true,
      checkedRadio: [true, false, false],
      titleAlert: 'Error: label is empty',
      severityAlert: 'error',
      arrayPoints: [],
      arrayLinks: [],
      arrayOrientedLinks: [],
      openCollapseOrientedLink: false,
      oldData: _this.props.options.arrayOrientedLinks
    };
    return _this;
  }
  /**
   * Use function if value input change
   * @param {string} currentTarget new value of input
   * @param {string} name name of input
   * @param {number} index id of input
   */


  CoordinateSpace.prototype._handleChange = function (currentTarget, name, index) {
    var tmp = this.state.arrayCoor;
    tmp = Object(Functions_editGoodParameter__WEBPACK_IMPORTED_MODULE_6__["editGoodParameterExtend"])(name, tmp, currentTarget);
    this.setState({
      arrayCoor: tmp
    });
    this.fillInputEspaceCoor();
  };
  /**
   * Get value of input with state.arrayCoor
   * @param {number} id id of element
   * @param {string} param name of input
   * @returns {string} value of the array element
   */


  CoordinateSpace.prototype.getGoodValue = function (id, param) {
    var value;
    value = '';

    if (param.startsWith('positionXMin')) {
      value = this.state.arrayCoor.coords.xMin;
    } else if (param.startsWith('positionXMax')) {
      value = this.state.arrayCoor.coords.xMax;
    } else if (param.startsWith('positionYMin')) {
      value = this.state.arrayCoor.coords.yMin;
    } else if (param.startsWith('positionYMax')) {
      value = this.state.arrayCoor.coords.yMax;
    } else if (param.startsWith('label')) {
      value = this.state.arrayCoor.label;
    } else if (param.startsWith('image')) {
      value = this.state.arrayCoor.img; // } else if (param.startsWith('interfaceJson')) {
      // 	value = this.state.arrayCoor.;
    } else if (param.startsWith('key')) {
      value = this.state.arrayCoor.mainMetric.key;
    } else if (param.startsWith('valueKey')) {
      value = this.state.arrayCoor.mainMetric.keyValue;
    }

    return value;
  };
  /**
   * Create dynamic input
   */


  CoordinateSpace.prototype.fillInputEspaceCoor = function () {
    var e_3, _a;

    var _this = this;

    var arrayInput = this.state.arrayInput;
    var finalItem = [];

    var _loop_1 = function _loop_1(line) {
      var mapItems = line.getUneClassInput().map(function (obj) {
        return obj.getInputType() === 'text' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: obj.getId(),
          label: obj.getLabel(),
          name: obj.getName(),
          placeholder: obj.getPlaceholder() || '',
          required: obj.getRequired(),
          value: _this.getGoodValue(line.getId(), obj.getName()),
          _handleChange: function _handleChange(event) {
            return _this._handleChange(event.currentTarget.value, obj.getName(), line.getId());
          }
        }) : !_this.props.isAddCoordinate ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: obj.getId(),
          label: obj.getLabel(),
          value: obj.getValue() || '',
          name: obj.getName(),
          required: obj.getRequired(),
          _handleChange: _this.deleteOwnInput,
          id: obj.getId()
        }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
      });
      var divKey = 'inputCoor' + line.getId().toString();
      var newInput = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: 'addCoordinate' + divKey,
        className: 'inputCoor'
      }, mapItems);
      finalItem = finalItem.concat(newInput);
    };

    try {
      for (var arrayInput_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arrayInput), arrayInput_1_1 = arrayInput_1.next(); !arrayInput_1_1.done; arrayInput_1_1 = arrayInput_1.next()) {
        var line = arrayInput_1_1.value;

        _loop_1(line);
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (arrayInput_1_1 && !arrayInput_1_1.done && (_a = arrayInput_1["return"])) _a.call(arrayInput_1);
      } finally {
        if (e_3) throw e_3.error;
      }
    }

    this.setState({
      htmlInput: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, finalItem)
    });
  };
  /**
   * render
   */


  CoordinateSpace.prototype.render = function () {
    var _this = this;

    var styleAlert = {
      position: 'fixed',
      bottom: '5%',
      right: '5%',
      zIndex: 9999
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: styleAlert,
      hidden: this.state.hiddenAlert
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__["Alert"], {
      title: this.state.titleAlert,
      severity: this.state.severityAlert
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.htmlInput), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__["Select"], {
      onChange: function onChange(value) {
        return _this.onChangeSelectQuery(value);
      },
      allowCustomValue: false,
      options: this.state.selectQuery,
      width: 10,
      value: this.state.selectQueryDefault
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Parametrage_parametresGeneriques__WEBPACK_IMPORTED_MODULE_9__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      coordinateSpace: this.state.arrayCoor,
      callBackToParent: this.callBackToOther
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Parametrage_manageLowerLimit__WEBPACK_IMPORTED_MODULE_10__["default"], {
      coordinate: this.state.arrayCoor,
      callBack: this.callBackManageLowerLimit,
      lowerLimitCallBack: this.callBackLowerLimit
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: 'classRegion'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__["FormField"], {
      label: 'Image',
      labelWidth: 10,
      inputWidth: 20,
      type: 'text',
      value: this.state.arrayCoor.img,
      name: 'image',
      onChange: function onChange(event) {
        return _this._handleChange(event.currentTarget.value, 'image', _this.state.arrayCoor.id);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__["FormField"], {
      label: 'X min',
      labelWidth: 10,
      inputWidth: 20,
      type: 'text',
      value: this.state.arrayCoor.coords.xMin,
      name: 'positionXMin',
      onChange: function onChange(event) {
        return _this._handleChange(event.currentTarget.value, 'positionXMin', _this.state.arrayCoor.id);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__["FormField"], {
      label: 'X max',
      labelWidth: 10,
      inputWidth: 20,
      type: 'text',
      value: this.state.arrayCoor.coords.xMax,
      name: 'positionXMax',
      onChange: function onChange(event) {
        return _this._handleChange(event.currentTarget.value, 'positionXMax', _this.state.arrayCoor.id);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__["FormField"], {
      label: 'Y min',
      labelWidth: 10,
      inputWidth: 20,
      type: 'text',
      value: this.state.arrayCoor.coords.yMin,
      name: 'positionYMin',
      onChange: function onChange(event) {
        return _this._handleChange(event.currentTarget.value, 'positionYMin', _this.state.arrayCoor.id);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__["FormField"], {
      label: 'Y max',
      labelWidth: 10,
      inputWidth: 20,
      type: 'text',
      value: this.state.arrayCoor.coords.yMax,
      name: 'positionYMax',
      onChange: function onChange(event) {
        return _this._handleChange(event.currentTarget.value, 'positionYMax', _this.state.arrayCoor.id);
      }
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: 'buttonSave'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      onClick: function onClick() {
        return _this.callBack();
      }
    }, "Load"), !this.props.isAddCoordinate && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      onClick: this.deleteOwnInput,
      variant: 'danger'
    }, "Delete")));
  };

  return CoordinateSpace;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CoordinateSpace);

/***/ }),

/***/ "./components/CoordinateSpace/editCoordinateSpace.tsx":
/*!************************************************************!*\
  !*** ./components/CoordinateSpace/editCoordinateSpace.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Functions_initRegionCoordinateSpace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Functions/initRegionCoordinateSpace */ "./Functions/initRegionCoordinateSpace.tsx");
/* harmony import */ var _coordinateSpace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coordinateSpace */ "./components/CoordinateSpace/coordinateSpace.tsx");





/**
 * manage coordinate space for simpleEditor
 */

var EditCoordinateSpace =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditCoordinateSpace, _super);

  function EditCoordinateSpace(props) {
    var _this = _super.call(this, props) || this;
    /**
     * save data in parent
     */


    _this.callBack = function (id, newCoordinate) {
      var e_1, _a, e_2, _b;

      if (newCoordinate) {
        var oldData = _this.props.options.arrayCoordinateSpace.slice();

        var i = 0;

        try {
          for (var oldData_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(oldData), oldData_1_1 = oldData_1.next(); !oldData_1_1.done; oldData_1_1 = oldData_1.next()) {
            var line = oldData_1_1.value;

            if (line.id === id) {
              oldData[i] = newCoordinate;
              break;
            }

            ++i;
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (oldData_1_1 && !oldData_1_1.done && (_a = oldData_1["return"])) _a.call(oldData_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }

        _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
          arrayCoordinateSpace: oldData
        }));
      } else {
        var find = false;

        var oldData = _this.props.options.arrayCoordinateSpace.slice();

        var i = 0;

        try {
          for (var oldData_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(oldData), oldData_2_1 = oldData_2.next(); !oldData_2_1.done; oldData_2_1 = oldData_2.next()) {
            var line = oldData_2_1.value;

            if (line.id === id) {
              find = true;
              break;
            }

            ++i;
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (oldData_2_1 && !oldData_2_1.done && (_b = oldData_2["return"])) _b.call(oldData_2);
          } finally {
            if (e_2) throw e_2.error;
          }
        }

        if (find) {
          oldData.splice(i, 1);

          _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
            arrayCoordinateSpace: oldData
          }));
        }
      }
    };
    /**
     * fill data for select
     */


    _this.componentDidMount = function () {
      var e_3, _a;

      var valueSelect = [];
      var stockTmpCoordinatesSpace = _this.props.options.arrayCoordinateSpace;

      try {
        for (var stockTmpCoordinatesSpace_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(stockTmpCoordinatesSpace), stockTmpCoordinatesSpace_1_1 = stockTmpCoordinatesSpace_1.next(); !stockTmpCoordinatesSpace_1_1.done; stockTmpCoordinatesSpace_1_1 = stockTmpCoordinatesSpace_1.next()) {
          var line = stockTmpCoordinatesSpace_1_1.value;
          valueSelect.push({
            value: line,
            label: line.label
          });
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (stockTmpCoordinatesSpace_1_1 && !stockTmpCoordinatesSpace_1_1.done && (_a = stockTmpCoordinatesSpace_1["return"])) _a.call(stockTmpCoordinatesSpace_1);
        } finally {
          if (e_3) throw e_3.error;
        }
      }

      _this.setState({
        selectCoordinateSpace: valueSelect,
        selectCoordinateSpaceDefault: valueSelect.length > 0 ? valueSelect[0] : Object(Functions_initRegionCoordinateSpace__WEBPACK_IMPORTED_MODULE_3__["initRegionCoordinateSpace"])(_this.props.options.indexRegion)
      });
    };
    /**
     * Change select value to edit
     */


    _this.onChangeSelectCoordinate = function (value) {
      _this.setState({
        selectCoordinateSpaceDefault: value
      });
    };
    /**
     * update state if value props change
     */


    _this.componentDidUpdate = function (prevProps) {
      if (prevProps.options.arrayCoordinateSpace !== _this.props.options.arrayCoordinateSpace) {// this.componentDidMount();
      }
    };

    _this.state = {
      selectCoordinateSpace: [],
      selectCoordinateSpaceDefault: []
    };
    return _this;
  }
  /** result */


  EditCoordinateSpace.prototype.render = function () {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      onChange: function onChange(value) {
        return _this.onChangeSelectCoordinate(value);
      },
      allowCustomValue: false,
      options: this.state.selectCoordinateSpace,
      width: 10,
      value: this.state.selectCoordinateSpaceDefault
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.selectCoordinateSpaceDefault.value ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_coordinateSpace__WEBPACK_IMPORTED_MODULE_4__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      coordinate: this.state.selectCoordinateSpaceDefault.value,
      callBackToParent: this.callBack,
      isAddCoordinate: false
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Data not set")));
  };

  return EditCoordinateSpace;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (EditCoordinateSpace);

/***/ }),

/***/ "./components/CoordinateSpace/manageCoordinateSpace.tsx":
/*!**************************************************************!*\
  !*** ./components/CoordinateSpace/manageCoordinateSpace.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editCoordinateSpace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editCoordinateSpace */ "./components/CoordinateSpace/editCoordinateSpace.tsx");
/* harmony import */ var _addCoordinate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addCoordinate */ "./components/CoordinateSpace/addCoordinate.tsx");





/**
 * def class
 */

var ManageCoordinateSpace =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ManageCoordinateSpace, _super);

  function ManageCoordinateSpace(props) {
    var _this = _super.call(this, props) || this;
    /** after save pass to edit mode */


    _this.returnEditMode = function () {
      _this.setState({
        tabsVariable: [false, true]
      });
    };
    /**
     * switch tab
     * @param {number} id id to to new tab
     */


    _this.goToTab = function (id) {
      var oldValue = _this.state.tabsVariable.slice();

      var size = oldValue.length;

      for (var i = 0; i < size; i++) {
        oldValue[i] = i === id ? true : false;
      }

      _this.setState({
        tabsVariable: oldValue
      });
    };

    _this.state = {
      tabsVariable: [false, true]
    };
    return _this;
  }
  /** result */


  ManageCoordinateSpace.prototype.render = function () {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["TabsBar"], {
      className: 'page-header tabs',
      hideBorder: false
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: 'tabDisplayCoordinateSpaceAdd',
      label: 'Add coordinate space',
      active: this.state.tabsVariable[0],
      onChangeTab: function onChangeTab() {
        return _this.goToTab(0);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: 'tabDisplayCoordinateSpaceEdit',
      label: 'Edit coordinate space',
      active: this.state.tabsVariable[1],
      onChangeTab: function onChangeTab() {
        return _this.goToTab(1);
      }
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["TabContent"], null, this.state.tabsVariable[0] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_addCoordinate__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onOptionsChange: this.props.onOptionsChange,
      options: this.props.options,
      data: this.props.data,
      returnEditMode: this.returnEditMode
    })), this.state.tabsVariable[1] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_editCoordinateSpace__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onOptionsChange: this.props.onOptionsChange,
      options: this.props.options,
      data: this.props.data
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: function onClick() {
        return console.log(_this.props.data.series);
      }
    }, "List all metrics"));
  };

  return ManageCoordinateSpace;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ManageCoordinateSpace);

/***/ }),

/***/ "./components/Draw/drawArrow.tsx":
/*!***************************************!*\
  !*** ./components/Draw/drawArrow.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var DrawArrow =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DrawArrow, _super);

  function DrawArrow(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {};
    return _this;
  }

  DrawArrow.prototype.defineLimitX = function (coordinateX, coordinateSpace) {
    var result = coordinateX;

    if (coordinateSpace.value === undefined) {
      if (coordinateX > 100) {
        result = 100;
      }

      if (coordinateX < -100) {
        result = -100;
      }
    } else {
      var xMin = parseInt(coordinateSpace.value.coords.xMin, 10);
      var xMax = parseInt(coordinateSpace.value.coords.xMax, 10);

      if (xMax < 0) {
        if (coordinateX < xMax) {
          result = xMax;
        } else if (coordinateX > xMin) {
          result = xMin;
        }
      } else {
        if (coordinateX > xMax) {
          result = xMax;
        } else if (coordinateX < xMin) {
          result = xMin;
        }
      }
    }

    return result;
  };

  DrawArrow.prototype.defineLimitY = function (coordinateY, coordinateSpace) {
    var result = coordinateY;

    if (coordinateSpace.value === undefined) {
      if (coordinateY > 100) {
        coordinateY = 100;
      }

      if (coordinateY < -100) {
        coordinateY = -100;
      }
    } else {
      var yMin = parseInt(coordinateSpace.value.coords.yMin, 10);
      var yMax = parseInt(coordinateSpace.value.coords.yMax, 10);

      if (yMax < 0) {
        if (coordinateY < yMax) {
          result = yMax;
        } else if (coordinateY > yMin) {
          result = yMin;
        }
      } else {
        if (coordinateY > yMax) {
          result = yMax;
        } else if (coordinateY < yMin) {
          result = yMin;
        }
      }
    }

    return result;
  };

  DrawArrow.prototype.defineSizeWidth = function (size) {
    var sizeInt = 0;

    if (size === 'small') {
      sizeInt = 20;
    } else if (size === 'medium') {
      sizeInt = 40;
    } else if (size === 'large') {
      sizeInt = 60;
    }

    return sizeInt;
  };

  DrawArrow.prototype.defineSizeHeight = function (size) {
    var sizeInt = 0;

    if (size === 'small') {
      sizeInt = 5;
    } else if (size === 'medium') {
      sizeInt = 10;
    } else if (size === 'large') {
      sizeInt = 20;
    }

    return sizeInt;
  };

  DrawArrow.prototype.definePositionArrowX = function (positionX, coordinateSpace, defineCenter, width) {
    if (coordinateSpace.value === undefined) {
      return this.defineLimitX(positionX, coordinateSpace) * (defineCenter / 100) + defineCenter - width;
    } else {
      var xMin = parseInt(coordinateSpace.value.coords.xMin, 10);
      var xMax = parseInt(coordinateSpace.value.coords.xMax, 10);
      var xMid = (xMin + xMax) / 2;
      return this.defineLimitX(positionX + xMid, coordinateSpace) * (defineCenter / 100) + defineCenter - width;
    }
  };

  DrawArrow.prototype.definePositionArrowY = function (positionY, coordinateSpace, defineCenter, size) {
    if (coordinateSpace.value === undefined) {
      return defineCenter - this.defineLimitY(positionY, coordinateSpace) * (defineCenter / 100) - size / 2;
    } else {
      var yMin = parseInt(coordinateSpace.value.coords.yMin, 10);
      var yMax = parseInt(coordinateSpace.value.coords.yMax, 10);
      var yMid = (yMin + yMax) / 2;
      return defineCenter - this.defineLimitY(positionY + yMid, coordinateSpace) * (defineCenter / 100) - size / 2;
    }
  };

  DrawArrow.prototype.drawArrow = function (widthArrow, heightArrow, rotate, positionX, positionY, color, drawGraphicMarker) {
    if (drawGraphicMarker === 'true') {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: 'arrow',
        style: {
          transform: 'rotate(' + rotate + ')',
          position: 'absolute',
          top: positionY,
          left: positionX
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          width: '0',
          height: '0',
          borderLeft: widthArrow + 'px solid transparent',
          borderRight: widthArrow + 'px solid transparent',
          borderBottom: widthArrow + 'px solid ' + color,
          transform: 'rotate(0deg)'
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          border: '1px solid ' + color,
          backgroundColor: color,
          width: widthArrow + 'px',
          height: heightArrow + 'px',
          marginLeft: widthArrow / 2
        }
      }));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
    }
  };

  DrawArrow.prototype.defineCenterX = function (coordinateSpace) {
    var result = 0;
    result = this.props.height / 2;
    return result;
  };

  DrawArrow.prototype.defineCenterY = function (coordinateSpace) {
    var result = 0;
    result = this.props.height / 2;
    return result;
  };

  DrawArrow.prototype.defineLabel = function (color, positionLabelX, positionLabelY, positionArrowX, positionArrowY, drawGraphicMarker, heightArrow) {
    var valueToDisplay = this.props.label;

    if (this.props.label === '') {
      valueToDisplay = this.props.name;
    }

    if (drawGraphicMarker === 'true') {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        style: {
          position: 'absolute',
          fontSize: this.props.sizePolice,
          fontFamily: this.props.police,
          fontWeight: 'bold',
          color: color,
          top: positionArrowY + heightArrow + positionLabelY,
          left: positionArrowX + heightArrow + positionLabelX
        }
      }, valueToDisplay);
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null);
  };
  /**
   * render
   */


  DrawArrow.prototype.render = function () {
    var coordinateSpace = this.props.coordinateSpace;
    var widthArrow = this.defineSizeHeight(this.props.sizeHeight.value || '');
    var heightArrow = this.defineSizeWidth(this.props.sizeWidth.value || '');
    var sizeArrow = widthArrow + heightArrow;
    var defineCenterX = this.defineCenterX(coordinateSpace);
    var defineCenterY = this.defineCenterY(coordinateSpace);
    var rotate = this.props.rotate + 'deg';
    var valueInputPositionArrowX = parseInt(this.props.positionShapeX, 10) || 0;
    var valueInputPositionArrowY = parseInt(this.props.positionShapeY, 10) || 0;
    var positionArrowX = this.definePositionArrowX(valueInputPositionArrowX, coordinateSpace, defineCenterX, widthArrow);
    var positionArrowY = this.definePositionArrowY(valueInputPositionArrowY, coordinateSpace, defineCenterY, sizeArrow);
    var positionLabelX = parseInt(this.props.positionLabelX, 10) || 0;
    var positionLabelY = (parseInt(this.props.positionLabelY, 10) || 0) * -1;
    var drawGraphicMarker = this.props.drawGraphicmarker.value || '';
    var color = this.props.color;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: this.props.idPoint
    }, this.defineLabel(color, positionLabelX, positionLabelY, positionArrowX, positionArrowY, drawGraphicMarker, heightArrow), this.drawArrow(widthArrow, heightArrow, rotate, positionArrowX, positionArrowY, color, drawGraphicMarker));
  };

  return DrawArrow;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DrawArrow);

/***/ }),

/***/ "./components/Draw/drawCircleCross.tsx":
/*!*********************************************!*\
  !*** ./components/Draw/drawCircleCross.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);



/**
 * to do
 */

var DrawCircleCross =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DrawCircleCross, _super);

  function DrawCircleCross(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {};
    return _this;
  }
  /**
   * to do
   * @param coordinateX
   * @param coordinateSpace
   */


  DrawCircleCross.prototype.defineLimitX = function (coordinateX, coordinateSpace) {
    var result = coordinateX;

    if (coordinateSpace.value === undefined) {
      if (coordinateX > 100) {
        result = 100;
      }

      if (coordinateX < -100) {
        result = -100;
      }
    } else {
      var xMin = parseInt(coordinateSpace.value.coords.xMin, 10);
      var xMax = parseInt(coordinateSpace.value.coords.xMax, 10);

      if (xMax < 0) {
        if (coordinateX < xMax) {
          result = xMax;
        } else if (coordinateX > xMin) {
          result = xMin;
        }
      } else {
        if (coordinateX > xMax) {
          result = xMax;
        } else if (coordinateX < xMin) {
          result = xMin;
        }
      }
    }

    return result;
  };
  /**
   * to do
   * @param coordinateY
   * @param coordinateSpace
   */


  DrawCircleCross.prototype.defineLimitY = function (coordinateY, coordinateSpace) {
    var result = coordinateY;

    if (coordinateSpace.value === undefined) {
      if (coordinateY > 100) {
        coordinateY = 100;
      }

      if (coordinateY < -100) {
        coordinateY = -100;
      }
    } else {
      var yMin = parseInt(coordinateSpace.value.coords.yMin, 10);
      var yMax = parseInt(coordinateSpace.value.coords.yMax, 10);

      if (yMax < 0) {
        if (coordinateY < yMax) {
          result = yMax;
        } else if (coordinateY > yMin) {
          result = yMin;
        }
      } else {
        if (coordinateY > yMax) {
          result = yMax;
        } else if (coordinateY < yMin) {
          result = yMin;
        }
      }
    }

    return result;
  };
  /**
   * to do
   * @param defineCenter
   * @param sizeGraphicMarkerPx
   * @param shapeGraphicMarker
   */


  DrawCircleCross.prototype.definePositionX = function (positionX, coordinateSpace, defineCenter, size, valueBorder, shape) {
    var x;

    if (coordinateSpace.value === undefined) {
      if (shape === 'circle') {
        x = this.defineLimitX(positionX, coordinateSpace) * (defineCenter / 100) + defineCenter - (size + valueBorder);
      } else {
        var widthToCenterCross = 0;

        if (size === 10) {
          widthToCenterCross = 3;
        } else if (size === 14) {
          widthToCenterCross = 5;
        } else if (size === 16) {
          widthToCenterCross = 5.5;
        }

        x = this.defineLimitX(positionX, coordinateSpace) * (defineCenter / 100) + defineCenter - widthToCenterCross;
      }
    } else {
      var xMin = parseInt(coordinateSpace.value.coords.xMin, 10);
      var xMax = parseInt(coordinateSpace.value.coords.xMax, 10);
      var xMid = (xMin + xMax) / 2;

      if (shape === 'circle') {
        x = this.defineLimitX(positionX + xMid, coordinateSpace) * (defineCenter / 100) + defineCenter - (size + valueBorder);
      } else {
        var widthToCenterCross = 0;

        if (size === 10) {
          widthToCenterCross = 3;
        } else if (size === 14) {
          widthToCenterCross = 5;
        } else if (size === 16) {
          widthToCenterCross = 5.5;
        }

        x = this.defineLimitX(positionX + xMid, coordinateSpace) * (defineCenter / 100) + defineCenter - widthToCenterCross;
      }
    }

    return x;
  };
  /**
   * to do
   * @param defineCenter
   * @param sizeGraphicMarkerPx
   * @param shapeGraphicMarker
   */


  DrawCircleCross.prototype.definePositionY = function (positionY, coordinateSpace, defineCenter, size, valueBorder, shapeGraphicMarker) {
    var y;

    if (coordinateSpace.value === undefined) {
      if (shapeGraphicMarker === 'circle') {
        y = defineCenter - this.defineLimitY(positionY, coordinateSpace) * (defineCenter / 100) - (size + valueBorder);
      } else {
        var heightToCenterCross = 0;

        if (size === 10) {
          heightToCenterCross = 7.5;
        }

        if (size === 14) {
          heightToCenterCross = 10.5;
        }

        if (size === 16) {
          heightToCenterCross = 12;
        }

        y = defineCenter - this.defineLimitY(positionY, coordinateSpace) * (defineCenter / 100) - heightToCenterCross;
      }
    } else {
      var yMin = parseInt(coordinateSpace.value.coords.yMin, 10);
      var yMax = parseInt(coordinateSpace.value.coords.yMax, 10);
      var yMid = (yMin + yMax) / 2;

      if (shapeGraphicMarker === 'circle') {
        y = defineCenter - this.defineLimitY(positionY + yMid, coordinateSpace) * (defineCenter / 100) - (size + valueBorder);
      } else {
        var heightToCenterCross = 0;

        if (size === 10) {
          heightToCenterCross = 7.5;
        }

        if (size === 14) {
          heightToCenterCross = 10.5;
        }

        if (size === 16) {
          heightToCenterCross = 12;
        }

        y = defineCenter - this.defineLimitY(positionY + yMid, coordinateSpace) * (defineCenter / 100) - heightToCenterCross;
      }
    }

    return y;
  };
  /**
   * to do
   * @param sizeGraphicMarker
   * @param shapeGraphicMarker
   */


  DrawCircleCross.prototype.defineSizeGraphicMarkerPx = function (size, shape) {
    if (size === 'small' && shape === 'circle') {
      return 4;
    }

    if (size === 'small' && shape === 'cross') {
      return 10;
    }

    if (size === 'medium' && shape === 'circle') {
      return 6;
    }

    if (size === 'medium' && shape === 'cross') {
      return 14;
    }

    if (size === 'large' && shape === 'circle') {
      return 8;
    }

    if (size === 'large' && shape === 'cross') {
      return 16;
    } else {
      return 0;
    }
  };
  /**
   * to do
   * @param positionX
   * @param positionY
   * @param color
   * @param sizeGraphicMarkerPx
   * @param shapeGraphicMarker
   */


  DrawCircleCross.prototype.defineShapeGraphicmarker = function (drawGraphicMarker, size, positionShapeX, positionShapeY, shape, color, valueBorder) {
    var valueToolTip = this.defineContentTooltip();

    if (drawGraphicMarker === 'true') {
      if (shape === 'circle') {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          content: valueToolTip
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            border: valueBorder + 'px solid ' + this.defineBorderColor(),
            backgroundColor: this.defineBackgroundColor(),
            borderRadius: '50px',
            padding: size + 'px',
            position: 'absolute',
            left: positionShapeX,
            top: positionShapeY
          },
          id: this.props.idPoint
        }));
      } else if (shape === 'cross') {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          content: valueToolTip
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          id: this.props.idPoint,
          style: {
            fontSize: size,
            fontWeight: 'bold',
            position: 'absolute',
            color: color,
            left: positionShapeX,
            top: positionShapeY
          }
        }, "X"));
      }
    }
  };

  DrawCircleCross.prototype.defineLabel = function (drawGraphicMarker, label, name, positionX, positionY, positionLabelX, positionLabelY, police, color) {
    var valueToDisplay = label;

    if (label === '') {
      valueToDisplay = name;
    }

    if (drawGraphicMarker === 'true') {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          fontSize: '12px',
          fontFamily: police,
          fontWeight: 'bold',
          color: this.props.textObject.colorText,
          position: 'absolute',
          top: positionY + positionLabelY + 10,
          left: positionX + positionLabelX + 10
        }
      }, valueToDisplay);
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
  };

  DrawCircleCross.prototype.defineContentTooltip = function () {
    var _this = this;

    var arrayPoints = this.props.options.arrayPoints;
    var arrayLinksIn = [];
    var arrayLinksOut = [];
    var arrayOrientedLinksIn = [];
    var arrayOrientedLinksOut = [];
    var refMainMetric = '';
    var valueMainMetric = '';
    arrayPoints.forEach(function (point) {
      if (point.name === _this.props.name) {
        arrayLinksIn = point.associateLinkIn;
        arrayLinksOut = point.associateLinkOut;
        arrayOrientedLinksIn = point.associateOrientedLinksIn;
        arrayOrientedLinksOut = point.associateOrientedLinksOut;
        refMainMetric = point.mainMetric.refId || '';
        valueMainMetric = point.valueMetric;
      }
    });
    var label = this.props.label !== '' ? this.props.label : this.props.name;
    var listAssociateLinks = [];
    listAssociateLinks.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      style: {
        fontSize: '12px',
        marginBottom: '0px'
      }
    }, label));
    listAssociateLinks.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      style: {
        fontSize: '10px',
        marginTop: '5px',
        marginBottom: '0px'
      }
    }, "Main Metric"));
    listAssociateLinks.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      style: {
        fontSize: '8px',
        marginBottom: '0px'
      }
    }, "+ Reference : ", refMainMetric));
    listAssociateLinks.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      style: {
        fontSize: '8px',
        marginBottom: '0px'
      }
    }, "+ Value : ", valueMainMetric + this.props.textObject.unityMesureElement));

    if (arrayLinksIn.length !== 0 || arrayOrientedLinksIn.length !== 0) {
      listAssociateLinks.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        style: {
          fontSize: '10px',
          marginTop: '5px',
          marginBottom: '0px'
        }
      }, "Associate Links In"));
    }

    if (arrayLinksIn.length !== 0) {
      arrayLinksIn.forEach(function (linkIn) {
        listAssociateLinks.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          style: {
            fontSize: '8px',
            marginBottom: '0px'
          }
        }, " + ", linkIn.name));
      });
    }

    if (arrayOrientedLinksIn.length !== 0) {
      arrayOrientedLinksIn.forEach(function (orientedLinkIn) {
        listAssociateLinks.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          style: {
            fontSize: '8px',
            marginBottom: '0px'
          }
        }, " + ", orientedLinkIn.name));
      });
    }

    if (arrayLinksOut.length !== 0 || arrayOrientedLinksOut.length !== 0) {
      listAssociateLinks.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        style: {
          fontSize: '10px',
          marginTop: '5px',
          marginBottom: '0px'
        }
      }, "Associate Links Out"));
    }

    if (arrayLinksOut.length !== 0) {
      arrayLinksOut.forEach(function (linkOut) {
        listAssociateLinks.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          style: {
            fontSize: '8px',
            marginBottom: '0px'
          }
        }, " + ", linkOut.name));
      });
    }

    if (arrayOrientedLinksOut.length !== 0) {
      arrayOrientedLinksOut.forEach(function (orientedLinkOut) {
        listAssociateLinks.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          style: {
            fontSize: '8px',
            marginBottom: '0px'
          }
        }, " + ", orientedLinkOut.name));
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, listAssociateLinks);
  };

  DrawCircleCross.prototype.defineBackgroundColor = function () {
    var _this = this;

    var colorBackground = this.props.color;
    var valueMainMetric = parseInt(this.props.valueMainMetric, 10);
    var index = 0;
    this.props.seuil.forEach(function (level) {
      var seuilMin = 0;

      if (level.seuilMin === '') {
        seuilMin = 0;
      } else {
        seuilMin = parseInt(level.seuilMin.substring(1), 10);
      }

      console.log(seuilMin);

      if (seuilMin === 0) {
        if (valueMainMetric >= seuilMin && valueMainMetric <= parseInt(level.seuilMax, 10)) {
          colorBackground = level.couleurFond;
        }
      } else if (_this.props.seuil.length === index + 1) {
        if (valueMainMetric > seuilMin) {
          colorBackground = level.couleurFond;
        }
      } else if (valueMainMetric > seuilMin && valueMainMetric <= parseInt(level.seuilMax, 10)) {
        colorBackground = level.couleurFond;
      }

      index++;
    });
    console.log(colorBackground);
    return colorBackground;
  };

  DrawCircleCross.prototype.defineBorderColor = function () {
    var _this = this;

    var colorBorder = this.props.color;
    var valueMainMetric = parseInt(this.props.valueMainMetric, 10);
    var index = 0;
    this.props.seuil.forEach(function (level) {
      var seuilMin = 0;

      if (level.seuilMin === '') {
        seuilMin = 0;
      } else {
        seuilMin = parseInt(level.seuilMin.substring(1), 10);
      }

      if (seuilMin === 0) {
        if (valueMainMetric >= seuilMin && valueMainMetric <= parseInt(level.seuilMax, 10)) {
          colorBorder = level.couleurContour;
        }
      } else if (_this.props.seuil.length === index + 1) {
        if (valueMainMetric > seuilMin) {
          colorBorder = level.couleurContour;
        }
      } else if (valueMainMetric > seuilMin && valueMainMetric <= parseInt(level.seuilMax, 10)) {
        colorBorder = level.couleurContour;
      }

      index++;
    });
    console.log(colorBorder);
    return colorBorder;
  };
  /**
   * render
   */


  DrawCircleCross.prototype.render = function () {
    var coordinateSpace = this.props.coordinateSpace;
    var heightPanel = this.props.height;
    var defineCenter = heightPanel / 2;
    var shape = this.props.shape.value || '';
    var size = this.defineSizeGraphicMarkerPx(this.props.size.value || '', shape);
    var valueInputPositionArrowX = parseInt(this.props.positionShapeX, 10) || 0;
    var valueInputPositionArrowY = parseInt(this.props.positionShapeY, 10) || 0;
    var valueBorder = 1;
    var positionShapeX = this.definePositionX(valueInputPositionArrowX, coordinateSpace, defineCenter, size, valueBorder, shape);
    var positionShapeY = this.definePositionY(valueInputPositionArrowY, coordinateSpace, defineCenter, size, valueBorder, shape);
    var label = this.props.label;
    var name = this.props.name;
    var color = this.props.color;
    var drawGraphicMarker = this.props.drawGraphicMarker.value || '';
    var positionLabelX = parseInt(this.props.positionLabelX, 10);
    var positionLabelY = parseInt(this.props.positionLabelY, 10) * -1;
    var police = this.props.police; //const textObject: string = this.props.textObject.colorText;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        cursor: 'pointer'
      }
    }, this.defineLabel(drawGraphicMarker, label, name, positionShapeX, positionShapeY, positionLabelX, positionLabelY, police, color), this.defineShapeGraphicmarker(drawGraphicMarker, size, positionShapeX, positionShapeY, shape, color, valueBorder));
  };

  return DrawCircleCross;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DrawCircleCross);

/***/ }),

/***/ "./components/Draw/drawLinkWithCoordinates.tsx":
/*!*****************************************************!*\
  !*** ./components/Draw/drawLinkWithCoordinates.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);




var DrawLinkWithCoordinates =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DrawLinkWithCoordinates, _super);

  function DrawLinkWithCoordinates(props) {
    var _this = _super.call(this, props) || this;

    _this.defineValueToolTip = function () {
      var infosLink = [];
      infosLink.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, _this.props.name));
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, infosLink);
    };

    _this.state = {};
    return _this;
  }

  DrawLinkWithCoordinates.prototype.synchroArrowX = function (positionX, defineCenter) {
    return positionX * (defineCenter / 100) + defineCenter;
  };

  DrawLinkWithCoordinates.prototype.synchroArrowY = function (positionY, defineCenter) {
    return defineCenter - positionY * (defineCenter / 100);
  }; // public drawPoint(xA: number, yA: number, xB: number, yB: number) {
  //     return (
  //         <div>
  //             <div style={{
  //                 border: '1px solid red',
  //                 backgroundColor: 'red',
  //                 borderRadius: '50px',
  //                 padding: '2px',
  //                 position: 'absolute',
  //                 top: yA,
  //                 left: xA,
  //             }}></div>
  //             <div style={{
  //                 border: '1px solid white',
  //                 backgroundColor: 'white',
  //                 borderRadius: '50px',
  //                 padding: '2px',
  //                 position: 'absolute',
  //                 top: yB,
  //                 left: xB,
  //             }}></div>
  //         </div>
  //     )
  // }


  DrawLinkWithCoordinates.prototype.drawLink = function (xA, yA, xB, yB, colorA, colorB, orientationLink, labelA, labelB, labelAPositionX, labelAPositionY, labelBPositionX, labelBPositionY) {
    var xC = (xA + xB) / 2;
    var yC = (yA + yB) / 2;
    var distanceAC = Math.sqrt((xA - xC) * (xA - xC) + (yA - yC) * (yA - yC));
    var angleRadianAC = Math.atan2(yA - yC, xA - xC);
    var angleDegreeAC = angleRadianAC * 180 / Math.PI;
    var xMidAC = (xA + xC) / 2;
    var yMidAC = (yA + yC) / 2;
    var xArrowAC = xMidAC - distanceAC / 2;
    var yArrowAC = yMidAC;
    var distanceBC = Math.sqrt((xB - xC) * (xB - xC) + (yB - yC) * (yB - yC));
    var angleRadianBC = Math.atan2(yB - yC, xB - xC);
    var angleDegreeBC = angleRadianBC * 180 / Math.PI;
    var xMidBC = (xB + xC) / 2;
    var yMidBC = (yB + yC) / 2;
    var xArrowBC = xMidBC - distanceBC / 2;
    var yArrowBC = yMidBC;
    var distanceAB = Math.sqrt((xA - xB) * (xA - xB) + (yA - yB) * (yA - yB));
    var angleRadianAB = Math.atan2(yA - yB, xA - xB);
    var angleDegreeAB = angleRadianAB * 180 / Math.PI;
    var xMidAB = (xA + xB) / 2;
    var yMidAB = (yA + yB) / 2;
    var xArrowAB = xMidAB - distanceAB / 2;
    var yArrowAB = yMidAB;
    var angleRadianBA = Math.atan2(yB - yA, xB - xA);
    var angleDegreeBA = angleRadianBA * 180 / Math.PI;
    var sizeArrowTriangle = 8;

    if (orientationLink === 'double') {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: 'arrow1',
        style: {
          display: 'flex',
          alignContent: 'stretch',
          position: 'absolute',
          top: yArrowAC - sizeArrowTriangle / 2,
          left: xArrowAC,
          transform: 'rotate(' + angleDegreeAC + 'deg)',
          width: distanceAC
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: 'arrowTriangle',
        style: {
          width: '0',
          height: '0',
          borderLeft: sizeArrowTriangle + 'px solid transparent',
          borderRight: sizeArrowTriangle + 'px solid transparent',
          borderBottom: sizeArrowTriangle + 'px solid ' + colorA,
          transform: 'rotate(270deg)'
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          border: '1px solid ' + colorA,
          backgroundColor: colorA,
          width: distanceAC
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          position: 'absolute',
          top: yMidAC + labelAPositionY,
          left: xMidAC + labelAPositionX,
          fontSize: distanceAC * (10 / 100),
          //border: '1px solid black',
          backgroundColor: 'white',
          color: 'black',
          padding: '0 5px'
        }
      }, labelA)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: 'arrow2',
        style: {
          display: 'flex',
          alignContent: 'stretch',
          position: 'absolute',
          top: yArrowBC - sizeArrowTriangle / 2,
          left: xArrowBC,
          transform: 'rotate(' + angleDegreeBC + 'deg)',
          width: distanceBC
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: 'arrowTriangle',
        style: {
          width: '0',
          height: '0',
          borderLeft: sizeArrowTriangle + 'px solid transparent',
          borderRight: sizeArrowTriangle + 'px solid transparent',
          borderBottom: sizeArrowTriangle + 'px solid ' + colorB,
          transform: 'rotate(270deg)'
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          border: '1px solid ' + colorB,
          backgroundColor: colorB,
          width: distanceBC
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          position: 'absolute',
          top: yMidBC + labelBPositionY,
          left: xMidBC + labelBPositionX,
          fontSize: distanceBC * (10 / 100),
          //border: '1px solid black',
          backgroundColor: 'white',
          color: 'black',
          padding: '0 5px'
        }
      }, labelB)));
    } else if (orientationLink === 'AB') {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: 'arrow1',
        style: {
          display: 'flex',
          position: 'absolute',
          top: yArrowAB - sizeArrowTriangle / 2,
          left: xArrowAB,
          transform: 'rotate(' + angleDegreeAB + 'deg)',
          width: distanceAB
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: 'arrowTriangle',
        style: {
          width: '0',
          height: '0',
          borderLeft: sizeArrowTriangle + 'px solid transparent',
          borderRight: sizeArrowTriangle + 'px solid transparent',
          borderBottom: sizeArrowTriangle + 'px solid ' + colorA,
          transform: 'rotate(270deg)'
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          border: '1px solid ' + colorA,
          backgroundColor: colorA,
          width: distanceAB
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          position: 'absolute',
          top: yMidAB + labelAPositionY,
          left: xMidAB + labelAPositionX,
          //border: '1px solid black',
          backgroundColor: 'white',
          fontSize: distanceAB * (8 / 100),
          color: 'black',
          padding: '0 5px',
          cursor: 'pointer'
        }
      }, labelA));
    } else if (orientationLink === 'BA') {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: 'arrow1',
        style: {
          display: 'flex',
          alignContent: 'stretch',
          position: 'absolute',
          top: yArrowAB - sizeArrowTriangle / 2,
          left: xArrowAB,
          transform: 'rotate(' + angleDegreeBA + 'deg)',
          width: distanceAB
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: 'arrowTriangle',
        style: {
          width: '0',
          height: '0',
          borderLeft: sizeArrowTriangle + 'px solid transparent',
          borderRight: sizeArrowTriangle + 'px solid transparent',
          borderBottom: sizeArrowTriangle + 'px solid ' + colorB,
          transform: 'rotate(270deg)'
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          border: '1px solid ' + colorB,
          backgroundColor: colorB,
          width: distanceAB
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          position: 'absolute',
          top: yMidAB + labelBPositionY,
          left: xMidAB + labelBPositionX,
          //border: '1px solid black',
          backgroundColor: 'white',
          color: 'black',
          fontSize: distanceAB * (8 / 100),
          padding: '0 5px'
        }
      }, labelB));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
    }
  };

  DrawLinkWithCoordinates.prototype.render = function () {
    var defineCenter = this.props.height / 2;
    var xA = this.synchroArrowX(parseInt(this.props.pointAPositionX), defineCenter);
    var yA = this.synchroArrowY(parseInt(this.props.pointAPositionY), defineCenter);
    var xB = this.synchroArrowX(parseInt(this.props.pointBPositionX), defineCenter);
    var yB = this.synchroArrowY(parseInt(this.props.pointBPositionY), defineCenter);
    var colorA = this.props.colorA;
    var colorB = this.props.colorB;
    var orientationLink = this.props.orientationLink;
    var labelA = this.props.labelA;
    var labelB = this.props.labelB;
    var labelAPositionX = parseInt(this.props.labelAPositionX);
    var labelAPositionY = parseInt(this.props.labelAPositionY) * -1;
    var labelBPositionX = parseInt(this.props.labelBPositionX);
    var labelBPositionY = parseInt(this.props.labelBPositionY) * -1;
    var valueToolTip = this.defineValueToolTip();
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      content: valueToolTip
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.drawLink(xA, yA, xB, yB, colorA, colorB, orientationLink, labelA, labelB, labelAPositionX, labelAPositionY, labelBPositionX, labelBPositionY)));
  };

  return DrawLinkWithCoordinates;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DrawLinkWithCoordinates);

/***/ }),

/***/ "./components/Draw/drawLinkWithPoints.tsx":
/*!************************************************!*\
  !*** ./components/Draw/drawLinkWithPoints.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);




var DrawLienWithPoints =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DrawLienWithPoints, _super);

  function DrawLienWithPoints(props) {
    var _this = _super.call(this, props) || this;

    _this.defineValueToolTip = function () {
      var infosLink = [];
      infosLink.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, _this.props.name));
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, infosLink);
    };

    _this.state = {};
    return _this;
  }

  DrawLienWithPoints.prototype.synchroArrowX = function (positionX, defineCenter) {
    return positionX * (defineCenter / 100) + defineCenter;
  };

  DrawLienWithPoints.prototype.synchroArrowY = function (positionY, defineCenter) {
    return defineCenter - positionY * (defineCenter / 100);
  };

  DrawLienWithPoints.prototype.defineXRegionOfPointIn = function () {
    var _a, _b, _c;

    var xRegion = 0;

    if (((_a = this.props.pointIn.value) === null || _a === void 0 ? void 0 : _a.coordinateSpace.value) !== undefined) {
      var xMin = parseInt(((_b = this.props.pointIn.value.coordinateSpace.value) === null || _b === void 0 ? void 0 : _b.coords.xMin) || '0', 10);
      var xMax = parseInt(((_c = this.props.pointIn.value.coordinateSpace.value) === null || _c === void 0 ? void 0 : _c.coords.xMax) || '0', 10);
      xRegion = (xMax + xMin) / 2;
    }

    return xRegion;
  };

  DrawLienWithPoints.prototype.defineYRegionOfPointIn = function () {
    var _a, _b, _c;

    var yRegion = 0;

    if (((_a = this.props.pointIn.value) === null || _a === void 0 ? void 0 : _a.coordinateSpace.value) !== undefined) {
      var yMin = parseInt(((_b = this.props.pointIn.value.coordinateSpace.value) === null || _b === void 0 ? void 0 : _b.coords.yMin) || '0', 10);
      var yMax = parseInt(((_c = this.props.pointIn.value.coordinateSpace.value) === null || _c === void 0 ? void 0 : _c.coords.yMax) || '0', 10);
      yRegion = (yMax + yMin) / 2;
    }

    return yRegion;
  };

  DrawLienWithPoints.prototype.defineXRegionOfPointOut = function () {
    var _a, _b, _c;

    var xRegion = 0;

    if (((_a = this.props.pointOut.value) === null || _a === void 0 ? void 0 : _a.coordinateSpace.value) !== undefined) {
      var xMin = parseInt(((_b = this.props.pointOut.value.coordinateSpace.value) === null || _b === void 0 ? void 0 : _b.coords.xMin) || '0', 10);
      var xMax = parseInt(((_c = this.props.pointOut.value.coordinateSpace.value) === null || _c === void 0 ? void 0 : _c.coords.xMax) || '0', 10);
      xRegion = (xMax + xMin) / 2;
    }

    return xRegion;
  };

  DrawLienWithPoints.prototype.defineYRegionOfPointOut = function () {
    var _a, _b, _c;

    var yRegion = 0;

    if (((_a = this.props.pointOut.value) === null || _a === void 0 ? void 0 : _a.coordinateSpace.value) !== undefined) {
      var yMin = parseInt(((_b = this.props.pointOut.value.coordinateSpace.value) === null || _b === void 0 ? void 0 : _b.coords.yMin) || '0', 10);
      var yMax = parseInt(((_c = this.props.pointOut.value.coordinateSpace.value) === null || _c === void 0 ? void 0 : _c.coords.yMax) || '0', 10);
      yRegion = (yMax + yMin) / 2;
    }

    return yRegion;
  };

  DrawLienWithPoints.prototype.drawLink = function (xA, xB, yA, yB, colorA, colorB, orientationLink, labelA, labelB, labelAPositionX, labelAPositionY, labelBPositionX, labelBPositionY) {
    var xC = (xA + xB) / 2;
    var yC = (yA + yB) / 2;
    var distanceAC = Math.sqrt((xA - xC) * (xA - xC) + (yA - yC) * (yA - yC));
    var angleRadianAC = Math.atan2(yA - yC, xA - xC);
    var angleDegreeAC = angleRadianAC * 180 / Math.PI;
    var xMidAC = (xA + xC) / 2;
    var yMidAC = (yA + yC) / 2;
    var xArrowAC = xMidAC - distanceAC / 2;
    var yArrowAC = yMidAC;
    var distanceBC = Math.sqrt((xB - xC) * (xB - xC) + (yB - yC) * (yB - yC));
    var angleRadianBC = Math.atan2(yB - yC, xB - xC);
    var angleDegreeBC = angleRadianBC * 180 / Math.PI;
    var xMidBC = (xB + xC) / 2;
    var yMidBC = (yB + yC) / 2;
    var xArrowBC = xMidBC - distanceBC / 2;
    var yArrowBC = yMidBC;
    var distanceAB = Math.sqrt((xA - xB) * (xA - xB) + (yA - yB) * (yA - yB));
    var angleRadianAB = Math.atan2(yA - yB, xA - xB);
    var angleDegreeAB = angleRadianAB * 180 / Math.PI;
    var xMidAB = (xA + xB) / 2;
    var yMidAB = (yA + yB) / 2;
    var xArrowAB = xMidAB - distanceAB / 2;
    var yArrowAB = yMidAB;
    var angleRadianBA = Math.atan2(yB - yA, xB - xA);
    var angleDegreeBA = angleRadianBA * 180 / Math.PI;
    var sizeArrowTriangle = 8;

    if (orientationLink === 'double') {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: 'arrow1',
        style: {
          display: 'flex',
          alignContent: 'stretch',
          position: 'absolute',
          top: yArrowAC - sizeArrowTriangle / 2,
          left: xArrowAC,
          transform: 'rotate(' + angleDegreeAC + 'deg)',
          width: distanceAC
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          width: '0',
          height: '0',
          borderLeft: sizeArrowTriangle + 'px solid transparent',
          borderRight: sizeArrowTriangle + 'px solid transparent',
          borderBottom: sizeArrowTriangle + 'px solid ' + colorA,
          transform: 'rotate(270deg)'
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          border: '1px solid ' + colorA,
          backgroundColor: colorA,
          width: distanceAC
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          position: 'absolute',
          top: yMidAC + labelAPositionY,
          left: xMidAC + labelAPositionX,
          fontSize: distanceAC * (10 / 100),
          backgroundColor: 'white',
          color: 'black',
          padding: '0 5px'
        }
      }, labelA)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: 'arrow2',
        style: {
          display: 'flex',
          alignContent: 'stretch',
          position: 'absolute',
          top: yArrowBC - sizeArrowTriangle / 2,
          left: xArrowBC,
          transform: 'rotate(' + angleDegreeBC + 'deg)',
          width: distanceBC
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          width: '0',
          height: '0',
          borderLeft: sizeArrowTriangle + 'px solid transparent',
          borderRight: sizeArrowTriangle + 'px solid transparent',
          borderBottom: sizeArrowTriangle + 'px solid ' + colorB,
          transform: 'rotate(270deg)'
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          border: '1px solid ' + colorB,
          backgroundColor: colorB,
          width: distanceBC
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          position: 'absolute',
          top: yMidBC + labelBPositionY,
          left: xMidBC + labelBPositionX,
          fontSize: distanceBC * (10 / 100),
          backgroundColor: 'white',
          color: 'black',
          padding: '0 5px'
        }
      }, labelB)));
    } else if (orientationLink === 'AB') {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: 'arrow1',
        style: {
          display: 'flex',
          alignContent: 'stretch',
          position: 'absolute',
          top: yArrowAB - sizeArrowTriangle / 2,
          left: xArrowAB,
          transform: 'rotate(' + angleDegreeAB + 'deg)',
          width: distanceAB
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          width: '0',
          height: '0',
          borderLeft: sizeArrowTriangle + 'px solid transparent',
          borderRight: sizeArrowTriangle + 'px solid transparent',
          borderBottom: sizeArrowTriangle + 'px solid ' + colorA,
          transform: 'rotate(270deg)'
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          border: '1px solid ' + colorA,
          backgroundColor: colorA,
          width: distanceAB
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          position: 'absolute',
          top: yMidAB + labelAPositionY,
          left: xMidAB + labelAPositionX,
          fontSize: distanceAB * (8 / 100),
          backgroundColor: 'white',
          color: 'black',
          padding: '0 5px'
        }
      }, labelA));
    } else if (orientationLink === 'BA') {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: 'arrow1',
        style: {
          display: 'flex',
          alignContent: 'stretch',
          position: 'absolute',
          top: yArrowAB - sizeArrowTriangle / 2,
          left: xArrowAB,
          transform: 'rotate(' + angleDegreeBA + 'deg)',
          width: distanceAB
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          width: '0',
          height: '0',
          borderLeft: sizeArrowTriangle + 'px solid transparent',
          borderRight: sizeArrowTriangle + 'px solid transparent',
          borderBottom: sizeArrowTriangle + 'px solid ' + colorB,
          transform: 'rotate(270deg)'
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          border: '1px solid ' + colorB,
          backgroundColor: colorB,
          width: distanceAB
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          position: 'absolute',
          top: yMidAB + labelBPositionY,
          left: xMidAB + labelBPositionX,
          fontSize: distanceAB * (8 / 100),
          backgroundColor: 'white',
          color: 'black',
          padding: '0 5px'
        }
      }, labelB));
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
  };

  DrawLienWithPoints.prototype.render = function () {
    var _a, _b, _c, _d, _e, _f;

    var defineCenter = this.props.height / 2;
    var xA = this.synchroArrowX(parseInt(((_a = this.props.pointIn.value) === null || _a === void 0 ? void 0 : _a.positionShapeX) || '0', 10) + this.defineXRegionOfPointIn(), defineCenter);
    var yA = this.synchroArrowY(parseInt(((_b = this.props.pointIn.value) === null || _b === void 0 ? void 0 : _b.positionShapeY) || '0', 10) + this.defineYRegionOfPointIn(), defineCenter);
    var xB = this.synchroArrowX(parseInt(((_c = this.props.pointOut.value) === null || _c === void 0 ? void 0 : _c.positionShapeX) || '0', 10) + this.defineXRegionOfPointOut(), defineCenter);
    var yB = this.synchroArrowY(parseInt(((_d = this.props.pointOut.value) === null || _d === void 0 ? void 0 : _d.positionShapeY) || '0', 10) + this.defineYRegionOfPointOut(), defineCenter);
    var colorA = ((_e = this.props.pointIn.value) === null || _e === void 0 ? void 0 : _e.color) || 'white';
    var colorB = ((_f = this.props.pointOut.value) === null || _f === void 0 ? void 0 : _f.color) || 'white';
    var orientationLink = this.props.orientationLink;
    var labelA = this.props.labelA;
    var labelB = this.props.labelB;
    var labelAPositionX = parseInt(this.props.labelAPositionX, 10);
    var labelAPositionY = parseInt(this.props.labelAPositionY, 10) * -1;
    var labelBPositionX = parseInt(this.props.labelBPositionX, 10);
    var labelBPositionY = parseInt(this.props.labelBPositionY, 10) * -1;
    var valueToolTip = this.defineValueToolTip();
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      content: valueToolTip
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.drawLink(xA, xB, yA, yB, colorA, colorB, orientationLink, labelA, labelB, labelAPositionX, labelAPositionY, labelBPositionX, labelBPositionY)));
  };

  return DrawLienWithPoints;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DrawLienWithPoints);

/***/ }),

/***/ "./components/Draw/drawLinkWithRegions.tsx":
/*!*************************************************!*\
  !*** ./components/Draw/drawLinkWithRegions.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);




var DrawLienWithRegions =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DrawLienWithRegions, _super);

  function DrawLienWithRegions(props) {
    var _this = _super.call(this, props) || this;

    _this.defineValueToolTip = function () {
      var infosLink = [];
      infosLink.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, _this.props.name));
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, infosLink);
    };

    _this.state = {};
    return _this;
  }

  DrawLienWithRegions.prototype.synchroX = function (positionX) {
    var defineCenter = this.props.height / 2;
    return positionX * (defineCenter / 100) + defineCenter;
  };

  DrawLienWithRegions.prototype.synchroY = function (positionY) {
    var defineCenter = this.props.height / 2;
    return defineCenter - positionY * (defineCenter / 100);
  };

  DrawLienWithRegions.prototype.drawLink = function (xA, yA, xB, yB, colorA, colorB, orientationLink, labelA, labelB, diagonalRegionIn, diagonalRegionOut, labelAPositionX, labelAPositionY, labelBPositionX, labelBPositionY) {
    var xC = (xA + xB) / 2;
    var yC = (yA + yB) / 2;
    var distanceAC = Math.sqrt((xA - xC) * (xA - xC) + (yA - yC) * (yA - yC));
    var angleRadianAC = Math.atan2(yA - yC, xA - xC);
    var angleDegreeAC = angleRadianAC * 180 / Math.PI;
    var xMidAC = (xA + xC) / 2;
    var yMidAC = (yA + yC) / 2;
    var xArrowAC = xMidAC - distanceAC / 2;
    var yArrowAC = yMidAC;
    var distanceBC = Math.sqrt((xB - xC) * (xB - xC) + (yB - yC) * (yB - yC));
    var angleRadianBC = Math.atan2(yB - yC, xB - xC);
    var angleDegreeBC = angleRadianBC * 180 / Math.PI;
    var xMidBC = (xB + xC) / 2;
    var yMidBC = (yB + yC) / 2;
    var xArrowBC = xMidBC - distanceBC / 2;
    var yArrowBC = yMidBC;
    var distanceAB = Math.sqrt((xA - xB) * (xA - xB) + (yA - yB) * (yA - yB));
    var angleRadianAB = Math.atan2(yA - yB, xA - xB);
    var angleDegreeAB = angleRadianAB * 180 / Math.PI;
    var xMidAB = (xA + xB) / 2;
    var yMidAB = (yA + yB) / 2;
    var xArrowAB = xMidAB - distanceAB / 2;
    var yArrowAB = yMidAB;
    var distanceBA = Math.sqrt((xA - xB) * (xA - xB) + (yA - yB) * (yA - yB));
    var angleRadianBA = Math.atan2(yB - yA, xB - xA);
    var angleDegreeBA = angleRadianBA * 180 / Math.PI;
    var xMidBA = (xA + xB) / 2;
    var yMidBA = (yA + yB) / 2;
    var xArrowBA = xMidBA - distanceBA / 2;
    var yArrowBA = yMidBA;
    var sizeArrowTriangle = 8;

    if (orientationLink === 'double') {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: 'arrow1',
        style: {
          display: 'flex',
          alignContent: 'stretch',
          position: 'absolute',
          top: yArrowAC - sizeArrowTriangle / 2,
          left: xArrowAC,
          transform: 'rotate(' + angleDegreeAC + 'deg)',
          width: distanceAC
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          width: '0',
          height: '0',
          borderLeft: sizeArrowTriangle + 'px solid transparent',
          borderRight: sizeArrowTriangle + 'px solid transparent',
          borderBottom: sizeArrowTriangle + 'px solid ' + colorA,
          transform: 'rotate(270deg)'
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          border: '1px solid ' + colorA,
          backgroundColor: colorA,
          width: distanceAC
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          position: 'absolute',
          top: yMidAC + labelAPositionY,
          left: xMidAC + labelAPositionX,
          fontSize: distanceAC * (10 / 100),
          backgroundColor: 'white',
          color: 'black',
          padding: '0 5px'
        }
      }, labelA)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: 'arrow2',
        style: {
          display: 'flex',
          alignContent: 'stretch',
          position: 'absolute',
          top: yArrowBC - sizeArrowTriangle / 2,
          left: xArrowBC,
          transform: 'rotate(' + angleDegreeBC + 'deg)',
          width: distanceBC
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          width: '0',
          height: '0',
          borderLeft: sizeArrowTriangle + 'px solid transparent',
          borderRight: sizeArrowTriangle + 'px solid transparent',
          borderBottom: sizeArrowTriangle + 'px solid ' + colorB,
          transform: 'rotate(270deg)'
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          border: '1px solid ' + colorB,
          backgroundColor: colorB,
          width: distanceBC
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          position: 'absolute',
          top: yMidBC + labelBPositionY,
          left: xMidBC + labelBPositionX,
          fontSize: distanceBC * (10 / 100),
          backgroundColor: 'white',
          color: 'black',
          padding: '0 5px'
        }
      }, labelB)));
    } else if (orientationLink === 'AB') {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: 'arrow1',
        style: {
          display: 'flex',
          alignContent: 'stretch',
          position: 'absolute',
          top: yArrowAB - sizeArrowTriangle / 2,
          left: xArrowAB,
          transform: 'rotate(' + angleDegreeAB + 'deg)',
          width: distanceAB
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          width: '0',
          height: '0',
          borderLeft: sizeArrowTriangle + 'px solid transparent',
          borderRight: sizeArrowTriangle + 'px solid transparent',
          borderBottom: sizeArrowTriangle + 'px solid ' + colorA,
          transform: 'rotate(270deg)'
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          border: '1px solid ' + colorA,
          backgroundColor: colorA,
          width: distanceAB
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          position: 'absolute',
          top: yMidAB + labelAPositionY,
          left: xMidAB + labelAPositionX,
          fontSize: distanceAB * (8 / 100),
          backgroundColor: 'white',
          color: 'black',
          padding: '0 5px'
        }
      }, labelA));
    } else if (orientationLink === 'BA') {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: 'arrow1',
        style: {
          display: 'flex',
          alignContent: 'stretch',
          position: 'absolute',
          top: yArrowBA - sizeArrowTriangle / 2,
          left: xArrowBA,
          transform: 'rotate(' + angleDegreeBA + 'deg)',
          width: distanceBA
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          width: '0',
          height: '0',
          borderLeft: sizeArrowTriangle + 'px solid transparent',
          borderRight: sizeArrowTriangle + 'px solid transparent',
          borderBottom: sizeArrowTriangle + 'px solid ' + colorB,
          transform: 'rotate(270deg)'
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          border: '1px solid ' + colorB,
          backgroundColor: colorB,
          width: distanceBA
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          position: 'absolute',
          top: yMidBA + labelBPositionY,
          left: xMidBA + labelBPositionX,
          fontSize: distanceBA * (8 / 100),
          backgroundColor: 'white',
          color: 'black',
          padding: '0 5px'
        }
      }, labelB));
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
  };

  DrawLienWithRegions.prototype.defineDiagonal = function (xMin, xMax, yMin, yMax) {
    var sideA = xMax - xMin < 0 ? xMin - xMax : xMax - xMin;
    var sideB = yMax - yMin < 0 ? yMin - yMax : yMax - yMin;
    var diagonal = 0;

    if (yMax - yMin === xMax - xMin) {
      // square
      diagonal = sideA * Math.sqrt(2);
    } else {
      // rectangle
      diagonal = Math.sqrt(sideA * sideA + sideB * sideB);
    }

    return diagonal;
  };

  DrawLienWithRegions.prototype.render = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h;

    var colorA = this.props.colorA;
    var colorB = this.props.colorB;
    var xMinRegionIn = parseInt(((_a = this.props.regionIn.value) === null || _a === void 0 ? void 0 : _a.coords.xMin) || '0', 10);
    var xMaxRegionIn = parseInt(((_b = this.props.regionIn.value) === null || _b === void 0 ? void 0 : _b.coords.xMax) || '0', 10);
    var xMinRegionOut = parseInt(((_c = this.props.regionOut.value) === null || _c === void 0 ? void 0 : _c.coords.xMin) || '0', 10);
    var xMaxRegionOut = parseInt(((_d = this.props.regionOut.value) === null || _d === void 0 ? void 0 : _d.coords.xMax) || '0', 10);
    var yMinRegionIn = parseInt(((_e = this.props.regionIn.value) === null || _e === void 0 ? void 0 : _e.coords.yMin) || '0', 10);
    var yMaxRegionIn = parseInt(((_f = this.props.regionIn.value) === null || _f === void 0 ? void 0 : _f.coords.yMax) || '0', 10);
    var yMinRegionOut = parseInt(((_g = this.props.regionOut.value) === null || _g === void 0 ? void 0 : _g.coords.yMin) || '0', 10);
    var yMaxRegionOut = parseInt(((_h = this.props.regionOut.value) === null || _h === void 0 ? void 0 : _h.coords.yMax) || '0', 10);
    var xA = this.synchroX((xMaxRegionIn + xMinRegionIn) / 2);
    var yA = this.synchroY((yMaxRegionIn + yMinRegionIn) / 2);
    var xB = this.synchroX((xMaxRegionOut + xMinRegionOut) / 2);
    var yB = this.synchroY((yMaxRegionOut + yMinRegionOut) / 2);
    var orientationLink = this.props.orientationLink;
    var labelA = this.props.labelA;
    var labelB = this.props.labelB;
    var diagonalRegionIn = this.defineDiagonal(xMinRegionIn, xMaxRegionIn, yMinRegionIn, yMaxRegionIn);
    var diagonalRegionOut = this.defineDiagonal(xMinRegionOut, xMaxRegionOut, yMinRegionOut, yMaxRegionOut);
    var labelAPositionX = parseInt(this.props.labelAPositionX, 10);
    var labelAPositionY = parseInt(this.props.labelAPositionY, 10) * -1;
    var labelBPositionX = parseInt(this.props.labelBPositionX, 10);
    var labelBPositionY = parseInt(this.props.labelBPositionY, 10) * -1;
    var valueToolTip = this.defineValueToolTip();
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      content: valueToolTip
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.drawLink(xA, yA, xB, yB, colorA, colorB, orientationLink, labelA, labelB, diagonalRegionIn, diagonalRegionOut, labelAPositionX, labelAPositionY, labelBPositionX, labelBPositionY)));
  };

  return DrawLienWithRegions;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DrawLienWithRegions);

/***/ }),

/***/ "./components/Draw/drawOrientedLink.tsx":
/*!**********************************************!*\
  !*** ./components/Draw/drawOrientedLink.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);




var DrawOrientedLink =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DrawOrientedLink, _super);

  function DrawOrientedLink(props) {
    var _this = _super.call(this, props) || this; // public defineColor(associatePoint: SelectableValue<PointClass>, type: string) {
    // 	let color: string = '';
    // 	if (type === 'in') {
    // 		if (associatePoint.value === undefined) {
    // 			color = this.props.colorA;
    // 		} else {
    // 			color = associatePoint.value.color;
    // 		}
    // 	} else if (type === 'out') {
    // 		if (associatePoint.value === undefined) {
    // 			color = this.props.colorB;
    // 		} else {
    // 			color = associatePoint.value.color;
    // 		}
    // 	}
    // 	return color;
    // }


    _this.defineValueTooptip = function (typeLink) {
      var infosOrientedLink = [];
      var valueMainMetricA = _this.props.valueMainMetricA;
      var valueMainMetricB = _this.props.valueMainMetricB;
      var refMainMetric = _this.props.refMainMetric;
      infosOrientedLink.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        style: {
          fontSize: '12px',
          marginBottom: '0px'
        }
      }, _this.props.name));
      infosOrientedLink.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        style: {
          fontSize: '10px',
          marginTop: '5px',
          marginBottom: '0px'
        }
      }, "Main Metric"));

      if (typeLink === 'bidirectional') {
        infosOrientedLink.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          style: {
            fontSize: '8px',
            marginBottom: '0px',
            marginTop: '5px'
          }
        }, "+ Link A : ", refMainMetric));
        infosOrientedLink.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          style: {
            fontSize: '8px',
            marginBottom: '0px'
          }
        }, "\t- Reference A : ", refMainMetric));
        infosOrientedLink.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          style: {
            fontSize: '8px',
            marginBottom: '0px'
          }
        }, "\t- Value A : ", valueMainMetricA));
        infosOrientedLink.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          style: {
            fontSize: '8px',
            marginBottom: '0px',
            marginTop: '5px'
          }
        }, "+ Link B : ", refMainMetric));
        infosOrientedLink.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          style: {
            fontSize: '8px',
            marginBottom: '0px'
          }
        }, "\t- Reference B : ", refMainMetric));
        infosOrientedLink.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          style: {
            fontSize: '8px',
            marginBottom: '0px'
          }
        }, "\t- Value B : ", valueMainMetricB));
      } else if (typeLink === 'monodirectional') {
        infosOrientedLink.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          style: {
            fontSize: '8px',
            marginBottom: '0px'
          }
        }, "\t+ Reference : ", refMainMetric));
        infosOrientedLink.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          style: {
            fontSize: '8px',
            marginBottom: '0px'
          }
        }, "\t+ Value : ", valueMainMetricA));
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, infosOrientedLink);
    };

    _this.state = {};
    return _this;
  }

  DrawOrientedLink.prototype.synchroArrowX = function (positionX, defineCenter) {
    //const synchroSizePanel: number = (this.props.sidePanel - 200) / 2;
    // if (positionX > 0) {
    // 	return Math.round(positionX + defineCenter + 50);
    // } else if (positionX < 0) {
    // 	return Math.round(positionX + defineCenter - 50);
    // } else {
    // 	return Math.round(positionX + defineCenter);
    // }
    //((event.nativeEvent.offsetX) - (this.props.height / 2)) * (100 / this.props.height)) * 2
    //console.log((positionX * (this.props.sidePanel / 100)) + defineCenter)
    //console.log(positionX)
    //console.log('drawX : ' + (positionX * (this.props.sidePanel / 200)) + defineCenter);
    return positionX * (this.props.sidePanel / 200) + defineCenter;
  };

  DrawOrientedLink.prototype.synchroArrowY = function (positionY, defineCenter) {
    //const synchroSizePanel: number = (this.props.sidePanel - 200) / 2;
    // if (positionY > 0) {
    // 	return Math.round(defineCenter - positionY + 50);
    // } else if (positionY < 0) {
    // 	return Math.round(defineCenter - positionY - 50);
    // } else {
    // 	return Math.round(defineCenter - positionY);
    // }
    // console.log(positionY)
    // console.log(defineCenter - positionY)
    //return defineCenter - (positionY * (defineCenter / 100));
    //console.log(positionY)
    //console.log('drawY : ' + (defineCenter - (positionY * (this.props.sidePanel / 200))));
    return defineCenter - positionY * (this.props.sidePanel / 200);
  }; // public drawPoint(xA: number, yA: number, xB: number, yB: number) {
  //     return (
  //         <div>
  //             <div style={{
  //                 border: '1px solid red',
  //                 backgroundColor: 'red',
  //                 borderRadius: '50px',
  //                 padding: '2px',
  //                 position: 'absolute',
  //                 top: yA,
  //                 left: xA,
  //             }}></div>
  //             <div style={{
  //                 border: '1px solid white',
  //                 backgroundColor: 'white',
  //                 borderRadius: '50px',
  //                 padding: '2px',
  //                 position: 'absolute',
  //                 top: yB,
  //                 left: xB,
  //             }}></div>
  //         </div>
  //     )
  // }
  // public defineMarginForLinkNotDouble(angle: number, margin: number): string {
  // 	let styleMargin: string = '0 0 0 0';
  // 	console.log(angle)
  // 	if (angle === 0) {
  // 		styleMargin = '0 0 0 ' + (margin / 2) + 'px';
  // 	} else if (angle === 90) {
  // 		styleMargin = (margin / 4) + 'px 0 0 ' + (margin / 4) + 'px';
  // 	} else if (angle === 180) {
  // 		styleMargin = '0 0 0 0';
  // 	} else if (angle === -90) {
  // 		styleMargin = '0 0 ' + margin + 'px 0';
  // 	}
  // 	return styleMargin;
  // }


  DrawOrientedLink.prototype.drawLink = function (xA, yA, xB, yB, colorA, colorB, orientationLink) {
    var xC = (xA + xB) / 2;
    var yC = (yA + yB) / 2;
    var distanceAC = Math.sqrt((xA - xC) * (xA - xC) + (yA - yC) * (yA - yC));
    var angleRadianAC = Math.atan2(yA - yC, xA - xC);
    var angleDegreeAC = angleRadianAC * 180 / Math.PI;
    var xMidAC = (xA + xC) / 2;
    var yMidAC = (yA + yC) / 2;
    var xArrowAC = xMidAC - distanceAC / 2;
    var yArrowAC = yMidAC;
    var distanceBC = Math.sqrt((xB - xC) * (xB - xC) + (yB - yC) * (yB - yC));
    var angleRadianBC = Math.atan2(yB - yC, xB - xC);
    var angleDegreeBC = angleRadianBC * 180 / Math.PI;
    var xMidBC = (xB + xC) / 2;
    var yMidBC = (yB + yC) / 2;
    var xArrowBC = xMidBC - distanceBC / 2;
    var yArrowBC = yMidBC;
    var distanceAB = Math.sqrt((xA - xB) * (xA - xB) + (yA - yB) * (yA - yB));
    var angleRadianAB = Math.atan2(yA - yB, xA - xB);
    var angleDegreeAB = angleRadianAB * 180 / Math.PI;
    var xMidAB = (xA + xB) / 2;
    var yMidAB = (yA + yB) / 2;
    var xArrowAB = xMidAB - distanceAB / 2;
    var yArrowAB = yMidAB; //const angleRadianBA: number = Math.atan2(yB - yA, xB - xA);
    //const angleDegreeBA: number = (angleRadianBA * 180) / Math.PI;

    var sizeArrowTriangle = 8;
    var valueTooltipMonodirectional = this.defineValueTooptip('monodirectional');
    var valueTooltipBidirectional = this.defineValueTooptip('bidirectional');

    if (orientationLink === 'double') {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
        content: valueTooltipBidirectional
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: 'link'
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: 'linkA'
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: 'arrow1',
        style: {
          display: 'flex',
          alignContent: 'stretch',
          position: 'absolute',
          top: yArrowAC - sizeArrowTriangle / 2,
          left: xArrowAC,
          transform: 'rotate(' + angleDegreeAC + 'deg)',
          width: distanceAC
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: 'arrowTriangle',
        style: {
          width: '0',
          height: '0',
          borderLeft: sizeArrowTriangle + 'px solid transparent',
          borderRight: sizeArrowTriangle + 'px solid transparent',
          borderBottom: sizeArrowTriangle + 'px solid ' + this.defineBorderColor(),
          transform: 'rotate(270deg)'
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          border: '1px solid ' + this.defineBorderColor(),
          backgroundColor: this.defineBackgroundColor(),
          width: distanceAC
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          position: 'absolute',
          top: yMidAC,
          left: xMidAC,
          fontSize: distanceAC * (8 / 100),
          //border: '1px solid black',
          backgroundColor: 'white',
          color: 'black',
          padding: '0 5px'
        }
      }, this.props.valueMainMetricA)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: 'linkB'
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: 'arrow2',
        style: {
          display: 'flex',
          alignContent: 'stretch',
          position: 'absolute',
          top: yArrowBC - sizeArrowTriangle / 2,
          left: xArrowBC,
          transform: 'rotate(' + angleDegreeBC + 'deg)',
          width: distanceBC
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: 'arrowTriangle',
        style: {
          width: '0',
          height: '0',
          borderLeft: sizeArrowTriangle + 'px solid transparent',
          borderRight: sizeArrowTriangle + 'px solid transparent',
          borderBottom: sizeArrowTriangle + 'px solid ' + this.defineBorderColor(),
          transform: 'rotate(270deg)'
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          border: '1px solid ' + this.defineBorderColor(),
          backgroundColor: this.defineBackgroundColor(),
          width: distanceBC
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          position: 'absolute',
          top: yMidBC,
          left: xMidBC,
          fontSize: distanceBC * (8 / 100),
          //border: '1px solid black',
          backgroundColor: 'white',
          color: 'black',
          padding: '0 5px'
        }
      }, this.props.valueMainMetricB))));
    } else if (orientationLink === 'AB') {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
        content: valueTooltipMonodirectional
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: 'link'
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: 'arrow1',
        style: {
          display: 'flex',
          position: 'absolute',
          top: yArrowAB - sizeArrowTriangle / 2,
          left: xArrowAB,
          transform: 'rotate(' + angleDegreeAB + 'deg)',
          width: distanceAB
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: 'arrowTriangle',
        style: {
          width: '0',
          height: '0',
          borderLeft: sizeArrowTriangle + 'px solid transparent',
          borderRight: sizeArrowTriangle + 'px solid transparent',
          borderBottom: sizeArrowTriangle + 'px solid ' + this.defineBorderColor(),
          transform: 'rotate(270deg)'
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          border: '1px solid ' + this.defineBorderColor(),
          backgroundColor: this.defineBackgroundColor(),
          width: distanceAB
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          position: 'absolute',
          top: yMidAB,
          left: xMidAB,
          //border: '1px solid black',
          backgroundColor: 'white',
          fontSize: distanceAB * (4 / 100),
          color: 'black',
          padding: '0 5px',
          cursor: 'pointer'
        }
      }, this.props.valueMainMetricA)));
    } // else if (orientationLink === 'BA') {
    // 	return (
    // 		<div id='link'>
    // 			<div id='arrow1' style={{
    // 				display: 'flex',
    // 				alignContent: 'stretch',
    // 				position: 'absolute',
    // 				top: yArrowAB - (sizeArrowTriangle / 2),
    // 				left: xArrowAB,
    // 				transform: 'rotate(' + angleDegreeBA + 'deg)',
    // 				width: distanceAB,
    // 			}}>
    // 				<div className='arrowTriangle' style={{
    // 					width: '0',
    // 					height: '0',
    // 					borderLeft: sizeArrowTriangle + 'px solid transparent',
    // 					borderRight: sizeArrowTriangle + 'px solid transparent',
    // 					borderBottom: sizeArrowTriangle + 'px solid ' + colorB,
    // 					transform: 'rotate(270deg)',
    // 				}}></div>
    // 				<div style={{
    // 					border: '1px solid ' + colorB,
    // 					backgroundColor: colorB,
    // 					width: distanceAB,
    // 				}}></div>
    // 			</div>
    // 			<div style={{
    // 				position: 'absolute',
    // 				top: yMidAB + labelBPositionY,
    // 				left: xMidAB + labelBPositionX,
    // 				//border: '1px solid black',
    // 				backgroundColor: 'white',
    // 				color: 'black',
    // 				fontSize: distanceAB * (4 / 100),
    // 				padding: '0 5px',
    // 			}}>
    // 				{labelB}
    // 			</div>
    // 		</div>
    // 	)
    // } 
    else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
      }
  };

  DrawOrientedLink.prototype.defineBackgroundColor = function () {
    var _this = this;

    var colorBackground = this.props.colorA;
    var valueMainMetric = parseInt(this.props.valueMainMetricA, 10);
    var index = 0;
    this.props.seuil.forEach(function (level) {
      var seuilMin = 0;

      if (level.seuilMin === '') {
        seuilMin = 0;
      } else {
        seuilMin = parseInt(level.seuilMin.substring(1), 10);
      }

      console.log(seuilMin);

      if (seuilMin === 0) {
        if (valueMainMetric >= seuilMin && valueMainMetric <= parseInt(level.seuilMax, 10)) {
          colorBackground = level.couleurFond;
        }
      } else if (_this.props.seuil.length === index + 1) {
        if (valueMainMetric > seuilMin) {
          colorBackground = level.couleurFond;
        }
      } else if (valueMainMetric > seuilMin && valueMainMetric <= parseInt(level.seuilMax, 10)) {
        colorBackground = level.couleurFond;
      }

      index++;
    });
    return colorBackground;
  };

  DrawOrientedLink.prototype.defineBorderColor = function () {
    var _this = this;

    var colorBorder = this.props.colorA;
    var valueMainMetric = parseInt(this.props.valueMainMetricA, 10);
    var index = 0;
    this.props.seuil.forEach(function (level) {
      var seuilMin = 0;

      if (level.seuilMin === '') {
        seuilMin = 0;
      } else {
        seuilMin = parseInt(level.seuilMin.substring(1), 10);
      }

      if (seuilMin === 0) {
        if (valueMainMetric >= seuilMin && valueMainMetric <= parseInt(level.seuilMax, 10)) {
          colorBorder = level.couleurContour;
        }
      } else if (_this.props.seuil.length === index + 1) {
        if (valueMainMetric > seuilMin) {
          colorBorder = level.couleurContour;
        }
      } else if (valueMainMetric > seuilMin && valueMainMetric <= parseInt(level.seuilMax, 10)) {
        colorBorder = level.couleurContour;
      }

      index++;
    });
    return colorBorder;
  };

  DrawOrientedLink.prototype.defineSideRegion = function (xMin, xMax, yMin, yMax) {
    var result = (xMax - xMin) * (this.props.sidePanel / 100) / 2;

    if (result < 0) {
      result = result * -1;
    }

    return result;
  }; // public defineDiagonal(xMin: number, xMax: number, yMin: number, yMax: number): number {
  // 	const sideA: number = xMax - xMin < 0 ? xMin - xMax : xMax - xMin;
  // 	const sideB: number = yMax - yMin < 0 ? yMin - yMax : yMax - yMin;
  // 	let diagonal: number = 0;
  // 	if (yMax - yMin === xMax - xMin) {
  // 		// square
  // 		diagonal = sideA * Math.sqrt(2);
  // 		console.log('carré : ' + diagonal)
  // 	} else {
  // 		// rectangle
  // 		diagonal = Math.sqrt((sideA * sideA) + (sideB * sideB));
  // 		console.log('rectangle : ' + diagonal)
  // 	}
  // 	return diagonal;
  // }


  DrawOrientedLink.prototype.defineCoordinates = function (associateRegion, coordinate, region) {
    var result = 0; //console.log(associateRegion.value)
    // if (associateRegion.value === undefined || associateRegion.value.id === undefined) {
    // 	result = coordinate;
    // } else {
    // 	result = region;
    // }

    return result;
  };

  DrawOrientedLink.prototype.render = function () {
    var sidePanel = this.props.sidePanel;
    var defineCenter = sidePanel / 2;
    var xCoordinateA = this.synchroArrowX(parseInt(this.props.pointAPositionX, 10), defineCenter);
    var yCoordinateA = this.synchroArrowY(parseInt(this.props.pointAPositionY, 10), defineCenter);
    var xCoordinateB = this.synchroArrowX(parseInt(this.props.pointBPositionX, 10), defineCenter);
    var yCoordinateB = this.synchroArrowY(parseInt(this.props.pointBPositionY, 10), defineCenter); //const colorA: string = this.defineColor(this.props.associatePointIn, 'in');
    //const colorB: string = this.defineColor(this.props.associatePointOut, 'out');

    var colorA = this.props.colorA;
    var colorB = this.props.colorB;
    var orientationLink = this.props.orientationLink; // const labelA: string = this.props.labelA;
    // const labelB: string = this.props.labelB;
    // const labelAPositionX: number = parseInt(this.props.labelAPositionX, 10);
    // const labelAPositionY: number = parseInt(this.props.labelAPositionY, 10) * (-1);
    // const labelBPositionX: number = parseInt(this.props.labelBPositionX, 10);
    // const labelBPositionY: number = parseInt(this.props.labelBPositionY, 10) * (-1);
    // const associatePointIn: SelectableValue<PointClass> = this.props.associatePointIn || {};
    // const associatePointOut: SelectableValue<PointClass> = this.props.associatePointOut || {};
    // const associateRegionIn: SelectableValue<RegionClass> = this.props.associateRegionIn || {};
    // const associateRegionOut: SelectableValue<RegionClass> = this.props.associateRegionOut || {};
    // console.log(associatePointIn)
    // console.log(associatePointOut)
    // console.log(associateRegionIn)
    // console.log(associateRegionOut)
    // const xMinAssociateRegionIn: number = parseInt(associateRegionIn.value?.coords.xMin || '0');
    // const xMaxAssociateRegionIn: number = parseInt(associateRegionIn.value?.coords.xMax || '0');
    // const xMinAssociateRegionOut: number = parseInt(associateRegionOut.value?.coords.xMin || '0');
    // const xMaxAssociateRegionOut: number = parseInt(associateRegionOut.value?.coords.xMax || '0');
    // const yMinAssociateRegionIn: number = parseInt(associateRegionIn.value?.coords.yMin || '0');
    // const yMaxAssociateRegionIn: number = parseInt(associateRegionIn.value?.coords.yMax || '0');
    // const yMinAssociateRegionOut: number = parseInt(associateRegionOut.value?.coords.yMin || '0');
    // const yMaxAssociateRegionOut: number = parseInt(associateRegionOut.value?.coords.yMax || '0');
    // const xRegionIn: number = this.synchroArrowX((xMaxAssociateRegionIn + xMinAssociateRegionIn) / 2, defineCenter);
    // const yRegionIn: number = this.synchroArrowY((yMaxAssociateRegionIn + yMinAssociateRegionIn) / 2, defineCenter);
    // const xRegionOut: number = this.synchroArrowX((xMaxAssociateRegionOut + xMinAssociateRegionOut) / 2, defineCenter);
    // const yRegionOut: number = this.synchroArrowY((yMaxAssociateRegionOut + yMinAssociateRegionOut) / 2, defineCenter);
    // const valueMarginRegionIn: number = this.defineSideRegion(	xMinAssociateRegionOut, xMaxAssociateRegionOut,
    // 															yMinAssociateRegionOut, yMaxAssociateRegionOut);

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, // this.drawLink(
    // 	this.defineCoordinates(associateRegionIn, xCoordinateA, xRegionIn),
    // 	this.defineCoordinates(associateRegionIn, yCoordinateA, yRegionIn),
    // 	this.defineCoordinates(associateRegionOut, xCoordinateB, xRegionOut),
    // 	this.defineCoordinates(associateRegionOut, yCoordinateB, yRegionOut),
    // 	colorA, colorB, labelA, labelB, orientationLink, labelAPositionX, 
    // 	labelAPositionY, labelBPositionX, labelBPositionY, valueMarginRegionIn)
    this.drawLink(xCoordinateA, yCoordinateA, xCoordinateB, yCoordinateB, colorA, colorB, orientationLink) // labelA, labelB,  labelAPositionX, 
    // labelAPositionY, labelBPositionX, labelBPositionY
    );
  };

  return DrawOrientedLink;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DrawOrientedLink);

/***/ }),

/***/ "./components/Draw/drawRectangle.tsx":
/*!*******************************************!*\
  !*** ./components/Draw/drawRectangle.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Functions_isNumFloat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Functions/isNumFloat */ "./Functions/isNumFloat.tsx");



/**
 * Draw inititial viewing space rectangle
 */

var DrawRectangle =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DrawRectangle, _super);

  function DrawRectangle(props) {
    var _this = _super.call(this, props) || this;
    /**
     * Transform coordinate percent for css
     * @param {number} size value of coordinate
     * @param {boolean} isMax true if x or y is max value
     * @returns coordinate to percent
     */


    _this.transformCoordonneesToPx = function (size, isMax, position) {
      if (size > 100) {
        size = 100;
      } else if (size < 0 && size < -100) {
        size = -100;
      }

      if (size >= 0) {
        size /= 2;

        if (isMax) {
          size = 50 - size;
        } else {
          size = 50 + size;
        }
      } else {
        size *= -1;
        size /= 2;

        if (isMax) {
          size = 50 - size;
        } else {
          size = 50 - size;
        }
      }

      return size;
    };
    /** creaate rectrangle */


    _this.createRectangle = function () {
      var line = _this.props.uneCoor;
      var pLeft;
      var pRight;
      var pTop;
      var pBottom;
      var xMin = 0;
      var xMax = 0;
      var yMin = 0;
      var yMax = 0;
      var pBorder = '1px solid ' + _this.props.color;
      xMin = Object(Functions_isNumFloat__WEBPACK_IMPORTED_MODULE_2__["isNumFloat"])(line.xMin) ? parseInt(line.xMin, 10) : 0;
      xMax = Object(Functions_isNumFloat__WEBPACK_IMPORTED_MODULE_2__["isNumFloat"])(line.xMax) ? parseInt(line.xMax, 10) : 0;
      yMin = Object(Functions_isNumFloat__WEBPACK_IMPORTED_MODULE_2__["isNumFloat"])(line.yMin) ? parseInt(line.yMin, 10) : 0;
      yMax = Object(Functions_isNumFloat__WEBPACK_IMPORTED_MODULE_2__["isNumFloat"])(line.yMax) ? parseInt(line.yMax, 10) : 0;

      if (xMax >= 0) {
        pLeft = _this.transformCoordonneesToPx(xMin, false, 1).toString() + '%';
        pRight = _this.transformCoordonneesToPx(xMax, true, 2).toString() + '%';
      } else {
        xMin = xMin * -1;
        pRight = _this.transformCoordonneesToPx(xMin, false, 1).toString() + '%';
        pLeft = _this.transformCoordonneesToPx(xMax, true, 2).toString() + '%';
      }

      if (yMax >= 0) {
        pBottom = _this.transformCoordonneesToPx(yMin, false, 3).toString() + '%';
        pTop = _this.transformCoordonneesToPx(yMax, true, 4).toString() + '%';
      } else {
        yMin = yMin * -1;
        pTop = _this.transformCoordonneesToPx(yMin, false, 3).toString() + '%';
        pBottom = _this.transformCoordonneesToPx(yMax, true, 4).toString() + '%';
      }

      var data = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          border: pBorder,
          bottom: pBottom,
          left: pLeft,
          position: 'absolute',
          right: pRight,
          top: pTop
        },
        id: _this.props.id
      });

      _this.setState({
        resultHTML: data
      });
    };

    _this.state = {
      resultHTML: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null)
    };
    return _this;
  }
  /** update state when props uneCoor change */


  DrawRectangle.prototype.componentDidUpdate = function (prevProps) {
    if (prevProps.uneCoor !== this.props.uneCoor) {
      this.createRectangle();
    }
  };
  /**
   * render
   */


  DrawRectangle.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.resultHTML);
  };

  return DrawRectangle;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DrawRectangle);

/***/ }),

/***/ "./components/Draw/drawRectangleExtend.tsx":
/*!*************************************************!*\
  !*** ./components/Draw/drawRectangleExtend.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Functions_isNumFloat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Functions/isNumFloat */ "./Functions/isNumFloat.tsx");
/* harmony import */ var Functions_fetchMetrics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Functions/fetchMetrics */ "./Functions/fetchMetrics.tsx");





/**
 * Draw rectangle
 */

var DrawRectangleExtend =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DrawRectangleExtend, _super);

  function DrawRectangleExtend(props) {
    var _this = _super.call(this, props) || this;
    /**
     * Check limit of coordinate
     * @param {number} value number to test
     * @param {number} position 1 if xMin, 2 if xMax, 3 if yMin, 4 if yMax
     * @returns 0 if it's good or 1 otherwise
     */


    _this.verifLimit = function (intValue, position) {
      var _a = _this.props,
          useLimit = _a.useLimit,
          limit = _a.limit;

      if (!useLimit) {
        return 0;
      }

      if (limit) {
        if (position === 1 || position === 2) {
          if (parseInt(limit.xMin, 10) <= intValue && parseInt(limit.xMax, 10) >= intValue) {
            return intValue;
          } else {
            return position === 1 ? parseInt(limit.xMin, 10) : parseInt(limit.xMax, 10);
          }
        } else if (position === 3 || position === 4) {
          if (parseInt(limit.yMin, 10) <= intValue && parseInt(limit.yMax, 10) >= intValue) {
            return intValue;
          } else {
            return position === 3 ? parseInt(limit.yMin, 10) : parseInt(limit.yMax, 10);
          }
        }
      }

      return 0;
    };
    /**
     * Transform coordinate percent for css
     * @param {number} size value of coordinate
     * @param {boolean} isMax true if x or y is max value
     * @returns coordinate to percent
     */


    _this.transformCoordonneesToPx = function (size, isMax) {
      var maxSize = 100;
      var minSize = -100;
      var midSize = 50;

      if (size > maxSize) {
        size = maxSize;
      } else if (size < 0 && size < minSize) {
        size = minSize;
      }

      if (size >= 0) {
        size /= 2;
        size = isMax ? midSize - size : midSize + size;
      } else {
        size *= -1;
        size /= 2;
        size = midSize - size;
      }

      return size;
    };
    /**
     * Get color with lower limit and prometheus value
     * @returns {ILowerLimit} new color value
     */


    _this.getLowerLimit = function (value) {
      var e_1, _a;

      var lowerLimit = _this.props.uneCoor.lowerLimit;
      var result = {
        'colorBack': '',
        'colorBorder': '',
        'sizeBorder': 0
      };

      if (_this.props.uneCoor.colorMode && value) {
        try {
          for (var lowerLimit_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(lowerLimit), lowerLimit_1_1 = lowerLimit_1.next(); !lowerLimit_1_1.done; lowerLimit_1_1 = lowerLimit_1.next()) {
            var line = lowerLimit_1_1.value;
            var min = line.seuilMin.replace('>', '');
            var minFloat = parseFloat(min);
            var maxFloat = parseFloat(line.seuilMax);

            if ((minFloat <= value || !line.seuilMin) && (maxFloat >= value || !line.seuilMax)) {
              if (lowerLimit.length > 0) {
                result.colorBack = _this.props.uneCoor.traceBack ? line.couleurFond : '';
                result.colorBorder = _this.props.uneCoor.traceBorder ? line.couleurContour : '';
                result.sizeBorder = _this.props.uneCoor.traceBorder ? parseInt(line.sizeContour, 10) : 0;
                break;
              }
            }
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (lowerLimit_1_1 && !lowerLimit_1_1.done && (_a = lowerLimit_1["return"])) _a.call(lowerLimit_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      } else {
        if (lowerLimit.length > 0) {
          result.colorBack = _this.props.uneCoor.traceBack ? lowerLimit[0].couleurFond : '';
          result.colorBorder = _this.props.uneCoor.traceBorder ? lowerLimit[0].couleurContour : '';
          result.sizeBorder = _this.props.uneCoor.traceBorder ? parseInt(lowerLimit[0].sizeContour, 10) : 0;
        }
      }

      return result;
    };
    /** axios requete to test */


    _this.reqAxios = function () {
      var _a;

      var styleTooltip = {
        color: _this.props.uneCoor.textObj.colorText,
        backgroundColor: _this.props.uneCoor.textObj.colorBack
      };
      var region = _this.props.uneCoor;
      Object(Functions_fetchMetrics__WEBPACK_IMPORTED_MODULE_4__["reqMetricRegion"])(region, _this.props);

      if (region.mainMetric.returnQuery && region.mainMetric.returnQuery.fields.length > 0 && region.mainMetric.returnQuery.fields[0].values) {
        var cnt = 0;
        var sizeQuery = ((_a = region.mainMetric.returnQuery) === null || _a === void 0 ? void 0 : _a.length) || 0;

        for (var i = 0; i < sizeQuery; i++) {
          if (region.mainMetric.returnQuery.fields[0].values.get(i)) {
            cnt += region.mainMetric.returnQuery.fields[0].values.get(i);
          }
        }

        cnt /= sizeQuery;

        var lowerLimit = _this.getLowerLimit(cnt);

        _this.setState({
          tooltipValue: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            style: styleTooltip
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
            href: region.linkURL.hoveringTooltipLink
          }, region.linkURL.hoveringTooltipText), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, region.mainMetric.keyValue), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, cnt.toString() + ' ' + region.textObj.unite)),
          backgroundColor: lowerLimit.colorBack,
          borderColor: lowerLimit.colorBorder,
          sizeBorder: lowerLimit.sizeBorder
        }); // }

      } else {
        var lowerLimit = _this.getLowerLimit();

        _this.setState({
          tooltipValue: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            style: styleTooltip
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
            href: _this.props.uneCoor.linkURL.hoveringTooltipLink
          }, _this.props.uneCoor.linkURL.hoveringTooltipText), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "NaN")),
          backgroundColor: lowerLimit.colorBack,
          borderColor: lowerLimit.colorBorder,
          sizeBorder: lowerLimit.sizeBorder
        });
      }
    };
    /** load prometheus value */


    _this.componentDidMount = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var _this = this;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , Promise.resolve('Success').then(function () {
                _this.reqAxios();
              })];

            case 1:
              _a.sent();

              this.renduHTML();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** rendu html. Update when tooltipValue state change */


    _this.renduHTML = function () {
      // const coordinate: RegionClass = this.props.uneCoor;
      var line = _this.props.uneCoor;
      var pLeft;
      var pRight;
      var pTop;
      var pBottom;
      var xMin = 0;
      var xMax = 0;
      var yMin = 0;
      var yMax = 0;

      var pBorder = _this.state.sizeBorder.toString() + 'px solid ' + _this.state.borderColor;

      xMin = Object(Functions_isNumFloat__WEBPACK_IMPORTED_MODULE_3__["isNumFloat"])(line.coords.xMin) ? parseInt(line.coords.xMin, 10) : 0;
      xMax = Object(Functions_isNumFloat__WEBPACK_IMPORTED_MODULE_3__["isNumFloat"])(line.coords.xMax) ? parseInt(line.coords.xMax, 10) : 0;
      yMin = Object(Functions_isNumFloat__WEBPACK_IMPORTED_MODULE_3__["isNumFloat"])(line.coords.yMin) ? parseInt(line.coords.yMin, 10) : 0;
      yMax = Object(Functions_isNumFloat__WEBPACK_IMPORTED_MODULE_3__["isNumFloat"])(line.coords.yMax) ? parseInt(line.coords.yMax, 10) : 0;

      if (_this.props.useLimit) {
        xMin = _this.verifLimit(xMin, 1);
        xMax = _this.verifLimit(xMax, 2);
        yMin = _this.verifLimit(yMin, 3);
        yMax = _this.verifLimit(yMax, 4);
      }

      if (xMax >= 0) {
        pLeft = _this.transformCoordonneesToPx(xMin, false).toString() + '%';
        pRight = _this.transformCoordonneesToPx(xMax, true).toString() + '%';
      } else {
        xMin = xMin * -1;
        pRight = _this.transformCoordonneesToPx(xMin, false).toString() + '%';
        pLeft = _this.transformCoordonneesToPx(xMax, true).toString() + '%';
      }

      if (yMax >= 0) {
        pBottom = _this.transformCoordonneesToPx(yMin, false).toString() + '%';
        pTop = _this.transformCoordonneesToPx(yMax, true).toString() + '%';
      } else {
        yMin = yMin * -1;
        pTop = _this.transformCoordonneesToPx(yMin, false).toString() + '%';
        pBottom = _this.transformCoordonneesToPx(yMax, true).toString() + '%';
      }

      var backColor = line.textObj.colorBack;
      var textColor = line.textObj.colorText;
      var fontStyle = line.textObj.styleText;
      var styleDiv = {
        border: pBorder,
        bottom: pBottom,
        left: pLeft,
        position: 'absolute',
        right: pRight,
        top: pTop,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'url(' + _this.props.uneCoor.img + ') no-repeat center center',
        backgroundColor: _this.state.backgroundColor,
        backgroundSize: 'contain',
        cursor: 'pointer'
      };
      var styleTextDiv = {
        backgroundColor: backColor,
        fontStyle: fontStyle,
        color: textColor,
        verticalAlign: 'middle'
      };

      if (_this.props.isEnabled) {
        _this.setState({
          htmlResult: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
            content: _this.state.tooltipValue
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
            href: _this.props.uneCoor.linkURL.followLink
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            style: styleDiv,
            id: _this.props.id
          }, !_this.props.uneCoor.textObj.isTextRegion && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            style: styleTextDiv
          }, _this.props.uneCoor.label))))
        });
      } else {
        _this.setState({
          htmlResult: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
            content: _this.state.tooltipValue
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            style: styleDiv,
            id: _this.props.id
          }, !_this.props.uneCoor.textObj.isTextRegion && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            style: styleTextDiv
          }, _this.props.uneCoor.label)))
        });
      }
    };

    _this.state = {
      tooltipValue: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null),
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderColor: 'rgba(255, 255, 255, 0)',
      sizeBorder: 1,
      htmlResult: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null)
    };
    return _this;
  }
  /**
   * update props
   * @param prevProps
   */


  DrawRectangleExtend.prototype.componentDidUpdate = function (prevProps, prevState) {
    if (prevProps.isEnabled !== this.props.isEnabled) {
      this.componentDidMount();
    } // if (prevProps.uneCoor !== this.props.uneCoor
    // 	|| prevProps.contentTooltip !== this.props.contentTooltip
    // 	|| prevProps.data.series !== this.props.data.series) {
    // 	this.reqAxios();
    // }
    // if (prevState.tooltipValue !== this.state.tooltipValue
    // 	|| prevState.backgroundColor !== this.state.backgroundColor
    // 	|| prevState.borderColor !== this.state.borderColor
    // 	|| prevState.sizeBorder !== this.state.sizeBorder) {
    // 	this.renduHTML();
    // }

  };
  /** render */


  DrawRectangleExtend.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.htmlResult);
  };

  return DrawRectangleExtend;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DrawRectangleExtend);

/***/ }),

/***/ "./components/Parametrage/couleurFixe.tsx":
/*!************************************************!*\
  !*** ./components/Parametrage/couleurFixe.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Models_LowerLimitClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Models/LowerLimitClass */ "./Models/LowerLimitClass.tsx");
/* harmony import */ var Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Functions/Input/inputSeriesColorPicker */ "./Functions/Input/inputSeriesColorPicker.tsx");





/**
 * edit color in fix mode
 */

var CouleurFixe =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CouleurFixe, _super);

  function CouleurFixe(props) {
    var _this = _super.call(this, props) || this;
    /**
     * edit background color with Promise
     */


    _this.setStateAsyncSeuil = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /**
     * save data
     */


    _this.callBack = function () {
      _this.props.lowerLimitCallBack(_this.state.lowerLimit, _this.props.id);
    };
    /**
     * change background color
     */


    _this.onChangeColorFond = function (key, color) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newSeuil;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newSeuil = this.state.lowerLimit;
              newSeuil[0].couleurFond = color;
              return [4
              /*yield*/
              , this.setStateAsyncSeuil({
                lowerLimit: newSeuil
              })];

            case 1:
              _a.sent();

              this.callBack();
              this.initComponent();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * change contour color
     */


    _this.onChangeColorContour = function (key, color) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newSeuil;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newSeuil = this.state.lowerLimit;
              newSeuil[0].couleurContour = color;
              return [4
              /*yield*/
              , this.setStateAsyncSeuil({
                lowerLimit: newSeuil
              })];

            case 1:
              _a.sent();

              this.callBack();
              this.initComponent();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * change size color
     */


    _this.onChangeSzContour = function (value) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newSeuil;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newSeuil = this.state.lowerLimit;
              newSeuil[0].sizeContour = value;
              return [4
              /*yield*/
              , this.setStateAsyncSeuil({
                lowerLimit: newSeuil
              })];

            case 1:
              _a.sent();

              this.callBack();
              this.initComponent();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * add button color
     */


    _this.addButtonColor = function () {
      var key = '0';
      var couleur = [];

      var l10n = __webpack_require__(/*! Localization/en.json */ "./Localization/en.json");

      console.log(_this.state.lowerLimit);
      console.log(_this.props.lowerLimit);

      if (_this.props.traceBack) {
        var keyFondColorPicker = key + 'FondcolorPicker';
        couleur.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: keyFondColorPicker,
          color: _this.state.lowerLimit[0].couleurFond,
          keyInt: 0,
          text: l10n.colorVariable.switchBackgroundColor,
          _onChange: _this.onChangeColorFond
        }));
      }

      if (_this.props.traceBorder) {
        var keyContourDiv = key + 'ContourDiv';
        couleur.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: keyContourDiv
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
          color: _this.state.lowerLimit[0].couleurContour,
          keyInt: 0,
          text: l10n.colorVariable.switchOutlineColor,
          _onChange: _this.onChangeColorContour
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          labelWidth: 10,
          label: l10n.colorVariable.thicknessOutline,
          name: 'epaisseurContour',
          placeholder: l10n.colorVariable.thicknessOutline,
          value: _this.state.lowerLimit[0].sizeContour,
          onChange: function onChange(event) {
            return _this.onChangeSzContour(event.currentTarget.value);
          }
        })));
      }

      return couleur;
    };
    /** create form */


    _this.initComponent = function () {
      _this.setState({
        htmlResult: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, _this.addButtonColor())
      });
    };
    /** init component when component is mount */


    _this.componentDidMount = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!(this.state.lowerLimit.length === 0)) return [3
              /*break*/
              , 2];
              return [4
              /*yield*/
              , this.setStateAsyncSeuil({
                lowerLimit: [new Models_LowerLimitClass__WEBPACK_IMPORTED_MODULE_3__["LowerLimitClass"](0, '', '', '', '', '1')]
              })];

            case 1:
              _a.sent();

              _a.label = 2;

            case 2:
              this.initComponent();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** init component when  update props */


    _this.componentDidUpdate = function (prevProps) {
      if (prevProps.traceBorder !== _this.props.traceBorder || prevProps.traceBack !== _this.props.traceBack) {
        _this.initComponent();
      }
    };

    _this.state = {
      lowerLimit: _this.props.lowerLimit,
      htmlResult: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null)
    };
    return _this;
  }
  /**
   * result
   */


  CouleurFixe.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.htmlResult);
  };

  return CouleurFixe;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CouleurFixe);

/***/ }),

/***/ "./components/Parametrage/couleurVariable.tsx":
/*!****************************************************!*\
  !*** ./components/Parametrage/couleurVariable.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Models_ArrayInputClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Models/ArrayInputClass */ "./Models/ArrayInputClass.tsx");
/* harmony import */ var Models_InputClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Models/InputClass */ "./Models/InputClass.tsx");
/* harmony import */ var Models_LowerLimitClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Models/LowerLimitClass */ "./Models/LowerLimitClass.tsx");
/* harmony import */ var Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Functions/Input/inputSeriesColorPicker */ "./Functions/Input/inputSeriesColorPicker.tsx");
/* harmony import */ var Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Functions/Input/inputText */ "./Functions/Input/inputText.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }









/**
 * edit colors in variable mode
 */

var CouleurVariable =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CouleurVariable, _super);

  function CouleurVariable(props) {
    var _this = _super.call(this, props) || this;
    /**
     * set state for arrayInputClass whith Promise
     */


    _this.setStateAsyncArrayInputClass = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /**
     * set state for seuil whith Promise
     */


    _this.setStateAsyncLowerLimit = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /**
     * set state for index whith Promise
     */


    _this.setStateAsyncIndex = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /**
     * set state for nbVariation whith Promise
     */


    _this.setStateAsyncNbVariation = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /**
     * send data to parent
     */


    _this.callBack = function () {
      _this.fillVarInput();

      _this.props.lowerLimitCallBack(_this.state.lowerLimit, _this.props.id);
    };
    /** old function */


    _this.saveData = function () {// const { onOptionsChange } = this.props;
      // console.table(this.state.seuil);
      // onOptionsChange({
      // 	...this.props.options,
      // 	seuil: this.state.seuil,
      // });
    };
    /**
     * add new seuil
     * @param idx index for id
     */


    _this.addInput = function (idx, newLowerLimit) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.setStateAsyncArrayInputClass({
                arrayInputClass: this.state.arrayInputClass.slice().concat(new Models_ArrayInputClass__WEBPACK_IMPORTED_MODULE_3__["ArrayInputClass"](idx, [new Models_InputClass__WEBPACK_IMPORTED_MODULE_4__["InputClass"]('gestCouleurMin' + idx.toString(), 'Seuil min', 'seuilMin', 'text', false, 'Seuil min', undefined), new Models_InputClass__WEBPACK_IMPORTED_MODULE_4__["InputClass"]('gestCouleurMax' + idx.toString(), 'Seuil max', 'seuilMax', 'text', false, 'Seuil max', undefined)]))
              })];

            case 1:
              _a.sent();

              return [4
              /*yield*/
              , this.setStateAsyncLowerLimit({
                lowerLimit: this.state.lowerLimit.concat(newLowerLimit)
              })];

            case 2:
              _a.sent();

              return [4
              /*yield*/
              , this.setStateAsyncIndex({
                index: idx + 1
              })];

            case 3:
              _a.sent();

              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * call function with value input change
     * @param event event input
     * @param idInput id input
     * @param idLine index array
     */


    _this.handleValueChange = function (event, idInput, idLine) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var cpy;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              cpy = this.state.lowerLimit.slice();

              if (idInput === 'seuilMin') {
                cpy[idLine].seuilMin = event;
              } else {
                cpy[idLine].seuilMax = event;

                if (cpy.length > idLine + 1) {
                  cpy[idLine + 1].seuilMin = '>' + event;
                }
              }

              return [4
              /*yield*/
              , this.setStateAsyncLowerLimit({
                lowerLimit: cpy
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * call function when colorFond value change
     * @param key line index to modify
     * @param color the new color to add
     */


    _this.onChangeColorFond = function (key, color) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var cpy;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              cpy = this.state.lowerLimit;
              cpy[key].couleurFond = color;
              return [4
              /*yield*/
              , this.setStateAsyncLowerLimit({
                lowerLimit: cpy
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * call fonction when colorContour change
     * @param key line index to modify
     * @param color the new color to add
     */


    _this.onChangeColorContour = function (key, color) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var cpy;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              cpy = this.state.lowerLimit;
              cpy[key].couleurContour = color;
              return [4
              /*yield*/
              , this.setStateAsyncLowerLimit({
                lowerLimit: cpy
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * call function when sizeContour value change
     * @param key line index to modify
     * @param size the new size to add
     */


    _this.onChangeSzContour = function (key, size) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var cpy;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              cpy = this.state.lowerLimit;
              cpy[key].sizeContour = size;
              return [4
              /*yield*/
              , this.setStateAsyncLowerLimit({
                lowerLimit: cpy
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * insert color picker
     * @param keyInt index to edit line
     * @returns JSX.Element
     */


    _this.addButtonColor = function (keyInt) {
      var key = keyInt.toString();
      var couleur = [];

      var l10n = __webpack_require__(/*! Localization/en.json */ "./Localization/en.json");

      if (_this.props.traceBack) {
        var keyFondColorPicker = key + 'FondcolorPicker';
        couleur.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_6__["default"], {
          key: keyFondColorPicker,
          color: _this.state.lowerLimit[keyInt].couleurFond,
          keyInt: keyInt,
          text: l10n.colorVariable.switchBackgroundColor,
          _onChange: _this.onChangeColorFond
        }));
      }

      if (_this.props.traceBorder) {
        var keyContourDiv = key + 'ContourDiv';
        couleur.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: keyContourDiv
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_6__["default"], {
          color: _this.state.lowerLimit[keyInt].couleurContour,
          keyInt: keyInt,
          text: l10n.colorVariable.switchOutlineColor,
          _onChange: _this.onChangeColorContour
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          labelWidth: 15,
          label: l10n.colorVariable.thicknessOutline,
          name: 'epaisseurContour',
          placeholder: l10n.colorVariable.thicknessOutline,
          value: _this.state.lowerLimit[keyInt].sizeContour,
          onChange: function onChange(event) {
            return _this.onChangeSzContour(keyInt, event.currentTarget.value);
          }
        })));
      }

      return couleur;
    };
    /**
     * call fonction when edit nbVariation
     */


    _this.onChangeVariation = function (event) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.setStateAsyncNbVariation({
                nbVariation: event.currentTarget.value
              })];

            case 1:
              _a.sent();

              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** generate array input */


    _this.test = function (newSeuil) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var arrayInput, idx, pSeuil, newSeuil_1, newSeuil_1_1, line;

        var e_1, _a;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
          switch (_b.label) {
            case 0:
              arrayInput = this.state.arrayInputClass.slice();
              idx = this.state.index;
              pSeuil = this.state.lowerLimit;

              try {
                for (newSeuil_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(newSeuil), newSeuil_1_1 = newSeuil_1.next(); !newSeuil_1_1.done; newSeuil_1_1 = newSeuil_1.next()) {
                  line = newSeuil_1_1.value;
                  arrayInput.push(new Models_ArrayInputClass__WEBPACK_IMPORTED_MODULE_3__["ArrayInputClass"](idx, [new Models_InputClass__WEBPACK_IMPORTED_MODULE_4__["InputClass"]('gestCouleurMin' + idx.toString(), 'Seuil min', 'seuilMin', 'text', false, 'Seuil min', undefined), new Models_InputClass__WEBPACK_IMPORTED_MODULE_4__["InputClass"]('gestCouleurMax' + idx.toString(), 'Seuil max', 'seuilMax', 'text', false, 'Seuil max', undefined)]));
                  idx++;
                  pSeuil.push(line);
                }
              } catch (e_1_1) {
                e_1 = {
                  error: e_1_1
                };
              } finally {
                try {
                  if (newSeuil_1_1 && !newSeuil_1_1.done && (_a = newSeuil_1["return"])) _a.call(newSeuil_1);
                } finally {
                  if (e_1) throw e_1.error;
                }
              }

              return [4
              /*yield*/
              , this.setStateAsyncArrayInputClass({
                arrayInputClass: arrayInput
              })];

            case 1:
              _b.sent();

              return [4
              /*yield*/
              , this.setStateAsyncLowerLimit({
                lowerLimit: pSeuil
              })];

            case 2:
              _b.sent();

              return [4
              /*yield*/
              , this.setStateAsyncIndex({
                index: idx
              })];

            case 3:
              _b.sent();

              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * call addInput to prepare new inputs
     * @param nb number inputs to add
     */


    _this.addMultipleVariation = function (nb, seuil) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!seuil) return [3
              /*break*/
              , 2];
              return [4
              /*yield*/
              , this.test(seuil)];

            case 1:
              _a.sent();

              this.fillVarInput();
              _a.label = 2;

            case 2:
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** add new lower limit */


    _this.addVariation = function (nb, seuil) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var i, newSeuil;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              i = 0;
              _a.label = 1;

            case 1:
              if (!(i < nb)) return [3
              /*break*/
              , 4];
              newSeuil = seuil ? seuil[i] : new Models_LowerLimitClass__WEBPACK_IMPORTED_MODULE_5__["LowerLimitClass"](i, '', '', '', '', '');
              return [4
              /*yield*/
              , this.addInput(i, newSeuil)];

            case 2:
              _a.sent();

              _a.label = 3;

            case 3:
              i++;
              return [3
              /*break*/
              , 1];

            case 4:
              this.fillVarInput();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * call function when display n input according to nbVariation
     */


    _this.onClickVariation = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var nb;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.setStateAsyncArrayInputClass({
                arrayInputClass: []
              })];

            case 1:
              _a.sent();

              return [4
              /*yield*/
              , this.setStateAsyncIndex({
                index: 0
              })];

            case 2:
              _a.sent();

              return [4
              /*yield*/
              , this.setStateAsyncLowerLimit({
                lowerLimit: []
              })];

            case 3:
              _a.sent();

              this.setState({
                displayInput: true
              });
              nb = parseInt(this.state.nbVariation, 10);
              return [4
              /*yield*/
              , this.addVariation(nb)];

            case 4:
              _a.sent();

              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * generate input seuil min and max with value
     * @returns JSX.Element
     */


    _this.fillVarInput = function () {
      var e_2, _a;

      var _final = [];

      if (_this.state.lowerLimit.length === 0) {
        _this.setState({
          dynamicInput: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)
        });

        return;
      }

      var i = 0;

      var _loop_1 = function _loop_1(line) {
        if (line.uneClassInput.length <= 0) {
          _this.setState({
            dynamicInput: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)
          });

          return {
            value: void 0
          };
        }

        var result = line.uneClassInput.map(function (obj) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_7__["default"], {
            key: obj.id,
            label: obj.label,
            name: obj.name,
            placeholder: obj.placeholder || '',
            required: obj.required,
            value: obj.name === 'seuilMin' ? line.id === 0 ? '-∞' : _this.state.lowerLimit[i].seuilMin : line.id === _this.state.index - 1 ? '+∞' : _this.state.lowerLimit[i].seuilMax,
            _handleChange: function _handleChange(event) {
              return _this.handleValueChange(event.currentTarget.value, obj.name, line.id);
            },
            disabled: obj.name === 'seuilMin' || line.id === _this.state.index - 1
          });
        });
        i++;

        var couleur = _this.addButtonColor(line.id);

        var newKey = line.id.toString() + 'brGestColor';
        _final = _final.concat(result.concat(couleur.concat(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
          key: newKey
        }))));
      };

      try {
        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.state.arrayInputClass), _c = _b.next(); !_c.done; _c = _b.next()) {
          var line = _c.value;

          var state_1 = _loop_1(line);

          if (_typeof(state_1) === "object") return state_1.value;
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        } finally {
          if (e_2) throw e_2.error;
        }
      }

      _this.setState({
        dynamicInput: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, _final)
      });
    };
    /**
     * debug
     */


    _this.infoSeuil = function () {
      console.group('info');
      console.log(_this.state.lowerLimit);
      console.log(_this.state.arrayInputClass);
      console.groupEnd();
    };
    /**
     * component mount
     */


    _this.componentDidMount = function () {
      if (_this.props.lowerLimit.length > 0) {
        var nb = parseInt(_this.state.nbVariation, 10);

        _this.addMultipleVariation(nb, _this.props.lowerLimit);
      }
    };

    _this.componentDidUpdate = function (prevProps) {
      if (prevProps.traceBorder !== _this.props.traceBorder || prevProps.traceBack !== _this.props.traceBack) {
        _this.fillVarInput();
      }
    };

    _this.state = {
      arrayInputClass: [],
      lowerLimit: [],
      index: 0,
      nbVariation: '3',
      dynamicInput: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null),
      displayInput: false
    };
    return _this;
  }
  /**
   * render
   */


  CouleurVariable.prototype.render = function () {
    var l10n = __webpack_require__(/*! Localization/en.json */ "./Localization/en.json");

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: l10n.colorVariable.variationNumber,
      name: 'nbVariation',
      placeholder: l10n.colorVariable.number,
      required: true,
      value: this.state.nbVariation,
      _handleChange: this.onChangeVariation
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: this.onClickVariation
    }, l10n.colorVariable.addColor), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), this.state.dynamicInput);
  };

  return CouleurVariable;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CouleurVariable);

/***/ }),

/***/ "./components/Parametrage/manageLowerLimit.tsx":
/*!*****************************************************!*\
  !*** ./components/Parametrage/manageLowerLimit.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Models_LowerLimitClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Models/LowerLimitClass */ "./Models/LowerLimitClass.tsx");
/* harmony import */ var components_Parametrage_couleurFixe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Parametrage/couleurFixe */ "./components/Parametrage/couleurFixe.tsx");
/* harmony import */ var components_Parametrage_couleurVariable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Parametrage/couleurVariable */ "./components/Parametrage/couleurVariable.tsx");






/**
 * def class
 */

var ManageLowerLimit =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ManageLowerLimit, _super);

  function ManageLowerLimit(props) {
    var _this = _super.call(this, props) || this;
    /** update state with promise */


    _this.setStateAsyncCoordinate = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /** update state with promise */


    _this.setStateAsyncOpenLowerLimit = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /**
     * save data in type
     */


    _this.onSave = function () {
      console.log('lower');
      console.log(_this.props.id);

      _this.props.callBack(_this.props.coordinate, _this.props.id);

      _this.props.lowerLimitCallBack(_this.state.coordinate.lowerLimit, _this.props.id);
    };
    /**
     * Edit fondIsChecked with switch
     */


    _this.onSwitchFond = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newValue;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newValue = this.state.coordinate;
              newValue.traceBack = !newValue.traceBack;
              return [4
              /*yield*/
              , this.setStateAsyncCoordinate({
                coordinate: newValue
              })];

            case 1:
              _a.sent();

              this.onSave();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * Edit contourIsChecked with switch
     */


    _this.onSwitchContour = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newValue;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newValue = this.state.coordinate;
              newValue.traceBorder = !newValue.traceBorder;
              return [4
              /*yield*/
              , this.setStateAsyncCoordinate({
                coordinate: newValue
              })];

            case 1:
              _a.sent();

              this.onSave();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * switch colorMode -> fixe / variable
     */


    _this.onSwitchColorMode = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newValue;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newValue = this.state.coordinate;
              newValue.colorMode = !newValue.colorMode;
              if (!!this.state.coordinate.colorMode) return [3
              /*break*/
              , 2];
              newValue.lowerLimit = [new Models_LowerLimitClass__WEBPACK_IMPORTED_MODULE_3__["LowerLimitClass"](0, '', '', '', '', '')];
              return [4
              /*yield*/
              , this.setStateAsyncCoordinate({
                coordinate: newValue
              })];

            case 1:
              _a.sent();

              return [3
              /*break*/
              , 4];

            case 2:
              newValue.lowerLimit = [];
              return [4
              /*yield*/
              , this.setStateAsyncCoordinate({
                coordinate: newValue
              })];

            case 3:
              _a.sent();

              _a.label = 4;

            case 4:
              this.onSave();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** open or close toggle lower limit */


    _this.onToggleLowerLimit = function (isOpen) {
      _this.setState({
        openLowerLimit: isOpen
      });
    };
    /** update component when coordinate props change */


    _this.componentDidUpdate = function (prevProps) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!(prevProps.coordinate !== this.state.coordinate)) return [3
              /*break*/
              , 3];
              return [4
              /*yield*/
              , this.setStateAsyncCoordinate({
                coordinate: prevProps.coordinate
              })];

            case 1:
              _a.sent();

              return [4
              /*yield*/
              , this.setStateAsyncOpenLowerLimit({
                openLowerLimit: false
              })];

            case 2:
              _a.sent();

              _a.label = 3;

            case 3:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.state = {
      coordinate: _this.props.coordinate,
      openLowerLimit: false
    };
    return _this;
  }
  /**
   * result
   */


  ManageLowerLimit.prototype.render = function () {
    var l10n = __webpack_require__(/*! Localization/en.json */ "./Localization/en.json"); // console.log(this.props.coordinate)
    // console.log(this.props.id)


    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      label: 'Lower limit',
      isOpen: this.state.openLowerLimit,
      onToggle: this.onToggleLowerLimit
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: l10n.genericParameter.variableColor,
      checked: this.state.coordinate.colorMode,
      onChange: this.onSwitchColorMode
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: l10n.genericParameter.traceBackground,
      checked: this.state.coordinate.traceBack,
      onChange: this.onSwitchFond
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: l10n.genericParameter.traceContour,
      checked: this.state.coordinate.traceBorder,
      onChange: this.onSwitchContour
    }), this.state.coordinate.colorMode ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Parametrage_couleurVariable__WEBPACK_IMPORTED_MODULE_5__["default"], {
      traceBorder: this.state.coordinate.traceBorder,
      traceBack: this.state.coordinate.traceBack,
      lowerLimit: this.state.coordinate.lowerLimit,
      lowerLimitCallBack: this.props.lowerLimitCallBack,
      id: this.props.id
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Parametrage_couleurFixe__WEBPACK_IMPORTED_MODULE_4__["default"], {
      traceBorder: this.state.coordinate.traceBorder,
      traceBack: this.state.coordinate.traceBack,
      lowerLimit: this.state.coordinate.lowerLimit,
      lowerLimitCallBack: this.props.lowerLimitCallBack,
      id: this.props.id
    })));
  };

  return ManageLowerLimit;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ManageLowerLimit);

/***/ }),

/***/ "./components/Parametrage/parametrageMetriquePrincipale.tsx":
/*!******************************************************************!*\
  !*** ./components/Parametrage/parametrageMetriquePrincipale.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Functions/Input/inputText */ "./Functions/Input/inputText.tsx");



/**
 * def
 */

var LinkURLClassPrincipale =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LinkURLClassPrincipale, _super);

  function LinkURLClassPrincipale(props) {
    var _this = _super.call(this, props) || this;
    /**
     * edit followLink whith Promise
     */


    _this.setStateAsyncFollowLink = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /**
     * edit link for tooltip whith Promise
     */


    _this.setStateAsyncHoveringTooltipLink = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /**
     * edit text for tooltip whith Promise
     */


    _this.setStateAsyncHoveringTooltipText = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /**
     * save data
     */


    _this.callBack = function () {
      _this.props.callBackToParent(_this.state.followLink, _this.state.hoveringTooltipLink, _this.state.hoveringTooltipText, undefined, _this.props.id);
    };
    /**
     * call function when follow link change
     */


    _this.onChangeFollowLink = function (value) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.setStateAsyncFollowLink({
                followLink: value
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * call function when follow link change
     */


    _this.onChangeHoveringTooltipLink = function (value) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.setStateAsyncHoveringTooltipLink({
                hoveringTooltipLink: value
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * call function when follow link change
     */


    _this.onChangeHoveringTooltipText = function (value) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.setStateAsyncHoveringTooltipText({
                hoveringTooltipText: value
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.state = {
      followLink: _this.props.coordinateSpace.linkURL.followLink,
      hoveringTooltipLink: _this.props.coordinateSpace.linkURL.hoveringTooltipLink,
      hoveringTooltipText: _this.props.coordinateSpace.linkURL.hoveringTooltipText
    };
    return _this;
  }

  LinkURLClassPrincipale.prototype.componentDidUpdate = function (prevProps) {
    if (prevProps.coordinateSpace !== this.props.coordinateSpace) {
      this.setState({
        followLink: prevProps.coordinateSpace.linkURL.followLink,
        hoveringTooltipLink: prevProps.coordinateSpace.linkURL.hoveringTooltipLink,
        hoveringTooltipText: prevProps.coordinateSpace.linkURL.hoveringTooltipText
      });
    }
  };
  /**
   * result
   */


  LinkURLClassPrincipale.prototype.render = function () {
    var _this = this;

    var l10n = __webpack_require__(/*! Localization/en.json */ "./Localization/en.json");

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: l10n.metricPrincipalSetting.followLink,
      name: 'followLink',
      placeholder: l10n.metricPrincipalSetting.link,
      required: false,
      value: this.state.followLink,
      _handleChange: function _handleChange(event) {
        return _this.onChangeFollowLink(event.currentTarget.value);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: l10n.metricPrincipalSetting.linkTooltip,
      name: 'linkTooltip',
      placeholder: l10n.metricPrincipalSetting.link,
      required: false,
      value: this.state.hoveringTooltipLink,
      _handleChange: function _handleChange(event) {
        return _this.onChangeHoveringTooltipLink(event.currentTarget.value);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: l10n.metricPrincipalSetting.textInTooltip,
      name: 'textTooltip',
      placeholder: l10n.metricPrincipalSetting.text,
      required: false,
      value: this.state.hoveringTooltipText,
      _handleChange: function _handleChange(event) {
        return _this.onChangeHoveringTooltipText(event.currentTarget.value);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null));
  };

  return LinkURLClassPrincipale;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LinkURLClassPrincipale);

/***/ }),

/***/ "./components/Parametrage/parametresGeneriques.tsx":
/*!*********************************************************!*\
  !*** ./components/Parametrage/parametresGeneriques.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _parametrageMetriquePrincipale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parametrageMetriquePrincipale */ "./components/Parametrage/parametrageMetriquePrincipale.tsx");
/* harmony import */ var _textObjects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./textObjects */ "./components/Parametrage/textObjects.tsx");





/**
 * class ParametresGeneriques
 */

var ParametresGeneriques =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ParametresGeneriques, _super);

  function ParametresGeneriques(props) {
    var _this = _super.call(this, props) || this;
    /** switch value collapseMainMetric when click collapse */


    _this.onToggleMainMetric = function (isOpen) {
      _this.setState({
        collapseMainMetric: isOpen
      });
    };
    /** switch value collapseTextObject when click collapse */


    _this.onToggleTextObject = function (isOpen) {
      _this.setState({
        collapseTextObject: isOpen
      });
    };
    /** close collapse when coordinateSpace object change */


    _this.componentDidUpdate = function (prevProps) {
      if (prevProps.coordinateSpace !== _this.props.coordinateSpace) {
        _this.setState({
          collapseMainMetric: false,
          collapseTextObject: false
        });
      }
    };

    _this.state = {
      collapseMainMetric: false,
      collapseTextObject: false
    };
    return _this;
  }
  /** HTML */


  ParametresGeneriques.prototype.render = function () {
    var l10n = __webpack_require__(/*! Localization/en.json */ "./Localization/en.json"); //console.log(this.props.coordinateSpace)


    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.collapseMainMetric,
      label: l10n.genericParameter.settingPrincipalMetric,
      onToggle: this.onToggleMainMetric
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_parametrageMetriquePrincipale__WEBPACK_IMPORTED_MODULE_3__["default"], {
      coordinateSpace: this.props.coordinateSpace,
      callBackToParent: this.props.callBackToParent,
      id: this.props.id
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.collapseTextObject,
      label: 'Text object',
      onToggle: this.onToggleTextObject
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_textObjects__WEBPACK_IMPORTED_MODULE_4__["default"], {
      coordinateSpace: this.props.coordinateSpace,
      callBackToParent: this.props.callBackToParent,
      id: this.props.id
    }))));
  };

  return ParametresGeneriques;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ParametresGeneriques);

/***/ }),

/***/ "./components/Parametrage/textObjects.tsx":
/*!************************************************!*\
  !*** ./components/Parametrage/textObjects.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Functions/Input/inputText */ "./Functions/Input/inputText.tsx");
/* harmony import */ var Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Functions/Input/inputSeriesColorPicker */ "./Functions/Input/inputSeriesColorPicker.tsx");





/**
 * def
 */

var TextObjects =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TextObjects, _super);

  function TextObjects(props) {
    var _this = _super.call(this, props) || this;
    /** save data in async mode */


    _this.stateAsyncTextObject = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /**
     * call back to parent
     */


    _this.callBack = function () {
      _this.props.callBackToParent(undefined, undefined, undefined, _this.state.textObject, _this.props.id);
    };
    /** change value for legend input */


    _this.onChangeLegende = function (value) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.legende = value;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** change value for value input */


    _this.onChangeValeur = function (value) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.valeur = value;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** change value for unity input */


    _this.onChangeUnite = function (value) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.unite = value;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** change value for back color input */


    _this.onChangeBackColor = function (key, color) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.colorBack = color;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** change value for color region */


    _this.onChangeColorText = function (key, color) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.colorText = color;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** change value for style text region */


    _this.onChangeStyleText = function (event) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.styleText = event.currentTarget.value;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** switch value for generate text object */


    _this.onSwitchGenerateObjectText = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.generateObjectText = !this.state.textObject.generateObjectText;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** change value for legend element */


    _this.onChangeLegendElement = function (event) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.legendElement = event.currentTarget.value;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** change value for unity mesure element */


    _this.onChangeUnityMesureElement = function (event) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.unityMesureElement = event.currentTarget.value;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** change format for numeric text object */


    _this.onChangeFormatageNumeriqueTextObject = function (event) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.numericFormatElement = event.currentTarget.value;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** switch value for display object text */


    _this.onSwitchDisplayObjectInText = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.displayObjectInText = !this.state.textObject.displayObjectInText;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** switch value for display object permanently */


    _this.onSwitchDisplayObjectPermanently = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.displayObjectPermanently = !this.state.textObject.displayObjectPermanently;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** choice to apply color or not for text element */


    _this.onSwitchAddColorTextElement = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.addColorTextElement = !this.state.textObject.addColorTextElement;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** choice to apply color or not for back element */


    _this.onSwitchAddColorBackElement = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.addColorBackElement = !this.state.textObject.addColorBackElement;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** switch display text */


    _this.onSwitchIsTextRegion = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.isTextRegion = !this.state.textObject.isTextRegion;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** change value for color text element */


    _this.onChangeColorTextElement = function (key, color) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.colorTextElement = color;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** change value for back element */


    _this.onChangeColorBackElement = function (key, color) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.colorBackElement = color;
              return [4
              /*yield*/
              , this.stateAsyncTextObject({
                textObject: newTextObject
              })];

            case 1:
              _a.sent();

              this.callBack();
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.state = {
      textObject: _this.props.coordinateSpace.textObj
    };
    return _this;
  }
  /**
   * result
   */


  TextObjects.prototype.render = function () {
    var _this = this;

    var l10n = __webpack_require__(/*! Localization/en.json */ "./Localization/en.json");

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, l10n.textObject.titleTextObject), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: l10n.textObject.optionalLegend,
      key: 'legendeTextObject',
      name: 'legendeTextObject',
      placeholder: l10n.textObject.legend,
      required: false,
      value: this.state.textObject.legende,
      _handleChange: function _handleChange(event) {
        return _this.onChangeLegende(event.currentTarget.value);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: l10n.textObject.optionalUnit,
      key: 'textUnitObject',
      name: 'textUnitObject',
      placeholder: l10n.textObject.unit,
      required: false,
      value: this.state.textObject.unite,
      _handleChange: function _handleChange(event) {
        return _this.onChangeUnite(event.currentTarget.value);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, l10n.textObject.principalMetric), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: 'Display text in region or tooltip',
      checked: this.state.textObject.isTextRegion,
      onChange: this.onSwitchIsTextRegion
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
      hidden: this.state.textObject.isTextRegion
    }, l10n.textObject.textRegion), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
      hidden: !this.state.textObject.isTextRegion
    }, l10n.textObject.textBubble), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
      color: this.state.textObject.colorBack,
      keyInt: 0,
      text: l10n.textObject.colorBackground,
      _onChange: this.onChangeBackColor
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
      color: this.state.textObject.colorText,
      keyInt: 0,
      text: l10n.textObject.colorText,
      _onChange: this.onChangeColorText
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: l10n.textObject.textStyle,
      name: 'textStyleTextObject',
      placeholder: l10n.textObject.style,
      required: false,
      value: this.state.textObject.styleText,
      _handleChange: this.onChangeStyleText
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: l10n.textObject.generateTextObject,
      checked: this.state.textObject.generateObjectText,
      onChange: this.onSwitchGenerateObjectText
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, l10n.textObject.auxiliaryElement), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: l10n.textObject.legend,
      name: 'legendTextObject',
      placeholder: l10n.textObject.legend,
      required: false,
      value: this.state.textObject.legendElement,
      _handleChange: this.onChangeLegendElement
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: l10n.textObject.digitalFormatting,
      name: 'formatageNumeriqueTextObject',
      placeholder: l10n.textObject.digitalFormatting,
      required: false,
      value: this.state.textObject.numericFormatElement,
      _handleChange: this.onChangeFormatageNumeriqueTextObject
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: l10n.textObject.mesureUnit,
      name: 'mesureUnityTextObject',
      placeholder: l10n.textObject.unit,
      required: false,
      value: this.state.textObject.unityMesureElement,
      _handleChange: this.onChangeUnityMesureElement
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: l10n.textObject.objectDisplayTextTooltip,
      checked: this.state.textObject.displayObjectInText,
      onChange: this.onSwitchDisplayObjectInText
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: l10n.textObject.objectDisplayInPermanentlyHover,
      checked: this.state.textObject.displayObjectPermanently,
      onChange: this.onSwitchDisplayObjectPermanently
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: l10n.textObject.colorText,
      checked: this.state.textObject.addColorTextElement,
      onChange: this.onSwitchAddColorTextElement
    }), this.state.textObject.addColorTextElement ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
      color: this.state.textObject.colorTextElement,
      keyInt: 0,
      text: l10n.textObject.colorTextOptional,
      _onChange: this.onChangeColorTextElement
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: l10n.textObject.backgroundColor,
      checked: this.state.textObject.addColorBackElement,
      onChange: this.onSwitchAddColorBackElement
    }), this.state.textObject.addColorBackElement ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
      color: this.state.textObject.colorBackElement,
      keyInt: 0,
      text: l10n.textObject.optionalBackgroundColor,
      _onChange: this.onChangeColorBackElement
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)));
  };

  return TextObjects;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TextObjects);

/***/ }),

/***/ "./components/coordinateSpaceInitial.tsx":
/*!***********************************************!*\
  !*** ./components/coordinateSpaceInitial.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Functions_createInputCoor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Functions/createInputCoor */ "./Functions/createInputCoor.tsx");
/* harmony import */ var Functions_editGoodParameter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Functions/editGoodParameter */ "./Functions/editGoodParameter.tsx");
/* harmony import */ var Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Functions/Input/inputText */ "./Functions/Input/inputText.tsx");
/* harmony import */ var Models_ArrayInputClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Models/ArrayInputClass */ "./Models/ArrayInputClass.tsx");
/* harmony import */ var Models_CoordinateSpaceInittialClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Models/CoordinateSpaceInittialClass */ "./Models/CoordinateSpaceInittialClass.tsx");







/**
 * class CoordinateSpaceInitial
 */

var CoordinateSpaceInitial =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CoordinateSpaceInitial, _super);

  function CoordinateSpaceInitial(props) {
    var _this = _super.call(this, props) || this;
    /**
     * Call parent to send arrayCoor data
     */


    _this.callBack = function () {
      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        arrayCoordinateSpaceInitial: _this.state.arrayCoor
      }));
    };
    /**
     * initialize a new CoordinateSpace Class
     */


    _this.initCoordinateSpaceClass = function () {
      var arrayCoordinateSpaceInitial = _this.props.options.arrayCoordinateSpaceInitial;

      var json = __webpack_require__(/*! Localization/fr.json */ "./Localization/fr.json");

      var newEspaceCoor = new Models_CoordinateSpaceInittialClass__WEBPACK_IMPORTED_MODULE_6__["CoordinateSpaceInitialClass"](arrayCoordinateSpaceInitial.id || 0, arrayCoordinateSpaceInitial.xMin || '0', arrayCoordinateSpaceInitial.xMax || '0', arrayCoordinateSpaceInitial.yMin || '0', arrayCoordinateSpaceInitial.yMax || '0', arrayCoordinateSpaceInitial.label || json.initialCoordonateSpace.label);
      return newEspaceCoor;
    };
    /**
     * test
     */


    _this.initInput = function () {
      var arrayInput = Object(Functions_createInputCoor__WEBPACK_IMPORTED_MODULE_2__["createInputCoor"])(0, true);
      var newArrayInput = new Models_ArrayInputClass__WEBPACK_IMPORTED_MODULE_5__["ArrayInputClass"](0, arrayInput);
      return newArrayInput;
    };
    /**
     * fill form in load
     */


    _this.fillForm = function () {
      var arrayInput = _this.state.arrayInput;
      var finalItem = [];
      var mapItems = arrayInput.getUneClassInput().map(function (obj) {
        return obj.getInputType() === 'text' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: obj.getId(),
          label: obj.getLabel(),
          name: obj.getName(),
          placeholder: obj.getPlaceholder() || '',
          required: obj.getRequired(),
          value: _this.getGoodValue(arrayInput.getId(), obj.getName()),
          _handleChange: function _handleChange(event) {
            return _this._handleChange(event.currentTarget.value, obj.getName(), arrayInput.getId());
          }
        }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
          key: obj.getId()
        });
      });
      finalItem = mapItems;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, finalItem);
    };

    _this.state = {
      arrayInput: _this.initInput(),
      arrayCoor: _this.initCoordinateSpaceClass()
    };
    return _this;
  }
  /**
   * Use function if value input change
   * @param {string} currentTarget new value of input
   * @param {string} name name of input
   * @param {number} index id of input
   */


  CoordinateSpaceInitial.prototype._handleChange = function (currentTarget, name, index) {
    var arrayCoor = this.state.arrayCoor;
    this.setState({
      arrayCoor: Object(Functions_editGoodParameter__WEBPACK_IMPORTED_MODULE_3__["editGoodParameter"])(name, arrayCoor, currentTarget)
    });
    this.callBack();
  };
  /**
   * Get value of input with state.arrayCoor
   * @param {number} id id of element
   * @param {string} param name of input
   * @returns {string} value of the array element
   */


  CoordinateSpaceInitial.prototype.getGoodValue = function (id, param) {
    var value;
    value = '';

    if (param.startsWith('positionXMin')) {
      value = this.state.arrayCoor.getXMin().toString();
    } else if (param.startsWith('positionXMax')) {
      value = this.state.arrayCoor.getXMax().toString();
    } else if (param.startsWith('positionYMin')) {
      value = this.state.arrayCoor.getYMin().toString();
    } else if (param.startsWith('positionYMax')) {
      value = this.state.arrayCoor.getYMax().toString();
    } else if (param.startsWith('label')) {
      value = this.state.arrayCoor.getLabel();
    }

    return value;
  };
  /**
   * HTML render
   */


  CoordinateSpaceInitial.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.fillForm());
  };

  return CoordinateSpaceInitial;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CoordinateSpaceInitial);

/***/ }),

/***/ "./components/dashboardData.tsx":
/*!**************************************!*\
  !*** ./components/dashboardData.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fetchButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetchButton */ "./components/fetchButton.tsx");




/**
 * def
 */

var DashboardData =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DashboardData, _super);

  function DashboardData(props) {
    var _this = _super.call(this, props) || this;
    /**
     * TODO
     */


    _this.targetsScrapper = function () {
      var scrapper = new _fetchButton__WEBPACK_IMPORTED_MODULE_3__["default"](_this.props);
      var jsonDashboard = _this.props.options.Json;
      jsonDashboard.panels.forEach(function (panel) {
        panel.targets.forEach(function (target) {
          _this.props.options.promGlobalTargets.push(target);
        });
      });
      var dateStamp = Date.now().toString();
      dateStamp = dateStamp.substring(0, dateStamp.length - 3);

      _this.props.options.promTargets.map(function (target) {
        var tmp = _this.props.options.promUrl + 'query?query=' + target.expr + '&time=' + dateStamp;

        _this.props.options.queryPromGlobal.push(tmp);
      });

      console.table(_this.props.options.queryPromGlobal);
      scrapper.fetchGlobalQuerry();
    };
    /**
    * TODO
    */


    _this.onContentChanged = function (_a) {
      var target = _a.target;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        contentJson: target.value
      }));
    };
    /**
    * TODO
    */


    _this.loadGlobal = function (onClick) {
      _this.props.options.panelList = [];
      var objectJSON = JSON.parse(_this.props.options.contentJson);

      _this.targetsScrapper();

      var newList = [];
      objectJSON.panels.forEach(function (panel) {
        newList.push({
          value: panel.id.toString(),
          label: panel.title
        });
      });
      var newListStep = [];
      objectJSON.timepicker.refresh_intervals.map(function (interval) {
        newListStep.push({
          value: interval,
          label: interval
        });
      });

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        Id: objectJSON.id,
        uid: objectJSON.uid,
        title: objectJSON.title,
        style: objectJSON.style,
        editable: objectJSON.editable,
        version: objectJSON.version,
        shemaVersion: objectJSON.shemaVersion,
        refresh: newListStep[0],
        timezone: objectJSON.timezone,
        panelList: newList,
        actualPanel: newList[0],
        Json: objectJSON,
        listStep: newListStep
      }));
    };
    /**
    * TODO
    */


    _this.onUidChanged = function (_a) {
      var target = _a.target;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        uid: target.value
      }));
    };
    /**
    * TODO
    */


    _this.onTitleChanged = function (_a) {
      var target = _a.target;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        title: target.value
      }));
    };
    /**
    * TODO
    */


    _this.onStyleChanged = function (_a) {
      var target = _a.target;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        style: target.value
      }));
    };
    /**
    * TODO
    */


    _this.onEditableChanged = function (_a) {
      var target = _a.target;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        editable: target.value
      }));
    };
    /**
    * TODO
    */


    _this.onVersionChanged = function (_a) {
      var target = _a.target;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        Id: target.value
      }));
    };
    /**
    * TODO
    */


    _this.onShemaVersionChanged = function (_a) {
      var target = _a.target;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        shemaVersion: target.value
      }));
    };

    return _this;
  }
  /**
   * result
   */


  DashboardData.prototype.render = function () {
    var options = this.props.options;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: 'section gf-form-group'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
      className: 'section-heading'
    }, "JSON about Dashboard"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: 'JSON',
      labelWidth: 8,
      inputWidth: 20,
      type: 'text',
      onChange: this.onContentChanged,
      value: options.contentJson || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: 'Loader',
      onClick: this.loadGlobal
    }, "Load JSON"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: 'uid',
      labelWidth: 8,
      inputWidth: 7,
      type: 'string',
      onChange: this.onUidChanged,
      value: options.uid || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: 'title',
      labelWidth: 8,
      inputWidth: 10,
      type: 'string',
      onChange: this.onTitleChanged,
      value: options.title || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: 'style',
      labelWidth: 8,
      inputWidth: 7,
      type: 'string',
      onChange: this.onStyleChanged,
      value: options.style || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: 'editable',
      labelWidth: 8,
      inputWidth: 7,
      type: 'string',
      onChange: this.onEditableChanged,
      value: options.editable || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: 'version',
      labelWidth: 8,
      inputWidth: 7,
      type: 'number',
      onChange: this.onVersionChanged,
      value: options.version || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: 'shemaversion',
      labelWidth: 8,
      inputWidth: 7,
      type: 'int',
      onChange: this.onShemaVersionChanged,
      value: options.shemaVersion || ''
    }));
  };

  return DashboardData;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DashboardData);

/***/ }),

/***/ "./components/fetchButton.tsx":
/*!************************************!*\
  !*** ./components/fetchButton.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Functions_fetchMetrics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Functions/fetchMetrics */ "./Functions/fetchMetrics.tsx");




/**
 * TODO
 */

var FetchButton =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FetchButton, _super);

  function FetchButton(props) {
    var _this = _super.call(this, props) || this;
    /**
     * Create and push the range query url
     */


    _this.makeQueryRange = function () {
      _this.props.options.queryPromRange = [];
      var dateStampStart = Date.parse(_this.props.options.timeRange.from).toString();
      dateStampStart = dateStampStart.substring(0, dateStampStart.length - 3);
      var dateStampEnd = Date.parse(_this.props.options.timeRange.to).toString();
      dateStampEnd = dateStampEnd.substring(0, dateStampEnd.length - 3);

      _this.props.options.promTargets.map(function (target) {
        var tmp = _this.props.options.promUrl + 'query_range?query=' + target.expr + '&start=' + dateStampStart + '&end=' + dateStampEnd + '&step=' + _this.props.options.refresh.label;

        _this.props.options.queryPromRange.push(tmp);
      }); // Console.table(this.props.options.queryPromRange);

    };
    /**
     * Create and push the query url
     */


    _this.makeQuery = function () {
      _this.props.options.queryProm = [];
      var dateStamp = Date.parse(_this.props.options.timeQuery).toString();
      dateStamp = dateStamp.substring(0, dateStamp.length - 3);

      _this.props.options.promTargets.map(function (target) {
        var tmp = _this.props.options.promUrl + 'query?query=' + target.expr + '&time=' + dateStamp;

        _this.props.options.queryProm.push(tmp);
      }); // Console.table(this.props.options.queryProm);

    };
    /**
     * Send the range query and stock the return
     */


    _this.fetchQuerryRange = function () {
      _this.makeQueryRange();

      _this.props.options.jsonQueryReturn = [];

      _this.props.options.queryPromRange.forEach(function (url) {
        fetch(url).then(function (response) {
          return response.json();
        }).then(function (result) {
          _this.props.options.jsonQueryReturn.push(result);
        })["catch"](function (error) {// Console.log(error)
        });
      });

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        promTargets: _this.props.options.promTargets
      }));

      console.log(_this.props.options.jsonQueryReturn);
    };
    /**
     * Send the query and stock the return
     */


    _this.fetchQuerry = function () {
      _this.makeQuery();

      _this.props.options.jsonQueryReturn = [];

      _this.props.options.queryProm.forEach(function (url) {
        fetch(url).then(function (response) {
          return response.json();
        }).then(function (result) {
          _this.props.options.jsonQueryReturn.push(result);
        })["catch"](function (error) {
          console.log(error);
        });
      });

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        promTargets: _this.props.options.promTargets
      }));

      console.log(_this.props.options.jsonQueryReturn);
    };
    /**
     * TODO work in progress
     */


    _this.fetchGlobalQuerry = function () {
      _this.props.options.jsonGlobalQueryReturn = [];

      _this.props.options.queryProm.forEach(function (url) {
        fetch(url).then(function (response) {
          return response.json();
        }).then(function (result) {
          console.log(result);

          _this.props.options.jsonGlobalQueryReturn.push(result);
        })["catch"](function (error) {
          console.log(error);
        });
      });
    };
    /**
     * Debug
     */


    _this.printJSON = function () {
      var e_1, _a;

      try {
        // take expr
        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.props.options.arrayCoordinateSpace), _c = _b.next(); !_c.done; _c = _b.next()) {
          var target = _c.value;
          target.mainMetric.expr = "rate(node_cpu_seconds_total{mode=\"system\"}[1m])";
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      console.log(_this.props.options.arrayCoordinateSpace[0].mainMetric.returnQuery);
      Object(Functions_fetchMetrics__WEBPACK_IMPORTED_MODULE_3__["reqMetricRegion"])(_this.props.options.arrayCoordinateSpace[0], _this.props);
      console.log(_this.props.options.arrayCoordinateSpace[0].mainMetric.returnQuery);
    };
    /**
     * Delet the whole targets selected
     */


    _this.deleteTargets = function () {
      _this.props.options.promTargets = [];

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        promTargets: _this.props.options.promTargets
      }));
    };

    return _this;
  }
  /**
   * result
   */


  FetchButton.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: 'section gf-form-groug'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: 'ButtonFetchRange',
      onClick: this.fetchQuerryRange
    }, "fetch range"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: 'ButtonFetchInstant',
      onClick: this.fetchQuerry
    }, "fetch instant"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: 'ButtonDelTargets',
      variant: 'danger',
      onClick: this.deleteTargets
    }, "delete targets"));
  };

  return FetchButton;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FetchButton);

/***/ }),

/***/ "./components/linkForm.tsx":
/*!*********************************!*\
  !*** ./components/linkForm.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Functions_Input_inputTextLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Functions/Input/inputTextLink */ "./Functions/Input/inputTextLink.tsx");
/* harmony import */ var Functions_Input_inputButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Functions/Input/inputButton */ "./Functions/Input/inputButton.tsx");
/* harmony import */ var Models_ArrayInputSelectableClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Models/ArrayInputSelectableClass */ "./Models/ArrayInputSelectableClass.tsx");
/* harmony import */ var Functions_Input_inputSelectLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Functions/Input/inputSelectLink */ "./Functions/Input/inputSelectLink.tsx");
/* harmony import */ var _Functions_Input_inputSeriesColorPickerLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Functions/Input/inputSeriesColorPickerLink */ "./Functions/Input/inputSeriesColorPickerLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var Models_LinkClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Models/LinkClass */ "./Models/LinkClass.tsx");
/* harmony import */ var Functions_createInputsLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Functions/createInputsLink */ "./Functions/createInputsLink.tsx");
/* harmony import */ var Functions_editGoodParameterLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Functions/editGoodParameterLink */ "./Functions/editGoodParameterLink.tsx");
/* harmony import */ var Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Models/TextObjectClass */ "./Models/TextObjectClass.tsx");
/* harmony import */ var Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Models/LinkURLClass */ "./Models/LinkURLClass.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }














/**
 * IndexParametrage
 */

var LinkForm =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LinkForm, _super);

  function LinkForm(props) {
    var _this = _super.call(this, props) || this;
    /**
     * to do
     */


    _this.callBack = function () {
      _this.props.callBackFromParent(_this.state.arrayLinkClass);
    };
    /**
     * to do
     */


    _this.loadCoorParent = function () {
      var e_1, _a;

      var oldArrayLinkClass = _this.props.oldArrayLinkClass;

      if (oldArrayLinkClass.length === 0 || _this.state.debug === true) {
        if (!_this.state.debug) {
          _this.setState(function (prevState) {
            return {
              debug: !prevState.debug
            };
          });
        }

        return;
      }

      var _loop_1 = function _loop_1(element) {
        setTimeout(function () {
          _this.addInput(element.id, element.defineHowToGetCoordonate, element.orientationLink, element.pointAPositionX, element.pointAPositionY, element.colorCoordinateA, element.pointBPositionX, element.pointBPositionY, element.colorCoordinateB, element.pointIn, element.pointOut, element.regionIn, element.colorRegionIn, element.regionOut, element.colorRegionOut, element.labelLinkA, element.positionXLabelA, element.positionYLabelA, element.labelLinkB, element.positionXLabelB, element.positionYLabelB);
        }, 100);
      };

      try {
        for (var oldArrayLinkClass_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(oldArrayLinkClass), oldArrayLinkClass_1_1 = oldArrayLinkClass_1.next(); !oldArrayLinkClass_1_1.done; oldArrayLinkClass_1_1 = oldArrayLinkClass_1.next()) {
          var element = oldArrayLinkClass_1_1.value;

          _loop_1(element);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (oldArrayLinkClass_1_1 && !oldArrayLinkClass_1_1.done && (_a = oldArrayLinkClass_1["return"])) _a.call(oldArrayLinkClass_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      _this.setState(function (prevState) {
        return {
          debug: !prevState.debug
        };
      });
    };
    /**
     * add inputs for a new coordiante
     */


    _this.addInput = function (id, defineHowToGetCoordonate, orientationLink, pointAPositionX, pointAPositionY, colorCoordinateA, pointBPositionX, pointBPositionY, colorCoordinateB, pointIn, pointOut, regionIn, colorRegionIn, regionOut, colorRegionOut, labelLinkA, positionXLabelA, positionYLabelA, labelLinkB, positionXLabelB, positionYLabelB) {
      var num = id || _this.state.index;
      var initTextObject = new Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_11__["TextObject"]('', '', '', false, '', '', '', false, '', '', '', false, false, false, '', false, '');
      var parametrageMetric = new Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_12__["LinkURLClass"]('', '', '');
      var finalArray = Object(Functions_createInputsLink__WEBPACK_IMPORTED_MODULE_9__["createInputsLink"])(num, _this.defineDataPoint(), _this.defineDataRegion());

      _this.setState(function (prevState) {
        return {
          arrayLinkClass: prevState.arrayLinkClass.concat(new Models_LinkClass__WEBPACK_IMPORTED_MODULE_8__["LinkClass"](num, parametrageMetric, '', [], '', initTextObject, {
            'key': '',
            'unit': '',
            'format': '',
            'keyValue': ''
          }, [], false, false, false, 'link' + num.toString(), defineHowToGetCoordonate || {}, orientationLink || {
            label: 'Unidirectional',
            value: 'AB'
          }, pointAPositionX || '0', pointAPositionY || '0', colorCoordinateA || '#5794F2', pointBPositionX || '0', pointBPositionY || '0', colorCoordinateB || '#E54658', pointIn || {}, pointOut || {}, regionIn || {}, colorRegionIn || '#5794F2', regionOut || {}, colorRegionOut || '#E54658', labelLinkA || '', positionXLabelA || '0', positionYLabelA || '0', labelLinkB || '', positionXLabelB || '0', positionYLabelB || '0')),
          arrayInput: prevState.arrayInput.concat([new Models_ArrayInputSelectableClass__WEBPACK_IMPORTED_MODULE_4__["ArrayInputSelectableClass"](num, finalArray)]),
          index: (id || _this.state.index) + 1
        };
      });
    };
    /**
     * dsgs
     */


    _this.addTestInput = function (event) {
      _this.addInput(_this.state.index);
    };
    /**
     * Delete array input and value
     * @param {event} event event click delete button
     */


    _this.deleteOwnInput = function (event) {
      var e_2, _a;

      var arrayInput = _this.state.arrayInput;
      var id = event.currentTarget.id;

      var _loop_2 = function _loop_2(obj) {
        var e_3, _a;

        try {
          for (var _b = (e_3 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(obj.uneClassInput)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var line = _c.value;

            if (line.input_type === 'button') {
              if (line.id === id) {
                var updateArrayInput = arrayInput.filter(function (value) {
                  return value.id !== obj.id;
                });

                _this.setState({
                  arrayInput: updateArrayInput
                });

                _this.deleteArrayLinkCLass(parseInt(id, 10));

                return {
                  value: void 0
                };
              }
            }
          }
        } catch (e_3_1) {
          e_3 = {
            error: e_3_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
          } finally {
            if (e_3) throw e_3.error;
          }
        }
      };

      try {
        for (var arrayInput_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arrayInput), arrayInput_1_1 = arrayInput_1.next(); !arrayInput_1_1.done; arrayInput_1_1 = arrayInput_1.next()) {
          var obj = arrayInput_1_1.value;

          var state_1 = _loop_2(obj);

          if (_typeof(state_1) === "object") return state_1.value;
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (arrayInput_1_1 && !arrayInput_1_1.done && (_a = arrayInput_1["return"])) _a.call(arrayInput_1);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
    };

    _this.state = {
      arrayInput: [],
      arrayLinkClass: [],
      debug: false,
      index: 1,
      openCollapseLink: false
    };
    return _this;
  }

  LinkForm.prototype.defineDataPoint = function () {
    var arrayPointClass = this.props.arrayPointClass;
    var optionPointNull = {
      label: 'No selected point'
    };
    var arrayOptionsPoint = [];
    arrayOptionsPoint.push(optionPointNull);
    arrayPointClass.forEach(function (point) {
      var optionPoint = {
        label: point.name,
        value: point
      };
      arrayOptionsPoint.push(optionPoint);
    });
    return arrayOptionsPoint;
  };

  LinkForm.prototype.defineDataRegion = function () {
    var arrayCoordinateSpace = this.props.arrayCoordinateSpace;
    var optionRegionNull = {
      label: 'No selected region'
    };
    var arrayOptionsRegion = [];
    arrayOptionsRegion.push(optionRegionNull);
    arrayCoordinateSpace.forEach(function (region) {
      var optionRegion = {
        label: region.label,
        value: region
      };
      arrayOptionsRegion.push(optionRegion);
    });
    return arrayOptionsRegion;
  };
  /**
   * Delete array coordinate in state.arrayLinkClass
   * @param {number} id id of object element to delete
   */


  LinkForm.prototype.deleteArrayLinkCLass = function (id) {
    var _this = this;

    var newLinkClass = this.state.arrayLinkClass.filter(function (value) {
      return value.id !== id;
    });
    this.setState({
      arrayLinkClass: newLinkClass
    });
    setTimeout(function () {
      _this.callBack();
    }, 100);
  };
  /**
   * Use function if value input change
   * @param {string} currentTarget new value of input
   * @param {string} name name of input
   * @param {number} index id of input
   */


  LinkForm.prototype._handleChange = function (currentTarget, name, index) {
    var e_4, _a;

    var i;
    i = 0;
    var copyOfarrayLinkClass = this.state.arrayLinkClass.slice();

    try {
      for (var copyOfarrayLinkClass_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(copyOfarrayLinkClass), copyOfarrayLinkClass_1_1 = copyOfarrayLinkClass_1.next(); !copyOfarrayLinkClass_1_1.done; copyOfarrayLinkClass_1_1 = copyOfarrayLinkClass_1.next()) {
        var line = copyOfarrayLinkClass_1_1.value;

        if (line.id === index) {
          copyOfarrayLinkClass[i] = Object(Functions_editGoodParameterLink__WEBPACK_IMPORTED_MODULE_10__["editGoodParameterLink"])(name, copyOfarrayLinkClass[i], currentTarget, {});
          break;
        }

        i++;
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (copyOfarrayLinkClass_1_1 && !copyOfarrayLinkClass_1_1.done && (_a = copyOfarrayLinkClass_1["return"])) _a.call(copyOfarrayLinkClass_1);
      } finally {
        if (e_4) throw e_4.error;
      }
    }

    this.setState({
      arrayLinkClass: copyOfarrayLinkClass
    });
    this.callBack();
  };
  /**
   * Get value of input with state.arrayLinkClass
   * @param {number} id id of element
   * @param {string} param name of input
   * @returns {string} value of the array element
   */


  LinkForm.prototype.getGoodValue = function (id, name) {
    var e_5, _a;

    var value;
    var valueSelect;
    var idx = -1;
    var index = 0;
    value = '';
    valueSelect = {};

    try {
      for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.state.arrayLinkClass), _c = _b.next(); !_c.done; _c = _b.next()) {
        var line = _c.value;

        if (line.id === id) {
          idx = index;
          break;
        }

        ++index;
      }
    } catch (e_5_1) {
      e_5 = {
        error: e_5_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_5) throw e_5.error;
      }
    }

    if (idx === -1) {
      return value;
    }

    if (name.startsWith('getCoordinate') || name.startsWith('pointIn') || name.startsWith('pointOut') || name.startsWith('regionIn') || name.startsWith('regionOut') || name.startsWith('orientationLink')) {
      if (name.startsWith('getCoordinate')) {
        valueSelect = this.state.arrayLinkClass[idx].defineHowToGetCoordonate;
      } else if (name.startsWith('pointIn')) {
        valueSelect = this.state.arrayLinkClass[idx].pointIn;
      } else if (name.startsWith('pointOut')) {
        valueSelect = this.state.arrayLinkClass[idx].pointOut;
      } else if (name.startsWith('regionIn')) {
        valueSelect = this.state.arrayLinkClass[idx].regionIn;
      } else if (name.startsWith('regionOut')) {
        valueSelect = this.state.arrayLinkClass[idx].regionOut;
      } else if (name.startsWith('orientationLink')) {
        valueSelect = this.state.arrayLinkClass[idx].orientationLink;
      }

      return valueSelect;
    } else {
      if (name.startsWith('pointAX')) {
        value = this.state.arrayLinkClass[idx].pointAPositionX;
      } else if (name.startsWith('pointAY')) {
        value = this.state.arrayLinkClass[idx].pointAPositionY;
      } else if (name.startsWith('pointBX')) {
        value = this.state.arrayLinkClass[idx].pointBPositionX;
      } else if (name.startsWith('pointBY')) {
        value = this.state.arrayLinkClass[idx].pointBPositionY;
      } else if (name.startsWith('colorCoordinateA')) {
        value = this.state.arrayLinkClass[idx].colorCoordinateA;
      } else if (name.startsWith('colorCoordinateB')) {
        value = this.state.arrayLinkClass[idx].colorCoordinateB;
      } else if (name.startsWith('colorRegionIn')) {
        value = this.state.arrayLinkClass[idx].colorRegionIn;
      } else if (name.startsWith('colorRegionOut')) {
        value = this.state.arrayLinkClass[idx].colorRegionOut;
      } else if (name.startsWith('labelLinkA')) {
        value = this.state.arrayLinkClass[idx].labelLinkA;
      } else if (name.startsWith('labelLinkB')) {
        value = this.state.arrayLinkClass[idx].labelLinkB;
      } else if (name.startsWith('positionXLabelLinkA')) {
        value = this.state.arrayLinkClass[idx].positionXLabelA;
      } else if (name.startsWith('positionYLabelLinkA')) {
        value = this.state.arrayLinkClass[idx].positionYLabelA;
      } else if (name.startsWith('positionXLabelLinkB')) {
        value = this.state.arrayLinkClass[idx].positionXLabelB;
      } else if (name.startsWith('positionYLabelLinkB')) {
        value = this.state.arrayLinkClass[idx].positionYLabelB;
      }

      return value;
    }
  };
  /**
   * create dynamic input
   */


  LinkForm.prototype.displayListInputsLink = function () {
    var e_6, _a;

    var _this = this;

    var arrayInput = this.state.arrayInput;
    var finalItem = [];

    var _loop_3 = function _loop_3(line) {
      var mapItems = line.uneClassInput.map(function (obj) {
        return obj.input_type === 'text' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputTextLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: obj.id,
          label: obj.label,
          name: obj.name,
          placeholder: obj.placeholder || '',
          required: obj.required,
          value: _this.getGoodValue(line.id, obj.name),
          _handleChange: function _handleChange(event) {
            _this._handleChange(event.currentTarget.value, obj.name, line.id);
          },
          defineHowToGetCoordinate: _this.getGoodValue(line.id, 'getCoordinate').value
        }) : obj.input_type === 'select' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSelectLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: obj.id,
          _onChange: function _onChange(value, name, index) {
            var e_7, _a;

            var i;
            i = 0;

            var copyOfarrayLinkClass = _this.state.arrayLinkClass.slice();

            try {
              for (var copyOfarrayLinkClass_2 = (e_7 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(copyOfarrayLinkClass)), copyOfarrayLinkClass_2_1 = copyOfarrayLinkClass_2.next(); !copyOfarrayLinkClass_2_1.done; copyOfarrayLinkClass_2_1 = copyOfarrayLinkClass_2.next()) {
                var line_1 = copyOfarrayLinkClass_2_1.value;

                if (line_1.id === index) {
                  copyOfarrayLinkClass[i] = Object(Functions_editGoodParameterLink__WEBPACK_IMPORTED_MODULE_10__["editGoodParameterLink"])(name, copyOfarrayLinkClass[i], value.value || '', value || {});
                  break;
                }

                i++;
              }
            } catch (e_7_1) {
              e_7 = {
                error: e_7_1
              };
            } finally {
              try {
                if (copyOfarrayLinkClass_2_1 && !copyOfarrayLinkClass_2_1.done && (_a = copyOfarrayLinkClass_2["return"])) _a.call(copyOfarrayLinkClass_2);
              } finally {
                if (e_7) throw e_7.error;
              }
            }

            _this.setState({
              arrayLinkClass: copyOfarrayLinkClass
            });

            _this.callBack();
          },
          name: obj.name,
          index: line.id,
          data: obj.optionValues,
          defaultValue: _this.getGoodValue(line.id, obj.name),
          defineHowToGetCoordinate: _this.getGoodValue(line.id, 'getCoordinate').value,
          label: obj.label,
          orientationLink: _this.getGoodValue(line.id, 'orientationLink').value
        }) : obj.input_type === 'color' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Functions_Input_inputSeriesColorPickerLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
          key: obj.id,
          keyInt: parseInt(obj.id, 10),
          color: _this.getGoodValue(line.id, obj.name),
          text: obj.label,
          width: 10,
          _onChange: function _onChange(keyInt, newColor) {
            var e_8, _a;

            var i;
            i = 0;

            var copyOfArrayLien = _this.state.arrayLinkClass.slice();

            try {
              for (var copyOfArrayLien_1 = (e_8 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(copyOfArrayLien)), copyOfArrayLien_1_1 = copyOfArrayLien_1.next(); !copyOfArrayLien_1_1.done; copyOfArrayLien_1_1 = copyOfArrayLien_1.next()) {
                var line_2 = copyOfArrayLien_1_1.value;

                if (line_2.id === keyInt) {
                  copyOfArrayLien[i] = Object(Functions_editGoodParameterLink__WEBPACK_IMPORTED_MODULE_10__["editGoodParameterLink"])(obj.name, copyOfArrayLien[i], newColor, {});
                  break;
                }

                i++;
              }
            } catch (e_8_1) {
              e_8 = {
                error: e_8_1
              };
            } finally {
              try {
                if (copyOfArrayLien_1_1 && !copyOfArrayLien_1_1.done && (_a = copyOfArrayLien_1["return"])) _a.call(copyOfArrayLien_1);
              } finally {
                if (e_8) throw e_8.error;
              }
            }

            _this.setState({
              arrayLinkClass: copyOfArrayLien
            });

            _this.callBack();

            obj.setDefaultValueColor(newColor);
          },
          defineHowToGetCoordinate: _this.getGoodValue(line.id, 'getCoordinate').value,
          name: obj.name
        }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: obj.id,
          label: obj.label,
          value: obj.value || '',
          name: obj.name,
          required: obj.required,
          _handleChange: _this.deleteOwnInput,
          id: obj.id,
          withLabel: true
        });
      });
      var divKey = 'inputCoor' + line.id;
      var newInput = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: divKey,
        className: 'inputCoor'
      }, mapItems);
      finalItem = finalItem.concat(newInput);
    };

    try {
      for (var arrayInput_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arrayInput), arrayInput_2_1 = arrayInput_2.next(); !arrayInput_2_1.done; arrayInput_2_1 = arrayInput_2.next()) {
        var line = arrayInput_2_1.value;

        _loop_3(line);
      }
    } catch (e_6_1) {
      e_6 = {
        error: e_6_1
      };
    } finally {
      try {
        if (arrayInput_2_1 && !arrayInput_2_1.done && (_a = arrayInput_2["return"])) _a.call(arrayInput_2);
      } finally {
        if (e_6) throw e_6.error;
      }
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, finalItem);
  };
  /**
   * render()
   */


  LinkForm.prototype.render = function () {
    this.loadCoorParent();
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.displayListInputsLink(), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: 'buttonAddCoor'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      onClick: this.addTestInput
    }, "Add Link")));
  };

  return LinkForm;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LinkForm);

/***/ }),

/***/ "./components/mainTarget.tsx":
/*!***********************************!*\
  !*** ./components/mainTarget.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);



/**
 * def
 */

var MainTarget =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MainTarget, _super);

  function MainTarget(props) {
    var _this = _super.call(this, props) || this;

    _this.onMainTargetChanged = function (event) {
      var newData = {
        expr: ''
      };
      newData.expr = event.currentTarget.value;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        mainTarget: newData
      }));
    };

    _this.makeQuery = function () {
      _this.props.options.queryProm = [];
      var dateStamp = Date.parse(_this.props.options.timeQuery).toString();
      dateStamp = dateStamp.substring(0, dateStamp.length - 3);
      _this.props.options.mainQueryProm = _this.props.options.promUrl + 'query?query=' + _this.props.options.mainTarget.expr + '&time=' + dateStamp; // Console.log(this.props.options.mainQueryProm);
    };

    _this.fetchMainQuerry = function () {
      _this.makeQuery();

      fetch(_this.props.options.mainQueryProm).then(function (response) {
        return response.json();
      }).then(function (result) {
        // Console.log(result);
        _this.props.options.mainQueryReturn = result;
      })["catch"](function (error) {
        console.log(error);
      });

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        mainQueryReturn: _this.props.options.mainQueryReturn
      }));

      console.log(_this.props.options.mainQueryReturn);
    };

    return _this;
  }
  /**
   * result
   */


  MainTarget.prototype.render = function () {
    var options = this.props.options;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: 'section gf-form-group'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: 'target metric',
      labelWidth: 10,
      inputWidth: 20,
      onChange: this.onMainTargetChanged.bind(this),
      type: 'string',
      value: options.mainTarget.expr || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: 'ButtonFetchInstant',
      onClick: this.fetchMainQuerry
    }, "fetch instant"));
  };

  return MainTarget;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MainTarget);

/***/ }),

/***/ "./components/objectVisibility.tsx":
/*!*****************************************!*\
  !*** ./components/objectVisibility.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Functions_Input_inputSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Functions/Input/inputSelect */ "./Functions/Input/inputSelect.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__);




/**
 * def
 */

var ObjectVisibility =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ObjectVisibility, _super);

  function ObjectVisibility(props) {
    var _this = _super.call(this, props) || this;

    _this.onChangeRegionTextSelectDefault = function (value) {
      _this.setState({
        regionTextSelectDefault: value
      });
    };
    /**
     * change abscisse value
     */


    _this.onChangeAbscissesPointRegionText = function (event) {
      _this.setState({
        abscissesPointRegionTexte: event.currentTarget.value
      });
    };

    _this.onChangeOrdonneesPointRegionText = function (event) {
      _this.setState({
        ordonneesPointRegionTexte: event.currentTarget.value
      });
    };

    _this.onChangeCenterBubbleSelect = function (value) {
      _this.setState({
        centerBubbleSelectDefault: value
      });
    };

    _this.onChangeCenterBubbleInputOrdonnees = function (event) {
      _this.setState({
        centerBubbleInputOrdonnees: event.currentTarget.value
      });
    };

    _this.onChangeCenterBubbleInputAbscisses = function (event) {
      _this.setState({
        centerBubbleInputAbscisses: event.currentTarget.value
      });
    };

    _this.onChangeNvCalqueSelect = function (value) {
      _this.setState({
        nvCalqueSelectDefault: value
      });
    };

    _this.onChangeCourbureInputSelect = function (value) {
      _this.setState({
        courbureSelectDefault: value
      });
    };

    _this.onChangeCourbureInput = function (event) {
      _this.setState({
        courbureInput: event.currentTarget.value
      });
    };

    _this.onChangeNvCalque = function (event) {
      _this.setState({
        nvCalqueInput: event.currentTarget.value
      });
    };

    _this.state = {
      regionTextSelect: [{
        value: 'value1',
        label: 'Value 1'
      }, {
        value: 'value2',
        label: 'Value 2'
      }, {
        value: 'value3',
        label: 'Value 3'
      }],
      regionTextSelectDefault: {
        value: 'value1',
        label: 'Value 1'
      },
      abscissesPointRegionTexte: '',
      ordonneesPointRegionTexte: '',
      centerBubbleSelect: [],
      centerBubbleSelectDefault: {},
      centerBubbleInputOrdonnees: '',
      centerBubbleInputAbscisses: '',
      nvCalqueSelect: [],
      nvCalqueSelectDefault: {},
      nvCalqueInput: '',
      courbureSelect: [],
      courbureSelectDefault: {},
      courbureInput: ''
    };
    return _this;
  }
  /**
   * result
   */


  ObjectVisibility.prototype.render = function () {
    var l10s = __webpack_require__(/*! Localization/en.json */ "./Localization/en.json");

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, l10s.objectVisibility.decalCenterPointTextRegion), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Functions_Input_inputSelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
      _onChange: this.onChangeRegionTextSelectDefault,
      data: this.state.regionTextSelect,
      defaultValue: this.state.regionTextSelectDefault
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["FormField"], {
      label: l10s.basics.abscisses,
      labelWidth: 15,
      type: 'text',
      required: false,
      name: 'abscissesPointRegionTexte',
      onChange: this.onChangeAbscissesPointRegionText,
      value: this.state.abscissesPointRegionTexte
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["FormField"], {
      label: l10s.basics.ordonnees,
      labelWidth: 15,
      type: 'text',
      required: false,
      name: 'ordonneesPointRegionTexte',
      onChange: this.onChangeOrdonneesPointRegionText,
      value: this.state.ordonneesPointRegionTexte
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, l10s.objectVisibility.decalCenterBubble), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Functions_Input_inputSelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
      _onChange: this.onChangeCenterBubbleSelect,
      data: this.state.centerBubbleSelect,
      defaultValue: this.state.centerBubbleSelectDefault
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["FormField"], {
      label: l10s.basics.abscisses,
      labelWidth: 15,
      type: 'text',
      required: false,
      name: 'centerBubbleInputAbscisses',
      onChange: this.onChangeCenterBubbleInputAbscisses,
      value: this.state.centerBubbleInputAbscisses
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["FormField"], {
      label: l10s.basics.ordonnees,
      labelWidth: 15,
      type: 'text',
      required: false,
      name: 'centerBubbleInputOrdonnees',
      onChange: this.onChangeCenterBubbleInputOrdonnees,
      value: this.state.centerBubbleInputOrdonnees
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, l10s.objectVisibility.forceCalqueLevel), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Functions_Input_inputSelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
      _onChange: this.onChangeNvCalqueSelect,
      data: this.state.nvCalqueSelect,
      defaultValue: this.state.nvCalqueSelectDefault
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["FormField"], {
      label: l10s.objectVisibility.calcLevel,
      labelWidth: 15,
      type: 'text',
      required: false,
      name: 'nvCalque',
      onChange: this.onChangeNvCalque,
      value: this.state.nvCalqueInput
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, l10s.objectVisibility.forceCourbSpecificLink), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Functions_Input_inputSelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
      _onChange: this.onChangeCourbureInputSelect,
      data: this.state.courbureSelect,
      defaultValue: this.state.courbureSelectDefault
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["FormField"], {
      label: l10s.objectVisibility.courbure,
      labelWidth: 15,
      type: 'text',
      required: false,
      name: 'courbureInput',
      onChange: this.onChangeCourbureInput,
      value: this.state.courbureInput
    })));
  };

  return ObjectVisibility;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ObjectVisibility);

/***/ }),

/***/ "./components/orientedLinkForm.tsx":
/*!*****************************************!*\
  !*** ./components/orientedLinkForm.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Models_ArrayInputSelectableClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Models/ArrayInputSelectableClass */ "./Models/ArrayInputSelectableClass.tsx");
/* harmony import */ var Functions_Input_inputTextOrientedLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Functions/Input/inputTextOrientedLink */ "./Functions/Input/inputTextOrientedLink.tsx");
/* harmony import */ var Functions_Input_inputSelectOrientedLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Functions/Input/inputSelectOrientedLink */ "./Functions/Input/inputSelectOrientedLink.tsx");
/* harmony import */ var Functions_Input_inputSeriesColorPickerOrientedLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Functions/Input/inputSeriesColorPickerOrientedLink */ "./Functions/Input/inputSeriesColorPickerOrientedLink.tsx");
/* harmony import */ var Functions_Input_inputButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Functions/Input/inputButton */ "./Functions/Input/inputButton.tsx");
/* harmony import */ var Models_OrientedLinkClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Models/OrientedLinkClass */ "./Models/OrientedLinkClass.tsx");
/* harmony import */ var Functions_createInputsOrientedLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Functions/createInputsOrientedLink */ "./Functions/createInputsOrientedLink.tsx");
/* harmony import */ var Functions_editGoodParameterOrientedLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Functions/editGoodParameterOrientedLink */ "./Functions/editGoodParameterOrientedLink.tsx");
/* harmony import */ var Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Models/TextObjectClass */ "./Models/TextObjectClass.tsx");
/* harmony import */ var Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Models/LinkURLClass */ "./Models/LinkURLClass.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Parametrage_parametresGeneriques__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Parametrage/parametresGeneriques */ "./components/Parametrage/parametresGeneriques.tsx");
/* harmony import */ var _Parametrage_manageLowerLimit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Parametrage/manageLowerLimit */ "./components/Parametrage/manageLowerLimit.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
















/**
 * IndexParametrage
 */

var OrientedLinkForm =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OrientedLinkForm, _super);

  function OrientedLinkForm(props) {
    var _this = _super.call(this, props) || this;
    /**
     * to do
     */


    _this.callBack = function () {
      _this.props.callBackFromParent(_this.state.arrayOrientedLinkClass);
    }; // /**
    //  * to do
    //  */
    // public callBackIdOrientedLink = () => {
    // 	this.props.callBackIdOrientedLink(this.state.indexOrientedLink);
    // }
    // public setAsyncOrientedLink = (element: OrientedLinkClass) => {
    // 	return Promise.resolve('Success').then(() => {
    // 		this.addInput(element.id, element.orientationLink, element.pointAPositionX,
    // 			element.pointAPositionY, element.colorCoordinateA, element.pointBPositionX,
    // 			element.pointBPositionY, element.colorCoordinateB, element.pointIn,
    // 			element.pointOut, element.regionIn, element.regionOut);
    // 	});
    // }
    // public setAsyncIndex = (state: {
    // 	index: number,
    // }) => {
    // 	return new Promise((resolve) => {
    // 		this.setState(state, resolve);
    // 	});
    // }
    // public setAsyncOldArrayInput = (state: {
    // 	oldArrayOrientedLinkClass: OrientedLinkClass[],
    // }) => {
    // 	return new Promise((resolve) => {
    // 		this.setState(state, resolve);
    // 	});
    // }
    // public setAsyncArrayInput = (state: {
    // 	arrayInput: ArrayInputSelectableClass[],
    // }) => {
    // 	return new Promise((resolve) => {
    // 		this.setState(state, resolve);
    // 	});
    // }
    // /**
    //  * to do
    //  */
    // public loadCoorParent = async () => {
    // 	const { oldArrayOrientedLinkClass } = this.props;
    // 	if (oldArrayOrientedLinkClass.length === 0) {
    // 		return;
    // 	}
    // 	await this.setAsyncOldArrayInput({oldArrayOrientedLinkClass: []});
    // 	await this.setAsyncArrayInput({arrayInput: []});
    // 	await this.setAsyncIndex({index: 0});
    // 	for (const element of oldArrayOrientedLinkClass) {
    // 		if (element.id) {
    // 			await this.setAsyncOrientedLink(element);
    // 		}
    // 	}
    // }

    /**
    * to do
    */


    _this.loadCoorParent = function () {
      var e_1, _a;

      var oldArrayOrientedLinkClass = _this.props.oldArrayOrientedLinkClass;

      if (oldArrayOrientedLinkClass.length === 0 || _this.state.debug === true) {
        if (!_this.state.debug) {
          _this.setState(function (prevState) {
            return {
              debug: !prevState.debug
            };
          });
        }

        return;
      }

      var _loop_1 = function _loop_1(element) {
        setTimeout(function () {
          _this.addInput(element.id, element.orientationLink, element.pointAPositionX, element.pointAPositionY, element.colorCoordinateA, element.pointBPositionX, element.pointBPositionY, element.colorCoordinateB, element.pointIn, element.pointOut, element.regionIn, element.regionOut, element.mainMetric.refId, element.mainMetric.key, element.mainMetric.keyValue, element.textObj, element.lowerLimit);
        }, 100);
      };

      try {
        for (var oldArrayOrientedLinkClass_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(oldArrayOrientedLinkClass), oldArrayOrientedLinkClass_1_1 = oldArrayOrientedLinkClass_1.next(); !oldArrayOrientedLinkClass_1_1.done; oldArrayOrientedLinkClass_1_1 = oldArrayOrientedLinkClass_1.next()) {
          var element = oldArrayOrientedLinkClass_1_1.value;

          _loop_1(element);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (oldArrayOrientedLinkClass_1_1 && !oldArrayOrientedLinkClass_1_1.done && (_a = oldArrayOrientedLinkClass_1["return"])) _a.call(oldArrayOrientedLinkClass_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      _this.setState(function (prevState) {
        return {
          debug: !prevState.debug
        };
      });
    };
    /**
     * add inputs for a new coordiante
     */


    _this.addInput = function (id, orientationLink, pointAPositionX, pointAPositionY, colorCoordinateA, pointBPositionX, pointBPositionY, colorCoordinateB, pointIn, pointOut, regionIn, regionOut, refIdMainMetric, keyMainMetric, keyValueMainMetric, textObj, seuil) {
      var num = id || _this.props.options.indexOrientedLink + 1;
      var finalArray = Object(Functions_createInputsOrientedLink__WEBPACK_IMPORTED_MODULE_8__["createInputsOrientedLink"])(num, _this.defineDataRegion(), _this.defineDataPoint());
      var initTextObject = textObj || new Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_10__["TextObject"]('', '', '', false, '', '', '', false, '', '', '', false, false, false, '', false, '');
      var parametrageMetric = new Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_11__["LinkURLClass"]('', '', '');

      _this.setState(function (prevState) {
        return {
          arrayOrientedLinkClass: prevState.arrayOrientedLinkClass.concat(new Models_OrientedLinkClass__WEBPACK_IMPORTED_MODULE_7__["OrientedLinkClass"](num, parametrageMetric, '', seuil || [], '', initTextObject, {
            'key': keyMainMetric || '',
            'unit': '',
            'format': '',
            'keyValue': keyValueMainMetric || '',
            'refId': refIdMainMetric || ''
          }, [], false, false, false, 'orientedLink' + num.toString(), orientationLink || {
            label: 'double',
            value: 'double'
          }, pointAPositionX || '0', pointAPositionY || '0', colorCoordinateA || '#5794F2', pointBPositionX || '0', pointBPositionY || '0', colorCoordinateB || '#E54658', '', '', pointIn || {}, pointOut || {}, regionIn || {}, regionOut || {})),
          arrayInput: prevState.arrayInput.concat([new Models_ArrayInputSelectableClass__WEBPACK_IMPORTED_MODULE_2__["ArrayInputSelectableClass"](num, finalArray)])
        };
      });

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        indexOrientedLink: num
      }));
    };
    /**
     * Delete array input and value
     * @param {event} event event click delete button
     */


    _this.deleteOwnInput = function (event) {
      var e_2, _a;

      var arrayInput = _this.state.arrayInput;
      var id = event.currentTarget.id;

      var _loop_2 = function _loop_2(obj) {
        var e_3, _a;

        try {
          for (var _b = (e_3 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(obj.uneClassInput)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var line = _c.value;

            if (line.input_type === 'button') {
              if (line.id === id) {
                var updateArrayInput = arrayInput.filter(function (value) {
                  return value.id !== obj.id;
                });

                _this.setState({
                  arrayInput: updateArrayInput
                });

                _this.deleteArrayOrientedLinkClass(parseInt(id, 10));

                return {
                  value: void 0
                };
              }
            }
          }
        } catch (e_3_1) {
          e_3 = {
            error: e_3_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
          } finally {
            if (e_3) throw e_3.error;
          }
        }
      };

      try {
        for (var arrayInput_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arrayInput), arrayInput_1_1 = arrayInput_1.next(); !arrayInput_1_1.done; arrayInput_1_1 = arrayInput_1.next()) {
          var obj = arrayInput_1_1.value;

          var state_1 = _loop_2(obj);

          if (_typeof(state_1) === "object") return state_1.value;
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (arrayInput_1_1 && !arrayInput_1_1.done && (_a = arrayInput_1["return"])) _a.call(arrayInput_1);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
    };
    /** update lower limit */


    _this.callBackManageLowerLimit = function (coordiante, id) {
      var newValue = _this.state.arrayOrientedLinkClass[id || 0];
      newValue.colorMode = coordiante.colorMode;
      newValue.traceBorder = coordiante.traceBorder;
      newValue.traceBack = coordiante.traceBack; // newValue.lowerLimit = coordiante.lowerLimit;

      _this.props.options.arrayOrientedLinks[id || 0] = newValue;
    };
    /** save lower limit data */


    _this.callBackLowerLimit = function (lowerLimit, id) {
      var newValue = _this.state.arrayOrientedLinkClass[id || 0];
      newValue.lowerLimit = lowerLimit;
      _this.props.options.arrayOrientedLinks[id || 0] = newValue;
    };
    /**
     * to do
     */


    _this.defineListCollapse = function () {
      _this.props.options.listCollapsePoint = [];
      var arrayOrientedLink = _this.state.arrayOrientedLinkClass;
      arrayOrientedLink.forEach(function (orientedLink) {
        _this.props.options.listCollapseOrientedLink.push(false);
      });
    };

    _this.callBackToOther = function (followLink, hoveringTooltipLink, hoveringTooltipText, textObj, id) {
      var oldCoor = _this.state.arrayOrientedLinkClass[id || 0];

      if (followLink) {
        oldCoor.linkURL.followLink = followLink;
      }

      if (hoveringTooltipLink) {
        oldCoor.linkURL.hoveringTooltipLink = hoveringTooltipLink;
      }

      if (hoveringTooltipText) {
        oldCoor.linkURL.hoveringTooltipText = hoveringTooltipText;
      }

      if (textObj) {
        oldCoor.textObj = textObj;
      }

      var arrayOrientedLink = _this.props.options.arrayOrientedLinks;
      arrayOrientedLink[id || 0] = oldCoor;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        arrayOrientedLinks: arrayOrientedLink
      }));
    };
    /**
     * to do
     */


    _this.componentDidMount = function () {
      _this.loadCoorParent();
    };

    _this.state = {
      arrayInput: [],
      arrayOrientedLinkClass: [],
      index: 1,
      debug: false,
      listCollapseOrientedLink: []
    };
    return _this;
  }

  OrientedLinkForm.prototype.defineDataRegion = function () {
    var arrayCoordinateSpace = this.props.arrayCoordinateSpace;
    var optionRegionNull = {
      label: 'No selected region'
    };
    var arrayOptionsRegion = [];
    arrayOptionsRegion.push(optionRegionNull);
    arrayCoordinateSpace.forEach(function (region) {
      var optionRegion = {
        label: region.label,
        value: region
      };
      arrayOptionsRegion.push(optionRegion);
    });
    return arrayOptionsRegion;
  };

  OrientedLinkForm.prototype.defineDataPoint = function () {
    var arrayPoint = this.props.arrayPoint;
    var optionPointNull = {
      label: 'No selected point'
    };
    var arrayOptionsPoint = [];
    arrayOptionsPoint.push(optionPointNull);
    arrayPoint.forEach(function (point) {
      var valueLabel = point.label;

      if (point.label === '') {
        valueLabel = point.name;
      }

      var optionPoint = {
        label: valueLabel,
        value: point
      };
      arrayOptionsPoint.push(optionPoint);
    });
    return arrayOptionsPoint;
  };
  /**
   * Delete array coordinate in state.oldArrayOrientedLinkClass
   * @param {number} id id of object element to delete
   */


  OrientedLinkForm.prototype.deleteArrayOrientedLinkClass = function (id) {
    var _this = this;

    var newLinkClass = this.state.arrayOrientedLinkClass.filter(function (value) {
      return value.id !== id;
    });
    this.setState({
      arrayOrientedLinkClass: newLinkClass
    });
    setTimeout(function () {
      _this.callBack();
    }, 100);
  };
  /**
   * Use function if value input change
   * @param {string} currentTarget new value of input
   * @param {string} name name of input
   * @param {number} index id of input
   */


  OrientedLinkForm.prototype._handleChange = function (currentTarget, name, index) {
    var e_4, _a;

    var i;
    i = 0;
    var copyOfoldArrayOrientedLinkClass = this.state.arrayOrientedLinkClass.slice();

    try {
      for (var copyOfoldArrayOrientedLinkClass_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(copyOfoldArrayOrientedLinkClass), copyOfoldArrayOrientedLinkClass_1_1 = copyOfoldArrayOrientedLinkClass_1.next(); !copyOfoldArrayOrientedLinkClass_1_1.done; copyOfoldArrayOrientedLinkClass_1_1 = copyOfoldArrayOrientedLinkClass_1.next()) {
        var line = copyOfoldArrayOrientedLinkClass_1_1.value;

        if (line.id === index) {
          copyOfoldArrayOrientedLinkClass[i] = Object(Functions_editGoodParameterOrientedLink__WEBPACK_IMPORTED_MODULE_9__["editGoodParameterOrientedLink"])(name, copyOfoldArrayOrientedLinkClass[i], currentTarget, {});
          break;
        }

        i++;
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (copyOfoldArrayOrientedLinkClass_1_1 && !copyOfoldArrayOrientedLinkClass_1_1.done && (_a = copyOfoldArrayOrientedLinkClass_1["return"])) _a.call(copyOfoldArrayOrientedLinkClass_1);
      } finally {
        if (e_4) throw e_4.error;
      }
    }

    this.setState({
      arrayOrientedLinkClass: copyOfoldArrayOrientedLinkClass
    });
    this.callBack();
  };
  /**
   * Get value of input with state.oldArrayOrientedLinkClass
   * @param {number} id id of element
   * @param {string} param name of input
   * @returns {string} value of the array element
   */


  OrientedLinkForm.prototype.getGoodValue = function (id, name) {
    var e_5, _a;

    var value;
    var valueSelect;
    var valueMetric;
    var idx = -1;
    var index = 0;
    value = '';
    valueSelect = {};

    try {
      for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.state.arrayOrientedLinkClass), _c = _b.next(); !_c.done; _c = _b.next()) {
        var line = _c.value;

        if (line.id === id) {
          idx = index;
          break;
        }

        ++index;
      }
    } catch (e_5_1) {
      e_5 = {
        error: e_5_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_5) throw e_5.error;
      }
    }

    if (idx === -1) {
      return value;
    }

    if (name.startsWith('orientationLink') || name.startsWith('CoordinateSpaceAssociatePointA') || name.startsWith('CoordinateSpaceAssociatePointB') || name.startsWith('pointIn') || name.startsWith('pointOut')) {
      if (name.startsWith('orientationLink')) {
        valueSelect = this.state.arrayOrientedLinkClass[idx].orientationLink;
      } else if (name.startsWith('CoordinateSpaceAssociatePointA')) {
        valueSelect = this.state.arrayOrientedLinkClass[idx].regionIn;
      } else if (name.startsWith('CoordinateSpaceAssociatePointB')) {
        valueSelect = this.state.arrayOrientedLinkClass[idx].regionOut;
      } else if (name.startsWith('pointIn')) {
        valueSelect = this.state.arrayOrientedLinkClass[idx].pointIn;
      } else if (name.startsWith('pointOut')) {
        valueSelect = this.state.arrayOrientedLinkClass[idx].pointOut;
      }

      return valueSelect;
    } else if (name.startsWith('mainMetric')) {
      valueMetric = this.state.arrayOrientedLinkClass[idx].mainMetric;
      return valueMetric;
    } else {
      if (name.startsWith('pointAX')) {
        value = this.state.arrayOrientedLinkClass[idx].pointAPositionX;
      } else if (name.startsWith('pointAY')) {
        value = this.state.arrayOrientedLinkClass[idx].pointAPositionY;
      } else if (name.startsWith('pointBX')) {
        value = this.state.arrayOrientedLinkClass[idx].pointBPositionX;
      } else if (name.startsWith('pointBY')) {
        value = this.state.arrayOrientedLinkClass[idx].pointBPositionY;
      } else if (name.startsWith('colorCoordinateA')) {
        value = this.state.arrayOrientedLinkClass[idx].colorCoordinateA;
      } else if (name.startsWith('colorCoordinateB')) {
        value = this.state.arrayOrientedLinkClass[idx].colorCoordinateB;
      } else if (name.startsWith('refIdMainMetric')) {
        value = this.state.arrayOrientedLinkClass[idx].mainMetric.refId || '';
      } else if (name.startsWith('keyMainMetric')) {
        value = this.state.arrayOrientedLinkClass[idx].mainMetric.key || '';
      } else if (name.startsWith('keyValueMainMetric')) {
        value = this.state.arrayOrientedLinkClass[idx].mainMetric.keyValue || '';
      } // else if (name.startsWith('labelLinkA')) {
      // 	value = this.state.oldArrayOrientedLinkClass[idx].labelLinkA;
      // } else if (name.startsWith('labelLinkB')) {
      // 	value = this.state.oldArrayOrientedLinkClass[idx].labelLinkB;
      // } else if (name.startsWith('positionXLabelLinkA')) {
      // 	value = this.state.oldArrayOrientedLinkClass[idx].positionXLabelA;
      // } else if (name.startsWith('positionYLabelLinkA')) {
      // 	value = this.state.oldArrayOrientedLinkClass[idx].positionYLabelA;
      // } else if (name.startsWith('positionXLabelLinkB')) {
      // 	value = this.state.oldArrayOrientedLinkClass[idx].positionXLabelB;
      // } else if (name.startsWith('positionYLabelLinkB')) {
      // 	value = this.state.oldArrayOrientedLinkClass[idx].positionYLabelB;
      // }


      return value;
    }
  };
  /**
   * create dynamic input
   */


  OrientedLinkForm.prototype.generateInputsOrientedLinks = function () {
    var e_6, _a;

    var _this = this;

    var index = 0;
    this.defineListCollapse();
    var arrayInput = this.state.arrayInput;
    var finalItem = [];
    var item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
    var itemButton = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);

    var _loop_3 = function _loop_3(line) {
      var mapItems = [];
      line.uneClassInput.forEach(function (obj) {
        if (obj.input_type === 'text') {
          item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputTextOrientedLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
            key: obj.id,
            label: obj.label,
            name: obj.name,
            placeholder: obj.placeholder || '',
            required: obj.required,
            value: _this.getGoodValue(line.id, obj.name),
            _handleChange: function _handleChange(event) {
              _this._handleChange(event.currentTarget.value, obj.name, line.id);
            }
          });
        } else if (obj.input_type === 'select') {
          item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSelectOrientedLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
            key: obj.id,
            _onChange: function _onChange(value, name, index) {
              var e_7, _a;

              var i;
              i = 0;

              var copyOfoldArrayOrientedLinkClass = _this.state.arrayOrientedLinkClass.slice();

              try {
                for (var copyOfoldArrayOrientedLinkClass_2 = (e_7 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(copyOfoldArrayOrientedLinkClass)), copyOfoldArrayOrientedLinkClass_2_1 = copyOfoldArrayOrientedLinkClass_2.next(); !copyOfoldArrayOrientedLinkClass_2_1.done; copyOfoldArrayOrientedLinkClass_2_1 = copyOfoldArrayOrientedLinkClass_2.next()) {
                  var line_1 = copyOfoldArrayOrientedLinkClass_2_1.value;

                  if (line_1.id === index) {
                    copyOfoldArrayOrientedLinkClass[i] = Object(Functions_editGoodParameterOrientedLink__WEBPACK_IMPORTED_MODULE_9__["editGoodParameterOrientedLink"])(name, copyOfoldArrayOrientedLinkClass[i], value.value || '', value || {});
                    break;
                  }

                  i++;
                }
              } catch (e_7_1) {
                e_7 = {
                  error: e_7_1
                };
              } finally {
                try {
                  if (copyOfoldArrayOrientedLinkClass_2_1 && !copyOfoldArrayOrientedLinkClass_2_1.done && (_a = copyOfoldArrayOrientedLinkClass_2["return"])) _a.call(copyOfoldArrayOrientedLinkClass_2);
                } finally {
                  if (e_7) throw e_7.error;
                }
              }

              _this.setState({
                arrayOrientedLinkClass: copyOfoldArrayOrientedLinkClass
              });

              _this.callBack();
            },
            name: obj.name,
            index: line.id,
            data: obj.optionValues,
            defaultValue: _this.getGoodValue(line.id, obj.name),
            label: obj.label
          });
        } else if (obj.input_type === 'color') {
          item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSeriesColorPickerOrientedLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
            key: obj.id,
            keyInt: parseInt(obj.id, 10),
            color: _this.getGoodValue(line.id, obj.name),
            text: obj.label,
            width: 10,
            _onChange: function _onChange(keyInt, newColor) {
              var e_8, _a;

              var i;
              i = 0;

              var copyOfArrayOrientedLinkClass = _this.state.arrayOrientedLinkClass.slice();

              try {
                for (var copyOfArrayOrientedLinkClass_1 = (e_8 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(copyOfArrayOrientedLinkClass)), copyOfArrayOrientedLinkClass_1_1 = copyOfArrayOrientedLinkClass_1.next(); !copyOfArrayOrientedLinkClass_1_1.done; copyOfArrayOrientedLinkClass_1_1 = copyOfArrayOrientedLinkClass_1.next()) {
                  var line_2 = copyOfArrayOrientedLinkClass_1_1.value;

                  if (line_2.id === keyInt) {
                    copyOfArrayOrientedLinkClass[i] = Object(Functions_editGoodParameterOrientedLink__WEBPACK_IMPORTED_MODULE_9__["editGoodParameterOrientedLink"])(obj.name, copyOfArrayOrientedLinkClass[i], newColor, {});
                    break;
                  }

                  i++;
                }
              } catch (e_8_1) {
                e_8 = {
                  error: e_8_1
                };
              } finally {
                try {
                  if (copyOfArrayOrientedLinkClass_1_1 && !copyOfArrayOrientedLinkClass_1_1.done && (_a = copyOfArrayOrientedLinkClass_1["return"])) _a.call(copyOfArrayOrientedLinkClass_1);
                } finally {
                  if (e_8) throw e_8.error;
                }
              }

              _this.setState({
                arrayOrientedLinkClass: copyOfArrayOrientedLinkClass
              });

              _this.callBack();

              obj.setDefaultValueColor(newColor);
            }
          });
        } else {
          itemButton = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
            key: obj.id,
            label: obj.label,
            value: obj.value || '',
            name: obj.name,
            required: obj.required,
            _handleChange: _this.deleteOwnInput,
            id: obj.id,
            withLabel: false
          });
          item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
        }

        mapItems.push(item);
      });
      var divKey = 'inputCoor' + line.id.toString();
      var newInput = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: divKey,
        className: 'inputCoor',
        id: 'orientedLink' + line.id.toString(),
        style: {
          display: 'flex',
          flexDirection: 'row',
          marginBottom: '5px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__["Collapse"], {
        isOpen: this_1.state.listCollapseOrientedLink[line.id - 1],
        label: 'OrientedLink ' + line.id.toString(),
        onToggle: function onToggle(isOpen) {
          _this.props.options.listCollapseOrientedLink[line.id - 1] = isOpen;

          _this.setState({
            listCollapseOrientedLink: _this.props.options.listCollapseOrientedLink
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Parametrage_parametresGeneriques__WEBPACK_IMPORTED_MODULE_13__["default"], {
        options: this_1.props.options,
        onOptionsChange: this_1.props.onOptionsChange,
        data: this_1.props.data,
        coordinateSpace: this_1.state.arrayOrientedLinkClass[index],
        callBackToParent: this_1.callBackToOther,
        id: index
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Parametrage_manageLowerLimit__WEBPACK_IMPORTED_MODULE_14__["default"], {
        coordinate: this_1.state.arrayOrientedLinkClass[index],
        callBack: this_1.callBackManageLowerLimit,
        lowerLimitCallBack: this_1.callBackLowerLimit,
        id: index
      })), mapItems), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          marginTop: '4px'
        }
      }, itemButton));
      finalItem = finalItem.concat(newInput);
      index++;
    };

    var this_1 = this;

    try {
      for (var arrayInput_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arrayInput), arrayInput_2_1 = arrayInput_2.next(); !arrayInput_2_1.done; arrayInput_2_1 = arrayInput_2.next()) {
        var line = arrayInput_2_1.value;

        _loop_3(line);
      }
    } catch (e_6_1) {
      e_6 = {
        error: e_6_1
      };
    } finally {
      try {
        if (arrayInput_2_1 && !arrayInput_2_1.done && (_a = arrayInput_2["return"])) _a.call(arrayInput_2);
      } finally {
        if (e_6) throw e_6.error;
      }
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, finalItem);
  };

  OrientedLinkForm.prototype.componentWillReceiveProps = function () {
    this.loadCoorParent();
    this.generateInputsOrientedLinks();
  };
  /** update state when props uneCoor change */


  OrientedLinkForm.prototype.componentDidUpdate = function (prevProps) {
    this.loadCoorParent();
    this.generateInputsOrientedLinks();
  };
  /**
   * render()
   */


  OrientedLinkForm.prototype.render = function () {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        marginBottom: '5px'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__["Button"], {
      onClick: function onClick() {
        _this.setState({
          arrayInput: [],
          arrayOrientedLinkClass: [],
          debug: false
        });

        _this.loadCoorParent();

        _this.generateInputsOrientedLinks();
      }
    }, "Load Oriented Links")), this.generateInputsOrientedLinks());
  };

  return OrientedLinkForm;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (OrientedLinkForm);

/***/ }),

/***/ "./components/panelData.tsx":
/*!**********************************!*\
  !*** ./components/panelData.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inputSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inputSelect */ "./inputSelect.tsx");
/* harmony import */ var _fetchButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetchButton */ "./components/fetchButton.tsx");





/**
 * def
 */

var PanelData =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PanelData, _super);

  function PanelData(props) {
    var _this = _super.call(this, props) || this;
    /**
     * TODO
     */


    _this.onPanelSelectChanged = function (value) {
      var panel = _this.getPanelInfo(value.label);

      var newTargets = _this.getTargetsInfo(value.label);

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        actualPanel: value,
        panelId: panel.id,
        panelType: panel.type,
        panelTargets: newTargets
      }));
    };
    /**
     * TODO
     */


    _this.onPanelIdChanged = function (value) {
      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        panelId: value
      }));
    };
    /**
     * TODO
     */


    _this.onPanelTypeChanged = function (value) {
      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        panelType: value
      }));
    };
    /**
     * TODO
     */


    _this.onTargetChanged = function (event) {
      var newData = _this.props.options.panelTargets.slice();

      newData[parseInt(event.currentTarget.id, 10)].expr = event.currentTarget.value;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        panelTargets: newData
      }));
    };
    /**
     * TODO
     */


    _this.onTargetPromChanged = function (event) {
      var newData = _this.props.options.promTargets.slice();

      newData[parseInt(event.currentTarget.id, 10)].expr = event.currentTarget.value;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        promTargets: newData
      }));
    };
    /**
     * TODO
     */


    _this.onPersonalTargetChanged = function (event) {
      var newData = {
        expr: ''
      };
      newData.expr = event.currentTarget.value;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        personalTarget: newData
      }));
    };
    /**
     * TODO
     */


    _this.loadTarget = function (onClick) {
      // Console.log(onClick.currentTarget.id);
      var newTarget = _this.props.options.panelTargets[parseInt(onClick.currentTarget.id, 10)]; // Console.log(newTarget);


      _this.props.options.promTargets.push(newTarget);

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        promTargets: _this.props.options.promTargets
      }));
    };
    /**
     * TODO
     */


    _this.loadPersonalTarget = function (onClick) {
      _this.props.options.promTargets.push(_this.props.options.personalTarget);

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        promTargets: _this.props.options.promTargets
      }));
    };
    /**
     * TODO
     */


    _this.deleteTarget = function (onClick) {
      var isTarget = function isTarget(target) {
        return target.expr === _this.props.options.panelTargets[parseInt(onClick.currentTarget.id, 10)].expr;
      };

      _this.props.options.promTargets.splice(_this.props.options.promTargets.findIndex(isTarget), 1); // Console.log(this.props.options.promTargets);


      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        promTargets: _this.props.options.promTargets
      }));
    };
    /**
     * TODO
     */


    _this.deleteTargetProm = function (onClick) {
      var isTarget = function isTarget(target) {
        return target.expr === _this.props.options.promTargets[parseInt(onClick.currentTarget.id, 10)].expr;
      };

      _this.props.options.promTargets.splice(_this.props.options.promTargets.findIndex(isTarget), 1);

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        promTargets: _this.props.options.promTargets
      })); // Console.log(this.props.options.promTargets);

    };
    /**
     * TODO
     */


    _this.targetsData = function (props) {
      if (props.targets.lenght !== 0) {
        var listTargets = props.targets.map(function (target, index) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            key: 'TargetDataDiv' + index.toString()
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
            id: index.toString(),
            key: 'TargetData' + index.toString() + target.refId,
            label: 'target ' + target.refId,
            labelWidth: 5,
            inputWidth: 20,
            onChange: _this.onTargetChanged.bind(_this),
            type: 'string',
            value: target.expr || ''
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            id: index.toString(),
            key: 'buttonAdd' + index.toString(),
            onClick: _this.loadTarget.bind(_this)
          }, "Add Target"));
        });
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, listTargets);
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "No targets avalaible");
    };
    /**
     * TODO
     */


    _this.targetsProm = function (props) {
      if (props.targets.lenght !== 0) {
        var listTargets = props.targets.map(function (target, index) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            key: 'TargetPromDiv' + index.toString()
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
            id: index.toString(),
            key: 'TargetProm' + index.toString() + target.refId,
            label: 'target ' + target.refId,
            labelWidth: 5,
            inputWidth: 20,
            onChange: _this.onTargetPromChanged.bind(_this),
            type: 'string',
            value: target.expr || ''
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            variant: 'danger',
            id: index.toString(),
            key: 'ButtunDel' + index.toString(),
            onClick: _this.deleteTargetProm.bind(_this)
          }, "Del Target"));
        });
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, listTargets);
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "No targets avalaible");
    };

    return _this;
  }
  /**
   * TODO
   */


  PanelData.prototype.getPanelInfo = function (value) {
    var objectJSON = this.props.options.Json;
    return objectJSON.panels.find(function (c) {
      return c.title === value;
    });
  };
  /**
   * TODO
   */


  PanelData.prototype.getTargetsInfo = function (value) {
    this.props.options.panelTargets = [];
    var targets = this.getPanelInfo(value).targets;
    return targets;
  };
  /**
   * result
   */


  PanelData.prototype.render = function () {
    var options = this.props.options;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: 'section gf-form-group'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_inputSelect__WEBPACK_IMPORTED_MODULE_3__["InputSelect"], {
      _onChange: this.onPanelSelectChanged,
      data: options.panelList,
      defaultValue: options.actualPanel
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(this.targetsData, {
      targets: options.panelTargets
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: 'section gf-form-group'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: 'target metric',
      labelWidth: 10,
      key: 'TargetPersonalMetric',
      inputWidth: 20,
      onChange: this.onPersonalTargetChanged.bind(this),
      type: 'string',
      value: options.personalTarget.expr || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: 'ParsonalTargetAddButton',
      onClick: this.loadPersonalTarget
    }, "Add Target")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: 'section gf-form-group'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(this.targetsProm, {
      targets: options.promTargets
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fetchButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data
    }));
  };

  return PanelData;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PanelData);

/***/ }),

/***/ "./components/pointForm.tsx":
/*!**********************************!*\
  !*** ./components/pointForm.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Functions_createInputsPoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Functions/createInputsPoint */ "./Functions/createInputsPoint.tsx");
/* harmony import */ var Functions_Input_inputTextPoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Functions/Input/inputTextPoint */ "./Functions/Input/inputTextPoint.tsx");
/* harmony import */ var Functions_Input_inputButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Functions/Input/inputButton */ "./Functions/Input/inputButton.tsx");
/* harmony import */ var Models_ArrayInputSelectableClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Models/ArrayInputSelectableClass */ "./Models/ArrayInputSelectableClass.tsx");
/* harmony import */ var Functions_editGoodParameterPoint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Functions/editGoodParameterPoint */ "./Functions/editGoodParameterPoint.tsx");
/* harmony import */ var Models_PointClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Models/PointClass */ "./Models/PointClass.tsx");
/* harmony import */ var Functions_Input_inputSelectPoint__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Functions/Input/inputSelectPoint */ "./Functions/Input/inputSelectPoint.tsx");
/* harmony import */ var Functions_Input_inputSeriesColorPickerPoint__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Functions/Input/inputSeriesColorPickerPoint */ "./Functions/Input/inputSeriesColorPickerPoint.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Models/TextObjectClass */ "./Models/TextObjectClass.tsx");
/* harmony import */ var Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Models/LinkURLClass */ "./Models/LinkURLClass.tsx");
/* harmony import */ var components_Parametrage_parametresGeneriques__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Parametrage/parametresGeneriques */ "./components/Parametrage/parametresGeneriques.tsx");
/* harmony import */ var components_Parametrage_manageLowerLimit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/Parametrage/manageLowerLimit */ "./components/Parametrage/manageLowerLimit.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
















/**
 * IndexParametrage
 */

var PointForm =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PointForm, _super);

  function PointForm(props) {
    var _this = _super.call(this, props) || this;
    /**
     * to do
     */


    _this.callBack = function () {
      _this.props.callBackFromParent(_this.state.arrayPointClass);
    };
    /**
     * to do
     */


    _this.loadCoorParent = function () {
      var e_1, _a;

      var oldArrayPointClass = _this.props.oldArrayPointClass;

      if (oldArrayPointClass.length === 0 || _this.state.debug === true) {
        if (!_this.state.debug) {
          _this.setState(function (prevState) {
            return {
              debug: !prevState.debug
            };
          });
        }

        return;
      }

      var _loop_1 = function _loop_1(element) {
        setTimeout(function () {
          _this.addInput(element.id, element.label, element.coordinateSpace, element.drawGraphicMarker, element.shape, element.sizeWidth, element.sizeHeight, element.rotateArrow, element.positionShapeX, element.positionShapeY, element.positionLabelX, element.positionLabelY, element.color, element.mainMetric.refId, element.mainMetric.key, element.mainMetric.keyValue, element.textObj, element.lowerLimit);
        }, 100);
      };

      try {
        //console.log(this.props.options.arrayPoints)
        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.props.options.arrayPoints), _c = _b.next(); !_c.done; _c = _b.next()) {
          var element = _c.value;

          _loop_1(element);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      _this.setState(function (prevState) {
        return {
          debug: !prevState.debug
        };
      });
    };
    /**
     * add inputs for a new coordiante
     */


    _this.addInput = function (id, label, coordinateSpaceAssociate, drawGraphicMarker, shape, sizeWidth, sizeHeight, rotateArrow, positionShapeX, positionShapeY, positionLabelX, positionLabelY, color, refIdMainMetric, keyMainMetric, keyValueMainMetric, textObj, seuil) {
      var num = id || _this.props.options.indexPoint + 1;
      var finalArray = Object(Functions_createInputsPoint__WEBPACK_IMPORTED_MODULE_2__["createInputsPoint"])(num, _this.defineDataCoordinateSpace());
      var initTextObject = textObj || new Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_11__["TextObject"]('', '', '', false, '', '', '', false, '', '', '', false, false, false, '', false, '');
      var parametrageMetric = new Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_12__["LinkURLClass"]('', '', '');

      _this.setState(function (prevState) {
        return {
          arrayPointClass: prevState.arrayPointClass.concat(new Models_PointClass__WEBPACK_IMPORTED_MODULE_7__["PointClass"](num, parametrageMetric, '', seuil || [], label || '', initTextObject, {
            'key': keyMainMetric || '',
            'unit': '',
            'format': '',
            'keyValue': keyValueMainMetric || '',
            'refId': refIdMainMetric || ''
          }, [], false, false, false, 'point' + num.toString(), '', coordinateSpaceAssociate || {}, drawGraphicMarker || {
            label: 'Yes',
            value: 'true'
          }, shape || {
            label: 'Circle',
            value: 'circle'
          }, sizeWidth || {
            label: 'Small',
            value: 'small'
          }, sizeHeight || {
            label: 'Small',
            value: 'small'
          }, rotateArrow || '0', positionShapeX || '0', positionShapeY || '0', positionLabelX || '0', positionLabelY || '0', color || 'black', [], [], [], [])),
          arrayInput: prevState.arrayInput.concat([new Models_ArrayInputSelectableClass__WEBPACK_IMPORTED_MODULE_5__["ArrayInputSelectableClass"](num, finalArray)])
        };
      });

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        indexPoint: num
      })); //this.props.options.indexPoint + 1;

    };
    /**
     * dsgs
     */


    _this.addNewFormPoint = function (event) {
      _this.addInput();
    };
    /**
     * Delete array input and value
     * @param {event} event event click delete button
     */
    // React.MouseEvent<HTMLInputElement, MouseEvent>


    _this.deleteOwnInput = function (event) {
      var e_2, _a;

      var arrayInput = _this.state.arrayInput;
      var id = event.currentTarget.id;

      var _loop_2 = function _loop_2(obj) {
        var e_3, _a;

        try {
          for (var _b = (e_3 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(obj.uneClassInput)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var line = _c.value;

            if (line.input_type === 'button') {
              if (line.id === id) {
                var updateArrayInput = arrayInput.filter(function (value) {
                  return value.id !== obj.id;
                });

                _this.setState({
                  arrayInput: updateArrayInput
                });

                _this.deletearrayPointClass(parseInt(id, 10));

                return {
                  value: void 0
                };
              }
            }
          }
        } catch (e_3_1) {
          e_3 = {
            error: e_3_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
          } finally {
            if (e_3) throw e_3.error;
          }
        }
      };

      try {
        for (var arrayInput_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arrayInput), arrayInput_1_1 = arrayInput_1.next(); !arrayInput_1_1.done; arrayInput_1_1 = arrayInput_1.next()) {
          var obj = arrayInput_1_1.value;

          var state_1 = _loop_2(obj);

          if (_typeof(state_1) === "object") return state_1.value;
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (arrayInput_1_1 && !arrayInput_1_1.done && (_a = arrayInput_1["return"])) _a.call(arrayInput_1);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
    };
    /**
     * to do
     */


    _this.defineListCollapse = function () {
      _this.props.options.listCollapsePoint = [];
      var arrayPoints = _this.state.arrayPointClass;
      arrayPoints.forEach(function (point) {
        _this.props.options.listCollapsePoint.push(false);
      });
    };

    _this.callBackToOther = function (followLink, hoveringTooltipLink, hoveringTooltipText, textObj, id) {
      var oldCoor = _this.state.arrayPointClass[id || 0];

      if (followLink) {
        oldCoor.linkURL.followLink = followLink;
      }

      if (hoveringTooltipLink) {
        oldCoor.linkURL.hoveringTooltipLink = hoveringTooltipLink;
      }

      if (hoveringTooltipText) {
        oldCoor.linkURL.hoveringTooltipText = hoveringTooltipText;
      }

      if (textObj) {
        oldCoor.textObj = textObj;
      }

      var arrayPoint = _this.props.options.arrayPoints;
      arrayPoint[id || 0] = oldCoor;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        arrayPoints: arrayPoint
      }));
    };
    /** update lower limit */


    _this.callBackManageLowerLimit = function (coordiante, id) {
      var newValue = _this.state.arrayPointClass[id || 0];
      newValue.colorMode = coordiante.colorMode;
      newValue.traceBorder = coordiante.traceBorder;
      newValue.traceBack = coordiante.traceBack; // newValue.lowerLimit = coordiante.lowerLimit;

      _this.props.options.arrayPoints[id || 0] = newValue;
    };
    /** save lower limit data */


    _this.callBackLowerLimit = function (lowerLimit, id) {
      console.log(id);
      var newValue = _this.state.arrayPointClass[id || 0];
      console.log(_this.state.arrayPointClass);
      console.log(_this.state.arrayPointClass[id || 0]);
      newValue.lowerLimit = lowerLimit;
      _this.props.options.arrayPoints[id || 0] = newValue;
    };

    _this.onTogglePoint = function (isOpen) {
      _this.setState({
        openCollapsePoint: isOpen
      });
    };
    /** update state when props uneCoor change */
    // public componentDidUpdate(prevProps: IProps) {
    // 	console.log('update')
    // 	if (prevProps.oldArrayPointClass.length !== this.props.oldArrayPointClass.length) {
    // 		this.loadCoorParent();
    // 		this.generateInputsPoints();
    // 	}
    // }


    _this.componentDidMount = function () {
      _this.loadCoorParent();
    };

    _this.state = {
      arrayInput: [],
      arrayPointClass: [],
      index: 1,
      listCollapsePoint: [],
      openCollapsePoint: false,
      oldArrayPointClass: [],
      debug: false
    };
    return _this;
  }

  PointForm.prototype.defineDataCoordinateSpace = function () {
    var arrayCoordinateSpace = this.props.arrayCoordinateSpace;
    var dataEspaceCoor = [];
    var optionNull = {
      label: 'Initial space'
    }; // Par défault, on ajoute une option qui permet de ne pas sélectionner d'espace de coordonnées

    dataEspaceCoor.push(optionNull); // On ajoute aux options de choix les espace de coordonnées existant

    arrayCoordinateSpace.forEach(function (coordinateSpace) {
      var option = {
        label: coordinateSpace.label,
        value: coordinateSpace
      };
      dataEspaceCoor.push(option);
    });
    return dataEspaceCoor;
  };
  /**
   * Delete array coordinate in state.arrayPointClass
   * @param {number} id id of object element to delete
   */


  PointForm.prototype.deletearrayPointClass = function (id) {
    var _this = this;

    var newPointClass = this.state.arrayPointClass.filter(function (value) {
      return value.id !== id;
    });
    this.setState({
      arrayPointClass: newPointClass
    });
    setTimeout(function () {
      _this.callBack();
    }, 100); //this.generateInputsPoints();
  };
  /**
   * Use function if value input change
   * @param {string} currentTarget new value of input
   * @param {string} name name of input
   * @param {number} index id of input
   */


  PointForm.prototype._handleChange = function (currentTarget, name, index) {
    var e_4, _a;

    var i;
    i = 0;
    var copyOfarrayPointClass = this.state.arrayPointClass.slice();

    try {
      for (var copyOfarrayPointClass_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(copyOfarrayPointClass), copyOfarrayPointClass_1_1 = copyOfarrayPointClass_1.next(); !copyOfarrayPointClass_1_1.done; copyOfarrayPointClass_1_1 = copyOfarrayPointClass_1.next()) {
        var line = copyOfarrayPointClass_1_1.value;

        if (line.id === index) {
          copyOfarrayPointClass[i] = Object(Functions_editGoodParameterPoint__WEBPACK_IMPORTED_MODULE_6__["editGoodParameterPoint"])(name, copyOfarrayPointClass[i], currentTarget, {});
          break;
        }

        i++;
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (copyOfarrayPointClass_1_1 && !copyOfarrayPointClass_1_1.done && (_a = copyOfarrayPointClass_1["return"])) _a.call(copyOfarrayPointClass_1);
      } finally {
        if (e_4) throw e_4.error;
      }
    }

    this.setState({
      arrayPointClass: copyOfarrayPointClass
    });
    this.callBack();
  };
  /**
   * Get value of input with state.arrayPointClass
   * @param {number} id id of element
   * @param {string} param name of input
   * @returns {string} value of the array element
   */


  PointForm.prototype.getGoodValue = function (id, param) {
    var e_5, _a;

    var value;
    var valueSelect;
    var idx = -1;
    var index = 0;
    value = '';
    valueSelect = {};

    try {
      for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.state.arrayPointClass), _c = _b.next(); !_c.done; _c = _b.next()) {
        var line = _c.value;

        if (line.id === id) {
          idx = index;
          break;
        }

        ++index;
      }
    } catch (e_5_1) {
      e_5 = {
        error: e_5_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_5) throw e_5.error;
      }
    }

    if (idx === -1) {
      return value;
    }

    if (param.startsWith('drawGraphicMarker') || param.startsWith('shape') || param.startsWith('sizeWidth') || param.startsWith('sizeHeight') || param.startsWith('linkWithCoordinateSpace')) {
      if (param.startsWith('drawGraphicMarker')) {
        valueSelect = this.state.arrayPointClass[idx].drawGraphicMarker;
      } else if (param.startsWith('shape')) {
        valueSelect = this.state.arrayPointClass[idx].shape;
      } else if (param.startsWith('sizeWidth')) {
        valueSelect = this.state.arrayPointClass[idx].sizeWidth;
      } else if (param.startsWith('sizeHeight')) {
        valueSelect = this.state.arrayPointClass[idx].sizeHeight;
      } else if (param.startsWith('linkWithCoordinateSpace')) {
        valueSelect = this.state.arrayPointClass[idx].coordinateSpace;
      }

      return valueSelect;
    } else {
      if (param.startsWith('rotateArrow')) {
        value = this.state.arrayPointClass[idx].rotateArrow;
      } else if (param.startsWith('positionShapeX')) {
        value = this.state.arrayPointClass[idx].positionShapeX;
      } else if (param.startsWith('positionShapeY')) {
        value = this.state.arrayPointClass[idx].positionShapeY;
      } else if (param.startsWith('positionLabelX')) {
        value = this.state.arrayPointClass[idx].positionLabelX;
      } else if (param.startsWith('positionLabelY')) {
        value = this.state.arrayPointClass[idx].positionLabelY;
      } else if (param.startsWith('label')) {
        value = this.state.arrayPointClass[idx].label;
      } else if (param.startsWith('color')) {
        value = this.state.arrayPointClass[idx].color;
      } else if (param.startsWith('refIdMainMetric')) {
        value = this.state.arrayPointClass[idx].mainMetric.refId || '';
      } else if (param.startsWith('keyMainMetric')) {
        value = this.state.arrayPointClass[idx].mainMetric.key || '';
      } else if (param.startsWith('keyValueMainMetric')) {
        value = this.state.arrayPointClass[idx].mainMetric.keyValue || '';
      }

      return value;
    }
  };

  PointForm.prototype.defineLabelCollapse = function (id) {
    var label = this.getGoodValue(id, 'label');

    if (this.getGoodValue(id, 'label') === '') {
      label = 'Point ' + id.toString();
    }

    return label;
  };
  /**
   * create dynamic input
   */


  PointForm.prototype.generateInputsPoints = function () {
    var e_6, _a;

    var _this = this;

    var index = 0;
    this.defineListCollapse();
    var arrayInput = this.state.arrayInput;
    var item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
    var itemButton = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
    var mapItems = [];
    var finalItem = [];

    var _loop_3 = function _loop_3(line) {
      mapItems = [];
      line.uneClassInput.forEach(function (obj) {
        if (obj.input_type === 'text') {
          item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputTextPoint__WEBPACK_IMPORTED_MODULE_3__["default"], {
            key: obj.id,
            label: obj.label,
            name: obj.name,
            placeholder: obj.placeholder || '',
            required: obj.required,
            value: _this.getGoodValue(line.id, obj.name),
            _handleChange: function _handleChange(event) {
              _this._handleChange(event.currentTarget.value, obj.name, line.id);
            },
            shape: _this.getGoodValue(line.id, 'shape').value
          });
        } else if (obj.input_type === 'select') {
          item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSelectPoint__WEBPACK_IMPORTED_MODULE_8__["default"], {
            key: obj.id,
            _onChange: function _onChange(value, name, index) {
              var e_7, _a;

              var i;
              i = 0;

              var copyOfarrayPointClass = _this.state.arrayPointClass.slice();

              try {
                for (var copyOfarrayPointClass_2 = (e_7 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(copyOfarrayPointClass)), copyOfarrayPointClass_2_1 = copyOfarrayPointClass_2.next(); !copyOfarrayPointClass_2_1.done; copyOfarrayPointClass_2_1 = copyOfarrayPointClass_2.next()) {
                  var line_1 = copyOfarrayPointClass_2_1.value;

                  if (line_1.id === index) {
                    copyOfarrayPointClass[i] = Object(Functions_editGoodParameterPoint__WEBPACK_IMPORTED_MODULE_6__["editGoodParameterPoint"])(name, copyOfarrayPointClass[i], value.value || '', value || {});
                    break;
                  }

                  i++;
                }
              } catch (e_7_1) {
                e_7 = {
                  error: e_7_1
                };
              } finally {
                try {
                  if (copyOfarrayPointClass_2_1 && !copyOfarrayPointClass_2_1.done && (_a = copyOfarrayPointClass_2["return"])) _a.call(copyOfarrayPointClass_2);
                } finally {
                  if (e_7) throw e_7.error;
                }
              }

              _this.setState({
                arrayPointClass: copyOfarrayPointClass
              });

              _this.callBack();
            },
            name: obj.name,
            index: line.id,
            data: obj.optionValues,
            defaultValue: _this.getGoodValue(line.id, obj.name),
            shape: _this.getGoodValue(line.id, 'shape').value,
            label: obj.label
          });
        } else if (obj.input_type === 'color') {
          item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSeriesColorPickerPoint__WEBPACK_IMPORTED_MODULE_9__["default"], {
            key: obj.id,
            keyInt: parseInt(obj.id, 10),
            color: _this.getGoodValue(line.id, 'color'),
            text: obj.label,
            width: 10,
            _onChange: function _onChange(keyInt, newColor) {
              var e_8, _a;

              var i;
              i = 0;

              var copyOfarrayPointClass = _this.state.arrayPointClass.slice();

              try {
                for (var copyOfarrayPointClass_3 = (e_8 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(copyOfarrayPointClass)), copyOfarrayPointClass_3_1 = copyOfarrayPointClass_3.next(); !copyOfarrayPointClass_3_1.done; copyOfarrayPointClass_3_1 = copyOfarrayPointClass_3.next()) {
                  var line_2 = copyOfarrayPointClass_3_1.value;

                  if (line_2.id === keyInt) {
                    copyOfarrayPointClass[i] = Object(Functions_editGoodParameterPoint__WEBPACK_IMPORTED_MODULE_6__["editGoodParameterPoint"])(obj.name, copyOfarrayPointClass[i], newColor, {});
                    break;
                  }

                  i++;
                }
              } catch (e_8_1) {
                e_8 = {
                  error: e_8_1
                };
              } finally {
                try {
                  if (copyOfarrayPointClass_3_1 && !copyOfarrayPointClass_3_1.done && (_a = copyOfarrayPointClass_3["return"])) _a.call(copyOfarrayPointClass_3);
                } finally {
                  if (e_8) throw e_8.error;
                }
              }

              _this.setState({
                arrayPointClass: copyOfarrayPointClass
              });

              _this.callBack();

              obj.setDefaultValueColor(newColor);
            }
          });
        } else {
          itemButton = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
            key: obj.id,
            label: obj.label,
            value: obj.value || '',
            name: obj.name,
            required: obj.required,
            _handleChange: _this.deleteOwnInput,
            id: obj.id,
            withLabel: false
          });
          item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
        }

        mapItems.push(item);
      }); //console.log(line.id)

      var divKey = 'inputPoint' + line.id.toString();
      var newInput = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: divKey,
        className: 'inputCoor',
        id: 'point' + line.id.toString(),
        style: {
          display: 'flex',
          flexDirection: 'row',
          marginBottom: '5px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__["Collapse"], {
        isOpen: this_1.state.listCollapsePoint[line.id - 1],
        label: this_1.defineLabelCollapse(line.id),
        onToggle: function onToggle(isOpen) {
          _this.props.options.listCollapsePoint[line.id - 1] = isOpen;

          _this.setState({
            listCollapsePoint: _this.props.options.listCollapsePoint
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Parametrage_parametresGeneriques__WEBPACK_IMPORTED_MODULE_13__["default"], {
        options: this_1.props.options,
        onOptionsChange: this_1.props.onOptionsChange,
        data: this_1.props.data,
        coordinateSpace: this_1.state.arrayPointClass[index],
        callBackToParent: this_1.callBackToOther,
        id: index
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Parametrage_manageLowerLimit__WEBPACK_IMPORTED_MODULE_14__["default"], {
        coordinate: this_1.state.arrayPointClass[index],
        callBack: this_1.callBackManageLowerLimit,
        lowerLimitCallBack: this_1.callBackLowerLimit,
        id: index
      })), mapItems), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          marginTop: '4px'
        }
      }, itemButton));
      finalItem = finalItem.concat(newInput);
      index++;
    };

    var this_1 = this;

    try {
      //console.log(this.state.arrayPointClass)
      for (var arrayInput_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arrayInput), arrayInput_2_1 = arrayInput_2.next(); !arrayInput_2_1.done; arrayInput_2_1 = arrayInput_2.next()) {
        var line = arrayInput_2_1.value;

        _loop_3(line);
      }
    } catch (e_6_1) {
      e_6 = {
        error: e_6_1
      };
    } finally {
      try {
        if (arrayInput_2_1 && !arrayInput_2_1.done && (_a = arrayInput_2["return"])) _a.call(arrayInput_2);
      } finally {
        if (e_6) throw e_6.error;
      }
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, finalItem);
  };

  PointForm.prototype.defineOptionsSelectPoint = function () {
    var options = [];
    var arrayPoints = this.props.options.arrayPoints;
    arrayPoints.forEach(function (point) {
      options.push({
        label: point.name
      });
    });
    return options;
  };

  PointForm.prototype.componentWillReceiveProps = function () {
    this.loadCoorParent();
    this.generateInputsPoints();
  };
  /** update state when props uneCoor change */


  PointForm.prototype.componentDidUpdate = function (prevProps) {
    this.loadCoorParent();
    this.generateInputsPoints();
  };
  /** update state when props uneCoor change */
  //public componentWillUpdate(prevProps: IProps) {
  // if (prevProps.oldArrayPointClass.length !== this.props.oldArrayPointClass.length) {
  // 	this.loadCoorParent();
  // 	this.generateInputsPoints();
  // 	console.log(this.props.oldArrayPointClass);
  // }
  //}

  /**
   * render()
  */


  PointForm.prototype.render = function () {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        marginBottom: '5px'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      onClick: function onClick() {
        _this.setState({
          arrayInput: [],
          arrayPointClass: [],
          debug: false
        });

        _this.loadCoorParent();

        _this.generateInputsPoints();
      }
    }, "Load Points")), this.generateInputsPoints(), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: 'buttonAddCoor'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      onClick: this.addNewFormPoint
    }, "Add point")));
  };

  return PointForm;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PointForm);

/***/ }),

/***/ "./components/renduTextDefault.tsx":
/*!*****************************************!*\
  !*** ./components/renduTextDefault.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Functions_Input_inputSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Functions/Input/inputSelect */ "./Functions/Input/inputSelect.tsx");




/**
 * class to manage police, size and style
 */

var RendutextDefault =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RendutextDefault, _super);

  function RendutextDefault(props) {
    var _this = _super.call(this, props) || this;
    /**
     * call parent with new data
     */


    _this.callParent = function () {
      var _a = _this.state,
          newPolice = _a.newPolice,
          taille = _a.taille,
          style = _a.style;
      var pPolice = newPolice.value || '';
      var pTaille = taille;
      var pStyle = style;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        police: pPolice,
        taille: pTaille,
        styleText: pStyle
      }));
    };
    /**
     * set police state async
     */


    _this.setStateAsyncPolice = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /**
     * set taille state async
     */


    _this.setStateAsyncTaille = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /**
     * set style state async
     */


    _this.setStateAsyncStyle = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /**
     * edit size
     */


    _this.handleChangeTaille = function (event) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.setStateAsyncTaille({
                taille: event.target.value
              })];

            case 1:
              _a.sent();

              this.callParent();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * edit style
     */


    _this.handleChangeStyle = function (event) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.setStateAsyncStyle({
                style: event.target.value
              })];

            case 1:
              _a.sent();

              this.callParent();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * edit police
     */


    _this.onChangePolice = function (value) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.setStateAsyncPolice({
                newPolice: value
              })];

            case 1:
              _a.sent();

              this.callParent();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /**
     * Change background picture
     */


    _this.onImageChanged = function (event) {
      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        imageUrl: event.target.value
      }));
    };

    _this.state = {
      newPolice: {
        value: _this.props.options.police,
        label: _this.props.options.police
      },
      taille: _this.props.options.taille,
      style: _this.props.options.styleText
    };
    return _this;
  }
  /**
   * html
   */


  RendutextDefault.prototype.render = function () {
    var police = [{
      value: 'Helvetica',
      label: 'Helvetica'
    }, {
      value: 'Arial',
      label: 'Arial'
    }, {
      value: 'sans-serif',
      label: 'sans-serif'
    }, {
      value: 'mono',
      label: 'mono'
    }];
    var options = this.props.options;

    var l10n = __webpack_require__(/*! Localization/en.json */ "./Localization/en.json");

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSelect__WEBPACK_IMPORTED_MODULE_3__["default"], {
      _onChange: this.onChangePolice,
      data: police,
      defaultValue: this.state.newPolice
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: l10n.textDefault.size,
      labelWidth: 10,
      inputWidth: 15,
      required: true,
      value: this.state.taille,
      onChange: this.handleChangeTaille
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: l10n.textDefault.style,
      labelWidth: 10,
      inputWidth: 15,
      required: true,
      value: this.state.style,
      onChange: this.handleChangeStyle
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: l10n.simpleEditor.pictureLink,
      labelWidth: 10,
      inputWidth: 30,
      type: 'text',
      onChange: this.onImageChanged,
      value: options.imageUrl || ''
    }));
  };

  return RendutextDefault;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RendutextDefault);

/***/ }),

/***/ "./components/timeSelector.tsx":
/*!*************************************!*\
  !*** ./components/timeSelector.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inputSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inputSelect */ "./inputSelect.tsx");




/**
 * def
 */

var TimeSelector =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TimeSelector, _super);

  function TimeSelector(props) {
    var _this = _super.call(this, props) || this;
    /**
     * result
     */


    _this.onTimeChanged = function (event) {
      var newData = _this.props.options.timeRange;

      if (event.currentTarget.id === 'from') {
        newData.from = event.currentTarget.value;
      }

      if (event.currentTarget.id === 'to') {
        newData.to = event.currentTarget.value;
      }

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        timeRange: newData
      }));
    };

    _this.onUrlChanged = function (event) {
      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        promUrl: event.currentTarget.value
      }));
    };

    _this.onStepChanged = function (value) {
      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        refresh: value
      }));
    };

    _this.onTimeQueryChanged = function (event) {
      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        timeQuery: event.currentTarget.value
      }));
    };

    return _this;
  }

  TimeSelector.prototype.render = function () {
    var options = this.props.options;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: 'section gf-form-group'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Define search's range"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Format: aaaa-mm-dd hh:mm:ss"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: 'TimeFrom',
      labelWidth: 5,
      inputWidth: 12,
      type: 'string',
      onChange: this.onTimeChanged.bind(this),
      id: 'from',
      value: options.timeRange.from || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: 'TimeTo',
      labelWidth: 5,
      inputWidth: 12,
      type: 'string',
      onChange: this.onTimeChanged.bind(this),
      id: 'to',
      value: options.timeRange.to || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Url of prometheus server"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: 'Prometheus URL:',
      labelWidth: 10,
      inputWidth: 15,
      type: 'string',
      onChange: this.onUrlChanged,
      value: options.promUrl || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_inputSelect__WEBPACK_IMPORTED_MODULE_3__["InputSelect"], {
      _onChange: this.onStepChanged,
      data: options.listStep,
      defaultValue: options.refresh
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: 'section gf-form-group'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Define search's moment"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Format: aaaa-mm-dd hh:mm:ss"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: 'TimeQuery',
      labelWidth: 5,
      inputWidth: 12,
      type: 'string',
      onChange: this.onTimeQueryChanged.bind(this),
      value: options.timeQuery || ''
    })));
  };

  return TimeSelector;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TimeSelector);

/***/ }),

/***/ "./inputSelect.tsx":
/*!*************************!*\
  !*** ./inputSelect.tsx ***!
  \*************************/
/*! exports provided: InputSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSelect", function() { return InputSelect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);


var InputSelect = function InputSelect(_a) {
  var _onChange = _a._onChange,
      data = _a.data,
      defaultValue = _a.defaultValue;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    onChange: function onChange(value) {
      return _onChange(value);
    },
    allowCustomValue: false,
    options: data,
    value: defaultValue
  }));
};

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./types.ts");
/* harmony import */ var SimplePanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! SimplePanel */ "./SimplePanel.tsx");
/* harmony import */ var SimpleEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! SimpleEditor */ "./SimpleEditor.tsx");




var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](SimplePanel__WEBPACK_IMPORTED_MODULE_2__["SimplePanel"]).setDefaults(_types__WEBPACK_IMPORTED_MODULE_1__["defaults"]).setEditor(SimpleEditor__WEBPACK_IMPORTED_MODULE_3__["SimpleEditor"]);

/***/ }),

/***/ "./style/CoordinateSpace.css":
/*!***********************************!*\
  !*** ./style/CoordinateSpace.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--8-1!../../node_modules/postcss-loader/src??ref--8-2!../../node_modules/sass-loader/lib/loader.js!./CoordinateSpace.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/lib/loader.js!./style/CoordinateSpace.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./style/SimpleEditor.css":
/*!********************************!*\
  !*** ./style/SimpleEditor.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--8-1!../../node_modules/postcss-loader/src??ref--8-2!../../node_modules/sass-loader/lib/loader.js!./SimpleEditor.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/lib/loader.js!./style/SimpleEditor.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./types.ts":
/*!******************!*\
  !*** ./types.ts ***!
  \******************/
/*! exports provided: defaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
/* harmony import */ var Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Models/TextObjectClass */ "./Models/TextObjectClass.tsx");
/* harmony import */ var Models_CoordinateSpaceInittialClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Models/CoordinateSpaceInittialClass */ "./Models/CoordinateSpaceInittialClass.tsx");


var defaults = {
  imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/be/Locator_Grid.png',
  arrayCoordinateSpaceInitial: new Models_CoordinateSpaceInittialClass__WEBPACK_IMPORTED_MODULE_1__["CoordinateSpaceInitialClass"](0, '', '', '', '', ''),
  arrayCoordinateSpace: [],
  arrayPoints: [],
  arrayLinks: [],
  arrayOrientedLinks: [],
  police: 'Helvetica',
  taille: '1em',
  styleText: 'normal',
  fondIsActive: true,
  contourIsActive: true,
  lowerLimit: [],
  colorMode: true,
  valueTextObject: new Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_0__["TextObject"]('', '', '', false, 'rgb(0, 0, 0, 0)', 'black', '', false, '', '', '', false, false, false, '', false, ''),
  info: 'Information sur votre panel',
  contentJson: 'contenu du dashboard',
  Id: 0,
  uid: '',
  title: '',
  style: '',
  editable: '',
  version: 0,
  refresh: {
    value: '0',
    label: '0'
  },
  shemaVersion: 0,
  timezone: '',
  actualPanel: {
    value: '0',
    label: '0'
  },
  panelList: [{
    value: '0',
    label: '0'
  }],
  panelId: 0,
  panelType: '',
  panelTargets: [],
  promTargets: [],
  promGlobalTargets: [],
  Json: {},
  timeRange: {
    from: '2020-01-02 00:00:00',
    to: '2020-01-02 00:00:00'
  },
  personalTarget: {
    expr: ""
  },
  timeQuery: '2020-01-02 00:00:00',
  promUrl: 'http://localhost:9090/api/v1/',
  queryProm: [],
  queryPromGlobal: [],
  queryPromRange: [],
  listStep: [{
    value: '0',
    label: '0'
  }],
  jsonQueryReturn: [],
  jsonGlobalQueryReturn: [],
  mainTarget: {
    expr: ''
  },
  mainQueryProm: '',
  mainQueryReturn: {
    status: '',
    data: {
      resultType: '',
      result: [{
        metric: {
          __name__: '',
          job: ''
        },
        value: []
      }]
    }
  },
  testMainQueryReturn: {},
  coordinatesToDrawLinkWithClick: [{
    id: 0
  }, {
    x: 0,
    y: 0,
    labelPoint: '',
    point: {},
    labelRegion: '',
    region: {}
  }, {
    x: 0,
    y: 0,
    labelPoint: '',
    point: {},
    labelRegion: '',
    region: {}
  }],
  indexOrientedLink: 0,
  indexPoint: 0,
  indexRegion: 0,
  listCollapsePoint: [],
  listCollapseOrientedLink: []
};

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map