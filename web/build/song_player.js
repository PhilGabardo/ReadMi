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
    'piccolo': -12,
    'clarinet': 2,
    'bass_clarinet': 14,
    'soprano_saxophone': 2,
    'alto_saxophone': 9,
    'tenor_saxophone': 14,
    //'baritone_saxophone': 21,
    'french_horn': 7,
    'trumpet': 2,
    'xylophone': -12,
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
  getNoteFromSamples: getNoteFromSamples
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9pbnN0cnVtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi93ZWIvYXNzZXRzL2pzL2tleV9jb21wYXJpc29uLmpzIiwid2VicGFjazovLy8uL3dlYi9hc3NldHMvanMva2V5X3NpZ25hdHVyZXMuanMiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9ub3RlX2RldGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi93ZWIvYXNzZXRzL2pzL3NvbmdfcGxheWVyLmpzIl0sIm5hbWVzIjpbImdldEluc3RydW1lbnRLZXlPZmZzZXQiLCJpbnN0cnVtZW50Iiwia2V5X29mZnNldHMiLCJnZXRJbnN0cnVtZW50RmluZ2VyaW5nIiwiZmluZ2VyaW5nX21hcCIsImNvbXBhcmVLZXlzIiwibm90ZTEiLCJub3RlMiIsImtleWFsaWFzZXMiLCJ1bmRlZmluZWQiLCJ0b0xvd2VyQ2FzZSIsImdldEtleUFzRmxhdCIsImtleSIsImZsYXRfbWFwIiwiZ2V0S2V5U2lnbmF0dXJlSW5mbyIsImtleV9zaWdzIiwiZ2V0T2Zmc2V0Tm90ZSIsIm9jdGF2ZSIsIm9mZnNldCIsIm5vdGVzIiwic3RhcnRJbmRleCIsImkiLCJsZW5ndGgiLCJrZXlfY29tcGFyaXNvbiIsIm9mZnNldEtleSIsIm9mZnNldE9jdGF2ZSIsIk1hdGgiLCJmbG9vciIsIm5vdGVGcmVxdWVuY2llcyIsIm5vdGVOYW1lcyIsImVzdGltYXRlTm90ZSIsImZyZXF1ZW5jeSIsImZyZXF1ZW5jeUluZGV4IiwibmV4dENsb3Nlc3RJbmRleCIsImdldEZyZXF1ZW5jeUZvck5vdGUiLCJub3RlX25hbWUiLCJub3RlX29jdGF2ZSIsIm5vdGVOYW1lSW5kZXgiLCJnZXROb3RlRnJvbVNhbXBsZXMiLCJidWZmZXIiLCJzYW1wbGVSYXRlIiwibiIsImJlc3RSIiwiYmVzdEsiLCJrIiwic3VtIiwiciIsImZ1bmRhbWVudGFsRnJlcSIsIlNvbmdQbGF5ZXIiLCJiZWF0c19wZXJfbWludXRlIiwiYmVhdHNfcGVyX21lYXN1cmUiLCJhdWRpb0N0eCIsIkF1ZGlvQ29udGV4dCIsInRpY2siLCJ0aWNrVm9sdW1lIiwic291bmRIeiIsInNjaGVkdWxlZE5vdGVzIiwiYXBwZW5kVGltaW5nT2Zmc2V0IiwiZmxhdCIsInNldENvbnRyb2xsZXIiLCJpbml0QXVkaW8iLCJjcmVhdGVPc2NpbGxhdG9yIiwiY3JlYXRlR2FpbiIsInR5cGUiLCJ2YWx1ZSIsImdhaW4iLCJjb25uZWN0Iiwic3RhcnQiLCJub3ciLCJjdXJyZW50VGltZSIsIm5vdGUiLCJhdHRycyIsInByb3BzIiwiZ2V0S2V5UHJvcHMiLCJvZmZzZXROb3RlIiwiS2V5U2lnbmF0dXJlcyIsIkluc3RydW1lbnRzIiwiZnJlcWVuY3kiLCJub3RlX2RldGVjdGlvbiIsIm5hbWUiLCJwbGF5Tm90ZUF0VGltZSIsInRpbWluZ19vZmZzZXQiLCJ0aW1lIiwiY2FuY2VsU2NoZWR1bGVkVmFsdWVzIiwic2V0VmFsdWVBdFRpbWUiLCJsaW5lYXJSYW1wVG9WYWx1ZUF0VGltZSIsInN1c3BlbmQiLCJyZXN1bWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidGFyZ2V0IiwiY2hlY2tlZCIsImRlc3RpbmF0aW9uIiwiZGlzY29ubmVjdCIsImJhcnMiLCJiYXJfdGltaW5nX29mZnNldCIsImoiLCJwZXJjZW50YWdlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlE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OEMsT0FBOUMsRUFBdUQsT0FBdkQsRUFBZ0UsT0FBaEUsRUFBeUUsT0FBekUsRUFBa0YsT0FBbEYsRUFBMkYsT0FBM0YsRUFBb0csT0FBcEcsRUFBOEc7QUFDOUcsT0FEQSxFQUNTLE9BRFQsRUFDa0IsT0FEbEIsRUFDMkIsT0FEM0IsRUFDb0MsT0FEcEMsRUFDNkMsT0FEN0MsRUFDc0QsT0FEdEQsRUFDK0QsT0FEL0QsRUFDd0UsT0FEeEUsRUFDaUYsT0FEakYsRUFDMEYsT0FEMUYsRUFDbUcsT0FEbkcsRUFDOEc7QUFDOUcsT0FGQSxFQUVTLE9BRlQsRUFFa0IsT0FGbEIsRUFFMkIsT0FGM0IsRUFFb0MsT0FGcEMsRUFFNkMsT0FGN0MsRUFFc0QsT0FGdEQsRUFFK0QsT0FGL0QsRUFFd0UsT0FGeEUsRUFFaUYsT0FGakYsRUFFMEYsT0FGMUYsRUFFbUcsT0FGbkcsRUFFOEc7QUFDOUcsT0FIQSxFQUdTLE9BSFQsRUFHa0IsT0FIbEIsRUFHMkIsT0FIM0IsRUFHb0MsT0FIcEMsRUFHNkMsT0FIN0MsRUFHc0QsT0FIdEQsRUFHK0QsT0FIL0QsRUFHd0UsT0FIeEUsRUFHaUYsT0FIakYsRUFHMEYsT0FIMUYsRUFHbUcsT0FIbkcsRUFHOEc7QUFDOUcsT0FKQSxFQUlTLE9BSlQsRUFJa0IsT0FKbEIsRUFJMkIsT0FKM0IsRUFJb0MsT0FKcEMsRUFJNkMsT0FKN0MsRUFJc0QsT0FKdEQsRUFJK0QsT0FKL0QsRUFJd0UsT0FKeEUsRUFJaUYsT0FKakYsRUFJMEYsT0FKMUYsRUFJbUcsT0FKbkcsRUFJOEc7QUFDOUcsT0FMQSxFQUtTLE9BTFQsRUFLa0IsT0FMbEIsRUFLMkIsT0FMM0IsRUFLb0MsT0FMcEMsRUFLNkMsT0FMN0MsRUFLc0QsT0FMdEQsRUFLK0QsT0FML0QsRUFLd0UsT0FMeEUsRUFLaUYsT0FMakYsRUFLMEYsT0FMMUYsRUFLbUcsT0FMbkcsRUFLOEc7QUFDOUcsT0FOQSxFQU1TLE9BTlQsRUFNa0IsT0FObEIsRUFNMkIsT0FOM0IsRUFNb0MsT0FOcEMsRUFNNkMsT0FON0MsRUFNc0QsT0FO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QWtCO0FBQzdELFdBQUssSUFBSTVCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcyRSxJQUFJLENBQUMxRSxNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztBQUNyQyxZQUFJRixLQUFLLEdBQUc2RSxJQUFJLENBQUMzRSxDQUFELENBQWhCOztBQUNBLFlBQUlGLEtBQUssQ0FBQ0csTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUN2QjtBQUNBOztBQUNELFlBQUkyRSxpQkFBaUIsR0FBRzVFLENBQUMsSUFBSTZCLGlCQUFpQixHQUFHRCxnQkFBeEIsQ0FBRCxHQUE2QyxFQUFyRTtBQUNBK0MsWUFBSSxDQUFDM0UsQ0FBRCxDQUFKLENBQVEsQ0FBUixFQUFXLGVBQVgsSUFBOEI0RSxpQkFBOUI7O0FBQ0EsYUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHL0UsS0FBSyxDQUFDRyxNQUExQixFQUFrQzRFLENBQUMsRUFBbkMsRUFBdUM7QUFDdEMsY0FBSUEsQ0FBQyxLQUFLL0UsS0FBSyxDQUFDRyxNQUFOLEdBQWUsQ0FBekIsRUFBNEI7QUFDM0IsZ0JBQUkyRCxhQUFhLEdBQUdnQixpQkFBaUIsR0FBRzlFLEtBQUssQ0FBQytFLENBQUMsR0FBRyxDQUFMLENBQUwsQ0FBYUMsVUFBYixJQUEyQmpELGlCQUFpQixHQUFHRCxnQkFBL0MsSUFBbUUsRUFBM0c7QUFDQStDLGdCQUFJLENBQUMzRSxDQUFELENBQUosQ0FBUTZFLENBQUMsR0FBRyxDQUFaLEVBQWUsZUFBZixJQUFrQ2pCLGFBQWxDO0FBQ0E7QUFDRDtBQUNEOztBQUNELGFBQU9lLElBQVA7QUFDQSIsImZpbGUiOiJzb25nX3BsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3dlYi9hc3NldHMvanMvc29uZ19wbGF5ZXIuanNcIik7XG4iLCJmdW5jdGlvbiBnZXRJbnN0cnVtZW50S2V5T2Zmc2V0KGluc3RydW1lbnQpIHtcblx0bGV0IGtleV9vZmZzZXRzID0ge1xuXHRcdCdndWl0YXInOiAxMixcblx0XHQncGljY29sbyc6IC0xMixcblx0XHQnY2xhcmluZXQnOiAyLFxuXHRcdCdiYXNzX2NsYXJpbmV0JzogMTQsXG5cdFx0J3NvcHJhbm9fc2F4b3Bob25lJzogMixcblx0XHQnYWx0b19zYXhvcGhvbmUnOiA5LFxuXHRcdCd0ZW5vcl9zYXhvcGhvbmUnOiAxNCxcblx0XHQvLydiYXJpdG9uZV9zYXhvcGhvbmUnOiAyMSxcblx0XHQnZnJlbmNoX2hvcm4nOiA3LFxuXHRcdCd0cnVtcGV0JzogMixcblx0XHQneHlsb3Bob25lJzogLTEyLFxuXHRcdCdwaWFubyc6IDAsXG5cdH1cblx0cmV0dXJuIGtleV9vZmZzZXRzW2luc3RydW1lbnRdO1xufVxuXG5mdW5jdGlvbiBnZXRJbnN0cnVtZW50RmluZ2VyaW5nKGluc3RydW1lbnQpIHtcblx0bGV0IGZpbmdlcmluZ19tYXAgPSB7XG5cdFx0J2d1aXRhcic6ICdndWl0YXInLFxuXHRcdCdwaWNjb2xvJzogJ3BpY29sbycsXG5cdFx0J2NsYXJpbmV0JzogJ2NsYXJpbmV0Jyxcblx0XHQnYmFzc19jbGFyaW5ldCc6ICdjbGFyaW5ldCcsXG5cdFx0J3NvcHJhbm9fc2F4b3Bob25lJzogJ3NheG9waG9uZScsXG5cdFx0J2FsdG9fc2F4b3Bob25lJzogJ3NheG9waG9uZScsXG5cdFx0J3Rlbm9yX3NheG9waG9uZSc6ICdzYXhvcGhvbmUnLFxuXHRcdCdiYXJpdG9uZV9zYXhvcGhvbmUnOiAnc2F4b3Bob25lJyxcblx0XHQnZnJlbmNoX2hvcm4nOiAndHJ1bXBldCcsXG5cdFx0J3RydW1wZXQnOiAndHJ1bXBldCcsXG5cdFx0J3h5bG9waG9uZSc6ICd4eWxvcGhvbmUnLFxuXHRcdCdnbG9ja2Vuc3BpZWwnOiAnZ2xvY2tlbnNwaWVsJyxcblx0XHQncGlhbm8nOiAncGlhbm8nLFxuXHR9XG5cdHJldHVybiBmaW5nZXJpbmdfbWFwW2luc3RydW1lbnRdO1xufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRnZXRJbnN0cnVtZW50S2V5T2Zmc2V0OiBnZXRJbnN0cnVtZW50S2V5T2Zmc2V0LFxuXHRnZXRJbnN0cnVtZW50RmluZ2VyaW5nOiBnZXRJbnN0cnVtZW50RmluZ2VyaW5nLFxufVxuIiwiZnVuY3Rpb24gY29tcGFyZUtleXMobm90ZTEsIG5vdGUyKSB7XG5cdGxldCBrZXlhbGlhc2VzID0ge1xuXHRcdCdhYic6ICdnIycsXG5cdFx0J2EnIDogJ2EnLFxuXHRcdCdhIycgOiAnYmInLFxuXHRcdCdiYicgOiAnYSMnLFxuXHRcdCdiJyA6ICdjYicsXG5cdFx0J2IjJzogJ2MnLFxuXHRcdCdjYicgOiAnYicsXG5cdFx0J2MnIDogJ2IjJyxcblx0XHQnYyMnOiAnZGInLFxuXHRcdCdkYicgOiAnYyMnLFxuXHRcdCdkJyA6ICdkJyxcblx0XHQnZCMnIDogJ2ViJyxcblx0XHQnZWInIDogJ2QjJyxcblx0XHQnZScgOiAnZmInLFxuXHRcdCdlIycgOiAnZicsXG5cdFx0J2ZiJyA6ICdlJyxcblx0XHQnZicgOiAnZicsXG5cdFx0J2YjJyA6ICdnYicsXG5cdFx0J2diJyA6ICdmIycsXG5cdFx0J2cnIDogJ2cnLFxuXHRcdCdnIycgOiAnYWInLFxuXHR9XG5cdGlmIChub3RlMSA9PSB1bmRlZmluZWQgfHwgbm90ZTIgPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiBub3RlMS50b0xvd2VyQ2FzZSgpID09IG5vdGUyLnRvTG93ZXJDYXNlKCkgfHwga2V5YWxpYXNlc1tub3RlMS50b0xvd2VyQ2FzZSgpXSA9PSBub3RlMi50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBnZXRLZXlBc0ZsYXQoa2V5KSB7XG5cdGxldCBmbGF0X21hcCA9IHtcblx0XHQnYWInOiAnQWInLFxuXHRcdCdhJyA6ICdhJyxcblx0XHQnYSMnIDogJ0JiJyxcblx0XHQnYmInIDogJ0JiJyxcblx0XHQnYicgOiAnQicsXG5cdFx0J2NiJyA6ICdCJyxcblx0XHQnYycgOiAnQycsXG5cdFx0J2MjJzogJ0RiJyxcblx0XHQnZGInIDogJ0RiJyxcblx0XHQnZCcgOiAnRCcsXG5cdFx0J2QjJyA6ICdFYicsXG5cdFx0J2ViJyA6ICdFYicsXG5cdFx0J2UnIDogJ0ZiJyxcblx0XHQnZSMnIDogJ0YnLFxuXHRcdCdmYicgOiAnRScsXG5cdFx0J2YnIDogJ0YnLFxuXHRcdCdmIycgOiAnR2InLFxuXHRcdCdnYicgOiAnR2InLFxuXHRcdCdnJyA6ICdHJyxcblx0XHQnZyMnIDogJ0FiJyxcblx0fVxuXHRyZXR1cm4gZmxhdF9tYXBba2V5LnRvTG93ZXJDYXNlKCldXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Y29tcGFyZUtleXM6IGNvbXBhcmVLZXlzXG59XG4iLCJpbXBvcnQga2V5X2NvbXBhcmlzb24gZnJvbSAnLi9rZXlfY29tcGFyaXNvbidcblxuZnVuY3Rpb24gZ2V0S2V5U2lnbmF0dXJlSW5mbyhrZXkpIHtcblx0Ly8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvS2V5X3NpZ25hdHVyZVxuXHRsZXQga2V5X3NpZ3MgPSB7XG5cdFx0J0MgbWFqb3InIDoge1xuXHRcdFx0J3R5cGUnOiAnIycsXG5cdFx0XHQnbm90ZXMnOiB7fVxuXHRcdH0sXG5cdFx0J0EgbWlub3InIDoge1xuXHRcdFx0J3R5cGUnOiAnIycsXG5cdFx0XHQnbm90ZXMnOiB7fVxuXHRcdH0sXG5cdFx0J0cgbWFqb3InIDoge1xuXHRcdFx0J3R5cGUnOiAnIycsXG5cdFx0XHQnbm90ZXMnOiB7J0YnOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0UgbWlub3InIDoge1xuXHRcdFx0J3R5cGUnOiAnIycsXG5cdFx0XHQnbm90ZXMnOiB7J0YnOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0QgbWFqb3InIDoge1xuXHRcdFx0J3R5cGUnOiAnIycsXG5cdFx0XHQnbm90ZXMnOiB7J0YnIDogdHJ1ZSwgJ0MnIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdCIG1pbm9yJyA6IHtcblx0XHRcdCd0eXBlJzogJyMnLFxuXHRcdFx0J25vdGVzJzogeydGJyA6IHRydWUsICdDJyA6IHRydWV9XG5cdFx0fSxcblx0XHQnQSBtYWpvcicgOiB7XG5cdFx0XHQndHlwZSc6ICcjJyxcblx0XHRcdCdub3Rlcyc6IHsnRicgOiB0cnVlLCAnQycgOiB0cnVlLCAnRycgOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0UgbWFqb3InIDoge1xuXHRcdFx0J3R5cGUnOiAnIycsXG5cdFx0XHQnbm90ZXMnOiB7J0YnIDogdHJ1ZSwgJ0MnIDogdHJ1ZSwgJ0cnIDogdHJ1ZSwgJ0QnIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdCIG1ham9yJyA6IHtcblx0XHRcdCd0eXBlJzogJyMnLFxuXHRcdFx0J25vdGVzJzogeydGJyA6IHRydWUsICdDJyA6IHRydWUsICdHJyA6IHRydWUsICdEJyA6IHRydWUsICdBJyA6IHRydWV9XG5cdFx0fSxcblx0XHQnRiBtYWpvcicgOiB7XG5cdFx0XHQndHlwZSc6ICdiJyxcblx0XHRcdCdub3Rlcyc6IHsnQicgOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0QgbWlub3InIDoge1xuXHRcdFx0J3R5cGUnOiAnYicsXG5cdFx0XHQnbm90ZXMnOiB7J0InIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdCYiBtYWpvcicgOiB7XG5cdFx0XHQndHlwZSc6ICdiJyxcblx0XHRcdCdub3Rlcyc6IHsnQicgOiB0cnVlLCAnRScgOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0cgbWlub3InIDoge1xuXHRcdFx0J3R5cGUnOiAnYicsXG5cdFx0XHQnbm90ZXMnOiB7J0InIDogdHJ1ZSwgJ0UnIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdFYiBtYWpvcicgOiB7XG5cdFx0XHQndHlwZSc6ICdiJyxcblx0XHRcdCdub3Rlcyc6IHsnQicgOiB0cnVlLCAnRScgOiB0cnVlLCAnQScgOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0MgbWlub3InIDoge1xuXHRcdFx0J3R5cGUnOiAnYicsXG5cdFx0XHQnbm90ZXMnOiB7J0InIDogdHJ1ZSwgJ0UnIDogdHJ1ZSwgJ0EnIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdBYiBtYWpvcicgOiB7XG5cdFx0XHQndHlwZSc6ICdiJyxcblx0XHRcdCdub3Rlcyc6IHsnQicgOiB0cnVlLCAnRScgOiB0cnVlLCAnQScgOiB0cnVlLCAnRCcgOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0YgbWlub3InIDoge1xuXHRcdFx0J3R5cGUnOiAnYicsXG5cdFx0XHQnbm90ZXMnOiB7J0InIDogdHJ1ZSwgJ0UnIDogdHJ1ZSwgJ0EnIDogdHJ1ZSwgJ0QnIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdEYiBtYWpvcicgOiB7XG5cdFx0XHQndHlwZSc6ICdiJyxcblx0XHRcdCdub3Rlcyc6IHsnQicgOiB0cnVlLCAnRScgOiB0cnVlLCAnQScgOiB0cnVlLCAnRCcgOiB0cnVlLCAnRycgOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0JiIG1pbm9yJyA6IHtcblx0XHRcdCd0eXBlJzogJ2InLFxuXHRcdFx0J25vdGVzJzogeydCJyA6IHRydWUsICdFJyA6IHRydWUsICdBJyA6IHRydWUsICdEJyA6IHRydWUsICdHJyA6IHRydWV9XG5cdFx0fSxcblx0XHQnR2IgbWFqb3InIDoge1xuXHRcdFx0J3R5cGUnOiAnYicsXG5cdFx0XHQnbm90ZXMnOiB7J0InIDogdHJ1ZSwgJ0UnIDogdHJ1ZSwgJ0EnIDogdHJ1ZSwgJ0QnIDogdHJ1ZSwgJ0cnIDogdHJ1ZSwgJ0MnIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdFYiBtaW5vcicgOiB7XG5cdFx0XHQndHlwZSc6ICdiJyxcblx0XHRcdCdub3Rlcyc6IHsnQicgOiB0cnVlLCAnRScgOiB0cnVlLCAnQScgOiB0cnVlLCAnRCcgOiB0cnVlLCAnRycgOiB0cnVlLCAnQycgOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0NiIG1ham9yJyA6IHtcblx0XHRcdCd0eXBlJzogJ2InLFxuXHRcdFx0J25vdGVzJzogeydCJyA6IHRydWUsICdFJyA6IHRydWUsICdBJyA6IHRydWUsICdEJyA6IHRydWUsICdHJyA6IHRydWUsICdDJyA6IHRydWUsICdGJyA6IHRydWV9XG5cdFx0fSxcblx0XHQnQWIgbWlub3InIDoge1xuXHRcdFx0J3R5cGUnIDogJ2InLFxuXHRcdFx0J25vdGVzJzogeydCJzogdHJ1ZSwgJ0UnOiB0cnVlLCAnQSc6IHRydWUsICdEJzogdHJ1ZSwgJ0cnOiB0cnVlLCAnQyc6IHRydWUsICdGJzogdHJ1ZX1cblx0XHR9XG5cdH07XG5cdHJldHVybiBrZXlfc2lnc1trZXldO1xufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXROb3RlKGtleSwgb2N0YXZlLCBvZmZzZXQpIHtcblx0bGV0IG5vdGVzID0gWydDJywgJ0RiJywgJ0QnLCAnRWInLCAnRScsICdGJywgJ0diJywgJ0cnLCAnQWInLCAnQScsICdCYicsICdCJ107XG5cdGxldCBzdGFydEluZGV4ID0gMDtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBub3Rlcy5sZW5ndGg7IGkrKykge1xuXHRcdGlmIChrZXlfY29tcGFyaXNvbi5jb21wYXJlS2V5cyhub3Rlc1tpXSwga2V5KSkge1xuXHRcdFx0c3RhcnRJbmRleCA9IGk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblx0bGV0IG9mZnNldEtleSA9IG5vdGVzWyhub3Rlcy5sZW5ndGggKyBzdGFydEluZGV4ICsgb2Zmc2V0KSAlIG5vdGVzLmxlbmd0aF07XG5cdGxldCBvZmZzZXRPY3RhdmUgPSBvY3RhdmUgKyBNYXRoLmZsb29yKChzdGFydEluZGV4ICsgb2Zmc2V0KSAvIG5vdGVzLmxlbmd0aCk7XG5cdHJldHVybiB7XG5cdFx0XCJuYW1lXCI6IG9mZnNldEtleSxcblx0XHRcIm9jdGF2ZVwiOiBvZmZzZXRPY3RhdmUsXG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Z2V0S2V5U2lnbmF0dXJlSW5mbzogZ2V0S2V5U2lnbmF0dXJlSW5mbyxcblx0Z2V0T2Zmc2V0Tm90ZTogZ2V0T2Zmc2V0Tm90ZVxufVxuXG4iLCJpbXBvcnQga2V5X2NvbXBhcmlzb24gZnJvbSAnLi9rZXlfY29tcGFyaXNvbidcbmxldCBub3RlRnJlcXVlbmNpZXMgPVxuXHQvLyBCICAgICAgICBBIyAgICAgICAgQSAgICAgIEcjICAgICAgIEcgICAgICAgICBGIyAgICAgICBGICAgICAgICBFICAgICAgICAgRCMgICAgICBEICAgICAgICBDIyAgICAgICBDXG5cdFs3OTAyLjEzLCA3NDU4LjYyLCA3MDQwLjAwLCA2NjQ0Ljg4LCA2MjcxLjkzLCA1OTE5LjkxLCA1NTg3LjY1LCA1Mjc0LjA0LCA0OTc4LjAzLCA0Njk4LjY0LCA0NDM0LjkyLCA0MTg2LjAxLCAgLy8gOFxuXHQzOTUxLjA3LCAzNzI5LjMxLCAzNTIwLjAwLCAzMzIyLjQ0LCAzMTM1Ljk2LCAyOTU5Ljk2LCAyNzkzLjgzLCAyNjM3LjAyLCAyNDg5LjAyLCAyMzQ5LjMyLCAyMjE3LjQ2LCAyMDkzLjAwLCAgIC8vIDdcblx0MTk3NS41MywgMTg2NC42NiwgMTc2MC4wMCwgMTY2MS4yMiwgMTU2Ny45OCwgMTQ3OS45OCwgMTM5Ni45MSwgMTMxOC41MSwgMTI0NC41MSwgMTE3NC42NiwgMTEwOC43MywgMTA0Ni41MCwgICAvLyA2XG5cdDk4Ny43NjcsIDkzMi4zMjgsIDg4MC4wMDAsIDgzMC42MDksIDc4My45OTEsIDczOS45ODksIDY5OC40NTYsIDY1OS4yNTUsIDYyMi4yNTQsIDU4Ny4zMzAsIDU1NC4zNjUsIDUyMy4yNTEsICAgLy8gNVxuXHQ0OTMuODgzLCA0NjYuMTY0LCA0NDAuMDAwLCA0MTUuMzA1LCAzOTEuOTk1LCAzNjkuOTk0LCAzNDkuMjI4LCAzMjkuNjI4LCAzMTEuMTI3LCAyOTMuNjY1LCAyNzcuMTgzLCAyNjEuNjI2LCAgIC8vIDRcblx0MjQ2Ljk0MiwgMjMzLjA4MiwgMjIwLjAwMCwgMjA3LjY1MiwgMTk1Ljk5OCwgMTg0Ljk5NywgMTc0LjYxNCwgMTY0LjgxNCwgMTU1LjU2MywgMTQ2LjgzMiwgMTM4LjU5MSwgMTMwLjgxMywgICAvLyAzXG5cdDEyMy40NzEsIDExNi41NDEsIDExMC4wMDAsIDEwMy44MjYsIDk3Ljk5ODksIDkyLjQ5ODYsIDg3LjMwNzEsIDgyLjQwNjksIDc3Ljc4MTcsIDczLjQxNjIsIDY5LjI5NTcsIDY1LjQwNjQsICAgLy8gMlxuXHQ2MS43MzU0LCA1OC4yNzA1LCA1NS4wMDAwLCA1MS45MTMxLCA0OC45OTk0LCA0Ni4yNDkzLCA0My42NTM1LCA0MS4yMDM0LCAzOC44OTA5LCAzNi43MDgxLCAzNC42NDc4LCAzMi43MDMyLCAgIC8vIDFcblx0MzAuODY3NywgMjkuMTM1MiwgMjcuNTAwMCwgMjUuOTU2NSwgMjQuNDk5NywgMjMuMTI0NywgMjEuODI2OCwgMjAuNjAxNywgMTkuNDQ1NCwgMTguMzU0MCwgMTcuMzIzOSwgMTYuMzUxNl07IC8vIDBcblxubGV0IG5vdGVOYW1lcyA9IFtcIkJcIiwgXCJBI1wiLCBcIkFcIiwgXCJHI1wiLCBcIkdcIiwgXCJGI1wiLCBcIkZcIiwgXCJFXCIsIFwiRCNcIiwgXCJEXCIsIFwiQyNcIiwgXCJDXCJdO1xuXG5mdW5jdGlvbiBlc3RpbWF0ZU5vdGUoZnJlcXVlbmN5KSB7XG5cdGxldCBsZW5ndGggPSBub3RlRnJlcXVlbmNpZXMubGVuZ3RoO1xuXHRsZXQgZnJlcXVlbmN5SW5kZXggPSAwO1xuXHRsZXQgbmV4dENsb3Nlc3RJbmRleCA9IDA7XG5cblx0Ly8gSXRlcmF0ZSB0aHJvdWdoIHRoZSBub3RlIGFycmF5IHRvIGZpbmQgdGhlIGNsb3Nlc3QgaW5kaWNlc1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCAtIDE7IGkrKykge1xuXHRcdGlmIChpID09IDAgJiYgZnJlcXVlbmN5ID4gbm90ZUZyZXF1ZW5jaWVzW2ldKSB7XG5cdFx0XHRmcmVxdWVuY3lJbmRleCA9IDA7XG5cdFx0XHRuZXh0Q2xvc2VzdEluZGV4ID0gMDtcblx0XHRcdGJyZWFrO1xuXHRcdH0gZWxzZSBpZiAobm90ZUZyZXF1ZW5jaWVzW2ldID49IGZyZXF1ZW5jeSAmJiBmcmVxdWVuY3kgPiBub3RlRnJlcXVlbmNpZXNbaSArIDFdKSB7XG5cdFx0XHRmcmVxdWVuY3lJbmRleCA9IChub3RlRnJlcXVlbmNpZXNbaV0gLSBmcmVxdWVuY3kpIDwgKGZyZXF1ZW5jeSAtIG5vdGVGcmVxdWVuY2llc1tpICsgMV0pID8gaSA6IGkgKyAxO1xuXHRcdFx0bmV4dENsb3Nlc3RJbmRleCA9IGZyZXF1ZW5jeUluZGV4ID09IGkgPyBpICsgMSA6IGk7XG5cdFx0XHRicmVhaztcblx0XHR9IGVsc2UgaWYgKGkgPT0gbGVuZ3RoIC0gMikge1xuXHRcdFx0ZnJlcXVlbmN5SW5kZXggPSBsZW5ndGggLSAxO1xuXHRcdFx0bmV4dENsb3Nlc3RJbmRleCA9IGxlbmd0aCAtIDE7XG5cdFx0fVxuXHR9XG5cblx0Ly8gR2V0IHRoZSBuYW1lIG9mIHRoZSBub3RlXG5cdHJldHVybiB7XG5cdFx0a2V5OiBub3RlTmFtZXNbKGZyZXF1ZW5jeUluZGV4KSAlIG5vdGVOYW1lcy5sZW5ndGhdLFxuXHRcdG9jdGF2ZTogOCAtIE1hdGguZmxvb3IoZnJlcXVlbmN5SW5kZXggLyBub3RlTmFtZXMubGVuZ3RoKSxcblx0fTtcbn1cblxuZnVuY3Rpb24gZ2V0RnJlcXVlbmN5Rm9yTm90ZShub3RlX25hbWUsIG5vdGVfb2N0YXZlKSB7XG5cdGxldCBub3RlTmFtZUluZGV4O1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IG5vdGVOYW1lcy5sZW5ndGg7IGkrKykge1xuXHRcdGlmIChrZXlfY29tcGFyaXNvbi5jb21wYXJlS2V5cyhub3RlX25hbWUsIG5vdGVOYW1lc1tpXSkpIHtcblx0XHRcdG5vdGVOYW1lSW5kZXggPSBpO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBub3RlRnJlcXVlbmNpZXNbbm90ZUZyZXF1ZW5jaWVzLmxlbmd0aCAtIDEgLSAobm90ZV9vY3RhdmUgKiBub3RlTmFtZXMubGVuZ3RoKSAtIChub3RlTmFtZXMubGVuZ3RoIC0gbm90ZU5hbWVJbmRleCAtIDEpXVxufVxuXG5mdW5jdGlvbiBnZXROb3RlRnJvbVNhbXBsZXMoYnVmZmVyLCBzYW1wbGVSYXRlKSB7XG5cdC8vIFdlIHVzZSBBdXRvY29ycmVsYXRpb24gdG8gZmluZCB0aGUgZnVuZGFtZW50YWwgZnJlcXVlbmN5LlxuXG5cdC8vIEluIG9yZGVyIHRvIGNvcnJlbGF0ZSB0aGUgc2lnbmFsIHdpdGggaXRzZWxmIChoZW5jZSB0aGUgbmFtZSBvZiB0aGUgYWxnb3JpdGhtKSwgd2Ugd2lsbCBjaGVjayB0d28gcG9pbnRzICdrJyBmcmFtZXMgYXdheS5cblx0Ly8gVGhlIGF1dG9jb3JyZWxhdGlvbiBpbmRleCB3aWxsIGJlIHRoZSBhdmVyYWdlIG9mIHRoZXNlIHByb2R1Y3RzLiBBdCB0aGUgc2FtZSB0aW1lLCB3ZSBub3JtYWxpemUgdGhlIHZhbHVlcy5cblx0Ly8gU291cmNlOiBodHRwOi8vd3d3LnBoeS5tdHkuZWR1L35zdWl0cy9hdXRvY29ycmVsYXRpb24uaHRtbFxuXHQvLyBBc3N1bWluZyB0aGUgc2FtcGxlIHJhdGUgaXMgNDgwMDBIeiwgYSAnaycgZXF1YWwgdG8gMTAwMCB3b3VsZCBjb3JyZXNwb25kIHRvIGEgNDhIeiBzaWduYWwgKDQ4MDAwLzEwMDAgPSA0OCksXG5cdC8vIHdoaWxlIGEgJ2snIGVxdWFsIHRvIDggd291bGQgY29ycmVzcG9uZCB0byBhIDYwMDBIeiBvbmUsIHdoaWNoIGlzIGVub3VnaCB0byBjb3ZlciBtb3N0IChpZiBub3QgYWxsKVxuXHQvLyB0aGUgbm90ZXMgd2UgaGF2ZSBpbiB0aGUgbm90ZXMuanNvbiBmaWxlLlxuXHR2YXIgbiA9IDEwMjQsIGJlc3RSID0gMCwgYmVzdEsgPSAtMTtcblx0Zm9yKHZhciBrID0gODsgayA8PSAxMDAwOyBrKyspe1xuXHRcdHZhciBzdW0gPSAwO1xuXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG47IGkrKyl7XG5cdFx0XHRzdW0gKz0gKChidWZmZXJbaV0gLSAxMjgpIC8gMTI4KSAqICgoYnVmZmVyW2kgKyBrXSAtIDEyOCkgLyAxMjgpO1xuXHRcdH1cblxuXHRcdHZhciByID0gc3VtIC8gKG4gKyBrKTtcblxuXHRcdGlmKHIgPiBiZXN0Uil7XG5cdFx0XHRiZXN0UiA9IHI7XG5cdFx0XHRiZXN0SyA9IGs7XG5cdFx0fVxuXG5cdFx0aWYociA+IDAuOSkge1xuXHRcdFx0Ly8gTGV0J3MgYXNzdW1lIHRoYXQgdGhpcyBpcyBnb29kIGVub3VnaCBhbmQgc3RvcCByaWdodCBoZXJlXG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRpZihiZXN0UiA+IDAuMDAyNSkge1xuXHRcdC8vIFRoZSBwZXJpb2QgKGluIGZyYW1lcykgb2YgdGhlIGZ1bmRhbWVudGFsIGZyZXF1ZW5jeSBpcyAnYmVzdEsnLiBHZXR0aW5nIHRoZSBmcmVxdWVuY3kgZnJvbSB0aGVyZSBpcyB0cml2aWFsLlxuXHRcdHZhciBmdW5kYW1lbnRhbEZyZXEgPSBzYW1wbGVSYXRlIC8gYmVzdEs7XG5cdFx0cmV0dXJuIGVzdGltYXRlTm90ZShmdW5kYW1lbnRhbEZyZXEpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIFdlIGhhdmVuJ3QgZm91bmQgYSBnb29kIGNvcnJlbGF0aW9uXG5cdFx0cmV0dXJuIFtdO1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGdldEZyZXF1ZW5jeUZvck5vdGU6IGdldEZyZXF1ZW5jeUZvck5vdGUsXG5cdGdldE5vdGVGcm9tU2FtcGxlczogZ2V0Tm90ZUZyb21TYW1wbGVzLFxufVxuIiwiaW1wb3J0IG5vdGVfZGV0ZWN0aW9uIGZyb20gJy4vbm90ZV9kZXRlY3Rpb24nXG5pbXBvcnQgSW5zdHJ1bWVudHMgZnJvbSAnLi9pbnN0cnVtZW50cydcbmltcG9ydCBLZXlTaWduYXR1cmVzIGZyb20gJy4va2V5X3NpZ25hdHVyZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvbmdQbGF5ZXIge1xuXHRjb25zdHJ1Y3Rvcihub3RlcywgaW5zdHJ1bWVudCwgYmVhdHNfcGVyX21pbnV0ZSwgYmVhdHNfcGVyX21lYXN1cmUpIHtcblx0XHR0aGlzLmF1ZGlvQ3R4ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuXHRcdHRoaXMudGljayA9IG51bGw7XG5cdFx0dGhpcy50aWNrVm9sdW1lID0gbnVsbDtcblx0XHR0aGlzLnNvdW5kSHogPSAxMDAwO1xuXHRcdHRoaXMuc2NoZWR1bGVkTm90ZXMgPSB0aGlzLmFwcGVuZFRpbWluZ09mZnNldChub3RlcywgYmVhdHNfcGVyX21lYXN1cmUsIGJlYXRzX3Blcl9taW51dGUpLmZsYXQoKTtcblx0XHR0aGlzLmluc3RydW1lbnQgPSBpbnN0cnVtZW50O1xuXHRcdHRoaXMuc2V0Q29udHJvbGxlcigpXG5cdFx0dGhpcy5pbml0QXVkaW8oKTtcblx0fVxuXG5cdGluaXRBdWRpbygpIHtcblx0XHR0aGlzLnRpY2sgPSB0aGlzLmF1ZGlvQ3R4LmNyZWF0ZU9zY2lsbGF0b3IoKTtcblx0XHR0aGlzLnRpY2tWb2x1bWUgPSB0aGlzLmF1ZGlvQ3R4LmNyZWF0ZUdhaW4oKTtcblxuXHRcdHRoaXMudGljay50eXBlID0gJ3NxdWFyZSc7XG5cdFx0dGhpcy50aWNrLmZyZXF1ZW5jeS52YWx1ZSA9IHRoaXMuc291bmRIejtcblx0XHR0aGlzLnRpY2tWb2x1bWUuZ2Fpbi52YWx1ZSA9IDA7XG5cblx0XHR0aGlzLnRpY2suY29ubmVjdCh0aGlzLnRpY2tWb2x1bWUpO1xuXHRcdC8vdGhpcy50aWNrVm9sdW1lLmNvbm5lY3QodGhpcy5hdWRpb0N0eC5kZXN0aW5hdGlvbik7XG5cdFx0dGhpcy50aWNrLnN0YXJ0KDApOyAgLy8gTm8gb2Zmc2V0LCBzdGFydCBpbW1lZGlhdGVseS5cblx0fVxuXG5cdHN0YXJ0KCkge1xuXG5cdFx0bGV0IG5vdyA9IHRoaXMuYXVkaW9DdHguY3VycmVudFRpbWU7XG5cblx0XHQvLyBTY2hlZHVsZSBhbGwgdGhlIGNsaWNrcyBhaGVhZC5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2NoZWR1bGVkTm90ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBub3RlID0gdGhpcy5zY2hlZHVsZWROb3Rlc1tpXS5ub3RlO1xuXHRcdFx0aWYgKG5vdGUuYXR0cnMudHlwZSAhPT0gJ0dob3N0Tm90ZScpIHtcblx0XHRcdFx0bGV0IHByb3BzID0gbm90ZS5nZXRLZXlQcm9wcygpWzBdO1xuXHRcdFx0XHRsZXQga2V5ID0gcHJvcHMua2V5O1xuXHRcdFx0XHRsZXQgb2N0YXZlID0gcHJvcHMub2N0YXZlO1xuXHRcdFx0XHRsZXQgb2Zmc2V0Tm90ZSA9IEtleVNpZ25hdHVyZXMuZ2V0T2Zmc2V0Tm90ZShrZXksIG9jdGF2ZSwgIDAgLSBJbnN0cnVtZW50cy5nZXRJbnN0cnVtZW50S2V5T2Zmc2V0KHRoaXMuaW5zdHJ1bWVudCkpO1xuXHRcdFx0XHRsZXQgZnJlcWVuY3kgPSBub3RlX2RldGVjdGlvbi5nZXRGcmVxdWVuY3lGb3JOb3RlKG9mZnNldE5vdGUubmFtZSwgb2Zmc2V0Tm90ZS5vY3RhdmUpO1xuXHRcdFx0XHR0aGlzLnBsYXlOb3RlQXRUaW1lKGZyZXFlbmN5LCBub3cgKyB0aGlzLnNjaGVkdWxlZE5vdGVzW2ldLnRpbWluZ19vZmZzZXQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHBsYXlOb3RlQXRUaW1lKGZyZXF1ZW5jeSwgdGltZSkge1xuXHRcdC8vIFNpbGVuY2UgdGhlIGNsaWNrLlxuXHRcdHRoaXMudGljay5mcmVxdWVuY3kuY2FuY2VsU2NoZWR1bGVkVmFsdWVzKHRpbWUpO1xuXHRcdHRoaXMudGljay5mcmVxdWVuY3kuc2V0VmFsdWVBdFRpbWUoZnJlcXVlbmN5LCB0aW1lKTtcblx0XHR0aGlzLnRpY2tWb2x1bWUuZ2Fpbi5jYW5jZWxTY2hlZHVsZWRWYWx1ZXModGltZSk7XG5cdFx0dGhpcy50aWNrVm9sdW1lLmdhaW4uc2V0VmFsdWVBdFRpbWUoMCwgdGltZSk7XG5cblx0XHQvLyBBdWRpYmxlIGNsaWNrIHNvdW5kLlxuXHRcdHRoaXMudGlja1ZvbHVtZS5nYWluLmxpbmVhclJhbXBUb1ZhbHVlQXRUaW1lKDEsIHRpbWUgKyAuMDAxKTtcblx0XHR0aGlzLnRpY2tWb2x1bWUuZ2Fpbi5saW5lYXJSYW1wVG9WYWx1ZUF0VGltZSgwLCB0aW1lICsgLjAwMSArIC4yKTtcblx0fVxuXG5cdHN0b3AoKSB7XG5cdFx0dGhpcy50aWNrVm9sdW1lLmdhaW4udmFsdWUgPSAwO1xuXHR9XG5cblx0cGF1c2UoKSB7XG5cdFx0dGhpcy5hdWRpb0N0eC5zdXNwZW5kKCk7XG5cdH1cblxuXHRyZXN1bWUoKSB7XG5cdFx0dGhpcy5hdWRpb0N0eC5yZXN1bWUoKTtcblx0fVxuXG5cdHNldENvbnRyb2xsZXIoKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvbmctcGxheWVyLWNvbnRyb2xsZXInKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcblx0XHRcdGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuXHRcdFx0XHR0aGlzLnRpY2tWb2x1bWUuY29ubmVjdCh0aGlzLmF1ZGlvQ3R4LmRlc3RpbmF0aW9uKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMudGlja1ZvbHVtZS5kaXNjb25uZWN0KHRoaXMuYXVkaW9DdHguZGVzdGluYXRpb24pO1xuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXHRhcHBlbmRUaW1pbmdPZmZzZXQoYmFycywgYmVhdHNfcGVyX21lYXN1cmUsIGJlYXRzX3Blcl9taW51dGUpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGJhcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBub3RlcyA9IGJhcnNbaV07XG5cdFx0XHRpZiAobm90ZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0bGV0IGJhcl90aW1pbmdfb2Zmc2V0ID0gaSAqIChiZWF0c19wZXJfbWVhc3VyZSAvIGJlYXRzX3Blcl9taW51dGUpICogNjA7XG5cdFx0XHRiYXJzW2ldWzBdWyd0aW1pbmdfb2Zmc2V0J10gPSBiYXJfdGltaW5nX29mZnNldDtcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgbm90ZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0aWYgKGogIT09IG5vdGVzLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHRsZXQgdGltaW5nX29mZnNldCA9IGJhcl90aW1pbmdfb2Zmc2V0ICsgbm90ZXNbaiArIDFdLnBlcmNlbnRhZ2UgKiAoYmVhdHNfcGVyX21lYXN1cmUgLyBiZWF0c19wZXJfbWludXRlKSAqIDYwO1xuXHRcdFx0XHRcdGJhcnNbaV1baiArIDFdWyd0aW1pbmdfb2Zmc2V0J10gPSB0aW1pbmdfb2Zmc2V0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBiYXJzO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9