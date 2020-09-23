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
var noteNameIndexMap = {
  "C": 0,
  "C#": 1,
  "DB": 1,
  "D": 2,
  "D#": 3,
  "EB": 3,
  "E": 4,
  "F": 5,
  "F#": 6,
  "GB": 6,
  "G": 7,
  "G#": 8,
  "AB": 8,
  "A": 9,
  "A#": 10,
  "BB": 10,
  "B": 11
};

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

function getIndexForNote(note_name, note_octave) {
  console.log(note_name);
  return note_octave * 12 + noteNameIndexMap[note_name];
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
  estimateNote: estimateNote,
  getIndexForNote: getIndexForNote
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9rZXlfY29tcGFyaXNvbi5qcyIsIndlYnBhY2s6Ly8vLi93ZWIvYXNzZXRzL2pzL25vdGVfZGV0ZWN0aW9uLmpzIl0sIm5hbWVzIjpbImNvbXBhcmVLZXlzIiwibm90ZTEiLCJub3RlMiIsImtleWFsaWFzZXMiLCJ1bmRlZmluZWQiLCJ0b0xvd2VyQ2FzZSIsImdldEtleUFzRmxhdCIsImtleSIsImZsYXRfbWFwIiwibm90ZUZyZXF1ZW5jaWVzIiwibm90ZU5hbWVzIiwibm90ZU5hbWVJbmRleE1hcCIsImVzdGltYXRlTm90ZSIsImZyZXF1ZW5jeSIsImxlbmd0aCIsImZyZXF1ZW5jeUluZGV4IiwibmV4dENsb3Nlc3RJbmRleCIsImkiLCJvY3RhdmUiLCJNYXRoIiwiZmxvb3IiLCJnZXRGcmVxdWVuY3lGb3JOb3RlIiwibm90ZV9uYW1lIiwibm90ZV9vY3RhdmUiLCJub3RlTmFtZUluZGV4Iiwia2V5X2NvbXBhcmlzb24iLCJnZXRJbmRleEZvck5vdGUiLCJjb25zb2xlIiwibG9nIiwiZ2V0Tm90ZUZyb21TYW1wbGVzIiwiYnVmZmVyIiwic2FtcGxlUmF0ZSIsIm4iLCJiZXN0UiIsImJlc3RLIiwiayIsInN1bSIsInIiLCJmdW5kYW1lbnRhbEZyZXEiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFD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QUFHQyxDQUFSO0FBQ0E7O0FBRUQsUUFBR0UsQ0FBQyxHQUFHLEdBQVAsRUFBWTtBQUNYO0FBQ0E7QUFDRDs7QUFFRCxNQUFHSixLQUFLLEdBQUcsTUFBWCxFQUFtQjtBQUNsQjtBQUNBLFFBQUlLLGVBQWUsR0FBR1AsVUFBVSxHQUFHRyxLQUFuQztBQUNBLFdBQU90QixZQUFZLENBQUMwQixlQUFELENBQW5CO0FBQ0EsR0FKRCxNQUtLO0FBQ0o7QUFDQSxXQUFPLEVBQVA7QUFDQTtBQUNEOztBQUFBO0FBRWM7QUFDZGpCLHFCQUFtQixFQUFFQSxtQkFEUDtBQUVkUSxvQkFBa0IsRUFBRUEsa0JBRk47QUFHZGpCLGNBQVksRUFBRUEsWUFIQTtBQUlkYyxpQkFBZSxFQUFFQTtBQUpILENBQWYsRSIsImZpbGUiOiJub3RlX2RldGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3dlYi9hc3NldHMvanMvbm90ZV9kZXRlY3Rpb24uanNcIik7XG4iLCJmdW5jdGlvbiBjb21wYXJlS2V5cyhub3RlMSwgbm90ZTIpIHtcblx0bGV0IGtleWFsaWFzZXMgPSB7XG5cdFx0J2FiJzogJ2cjJyxcblx0XHQnYScgOiAnYScsXG5cdFx0J2EjJyA6ICdiYicsXG5cdFx0J2JiJyA6ICdhIycsXG5cdFx0J2InIDogJ2NiJyxcblx0XHQnYiMnOiAnYycsXG5cdFx0J2NiJyA6ICdiJyxcblx0XHQnYycgOiAnYiMnLFxuXHRcdCdjIyc6ICdkYicsXG5cdFx0J2RiJyA6ICdjIycsXG5cdFx0J2QnIDogJ2QnLFxuXHRcdCdkIycgOiAnZWInLFxuXHRcdCdlYicgOiAnZCMnLFxuXHRcdCdlJyA6ICdmYicsXG5cdFx0J2UjJyA6ICdmJyxcblx0XHQnZmInIDogJ2UnLFxuXHRcdCdmJyA6ICdmJyxcblx0XHQnZiMnIDogJ2diJyxcblx0XHQnZ2InIDogJ2YjJyxcblx0XHQnZycgOiAnZycsXG5cdFx0J2cjJyA6ICdhYicsXG5cdH1cblx0aWYgKG5vdGUxID09IHVuZGVmaW5lZCB8fCBub3RlMiA9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIG5vdGUxLnRvTG93ZXJDYXNlKCkgPT0gbm90ZTIudG9Mb3dlckNhc2UoKSB8fCBrZXlhbGlhc2VzW25vdGUxLnRvTG93ZXJDYXNlKCldID09IG5vdGUyLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIGdldEtleUFzRmxhdChrZXkpIHtcblx0bGV0IGZsYXRfbWFwID0ge1xuXHRcdCdhYic6ICdBYicsXG5cdFx0J2EnIDogJ2EnLFxuXHRcdCdhIycgOiAnQmInLFxuXHRcdCdiYicgOiAnQmInLFxuXHRcdCdiJyA6ICdCJyxcblx0XHQnY2InIDogJ0InLFxuXHRcdCdjJyA6ICdDJyxcblx0XHQnYyMnOiAnRGInLFxuXHRcdCdkYicgOiAnRGInLFxuXHRcdCdkJyA6ICdEJyxcblx0XHQnZCMnIDogJ0ViJyxcblx0XHQnZWInIDogJ0ViJyxcblx0XHQnZScgOiAnRmInLFxuXHRcdCdlIycgOiAnRicsXG5cdFx0J2ZiJyA6ICdFJyxcblx0XHQnZicgOiAnRicsXG5cdFx0J2YjJyA6ICdHYicsXG5cdFx0J2diJyA6ICdHYicsXG5cdFx0J2cnIDogJ0cnLFxuXHRcdCdnIycgOiAnQWInLFxuXHR9XG5cdHJldHVybiBmbGF0X21hcFtrZXkudG9Mb3dlckNhc2UoKV1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRjb21wYXJlS2V5czogY29tcGFyZUtleXNcbn1cbiIsImltcG9ydCBrZXlfY29tcGFyaXNvbiBmcm9tICcuL2tleV9jb21wYXJpc29uJ1xubGV0IG5vdGVGcmVxdWVuY2llcyA9XG5cdC8vIEIgICAgICAgIEEjICAgICAgICBBICAgICAgRyMgICAgICAgRyAgICAgICAgIEYjICAgICAgIEYgICAgICAgIEUgICAgICAgICBEIyAgICAgIEQgICAgICAgIEMjICAgICAgIENcblx0Wzc5MDIuMTMsIDc0NTguNjIsIDcwNDAuMDAsIDY2NDQuODgsIDYyNzEuOTMsIDU5MTkuOTEsIDU1ODcuNjUsIDUyNzQuMDQsIDQ5NzguMDMsIDQ2OTguNjQsIDQ0MzQuOTIsIDQxODYuMDEsICAvLyA4XG5cdDM5NTEuMDcsIDM3MjkuMzEsIDM1MjAuMDAsIDMzMjIuNDQsIDMxMzUuOTYsIDI5NTkuOTYsIDI3OTMuODMsIDI2MzcuMDIsIDI0ODkuMDIsIDIzNDkuMzIsIDIyMTcuNDYsIDIwOTMuMDAsICAgLy8gN1xuXHQxOTc1LjUzLCAxODY0LjY2LCAxNzYwLjAwLCAxNjYxLjIyLCAxNTY3Ljk4LCAxNDc5Ljk4LCAxMzk2LjkxLCAxMzE4LjUxLCAxMjQ0LjUxLCAxMTc0LjY2LCAxMTA4LjczLCAxMDQ2LjUwLCAgIC8vIDZcblx0OTg3Ljc2NywgOTMyLjMyOCwgODgwLjAwMCwgODMwLjYwOSwgNzgzLjk5MSwgNzM5Ljk4OSwgNjk4LjQ1NiwgNjU5LjI1NSwgNjIyLjI1NCwgNTg3LjMzMCwgNTU0LjM2NSwgNTIzLjI1MSwgICAvLyA1XG5cdDQ5My44ODMsIDQ2Ni4xNjQsIDQ0MC4wMDAsIDQxNS4zMDUsIDM5MS45OTUsIDM2OS45OTQsIDM0OS4yMjgsIDMyOS42MjgsIDMxMS4xMjcsIDI5My42NjUsIDI3Ny4xODMsIDI2MS42MjYsICAgLy8gNFxuXHQyNDYuOTQyLCAyMzMuMDgyLCAyMjAuMDAwLCAyMDcuNjUyLCAxOTUuOTk4LCAxODQuOTk3LCAxNzQuNjE0LCAxNjQuODE0LCAxNTUuNTYzLCAxNDYuODMyLCAxMzguNTkxLCAxMzAuODEzLCAgIC8vIDNcblx0MTIzLjQ3MSwgMTE2LjU0MSwgMTEwLjAwMCwgMTAzLjgyNiwgOTcuOTk4OSwgOTIuNDk4NiwgODcuMzA3MSwgODIuNDA2OSwgNzcuNzgxNywgNzMuNDE2MiwgNjkuMjk1NywgNjUuNDA2NCwgICAvLyAyXG5cdDYxLjczNTQsIDU4LjI3MDUsIDU1LjAwMDAsIDUxLjkxMzEsIDQ4Ljk5OTQsIDQ2LjI0OTMsIDQzLjY1MzUsIDQxLjIwMzQsIDM4Ljg5MDksIDM2LjcwODEsIDM0LjY0NzgsIDMyLjcwMzIsICAgLy8gMVxuXHQzMC44Njc3LCAyOS4xMzUyLCAyNy41MDAwLCAyNS45NTY1LCAyNC40OTk3LCAyMy4xMjQ3LCAyMS44MjY4LCAyMC42MDE3LCAxOS40NDU0LCAxOC4zNTQwLCAxNy4zMjM5LCAxNi4zNTE2XTsgLy8gMFxuXG5sZXQgbm90ZU5hbWVzID0gW1wiQlwiLCBcIkEjXCIsIFwiQVwiLCBcIkcjXCIsIFwiR1wiLCBcIkYjXCIsIFwiRlwiLCBcIkVcIiwgXCJEI1wiLCBcIkRcIiwgXCJDI1wiLCBcIkNcIl07XG5cbmxldCBub3RlTmFtZUluZGV4TWFwID0ge1xuXHRcIkNcIjogMCxcblx0XCJDI1wiOiAxLFxuXHRcIkRCXCI6IDEsXG5cdFwiRFwiOiAyLFxuXHRcIkQjXCI6IDMsXG5cdFwiRUJcIjogMyxcblx0XCJFXCI6IDQsXG5cdFwiRlwiOiA1LFxuXHRcIkYjXCI6IDYsXG5cdFwiR0JcIjogNixcblx0XCJHXCI6IDcsXG5cdFwiRyNcIjogOCxcblx0XCJBQlwiOiA4LFxuXHRcIkFcIjogOSxcblx0XCJBI1wiOiAxMCxcblx0XCJCQlwiOiAxMCxcblx0XCJCXCI6IDExLFxufTtcblxuXG5mdW5jdGlvbiBlc3RpbWF0ZU5vdGUoZnJlcXVlbmN5KSB7XG5cdGxldCBsZW5ndGggPSBub3RlRnJlcXVlbmNpZXMubGVuZ3RoO1xuXHRsZXQgZnJlcXVlbmN5SW5kZXggPSAwO1xuXHRsZXQgbmV4dENsb3Nlc3RJbmRleCA9IDA7XG5cblx0Ly8gSXRlcmF0ZSB0aHJvdWdoIHRoZSBub3RlIGFycmF5IHRvIGZpbmQgdGhlIGNsb3Nlc3QgaW5kaWNlc1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCAtIDE7IGkrKykge1xuXHRcdGlmIChpID09IDAgJiYgZnJlcXVlbmN5ID4gbm90ZUZyZXF1ZW5jaWVzW2ldKSB7XG5cdFx0XHRmcmVxdWVuY3lJbmRleCA9IDA7XG5cdFx0XHRuZXh0Q2xvc2VzdEluZGV4ID0gMDtcblx0XHRcdGJyZWFrO1xuXHRcdH0gZWxzZSBpZiAobm90ZUZyZXF1ZW5jaWVzW2ldID49IGZyZXF1ZW5jeSAmJiBmcmVxdWVuY3kgPiBub3RlRnJlcXVlbmNpZXNbaSArIDFdKSB7XG5cdFx0XHRmcmVxdWVuY3lJbmRleCA9IChub3RlRnJlcXVlbmNpZXNbaV0gLSBmcmVxdWVuY3kpIDwgKGZyZXF1ZW5jeSAtIG5vdGVGcmVxdWVuY2llc1tpICsgMV0pID8gaSA6IGkgKyAxO1xuXHRcdFx0bmV4dENsb3Nlc3RJbmRleCA9IGZyZXF1ZW5jeUluZGV4ID09IGkgPyBpICsgMSA6IGk7XG5cdFx0XHRicmVhaztcblx0XHR9IGVsc2UgaWYgKGkgPT0gbGVuZ3RoIC0gMikge1xuXHRcdFx0ZnJlcXVlbmN5SW5kZXggPSBsZW5ndGggLSAxO1xuXHRcdFx0bmV4dENsb3Nlc3RJbmRleCA9IGxlbmd0aCAtIDE7XG5cdFx0fVxuXHR9XG5cblx0Ly8gR2V0IHRoZSBuYW1lIG9mIHRoZSBub3RlXG5cdHJldHVybiB7XG5cdFx0a2V5OiBub3RlTmFtZXNbKGZyZXF1ZW5jeUluZGV4KSAlIG5vdGVOYW1lcy5sZW5ndGhdLFxuXHRcdG9jdGF2ZTogOCAtIE1hdGguZmxvb3IoZnJlcXVlbmN5SW5kZXggLyBub3RlTmFtZXMubGVuZ3RoKSxcblx0fTtcbn1cblxuZnVuY3Rpb24gZ2V0RnJlcXVlbmN5Rm9yTm90ZShub3RlX25hbWUsIG5vdGVfb2N0YXZlKSB7XG5cdGxldCBub3RlTmFtZUluZGV4O1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IG5vdGVOYW1lcy5sZW5ndGg7IGkrKykge1xuXHRcdGlmIChrZXlfY29tcGFyaXNvbi5jb21wYXJlS2V5cyhub3RlX25hbWUsIG5vdGVOYW1lc1tpXSkpIHtcblx0XHRcdG5vdGVOYW1lSW5kZXggPSBpO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBub3RlRnJlcXVlbmNpZXNbbm90ZUZyZXF1ZW5jaWVzLmxlbmd0aCAtIDEgLSAobm90ZV9vY3RhdmUgKiBub3RlTmFtZXMubGVuZ3RoKSAtIChub3RlTmFtZXMubGVuZ3RoIC0gbm90ZU5hbWVJbmRleCAtIDEpXVxufVxuXG5mdW5jdGlvbiBnZXRJbmRleEZvck5vdGUobm90ZV9uYW1lLCBub3RlX29jdGF2ZSkge1xuXHRjb25zb2xlLmxvZyhub3RlX25hbWUpO1xuXHRyZXR1cm4gbm90ZV9vY3RhdmUgKiAxMiArIG5vdGVOYW1lSW5kZXhNYXBbbm90ZV9uYW1lXVxufVxuXG5mdW5jdGlvbiBnZXROb3RlRnJvbVNhbXBsZXMoYnVmZmVyLCBzYW1wbGVSYXRlKSB7XG5cblx0Ly8gV2UgdXNlIEF1dG9jb3JyZWxhdGlvbiB0byBmaW5kIHRoZSBmdW5kYW1lbnRhbCBmcmVxdWVuY3kuXG5cblx0Ly8gSW4gb3JkZXIgdG8gY29ycmVsYXRlIHRoZSBzaWduYWwgd2l0aCBpdHNlbGYgKGhlbmNlIHRoZSBuYW1lIG9mIHRoZSBhbGdvcml0aG0pLCB3ZSB3aWxsIGNoZWNrIHR3byBwb2ludHMgJ2snIGZyYW1lcyBhd2F5LlxuXHQvLyBUaGUgYXV0b2NvcnJlbGF0aW9uIGluZGV4IHdpbGwgYmUgdGhlIGF2ZXJhZ2Ugb2YgdGhlc2UgcHJvZHVjdHMuIEF0IHRoZSBzYW1lIHRpbWUsIHdlIG5vcm1hbGl6ZSB0aGUgdmFsdWVzLlxuXHQvLyBTb3VyY2U6IGh0dHA6Ly93d3cucGh5Lm10eS5lZHUvfnN1aXRzL2F1dG9jb3JyZWxhdGlvbi5odG1sXG5cdC8vIEFzc3VtaW5nIHRoZSBzYW1wbGUgcmF0ZSBpcyA0ODAwMEh6LCBhICdrJyBlcXVhbCB0byAxMDAwIHdvdWxkIGNvcnJlc3BvbmQgdG8gYSA0OEh6IHNpZ25hbCAoNDgwMDAvMTAwMCA9IDQ4KSxcblx0Ly8gd2hpbGUgYSAnaycgZXF1YWwgdG8gOCB3b3VsZCBjb3JyZXNwb25kIHRvIGEgNjAwMEh6IG9uZSwgd2hpY2ggaXMgZW5vdWdoIHRvIGNvdmVyIG1vc3QgKGlmIG5vdCBhbGwpXG5cdC8vIHRoZSBub3RlcyB3ZSBoYXZlIGluIHRoZSBub3Rlcy5qc29uIGZpbGUuXG5cblx0dmFyIG4gPSAxMDI0LCBiZXN0UiA9IDAsIGJlc3RLID0gLTE7XG5cdGZvcih2YXIgayA9IDg7IGsgPD0gMTAwMDsgaysrKXtcblxuXHRcdHZhciBzdW0gPSAwO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcblx0XHRcdHN1bSArPSAoKGJ1ZmZlcltpXSAtIDEyOCkgLyAxMjgpICogKChidWZmZXJbaSArIGtdIC0gMTI4KSAvIDEyOCk7XG5cdFx0fVxuXG5cdFx0dmFyIHIgPSBzdW0gLyAobiArIGspO1xuXG5cdFx0aWYociA+IGJlc3RSKXtcblx0XHRcdGJlc3RSID0gcjtcblx0XHRcdGJlc3RLID0gaztcblx0XHR9XG5cblx0XHRpZihyID4gMC45KSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRpZihiZXN0UiA+IDAuMDAyNSkge1xuXHRcdC8vIFRoZSBwZXJpb2QgKGluIGZyYW1lcykgb2YgdGhlIGZ1bmRhbWVudGFsIGZyZXF1ZW5jeSBpcyAnYmVzdEsnLiBHZXR0aW5nIHRoZSBmcmVxdWVuY3kgZnJvbSB0aGVyZSBpcyB0cml2aWFsLlxuXHRcdHZhciBmdW5kYW1lbnRhbEZyZXEgPSBzYW1wbGVSYXRlIC8gYmVzdEs7XG5cdFx0cmV0dXJuIGVzdGltYXRlTm90ZShmdW5kYW1lbnRhbEZyZXEpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIFdlIGhhdmVuJ3QgZm91bmQgYSBnb29kIGNvcnJlbGF0aW9uXG5cdFx0cmV0dXJuIFtdO1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGdldEZyZXF1ZW5jeUZvck5vdGU6IGdldEZyZXF1ZW5jeUZvck5vdGUsXG5cdGdldE5vdGVGcm9tU2FtcGxlczogZ2V0Tm90ZUZyb21TYW1wbGVzLFxuXHRlc3RpbWF0ZU5vdGU6IGVzdGltYXRlTm90ZSxcblx0Z2V0SW5kZXhGb3JOb3RlOiBnZXRJbmRleEZvck5vdGUsXG59XG4iXSwic291cmNlUm9vdCI6IiJ9