(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var EmailSubscriptionForm = function EmailSubscriptionForm() {
    return React.createElement(
        'section',
        { className: 'container-fluid signup-wrapper' },
        React.createElement('iframe', { src: 'https://app.mailjet.com/widget/iframe/3lll/8M5', width: '100%', height: '260px', frameBorder: 0, scrolling: 'no', marginHeight: 0, marginWidth: 0 })
    );
};
exports.default = EmailSubscriptionForm;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _recompose = __webpack_require__(1);

var _reactStatic = __webpack_require__(3);

var _config = __webpack_require__(13);

var _config2 = _interopRequireDefault(_config);

var _faastLogo64x = __webpack_require__(46);

var _faastLogo64x2 = _interopRequireDefault(_faastLogo64x);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = (0, _recompose.compose)((0, _recompose.setDisplayName)('Header'))(function () {
  return React.createElement(
    'nav',
    { className: 'navbar navbar-dark navbar-expand-md navigation-clean-button',
      style: { backgroundColor: 'transparent', paddingLeft: '12px' } },
    React.createElement(
      'div',
      { className: 'container' },
      React.createElement(
        _reactStatic.Link,
        { exact: true, to: '/', className: 'navbar-brand text-white', style: { fontWeight: 400 } },
        React.createElement('img', { src: _faastLogo64x2.default, style: { height: '32px', marginRight: '16px' } }),
        _config2.default.name
      ),
      React.createElement(
        'button',
        { className: 'navbar-toggler', 'data-toggle': 'collapse', 'data-target': '#navcol-1' },
        React.createElement(
          'span',
          { className: 'sr-only' },
          'Toggle navigation'
        ),
        React.createElement('span', { className: 'navbar-toggler-icon text-white' })
      ),
      React.createElement(
        'div',
        { className: 'collapse navbar-collapse', id: 'navcol-1' },
        React.createElement(
          'ul',
          { className: 'nav navbar-nav ml-auto' },
          React.createElement(
            'li',
            { className: 'nav-item', role: 'presentation' },
            React.createElement(
              'a',
              { className: 'nav-link text-light', href: '/app/swap' },
              'Swap'
            )
          ),
          React.createElement(
            'li',
            { className: 'nav-item', role: 'presentation' },
            React.createElement(
              'a',
              { className: 'nav-link text-light', href: 'https://medium.com/faast', target: '_blank noopener noreferrer', rel: 'noopener' },
              'Blog'
            )
          ),
          React.createElement(
            'li',
            { className: 'nav-item', role: 'presentation' },
            React.createElement(
              'a',
              { className: 'nav-link py-1', href: '/app' },
              React.createElement(
                'button',
                { className: 'btn btn-light' },
                'Portfolio'
              )
            )
          )
        )
      )
    )
  );
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _recompose = __webpack_require__(1);

var _config = __webpack_require__(13);

var _config2 = _interopRequireDefault(_config);

var _classNames = __webpack_require__(12);

var _classNames2 = _interopRequireDefault(_classNames);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = (0, _recompose.compose)((0, _recompose.setDisplayName)('Footer'), (0, _recompose.setPropTypes)({
  footerClass: _propTypes2.default.string
}), (0, _recompose.defaultProps)({
  footerClass: ''
}))(function (_ref) {
  var footerClass = _ref.footerClass;
  return React.createElement(
    'div',
    { className: 'footer-clean', style: { backgroundColor: 'rgb(24,24,24)', paddingTop: '0px', height: '394px' } },
    React.createElement(
      'footer',
      null,
      React.createElement(
        'div',
        { className: (0, _classNames2.default)('container', footerClass), style: { paddingTop: '40px' } },
        React.createElement(
          'div',
          { className: 'row no-gutters' },
          React.createElement(
            'div',
            { className: 'col-6 col-sm-6 col-md-2 col-xl-2 offset-xl-1 item' },
            React.createElement(
              'h3',
              { style: { fontWeight: 'normal', color: '#00d7b8' } },
              'Faast'
            ),
            React.createElement(
              'ul',
              null,
              React.createElement(
                'li',
                null,
                React.createElement(
                  'a',
                  { className: 'text-white', href: '/app', target: '_blank noopener noreferrer' },
                  'Portfolio'
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  'a',
                  { className: 'text-white', href: '/app/swap', target: '_blank noopener noreferrer' },
                  'Swap'
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  'a',
                  { className: 'text-white', href: 'https://medium.com/faast', target: '_blank noopener noreferrer' },
                  'Blog'
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'col-6 col-sm-6 col-md-2 col-xl-2 offset-md-1 offset-xl-1 item' },
            React.createElement(
              'h3',
              { style: { fontWeight: 'normal', color: 'rgb(251,181,18)' } },
              'Bitaccess'
            ),
            React.createElement(
              'ul',
              null,
              React.createElement(
                'li',
                null,
                React.createElement(
                  'a',
                  { className: 'text-white', href: 'https://bitaccess.ca/about-us/', target: '_blank noopener noreferrer' },
                  'About Us'
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  'a',
                  { className: 'text-white', href: '/terms', target: '_blank noopener noreferrer' },
                  'Terms of use'
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  'a',
                  { className: 'text-white', href: '/privacy', target: '_blank noopener noreferrer' },
                  'Privacy Policy'
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'col-6 col-sm-6 col-md-2 col-xl-2 offset-md-2 offset-xl-1 item' },
            React.createElement(
              'h3',
              { className: 'text-light', style: { fontWeight: 'normal' } },
              'Contact'
            ),
            React.createElement(
              'ul',
              null,
              React.createElement(
                'li',
                null,
                React.createElement(
                  'a',
                  { href: 'mailto:support@faa.st', style: { color: 'rgb(255,255,255)' } },
                  'support@faa.st'
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'col-6 col-sm-6 col-md-2 col-xl-2 offset-md-1 offset-xl-1 item' },
            React.createElement(
              'h3',
              { className: 'text-light', style: { fontWeight: 'normal' } },
              'Links'
            ),
            React.createElement(
              'ul',
              null,
              React.createElement(
                'li',
                null,
                React.createElement(
                  'a',
                  { href: 'https://api.faa.st/', target: '_blank noopener noreferrer', style: { color: 'rgb(255,255,255)' } },
                  'API'
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  'a',
                  { href: '/static/faast-press-kit.zip', target: '_blank noopener noreferrer', style: { color: 'rgb(255,255,255)' } },
                  'Press Kit'
                )
              ),
              React.createElement('li', null)
            )
          ),
          React.createElement(
            'div',
            { className: 'col-lg-12 col-xl-12 offset-lg-0 offset-xl-0 item social text-white', style: { minHeight: '0px', paddingRight: '0px', paddingLeft: '0px' } },
            React.createElement(
              'a',
              { href: 'https://github.com/go-faast' },
              React.createElement('i', { className: 'icon ion-social-github' })
            ),
            React.createElement(
              'a',
              { href: 'https://www.facebook.com/Faast-237787136707810', target: '_blank noopener noreferrer' },
              React.createElement('i', { className: 'icon ion-social-facebook' })
            ),
            React.createElement(
              'a',
              { href: 'https://twitter.com/gofaast' },
              React.createElement('i', { className: 'icon ion-social-twitter' })
            ),
            React.createElement(
              'a',
              { href: 'https://slack.faa.st/', target: '_blank noopener noreferrer' },
              React.createElement('i', { className: 'fab fa-slack-hash' })
            ),
            React.createElement(
              'a',
              { href: 'https://www.reddit.com/r/gofaast/', target: '_blank noopener noreferrer' },
              React.createElement('i', { className: 'icon ion-social-reddit' })
            ),
            React.createElement(
              'p',
              { className: 'lead text-white copyright' },
              '\xA9 ',
              _config2.default.year,
              ' ',
              _config2.default.author
            )
          )
        )
      )
    )
  );
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("bignumber.js");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _reactStatic = __webpack_require__(3);

var _recompose = __webpack_require__(1);

var _EmailSubscriptionForm = __webpack_require__(4);

var _EmailSubscriptionForm2 = _interopRequireDefault(_EmailSubscriptionForm);

var _IconCarousel = __webpack_require__(44);

var _IconCarousel2 = _interopRequireDefault(_IconCarousel);

var _Header = __webpack_require__(5);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(6);

var _Footer2 = _interopRequireDefault(_Footer);

var _trezor = __webpack_require__(14);

var _trezor2 = _interopRequireDefault(_trezor);

var _ledger = __webpack_require__(15);

var _ledger2 = _interopRequireDefault(_ledger);

var _mist = __webpack_require__(16);

var _mist2 = _interopRequireDefault(_mist);

var _metamask = __webpack_require__(17);

var _metamask2 = _interopRequireDefault(_metamask);

var _status = __webpack_require__(18);

var _status2 = _interopRequireDefault(_status);

var _coinbase = __webpack_require__(19);

var _coinbase2 = _interopRequireDefault(_coinbase);

var _trust = __webpack_require__(20);

var _trust2 = _interopRequireDefault(_trust);

var _mew = __webpack_require__(47);

var _mew2 = _interopRequireDefault(_mew);

var _secure = __webpack_require__(48);

var _secure2 = _interopRequireDefault(_secure);

var _simple = __webpack_require__(49);

var _simple2 = _interopRequireDefault(_simple);

var _privacy = __webpack_require__(50);

var _privacy2 = _interopRequireDefault(_privacy);

var _addWallet = __webpack_require__(51);

var _addWallet2 = _interopRequireDefault(_addWallet);

var _viewDashboard = __webpack_require__(52);

var _viewDashboard2 = _interopRequireDefault(_viewDashboard);

var _swapFunds = __webpack_require__(53);

var _swapFunds2 = _interopRequireDefault(_swapFunds);

var _moonBackground = __webpack_require__(54);

var _moonBackground2 = _interopRequireDefault(_moonBackground);

var _macbookScreenshot = __webpack_require__(55);

var _macbookScreenshot2 = _interopRequireDefault(_macbookScreenshot);

var _macbookScreenshot3 = __webpack_require__(56);

var _macbookScreenshot4 = _interopRequireDefault(_macbookScreenshot3);

var _bitaccess = __webpack_require__(57);

var _bitaccess2 = _interopRequireDefault(_bitaccess);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/* tslint:disable:max-line-length */

// import logoImg from 'Img/faast-logo.png'
exports.default = (0, _recompose.compose)((0, _recompose.setDisplayName)('Home'), _reactStatic.withRouteData)(function (_a) {
  var supportedAssets = _a.supportedAssets;
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      null,
      React.createElement(_Header2.default, null),
      React.createElement(
        'div',
        { className: 'jumbotron jumbotron-fluid hero-technology mb-0', style: {
            backgroundImage: "url(" + _moonBackground2.default + ")",
            height: '759px',
            backgroundPosition: '50% 25px',
            backgroundSize: '1400px',
            backgroundRepeat: 'no-repeat',
            marginTop: '-160px',
            paddingTop: '220px',
            backgroundColor: 'rgba(0,26,23)'
          } },
        React.createElement(
          'h1',
          { className: 'hero-title', style: { fontWeight: 'normal' } },
          'Trade Crypto'
        ),
        React.createElement(
          'p',
          { className: 'hero-subtitle', style: { fontWeight: 'normal', width: '90%' } },
          'It\u2019s never been this easy to build a diversified cryptocurrency portfolio',
          React.createElement('br', null)
        ),
        React.createElement(
          'p',
          null,
          React.createElement(
            'a',
            { className: 'btn btn-light btn-lg hero-button py-2', role: 'button', href: '/app' },
            'Create A Portfolio'
          )
        ),
        React.createElement(
          'div',
          { className: 'intro', style: { paddingTop: '60px' } },
          React.createElement('img', { className: 'img-fluid', src: _macbookScreenshot2.default, style: { height: '100%', width: '730px' } })
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'features-clean' },
      React.createElement(
        'div',
        { className: 'container', style: { paddingTop: '100px' } },
        React.createElement(
          'h2',
          { className: 'text-center', style: { marginBottom: '75px', fontWeight: 'normal' } },
          'Instantly build a cryptocurrency portfolio'
        ),
        React.createElement(
          'div',
          { className: 'row features' },
          React.createElement(
            'div',
            { className: 'col-sm-12 col-md-4 col-lg-4 item' },
            React.createElement('i', { className: 'far fa-check-circle icon', style: { color: '#01B69B' } }),
            React.createElement(
              'h3',
              { className: 'name', style: { fontWeight: 'normal' } },
              'Safe & Secure',
              React.createElement('br', null)
            ),
            React.createElement(
              'p',
              { className: 'description', style: { fontSize: '16px' } },
              'Trade directly from your wallet\u2014 we never control your funds or see your private key.',
              React.createElement('br', null)
            )
          ),
          React.createElement(
            'div',
            { className: 'col-sm-12 col-md-4 col-lg-4 item' },
            React.createElement('i', { className: 'far fa-check-circle icon', style: { color: '#01B69B' } }),
            React.createElement(
              'h3',
              { className: 'name', style: { fontWeight: 'normal' } },
              'No Sign Up Required',
              React.createElement('br', null)
            ),
            React.createElement(
              'p',
              { className: 'description', style: { fontSize: '16px' } },
              'No need to register or share any personal info.',
              React.createElement('br', null)
            )
          ),
          React.createElement(
            'div',
            { className: 'col-sm-12 col-md-4 col-lg-4 item' },
            React.createElement('i', { className: 'far fa-check-circle icon', style: { color: '#01B69B' } }),
            React.createElement(
              'h3',
              { className: 'name', style: { fontWeight: 'normal' } },
              'Lightning Fast',
              React.createElement('br', null)
            ),
            React.createElement(
              'p',
              { className: 'description', style: { fontSize: '16px' } },
              'With instant access to over 100+ coins!',
              React.createElement('br', null)
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'row justify-content-center' },
          React.createElement(
            'div',
            { className: 'col-md-12 col-lg-8', style: { paddingTop: '20px' } },
            React.createElement(
              'h5',
              { className: 'text-center text-body' },
              React.createElement(
                'strong',
                null,
                'No deposit fees. No subscription fees. No exit fees. Faast is a simple, low cost on-chain trading engine.'
              )
            )
          ),
          React.createElement('div', { className: 'w-100' }),
          React.createElement(
            'div',
            { className: 'col-12 col-md-12 col-lg-8 col-xl-8' },
            React.createElement(
              'h3',
              { className: 'text-center text-dark', style: { marginTop: '3rem' } },
              'Leave more in your wallet'
            ),
            React.createElement(
              'p',
              { className: 'text-center', style: { marginTop: '0.5rem', marginBottom: '2rem' } },
              'Amount received from trading $100 of Aragon for Aeternity'
            ),
            React.createElement(
              'div',
              { style: { height: '64px', backgroundColor: '#00d7b8', marginBottom: '20px', width: '90%' } },
              React.createElement(
                'h6',
                { className: 'text-dark mb-2', style: { marginLeft: '8px', paddingTop: '8px' } },
                'Faast'
              ),
              React.createElement(
                'p',
                { className: 'text-dark', style: { marginLeft: '8px' } },
                React.createElement(
                  'strong',
                  null,
                  '$95.80'
                ),
                React.createElement('br', null)
              )
            ),
            React.createElement(
              'div',
              { style: { height: '64px', backgroundColor: '#E3E5E8', marginBottom: '20px', width: '40%' } },
              React.createElement(
                'h6',
                { className: 'text-dark mb-2', style: { marginLeft: '8px', paddingTop: '8px' } },
                'Kyber Network',
                React.createElement('br', null)
              ),
              React.createElement(
                'p',
                { className: 'text-dark', style: { marginLeft: '8px' } },
                React.createElement(
                  'strong',
                  null,
                  '$90.79'
                ),
                React.createElement('br', null)
              )
            ),
            React.createElement(
              'div',
              { style: { height: '64px', backgroundColor: '#E3E5E8', marginBottom: '20px', width: '30%' } },
              React.createElement(
                'h6',
                { className: 'text-dark mb-2', style: { marginLeft: '8px', paddingTop: '8px' } },
                'Binance & Bittrex',
                React.createElement('br', null)
              ),
              React.createElement(
                'p',
                { className: 'text-dark', style: { marginLeft: '8px' } },
                React.createElement(
                  'strong',
                  null,
                  '$89.91'
                ),
                React.createElement('br', null)
              )
            ),
            React.createElement(
              'p',
              { className: 'text-center', style: { marginTop: '2rem', marginBottom: '3rem' } },
              React.createElement(
                'small',
                null,
                'Method: this graph shows the estimated amount received from trading $100 worth of Aragon (ANT) for Aeternity (AE) using Faast versus other popular cryptocurrency providers. Click ',
                React.createElement(
                  'a',
                  { className: 'text-dark', href: 'https://medium.com/faast/binance-vs-kyber-vs-faast-which-exchange-will-save-you-the-most-money-e19972dd11df', target: '_blank' },
                  'here'
                ),
                ' to learn more.'
              )
            ),
            React.createElement(
              'p',
              { className: 'lead text-center py-3 px-3 mb-4', style: { backgroundColor: '#F3F5F8' } },
              React.createElement(
                'a',
                { className: 'text-dark', href: 'https://medium.com/faast/binance-vs-kyber-vs-faast-which-exchange-will-save-you-the-most-money-e19972dd11df', target: '_blank' },
                'Read our Medium post on end-to-end price comparisons'
              )
            )
          )
        ),
        React.createElement('div', { className: 'row' })
      )
    ),
    React.createElement(
      'div',
      { className: 'py-4', style: { backgroundColor: '#015247' } },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'div',
          { className: 'row align-items-center' },
          React.createElement(
            'div',
            { className: 'col-auto text-center px-5 py-4 d-none d-md-block', style: { borderRight: 'solid 2px #0D342E' } },
            React.createElement(
              'h1',
              { className: 'currency-count text-white font-weight-bold' },
              supportedAssets.length
            ),
            React.createElement(
              'h4',
              { className: 'text-light mb-0' },
              'Coins Supported'
            )
          ),
          React.createElement(
            'div',
            { className: 'col-12 text-center py-3 d-md-none' },
            React.createElement(
              'h1',
              { className: 'currency-count text-white font-weight-bold' },
              supportedAssets.length,
              ' ',
              React.createElement(
                'small',
                null,
                'Coins Supported'
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'col px-2' },
            React.createElement(_IconCarousel2.default, { items: supportedAssets.map(function (_a) {
                var symbol = _a.symbol,
                    name = _a.name,
                    iconUrl = _a.iconUrl;
                return {
                  key: symbol,
                  label: React.createElement(
                    'p',
                    null,
                    name
                  ),
                  iconUrl: iconUrl,
                  link: "/app/assets/" + symbol
                };
              }) })
          )
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'highlight-phone slick-interface-section' },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'div',
          { className: 'row align-items-center' },
          React.createElement(
            'div',
            { className: 'col-md-6 col-lg-5 col-xl-5 offset-md-0 offset-lg-0 offset-xl-1 align-self-center', style: { marginBottom: '0px' } },
            React.createElement(
              'div',
              { className: 'intro' },
              React.createElement(
                'h2',
                { className: 'text-white', style: { fontWeight: 'normal', marginBottom: '20px' } },
                'Slick & Simple Interface'
              ),
              React.createElement(
                'p',
                { className: 'text-white', style: { marginBottom: '30px' } },
                'With our unique and intuitive ',
                React.createElement(
                  'strong',
                  null,
                  '\u2018click-and-drag\u2019 slider\xA0interface'
                ),
                ', you can visually allocate how much of any coin you want to toward a trade\u2014 swap multiple coins at once, and build a diversified portfolio in seconds with only a single transaction.',
                React.createElement('br', null)
              ),
              React.createElement(
                'a',
                { className: 'btn btn-light active', role: 'button', href: '/app' },
                'Start Trading'
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'col-sm-12 col-md-6 col-lg-7 col-xl-6 offset-md-0 offset-lg-0 offset-xl-0 align-self-center', style: { paddingTop: '30px' } },
            React.createElement('img', { className: 'img-fluid', src: _macbookScreenshot4.default, style: { marginTop: '0px' } })
          )
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'text-white mt-5' },
      React.createElement(
        'p',
        { className: 'lead text-center text-muted', style: { marginTop: '0px', marginBottom: '20px' } },
        'Supported Wallets',
        React.createElement('br', null)
      ),
      React.createElement(
        'div',
        { className: 'row no-gutters justify-content-center' },
        React.createElement(
          'div',
          { className: 'col-auto' },
          React.createElement(
            'a',
            { className: 'd-block text-white', href: '/app/connect/hw/trezor' },
            React.createElement('img', { className: 'rounded wallet-logo', src: _trezor2.default, alt: 'trezor' }),
            React.createElement(
              'p',
              { className: 'text-center pt-2' },
              'TREZOR'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'col-auto' },
          React.createElement(
            'a',
            { className: 'd-block text-white', href: '/app/connect/hw/ledger' },
            React.createElement('img', { className: 'rounded wallet-logo', src: _ledger2.default, alt: 'ledger logo' }),
            React.createElement(
              'p',
              { className: 'text-center pt-2' },
              'Ledger Wallet'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'col-auto' },
          React.createElement(
            'a',
            { className: 'd-block text-white', href: '/app/connect' },
            React.createElement('img', { className: 'rounded wallet-logo', src: _metamask2.default, alt: 'metamask logo' }),
            React.createElement(
              'p',
              { className: 'text-center pt-2' },
              'MetaMask'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'col-auto' },
          React.createElement(
            'a',
            { className: 'd-block text-white', href: '/app/connect' },
            React.createElement('img', { className: 'rounded wallet-logo', src: _mist2.default, alt: 'mist logo' }),
            React.createElement(
              'p',
              { className: 'text-center pt-2' },
              'Mist'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'col-auto' },
          React.createElement(
            'a',
            { className: 'd-block text-white', href: '/app/connect' },
            React.createElement('img', { className: 'rounded wallet-logo', src: _trust2.default, alt: 'trust wallet logo' }),
            React.createElement(
              'p',
              { className: 'text-center pt-2' },
              'Trust Wallet'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'col-auto' },
          React.createElement(
            'a',
            { className: 'd-block text-white', href: '/app/connect' },
            React.createElement('img', { className: 'rounded wallet-logo', src: _coinbase2.default, alt: 'coinbase wallet logo' }),
            React.createElement(
              'p',
              { className: 'text-center pt-2' },
              'Coinbase Wallet'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'col-auto' },
          React.createElement(
            'a',
            { className: 'd-block text-white', href: '/app/connect' },
            React.createElement('img', { className: 'rounded wallet-logo', src: _status2.default, alt: 'status logo' }),
            React.createElement(
              'p',
              { className: 'text-center pt-2' },
              'Status'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'col-auto' },
          React.createElement(
            'a',
            { className: 'd-block text-white', href: '/app/connect' },
            React.createElement('img', { className: 'rounded wallet-logo', src: _mew2.default, alt: 'my ether wallet logo' }),
            React.createElement(
              'p',
              { className: 'text-center pt-2' },
              'Keystore'
            )
          )
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'team-clean mt-5' },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement('div', { className: 'intro' }),
        React.createElement(
          'div',
          { className: 'row people' },
          React.createElement(
            'div',
            { className: 'col-sm-4 col-md-4 col-lg-4 item pt-2r' },
            React.createElement('img', { src: _secure2.default, style: { height: '161px', width: '316px', backgroundColor: 'rgba(243,245,248,0)', padding: '25px' } }),
            React.createElement(
              'h5',
              { className: 'name', style: { fontWeight: 'normal' } },
              'Secure'
            ),
            React.createElement(
              'p',
              { className: 'description' },
              'The safest trading method in the world\u2014 we don\u2019t have your money; if we got hacked, you\u2019d lose nothing.',
              React.createElement('br', null)
            )
          ),
          React.createElement(
            'div',
            { className: 'col-sm-4 col-md-4 col-lg-4 offset-md-3 offset-lg-0 item ml-0 pt-2r' },
            React.createElement('img', { src: _simple2.default, style: { width: '306px', padding: '36px', backgroundColor: 'rgba(243,245,248,0)', height: '161px' } }),
            React.createElement(
              'h5',
              { className: 'name', style: { fontWeight: 'normal' } },
              'Simple'
            ),
            React.createElement('p', { className: 'title' }),
            React.createElement(
              'p',
              { className: 'description' },
              'Intuitive and mobile friendly UI makes crypto trading simple and easy.',
              React.createElement('br', null)
            )
          ),
          React.createElement(
            'div',
            { className: 'col-sm-4 col-md-4 col-lg-4 item pt-2r' },
            React.createElement('img', { className: 'rounded-circle', src: _privacy2.default, style: { width: '234px', height: '161px', padding: '36px', backgroundColor: 'rgba(243,245,248,0)' } }),
            React.createElement(
              'h5',
              { className: 'name', style: { fontWeight: 'normal' } },
              'Private'
            ),
            React.createElement(
              'p',
              { className: 'description' },
              'You don\u2019t need to share personal data, photo ID, or anything else\u2014 just safe and confidential trades.',
              React.createElement('br', null)
            )
          ),
          React.createElement(
            'div',
            { className: 'col' },
            React.createElement('hr', { style: { height: '-1px', backgroundColor: 'rgba(0,0,0,0.15)', marginTop: '30px' } }),
            React.createElement(
              'h2',
              { className: 'text-center name', style: { marginTop: '30px', fontWeight: 'normal' } },
              'Get started in minutes'
            )
          )
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'features-boxed', style: { backgroundColor: '#ffffff' } },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement('div', { className: 'intro' }),
        React.createElement(
          'div',
          { className: 'row justify-content-center features', style: { paddingTop: '0px', marginTop: '-60px' } },
          React.createElement(
            'div',
            { className: 'col-sm-4 col-md-4 col-lg-3 item' },
            React.createElement(
              'div',
              { className: 'box' },
              React.createElement('img', { src: _addWallet2.default, style: { marginBottom: '23px' } }),
              React.createElement(
                'h3',
                { className: 'name', style: { fontWeight: 'normal' } },
                'Add Wallet'
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'col-sm-4 col-md-4 col-lg-3 item' },
            React.createElement(
              'div',
              { className: 'box' },
              React.createElement('img', { src: _viewDashboard2.default, style: { marginBottom: '30px' } }),
              React.createElement(
                'h3',
                { className: 'name', style: { fontWeight: 'normal' } },
                'View Dashboard'
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'col-sm-4 col-md-4 col-lg-3 item' },
            React.createElement(
              'div',
              { className: 'box' },
              React.createElement('img', { src: _swapFunds2.default, style: { marginBottom: '20px' } }),
              React.createElement(
                'h3',
                { className: 'name', style: { fontWeight: 'normal' } },
                'Swap Funds'
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'col-md-4 col-lg-4 col-xl-4 offset-md-0 offset-lg-0 offset-xl-0', style: { paddingTop: '10px' } },
            React.createElement(
              'a',
              { className: 'btn btn-dark btn-block btn-lg hero-button', role: 'button', href: '/app' },
              'Get Started'
            )
          )
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'newsletter-subscribe', style: { backgroundColor: '#181818' } },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'div',
          { className: 'text-center w-100 mb-4' },
          React.createElement(
            'p',
            { className: 'text-white' },
            'Vote for us on Product Hunt'
          ),
          React.createElement('iframe', { src: 'https://yvoschaap.com/producthunt/counter.html#href=https%3A%2F%2Fwww.producthunt.com%2Fr%2Fp%2F114880&layout=tall', width: '56px', height: '65px', scrolling: 'no', frameBorder: 0 })
        ),
        React.createElement(_EmailSubscriptionForm2.default, null)
      )
    ),
    React.createElement(
      'div',
      { className: 'brands' },
      React.createElement(
        'a',
        { className: 'text-white-50', href: 'https://bitaccess.ca/', target: '_blank', style: { backgroundColor: '#364B5E', height: '185px', textDecoration: 'none' } },
        React.createElement(
          'p',
          { className: 'text-center text-white' },
          'Made by the team at',
          React.createElement('br', null)
        ),
        React.createElement('img', { src: _bitaccess2.default, style: { marginTop: '0px' } })
      )
    ),
    React.createElement(_Footer2.default, null)
  );
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("class-names");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  name: 'Faa.st',
  author: 'Bitaccess',
  description: 'Faast is the safest and fastest way to build a crypto currency portfolio. Connect your hardware wallet, metamask, or other ethereum wallet and let us do the work for you. Easily trade over 100 different tokens for near-zero fees.',
  year: new Date().getFullYear()
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/trezor.79356ffc.png";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/ledger.9901cd86.png";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/mist.afce935f.png";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/metamask.023762b6.png";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/status.e3bf9bf3.png";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/coinbase.748629a3.png";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/trust.c9743217.png";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(1);

var _reactstrap = __webpack_require__(22);

var _Header = __webpack_require__(5);

var _Header2 = _interopRequireDefault(_Header);

var _EmailSubscriptionForm = __webpack_require__(4);

var _EmailSubscriptionForm2 = _interopRequireDefault(_EmailSubscriptionForm);

var _Footer = __webpack_require__(6);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _recompose.compose)((0, _recompose.setDisplayName)('Terms'))(function () {
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      'div',
      { className: 'container my-4' },
      _react2.default.createElement(
        _reactstrap.Card,
        null,
        _react2.default.createElement(
          _reactstrap.CardHeader,
          { className: 'font-weight-bold' },
          _react2.default.createElement(
            'h4',
            null,
            'Terms of Use'
          )
        ),
        _react2.default.createElement(
          _reactstrap.CardBody,
          { className: 'text-muted' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h5',
              { className: 'text-white' },
              'Terms'
            ),
            _react2.default.createElement(
              'p',
              null,
              'By accessing the website at https://faa.st, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'b',
                null,
                'The risk of loss in trading or holding Digital Currency can be substantial. You should therefore carefully consider whether trading or holding Digital Currency is suitable for you in light of your financial condition.'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h5',
              { className: 'text-white' },
              'Use License'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Permission is granted to temporarily download one copy of the materials (information or software) on faa.st website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose, or for any public display (commercial or non-commercial); attempt to decompile or reverse engineer any software contained on the faa.st website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or "mirror" the materials on any other server. This license shall automatically terminate if you violate any of these restrictions and may be terminated by faa.st at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h5',
              { className: 'text-white' },
              'Lost Passwords'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'b',
                null,
                _react2.default.createElement(
                  'u',
                  null,
                  'WARNING: In many cases, a lost of forgotten password can result in the inability to transfer digital currency!'
                )
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'b',
                null,
                _react2.default.createElement(
                  'u',
                  null,
                  'faa.st does not store passwords. IF YOU LOSE YOUR PASSWORD, YOU LOSE ALL ACCESS TO YOUR DIGITAL CURRENCY.'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h5',
              { className: 'text-white' },
              'ELIGIBILITY'
            ),
            _react2.default.createElement(
              'p',
              null,
              'By accessing or using the Site, you represent and warrant that you are at least 18 years old and have not previously been suspended or removed from the Site. You also represent and warrant that you are not a resident of a Restricted Location as listed below. The list of Restricted States is subject to change at any time.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'RESTRICTED LOCATIONS: NORTH KOREA, IRAN, CUBA, NEW YORK STATE (USA), WASHINGTON STATE (USA), NEW HAMPSHIRE (USA)'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h5',
              { className: 'text-white' },
              'Third Parties'
            ),
            _react2.default.createElement(
              'p',
              null,
              'faa.st has no control over, or liability for, the delivery, quality, safety, legality or any other aspect of any goods or services that you may purchase or sell to or from a third party. faa.st is not responsible for ensuring that a buyer or a seller you may transact with will actually complete the transaction or is authorized to do so. If you experience a problem with any goods or services purchased from, or sold to, a third party in connection with Digital Currency transferred using the faa.st services, or if you have a dispute with such third party, you must resolve the dispute directly with that third party.'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h5',
              { className: 'text-white' },
              'Digital Currency Protocols'
            ),
            _react2.default.createElement(
              'p',
              null,
              'faa.st does not own or control the underlying software protocols which govern the operation of Digital Currencies supported on our platform. In general, the underlying protocols are open source and anyone can use, copy, modify, and distribute them. By using faa.st, you acknowledge and agree (i) that faa.st is not responsible for operation of the underlying protocols and that faa.st makes no guarantee of their functionality, security, or availability; and (ii) that the underlying protocols are subject to sudden changes in operating rules (a/k/a \u201Cforks\u201D), and that such forks may materially affect the value, function, and/or even the name of the Digital Currency . In the event of a fork, you agree that faa.st may temporarily suspend faa.st operations (with or without advance notice to you) and that faa.st may, in its sole discretion, decide whether or not to support (or cease supporting) either branch of the forked protocol entirely. You acknowledge and agree that faa.st assumes absolutely no responsibility whatsoever in respect of an unsupported branch of a forked protocol.'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h5',
              { className: 'text-white' },
              'Conversion'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Eligible users in certain jurisdictions may use the faa.st interface to assist in the conversion supported Digital Currency. ',
              _react2.default.createElement(
                'b',
                null,
                'Faa.st is not a counterparty to these conversions.'
              ),
              'Faa.st provides an API or "Application Program Interface" which provides digital currency addresses which are generally used to convert from one digital currency to another. Faa.st takes no responsibility if a conversion does not complete as expected. Any disputes should be directed to the owner of the associated digital currency address. The conversions are subject to the faa.st "conversion rate" for the given transaction, which are derived from digital currency networks. "Conversion rate" means the price of a given supported Digital Currency amount  as quoted on the faa.st API, which may be displayed on the faa.st website. The conversion rate is stated as a "Price" or as a "Rate," which is the price in terms of Digital Currency at which you may convert a supported Digital Currency on a digital currency network. You acknowledge that the price conversion rate may not be exactly as stated on the faa.st website, and that faa.st may add a margin or \u201Cspread\u201D to the quoted conversion rate. You agree, as a condition of using any faa.st conversion Services, to accept the conversion rate as the sole conversion metric. Faa.st reserves the right to delay any conversion Service transaction if it perceives a risk of fraud or illegal activity. Faa.st does not guarantee the availability of its conversion Service, and the act of coverting supported Digital Currency does not result in a guarantee that you may convert your supported Digital Currency again at a later time.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Each Conversion Service transaction is subject to a fee (a "Conversion Fee"). The applicable Conversion Fee is reflected in the price or rate displayed on the faa.st site.'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'b',
                null,
                'You cannot cancel, reverse, or change any transaction marked as complete or pending.'
              ),
              'If faa.st suspects the transaction involves (or has a high risk of involvement in) money laundering, terrorist financing, fraud, or any other type of financial crime; in response to a subpoena, court order, or other government order; if faa.st reasonably suspects that the transaction is erroneous; or if faa.st suspects the transaction relates to Prohibited Use or a Prohibited Business as set forth below. In such instances, faa.st will reverse the transaction and we are under no obligation to allow you to reinstate a purchase or sale order at the same price or on the same terms as the cancelled transaction.'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h5',
              null,
              'Disclaimer'
            ),
            _react2.default.createElement(
              'p',
              null,
              'The materials on the faa.st website are provided on an \'as is\' basis. faa.st makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, faa.st does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h5',
              { className: 'text-white' },
              'Limitation of Liability'
            ),
            _react2.default.createElement(
              'p',
              null,
              'IN NO EVENT SHALL FAA.ST, ITS AFFILIATES AND SERVICE PROVIDERS, OR ANY OF THEIR RESPECTIVE OFFICERS, DIRECTORS, AGENTS, JOINT VENTURERS, EMPLOYEES OR REPRESENTATIVES, BE LIABLE (A) FOR ANY LOST PROFITS OR ANY SPECIAL, INCIDENTAL, INDIRECT, INTANGIBLE, OR CONSEQUENTIAL DAMAGES, WHETHER BASED IN CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE, ARISING OUT OF OR IN CONNECTION WITH AUTHORIZED OR UNAUTHORIZED USE OF THE FAA.ST SITE OR THE FAA.ST SERVICES, OR THIS AGREEMENT, EVEN IF AN AUTHORIZED REPRESENTATIVE OF FAA.ST HAS BEEN ADVISED OF OR KNEW OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF SUCH DAMAGES. THIS MEANS, BY WAY OF EXAMPLE ONLY (AND WITHOUT LIMITING THE SCOPE OF THE PRECEDING SENTENCE), THAT IF YOU CLAIM THAT FAA.ST FAILED TO PROCESS A BUY OR SELL TRANSACTION PROPERLY, YOUR DAMAGES ARE LIMITED TO NO MORE THAN THE VALUE OF THE SUPPORTED DIGITAL CURRENCY AT ISSUE IN THE TRANSACTION, AND THAT YOU MAY NOT RECOVER FOR LOST PROFITS, LOST BUSINESS OPPORTUNITES, OR OTHER TYPES OF SPECIAL, INCIDENTIAL, INDIRECT, INTANGIBLE, OR CONSEQUENTIAL DAMAGES IN EXCESS OF THE VALUE OF THE SUPPORTED DIGITAL CURRENCY AT ISSUE IN THE TRANSACTION.SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES SO THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.',
              _react2.default.createElement(
                'b',
                null,
                'THE FAA.ST SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY REPRESENTATION OR WARRANTY, WHETHER EXPRESS, IMPLIED OR STATUTORY.'
              ),
              'TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, FAA.ST SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND/OR NON-INFRINGEMENT. FAA.ST DOES NOT MAKE ANY REPRESENTATIONS OR WARRANTIES THAT ACCESS TO THE SITE, ANY PART OF THE FAA.ST SERVICES, OR ANY OF THE MATERIALS CONTAINED THEREIN, WILL BE CONTINUOUS, UNINTERRUPTED, TIMELY, OR ERROR-FREE.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'In no event shall faa.st or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the faa.st website, even if faa.st or a faa.st authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h5',
              { className: 'text-white' },
              'Arbitration'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'b',
                null,
                'PLEASE READ THIS SECTION CAREFULLY \u2013 IT MAY SIGNIFICANTLY AFFECT YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT AND TO HAVE A JURY HEAR YOUR CLAIMS.'
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              'To expedite and control the cost of disputes, you and we agree that any legal or equitable claim arising out of or relating to your use of the Services or these Terms, including the formation, validity, enforceability, scope, or applicability of these Terms, including this Section 23 (referred to as a \u201CClaim\u201D) will be resolved as follows: except for claims for injunctive or equitable relief or claims regarding intellectual property rights (which may be brought in any competent court without the posting of a bond), any dispute arising under your use of the Services shall be finally settled on an individual basis through confidential, binding arbitration in accordance with the Canadian Arbitration Association\'s rules for arbitration of consumer-related disputes, available at www.canadianarbitrationassociation.ca, and you and faa.st hereby expressly waive trial by jury. This means that all claims other than intellectual property lawsuits, such as copyright or trademark infringement lawsuits, or claims seeking non-monetary relief would be subject to binding arbitration. This includes claims which may pre-date this agreement. The arbitration shall take place in Ontario, Canada, in the English language and the arbitral decision may be enforced in any court. At your request, hearings may be conducted in person or by telephone and the arbitrator may provide for submitting and determining motions on briefs, without oral hearings. Payment of all filing, administration and arbitrator fees will be governed by the CAA\' rules. The prevailing party in any action or proceeding to enforce this agreement shall be entitled to costs and attorneys\' fees. To begin an arbitration proceeding, you must send a letter by e-mail to legal@faa.st.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'ADDITIONALLY, YOU HEREBY WAIVE YOUR RIGHT TO PARTICIPATE IN A className ACTION LAWSUIT OR className-WIDE ARBITRATION. We each agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a className, consolidated or representative action. If for any reason a claim proceeds in court rather than in arbitration, we each waive any right to a jury trial. If a court or federal regulator with oversight over faa.st decides that applicable law precludes enforcement of any of this section\u2019s limitations as to a particular claim for relief, then that claim (and only that claim) must be severed from the arbitration and may be brought in court, subject to your and faa.st\'s right to appeal the court\'s decision. All other claims will be arbitrated.'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h5',
              { className: 'text-white' },
              'Accuracy of materials'
            ),
            _react2.default.createElement(
              'p',
              null,
              'The materials appearing on the faa.st website could include technical, typographical, or photographic errors. faa.st does not warrant that any of the materials on its website are accurate, complete or current. faa.st may make changes to the materials contained on its website at any time without notice. However faa.st does not make any commitment to update the materials.'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h5',
              { className: 'text-white' },
              'General Provisions'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Entire Agreement: This Agreement, and the Privacy Policy by reference herein comprise the entire understanding and agreement between you and faa.st as to the subject matter hereof, and supersedes any and all prior discussions, agreements and understandings of any kind (including without limitation any prior versions of this Agreement), and every nature between and among you and faa.st. Section headings in this Agreement are for convenience only, and shall not govern the meaning or interpretation of any provision of this Agreement.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Assignment:  You may not assign any rights and/or licenses granted under this Agreement. We reserve the right to assign our rights without restriction, including without limitation to any faa.st affiliates or subsidiaries, or to any successor in interest of any business associated with the faa.st Services. Any attempted transfer or assignment in violation hereof shall be null and void. Subject to the foregoing, this Agreement will bind and inure to the benefit of the parties, their successors and permitted assigns.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Severability: If any provision of this Agreement shall be determined to be invalid or unenforceable under any rule, law or regulation or any governmental agency, local, provincial, or federal, such provision will be changed and interpreted to accomplish the objectives of the provision to the greatest extent possible under any applicable law and the validity or enforceability of any other provision of this Agreement shall not be affected.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Change of Control: In the event that faa.st is acquired by or merged with a third party entity, we reserve the right, in any of these circumstances, to transfer or assign the information we have collected from you as part of such merger, acquisition, sale, or other change of control.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Survival: All provisions of this Agreement which by their nature extend beyond the expiration or termination of this Agreement, including, without limitation, sections pertaining to suspension or termination, faa.st Account cancellation, debts owed to faa.st, general use of the faa.st Site, disputes with faa.st, and general provisions, shall survive the termination or expiration of this Agreement.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Force Majeure: We shall not be liable for delays, failure in performance or interruption of service which result directly or indirectly from any cause or condition beyond our reasonable control, including but not limited to, any delay or failure due to any act of God, act of civil or military authorities, act of terrorists, civil disturbance, war, strike or other labor dispute, fire, interruption in telecommunications or Internet services or network provider services, failure of equipment and/or software, other catastrophe or any other occurrence which is beyond our reasonable control and shall not affect the validity and enforceability of any remaining provisions.'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h5',
              { className: 'text-white' },
              'Links'
            ),
            _react2.default.createElement(
              'p',
              null,
              'faa.st has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by faa.st of the site. Use of any such linked website is at the user\'s own risk.'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h5',
              { className: 'text-white' },
              'Modifications'
            ),
            _react2.default.createElement(
              'p',
              null,
              'faa.st may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h5',
              { className: 'text-white' },
              'Governing Law'
            ),
            _react2.default.createElement(
              'p',
              null,
              'These terms and conditions are governed by and construed in accordance with the laws of Ontario, Canada and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.'
            )
          )
        )
      )
    ),
    _react2.default.createElement(_EmailSubscriptionForm2.default, null),
    _react2.default.createElement(_Footer2.default, { footerClass: 'bg-ultra-dark p-4' })
  );
});

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(1);

var _reactstrap = __webpack_require__(22);

var _Header = __webpack_require__(5);

var _Header2 = _interopRequireDefault(_Header);

var _EmailSubscriptionForm = __webpack_require__(4);

var _EmailSubscriptionForm2 = _interopRequireDefault(_EmailSubscriptionForm);

var _Footer = __webpack_require__(6);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _recompose.compose)((0, _recompose.setDisplayName)('Privacy'))(function () {
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      'div',
      { className: 'container my-4' },
      _react2.default.createElement(
        _reactstrap.Card,
        null,
        _react2.default.createElement(
          _reactstrap.CardHeader,
          { className: 'font-weight-bold' },
          _react2.default.createElement(
            'h4',
            null,
            'Privacy Policy'
          )
        ),
        _react2.default.createElement(
          _reactstrap.CardBody,
          { className: 'text-muted' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h5',
              { className: 'text-white' },
              'Terms'
            ),
            _react2.default.createElement(
              'p',
              null,
              'This Privacy Policy describes how faa.st (\u201Cfaast,\u201D \u201Cwe,\u201D \u201Cour\u201D or \u201Cus\u201D) collects, uses, and handles your data when you use our website, products and services (\u201CServices\u201D). Please take the time to carefully read through this policy. As you use our Services, we want to be clear how faa.st uses your information and how your privacy is protected. By using the Services, you consent to the data practices detailed in this policy. This Privacy Policy does not apply to services offered by other companies or other sites linked from our Services.'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h5',
              { className: 'text-white' },
              'What information is collected?'
            ),
            _react2.default.createElement(
              'p',
              null,
              'When you use our Services, we may collect information you send us or information we receive from your use of our Services. We may collect information in the following ways:'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'i',
                null,
                'Information you give us.'
              ),
              ' We may collect information that you provide us through a web form, such as when you create a wallet or swap, or when you otherwise correspond with us regarding our Services, such as when you contact our customer support team or register for our mailing list. The information you provide us may include your email address (such that we can send you email) and/or a digital currency wallet address.'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'i',
                null,
                'Device information.'
              ),
              ' We may collect information about devices you use to access the Services and how you use the Services, such as your IP address and which websites you visited before accessing our Services.'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'i',
                null,
                'Logs.'
              ),
              ' Our servers automatically record information created by your use of our Services to help us diagnose and fix technical issues, and to improve the the overall quality and user experience of our Services. Logs may include information such as your IP address, browser type, operating system, details of how you used our Services (such as your commands at the command line), diagnostic information related to the Services (such as crash activity reports), the referring web page, pages visited, location, your mobile carrier, device and application IDs, search terms, and cookie information.'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'i',
                null,
                'Cookies.'
              ),
              ' We use technologies like cookies and pixel tags to gather information about how you are interacting with the Services, which may include identifying your IP address, browser type, and referring page.'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h5',
              { className: 'text-white' },
              'How is Collected Information Used'
            ),
            _react2.default.createElement(
              'p',
              null,
              'We collect and use information from you in order for us to provide, protect, and improve our Services, and to provide you with a personalized experience when using our Services. For example, when you provide us with your email address, we may send you updates on new Services and security notices.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Some specific examples of how faast may use your personal data are:'
            ),
            _react2.default.createElement(
              'p',
              null,
              'to customize, analyze, adjust and improve the site and services to better meet your needs;'
            ),
            _react2.default.createElement(
              'p',
              null,
              'to facilitate communication between faast and you;'
            ),
            _react2.default.createElement(
              'p',
              null,
              'to provide you with marketing and promotional information about products and services we believe may interest you (this information contains a subscriber link allowing you to opt out);'
            ),
            _react2.default.createElement(
              'p',
              null,
              'to enforce faast\'s agreements with you;'
            ),
            _react2.default.createElement(
              'p',
              null,
              'to provide you with important administrative information regarding the site and services, such as changes to this Privacy Policy, our Terms of Use and our other policies;'
            ),
            _react2.default.createElement(
              'p',
              null,
              'And to prevent fraud and other prohibited or illegal activities.'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h5',
              { className: 'text-white' },
              'How We Use Cookies'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Like most online businesses, we use cookies and web beacons on our websites and marketing-related emails to gather and analyze non-personal information such as the visitor\u2019s IP address, browser type, ISP, referring page, operating system, date / time, and basic geographic information. We use these technologies to provide, improve and protect our Services, for example to:'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Customize our Services, such as remembering you for the next time you use our Services;'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Measure product and marketing effectiveness;'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Collect information about your computing device to mitigate risk, help prevent fraud and promote trust and safety'
            ),
            _react2.default.createElement(
              'p',
              null,
              'You may set your browser to not accept cookies, but this may result in the Services not functioning properly for you.'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h5',
              { className: 'text-white' },
              'How Do We Protect Your Information?'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Throughout this policy, we use the term "personal information" to describe information that can be associated with a specific person and can be used to identify that person. We do not consider personal information to include information that has been anonymized so that it does not identify a specific user.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'faast takes reasonable precautions, as described herein, to protect your information from loss, misuse, unauthorized access, disclosure, alteration, and destruction. We may store, process and transmit information in locations around the world -- we may process your personal information on a server located outside the country you live. Some information may also be stored locally on devices you use to interact with faast\u2019s Services.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'We protect information by maintaining physical, electronic and procedural safeguards. We use firewalls and data encryption, we enforce physical access controls to our buildings and files, and we limit access to personal information only to those employees who need to know that information in order to process it for us.'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h5',
              { className: 'text-white' },
              'HOW WE SHARE PERSONAL INFORMATION WITH OTHER PARTIES'
            ),
            _react2.default.createElement(
              'p',
              null,
              'We do not sell, exchange, transfer, or give your personal information to any other company or individual for any reason except as set forth below:'
            ),
            _react2.default.createElement(
              'p',
              null,
              'We will share personal information with companies or individuals when we have your consent to do so;'
            ),
            _react2.default.createElement(
              'p',
              null,
              'We may provide personal information to our trusted services providers to process it for us to assist us in providing Services to you, and only based on our instructions and in adherence with this Privacy Policy and applicable confidentiality and security measures;'
            ),
            _react2.default.createElement(
              'p',
              null,
              'If we are involved in a merger or acquisition, your information may be transferred as part of that transaction. In such event, we will require that your personal information be protected in accordance with this Privacy Policy. We will notify you of any change in applicable policy.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'We will share personal information with law enforcement or other third parties if we: (1) are compelled to do so to comply with any applicable law or legal process; or (2) believe in good faith that disclosure is necessary to prevent physical harm, illegal activity, or harm to the rights, property, or safety of faast or our users.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'We may share non-personally identifiable information publicly and with our partners. For example, we may share anonymized analytics information that reveal general trends about our Services.'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h5',
              { className: 'text-white' },
              'SPECIFIC CONSENT BY USERS IN THE EUROPEAN ECONOMIC AREA'
            ),
            _react2.default.createElement(
              'p',
              null,
              'If you are located in, or a resident of, the European Economic Area ("EEA"), you specifically and voluntarily consent to the transfer of your personal information to our related entity and service providers in Canada, to enable us to prevent fraud and comply with our legal obligations. Canada may not have protections in place for personal data as extensive as those within the EEA. However, we require our service providers, to treat your personal information in strict confidence and use appropriate security measures to protect it. We also require them to uphold the standards of the European Union\'s Directive on Data Protection, and all of our other obligations under this Privacy Policy.'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h5',
              { className: 'text-white' },
              'SPECIFIC CONSENT BY USERS IN SINGAPORE'
            ),
            _react2.default.createElement(
              'p',
              null,
              'If you are located in, or a resident of, Singapore, you specifically and voluntarily consent to the transfer of your personal information to our related entity and service providers in Canada, to enable us to prevent fraud and comply with our legal obligations. Canada may not have protections in place for personal data as extensive as those within Singapore. However, we require our service providers to treat your personal information in strict confidence and use appropriate security measures to protect it. We also require them to uphold all of our other obligations under this Privacy Policy.'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h5',
              { className: 'text-white' },
              'How you can contact us about privacy questions'
            ),
            _react2.default.createElement(
              'p',
              null,
              'If you have questions or concerns regarding this policy or would like to contact us please email us at support@faa.st'
            )
          )
        )
      )
    ),
    _react2.default.createElement(_EmailSubscriptionForm2.default, null),
    _react2.default.createElement(_Footer2.default, { footerClass: 'bg-ultra-dark p-4' })
  );
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(1);

var _txFees = __webpack_require__(58);

var _txFees2 = _interopRequireDefault(_txFees);

var _Icon = __webpack_require__(59);

var _Icon2 = _interopRequireDefault(_Icon);

var _swapIcon = __webpack_require__(79);

var _swapIcon2 = _interopRequireDefault(_swapIcon);

var _Header = __webpack_require__(5);

var _Header2 = _interopRequireDefault(_Header);

var _EmailSubscriptionForm = __webpack_require__(4);

var _EmailSubscriptionForm2 = _interopRequireDefault(_EmailSubscriptionForm);

var _Footer = __webpack_require__(6);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _recompose.compose)((0, _recompose.setDisplayName)('Pricing'))(function () {
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      'div',
      { className: 'mb-4' },
      _react2.default.createElement(
        'div',
        { className: 'container text-center' },
        _react2.default.createElement(
          'div',
          { className: 'mb-4' },
          _react2.default.createElement(
            'h2',
            { className: 'text-primary' },
            'Pricing'
          ),
          _react2.default.createElement(
            'div',
            { className: 'page-desc' },
            'faa.st is the cheapest way to ',
            _react2.default.createElement(
              'b',
              null,
              'instantly'
            ),
            ' exchange crypto currencies'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'bg-ultra-dark py-4 px-2 my-3' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_Icon2.default, {
              className: 'p-1 border border-primary',
              style: { fill: '#05B8AB', height: '30px', width: '30px', borderRadius: '50%' },
              src: _swapIcon2.default
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'font-weight-bold' },
            'optimized transactions'
          ),
          _react2.default.createElement(
            'div',
            { className: 'text-muted' },
            'faa.st portfolio intelligently optimizes transactions. This allows diversification with the ',
            _react2.default.createElement(
              'b',
              null,
              'minimum number'
            ),
            ' of transactions and fees.'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'bg-ultra-dark py-4 px-2 my-3' },
          _react2.default.createElement(
            'div',
            { className: 'mb-3' },
            'Here is an example transaction confirmation which clearly indicates transaction fees.'
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('img', {
              className: 'mt-2 p-1',
              style: { minWidth: '320px', maxWidth: '600px', width: '100%', background: '#333' },
              src: _txFees2.default
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-4' },
            _react2.default.createElement(
              'div',
              { className: 'bg-ultra-dark py-5 px-4 mb-3' },
              _react2.default.createElement(
                'div',
                { className: 'font-weight-bold' },
                'swap fee'
              ),
              _react2.default.createElement(
                'div',
                { className: 'text-muted' },
                'A ',
                _react2.default.createElement(
                  'b',
                  null,
                  '0.5%'
                ),
                ' swap fee is applied on each side while swapping between two cryptocurrencies.'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-4' },
            _react2.default.createElement(
              'div',
              { className: 'bg-ultra-dark py-5 px-4 mb-3' },
              _react2.default.createElement(
                'div',
                { className: 'font-weight-bold' },
                'exchange rate'
              ),
              _react2.default.createElement(
                'div',
                { className: 'text-muted' },
                'Exchange rates are based on ',
                _react2.default.createElement(
                  'b',
                  null,
                  'real-time market data'
                ),
                '. Large orders are priced based on market depth.'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-4' },
            _react2.default.createElement(
              'div',
              { className: 'bg-ultra-dark py-5 px-4 mb-3' },
              _react2.default.createElement(
                'div',
                { className: 'font-weight-bold' },
                'network fees'
              ),
              _react2.default.createElement(
                'div',
                { className: 'text-muted' },
                'Network fees are charged on deposits and withdrawals. These fees are ',
                _react2.default.createElement(
                  'b',
                  null,
                  'paid to miners, not faa.st.'
                )
              )
            )
          )
        )
      )
    ),
    _react2.default.createElement(_EmailSubscriptionForm2.default, null),
    _react2.default.createElement(_Footer2.default, { footerClass: 'bg-ultra-dark p-4' })
  );
});

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIterable = exports.moveObjectToFrontOfArray = exports.reduceByKey = exports.createUpdater = exports.createUpserter = exports.mergeById = exports.createMergeByField = exports.merge = exports.mapValues = exports.makeEnum = exports.stringifyJson = exports.parseJson = exports.promisifySync = exports.filterUrl = exports.fixPercentageRounding = exports.filterObj = exports.chunkify = exports.sortByProperty = exports.downloadJson = exports.updateObjectInArray = exports.dateNowString = exports.addHexPrefix = exports.stripHexPrefix = exports.processArray = exports.timer = exports.shortener = exports.filterErrors = exports.lowercase = exports.uppercase = exports.splice = exports.routerPathToUri = exports.toHashId = exports.bs62 = exports.numericalSort = exports.dateSort = exports.delay = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.retry = retry;

var _padLeft = __webpack_require__(66);

var _padLeft2 = _interopRequireDefault(_padLeft);

var _queryString = __webpack_require__(25);

var _queryString2 = _interopRequireDefault(_queryString);

var _lodash = __webpack_require__(8);

var _2 = __webpack_require__(67);

var _3 = _interopRequireDefault(_2);

var _baseX = __webpack_require__(68);

var _baseX2 = _interopRequireDefault(_baseX);

var _urlJoin = __webpack_require__(69);

var _urlJoin2 = _interopRequireDefault(_urlJoin);

var _numbers = __webpack_require__(70);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var delay = exports.delay = function delay(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};

function retry(promiseCreator) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$retries = _ref.retries,
      retries = _ref$retries === undefined ? 3 : _ref$retries,
      _ref$delay = _ref.delay,
      retryDelay = _ref$delay === undefined ? 1000 : _ref$delay,
      _ref$multiplier = _ref.multiplier,
      multiplier = _ref$multiplier === undefined ? 2 : _ref$multiplier,
      before = _ref.before;

  if (retries <= 0) {
    return promiseCreator();
  }
  return promiseCreator().catch(function (e) {
    if (typeof before === 'function') {
      before(retries, retryDelay, e);
    }
    return delay(retryDelay).then(function () {
      return retry(promiseCreator, {
        retries: retries - 1,
        delay: retryDelay * multiplier,
        multiplier: multiplier,
        before: before
      });
    });
  });
}

var getDate = function getDate(item, dateField) {
  var d = (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && item !== null && item[dateField];
  if (!d) {
    return 0;
  }
  if (!(d instanceof Date)) {
    d = new Date(d);
  }
  return d.getTime();
};

var dateSort = exports.dateSort = function dateSort(items, dir, dateField) {
  return items.sort(function (a, b) {
    return (dir === 'desc' ? -1 : 1) * (getDate(a, dateField) - getDate(b, dateField));
  });
};

var numericalSort = exports.numericalSort = function numericalSort(items, dir, field) {
  return items.sort(function (a, b) {
    return (dir === 'desc' ? -1 : 1) * (0, _numbers.toBigNumber)(a[field]).comparedTo((0, _numbers.toBigNumber)(b[field]));
  });
};

var bs62 = exports.bs62 = (0, _baseX2.default)('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

var toHashId = exports.toHashId = function toHashId(s) {
  return bs62.encode(Buffer.from((0, _3.default)().update(s).digest().slice(0, 16)));
};

var routerPathToUri = exports.routerPathToUri = function routerPathToUri(routerPath) {
  return (0, _urlJoin2.default)(window.location.origin, process.env.ROUTER_BASE_NAME, routerPath);
};

var splice = exports.splice = function splice(arr) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var spliced = [].concat(_toConsumableArray(arr));
  spliced.splice.apply(spliced, args);
  return spliced;
};

var uppercase = exports.uppercase = function uppercase(str) {
  if (typeof str !== 'string') return str;
  return str.toUpperCase();
};

var lowercase = exports.lowercase = function lowercase(str) {
  if (typeof str !== 'string') return str;
  return str.toLowerCase();
};

var filterErrors = exports.filterErrors = function filterErrors(err) {
  var genericError = 'Sorry, there was a problem with your request';
  if (!err || !err.message) return genericError;
  console.error('ERROR:', err.message);
  switch (err.message) {
    case 'Please enter a valid address':
    case 'Please enter a valid address or change the exchange type':
      return 'Please enter a valid receiving address';
    case 'Warning: Return address appears to be invalid for the deposit coin type.':
      return 'Please enter a valid refund address';
    case 'Please enter a valid address ( invalid characters )':
      return 'Please enter a valid address';
    case 'Invalid Ethereum Address':
      return err.message;
    case 'inactive':
      return 'Sorry, the exchange is unavailable at this time. Please try again later';
    default:
      return genericError;
  }
};

var shortener = exports.shortener = function shortener(str) {
  var chars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var ellipsis = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (typeof str !== 'string') return str;
  if (str.length <= chars) return str;
  return str.slice(0, chars) + (ellipsis ? '...' : '');
};

var timer = exports.timer = function timer() {
  var seconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var cb = arguments[1];
  var done = arguments[2];

  var thisTimer = void 0;
  thisTimer = window.setInterval(function () {
    seconds -= 1;
    if (seconds <= 0) {
      window.clearInterval(thisTimer);
      done();
    } else {
      cb(seconds);
    }
  }, 1000);
  return thisTimer;
};

var processArray = exports.processArray = function processArray(array, fn) {
  var results = [];
  return array.reduce(function (p, item) {
    return p.then(function () {
      return fn(item);
    }).then(function (data) {
      results.push(data);
      return results;
    });
  }, Promise.resolve());
};

var stripHexPrefix = exports.stripHexPrefix = function stripHexPrefix(hex) {
  if (typeof hex !== 'string') hex = String(hex);
  if (hex.slice(0, 2) === '0x') hex = hex.slice(2);
  if (hex.length % 2 !== 0) hex = '0' + hex;
  return hex;
};

var addHexPrefix = exports.addHexPrefix = function addHexPrefix(hex) {
  if (typeof hex !== 'string') hex = String(hex);
  if (hex.startsWith('0x')) return hex;
  return '0x' + hex;
};

var dateNowString = exports.dateNowString = function dateNowString() {
  var splitSep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';
  var timeSep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ':';

  var d = new Date();
  var year = d.getUTCFullYear();
  var month = (0, _padLeft2.default)(d.getUTCMonth(), 2, '0');
  var date = (0, _padLeft2.default)(d.getUTCDate(), 2, '0');
  var hour = (0, _padLeft2.default)(d.getUTCHours(), 2, '0');
  var minutes = (0, _padLeft2.default)(d.getUTCMinutes(), 2, '0');
  var seconds = (0, _padLeft2.default)(d.getUTCSeconds(), 2, '0');
  return year + '-' + month + '-' + date + splitSep + hour + timeSep + minutes + timeSep + seconds;
};

var updateObjectInArray = exports.updateObjectInArray = function updateObjectInArray(array, payload) {
  return array.map(function (item, index) {
    if (index !== payload.index) return item;

    return Object.assign({}, item, payload.item);
  });
};

var downloadJson = exports.downloadJson = function downloadJson(obj, fileName, noExtension) {
  return new Promise(function (resolve, reject) {
    var jsonString = void 0;
    try {
      jsonString = JSON.stringify(obj);
    } catch (e) {
      return reject(e);
    }

    var blob = new window.Blob([jsonString], { type: 'application/json' });
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement('a');
    if (noExtension) {
      a.download = fileName;
    } else {
      a.download = fileName + '.json';
    }
    a.href = url;
    a.click();
    resolve(jsonString);
  });
};

var sortByProperty = exports.sortByProperty = function sortByProperty(arr, propOrTest) {
  for (var _len2 = arguments.length, moreProps = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    moreProps[_key2 - 2] = arguments[_key2];
  }

  var pass = [];
  var fail = [];
  arr.forEach(function (val) {
    var condition = typeof propOrTest === 'function' ? propOrTest(val) : val[propOrTest];
    if (condition) {
      pass.push(val);
    } else {
      fail.push(val);
    }
  });
  if (moreProps.length > 0) {
    pass = sortByProperty.apply(undefined, [pass].concat(moreProps));
  }
  return fail.concat(pass);
};

var chunkify = exports.chunkify = function chunkify(arr, size) {
  var chunked = [];
  if (size) {
    for (var i = 0, j = arr.length; i < j; i += size) {
      chunked.push(arr.slice(i, i + size));
    }
  }
  return chunked;
};

var filterObj = exports.filterObj = function filterObj() {
  var filterList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var returnObj = {};
  if (!Array.isArray(filterList) || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') return returnObj;
  filterList.forEach(function (item) {
    if (obj.hasOwnProperty(item)) returnObj[item] = obj[item];
  });
  return returnObj;
};

var fixPercentageRounding = exports.fixPercentageRounding = function fixPercentageRounding(list, total) {
  // an attempt to remedy situations where
  // total percentage amounts equal 101% due to rounding
  // i.e. total = 1400, values = [550.01, 549.99, 300]
  var sum = list.reduce(function (prev, curr) {
    return prev + parseInt(curr.percentage);
  }, 0);
  if (sum === 10001) {
    var toAdjust = list.map(function (a) {
      // const p = a.fiat.number / total * 1e4
      var p = a.fiat.dividedBy(total).times(1e4);
      // return { symbol: a.symbol, num: p - Math.trunc(p) }
      return { symbol: a.symbol, num: p.minus(p.trunc()).toNumber() };
    }).filter(function (a) {
      return a.num > 0.5;
    }).sort(function (a, b) {
      return a.num - b.num;
    });
    var adjustIndex = list.findIndex(function (a) {
      return a.symbol === toAdjust[0].symbol;
    });
    return list.map(function (item, index) {
      if (index !== adjustIndex) return item;
      return Object.assign({}, item, {
        percentage: item.percentage.minus(1).round().toString()
      });
    });
  } else {
    return list;
  }
};

var filterUrl = exports.filterUrl = function filterUrl() {
  var query = _queryString2.default.parse(window.location.search);
  delete query.authResponse;
  var newSearch = _queryString2.default.stringify(query);
  if (newSearch) newSearch = '?' + newSearch;
  return window.location.origin + window.location.pathname + newSearch;
};

var promisifySync = exports.promisifySync = function promisifySync(syncFn) {
  return function () {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return new Promise(function (resolve, reject) {
      try {
        resolve(syncFn.apply(undefined, args));
      } catch (err) {
        reject(err);
      }
    });
  };
};

var parseJson = exports.parseJson = function parseJson(jsonStr) {
  try {
    return typeof jsonStr === 'string' ? JSON.parse(jsonStr) : jsonStr;
  } catch (_) {
    return null;
  }
};

var stringifyJson = exports.stringifyJson = function stringifyJson(obj) {
  try {
    return typeof obj !== 'string' ? JSON.stringify(obj) : obj;
  } catch (_) {
    return '';
  }
};

var makeEnum = exports.makeEnum = function makeEnum(fields) {
  return Object.freeze(fields.reduce(function (o, f) {
    return _extends({}, o, _defineProperty({}, f, Symbol(f)));
  }));
};

var mapValues = exports.mapValues = function mapValues(obj, valueMapper) {
  return Object.entries(obj).reduce(function (result, _ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        val = _ref3[1];

    result[key] = valueMapper(val, key);
    return result;
  }, {});
};

var mergeOps = {
  object: {
    $omit: function $omit(oldVal, newVal) {
      return (0, _lodash.omit)(oldVal, newVal);
    }
  },
  array: {
    $set: function $set(oldVal, newVal) {
      return newVal;
    },
    $union: function $union(oldVal, newVal) {
      return (0, _lodash.union)(oldVal, newVal);
    },
    $without: function $without(oldVal, newVal) {
      return _lodash.without.apply(undefined, [oldVal].concat(_toConsumableArray(newVal)));
    },
    $append: function $append(oldVal, newVal) {
      return [].concat(_toConsumableArray(oldVal), _toConsumableArray(newVal));
    },
    $prepend: function $prepend(oldVal, newVal) {
      return [].concat(_toConsumableArray(newVal), _toConsumableArray(oldVal));
    }
  }
};

var isObj = function isObj(o) {
  return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && o !== null;
};

var getType = function getType(x) {
  if (x === null) {
    return 'null';
  } else if (Array.isArray(x)) {
    return 'array';
  } else {
    return typeof x === 'undefined' ? 'undefined' : _typeof(x);
  }
};

var applyMergeOps = function applyMergeOps(oldVal, newVal) {
  if (isObj(newVal)) {
    var ops = Object.keys(newVal);

    var _ops = _slicedToArray(ops, 1),
        op = _ops[0];

    var oldValType = getType(oldVal);
    var opFns = mergeOps[oldValType];
    if (ops.length === 1 && op.startsWith('$') && opFns) {
      var opFn = opFns[op];
      if (!opFn) {
        throw new Error('Invalid ' + oldValType + ' merge op ' + op);
      }
      return opFn(oldVal, newVal[op]);
    }
  } else if (Array.isArray(newVal)) {
    return newVal;
  }
};

var merge = exports.merge = function merge(state) {
  for (var _len4 = arguments.length, newStates = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    newStates[_key4 - 1] = arguments[_key4];
  }

  return newStates.reduce(function (result, newState) {
    var updatedState = applyMergeOps(result, newState);
    if (updatedState) {
      return updatedState;
    }
    return (0, _lodash.mergeWith)({}, result, newState, applyMergeOps);
  }, _extends({}, state));
};

var createMergeByField = exports.createMergeByField = function createMergeByField(field) {
  return function (state) {
    for (var _len5 = arguments.length, items = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
      items[_key5 - 1] = arguments[_key5];
    }

    return merge.apply(undefined, [state].concat(_toConsumableArray(items.map(function (item) {
      return _defineProperty({}, item[field], item);
    }))));
  };
};

var mergeById = exports.mergeById = createMergeByField('id');

var createUpserter = exports.createUpserter = function createUpserter(indexField, defaultItemState) {
  var normalizeKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _lodash.identity;
  return function (state, item) {
    var id = normalizeKey(item[indexField]);
    return _extends({}, state, _defineProperty({}, id, _extends({}, state[item[indexField]] || defaultItemState, item, _defineProperty({}, indexField, id))));
  };
};

var createUpdater = exports.createUpdater = function createUpdater(indexField) {
  var normalizeKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _lodash.identity;
  return function (state, item) {
    var id = normalizeKey(item[indexField]);
    var existingItem = state[id];
    return !existingItem ? state : _extends({}, state, _defineProperty({}, id, _extends({}, existingItem, item, _defineProperty({}, indexField, id))));
  };
};

var reduceByKey = exports.reduceByKey = function reduceByKey(objects, reduce, defaultValue) {
  var result = {};
  objects.forEach(function (o) {
    Object.entries(o).forEach(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 2),
          k = _ref6[0],
          v = _ref6[1];

      var current = result[k];
      result[k] = typeof current !== 'undefined' ? reduce(current, v) : reduce(defaultValue, v);
    });
  });
  return result;
};

var moveObjectToFrontOfArray = exports.moveObjectToFrontOfArray = function moveObjectToFrontOfArray(array, key, match) {
  return array = array.reduce(function (w, element) {
    if (element[key] === match) {
      return [element].concat(_toConsumableArray(w));
    }
    return [].concat(_toConsumableArray(w), [element]);
  }, []);
};

var isIterable = exports.isIterable = function isIterable(o) {
  return o != null && typeof o[Symbol.iterator] === 'function';
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("bn.js");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /* global SITE_URL, API_URL */


var _highcharts = __webpack_require__(71);

var _highcharts2 = _interopRequireDefault(_highcharts);

var _tokenFunctionSignatures = __webpack_require__(74);

var _tokenFunctionSignatures2 = _interopRequireDefault(_tokenFunctionSignatures);

var _walletTypes = __webpack_require__(75);

var _walletTypes2 = _interopRequireDefault(_walletTypes);

var _bignumber = __webpack_require__(9);

var _bignumber2 = _interopRequireDefault(_bignumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_bignumber2.default.config({ FORMAT: {
    decimalSeparator: '.',
    groupSeparator: ',',
    groupSize: 3,
    secondaryGroupSize: 0,
    fractionGroupSeparator: ' ',
    fractionGroupSize: 0
  } });

var nodeEnv = "production";
var isDev = nodeEnv === 'development';
var isProd = nodeEnv === 'production';
var isIpfs = Boolean(false);

exports.default = {
  nodeEnv: nodeEnv,
  isDev: isDev,
  isProd: isProd,
  isIpfs: isIpfs,
  logLevel: process.env.LOG_LEVEL || (isDev ? 'debug' : 'info'),
  web3Provider: 'https://mainnet.infura.io/v3/6c0b732cae674991b713c9b18ffdd0d3',
  ethereumChainId: 1,
  siteUrl: typeof SITE_URL !== 'undefined' ? SITE_URL : 'https://faa.st',
  apiUrl: typeof API_URL !== 'undefined' ? API_URL : 'https://api.faa.st',
  encrOpts: {
    kdf: 'scrypt',
    n: 1024
  },
  defaultPortfolioId: 'default',
  navbar: {
    expand: 'md'
  },
  affiliateSettings: {
    affiliate_margin: 0.1,
    affiliate_payment_address: '33WKJWf2iyJHUaRjoHmF7x4rKnENPHC9G8'
  },
  explorerUrls: {
    BTC: 'https://blockchain.info',
    ETH: 'https://etherscan.io',
    LTC: 'https://live.blockcypher.com/ltc',
    BCH: 'https://explorer.bitcoin.com/bch'
  },
  bip21Prefixes: {
    BTC: 'bitcoin',
    BCH: 'bitcoincash',
    LTC: 'litecoin',
    ETH: 'ethereum'
  },
  defaultWatchlist: ['BTC', 'ETH', 'BCH', 'EOS', 'LTC', 'USDT', 'XMR', 'TRX', 'DASH', 'MIOTA'],
  walletTypes: _walletTypes2.default,
  web3WalletTypes: Object.entries(_walletTypes2.default).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        web3 = _ref2[1].web3;

    return web3;
  }).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 1),
        type = _ref4[0];

    return type;
  }),
  highCharts: _highcharts2.default,
  tokenFunctionSignatures: _tokenFunctionSignatures2.default
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("faast-ui/src/style/variables");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _recompose = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = (0, _recompose.compose)((0, _recompose.setDisplayName)('404'))(function () {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      '404 - Oh no\'s! We couldn\'t find that page :('
    )
  );
});

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(32);

var ReactDOM = _interopRequireWildcard(_reactDom);

var _Root = __webpack_require__(33);

var _Root2 = _interopRequireDefault(_Root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = _Root2.default;
// Render your app

if (typeof document !== 'undefined') {
    var renderMethod_1 =  false ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render;
    var render = function render(Comp) {
        renderMethod_1(React.createElement(Comp, null), document.getElementById('root'));
    };
    // Render!
    render(_Root2.default);
}

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _reactStatic = __webpack_require__(3);

var _reactHotLoader = __webpack_require__(34);

var _recompose = __webpack_require__(1);

var _reactStaticRoutes = __webpack_require__(35);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

__webpack_require__(80);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = (0, _recompose.compose)((0, _recompose.setDisplayName)('Root'), (0, _reactHotLoader.hot)(module))(function () {
    return React.createElement(
        _reactStatic.Router,
        null,
        React.createElement(_reactStaticRoutes2.default, null)
    );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _path2 = __webpack_require__(36);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(37);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(38);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(39);

var _reactUniversalComponent = __webpack_require__(40);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../../src/site/pages/Home',
  file: '/Users/dylan/dev/ba/faast-portfolio/build/site/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 11)), (0, _importCss3.default)('src/site/pages/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../../src/site/pages/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(11);
  },
  chunkName: function chunkName() {
    return 'src/site/pages/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../../src/site/pages/Terms',
  file: '/Users/dylan/dev/ba/faast-portfolio/build/site/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 21)), (0, _importCss3.default)('src/site/pages/Terms', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../../src/site/pages/Terms');
  },
  resolve: function resolve() {
    return /*require.resolve*/(21);
  },
  chunkName: function chunkName() {
    return 'src/site/pages/Terms';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../../src/site/pages/Privacy',
  file: '/Users/dylan/dev/ba/faast-portfolio/build/site/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 23)), (0, _importCss3.default)('src/site/pages/Privacy', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../../src/site/pages/Privacy');
  },
  resolve: function resolve() {
    return /*require.resolve*/(23);
  },
  chunkName: function chunkName() {
    return 'src/site/pages/Privacy';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../../src/site/pages/Pricing',
  file: '/Users/dylan/dev/ba/faast-portfolio/build/site/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 24)), (0, _importCss3.default)('src/site/pages/Pricing', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../../src/site/pages/Pricing');
  },
  resolve: function resolve() {
    return /*require.resolve*/(24);
  },
  chunkName: function chunkName() {
    return 'src/site/pages/Pricing';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../../src/site/pages/404',
  file: '/Users/dylan/dev/ba/faast-portfolio/build/site/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 30)), (0, _importCss3.default)('src/site/pages/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../../src/site/pages/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(30);
  },
  chunkName: function chunkName() {
    return 'src/site/pages/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 4

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(41);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(42);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(43);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(10);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(1);

var _classNames = __webpack_require__(12);

var _classNames2 = _interopRequireDefault(_classNames);

var _style = __webpack_require__(45);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _recompose.compose)((0, _recompose.setDisplayName)('IconCarousel'), (0, _recompose.setPropTypes)({
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    key: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
    label: _propTypes2.default.node.isRequired,
    iconUrl: _propTypes2.default.string.isRequired,
    link: _propTypes2.default.string.isRequired
  })).isRequired
}), (0, _recompose.withProps)({
  refs: {
    wrapper: _react2.default.createRef(),
    carousel: _react2.default.createRef(),
    leftArrow: _react2.default.createRef(),
    rightArrow: _react2.default.createRef(),
    firstIcon: _react2.default.createRef()
  }
}), (0, _recompose.withState)('shiftAmount', 'setShiftAmount', 0), (0, _recompose.withHandlers)(function (_ref) {
  var refs = _ref.refs,
      setShiftAmount = _ref.setShiftAmount;

  var getWidth = function getWidth(elem) {
    return elem && elem.getBoundingClientRect().width || 0;
  };

  function shiftIcons(shiftAmount, right) {
    var carouselWidth = getWidth(refs.carousel.current);
    var wrapperWidth = getWidth(refs.wrapper.current);
    var leftArrowWidth = getWidth(refs.leftArrow.current);
    var rightArrowWidth = getWidth(refs.rightArrow.current);
    var iconWidth = getWidth(refs.firstIcon.current);
    var viewPort = wrapperWidth - leftArrowWidth - rightArrowWidth;
    var minShift = 0;
    var maxShift = carouselWidth - viewPort;
    var increment = viewPort - viewPort % iconWidth; // Round down to multiple of icon width
    var newShift = right ? Math.min(maxShift, shiftAmount + increment) : Math.max(minShift, shiftAmount - increment);
    setShiftAmount(newShift);
  }

  return {
    handleClickRight: function handleClickRight(_ref2) {
      var shiftAmount = _ref2.shiftAmount;
      return function () {
        return shiftIcons(shiftAmount, true);
      };
    },
    handleClickLeft: function handleClickLeft(_ref3) {
      var shiftAmount = _ref3.shiftAmount;
      return function () {
        return shiftIcons(shiftAmount, false);
      };
    }
  };
}))(function (_ref4) {
  var items = _ref4.items,
      refs = _ref4.refs,
      shiftAmount = _ref4.shiftAmount,
      handleClickLeft = _ref4.handleClickLeft,
      handleClickRight = _ref4.handleClickRight;
  return _react2.default.createElement(
    'div',
    { className: _style2.default.wrapper, ref: refs.wrapper },
    _react2.default.createElement(
      'div',
      { className: (0, _classNames2.default)(_style2.default.arrow, _style2.default.arrowLeft), ref: refs.leftArrow, onClick: handleClickLeft },
      _react2.default.createElement('h2', { className: 'fa fa-caret-left' })
    ),
    _react2.default.createElement(
      'div',
      { className: (0, _classNames2.default)(_style2.default.arrow, _style2.default.arrowRight), ref: refs.rightArrow, onClick: handleClickRight },
      _react2.default.createElement('h2', { className: 'fa fa-caret-right' })
    ),
    _react2.default.createElement(
      'div',
      { className: _style2.default.carousel, ref: refs.carousel, style: { transform: 'translate3d(-' + shiftAmount + 'px, 0, 0)' } },
      items.map(function (_ref5, i) {
        var key = _ref5.key,
            label = _ref5.label,
            iconUrl = _ref5.iconUrl,
            link = _ref5.link;
        return _react2.default.createElement(
          'div',
          _extends({ key: key, className: _style2.default.icon }, i === 0 ? { ref: refs.firstIcon } : {}),
          _react2.default.createElement(
            'a',
            { className: 'd-block text-white', href: link },
            _react2.default.createElement('img', { className: _style2.default.iconImg, src: iconUrl }),
            _react2.default.createElement(
              'div',
              { className: _style2.default.iconLabel },
              label
            )
          )
        );
      })
    )
  );
});

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"wrapper":"_1rBjt-TmWiFR","carousel":"_5Mve6tZCwVoD","arrow":"_34KECEovMfOa","arrowLeft":"_1ae07izudiY-","arrowRight":"_2SMI_OZXgEpd","icon":"_2i0isA6EuMFE","iconImg":"_2T0K8gt1fclD","iconLabel":"_25c0Bgv9-xEA"};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/faast-logo-64x64.4f4a2fc0.png";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/mew.de0d79c1.svg";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/secure.bf5abee9.svg";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/simple.19592fe0.svg";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/privacy.fa9caeec.svg";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/add-wallet.5fc4e115.svg";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/view-dashboard.90765570.svg";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/swap-funds.58a96b4a.svg";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/moon-background.b451e31a.jpg";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/macbook-screenshot-01.27f2f8a0.png";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/macbook-screenshot-02.6cd06b59.png";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/bitaccess.a42f3ea4.svg";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/txFees.452701ed.png";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = __webpack_require__(60);

var _propTypes3 = __webpack_require__(78);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var inlineStyle = {
  display: 'inline-block',
  lineHeight: 0,
  verticalAlign: 'middle'
};

var blockStyle = {
  display: 'block'
};

var Icon = function Icon(_ref) {
  var src = _ref.src,
      Tag = _ref.tag,
      inline = _ref.inline,
      block = _ref.block,
      width = _ref.width,
      height = _ref.height,
      scale = _ref.size,
      rotation = _ref.rotate,
      fillColor = _ref.color,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ['src', 'tag', 'inline', 'block', 'width', 'height', 'size', 'rotate', 'color', 'style']);

  if (typeof src === 'string') {
    if (Tag === 'img') {
      props = _extends({ src: src }, props);
    } else {
      style = _extends({
        backgroundImage: 'url(' + src + ')',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }, style);
    }
  } else {
    Tag = src;
  }
  if (Tag === 'span' && inline === null && block === null) {
    inline = true;
  }
  if (scale && !(width || height)) {
    width = '1rem';
    height = '1rem';
  }
  return _react2.default.createElement(Tag, _extends({ style: (0, _style.reduceStyles)({ width: width, height: height }, (0, _style.resize)(scale), (0, _style.rotate)(rotation), (0, _style.fill)(fillColor), inline && inlineStyle, block && blockStyle, style)
  }, props));
};

// Prop types that affect the appearance of the icon
Icon.stylePropTypes = {
  inline: _propTypes2.default.bool,
  block: _propTypes2.default.bool,
  width: _propTypes2.default.string, // Valid css unit (2rem, 16px, etc)
  height: _propTypes2.default.string, // Valid css unit (2rem, 16px, etc)
  size: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]), // Width/height scale factor or abbreviation (sm, md, lg)
  rotate: _propTypes2.default.string, // Degrees (90deg, 135deg, etc) or direction (up, right, down, left)
  color: _propTypes2.default.string, // Hex color (#123abc) or theme-color (primary, success, grey, etc). Only applies if src from svg-react-loader
  style: _propTypes2.default.object // Additional style
};

Icon.propTypes = _extends({
  src: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes3.tag]).isRequired, // Resource URL or component (e.g. from svg-react-loader)
  tag: _propTypes3.tag }, Icon.stylePropTypes);

Icon.defaultProps = {
  tag: 'img',
  inline: null,
  block: null,
  size: null,
  width: null,
  height: null,
  rotate: null,
  color: null,
  style: {}
};

exports.default = Icon;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fill = exports.resize = exports.rotate = exports.reduceStyles = exports.scaleUnit = exports.breakpoint = exports.chartColor = exports.zIndex = exports.themeColor = exports.styleVars = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _parseUnit3 = __webpack_require__(61);

var _parseUnit4 = _interopRequireDefault(_parseUnit3);

var _log = __webpack_require__(62);

var _log2 = _interopRequireDefault(_log);

var _lodash = __webpack_require__(8);

var _variables = __webpack_require__(29);

var styleVars = _interopRequireWildcard(_variables);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nestedStyleVars = Object.entries(styleVars).reduce(function (result, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];

  return (0, _lodash.set)(result, key.split('_').map(_lodash.camelCase), value);
}, {});

var themeColor = nestedStyleVars.themeColor,
    zIndex = nestedStyleVars.zIndex,
    chartColor = nestedStyleVars.chartColor,
    breakpoint = nestedStyleVars.breakpoint;
exports.styleVars = nestedStyleVars;
exports.themeColor = themeColor;
exports.zIndex = zIndex;
exports.chartColor = chartColor;
exports.breakpoint = breakpoint;


var defaultRotateAbbreviations = {
  up: '0',
  right: '90deg',
  down: '180deg',
  left: '270deg'
};

var defaultScalarAbbreviations = {
  'sm': 1,
  'md': 2,
  'lg': 4
};

var scaleUnit = exports.scaleUnit = function scaleUnit(unit, scalar) {
  var _parseUnit = (0, _parseUnit4.default)(unit),
      _parseUnit2 = _slicedToArray(_parseUnit, 2),
      value = _parseUnit2[0],
      units = _parseUnit2[1];

  return [value * scalar, units].join('');
};

var reduceStyles = exports.reduceStyles = function reduceStyles() {
  for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }

  return styles.reduce(function (result, style) {
    if ((0, _lodash.isFunction)(style)) {
      return _extends({}, result, style(result));
    }
    if ((0, _lodash.isObject)(style)) {
      return _extends({}, result, style);
    }
    return result;
  }, {});
};

var rotate = exports.rotate = function rotate(dir) {
  var rotateAbbreviations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRotateAbbreviations;

  if (!dir) return {};
  dir = rotateAbbreviations[dir] || dir;
  return { transform: 'rotate(' + dir + ')' };
};

var resize = exports.resize = function resize(scalar) {
  var scalarAbbreviations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultScalarAbbreviations;
  return function () {
    var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!scalar) return {};
    scalar = scalarAbbreviations[scalar] || scalar;
    if (typeof scalar !== 'number') {
      _log2.default.debug('Cannot resize width and height by non scalar ' + scalar);
      return style;
    }
    var width = style.width,
        height = style.height;

    return _extends({}, !width ? {} : { width: scaleUnit(width, scalar) }, !height ? {} : { height: scaleUnit(height, scalar) });
  };
};

var fill = exports.fill = function fill(color) {
  if (!color) return {};
  color = themeColor[color] || color;
  return { fill: color };
};

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("parse-unit");

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(8);

var _queryString = __webpack_require__(25);

var queryString = _interopRequireWildcard(_queryString);

var _idb = __webpack_require__(63);

var _idb2 = _interopRequireDefault(_idb);

var _helpers = __webpack_require__(26);

var _Config = __webpack_require__(28);

var _Config2 = _interopRequireDefault(_Config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var storeName = 'logging';

var query = {};
var appLogLevel = _Config2.default.logLevel;
if (typeof window !== 'undefined') {
  query = queryString.parse(window.location.search);
  appLogLevel = query.log_level || appLogLevel;
}

var idbNotReadyQueue = [];

_idb2.default.setup([storeName]).then(function () {
  console.log('idb set up');
  if (query.export) {
    return _idb2.default.exportDb(query.export);
  }
}).then(function () {
  return _idb2.default.removeOld(storeName);
})
// Push any log messages that occurred while setting up store
.then(function () {
  return idbNotReadyQueue.reduce(function (prev, message) {
    return prev.then(function () {
      return _idb2.default.put(storeName, message);
    });
  }, Promise.resolve()).then(function () {
    console.log('Pushed ' + idbNotReadyQueue.length + ' log messages to IDB');
    idbNotReadyQueue = [];
  }).catch(function () {
    return false;
  });
}); // Do nothing

var logger = {};

var logLevels = {
  error: 5,
  warn: 4,
  info: 3,
  debug: 2,
  trace: 1
};

var log = function log(level) {
  return function (text) {
    for (var _len = arguments.length, data = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      data[_key - 1] = arguments[_key];
    }

    if (logLevels[level] >= logLevels[appLogLevel]) {
      var _console;

      (_console = console)[level].apply(_console, [text].concat(_toConsumableArray(data)));
      if (text instanceof Error) {
        text = text.toString();
      }
      if (!(0, _lodash.isString)(text)) {
        data = [text].concat(_toConsumableArray(data));
        text = '';
      }
      var now = (0, _helpers.dateNowString)();
      var payload = {
        level: level,
        time: now,
        message: text
      };
      if (data && data.length > 0) {
        data = data.map(function (item) {
          if (item instanceof Error) {
            return item.toString();
          }
          if ((0, _lodash.isObject)(item)) {
            return JSON.stringify(item);
          }
          return item;
        });
        if (data.length === 1) {
          data = data[0];
        }
        payload.data = data;
      }
      _idb2.default.put(storeName, payload).catch(function (err) {
        var message = err.message;

        if (message && message.includes('store not ready')) {
          // Save any failed log messages until store is ready
          idbNotReadyQueue.push(payload);
        } else {
          console.error('Error writing to indexedDB -', err.message);
        }
      });
    }
  };
};

var logInline = function logInline(level) {
  return function (text) {
    for (var _len2 = arguments.length, data = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      data[_key2 - 1] = arguments[_key2];
    }

    logger[level].apply(logger, [text].concat(data));
    // Return the last argument
    if (data.length > 0) {
      return data[data.length - 1];
    } else {
      return text;
    }
  };
};

Object.keys(logLevels).forEach(function (level) {
  logger[level] = log(level);
  logger[level + 'Inline'] = logInline(level);
});

exports.default = logger;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _idbWrapper = __webpack_require__(64);

var _idbWrapper2 = _interopRequireDefault(_idbWrapper);

var _Pkg = __webpack_require__(65);

var _Pkg2 = _interopRequireDefault(_Pkg);

var _helpers = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DAYS_TO_STORE = 5;
var stores = {};

var setup = function setup(storeNames) {
  return Promise.all(storeNames.map(function (storeName) {
    return new Promise(function (resolve) {
      if (!stores[storeName]) {
        stores[storeName] = {};
      }
      stores[storeName].store = new _idbWrapper2.default({
        dbVersion: 1,
        storeName: storeName,
        keyPath: 'id',
        autoIncrement: true,
        onStoreReady: function onStoreReady() {
          stores[storeName].ready = true;
          resolve();
        }
      });
    });
  }));
};

var put = function put(storeName, data) {
  return new Promise(function (resolve, reject) {
    if (!stores[storeName] || !stores[storeName].ready) return reject(new Error('store not ready'));

    stores[storeName].store.put(data, function (id) {
      resolve(id);
    }, function (error) {
      reject(error);
    });
  });
};

var getAll = function getAll(storeName) {
  return new Promise(function (resolve, reject) {
    if (!stores[storeName] || !stores[storeName].ready) return reject(new Error('store not ready'));

    stores[storeName].store.getAll(function (idbtx) {
      resolve(idbtx);
    }, function (error) {
      reject(error);
    });
  });
};

var remove = function remove(storeName, key) {
  return new Promise(function (resolve, reject) {
    if (!stores[storeName] || !stores[storeName].ready) return reject(new Error('store not ready'));

    stores[storeName].store.remove(key, function () {
      resolve();
    }, function (error) {
      reject(error);
    });
  });
};

var removeOld = function removeOld(storeName) {
  return new Promise(function (resolve, reject) {
    if (!stores[storeName] || !stores[storeName].ready) return reject(new Error('store not ready'));

    getAll(storeName).then(function (result) {
      var day = 1000 * 60 * 60 * 24;
      var date = new Date();
      var minTime = date.getTime() - day * DAYS_TO_STORE;
      var tooOld = result.map(function (r) {
        if (r.id && typeof r.id === 'number' && r.id < minTime) return r.id;
      }).filter(function (a) {
        return a;
      });
      Promise.all(tooOld.map(function (key) {
        return remove(storeName, key);
      })).then(resolve).catch(reject);
    }).catch(reject);
  });
};

var exportDb = function exportDb(storeName) {
  return new Promise(function (resolve, reject) {
    if (!stores[storeName] || !stores[storeName].ready) return reject(new Error('store not ready'));

    getAll(storeName).then(function (result) {
      return (0, _helpers.downloadJson)(_defineProperty({}, storeName, result), _Pkg2.default.name + '-' + storeName + '-' + (0, _helpers.dateNowString)('_', '-'));
    }).then(function (jsonString) {
      resolve(jsonString);
    }).catch(function (e) {
      reject(e);
    });
  });
};

exports.default = {
  setup: setup,
  put: put,
  exportDb: exportDb,
  removeOld: removeOld
};

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("idb-wrapper");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = {"name":"faast-portfolio","productName":"Faa.st","version":"3.0.10","description":"A decentralized cryptocurrency portfolio manager and exchange.","contributors":["Nathan Wood <nathan@bitaccess.co>","Dylan Seago <dylan@bitaccess.co>","Dan Wolfgram <dan@bitaccess.co>","Matus Dubrava <matus@bitaccess.co>"],"engines":{"node":"8","npm":"6"},"license":"MIT","files":["dist/","src/"],"homepage":"https://github.com/go-faast/faast-portfolio#readme","repository":{"type":"git","url":"git+https://github.com/go-faast/faast-portfolio.git"},"scripts":{"start":"ws --config-file etc/lws.config.prod.js","test":"npm run lint","dev:app":"cross-env NODE_ENV=development webpack-dev-server --config etc/webpack.config.app.js --progress","dev:site":"cross-env NODE_ENV=development react-static start","dev:proxy":"ws --config-file etc/lws.config.dev.js","dev":"concurrently -c blue,green,yellow -n app,site,proxy \"npm:dev:app\" \"npm:dev:site\" \"npm:dev:proxy\"","build:app":"gulp build:app","build:site":"gulp build:site","build:ipfs":"cross-env IPFS=true npm run build","build":"gulp build","compile:app":"webpack --config etc/webpack.config.app.js --progress","compile:site":"react-static build","lint:js":"eslint src/ --ext .js,.jsx","lint:ts":"tslint -p .","lint":"gulp lint","ngrok":"ngrok http 8000","preversion":"git checkout develop","version":"npm run build && git add -A dist","postversion":"git push && git push --tags","release":"bin/release.sh","postinstall":"rm -f node_modules/web3/index.d.ts"},"standard":{"ignore":["dist/","res/"]},"dependencies":{},"devDependencies":{"@ledgerhq/hw-app-btc":"^4.27.0","@ledgerhq/hw-app-eth":"^4.15.0","@ledgerhq/hw-transport-u2f":"^4.28.0","@types/bitcore-lib":"^0.15.1","@types/ethereumjs-util":"^5.2.0","@types/lodash":"^4.14.116","@types/node":"^10.12.0","@types/query-string":"^6.1.0","@types/react":"^16.4.18","@types/react-dom":"^16.0.9","@types/react-hot-loader":"^4.1.0","@types/react-router":"^4.0.32","@types/recompose":"^0.27.0","@types/uuid":"^3.4.3","@types/web3":"^1.0.3","@types/webpack-env":"^1.13.6","accounting":"^0.4.1","ajv":"^5.5.2","autoprefixer":"^7.2.4","axios":"^0.18.0","babel-core":"^6.26.0","babel-eslint":"^8.0.3","babel-loader":"^7.1.2","babel-plugin-transform-class-properties":"^6.24.1","babel-plugin-transform-decorators-legacy":"^1.3.4","babel-plugin-transform-function-bind":"^6.22.0","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-plugin-transform-runtime":"^6.23.0","babel-polyfill":"^6.26.0","babel-preset-env":"^1.6.1","babel-preset-flow":"^6.23.0","babel-preset-react":"^6.24.1","babel-runtime":"^6.26.0","base-x":"^3.0.4","bchaddrjs":"^0.2.2","bignumber.js":"^4.0.4","bitcoinjs-lib":"^4.0.1","blockstack":"^18.1.0","bn.js":"^4.11.8","bootstrap":"^4.0.0","class-names":"^1.0.0","clean-webpack-plugin":"^0.1.19","coininfo":"github:go-faast/coininfo","concurrently":"^3.5.0","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","copy-webpack-plugin":"^4.5.1","cross-env":"^5.0.5","css-loader":"^0.28.7","debounce":"^1.2.0","eslint":"^4.19.1","eslint-plugin-import":"^2.14.0","eslint-plugin-react":"^7.5.1","ethereumjs-tx":"^1.3.3","ethereumjs-util":"^5.1.2","ethereumjs-wallet":"^0.6.0","extract-text-webpack-plugin":"^3.0.2","faast-ui":"github:go-faast/faast-ui#v1.0.7","favicons-webpack-plugin":"0.0.7","file-loader":"^1.1.6","fuse.js":"^3.1.0","gulp":"^4.0.0","gulp-clean":"^0.4.0","gulp-run-command":"0.0.9","har-validator":"^5.1.3","hard-source-webpack-plugin":"^0.12.0","hash.js":"^1.1.3","hd-wallet":"^7.14.3","hdkey":"^0.7.1","highcharts":"^5.0.14","html-webpack-include-assets-plugin":"^1.0.4","html-webpack-plugin":"^3.0.6","idb-wrapper":"^1.7.1","local-web-server":"^2.5.2","lodash":"^4.17.5","ngrok":"^3.1.0","node-sass":"^4.9.2","optimize-css-assets-webpack-plugin":"^3.2.0","pad-left":"^2.1.0","parse-unit":"^1.0.1","postcss-loader":"^2.0.10","precss":"^2.0.0","prop-types":"^15.6.0","qrcode.react":"^0.7.1","re-reselect":"^1.0.1","react":"^16.4.1","react-dom":"^16.4.1","react-dropzone":"^4.1.2","react-highcharts":"^13.0.0","react-hot-loader":"^4.0.0","react-popper":"^0.8.2","react-redux":"^5.0.7","react-redux-toastr":"^7.4.0","react-router-dom":"^4.2.2","react-router-redux":"^5.0.0-alpha.6","react-static":"^5.9.12","react-stickynode":"^1.4.0","react-toolbox":"^2.0.0-beta.13","react-transition-group":"^2.4.0","react-universal-component":"^3.0.3","reactstrap":"^6.3.1","recompose":"^0.26.0","redux":"^4.0.0","redux-act":"^1.6.0","redux-form":"^7.4.2","redux-logger":"^3.0.6","redux-thunk":"^2.2.0","reselect":"^3.0.1","riek":"github:go-faast/riek","rlp":"^2.0.0","sass-loader":"^6.0.6","style-loader":"^0.18.2","svg-react-loader":"^0.4.5","ts-loader":"^3.5.0","tslint":"^5.11.0","typescript":"^2.9.2","uglifyjs-webpack-plugin":"^1.1.1","url-join":"^4.0.0","uuid":"^3.2.1","web3":"^1.0.0-beta.34","webpack":"^3.5.5","webpack-dev-server":"^2.7.1","webpack-merge":"^4.1.2","worker-loader":"^1.1.0","ws":"^5.1.0"}}

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("pad-left");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("hash.js/lib/hash/sha/256");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("base-x");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("url-join");

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.THOUSAND = exports.ONE_HUNDRED = exports.HUNDRED = exports.TEN = exports.ONE = exports.ZERO = exports.BN = exports.BigNumber = undefined;
exports.toBigNumber = toBigNumber;
exports.toNumber = toNumber;
exports.toMainDenomination = toMainDenomination;
exports.toSmallestDenomination = toSmallestDenomination;
exports.toPrecision = toPrecision;
exports.toUnit = toUnit;
exports.toPercentage = toPercentage;
exports.abbreviateNumber = abbreviateNumber;

var _bignumber = __webpack_require__(9);

var _bignumber2 = _interopRequireDefault(_bignumber);

var _bn = __webpack_require__(27);

var _bn2 = _interopRequireDefault(_bn);

var _Config = __webpack_require__(28);

var _Config2 = _interopRequireDefault(_Config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (!_Config2.default.isDev) {
    _bignumber2.default.config({ ERRORS: false });
}
var ZERO = new _bignumber2.default(0);
var ONE = new _bignumber2.default(1);
var TEN = new _bignumber2.default(10);
var HUNDRED = new _bignumber2.default(100);
var THOUSAND = new _bignumber2.default(1000);
exports.BigNumber = _bignumber2.default;
exports.BN = _bn2.default;
exports.ZERO = ZERO;
exports.ONE = ONE;
exports.TEN = TEN;
exports.HUNDRED = HUNDRED;
exports.ONE_HUNDRED = HUNDRED;
exports.THOUSAND = THOUSAND;
function toBigNumber(value) {
    if (value === void 0) {
        value = 0;
    }
    if (value === '0x') {
        value = 0;
    }
    if (!(value instanceof _bignumber2.default)) {
        try {
            var bn = new _bignumber2.default(String(value));
            return bn;
        } catch (e) {
            return ZERO;
        }
    }
    return value;
}
function toNumber(value) {
    if (value === void 0) {
        value = 0;
    }
    if (typeof value === 'number') {
        return value;
    }
    if (typeof value === 'string') {
        value = toBigNumber(value);
    }
    if (value instanceof _bignumber2.default) {
        return value.toNumber();
    }
    return 0;
}
function toMainDenomination(value, decimals) {
    value = toBigNumber(value);
    var power = TEN.toPower(decimals);
    return value.div(power);
}
function toSmallestDenomination(value, decimals) {
    value = toBigNumber(value);
    var power = TEN.toPower(decimals);
    return value.times(power);
}
function toPrecision(amount, decimals) {
    amount = toBigNumber(amount);
    var power = TEN.toPower(decimals);
    return amount.times(power).round().div(power);
}
function toUnit(amount, rate, decimals, rateFrom) {
    amount = toBigNumber(amount);
    rate = toBigNumber(rate);
    var conversion = rateFrom ? amount.div(rate) : amount.times(rate);
    return toPrecision(conversion, decimals);
}
function toPercentage(amount, total) {
    amount = toBigNumber(amount);
    total = toBigNumber(total);
    return amount.div(total).times(100).round(2);
}
var abbreviateSuffixes = 'KMBT';
function abbreviateNumber(n) {
    n = toBigNumber(n);
    if (n.lt(THOUSAND)) {
        return { value: n };
    }
    var digits = n.abs().floor().toString().length;
    var base = Math.min(Math.ceil(digits / 3), abbreviateSuffixes.length) - 1;
    var suffix = abbreviateSuffixes[base - 1];
    var abbreviated = n.div(THOUSAND.pow(base));
    return { value: abbreviated, suffix: suffix };
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pieChart = undefined;

var _reactHighcharts = __webpack_require__(72);

var _reactHighcharts2 = _interopRequireDefault(_reactHighcharts);

var _ReactHighstock = __webpack_require__(73);

var _ReactHighstock2 = _interopRequireDefault(_ReactHighstock);

var _variables = __webpack_require__(29);

var styleVars = _interopRequireWildcard(_variables);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var globalConfig = {
  chart: {
    backgroundColor: 'transparent',
    style: {
      fontFamily: styleVars.fontFamilyBase
    },
    plotBorderWidth: 0
  },
  credits: {
    style: {
      color: '#666'
    }
  },
  exporting: {
    enabled: false
  },
  labels: {
    style: {
      color: '#707073'
    }
  },
  legend: {
    itemStyle: {
      color: '#E0E0E3'
    },
    itemHoverStyle: {
      color: '#FFF'
    },
    itemHiddenStyle: {
      color: '#606063'
    }
  },
  loading: {
    labelStyle: {
      color: '#FFF'
    },
    style: {
      backgroundColor: '#707073'
    }
  },
  navigation: {
    buttonOptions: {
      symbolStroke: '#DDDDDD',
      theme: {
        fill: '#505053'
      }
    }
  },
  tooltip: {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    style: {
      color: styleVars.textColor
    }
  }
};

_ReactHighstock2.default.Highcharts.setOptions(globalConfig);
_reactHighcharts2.default.Highcharts.setOptions(globalConfig);

var pieChart = exports.pieChart = {
  colors: ['#0AA16F', '#0dd590', '#0EF0A1', '#0dd3b9', '#0B9986', '#076A5D'],
  chart: {
    type: 'pie'
  },
  title: null,
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: false,
      borderColor: null,
      cursor: 'default',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>',
        style: {
          color: 'white'
        },
        connectorColor: 'silver'
      }
    }
  }
};

exports.default = { pieChart: pieChart };

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("react-highcharts");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("react-highcharts/ReactHighstock");

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  balanceOf: '0x70a08231',
  transfer: '0xa9059cbb'
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ledger = __webpack_require__(15);

var _ledger2 = _interopRequireDefault(_ledger);

var _trezor = __webpack_require__(14);

var _trezor2 = _interopRequireDefault(_trezor);

var _blockstack = __webpack_require__(76);

var _blockstack2 = _interopRequireDefault(_blockstack);

var _metamask = __webpack_require__(17);

var _metamask2 = _interopRequireDefault(_metamask);

var _mist = __webpack_require__(16);

var _mist2 = _interopRequireDefault(_mist);

var _parity = __webpack_require__(77);

var _parity2 = _interopRequireDefault(_parity);

var _coinbase = __webpack_require__(19);

var _coinbase2 = _interopRequireDefault(_coinbase);

var _trust = __webpack_require__(20);

var _trust2 = _interopRequireDefault(_trust);

var _status = __webpack_require__(18);

var _status2 = _interopRequireDefault(_status);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var switchPathSegwit = {
  primaryPrefix: 'm/49',
  primaryLabel: 'segwit account',
  secondaryPrefix: 'm/44',
  secondaryLabel: 'legacy (non-segwit) account'
};

exports.default = {
  ledger: {
    name: 'Ledger Wallet',
    icon: _ledger2.default,
    website: 'https://www.ledger.com/',
    hardware: true,
    supportedAssets: {
      ETH: {
        derivationPath: 'm/44\'/60\'/0\''
      },
      BTC: {
        derivationPath: 'm/49\'/0\'/0\'',
        switchPath: switchPathSegwit
      },
      BCH: {
        derivationPath: 'm/44\'/145\'/0\'',
        switchPath: {
          primaryPrefix: 'm/44\'/145\'',
          primaryLabel: 'post-fork account',
          secondaryPrefix: 'm/44\'/0\'',
          secondaryLabel: 'legacy (pre-fork) account'
        }
      },
      LTC: {
        derivationPath: 'm/49\'/2\'/0\'',
        switchPath: switchPathSegwit
      }
    }
  },
  trezor: {
    name: 'TREZOR',
    icon: _trezor2.default,
    website: 'https://trezor.io/',
    hardware: true,
    supportedAssets: {
      ETH: {
        derivationPath: 'm/44\'/60\'/0\'/0'
      },
      BTC: {
        derivationPath: null
      },
      BCH: {
        derivationPath: null
      },
      LTC: {
        derivationPath: null
      }
    }
  },
  blockstack: {
    name: 'Blockstack',
    icon: _blockstack2.default
  },
  metamask: {
    name: 'MetaMask',
    website: 'https://metamask.io/',
    icon: _metamask2.default,
    web3: true
  },
  mist: {
    name: 'Mist Browser',
    website: 'https://github.com/ethereum/mist',
    icon: _mist2.default,
    web3: true
  },
  parity: {
    name: 'Parity',
    icon: _parity2.default,
    web3: true
  },
  coinbase: {
    name: 'Coinbase Wallet',
    website: 'https://wallet.coinbase.com/',
    icon: _coinbase2.default,
    web3: true
  },
  trust: {
    name: 'Trust Wallet',
    website: 'https://trustwalletapp.com/',
    icon: _trust2.default,
    web3: true
  },
  status: {
    name: 'Status',
    website: 'https://status.im/',
    icon: _status2.default,
    web3: true
  }
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/blockstack.290f66c3.png";

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/parity.ebfb0241.svg";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numberish = exports.tag = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(2);

Object.keys(_propTypes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _propTypes[key];
    }
  });
});

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bignumber = __webpack_require__(9);

var _bignumber2 = _interopRequireDefault(_bignumber);

var _bn = __webpack_require__(27);

var _bn2 = _interopRequireDefault(_bn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tag = exports.tag = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]);

var numberish = exports.numberish = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.instanceOf(_bignumber2.default), _propTypes2.default.instanceOf(_bn2.default)]);

exports.default = _extends({}, _propTypes2.default, {
  tag: tag,
  numberish: numberish
});

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

function SwapIcon (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"M20 14.8a.8.8 0 1 0 0-1.6H1a.8.8 0 0 0-.58 1.351l6.65 7a.8.8 0 0 0 1.16-1.102L2.863 14.8H20zM1 7.2a.8.8 0 1 0 0 1.6h19a.8.8 0 0 0 .58-1.351l-6.65-7a.8.8 0 1 0-1.16 1.102L18.137 7.2H1z"}));
}

SwapIcon.defaultProps = {"className":"LinkedInput__ExchangeIcon-fbfITA fIxUxo","viewBox":"0 0 21 22"};

module.exports = SwapIcon;

SwapIcon.default = SwapIcon;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"themeColor_primary":"#05B8AB","themeColor_secondary":"#05C76A","themeColor_success":"#05C76A","themeColor_info":"#17a2b8","themeColor_warning":"#FACC2E","themeColor_danger":"#BC1515","themeColor_light":"#f5f5f5","themeColor_grey":"#9e9e9e","themeColor_dark":"#303030","themeColor_ultra-dark":"#212121","themeColor_dark-navbar":"#212121","themeColor_positive":"#05C76A","themeColor_negative":"#BC1515","themeColor_white":"#fff","breakpoint_xxs":"0","breakpoint_xs":"432px","breakpoint_sm":"576px","breakpoint_md":"768px","breakpoint_lg":"984px","breakpoint_xl":"1200px","zIndex_dropdown":"1000","zIndex_overlay":"1010","zIndex_sticky":"1020","zIndex_fixed":"1040","zIndex_modal":"1050","zIndex_popover":"1060","zIndex_tooltip":"1070","borderRadius":"2px","borderWidth":"1px","textColor":"rgba(255, 255, 255, 0.9)","textMutedColor":"rgba(255, 255, 255, 0.7)","textDisabledColor":"rgba(255, 255, 255, 0.5)","fontFamilyBase":"\"Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"","navbarHeight":"4rem"};

/***/ }),
/* 81 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=static.503857ab.js.map