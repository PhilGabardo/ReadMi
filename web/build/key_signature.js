!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/build/",o(o.s="hg4W")}({hg4W:function(e,t,o){"use strict";o.r(t);var n=o("r1bH");t.default={getKeySignatureInfo:function(e){return{"C major":{type:"#",notes:{}},"A minor":{type:"#",notes:{}},"G major":{type:"#",notes:{F:!0}},"E minor":{type:"#",notes:{F:!0}},"D major":{type:"#",notes:{F:!0,C:!0}},"B minor":{type:"#",notes:{F:!0,C:!0}},"A major":{type:"#",notes:{F:!0,C:!0,G:!0}},"E major":{type:"#",notes:{F:!0,C:!0,G:!0,D:!0}},"B major":{type:"#",notes:{F:!0,C:!0,G:!0,D:!0,A:!0}},"F major":{type:"b",notes:{B:!0}},"D minor":{type:"b",notes:{B:!0}},"Bb major":{type:"b",notes:{B:!0,E:!0}},"G minor":{type:"b",notes:{B:!0,E:!0}},"Eb major":{type:"b",notes:{B:!0,E:!0,A:!0}},"C minor":{type:"b",notes:{B:!0,E:!0,A:!0}},"Ab major":{type:"b",notes:{B:!0,E:!0,A:!0,D:!0}},"F minor":{type:"b",notes:{B:!0,E:!0,A:!0,D:!0}},"Db major":{type:"b",notes:{B:!0,E:!0,A:!0,D:!0,G:!0}},"Bb minor":{type:"b",notes:{B:!0,E:!0,A:!0,D:!0,G:!0}},"Gb major":{type:"b",notes:{B:!0,E:!0,A:!0,D:!0,G:!0,C:!0}},"Eb minor":{type:"b",notes:{B:!0,E:!0,A:!0,D:!0,G:!0,C:!0}},"Cb major":{type:"b",notes:{B:!0,E:!0,A:!0,D:!0,G:!0,C:!0,F:!0}},"Ab minor":{type:"b",notes:{B:!0,E:!0,A:!0,D:!0,G:!0,C:!0,F:!0}}}[e]},getOffsetNote:function(e,t,o){for(var r=["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"],b=0,a=0;a<r.length;a++)if(n.default.compareKeys(r[a],e)){b=a;break}return{name:r[(r.length+b+o)%r.length],octave:t+Math.floor((b+o)/r.length)}}}},r1bH:function(e,t,o){"use strict";o.r(t),t.default={compareKeys:function(e,t){return null!=e&&null!=t&&(e.toLowerCase()==t.toLowerCase()||{ab:"g#",a:"a","a#":"bb",bb:"a#",b:"cb","b#":"c",cb:"b",c:"b#","c#":"db",db:"c#",d:"d","d#":"eb",eb:"d#",e:"fb","e#":"f",fb:"e",f:"f","f#":"gb",gb:"f#",g:"g","g#":"ab"}[e.toLowerCase()]==t.toLowerCase())}}}});