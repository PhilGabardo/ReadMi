!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/build/",t(t.s="eolz")}({eolz:function(e,r,t){"use strict";t.r(r);var n=t("r1bH"),o=[7902.13,7458.62,7040,6644.88,6271.93,5919.91,5587.65,5274.04,4978.03,4698.64,4434.92,4186.01,3951.07,3729.31,3520,3322.44,3135.96,2959.96,2793.83,2637.02,2489.02,2349.32,2217.46,2093,1975.53,1864.66,1760,1661.22,1567.98,1479.98,1396.91,1318.51,1244.51,1174.66,1108.73,1046.5,987.767,932.328,880,830.609,783.991,739.989,698.456,659.255,622.254,587.33,554.365,523.251,493.883,466.164,440,415.305,391.995,369.994,349.228,329.628,311.127,293.665,277.183,261.626,246.942,233.082,220,207.652,195.998,184.997,174.614,164.814,155.563,146.832,138.591,130.813,123.471,116.541,110,103.826,97.9989,92.4986,87.3071,82.4069,77.7817,73.4162,69.2957,65.4064,61.7354,58.2705,55,51.9131,48.9994,46.2493,43.6535,41.2034,38.8909,36.7081,34.6478,32.7032,30.8677,29.1352,27.5,25.9565,24.4997,23.1247,21.8268,20.6017,19.4454,18.354,17.3239,16.3516],u=["B","A#","A","G#","G","F#","F","E","D#","D","C#","C"],f={C:0,"C#":1,DB:1,D:2,"D#":3,EB:3,E:4,F:5,"F#":6,GB:6,G:7,"G#":8,AB:8,A:9,"A#":10,BB:10,B:11};function a(e){for(var r=o.length,t=0,n=0;n<r-1;n++){if(0==n&&e>o[n]){t=0,0;break}if(o[n]>=e&&e>o[n+1]){(t=o[n]-e<e-o[n+1]?n:n+1)==n?n+1:n;break}n==r-2&&(t=r-1,r-1)}return{key:u[t%u.length],octave:8-Math.floor(t/u.length)}}r.default={getFrequencyForNote:function(e,r){for(var t,f=0;f<u.length;f++)if(n.default.compareKeys(e,u[f])){t=f;break}return o[o.length-1-r*u.length-(u.length-t-1)]},getNoteFromSamples:function(e,r,t){var n=function(e,r,t){var n=function(e){for(var r=new Array(e.length/2),t=0;t<r.length;t++)for(var n=0;n<r.length;n++)t in r||(r[t]=0),r[t]+=Math.pow(e[n]-e[n+t],2);return r}(e);n=function(e){var r=e.length,t=0;e[0]=1;for(var n=1;n<r;n++)t+=e[n],e[n]=e[n]*n/t;return e}(n),Math.floor(r/t);var o=function(e,r){var t,n=e.length;for(t=0;t<n;t++)if(e[t]<.1){for(;t+1<n&&e[t+1]<e[t];)t++;break}return t=t>=n-1?-1:t}(n);return-1==o?o:r/(o=function(e,r){var t,n=e<1?e:e-1,o=e+1<r.length?e+1:e;if(n==e)t=r[e]<=r[o]?e:o;else if(o==e)t=r[e]<=r[n]?e:n;else{var u=r[n],f=r[e],a=r[o];t=e+(a-u)/(2*(2*f-a-u))}return t}(o,n))}(e,r,t);return n?a(n):[]},estimateNote:a,getIndexForNote:function(e,r){return 12*r+f[e]},getGuitarStringFretsMap:function(){for(var e=[],r=0;r<6;r++){var t=0;t=r>=4?5*r-1:5*r;for(var n=0;n<22;n++)e[n+t]||(e[n+t]=[]),e[n+t].push([r,n])}return e},getViolinStringFretsMap:function(){for(var e=[],r=0;r<4;r++){var t;t=7*r;for(var n=0;n<8;n++)e[n+t]||(e[n+t]=[]),e[n+t].push([r,n])}return e}}},r1bH:function(e,r,t){"use strict";t.r(r),r.default={compareKeys:function(e,r){return null!=e&&null!=r&&(e.toLowerCase()==r.toLowerCase()||{ab:"g#",a:"a","a#":"bb",bb:"a#",b:"cb","b#":"c",cb:"b",c:"b#","c#":"db",db:"c#",d:"d","d#":"eb",eb:"d#",e:"fb","e#":"f",fb:"e",f:"f","f#":"gb",gb:"f#",g:"g","g#":"ab"}[e.toLowerCase()]==r.toLowerCase())}}}});