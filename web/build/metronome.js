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
/******/ 	return __webpack_require__(__webpack_require__.s = "./web/assets/js/metronome.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./web/assets/js/audio_context.js":
/*!****************************************!*\
  !*** ./web/assets/js/audio_context.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function getAudioContext() {
  window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext; // Safari and old versions of Chrome

  return new AudioContext();
}

/* harmony default export */ __webpack_exports__["default"] = ({
  getAudioContext: getAudioContext
});

/***/ }),

/***/ "./web/assets/js/metronome.js":
/*!************************************!*\
  !*** ./web/assets/js/metronome.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScheduledMetronome; });
/* harmony import */ var _audio_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio_context */ "./web/assets/js/audio_context.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/*
 * Scheduling is done by prescheduling all the audio events, and
 * letting the WebAudio scheduler actually do the scheduling.
 */

var ScheduledMetronome =
/*#__PURE__*/
function () {
  function ScheduledMetronome(tempo, ticks) {
    _classCallCheck(this, ScheduledMetronome);

    this.tempo = tempo;
    this.audioCtx = _audio_context__WEBPACK_IMPORTED_MODULE_0__["default"].getAudioContext();
    this.tick = null;
    this.tickVolume = null;
    this.soundHz = 1000;
    this.scheduledTicks = ticks;
    this.playingState = true;
    this.initAudio();
    this.setController();
  }

  _createClass(ScheduledMetronome, [{
    key: "reset",
    value: function reset(tempo, ticks) {
      this.tempo = tempo;
      this.ticks = ticks;
      this.tickVolume.gain.cancelScheduledValues(0);
      this.resume();
    }
  }, {
    key: "initAudio",
    value: function initAudio() {
      this.tick = this.audioCtx.createOscillator();
      this.tickVolume = this.audioCtx.createGain();
      this.tick.type = 'sine';
      this.tick.frequency.value = this.soundHz;
      this.tickVolume.gain.value = 0;
      this.tick.connect(this.tickVolume);
      this.tickVolume.connect(this.audioCtx.destination);
      this.tick.start(0); // No offset, start immediately.
    }
  }, {
    key: "click",
    value: function click(metronome) {
      var time = metronome.audioCtx.currentTime;
      metronome.clickAtTime(time);
    }
  }, {
    key: "start",
    value: function start() {
      var timeoutDuration = 60 / this.tempo;
      var now = this.audioCtx.currentTime; // Schedule all the clicks ahead.

      for (var i = 0; i < this.scheduledTicks; i++) {
        this.clickAtTime(now);
        var x = now;
        now += timeoutDuration;
      }
    }
  }, {
    key: "setController",
    value: function setController() {
      var _this = this;

      document.getElementById('metronome-controller').addEventListener('change', function (event) {
        if (event.target.checked) {
          _this.tickVolume.connect(_this.audioCtx.destination);
        } else {
          _this.tickVolume.disconnect(_this.audioCtx.destination);
        }
      });
    }
  }, {
    key: "clickAtTime",
    value: function clickAtTime(time) {
      // Silence the click.
      this.tickVolume.gain.cancelScheduledValues(time);
      this.tickVolume.gain.setValueAtTime(0, time); // Audible click sound.

      this.tickVolume.gain.linearRampToValueAtTime(1, time + .001);
      this.tickVolume.gain.linearRampToValueAtTime(0, time + .001 + .01);
    }
  }, {
    key: "pause",
    value: function pause() {
      this.audioCtx.suspend();
    }
  }, {
    key: "resume",
    value: function resume() {
      this.audioCtx.resume();
    }
  }]);

  return ScheduledMetronome;
}();



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9hdWRpb19jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3dlYi9hc3NldHMvanMvbWV0cm9ub21lLmpzIl0sIm5hbWVzIjpbImdldEF1ZGlvQ29udGV4dCIsIndpbmRvdyIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsIm1vekF1ZGlvQ29udGV4dCIsIm9BdWRpb0NvbnRleHQiLCJtc0F1ZGlvQ29udGV4dCIsIlNjaGVkdWxlZE1ldHJvbm9tZSIsInRlbXBvIiwidGlja3MiLCJhdWRpb0N0eCIsInRpY2siLCJ0aWNrVm9sdW1lIiwic291bmRIeiIsInNjaGVkdWxlZFRpY2tzIiwicGxheWluZ1N0YXRlIiwiaW5pdEF1ZGlvIiwic2V0Q29udHJvbGxlciIsImdhaW4iLCJjYW5jZWxTY2hlZHVsZWRWYWx1ZXMiLCJyZXN1bWUiLCJjcmVhdGVPc2NpbGxhdG9yIiwiY3JlYXRlR2FpbiIsInR5cGUiLCJmcmVxdWVuY3kiLCJ2YWx1ZSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsInN0YXJ0IiwibWV0cm9ub21lIiwidGltZSIsImN1cnJlbnRUaW1lIiwiY2xpY2tBdFRpbWUiLCJ0aW1lb3V0RHVyYXRpb24iLCJub3ciLCJpIiwieCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJjaGVja2VkIiwiZGlzY29ubmVjdCIsInNldFZhbHVlQXRUaW1lIiwibGluZWFyUmFtcFRvVmFsdWVBdFRpbWUiLCJzdXNwZW5kIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFD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aGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93ZWIvYXNzZXRzL2pzL21ldHJvbm9tZS5qc1wiKTtcbiIsImZ1bmN0aW9uIGdldEF1ZGlvQ29udGV4dCgpIHtcblx0d2luZG93LkF1ZGlvQ29udGV4dCA9ICh3aW5kb3cuQXVkaW9Db250ZXh0IHx8XG5cdHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQgfHxcblx0d2luZG93Lm1vekF1ZGlvQ29udGV4dCB8fFxuXHR3aW5kb3cub0F1ZGlvQ29udGV4dCB8fFxuXHR3aW5kb3cubXNBdWRpb0NvbnRleHQpOyAvLyBTYWZhcmkgYW5kIG9sZCB2ZXJzaW9ucyBvZiBDaHJvbWVcblx0cmV0dXJuIG5ldyBBdWRpb0NvbnRleHQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRnZXRBdWRpb0NvbnRleHQ6IGdldEF1ZGlvQ29udGV4dFxufVxuIiwiaW1wb3J0IEF1ZGlvQ29udGV4dCBmcm9tICcuL2F1ZGlvX2NvbnRleHQnXG5cbi8qXG4gKiBTY2hlZHVsaW5nIGlzIGRvbmUgYnkgcHJlc2NoZWR1bGluZyBhbGwgdGhlIGF1ZGlvIGV2ZW50cywgYW5kXG4gKiBsZXR0aW5nIHRoZSBXZWJBdWRpbyBzY2hlZHVsZXIgYWN0dWFsbHkgZG8gdGhlIHNjaGVkdWxpbmcuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjaGVkdWxlZE1ldHJvbm9tZSB7XG5cdGNvbnN0cnVjdG9yKHRlbXBvLCB0aWNrcykge1xuXHRcdHRoaXMudGVtcG8gPSB0ZW1wbztcblx0XHR0aGlzLmF1ZGlvQ3R4ID0gQXVkaW9Db250ZXh0LmdldEF1ZGlvQ29udGV4dCgpO1xuXHRcdHRoaXMudGljayA9IG51bGw7XG5cdFx0dGhpcy50aWNrVm9sdW1lID0gbnVsbDtcblx0XHR0aGlzLnNvdW5kSHogPSAxMDAwO1xuXHRcdHRoaXMuc2NoZWR1bGVkVGlja3MgPSB0aWNrcztcblx0XHR0aGlzLnBsYXlpbmdTdGF0ZSA9IHRydWU7XG5cdFx0dGhpcy5pbml0QXVkaW8oKTtcblx0XHR0aGlzLnNldENvbnRyb2xsZXIoKTtcblx0fVxuXG5cdHJlc2V0KHRlbXBvLCB0aWNrcyl7XG5cdFx0dGhpcy50ZW1wbyA9IHRlbXBvO1xuXHRcdHRoaXMudGlja3MgPSB0aWNrcztcblx0XHR0aGlzLnRpY2tWb2x1bWUuZ2Fpbi5jYW5jZWxTY2hlZHVsZWRWYWx1ZXMoMCk7XG5cdFx0dGhpcy5yZXN1bWUoKTtcblx0fVxuXG5cdGluaXRBdWRpbygpIHtcblx0XHR0aGlzLnRpY2sgPSB0aGlzLmF1ZGlvQ3R4LmNyZWF0ZU9zY2lsbGF0b3IoKTtcblx0XHR0aGlzLnRpY2tWb2x1bWUgPSB0aGlzLmF1ZGlvQ3R4LmNyZWF0ZUdhaW4oKTtcblxuXHRcdHRoaXMudGljay50eXBlID0gJ3NpbmUnO1xuXHRcdHRoaXMudGljay5mcmVxdWVuY3kudmFsdWUgPSB0aGlzLnNvdW5kSHo7XG5cdFx0dGhpcy50aWNrVm9sdW1lLmdhaW4udmFsdWUgPSAwO1xuXG5cdFx0dGhpcy50aWNrLmNvbm5lY3QodGhpcy50aWNrVm9sdW1lKTtcblx0XHR0aGlzLnRpY2tWb2x1bWUuY29ubmVjdCh0aGlzLmF1ZGlvQ3R4LmRlc3RpbmF0aW9uKTtcblx0XHR0aGlzLnRpY2suc3RhcnQoMCk7ICAvLyBObyBvZmZzZXQsIHN0YXJ0IGltbWVkaWF0ZWx5LlxuXHR9XG5cblx0Y2xpY2sobWV0cm9ub21lKSB7XG5cdFx0Y29uc3QgdGltZSA9IG1ldHJvbm9tZS5hdWRpb0N0eC5jdXJyZW50VGltZTtcblx0XHRtZXRyb25vbWUuY2xpY2tBdFRpbWUodGltZSk7XG5cdH1cblxuXHRzdGFydCgpIHtcblx0XHRjb25zdCB0aW1lb3V0RHVyYXRpb24gPSAoNjAgLyB0aGlzLnRlbXBvKTtcblxuXHRcdGxldCBub3cgPSB0aGlzLmF1ZGlvQ3R4LmN1cnJlbnRUaW1lO1xuXG5cdFx0Ly8gU2NoZWR1bGUgYWxsIHRoZSBjbGlja3MgYWhlYWQuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNjaGVkdWxlZFRpY2tzOyBpKyspIHtcblx0XHRcdHRoaXMuY2xpY2tBdFRpbWUobm93KTtcblx0XHRcdGNvbnN0IHggPSBub3c7XG5cdFx0XHRub3cgKz0gdGltZW91dER1cmF0aW9uO1xuXHRcdH1cblx0fVxuXG5cdHNldENvbnRyb2xsZXIoKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21ldHJvbm9tZS1jb250cm9sbGVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcblx0XHRcdFx0dGhpcy50aWNrVm9sdW1lLmNvbm5lY3QodGhpcy5hdWRpb0N0eC5kZXN0aW5hdGlvbik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnRpY2tWb2x1bWUuZGlzY29ubmVjdCh0aGlzLmF1ZGlvQ3R4LmRlc3RpbmF0aW9uKTtcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0Y2xpY2tBdFRpbWUodGltZSkge1xuXHRcdC8vIFNpbGVuY2UgdGhlIGNsaWNrLlxuXHRcdHRoaXMudGlja1ZvbHVtZS5nYWluLmNhbmNlbFNjaGVkdWxlZFZhbHVlcyh0aW1lKTtcblx0XHR0aGlzLnRpY2tWb2x1bWUuZ2Fpbi5zZXRWYWx1ZUF0VGltZSgwLCB0aW1lKTtcblxuXHRcdC8vIEF1ZGlibGUgY2xpY2sgc291bmQuXG5cdFx0dGhpcy50aWNrVm9sdW1lLmdhaW4ubGluZWFyUmFtcFRvVmFsdWVBdFRpbWUoMSwgdGltZSArIC4wMDEpO1xuXHRcdHRoaXMudGlja1ZvbHVtZS5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKDAsIHRpbWUgKyAuMDAxICsgLjAxKTtcblx0fVxuXG5cdHBhdXNlKCkge1xuXHRcdHRoaXMuYXVkaW9DdHguc3VzcGVuZCgpO1xuXHR9XG5cblx0cmVzdW1lKCkge1xuXHRcdHRoaXMuYXVkaW9DdHgucmVzdW1lKCk7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=