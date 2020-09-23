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
/******/ 	return __webpack_require__(__webpack_require__.s = "./web/assets/js/audio_stream_controller.js");
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

/***/ "./web/assets/js/audio_stream_controller.js":
/*!**************************************************!*\
  !*** ./web/assets/js/audio_stream_controller.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AudioStreamController; });
/* harmony import */ var _audio_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio_context */ "./web/assets/js/audio_context.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var AudioStreamController =
/*#__PURE__*/
function () {
  function AudioStreamController(stream) {
    _classCallCheck(this, AudioStreamController);

    this.stream = stream;
    this.analyser = null;
    this.processor = null;
    this.buffer = null;
    this.audio_context = null;
    this.audio_context_initialization_time = null;
  }

  _createClass(AudioStreamController, [{
    key: "startStream",
    value: function startStream() {
      var that = this;
      var audioContext = _audio_context__WEBPACK_IMPORTED_MODULE_0__["default"].getAudioContext();
      this.audio_context_initialization_time = Date.now();
      this.audio_context = audioContext;
      var source = audioContext.createMediaStreamSource(this.stream);
      that.analyser = audioContext.createAnalyser();
      that.analyser.fftSize = 2048;
      that.buffer = new Uint8Array(that.analyser.fftSize);
      source.connect(that.analyser);
    }
  }, {
    key: "getPerformanceTime",
    value: function getPerformanceTime() {
      return this.audio_context.getOutputTimestamp().performanceTime;
    }
  }, {
    key: "getContextTime",
    value: function getContextTime() {
      return this.audio_context.getOutputTimestamp().contextTime * 1000;
    }
  }, {
    key: "getTimeSinceInit",
    value: function getTimeSinceInit() {
      return Date.now() - this.audio_context_initialization_time;
    }
  }, {
    key: "getByteTimeDomainData",
    value: function getByteTimeDomainData() {
      this.analyser.getByteTimeDomainData(this.buffer);
      return this.buffer;
    }
  }, {
    key: "getSampleRate",
    value: function getSampleRate() {
      return this.audio_context.sampleRate;
    }
  }]);

  return AudioStreamController;
}();



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9hdWRpb19jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3dlYi9hc3NldHMvanMvYXVkaW9fc3RyZWFtX2NvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiZ2V0QXVkaW9Db250ZXh0Iiwid2luZG93IiwiQXVkaW9Db250ZXh0Iiwid2Via2l0QXVkaW9Db250ZXh0IiwibW96QXVkaW9Db250ZXh0Iiwib0F1ZGlvQ29udGV4dCIsIm1zQXVkaW9Db250ZXh0IiwiQXVkaW9TdHJlYW1Db250cm9sbGVyIiwic3RyZWFtIiwiYW5hbHlzZXIiLCJwcm9jZXNzb3IiLCJidWZmZXIiLCJhdWRpb19jb250ZXh0IiwiYXVkaW9fY29udGV4dF9pbml0aWFsaXphdGlvbl90aW1lIiwidGhhdCIsImF1ZGlvQ29udGV4dCIsIkRhdGUiLCJub3ciLCJzb3VyY2UiLCJjcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSIsImNyZWF0ZUFuYWx5c2VyIiwiZmZ0U2l6ZSIsIlVpbnQ4QXJyYXkiLCJjb25uZWN0IiwiZ2V0T3V0cHV0VGltZXN0YW1wIiwicGVyZm9ybWFuY2VUaW1lIiwiY29udGV4dFRpbWUiLCJnZXRCeXRlVGltZURvbWFpbkRhdGEiLCJzYW1wbGVSYXRlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUEsU0FBU0EsZUFBVCxHQUEyQjtBQUMxQkMsUUFBTSxDQUFDQyxZQUFQLEdBQXVCRCxNQUFNLENBQUNDLFlBQVAsSUFDdkJELE1BQU0sQ0FBQ0Usa0JBRGdCLElBRXZCRixNQUFNLENBQUNHLGVBRmdCLElBR3ZCSCxNQUFNLENBQUNJLGFBSGdCLElBSXZCSixNQUFNLENBQUNLLGNBSlAsQ0FEMEIsQ0FLRjs7QUFDeEIsU0FBTyxJQUFJSixZQUFKLEVBQVA7QUFDQTs7QUFFYztBQUNkRixpQkFBZSxFQUFFQTtBQURILENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7O0lBRXFCTyxxQjs7O0FBQ3BCLGlDQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ25CLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLElBQWQ7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsU0FBS0MsaUNBQUwsR0FBeUMsSUFBekM7QUFDQTs7OztrQ0FFYTtBQUNiLFVBQUlDLElBQUksR0FBSSxJQUFaO0FBQ0EsVUFBSUMsWUFBWSxHQUFHYixzREFBWSxDQUFDRixlQUFiLEVBQW5CO0FBQ0EsV0FBS2EsaUNBQUwsR0FBeUNHLElBQUksQ0FBQ0MsR0FBTCxFQUF6QztBQUNBLFdBQUtMLGFBQUwsR0FBcUJHLFlBQXJCO0FBQ0EsVUFBSUcsTUFBTSxHQUFHSCxZQUFZLENBQUNJLHVCQUFiLENBQXFDLEtBQUtYLE1BQTFDLENBQWI7QUFDQU0sVUFBSSxDQUFDTCxRQUFMLEdBQWdCTSxZQUFZLENBQUNLLGNBQWIsRUFBaEI7QUFDQU4sVUFBSSxDQUFDTCxRQUFMLENBQWNZLE9BQWQsR0FBd0IsSUFBeEI7QUFDQVAsVUFBSSxDQUFDSCxNQUFMLEdBQWMsSUFBSVcsVUFBSixDQUFlUixJQUFJLENBQUNMLFFBQUwsQ0FBY1ksT0FBN0IsQ0FBZDtBQUNBSCxZQUFNLENBQUNLLE9BQVAsQ0FBZVQsSUFBSSxDQUFDTCxRQUFwQjtBQUNBOzs7eUNBRW9CO0FBQ3BCLGFBQU8sS0FBS0csYUFBTCxDQUFtQlksa0JBQW5CLEdBQXdDQyxlQUEvQztBQUNBOzs7cUNBRWdCO0FBQ2hCLGFBQU8sS0FBS2IsYUFBTCxDQUFtQlksa0JBQW5CLEdBQXdDRSxXQUF4QyxHQUFzRCxJQUE3RDtBQUNBOzs7dUNBRWtCO0FBQ2xCLGFBQU9WLElBQUksQ0FBQ0MsR0FBTCxLQUFhLEtBQUtKLGlDQUF6QjtBQUNBOzs7NENBR3VCO0FBQ3ZCLFdBQUtKLFFBQUwsQ0FBY2tCLHFCQUFkLENBQW9DLEtBQUtoQixNQUF6QztBQUNBLGFBQU8sS0FBS0EsTUFBWjtBQUNBOzs7b0NBRWU7QUFDZixhQUFPLEtBQUtDLGFBQUwsQ0FBbUJnQixVQUExQjtBQUNBIiwiZmlsZSI6ImF1ZGlvX3N0cmVhbV9jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vd2ViL2Fzc2V0cy9qcy9hdWRpb19zdHJlYW1fY29udHJvbGxlci5qc1wiKTtcbiIsImZ1bmN0aW9uIGdldEF1ZGlvQ29udGV4dCgpIHtcblx0d2luZG93LkF1ZGlvQ29udGV4dCA9ICh3aW5kb3cuQXVkaW9Db250ZXh0IHx8XG5cdHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQgfHxcblx0d2luZG93Lm1vekF1ZGlvQ29udGV4dCB8fFxuXHR3aW5kb3cub0F1ZGlvQ29udGV4dCB8fFxuXHR3aW5kb3cubXNBdWRpb0NvbnRleHQpOyAvLyBTYWZhcmkgYW5kIG9sZCB2ZXJzaW9ucyBvZiBDaHJvbWVcblx0cmV0dXJuIG5ldyBBdWRpb0NvbnRleHQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRnZXRBdWRpb0NvbnRleHQ6IGdldEF1ZGlvQ29udGV4dFxufVxuIiwiaW1wb3J0IEF1ZGlvQ29udGV4dCBmcm9tICcuL2F1ZGlvX2NvbnRleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvU3RyZWFtQ29udHJvbGxlciB7XG5cdGNvbnN0cnVjdG9yKHN0cmVhbSkge1xuXHRcdHRoaXMuc3RyZWFtID0gc3RyZWFtO1xuXHRcdHRoaXMuYW5hbHlzZXIgPSBudWxsO1xuXHRcdHRoaXMucHJvY2Vzc29yID0gbnVsbDtcblx0XHR0aGlzLmJ1ZmZlciA9IG51bGw7XG5cdFx0dGhpcy5hdWRpb19jb250ZXh0ID0gbnVsbDtcblx0XHR0aGlzLmF1ZGlvX2NvbnRleHRfaW5pdGlhbGl6YXRpb25fdGltZSA9IG51bGw7XG5cdH1cblxuXHRzdGFydFN0cmVhbSgpIHtcblx0XHRsZXQgdGhhdCAgPSB0aGlzO1xuXHRcdGxldCBhdWRpb0NvbnRleHQgPSBBdWRpb0NvbnRleHQuZ2V0QXVkaW9Db250ZXh0KCk7XG5cdFx0dGhpcy5hdWRpb19jb250ZXh0X2luaXRpYWxpemF0aW9uX3RpbWUgPSBEYXRlLm5vdygpXG5cdFx0dGhpcy5hdWRpb19jb250ZXh0ID0gYXVkaW9Db250ZXh0O1xuXHRcdGxldCBzb3VyY2UgPSBhdWRpb0NvbnRleHQuY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UodGhpcy5zdHJlYW0pO1xuXHRcdHRoYXQuYW5hbHlzZXIgPSBhdWRpb0NvbnRleHQuY3JlYXRlQW5hbHlzZXIoKTtcblx0XHR0aGF0LmFuYWx5c2VyLmZmdFNpemUgPSAyMDQ4O1xuXHRcdHRoYXQuYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkodGhhdC5hbmFseXNlci5mZnRTaXplKTtcblx0XHRzb3VyY2UuY29ubmVjdCh0aGF0LmFuYWx5c2VyKTtcblx0fVxuXG5cdGdldFBlcmZvcm1hbmNlVGltZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5hdWRpb19jb250ZXh0LmdldE91dHB1dFRpbWVzdGFtcCgpLnBlcmZvcm1hbmNlVGltZTtcblx0fVxuXG5cdGdldENvbnRleHRUaW1lKCkge1xuXHRcdHJldHVybiB0aGlzLmF1ZGlvX2NvbnRleHQuZ2V0T3V0cHV0VGltZXN0YW1wKCkuY29udGV4dFRpbWUgKiAxMDAwO1xuXHR9XG5cblx0Z2V0VGltZVNpbmNlSW5pdCgpIHtcblx0XHRyZXR1cm4gRGF0ZS5ub3coKSAtIHRoaXMuYXVkaW9fY29udGV4dF9pbml0aWFsaXphdGlvbl90aW1lO1xuXHR9XG5cblxuXHRnZXRCeXRlVGltZURvbWFpbkRhdGEoKSB7XG5cdFx0dGhpcy5hbmFseXNlci5nZXRCeXRlVGltZURvbWFpbkRhdGEodGhpcy5idWZmZXIpO1xuXHRcdHJldHVybiB0aGlzLmJ1ZmZlcjtcblx0fVxuXG5cdGdldFNhbXBsZVJhdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXVkaW9fY29udGV4dC5zYW1wbGVSYXRlO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9