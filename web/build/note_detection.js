!function(r){var n={};function t(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=r,t.c=n,t.d=function(r,n,e){t.o(r,n)||Object.defineProperty(r,n,{enumerable:!0,get:e})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,n){if(1&n&&(r=t(r)),8&n)return r;if(4&n&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&n&&"string"!=typeof r)for(var o in r)t.d(e,o,function(n){return r[n]}.bind(null,o));return e},t.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(n,"a",n),n},t.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},t.p="/build/",t(t.s="eolz")}({"756C":function(r,n){r.exports={add:function(r,n){return[r[0]+n[0],r[1]+n[1]]},subtract:function(r,n){return[r[0]-n[0],r[1]-n[1]]},multiply:function(r,n){return[r[0]*n[0]-r[1]*n[1],r[0]*n[1]+r[1]*n[0]]},magnitude:function(r){return Math.sqrt(r[0]*r[0]+r[1]*r[1])}}},A5kO:function(r,n,t){r.exports={fft:t("RAZa").fft,ifft:t("z0JX").ifft,fftInPlace:t("RAZa").fftInPlace,util:t("kmYd"),dft:t("fCvD"),idft:t("hTjx")}},RAZa:function(r,n,t){var e=t("756C"),o=t("kmYd"),u=t("pIo5");r.exports={fft:function r(n){var t=[],u=n.length;if(1==u)return Array.isArray(n[0])?[[n[0][0],n[0][1]]]:[[n[0],0]];for(var f=r(n.filter((function(r,n){return n%2==0}))),a=r(n.filter((function(r,n){return n%2==1}))),i=0;i<u/2;i++){var c=f[i],l=e.multiply(o.exponent(i,u),a[i]);t[i]=e.add(c,l),t[i+u/2]=e.subtract(c,l)}return t},fftInPlace:function(r){for(var n=r.length,t=u.countTrailingZeros(n),f=0;f<n;f++){var a=u.reverse(f)>>>u.INT_BITS-t;if(a>f){var i=[r[f],0];r[f]=r[a],r[a]=i}else r[a]=[r[a],0]}for(var c=2;c<=n;c+=c)for(var l=0;l<c/2;l++)for(var v=o.exponent(l,c),s=0;s<n/c;s++){var g=e.multiply(v,r[s*c+l+c/2]);r[s*c+l+c/2]=e.subtract(r[s*c+l],g),r[s*c+l]=e.add(r[s*c+l],g)}}}},eolz:function(r,n,t){"use strict";t.r(n);var e=t("r1bH"),o=t("A5kO"),u=t.n(o),f=[7902.13,7458.62,7040,6644.88,6271.93,5919.91,5587.65,5274.04,4978.03,4698.64,4434.92,4186.01,3951.07,3729.31,3520,3322.44,3135.96,2959.96,2793.83,2637.02,2489.02,2349.32,2217.46,2093,1975.53,1864.66,1760,1661.22,1567.98,1479.98,1396.91,1318.51,1244.51,1174.66,1108.73,1046.5,987.767,932.328,880,830.609,783.991,739.989,698.456,659.255,622.254,587.33,554.365,523.251,493.883,466.164,440,415.305,391.995,369.994,349.228,329.628,311.127,293.665,277.183,261.626,246.942,233.082,220,207.652,195.998,184.997,174.614,164.814,155.563,146.832,138.591,130.813,123.471,116.541,110,103.826,97.9989,92.4986,87.3071,82.4069,77.7817,73.4162,69.2957,65.4064,61.7354,58.2705,55,51.9131,48.9994,46.2493,43.6535,41.2034,38.8909,36.7081,34.6478,32.7032,30.8677,29.1352,27.5,25.9565,24.4997,23.1247,21.8268,20.6017,19.4454,18.354,17.3239,16.3516],a=["B","A#","A","G#","G","F#","F","E","D#","D","C#","C"],i={C:0,"C#":1,DB:1,D:2,"D#":3,EB:3,E:4,F:5,"F#":6,GB:6,G:7,"G#":8,AB:8,A:9,"A#":10,BB:10,B:11};function c(r){for(var n=f.length,t=0,e=0;e<n-1;e++){if(0==e&&r>f[e]){t=0,0;break}if(f[e]>=r&&r>f[e+1]){(t=f[e]-r<r-f[e+1]?e:e+1)==e?e+1:e;break}e==n-2&&(t=n-1,n-1)}return{key:a[t%a.length],octave:8-Math.floor(t/a.length)}}n.default={getFrequencyForNote:function(r,n){for(var t,o=0;o<a.length;o++)if(e.default.compareKeys(r,a[o])){t=o;break}return f[f.length-1-n*a.length-(a.length-t-1)]},getNoteFromSamples:function(r,n,t){var e=function(r,n,t){Math.floor(n/t);var e=function(r){for(var n=u.a.fft(r),t=new Array(n.length),e=0;e<n.length;e++)t[e]=[n[e][0]*n[e][0],-1*n[e][1]*n[e][1]];n=u.a.ifft(t);for(var o=new Array(r.length),f=0;f<o.length;f++)o[f]=2*n[0][1]-2*n[f][1];return o}(r),o=function(r){var n,t=r.length;for(n=0;n<t;n++)if(r[n]<.3){for(;n+1<t&&r[n+1]<r[n];)n++;break}return n=n>=t-1?-1:n}(e=function(r){var n=r.length,t=0;r[0]=1;for(var e=1;e<n;e++)t+=r[e],r[e]=r[e]*e/t;return r}(e));return-1==o?o:n/(o=function(r,n){var t,e=r<1?r:r-1,o=r+1<n.length?r+1:r;if(e==r)t=n[r]<=n[o]?r:o;else if(o==r)t=n[r]<=n[e]?r:e;else{var u=n[e],f=n[r],a=n[o];t=r+(a-u)/(2*(2*f-a-u))}return t}(o,e))}(r,n,t);return e?c(e):[]},estimateNote:c,getIndexForNote:function(r,n){return 12*n+i[r]},getGuitarStringFretsMap:function(){for(var r=[],n=0;n<6;n++){var t=0;t=n>=4?5*n-1:5*n;for(var e=0;e<22;e++)r[e+t]||(r[e+t]=[]),r[e+t].push([n,e])}return r},getViolinStringFretsMap:function(){for(var r=[],n=0;n<4;n++){var t;t=7*n;for(var e=0;e<8;e++)r[e+t]||(r[e+t]=[]),r[e+t].push([n,e])}return r}}},fCvD:function(r,n,t){var e=t("756C"),o=t("kmYd");r.exports=function(r){for(var n=[],t=r.length,u=0;u<t;u++){n[u]=[0,0];for(var f=0;f<t;f++){var a,i=o.exponent(u*f,t);a=Array.isArray(r[f])?e.multiply(r[f],i):e.multiply([r[f],0],i),n[u]=e.add(n[u],a)}}return n}},hTjx:function(r,n,t){var e=t("fCvD");r.exports=function(r){for(var n=[],t=0;t<r.length;t++)n[t]=[r[t][1],r[t][0]];for(var o=e(n),u=[],f=0;f<o.length;f++)u[f]=[o[f][1]/o.length,o[f][0]/o.length];return u}},kmYd:function(r,n,t){var e=t("756C"),o={};r.exports={fftMag:function(r){var n=r.map(e.magnitude);return n.slice(0,n.length/2)},fftFreq:function(r,n){var t=n/r.length;return r.slice(0,r.length/2).map((function(r,n){return n*t}))},exponent:function(r,n){var t=-2*Math.PI*(r/n);return o[n]=o[n]||{},o[n][r]=o[n][r]||[Math.cos(t),Math.sin(t)],o[n][r]}}},pIo5:function(r,n,t){"use strict";function e(r){var n=32;return(r&=-r)&&n--,65535&r&&(n-=16),16711935&r&&(n-=8),252645135&r&&(n-=4),858993459&r&&(n-=2),1431655765&r&&(n-=1),n}n.INT_BITS=32,n.INT_MAX=2147483647,n.INT_MIN=-1<<31,n.sign=function(r){return(r>0)-(r<0)},n.abs=function(r){var n=r>>31;return(r^n)-n},n.min=function(r,n){return n^(r^n)&-(r<n)},n.max=function(r,n){return r^(r^n)&-(r<n)},n.isPow2=function(r){return!(r&r-1||!r)},n.log2=function(r){var n,t;return n=(r>65535)<<4,n|=t=((r>>>=n)>255)<<3,n|=t=((r>>>=t)>15)<<2,(n|=t=((r>>>=t)>3)<<1)|(r>>>=t)>>1},n.log10=function(r){return r>=1e9?9:r>=1e8?8:r>=1e7?7:r>=1e6?6:r>=1e5?5:r>=1e4?4:r>=1e3?3:r>=100?2:r>=10?1:0},n.popCount=function(r){return 16843009*((r=(858993459&(r-=r>>>1&1431655765))+(r>>>2&858993459))+(r>>>4)&252645135)>>>24},n.countTrailingZeros=e,n.nextPow2=function(r){return r+=0===r,--r,r|=r>>>1,r|=r>>>2,r|=r>>>4,r|=r>>>8,(r|=r>>>16)+1},n.prevPow2=function(r){return r|=r>>>1,r|=r>>>2,r|=r>>>4,r|=r>>>8,(r|=r>>>16)-(r>>>1)},n.parity=function(r){return r^=r>>>16,r^=r>>>8,r^=r>>>4,27030>>>(r&=15)&1};var o=new Array(256);!function(r){for(var n=0;n<256;++n){var t=n,e=n,o=7;for(t>>>=1;t;t>>>=1)e<<=1,e|=1&t,--o;r[n]=e<<o&255}}(o),n.reverse=function(r){return o[255&r]<<24|o[r>>>8&255]<<16|o[r>>>16&255]<<8|o[r>>>24&255]},n.interleave2=function(r,n){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r&=65535)|r<<8))|r<<4))|r<<2))|r<<1))|(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n&=65535)|n<<8))|n<<4))|n<<2))|n<<1))<<1},n.deinterleave2=function(r,n){return(r=65535&((r=16711935&((r=252645135&((r=858993459&((r=r>>>n&1431655765)|r>>>1))|r>>>2))|r>>>4))|r>>>16))<<16>>16},n.interleave3=function(r,n,t){return r=1227133513&((r=3272356035&((r=251719695&((r=4278190335&((r&=1023)|r<<16))|r<<8))|r<<4))|r<<2),(r|=(n=1227133513&((n=3272356035&((n=251719695&((n=4278190335&((n&=1023)|n<<16))|n<<8))|n<<4))|n<<2))<<1)|(t=1227133513&((t=3272356035&((t=251719695&((t=4278190335&((t&=1023)|t<<16))|t<<8))|t<<4))|t<<2))<<2},n.deinterleave3=function(r,n){return(r=1023&((r=4278190335&((r=251719695&((r=3272356035&((r=r>>>n&1227133513)|r>>>2))|r>>>4))|r>>>8))|r>>>16))<<22>>22},n.nextCombination=function(r){var n=r|r-1;return n+1|(~n&-~n)-1>>>e(r)+1}},r1bH:function(r,n,t){"use strict";t.r(n),n.default={compareKeys:function(r,n){return null!=r&&null!=n&&(r.toLowerCase()==n.toLowerCase()||{ab:"g#",a:"a","a#":"bb",bb:"a#",b:"cb","b#":"c",cb:"b",c:"b#","c#":"db",db:"c#",d:"d","d#":"eb",eb:"d#",e:"fb","e#":"f",fb:"e",f:"f","f#":"gb",gb:"f#",g:"g","g#":"ab"}[r.toLowerCase()]==n.toLowerCase())}}},z0JX:function(r,n,t){var e=t("RAZa").fft;r.exports={ifft:function(r){for(var n=[],t=0;t<r.length;t++)n[t]=[r[t][1],r[t][0]];for(var o=e(n),u=[],f=0;f<o.length;f++)u[f]=[o[f][1]/o.length,o[f][0]/o.length];return u}}}});