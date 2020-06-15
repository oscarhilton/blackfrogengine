/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./engine/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./engine/src/assets/index.js":
/*!************************************!*\
  !*** ./engine/src/assets/index.js ***!
  \************************************/
/*! exports provided: IMAGE_FILES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_FILES", function() { return IMAGE_FILES; });
const IMAGE_FILES = {
  FOO: {
    name: 'Foo',
    src: 'https://i.pinimg.com/originals/a2/2f/e1/a22fe1f8ebc3f136577e3d16c489792d.jpg',
  },
  BAR: {
    name: 'Bar',
    src: 'https://avatars3.githubusercontent.com/u/2562823?s=88&v=4',
  },
}

/***/ }),

/***/ "./engine/src/components/Canvas.js":
/*!*****************************************!*\
  !*** ./engine/src/components/Canvas.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Canvas; });
class Canvas {
  constructor(id, renderer = "2d") {
    this.canvas = document.getElementById(id);
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.ctx = this.canvas.getContext(renderer);
    this.images = {};

    this.clear = this.clear.bind(this);
    this.loadImage = this.loadImage.bind(this);
    this.loadImages = this.loadImages.bind(this);
    this.drawImage = this.drawImage.bind(this);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  loadImage({ name, src }) {
    if (!name || !src) return;
    const imageElement = new Image();
    imageElement.src = src;
    imageElement.onload = () => this.images[name] = imageElement;
  }

  loadImages(array) {
    if (!Array.isArray(array)) return;
    array.forEach(image => this.loadImage(image));
  }

  drawImage({ name }, x, y, h, w) {
    if (!this.images[name]) return;
    this.ctx.drawImage(this.images[name], x, y, h, w);
  }
}

/***/ }),

/***/ "./engine/src/components/Game.js":
/*!***************************************!*\
  !*** ./engine/src/components/Game.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
class Game {
  constructor({ state = {} }) {
    this.frameCount = 0;
    this.state = state;
    
    this.start = this.start.bind(this);
    this.setup = this.setup.bind(this);
    this.update = this.update.bind(this);
    this.draw = this.draw.bind(this);
    this.loop = this.loop.bind(this);
  }

  start() {
    console.log("STARTING!");
    window.requestAnimationFrame(this.setup);
    window.requestAnimationFrame(this.loop);
  }

  setup() {}

  update(progress) {}

  draw() {}

  loop(timestamp) {
    const progress = (timestamp - this.frameCount);
    this.update(progress);
    this.draw();
    this.frameCount = timestamp;
    window.requestAnimationFrame(this.loop);
  }
}

/***/ }),

/***/ "./engine/src/components/GameObject.js":
/*!*********************************************!*\
  !*** ./engine/src/components/GameObject.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameObject; });
class GameObject {
  constructor(x, y, width, height) {
    this.location.x = x;
    this.location.y = y;
    this.width = width;
    this.height = height;
  }

  update() {}
  display() {}
}

/***/ }),

/***/ "./engine/src/index.js":
/*!*****************************!*\
  !*** ./engine/src/index.js ***!
  \*****************************/
/*! exports provided: canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return canvas; });
/* harmony import */ var _components_Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Canvas */ "./engine/src/components/Canvas.js");
/* harmony import */ var _components_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Game */ "./engine/src/components/Game.js");
/* harmony import */ var _components_GameObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/GameObject */ "./engine/src/components/GameObject.js");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets */ "./engine/src/assets/index.js");





const canvas = new _components_Canvas__WEBPACK_IMPORTED_MODULE_0__["default"]("gameCanvas");

const game = new _components_Game__WEBPACK_IMPORTED_MODULE_1__["default"]({
  state: {
    x: 1,
  }
});

game.setup = function() {
  canvas.loadImages([_assets__WEBPACK_IMPORTED_MODULE_3__["IMAGE_FILES"].FOO, _assets__WEBPACK_IMPORTED_MODULE_3__["IMAGE_FILES"].BAR]);
}.bind(game);

game.update = function(progress) {
  this.state.x += progress / 200;
}.bind(game);

game.draw = function() {
  canvas.clear();
  canvas.drawImage(_assets__WEBPACK_IMPORTED_MODULE_3__["IMAGE_FILES"].FOO, this.state.x, this.state.x, 50, 50);
  canvas.drawImage(_assets__WEBPACK_IMPORTED_MODULE_3__["IMAGE_FILES"].BAR, 300, 100, 50, 50);
  canvas.drawImage(_assets__WEBPACK_IMPORTED_MODULE_3__["IMAGE_FILES"].FOO, 50, 10, 50, 50);
}.bind(game);


game.start();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL3NyYy9hc3NldHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL3NyYy9jb21wb25lbnRzL0NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvc3JjL2NvbXBvbmVudHMvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvc3JjL2NvbXBvbmVudHMvR2FtZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUFBO0FBQWU7QUFDZixlQUFlLFdBQVcsRUFBRTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBQ0o7QUFDWTtBQUNWOztBQUVoQyxtQkFBbUIsMERBQU07O0FBRWhDLGlCQUFpQix3REFBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUJBQXFCLG1EQUFXLE1BQU0sbURBQVc7QUFDakQsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsbUJBQW1CLG1EQUFXO0FBQzlCLG1CQUFtQixtREFBVztBQUM5QixtQkFBbUIsbURBQVc7QUFDOUIsQ0FBQzs7O0FBR0QsYSIsImZpbGUiOiJnYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9lbmdpbmUvc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGNvbnN0IElNQUdFX0ZJTEVTID0ge1xuICBGT086IHtcbiAgICBuYW1lOiAnRm9vJyxcbiAgICBzcmM6ICdodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvYTIvMmYvZTEvYTIyZmUxZjhlYmMzZjEzNjU3N2UzZDE2YzQ4OTc5MmQuanBnJyxcbiAgfSxcbiAgQkFSOiB7XG4gICAgbmFtZTogJ0JhcicsXG4gICAgc3JjOiAnaHR0cHM6Ly9hdmF0YXJzMy5naXRodWJ1c2VyY29udGVudC5jb20vdS8yNTYyODIzP3M9ODgmdj00JyxcbiAgfSxcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuICBjb25zdHJ1Y3RvcihpZCwgcmVuZGVyZXIgPSBcIjJkXCIpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICB0aGlzLndpZHRoID0gdGhpcy5jYW52YXMud2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KHJlbmRlcmVyKTtcbiAgICB0aGlzLmltYWdlcyA9IHt9O1xuXG4gICAgdGhpcy5jbGVhciA9IHRoaXMuY2xlYXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvYWRJbWFnZSA9IHRoaXMubG9hZEltYWdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sb2FkSW1hZ2VzID0gdGhpcy5sb2FkSW1hZ2VzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3SW1hZ2UgPSB0aGlzLmRyYXdJbWFnZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgfVxuXG4gIGxvYWRJbWFnZSh7IG5hbWUsIHNyYyB9KSB7XG4gICAgaWYgKCFuYW1lIHx8ICFzcmMpIHJldHVybjtcbiAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZUVsZW1lbnQuc3JjID0gc3JjO1xuICAgIGltYWdlRWxlbWVudC5vbmxvYWQgPSAoKSA9PiB0aGlzLmltYWdlc1tuYW1lXSA9IGltYWdlRWxlbWVudDtcbiAgfVxuXG4gIGxvYWRJbWFnZXMoYXJyYXkpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSByZXR1cm47XG4gICAgYXJyYXkuZm9yRWFjaChpbWFnZSA9PiB0aGlzLmxvYWRJbWFnZShpbWFnZSkpO1xuICB9XG5cbiAgZHJhd0ltYWdlKHsgbmFtZSB9LCB4LCB5LCBoLCB3KSB7XG4gICAgaWYgKCF0aGlzLmltYWdlc1tuYW1lXSkgcmV0dXJuO1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlc1tuYW1lXSwgeCwgeSwgaCwgdyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoeyBzdGF0ZSA9IHt9IH0pIHtcbiAgICB0aGlzLmZyYW1lQ291bnQgPSAwO1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICBcbiAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0dXAgPSB0aGlzLnNldHVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9vcCA9IHRoaXMubG9vcC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgY29uc29sZS5sb2coXCJTVEFSVElORyFcIik7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnNldHVwKTtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcCk7XG4gIH1cblxuICBzZXR1cCgpIHt9XG5cbiAgdXBkYXRlKHByb2dyZXNzKSB7fVxuXG4gIGRyYXcoKSB7fVxuXG4gIGxvb3AodGltZXN0YW1wKSB7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSAodGltZXN0YW1wIC0gdGhpcy5mcmFtZUNvdW50KTtcbiAgICB0aGlzLnVwZGF0ZShwcm9ncmVzcyk7XG4gICAgdGhpcy5kcmF3KCk7XG4gICAgdGhpcy5mcmFtZUNvdW50ID0gdGltZXN0YW1wO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPYmplY3Qge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy5sb2NhdGlvbi54ID0geDtcbiAgICB0aGlzLmxvY2F0aW9uLnkgPSB5O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIHVwZGF0ZSgpIHt9XG4gIGRpc3BsYXkoKSB7fVxufSIsImltcG9ydCBDYW52YXMgZnJvbSAnLi9jb21wb25lbnRzL0NhbnZhcyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2NvbXBvbmVudHMvR2FtZSc7XG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tICcuL2NvbXBvbmVudHMvR2FtZU9iamVjdCc7XG5pbXBvcnQgeyBJTUFHRV9GSUxFUyB9IGZyb20gJy4vYXNzZXRzJztcblxuZXhwb3J0IGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoXCJnYW1lQ2FudmFzXCIpO1xuXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoe1xuICBzdGF0ZToge1xuICAgIHg6IDEsXG4gIH1cbn0pO1xuXG5nYW1lLnNldHVwID0gZnVuY3Rpb24oKSB7XG4gIGNhbnZhcy5sb2FkSW1hZ2VzKFtJTUFHRV9GSUxFUy5GT08sIElNQUdFX0ZJTEVTLkJBUl0pO1xufS5iaW5kKGdhbWUpO1xuXG5nYW1lLnVwZGF0ZSA9IGZ1bmN0aW9uKHByb2dyZXNzKSB7XG4gIHRoaXMuc3RhdGUueCArPSBwcm9ncmVzcyAvIDIwMDtcbn0uYmluZChnYW1lKTtcblxuZ2FtZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG4gIGNhbnZhcy5jbGVhcigpO1xuICBjYW52YXMuZHJhd0ltYWdlKElNQUdFX0ZJTEVTLkZPTywgdGhpcy5zdGF0ZS54LCB0aGlzLnN0YXRlLngsIDUwLCA1MCk7XG4gIGNhbnZhcy5kcmF3SW1hZ2UoSU1BR0VfRklMRVMuQkFSLCAzMDAsIDEwMCwgNTAsIDUwKTtcbiAgY2FudmFzLmRyYXdJbWFnZShJTUFHRV9GSUxFUy5GT08sIDUwLCAxMCwgNTAsIDUwKTtcbn0uYmluZChnYW1lKTtcblxuXG5nYW1lLnN0YXJ0KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==