(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ng1bs4", [], factory);
	else if(typeof exports === 'object')
		exports["ng1bs4"] = factory();
	else
		root["ng1bs4"] = factory();
})(this, function() {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alert = __webpack_require__(10);

var _alert2 = _interopRequireDefault(_alert);

__webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Register module, register component and export name
// Import Resources
exports.default = angular.module('ng1bs4.library.alert', []).component('ngbsAlert', _alert2.default).name;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = __webpack_require__(12);

var _menu2 = _interopRequireDefault(_menu);

__webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Register module, register component and export name
// Import Resources
exports.default = angular.module('ng1bs4.library.menu', []).component('ngbsMenu', _menu2.default).name;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal = __webpack_require__(13);

var _modal2 = _interopRequireDefault(_modal);

__webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Register module, register component and export name
// Import Resources
exports.default = angular.module('ng1bs4.library.modal', []).service('$ngbsModal', _modal2.default).name;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pagination = __webpack_require__(14);

var _pagination2 = _interopRequireDefault(_pagination);

__webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Register module, register component and export name
// Import Resources
exports.default = angular.module('ng1bs4.library.pagination', []).component('ngbsPagination', _pagination2.default).name;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _progress = __webpack_require__(15);

var _progress2 = _interopRequireDefault(_progress);

__webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Register module, register component and export name
// Import Resources
exports.default = angular.module('ng1bs4.library.progress', []).component('ngbsProgress', _progress2.default).name;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _select = __webpack_require__(16);

var _select2 = _interopRequireDefault(_select);

__webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Register module, register component and export name
// Import Resources
exports.default = angular.module('ng1bs4.library.select', []).component('ngbsSelect', _select2.default).name;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tabs = __webpack_require__(18);

var _tabs2 = _interopRequireDefault(_tabs);

var _pane = __webpack_require__(17);

var _pane2 = _interopRequireDefault(_pane);

__webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Register module, register component and export name
exports.default = angular.module('ng1bs4.library.tabs', []).component('ngbsTabs', _tabs2.default).component('ngbsPane', _pane2.default).name; // Import Resources

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _test = __webpack_require__(19);

var _test2 = _interopRequireDefault(_test);

__webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Register module, register component and export name
// Import Resources
exports.default = angular.module('ng1bs4.library.test', []).component('ngbsTest', _test2.default).name;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tooltip = __webpack_require__(20);

var _tooltip2 = _interopRequireDefault(_tooltip);

__webpack_require__(29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Register module, register component and export name
// Import Resources
exports.default = angular.module('ng1bs4.library.tooltip', []).directive('ngbsTooltip', _tooltip2.default).name;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Import Template


var _alert = __webpack_require__(30);

var _alert2 = _interopRequireDefault(_alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_ALERT_TYPE = 'info';
var DEFAULT_ALERT_DISMISSIBLE = false;

var controller = function () {
  function controller() {
    _classCallCheck(this, controller);

    this.dismissed = false;
  }

  _createClass(controller, [{
    key: '$onInit',
    value: function $onInit() {}
  }, {
    key: '$onChanges',
    value: function $onChanges() {
      // set defaults
      this.alertType = this.alertType || DEFAULT_ALERT_TYPE;
      this.alertDismissible = this.alertDismissible || DEFAULT_ALERT_DISMISSIBLE;

      // (re)validate bindings
      if (this.alertType && (typeof this.alertType !== 'string' || ['success', 'info', 'warning', 'danger'].includes(this.alertType) === false)) {
        this.$log.error('invalid ngbsAlert::alertType:', JSON.stringify(this.alertType), 'expecting "success", "info", "warning", or "danger"');
      }

      if (this.alertDismissible && typeof this.alertDismissible !== 'boolean') {
        this.$log.error('invalid ngbsAlert::alertDismissible:', JSON.stringify(this.alertDismissible), 'expecting a boolean');
      }
    }
  }]);

  return controller;
}();

// Define and export component


exports.default = {
  bindings: {
    alertType: '<',
    alertDismissible: '<'
  },
  transclude: true,
  template: _alert2.default,
  controller: controller
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(9);

var _test = __webpack_require__(7);

var _test2 = _interopRequireDefault(_test);

var _select = __webpack_require__(5);

var _select2 = _interopRequireDefault(_select);

var _tabs = __webpack_require__(6);

var _tabs2 = _interopRequireDefault(_tabs);

var _menu = __webpack_require__(1);

var _menu2 = _interopRequireDefault(_menu);

var _tooltip = __webpack_require__(8);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _alert = __webpack_require__(0);

var _alert2 = _interopRequireDefault(_alert);

var _modal = __webpack_require__(2);

var _modal2 = _interopRequireDefault(_modal);

var _pagination = __webpack_require__(3);

var _pagination2 = _interopRequireDefault(_pagination);

var _progress = __webpack_require__(4);

var _progress2 = _interopRequireDefault(_progress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Register module, inject components and export name
// Main entry point for library
// Here all library resources are imported, and all component modules are injected

// General Styling
exports.default = angular.module('ng1bs4.library', [_test2.default, _select2.default, _tabs2.default, _menu2.default, _tooltip2.default, _alert2.default, _modal2.default, _pagination2.default, _progress2.default]).config(function ($qProvider) {
  $qProvider.errorOnUnhandledRejections(false);
}).name;

// Component Modules

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Import Template


var _menu = __webpack_require__(31);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_MENU_DISPLAY = 'Chose an action';
var DEFAULT_MENU_ACTIONS = [{ display: 'action1', action: function action() {
    return alert('action1');
  } }, { display: 'action2', action: function action() {
    return alert('action2');
  } }];

// Set up controller

var controller = function () {
  function controller($element) {
    _classCallCheck(this, controller);

    this.$element = $element;
  }

  _createClass(controller, [{
    key: '$onInit',
    value: function $onInit() {
      this.menuDisplay = this.menuDisplay || DEFAULT_MENU_DISPLAY;
      this.menuActions = this.menuActions || DEFAULT_MENU_ACTIONS;
    }
  }]);

  return controller;
}();

// Define and export component


exports.default = {
  bindings: {
    menuDisplay: '@',
    menuActions: '<'
  },
  template: _menu2.default,
  controller: controller
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _modal = __webpack_require__(32);

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_OPTIONS = {
  title: 'Modal Title',
  body: 'Modal body text goes here.',
  buttons: [{
    type: 'primary',
    text: 'OK'
  }, {
    type: 'secondary',
    text: 'Cancel'
  }]
};

var ModalService = function () {
  function ModalService($document, $compile, $rootScope, $q) {
    _classCallCheck(this, ModalService);

    this.$document = $document;
    this.$compile = $compile;
    this.$rootScope = $rootScope;
    this.$q = $q;
  }

  _createClass(ModalService, [{
    key: 'openPrompt',
    value: function openPrompt(options) {
      // promise object to handle prompt results
      var deferred = this.$q.defer();
      // new scope for the modal
      var modalScope = this.$rootScope.$new(true);
      // prepare the modal element
      var modalElement = angular.element(_modal2.default);
      // get the document body
      var body = this.$document.find('body').eq(0);

      var buttonClicked = void 0;

      // merge user options with defaults and make it available on the modal's scope
      modalScope.options = angular.merge({}, DEFAULT_OPTIONS, options);
      // compile the modal element with the new scope
      this.$compile(modalElement)(modalScope);
      // inject the modal element into the dom
      body.append(modalElement);
      // open the modal
      modalElement.modal();

      // handle button click
      modalScope.closeModal = function (button) {
        modalElement.modal('hide');
        buttonClicked = button;
      };

      // on modal close, resolve or reject promise
      modalElement.on('hidden.bs.modal', function () {
        if (buttonClicked) {
          deferred.resolve(buttonClicked);
        } else {
          deferred.reject();
        }
        modalScope.$destroy();
      });

      return deferred.promise;
    }
  }]);

  return ModalService;
}();

exports.default = ModalService;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Import Template


var _pagination = __webpack_require__(33);

var _pagination2 = _interopRequireDefault(_pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var controller = function () {
  function controller($log) {
    _classCallCheck(this, controller);

    Object.assign(this, {
      $log: $log
    });

    this.pages = [];
    this.totalPages = [];
  }

  _createClass(controller, [{
    key: '$onChanges',
    value: function $onChanges() {
      // provide defaults for when bad or no data is provided
      this.paginationCurrentPage = this.paginationCurrentPage || 1;
      this.paginationSize = this.paginationSize || '';
      this.paginationVisiblePageBuffer = this.paginationVisiblePageBuffer || this.paginationVisiblePageBuffer === 0 ? this.paginationVisiblePageBuffer : 3;

      // (re)validate bindings
      if (typeof this.paginationCurrentPage !== 'number' || isFinite(this.paginationCurrentPage) === false) {
        this.$log.error('invalid ngbsPagination::paginationCurrentPage:', JSON.stringify(this.paginationCurrentPage), 'expecting a number');
      }

      if (typeof this.paginationItemsPerPage !== 'number' || isFinite(this.paginationItemsPerPage) === false) {
        this.$log.error('invalid ngbsPagination::paginationItemsPerPage:', JSON.stringify(this.paginationItemsPerPage), 'expecting a number');
      }

      if (this.paginationSize && (typeof this.paginationSize !== 'string' || ['', 'lg', 'sm'].includes(this.paginationSize) === false)) {
        this.$log.error('invalid ngbsPagination::paginationSize:', JSON.stringify(this.paginationSize), 'expecting "sm" or "lg"');
      }

      if (typeof this.paginationTotalItems !== 'number' || isFinite(this.paginationTotalItems) === false) {
        this.$log.error('invalid ngbsPagination::paginationTotalItems:', JSON.stringify(this.paginationTotalItems), 'expecting a number');
      }

      if (typeof this.paginationVisiblePageBuffer !== 'number' || isFinite(this.paginationVisiblePageBuffer) === false) {
        this.$log.error('invalid ngbsPagination::paginationVisiblePageBuffer:', JSON.stringify(this.paginationVisiblePageBuffer), 'expecting a number');
      }

      // build pages array
      this.buildPages();
    }
  }, {
    key: 'buildPages',
    value: function buildPages() {
      // determine the number of pages
      this.totalPages = Math.ceil(this.paginationTotalItems / this.paginationItemsPerPage);

      // determine where we start and stop the display
      var startAt = this.paginationCurrentPage - this.paginationVisiblePageBuffer;
      var stopAt = this.paginationCurrentPage + this.paginationVisiblePageBuffer;

      // if we're not towards the beginning (and ellipsis won't be shown), we need to take into account some padding
      if (startAt <= 0) {
        stopAt += Math.abs(startAt - 1);
        startAt += Math.abs(startAt - 1);
      }

      // if we're not towards the end (and ellipsis won't be shown), we need to take into account some padding
      if (stopAt > this.totalPages) {
        startAt -= stopAt - this.totalPages;
        stopAt -= stopAt - this.totalPages;
      }

      // pad more if "..." isn't visible or this.totalPages has not been displayed for us
      if (stopAt >= this.totalPages - 1) {
        startAt--;
      }

      if (stopAt == this.totalPages) {
        startAt--;
      }

      // pad more if "..." isn't visible or "1" has not been displayed for us
      if (startAt == 1) {
        stopAt++;
      }

      if (startAt <= 2) {
        stopAt++;
      }

      // clean up any bad maths
      if (startAt <= 0) {
        startAt = 1;
      }

      if (stopAt > this.totalPages) {
        stopAt = this.totalPages;
      }

      this.pages = [];

      // ensure the first page is displayed
      if (startAt !== 1) {
        this.pages.push({
          page: 1,
          display: 1
        });
      }

      // display a separator if need be
      if (startAt > 2) {
        this.pages.push({
          page: startAt - 1,
          display: '...'
        });
      }

      for (var i = startAt; i <= stopAt; i++) {
        this.pages.push({
          page: i,
          display: i
        });
      }

      // display a separator if need be
      if (stopAt < this.totalPages - 1) {
        this.pages.push({
          page: stopAt + 1,
          display: '...'
        });
      }

      // ensure the last page is displayed
      if (stopAt != this.totalPages) {
        this.pages.push({
          page: this.totalPages,
          display: this.totalPages
        });
      }
    }
  }, {
    key: 'onNextClick',
    value: function onNextClick() {
      this.raisePaginationOnPageChange(this.paginationCurrentPage + 1);
    }
  }, {
    key: 'onPageClick',
    value: function onPageClick(page) {
      this.raisePaginationOnPageChange(page);
    }
  }, {
    key: 'onPreviousClick',
    value: function onPreviousClick() {
      this.raisePaginationOnPageChange(this.paginationCurrentPage - 1);
    }
  }, {
    key: 'raisePaginationOnPageChange',
    value: function raisePaginationOnPageChange(page) {
      if (this.paginationCurrentPage !== page) {
        this.paginationCurrentPage = page;
        this.paginationOnPageChange({
          paginationCurrentPage: this.paginationCurrentPage
        });

        // $onChanges won't pick up the change to paginationCurrentPage, so we call this manually
        this.buildPages();
      }
    }
  }]);

  return controller;
}();

// Define and export component


exports.default = {
  bindings: {
    paginationCurrentPage: '<',
    paginationDisabled: '<',
    paginationItemsPerPage: '<',
    paginationOnPageChange: '&',
    paginationSize: '@',
    paginationTotalItems: '<',
    paginationVisiblePageBuffer: '<'
  },
  template: _pagination2.default,
  controller: controller
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Import Template


var _progress = __webpack_require__(34);

var _progress2 = _interopRequireDefault(_progress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SUPPORTED_BACKGROUNDS = ['', 'primary', 'success', 'info', 'warning', 'danger', 'inverse', 'faded'];

// Set up controller

var controller = function () {
  function controller($log) {
    _classCallCheck(this, controller);

    Object.assign(this, {
      $log: $log
    });

    this.percentage = 0;
    this.roundedPercentage = 0;
  }

  _createClass(controller, [{
    key: '$onChanges',
    value: function $onChanges(changesObj) {
      // (re)validate bindings
      if (this.progressMax && (typeof this.progressMax !== 'number' || isFinite(this.progressMax) === false)) {
        this.$log.error('invalid ngbsProgress::progressMax:', JSON.stringify(this.progressMax), 'expecting a number');
      }

      if (this.progressValue && (typeof this.progressValue !== 'number' || isFinite(this.progressValue) === false)) {
        this.$log.error('invalid ngbsProgress::progressValue:', JSON.stringify(this.progressValue), 'expecting a number');
      }

      if (this.progressAnimatedProgression && typeof this.progressAnimatedProgression !== 'boolean') {
        this.$log.error('invalid ngbsProgress::progressAnimatedProgression:', JSON.stringify(this.progressAnimatedProgression), 'expecting a boolean');
      }

      if (this.progressAutoLabel && typeof this.progressAutoLabel !== 'boolean') {
        this.$log.error('invalid ngbsProgress::progressAutoLabel:', JSON.stringify(this.progressAutoLabel), 'expecting a boolean');
      }

      if (this.progressStriped && typeof this.progressStriped !== 'boolean') {
        this.$log.error('invalid ngbsProgress::progressStriped:', JSON.stringify(this.progressStriped), 'expecting a boolean');
      }

      if (this.progressAnimatedStripes && typeof this.progressAnimatedStripes !== 'boolean') {
        this.$log.error('invalid ngbsProgress::progressAnimatedStripes:', JSON.stringify(this.progressAnimatedStripes), 'expecting a boolean');
      }

      if (this.progressBackground && SUPPORTED_BACKGROUNDS.includes(this.progressBackground) === false) {
        this.$log.error('invalid ngbsProgress::progressBackground:', JSON.stringify(this.progressBackground), 'expecting one of the following', SUPPORTED_BACKGROUNDS);
      }

      // recalculate percentage if progressMax/progressValue change
      if (changesObj.progressValue || changesObj.progressMax) {
        this.percentage = this.progressValue / this.progressMax * 100;
        this.roundedPercentage = Math.round(this.percentage);
      }
    }
  }]);

  return controller;
}();

// Define and export component


exports.default = {
  bindings: {
    progressAnimatedProgression: '<',
    progressAnimatedStripes: '<',
    progressAutoLabel: '<',
    progressBackground: '<',
    progressMax: '<',
    progressStriped: '<',
    progressValue: '<'
  },
  transclude: true,
  template: _progress2.default,
  controller: controller
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Import Template


var _select = __webpack_require__(35);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_DISPLAY_PROPERTY = 'display';
var DEFAULT_KEY_PROPERTY = 'id';
var DEFAULT_DIRECTION = 'down';
var DEFAULT_PLACEHOLDER = 'Select an option...';

// Set up controller

var controller = function () {
  function controller($element) {
    _classCallCheck(this, controller);

    this.$element = $element;
  }

  _createClass(controller, [{
    key: '$onInit',
    value: function $onInit() {
      var _this = this;

      // Set defaults
      this.selectDisplayProperty = this.selectDisplayProperty || DEFAULT_DISPLAY_PROPERTY;
      this.selectKeyProperty = this.selectKeyProperty || DEFAULT_KEY_PROPERTY;
      this.selectDirection = this.selectDirection || DEFAULT_DIRECTION;
      this.selectPlaceholder = this.selectPlaceholder || DEFAULT_PLACEHOLDER;
      this.selectQuery = '';

      // Set drop direction
      this.$element.addClass('drop' + this.selectDirection);

      // Tell component how to handle changes in ng-model
      this.ngModel.$render = function () {
        if (_this.ngModel.$modelValue) {
          _this.displayValue = _this.selectOptions.find(_this.isSelected, _this)[_this.selectDisplayProperty];
        }
      };

      // Initialize option list
      this.filterOptions();

      // On open, set focus on search field
      this.$element.on('shown.bs.dropdown', function () {
        _this.$element.find('.dropdown-header input').focus();
      });
    }
  }, {
    key: '$onChanges',
    value: function $onChanges(changesObj) {
      // when external option list is updated, reset internal list
      if (!changesObj.selectOptions.isFirstChange()) {
        this.selectQuery = '';
        this.filteredOptions = this.selectOptions;
      }
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      var newValue = value[this.selectKeyProperty];

      this.ngModel.$setViewValue(newValue);
      this.ngModel.$render();
    }
  }, {
    key: 'filterOptions',
    value: function filterOptions() {
      var _this2 = this;

      this.filteredOptions = this.selectOptions.filter(function (option) {
        return option[_this2.selectDisplayProperty].toLowerCase().indexOf(_this2.selectQuery.toLowerCase()) !== -1;
      });
    }
  }, {
    key: 'isSelected',
    value: function isSelected(option) {
      return option[this.selectKeyProperty] === this.ngModel.$modelValue;
    }
  }]);

  return controller;
}();

// Define and export component


exports.default = {
  bindings: {
    selectPlaceholder: '@',
    selectDisplayProperty: '@',
    selectKeyProperty: '@',
    selectOptions: '<',
    selectDirection: '<',
    selectEnableSearch: '<'
  },
  require: {
    ngModel: 'ngModel'
  },
  template: _select2.default,
  controller: controller
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Import Template


var _pane = __webpack_require__(36);

var _pane2 = _interopRequireDefault(_pane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var controller = function () {
  function controller() {
    _classCallCheck(this, controller);
  }

  _createClass(controller, [{
    key: '$onInit',
    value: function $onInit() {
      this.tabsCtrl.addPane(this);
    }
  }]);

  return controller;
}();

// Define and export component


exports.default = {
  transclude: true,
  require: {
    tabsCtrl: '^ngbsTabs'
  },
  bindings: {
    title: '@'
  },
  template: _pane2.default,
  controller: controller
};
//
// function controller() {
//   const vm = this;
//   vm.$onInit = function() {
//     console.info('adding', this);
//     vm.tabsCtrl.addPane(this);
//   };
// }

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Import Template


var _tabs = __webpack_require__(37);

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var controller = function () {
  function controller() {
    _classCallCheck(this, controller);

    this.panes = [];
  }

  _createClass(controller, [{
    key: 'select',
    value: function select(pane) {
      angular.forEach(this.panes, function (pane) {
        pane.selected = false;
      });
      pane.selected = true;
    }
  }, {
    key: 'addPane',
    value: function addPane(pane) {
      if (this.panes.length === 0) {
        this.select(pane);
      }
      this.panes.push(pane);
    }
  }]);

  return controller;
}();
// Define and export component


exports.default = {
  transclude: true,
  template: _tabs2.default,
  controller: controller
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _test = __webpack_require__(38);

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Import Template


var controller = function controller() {
  _classCallCheck(this, controller);

  this.text = 'ng1bs4 is working!';
};
// Define and export component


exports.default = {
  template: _test2.default,
  controller: controller
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DEFAULT_CONTENT = 'Please provide tooltip content';
var DEFAULT_TRIGGER = 'hover focus';
var DEFAULT_PLACEMENT = 'bottom';

var TooltipDirective = function TooltipDirective() {
  return {
    restrict: 'A',
    scope: {
      tooltipContent: '@',
      tooltipPlacement: '@',
      tooltipTrigger: '@'
    },
    link: function link($scope, $element) {
      // set a base object for tooltip options
      var options = {
        trigger: $scope.tooltipTrigger || DEFAULT_TRIGGER,
        animation: true,
        html: true,
        title: $scope.tooltipContent || DEFAULT_CONTENT,
        placement: $scope.tooltipPlacement || DEFAULT_PLACEMENT,
        delay: { 'show': 200, 'hide': 0 }
      };

      initTooltip();

      function initTooltip() {
        $element.removeAttr('ngbs-tooltip');
        $element.tooltip(options);
      }
    }
  };
};

exports.default = TooltipDirective;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-{{ $ctrl.alertType}}\" role=\"alert\" ng-class=\"{'alert-dismissible': $ctrl.alertDismissible}\" ng-if=\"$ctrl.dismissed !== true\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" ng-click=\"$ctrl.dismissed = true\" ng-if=\"$ctrl.alertDismissible\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n    <ng-transclude></ng-transclude>\n</div>";

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\">\n    <button type=\"button\" data-toggle=\"dropdown\" class=\"btn btn-secondary dropdown-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <span class=\"placeholder\">{{ ::$ctrl.menuDisplay }}</span>\n    </button>\n\n    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n        <a class=\"dropdown-item\"\n           ng-repeat=\"menuAction in $ctrl.menuActions\"\n           ng-bind-html=\"menuAction.display\"\n           ng-click=\"menuAction.action()\">\n        </a>\n    </div>\n</div>\n";

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">{{ options.title }}</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <p>{{ options.body }}</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" ng-repeat=\"button in options.buttons\" class=\"btn btn-{{button.type}}\" ng-click=\"closeModal(button)\">{{ button.text }}</button>\n            </div>\n        </div>\n    </div>\n</div>";

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "<ul class=\"pagination\" ng-class=\"{ 'pagination-sm': $ctrl.paginationSize === 'sm', 'pagination-lg': $ctrl.paginationSize === 'lg' }\">\n    <!-- clickable previous -->\n    <li class=\"page-item\" ng-if=\"!$ctrl.paginationDisabled && $ctrl.paginationCurrentPage > 1\">\n        <a ng-click=\"$ctrl.onPreviousClick(); $event.preventDefault();\" class=\"page-link\" href=\"#\" aria-label=\"Previous\">\n            <span aria-hidden=\"true\">&laquo;</span>\n            <span class=\"sr-only\">Previous</span>\n        </a>\n    </li>\n\n    <!-- disabled previous -->\n    <li class=\"page-item disabled\" ng-if=\"$ctrl.paginationDisabled || (!$ctrl.paginationDisabled && $ctrl.paginationCurrentPage === 1)\">\n        <span class=\"page-link\">\n            <span aria-hidden=\"true\">&laquo;</span>\n            <span class=\"sr-only\">Previous</span>\n        </span>\n    </li>\n\n    <!-- pages -->\n    <li ng-repeat=\"pageMeta in $ctrl.pages track by $index\" ng-class=\"{ active: $ctrl.paginationCurrentPage === pageMeta.page, disabled: $ctrl.paginationDisabled }\" class=\"page-item\">\n        <a ng-if=\"!$ctrl.paginationDisabled\" class=\"page-link\" ng-click=\"$ctrl.onPageClick(pageMeta.page); $event.preventDefault();\" href=\"#\">{{pageMeta.display}}</a>\n        <span ng-if=\"$ctrl.paginationDisabled\" class=\"page-link\">{{pageMeta.display}}</span>\n    </li>\n\n    <!-- clickable next -->\n    <li class=\"page-item\" ng-if=\"!$ctrl.paginationDisabled && $ctrl.paginationCurrentPage < $ctrl.totalPages\">\n        <a ng-click=\"$ctrl.onNextClick(); $event.preventDefault();\" class=\"page-link\" href=\"#\" aria-label=\"Next\">\n            <span aria-hidden=\"true\">&raquo;</span>\n            <span class=\"sr-only\">Next</span>\n        </a>\n    </li>\n\n    <!-- disabled next -->\n    <li class=\"page-item disabled\" ng-if=\"$ctrl.paginationDisabled || (!$ctrl.paginationDisabled && $ctrl.paginationCurrentPage === $ctrl.totalPages)\">\n        <span class=\"page-link\">\n            <span aria-hidden=\"true\">&raquo;</span>\n            <span class=\"sr-only\">Next</span>\n        </span>\n    </li>\n</ul>\n";

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\n  <div class=\"progress-bar\" role=\"progressbar\"\n       ng-if=\"$ctrl.progressValue || $ctrl.progressValue === 0\"\n       ng-attr-aria-valuenow=\"{{$ctrl.progressValue}}\"\n       ng-attr-aria-valuemax=\"{{$ctrl.progressMax}}\"\n       ng-attr-style=\"width: {{$ctrl.percentage}}%\"\n       ng-class=\"[$ctrl.progressBackground ? 'bg-' + $ctrl.progressBackground : '', { 'animated-progress': $ctrl.progressAnimatedProgression, 'progress-bar-animated': $ctrl.progressAnimatedStripes, 'progress-bar-striped': $ctrl.progressStriped }]\">\n        <span ng-if=\"$ctrl.progressAutoLabel\">{{$ctrl.roundedPercentage}}%</span>\n        <span ng-if=\"!$ctrl.progressAutoLabel\" ng-transclude></span>\n      </div>\n\n  <div class=\"progress-bar indeterminate\" role=\"progressbar\"\n       ng-if=\"!$ctrl.progressValue && $ctrl.progressValue !== 0\"\n       aria-valuenow=\"Unknown\"\n       aria-valuemax=\"Unknown\"\n       ng-class=\"[$ctrl.progressBackground ? 'bg-' + $ctrl.progressBackground : '', { 'progress-bar-animated': $ctrl.progressAnimatedStripes, 'progress-bar-striped': $ctrl.progressStriped }]\"></div>\n</div>\n";

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" data-toggle=\"dropdown\" class=\"dropdown-toggle btn btn-secondary\">\n    <span ng-show=\"!$ctrl.displayValue\" class=\"placeholder\">{{ ::$ctrl.selectPlaceholder }}</span>\n    <span ng-show=\"!!$ctrl.displayValue\" ng-bind-html=\"$ctrl.displayValue\" class=\"value\"></span>\n</button>\n\n<div class=\"dropdown-menu\">\n    <div ng-show=\"$ctrl.selectEnableSearch\" class=\"dropdown-header\">\n        <input type=\"text\" placeholder=\"Search...\" ng-model=\"$ctrl.selectQuery\" ng-change=\"$ctrl.filterOptions()\" class=\"form-control\"/>\n    </div>\n    <div class=\"dropdown-menu-inner\">\n        <a ng-repeat=\"option in $ctrl.filteredOptions\" ng-click=\"$ctrl.setValue(option)\" ng-class=\"{ 'selected': $ctrl.isSelected(option) }\" href=\"\" ng-bind-html=\"option[$ctrl.selectDisplayProperty]\" class=\"dropdown-item\"></a>\n        <a ng-if=\"!$ctrl.filteredOptions.length\" class=\"dropdown-item\">No results found...</a></div>\n</div>";

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "<div ng-class=\"{active:$ctrl.selected}\" ng-transclude=\"\" class=\"tab-pane\"></div>";

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n    <li ng-repeat=\"pane in $ctrl.panes\" class=\"nav-item\"><a href=\"\" ng-click=\"$ctrl.select(pane)\" ng-class=\"{active:pane.selected}\" class=\"nav-link\">{{pane.title}}</a></li>\n</ul>\n<div ng-transclude=\"\" class=\"tab-content\"></div>";

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "<div>{{ $ctrl.text }}</div>\n<div class=\"css-test\" style=\"color:red\">But you forgot to load css!</div>";

/***/ })
/******/ ]);
});