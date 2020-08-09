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
  var t0 = performance.now();
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
  getNoteFromSamples: getNoteFromSamples
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9rZXlfY29tcGFyaXNvbi5qcyIsIndlYnBhY2s6Ly8vLi93ZWIvYXNzZXRzL2pzL25vdGVfZGV0ZWN0aW9uLmpzIl0sIm5hbWVzIjpbImNvbXBhcmVLZXlzIiwibm90ZTEiLCJub3RlMiIsImtleWFsaWFzZXMiLCJ1bmRlZmluZWQiLCJ0b0xvd2VyQ2FzZSIsImdldEtleUFzRmxhdCIsImtleSIsImZsYXRfbWFwIiwibm90ZUZyZXF1ZW5jaWVzIiwibm90ZU5hbWVzIiwiZXN0aW1hdGVOb3RlIiwiZnJlcXVlbmN5IiwibGVuZ3RoIiwiZnJlcXVlbmN5SW5kZXgiLCJuZXh0Q2xvc2VzdEluZGV4IiwiaSIsIm9jdGF2ZSIsIk1hdGgiLCJmbG9vciIsImdldEZyZXF1ZW5jeUZvck5vdGUiLCJub3RlX25hbWUiLCJub3RlX29jdGF2ZSIsIm5vdGVOYW1lSW5kZXgiLCJrZXlfY29tcGFyaXNvbiIsImdldE5vdGVGcm9tU2FtcGxlcyIsImJ1ZmZlciIsInNhbXBsZVJhdGUiLCJ0MCIsInBlcmZvcm1hbmNlIiwibm93IiwibiIsImJlc3RSIiwiYmVzdEsiLCJrIiwic3VtIiwiciIsImZ1bmRhbWVudGFsRnJlcSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCQyxLQUE1QixFQUFtQztBQUNsQyxNQUFJQyxVQUFVLEdBQUc7QUFDaEIsVUFBTSxJQURVO0FBRWhCLFNBQU0sR0FGVTtBQUdoQixVQUFPLElBSFM7QUFJaEIsVUFBTyxJQUpTO0FBS2hCLFNBQU0sSUFMVTtBQU1oQixVQUFNLEdBTlU7QUFPaEIsVUFBTyxHQVBTO0FBUWhCLFNBQU0sSUFSVTtBQVNoQixVQUFNLElBVFU7QUFVaEIsVUFBTyxJQVZTO0FBV2hCLFNBQU0sR0FYVTtBQVloQixVQUFPLElBWlM7QUFhaEIsVUFBTyxJQWJTO0FBY2hCLFNBQU0sSUFkVTtBQWVoQixVQUFPLEdBZlM7QUFnQmhCLFVBQU8sR0FoQlM7QUFpQmhCLFNBQU0sR0FqQlU7QUFrQmhCLFVBQU8sSUFsQlM7QUFtQmhCLFVBQU8sSUFuQlM7QUFvQmhCLFNBQU0sR0FwQlU7QUFxQmhCLFVBQU87QUFyQlMsR0FBakI7O0FBdUJBLE1BQUlGLEtBQUssSUFBSUcsU0FBVCxJQUFzQkYsS0FBSyxJQUFJRSxTQUFuQyxFQUE4QztBQUM3QyxXQUFPLEtBQVA7QUFDQTs7QUFDRCxTQUFPSCxLQUFLLENBQUNJLFdBQU4sTUFBdUJILEtBQUssQ0FBQ0csV0FBTixFQUF2QixJQUE4Q0YsVUFBVSxDQUFDRixLQUFLLENBQUNJLFdBQU4sRUFBRCxDQUFWLElBQW1DSCxLQUFLLENBQUNHLFdBQU4sRUFBeEY7QUFDQTs7QUFFRCxTQUFTQyxZQUFULENBQXNCQyxHQUF0QixFQUEyQjtBQUMxQixNQUFJQyxRQUFRLEdBQUc7QUFDZCxVQUFNLElBRFE7QUFFZCxTQUFNLEdBRlE7QUFHZCxVQUFPLElBSE87QUFJZCxVQUFPLElBSk87QUFLZCxTQUFNLEdBTFE7QUFNZCxVQUFPLEdBTk87QUFPZCxTQUFNLEdBUFE7QUFRZCxVQUFNLElBUlE7QUFTZCxVQUFPLElBVE87QUFVZCxTQUFNLEdBVlE7QUFXZCxVQUFPLElBWE87QUFZZCxVQUFPLElBWk87QUFhZCxTQUFNLElBYlE7QUFjZCxVQUFPLEdBZE87QUFlZCxVQUFPLEdBZk87QUFnQmQsU0FBTSxHQWhCUTtBQWlCZCxVQUFPLElBakJPO0FBa0JkLFVBQU8sSUFsQk87QUFtQmQsU0FBTSxHQW5CUTtBQW9CZCxVQUFPO0FBcEJPLEdBQWY7QUFzQkEsU0FBT0EsUUFBUSxDQUFDRCxHQUFHLENBQUNGLFdBQUosRUFBRCxDQUFmO0FBQ0E7O0FBRWM7QUFDZEwsYUFBVyxFQUFFQTtBQURDLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDeERBO0FBQUE7QUFBQTtBQUNBLElBQUlTLGVBQWUsR0FDbEI7QUFDQSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLE9BQW5CLEVBQTRCLE9BQTVCLEVBQXFDLE9BQXJDLEVBQThDLE9BQTlDLEVBQXVELE9BQXZELEVBQWdFLE9BQWhFLEVBQXlFLE9BQXpFLEVBQWtGLE9BQWxGLEVBQTJGLE9BQTNGLEVBQW9HLE9BQXBHLEVBQThHO0FBQzlHLE9BREEsRUFDUyxPQURULEVBQ2tCLE9BRGxCLEVBQzJCLE9BRDNCLEVBQ29DLE9BRHBDLEVBQzZDLE9BRDdDLEVBQ3NELE9BRHRELEVBQytELE9BRC9ELEVBQ3dFLE9BRHhFLEVBQ2lGLE9BRGpGLEVBQzBGLE9BRDFGLEVBQ21HLE9BRG5HLEVBQzhHO0FBQzlHLE9BRkEsRUFFUyxPQUZULEVBRWtCLE9BRmxCLEVBRTJCLE9BRjNCLEVBRW9DLE9BRnBDLEVBRTZDLE9BRjdDLEVBRXNELE9BRnRELEVBRStELE9BRi9ELEVBRXdFLE9BRnhFLEVBRWlGLE9BRmpGLEVBRTBGLE9BRjFGLEVBRW1HLE9BRm5HLEVBRThHO0FBQzlHLE9BSEEsRUFHUyxPQUhULEVBR2tCLE9BSGxCLEVBRzJCLE9BSDNCLEVBR29DLE9BSHBDLEVBRzZDLE9BSDdDLEVBR3NELE9BSHRELEVBRytELE9BSC9ELEVBR3dFLE9BSHhFLEVBR2lGLE9BSGpGLEVBRzBGLE9BSDFGLEVBR21HLE9BSG5HLEVBRzhHO0FBQzlHLE9BSkEsRUFJUyxPQUpULEVBSWtCLE9BSmxCLEVBSTJCLE9BSjNCLEVBSW9DLE9BSnBDLEVBSTZDLE9BSjdDLEVBSXNELE9BSnRELEVBSStELE9BSi9ELEVBSXdFLE9BSnhFLEVBSWlGLE9BSmpGLEVBSTBGLE9BSjFGLEVBSW1HLE9BSm5HLEVBSThHO0FBQzlHLE9BTEEsRUFLUyxPQUxULEVBS2tCLE9BTGxCLEVBSzJCLE9BTDNCLEVBS29DLE9BTHBDLEVBSzZDLE9BTDdDLEVBS3NELE9BTHRELEVBSytELE9BTC9ELEVBS3dFLE9BTHhFLEVBS2lGLE9BTGpGLEVBSzBGLE9BTDFGLEVBS21HLE9BTG5HLEVBSzhHO0FBQzlHLE9BTkEsRUFNUyxPQU5ULEVBTWtCLE9BTmxCLEVBTTJCLE9BTjNCLEVBTW9DLE9BTnBDLEVBTTZDLE9BTjdDLEVBTXNELE9BTnRELEVBTStELE9BTi9ELEVBTXdFLE9BTnhFLEVBTWlGLE9BTmpGLEVBTTBGLE9BTjFGLEVBTW1HLE9BTm5HLEVBTThHO0FBQzlHLE9BUEEsRUFPUyxPQVBULEVBT2tCLE9BUGxCLEVBTzJCLE9BUDNCLEVBT29DLE9BUHBDLEVBTzZDLE9BUDdDLEVBT3NELE9BUHRELEVBTytELE9BUC9ELEVBT3dFLE9BUHhFLEVBT2lGLE9BUGpGLEVBTzBGLE9BUDFGLEVBT21HLE9BUG5HLEVBTzhHO0FBQzlHLE9BUkEsRUFRUyxPQVJULEVBUWtCLE9BUmxCLEVBUTJCLE9BUjNCLEVBUW9DLE9BUnBDLEVBUTZDLE9BUjdDLEVBUXNELE9BUnRELEVBUStELE9BUi9ELEVBUXdFLE9BUnhFLEVBUWlGLE9BUmpGLEVBUTBGLE9BUjFGLEVBUW1HLE9BUm5HLENBRkQsQyxDQVU4Rzs7QUFFOUcsSUFBSUMsU0FBUyxHQUFHLENBQUMsR0FBRCxFQUFNLElBQU4sRUFBWSxHQUFaLEVBQWlCLElBQWpCLEVBQXVCLEdBQXZCLEVBQTRCLElBQTVCLEVBQWtDLEdBQWxDLEVBQXVDLEdBQXZDLEVBQTRDLElBQTVDLEVBQWtELEdBQWxELEVBQXVELElBQXZELEVBQTZELEdBQTdELENBQWhCOztBQUVBLFNBQVNDLFlBQVQsQ0FBc0JDLFNBQXRCLEVBQWlDO0FBQ2hDLE1BQUlDLE1BQU0sR0FBR0osZUFBZSxDQUFDSSxNQUE3QjtBQUNBLE1BQUlDLGNBQWMsR0FBRyxDQUFyQjtBQUNBLE1BQUlDLGdCQUFnQixHQUFHLENBQXZCLENBSGdDLENBS2hDOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsTUFBTSxHQUFHLENBQTdCLEVBQWdDRyxDQUFDLEVBQWpDLEVBQXFDO0FBQ3BDLFFBQUlBLENBQUMsSUFBSSxDQUFMLElBQVVKLFNBQVMsR0FBR0gsZUFBZSxDQUFDTyxDQUFELENBQXpDLEVBQThDO0FBQzdDRixvQkFBYyxHQUFHLENBQWpCO0FBQ0FDLHNCQUFnQixHQUFHLENBQW5CO0FBQ0E7QUFDQSxLQUpELE1BSU8sSUFBSU4sZUFBZSxDQUFDTyxDQUFELENBQWYsSUFBc0JKLFNBQXRCLElBQW1DQSxTQUFTLEdBQUdILGVBQWUsQ0FBQ08sQ0FBQyxHQUFHLENBQUwsQ0FBbEUsRUFBMkU7QUFDakZGLG9CQUFjLEdBQUlMLGVBQWUsQ0FBQ08sQ0FBRCxDQUFmLEdBQXFCSixTQUF0QixHQUFvQ0EsU0FBUyxHQUFHSCxlQUFlLENBQUNPLENBQUMsR0FBRyxDQUFMLENBQS9ELEdBQTBFQSxDQUExRSxHQUE4RUEsQ0FBQyxHQUFHLENBQW5HO0FBQ0FELHNCQUFnQixHQUFHRCxjQUFjLElBQUlFLENBQWxCLEdBQXNCQSxDQUFDLEdBQUcsQ0FBMUIsR0FBOEJBLENBQWpEO0FBQ0E7QUFDQSxLQUpNLE1BSUEsSUFBSUEsQ0FBQyxJQUFJSCxNQUFNLEdBQUcsQ0FBbEIsRUFBcUI7QUFDM0JDLG9CQUFjLEdBQUdELE1BQU0sR0FBRyxDQUExQjtBQUNBRSxzQkFBZ0IsR0FBR0YsTUFBTSxHQUFHLENBQTVCO0FBQ0E7QUFDRCxHQW5CK0IsQ0FxQmhDOzs7QUFDQSxTQUFPO0FBQ05OLE9BQUcsRUFBRUcsU0FBUyxDQUFFSSxjQUFELEdBQW1CSixTQUFTLENBQUNHLE1BQTlCLENBRFI7QUFFTkksVUFBTSxFQUFFLElBQUlDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxjQUFjLEdBQUdKLFNBQVMsQ0FBQ0csTUFBdEM7QUFGTixHQUFQO0FBSUE7O0FBRUQsU0FBU08sbUJBQVQsQ0FBNkJDLFNBQTdCLEVBQXdDQyxXQUF4QyxFQUFxRDtBQUNwRCxNQUFJQyxhQUFKOztBQUNBLE9BQUssSUFBSVAsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR04sU0FBUyxDQUFDRyxNQUE5QixFQUFzQ0csQ0FBQyxFQUF2QyxFQUEyQztBQUMxQyxRQUFJUSx1REFBYyxDQUFDeEIsV0FBZixDQUEyQnFCLFNBQTNCLEVBQXNDWCxTQUFTLENBQUNNLENBQUQsQ0FBL0MsQ0FBSixFQUF5RDtBQUN4RE8sbUJBQWEsR0FBR1AsQ0FBaEI7QUFDQTtBQUNBO0FBQ0Q7O0FBQ0QsU0FBT1AsZUFBZSxDQUFDQSxlQUFlLENBQUNJLE1BQWhCLEdBQXlCLENBQXpCLEdBQThCUyxXQUFXLEdBQUdaLFNBQVMsQ0FBQ0csTUFBdEQsSUFBaUVILFNBQVMsQ0FBQ0csTUFBVixHQUFtQlUsYUFBbkIsR0FBbUMsQ0FBcEcsQ0FBRCxDQUF0QjtBQUNBOztBQUVELFNBQVNFLGtCQUFULENBQTRCQyxNQUE1QixFQUFvQ0MsVUFBcEMsRUFBZ0Q7QUFFL0M7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFJQyxFQUFFLEdBQUdDLFdBQVcsQ0FBQ0MsR0FBWixFQUFUO0FBQ0EsTUFBSUMsQ0FBQyxHQUFHLElBQVI7QUFBQSxNQUFjQyxLQUFLLEdBQUcsQ0FBdEI7QUFBQSxNQUF5QkMsS0FBSyxHQUFHLENBQUMsQ0FBbEM7O0FBQ0EsT0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLElBQUksSUFBcEIsRUFBMEJBLENBQUMsRUFBM0IsRUFBOEI7QUFFN0IsUUFBSUMsR0FBRyxHQUFHLENBQVY7O0FBQ0EsU0FBSSxJQUFJbkIsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHZSxDQUFuQixFQUFzQmYsQ0FBQyxFQUF2QixFQUEyQjtBQUMxQm1CLFNBQUcsSUFBSyxDQUFDVCxNQUFNLENBQUNWLENBQUQsQ0FBTixHQUFZLEdBQWIsSUFBb0IsR0FBckIsSUFBNkIsQ0FBQ1UsTUFBTSxDQUFDVixDQUFDLEdBQUdrQixDQUFMLENBQU4sR0FBZ0IsR0FBakIsSUFBd0IsR0FBckQsQ0FBUDtBQUNBOztBQUVELFFBQUlFLENBQUMsR0FBR0QsR0FBRyxJQUFJSixDQUFDLEdBQUdHLENBQVIsQ0FBWDs7QUFFQSxRQUFHRSxDQUFDLEdBQUdKLEtBQVAsRUFBYTtBQUNaQSxXQUFLLEdBQUdJLENBQVI7QUFDQUgsV0FBSyxHQUFHQyxDQUFSO0FBQ0E7O0FBRUQsUUFBR0UsQ0FBQyxHQUFHLEdBQVAsRUFBWTtBQUNYO0FBQ0E7QUFDRDs7QUFFRCxNQUFHSixLQUFLLEdBQUcsTUFBWCxFQUFtQjtBQUNsQjtBQUNBLFFBQUlLLGVBQWUsR0FBR1YsVUFBVSxHQUFHTSxLQUFuQztBQUNBLFdBQU90QixZQUFZLENBQUMwQixlQUFELENBQW5CO0FBQ0EsR0FKRCxNQUtLO0FBQ0o7QUFDQSxXQUFPLEVBQVA7QUFDQTtBQUNEOztBQUFBO0FBRWM7QUFDZGpCLHFCQUFtQixFQUFFQSxtQkFEUDtBQUVkSyxvQkFBa0IsRUFBRUE7QUFGTixDQUFmLEUiLCJmaWxlIjoibm90ZV9kZXRlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93ZWIvYXNzZXRzL2pzL25vdGVfZGV0ZWN0aW9uLmpzXCIpO1xuIiwiZnVuY3Rpb24gY29tcGFyZUtleXMobm90ZTEsIG5vdGUyKSB7XG5cdGxldCBrZXlhbGlhc2VzID0ge1xuXHRcdCdhYic6ICdnIycsXG5cdFx0J2EnIDogJ2EnLFxuXHRcdCdhIycgOiAnYmInLFxuXHRcdCdiYicgOiAnYSMnLFxuXHRcdCdiJyA6ICdjYicsXG5cdFx0J2IjJzogJ2MnLFxuXHRcdCdjYicgOiAnYicsXG5cdFx0J2MnIDogJ2IjJyxcblx0XHQnYyMnOiAnZGInLFxuXHRcdCdkYicgOiAnYyMnLFxuXHRcdCdkJyA6ICdkJyxcblx0XHQnZCMnIDogJ2ViJyxcblx0XHQnZWInIDogJ2QjJyxcblx0XHQnZScgOiAnZmInLFxuXHRcdCdlIycgOiAnZicsXG5cdFx0J2ZiJyA6ICdlJyxcblx0XHQnZicgOiAnZicsXG5cdFx0J2YjJyA6ICdnYicsXG5cdFx0J2diJyA6ICdmIycsXG5cdFx0J2cnIDogJ2cnLFxuXHRcdCdnIycgOiAnYWInLFxuXHR9XG5cdGlmIChub3RlMSA9PSB1bmRlZmluZWQgfHwgbm90ZTIgPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiBub3RlMS50b0xvd2VyQ2FzZSgpID09IG5vdGUyLnRvTG93ZXJDYXNlKCkgfHwga2V5YWxpYXNlc1tub3RlMS50b0xvd2VyQ2FzZSgpXSA9PSBub3RlMi50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBnZXRLZXlBc0ZsYXQoa2V5KSB7XG5cdGxldCBmbGF0X21hcCA9IHtcblx0XHQnYWInOiAnQWInLFxuXHRcdCdhJyA6ICdhJyxcblx0XHQnYSMnIDogJ0JiJyxcblx0XHQnYmInIDogJ0JiJyxcblx0XHQnYicgOiAnQicsXG5cdFx0J2NiJyA6ICdCJyxcblx0XHQnYycgOiAnQycsXG5cdFx0J2MjJzogJ0RiJyxcblx0XHQnZGInIDogJ0RiJyxcblx0XHQnZCcgOiAnRCcsXG5cdFx0J2QjJyA6ICdFYicsXG5cdFx0J2ViJyA6ICdFYicsXG5cdFx0J2UnIDogJ0ZiJyxcblx0XHQnZSMnIDogJ0YnLFxuXHRcdCdmYicgOiAnRScsXG5cdFx0J2YnIDogJ0YnLFxuXHRcdCdmIycgOiAnR2InLFxuXHRcdCdnYicgOiAnR2InLFxuXHRcdCdnJyA6ICdHJyxcblx0XHQnZyMnIDogJ0FiJyxcblx0fVxuXHRyZXR1cm4gZmxhdF9tYXBba2V5LnRvTG93ZXJDYXNlKCldXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Y29tcGFyZUtleXM6IGNvbXBhcmVLZXlzXG59XG4iLCJpbXBvcnQga2V5X2NvbXBhcmlzb24gZnJvbSAnLi9rZXlfY29tcGFyaXNvbidcbmxldCBub3RlRnJlcXVlbmNpZXMgPVxuXHQvLyBCICAgICAgICBBIyAgICAgICAgQSAgICAgIEcjICAgICAgIEcgICAgICAgICBGIyAgICAgICBGICAgICAgICBFICAgICAgICAgRCMgICAgICBEICAgICAgICBDIyAgICAgICBDXG5cdFs3OTAyLjEzLCA3NDU4LjYyLCA3MDQwLjAwLCA2NjQ0Ljg4LCA2MjcxLjkzLCA1OTE5LjkxLCA1NTg3LjY1LCA1Mjc0LjA0LCA0OTc4LjAzLCA0Njk4LjY0LCA0NDM0LjkyLCA0MTg2LjAxLCAgLy8gOFxuXHQzOTUxLjA3LCAzNzI5LjMxLCAzNTIwLjAwLCAzMzIyLjQ0LCAzMTM1Ljk2LCAyOTU5Ljk2LCAyNzkzLjgzLCAyNjM3LjAyLCAyNDg5LjAyLCAyMzQ5LjMyLCAyMjE3LjQ2LCAyMDkzLjAwLCAgIC8vIDdcblx0MTk3NS41MywgMTg2NC42NiwgMTc2MC4wMCwgMTY2MS4yMiwgMTU2Ny45OCwgMTQ3OS45OCwgMTM5Ni45MSwgMTMxOC41MSwgMTI0NC41MSwgMTE3NC42NiwgMTEwOC43MywgMTA0Ni41MCwgICAvLyA2XG5cdDk4Ny43NjcsIDkzMi4zMjgsIDg4MC4wMDAsIDgzMC42MDksIDc4My45OTEsIDczOS45ODksIDY5OC40NTYsIDY1OS4yNTUsIDYyMi4yNTQsIDU4Ny4zMzAsIDU1NC4zNjUsIDUyMy4yNTEsICAgLy8gNVxuXHQ0OTMuODgzLCA0NjYuMTY0LCA0NDAuMDAwLCA0MTUuMzA1LCAzOTEuOTk1LCAzNjkuOTk0LCAzNDkuMjI4LCAzMjkuNjI4LCAzMTEuMTI3LCAyOTMuNjY1LCAyNzcuMTgzLCAyNjEuNjI2LCAgIC8vIDRcblx0MjQ2Ljk0MiwgMjMzLjA4MiwgMjIwLjAwMCwgMjA3LjY1MiwgMTk1Ljk5OCwgMTg0Ljk5NywgMTc0LjYxNCwgMTY0LjgxNCwgMTU1LjU2MywgMTQ2LjgzMiwgMTM4LjU5MSwgMTMwLjgxMywgICAvLyAzXG5cdDEyMy40NzEsIDExNi41NDEsIDExMC4wMDAsIDEwMy44MjYsIDk3Ljk5ODksIDkyLjQ5ODYsIDg3LjMwNzEsIDgyLjQwNjksIDc3Ljc4MTcsIDczLjQxNjIsIDY5LjI5NTcsIDY1LjQwNjQsICAgLy8gMlxuXHQ2MS43MzU0LCA1OC4yNzA1LCA1NS4wMDAwLCA1MS45MTMxLCA0OC45OTk0LCA0Ni4yNDkzLCA0My42NTM1LCA0MS4yMDM0LCAzOC44OTA5LCAzNi43MDgxLCAzNC42NDc4LCAzMi43MDMyLCAgIC8vIDFcblx0MzAuODY3NywgMjkuMTM1MiwgMjcuNTAwMCwgMjUuOTU2NSwgMjQuNDk5NywgMjMuMTI0NywgMjEuODI2OCwgMjAuNjAxNywgMTkuNDQ1NCwgMTguMzU0MCwgMTcuMzIzOSwgMTYuMzUxNl07IC8vIDBcblxubGV0IG5vdGVOYW1lcyA9IFtcIkJcIiwgXCJBI1wiLCBcIkFcIiwgXCJHI1wiLCBcIkdcIiwgXCJGI1wiLCBcIkZcIiwgXCJFXCIsIFwiRCNcIiwgXCJEXCIsIFwiQyNcIiwgXCJDXCJdO1xuXG5mdW5jdGlvbiBlc3RpbWF0ZU5vdGUoZnJlcXVlbmN5KSB7XG5cdGxldCBsZW5ndGggPSBub3RlRnJlcXVlbmNpZXMubGVuZ3RoO1xuXHRsZXQgZnJlcXVlbmN5SW5kZXggPSAwO1xuXHRsZXQgbmV4dENsb3Nlc3RJbmRleCA9IDA7XG5cblx0Ly8gSXRlcmF0ZSB0aHJvdWdoIHRoZSBub3RlIGFycmF5IHRvIGZpbmQgdGhlIGNsb3Nlc3QgaW5kaWNlc1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCAtIDE7IGkrKykge1xuXHRcdGlmIChpID09IDAgJiYgZnJlcXVlbmN5ID4gbm90ZUZyZXF1ZW5jaWVzW2ldKSB7XG5cdFx0XHRmcmVxdWVuY3lJbmRleCA9IDA7XG5cdFx0XHRuZXh0Q2xvc2VzdEluZGV4ID0gMDtcblx0XHRcdGJyZWFrO1xuXHRcdH0gZWxzZSBpZiAobm90ZUZyZXF1ZW5jaWVzW2ldID49IGZyZXF1ZW5jeSAmJiBmcmVxdWVuY3kgPiBub3RlRnJlcXVlbmNpZXNbaSArIDFdKSB7XG5cdFx0XHRmcmVxdWVuY3lJbmRleCA9IChub3RlRnJlcXVlbmNpZXNbaV0gLSBmcmVxdWVuY3kpIDwgKGZyZXF1ZW5jeSAtIG5vdGVGcmVxdWVuY2llc1tpICsgMV0pID8gaSA6IGkgKyAxO1xuXHRcdFx0bmV4dENsb3Nlc3RJbmRleCA9IGZyZXF1ZW5jeUluZGV4ID09IGkgPyBpICsgMSA6IGk7XG5cdFx0XHRicmVhaztcblx0XHR9IGVsc2UgaWYgKGkgPT0gbGVuZ3RoIC0gMikge1xuXHRcdFx0ZnJlcXVlbmN5SW5kZXggPSBsZW5ndGggLSAxO1xuXHRcdFx0bmV4dENsb3Nlc3RJbmRleCA9IGxlbmd0aCAtIDE7XG5cdFx0fVxuXHR9XG5cblx0Ly8gR2V0IHRoZSBuYW1lIG9mIHRoZSBub3RlXG5cdHJldHVybiB7XG5cdFx0a2V5OiBub3RlTmFtZXNbKGZyZXF1ZW5jeUluZGV4KSAlIG5vdGVOYW1lcy5sZW5ndGhdLFxuXHRcdG9jdGF2ZTogOCAtIE1hdGguZmxvb3IoZnJlcXVlbmN5SW5kZXggLyBub3RlTmFtZXMubGVuZ3RoKSxcblx0fTtcbn1cblxuZnVuY3Rpb24gZ2V0RnJlcXVlbmN5Rm9yTm90ZShub3RlX25hbWUsIG5vdGVfb2N0YXZlKSB7XG5cdGxldCBub3RlTmFtZUluZGV4O1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IG5vdGVOYW1lcy5sZW5ndGg7IGkrKykge1xuXHRcdGlmIChrZXlfY29tcGFyaXNvbi5jb21wYXJlS2V5cyhub3RlX25hbWUsIG5vdGVOYW1lc1tpXSkpIHtcblx0XHRcdG5vdGVOYW1lSW5kZXggPSBpO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBub3RlRnJlcXVlbmNpZXNbbm90ZUZyZXF1ZW5jaWVzLmxlbmd0aCAtIDEgLSAobm90ZV9vY3RhdmUgKiBub3RlTmFtZXMubGVuZ3RoKSAtIChub3RlTmFtZXMubGVuZ3RoIC0gbm90ZU5hbWVJbmRleCAtIDEpXVxufVxuXG5mdW5jdGlvbiBnZXROb3RlRnJvbVNhbXBsZXMoYnVmZmVyLCBzYW1wbGVSYXRlKSB7XG5cblx0Ly8gV2UgdXNlIEF1dG9jb3JyZWxhdGlvbiB0byBmaW5kIHRoZSBmdW5kYW1lbnRhbCBmcmVxdWVuY3kuXG5cblx0Ly8gSW4gb3JkZXIgdG8gY29ycmVsYXRlIHRoZSBzaWduYWwgd2l0aCBpdHNlbGYgKGhlbmNlIHRoZSBuYW1lIG9mIHRoZSBhbGdvcml0aG0pLCB3ZSB3aWxsIGNoZWNrIHR3byBwb2ludHMgJ2snIGZyYW1lcyBhd2F5LlxuXHQvLyBUaGUgYXV0b2NvcnJlbGF0aW9uIGluZGV4IHdpbGwgYmUgdGhlIGF2ZXJhZ2Ugb2YgdGhlc2UgcHJvZHVjdHMuIEF0IHRoZSBzYW1lIHRpbWUsIHdlIG5vcm1hbGl6ZSB0aGUgdmFsdWVzLlxuXHQvLyBTb3VyY2U6IGh0dHA6Ly93d3cucGh5Lm10eS5lZHUvfnN1aXRzL2F1dG9jb3JyZWxhdGlvbi5odG1sXG5cdC8vIEFzc3VtaW5nIHRoZSBzYW1wbGUgcmF0ZSBpcyA0ODAwMEh6LCBhICdrJyBlcXVhbCB0byAxMDAwIHdvdWxkIGNvcnJlc3BvbmQgdG8gYSA0OEh6IHNpZ25hbCAoNDgwMDAvMTAwMCA9IDQ4KSxcblx0Ly8gd2hpbGUgYSAnaycgZXF1YWwgdG8gOCB3b3VsZCBjb3JyZXNwb25kIHRvIGEgNjAwMEh6IG9uZSwgd2hpY2ggaXMgZW5vdWdoIHRvIGNvdmVyIG1vc3QgKGlmIG5vdCBhbGwpXG5cdC8vIHRoZSBub3RlcyB3ZSBoYXZlIGluIHRoZSBub3Rlcy5qc29uIGZpbGUuXG5cblx0bGV0IHQwID0gcGVyZm9ybWFuY2Uubm93KClcblx0dmFyIG4gPSAxMDI0LCBiZXN0UiA9IDAsIGJlc3RLID0gLTE7XG5cdGZvcih2YXIgayA9IDg7IGsgPD0gMTAwMDsgaysrKXtcblxuXHRcdHZhciBzdW0gPSAwO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcblx0XHRcdHN1bSArPSAoKGJ1ZmZlcltpXSAtIDEyOCkgLyAxMjgpICogKChidWZmZXJbaSArIGtdIC0gMTI4KSAvIDEyOCk7XG5cdFx0fVxuXG5cdFx0dmFyIHIgPSBzdW0gLyAobiArIGspO1xuXG5cdFx0aWYociA+IGJlc3RSKXtcblx0XHRcdGJlc3RSID0gcjtcblx0XHRcdGJlc3RLID0gaztcblx0XHR9XG5cblx0XHRpZihyID4gMC45KSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRpZihiZXN0UiA+IDAuMDAyNSkge1xuXHRcdC8vIFRoZSBwZXJpb2QgKGluIGZyYW1lcykgb2YgdGhlIGZ1bmRhbWVudGFsIGZyZXF1ZW5jeSBpcyAnYmVzdEsnLiBHZXR0aW5nIHRoZSBmcmVxdWVuY3kgZnJvbSB0aGVyZSBpcyB0cml2aWFsLlxuXHRcdHZhciBmdW5kYW1lbnRhbEZyZXEgPSBzYW1wbGVSYXRlIC8gYmVzdEs7XG5cdFx0cmV0dXJuIGVzdGltYXRlTm90ZShmdW5kYW1lbnRhbEZyZXEpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIFdlIGhhdmVuJ3QgZm91bmQgYSBnb29kIGNvcnJlbGF0aW9uXG5cdFx0cmV0dXJuIFtdO1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGdldEZyZXF1ZW5jeUZvck5vdGU6IGdldEZyZXF1ZW5jeUZvck5vdGUsXG5cdGdldE5vdGVGcm9tU2FtcGxlczogZ2V0Tm90ZUZyb21TYW1wbGVzLFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==