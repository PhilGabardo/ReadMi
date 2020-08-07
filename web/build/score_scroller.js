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
/******/ 	return __webpack_require__(__webpack_require__.s = "./web/assets/js/score_scroller.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./web/assets/js/score_scroller.js":
/*!*****************************************!*\
  !*** ./web/assets/js/score_scroller.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScoreScoller; });
/* harmony import */ var _timing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timing */ "./web/assets/js/timing.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ScoreScoller =
/*#__PURE__*/
function () {
  function ScoreScoller(beats_per_measure, beats_per_minute, stave_height, is_piano) {
    _classCallCheck(this, ScoreScoller);

    this.beats_per_measure = beats_per_measure;
    this.beats_per_minute = beats_per_minute;
    this.enabled = true;
    this.stave_height = stave_height;
    this.is_piano = is_piano;
    this.setController();
  }

  _createClass(ScoreScoller, [{
    key: "start",
    value: function start() {
      this.func = setInterval(this.scroll, 300, this);
    }
  }, {
    key: "pause",
    value: function pause() {
      window.clearInterval(this.func);
    }
  }, {
    key: "scroll",
    value: function scroll(scroller) {
      if (!scroller.enabled) {
        return;
      }

      var timeInMs = _timing__WEBPACK_IMPORTED_MODULE_0__["default"].getTimeSinceStart();
      var bps = scroller.beats_per_minute / 60;
      var beatsPassed = timeInMs * bps / 1000;
      var stavesPassed = Math.floor(beatsPassed / scroller.beats_per_measure);
      var percentageThroughStave = beatsPassed % scroller.beats_per_measure / scroller.beats_per_measure;
      scrollToNiceSpot(stavesPassed, percentageThroughStave, scroller.stave_height, scroller.is_piano);
    }
  }, {
    key: "resume",
    value: function resume() {
      this.start();
    }
  }, {
    key: "setController",
    value: function setController() {
      var _this = this;

      document.getElementById('scroller-controller').addEventListener('change', function (event) {
        if (event.target.checked) {
          _this.enabled = true;
        } else {
          _this.enabled = false;
        }
      });
    }
  }]);

  return ScoreScoller;
}();



function scrollToNiceSpot(stavesPassed, percentageThroughStave, staveHeight, is_piano) {
  var stave_height = staveHeight;
  var height = Math.floor(stavesPassed / 3) * stave_height;
  var penalty = stave_height - (stavesPassed % 3 + percentageThroughStave) / 3 * stave_height;

  if (stavesPassed > 1) {
    penalty -= stave_height / 2;
  }

  window.scrollTo(0, height - penalty - 50);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9zY29yZV9zY3JvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi93ZWIvYXNzZXRzL2pzL3RpbWluZy5qcyJdLCJuYW1lcyI6WyJTY29yZVNjb2xsZXIiLCJiZWF0c19wZXJfbWVhc3VyZSIsImJlYXRzX3Blcl9taW51dGUiLCJzdGF2ZV9oZWlnaHQiLCJpc19waWFubyIsImVuYWJsZWQiLCJzZXRDb250cm9sbGVyIiwiZnVuYyIsInNldEludGVydmFsIiwic2Nyb2xsIiwid2luZG93IiwiY2xlYXJJbnRlcnZhbCIsInNjcm9sbGVyIiwidGltZUluTXMiLCJUaW1pbmciLCJnZXRUaW1lU2luY2VTdGFydCIsImJwcyIsImJlYXRzUGFzc2VkIiwic3RhdmVzUGFzc2VkIiwiTWF0aCIsImZsb29yIiwicGVyY2VudGFnZVRocm91Z2hTdGF2ZSIsInNjcm9sbFRvTmljZVNwb3QiLCJzdGFydCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJjaGVja2VkIiwic3RhdmVIZWlnaHQiLCJoZWlnaHQiLCJwZW5hbHR5Iiwic2Nyb2xsVG8iLCJzdGFydFRpbWUiLCJEYXRlIiwibm93IiwicGF1c2VEZWxheSIsInBhdXNlU3RhcnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFD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bUIsRUFBdEM7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3ZEb0JsQixNOzs7Ozs7Ozs7a0NBQ0M7QUFDcEJBLFlBQU0sQ0FBQ29CLFNBQVAsR0FBbUJDLElBQUksQ0FBQ0MsR0FBTCxFQUFuQjtBQUNBdEIsWUFBTSxDQUFDdUIsVUFBUCxHQUFvQixDQUFwQjtBQUNBOzs7NEJBRWM7QUFDZHZCLFlBQU0sQ0FBQ3dCLFVBQVAsR0FBb0JILElBQUksQ0FBQ0MsR0FBTCxFQUFwQjtBQUNBOzs7NkJBRWU7QUFDZnRCLFlBQU0sQ0FBQ3VCLFVBQVAsSUFBcUJGLElBQUksQ0FBQ0MsR0FBTCxLQUFhdEIsTUFBTSxDQUFDd0IsVUFBekM7QUFDQTs7O3dDQUUwQjtBQUMxQixhQUFPSCxJQUFJLENBQUNDLEdBQUwsS0FBYXRCLE1BQU0sQ0FBQ29CLFNBQXBCLEdBQWdDLEtBQUtHLFVBQTVDO0FBQ0EiLCJmaWxlIjoic2NvcmVfc2Nyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93ZWIvYXNzZXRzL2pzL3Njb3JlX3Njcm9sbGVyLmpzXCIpO1xuIiwiaW1wb3J0IFRpbWluZyBmcm9tICcuL3RpbWluZydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmVTY29sbGVyIHtcblx0Y29uc3RydWN0b3IoYmVhdHNfcGVyX21lYXN1cmUsIGJlYXRzX3Blcl9taW51dGUsIHN0YXZlX2hlaWdodCwgaXNfcGlhbm8pIHtcblx0XHR0aGlzLmJlYXRzX3Blcl9tZWFzdXJlID0gYmVhdHNfcGVyX21lYXN1cmU7XG5cdFx0dGhpcy5iZWF0c19wZXJfbWludXRlID0gYmVhdHNfcGVyX21pbnV0ZTtcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlXG5cdFx0dGhpcy5zdGF2ZV9oZWlnaHQgPSBzdGF2ZV9oZWlnaHQ7XG5cdFx0dGhpcy5pc19waWFubyA9IGlzX3BpYW5vO1xuXHRcdHRoaXMuc2V0Q29udHJvbGxlcigpO1xuXHR9XG5cblx0c3RhcnQoKSB7XG5cdFx0dGhpcy5mdW5jID0gc2V0SW50ZXJ2YWwodGhpcy5zY3JvbGwsIDMwMCwgdGhpcyk7XG5cdH1cblxuXHRwYXVzZSgpIHtcblx0XHR3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmZ1bmMpO1xuXHR9XG5cblx0c2Nyb2xsKHNjcm9sbGVyKSB7XG5cdFx0aWYgKCFzY3JvbGxlci5lbmFibGVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGxldCB0aW1lSW5NcyA9IFRpbWluZy5nZXRUaW1lU2luY2VTdGFydCgpO1xuXHRcdGxldCBicHMgPSBzY3JvbGxlci5iZWF0c19wZXJfbWludXRlIC8gNjA7XG5cdFx0bGV0IGJlYXRzUGFzc2VkID0gKHRpbWVJbk1zICogYnBzKSAvICgxMDAwKTtcblx0XHRsZXQgc3RhdmVzUGFzc2VkID0gTWF0aC5mbG9vcihiZWF0c1Bhc3NlZCAvIHNjcm9sbGVyLmJlYXRzX3Blcl9tZWFzdXJlKTtcblx0XHRsZXQgcGVyY2VudGFnZVRocm91Z2hTdGF2ZSA9IChiZWF0c1Bhc3NlZCAlIHNjcm9sbGVyLmJlYXRzX3Blcl9tZWFzdXJlKSAvIHNjcm9sbGVyLmJlYXRzX3Blcl9tZWFzdXJlO1xuXHRcdHNjcm9sbFRvTmljZVNwb3Qoc3RhdmVzUGFzc2VkLCBwZXJjZW50YWdlVGhyb3VnaFN0YXZlLCBzY3JvbGxlci5zdGF2ZV9oZWlnaHQsIHNjcm9sbGVyLmlzX3BpYW5vKVxuXHR9XG5cblx0cmVzdW1lKCkge1xuXHRcdHRoaXMuc3RhcnQoKTtcblx0fVxuXG5cdHNldENvbnRyb2xsZXIoKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njcm9sbGVyLWNvbnRyb2xsZXInKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcblx0XHRcdGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuXHRcdFx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmVuYWJsZWQgPSBmYWxzZVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cbn1cblxuZnVuY3Rpb24gc2Nyb2xsVG9OaWNlU3BvdChzdGF2ZXNQYXNzZWQsIHBlcmNlbnRhZ2VUaHJvdWdoU3RhdmUsIHN0YXZlSGVpZ2h0LCBpc19waWFubykge1xuXHRsZXQgc3RhdmVfaGVpZ2h0ID0gc3RhdmVIZWlnaHQ7XG5cdGxldCBoZWlnaHQgPSBNYXRoLmZsb29yKHN0YXZlc1Bhc3NlZCAvIDMpICogc3RhdmVfaGVpZ2h0O1xuXHRsZXQgcGVuYWx0eSA9IHN0YXZlX2hlaWdodCAtICgoKHN0YXZlc1Bhc3NlZCAlIDMpICsgcGVyY2VudGFnZVRocm91Z2hTdGF2ZSkgLyAzKSAqIHN0YXZlX2hlaWdodFxuXHRpZiAoc3RhdmVzUGFzc2VkID4gMSkge1xuXHRcdHBlbmFsdHkgLT0gc3RhdmVfaGVpZ2h0IC8gMjtcblx0fVxuXHR3aW5kb3cuc2Nyb2xsVG8oMCwgaGVpZ2h0IC0gcGVuYWx0eSAtIDUwKVxufVxuXG5cblxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltaW5nIHtcblx0c3RhdGljIHN0YXJ0VGltaW5nKCkge1xuXHRcdFRpbWluZy5zdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuXHRcdFRpbWluZy5wYXVzZURlbGF5ID0gMDtcblx0fVxuXG5cdHN0YXRpYyBwYXVzZSgpIHtcblx0XHRUaW1pbmcucGF1c2VTdGFydCA9IERhdGUubm93KClcblx0fVxuXG5cdHN0YXRpYyByZXN1bWUoKSB7XG5cdFx0VGltaW5nLnBhdXNlRGVsYXkgKz0gRGF0ZS5ub3coKSAtIFRpbWluZy5wYXVzZVN0YXJ0XG5cdH1cblxuXHRzdGF0aWMgZ2V0VGltZVNpbmNlU3RhcnQoKSB7XG5cdFx0cmV0dXJuIERhdGUubm93KCkgLSBUaW1pbmcuc3RhcnRUaW1lIC0gdGhpcy5wYXVzZURlbGF5XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=