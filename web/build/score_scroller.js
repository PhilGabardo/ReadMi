!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/build/",n(n.s="njIX")}({GR20:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t),n.d(t,"default",(function(){return a}));var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,a;return t=e,a=[{key:"startTiming",value:function(){e.startTime=Date.now(),e.pauseDelay=0}},{key:"pause",value:function(){e.pauseStart=Date.now()}},{key:"resume",value:function(){e.pauseDelay+=Date.now()-e.pauseStart}},{key:"getPauseDelay",value:function(){return e.pauseDelay}},{key:"getTimeSinceStart",value:function(){return Date.now()-e.startTime-this.pauseDelay}}],(n=null)&&r(t.prototype,n),a&&r(t,a),e}()},njIX:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n("GR20");function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n,r,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.beats_per_measure=t,this.beats_per_minute=n,this.enabled=!0,this.stave_height=r,this.is_piano=a,this.setController()}var t,n,u;return t=e,(n=[{key:"start",value:function(){this.func=setInterval(this.scroll,300,this)}},{key:"pause",value:function(){window.clearInterval(this.func)}},{key:"scroll",value:function(e){if(e.enabled){var t=r.default.getTimeSinceStart()*(e.beats_per_minute/60)/1e3;!function(e,t,n,r){var a=n,u=Math.floor(e/3)*a,o=a-(e%3+t)/3*a;e>1&&(o-=a/2),window.scrollTo(0,u-o-50)}(Math.floor(t/e.beats_per_measure),t%e.beats_per_measure/e.beats_per_measure,e.stave_height,e.is_piano)}}},{key:"resume",value:function(){this.start()}},{key:"setController",value:function(){var e=this;document.getElementById("scroller-controller").addEventListener("change",(function(t){t.target.checked?e.enabled=!0:e.enabled=!1}))}}])&&a(t.prototype,n),u&&a(t,u),e}()}});