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
/******/ 	return __webpack_require__(__webpack_require__.s = "./web/assets/js/note_timing.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./web/assets/js/note_timing.js":
/*!**************************************!*\
  !*** ./web/assets/js/note_timing.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function getDurationAsPercentage(duration, number_of_dots, beat_value, beats_per_measure) {
  var percentage;

  switch (duration) {
    case '16':
    case '16r':
      percentage = beat_value / 4.0 / (4.0 * beats_per_measure);
      break;

    case '8':
    case '8r':
      percentage = beat_value / 4.0 / (2.0 * beats_per_measure);
      break;

    case 'q':
    case 'qr':
      percentage = beat_value / 4.0 / beats_per_measure;
      break;

    case 'h':
    case 'hr':
      percentage = beat_value / 2.0 / beats_per_measure;
      break;

    case 'w':
    case 'wr':
      percentage = beat_value / beats_per_measure;
      break;
  }

  var dot_factor = 1;
  var multiplier = 0.5;

  for (var dot_count = 0; dot_count < number_of_dots; dot_count++) {
    dot_factor += multiplier;
    multiplier = multiplier / 2;
  }

  percentage *= dot_factor;
  return percentage;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  getDurationAsPercentage: getDurationAsPercentage
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9ub3RlX3RpbWluZy5qcyJdLCJuYW1lcyI6WyJnZXREdXJhdGlvbkFzUGVyY2VudGFnZSIsImR1cmF0aW9uIiwibnVtYmVyX29mX2RvdHMiLCJiZWF0X3ZhbHVlIiwiYmVhdHNfcGVyX21lYXN1cmUiLCJwZXJjZW50YWdlIiwiZG90X2ZhY3RvciIsIm11bHRpcGxpZXIiLCJkb3RfY291bnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQSxTQUFTQSx1QkFBVCxDQUFpQ0MsUUFBakMsRUFBMkNDLGNBQTNDLEVBQTJEQyxVQUEzRCxFQUF1RUMsaUJBQXZFLEVBQTBGO0FBQ3pGLE1BQUlDLFVBQUo7O0FBQ0EsVUFBUUosUUFBUjtBQUNDLFNBQUssSUFBTDtBQUNBLFNBQUssS0FBTDtBQUNDSSxnQkFBVSxHQUFJRixVQUFVLEdBQUcsR0FBZCxJQUFzQixNQUFNQyxpQkFBNUIsQ0FBYjtBQUNBOztBQUNELFNBQUssR0FBTDtBQUNBLFNBQUssSUFBTDtBQUNDQyxnQkFBVSxHQUFJRixVQUFVLEdBQUcsR0FBZCxJQUFzQixNQUFNQyxpQkFBNUIsQ0FBYjtBQUNBOztBQUNELFNBQUssR0FBTDtBQUNBLFNBQUssSUFBTDtBQUNDQyxnQkFBVSxHQUFJRixVQUFVLEdBQUcsR0FBZCxHQUFxQkMsaUJBQWxDO0FBQ0E7O0FBQ0QsU0FBSyxHQUFMO0FBQ0EsU0FBSyxJQUFMO0FBQ0NDLGdCQUFVLEdBQUlGLFVBQVUsR0FBRyxHQUFkLEdBQXFCQyxpQkFBbEM7QUFDQTs7QUFDRCxTQUFLLEdBQUw7QUFDQSxTQUFLLElBQUw7QUFDQ0MsZ0JBQVUsR0FBSUYsVUFBRCxHQUFlQyxpQkFBNUI7QUFDQTtBQXBCRjs7QUFzQkEsTUFBSUUsVUFBVSxHQUFHLENBQWpCO0FBQ0EsTUFBSUMsVUFBVSxHQUFHLEdBQWpCOztBQUNBLE9BQUssSUFBSUMsU0FBUyxHQUFHLENBQXJCLEVBQXdCQSxTQUFTLEdBQUdOLGNBQXBDLEVBQW9ETSxTQUFTLEVBQTdELEVBQWlFO0FBQ2hFRixjQUFVLElBQUlDLFVBQWQ7QUFDQUEsY0FBVSxHQUFHQSxVQUFVLEdBQUcsQ0FBMUI7QUFDQTs7QUFDREYsWUFBVSxJQUFJQyxVQUFkO0FBQ0EsU0FBT0QsVUFBUDtBQUNBOztBQUVjO0FBQ2RMLHlCQUF1QixFQUFFQTtBQURYLENBQWYsRSIsImZpbGUiOiJub3RlX2ZlZWRiYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vd2ViL2Fzc2V0cy9qcy9ub3RlX3RpbWluZy5qc1wiKTtcbiIsImZ1bmN0aW9uIGdldER1cmF0aW9uQXNQZXJjZW50YWdlKGR1cmF0aW9uLCBudW1iZXJfb2ZfZG90cywgYmVhdF92YWx1ZSwgYmVhdHNfcGVyX21lYXN1cmUpIHtcblx0bGV0IHBlcmNlbnRhZ2U7XG5cdHN3aXRjaCAoZHVyYXRpb24pIHtcblx0XHRjYXNlICcxNic6XG5cdFx0Y2FzZSAnMTZyJzpcblx0XHRcdHBlcmNlbnRhZ2UgPSAoYmVhdF92YWx1ZSAvIDQuMCkgLyAoNC4wICogYmVhdHNfcGVyX21lYXN1cmUpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnOCc6XG5cdFx0Y2FzZSAnOHInOlxuXHRcdFx0cGVyY2VudGFnZSA9IChiZWF0X3ZhbHVlIC8gNC4wKSAvICgyLjAgKiBiZWF0c19wZXJfbWVhc3VyZSk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdxJzpcblx0XHRjYXNlICdxcic6XG5cdFx0XHRwZXJjZW50YWdlID0gKGJlYXRfdmFsdWUgLyA0LjApIC8gYmVhdHNfcGVyX21lYXN1cmU7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdoJzpcblx0XHRjYXNlICdocic6XG5cdFx0XHRwZXJjZW50YWdlID0gKGJlYXRfdmFsdWUgLyAyLjApIC8gYmVhdHNfcGVyX21lYXN1cmU7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICd3Jzpcblx0XHRjYXNlICd3cic6XG5cdFx0XHRwZXJjZW50YWdlID0gKGJlYXRfdmFsdWUpIC8gYmVhdHNfcGVyX21lYXN1cmU7XG5cdFx0XHRicmVhaztcblx0fVxuXHRsZXQgZG90X2ZhY3RvciA9IDE7XG5cdGxldCBtdWx0aXBsaWVyID0gMC41XG5cdGZvciAobGV0IGRvdF9jb3VudCA9IDA7IGRvdF9jb3VudCA8IG51bWJlcl9vZl9kb3RzOyBkb3RfY291bnQrKykge1xuXHRcdGRvdF9mYWN0b3IgKz0gbXVsdGlwbGllcjtcblx0XHRtdWx0aXBsaWVyID0gbXVsdGlwbGllciAvIDI7XG5cdH1cblx0cGVyY2VudGFnZSAqPSBkb3RfZmFjdG9yO1xuXHRyZXR1cm4gcGVyY2VudGFnZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRnZXREdXJhdGlvbkFzUGVyY2VudGFnZTogZ2V0RHVyYXRpb25Bc1BlcmNlbnRhZ2UsXG59XG4iXSwic291cmNlUm9vdCI6IiJ9