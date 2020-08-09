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
/* harmony import */ var _audio_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audio_context */ "./web/assets/js/audio_context.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var SongPlayer =
/*#__PURE__*/
function () {
  function SongPlayer(notes, instrument, beats_per_minute, beats_per_measure) {
    _classCallCheck(this, SongPlayer);

    this.audioCtx = _audio_context__WEBPACK_IMPORTED_MODULE_3__["default"].getAudioContext();
    this.tick = null;
    this.tickVolume = null;
    this.soundHz = 1000;
    this.scheduledNotes = this.appendTimingOffset(notes, beats_per_measure, beats_per_minute).flat();
    this.instrument = instrument; //this.setController()

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9hdWRpb19jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3dlYi9hc3NldHMvanMvaW5zdHJ1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9rZXlfY29tcGFyaXNvbi5qcyIsIndlYnBhY2s6Ly8vLi93ZWIvYXNzZXRzL2pzL2tleV9zaWduYXR1cmVzLmpzIiwid2VicGFjazovLy8uL3dlYi9hc3NldHMvanMvbm90ZV9kZXRlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9zb25nX3BsYXllci5qcyJdLCJuYW1lcyI6WyJnZXRBdWRpb0NvbnRleHQiLCJ3aW5kb3ciLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJtb3pBdWRpb0NvbnRleHQiLCJvQXVkaW9Db250ZXh0IiwibXNBdWRpb0NvbnRleHQiLCJnZXRJbnN0cnVtZW50S2V5T2Zmc2V0IiwiaW5zdHJ1bWVudCIsImtleV9vZmZzZXRzIiwiZ2V0SW5zdHJ1bWVudEZpbmdlcmluZyIsImZpbmdlcmluZ19tYXAiLCJjb21wYXJlS2V5cyIsIm5vdGUxIiwibm90ZTIiLCJrZXlhbGlhc2VzIiwidW5kZWZpbmVkIiwidG9Mb3dlckNhc2UiLCJnZXRLZXlBc0ZsYXQiLCJrZXkiLCJmbGF0X21hcCIsImdldEtleVNpZ25hdHVyZUluZm8iLCJrZXlfc2lncyIsImdldE9mZnNldE5vdGUiLCJvY3RhdmUiLCJvZmZzZXQiLCJub3RlcyIsInN0YXJ0SW5kZXgiLCJpIiwibGVuZ3RoIiwia2V5X2NvbXBhcmlzb24iLCJvZmZzZXRLZXkiLCJvZmZzZXRPY3RhdmUiLCJNYXRoIiwiZmxvb3IiLCJub3RlRnJlcXVlbmNpZXMiLCJub3RlTmFtZXMiLCJlc3RpbWF0ZU5vdGUiLCJmcmVxdWVuY3kiLCJmcmVxdWVuY3lJbmRleCIsIm5leHRDbG9zZXN0SW5kZXgiLCJnZXRGcmVxdWVuY3lGb3JOb3RlIiwibm90ZV9uYW1lIiwibm90ZV9vY3RhdmUiLCJub3RlTmFtZUluZGV4IiwiZ2V0Tm90ZUZyb21TYW1wbGVzIiwiYnVmZmVyIiwic2FtcGxlUmF0ZSIsInQwIiwicGVyZm9ybWFuY2UiLCJub3ciLCJuIiwiYmVzdFIiLCJiZXN0SyIsImsiLCJzdW0iLCJyIiwiZnVuZGFtZW50YWxGcmVxIiwiU29uZ1BsYXllciIsImJlYXRzX3Blcl9taW51dGUiLCJiZWF0c19wZXJfbWVhc3VyZSIsImF1ZGlvQ3R4IiwidGljayIsInRpY2tWb2x1bWUiLCJzb3VuZEh6Iiwic2NoZWR1bGVkTm90ZXMiLCJhcHBlbmRUaW1pbmdPZmZzZXQiLCJmbGF0IiwiaW5pdEF1ZGlvIiwiY3JlYXRlT3NjaWxsYXRvciIsImNyZWF0ZUdhaW4iLCJ0eXBlIiwidmFsdWUiLCJnYWluIiwiY29ubmVjdCIsInN0YXJ0IiwiY3VycmVudFRpbWUiLCJub3RlIiwiYXR0cnMiLCJwcm9wcyIsImdldEtleVByb3BzIiwib2Zmc2V0Tm90ZSIsIktleVNpZ25hdHVyZXMiLCJJbnN0cnVtZW50cyIsImZyZXFlbmN5Iiwibm90ZV9kZXRlY3Rpb24iLCJuYW1lIiwicGxheU5vdGVBdFRpbWUiLCJ0aW1pbmdfb2Zmc2V0IiwidGltZSIsImNhbmNlbFNjaGVkdWxlZFZhbHVlcyIsInNldFZhbHVlQXRUaW1lIiwibGluZWFyUmFtcFRvVmFsdWVBdFRpbWUiLCJzdXNwZW5kIiwicmVzdW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsImNoZWNrZWQiLCJkZXN0aW5hdGlvbiIsImRpc2Nvbm5lY3QiLCJiYXJzIiwiYmFyX3RpbWluZ19vZmZzZXQiLCJqIiwicGVyY2VudGFnZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtR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QTRCO0FBQzNCLGdCQUFJMkQsYUFBYSxHQUFHZ0IsaUJBQWlCLEdBQUc5RSxLQUFLLENBQUMrRSxDQUFDLEdBQUcsQ0FBTCxDQUFMLENBQWFDLFVBQWIsSUFBMkI5QyxpQkFBaUIsR0FBR0QsZ0JBQS9DLElBQW1FLEVBQTNHO0FBQ0E0QyxnQkFBSSxDQUFDM0UsQ0FBRCxDQUFKLENBQVE2RSxDQUFDLEdBQUcsQ0FBWixFQUFlLGVBQWYsSUFBa0NqQixhQUFsQztBQUNBO0FBQ0Q7QUFDRDs7QUFDRCxhQUFPZSxJQUFQO0FBQ0EiLCJmaWxlIjoic29uZ19wbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93ZWIvYXNzZXRzL2pzL3NvbmdfcGxheWVyLmpzXCIpO1xuIiwiZnVuY3Rpb24gZ2V0QXVkaW9Db250ZXh0KCkge1xuXHR3aW5kb3cuQXVkaW9Db250ZXh0ID0gKHdpbmRvdy5BdWRpb0NvbnRleHQgfHxcblx0d2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCB8fFxuXHR3aW5kb3cubW96QXVkaW9Db250ZXh0IHx8XG5cdHdpbmRvdy5vQXVkaW9Db250ZXh0IHx8XG5cdHdpbmRvdy5tc0F1ZGlvQ29udGV4dCk7IC8vIFNhZmFyaSBhbmQgb2xkIHZlcnNpb25zIG9mIENocm9tZVxuXHRyZXR1cm4gbmV3IEF1ZGlvQ29udGV4dCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGdldEF1ZGlvQ29udGV4dDogZ2V0QXVkaW9Db250ZXh0XG59XG4iLCJmdW5jdGlvbiBnZXRJbnN0cnVtZW50S2V5T2Zmc2V0KGluc3RydW1lbnQpIHtcblx0bGV0IGtleV9vZmZzZXRzID0ge1xuXHRcdCdndWl0YXInOiAxMixcblx0XHQnY2xhcmluZXQnOiAyLFxuXHRcdCdiYXNzX2NsYXJpbmV0JzogMTQsXG5cdFx0J3NvcHJhbm9fc2F4b3Bob25lJzogMixcblx0XHQnYWx0b19zYXhvcGhvbmUnOiA5LFxuXHRcdCd0ZW5vcl9zYXhvcGhvbmUnOiAxNCxcblx0XHQnZnJlbmNoX2hvcm4nOiA3LFxuXHRcdCd0cnVtcGV0JzogMixcblx0XHQncGlhbm8nOiAwLFxuXHR9XG5cdHJldHVybiBrZXlfb2Zmc2V0c1tpbnN0cnVtZW50XTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5zdHJ1bWVudEZpbmdlcmluZyhpbnN0cnVtZW50KSB7XG5cdGxldCBmaW5nZXJpbmdfbWFwID0ge1xuXHRcdCdndWl0YXInOiAnZ3VpdGFyJyxcblx0XHQncGljY29sbyc6ICdwaWNvbG8nLFxuXHRcdCdjbGFyaW5ldCc6ICdjbGFyaW5ldCcsXG5cdFx0J2Jhc3NfY2xhcmluZXQnOiAnY2xhcmluZXQnLFxuXHRcdCdzb3ByYW5vX3NheG9waG9uZSc6ICdzYXhvcGhvbmUnLFxuXHRcdCdhbHRvX3NheG9waG9uZSc6ICdzYXhvcGhvbmUnLFxuXHRcdCd0ZW5vcl9zYXhvcGhvbmUnOiAnc2F4b3Bob25lJyxcblx0XHQnYmFyaXRvbmVfc2F4b3Bob25lJzogJ3NheG9waG9uZScsXG5cdFx0J2ZyZW5jaF9ob3JuJzogJ3RydW1wZXQnLFxuXHRcdCd0cnVtcGV0JzogJ3RydW1wZXQnLFxuXHRcdCd4eWxvcGhvbmUnOiAneHlsb3Bob25lJyxcblx0XHQnZ2xvY2tlbnNwaWVsJzogJ2dsb2NrZW5zcGllbCcsXG5cdFx0J3BpYW5vJzogJ3BpYW5vJyxcblx0fVxuXHRyZXR1cm4gZmluZ2VyaW5nX21hcFtpbnN0cnVtZW50XTtcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Z2V0SW5zdHJ1bWVudEtleU9mZnNldDogZ2V0SW5zdHJ1bWVudEtleU9mZnNldCxcblx0Z2V0SW5zdHJ1bWVudEZpbmdlcmluZzogZ2V0SW5zdHJ1bWVudEZpbmdlcmluZyxcbn1cbiIsImZ1bmN0aW9uIGNvbXBhcmVLZXlzKG5vdGUxLCBub3RlMikge1xuXHRsZXQga2V5YWxpYXNlcyA9IHtcblx0XHQnYWInOiAnZyMnLFxuXHRcdCdhJyA6ICdhJyxcblx0XHQnYSMnIDogJ2JiJyxcblx0XHQnYmInIDogJ2EjJyxcblx0XHQnYicgOiAnY2InLFxuXHRcdCdiIyc6ICdjJyxcblx0XHQnY2InIDogJ2InLFxuXHRcdCdjJyA6ICdiIycsXG5cdFx0J2MjJzogJ2RiJyxcblx0XHQnZGInIDogJ2MjJyxcblx0XHQnZCcgOiAnZCcsXG5cdFx0J2QjJyA6ICdlYicsXG5cdFx0J2ViJyA6ICdkIycsXG5cdFx0J2UnIDogJ2ZiJyxcblx0XHQnZSMnIDogJ2YnLFxuXHRcdCdmYicgOiAnZScsXG5cdFx0J2YnIDogJ2YnLFxuXHRcdCdmIycgOiAnZ2InLFxuXHRcdCdnYicgOiAnZiMnLFxuXHRcdCdnJyA6ICdnJyxcblx0XHQnZyMnIDogJ2FiJyxcblx0fVxuXHRpZiAobm90ZTEgPT0gdW5kZWZpbmVkIHx8IG5vdGUyID09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gbm90ZTEudG9Mb3dlckNhc2UoKSA9PSBub3RlMi50b0xvd2VyQ2FzZSgpIHx8IGtleWFsaWFzZXNbbm90ZTEudG9Mb3dlckNhc2UoKV0gPT0gbm90ZTIudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gZ2V0S2V5QXNGbGF0KGtleSkge1xuXHRsZXQgZmxhdF9tYXAgPSB7XG5cdFx0J2FiJzogJ0FiJyxcblx0XHQnYScgOiAnYScsXG5cdFx0J2EjJyA6ICdCYicsXG5cdFx0J2JiJyA6ICdCYicsXG5cdFx0J2InIDogJ0InLFxuXHRcdCdjYicgOiAnQicsXG5cdFx0J2MnIDogJ0MnLFxuXHRcdCdjIyc6ICdEYicsXG5cdFx0J2RiJyA6ICdEYicsXG5cdFx0J2QnIDogJ0QnLFxuXHRcdCdkIycgOiAnRWInLFxuXHRcdCdlYicgOiAnRWInLFxuXHRcdCdlJyA6ICdGYicsXG5cdFx0J2UjJyA6ICdGJyxcblx0XHQnZmInIDogJ0UnLFxuXHRcdCdmJyA6ICdGJyxcblx0XHQnZiMnIDogJ0diJyxcblx0XHQnZ2InIDogJ0diJyxcblx0XHQnZycgOiAnRycsXG5cdFx0J2cjJyA6ICdBYicsXG5cdH1cblx0cmV0dXJuIGZsYXRfbWFwW2tleS50b0xvd2VyQ2FzZSgpXVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGNvbXBhcmVLZXlzOiBjb21wYXJlS2V5c1xufVxuIiwiaW1wb3J0IGtleV9jb21wYXJpc29uIGZyb20gJy4va2V5X2NvbXBhcmlzb24nXG5cbmZ1bmN0aW9uIGdldEtleVNpZ25hdHVyZUluZm8oa2V5KSB7XG5cdC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0tleV9zaWduYXR1cmVcblx0bGV0IGtleV9zaWdzID0ge1xuXHRcdCdDIG1ham9yJyA6IHtcblx0XHRcdCd0eXBlJzogJyMnLFxuXHRcdFx0J25vdGVzJzoge31cblx0XHR9LFxuXHRcdCdBIG1pbm9yJyA6IHtcblx0XHRcdCd0eXBlJzogJyMnLFxuXHRcdFx0J25vdGVzJzoge31cblx0XHR9LFxuXHRcdCdHIG1ham9yJyA6IHtcblx0XHRcdCd0eXBlJzogJyMnLFxuXHRcdFx0J25vdGVzJzogeydGJzogdHJ1ZX1cblx0XHR9LFxuXHRcdCdFIG1pbm9yJyA6IHtcblx0XHRcdCd0eXBlJzogJyMnLFxuXHRcdFx0J25vdGVzJzogeydGJzogdHJ1ZX1cblx0XHR9LFxuXHRcdCdEIG1ham9yJyA6IHtcblx0XHRcdCd0eXBlJzogJyMnLFxuXHRcdFx0J25vdGVzJzogeydGJyA6IHRydWUsICdDJyA6IHRydWV9XG5cdFx0fSxcblx0XHQnQiBtaW5vcicgOiB7XG5cdFx0XHQndHlwZSc6ICcjJyxcblx0XHRcdCdub3Rlcyc6IHsnRicgOiB0cnVlLCAnQycgOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0EgbWFqb3InIDoge1xuXHRcdFx0J3R5cGUnOiAnIycsXG5cdFx0XHQnbm90ZXMnOiB7J0YnIDogdHJ1ZSwgJ0MnIDogdHJ1ZSwgJ0cnIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdFIG1ham9yJyA6IHtcblx0XHRcdCd0eXBlJzogJyMnLFxuXHRcdFx0J25vdGVzJzogeydGJyA6IHRydWUsICdDJyA6IHRydWUsICdHJyA6IHRydWUsICdEJyA6IHRydWV9XG5cdFx0fSxcblx0XHQnQiBtYWpvcicgOiB7XG5cdFx0XHQndHlwZSc6ICcjJyxcblx0XHRcdCdub3Rlcyc6IHsnRicgOiB0cnVlLCAnQycgOiB0cnVlLCAnRycgOiB0cnVlLCAnRCcgOiB0cnVlLCAnQScgOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0YgbWFqb3InIDoge1xuXHRcdFx0J3R5cGUnOiAnYicsXG5cdFx0XHQnbm90ZXMnOiB7J0InIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdEIG1pbm9yJyA6IHtcblx0XHRcdCd0eXBlJzogJ2InLFxuXHRcdFx0J25vdGVzJzogeydCJyA6IHRydWV9XG5cdFx0fSxcblx0XHQnQmIgbWFqb3InIDoge1xuXHRcdFx0J3R5cGUnOiAnYicsXG5cdFx0XHQnbm90ZXMnOiB7J0InIDogdHJ1ZSwgJ0UnIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdHIG1pbm9yJyA6IHtcblx0XHRcdCd0eXBlJzogJ2InLFxuXHRcdFx0J25vdGVzJzogeydCJyA6IHRydWUsICdFJyA6IHRydWV9XG5cdFx0fSxcblx0XHQnRWIgbWFqb3InIDoge1xuXHRcdFx0J3R5cGUnOiAnYicsXG5cdFx0XHQnbm90ZXMnOiB7J0InIDogdHJ1ZSwgJ0UnIDogdHJ1ZSwgJ0EnIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdDIG1pbm9yJyA6IHtcblx0XHRcdCd0eXBlJzogJ2InLFxuXHRcdFx0J25vdGVzJzogeydCJyA6IHRydWUsICdFJyA6IHRydWUsICdBJyA6IHRydWV9XG5cdFx0fSxcblx0XHQnQWIgbWFqb3InIDoge1xuXHRcdFx0J3R5cGUnOiAnYicsXG5cdFx0XHQnbm90ZXMnOiB7J0InIDogdHJ1ZSwgJ0UnIDogdHJ1ZSwgJ0EnIDogdHJ1ZSwgJ0QnIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdGIG1pbm9yJyA6IHtcblx0XHRcdCd0eXBlJzogJ2InLFxuXHRcdFx0J25vdGVzJzogeydCJyA6IHRydWUsICdFJyA6IHRydWUsICdBJyA6IHRydWUsICdEJyA6IHRydWV9XG5cdFx0fSxcblx0XHQnRGIgbWFqb3InIDoge1xuXHRcdFx0J3R5cGUnOiAnYicsXG5cdFx0XHQnbm90ZXMnOiB7J0InIDogdHJ1ZSwgJ0UnIDogdHJ1ZSwgJ0EnIDogdHJ1ZSwgJ0QnIDogdHJ1ZSwgJ0cnIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdCYiBtaW5vcicgOiB7XG5cdFx0XHQndHlwZSc6ICdiJyxcblx0XHRcdCdub3Rlcyc6IHsnQicgOiB0cnVlLCAnRScgOiB0cnVlLCAnQScgOiB0cnVlLCAnRCcgOiB0cnVlLCAnRycgOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0diIG1ham9yJyA6IHtcblx0XHRcdCd0eXBlJzogJ2InLFxuXHRcdFx0J25vdGVzJzogeydCJyA6IHRydWUsICdFJyA6IHRydWUsICdBJyA6IHRydWUsICdEJyA6IHRydWUsICdHJyA6IHRydWUsICdDJyA6IHRydWV9XG5cdFx0fSxcblx0XHQnRWIgbWlub3InIDoge1xuXHRcdFx0J3R5cGUnOiAnYicsXG5cdFx0XHQnbm90ZXMnOiB7J0InIDogdHJ1ZSwgJ0UnIDogdHJ1ZSwgJ0EnIDogdHJ1ZSwgJ0QnIDogdHJ1ZSwgJ0cnIDogdHJ1ZSwgJ0MnIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdDYiBtYWpvcicgOiB7XG5cdFx0XHQndHlwZSc6ICdiJyxcblx0XHRcdCdub3Rlcyc6IHsnQicgOiB0cnVlLCAnRScgOiB0cnVlLCAnQScgOiB0cnVlLCAnRCcgOiB0cnVlLCAnRycgOiB0cnVlLCAnQycgOiB0cnVlLCAnRicgOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0FiIG1pbm9yJyA6IHtcblx0XHRcdCd0eXBlJyA6ICdiJyxcblx0XHRcdCdub3Rlcyc6IHsnQic6IHRydWUsICdFJzogdHJ1ZSwgJ0EnOiB0cnVlLCAnRCc6IHRydWUsICdHJzogdHJ1ZSwgJ0MnOiB0cnVlLCAnRic6IHRydWV9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4ga2V5X3NpZ3Nba2V5XTtcbn1cblxuZnVuY3Rpb24gZ2V0T2Zmc2V0Tm90ZShrZXksIG9jdGF2ZSwgb2Zmc2V0KSB7XG5cdGxldCBub3RlcyA9IFsnQycsICdEYicsICdEJywgJ0ViJywgJ0UnLCAnRicsICdHYicsICdHJywgJ0FiJywgJ0EnLCAnQmInLCAnQiddO1xuXHRsZXQgc3RhcnRJbmRleCA9IDA7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbm90ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoa2V5X2NvbXBhcmlzb24uY29tcGFyZUtleXMobm90ZXNbaV0sIGtleSkpIHtcblx0XHRcdHN0YXJ0SW5kZXggPSBpO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cdGxldCBvZmZzZXRLZXkgPSBub3Rlc1sobm90ZXMubGVuZ3RoICsgc3RhcnRJbmRleCArIG9mZnNldCkgJSBub3Rlcy5sZW5ndGhdO1xuXHRsZXQgb2Zmc2V0T2N0YXZlID0gb2N0YXZlICsgTWF0aC5mbG9vcigoc3RhcnRJbmRleCArIG9mZnNldCkgLyBub3Rlcy5sZW5ndGgpO1xuXHRyZXR1cm4ge1xuXHRcdFwibmFtZVwiOiBvZmZzZXRLZXksXG5cdFx0XCJvY3RhdmVcIjogb2Zmc2V0T2N0YXZlLFxuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGdldEtleVNpZ25hdHVyZUluZm86IGdldEtleVNpZ25hdHVyZUluZm8sXG5cdGdldE9mZnNldE5vdGU6IGdldE9mZnNldE5vdGVcbn1cblxuIiwiaW1wb3J0IGtleV9jb21wYXJpc29uIGZyb20gJy4va2V5X2NvbXBhcmlzb24nXG5sZXQgbm90ZUZyZXF1ZW5jaWVzID1cblx0Ly8gQiAgICAgICAgQSMgICAgICAgIEEgICAgICBHIyAgICAgICBHICAgICAgICAgRiMgICAgICAgRiAgICAgICAgRSAgICAgICAgIEQjICAgICAgRCAgICAgICAgQyMgICAgICAgQ1xuXHRbNzkwMi4xMywgNzQ1OC42MiwgNzA0MC4wMCwgNjY0NC44OCwgNjI3MS45MywgNTkxOS45MSwgNTU4Ny42NSwgNTI3NC4wNCwgNDk3OC4wMywgNDY5OC42NCwgNDQzNC45MiwgNDE4Ni4wMSwgIC8vIDhcblx0Mzk1MS4wNywgMzcyOS4zMSwgMzUyMC4wMCwgMzMyMi40NCwgMzEzNS45NiwgMjk1OS45NiwgMjc5My44MywgMjYzNy4wMiwgMjQ4OS4wMiwgMjM0OS4zMiwgMjIxNy40NiwgMjA5My4wMCwgICAvLyA3XG5cdDE5NzUuNTMsIDE4NjQuNjYsIDE3NjAuMDAsIDE2NjEuMjIsIDE1NjcuOTgsIDE0NzkuOTgsIDEzOTYuOTEsIDEzMTguNTEsIDEyNDQuNTEsIDExNzQuNjYsIDExMDguNzMsIDEwNDYuNTAsICAgLy8gNlxuXHQ5ODcuNzY3LCA5MzIuMzI4LCA4ODAuMDAwLCA4MzAuNjA5LCA3ODMuOTkxLCA3MzkuOTg5LCA2OTguNDU2LCA2NTkuMjU1LCA2MjIuMjU0LCA1ODcuMzMwLCA1NTQuMzY1LCA1MjMuMjUxLCAgIC8vIDVcblx0NDkzLjg4MywgNDY2LjE2NCwgNDQwLjAwMCwgNDE1LjMwNSwgMzkxLjk5NSwgMzY5Ljk5NCwgMzQ5LjIyOCwgMzI5LjYyOCwgMzExLjEyNywgMjkzLjY2NSwgMjc3LjE4MywgMjYxLjYyNiwgICAvLyA0XG5cdDI0Ni45NDIsIDIzMy4wODIsIDIyMC4wMDAsIDIwNy42NTIsIDE5NS45OTgsIDE4NC45OTcsIDE3NC42MTQsIDE2NC44MTQsIDE1NS41NjMsIDE0Ni44MzIsIDEzOC41OTEsIDEzMC44MTMsICAgLy8gM1xuXHQxMjMuNDcxLCAxMTYuNTQxLCAxMTAuMDAwLCAxMDMuODI2LCA5Ny45OTg5LCA5Mi40OTg2LCA4Ny4zMDcxLCA4Mi40MDY5LCA3Ny43ODE3LCA3My40MTYyLCA2OS4yOTU3LCA2NS40MDY0LCAgIC8vIDJcblx0NjEuNzM1NCwgNTguMjcwNSwgNTUuMDAwMCwgNTEuOTEzMSwgNDguOTk5NCwgNDYuMjQ5MywgNDMuNjUzNSwgNDEuMjAzNCwgMzguODkwOSwgMzYuNzA4MSwgMzQuNjQ3OCwgMzIuNzAzMiwgICAvLyAxXG5cdDMwLjg2NzcsIDI5LjEzNTIsIDI3LjUwMDAsIDI1Ljk1NjUsIDI0LjQ5OTcsIDIzLjEyNDcsIDIxLjgyNjgsIDIwLjYwMTcsIDE5LjQ0NTQsIDE4LjM1NDAsIDE3LjMyMzksIDE2LjM1MTZdOyAvLyAwXG5cbmxldCBub3RlTmFtZXMgPSBbXCJCXCIsIFwiQSNcIiwgXCJBXCIsIFwiRyNcIiwgXCJHXCIsIFwiRiNcIiwgXCJGXCIsIFwiRVwiLCBcIkQjXCIsIFwiRFwiLCBcIkMjXCIsIFwiQ1wiXTtcblxuZnVuY3Rpb24gZXN0aW1hdGVOb3RlKGZyZXF1ZW5jeSkge1xuXHRsZXQgbGVuZ3RoID0gbm90ZUZyZXF1ZW5jaWVzLmxlbmd0aDtcblx0bGV0IGZyZXF1ZW5jeUluZGV4ID0gMDtcblx0bGV0IG5leHRDbG9zZXN0SW5kZXggPSAwO1xuXG5cdC8vIEl0ZXJhdGUgdGhyb3VnaCB0aGUgbm90ZSBhcnJheSB0byBmaW5kIHRoZSBjbG9zZXN0IGluZGljZXNcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGggLSAxOyBpKyspIHtcblx0XHRpZiAoaSA9PSAwICYmIGZyZXF1ZW5jeSA+IG5vdGVGcmVxdWVuY2llc1tpXSkge1xuXHRcdFx0ZnJlcXVlbmN5SW5kZXggPSAwO1xuXHRcdFx0bmV4dENsb3Nlc3RJbmRleCA9IDA7XG5cdFx0XHRicmVhaztcblx0XHR9IGVsc2UgaWYgKG5vdGVGcmVxdWVuY2llc1tpXSA+PSBmcmVxdWVuY3kgJiYgZnJlcXVlbmN5ID4gbm90ZUZyZXF1ZW5jaWVzW2kgKyAxXSkge1xuXHRcdFx0ZnJlcXVlbmN5SW5kZXggPSAobm90ZUZyZXF1ZW5jaWVzW2ldIC0gZnJlcXVlbmN5KSA8IChmcmVxdWVuY3kgLSBub3RlRnJlcXVlbmNpZXNbaSArIDFdKSA/IGkgOiBpICsgMTtcblx0XHRcdG5leHRDbG9zZXN0SW5kZXggPSBmcmVxdWVuY3lJbmRleCA9PSBpID8gaSArIDEgOiBpO1xuXHRcdFx0YnJlYWs7XG5cdFx0fSBlbHNlIGlmIChpID09IGxlbmd0aCAtIDIpIHtcblx0XHRcdGZyZXF1ZW5jeUluZGV4ID0gbGVuZ3RoIC0gMTtcblx0XHRcdG5leHRDbG9zZXN0SW5kZXggPSBsZW5ndGggLSAxO1xuXHRcdH1cblx0fVxuXG5cdC8vIEdldCB0aGUgbmFtZSBvZiB0aGUgbm90ZVxuXHRyZXR1cm4ge1xuXHRcdGtleTogbm90ZU5hbWVzWyhmcmVxdWVuY3lJbmRleCkgJSBub3RlTmFtZXMubGVuZ3RoXSxcblx0XHRvY3RhdmU6IDggLSBNYXRoLmZsb29yKGZyZXF1ZW5jeUluZGV4IC8gbm90ZU5hbWVzLmxlbmd0aCksXG5cdH07XG59XG5cbmZ1bmN0aW9uIGdldEZyZXF1ZW5jeUZvck5vdGUobm90ZV9uYW1lLCBub3RlX29jdGF2ZSkge1xuXHRsZXQgbm90ZU5hbWVJbmRleDtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBub3RlTmFtZXMubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoa2V5X2NvbXBhcmlzb24uY29tcGFyZUtleXMobm90ZV9uYW1lLCBub3RlTmFtZXNbaV0pKSB7XG5cdFx0XHRub3RlTmFtZUluZGV4ID0gaTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbm90ZUZyZXF1ZW5jaWVzW25vdGVGcmVxdWVuY2llcy5sZW5ndGggLSAxIC0gKG5vdGVfb2N0YXZlICogbm90ZU5hbWVzLmxlbmd0aCkgLSAobm90ZU5hbWVzLmxlbmd0aCAtIG5vdGVOYW1lSW5kZXggLSAxKV1cbn1cblxuZnVuY3Rpb24gZ2V0Tm90ZUZyb21TYW1wbGVzKGJ1ZmZlciwgc2FtcGxlUmF0ZSkge1xuXG5cdC8vIFdlIHVzZSBBdXRvY29ycmVsYXRpb24gdG8gZmluZCB0aGUgZnVuZGFtZW50YWwgZnJlcXVlbmN5LlxuXG5cdC8vIEluIG9yZGVyIHRvIGNvcnJlbGF0ZSB0aGUgc2lnbmFsIHdpdGggaXRzZWxmIChoZW5jZSB0aGUgbmFtZSBvZiB0aGUgYWxnb3JpdGhtKSwgd2Ugd2lsbCBjaGVjayB0d28gcG9pbnRzICdrJyBmcmFtZXMgYXdheS5cblx0Ly8gVGhlIGF1dG9jb3JyZWxhdGlvbiBpbmRleCB3aWxsIGJlIHRoZSBhdmVyYWdlIG9mIHRoZXNlIHByb2R1Y3RzLiBBdCB0aGUgc2FtZSB0aW1lLCB3ZSBub3JtYWxpemUgdGhlIHZhbHVlcy5cblx0Ly8gU291cmNlOiBodHRwOi8vd3d3LnBoeS5tdHkuZWR1L35zdWl0cy9hdXRvY29ycmVsYXRpb24uaHRtbFxuXHQvLyBBc3N1bWluZyB0aGUgc2FtcGxlIHJhdGUgaXMgNDgwMDBIeiwgYSAnaycgZXF1YWwgdG8gMTAwMCB3b3VsZCBjb3JyZXNwb25kIHRvIGEgNDhIeiBzaWduYWwgKDQ4MDAwLzEwMDAgPSA0OCksXG5cdC8vIHdoaWxlIGEgJ2snIGVxdWFsIHRvIDggd291bGQgY29ycmVzcG9uZCB0byBhIDYwMDBIeiBvbmUsIHdoaWNoIGlzIGVub3VnaCB0byBjb3ZlciBtb3N0IChpZiBub3QgYWxsKVxuXHQvLyB0aGUgbm90ZXMgd2UgaGF2ZSBpbiB0aGUgbm90ZXMuanNvbiBmaWxlLlxuXG5cdGxldCB0MCA9IHBlcmZvcm1hbmNlLm5vdygpXG5cdHZhciBuID0gMTAyNCwgYmVzdFIgPSAwLCBiZXN0SyA9IC0xO1xuXHRmb3IodmFyIGsgPSA4OyBrIDw9IDEwMDA7IGsrKyl7XG5cblx0XHR2YXIgc3VtID0gMDtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRzdW0gKz0gKChidWZmZXJbaV0gLSAxMjgpIC8gMTI4KSAqICgoYnVmZmVyW2kgKyBrXSAtIDEyOCkgLyAxMjgpO1xuXHRcdH1cblxuXHRcdHZhciByID0gc3VtIC8gKG4gKyBrKTtcblxuXHRcdGlmKHIgPiBiZXN0Uil7XG5cdFx0XHRiZXN0UiA9IHI7XG5cdFx0XHRiZXN0SyA9IGs7XG5cdFx0fVxuXG5cdFx0aWYociA+IDAuOSkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0aWYoYmVzdFIgPiAwLjAwMjUpIHtcblx0XHQvLyBUaGUgcGVyaW9kIChpbiBmcmFtZXMpIG9mIHRoZSBmdW5kYW1lbnRhbCBmcmVxdWVuY3kgaXMgJ2Jlc3RLJy4gR2V0dGluZyB0aGUgZnJlcXVlbmN5IGZyb20gdGhlcmUgaXMgdHJpdmlhbC5cblx0XHR2YXIgZnVuZGFtZW50YWxGcmVxID0gc2FtcGxlUmF0ZSAvIGJlc3RLO1xuXHRcdHJldHVybiBlc3RpbWF0ZU5vdGUoZnVuZGFtZW50YWxGcmVxKTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBXZSBoYXZlbid0IGZvdW5kIGEgZ29vZCBjb3JyZWxhdGlvblxuXHRcdHJldHVybiBbXTtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRnZXRGcmVxdWVuY3lGb3JOb3RlOiBnZXRGcmVxdWVuY3lGb3JOb3RlLFxuXHRnZXROb3RlRnJvbVNhbXBsZXM6IGdldE5vdGVGcm9tU2FtcGxlcyxcbn1cbiIsImltcG9ydCBub3RlX2RldGVjdGlvbiBmcm9tICcuL25vdGVfZGV0ZWN0aW9uJ1xuaW1wb3J0IEluc3RydW1lbnRzIGZyb20gJy4vaW5zdHJ1bWVudHMnXG5pbXBvcnQgS2V5U2lnbmF0dXJlcyBmcm9tICcuL2tleV9zaWduYXR1cmVzJ1xuaW1wb3J0IEF1ZGlvQ29udGV4dCBmcm9tICcuL2F1ZGlvX2NvbnRleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvbmdQbGF5ZXIge1xuXHRjb25zdHJ1Y3Rvcihub3RlcywgaW5zdHJ1bWVudCwgYmVhdHNfcGVyX21pbnV0ZSwgYmVhdHNfcGVyX21lYXN1cmUpIHtcblx0XHR0aGlzLmF1ZGlvQ3R4ID0gQXVkaW9Db250ZXh0LmdldEF1ZGlvQ29udGV4dCgpXG5cdFx0dGhpcy50aWNrID0gbnVsbDtcblx0XHR0aGlzLnRpY2tWb2x1bWUgPSBudWxsO1xuXHRcdHRoaXMuc291bmRIeiA9IDEwMDA7XG5cdFx0dGhpcy5zY2hlZHVsZWROb3RlcyA9IHRoaXMuYXBwZW5kVGltaW5nT2Zmc2V0KG5vdGVzLCBiZWF0c19wZXJfbWVhc3VyZSwgYmVhdHNfcGVyX21pbnV0ZSkuZmxhdCgpO1xuXHRcdHRoaXMuaW5zdHJ1bWVudCA9IGluc3RydW1lbnQ7XG5cdFx0Ly90aGlzLnNldENvbnRyb2xsZXIoKVxuXHRcdHRoaXMuaW5pdEF1ZGlvKCk7XG5cdH1cblxuXHRpbml0QXVkaW8oKSB7XG5cdFx0dGhpcy50aWNrID0gdGhpcy5hdWRpb0N0eC5jcmVhdGVPc2NpbGxhdG9yKCk7XG5cdFx0dGhpcy50aWNrVm9sdW1lID0gdGhpcy5hdWRpb0N0eC5jcmVhdGVHYWluKCk7XG5cblx0XHR0aGlzLnRpY2sudHlwZSA9ICdzcXVhcmUnO1xuXHRcdHRoaXMudGljay5mcmVxdWVuY3kudmFsdWUgPSB0aGlzLnNvdW5kSHo7XG5cdFx0dGhpcy50aWNrVm9sdW1lLmdhaW4udmFsdWUgPSAwO1xuXG5cdFx0dGhpcy50aWNrLmNvbm5lY3QodGhpcy50aWNrVm9sdW1lKTtcblx0XHQvL3RoaXMudGlja1ZvbHVtZS5jb25uZWN0KHRoaXMuYXVkaW9DdHguZGVzdGluYXRpb24pO1xuXHRcdHRoaXMudGljay5zdGFydCgwKTsgIC8vIE5vIG9mZnNldCwgc3RhcnQgaW1tZWRpYXRlbHkuXG5cdH1cblxuXHRzdGFydCgpIHtcblxuXHRcdGxldCBub3cgPSB0aGlzLmF1ZGlvQ3R4LmN1cnJlbnRUaW1lO1xuXG5cdFx0Ly8gU2NoZWR1bGUgYWxsIHRoZSBjbGlja3MgYWhlYWQuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNjaGVkdWxlZE5vdGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgbm90ZSA9IHRoaXMuc2NoZWR1bGVkTm90ZXNbaV0ubm90ZTtcblx0XHRcdGlmIChub3RlLmF0dHJzLnR5cGUgIT09ICdHaG9zdE5vdGUnKSB7XG5cdFx0XHRcdGxldCBwcm9wcyA9IG5vdGUuZ2V0S2V5UHJvcHMoKVswXTtcblx0XHRcdFx0bGV0IGtleSA9IHByb3BzLmtleTtcblx0XHRcdFx0bGV0IG9jdGF2ZSA9IHByb3BzLm9jdGF2ZTtcblx0XHRcdFx0bGV0IG9mZnNldE5vdGUgPSBLZXlTaWduYXR1cmVzLmdldE9mZnNldE5vdGUoa2V5LCBvY3RhdmUsICAwIC0gSW5zdHJ1bWVudHMuZ2V0SW5zdHJ1bWVudEtleU9mZnNldCh0aGlzLmluc3RydW1lbnQpKTtcblx0XHRcdFx0bGV0IGZyZXFlbmN5ID0gbm90ZV9kZXRlY3Rpb24uZ2V0RnJlcXVlbmN5Rm9yTm90ZShvZmZzZXROb3RlLm5hbWUsIG9mZnNldE5vdGUub2N0YXZlKTtcblx0XHRcdFx0dGhpcy5wbGF5Tm90ZUF0VGltZShmcmVxZW5jeSwgbm93ICsgdGhpcy5zY2hlZHVsZWROb3Rlc1tpXS50aW1pbmdfb2Zmc2V0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwbGF5Tm90ZUF0VGltZShmcmVxdWVuY3ksIHRpbWUpIHtcblx0XHQvLyBTaWxlbmNlIHRoZSBjbGljay5cblx0XHR0aGlzLnRpY2suZnJlcXVlbmN5LmNhbmNlbFNjaGVkdWxlZFZhbHVlcyh0aW1lKTtcblx0XHR0aGlzLnRpY2suZnJlcXVlbmN5LnNldFZhbHVlQXRUaW1lKGZyZXF1ZW5jeSwgdGltZSk7XG5cdFx0dGhpcy50aWNrVm9sdW1lLmdhaW4uY2FuY2VsU2NoZWR1bGVkVmFsdWVzKHRpbWUpO1xuXHRcdHRoaXMudGlja1ZvbHVtZS5nYWluLnNldFZhbHVlQXRUaW1lKDAsIHRpbWUpO1xuXG5cdFx0Ly8gQXVkaWJsZSBjbGljayBzb3VuZC5cblx0XHR0aGlzLnRpY2tWb2x1bWUuZ2Fpbi5saW5lYXJSYW1wVG9WYWx1ZUF0VGltZSgxLCB0aW1lICsgLjAwMSk7XG5cdFx0dGhpcy50aWNrVm9sdW1lLmdhaW4ubGluZWFyUmFtcFRvVmFsdWVBdFRpbWUoMCwgdGltZSArIC4wMDEgKyAuMik7XG5cdH1cblxuXHRzdG9wKCkge1xuXHRcdHRoaXMudGlja1ZvbHVtZS5nYWluLnZhbHVlID0gMDtcblx0fVxuXG5cdHBhdXNlKCkge1xuXHRcdHRoaXMuYXVkaW9DdHguc3VzcGVuZCgpO1xuXHR9XG5cblx0cmVzdW1lKCkge1xuXHRcdHRoaXMuYXVkaW9DdHgucmVzdW1lKCk7XG5cdH1cblxuXHRzZXRDb250cm9sbGVyKCkge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb25nLXBsYXllci1jb250cm9sbGVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcblx0XHRcdFx0dGhpcy50aWNrVm9sdW1lLmNvbm5lY3QodGhpcy5hdWRpb0N0eC5kZXN0aW5hdGlvbik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnRpY2tWb2x1bWUuZGlzY29ubmVjdCh0aGlzLmF1ZGlvQ3R4LmRlc3RpbmF0aW9uKTtcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0YXBwZW5kVGltaW5nT2Zmc2V0KGJhcnMsIGJlYXRzX3Blcl9tZWFzdXJlLCBiZWF0c19wZXJfbWludXRlKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBiYXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgbm90ZXMgPSBiYXJzW2ldO1xuXHRcdFx0aWYgKG5vdGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGxldCBiYXJfdGltaW5nX29mZnNldCA9IGkgKiAoYmVhdHNfcGVyX21lYXN1cmUgLyBiZWF0c19wZXJfbWludXRlKSAqIDYwO1xuXHRcdFx0YmFyc1tpXVswXVsndGltaW5nX29mZnNldCddID0gYmFyX3RpbWluZ19vZmZzZXQ7XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IG5vdGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGlmIChqICE9PSBub3Rlcy5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0bGV0IHRpbWluZ19vZmZzZXQgPSBiYXJfdGltaW5nX29mZnNldCArIG5vdGVzW2ogKyAxXS5wZXJjZW50YWdlICogKGJlYXRzX3Blcl9tZWFzdXJlIC8gYmVhdHNfcGVyX21pbnV0ZSkgKiA2MDtcblx0XHRcdFx0XHRiYXJzW2ldW2ogKyAxXVsndGltaW5nX29mZnNldCddID0gdGltaW5nX29mZnNldDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gYmFycztcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==