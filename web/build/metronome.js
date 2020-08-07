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

/***/ "./web/assets/js/metronome.js":
/*!************************************!*\
  !*** ./web/assets/js/metronome.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScheduledMetronome; });
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
    this.audioCtx = new AudioContext();
    this.tick = null;
    this.tickVolume = null;
    this.soundHz = 1000;
    this.scheduledTicks = ticks;
    this.playingState = true;
    this.initAudio();
    this.setController();
  }

  _createClass(ScheduledMetronome, [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9tZXRyb25vbWUuanMiXSwibmFtZXMiOlsiU2NoZWR1bGVkTWV0cm9ub21lIiwidGVtcG8iLCJ0aWNrcyIsImF1ZGlvQ3R4IiwiQXVkaW9Db250ZXh0IiwidGljayIsInRpY2tWb2x1bWUiLCJzb3VuZEh6Iiwic2NoZWR1bGVkVGlja3MiLCJwbGF5aW5nU3RhdGUiLCJpbml0QXVkaW8iLCJzZXRDb250cm9sbGVyIiwiY3JlYXRlT3NjaWxsYXRvciIsImNyZWF0ZUdhaW4iLCJ0eXBlIiwiZnJlcXVlbmN5IiwidmFsdWUiLCJnYWluIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwic3RhcnQiLCJtZXRyb25vbWUiLCJ0aW1lIiwiY3VycmVudFRpbWUiLCJjbGlja0F0VGltZSIsInRpbWVvdXREdXJhdGlvbiIsIm5vdyIsImkiLCJ4IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsImNoZWNrZWQiLCJkaXNjb25uZWN0IiwiY2FuY2VsU2NoZWR1bGVkVmFsdWVzIiwic2V0VmFsdWVBdFRpbWUiLCJsaW5lYXJSYW1wVG9WYWx1ZUF0VGltZSIsInN1c3BlbmQiLCJyZXN1bWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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dkMsRUFIaUIsQ0FLakI7O0FBQ0EsV0FBS2hCLFVBQUwsQ0FBZ0JXLElBQWhCLENBQXFCcUIsdUJBQXJCLENBQTZDLENBQTdDLEVBQWdEaEIsSUFBSSxHQUFHLElBQXZEO0FBQ0EsV0FBS2hCLFVBQUwsQ0FBZ0JXLElBQWhCLENBQXFCcUIsdUJBQXJCLENBQTZDLENBQTdDLEVBQWdEaEIsSUFBSSxHQUFHLElBQVAsR0FBYyxHQUE5RDtBQUNBOzs7NEJBRU87QUFDUCxXQUFLbkIsUUFBTCxDQUFjb0MsT0FBZDtBQUNBOzs7NkJBRVE7QUFDUixXQUFLcEMsUUFBTCxDQUFjcUMsTUFBZDtBQUNBIiwiZmlsZSI6Im1ldHJvbm9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3dlYi9hc3NldHMvanMvbWV0cm9ub21lLmpzXCIpO1xuIiwiLypcbiAqIFNjaGVkdWxpbmcgaXMgZG9uZSBieSBwcmVzY2hlZHVsaW5nIGFsbCB0aGUgYXVkaW8gZXZlbnRzLCBhbmRcbiAqIGxldHRpbmcgdGhlIFdlYkF1ZGlvIHNjaGVkdWxlciBhY3R1YWxseSBkbyB0aGUgc2NoZWR1bGluZy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NoZWR1bGVkTWV0cm9ub21lIHtcblx0Y29uc3RydWN0b3IodGVtcG8sIHRpY2tzKSB7XG5cdFx0dGhpcy50ZW1wbyA9IHRlbXBvO1xuXHRcdHRoaXMuYXVkaW9DdHggPSBuZXcgQXVkaW9Db250ZXh0KCk7XG5cdFx0dGhpcy50aWNrID0gbnVsbDtcblx0XHR0aGlzLnRpY2tWb2x1bWUgPSBudWxsO1xuXHRcdHRoaXMuc291bmRIeiA9IDEwMDA7XG5cdFx0dGhpcy5zY2hlZHVsZWRUaWNrcyA9IHRpY2tzO1xuXHRcdHRoaXMucGxheWluZ1N0YXRlID0gdHJ1ZTtcblx0XHR0aGlzLmluaXRBdWRpbygpO1xuXHRcdHRoaXMuc2V0Q29udHJvbGxlcigpO1xuXHR9XG5cblx0aW5pdEF1ZGlvKCkge1xuXHRcdHRoaXMudGljayA9IHRoaXMuYXVkaW9DdHguY3JlYXRlT3NjaWxsYXRvcigpO1xuXHRcdHRoaXMudGlja1ZvbHVtZSA9IHRoaXMuYXVkaW9DdHguY3JlYXRlR2FpbigpO1xuXG5cdFx0dGhpcy50aWNrLnR5cGUgPSAnc2luZSc7XG5cdFx0dGhpcy50aWNrLmZyZXF1ZW5jeS52YWx1ZSA9IHRoaXMuc291bmRIejtcblx0XHR0aGlzLnRpY2tWb2x1bWUuZ2Fpbi52YWx1ZSA9IDA7XG5cblx0XHR0aGlzLnRpY2suY29ubmVjdCh0aGlzLnRpY2tWb2x1bWUpO1xuXHRcdHRoaXMudGlja1ZvbHVtZS5jb25uZWN0KHRoaXMuYXVkaW9DdHguZGVzdGluYXRpb24pO1xuXHRcdHRoaXMudGljay5zdGFydCgwKTsgIC8vIE5vIG9mZnNldCwgc3RhcnQgaW1tZWRpYXRlbHkuXG5cdH1cblxuXHRjbGljayhtZXRyb25vbWUpIHtcblx0XHRjb25zdCB0aW1lID0gbWV0cm9ub21lLmF1ZGlvQ3R4LmN1cnJlbnRUaW1lO1xuXHRcdG1ldHJvbm9tZS5jbGlja0F0VGltZSh0aW1lKTtcblx0fVxuXG5cdHN0YXJ0KCkge1xuXHRcdGNvbnN0IHRpbWVvdXREdXJhdGlvbiA9ICg2MCAvIHRoaXMudGVtcG8pO1xuXG5cdFx0bGV0IG5vdyA9IHRoaXMuYXVkaW9DdHguY3VycmVudFRpbWU7XG5cblx0XHQvLyBTY2hlZHVsZSBhbGwgdGhlIGNsaWNrcyBhaGVhZC5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2NoZWR1bGVkVGlja3M7IGkrKykge1xuXHRcdFx0dGhpcy5jbGlja0F0VGltZShub3cpO1xuXHRcdFx0Y29uc3QgeCA9IG5vdztcblx0XHRcdG5vdyArPSB0aW1lb3V0RHVyYXRpb247XG5cdFx0fVxuXHR9XG5cblx0c2V0Q29udHJvbGxlcigpIHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWV0cm9ub21lLWNvbnRyb2xsZXInKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcblx0XHRcdGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuXHRcdFx0XHR0aGlzLnRpY2tWb2x1bWUuY29ubmVjdCh0aGlzLmF1ZGlvQ3R4LmRlc3RpbmF0aW9uKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMudGlja1ZvbHVtZS5kaXNjb25uZWN0KHRoaXMuYXVkaW9DdHguZGVzdGluYXRpb24pO1xuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXHRjbGlja0F0VGltZSh0aW1lKSB7XG5cdFx0Ly8gU2lsZW5jZSB0aGUgY2xpY2suXG5cdFx0dGhpcy50aWNrVm9sdW1lLmdhaW4uY2FuY2VsU2NoZWR1bGVkVmFsdWVzKHRpbWUpO1xuXHRcdHRoaXMudGlja1ZvbHVtZS5nYWluLnNldFZhbHVlQXRUaW1lKDAsIHRpbWUpO1xuXG5cdFx0Ly8gQXVkaWJsZSBjbGljayBzb3VuZC5cblx0XHR0aGlzLnRpY2tWb2x1bWUuZ2Fpbi5saW5lYXJSYW1wVG9WYWx1ZUF0VGltZSgxLCB0aW1lICsgLjAwMSk7XG5cdFx0dGhpcy50aWNrVm9sdW1lLmdhaW4ubGluZWFyUmFtcFRvVmFsdWVBdFRpbWUoMCwgdGltZSArIC4wMDEgKyAuMDEpO1xuXHR9XG5cblx0cGF1c2UoKSB7XG5cdFx0dGhpcy5hdWRpb0N0eC5zdXNwZW5kKCk7XG5cdH1cblxuXHRyZXN1bWUoKSB7XG5cdFx0dGhpcy5hdWRpb0N0eC5yZXN1bWUoKTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==