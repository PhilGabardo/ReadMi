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
/******/ 	return __webpack_require__(__webpack_require__.s = "./web/assets/js/score_scroller.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./web/assets/js/score_scroller.js":
/*!*****************************************!*\
  !*** ./web/assets/js/score_scroller.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScoreScoller; });
/* harmony import */ var _timing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timing */ "./web/assets/js/timing.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ScoreScoller =
/*#__PURE__*/
function () {
  function ScoreScoller(beats_per_measure, beats_per_minute, stave_height, is_piano) {
    _classCallCheck(this, ScoreScoller);

    this.beats_per_measure = beats_per_measure;
    this.beats_per_minute = beats_per_minute;
    this.enabled = true;
    this.stave_height = stave_height;
    this.is_piano = is_piano;
    this.setController();
  }

  _createClass(ScoreScoller, [{
    key: "start",
    value: function start() {
      this.func = setInterval(this.scroll, 300, this);
    }
  }, {
    key: "pause",
    value: function pause() {
      window.clearInterval(this.func);
    }
  }, {
    key: "scroll",
    value: function scroll(scroller) {
      if (!scroller.enabled) {
        return;
      }

      var timeInMs = _timing__WEBPACK_IMPORTED_MODULE_0__["default"].getTimeSinceStart();
      var bps = scroller.beats_per_minute / 60;
      var beatsPassed = timeInMs * bps / 1000;
      var stavesPassed = Math.floor(beatsPassed / scroller.beats_per_measure);
      var percentageThroughStave = beatsPassed % scroller.beats_per_measure / scroller.beats_per_measure;
      scrollToNiceSpot(stavesPassed, percentageThroughStave, scroller.stave_height, scroller.is_piano);
    }
  }, {
    key: "resume",
    value: function resume() {
      this.start();
    }
  }, {
    key: "setController",
    value: function setController() {
      var _this = this;

      document.getElementById('scroller-controller').addEventListener('change', function (event) {
        if (event.target.checked) {
          _this.enabled = true;
        } else {
          _this.enabled = false;
        }
      });
    }
  }]);

  return ScoreScoller;
}();



function scrollToNiceSpot(stavesPassed, percentageThroughStave, staveHeight, is_piano) {
  var stave_height = staveHeight;
  var height = Math.floor(stavesPassed / 3) * stave_height;
  var penalty = stave_height - (stavesPassed % 3 + percentageThroughStave) / 3 * stave_height;

  if (stavesPassed > 1) {
    penalty -= stave_height / 2;
  }

  window.scrollTo(0, height - penalty - 50);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9zY29yZV9zY3JvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi93ZWIvYXNzZXRzL2pzL3RpbWluZy5qcyJdLCJuYW1lcyI6WyJTY29yZVNjb2xsZXIiLCJiZWF0c19wZXJfbWVhc3VyZSIsImJlYXRzX3Blcl9taW51dGUiLCJzdGF2ZV9oZWlnaHQiLCJpc19waWFubyIsImVuYWJsZWQiLCJzZXRDb250cm9sbGVyIiwiZnVuYyIsInNldEludGVydmFsIiwic2Nyb2xsIiwid2luZG93IiwiY2xlYXJJbnRlcnZhbCIsInNjcm9sbGVyIiwidGltZUluTXMiLCJUaW1pbmciLCJnZXRUaW1lU2luY2VTdGFydCIsImJwcyIsImJlYXRzUGFzc2VkIiwic3RhdmVzUGFzc2VkIiwiTWF0aCIsImZsb29yIiwicGVyY2VudGFnZVRocm91Z2hTdGF2ZSIsInNjcm9sbFRvTmljZVNwb3QiLCJzdGFydCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJjaGVja2VkIiwic3RhdmVIZWlnaHQiLCJoZWlnaHQiLCJwZW5hbHR5Iiwic2Nyb2xsVG8iLCJzdGFydFRpbWUiLCJEYXRlIiwibm93IiwicGF1c2VEZWxheSIsInBhdXNlU3RhcnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7O0lBRXFCQSxZOzs7QUFDcEIsd0JBQVlDLGlCQUFaLEVBQStCQyxnQkFBL0IsRUFBaURDLFlBQWpELEVBQStEQyxRQUEvRCxFQUF5RTtBQUFBOztBQUN4RSxTQUFLSCxpQkFBTCxHQUF5QkEsaUJBQXpCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFNBQUtHLE9BQUwsR0FBZSxJQUFmO0FBQ0EsU0FBS0YsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtFLGFBQUw7QUFDQTs7Ozs0QkFFTztBQUNQLFdBQUtDLElBQUwsR0FBWUMsV0FBVyxDQUFDLEtBQUtDLE1BQU4sRUFBYyxHQUFkLEVBQW1CLElBQW5CLENBQXZCO0FBQ0E7Ozs0QkFFTztBQUNQQyxZQUFNLENBQUNDLGFBQVAsQ0FBcUIsS0FBS0osSUFBMUI7QUFDQTs7OzJCQUVNSyxRLEVBQVU7QUFDaEIsVUFBSSxDQUFDQSxRQUFRLENBQUNQLE9BQWQsRUFBdUI7QUFDdEI7QUFDQTs7QUFDRCxVQUFJUSxRQUFRLEdBQUdDLCtDQUFNLENBQUNDLGlCQUFQLEVBQWY7QUFDQSxVQUFJQyxHQUFHLEdBQUdKLFFBQVEsQ0FBQ1YsZ0JBQVQsR0FBNEIsRUFBdEM7QUFDQSxVQUFJZSxXQUFXLEdBQUlKLFFBQVEsR0FBR0csR0FBWixHQUFvQixJQUF0QztBQUNBLFVBQUlFLFlBQVksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILFdBQVcsR0FBR0wsUUFBUSxDQUFDWCxpQkFBbEMsQ0FBbkI7QUFDQSxVQUFJb0Isc0JBQXNCLEdBQUlKLFdBQVcsR0FBR0wsUUFBUSxDQUFDWCxpQkFBeEIsR0FBNkNXLFFBQVEsQ0FBQ1gsaUJBQW5GO0FBQ0FxQixzQkFBZ0IsQ0FBQ0osWUFBRCxFQUFlRyxzQkFBZixFQUF1Q1QsUUFBUSxDQUFDVCxZQUFoRCxFQUE4RFMsUUFBUSxDQUFDUixRQUF2RSxDQUFoQjtBQUNBOzs7NkJBRVE7QUFDUixXQUFLbUIsS0FBTDtBQUNBOzs7b0NBRWU7QUFBQTs7QUFDZkMsY0FBUSxDQUFDQyxjQUFULENBQXdCLHFCQUF4QixFQUErQ0MsZ0JBQS9DLENBQWdFLFFBQWhFLEVBQTBFLFVBQUNDLEtBQUQsRUFBVztBQUNwRixZQUFJQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsT0FBakIsRUFBMEI7QUFDekIsZUFBSSxDQUFDeEIsT0FBTCxHQUFlLElBQWY7QUFDQSxTQUZELE1BRU87QUFDTixlQUFJLENBQUNBLE9BQUwsR0FBZSxLQUFmO0FBQ0E7QUFDRCxPQU5EO0FBT0E7Ozs7Ozs7O0FBR0YsU0FBU2lCLGdCQUFULENBQTBCSixZQUExQixFQUF3Q0csc0JBQXhDLEVBQWdFUyxXQUFoRSxFQUE2RTFCLFFBQTdFLEVBQXVGO0FBQ3RGLE1BQUlELFlBQVksR0FBRzJCLFdBQW5CO0FBQ0EsTUFBSUMsTUFBTSxHQUFHWixJQUFJLENBQUNDLEtBQUwsQ0FBV0YsWUFBWSxHQUFHLENBQTFCLElBQStCZixZQUE1QztBQUNBLE1BQUk2QixPQUFPLEdBQUc3QixZQUFZLEdBQUksQ0FBRWUsWUFBWSxHQUFHLENBQWhCLEdBQXFCRyxzQkFBdEIsSUFBZ0QsQ0FBakQsR0FBc0RsQixZQUFuRjs7QUFDQSxNQUFJZSxZQUFZLEdBQUcsQ0FBbkIsRUFBc0I7QUFDckJjLFdBQU8sSUFBSTdCLFlBQVksR0FBRyxDQUExQjtBQUNBOztBQUNETyxRQUFNLENBQUN1QixRQUFQLENBQWdCLENBQWhCLEVBQW1CRixNQUFNLEdBQUdDLE9BQVQsR0FBbUIsRUFBdEM7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3ZEb0JsQixNOzs7Ozs7Ozs7a0NBQ0M7QUFDcEJBLFlBQU0sQ0FBQ29CLFNBQVAsR0FBbUJDLElBQUksQ0FBQ0MsR0FBTCxFQUFuQjtBQUNBdEIsWUFBTSxDQUFDdUIsVUFBUCxHQUFvQixDQUFwQjtBQUNBOzs7NEJBRWM7QUFDZHZCLFlBQU0sQ0FBQ3dCLFVBQVAsR0FBb0JILElBQUksQ0FBQ0MsR0FBTCxFQUFwQjtBQUNBOzs7NkJBRWU7QUFDZnRCLFlBQU0sQ0FBQ3VCLFVBQVAsSUFBcUJGLElBQUksQ0FBQ0MsR0FBTCxLQUFhdEIsTUFBTSxDQUFDd0IsVUFBekM7QUFDQTs7O29DQUVzQjtBQUN0QixhQUFPeEIsTUFBTSxDQUFDdUIsVUFBZDtBQUNBOzs7d0NBRTBCO0FBQzFCLGFBQU9GLElBQUksQ0FBQ0MsR0FBTCxLQUFhdEIsTUFBTSxDQUFDb0IsU0FBcEIsR0FBZ0MsS0FBS0csVUFBNUM7QUFDQSIsImZpbGUiOiJzY29yZV9zY3JvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3dlYi9hc3NldHMvanMvc2NvcmVfc2Nyb2xsZXIuanNcIik7XG4iLCJpbXBvcnQgVGltaW5nIGZyb20gJy4vdGltaW5nJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZVNjb2xsZXIge1xuXHRjb25zdHJ1Y3RvcihiZWF0c19wZXJfbWVhc3VyZSwgYmVhdHNfcGVyX21pbnV0ZSwgc3RhdmVfaGVpZ2h0LCBpc19waWFubykge1xuXHRcdHRoaXMuYmVhdHNfcGVyX21lYXN1cmUgPSBiZWF0c19wZXJfbWVhc3VyZTtcblx0XHR0aGlzLmJlYXRzX3Blcl9taW51dGUgPSBiZWF0c19wZXJfbWludXRlO1xuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWVcblx0XHR0aGlzLnN0YXZlX2hlaWdodCA9IHN0YXZlX2hlaWdodDtcblx0XHR0aGlzLmlzX3BpYW5vID0gaXNfcGlhbm87XG5cdFx0dGhpcy5zZXRDb250cm9sbGVyKCk7XG5cdH1cblxuXHRzdGFydCgpIHtcblx0XHR0aGlzLmZ1bmMgPSBzZXRJbnRlcnZhbCh0aGlzLnNjcm9sbCwgMzAwLCB0aGlzKTtcblx0fVxuXG5cdHBhdXNlKCkge1xuXHRcdHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuZnVuYyk7XG5cdH1cblxuXHRzY3JvbGwoc2Nyb2xsZXIpIHtcblx0XHRpZiAoIXNjcm9sbGVyLmVuYWJsZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGV0IHRpbWVJbk1zID0gVGltaW5nLmdldFRpbWVTaW5jZVN0YXJ0KCk7XG5cdFx0bGV0IGJwcyA9IHNjcm9sbGVyLmJlYXRzX3Blcl9taW51dGUgLyA2MDtcblx0XHRsZXQgYmVhdHNQYXNzZWQgPSAodGltZUluTXMgKiBicHMpIC8gKDEwMDApO1xuXHRcdGxldCBzdGF2ZXNQYXNzZWQgPSBNYXRoLmZsb29yKGJlYXRzUGFzc2VkIC8gc2Nyb2xsZXIuYmVhdHNfcGVyX21lYXN1cmUpO1xuXHRcdGxldCBwZXJjZW50YWdlVGhyb3VnaFN0YXZlID0gKGJlYXRzUGFzc2VkICUgc2Nyb2xsZXIuYmVhdHNfcGVyX21lYXN1cmUpIC8gc2Nyb2xsZXIuYmVhdHNfcGVyX21lYXN1cmU7XG5cdFx0c2Nyb2xsVG9OaWNlU3BvdChzdGF2ZXNQYXNzZWQsIHBlcmNlbnRhZ2VUaHJvdWdoU3RhdmUsIHNjcm9sbGVyLnN0YXZlX2hlaWdodCwgc2Nyb2xsZXIuaXNfcGlhbm8pXG5cdH1cblxuXHRyZXN1bWUoKSB7XG5cdFx0dGhpcy5zdGFydCgpO1xuXHR9XG5cblx0c2V0Q29udHJvbGxlcigpIHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Nyb2xsZXItY29udHJvbGxlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuXHRcdFx0aWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XG5cdFx0XHRcdHRoaXMuZW5hYmxlZCA9IHRydWVcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZW5hYmxlZCA9IGZhbHNlXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxufVxuXG5mdW5jdGlvbiBzY3JvbGxUb05pY2VTcG90KHN0YXZlc1Bhc3NlZCwgcGVyY2VudGFnZVRocm91Z2hTdGF2ZSwgc3RhdmVIZWlnaHQsIGlzX3BpYW5vKSB7XG5cdGxldCBzdGF2ZV9oZWlnaHQgPSBzdGF2ZUhlaWdodDtcblx0bGV0IGhlaWdodCA9IE1hdGguZmxvb3Ioc3RhdmVzUGFzc2VkIC8gMykgKiBzdGF2ZV9oZWlnaHQ7XG5cdGxldCBwZW5hbHR5ID0gc3RhdmVfaGVpZ2h0IC0gKCgoc3RhdmVzUGFzc2VkICUgMykgKyBwZXJjZW50YWdlVGhyb3VnaFN0YXZlKSAvIDMpICogc3RhdmVfaGVpZ2h0XG5cdGlmIChzdGF2ZXNQYXNzZWQgPiAxKSB7XG5cdFx0cGVuYWx0eSAtPSBzdGF2ZV9oZWlnaHQgLyAyO1xuXHR9XG5cdHdpbmRvdy5zY3JvbGxUbygwLCBoZWlnaHQgLSBwZW5hbHR5IC0gNTApXG59XG5cblxuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1pbmcge1xuXHRzdGF0aWMgc3RhcnRUaW1pbmcoKSB7XG5cdFx0VGltaW5nLnN0YXJ0VGltZSA9IERhdGUubm93KCk7XG5cdFx0VGltaW5nLnBhdXNlRGVsYXkgPSAwO1xuXHR9XG5cblx0c3RhdGljIHBhdXNlKCkge1xuXHRcdFRpbWluZy5wYXVzZVN0YXJ0ID0gRGF0ZS5ub3coKVxuXHR9XG5cblx0c3RhdGljIHJlc3VtZSgpIHtcblx0XHRUaW1pbmcucGF1c2VEZWxheSArPSBEYXRlLm5vdygpIC0gVGltaW5nLnBhdXNlU3RhcnRcblx0fVxuXG5cdHN0YXRpYyBnZXRQYXVzZURlbGF5KCkge1xuXHRcdHJldHVybiBUaW1pbmcucGF1c2VEZWxheTtcblx0fVxuXG5cdHN0YXRpYyBnZXRUaW1lU2luY2VTdGFydCgpIHtcblx0XHRyZXR1cm4gRGF0ZS5ub3coKSAtIFRpbWluZy5zdGFydFRpbWUgLSB0aGlzLnBhdXNlRGVsYXlcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==