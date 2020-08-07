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

function getNoteFromWave(wave) {
  var frequency = estimateFrequency(wave);

  if (frequency != -1) {
    return estimateNote(frequency);
  }

  return [];
}

function estimateFrequency(wave) {
  function autoCorrelationDifference(wave) {
    var compressedWave = new Array(wave.length / 2);
    var compressedResultBuffer = new Array(compressedWave.length / 2);
    var resultBuffer = new Array(wave.length / 2);

    for (var i = 0; i < wave.length - 1; i += 2) {
      compressedWave[i / 2] = (wave[i] + wave[i + 1]) / 2;
    }

    for (var j = 0; j < compressedResultBuffer.length; j++) {
      for (var i = 0; i < compressedResultBuffer.length; i++) {
        // d sub t (tau) = (x(i) - x(i - tau))^2, from i = 1 to result buffer size
        if (!(j in compressedResultBuffer)) {
          compressedResultBuffer[j] = 0;
        }

        compressedResultBuffer[j] += Math.pow(compressedWave[i] - compressedWave[i + j], 2);
      }
    }

    for (var i = 0; i < resultBuffer.length - 1; i += 2) {
      var iNorm = i / 2;
      var diff = (compressedResultBuffer[iNorm + 1] - compressedResultBuffer[iNorm]) / 2;
      resultBuffer[i] = compressedResultBuffer[iNorm];
      resultBuffer[i + 1] = compressedResultBuffer[iNorm] + diff;
    }

    return resultBuffer;
  }

  function cumulativeMeanNormalizedDifference(resultBuffer) {
    var length = resultBuffer.length;
    var runningSum = 0; // Set the first value in the result buffer to the value of one

    resultBuffer[0] = 1;

    for (var i = 1; i < length; i++) {
      // The sum of this value plus all the previous values in the buffer array
      runningSum = runningSum + resultBuffer[i]; // The current value is updated to be the current value multiplied by the index divided by the running sum value

      resultBuffer[i] = resultBuffer[i] * i / runningSum;
    }

    return resultBuffer;
  }

  function absoluteThreshold(resultBuffer) {
    var tau;
    var length = resultBuffer.length; // The first two values in the result buffer should be 1, so start at the third value

    for (tau = 2; tau < length; tau++) {
      // If we are less than the threshold, continue on until we find the lowest value
      // indicating the lowest dip in the wave since we first crossed the threshold.
      if (resultBuffer[tau] < 0.1) {
        while (tau + 1 < length && resultBuffer[tau + 1] < resultBuffer[tau]) {
          tau++;
        } // We have the approximate tau value, so break the loop


        break;
      }
    } // Some implementations of this algorithm set the tau value to -1 to indicate no correct tau
    // value was found. This implementation will just return the last tau.


    tau = tau >= length - 1 ? -1 : tau;
    return tau;
  }

  function parabolicInterpretation(currentTau, resultBuffer) {
    // Finds the points to fit the parabola between
    var x0 = currentTau < 1 ? currentTau : currentTau - 1;
    var x2 = currentTau + 1 < resultBuffer.length ? currentTau + 1 : currentTau; // Finds the better tau estimate

    var betterTau;

    if (x0 == currentTau) {
      if (resultBuffer[currentTau] <= resultBuffer[x2]) {
        betterTau = currentTau;
      } else {
        betterTau = x2;
      }
    } else if (x2 == currentTau) {
      if (resultBuffer[currentTau] <= resultBuffer[x0]) {
        betterTau = currentTau;
      } else {
        betterTau = x0;
      }
    } else {
      // Fit the parabola between the first point, current tau, and the last point to find a
      // better tau estimate.
      var s0 = resultBuffer[x0];
      var s1 = resultBuffer[currentTau];
      var s2 = resultBuffer[x2];
      betterTau = currentTau + (s2 - s0) / (2 * (2 * s1 - s2 - s0));
    }

    return betterTau;
  }

  var resultBuffer = autoCorrelationDifference(wave);
  resultBuffer = cumulativeMeanNormalizedDifference(resultBuffer);
  var tau = absoluteThreshold(resultBuffer);

  if (tau == -1) {
    return tau;
  }

  tau = parabolicInterpretation(tau, resultBuffer);
  return 44100 / tau;
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
      // Let's assume that this is good enough and stop right here
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
  getNoteFromWave: getNoteFromWave
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9rZXlfY29tcGFyaXNvbi5qcyIsIndlYnBhY2s6Ly8vLi93ZWIvYXNzZXRzL2pzL25vdGVfZGV0ZWN0aW9uLmpzIl0sIm5hbWVzIjpbImNvbXBhcmVLZXlzIiwibm90ZTEiLCJub3RlMiIsImtleWFsaWFzZXMiLCJ1bmRlZmluZWQiLCJ0b0xvd2VyQ2FzZSIsImdldEtleUFzRmxhdCIsImtleSIsImZsYXRfbWFwIiwibm90ZUZyZXF1ZW5jaWVzIiwibm90ZU5hbWVzIiwiZXN0aW1hdGVOb3RlIiwiZnJlcXVlbmN5IiwibGVuZ3RoIiwiZnJlcXVlbmN5SW5kZXgiLCJuZXh0Q2xvc2VzdEluZGV4IiwiaSIsIm9jdGF2ZSIsIk1hdGgiLCJmbG9vciIsImdldEZyZXF1ZW5jeUZvck5vdGUiLCJub3RlX25hbWUiLCJub3RlX29jdGF2ZSIsIm5vdGVOYW1lSW5kZXgiLCJrZXlfY29tcGFyaXNvbiIsImdldE5vdGVGcm9tV2F2ZSIsIndhdmUiLCJlc3RpbWF0ZUZyZXF1ZW5jeSIsImF1dG9Db3JyZWxhdGlvbkRpZmZlcmVuY2UiLCJjb21wcmVzc2VkV2F2ZSIsIkFycmF5IiwiY29tcHJlc3NlZFJlc3VsdEJ1ZmZlciIsInJlc3VsdEJ1ZmZlciIsImoiLCJwb3ciLCJpTm9ybSIsImRpZmYiLCJjdW11bGF0aXZlTWVhbk5vcm1hbGl6ZWREaWZmZXJlbmNlIiwicnVubmluZ1N1bSIsImFic29sdXRlVGhyZXNob2xkIiwidGF1IiwicGFyYWJvbGljSW50ZXJwcmV0YXRpb24iLCJjdXJyZW50VGF1IiwieDAiLCJ4MiIsImJldHRlclRhdSIsInMwIiwiczEiLCJzMiIsImdldE5vdGVGcm9tU2FtcGxlcyIsImJ1ZmZlciIsInNhbXBsZVJhdGUiLCJuIiwiYmVzdFIiLCJiZXN0SyIsImsiLCJzdW0iLCJyIiwiZnVuZGFtZW50YWxGcmVxIl0sIm1hcHBpbmdzIjoiO1FBQUE7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QSxFQUNTLE9BRFQsRUFDa0IsT0FEbEIsRUFDMkIsT0FEM0IsRUFDb0MsT0FEcEMsRUFDNkMsT0FEN0MsRUFDc0QsT0FEdEQsRUFDK0QsT0FEL0QsRUFDd0UsT0FEeEUsRUFDaUYsT0FEakYsRUFDMEYsT0FEMUYsRUFDbUcsT0FEbkcsRUFDOEc7QUFDOUcsT0FGQSxFQUVTLE9BRlQsRUFFa0IsT0FGbEIsRUFFMkIsT0FGM0IsRUFFb0MsT0FGcEMsRUFFNkMsT0FGN0MsRUFFc0QsT0FGdEQsRUFFK0QsT0FGL0QsRUFFd0UsT0FGeEUsRUFFaUYsT0FGakYsRUFFMEYsT0FGMUYsRUFFbUcsT0FGbkcsRUFFOEc7QUFDOUcsT0FIQSxFQUdTLE9BSFQsRUFHa0IsT0FIbEIsRUFHMkIsT0FIM0IsRUFHb0MsT0FIcEMsRUFHNkMsT0FIN0MsRUFHc0QsT0FIdEQsRUFHK0QsT0FIL0QsRUFHd0UsT0FIeEUsRUFHaUYsT0FIakYsRUFHMEYsT0FIMUYsRUFHbUcsT0FIbkcsRUFHOEc7QUFDOUcsT0FKQSxFQUlTLE9BSlQsRUFJa0IsT0FKbEIsRUFJMkIsT0FKM0IsRUFJb0MsT0FKcEMsRUFJNkMsT0FKN0MsRUFJc0QsT0FKdEQsRUFJK0QsT0FKL0QsRUFJd0UsT0FKeEUsRUFJaUYsT0FKakYsRUFJMEYsT0FKMUYsRUFJbUcsT0FKbkcsRUFJOEc7QUFDOUcsT0FMQSxFQUtTLE9BTFQsRUFLa0IsT0FMbEIsRUFLMkIsT0FMM0IsRUFLb0MsT0FMcEMsRUFLNkMsT0FMN0MsRUFLc0QsT0FMdEQsRUFLK0QsT0FML0QsRUFLd0UsT0FMeEUsRUFLaUYsT0FMakYsRUFLMEYsT0FMMUYsRUFLbUcsT0FMbkcsRUFLOEc7QUFDOUcsT0FOQSxFQU1TLE9BTlQsRUFNa0IsT0FObEIsRUFNMkIsT0FOM0IsRUFNb0MsT0FOcEMsRUFNNkMsT0FON0MsRUFNc0QsT0FOdEQsRUFNK0QsT0FOL0QsRUFNd0UsT0FOeEUsRUFNaUYsT0FOakYsRUFNMEYsT0FOMUYsRUFNbUcsT0FObkcsRUFNOEc7QUFDOUcsT0FQQSxFQU9TLE9BUFQsRUFPa0Is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QUFJSyxlQUFlLEdBQUdQLFVBQVUsR0FBR0csS0FBbkM7QUFDQSxXQUFPM0MsWUFBWSxDQUFDK0MsZUFBRCxDQUFuQjtBQUNBLEdBSkQsTUFLSztBQUNKO0FBQ0EsV0FBTyxFQUFQO0FBQ0E7QUFDRDs7QUFBQTtBQUVjO0FBQ2R0QyxxQkFBbUIsRUFBRUEsbUJBRFA7QUFFZDZCLG9CQUFrQixFQUFFQSxrQkFGTjtBQUdkeEIsaUJBQWUsRUFBRUE7QUFISCxDQUFmLEUiLCJmaWxlIjoibm90ZV9kZXRlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93ZWIvYXNzZXRzL2pzL25vdGVfZGV0ZWN0aW9uLmpzXCIpO1xuIiwiZnVuY3Rpb24gY29tcGFyZUtleXMobm90ZTEsIG5vdGUyKSB7XG5cdGxldCBrZXlhbGlhc2VzID0ge1xuXHRcdCdhYic6ICdnIycsXG5cdFx0J2EnIDogJ2EnLFxuXHRcdCdhIycgOiAnYmInLFxuXHRcdCdiYicgOiAnYSMnLFxuXHRcdCdiJyA6ICdjYicsXG5cdFx0J2IjJzogJ2MnLFxuXHRcdCdjYicgOiAnYicsXG5cdFx0J2MnIDogJ2IjJyxcblx0XHQnYyMnOiAnZGInLFxuXHRcdCdkYicgOiAnYyMnLFxuXHRcdCdkJyA6ICdkJyxcblx0XHQnZCMnIDogJ2ViJyxcblx0XHQnZWInIDogJ2QjJyxcblx0XHQnZScgOiAnZmInLFxuXHRcdCdlIycgOiAnZicsXG5cdFx0J2ZiJyA6ICdlJyxcblx0XHQnZicgOiAnZicsXG5cdFx0J2YjJyA6ICdnYicsXG5cdFx0J2diJyA6ICdmIycsXG5cdFx0J2cnIDogJ2cnLFxuXHRcdCdnIycgOiAnYWInLFxuXHR9XG5cdGlmIChub3RlMSA9PSB1bmRlZmluZWQgfHwgbm90ZTIgPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiBub3RlMS50b0xvd2VyQ2FzZSgpID09IG5vdGUyLnRvTG93ZXJDYXNlKCkgfHwga2V5YWxpYXNlc1tub3RlMS50b0xvd2VyQ2FzZSgpXSA9PSBub3RlMi50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBnZXRLZXlBc0ZsYXQoa2V5KSB7XG5cdGxldCBmbGF0X21hcCA9IHtcblx0XHQnYWInOiAnQWInLFxuXHRcdCdhJyA6ICdhJyxcblx0XHQnYSMnIDogJ0JiJyxcblx0XHQnYmInIDogJ0JiJyxcblx0XHQnYicgOiAnQicsXG5cdFx0J2NiJyA6ICdCJyxcblx0XHQnYycgOiAnQycsXG5cdFx0J2MjJzogJ0RiJyxcblx0XHQnZGInIDogJ0RiJyxcblx0XHQnZCcgOiAnRCcsXG5cdFx0J2QjJyA6ICdFYicsXG5cdFx0J2ViJyA6ICdFYicsXG5cdFx0J2UnIDogJ0ZiJyxcblx0XHQnZSMnIDogJ0YnLFxuXHRcdCdmYicgOiAnRScsXG5cdFx0J2YnIDogJ0YnLFxuXHRcdCdmIycgOiAnR2InLFxuXHRcdCdnYicgOiAnR2InLFxuXHRcdCdnJyA6ICdHJyxcblx0XHQnZyMnIDogJ0FiJyxcblx0fVxuXHRyZXR1cm4gZmxhdF9tYXBba2V5LnRvTG93ZXJDYXNlKCldXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Y29tcGFyZUtleXM6IGNvbXBhcmVLZXlzXG59XG4iLCJpbXBvcnQga2V5X2NvbXBhcmlzb24gZnJvbSAnLi9rZXlfY29tcGFyaXNvbidcbmxldCBub3RlRnJlcXVlbmNpZXMgPVxuXHQvLyBCICAgICAgICBBIyAgICAgICAgQSAgICAgIEcjICAgICAgIEcgICAgICAgICBGIyAgICAgICBGICAgICAgICBFICAgICAgICAgRCMgICAgICBEICAgICAgICBDIyAgICAgICBDXG5cdFs3OTAyLjEzLCA3NDU4LjYyLCA3MDQwLjAwLCA2NjQ0Ljg4LCA2MjcxLjkzLCA1OTE5LjkxLCA1NTg3LjY1LCA1Mjc0LjA0LCA0OTc4LjAzLCA0Njk4LjY0LCA0NDM0LjkyLCA0MTg2LjAxLCAgLy8gOFxuXHQzOTUxLjA3LCAzNzI5LjMxLCAzNTIwLjAwLCAzMzIyLjQ0LCAzMTM1Ljk2LCAyOTU5Ljk2LCAyNzkzLjgzLCAyNjM3LjAyLCAyNDg5LjAyLCAyMzQ5LjMyLCAyMjE3LjQ2LCAyMDkzLjAwLCAgIC8vIDdcblx0MTk3NS41MywgMTg2NC42NiwgMTc2MC4wMCwgMTY2MS4yMiwgMTU2Ny45OCwgMTQ3OS45OCwgMTM5Ni45MSwgMTMxOC41MSwgMTI0NC41MSwgMTE3NC42NiwgMTEwOC43MywgMTA0Ni41MCwgICAvLyA2XG5cdDk4Ny43NjcsIDkzMi4zMjgsIDg4MC4wMDAsIDgzMC42MDksIDc4My45OTEsIDczOS45ODksIDY5OC40NTYsIDY1OS4yNTUsIDYyMi4yNTQsIDU4Ny4zMzAsIDU1NC4zNjUsIDUyMy4yNTEsICAgLy8gNVxuXHQ0OTMuODgzLCA0NjYuMTY0LCA0NDAuMDAwLCA0MTUuMzA1LCAzOTEuOTk1LCAzNjkuOTk0LCAzNDkuMjI4LCAzMjkuNjI4LCAzMTEuMTI3LCAyOTMuNjY1LCAyNzcuMTgzLCAyNjEuNjI2LCAgIC8vIDRcblx0MjQ2Ljk0MiwgMjMzLjA4MiwgMjIwLjAwMCwgMjA3LjY1MiwgMTk1Ljk5OCwgMTg0Ljk5NywgMTc0LjYxNCwgMTY0LjgxNCwgMTU1LjU2MywgMTQ2LjgzMiwgMTM4LjU5MSwgMTMwLjgxMywgICAvLyAzXG5cdDEyMy40NzEsIDExNi41NDEsIDExMC4wMDAsIDEwMy44MjYsIDk3Ljk5ODksIDkyLjQ5ODYsIDg3LjMwNzEsIDgyLjQwNjksIDc3Ljc4MTcsIDczLjQxNjIsIDY5LjI5NTcsIDY1LjQwNjQsICAgLy8gMlxuXHQ2MS43MzU0LCA1OC4yNzA1LCA1NS4wMDAwLCA1MS45MTMxLCA0OC45OTk0LCA0Ni4yNDkzLCA0My42NTM1LCA0MS4yMDM0LCAzOC44OTA5LCAzNi43MDgxLCAzNC42NDc4LCAzMi43MDMyLCAgIC8vIDFcblx0MzAuODY3NywgMjkuMTM1MiwgMjcuNTAwMCwgMjUuOTU2NSwgMjQuNDk5NywgMjMuMTI0NywgMjEuODI2OCwgMjAuNjAxNywgMTkuNDQ1NCwgMTguMzU0MCwgMTcuMzIzOSwgMTYuMzUxNl07IC8vIDBcblxubGV0IG5vdGVOYW1lcyA9IFtcIkJcIiwgXCJBI1wiLCBcIkFcIiwgXCJHI1wiLCBcIkdcIiwgXCJGI1wiLCBcIkZcIiwgXCJFXCIsIFwiRCNcIiwgXCJEXCIsIFwiQyNcIiwgXCJDXCJdO1xuXG5mdW5jdGlvbiBlc3RpbWF0ZU5vdGUoZnJlcXVlbmN5KSB7XG5cdGxldCBsZW5ndGggPSBub3RlRnJlcXVlbmNpZXMubGVuZ3RoO1xuXHRsZXQgZnJlcXVlbmN5SW5kZXggPSAwO1xuXHRsZXQgbmV4dENsb3Nlc3RJbmRleCA9IDA7XG5cblx0Ly8gSXRlcmF0ZSB0aHJvdWdoIHRoZSBub3RlIGFycmF5IHRvIGZpbmQgdGhlIGNsb3Nlc3QgaW5kaWNlc1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCAtIDE7IGkrKykge1xuXHRcdGlmIChpID09IDAgJiYgZnJlcXVlbmN5ID4gbm90ZUZyZXF1ZW5jaWVzW2ldKSB7XG5cdFx0XHRmcmVxdWVuY3lJbmRleCA9IDA7XG5cdFx0XHRuZXh0Q2xvc2VzdEluZGV4ID0gMDtcblx0XHRcdGJyZWFrO1xuXHRcdH0gZWxzZSBpZiAobm90ZUZyZXF1ZW5jaWVzW2ldID49IGZyZXF1ZW5jeSAmJiBmcmVxdWVuY3kgPiBub3RlRnJlcXVlbmNpZXNbaSArIDFdKSB7XG5cdFx0XHRmcmVxdWVuY3lJbmRleCA9IChub3RlRnJlcXVlbmNpZXNbaV0gLSBmcmVxdWVuY3kpIDwgKGZyZXF1ZW5jeSAtIG5vdGVGcmVxdWVuY2llc1tpICsgMV0pID8gaSA6IGkgKyAxO1xuXHRcdFx0bmV4dENsb3Nlc3RJbmRleCA9IGZyZXF1ZW5jeUluZGV4ID09IGkgPyBpICsgMSA6IGk7XG5cdFx0XHRicmVhaztcblx0XHR9IGVsc2UgaWYgKGkgPT0gbGVuZ3RoIC0gMikge1xuXHRcdFx0ZnJlcXVlbmN5SW5kZXggPSBsZW5ndGggLSAxO1xuXHRcdFx0bmV4dENsb3Nlc3RJbmRleCA9IGxlbmd0aCAtIDE7XG5cdFx0fVxuXHR9XG5cblx0Ly8gR2V0IHRoZSBuYW1lIG9mIHRoZSBub3RlXG5cdHJldHVybiB7XG5cdFx0a2V5OiBub3RlTmFtZXNbKGZyZXF1ZW5jeUluZGV4KSAlIG5vdGVOYW1lcy5sZW5ndGhdLFxuXHRcdG9jdGF2ZTogOCAtIE1hdGguZmxvb3IoZnJlcXVlbmN5SW5kZXggLyBub3RlTmFtZXMubGVuZ3RoKSxcblx0fTtcbn1cblxuZnVuY3Rpb24gZ2V0RnJlcXVlbmN5Rm9yTm90ZShub3RlX25hbWUsIG5vdGVfb2N0YXZlKSB7XG5cdGxldCBub3RlTmFtZUluZGV4O1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IG5vdGVOYW1lcy5sZW5ndGg7IGkrKykge1xuXHRcdGlmIChrZXlfY29tcGFyaXNvbi5jb21wYXJlS2V5cyhub3RlX25hbWUsIG5vdGVOYW1lc1tpXSkpIHtcblx0XHRcdG5vdGVOYW1lSW5kZXggPSBpO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBub3RlRnJlcXVlbmNpZXNbbm90ZUZyZXF1ZW5jaWVzLmxlbmd0aCAtIDEgLSAobm90ZV9vY3RhdmUgKiBub3RlTmFtZXMubGVuZ3RoKSAtIChub3RlTmFtZXMubGVuZ3RoIC0gbm90ZU5hbWVJbmRleCAtIDEpXVxufVxuXG5mdW5jdGlvbiBnZXROb3RlRnJvbVdhdmUod2F2ZSkge1xuXHRsZXQgZnJlcXVlbmN5ID0gZXN0aW1hdGVGcmVxdWVuY3kod2F2ZSlcblx0aWYgKGZyZXF1ZW5jeSAhPSAtMSkge1xuXHRcdHJldHVybiBlc3RpbWF0ZU5vdGUoZnJlcXVlbmN5KVxuXHR9XG5cdHJldHVybiBbXTtcblxufVxuXG5mdW5jdGlvbiBlc3RpbWF0ZUZyZXF1ZW5jeSh3YXZlKSB7XG5cblx0ZnVuY3Rpb24gYXV0b0NvcnJlbGF0aW9uRGlmZmVyZW5jZSh3YXZlKSB7XG5cdFx0dmFyIGNvbXByZXNzZWRXYXZlID0gbmV3IEFycmF5KHdhdmUubGVuZ3RoIC8gMilcblx0XHR2YXIgY29tcHJlc3NlZFJlc3VsdEJ1ZmZlciA9IG5ldyBBcnJheShjb21wcmVzc2VkV2F2ZS5sZW5ndGggLyAyKVxuXHRcdHZhciByZXN1bHRCdWZmZXIgPSBuZXcgQXJyYXkod2F2ZS5sZW5ndGggLyAyKVxuXG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHdhdmUubGVuZ3RoIC0gMTsgaSArPSAyKSB7XG5cdFx0XHRjb21wcmVzc2VkV2F2ZVtpIC8gMl0gPSAod2F2ZVtpXSArIHdhdmVbaSArIDFdKSAvIDI7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjb21wcmVzc2VkUmVzdWx0QnVmZmVyLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNvbXByZXNzZWRSZXN1bHRCdWZmZXIubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Ly8gZCBzdWIgdCAodGF1KSA9ICh4KGkpIC0geChpIC0gdGF1KSleMiwgZnJvbSBpID0gMSB0byByZXN1bHQgYnVmZmVyIHNpemVcblx0XHRcdFx0aWYgKCEoaiBpbiBjb21wcmVzc2VkUmVzdWx0QnVmZmVyKSkge1xuXHRcdFx0XHRcdGNvbXByZXNzZWRSZXN1bHRCdWZmZXJbal0gPSAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbXByZXNzZWRSZXN1bHRCdWZmZXJbal0gKz0gTWF0aC5wb3coKGNvbXByZXNzZWRXYXZlW2ldIC0gY29tcHJlc3NlZFdhdmVbaSArIGpdKSwgMik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRCdWZmZXIubGVuZ3RoIC0gMTsgaSArPSAyKSB7XG5cdFx0XHR2YXIgaU5vcm0gPSBpIC8gMjtcblx0XHRcdHZhciBkaWZmID0gKGNvbXByZXNzZWRSZXN1bHRCdWZmZXJbaU5vcm0gKyAxXSAtIGNvbXByZXNzZWRSZXN1bHRCdWZmZXJbaU5vcm1dKSAvIDI7XG5cdFx0XHRyZXN1bHRCdWZmZXJbaV0gPSBjb21wcmVzc2VkUmVzdWx0QnVmZmVyW2lOb3JtXTtcblx0XHRcdHJlc3VsdEJ1ZmZlcltpICsgMV0gPSBjb21wcmVzc2VkUmVzdWx0QnVmZmVyW2lOb3JtXSArIGRpZmY7XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHRCdWZmZXI7XG5cdH1cblxuXHRmdW5jdGlvbiBjdW11bGF0aXZlTWVhbk5vcm1hbGl6ZWREaWZmZXJlbmNlKHJlc3VsdEJ1ZmZlcikge1xuXHRcdHZhciBsZW5ndGggPSByZXN1bHRCdWZmZXIubGVuZ3RoO1xuXHRcdHZhciBydW5uaW5nU3VtID0gMDtcblxuXHRcdC8vIFNldCB0aGUgZmlyc3QgdmFsdWUgaW4gdGhlIHJlc3VsdCBidWZmZXIgdG8gdGhlIHZhbHVlIG9mIG9uZVxuXHRcdHJlc3VsdEJ1ZmZlclswXSA9IDE7XG5cblx0XHRmb3IgKHZhciBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHQvLyBUaGUgc3VtIG9mIHRoaXMgdmFsdWUgcGx1cyBhbGwgdGhlIHByZXZpb3VzIHZhbHVlcyBpbiB0aGUgYnVmZmVyIGFycmF5XG5cdFx0XHRydW5uaW5nU3VtID0gcnVubmluZ1N1bSArIHJlc3VsdEJ1ZmZlcltpXTtcblxuXHRcdFx0Ly8gVGhlIGN1cnJlbnQgdmFsdWUgaXMgdXBkYXRlZCB0byBiZSB0aGUgY3VycmVudCB2YWx1ZSBtdWx0aXBsaWVkIGJ5IHRoZSBpbmRleCBkaXZpZGVkIGJ5IHRoZSBydW5uaW5nIHN1bSB2YWx1ZVxuXHRcdFx0cmVzdWx0QnVmZmVyW2ldID0gIHJlc3VsdEJ1ZmZlcltpXSAqIGkgLyBydW5uaW5nU3VtO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0QnVmZmVyO1xuXHR9XG5cblx0ZnVuY3Rpb24gYWJzb2x1dGVUaHJlc2hvbGQocmVzdWx0QnVmZmVyKSB7XG5cdFx0dmFyIHRhdTtcblx0XHR2YXIgbGVuZ3RoID0gcmVzdWx0QnVmZmVyLmxlbmd0aDtcblxuXHRcdC8vIFRoZSBmaXJzdCB0d28gdmFsdWVzIGluIHRoZSByZXN1bHQgYnVmZmVyIHNob3VsZCBiZSAxLCBzbyBzdGFydCBhdCB0aGUgdGhpcmQgdmFsdWVcblx0XHRmb3IgKHRhdSA9IDI7IHRhdSA8IGxlbmd0aDsgdGF1KyspIHtcblx0XHRcdC8vIElmIHdlIGFyZSBsZXNzIHRoYW4gdGhlIHRocmVzaG9sZCwgY29udGludWUgb24gdW50aWwgd2UgZmluZCB0aGUgbG93ZXN0IHZhbHVlXG5cdFx0XHQvLyBpbmRpY2F0aW5nIHRoZSBsb3dlc3QgZGlwIGluIHRoZSB3YXZlIHNpbmNlIHdlIGZpcnN0IGNyb3NzZWQgdGhlIHRocmVzaG9sZC5cblx0XHRcdGlmIChyZXN1bHRCdWZmZXJbdGF1XSA8IDAuMSkge1xuXHRcdFx0XHR3aGlsZSAodGF1ICsgMSA8IGxlbmd0aCAmJiByZXN1bHRCdWZmZXJbdGF1ICsgMV0gPCByZXN1bHRCdWZmZXJbdGF1XSkge1xuXHRcdFx0XHRcdHRhdSsrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gV2UgaGF2ZSB0aGUgYXBwcm94aW1hdGUgdGF1IHZhbHVlLCBzbyBicmVhayB0aGUgbG9vcFxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBTb21lIGltcGxlbWVudGF0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzZXQgdGhlIHRhdSB2YWx1ZSB0byAtMSB0byBpbmRpY2F0ZSBubyBjb3JyZWN0IHRhdVxuXHRcdC8vIHZhbHVlIHdhcyBmb3VuZC4gVGhpcyBpbXBsZW1lbnRhdGlvbiB3aWxsIGp1c3QgcmV0dXJuIHRoZSBsYXN0IHRhdS5cblx0XHR0YXUgPSAodGF1ID49IGxlbmd0aCAtIDEgPyAtMSA6IHRhdSk7XG5cdFx0cmV0dXJuIHRhdTtcblx0fVxuXG5cdGZ1bmN0aW9uIHBhcmFib2xpY0ludGVycHJldGF0aW9uKGN1cnJlbnRUYXUsIHJlc3VsdEJ1ZmZlcikge1xuXHRcdC8vIEZpbmRzIHRoZSBwb2ludHMgdG8gZml0IHRoZSBwYXJhYm9sYSBiZXR3ZWVuXG5cdFx0dmFyIHgwID0gY3VycmVudFRhdSA8IDEgPyBjdXJyZW50VGF1IDogY3VycmVudFRhdSAtIDE7XG5cdFx0dmFyIHgyID0gY3VycmVudFRhdSArIDEgPCByZXN1bHRCdWZmZXIubGVuZ3RoID8gY3VycmVudFRhdSArIDEgOiBjdXJyZW50VGF1O1xuXG5cdFx0Ly8gRmluZHMgdGhlIGJldHRlciB0YXUgZXN0aW1hdGVcblx0XHR2YXIgYmV0dGVyVGF1O1xuXG5cdFx0aWYgKHgwID09IGN1cnJlbnRUYXUpIHtcblx0XHRcdGlmIChyZXN1bHRCdWZmZXJbY3VycmVudFRhdV0gPD0gcmVzdWx0QnVmZmVyW3gyXSkge1xuXHRcdFx0XHRiZXR0ZXJUYXUgPSBjdXJyZW50VGF1O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YmV0dGVyVGF1ID0geDI7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICh4MiA9PSBjdXJyZW50VGF1KSB7XG5cdFx0XHRpZiAocmVzdWx0QnVmZmVyW2N1cnJlbnRUYXVdIDw9IHJlc3VsdEJ1ZmZlclt4MF0pIHtcblx0XHRcdFx0YmV0dGVyVGF1ID0gY3VycmVudFRhdTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGJldHRlclRhdSA9IHgwO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBGaXQgdGhlIHBhcmFib2xhIGJldHdlZW4gdGhlIGZpcnN0IHBvaW50LCBjdXJyZW50IHRhdSwgYW5kIHRoZSBsYXN0IHBvaW50IHRvIGZpbmQgYVxuXHRcdFx0Ly8gYmV0dGVyIHRhdSBlc3RpbWF0ZS5cblx0XHRcdHZhciBzMCA9IHJlc3VsdEJ1ZmZlclt4MF07XG5cdFx0XHR2YXIgczEgPSByZXN1bHRCdWZmZXJbY3VycmVudFRhdV07XG5cdFx0XHR2YXIgczIgPSByZXN1bHRCdWZmZXJbeDJdO1xuXG5cdFx0XHRiZXR0ZXJUYXUgPSBjdXJyZW50VGF1ICsgKHMyIC0gczApIC8gKDIgKiAoMiAqIHMxIC0gczIgLSBzMCkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBiZXR0ZXJUYXU7XG5cdH1cblxuXHR2YXIgcmVzdWx0QnVmZmVyID0gYXV0b0NvcnJlbGF0aW9uRGlmZmVyZW5jZSh3YXZlKTtcblx0cmVzdWx0QnVmZmVyID0gY3VtdWxhdGl2ZU1lYW5Ob3JtYWxpemVkRGlmZmVyZW5jZShyZXN1bHRCdWZmZXIpXG5cdHZhciB0YXUgPSBhYnNvbHV0ZVRocmVzaG9sZChyZXN1bHRCdWZmZXIpXG5cdGlmICh0YXUgPT0gLTEpIHtcblx0XHRyZXR1cm4gdGF1O1xuXHR9XG5cdHRhdSA9IHBhcmFib2xpY0ludGVycHJldGF0aW9uKHRhdSwgcmVzdWx0QnVmZmVyKVxuXHRyZXR1cm4gNDQxMDAgLyB0YXVcbn1cblxuZnVuY3Rpb24gZ2V0Tm90ZUZyb21TYW1wbGVzKGJ1ZmZlciwgc2FtcGxlUmF0ZSkge1xuXHQvLyBXZSB1c2UgQXV0b2NvcnJlbGF0aW9uIHRvIGZpbmQgdGhlIGZ1bmRhbWVudGFsIGZyZXF1ZW5jeS5cblxuXHQvLyBJbiBvcmRlciB0byBjb3JyZWxhdGUgdGhlIHNpZ25hbCB3aXRoIGl0c2VsZiAoaGVuY2UgdGhlIG5hbWUgb2YgdGhlIGFsZ29yaXRobSksIHdlIHdpbGwgY2hlY2sgdHdvIHBvaW50cyAnaycgZnJhbWVzIGF3YXkuXG5cdC8vIFRoZSBhdXRvY29ycmVsYXRpb24gaW5kZXggd2lsbCBiZSB0aGUgYXZlcmFnZSBvZiB0aGVzZSBwcm9kdWN0cy4gQXQgdGhlIHNhbWUgdGltZSwgd2Ugbm9ybWFsaXplIHRoZSB2YWx1ZXMuXG5cdC8vIFNvdXJjZTogaHR0cDovL3d3dy5waHkubXR5LmVkdS9+c3VpdHMvYXV0b2NvcnJlbGF0aW9uLmh0bWxcblx0Ly8gQXNzdW1pbmcgdGhlIHNhbXBsZSByYXRlIGlzIDQ4MDAwSHosIGEgJ2snIGVxdWFsIHRvIDEwMDAgd291bGQgY29ycmVzcG9uZCB0byBhIDQ4SHogc2lnbmFsICg0ODAwMC8xMDAwID0gNDgpLFxuXHQvLyB3aGlsZSBhICdrJyBlcXVhbCB0byA4IHdvdWxkIGNvcnJlc3BvbmQgdG8gYSA2MDAwSHogb25lLCB3aGljaCBpcyBlbm91Z2ggdG8gY292ZXIgbW9zdCAoaWYgbm90IGFsbClcblx0Ly8gdGhlIG5vdGVzIHdlIGhhdmUgaW4gdGhlIG5vdGVzLmpzb24gZmlsZS5cblx0dmFyIG4gPSAxMDI0LCBiZXN0UiA9IDAsIGJlc3RLID0gLTE7XG5cdGZvcih2YXIgayA9IDg7IGsgPD0gMTAwMDsgaysrKXtcblx0XHR2YXIgc3VtID0gMDtcblxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBuOyBpKyspe1xuXHRcdFx0c3VtICs9ICgoYnVmZmVyW2ldIC0gMTI4KSAvIDEyOCkgKiAoKGJ1ZmZlcltpICsga10gLSAxMjgpIC8gMTI4KTtcblx0XHR9XG5cblx0XHR2YXIgciA9IHN1bSAvIChuICsgayk7XG5cblx0XHRpZihyID4gYmVzdFIpe1xuXHRcdFx0YmVzdFIgPSByO1xuXHRcdFx0YmVzdEsgPSBrO1xuXHRcdH1cblxuXHRcdGlmKHIgPiAwLjkpIHtcblx0XHRcdC8vIExldCdzIGFzc3VtZSB0aGF0IHRoaXMgaXMgZ29vZCBlbm91Z2ggYW5kIHN0b3AgcmlnaHQgaGVyZVxuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0aWYoYmVzdFIgPiAwLjAwMjUpIHtcblx0XHQvLyBUaGUgcGVyaW9kIChpbiBmcmFtZXMpIG9mIHRoZSBmdW5kYW1lbnRhbCBmcmVxdWVuY3kgaXMgJ2Jlc3RLJy4gR2V0dGluZyB0aGUgZnJlcXVlbmN5IGZyb20gdGhlcmUgaXMgdHJpdmlhbC5cblx0XHR2YXIgZnVuZGFtZW50YWxGcmVxID0gc2FtcGxlUmF0ZSAvIGJlc3RLO1xuXHRcdHJldHVybiBlc3RpbWF0ZU5vdGUoZnVuZGFtZW50YWxGcmVxKTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBXZSBoYXZlbid0IGZvdW5kIGEgZ29vZCBjb3JyZWxhdGlvblxuXHRcdHJldHVybiBbXTtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRnZXRGcmVxdWVuY3lGb3JOb3RlOiBnZXRGcmVxdWVuY3lGb3JOb3RlLFxuXHRnZXROb3RlRnJvbVNhbXBsZXM6IGdldE5vdGVGcm9tU2FtcGxlcyxcblx0Z2V0Tm90ZUZyb21XYXZlOiBnZXROb3RlRnJvbVdhdmUsXG59XG4iXSwic291cmNlUm9vdCI6IiJ9