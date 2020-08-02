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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var NoteHinter =
/*#__PURE__*/
function () {
  function NoteHinter() {
    _classCallCheck(this, NoteHinter);

    this.label = document.getElementById('note_hint_text');
    this.img = document.getElementById('note_hint_note');
  }

  _createClass(NoteHinter, [{
    key: "hintNext",
    value: function hintNext(instrument, key, octave) {
      var hintKey = key[0];
      var keyForPath = key[0];

      if (key.length > 1) {
        hintKey += "<sup>" + key[1].replace("B", '♭') + "</sup>";
        keyForPath += key[1].replace('#', 'sharp').replace('B', 'b');
      }

      this.label.innerHTML = hintKey + octave;
      this.img.style.display = 'block';
      this.img.src = '../../assets/images/' + _instruments__WEBPACK_IMPORTED_MODULE_0__["default"].getInstrumentFingering(instrument) + '/' + octave + '/' + keyForPath + '.png';
    }
  }, {
    key: "stop",
    value: function stop() {
      this.label.innerHTML = "";
      this.img.style.display = "none";
    }
  }]);

  return NoteHinter;
}();



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9pbnN0cnVtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi93ZWIvYXNzZXRzL2pzL25vdGVfaGludGVyLmpzIl0sIm5hbWVzIjpbImdldEluc3RydW1lbnRLZXlPZmZzZXQiLCJpbnN0cnVtZW50Iiwia2V5X29mZnNldHMiLCJnZXRJbnN0cnVtZW50RmluZ2VyaW5nIiwiZmluZ2VyaW5nX21hcCIsIk5vdGVIaW50ZXIiLCJsYWJlbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbWciLCJrZXkiLCJvY3RhdmUiLCJoaW50S2V5Iiwia2V5Rm9yUGF0aCIsImxlbmd0aCIsInJlcGxhY2UiLCJpbm5lckhUTUwiLCJzdHlsZSIsImRpc3BsYXkiLCJzcmMiLCJJbnN0cnVtZW50cyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBLFNBQVNBLHNCQUFULENBQWdDQyxVQUFoQyxFQUE0QztBQUMzQyxNQUFJQyxXQUFXLEdBQUc7QUFDakIsY0FBVSxFQURPO0FBRWpCLGVBQVcsQ0FBQyxFQUZLO0FBR2pCLGdCQUFZLENBSEs7QUFJakIscUJBQWlCLEVBSkE7QUFLakIseUJBQXFCLENBTEo7QUFNakIsc0JBQWtCLENBTkQ7QUFPakIsdUJBQW1CLEVBUEY7QUFRakI7QUFDQSxtQkFBZSxDQVRFO0FBVWpCLGVBQVcsQ0FWTTtBQVdqQixpQkFBYSxDQUFDLEVBWEc7QUFZakIsYUFBUztBQVpRLEdBQWxCO0FBY0EsU0FBT0EsV0FBVyxDQUFDRCxVQUFELENBQWxCO0FBQ0E7O0FBRUQsU0FBU0Usc0JBQVQsQ0FBZ0NGLFVBQWhDLEVBQTRDO0FBQzNDLE1BQUlHLGFBQWEsR0FBRztBQUNuQixjQUFVLFFBRFM7QUFFbkIsZUFBVyxRQUZRO0FBR25CLGdCQUFZLFVBSE87QUFJbkIscUJBQWlCLFVBSkU7QUFLbkIseUJBQXFCLFdBTEY7QUFNbkIsc0JBQWtCLFdBTkM7QUFPbkIsdUJBQW1CLFdBUEE7QUFRbkIsMEJBQXNCLFdBUkg7QUFTbkIsbUJBQWUsU0FUSTtBQVVuQixlQUFXLFNBVlE7QUFXbkIsaUJBQWEsV0FYTTtBQVluQixvQkFBZ0IsY0FaRztBQWFuQixhQUFTO0FBYlUsR0FBcEI7QUFlQSxTQUFPQSxhQUFhLENBQUNILFVBQUQsQ0FBcEI7QUFDQTs7QUFJYztBQUNkRCx3QkFBc0IsRUFBRUEsc0JBRFY7QUFFZEcsd0JBQXNCLEVBQUVBO0FBRlYsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7O0lBRXFCRSxVOzs7QUFFcEIsd0JBQWM7QUFBQTs7QUFDYixTQUFLQyxLQUFMLEdBQWFDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixnQkFBeEIsQ0FBYjtBQUNBLFNBQUtDLEdBQUwsR0FBV0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixDQUFYO0FBQ0E7Ozs7NkJBRVFQLFUsRUFBWVMsRyxFQUFLQyxNLEVBQVE7QUFDakMsVUFBSUMsT0FBTyxHQUFHRixHQUFHLENBQUMsQ0FBRCxDQUFqQjtBQUNBLFVBQUlHLFVBQVUsR0FBR0gsR0FBRyxDQUFDLENBQUQsQ0FBcEI7O0FBQ0EsVUFBSUEsR0FBRyxDQUFDSSxNQUFKLEdBQWEsQ0FBakIsRUFBb0I7QUFDbkJGLGVBQU8sSUFBSSxVQUFVRixHQUFHLENBQUMsQ0FBRCxDQUFILENBQU9LLE9BQVAsQ0FBZSxHQUFmLEVBQW9CLEdBQXBCLENBQVYsR0FBcUMsUUFBaEQ7QUFDQUYsa0JBQVUsSUFBSUgsR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPSyxPQUFQLENBQWUsR0FBZixFQUFvQixPQUFwQixFQUE2QkEsT0FBN0IsQ0FBcUMsR0FBckMsRUFBMEMsR0FBMUMsQ0FBZDtBQUNBOztBQUNELFdBQUtULEtBQUwsQ0FBV1UsU0FBWCxHQUF1QkosT0FBTyxHQUFHRCxNQUFqQztBQUNBLFdBQUtGLEdBQUwsQ0FBU1EsS0FBVCxDQUFlQyxPQUFmLEdBQXlCLE9BQXpCO0FBQ0EsV0FBS1QsR0FBTCxDQUFTVSxHQUFULEdBQWUseUJBQXlCQyxvREFBVyxDQUFDakIsc0JBQVosQ0FBbUNGLFVBQW5DLENBQXpCLEdBQTBFLEdBQTFFLEdBQWdGVSxNQUFoRixHQUF5RixHQUF6RixHQUNkRSxVQURjLEdBQ0QsTUFEZDtBQUVBOzs7MkJBRU07QUFDTixXQUFLUCxLQUFMLENBQVdVLFNBQVgsR0FBdUIsRUFBdkI7QUFDQSxXQUFLUCxHQUFMLENBQVNRLEtBQVQsQ0FBZUMsT0FBZixHQUF5QixNQUF6QjtBQUNBIiwiZmlsZSI6Im5vdGVfaGludGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vd2ViL2Fzc2V0cy9qcy9ub3RlX2hpbnRlci5qc1wiKTtcbiIsImZ1bmN0aW9uIGdldEluc3RydW1lbnRLZXlPZmZzZXQoaW5zdHJ1bWVudCkge1xuXHRsZXQga2V5X29mZnNldHMgPSB7XG5cdFx0J2d1aXRhcic6IDEyLFxuXHRcdCdwaWNjb2xvJzogLTEyLFxuXHRcdCdjbGFyaW5ldCc6IDIsXG5cdFx0J2Jhc3NfY2xhcmluZXQnOiAxNCxcblx0XHQnc29wcmFub19zYXhvcGhvbmUnOiAyLFxuXHRcdCdhbHRvX3NheG9waG9uZSc6IDksXG5cdFx0J3Rlbm9yX3NheG9waG9uZSc6IDE0LFxuXHRcdC8vJ2Jhcml0b25lX3NheG9waG9uZSc6IDIxLFxuXHRcdCdmcmVuY2hfaG9ybic6IDcsXG5cdFx0J3RydW1wZXQnOiAyLFxuXHRcdCd4eWxvcGhvbmUnOiAtMTIsXG5cdFx0J3BpYW5vJzogMCxcblx0fVxuXHRyZXR1cm4ga2V5X29mZnNldHNbaW5zdHJ1bWVudF07XG59XG5cbmZ1bmN0aW9uIGdldEluc3RydW1lbnRGaW5nZXJpbmcoaW5zdHJ1bWVudCkge1xuXHRsZXQgZmluZ2VyaW5nX21hcCA9IHtcblx0XHQnZ3VpdGFyJzogJ2d1aXRhcicsXG5cdFx0J3BpY2NvbG8nOiAncGljb2xvJyxcblx0XHQnY2xhcmluZXQnOiAnY2xhcmluZXQnLFxuXHRcdCdiYXNzX2NsYXJpbmV0JzogJ2NsYXJpbmV0Jyxcblx0XHQnc29wcmFub19zYXhvcGhvbmUnOiAnc2F4b3Bob25lJyxcblx0XHQnYWx0b19zYXhvcGhvbmUnOiAnc2F4b3Bob25lJyxcblx0XHQndGVub3Jfc2F4b3Bob25lJzogJ3NheG9waG9uZScsXG5cdFx0J2Jhcml0b25lX3NheG9waG9uZSc6ICdzYXhvcGhvbmUnLFxuXHRcdCdmcmVuY2hfaG9ybic6ICd0cnVtcGV0Jyxcblx0XHQndHJ1bXBldCc6ICd0cnVtcGV0Jyxcblx0XHQneHlsb3Bob25lJzogJ3h5bG9waG9uZScsXG5cdFx0J2dsb2NrZW5zcGllbCc6ICdnbG9ja2Vuc3BpZWwnLFxuXHRcdCdwaWFubyc6ICdwaWFubycsXG5cdH1cblx0cmV0dXJuIGZpbmdlcmluZ19tYXBbaW5zdHJ1bWVudF07XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGdldEluc3RydW1lbnRLZXlPZmZzZXQ6IGdldEluc3RydW1lbnRLZXlPZmZzZXQsXG5cdGdldEluc3RydW1lbnRGaW5nZXJpbmc6IGdldEluc3RydW1lbnRGaW5nZXJpbmcsXG59XG4iLCJpbXBvcnQgSW5zdHJ1bWVudHMgZnJvbSAnLi9pbnN0cnVtZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGVIaW50ZXIge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMubGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZV9oaW50X3RleHQnKTtcblx0XHR0aGlzLmltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RlX2hpbnRfbm90ZScpO1xuXHR9XG5cblx0aGludE5leHQoaW5zdHJ1bWVudCwga2V5LCBvY3RhdmUpIHtcblx0XHRsZXQgaGludEtleSA9IGtleVswXTtcblx0XHRsZXQga2V5Rm9yUGF0aCA9IGtleVswXTtcblx0XHRpZiAoa2V5Lmxlbmd0aCA+IDEpIHtcblx0XHRcdGhpbnRLZXkgKz0gXCI8c3VwPlwiICsga2V5WzFdLnJlcGxhY2UoXCJCXCIsICfima0nKSArIFwiPC9zdXA+XCJcblx0XHRcdGtleUZvclBhdGggKz0ga2V5WzFdLnJlcGxhY2UoJyMnLCAnc2hhcnAnKS5yZXBsYWNlKCdCJywgJ2InKTtcblx0XHR9XG5cdFx0dGhpcy5sYWJlbC5pbm5lckhUTUwgPSBoaW50S2V5ICsgb2N0YXZlO1xuXHRcdHRoaXMuaW1nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdHRoaXMuaW1nLnNyYyA9ICcuLi8uLi9hc3NldHMvaW1hZ2VzLycgKyBJbnN0cnVtZW50cy5nZXRJbnN0cnVtZW50RmluZ2VyaW5nKGluc3RydW1lbnQpICsgJy8nICsgb2N0YXZlICsgJy8nICtcblx0XHRcdGtleUZvclBhdGggKyAnLnBuZyc7XG5cdH1cblxuXHRzdG9wKCkge1xuXHRcdHRoaXMubGFiZWwuaW5uZXJIVE1MID0gXCJcIjtcblx0XHR0aGlzLmltZy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=