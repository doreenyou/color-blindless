!function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e),r.d(e,"getFilteredImage",(function(){return u}));var n={Normal:{R:[100,0,0],G:[0,100,0],B:[0,0,100]},Protanopia:{R:[56.667,43.333,0],G:[55.833,44.167,0],B:[0,24.167,75.833]},Protanomaly:{R:[81.667,18.333,0],G:[33.333,66.667,0],B:[0,12.5,87.5]},Deuteranopia:{R:[62.5,37.5,0],G:[70,30,0],B:[0,30,70]},Deuteranomaly:{R:[80,20,0],G:[25.833,74.167,0],B:[0,14.167,85.833]},Tritanopia:{R:[95,5,0],G:[0,43.333,56.667],B:[0,47.5,52.5]},Tritanomaly:{R:[96.667,3.333,0],G:[0,73.333,26.667],B:[0,18.333,81.667]},Achromatopsia:{R:[29.9,58.7,11.4],G:[29.9,58.7,11.4],B:[29.9,58.7,11.4]},Achromatomaly:{R:[61.8,32,6.2],G:[16.3,77.5,6.2],B:[16.3,32,51.6]}},a={};function o(t){return function(e){var r=e[0],n=e[1],a=e[2];return[r*t.R[0]/100+n*t.R[1]/100+a*t.R[2]/100,r*t.G[0]/100+n*t.G[1]/100+a*t.G[2]/100,r*t.B[0]/100+n*t.B[1]/100+a*t.B[2]/100]}}for(var i in n)n.hasOwnProperty(i)&&(a[i]=o(n[i]));var u=function(t,e,r){var n=function(t){var e=a;if((t=t.substring(5))in e)return e[t];throw"Library does not support Filter Type: "+t}(e),o=document.createElement("canvas"),i=t.naturalWidth,u=t.naturalHeight,l=r/i;l>1&&(function(t){throw new TypeError('"'+t+'" is read-only')}("scale"),l=1);var c=window.devicePixelRatio;o.style.width=i*l,o.style.height=u*l,o.width=i*l*c,o.height=u*l*c;var d=o.getContext("2d");d.drawImage(t,0,0,i*l*c,u*l*c);for(var f=d.getImageData(0,0,i*l*c,u*l*c),p=0;p<f.data.length;p+=4){var s=n([f.data[p],f.data[p+1],f.data[p+2]]);f.data[p]=s[0],f.data[p+1]=s[1],f.data[p+2]=s[2]}return d.putImageData(f,0,0),o.toDataURL()}}]);