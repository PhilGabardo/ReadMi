!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/build/",n(n.s="h5Jq")}({"5tIq":function(t,e,n){"use strict";n.r(e),e.default={getAudioContext:function(){return window.AudioContext=window.AudioContext||window.webkitAudioContext||window.mozAudioContext||window.oAudioContext||window.msAudioContext,new AudioContext}}},GR20:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return r}));n("5tIq");function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,(n=[{key:"startTiming",value:function(){this.startTime=Date.now(),this.pauseDelay=0}},{key:"pause",value:function(){this.pauseStart=Date.now()}},{key:"resume",value:function(){this.pauseDelay+=Date.now()-this.pauseStart}},{key:"getPauseDelay",value:function(){return this.pauseDelay}},{key:"getTimeSinceStart",value:function(){return Date.now()-this.startTime-this.pauseDelay}}])&&i(e.prototype,n),r&&i(e,r),t}()},h5Jq:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return u}));var i=n("GR20");function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var u=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.total_beats=e,this.bpm=n,this.timing=new i.default,this.text_div=document.getElementById("beat_count")}var e,n,u;return e=t,(n=[{key:"start",value:function(){this.timing.startTiming(),this.func=setInterval(this.updateCount,100,this)}},{key:"updateCount",value:function(t){var e=t.timing.getTimeSinceStart(),n=t.bpm/60,i=Math.floor(e*n/1e3),r=t.total_beats-i;t.text_div.innerHTML=r+" beats remaining"}},{key:"pause",value:function(){this.timing.pause(),window.clearInterval(this.func)}},{key:"resume",value:function(){this.timing.resume(),this.func=setInterval(this.updateCount,100,this)}}])&&r(e.prototype,n),u&&r(e,u),t}()}});