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
/******/ 	return __webpack_require__(__webpack_require__.s = "./web/assets/js/key_signatures.js");
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9rZXlfY29tcGFyaXNvbi5qcyIsIndlYnBhY2s6Ly8vLi93ZWIvYXNzZXRzL2pzL2tleV9zaWduYXR1cmVzLmpzIl0sIm5hbWVzIjpbImNvbXBhcmVLZXlzIiwibm90ZTEiLCJub3RlMiIsImtleWFsaWFzZXMiLCJ1bmRlZmluZWQiLCJ0b0xvd2VyQ2FzZSIsImdldEtleUFzRmxhdCIsImtleSIsImZsYXRfbWFwIiwiZ2V0S2V5U2lnbmF0dXJlSW5mbyIsImtleV9zaWdzIiwiZ2V0T2Zmc2V0Tm90ZSIsIm9jdGF2ZSIsIm9mZnNldCIsIm5vdGVzIiwic3RhcnRJbmRleCIsImkiLCJsZW5ndGgiLCJrZXlfY29tcGFyaXNvbiIsIm9mZnNldEtleSIsIm9mZnNldE9jdGF2ZSIsIk1hdGgiLCJmbG9vciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7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QXVDQyxLQUFLLENBQUNHLE1BQTlDLENBQXJCO0FBQ0EsTUFBSUcsWUFBWSxHQUFHUixNQUFNLEdBQUdTLElBQUksQ0FBQ0MsS0FBTCxDQUFXLENBQUNQLFVBQVUsR0FBR0YsTUFBZCxJQUF3QkMsS0FBSyxDQUFDRyxNQUF6QyxDQUE1QjtBQUNBLFNBQU87QUFDTixZQUFRRSxTQURGO0FBRU4sY0FBVUM7QUFGSixHQUFQO0FBSUE7O0FBRWM7QUFDZFgscUJBQW1CLEVBQUVBLG1CQURQO0FBRWRFLGVBQWEsRUFBRUE7QUFGRCxDQUFmLEUiLCJmaWxlIjoia2V5X3NpZ25hdHVyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3dlYi9hc3NldHMvanMva2V5X3NpZ25hdHVyZXMuanNcIik7XG4iLCJmdW5jdGlvbiBjb21wYXJlS2V5cyhub3RlMSwgbm90ZTIpIHtcblx0bGV0IGtleWFsaWFzZXMgPSB7XG5cdFx0J2FiJzogJ2cjJyxcblx0XHQnYScgOiAnYScsXG5cdFx0J2EjJyA6ICdiYicsXG5cdFx0J2JiJyA6ICdhIycsXG5cdFx0J2InIDogJ2NiJyxcblx0XHQnYiMnOiAnYycsXG5cdFx0J2NiJyA6ICdiJyxcblx0XHQnYycgOiAnYiMnLFxuXHRcdCdjIyc6ICdkYicsXG5cdFx0J2RiJyA6ICdjIycsXG5cdFx0J2QnIDogJ2QnLFxuXHRcdCdkIycgOiAnZWInLFxuXHRcdCdlYicgOiAnZCMnLFxuXHRcdCdlJyA6ICdmYicsXG5cdFx0J2UjJyA6ICdmJyxcblx0XHQnZmInIDogJ2UnLFxuXHRcdCdmJyA6ICdmJyxcblx0XHQnZiMnIDogJ2diJyxcblx0XHQnZ2InIDogJ2YjJyxcblx0XHQnZycgOiAnZycsXG5cdFx0J2cjJyA6ICdhYicsXG5cdH1cblx0aWYgKG5vdGUxID09IHVuZGVmaW5lZCB8fCBub3RlMiA9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIG5vdGUxLnRvTG93ZXJDYXNlKCkgPT0gbm90ZTIudG9Mb3dlckNhc2UoKSB8fCBrZXlhbGlhc2VzW25vdGUxLnRvTG93ZXJDYXNlKCldID09IG5vdGUyLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIGdldEtleUFzRmxhdChrZXkpIHtcblx0bGV0IGZsYXRfbWFwID0ge1xuXHRcdCdhYic6ICdBYicsXG5cdFx0J2EnIDogJ2EnLFxuXHRcdCdhIycgOiAnQmInLFxuXHRcdCdiYicgOiAnQmInLFxuXHRcdCdiJyA6ICdCJyxcblx0XHQnY2InIDogJ0InLFxuXHRcdCdjJyA6ICdDJyxcblx0XHQnYyMnOiAnRGInLFxuXHRcdCdkYicgOiAnRGInLFxuXHRcdCdkJyA6ICdEJyxcblx0XHQnZCMnIDogJ0ViJyxcblx0XHQnZWInIDogJ0ViJyxcblx0XHQnZScgOiAnRmInLFxuXHRcdCdlIycgOiAnRicsXG5cdFx0J2ZiJyA6ICdFJyxcblx0XHQnZicgOiAnRicsXG5cdFx0J2YjJyA6ICdHYicsXG5cdFx0J2diJyA6ICdHYicsXG5cdFx0J2cnIDogJ0cnLFxuXHRcdCdnIycgOiAnQWInLFxuXHR9XG5cdHJldHVybiBmbGF0X21hcFtrZXkudG9Mb3dlckNhc2UoKV1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRjb21wYXJlS2V5czogY29tcGFyZUtleXNcbn1cbiIsImltcG9ydCBrZXlfY29tcGFyaXNvbiBmcm9tICcuL2tleV9jb21wYXJpc29uJ1xuXG5mdW5jdGlvbiBnZXRLZXlTaWduYXR1cmVJbmZvKGtleSkge1xuXHQvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9LZXlfc2lnbmF0dXJlXG5cdGxldCBrZXlfc2lncyA9IHtcblx0XHQnQyBtYWpvcicgOiB7XG5cdFx0XHQndHlwZSc6ICcjJyxcblx0XHRcdCdub3Rlcyc6IHt9XG5cdFx0fSxcblx0XHQnQSBtaW5vcicgOiB7XG5cdFx0XHQndHlwZSc6ICcjJyxcblx0XHRcdCdub3Rlcyc6IHt9XG5cdFx0fSxcblx0XHQnRyBtYWpvcicgOiB7XG5cdFx0XHQndHlwZSc6ICcjJyxcblx0XHRcdCdub3Rlcyc6IHsnRic6IHRydWV9XG5cdFx0fSxcblx0XHQnRSBtaW5vcicgOiB7XG5cdFx0XHQndHlwZSc6ICcjJyxcblx0XHRcdCdub3Rlcyc6IHsnRic6IHRydWV9XG5cdFx0fSxcblx0XHQnRCBtYWpvcicgOiB7XG5cdFx0XHQndHlwZSc6ICcjJyxcblx0XHRcdCdub3Rlcyc6IHsnRicgOiB0cnVlLCAnQycgOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0IgbWlub3InIDoge1xuXHRcdFx0J3R5cGUnOiAnIycsXG5cdFx0XHQnbm90ZXMnOiB7J0YnIDogdHJ1ZSwgJ0MnIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdBIG1ham9yJyA6IHtcblx0XHRcdCd0eXBlJzogJyMnLFxuXHRcdFx0J25vdGVzJzogeydGJyA6IHRydWUsICdDJyA6IHRydWUsICdHJyA6IHRydWV9XG5cdFx0fSxcblx0XHQnRiMgbWlub3InIDoge1xuXHRcdFx0J3R5cGUnOiAnIycsXG5cdFx0XHQnbm90ZXMnOiB7J0YnIDogdHJ1ZSwgJ0MnIDogdHJ1ZSwgJ0cnIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdFIG1ham9yJyA6IHtcblx0XHRcdCd0eXBlJzogJyMnLFxuXHRcdFx0J25vdGVzJzogeydGJyA6IHRydWUsICdDJyA6IHRydWUsICdHJyA6IHRydWUsICdEJyA6IHRydWV9XG5cdFx0fSxcblx0XHQnQiBtYWpvcicgOiB7XG5cdFx0XHQndHlwZSc6ICcjJyxcblx0XHRcdCdub3Rlcyc6IHsnRicgOiB0cnVlLCAnQycgOiB0cnVlLCAnRycgOiB0cnVlLCAnRCcgOiB0cnVlLCAnQScgOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0YjIG1ham9yJyA6IHtcblx0XHRcdCd0eXBlJzogJyMnLFxuXHRcdFx0J25vdGVzJzogeydGJyA6IHRydWUsICdHJyA6IHRydWUsICdBJyA6IHRydWUsICdDJyA6IHRydWUsICdEJyA6IHRydWUsICdFJyA6IHRydWV9XG5cdFx0fSxcblx0XHQnQyMgbWFqb3InIDoge1xuXHRcdFx0J3R5cGUnOiAnIycsXG5cdFx0XHQnbm90ZXMnOiB7J0YnIDogdHJ1ZSwgJ0cnIDogdHJ1ZSwgJ0EnIDogdHJ1ZSwgJ0MnIDogdHJ1ZSwgJ0QnIDogdHJ1ZSwgJ0UnIDogdHJ1ZSwgJ0InOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0YgbWFqb3InIDoge1xuXHRcdFx0J3R5cGUnOiAnYicsXG5cdFx0XHQnbm90ZXMnOiB7J0InIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdEIG1pbm9yJyA6IHtcblx0XHRcdCd0eXBlJzogJ2InLFxuXHRcdFx0J25vdGVzJzogeydCJyA6IHRydWV9XG5cdFx0fSxcblx0XHQnQmIgbWFqb3InIDoge1xuXHRcdFx0J3R5cGUnOiAnYicsXG5cdFx0XHQnbm90ZXMnOiB7J0InIDogdHJ1ZSwgJ0UnIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdHIG1pbm9yJyA6IHtcblx0XHRcdCd0eXBlJzogJ2InLFxuXHRcdFx0J25vdGVzJzogeydCJyA6IHRydWUsICdFJyA6IHRydWV9XG5cdFx0fSxcblx0XHQnRWIgbWFqb3InIDoge1xuXHRcdFx0J3R5cGUnOiAnYicsXG5cdFx0XHQnbm90ZXMnOiB7J0InIDogdHJ1ZSwgJ0UnIDogdHJ1ZSwgJ0EnIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdDIG1pbm9yJyA6IHtcblx0XHRcdCd0eXBlJzogJ2InLFxuXHRcdFx0J25vdGVzJzogeydCJyA6IHRydWUsICdFJyA6IHRydWUsICdBJyA6IHRydWV9XG5cdFx0fSxcblx0XHQnQWIgbWFqb3InIDoge1xuXHRcdFx0J3R5cGUnOiAnYicsXG5cdFx0XHQnbm90ZXMnOiB7J0InIDogdHJ1ZSwgJ0UnIDogdHJ1ZSwgJ0EnIDogdHJ1ZSwgJ0QnIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdGIG1pbm9yJyA6IHtcblx0XHRcdCd0eXBlJzogJ2InLFxuXHRcdFx0J25vdGVzJzogeydCJyA6IHRydWUsICdFJyA6IHRydWUsICdBJyA6IHRydWUsICdEJyA6IHRydWV9XG5cdFx0fSxcblx0XHQnRGIgbWFqb3InIDoge1xuXHRcdFx0J3R5cGUnOiAnYicsXG5cdFx0XHQnbm90ZXMnOiB7J0InIDogdHJ1ZSwgJ0UnIDogdHJ1ZSwgJ0EnIDogdHJ1ZSwgJ0QnIDogdHJ1ZSwgJ0cnIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdCYiBtaW5vcicgOiB7XG5cdFx0XHQndHlwZSc6ICdiJyxcblx0XHRcdCdub3Rlcyc6IHsnQicgOiB0cnVlLCAnRScgOiB0cnVlLCAnQScgOiB0cnVlLCAnRCcgOiB0cnVlLCAnRycgOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0diIG1ham9yJyA6IHtcblx0XHRcdCd0eXBlJzogJ2InLFxuXHRcdFx0J25vdGVzJzogeydCJyA6IHRydWUsICdFJyA6IHRydWUsICdBJyA6IHRydWUsICdEJyA6IHRydWUsICdHJyA6IHRydWUsICdDJyA6IHRydWV9XG5cdFx0fSxcblx0XHQnRWIgbWlub3InIDoge1xuXHRcdFx0J3R5cGUnOiAnYicsXG5cdFx0XHQnbm90ZXMnOiB7J0InIDogdHJ1ZSwgJ0UnIDogdHJ1ZSwgJ0EnIDogdHJ1ZSwgJ0QnIDogdHJ1ZSwgJ0cnIDogdHJ1ZSwgJ0MnIDogdHJ1ZX1cblx0XHR9LFxuXHRcdCdDYiBtYWpvcicgOiB7XG5cdFx0XHQndHlwZSc6ICdiJyxcblx0XHRcdCdub3Rlcyc6IHsnQicgOiB0cnVlLCAnRScgOiB0cnVlLCAnQScgOiB0cnVlLCAnRCcgOiB0cnVlLCAnRycgOiB0cnVlLCAnQycgOiB0cnVlLCAnRicgOiB0cnVlfVxuXHRcdH0sXG5cdFx0J0FiIG1pbm9yJyA6IHtcblx0XHRcdCd0eXBlJyA6ICdiJyxcblx0XHRcdCdub3Rlcyc6IHsnQic6IHRydWUsICdFJzogdHJ1ZSwgJ0EnOiB0cnVlLCAnRCc6IHRydWUsICdHJzogdHJ1ZSwgJ0MnOiB0cnVlLCAnRic6IHRydWV9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4ga2V5X3NpZ3Nba2V5XTtcbn1cblxuZnVuY3Rpb24gZ2V0T2Zmc2V0Tm90ZShrZXksIG9jdGF2ZSwgb2Zmc2V0KSB7XG5cdGxldCBub3RlcyA9IFsnQycsICdEYicsICdEJywgJ0ViJywgJ0UnLCAnRicsICdHYicsICdHJywgJ0FiJywgJ0EnLCAnQmInLCAnQiddO1xuXHRsZXQgc3RhcnRJbmRleCA9IDA7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbm90ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoa2V5X2NvbXBhcmlzb24uY29tcGFyZUtleXMobm90ZXNbaV0sIGtleSkpIHtcblx0XHRcdHN0YXJ0SW5kZXggPSBpO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cdGxldCBvZmZzZXRLZXkgPSBub3Rlc1sobm90ZXMubGVuZ3RoICsgc3RhcnRJbmRleCArIG9mZnNldCkgJSBub3Rlcy5sZW5ndGhdO1xuXHRsZXQgb2Zmc2V0T2N0YXZlID0gb2N0YXZlICsgTWF0aC5mbG9vcigoc3RhcnRJbmRleCArIG9mZnNldCkgLyBub3Rlcy5sZW5ndGgpO1xuXHRyZXR1cm4ge1xuXHRcdFwibmFtZVwiOiBvZmZzZXRLZXksXG5cdFx0XCJvY3RhdmVcIjogb2Zmc2V0T2N0YXZlLFxuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGdldEtleVNpZ25hdHVyZUluZm86IGdldEtleVNpZ25hdHVyZUluZm8sXG5cdGdldE9mZnNldE5vdGU6IGdldE9mZnNldE5vdGVcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==