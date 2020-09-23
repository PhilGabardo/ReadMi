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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9ub3RlX3RpbWluZy5qcyJdLCJuYW1lcyI6WyJnZXREdXJhdGlvbkFzUGVyY2VudGFnZSIsImR1cmF0aW9uIiwibnVtYmVyX29mX2RvdHMiLCJiZWF0X3ZhbHVlIiwiYmVhdHNfcGVyX21lYXN1cmUiLCJwZXJjZW50YWdlIiwiZG90X2ZhY3RvciIsIm11bHRpcGxpZXIiLCJkb3RfY291bnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQSxTQUFTQSx1QkFBVCxDQUFpQ0MsUUFBakMsRUFBMkNDLGNBQTNDLEVBQTJEQyxVQUEzRCxFQUF1RUMsaUJBQXZFLEVBQTBGO0FBQ3pGLE1BQUlDLFVBQUo7O0FBQ0EsVUFBUUosUUFBUjtBQUNDLFNBQUssSUFBTDtBQUNBLFNBQUssS0FBTDtBQUNDSSxnQkFBVSxHQUFJRixVQUFVLEdBQUcsR0FBZCxJQUFzQixNQUFNQyxpQkFBNUIsQ0FBYjtBQUNBOztBQUNELFNBQUssR0FBTDtBQUNBLFNBQUssSUFBTDtBQUNDQyxnQkFBVSxHQUFJRixVQUFVLEdBQUcsR0FBZCxJQUFzQixNQUFNQyxpQkFBNUIsQ0FBYjtBQUNBOztBQUNELFNBQUssR0FBTDtBQUNBLFNBQUssSUFBTDtBQUNDQyxnQkFBVSxHQUFJRixVQUFVLEdBQUcsR0FBZCxHQUFxQkMsaUJBQWxDO0FBQ0E7O0FBQ0QsU0FBSyxHQUFMO0FBQ0EsU0FBSyxJQUFMO0FBQ0NDLGdCQUFVLEdBQUlGLFVBQVUsR0FBRyxHQUFkLEdBQXFCQyxpQkFBbEM7QUFDQTs7QUFDRCxTQUFLLEdBQUw7QUFDQSxTQUFLLElBQUw7QUFDQ0MsZ0JBQVUsR0FBSUYsVUFBRCxHQUFlQyxpQkFBNUI7QUFDQTtBQXBCRjs7QUFzQkEsTUFBSUUsVUFBVSxHQUFHLENBQWpCO0FBQ0EsTUFBSUMsVUFBVSxHQUFHLEdBQWpCOztBQUNBLE9BQUssSUFBSUMsU0FBUyxHQUFHLENBQXJCLEVBQXdCQSxTQUFTLEdBQUdOLGNBQXBDLEVBQW9ETSxTQUFTLEVBQTdELEVBQWlFO0FBQ2hFRixjQUFVLElBQUlDLFVBQWQ7QUFDQUEsY0FBVSxHQUFHQSxVQUFVLEdBQUcsQ0FBMUI7QUFDQTs7QUFDREYsWUFBVSxJQUFJQyxVQUFkO0FBQ0EsU0FBT0QsVUFBUDtBQUNBOztBQUVjO0FBQ2RMLHlCQUF1QixFQUFFQTtBQURYLENBQWYsRSIsImZpbGUiOiJub3RlX3RpbWluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3dlYi9hc3NldHMvanMvbm90ZV90aW1pbmcuanNcIik7XG4iLCJmdW5jdGlvbiBnZXREdXJhdGlvbkFzUGVyY2VudGFnZShkdXJhdGlvbiwgbnVtYmVyX29mX2RvdHMsIGJlYXRfdmFsdWUsIGJlYXRzX3Blcl9tZWFzdXJlKSB7XG5cdGxldCBwZXJjZW50YWdlO1xuXHRzd2l0Y2ggKGR1cmF0aW9uKSB7XG5cdFx0Y2FzZSAnMTYnOlxuXHRcdGNhc2UgJzE2cic6XG5cdFx0XHRwZXJjZW50YWdlID0gKGJlYXRfdmFsdWUgLyA0LjApIC8gKDQuMCAqIGJlYXRzX3Blcl9tZWFzdXJlKTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJzgnOlxuXHRcdGNhc2UgJzhyJzpcblx0XHRcdHBlcmNlbnRhZ2UgPSAoYmVhdF92YWx1ZSAvIDQuMCkgLyAoMi4wICogYmVhdHNfcGVyX21lYXN1cmUpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAncSc6XG5cdFx0Y2FzZSAncXInOlxuXHRcdFx0cGVyY2VudGFnZSA9IChiZWF0X3ZhbHVlIC8gNC4wKSAvIGJlYXRzX3Blcl9tZWFzdXJlO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnaCc6XG5cdFx0Y2FzZSAnaHInOlxuXHRcdFx0cGVyY2VudGFnZSA9IChiZWF0X3ZhbHVlIC8gMi4wKSAvIGJlYXRzX3Blcl9tZWFzdXJlO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAndyc6XG5cdFx0Y2FzZSAnd3InOlxuXHRcdFx0cGVyY2VudGFnZSA9IChiZWF0X3ZhbHVlKSAvIGJlYXRzX3Blcl9tZWFzdXJlO1xuXHRcdFx0YnJlYWs7XG5cdH1cblx0bGV0IGRvdF9mYWN0b3IgPSAxO1xuXHRsZXQgbXVsdGlwbGllciA9IDAuNVxuXHRmb3IgKGxldCBkb3RfY291bnQgPSAwOyBkb3RfY291bnQgPCBudW1iZXJfb2ZfZG90czsgZG90X2NvdW50KyspIHtcblx0XHRkb3RfZmFjdG9yICs9IG11bHRpcGxpZXI7XG5cdFx0bXVsdGlwbGllciA9IG11bHRpcGxpZXIgLyAyO1xuXHR9XG5cdHBlcmNlbnRhZ2UgKj0gZG90X2ZhY3Rvcjtcblx0cmV0dXJuIHBlcmNlbnRhZ2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Z2V0RHVyYXRpb25Bc1BlcmNlbnRhZ2U6IGdldER1cmF0aW9uQXNQZXJjZW50YWdlLFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==