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
/******/ 	return __webpack_require__(__webpack_require__.s = "./web/assets/js/song_player.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./web/assets/js/instruments.js":
/*!**************************************!*\
  !*** ./web/assets/js/instruments.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function getInstrumentKeyOffset(instrument) {
  var key_offsets = {
    'guitar': 12,
    'clarinet': 2,
    'bass_clarinet': 14,
    'soprano_saxophone': 2,
    'alto_saxophone': 9,
    'tenor_saxophone': 14,
    'french_horn': 7,
    'trumpet': 2,
    'piano': 0
  };
  return key_offsets[instrument];
}

function getInstrumentFingering(instrument) {
  var fingering_map = {
    'guitar': 'guitar',
    'piccolo': 'picolo',
    'clarinet': 'clarinet',
    'bass_clarinet': 'clarinet',
    'soprano_saxophone': 'saxophone',
    'alto_saxophone': 'saxophone',
    'tenor_saxophone': 'saxophone',
    'baritone_saxophone': 'saxophone',
    'french_horn': 'trumpet',
    'trumpet': 'trumpet',
    'xylophone': 'xylophone',
    'glockenspiel': 'glockenspiel',
    'piano': 'piano'
  };
  return fingering_map[instrument];
}

/* harmony default export */ __webpack_exports__["default"] = ({
  getInstrumentKeyOffset: getInstrumentKeyOffset,
  getInstrumentFingering: getInstrumentFingering
});

/***/ }),

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

/***/ "./web/assets/js/key_signatures.js":
/*!*****************************************!*\
  !*** ./web/assets/js/key_signatures.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _key_comparison__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key_comparison */ "./web/assets/js/key_comparison.js");


function getKeySignatureInfo(key) {
  // https://en.wikipedia.org/wiki/Key_signature
  var key_sigs = {
    'C major': {
      'type': '#',
      'notes': {}
    },
    'A minor': {
      'type': '#',
      'notes': {}
    },
    'G major': {
      'type': '#',
      'notes': {
        'F': true
      }
    },
    'E minor': {
      'type': '#',
      'notes': {
        'F': true
      }
    },
    'D major': {
      'type': '#',
      'notes': {
        'F': true,
        'C': true
      }
    },
    'B minor': {
      'type': '#',
      'notes': {
        'F': true,
        'C': true
      }
    },
    'A major': {
      'type': '#',
      'notes': {
        'F': true,
        'C': true,
        'G': true
      }
    },
    'E major': {
      'type': '#',
      'notes': {
        'F': true,
        'C': true,
        'G': true,
        'D': true
      }
    },
    'B major': {
      'type': '#',
      'notes': {
        'F': true,
        'C': true,
        'G': true,
        'D': true,
        'A': true
      }
    },
    'F major': {
      'type': 'b',
      'notes': {
        'B': true
      }
    },
    'D minor': {
      'type': 'b',
      'notes': {
        'B': true
      }
    },
    'Bb major': {
      'type': 'b',
      'notes': {
        'B': true,
        'E': true
      }
    },
    'G minor': {
      'type': 'b',
      'notes': {
        'B': true,
        'E': true
      }
    },
    'Eb major': {
      'type': 'b',
      'notes': {
        'B': true,
        'E': true,
        'A': true
      }
    },
    'C minor': {
      'type': 'b',
      'notes': {
        'B': true,
        'E': true,
        'A': true
      }
    },
    'Ab major': {
      'type': 'b',
      'notes': {
        'B': true,
        'E': true,
        'A': true,
        'D': true
      }
    },
    'F minor': {
      'type': 'b',
      'notes': {
        'B': true,
        'E': true,
        'A': true,
        'D': true
      }
    },
    'Db major': {
      'type': 'b',
      'notes': {
        'B': true,
        'E': true,
        'A': true,
        'D': true,
        'G': true
      }
    },
    'Bb minor': {
      'type': 'b',
      'notes': {
        'B': true,
        'E': true,
        'A': true,
        'D': true,
        'G': true
      }
    },
    'Gb major': {
      'type': 'b',
      'notes': {
        'B': true,
        'E': true,
        'A': true,
        'D': true,
        'G': true,
        'C': true
      }
    },
    'Eb minor': {
      'type': 'b',
      'notes': {
        'B': true,
        'E': true,
        'A': true,
        'D': true,
        'G': true,
        'C': true
      }
    },
    'Cb major': {
      'type': 'b',
      'notes': {
        'B': true,
        'E': true,
        'A': true,
        'D': true,
        'G': true,
        'C': true,
        'F': true
      }
    },
    'Ab minor': {
      'type': 'b',
      'notes': {
        'B': true,
        'E': true,
        'A': true,
        'D': true,
        'G': true,
        'C': true,
        'F': true
      }
    }
  };
  return key_sigs[key];
}

function getOffsetNote(key, octave, offset) {
  var notes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
  var startIndex = 0;

  for (var i = 0; i < notes.length; i++) {
    if (_key_comparison__WEBPACK_IMPORTED_MODULE_0__["default"].compareKeys(notes[i], key)) {
      startIndex = i;
      break;
    }
  }

  var offsetKey = notes[(notes.length + startIndex + offset) % notes.length];
  var offsetOctave = octave + Math.floor((startIndex + offset) / notes.length);
  return {
    "name": offsetKey,
    "octave": offsetOctave
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  getKeySignatureInfo: getKeySignatureInfo,
  getOffsetNote: getOffsetNote
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

/***/ }),

/***/ "./web/assets/js/song_player.js":
/*!**************************************!*\
  !*** ./web/assets/js/song_player.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SongPlayer; });
/* harmony import */ var _note_detection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note_detection */ "./web/assets/js/note_detection.js");
/* harmony import */ var _instruments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instruments */ "./web/assets/js/instruments.js");
/* harmony import */ var _key_signatures__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./key_signatures */ "./web/assets/js/key_signatures.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var SongPlayer =
/*#__PURE__*/
function () {
  function SongPlayer(notes, instrument, beats_per_minute, beats_per_measure) {
    _classCallCheck(this, SongPlayer);

    this.audioCtx = new AudioContext();
    this.tick = null;
    this.tickVolume = null;
    this.soundHz = 1000;
    this.scheduledNotes = this.appendTimingOffset(notes, beats_per_measure, beats_per_minute).flat();
    this.instrument = instrument;
    this.setController();
    this.initAudio();
  }

  _createClass(SongPlayer, [{
    key: "initAudio",
    value: function initAudio() {
      this.tick = this.audioCtx.createOscillator();
      this.tickVolume = this.audioCtx.createGain();
      this.tick.type = 'square';
      this.tick.frequency.value = this.soundHz;
      this.tickVolume.gain.value = 0;
      this.tick.connect(this.tickVolume); //this.tickVolume.connect(this.audioCtx.destination);

      this.tick.start(0); // No offset, start immediately.
    }
  }, {
    key: "start",
    value: function start() {
      var now = this.audioCtx.currentTime; // Schedule all the clicks ahead.

      for (var i = 0; i < this.scheduledNotes.length; i++) {
        var note = this.scheduledNotes[i].note;

        if (note.attrs.type !== 'GhostNote') {
          var props = note.getKeyProps()[0];
          var key = props.key;
          var octave = props.octave;
          var offsetNote = _key_signatures__WEBPACK_IMPORTED_MODULE_2__["default"].getOffsetNote(key, octave, 0 - _instruments__WEBPACK_IMPORTED_MODULE_1__["default"].getInstrumentKeyOffset(this.instrument));
          var freqency = _note_detection__WEBPACK_IMPORTED_MODULE_0__["default"].getFrequencyForNote(offsetNote.name, offsetNote.octave);
          this.playNoteAtTime(freqency, now + this.scheduledNotes[i].timing_offset);
        }
      }
    }
  }, {
    key: "playNoteAtTime",
    value: function playNoteAtTime(frequency, time) {
      // Silence the click.
      this.tick.frequency.cancelScheduledValues(time);
      this.tick.frequency.setValueAtTime(frequency, time);
      this.tickVolume.gain.cancelScheduledValues(time);
      this.tickVolume.gain.setValueAtTime(0, time); // Audible click sound.

      this.tickVolume.gain.linearRampToValueAtTime(1, time + .001);
      this.tickVolume.gain.linearRampToValueAtTime(0, time + .001 + .2);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.tickVolume.gain.value = 0;
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
  }, {
    key: "setController",
    value: function setController() {
      var _this = this;

      document.getElementById('song-player-controller').addEventListener('change', function (event) {
        if (event.target.checked) {
          _this.tickVolume.connect(_this.audioCtx.destination);
        } else {
          _this.tickVolume.disconnect(_this.audioCtx.destination);
        }
      });
    }
  }, {
    key: "appendTimingOffset",
    value: function appendTimingOffset(bars, beats_per_measure, beats_per_minute) {
      for (var i = 0; i < bars.length; i++) {
        var notes = bars[i];

        if (notes.length === 0) {
          continue;
        }

        var bar_timing_offset = i * (beats_per_measure / beats_per_minute) * 60;
        bars[i][0]['timing_offset'] = bar_timing_offset;

        for (var j = 0; j < notes.length; j++) {
          if (j !== notes.length - 1) {
            var timing_offset = bar_timing_offset + notes[j + 1].percentage * (beats_per_measure / beats_per_minute) * 60;
            bars[i][j + 1]['timing_offset'] = timing_offset;
          }
        }
      }

      return bars;
    }
  }]);

  return SongPlayer;
}();



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9pbnN0cnVtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi93ZWIvYXNzZXRzL2pzL2tleV9jb21wYXJpc29uLmpzIiwid2VicGFjazovLy8uL3dlYi9hc3NldHMvanMva2V5X3NpZ25hdHVyZXMuanMiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9ub3RlX2RldGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi93ZWIvYXNzZXRzL2pzL3NvbmdfcGxheWVyLmpzIl0sIm5hbWVzIjpbImdldEluc3RydW1lbnRLZXlPZmZzZXQiLCJpbnN0cnVtZW50Iiwia2V5X29mZnNldHMiLCJnZXRJbnN0cnVtZW50RmluZ2VyaW5nIiwiZmluZ2VyaW5nX21hcCIsImNvbXBhcmVLZXlzIiwibm90ZTEiLCJub3RlMiIsImtleWFsaWFzZXMiLCJ1bmRlZmluZWQiLCJ0b0xvd2VyQ2FzZSIsImdldEtleUFzRmxhdCIsImtleSIsImZsYXRfbWFwIiwiZ2V0S2V5U2lnbmF0dXJlSW5mbyIsImtleV9zaWdzIiwiZ2V0T2Zmc2V0Tm90ZSIsIm9jdGF2ZSIsIm9mZnNldCIsIm5vdGVzIiwic3RhcnRJbmRleCIsImkiLCJsZW5ndGgiLCJrZXlfY29tcGFyaXNvbiIsIm9mZnNldEtleSIsIm9mZnNldE9jdGF2ZSIsIk1hdGgiLCJmbG9vciIsIm5vdGVGcmVxdWVuY2llcyIsIm5vdGVOYW1lcyIsImVzdGltYXRlTm90ZSIsImZyZXF1ZW5jeSIsImZyZXF1ZW5jeUluZGV4IiwibmV4dENsb3Nlc3RJbmRleCIsImdldEZyZXF1ZW5jeUZvck5vdGUiLCJub3RlX25hbWUiLCJub3RlX29jdGF2ZSIsIm5vdGVOYW1lSW5kZXgiLCJnZXROb3RlRnJvbVdhdmUiLCJ3YXZlIiwiZXN0aW1hdGVGcmVxdWVuY3kiLCJhdXRvQ29ycmVsYXRpb25EaWZmZXJlbmNlIiwiY29tcHJlc3NlZFdhdmUiLCJBcnJheSIsImNvbXByZXNzZWRSZXN1bHRCdWZmZXIiLCJyZXN1bHRCdWZmZXIiLCJqIiwicG93IiwiaU5vcm0iLCJkaWZmIiwiY3VtdWxhdGl2ZU1lYW5Ob3JtYWxpemVkRGlmZmVyZW5jZSIsInJ1bm5pbmdTdW0iLCJhYnNvbHV0ZVRocmVzaG9sZCIsInRhdSIsInBhcmFib2xpY0ludGVycHJldGF0aW9uIiwiY3VycmVudFRhdSIsIngwIiwieDIiLCJiZXR0ZXJUYXUiLCJzMCIsInMxIiwiczIiLCJnZXROb3RlRnJvbVNhbXBsZXMiLCJidWZmZXIiLCJzYW1wbGVSYXRlIiwibiIsImJlc3RSIiwiYmVzdEsiLCJrIiwic3VtIiwiciIsImZ1bmRhbWVudGFsRnJlcSIsIlNvbmdQbGF5ZXIiLCJiZWF0c19wZXJfbWludXRlIiwiYmVhdHNfcGVyX21lYXN1cmUiLCJhdWRpb0N0eCIsIkF1ZGlvQ29udGV4dCIsInRpY2siLCJ0aWNrVm9sdW1lIiwic291bmRIeiIsInNjaGVkdWxlZE5vdGVzIiwiYXBwZW5kVGltaW5nT2Zmc2V0IiwiZmxhdCIsInNldENvbnRyb2xsZXIiLCJpbml0QXVkaW8iLCJjcmVhdGVPc2NpbGxhdG9yIiwiY3JlYXRlR2FpbiIsInR5cGUiLCJ2YWx1ZSIsImdhaW4iLCJjb25uZWN0Iiwic3RhcnQiLCJub3ciLCJjdXJyZW50VGltZSIsIm5vdGUiLCJhdHRycyIsInByb3BzIiwiZ2V0S2V5UHJvcHMiLCJvZmZzZXROb3RlIiwiS2V5U2lnbmF0dXJlcyIsIkluc3RydW1lbnRzIiwiZnJlcWVuY3kiLCJub3RlX2RldGVjdGlvbiIsIm5hbWUiLCJwbGF5Tm90ZUF0VGltZSIsInRpbWluZ19vZmZzZXQiLCJ0aW1lIiwiY2FuY2VsU2NoZWR1bGVkVmFsdWVzIiwic2V0VmFsdWVBdFRpbWUiLCJsaW5lYXJSYW1wVG9WYWx1ZUF0VGltZSIsInN1c3BlbmQiLCJyZXN1bWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidGFyZ2V0IiwiY2hlY2tlZCIsImRlc3RpbmF0aW9uIiwiZGlzY29ubmVjdCIsImJhcnMiLCJiYXJfdGltaW5nX29mZnNldCIsInBlcmNlbnRhZ2UiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQSxTQUFTQSxzQkFBVCxDQUFnQ0MsVUFBaEMsRUFBNEM7QUFDM0MsTUFBSUMsV0FBVyxHQUFHO0FBQ2pCLGNBQVUsRUFETztBQUVqQixnQkFBWSxDQUZLO0FBR2pCLHFCQUFpQixFQUhBO0FBSWpCLHlCQUFxQixDQUpKO0FBS2pCLHNCQUFrQixDQUxEO0FBTWpCLHVCQUFtQixFQU5GO0FBT2pCLG1CQUFlLENBUEU7QUFRakIsZUFBVyxDQVJNO0FBU2pCLGFBQVM7QUFUUSxHQUFsQjtBQVdBLFNBQU9BLFdBQVcsQ0FBQ0QsVUFBRCxDQUFsQjtBQUNBOztBQUVELFNBQVNFLHNCQUFULENBQWdDRixVQUFoQyxFQUE0QztBQUMzQyxNQUFJRyxhQUFhLEdBQUc7QUFDbkIs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QUltRixhQUFhLEdBQUdnQixpQkFBaUIsR0FBR3RHLEtBQUssQ0FBQzJCLENBQUMsR0FBRyxDQUFMLENBQUwsQ0FBYTRFLFVBQWIsSUFBMkJoRCxpQkFBaUIsR0FBR0QsZ0JBQS9DLElBQW1FLEVBQTNHO0FBQ0ErQyxnQkFBSSxDQUFDbkcsQ0FBRCxDQUFKLENBQVF5QixDQUFDLEdBQUcsQ0FBWixFQUFlLGVBQWYsSUFBa0MyRCxhQUFsQztBQUNBO0FBQ0Q7QUFDRDs7QUFDRCxhQUFPZSxJQUFQO0FBQ0EiLCJmaWxlIjoic29uZ19wbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93ZWIvYXNzZXRzL2pzL3NvbmdfcGxheWVyLmpzXCIpO1xuIiwiZnVuY3Rpb24gZ2V0SW5zdHJ1bWVudEtleU9mZnNldChpbnN0cnVtZW50KSB7XG5cdGxldCBrZXlfb2Zmc2V0cyA9IHtcblx0XHQnZ3VpdGFyJzogMTIsXG5cdFx0J2NsYXJpbmV0JzogMixcblx0XHQnYmFzc19jbGFyaW5ldCc6IDE0LFxuXHRcdCdzb3ByYW5vX3NheG9waG9uZSc6IDIsXG5cdFx0J2FsdG9fc2F4b3Bob25lJzogOSxcblx0XHQndGVub3Jfc2F4b3Bob25lJzogMTQsXG5cdFx0J2ZyZW5jaF9ob3JuJzogNyxcblx0XHQndHJ1bXBldCc6IDIsXG5cdFx0J3BpYW5vJzogMCxcblx0fVxuXHRyZXR1cm4ga2V5X29mZnNldHNbaW5zdHJ1bWVudF07XG59XG5cbmZ1bmN0aW9uIGdldEluc3RydW1lbnRGaW5nZXJpbmcoaW5zdHJ1bWVudCkge1xuXHRsZXQgZmluZ2VyaW5nX21hcCA9IHtcblx0XHQnZ3VpdGFyJzogJ2d1aXRhcicsXG5cdFx0J3BpY2NvbG8nOiAncGljb2xvJyxcblx0XHQnY2xhcmluZXQnOiAnY2xhcmluZXQnLFxuXHRcdCdiYXNzX2NsYXJpbmV0JzogJ2NsYXJpbmV0Jyxcblx0XHQnc29wcmFub19zYXhvcGhvbmUnOiAnc2F4b3Bob25lJyxcblx0XHQnYWx0b19zYXhvcGhvbmUnOiAnc2F4b3Bob25lJyxcblx0XHQndGVub3Jfc2F4b3Bob25lJzogJ3NheG9waG9uZScsXG5cdFx0J2Jhcml0b25lX3NheG9waG9uZSc6ICdzYXhvcGhvbmUnLFxuXHRcdCdmcmVuY2hfaG9ybic6ICd0cnVtcGV0Jyxcblx0XHQndHJ1bXBldCc6ICd0cnVtcGV0Jyxcblx0XHQneHlsb3Bob25lJzogJ3h5bG9waG9uZScsXG5cdFx0J2dsb2NrZW5zcGllbCc6ICdnbG9ja2Vuc3BpZWwnLFxuXHRcdCdwaWFubyc6ICdwaWFubycsXG5cdH1cblx0cmV0dXJuIGZpbmdlcmluZ19tYXBbaW5zdHJ1bWVudF07XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGdldEluc3RydW1lbnRLZXlPZmZzZXQ6IGdldEluc3RydW1lbnRLZXlPZmZzZXQsXG5cdGdldEluc3RydW1lbnRGaW5nZXJpbmc6IGdldEluc3RydW1lbnRGaW5nZXJpbmcsXG59XG4iLCJmdW5jdGlvbiBjb21wYXJlS2V5cyhub3RlMSwgbm90ZTIpIHtcblx0bGV0IGtleWFsaWFzZXMgPSB7XG5cdFx0J2FiJzogJ2cjJyxcblx0XHQnYScgOiAnYScsXG5cdFx0J2EjJyA6ICdiYicsXG5cdFx0J2JiJyA6ICdhIycsXG5cdFx0J2InIDogJ2NiJyxcblx0XHQnYiMnOiAnYycsXG5cdFx0J2NiJyA6ICdiJyxcblx0XHQnYycgOiAnYiMnLFxuXHRcdCdjIyc6ICdkYicsXG5cdFx0J2RiJyA6ICdjIycsXG5cdFx0J2QnIDogJ2QnLFxuXHRcdCdkIycgOiAnZWInLFxuXHRcdCdlYicgOiAnZCMnLFxuXHRcdCdlJyA6ICdmYicsXG5cdFx0J2UjJyA6ICdmJyxcblx0XHQnZmInIDogJ2UnLFxuXHRcdCdmJyA6ICdmJyxcblx0XHQnZiMnIDogJ2diJyxcblx0XHQnZ2InIDogJ2YjJyxcblx0XHQnZycgOiAnZycsXG5cdFx0J2cjJyA6ICdhYicsXG5cdH1cblx0aWYgKG5vdGUxID09IHVuZGVmaW5lZCB8fCBub3RlMiA9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIG5vdGUxLnRvTG93ZXJDYXNlKCkgPT0gbm90ZTIudG9Mb3dlckNhc2UoKSB8fCBrZXlhbGlhc2VzW25vdGUxLnRvTG93ZXJDYXNlKCldID09IG5vdGUyLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIGdldEtleUFzRmxhdChrZXkpIHtcblx0bGV0IGZsYXRfbWFwID0ge1xuXHRcdCdhYic6ICdBYicsXG5cdFx0J2EnIDogJ2EnLFxuXHRcdCdhIycgOiAnQmInLFxuXHRcdCdiYicgOiAnQmInLFxuXHRcdCdiJyA6ICdCJyxcblx0XHQnY2InIDogJ0InLFxuXHRcdCdjJyA6ICdDJyxcblx0XHQnYyMnOiAnRGInLFxuXHRcdCdkYicgOiAnRGInLFxuXHRcdCdkJyA6ICdEJyxcblx0XHQnZCMnIDogJ0ViJyxcblx0XHQnZWInIDogJ0ViJyxcblx0XHQnZScgOiAnRmInLFxuXHRcdCdlIycgOiAnRicsXG5cdFx0J2ZiJyA6ICdFJyxcblx0XHQnZicgOiAnRicsXG5cdFx0J2YjJyA6ICdHYicsXG5cdFx0J2diJyA6ICdHYicsXG5cdFx0J2cnIDogJ0cnLFxuXHRcdCdnIycgOiAnQWInLFxuXHR9XG5cdHJldHVybiBmbGF0X21hcFtrZXkudG9Mb3dlckNhc2UoKV1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRjb21wYXJlS2V5czogY29tcGFyZUtleXNcbn1cbiIsImltcG9ydCBrZXlfY29tcGFyaXNvbiBmcm9tICcuL2tleV9jb21wYXJpc29uJ1xuXG5mdW5jdGlvbiBnZXRLZXlTaWduYXR1cmVJbmZvKGtleSkge1xuXHQvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9LZXlfc2lnbmF0dXJlXG5cdGxldCBrZXlfc2lncyA9IHtcblx0XHQnQyBtYWpvcicgOiB7XG5cdFx0XHQndHlwZSc6ICcjJyxcblx0XHRcdCdub3Rlcyc6IHt9XG5cdFx0fSxcblx0XHQnQSBtaW5vcicgOiB7XG5cdFx0XHQndHlwZSc6ICcjJyxcblx0XHRcdCdub3Rlcyc6IHt9XG5cdFx0fSxcblx0XHQnRyBtYWpvcicgOiB7XG5cdFx0XHQndHlwZSc6ICcjJyxcblx0XHRcdCdub3Rlcyc6IHsnRic6IHRydWV9XG5cdFx0fSxcblx0XHQnRSBtaW5vcicgOiB7XG5cdFx0XHQndHlwZSc6ICcjJyxcblx0XHRcdCdub3Rlcyc6IHsnRic6IHRydWV9XG5cdFx0fSxcblx0XHQnRCBtYWpvcicgOiB7XG5cdFx0XHQndHlwZSc6ICcjJyxcblx0XHRcdCdub3Rlcyc6IHsnRicgOiB0cnVlLCAnQycgOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0IgbWlub3InIDoge1xuXHRcdFx0J3R5cGUnOiAnIycsXG5cdFx0XHQnbm90ZXMnOiB7J0YnIDogdHJ1ZSwgJ0MnIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdBIG1ham9yJyA6IHtcblx0XHRcdCd0eXBlJzogJyMnLFxuXHRcdFx0J25vdGVzJzogeydGJyA6IHRydWUsICdDJyA6IHRydWUsICdHJyA6IHRydWV9XG5cdFx0fSxcblx0XHQnRSBtYWpvcicgOiB7XG5cdFx0XHQndHlwZSc6ICcjJyxcblx0XHRcdCdub3Rlcyc6IHsnRicgOiB0cnVlLCAnQycgOiB0cnVlLCAnRycgOiB0cnVlLCAnRCcgOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0IgbWFqb3InIDoge1xuXHRcdFx0J3R5cGUnOiAnIycsXG5cdFx0XHQnbm90ZXMnOiB7J0YnIDogdHJ1ZSwgJ0MnIDogdHJ1ZSwgJ0cnIDogdHJ1ZSwgJ0QnIDogdHJ1ZSwgJ0EnIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdGIG1ham9yJyA6IHtcblx0XHRcdCd0eXBlJzogJ2InLFxuXHRcdFx0J25vdGVzJzogeydCJyA6IHRydWV9XG5cdFx0fSxcblx0XHQnRCBtaW5vcicgOiB7XG5cdFx0XHQndHlwZSc6ICdiJyxcblx0XHRcdCdub3Rlcyc6IHsnQicgOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0JiIG1ham9yJyA6IHtcblx0XHRcdCd0eXBlJzogJ2InLFxuXHRcdFx0J25vdGVzJzogeydCJyA6IHRydWUsICdFJyA6IHRydWV9XG5cdFx0fSxcblx0XHQnRyBtaW5vcicgOiB7XG5cdFx0XHQndHlwZSc6ICdiJyxcblx0XHRcdCdub3Rlcyc6IHsnQicgOiB0cnVlLCAnRScgOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0ViIG1ham9yJyA6IHtcblx0XHRcdCd0eXBlJzogJ2InLFxuXHRcdFx0J25vdGVzJzogeydCJyA6IHRydWUsICdFJyA6IHRydWUsICdBJyA6IHRydWV9XG5cdFx0fSxcblx0XHQnQyBtaW5vcicgOiB7XG5cdFx0XHQndHlwZSc6ICdiJyxcblx0XHRcdCdub3Rlcyc6IHsnQicgOiB0cnVlLCAnRScgOiB0cnVlLCAnQScgOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0FiIG1ham9yJyA6IHtcblx0XHRcdCd0eXBlJzogJ2InLFxuXHRcdFx0J25vdGVzJzogeydCJyA6IHRydWUsICdFJyA6IHRydWUsICdBJyA6IHRydWUsICdEJyA6IHRydWV9XG5cdFx0fSxcblx0XHQnRiBtaW5vcicgOiB7XG5cdFx0XHQndHlwZSc6ICdiJyxcblx0XHRcdCdub3Rlcyc6IHsnQicgOiB0cnVlLCAnRScgOiB0cnVlLCAnQScgOiB0cnVlLCAnRCcgOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0RiIG1ham9yJyA6IHtcblx0XHRcdCd0eXBlJzogJ2InLFxuXHRcdFx0J25vdGVzJzogeydCJyA6IHRydWUsICdFJyA6IHRydWUsICdBJyA6IHRydWUsICdEJyA6IHRydWUsICdHJyA6IHRydWV9XG5cdFx0fSxcblx0XHQnQmIgbWlub3InIDoge1xuXHRcdFx0J3R5cGUnOiAnYicsXG5cdFx0XHQnbm90ZXMnOiB7J0InIDogdHJ1ZSwgJ0UnIDogdHJ1ZSwgJ0EnIDogdHJ1ZSwgJ0QnIDogdHJ1ZSwgJ0cnIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdHYiBtYWpvcicgOiB7XG5cdFx0XHQndHlwZSc6ICdiJyxcblx0XHRcdCdub3Rlcyc6IHsnQicgOiB0cnVlLCAnRScgOiB0cnVlLCAnQScgOiB0cnVlLCAnRCcgOiB0cnVlLCAnRycgOiB0cnVlLCAnQycgOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0ViIG1pbm9yJyA6IHtcblx0XHRcdCd0eXBlJzogJ2InLFxuXHRcdFx0J25vdGVzJzogeydCJyA6IHRydWUsICdFJyA6IHRydWUsICdBJyA6IHRydWUsICdEJyA6IHRydWUsICdHJyA6IHRydWUsICdDJyA6IHRydWV9XG5cdFx0fSxcblx0XHQnQ2IgbWFqb3InIDoge1xuXHRcdFx0J3R5cGUnOiAnYicsXG5cdFx0XHQnbm90ZXMnOiB7J0InIDogdHJ1ZSwgJ0UnIDogdHJ1ZSwgJ0EnIDogdHJ1ZSwgJ0QnIDogdHJ1ZSwgJ0cnIDogdHJ1ZSwgJ0MnIDogdHJ1ZSwgJ0YnIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdBYiBtaW5vcicgOiB7XG5cdFx0XHQndHlwZScgOiAnYicsXG5cdFx0XHQnbm90ZXMnOiB7J0InOiB0cnVlLCAnRSc6IHRydWUsICdBJzogdHJ1ZSwgJ0QnOiB0cnVlLCAnRyc6IHRydWUsICdDJzogdHJ1ZSwgJ0YnOiB0cnVlfVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGtleV9zaWdzW2tleV07XG59XG5cbmZ1bmN0aW9uIGdldE9mZnNldE5vdGUoa2V5LCBvY3RhdmUsIG9mZnNldCkge1xuXHRsZXQgbm90ZXMgPSBbJ0MnLCAnRGInLCAnRCcsICdFYicsICdFJywgJ0YnLCAnR2InLCAnRycsICdBYicsICdBJywgJ0JiJywgJ0InXTtcblx0bGV0IHN0YXJ0SW5kZXggPSAwO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IG5vdGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKGtleV9jb21wYXJpc29uLmNvbXBhcmVLZXlzKG5vdGVzW2ldLCBrZXkpKSB7XG5cdFx0XHRzdGFydEluZGV4ID0gaTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXHRsZXQgb2Zmc2V0S2V5ID0gbm90ZXNbKG5vdGVzLmxlbmd0aCArIHN0YXJ0SW5kZXggKyBvZmZzZXQpICUgbm90ZXMubGVuZ3RoXTtcblx0bGV0IG9mZnNldE9jdGF2ZSA9IG9jdGF2ZSArIE1hdGguZmxvb3IoKHN0YXJ0SW5kZXggKyBvZmZzZXQpIC8gbm90ZXMubGVuZ3RoKTtcblx0cmV0dXJuIHtcblx0XHRcIm5hbWVcIjogb2Zmc2V0S2V5LFxuXHRcdFwib2N0YXZlXCI6IG9mZnNldE9jdGF2ZSxcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRnZXRLZXlTaWduYXR1cmVJbmZvOiBnZXRLZXlTaWduYXR1cmVJbmZvLFxuXHRnZXRPZmZzZXROb3RlOiBnZXRPZmZzZXROb3RlXG59XG5cbiIsImltcG9ydCBrZXlfY29tcGFyaXNvbiBmcm9tICcuL2tleV9jb21wYXJpc29uJ1xubGV0IG5vdGVGcmVxdWVuY2llcyA9XG5cdC8vIEIgICAgICAgIEEjICAgICAgICBBICAgICAgRyMgICAgICAgRyAgICAgICAgIEYjICAgICAgIEYgICAgICAgIEUgICAgICAgICBEIyAgICAgIEQgICAgICAgIEMjICAgICAgIENcblx0Wzc5MDIuMTMsIDc0NTguNjIsIDcwNDAuMDAsIDY2NDQuODgsIDYyNzEuOTMsIDU5MTkuOTEsIDU1ODcuNjUsIDUyNzQuMDQsIDQ5NzguMDMsIDQ2OTguNjQsIDQ0MzQuOTIsIDQxODYuMDEsICAvLyA4XG5cdDM5NTEuMDcsIDM3MjkuMzEsIDM1MjAuMDAsIDMzMjIuNDQsIDMxMzUuOTYsIDI5NTkuOTYsIDI3OTMuODMsIDI2MzcuMDIsIDI0ODkuMDIsIDIzNDkuMzIsIDIyMTcuNDYsIDIwOTMuMDAsICAgLy8gN1xuXHQxOTc1LjUzLCAxODY0LjY2LCAxNzYwLjAwLCAxNjYxLjIyLCAxNTY3Ljk4LCAxNDc5Ljk4LCAxMzk2LjkxLCAxMzE4LjUxLCAxMjQ0LjUxLCAxMTc0LjY2LCAxMTA4LjczLCAxMDQ2LjUwLCAgIC8vIDZcblx0OTg3Ljc2NywgOTMyLjMyOCwgODgwLjAwMCwgODMwLjYwOSwgNzgzLjk5MSwgNzM5Ljk4OSwgNjk4LjQ1NiwgNjU5LjI1NSwgNjIyLjI1NCwgNTg3LjMzMCwgNTU0LjM2NSwgNTIzLjI1MSwgICAvLyA1XG5cdDQ5My44ODMsIDQ2Ni4xNjQsIDQ0MC4wMDAsIDQxNS4zMDUsIDM5MS45OTUsIDM2OS45OTQsIDM0OS4yMjgsIDMyOS42MjgsIDMxMS4xMjcsIDI5My42NjUsIDI3Ny4xODMsIDI2MS42MjYsICAgLy8gNFxuXHQyNDYuOTQyLCAyMzMuMDgyLCAyMjAuMDAwLCAyMDcuNjUyLCAxOTUuOTk4LCAxODQuOTk3LCAxNzQuNjE0LCAxNjQuODE0LCAxNTUuNTYzLCAxNDYuODMyLCAxMzguNTkxLCAxMzAuODEzLCAgIC8vIDNcblx0MTIzLjQ3MSwgMTE2LjU0MSwgMTEwLjAwMCwgMTAzLjgyNiwgOTcuOTk4OSwgOTIuNDk4NiwgODcuMzA3MSwgODIuNDA2OSwgNzcuNzgxNywgNzMuNDE2MiwgNjkuMjk1NywgNjUuNDA2NCwgICAvLyAyXG5cdDYxLjczNTQsIDU4LjI3MDUsIDU1LjAwMDAsIDUxLjkxMzEsIDQ4Ljk5OTQsIDQ2LjI0OTMsIDQzLjY1MzUsIDQxLjIwMzQsIDM4Ljg5MDksIDM2LjcwODEsIDM0LjY0NzgsIDMyLjcwMzIsICAgLy8gMVxuXHQzMC44Njc3LCAyOS4xMzUyLCAyNy41MDAwLCAyNS45NTY1LCAyNC40OTk3LCAyMy4xMjQ3LCAyMS44MjY4LCAyMC42MDE3LCAxOS40NDU0LCAxOC4zNTQwLCAxNy4zMjM5LCAxNi4zNTE2XTsgLy8gMFxuXG5sZXQgbm90ZU5hbWVzID0gW1wiQlwiLCBcIkEjXCIsIFwiQVwiLCBcIkcjXCIsIFwiR1wiLCBcIkYjXCIsIFwiRlwiLCBcIkVcIiwgXCJEI1wiLCBcIkRcIiwgXCJDI1wiLCBcIkNcIl07XG5cbmZ1bmN0aW9uIGVzdGltYXRlTm90ZShmcmVxdWVuY3kpIHtcblx0bGV0IGxlbmd0aCA9IG5vdGVGcmVxdWVuY2llcy5sZW5ndGg7XG5cdGxldCBmcmVxdWVuY3lJbmRleCA9IDA7XG5cdGxldCBuZXh0Q2xvc2VzdEluZGV4ID0gMDtcblxuXHQvLyBJdGVyYXRlIHRocm91Z2ggdGhlIG5vdGUgYXJyYXkgdG8gZmluZCB0aGUgY2xvc2VzdCBpbmRpY2VzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0aWYgKGkgPT0gMCAmJiBmcmVxdWVuY3kgPiBub3RlRnJlcXVlbmNpZXNbaV0pIHtcblx0XHRcdGZyZXF1ZW5jeUluZGV4ID0gMDtcblx0XHRcdG5leHRDbG9zZXN0SW5kZXggPSAwO1xuXHRcdFx0YnJlYWs7XG5cdFx0fSBlbHNlIGlmIChub3RlRnJlcXVlbmNpZXNbaV0gPj0gZnJlcXVlbmN5ICYmIGZyZXF1ZW5jeSA+IG5vdGVGcmVxdWVuY2llc1tpICsgMV0pIHtcblx0XHRcdGZyZXF1ZW5jeUluZGV4ID0gKG5vdGVGcmVxdWVuY2llc1tpXSAtIGZyZXF1ZW5jeSkgPCAoZnJlcXVlbmN5IC0gbm90ZUZyZXF1ZW5jaWVzW2kgKyAxXSkgPyBpIDogaSArIDE7XG5cdFx0XHRuZXh0Q2xvc2VzdEluZGV4ID0gZnJlcXVlbmN5SW5kZXggPT0gaSA/IGkgKyAxIDogaTtcblx0XHRcdGJyZWFrO1xuXHRcdH0gZWxzZSBpZiAoaSA9PSBsZW5ndGggLSAyKSB7XG5cdFx0XHRmcmVxdWVuY3lJbmRleCA9IGxlbmd0aCAtIDE7XG5cdFx0XHRuZXh0Q2xvc2VzdEluZGV4ID0gbGVuZ3RoIC0gMTtcblx0XHR9XG5cdH1cblxuXHQvLyBHZXQgdGhlIG5hbWUgb2YgdGhlIG5vdGVcblx0cmV0dXJuIHtcblx0XHRrZXk6IG5vdGVOYW1lc1soZnJlcXVlbmN5SW5kZXgpICUgbm90ZU5hbWVzLmxlbmd0aF0sXG5cdFx0b2N0YXZlOiA4IC0gTWF0aC5mbG9vcihmcmVxdWVuY3lJbmRleCAvIG5vdGVOYW1lcy5sZW5ndGgpLFxuXHR9O1xufVxuXG5mdW5jdGlvbiBnZXRGcmVxdWVuY3lGb3JOb3RlKG5vdGVfbmFtZSwgbm90ZV9vY3RhdmUpIHtcblx0bGV0IG5vdGVOYW1lSW5kZXg7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbm90ZU5hbWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKGtleV9jb21wYXJpc29uLmNvbXBhcmVLZXlzKG5vdGVfbmFtZSwgbm90ZU5hbWVzW2ldKSkge1xuXHRcdFx0bm90ZU5hbWVJbmRleCA9IGk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblx0cmV0dXJuIG5vdGVGcmVxdWVuY2llc1tub3RlRnJlcXVlbmNpZXMubGVuZ3RoIC0gMSAtIChub3RlX29jdGF2ZSAqIG5vdGVOYW1lcy5sZW5ndGgpIC0gKG5vdGVOYW1lcy5sZW5ndGggLSBub3RlTmFtZUluZGV4IC0gMSldXG59XG5cbmZ1bmN0aW9uIGdldE5vdGVGcm9tV2F2ZSh3YXZlKSB7XG5cdGxldCBmcmVxdWVuY3kgPSBlc3RpbWF0ZUZyZXF1ZW5jeSh3YXZlKVxuXHRpZiAoZnJlcXVlbmN5ICE9IC0xKSB7XG5cdFx0cmV0dXJuIGVzdGltYXRlTm90ZShmcmVxdWVuY3kpXG5cdH1cblx0cmV0dXJuIFtdO1xuXG59XG5cbmZ1bmN0aW9uIGVzdGltYXRlRnJlcXVlbmN5KHdhdmUpIHtcblxuXHRmdW5jdGlvbiBhdXRvQ29ycmVsYXRpb25EaWZmZXJlbmNlKHdhdmUpIHtcblx0XHR2YXIgY29tcHJlc3NlZFdhdmUgPSBuZXcgQXJyYXkod2F2ZS5sZW5ndGggLyAyKVxuXHRcdHZhciBjb21wcmVzc2VkUmVzdWx0QnVmZmVyID0gbmV3IEFycmF5KGNvbXByZXNzZWRXYXZlLmxlbmd0aCAvIDIpXG5cdFx0dmFyIHJlc3VsdEJ1ZmZlciA9IG5ldyBBcnJheSh3YXZlLmxlbmd0aCAvIDIpXG5cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgd2F2ZS5sZW5ndGggLSAxOyBpICs9IDIpIHtcblx0XHRcdGNvbXByZXNzZWRXYXZlW2kgLyAyXSA9ICh3YXZlW2ldICsgd2F2ZVtpICsgMV0pIC8gMjtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNvbXByZXNzZWRSZXN1bHRCdWZmZXIubGVuZ3RoOyBqKyspIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY29tcHJlc3NlZFJlc3VsdEJ1ZmZlci5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHQvLyBkIHN1YiB0ICh0YXUpID0gKHgoaSkgLSB4KGkgLSB0YXUpKV4yLCBmcm9tIGkgPSAxIHRvIHJlc3VsdCBidWZmZXIgc2l6ZVxuXHRcdFx0XHRpZiAoIShqIGluIGNvbXByZXNzZWRSZXN1bHRCdWZmZXIpKSB7XG5cdFx0XHRcdFx0Y29tcHJlc3NlZFJlc3VsdEJ1ZmZlcltqXSA9IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29tcHJlc3NlZFJlc3VsdEJ1ZmZlcltqXSArPSBNYXRoLnBvdygoY29tcHJlc3NlZFdhdmVbaV0gLSBjb21wcmVzc2VkV2F2ZVtpICsgal0pLCAyKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdEJ1ZmZlci5sZW5ndGggLSAxOyBpICs9IDIpIHtcblx0XHRcdHZhciBpTm9ybSA9IGkgLyAyO1xuXHRcdFx0dmFyIGRpZmYgPSAoY29tcHJlc3NlZFJlc3VsdEJ1ZmZlcltpTm9ybSArIDFdIC0gY29tcHJlc3NlZFJlc3VsdEJ1ZmZlcltpTm9ybV0pIC8gMjtcblx0XHRcdHJlc3VsdEJ1ZmZlcltpXSA9IGNvbXByZXNzZWRSZXN1bHRCdWZmZXJbaU5vcm1dO1xuXHRcdFx0cmVzdWx0QnVmZmVyW2kgKyAxXSA9IGNvbXByZXNzZWRSZXN1bHRCdWZmZXJbaU5vcm1dICsgZGlmZjtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdEJ1ZmZlcjtcblx0fVxuXG5cdGZ1bmN0aW9uIGN1bXVsYXRpdmVNZWFuTm9ybWFsaXplZERpZmZlcmVuY2UocmVzdWx0QnVmZmVyKSB7XG5cdFx0dmFyIGxlbmd0aCA9IHJlc3VsdEJ1ZmZlci5sZW5ndGg7XG5cdFx0dmFyIHJ1bm5pbmdTdW0gPSAwO1xuXG5cdFx0Ly8gU2V0IHRoZSBmaXJzdCB2YWx1ZSBpbiB0aGUgcmVzdWx0IGJ1ZmZlciB0byB0aGUgdmFsdWUgb2Ygb25lXG5cdFx0cmVzdWx0QnVmZmVyWzBdID0gMTtcblxuXHRcdGZvciAodmFyIGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRcdC8vIFRoZSBzdW0gb2YgdGhpcyB2YWx1ZSBwbHVzIGFsbCB0aGUgcHJldmlvdXMgdmFsdWVzIGluIHRoZSBidWZmZXIgYXJyYXlcblx0XHRcdHJ1bm5pbmdTdW0gPSBydW5uaW5nU3VtICsgcmVzdWx0QnVmZmVyW2ldO1xuXG5cdFx0XHQvLyBUaGUgY3VycmVudCB2YWx1ZSBpcyB1cGRhdGVkIHRvIGJlIHRoZSBjdXJyZW50IHZhbHVlIG11bHRpcGxpZWQgYnkgdGhlIGluZGV4IGRpdmlkZWQgYnkgdGhlIHJ1bm5pbmcgc3VtIHZhbHVlXG5cdFx0XHRyZXN1bHRCdWZmZXJbaV0gPSAgcmVzdWx0QnVmZmVyW2ldICogaSAvIHJ1bm5pbmdTdW07XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHRCdWZmZXI7XG5cdH1cblxuXHRmdW5jdGlvbiBhYnNvbHV0ZVRocmVzaG9sZChyZXN1bHRCdWZmZXIpIHtcblx0XHR2YXIgdGF1O1xuXHRcdHZhciBsZW5ndGggPSByZXN1bHRCdWZmZXIubGVuZ3RoO1xuXG5cdFx0Ly8gVGhlIGZpcnN0IHR3byB2YWx1ZXMgaW4gdGhlIHJlc3VsdCBidWZmZXIgc2hvdWxkIGJlIDEsIHNvIHN0YXJ0IGF0IHRoZSB0aGlyZCB2YWx1ZVxuXHRcdGZvciAodGF1ID0gMjsgdGF1IDwgbGVuZ3RoOyB0YXUrKykge1xuXHRcdFx0Ly8gSWYgd2UgYXJlIGxlc3MgdGhhbiB0aGUgdGhyZXNob2xkLCBjb250aW51ZSBvbiB1bnRpbCB3ZSBmaW5kIHRoZSBsb3dlc3QgdmFsdWVcblx0XHRcdC8vIGluZGljYXRpbmcgdGhlIGxvd2VzdCBkaXAgaW4gdGhlIHdhdmUgc2luY2Ugd2UgZmlyc3QgY3Jvc3NlZCB0aGUgdGhyZXNob2xkLlxuXHRcdFx0aWYgKHJlc3VsdEJ1ZmZlclt0YXVdIDwgMC4xKSB7XG5cdFx0XHRcdHdoaWxlICh0YXUgKyAxIDwgbGVuZ3RoICYmIHJlc3VsdEJ1ZmZlclt0YXUgKyAxXSA8IHJlc3VsdEJ1ZmZlclt0YXVdKSB7XG5cdFx0XHRcdFx0dGF1Kys7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBXZSBoYXZlIHRoZSBhcHByb3hpbWF0ZSB0YXUgdmFsdWUsIHNvIGJyZWFrIHRoZSBsb29wXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFNvbWUgaW1wbGVtZW50YXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHNldCB0aGUgdGF1IHZhbHVlIHRvIC0xIHRvIGluZGljYXRlIG5vIGNvcnJlY3QgdGF1XG5cdFx0Ly8gdmFsdWUgd2FzIGZvdW5kLiBUaGlzIGltcGxlbWVudGF0aW9uIHdpbGwganVzdCByZXR1cm4gdGhlIGxhc3QgdGF1LlxuXHRcdHRhdSA9ICh0YXUgPj0gbGVuZ3RoIC0gMSA/IC0xIDogdGF1KTtcblx0XHRyZXR1cm4gdGF1O1xuXHR9XG5cblx0ZnVuY3Rpb24gcGFyYWJvbGljSW50ZXJwcmV0YXRpb24oY3VycmVudFRhdSwgcmVzdWx0QnVmZmVyKSB7XG5cdFx0Ly8gRmluZHMgdGhlIHBvaW50cyB0byBmaXQgdGhlIHBhcmFib2xhIGJldHdlZW5cblx0XHR2YXIgeDAgPSBjdXJyZW50VGF1IDwgMSA/IGN1cnJlbnRUYXUgOiBjdXJyZW50VGF1IC0gMTtcblx0XHR2YXIgeDIgPSBjdXJyZW50VGF1ICsgMSA8IHJlc3VsdEJ1ZmZlci5sZW5ndGggPyBjdXJyZW50VGF1ICsgMSA6IGN1cnJlbnRUYXU7XG5cblx0XHQvLyBGaW5kcyB0aGUgYmV0dGVyIHRhdSBlc3RpbWF0ZVxuXHRcdHZhciBiZXR0ZXJUYXU7XG5cblx0XHRpZiAoeDAgPT0gY3VycmVudFRhdSkge1xuXHRcdFx0aWYgKHJlc3VsdEJ1ZmZlcltjdXJyZW50VGF1XSA8PSByZXN1bHRCdWZmZXJbeDJdKSB7XG5cdFx0XHRcdGJldHRlclRhdSA9IGN1cnJlbnRUYXU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRiZXR0ZXJUYXUgPSB4Mjtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHgyID09IGN1cnJlbnRUYXUpIHtcblx0XHRcdGlmIChyZXN1bHRCdWZmZXJbY3VycmVudFRhdV0gPD0gcmVzdWx0QnVmZmVyW3gwXSkge1xuXHRcdFx0XHRiZXR0ZXJUYXUgPSBjdXJyZW50VGF1O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YmV0dGVyVGF1ID0geDA7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIEZpdCB0aGUgcGFyYWJvbGEgYmV0d2VlbiB0aGUgZmlyc3QgcG9pbnQsIGN1cnJlbnQgdGF1LCBhbmQgdGhlIGxhc3QgcG9pbnQgdG8gZmluZCBhXG5cdFx0XHQvLyBiZXR0ZXIgdGF1IGVzdGltYXRlLlxuXHRcdFx0dmFyIHMwID0gcmVzdWx0QnVmZmVyW3gwXTtcblx0XHRcdHZhciBzMSA9IHJlc3VsdEJ1ZmZlcltjdXJyZW50VGF1XTtcblx0XHRcdHZhciBzMiA9IHJlc3VsdEJ1ZmZlclt4Ml07XG5cblx0XHRcdGJldHRlclRhdSA9IGN1cnJlbnRUYXUgKyAoczIgLSBzMCkgLyAoMiAqICgyICogczEgLSBzMiAtIHMwKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGJldHRlclRhdTtcblx0fVxuXG5cdHZhciByZXN1bHRCdWZmZXIgPSBhdXRvQ29ycmVsYXRpb25EaWZmZXJlbmNlKHdhdmUpO1xuXHRyZXN1bHRCdWZmZXIgPSBjdW11bGF0aXZlTWVhbk5vcm1hbGl6ZWREaWZmZXJlbmNlKHJlc3VsdEJ1ZmZlcilcblx0dmFyIHRhdSA9IGFic29sdXRlVGhyZXNob2xkKHJlc3VsdEJ1ZmZlcilcblx0aWYgKHRhdSA9PSAtMSkge1xuXHRcdHJldHVybiB0YXU7XG5cdH1cblx0dGF1ID0gcGFyYWJvbGljSW50ZXJwcmV0YXRpb24odGF1LCByZXN1bHRCdWZmZXIpXG5cdHJldHVybiA0NDEwMCAvIHRhdVxufVxuXG5mdW5jdGlvbiBnZXROb3RlRnJvbVNhbXBsZXMoYnVmZmVyLCBzYW1wbGVSYXRlKSB7XG5cdC8vIFdlIHVzZSBBdXRvY29ycmVsYXRpb24gdG8gZmluZCB0aGUgZnVuZGFtZW50YWwgZnJlcXVlbmN5LlxuXG5cdC8vIEluIG9yZGVyIHRvIGNvcnJlbGF0ZSB0aGUgc2lnbmFsIHdpdGggaXRzZWxmIChoZW5jZSB0aGUgbmFtZSBvZiB0aGUgYWxnb3JpdGhtKSwgd2Ugd2lsbCBjaGVjayB0d28gcG9pbnRzICdrJyBmcmFtZXMgYXdheS5cblx0Ly8gVGhlIGF1dG9jb3JyZWxhdGlvbiBpbmRleCB3aWxsIGJlIHRoZSBhdmVyYWdlIG9mIHRoZXNlIHByb2R1Y3RzLiBBdCB0aGUgc2FtZSB0aW1lLCB3ZSBub3JtYWxpemUgdGhlIHZhbHVlcy5cblx0Ly8gU291cmNlOiBodHRwOi8vd3d3LnBoeS5tdHkuZWR1L35zdWl0cy9hdXRvY29ycmVsYXRpb24uaHRtbFxuXHQvLyBBc3N1bWluZyB0aGUgc2FtcGxlIHJhdGUgaXMgNDgwMDBIeiwgYSAnaycgZXF1YWwgdG8gMTAwMCB3b3VsZCBjb3JyZXNwb25kIHRvIGEgNDhIeiBzaWduYWwgKDQ4MDAwLzEwMDAgPSA0OCksXG5cdC8vIHdoaWxlIGEgJ2snIGVxdWFsIHRvIDggd291bGQgY29ycmVzcG9uZCB0byBhIDYwMDBIeiBvbmUsIHdoaWNoIGlzIGVub3VnaCB0byBjb3ZlciBtb3N0IChpZiBub3QgYWxsKVxuXHQvLyB0aGUgbm90ZXMgd2UgaGF2ZSBpbiB0aGUgbm90ZXMuanNvbiBmaWxlLlxuXHR2YXIgbiA9IDEwMjQsIGJlc3RSID0gMCwgYmVzdEsgPSAtMTtcblx0Zm9yKHZhciBrID0gODsgayA8PSAxMDAwOyBrKyspe1xuXHRcdHZhciBzdW0gPSAwO1xuXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG47IGkrKyl7XG5cdFx0XHRzdW0gKz0gKChidWZmZXJbaV0gLSAxMjgpIC8gMTI4KSAqICgoYnVmZmVyW2kgKyBrXSAtIDEyOCkgLyAxMjgpO1xuXHRcdH1cblxuXHRcdHZhciByID0gc3VtIC8gKG4gKyBrKTtcblxuXHRcdGlmKHIgPiBiZXN0Uil7XG5cdFx0XHRiZXN0UiA9IHI7XG5cdFx0XHRiZXN0SyA9IGs7XG5cdFx0fVxuXG5cdFx0aWYociA+IDAuOSkge1xuXHRcdFx0Ly8gTGV0J3MgYXNzdW1lIHRoYXQgdGhpcyBpcyBnb29kIGVub3VnaCBhbmQgc3RvcCByaWdodCBoZXJlXG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRpZihiZXN0UiA+IDAuMDAyNSkge1xuXHRcdC8vIFRoZSBwZXJpb2QgKGluIGZyYW1lcykgb2YgdGhlIGZ1bmRhbWVudGFsIGZyZXF1ZW5jeSBpcyAnYmVzdEsnLiBHZXR0aW5nIHRoZSBmcmVxdWVuY3kgZnJvbSB0aGVyZSBpcyB0cml2aWFsLlxuXHRcdHZhciBmdW5kYW1lbnRhbEZyZXEgPSBzYW1wbGVSYXRlIC8gYmVzdEs7XG5cdFx0cmV0dXJuIGVzdGltYXRlTm90ZShmdW5kYW1lbnRhbEZyZXEpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIFdlIGhhdmVuJ3QgZm91bmQgYSBnb29kIGNvcnJlbGF0aW9uXG5cdFx0cmV0dXJuIFtdO1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGdldEZyZXF1ZW5jeUZvck5vdGU6IGdldEZyZXF1ZW5jeUZvck5vdGUsXG5cdGdldE5vdGVGcm9tU2FtcGxlczogZ2V0Tm90ZUZyb21TYW1wbGVzLFxuXHRnZXROb3RlRnJvbVdhdmU6IGdldE5vdGVGcm9tV2F2ZSxcbn1cbiIsImltcG9ydCBub3RlX2RldGVjdGlvbiBmcm9tICcuL25vdGVfZGV0ZWN0aW9uJ1xuaW1wb3J0IEluc3RydW1lbnRzIGZyb20gJy4vaW5zdHJ1bWVudHMnXG5pbXBvcnQgS2V5U2lnbmF0dXJlcyBmcm9tICcuL2tleV9zaWduYXR1cmVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb25nUGxheWVyIHtcblx0Y29uc3RydWN0b3Iobm90ZXMsIGluc3RydW1lbnQsIGJlYXRzX3Blcl9taW51dGUsIGJlYXRzX3Blcl9tZWFzdXJlKSB7XG5cdFx0dGhpcy5hdWRpb0N0eCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcblx0XHR0aGlzLnRpY2sgPSBudWxsO1xuXHRcdHRoaXMudGlja1ZvbHVtZSA9IG51bGw7XG5cdFx0dGhpcy5zb3VuZEh6ID0gMTAwMDtcblx0XHR0aGlzLnNjaGVkdWxlZE5vdGVzID0gdGhpcy5hcHBlbmRUaW1pbmdPZmZzZXQobm90ZXMsIGJlYXRzX3Blcl9tZWFzdXJlLCBiZWF0c19wZXJfbWludXRlKS5mbGF0KCk7XG5cdFx0dGhpcy5pbnN0cnVtZW50ID0gaW5zdHJ1bWVudDtcblx0XHR0aGlzLnNldENvbnRyb2xsZXIoKVxuXHRcdHRoaXMuaW5pdEF1ZGlvKCk7XG5cdH1cblxuXHRpbml0QXVkaW8oKSB7XG5cdFx0dGhpcy50aWNrID0gdGhpcy5hdWRpb0N0eC5jcmVhdGVPc2NpbGxhdG9yKCk7XG5cdFx0dGhpcy50aWNrVm9sdW1lID0gdGhpcy5hdWRpb0N0eC5jcmVhdGVHYWluKCk7XG5cblx0XHR0aGlzLnRpY2sudHlwZSA9ICdzcXVhcmUnO1xuXHRcdHRoaXMudGljay5mcmVxdWVuY3kudmFsdWUgPSB0aGlzLnNvdW5kSHo7XG5cdFx0dGhpcy50aWNrVm9sdW1lLmdhaW4udmFsdWUgPSAwO1xuXG5cdFx0dGhpcy50aWNrLmNvbm5lY3QodGhpcy50aWNrVm9sdW1lKTtcblx0XHQvL3RoaXMudGlja1ZvbHVtZS5jb25uZWN0KHRoaXMuYXVkaW9DdHguZGVzdGluYXRpb24pO1xuXHRcdHRoaXMudGljay5zdGFydCgwKTsgIC8vIE5vIG9mZnNldCwgc3RhcnQgaW1tZWRpYXRlbHkuXG5cdH1cblxuXHRzdGFydCgpIHtcblxuXHRcdGxldCBub3cgPSB0aGlzLmF1ZGlvQ3R4LmN1cnJlbnRUaW1lO1xuXG5cdFx0Ly8gU2NoZWR1bGUgYWxsIHRoZSBjbGlja3MgYWhlYWQuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNjaGVkdWxlZE5vdGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgbm90ZSA9IHRoaXMuc2NoZWR1bGVkTm90ZXNbaV0ubm90ZTtcblx0XHRcdGlmIChub3RlLmF0dHJzLnR5cGUgIT09ICdHaG9zdE5vdGUnKSB7XG5cdFx0XHRcdGxldCBwcm9wcyA9IG5vdGUuZ2V0S2V5UHJvcHMoKVswXTtcblx0XHRcdFx0bGV0IGtleSA9IHByb3BzLmtleTtcblx0XHRcdFx0bGV0IG9jdGF2ZSA9IHByb3BzLm9jdGF2ZTtcblx0XHRcdFx0bGV0IG9mZnNldE5vdGUgPSBLZXlTaWduYXR1cmVzLmdldE9mZnNldE5vdGUoa2V5LCBvY3RhdmUsICAwIC0gSW5zdHJ1bWVudHMuZ2V0SW5zdHJ1bWVudEtleU9mZnNldCh0aGlzLmluc3RydW1lbnQpKTtcblx0XHRcdFx0bGV0IGZyZXFlbmN5ID0gbm90ZV9kZXRlY3Rpb24uZ2V0RnJlcXVlbmN5Rm9yTm90ZShvZmZzZXROb3RlLm5hbWUsIG9mZnNldE5vdGUub2N0YXZlKTtcblx0XHRcdFx0dGhpcy5wbGF5Tm90ZUF0VGltZShmcmVxZW5jeSwgbm93ICsgdGhpcy5zY2hlZHVsZWROb3Rlc1tpXS50aW1pbmdfb2Zmc2V0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwbGF5Tm90ZUF0VGltZShmcmVxdWVuY3ksIHRpbWUpIHtcblx0XHQvLyBTaWxlbmNlIHRoZSBjbGljay5cblx0XHR0aGlzLnRpY2suZnJlcXVlbmN5LmNhbmNlbFNjaGVkdWxlZFZhbHVlcyh0aW1lKTtcblx0XHR0aGlzLnRpY2suZnJlcXVlbmN5LnNldFZhbHVlQXRUaW1lKGZyZXF1ZW5jeSwgdGltZSk7XG5cdFx0dGhpcy50aWNrVm9sdW1lLmdhaW4uY2FuY2VsU2NoZWR1bGVkVmFsdWVzKHRpbWUpO1xuXHRcdHRoaXMudGlja1ZvbHVtZS5nYWluLnNldFZhbHVlQXRUaW1lKDAsIHRpbWUpO1xuXG5cdFx0Ly8gQXVkaWJsZSBjbGljayBzb3VuZC5cblx0XHR0aGlzLnRpY2tWb2x1bWUuZ2Fpbi5saW5lYXJSYW1wVG9WYWx1ZUF0VGltZSgxLCB0aW1lICsgLjAwMSk7XG5cdFx0dGhpcy50aWNrVm9sdW1lLmdhaW4ubGluZWFyUmFtcFRvVmFsdWVBdFRpbWUoMCwgdGltZSArIC4wMDEgKyAuMik7XG5cdH1cblxuXHRzdG9wKCkge1xuXHRcdHRoaXMudGlja1ZvbHVtZS5nYWluLnZhbHVlID0gMDtcblx0fVxuXG5cdHBhdXNlKCkge1xuXHRcdHRoaXMuYXVkaW9DdHguc3VzcGVuZCgpO1xuXHR9XG5cblx0cmVzdW1lKCkge1xuXHRcdHRoaXMuYXVkaW9DdHgucmVzdW1lKCk7XG5cdH1cblxuXHRzZXRDb250cm9sbGVyKCkge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb25nLXBsYXllci1jb250cm9sbGVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcblx0XHRcdFx0dGhpcy50aWNrVm9sdW1lLmNvbm5lY3QodGhpcy5hdWRpb0N0eC5kZXN0aW5hdGlvbik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnRpY2tWb2x1bWUuZGlzY29ubmVjdCh0aGlzLmF1ZGlvQ3R4LmRlc3RpbmF0aW9uKTtcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0YXBwZW5kVGltaW5nT2Zmc2V0KGJhcnMsIGJlYXRzX3Blcl9tZWFzdXJlLCBiZWF0c19wZXJfbWludXRlKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBiYXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgbm90ZXMgPSBiYXJzW2ldO1xuXHRcdFx0aWYgKG5vdGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGxldCBiYXJfdGltaW5nX29mZnNldCA9IGkgKiAoYmVhdHNfcGVyX21lYXN1cmUgLyBiZWF0c19wZXJfbWludXRlKSAqIDYwO1xuXHRcdFx0YmFyc1tpXVswXVsndGltaW5nX29mZnNldCddID0gYmFyX3RpbWluZ19vZmZzZXQ7XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IG5vdGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGlmIChqICE9PSBub3Rlcy5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0bGV0IHRpbWluZ19vZmZzZXQgPSBiYXJfdGltaW5nX29mZnNldCArIG5vdGVzW2ogKyAxXS5wZXJjZW50YWdlICogKGJlYXRzX3Blcl9tZWFzdXJlIC8gYmVhdHNfcGVyX21pbnV0ZSkgKiA2MDtcblx0XHRcdFx0XHRiYXJzW2ldW2ogKyAxXVsndGltaW5nX29mZnNldCddID0gdGltaW5nX29mZnNldDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gYmFycztcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==