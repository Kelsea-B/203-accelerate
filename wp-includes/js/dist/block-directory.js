this["wp"] = this["wp"] || {}; this["wp"]["blockDirectory"] =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
<<<<<<< HEAD
/******/ 	return __webpack_require__(__webpack_require__.s = 447);
=======
/******/ 	return __webpack_require__(__webpack_require__.s = 474);
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

<<<<<<< HEAD
(function() { module.exports = window["wp"]["element"]; }());
=======
(function() { module.exports = this["wp"]["element"]; }());
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

<<<<<<< HEAD
(function() { module.exports = window["wp"]["i18n"]; }());
=======
(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f

/***/ }),

/***/ 11:
<<<<<<< HEAD
=======
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ 12:
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _slicedToArray; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
var arrayWithHoles = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
var nonIterableRest = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return Object(arrayWithHoles["a" /* default */])(arr) || _iterableToArrayLimit(arr, i) || Object(unsupportedIterableToArray["a" /* default */])(arr, i) || Object(nonIterableRest["a" /* default */])();
}

/***/ }),

<<<<<<< HEAD
/***/ 12:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ 13:
=======
/***/ 14:
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });
<<<<<<< HEAD
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
=======
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

<<<<<<< HEAD
/***/ 135:
=======
/***/ 141:
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
<<<<<<< HEAD
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
=======
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */

/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps} props icon is the SVG component to render
 *                          size is a number specifiying the icon size in pixels
 *                          Other props will be passed to wrapped SVG component
 *
 * @return {JSX.Element}  Icon component
 */

function Icon(_ref) {
  var icon = _ref.icon,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["icon", "size"]);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["cloneElement"])(icon, _objectSpread({
    width: size,
    height: size
  }, props));
}

/* harmony default export */ __webpack_exports__["a"] = (Icon);


/***/ }),

<<<<<<< HEAD
/***/ 15:
=======
/***/ 17:
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _toConsumableArray; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
<<<<<<< HEAD
var arrayLikeToArray = __webpack_require__(24);
=======
var arrayLikeToArray = __webpack_require__(27);
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(arrayLikeToArray["a" /* default */])(arr);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
var iterableToArray = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || Object(iterableToArray["a" /* default */])(arr) || Object(unsupportedIterableToArray["a" /* default */])(arr) || _nonIterableSpread();
}

/***/ }),

<<<<<<< HEAD
/***/ 16:
/***/ (function(module, exports) {

(function() { module.exports = window["regeneratorRuntime"]; }());

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ 213:
=======
/***/ 2:
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

(function() { module.exports = this["regeneratorRuntime"]; }());

/***/ }),

/***/ 207:
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var blockDefault = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M19 8h-1V6h-5v2h-2V6H6v2H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm.5 10c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-8c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v8z"
}));
/* harmony default export */ __webpack_exports__["a"] = (blockDefault);


/***/ }),

<<<<<<< HEAD
/***/ 24:
=======
/***/ 27:
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

<<<<<<< HEAD
/***/ 272:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["editPost"]; }());

/***/ }),

/***/ 297:
=======
/***/ 276:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["editPost"]; }());

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ 302:
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var starFilled = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z"
}));
/* harmony default export */ __webpack_exports__["a"] = (starFilled);


/***/ }),

<<<<<<< HEAD
/***/ 298:
=======
/***/ 303:
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var starEmpty = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fillRule: "evenodd",
  d: "M9.706 8.646a.25.25 0 01-.188.137l-4.626.672a.25.25 0 00-.139.427l3.348 3.262a.25.25 0 01.072.222l-.79 4.607a.25.25 0 00.362.264l4.138-2.176a.25.25 0 01.233 0l4.137 2.175a.25.25 0 00.363-.263l-.79-4.607a.25.25 0 01.072-.222l3.347-3.262a.25.25 0 00-.139-.427l-4.626-.672a.25.25 0 01-.188-.137l-2.069-4.192a.25.25 0 00-.448 0L9.706 8.646zM12 7.39l-.948 1.921a1.75 1.75 0 01-1.317.957l-2.12.308 1.534 1.495c.412.402.6.982.503 1.55l-.362 2.11 1.896-.997a1.75 1.75 0 011.629 0l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["a"] = (starEmpty);


/***/ }),

<<<<<<< HEAD
/***/ 3:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

=======
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _unsupportedIterableToArray; });
<<<<<<< HEAD
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
=======
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
}

/***/ }),

<<<<<<< HEAD
/***/ 33:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["hooks"]; }());
=======
/***/ 32:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["dataControls"]; }());

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["hooks"]; }());
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

<<<<<<< HEAD
(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ 44:
=======
(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ 43:
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

<<<<<<< HEAD
/***/ 447:
=======
/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["a11y"]; }());

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["apiFetch"]; }());

/***/ }),

/***/ 474:
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

<<<<<<< HEAD
// EXPORTS
__webpack_require__.d(__webpack_exports__, "store", function() { return /* reexport */ store; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-directory/build-module/store/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "isRequestingDownloadableBlocks", function() { return selectors_isRequestingDownloadableBlocks; });
=======
// NAMESPACE OBJECT: ./node_modules/@wordpress/block-directory/build-module/store/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "isRequestingDownloadableBlocks", function() { return isRequestingDownloadableBlocks; });
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
__webpack_require__.d(selectors_namespaceObject, "getDownloadableBlocks", function() { return selectors_getDownloadableBlocks; });
__webpack_require__.d(selectors_namespaceObject, "getInstalledBlockTypes", function() { return getInstalledBlockTypes; });
__webpack_require__.d(selectors_namespaceObject, "getNewBlockTypes", function() { return getNewBlockTypes; });
__webpack_require__.d(selectors_namespaceObject, "getUnusedBlockTypes", function() { return getUnusedBlockTypes; });
<<<<<<< HEAD
__webpack_require__.d(selectors_namespaceObject, "isInstalling", function() { return selectors_isInstalling; });
__webpack_require__.d(selectors_namespaceObject, "getErrorNotices", function() { return getErrorNotices; });
__webpack_require__.d(selectors_namespaceObject, "getErrorNoticeForBlock", function() { return selectors_getErrorNoticeForBlock; });
=======
__webpack_require__.d(selectors_namespaceObject, "isInstalling", function() { return isInstalling; });
__webpack_require__.d(selectors_namespaceObject, "getErrorNotices", function() { return getErrorNotices; });
__webpack_require__.d(selectors_namespaceObject, "getErrorNoticeForBlock", function() { return getErrorNoticeForBlock; });
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f

// NAMESPACE OBJECT: ./node_modules/@wordpress/block-directory/build-module/store/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "fetchDownloadableBlocks", function() { return fetchDownloadableBlocks; });
__webpack_require__.d(actions_namespaceObject, "receiveDownloadableBlocks", function() { return receiveDownloadableBlocks; });
__webpack_require__.d(actions_namespaceObject, "installBlockType", function() { return actions_installBlockType; });
__webpack_require__.d(actions_namespaceObject, "uninstallBlockType", function() { return actions_uninstallBlockType; });
__webpack_require__.d(actions_namespaceObject, "addInstalledBlockType", function() { return addInstalledBlockType; });
__webpack_require__.d(actions_namespaceObject, "removeInstalledBlockType", function() { return removeInstalledBlockType; });
__webpack_require__.d(actions_namespaceObject, "setIsInstalling", function() { return setIsInstalling; });
__webpack_require__.d(actions_namespaceObject, "setErrorNotice", function() { return setErrorNotice; });
__webpack_require__.d(actions_namespaceObject, "clearErrorNotice", function() { return clearErrorNotice; });

<<<<<<< HEAD
// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external ["wp","plugins"]
var external_wp_plugins_ = __webpack_require__(73);

// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__(33);

// EXTERNAL MODULE: external ["wp","blocks"]
var external_wp_blocks_ = __webpack_require__(9);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(4);
=======
// EXTERNAL MODULE: external {"this":["wp","notices"]}
var external_this_wp_notices_ = __webpack_require__(94);
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(5);

<<<<<<< HEAD
// EXTERNAL MODULE: external ["wp","dataControls"]
var external_wp_dataControls_ = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(15);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);
=======
// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(4);

// EXTERNAL MODULE: external {"this":["wp","dataControls"]}
var external_this_wp_dataControls_ = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(17);

// EXTERNAL MODULE: external {"this":"lodash"}
var external_this_lodash_ = __webpack_require__(2);
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/reducer.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Reducer returning an array of downloadable blocks.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

var reducer_downloadableBlocks = function downloadableBlocks() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'FETCH_DOWNLOADABLE_BLOCKS':
      return _objectSpread(_objectSpread({}, state), {}, Object(defineProperty["a" /* default */])({}, action.filterValue, {
        isRequesting: true
      }));

    case 'RECEIVE_DOWNLOADABLE_BLOCKS':
      return _objectSpread(_objectSpread({}, state), {}, Object(defineProperty["a" /* default */])({}, action.filterValue, {
        results: action.downloadableBlocks,
        isRequesting: false
      }));
  }

  return state;
};
/**
 * Reducer managing the installation and deletion of blocks.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

var reducer_blockManagement = function blockManagement() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    installedBlockTypes: [],
    isInstalling: {}
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_INSTALLED_BLOCK_TYPE':
      return _objectSpread(_objectSpread({}, state), {}, {
        installedBlockTypes: [].concat(Object(toConsumableArray["a" /* default */])(state.installedBlockTypes), [action.item])
      });

    case 'REMOVE_INSTALLED_BLOCK_TYPE':
      return _objectSpread(_objectSpread({}, state), {}, {
        installedBlockTypes: state.installedBlockTypes.filter(function (blockType) {
          return blockType.name !== action.item.name;
        })
      });

    case 'SET_INSTALLING_BLOCK':
      return _objectSpread(_objectSpread({}, state), {}, {
        isInstalling: _objectSpread(_objectSpread({}, state.isInstalling), {}, Object(defineProperty["a" /* default */])({}, action.blockId, action.isInstalling))
      });
  }

  return state;
};
/**
 * Reducer returning an object of error notices.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

var reducer_errorNotices = function errorNotices() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_ERROR_NOTICE':
      return _objectSpread(_objectSpread({}, state), {}, Object(defineProperty["a" /* default */])({}, action.blockId, {
        message: action.message,
        isFatal: action.isFatal
      }));

    case 'CLEAR_ERROR_NOTICE':
<<<<<<< HEAD
      return Object(external_lodash_["omit"])(state, action.blockId);
=======
      return Object(external_this_lodash_["omit"])(state, action.blockId);
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
  }

  return state;
};
<<<<<<< HEAD
/* harmony default export */ var reducer = (Object(external_wp_data_["combineReducers"])({
=======
/* harmony default export */ var reducer = (Object(external_this_wp_data_["combineReducers"])({
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
  downloadableBlocks: reducer_downloadableBlocks,
  blockManagement: reducer_blockManagement,
  errorNotices: reducer_errorNotices
}));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/utils/has-block-type.js
/**
 * Check if a block list contains a specific block type. Recursively searches
 * through `innerBlocks` if they exist.
 *
 * @param {Object} blockType A block object to search for.
 * @param {Object[]} blocks  The list of blocks to look through.
 *
 * @return {boolean} Whether the blockType is found.
 */
function hasBlockType(blockType) {
  var blocks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!blocks.length) {
    return false;
  }

  if (blocks.some(function (_ref) {
    var name = _ref.name;
    return name === blockType.name;
  })) {
    return true;
  }

  for (var i = 0; i < blocks.length; i++) {
    if (hasBlockType(blockType, blocks[i].innerBlocks)) {
      return true;
    }
  }

  return false;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/selectors.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/**
 * Returns true if application is requesting for downloadable blocks.
 *
 * @param {Object} state       Global application state.
 * @param {string} filterValue Search string.
 *
 * @return {boolean} Whether a request is in progress for the blocks list.
 */

<<<<<<< HEAD
function selectors_isRequestingDownloadableBlocks(state, filterValue) {
=======
function isRequestingDownloadableBlocks(state, filterValue) {
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
  if (!state.downloadableBlocks[filterValue] || !state.downloadableBlocks[filterValue].isRequesting) {
    return false;
  }

  return state.downloadableBlocks[filterValue].isRequesting;
}
/**
 * Returns the available uninstalled blocks.
 *
 * @param {Object} state       Global application state.
 * @param {string} filterValue Search string.
 *
 * @return {Array} Downloadable blocks.
 */

function selectors_getDownloadableBlocks(state, filterValue) {
  if (!state.downloadableBlocks[filterValue] || !state.downloadableBlocks[filterValue].results) {
    return [];
  }

  return state.downloadableBlocks[filterValue].results;
}
/**
 * Returns the block types that have been installed on the server in this
 * session.
 *
 * @param {Object} state Global application state.
 *
 * @return {Array} Block type items
 */

function getInstalledBlockTypes(state) {
  return state.blockManagement.installedBlockTypes;
}
/**
 * Returns block types that have been installed on the server and used in the
 * current post.
 *
 * @param {Object} state Global application state.
 *
 * @return {Array} Block type items.
 */

<<<<<<< HEAD
var getNewBlockTypes = Object(external_wp_data_["createRegistrySelector"])(function (select) {
=======
var getNewBlockTypes = Object(external_this_wp_data_["createRegistrySelector"])(function (select) {
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
  return function (state) {
    var usedBlockTree = select('core/block-editor').getBlocks();
    var installedBlockTypes = getInstalledBlockTypes(state);
    return installedBlockTypes.filter(function (blockType) {
      return hasBlockType(blockType, usedBlockTree);
    });
  };
});
/**
 * Returns the block types that have been installed on the server but are not
 * used in the current post.
 *
 * @param {Object} state Global application state.
 *
 * @return {Array} Block type items.
 */

<<<<<<< HEAD
var getUnusedBlockTypes = Object(external_wp_data_["createRegistrySelector"])(function (select) {
=======
var getUnusedBlockTypes = Object(external_this_wp_data_["createRegistrySelector"])(function (select) {
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
  return function (state) {
    var usedBlockTree = select('core/block-editor').getBlocks();
    var installedBlockTypes = getInstalledBlockTypes(state);
    return installedBlockTypes.filter(function (blockType) {
      return !hasBlockType(blockType, usedBlockTree);
    });
  };
});
/**
 * Returns true if a block plugin install is in progress.
 *
 * @param {Object} state   Global application state.
 * @param {string} blockId Id of the block.
 *
 * @return {boolean} Whether this block is currently being installed.
 */

<<<<<<< HEAD
function selectors_isInstalling(state, blockId) {
=======
function isInstalling(state, blockId) {
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
  return state.blockManagement.isInstalling[blockId] || false;
}
/**
 * Returns all block error notices.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} Object with error notices.
 */

function getErrorNotices(state) {
  return state.errorNotices;
}
/**
 * Returns the error notice for a given block.
 *
 * @param {Object} state   Global application state.
 * @param {string} blockId The ID of the block plugin. eg: my-block
 *
 * @return {string|boolean} The error text, or false if no error.
 */

<<<<<<< HEAD
function selectors_getErrorNoticeForBlock(state, blockId) {
  return state.errorNotices[blockId];
}

// EXTERNAL MODULE: external "regeneratorRuntime"
var external_regeneratorRuntime_ = __webpack_require__(16);
var external_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_regeneratorRuntime_);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(1);

// EXTERNAL MODULE: external ["wp","notices"]
var external_wp_notices_ = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(47);

// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__(50);
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);
=======
function getErrorNoticeForBlock(state, blockId) {
  return state.errorNotices[blockId];
}

// EXTERNAL MODULE: external {"this":"regeneratorRuntime"}
var external_this_regeneratorRuntime_ = __webpack_require__(20);
var external_this_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_this_regeneratorRuntime_);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(45);

// EXTERNAL MODULE: external {"this":["wp","apiFetch"]}
var external_this_wp_apiFetch_ = __webpack_require__(47);
var external_this_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_this_wp_apiFetch_);
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/controls.js



<<<<<<< HEAD
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

=======
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
/**
 * WordPress dependencies
 */

/**
 * Load an asset for a block.
 *
 * This function returns a Promise that will resolve once the asset is loaded,
<<<<<<< HEAD
 * or in the case of Stylesheets and Inline JavaScript, will resolve immediately.
=======
 * or in the case of Stylesheets and Inline Javascript, will resolve immediately.
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
 *
 * @param {HTMLElement} el A HTML Element asset to inject.
 *
 * @return {Promise} Promise which will resolve when the asset is loaded.
 */

var loadAsset = function loadAsset(el) {
  return new Promise(function (resolve, reject) {
    /*
     * Reconstruct the passed element, this is required as inserting the Node directly
     * won't always fire the required onload events, even if the asset wasn't already loaded.
     */
    var newNode = document.createElement(el.nodeName);
    ['id', 'rel', 'src', 'href', 'type'].forEach(function (attr) {
      if (el[attr]) {
        newNode[attr] = el[attr];
      }
    }); // Append inline <script> contents.

    if (el.innerHTML) {
      newNode.appendChild(document.createTextNode(el.innerHTML));
    }

    newNode.onload = function () {
      return resolve(true);
    };

    newNode.onerror = function () {
      return reject(new Error('Error loading asset.'));
    };

    document.body.appendChild(newNode); // Resolve Stylesheets and Inline JavaScript immediately.

    if ('link' === newNode.nodeName.toLowerCase() || 'script' === newNode.nodeName.toLowerCase() && !newNode.src) {
      resolve();
    }
  });
};
/**
 * Load the asset files for a block
 *
 * @param {Array} assets A collection of URLs for the assets.
 *
 * @return {Object} Control descriptor.
 */

function loadAssets(assets) {
  return {
    type: 'LOAD_ASSETS',
    assets: assets
  };
}
var controls = {
  LOAD_ASSETS: function LOAD_ASSETS() {
<<<<<<< HEAD
    return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function _callee() {
      var response, data, doc, newAssets, _iterator, _step, newAsset;

      return external_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return external_wp_apiFetch_default()({
                url: document.location.href,
                parse: false
              });

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.text();

            case 5:
              data = _context.sent;
              doc = new window.DOMParser().parseFromString(data, 'text/html');
              newAssets = Array.from(doc.querySelectorAll('link[rel="stylesheet"],script')).filter(function (asset) {
                return asset.id && !document.getElementById(asset.id);
              });
              /*
               * Load each asset in order, as they may depend upon an earlier loaded script.
               * Stylesheets and Inline Scripts will resolve immediately upon insertion.
               */

              _iterator = _createForOfIteratorHelper(newAssets);
              _context.prev = 9;

              _iterator.s();

            case 11:
              if ((_step = _iterator.n()).done) {
                _context.next = 17;
                break;
              }

              newAsset = _step.value;
              _context.next = 15;
              return loadAsset(newAsset);

            case 15:
              _context.next = 11;
              break;

            case 17:
              _context.next = 22;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](9);

              _iterator.e(_context.t0);

            case 22:
              _context.prev = 22;

              _iterator.f();

              return _context.finish(22);

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[9, 19, 22, 25]]);
    }))();
=======
    /*
     * Fetch the current URL (post-new.php, or post.php?post=1&action=edit) and compare the
     * Javascript and CSS assets loaded between the pages. This imports the required assets
     * for the block into the current page while not requiring that we know them up-front.
     * In the future this can be improved by reliance upon block.json and/or a script-loader
     * dependancy API.
     */
    return external_this_wp_apiFetch_default()({
      url: document.location.href,
      parse: false
    }).then(function (response) {
      return response.text();
    }).then(function (data) {
      var doc = new window.DOMParser().parseFromString(data, 'text/html');
      var newAssets = Array.from(doc.querySelectorAll('link[rel="stylesheet"],script')).filter(function (asset) {
        return asset.id && !document.getElementById(asset.id);
      });
      return new Promise( /*#__PURE__*/function () {
        var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/external_this_regeneratorRuntime_default.a.mark(function _callee(resolve, reject) {
          var i;
          return external_this_regeneratorRuntime_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.t0 = external_this_regeneratorRuntime_default.a.keys(newAssets);

                case 1:
                  if ((_context.t1 = _context.t0()).done) {
                    _context.next = 13;
                    break;
                  }

                  i = _context.t1.value;
                  _context.prev = 3;
                  _context.next = 6;
                  return loadAsset(newAssets[i]);

                case 6:
                  _context.next = 11;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t2 = _context["catch"](3);
                  reject(_context.t2);

                case 11:
                  _context.next = 1;
                  break;

                case 13:
                  resolve();

                case 14:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[3, 8]]);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    });
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
  }
};
/* harmony default export */ var store_controls = (controls);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/utils/get-plugin-url.js
/**
 * Get the plugin's direct API link out of a block-directory response.
 *
 * @param {Object} block The block object
 *
 * @return {string} The plugin URL, if exists.
 */
function getPluginUrl(block) {
  if (!block) {
    return false;
  }

  var link = block.links['wp:plugin'] || block.links.self;

  if (link && link.length) {
    return link[0].href;
  }

  return false;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/actions.js



<<<<<<< HEAD
var _marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(actions_installBlockType),
    _marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(actions_uninstallBlockType);
=======
var _marked = /*#__PURE__*/external_this_regeneratorRuntime_default.a.mark(actions_installBlockType),
    _marked2 = /*#__PURE__*/external_this_regeneratorRuntime_default.a.mark(actions_uninstallBlockType);
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f

function actions_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function actions_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { actions_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { actions_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */


<<<<<<< HEAD



=======
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
/**
 * Internal dependencies
 */



/**
 * Returns an action object used in signalling that the downloadable blocks
 * have been requested and are loading.
 *
 * @param {string} filterValue Search string.
 *
 * @return {Object} Action object.
 */

function fetchDownloadableBlocks(filterValue) {
  return {
    type: 'FETCH_DOWNLOADABLE_BLOCKS',
    filterValue: filterValue
  };
}
/**
 * Returns an action object used in signalling that the downloadable blocks
 * have been updated.
 *
 * @param {Array}  downloadableBlocks Downloadable blocks.
 * @param {string} filterValue        Search string.
 *
 * @return {Object} Action object.
 */

function receiveDownloadableBlocks(downloadableBlocks, filterValue) {
  return {
    type: 'RECEIVE_DOWNLOADABLE_BLOCKS',
    downloadableBlocks: downloadableBlocks,
    filterValue: filterValue
  };
}
/**
 * Action triggered to install a block plugin.
 *
 * @param {Object} block The block item returned by search.
 *
 * @return {boolean} Whether the block was successfully installed & loaded.
 */

function actions_installBlockType(block) {
  var id, assets, success, url, links, response, registeredBlocks, message, isFatal, fatalAPIErrors;
<<<<<<< HEAD
  return external_regeneratorRuntime_default.a.wrap(function installBlockType$(_context) {
=======
  return external_this_regeneratorRuntime_default.a.wrap(function installBlockType$(_context) {
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = block.id, assets = block.assets;
          success = false;
          _context.next = 4;
          return clearErrorNotice(id);

        case 4:
          _context.prev = 4;
          _context.next = 7;
          return setIsInstalling(block.id, true);

        case 7:
          // If we have a wp:plugin link, the plugin is installed but inactive.
          url = getPluginUrl(block);
          links = {};

          if (!url) {
            _context.next = 14;
            break;
          }

          _context.next = 12;
<<<<<<< HEAD
          return Object(external_wp_dataControls_["apiFetch"])({
=======
          return Object(external_this_wp_dataControls_["apiFetch"])({
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
            url: url,
            data: {
              status: 'active'
            },
            method: 'PUT'
          });

        case 12:
          _context.next = 18;
          break;

        case 14:
          _context.next = 16;
<<<<<<< HEAD
          return Object(external_wp_dataControls_["apiFetch"])({
=======
          return Object(external_this_wp_dataControls_["apiFetch"])({
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
            path: 'wp/v2/plugins',
            data: {
              slug: block.id,
              status: 'active'
            },
            method: 'POST'
          });

        case 16:
          response = _context.sent;
          // Add the `self` link for newly-installed blocks.
          links = response._links;

        case 18:
          _context.next = 20;
          return addInstalledBlockType(actions_objectSpread(actions_objectSpread({}, block), {}, {
            links: actions_objectSpread(actions_objectSpread({}, block.links), links)
          }));

        case 20:
          _context.next = 22;
          return loadAssets(assets);

        case 22:
          _context.next = 24;
<<<<<<< HEAD
          return external_wp_data_["controls"].select(external_wp_blocks_["store"].name, 'getBlockTypes');
=======
          return Object(external_this_wp_dataControls_["select"])('core/blocks', 'getBlockTypes');
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f

        case 24:
          registeredBlocks = _context.sent;

<<<<<<< HEAD
          if (registeredBlocks.some(function (i) {
            return i.name === block.name;
          })) {
=======
          if (!(!registeredBlocks.length || !registeredBlocks.filter(function (i) {
            return i.name === block.name;
          }).length)) {
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
            _context.next = 27;
            break;
          }

<<<<<<< HEAD
          throw new Error(Object(external_wp_i18n_["__"])('Error registering block. Try reloading the page.'));
=======
          throw new Error(Object(external_this_wp_i18n_["__"])('Error registering block. Try reloading the page.'));
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f

        case 27:
          success = true;
          _context.next = 38;
          break;

        case 30:
          _context.prev = 30;
          _context.t0 = _context["catch"](4);
<<<<<<< HEAD
          message = _context.t0.message || Object(external_wp_i18n_["__"])('An error occurred.'); // Errors we throw are fatal
=======
          message = _context.t0.message || Object(external_this_wp_i18n_["__"])('An error occurred.'); // Errors we throw are fatal
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f

          isFatal = _context.t0 instanceof Error; // Specific API errors that are fatal

          fatalAPIErrors = {
<<<<<<< HEAD
            folder_exists: Object(external_wp_i18n_["__"])('This block is already installed. Try reloading the page.'),
            unable_to_connect_to_filesystem: Object(external_wp_i18n_["__"])('Error installing block. You can reload the page and try again.')
=======
            folder_exists: Object(external_this_wp_i18n_["__"])('This block is already installed. Try reloading the page.'),
            unable_to_connect_to_filesystem: Object(external_this_wp_i18n_["__"])('Error installing block. You can reload the page and try again.')
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
          };

          if (fatalAPIErrors[_context.t0.code]) {
            isFatal = true;
            message = fatalAPIErrors[_context.t0.code];
          }

          _context.next = 38;
          return setErrorNotice(id, message, isFatal);

        case 38:
          _context.next = 40;
          return setIsInstalling(block.id, false);

        case 40:
          return _context.abrupt("return", success);

        case 41:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[4, 30]]);
}
/**
 * Action triggered to uninstall a block plugin.
 *
 * @param {Object} block The blockType object.
 */

function actions_uninstallBlockType(block) {
<<<<<<< HEAD
  return external_regeneratorRuntime_default.a.wrap(function uninstallBlockType$(_context2) {
=======
  return external_this_regeneratorRuntime_default.a.wrap(function uninstallBlockType$(_context2) {
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
<<<<<<< HEAD
          return Object(external_wp_dataControls_["apiFetch"])({
=======
          return Object(external_this_wp_dataControls_["apiFetch"])({
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
            url: getPluginUrl(block),
            data: {
              status: 'inactive'
            },
            method: 'PUT'
          });

        case 3:
          _context2.next = 5;
<<<<<<< HEAD
          return Object(external_wp_dataControls_["apiFetch"])({
=======
          return Object(external_this_wp_dataControls_["apiFetch"])({
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
            url: getPluginUrl(block),
            method: 'DELETE'
          });

        case 5:
          _context2.next = 7;
          return removeInstalledBlockType(block);

        case 7:
          _context2.next = 13;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 13;
<<<<<<< HEAD
          return external_wp_data_["controls"].dispatch(external_wp_notices_["store"], 'createErrorNotice', _context2.t0.message || Object(external_wp_i18n_["__"])('An error occurred.'));
=======
          return Object(external_this_wp_dataControls_["dispatch"])('core/notices', 'createErrorNotice', _context2.t0.message || Object(external_this_wp_i18n_["__"])('An error occurred.'));
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 9]]);
}
/**
 * Returns an action object used to add a block type to the "newly installed"
 * tracking list.
 *
 * @param {Object} item The block item with the block id and name.
 *
 * @return {Object} Action object.
 */

function addInstalledBlockType(item) {
  return {
    type: 'ADD_INSTALLED_BLOCK_TYPE',
    item: item
  };
}
/**
 * Returns an action object used to remove a block type from the "newly installed"
 * tracking list.
 *
 * @param {string} item The block item with the block id and name.
 *
 * @return {Object} Action object.
 */

function removeInstalledBlockType(item) {
  return {
    type: 'REMOVE_INSTALLED_BLOCK_TYPE',
    item: item
  };
}
/**
 * Returns an action object used to indicate install in progress.
 *
 * @param {string} blockId
 * @param {boolean} isInstalling
 *
 * @return {Object} Action object.
 */

function setIsInstalling(blockId, isInstalling) {
  return {
    type: 'SET_INSTALLING_BLOCK',
    blockId: blockId,
    isInstalling: isInstalling
  };
}
/**
 * Sets an error notice to be displayed to the user for a given block.
 *
 * @param {string} blockId  The ID of the block plugin. eg: my-block
 * @param {string} message  The message shown in the notice.
 * @param {boolean} isFatal Whether the user can recover from the error.
 *
 * @return {Object} Action object.
 */

function setErrorNotice(blockId, message) {
  var isFatal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return {
    type: 'SET_ERROR_NOTICE',
    blockId: blockId,
    message: message,
    isFatal: isFatal
  };
}
/**
 * Sets the error notice to empty for specific block.
 *
 * @param {string} blockId The ID of the block plugin. eg: my-block
 *
 * @return {Object} Action object.
 */

function clearErrorNotice(blockId) {
  return {
    type: 'CLEAR_ERROR_NOTICE',
    blockId: blockId
  };
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/resolvers.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/* harmony default export */ var resolvers = ({
<<<<<<< HEAD
  getDownloadableBlocks: /*#__PURE__*/external_regeneratorRuntime_default.a.mark(function getDownloadableBlocks(filterValue) {
    var results, blocks;
    return external_regeneratorRuntime_default.a.wrap(function getDownloadableBlocks$(_context) {
=======
  getDownloadableBlocks: /*#__PURE__*/external_this_regeneratorRuntime_default.a.mark(function getDownloadableBlocks(filterValue) {
    var results, blocks;
    return external_this_regeneratorRuntime_default.a.wrap(function getDownloadableBlocks$(_context) {
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (filterValue) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            _context.prev = 2;
            _context.next = 5;
            return fetchDownloadableBlocks(filterValue);

          case 5:
            _context.next = 7;
<<<<<<< HEAD
            return Object(external_wp_dataControls_["apiFetch"])({
=======
            return Object(external_this_wp_dataControls_["apiFetch"])({
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
              path: "wp/v2/block-directory/search?term=".concat(filterValue)
            });

          case 7:
            results = _context.sent;
            blocks = results.map(function (result) {
<<<<<<< HEAD
              return Object(external_lodash_["mapKeys"])(result, function (value, key) {
                return Object(external_lodash_["camelCase"])(key);
=======
              return Object(external_this_lodash_["mapKeys"])(result, function (value, key) {
                return Object(external_this_lodash_["camelCase"])(key);
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
              });
            });
            _context.next = 11;
            return receiveDownloadableBlocks(blocks, filterValue);

          case 11:
            _context.next = 15;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](2);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, getDownloadableBlocks, null, [[2, 13]]);
  })
});

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/store/index.js


function store_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function store_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { store_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { store_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */






/**
 * Module Constants
 */

<<<<<<< HEAD
var STORE_NAME = 'core/block-directory';
/**
 * Block editor data store configuration.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#registerStore
=======
var MODULE_KEY = 'core/block-directory';
/**
 * Block editor data store configuration.
 *
 * @see https://github.com/WordPress/gutenberg/blob/master/packages/data/README.md#registerStore
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
 *
 * @type {Object}
 */

var storeConfig = {
  reducer: reducer,
  selectors: selectors_namespaceObject,
  actions: actions_namespaceObject,
<<<<<<< HEAD
  controls: store_objectSpread(store_objectSpread({}, external_wp_dataControls_["controls"]), store_controls),
  resolvers: resolvers
};
/**
 * Store definition for the block directory namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */

var store = Object(external_wp_data_["createReduxStore"])(STORE_NAME, storeConfig);
Object(external_wp_data_["register"])(store);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/auto-block-uninstaller/index.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function AutoBlockUninstaller() {
  var _useDispatch = Object(external_wp_data_["useDispatch"])(store),
      uninstallBlockType = _useDispatch.uninstallBlockType;

  var shouldRemoveBlockTypes = Object(external_wp_data_["useSelect"])(function (select) {
=======
  controls: store_objectSpread(store_objectSpread({}, external_this_wp_dataControls_["controls"]), store_controls),
  resolvers: resolvers
};
var store = Object(external_this_wp_data_["registerStore"])(MODULE_KEY, storeConfig);
/* harmony default export */ var build_module_store = (store);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":["wp","plugins"]}
var external_this_wp_plugins_ = __webpack_require__(77);

// EXTERNAL MODULE: external {"this":["wp","hooks"]}
var external_this_wp_hooks_ = __webpack_require__(33);

// EXTERNAL MODULE: external {"this":["wp","blocks"]}
var external_this_wp_blocks_ = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/auto-block-uninstaller/index.js
/**
 * WordPress dependencies
 */



function AutoBlockUninstaller() {
  var _useDispatch = Object(external_this_wp_data_["useDispatch"])('core/block-directory'),
      uninstallBlockType = _useDispatch.uninstallBlockType;

  var shouldRemoveBlockTypes = Object(external_this_wp_data_["useSelect"])(function (select) {
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
    var _select = select('core/editor'),
        isAutosavingPost = _select.isAutosavingPost,
        isSavingPost = _select.isSavingPost;

    return isSavingPost() && !isAutosavingPost();
  }, []);
<<<<<<< HEAD
  var unusedBlockTypes = Object(external_wp_data_["useSelect"])(function (select) {
    return select(store).getUnusedBlockTypes();
  }, []);
  Object(external_wp_element_["useEffect"])(function () {
    if (shouldRemoveBlockTypes && unusedBlockTypes.length) {
      unusedBlockTypes.forEach(function (blockType) {
        uninstallBlockType(blockType);
        Object(external_wp_blocks_["unregisterBlockType"])(blockType.name);
=======
  var unusedBlockTypes = Object(external_this_wp_data_["useSelect"])(function (select) {
    return select('core/block-directory').getUnusedBlockTypes();
  }, []);
  Object(external_this_wp_element_["useEffect"])(function () {
    if (shouldRemoveBlockTypes && unusedBlockTypes.length) {
      unusedBlockTypes.forEach(function (blockType) {
        uninstallBlockType(blockType);
        Object(external_this_wp_blocks_["unregisterBlockType"])(blockType.name);
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
      });
    }
  }, [shouldRemoveBlockTypes]);
  return null;
}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
<<<<<<< HEAD
var slicedToArray = __webpack_require__(11);

// EXTERNAL MODULE: external ["wp","blockEditor"]
var external_wp_blockEditor_ = __webpack_require__(6);

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(12);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(3);

// EXTERNAL MODULE: external ["wp","a11y"]
var external_wp_a11y_ = __webpack_require__(48);
=======
var slicedToArray = __webpack_require__(12);

// EXTERNAL MODULE: external {"this":["wp","blockEditor"]}
var external_this_wp_blockEditor_ = __webpack_require__(6);

// EXTERNAL MODULE: external {"this":["wp","compose"]}
var external_this_wp_compose_ = __webpack_require__(10);

// EXTERNAL MODULE: external {"this":["wp","components"]}
var external_this_wp_components_ = __webpack_require__(3);

// EXTERNAL MODULE: external {"this":["wp","a11y"]}
var external_this_wp_a11y_ = __webpack_require__(46);
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/downloadable-block-author-info/index.js


/**
 * WordPress dependencies
 */



function DownloadableBlockAuthorInfo(_ref) {
  var author = _ref.author,
      authorBlockCount = _ref.authorBlockCount,
      authorBlockRating = _ref.authorBlockRating;
<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("span", {
    className: "block-directory-downloadable-block-author-info__content-author"
  }, Object(external_wp_i18n_["sprintf"])(
  /* translators: %s: author name. */
  Object(external_wp_i18n_["__"])('Authored by %s'), author)), Object(external_wp_element_["createElement"])("span", {
    className: "block-directory-downloadable-block-author-info__content"
  }, authorBlockRating > 0 ? Object(external_wp_i18n_["sprintf"])(
  /* translators: 1: number of blocks. 2: average rating. */
  Object(external_wp_i18n_["_n"])('This author has %1$d block, with an average rating of %2$.1f.', 'This author has %1$d blocks, with an average rating of %2$.1f.', authorBlockCount), authorBlockCount, authorBlockRating) : Object(external_wp_i18n_["sprintf"])(
  /* translators: 1: number of blocks. */
  Object(external_wp_i18n_["_n"])('This author has %1$d block.', 'This author has %1$d blocks.', authorBlockCount), authorBlockCount)));
=======
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])("span", {
    className: "block-directory-downloadable-block-author-info__content-author"
  }, Object(external_this_wp_i18n_["sprintf"])(
  /* translators: %s: author name. */
  Object(external_this_wp_i18n_["__"])('Authored by %s'), author)), Object(external_this_wp_element_["createElement"])("span", {
    className: "block-directory-downloadable-block-author-info__content"
  }, authorBlockRating > 0 ? Object(external_this_wp_i18n_["sprintf"])(
  /* translators: 1: number of blocks. 2: average rating. */
  Object(external_this_wp_i18n_["_n"])('This author has %1$d block, with an average rating of %2$.1f.', 'This author has %1$d blocks, with an average rating of %2$.1f.', authorBlockCount), authorBlockCount, authorBlockRating) : Object(external_this_wp_i18n_["sprintf"])(
  /* translators: 1: number of blocks. */
  Object(external_this_wp_i18n_["_n"])('This author has %1$d block.', 'This author has %1$d blocks.', authorBlockCount), authorBlockCount)));
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
}

/* harmony default export */ var downloadable_block_author_info = (DownloadableBlockAuthorInfo);

<<<<<<< HEAD
// EXTERNAL MODULE: external ["wp","htmlEntities"]
var external_wp_htmlEntities_ = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/icon/index.js
var build_module_icon = __webpack_require__(135);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/star-filled.js
var star_filled = __webpack_require__(297);

// EXTERNAL MODULE: external ["wp","primitives"]
var external_wp_primitives_ = __webpack_require__(7);
=======
// EXTERNAL MODULE: external {"this":["wp","htmlEntities"]}
var external_this_wp_htmlEntities_ = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/icon/index.js
var build_module_icon = __webpack_require__(141);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/star-filled.js
var star_filled = __webpack_require__(302);

// EXTERNAL MODULE: external {"this":["wp","primitives"]}
var external_this_wp_primitives_ = __webpack_require__(7);
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/star-half.js


/**
 * WordPress dependencies
 */

<<<<<<< HEAD
var starHalf = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
=======
var starHalf = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
  d: "M9.518 8.783a.25.25 0 00.188-.137l2.069-4.192a.25.25 0 01.448 0l2.07 4.192a.25.25 0 00.187.137l4.626.672a.25.25 0 01.139.427l-3.347 3.262a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.363.264l-4.137-2.176a.25.25 0 00-.233 0l-4.138 2.175a.25.25 0 01-.362-.263l.79-4.607a.25.25 0 00-.072-.222L4.753 9.882a.25.25 0 01.14-.427l4.625-.672zM12 14.533c.28 0 .559.067.814.2l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39v7.143z"
}));
/* harmony default export */ var star_half = (starHalf);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/star-empty.js
<<<<<<< HEAD
var star_empty = __webpack_require__(298);
=======
var star_empty = __webpack_require__(303);
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/block-ratings/stars.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




function Stars(_ref) {
  var rating = _ref.rating;
  var stars = Math.round(rating / 0.5) * 0.5;
  var fullStarCount = Math.floor(rating);
  var halfStarCount = Math.ceil(rating - fullStarCount);
  var emptyStarCount = 5 - (fullStarCount + halfStarCount);
<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])("div", {
    "aria-label": Object(external_wp_i18n_["sprintf"])(
    /* translators: %s: number of stars. */
    Object(external_wp_i18n_["__"])('%s out of 5 stars'), stars)
  }, Object(external_lodash_["times"])(fullStarCount, function (i) {
    return Object(external_wp_element_["createElement"])(build_module_icon["a" /* default */], {
=======
  return Object(external_this_wp_element_["createElement"])("div", {
    "aria-label": Object(external_this_wp_i18n_["sprintf"])(
    /* translators: %s: number of stars. */
    Object(external_this_wp_i18n_["__"])('%s out of 5 stars'), stars)
  }, Object(external_this_lodash_["times"])(fullStarCount, function (i) {
    return Object(external_this_wp_element_["createElement"])(build_module_icon["a" /* default */], {
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
      key: "full_stars_".concat(i),
      icon: star_filled["a" /* default */],
      size: 16
    });
<<<<<<< HEAD
  }), Object(external_lodash_["times"])(halfStarCount, function (i) {
    return Object(external_wp_element_["createElement"])(build_module_icon["a" /* default */], {
=======
  }), Object(external_this_lodash_["times"])(halfStarCount, function (i) {
    return Object(external_this_wp_element_["createElement"])(build_module_icon["a" /* default */], {
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
      key: "half_stars_".concat(i),
      icon: star_half,
      size: 16
    });
<<<<<<< HEAD
  }), Object(external_lodash_["times"])(emptyStarCount, function (i) {
    return Object(external_wp_element_["createElement"])(build_module_icon["a" /* default */], {
=======
  }), Object(external_this_lodash_["times"])(emptyStarCount, function (i) {
    return Object(external_this_wp_element_["createElement"])(build_module_icon["a" /* default */], {
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
      key: "empty_stars_".concat(i),
      icon: star_empty["a" /* default */],
      size: 16
    });
  }));
}

/* harmony default export */ var block_ratings_stars = (Stars);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/block-ratings/index.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


var block_ratings_BlockRatings = function BlockRatings(_ref) {
  var rating = _ref.rating,
      ratingCount = _ref.ratingCount;
<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])("div", {
    className: "block-directory-block-ratings"
  }, Object(external_wp_element_["createElement"])(block_ratings_stars, {
    rating: rating
  }), Object(external_wp_element_["createElement"])("span", {
    className: "block-directory-block-ratings__rating-count",
    "aria-label": Object(external_wp_i18n_["sprintf"])( // translators: %d: number of ratings (number).
    Object(external_wp_i18n_["_n"])('%d total rating', '%d total ratings', ratingCount), ratingCount)
=======
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "block-directory-block-ratings"
  }, Object(external_this_wp_element_["createElement"])(block_ratings_stars, {
    rating: rating
  }), Object(external_this_wp_element_["createElement"])("span", {
    className: "block-directory-block-ratings__rating-count",
    "aria-label": Object(external_this_wp_i18n_["sprintf"])( // translators: %d: number of ratings (number).
    Object(external_this_wp_i18n_["_n"])('%d total rating', '%d total ratings', ratingCount), ratingCount)
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
  }, "(", ratingCount, ")"));
};
/* harmony default export */ var block_ratings = (block_ratings_BlockRatings);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/downloadable-block-icon/index.js


/**
 * WordPress dependencies
 */



function DownloadableBlockIcon(_ref) {
  var icon = _ref.icon,
      title = _ref.title;
<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-block-icon"
  }, icon.match(/\.(jpeg|jpg|gif|png|svg)(?:\?.*)?$/) !== null ? Object(external_wp_element_["createElement"])("img", {
    src: icon,
    alt: Object(external_wp_i18n_["sprintf"])( // translators: %s: Name of the plugin e.g: "Akismet".
    Object(external_wp_i18n_["__"])('%s block icon'), title)
  }) : Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockIcon"], {
=======
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-block-icon"
  }, icon.match(/\.(jpeg|jpg|gif|png|svg)(?:\?.*)?$/) !== null ? Object(external_this_wp_element_["createElement"])("img", {
    src: icon,
    alt: Object(external_this_wp_i18n_["sprintf"])( // translators: %s: Name of the plugin e.g: "Akismet".
    Object(external_this_wp_i18n_["__"])('%s block icon'), title)
  }) : Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["BlockIcon"], {
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
    icon: icon,
    showColors: true
  }));
}

/* harmony default export */ var downloadable_block_icon = (DownloadableBlockIcon);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/downloadable-block-header/index.js


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




function DownloadableBlockHeader(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      rating = _ref.rating,
      ratingCount = _ref.ratingCount,
      _ref$isLoading = _ref.isLoading,
      isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
      _ref$isInstallable = _ref.isInstallable,
      isInstallable = _ref$isInstallable === void 0 ? true : _ref$isInstallable,
      _onClick = _ref.onClick;
<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-block-header__row"
  }, Object(external_wp_element_["createElement"])(downloadable_block_icon, {
    icon: icon,
    title: title
  }), Object(external_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-block-header__column"
  }, Object(external_wp_element_["createElement"])("h2", {
    className: "block-directory-downloadable-block-header__title"
  }, Object(external_wp_htmlEntities_["decodeEntities"])(title)), Object(external_wp_element_["createElement"])(block_ratings, {
    rating: rating,
    ratingCount: ratingCount
  })), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
=======
  return Object(external_this_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-block-header__row"
  }, Object(external_this_wp_element_["createElement"])(downloadable_block_icon, {
    icon: icon,
    title: title
  }), Object(external_this_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-block-header__column"
  }, Object(external_this_wp_element_["createElement"])("h2", {
    className: "block-directory-downloadable-block-header__title"
  }, Object(external_this_wp_htmlEntities_["decodeEntities"])(title)), Object(external_this_wp_element_["createElement"])(block_ratings, {
    rating: rating,
    ratingCount: ratingCount
  })), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
    isSecondary: true,
    isBusy: isLoading,
    disabled: isLoading || !isInstallable,
    onClick: function onClick(event) {
      event.preventDefault();

      if (!isLoading && isInstallable) {
        _onClick();
      }
    }
<<<<<<< HEAD
  }, isLoading ? Object(external_wp_i18n_["__"])('Adding…') : Object(external_wp_i18n_["__"])('Add block')));
=======
  }, isLoading ? Object(external_this_wp_i18n_["__"])('Adding…') : Object(external_this_wp_i18n_["__"])('Add block')));
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
}

/* harmony default export */ var downloadable_block_header = (DownloadableBlockHeader);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/chart-line.js


/**
 * WordPress dependencies
 */

<<<<<<< HEAD
var chartLine = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
=======
var chartLine = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
  d: "M18 3.5c0 .62-.38 1.16-.92 1.38v13.11H1.99l4.22-6.73c-.13-.23-.21-.48-.21-.76C6 9.67 6.67 9 7.5 9S9 9.67 9 10.5c0 .13-.02.25-.05.37l1.44.63c.27-.3.67-.5 1.11-.5.18 0 .35.04.51.09l3.58-6.41c-.36-.27-.59-.7-.59-1.18 0-.83.67-1.5 1.5-1.5.19 0 .36.04.53.1l.05-.09v.11c.54.22.92.76.92 1.38zm-1.92 13.49V5.85l-3.29 5.89c.13.23.21.48.21.76 0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5l.01-.07-1.63-.72c-.25.18-.55.29-.88.29-.18 0-.35-.04-.51-.1l-3.2 5.09h12.29z"
}));
/* harmony default export */ var chart_line = (chartLine);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/update.js


/**
 * WordPress dependencies
 */

<<<<<<< HEAD
var update = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
=======
var update = Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_this_wp_element_["createElement"])(external_this_wp_primitives_["Path"], {
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
  d: "M10.2 3.28c3.53 0 6.43 2.61 6.92 6h2.08l-3.5 4-3.5-4h2.32c-.45-1.97-2.21-3.45-4.32-3.45-1.45 0-2.73.71-3.54 1.78L4.95 5.66C6.23 4.2 8.11 3.28 10.2 3.28zm-.4 13.44c-3.52 0-6.43-2.61-6.92-6H.8l3.5-4c1.17 1.33 2.33 2.67 3.5 4H5.48c.45 1.97 2.21 3.45 4.32 3.45 1.45 0 2.73-.71 3.54-1.78l1.71 1.95c-1.28 1.46-3.15 2.38-5.25 2.38z"
}));
/* harmony default export */ var library_update = (update);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/downloadable-block-info/index.js


/**
 * WordPress dependencies
 */





function DownloadableBlockInfo(_ref) {
  var activeInstalls = _ref.activeInstalls,
      description = _ref.description,
      humanizedUpdated = _ref.humanizedUpdated;
  var activeInstallsString;

  if (activeInstalls > 1000000) {
<<<<<<< HEAD
    activeInstallsString = Object(external_wp_i18n_["sprintf"])(
    /* translators: %d: number of active installations. */
    Object(external_wp_i18n_["__"])('%d+ Million active installations'), Math.floor(activeInstalls / 1000000));
  } else if (0 === activeInstalls) {
    activeInstallsString = Object(external_wp_i18n_["__"])('Less than 10 active installations');
  } else {
    activeInstallsString = Object(external_wp_i18n_["sprintf"])(
    /* translators: %d: number of active installations. */
    Object(external_wp_i18n_["__"])('%d+ active installations'), activeInstalls);
  }

  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("p", {
    className: "block-directory-downloadable-block-info__content"
  }, Object(external_wp_htmlEntities_["decodeEntities"])(description)), Object(external_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-block-info__meta"
  }, Object(external_wp_element_["createElement"])(build_module_icon["a" /* default */], {
    className: "block-directory-downloadable-block-info__icon",
    icon: chart_line
  }), activeInstallsString), Object(external_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-block-info__meta"
  }, Object(external_wp_element_["createElement"])(build_module_icon["a" /* default */], {
    className: "block-directory-downloadable-block-info__icon",
    icon: library_update
  }), // translators: %s: Humanized date of last update e.g: "2 months ago".
  Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('Updated %s'), humanizedUpdated)));
=======
    activeInstallsString = Object(external_this_wp_i18n_["sprintf"])(
    /* translators: %d: number of active installations. */
    Object(external_this_wp_i18n_["__"])('%d+ Million active installations'), Math.floor(activeInstalls / 1000000));
  } else if (0 === activeInstalls) {
    activeInstallsString = Object(external_this_wp_i18n_["__"])('Less than 10 active installations');
  } else {
    activeInstallsString = Object(external_this_wp_i18n_["sprintf"])(
    /* translators: %d: number of active installations. */
    Object(external_this_wp_i18n_["__"])('%d+ active installations'), activeInstalls);
  }

  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])("p", {
    className: "block-directory-downloadable-block-info__content"
  }, Object(external_this_wp_htmlEntities_["decodeEntities"])(description)), Object(external_this_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-block-info__meta"
  }, Object(external_this_wp_element_["createElement"])(build_module_icon["a" /* default */], {
    className: "block-directory-downloadable-block-info__icon",
    icon: chart_line
  }), activeInstallsString), Object(external_this_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-block-info__meta"
  }, Object(external_this_wp_element_["createElement"])(build_module_icon["a" /* default */], {
    className: "block-directory-downloadable-block-info__icon",
    icon: library_update
  }), // translators: %s: Humanized date of last update e.g: "2 months ago".
  Object(external_this_wp_i18n_["sprintf"])(Object(external_this_wp_i18n_["__"])('Updated %s'), humanizedUpdated)));
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
}

/* harmony default export */ var downloadable_block_info = (DownloadableBlockInfo);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/downloadable-block-notice/index.js


/**
 * WordPress dependencies
 */



<<<<<<< HEAD
/**
 * Internal dependencies
 */


var downloadable_block_notice_DownloadableBlockNotice = function DownloadableBlockNotice(_ref) {
  var block = _ref.block,
      _onClick = _ref.onClick;
  var errorNotice = Object(external_wp_data_["useSelect"])(function (select) {
    return select(store).getErrorNoticeForBlock(block.id);
=======
var downloadable_block_notice_DownloadableBlockNotice = function DownloadableBlockNotice(_ref) {
  var block = _ref.block,
      _onClick = _ref.onClick;
  var errorNotice = Object(external_this_wp_data_["useSelect"])(function (select) {
    return select('core/block-directory').getErrorNoticeForBlock(block.id);
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
  }, [block]);

  if (!errorNotice) {
    return null;
  }

<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])(external_wp_components_["Notice"], {
    status: "error",
    isDismissible: false,
    className: "block-directory-downloadable-block-notice"
  }, Object(external_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-block-notice__content"
  }, errorNotice.message), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
=======
  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Notice"], {
    status: "error",
    isDismissible: false,
    className: "block-directory-downloadable-block-notice"
  }, Object(external_this_wp_element_["createElement"])("div", {
    className: "block-directory-downloadable-block-notice__content"
  }, errorNotice.message), Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
    isSmall: true,
    isPrimary: true,
    onClick: function onClick() {
      if (errorNotice.isFatal) {
        window.location.reload();
        return false;
      }

      _onClick(block);
    }
<<<<<<< HEAD
  }, errorNotice.isFatal ? Object(external_wp_i18n_["__"])('Reload') : Object(external_wp_i18n_["__"])('Retry')));
=======
  }, errorNotice.isFatal ? Object(external_this_wp_i18n_["__"])('Reload') : Object(external_this_wp_i18n_["__"])('Retry')));
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
};
/* harmony default export */ var downloadable_block_notice = (downloadable_block_notice_DownloadableBlockNotice);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/downloadable-block-list-item/index.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */





<<<<<<< HEAD

=======
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
function DownloadableBlockListItem(_ref) {
  var item = _ref.item,
      onClick = _ref.onClick;

<<<<<<< HEAD
  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    var _select = select(store),
=======
  var _useSelect = Object(external_this_wp_data_["useSelect"])(function (select) {
    var _select = select('core/block-directory'),
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
        isInstalling = _select.isInstalling,
        getErrorNoticeForBlock = _select.getErrorNoticeForBlock;

    var notice = getErrorNoticeForBlock(item.id);
    var hasFatal = notice && notice.isFatal;
    return {
      isLoading: isInstalling(item.id),
      isInstallable: !hasFatal
    };
  }, [item]),
      isLoading = _useSelect.isLoading,
      isInstallable = _useSelect.isInstallable;

  var icon = item.icon,
      title = item.title,
      description = item.description,
      rating = item.rating,
      activeInstalls = item.activeInstalls,
      ratingCount = item.ratingCount,
      author = item.author,
      humanizedUpdated = item.humanizedUpdated,
      authorBlockCount = item.authorBlockCount,
      authorBlockRating = item.authorBlockRating;
<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])("li", {
    className: "block-directory-downloadable-block-list-item"
  }, Object(external_wp_element_["createElement"])("article", {
    className: "block-directory-downloadable-block-list-item__panel"
  }, Object(external_wp_element_["createElement"])("header", {
    className: "block-directory-downloadable-block-list-item__header"
  }, Object(external_wp_element_["createElement"])(downloadable_block_header, {
=======
  return Object(external_this_wp_element_["createElement"])("li", {
    className: "block-directory-downloadable-block-list-item"
  }, Object(external_this_wp_element_["createElement"])("article", {
    className: "block-directory-downloadable-block-list-item__panel"
  }, Object(external_this_wp_element_["createElement"])("header", {
    className: "block-directory-downloadable-block-list-item__header"
  }, Object(external_this_wp_element_["createElement"])(downloadable_block_header, {
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
    icon: icon,
    onClick: onClick,
    title: title,
    rating: rating,
    ratingCount: ratingCount,
    isLoading: isLoading,
    isInstallable: isInstallable
<<<<<<< HEAD
  })), Object(external_wp_element_["createElement"])("section", {
    className: "block-directory-downloadable-block-list-item__body"
  }, Object(external_wp_element_["createElement"])(downloadable_block_notice, {
    onClick: onClick,
    block: item
  }), Object(external_wp_element_["createElement"])(downloadable_block_info, {
    activeInstalls: activeInstalls,
    description: description,
    humanizedUpdated: humanizedUpdated
  })), Object(external_wp_element_["createElement"])("footer", {
    className: "block-directory-downloadable-block-list-item__footer"
  }, Object(external_wp_element_["createElement"])(downloadable_block_author_info, {
=======
  })), Object(external_this_wp_element_["createElement"])("section", {
    className: "block-directory-downloadable-block-list-item__body"
  }, Object(external_this_wp_element_["createElement"])(downloadable_block_notice, {
    onClick: onClick,
    block: item
  }), Object(external_this_wp_element_["createElement"])(downloadable_block_info, {
    activeInstalls: activeInstalls,
    description: description,
    humanizedUpdated: humanizedUpdated
  })), Object(external_this_wp_element_["createElement"])("footer", {
    className: "block-directory-downloadable-block-list-item__footer"
  }, Object(external_this_wp_element_["createElement"])(downloadable_block_author_info, {
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
    author: author,
    authorBlockCount: authorBlockCount,
    authorBlockRating: authorBlockRating
  }))));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/downloadable-blocks-list/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


<<<<<<< HEAD

=======
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
/**
 * Internal dependencies
 */



<<<<<<< HEAD

function DownloadableBlocksList(_ref) {
  var items = _ref.items,
      _ref$onHover = _ref.onHover,
      onHover = _ref$onHover === void 0 ? external_lodash_["noop"] : _ref$onHover,
      onSelect = _ref.onSelect;

  var _useDispatch = Object(external_wp_data_["useDispatch"])(store),
      installBlockType = _useDispatch.installBlockType;

=======
function DownloadableBlocksList(_ref) {
  var items = _ref.items,
      _ref$onHover = _ref.onHover,
      onHover = _ref$onHover === void 0 ? external_this_lodash_["noop"] : _ref$onHover,
      onSelect = _ref.onSelect;

  var _useDispatch = Object(external_this_wp_data_["useDispatch"])('core/block-directory'),
      installBlockType = _useDispatch.installBlockType;

  var _useDispatch2 = Object(external_this_wp_data_["useDispatch"])('core/edit-post'),
      setIsInserterOpened = _useDispatch2.setIsInserterOpened;

>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
  if (!items.length) {
    return null;
  }

  return (
    /*
     * Disable reason: The `list` ARIA role is redundant but
     * Safari+VoiceOver won't announce the list otherwise.
     */

    /* eslint-disable jsx-a11y/no-redundant-roles */
<<<<<<< HEAD
    Object(external_wp_element_["createElement"])("ul", {
      role: "list",
      className: "block-directory-downloadable-blocks-list"
    }, items.map(function (item) {
      return Object(external_wp_element_["createElement"])(DownloadableBlockListItem, {
        key: item.id,
        onClick: function onClick() {
          // Check if the block is registered (`getBlockType`
          // will return an object). If so, insert the block.
          // This prevents installing existing plugins.
          if (Object(external_wp_blocks_["getBlockType"])(item.name)) {
            onSelect(item);
          } else {
            installBlockType(item).then(function (success) {
              if (success) {
                onSelect(item);
              }
            });
          }

=======
    Object(external_this_wp_element_["createElement"])("ul", {
      role: "list",
      className: "block-directory-downloadable-blocks-list"
    }, items.map(function (item) {
      return Object(external_this_wp_element_["createElement"])(DownloadableBlockListItem, {
        key: item.id,
        onClick: function onClick() {
          installBlockType(item).then(function (success) {
            if (success) {
              onSelect(item);
              setIsInserterOpened(false);
            }
          });
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
          onHover(null);
        },
        item: item
      });
    }))
    /* eslint-enable jsx-a11y/no-redundant-roles */

  );
}

/* harmony default export */ var downloadable_blocks_list = (DownloadableBlocksList);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/downloadable-blocks-panel/index.js


/**
 * WordPress dependencies
 */






<<<<<<< HEAD

=======
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
/**
 * Internal dependencies
 */



<<<<<<< HEAD

=======
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
function DownloadableBlocksPanel(_ref) {
  var downloadableItems = _ref.downloadableItems,
      onSelect = _ref.onSelect,
      onHover = _ref.onHover,
      hasPermission = _ref.hasPermission,
      isLoading = _ref.isLoading,
      isWaiting = _ref.isWaiting;
<<<<<<< HEAD
  var debouncedSpeak = Object(external_wp_compose_["useDebounce"])(external_wp_a11y_["speak"], 500);

  if (false === hasPermission) {
    debouncedSpeak(Object(external_wp_i18n_["__"])('No blocks found in your library.'));
    return Object(external_wp_element_["createElement"])("p", {
      className: "block-directory-downloadable-blocks-panel__description has-no-results"
    }, Object(external_wp_i18n_["__"])('No blocks found in your library.'));
  }

  if (typeof hasPermission === 'undefined' || isLoading || isWaiting) {
    return Object(external_wp_element_["createElement"])("p", {
      className: "block-directory-downloadable-blocks-panel__description has-no-results"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["Spinner"], null));
  }

  if (!downloadableItems.length) {
    return Object(external_wp_element_["createElement"])("p", {
      className: "block-directory-downloadable-blocks-panel__description has-no-results"
    }, Object(external_wp_i18n_["__"])('No blocks found in your library.'));
  }

  var resultsFoundMessage = Object(external_wp_i18n_["sprintf"])(
  /* translators: %s: number of available blocks. */
  Object(external_wp_i18n_["_n"])('No blocks found in your library. We did find %d block available for download.', 'No blocks found in your library. We did find %d blocks available for download.', downloadableItems.length), downloadableItems.length);
  debouncedSpeak(resultsFoundMessage);
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("p", {
    className: "block-directory-downloadable-blocks-panel__description"
  }, Object(external_wp_i18n_["__"])('No blocks found in your library. These blocks can be downloaded and installed:')), Object(external_wp_element_["createElement"])(downloadable_blocks_list, {
=======
  var debouncedSpeak = Object(external_this_wp_compose_["useDebounce"])(external_this_wp_a11y_["speak"], 500);

  if (false === hasPermission) {
    debouncedSpeak(Object(external_this_wp_i18n_["__"])('No blocks found in your library.'));
    return Object(external_this_wp_element_["createElement"])("p", {
      className: "block-directory-downloadable-blocks-panel__description has-no-results"
    }, Object(external_this_wp_i18n_["__"])('No blocks found in your library.'));
  }

  if (typeof hasPermission === 'undefined' || isLoading || isWaiting) {
    return Object(external_this_wp_element_["createElement"])("p", {
      className: "block-directory-downloadable-blocks-panel__description has-no-results"
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Spinner"], null));
  }

  if (!downloadableItems.length) {
    return Object(external_this_wp_element_["createElement"])("p", {
      className: "block-directory-downloadable-blocks-panel__description has-no-results"
    }, Object(external_this_wp_i18n_["__"])('No blocks found in your library.'));
  }

  var resultsFoundMessage = Object(external_this_wp_i18n_["sprintf"])(
  /* translators: %s: number of available blocks. */
  Object(external_this_wp_i18n_["_n"])('No blocks found in your library. We did find %d block available for download.', 'No blocks found in your library. We did find %d blocks available for download.', downloadableItems.length), downloadableItems.length);
  debouncedSpeak(resultsFoundMessage);
  return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])("p", {
    className: "block-directory-downloadable-blocks-panel__description"
  }, Object(external_this_wp_i18n_["__"])('No blocks found in your library. These blocks can be downloaded and installed:')), Object(external_this_wp_element_["createElement"])(downloadable_blocks_list, {
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
    items: downloadableItems,
    onSelect: onSelect,
    onHover: onHover
  }));
}

<<<<<<< HEAD
/* harmony default export */ var downloadable_blocks_panel = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select, _ref2) {
  var filterValue = _ref2.filterValue,
      _ref2$rootClientId = _ref2.rootClientId,
      rootClientId = _ref2$rootClientId === void 0 ? null : _ref2$rootClientId;

  var _select = select(store),
      getDownloadableBlocks = _select.getDownloadableBlocks,
      isRequestingDownloadableBlocks = _select.isRequestingDownloadableBlocks;

  var _select2 = select(external_wp_blockEditor_["store"]),
      canInsertBlockType = _select2.canInsertBlockType;

  var hasPermission = select('core').canUser('read', 'block-directory/search');

  function getInstallableBlocks(term) {
    return getDownloadableBlocks(term).filter(function (block) {
      return canInsertBlockType(block, rootClientId, true);
    });
  }

  var downloadableItems = hasPermission ? getInstallableBlocks(filterValue) : [];
=======
/* harmony default export */ var downloadable_blocks_panel = (Object(external_this_wp_compose_["compose"])([Object(external_this_wp_data_["withSelect"])(function (select, _ref2) {
  var filterValue = _ref2.filterValue;

  var _select = select('core/block-directory'),
      getDownloadableBlocks = _select.getDownloadableBlocks,
      isRequestingDownloadableBlocks = _select.isRequestingDownloadableBlocks;

  var hasPermission = select('core').canUser('read', 'block-directory/search');
  var downloadableItems = hasPermission ? getDownloadableBlocks(filterValue) : [];
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
  var isLoading = isRequestingDownloadableBlocks(filterValue);
  return {
    downloadableItems: downloadableItems,
    hasPermission: hasPermission,
    isLoading: isLoading
  };
})])(DownloadableBlocksPanel));

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/plugins/inserter-menu-downloadable-blocks-panel/index.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



function InserterMenuDownloadableBlocksPanel() {
<<<<<<< HEAD
  var _useState = Object(external_wp_element_["useState"])(''),
=======
  var _useState = Object(external_this_wp_element_["useState"])(''),
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      debouncedFilterValue = _useState2[0],
      setFilterValue = _useState2[1];

<<<<<<< HEAD
  var debouncedSetFilterValue = Object(external_lodash_["debounce"])(setFilterValue, 400);
  return Object(external_wp_element_["createElement"])(external_wp_blockEditor_["__experimentalInserterMenuExtension"], null, function (_ref) {
    var onSelect = _ref.onSelect,
        onHover = _ref.onHover,
        filterValue = _ref.filterValue,
        hasItems = _ref.hasItems,
        rootClientId = _ref.rootClientId;
=======
  var debouncedSetFilterValue = Object(external_this_lodash_["debounce"])(setFilterValue, 400);
  return Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["__experimentalInserterMenuExtension"], null, function (_ref) {
    var onSelect = _ref.onSelect,
        onHover = _ref.onHover,
        filterValue = _ref.filterValue,
        hasItems = _ref.hasItems;
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f

    if (hasItems || !filterValue) {
      return null;
    }

    if (debouncedFilterValue !== filterValue) {
      debouncedSetFilterValue(filterValue);
    }

<<<<<<< HEAD
    return Object(external_wp_element_["createElement"])(downloadable_blocks_panel, {
      onSelect: onSelect,
      onHover: onHover,
      rootClientId: rootClientId,
=======
    return Object(external_this_wp_element_["createElement"])(downloadable_blocks_panel, {
      onSelect: onSelect,
      onHover: onHover,
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
      filterValue: debouncedFilterValue,
      isWaiting: filterValue !== debouncedFilterValue
    });
  });
}

/* harmony default export */ var inserter_menu_downloadable_blocks_panel = (InserterMenuDownloadableBlocksPanel);

<<<<<<< HEAD
// EXTERNAL MODULE: external ["wp","editPost"]
var external_wp_editPost_ = __webpack_require__(272);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/block-default.js
var block_default = __webpack_require__(213);
=======
// EXTERNAL MODULE: external {"this":["wp","editPost"]}
var external_this_wp_editPost_ = __webpack_require__(276);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/block-default.js
var block_default = __webpack_require__(207);
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/components/compact-list/index.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


function CompactList(_ref) {
  var items = _ref.items;

  if (!items.length) {
    return null;
  }

<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])("ul", {
=======
  return Object(external_this_wp_element_["createElement"])("ul", {
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
    className: "block-directory-compact-list"
  }, items.map(function (_ref2) {
    var icon = _ref2.icon,
        id = _ref2.id,
        title = _ref2.title,
        author = _ref2.author;
<<<<<<< HEAD
    return Object(external_wp_element_["createElement"])("li", {
      key: id,
      className: "block-directory-compact-list__item"
    }, Object(external_wp_element_["createElement"])(downloadable_block_icon, {
      icon: icon,
      title: title
    }), Object(external_wp_element_["createElement"])("div", {
      className: "block-directory-compact-list__item-details"
    }, Object(external_wp_element_["createElement"])("div", {
      className: "block-directory-compact-list__item-title"
    }, title), Object(external_wp_element_["createElement"])("div", {
      className: "block-directory-compact-list__item-author"
    }, Object(external_wp_i18n_["sprintf"])(
    /* translators: %s: Name of the block author. */
    Object(external_wp_i18n_["__"])('By %s'), author))));
=======
    return Object(external_this_wp_element_["createElement"])("li", {
      key: id,
      className: "block-directory-compact-list__item"
    }, Object(external_this_wp_element_["createElement"])(downloadable_block_icon, {
      icon: icon,
      title: title
    }), Object(external_this_wp_element_["createElement"])("div", {
      className: "block-directory-compact-list__item-details"
    }, Object(external_this_wp_element_["createElement"])("div", {
      className: "block-directory-compact-list__item-title"
    }, title), Object(external_this_wp_element_["createElement"])("div", {
      className: "block-directory-compact-list__item-author"
    }, Object(external_this_wp_i18n_["sprintf"])(
    /* translators: %s: Name of the block author. */
    Object(external_this_wp_i18n_["__"])('By %s'), author))));
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/plugins/installed-blocks-pre-publish-panel/index.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


<<<<<<< HEAD

function InstalledBlocksPrePublishPanel() {
  var newBlockTypes = Object(external_wp_data_["useSelect"])(function (select) {
    return select(store).getNewBlockTypes();
=======
function InstalledBlocksPrePublishPanel() {
  var newBlockTypes = Object(external_this_wp_data_["useSelect"])(function (select) {
    return select('core/block-directory').getNewBlockTypes();
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
  }, []);

  if (!newBlockTypes.length) {
    return null;
  }

<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])(external_wp_editPost_["PluginPrePublishPanel"], {
    icon: block_default["a" /* default */],
    title: Object(external_wp_i18n_["sprintf"])( // translators: %d: number of blocks (number).
    Object(external_wp_i18n_["_n"])('Added: %d block', 'Added: %d blocks', newBlockTypes.length), newBlockTypes.length),
    initialOpen: true
  }, Object(external_wp_element_["createElement"])("p", {
    className: "installed-blocks-pre-publish-panel__copy"
  }, Object(external_wp_i18n_["_n"])('The following block has been added to your site.', 'The following blocks have been added to your site.', newBlockTypes.length)), Object(external_wp_element_["createElement"])(CompactList, {
=======
  return Object(external_this_wp_element_["createElement"])(external_this_wp_editPost_["PluginPrePublishPanel"], {
    icon: block_default["a" /* default */],
    title: Object(external_this_wp_i18n_["sprintf"])( // translators: %d: number of blocks (number).
    Object(external_this_wp_i18n_["_n"])('Added: %d block', 'Added: %d blocks', newBlockTypes.length), newBlockTypes.length),
    initialOpen: true
  }, Object(external_this_wp_element_["createElement"])("p", {
    className: "installed-blocks-pre-publish-panel__copy"
  }, Object(external_this_wp_i18n_["_n"])('The following block has been added to your site.', 'The following blocks have been added to your site.', newBlockTypes.length)), Object(external_this_wp_element_["createElement"])(CompactList, {
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
    items: newBlockTypes
  }));
}

<<<<<<< HEAD
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8);

=======
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/plugins/get-install-missing/install-button.js



/**
 * WordPress dependencies
 */




<<<<<<< HEAD
/**
 * Internal dependencies
 */


=======
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
function InstallButton(_ref) {
  var attributes = _ref.attributes,
      block = _ref.block,
      clientId = _ref.clientId;
<<<<<<< HEAD
  var isInstallingBlock = Object(external_wp_data_["useSelect"])(function (select) {
    return select(store).isInstalling(block.id);
  });

  var _useDispatch = Object(external_wp_data_["useDispatch"])(store),
      installBlockType = _useDispatch.installBlockType;

  var _useDispatch2 = Object(external_wp_data_["useDispatch"])('core/block-editor'),
      replaceBlock = _useDispatch2.replaceBlock;

  return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    onClick: function onClick() {
      return installBlockType(block).then(function (success) {
        if (success) {
          var blockType = Object(external_wp_blocks_["getBlockType"])(block.name);

          var _parse = Object(external_wp_blocks_["parse"])(attributes.originalContent),
=======
  var isInstallingBlock = Object(external_this_wp_data_["useSelect"])(function (select) {
    return select('core/block-directory').isInstalling(block.id);
  });

  var _useDispatch = Object(external_this_wp_data_["useDispatch"])('core/block-directory'),
      installBlockType = _useDispatch.installBlockType;

  var _useDispatch2 = Object(external_this_wp_data_["useDispatch"])('core/block-editor'),
      replaceBlock = _useDispatch2.replaceBlock;

  return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
    onClick: function onClick() {
      return installBlockType(block).then(function (success) {
        if (success) {
          var blockType = Object(external_this_wp_blocks_["getBlockType"])(block.name);

          var _parse = Object(external_this_wp_blocks_["parse"])(attributes.originalContent),
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
              _parse2 = Object(slicedToArray["a" /* default */])(_parse, 1),
              originalBlock = _parse2[0];

          if (originalBlock) {
<<<<<<< HEAD
            replaceBlock(clientId, Object(external_wp_blocks_["createBlock"])(blockType.name, originalBlock.attributes, originalBlock.innerBlocks));
=======
            replaceBlock(clientId, Object(external_this_wp_blocks_["createBlock"])(blockType.name, originalBlock.attributes, originalBlock.innerBlocks));
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
          }
        }
      });
    },
    disabled: isInstallingBlock,
    isBusy: isInstallingBlock,
    isPrimary: true
<<<<<<< HEAD
  }, Object(external_wp_i18n_["sprintf"])(
  /* translators: %s: block name */
  Object(external_wp_i18n_["__"])('Install %s'), block.title));
=======
  }, Object(external_this_wp_i18n_["sprintf"])(
  /* translators: %s: block name */
  Object(external_this_wp_i18n_["__"])('Install %s'), block.title));
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
}

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/plugins/get-install-missing/index.js


<<<<<<< HEAD


=======
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



<<<<<<< HEAD

var get_install_missing_getInstallMissing = function getInstallMissing(OriginalComponent) {
  return function (props) {
    var originalName = props.attributes.originalName; // Disable reason: This is a valid component, but it's mistaken for a callback.
    // eslint-disable-next-line react-hooks/rules-of-hooks

    var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
      var _select = select(store),
=======
var get_install_missing_getInstallMissing = function getInstallMissing(OriginalComponent) {
  return function (props) {
    var _props$attributes = props.attributes,
        originalName = _props$attributes.originalName,
        originalUndelimitedContent = _props$attributes.originalUndelimitedContent; // Disable reason: This is a valid component, but it's mistaken for a callback.
    // eslint-disable-next-line react-hooks/rules-of-hooks

    var _useSelect = Object(external_this_wp_data_["useSelect"])(function (select) {
      var _select = select('core/block-directory'),
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
          getDownloadableBlocks = _select.getDownloadableBlocks;

      var blocks = getDownloadableBlocks('block:' + originalName).filter(function (_ref) {
        var name = _ref.name;
        return originalName === name;
      });
      return {
        hasPermission: select('core').canUser('read', 'block-directory/search'),
        block: blocks.length && blocks[0]
      };
    }, [originalName]),
        block = _useSelect.block,
<<<<<<< HEAD
        hasPermission = _useSelect.hasPermission; // The user can't install blocks, or the block isn't available for download.


    if (!hasPermission || !block) {
      return Object(external_wp_element_["createElement"])(OriginalComponent, props);
    }

    return Object(external_wp_element_["createElement"])(get_install_missing_ModifiedWarning, Object(esm_extends["a" /* default */])({}, props, {
      originalBlock: block
    }));
  };
};

var get_install_missing_ModifiedWarning = function ModifiedWarning(_ref2) {
  var originalBlock = _ref2.originalBlock,
      props = Object(objectWithoutProperties["a" /* default */])(_ref2, ["originalBlock"]);

  var _props$attributes = props.attributes,
      originalName = _props$attributes.originalName,
      originalUndelimitedContent = _props$attributes.originalUndelimitedContent;

  var _useDispatch = Object(external_wp_data_["useDispatch"])('core/block-editor'),
      replaceBlock = _useDispatch.replaceBlock;

  var convertToHTML = function convertToHTML() {
    replaceBlock(props.clientId, Object(external_wp_blocks_["createBlock"])('core/html', {
      content: originalUndelimitedContent
    }));
  };

  var hasContent = !!originalUndelimitedContent;
  var hasHTMLBlock = Object(external_wp_blocks_["getBlockType"])('core/html');
  var messageHTML = Object(external_wp_i18n_["sprintf"])(
  /* translators: %s: block name */
  Object(external_wp_i18n_["__"])('Your site doesn’t include support for the %s block. You can try installing the block or remove it entirely!'), originalBlock.title || originalName);
  var actions = [Object(external_wp_element_["createElement"])(InstallButton, {
    key: "install",
    block: originalBlock,
    attributes: props.attributes,
    clientId: props.clientId
  })];

  if (hasContent && hasHTMLBlock) {
    messageHTML = Object(external_wp_i18n_["sprintf"])(
    /* translators: %s: block name */
    Object(external_wp_i18n_["__"])('Your site doesn’t include support for the %s block. You can try installing the block, convert it to a Custom HTML block, or remove it entirely.'), originalBlock.title || originalName);
    actions.push(Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      key: "convert",
      onClick: convertToHTML,
      isLink: true
    }, Object(external_wp_i18n_["__"])('Keep as HTML')));
  }

  return Object(external_wp_element_["createElement"])("div", Object(external_wp_blockEditor_["useBlockProps"])(), Object(external_wp_element_["createElement"])(external_wp_blockEditor_["Warning"], {
    actions: actions
  }, messageHTML), Object(external_wp_element_["createElement"])(external_wp_element_["RawHTML"], null, originalUndelimitedContent));
=======
        hasPermission = _useSelect.hasPermission;

    var _useDispatch = Object(external_this_wp_data_["useDispatch"])('core/block-editor'),
        replaceBlock = _useDispatch.replaceBlock;

    var convertToHTML = function convertToHTML() {
      replaceBlock(props.clientId, Object(external_this_wp_blocks_["createBlock"])('core/html', {
        content: originalUndelimitedContent
      }));
    };

    if (!hasPermission || !block) {
      return Object(external_this_wp_element_["createElement"])(OriginalComponent, props);
    }

    var hasContent = !!originalUndelimitedContent;
    var hasHTMLBlock = Object(external_this_wp_blocks_["getBlockType"])('core/html');
    var messageHTML = Object(external_this_wp_i18n_["sprintf"])(
    /* translators: %s: block name */
    Object(external_this_wp_i18n_["__"])('Your site doesn’t include support for the %s block. You can try installing the block or remove it entirely.'), block.title || originalName);
    var actions = [Object(external_this_wp_element_["createElement"])(InstallButton, {
      key: "install",
      block: block,
      attributes: props.attributes,
      clientId: props.clientId
    })];

    if (hasContent && hasHTMLBlock) {
      messageHTML = Object(external_this_wp_i18n_["sprintf"])(
      /* translators: %s: block name */
      Object(external_this_wp_i18n_["__"])('Your site doesn’t include support for the %s block. You can try installing the block, convert it to a Custom HTML block, or remove it entirely.'), block.title || originalName);
      actions.push(Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Button"], {
        key: "convert",
        onClick: convertToHTML,
        isLink: true
      }, Object(external_this_wp_i18n_["__"])('Keep as HTML')));
    }

    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(external_this_wp_blockEditor_["Warning"], {
      actions: actions
    }, messageHTML), Object(external_this_wp_element_["createElement"])(external_this_wp_element_["RawHTML"], null, originalUndelimitedContent));
  };
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
};

/* harmony default export */ var get_install_missing = (get_install_missing_getInstallMissing);

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/plugins/index.js


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





<<<<<<< HEAD
Object(external_wp_plugins_["registerPlugin"])('block-directory', {
  render: function render() {
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(AutoBlockUninstaller, null), Object(external_wp_element_["createElement"])(inserter_menu_downloadable_blocks_panel, null), Object(external_wp_element_["createElement"])(InstalledBlocksPrePublishPanel, null));
  }
});
Object(external_wp_hooks_["addFilter"])('blocks.registerBlockType', 'block-directory/fallback', function (settings, name) {
=======
Object(external_this_wp_plugins_["registerPlugin"])('block-directory', {
  render: function render() {
    return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["Fragment"], null, Object(external_this_wp_element_["createElement"])(AutoBlockUninstaller, null), Object(external_this_wp_element_["createElement"])(inserter_menu_downloadable_blocks_panel, null), Object(external_this_wp_element_["createElement"])(InstalledBlocksPrePublishPanel, null));
  }
});
Object(external_this_wp_hooks_["addFilter"])('blocks.registerBlockType', 'block-directory/fallback', function (settings, name) {
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
  if (name !== 'core/missing') {
    return settings;
  }

  settings.edit = get_install_missing(settings.edit);
  return settings;
});

// CONCATENATED MODULE: ./node_modules/@wordpress/block-directory/build-module/index.js
/**
<<<<<<< HEAD
 * Internal dependencies
 */




/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["a11y"]; }());

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["dataControls"]; }());
=======
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */




>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

<<<<<<< HEAD
/***/ 50:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["notices"]; }());

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["htmlEntities"]; }());
=======
/***/ 6:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["htmlEntities"]; }());
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

<<<<<<< HEAD
(function() { module.exports = window["wp"]["primitives"]; }());

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["plugins"]; }());

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());
=======
(function() { module.exports = this["wp"]["primitives"]; }());

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["plugins"]; }());

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["notices"]; }());
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f

/***/ })

/******/ });