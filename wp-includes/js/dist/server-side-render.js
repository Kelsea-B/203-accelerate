this["wp"] = this["wp"] || {}; this["wp"]["serverSideRender"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 473);
=======
/******/ 	return __webpack_require__(__webpack_require__.s = 501);
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

/***/ }),

/***/ 13:
=======
(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

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
/***/ 18:
=======
/***/ 16:
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

<<<<<<< HEAD
(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ 25:
=======
(function() { module.exports = this["lodash"]; }());

/***/ }),

/***/ 21:
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

<<<<<<< HEAD
/***/ 26:
=======
/***/ 22:
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

<<<<<<< HEAD
/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });
/* harmony import */ var _babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
=======
/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _inherits; });

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
<<<<<<< HEAD
  if (superClass) Object(_babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(subClass, superClass);
=======
  if (superClass) _setPrototypeOf(subClass, superClass);
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
}

/***/ }),

<<<<<<< HEAD
/***/ 29:
=======
/***/ 24:
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });
<<<<<<< HEAD
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
=======
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(self);
}

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

<<<<<<< HEAD
(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["url"]; }());

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["deprecated"]; }());
=======
(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["url"]; }());

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["deprecated"]; }());
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

<<<<<<< HEAD
(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ 42:
=======
(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ 40:
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

<<<<<<< HEAD
/***/ 44:
=======
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
/***/ 473:
=======
/***/ 47:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["apiFetch"]; }());

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

/***/ 501:
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
<<<<<<< HEAD
var objectWithoutProperties = __webpack_require__(13);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(4);

// EXTERNAL MODULE: external ["wp","deprecated"]
var external_wp_deprecated_ = __webpack_require__(35);
var external_wp_deprecated_default = /*#__PURE__*/__webpack_require__.n(external_wp_deprecated_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(29);
=======
var objectWithoutProperties = __webpack_require__(14);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external {"this":["wp","data"]}
var external_this_wp_data_ = __webpack_require__(4);

// EXTERNAL MODULE: external {"this":["wp","deprecated"]}
var external_this_wp_deprecated_ = __webpack_require__(36);
var external_this_wp_deprecated_default = /*#__PURE__*/__webpack_require__.n(external_this_wp_deprecated_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(24);
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(19);

<<<<<<< HEAD
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(1);

// EXTERNAL MODULE: external ["wp","apiFetch"]
var external_wp_apiFetch_ = __webpack_require__(50);
var external_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_wp_apiFetch_);

// EXTERNAL MODULE: external ["wp","url"]
var external_wp_url_ = __webpack_require__(32);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(3);
=======
// EXTERNAL MODULE: external {"this":"lodash"}
var external_this_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: external {"this":["wp","i18n"]}
var external_this_wp_i18n_ = __webpack_require__(1);

// EXTERNAL MODULE: external {"this":["wp","apiFetch"]}
var external_this_wp_apiFetch_ = __webpack_require__(47);
var external_this_wp_apiFetch_default = /*#__PURE__*/__webpack_require__.n(external_this_wp_apiFetch_);

// EXTERNAL MODULE: external {"this":["wp","url"]}
var external_this_wp_url_ = __webpack_require__(30);

// EXTERNAL MODULE: external {"this":["wp","components"]}
var external_this_wp_components_ = __webpack_require__(3);
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f

// CONCATENATED MODULE: ./node_modules/@wordpress/server-side-render/build-module/server-side-render.js









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






function rendererPath(block) {
  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var urlQueryArgs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
<<<<<<< HEAD
  return Object(external_wp_url_["addQueryArgs"])("/wp/v2/block-renderer/".concat(block), _objectSpread(_objectSpread({
=======
  return Object(external_this_wp_url_["addQueryArgs"])("/wp/v2/block-renderer/".concat(block), _objectSpread(_objectSpread({
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
    context: 'edit'
  }, null !== attributes ? {
    attributes: attributes
  } : {}), urlQueryArgs));
}
var server_side_render_ServerSideRender = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(ServerSideRender, _Component);

  var _super = _createSuper(ServerSideRender);

  function ServerSideRender(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ServerSideRender);

    _this = _super.call(this, props);
    _this.state = {
      response: null
    };
    return _this;
  }

  Object(createClass["a" /* default */])(ServerSideRender, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.isStillMounted = true;
      this.fetch(this.props); // Only debounce once the initial fetch occurs to ensure that the first
      // renders show data as soon as possible.

<<<<<<< HEAD
      this.fetch = Object(external_lodash_["debounce"])(this.fetch, 500);
=======
      this.fetch = Object(external_this_lodash_["debounce"])(this.fetch, 500);
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isStillMounted = false;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
<<<<<<< HEAD
      if (!Object(external_lodash_["isEqual"])(prevProps, this.props)) {
=======
      if (!Object(external_this_lodash_["isEqual"])(prevProps, this.props)) {
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
        this.fetch(this.props);
      }
    }
  }, {
    key: "fetch",
    value: function fetch(props) {
      var _this2 = this;

      if (!this.isStillMounted) {
        return;
      }

      if (null !== this.state.response) {
        this.setState({
          response: null
        });
      }

      var block = props.block,
          _props$attributes = props.attributes,
          attributes = _props$attributes === void 0 ? null : _props$attributes,
          _props$httpMethod = props.httpMethod,
          httpMethod = _props$httpMethod === void 0 ? 'GET' : _props$httpMethod,
          _props$urlQueryArgs = props.urlQueryArgs,
          urlQueryArgs = _props$urlQueryArgs === void 0 ? {} : _props$urlQueryArgs; // If httpMethod is 'POST', send the attributes in the request body instead of the URL.
      // This allows sending a larger attributes object than in a GET request, where the attributes are in the URL.

      var isPostRequest = 'POST' === httpMethod;
      var urlAttributes = isPostRequest ? null : attributes;
      var path = rendererPath(block, urlAttributes, urlQueryArgs);
      var data = isPostRequest ? {
        attributes: attributes
      } : null; // Store the latest fetch request so that when we process it, we can
      // check if it is the current request, to avoid race conditions on slow networks.

<<<<<<< HEAD
      var fetchRequest = this.currentFetchRequest = external_wp_apiFetch_default()({
=======
      var fetchRequest = this.currentFetchRequest = external_this_wp_apiFetch_default()({
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
        path: path,
        data: data,
        method: isPostRequest ? 'POST' : 'GET'
      }).then(function (response) {
        if (_this2.isStillMounted && fetchRequest === _this2.currentFetchRequest && response) {
          _this2.setState({
            response: response.rendered
          });
        }
      }).catch(function (error) {
        if (_this2.isStillMounted && fetchRequest === _this2.currentFetchRequest) {
          _this2.setState({
            response: {
              error: true,
              errorMsg: error.message
            }
          });
        }
      });
      return fetchRequest;
    }
  }, {
    key: "render",
    value: function render() {
      var response = this.state.response;
      var _this$props = this.props,
          className = _this$props.className,
          EmptyResponsePlaceholder = _this$props.EmptyResponsePlaceholder,
          ErrorResponsePlaceholder = _this$props.ErrorResponsePlaceholder,
          LoadingResponsePlaceholder = _this$props.LoadingResponsePlaceholder;

      if (response === '') {
<<<<<<< HEAD
        return Object(external_wp_element_["createElement"])(EmptyResponsePlaceholder, Object(esm_extends["a" /* default */])({
          response: response
        }, this.props));
      } else if (!response) {
        return Object(external_wp_element_["createElement"])(LoadingResponsePlaceholder, Object(esm_extends["a" /* default */])({
          response: response
        }, this.props));
      } else if (response.error) {
        return Object(external_wp_element_["createElement"])(ErrorResponsePlaceholder, Object(esm_extends["a" /* default */])({
=======
        return Object(external_this_wp_element_["createElement"])(EmptyResponsePlaceholder, Object(esm_extends["a" /* default */])({
          response: response
        }, this.props));
      } else if (!response) {
        return Object(external_this_wp_element_["createElement"])(LoadingResponsePlaceholder, Object(esm_extends["a" /* default */])({
          response: response
        }, this.props));
      } else if (response.error) {
        return Object(external_this_wp_element_["createElement"])(ErrorResponsePlaceholder, Object(esm_extends["a" /* default */])({
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
          response: response
        }, this.props));
      }

<<<<<<< HEAD
      return Object(external_wp_element_["createElement"])(external_wp_element_["RawHTML"], {
=======
      return Object(external_this_wp_element_["createElement"])(external_this_wp_element_["RawHTML"], {
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
        key: "html",
        className: className
      }, response);
    }
  }]);

  return ServerSideRender;
<<<<<<< HEAD
}(external_wp_element_["Component"]);
server_side_render_ServerSideRender.defaultProps = {
  EmptyResponsePlaceholder: function EmptyResponsePlaceholder(_ref) {
    var className = _ref.className;
    return Object(external_wp_element_["createElement"])(external_wp_components_["Placeholder"], {
      className: className
    }, Object(external_wp_i18n_["__"])('Block rendered as empty.'));
=======
}(external_this_wp_element_["Component"]);
server_side_render_ServerSideRender.defaultProps = {
  EmptyResponsePlaceholder: function EmptyResponsePlaceholder(_ref) {
    var className = _ref.className;
    return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Placeholder"], {
      className: className
    }, Object(external_this_wp_i18n_["__"])('Block rendered as empty.'));
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
  },
  ErrorResponsePlaceholder: function ErrorResponsePlaceholder(_ref2) {
    var response = _ref2.response,
        className = _ref2.className;
<<<<<<< HEAD
    var errorMessage = Object(external_wp_i18n_["sprintf"])( // translators: %s: error message describing the problem
    Object(external_wp_i18n_["__"])('Error loading block: %s'), response.errorMsg);
    return Object(external_wp_element_["createElement"])(external_wp_components_["Placeholder"], {
=======
    var errorMessage = Object(external_this_wp_i18n_["sprintf"])( // translators: %s: error message describing the problem
    Object(external_this_wp_i18n_["__"])('Error loading block: %s'), response.errorMsg);
    return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Placeholder"], {
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
      className: className
    }, errorMessage);
  },
  LoadingResponsePlaceholder: function LoadingResponsePlaceholder(_ref3) {
    var className = _ref3.className;
<<<<<<< HEAD
    return Object(external_wp_element_["createElement"])(external_wp_components_["Placeholder"], {
      className: className
    }, Object(external_wp_element_["createElement"])(external_wp_components_["Spinner"], null));
=======
    return Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Placeholder"], {
      className: className
    }, Object(external_this_wp_element_["createElement"])(external_this_wp_components_["Spinner"], null));
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
  }
};
/* harmony default export */ var server_side_render = (server_side_render_ServerSideRender);

// CONCATENATED MODULE: ./node_modules/@wordpress/server-side-render/build-module/index.js





function build_module_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function build_module_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { build_module_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { build_module_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/**
 * Constants
 */

var EMPTY_OBJECT = {};
<<<<<<< HEAD
var ExportedServerSideRender = Object(external_wp_data_["withSelect"])(function (select) {
=======
var ExportedServerSideRender = Object(external_this_wp_data_["withSelect"])(function (select) {
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
  var coreEditorSelect = select('core/editor');

  if (coreEditorSelect) {
    var currentPostId = coreEditorSelect.getCurrentPostId();

    if (currentPostId) {
      return {
        currentPostId: currentPostId
      };
    }
  }

  return EMPTY_OBJECT;
})(function (_ref) {
  var _ref$urlQueryArgs = _ref.urlQueryArgs,
      urlQueryArgs = _ref$urlQueryArgs === void 0 ? EMPTY_OBJECT : _ref$urlQueryArgs,
      currentPostId = _ref.currentPostId,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["urlQueryArgs", "currentPostId"]);

<<<<<<< HEAD
  var newUrlQueryArgs = Object(external_wp_element_["useMemo"])(function () {
=======
  var newUrlQueryArgs = Object(external_this_wp_element_["useMemo"])(function () {
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
    if (!currentPostId) {
      return urlQueryArgs;
    }

    return build_module_objectSpread({
      post_id: currentPostId
    }, urlQueryArgs);
  }, [currentPostId, urlQueryArgs]);
<<<<<<< HEAD
  return Object(external_wp_element_["createElement"])(server_side_render, Object(esm_extends["a" /* default */])({
=======
  return Object(external_this_wp_element_["createElement"])(server_side_render, Object(esm_extends["a" /* default */])({
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
    urlQueryArgs: newUrlQueryArgs
  }, props));
});

if (window && window.wp && window.wp.components) {
<<<<<<< HEAD
  window.wp.components.ServerSideRender = Object(external_wp_element_["forwardRef"])(function (props, ref) {
    external_wp_deprecated_default()('wp.components.ServerSideRender', {
      alternative: 'wp.serverSideRender'
    });
    return Object(external_wp_element_["createElement"])(ExportedServerSideRender, Object(esm_extends["a" /* default */])({}, props, {
=======
  window.wp.components.ServerSideRender = Object(external_this_wp_element_["forwardRef"])(function (props, ref) {
    external_this_wp_deprecated_default()('wp.components.ServerSideRender', {
      alternative: 'wp.serverSideRender'
    });
    return Object(external_this_wp_element_["createElement"])(ExportedServerSideRender, Object(esm_extends["a" /* default */])({}, props, {
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
      ref: ref
    }));
  });
}

/* harmony default export */ var build_module = __webpack_exports__["default"] = (ExportedServerSideRender);


/***/ }),

<<<<<<< HEAD
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

/***/ 50:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

=======
>>>>>>> 337fc74bea26f744696d7cc92b3fbb623fd97f1f
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

/***/ })

/******/ })["default"];