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
    this.userMediaPromise = navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });
    this.processor = null;
    this.buffer = null;
  }

  _createClass(AudioStreamController, [{
    key: "startStream",
    value: function startStream() {
      var that = this;
      this.userMediaPromise.then(function (stream) {
        var source = that.audioContext.createMediaStreamSource(stream);
        that.processor = that.audioContext.createScriptProcessor(4096, 1, 1);
        source.connect(that.processor);
        that.processor.connect(that.audioContext.destination);

        that.processor.onaudioprocess = function (e) {
          // Do something with the data, i.e Convert this to WAV
          that.buffer = e.inputBuffer.getChannelData(0);
        };
      });
    }
  }, {
    key: "getAudioStream",
    value: function getAudioStream() {
      return this.buffer;
    }
  }, {
    key: "getByteTimeDomainData",
    value: function getByteTimeDomainData() {
      var t0 = performance.now();
      this.analyser.getByteTimeDomainData(this.buffer);
      console.log(performance.now() - t0);
      return this.buffer;
    }
  }, {
    key: "getSampleRate",
    value: function getSampleRate() {
      return this.audioContext.sampleRate;
    }
  }]);

  return AudioStreamController;
}();
/*
var readStart = function(stream) {
	var source = audioContext.createMediaStreamSource(stream);
	var processor = audioContext.createScriptProcessor(4096, 1, 1);
	var count = 0;
	var sixteenthNoteSampleBufferSize =  4096;
	var sixteenthNoteSamples = [];
	var leftoverSamples = [];

	source.connect(processor);
	processor.connect(audioContext.destination);
	processor.onaudioprocess = function(e) {
		count += 4096;
		count = count % 44100;
		// Do something with the data, i.e Convert this to WAV
		var channelData = e.inputBuffer.getChannelData(0);
		for (var i = 0; i < channelData.length; i++) {
			sixteenthNoteSamples.push(channelData[i])
		}
		if (sixteenthNoteSamples.length < sixteenthNoteSampleBufferSize) {
			currentNote = [];
			return;
		}
		leftoverSamples = sixteenthNoteSamples.slice(sixteenthNoteSampleBufferSize)
		sixteenthNoteSamples = sixteenthNoteSamples.slice(0, sixteenthNoteSampleBufferSize)
		var max = 0;
		for (var i = 0; i < sixteenthNoteSamples.length; i++) {
			max = Math.max(max, Math.abs(sixteenthNoteSamples[i]))
		}
		if (max > 0.1) {
			freq = estimateFrequency(sixteenthNoteSamples);
			if (freq != -1) {
				currentNote = estimateNote(freq);
			} else {
				currentNote = [];
			}
		} else {
			currentNote = [];
		}
		sixteenthNoteSamples = leftoverSamples;
	};
	playSound(audioContext, beats_per_minute, 1);
};

navigator.mediaDevices.getUserMedia({ audio: true, video: false })
	.then(readStart);
*/




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9hdWRpb19zdHJlYW1fY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJBdWRpb1N0cmVhbUNvbnRyb2xsZXIiLCJhdWRpb0NvbnRleHQiLCJ1c2VyTWVkaWFQcm9taXNlIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiYXVkaW8iLCJ2aWRlbyIsInByb2Nlc3NvciIsImJ1ZmZlciIsInRoYXQiLCJ0aGVuIiwic3RyZWFtIiwic291cmNlIiwiY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UiLCJjcmVhdGVTY3JpcHRQcm9jZXNzb3IiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJvbmF1ZGlvcHJvY2VzcyIsImUiLCJpbnB1dEJ1ZmZlciIsImdldENoYW5uZWxEYXRhIiwidDAiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImFuYWx5c2VyIiwiZ2V0Qnl0ZVRpbWVEb21haW5EYXRhIiwiY29uc29sZSIsImxvZyIsInNhbXBsZVJhdGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2xGcUJBLHFCOzs7QUFDcEIsaUNBQVlDLFlBQVosRUFBMEI7QUFBQTs7QUFDekIsU0FBS0EsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLQyxnQkFBTCxHQUF5QkMsU0FBUyxDQUFDQyxZQUFWLENBQXVCQyxZQUF2QixDQUFvQztBQUFFQyxXQUFLLEVBQUUsSUFBVDtBQUFlQyxXQUFLLEVBQUU7QUFBdEIsS0FBcEMsQ0FBekI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLElBQWQ7QUFDQTs7OztrQ0FFYTtBQUNiLFVBQUlDLElBQUksR0FBSSxJQUFaO0FBQ0EsV0FBS1IsZ0JBQUwsQ0FBc0JTLElBQXRCLENBQ0MsVUFBU0MsTUFBVCxFQUFpQjtBQUNoQixZQUFJQyxNQUFNLEdBQUdILElBQUksQ0FBQ1QsWUFBTCxDQUFrQmEsdUJBQWxCLENBQTBDRixNQUExQyxDQUFiO0FBQ0FGLFlBQUksQ0FBQ0YsU0FBTCxHQUFpQkUsSUFBSSxDQUFDVCxZQUFMLENBQWtCYyxxQkFBbEIsQ0FBd0MsSUFBeEMsRUFBOEMsQ0FBOUMsRUFBaUQsQ0FBakQsQ0FBakI7QUFDQUYsY0FBTSxDQUFDRyxPQUFQLENBQWVOLElBQUksQ0FBQ0YsU0FBcEI7QUFDQUUsWUFBSSxDQUFDRixTQUFMLENBQWVRLE9BQWYsQ0FBdUJOLElBQUksQ0FBQ1QsWUFBTCxDQUFrQmdCLFdBQXpDOztBQUNBUCxZQUFJLENBQUNGLFNBQUwsQ0FBZVUsY0FBZixHQUFnQyxVQUFTQyxDQUFULEVBQVk7QUFDM0M7QUFDQVQsY0FBSSxDQUFDRCxNQUFMLEdBQWNVLENBQUMsQ0FBQ0MsV0FBRixDQUFjQyxjQUFkLENBQTZCLENBQTdCLENBQWQ7QUFDQSxTQUhEO0FBSUEsT0FWRjtBQVlBOzs7cUNBRWdCO0FBQ2hCLGFBQU8sS0FBS1osTUFBWjtBQUNBOzs7NENBRXVCO0FBQ3ZCLFVBQUlhLEVBQUUsR0FBR0MsV0FBVyxDQUFDQyxHQUFaLEVBQVQ7QUFDQSxXQUFLQyxRQUFMLENBQWNDLHFCQUFkLENBQW9DLEtBQUtqQixNQUF6QztBQUNBa0IsYUFBTyxDQUFDQyxHQUFSLENBQVlMLFdBQVcsQ0FBQ0MsR0FBWixLQUFvQkYsRUFBaEM7QUFDQSxhQUFPLEtBQUtiLE1BQVo7QUFDQTs7O29DQUVlO0FBQ2YsYUFBTyxLQUFLUixZQUFMLENBQWtCNEIsVUFBekI7QUFDQTs7Ozs7QUFJRiIsImZpbGUiOiJhdWRpb19zdHJlYW1fY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3dlYi9hc3NldHMvanMvYXVkaW9fc3RyZWFtX2NvbnRyb2xsZXIuanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpb1N0cmVhbUNvbnRyb2xsZXIge1xuXHRjb25zdHJ1Y3RvcihhdWRpb0NvbnRleHQpIHtcblx0XHR0aGlzLmF1ZGlvQ29udGV4dCA9IGF1ZGlvQ29udGV4dDtcblx0XHR0aGlzLnVzZXJNZWRpYVByb21pc2UgPSAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoeyBhdWRpbzogdHJ1ZSwgdmlkZW86IGZhbHNlIH0pO1xuXHRcdHRoaXMucHJvY2Vzc29yID0gbnVsbDtcblx0XHR0aGlzLmJ1ZmZlciA9IG51bGw7XG5cdH1cblxuXHRzdGFydFN0cmVhbSgpIHtcblx0XHRsZXQgdGhhdCAgPSB0aGlzO1xuXHRcdHRoaXMudXNlck1lZGlhUHJvbWlzZS50aGVuKFxuXHRcdFx0ZnVuY3Rpb24oc3RyZWFtKSB7XG5cdFx0XHRcdGxldCBzb3VyY2UgPSB0aGF0LmF1ZGlvQ29udGV4dC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZShzdHJlYW0pO1xuXHRcdFx0XHR0aGF0LnByb2Nlc3NvciA9IHRoYXQuYXVkaW9Db250ZXh0LmNyZWF0ZVNjcmlwdFByb2Nlc3Nvcig0MDk2LCAxLCAxKTtcblx0XHRcdFx0c291cmNlLmNvbm5lY3QodGhhdC5wcm9jZXNzb3IpO1xuXHRcdFx0XHR0aGF0LnByb2Nlc3Nvci5jb25uZWN0KHRoYXQuYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcblx0XHRcdFx0dGhhdC5wcm9jZXNzb3Iub25hdWRpb3Byb2Nlc3MgPSBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0Ly8gRG8gc29tZXRoaW5nIHdpdGggdGhlIGRhdGEsIGkuZSBDb252ZXJ0IHRoaXMgdG8gV0FWXG5cdFx0XHRcdFx0dGhhdC5idWZmZXIgPSBlLmlucHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKDApXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0KVxuXHR9XG5cblx0Z2V0QXVkaW9TdHJlYW0oKSB7XG5cdFx0cmV0dXJuIHRoaXMuYnVmZmVyO1xuXHR9XG5cblx0Z2V0Qnl0ZVRpbWVEb21haW5EYXRhKCkge1xuXHRcdHZhciB0MCA9IHBlcmZvcm1hbmNlLm5vdygpXG5cdFx0dGhpcy5hbmFseXNlci5nZXRCeXRlVGltZURvbWFpbkRhdGEodGhpcy5idWZmZXIpO1xuXHRcdGNvbnNvbGUubG9nKHBlcmZvcm1hbmNlLm5vdygpIC0gdDApO1xuXHRcdHJldHVybiB0aGlzLmJ1ZmZlcjtcblx0fVxuXG5cdGdldFNhbXBsZVJhdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXVkaW9Db250ZXh0LnNhbXBsZVJhdGU7XG5cdH1cbn1cblxuXG4vKlxudmFyIHJlYWRTdGFydCA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuXHR2YXIgc291cmNlID0gYXVkaW9Db250ZXh0LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKHN0cmVhbSk7XG5cdHZhciBwcm9jZXNzb3IgPSBhdWRpb0NvbnRleHQuY3JlYXRlU2NyaXB0UHJvY2Vzc29yKDQwOTYsIDEsIDEpO1xuXHR2YXIgY291bnQgPSAwO1xuXHR2YXIgc2l4dGVlbnRoTm90ZVNhbXBsZUJ1ZmZlclNpemUgPSAgNDA5Njtcblx0dmFyIHNpeHRlZW50aE5vdGVTYW1wbGVzID0gW107XG5cdHZhciBsZWZ0b3ZlclNhbXBsZXMgPSBbXTtcblxuXHRzb3VyY2UuY29ubmVjdChwcm9jZXNzb3IpO1xuXHRwcm9jZXNzb3IuY29ubmVjdChhdWRpb0NvbnRleHQuZGVzdGluYXRpb24pO1xuXHRwcm9jZXNzb3Iub25hdWRpb3Byb2Nlc3MgPSBmdW5jdGlvbihlKSB7XG5cdFx0Y291bnQgKz0gNDA5Njtcblx0XHRjb3VudCA9IGNvdW50ICUgNDQxMDA7XG5cdFx0Ly8gRG8gc29tZXRoaW5nIHdpdGggdGhlIGRhdGEsIGkuZSBDb252ZXJ0IHRoaXMgdG8gV0FWXG5cdFx0dmFyIGNoYW5uZWxEYXRhID0gZS5pbnB1dEJ1ZmZlci5nZXRDaGFubmVsRGF0YSgwKTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoYW5uZWxEYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRzaXh0ZWVudGhOb3RlU2FtcGxlcy5wdXNoKGNoYW5uZWxEYXRhW2ldKVxuXHRcdH1cblx0XHRpZiAoc2l4dGVlbnRoTm90ZVNhbXBsZXMubGVuZ3RoIDwgc2l4dGVlbnRoTm90ZVNhbXBsZUJ1ZmZlclNpemUpIHtcblx0XHRcdGN1cnJlbnROb3RlID0gW107XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGxlZnRvdmVyU2FtcGxlcyA9IHNpeHRlZW50aE5vdGVTYW1wbGVzLnNsaWNlKHNpeHRlZW50aE5vdGVTYW1wbGVCdWZmZXJTaXplKVxuXHRcdHNpeHRlZW50aE5vdGVTYW1wbGVzID0gc2l4dGVlbnRoTm90ZVNhbXBsZXMuc2xpY2UoMCwgc2l4dGVlbnRoTm90ZVNhbXBsZUJ1ZmZlclNpemUpXG5cdFx0dmFyIG1heCA9IDA7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzaXh0ZWVudGhOb3RlU2FtcGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bWF4ID0gTWF0aC5tYXgobWF4LCBNYXRoLmFicyhzaXh0ZWVudGhOb3RlU2FtcGxlc1tpXSkpXG5cdFx0fVxuXHRcdGlmIChtYXggPiAwLjEpIHtcblx0XHRcdGZyZXEgPSBlc3RpbWF0ZUZyZXF1ZW5jeShzaXh0ZWVudGhOb3RlU2FtcGxlcyk7XG5cdFx0XHRpZiAoZnJlcSAhPSAtMSkge1xuXHRcdFx0XHRjdXJyZW50Tm90ZSA9IGVzdGltYXRlTm90ZShmcmVxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN1cnJlbnROb3RlID0gW107XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGN1cnJlbnROb3RlID0gW107XG5cdFx0fVxuXHRcdHNpeHRlZW50aE5vdGVTYW1wbGVzID0gbGVmdG92ZXJTYW1wbGVzO1xuXHR9O1xuXHRwbGF5U291bmQoYXVkaW9Db250ZXh0LCBiZWF0c19wZXJfbWludXRlLCAxKTtcbn07XG5cbm5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHsgYXVkaW86IHRydWUsIHZpZGVvOiBmYWxzZSB9KVxuXHQudGhlbihyZWFkU3RhcnQpO1xuKi9cbiJdLCJzb3VyY2VSb290IjoiIn0=