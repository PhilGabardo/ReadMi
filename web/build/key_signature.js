!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/build/",n(n.s="hg4W")}({hg4W:function(e,t,n){"use strict";n.r(t);var r=n("r1bH");t.default={getKeySignatureInfo:function(e){return{C:{type:"#",notes:[]},G:{type:"#",notes:{F:!0}},D:{type:"#",notes:{F:!0,C:!0}},A:{type:"#",notes:{F:!0,C:!0,G:!0}},E:{type:"#",notes:{F:!0,C:!0,G:!0,D:!0}},B:{type:"#",notes:{F:!0,C:!0,G:!0,D:!0,A:!0}},F:{type:"b",notes:{B:!0}},Bb:{type:"b",notes:{B:!0,E:!0}},Eb:{type:"b",notes:{B:!0,E:!0,A:!0}},Ab:{type:"b",notes:{B:!0,E:!0,A:!0,D:!0}},Db:{type:"b",notes:{B:!0,E:!0,A:!0,D:!0,G:!0}},Gb:{type:"b",notes:{B:!0,E:!0,A:!0,D:!0,G:!0,C:!0}}}[e]},getOffsetNote:function(e,t,n){for(var o=["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"],b=0,u=0;u<o.length;u++)if(r.default.compareKeys(o[u],e)){b=u;break}return{name:o[(o.length+b+n)%o.length],octave:t+Math.floor((b+n)/o.length)}}}},r1bH:function(e,t,n){"use strict";n.r(t),t.default={compareKeys:function(e,t){return null!=e&&null!=t&&(e.toLowerCase()==t.toLowerCase()||{ab:"g#",a:"a","a#":"bb",bb:"a#",b:"cb","b#":"c",cb:"b",c:"b#","c#":"db",db:"c#",d:"d","d#":"eb",eb:"d#",e:"fb","e#":"f",fb:"e",f:"f","f#":"gb",gb:"f#",g:"g","g#":"ab"}[e.toLowerCase()]==t.toLowerCase())}}}});