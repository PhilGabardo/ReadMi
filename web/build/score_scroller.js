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
  function ScoreScoller(beats_per_measure, beats_per_minute, stave_height) {
    _classCallCheck(this, ScoreScoller);

    this.beats_per_measure = beats_per_measure;
    this.beats_per_minute = beats_per_minute;
    this.enabled = true;
    this.stave_height = stave_height;
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
      scrollToNiceSpot(stavesPassed, percentageThroughStave, scroller.stave_height);
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



function scrollToNiceSpot(stavesPassed, percentageThroughStave, staveHeight) {
  if (stavesPassed < 3) {
    window.scrollTo(0, 0);
    return;
  }

  var stave_height = staveHeight;
  var height = Math.floor(stavesPassed / 3) * stave_height;
  var penalty = stave_height - (stavesPassed % 3 + percentageThroughStave) / 3 * stave_height;
  window.scrollTo(0, height - penalty);
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
    key: "getTimeSinceStart",
    value: function getTimeSinceStart() {
      return Date.now() - Timing.startTime - this.pauseDelay;
    }
  }]);

  return Timing;
}();



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9qcy9zY29yZV9zY3JvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi93ZWIvYXNzZXRzL2pzL3RpbWluZy5qcyJdLCJuYW1lcyI6WyJTY29yZVNjb2xsZXIiLCJiZWF0c19wZXJfbWVhc3VyZSIsImJlYXRzX3Blcl9taW51dGUiLCJzdGF2ZV9oZWlnaHQiLCJlbmFibGVkIiwic2V0Q29udHJvbGxlciIsImZ1bmMiLCJzZXRJbnRlcnZhbCIsInNjcm9sbCIsIndpbmRvdyIsImNsZWFySW50ZXJ2YWwiLCJzY3JvbGxlciIsInRpbWVJbk1zIiwiVGltaW5nIiwiZ2V0VGltZVNpbmNlU3RhcnQiLCJicHMiLCJiZWF0c1Bhc3NlZCIsInN0YXZlc1Bhc3NlZCIsIk1hdGgiLCJmbG9vciIsInBlcmNlbnRhZ2VUaHJvdWdoU3RhdmUiLCJzY3JvbGxUb05pY2VTcG90Iiwic3RhcnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidGFyZ2V0IiwiY2hlY2tlZCIsInN0YXZlSGVpZ2h0Iiwic2Nyb2xsVG8iLCJoZWlnaHQiLCJwZW5hbHR5Iiwic3RhcnRUaW1lIiwiRGF0ZSIsIm5vdyIsInBhdXNlRGVsYXkiLCJwYXVzZVN0YXJ0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztJQUVxQkEsWTs7O0FBQ3BCLHdCQUFZQyxpQkFBWixFQUErQkMsZ0JBQS9CLEVBQWlEQyxZQUFqRCxFQUErRDtBQUFBOztBQUM5RCxTQUFLRixpQkFBTCxHQUF5QkEsaUJBQXpCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFNBQUtFLE9BQUwsR0FBZSxJQUFmO0FBQ0EsU0FBS0QsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLRSxhQUFMO0FBQ0E7Ozs7NEJBRU87QUFDUCxXQUFLQyxJQUFMLEdBQVlDLFdBQVcsQ0FBQyxLQUFLQyxNQUFOLEVBQWMsR0FBZCxFQUFtQixJQUFuQixDQUF2QjtBQUNBOzs7NEJBRU87QUFDUEMsWUFBTSxDQUFDQyxhQUFQLENBQXFCLEtBQUtKLElBQTFCO0FBQ0E7OzsyQkFFTUssUSxFQUFVO0FBQ2hCLFVBQUksQ0FBQ0EsUUFBUSxDQUFDUCxPQUFkLEVBQXVCO0FBQ3RCO0FBQ0E7O0FBQ0QsVUFBSVEsUUFBUSxHQUFHQywrQ0FBTSxDQUFDQyxpQkFBUCxFQUFmO0FBQ0EsVUFBSUMsR0FBRyxHQUFHSixRQUFRLENBQUNULGdCQUFULEdBQTRCLEVBQXRDO0FBQ0EsVUFBSWMsV0FBVyxHQUFJSixRQUFRLEdBQUdHLEdBQVosR0FBb0IsSUFBdEM7QUFDQSxVQUFJRSxZQUFZLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxXQUFXLEdBQUdMLFFBQVEsQ0FBQ1YsaUJBQWxDLENBQW5CO0FBQ0EsVUFBSW1CLHNCQUFzQixHQUFJSixXQUFXLEdBQUdMLFFBQVEsQ0FBQ1YsaUJBQXhCLEdBQTZDVSxRQUFRLENBQUNWLGlCQUFuRjtBQUNBb0Isc0JBQWdCLENBQUNKLFlBQUQsRUFBZUcsc0JBQWYsRUFBdUNULFFBQVEsQ0FBQ1IsWUFBaEQsQ0FBaEI7QUFDQTs7OzZCQUVRO0FBQ1IsV0FBS21CLEtBQUw7QUFDQTs7O29DQUVlO0FBQUE7O0FBQ2ZDLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixxQkFBeEIsRUFBK0NDLGdCQUEvQyxDQUFnRSxRQUFoRSxFQUEwRSxVQUFDQyxLQUFELEVBQVc7QUFDcEYsWUFBSUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLE9BQWpCLEVBQTBCO0FBQ3pCLGVBQUksQ0FBQ3hCLE9BQUwsR0FBZSxJQUFmO0FBQ0EsU0FGRCxNQUVPO0FBQ04sZUFBSSxDQUFDQSxPQUFMLEdBQWUsS0FBZjtBQUNBO0FBQ0QsT0FORDtBQU9BOzs7Ozs7OztBQUdGLFNBQVNpQixnQkFBVCxDQUEwQkosWUFBMUIsRUFBd0NHLHNCQUF4QyxFQUFnRVMsV0FBaEUsRUFBNkU7QUFDNUUsTUFBSVosWUFBWSxHQUFHLENBQW5CLEVBQXNCO0FBQ3JCUixVQUFNLENBQUNxQixRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0E7QUFDQTs7QUFDRCxNQUFJM0IsWUFBWSxHQUFHMEIsV0FBbkI7QUFDQSxNQUFJRSxNQUFNLEdBQUdiLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixZQUFZLEdBQUcsQ0FBMUIsSUFBK0JkLFlBQTVDO0FBQ0EsTUFBSTZCLE9BQU8sR0FBRzdCLFlBQVksR0FBSSxDQUFFYyxZQUFZLEdBQUcsQ0FBaEIsR0FBcUJHLHNCQUF0QixJQUFnRCxDQUFqRCxHQUFzRGpCLFlBQW5GO0FBQ0FNLFFBQU0sQ0FBQ3FCLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUJDLE1BQU0sR0FBR0MsT0FBNUI7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3ZEb0JuQixNOzs7Ozs7Ozs7a0NBQ0M7QUFDcEJBLFlBQU0sQ0FBQ29CLFNBQVAsR0FBbUJDLElBQUksQ0FBQ0MsR0FBTCxFQUFuQjtBQUNBdEIsWUFBTSxDQUFDdUIsVUFBUCxHQUFvQixDQUFwQjtBQUNBOzs7NEJBRWM7QUFDZHZCLFlBQU0sQ0FBQ3dCLFVBQVAsR0FBb0JILElBQUksQ0FBQ0MsR0FBTCxFQUFwQjtBQUNBOzs7NkJBRWU7QUFDZnRCLFlBQU0sQ0FBQ3VCLFVBQVAsSUFBcUJGLElBQUksQ0FBQ0MsR0FBTCxLQUFhdEIsTUFBTSxDQUFDd0IsVUFBekM7QUFDQTs7O3dDQUUwQjtBQUMxQixhQUFPSCxJQUFJLENBQUNDLEdBQUwsS0FBYXRCLE1BQU0sQ0FBQ29CLFNBQXBCLEdBQWdDLEtBQUtHLFVBQTVDO0FBQ0EiLCJmaWxlIjoic2NvcmVfc2Nyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93ZWIvYXNzZXRzL2pzL3Njb3JlX3Njcm9sbGVyLmpzXCIpO1xuIiwiaW1wb3J0IFRpbWluZyBmcm9tICcuL3RpbWluZydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmVTY29sbGVyIHtcblx0Y29uc3RydWN0b3IoYmVhdHNfcGVyX21lYXN1cmUsIGJlYXRzX3Blcl9taW51dGUsIHN0YXZlX2hlaWdodCkge1xuXHRcdHRoaXMuYmVhdHNfcGVyX21lYXN1cmUgPSBiZWF0c19wZXJfbWVhc3VyZTtcblx0XHR0aGlzLmJlYXRzX3Blcl9taW51dGUgPSBiZWF0c19wZXJfbWludXRlO1xuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWVcblx0XHR0aGlzLnN0YXZlX2hlaWdodCA9IHN0YXZlX2hlaWdodDtcblx0XHR0aGlzLnNldENvbnRyb2xsZXIoKTtcblx0fVxuXG5cdHN0YXJ0KCkge1xuXHRcdHRoaXMuZnVuYyA9IHNldEludGVydmFsKHRoaXMuc2Nyb2xsLCAzMDAsIHRoaXMpO1xuXHR9XG5cblx0cGF1c2UoKSB7XG5cdFx0d2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5mdW5jKTtcblx0fVxuXG5cdHNjcm9sbChzY3JvbGxlcikge1xuXHRcdGlmICghc2Nyb2xsZXIuZW5hYmxlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRsZXQgdGltZUluTXMgPSBUaW1pbmcuZ2V0VGltZVNpbmNlU3RhcnQoKTtcblx0XHRsZXQgYnBzID0gc2Nyb2xsZXIuYmVhdHNfcGVyX21pbnV0ZSAvIDYwO1xuXHRcdGxldCBiZWF0c1Bhc3NlZCA9ICh0aW1lSW5NcyAqIGJwcykgLyAoMTAwMCk7XG5cdFx0bGV0IHN0YXZlc1Bhc3NlZCA9IE1hdGguZmxvb3IoYmVhdHNQYXNzZWQgLyBzY3JvbGxlci5iZWF0c19wZXJfbWVhc3VyZSk7XG5cdFx0bGV0IHBlcmNlbnRhZ2VUaHJvdWdoU3RhdmUgPSAoYmVhdHNQYXNzZWQgJSBzY3JvbGxlci5iZWF0c19wZXJfbWVhc3VyZSkgLyBzY3JvbGxlci5iZWF0c19wZXJfbWVhc3VyZTtcblx0XHRzY3JvbGxUb05pY2VTcG90KHN0YXZlc1Bhc3NlZCwgcGVyY2VudGFnZVRocm91Z2hTdGF2ZSwgc2Nyb2xsZXIuc3RhdmVfaGVpZ2h0KVxuXHR9XG5cblx0cmVzdW1lKCkge1xuXHRcdHRoaXMuc3RhcnQoKTtcblx0fVxuXG5cdHNldENvbnRyb2xsZXIoKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njcm9sbGVyLWNvbnRyb2xsZXInKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcblx0XHRcdGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuXHRcdFx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmVuYWJsZWQgPSBmYWxzZVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cbn1cblxuZnVuY3Rpb24gc2Nyb2xsVG9OaWNlU3BvdChzdGF2ZXNQYXNzZWQsIHBlcmNlbnRhZ2VUaHJvdWdoU3RhdmUsIHN0YXZlSGVpZ2h0KSB7XG5cdGlmIChzdGF2ZXNQYXNzZWQgPCAzKSB7XG5cdFx0d2luZG93LnNjcm9sbFRvKDAsIDApO1xuXHRcdHJldHVyblxuXHR9XG5cdGxldCBzdGF2ZV9oZWlnaHQgPSBzdGF2ZUhlaWdodDtcblx0bGV0IGhlaWdodCA9IE1hdGguZmxvb3Ioc3RhdmVzUGFzc2VkIC8gMykgKiBzdGF2ZV9oZWlnaHQ7XG5cdGxldCBwZW5hbHR5ID0gc3RhdmVfaGVpZ2h0IC0gKCgoc3RhdmVzUGFzc2VkICUgMykgKyBwZXJjZW50YWdlVGhyb3VnaFN0YXZlKSAvIDMpICogc3RhdmVfaGVpZ2h0XG5cdHdpbmRvdy5zY3JvbGxUbygwLCBoZWlnaHQgLSBwZW5hbHR5KVxufVxuXG5cblxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltaW5nIHtcblx0c3RhdGljIHN0YXJ0VGltaW5nKCkge1xuXHRcdFRpbWluZy5zdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuXHRcdFRpbWluZy5wYXVzZURlbGF5ID0gMDtcblx0fVxuXG5cdHN0YXRpYyBwYXVzZSgpIHtcblx0XHRUaW1pbmcucGF1c2VTdGFydCA9IERhdGUubm93KClcblx0fVxuXG5cdHN0YXRpYyByZXN1bWUoKSB7XG5cdFx0VGltaW5nLnBhdXNlRGVsYXkgKz0gRGF0ZS5ub3coKSAtIFRpbWluZy5wYXVzZVN0YXJ0XG5cdH1cblxuXHRzdGF0aWMgZ2V0VGltZVNpbmNlU3RhcnQoKSB7XG5cdFx0cmV0dXJuIERhdGUubm93KCkgLSBUaW1pbmcuc3RhcnRUaW1lIC0gdGhpcy5wYXVzZURlbGF5XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=