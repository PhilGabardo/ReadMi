!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/build/",i(i.s="BtlC")}({"5tIq":function(t,e,i){"use strict";i.r(e),e.default={getAudioContext:function(){return window.AudioContext=window.AudioContext||window.webkitAudioContext||window.mozAudioContext||window.oAudioContext||window.msAudioContext,new AudioContext}}},BtlC:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return u}));var n=i("5tIq");function o(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var u=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.tempo=e,this.audioCtx=n.default.getAudioContext(),this.tick=null,this.tickVolume=null,this.soundHz=1e3,this.scheduledTicks=i,this.playingState=!0,this.initAudio(),this.setController()}var e,i,u;return e=t,(i=[{key:"reset",value:function(t,e){this.tempo=t,this.ticks=e,this.tickVolume.gain.cancelScheduledValues(0),this.resume()}},{key:"initAudio",value:function(){this.tick=this.audioCtx.createOscillator(),this.tickVolume=this.audioCtx.createGain(),this.tick.type="sine",this.tick.frequency.value=this.soundHz,this.tickVolume.gain.value=0,this.tick.connect(this.tickVolume),this.tickVolume.connect(this.audioCtx.destination),this.tick.start(0)}},{key:"click",value:function(t){var e=t.audioCtx.currentTime;t.clickAtTime(e)}},{key:"start",value:function(){for(var t=60/this.tempo,e=this.audioCtx.currentTime,i=0;i<this.scheduledTicks;i++)this.clickAtTime(e,i),e+=t}},{key:"setController",value:function(){var t=this;document.getElementById("metronome-controller").addEventListener("change",(function(e){e.target.checked?t.tickVolume.connect(t.audioCtx.destination):t.tickVolume.disconnect(t.audioCtx.destination)}))}},{key:"clickAtTime",value:function(t){this.tickVolume.gain.cancelScheduledValues(t),this.tickVolume.gain.setValueAtTime(0,t),this.tickVolume.gain.linearRampToValueAtTime(1,t+.001),this.tickVolume.gain.linearRampToValueAtTime(0,t+.001+.01)}},{key:"pause",value:function(){this.audioCtx.suspend()}},{key:"resume",value:function(){this.audioCtx.resume()}}])&&o(e.prototype,i),u&&o(e,u),t}()}});