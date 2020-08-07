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

/***/ "./web/assets/js/audio_stream_controller.js":
/*!**************************************************!*\
  !*** ./web/assets/js/audio_stream_controller.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AudioStreamController; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AudioStreamController =
/*#__PURE__*/
function () {
  function AudioStreamController(audioContext) {
    _classCallCheck(this, AudioStreamController);

    this.audioContext = audioContext;
    this.sixteenthNoteSamples = [];
    this.sixteenthNoteSampleBufferSize = 4096;
    this.userMediaPromise = navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });
    this.analyzer = null;
    this.buffer = null;
  }

  _createClass(AudioStreamController, [{
    key: "startStream",
    value: function startStream() {
      var that = this;
      this.userMediaPromise.then(function (stream) {
        var source = that.audioContext.createMediaStreamSource(stream);
        that.analyser = that.audioContext.createAnalyser();
        that.analyser.fftSize = 4096;
        that.buffer = new Uint8Array(that.analyser.fftSize);
        source.connect(that.analyser);
      });
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
      return this.audioContext.sampleRate;
    }
  }, {
    key: "getSamples",
    value: function getSamples() {
      console.log(this.sixteenthNoteSamples);
      return this.sixteenthNoteSamples;
    }
  }, {
    key: "getBufferSize",
    value: function getBufferSize() {
      return this.sixteenthNoteSampleBufferSize;
    }
  }]);

  return AudioStreamController;
}();



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9hdWRpb19zdHJlYW1fY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJBdWRpb1N0cmVhbUNvbnRyb2xsZXIiLCJhdWRpb0NvbnRleHQiLCJzaXh0ZWVudGhOb3RlU2FtcGxlcyIsInNpeHRlZW50aE5vdGVTYW1wbGVCdWZmZXJTaXplIiwidXNlck1lZGlhUHJvbWlzZSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwidmlkZW8iLCJhbmFseXplciIsImJ1ZmZlciIsInRoYXQiLCJ0aGVuIiwic3RyZWFtIiwic291cmNlIiwiY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UiLCJhbmFseXNlciIsImNyZWF0ZUFuYWx5c2VyIiwiZmZ0U2l6ZSIsIlVpbnQ4QXJyYXkiLCJjb25uZWN0IiwiZ2V0Qnl0ZVRpbWVEb21haW5EYXRhIiwic2FtcGxlUmF0ZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2xGcUJBLHFCOzs7QUFDcEIsaUNBQVlDLFlBQVosRUFBMEI7QUFBQTs7QUFDekIsU0FBS0EsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLQyxvQkFBTCxHQUE0QixFQUE1QjtBQUNBLFNBQUtDLDZCQUFMLEdBQXNDLElBQXRDO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBeUJDLFNBQVMsQ0FBQ0MsWUFBVixDQUF1QkMsWUFBdkIsQ0FBb0M7QUFBRUMsV0FBSyxFQUFFLElBQVQ7QUFBZUMsV0FBSyxFQUFFO0FBQXRCLEtBQXBDLENBQXpCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixJQUFoQjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxJQUFkO0FBQ0E7Ozs7a0NBRWE7QUFDYixVQUFJQyxJQUFJLEdBQUksSUFBWjtBQUNBLFdBQUtSLGdCQUFMLENBQXNCUyxJQUF0QixDQUNDLFVBQVNDLE1BQVQsRUFBaUI7QUFDaEIsWUFBSUMsTUFBTSxHQUFHSCxJQUFJLENBQUNYLFlBQUwsQ0FBa0JlLHVCQUFsQixDQUEwQ0YsTUFBMUMsQ0FBYjtBQUNBRixZQUFJLENBQUNLLFFBQUwsR0FBZ0JMLElBQUksQ0FBQ1gsWUFBTCxDQUFrQmlCLGNBQWxCLEVBQWhCO0FBQ0FOLFlBQUksQ0FBQ0ssUUFBTCxDQUFjRSxPQUFkLEdBQXdCLElBQXhCO0FBQ0FQLFlBQUksQ0FBQ0QsTUFBTCxHQUFjLElBQUlTLFVBQUosQ0FBZVIsSUFBSSxDQUFDSyxRQUFMLENBQWNFLE9BQTdCLENBQWQ7QUFDQUosY0FBTSxDQUFDTSxPQUFQLENBQWVULElBQUksQ0FBQ0ssUUFBcEI7QUFDQSxPQVBGO0FBU0E7Ozs0Q0FFdUI7QUFDdkIsV0FBS0EsUUFBTCxDQUFjSyxxQkFBZCxDQUFvQyxLQUFLWCxNQUF6QztBQUNBLGFBQU8sS0FBS0EsTUFBWjtBQUNBOzs7b0NBRWU7QUFDZixhQUFPLEtBQUtWLFlBQUwsQ0FBa0JzQixVQUF6QjtBQUNBOzs7aUNBRVk7QUFDWkMsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBS3ZCLG9CQUFqQjtBQUNBLGFBQU8sS0FBS0Esb0JBQVo7QUFDQTs7O29DQUVlO0FBQ2YsYUFBTyxLQUFLQyw2QkFBWjtBQUNBIiwiZmlsZSI6ImF1ZGlvX3N0cmVhbV9jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vd2ViL2Fzc2V0cy9qcy9hdWRpb19zdHJlYW1fY29udHJvbGxlci5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvU3RyZWFtQ29udHJvbGxlciB7XG5cdGNvbnN0cnVjdG9yKGF1ZGlvQ29udGV4dCkge1xuXHRcdHRoaXMuYXVkaW9Db250ZXh0ID0gYXVkaW9Db250ZXh0O1xuXHRcdHRoaXMuc2l4dGVlbnRoTm90ZVNhbXBsZXMgPSBbXTtcblx0XHR0aGlzLnNpeHRlZW50aE5vdGVTYW1wbGVCdWZmZXJTaXplID0gIDQwOTY7XG5cdFx0dGhpcy51c2VyTWVkaWFQcm9taXNlID0gIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHsgYXVkaW86IHRydWUsIHZpZGVvOiBmYWxzZSB9KTtcblx0XHR0aGlzLmFuYWx5emVyID0gbnVsbDtcblx0XHR0aGlzLmJ1ZmZlciA9IG51bGw7XG5cdH1cblxuXHRzdGFydFN0cmVhbSgpIHtcblx0XHRsZXQgdGhhdCAgPSB0aGlzO1xuXHRcdHRoaXMudXNlck1lZGlhUHJvbWlzZS50aGVuKFxuXHRcdFx0ZnVuY3Rpb24oc3RyZWFtKSB7XG5cdFx0XHRcdGxldCBzb3VyY2UgPSB0aGF0LmF1ZGlvQ29udGV4dC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZShzdHJlYW0pO1xuXHRcdFx0XHR0aGF0LmFuYWx5c2VyID0gdGhhdC5hdWRpb0NvbnRleHQuY3JlYXRlQW5hbHlzZXIoKTtcblx0XHRcdFx0dGhhdC5hbmFseXNlci5mZnRTaXplID0gNDA5Njtcblx0XHRcdFx0dGhhdC5idWZmZXIgPSBuZXcgVWludDhBcnJheSh0aGF0LmFuYWx5c2VyLmZmdFNpemUpO1xuXHRcdFx0XHRzb3VyY2UuY29ubmVjdCh0aGF0LmFuYWx5c2VyKTtcblx0XHRcdH1cblx0XHQpXG5cdH1cblxuXHRnZXRCeXRlVGltZURvbWFpbkRhdGEoKSB7XG5cdFx0dGhpcy5hbmFseXNlci5nZXRCeXRlVGltZURvbWFpbkRhdGEodGhpcy5idWZmZXIpO1xuXHRcdHJldHVybiB0aGlzLmJ1ZmZlcjtcblx0fVxuXG5cdGdldFNhbXBsZVJhdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXVkaW9Db250ZXh0LnNhbXBsZVJhdGU7XG5cdH1cblxuXHRnZXRTYW1wbGVzKCkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuc2l4dGVlbnRoTm90ZVNhbXBsZXMpO1xuXHRcdHJldHVybiB0aGlzLnNpeHRlZW50aE5vdGVTYW1wbGVzO1xuXHR9XG5cblx0Z2V0QnVmZmVyU2l6ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5zaXh0ZWVudGhOb3RlU2FtcGxlQnVmZmVyU2l6ZTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==