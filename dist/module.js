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
exports.push([module.i, "div.inputCoor {\n  margin-bottom: 2%; }\n\ndiv.buttonAddCoor {\n  text-align: center; }\n", "",{"version":3,"sources":["CoordinateSpace.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB,EAAE","file":"CoordinateSpace.css","sourcesContent":["div.inputCoor {\n  margin-bottom: 2%; }\n\ndiv.buttonAddCoor {\n  text-align: center; }\n"]}]);
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
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./Functions/CreateInput/createInputCoor.tsx":
/*!***************************************************!*\
  !*** ./Functions/CreateInput/createInputCoor.tsx ***!
  \***************************************************/
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

/***/ "./Functions/CreateInput/createInputsOrientedLink.tsx":
/*!************************************************************!*\
  !*** ./Functions/CreateInput/createInputsOrientedLink.tsx ***!
  \************************************************************/
/*! exports provided: createInputsOrientedLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInputsOrientedLink", function() { return createInputsOrientedLink; });
/* harmony import */ var Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Models/InputSelectableClass */ "./Models/InputSelectableClass.tsx");

var createInputsOrientedLink = function createInputsOrientedLink(id, dataCoordinateSpace, dataPoint) {
  var newFieldOrientationLink = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'orientationLink', 'Orientation', 'orientationLink' + id.toString(), 'select', [{
    label: 'Monodirectional',
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

  var newFieldLabelLink = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'labelLink', 'Label', 'label' + id.toString(), 'text', [], '', true, 'Label', undefined); // const newFieldLabelLinkB: InputSelectableClass = new InputSelectableClass(id.toString() + 'labelLinkB',
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
  // const newFieldMainMetric: InputSelectableClass = new InputSelectableClass(id.toString() + 'refIdMainMetricLink',
  // 	'Ref Id Main Metric', 'refIdMainMetric' + id.toString(), 'text',
  // 	[], '', true, 'RefId Main Metric', undefined);
  // const newFieldKeyMainMetric: InputSelectableClass = new InputSelectableClass(id.toString() + 'keyMainMetricLink',
  // 	'Key Main Metric', 'keyMainMetric' + id.toString(), 'text',
  // 	[], '', true, 'Key Main Metric', undefined);
  // const newFieldKeyValueMainMetric: InputSelectableClass = new InputSelectableClass(id.toString() + 'keyValueMainMetricLink',
  // 	'Key Value Main Metric', 'keyValueMainMetric' + id.toString(), 'text',
  // 	[], '', true, 'Key Value Main Metric', undefined);

  var newFieldIsIncurved = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'isIncurved', 'Incurved', 'isIncurved' + id.toString(), 'select', [{
    label: 'Yes',
    value: true
  }, {
    label: 'No',
    value: false
  }], '', true, 'Incurved', undefined);
  var newFieldPointCPositionX = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'pointCX', 'Point C - X', 'pointCX' + id.toString(), 'text', [], '', true, 'PointC-X', undefined);
  var newFieldPointCPositionY = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'pointCY', 'Point C - Y', 'pointCY' + id.toString(), 'text', [], '', true, 'PointC-Y', undefined);
  var newFieldButton = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'deleteLink', 'Delete', 'delete' + id.toString(), 'button', [], '', false, undefined, 'delete');
  var finalArray = [newFieldLabelLink, newFieldOrientationLink, //newFieldPointIn,
  //newFieldRegionIn,
  newFieldPointAPositionX, newFieldPointAPositionY, //newFieldLabelLinkAPositionX,
  //newFieldLabelLinkAPositionY,
  //newFieldColorCoordinateA,
  //newFieldPointOut,
  //newFieldRegionOut,
  newFieldPointBPositionX, newFieldPointBPositionY, //newFieldLabelLinkB,
  //newFieldLabelLinkBPositionX,
  //newFieldLabelLinkBPositionY,
  //newFieldColorCoordinateB,
  // newFieldMainMetric,
  // newFieldKeyMainMetric,
  // newFieldKeyValueMainMetric,
  newFieldIsIncurved, newFieldPointCPositionX, newFieldPointCPositionY, newFieldButton];
  return finalArray;
};

/***/ }),

/***/ "./Functions/CreateInput/createInputsPoint.tsx":
/*!*****************************************************!*\
  !*** ./Functions/CreateInput/createInputsPoint.tsx ***!
  \*****************************************************/
/*! exports provided: createInputsPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInputsPoint", function() { return createInputsPoint; });
/* harmony import */ var Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Models/InputSelectableClass */ "./Models/InputSelectableClass.tsx");
 //import { SelectableValue } from '@grafana/data';
//import { RegionClass } from 'Models/RegionClass';

var createInputsPoint = function createInputsPoint(id) {
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
  // const newFieldMainMetric: InputSelectableClass = new InputSelectableClass(id.toString() + 'refIdMainMetricPoint',
  // 	'Ref Id Main Metric', 'refIdMainMetric' + id.toString(), 'text',
  // 	[], '', true, 'RefId Main Metric', undefined);
  // const newFieldKeyMainMetric: InputSelectableClass = new InputSelectableClass(id.toString() + 'keyMainMetricPoint',
  // 	'Key Main Metric', 'keyMainMetric' + id.toString(), 'text',
  // 	[], '', true, 'Key Main Metric', undefined);
  // const newFieldKeyValueMainMetric: InputSelectableClass = new InputSelectableClass(id.toString() + 'keyValueMainMetricPoint',
  // 	'Key Value Main Metric', 'keyValueMainMetric' + id.toString(), 'text',
  // 	[], '', true, 'Key Value Main Metric', undefined);

  var newFieldButton = new Models_InputSelectableClass__WEBPACK_IMPORTED_MODULE_0__["InputSelectableClass"](id.toString() + 'deletePoint', 'Delete', 'delete' + id.toString(), 'button', [], '', true, undefined, 'Delete');
  var finalArray = [newFieldLabel, //newFieldLinkWithCoordonateSpace,
  newFieldDrawGraphicMarker, //newFieldShape,
  newFieldSizeWidthShape, newFieldSizeHeightShape, //newFieldColor,
  newFieldRotateArrow, newFieldPositionXShape, newFieldPositionYShape, // newFieldPositionLabelX,
  // newFieldPositionLabelY,
  // newFieldMainMetric,
  // newFieldKeyMainMetric,
  // newFieldKeyValueMainMetric,
  newFieldButton];
  return finalArray;
};

/***/ }),

/***/ "./Functions/EditParameter/editGoodParameter.tsx":
/*!*******************************************************!*\
  !*** ./Functions/EditParameter/editGoodParameter.tsx ***!
  \*******************************************************/
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
    editCoor.coordinate.xMin = newValue;
  } else if (name.startsWith('positionXMax')) {
    editCoor.coordinate.xMax = newValue;
  } else if (name.startsWith('positionYMin')) {
    editCoor.coordinate.yMin = newValue;
  } else if (name.startsWith('positionYMax')) {
    editCoor.coordinate.yMax = newValue;
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

/***/ "./Functions/EditParameter/editGoodParameterOrientedLink.tsx":
/*!*******************************************************************!*\
  !*** ./Functions/EditParameter/editGoodParameterOrientedLink.tsx ***!
  \*******************************************************************/
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
  if (name.startsWith('label')) {
    editCoor.label = newValue;
  } else if (name.startsWith('orientationLink')) {
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
  } else if (name.startsWith('refIdMainMetric')) {
    editCoor.mainMetric.refId = newValue;
  } else if (name.startsWith('keyMainMetric')) {
    editCoor.mainMetric.key = newValue;
  } else if (name.startsWith('keyValueMainMetric')) {
    editCoor.mainMetric.keyValue = newValue;
  } else if (name.startsWith('isIncurved')) {
    editCoor.isIncurved = newValueSelect;
  } else if (name.startsWith('pointCX')) {
    editCoor.pointCPositionX = newValue;
  } else if (name.startsWith('pointCY')) {
    editCoor.pointCPositionY = newValue;
  } //else if (name.startsWith('positionXLabelLinkA')) {
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

/***/ "./Functions/EditParameter/editGoodParameterPoint.tsx":
/*!************************************************************!*\
  !*** ./Functions/EditParameter/editGoodParameterPoint.tsx ***!
  \************************************************************/
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
      type: "button",
      required: required,
      name: name,
      id: id,
      onClick: _handleChange,
      value: label || ''
    }));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: _handleChange,
      variant: "danger",
      id: id,
      size: "md"
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
    className: "form-field"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["FormLabel"], {
    width: width || Math.round(text.length * 1.7)
  }, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "colorPicker",
    style: {
      margin: '0.5%',
      padding: '0.5%',
      backgroundColor: '#1f1f20',
      border: '3px solid black'
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
    className: "form-field"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["FormLabel"], {
    width: width || Math.round(text.length * 1.7)
  }, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "colorPicker",
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
    className: "form-field"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["FormLabel"], {
    width: width || Math.round(text.length * 1.7)
  }, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "colorPicker",
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
    type: "text",
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
      _handleChange = _a._handleChange,
      isIncurved = _a.isIncurved;

  if (name.startsWith('pointCX') || name.startsWith('pointCY')) {
    if (isIncurved.value) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["FormField"], {
        label: label,
        labelWidth: 10,
        inputWidth: 20,
        type: "text",
        required: required,
        name: name,
        value: value,
        onChange: _handleChange,
        placeholder: placeholder
      }));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
    }
  } else {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__["FormField"], {
      label: label,
      labelWidth: 10,
      inputWidth: 20,
      type: "text",
      required: required,
      name: name,
      value: value,
      onChange: _handleChange,
      placeholder: placeholder
    }));
  }
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
        type: "text",
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
      type: "text",
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

  var data = [];

  try {
    for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.data.series), _c = _b.next(); !_c.done; _c = _b.next()) {
      var line = _c.value;

      if (line.refId === region.mainMetric.refId) {
        data.push(line);
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

  var data = [];

  try {
    for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(region.metrics), _d = _c.next(); !_d.done; _d = _c.next()) {
      var metric = _d.value;

      try {
        for (var _e = (e_3 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.data.series)), _f = _e.next(); !_f.done; _f = _e.next()) {
          var line = _f.value;

          if (line.refId === metric.refId) {
            data.push(line);
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

  var data = [];

  try {
    for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.data.series), _c = _b.next(); !_c.done; _c = _b.next()) {
      var line = _c.value;

      if (line.refId === point.mainMetric.refId) {
        data.push(line);
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

  var data = [];

  try {
    for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(point.metrics), _d = _c.next(); !_d.done; _d = _c.next()) {
      var metric = _d.value;

      try {
        for (var _e = (e_6 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.data.series)), _f = _e.next(); !_f.done; _f = _e.next()) {
          var line = _f.value;

          if (line.refId === metric.refId) {
            data.push(line);
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

  var data = [];

  try {
    for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.data.series), _c = _b.next(); !_c.done; _c = _b.next()) {
      var line = _c.value;

      if (line.refId === link.mainMetric.refId) {
        data.push(line);
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

  var data = [];

  try {
    for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(link.metrics), _d = _c.next(); !_d.done; _d = _c.next()) {
      var metric = _d.value;

      try {
        for (var _e = (e_9 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.data.series)), _f = _e.next(); !_f.done; _f = _e.next()) {
          var line = _f.value;

          if (line.refId === metric.refId) {
            data.push(line);
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

  var data = [];

  try {
    for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.data.series), _c = _b.next(); !_c.done; _c = _b.next()) {
      var line = _c.value;

      if (line.refId === orientedLink.mainMetric.refId) {
        data.push(line);
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

  var data = [];

  try {
    for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(orientedLink.metrics), _d = _c.next(); !_d.done; _d = _c.next()) {
      var metric = _d.value;

      try {
        for (var _e = (e_12 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.data.series)), _f = _e.next(); !_f.done; _f = _e.next()) {
          var line = _f.value;

          if (line.refId === metric.refId) {
            data.push(line);
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
  var e_13, _a, e_14, _b, e_15, _c, e_16, _d;

  try {
    // Update regions
    for (var _e = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.options.regionCoordinateSpace), _f = _e.next(); !_f.done; _f = _e.next()) {
      var region = _f.value;
      reqMetricRegion(region, props);
      reqMetricAuxRegion(region, props);
    }
  } catch (e_13_1) {
    e_13 = {
      error: e_13_1
    };
  } finally {
    try {
      if (_f && !_f.done && (_a = _e["return"])) _a.call(_e);
    } finally {
      if (e_13) throw e_13.error;
    }
  }

  try {
    // Update links
    for (var _g = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.options.arrayLinks), _h = _g.next(); !_h.done; _h = _g.next()) {
      var link = _h.value;
      reqMetricLink(link, props);
      reqMetricAuxLink(link, props);
    }
  } catch (e_14_1) {
    e_14 = {
      error: e_14_1
    };
  } finally {
    try {
      if (_h && !_h.done && (_b = _g["return"])) _b.call(_g);
    } finally {
      if (e_14) throw e_14.error;
    }
  }

  try {
    // Update links
    for (var _j = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.options.arrayOrientedLinks), _k = _j.next(); !_k.done; _k = _j.next()) {
      var orientedLink = _k.value;
      reqMetricOrientedLink(orientedLink, props);
      reqMetricAuxOrientedLink(orientedLink, props);
    }
  } catch (e_15_1) {
    e_15 = {
      error: e_15_1
    };
  } finally {
    try {
      if (_k && !_k.done && (_c = _j["return"])) _c.call(_j);
    } finally {
      if (e_15) throw e_15.error;
    }
  }

  try {
    // Update points
    for (var _l = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(props.options.arrayPoints), _m = _l.next(); !_m.done; _m = _l.next()) {
      var point = _m.value;
      reqMetricPoint(point, props);
      reqMetricAuxPoint(point, props);
    }
  } catch (e_16_1) {
    e_16 = {
      error: e_16_1
    };
  } finally {
    try {
      if (_m && !_m.done && (_d = _l["return"])) _d.call(_l);
    } finally {
      if (e_16) throw e_16.error;
    }
  }
};

/***/ }),

/***/ "./Functions/getLowerLimit.tsx":
/*!*************************************!*\
  !*** ./Functions/getLowerLimit.tsx ***!
  \*************************************/
/*! exports provided: getLowerLimit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLowerLimit", function() { return getLowerLimit; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");

/**
 * Get color with lower limit and prometheus value
 * @returns {LowerLimit} new color value
 */

var getLowerLimit = function getLowerLimit(coordinate, value) {
  var e_1, _a;

  var lowerLimit = coordinate.lowerLimit;
  var result = {
    colorBack: '',
    colorBorder: '',
    sizeBorder: 0
  };

  if (coordinate.colorMode && value) {
    try {
      for (var lowerLimit_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(lowerLimit), lowerLimit_1_1 = lowerLimit_1.next(); !lowerLimit_1_1.done; lowerLimit_1_1 = lowerLimit_1.next()) {
        var line = lowerLimit_1_1.value;
        var min = line.lowerLimitMin.replace('>', '');
        var minFloat = parseFloat(min);
        var maxFloat = parseFloat(line.lowerLimitMax);

        if ((minFloat <= value || !line.lowerLimitMin) && (maxFloat >= value || !line.lowerLimitMax)) {
          if (lowerLimit.length > 0) {
            result.colorBack = coordinate.traceBack ? line.backColor : '';
            result.colorBorder = coordinate.traceBorder ? line.borderColor : '';
            result.sizeBorder = coordinate.traceBorder ? parseInt(line.sizeBorder, 10) : 0;
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
      result.colorBack = coordinate.traceBack ? lowerLimit[0].backColor : '';
      result.colorBorder = coordinate.traceBorder ? lowerLimit[0].borderColor : '';
      result.sizeBorder = coordinate.traceBorder ? parseInt(lowerLimit[0].sizeBorder, 10) : 0;
    }
  }

  return result;
};

/***/ }),

/***/ "./Functions/getResultQuery.tsx":
/*!**************************************!*\
  !*** ./Functions/getResultQuery.tsx ***!
  \**************************************/
/*! exports provided: getResultQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResultQuery", function() { return getResultQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");

/** search is key and keyValue is in query */

var searchNameIsKey = function searchNameIsKey(query, mainMetric) {
  var e_1, _a;

  var _b;

  if (mainMetric.key === '' && mainMetric.keyValue === '') {
    return true;
  }

  var nameQuery = ((_b = query.name) === null || _b === void 0 ? void 0 : _b.split(',').map(function (value) {
    return value.replace(/[\"{}]/gm, '');
  })) || [];

  if (nameQuery && nameQuery.length > 0) {
    try {
      for (var nameQuery_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(nameQuery), nameQuery_1_1 = nameQuery_1.next(); !nameQuery_1_1.done; nameQuery_1_1 = nameQuery_1.next()) {
        var oneQuery = nameQuery_1_1.value;
        var keyValue = oneQuery.split('=');

        if (oneQuery.length === 2) {
          if (keyValue[0] === mainMetric.key && keyValue[1] === mainMetric.keyValue) {
            return true;
          }
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (nameQuery_1_1 && !nameQuery_1_1.done && (_a = nameQuery_1["return"])) _a.call(nameQuery_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  }

  return false;
};

var getResultQuery = function getResultQuery(mainMetric) {
  var e_2, _a;

  var cnt = null;

  if (mainMetric.returnQuery && mainMetric.returnQuery.length > 0) {
    var debug = [];
    var countValue = 0;
    cnt = 0;

    try {
      for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(mainMetric.returnQuery), _c = _b.next(); !_c.done; _c = _b.next()) {
        var line = _c.value;

        if (searchNameIsKey(line, mainMetric).toString()) {
          var sizeQuery = line.fields[0].values.length;

          for (var i = 0; i < sizeQuery; i++) {
            if (line.fields.length > 0 && line.fields[0].values.get(i)) {
              cnt += line.fields[0].values.get(i);
              debug.push(line.fields[0].values.get(i));
              ++countValue;
            }
          }
        }
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

    if (mainMetric.manageValue === 'avg') {
      cnt /= countValue;
    } else if (mainMetric.manageValue === 'error') {
      if (countValue > 1) {
        cnt = null;
      }
    }
  }

  return cnt;
};

/***/ }),

/***/ "./Functions/importConfig.tsx":
/*!************************************!*\
  !*** ./Functions/importConfig.tsx ***!
  \************************************/
/*! exports provided: fetchConfFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchConfFile", function() { return fetchConfFile; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
// const header : RequestInit = {
//     method: 'GET',
//     headers: new Headers(),
//     mode: 'cors',
//     cache: "default"
// };

var fetchConfFile = function fetchConfFile(filesUrl) {
  var completFile = [];
  filesUrl.forEach(function (url) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
      var response, responseJson, error_1;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 3,, 4]);

            return [4
            /*yield*/
            , fetch(url)];

          case 1:
            response = _a.sent();
            return [4
            /*yield*/
            , response.json()];

          case 2:
            responseJson = _a.sent();
            completFile.push(responseJson);
            return [3
            /*break*/
            , 4];

          case 3:
            error_1 = _a.sent();
            console.error(error_1);
            return [3
            /*break*/
            , 4];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  });
  return completFile;
};

/***/ }),

/***/ "./Functions/initPoint.tsx":
/*!*********************************!*\
  !*** ./Functions/initPoint.tsx ***!
  \*********************************/
/*! exports provided: initPoint, clonePoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPoint", function() { return initPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clonePoint", function() { return clonePoint; });
/* harmony import */ var _Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Models/TextObjectClass */ "./Models/TextObjectClass.tsx");
/* harmony import */ var _Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Models/LinkURLClass */ "./Models/LinkURLClass.tsx");
/* harmony import */ var _Models_PositionParameterClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/PositionParameterClass */ "./Models/PositionParameterClass.tsx");
/* harmony import */ var _Models_PointClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/PointClass */ "./Models/PointClass.tsx");




var initPoint = function initPoint(index) {
  var newId = index;
  var initTextObject = new _Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_0__["TextObject"]('', false, 'rgba(255, 255, 255, 0)', 'rgba(0, 0, 0, 1)', {
    italic: false,
    bold: false,
    underline: false
  }, false, {
    legendElement: '',
    numericFormatElement: '',
    unit: '',
    displayObjectInText: false,
    // 'displayObjectPermanently': false,
    addColorTextElement: false,
    colorTextElement: 'white',
    addColorBackElement: false,
    colorBackElement: 'black'
  }, {
    legendElement: '',
    numericFormatElement: '',
    unit: '',
    displayObjectInText: false,
    // 'displayObjectPermanently': false,
    addColorTextElement: false,
    colorTextElement: 'white',
    addColorBackElement: false,
    colorBackElement: 'black'
  });
  var linkURL = new _Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_1__["LinkURLClass"]('', '', '');
  var positionParameter = new _Models_PositionParameterClass__WEBPACK_IMPORTED_MODULE_2__["PositionParameterClass"]('0', '0', '0', '0', {}, {});
  var newCoordinate = new _Models_PointClass__WEBPACK_IMPORTED_MODULE_3__["PointClass"](newId, linkURL, '', [], '', initTextObject, {
    key: '',
    unit: '',
    format: '',
    keyValue: '',
    refId: '',
    manageValue: 'avg'
  }, [], false, false, false, positionParameter, 'point' + newId.toString(), '', {
    label: 'Yes',
    value: 'true'
  }, {
    label: 'Circle',
    value: 'circle'
  }, {
    label: 'Medium',
    value: 'medium'
  }, {
    label: 'Medium',
    value: 'medium'
  }, '0', '0', '0', 'black', [], []);
  return newCoordinate;
};
var clonePoint = function clonePoint(point) {
  var initTextObject = new _Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_0__["TextObject"]( // point.textObj.legend,
  point.textObj.value, point.textObj.isTextRegion, point.textObj.colorBack, point.textObj.colorText, point.textObj.style, point.textObj.generateObjectText, point.textObj.valueGenerateObjectText, point.textObj.generateAuxiliaryElement);
  var linkURL = new _Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_1__["LinkURLClass"](point.linkURL.followLink, point.linkURL.hoveringTooltipLink, point.linkURL.hoveringTooltipText);
  var positionParameter = new _Models_PositionParameterClass__WEBPACK_IMPORTED_MODULE_2__["PositionParameterClass"](point.positionParameter.labelAPositionX, point.positionParameter.labelAPositionY, point.positionParameter.labelBPositionX, point.positionParameter.labelBPositionY, point.positionParameter.tooltipPositionA, point.positionParameter.tooltipPositionB);
  var mainMetric = {
    key: point.mainMetric.key,
    unit: point.mainMetric.unit,
    format: point.mainMetric.format,
    keyValue: point.mainMetric.keyValue,
    refId: point.mainMetric.refId,
    expr: point.mainMetric.expr,
    returnQuery: point.mainMetric.returnQuery,
    manageValue: point.mainMetric.manageValue
  };
  var newCoordinate = new _Models_PointClass__WEBPACK_IMPORTED_MODULE_3__["PointClass"](point.id, linkURL, point.meta, point.lowerLimit, point.label, initTextObject, mainMetric, point.metrics, point.colorMode, point.traceBack, point.traceBorder, positionParameter, point.name, point.valueMetric, point.drawGraphicMarker, point.shape, point.sizeWidth, point.sizeHeight, point.rotateArrow, point.positionShapeX, point.positionShapeY, point.color, point.associateOrientedLinksIn, point.associateOrientedLinksOut);
  return newCoordinate;
};

/***/ }),

/***/ "./Functions/initRegionCoordinateSpace.tsx":
/*!*************************************************!*\
  !*** ./Functions/initRegionCoordinateSpace.tsx ***!
  \*************************************************/
/*! exports provided: initRegionCoordinateSpace, cloneRegionCoordinateSpace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initRegionCoordinateSpace", function() { return initRegionCoordinateSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneRegionCoordinateSpace", function() { return cloneRegionCoordinateSpace; });
/* harmony import */ var Models_RegionClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Models/RegionClass */ "./Models/RegionClass.tsx");
/* harmony import */ var Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Models/TextObjectClass */ "./Models/TextObjectClass.tsx");
/* harmony import */ var Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Models/LinkURLClass */ "./Models/LinkURLClass.tsx");
/* harmony import */ var Models_PositionParameterClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Models/PositionParameterClass */ "./Models/PositionParameterClass.tsx");




/** init CoordinateSpaceExtendClass */

var initRegionCoordinateSpace = function initRegionCoordinateSpace(index) {
  var newId = index + 1;
  var initTextObject = new Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_1__["TextObject"]('', false, 'rgba(255, 255, 255, 0)', 'rgba(0, 0, 0, 1)', {
    bold: false,
    italic: false,
    underline: false
  }, false, {
    legendElement: '',
    numericFormatElement: '',
    unit: '',
    displayObjectInText: false,
    // 'displayObjectPermanently': false,
    addColorTextElement: false,
    colorTextElement: 'white',
    addColorBackElement: false,
    colorBackElement: 'black'
  }, {
    legendElement: '',
    numericFormatElement: '',
    unit: '',
    displayObjectInText: false,
    // 'displayObjectPermanently': false,
    addColorTextElement: false,
    colorTextElement: 'white',
    addColorBackElement: false,
    colorBackElement: 'black'
  });
  var linkURL = new Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_2__["LinkURLClass"]('', '', '');
  var coords = {
    xMin: '0',
    xMax: '0',
    yMin: '0',
    yMax: '0'
  };
  var positionParameter = new Models_PositionParameterClass__WEBPACK_IMPORTED_MODULE_3__["PositionParameterClass"]('0', '0', '0', '0', {}, {});
  var newCoordinate = new Models_RegionClass__WEBPACK_IMPORTED_MODULE_0__["RegionClass"](newId, linkURL, '', [], '', initTextObject, {
    key: '',
    unit: '',
    format: '',
    keyValue: '',
    refId: '',
    manageValue: 'avg'
  }, [], false, false, false, positionParameter, '', [], coords, true, '');
  return newCoordinate;
};
var cloneRegionCoordinateSpace = function cloneRegionCoordinateSpace(region) {
  var initTextObject = new Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_1__["TextObject"]( // region.textObj.legend,
  region.textObj.value, region.textObj.isTextRegion, region.textObj.colorBack, region.textObj.colorText, region.textObj.style, region.textObj.generateObjectText, region.textObj.valueGenerateObjectText, region.textObj.generateAuxiliaryElement);
  var linkURL = new Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_2__["LinkURLClass"](region.linkURL.followLink, region.linkURL.hoveringTooltipLink, region.linkURL.hoveringTooltipText);
  var coords = {
    xMin: region.coords.xMin,
    xMax: region.coords.xMax,
    yMin: region.coords.yMin,
    yMax: region.coords.yMax
  };
  var positionParameter = new Models_PositionParameterClass__WEBPACK_IMPORTED_MODULE_3__["PositionParameterClass"](region.positionParameter.labelAPositionX, region.positionParameter.labelAPositionY, region.positionParameter.labelBPositionX, region.positionParameter.labelBPositionY, region.positionParameter.tooltipPositionA, region.positionParameter.tooltipPositionB);
  var mainMetric = {
    key: region.mainMetric.key,
    unit: region.mainMetric.unit,
    format: region.mainMetric.format,
    keyValue: region.mainMetric.keyValue,
    refId: region.mainMetric.refId,
    expr: region.mainMetric.expr,
    returnQuery: region.mainMetric.returnQuery,
    manageValue: region.mainMetric.manageValue
  };
  var newCoordinate = new Models_RegionClass__WEBPACK_IMPORTED_MODULE_0__["RegionClass"](region.id, linkURL, region.meta, region.lowerLimit, region.label, initTextObject, mainMetric, region.metrics, region.colorMode, region.traceBack, region.traceBorder, positionParameter, region.idSVG, region.orientedLink, coords, region.mode, region.img);
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

/***/ "./Functions/otherFunction.tsx":
/*!*************************************!*\
  !*** ./Functions/otherFunction.tsx ***!
  \*************************************/
/*! exports provided: calculRealCoordinate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculRealCoordinate", function() { return calculRealCoordinate; });
/* harmony import */ var Functions_isNumFloat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Functions/isNumFloat */ "./Functions/isNumFloat.tsx");

/**
 * Check limit of coordinate
 * @param {number} value number to test
 * @param {number} position 1 if xMin, 2 if xMax, 3 if yMin, 4 if yMax
 * @returns 0 if it's good or 1 otherwise
 */

var verifLimit = function verifLimit(useLimit, limit, intValue, position) {
  // const { useLimit, limit } = this.props;
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


var transformCoordinateToPx = function transformCoordinateToPx(size, isMax) {
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
/** calcul value for top, bottom, left and right div coordinate */


var calculRealCoordinate = function calculRealCoordinate(coordinate, useLimit, limit) {
  var pLeft;
  var pRight;
  var pTop;
  var pBottom;
  var xMin = 0;
  var xMax = 0;
  var yMin = 0;
  var yMax = 0;
  xMin = Object(Functions_isNumFloat__WEBPACK_IMPORTED_MODULE_0__["isNumFloat"])(coordinate.coords.xMin) ? parseInt(coordinate.coords.xMin, 10) : 0;
  xMax = Object(Functions_isNumFloat__WEBPACK_IMPORTED_MODULE_0__["isNumFloat"])(coordinate.coords.xMax) ? parseInt(coordinate.coords.xMax, 10) : 0;
  yMin = Object(Functions_isNumFloat__WEBPACK_IMPORTED_MODULE_0__["isNumFloat"])(coordinate.coords.yMin) ? parseInt(coordinate.coords.yMin, 10) : 0;
  yMax = Object(Functions_isNumFloat__WEBPACK_IMPORTED_MODULE_0__["isNumFloat"])(coordinate.coords.yMax) ? parseInt(coordinate.coords.yMax, 10) : 0;

  if (useLimit) {
    xMin = verifLimit(useLimit, limit, xMin, 1);
    xMax = verifLimit(useLimit, limit, xMax, 2);
    yMin = verifLimit(useLimit, limit, yMin, 3);
    yMax = verifLimit(useLimit, limit, yMax, 4);
  }

  if (xMax >= 0) {
    pLeft = transformCoordinateToPx(xMin, false).toString() + '%';
    pRight = transformCoordinateToPx(xMax, true).toString() + '%';
  } else {
    xMin = xMin * -1;
    pRight = transformCoordinateToPx(xMin, false).toString() + '%';
    pLeft = transformCoordinateToPx(xMax, true).toString() + '%';
  }

  if (yMax >= 0) {
    pBottom = transformCoordinateToPx(yMin, false).toString() + '%';
    pTop = transformCoordinateToPx(yMax, true).toString() + '%';
  } else {
    yMin = yMin * -1;
    pTop = transformCoordinateToPx(yMin, false).toString() + '%';
    pBottom = transformCoordinateToPx(yMax, true).toString() + '%';
  }

  return {
    left: pLeft,
    right: pRight,
    top: pTop,
    bottom: pBottom
  };
};

/***/ }),

/***/ "./Functions/parseColor.tsx":
/*!**********************************!*\
  !*** ./Functions/parseColor.tsx ***!
  \**********************************/
/*! exports provided: parseColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseColor", function() { return parseColor; });
var parseColor = function parseColor(color) {
  var colorEdit = color;
  var transparency = '';

  if (color.indexOf('#') > -1) {
    colorEdit = color.replace('rgba', 'rgb');

    if (colorEdit.indexOf(',') > -1) {
      var arrayColor = colorEdit.split(',');
      colorEdit = arrayColor[0] + ',' + arrayColor[1] + ',' + arrayColor[2] + ')';

      if (arrayColor.length > 3) {
        transparency = arrayColor[3].replace(')', '');
      }
    }
  }

  return {
    color: colorEdit,
    transparency: transparency
  };
};

/***/ }),

/***/ "./Functions/searchIDLimit.tsx":
/*!*************************************!*\
  !*** ./Functions/searchIDLimit.tsx ***!
  \*************************************/
/*! exports provided: returnAllId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "returnAllId", function() { return returnAllId; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");

/** verif limit for one coordinate */

var verifAllLimit = function verifAllLimit(n, limit, isWith) {
  if (isWith) {
    if (limit[0] <= n && limit[1] >= n) {
      return true;
    }
  } else {
    if (limit[2] <= n && limit[3] >= n) {
      return true;
    }
  }

  return false;
};
/** search all coordinate if atribute is d */


var searchOtherLimitDAttribute = function searchOtherLimitDAttribute(data, limit) {
  var e_1, _a, e_2, _b;

  var parseWithLetter = [];
  var regex = /[a-zA-Z]{1}[0-9.\W]*/g;
  var tmp;

  do {
    tmp = regex.exec(data);

    if (tmp) {
      parseWithLetter.push(tmp.toString());
    }
  } while (tmp);

  try {
    for (var parseWithLetter_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(parseWithLetter), parseWithLetter_1_1 = parseWithLetter_1.next(); !parseWithLetter_1_1.done; parseWithLetter_1_1 = parseWithLetter_1.next()) {
      var line = parseWithLetter_1_1.value;
      var tmpBis = line.split(' ');
      var index = 0;

      try {
        for (var tmpBis_1 = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(tmpBis)), tmpBis_1_1 = tmpBis_1.next(); !tmpBis_1_1.done; tmpBis_1_1 = tmpBis_1.next()) {
          var lineTmp = tmpBis_1_1.value;

          if (lineTmp === '') {
            break;
          }

          if (index !== 0 && index % 2 !== 0) {
            if (!verifAllLimit(parseInt(lineTmp, 10), limit, true)) {
              return true;
            }
          } else if (index !== 0) {
            if (!verifAllLimit(parseInt(lineTmp, 10), limit, false)) {
              return true;
            }
          }

          ++index;
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (tmpBis_1_1 && !tmpBis_1_1.done && (_b = tmpBis_1["return"])) _b.call(tmpBis_1);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (parseWithLetter_1_1 && !parseWithLetter_1_1.done && (_a = parseWithLetter_1["return"])) _a.call(parseWithLetter_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return false;
};
/** search if x and y are in limit */


var searchOtherLimitXYAttribute = function searchOtherLimitXYAttribute(element, limit, labelX, labelY) {
  var x = parseInt(element.getAttribute(labelX) || '0', 10);
  var y = parseInt(element.getAttribute(labelY) || '0', 10);

  if (x !== null && y !== null) {
    if (verifAllLimit(x, limit, true) && verifAllLimit(y, limit, false)) {
      return false;
    }
  }

  return true;
};
/** search if x1|2 and y1|2 are in limit */


var searchOtherLimitXnYnAttribute = function searchOtherLimitXnYnAttribute(element, limit) {
  var x1 = parseInt(element.getAttribute('x1') || '0', 10);
  var x2 = parseInt(element.getAttribute('x2') || '0', 10);
  var y1 = parseInt(element.getAttribute('y1') || '0', 10);
  var y2 = parseInt(element.getAttribute('y2') || '0', 10);

  if (x1 && x2 && y1 && y2) {
    if (verifAllLimit(x1, limit, true) && verifAllLimit(x2, limit, true) && verifAllLimit(y1, limit, false) && verifAllLimit(y2, limit, false)) {
      return false;
    }
  }

  return true;
};
/** search if region id svg is in limit */


var regionIsOverLimit = function regionIsOverLimit(element, limit) {
  if (!element) {
    return true;
  }

  var attribute = element.getAttribute('d');

  if (attribute) {
    return searchOtherLimitDAttribute(attribute, limit);
  }

  attribute = element.getAttribute('x');

  if (attribute) {
    return searchOtherLimitXYAttribute(element, limit, 'x', 'y');
  }

  attribute = element.getAttribute('x1');

  if (attribute) {
    return searchOtherLimitXnYnAttribute(element, limit);
  }

  attribute = element.getAttribute('cx');

  if (attribute) {
    return searchOtherLimitXYAttribute(element, limit, 'cx', 'cy');
  }

  return true;
};
/** convert initial percent coordinate from -100 -> 100 to 0 -> 100 */


var convertInitialCoordinate = function convertInitialCoordinate(n) {
  var midPercent = 50;
  n = n >= 0 ? (n / 2 || 0) + midPercent : -n / 2 - midPercent;
  return n;
};
/** return all id list in principal id */


var returnAllId = function returnAllId(coordinate, baseMap) {
  var _a;

  var arrId = [];
  var arrIdVerif = [];
  var listElement = (_a = document.getElementById(baseMap.idSVG)) === null || _a === void 0 ? void 0 : _a.querySelectorAll('*[id]');

  if (listElement) {
    var limit_1 = [parseInt(coordinate.xMin, 10), parseInt(coordinate.xMax, 10), parseInt(coordinate.yMin, 10), parseInt(coordinate.yMax, 10)];
    limit_1[0] = convertInitialCoordinate(limit_1[0]);
    limit_1[1] = convertInitialCoordinate(limit_1[1]);
    limit_1[2] = convertInitialCoordinate(limit_1[2]);
    limit_1[3] = convertInitialCoordinate(limit_1[3]);
    var sizeHeight = parseInt(baseMap.height, 10);
    var sizeWidth = parseInt(baseMap.width, 10);
    var percent = 100;
    limit_1[0] = limit_1[0] / percent || 0;
    limit_1[0] = sizeWidth * limit_1[0];
    limit_1[1] = limit_1[1] / percent || 0;
    limit_1[1] = sizeWidth * limit_1[1];
    limit_1[2] = limit_1[2] / percent || 0;
    limit_1[2] = sizeHeight * limit_1[2];
    limit_1[3] = limit_1[3] / percent || 0;
    limit_1[3] = sizeHeight * limit_1[3];
    Array.from(listElement).forEach(function (e) {
      if (!regionIsOverLimit(document.getElementById(e.id), limit_1)) {
        arrId.push(e.id);
      }

      arrIdVerif.push(e.id);
    });
    arrId.sort(function (a, b) {
      if (a < b) {
        return -1;
      }

      if (a > b) {
        return 1;
      }

      return 0;
    });
  } else {
    console.error('id svg not found');
  }

  return arrId;
};

/***/ }),

/***/ "./Functions/searchMinMaxIdSVG.tsx":
/*!*****************************************!*\
  !*** ./Functions/searchMinMaxIdSVG.tsx ***!
  \*****************************************/
/*! exports provided: searchMinMaxIdSVG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchMinMaxIdSVG", function() { return searchMinMaxIdSVG; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");


var initICoord4DInt = function initICoord4DInt() {
  return {
    xMin: 0,
    xMax: 0,
    yMin: 0,
    yMax: 0
  };
};

var searchForD = function searchForD(str) {
  var e_1, _a, e_2, _b;

  var coordinate = initICoord4DInt();
  var verif = [false, false, false, false];
  var parseWithLetter = [];
  var regex = /[a-zA-Z]{1}[0-9.\W]*/g;
  var tmp;

  do {
    tmp = regex.exec(str);

    if (tmp) {
      parseWithLetter.push(tmp.toString());
    }
  } while (tmp);

  try {
    for (var parseWithLetter_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(parseWithLetter), parseWithLetter_1_1 = parseWithLetter_1.next(); !parseWithLetter_1_1.done; parseWithLetter_1_1 = parseWithLetter_1.next()) {
      var line = parseWithLetter_1_1.value;
      var tmpBis = line.split(' ');
      var index = 0;

      try {
        for (var tmpBis_1 = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(tmpBis)), tmpBis_1_1 = tmpBis_1.next(); !tmpBis_1_1.done; tmpBis_1_1 = tmpBis_1.next()) {
          var lineTmp = tmpBis_1_1.value;

          if (lineTmp === '') {
            break;
          }

          var nb = parseInt(lineTmp, 10);

          if (index !== 0 && index % 2 !== 0) {
            if (nb < coordinate.xMin || verif[0] === false) {
              coordinate.xMin = nb;
              verif[0] = true;
            }

            if (nb > coordinate.xMax || verif[1] === false) {
              coordinate.xMax = nb;
              verif[1] = true;
            }
          } else if (index !== 0) {
            if (nb < coordinate.yMin || verif[2] === false) {
              coordinate.yMin = nb;
              verif[2] = true;
            }

            if (nb > coordinate.yMax || verif[3] === false) {
              coordinate.yMax = nb;
              verif[3] = true;
            }
          }

          index++;
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (tmpBis_1_1 && !tmpBis_1_1.done && (_b = tmpBis_1["return"])) _b.call(tmpBis_1);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (parseWithLetter_1_1 && !parseWithLetter_1_1.done && (_a = parseWithLetter_1["return"])) _a.call(parseWithLetter_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return coordinate;
};

var searchForXY = function searchForXY(element, labelX, labelY) {
  var x = parseInt(element.getAttribute(labelX) || '0', 10);
  var y = parseInt(element.getAttribute(labelY) || '0', 10);
  var coordinate = initICoord4DInt();
  coordinate.xMin = x;
  coordinate.xMax = x;
  coordinate.yMin = y;
  coordinate.yMax = y;
  return coordinate;
};

var searchForXnYn = function searchForXnYn(element) {
  var x1 = parseInt(element.getAttribute('x1') || '0', 10);
  var x2 = parseInt(element.getAttribute('x2') || '0', 10);
  var y1 = parseInt(element.getAttribute('y1') || '0', 10);
  var y2 = parseInt(element.getAttribute('y2') || '0', 10);
  var coordinate = initICoord4DInt();
  coordinate.xMin = x1;
  coordinate.xMax = x2;
  coordinate.yMin = y1;
  coordinate.yMax = y2;
  return coordinate;
};

var searchMinMaxIdSVG = function searchMinMaxIdSVG(idSVG) {
  var element = document.getElementById(idSVG);

  if (!element) {
    return null;
  }

  var result = initICoord4DInt();

  if (element) {
    var attribute = element.getAttribute('d');

    if (attribute) {
      return searchForD(attribute);
    }

    attribute = element.getAttribute('x');

    if (attribute) {
      return searchForXY(element, 'x', 'y');
    }

    attribute = element.getAttribute('x1');

    if (attribute) {
      return searchForXnYn(element);
    }

    attribute = element.getAttribute('cx');

    if (attribute) {
      return searchForXY(element, 'cx', 'cy');
    }
  }

  return result;
};

/***/ }),

/***/ "./Localization/en.json":
/*!******************************!*\
  !*** ./Localization/en.json ***!
  \******************************/
/*! exports provided: objectVisibility, basics, simpleEditor, coordinateSpace, initialCoordonateSpace, inputCoordinate, textDefault, genericParameter, metricPrincipalSetting, colorVariable, textObject, defaultTextRendering, default */
/***/ (function(module) {

module.exports = {"objectVisibility":{"decalCenterPointTextRegion":"Shift the center point of the text region","decalCenterBubble":"Shift the point or center of a tooltip","forceCalqueLevel":"Force a specific layer level","forceCourbSpecificLink":"Force a specific link curvature","calcLevel":"Layer level","courbure":"Curvature"},"basics":{"abscisses":"Abscissa","ordonnees":"Ordered","delete":"Delete","label":"Label"},"simpleEditor":{"renduTextDefault":"Default text rendering","display":"Display","pictureLink":"Image SVG","genericSettings":"Generic parameters","genericSettingsBis":"Generic parameters bis","spaceInitialVisualisation":"Initial viewing space","CoordinateSpace":"Coordinates space","objectVisibility":"Visibility of objects","metricsSettings":"Metrics Settings"},"coordinateSpace":{"addCoordinate":"Add coordinates"},"initialCoordonateSpace":{"label":"Initial coordinates space"},"inputCoordinate":{"minXPosition":"Position X min","maxXPosition":"Position X max","minYPosition":"Position Y min","maxYPosition":"Position Y max","image":"Image","interfaceJson":"Interface name","key":"Key","valueKey":"Value key"},"textDefault":{"police":"Font","size":"Size","style":"Style"},"genericParameter":{"settingPrincipalMetric":"Main metric parameter","graphicObject":"Graphic object","variableColor":"Variable color","traceBackground":"Trace the background","traceContour":"Trace the border"},"metricPrincipalSetting":{"followLink":"Following link","link":"Link","text":"Text","linkTooltip":"Link tooltip","textInTooltip":"Text in tooltip"},"colorVariable":{"switchBackgroundColor":"Edit background color","switchOutlineColor":"Edit border color","thicknessOutline":"Size border","variationNumber":"Variation number","number":"Number","addColor":"Add color","infoSeuil":"Info seuil"},"textObject":{"titleTextObject":"A text object","optionalLegend":"Optional legend","legend":"Legend","value":"Value","optionalUnit":"Optional unit","unit":"Unit","principalMetric":"Principal metric","textRegion":"Text region","colorBackground":"Color background","colorText":"Color text","colorTextOptional":"Optional color text","textStyle":"Text style","style":"Style","textBubble":"Text tooltip","generateTextObject":"Generate text object","auxiliaryElement":"Auxiliary element","digitalFormatting":"Digital formatting (if metric)","mesureUnit":"Unit of mesure (if metric)","objectDisplayTextTooltip":"Object display in text or tooltip","objectDisplayInPermanentlyHover":"Object display in permanently or hovering","backgroundColor":"Background color","optionalBackgroundColor":"Optional background color","save":"Save"},"defaultTextRendering":{}};

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
  function CoordinateSpaceClass(id, linkURL, meta, lowerLimit, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder, positionParameter) {
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
    this.positionParameter = positionParameter;
  }

  return CoordinateSpaceClass;
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
  function LowerLimitClass(id, lowerLimitMin, lowerLimitMax, backColor, borderColor, sizeBorder) {
    this.id = id;
    this.lowerLimitMin = lowerLimitMin;
    this.lowerLimitMax = lowerLimitMax;
    this.backColor = backColor;
    this.borderColor = borderColor;
    this.sizeBorder = sizeBorder;
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
  Object.defineProperty(LowerLimitClass.prototype, "getlowerLimitMin", {
    get: function get() {
      return this.lowerLimitMin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "setlowerLimitMin", {
    set: function set(lowerLimitMin) {
      this.lowerLimitMin = lowerLimitMin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "getlowerLimitMax", {
    get: function get() {
      return this.lowerLimitMax;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "setlowerLimitMax", {
    set: function set(lowerLimitMax) {
      this.lowerLimitMax = lowerLimitMax;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "getSeuilbackColor", {
    get: function get() {
      return this.backColor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "setSeuilbackColor", {
    set: function set(couleur) {
      this.backColor = couleur;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "getSeuilborderColor", {
    get: function get() {
      return this.borderColor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "setSeuilborderColor", {
    set: function set(couleur) {
      this.borderColor = couleur;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "getsizeBorder", {
    get: function get() {
      return this.sizeBorder;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LowerLimitClass.prototype, "setsizeBorder", {
    set: function set(size) {
      this.sizeBorder = size;
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

  function OrientedLinkClass(id, linkURL, meta, lowerLimitClass, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder, positionParameter, name, orientationLink, pointAPositionX, pointAPositionY, colorCoordinateA, pointBPositionX, pointBPositionY, colorCoordinateB, valueMainMetricA, valueMainMetricB, pointIn, pointOut, regionIn, regionOut, zIndex, pointCPositionX, pointCPositionY, isIncurved, mainMetricB, metricsB) {
    var _this = _super.call(this, id, linkURL, meta, lowerLimitClass, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder, positionParameter) || this;

    _this.name = name;
    _this.orientationLink = orientationLink;
    _this.pointAPositionX = pointAPositionX;
    _this.pointAPositionY = pointAPositionY;
    _this.colorCoordinateA = colorCoordinateA;
    _this.pointBPositionX = pointBPositionX;
    _this.pointBPositionY = pointBPositionY;
    _this.colorCoordinateB = colorCoordinateB;
    _this.valueMainMetricA = valueMainMetricA;
    _this.valueMainMetricB = valueMainMetricB;
    _this.pointIn = pointIn;
    _this.pointOut = pointOut;
    _this.regionIn = regionIn;
    _this.regionOut = regionOut;
    _this.zIndex = zIndex;
    _this.pointCPositionX = pointCPositionX;
    _this.pointCPositionY = pointCPositionY;
    _this.isIncurved = isIncurved;
    _this.mainMetricB = mainMetricB;
    _this.metricsB = metricsB;
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

  function PointClass(id, linkURL, meta, lowerLimitClass, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder, positionParameter, name, valueMetric, drawGraphicMarker, shape, sizeWidth, sizeHeight, rotateArrow, positionShapeX, positionShapeY, color, associateOrientedLinksIn, associateOrientedLinksOut) {
    var _this = _super.call(this, id, linkURL, meta, lowerLimitClass, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder, positionParameter) || this;

    _this.name = name;
    _this.valueMetric = valueMetric;
    _this.drawGraphicMarker = drawGraphicMarker;
    _this.shape = shape;
    _this.sizeWidth = sizeWidth;
    _this.sizeHeight = sizeHeight;
    _this.rotateArrow = rotateArrow;
    _this.positionShapeX = positionShapeX;
    _this.positionShapeY = positionShapeY;
    _this.color = color;
    _this.associateOrientedLinksIn = associateOrientedLinksIn;
    _this.associateOrientedLinksOut = associateOrientedLinksOut;
    return _this;
  }

  return PointClass;
}(_CoordinateSpaceClass__WEBPACK_IMPORTED_MODULE_1__["CoordinateSpaceClass"]);



/***/ }),

/***/ "./Models/PositionParameterClass.tsx":
/*!*******************************************!*\
  !*** ./Models/PositionParameterClass.tsx ***!
  \*******************************************/
/*! exports provided: PositionParameterClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionParameterClass", function() { return PositionParameterClass; });
var PositionParameterClass =
/** @class */
function () {
  function PositionParameterClass(labelAPositionX, labelAPositionY, labelBPositionX, labelBPositionY, tooltipPositionA, tooltipPositionB) {
    this.labelAPositionX = labelAPositionX;
    this.labelAPositionY = labelAPositionY;
    this.labelBPositionX = labelBPositionX;
    this.labelBPositionY = labelBPositionY;
    this.tooltipPositionA = tooltipPositionA;
    this.tooltipPositionB = tooltipPositionB;
  }

  return PositionParameterClass;
}();



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

  function RegionClass(id, linkURL, meta, lowerLimitClass, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder, positionParameter, idSVG, orientedLink, coords, mode, img) {
    var _this = _super.call(this, id, linkURL, meta, lowerLimitClass, label, textObj, mainMetric, metrics, colorMode, traceBack, traceBorder, positionParameter) || this;

    _this.idSVG = idSVG;
    _this.mode = mode;
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
  function TextObject( // legend: boolean,
  value, isTextRegion, colorBack, colorText, style, // styleText: string,
  generateObjectText, valueGenerateObjectText, generateAuxiliaryElement) {
    // this.legend = legend;
    this.value = value;
    this.isTextRegion = isTextRegion;
    this.colorBack = colorBack;
    this.colorText = colorText;
    this.style = style; // this.styleText = styleText;

    this.generateObjectText = generateObjectText;
    this.valueGenerateObjectText = valueGenerateObjectText;
    this.generateAuxiliaryElement = generateAuxiliaryElement;
  }

  return TextObject;
}();



/***/ }),

/***/ "./Models/dropZone.tsx":
/*!*****************************!*\
  !*** ./Models/dropZone.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_importInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/importInput */ "./components/importInput.tsx");





var DropZone =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DropZone, _super);

  function DropZone(props) {
    var _this = _super.call(this, props) || this;

    _this.fileReader = null;

    _this.onChangeHandler = function (event) {
      _this.setState({
        selectedFile: event.target.files[0],
        readerFile: new FileReader(),
        loaded: 0
      });
    };

    _this.upload = function () {
      _this.state.selectedFile.onload = function (event) {
        var _a;

        if (((_a = event.target) === null || _a === void 0 ? void 0 : _a.result) != null) {
          console.log(event.target.result);
          this.props.options.saveImportFile.push(this.state.readerFile.result);
          this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.options), {
            saveImportFile: this.props.options.saveImportFile
          }));
        }
      };

      _this.state.readerFile.readAsText(_this.state.selectedFile);
    };

    _this.save = function () {
      if (_this.state.readerFile.result != null) {
        _this.props.options.saveImportFile.push({
          name: _this.state.selectedFile.name,
          content: _this.state.readerFile.result
        });

        var loader_1 = new components_importInput__WEBPACK_IMPORTED_MODULE_3__["default"](_this.props);

        _this.props.options.saveImportFile.forEach(function (file) {
          if (JSON.parse(file.content).hasOwnProperty('regions')) {
            loader_1.loadMultiRegions(JSON.parse(file.content));
            console.log('Load Region');
          }

          if (JSON.parse(file.content).hasOwnProperty('points')) {
            loader_1.loadMultiPoints(JSON.parse(file.content));
            console.log('Load Point');
          }

          if (JSON.parse(file.content).hasOwnProperty('links')) {
            loader_1.loadMultiLinks(JSON.parse(file.content));
            console.log('Load Links');
          }
        });
      }

      console.log(_this.props.options.saveImportFile);
    }; // load = () => {
    //   let loader : ImportInput = new ImportInput(this.props);
    // 	this.props.options.saveImportFile.forEach(file => {
    // 		if (JSON.parse(file.content).hasOwnProperty("regions")){
    //       loader.loadMultiRegions(JSON.parse(file.content));
    //       console.log("Load Region");
    //     }
    //     if (JSON.parse(file.content).hasOwnProperty("points")){
    //       loader.loadMultiPoints(JSON.parse(file.content));
    //       console.log("Load Point");
    //     }
    //     if (JSON.parse(file.content).hasOwnProperty("links")){
    //       loader.loadMultiLinks(JSON.parse(file.content));
    //       console.log("Load Links");
    // 		}
    // 	});
    //   this.props.options.saveImportFile.forEach(element => {
    //     console.log(JSON.parse(element.content));
    //   });
    // }


    _this.test = function () {
      _this.props.options.saveImportFile = [];

      _this.props.options.saveImportFile.forEach(function (element) {
        console.log(element.name);
      });
    };

    _this.onMultiListFileChanged = function (event) {
      var newData = _this.props.options.saveImportFile.slice();

      newData[parseInt(event.currentTarget.id, 10)].name = event.currentTarget.value;
      _this.props.options.saveImportFile = newData;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        saveImportFile: _this.props.options.saveImportFile
      }));
    };

    _this.multiDeletFile = function (onClick) {
      var isUrl = function isUrl(url) {
        return url === _this.props.options.saveImportFile[parseInt(onClick.currentTarget.id, 10)];
      };

      _this.props.options.saveImportFile.splice(_this.props.options.saveImportFile.findIndex(isUrl), 1);

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        saveImportFile: _this.props.options.saveImportFile
      }));
    };

    _this.multiUploadDisplay = function (props) {
      if (props.file.lenght !== 0) {
        var list = props.file.map(function (file, index) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            key: 'MultiFileDiv' + index.toString(),
            style: {
              display: 'flex'
            }
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
            id: index.toString(),
            key: 'MultiFile' + index.toString(),
            label: 'File',
            labelWidth: 5,
            inputWidth: 20,
            onChange: _this.onMultiListFileChanged.bind(_this),
            type: "string",
            value: file.name || ''
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            variant: "danger",
            id: index.toString(),
            key: 'ButtunDel' + index.toString(),
            onClick: _this.multiDeletFile.bind(_this)
          }, "Del"));
        });
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, list);
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "No targets avalaible");
    };

    _this.state = {
      selectedFile: null,
      readerFile: new FileReader(),
      loaded: 0
    };
    return _this;
  }

  DropZone.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "file",
      name: "file",
      onChange: this.onChangeHandler
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: this.upload
    }, "add"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: this.save
    }, "finish")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(this.multiUploadDisplay, {
      file: this.props.options.saveImportFile
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: this.test
    }, "test")));
  };

  return DropZone;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DropZone);

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
/* harmony import */ var components_importInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/importInput */ "./components/importInput.tsx");
/* harmony import */ var components_CoordinateSpace_manageCoordinateSpace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/CoordinateSpace/manageCoordinateSpace */ "./components/CoordinateSpace/manageCoordinateSpace.tsx");
/* harmony import */ var _components_orientedLinkForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/orientedLinkForm */ "./components/orientedLinkForm.tsx");
/* harmony import */ var components_display__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/display */ "./components/display.tsx");
/* harmony import */ var style_SimpleEditor_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! style/SimpleEditor.css */ "./style/SimpleEditor.css");
/* harmony import */ var style_SimpleEditor_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(style_SimpleEditor_css__WEBPACK_IMPORTED_MODULE_8__);






 // import PanelData from 'components/panelData';
//import PointForm from 'components/pointForm';

 // import TimeSelector from 'components/timeSelector';


/**
 * class SimpleEditor
 */

var SimpleEditor =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SimpleEditor, _super);

  function SimpleEditor(props) {
    var _this = _super.call(this, props) || this;
    /********************* Display Button in relation to View or Edit */
    // /**
    //  * edit default text
    //  */
    // myCallBackDefaultText = (datafromChild: {
    // 	/**
    // 	 * new police
    // 	 */
    // 	police: string,
    // 	/**
    // 	 * new size
    // 	 */
    // 	size: string,
    // 	/**
    // 	 * new style (italic, bold, ...)
    // 	 */
    // 	style: string,
    // }) => {
    // 	this.props.onOptionsChange({
    // 		...this.props.options,
    // 		police: datafromChild.police,
    // 		size: datafromChild.size,
    // 		style: datafromChild.style,
    // 	});
    // }


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
    // onInfoChanged = ({ target }: any) => {
    // 	this.props.onOptionsChange({ ...this.props.options, info: target.value });
    // }


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
    }; // private onToggleLink = (isOpen: boolean): void => {
    // 	this.setState({
    // 		collapseLink: isOpen,
    // 	});
    // }


    _this.onToggleOrientedLink = function (isOpen) {
      _this.setState({
        collapseOrientedLink: isOpen
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

    _this.componentDidMount = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var _this = this;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , Promise.resolve('Success').then(function () {
                _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
                  displayButton: true
                }));
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

    _this.componentWillUnmount = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var _this = this;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , Promise.resolve('Success').then(function () {
                _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
                  displayButton: false
                }));
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

    _this.state = {
      collapseDashboardData: false,
      collapsePanelData: false,
      collapseTimeSelector: false,
      collapsePoint: false,
      collapseOrientedLink: false,
      arrayPoints: _this.props.options.arrayPoints,
      arrayLinks: _this.props.options.arrayLinks,
      arrayOrientedLinks: _this.props.options.arrayOrientedLinks,
      collapsePrincipalTarget: false,
      tabsVariable: [true, false, false, false, false],
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
      className: "divSimpleEditor"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["TabsBar"], {
      className: "page-header tabs",
      hideBorder: false
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: "tabDisplay",
      label: l10n.simpleEditor.display,
      active: this.state.tabsVariable[0],
      onChangeTab: function onChangeTab() {
        return _this.goToTab(0);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: "tabSpaceInitialVisualisation",
      label: l10n.simpleEditor.spaceInitialVisualisation,
      active: this.state.tabsVariable[1],
      onChangeTab: function onChangeTab() {
        return _this.goToTab(1);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: "tabCoordinateSpace",
      label: l10n.simpleEditor.CoordinateSpace,
      active: this.state.tabsVariable[2],
      onChangeTab: function onChangeTab() {
        return _this.goToTab(2);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: "tabImportInput",
      label: "Import Files",
      active: this.state.tabsVariable[4],
      onChangeTab: function onChangeTab() {
        return _this.goToTab(4);
      }
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["TabContent"], null, this.state.tabsVariable[0] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_display__WEBPACK_IMPORTED_MODULE_7__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data
    }), this.state.tabsVariable[1] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_coordinateSpaceInitial__WEBPACK_IMPORTED_MODULE_3__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data
    }), this.state.tabsVariable[2] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["TabsBar"], {
      className: "page-header tabs",
      hideBorder: false
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: "tabDisplayManageCoordinateSpace",
      label: "Region",
      active: this.state.tabsCoordinateSpace[0],
      onChangeTab: function onChangeTab() {
        return _this.goToTabCoordinateSpace(0);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: "tabDisplayPoint",
      label: "Point",
      active: this.state.tabsCoordinateSpace[1],
      onChangeTab: function onChangeTab() {
        return _this.goToTabCoordinateSpace(1);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: "tabDisplayOrientedLink",
      label: "OrientedLink",
      active: this.state.tabsCoordinateSpace[3],
      onChangeTab: function onChangeTab() {
        return _this.goToTabCoordinateSpace(3);
      }
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["TabContent"], null, this.state.tabsCoordinateSpace[0] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CoordinateSpace_manageCoordinateSpace__WEBPACK_IMPORTED_MODULE_5__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      isRegion: true
    }), this.state.tabsCoordinateSpace[1] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CoordinateSpace_manageCoordinateSpace__WEBPACK_IMPORTED_MODULE_5__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      isRegion: false
    }) // <PointForm
    //   key={'pointInputList'}
    //   callBackFromParent={this.myCallBackArrayPoints.bind(this)}
    //   regionCoordinateSpace={this.props.options.regionCoordinateSpace}
    //   oldArrayPointClass={this.props.options.arrayPoints}
    //   options={this.props.options}
    //   onOptionsChange={this.props.onOptionsChange}
    //   data={this.props.data}
    // />
    , this.state.tabsCoordinateSpace[3] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_orientedLinkForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
      arrayPoint: this.props.options.arrayPoints,
      regionCoordinateSpace: this.props.options.regionCoordinateSpace,
      oldArrayOrientedLinkClass: this.props.options.arrayOrientedLinks,
      callBackFromParent: this.myCallBackArrayOrientedLinks.bind(this),
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data
    }))), this.state.tabsVariable[4] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_importInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data
    }))));
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
/* harmony import */ var Functions_getResultQuery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Functions/getResultQuery */ "./Functions/getResultQuery.tsx");
/* harmony import */ var components_CoordinateSpace_addCoordinate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/CoordinateSpace/addCoordinate */ "./components/CoordinateSpace/addCoordinate.tsx");
/* harmony import */ var _components_Draw_drawRectangle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Draw/drawRectangle */ "./components/Draw/drawRectangle.tsx");
/* harmony import */ var _components_legend__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/legend */ "./components/legend.tsx");
/* harmony import */ var _components_Draw_drawPoint__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Draw/drawPoint */ "./components/Draw/drawPoint.tsx");
/* harmony import */ var _components_Draw_drawOrientedLink__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Draw/drawOrientedLink */ "./components/Draw/drawOrientedLink.tsx");
/* harmony import */ var Models_PositionParameterClass__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! Models/PositionParameterClass */ "./Models/PositionParameterClass.tsx");



 //import { LinkClass } from 'Models/LinkClass';



 // import { LowerLimitClass } from 'Models/LowerLimitClass';
//import { getResultQuery } from 'Functions/getResultQuery';





 // import DrawRectangleExtend from './components/Draw/drawRectangleExtend';

 //import DrawArrow from './components/Draw/drawArrow';
// import DrawLinkWithCoordinates from './components/Draw/drawLinkWithCoordinates';
// import DrawLinkWithPoints from './components/Draw/drawLinkWithPoints';
// import DrawLinkWithRegions from './components/Draw/drawLinkWithRegions';



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
    // fillCoordinate = (): JSX.Element => {
    // 	const { options } = this.props;
    // 	let mapItems: JSX.Element[];
    // 	mapItems = options.regionCoordinateSpace
    // 		.map((line: RegionClass, index) =>
    // 			<DrawRectangleExtend
    // 				key={'drawRectangleExtend' + index.toString()}
    // 				uneCoor={line}
    // 				useLimit={false}
    // 				limit={options.coordinateSpaceInitial}
    // 				onOptionsChange={this.props.onOptionsChange}
    // 				options={this.props.options}
    // 				data={this.props.data}
    // 				id={'region' + line.id.toString()}
    // 				isEnabled={!this.state.buttonManage[1]} />
    // 		);
    // 	return (
    // 		<ul>
    // 			{mapItems}
    // 		</ul>
    // 	);
    // }

    /**
     * Display limit (coordinateSpaceInitial)
     * @returns JSX.Element
     */


    _this.defineLimit = function () {
      var coordinateSpaceInitial = _this.props.options.coordinateSpaceInitial;
      var jsxItems;
      jsxItems = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Draw_drawRectangle__WEBPACK_IMPORTED_MODULE_10__["default"], {
        key: "limitCoor",
        color: "orange",
        coordinateInitial: coordinateSpaceInitial,
        id: "initialSpace",
        onOptionsChange: _this.props.onOptionsChange,
        options: _this.props.options,
        data: _this.props.data,
        isEnabled: !_this.state.buttonManage[1]
      });
      return jsxItems;
    };
    /**
     * to do
     */


    _this.getCoordinatesToDrawPointWithClick = function (event) {
      var positionX = 0;
      var positionY = 0;
      var widthPanel = parseInt(_this.props.options.baseMap.width, 10);
      var heightPanel = parseInt(_this.props.options.baseMap.height, 10);
      var initialSpace = _this.props.options.coordinateSpaceInitial.coordinate;
      var xMin = parseInt(initialSpace.xMin, 10);
      var xMinPx = (xMin + 100) * (widthPanel / 200);
      var xMax = parseInt(initialSpace.xMax, 10);
      var xMaxPx = (xMax + 100) * (widthPanel / 200);
      var widthInitialSpace = xMaxPx - xMinPx;
      var yMin = parseInt(initialSpace.yMin, 10);
      var yMinPx = (yMin + 100) * (heightPanel / 200);
      var yMax = parseInt(initialSpace.yMax, 10);
      var yMaxPx = (yMax + 100) * (heightPanel / 200);
      var heightInitialSpace = yMaxPx - yMinPx;
      positionX = Math.round((event.nativeEvent.offsetX - widthInitialSpace / 2) * (100 / widthInitialSpace)) * 2;
      positionY = Math.round((event.nativeEvent.offsetY - heightInitialSpace / 2) * (100 / heightInitialSpace)) * 2 * -1;

      if (event.nativeEvent.target.id === 'initialSpace' || event.nativeEvent.target.id === 'mainPanel') {
        //event.nativeEvent.target.id === 'oct' + this.props.options.baseMap.idSVG) {
        _this.createPointToClick(positionX, positionY);
      }
    };

    _this.defineIdPoint = function () {
      var id = 1;

      if (_this.props.options.arrayPoints.length === 0) {
        return id;
      } else {
        id = _this.props.options.arrayPoints[_this.props.options.arrayPoints.length - 1].id + 1;
        return id;
      }
    };
    /**
     * to do
     */


    _this.createPointToClick = function (x, y) {
      var id = _this.defineIdPoint();

      var initTextObject = new Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_5__["TextObject"]('', false, '', '', {
        bold: false,
        italic: false,
        underline: false
      }, false, {
        legendElement: '',
        numericFormatElement: '',
        unit: '',
        displayObjectInText: false,
        // 'displayObjectPermanently': false,
        addColorTextElement: false,
        colorTextElement: 'white',
        addColorBackElement: false,
        colorBackElement: 'black'
      }, {
        legendElement: '',
        numericFormatElement: '',
        unit: '',
        displayObjectInText: false,
        // 'displayObjectPermanently': false,
        addColorTextElement: false,
        colorTextElement: 'white',
        addColorBackElement: false,
        colorBackElement: 'black'
      });
      var parametrageMetric = new Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_6__["LinkURLClass"]('', '', '');
      var positionParameter = new Models_PositionParameterClass__WEBPACK_IMPORTED_MODULE_14__["PositionParameterClass"]('0', '0', '0', '0', {}, {});
      var newPoint = new Models_PointClass__WEBPACK_IMPORTED_MODULE_3__["PointClass"](id, parametrageMetric, '', [], '', initTextObject, {
        key: '',
        unit: '',
        format: '',
        keyValue: '',
        refId: '',
        manageValue: 'avg'
      }, [], false, false, false, positionParameter, 'point' + id.toString(), '', {
        label: 'Yes',
        value: 'true'
      }, {
        label: 'Circle',
        value: 'circle'
      }, {
        label: 'Medium',
        value: 'medium'
      }, {
        label: 'Medium',
        value: 'medium'
      }, '0', x.toString(), y.toString(), 'black', [], []);
      var newArrayPoint = _this.props.options.arrayPoints;
      newArrayPoint.push(newPoint); //this.props.options.indexPoint = id;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        indexPoint: id,
        arrayPoints: newArrayPoint
      }));

      console.log('panel');
      console.log(_this.props.options.indexPoint);
      setTimeout(function () {
        _this.displayPoint();
      }, 100);
    };

    _this.updatePositionOrientedLink = function (point) {
      var e_1, _a, e_2, _b, e_3, _c;

      var arrayOrientedLink = _this.props.options.arrayOrientedLinks;

      try {
        for (var arrayOrientedLink_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arrayOrientedLink), arrayOrientedLink_1_1 = arrayOrientedLink_1.next(); !arrayOrientedLink_1_1.done; arrayOrientedLink_1_1 = arrayOrientedLink_1.next()) {
          var orientedLink = arrayOrientedLink_1_1.value;

          try {
            for (var _d = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(point.associateOrientedLinksIn)), _e = _d.next(); !_e.done; _e = _d.next()) {
              var associateOrientedLinkIn = _e.value;

              if (associateOrientedLinkIn.name === orientedLink.name) {
                orientedLink.pointAPositionX = point.positionShapeX;
                orientedLink.pointAPositionY = point.positionShapeY;
              }
            }
          } catch (e_2_1) {
            e_2 = {
              error: e_2_1
            };
          } finally {
            try {
              if (_e && !_e.done && (_b = _d["return"])) _b.call(_d);
            } finally {
              if (e_2) throw e_2.error;
            }
          }

          try {
            for (var _f = (e_3 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(point.associateOrientedLinksOut)), _g = _f.next(); !_g.done; _g = _f.next()) {
              var associateOrientedLinkOut = _g.value;

              if (associateOrientedLinkOut.name === orientedLink.name) {
                orientedLink.pointBPositionX = point.positionShapeX;
                orientedLink.pointBPositionY = point.positionShapeY;
              }
            }
          } catch (e_3_1) {
            e_3 = {
              error: e_3_1
            };
          } finally {
            try {
              if (_g && !_g.done && (_c = _f["return"])) _c.call(_f);
            } finally {
              if (e_3) throw e_3.error;
            }
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (arrayOrientedLink_1_1 && !arrayOrientedLink_1_1.done && (_a = arrayOrientedLink_1["return"])) _a.call(arrayOrientedLink_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }; // /** display link with coordinate */
    // displayLink() {
    //   const { options } = this.props;
    //   const mapItems: JSX.Element[] = [];
    //   const arrayLinks: LinkClass[] = options.arrayLinks;
    //   arrayLinks.forEach((link: LinkClass) => {
    //     let item: JSX.Element = <div></div>;
    //     if (link.defineHowToGetCoordonate.value === 'coordinate') {
    //       item = (
    //         <DrawLinkWithCoordinates
    //           key={'link' + link.id.toString()}
    //           pointAPositionX={link.pointAPositionX}
    //           pointAPositionY={link.pointAPositionY}
    //           pointBPositionX={link.pointBPositionX}
    //           pointBPositionY={link.pointBPositionY}
    //           colorA={link.colorCoordinateA}
    //           colorB={link.colorCoordinateB}
    //           orientationLink={link.orientationLink.value || ''}
    //           labelA={link.labelLinkA}
    //           labelB={link.labelLinkB}
    //           labelAPositionX={link.positionXLabelA}
    //           labelAPositionY={link.positionYLabelA}
    //           labelBPositionX={link.positionXLabelB}
    //           labelBPositionY={link.positionYLabelB}
    //           height={parseInt(this.props.options.baseMap.height, 10)}
    //           name={link.name}
    //         />
    //       );
    //     } else if (link.defineHowToGetCoordonate.value === 'point') {
    //       item = (
    //         <DrawLinkWithPoints
    //           key={'link' + link.id.toString()}
    //           pointIn={link.pointIn}
    //           pointOut={link.pointOut}
    //           labelA={link.labelLinkA}
    //           labelB={link.labelLinkB}
    //           labelAPositionX={link.positionXLabelA}
    //           labelAPositionY={link.positionYLabelA}
    //           labelBPositionX={link.positionXLabelB}
    //           labelBPositionY={link.positionYLabelB}
    //           orientationLink={link.orientationLink.value || ''}
    //           height={parseInt(this.props.options.baseMap.height, 10)}
    //           name={link.name}
    //         />
    //       );
    //     } else if (link.defineHowToGetCoordonate.value === 'region') {
    //       item = (
    //         <DrawLinkWithRegions
    //           key={'link' + link.id.toString()}
    //           regionIn={link.regionIn}
    //           regionOut={link.regionOut}
    //           colorA={link.colorRegionIn}
    //           colorB={link.colorRegionOut}
    //           labelA={link.labelLinkA}
    //           labelB={link.labelLinkB}
    //           labelAPositionX={link.positionXLabelA}
    //           labelAPositionY={link.positionYLabelA}
    //           labelBPositionX={link.positionXLabelB}
    //           labelBPositionY={link.positionYLabelB}
    //           orientationLink={link.orientationLink.value || ''}
    //           height={parseInt(this.props.options.baseMap.height, 10)}
    //           name={link.name}
    //         />
    //       );
    //     }
    //     mapItems.push(item);
    //   });
    //   return <ul>{mapItems}</ul>;
    // }

    /**
     * to do
     */


    _this.addAssociateOrientedLinkToPoint = function (namePointIn, namePointOut, indexOrientedLinkAssociate) {
      var index = 0;

      _this.props.options.arrayPoints.forEach(function (point) {
        var name = point.label || point.name;

        if (namePointIn === name) {
          _this.props.options.arrayOrientedLinks.forEach(function (orientedLink) {
            if (orientedLink.id === indexOrientedLinkAssociate) {
              _this.props.options.arrayPoints[index].associateOrientedLinksIn.push({
                label: orientedLink.label,
                name: orientedLink.name
              });
            }
          });
        } else if (namePointOut === name) {
          _this.props.options.arrayOrientedLinks.forEach(function (orientedLink) {
            if (orientedLink.id === indexOrientedLinkAssociate) {
              _this.props.options.arrayPoints[index].associateOrientedLinksOut.push({
                label: orientedLink.label,
                name: orientedLink.name
              });
            }
          });
        }

        index++;
      });
    };
    /**
     * to do
     */


    _this.updateAssociateOrientedLinkInToPoint = function () {
      var indexPoint = 0;

      _this.props.options.arrayPoints.forEach(function (point) {
        var indexAssociateOrientedLinkIn = 0;
        point.associateOrientedLinksIn.forEach(function (oneAssociateOrientedLinksIn) {
          var orientedLinkExist = false;

          _this.props.options.arrayOrientedLinks.forEach(function (orientedLink) {
            if (oneAssociateOrientedLinksIn.name === orientedLink.name) {
              orientedLinkExist = true;

              if (orientedLink.label) {
                _this.props.options.arrayPoints[indexPoint].associateOrientedLinksIn[indexAssociateOrientedLinkIn] = {
                  label: orientedLink.label,
                  name: orientedLink.name
                };
              } else {
                _this.props.options.arrayPoints[indexPoint].associateOrientedLinksIn[indexAssociateOrientedLinkIn] = {
                  label: '',
                  name: orientedLink.name
                };
              }
            }
          });

          if (orientedLinkExist === false) {
            _this.props.options.arrayPoints[indexPoint].associateOrientedLinksIn.splice(indexAssociateOrientedLinkIn, 1);
          }

          indexAssociateOrientedLinkIn++;
        });
        indexPoint++;
      });
    };
    /**
     * to do
     */


    _this.updateAssociateOrientedLinkOutToPoint = function () {
      var indexPoint = 0;

      _this.props.options.arrayPoints.forEach(function (point) {
        var indexAssociateOrientedLinkOut = 0;
        point.associateOrientedLinksOut.forEach(function (oneAssociateOrientedLinksOut) {
          var orientedLinkExist = false;

          _this.props.options.arrayOrientedLinks.forEach(function (orientedLink) {
            if (oneAssociateOrientedLinksOut.name === orientedLink.name) {
              orientedLinkExist = true;

              if (orientedLink.label) {
                _this.props.options.arrayPoints[indexPoint].associateOrientedLinksOut[indexAssociateOrientedLinkOut] = {
                  label: orientedLink.label,
                  name: orientedLink.name
                };
              } else {
                _this.props.options.arrayPoints[indexPoint].associateOrientedLinksOut[indexAssociateOrientedLinkOut] = {
                  label: '',
                  name: orientedLink.name
                };
              }
            }
          });

          if (orientedLinkExist === false) {
            _this.props.options.arrayPoints[indexPoint].associateOrientedLinksOut.splice(indexAssociateOrientedLinkOut, 1);
          }

          indexAssociateOrientedLinkOut++;
        });
        indexPoint++;
      });
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
      var objectIn = coordinates[1];
      var objectOut = coordinates[2];
      var pointC = coordinates[3];
      var heightPanel = parseInt(_this.props.options.baseMap.height, 10);
      var widthPanel = parseInt(_this.props.options.baseMap.width, 10);
      var initialSpace = _this.props.options.coordinateSpaceInitial.coordinate;
      var xMin = parseInt(initialSpace.xMin, 10);
      var xMinPx = (xMin + 100) * (widthPanel / 200);
      var xMax = parseInt(initialSpace.xMax, 10);
      var xMaxPx = (xMax + 100) * (widthPanel / 200);
      var widthInitialSpace = xMaxPx - xMinPx;
      var yMin = parseInt(initialSpace.yMin, 10);
      var yMinPx = (yMin + 100) * (heightPanel / 200);
      var yMax = parseInt(initialSpace.yMax, 10);
      var yMaxPx = (yMax + 100) * (heightPanel / 200);
      var heightInitialSpace = yMaxPx - yMinPx;

      if (event.nativeEvent.target.id === 'initialSpace' || event.nativeEvent.target.id === 'mainPanel') {
        positionX = Math.round((event.nativeEvent.offsetX - widthInitialSpace / 2) * (100 / widthInitialSpace)) * 2;
        positionY = Math.round((event.nativeEvent.offsetY - heightInitialSpace / 2) * (100 / heightInitialSpace)) * 2;

        if (coordinates[0].id === 0) {
          objectIn.x = positionX;
          objectIn.y = positionY * -1;
          coordinates[0].id++;
        } else if (coordinates[0].id === 1) {
          objectOut.x = positionX;
          objectOut.y = positionY * -1;
          pointC.x = ((parseInt(objectIn.x, 10) + parseInt(objectOut.x, 10)) / 2).toString();
          pointC.y = ((parseInt(objectIn.y, 10) + parseInt(objectOut.y, 10)) / 2).toString();
          coordinates[0].id = 0;

          _this.createOrientedLinkToClick({
            label: 'No',
            value: false
          });

          _this.resetCoordinatesToDrawLinkWithClick();
        }
      } else if (event.nativeEvent.target.id.startsWith('point')) {
        var id_1 = parseInt(event.nativeEvent.target.id.charAt(5) + event.nativeEvent.target.id.charAt(6), 10);
        var arrayPoint = _this.props.options.arrayPoints;
        arrayPoint.forEach(function (point) {
          if (point.id === id_1) {
            var coordinates_1 = _this.props.options.coordinatesToDrawLinkWithClick;
            var name_1 = point.label || point.name;

            if (coordinates_1[0].id === 0) {
              objectIn.x = point.positionShapeX;
              objectIn.y = point.positionShapeY;
              objectIn.labelPoint = name_1;
              objectIn.point = point;
              coordinates_1[0].id++;
            } else if (coordinates_1[0].id === 1) {
              objectOut.x = point.positionShapeX;
              objectOut.y = point.positionShapeY;
              objectOut.labelPoint = name_1;
              objectOut.point = point;
              pointC.x = ((parseInt(objectIn.x, 10) + parseInt(objectOut.x, 10)) / 2).toString();
              pointC.y = ((parseInt(objectIn.y, 10) + parseInt(objectOut.y, 10)) / 2).toString();
              coordinates_1[0].id = 0;

              _this.createOrientedLinkToClick({
                label: 'No',
                value: false
              });

              _this.resetCoordinatesToDrawLinkWithClick();
            }
          }
        });
      } else {
        var arrayRegion = _this.props.options.regionCoordinateSpace;
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

              if (coordinates_2[0].id === 0) {
                objectIn.x = positionX;
                objectIn.y = positionY;
                objectIn.labelRegion = region.label;
                objectIn.region = region;
                coordinates_2[0].id++;
              } else if (coordinates_2[0].id === 1) {
                objectOut.x = positionX;
                objectOut.y = positionY;
                objectOut.labelRegion = region.label;
                objectOut.region = region;
                pointC.x = ((parseInt(objectIn.x, 10) + parseInt(objectOut.x, 10)) / 2).toString();
                pointC.y = ((parseInt(objectIn.y, 10) + parseInt(objectOut.y, 10)) / 2).toString();
                coordinates_2[0].id = 0;

                _this.createOrientedLinkToClick({
                  label: 'No',
                  value: false
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

              if (coordinates_3[0].id === 0) {
                objectIn.x = positionX;
                objectIn.y = positionY;
                objectIn.labelRegion = region.label;
                objectIn.region = region;
                coordinates_3[0].id++;
              } else if (coordinates_3[0].id === 1) {
                objectOut.x = positionX;
                objectOut.y = positionY;
                objectOut.labelRegion = region.label;
                objectOut.region = region;
                pointC.x = ((parseInt(objectIn.x, 10) + parseInt(objectOut.x, 10)) / 2).toString();
                pointC.y = ((parseInt(objectIn.y, 10) + parseInt(objectOut.y, 10)) / 2).toString();
                coordinates_3[0].id = 0;

                _this.createOrientedLinkToClick({
                  label: 'No',
                  value: false
                });

                _this.resetCoordinatesToDrawLinkWithClick();
              }
            }
          }
        });
      }
    };

    _this.getCoordinatesToDrawIncurvedOrientedLinkWithClick = function (event) {
      var positionX = 0;
      var positionY = 0;
      var coordinates = _this.props.options.coordinatesToDrawLinkWithClick;
      var objectIn = coordinates[1];
      var objectOut = coordinates[2];
      var pointC = coordinates[3];
      var heightPanel = parseInt(_this.props.options.baseMap.height, 10);
      var widthPanel = parseInt(_this.props.options.baseMap.width, 10);
      var initialSpace = _this.props.options.coordinateSpaceInitial.coordinate;
      var xMin = parseInt(initialSpace.xMin, 10);
      var xMinPx = (xMin + 100) * (widthPanel / 200);
      var xMax = parseInt(initialSpace.xMax, 10);
      var xMaxPx = (xMax + 100) * (widthPanel / 200);
      var widthInitialSpace = xMaxPx - xMinPx;
      var yMin = parseInt(initialSpace.yMin, 10);
      var yMinPx = (yMin + 100) * (heightPanel / 200);
      var yMax = parseInt(initialSpace.yMax, 10);
      var yMaxPx = (yMax + 100) * (heightPanel / 200);
      var heightInitialSpace = yMaxPx - yMinPx;

      if (event.nativeEvent.target.id === 'mainPanel' || event.nativeEvent.target.id === 'initialSpace') {
        positionX = Math.round((event.nativeEvent.offsetX - widthInitialSpace / 2) * (100 / widthInitialSpace)) * 2;
        positionY = Math.round((event.nativeEvent.offsetY - heightInitialSpace / 2) * (100 / heightInitialSpace)) * 2;

        if (coordinates[0].id === 0) {
          objectIn.x = positionX;
          objectIn.y = positionY * -1;
          coordinates[0].id++;
        } else if (coordinates[0].id === 1) {
          objectOut.x = positionX;
          objectOut.y = positionY * -1;
          coordinates[0].id++;
        } else if (coordinates[0].id === 2) {
          pointC.x = positionX;
          pointC.y = positionY * -1;
          coordinates[0].id = 0;

          _this.createOrientedLinkToClick({
            label: 'Yes',
            value: true
          });

          _this.resetCoordinatesToDrawLinkWithClick();
        }
      } else if (event.nativeEvent.target.id.startsWith('point')) {
        var id_2 = parseInt(event.nativeEvent.target.id.charAt(5) + event.nativeEvent.target.id.charAt(6), 10);
        var arrayPoint = _this.props.options.arrayPoints;
        arrayPoint.forEach(function (point) {
          if (point.id === id_2) {
            var coordinates_4 = _this.props.options.coordinatesToDrawLinkWithClick;
            var name_2 = point.label || point.name;

            if (coordinates_4[0].id === 0) {
              objectIn.x = point.positionShapeX;
              objectIn.y = point.positionShapeY;
              objectIn.labelPoint = name_2;
              objectIn.point = point;
              coordinates_4[0].id++;
            } else if (coordinates_4[0].id === 1) {
              objectOut.x = point.positionShapeX;
              objectOut.y = point.positionShapeY;
              objectOut.labelPoint = name_2;
              objectOut.point = point;
              coordinates_4[0].id++;
            } else if (coordinates_4[0].id === 2) {
              pointC.x = point.positionShapeX;
              pointC.y = point.positionShapeY;
              coordinates_4[0].id = 0;

              _this.createOrientedLinkToClick({
                label: 'Yes',
                value: true
              });

              _this.resetCoordinatesToDrawLinkWithClick();
            }
          }
        });
      } else {
        var arrayRegion = _this.props.options.regionCoordinateSpace;
        arrayRegion.forEach(function (region) {
          var xMin = parseInt(region.coords.xMin, 10);
          var xMax = parseInt(region.coords.xMax, 10);
          var yMin = parseInt(region.coords.yMin, 10);
          var yMax = parseInt(region.coords.yMax, 10);

          if (event.nativeEvent.target.id.startsWith('region')) {
            var id = parseInt(event.nativeEvent.target.id.charAt(6) + event.nativeEvent.target.id.charAt(7), 10);

            if (id === region.id) {
              var coordinates_5 = _this.props.options.coordinatesToDrawLinkWithClick;
              positionX = (xMin + xMax) / 2;
              positionY = (yMax + yMin) / 2;

              if (coordinates_5[0].id === 0) {
                objectIn.x = positionX;
                objectIn.y = positionY;
                objectIn.labelRegion = region.label;
                objectIn.region = region;
                coordinates_5[0].id++;
              } else if (coordinates_5[0].id === 1) {
                objectOut.x = positionX;
                objectOut.y = positionY;
                objectOut.labelRegion = region.label;
                objectOut.region = region;
                coordinates_5[0].id++;
              } else if (coordinates_5[0].id === 0) {
                pointC.x = positionX;
                pointC.y = positionY;
                coordinates_5[0].id = 0;

                _this.createOrientedLinkToClick({
                  label: 'Yes',
                  value: true
                });

                _this.resetCoordinatesToDrawLinkWithClick();
              }
            }
          } else {
            var id = parseInt(event.nativeEvent.target.offsetParent.id.charAt(6) + event.nativeEvent.target.offsetParent.id.charAt(7), 10);

            if (id === region.id) {
              var coordinates_6 = _this.props.options.coordinatesToDrawLinkWithClick;
              positionX = (xMin + xMax) / 2;
              positionY = (yMax + yMin) / 2;

              if (coordinates_6[0].id === 0) {
                objectIn.x = positionX;
                objectIn.y = positionY;
                objectIn.labelRegion = region.label;
                objectIn.region = region;
                coordinates_6[0].id++;
              } else if (coordinates_6[0].id === 1) {
                objectOut.x = positionX;
                objectOut.y = positionY;
                objectOut.labelRegion = region.label;
                objectOut.region = region;
                coordinates_6[0].id++;
              } else if (coordinates_6[0].id === 2) {
                pointC.x = positionX;
                pointC.y = positionY;
                coordinates_6[0].id = 0;

                _this.createOrientedLinkToClick({
                  label: 'Yes',
                  value: true
                });

                _this.resetCoordinatesToDrawLinkWithClick();
              }
            }
          }
        });
      }
    }; // defineAssociateOrientedLinkToRegion(): OrientedLinkClass[] {
    // 	const arrayRegion: RegionClass[] = this.props.options.regionCoordinateSpace;
    // 	const arrayAllOrientedLink: OrientedLinkClass[] = this.props.options.arrayOrientedLinks;
    // 	const arrayOrientedLinkAssociateRegionIn: OrientedLinkClass[] = [];
    // 	const arrayOrientedLinkAssociateRegionOut: OrientedLinkClass[] = [];
    // 	let arrayToReturn: OrientedLinkClass[] = [];
    // 	arrayRegion.forEach((region) => {
    // 		arrayAllOrientedLink.forEach((orientedLink) => {
    // 			arrayToReturn = [];
    // 			if (region.id === orientedLink.regionIn.id) {
    // 				arrayOrientedLinkAssociateRegionIn.push(orientedLink);
    // 				arrayToReturn = arrayOrientedLinkAssociateRegionIn;
    // 				region.orientedLink = arrayToReturn;
    // 			}
    // 			if (region.id === orientedLink.regionOut.id) {
    // 				arrayOrientedLinkAssociateRegionOut.push(orientedLink);
    // 				arrayToReturn = arrayOrientedLinkAssociateRegionOut;
    // 				region.orientedLink = arrayToReturn;
    // 			}
    // 		});
    // 	});
    // 	return arrayToReturn;
    // }

    /**
     * to do
     */


    _this.defineIdOrientedLink = function () {
      var id = 1;

      if (_this.props.options.arrayOrientedLinks.length === 0) {
        return id;
      } else {
        id = _this.props.options.arrayOrientedLinks[_this.props.options.arrayOrientedLinks.length - 1].id + 1;
        return id;
      }
    };
    /**
     * to do
     */


    _this.createOrientedLinkToClick = function (isIncurved) {
      var coordinates = _this.props.options.coordinatesToDrawLinkWithClick;

      var id = _this.defineIdOrientedLink();

      var name = 'orientedLink' + id.toString();
      var zIndex = _this.props.options.zIndexOrientedLink + 1;
      var objectIn = coordinates[1];
      var objectOut = coordinates[2];
      var pointC = coordinates[3];
      var initTextObject = new Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_5__["TextObject"]('', false, '', '', {
        bold: false,
        italic: false,
        underline: false
      }, false, {
        legendElement: '',
        numericFormatElement: '',
        unit: '',
        displayObjectInText: false,
        // 'displayObjectPermanently': false,
        addColorTextElement: false,
        colorTextElement: 'white',
        addColorBackElement: false,
        colorBackElement: 'black'
      }, {
        legendElement: '',
        numericFormatElement: '',
        unit: '',
        displayObjectInText: false,
        // 'displayObjectPermanently': false,
        addColorTextElement: false,
        colorTextElement: 'white',
        addColorBackElement: false,
        colorBackElement: 'black'
      });
      var parametrageMetric = new Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_6__["LinkURLClass"]('', '', '');
      var positionParameter = new Models_PositionParameterClass__WEBPACK_IMPORTED_MODULE_14__["PositionParameterClass"]('0', '0', '0', '0', {}, {});
      var newOrientedLink = new Models_OrientedLinkClass__WEBPACK_IMPORTED_MODULE_4__["OrientedLinkClass"](id, parametrageMetric, '', [], '', initTextObject, {
        key: '',
        unit: '',
        format: '',
        keyValue: '',
        refId: '',
        manageValue: 'avg'
      }, [], false, false, false, positionParameter, name, {
        label: 'Monodirectional',
        value: 'AB'
      }, objectIn.x.toString(), objectIn.y.toString(), '#5794F2', objectOut.x.toString(), objectOut.y.toString(), '#E54658', '', '', objectIn.labelPoint, objectOut.labelPoint, objectIn.labelRegion, objectOut.labelRegion, zIndex, pointC.x, pointC.y, isIncurved, {
        key: '',
        unit: '',
        format: '',
        keyValue: '',
        refId: '',
        manageValue: 'avg'
      }, []);
      var newArrayOrientedLink = _this.props.options.arrayOrientedLinks;
      newArrayOrientedLink.push(newOrientedLink);

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        arrayOrientedLinks: newArrayOrientedLink,
        indexOrientedLink: id,
        zIndexOrientedLink: zIndex
      }));

      _this.addAssociateOrientedLinkToPoint(objectIn.labelPoint || '', objectOut.labelPoint || '', newOrientedLink.id);

      setTimeout(function () {
        _this.displayOrientedLink();
      }, 100);
    };

    _this.getValuesAuxiliaryMetricsPoint = function (point) {
      Object(Functions_fetchMetrics__WEBPACK_IMPORTED_MODULE_7__["reqMetricAuxPoint"])(point, _this.props);
      return _this.getValuesAuxiliaryMetrics(point.metrics, point.mainMetric);
    };

    _this.getValuesAuxiliaryMetricsOrientedLink = function (orientedLink) {
      Object(Functions_fetchMetrics__WEBPACK_IMPORTED_MODULE_7__["reqMetricAuxOrientedLink"])(orientedLink, _this.props);
      return _this.getValuesAuxiliaryMetrics(orientedLink.metrics, orientedLink.mainMetric);
    };

    _this.getValuesAuxiliaryMetrics = function (auxiliaryMetrics, mainMetric) {
      var valueAuxiliaryMetric = [];
      var countMetrics = auxiliaryMetrics.length;
      auxiliaryMetrics.forEach(function (metric) {
        var _a;

        var countTotalValues = 0;
        var resultTotalValues = 0;
        var result = '';

        if (metric.returnQuery && metric.returnQuery.length > 0) {
          var numberLoop = (((_a = metric.returnQuery) === null || _a === void 0 ? void 0 : _a.length) || 0) / countMetrics;

          if (metric.key !== '' && metric.keyValue !== '') {
            for (var i = 0; i < numberLoop; i++) {
              var line = metric.returnQuery[i];

              if (line.fields[0].labels) {
                if (line.fields[0].labels[mainMetric.key] === mainMetric.keyValue || mainMetric.key === '' && mainMetric.keyValue === '') {
                  if (line.fields[0].labels[metric.key] === metric.keyValue) {
                    var countValues = line.fields[0].values.length;

                    for (var i_1 = 0; i_1 < countValues; i_1++) {
                      if (line.fields[0].values.get(i_1)) {
                        resultTotalValues += line.fields[0].values.get(i_1);
                        countTotalValues++;
                      }
                    }
                  }
                }
              }
            }
          } else {
            for (var i = 0; i < numberLoop; i++) {
              var line = metric.returnQuery[i];

              if (line.fields[0].labels) {
                if (line.fields[0].labels[mainMetric.key] === mainMetric.keyValue || mainMetric.key === '' && mainMetric.keyValue === '') {
                  var countValues = line.fields[0].values.length;

                  for (var i_2 = 0; i_2 < countValues; i_2++) {
                    if (line.fields[0].values.get(i_2)) {
                      resultTotalValues += line.fields[0].values.get(i_2);
                      countTotalValues++;
                    }
                  }
                }
              }
            }
          }

          if (metric.manageValue === 'avg') {
            result = (resultTotalValues / countTotalValues).toString();
          } else if (metric.manageValue === 'sum') {
            result = resultTotalValues.toString();
          } else if (metric.manageValue === 'error') {
            if (countTotalValues > 1) {
              result = 'error';
            } else {
              result = resultTotalValues.toString();
            }
          }
        }

        if (result !== '') {
          valueAuxiliaryMetric.push(result);
        }
      });
      return valueAuxiliaryMetric;
    };

    _this.changeValueButtonToLink = function () {
      _this.setState({
        valueButton: 'link'
      });
    };

    _this.changeValueButtonToIncurvedLink = function () {
      _this.setState({
        valueButton: 'incurvedLink'
      });
    };

    _this.changeValueButtonToPoint = function () {
      _this.setState({
        valueButton: 'point'
      });
    }; // changeDisplayButtonlegend = () => {
    // 	this.setState({
    // 		valueLegend: <div></div>,
    // 	});
    // }


    _this.getCoordinates = function (event) {
      var valueButton = _this.state.valueButton;

      if (_this.state.numberClickDiv === 0) {
        return;
      }

      if (valueButton === 'link') {
        _this.getCoordinatesToDrawOrientedLinkWithClick(event);
      } else if (valueButton === 'incurvedLink') {
        _this.getCoordinatesToDrawIncurvedOrientedLinkWithClick(event);
      } else if (valueButton === 'point') {
        _this.getCoordinatesToDrawPointWithClick(event);
      }
    };
    /**
     * add button click to manage region, point, oriented link, position legend
     */


    _this.updateButtonCss = function () {
      var _final = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "allButton"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        style: {
          marginLeft: '5%'
        },
        variant: _this.state.buttonManage[0] ? 'danger' : 'primary',
        className: "button",
        onClick: _this.addNode
      }, "Add Region"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        style: {
          marginLeft: '5%'
        },
        variant: _this.state.buttonManage[3] ? 'danger' : 'primary',
        className: "button",
        onClick: _this.addPoint
      }, "Add Point"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        style: {
          marginLeft: '5%'
        },
        variant: _this.state.buttonManage[1] ? 'danger' : 'primary',
        className: "button",
        onClick: _this.addLink
      }, "Add Oriented Link"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        style: {
          marginLeft: '5%'
        },
        variant: _this.state.buttonManage[4] ? 'danger' : 'primary',
        className: "button",
        onClick: _this.addIncurvedLink
      }, "Add Incurved Oriented Link"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        style: {
          marginLeft: '5%'
        },
        variant: _this.state.buttonManage[2] ? 'danger' : 'primary',
        className: "button",
        onClick: function onClick() {
          return _this.resetButtonManage(2);
        }
      }, "Position Legend"));

      _this.setState({
        allActionButton: _final
      });
    }; // display_Button = () => {
    // 	const ultracall = document.getElementById('allButton');
    // 	ultracall?.addEventListener('click', () => {
    // 		ultracall.style.display = 'inline-block';
    // 	})
    // }


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
                buttonManage: [false, false, false, false, false]
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
              tmp = [false, false, false, false, false];

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
              }

              return [4
              /*yield*/
              , this.setAsyncButtonManage({
                buttonManage: tmp
              })];

            case 1:
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

    _this.addIncurvedLink = function () {
      _this.setState(function (prevState) {
        return {
          nbClickButton: prevState.buttonManage[4] ? false : true
        };
      });

      _this.resetButtonManage(4);

      _this.changeValueButtonToIncurvedLink();
    };

    _this.positionLegend = function (e) {
      if (!_this.state.buttonManage[2]) {
        return;
      }

      var newLegend = _this.state.legend;
      var sizeTitlePanel = 28;
      newLegend.x = e.nativeEvent.offsetX;
      newLegend.y = _this.props.options.baseMap.height > e.nativeEvent.offsetY ? parseInt(e.nativeEvent.offsetY, 10) : parseInt(e.nativeEvent.offsetY, 10) - sizeTitlePanel;
      newLegend.hiddenLegend = false;

      _this.setState({
        legend: newLegend
      });

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        legend: newLegend
      })); // this.changeDisplayButtonlegend();

    }; // Close legend click on close


    _this.handleClick = function (event) {
      var newLegend = _this.state.legend;
      newLegend.hiddenLegend = !_this.state.legend.hiddenLegend;

      _this.setState(function (prevState) {
        return {
          legend: newLegend
        };
      });
    }; // SVG check url


    _this.tt = function () {
      var test = document.getElementById('path836');

      if (test) {
        test.style.fill = 'red';
      }
    };

    _this.chargeRegion = function () {
      _this.setState({
        displayRegion: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Draw_drawRectangle__WEBPACK_IMPORTED_MODULE_10__["default"], {
          key: "limitCoor",
          color: "orange",
          coordinateInitial: _this.props.options.coordinateSpaceInitial,
          id: "initialSpace",
          onOptionsChange: _this.props.onOptionsChange,
          options: _this.props.options,
          data: _this.props.data,
          isEnabled: !_this.state.buttonManage[1]
        })
      });
    };

    _this.editIdString = function (str) {
      var cpyString = str.slice();
      var strSplit = cpyString.split('id="');
      var newStr = '';

      for (var i = 0; strSplit.length > i; i++) {
        if (strSplit[i]) {
          if (i > 0) {
            var tt = strSplit[i];
            strSplit[i] = 'id="oct' + tt;
          }

          newStr = newStr + strSplit[i];
        }
      }

      return newStr;
    };
    /**
     * update button css when mount component
     */


    _this.componentDidMount = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var _this = this;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          // this.props.onOptionsChange({
          //   ...this.props.options,
          //   displayButton: false,
          // });
          if (this.props.options.baseMap.modeSVG && this.props.options.baseMap.image !== '') {
            fetch(this.props.options.baseMap.image).then(function (res) {
              return res.text();
            }).then(function (text) {
              _this.setState({
                svg: text
              });

              var result = /id=["']\w*["']/i.exec(text);

              if (result && result.length > 0) {
                var id = result[0].split('"');

                if (id.length > 1) {
                  var documentId = document.getElementById(id[1]);

                  if (documentId) {
                    var newBaseMap = _this.props.options.baseMap;
                    newBaseMap.idSVG = id[1];
                    newBaseMap.width = documentId.getAttribute('width') || '';
                    newBaseMap.height = documentId.getAttribute('height') || '';

                    _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
                      baseMap: newBaseMap
                    }));
                  }
                }
              }
            }).then(function () {
              return _this.chargeRegion();
            }).then(function () {
              var newStr = _this.editIdString(_this.state.svg);

              var background = _this.props.options.baseMap;
              background.layerImage = newStr;

              _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
                baseMap: background
              }));
            });
          } else {
            this.chargeRegion();
          }

          this.updateButtonCss();
          return [2
          /*return*/
          ];
        });
      });
    }; // Tooltip in Svg


    _this.tooltip_SVG = function () {
      var _a;

      var red = document.getElementById('part1');
      (_a = red) === null || _a === void 0 ? void 0 : _a.addEventListener('mouseenter', function () {
        var _a;

        red.addEventListener('mouseover', function () {
          var tooltip = document.createElement('span');
          var texttest = document.createTextNode('rectanglered');
          tooltip.appendChild(texttest);
          red.appendChild(tooltip).style.position = 'absolute';
          red.appendChild(tooltip).style.backgroundColor = '#000000';
          red.appendChild(tooltip).style.padding = '8px';
          red.appendChild(tooltip).style["float"] = 'top';
          red.appendChild(tooltip).style.color = '#d8d9da';
          red.appendChild(tooltip).style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.5)';
          red.appendChild(tooltip).style.borderRadius = '2px';
          red.appendChild(tooltip).style.fontWeight = '500';
          red.addEventListener('mouseout', function () {
            red.appendChild(tooltip).style.visibility = 'hidden';
          });
        });
        var yellow = document.getElementById('part2');
        (_a = yellow) === null || _a === void 0 ? void 0 : _a.addEventListener('mouseenter', function () {
          var _a;

          yellow.addEventListener('mouseover', function () {
            var tooltip = document.createElement('span');
            var texttest = document.createTextNode('rectangleyellow');
            tooltip.appendChild(texttest);
            yellow.appendChild(tooltip).style.position = 'absolute';
            yellow.appendChild(tooltip).style.backgroundColor = '#000000';
            yellow.appendChild(tooltip).style.padding = '8px';
            yellow.appendChild(tooltip).style["float"] = 'top';
            yellow.appendChild(tooltip).style.color = '#d8d9da';
            yellow.appendChild(tooltip).style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.5)';
            yellow.appendChild(tooltip).style.borderRadius = '2px';
            yellow.appendChild(tooltip).style.fontWeight = '500';
            yellow.addEventListener('mouseout', function () {
              yellow.appendChild(tooltip).style.visibility = 'hidden';
            });
          });
          var rect = document.getElementById('carre');
          (_a = rect) === null || _a === void 0 ? void 0 : _a.addEventListener('mouseenter', function () {
            rect.addEventListener('mouseover', function () {
              var tooltip = document.createElement('span');
              var texttest = document.createTextNode('rectanglegreen');
              tooltip.appendChild(texttest);
              rect.appendChild(tooltip).style.position = 'absolute';
              rect.appendChild(tooltip).style.backgroundColor = '#000000';
              rect.appendChild(tooltip).style.padding = '8px';
              rect.appendChild(tooltip).style.marginTop = '20%';
              rect.appendChild(tooltip).style.color = '#d8d9da';
              rect.appendChild(tooltip).style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.5)';
              rect.appendChild(tooltip).style.borderRadius = '2px';
              rect.appendChild(tooltip).style.fontWeight = '500';
              rect.addEventListener('mouseout', function () {
                rect.appendChild(tooltip).style.visibility = 'hidden';
              });
            });
          });
        });
      });
    };
    /*************************************test create tooltip **********************************************************/


    _this.SVG_PathImage = function () {
      var e_4, _a;

      try {
        // const idSVG: HTMLElement | null = document.getElementById('oct' + this.props.options.baseMap.idSVG);
        // if (idSVG) {
        // 	idSVG.style.zIndex = '300';
        // }
        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.props.options.regionCoordinateSpace), _c = _b.next(); !_c.done; _c = _b.next()) {
          var line = _c.value;

          if (line.mode) {
            var id = document.getElementById('oct' + line.idSVG);

            if (id) {
              var valueQuery = Object(Functions_getResultQuery__WEBPACK_IMPORTED_MODULE_8__["getResultQuery"])(line.mainMetric);
              var test_1 = document.getElementById('jeSuisLa' + line.id);

              if (test_1) {
                test_1.style.fill = 'red';
              } else {
                var title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
                title.setAttribute('fill', 'yellow');
                title.setAttributeNS('http://www.w3.org/1999/xlink', 'fill', 'yellow'); // title.setAttributeNS('http://www.w3.org/2000/xmlns/', 'fill', 'yellow');
                // title.setAttribute("fill", "red");
                // title.setAttributeNS('title', 'fill' , 'red');
                // title.setAttributeNS('title', 'stroke' , 'red');

                title.innerHTML = '<div><p style="color: red;">' + (valueQuery ? valueQuery.toString() : '') + '</p></div>'; // title.textContent = valueQuery ? valueQuery.toString() : '';

                title.id = 'jeSuisLa' + line.id; // title.style.

                title.style.fill = 'red';
                id.appendChild(title);
              } // id.appendChild(title).style.backgroundColor = 'red';
              // id.appendChild(title).style.fill = 'red';
              // id.appendChild(title).style.padding = '2px';
              // id.appendChild(title).style.float = 'right';
              // id.appendChild(title).style.color = 'blue';
              // id.appendChild(title).style.boxShadow = '0 0 2px red';//rgba(0, 0, 0, 0.5)';
              // id.appendChild(title).style.borderRadius = '2px';
              // id.appendChild(title).style.fontWeight = '5000';

            }
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
    };

    _this.state = {
      // isUpdate: false,
      // sizePanel: 300,
      idOrientedLink: _this.props.options.indexOrientedLink,
      valueButton: '',
      buttonManage: [false, false, false, false, false],
      numberClickDiv: 0,
      allActionButton: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null),
      // valueLegend: <div></div>,
      // seuil: [],
      nbClickButton: false,
      legend: {
        hiddenLegend: true,
        x: 0,
        y: 0
      },
      // img: <div></div>,
      svg: '',
      // loading: false,
      // url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/tiger.svg',
      displayRegion: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null),
      // idSVG: '',
      tooltip: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "salut")
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
      _this.getValuesMainMetricOfPoint(line);

      _this.updatePositionOrientedLink(line);

      var valuesAuxiliaryMetrics = _this.getValuesAuxiliaryMetricsPoint(line);

      var item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Draw_drawPoint__WEBPACK_IMPORTED_MODULE_12__["default"], {
        key: 'point' + line.id.toString(),
        drawGraphicMarker: line.drawGraphicMarker,
        shape: line.shape,
        size: line.sizeWidth,
        positionShapeX: line.positionShapeX,
        positionShapeY: line.positionShapeY,
        label: line.label,
        widthImage: parseInt(_this.props.options.baseMap.width, 10),
        heightImage: parseInt(_this.props.options.baseMap.height, 10),
        police: _this.props.options.display.police,
        sizePolice: _this.props.options.display.size,
        color: line.color,
        idPoint: 'point' + line.id.toString(),
        name: line.name,
        options: _this.props.options,
        onOptionsChange: _this.props.onOptionsChange,
        data: _this.props.data,
        textObject: line.textObj,
        seuil: line.lowerLimit,
        valueMainMetric: line.valueMetric,
        refMainMetric: line.mainMetric.refId || '',
        associateOrientedLinkIn: line.associateOrientedLinksIn,
        associateOrientedLinkOut: line.associateOrientedLinksOut,
        labelPositionX: line.positionParameter.labelAPositionX,
        labelPositionY: line.positionParameter.labelAPositionY,
        tooltipPosition: line.positionParameter.tooltipPositionA,
        auxiliaryMetrics: line.metrics,
        valuesAuxiliaryMetrics: valuesAuxiliaryMetrics
      });
      mapItems.push(item);
    });
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, mapItems);
  };
  /**
   * to do
   */


  SimplePanel.prototype.displayOrientedLink = function () {
    var _this = this;

    var arrayOrientedLink = this.props.options.arrayOrientedLinks;
    var mapItems = [];
    var item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
    arrayOrientedLink.forEach(function (orientedLink) {
      _this.getValuesMainMetricOfOrientedLink(orientedLink);

      var valuesAuxiliaryMetrics = _this.getValuesAuxiliaryMetricsOrientedLink(orientedLink);

      item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Draw_drawOrientedLink__WEBPACK_IMPORTED_MODULE_13__["default"], {
        key: 'orientedLink' + orientedLink.id.toString(),
        id: orientedLink.id.toString(),
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
        widthImage: parseInt(_this.props.options.baseMap.width, 10),
        heightImage: parseInt(_this.props.options.baseMap.height, 10),
        label: orientedLink.label,
        name: orientedLink.name,
        valueMainMetricA: orientedLink.valueMainMetricA,
        valueMainMetricB: orientedLink.valueMainMetricB,
        refMainMetric: orientedLink.mainMetric.refId || '',
        options: _this.props.options,
        onOptionsChange: _this.props.onOptionsChange,
        data: _this.props.data,
        textObject: orientedLink.textObj,
        seuil: orientedLink.lowerLimit,
        labelAPositionX: orientedLink.positionParameter.labelAPositionX,
        labelAPositionY: orientedLink.positionParameter.labelAPositionY,
        labelBPositionX: orientedLink.positionParameter.labelBPositionX,
        labelBPositionY: orientedLink.positionParameter.labelBPositionY,
        tooltipPositionA: orientedLink.positionParameter.tooltipPositionA,
        tooltipPositionB: orientedLink.positionParameter.tooltipPositionB,
        zIndex: orientedLink.zIndex,
        pointCPositionX: orientedLink.pointCPositionX,
        pointCPositionY: orientedLink.pointCPositionY,
        isIncurved: orientedLink.isIncurved,
        auxiliaryMetrics: orientedLink.metrics,
        valuesAuxiliaryMetrics: valuesAuxiliaryMetrics,
        police: _this.props.options.display.police,
        sizePolice: _this.props.options.display.size
      });
      mapItems.push(item);
    });
    this.updateAssociateOrientedLinkInToPoint();
    this.updateAssociateOrientedLinkOutToPoint();
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, mapItems);
  };
  /**
   * to do
   */


  SimplePanel.prototype.getValuesMainMetricOfPoint = function (point) {
    Object(Functions_fetchMetrics__WEBPACK_IMPORTED_MODULE_7__["reqMetricPoint"])(point, this.props);
    this.getValuesMainMetric(point.mainMetric, undefined, point);
  };

  SimplePanel.prototype.getValuesMainMetricOfOrientedLink = function (orientedLink) {
    Object(Functions_fetchMetrics__WEBPACK_IMPORTED_MODULE_7__["reqMetricOrientedLink"])(orientedLink, this.props);
    this.getValuesMainMetric(orientedLink.mainMetric, orientedLink, undefined);
  };
  /**
   * to do
   */


  SimplePanel.prototype.getValuesMainMetric = function (mainMetric, orientedLink, point) {
    var valueMainMetric = 0;
    var totalValuesCount = 0;
    var key = mainMetric.key;
    var keyValue = mainMetric.keyValue;

    if (mainMetric.returnQuery && mainMetric.returnQuery.length > 0) {
      mainMetric.returnQuery.forEach(function (line) {
        if (line.fields[0].labels) {
          if (key !== '' && keyValue !== '') {
            if (line.fields[0].labels[key] === keyValue) {
              var countValues = line.fields[0].values.length;

              for (var i = 0; i < countValues; i++) {
                if (line.fields[0].values.get(i)) {
                  totalValuesCount++;
                  valueMainMetric += line.fields[0].values.get(i);
                }
              }
            }
          } else {
            var countValues = line.fields[0].values.length;

            for (var i = 0; i < countValues; i++) {
              if (line.fields[0].values.get(i)) {
                totalValuesCount++;
                valueMainMetric += line.fields[0].values.get(i);
              }
            }
          }

          if (orientedLink) {
            if (mainMetric.manageValue === 'avg') {
              orientedLink.valueMainMetricA = (valueMainMetric / totalValuesCount).toString();
              orientedLink.valueMainMetricB = (valueMainMetric / totalValuesCount).toString();
            } else if (orientedLink.mainMetric.manageValue === 'sum') {
              orientedLink.valueMainMetricA = valueMainMetric.toString();
              orientedLink.valueMainMetricB = valueMainMetric.toString();
            } else if (orientedLink.mainMetric.manageValue === 'error') {
              if (totalValuesCount > 1) {
                orientedLink.valueMainMetricA = 'error';
                orientedLink.valueMainMetricB = 'error';
              } else {
                orientedLink.valueMainMetricA = valueMainMetric.toString();
                orientedLink.valueMainMetricB = valueMainMetric.toString();
              }
            }
          } else if (point) {
            if (mainMetric.manageValue === 'avg') {
              point.valueMetric = (valueMainMetric / totalValuesCount).toString();
            } else if (mainMetric.manageValue === 'sum') {
              point.valueMetric = valueMainMetric.toString();
            } else if (mainMetric.manageValue === 'error') {
              if (totalValuesCount > 1) {
                point.valueMetric = 'error';
              } else {
                point.valueMetric = valueMainMetric.toString();
              }
            }
          }
        }
      });
    }
  };

  SimplePanel.prototype.componentDidUpdate = function (prevProps) {
    if (this.props.options.baseMap.image !== prevProps.options.baseMap.image) {
      this.componentDidMount();
    }

    if (this.props !== prevProps) {
      this.chargeRegion(); // console.log(this.props.options.displayButton);
    }
  };
  /*************************************test create tooltip **********************************************************/

  /** render */


  SimplePanel.prototype.render = function () {
    var styleBackground;

    if (this.props.options.baseMap.modeSVG) {
      styleBackground = {
        position: 'absolute',
        textAlign: 'center',
        backgroundRepeat: 'no-repeat',
        height: this.props.options.baseMap.height + 'px',
        width: this.props.options.baseMap.width + 'px',
        opacity: 0.8,
        zIndex: 4
      };
    } else {
      styleBackground = {
        position: 'absolute',
        textAlign: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(' + this.props.options.baseMap.image + ')',
        backgroundSize: this.props.options.baseMap.width + 'px' + ' ' + this.props.options.baseMap.height + 'px',
        height: this.props.options.baseMap.height + 'px',
        width: this.props.options.baseMap.width + 'px',
        opacity: 0.8,
        zIndex: 4
      };
    }

    var styleSVG = {
      position: 'absolute',
      zIndex: 2
    };
    var styleSVG_2 = {
      position: 'absolute',
      textAlign: 'center',
      backgroundRepeat: 'no-repeat',
      height: this.props.options.baseMap.height + 'px',
      width: this.props.options.baseMap.width + 'px',
      // opacity: 0.8,
      // zIndex: 20,
      opacity: 0,
      zIndex: 3
    };
    var defaultStyle = {
      height: '100vh',
      width: '100vw',
      fontFamily: this.props.options.display.police,
      fontSize: this.props.options.display.size,
      fontStyle: this.props.options.display.style.italic ? 'italic' : 'normal',
      fontWeight: this.props.options.display.style.bold ? 'bold' : 'normal',
      textDecoration: this.props.options.display.style.underline ? 'underline' : 'none'
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["CustomScrollbar"], {
      autoHide: false,
      hideHorizontalTrack: true
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        textAlign: 'left',
        position: 'relative',
        display: 'inline-grid'
      }
    }, this.props.options.displayButton && this.state.allActionButton), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      style: defaultStyle,
      onClick: this.positionLegend
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.buttonManage[0] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        width: '200px',
        position: 'absolute',
        overflowY: 'scroll',
        marginLeft: '20%',
        marginRight: '20%',
        marginTop: '20%',
        marginBottom: '20%',
        border: '5px solid aliceblue',
        height: '40%'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
      title: "Add Region",
      onDismiss: this.addNode,
      onClickBackdrop: this.addNode,
      isOpen: this.state.nbClickButton
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CoordinateSpace_addCoordinate__WEBPACK_IMPORTED_MODULE_9__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      isRegion: true
    }))), this.state.buttonManage[2] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_legend__WEBPACK_IMPORTED_MODULE_11__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      callBack: this.handleClick
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      onClick: this.callMethod
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "tooltip"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      onClick: this.getCoordinates,
      id: "mainPanel",
      style: {
        position: 'absolute',
        top: '15%',
        zIndex: 1
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: styleSVG,
      dangerouslySetInnerHTML: {
        __html: this.state.svg
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "Intent",
      style: styleSVG_2,
      onMouseOver: this.SVG_PathImage,
      dangerouslySetInnerHTML: {
        __html: this.props.options.baseMap.layerImage
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "coordinateSpaces",
      style: styleBackground
    }, this.displayOrientedLink(), this.state.displayRegion, this.displayPoint()))))));
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
/* harmony import */ var Functions_initPoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Functions/initPoint */ "./Functions/initPoint.tsx");
/* harmony import */ var components_CoordinateSpace_coordinateSpace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/CoordinateSpace/coordinateSpace */ "./components/CoordinateSpace/coordinateSpace.tsx");
/* harmony import */ var _point_point__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./point/point */ "./components/CoordinateSpace/point/point.tsx");






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

    _this.defineIdPoint = function () {
      var id = 1;

      if (_this.props.options.arrayPoints.length === 0) {
        return id;
      } else {
        id = _this.props.options.arrayPoints[_this.props.options.arrayPoints.length - 1].id + 1;
        return id;
      }
    };
    /** call init class for coordinate state */


    _this.componentDidMount = function () {
      if (_this.props.isRegion) {
        _this.setState({
          coordinate: Object(Functions_initRegionCoordinateSpace__WEBPACK_IMPORTED_MODULE_2__["initRegionCoordinateSpace"])(_this.props.options.indexRegion)
        });
      } else {
        var id = _this.defineIdPoint();

        _this.setState({
          point: Object(Functions_initPoint__WEBPACK_IMPORTED_MODULE_3__["initPoint"])(id)
        });
      }
    };
    /** update onOptionsChange */


    _this.setAsyncOption = function (newIdx) {
      return Promise.resolve('Success').then(function () {
        if (_this.props.isRegion) {
          _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
            indexRegion: newIdx
          }));
        } else {
          _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
            indexPoint: newIdx
          }));
        }
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
              allCoordinateSpace = this.props.options.regionCoordinateSpace.slice();
              return [4
              /*yield*/
              , this.setAsyncOption(newCoordinate.id)];

            case 1:
              _a.sent();

              this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.options), {
                regionCoordinateSpace: allCoordinateSpace.concat(newCoordinate)
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
    /** send data for parent */


    _this.callBackPoint = function (id, newCoordinate) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var allCoordinateSpace;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!newCoordinate) return [3
              /*break*/
              , 2];
              allCoordinateSpace = this.props.options.arrayPoints.slice();
              return [4
              /*yield*/
              , this.setAsyncOption(newCoordinate.id)];

            case 1:
              _a.sent();

              this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.options), {
                arrayPoints: allCoordinateSpace.concat(newCoordinate)
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
      coordinate: undefined,
      point: undefined
    };
    return _this;
  }
  /** result */


  AddCoordinate.prototype.render = function () {
    if (this.props.isRegion) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.coordinate && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CoordinateSpace_coordinateSpace__WEBPACK_IMPORTED_MODULE_4__["default"], {
        options: this.props.options,
        onOptionsChange: this.props.onOptionsChange,
        data: this.props.data,
        coordinate: this.state.coordinate,
        callBackToParent: this.callBack,
        isAddCoordinate: true
      }));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.point && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_point_point__WEBPACK_IMPORTED_MODULE_5__["default"], {
        options: this.props.options,
        onOptionsChange: this.props.onOptionsChange,
        data: this.props.data,
        point: this.state.point,
        callBackToParent: this.callBackPoint,
        isAddPoint: true
      }));
    }
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
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Models_ArrayInputClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Models/ArrayInputClass */ "./Models/ArrayInputClass.tsx");
/* harmony import */ var Functions_Input_inputButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Functions/Input/inputButton */ "./Functions/Input/inputButton.tsx");
/* harmony import */ var Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Functions/Input/inputText */ "./Functions/Input/inputText.tsx");
/* harmony import */ var Functions_CreateInput_createInputCoor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Functions/CreateInput/createInputCoor */ "./Functions/CreateInput/createInputCoor.tsx");
/* harmony import */ var Functions_EditParameter_editGoodParameter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Functions/EditParameter/editGoodParameter */ "./Functions/EditParameter/editGoodParameter.tsx");
/* harmony import */ var Functions_searchIDLimit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Functions/searchIDLimit */ "./Functions/searchIDLimit.tsx");
/* harmony import */ var Functions_initRegionCoordinateSpace__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Functions/initRegionCoordinateSpace */ "./Functions/initRegionCoordinateSpace.tsx");
/* harmony import */ var components_Parametrage_manageLowerLimit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Parametrage/manageLowerLimit */ "./components/Parametrage/manageLowerLimit.tsx");
/* harmony import */ var _manageQuery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./manageQuery */ "./components/CoordinateSpace/manageQuery.tsx");
/* harmony import */ var components_Parametrage_parametresGeneriques__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Parametrage/parametresGeneriques */ "./components/Parametrage/parametresGeneriques.tsx");
/* harmony import */ var style_CoordinateSpace_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! style/CoordinateSpace.css */ "./style/CoordinateSpace.css");
/* harmony import */ var style_CoordinateSpace_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(style_CoordinateSpace_css__WEBPACK_IMPORTED_MODULE_13__);














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
    /** add inputs for a new coordiante */


    _this.addInput = function (id) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.setStateAsyncArrayInput({
                arrayInput: this.state.arrayInput.concat([new Models_ArrayInputClass__WEBPACK_IMPORTED_MODULE_3__["ArrayInputClass"](id, Object(Functions_CreateInput_createInputCoor__WEBPACK_IMPORTED_MODULE_6__["createInputCoor"])(id, false))])
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
    /** edit value for selectedDefaultValue and edit idSVG arrayCoor */


    _this.onChangeSelectSVG = function (value) {
      // const newId: SelectableValue<string> = value;
      var coordinate = _this.state.arrayCoor;
      coordinate.idSVG = value.value || '';

      _this.setState({
        selectedDefaultSVG: value,
        arrayCoor: coordinate
      });
    };
    /** call function to return arrayCoor a SimpleEditor */


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
        _this.props.callBackToParent(_this.state.arrayCoor.id, _this.state.arrayCoor);
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
    /** update lower limit */


    _this.callBackManageLowerLimit = function (coordiante) {
      var newValue = _this.state.arrayCoor;
      newValue.colorMode = coordiante.colorMode;
      newValue.traceBorder = coordiante.traceBorder;
      newValue.traceBack = coordiante.traceBack;

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
    /** save mainMetric data */


    _this.callBackMainMetric = function (mainMetric) {
      var newValue = _this.state.arrayCoor;
      newValue.mainMetric = mainMetric;

      _this.setState({
        arrayCoor: newValue
      });
    };
    /** change value radio button checker to pass svg or coordinate mode */


    _this.onChangeRadioMode = function (event) {
      var coordinate = _this.state.arrayCoor;
      coordinate.mode = event.currentTarget.value === 'svgMode' ? true : false;

      _this.setState({
        selectedRadio: event.currentTarget.value,
        arrayCoor: coordinate
      });
    };
    /** add all id SVG in select */


    _this.fillSelectSVG = function () {
      var e_1, _a;

      var selectedIDSvg = [];

      if (_this.state.allIDSelected.length > 0) {
        var allIDSelected = _this.state.allIDSelected;
        var defaultSVG = allIDSelected[0];

        try {
          for (var allIDSelected_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(allIDSelected), allIDSelected_1_1 = allIDSelected_1.next(); !allIDSelected_1_1.done; allIDSelected_1_1 = allIDSelected_1.next()) {
            var line = allIDSelected_1_1.value;

            if (line.value === _this.state.arrayCoor.idSVG) {
              defaultSVG = line;
            }
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (allIDSelected_1_1 && !allIDSelected_1_1.done && (_a = allIDSelected_1["return"])) _a.call(allIDSelected_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }

        _this.setState({
          selectedDefaultSVG: defaultSVG
        });

        return;
      }

      var timeRefresh = 1000;

      if (_this.props.options.baseMap.modeSVG) {
        var refresh_1 = setInterval(function () {
          var e_2, _a, e_3, _b;

          var data = Object(Functions_searchIDLimit__WEBPACK_IMPORTED_MODULE_8__["returnAllId"])(_this.props.options.coordinateSpaceInitial.coordinate, _this.props.options.baseMap);

          if (data.length > 0) {
            try {
              for (var data_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                var line = data_1_1.value;
                selectedIDSvg.push({
                  value: line,
                  label: line
                });
              }
            } catch (e_2_1) {
              e_2 = {
                error: e_2_1
              };
            } finally {
              try {
                if (data_1_1 && !data_1_1.done && (_a = data_1["return"])) _a.call(data_1);
              } finally {
                if (e_2) throw e_2.error;
              }
            }

            var defaultSVG = selectedIDSvg[0];

            try {
              for (var selectedIDSvg_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(selectedIDSvg), selectedIDSvg_1_1 = selectedIDSvg_1.next(); !selectedIDSvg_1_1.done; selectedIDSvg_1_1 = selectedIDSvg_1.next()) {
                var line = selectedIDSvg_1_1.value;

                if (line.value === _this.state.arrayCoor.idSVG) {
                  defaultSVG = line;
                }
              }
            } catch (e_3_1) {
              e_3 = {
                error: e_3_1
              };
            } finally {
              try {
                if (selectedIDSvg_1_1 && !selectedIDSvg_1_1.done && (_b = selectedIDSvg_1["return"])) _b.call(selectedIDSvg_1);
              } finally {
                if (e_3) throw e_3.error;
              }
            }

            _this.setState({
              allIDSelected: selectedIDSvg,
              selectedDefaultSVG: defaultSVG
            });

            clearInterval(refresh_1);
          } // else {
          // 	console.error('error search id');
          // }

        }, timeRefresh);
      }
    };
    /**
     * fill input whith data
     * this function is called by mount and update event
     */


    _this.getDataInInput = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.addInput(this.props.coordinate.id)];

            case 1:
              _a.sent();

              this.fillInputEspaceCoor();
              this.fillSelectSVG();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** call function in load component */


    _this.componentDidMount = function () {
      _this.getDataInInput();
    };
    /** function is call when props is update. Update state */


    _this.componentDidUpdate = function (prevProps, prevState) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!(prevProps.coordinate.id !== this.props.coordinate.id)) return [3
              /*break*/
              , 3];
              return [4
              /*yield*/
              , this.setStateAsyncArrayCoor({
                arrayCoor: Object(Functions_initRegionCoordinateSpace__WEBPACK_IMPORTED_MODULE_9__["cloneRegionCoordinateSpace"])(this.props.coordinate)
              })];

            case 1:
              _a.sent();

              return [4
              /*yield*/
              , this.setStateAsyncArrayInput({
                arrayInput: []
              })];

            case 2:
              _a.sent();

              this.getDataInInput();
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
      arrayCoor: Object(Functions_initRegionCoordinateSpace__WEBPACK_IMPORTED_MODULE_9__["cloneRegionCoordinateSpace"])(_this.props.coordinate),
      arrayInput: [],
      htmlInput: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null),
      hiddenAlert: true,
      titleAlert: 'Error: label is empty',
      severityAlert: 'error',
      selectedRadio: 'svgMode',
      allIDSelected: [],
      selectedDefaultSVG: []
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
    tmp = Object(Functions_EditParameter_editGoodParameter__WEBPACK_IMPORTED_MODULE_7__["editGoodParameterExtend"])(name, tmp, currentTarget);
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
      value = this.state.arrayCoor.img;
    } else if (param.startsWith('key')) {
      value = this.state.arrayCoor.mainMetric.key;
    } else if (param.startsWith('valueKey')) {
      value = this.state.arrayCoor.mainMetric.keyValue;
    }

    return value;
  };
  /** create dynamic input */


  CoordinateSpace.prototype.fillInputEspaceCoor = function () {
    var e_4, _a;

    var _this = this;

    var arrayInput = this.state.arrayInput;
    var finalItem = [];

    var _loop_1 = function _loop_1(line) {
      var mapItems = line.getUneClassInput().map(function (obj) {
        return obj.getInputType() === 'text' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: obj.getId(),
          label: obj.getLabel(),
          name: obj.getName(),
          placeholder: obj.getPlaceholder() || '',
          required: obj.getRequired(),
          value: _this.getGoodValue(line.getId(), obj.getName()),
          _handleChange: function _handleChange(event) {
            return _this._handleChange(event.currentTarget.value, obj.getName(), line.getId());
          }
        }) : !_this.props.isAddCoordinate ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
        className: "inputCoor"
      }, mapItems);
      finalItem = finalItem.concat(newInput);
    };

    try {
      for (var arrayInput_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arrayInput), arrayInput_1_1 = arrayInput_1.next(); !arrayInput_1_1.done; arrayInput_1_1 = arrayInput_1.next()) {
        var line = arrayInput_1_1.value;

        _loop_1(line);
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (arrayInput_1_1 && !arrayInput_1_1.done && (_a = arrayInput_1["return"])) _a.call(arrayInput_1);
      } finally {
        if (e_4) throw e_4.error;
      }
    }

    this.setState(function (prevState) {
      return {
        htmlInput: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, finalItem),
        selectedRadio: prevState.arrayCoor.mode ? 'svgMode' : 'coordinateMode'
      };
    });
  };
  /** return html */


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
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
      title: this.state.titleAlert,
      severity: this.state.severityAlert
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.htmlInput), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_manageQuery__WEBPACK_IMPORTED_MODULE_11__["default"], {
      options: this.props.options,
      idCoordinate: this.state.arrayCoor.id,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      mainMetric: this.state.arrayCoor.mainMetric,
      callBackToParent: this.callBackMainMetric,
      isLink: false
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Parametrage_parametresGeneriques__WEBPACK_IMPORTED_MODULE_12__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      coordinateSpace: this.state.arrayCoor,
      callBackToParent: this.callBackToOther
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Parametrage_manageLowerLimit__WEBPACK_IMPORTED_MODULE_10__["default"], {
      coordinate: this.state.arrayCoor,
      callBack: this.callBackManageLowerLimit,
      lowerLimitCallBack: this.callBackLowerLimit
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "radio"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "radio",
      value: "svgMode",
      checked: this.state.selectedRadio === 'svgMode',
      onChange: this.onChangeRadioMode
    }), "SVG mode")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "radio"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "radio",
      value: "coordinateMode",
      checked: this.state.selectedRadio === 'coordinateMode',
      onChange: this.onChangeRadioMode
    }), "Coordinate mode")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), this.state.selectedRadio === 'svgMode' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "svgMode"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      style: {
        verticalAlign: 'middle'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], null, "Zone SVG")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      onChange: function onChange(value) {
        return _this.onChangeSelectSVG(value);
      },
      allowCustomValue: false,
      options: this.state.allIDSelected,
      width: 10,
      value: this.state.selectedDefaultSVG
    })))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "classRegion"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Image",
      labelWidth: 10,
      inputWidth: 20,
      type: "text",
      value: this.state.arrayCoor.img,
      name: "image",
      onChange: function onChange(event) {
        return _this._handleChange(event.currentTarget.value, 'image', _this.state.arrayCoor.id);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "X min",
      labelWidth: 10,
      inputWidth: 20,
      type: "text",
      value: this.state.arrayCoor.coords.xMin,
      name: "positionXMin",
      onChange: function onChange(event) {
        return _this._handleChange(event.currentTarget.value, 'positionXMin', _this.state.arrayCoor.id);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "X max",
      labelWidth: 10,
      inputWidth: 20,
      type: "text",
      value: this.state.arrayCoor.coords.xMax,
      name: "positionXMax",
      onChange: function onChange(event) {
        return _this._handleChange(event.currentTarget.value, 'positionXMax', _this.state.arrayCoor.id);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Y min",
      labelWidth: 10,
      inputWidth: 20,
      type: "text",
      value: this.state.arrayCoor.coords.yMin,
      name: "positionYMin",
      onChange: function onChange(event) {
        return _this._handleChange(event.currentTarget.value, 'positionYMin', _this.state.arrayCoor.id);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Y max",
      labelWidth: 10,
      inputWidth: 20,
      type: "text",
      value: this.state.arrayCoor.coords.yMax,
      name: "positionYMax",
      onChange: function onChange(event) {
        return _this._handleChange(event.currentTarget.value, 'positionYMax', _this.state.arrayCoor.id);
      }
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        textAlign: 'center'
      },
      className: "buttonSave"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      style: {
        marginRight: '1%'
      },
      onClick: function onClick() {
        return _this.callBack();
      }
    }, "Load"), !this.props.isAddCoordinate && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: this.deleteOwnInput,
      variant: "danger"
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
/* harmony import */ var _coordinateSpace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coordinateSpace */ "./components/CoordinateSpace/coordinateSpace.tsx");


 // import { initRegionCoordinateSpace } from 'Functions/initRegionCoordinateSpace';


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
        var oldData = _this.props.options.regionCoordinateSpace.slice();

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
          regionCoordinateSpace: oldData
        }));
      } else {
        var find = false;

        var oldData = _this.props.options.regionCoordinateSpace.slice();

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
            regionCoordinateSpace: oldData
          }));

          _this.fillSelectRegionSpace();
        }
      }
    };
    /** change select value to edit */


    _this.onChangeSelectCoordinate = function (value) {
      _this.setState({
        selectCoordinateSpaceDefault: value
      });
    };
    /** fill select whith array region object */


    _this.fillSelectRegionSpace = function () {
      var e_3, _a, e_4, _b;

      var _c;

      var valueExist = false;
      var valueSelect = [];

      var stockTmpCoordinatesSpace = _this.props.options.regionCoordinateSpace.slice();

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

      if (_this.state.selectCoordinateSpaceDefault) {
        try {
          for (var stockTmpCoordinatesSpace_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(stockTmpCoordinatesSpace), stockTmpCoordinatesSpace_2_1 = stockTmpCoordinatesSpace_2.next(); !stockTmpCoordinatesSpace_2_1.done; stockTmpCoordinatesSpace_2_1 = stockTmpCoordinatesSpace_2.next()) {
            var line = stockTmpCoordinatesSpace_2_1.value;

            if (line.id === ((_c = _this.state.selectCoordinateSpaceDefault.value) === null || _c === void 0 ? void 0 : _c.id)) {
              valueExist = true;
              break;
            }
          }
        } catch (e_4_1) {
          e_4 = {
            error: e_4_1
          };
        } finally {
          try {
            if (stockTmpCoordinatesSpace_2_1 && !stockTmpCoordinatesSpace_2_1.done && (_b = stockTmpCoordinatesSpace_2["return"])) _b.call(stockTmpCoordinatesSpace_2);
          } finally {
            if (e_4) throw e_4.error;
          }
        }
      } // dev


      _this.setState({
        selectCoordinateSpace: valueSelect,
        selectCoordinateSpaceDefault: valueExist ? _this.state.selectCoordinateSpaceDefault : valueSelect.length > 0 ? valueSelect[0] : _this.state.selectCoordinateSpaceDefault
      }); // final
      // this.setState({
      // 	selectCoordinateSpace: valueSelect,
      // 	selectCoordinateSpaceDefault: (valueSelect.length > 0) ?
      // 		valueSelect[0] : this.state.selectCoordinateSpaceDefault,
      // });

    };
    /** fill data for select */


    _this.componentDidMount = function () {
      _this.fillSelectRegionSpace();
    };
    /** update state if value props change */


    _this.componentDidUpdate = function (prevProps) {
      if (prevProps.options.regionCoordinateSpace !== _this.props.options.regionCoordinateSpace) {
        // this.componentDidMount();
        _this.fillSelectRegionSpace();
      }
    };

    _this.state = {
      selectCoordinateSpace: [],
      selectCoordinateSpaceDefault: []
    };
    return _this;
  }
  /** return html */


  EditCoordinateSpace.prototype.render = function () {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      style: {
        verticalAlign: 'middle'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
      width: 15
    }, "Select label region to edit")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      onChange: function onChange(value) {
        return _this.onChangeSelectCoordinate(value);
      },
      allowCustomValue: false,
      options: this.state.selectCoordinateSpace,
      width: 10,
      value: this.state.selectCoordinateSpaceDefault
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.selectCoordinateSpaceDefault.value ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_coordinateSpace__WEBPACK_IMPORTED_MODULE_3__["default"], {
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

/***/ "./components/CoordinateSpace/manageAuxiliaryQuery.tsx":
/*!*************************************************************!*\
  !*** ./components/CoordinateSpace/manageAuxiliaryQuery.tsx ***!
  \*************************************************************/
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

var ManageAuxiliaryQuery =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ManageAuxiliaryQuery, _super);

  function ManageAuxiliaryQuery(props) {
    var _this = _super.call(this, props) || this;

    _this.getAuxiliaryMetrics = function () {
      var auxiliaryMetrics = [];

      if (_this.props.isLink) {
        auxiliaryMetrics = _this.props.options.arrayOrientedLinks[_this.props.id || 0].metrics;
      } else {
        if (_this.props.coordinateSpace) {
          auxiliaryMetrics = _this.props.coordinateSpace.metrics;
        }
      }

      return auxiliaryMetrics;
    };

    _this.getReferenceMainMetric = function () {
      var refId = '';

      if (_this.props.isLink) {
        refId = _this.props.options.arrayOrientedLinks[_this.props.id || 0].mainMetric.refId || '';
      } else {
        if (_this.props.coordinateSpace) {
          refId = _this.props.coordinateSpace.mainMetric.refId || '';
        }
      }

      return refId;
    };
    /** call back to parent */


    _this.callBack = function () {
      _this.props.callBackToParent(_this.state.metrics, _this.props.id);
    };
    /** switch value collapseMainMetric when click collapse */


    _this.onToggleCollapse = function (isOpen) {
      _this.setState({
        collapse: isOpen
      });
    };

    _this.onChangeKey = function (event) {
      var newAuxiliaryMetrics = _this.state.metrics;
      var id = event.currentTarget.id;
      var value = event.currentTarget.value;
      newAuxiliaryMetrics[id].key = value;

      _this.setState({
        metrics: newAuxiliaryMetrics
      });

      _this.callBack();
    };

    _this.onChangeValueKey = function (event) {
      var newAuxiliaryMetrics = _this.state.metrics;
      var id = event.currentTarget.id;
      var value = event.currentTarget.value;
      newAuxiliaryMetrics[id].keyValue = value;

      _this.setState({
        metrics: newAuxiliaryMetrics
      });

      _this.callBack();
    };

    _this.onChangeManageValue = function (event) {
      var newAuxiliaryMetrics = _this.state.metrics;
      var id = event.id;
      newAuxiliaryMetrics[id].manageValue = event.value;
      var newValue = {
        id: event.id,
        value: event.value,
        label: event.label
      };

      _this.setState({
        metrics: newAuxiliaryMetrics,
        selectDefaultManageValue: newValue
      });

      _this.callBack();
    };

    _this.addAuxiliaryMetric = function () {
      var refIdMetric = _this.getReferenceMainMetric();

      var auxiliaryMetrics = _this.state.metrics;
      auxiliaryMetrics.push({
        key: '',
        unit: '',
        format: '',
        keyValue: '',
        refId: refIdMetric,
        manageValue: 'avg'
      });

      _this.setState({
        metrics: auxiliaryMetrics
      });

      _this.displayInputs();

      _this.callBack();
    };

    _this.deleteAuxiliaryMetric = function (event) {
      var id = event.currentTarget.id;

      var auxiliaryMetrics = _this.getAuxiliaryMetrics();

      auxiliaryMetrics.splice(id, 1);

      _this.displayInputs();

      _this.callBack();
    };

    _this.getAllManageValue = function (id) {
      var selectManageValue = [{
        id: id,
        value: 'avg',
        label: 'average'
      }, {
        id: id,
        value: 'sum',
        label: 'total'
      }, {
        id: id,
        value: 'error',
        label: 'error'
      }];
      return selectManageValue;
    };

    _this.getCurrentManageValue = function (id) {
      var label = '';

      if (_this.state.metrics[id].manageValue === 'avg') {
        label = 'average';
      } else if (_this.state.metrics[id].manageValue === 'sum') {
        label = 'total';
      } else if (_this.state.metrics[id].manageValue === 'error') {
        label = 'error';
      }

      var value = {
        id: id,
        value: _this.state.metrics[id].manageValue,
        label: label
      };
      return value;
    };

    _this.generateInputs = function (index) {
      var _a, _b;

      var id = index;

      var refIdMetric = _this.getReferenceMainMetric();

      var idLink = ((_a = _this.props.id) === null || _a === void 0 ? void 0 : _a.toString()) || '';
      var styleTitle = {
        marginTop: '10px',
        textAlign: 'center'
      };
      var styleMainDiv = {
        marginTop: '5px',
        border: '1px solid rgb(23, 23, 24)'
      };
      var styleContent = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '5px'
      };
      var styleSelect = {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '2px'
      };
      var styleReferenceMetric = {
        width: '276px',
        height: '35px',
        border: '1px solid #262628',
        borderRadius: '0 3px 3px 0',
        backgroundColor: '#09090b',
        padding: '8px',
        fontSize: '14px',
        lineHeight: '18px',
        color: '#d8d9da',
        marginBottom: '0px'
      };
      var item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: idLink + 'mainDiv' + id.toString(),
        style: styleMainDiv
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        key: idLink + 'title' + id.toString(),
        style: styleTitle
      }, 'Metric ' + (id + 1).toString()), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: idLink + 'content' + id.toString(),
        style: styleContent
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: idLink + 'inputs' + id.toString()
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: idLink + 'refBloc' + id.toString(),
        style: styleSelect
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
        key: idLink + 'labelref' + id.toString(),
        width: 10
      }, "Query"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        key: ((_b = _this.props.id) === null || _b === void 0 ? void 0 : _b.toString()) || '' + 'refValue' + id.toString(),
        style: styleReferenceMetric
      }, refIdMetric)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
        key: idLink + 'inputKey' + id.toString(),
        id: id.toString(),
        label: "Key",
        labelWidth: 10,
        inputWidth: 20,
        type: "text",
        value: _this.state.metrics[id].key,
        name: "key",
        onChange: _this.onChangeKey
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
        key: idLink + 'valueKey' + id.toString(),
        id: id.toString(),
        label: "Value key",
        labelWidth: 10,
        inputWidth: 20,
        type: "text",
        value: _this.state.metrics[id].keyValue,
        name: "valueKey",
        onChange: _this.onChangeValueKey
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: idLink + 'divTypeOfValue' + id.toString(),
        id: id.toString(),
        style: styleSelect
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
        key: idLink + 'labelTypeOfValue' + id.toString(),
        width: 10
      }, "Value"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
        key: idLink + 'selectTypeOfValue' + id.toString(),
        onChange: _this.onChangeManageValue,
        allowCustomValue: false,
        options: _this.getAllManageValue(id.toString()),
        width: 20,
        value: _this.getCurrentManageValue(id)
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: idLink + 'buttonDelete' + id.toString()
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        id: id.toString(),
        onClick: _this.deleteAuxiliaryMetric,
        variant: 'danger'
      }, "Delete"))));
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: idLink + 'listInputOneMetric' + id.toString()
      }, item);
    };

    _this.displayInputs = function () {
      var _a;

      var idLink = ((_a = _this.props.id) === null || _a === void 0 ? void 0 : _a.toString()) || '';

      var auxiliaryMetrics = _this.getAuxiliaryMetrics();

      var mapItems = [];
      var index = 0;
      auxiliaryMetrics.forEach(function () {
        var item = _this.generateInputs(index);

        mapItems.push(item);
        index++;
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: idLink + 'listInputAllMetrics'
      }, mapItems);
    };

    _this.state = {
      metrics: _this.props.metrics,
      collapse: false,
      // selectManageValue: [
      // 	{ 'value': 'avg', 'label': 'average' },
      // 	{ 'value': 'sum', 'label': 'total' },
      // 	{ 'value': 'error', 'label': 'error' }
      // ],
      selectDefaultManageValue: {
        value: 'avg',
        label: 'avg'
      },
      mapItems: []
    };
    return _this;
  }
  /**
   * result
   */


  ManageAuxiliaryQuery.prototype.render = function () {
    var _a;

    var idLink = ((_a = this.props.id) === null || _a === void 0 ? void 0 : _a.toString()) || '';
    var styleButtonAdd = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: '10px'
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.collapse,
      label: "Auxiliary metrics",
      onToggle: this.onToggleCollapse
    }, this.displayInputs(), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: idLink + 'buttonAdd',
      style: styleButtonAdd
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: this.addAuxiliaryMetric
    }, "Add Auxiliary Metric")));
  };

  return ManageAuxiliaryQuery;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ManageAuxiliaryQuery);

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
/* harmony import */ var _point_editPoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./point/editPoint */ "./components/CoordinateSpace/point/editPoint.tsx");
/* harmony import */ var _addCoordinate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addCoordinate */ "./components/CoordinateSpace/addCoordinate.tsx");






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

    _this.contentTabEdit = function () {
      var result = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);

      if (_this.props.isRegion) {
        result = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_editCoordinateSpace__WEBPACK_IMPORTED_MODULE_3__["default"], {
          onOptionsChange: _this.props.onOptionsChange,
          options: _this.props.options,
          data: _this.props.data
        }));
      } else {
        result = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_point_editPoint__WEBPACK_IMPORTED_MODULE_4__["default"], {
          onOptionsChange: _this.props.onOptionsChange,
          options: _this.props.options,
          data: _this.props.data
        }));
      }

      return result;
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
      className: "page-header tabs",
      hideBorder: false
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: "tabDisplayCoordinateSpaceAdd",
      label: "Add coordinate space",
      active: this.state.tabsVariable[0],
      onChangeTab: function onChangeTab() {
        return _this.goToTab(0);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: "tabDisplayCoordinateSpaceEdit",
      label: "Edit coordinate space",
      active: this.state.tabsVariable[1],
      onChangeTab: function onChangeTab() {
        return _this.goToTab(1);
      }
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["TabContent"], null, this.state.tabsVariable[0] && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_addCoordinate__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onOptionsChange: this.props.onOptionsChange,
      options: this.props.options,
      data: this.props.data,
      returnEditMode: this.returnEditMode,
      isRegion: this.props.isRegion
    }), this.state.tabsVariable[1] && this.contentTabEdit()));
  };

  return ManageCoordinateSpace;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ManageCoordinateSpace);

/***/ }),

/***/ "./components/CoordinateSpace/manageQuery.tsx":
/*!****************************************************!*\
  !*** ./components/CoordinateSpace/manageQuery.tsx ***!
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



/**
 * def
 */

var ManageQuery =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ManageQuery, _super);

  function ManageQuery(props) {
    var _this = _super.call(this, props) || this;
    /** call back to parent */


    _this.callBack = function () {
      _this.props.callBackToParent(_this.state.mainMetric, _this.props.id);
    };
    /** edit value for default select manage value */


    _this.onChangeSelectManageValue = function (value) {
      var newMainMetric = _this.state.mainMetric;
      newMainMetric.manageValue = value.value || 'error';

      _this.setState({
        mainMetric: newMainMetric,
        selectDefaultManageValue: value || _this.state.selectDefaultManageValue
      });

      _this.callBack();
    };
    /** edit value key for mainMetric */


    _this._handleChangeKey = function (value) {
      var newMainMetric = _this.state.mainMetric;
      newMainMetric.key = value;

      _this.setState({
        mainMetric: newMainMetric
      });

      _this.callBack();
    };
    /** edit value keyValue for mainMetric */


    _this._handleChangeKeyValue = function (value) {
      var newMainMetric = _this.state.mainMetric;
      newMainMetric.keyValue = value;

      _this.setState({
        mainMetric: newMainMetric
      });

      _this.callBack();
    };
    /** edit value for select */


    _this.onChangeSelectQuery = function (value) {
      var _a;

      var newMainMetric = _this.state.mainMetric;
      newMainMetric.refId = ((_a = value.value) === null || _a === void 0 ? void 0 : _a.refId) || '';
      newMainMetric.expr = '';

      _this.setState({
        mainMetric: newMainMetric,
        selectQueryDefault: value
      });

      _this.callBack();
    };
    /** switch value collapseMainMetric when click collapse */


    _this.onToggleMainMetric = function (isOpen) {
      _this.setState({
        collapseMainMetric: isOpen
      });
    };
    /** add all query in select */


    _this.fillSelectQuery = function () {
      var e_1, _a, e_2, _b, e_3, _c;

      var _d, _e, _f;

      var valueSelect = [];
      var newMainMetric = _this.state.mainMetric;
      valueSelect.push({
        value: undefined,
        label: 'No value'
      });

      try {
        for (var _g = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.props.data.series), _h = _g.next(); !_h.done; _h = _g.next()) {
          var line = _h.value;
          var duplicate = false;

          try {
            for (var valueSelect_1 = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(valueSelect)), valueSelect_1_1 = valueSelect_1.next(); !valueSelect_1_1.done; valueSelect_1_1 = valueSelect_1.next()) {
              var valueSave = valueSelect_1_1.value;

              if (((_d = valueSave.value) === null || _d === void 0 ? void 0 : _d.refId) === line.refId) {
                duplicate = true;
                break;
              }
            }
          } catch (e_2_1) {
            e_2 = {
              error: e_2_1
            };
          } finally {
            try {
              if (valueSelect_1_1 && !valueSelect_1_1.done && (_b = valueSelect_1["return"])) _b.call(valueSelect_1);
            } finally {
              if (e_2) throw e_2.error;
            }
          }

          if (!duplicate) {
            valueSelect.push({
              value: line,
              label: line.refId
            });
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_h && !_h.done && (_a = _g["return"])) _a.call(_g);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      if (newMainMetric.refId === '') {
        newMainMetric.refId = valueSelect.length > 0 ? ((_e = valueSelect[0].value) === null || _e === void 0 ? void 0 : _e.refId) || '' : '';
      }

      var refId = _this.state.mainMetric.refId;
      var defaultValue;
      defaultValue = {
        value: undefined,
        label: 'No value'
      };

      if (refId) {
        try {
          // console.log(valueSelect.filter((a) => { return a.value?.refId === refId; }));
          for (var valueSelect_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(valueSelect), valueSelect_2_1 = valueSelect_2.next(); !valueSelect_2_1.done; valueSelect_2_1 = valueSelect_2.next()) {
            var line = valueSelect_2_1.value;

            if (((_f = line.value) === null || _f === void 0 ? void 0 : _f.refId) === refId) {
              defaultValue = line;
              break;
            }
          }
        } catch (e_3_1) {
          e_3 = {
            error: e_3_1
          };
        } finally {
          try {
            if (valueSelect_2_1 && !valueSelect_2_1.done && (_c = valueSelect_2["return"])) _c.call(valueSelect_2);
          } finally {
            if (e_3) throw e_3.error;
          }
        }
      }

      _this.setState({
        mainMetric: newMainMetric,
        selectQuery: valueSelect,
        selectQueryDefault: defaultValue
      });
    };
    /** fill data when component mount */


    _this.componentDidMount = function () {
      var e_4, _a;

      _this.fillSelectQuery();

      var newSelectManageValue = [{
        value: 'avg',
        label: 'average'
      }, {
        value: 'sum',
        label: 'total'
      }, {
        value: 'error',
        label: 'error'
      }];
      var defaultValue = newSelectManageValue[0];

      try {
        for (var newSelectManageValue_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(newSelectManageValue), newSelectManageValue_1_1 = newSelectManageValue_1.next(); !newSelectManageValue_1_1.done; newSelectManageValue_1_1 = newSelectManageValue_1.next()) {
          var line = newSelectManageValue_1_1.value;

          if (line.value === _this.state.mainMetric.manageValue) {
            defaultValue = line;
          }
        }
      } catch (e_4_1) {
        e_4 = {
          error: e_4_1
        };
      } finally {
        try {
          if (newSelectManageValue_1_1 && !newSelectManageValue_1_1.done && (_a = newSelectManageValue_1["return"])) _a.call(newSelectManageValue_1);
        } finally {
          if (e_4) throw e_4.error;
        }
      }

      _this.setState({
        selectManageValue: newSelectManageValue,
        selectDefaultManageValue: defaultValue
      });
    };
    /** update with promise mainMetric state */


    _this.setStateAsyncMainMetric = function (state) {
      return new Promise(function (resolve) {
        return _this.setState(state, resolve);
      });
    };
    /** update data when props is update */


    _this.componentDidUpdate = function (prevProps) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!(prevProps.idCoordinate !== this.props.idCoordinate)) return [3
              /*break*/
              , 2];
              this.setState({
                collapseMainMetric: false
              });
              return [4
              /*yield*/
              , this.setStateAsyncMainMetric({
                mainMetric: this.props.mainMetric
              })];

            case 1:
              _a.sent();

              this.fillSelectQuery();
              _a.label = 2;

            case 2:
              if (prevProps.data.series !== this.props.data.series) {
                this.fillSelectQuery();
              }

              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.displayHtml = function () {
      var result = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);

      if (!_this.props.isLink) {
        result = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
          isOpen: _this.state.collapseMainMetric,
          label: "Main metric",
          onToggle: _this.onToggleMainMetric
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
          style: {
            verticalAlign: 'middle'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], null, "Query")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
          onChange: function onChange(value) {
            return _this.onChangeSelectQuery(value);
          },
          allowCustomValue: false,
          options: _this.state.selectQuery,
          width: 10,
          value: _this.state.selectQueryDefault
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          label: "Key",
          labelWidth: 10,
          inputWidth: 20,
          type: "text",
          value: _this.state.mainMetric.key,
          name: "key",
          onChange: function onChange(event) {
            return _this._handleChangeKey(event.currentTarget.value);
          }
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          label: "Value key",
          labelWidth: 10,
          inputWidth: 20,
          type: "text",
          value: _this.state.mainMetric.keyValue,
          name: "valueKey",
          onChange: function onChange(event) {
            return _this._handleChangeKeyValue(event.currentTarget.value);
          }
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
          style: {
            verticalAlign: 'middle'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], null, "Manipulate")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
          onChange: function onChange(value) {
            return _this.onChangeSelectManageValue(value);
          },
          allowCustomValue: false,
          options: _this.state.selectManageValue,
          width: 10,
          value: _this.state.selectDefaultManageValue
        }))));
      } else if (_this.props.isLink) {
        var orientedLink = _this.props.options.arrayOrientedLinks[_this.props.id || 0];
        console.log(orientedLink);
        var orientationLink = orientedLink.orientationLink.value || '';
        console.log(orientationLink);
        result = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
          isOpen: _this.state.collapseMainMetric,
          label: "Main metric",
          onToggle: _this.onToggleMainMetric
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
          style: {
            verticalAlign: 'middle'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], null, "Query")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
          onChange: function onChange(value) {
            return _this.onChangeSelectQuery(value);
          },
          allowCustomValue: false,
          options: _this.state.selectQuery,
          width: 10,
          value: _this.state.selectQueryDefault
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          label: "Key",
          labelWidth: 10,
          inputWidth: 20,
          type: "text",
          value: _this.state.mainMetric.key,
          name: "key",
          onChange: function onChange(event) {
            return _this._handleChangeKey(event.currentTarget.value);
          }
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          label: "Value key",
          labelWidth: 10,
          inputWidth: 20,
          type: "text",
          value: _this.state.mainMetric.keyValue,
          name: "valueKey",
          onChange: function onChange(event) {
            return _this._handleChangeKeyValue(event.currentTarget.value);
          }
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
          style: {
            verticalAlign: 'middle'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], null, "Manipulate")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
          onChange: function onChange(value) {
            return _this.onChangeSelectManageValue(value);
          },
          allowCustomValue: false,
          options: _this.state.selectManageValue,
          width: 10,
          value: _this.state.selectDefaultManageValue
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
          style: {
            verticalAlign: 'middle',
            marginTop: '10px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], null, "Query")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
          onChange: function onChange(value) {
            return _this.onChangeSelectQuery(value);
          },
          allowCustomValue: false,
          options: _this.state.selectQuery,
          width: 10,
          value: _this.state.selectQueryDefault
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          label: "Key",
          labelWidth: 10,
          inputWidth: 20,
          type: "text",
          value: _this.state.mainMetric.key,
          name: "key",
          onChange: function onChange(event) {
            return _this._handleChangeKey(event.currentTarget.value);
          }
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          label: "Value key",
          labelWidth: 10,
          inputWidth: 20,
          type: "text",
          value: _this.state.mainMetric.keyValue,
          name: "valueKey",
          onChange: function onChange(event) {
            return _this._handleChangeKeyValue(event.currentTarget.value);
          }
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
          style: {
            verticalAlign: 'middle'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], null, "Manipulate")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
          onChange: function onChange(value) {
            return _this.onChangeSelectManageValue(value);
          },
          allowCustomValue: false,
          options: _this.state.selectManageValue,
          width: 10,
          value: _this.state.selectDefaultManageValue
        }))));
      }

      return result;
    };

    _this.state = {
      mainMetric: _this.props.mainMetric,
      collapseMainMetric: false,
      selectManageValue: [],
      selectDefaultManageValue: {
        value: 'avg',
        label: 'avg'
      },
      selectQuery: [],
      selectQueryDefault: []
    };
    return _this;
  }
  /**
   * result
   */


  ManageQuery.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.displayHtml());
  };

  return ManageQuery;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ManageQuery);

/***/ }),

/***/ "./components/CoordinateSpace/point/editPoint.tsx":
/*!********************************************************!*\
  !*** ./components/CoordinateSpace/point/editPoint.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point */ "./components/CoordinateSpace/point/point.tsx");


 // import { initRegionCoordinateSpace } from 'Functions/initRegionCoordinateSpace';


/**
 * manage coordinate space for simpleEditor
 */

var EditPoint =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditPoint, _super);

  function EditPoint(props) {
    var _this = _super.call(this, props) || this;
    /**
     * save data in parent
     */


    _this.callBack = function (id, newCoordinate) {
      var e_1, _a, e_2, _b;

      if (newCoordinate) {
        var oldData = _this.props.options.arrayPoints.slice();

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
          arrayPoints: oldData
        }));
      } else {
        var find = false;

        var oldData = _this.props.options.arrayPoints.slice();

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
            arrayPoints: oldData
          }));

          _this.fillSelectPoint();
        }
      }
    };
    /** change select value to edit */


    _this.onChangeSelectCoordinate = function (value) {
      _this.setState({
        selectCoordinateSpaceDefault: value
      });
    };
    /** fill select whith array region object */


    _this.fillSelectPoint = function () {
      var e_3, _a;

      var valueSelect = [];

      var stockTmpCoordinatesSpace = _this.props.options.arrayPoints.slice();

      try {
        for (var stockTmpCoordinatesSpace_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(stockTmpCoordinatesSpace), stockTmpCoordinatesSpace_1_1 = stockTmpCoordinatesSpace_1.next(); !stockTmpCoordinatesSpace_1_1.done; stockTmpCoordinatesSpace_1_1 = stockTmpCoordinatesSpace_1.next()) {
          var line = stockTmpCoordinatesSpace_1_1.value;
          var label = line.label || line.name;
          valueSelect.push({
            value: line,
            label: label
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
      } // dev


      _this.setState({
        selectCoordinateSpace: valueSelect,
        selectCoordinateSpaceDefault: valueSelect.length > 0 ? valueSelect[0] : _this.state.selectCoordinateSpaceDefault
      }); // final
      // this.setState({
      // 	selectCoordinateSpace: valueSelect,
      // 	selectCoordinateSpaceDefault: (valueSelect.length > 0) ?
      // 		valueSelect[0] : this.state.selectCoordinateSpaceDefault,
      // });

    };
    /** fill data for select */


    _this.componentDidMount = function () {
      _this.fillSelectPoint();
    };
    /** update state if value props change */


    _this.componentDidUpdate = function (prevProps) {
      if (prevProps.options.arrayPoints !== _this.props.options.arrayPoints) {
        // this.componentDidMount();
        _this.fillSelectPoint();
      }
    };

    _this.state = {
      selectCoordinateSpace: [],
      selectCoordinateSpaceDefault: []
    };
    return _this;
  }
  /** return html */


  EditPoint.prototype.render = function () {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      style: {
        display: 'flex'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
      width: 15
    }, "Select point to edit")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      onChange: function onChange(value) {
        return _this.onChangeSelectCoordinate(value);
      },
      allowCustomValue: false,
      options: this.state.selectCoordinateSpace,
      width: 10,
      value: this.state.selectCoordinateSpaceDefault
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      style: {
        marginTop: '2px',
        marginLeft: '20px'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: this.fillSelectPoint
    }, "Update list Point")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.selectCoordinateSpaceDefault.value ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_point__WEBPACK_IMPORTED_MODULE_3__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      point: this.state.selectCoordinateSpaceDefault.value,
      callBackToParent: this.callBack,
      isAddPoint: false
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Data not set")));
  };

  return EditPoint;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (EditPoint);

/***/ }),

/***/ "./components/CoordinateSpace/point/point.tsx":
/*!****************************************************!*\
  !*** ./components/CoordinateSpace/point/point.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Functions_CreateInput_createInputsPoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Functions/CreateInput/createInputsPoint */ "./Functions/CreateInput/createInputsPoint.tsx");
/* harmony import */ var _Functions_Input_inputTextPoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Functions/Input/inputTextPoint */ "./Functions/Input/inputTextPoint.tsx");
/* harmony import */ var _Models_ArrayInputSelectableClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Models/ArrayInputSelectableClass */ "./Models/ArrayInputSelectableClass.tsx");
/* harmony import */ var _Functions_EditParameter_editGoodParameterPoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Functions/EditParameter/editGoodParameterPoint */ "./Functions/EditParameter/editGoodParameterPoint.tsx");
/* harmony import */ var _Functions_Input_inputSelectPoint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Functions/Input/inputSelectPoint */ "./Functions/Input/inputSelectPoint.tsx");
/* harmony import */ var _Functions_Input_inputSeriesColorPickerPoint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Functions/Input/inputSeriesColorPickerPoint */ "./Functions/Input/inputSeriesColorPickerPoint.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _manageQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../manageQuery */ "./components/CoordinateSpace/manageQuery.tsx");
/* harmony import */ var _manageAuxiliaryQuery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../manageAuxiliaryQuery */ "./components/CoordinateSpace/manageAuxiliaryQuery.tsx");
/* harmony import */ var _Parametrage_positionParameters__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Parametrage/positionParameters */ "./components/Parametrage/positionParameters.tsx");
/* harmony import */ var _Parametrage_parametresGeneriques__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Parametrage/parametresGeneriques */ "./components/Parametrage/parametresGeneriques.tsx");
/* harmony import */ var _Parametrage_manageLowerLimit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Parametrage/manageLowerLimit */ "./components/Parametrage/manageLowerLimit.tsx");
/* harmony import */ var Functions_initPoint__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! Functions/initPoint */ "./Functions/initPoint.tsx");















/**
 * IndexParametrage
 */

var Point =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Point, _super);

  function Point(props) {
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
    /** add inputs for a new coordiante */


    _this.addInput = function (id) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.setStateAsyncArrayInput({
                arrayInput: this.state.arrayInput.concat([new _Models_ArrayInputSelectableClass__WEBPACK_IMPORTED_MODULE_4__["ArrayInputSelectableClass"](id, Object(_Functions_CreateInput_createInputsPoint__WEBPACK_IMPORTED_MODULE_2__["createInputsPoint"])(id))])
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
      var label = _this.state.arrayCoor.label || _this.state.arrayCoor.name;
      var del = confirm('Delete "' + label + '" ?'); // alert(del);

      if (del) {
        _this.props.callBackToParent(_this.state.arrayCoor.id, undefined);
      }
    };
    /** call function to return arrayCoor a SimpleEditor */


    _this.callBack = function () {
      var waitAlert = 3000;

      _this.props.callBackToParent(_this.state.arrayCoor.id, _this.state.arrayCoor);

      _this.setState({
        severityAlert: 'success',
        titleAlert: 'Save',
        hiddenAlert: false
      });

      if (!_this.props.isAddPoint) {
        setTimeout(function () {
          _this.setState({
            hiddenAlert: true
          });
        }, waitAlert);
      }
    };

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
    /** update lower limit */


    _this.callBackManageLowerLimit = function (coordinate, id) {
      var newValue = _this.state.arrayCoor;
      newValue.colorMode = coordinate.colorMode;
      newValue.traceBorder = coordinate.traceBorder;
      newValue.traceBack = coordinate.traceBack;

      _this.setState({
        arrayCoor: newValue
      });
    };

    _this.callBackPositionParameter = function (positionParameter, id) {
      var newValue = _this.state.arrayCoor;
      newValue.positionParameter = positionParameter;

      _this.setState({
        arrayCoor: newValue
      });
    };
    /** save lower limit data */


    _this.callBackLowerLimit = function (lowerLimit, id) {
      var newValue = _this.state.arrayCoor;
      newValue.lowerLimit = lowerLimit;

      _this.setState({
        arrayCoor: newValue
      });
    };

    _this.callBackMainMetric = function (mainMetric, id) {
      var newValue = _this.state.arrayCoor;
      newValue.mainMetric = mainMetric;

      _this.setState({
        arrayCoor: newValue
      });
    };

    _this.callBackAuxiliaryMetric = function (auxiliaryMetrics, id) {
      var newValue = _this.state.arrayCoor;
      newValue.metrics = auxiliaryMetrics;

      _this.setState({
        arrayCoor: newValue
      });
    };
    /**
     * fill input whith data
     * this function is called by mount and update event
     */


    _this.getDataInInput = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.addInput(this.props.point.id)];

            case 1:
              _a.sent();

              this.generateInputsPoint();
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** call function in load component */


    _this.componentDidMount = function () {
      _this.getDataInInput();
    };
    /** function is call when props is update. Update state */


    _this.componentDidUpdate = function (prevProps, prevState) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!(prevProps.point.id !== this.props.point.id)) return [3
              /*break*/
              , 3];
              return [4
              /*yield*/
              , this.setStateAsyncArrayCoor({
                arrayCoor: Object(Functions_initPoint__WEBPACK_IMPORTED_MODULE_14__["clonePoint"])(this.props.point)
              })];

            case 1:
              _a.sent();

              return [4
              /*yield*/
              , this.setStateAsyncArrayInput({
                arrayInput: []
              })];

            case 2:
              _a.sent();

              this.getDataInInput();
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
      arrayInput: [],
      arrayCoor: Object(Functions_initPoint__WEBPACK_IMPORTED_MODULE_14__["clonePoint"])(_this.props.point),
      arrayPointClass: [],
      debug: false,
      htmlInput: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null),
      hiddenAlert: true,
      titleAlert: 'Error: label is empty',
      severityAlert: 'error'
    };
    return _this;
  }
  /**
   * Use function if value input change
   * @param {string} currentTarget new value of input
   * @param {string} name name of input
   * @param {number} index id of input
   */


  Point.prototype._handleChange = function (currentTarget, name, index) {
    var tmp = this.state.arrayCoor;
    tmp = Object(_Functions_EditParameter_editGoodParameterPoint__WEBPACK_IMPORTED_MODULE_5__["editGoodParameterPoint"])(name, tmp, currentTarget, {});
    this.setState({
      arrayCoor: tmp
    });
    this.generateInputsPoint();
  };
  /**
   * Get value of input with state.arrayPointClass
   * @param {number} id id of element
   * @param {string} param name of input
   * @returns {string} value of the array element
   */


  Point.prototype.getGoodValue = function (id, param) {
    var value;
    var valueSelect;
    value = '';
    valueSelect = {};

    if (param.startsWith('drawGraphicMarker') || param.startsWith('shape') || param.startsWith('sizeWidth') || param.startsWith('sizeHeight') || param.startsWith('linkWithCoordinateSpace')) {
      if (param.startsWith('drawGraphicMarker')) {
        valueSelect = this.state.arrayCoor.drawGraphicMarker;
      } else if (param.startsWith('shape')) {
        valueSelect = this.state.arrayCoor.shape;
      } else if (param.startsWith('sizeWidth')) {
        valueSelect = this.state.arrayCoor.sizeWidth;
      } else if (param.startsWith('sizeHeight')) {
        valueSelect = this.state.arrayCoor.sizeHeight;
      }

      return valueSelect;
    } else {
      if (param.startsWith('rotateArrow')) {
        value = this.state.arrayCoor.rotateArrow;
      } else if (param.startsWith('positionShapeX')) {
        value = this.state.arrayCoor.positionShapeX;
      } else if (param.startsWith('positionShapeY')) {
        value = this.state.arrayCoor.positionShapeY;
      } else if (param.startsWith('label')) {
        value = this.state.arrayCoor.label;
      } else if (param.startsWith('color')) {
        value = this.state.arrayCoor.color;
      } else if (param.startsWith('refIdMainMetric')) {
        value = this.state.arrayCoor.mainMetric.refId || '';
      } else if (param.startsWith('keyMainMetric')) {
        value = this.state.arrayCoor.mainMetric.key || '';
      } else if (param.startsWith('keyValueMainMetric')) {
        value = this.state.arrayCoor.mainMetric.keyValue || '';
      }

      return value;
    }
  };
  /** create dynamic input */


  Point.prototype.generateInputsPoint = function () {
    var e_1, _a;

    var _this = this;

    var arrayInput = this.state.arrayInput;
    var item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null); //let itemButton: JSX.Element = <div></div>;

    var mapItems = [];
    var finalItem = [];

    var _loop_1 = function _loop_1(line) {
      mapItems = [];
      line.uneClassInput.forEach(function (obj) {
        if (obj.input_type === 'text') {
          item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Functions_Input_inputTextPoint__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
          item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Functions_Input_inputSelectPoint__WEBPACK_IMPORTED_MODULE_6__["default"], {
            key: obj.id,
            _onChange: function _onChange(value, name, index) {
              var e_2, _a;

              var i;
              i = 0;

              var copyOfarrayPointClass = _this.state.arrayPointClass.slice();

              try {
                for (var copyOfarrayPointClass_1 = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(copyOfarrayPointClass)), copyOfarrayPointClass_1_1 = copyOfarrayPointClass_1.next(); !copyOfarrayPointClass_1_1.done; copyOfarrayPointClass_1_1 = copyOfarrayPointClass_1.next()) {
                  var line_1 = copyOfarrayPointClass_1_1.value;

                  if (line_1.id === index) {
                    copyOfarrayPointClass[i] = Object(_Functions_EditParameter_editGoodParameterPoint__WEBPACK_IMPORTED_MODULE_5__["editGoodParameterPoint"])(name, copyOfarrayPointClass[i], value.value || '', value || {});
                    break;
                  }

                  i++;
                }
              } catch (e_2_1) {
                e_2 = {
                  error: e_2_1
                };
              } finally {
                try {
                  if (copyOfarrayPointClass_1_1 && !copyOfarrayPointClass_1_1.done && (_a = copyOfarrayPointClass_1["return"])) _a.call(copyOfarrayPointClass_1);
                } finally {
                  if (e_2) throw e_2.error;
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
          item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Functions_Input_inputSeriesColorPickerPoint__WEBPACK_IMPORTED_MODULE_7__["default"], {
            key: obj.id,
            keyInt: parseInt(obj.id, 10),
            color: _this.getGoodValue(line.id, 'color'),
            text: obj.label,
            width: 10,
            _onChange: function _onChange(keyInt, newColor) {
              var e_3, _a;

              var i;
              i = 0;

              var copyOfarrayPointClass = _this.state.arrayPointClass.slice();

              try {
                for (var copyOfarrayPointClass_2 = (e_3 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(copyOfarrayPointClass)), copyOfarrayPointClass_2_1 = copyOfarrayPointClass_2.next(); !copyOfarrayPointClass_2_1.done; copyOfarrayPointClass_2_1 = copyOfarrayPointClass_2.next()) {
                  var line_2 = copyOfarrayPointClass_2_1.value;

                  if (line_2.id === keyInt) {
                    copyOfarrayPointClass[i] = Object(_Functions_EditParameter_editGoodParameterPoint__WEBPACK_IMPORTED_MODULE_5__["editGoodParameterPoint"])(obj.name, copyOfarrayPointClass[i], newColor, {});
                    break;
                  }

                  i++;
                }
              } catch (e_3_1) {
                e_3 = {
                  error: e_3_1
                };
              } finally {
                try {
                  if (copyOfarrayPointClass_2_1 && !copyOfarrayPointClass_2_1.done && (_a = copyOfarrayPointClass_2["return"])) _a.call(copyOfarrayPointClass_2);
                } finally {
                  if (e_3) throw e_3.error;
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
          //   itemButton = (
          //     <InputButtonField
          //       key={obj.id}
          //       label={obj.label}
          //       value={obj.value || ''}
          //       name={obj.name}
          //       required={obj.required}
          //       _handleChange={this.deleteOwnInput}
          //       id={obj.id}
          //       withLabel={false}
          //     />
          //   );
          item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
        }

        mapItems.push(item);
      });
      var newInputList = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: 'inputPoint' + line.id.toString(),
        className: "inputCoor",
        id: 'point' + line.id.toString()
      }, mapItems);
      finalItem = finalItem.concat(newInputList);
    };

    try {
      for (var arrayInput_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arrayInput), arrayInput_1_1 = arrayInput_1.next(); !arrayInput_1_1.done; arrayInput_1_1 = arrayInput_1.next()) {
        var line = arrayInput_1_1.value;

        _loop_1(line);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (arrayInput_1_1 && !arrayInput_1_1.done && (_a = arrayInput_1["return"])) _a.call(arrayInput_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    this.setState(function (prevState) {
      return {
        htmlInput: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, finalItem)
      };
    });
  };
  /**
   * render()
   */


  Point.prototype.render = function () {
    // const styleMainDiv = {
    //   display: 'flex',
    //   flexDirection: 'row',
    //   justifyContent: 'center',
    // } as React.CSSProperties;
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_manageQuery__WEBPACK_IMPORTED_MODULE_9__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      idCoordinate: this.state.arrayCoor.id,
      mainMetric: this.state.arrayCoor.mainMetric,
      callBackToParent: this.callBackMainMetric,
      isLink: false
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_manageAuxiliaryQuery__WEBPACK_IMPORTED_MODULE_10__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      idCoordinate: this.state.arrayCoor.id,
      metrics: this.state.arrayCoor.metrics,
      callBackToParent: this.callBackAuxiliaryMetric,
      id: this.state.arrayCoor.id,
      coordinateSpace: this.state.arrayCoor,
      isLink: false
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Parametrage_parametresGeneriques__WEBPACK_IMPORTED_MODULE_12__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      coordinateSpace: this.state.arrayCoor,
      callBackToParent: this.callBackToOther
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Parametrage_manageLowerLimit__WEBPACK_IMPORTED_MODULE_13__["default"], {
      coordinate: this.state.arrayCoor,
      callBack: this.callBackManageLowerLimit,
      lowerLimitCallBack: this.callBackLowerLimit
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Parametrage_positionParameters__WEBPACK_IMPORTED_MODULE_11__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data,
      coordinateSpace: this.state.arrayCoor,
      callBackToParent: this.callBackPositionParameter,
      callBackToParentZIndex: function callBackToParentZIndex() {},
      isPoint: true,
      isLink: false,
      isRegion: false,
      id: this.state.arrayCoor.id
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.htmlInput), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        textAlign: 'center'
      },
      className: "buttonSave"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      style: {
        marginRight: '1%'
      },
      onClick: function onClick() {
        return _this.callBack();
      }
    }, "Save"), !this.props.isAddPoint && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      onClick: this.deleteOwnInput,
      variant: "danger"
    }, "Delete")));
  };

  return Point;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Point);

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
    var _this = _super.call(this, props) || this;

    _this.defineValueToAdaptPositionToInitialSpace = function (yMinPx, yMaxPx) {
      var valueToAdaptPositionToInitialSpace = 0;

      if (yMaxPx > yMinPx) {
        valueToAdaptPositionToInitialSpace = _this.props.heightImage - yMaxPx;
      } else {
        valueToAdaptPositionToInitialSpace = _this.props.heightImage - yMinPx;
      }

      return valueToAdaptPositionToInitialSpace;
    };

    _this.labelSynchroX = function () {
      var _a, _b;

      var result = 0;
      var labelMainMetric = document.getElementById('labelMainMetric' + _this.props.id);

      if ((_a = labelMainMetric) === null || _a === void 0 ? void 0 : _a.offsetWidth) {
        result = ((_b = labelMainMetric) === null || _b === void 0 ? void 0 : _b.offsetWidth) / 2;
      }

      return result;
    };

    _this.labelSynchroY = function () {
      var _a, _b;

      var result = 0;
      var labelMainMetric = document.getElementById('labelMainMetric' + _this.props.id);

      if ((_a = labelMainMetric) === null || _a === void 0 ? void 0 : _a.offsetHeight) {
        result = ((_b = labelMainMetric) === null || _b === void 0 ? void 0 : _b.offsetHeight) / 2;
      }

      return result;
    };
    /**
     * to do
     */


    _this.defineParallelOrientedLinks = function () {
      var arrayOrientedLink = _this.props.options.arrayOrientedLinks;
      var listParallelOrientedLinks = [];
      listParallelOrientedLinks.push(parseInt(_this.props.id, 10));
      arrayOrientedLink.forEach(function (orientedLink) {
        if (_this.props.name !== orientedLink.name) {
          if (_this.props.associateRegionIn !== '' && _this.props.associateRegionOut !== '') {
            if (_this.props.associateRegionIn === orientedLink.regionIn || _this.props.associateRegionIn === orientedLink.regionOut) {
              if (_this.props.associateRegionOut === orientedLink.regionIn || _this.props.associateRegionOut === orientedLink.regionOut) {
                listParallelOrientedLinks.push(orientedLink.id);
              }
            }
          } else if (_this.props.associatePointIn !== '' && _this.props.associatePointOut !== '') {
            if (_this.props.associatePointIn === orientedLink.pointIn || _this.props.associatePointIn === orientedLink.pointOut) {
              if (_this.props.associatePointOut === orientedLink.pointIn || _this.props.associatePointOut === orientedLink.pointOut) {
                listParallelOrientedLinks.push(orientedLink.id);
              }
            }
          } else if (_this.props.associateRegionIn !== '' && _this.props.associatePointOut !== '') {
            if (_this.props.associateRegionIn === orientedLink.regionIn || _this.props.associateRegionIn === orientedLink.pointOut || _this.props.associateRegionIn === orientedLink.regionOut) {
              if (_this.props.associatePointOut === orientedLink.regionIn || _this.props.associatePointOut === orientedLink.pointOut || _this.props.associatePointOut === orientedLink.pointIn) {
                listParallelOrientedLinks.push(orientedLink.id);
              }
            }
          } else if (_this.props.associatePointIn !== '' && _this.props.associateRegionOut !== '') {
            if (_this.props.associatePointIn === orientedLink.pointIn || _this.props.associatePointIn === orientedLink.regionOut || _this.props.associatePointIn === orientedLink.pointOut) {
              if (_this.props.associateRegionOut === orientedLink.pointIn || _this.props.associateRegionOut === orientedLink.regionOut || _this.props.associateRegionOut === orientedLink.regionIn) {
                listParallelOrientedLinks.push(orientedLink.id);
              }
            }
          }
        }
      });
      var listParallelOrientedLinkSorted = listParallelOrientedLinks.sort(function (a, b) {
        return a - b;
      });
      return listParallelOrientedLinkSorted;
    };

    _this.ifMultiLinkWithRegionDefineX = function (isIn, idMultiLink) {
      var xResult = 0;
      var arrayRegions = _this.props.options.regionCoordinateSpace;
      var arrayPoints = _this.props.options.arrayPoints;
      var xMinIn = 0;
      var xMaxIn = 0;
      var xMinOut = 0;
      var xMaxOut = 0;
      var yMinIn = 0;
      var yMaxIn = 0;
      var yMinOut = 0;
      var yMaxOut = 0;
      var xMidIn = 0;
      var xMidOut = 0;
      var yMidIn = 0;
      var yMidOut = 0;

      if (_this.props.associatePointIn !== '') {
        arrayPoints.forEach(function (point) {
          if (point.name === _this.props.associatePointIn) {
            xMinIn = parseInt(point.positionShapeX, 10);
            xMaxIn = parseInt(point.positionShapeX, 10);
            yMinIn = parseInt(point.positionShapeY, 10);
            yMaxIn = parseInt(point.positionShapeY, 10);
          }
        });
        arrayRegions.forEach(function (region) {
          if (region.label === _this.props.associateRegionOut) {
            xMinOut = parseInt(region.coords.xMin, 10);
            xMaxOut = parseInt(region.coords.xMax, 10);
            yMinOut = parseInt(region.coords.yMin, 10);
            yMaxOut = parseInt(region.coords.yMax, 10);
          }
        });
        xMidIn = xMinIn;
        xMidOut = (xMinOut + xMaxOut) / 2;
        yMidIn = yMinIn;
        yMidOut = (yMinOut + yMaxOut) / 2;
      } else if (_this.props.associatePointOut !== '') {
        arrayRegions.forEach(function (region) {
          if (region.label === _this.props.associateRegionIn) {
            xMinIn = parseInt(region.coords.xMin, 10);
            xMaxIn = parseInt(region.coords.xMax, 10);
            yMinIn = parseInt(region.coords.yMin, 10);
            yMaxIn = parseInt(region.coords.yMax, 10);
          }
        });
        arrayPoints.forEach(function (point) {
          if (point.name === _this.props.associatePointOut) {
            xMinOut = parseInt(point.positionShapeX, 10);
            xMaxOut = parseInt(point.positionShapeX, 10);
            yMinOut = parseInt(point.positionShapeY, 10);
            yMaxOut = parseInt(point.positionShapeY, 10);
          }
        });
        xMidIn = (xMinIn + xMaxIn) / 2;
        xMidOut = xMinOut;
        yMidIn = (yMinIn + yMaxIn) / 2;
        yMidOut = yMinOut;
      } else if (_this.props.associatePointIn === '' && _this.props.associateRegionIn === '') {
        arrayRegions.forEach(function (region) {
          if (region.label === _this.props.associateRegionOut) {
            xMinOut = parseInt(region.coords.xMin, 10);
            xMaxOut = parseInt(region.coords.xMax, 10);
            yMinOut = parseInt(region.coords.yMin, 10);
            yMaxOut = parseInt(region.coords.yMax, 10);
          }
        });
        xMinIn = parseInt(_this.props.pointAPositionX, 10);
        xMaxIn = parseInt(_this.props.pointAPositionX, 10);
        yMinIn = parseInt(_this.props.pointAPositionY, 10);
        yMaxIn = parseInt(_this.props.pointAPositionY, 10);
        xMidIn = xMinIn;
        xMidOut = (xMinOut + xMaxOut) / 2;
        yMidIn = yMinIn;
        yMidOut = (yMinOut + yMaxOut) / 2;
      } else if (_this.props.associatePointOut === '' && _this.props.associateRegionOut === '') {
        arrayRegions.forEach(function (region) {
          if (region.label === _this.props.associateRegionIn) {
            xMinIn = parseInt(region.coords.xMin, 10);
            xMaxIn = parseInt(region.coords.xMax, 10);
            yMinIn = parseInt(region.coords.yMin, 10);
            yMaxIn = parseInt(region.coords.yMax, 10);
          }
        });
        xMinOut = parseInt(_this.props.pointBPositionX, 10);
        xMaxOut = parseInt(_this.props.pointBPositionX, 10);
        yMinOut = parseInt(_this.props.pointBPositionY, 10);
        yMaxOut = parseInt(_this.props.pointBPositionY, 10);
        xMidIn = (xMinIn + xMaxIn) / 2;
        xMidOut = xMinOut;
        yMidIn = (yMinIn + yMaxIn) / 2;
        yMidOut = yMinOut;
      } else {
        arrayRegions.forEach(function (region) {
          if (region.label === _this.props.associateRegionIn) {
            xMinIn = parseInt(region.coords.xMin, 10);
            xMaxIn = parseInt(region.coords.xMax, 10);
            yMinIn = parseInt(region.coords.yMin, 10);
            yMaxIn = parseInt(region.coords.yMax, 10);
          }

          if (region.label === _this.props.associateRegionOut) {
            xMinOut = parseInt(region.coords.xMin, 10);
            xMaxOut = parseInt(region.coords.xMax, 10);
            yMinOut = parseInt(region.coords.yMin, 10);
            yMaxOut = parseInt(region.coords.yMax, 10);
          }
        });
        xMidIn = (xMinIn + xMaxIn) / 2;
        xMidOut = (xMinOut + xMaxOut) / 2;
        yMidIn = (yMinIn + yMaxIn) / 2;
        yMidOut = (yMinOut + yMaxOut) / 2;
      }

      if (isIn) {
        if (idMultiLink === 0) {
          if (yMidIn > yMidOut) {
            if (xMidIn > xMidOut) {
              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMaxIn;
              } else {
                xResult = xMinIn;
              }
            } else if (xMidIn < xMidOut) {
              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMinIn;
              } else {
                xResult = xMaxIn;
              }
            } else if (xMidIn === xMidOut) {
              xResult = xMinIn;
            }
          } else if (yMidIn < yMidOut) {
            if (xMidIn > xMidOut) {
              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMinIn;
              } else {
                xResult = xMaxIn;
              }
            } else if (xMidIn < xMidOut) {
              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMaxIn;
              } else {
                xResult = xMinIn;
              }
            } else if (xMidIn === xMidOut) {
              xResult = xMinIn;
            }
          } else if (yMidIn === yMidOut) {
            if (xMidIn > xMidOut) {
              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMaxIn;
              } else {
                xResult = xMinIn;
              }
            } else if (xMidIn < xMidOut) {
              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMinIn;
              } else {
                xResult = xMaxIn;
              }
            } else if (xMidIn === xMidOut) {
              xResult = xMinIn;
            }
          }
        } else if (idMultiLink === 1) {
          if (yMidIn > yMidOut) {
            if (xMidIn > xMidOut) {
              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMinIn;
              } else {
                xResult = xMaxIn;
              }
            } else if (xMidIn < xMidOut) {
              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMaxIn;
              } else {
                xResult = xMinIn;
              }
            } else if (xMidIn === xMidOut) {
              xResult = xMaxIn;
            }
          } else if (yMidIn < yMidOut) {
            if (xMidIn > xMidOut) {
              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMaxIn;
              } else {
                xResult = xMinIn;
              }
            } else if (xMidIn < xMidOut) {
              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMinIn;
              } else {
                xResult = xMaxIn;
              }
            } else if (xMidIn === xMidOut) {
              xResult = xMaxIn;
            }
          } else if (yMidIn === yMidOut) {
            if (xMidIn > xMidOut) {
              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMaxIn;
              } else {
                xResult = xMinIn;
              }
            } else if (xMidIn < xMidOut) {
              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMinIn;
              } else {
                xResult = xMaxIn;
              }
            } else if (xMidIn === xMidOut) {
              xResult = xMinIn;
            }
          }
        } else if (idMultiLink === 2) {
          if (yMidIn > yMidOut) {
            if (xMidIn > xMidOut) {
              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMaxIn;
              } else {
                xResult = xMinIn;
              }
            } else if (xMidIn < xMidOut) {
              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMinIn;
              } else {
                xResult = xMaxIn;
              }
            } else if (xMidIn === xMidOut) {
              xResult = (xMinIn + xMaxIn) / 2;
            }
          } else if (yMidIn < yMidOut) {
            if (xMidIn > xMidOut) {
              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMaxIn;
              } else {
                xResult = xMinIn;
              }
            } else if (xMidIn < xMidOut) {
              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMinIn;
              } else {
                xResult = xMaxIn;
              }
            } else if (xMidIn === xMidOut) {
              xResult = (xMinIn + xMaxIn) / 2;
            }
          } else if (yMidIn === yMidOut) {
            if (xMidIn > xMidOut) {
              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMaxIn;
              } else {
                xResult = xMinIn;
              }
            } else if (xMidIn < xMidOut) {
              if (xMinIn < 0 && xMaxIn < 0) {
                xResult = xMinIn;
              } else {
                xResult = xMaxIn;
              }
            } else if (xMidIn === xMidOut) {
              xResult = xMinIn;
            }
          }
        }
      } else {
        if (idMultiLink === 0) {
          if (yMidIn > yMidOut) {
            if (xMidIn > xMidOut) {
              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMaxOut;
              } else {
                xResult = xMinOut;
              }
            } else if (xMidIn < xMidOut) {
              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMinOut;
              } else {
                xResult = xMaxOut;
              }
            } else if (xMidIn === xMidOut) {
              xResult = xMinOut;
            }
          } else if (yMidIn < yMidOut) {
            if (xMidIn > xMidOut) {
              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMinOut;
              } else {
                xResult = xMaxOut;
              }
            } else if (xMidIn < xMidOut) {
              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMaxOut;
              } else {
                xResult = xMinOut;
              }
            } else if (xMidIn === xMidOut) {
              xResult = xMinOut;
            }
          } else if (yMidIn === yMidOut) {
            if (xMidIn > xMidOut) {
              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMinOut;
              } else {
                xResult = xMaxOut;
              }
            } else if (xMidIn < xMidOut) {
              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMaxOut;
              } else {
                xResult = xMinOut;
              }
            } else if (xMidIn === xMidOut) {
              xResult = xMinOut;
            }
          }
        } else if (idMultiLink === 1) {
          if (yMidIn > yMidOut) {
            if (xMidIn > xMidOut) {
              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMinOut;
              } else {
                xResult = xMaxOut;
              }
            } else if (xMidIn < xMidOut) {
              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMaxOut;
              } else {
                xResult = xMinOut;
              }
            } else if (xMidIn === xMidOut) {
              xResult = xMaxOut;
            }
          } else if (yMidIn < yMidOut) {
            if (xMidIn > xMidOut) {
              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMaxOut;
              } else {
                xResult = xMinOut;
              }
            } else if (xMidIn < xMidOut) {
              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMinOut;
              } else {
                xResult = xMaxOut;
              }
            } else if (xMidIn === xMidOut) {
              xResult = xMaxOut;
            }
          } else if (yMidIn === yMidOut) {
            if (xMidIn > xMidOut) {
              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMinOut;
              } else {
                xResult = xMaxOut;
              }
            } else if (xMidIn < xMidOut) {
              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMaxOut;
              } else {
                xResult = xMinOut;
              }
            } else if (xMidIn === xMidOut) {
              xResult = xMinOut;
            }
          }
        } else if (idMultiLink === 2) {
          if (yMidIn > yMidOut) {
            if (xMidIn > xMidOut) {
              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMinOut;
              } else {
                xResult = xMaxOut;
              }
            } else if (xMidIn < xMidOut) {
              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMaxOut;
              } else {
                xResult = xMinOut;
              }
            } else if (xMidIn === xMidOut) {
              xResult = (xMinOut + xMaxOut) / 2;
            }
          } else if (yMidIn < yMidOut) {
            if (xMidIn > xMidOut) {
              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMinOut;
              } else {
                xResult = xMaxOut;
              }
            } else if (xMidIn < xMidOut) {
              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMaxOut;
              } else {
                xResult = xMinOut;
              }
            } else if (xMidIn === xMidOut) {
              xResult = (xMinOut + xMaxOut) / 2;
            }
          } else if (yMidIn === yMidOut) {
            if (xMidIn > xMidOut) {
              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMinOut;
              } else {
                xResult = xMaxOut;
              }
            } else if (xMidIn < xMidOut) {
              if (xMinOut < 0 && xMaxOut < 0) {
                xResult = xMaxOut;
              } else {
                xResult = xMinOut;
              }
            } else if (xMidIn === xMidOut) {
              xResult = xMinOut;
            }
          }
        }
      }

      return xResult;
    };

    _this.ifMultiLinkWithRegionDefineY = function (isIn, idMultiLink) {
      var yResult = 0;
      var arrayPoints = _this.props.options.arrayPoints;
      var arrayRegions = _this.props.options.regionCoordinateSpace;
      var xMinIn = 0;
      var xMaxIn = 0;
      var xMinOut = 0;
      var xMaxOut = 0;
      var yMinIn = 0;
      var yMaxIn = 0;
      var yMinOut = 0;
      var yMaxOut = 0;
      var xMidIn = 0;
      var xMidOut = 0;
      var yMidIn = 0;
      var yMidOut = 0;

      if (_this.props.associatePointIn !== '') {
        arrayPoints.forEach(function (point) {
          if (point.name === _this.props.associatePointIn) {
            xMinIn = parseInt(point.positionShapeX, 10);
            xMaxIn = parseInt(point.positionShapeX, 10);
            yMinIn = parseInt(point.positionShapeY, 10);
            yMaxIn = parseInt(point.positionShapeY, 10);
          }
        });
        arrayRegions.forEach(function (region) {
          if (region.label === _this.props.associateRegionOut) {
            xMinOut = parseInt(region.coords.xMin, 10);
            xMaxOut = parseInt(region.coords.xMax, 10);
            yMinOut = parseInt(region.coords.yMin, 10);
            yMaxOut = parseInt(region.coords.yMax, 10);
          }
        });
        xMidIn = xMinIn;
        xMidOut = (xMinOut + xMaxOut) / 2;
        yMidIn = yMinIn;
        yMidOut = (yMinOut + yMaxOut) / 2;
      } else if (_this.props.associatePointOut !== '') {
        arrayRegions.forEach(function (region) {
          if (region.label === _this.props.associateRegionIn) {
            xMinIn = parseInt(region.coords.xMin, 10);
            xMaxIn = parseInt(region.coords.xMax, 10);
            yMinIn = parseInt(region.coords.yMin, 10);
            yMaxIn = parseInt(region.coords.yMax, 10);
          }
        });
        arrayPoints.forEach(function (point) {
          if (point.name === _this.props.associatePointOut) {
            xMinOut = parseInt(point.positionShapeX, 10);
            xMaxOut = parseInt(point.positionShapeX, 10);
            yMinOut = parseInt(point.positionShapeY, 10);
            yMaxOut = parseInt(point.positionShapeY, 10);
          }
        });
        xMidIn = (xMinIn + xMaxIn) / 2;
        xMidOut = xMinOut;
        yMidIn = (yMinIn + yMaxIn) / 2;
        yMidOut = yMinOut;
      } else if (_this.props.associatePointIn === '' && _this.props.associateRegionIn === '') {
        arrayRegions.forEach(function (region) {
          if (region.label === _this.props.associateRegionOut) {
            xMinOut = parseInt(region.coords.xMin, 10);
            xMaxOut = parseInt(region.coords.xMax, 10);
            yMinOut = parseInt(region.coords.yMin, 10);
            yMaxOut = parseInt(region.coords.yMax, 10);
          }
        });
        xMinIn = parseInt(_this.props.pointAPositionX, 10);
        xMaxIn = parseInt(_this.props.pointAPositionX, 10);
        yMinIn = parseInt(_this.props.pointAPositionY, 10);
        yMaxIn = parseInt(_this.props.pointAPositionY, 10);
        xMidIn = xMinIn;
        xMidOut = (xMinOut + xMaxOut) / 2;
        yMidIn = yMinIn;
        yMidOut = (yMinOut + yMaxOut) / 2;
      } else if (_this.props.associatePointOut === '' && _this.props.associateRegionOut === '') {
        arrayRegions.forEach(function (region) {
          if (region.label === _this.props.associateRegionIn) {
            xMinIn = parseInt(region.coords.xMin, 10);
            xMaxIn = parseInt(region.coords.xMax, 10);
            yMinIn = parseInt(region.coords.yMin, 10);
            yMaxIn = parseInt(region.coords.yMax, 10);
          }
        });
        xMinOut = parseInt(_this.props.pointBPositionX, 10);
        xMaxOut = parseInt(_this.props.pointBPositionX, 10);
        yMinOut = parseInt(_this.props.pointBPositionY, 10);
        yMaxOut = parseInt(_this.props.pointBPositionY, 10);
        xMidIn = (xMinIn + xMaxIn) / 2;
        xMidOut = xMinOut;
        yMidIn = (yMinIn + yMaxIn) / 2;
        yMidOut = yMinOut;
      } else {
        arrayRegions.forEach(function (region) {
          if (region.label === _this.props.associateRegionIn) {
            xMinIn = parseInt(region.coords.xMin, 10);
            xMaxIn = parseInt(region.coords.xMax, 10);
            yMinIn = parseInt(region.coords.yMin, 10);
            yMaxIn = parseInt(region.coords.yMax, 10);
          }

          if (region.label === _this.props.associateRegionOut) {
            xMinOut = parseInt(region.coords.xMin, 10);
            xMaxOut = parseInt(region.coords.xMax, 10);
            yMinOut = parseInt(region.coords.yMin, 10);
            yMaxOut = parseInt(region.coords.yMax, 10);
          }
        });
        xMidIn = (xMinIn + xMaxIn) / 2;
        xMidOut = (xMinOut + xMaxOut) / 2;
        yMidIn = (yMinIn + yMaxIn) / 2;
        yMidOut = (yMinOut + yMaxOut) / 2;
      }

      if (isIn) {
        if (idMultiLink === 0) {
          if (xMidIn > xMidOut) {
            if (yMidIn > yMidOut) {
              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinIn;
              } else {
                yResult = yMaxIn;
              }
            } else if (yMidIn < yMidOut) {
              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinIn;
              } else {
                yResult = yMaxIn;
              }
            } else if (yMidIn === yMidOut) {
              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinIn;
              } else {
                yResult = yMaxIn;
              }
            }
          } else if (xMidIn < xMidOut) {
            if (yMidIn > yMidOut) {
              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinIn;
              } else {
                yResult = yMaxIn;
              }
            } else if (yMidIn < yMidOut) {
              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinIn;
              } else {
                yResult = yMaxIn;
              }
            } else if (yMidIn === yMidOut) {
              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinIn;
              } else {
                yResult = yMaxIn;
              }
            }
          } else if (xMidIn === xMidOut) {
            if (yMidIn > yMidOut) {
              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMaxIn;
              } else {
                yResult = yMinIn;
              }
            } else if (yMidIn < yMidOut) {
              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinIn;
              } else {
                yResult = yMaxIn;
              }
            } else if (yMidIn === yMidOut) {
              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinIn;
              } else {
                yResult = yMaxIn;
              }
            }
          }
        } else if (idMultiLink === 1) {
          if (xMidIn > xMidOut) {
            if (yMidIn > yMidOut) {
              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMaxIn;
              } else {
                yResult = yMinIn;
              }
            } else if (yMidIn < yMidOut) {
              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMaxIn;
              } else {
                yResult = yMinIn;
              }
            } else if (yMidIn === yMidOut) {
              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMaxIn;
              } else {
                yResult = yMinIn;
              }
            }
          } else if (xMidIn < xMidOut) {
            if (yMidIn > yMidOut) {
              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMaxIn;
              } else {
                yResult = yMinIn;
              }
            } else if (yMidIn < yMidOut) {
              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMaxIn;
              } else {
                yResult = yMinIn;
              }
            } else if (yMidIn === yMidOut) {
              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMaxIn;
              } else {
                yResult = yMinIn;
              }
            }
          } else if (xMidIn === xMidOut) {
            if (yMidIn > yMidOut) {
              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMaxIn;
              } else {
                yResult = yMinIn;
              }
            } else if (yMidIn < yMidOut) {
              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinIn;
              } else {
                yResult = yMaxIn;
              }
            } else if (yMidIn === yMidOut) {
              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinIn;
              } else {
                yResult = yMaxIn;
              }
            }
          }
        } else if (idMultiLink === 2) {
          if (xMidIn > xMidOut) {
            if (yMidIn > yMidOut) {
              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMaxIn;
              } else {
                yResult = yMinIn;
              }
            } else if (yMidIn < yMidOut) {
              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinIn;
              } else {
                yResult = yMaxIn;
              }
            } else if (yMidIn === yMidOut) {
              yResult = (yMinIn + yMaxIn) / 2;
            }
          } else if (xMidIn < xMidOut) {
            if (yMidIn > yMidOut) {
              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMaxIn;
              } else {
                yResult = yMinIn;
              }
            } else if (yMidIn < yMidOut) {
              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinIn;
              } else {
                yResult = yMaxIn;
              }
            } else if (yMidIn === yMidOut) {
              yResult = (yMinIn + yMaxIn) / 2;
            }
          } else if (xMidIn === xMidOut) {
            if (yMidIn > yMidOut) {
              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMaxIn;
              } else {
                yResult = yMinIn;
              }
            } else if (yMidIn < yMidOut) {
              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinIn;
              } else {
                yResult = yMaxIn;
              }
            } else if (yMidIn === yMidOut) {
              if (yMinIn < 0 && yMaxIn < 0) {
                yResult = yMinIn;
              } else {
                yResult = yMaxIn;
              }
            }
          }
        }
      } else {
        if (idMultiLink === 0) {
          if (xMidIn > xMidOut) {
            if (yMidIn > yMidOut) {
              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMinOut;
              } else {
                yResult = yMaxOut;
              }
            } else if (yMidIn < yMidOut) {
              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMinOut;
              } else {
                yResult = yMaxOut;
              }
            } else if (yMidIn === yMidOut) {
              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMinOut;
              } else {
                yResult = yMaxOut;
              }
            }
          } else if (xMidIn < xMidOut) {
            if (yMidIn > yMidOut) {
              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMinOut;
              } else {
                yResult = yMaxOut;
              }
            } else if (yMidIn < yMidOut) {
              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMinOut;
              } else {
                yResult = yMaxOut;
              }
            } else if (yMidIn === yMidOut) {
              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMinOut;
              } else {
                yResult = yMaxOut;
              }
            }
          } else if (xMidIn === xMidOut) {
            if (yMidIn > yMidOut) {
              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMinOut;
              } else {
                yResult = yMaxOut;
              }
            } else if (yMidIn < yMidOut) {
              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMaxOut;
              } else {
                yResult = yMinOut;
              }
            } else if (yMidIn === yMidOut) {
              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMaxOut;
              } else {
                yResult = yMinOut;
              }
            }
          }
        } else if (idMultiLink === 1) {
          if (xMidIn > xMidOut) {
            if (yMidIn > yMidOut) {
              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMaxOut;
              } else {
                yResult = yMinOut;
              }
            } else if (yMidIn < yMidOut) {
              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMaxOut;
              } else {
                yResult = yMinOut;
              }
            } else if (yMidIn === yMidOut) {
              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMaxOut;
              } else {
                yResult = yMinOut;
              }
            }
          } else if (xMidIn < xMidOut) {
            if (yMidIn > yMidOut) {
              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMaxOut;
              } else {
                yResult = yMinOut;
              }
            } else if (yMidIn < yMidOut) {
              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMaxOut;
              } else {
                yResult = yMinOut;
              }
            } else if (yMidIn === yMidOut) {
              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMaxOut;
              } else {
                yResult = yMinOut;
              }
            }
          } else if (xMidIn === xMidOut) {
            if (yMidIn > yMidOut) {
              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMinOut;
              } else {
                yResult = yMaxOut;
              }
            } else if (yMidIn < yMidOut) {
              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMaxOut;
              } else {
                yResult = yMinOut;
              }
            } else if (yMidIn === yMidOut) {
              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMaxOut;
              } else {
                yResult = yMinOut;
              }
            }
          }
        } else if (idMultiLink === 2) {
          if (xMidIn > xMidOut) {
            if (yMidIn > yMidOut) {
              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMinOut;
              } else {
                yResult = yMaxOut;
              }
            } else if (yMidIn < yMidOut) {
              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMaxOut;
              } else {
                yResult = yMinOut;
              }
            } else if (yMidIn === yMidOut) {
              yResult = (yMinOut + yMaxOut) / 2;
            }
          } else if (xMidIn < xMidOut) {
            if (yMidIn > yMidOut) {
              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMinOut;
              } else {
                yResult = yMaxOut;
              }
            } else if (yMidIn < yMidOut) {
              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMaxOut;
              } else {
                yResult = yMinOut;
              }
            } else if (yMidIn === yMidOut) {
              yResult = (yMinOut + yMaxOut) / 2;
            }
          } else if (xMidIn === xMidOut) {
            if (yMidIn > yMidOut) {
              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMinOut;
              } else {
                yResult = yMaxOut;
              }
            } else if (yMidIn < yMidOut) {
              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMaxOut;
              } else {
                yResult = yMinOut;
              }
            } else if (yMidIn === yMidOut) {
              if (yMinOut < 0 && yMaxOut < 0) {
                yResult = yMaxOut;
              } else {
                yResult = yMinOut;
              }
            }
          }
        }
      }

      return yResult;
    };

    _this.ifMultiLinkWithPointDefineX = function (isIn, idMultiLink) {
      var xResult = 0;
      var arrayPoints = _this.props.options.arrayPoints;
      var xIn = 0;
      var yIn = 0;
      var xOut = 0;
      var yOut = 0;
      var ajustPosition = 5;
      arrayPoints.forEach(function (point) {
        if (point.name === _this.props.associatePointIn) {
          xIn = parseInt(point.positionShapeX, 10);
          yIn = parseInt(point.positionShapeY, 10);
        }

        if (point.name === _this.props.associatePointOut) {
          xOut = parseInt(point.positionShapeX, 10);
          yOut = parseInt(point.positionShapeY, 10);
        }
      });
      var angleRadian = Math.atan2(yIn - yOut, xIn - xOut);
      var angleDegre = angleRadian * 180 / Math.PI;

      if (isIn) {
        if (idMultiLink === 0) {
          if (angleDegre === 0 || angleDegre === 180 || angleDegre === -180) {
            xResult = xIn;
          } else if (angleDegre > 0 && angleDegre < 90) {
            xResult = xIn - ajustPosition * (angleDegre / 90);
          } else if (angleDegre === 90) {
            xResult = xIn + ajustPosition;
          } else if (angleDegre > 90 && angleDegre < 180) {
            xResult = xIn + ajustPosition * ((angleDegre - 180) / 90 * -1);
          } else if (angleDegre < 0 && angleDegre > -90) {
            xResult = xIn + ajustPosition * (angleDegre / 90 * -1);
          } else if (angleDegre === -90) {
            xResult = xIn + ajustPosition;
          } else if (angleDegre < -90 && angleDegre > -180) {
            xResult = xIn - ajustPosition * ((angleDegre + 180) / 90);
          }
        } else if (idMultiLink === 1) {
          if (angleDegre === 0 || angleDegre === 180 || angleDegre === -180) {
            xResult = xIn;
          } else if (angleDegre > 0 && angleDegre < 90) {
            xResult = xIn + ajustPosition * (angleDegre / 90);
          } else if (angleDegre === 90) {
            xResult = xIn - ajustPosition;
          } else if (angleDegre > 90 && angleDegre < 180) {
            xResult = xIn - ajustPosition * ((angleDegre - 180) / 90 * -1);
          } else if (angleDegre < 0 && angleDegre > -90) {
            xResult = xIn - ajustPosition * (angleDegre / 90 * -1);
          } else if (angleDegre === -90) {
            xResult = xIn - ajustPosition;
          } else if (angleDegre < -90 && angleDegre > -180) {
            xResult = xIn + ajustPosition * ((angleDegre + 180) / 90);
          }
        } else if (idMultiLink === 2) {
          xResult = xIn;
        }
      } else {
        if (idMultiLink === 0) {
          if (angleDegre === 0 || angleDegre === 180 || angleDegre === -180) {
            xResult = xOut;
          } else if (angleDegre > 0 && angleDegre < 90) {
            xResult = xOut - ajustPosition * (angleDegre / 90);
          } else if (angleDegre === 90) {
            xResult = xOut + ajustPosition;
          } else if (angleDegre > 90 && angleDegre < 180) {
            xResult = xOut + ajustPosition * ((angleDegre - 180) / 90 * -1);
          } else if (angleDegre < 0 && angleDegre > -90) {
            xResult = xOut + ajustPosition * (angleDegre / 90 * -1);
          } else if (angleDegre === -90) {
            xResult = xOut + ajustPosition;
          } else if (angleDegre < -90 && angleDegre > -180) {
            xResult = xOut - ajustPosition * ((angleDegre + 180) / 90);
          }
        } else if (idMultiLink === 1) {
          if (angleDegre === 0 || angleDegre === 180 || angleDegre === -180) {
            xResult = xOut;
          } else if (angleDegre > 0 && angleDegre < 90) {
            xResult = xOut + ajustPosition * (angleDegre / 90);
          } else if (angleDegre === 90) {
            xResult = xOut - ajustPosition;
          } else if (angleDegre > 90 && angleDegre < 180) {
            xResult = xOut - ajustPosition * ((angleDegre - 180) / 90 * -1);
          } else if (angleDegre < 0 && angleDegre > -90) {
            xResult = xOut - ajustPosition * (angleDegre / 90 * -1);
          } else if (angleDegre === -90) {
            xResult = xOut - ajustPosition;
          } else if (angleDegre < -90 && angleDegre > -180) {
            xResult = xOut + ajustPosition * ((angleDegre + 180) / 90);
          }
        } else if (idMultiLink === 2) {
          xResult = xOut;
        }
      }

      return xResult;
    };

    _this.ifMultiLinkWithPointDefineY = function (isIn, idMultiLink) {
      var yResult = 0;
      var arrayPoints = _this.props.options.arrayPoints;
      var xIn = 0;
      var yIn = 0;
      var xOut = 0;
      var yOut = 0;
      var ajustPosition = 5;
      arrayPoints.forEach(function (point) {
        if (point.name === _this.props.associatePointIn) {
          xIn = parseInt(point.positionShapeX, 10);
          yIn = parseInt(point.positionShapeY, 10);
        }

        if (point.name === _this.props.associatePointOut) {
          xOut = parseInt(point.positionShapeX, 10);
          yOut = parseInt(point.positionShapeY, 10);
        }
      });
      var angleRadian = Math.atan2(yIn - yOut, xIn - xOut);
      var angleDegre = angleRadian * 180 / Math.PI;

      if (isIn) {
        if (idMultiLink === 0) {
          if (angleDegre === 0) {
            yResult = yIn + ajustPosition;
          } else if (angleDegre > 0 && angleDegre < 90) {
            yResult = yIn + ajustPosition * ((angleDegre - 90) / 90 * -1);
          } else if (angleDegre === 90 || angleDegre === -90) {
            yResult = yIn;
          } else if (angleDegre > 90 && angleDegre < 180) {
            yResult = yIn + ajustPosition * ((angleDegre - 90) / 90);
          } else if (angleDegre < 0 && angleDegre > -90) {
            yResult = yIn + ajustPosition * ((angleDegre + 90) / 90);
          } else if (angleDegre < -90 && angleDegre > -180) {
            yResult = yIn + ajustPosition * ((angleDegre + 90) / 90 * -1);
          } else if (angleDegre === 180 || angleDegre === -180) {
            yResult = yIn + ajustPosition;
          }
        } else if (idMultiLink === 1) {
          if (angleDegre === 0) {
            yResult = yIn - ajustPosition;
          } else if (angleDegre > 0 && angleDegre < 90) {
            yResult = yIn - ajustPosition * ((angleDegre - 90) / 90 * -1);
          } else if (angleDegre === 90 || angleDegre === -90) {
            yResult = yIn;
          } else if (angleDegre > 90 && angleDegre < 180) {
            yResult = yIn - ajustPosition * ((angleDegre - 90) / 90);
          } else if (angleDegre < 0 && angleDegre > -90) {
            yResult = yIn - ajustPosition * ((angleDegre + 90) / 90);
          } else if (angleDegre < -90 && angleDegre > -180) {
            yResult = yIn - ajustPosition * ((angleDegre + 90) / 90 * -1);
          } else if (angleDegre === 180 || angleDegre === -180) {
            yResult = yIn - ajustPosition;
          }
        } else if (idMultiLink === 2) {
          yResult = yIn;
        }
      } else {
        if (idMultiLink === 0) {
          if (angleDegre === 0) {
            yResult = yOut + ajustPosition;
          } else if (angleDegre > 0 && angleDegre < 90) {
            yResult = yOut + ajustPosition * ((angleDegre - 90) / 90 * -1);
          } else if (angleDegre === 90 || angleDegre === -90) {
            yResult = yOut;
          } else if (angleDegre > 90 && angleDegre < 180) {
            yResult = yOut + ajustPosition * ((angleDegre - 90) / 90);
          } else if (angleDegre < 0 && angleDegre > -90) {
            yResult = yOut + ajustPosition * ((angleDegre + 90) / 90);
          } else if (angleDegre < -90 && angleDegre > -180) {
            yResult = yOut + ajustPosition * ((angleDegre + 90) / 90 * -1);
          } else if (angleDegre === 180 || angleDegre === -180) {
            yResult = yOut + ajustPosition;
          }
        } else if (idMultiLink === 1) {
          if (angleDegre === 0) {
            yResult = yOut - ajustPosition;
          } else if (angleDegre > 0 && angleDegre < 90) {
            yResult = yOut - ajustPosition * ((angleDegre - 90) / 90 * -1);
          } else if (angleDegre === 90 || angleDegre === -90) {
            yResult = yOut;
          } else if (angleDegre > 90 && angleDegre < 180) {
            yResult = yOut - ajustPosition * ((angleDegre - 90) / 90);
          } else if (angleDegre < 0 && angleDegre > -90) {
            yResult = yOut - ajustPosition * ((angleDegre + 90) / 90);
          } else if (angleDegre < -90 && angleDegre > -180) {
            yResult = yOut - ajustPosition * ((angleDegre + 90) / 90 * -1);
          } else if (angleDegre === 180 || angleDegre === -180) {
            yResult = yOut - ajustPosition;
          }
        } else if (idMultiLink === 2) {
          yResult = yOut;
        }
      }

      return yResult;
    };

    _this.defineValueTooptip = function (typeLink, link) {
      var contentTooltip = [];
      var valueMainMetricA = _this.props.valueMainMetricA;
      var valueMainMetricB = _this.props.valueMainMetricB;
      var refMainMetric = _this.props.refMainMetric;
      var styleMainTitle = {
        fontFamily: _this.props.police,
        fontSize: '11px',
        marginBottom: '0px',
        textAlign: 'center'
      };
      var styleTitle = {
        fontFamily: _this.props.police,
        fontSize: '10px',
        marginTop: '5px',
        marginBottom: '0px'
      };
      var styleTitle2 = {
        fontFamily: _this.props.police,
        fontSize: '10px',
        marginTop: '5px',
        marginLeft: '5px',
        marginBottom: '0px'
      };
      var styleContentMetrics = {
        fontFamily: _this.props.police,
        fontSize: '9px',
        marginLeft: '10px',
        marginBottom: '0px'
      };
      contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        key: 'contentTooltip1' + _this.props.name,
        style: styleMainTitle
      }, _this.props.label || _this.props.name.toUpperCase()));
      contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        key: 'contentTooltip2' + _this.props.name,
        style: styleTitle
      }, "Main Metric"));

      if (typeLink === 'bidirectional') {
        contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          key: 'contentTooltip3' + _this.props.name,
          style: styleTitle2
        }, '+ Link' + link + ' : '));
        contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          key: 'contentTooltip4' + _this.props.name,
          style: styleContentMetrics
        }, ' ', "- Reference : ", refMainMetric));
        contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          key: 'contentTooltip5' + _this.props.name,
          style: styleContentMetrics
        }, ' ', "- Value : ", valueMainMetricB));
      } else if (typeLink === 'monodirectional') {
        contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          key: 'contentTooltip6' + _this.props.name,
          style: styleContentMetrics
        }, ' ', "- Reference : ", refMainMetric));
        contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          key: 'contentTooltip7' + _this.props.name,
          style: styleContentMetrics
        }, ' ', "- Value : ", valueMainMetricA));
      }

      if (_this.props.auxiliaryMetrics.length > 0) {
        contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          key: 'contentTooltip8' + _this.props.name,
          style: styleTitle
        }, "Auxiliary Metric"));
        var index_1 = 1;

        _this.props.auxiliaryMetrics.forEach(function (metric) {
          contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            key: index_1.toString() + 'contentTooltip9' + _this.props.name,
            style: styleTitle2
          }, "+ Metric ", index_1));
          contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            key: index_1.toString() + 'contentTooltip10' + _this.props.name,
            style: styleContentMetrics
          }, "- Value : ", _this.props.valuesAuxiliaryMetrics[index_1 - 1]));
          contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            key: index_1.toString() + 'contentTooltip11' + _this.props.name,
            style: styleContentMetrics
          }, "- Key : ", metric.key));
          contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            key: index_1.toString() + 'contentTooltip12' + _this.props.name,
            style: styleContentMetrics
          }, "- KeyValue : ", metric.keyValue));
          contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            key: index_1.toString() + 'contentTooltip13' + _this.props.name,
            style: styleContentMetrics
          }, "- Type : ", metric.manageValue));
          index_1++;
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, contentTooltip);
    };

    _this.state = {};
    return _this;
  }

  DrawOrientedLink.prototype.synchroLinkX = function (positionX) {
    var initialSpace = this.props.options.coordinateSpaceInitial.coordinate;
    var xMin = parseInt(initialSpace.xMin, 10);
    var xMinPx = (xMin + 100) * (this.props.widthImage / 200);
    var xMax = parseInt(initialSpace.xMax, 10);
    var xMaxPx = (xMax + 100) * (this.props.widthImage / 200);
    var widthInitialSpace = xMaxPx - xMinPx;
    var x = xMinPx + (positionX * (widthInitialSpace / 200) + widthInitialSpace / 2);
    return x;
  };

  DrawOrientedLink.prototype.synchroLinkY = function (positionY) {
    var initialSpace = this.props.options.coordinateSpaceInitial.coordinate;
    var yMin = parseInt(initialSpace.yMin, 10);
    var yMinPx = (yMin + 100) * (this.props.heightImage / 200);
    var yMax = parseInt(initialSpace.yMax, 10);
    var yMaxPx = (yMax + 100) * (this.props.heightImage / 200);
    var heightInitialSpace = yMaxPx - yMinPx;
    var y = this.defineValueToAdaptPositionToInitialSpace(yMinPx, yMaxPx) + (heightInitialSpace / 2 - positionY * (heightInitialSpace / 200));
    return y;
  };
  /**
   * to do
   */


  DrawOrientedLink.prototype.drawLink = function (xA0, yA0, xB0, yB0, xCByClick0, yCByClick0, orientationLink) {
    var _this = this; //this.defineParallelOrientedLinks();


    var listParallelOrientedLinks = this.defineParallelOrientedLinks();
    var xA = 0;
    var yA = 0;
    var xB = 0;
    var yB = 0;
    var xCByClick = 0;
    var yCByClick = 0;

    if (listParallelOrientedLinks.length > 1) {
      var indexOrientedLink_1 = 0;
      listParallelOrientedLinks.forEach(function (index) {
        if (index === parseInt(_this.props.id, 10)) {
          if (indexOrientedLink_1 === 0) {
            if (_this.props.associatePointIn !== '' && _this.props.associatePointOut !== '') {
              xA = _this.synchroLinkX(_this.ifMultiLinkWithPointDefineX(true, 0));
              yA = _this.synchroLinkY(_this.ifMultiLinkWithPointDefineY(true, 0));
              xB = _this.synchroLinkX(_this.ifMultiLinkWithPointDefineX(false, 0));
              yB = _this.synchroLinkY(_this.ifMultiLinkWithPointDefineY(false, 0));
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            } else if (_this.props.associateRegionIn !== '' && _this.props.associateRegionOut !== '') {
              xA = _this.synchroLinkX(_this.ifMultiLinkWithRegionDefineX(true, 0));
              yA = _this.synchroLinkY(_this.ifMultiLinkWithRegionDefineY(true, 0));
              xB = _this.synchroLinkX(_this.ifMultiLinkWithRegionDefineX(false, 0));
              yB = _this.synchroLinkY(_this.ifMultiLinkWithRegionDefineY(false, 0));
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            } else if (_this.props.associatePointIn !== '' && _this.props.associateRegionOut !== '') {
              xA = xA0;
              yA = yA0;
              xB = _this.synchroLinkX(_this.ifMultiLinkWithRegionDefineX(false, 0));
              yB = _this.synchroLinkY(_this.ifMultiLinkWithRegionDefineY(false, 0));
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            } else if (_this.props.associateRegionIn !== '' && _this.props.associatePointOut !== '') {
              xA = _this.synchroLinkX(_this.ifMultiLinkWithRegionDefineX(true, 0));
              yA = _this.synchroLinkY(_this.ifMultiLinkWithRegionDefineY(true, 0));
              xB = xB0;
              yB = yB0;
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            }
          } else if (indexOrientedLink_1 === 1) {
            if (_this.props.associatePointIn !== '' && _this.props.associatePointOut !== '') {
              xA = _this.synchroLinkX(_this.ifMultiLinkWithPointDefineX(true, 1));
              yA = _this.synchroLinkY(_this.ifMultiLinkWithPointDefineY(true, 1));
              xB = _this.synchroLinkX(_this.ifMultiLinkWithPointDefineX(false, 1));
              yB = _this.synchroLinkY(_this.ifMultiLinkWithPointDefineY(false, 1));
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            } else if (_this.props.associateRegionIn !== '' && _this.props.associateRegionOut !== '') {
              xA = _this.synchroLinkX(_this.ifMultiLinkWithRegionDefineX(true, 1));
              yA = _this.synchroLinkY(_this.ifMultiLinkWithRegionDefineY(true, 1));
              xB = _this.synchroLinkX(_this.ifMultiLinkWithRegionDefineX(false, 1));
              yB = _this.synchroLinkY(_this.ifMultiLinkWithRegionDefineY(false, 1));
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            } else if (_this.props.associatePointIn !== '' && _this.props.associateRegionOut !== '') {
              xA = xA0;
              yA = yA0;
              xB = _this.synchroLinkX(_this.ifMultiLinkWithRegionDefineX(false, 1));
              yB = _this.synchroLinkY(_this.ifMultiLinkWithRegionDefineY(false, 1));
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            } else if (_this.props.associateRegionIn !== '' && _this.props.associatePointOut !== '') {
              xA = _this.synchroLinkX(_this.ifMultiLinkWithRegionDefineX(true, 1));
              yA = _this.synchroLinkY(_this.ifMultiLinkWithRegionDefineY(true, 1));
              xB = xB0;
              yB = yB0;
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            }
          } else if (indexOrientedLink_1 === 2) {
            if (_this.props.associatePointIn !== '' && _this.props.associatePointOut !== '') {
              xA = _this.synchroLinkX(_this.ifMultiLinkWithPointDefineX(true, 2));
              yA = _this.synchroLinkY(_this.ifMultiLinkWithPointDefineY(true, 2));
              xB = _this.synchroLinkX(_this.ifMultiLinkWithPointDefineX(false, 2));
              yB = _this.synchroLinkY(_this.ifMultiLinkWithPointDefineY(false, 2));
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            } else if (_this.props.associateRegionIn !== '' && _this.props.associateRegionOut !== '') {
              xA = _this.synchroLinkX(_this.ifMultiLinkWithRegionDefineX(true, 2));
              yA = _this.synchroLinkY(_this.ifMultiLinkWithRegionDefineY(true, 2));
              xB = _this.synchroLinkX(_this.ifMultiLinkWithRegionDefineX(false, 2));
              yB = _this.synchroLinkY(_this.ifMultiLinkWithRegionDefineY(false, 2));
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            } else if (_this.props.associatePointIn !== '' && _this.props.associateRegionOut !== '') {
              xA = xA0;
              yA = yA0;
              xB = _this.synchroLinkX(_this.ifMultiLinkWithRegionDefineX(false, 2));
              yB = _this.synchroLinkY(_this.ifMultiLinkWithRegionDefineY(false, 2));
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            } else if (_this.props.associateRegionIn !== '' && _this.props.associatePointOut !== '') {
              xA = _this.synchroLinkX(_this.ifMultiLinkWithRegionDefineX(true, 2));
              yA = _this.synchroLinkY(_this.ifMultiLinkWithRegionDefineY(true, 2));
              xB = xB0;
              yB = yB0;
              xCByClick = xCByClick0 || (xA + xB) / 2;
              yCByClick = yCByClick0 || (yA + yB) / 2;
            }
          }
        }

        indexOrientedLink_1++;
      });
    } else if (this.props.associateRegionIn !== '' && this.props.associateRegionOut !== '') {
      xA = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(true, 2));
      yA = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(true, 2));
      xB = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(false, 2));
      yB = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(false, 2));
      xCByClick = xCByClick0 || (xA + xB) / 2;
      yCByClick = yCByClick0 || (yA + yB) / 2;
    } else if (this.props.associateRegionOut !== '') {
      xA = xA0;
      yA = yA0;
      xB = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(false, 2));
      yB = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(false, 2));
      xCByClick = xCByClick0 || (xA + xB) / 2;
      yCByClick = yCByClick0 || (yA + yB) / 2;
    } else if (this.props.associateRegionIn !== '') {
      xA = this.synchroLinkX(this.ifMultiLinkWithRegionDefineX(true, 2));
      yA = this.synchroLinkY(this.ifMultiLinkWithRegionDefineY(true, 2));
      xB = xB0;
      yB = yB0;
      xCByClick = xCByClick0 || (xA + xB) / 2;
      yCByClick = yCByClick0 || (yA + yB) / 2;
    } else {
      xA = xA0;
      yA = yA0;
      xB = xB0;
      yB = yB0;
      xCByClick = xCByClick0;
      yCByClick = yCByClick0;
    }

    var xC = 0;
    var yC = 0;

    if (this.props.isIncurved.value) {
      xC = xCByClick;
      yC = yCByClick;
    } else {
      xC = (xA + xB) / 2;
      yC = (yA + yB) / 2;
    }

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
    var valueTooltipBidirectionalA = this.defineValueTooptip('bidirectional', 'A');
    var valueTooltipBidirectionalB = this.defineValueTooptip('bidirectional', 'B');
    var inverseAxeY = -1;

    if (orientationLink === 'double') {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "link"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
        content: valueTooltipBidirectionalA,
        placement: this.props.tooltipPositionA.value
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "linkA",
        style: {
          position: 'absolute',
          zIndex: this.props.zIndex,
          top: yArrowAC - sizeArrowTriangle / 2,
          left: xArrowAC,
          transform: 'rotate(' + angleDegreeAC.toString() + 'deg)',
          width: distanceAC
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "arrow1",
        style: {
          display: 'flex',
          alignContent: 'stretch'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "arrowTriangle",
        style: {
          width: '0',
          height: '0',
          borderLeft: sizeArrowTriangle.toString() + 'px solid transparent',
          borderRight: sizeArrowTriangle.toString() + 'px solid transparent',
          borderBottom: sizeArrowTriangle.toString() + 'px solid ' + this.defineBorderColor(),
          transform: 'rotate(270deg)'
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          border: '1px solid ' + this.defineBorderColor(),
          backgroundColor: this.defineBackgroundColor(),
          width: distanceAC
        }
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: 'labelMainMetric' + this.props.id,
        style: {
          position: 'absolute',
          zIndex: 9999,
          top: yMidAC + parseInt(this.props.labelAPositionY, 10) * inverseAxeY - this.labelSynchroY(),
          left: xMidAC + parseInt(this.props.labelAPositionX, 10) - this.labelSynchroX(),
          fontSize: '8px',
          //border: '1px solid black',
          backgroundColor: 'white',
          color: 'black',
          padding: '0 5px'
        }
      }, this.props.valueMainMetricA)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
        content: valueTooltipBidirectionalB,
        placement: this.props.tooltipPositionB.value
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "linkB",
        style: {
          position: 'absolute',
          zIndex: this.props.zIndex,
          top: yArrowBC - sizeArrowTriangle / 2,
          left: xArrowBC,
          transform: 'rotate(' + angleDegreeBC.toString() + 'deg)',
          width: distanceBC
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "arrow2",
        style: {
          display: 'flex',
          alignContent: 'stretch'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "arrowTriangle",
        style: {
          width: '0',
          height: '0',
          borderLeft: sizeArrowTriangle.toString() + 'px solid transparent',
          borderRight: sizeArrowTriangle.toString() + 'px solid transparent',
          borderBottom: sizeArrowTriangle.toString() + 'px solid ' + this.defineBorderColor(),
          transform: 'rotate(270deg)'
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          border: '1px solid ' + this.defineBorderColor(),
          backgroundColor: this.defineBackgroundColor(),
          width: distanceBC
        }
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: 'labelMainMetric' + this.props.id,
        style: {
          position: 'absolute',
          zIndex: 9999,
          top: yMidBC + parseInt(this.props.labelBPositionY, 10) * inverseAxeY - this.labelSynchroY(),
          left: xMidBC + parseInt(this.props.labelBPositionX, 10) - this.labelSynchroX(),
          fontSize: '8px',
          //border: '1px solid black',
          backgroundColor: 'white',
          color: 'black',
          padding: '0 5px'
        }
      }, this.props.valueMainMetricB)));
    } else if (orientationLink === 'AB') {
      if (this.props.isIncurved.value) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          content: valueTooltipMonodirectional,
          placement: this.props.tooltipPositionA.value
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          id: "partA",
          style: {
            position: 'absolute',
            zIndex: this.props.zIndex,
            top: yArrowAC - sizeArrowTriangle / 2,
            left: xArrowAC,
            transform: 'rotate(' + angleDegreeAC.toString() + 'deg)',
            width: distanceAC
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            padding: '3px',
            border: '1px solid ' + this.defineBorderColor(),
            backgroundColor: this.defineBackgroundColor(),
            width: distanceAC
          }
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          content: valueTooltipMonodirectional,
          placement: this.props.tooltipPositionA.value
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          id: "partB",
          style: {
            position: 'absolute',
            zIndex: this.props.zIndex,
            top: yArrowBC - sizeArrowTriangle / 2,
            left: xArrowBC,
            transform: 'rotate(' + angleDegreeBC.toString() + 'deg)',
            width: distanceBC
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          id: "arrow2",
          style: {
            display: 'flex'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            border: '1px solid ' + this.defineBorderColor(),
            backgroundColor: this.defineBackgroundColor(),
            width: distanceBC
          }
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "arrowTriangle",
          style: {
            width: '0',
            height: '0',
            borderLeft: sizeArrowTriangle.toString() + 'px solid transparent',
            borderRight: sizeArrowTriangle.toString() + 'px solid transparent',
            borderBottom: sizeArrowTriangle.toString() + 'px solid ' + this.defineBorderColor(),
            transform: 'rotate(90deg)'
          }
        })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          id: 'labelMainMetric' + this.props.id,
          style: {
            position: 'absolute',
            zIndex: 9999,
            top: yC + parseInt(this.props.labelAPositionY, 10) * inverseAxeY - this.labelSynchroY(),
            left: xC + parseInt(this.props.labelAPositionX, 10) - this.labelSynchroX(),
            backgroundColor: 'white',
            fontSize: '8px',
            color: 'black',
            padding: '0 5px',
            cursor: 'pointer'
          }
        }, this.props.valueMainMetricA));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          content: valueTooltipMonodirectional,
          placement: this.props.tooltipPositionA.value
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          id: "link",
          style: {
            position: 'absolute',
            zIndex: this.props.zIndex,
            top: yArrowAB - sizeArrowTriangle / 2,
            left: xArrowAB,
            transform: 'rotate(' + angleDegreeAB.toString() + 'deg)',
            width: distanceAB
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          id: "arrow1",
          style: {
            display: 'flex'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "arrowTriangle",
          style: {
            width: '0',
            height: '0',
            borderLeft: sizeArrowTriangle.toString() + 'px solid transparent',
            borderRight: sizeArrowTriangle.toString() + 'px solid transparent',
            borderBottom: sizeArrowTriangle.toString() + 'px solid ' + this.defineBorderColor(),
            transform: 'rotate(270deg)'
          }
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            border: '1px solid ' + this.defineBorderColor(),
            backgroundColor: this.defineBackgroundColor(),
            width: distanceAB
          }
        })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          id: 'labelMainMetric' + this.props.id,
          style: {
            position: 'absolute',
            zIndex: 9999,
            top: yMidAB + parseInt(this.props.labelAPositionY, 10) * inverseAxeY - this.labelSynchroY(),
            left: xMidAB + parseInt(this.props.labelAPositionX, 10) - this.labelSynchroX(),
            backgroundColor: 'white',
            fontSize: '8px',
            color: 'black',
            padding: '0 5px',
            cursor: 'pointer'
          }
        }, this.props.valueMainMetricA));
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

    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
    }
  };

  DrawOrientedLink.prototype.defineBackgroundColor = function () {
    var _this = this;

    var colorBackground = '';

    if (this.props.seuil.length > 0) {
      if (this.props.seuil[0].borderColor !== '') {
        colorBackground = this.props.seuil[0].borderColor;
      } else {
        colorBackground = 'black';
      }
    } else {
      colorBackground = 'black';
    }

    var valueMainMetric = parseInt(this.props.valueMainMetricA, 10);
    var index = 0;
    this.props.seuil.forEach(function (level) {
      var lowerLimitMin = 0;

      if (level.lowerLimitMin === '') {
        lowerLimitMin = 0;
      } else {
        lowerLimitMin = parseInt(level.lowerLimitMin.substring(1), 10);
      }

      if (lowerLimitMin === 0) {
        if (valueMainMetric >= lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
          colorBackground = level.backColor;
        }
      } else if (_this.props.seuil.length === index + 1) {
        if (valueMainMetric > lowerLimitMin) {
          colorBackground = level.backColor;
        }
      } else if (valueMainMetric > lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
        colorBackground = level.backColor;
      }

      index++;
    });
    return colorBackground;
  };

  DrawOrientedLink.prototype.defineBorderColor = function () {
    var _this = this;

    var colorBorder = '';

    if (this.props.seuil.length > 0) {
      if (this.props.seuil[0].borderColor !== '') {
        colorBorder = this.props.seuil[0].borderColor;
      } else {
        colorBorder = 'black';
      }
    } else {
      colorBorder = 'black';
    }

    var valueMainMetric = parseInt(this.props.valueMainMetricA, 10);
    var index = 0;
    this.props.seuil.forEach(function (level) {
      var lowerLimitMin = 0;

      if (level.lowerLimitMin === '') {
        lowerLimitMin = 0;
      } else {
        lowerLimitMin = parseInt(level.lowerLimitMin.substring(1), 10);
      }

      if (lowerLimitMin === 0) {
        if (valueMainMetric >= lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
          colorBorder = level.borderColor;
        }
      } else if (_this.props.seuil.length === index + 1) {
        if (valueMainMetric > lowerLimitMin) {
          colorBorder = level.borderColor;
        }
      } else if (valueMainMetric > lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
        colorBorder = level.borderColor;
      }

      index++;
    });
    return colorBorder;
  };

  DrawOrientedLink.prototype.defineBorderSize = function () {
    var sizeBorder = '';

    if (this.props.seuil.length > 0) {
      sizeBorder = this.props.seuil[0].sizeBorder;
    } else {
      sizeBorder = '1';
    } // const valueMainMetric: number = parseInt(this.props.valueMainMetric, 10);
    // let index: number = 0;
    // this.props.seuil.forEach((level: LowerLimitClass) => {
    // 	let lowerLimitMin: number = 0;
    // 	if (level.lowerLimitMin === '') {
    // 		lowerLimitMin = 0;
    // 	} else {
    // 		lowerLimitMin = parseInt(level.lowerLimitMin.substring(1), 10);
    // 	}
    // 	if (lowerLimitMin === 0) {
    // 		if (valueMainMetric >= lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
    // 			sizeBorder = level.sizeBorder;
    // 		}
    // 	} else if (this.props.seuil.length === index + 1) {
    // 		if (valueMainMetric > lowerLimitMin) {
    // 			sizeBorder = level.sizeBorder;
    // 		}
    // 	} else if (valueMainMetric > lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
    // 		sizeBorder = level.sizeBorder;
    // 	}
    // 	index++;
    // })


    return sizeBorder;
  };

  DrawOrientedLink.prototype.defineCoordinates = function (associateRegion, coordinate, region) {
    var result = 0;

    if (associateRegion.value === undefined || associateRegion.value.id === undefined) {
      result = coordinate;
    } else {
      result = region;
    }

    return result;
  };

  DrawOrientedLink.prototype.render = function () {
    var xCoordinateA = this.synchroLinkX(parseInt(this.props.pointAPositionX, 10));
    var yCoordinateA = this.synchroLinkY(parseInt(this.props.pointAPositionY, 10));
    var xCoordinateB = this.synchroLinkX(parseInt(this.props.pointBPositionX, 10));
    var yCoordinateB = this.synchroLinkY(parseInt(this.props.pointBPositionY, 10));
    var xCoordinateC = this.synchroLinkX(parseInt(this.props.pointCPositionX, 10));
    var yCoordinateC = this.synchroLinkY(parseInt(this.props.pointCPositionY, 10));
    var orientationLink = this.props.orientationLink; // rops.associatePointIn)
    // rops.associatePointOut)
    // rops.associateRegionIn)
    // rops.associateRegionOut)
    // const labelA: string = this.props.labelA;
    // const labelB: string = this.props.labelB;
    // const labelAPositionX: number = parseInt(this.props.labelAPositionX, 10);
    // const labelAPositionY: number = parseInt(this.props.labelAPositionY, 10) * (-1);
    // const labelBPositionX: number = parseInt(this.props.labelBPositionX, 10);
    // const labelBPositionY: number = parseInt(this.props.labelBPositionY, 10) * (-1);
    // const associatePointIn: SelectableValue<PointClass> = this.props.associatePointIn || {};
    // const associatePointOut: SelectableValue<PointClass> = this.props.associatePointOut || {};
    // const associateRegionIn: SelectableValue<RegionClass> = this.props.associateRegionIn || {};
    // const associateRegionOut: SelectableValue<RegionClass> = this.props.associateRegionOut || {};
    // const xMinAssociateRegionIn: number = parseInt(associateRegionIn.value?.coords.xMin || '0');
    // const xMaxAssociateRegionIn: number = parseInt(associateRegionIn.value?.coords.xMax || '0');
    // const xMinAssociateRegionOut: number = parseInt(associateRegionOut.value?.coords.xMin || '0');
    // const xMaxAssociateRegionOut: number = parseInt(associateRegionOut.value?.coords.xMax || '0');
    // const yMinAssociateRegionIn: number = parseInt(associateRegionIn.value?.coords.yMin || '0');
    // const yMaxAssociateRegionIn: number = parseInt(associateRegionIn.value?.coords.yMax || '0');
    // const yMinAssociateRegionOut: number = parseInt(associateRegionOut.value?.coords.yMin || '0');
    // const yMaxAssociateRegionOut: number = parseInt(associateRegionOut.value?.coords.yMax || '0');
    // const xRegionIn: number = this.synchroLinkX((xMaxAssociateRegionIn + xMinAssociateRegionIn) / 2, defineCenter);
    // const yRegionIn: number = this.synchroLinkY((yMaxAssociateRegionIn + yMinAssociateRegionIn) / 2, defineCenter);
    // const xRegionOut: number = this.synchroLinkX((xMaxAssociateRegionOut + xMinAssociateRegionOut) / 2, defineCenter);
    // const yRegionOut: number = this.synchroLinkY((yMaxAssociateRegionOut + yMinAssociateRegionOut) / 2, defineCenter);

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, // this.drawLink(
    // 	this.defineCoordinates(associateRegionIn, xCoordinateA, xRegionIn),
    // 	this.defineCoordinates(associateRegionIn, yCoordinateA, yRegionIn),
    // 	this.defineCoordinates(associateRegionOut, xCoordinateB, xRegionOut),
    // 	this.defineCoordinates(associateRegionOut, yCoordinateB, yRegionOut),
    // 	colorA, colorB, labelA, labelB, orientationLink, labelAPositionX,
    // 	labelAPositionY, labelBPositionX, labelBPositionY, valueMarginRegionIn)
    this.drawLink(xCoordinateA, yCoordinateA, xCoordinateB, yCoordinateB, xCoordinateC, yCoordinateC, orientationLink));
  };

  return DrawOrientedLink;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DrawOrientedLink);

/***/ }),

/***/ "./components/Draw/drawPoint.tsx":
/*!***************************************!*\
  !*** ./components/Draw/drawPoint.tsx ***!
  \***************************************/
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

var DrawPoint =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DrawPoint, _super);

  function DrawPoint(props) {
    var _this = _super.call(this, props) || this;

    _this.defineValueToAdaptPositionToInitialSpace = function (yMinPx, yMaxPx) {
      var valueToAdaptPositionToInitialSpace = 0;

      if (yMaxPx > yMinPx) {
        valueToAdaptPositionToInitialSpace = _this.props.heightImage - yMaxPx;
      } else {
        valueToAdaptPositionToInitialSpace = _this.props.heightImage - yMinPx;
      }

      return valueToAdaptPositionToInitialSpace;
    };

    _this.definePositionLabelX = function (coordinateX) {
      var positionLabel = parseInt(_this.props.labelPositionX, 10);
      var result = 0;

      if (_this.props.drawGraphicMarker.value === 'true') {
        result = coordinateX + positionLabel + 10;

        if (_this.props.size.value === 'large') {
          result = coordinateX + positionLabel + 18;
        } else if (_this.props.size.value === 'medium') {
          result = coordinateX + positionLabel + 14;
        }
      } else {
        result = coordinateX + positionLabel;
      }

      return result;
    };

    _this.definePositionLabelY = function (coordinateY) {
      var inverseAxeY = -1;
      var positionLabel = parseInt(_this.props.labelPositionY, 10) * inverseAxeY;
      var result = 0;

      if (_this.props.drawGraphicMarker.value === 'true') {
        result = coordinateY + positionLabel + 10;

        if (_this.props.size.value === 'large') {
          result = coordinateY + positionLabel + 18;
        } else if (_this.props.size.value === 'medium') {
          result = coordinateY + positionLabel + 14;
        }
      } else {
        result = coordinateY + positionLabel;
      }

      return result;
    };

    _this.state = {};
    return _this;
  }
  /**
   * to do
   * @param coordinateX
   *
   */


  DrawPoint.prototype.defineLimitX = function (coordinateX) {
    var result = coordinateX;

    if (coordinateX > 100) {
      result = 100;
    }

    if (coordinateX < -100) {
      result = -100;
    }

    return result;
  };
  /**
   * to do
   * @param coordinateY
   *
   */


  DrawPoint.prototype.defineLimitY = function (coordinateY) {
    var result = coordinateY;

    if (coordinateY > 100) {
      coordinateY = 100;
    }

    if (coordinateY < -100) {
      coordinateY = -100;
    }

    return result;
  };
  /**
   * to do
   * @param defineCenter
   * @param sizeGraphicMarkerPx
   * @param shapeGraphicMarker
   */


  DrawPoint.prototype.definePositionX = function (positionX, initialSpace, size, shape) {
    var x;
    var xMin = parseInt(initialSpace.xMin, 10);
    var xMinPx = (xMin + 100) * (this.props.widthImage / 200);
    var xMax = parseInt(initialSpace.xMax, 10);
    var xMaxPx = (xMax + 100) * (this.props.widthImage / 200);
    var widthInitialSpace = xMaxPx - xMinPx;

    if (shape === 'circle') {
      x = xMinPx + (this.defineLimitX(positionX) * (widthInitialSpace / 200) + widthInitialSpace / 2) - (size + parseInt(this.defineBorderSize(), 10));
    } else {
      var widthToCenterCross = 0;

      if (size === 10) {
        widthToCenterCross = 3;
      } else if (size === 14) {
        widthToCenterCross = 5;
      } else if (size === 16) {
        widthToCenterCross = 5.5;
      }

      x = xMinPx + (this.defineLimitX(positionX) * (widthInitialSpace / 200) + widthInitialSpace / 2) - widthToCenterCross;
    }

    return x;
  };
  /**
   * to do
   * @param defineCenter
   * @param sizeGraphicMarkerPx
   * @param shapeGraphicMarker
   */


  DrawPoint.prototype.definePositionY = function (positionY, initialSpace, size, shapeGraphicMarker) {
    var y;
    var yMin = parseInt(initialSpace.yMin, 10);
    var yMinPx = (yMin + 100) * (this.props.heightImage / 200);
    var yMax = parseInt(initialSpace.yMax, 10);
    var yMaxPx = (yMax + 100) * (this.props.heightImage / 200);
    var heightInitialSpace = yMaxPx - yMinPx;

    if (shapeGraphicMarker === 'circle') {
      y = this.defineValueToAdaptPositionToInitialSpace(yMinPx, yMaxPx) + (heightInitialSpace / 2 - this.defineLimitY(positionY) * (heightInitialSpace / 2 / 100) - (size + parseInt(this.defineBorderSize(), 10)));
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

      y = this.defineValueToAdaptPositionToInitialSpace(yMinPx, yMaxPx) + (heightInitialSpace / 2 - this.defineLimitY(positionY) * (heightInitialSpace / 2 / 100)) - heightToCenterCross;
    }

    return y;
  };
  /**
   * to do
   * @param sizeGraphicMarker
   * @param shapeGraphicMarker
   */


  DrawPoint.prototype.defineSizeGraphicMarkerPx = function (size, shape) {
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


  DrawPoint.prototype.drawPoint = function (drawGraphicMarker, size, positionShapeX, positionShapeY, shape, color) {
    var valueToolTip = this.defineContentTooltip('point');

    if (drawGraphicMarker === 'true') {
      if (shape === 'circle') {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          key: 'tooltip' + this.props.name,
          content: valueToolTip,
          placement: this.props.tooltipPosition.value
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            border: this.defineBorderSize() + 'px solid ' + this.defineBorderColor(),
            backgroundColor: this.defineBackgroundColor(),
            borderRadius: '50px',
            padding: size + 'px',
            position: 'absolute',
            zIndex: 1000,
            left: positionShapeX,
            top: positionShapeY
          },
          id: this.props.idPoint
        }));
      } else if (shape === 'cross') {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          key: 'tooltip' + this.props.name,
          content: valueToolTip,
          placement: this.props.tooltipPosition.value
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          id: this.props.idPoint,
          style: {
            fontSize: size,
            fontWeight: 'bold',
            position: 'absolute',
            zIndex: 1000,
            color: color,
            left: positionShapeX,
            top: positionShapeY
          }
        }, "X"));
      }
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
    }
  };

  DrawPoint.prototype.displayLabel = function (label, name, positionX, positionY, police) {
    var valueToDisplay = label;

    if (label === '') {
      valueToDisplay = name;
    }

    var valueToolTip = this.defineContentTooltip('label');
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      key: 'tooltipLabel' + this.props.name,
      content: valueToolTip,
      placement: this.props.tooltipPosition.value
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        fontSize: '12px',
        fontFamily: police,
        fontWeight: 'bold',
        color: this.props.textObject.colorText || 'black',
        position: 'absolute',
        top: this.definePositionLabelY(positionY),
        left: this.definePositionLabelX(positionX)
      }
    }, valueToDisplay));
  };

  DrawPoint.prototype.defineContentTooltip = function (localisation) {
    var _this = this;

    var arrayOrientedLinksIn = this.props.associateOrientedLinkIn;
    var arrayOrientedLinksOut = this.props.associateOrientedLinkOut;
    var valueMainMetric = this.props.valueMainMetric;
    var refMainMetric = this.props.refMainMetric;
    var contentTooltip = [];
    var styleMainTitle = {
      fontFamily: this.props.police,
      fontSize: '11px',
      marginBottom: '0px',
      textAlign: 'center'
    };
    var styleTitle = {
      fontFamily: this.props.police,
      fontSize: '10px',
      marginTop: '5px',
      marginBottom: '0px'
    };
    var styleTitle2 = {
      fontFamily: this.props.police,
      fontSize: '10px',
      marginTop: '5px',
      marginLeft: '5px',
      marginBottom: '0px'
    };
    var styleContent = {
      fontFamily: this.props.police,
      fontSize: '9px',
      marginLeft: '10px',
      marginBottom: '0px'
    };
    contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      key: localisation + 'ContentTooltip1' + this.props.name,
      style: styleMainTitle
    }, this.props.label || this.props.name.toUpperCase()));
    contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      key: localisation + 'ContentTooltip2' + this.props.name,
      style: styleTitle
    }, "Main Metric"));
    contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      key: localisation + 'ContentTooltip3' + this.props.name,
      style: styleContent
    }, "- Reference : ", refMainMetric));
    contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      key: localisation + 'ContentTooltip4' + this.props.name,
      style: styleContent
    }, "- Value : ", valueMainMetric + this.props.textObject.valueGenerateObjectText.unit));

    if (this.props.auxiliaryMetrics.length > 0) {
      contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        key: localisation + 'ContentTooltip5' + this.props.name,
        style: styleTitle
      }, "Auxiliary Metric"));
      var index_1 = 1;
      this.props.auxiliaryMetrics.forEach(function (metric) {
        contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          key: index_1.toString() + localisation + 'ContentTooltip6' + _this.props.name,
          style: styleTitle2
        }, "+ Metric ", index_1));
        contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          key: index_1.toString() + localisation + 'ContentTooltip7' + _this.props.name,
          style: styleContent
        }, "- Value : ", _this.props.valuesAuxiliaryMetrics[index_1 - 1]));
        contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          key: index_1.toString() + localisation + 'ContentTooltip8' + _this.props.name,
          style: styleContent
        }, "- Key : ", metric.key));
        contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          key: index_1.toString() + localisation + 'ContentTooltip9' + _this.props.name,
          style: styleContent
        }, "- KeyValue : ", metric.keyValue));
        contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          key: index_1.toString() + localisation + 'ContentTooltip10' + _this.props.name,
          style: styleContent
        }, "- Type : ", metric.manageValue));
        index_1++;
      });
    }

    if (arrayOrientedLinksIn.length !== 0) {
      contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        key: localisation + 'ContentTooltip11' + this.props.name,
        style: styleTitle2
      }, "Associate Link In :"));
      arrayOrientedLinksIn.forEach(function (orientedLinkIn) {
        var nameOrientedLink = orientedLinkIn.label || orientedLinkIn.name;
        contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          key: localisation + 'ContentTooltip12' + _this.props.name,
          style: styleContent
        }, "- ", nameOrientedLink));
      });
    }

    if (arrayOrientedLinksOut.length !== 0) {
      contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        key: localisation + 'ContentTooltip13' + this.props.name,
        style: styleTitle2
      }, "Associate Link Out :"));
      arrayOrientedLinksOut.forEach(function (orientedLinkOut) {
        var nameOrientedLink = orientedLinkOut.label || orientedLinkOut.name;
        contentTooltip.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          key: localisation + 'ContentTooltip14' + _this.props.name,
          style: styleContent
        }, "- ", nameOrientedLink));
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, contentTooltip);
  };

  DrawPoint.prototype.defineBackgroundColor = function () {
    var _this = this;

    var colorBackground = '';

    if (this.props.seuil.length > 0) {
      if (this.props.seuil[0].borderColor !== '') {
        colorBackground = this.props.seuil[0].borderColor;
      } else {
        colorBackground = 'black';
      }
    } else {
      colorBackground = 'black';
    }

    var valueMainMetric = parseInt(this.props.valueMainMetric, 10);
    var index = 0;
    this.props.seuil.forEach(function (level) {
      var lowerLimitMin = 0;

      if (level.lowerLimitMin === '') {
        lowerLimitMin = 0;
      } else {
        lowerLimitMin = parseInt(level.lowerLimitMin.substring(1), 10);
      }

      if (lowerLimitMin === 0) {
        if (valueMainMetric >= lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
          colorBackground = level.backColor;
        }
      } else if (_this.props.seuil.length === index + 1) {
        if (valueMainMetric > lowerLimitMin) {
          colorBackground = level.backColor;
        }
      } else if (valueMainMetric > lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
        colorBackground = level.backColor;
      }

      index++;
    });
    return colorBackground;
  };

  DrawPoint.prototype.defineBorderColor = function () {
    var _this = this;

    var colorBorder = '';

    if (this.props.seuil.length > 0) {
      if (this.props.seuil[0].borderColor !== '') {
        colorBorder = this.props.seuil[0].borderColor;
      } else {
        colorBorder = 'black';
      }
    } else {
      colorBorder = 'black';
    }

    var valueMainMetric = parseInt(this.props.valueMainMetric, 10);
    var index = 0;
    this.props.seuil.forEach(function (level) {
      var lowerLimitMin = 0;

      if (level.lowerLimitMin === '') {
        lowerLimitMin = 0;
      } else {
        lowerLimitMin = parseInt(level.lowerLimitMin.substring(1), 10);
      }

      if (lowerLimitMin === 0) {
        if (valueMainMetric >= lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
          colorBorder = level.borderColor;
        }
      } else if (_this.props.seuil.length === index + 1) {
        if (valueMainMetric > lowerLimitMin) {
          colorBorder = level.borderColor;
        }
      } else if (valueMainMetric > lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
        colorBorder = level.borderColor;
      }

      index++;
    });
    return colorBorder;
  };

  DrawPoint.prototype.defineBorderSize = function () {
    var _this = this;

    var sizeBorder = '';

    if (this.props.seuil.length > 0) {
      sizeBorder = this.props.seuil[0].sizeBorder;
    } else {
      sizeBorder = '1';
    }

    var valueMainMetric = parseInt(this.props.valueMainMetric, 10);
    var index = 0;
    this.props.seuil.forEach(function (level) {
      var lowerLimitMin = 0;

      if (level.lowerLimitMin === '') {
        lowerLimitMin = 0;
      } else {
        lowerLimitMin = parseInt(level.lowerLimitMin.substring(1), 10);
      }

      if (lowerLimitMin === 0) {
        if (valueMainMetric >= lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
          sizeBorder = level.sizeBorder;
        }
      } else if (_this.props.seuil.length === index + 1) {
        if (valueMainMetric > lowerLimitMin) {
          sizeBorder = level.sizeBorder;
        }
      } else if (valueMainMetric > lowerLimitMin && valueMainMetric <= parseInt(level.lowerLimitMax, 10)) {
        sizeBorder = level.sizeBorder;
      }

      index++;
    });
    return sizeBorder;
  };
  /**
   * render
   */


  DrawPoint.prototype.render = function () {
    var initialSpace = this.props.options.coordinateSpaceInitial.coordinate;
    var shape = this.props.shape.value || '';
    var size = this.defineSizeGraphicMarkerPx(this.props.size.value || '', shape);
    var valueInputPositionArrowX = parseInt(this.props.positionShapeX, 10) || 0;
    var valueInputPositionArrowY = parseInt(this.props.positionShapeY, 10) || 0;
    var positionShapeX = this.definePositionX(valueInputPositionArrowX, initialSpace, size, shape);
    var positionShapeY = this.definePositionY(valueInputPositionArrowY, initialSpace, size, shape);
    var label = this.props.label;
    var name = this.props.name;
    var color = this.props.color;
    var drawGraphicMarker = this.props.drawGraphicMarker.value || '';
    var police = this.props.police;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: this.props.name,
      style: {
        cursor: 'pointer'
      }
    }, this.displayLabel(label, name, positionShapeX, positionShapeY, police), this.drawPoint(drawGraphicMarker, size, positionShapeX, positionShapeY, shape, color));
  };

  return DrawPoint;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DrawPoint);

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
/* harmony import */ var _drawRectangleExtend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawRectangleExtend */ "./components/Draw/drawRectangleExtend.tsx");




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
        size = isMax ? 50 - size : 50 + size;
      } else {
        size *= -1;
        size /= 2;
        size = 50 - size;
      }

      return size;
    };

    _this.fillCoordinate = function () {
      var options = _this.props.options;
      var mapItems;
      mapItems = options.regionCoordinateSpace.map(function (line, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_drawRectangleExtend__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: 'drawRectangleExtend' + index.toString(),
          uneCoor: line,
          useLimit: false,
          limit: options.coordinateSpaceInitial.coordinate,
          onOptionsChange: _this.props.onOptionsChange,
          options: _this.props.options,
          data: _this.props.data,
          id: 'region' + line.id.toString(),
          isEnabled: _this.props.isEnabled
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, mapItems);
    };
    /** creaate rectrangle */


    _this.createRectangle = function () {
      var line = _this.props.coordinateInitial.coordinate;
      var pLeft;
      var pRight;
      var pTop;
      var pBottom;
      var xMin = 0;
      var xMax = 0;
      var yMin = 0;
      var yMax = 0;
      var pBorder = _this.props.coordinateInitial.displayArea ? '3px solid ' + _this.props.color : '';
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
      }, _this.fillCoordinate());

      _this.setState({
        resultHTML: data
      });
    };
    /** create rectangle when component mount */


    _this.componentDidMount = function () {
      _this.createRectangle();
    };

    _this.state = {
      resultHTML: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null)
    };
    return _this;
  }
  /** update state when props coordinateInitial change */


  DrawRectangle.prototype.componentDidUpdate = function (prevProps) {
    if (prevProps !== this.props) {
      this.createRectangle();
    }
  };
  /**
   * render
   */


  DrawRectangle.prototype.render = function () {
    var test = {
      position: 'absolute',
      textAlign: 'center',
      height: this.props.options.baseMap.height + 'px',
      width: this.props.options.baseMap.width + 'px'
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: test
    }, this.state.resultHTML);
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
/* harmony import */ var Functions_otherFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Functions/otherFunction */ "./Functions/otherFunction.tsx");
/* harmony import */ var Functions_getLowerLimit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Functions/getLowerLimit */ "./Functions/getLowerLimit.tsx");
/* harmony import */ var Functions_getResultQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Functions/getResultQuery */ "./Functions/getResultQuery.tsx");
/* harmony import */ var Functions_parseColor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Functions/parseColor */ "./Functions/parseColor.tsx");
/* harmony import */ var Functions_fetchMetrics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Functions/fetchMetrics */ "./Functions/fetchMetrics.tsx");
/* harmony import */ var Functions_searchMinMaxIdSVG__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Functions/searchMinMaxIdSVG */ "./Functions/searchMinMaxIdSVG.tsx");









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
     * Edit color Zone in SVG
     * @param {string} id id is equal to zone for change color in Svg
     * @param {string} color define the color for Svg zone
     */


    _this.editColorSvgZone = function (id, color, border, sizeBorder) {
      var colorSVG = Object(Functions_parseColor__WEBPACK_IMPORTED_MODULE_6__["parseColor"])(color);
      var colorBorderSVG = Object(Functions_parseColor__WEBPACK_IMPORTED_MODULE_6__["parseColor"])(border);
      var changeColorElement = document.getElementById(id);

      if (changeColorElement) {
        changeColorElement.style.fill = colorSVG.color;
        changeColorElement.style.fillOpacity = colorSVG.transparency;
        changeColorElement.style.stroke = colorBorderSVG.color;
        changeColorElement.style.strokeOpacity = colorBorderSVG.transparency;
        changeColorElement.style.strokeWidth = sizeBorder;
      }
    };
    /** fill state for tooltip, color zone and calc round query */


    _this.setStateTooltip = function (lowerLimit, region, valueQuery, link) {
      var styleTooltip = {
        color: region.textObj.colorText,
        backgroundColor: region.textObj.colorBack
      };
      var styleMetrics = {
        color: region.textObj.valueGenerateObjectText.colorTextElement,
        backgroundColor: region.textObj.valueGenerateObjectText.colorBackElement
      };
      var converValueQuery = 'NaN';
      var roundMetrics = parseInt(region.textObj.valueGenerateObjectText.numericFormatElement, 10);

      if (valueQuery && region.textObj.valueGenerateObjectText.numericFormatElement !== '' && roundMetrics) {
        converValueQuery = valueQuery.toFixed(roundMetrics).toString();
      } else if (valueQuery) {
        converValueQuery = valueQuery.toString();
      } // (Math.round(valueQuery * roundMetrics + Number.EPSILON) / roundMetrics).toString()


      var value = converValueQuery + (region.textObj.valueGenerateObjectText.unit ? ' ' + region.textObj.valueGenerateObjectText.unit : '');
      var valueQueryResult = region.textObj.valueGenerateObjectText.legendElement + ' ' + value;
      var tooltipValue = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: styleTooltip
      }, link && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: region.linkURL.hoveringTooltipLink
      }, region.linkURL.hoveringTooltipText), region.textObj.isTextRegion && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, region.label)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: styleMetrics
      }, region.textObj.generateObjectText && region.textObj.valueGenerateObjectText.displayObjectInText && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, valueQueryResult)));
      return {
        tooltipValue: tooltipValue,
        backgroundColor: lowerLimit.colorBack,
        borderColor: lowerLimit.colorBorder,
        sizeBorder: lowerLimit.sizeBorder,
        valueQuery: valueQueryResult
      };
    };
    /** generate tooltip for metrics and apply color with lower limit */


    _this.generateTooltipAndEditColor = function (region, valueQuery) {
      var stateIsFill = false;
      var lowerLimit = Object(Functions_getLowerLimit__WEBPACK_IMPORTED_MODULE_4__["getLowerLimit"])(region, valueQuery);

      if (region.mode) {
        _this.editColorSvgZone(region.idSVG, lowerLimit.colorBack, lowerLimit.colorBorder, lowerLimit.sizeBorder.toString());
      }

      var resultTooltip = _this.setStateTooltip(lowerLimit, region, valueQuery, _this.props.isEnabled);

      if (valueQuery) {
        if (region.mode) {
          var coordinateWrite = Object(Functions_searchMinMaxIdSVG__WEBPACK_IMPORTED_MODULE_8__["searchMinMaxIdSVG"])(region.idSVG);

          if (coordinateWrite) {
            stateIsFill = true;
            var styleWrite = {
              position: 'absolute',
              zIndex: 999,
              left: coordinateWrite.xMax - (coordinateWrite.xMax - coordinateWrite.xMin),
              top: coordinateWrite.yMax,
              backgroundColor: region.textObj.valueGenerateObjectText.colorBackElement,
              color: region.textObj.valueGenerateObjectText.colorTextElement
            };

            _this.setState({
              htmlResult: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                style: styleWrite
              }, resultTooltip.valueQuery),
              tooltipValue: resultTooltip.tooltipValue,
              backgroundColor: resultTooltip.backgroundColor,
              borderColor: resultTooltip.borderColor,
              sizeBorder: resultTooltip.sizeBorder,
              valueQuery: resultTooltip.valueQuery
            });
          }
        }
      }

      if (!stateIsFill) {
        _this.setState({
          tooltipValue: resultTooltip.tooltipValue,
          backgroundColor: resultTooltip.backgroundColor,
          borderColor: resultTooltip.borderColor,
          sizeBorder: resultTooltip.sizeBorder,
          valueQuery: resultTooltip.valueQuery
        });
      }
    };
    /** get data metrics and fill state */


    _this.reqMetrics = function () {
      var region = _this.props.uneCoor;
      Object(Functions_fetchMetrics__WEBPACK_IMPORTED_MODULE_7__["reqMetricRegion"])(region, _this.props);

      if (region.mainMetric.returnQuery && region.mainMetric.returnQuery.length > 0) {
        var cnt = Object(Functions_getResultQuery__WEBPACK_IMPORTED_MODULE_5__["getResultQuery"])(region.mainMetric);

        _this.generateTooltipAndEditColor(region, cnt);
      } else {
        _this.generateTooltipAndEditColor(region, null);
      }
    };
    /** final region zone . Call function after reqMetrics*/


    _this.renduFinal = function () {
      if (_this.props.uneCoor.mode) {
        return;
      }

      var region = _this.props.uneCoor;

      var pBorder = _this.state.sizeBorder.toString() + 'px solid ' + _this.state.borderColor;

      var backColor = region.textObj.colorBack;
      var textColor = region.textObj.colorText;
      var style = region.textObj.style;
      var coorHTML = Object(Functions_otherFunction__WEBPACK_IMPORTED_MODULE_3__["calculRealCoordinate"])(region, _this.props.useLimit, _this.props.limit);
      var styleDiv = {
        border: pBorder,
        bottom: coorHTML.bottom,
        left: coorHTML.left,
        position: 'absolute',
        right: coorHTML.right,
        top: coorHTML.top,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'url(' + region.img + ') no-repeat center center',
        backgroundColor: _this.state.backgroundColor,
        backgroundSize: 'contain',
        cursor: 'pointer'
      };
      var styleTextDiv = {
        backgroundColor: backColor,
        fontStyle: style.italic ? 'italic' : '',
        color: textColor,
        verticalAlign: 'middle'
      };
      var styleMetricsDiv = {
        backgroundColor: region.textObj.valueGenerateObjectText.colorBackElement,
        color: region.textObj.valueGenerateObjectText.colorTextElement,
        verticalAlign: 'middle'
      };
      var value = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);

      if (_this.props.isEnabled && region.linkURL.followLink !== '') {
        value = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: region.linkURL.followLink
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: styleDiv,
          id: _this.props.id
        }, (!region.textObj.isTextRegion || region.textObj.generateObjectText) && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: styleTextDiv
        }, !region.textObj.isTextRegion && region.label), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: styleMetricsDiv
        }, region.textObj.generateObjectText && !region.textObj.valueGenerateObjectText.displayObjectInText && _this.state.valueQuery))));

        if (region.textObj.isTextRegion || region.textObj.generateObjectText && region.textObj.valueGenerateObjectText.displayObjectInText) {
          value = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
            content: _this.state.tooltipValue
          }, value);
        }
      } else {
        value = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: styleDiv,
          id: _this.props.id
        }, (!region.textObj.isTextRegion || region.textObj.generateObjectText) && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: styleTextDiv
        }, !region.textObj.isTextRegion && region.label), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: styleMetricsDiv
        }, region.textObj.generateObjectText && !region.textObj.valueGenerateObjectText.displayObjectInText && _this.state.valueQuery)));

        if (region.textObj.isTextRegion || region.textObj.generateObjectText && region.textObj.valueGenerateObjectText.displayObjectInText) {
          value = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
            content: _this.state.tooltipValue
          }, value);
        }
      }

      _this.setState({
        htmlResult: value
      });
    };
    /** fill state to display data in html */


    _this.fillState = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var _this = this;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , Promise.resolve('Success').then(function () {
                _this.reqMetrics();
              })];

            case 1:
              _a.sent();

              return [4
              /*yield*/
              , Promise.resolve('Success').then(function () {
                _this.renduFinal();
              })];

            case 2:
              _a.sent();

              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** load prometheus value */


    _this.componentDidMount = function () {
      _this.fillState();
    };

    _this.state = {
      tooltipValue: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null),
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderColor: 'rgba(255, 255, 255, 0)',
      sizeBorder: 1,
      htmlResult: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null),
      valueQuery: ''
    };
    return _this;
  }
  /**
   * update props
   * @param prevProps
   */


  DrawRectangleExtend.prototype.componentDidUpdate = function (prevProps) {
    if (prevProps !== this.props) {
      this.fillState();
    }
  };
  /** render */


  DrawRectangleExtend.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.htmlResult);
  };

  return DrawRectangleExtend;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DrawRectangleExtend);

/***/ }),

/***/ "./components/Parametrage/VariableColor.tsx":
/*!**************************************************!*\
  !*** ./components/Parametrage/VariableColor.tsx ***!
  \**************************************************/
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

var VariableColor =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(VariableColor, _super);

  function VariableColor(props) {
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
                arrayInputClass: this.state.arrayInputClass.slice().concat(new Models_ArrayInputClass__WEBPACK_IMPORTED_MODULE_3__["ArrayInputClass"](idx, [new Models_InputClass__WEBPACK_IMPORTED_MODULE_4__["InputClass"]('gestCouleurMin' + idx.toString(), 'Seuil min', 'lowerLimitMin', 'text', false, 'Seuil min', undefined), new Models_InputClass__WEBPACK_IMPORTED_MODULE_4__["InputClass"]('gestCouleurMax' + idx.toString(), 'Seuil max', 'lowerLimitMax', 'text', false, 'Seuil max', undefined)]))
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

              if (idInput === 'lowerLimitMin') {
                cpy[idLine].lowerLimitMin = event;
              } else {
                cpy[idLine].lowerLimitMax = event;

                if (cpy.length > idLine + 1) {
                  cpy[idLine + 1].lowerLimitMin = '>' + event;
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
              cpy[key].backColor = color;
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
              cpy[key].borderColor = color;
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
     * call function when sizeBorder value change
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
              cpy[key].sizeBorder = size;
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
          color: _this.state.lowerLimit[keyInt].backColor,
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
          color: _this.state.lowerLimit[keyInt].borderColor,
          keyInt: keyInt,
          text: l10n.colorVariable.switchOutlineColor,
          _onChange: _this.onChangeColorContour
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          labelWidth: 15,
          label: l10n.colorVariable.thicknessOutline,
          name: "epaisseurContour",
          placeholder: l10n.colorVariable.thicknessOutline,
          value: _this.state.lowerLimit[keyInt].sizeBorder,
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
                  arrayInput.push(new Models_ArrayInputClass__WEBPACK_IMPORTED_MODULE_3__["ArrayInputClass"](idx, [new Models_InputClass__WEBPACK_IMPORTED_MODULE_4__["InputClass"]('gestCouleurMin' + idx.toString(), 'Seuil min', 'lowerLimitMin', 'text', false, 'Seuil min', undefined), new Models_InputClass__WEBPACK_IMPORTED_MODULE_4__["InputClass"]('gestCouleurMax' + idx.toString(), 'Seuil max', 'lowerLimitMax', 'text', false, 'Seuil max', undefined)]));
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
            value: obj.name === 'lowerLimitMin' ? line.id === 0 ? '-∞' : _this.state.lowerLimit[i].lowerLimitMin : line.id === _this.state.index - 1 ? '+∞' : _this.state.lowerLimit[i].lowerLimitMax,
            _handleChange: function _handleChange(event) {
              return _this.handleValueChange(event.currentTarget.value, obj.name, line.id);
            },
            disabled: obj.name === 'lowerLimitMin' || line.id === _this.state.index - 1
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
      // console.group('info');
      console.log(_this.state.lowerLimit);
      console.log(_this.state.arrayInputClass); // console.groupEnd();
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


  VariableColor.prototype.render = function () {
    var l10n = __webpack_require__(/*! Localization/en.json */ "./Localization/en.json");

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: l10n.colorVariable.variationNumber,
      name: "nbVariation",
      placeholder: l10n.colorVariable.number,
      required: true,
      value: this.state.nbVariation,
      _handleChange: this.onChangeVariation
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: this.onClickVariation
    }, l10n.colorVariable.addColor), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), this.state.dynamicInput);
  };

  return VariableColor;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (VariableColor);

/***/ }),

/***/ "./components/Parametrage/fixColor.tsx":
/*!*********************************************!*\
  !*** ./components/Parametrage/fixColor.tsx ***!
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
/* harmony import */ var Models_LowerLimitClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Models/LowerLimitClass */ "./Models/LowerLimitClass.tsx");
/* harmony import */ var Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Functions/Input/inputSeriesColorPicker */ "./Functions/Input/inputSeriesColorPicker.tsx");





/**
 * edit color in fix mode
 */

var FixColor =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FixColor, _super);

  function FixColor(props) {
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
              newSeuil[0].backColor = color;
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
              newSeuil[0].borderColor = color;
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
              newSeuil[0].sizeBorder = value;
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

      if (_this.props.traceBack) {
        var keyFondColorPicker = key + 'FondcolorPicker';
        couleur.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: keyFondColorPicker,
          color: _this.state.lowerLimit[0].backColor,
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
          color: _this.state.lowerLimit[0].borderColor,
          keyInt: 0,
          text: l10n.colorVariable.switchOutlineColor,
          _onChange: _this.onChangeColorContour
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          labelWidth: 10,
          label: l10n.colorVariable.thicknessOutline,
          name: "epaisseurContour",
          placeholder: l10n.colorVariable.thicknessOutline,
          value: _this.state.lowerLimit[0].sizeBorder,
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


  FixColor.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.htmlResult);
  };

  return FixColor;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FixColor);

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
/* harmony import */ var components_Parametrage_fixColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Parametrage/fixColor */ "./components/Parametrage/fixColor.tsx");
/* harmony import */ var components_Parametrage_VariableColor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Parametrage/VariableColor */ "./components/Parametrage/VariableColor.tsx");






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
    }), this.state.coordinate.colorMode ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Parametrage_VariableColor__WEBPACK_IMPORTED_MODULE_5__["default"], {
      traceBorder: this.state.coordinate.traceBorder,
      traceBack: this.state.coordinate.traceBack,
      lowerLimit: this.state.coordinate.lowerLimit,
      lowerLimitCallBack: this.props.lowerLimitCallBack,
      id: this.props.id
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Parametrage_fixColor__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
      name: "followLink",
      placeholder: l10n.metricPrincipalSetting.link,
      required: false,
      value: this.state.followLink,
      _handleChange: function _handleChange(event) {
        return _this.onChangeFollowLink(event.currentTarget.value);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: l10n.metricPrincipalSetting.linkTooltip,
      name: "linkTooltip",
      placeholder: l10n.metricPrincipalSetting.link,
      required: false,
      value: this.state.hoveringTooltipLink,
      _handleChange: function _handleChange(event) {
        return _this.onChangeHoveringTooltipLink(event.currentTarget.value);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: l10n.metricPrincipalSetting.textInTooltip,
      name: "textTooltip",
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
    /** switch value collapseLink when click collapse */


    _this.onToggleLinkCollapse = function (isOpen) {
      _this.setState({
        collapseLink: isOpen
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
          collapseLink: false,
          collapseTextObject: false
        });
      }
    };

    _this.state = {
      collapseLink: false,
      collapseTextObject: false
    };
    return _this;
  }
  /** HTML */


  ParametresGeneriques.prototype.render = function () {
    // const l10n = require('Localization/en.json');
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.collapseLink,
      label: "Manage link",
      onToggle: this.onToggleLinkCollapse
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_parametrageMetriquePrincipale__WEBPACK_IMPORTED_MODULE_3__["default"], {
      coordinateSpace: this.props.coordinateSpace,
      callBackToParent: this.props.callBackToParent,
      id: this.props.id
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.collapseTextObject,
      label: "Text object",
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

/***/ "./components/Parametrage/positionParameters.tsx":
/*!*******************************************************!*\
  !*** ./components/Parametrage/positionParameters.tsx ***!
  \*******************************************************/
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

var PositionParameter =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PositionParameter, _super);

  function PositionParameter(props) {
    var _this = _super.call(this, props) || this;

    _this.handleChangeLabelAPositionX = function (event) {
      var newPositionParameter = _this.state.positionParameter;
      newPositionParameter.labelAPositionX = event.currentTarget.value;

      _this.setState({
        positionParameter: newPositionParameter
      });

      _this.callBack();
    };

    _this.handleChangeLabelAPositionY = function (event) {
      var newPositionParameter = _this.state.positionParameter;
      newPositionParameter.labelAPositionY = event.currentTarget.value;

      _this.setState({
        positionParameter: newPositionParameter
      });

      _this.callBack();
    };

    _this.handleChangeLabelBPositionX = function (event) {
      var newPositionParameter = _this.state.positionParameter;
      newPositionParameter.labelBPositionX = event.currentTarget.value;

      _this.setState({
        positionParameter: newPositionParameter
      });

      _this.callBack();
    };

    _this.handleChangeLabelBPositionY = function (event) {
      var newPositionParameter = _this.state.positionParameter;
      newPositionParameter.labelBPositionY = event.currentTarget.value;

      _this.setState({
        positionParameter: newPositionParameter
      });

      _this.callBack();
    };

    _this.handleChangeTooltipPositionA = function (event) {
      var newPositionParameter = _this.state.positionParameter;
      newPositionParameter.tooltipPositionA = {
        label: event.value,
        value: event.value
      };

      _this.setState({
        positionParameter: newPositionParameter
      });

      _this.callBack();
    };

    _this.handleChangeTooltipPositionB = function (event) {
      var newPositionParameter = _this.state.positionParameter;
      newPositionParameter.tooltipPositionB = {
        label: event.value,
        value: event.value
      };

      _this.setState({
        positionParameter: newPositionParameter
      });

      _this.callBack();
    };

    _this.handleChangeSelectOrientedLinkToUpgrade = function (event) {
      console.log(event);
      var newOrientedLinkComparedToToUpgrade = {
        label: event.label,
        value: event.value
      };

      _this.setState({
        orientedLinkComparedToUpgrade: newOrientedLinkComparedToToUpgrade
      });
    };

    _this.handleChangeSelectOrientedLinkToDowngrade = function (event) {
      var newOrientedLinkComaparedToDowngrade = {
        label: event.label,
        value: event.value
      };

      _this.setState({
        orientedLinkComparedToDowngrade: newOrientedLinkComaparedToDowngrade
      });
    };

    _this.downgradeLayerLevel = function () {
      var orientedLinkComparedTo = _this.state.orientedLinkComparedToDowngrade.value;
      var zIndex = orientedLinkComparedTo.zIndex - 1;

      _this.callBackZIndex(zIndex, _this.props.id || 0);
    };

    _this.upgradeLayerLevel = function () {
      var orientedLinkComparedTo = _this.state.orientedLinkComparedToUpgrade.value;
      var zIndex = orientedLinkComparedTo.zIndex + 1;

      _this.callBackZIndex(zIndex, _this.props.id || 0);
    };

    _this.defineListOrientedLink = function () {
      var listOptions = [];
      var arrayOrientedLinks = _this.props.options.arrayOrientedLinks;
      arrayOrientedLinks.forEach(function (orientedLink) {
        var selectableValue = {
          label: orientedLink.label || orientedLink.name,
          value: orientedLink
        };
        listOptions.push(selectableValue);
      });
      return listOptions;
    };

    _this.defineLabelPositionInputs = function () {
      var _a;

      var item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);

      if (_this.props.isLink && ((_a = _this.props.orientedLink) === null || _a === void 0 ? void 0 : _a.orientationLink.value) === 'double') {
        item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          label: "Label A Position X",
          labelWidth: 10,
          inputWidth: 20,
          type: "text",
          value: _this.state.positionParameter.labelAPositionX,
          onChange: _this.handleChangeLabelAPositionX,
          placeholder: 'Label A Position X'
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          label: "Label A Position Y",
          labelWidth: 10,
          inputWidth: 20,
          type: "text",
          value: _this.state.positionParameter.labelAPositionY,
          onChange: _this.handleChangeLabelAPositionY,
          placeholder: 'Label A Position Y'
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          label: "Label B Position X",
          labelWidth: 10,
          inputWidth: 20,
          type: "text",
          value: _this.state.positionParameter.labelBPositionX,
          onChange: _this.handleChangeLabelBPositionX,
          placeholder: 'Label B Position X'
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          label: "Label B Position Y",
          labelWidth: 10,
          inputWidth: 20,
          type: "text",
          value: _this.state.positionParameter.labelBPositionY,
          onChange: _this.handleChangeLabelBPositionY,
          placeholder: 'Label B Position Y'
        }))));
      } else {
        item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          label: "Position X",
          labelWidth: 10,
          inputWidth: 20,
          type: "text",
          value: _this.state.positionParameter.labelAPositionX,
          onChange: _this.handleChangeLabelAPositionX,
          placeholder: 'Position X'
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
          label: "Position Y",
          labelWidth: 10,
          inputWidth: 20,
          type: "text",
          value: _this.state.positionParameter.labelAPositionY,
          onChange: _this.handleChangeLabelAPositionY,
          placeholder: 'Position Y'
        }));
      }

      return item;
    };

    _this.defineTooltipPositionInputs = function () {
      var _a;

      var item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
      var optionsSelectTooltipPosition = [{
        label: 'Top',
        value: 'top'
      }, {
        label: 'Bottom',
        value: 'bottom'
      }, {
        label: 'Left',
        value: 'left'
      }, {
        label: 'Right',
        value: 'right'
      }];

      if (_this.props.isLink && ((_a = _this.props.orientedLink) === null || _a === void 0 ? void 0 : _a.orientationLink.value) === 'double') {
        item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            display: 'flex'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
          width: 10
        }, "Tooltip A Position"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
          onChange: _this.handleChangeTooltipPositionA,
          allowCustomValue: false,
          options: optionsSelectTooltipPosition,
          value: _this.state.positionParameter.tooltipPositionA,
          width: 20
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            display: 'flex'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
          width: 10
        }, "Tooltip B Position"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
          onChange: _this.handleChangeTooltipPositionB,
          allowCustomValue: false,
          options: optionsSelectTooltipPosition,
          value: _this.state.positionParameter.tooltipPositionB,
          width: 20
        })));
      } else {
        item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            display: 'flex'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
          width: 10
        }, "Tooltip position"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
          onChange: _this.handleChangeTooltipPositionA,
          allowCustomValue: false,
          options: optionsSelectTooltipPosition,
          value: _this.state.positionParameter.tooltipPositionA,
          width: 20
        }));
      }

      return item;
    };

    _this.defineLayerLevel = function () {
      var item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);

      var options = _this.defineListOrientedLink();

      if (_this.props.isLink) {
        item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
          isOpen: _this.state.collapseLayerLevel,
          label: 'LayerLevel',
          onToggle: function onToggle(isOpen) {
            _this.setState({
              collapseLayerLevel: isOpen
            });
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            display: 'flex'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
          width: 15
        }, "Upgrade on "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
          onChange: _this.handleChangeSelectOrientedLinkToUpgrade,
          allowCustomValue: false,
          options: options,
          value: _this.state.orientedLinkComparedToUpgrade,
          width: 15
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: _this.upgradeLayerLevel
        }, "Submit")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            display: 'flex'
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
          width: 15
        }, "Downgrade on"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
          onChange: _this.handleChangeSelectOrientedLinkToDowngrade,
          allowCustomValue: false,
          options: options,
          value: _this.state.orientedLinkComparedToDowngrade,
          width: 15
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: _this.downgradeLayerLevel
        }, "Submit")));
      } else {
        item = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
      }

      return item;
    };

    _this.state = {
      collapsepositionParameter: false,
      collapseLabel: false,
      collapseTooltip: false,
      collapseLayerLevel: false,
      coordinateSpace: _this.props.coordinateSpace,
      positionParameter: _this.props.coordinateSpace.positionParameter,
      orientedLinkComparedToDowngrade: {},
      orientedLinkComparedToUpgrade: {}
    };
    return _this;
  }

  PositionParameter.prototype.callBack = function () {
    this.props.callBackToParent(this.state.positionParameter, this.props.id || 0);
  };

  PositionParameter.prototype.callBackZIndex = function (zIndex, id) {
    this.props.callBackToParentZIndex(zIndex, id);
  };

  PositionParameter.prototype.render = function () {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.collapsepositionParameter,
      label: 'Position Parameter',
      onToggle: function onToggle(isOpen) {
        _this.setState({
          collapsepositionParameter: isOpen
        });
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.collapseLabel,
      label: 'Label',
      onToggle: function onToggle(isOpen) {
        _this.setState({
          collapseLabel: isOpen
        });
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.defineLabelPositionInputs())), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.collapseTooltip,
      label: 'Tooltip',
      onToggle: function onToggle(isOpen) {
        _this.setState({
          collapseTooltip: isOpen
        });
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.defineTooltipPositionInputs())), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.defineLayerLevel()));
  };

  return PositionParameter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PositionParameter);

/***/ }),

/***/ "./components/Parametrage/styleComponent.tsx":
/*!***************************************************!*\
  !*** ./components/Parametrage/styleComponent.tsx ***!
  \***************************************************/
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

var StyleComponent =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StyleComponent, _super);

  function StyleComponent(props) {
    var _this = _super.call(this, props) || this;
    /** save data in Parent */


    _this.callBack = function () {
      _this.props.saveParent(_this.state.style);
    };
    /** change bold */


    _this.onChangeBold = function () {
      var style = _this.state.style;
      style.bold = !style.bold;

      _this.setState({
        style: style
      });

      _this.callBack();
    };
    /** change italic */


    _this.onChangeItalic = function () {
      var style = _this.state.style;
      style.italic = !style.italic;

      _this.setState({
        style: style
      });

      _this.callBack();
    };
    /** change underline */


    _this.onChangeUnderline = function () {
      var style = _this.state.style;
      style.underline = !style.underline;

      _this.setState({
        style: style
      });

      _this.callBack();
    };

    _this.state = {
      style: _this.props.oldStyle
    };
    return _this;
  }
  /**
   * result
   */


  StyleComponent.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: "Bold",
      checked: this.state.style.bold,
      onChange: this.onChangeBold
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: "Italic",
      checked: this.state.style.italic,
      onChange: this.onChangeItalic
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: "Underline",
      checked: this.state.style.underline,
      onChange: this.onChangeUnderline
    }));
  };

  return StyleComponent;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (StyleComponent);

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
/* harmony import */ var components_Parametrage_styleComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Parametrage/styleComponent */ "./components/Parametrage/styleComponent.tsx");
/* harmony import */ var Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Functions/Input/inputText */ "./Functions/Input/inputText.tsx");
/* harmony import */ var Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Functions/Input/inputSeriesColorPicker */ "./Functions/Input/inputSeriesColorPicker.tsx");






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
    /** call back to parent */


    _this.callBack = function () {
      _this.props.callBackToParent(undefined, undefined, undefined, _this.state.textObject, _this.props.id);
    }; // /** change value for legend input */
    // onSwitchLegend = async () => {
    // 	const newTextObject: TextObject = this.state.textObject;
    // 	newTextObject.legend = !newTextObject.legend;
    // 	await this.stateAsyncTextObject({ textObject: newTextObject });
    // 	this.callBack();
    // }

    /** change value for value input */


    _this.onChangeValeur = function (value) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.value = value;
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
    // onChangeStyleText = async (event: {
    //   /** target for style text region input */
    //   currentTarget: HTMLInputElement;
    // }) => {
    //   const newTextObject: TextObject = this.state.textObject;
    //   newTextObject.styleText = event.currentTarget.value;
    //   await this.stateAsyncTextObject({ textObject: newTextObject });
    //   this.callBack();
    // };

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
              newTextObject.generateAuxiliaryElement.legendElement = event.currentTarget.value;
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


    _this.onChangeunit = function (event) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.generateAuxiliaryElement.unit = event.currentTarget.value;
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
              newTextObject.generateAuxiliaryElement.numericFormatElement = event.currentTarget.value;
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
              newTextObject.generateAuxiliaryElement.displayObjectInText = !this.state.textObject.generateAuxiliaryElement.displayObjectInText;
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
    }; // /** switch value for display object permanently */
    // onSwitchDisplayObjectPermanently = async () => {
    // 	const newTextObject: TextObject = this.state.textObject;
    // 	newTextObject.generateAuxiliaryElement.displayObjectPermanently =
    // 		!this.state.textObject.generateAuxiliaryElement.displayObjectPermanently;
    // 	await this.stateAsyncTextObject({ textObject: newTextObject });
    // 	this.callBack();
    // }

    /** choice to apply color or not for text element */


    _this.onSwitchAddColorTextElement = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.generateAuxiliaryElement.addColorTextElement = !this.state.textObject.generateAuxiliaryElement.addColorTextElement;
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
              newTextObject.generateAuxiliaryElement.addColorBackElement = !this.state.textObject.generateAuxiliaryElement.addColorBackElement;
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
              newTextObject.generateAuxiliaryElement.colorTextElement = color;
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
              newTextObject.generateAuxiliaryElement.colorBackElement = color;
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


    _this.onChangeValueGenerateObjectTextLegendElement = function (event) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.valueGenerateObjectText.legendElement = event.currentTarget.value;
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


    _this.onChangeValueGenerateObjectTextunit = function (event) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.valueGenerateObjectText.unit = event.currentTarget.value;
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


    _this.onChangeValueGenerateObjectTextFormatageNumeriqueTextObject = function (event) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.valueGenerateObjectText.numericFormatElement = event.currentTarget.value;
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


    _this.onSwitchValueGenerateObjectTextDisplayObjectInText = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.valueGenerateObjectText.displayObjectInText = !this.state.textObject.valueGenerateObjectText.displayObjectInText;
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
    }; // /** switch value for display object permanently */
    // onSwitchValueGenerateObjectTextDisplayObjectPermanently = async () => {
    // 	const newTextObject: TextObject = this.state.textObject;
    // 	newTextObject.valueGenerateObjectText.displayObjectPermanently =
    // 		!this.state.textObject.valueGenerateObjectText.displayObjectPermanently;
    // 	await this.stateAsyncTextObject({ textObject: newTextObject });
    // 	this.callBack();
    // }

    /** choice to apply color or not for text element */


    _this.onSwitchValueGenerateObjectTextAddColorTextElement = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.valueGenerateObjectText.addColorTextElement = !this.state.textObject.valueGenerateObjectText.addColorTextElement;
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


    _this.onSwitchValueGenerateObjectTextAddColorBackElement = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.valueGenerateObjectText.addColorBackElement = !this.state.textObject.valueGenerateObjectText.addColorBackElement;
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


    _this.onChangeValueGenerateObjectTextColorTextElement = function (key, color) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.valueGenerateObjectText.colorTextElement = color;
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


    _this.onChangeValueGenerateObjectTextColorBackElement = function (key, color) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var newTextObject;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              newTextObject = this.state.textObject;
              newTextObject.valueGenerateObjectText.colorBackElement = color;
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

    _this.saveData = function (style) {
      var newText = _this.state.textObject;
      newText.style = style;

      _this.setState({
        textObject: newText
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
    var l10n = __webpack_require__(/*! Localization/en.json */ "./Localization/en.json");

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, l10n.textObject.principalMetric), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: "Display text in region or tooltip",
      checked: this.state.textObject.isTextRegion,
      onChange: this.onSwitchIsTextRegion
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
      hidden: this.state.textObject.isTextRegion
    }, l10n.textObject.textRegion), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
      hidden: !this.state.textObject.isTextRegion
    }, l10n.textObject.textBubble), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: this.state.textObject.colorBack,
      keyInt: 0,
      text: l10n.textObject.colorBackground,
      _onChange: this.onChangeBackColor
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: this.state.textObject.colorText,
      keyInt: 0,
      text: l10n.textObject.colorText,
      _onChange: this.onChangeColorText
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Parametrage_styleComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
      oldStyle: this.state.textObject.style,
      saveParent: this.saveData
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Generate text object"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: l10n.textObject.generateTextObject,
      checked: this.state.textObject.generateObjectText,
      onChange: this.onSwitchGenerateObjectText
    }), this.state.textObject.generateObjectText && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: l10n.textObject.legend,
      name: "legendTextObject",
      placeholder: l10n.textObject.legend,
      required: false,
      value: this.state.textObject.valueGenerateObjectText.legendElement,
      _handleChange: this.onChangeValueGenerateObjectTextLegendElement
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: l10n.textObject.digitalFormatting,
      name: "formatageNumeriqueTextObject",
      placeholder: l10n.textObject.digitalFormatting,
      required: false,
      value: this.state.textObject.valueGenerateObjectText.numericFormatElement,
      _handleChange: this.onChangeValueGenerateObjectTextFormatageNumeriqueTextObject
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: l10n.textObject.mesureUnit,
      name: "mesureUnityTextObject",
      placeholder: l10n.textObject.unit,
      required: false,
      value: this.state.textObject.valueGenerateObjectText.unit,
      _handleChange: this.onChangeValueGenerateObjectTextunit
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: l10n.textObject.objectDisplayTextTooltip,
      checked: this.state.textObject.valueGenerateObjectText.displayObjectInText,
      onChange: this.onSwitchValueGenerateObjectTextDisplayObjectInText
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: l10n.textObject.colorText,
      checked: this.state.textObject.valueGenerateObjectText.addColorTextElement,
      onChange: this.onSwitchValueGenerateObjectTextAddColorTextElement
    }), this.state.textObject.valueGenerateObjectText.addColorTextElement && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: this.state.textObject.valueGenerateObjectText.colorTextElement,
      keyInt: 0,
      text: l10n.textObject.colorTextOptional,
      _onChange: this.onChangeValueGenerateObjectTextColorTextElement
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: l10n.textObject.backgroundColor,
      checked: this.state.textObject.valueGenerateObjectText.addColorBackElement,
      onChange: this.onSwitchValueGenerateObjectTextAddColorBackElement
    }), this.state.textObject.valueGenerateObjectText.addColorBackElement && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: this.state.textObject.valueGenerateObjectText.colorBackElement,
      keyInt: 0,
      text: l10n.textObject.optionalBackgroundColor,
      _onChange: this.onChangeValueGenerateObjectTextColorBackElement
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, l10n.textObject.auxiliaryElement), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: l10n.textObject.legend,
      name: "legendTextObject",
      placeholder: l10n.textObject.legend,
      required: false,
      value: this.state.textObject.generateAuxiliaryElement.legendElement,
      _handleChange: this.onChangeLegendElement
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: l10n.textObject.digitalFormatting,
      name: "formatageNumeriqueTextObject",
      placeholder: l10n.textObject.digitalFormatting,
      required: false,
      value: this.state.textObject.generateAuxiliaryElement.numericFormatElement,
      _handleChange: this.onChangeFormatageNumeriqueTextObject
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputText__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: l10n.textObject.mesureUnit,
      name: "mesureUnityTextObject",
      placeholder: l10n.textObject.unit,
      required: false,
      value: this.state.textObject.generateAuxiliaryElement.unit,
      _handleChange: this.onChangeunit
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: l10n.textObject.objectDisplayTextTooltip,
      checked: this.state.textObject.generateAuxiliaryElement.displayObjectInText,
      onChange: this.onSwitchDisplayObjectInText
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: l10n.textObject.colorText,
      checked: this.state.textObject.generateAuxiliaryElement.addColorTextElement,
      onChange: this.onSwitchAddColorTextElement
    }), this.state.textObject.generateAuxiliaryElement.addColorTextElement && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: this.state.textObject.generateAuxiliaryElement.colorTextElement,
      keyInt: 0,
      text: l10n.textObject.colorTextOptional,
      _onChange: this.onChangeColorTextElement
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: l10n.textObject.backgroundColor,
      checked: this.state.textObject.generateAuxiliaryElement.addColorBackElement,
      onChange: this.onSwitchAddColorBackElement
    }), this.state.textObject.generateAuxiliaryElement.addColorBackElement && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSeriesColorPicker__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: this.state.textObject.generateAuxiliaryElement.colorBackElement,
      keyInt: 0,
      text: l10n.textObject.optionalBackgroundColor,
      _onChange: this.onChangeColorBackElement
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)));
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
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Functions_EditParameter_editGoodParameter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Functions/EditParameter/editGoodParameter */ "./Functions/EditParameter/editGoodParameter.tsx");




/**
 * initialize space for space coordinate
 */

var CoordinateSpaceInitialClass =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CoordinateSpaceInitialClass, _super);

  function CoordinateSpaceInitialClass(props) {
    var _this = _super.call(this, props) || this;
    /**
     * Call parent to send arrayCoor data
     */


    _this.callBack = function () {
      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        coordinateSpaceInitial: _this.state.arrayCoor
      }));
    };
    /** change value for switch */


    _this.onChangeSwitchDisplayInitialSpace = function () {
      var newDisplayInitial = _this.state.arrayCoor;
      newDisplayInitial.displayArea = !newDisplayInitial.displayArea;

      _this.setState({
        arrayCoor: newDisplayInitial
      });

      _this.callBack();
    };

    _this.state = {
      arrayCoor: _this.props.options.coordinateSpaceInitial
    };
    return _this;
  }
  /**
   * Use function if value input change
   * @param {string} currentTarget new value of input
   * @param {string} name name of input
   */


  CoordinateSpaceInitialClass.prototype._handleChange = function (currentTarget, name) {
    this.setState({
      arrayCoor: Object(Functions_EditParameter_editGoodParameter__WEBPACK_IMPORTED_MODULE_3__["editGoodParameter"])(name, this.state.arrayCoor, currentTarget)
    });
    this.callBack();
  };
  /**
   * Get value of input with state.arrayCoor
   * @param {number} id id of element
   * @param {string} param name of input
   * @returns {string} value of the array element
   */


  CoordinateSpaceInitialClass.prototype.getGoodValue = function (id, param) {
    var value;
    value = '';

    if (param.startsWith('positionXMin')) {
      value = this.state.arrayCoor.coordinate.xMin;
    } else if (param.startsWith('positionXMax')) {
      value = this.state.arrayCoor.coordinate.xMax;
    } else if (param.startsWith('positionYMin')) {
      value = this.state.arrayCoor.coordinate.yMin;
    } else if (param.startsWith('positionYMax')) {
      value = this.state.arrayCoor.coordinate.yMax;
    }

    return value;
  };
  /**
   * HTML render
   */


  CoordinateSpaceInitialClass.prototype.render = function () {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "coordinateSpaceInitial"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: "Display space initial",
      checked: this.state.arrayCoor.displayArea,
      onChange: this.onChangeSwitchDisplayInitialSpace
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "xMin",
      labelWidth: 10,
      inputWidth: 20,
      type: "text",
      required: true,
      name: "xMin",
      value: this.state.arrayCoor.coordinate.xMin,
      onChange: function onChange(event) {
        return _this._handleChange(event.currentTarget.value, 'positionXMin');
      },
      placeholder: 'X minimum'
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "X max",
      labelWidth: 10,
      inputWidth: 20,
      type: "text",
      required: true,
      name: "xMax",
      value: this.state.arrayCoor.coordinate.xMax,
      onChange: function onChange(event) {
        return _this._handleChange(event.currentTarget.value, 'positionXMax');
      },
      placeholder: 'X max'
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Y min",
      labelWidth: 10,
      inputWidth: 20,
      type: "text",
      required: true,
      name: "yMin",
      value: this.state.arrayCoor.coordinate.yMin,
      onChange: function onChange(event) {
        return _this._handleChange(event.currentTarget.value, 'positionYMin');
      },
      placeholder: 'Y minimum'
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Y max",
      labelWidth: 10,
      inputWidth: 20,
      type: "text",
      required: true,
      name: "yMax",
      value: this.state.arrayCoor.coordinate.yMax,
      onChange: function onChange(event) {
        return _this._handleChange(event.currentTarget.value, 'positionYMax');
      },
      placeholder: 'Y max'
    }));
  };

  return CoordinateSpaceInitialClass;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CoordinateSpaceInitialClass);

/***/ }),

/***/ "./components/display.tsx":
/*!********************************!*\
  !*** ./components/display.tsx ***!
  \********************************/
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
/* harmony import */ var _Parametrage_styleComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Parametrage/styleComponent */ "./components/Parametrage/styleComponent.tsx");





/**
 * class to manage police, size and style
 */

var Display =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Display, _super);

  function Display(props) {
    var _this = _super.call(this, props) || this;
    /**
     * call parent with new data
     */


    _this.callParent = function () {
      var _a = _this.state,
          newPolice = _a.newPolice,
          size = _a.size,
          style = _a.style;
      var pPolice = newPolice.value || '';
      var pSize = size;
      var pStyle = style;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        display: {
          police: pPolice,
          size: pSize,
          style: pStyle
        }
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
     * set size state async
     */


    _this.setStateAsyncsize = function (state) {
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


    _this.handleChangesize = function (event) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , this.setStateAsyncsize({
                size: event.target.value
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
    }; // /**
    //  * edit style
    //  */
    // handleChangeStyle = async (event: {
    //   /** target to input element */
    //   target: HTMLInputElement;
    // }) => {
    //   await this.setStateAsyncStyle({
    //     style: event.target.value,
    //   });
    //   this.callParent();
    // };

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


    _this.onImageChanged = function (e) {
      var newBaseMap = _this.props.options.baseMap;
      newBaseMap.image = e.target.value;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        baseMap: newBaseMap
      })); // this.props.onOptionsChange({ ...this.props.options, imageUrl: event.target.value });

    };
    /** edit modeSVG */


    _this.onChangeSwitchModeSVG = function () {
      var _a = _this.props,
          options = _a.options,
          onOptionsChange = _a.onOptionsChange;
      var oldValue = options.baseMap;
      oldValue.modeSVG = !oldValue.modeSVG;
      onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        baseMap: oldValue
      }));
    };
    /** edit modeSVG */


    _this.onChangeHeightBaseMap = function (e) {
      var _a = _this.props,
          options = _a.options,
          onOptionsChange = _a.onOptionsChange;
      var oldValue = options.baseMap;
      oldValue.height = e.target.value;
      onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        baseMap: oldValue
      }));
    };
    /** edit modeSVG */


    _this.onChangeWidthBaseMap = function (e) {
      var _a = _this.props,
          options = _a.options,
          onOptionsChange = _a.onOptionsChange;
      var oldValue = options.baseMap;
      oldValue.width = e.target.value;
      onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        baseMap: oldValue
      }));
    };

    _this.saveStyleData = function (style) {
      _this.setStateAsyncStyle({
        style: style
      });
    };

    _this.state = {
      newPolice: {
        value: _this.props.options.display.police,
        label: _this.props.options.display.police
      },
      size: _this.props.options.display.size,
      style: _this.props.options.display.style
    };
    return _this;
  }
  /**
   * html
   */


  Display.prototype.render = function () {
    var options = this.props.options;
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

    var l10n = __webpack_require__(/*! Localization/en.json */ "./Localization/en.json");

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      style: {
        verticalAlign: 'middle'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], null, "Police")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Functions_Input_inputSelect__WEBPACK_IMPORTED_MODULE_3__["default"], {
      _onChange: this.onChangePolice,
      data: police,
      defaultValue: this.state.newPolice
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: l10n.textDefault.size,
      labelWidth: 10,
      inputWidth: 15,
      required: true,
      value: this.state.size,
      onChange: this.handleChangesize
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Parametrage_styleComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
      oldStyle: this.state.style,
      saveParent: this.saveStyleData
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: "Use SVG",
      checked: options.baseMap.modeSVG,
      onChange: this.onChangeSwitchModeSVG
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: 'Image',
      labelWidth: 10,
      inputWidth: 30,
      type: "text",
      onChange: this.onImageChanged,
      value: options.baseMap.image || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Width",
      labelWidth: 10,
      inputWidth: 30,
      type: "text",
      onChange: this.onChangeWidthBaseMap,
      value: options.baseMap.width || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Height",
      labelWidth: 10,
      inputWidth: 30,
      type: "text",
      onChange: this.onChangeHeightBaseMap,
      value: options.baseMap.height || ''
    })));
  };

  return Display;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Display);

/***/ }),

/***/ "./components/importInput.tsx":
/*!************************************!*\
  !*** ./components/importInput.tsx ***!
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
/* harmony import */ var _Models_PointClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/PointClass */ "./Models/PointClass.tsx");
/* harmony import */ var Models_RegionClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Models/RegionClass */ "./Models/RegionClass.tsx");
/* harmony import */ var _Models_OrientedLinkClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Models/OrientedLinkClass */ "./Models/OrientedLinkClass.tsx");
/* harmony import */ var _Functions_importConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Functions/importConfig */ "./Functions/importConfig.tsx");
/* harmony import */ var _Models_dropZone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Models/dropZone */ "./Models/dropZone.tsx");


 //import /*pointClassImport, regionClassImport, multiPointClassImport, multiRegionClassImport */ '../../config/testVariable';






/*
 * TODO
 */

var ImportInput =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ImportInput, _super);

  function ImportInput(props) {
    var _this = _super.call(this, props) || this;

    _this.result = [];
    _this.totalResult = [];
    /**************************************FETCH******************************************/
    // fetchMono = () => {
    //     console.log(this.props.options.saveImportUrl.mono)
    //     this.result = fetchConfFile(this.props.options.saveImportUrl.mono);
    // }

    /**************************************CATCH******************************************/

    _this.PointValidator = function (newSpace) {
      var resultId = true;
      var resultTarget = 1;

      _this.props.options.arrayPoints.forEach(function (point) {
        var _a;

        if (newSpace.id === point.id) {
          console.error('Id of point named "' + newSpace.name + '" already given fail to load!');
          resultId = false;
        }

        (_a = _this.props.data.request) === null || _a === void 0 ? void 0 : _a.targets.forEach(function (target) {
          resultTarget = 0;
        });

        if (resultTarget === 1) {
          console.error('Warning you load a point named "' + newSpace.name + '" without refId you can\'t get data!');
        }
      });

      return resultId;
    };

    _this.RegionValidator = function (newSpace) {
      var resultId = 0;

      _this.props.options.regionCoordinateSpace.forEach(function (region) {
        //Id
        if (newSpace.id === region.id) {
          if (newSpace.label === region.label) {
            resultId = 2;
          } else {
            console.error('Id of region labeled "' + newSpace.label + '" already given, fail to load!');
            resultId = 1;
          }
        }
      });

      return resultId;
    };

    _this.LinkValidator = function (newSpace) {
      var resultId = true;
      var resultTarget = 1;

      _this.props.options.arrayOrientedLinks.forEach(function (lien) {
        var _a;

        if (newSpace.id === lien.id) {
          console.error('Id of link named "' + newSpace.name + '" already given, fail to load!');
          resultId = false;
        }

        (_a = _this.props.data.request) === null || _a === void 0 ? void 0 : _a.targets.forEach(function (target) {
          if (target.refId === newSpace.mainMetric.refId) {
            resultTarget = 0;
          }
        });

        if (resultTarget === 1) {
          console.error('Warning you load a link named "' + newSpace.name + '"  without refId you can\'t get data!');
        }
      });

      return resultId;
    };

    _this.UrlValidator = function (url) {
      var result = true;

      for (var savedUrl in _this.props.options.saveImportUrl.multi) {
        if (savedUrl === url) {
          result = false;
          break;
        }
      }

      return result;
    };
    /**************************************LOADER******************************************/
    // Mono
    //Looking for a update after Point rework


    _this.loadMonoPoint = function (point) {
      var toLoad = new _Models_PointClass__WEBPACK_IMPORTED_MODULE_3__["PointClass"](point.id, point.linkURL, point.meta, point.lowerLimit, point.label, point.textObj, point.mainMetric, point.metrics, point.colorMode, point.traceBack, point.traceBorder, point.positionParameter, point.name, point.valueMetric, point.drawGraphicMarker, point.shape, point.sizeWidth, point.sizeHeight, point.rotateArrow, point.positionShapeX, point.positionShapeY, point.color, point.associateOrientedLinksIn, point.associateOrientedLinksOut);
      console.log(toLoad); // Do some test here to see if your already load a coordinatespace with this id

      if (_this.PointValidator(toLoad) === true) {
        _this.props.options.arrayPoints.push(toLoad);
      }
    };

    _this.reagionUpdate = function (updatedRegion) {
      _this.props.options.regionCoordinateSpace.forEach(function (region, index) {
        //Id
        if (updatedRegion.id === region.id) {
          if (updatedRegion.label === region.label) {
            _this.props.options.regionCoordinateSpace[index] = updatedRegion;

            _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
              regionCoordinateSpace: _this.props.options.regionCoordinateSpace
            }));
          }
        }
      });
    }; //Looking for a update after Region rework


    _this.loadMonoRegion = function (region) {
      var toLoad = new Models_RegionClass__WEBPACK_IMPORTED_MODULE_4__["RegionClass"](region.id, region.linkURL, region.meta, region.lowerLimit, region.label, region.textObj, region.mainMetric, region.metrics, region.colorMode, region.traceBack, region.traceBorder, region.positionParameter, region.idSVG, region.orientedLink, region.coords, region.mode, region.img);
      console.log(toLoad); // Do some test here to see if your already load a coordinatespace with this id

      var selector = _this.RegionValidator(toLoad);

      if (selector === 0) {
        _this.props.options.regionCoordinateSpace.push(toLoad);
      }

      if (selector === 2) {
        _this.reagionUpdate(toLoad);
      }
    };

    _this.loadMonoLink = function (link) {
      var toLoad = new _Models_OrientedLinkClass__WEBPACK_IMPORTED_MODULE_5__["OrientedLinkClass"](link.id, link.linkURL, link.meta, link.lowerLimit, link.label, link.textObj, link.mainMetric, link.metrics, link.colorMode, link.traceBack, link.traceBorder, link.positionParameter, link.name, link.orientationLink, link.pointAPositionX, link.pointAPositionY, link.colorCoordinateA, link.pointBPositionX, link.pointBPositionY, link.colorCoordinateB, link.valueMainMetricA, link.valueMainMetricB, link.pointIn, link.pointOut, link.regionIn, link.regionOut, link.zIndex, link.pointCPositionX, link.pointCPositionY, link.isIncurved, link.mainMetricB, link.metricsB);
      console.log(toLoad); // Do some test here to see if your already load a coordinatespace with this id

      if (_this.LinkValidator(toLoad) === true) {
        _this.props.options.arrayOrientedLinks.push(toLoad);
      }
    }; //Multi


    _this.loadMultiPoints = function (points) {
      points.points.forEach(function (point) {
        _this.loadMonoPoint(point);
      });
    };

    _this.loadMultiRegions = function (regions) {
      regions.regions.forEach(function (region) {
        _this.loadMonoRegion(region);
      });
    };

    _this.loadMultiLinks = function (links) {
      links.links.forEach(function (link) {
        _this.loadMonoLink(link);
      });
    }; //Total


    _this.loadTotal = function (panel) {
      //console.log(panel.imageUrl);
      _this.props.options.baseMap = panel.baseMap;
      _this.props.options.display.police = panel.texteSettings.police;
      _this.props.options.display.size = panel.texteSettings.size;
      _this.props.options.display.style = panel.texteSettings.styleText;
      _this.props.options.coordinateSpaceInitial = panel.texteSettings.coordinateSpaceInitial;
      panel.regions.forEach(function (url) {
        if (_this.UrlValidator(url) === true) {
          _this.props.options.saveImportUrl.multi.push(url);
        }
      });
      panel.points.forEach(function (url) {
        if (_this.UrlValidator(url) === true) {
          _this.props.options.saveImportUrl.multi.push(url);
        }
      });
      panel.links.forEach(function (url) {
        if (_this.UrlValidator(url) === true) {
          _this.props.options.saveImportUrl.multi.push(url);
        }
      });

      _this.fetchMulti();

      console.log('load total');
    };

    _this.loaderTotal = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var response, file, error_1;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 3,, 4]);

              return [4
              /*yield*/
              , fetch(this.props.options.totalUrlInput)];

            case 1:
              response = _a.sent();
              return [4
              /*yield*/
              , response.json()];

            case 2:
              file = _a.sent();
              this.loadTotal(file);
              return [3
              /*break*/
              , 4];

            case 3:
              error_1 = _a.sent();
              console.error(error_1);
              return [3
              /*break*/
              , 4];

            case 4:
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.fetchTotal = function () {
      _this.totalResult = Object(_Functions_importConfig__WEBPACK_IMPORTED_MODULE_6__["fetchConfFile"])(_this.props.options.saveImportUrl.total);
      console.log('downloadTotal');
    }; // loaderSelector = () => {
    //     // this.loadMultiRegions(multiRegionClassImport);
    // 	// console.table(this.props.options.arrayCoordinateSpace);
    // 	this.result.forEach(file => {
    // 		if (file.hasOwnProperty('regions')){
    //             this.loadMultiRegions(file);
    //             console.log('Load Region');
    //         }
    //         if (file.hasOwnProperty('points')){
    //             this.loadMultiPoints(file);
    //             console.log('Load Point');
    //         }
    //         if (file.hasOwnProperty('links')){
    //             this.loadMultiLinks(file);
    //             console.log('Load Links');
    // 		}
    // 	});
    // }


    _this.fetchMulti = function () {
      //this.result = fetchConfFile(this.props.options.saveImportUrl.multi);
      _this.props.options.saveImportUrl.multi.forEach(function (url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
          var file, response, error_2;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
              case 0:
                _a.trys.push([0, 3,, 4]);

                console.log(url);
                file = {};
                console.log(file);
                return [4
                /*yield*/
                , fetch(url)];

              case 1:
                response = _a.sent();
                return [4
                /*yield*/
                , response.json()];

              case 2:
                file = _a.sent();

                if (file.hasOwnProperty('regions')) {
                  this.loadMultiRegions(file);
                  console.log('Load Region');
                }

                if (file.hasOwnProperty('points')) {
                  this.loadMultiPoints(file);
                  console.log('Load Point');
                }

                if (file.hasOwnProperty('links')) {
                  //console.log(file);
                  this.loadMultiLinks(file);
                  console.log('Load Links');
                }

                return [3
                /*break*/
                , 4];

              case 3:
                error_2 = _a.sent();
                console.error(error_2);
                return [3
                /*break*/
                , 4];

              case 4:
                return [2
                /*return*/
                ];
            }
          });
        });
      });
    };
    /**************************************INPUT******************************************/


    _this.onToggleTotalUrl = function (isOpen) {
      _this.setState({
        collapseTotalUrl: isOpen
      });
    };

    _this.onToggleMultiUrl = function (isOpen) {
      _this.setState({
        collapseMultiUrl: isOpen
      });
    };

    _this.onToggleMultiUpload = function (isOpen) {
      _this.setState({
        collapseMultiUpload: isOpen
      });
    }; // public onToggleMonoUrl = (isOpen: boolean): void => {
    // 	this.setState({
    // 		collapseMonoUrl: isOpen,
    // 	});
    // }


    _this.saveUrl = function (url, mode) {
      // if (mode === 0){
      //     this.props.options.saveImportUrl.mono.push(url);
      // }
      if (mode === 1) {
        _this.props.options.saveImportUrl.multi.push(url);
      }

      if (mode === 2) {
        _this.props.options.saveImportUrl.total.push(url);
      }
    };

    _this.onTotalUrlChanged = function (event) {
      var newData = '';
      newData = event.currentTarget.value;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        totalUrlInput: newData
      }));
    };

    _this.onTotalListUrlChanged = function (event) {
      var newData = _this.props.options.saveImportUrl.total.slice();

      newData[parseInt(event.currentTarget.id, 10)] = event.currentTarget.value;
      _this.props.options.saveImportUrl.total = newData;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        saveImportUrl: _this.props.options.saveImportUrl
      }));
    };

    _this.onMultiUrlChanged = function (event) {
      var newData = '';
      newData = event.currentTarget.value;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        multiUrlInput: newData
      }));
    };

    _this.onMultiListUrlChanged = function (event) {
      var newData = _this.props.options.saveImportUrl.multi.slice();

      newData[parseInt(event.currentTarget.id, 10)] = event.currentTarget.value;
      _this.props.options.saveImportUrl.multi = newData;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        saveImportUrl: _this.props.options.saveImportUrl
      }));
    }; // onMonoUrlChanged = (event: { currentTarget: HTMLInputElement }) => {
    // 	let newData: string = '';
    // 	newData = event.currentTarget.value;
    // 	this.props.onOptionsChange({ ...this.props.options, monoUrlInput: newData });
    // }
    // onMonoListUrlChanged = (event: {currentTarget: HTMLInputElement}) => {
    //     let newData: string[] = this.props.options.saveImportUrl.mono.slice();
    //     newData[parseInt(event.currentTarget.id, 10)] = event.currentTarget.value;
    //     this.props.options.saveImportUrl.mono = newData;
    //     this.props.onOptionsChange({...this.props.options, saveImportUrl: this.props.options.saveImportUrl})
    // }


    _this.addTotalUrlInput = function (onClick) {
      _this.props.options.saveImportUrl.total.push(_this.props.options.totalUrlInput);

      _this.props.options.totalUrlInput = '';

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        saveImportUrl: _this.props.options.saveImportUrl
      }));
    };

    _this.addMultiUrlInput = function (onClick) {
      _this.props.options.saveImportUrl.multi.push(_this.props.options.multiUrlInput);

      _this.props.options.multiUrlInput = '';

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        saveImportUrl: _this.props.options.saveImportUrl
      }));
    }; // addMonoUrlInput = (onClick: { currentTarget: HTMLButtonElement }) => {
    //     this.props.options.saveImportUrl.mono.push(this.props.options.monoUrlInput);
    //     this.props.options.monoUrlInput = '';
    //     this.props.onOptionsChange({ ...this.props.options, saveImportUrl: this.props.options.saveImportUrl})
    // }


    _this.totalDeletUrl = function (onClick) {
      var isUrl = function isUrl(url) {
        return url === _this.props.options.saveImportUrl.total[parseInt(onClick.currentTarget.id, 10)];
      };

      _this.props.options.saveImportUrl.total.splice(_this.props.options.saveImportUrl.total.findIndex(isUrl), 1);

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        saveImportUrl: _this.props.options.saveImportUrl
      }));
    };

    _this.multiDeletUrl = function (onClick) {
      var isUrl = function isUrl(url) {
        return url === _this.props.options.saveImportUrl.multi[parseInt(onClick.currentTarget.id, 10)];
      };

      _this.props.options.saveImportUrl.multi.splice(_this.props.options.saveImportUrl.multi.findIndex(isUrl), 1);

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        saveImportUrl: _this.props.options.saveImportUrl
      }));
    }; // monoDeletUrl = (onClick: { currentTarget: HTMLButtonElement}) => {
    //     const isUrl = (url: string) => url === this.props.options.saveImportUrl.mono[parseInt(onClick.currentTarget.id, 10)];
    //     this.props.options.saveImportUrl.mono.splice(this.props.options.saveImportUrl.mono.findIndex(isUrl), 1);
    //     this.props.onOptionsChange({...this.props.options, saveImportUrl: this.props.options.saveImportUrl});
    // }


    _this.tempo = function () {
      console.log(_this.props.options.saveImportUrl);
    };

    _this.totalUrlDisplay = function (props) {
      if (props.list.total.lenght !== 0) {
        var list = props.list.total.map(function (url, index) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            key: 'TotalUrlDiv' + index.toString(),
            style: {
              display: 'flex'
            }
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
            id: index.toString(),
            key: 'TotalUrl' + index.toString(),
            label: 'Url',
            labelWidth: 5,
            inputWidth: 20,
            onChange: _this.onTotalListUrlChanged.bind(_this),
            type: "string",
            value: url || ''
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            variant: "danger",
            id: index.toString(),
            key: 'ButtunDel' + index.toString(),
            onClick: _this.totalDeletUrl.bind(_this)
          }, "Del"));
        });
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, list);
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "No targets avalaible");
    };

    _this.multiUrlDisplay = function (props) {
      if (props.list.multi.lenght !== 0) {
        var list = props.list.multi.map(function (url, index) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            key: 'MultiUrlDiv' + index.toString(),
            style: {
              display: 'flex'
            }
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
            id: index.toString(),
            key: 'MultiUrl' + index.toString(),
            label: 'Url',
            labelWidth: 5,
            inputWidth: 20,
            onChange: _this.onMultiListUrlChanged.bind(_this),
            type: "string",
            value: url || ''
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            variant: "danger",
            id: index.toString(),
            key: 'ButtunDel' + index.toString(),
            onClick: _this.multiDeletUrl.bind(_this)
          }, "Del"));
        });
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, list);
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "No targets avalaible");
    }; // monoUrlDisplay = (props: any): JSX.Element => {
    // 	if (props.list.multi.lenght !== 0) {
    // 		const list = props.list.mono.map((url: string, index: number) =>
    // 			<div key={'MonoUrlDiv' + index.toString()}>
    //                 <FormField id={index.toString()} key={'MonoUrl' + index.toString()}
    // 					label={'Url'} labelWidth={5}
    // 					inputWidth={20} onChange={this.onMonoListUrlChanged.bind(this)} type='string' value={url || ''} />
    // 				<Button variant='danger' id={index.toString()} key={'ButtunDel' + index.toString()}
    // 					onClick={this.monoDeletUrl.bind(this)}>Del</Button>
    // 			</div>
    // 		);
    // 		return (
    // 			<div>{list}</div>
    // 		);
    // 	}
    // 	return (<div>No targets avalaible</div>);
    // }


    _this.delAll = function () {
      // this.props.options.arrayCoordinateSpace = [];
      // this.props.options.arrayOrientedLinks = [];
      // this.props.options.arrayPoints = [];
      _this.props.options.saveImportUrl.total = [];
      _this.props.options.saveImportUrl.multi = []; // this.props.options.saveImportUrl.mono = [];

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        saveImportUrl: _this.props.options.saveImportUrl
      }));
    };

    _this.toDel = function () {
      console.log(_this.props.options.saveImportUrl.multi);
      console.log(_this.props.options.arrayPoints);
    };

    _this.state = {
      collapseTotalUrl: false,
      collapseMultiUrl: false,
      // collapseMonoUrl: false,
      collapseMultiUpload: true
    };
    return _this;
  }

  ImportInput.prototype.render = function () {
    var options = this.props.options;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.collapseTotalUrl,
      label: "Global Url Import",
      onToggle: this.onToggleTotalUrl
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Total Url",
      labelWidth: 8,
      key: 'TotalUrl',
      inputWidth: 20,
      onChange: this.onTotalUrlChanged.bind(this),
      type: "string",
      value: options.totalUrlInput || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "section gf-form-group"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: this.loaderTotal
    }, "Finish"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(this.totalUrlDisplay, {
      list: options.saveImportUrl
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.collapseMultiUrl,
      label: "Multi Url Import",
      onToggle: this.onToggleMultiUrl
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Multi Url",
      labelWidth: 8,
      key: 'MultiUrl',
      inputWidth: 20,
      onChange: this.onMultiUrlChanged.bind(this),
      type: "string",
      value: options.multiUrlInput || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: 'AddMultiUrl',
      onClick: this.addMultiUrlInput
    }, "Add"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "section gf-form-group"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: this.fetchMulti
    }, "Finish"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(this.multiUrlDisplay, {
      list: options.saveImportUrl
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.collapseMultiUpload,
      label: "Multi Local Import",
      onToggle: this.onToggleMultiUpload
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Models_dropZone__WEBPACK_IMPORTED_MODULE_7__["default"], {
      options: this.props.options,
      onOptionsChange: this.props.onOptionsChange,
      data: this.props.data
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "section gf-form-group"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: 'delAll',
      onClick: this.delAll
    }, "Del all urls")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: this.toDel
    }, "toDel"));
  };

  return ImportInput;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ImportInput);

/***/ }),

/***/ "./components/legend.tsx":
/*!*******************************!*\
  !*** ./components/legend.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * def
 */

var LegendComponent =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LegendComponent, _super);

  function LegendComponent(props) {
    var _this = _super.call(this, props) || this;
    /** async state */


    _this.setStateAsyncFinalHTML = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /** fill lowerlimit in JSX.Element */


    _this.fillLowerLimit = function (lowerLimit) {
      var e_1, _a;

      var allLimit = [];

      try {
        for (var lowerLimit_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(lowerLimit), lowerLimit_1_1 = lowerLimit_1.next(); !lowerLimit_1_1.done; lowerLimit_1_1 = lowerLimit_1.next()) {
          var lower = lowerLimit_1_1.value;
          allLimit.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
            className: "LegendMatt"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            style: {
              padding: 4,
              margin: 9,
              width: '3.5rem',
              borderRadius: '39%',
              backgroundColor: lower.backColor,
              border: lower.sizeBorder + 'px solid ' + lower.borderColor,
              listStyleType: 'none',
              display: 'inline-block'
            }
          }), lowerLimit.length > 1 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            style: {
              display: 'inline-block',
              verticalAlign: 'middle',
              marginBottom: '1.25rem',
              fontSize: '9px'
            }
          }, lower.lowerLimitMin, " - ", lower.lowerLimitMax)));
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

      return allLimit;
    };
    /** get all lower limit for region */


    _this.fillRegion = function () {
      var e_2, _a;

      var allRegion = _this.props.options.regionCoordinateSpace;
      var rendu = [];

      try {
        for (var allRegion_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(allRegion), allRegion_1_1 = allRegion_1.next(); !allRegion_1_1.done; allRegion_1_1 = allRegion_1.next()) {
          var line = allRegion_1_1.value;

          var allLimit = _this.fillLowerLimit(line.lowerLimit);

          var ownElement = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, line.label, allLimit);
          rendu.push(ownElement);
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (allRegion_1_1 && !allRegion_1_1.done && (_a = allRegion_1["return"])) _a.call(allRegion_1);
        } finally {
          if (e_2) throw e_2.error;
        }
      }

      return rendu;
    };
    /** get all limit for point */


    _this.fillPoint = function () {
      var e_3, _a;

      var allPoint = _this.props.options.arrayPoints;
      var rendu = [];

      try {
        for (var allPoint_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(allPoint), allPoint_1_1 = allPoint_1.next(); !allPoint_1_1.done; allPoint_1_1 = allPoint_1.next()) {
          var line = allPoint_1_1.value;

          var allLimit = _this.fillLowerLimit(line.lowerLimit);

          var ownElement = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, line.label, allLimit);
          rendu.push(ownElement);
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (allPoint_1_1 && !allPoint_1_1.done && (_a = allPoint_1["return"])) _a.call(allPoint_1);
        } finally {
          if (e_3) throw e_3.error;
        }
      }

      return rendu;
    };
    /** generate legend */


    _this.renduState = function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var value;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              value = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                style: {
                  position: 'relative',
                  left: this.state.legend.x,
                  top: this.state.legend.y,
                  maxWidth: '100%',
                  zIndex: 'auto'
                },
                hidden: this.state.legend.hiddenLegend
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
                style: {
                  width: '250px',
                  position: 'absolute',
                  overflowY: 'scroll',
                  margin: '0',
                  height: '170px',
                  backgroundColor: '#212124',
                  color: '#d8d9da',
                  border: '4px solid #299c46',
                  borderRadius: '4px',
                  scrollbarColor: '#09090b #212124',
                  scrollbarWidth: 'thin',
                  zIndex: 9999
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
                className: "fa fa-close",
                onClick: this.props.callBack
              }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                style: {
                  backgroundImage: 'linear-gradient(90deg, rgb(41, 42, 45), rgb(0, 0, 0))'
                }
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                style: {
                  fontSize: '15px',
                  marginLeft: '14px',
                  fontWeight: 'bold'
                }
              }, "Region")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
                key: Math.random().toString()
              }, this.fillRegion()), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                style: {
                  backgroundImage: 'linear-gradient(90deg, rgb(41, 42, 45), rgb(0, 0, 0))'
                }
              }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
                style: {
                  fontSize: '15px',
                  marginLeft: '14px',
                  fontWeight: 'bold'
                }
              }, "Point")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
                key: Math.random().toString()
              }, this.fillPoint())));
              return [4
              /*yield*/
              , this.setStateAsyncFinalHTML({
                finalHTML: value
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

    _this.setStateLegendAsync = function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, resolve);
      });
    };
    /** update when legend is edited */


    _this.componentDidUpdate = function (prevProps, prevState) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!(prevProps !== this.props || prevState.legend.hiddenLegend !== this.props.options.legend.hiddenLegend)) return [3
              /*break*/
              , 2];
              return [4
              /*yield*/
              , this.setStateLegendAsync({
                legend: this.props.options.legend
              })];

            case 1:
              _a.sent();

              this.renduState();
              _a.label = 2;

            case 2:
              return [2
              /*return*/
              ];
          }
        });
      });
    };
    /** fill state value when component is mounted */


    _this.componentDidMount = function () {
      _this.renduState();
    };

    _this.state = {
      finalHTML: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null),
      legend: _this.props.options.legend
    };
    return _this;
  }
  /**
   * result
   */


  LegendComponent.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.finalHTML);
  };

  return LegendComponent;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LegendComponent);

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
/* harmony import */ var Functions_CreateInput_createInputsOrientedLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Functions/CreateInput/createInputsOrientedLink */ "./Functions/CreateInput/createInputsOrientedLink.tsx");
/* harmony import */ var Functions_EditParameter_editGoodParameterOrientedLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Functions/EditParameter/editGoodParameterOrientedLink */ "./Functions/EditParameter/editGoodParameterOrientedLink.tsx");
/* harmony import */ var Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Models/TextObjectClass */ "./Models/TextObjectClass.tsx");
/* harmony import */ var Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Models/LinkURLClass */ "./Models/LinkURLClass.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Parametrage_parametresGeneriques__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Parametrage/parametresGeneriques */ "./components/Parametrage/parametresGeneriques.tsx");
/* harmony import */ var _Parametrage_manageLowerLimit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Parametrage/manageLowerLimit */ "./components/Parametrage/manageLowerLimit.tsx");
/* harmony import */ var Models_PositionParameterClass__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! Models/PositionParameterClass */ "./Models/PositionParameterClass.tsx");
/* harmony import */ var _Parametrage_positionParameters__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Parametrage/positionParameters */ "./components/Parametrage/positionParameters.tsx");
/* harmony import */ var _CoordinateSpace_manageQuery__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./CoordinateSpace/manageQuery */ "./components/CoordinateSpace/manageQuery.tsx");
/* harmony import */ var _CoordinateSpace_manageAuxiliaryQuery__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./CoordinateSpace/manageAuxiliaryQuery */ "./components/CoordinateSpace/manageAuxiliaryQuery.tsx");
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
    };

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
          _this.addInput(element.id, element.label, element.orientationLink, element.pointAPositionX, element.pointAPositionY, element.colorCoordinateA, element.pointBPositionX, element.pointBPositionY, element.colorCoordinateB, element.pointIn, element.pointOut, element.regionIn, element.regionOut, element.textObj, element.lowerLimit, element.positionParameter, element.pointCPositionX, element.pointCPositionY, element.isIncurved, element.mainMetric, element.metrics, element.mainMetricB, element.metricsB);
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


    _this.addInput = function (id, label, orientationLink, pointAPositionX, pointAPositionY, colorCoordinateA, pointBPositionX, pointBPositionY, colorCoordinateB, pointIn, pointOut, regionIn, regionOut, //refIdMainMetric?: string, keyMainMetric?: string, keyValueMainMetric?: string,
    textObj, seuil, positionParameter, pointCPositionX, pointCPositionY, isIncurved, mainMetrics, auxiliaryMetrics, mainMetricsB, auxiliaryMetricsB) {
      var num = id || _this.props.options.indexOrientedLink + 1;
      var zIndex = _this.props.options.zIndexOrientedLink;
      var finalArray = Object(Functions_CreateInput_createInputsOrientedLink__WEBPACK_IMPORTED_MODULE_8__["createInputsOrientedLink"])(num, _this.defineDataRegion(), _this.defineDataPoint());
      var initTextObject = textObj || new Models_TextObjectClass__WEBPACK_IMPORTED_MODULE_10__["TextObject"]('', false, '', '', {
        bold: false,
        italic: false,
        underline: false
      }, false, {
        legendElement: '',
        numericFormatElement: '',
        unit: '',
        displayObjectInText: false,
        // 'displayObjectPermanently': false,
        addColorTextElement: false,
        colorTextElement: 'white',
        addColorBackElement: false,
        colorBackElement: 'black'
      }, {
        legendElement: '',
        numericFormatElement: '',
        unit: '',
        displayObjectInText: false,
        // 'displayObjectPermanently': false,
        addColorTextElement: false,
        colorTextElement: 'white',
        addColorBackElement: false,
        colorBackElement: 'black'
      });
      var parametrageMetric = new Models_LinkURLClass__WEBPACK_IMPORTED_MODULE_11__["LinkURLClass"]('', '', '');
      var initPositionParameter = positionParameter || new Models_PositionParameterClass__WEBPACK_IMPORTED_MODULE_15__["PositionParameterClass"]('', '', '', '', {}, {});
      var initMainMetrics = mainMetrics || {
        key: '',
        unit: '',
        format: '',
        keyValue: '',
        refId: '',
        manageValue: 'avg'
      };
      var initMainMetricsB = mainMetricsB || {
        key: '',
        unit: '',
        format: '',
        keyValue: '',
        refId: '',
        manageValue: 'avg'
      };

      _this.setState(function (prevState) {
        return {
          arrayOrientedLinkClass: prevState.arrayOrientedLinkClass.concat(new Models_OrientedLinkClass__WEBPACK_IMPORTED_MODULE_7__["OrientedLinkClass"](num, parametrageMetric, '', seuil || [], label || '', initTextObject, // {
          // 	'key': keyMainMetric || '',
          // 	'unit': '',
          // 	'format': '',
          // 	'keyValue': keyValueMainMetric || '',
          // 	'refId': refIdMainMetric || '',
          // 	'manageValue': 'avg',
          // }
          initMainMetrics, auxiliaryMetrics || [], false, false, false, initPositionParameter, 'orientedLink' + num.toString(), orientationLink || {
            label: 'double',
            value: 'double'
          }, pointAPositionX || '0', pointAPositionY || '0', colorCoordinateA || '#5794F2', pointBPositionX || '0', pointBPositionY || '0', colorCoordinateB || '#E54658', '', '', pointIn || '', pointOut || '', regionIn || '', regionOut || '', zIndex, pointCPositionX || '0', pointCPositionY || '0', isIncurved || {}, initMainMetricsB, auxiliaryMetricsB || [])),
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

      _this.callBack();
    };
    /** save lower limit data */


    _this.callBackLowerLimit = function (lowerLimit, id) {
      var newValue = _this.state.arrayOrientedLinkClass[id || 0];
      newValue.lowerLimit = lowerLimit;
      _this.props.options.arrayOrientedLinks[id || 0] = newValue;

      _this.callBack();
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

    _this.callBackPositionParameter = function (positionParameter, id) {
      var orientedLinkToUpdate = _this.state.arrayOrientedLinkClass[id || 0];
      orientedLinkToUpdate.positionParameter = positionParameter;
      _this.props.options.arrayOrientedLinks[id || 0] = orientedLinkToUpdate;

      _this.callBack();
    };

    _this.callBackMainMetric = function (mainMetric, id) {
      var newValue = _this.state.arrayOrientedLinkClass[id || 0];
      newValue.mainMetric = mainMetric;
      _this.props.options.arrayOrientedLinks[id || 0] = newValue;

      _this.callBack();
    };

    _this.callBackAuxiliaryMetric = function (auxiliaryMetrics, id) {
      var newValue = _this.state.arrayOrientedLinkClass[id || 0];
      newValue.metrics = auxiliaryMetrics;
      _this.props.options.arrayOrientedLinks[id || 0] = newValue;

      _this.callBack();
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
    var regionCoordinateSpace = this.props.regionCoordinateSpace;
    var optionRegionNull = {
      label: 'No selected region'
    };
    var arrayOptionsRegion = [];
    arrayOptionsRegion.push(optionRegionNull);
    regionCoordinateSpace.forEach(function (region) {
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
          copyOfoldArrayOrientedLinkClass[i] = Object(Functions_EditParameter_editGoodParameterOrientedLink__WEBPACK_IMPORTED_MODULE_9__["editGoodParameterOrientedLink"])(name, copyOfoldArrayOrientedLinkClass[i], currentTarget, {});
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

    if (name.startsWith('orientationLink') || name.startsWith('isIncurved')) {
      if (name.startsWith('orientationLink')) {
        valueSelect = this.state.arrayOrientedLinkClass[idx].orientationLink;
      } else if (name.startsWith('isIncurved')) {
        valueSelect = this.state.arrayOrientedLinkClass[idx].isIncurved;
      }

      return valueSelect;
    } else if (name.startsWith('mainMetric')) {
      valueMetric = this.state.arrayOrientedLinkClass[idx].mainMetric;
      return valueMetric;
    } else {
      if (name.startsWith('label')) {
        value = this.state.arrayOrientedLinkClass[idx].label;
      } else if (name.startsWith('pointAX')) {
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
      } else if (name.startsWith('pointCX')) {
        value = this.state.arrayOrientedLinkClass[idx].pointCPositionX;
      } else if (name.startsWith('pointCY')) {
        value = this.state.arrayOrientedLinkClass[idx].pointCPositionY;
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

  OrientedLinkForm.prototype.defineLabelCollapse = function (id) {
    var label = this.getGoodValue(id, 'label');

    if (this.getGoodValue(id, 'label') === '') {
      label = 'OrientedLink ' + id.toString();
    }

    return label;
  };

  OrientedLinkForm.prototype.callBackZIndex = function (zIndexUpdated, id) {
    this.props.options.arrayOrientedLinks[id].zIndex = zIndexUpdated;
    this.callBack();
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
            },
            isIncurved: _this.getGoodValue(line.id, 'isIncurved')
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
                    copyOfoldArrayOrientedLinkClass[i] = Object(Functions_EditParameter_editGoodParameterOrientedLink__WEBPACK_IMPORTED_MODULE_9__["editGoodParameterOrientedLink"])(name, copyOfoldArrayOrientedLinkClass[i], value.value || '', value || {});
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
                    copyOfArrayOrientedLinkClass[i] = Object(Functions_EditParameter_editGoodParameterOrientedLink__WEBPACK_IMPORTED_MODULE_9__["editGoodParameterOrientedLink"])(obj.name, copyOfArrayOrientedLinkClass[i], newColor, {});
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
      var divKey = 'inputOrientedLink' + line.id.toString();
      var newInput = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: divKey,
        className: "inputCoor",
        id: 'orientedLink' + line.id.toString(),
        style: {
          display: 'flex',
          flexDirection: 'row',
          marginBottom: '5px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__["Collapse"], {
        isOpen: this_1.state.listCollapseOrientedLink[line.id - 1],
        label: this_1.defineLabelCollapse(line.id),
        onToggle: function onToggle(isOpen) {
          _this.props.options.listCollapseOrientedLink[line.id - 1] = isOpen;

          _this.setState({
            listCollapseOrientedLink: _this.props.options.listCollapseOrientedLink
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CoordinateSpace_manageQuery__WEBPACK_IMPORTED_MODULE_17__["default"], {
        options: this_1.props.options,
        idCoordinate: this_1.state.arrayOrientedLinkClass[index].id,
        onOptionsChange: this_1.props.onOptionsChange,
        data: this_1.props.data,
        mainMetric: this_1.state.arrayOrientedLinkClass[index].mainMetric,
        callBackToParent: this_1.callBackMainMetric,
        id: index,
        isLink: true
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CoordinateSpace_manageAuxiliaryQuery__WEBPACK_IMPORTED_MODULE_18__["default"], {
        options: this_1.props.options,
        idCoordinate: this_1.state.arrayOrientedLinkClass[index].id,
        onOptionsChange: this_1.props.onOptionsChange,
        data: this_1.props.data,
        metrics: this_1.state.arrayOrientedLinkClass[index].metrics,
        callBackToParent: this_1.callBackAuxiliaryMetric,
        id: index,
        isLink: true
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Parametrage_parametresGeneriques__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Parametrage_positionParameters__WEBPACK_IMPORTED_MODULE_16__["default"], {
        options: this_1.props.options,
        onOptionsChange: this_1.props.onOptionsChange,
        data: this_1.props.data,
        coordinateSpace: this_1.state.arrayOrientedLinkClass[index],
        callBackToParent: this_1.callBackPositionParameter,
        callBackToParentZIndex: this_1.callBackZIndex.bind(this_1),
        isPoint: false,
        isLink: true,
        isRegion: false,
        id: index,
        orientedLink: this_1.state.arrayOrientedLinkClass[index]
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

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, finalItem);
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

    var stylePositionButton = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.generateInputsOrientedLinks(), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: stylePositionButton
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
    }, "Load Oriented Links")));
  };

  return OrientedLinkForm;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (OrientedLinkForm);

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
var defaults = {
  legend: {
    hiddenLegend: true,
    x: 0,
    y: 0
  },
  baseMap: {
    image: '',
    layerImage: '',
    modeSVG: true,
    width: '',
    height: '',
    idSVG: ''
  },
  // imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/be/Locator_Grid.png',
  coordinateSpaceInitial: {
    coordinate: {
      xMin: '-100',
      xMax: '100',
      yMin: '-100',
      yMax: '100'
    },
    displayArea: true
  },
  displayButton: false,
  regionCoordinateSpace: [],
  arrayPoints: [],
  arrayLinks: [],
  arrayOrientedLinks: [],
  display: {
    police: 'Helvetica',
    size: '1em',
    style: {
      italic: false,
      bold: false,
      underline: false
    }
  },
  fondIsActive: true,
  contourIsActive: true,
  lowerLimit: [],
  colorMode: true,
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
    expr: ''
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
  listCollapseOrientedLink: [],
  saveImportUrl: {
    total: [],
    multi: [],
    mono: []
  },
  saveImportFile: [],
  totalUrlInput: '',
  multiUrlInput: '',
  monoUrlInput: '',
  zIndexOrientedLink: 1,
  orientedLinkToUpgrade: {},
  orientedLinkToDowngrade: {},
  checkIndexMultiLink: 0
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