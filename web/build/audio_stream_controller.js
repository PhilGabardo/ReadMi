!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/build/",n(n.s="XJe3")}({"5tIq":function(e,t,n){"use strict";n.r(t),t.default={getAudioContext:function(){return window.AudioContext=window.AudioContext||window.webkitAudioContext||window.mozAudioContext||window.oAudioContext||window.msAudioContext,new AudioContext}}},XJe3:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var r=n("5tIq");function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.stream=t,this.analyser=null,this.processor=null,this.buffer=null}var t,n,i;return t=e,(n=[{key:"startStream",value:function(){var e=r.default.getAudioContext(),t=e.createMediaStreamSource(this.stream);this.analyser=e.createAnalyser(),this.analyser.fftSize=2048,this.buffer=new Uint8Array(this.analyser.fftSize),t.connect(this.analyser)}},{key:"getByteTimeDomainData",value:function(){return this.analyser.getByteTimeDomainData(this.buffer),this.buffer}},{key:"getSampleRate",value:function(){return r.default.getAudioContext().sampleRate}}])&&o(t.prototype,n),i&&o(t,i),e}()}});