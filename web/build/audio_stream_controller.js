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
        var processor = that.audioContext.createScriptProcessor(4096, 1, 1);
        that.analyser = that.audioContext.createAnalyser();
        that.analyser.fftSize = 2048;
        that.buffer = new Uint8Array(that.analyser.fftSize);
        source.connect(processor);
        source.connect(that.analyser);
        processor.connect(that.audioContext.destination);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9hdWRpb19zdHJlYW1fY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJBdWRpb1N0cmVhbUNvbnRyb2xsZXIiLCJhdWRpb0NvbnRleHQiLCJzaXh0ZWVudGhOb3RlU2FtcGxlcyIsInNpeHRlZW50aE5vdGVTYW1wbGVCdWZmZXJTaXplIiwidXNlck1lZGlhUHJvbWlzZSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwidmlkZW8iLCJhbmFseXplciIsImJ1ZmZlciIsInRoYXQiLCJ0aGVuIiwic3RyZWFtIiwic291cmNlIiwiY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UiLCJwcm9jZXNzb3IiLCJjcmVhdGVTY3JpcHRQcm9jZXNzb3IiLCJhbmFseXNlciIsImNyZWF0ZUFuYWx5c2VyIiwiZmZ0U2l6ZSIsIlVpbnQ4QXJyYXkiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJnZXRCeXRlVGltZURvbWFpbkRhdGEiLCJzYW1wbGVSYXRlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNsRnFCQSxxQjs7O0FBQ3BCLGlDQUFZQyxZQUFaLEVBQTBCO0FBQUE7O0FBQ3pCLFNBQUtBLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0Msb0JBQUwsR0FBNEIsRUFBNUI7QUFDQSxTQUFLQyw2QkFBTCxHQUFzQyxJQUF0QztBQUNBLFNBQUtDLGdCQUFMLEdBQXlCQyxTQUFTLENBQUNDLFlBQVYsQ0FBdUJDLFlBQXZCLENBQW9DO0FBQUVDLFdBQUssRUFBRSxJQUFUO0FBQWVDLFdBQUssRUFBRTtBQUF0QixLQUFwQyxDQUF6QjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsSUFBZDtBQUNBOzs7O2tDQUVhO0FBQ2IsVUFBSUMsSUFBSSxHQUFJLElBQVo7QUFDQSxXQUFLUixnQkFBTCxDQUFzQlMsSUFBdEIsQ0FDQyxVQUFTQyxNQUFULEVBQWlCO0FBQ2hCLFlBQUlDLE1BQU0sR0FBR0gsSUFBSSxDQUFDWCxZQUFMLENBQWtCZSx1QkFBbEIsQ0FBMENGLE1BQTFDLENBQWI7QUFDQSxZQUFJRyxTQUFTLEdBQUdMLElBQUksQ0FBQ1gsWUFBTCxDQUFrQmlCLHFCQUFsQixDQUF3QyxJQUF4QyxFQUE4QyxDQUE5QyxFQUFpRCxDQUFqRCxDQUFoQjtBQUNBTixZQUFJLENBQUNPLFFBQUwsR0FBZ0JQLElBQUksQ0FBQ1gsWUFBTCxDQUFrQm1CLGNBQWxCLEVBQWhCO0FBQ0FSLFlBQUksQ0FBQ08sUUFBTCxDQUFjRSxPQUFkLEdBQXdCLElBQXhCO0FBQ0FULFlBQUksQ0FBQ0QsTUFBTCxHQUFjLElBQUlXLFVBQUosQ0FBZVYsSUFBSSxDQUFDTyxRQUFMLENBQWNFLE9BQTdCLENBQWQ7QUFFQU4sY0FBTSxDQUFDUSxPQUFQLENBQWVOLFNBQWY7QUFDQUYsY0FBTSxDQUFDUSxPQUFQLENBQWVYLElBQUksQ0FBQ08sUUFBcEI7QUFDQUYsaUJBQVMsQ0FBQ00sT0FBVixDQUFrQlgsSUFBSSxDQUFDWCxZQUFMLENBQWtCdUIsV0FBcEM7QUFDQSxPQVhGO0FBYUE7Ozs0Q0FFdUI7QUFDdkIsV0FBS0wsUUFBTCxDQUFjTSxxQkFBZCxDQUFvQyxLQUFLZCxNQUF6QztBQUNBLGFBQU8sS0FBS0EsTUFBWjtBQUNBOzs7b0NBRWU7QUFDZixhQUFPLEtBQUtWLFlBQUwsQ0FBa0J5QixVQUF6QjtBQUNBOzs7aUNBRVk7QUFDWixhQUFPLEtBQUt4QixvQkFBWjtBQUNBOzs7b0NBRWU7QUFDZixhQUFPLEtBQUtDLDZCQUFaO0FBQ0EiLCJmaWxlIjoiYXVkaW9fc3RyZWFtX2NvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93ZWIvYXNzZXRzL2pzL2F1ZGlvX3N0cmVhbV9jb250cm9sbGVyLmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9TdHJlYW1Db250cm9sbGVyIHtcblx0Y29uc3RydWN0b3IoYXVkaW9Db250ZXh0KSB7XG5cdFx0dGhpcy5hdWRpb0NvbnRleHQgPSBhdWRpb0NvbnRleHQ7XG5cdFx0dGhpcy5zaXh0ZWVudGhOb3RlU2FtcGxlcyA9IFtdO1xuXHRcdHRoaXMuc2l4dGVlbnRoTm90ZVNhbXBsZUJ1ZmZlclNpemUgPSAgNDA5Njtcblx0XHR0aGlzLnVzZXJNZWRpYVByb21pc2UgPSAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoeyBhdWRpbzogdHJ1ZSwgdmlkZW86IGZhbHNlIH0pO1xuXHRcdHRoaXMuYW5hbHl6ZXIgPSBudWxsO1xuXHRcdHRoaXMuYnVmZmVyID0gbnVsbDtcblx0fVxuXG5cdHN0YXJ0U3RyZWFtKCkge1xuXHRcdGxldCB0aGF0ICA9IHRoaXM7XG5cdFx0dGhpcy51c2VyTWVkaWFQcm9taXNlLnRoZW4oXG5cdFx0XHRmdW5jdGlvbihzdHJlYW0pIHtcblx0XHRcdFx0bGV0IHNvdXJjZSA9IHRoYXQuYXVkaW9Db250ZXh0LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKHN0cmVhbSk7XG5cdFx0XHRcdGxldCBwcm9jZXNzb3IgPSB0aGF0LmF1ZGlvQ29udGV4dC5jcmVhdGVTY3JpcHRQcm9jZXNzb3IoNDA5NiwgMSwgMSk7XG5cdFx0XHRcdHRoYXQuYW5hbHlzZXIgPSB0aGF0LmF1ZGlvQ29udGV4dC5jcmVhdGVBbmFseXNlcigpO1xuXHRcdFx0XHR0aGF0LmFuYWx5c2VyLmZmdFNpemUgPSAyMDQ4O1xuXHRcdFx0XHR0aGF0LmJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KHRoYXQuYW5hbHlzZXIuZmZ0U2l6ZSk7XG5cblx0XHRcdFx0c291cmNlLmNvbm5lY3QocHJvY2Vzc29yKTtcblx0XHRcdFx0c291cmNlLmNvbm5lY3QodGhhdC5hbmFseXNlcik7XG5cdFx0XHRcdHByb2Nlc3Nvci5jb25uZWN0KHRoYXQuYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcblx0XHRcdH1cblx0XHQpXG5cdH1cblxuXHRnZXRCeXRlVGltZURvbWFpbkRhdGEoKSB7XG5cdFx0dGhpcy5hbmFseXNlci5nZXRCeXRlVGltZURvbWFpbkRhdGEodGhpcy5idWZmZXIpO1xuXHRcdHJldHVybiB0aGlzLmJ1ZmZlcjtcblx0fVxuXG5cdGdldFNhbXBsZVJhdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXVkaW9Db250ZXh0LnNhbXBsZVJhdGU7XG5cdH1cblxuXHRnZXRTYW1wbGVzKCkge1xuXHRcdHJldHVybiB0aGlzLnNpeHRlZW50aE5vdGVTYW1wbGVzO1xuXHR9XG5cblx0Z2V0QnVmZmVyU2l6ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5zaXh0ZWVudGhOb3RlU2FtcGxlQnVmZmVyU2l6ZTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==