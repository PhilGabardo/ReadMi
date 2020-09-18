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
/******/ 	return __webpack_require__(__webpack_require__.s = "./web/assets/js/note_detection.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./web/assets/js/key_comparison.js":
/*!*****************************************!*\
  !*** ./web/assets/js/key_comparison.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function compareKeys(note1, note2) {
  var keyaliases = {
    'ab': 'g#',
    'a': 'a',
    'a#': 'bb',
    'bb': 'a#',
    'b': 'cb',
    'b#': 'c',
    'cb': 'b',
    'c': 'b#',
    'c#': 'db',
    'db': 'c#',
    'd': 'd',
    'd#': 'eb',
    'eb': 'd#',
    'e': 'fb',
    'e#': 'f',
    'fb': 'e',
    'f': 'f',
    'f#': 'gb',
    'gb': 'f#',
    'g': 'g',
    'g#': 'ab'
  };

  if (note1 == undefined || note2 == undefined) {
    return false;
  }

  return note1.toLowerCase() == note2.toLowerCase() || keyaliases[note1.toLowerCase()] == note2.toLowerCase();
}

function getKeyAsFlat(key) {
  var flat_map = {
    'ab': 'Ab',
    'a': 'a',
    'a#': 'Bb',
    'bb': 'Bb',
    'b': 'B',
    'cb': 'B',
    'c': 'C',
    'c#': 'Db',
    'db': 'Db',
    'd': 'D',
    'd#': 'Eb',
    'eb': 'Eb',
    'e': 'Fb',
    'e#': 'F',
    'fb': 'E',
    'f': 'F',
    'f#': 'Gb',
    'gb': 'Gb',
    'g': 'G',
    'g#': 'Ab'
  };
  return flat_map[key.toLowerCase()];
}

/* harmony default export */ __webpack_exports__["default"] = ({
  compareKeys: compareKeys
});

/***/ }),

/***/ "./web/assets/js/note_detection.js":
/*!*****************************************!*\
  !*** ./web/assets/js/note_detection.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _key_comparison__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key_comparison */ "./web/assets/js/key_comparison.js");

var noteFrequencies = // B        A#        A      G#       G         F#       F        E         D#      D        C#       C
[7902.13, 7458.62, 7040.00, 6644.88, 6271.93, 5919.91, 5587.65, 5274.04, 4978.03, 4698.64, 4434.92, 4186.01, // 8
3951.07, 3729.31, 3520.00, 3322.44, 3135.96, 2959.96, 2793.83, 2637.02, 2489.02, 2349.32, 2217.46, 2093.00, // 7
1975.53, 1864.66, 1760.00, 1661.22, 1567.98, 1479.98, 1396.91, 1318.51, 1244.51, 1174.66, 1108.73, 1046.50, // 6
987.767, 932.328, 880.000, 830.609, 783.991, 739.989, 698.456, 659.255, 622.254, 587.330, 554.365, 523.251, // 5
493.883, 466.164, 440.000, 415.305, 391.995, 369.994, 349.228, 329.628, 311.127, 293.665, 277.183, 261.626, // 4
246.942, 233.082, 220.000, 207.652, 195.998, 184.997, 174.614, 164.814, 155.563, 146.832, 138.591, 130.813, // 3
123.471, 116.541, 110.000, 103.826, 97.9989, 92.4986, 87.3071, 82.4069, 77.7817, 73.4162, 69.2957, 65.4064, // 2
61.7354, 58.2705, 55.0000, 51.9131, 48.9994, 46.2493, 43.6535, 41.2034, 38.8909, 36.7081, 34.6478, 32.7032, // 1
30.8677, 29.1352, 27.5000, 25.9565, 24.4997, 23.1247, 21.8268, 20.6017, 19.4454, 18.3540, 17.3239, 16.3516]; // 0

var noteNames = ["B", "A#", "A", "G#", "G", "F#", "F", "E", "D#", "D", "C#", "C"];

function estimateNote(frequency) {
  var length = noteFrequencies.length;
  var frequencyIndex = 0;
  var nextClosestIndex = 0; // Iterate through the note array to find the closest indices

  for (var i = 0; i < length - 1; i++) {
    if (i == 0 && frequency > noteFrequencies[i]) {
      frequencyIndex = 0;
      nextClosestIndex = 0;
      break;
    } else if (noteFrequencies[i] >= frequency && frequency > noteFrequencies[i + 1]) {
      frequencyIndex = noteFrequencies[i] - frequency < frequency - noteFrequencies[i + 1] ? i : i + 1;
      nextClosestIndex = frequencyIndex == i ? i + 1 : i;
      break;
    } else if (i == length - 2) {
      frequencyIndex = length - 1;
      nextClosestIndex = length - 1;
    }
  } // Get the name of the note


  return {
    key: noteNames[frequencyIndex % noteNames.length],
    octave: 8 - Math.floor(frequencyIndex / noteNames.length)
  };
}

function getFrequencyForNote(note_name, note_octave) {
  var noteNameIndex;

  for (var i = 0; i < noteNames.length; i++) {
    if (_key_comparison__WEBPACK_IMPORTED_MODULE_0__["default"].compareKeys(note_name, noteNames[i])) {
      noteNameIndex = i;
      break;
    }
  }

  return noteFrequencies[noteFrequencies.length - 1 - note_octave * noteNames.length - (noteNames.length - noteNameIndex - 1)];
}

function getNoteFromSamples(buffer, sampleRate) {
  // We use Autocorrelation to find the fundamental frequency.
  // In order to correlate the signal with itself (hence the name of the algorithm), we will check two points 'k' frames away.
  // The autocorrelation index will be the average of these products. At the same time, we normalize the values.
  // Source: http://www.phy.mty.edu/~suits/autocorrelation.html
  // Assuming the sample rate is 48000Hz, a 'k' equal to 1000 would correspond to a 48Hz signal (48000/1000 = 48),
  // while a 'k' equal to 8 would correspond to a 6000Hz one, which is enough to cover most (if not all)
  // the notes we have in the notes.json file.
  var n = 1024,
      bestR = 0,
      bestK = -1;

  for (var k = 8; k <= 1000; k++) {
    var sum = 0;

    for (var i = 0; i < n; i++) {
      sum += (buffer[i] - 128) / 128 * ((buffer[i + k] - 128) / 128);
    }

    var r = sum / (n + k);

    if (r > bestR) {
      bestR = r;
      bestK = k;
    }

    if (r > 0.9) {
      break;
    }
  }

  if (bestR > 0.0025) {
    // The period (in frames) of the fundamental frequency is 'bestK'. Getting the frequency from there is trivial.
    var fundamentalFreq = sampleRate / bestK;
    return estimateNote(fundamentalFreq);
  } else {
    // We haven't found a good correlation
    return [];
  }
}

;
/* harmony default export */ __webpack_exports__["default"] = ({
  getFrequencyForNote: getFrequencyForNote,
  getNoteFromSamples: getNoteFromSamples,
  estimateNote: estimateNote
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9rZXlfY29tcGFyaXNvbi5qcyIsIndlYnBhY2s6Ly8vLi93ZWIvYXNzZXRzL2pzL25vdGVfZGV0ZWN0aW9uLmpzIl0sIm5hbWVzIjpbImNvbXBhcmVLZXlzIiwibm90ZTEiLCJub3RlMiIsImtleWFsaWFzZXMiLCJ1bmRlZmluZWQiLCJ0b0xvd2VyQ2FzZSIsImdldEtleUFzRmxhdCIsImtleSIsImZsYXRfbWFwIiwibm90ZUZyZXF1ZW5jaWVzIiwibm90ZU5hbWVzIiwiZXN0aW1hdGVOb3RlIiwiZnJlcXVlbmN5IiwibGVuZ3RoIiwiZnJlcXVlbmN5SW5kZXgiLCJuZXh0Q2xvc2VzdEluZGV4IiwiaSIsIm9jdGF2ZSIsIk1hdGgiLCJmbG9vciIsImdldEZyZXF1ZW5jeUZvck5vdGUiLCJub3RlX25hbWUiLCJub3RlX29jdGF2ZSIsIm5vdGVOYW1lSW5kZXgiLCJrZXlfY29tcGFyaXNvbiIsImdldE5vdGVGcm9tU2FtcGxlcyIsImJ1ZmZlciIsInNhbXBsZVJhdGUiLCJuIiwiYmVzdFIiLCJiZXN0SyIsImsiLCJzdW0iLCJyIiwiZnVuZGFtZW50YWxGcmVxIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FB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QThCO0FBRTdCLFFBQUlDLEdBQUcsR0FBRyxDQUFWOztBQUNBLFNBQUksSUFBSWhCLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR1ksQ0FBbkIsRUFBc0JaLENBQUMsRUFBdkIsRUFBMkI7QUFDMUJnQixTQUFHLElBQUssQ0FBQ04sTUFBTSxDQUFDVixDQUFELENBQU4sR0FBWSxHQUFiLElBQW9CLEdBQXJCLElBQTZCLENBQUNVLE1BQU0sQ0FBQ1YsQ0FBQyxHQUFHZSxDQUFMLENBQU4sR0FBZ0IsR0FBakIsSUFBd0IsR0FBckQsQ0FBUDtBQUNBOztBQUVELFFBQUlFLENBQUMsR0FBR0QsR0FBRyxJQUFJSixDQUFDLEdBQUdHLENBQVIsQ0FBWDs7QUFFQSxRQUFHRSxDQUFDLEdBQUdKLEtBQVAsRUFBYTtBQUNaQSxXQUFLLEdBQUdJLENBQVI7QUFDQUgsV0FBSyxHQUFHQyxDQUFSO0FBQ0E7O0FBRUQsUUFBR0UsQ0FBQyxHQUFHLEdBQVAsRUFBWTtBQUNYO0FBQ0E7QUFDRDs7QUFFRCxNQUFHSixLQUFLLEdBQUcsTUFBWCxFQUFtQjtBQUNsQjtBQUNBLFFBQUlLLGVBQWUsR0FBR1AsVUFBVSxHQUFHRyxLQUFuQztBQUNBLFdBQU9uQixZQUFZLENBQUN1QixlQUFELENBQW5CO0FBQ0EsR0FKRCxNQUtLO0FBQ0o7QUFDQSxXQUFPLEVBQVA7QUFDQTtBQUNEOztBQUFBO0FBRWM7QUFDZGQscUJBQW1CLEVBQUVBLG1CQURQO0FBRWRLLG9CQUFrQixFQUFFQSxrQkFGTjtBQUdkZCxjQUFZLEVBQUVBO0FBSEEsQ0FBZixFIiwiZmlsZSI6Im5vdGVfZGV0ZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vd2ViL2Fzc2V0cy9qcy9ub3RlX2RldGVjdGlvbi5qc1wiKTtcbiIsImZ1bmN0aW9uIGNvbXBhcmVLZXlzKG5vdGUxLCBub3RlMikge1xuXHRsZXQga2V5YWxpYXNlcyA9IHtcblx0XHQnYWInOiAnZyMnLFxuXHRcdCdhJyA6ICdhJyxcblx0XHQnYSMnIDogJ2JiJyxcblx0XHQnYmInIDogJ2EjJyxcblx0XHQnYicgOiAnY2InLFxuXHRcdCdiIyc6ICdjJyxcblx0XHQnY2InIDogJ2InLFxuXHRcdCdjJyA6ICdiIycsXG5cdFx0J2MjJzogJ2RiJyxcblx0XHQnZGInIDogJ2MjJyxcblx0XHQnZCcgOiAnZCcsXG5cdFx0J2QjJyA6ICdlYicsXG5cdFx0J2ViJyA6ICdkIycsXG5cdFx0J2UnIDogJ2ZiJyxcblx0XHQnZSMnIDogJ2YnLFxuXHRcdCdmYicgOiAnZScsXG5cdFx0J2YnIDogJ2YnLFxuXHRcdCdmIycgOiAnZ2InLFxuXHRcdCdnYicgOiAnZiMnLFxuXHRcdCdnJyA6ICdnJyxcblx0XHQnZyMnIDogJ2FiJyxcblx0fVxuXHRpZiAobm90ZTEgPT0gdW5kZWZpbmVkIHx8IG5vdGUyID09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gbm90ZTEudG9Mb3dlckNhc2UoKSA9PSBub3RlMi50b0xvd2VyQ2FzZSgpIHx8IGtleWFsaWFzZXNbbm90ZTEudG9Mb3dlckNhc2UoKV0gPT0gbm90ZTIudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gZ2V0S2V5QXNGbGF0KGtleSkge1xuXHRsZXQgZmxhdF9tYXAgPSB7XG5cdFx0J2FiJzogJ0FiJyxcblx0XHQnYScgOiAnYScsXG5cdFx0J2EjJyA6ICdCYicsXG5cdFx0J2JiJyA6ICdCYicsXG5cdFx0J2InIDogJ0InLFxuXHRcdCdjYicgOiAnQicsXG5cdFx0J2MnIDogJ0MnLFxuXHRcdCdjIyc6ICdEYicsXG5cdFx0J2RiJyA6ICdEYicsXG5cdFx0J2QnIDogJ0QnLFxuXHRcdCdkIycgOiAnRWInLFxuXHRcdCdlYicgOiAnRWInLFxuXHRcdCdlJyA6ICdGYicsXG5cdFx0J2UjJyA6ICdGJyxcblx0XHQnZmInIDogJ0UnLFxuXHRcdCdmJyA6ICdGJyxcblx0XHQnZiMnIDogJ0diJyxcblx0XHQnZ2InIDogJ0diJyxcblx0XHQnZycgOiAnRycsXG5cdFx0J2cjJyA6ICdBYicsXG5cdH1cblx0cmV0dXJuIGZsYXRfbWFwW2tleS50b0xvd2VyQ2FzZSgpXVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGNvbXBhcmVLZXlzOiBjb21wYXJlS2V5c1xufVxuIiwiaW1wb3J0IGtleV9jb21wYXJpc29uIGZyb20gJy4va2V5X2NvbXBhcmlzb24nXG5sZXQgbm90ZUZyZXF1ZW5jaWVzID1cblx0Ly8gQiAgICAgICAgQSMgICAgICAgIEEgICAgICBHIyAgICAgICBHICAgICAgICAgRiMgICAgICAgRiAgICAgICAgRSAgICAgICAgIEQjICAgICAgRCAgICAgICAgQyMgICAgICAgQ1xuXHRbNzkwMi4xMywgNzQ1OC42MiwgNzA0MC4wMCwgNjY0NC44OCwgNjI3MS45MywgNTkxOS45MSwgNTU4Ny42NSwgNTI3NC4wNCwgNDk3OC4wMywgNDY5OC42NCwgNDQzNC45MiwgNDE4Ni4wMSwgIC8vIDhcblx0Mzk1MS4wNywgMzcyOS4zMSwgMzUyMC4wMCwgMzMyMi40NCwgMzEzNS45NiwgMjk1OS45NiwgMjc5My44MywgMjYzNy4wMiwgMjQ4OS4wMiwgMjM0OS4zMiwgMjIxNy40NiwgMjA5My4wMCwgICAvLyA3XG5cdDE5NzUuNTMsIDE4NjQuNjYsIDE3NjAuMDAsIDE2NjEuMjIsIDE1NjcuOTgsIDE0NzkuOTgsIDEzOTYuOTEsIDEzMTguNTEsIDEyNDQuNTEsIDExNzQuNjYsIDExMDguNzMsIDEwNDYuNTAsICAgLy8gNlxuXHQ5ODcuNzY3LCA5MzIuMzI4LCA4ODAuMDAwLCA4MzAuNjA5LCA3ODMuOTkxLCA3MzkuOTg5LCA2OTguNDU2LCA2NTkuMjU1LCA2MjIuMjU0LCA1ODcuMzMwLCA1NTQuMzY1LCA1MjMuMjUxLCAgIC8vIDVcblx0NDkzLjg4MywgNDY2LjE2NCwgNDQwLjAwMCwgNDE1LjMwNSwgMzkxLjk5NSwgMzY5Ljk5NCwgMzQ5LjIyOCwgMzI5LjYyOCwgMzExLjEyNywgMjkzLjY2NSwgMjc3LjE4MywgMjYxLjYyNiwgICAvLyA0XG5cdDI0Ni45NDIsIDIzMy4wODIsIDIyMC4wMDAsIDIwNy42NTIsIDE5NS45OTgsIDE4NC45OTcsIDE3NC42MTQsIDE2NC44MTQsIDE1NS41NjMsIDE0Ni44MzIsIDEzOC41OTEsIDEzMC44MTMsICAgLy8gM1xuXHQxMjMuNDcxLCAxMTYuNTQxLCAxMTAuMDAwLCAxMDMuODI2LCA5Ny45OTg5LCA5Mi40OTg2LCA4Ny4zMDcxLCA4Mi40MDY5LCA3Ny43ODE3LCA3My40MTYyLCA2OS4yOTU3LCA2NS40MDY0LCAgIC8vIDJcblx0NjEuNzM1NCwgNTguMjcwNSwgNTUuMDAwMCwgNTEuOTEzMSwgNDguOTk5NCwgNDYuMjQ5MywgNDMuNjUzNSwgNDEuMjAzNCwgMzguODkwOSwgMzYuNzA4MSwgMzQuNjQ3OCwgMzIuNzAzMiwgICAvLyAxXG5cdDMwLjg2NzcsIDI5LjEzNTIsIDI3LjUwMDAsIDI1Ljk1NjUsIDI0LjQ5OTcsIDIzLjEyNDcsIDIxLjgyNjgsIDIwLjYwMTcsIDE5LjQ0NTQsIDE4LjM1NDAsIDE3LjMyMzksIDE2LjM1MTZdOyAvLyAwXG5cbmxldCBub3RlTmFtZXMgPSBbXCJCXCIsIFwiQSNcIiwgXCJBXCIsIFwiRyNcIiwgXCJHXCIsIFwiRiNcIiwgXCJGXCIsIFwiRVwiLCBcIkQjXCIsIFwiRFwiLCBcIkMjXCIsIFwiQ1wiXTtcblxuZnVuY3Rpb24gZXN0aW1hdGVOb3RlKGZyZXF1ZW5jeSkge1xuXHRsZXQgbGVuZ3RoID0gbm90ZUZyZXF1ZW5jaWVzLmxlbmd0aDtcblx0bGV0IGZyZXF1ZW5jeUluZGV4ID0gMDtcblx0bGV0IG5leHRDbG9zZXN0SW5kZXggPSAwO1xuXG5cdC8vIEl0ZXJhdGUgdGhyb3VnaCB0aGUgbm90ZSBhcnJheSB0byBmaW5kIHRoZSBjbG9zZXN0IGluZGljZXNcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGggLSAxOyBpKyspIHtcblx0XHRpZiAoaSA9PSAwICYmIGZyZXF1ZW5jeSA+IG5vdGVGcmVxdWVuY2llc1tpXSkge1xuXHRcdFx0ZnJlcXVlbmN5SW5kZXggPSAwO1xuXHRcdFx0bmV4dENsb3Nlc3RJbmRleCA9IDA7XG5cdFx0XHRicmVhaztcblx0XHR9IGVsc2UgaWYgKG5vdGVGcmVxdWVuY2llc1tpXSA+PSBmcmVxdWVuY3kgJiYgZnJlcXVlbmN5ID4gbm90ZUZyZXF1ZW5jaWVzW2kgKyAxXSkge1xuXHRcdFx0ZnJlcXVlbmN5SW5kZXggPSAobm90ZUZyZXF1ZW5jaWVzW2ldIC0gZnJlcXVlbmN5KSA8IChmcmVxdWVuY3kgLSBub3RlRnJlcXVlbmNpZXNbaSArIDFdKSA/IGkgOiBpICsgMTtcblx0XHRcdG5leHRDbG9zZXN0SW5kZXggPSBmcmVxdWVuY3lJbmRleCA9PSBpID8gaSArIDEgOiBpO1xuXHRcdFx0YnJlYWs7XG5cdFx0fSBlbHNlIGlmIChpID09IGxlbmd0aCAtIDIpIHtcblx0XHRcdGZyZXF1ZW5jeUluZGV4ID0gbGVuZ3RoIC0gMTtcblx0XHRcdG5leHRDbG9zZXN0SW5kZXggPSBsZW5ndGggLSAxO1xuXHRcdH1cblx0fVxuXG5cdC8vIEdldCB0aGUgbmFtZSBvZiB0aGUgbm90ZVxuXHRyZXR1cm4ge1xuXHRcdGtleTogbm90ZU5hbWVzWyhmcmVxdWVuY3lJbmRleCkgJSBub3RlTmFtZXMubGVuZ3RoXSxcblx0XHRvY3RhdmU6IDggLSBNYXRoLmZsb29yKGZyZXF1ZW5jeUluZGV4IC8gbm90ZU5hbWVzLmxlbmd0aCksXG5cdH07XG59XG5cbmZ1bmN0aW9uIGdldEZyZXF1ZW5jeUZvck5vdGUobm90ZV9uYW1lLCBub3RlX29jdGF2ZSkge1xuXHRsZXQgbm90ZU5hbWVJbmRleDtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBub3RlTmFtZXMubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoa2V5X2NvbXBhcmlzb24uY29tcGFyZUtleXMobm90ZV9uYW1lLCBub3RlTmFtZXNbaV0pKSB7XG5cdFx0XHRub3RlTmFtZUluZGV4ID0gaTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbm90ZUZyZXF1ZW5jaWVzW25vdGVGcmVxdWVuY2llcy5sZW5ndGggLSAxIC0gKG5vdGVfb2N0YXZlICogbm90ZU5hbWVzLmxlbmd0aCkgLSAobm90ZU5hbWVzLmxlbmd0aCAtIG5vdGVOYW1lSW5kZXggLSAxKV1cbn1cblxuZnVuY3Rpb24gZ2V0Tm90ZUZyb21TYW1wbGVzKGJ1ZmZlciwgc2FtcGxlUmF0ZSkge1xuXG5cdC8vIFdlIHVzZSBBdXRvY29ycmVsYXRpb24gdG8gZmluZCB0aGUgZnVuZGFtZW50YWwgZnJlcXVlbmN5LlxuXG5cdC8vIEluIG9yZGVyIHRvIGNvcnJlbGF0ZSB0aGUgc2lnbmFsIHdpdGggaXRzZWxmIChoZW5jZSB0aGUgbmFtZSBvZiB0aGUgYWxnb3JpdGhtKSwgd2Ugd2lsbCBjaGVjayB0d28gcG9pbnRzICdrJyBmcmFtZXMgYXdheS5cblx0Ly8gVGhlIGF1dG9jb3JyZWxhdGlvbiBpbmRleCB3aWxsIGJlIHRoZSBhdmVyYWdlIG9mIHRoZXNlIHByb2R1Y3RzLiBBdCB0aGUgc2FtZSB0aW1lLCB3ZSBub3JtYWxpemUgdGhlIHZhbHVlcy5cblx0Ly8gU291cmNlOiBodHRwOi8vd3d3LnBoeS5tdHkuZWR1L35zdWl0cy9hdXRvY29ycmVsYXRpb24uaHRtbFxuXHQvLyBBc3N1bWluZyB0aGUgc2FtcGxlIHJhdGUgaXMgNDgwMDBIeiwgYSAnaycgZXF1YWwgdG8gMTAwMCB3b3VsZCBjb3JyZXNwb25kIHRvIGEgNDhIeiBzaWduYWwgKDQ4MDAwLzEwMDAgPSA0OCksXG5cdC8vIHdoaWxlIGEgJ2snIGVxdWFsIHRvIDggd291bGQgY29ycmVzcG9uZCB0byBhIDYwMDBIeiBvbmUsIHdoaWNoIGlzIGVub3VnaCB0byBjb3ZlciBtb3N0IChpZiBub3QgYWxsKVxuXHQvLyB0aGUgbm90ZXMgd2UgaGF2ZSBpbiB0aGUgbm90ZXMuanNvbiBmaWxlLlxuXG5cdHZhciBuID0gMTAyNCwgYmVzdFIgPSAwLCBiZXN0SyA9IC0xO1xuXHRmb3IodmFyIGsgPSA4OyBrIDw9IDEwMDA7IGsrKyl7XG5cblx0XHR2YXIgc3VtID0gMDtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRzdW0gKz0gKChidWZmZXJbaV0gLSAxMjgpIC8gMTI4KSAqICgoYnVmZmVyW2kgKyBrXSAtIDEyOCkgLyAxMjgpO1xuXHRcdH1cblxuXHRcdHZhciByID0gc3VtIC8gKG4gKyBrKTtcblxuXHRcdGlmKHIgPiBiZXN0Uil7XG5cdFx0XHRiZXN0UiA9IHI7XG5cdFx0XHRiZXN0SyA9IGs7XG5cdFx0fVxuXG5cdFx0aWYociA+IDAuOSkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0aWYoYmVzdFIgPiAwLjAwMjUpIHtcblx0XHQvLyBUaGUgcGVyaW9kIChpbiBmcmFtZXMpIG9mIHRoZSBmdW5kYW1lbnRhbCBmcmVxdWVuY3kgaXMgJ2Jlc3RLJy4gR2V0dGluZyB0aGUgZnJlcXVlbmN5IGZyb20gdGhlcmUgaXMgdHJpdmlhbC5cblx0XHR2YXIgZnVuZGFtZW50YWxGcmVxID0gc2FtcGxlUmF0ZSAvIGJlc3RLO1xuXHRcdHJldHVybiBlc3RpbWF0ZU5vdGUoZnVuZGFtZW50YWxGcmVxKTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBXZSBoYXZlbid0IGZvdW5kIGEgZ29vZCBjb3JyZWxhdGlvblxuXHRcdHJldHVybiBbXTtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRnZXRGcmVxdWVuY3lGb3JOb3RlOiBnZXRGcmVxdWVuY3lGb3JOb3RlLFxuXHRnZXROb3RlRnJvbVNhbXBsZXM6IGdldE5vdGVGcm9tU2FtcGxlcyxcblx0ZXN0aW1hdGVOb3RlOiBlc3RpbWF0ZU5vdGUsXG59XG4iXSwic291cmNlUm9vdCI6IiJ9