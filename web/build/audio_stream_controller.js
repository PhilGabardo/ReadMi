!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/build/",r(r.s="XJe3")}({XJe3:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.r(t),r.d(t,"default",(function(){return o}));var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.audioContext=t,this.userMediaPromise=navigator.mediaDevices.getUserMedia({audio:!0,video:!1}),this.analyzer=null,this.processor=null,this.buffer=null}var t,r,o;return t=e,(r=[{key:"startStream",value:function(){var e=this;this.userMediaPromise.then((function(t){var r=e.audioContext.createMediaStreamSource(t);e.processor=e.audioContext.createScriptProcessor(1024,1,1),r.connect(e.processor),e.processor.connect(e.audioContext.destination),e.analyser=e.audioContext.createAnalyser(),e.analyser.fftSize=2048,e.buffer=new Uint8Array(e.analyser.fftSize),r.connect(e.analyser)}))}},{key:"getByteTimeDomainData",value:function(){return this.analyser.getByteTimeDomainData(this.buffer),this.buffer}},{key:"getSampleRate",value:function(){return this.audioContext.sampleRate}}])&&n(t.prototype,r),o&&n(t,o),e}()}});