/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	var define = false;
	
	// Require module
	__webpack_require__(1);
	
	// Wait until the page has loaded
	if (document.readyState === 'interactive' || document.readyState === 'complete') {
		document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
	}
	document.addEventListener('DOMContentLoaded', function () {
		// Dispatch a custom event that will tell all required modules to initialise
		document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	var _interopRequireDefault = __webpack_require__(3)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _srcJsHeader = __webpack_require__(4);
	
	var _srcJsHeader2 = _interopRequireDefault(_srcJsHeader);
	
	var define = false;
	
	var constructAll = function constructAll() {
		_srcJsHeader2['default'].init();
		document.removeEventListener('o.DOMContentLoaded', constructAll);
	};
	
	document.addEventListener('o.DOMContentLoaded', constructAll);
	
	exports['default'] = _srcJsHeader2['default'];
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	var _createClass = __webpack_require__(5)['default'];
	
	var _classCallCheck = __webpack_require__(9)['default'];
	
	var _getIterator = __webpack_require__(10)['default'];
	
	var _interopRequireDefault = __webpack_require__(3)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _search = __webpack_require__(47);
	
	var _search2 = _interopRequireDefault(_search);
	
	var _utils = __webpack_require__(48);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _editionSwitch = __webpack_require__(49);
	
	var _editionSwitch2 = _interopRequireDefault(_editionSwitch);
	
	var define = false;
	
	var Header = (function () {
		function Header(headerEl, config) {
			_classCallCheck(this, Header);
	
			if (!headerEl) {
				headerEl = document.body;
			} else if (!(headerEl instanceof HTMLElement)) {
				headerEl = document.querySelector(headerEl);
			}
	
			this.headerEl = headerEl;
			this.utils = new _utils2['default'](this.headerEl, config);
			this.search = new _search2['default'](this.headerEl, config);
			this.editionSwitch = new _editionSwitch2['default'](this.headerEl, config);
			this.headerEl.setAttribute('data-o-header--js', '');
		}
	
		_createClass(Header, [{
			key: 'destroy',
			value: function destroy() {
				this.utils.destroy();
				this.search.destroy();
				this.editionSwitch.destroy();
				this.headerEl.removeAttribute('data-o-header--js');
				delete this.headerEl;
			}
		}], [{
			key: 'init',
			value: function init(el, config) {
				if (!el) {
					el = document.body;
				} else if (!(el instanceof HTMLElement)) {
					el = document.querySelector(el);
				}
				var headerEls = el.querySelectorAll('[data-o-component="o-header"]');
				var headers = [];
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;
	
				try {
					for (var _iterator = _getIterator(headerEls), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var headerEl = _step.value;
	
						if (!headerEl.hasAttribute('data-o-header--js')) {
							headers.push(new Header(headerEl, config));
						}
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator['return']) {
							_iterator['return']();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
	
				return headers;
			}
		}]);
	
		return Header;
	})();
	
	exports['default'] = Header;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(6)["default"];
	
	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	
	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(7), __esModule: true };

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(8);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(11), __esModule: true };

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(12);
	__webpack_require__(39);
	module.exports = __webpack_require__(42);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(13);
	var Iterators = __webpack_require__(16);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(14)
	  , step             = __webpack_require__(15)
	  , Iterators        = __webpack_require__(16)
	  , toIObject        = __webpack_require__(17);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(21)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(18)
	  , defined = __webpack_require__(20);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(19);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(22)
	  , $export        = __webpack_require__(23)
	  , redefine       = __webpack_require__(28)
	  , hide           = __webpack_require__(29)
	  , has            = __webpack_require__(33)
	  , Iterators      = __webpack_require__(16)
	  , $iterCreate    = __webpack_require__(34)
	  , setToStringTag = __webpack_require__(35)
	  , getProto       = __webpack_require__(8).getProto
	  , ITERATOR       = __webpack_require__(36)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(24)
	  , core      = __webpack_require__(25)
	  , ctx       = __webpack_require__(26)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 24 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 25 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(27);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(29);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(8)
	  , createDesc = __webpack_require__(30);
	module.exports = __webpack_require__(31) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(32)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(8)
	  , descriptor     = __webpack_require__(30)
	  , setToStringTag = __webpack_require__(35)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(29)(IteratorPrototype, __webpack_require__(36)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(8).setDesc
	  , has = __webpack_require__(33)
	  , TAG = __webpack_require__(36)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(37)('wks')
	  , uid    = __webpack_require__(38)
	  , Symbol = __webpack_require__(24).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(24)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(40)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(21)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(41)
	  , defined   = __webpack_require__(20);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(43)
	  , get      = __webpack_require__(45);
	module.exports = __webpack_require__(25).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(44);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(46)
	  , ITERATOR  = __webpack_require__(36)('iterator')
	  , Iterators = __webpack_require__(16);
	module.exports = __webpack_require__(25).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(19)
	  , TAG = __webpack_require__(36)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	var _createClass = __webpack_require__(5)['default'];
	
	var _classCallCheck = __webpack_require__(9)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	var define = false;
	
	var Search = (function () {
		function Search(headerEl) {
			_classCallCheck(this, Search);
	
			this.headerEl = headerEl;
			if (!this.headerEl) {
				return;
			}
	
			this.formEl = this.headerEl.querySelector('[data-o-header-search]');
			if (!this.formEl) {
				return;
			}
	
			this.toggleEl = this.headerEl.querySelector('[data-o-header-togglable-search]');
	
			if (this.toggleEl) {
				this.inputEl = this.formEl.querySelector('input');
				this.toggleHandler = this.searchToggleClickHandler.bind(this);
				this.toggleEl.addEventListener('touchend', this.toggleHandler);
				this.toggleEl.addEventListener('click', this.toggleHandler);
			}
		}
	
		_createClass(Search, [{
			key: 'searchToggleClickHandler',
			value: function searchToggleClickHandler() {
				var isOpen = getComputedStyle(this.formEl).getPropertyValue('visibility') === 'visible';
	
				if (isOpen) {
					this.inputEl.focus();
				}
	
				this.headerEl.dispatchEvent(new CustomEvent('oHeader.searchToggle', {
					bubbles: true,
					detail: {
						isOpen: isOpen
					}
				}));
			}
		}, {
			key: 'destroy',
			value: function destroy() {
				if (this.toggleEl) {
					this.toggleEl.removeEventListener('touchend', this.toggleHandler);
					this.toggleEl.removeEventListener('click', this.toggleHandler);
					delete this.toggleEl;
					delete this.inputEl;
					delete this.toggleHandler;
				}
				delete this.headerEl;
				delete this.formEl;
			}
		}]);
	
		return Search;
	})();
	
	exports['default'] = Search;
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	var _createClass = __webpack_require__(5)['default'];
	
	var _classCallCheck = __webpack_require__(9)['default'];
	
	var _getIterator = __webpack_require__(10)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	var define = false;
	
	var defaultHeaderClassName = 'o-header';
	
	function getNonMatcher(container) {
		if (typeof container === 'string') {
			return function (el) {
				return el && el !== document && !el.matches(container);
			};
		}
	
		return function (el) {
			return el && el !== document && el !== container;
		};
	}
	
	var Utils = (function () {
		function Utils(headerEl) {
			var config = arguments.length <= 1 || arguments[1] === undefined ? { headerClassName: defaultHeaderClassName } : arguments[1];
	
			_classCallCheck(this, Utils);
	
			this.listeners = [];
			this.navOpenClass = config.headerClassName + '--mega-nav-open';
			this.headerEl = headerEl;
	
			var selectableEls = this.headerEl.querySelectorAll('[data-o-header-selectable]');
			this.selectableHandler = this.selectableHandler.bind(this);
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;
	
			try {
				for (var _iterator = _getIterator(selectableEls), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var selectableEl = _step.value;
	
					this.listeners.push([selectableEl, this.selectableHandler]);
					selectableEl.addEventListener('click', this.selectableHandler);
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator['return']) {
						_iterator['return']();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
	
			var megaNavToggle = this.headerEl.querySelector('[data-o-header-togglable-nav]');
			if (megaNavToggle) {
				this.megaNavToggleHandler = this.megaNavToggleHandler.bind(this);
				this.listeners.push([megaNavToggle, this.megaNavToggleHandler]);
				megaNavToggle.addEventListener('click', this.megaNavToggleHandler);
	
				// Applies 'clear: both;' to the first element in each row
				// in the meganav so columns stay aligned. We want to
				// apply it to desktop only columns, which isn't possible
				// via CSS
				var megaNavSections = this.headerEl.querySelectorAll('.' + config.headerClassName + '__meganav-section');
				var megaNavSectionPosition = 1;
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;
	
				try {
					for (var _iterator2 = _getIterator(megaNavSections), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var megaNavSection = _step2.value;
	
						if (!megaNavSection.classList.contains(config.headerClassName + '__meganav-section--mobile')) {
							// If it's the first element in the row, add 'clear: both;' and move to next column
							// If it's the last element in the row, reset for next row
							// If otherwise, move to next column
							switch (megaNavSectionPosition) {
								case 1:
									megaNavSection.style.clear = 'both';
									megaNavSectionPosition++;
									break;
								case 4:
									megaNavSectionPosition = 1;
									break;
								default:
									megaNavSectionPosition++;
									break;
							}
						}
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2['return']) {
							_iterator2['return']();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}
			}
	
			var toggleEls = this.headerEl.querySelectorAll('[data-o-header-togglable]');
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;
	
			try {
				for (var _iterator3 = _getIterator(toggleEls), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var toggleEl = _step3.value;
	
					this.listeners.push([toggleEl, this.toggleHandler]);
					toggleEl.addEventListener('click', this.toggleHandler);
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3['return']) {
						_iterator3['return']();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}
		}
	
		_createClass(Utils, [{
			key: 'selectableHandler',
			value: function selectableHandler(ev) {
				var selectableEls = this.headerEl.querySelectorAll('[data-o-header-selectable]');
				var _iteratorNormalCompletion4 = true;
				var _didIteratorError4 = false;
				var _iteratorError4 = undefined;
	
				try {
					for (var _iterator4 = _getIterator(selectableEls), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
						var selectableEl = _step4.value;
	
						selectableEl.setAttribute('aria-selected', 'false');
					}
				} catch (err) {
					_didIteratorError4 = true;
					_iteratorError4 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion4 && _iterator4['return']) {
							_iterator4['return']();
						}
					} finally {
						if (_didIteratorError4) {
							throw _iteratorError4;
						}
					}
				}
	
				ev.currentTarget.setAttribute('aria-selected', 'true');
			}
		}, {
			key: 'megaNavToggleHandler',
			value: function megaNavToggleHandler() {
				document.documentElement.classList.toggle(this.navOpenClass);
				document.body.classList.toggle(this.navOpenClass);
			}
		}, {
			key: 'toggleHandler',
			value: function toggleHandler(ev) {
				var toggleElState = ev.currentTarget.getAttribute('aria-pressed');
				if (toggleElState === 'true') {
					ev.currentTarget.setAttribute('aria-pressed', 'false');
				} else if (toggleElState === 'false' || !toggleElState) {
					ev.currentTarget.setAttribute('aria-pressed', 'true');
				}
			}
		}, {
			key: 'destroy',
			value: function destroy() {
				var _iteratorNormalCompletion5 = true;
				var _didIteratorError5 = false;
				var _iteratorError5 = undefined;
	
				try {
					for (var _iterator5 = _getIterator(this.listeners), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
						var listener = _step5.value;
	
						listener[0].removeEventListener('click', listener[1]);
					}
				} catch (err) {
					_didIteratorError5 = true;
					_iteratorError5 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion5 && _iterator5['return']) {
							_iterator5['return']();
						}
					} finally {
						if (_didIteratorError5) {
							throw _iteratorError5;
						}
					}
				}
	
				delete this.listeners;
				delete this.navOpenClass;
				delete this.headerEl;
				delete this.megaNavToggleHandler;
				delete this.selectableHandler;
			}
		}], [{
			key: 'isOutside',
			value: function isOutside(el, container) {
				var doesntMatch = getNonMatcher(container);
	
				while (doesntMatch(el)) {
					el = el.parentNode;
				}
	
				return !el || el === document;
			}
		}]);
	
		return Utils;
	})();
	
	exports['default'] = Utils;
	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	'use strict';
	
	var _createClass = __webpack_require__(5)['default'];
	
	var _classCallCheck = __webpack_require__(9)['default'];
	
	var _interopRequireDefault = __webpack_require__(3)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _utils = __webpack_require__(48);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var define = false;
	
	var defaultClassName = 'o-header__edition-switch';
	
	var EditionSwitch = (function () {
		function EditionSwitch(headerEl) {
			var config = arguments.length <= 1 || arguments[1] === undefined ? { editionswitchClassName: defaultClassName } : arguments[1];
	
			_classCallCheck(this, EditionSwitch);
	
			this.editionSwitchEl = headerEl.querySelector('.' + config.editionswitchClassName);
			if (!this.editionSwitchEl) {
				return;
			}
	
			this.editionSwitchContainerEl = this.editionSwitchEl.querySelector('#o-header__edition-switch-container');
			this.btnEl = this.editionSwitchEl ? this.editionSwitchEl.querySelector('[data-o-header-edition-switch-button]') : null;
			if (!this.btnEl) {
				return;
			}
	
			this.openClass = config.editionswitchClassName + '--open';
			this.isOpen = false;
			this.toggleHandler = this.toggle.bind(this);
			this.clickHandler = this.click.bind(this);
	
			this.btnEl.addEventListener('click', this.toggleHandler);
			document.body.addEventListener('click', this.clickHandler);
		}
	
		_createClass(EditionSwitch, [{
			key: 'toggle',
			value: function toggle() {
				this.isOpen = !this.isOpen;
				this.editionSwitchEl.classList.toggle(this.openClass);
	
				if (this.isOpen) {
					this.btnEl.setAttribute('aria-expanded', 'true');
					this.editionSwitchContainerEl.setAttribute('aria-hidden', 'false');
				} else {
					this.btnEl.setAttribute('aria-expanded', 'false');
					this.editionSwitchContainerEl.setAttribute('aria-hidden', 'true');
				}
			}
		}, {
			key: 'click',
			value: function click(ev) {
				if (this.isOpen && _utils2['default'].isOutside(ev.target, this.editionSwitchEl)) {
					this.toggle();
				}
			}
		}, {
			key: 'destroy',
			value: function destroy() {
				if (this.btnEl) {
					this.btnEl.removeEventListener('click', this.toggleHandler);
					document.body.removeEventListener('click', this.clickHandler);
				}
	
				delete this.isOpen;
				delete this.openClass;
				delete this.toggleHandler;
				delete this.clickHandler;
				delete this.btnEl;
				delete this.editionSwitchContainerEl;
				delete this.editionSwitchEl;
			}
		}]);
	
		return EditionSwitch;
	})();
	
	exports['default'] = EditionSwitch;
	module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map