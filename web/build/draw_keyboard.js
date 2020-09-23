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
/******/ 	return __webpack_require__(__webpack_require__.s = "./web/assets/js/draw_keyboard.js");
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




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9kcmF3X2tleWJvYXJkLmpzIl0sIm5hbWVzIjpbIktleUJvYXJkRHJhd2VyIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiaSIsImRyYXdXaGl0ZUtleSIsImRyYXdCbGFja0tleSIsIm51bU9jdGF2ZXMiLCJjdXJXaGl0ZU5vdGVJbmRleCIsIm9jdGF2ZSIsIlgiLCJZIiwiV2lkdGgiLCJIZWlnaHQiLCJDb2xvcjEiLCJDb2xvcjIiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIndoaXRlS2V5SW5kZXgiLCJzaG91bGRCZVJlZCIsIkMxIiwiQzIiLCJkcmF3UmVjdFdpdGhCb3JkZXIiLCJXaGl0ZUtleUluZGV4IiwiaW5kZXgiLCJ1bmRvIiwiYmVmb3JlS2V5SW5mbyIsImFic29sdXRlVG9LZXlJbmZvIiwiYWZ0ZXJLZXlJbmZvIiwia2V5SW5mbyIsImtleUxvb2t1cCIsImlzX2JsYWNrIiwid2hpdGVfaW5kZXgiLCJfdW5kb0RyYXdSZWRLZXkiLCJBYnNvbHV0ZU5vdGVOdW0iLCJLZXlMb29rdXBUYWJsZSIsIkFycmF5IiwiYmFzZSIsIk51bU9jdGF2ZXMiLCJjb3VudGVyIiwib2N0YXZlX29mZnNldCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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LEdBQUc7QUFBOUMsU0FBM0IsQ0FYc0QsQ0FXdUI7O0FBQzdFTCxzQkFBYyxDQUFDRSxJQUFJLEdBQUcsQ0FBUixDQUFkLEdBQTJCO0FBQUNOLGtCQUFRLEVBQUUsS0FBWDtBQUFrQkMscUJBQVcsRUFBRVEsYUFBYSxHQUFHO0FBQS9DLFNBQTNCLENBWnNELENBWXdCOztBQUM5RUwsc0JBQWMsQ0FBQ0UsSUFBSSxHQUFHLEVBQVIsQ0FBZCxHQUE0QjtBQUFDTixrQkFBUSxFQUFFLElBQVg7QUFBaUJDLHFCQUFXLEVBQUVRLGFBQWEsR0FBRztBQUE5QyxTQUE1QixDQWJzRCxDQWF5Qjs7QUFDL0VMLHNCQUFjLENBQUNFLElBQUksR0FBRyxFQUFSLENBQWQsR0FBNEI7QUFBQ04sa0JBQVEsRUFBRSxLQUFYO0FBQWtCQyxxQkFBVyxFQUFFUSxhQUFhLEdBQUc7QUFBL0MsU0FBNUIsQ0Fkc0QsQ0FjeUI7O0FBRS9FSCxZQUFJLElBQUksRUFBUjtBQUNBOztBQUVELGFBQU9GLGNBQWMsQ0FBQ0QsZUFBRCxDQUFyQjtBQUNBOzs7OztBQUVGIiwiZmlsZSI6ImRyYXdfa2V5Ym9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93ZWIvYXNzZXRzL2pzL2RyYXdfa2V5Ym9hcmQuanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlCb2FyZERyYXdlciB7XG5cblxuXHRjb25zdHJ1Y3RvcihjYW52YXMpIHtcblx0XHR0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cdFx0dGhpcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcblx0XHR0aGlzLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG5cdH1cblxuXHRpbml0KCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgNTI7IGkrKykge1xuXHRcdFx0dGhpcy5kcmF3V2hpdGVLZXkoaSwgZmFsc2UpO1xuXHRcdH1cblxuXHRcdHRoaXMuZHJhd0JsYWNrS2V5KDAsIGZhbHNlKTtcblxuXHRcdC8vIG5vdyBkcmF3IGFsbCB0aGUgcmVzdCBvZiB0aGUgYmxhY2sga2V5cy4uLlxuXHRcdC8vIGxvb3AgdGhyb3VnaCBhbGwgNyBvY3RhdmVzXG5cdFx0bGV0IG51bU9jdGF2ZXMgPSA3O1xuXHRcdGxldCBjdXJXaGl0ZU5vdGVJbmRleCA9IDI7XG5cblx0XHRmb3IgKGxldCBvY3RhdmUgPSAwOyBvY3RhdmUgPCBudW1PY3RhdmVzOyBvY3RhdmUrKykge1xuXHRcdFx0Ly8gYW5kIGRyYXcgNSBibGFjayBub3RlcyBwZXIgb2N0YXZlLi4uXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuXHRcdFx0XHR0aGlzLmRyYXdCbGFja0tleShjdXJXaGl0ZU5vdGVJbmRleCwgZmFsc2UpO1xuXHRcdFx0XHRpZiAoaSA9PSAxIHx8IGkgPT0gNClcblx0XHRcdFx0XHRjdXJXaGl0ZU5vdGVJbmRleCArPSAyO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0Y3VyV2hpdGVOb3RlSW5kZXggKz0gMTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRkcmF3UmVjdFdpdGhCb3JkZXIoWCwgWSwgV2lkdGgsIEhlaWdodCwgQ29sb3IxLCBDb2xvcjIpIHtcblxuXHRcdC8vZHJhdyBib3JkZXJcblx0XHR0aGlzLmN0eC5maWxsU3R5bGUgPSBDb2xvcjE7XG5cdFx0dGhpcy5jdHguZmlsbFJlY3QoWCwgWSwgV2lkdGgsIEhlaWdodCk7XG5cblx0XHQvL2RyYXcgaW5zaWRlXG5cdFx0dGhpcy5jdHguZmlsbFN0eWxlID0gQ29sb3IyO1xuXHRcdHRoaXMuY3R4LmZpbGxSZWN0KFggKyAxLCBZICsgMSwgV2lkdGggLSAyLCBIZWlnaHQgLSAyKTtcblx0fVxuXG5cdGRyYXdCbGFja0tleSh3aGl0ZUtleUluZGV4LCBzaG91bGRCZVJlZCA9IGZhbHNlKSB7XG5cblx0XHRpZiAoIXNob3VsZEJlUmVkKSB7XG5cblx0XHRcdGxldCBDMSA9IFwicmdiKDAsMCwwKVwiO1x0XHRcdC8vIGJsYWNrXG5cdFx0XHRsZXQgQzIgPSBcInJnYig1MCw1MCw1MClcIjtcdFx0Ly8gPz9cblxuXHRcdFx0dGhpcy5kcmF3UmVjdFdpdGhCb3JkZXIoKCh3aGl0ZUtleUluZGV4ICsgMSkgKiAodGhpcy53aWR0aCAvIDUyKSkgLSAoKHRoaXMud2lkdGggLyA1MikgKiAwLjc1IC8gMiksIDAsICh0aGlzLndpZHRoIC8gNTIpICogMC43NSwgdGhpcy5oZWlnaHQgKiAwLjY2LCBDMSwgQzIpO1xuXG5cdFx0fVxuXHRcdGVsc2Uge1xuXG5cdFx0XHRsZXQgQzEgPSBcInJnYigwLDAsMClcIjtcdFx0XHQvLyBibGFja1xuXHRcdFx0bGV0IEMyID0gXCJyZ2IoMjU1LDAsMClcIjtcdFx0Ly8gcmVkXG5cblx0XHRcdHRoaXMuZHJhd1JlY3RXaXRoQm9yZGVyKCgod2hpdGVLZXlJbmRleCArIDEpICogKHRoaXMud2lkdGggLyA1MikpIC0gKCh0aGlzLndpZHRoIC8gNTIpICogMC43NSAvIDIpLCAwLCAodGhpcy53aWR0aCAvIDUyKSAqIDAuNzUsIHRoaXMuaGVpZ2h0ICogMC42NiwgQzEsIEMyKTtcblxuXHRcdH1cblx0fVxuXG5cdGRyYXdXaGl0ZUtleShXaGl0ZUtleUluZGV4LCBzaG91bGRCZVJlZCA9IGZhbHNlKSB7XG5cblx0XHRpZiAoIXNob3VsZEJlUmVkKSB7XG5cblx0XHRcdGxldCBDMSA9IFwicmdiKDAsMCwwKVwiO1x0XHRcdC8vIGxiYWNrXG5cdFx0XHRsZXQgQzIgPSBcInJnYigyNTUsMjU1LDI1NSlcIjtcdC8vIHdoaXRlXG5cblx0XHRcdHRoaXMuZHJhd1JlY3RXaXRoQm9yZGVyKChXaGl0ZUtleUluZGV4ICogKHRoaXMud2lkdGggLyA1MikpLCAwLCAodGhpcy53aWR0aCAvIDUyKSwgdGhpcy5oZWlnaHQsIEMxLCBDMik7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRsZXQgQzEgPSBcInJnYigwLDAsMClcIjtcdFx0XHQvLyBibGFja1xuXHRcdFx0bGV0IEMyID0gXCJyZ2IoMjU1LDAsMClcIjtcdFx0Ly8gcmVkXG5cblx0XHRcdHRoaXMuZHJhd1JlY3RXaXRoQm9yZGVyKChXaGl0ZUtleUluZGV4ICogKHRoaXMud2lkdGggLyA1MikpLCAwLCAodGhpcy53aWR0aCAvIDUyKSwgdGhpcy5oZWlnaHQsIEMxLCBDMik7XG5cblx0XHR9XG5cdH1cblxuXHRkcmF3UmVkS2V5KGluZGV4LCB1bmRvKSB7XG5cdFx0bGV0IGJlZm9yZUtleUluZm8gPSB0aGlzLmFic29sdXRlVG9LZXlJbmZvKGluZGV4IC0gMSk7XG5cdFx0bGV0IGFmdGVyS2V5SW5mbyA9IHRoaXMuYWJzb2x1dGVUb0tleUluZm8oaW5kZXggKyAxKTtcblx0XHRsZXQga2V5SW5mbyA9IHRoaXMuYWJzb2x1dGVUb0tleUluZm8oaW5kZXggKyAxKTtcblxuXHRcdGxldCBrZXlMb29rdXAgPSB0aGlzLmFic29sdXRlVG9LZXlJbmZvKGluZGV4KTtcblx0XHRpZiAoa2V5TG9va3VwLmlzX2JsYWNrKSB7XG5cdFx0XHRpZiAoYmVmb3JlS2V5SW5mby5pc19ibGFjaykge1xuXHRcdFx0XHR0aGlzLmRyYXdCbGFja0tleShiZWZvcmVLZXlJbmZvLndoaXRlX2luZGV4LCBmYWxzZSlcblx0XHRcdH1cblx0XHRcdGlmIChhZnRlcktleUluZm8uaXNfYmxhY2spIHtcblx0XHRcdFx0dGhpcy5kcmF3QmxhY2tLZXkoYWZ0ZXJLZXlJbmZvLndoaXRlX2luZGV4LCBmYWxzZSlcblx0XHRcdH1cblx0XHRcdHRoaXMuZHJhd0JsYWNrS2V5KGtleUxvb2t1cC53aGl0ZV9pbmRleCwgIXVuZG8pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRyYXdXaGl0ZUtleShrZXlMb29rdXAud2hpdGVfaW5kZXgsICF1bmRvKTtcblx0XHRcdGlmIChiZWZvcmVLZXlJbmZvLmlzX2JsYWNrKSB7XG5cdFx0XHRcdHRoaXMuZHJhd0JsYWNrS2V5KGJlZm9yZUtleUluZm8ud2hpdGVfaW5kZXgsIGZhbHNlKVxuXHRcdFx0fVxuXHRcdFx0aWYgKGFmdGVyS2V5SW5mby5pc19ibGFjaykge1xuXHRcdFx0XHR0aGlzLmRyYXdCbGFja0tleShhZnRlcktleUluZm8ud2hpdGVfaW5kZXgsIGZhbHNlKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHVuZG9EcmF3UmVkS2V5KGluZGV4KSB7XG5cdFx0dGhpcy5fdW5kb0RyYXdSZWRLZXkoaW5kZXgtMSlcblx0XHR0aGlzLl91bmRvRHJhd1JlZEtleShpbmRleClcblx0XHR0aGlzLl91bmRvRHJhd1JlZEtleShpbmRleCsxKVxuXHR9XG5cblx0X3VuZG9EcmF3UmVkS2V5KGluZGV4KSB7XG5cdFx0bGV0IGtleUxvb2t1cCA9IHRoaXMuYWJzb2x1dGVUb0tleUluZm8oaW5kZXgpO1xuXHRcdGlmIChrZXlMb29rdXAuaXNfYmxhY2spIHtcblx0XHRcdHRoaXMuZHJhd0JsYWNrS2V5KGtleUxvb2t1cC53aGl0ZV9pbmRleCwgZmFsc2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRyYXdXaGl0ZUtleShrZXlMb29rdXAud2hpdGVfaW5kZXgsIGZhbHNlKTtcblx0XHR9XG5cdH1cblxuXHRhYnNvbHV0ZVRvS2V5SW5mbyhBYnNvbHV0ZU5vdGVOdW0pIHtcblxuXHRcdHZhciBLZXlMb29rdXBUYWJsZSA9IG5ldyBBcnJheSg4OCk7XG5cblx0XHRLZXlMb29rdXBUYWJsZVswXSA9IHtpc19ibGFjazogZmFsc2UsIHdoaXRlX2luZGV4OiAwfTtcdFx0XHQvLyBhXG5cdFx0S2V5TG9va3VwVGFibGVbMV0gPSB7aXNfYmxhY2s6IHRydWUsIHdoaXRlX2luZGV4OiAwfTtcdFx0XHQvLyBhI1xuXHRcdEtleUxvb2t1cFRhYmxlWzJdID0ge2lzX2JsYWNrOiBmYWxzZSwgd2hpdGVfaW5kZXg6IDF9O1x0XHRcdC8vIGJcblx0XHRsZXQgYmFzZSA9IDM7XG5cblx0XHRsZXQgTnVtT2N0YXZlcyA9IDhcblx0XHRmb3IgKGxldCBjb3VudGVyID0gMDsgY291bnRlciA8IE51bU9jdGF2ZXM7IGNvdW50ZXIrKykge1xuXHRcdFx0bGV0IG9jdGF2ZV9vZmZzZXQgPSA3ICogY291bnRlcjtcblxuXHRcdFx0S2V5TG9va3VwVGFibGVbYmFzZSArIDBdID0ge2lzX2JsYWNrOiBmYWxzZSwgd2hpdGVfaW5kZXg6IG9jdGF2ZV9vZmZzZXQgKyAyfTsgLy8gY1xuXHRcdFx0S2V5TG9va3VwVGFibGVbYmFzZSArIDFdID0ge2lzX2JsYWNrOiB0cnVlLCB3aGl0ZV9pbmRleDogb2N0YXZlX29mZnNldCArIDJ9OyAvLyBjI1xuXHRcdFx0S2V5TG9va3VwVGFibGVbYmFzZSArIDJdID0ge2lzX2JsYWNrOiBmYWxzZSwgd2hpdGVfaW5kZXg6IG9jdGF2ZV9vZmZzZXQgKyAzfTsgLy8gZFxuXHRcdFx0S2V5TG9va3VwVGFibGVbYmFzZSArIDNdID0ge2lzX2JsYWNrOiB0cnVlLCB3aGl0ZV9pbmRleDogb2N0YXZlX29mZnNldCArIDN9OyAvLyBkI1xuXHRcdFx0S2V5TG9va3VwVGFibGVbYmFzZSArIDRdID0ge2lzX2JsYWNrOiBmYWxzZSwgd2hpdGVfaW5kZXg6IG9jdGF2ZV9vZmZzZXQgKyA0fTsgLy8gZVxuXHRcdFx0S2V5TG9va3VwVGFibGVbYmFzZSArIDVdID0ge2lzX2JsYWNrOiBmYWxzZSwgd2hpdGVfaW5kZXg6IG9jdGF2ZV9vZmZzZXQgKyA1fTsgLy8gZlxuXHRcdFx0S2V5TG9va3VwVGFibGVbYmFzZSArIDZdID0ge2lzX2JsYWNrOiB0cnVlLCB3aGl0ZV9pbmRleDogb2N0YXZlX29mZnNldCArIDV9OyAvLyBmI1xuXHRcdFx0S2V5TG9va3VwVGFibGVbYmFzZSArIDddID0ge2lzX2JsYWNrOiBmYWxzZSwgd2hpdGVfaW5kZXg6IG9jdGF2ZV9vZmZzZXQgKyA2fTsgLy8gZ1xuXHRcdFx0S2V5TG9va3VwVGFibGVbYmFzZSArIDhdID0ge2lzX2JsYWNrOiB0cnVlLCB3aGl0ZV9pbmRleDogb2N0YXZlX29mZnNldCArIDZ9OyAvLyBnI1xuXHRcdFx0S2V5TG9va3VwVGFibGVbYmFzZSArIDldID0ge2lzX2JsYWNrOiBmYWxzZSwgd2hpdGVfaW5kZXg6IG9jdGF2ZV9vZmZzZXQgKyA3fTsgLy8gYVxuXHRcdFx0S2V5TG9va3VwVGFibGVbYmFzZSArIDEwXSA9IHtpc19ibGFjazogdHJ1ZSwgd2hpdGVfaW5kZXg6IG9jdGF2ZV9vZmZzZXQgKyA3fTsgIC8vIGEjXG5cdFx0XHRLZXlMb29rdXBUYWJsZVtiYXNlICsgMTFdID0ge2lzX2JsYWNrOiBmYWxzZSwgd2hpdGVfaW5kZXg6IG9jdGF2ZV9vZmZzZXQgKyA4fTsgLy8gYlxuXG5cdFx0XHRiYXNlICs9IDEyO1xuXHRcdH1cblxuXHRcdHJldHVybiBLZXlMb29rdXBUYWJsZVtBYnNvbHV0ZU5vdGVOdW1dO1xuXHR9XG59XG4vKlxuLy8gY2FudmFzIFx0XHQtIEhUTUw1IGNhbnZhcyBlbGVtZW50XG4vLyBSZWRLZXlBcnJheSAgLSBhcnJheSBvZiBrZXlzIHRvIGNvbG9yIHJlZCAoMCA9IGxvdyBhLCA4NyA9IGhpZ2ggYywgcHJvY2VlZGluZyBjaHJvbWF0aWNhbGx5KVxuZnVuY3Rpb24gRHJhd0tleWJvYXJkKGNhbnZhcywgUmVkS2V5QXJyYXkpIHtcblxuXHQvLyBnZW5lcmFsIGNoYXJhY3RlcmlzdGljcyBvZiBhIHBpYW5vXG5cblx0dmFyIFRPVEFMX0tFWVMgPSA4ODtcblx0dmFyIE5VTV9XSElURV9LRVlTID0gNTI7XG5cdHZhciBOVU1fQkxBQ0tfS0VZUyA9IFRPVEFMX0tFWVMgLSBOVU1fV0hJVEVfS0VZUztcblxuXHR2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuXHR2YXIgWF9CT1JERVIgPSAwO1xuXHR2YXIgWV9CT1JERVIgPSAwO1xuXG5cdHZhciB3aWR0aCA9IGNhbnZhcy53aWR0aCAtIChYX0JPUkRFUiAqIDIpO1xuXHR2YXIgaGVpZ2h0ID0gY2FudmFzLmhlaWdodCAtIChZX0JPUkRFUiAqIDIpO1xuXG5cdHZhciBXSElURV9LRVlfV0lEVEggPSAod2lkdGggLyBOVU1fV0hJVEVfS0VZUyk7XG5cdHZhciBXSElURV9LRVlfSEVJR0hUID0gaGVpZ2h0O1xuXG5cdHZhciBCTEFDS19LRVlfV0lEVEggPSBXSElURV9LRVlfV0lEVEggKiAuNzVcblx0dmFyIEJMQUNLX0tFWV9IRUlHSFQgPSBoZWlnaHQgKiAuNjZcblxuXHRmdW5jdGlvbiBEcmF3UmVjdFdpdGhCb3JkZXIoWCwgWSwgV2lkdGgsIEhlaWdodCwgQ29sb3IxLCBDb2xvcjIpIHtcblxuXHRcdC8vZHJhdyBib3JkZXJcblx0XHRjdHguZmlsbFN0eWxlID0gQ29sb3IxO1xuXHRcdGN0eC5maWxsUmVjdChYLCBZLCBXaWR0aCwgSGVpZ2h0KTtcblxuXHRcdC8vZHJhdyBpbnNpZGVcblx0XHRjdHguZmlsbFN0eWxlID0gQ29sb3IyO1xuXHRcdGN0eC5maWxsUmVjdChYICsgMSwgWSArIDEsIFdpZHRoIC0gMiwgSGVpZ2h0IC0gMik7XG5cblx0fVxuXG5cdC8vIGRyYXdzIGEgYmFjayBrZXksIGJhc2VkIG9uIHdoaXRlS2V5SW5kZXgsIHdoZXJlIDAgPD0gV2hpdGVLZXlJbmRleCA8IDUyXG5cdGZ1bmN0aW9uIGRyYXdCbGFja0tleSh3aGl0ZUtleUluZGV4LCBzaG91bGRCZVJlZCA9IGZhbHNlKSB7XG5cblx0XHRpZiAoIXNob3VsZEJlUmVkKSB7XG5cblx0XHRcdGxldCBDMSA9IFwicmdiKDAsMCwwKVwiO1x0XHRcdC8vIGJsYWNrXG5cdFx0XHRsZXQgQzIgPSBcInJnYig1MCw1MCw1MClcIjtcdFx0Ly8gPz9cblxuXHRcdFx0RHJhd1JlY3RXaXRoQm9yZGVyKFhfQk9SREVSICsgKCh3aGl0ZUtleUluZGV4ICsgMSkgKiBXSElURV9LRVlfV0lEVEgpIC0gKEJMQUNLX0tFWV9XSURUSCAvIDIpLCBZX0JPUkRFUiwgQkxBQ0tfS0VZX1dJRFRILCBCTEFDS19LRVlfSEVJR0hULCBDMSwgQzIpO1xuXG5cdFx0fVxuXHRcdGVsc2Uge1xuXG5cdFx0XHRsZXQgQzEgPSBcInJnYigwLDAsMClcIjtcdFx0XHQvLyBibGFja1xuXHRcdFx0bGV0IEMyID0gXCJyZ2IoMjU1LDAsMClcIjtcdFx0Ly8gcmVkXG5cblx0XHRcdERyYXdSZWN0V2l0aEJvcmRlcihYX0JPUkRFUiArICgod2hpdGVLZXlJbmRleCArIDEpICogV0hJVEVfS0VZX1dJRFRIKSAtIChCTEFDS19LRVlfV0lEVEggLyAyKSwgWV9CT1JERVIsIEJMQUNLX0tFWV9XSURUSCwgQkxBQ0tfS0VZX0hFSUdIVCwgQzEsIEMyKTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gRHJhd1doaXRlS2V5KFdoaXRlS2V5SW5kZXgsIHNob3VsZEJlUmVkID0gZmFsc2UpIHtcblxuXHRcdGlmICghc2hvdWxkQmVSZWQpIHtcblxuXHRcdFx0bGV0IEMxID0gXCJyZ2IoMCwwLDApXCI7XHRcdFx0Ly8gbGJhY2tcblx0XHRcdGxldCBDMiA9IFwicmdiKDI1NSwyNTUsMjU1KVwiO1x0Ly8gd2hpdGVcblxuXHRcdFx0RHJhd1JlY3RXaXRoQm9yZGVyKFhfQk9SREVSICsgKFdoaXRlS2V5SW5kZXggKiBXSElURV9LRVlfV0lEVEgpLCBZX0JPUkRFUiwgV0hJVEVfS0VZX1dJRFRILCBoZWlnaHQsIEMxLCBDMik7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRsZXQgQzEgPSBcInJnYigwLDAsMClcIjtcdFx0XHQvLyBibGFja1xuXHRcdFx0bGV0IEMyID0gXCJyZ2IoMjU1LDAsMClcIjtcdFx0Ly8gcmVkXG5cblx0XHRcdERyYXdSZWN0V2l0aEJvcmRlcihYX0JPUkRFUiArIChXaGl0ZUtleUluZGV4ICogV0hJVEVfS0VZX1dJRFRIKSwgWV9CT1JERVIsIFdISVRFX0tFWV9XSURUSCwgaGVpZ2h0LCBDMSwgQzIpO1xuXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24ga2V5VHlwZShpc0JsYWNrLCBXaGl0ZV9JbmRleCkge1xuXHRcdHRoaXMuaXNCbGFjayA9IGlzQmxhY2s7XG5cdFx0dGhpcy5XaGl0ZV9JbmRleCA9IFdoaXRlX0luZGV4XG5cdH1cblxuXHRmdW5jdGlvbiBBYnNvbHV0ZVRvS2V5SW5mbyhBYnNvbHV0ZU5vdGVOdW0pIHtcblxuXHRcdHZhciBLZXlMb29rdXBUYWJsZSA9IG5ldyBBcnJheShUT1RBTF9LRVlTKTtcblxuXHRcdEtleUxvb2t1cFRhYmxlWzBdID0gbmV3IGtleVR5cGUoZmFsc2UsIDApO1x0XHRcdC8vIGFcblx0XHRLZXlMb29rdXBUYWJsZVsxXSA9IG5ldyBrZXlUeXBlKHRydWUsIDApO1x0XHRcdC8vIGEjXG5cdFx0S2V5TG9va3VwVGFibGVbMl0gPSBuZXcga2V5VHlwZShmYWxzZSwgMSk7XHRcdFx0Ly8gYlxuXHRcdGxldCBiYXNlID0gMztcblxuXHRcdGxldCBOdW1PY3RhdmVzID0gOFxuXHRcdGZvciAobGV0IGNvdW50ZXIgPSAwOyBjb3VudGVyIDwgTnVtT2N0YXZlczsgY291bnRlcisrKSB7XG5cdFx0XHRsZXQgb2N0YXZlX29mZnNldCA9IDcgKiBjb3VudGVyO1xuXG5cdFx0XHRLZXlMb29rdXBUYWJsZVtiYXNlICsgMF0gPSBuZXcga2V5VHlwZShmYWxzZSwgb2N0YXZlX29mZnNldCArIDIpOyAvLyBjXG5cdFx0XHRLZXlMb29rdXBUYWJsZVtiYXNlICsgMV0gPSBuZXcga2V5VHlwZSh0cnVlLCBvY3RhdmVfb2Zmc2V0ICsgMik7IC8vIGMjXG5cdFx0XHRLZXlMb29rdXBUYWJsZVtiYXNlICsgMl0gPSBuZXcga2V5VHlwZShmYWxzZSwgb2N0YXZlX29mZnNldCArIDMpOyAvLyBkXG5cdFx0XHRLZXlMb29rdXBUYWJsZVtiYXNlICsgM10gPSBuZXcga2V5VHlwZSh0cnVlLCBvY3RhdmVfb2Zmc2V0ICsgMyk7IC8vIGQjXG5cdFx0XHRLZXlMb29rdXBUYWJsZVtiYXNlICsgNF0gPSBuZXcga2V5VHlwZShmYWxzZSwgb2N0YXZlX29mZnNldCArIDQpOyAvLyBlXG5cdFx0XHRLZXlMb29rdXBUYWJsZVtiYXNlICsgNV0gPSBuZXcga2V5VHlwZShmYWxzZSwgb2N0YXZlX29mZnNldCArIDUpOyAvLyBmXG5cdFx0XHRLZXlMb29rdXBUYWJsZVtiYXNlICsgNl0gPSBuZXcga2V5VHlwZSh0cnVlLCBvY3RhdmVfb2Zmc2V0ICsgNSk7IC8vIGYjXG5cdFx0XHRLZXlMb29rdXBUYWJsZVtiYXNlICsgN10gPSBuZXcga2V5VHlwZShmYWxzZSwgb2N0YXZlX29mZnNldCArIDYpOyAvLyBnXG5cdFx0XHRLZXlMb29rdXBUYWJsZVtiYXNlICsgOF0gPSBuZXcga2V5VHlwZSh0cnVlLCBvY3RhdmVfb2Zmc2V0ICsgNik7IC8vIGcjXG5cdFx0XHRLZXlMb29rdXBUYWJsZVtiYXNlICsgOV0gPSBuZXcga2V5VHlwZShmYWxzZSwgb2N0YXZlX29mZnNldCArIDcpOyAvLyBhXG5cdFx0XHRLZXlMb29rdXBUYWJsZVtiYXNlICsgMTBdID0gbmV3IGtleVR5cGUodHJ1ZSwgb2N0YXZlX29mZnNldCArIDcpICAvLyBhI1xuXHRcdFx0S2V5TG9va3VwVGFibGVbYmFzZSArIDExXSA9IG5ldyBrZXlUeXBlKGZhbHNlLCBvY3RhdmVfb2Zmc2V0ICsgOCk7IC8vIGJcblxuXHRcdFx0YmFzZSArPSAxMjtcblx0XHR9XG5cblx0XHRyZXR1cm4gS2V5TG9va3VwVGFibGVbQWJzb2x1dGVOb3RlTnVtXTtcblx0fVxuXG5cblx0Ly8ganVzdCBkcmF3IGluIGFsbCB0aGUgd2hpdGUga2V5cyB0byBiZWdpbiB3aXRoLi4uXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgTlVNX1dISVRFX0tFWVM7IGkrKykge1xuXHRcdERyYXdXaGl0ZUtleShpLCBmYWxzZSk7XG5cdH1cblxuXG5cdC8vIG5vdyBkcmF3IHNwZWNpYWxseSB3aGl0ZSBrZXlzIHRoYXQgbmVlZCB0byBiZSByZWQuLi5cblx0Ly8ganVzdCBsb29wIHRocm91Z2ggYWxsIHRoZSBSZWRLZXlBcnJheVxuXHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDw9IFRPVEFMX0tFWVM7IGluZGV4KyspIHtcblx0XHQvLyBhbmQgaWYgd2UgZmluZCBhbnkgd2hpdGUga2V5cyB0aGF0IGFyZSBzdXBwb3NlZCB0byBiZSByZWQsIHRoZW4gZHJhdyB0aGVtIGluIHJlZC4uLlxuXHRcdGlmIChSZWRLZXlBcnJheS5pbmNsdWRlcyhpbmRleCkpIHtcblx0XHRcdGxldCBLZXlMb29rdXAgPSBBYnNvbHV0ZVRvS2V5SW5mbyhpbmRleCk7XG5cdFx0XHRpZiAoIUtleUxvb2t1cC5pc0JsYWNrKVxuXHRcdFx0XHREcmF3V2hpdGVLZXkoS2V5TG9va3VwLldoaXRlX0luZGV4LCB0cnVlKTtcblx0XHR9XG5cdH1cblxuXHQvLyBkcmF3IGluIGxvd2VzdCBhIyBtYW51YWxseSAobWFraW5nIHN1cmUgdG8gZHJhdyBpdCByZWQgaWYgaXQgc2hvdWxkIGJlKVxuXHRsZXQgTG93ZXN0U2hvdWxkQmVSZWQgPSBSZWRLZXlBcnJheS5pbmNsdWRlcygxKTtcblx0ZHJhd0JsYWNrS2V5KDAsIExvd2VzdFNob3VsZEJlUmVkKTtcblxuXHQvLyBub3cgZHJhdyBhbGwgdGhlIHJlc3Qgb2YgdGhlIGJsYWNrIGtleXMuLi5cblx0Ly8gbG9vcCB0aHJvdWdoIGFsbCA3IG9jdGF2ZXNcblx0bGV0IG51bU9jdGF2ZXMgPSA3O1xuXHRsZXQgY3VyV2hpdGVOb3RlSW5kZXggPSAyO1xuXG5cdGZvciAobGV0IG9jdGF2ZSA9IDA7IG9jdGF2ZSA8IG51bU9jdGF2ZXM7IG9jdGF2ZSsrKSB7XG5cdFx0Ly8gYW5kIGRyYXcgNSBibGFjayBub3RlcyBwZXIgb2N0YXZlLi4uXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcblx0XHRcdGRyYXdCbGFja0tleShjdXJXaGl0ZU5vdGVJbmRleCwgZmFsc2UpO1xuXHRcdFx0aWYgKGkgPT0gMSB8fCBpID09IDQpXG5cdFx0XHRcdGN1cldoaXRlTm90ZUluZGV4ICs9IDI7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGN1cldoaXRlTm90ZUluZGV4ICs9IDE7XG5cdFx0fVxuXHR9XG5cblxuXHQvLyBub3cgZHJhdyBzcGVjaWFsbHkgYmxhY2sga2V5cyB0aGF0IG5lZWQgdG8gYmUgcmVkLi4uXG5cdC8vIGp1c3QgbG9vcCB0aHJvdWdoIGFsbCB0aGUgUmVkS2V5QXJyYXlcblx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8PSA4ODsgaW5kZXgrKykge1xuXHRcdC8vIGFuZCBpZiB3ZSBmaW5kIGFueSBibGFjayBrZXlzIHRoYXQgYXJlIHN1cHBvc2VkIHRvIGJlIHJlZCwgdGhlbiBkcmF3IHRoZW0gaW4gcmVkLi4uXG5cdFx0aWYgKFJlZEtleUFycmF5LmluY2x1ZGVzKGluZGV4KSkge1xuXHRcdFx0bGV0IEtleUxvb2t1cCA9IEFic29sdXRlVG9LZXlJbmZvKGluZGV4KTtcblx0XHRcdGlmIChLZXlMb29rdXAuaXNCbGFjaylcblx0XHRcdFx0ZHJhd0JsYWNrS2V5KEtleUxvb2t1cC5XaGl0ZV9JbmRleCwgdHJ1ZSk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0ZHJhd0tleWJvYXJkOiBEcmF3S2V5Ym9hcmRcbn1cbiovXG4iXSwic291cmNlUm9vdCI6IiJ9