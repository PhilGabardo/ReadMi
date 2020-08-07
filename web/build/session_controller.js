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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./web/assets/js/session_controller.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./web/assets/js/session_controller.js":
/*!*********************************************!*\
  !*** ./web/assets/js/session_controller.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SessionController; });
/* harmony import */ var _timing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timing */ "./web/assets/js/timing.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var SessionController =
/*#__PURE__*/
function () {
  function SessionController(audio_stream_controller, note_feedback, metronome, song_player, timing_bar, score_scroller, beats_per_measure, bpm, total_bar_count) {
    _classCallCheck(this, SessionController);

    this.note_feedback = note_feedback;
    this.metronome = metronome;
    this.song_player = song_player;
    this.timing_bar = timing_bar;
    this.score_scroller = score_scroller;
    this.audio_stream_controller = audio_stream_controller;
    this.bpm = bpm;
    this.beats_per_measure = beats_per_measure;
    this.instrument = instrument;
    this.playingState = true;
    this.completion = null;
    this.total_bar_count = total_bar_count;
    this.menu = document.getElementById('menu');
    this.pause_controller_label = document.getElementById('pause-controller-label');
    this.setPauseController();
  }

  _createClass(SessionController, [{
    key: "setPauseController",
    value: function setPauseController() {
      var _this = this;

      document.getElementById('pause-controller').addEventListener('change', function (event) {
        _this.invertState();
      });
    }
  }, {
    key: "start",
    value: function start() {
      this.menu.style.visibility = 'visible';

      for (var i = 0; i < this.beats_per_measure; i++) {
        setTimeout(this.metronome.click, 60 * 1000 * i / this.bpm, this.metronome);
      }

      setTimeout(this._start, this.getStaveTimeInMs(), this);
    }
  }, {
    key: "_start",
    value: function _start(session_controller) {
      _timing__WEBPACK_IMPORTED_MODULE_0__["default"].startTiming();
      session_controller.pause_controller_label.style.visibility = 'visible';
      session_controller.metronome.start();
      session_controller.song_player.start();
      session_controller.timing_bar.start();
      session_controller.note_feedback.start();
      session_controller.score_scroller.start();
      session_controller.completion = setTimeout(session_controller.complete, session_controller.getTotalTimeInMs(), session_controller);
    }
  }, {
    key: "invertState",
    value: function invertState() {
      if (this.playingState) {
        _timing__WEBPACK_IMPORTED_MODULE_0__["default"].pause();
        this.metronome.pause();
        this.song_player.pause();
        this.note_feedback.pause();
        this.timing_bar.pause();
        this.score_scroller.pause();
        this.playingState = false;
        window.clearTimeout(this.completion);
      } else {
        _timing__WEBPACK_IMPORTED_MODULE_0__["default"].resume();
        this.metronome.resume();
        this.song_player.resume();
        this.note_feedback.resume();
        this.timing_bar.resume();
        this.score_scroller.resume();
        this.playingState = true;
        this.completion = setTimeout(this.complete, this.getTotalTimeInMs() - _timing__WEBPACK_IMPORTED_MODULE_0__["default"].getTimeSinceStart(), this);
      }
    }
  }, {
    key: "complete",
    value: function complete(session_controller) {
      _timing__WEBPACK_IMPORTED_MODULE_0__["default"].pause();
      session_controller.pause_controller_label.style.visibility = 'hidden';
      session_controller.menu.style.visibility = 'hidden';
      session_controller.metronome.pause();
      session_controller.song_player.pause();
      session_controller.note_feedback.pause();
      session_controller.timing_bar.pause();
      session_controller.timing_bar.clearLastChild();
      session_controller.score_scroller.pause();
      session_controller.playingState = false;
    }
  }, {
    key: "getStaveTimeInMs",
    value: function getStaveTimeInMs() {
      return this.beats_per_measure / this.bpm * 60 * 1000;
    }
  }, {
    key: "getTotalTimeInMs",
    value: function getTotalTimeInMs() {
      return this.getStaveTimeInMs() * this.total_bar_count;
    }
  }]);

  return SessionController;
}();



/***/ }),

/***/ "./web/assets/js/timing.js":
/*!*********************************!*\
  !*** ./web/assets/js/timing.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timing; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Timing =
/*#__PURE__*/
function () {
  function Timing() {
    _classCallCheck(this, Timing);
  }

  _createClass(Timing, null, [{
    key: "startTiming",
    value: function startTiming() {
      Timing.startTime = Date.now();
      Timing.pauseDelay = 0;
    }
  }, {
    key: "pause",
    value: function pause() {
      Timing.pauseStart = Date.now();
    }
  }, {
    key: "resume",
    value: function resume() {
      Timing.pauseDelay += Date.now() - Timing.pauseStart;
    }
  }, {
    key: "getTimeSinceStart",
    value: function getTimeSinceStart() {
      return Date.now() - Timing.startTime - this.pauseDelay;
    }
  }]);

  return Timing;
}();



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9zZXNzaW9uX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy90aW1pbmcuanMiXSwibmFtZXMiOlsiU2Vzc2lvbkNvbnRyb2xsZXIiLCJhdWRpb19zdHJlYW1fY29udHJvbGxlciIsIm5vdGVfZmVlZGJhY2siLCJtZXRyb25vbWUiLCJzb25nX3BsYXllciIsInRpbWluZ19iYXIiLCJzY29yZV9zY3JvbGxlciIsImJlYXRzX3Blcl9tZWFzdXJlIiwiYnBtIiwidG90YWxfYmFyX2NvdW50IiwiaW5zdHJ1bWVudCIsInBsYXlpbmdTdGF0ZSIsImNvbXBsZXRpb24iLCJtZW51IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInBhdXNlX2NvbnRyb2xsZXJfbGFiZWwiLCJzZXRQYXVzZUNvbnRyb2xsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJpbnZlcnRTdGF0ZSIsInN0eWxlIiwidmlzaWJpbGl0eSIsImkiLCJzZXRUaW1lb3V0IiwiY2xpY2siLCJfc3RhcnQiLCJnZXRTdGF2ZVRpbWVJbk1zIiwic2Vzc2lvbl9jb250cm9sbGVyIiwiVGltaW5nIiwic3RhcnRUaW1pbmciLCJzdGFydCIsImNvbXBsZXRlIiwiZ2V0VG90YWxUaW1lSW5NcyIsInBhdXNlIiwid2luZG93IiwiY2xlYXJUaW1lb3V0IiwicmVzdW1lIiwiZ2V0VGltZVNpbmNlU3RhcnQiLCJjbGVhckxhc3RDaGlsZCIsInN0YXJ0VGltZSIsIkRhdGUiLCJub3ciLCJwYXVzZURlbGF5IiwicGF1c2VTdGFydCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNB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OUIsR0FBMkMsUUFBM0M7QUFDQU0sd0JBQWtCLENBQUN6QixTQUFuQixDQUE2QitCLEtBQTdCO0FBQ0FOLHdCQUFrQixDQUFDeEIsV0FBbkIsQ0FBK0I4QixLQUEvQjtBQUNBTix3QkFBa0IsQ0FBQzFCLGFBQW5CLENBQWlDZ0MsS0FBakM7QUFDQU4sd0JBQWtCLENBQUN2QixVQUFuQixDQUE4QjZCLEtBQTlCO0FBQ0FOLHdCQUFrQixDQUFDdkIsVUFBbkIsQ0FBOEJrQyxjQUE5QjtBQUNBWCx3QkFBa0IsQ0FBQ3RCLGNBQW5CLENBQWtDNEIsS0FBbEM7QUFDQU4sd0JBQWtCLENBQUNqQixZQUFuQixHQUFrQyxLQUFsQztBQUNBOzs7dUNBRWtCO0FBQ2xCLGFBQVEsS0FBS0osaUJBQUwsR0FBeUIsS0FBS0MsR0FBL0IsR0FBc0MsRUFBdEMsR0FBMkMsSUFBbEQ7QUFDQTs7O3VDQUVrQjtBQUNsQixhQUFPLEtBQUttQixnQkFBTCxLQUEwQixLQUFLbEIsZUFBdEM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN4Rm1Cb0IsTTs7Ozs7Ozs7O2tDQUNDO0FBQ3BCQSxZQUFNLENBQUNXLFNBQVAsR0FBbUJDLElBQUksQ0FBQ0MsR0FBTCxFQUFuQjtBQUNBYixZQUFNLENBQUNjLFVBQVAsR0FBb0IsQ0FBcEI7QUFDQTs7OzRCQUVjO0FBQ2RkLFlBQU0sQ0FBQ2UsVUFBUCxHQUFvQkgsSUFBSSxDQUFDQyxHQUFMLEVBQXBCO0FBQ0E7Ozs2QkFFZTtBQUNmYixZQUFNLENBQUNjLFVBQVAsSUFBcUJGLElBQUksQ0FBQ0MsR0FBTCxLQUFhYixNQUFNLENBQUNlLFVBQXpDO0FBQ0E7Ozt3Q0FFMEI7QUFDMUIsYUFBT0gsSUFBSSxDQUFDQyxHQUFMLEtBQWFiLE1BQU0sQ0FBQ1csU0FBcEIsR0FBZ0MsS0FBS0csVUFBNUM7QUFDQSIsImZpbGUiOiJzZXNzaW9uX2NvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93ZWIvYXNzZXRzL2pzL3Nlc3Npb25fY29udHJvbGxlci5qc1wiKTtcbiIsImltcG9ydCBUaW1pbmcgZnJvbSAnLi90aW1pbmcnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Vzc2lvbkNvbnRyb2xsZXIge1xuXHRjb25zdHJ1Y3RvcihhdWRpb19zdHJlYW1fY29udHJvbGxlciwgbm90ZV9mZWVkYmFjaywgbWV0cm9ub21lLCBzb25nX3BsYXllciwgdGltaW5nX2Jhciwgc2NvcmVfc2Nyb2xsZXIsIGJlYXRzX3Blcl9tZWFzdXJlLCBicG0sIHRvdGFsX2Jhcl9jb3VudCkge1xuXHRcdHRoaXMubm90ZV9mZWVkYmFjayA9IG5vdGVfZmVlZGJhY2s7XG5cdFx0dGhpcy5tZXRyb25vbWUgPSBtZXRyb25vbWU7XG5cdFx0dGhpcy5zb25nX3BsYXllciA9IHNvbmdfcGxheWVyO1xuXHRcdHRoaXMudGltaW5nX2JhciA9IHRpbWluZ19iYXI7XG5cdFx0dGhpcy5zY29yZV9zY3JvbGxlciA9IHNjb3JlX3Njcm9sbGVyO1xuXHRcdHRoaXMuYXVkaW9fc3RyZWFtX2NvbnRyb2xsZXIgPSBhdWRpb19zdHJlYW1fY29udHJvbGxlcjtcblx0XHR0aGlzLmJwbSA9IGJwbTtcblx0XHR0aGlzLmJlYXRzX3Blcl9tZWFzdXJlID0gYmVhdHNfcGVyX21lYXN1cmU7XG5cdFx0dGhpcy5pbnN0cnVtZW50ID0gaW5zdHJ1bWVudDtcblx0XHR0aGlzLnBsYXlpbmdTdGF0ZSA9IHRydWU7XG5cdFx0dGhpcy5jb21wbGV0aW9uID0gbnVsbDtcblx0XHR0aGlzLnRvdGFsX2Jhcl9jb3VudCA9IHRvdGFsX2Jhcl9jb3VudDtcblx0XHR0aGlzLm1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuXHRcdHRoaXMucGF1c2VfY29udHJvbGxlcl9sYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXVzZS1jb250cm9sbGVyLWxhYmVsJyk7XG5cdFx0dGhpcy5zZXRQYXVzZUNvbnRyb2xsZXIoKTtcblx0fVxuXG5cdHNldFBhdXNlQ29udHJvbGxlcigpIHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF1c2UtY29udHJvbGxlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuXHRcdFx0dGhpcy5pbnZlcnRTdGF0ZSgpO1xuXHRcdH0pXG5cdH1cblxuXHRzdGFydCgpIHtcblx0XHR0aGlzLm1lbnUuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmVhdHNfcGVyX21lYXN1cmU7IGkrKykge1xuXHRcdFx0c2V0VGltZW91dCh0aGlzLm1ldHJvbm9tZS5jbGljaywgKDYwICogMTAwMCAqIGkgLyB0aGlzLmJwbSksIHRoaXMubWV0cm9ub21lKTtcblx0XHR9XG5cdFx0c2V0VGltZW91dCh0aGlzLl9zdGFydCwgdGhpcy5nZXRTdGF2ZVRpbWVJbk1zKCksIHRoaXMpO1xuXHR9XG5cblx0X3N0YXJ0KHNlc3Npb25fY29udHJvbGxlcikge1xuXHRcdFRpbWluZy5zdGFydFRpbWluZygpO1xuXHRcdHNlc3Npb25fY29udHJvbGxlci5wYXVzZV9jb250cm9sbGVyX2xhYmVsLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG5cdFx0c2Vzc2lvbl9jb250cm9sbGVyLm1ldHJvbm9tZS5zdGFydCgpO1xuXHRcdHNlc3Npb25fY29udHJvbGxlci5zb25nX3BsYXllci5zdGFydCgpO1xuXHRcdHNlc3Npb25fY29udHJvbGxlci50aW1pbmdfYmFyLnN0YXJ0KCk7XG5cdFx0c2Vzc2lvbl9jb250cm9sbGVyLm5vdGVfZmVlZGJhY2suc3RhcnQoKTtcblx0XHRzZXNzaW9uX2NvbnRyb2xsZXIuc2NvcmVfc2Nyb2xsZXIuc3RhcnQoKVxuXHRcdHNlc3Npb25fY29udHJvbGxlci5jb21wbGV0aW9uID0gc2V0VGltZW91dChzZXNzaW9uX2NvbnRyb2xsZXIuY29tcGxldGUsIHNlc3Npb25fY29udHJvbGxlci5nZXRUb3RhbFRpbWVJbk1zKCksIHNlc3Npb25fY29udHJvbGxlcik7XG5cdH1cblxuXHRpbnZlcnRTdGF0ZSgpIHtcblx0XHRpZiAodGhpcy5wbGF5aW5nU3RhdGUpIHtcblx0XHRcdFRpbWluZy5wYXVzZSgpO1xuXHRcdFx0dGhpcy5tZXRyb25vbWUucGF1c2UoKTtcblx0XHRcdHRoaXMuc29uZ19wbGF5ZXIucGF1c2UoKTtcblx0XHRcdHRoaXMubm90ZV9mZWVkYmFjay5wYXVzZSgpO1xuXHRcdFx0dGhpcy50aW1pbmdfYmFyLnBhdXNlKCk7XG5cdFx0XHR0aGlzLnNjb3JlX3Njcm9sbGVyLnBhdXNlKCk7XG5cdFx0XHR0aGlzLnBsYXlpbmdTdGF0ZSA9IGZhbHNlO1xuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dCh0aGlzLmNvbXBsZXRpb24pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRUaW1pbmcucmVzdW1lKCk7XG5cdFx0XHR0aGlzLm1ldHJvbm9tZS5yZXN1bWUoKTtcblx0XHRcdHRoaXMuc29uZ19wbGF5ZXIucmVzdW1lKCk7XG5cdFx0XHR0aGlzLm5vdGVfZmVlZGJhY2sucmVzdW1lKCk7XG5cdFx0XHR0aGlzLnRpbWluZ19iYXIucmVzdW1lKCk7XG5cdFx0XHR0aGlzLnNjb3JlX3Njcm9sbGVyLnJlc3VtZSgpO1xuXHRcdFx0dGhpcy5wbGF5aW5nU3RhdGUgPSB0cnVlO1xuXHRcdFx0dGhpcy5jb21wbGV0aW9uID0gc2V0VGltZW91dCh0aGlzLmNvbXBsZXRlLCB0aGlzLmdldFRvdGFsVGltZUluTXMoKSAtIFRpbWluZy5nZXRUaW1lU2luY2VTdGFydCgpLCB0aGlzKTtcblx0XHR9XG5cdH1cblxuXHRjb21wbGV0ZShzZXNzaW9uX2NvbnRyb2xsZXIpIHtcblx0XHRUaW1pbmcucGF1c2UoKTtcblx0XHRzZXNzaW9uX2NvbnRyb2xsZXIucGF1c2VfY29udHJvbGxlcl9sYWJlbC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cdFx0c2Vzc2lvbl9jb250cm9sbGVyLm1lbnUuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXHRcdHNlc3Npb25fY29udHJvbGxlci5tZXRyb25vbWUucGF1c2UoKTtcblx0XHRzZXNzaW9uX2NvbnRyb2xsZXIuc29uZ19wbGF5ZXIucGF1c2UoKTtcblx0XHRzZXNzaW9uX2NvbnRyb2xsZXIubm90ZV9mZWVkYmFjay5wYXVzZSgpO1xuXHRcdHNlc3Npb25fY29udHJvbGxlci50aW1pbmdfYmFyLnBhdXNlKCk7XG5cdFx0c2Vzc2lvbl9jb250cm9sbGVyLnRpbWluZ19iYXIuY2xlYXJMYXN0Q2hpbGQoKTtcblx0XHRzZXNzaW9uX2NvbnRyb2xsZXIuc2NvcmVfc2Nyb2xsZXIucGF1c2UoKTtcblx0XHRzZXNzaW9uX2NvbnRyb2xsZXIucGxheWluZ1N0YXRlID0gZmFsc2U7XG5cdH1cblxuXHRnZXRTdGF2ZVRpbWVJbk1zKCkge1xuXHRcdHJldHVybiAodGhpcy5iZWF0c19wZXJfbWVhc3VyZSAvIHRoaXMuYnBtKSAqIDYwICogMTAwMDtcblx0fVxuXG5cdGdldFRvdGFsVGltZUluTXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0U3RhdmVUaW1lSW5NcygpICogdGhpcy50b3RhbF9iYXJfY291bnQ7XG5cdH1cbn1cblxuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1pbmcge1xuXHRzdGF0aWMgc3RhcnRUaW1pbmcoKSB7XG5cdFx0VGltaW5nLnN0YXJ0VGltZSA9IERhdGUubm93KCk7XG5cdFx0VGltaW5nLnBhdXNlRGVsYXkgPSAwO1xuXHR9XG5cblx0c3RhdGljIHBhdXNlKCkge1xuXHRcdFRpbWluZy5wYXVzZVN0YXJ0ID0gRGF0ZS5ub3coKVxuXHR9XG5cblx0c3RhdGljIHJlc3VtZSgpIHtcblx0XHRUaW1pbmcucGF1c2VEZWxheSArPSBEYXRlLm5vdygpIC0gVGltaW5nLnBhdXNlU3RhcnRcblx0fVxuXG5cdHN0YXRpYyBnZXRUaW1lU2luY2VTdGFydCgpIHtcblx0XHRyZXR1cm4gRGF0ZS5ub3coKSAtIFRpbWluZy5zdGFydFRpbWUgLSB0aGlzLnBhdXNlRGVsYXlcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==