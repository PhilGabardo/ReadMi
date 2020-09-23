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
/******/ 	return __webpack_require__(__webpack_require__.s = "./web/assets/js/note_hinter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./web/assets/js/draw_keyboard.js":
/*!****************************************!*\
  !*** ./web/assets/js/draw_keyboard.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyBoardDrawer; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var KeyBoardDrawer =
/*#__PURE__*/
function () {
  function KeyBoardDrawer(canvas) {
    _classCallCheck(this, KeyBoardDrawer);

    this.ctx = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;
  }

  _createClass(KeyBoardDrawer, [{
    key: "init",
    value: function init() {
      for (var i = 0; i < 52; i++) {
        this.drawWhiteKey(i, false);
      }

      this.drawBlackKey(0, false); // now draw all the rest of the black keys...
      // loop through all 7 octaves

      var numOctaves = 7;
      var curWhiteNoteIndex = 2;

      for (var octave = 0; octave < numOctaves; octave++) {
        // and draw 5 black notes per octave...
        for (var _i = 0; _i < 5; _i++) {
          this.drawBlackKey(curWhiteNoteIndex, false);
          if (_i == 1 || _i == 4) curWhiteNoteIndex += 2;else curWhiteNoteIndex += 1;
        }
      }
    }
  }, {
    key: "drawRectWithBorder",
    value: function drawRectWithBorder(X, Y, Width, Height, Color1, Color2) {
      //draw border
      this.ctx.fillStyle = Color1;
      this.ctx.fillRect(X, Y, Width, Height); //draw inside

      this.ctx.fillStyle = Color2;
      this.ctx.fillRect(X + 1, Y + 1, Width - 2, Height - 2);
    }
  }, {
    key: "drawBlackKey",
    value: function drawBlackKey(whiteKeyIndex) {
      var shouldBeRed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!shouldBeRed) {
        var C1 = "rgb(0,0,0)"; // black

        var C2 = "rgb(50,50,50)"; // ??

        this.drawRectWithBorder((whiteKeyIndex + 1) * (this.width / 52) - this.width / 52 * 0.75 / 2, 0, this.width / 52 * 0.75, this.height * 0.66, C1, C2);
      } else {
        var _C = "rgb(0,0,0)"; // black

        var _C2 = "rgb(255,0,0)"; // red

        this.drawRectWithBorder((whiteKeyIndex + 1) * (this.width / 52) - this.width / 52 * 0.75 / 2, 0, this.width / 52 * 0.75, this.height * 0.66, _C, _C2);
      }
    }
  }, {
    key: "drawWhiteKey",
    value: function drawWhiteKey(WhiteKeyIndex) {
      var shouldBeRed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!shouldBeRed) {
        var C1 = "rgb(0,0,0)"; // lback

        var C2 = "rgb(255,255,255)"; // white

        this.drawRectWithBorder(WhiteKeyIndex * (this.width / 52), 0, this.width / 52, this.height, C1, C2);
      } else {
        var _C3 = "rgb(0,0,0)"; // black

        var _C4 = "rgb(255,0,0)"; // red

        this.drawRectWithBorder(WhiteKeyIndex * (this.width / 52), 0, this.width / 52, this.height, _C3, _C4);
      }
    }
  }, {
    key: "drawRedKey",
    value: function drawRedKey(index, undo) {
      var beforeKeyInfo = this.absoluteToKeyInfo(index - 1);
      var afterKeyInfo = this.absoluteToKeyInfo(index + 1);
      var keyInfo = this.absoluteToKeyInfo(index + 1);
      var keyLookup = this.absoluteToKeyInfo(index);

      if (keyLookup.is_black) {
        if (beforeKeyInfo.is_black) {
          this.drawBlackKey(beforeKeyInfo.white_index, false);
        }

        if (afterKeyInfo.is_black) {
          this.drawBlackKey(afterKeyInfo.white_index, false);
        }

        this.drawBlackKey(keyLookup.white_index, !undo);
      } else {
        this.drawWhiteKey(keyLookup.white_index, !undo);

        if (beforeKeyInfo.is_black) {
          this.drawBlackKey(beforeKeyInfo.white_index, false);
        }

        if (afterKeyInfo.is_black) {
          this.drawBlackKey(afterKeyInfo.white_index, false);
        }
      }
    }
  }, {
    key: "undoDrawRedKey",
    value: function undoDrawRedKey(index) {
      this._undoDrawRedKey(index - 1);

      this._undoDrawRedKey(index);

      this._undoDrawRedKey(index + 1);
    }
  }, {
    key: "_undoDrawRedKey",
    value: function _undoDrawRedKey(index) {
      var keyLookup = this.absoluteToKeyInfo(index);

      if (keyLookup.is_black) {
        this.drawBlackKey(keyLookup.white_index, false);
      } else {
        this.drawWhiteKey(keyLookup.white_index, false);
      }
    }
  }, {
    key: "absoluteToKeyInfo",
    value: function absoluteToKeyInfo(AbsoluteNoteNum) {
      var KeyLookupTable = new Array(88);
      KeyLookupTable[0] = {
        is_black: false,
        white_index: 0
      }; // a

      KeyLookupTable[1] = {
        is_black: true,
        white_index: 0
      }; // a#

      KeyLookupTable[2] = {
        is_black: false,
        white_index: 1
      }; // b

      var base = 3;
      var NumOctaves = 8;

      for (var counter = 0; counter < NumOctaves; counter++) {
        var octave_offset = 7 * counter;
        KeyLookupTable[base + 0] = {
          is_black: false,
          white_index: octave_offset + 2
        }; // c

        KeyLookupTable[base + 1] = {
          is_black: true,
          white_index: octave_offset + 2
        }; // c#

        KeyLookupTable[base + 2] = {
          is_black: false,
          white_index: octave_offset + 3
        }; // d

        KeyLookupTable[base + 3] = {
          is_black: true,
          white_index: octave_offset + 3
        }; // d#

        KeyLookupTable[base + 4] = {
          is_black: false,
          white_index: octave_offset + 4
        }; // e

        KeyLookupTable[base + 5] = {
          is_black: false,
          white_index: octave_offset + 5
        }; // f

        KeyLookupTable[base + 6] = {
          is_black: true,
          white_index: octave_offset + 5
        }; // f#

        KeyLookupTable[base + 7] = {
          is_black: false,
          white_index: octave_offset + 6
        }; // g

        KeyLookupTable[base + 8] = {
          is_black: true,
          white_index: octave_offset + 6
        }; // g#

        KeyLookupTable[base + 9] = {
          is_black: false,
          white_index: octave_offset + 7
        }; // a

        KeyLookupTable[base + 10] = {
          is_black: true,
          white_index: octave_offset + 7
        }; // a#

        KeyLookupTable[base + 11] = {
          is_black: false,
          white_index: octave_offset + 8
        }; // b

        base += 12;
      }

      return KeyLookupTable[AbsoluteNoteNum];
    }
  }]);

  return KeyBoardDrawer;
}();
/*
// canvas 		- HTML5 canvas element
// RedKeyArray  - array of keys to color red (0 = low a, 87 = high c, proceeding chromatically)
function DrawKeyboard(canvas, RedKeyArray) {

	// general characteristics of a piano

	var TOTAL_KEYS = 88;
	var NUM_WHITE_KEYS = 52;
	var NUM_BLACK_KEYS = TOTAL_KEYS - NUM_WHITE_KEYS;

	var ctx = canvas.getContext("2d");

	var X_BORDER = 0;
	var Y_BORDER = 0;

	var width = canvas.width - (X_BORDER * 2);
	var height = canvas.height - (Y_BORDER * 2);

	var WHITE_KEY_WIDTH = (width / NUM_WHITE_KEYS);
	var WHITE_KEY_HEIGHT = height;

	var BLACK_KEY_WIDTH = WHITE_KEY_WIDTH * .75
	var BLACK_KEY_HEIGHT = height * .66

	function DrawRectWithBorder(X, Y, Width, Height, Color1, Color2) {

		//draw border
		ctx.fillStyle = Color1;
		ctx.fillRect(X, Y, Width, Height);

		//draw inside
		ctx.fillStyle = Color2;
		ctx.fillRect(X + 1, Y + 1, Width - 2, Height - 2);

	}

	// draws a back key, based on whiteKeyIndex, where 0 <= WhiteKeyIndex < 52
	function drawBlackKey(whiteKeyIndex, shouldBeRed = false) {

		if (!shouldBeRed) {

			let C1 = "rgb(0,0,0)";			// black
			let C2 = "rgb(50,50,50)";		// ??

			DrawRectWithBorder(X_BORDER + ((whiteKeyIndex + 1) * WHITE_KEY_WIDTH) - (BLACK_KEY_WIDTH / 2), Y_BORDER, BLACK_KEY_WIDTH, BLACK_KEY_HEIGHT, C1, C2);

		}
		else {

			let C1 = "rgb(0,0,0)";			// black
			let C2 = "rgb(255,0,0)";		// red

			DrawRectWithBorder(X_BORDER + ((whiteKeyIndex + 1) * WHITE_KEY_WIDTH) - (BLACK_KEY_WIDTH / 2), Y_BORDER, BLACK_KEY_WIDTH, BLACK_KEY_HEIGHT, C1, C2);

		}

	}

	function DrawWhiteKey(WhiteKeyIndex, shouldBeRed = false) {

		if (!shouldBeRed) {

			let C1 = "rgb(0,0,0)";			// lback
			let C2 = "rgb(255,255,255)";	// white

			DrawRectWithBorder(X_BORDER + (WhiteKeyIndex * WHITE_KEY_WIDTH), Y_BORDER, WHITE_KEY_WIDTH, height, C1, C2);

		} else {

			let C1 = "rgb(0,0,0)";			// black
			let C2 = "rgb(255,0,0)";		// red

			DrawRectWithBorder(X_BORDER + (WhiteKeyIndex * WHITE_KEY_WIDTH), Y_BORDER, WHITE_KEY_WIDTH, height, C1, C2);

		}
	}

	function keyType(isBlack, White_Index) {
		this.isBlack = isBlack;
		this.White_Index = White_Index
	}

	function AbsoluteToKeyInfo(AbsoluteNoteNum) {

		var KeyLookupTable = new Array(TOTAL_KEYS);

		KeyLookupTable[0] = new keyType(false, 0);			// a
		KeyLookupTable[1] = new keyType(true, 0);			// a#
		KeyLookupTable[2] = new keyType(false, 1);			// b
		let base = 3;

		let NumOctaves = 8
		for (let counter = 0; counter < NumOctaves; counter++) {
			let octave_offset = 7 * counter;

			KeyLookupTable[base + 0] = new keyType(false, octave_offset + 2); // c
			KeyLookupTable[base + 1] = new keyType(true, octave_offset + 2); // c#
			KeyLookupTable[base + 2] = new keyType(false, octave_offset + 3); // d
			KeyLookupTable[base + 3] = new keyType(true, octave_offset + 3); // d#
			KeyLookupTable[base + 4] = new keyType(false, octave_offset + 4); // e
			KeyLookupTable[base + 5] = new keyType(false, octave_offset + 5); // f
			KeyLookupTable[base + 6] = new keyType(true, octave_offset + 5); // f#
			KeyLookupTable[base + 7] = new keyType(false, octave_offset + 6); // g
			KeyLookupTable[base + 8] = new keyType(true, octave_offset + 6); // g#
			KeyLookupTable[base + 9] = new keyType(false, octave_offset + 7); // a
			KeyLookupTable[base + 10] = new keyType(true, octave_offset + 7)  // a#
			KeyLookupTable[base + 11] = new keyType(false, octave_offset + 8); // b

			base += 12;
		}

		return KeyLookupTable[AbsoluteNoteNum];
	}


	// just draw in all the white keys to begin with...
	for (let i = 0; i < NUM_WHITE_KEYS; i++) {
		DrawWhiteKey(i, false);
	}


	// now draw specially white keys that need to be red...
	// just loop through all the RedKeyArray
	for (let index = 0; index <= TOTAL_KEYS; index++) {
		// and if we find any white keys that are supposed to be red, then draw them in red...
		if (RedKeyArray.includes(index)) {
			let KeyLookup = AbsoluteToKeyInfo(index);
			if (!KeyLookup.isBlack)
				DrawWhiteKey(KeyLookup.White_Index, true);
		}
	}

	// draw in lowest a# manually (making sure to draw it red if it should be)
	let LowestShouldBeRed = RedKeyArray.includes(1);
	drawBlackKey(0, LowestShouldBeRed);

	// now draw all the rest of the black keys...
	// loop through all 7 octaves
	let numOctaves = 7;
	let curWhiteNoteIndex = 2;

	for (let octave = 0; octave < numOctaves; octave++) {
		// and draw 5 black notes per octave...
		for (let i = 0; i < 5; i++) {
			drawBlackKey(curWhiteNoteIndex, false);
			if (i == 1 || i == 4)
				curWhiteNoteIndex += 2;
			else
				curWhiteNoteIndex += 1;
		}
	}


	// now draw specially black keys that need to be red...
	// just loop through all the RedKeyArray
	for (let index = 0; index <= 88; index++) {
		// and if we find any black keys that are supposed to be red, then draw them in red...
		if (RedKeyArray.includes(index)) {
			let KeyLookup = AbsoluteToKeyInfo(index);
			if (KeyLookup.isBlack)
				drawBlackKey(KeyLookup.White_Index, true);
		}
	}
}

export default {
	drawKeyboard: DrawKeyboard
}
*/




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

/***/ }),

/***/ "./web/assets/js/note_hinter.js":
/*!**************************************!*\
  !*** ./web/assets/js/note_hinter.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoteHinter; });
/* harmony import */ var _instruments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instruments */ "./web/assets/js/instruments.js");
/* harmony import */ var _draw_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw_keyboard */ "./web/assets/js/draw_keyboard.js");
/* harmony import */ var _note_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note_detection */ "./web/assets/js/note_detection.js");
/* harmony import */ var _timing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timing */ "./web/assets/js/timing.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var NoteHinter =
/*#__PURE__*/
function () {
  function NoteHinter(beats_per_minute, beats_per_measure, vf_bars) {
    _classCallCheck(this, NoteHinter);

    this.canvas = document.getElementById("canvas");
    this.canvas.style.display = "block";
    var boo = document.getElementById("boo");
    this.canvas.style.left = boo.offsetWidth / 2 - this.canvas.offsetWidth / 2 + "px";
    this.draw_keyboard = new _draw_keyboard__WEBPACK_IMPORTED_MODULE_1__["default"](canvas);
    this.draw_keyboard.init();
    this.beats_per_minute = beats_per_minute;
    this.beats_per_measure = beats_per_measure;
    this.vf_bars = vf_bars;
  }

  _createClass(NoteHinter, [{
    key: "start",
    value: function start() {
      this.func = setInterval(this.draw, 10, this);
    }
  }, {
    key: "pause",
    value: function pause() {
      window.clearInterval(this.func);
    }
  }, {
    key: "draw",
    value: function draw(note_hinter) {
      var timeInMs = _timing__WEBPACK_IMPORTED_MODULE_3__["default"].getTimeSinceStart();
      var bps = note_hinter.beats_per_minute / 60;
      var beatsPassed = timeInMs * bps / 1000;
      var stavesPassed = Math.floor(beatsPassed / note_hinter.beats_per_measure);
      var percentageThroughStave = beatsPassed % note_hinter.beats_per_measure / note_hinter.beats_per_measure;
      var offset = note_hinter.beats_per_minute / note_hinter.beats_per_measure / 20 * 0.08;
      var min_offset = note_hinter.beats_per_minute / note_hinter.beats_per_measure / 20 * 0.04;
      var maxOffsettedPercentageThroughStave = percentageThroughStave - min_offset;
      var offsettedPercentageThroughStave = percentageThroughStave - offset;
      var offsettedStavesPassed = stavesPassed;

      if (offsettedPercentageThroughStave < 0) {
        if (stavesPassed === 0) {
          offsettedStavesPassed = 0;
        } else {
          offsettedStavesPassed -= 1;
          maxOffsettedPercentageThroughStave = maxOffsettedPercentageThroughStave + 1;
        }
      }

      var note = null;

      if (note_hinter.vf_bars[offsettedStavesPassed][0] && note_hinter.vf_bars[offsettedStavesPassed][0].percentage < maxOffsettedPercentageThroughStave) {
        note = note_hinter.vf_bars[offsettedStavesPassed][0].note;
        note_hinter.vf_bars[offsettedStavesPassed].shift();
      }

      if (note && note.attrs.type !== 'GhostNote') {
        var props = note.getKeyProps()[0];
        var key = props.key;
        var octave = props.octave;
        var index = _note_detection__WEBPACK_IMPORTED_MODULE_2__["default"].getIndexForNote(key, octave);
        note_hinter.draw_keyboard.drawRedKey(index - 9, true);
        note_hinter.hintNextNote(offsettedStavesPassed);
      }
    }
  }, {
    key: "hintNextNote",
    value: function hintNextNote(offsettedStavesPassed) {
      for (var i = offsettedStavesPassed; i < this.vf_bars.length; i++) {
        for (var j = 0; j < this.vf_bars[i].length; j++) {
          var note = this.vf_bars[i][j].note;

          if (note.attrs.type !== 'GhostNote') {
            var props = note.getKeyProps()[0];
            var key = props.key;
            var octave = props.octave;
            var index = _note_detection__WEBPACK_IMPORTED_MODULE_2__["default"].getIndexForNote(key, octave);
            console.log(index);
            this.draw_keyboard.drawRedKey(index - 9, false);
            return;
          }
        }
      }
    }
  }, {
    key: "resume",
    value: function resume() {
      this.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.canvas.style.display = "none";
    }
  }]);

  return NoteHinter;
}();



/***/ }),

/***/ "./web/assets/js/timing.js":
/*!*********************************!*\
  !*** ./web/assets/js/timing.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timing; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Timing =
/*#__PURE__*/
function () {
  function Timing() {
    _classCallCheck(this, Timing);
  }

  _createClass(Timing, null, [{
    key: "startTiming",
    value: function startTiming() {
      Timing.startTime = Date.now();
      Timing.pauseDelay = 0;
    }
  }, {
    key: "pause",
    value: function pause() {
      Timing.pauseStart = Date.now();
    }
  }, {
    key: "resume",
    value: function resume() {
      Timing.pauseDelay += Date.now() - Timing.pauseStart;
    }
  }, {
    key: "getPauseDelay",
    value: function getPauseDelay() {
      return Timing.pauseDelay;
    }
  }, {
    key: "getTimeSinceStart",
    value: function getTimeSinceStart() {
      return Date.now() - Timing.startTime - this.pauseDelay;
    }
  }]);

  return Timing;
}();



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9kcmF3X2tleWJvYXJkLmpzIiwid2VicGFjazovLy8uL3dlYi9hc3NldHMvanMvaW5zdHJ1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9rZXlfY29tcGFyaXNvbi5qcyIsIndlYnBhY2s6Ly8vLi93ZWIvYXNzZXRzL2pzL25vdGVfZGV0ZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3dlYi9hc3NldHMvanMvbm90ZV9oaW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy90aW1pbmcuanMiXSwibmFtZXMiOlsiS2V5Qm9hcmREcmF3ZXIiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJpIiwiZHJhd1doaXRlS2V5IiwiZHJhd0JsYWNrS2V5IiwibnVtT2N0YXZlcyIsImN1cldoaXRlTm90ZUluZGV4Iiwib2N0YXZlIiwiWCIsIlkiLCJXaWR0aCIsIkhlaWdodCIsIkNvbG9yMSIsIkNvbG9yMiIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwid2hpdGVLZXlJbmRleCIsInNob3VsZEJlUmVkIiwiQzEiLCJDMiIsImRyYXdSZWN0V2l0aEJvcmRlciIsIldoaXRlS2V5SW5kZXgiLCJpbmRleCIsInVuZG8iLCJiZWZvcmVLZXlJbmZvIiwiYWJzb2x1dGVUb0tleUluZm8iLCJhZnRlcktleUluZm8iLCJrZXlJbmZvIiwia2V5TG9va3VwIiwiaXNfYmxhY2siLCJ3aGl0ZV9pbmRleCIsIl91bmRvRHJhd1JlZEtleSIsIkFic29sdXRlTm90ZU51bSIsIktleUxvb2t1cFRhYmxlIiwiQXJyYXkiLCJiYXNlIiwiTnVtT2N0YXZlcyIsImNvdW50ZXIiLCJvY3RhdmVfb2Zmc2V0IiwiZ2V0SW5zdHJ1bWVudEtleU9mZnNldCIsImluc3RydW1lbnQiLCJrZXlfb2Zmc2V0cyIsImdldEluc3RydW1lbnRGaW5nZXJpbmciLCJmaW5nZXJpbmdfbWFwIiwiY29tcGFyZUtleXMiLCJub3RlMSIsIm5vdGUyIiwia2V5YWxpYXNlcyIsInVuZGVmaW5lZCIsInRvTG93ZXJDYXNlIiwiZ2V0S2V5QXNGbGF0Iiwia2V5IiwiZmxhdF9tYXAiLCJub3RlRnJlcXVlbmNpZXMiLCJub3RlTmFtZXMiLCJub3RlTmFtZUluZGV4TWFwIiwiZXN0aW1hdGVOb3RlIiwiZnJlcXVlbmN5IiwibGVuZ3RoIiwiZnJlcXVlbmN5SW5kZXgiLCJuZXh0Q2xvc2VzdEluZGV4IiwiTWF0aCIsImZsb29yIiwiZ2V0RnJlcXVlbmN5Rm9yTm90ZSIsIm5vdGVfbmFtZSIsIm5vdGVfb2N0YXZlIiwibm90ZU5hbWVJbmRleCIsImtleV9jb21wYXJpc29uIiwiZ2V0SW5kZXhGb3JOb3RlIiwiY29uc29sZSIsImxvZyIsImdldE5vdGVGcm9tU2FtcGxlcyIsImJ1ZmZlciIsInNhbXBsZVJhdGUiLCJuIiwiYmVzdFIiLCJiZXN0SyIsImsiLCJzdW0iLCJyIiwiZnVuZGFtZW50YWxGcmVxIiwiTm90ZUhpbnRlciIsImJlYXRzX3Blcl9taW51dGUiLCJiZWF0c19wZXJfbWVhc3VyZSIsInZmX2JhcnMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5IiwiYm9vIiwibGVmdCIsIm9mZnNldFdpZHRoIiwiZHJhd19rZXlib2FyZCIsIkRyYXdLZXlib2FyZCIsImluaXQiLCJmdW5jIiwic2V0SW50ZXJ2YWwiLCJkcmF3Iiwid2luZG93IiwiY2xlYXJJbnRlcnZhbCIsIm5vdGVfaGludGVyIiwidGltZUluTXMiLCJUaW1pbmciLCJnZXRUaW1lU2luY2VTdGFydCIsImJwcyIsImJlYXRzUGFzc2VkIiwic3RhdmVzUGFzc2VkIiwicGVyY2VudGFnZVRocm91Z2hTdGF2ZSIsIm9mZnNldCIsIm1pbl9vZmZzZXQiLCJtYXhPZmZzZXR0ZWRQZXJjZW50YWdlVGhyb3VnaFN0YXZlIiwib2Zmc2V0dGVkUGVyY2VudGFnZVRocm91Z2hTdGF2ZSIsIm9mZnNldHRlZFN0YXZlc1Bhc3NlZCIsIm5vdGUiLCJwZXJjZW50YWdlIiwic2hpZnQiLCJhdHRycyIsInR5cGUiLCJwcm9wcyIsImdldEtleVByb3BzIiwiTm90ZURldGVjdGlvbiIsImRyYXdSZWRLZXkiLCJoaW50TmV4dE5vdGUiLCJqIiwic3RhcnQiLCJzdGFydFRpbWUiLCJEYXRlIiwibm93IiwicGF1c2VEZWxheSIsInBhdXNlU3RhcnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2xGcUJBLGM7OztBQUdwQiwwQkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNuQixTQUFLQyxHQUFMLEdBQVdELE1BQU0sQ0FBQ0UsVUFBUCxDQUFrQixJQUFsQixDQUFYO0FBQ0EsU0FBS0MsS0FBTCxHQUFhSCxNQUFNLENBQUNHLEtBQXBCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjSixNQUFNLENBQUNJLE1BQXJCO0FBQ0E7Ozs7MkJB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QWdDLEtBQUtHLFVBQTVDO0FBQ0EiLCJmaWxlIjoibm90ZV9oaW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93ZWIvYXNzZXRzL2pzL25vdGVfaGludGVyLmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5Qm9hcmREcmF3ZXIge1xuXG5cblx0Y29uc3RydWN0b3IoY2FudmFzKSB7XG5cdFx0dGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRcdHRoaXMud2lkdGggPSBjYW52YXMud2lkdGg7XG5cdFx0dGhpcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuXHR9XG5cblx0aW5pdCgpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDUyOyBpKyspIHtcblx0XHRcdHRoaXMuZHJhd1doaXRlS2V5KGksIGZhbHNlKTtcblx0XHR9XG5cblx0XHR0aGlzLmRyYXdCbGFja0tleSgwLCBmYWxzZSk7XG5cblx0XHQvLyBub3cgZHJhdyBhbGwgdGhlIHJlc3Qgb2YgdGhlIGJsYWNrIGtleXMuLi5cblx0XHQvLyBsb29wIHRocm91Z2ggYWxsIDcgb2N0YXZlc1xuXHRcdGxldCBudW1PY3RhdmVzID0gNztcblx0XHRsZXQgY3VyV2hpdGVOb3RlSW5kZXggPSAyO1xuXG5cdFx0Zm9yIChsZXQgb2N0YXZlID0gMDsgb2N0YXZlIDwgbnVtT2N0YXZlczsgb2N0YXZlKyspIHtcblx0XHRcdC8vIGFuZCBkcmF3IDUgYmxhY2sgbm90ZXMgcGVyIG9jdGF2ZS4uLlxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcblx0XHRcdFx0dGhpcy5kcmF3QmxhY2tLZXkoY3VyV2hpdGVOb3RlSW5kZXgsIGZhbHNlKTtcblx0XHRcdFx0aWYgKGkgPT0gMSB8fCBpID09IDQpXG5cdFx0XHRcdFx0Y3VyV2hpdGVOb3RlSW5kZXggKz0gMjtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGN1cldoaXRlTm90ZUluZGV4ICs9IDE7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZHJhd1JlY3RXaXRoQm9yZGVyKFgsIFksIFdpZHRoLCBIZWlnaHQsIENvbG9yMSwgQ29sb3IyKSB7XG5cblx0XHQvL2RyYXcgYm9yZGVyXG5cdFx0dGhpcy5jdHguZmlsbFN0eWxlID0gQ29sb3IxO1xuXHRcdHRoaXMuY3R4LmZpbGxSZWN0KFgsIFksIFdpZHRoLCBIZWlnaHQpO1xuXG5cdFx0Ly9kcmF3IGluc2lkZVxuXHRcdHRoaXMuY3R4LmZpbGxTdHlsZSA9IENvbG9yMjtcblx0XHR0aGlzLmN0eC5maWxsUmVjdChYICsgMSwgWSArIDEsIFdpZHRoIC0gMiwgSGVpZ2h0IC0gMik7XG5cdH1cblxuXHRkcmF3QmxhY2tLZXkod2hpdGVLZXlJbmRleCwgc2hvdWxkQmVSZWQgPSBmYWxzZSkge1xuXG5cdFx0aWYgKCFzaG91bGRCZVJlZCkge1xuXG5cdFx0XHRsZXQgQzEgPSBcInJnYigwLDAsMClcIjtcdFx0XHQvLyBibGFja1xuXHRcdFx0bGV0IEMyID0gXCJyZ2IoNTAsNTAsNTApXCI7XHRcdC8vID8/XG5cblx0XHRcdHRoaXMuZHJhd1JlY3RXaXRoQm9yZGVyKCgod2hpdGVLZXlJbmRleCArIDEpICogKHRoaXMud2lkdGggLyA1MikpIC0gKCh0aGlzLndpZHRoIC8gNTIpICogMC43NSAvIDIpLCAwLCAodGhpcy53aWR0aCAvIDUyKSAqIDAuNzUsIHRoaXMuaGVpZ2h0ICogMC42NiwgQzEsIEMyKTtcblxuXHRcdH1cblx0XHRlbHNlIHtcblxuXHRcdFx0bGV0IEMxID0gXCJyZ2IoMCwwLDApXCI7XHRcdFx0Ly8gYmxhY2tcblx0XHRcdGxldCBDMiA9IFwicmdiKDI1NSwwLDApXCI7XHRcdC8vIHJlZFxuXG5cdFx0XHR0aGlzLmRyYXdSZWN0V2l0aEJvcmRlcigoKHdoaXRlS2V5SW5kZXggKyAxKSAqICh0aGlzLndpZHRoIC8gNTIpKSAtICgodGhpcy53aWR0aCAvIDUyKSAqIDAuNzUgLyAyKSwgMCwgKHRoaXMud2lkdGggLyA1MikgKiAwLjc1LCB0aGlzLmhlaWdodCAqIDAuNjYsIEMxLCBDMik7XG5cblx0XHR9XG5cdH1cblxuXHRkcmF3V2hpdGVLZXkoV2hpdGVLZXlJbmRleCwgc2hvdWxkQmVSZWQgPSBmYWxzZSkge1xuXG5cdFx0aWYgKCFzaG91bGRCZVJlZCkge1xuXG5cdFx0XHRsZXQgQzEgPSBcInJnYigwLDAsMClcIjtcdFx0XHQvLyBsYmFja1xuXHRcdFx0bGV0IEMyID0gXCJyZ2IoMjU1LDI1NSwyNTUpXCI7XHQvLyB3aGl0ZVxuXG5cdFx0XHR0aGlzLmRyYXdSZWN0V2l0aEJvcmRlcigoV2hpdGVLZXlJbmRleCAqICh0aGlzLndpZHRoIC8gNTIpKSwgMCwgKHRoaXMud2lkdGggLyA1MiksIHRoaXMuaGVpZ2h0LCBDMSwgQzIpO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0bGV0IEMxID0gXCJyZ2IoMCwwLDApXCI7XHRcdFx0Ly8gYmxhY2tcblx0XHRcdGxldCBDMiA9IFwicmdiKDI1NSwwLDApXCI7XHRcdC8vIHJlZFxuXG5cdFx0XHR0aGlzLmRyYXdSZWN0V2l0aEJvcmRlcigoV2hpdGVLZXlJbmRleCAqICh0aGlzLndpZHRoIC8gNTIpKSwgMCwgKHRoaXMud2lkdGggLyA1MiksIHRoaXMuaGVpZ2h0LCBDMSwgQzIpO1xuXG5cdFx0fVxuXHR9XG5cblx0ZHJhd1JlZEtleShpbmRleCwgdW5kbykge1xuXHRcdGxldCBiZWZvcmVLZXlJbmZvID0gdGhpcy5hYnNvbHV0ZVRvS2V5SW5mbyhpbmRleCAtIDEpO1xuXHRcdGxldCBhZnRlcktleUluZm8gPSB0aGlzLmFic29sdXRlVG9LZXlJbmZvKGluZGV4ICsgMSk7XG5cdFx0bGV0IGtleUluZm8gPSB0aGlzLmFic29sdXRlVG9LZXlJbmZvKGluZGV4ICsgMSk7XG5cblx0XHRsZXQga2V5TG9va3VwID0gdGhpcy5hYnNvbHV0ZVRvS2V5SW5mbyhpbmRleCk7XG5cdFx0aWYgKGtleUxvb2t1cC5pc19ibGFjaykge1xuXHRcdFx0aWYgKGJlZm9yZUtleUluZm8uaXNfYmxhY2spIHtcblx0XHRcdFx0dGhpcy5kcmF3QmxhY2tLZXkoYmVmb3JlS2V5SW5mby53aGl0ZV9pbmRleCwgZmFsc2UpXG5cdFx0XHR9XG5cdFx0XHRpZiAoYWZ0ZXJLZXlJbmZvLmlzX2JsYWNrKSB7XG5cdFx0XHRcdHRoaXMuZHJhd0JsYWNrS2V5KGFmdGVyS2V5SW5mby53aGl0ZV9pbmRleCwgZmFsc2UpXG5cdFx0XHR9XG5cdFx0XHR0aGlzLmRyYXdCbGFja0tleShrZXlMb29rdXAud2hpdGVfaW5kZXgsICF1bmRvKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kcmF3V2hpdGVLZXkoa2V5TG9va3VwLndoaXRlX2luZGV4LCAhdW5kbyk7XG5cdFx0XHRpZiAoYmVmb3JlS2V5SW5mby5pc19ibGFjaykge1xuXHRcdFx0XHR0aGlzLmRyYXdCbGFja0tleShiZWZvcmVLZXlJbmZvLndoaXRlX2luZGV4LCBmYWxzZSlcblx0XHRcdH1cblx0XHRcdGlmIChhZnRlcktleUluZm8uaXNfYmxhY2spIHtcblx0XHRcdFx0dGhpcy5kcmF3QmxhY2tLZXkoYWZ0ZXJLZXlJbmZvLndoaXRlX2luZGV4LCBmYWxzZSlcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHR1bmRvRHJhd1JlZEtleShpbmRleCkge1xuXHRcdHRoaXMuX3VuZG9EcmF3UmVkS2V5KGluZGV4LTEpXG5cdFx0dGhpcy5fdW5kb0RyYXdSZWRLZXkoaW5kZXgpXG5cdFx0dGhpcy5fdW5kb0RyYXdSZWRLZXkoaW5kZXgrMSlcblx0fVxuXG5cdF91bmRvRHJhd1JlZEtleShpbmRleCkge1xuXHRcdGxldCBrZXlMb29rdXAgPSB0aGlzLmFic29sdXRlVG9LZXlJbmZvKGluZGV4KTtcblx0XHRpZiAoa2V5TG9va3VwLmlzX2JsYWNrKSB7XG5cdFx0XHR0aGlzLmRyYXdCbGFja0tleShrZXlMb29rdXAud2hpdGVfaW5kZXgsIGZhbHNlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kcmF3V2hpdGVLZXkoa2V5TG9va3VwLndoaXRlX2luZGV4LCBmYWxzZSk7XG5cdFx0fVxuXHR9XG5cblx0YWJzb2x1dGVUb0tleUluZm8oQWJzb2x1dGVOb3RlTnVtKSB7XG5cblx0XHR2YXIgS2V5TG9va3VwVGFibGUgPSBuZXcgQXJyYXkoODgpO1xuXG5cdFx0S2V5TG9va3VwVGFibGVbMF0gPSB7aXNfYmxhY2s6IGZhbHNlLCB3aGl0ZV9pbmRleDogMH07XHRcdFx0Ly8gYVxuXHRcdEtleUxvb2t1cFRhYmxlWzFdID0ge2lzX2JsYWNrOiB0cnVlLCB3aGl0ZV9pbmRleDogMH07XHRcdFx0Ly8gYSNcblx0XHRLZXlMb29rdXBUYWJsZVsyXSA9IHtpc19ibGFjazogZmFsc2UsIHdoaXRlX2luZGV4OiAxfTtcdFx0XHQvLyBiXG5cdFx0bGV0IGJhc2UgPSAzO1xuXG5cdFx0bGV0IE51bU9jdGF2ZXMgPSA4XG5cdFx0Zm9yIChsZXQgY291bnRlciA9IDA7IGNvdW50ZXIgPCBOdW1PY3RhdmVzOyBjb3VudGVyKyspIHtcblx0XHRcdGxldCBvY3RhdmVfb2Zmc2V0ID0gNyAqIGNvdW50ZXI7XG5cblx0XHRcdEtleUxvb2t1cFRhYmxlW2Jhc2UgKyAwXSA9IHtpc19ibGFjazogZmFsc2UsIHdoaXRlX2luZGV4OiBvY3RhdmVfb2Zmc2V0ICsgMn07IC8vIGNcblx0XHRcdEtleUxvb2t1cFRhYmxlW2Jhc2UgKyAxXSA9IHtpc19ibGFjazogdHJ1ZSwgd2hpdGVfaW5kZXg6IG9jdGF2ZV9vZmZzZXQgKyAyfTsgLy8gYyNcblx0XHRcdEtleUxvb2t1cFRhYmxlW2Jhc2UgKyAyXSA9IHtpc19ibGFjazogZmFsc2UsIHdoaXRlX2luZGV4OiBvY3RhdmVfb2Zmc2V0ICsgM307IC8vIGRcblx0XHRcdEtleUxvb2t1cFRhYmxlW2Jhc2UgKyAzXSA9IHtpc19ibGFjazogdHJ1ZSwgd2hpdGVfaW5kZXg6IG9jdGF2ZV9vZmZzZXQgKyAzfTsgLy8gZCNcblx0XHRcdEtleUxvb2t1cFRhYmxlW2Jhc2UgKyA0XSA9IHtpc19ibGFjazogZmFsc2UsIHdoaXRlX2luZGV4OiBvY3RhdmVfb2Zmc2V0ICsgNH07IC8vIGVcblx0XHRcdEtleUxvb2t1cFRhYmxlW2Jhc2UgKyA1XSA9IHtpc19ibGFjazogZmFsc2UsIHdoaXRlX2luZGV4OiBvY3RhdmVfb2Zmc2V0ICsgNX07IC8vIGZcblx0XHRcdEtleUxvb2t1cFRhYmxlW2Jhc2UgKyA2XSA9IHtpc19ibGFjazogdHJ1ZSwgd2hpdGVfaW5kZXg6IG9jdGF2ZV9vZmZzZXQgKyA1fTsgLy8gZiNcblx0XHRcdEtleUxvb2t1cFRhYmxlW2Jhc2UgKyA3XSA9IHtpc19ibGFjazogZmFsc2UsIHdoaXRlX2luZGV4OiBvY3RhdmVfb2Zmc2V0ICsgNn07IC8vIGdcblx0XHRcdEtleUxvb2t1cFRhYmxlW2Jhc2UgKyA4XSA9IHtpc19ibGFjazogdHJ1ZSwgd2hpdGVfaW5kZXg6IG9jdGF2ZV9vZmZzZXQgKyA2fTsgLy8gZyNcblx0XHRcdEtleUxvb2t1cFRhYmxlW2Jhc2UgKyA5XSA9IHtpc19ibGFjazogZmFsc2UsIHdoaXRlX2luZGV4OiBvY3RhdmVfb2Zmc2V0ICsgN307IC8vIGFcblx0XHRcdEtleUxvb2t1cFRhYmxlW2Jhc2UgKyAxMF0gPSB7aXNfYmxhY2s6IHRydWUsIHdoaXRlX2luZGV4OiBvY3RhdmVfb2Zmc2V0ICsgN307ICAvLyBhI1xuXHRcdFx0S2V5TG9va3VwVGFibGVbYmFzZSArIDExXSA9IHtpc19ibGFjazogZmFsc2UsIHdoaXRlX2luZGV4OiBvY3RhdmVfb2Zmc2V0ICsgOH07IC8vIGJcblxuXHRcdFx0YmFzZSArPSAxMjtcblx0XHR9XG5cblx0XHRyZXR1cm4gS2V5TG9va3VwVGFibGVbQWJzb2x1dGVOb3RlTnVtXTtcblx0fVxufVxuLypcbi8vIGNhbnZhcyBcdFx0LSBIVE1MNSBjYW52YXMgZWxlbWVudFxuLy8gUmVkS2V5QXJyYXkgIC0gYXJyYXkgb2Yga2V5cyB0byBjb2xvciByZWQgKDAgPSBsb3cgYSwgODcgPSBoaWdoIGMsIHByb2NlZWRpbmcgY2hyb21hdGljYWxseSlcbmZ1bmN0aW9uIERyYXdLZXlib2FyZChjYW52YXMsIFJlZEtleUFycmF5KSB7XG5cblx0Ly8gZ2VuZXJhbCBjaGFyYWN0ZXJpc3RpY3Mgb2YgYSBwaWFub1xuXG5cdHZhciBUT1RBTF9LRVlTID0gODg7XG5cdHZhciBOVU1fV0hJVEVfS0VZUyA9IDUyO1xuXHR2YXIgTlVNX0JMQUNLX0tFWVMgPSBUT1RBTF9LRVlTIC0gTlVNX1dISVRFX0tFWVM7XG5cblx0dmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cblx0dmFyIFhfQk9SREVSID0gMDtcblx0dmFyIFlfQk9SREVSID0gMDtcblxuXHR2YXIgd2lkdGggPSBjYW52YXMud2lkdGggLSAoWF9CT1JERVIgKiAyKTtcblx0dmFyIGhlaWdodCA9IGNhbnZhcy5oZWlnaHQgLSAoWV9CT1JERVIgKiAyKTtcblxuXHR2YXIgV0hJVEVfS0VZX1dJRFRIID0gKHdpZHRoIC8gTlVNX1dISVRFX0tFWVMpO1xuXHR2YXIgV0hJVEVfS0VZX0hFSUdIVCA9IGhlaWdodDtcblxuXHR2YXIgQkxBQ0tfS0VZX1dJRFRIID0gV0hJVEVfS0VZX1dJRFRIICogLjc1XG5cdHZhciBCTEFDS19LRVlfSEVJR0hUID0gaGVpZ2h0ICogLjY2XG5cblx0ZnVuY3Rpb24gRHJhd1JlY3RXaXRoQm9yZGVyKFgsIFksIFdpZHRoLCBIZWlnaHQsIENvbG9yMSwgQ29sb3IyKSB7XG5cblx0XHQvL2RyYXcgYm9yZGVyXG5cdFx0Y3R4LmZpbGxTdHlsZSA9IENvbG9yMTtcblx0XHRjdHguZmlsbFJlY3QoWCwgWSwgV2lkdGgsIEhlaWdodCk7XG5cblx0XHQvL2RyYXcgaW5zaWRlXG5cdFx0Y3R4LmZpbGxTdHlsZSA9IENvbG9yMjtcblx0XHRjdHguZmlsbFJlY3QoWCArIDEsIFkgKyAxLCBXaWR0aCAtIDIsIEhlaWdodCAtIDIpO1xuXG5cdH1cblxuXHQvLyBkcmF3cyBhIGJhY2sga2V5LCBiYXNlZCBvbiB3aGl0ZUtleUluZGV4LCB3aGVyZSAwIDw9IFdoaXRlS2V5SW5kZXggPCA1MlxuXHRmdW5jdGlvbiBkcmF3QmxhY2tLZXkod2hpdGVLZXlJbmRleCwgc2hvdWxkQmVSZWQgPSBmYWxzZSkge1xuXG5cdFx0aWYgKCFzaG91bGRCZVJlZCkge1xuXG5cdFx0XHRsZXQgQzEgPSBcInJnYigwLDAsMClcIjtcdFx0XHQvLyBibGFja1xuXHRcdFx0bGV0IEMyID0gXCJyZ2IoNTAsNTAsNTApXCI7XHRcdC8vID8/XG5cblx0XHRcdERyYXdSZWN0V2l0aEJvcmRlcihYX0JPUkRFUiArICgod2hpdGVLZXlJbmRleCArIDEpICogV0hJVEVfS0VZX1dJRFRIKSAtIChCTEFDS19LRVlfV0lEVEggLyAyKSwgWV9CT1JERVIsIEJMQUNLX0tFWV9XSURUSCwgQkxBQ0tfS0VZX0hFSUdIVCwgQzEsIEMyKTtcblxuXHRcdH1cblx0XHRlbHNlIHtcblxuXHRcdFx0bGV0IEMxID0gXCJyZ2IoMCwwLDApXCI7XHRcdFx0Ly8gYmxhY2tcblx0XHRcdGxldCBDMiA9IFwicmdiKDI1NSwwLDApXCI7XHRcdC8vIHJlZFxuXG5cdFx0XHREcmF3UmVjdFdpdGhCb3JkZXIoWF9CT1JERVIgKyAoKHdoaXRlS2V5SW5kZXggKyAxKSAqIFdISVRFX0tFWV9XSURUSCkgLSAoQkxBQ0tfS0VZX1dJRFRIIC8gMiksIFlfQk9SREVSLCBCTEFDS19LRVlfV0lEVEgsIEJMQUNLX0tFWV9IRUlHSFQsIEMxLCBDMik7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIERyYXdXaGl0ZUtleShXaGl0ZUtleUluZGV4LCBzaG91bGRCZVJlZCA9IGZhbHNlKSB7XG5cblx0XHRpZiAoIXNob3VsZEJlUmVkKSB7XG5cblx0XHRcdGxldCBDMSA9IFwicmdiKDAsMCwwKVwiO1x0XHRcdC8vIGxiYWNrXG5cdFx0XHRsZXQgQzIgPSBcInJnYigyNTUsMjU1LDI1NSlcIjtcdC8vIHdoaXRlXG5cblx0XHRcdERyYXdSZWN0V2l0aEJvcmRlcihYX0JPUkRFUiArIChXaGl0ZUtleUluZGV4ICogV0hJVEVfS0VZX1dJRFRIKSwgWV9CT1JERVIsIFdISVRFX0tFWV9XSURUSCwgaGVpZ2h0LCBDMSwgQzIpO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0bGV0IEMxID0gXCJyZ2IoMCwwLDApXCI7XHRcdFx0Ly8gYmxhY2tcblx0XHRcdGxldCBDMiA9IFwicmdiKDI1NSwwLDApXCI7XHRcdC8vIHJlZFxuXG5cdFx0XHREcmF3UmVjdFdpdGhCb3JkZXIoWF9CT1JERVIgKyAoV2hpdGVLZXlJbmRleCAqIFdISVRFX0tFWV9XSURUSCksIFlfQk9SREVSLCBXSElURV9LRVlfV0lEVEgsIGhlaWdodCwgQzEsIEMyKTtcblxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGtleVR5cGUoaXNCbGFjaywgV2hpdGVfSW5kZXgpIHtcblx0XHR0aGlzLmlzQmxhY2sgPSBpc0JsYWNrO1xuXHRcdHRoaXMuV2hpdGVfSW5kZXggPSBXaGl0ZV9JbmRleFxuXHR9XG5cblx0ZnVuY3Rpb24gQWJzb2x1dGVUb0tleUluZm8oQWJzb2x1dGVOb3RlTnVtKSB7XG5cblx0XHR2YXIgS2V5TG9va3VwVGFibGUgPSBuZXcgQXJyYXkoVE9UQUxfS0VZUyk7XG5cblx0XHRLZXlMb29rdXBUYWJsZVswXSA9IG5ldyBrZXlUeXBlKGZhbHNlLCAwKTtcdFx0XHQvLyBhXG5cdFx0S2V5TG9va3VwVGFibGVbMV0gPSBuZXcga2V5VHlwZSh0cnVlLCAwKTtcdFx0XHQvLyBhI1xuXHRcdEtleUxvb2t1cFRhYmxlWzJdID0gbmV3IGtleVR5cGUoZmFsc2UsIDEpO1x0XHRcdC8vIGJcblx0XHRsZXQgYmFzZSA9IDM7XG5cblx0XHRsZXQgTnVtT2N0YXZlcyA9IDhcblx0XHRmb3IgKGxldCBjb3VudGVyID0gMDsgY291bnRlciA8IE51bU9jdGF2ZXM7IGNvdW50ZXIrKykge1xuXHRcdFx0bGV0IG9jdGF2ZV9vZmZzZXQgPSA3ICogY291bnRlcjtcblxuXHRcdFx0S2V5TG9va3VwVGFibGVbYmFzZSArIDBdID0gbmV3IGtleVR5cGUoZmFsc2UsIG9jdGF2ZV9vZmZzZXQgKyAyKTsgLy8gY1xuXHRcdFx0S2V5TG9va3VwVGFibGVbYmFzZSArIDFdID0gbmV3IGtleVR5cGUodHJ1ZSwgb2N0YXZlX29mZnNldCArIDIpOyAvLyBjI1xuXHRcdFx0S2V5TG9va3VwVGFibGVbYmFzZSArIDJdID0gbmV3IGtleVR5cGUoZmFsc2UsIG9jdGF2ZV9vZmZzZXQgKyAzKTsgLy8gZFxuXHRcdFx0S2V5TG9va3VwVGFibGVbYmFzZSArIDNdID0gbmV3IGtleVR5cGUodHJ1ZSwgb2N0YXZlX29mZnNldCArIDMpOyAvLyBkI1xuXHRcdFx0S2V5TG9va3VwVGFibGVbYmFzZSArIDRdID0gbmV3IGtleVR5cGUoZmFsc2UsIG9jdGF2ZV9vZmZzZXQgKyA0KTsgLy8gZVxuXHRcdFx0S2V5TG9va3VwVGFibGVbYmFzZSArIDVdID0gbmV3IGtleVR5cGUoZmFsc2UsIG9jdGF2ZV9vZmZzZXQgKyA1KTsgLy8gZlxuXHRcdFx0S2V5TG9va3VwVGFibGVbYmFzZSArIDZdID0gbmV3IGtleVR5cGUodHJ1ZSwgb2N0YXZlX29mZnNldCArIDUpOyAvLyBmI1xuXHRcdFx0S2V5TG9va3VwVGFibGVbYmFzZSArIDddID0gbmV3IGtleVR5cGUoZmFsc2UsIG9jdGF2ZV9vZmZzZXQgKyA2KTsgLy8gZ1xuXHRcdFx0S2V5TG9va3VwVGFibGVbYmFzZSArIDhdID0gbmV3IGtleVR5cGUodHJ1ZSwgb2N0YXZlX29mZnNldCArIDYpOyAvLyBnI1xuXHRcdFx0S2V5TG9va3VwVGFibGVbYmFzZSArIDldID0gbmV3IGtleVR5cGUoZmFsc2UsIG9jdGF2ZV9vZmZzZXQgKyA3KTsgLy8gYVxuXHRcdFx0S2V5TG9va3VwVGFibGVbYmFzZSArIDEwXSA9IG5ldyBrZXlUeXBlKHRydWUsIG9jdGF2ZV9vZmZzZXQgKyA3KSAgLy8gYSNcblx0XHRcdEtleUxvb2t1cFRhYmxlW2Jhc2UgKyAxMV0gPSBuZXcga2V5VHlwZShmYWxzZSwgb2N0YXZlX29mZnNldCArIDgpOyAvLyBiXG5cblx0XHRcdGJhc2UgKz0gMTI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIEtleUxvb2t1cFRhYmxlW0Fic29sdXRlTm90ZU51bV07XG5cdH1cblxuXG5cdC8vIGp1c3QgZHJhdyBpbiBhbGwgdGhlIHdoaXRlIGtleXMgdG8gYmVnaW4gd2l0aC4uLlxuXHRmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9XSElURV9LRVlTOyBpKyspIHtcblx0XHREcmF3V2hpdGVLZXkoaSwgZmFsc2UpO1xuXHR9XG5cblxuXHQvLyBub3cgZHJhdyBzcGVjaWFsbHkgd2hpdGUga2V5cyB0aGF0IG5lZWQgdG8gYmUgcmVkLi4uXG5cdC8vIGp1c3QgbG9vcCB0aHJvdWdoIGFsbCB0aGUgUmVkS2V5QXJyYXlcblx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8PSBUT1RBTF9LRVlTOyBpbmRleCsrKSB7XG5cdFx0Ly8gYW5kIGlmIHdlIGZpbmQgYW55IHdoaXRlIGtleXMgdGhhdCBhcmUgc3VwcG9zZWQgdG8gYmUgcmVkLCB0aGVuIGRyYXcgdGhlbSBpbiByZWQuLi5cblx0XHRpZiAoUmVkS2V5QXJyYXkuaW5jbHVkZXMoaW5kZXgpKSB7XG5cdFx0XHRsZXQgS2V5TG9va3VwID0gQWJzb2x1dGVUb0tleUluZm8oaW5kZXgpO1xuXHRcdFx0aWYgKCFLZXlMb29rdXAuaXNCbGFjaylcblx0XHRcdFx0RHJhd1doaXRlS2V5KEtleUxvb2t1cC5XaGl0ZV9JbmRleCwgdHJ1ZSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gZHJhdyBpbiBsb3dlc3QgYSMgbWFudWFsbHkgKG1ha2luZyBzdXJlIHRvIGRyYXcgaXQgcmVkIGlmIGl0IHNob3VsZCBiZSlcblx0bGV0IExvd2VzdFNob3VsZEJlUmVkID0gUmVkS2V5QXJyYXkuaW5jbHVkZXMoMSk7XG5cdGRyYXdCbGFja0tleSgwLCBMb3dlc3RTaG91bGRCZVJlZCk7XG5cblx0Ly8gbm93IGRyYXcgYWxsIHRoZSByZXN0IG9mIHRoZSBibGFjayBrZXlzLi4uXG5cdC8vIGxvb3AgdGhyb3VnaCBhbGwgNyBvY3RhdmVzXG5cdGxldCBudW1PY3RhdmVzID0gNztcblx0bGV0IGN1cldoaXRlTm90ZUluZGV4ID0gMjtcblxuXHRmb3IgKGxldCBvY3RhdmUgPSAwOyBvY3RhdmUgPCBudW1PY3RhdmVzOyBvY3RhdmUrKykge1xuXHRcdC8vIGFuZCBkcmF3IDUgYmxhY2sgbm90ZXMgcGVyIG9jdGF2ZS4uLlxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG5cdFx0XHRkcmF3QmxhY2tLZXkoY3VyV2hpdGVOb3RlSW5kZXgsIGZhbHNlKTtcblx0XHRcdGlmIChpID09IDEgfHwgaSA9PSA0KVxuXHRcdFx0XHRjdXJXaGl0ZU5vdGVJbmRleCArPSAyO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRjdXJXaGl0ZU5vdGVJbmRleCArPSAxO1xuXHRcdH1cblx0fVxuXG5cblx0Ly8gbm93IGRyYXcgc3BlY2lhbGx5IGJsYWNrIGtleXMgdGhhdCBuZWVkIHRvIGJlIHJlZC4uLlxuXHQvLyBqdXN0IGxvb3AgdGhyb3VnaCBhbGwgdGhlIFJlZEtleUFycmF5XG5cdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPD0gODg7IGluZGV4KyspIHtcblx0XHQvLyBhbmQgaWYgd2UgZmluZCBhbnkgYmxhY2sga2V5cyB0aGF0IGFyZSBzdXBwb3NlZCB0byBiZSByZWQsIHRoZW4gZHJhdyB0aGVtIGluIHJlZC4uLlxuXHRcdGlmIChSZWRLZXlBcnJheS5pbmNsdWRlcyhpbmRleCkpIHtcblx0XHRcdGxldCBLZXlMb29rdXAgPSBBYnNvbHV0ZVRvS2V5SW5mbyhpbmRleCk7XG5cdFx0XHRpZiAoS2V5TG9va3VwLmlzQmxhY2spXG5cdFx0XHRcdGRyYXdCbGFja0tleShLZXlMb29rdXAuV2hpdGVfSW5kZXgsIHRydWUpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRyYXdLZXlib2FyZDogRHJhd0tleWJvYXJkXG59XG4qL1xuIiwiZnVuY3Rpb24gZ2V0SW5zdHJ1bWVudEtleU9mZnNldChpbnN0cnVtZW50KSB7XG5cdGxldCBrZXlfb2Zmc2V0cyA9IHtcblx0XHQnZ3VpdGFyJzogMTIsXG5cdFx0J2NsYXJpbmV0JzogMixcblx0XHQnYmFzc19jbGFyaW5ldCc6IDE0LFxuXHRcdCdzb3ByYW5vX3NheG9waG9uZSc6IDIsXG5cdFx0J2FsdG9fc2F4b3Bob25lJzogOSxcblx0XHQndGVub3Jfc2F4b3Bob25lJzogMTQsXG5cdFx0J2ZyZW5jaF9ob3JuJzogNyxcblx0XHQndHJ1bXBldCc6IDIsXG5cdFx0J3BpYW5vJzogMCxcblx0fVxuXHRyZXR1cm4ga2V5X29mZnNldHNbaW5zdHJ1bWVudF07XG59XG5cbmZ1bmN0aW9uIGdldEluc3RydW1lbnRGaW5nZXJpbmcoaW5zdHJ1bWVudCkge1xuXHRsZXQgZmluZ2VyaW5nX21hcCA9IHtcblx0XHQnZ3VpdGFyJzogJ2d1aXRhcicsXG5cdFx0J3BpY2NvbG8nOiAncGljb2xvJyxcblx0XHQnY2xhcmluZXQnOiAnY2xhcmluZXQnLFxuXHRcdCdiYXNzX2NsYXJpbmV0JzogJ2NsYXJpbmV0Jyxcblx0XHQnc29wcmFub19zYXhvcGhvbmUnOiAnc2F4b3Bob25lJyxcblx0XHQnYWx0b19zYXhvcGhvbmUnOiAnc2F4b3Bob25lJyxcblx0XHQndGVub3Jfc2F4b3Bob25lJzogJ3NheG9waG9uZScsXG5cdFx0J2Jhcml0b25lX3NheG9waG9uZSc6ICdzYXhvcGhvbmUnLFxuXHRcdCdmcmVuY2hfaG9ybic6ICd0cnVtcGV0Jyxcblx0XHQndHJ1bXBldCc6ICd0cnVtcGV0Jyxcblx0XHQneHlsb3Bob25lJzogJ3h5bG9waG9uZScsXG5cdFx0J2dsb2NrZW5zcGllbCc6ICdnbG9ja2Vuc3BpZWwnLFxuXHRcdCdwaWFubyc6ICdwaWFubycsXG5cdH1cblx0cmV0dXJuIGZpbmdlcmluZ19tYXBbaW5zdHJ1bWVudF07XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGdldEluc3RydW1lbnRLZXlPZmZzZXQ6IGdldEluc3RydW1lbnRLZXlPZmZzZXQsXG5cdGdldEluc3RydW1lbnRGaW5nZXJpbmc6IGdldEluc3RydW1lbnRGaW5nZXJpbmcsXG59XG4iLCJmdW5jdGlvbiBjb21wYXJlS2V5cyhub3RlMSwgbm90ZTIpIHtcblx0bGV0IGtleWFsaWFzZXMgPSB7XG5cdFx0J2FiJzogJ2cjJyxcblx0XHQnYScgOiAnYScsXG5cdFx0J2EjJyA6ICdiYicsXG5cdFx0J2JiJyA6ICdhIycsXG5cdFx0J2InIDogJ2NiJyxcblx0XHQnYiMnOiAnYycsXG5cdFx0J2NiJyA6ICdiJyxcblx0XHQnYycgOiAnYiMnLFxuXHRcdCdjIyc6ICdkYicsXG5cdFx0J2RiJyA6ICdjIycsXG5cdFx0J2QnIDogJ2QnLFxuXHRcdCdkIycgOiAnZWInLFxuXHRcdCdlYicgOiAnZCMnLFxuXHRcdCdlJyA6ICdmYicsXG5cdFx0J2UjJyA6ICdmJyxcblx0XHQnZmInIDogJ2UnLFxuXHRcdCdmJyA6ICdmJyxcblx0XHQnZiMnIDogJ2diJyxcblx0XHQnZ2InIDogJ2YjJyxcblx0XHQnZycgOiAnZycsXG5cdFx0J2cjJyA6ICdhYicsXG5cdH1cblx0aWYgKG5vdGUxID09IHVuZGVmaW5lZCB8fCBub3RlMiA9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIG5vdGUxLnRvTG93ZXJDYXNlKCkgPT0gbm90ZTIudG9Mb3dlckNhc2UoKSB8fCBrZXlhbGlhc2VzW25vdGUxLnRvTG93ZXJDYXNlKCldID09IG5vdGUyLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIGdldEtleUFzRmxhdChrZXkpIHtcblx0bGV0IGZsYXRfbWFwID0ge1xuXHRcdCdhYic6ICdBYicsXG5cdFx0J2EnIDogJ2EnLFxuXHRcdCdhIycgOiAnQmInLFxuXHRcdCdiYicgOiAnQmInLFxuXHRcdCdiJyA6ICdCJyxcblx0XHQnY2InIDogJ0InLFxuXHRcdCdjJyA6ICdDJyxcblx0XHQnYyMnOiAnRGInLFxuXHRcdCdkYicgOiAnRGInLFxuXHRcdCdkJyA6ICdEJyxcblx0XHQnZCMnIDogJ0ViJyxcblx0XHQnZWInIDogJ0ViJyxcblx0XHQnZScgOiAnRmInLFxuXHRcdCdlIycgOiAnRicsXG5cdFx0J2ZiJyA6ICdFJyxcblx0XHQnZicgOiAnRicsXG5cdFx0J2YjJyA6ICdHYicsXG5cdFx0J2diJyA6ICdHYicsXG5cdFx0J2cnIDogJ0cnLFxuXHRcdCdnIycgOiAnQWInLFxuXHR9XG5cdHJldHVybiBmbGF0X21hcFtrZXkudG9Mb3dlckNhc2UoKV1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRjb21wYXJlS2V5czogY29tcGFyZUtleXNcbn1cbiIsImltcG9ydCBrZXlfY29tcGFyaXNvbiBmcm9tICcuL2tleV9jb21wYXJpc29uJ1xubGV0IG5vdGVGcmVxdWVuY2llcyA9XG5cdC8vIEIgICAgICAgIEEjICAgICAgICBBICAgICAgRyMgICAgICAgRyAgICAgICAgIEYjICAgICAgIEYgICAgICAgIEUgICAgICAgICBEIyAgICAgIEQgICAgICAgIEMjICAgICAgIENcblx0Wzc5MDIuMTMsIDc0NTguNjIsIDcwNDAuMDAsIDY2NDQuODgsIDYyNzEuOTMsIDU5MTkuOTEsIDU1ODcuNjUsIDUyNzQuMDQsIDQ5NzguMDMsIDQ2OTguNjQsIDQ0MzQuOTIsIDQxODYuMDEsICAvLyA4XG5cdDM5NTEuMDcsIDM3MjkuMzEsIDM1MjAuMDAsIDMzMjIuNDQsIDMxMzUuOTYsIDI5NTkuOTYsIDI3OTMuODMsIDI2MzcuMDIsIDI0ODkuMDIsIDIzNDkuMzIsIDIyMTcuNDYsIDIwOTMuMDAsICAgLy8gN1xuXHQxOTc1LjUzLCAxODY0LjY2LCAxNzYwLjAwLCAxNjYxLjIyLCAxNTY3Ljk4LCAxNDc5Ljk4LCAxMzk2LjkxLCAxMzE4LjUxLCAxMjQ0LjUxLCAxMTc0LjY2LCAxMTA4LjczLCAxMDQ2LjUwLCAgIC8vIDZcblx0OTg3Ljc2NywgOTMyLjMyOCwgODgwLjAwMCwgODMwLjYwOSwgNzgzLjk5MSwgNzM5Ljk4OSwgNjk4LjQ1NiwgNjU5LjI1NSwgNjIyLjI1NCwgNTg3LjMzMCwgNTU0LjM2NSwgNTIzLjI1MSwgICAvLyA1XG5cdDQ5My44ODMsIDQ2Ni4xNjQsIDQ0MC4wMDAsIDQxNS4zMDUsIDM5MS45OTUsIDM2OS45OTQsIDM0OS4yMjgsIDMyOS42MjgsIDMxMS4xMjcsIDI5My42NjUsIDI3Ny4xODMsIDI2MS42MjYsICAgLy8gNFxuXHQyNDYuOTQyLCAyMzMuMDgyLCAyMjAuMDAwLCAyMDcuNjUyLCAxOTUuOTk4LCAxODQuOTk3LCAxNzQuNjE0LCAxNjQuODE0LCAxNTUuNTYzLCAxNDYuODMyLCAxMzguNTkxLCAxMzAuODEzLCAgIC8vIDNcblx0MTIzLjQ3MSwgMTE2LjU0MSwgMTEwLjAwMCwgMTAzLjgyNiwgOTcuOTk4OSwgOTIuNDk4NiwgODcuMzA3MSwgODIuNDA2OSwgNzcuNzgxNywgNzMuNDE2MiwgNjkuMjk1NywgNjUuNDA2NCwgICAvLyAyXG5cdDYxLjczNTQsIDU4LjI3MDUsIDU1LjAwMDAsIDUxLjkxMzEsIDQ4Ljk5OTQsIDQ2LjI0OTMsIDQzLjY1MzUsIDQxLjIwMzQsIDM4Ljg5MDksIDM2LjcwODEsIDM0LjY0NzgsIDMyLjcwMzIsICAgLy8gMVxuXHQzMC44Njc3LCAyOS4xMzUyLCAyNy41MDAwLCAyNS45NTY1LCAyNC40OTk3LCAyMy4xMjQ3LCAyMS44MjY4LCAyMC42MDE3LCAxOS40NDU0LCAxOC4zNTQwLCAxNy4zMjM5LCAxNi4zNTE2XTsgLy8gMFxuXG5sZXQgbm90ZU5hbWVzID0gW1wiQlwiLCBcIkEjXCIsIFwiQVwiLCBcIkcjXCIsIFwiR1wiLCBcIkYjXCIsIFwiRlwiLCBcIkVcIiwgXCJEI1wiLCBcIkRcIiwgXCJDI1wiLCBcIkNcIl07XG5cbmxldCBub3RlTmFtZUluZGV4TWFwID0ge1xuXHRcIkNcIjogMCxcblx0XCJDI1wiOiAxLFxuXHRcIkRCXCI6IDEsXG5cdFwiRFwiOiAyLFxuXHRcIkQjXCI6IDMsXG5cdFwiRUJcIjogMyxcblx0XCJFXCI6IDQsXG5cdFwiRlwiOiA1LFxuXHRcIkYjXCI6IDYsXG5cdFwiR0JcIjogNixcblx0XCJHXCI6IDcsXG5cdFwiRyNcIjogOCxcblx0XCJBQlwiOiA4LFxuXHRcIkFcIjogOSxcblx0XCJBI1wiOiAxMCxcblx0XCJCQlwiOiAxMCxcblx0XCJCXCI6IDExLFxufTtcblxuXG5mdW5jdGlvbiBlc3RpbWF0ZU5vdGUoZnJlcXVlbmN5KSB7XG5cdGxldCBsZW5ndGggPSBub3RlRnJlcXVlbmNpZXMubGVuZ3RoO1xuXHRsZXQgZnJlcXVlbmN5SW5kZXggPSAwO1xuXHRsZXQgbmV4dENsb3Nlc3RJbmRleCA9IDA7XG5cblx0Ly8gSXRlcmF0ZSB0aHJvdWdoIHRoZSBub3RlIGFycmF5IHRvIGZpbmQgdGhlIGNsb3Nlc3QgaW5kaWNlc1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCAtIDE7IGkrKykge1xuXHRcdGlmIChpID09IDAgJiYgZnJlcXVlbmN5ID4gbm90ZUZyZXF1ZW5jaWVzW2ldKSB7XG5cdFx0XHRmcmVxdWVuY3lJbmRleCA9IDA7XG5cdFx0XHRuZXh0Q2xvc2VzdEluZGV4ID0gMDtcblx0XHRcdGJyZWFrO1xuXHRcdH0gZWxzZSBpZiAobm90ZUZyZXF1ZW5jaWVzW2ldID49IGZyZXF1ZW5jeSAmJiBmcmVxdWVuY3kgPiBub3RlRnJlcXVlbmNpZXNbaSArIDFdKSB7XG5cdFx0XHRmcmVxdWVuY3lJbmRleCA9IChub3RlRnJlcXVlbmNpZXNbaV0gLSBmcmVxdWVuY3kpIDwgKGZyZXF1ZW5jeSAtIG5vdGVGcmVxdWVuY2llc1tpICsgMV0pID8gaSA6IGkgKyAxO1xuXHRcdFx0bmV4dENsb3Nlc3RJbmRleCA9IGZyZXF1ZW5jeUluZGV4ID09IGkgPyBpICsgMSA6IGk7XG5cdFx0XHRicmVhaztcblx0XHR9IGVsc2UgaWYgKGkgPT0gbGVuZ3RoIC0gMikge1xuXHRcdFx0ZnJlcXVlbmN5SW5kZXggPSBsZW5ndGggLSAxO1xuXHRcdFx0bmV4dENsb3Nlc3RJbmRleCA9IGxlbmd0aCAtIDE7XG5cdFx0fVxuXHR9XG5cblx0Ly8gR2V0IHRoZSBuYW1lIG9mIHRoZSBub3RlXG5cdHJldHVybiB7XG5cdFx0a2V5OiBub3RlTmFtZXNbKGZyZXF1ZW5jeUluZGV4KSAlIG5vdGVOYW1lcy5sZW5ndGhdLFxuXHRcdG9jdGF2ZTogOCAtIE1hdGguZmxvb3IoZnJlcXVlbmN5SW5kZXggLyBub3RlTmFtZXMubGVuZ3RoKSxcblx0fTtcbn1cblxuZnVuY3Rpb24gZ2V0RnJlcXVlbmN5Rm9yTm90ZShub3RlX25hbWUsIG5vdGVfb2N0YXZlKSB7XG5cdGxldCBub3RlTmFtZUluZGV4O1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IG5vdGVOYW1lcy5sZW5ndGg7IGkrKykge1xuXHRcdGlmIChrZXlfY29tcGFyaXNvbi5jb21wYXJlS2V5cyhub3RlX25hbWUsIG5vdGVOYW1lc1tpXSkpIHtcblx0XHRcdG5vdGVOYW1lSW5kZXggPSBpO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBub3RlRnJlcXVlbmNpZXNbbm90ZUZyZXF1ZW5jaWVzLmxlbmd0aCAtIDEgLSAobm90ZV9vY3RhdmUgKiBub3RlTmFtZXMubGVuZ3RoKSAtIChub3RlTmFtZXMubGVuZ3RoIC0gbm90ZU5hbWVJbmRleCAtIDEpXVxufVxuXG5mdW5jdGlvbiBnZXRJbmRleEZvck5vdGUobm90ZV9uYW1lLCBub3RlX29jdGF2ZSkge1xuXHRjb25zb2xlLmxvZyhub3RlX25hbWUpO1xuXHRyZXR1cm4gbm90ZV9vY3RhdmUgKiAxMiArIG5vdGVOYW1lSW5kZXhNYXBbbm90ZV9uYW1lXVxufVxuXG5mdW5jdGlvbiBnZXROb3RlRnJvbVNhbXBsZXMoYnVmZmVyLCBzYW1wbGVSYXRlKSB7XG5cblx0Ly8gV2UgdXNlIEF1dG9jb3JyZWxhdGlvbiB0byBmaW5kIHRoZSBmdW5kYW1lbnRhbCBmcmVxdWVuY3kuXG5cblx0Ly8gSW4gb3JkZXIgdG8gY29ycmVsYXRlIHRoZSBzaWduYWwgd2l0aCBpdHNlbGYgKGhlbmNlIHRoZSBuYW1lIG9mIHRoZSBhbGdvcml0aG0pLCB3ZSB3aWxsIGNoZWNrIHR3byBwb2ludHMgJ2snIGZyYW1lcyBhd2F5LlxuXHQvLyBUaGUgYXV0b2NvcnJlbGF0aW9uIGluZGV4IHdpbGwgYmUgdGhlIGF2ZXJhZ2Ugb2YgdGhlc2UgcHJvZHVjdHMuIEF0IHRoZSBzYW1lIHRpbWUsIHdlIG5vcm1hbGl6ZSB0aGUgdmFsdWVzLlxuXHQvLyBTb3VyY2U6IGh0dHA6Ly93d3cucGh5Lm10eS5lZHUvfnN1aXRzL2F1dG9jb3JyZWxhdGlvbi5odG1sXG5cdC8vIEFzc3VtaW5nIHRoZSBzYW1wbGUgcmF0ZSBpcyA0ODAwMEh6LCBhICdrJyBlcXVhbCB0byAxMDAwIHdvdWxkIGNvcnJlc3BvbmQgdG8gYSA0OEh6IHNpZ25hbCAoNDgwMDAvMTAwMCA9IDQ4KSxcblx0Ly8gd2hpbGUgYSAnaycgZXF1YWwgdG8gOCB3b3VsZCBjb3JyZXNwb25kIHRvIGEgNjAwMEh6IG9uZSwgd2hpY2ggaXMgZW5vdWdoIHRvIGNvdmVyIG1vc3QgKGlmIG5vdCBhbGwpXG5cdC8vIHRoZSBub3RlcyB3ZSBoYXZlIGluIHRoZSBub3Rlcy5qc29uIGZpbGUuXG5cblx0dmFyIG4gPSAxMDI0LCBiZXN0UiA9IDAsIGJlc3RLID0gLTE7XG5cdGZvcih2YXIgayA9IDg7IGsgPD0gMTAwMDsgaysrKXtcblxuXHRcdHZhciBzdW0gPSAwO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcblx0XHRcdHN1bSArPSAoKGJ1ZmZlcltpXSAtIDEyOCkgLyAxMjgpICogKChidWZmZXJbaSArIGtdIC0gMTI4KSAvIDEyOCk7XG5cdFx0fVxuXG5cdFx0dmFyIHIgPSBzdW0gLyAobiArIGspO1xuXG5cdFx0aWYociA+IGJlc3RSKXtcblx0XHRcdGJlc3RSID0gcjtcblx0XHRcdGJlc3RLID0gaztcblx0XHR9XG5cblx0XHRpZihyID4gMC45KSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRpZihiZXN0UiA+IDAuMDAyNSkge1xuXHRcdC8vIFRoZSBwZXJpb2QgKGluIGZyYW1lcykgb2YgdGhlIGZ1bmRhbWVudGFsIGZyZXF1ZW5jeSBpcyAnYmVzdEsnLiBHZXR0aW5nIHRoZSBmcmVxdWVuY3kgZnJvbSB0aGVyZSBpcyB0cml2aWFsLlxuXHRcdHZhciBmdW5kYW1lbnRhbEZyZXEgPSBzYW1wbGVSYXRlIC8gYmVzdEs7XG5cdFx0cmV0dXJuIGVzdGltYXRlTm90ZShmdW5kYW1lbnRhbEZyZXEpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIFdlIGhhdmVuJ3QgZm91bmQgYSBnb29kIGNvcnJlbGF0aW9uXG5cdFx0cmV0dXJuIFtdO1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGdldEZyZXF1ZW5jeUZvck5vdGU6IGdldEZyZXF1ZW5jeUZvck5vdGUsXG5cdGdldE5vdGVGcm9tU2FtcGxlczogZ2V0Tm90ZUZyb21TYW1wbGVzLFxuXHRlc3RpbWF0ZU5vdGU6IGVzdGltYXRlTm90ZSxcblx0Z2V0SW5kZXhGb3JOb3RlOiBnZXRJbmRleEZvck5vdGUsXG59XG4iLCJpbXBvcnQgSW5zdHJ1bWVudHMgZnJvbSAnLi9pbnN0cnVtZW50cyc7XG5pbXBvcnQgRHJhd0tleWJvYXJkIGZyb20gJy4vZHJhd19rZXlib2FyZCdcbmltcG9ydCBOb3RlRGV0ZWN0aW9uIGZyb20gJy4vbm90ZV9kZXRlY3Rpb24nXG5pbXBvcnQgVGltaW5nIGZyb20gJy4vdGltaW5nJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RlSGludGVyIHtcblxuXHRjb25zdHJ1Y3RvcihiZWF0c19wZXJfbWludXRlLCBiZWF0c19wZXJfbWVhc3VyZSwgdmZfYmFycykge1xuXHRcdHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG5cdFx0dGhpcy5jYW52YXMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuXHRcdGxldCBib28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvb1wiKTtcblx0XHR0aGlzLmNhbnZhcy5zdHlsZS5sZWZ0ID0gKGJvby5vZmZzZXRXaWR0aCAvIDIgLSB0aGlzLmNhbnZhcy5vZmZzZXRXaWR0aCAvIDIpICsgXCJweFwiO1xuXHRcdHRoaXMuZHJhd19rZXlib2FyZCA9IG5ldyBEcmF3S2V5Ym9hcmQoY2FudmFzKTtcblx0XHR0aGlzLmRyYXdfa2V5Ym9hcmQuaW5pdCgpXG5cdFx0dGhpcy5iZWF0c19wZXJfbWludXRlID0gYmVhdHNfcGVyX21pbnV0ZVxuXHRcdHRoaXMuYmVhdHNfcGVyX21lYXN1cmUgPSBiZWF0c19wZXJfbWVhc3VyZVxuXHRcdHRoaXMudmZfYmFycyA9IHZmX2JhcnM7XG5cdH1cblxuXHRzdGFydCgpIHtcblx0XHR0aGlzLmZ1bmMgPSBzZXRJbnRlcnZhbCh0aGlzLmRyYXcsIDEwLCB0aGlzKTtcblx0fVxuXG5cdHBhdXNlKCkge1xuXHRcdHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuZnVuYyk7XG5cdH1cblxuXHRkcmF3KG5vdGVfaGludGVyKSB7XG5cdFx0bGV0IHRpbWVJbk1zID0gVGltaW5nLmdldFRpbWVTaW5jZVN0YXJ0KCk7XG5cdFx0bGV0IGJwcyA9IG5vdGVfaGludGVyLmJlYXRzX3Blcl9taW51dGUgLyA2MDtcblx0XHRsZXQgYmVhdHNQYXNzZWQgPSAodGltZUluTXMgKiBicHMpIC8gKDEwMDApO1xuXHRcdGxldCBzdGF2ZXNQYXNzZWQgPSBNYXRoLmZsb29yKGJlYXRzUGFzc2VkIC8gbm90ZV9oaW50ZXIuYmVhdHNfcGVyX21lYXN1cmUpO1xuXHRcdGxldCBwZXJjZW50YWdlVGhyb3VnaFN0YXZlID0gKGJlYXRzUGFzc2VkICUgbm90ZV9oaW50ZXIuYmVhdHNfcGVyX21lYXN1cmUpIC8gbm90ZV9oaW50ZXIuYmVhdHNfcGVyX21lYXN1cmU7XG5cdFx0bGV0IG9mZnNldCA9ICgobm90ZV9oaW50ZXIuYmVhdHNfcGVyX21pbnV0ZSAvIG5vdGVfaGludGVyLmJlYXRzX3Blcl9tZWFzdXJlKSAvIDIwKSAqIDAuMDg7XG5cdFx0bGV0IG1pbl9vZmZzZXQgPSAoKG5vdGVfaGludGVyLmJlYXRzX3Blcl9taW51dGUgLyBub3RlX2hpbnRlci5iZWF0c19wZXJfbWVhc3VyZSkgLyAyMCkgKiAwLjA0O1xuXHRcdGxldCBtYXhPZmZzZXR0ZWRQZXJjZW50YWdlVGhyb3VnaFN0YXZlID0gcGVyY2VudGFnZVRocm91Z2hTdGF2ZSAtIG1pbl9vZmZzZXQ7XG5cdFx0bGV0IG9mZnNldHRlZFBlcmNlbnRhZ2VUaHJvdWdoU3RhdmUgPSBwZXJjZW50YWdlVGhyb3VnaFN0YXZlIC0gb2Zmc2V0O1xuXHRcdGxldCBvZmZzZXR0ZWRTdGF2ZXNQYXNzZWQgPSBzdGF2ZXNQYXNzZWQ7XG5cdFx0aWYgKG9mZnNldHRlZFBlcmNlbnRhZ2VUaHJvdWdoU3RhdmUgPCAwKSB7XG5cdFx0XHRpZiAoc3RhdmVzUGFzc2VkID09PSAwKSB7XG5cdFx0XHRcdG9mZnNldHRlZFN0YXZlc1Bhc3NlZCA9IDA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvZmZzZXR0ZWRTdGF2ZXNQYXNzZWQgLT0gMTtcblx0XHRcdFx0bWF4T2Zmc2V0dGVkUGVyY2VudGFnZVRocm91Z2hTdGF2ZSA9IG1heE9mZnNldHRlZFBlcmNlbnRhZ2VUaHJvdWdoU3RhdmUgKyAxO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRsZXQgbm90ZSA9IG51bGw7XG5cdFx0aWYgKG5vdGVfaGludGVyLnZmX2JhcnNbb2Zmc2V0dGVkU3RhdmVzUGFzc2VkXVswXSAmJiBub3RlX2hpbnRlci52Zl9iYXJzW29mZnNldHRlZFN0YXZlc1Bhc3NlZF1bMF0ucGVyY2VudGFnZSA8IG1heE9mZnNldHRlZFBlcmNlbnRhZ2VUaHJvdWdoU3RhdmUpIHtcblx0XHRcdG5vdGUgPSBub3RlX2hpbnRlci52Zl9iYXJzW29mZnNldHRlZFN0YXZlc1Bhc3NlZF1bMF0ubm90ZTtcblx0XHRcdG5vdGVfaGludGVyLnZmX2JhcnNbb2Zmc2V0dGVkU3RhdmVzUGFzc2VkXS5zaGlmdCgpO1xuXHRcdH1cblx0XHRpZiAobm90ZSAmJiBub3RlLmF0dHJzLnR5cGUgIT09ICdHaG9zdE5vdGUnKSB7XG5cdFx0XHRsZXQgcHJvcHMgPSBub3RlLmdldEtleVByb3BzKClbMF07XG5cdFx0XHRsZXQga2V5ID0gcHJvcHMua2V5O1xuXHRcdFx0bGV0IG9jdGF2ZSA9IHByb3BzLm9jdGF2ZTtcblx0XHRcdGxldCBpbmRleCA9IE5vdGVEZXRlY3Rpb24uZ2V0SW5kZXhGb3JOb3RlKGtleSwgb2N0YXZlKTtcblx0XHRcdG5vdGVfaGludGVyLmRyYXdfa2V5Ym9hcmQuZHJhd1JlZEtleShpbmRleCAtIDksIHRydWUpXG5cdFx0XHRub3RlX2hpbnRlci5oaW50TmV4dE5vdGUob2Zmc2V0dGVkU3RhdmVzUGFzc2VkKVxuXHRcdH1cblx0fVxuXG5cdGhpbnROZXh0Tm90ZShvZmZzZXR0ZWRTdGF2ZXNQYXNzZWQpIHtcblx0XHRmb3IgKGxldCBpID0gb2Zmc2V0dGVkU3RhdmVzUGFzc2VkOyBpIDwgdGhpcy52Zl9iYXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMudmZfYmFyc1tpXS5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRsZXQgbm90ZSA9IHRoaXMudmZfYmFyc1tpXVtqXS5ub3RlO1xuXHRcdFx0XHRpZiAobm90ZS5hdHRycy50eXBlICE9PSAnR2hvc3ROb3RlJykge1xuXHRcdFx0XHRcdGxldCBwcm9wcyA9IG5vdGUuZ2V0S2V5UHJvcHMoKVswXTtcblx0XHRcdFx0XHRsZXQga2V5ID0gcHJvcHMua2V5O1xuXHRcdFx0XHRcdGxldCBvY3RhdmUgPSBwcm9wcy5vY3RhdmU7XG5cdFx0XHRcdFx0bGV0IGluZGV4ID0gTm90ZURldGVjdGlvbi5nZXRJbmRleEZvck5vdGUoa2V5LCBvY3RhdmUpO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGluZGV4KVxuXHRcdFx0XHRcdHRoaXMuZHJhd19rZXlib2FyZC5kcmF3UmVkS2V5KGluZGV4IC0gOSwgZmFsc2UpXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmVzdW1lKCkge1xuXHRcdHRoaXMuc3RhcnQoKTtcblx0fVxuXG5cdHN0b3AoKSB7XG5cdFx0dGhpcy5jYW52YXMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1pbmcge1xuXHRzdGF0aWMgc3RhcnRUaW1pbmcoKSB7XG5cdFx0VGltaW5nLnN0YXJ0VGltZSA9IERhdGUubm93KCk7XG5cdFx0VGltaW5nLnBhdXNlRGVsYXkgPSAwO1xuXHR9XG5cblx0c3RhdGljIHBhdXNlKCkge1xuXHRcdFRpbWluZy5wYXVzZVN0YXJ0ID0gRGF0ZS5ub3coKVxuXHR9XG5cblx0c3RhdGljIHJlc3VtZSgpIHtcblx0XHRUaW1pbmcucGF1c2VEZWxheSArPSBEYXRlLm5vdygpIC0gVGltaW5nLnBhdXNlU3RhcnRcblx0fVxuXG5cdHN0YXRpYyBnZXRQYXVzZURlbGF5KCkge1xuXHRcdHJldHVybiBUaW1pbmcucGF1c2VEZWxheTtcblx0fVxuXG5cdHN0YXRpYyBnZXRUaW1lU2luY2VTdGFydCgpIHtcblx0XHRyZXR1cm4gRGF0ZS5ub3coKSAtIFRpbWluZy5zdGFydFRpbWUgLSB0aGlzLnBhdXNlRGVsYXlcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==