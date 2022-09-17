(()=>{"use strict";var e,t,r,o,n,a={},d={};function f(e){var t=d[e];if(void 0!==t)return t.exports;var r=d[e]={id:e,loaded:!1,exports:{}};return a[e].call(r.exports,r,r.exports,f),r.loaded=!0,r.exports}f.m=a,f.c=d,e=[],f.O=(t,r,o,n)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],n=e[u][2];for(var d=!0,i=0;i<r.length;i++)(!1&n||a>=n)&&Object.keys(f.O).every((e=>f.O[e](r[i])))?r.splice(i--,1):(d=!1,n<a&&(a=n));if(d){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,o,n]},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);f.r(n);var a={};t=t||[null,r({}),r([]),r(r)];for(var d=2&o&&e;"object"==typeof d&&!~t.indexOf(d);d=r(d))Object.getOwnPropertyNames(d).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,f.d(n,a),n},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>"assets/js/"+({53:"935f2afb",85:"1f391b9e",193:"f55d3e7a",195:"c4f5d8e4",394:"9c31bb6c",414:"393be207",504:"822bd8ab",514:"1be78505",589:"5c868d36",607:"533a09ca",671:"0e384e19",755:"e44a2883",768:"826d13d6",792:"dff1c289",817:"14eb3368",818:"1e4232ab",846:"cd102dfe",859:"18c41134",918:"17896441",927:"3416f1d3"}[e]||e)+"."+{53:"3a4f5381",85:"e3553f9d",193:"09d3bd47",195:"fd7c0c5f",394:"1fbc3c1a",414:"c5d8d93a",504:"5e4ab4da",514:"32bd7ef9",589:"42e71674",607:"2bd6a702",666:"d4a37221",671:"6ab6dff7",755:"41f3a252",768:"0b0c1e12",792:"302ea07a",817:"2ff361dd",818:"42e8d514",846:"3b8f989e",859:"03d5cf33",918:"43a2095f",927:"514ecf6f",972:"05eacce5"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},n="extension-documentation:",f.l=(e,t,r,a)=>{if(o[e])o[e].push(t);else{var d,i;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var b=c[u];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==n+r){d=b;break}}d||(i=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,f.nc&&d.setAttribute("nonce",f.nc),d.setAttribute("data-webpack",n+r),d.src=e),o[e]=[t];var l=(t,r)=>{d.onerror=d.onload=null,clearTimeout(s);var n=o[e];if(delete o[e],d.parentNode&&d.parentNode.removeChild(d),n&&n.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),i&&document.head.appendChild(d)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/extension-documentation/",f.gca=function(e){return e={17896441:"918","935f2afb":"53","1f391b9e":"85",f55d3e7a:"193",c4f5d8e4:"195","9c31bb6c":"394","393be207":"414","822bd8ab":"504","1be78505":"514","5c868d36":"589","533a09ca":"607","0e384e19":"671",e44a2883:"755","826d13d6":"768",dff1c289:"792","14eb3368":"817","1e4232ab":"818",cd102dfe:"846","18c41134":"859","3416f1d3":"927"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,532:0};f.f.j=(t,r)=>{var o=f.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var a=f.p+f.u(t),d=new Error;f.l(a,(r=>{if(f.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,o[1](d)}}),"chunk-"+t,t)}},f.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,a=r[0],d=r[1],i=r[2],c=0;if(a.some((t=>0!==e[t]))){for(o in d)f.o(d,o)&&(f.m[o]=d[o]);if(i)var u=i(f)}for(t&&t(r);c<a.length;c++)n=a[c],f.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return f.O(u)},r=self.webpackChunkextension_documentation=self.webpackChunkextension_documentation||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();