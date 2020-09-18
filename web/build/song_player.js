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
    'F# minor': {
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
    'F# major': {
      'type': '#',
      'notes': {
        'F': true,
        'G': true,
        'A': true,
        'C': true,
        'D': true,
        'E': true
      }
    },
    'C# major': {
      'type': '#',
      'notes': {
        'F': true,
        'G': true,
        'A': true,
        'C': true,
        'D': true,
        'E': true,
        'B': true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9hdWRpb19jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3dlYi9hc3NldHMvanMvaW5zdHJ1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9rZXlfY29tcGFyaXNvbi5qcyIsIndlYnBhY2s6Ly8vLi93ZWIvYXNzZXRzL2pzL2tleV9zaWduYXR1cmVzLmpzIiwid2VicGFjazovLy8uL3dlYi9hc3NldHMvanMvbm90ZV9kZXRlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9zb25nX3BsYXllci5qcyJdLCJuYW1lcyI6WyJnZXRBdWRpb0NvbnRleHQiLCJ3aW5kb3ciLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJtb3pBdWRpb0NvbnRleHQiLCJvQXVkaW9Db250ZXh0IiwibXNBdWRpb0NvbnRleHQiLCJnZXRJbnN0cnVtZW50S2V5T2Zmc2V0IiwiaW5zdHJ1bWVudCIsImtleV9vZmZzZXRzIiwiZ2V0SW5zdHJ1bWVudEZpbmdlcmluZyIsImZpbmdlcmluZ19tYXAiLCJjb21wYXJlS2V5cyIsIm5vdGUxIiwibm90ZTIiLCJrZXlhbGlhc2VzIiwidW5kZWZpbmVkIiwidG9Mb3dlckNhc2UiLCJnZXRLZXlBc0ZsYXQiLCJrZXkiLCJmbGF0X21hcCIsImdldEtleVNpZ25hdHVyZUluZm8iLCJrZXlfc2lncyIsImdldE9mZnNldE5vdGUiLCJvY3RhdmUiLCJvZmZzZXQiLCJub3RlcyIsInN0YXJ0SW5kZXgiLCJpIiwibGVuZ3RoIiwia2V5X2NvbXBhcmlzb24iLCJvZmZzZXRLZXkiLCJvZmZzZXRPY3RhdmUiLCJNYXRoIiwiZmxvb3IiLCJub3RlRnJlcXVlbmNpZXMiLCJub3RlTmFtZXMiLCJlc3RpbWF0ZU5vdGUiLCJmcmVxdWVuY3kiLCJmcmVxdWVuY3lJbmRleCIsIm5leHRDbG9zZXN0SW5kZXgiLCJnZXRGcmVxdWVuY3lGb3JOb3RlIiwibm90ZV9uYW1lIiwibm90ZV9vY3RhdmUiLCJub3RlTmFtZUluZGV4IiwiZ2V0Tm90ZUZyb21TYW1wbGVzIiwiYnVmZmVyIiwic2FtcGxlUmF0ZSIsIm4iLCJiZXN0UiIsImJlc3RLIiwiayIsInN1bSIsInIiLCJmdW5kYW1lbnRhbEZyZXEiLCJTb25nUGxheWVyIiwiYmVhdHNfcGVyX21pbnV0ZSIsImJlYXRzX3Blcl9tZWFzdXJlIiwiYXVkaW9DdHgiLCJ0aWNrIiwidGlja1ZvbHVtZSIsInNvdW5kSHoiLCJzY2hlZHVsZWROb3RlcyIsImFwcGVuZFRpbWluZ09mZnNldCIsImZsYXQiLCJpbml0QXVkaW8iLCJjcmVhdGVPc2NpbGxhdG9yIiwiY3JlYXRlR2FpbiIsInR5cGUiLCJ2YWx1ZSIsImdhaW4iLCJjb25uZWN0Iiwic3RhcnQiLCJub3ciLCJjdXJyZW50VGltZSIsIm5vdGUiLCJhdHRycyIsInByb3BzIiwiZ2V0S2V5UHJvcHMiLCJvZmZzZXROb3RlIiwiS2V5U2lnbmF0dXJlcyIsIkluc3RydW1lbnRzIiwiZnJlcWVuY3kiLCJub3RlX2RldGVjdGlvbiIsIm5hbWUiLCJwbGF5Tm90ZUF0VGltZSIsInRpbWluZ19vZmZzZXQiLCJ0aW1lIiwiY2FuY2VsU2NoZWR1bGVkVmFsdWVzIiwic2V0VmFsdWVBdFRpbWUiLCJsaW5lYXJSYW1wVG9WYWx1ZUF0VGltZSIsInN1c3BlbmQiLCJyZXN1bWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidGFyZ2V0IiwiY2hlY2tlZCIsImRlc3RpbmF0aW9uIiwiZGlzY29ubmVjdCIsImJhcnMiLCJiYXJfdGltaW5nX29mZnNldCIsImoiLCJwZXJjZW50YWdlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFF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SUFBSSxDQUFDekUsQ0FBRCxDQUFoQjs7QUFDQSxZQUFJRixLQUFLLENBQUNHLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDdkI7QUFDQTs7QUFDRCxZQUFJeUUsaUJBQWlCLEdBQUcxRSxDQUFDLElBQUk2QixpQkFBaUIsR0FBR0QsZ0JBQXhCLENBQUQsR0FBNkMsRUFBckU7QUFDQTZDLFlBQUksQ0FBQ3pFLENBQUQsQ0FBSixDQUFRLENBQVIsRUFBVyxlQUFYLElBQThCMEUsaUJBQTlCOztBQUNBLGFBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzdFLEtBQUssQ0FBQ0csTUFBMUIsRUFBa0MwRSxDQUFDLEVBQW5DLEVBQXVDO0FBQ3RDLGNBQUlBLENBQUMsS0FBSzdFLEtBQUssQ0FBQ0csTUFBTixHQUFlLENBQXpCLEVBQTRCO0FBQzNCLGdCQUFJeUQsYUFBYSxHQUFHZ0IsaUJBQWlCLEdBQUc1RSxLQUFLLENBQUM2RSxDQUFDLEdBQUcsQ0FBTCxDQUFMLENBQWFDLFVBQWIsSUFBMkIvQyxpQkFBaUIsR0FBR0QsZ0JBQS9DLElBQW1FLEVBQTNHO0FBQ0E2QyxnQkFBSSxDQUFDekUsQ0FBRCxDQUFKLENBQVEyRSxDQUFDLEdBQUcsQ0FBWixFQUFlLGVBQWYsSUFBa0NqQixhQUFsQztBQUNBO0FBQ0Q7QUFDRDs7QUFDRCxhQUFPZSxJQUFQO0FBQ0EiLCJmaWxlIjoic29uZ19wbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93ZWIvYXNzZXRzL2pzL3NvbmdfcGxheWVyLmpzXCIpO1xuIiwiZnVuY3Rpb24gZ2V0QXVkaW9Db250ZXh0KCkge1xuXHR3aW5kb3cuQXVkaW9Db250ZXh0ID0gKHdpbmRvdy5BdWRpb0NvbnRleHQgfHxcblx0d2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCB8fFxuXHR3aW5kb3cubW96QXVkaW9Db250ZXh0IHx8XG5cdHdpbmRvdy5vQXVkaW9Db250ZXh0IHx8XG5cdHdpbmRvdy5tc0F1ZGlvQ29udGV4dCk7IC8vIFNhZmFyaSBhbmQgb2xkIHZlcnNpb25zIG9mIENocm9tZVxuXHRyZXR1cm4gbmV3IEF1ZGlvQ29udGV4dCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGdldEF1ZGlvQ29udGV4dDogZ2V0QXVkaW9Db250ZXh0XG59XG4iLCJmdW5jdGlvbiBnZXRJbnN0cnVtZW50S2V5T2Zmc2V0KGluc3RydW1lbnQpIHtcblx0bGV0IGtleV9vZmZzZXRzID0ge1xuXHRcdCdndWl0YXInOiAxMixcblx0XHQnY2xhcmluZXQnOiAyLFxuXHRcdCdiYXNzX2NsYXJpbmV0JzogMTQsXG5cdFx0J3NvcHJhbm9fc2F4b3Bob25lJzogMixcblx0XHQnYWx0b19zYXhvcGhvbmUnOiA5LFxuXHRcdCd0ZW5vcl9zYXhvcGhvbmUnOiAxNCxcblx0XHQnZnJlbmNoX2hvcm4nOiA3LFxuXHRcdCd0cnVtcGV0JzogMixcblx0XHQncGlhbm8nOiAwLFxuXHR9XG5cdHJldHVybiBrZXlfb2Zmc2V0c1tpbnN0cnVtZW50XTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5zdHJ1bWVudEZpbmdlcmluZyhpbnN0cnVtZW50KSB7XG5cdGxldCBmaW5nZXJpbmdfbWFwID0ge1xuXHRcdCdndWl0YXInOiAnZ3VpdGFyJyxcblx0XHQncGljY29sbyc6ICdwaWNvbG8nLFxuXHRcdCdjbGFyaW5ldCc6ICdjbGFyaW5ldCcsXG5cdFx0J2Jhc3NfY2xhcmluZXQnOiAnY2xhcmluZXQnLFxuXHRcdCdzb3ByYW5vX3NheG9waG9uZSc6ICdzYXhvcGhvbmUnLFxuXHRcdCdhbHRvX3NheG9waG9uZSc6ICdzYXhvcGhvbmUnLFxuXHRcdCd0ZW5vcl9zYXhvcGhvbmUnOiAnc2F4b3Bob25lJyxcblx0XHQnYmFyaXRvbmVfc2F4b3Bob25lJzogJ3NheG9waG9uZScsXG5cdFx0J2ZyZW5jaF9ob3JuJzogJ3RydW1wZXQnLFxuXHRcdCd0cnVtcGV0JzogJ3RydW1wZXQnLFxuXHRcdCd4eWxvcGhvbmUnOiAneHlsb3Bob25lJyxcblx0XHQnZ2xvY2tlbnNwaWVsJzogJ2dsb2NrZW5zcGllbCcsXG5cdFx0J3BpYW5vJzogJ3BpYW5vJyxcblx0fVxuXHRyZXR1cm4gZmluZ2VyaW5nX21hcFtpbnN0cnVtZW50XTtcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Z2V0SW5zdHJ1bWVudEtleU9mZnNldDogZ2V0SW5zdHJ1bWVudEtleU9mZnNldCxcblx0Z2V0SW5zdHJ1bWVudEZpbmdlcmluZzogZ2V0SW5zdHJ1bWVudEZpbmdlcmluZyxcbn1cbiIsImZ1bmN0aW9uIGNvbXBhcmVLZXlzKG5vdGUxLCBub3RlMikge1xuXHRsZXQga2V5YWxpYXNlcyA9IHtcblx0XHQnYWInOiAnZyMnLFxuXHRcdCdhJyA6ICdhJyxcblx0XHQnYSMnIDogJ2JiJyxcblx0XHQnYmInIDogJ2EjJyxcblx0XHQnYicgOiAnY2InLFxuXHRcdCdiIyc6ICdjJyxcblx0XHQnY2InIDogJ2InLFxuXHRcdCdjJyA6ICdiIycsXG5cdFx0J2MjJzogJ2RiJyxcblx0XHQnZGInIDogJ2MjJyxcblx0XHQnZCcgOiAnZCcsXG5cdFx0J2QjJyA6ICdlYicsXG5cdFx0J2ViJyA6ICdkIycsXG5cdFx0J2UnIDogJ2ZiJyxcblx0XHQnZSMnIDogJ2YnLFxuXHRcdCdmYicgOiAnZScsXG5cdFx0J2YnIDogJ2YnLFxuXHRcdCdmIycgOiAnZ2InLFxuXHRcdCdnYicgOiAnZiMnLFxuXHRcdCdnJyA6ICdnJyxcblx0XHQnZyMnIDogJ2FiJyxcblx0fVxuXHRpZiAobm90ZTEgPT0gdW5kZWZpbmVkIHx8IG5vdGUyID09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gbm90ZTEudG9Mb3dlckNhc2UoKSA9PSBub3RlMi50b0xvd2VyQ2FzZSgpIHx8IGtleWFsaWFzZXNbbm90ZTEudG9Mb3dlckNhc2UoKV0gPT0gbm90ZTIudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gZ2V0S2V5QXNGbGF0KGtleSkge1xuXHRsZXQgZmxhdF9tYXAgPSB7XG5cdFx0J2FiJzogJ0FiJyxcblx0XHQnYScgOiAnYScsXG5cdFx0J2EjJyA6ICdCYicsXG5cdFx0J2JiJyA6ICdCYicsXG5cdFx0J2InIDogJ0InLFxuXHRcdCdjYicgOiAnQicsXG5cdFx0J2MnIDogJ0MnLFxuXHRcdCdjIyc6ICdEYicsXG5cdFx0J2RiJyA6ICdEYicsXG5cdFx0J2QnIDogJ0QnLFxuXHRcdCdkIycgOiAnRWInLFxuXHRcdCdlYicgOiAnRWInLFxuXHRcdCdlJyA6ICdGYicsXG5cdFx0J2UjJyA6ICdGJyxcblx0XHQnZmInIDogJ0UnLFxuXHRcdCdmJyA6ICdGJyxcblx0XHQnZiMnIDogJ0diJyxcblx0XHQnZ2InIDogJ0diJyxcblx0XHQnZycgOiAnRycsXG5cdFx0J2cjJyA6ICdBYicsXG5cdH1cblx0cmV0dXJuIGZsYXRfbWFwW2tleS50b0xvd2VyQ2FzZSgpXVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGNvbXBhcmVLZXlzOiBjb21wYXJlS2V5c1xufVxuIiwiaW1wb3J0IGtleV9jb21wYXJpc29uIGZyb20gJy4va2V5X2NvbXBhcmlzb24nXG5cbmZ1bmN0aW9uIGdldEtleVNpZ25hdHVyZUluZm8oa2V5KSB7XG5cdC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0tleV9zaWduYXR1cmVcblx0bGV0IGtleV9zaWdzID0ge1xuXHRcdCdDIG1ham9yJyA6IHtcblx0XHRcdCd0eXBlJzogJyMnLFxuXHRcdFx0J25vdGVzJzoge31cblx0XHR9LFxuXHRcdCdBIG1pbm9yJyA6IHtcblx0XHRcdCd0eXBlJzogJyMnLFxuXHRcdFx0J25vdGVzJzoge31cblx0XHR9LFxuXHRcdCdHIG1ham9yJyA6IHtcblx0XHRcdCd0eXBlJzogJyMnLFxuXHRcdFx0J25vdGVzJzogeydGJzogdHJ1ZX1cblx0XHR9LFxuXHRcdCdFIG1pbm9yJyA6IHtcblx0XHRcdCd0eXBlJzogJyMnLFxuXHRcdFx0J25vdGVzJzogeydGJzogdHJ1ZX1cblx0XHR9LFxuXHRcdCdEIG1ham9yJyA6IHtcblx0XHRcdCd0eXBlJzogJyMnLFxuXHRcdFx0J25vdGVzJzogeydGJyA6IHRydWUsICdDJyA6IHRydWV9XG5cdFx0fSxcblx0XHQnQiBtaW5vcicgOiB7XG5cdFx0XHQndHlwZSc6ICcjJyxcblx0XHRcdCdub3Rlcyc6IHsnRicgOiB0cnVlLCAnQycgOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0EgbWFqb3InIDoge1xuXHRcdFx0J3R5cGUnOiAnIycsXG5cdFx0XHQnbm90ZXMnOiB7J0YnIDogdHJ1ZSwgJ0MnIDogdHJ1ZSwgJ0cnIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdGIyBtaW5vcicgOiB7XG5cdFx0XHQndHlwZSc6ICcjJyxcblx0XHRcdCdub3Rlcyc6IHsnRicgOiB0cnVlLCAnQycgOiB0cnVlLCAnRycgOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0UgbWFqb3InIDoge1xuXHRcdFx0J3R5cGUnOiAnIycsXG5cdFx0XHQnbm90ZXMnOiB7J0YnIDogdHJ1ZSwgJ0MnIDogdHJ1ZSwgJ0cnIDogdHJ1ZSwgJ0QnIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdCIG1ham9yJyA6IHtcblx0XHRcdCd0eXBlJzogJyMnLFxuXHRcdFx0J25vdGVzJzogeydGJyA6IHRydWUsICdDJyA6IHRydWUsICdHJyA6IHRydWUsICdEJyA6IHRydWUsICdBJyA6IHRydWV9XG5cdFx0fSxcblx0XHQnRiMgbWFqb3InIDoge1xuXHRcdFx0J3R5cGUnOiAnIycsXG5cdFx0XHQnbm90ZXMnOiB7J0YnIDogdHJ1ZSwgJ0cnIDogdHJ1ZSwgJ0EnIDogdHJ1ZSwgJ0MnIDogdHJ1ZSwgJ0QnIDogdHJ1ZSwgJ0UnIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdDIyBtYWpvcicgOiB7XG5cdFx0XHQndHlwZSc6ICcjJyxcblx0XHRcdCdub3Rlcyc6IHsnRicgOiB0cnVlLCAnRycgOiB0cnVlLCAnQScgOiB0cnVlLCAnQycgOiB0cnVlLCAnRCcgOiB0cnVlLCAnRScgOiB0cnVlLCAnQic6IHRydWV9XG5cdFx0fSxcblx0XHQnRiBtYWpvcicgOiB7XG5cdFx0XHQndHlwZSc6ICdiJyxcblx0XHRcdCdub3Rlcyc6IHsnQicgOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0QgbWlub3InIDoge1xuXHRcdFx0J3R5cGUnOiAnYicsXG5cdFx0XHQnbm90ZXMnOiB7J0InIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdCYiBtYWpvcicgOiB7XG5cdFx0XHQndHlwZSc6ICdiJyxcblx0XHRcdCdub3Rlcyc6IHsnQicgOiB0cnVlLCAnRScgOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0cgbWlub3InIDoge1xuXHRcdFx0J3R5cGUnOiAnYicsXG5cdFx0XHQnbm90ZXMnOiB7J0InIDogdHJ1ZSwgJ0UnIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdFYiBtYWpvcicgOiB7XG5cdFx0XHQndHlwZSc6ICdiJyxcblx0XHRcdCdub3Rlcyc6IHsnQicgOiB0cnVlLCAnRScgOiB0cnVlLCAnQScgOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0MgbWlub3InIDoge1xuXHRcdFx0J3R5cGUnOiAnYicsXG5cdFx0XHQnbm90ZXMnOiB7J0InIDogdHJ1ZSwgJ0UnIDogdHJ1ZSwgJ0EnIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdBYiBtYWpvcicgOiB7XG5cdFx0XHQndHlwZSc6ICdiJyxcblx0XHRcdCdub3Rlcyc6IHsnQicgOiB0cnVlLCAnRScgOiB0cnVlLCAnQScgOiB0cnVlLCAnRCcgOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0YgbWlub3InIDoge1xuXHRcdFx0J3R5cGUnOiAnYicsXG5cdFx0XHQnbm90ZXMnOiB7J0InIDogdHJ1ZSwgJ0UnIDogdHJ1ZSwgJ0EnIDogdHJ1ZSwgJ0QnIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdEYiBtYWpvcicgOiB7XG5cdFx0XHQndHlwZSc6ICdiJyxcblx0XHRcdCdub3Rlcyc6IHsnQicgOiB0cnVlLCAnRScgOiB0cnVlLCAnQScgOiB0cnVlLCAnRCcgOiB0cnVlLCAnRycgOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0JiIG1pbm9yJyA6IHtcblx0XHRcdCd0eXBlJzogJ2InLFxuXHRcdFx0J25vdGVzJzogeydCJyA6IHRydWUsICdFJyA6IHRydWUsICdBJyA6IHRydWUsICdEJyA6IHRydWUsICdHJyA6IHRydWV9XG5cdFx0fSxcblx0XHQnR2IgbWFqb3InIDoge1xuXHRcdFx0J3R5cGUnOiAnYicsXG5cdFx0XHQnbm90ZXMnOiB7J0InIDogdHJ1ZSwgJ0UnIDogdHJ1ZSwgJ0EnIDogdHJ1ZSwgJ0QnIDogdHJ1ZSwgJ0cnIDogdHJ1ZSwgJ0MnIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdFYiBtaW5vcicgOiB7XG5cdFx0XHQndHlwZSc6ICdiJyxcblx0XHRcdCdub3Rlcyc6IHsnQicgOiB0cnVlLCAnRScgOiB0cnVlLCAnQScgOiB0cnVlLCAnRCcgOiB0cnVlLCAnRycgOiB0cnVlLCAnQycgOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0NiIG1ham9yJyA6IHtcblx0XHRcdCd0eXBlJzogJ2InLFxuXHRcdFx0J25vdGVzJzogeydCJyA6IHRydWUsICdFJyA6IHRydWUsICdBJyA6IHRydWUsICdEJyA6IHRydWUsICdHJyA6IHRydWUsICdDJyA6IHRydWUsICdGJyA6IHRydWV9XG5cdFx0fSxcblx0XHQnQWIgbWlub3InIDoge1xuXHRcdFx0J3R5cGUnIDogJ2InLFxuXHRcdFx0J25vdGVzJzogeydCJzogdHJ1ZSwgJ0UnOiB0cnVlLCAnQSc6IHRydWUsICdEJzogdHJ1ZSwgJ0cnOiB0cnVlLCAnQyc6IHRydWUsICdGJzogdHJ1ZX1cblx0XHR9XG5cdH07XG5cdHJldHVybiBrZXlfc2lnc1trZXldO1xufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXROb3RlKGtleSwgb2N0YXZlLCBvZmZzZXQpIHtcblx0bGV0IG5vdGVzID0gWydDJywgJ0RiJywgJ0QnLCAnRWInLCAnRScsICdGJywgJ0diJywgJ0cnLCAnQWInLCAnQScsICdCYicsICdCJ107XG5cdGxldCBzdGFydEluZGV4ID0gMDtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBub3Rlcy5sZW5ndGg7IGkrKykge1xuXHRcdGlmIChrZXlfY29tcGFyaXNvbi5jb21wYXJlS2V5cyhub3Rlc1tpXSwga2V5KSkge1xuXHRcdFx0c3RhcnRJbmRleCA9IGk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblx0bGV0IG9mZnNldEtleSA9IG5vdGVzWyhub3Rlcy5sZW5ndGggKyBzdGFydEluZGV4ICsgb2Zmc2V0KSAlIG5vdGVzLmxlbmd0aF07XG5cdGxldCBvZmZzZXRPY3RhdmUgPSBvY3RhdmUgKyBNYXRoLmZsb29yKChzdGFydEluZGV4ICsgb2Zmc2V0KSAvIG5vdGVzLmxlbmd0aCk7XG5cdHJldHVybiB7XG5cdFx0XCJuYW1lXCI6IG9mZnNldEtleSxcblx0XHRcIm9jdGF2ZVwiOiBvZmZzZXRPY3RhdmUsXG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Z2V0S2V5U2lnbmF0dXJlSW5mbzogZ2V0S2V5U2lnbmF0dXJlSW5mbyxcblx0Z2V0T2Zmc2V0Tm90ZTogZ2V0T2Zmc2V0Tm90ZVxufVxuXG4iLCJpbXBvcnQga2V5X2NvbXBhcmlzb24gZnJvbSAnLi9rZXlfY29tcGFyaXNvbidcbmxldCBub3RlRnJlcXVlbmNpZXMgPVxuXHQvLyBCICAgICAgICBBIyAgICAgICAgQSAgICAgIEcjICAgICAgIEcgICAgICAgICBGIyAgICAgICBGICAgICAgICBFICAgICAgICAgRCMgICAgICBEICAgICAgICBDIyAgICAgICBDXG5cdFs3OTAyLjEzLCA3NDU4LjYyLCA3MDQwLjAwLCA2NjQ0Ljg4LCA2MjcxLjkzLCA1OTE5LjkxLCA1NTg3LjY1LCA1Mjc0LjA0LCA0OTc4LjAzLCA0Njk4LjY0LCA0NDM0LjkyLCA0MTg2LjAxLCAgLy8gOFxuXHQzOTUxLjA3LCAzNzI5LjMxLCAzNTIwLjAwLCAzMzIyLjQ0LCAzMTM1Ljk2LCAyOTU5Ljk2LCAyNzkzLjgzLCAyNjM3LjAyLCAyNDg5LjAyLCAyMzQ5LjMyLCAyMjE3LjQ2LCAyMDkzLjAwLCAgIC8vIDdcblx0MTk3NS41MywgMTg2NC42NiwgMTc2MC4wMCwgMTY2MS4yMiwgMTU2Ny45OCwgMTQ3OS45OCwgMTM5Ni45MSwgMTMxOC41MSwgMTI0NC41MSwgMTE3NC42NiwgMTEwOC43MywgMTA0Ni41MCwgICAvLyA2XG5cdDk4Ny43NjcsIDkzMi4zMjgsIDg4MC4wMDAsIDgzMC42MDksIDc4My45OTEsIDczOS45ODksIDY5OC40NTYsIDY1OS4yNTUsIDYyMi4yNTQsIDU4Ny4zMzAsIDU1NC4zNjUsIDUyMy4yNTEsICAgLy8gNVxuXHQ0OTMuODgzLCA0NjYuMTY0LCA0NDAuMDAwLCA0MTUuMzA1LCAzOTEuOTk1LCAzNjkuOTk0LCAzNDkuMjI4LCAzMjkuNjI4LCAzMTEuMTI3LCAyOTMuNjY1LCAyNzcuMTgzLCAyNjEuNjI2LCAgIC8vIDRcblx0MjQ2Ljk0MiwgMjMzLjA4MiwgMjIwLjAwMCwgMjA3LjY1MiwgMTk1Ljk5OCwgMTg0Ljk5NywgMTc0LjYxNCwgMTY0LjgxNCwgMTU1LjU2MywgMTQ2LjgzMiwgMTM4LjU5MSwgMTMwLjgxMywgICAvLyAzXG5cdDEyMy40NzEsIDExNi41NDEsIDExMC4wMDAsIDEwMy44MjYsIDk3Ljk5ODksIDkyLjQ5ODYsIDg3LjMwNzEsIDgyLjQwNjksIDc3Ljc4MTcsIDczLjQxNjIsIDY5LjI5NTcsIDY1LjQwNjQsICAgLy8gMlxuXHQ2MS43MzU0LCA1OC4yNzA1LCA1NS4wMDAwLCA1MS45MTMxLCA0OC45OTk0LCA0Ni4yNDkzLCA0My42NTM1LCA0MS4yMDM0LCAzOC44OTA5LCAzNi43MDgxLCAzNC42NDc4LCAzMi43MDMyLCAgIC8vIDFcblx0MzAuODY3NywgMjkuMTM1MiwgMjcuNTAwMCwgMjUuOTU2NSwgMjQuNDk5NywgMjMuMTI0NywgMjEuODI2OCwgMjAuNjAxNywgMTkuNDQ1NCwgMTguMzU0MCwgMTcuMzIzOSwgMTYuMzUxNl07IC8vIDBcblxubGV0IG5vdGVOYW1lcyA9IFtcIkJcIiwgXCJBI1wiLCBcIkFcIiwgXCJHI1wiLCBcIkdcIiwgXCJGI1wiLCBcIkZcIiwgXCJFXCIsIFwiRCNcIiwgXCJEXCIsIFwiQyNcIiwgXCJDXCJdO1xuXG5mdW5jdGlvbiBlc3RpbWF0ZU5vdGUoZnJlcXVlbmN5KSB7XG5cdGxldCBsZW5ndGggPSBub3RlRnJlcXVlbmNpZXMubGVuZ3RoO1xuXHRsZXQgZnJlcXVlbmN5SW5kZXggPSAwO1xuXHRsZXQgbmV4dENsb3Nlc3RJbmRleCA9IDA7XG5cblx0Ly8gSXRlcmF0ZSB0aHJvdWdoIHRoZSBub3RlIGFycmF5IHRvIGZpbmQgdGhlIGNsb3Nlc3QgaW5kaWNlc1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCAtIDE7IGkrKykge1xuXHRcdGlmIChpID09IDAgJiYgZnJlcXVlbmN5ID4gbm90ZUZyZXF1ZW5jaWVzW2ldKSB7XG5cdFx0XHRmcmVxdWVuY3lJbmRleCA9IDA7XG5cdFx0XHRuZXh0Q2xvc2VzdEluZGV4ID0gMDtcblx0XHRcdGJyZWFrO1xuXHRcdH0gZWxzZSBpZiAobm90ZUZyZXF1ZW5jaWVzW2ldID49IGZyZXF1ZW5jeSAmJiBmcmVxdWVuY3kgPiBub3RlRnJlcXVlbmNpZXNbaSArIDFdKSB7XG5cdFx0XHRmcmVxdWVuY3lJbmRleCA9IChub3RlRnJlcXVlbmNpZXNbaV0gLSBmcmVxdWVuY3kpIDwgKGZyZXF1ZW5jeSAtIG5vdGVGcmVxdWVuY2llc1tpICsgMV0pID8gaSA6IGkgKyAxO1xuXHRcdFx0bmV4dENsb3Nlc3RJbmRleCA9IGZyZXF1ZW5jeUluZGV4ID09IGkgPyBpICsgMSA6IGk7XG5cdFx0XHRicmVhaztcblx0XHR9IGVsc2UgaWYgKGkgPT0gbGVuZ3RoIC0gMikge1xuXHRcdFx0ZnJlcXVlbmN5SW5kZXggPSBsZW5ndGggLSAxO1xuXHRcdFx0bmV4dENsb3Nlc3RJbmRleCA9IGxlbmd0aCAtIDE7XG5cdFx0fVxuXHR9XG5cblx0Ly8gR2V0IHRoZSBuYW1lIG9mIHRoZSBub3RlXG5cdHJldHVybiB7XG5cdFx0a2V5OiBub3RlTmFtZXNbKGZyZXF1ZW5jeUluZGV4KSAlIG5vdGVOYW1lcy5sZW5ndGhdLFxuXHRcdG9jdGF2ZTogOCAtIE1hdGguZmxvb3IoZnJlcXVlbmN5SW5kZXggLyBub3RlTmFtZXMubGVuZ3RoKSxcblx0fTtcbn1cblxuZnVuY3Rpb24gZ2V0RnJlcXVlbmN5Rm9yTm90ZShub3RlX25hbWUsIG5vdGVfb2N0YXZlKSB7XG5cdGxldCBub3RlTmFtZUluZGV4O1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IG5vdGVOYW1lcy5sZW5ndGg7IGkrKykge1xuXHRcdGlmIChrZXlfY29tcGFyaXNvbi5jb21wYXJlS2V5cyhub3RlX25hbWUsIG5vdGVOYW1lc1tpXSkpIHtcblx0XHRcdG5vdGVOYW1lSW5kZXggPSBpO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBub3RlRnJlcXVlbmNpZXNbbm90ZUZyZXF1ZW5jaWVzLmxlbmd0aCAtIDEgLSAobm90ZV9vY3RhdmUgKiBub3RlTmFtZXMubGVuZ3RoKSAtIChub3RlTmFtZXMubGVuZ3RoIC0gbm90ZU5hbWVJbmRleCAtIDEpXVxufVxuXG5mdW5jdGlvbiBnZXROb3RlRnJvbVNhbXBsZXMoYnVmZmVyLCBzYW1wbGVSYXRlKSB7XG5cblx0Ly8gV2UgdXNlIEF1dG9jb3JyZWxhdGlvbiB0byBmaW5kIHRoZSBmdW5kYW1lbnRhbCBmcmVxdWVuY3kuXG5cblx0Ly8gSW4gb3JkZXIgdG8gY29ycmVsYXRlIHRoZSBzaWduYWwgd2l0aCBpdHNlbGYgKGhlbmNlIHRoZSBuYW1lIG9mIHRoZSBhbGdvcml0aG0pLCB3ZSB3aWxsIGNoZWNrIHR3byBwb2ludHMgJ2snIGZyYW1lcyBhd2F5LlxuXHQvLyBUaGUgYXV0b2NvcnJlbGF0aW9uIGluZGV4IHdpbGwgYmUgdGhlIGF2ZXJhZ2Ugb2YgdGhlc2UgcHJvZHVjdHMuIEF0IHRoZSBzYW1lIHRpbWUsIHdlIG5vcm1hbGl6ZSB0aGUgdmFsdWVzLlxuXHQvLyBTb3VyY2U6IGh0dHA6Ly93d3cucGh5Lm10eS5lZHUvfnN1aXRzL2F1dG9jb3JyZWxhdGlvbi5odG1sXG5cdC8vIEFzc3VtaW5nIHRoZSBzYW1wbGUgcmF0ZSBpcyA0ODAwMEh6LCBhICdrJyBlcXVhbCB0byAxMDAwIHdvdWxkIGNvcnJlc3BvbmQgdG8gYSA0OEh6IHNpZ25hbCAoNDgwMDAvMTAwMCA9IDQ4KSxcblx0Ly8gd2hpbGUgYSAnaycgZXF1YWwgdG8gOCB3b3VsZCBjb3JyZXNwb25kIHRvIGEgNjAwMEh6IG9uZSwgd2hpY2ggaXMgZW5vdWdoIHRvIGNvdmVyIG1vc3QgKGlmIG5vdCBhbGwpXG5cdC8vIHRoZSBub3RlcyB3ZSBoYXZlIGluIHRoZSBub3Rlcy5qc29uIGZpbGUuXG5cblx0dmFyIG4gPSAxMDI0LCBiZXN0UiA9IDAsIGJlc3RLID0gLTE7XG5cdGZvcih2YXIgayA9IDg7IGsgPD0gMTAwMDsgaysrKXtcblxuXHRcdHZhciBzdW0gPSAwO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcblx0XHRcdHN1bSArPSAoKGJ1ZmZlcltpXSAtIDEyOCkgLyAxMjgpICogKChidWZmZXJbaSArIGtdIC0gMTI4KSAvIDEyOCk7XG5cdFx0fVxuXG5cdFx0dmFyIHIgPSBzdW0gLyAobiArIGspO1xuXG5cdFx0aWYociA+IGJlc3RSKXtcblx0XHRcdGJlc3RSID0gcjtcblx0XHRcdGJlc3RLID0gaztcblx0XHR9XG5cblx0XHRpZihyID4gMC45KSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRpZihiZXN0UiA+IDAuMDAyNSkge1xuXHRcdC8vIFRoZSBwZXJpb2QgKGluIGZyYW1lcykgb2YgdGhlIGZ1bmRhbWVudGFsIGZyZXF1ZW5jeSBpcyAnYmVzdEsnLiBHZXR0aW5nIHRoZSBmcmVxdWVuY3kgZnJvbSB0aGVyZSBpcyB0cml2aWFsLlxuXHRcdHZhciBmdW5kYW1lbnRhbEZyZXEgPSBzYW1wbGVSYXRlIC8gYmVzdEs7XG5cdFx0cmV0dXJuIGVzdGltYXRlTm90ZShmdW5kYW1lbnRhbEZyZXEpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIFdlIGhhdmVuJ3QgZm91bmQgYSBnb29kIGNvcnJlbGF0aW9uXG5cdFx0cmV0dXJuIFtdO1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGdldEZyZXF1ZW5jeUZvck5vdGU6IGdldEZyZXF1ZW5jeUZvck5vdGUsXG5cdGdldE5vdGVGcm9tU2FtcGxlczogZ2V0Tm90ZUZyb21TYW1wbGVzLFxuXHRlc3RpbWF0ZU5vdGU6IGVzdGltYXRlTm90ZSxcbn1cbiIsImltcG9ydCBub3RlX2RldGVjdGlvbiBmcm9tICcuL25vdGVfZGV0ZWN0aW9uJ1xuaW1wb3J0IEluc3RydW1lbnRzIGZyb20gJy4vaW5zdHJ1bWVudHMnXG5pbXBvcnQgS2V5U2lnbmF0dXJlcyBmcm9tICcuL2tleV9zaWduYXR1cmVzJ1xuaW1wb3J0IEF1ZGlvQ29udGV4dCBmcm9tICcuL2F1ZGlvX2NvbnRleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvbmdQbGF5ZXIge1xuXHRjb25zdHJ1Y3Rvcihub3RlcywgaW5zdHJ1bWVudCwgYmVhdHNfcGVyX21pbnV0ZSwgYmVhdHNfcGVyX21lYXN1cmUpIHtcblx0XHR0aGlzLmF1ZGlvQ3R4ID0gQXVkaW9Db250ZXh0LmdldEF1ZGlvQ29udGV4dCgpXG5cdFx0dGhpcy50aWNrID0gbnVsbDtcblx0XHR0aGlzLnRpY2tWb2x1bWUgPSBudWxsO1xuXHRcdHRoaXMuc291bmRIeiA9IDEwMDA7XG5cdFx0dGhpcy5zY2hlZHVsZWROb3RlcyA9IHRoaXMuYXBwZW5kVGltaW5nT2Zmc2V0KG5vdGVzLCBiZWF0c19wZXJfbWVhc3VyZSwgYmVhdHNfcGVyX21pbnV0ZSkuZmxhdCgpO1xuXHRcdHRoaXMuaW5zdHJ1bWVudCA9IGluc3RydW1lbnQ7XG5cdFx0Ly90aGlzLnNldENvbnRyb2xsZXIoKVxuXHRcdHRoaXMuaW5pdEF1ZGlvKCk7XG5cdH1cblxuXHRpbml0QXVkaW8oKSB7XG5cdFx0dGhpcy50aWNrID0gdGhpcy5hdWRpb0N0eC5jcmVhdGVPc2NpbGxhdG9yKCk7XG5cdFx0dGhpcy50aWNrVm9sdW1lID0gdGhpcy5hdWRpb0N0eC5jcmVhdGVHYWluKCk7XG5cblx0XHR0aGlzLnRpY2sudHlwZSA9ICdzcXVhcmUnO1xuXHRcdHRoaXMudGljay5mcmVxdWVuY3kudmFsdWUgPSB0aGlzLnNvdW5kSHo7XG5cdFx0dGhpcy50aWNrVm9sdW1lLmdhaW4udmFsdWUgPSAwO1xuXG5cdFx0dGhpcy50aWNrLmNvbm5lY3QodGhpcy50aWNrVm9sdW1lKTtcblx0XHQvL3RoaXMudGlja1ZvbHVtZS5jb25uZWN0KHRoaXMuYXVkaW9DdHguZGVzdGluYXRpb24pO1xuXHRcdHRoaXMudGljay5zdGFydCgwKTsgIC8vIE5vIG9mZnNldCwgc3RhcnQgaW1tZWRpYXRlbHkuXG5cdH1cblxuXHRzdGFydCgpIHtcblxuXHRcdGxldCBub3cgPSB0aGlzLmF1ZGlvQ3R4LmN1cnJlbnRUaW1lO1xuXG5cdFx0Ly8gU2NoZWR1bGUgYWxsIHRoZSBjbGlja3MgYWhlYWQuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNjaGVkdWxlZE5vdGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgbm90ZSA9IHRoaXMuc2NoZWR1bGVkTm90ZXNbaV0ubm90ZTtcblx0XHRcdGlmIChub3RlLmF0dHJzLnR5cGUgIT09ICdHaG9zdE5vdGUnKSB7XG5cdFx0XHRcdGxldCBwcm9wcyA9IG5vdGUuZ2V0S2V5UHJvcHMoKVswXTtcblx0XHRcdFx0bGV0IGtleSA9IHByb3BzLmtleTtcblx0XHRcdFx0bGV0IG9jdGF2ZSA9IHByb3BzLm9jdGF2ZTtcblx0XHRcdFx0bGV0IG9mZnNldE5vdGUgPSBLZXlTaWduYXR1cmVzLmdldE9mZnNldE5vdGUoa2V5LCBvY3RhdmUsICAwIC0gSW5zdHJ1bWVudHMuZ2V0SW5zdHJ1bWVudEtleU9mZnNldCh0aGlzLmluc3RydW1lbnQpKTtcblx0XHRcdFx0bGV0IGZyZXFlbmN5ID0gbm90ZV9kZXRlY3Rpb24uZ2V0RnJlcXVlbmN5Rm9yTm90ZShvZmZzZXROb3RlLm5hbWUsIG9mZnNldE5vdGUub2N0YXZlKTtcblx0XHRcdFx0dGhpcy5wbGF5Tm90ZUF0VGltZShmcmVxZW5jeSwgbm93ICsgdGhpcy5zY2hlZHVsZWROb3Rlc1tpXS50aW1pbmdfb2Zmc2V0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwbGF5Tm90ZUF0VGltZShmcmVxdWVuY3ksIHRpbWUpIHtcblx0XHQvLyBTaWxlbmNlIHRoZSBjbGljay5cblx0XHR0aGlzLnRpY2suZnJlcXVlbmN5LmNhbmNlbFNjaGVkdWxlZFZhbHVlcyh0aW1lKTtcblx0XHR0aGlzLnRpY2suZnJlcXVlbmN5LnNldFZhbHVlQXRUaW1lKGZyZXF1ZW5jeSwgdGltZSk7XG5cdFx0dGhpcy50aWNrVm9sdW1lLmdhaW4uY2FuY2VsU2NoZWR1bGVkVmFsdWVzKHRpbWUpO1xuXHRcdHRoaXMudGlja1ZvbHVtZS5nYWluLnNldFZhbHVlQXRUaW1lKDAsIHRpbWUpO1xuXG5cdFx0Ly8gQXVkaWJsZSBjbGljayBzb3VuZC5cblx0XHR0aGlzLnRpY2tWb2x1bWUuZ2Fpbi5saW5lYXJSYW1wVG9WYWx1ZUF0VGltZSgxLCB0aW1lICsgLjAwMSk7XG5cdFx0dGhpcy50aWNrVm9sdW1lLmdhaW4ubGluZWFyUmFtcFRvVmFsdWVBdFRpbWUoMCwgdGltZSArIC4wMDEgKyAuMik7XG5cdH1cblxuXHRzdG9wKCkge1xuXHRcdHRoaXMudGlja1ZvbHVtZS5nYWluLnZhbHVlID0gMDtcblx0fVxuXG5cdHBhdXNlKCkge1xuXHRcdHRoaXMuYXVkaW9DdHguc3VzcGVuZCgpO1xuXHR9XG5cblx0cmVzdW1lKCkge1xuXHRcdHRoaXMuYXVkaW9DdHgucmVzdW1lKCk7XG5cdH1cblxuXHRzZXRDb250cm9sbGVyKCkge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb25nLXBsYXllci1jb250cm9sbGVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcblx0XHRcdFx0dGhpcy50aWNrVm9sdW1lLmNvbm5lY3QodGhpcy5hdWRpb0N0eC5kZXN0aW5hdGlvbik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnRpY2tWb2x1bWUuZGlzY29ubmVjdCh0aGlzLmF1ZGlvQ3R4LmRlc3RpbmF0aW9uKTtcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0YXBwZW5kVGltaW5nT2Zmc2V0KGJhcnMsIGJlYXRzX3Blcl9tZWFzdXJlLCBiZWF0c19wZXJfbWludXRlKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBiYXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgbm90ZXMgPSBiYXJzW2ldO1xuXHRcdFx0aWYgKG5vdGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGxldCBiYXJfdGltaW5nX29mZnNldCA9IGkgKiAoYmVhdHNfcGVyX21lYXN1cmUgLyBiZWF0c19wZXJfbWludXRlKSAqIDYwO1xuXHRcdFx0YmFyc1tpXVswXVsndGltaW5nX29mZnNldCddID0gYmFyX3RpbWluZ19vZmZzZXQ7XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IG5vdGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGlmIChqICE9PSBub3Rlcy5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0bGV0IHRpbWluZ19vZmZzZXQgPSBiYXJfdGltaW5nX29mZnNldCArIG5vdGVzW2ogKyAxXS5wZXJjZW50YWdlICogKGJlYXRzX3Blcl9tZWFzdXJlIC8gYmVhdHNfcGVyX21pbnV0ZSkgKiA2MDtcblx0XHRcdFx0XHRiYXJzW2ldW2ogKyAxXVsndGltaW5nX29mZnNldCddID0gdGltaW5nX29mZnNldDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gYmFycztcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==