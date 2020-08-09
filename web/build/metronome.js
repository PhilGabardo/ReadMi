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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9hdWRpb19jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3dlYi9hc3NldHMvanMvbWV0cm9ub21lLmpzIl0sIm5hbWVzIjpbImdldEF1ZGlvQ29udGV4dCIsIndpbmRvdyIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsIm1vekF1ZGlvQ29udGV4dCIsIm9BdWRpb0NvbnRleHQiLCJtc0F1ZGlvQ29udGV4dCIsIlNjaGVkdWxlZE1ldHJvbm9tZSIsInRlbXBvIiwidGlja3MiLCJhdWRpb0N0eCIsInRpY2siLCJ0aWNrVm9sdW1lIiwic291bmRIeiIsInNjaGVkdWxlZFRpY2tzIiwicGxheWluZ1N0YXRlIiwiaW5pdEF1ZGlvIiwic2V0Q29udHJvbGxlciIsImNyZWF0ZU9zY2lsbGF0b3IiLCJjcmVhdGVHYWluIiwidHlwZSIsImZyZXF1ZW5jeSIsInZhbHVlIiwiZ2FpbiIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsInN0YXJ0IiwibWV0cm9ub21lIiwidGltZSIsImN1cnJlbnRUaW1lIiwiY2xpY2tBdFRpbWUiLCJ0aW1lb3V0RHVyYXRpb24iLCJub3ciLCJpIiwieCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJjaGVja2VkIiwiZGlzY29ubmVjdCIsImNhbmNlbFNjaGVkdWxlZFZhbHVlcyIsInNldFZhbHVlQXRUaW1lIiwibGluZWFyUmFtcFRvVmFsdWVBdFRpbWUiLCJzdXNwZW5kIiwicmVzdW1lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFD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LEVBQWdEQyxnQkFBaEQsQ0FBaUUsUUFBakUsRUFBMkUsVUFBQ0MsS0FBRCxFQUFXO0FBQ3JGLFlBQUlBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxPQUFqQixFQUEwQjtBQUN6QixlQUFJLENBQUM1QixVQUFMLENBQWdCWSxPQUFoQixDQUF3QixLQUFJLENBQUNkLFFBQUwsQ0FBY2UsV0FBdEM7QUFDQSxTQUZELE1BRU87QUFDTixlQUFJLENBQUNiLFVBQUwsQ0FBZ0I2QixVQUFoQixDQUEyQixLQUFJLENBQUMvQixRQUFMLENBQWNlLFdBQXpDO0FBQ0E7QUFDRCxPQU5EO0FBT0E7OztnQ0FFV0csSSxFQUFNO0FBQ2pCO0FBQ0EsV0FBS2hCLFVBQUwsQ0FBZ0JXLElBQWhCLENBQXFCbUIscUJBQXJCLENBQTJDZCxJQUEzQztBQUNBLFdBQUtoQixVQUFMLENBQWdCVyxJQUFoQixDQUFxQm9CLGNBQXJCLENBQW9DLENBQXBDLEVBQXVDZixJQUF2QyxFQUhpQixDQUtqQjs7QUFDQSxXQUFLaEIsVUFBTCxDQUFnQlcsSUFBaEIsQ0FBcUJxQix1QkFBckIsQ0FBNkMsQ0FBN0MsRUFBZ0RoQixJQUFJLEdBQUcsSUFBdkQ7QUFDQSxXQUFLaEIsVUFBTCxDQUFnQlcsSUFBaEIsQ0FBcUJxQix1QkFBckIsQ0FBNkMsQ0FBN0MsRUFBZ0RoQixJQUFJLEdBQUcsSUFBUCxHQUFjLEdBQTlEO0FBQ0E7Ozs0QkFFTztBQUNQLFdBQUtsQixRQUFMLENBQWNtQyxPQUFkO0FBQ0E7Ozs2QkFFUTtBQUNSLFdBQUtuQyxRQUFMLENBQWNvQyxNQUFkO0FBQ0EiLCJmaWxlIjoibWV0cm9ub21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vd2ViL2Fzc2V0cy9qcy9tZXRyb25vbWUuanNcIik7XG4iLCJmdW5jdGlvbiBnZXRBdWRpb0NvbnRleHQoKSB7XG5cdHdpbmRvdy5BdWRpb0NvbnRleHQgPSAod2luZG93LkF1ZGlvQ29udGV4dCB8fFxuXHR3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0IHx8XG5cdHdpbmRvdy5tb3pBdWRpb0NvbnRleHQgfHxcblx0d2luZG93Lm9BdWRpb0NvbnRleHQgfHxcblx0d2luZG93Lm1zQXVkaW9Db250ZXh0KTsgLy8gU2FmYXJpIGFuZCBvbGQgdmVyc2lvbnMgb2YgQ2hyb21lXG5cdHJldHVybiBuZXcgQXVkaW9Db250ZXh0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Z2V0QXVkaW9Db250ZXh0OiBnZXRBdWRpb0NvbnRleHRcbn1cbiIsImltcG9ydCBBdWRpb0NvbnRleHQgZnJvbSAnLi9hdWRpb19jb250ZXh0J1xuXG4vKlxuICogU2NoZWR1bGluZyBpcyBkb25lIGJ5IHByZXNjaGVkdWxpbmcgYWxsIHRoZSBhdWRpbyBldmVudHMsIGFuZFxuICogbGV0dGluZyB0aGUgV2ViQXVkaW8gc2NoZWR1bGVyIGFjdHVhbGx5IGRvIHRoZSBzY2hlZHVsaW5nLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2hlZHVsZWRNZXRyb25vbWUge1xuXHRjb25zdHJ1Y3Rvcih0ZW1wbywgdGlja3MpIHtcblx0XHR0aGlzLnRlbXBvID0gdGVtcG87XG5cdFx0dGhpcy5hdWRpb0N0eCA9IEF1ZGlvQ29udGV4dC5nZXRBdWRpb0NvbnRleHQoKTtcblx0XHR0aGlzLnRpY2sgPSBudWxsO1xuXHRcdHRoaXMudGlja1ZvbHVtZSA9IG51bGw7XG5cdFx0dGhpcy5zb3VuZEh6ID0gMTAwMDtcblx0XHR0aGlzLnNjaGVkdWxlZFRpY2tzID0gdGlja3M7XG5cdFx0dGhpcy5wbGF5aW5nU3RhdGUgPSB0cnVlO1xuXHRcdHRoaXMuaW5pdEF1ZGlvKCk7XG5cdFx0dGhpcy5zZXRDb250cm9sbGVyKCk7XG5cdH1cblxuXHRpbml0QXVkaW8oKSB7XG5cdFx0dGhpcy50aWNrID0gdGhpcy5hdWRpb0N0eC5jcmVhdGVPc2NpbGxhdG9yKCk7XG5cdFx0dGhpcy50aWNrVm9sdW1lID0gdGhpcy5hdWRpb0N0eC5jcmVhdGVHYWluKCk7XG5cblx0XHR0aGlzLnRpY2sudHlwZSA9ICdzaW5lJztcblx0XHR0aGlzLnRpY2suZnJlcXVlbmN5LnZhbHVlID0gdGhpcy5zb3VuZEh6O1xuXHRcdHRoaXMudGlja1ZvbHVtZS5nYWluLnZhbHVlID0gMDtcblxuXHRcdHRoaXMudGljay5jb25uZWN0KHRoaXMudGlja1ZvbHVtZSk7XG5cdFx0dGhpcy50aWNrVm9sdW1lLmNvbm5lY3QodGhpcy5hdWRpb0N0eC5kZXN0aW5hdGlvbik7XG5cdFx0dGhpcy50aWNrLnN0YXJ0KDApOyAgLy8gTm8gb2Zmc2V0LCBzdGFydCBpbW1lZGlhdGVseS5cblx0fVxuXG5cdGNsaWNrKG1ldHJvbm9tZSkge1xuXHRcdGNvbnN0IHRpbWUgPSBtZXRyb25vbWUuYXVkaW9DdHguY3VycmVudFRpbWU7XG5cdFx0bWV0cm9ub21lLmNsaWNrQXRUaW1lKHRpbWUpO1xuXHR9XG5cblx0c3RhcnQoKSB7XG5cdFx0Y29uc3QgdGltZW91dER1cmF0aW9uID0gKDYwIC8gdGhpcy50ZW1wbyk7XG5cblx0XHRsZXQgbm93ID0gdGhpcy5hdWRpb0N0eC5jdXJyZW50VGltZTtcblxuXHRcdC8vIFNjaGVkdWxlIGFsbCB0aGUgY2xpY2tzIGFoZWFkLlxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zY2hlZHVsZWRUaWNrczsgaSsrKSB7XG5cdFx0XHR0aGlzLmNsaWNrQXRUaW1lKG5vdyk7XG5cdFx0XHRjb25zdCB4ID0gbm93O1xuXHRcdFx0bm93ICs9IHRpbWVvdXREdXJhdGlvbjtcblx0XHR9XG5cdH1cblxuXHRzZXRDb250cm9sbGVyKCkge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXRyb25vbWUtY29udHJvbGxlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuXHRcdFx0aWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XG5cdFx0XHRcdHRoaXMudGlja1ZvbHVtZS5jb25uZWN0KHRoaXMuYXVkaW9DdHguZGVzdGluYXRpb24pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy50aWNrVm9sdW1lLmRpc2Nvbm5lY3QodGhpcy5hdWRpb0N0eC5kZXN0aW5hdGlvbik7XG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXG5cdGNsaWNrQXRUaW1lKHRpbWUpIHtcblx0XHQvLyBTaWxlbmNlIHRoZSBjbGljay5cblx0XHR0aGlzLnRpY2tWb2x1bWUuZ2Fpbi5jYW5jZWxTY2hlZHVsZWRWYWx1ZXModGltZSk7XG5cdFx0dGhpcy50aWNrVm9sdW1lLmdhaW4uc2V0VmFsdWVBdFRpbWUoMCwgdGltZSk7XG5cblx0XHQvLyBBdWRpYmxlIGNsaWNrIHNvdW5kLlxuXHRcdHRoaXMudGlja1ZvbHVtZS5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKDEsIHRpbWUgKyAuMDAxKTtcblx0XHR0aGlzLnRpY2tWb2x1bWUuZ2Fpbi5saW5lYXJSYW1wVG9WYWx1ZUF0VGltZSgwLCB0aW1lICsgLjAwMSArIC4wMSk7XG5cdH1cblxuXHRwYXVzZSgpIHtcblx0XHR0aGlzLmF1ZGlvQ3R4LnN1c3BlbmQoKTtcblx0fVxuXG5cdHJlc3VtZSgpIHtcblx0XHR0aGlzLmF1ZGlvQ3R4LnJlc3VtZSgpO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9