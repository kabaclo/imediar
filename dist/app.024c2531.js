parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FRKU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(){return'\n    <nav class="nav-wrapper transparent">\n      <div class="container">\n        <a href="" class="sidenav-trigger" data-target="mobile-menu">\n          <i class="material-icons">menu</i>\n        </a>\n        <img id="logo-img" alt="logo" />\n        <a href="#" class="brand-logo">Imediar</a>\n\n        <ul class="right hide-on-med-and-down">\n          <li>\n            <a href="#" class="yellow-text text-lighten-3" autofocus>Home</a>\n          </li>\n          <li>\n            <a href="#" class="yellow-text text-lighten-3">Recorder</a>\n          </li>\n          <li>\n            <a href="#" class="yellow-text text-lighten-3">Streaming</a>\n          </li>\n        </ul>\n        <ul class="sidenav #263238 blue-grey darken-4" id="mobile-menu">\n          <li><a href="#">Home</a></li>\n          <li><a href="#">Recorder</a></li>\n          <li><a href="#">Streaming</a></li>\n        </ul>\n      </div>\n    </nav>\n    '},n=e;exports.default=n;
},{}],"G5Xn":[function(require,module,exports) {

},{}],"ffN9":[function(require,module,exports) {
"use strict";var e=n(require("./components/Header"));function n(e){return e&&e.__esModule?e:{default:e}}require("./scss/app.scss"),console.log("It works!");var o=function(){document.getElementById("header").innerHTML=(0,e.default)(),document.getElementById("logo-img").src="../public/img/logo.png"};o();
},{"./components/Header":"FRKU","./scss/app.scss":"G5Xn"}]},{},["ffN9"], null)
//# sourceMappingURL=app.024c2531.js.map