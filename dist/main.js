(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"body {\r\n  margin: 0;\r\n  height: 900px;\r\n  background-color: rgb(126, 126, 126);\r\n}\r\n\r\n.main {\r\n  background-color: #f3f3f3;\r\n  height: 600px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 20px;\r\n  margin: 20px;\r\n}\r\n\r\n.header {\r\n  background-color: #f3f3f3;\r\n  display: flex;\r\n  align-items: baseline;\r\n  padding: 0.5rem;\r\n  gap: 1rem;\r\n  height: 100px;\r\n  font-size: 75px;\r\n  font-weight: 900;\r\n}\r\n\r\n.container {\r\n  background-color: whitesmoke;\r\n  height: 520px;\r\n  width: 520px;\r\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.square {\r\n  border: 1px solid rgb(134, 133, 133);\r\n  border-radius: 1px;\r\n  background: white;\r\n}\r\n\r\n.ship {\r\n  background: rgba(161, 161, 161, 0.603);\r\n}\r\n\r\n.hit {\r\n  background: rgb(255, 39, 39);\r\n}\r\n\r\n.miss {\r\n  background: rgb(0, 0, 0);\r\n}\r\n",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),u=t(589),p=t.n(u),f=t(426),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m=()=>{function e(e){0==e&&console.log(e+" is sunk")}let n=2,t=3,r=4;return{make2dArray:function(e,n){let t=new Array(e);for(let e=0;e<t.length;e++)t[e]=new Array(n);return t},placeShip:function(e,n,t,r,o){if("x"==r){for(let r=0;r<e.getLength();r++)o[t][r+n]=e.getMark();console.log(o)}else if("-x"==r){for(let r=0;r<e.getLength();r++)o[t][n-r]=e.getMark();console.log(o)}else if("y"==r){for(let r=0;r<e.getLength();r++)o[t-r][n]=e.getMark();console.log(o)}else if("-y"==r){for(let r=0;r<e.getLength();r++)o[t+r][n]=e.getMark();console.log(o)}},receiveAttack:function(o,a,i){"P"==i[a][o]?(i[a][o]="X",n--,e(n)):"C"==i[a][o]?(i[a][o]="X",t--,e(t)):"B"==i[a][o]?(i[a][o]="X",r--,e(r)):null==i[a][o]&&(i[a][o]="M")}}},g=(e,n)=>{const t=e;return{getLength:function(){return e},hit:function(){t--,function(e){0==e&&console.log(n+" is sunk!")}(t)},getMark:function(){return n}}};!function(){const e=document.createElement("div");e.classList.add("header"),e.innerHTML="Battleship",document.body.appendChild(e)}(),function(){const e=document.createElement("div");e.classList.add("footer"),document.body.appendChild(e)}(),function(){const e=document.createElement("div");e.classList.add("main"),document.body.appendChild(e);const n=document.createElement("div");n.classList.add("container"),e.appendChild(n);const t=document.createElement("div");t.classList.add("container"),e.appendChild(t);const r=m(),o=m();let a=r.make2dArray(10,10),i=o.make2dArray(10,10);const c=g(2,"P"),s=g(3,"C"),l=g(4,"B");function d(e){n.innerHTML="";for(let t=0;t<10;t++)for(let r=0;r<10;r++){const o=document.createElement("div");o.classList.add("square"),o.style.width="50px",o.style.height="50px",o.id=[t,r],p(e[t][r],o),n.append(o)}document.querySelectorAll(".square").forEach((e=>e.addEventListener("click",f)))}function u(e){t.innerHTML="";for(let n=0;n<10;n++)for(let r=0;r<10;r++){const o=document.createElement("div");o.classList.add("square"),o.style.width="50px",o.style.height="50px",p(e[n][r],o),t.append(o)}}function p(e,n){null==e?n.classList.add("empty"):"X"==e?n.classList.add("hit"):"M"==e?n.classList.add("miss"):"P"!=e&&"C"!=e&&"B"!=e||n.classList.add("ship")}function f(e){r.receiveAttack(Number(e.path[0].id[2]),Number(e.path[0].id[0]),a),d(a),o.receiveAttack(Math.floor(9*Math.random()),Math.floor(9*Math.random()),i),u(i),e.stopPropagation()}r.placeShip(c,5,0,"-y",a),r.placeShip(s,1,0,"-y",a),r.placeShip(l,0,5,"x",a),o.placeShip(c,1,1,"-y",i),o.placeShip(s,3,0,"-y",i),o.placeShip(l,2,8,"x",i),d(a),u(i)}()})()})();