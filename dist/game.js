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
    src: 'https://www.clipartmax.com/png/middle/85-853849_graphic-the-astro-cat-sprite-single-cat-sprite.png',
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
/*! exports provided: default, canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return canvas; });
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

const canvas = new Canvas("gameCanvas");

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
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ "./engine/src/components/Canvas.js");
/* harmony import */ var _config_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/controls */ "./engine/src/config/controls.js");



class Game {
  constructor({ state, constants = {} }) {
    this.frameCount = 0;
    this.state = state;
    this.constants = constants;
    this.keyPressed = {};
    
    this.start = this.start.bind(this);
    this.setup = this.setup.bind(this);
    this.update = this.update.bind(this);
    this.draw = this.draw.bind(this);
    this.loop = this.loop.bind(this);

    document.addEventListener('keydown', ({ keyCode }) => this.keyPressed[keyCode] = true, false);
    document.addEventListener('keyup', ({ keyCode }) => this.keyPressed[keyCode] = false, false);
  }

  start() {
    window.requestAnimationFrame(this.setup);
    window.requestAnimationFrame(this.loop);
  }

  setup() {
    console.log("SETTING UP!");
  }

  update(progress) {
  }

  draw() {
    _Canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].clear();
  }

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
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ "./engine/src/components/Canvas.js");
/* harmony import */ var _maths_Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../maths/Vector */ "./engine/src/maths/Vector.js");
/* harmony import */ var _config_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/controls */ "./engine/src/config/controls.js");




class GameObject {
  constructor(x, y, width, height) {
    this.location = new _maths_Vector__WEBPACK_IMPORTED_MODULE_1__["default"](x, y);
    this.width = width;
    this.height = height;
    this.id = '_' + Math.random().toString(36).substr(2, 9);
    this.hit = false;

    this.detectCollision = this.detectCollision.bind(this);
  }

  update() {
    if (this.hit) {
      console.log("HIT!");
    }
  }

  display() {}

  giveControls(controlsObject) {
    if (controlsObject[_config_controls__WEBPACK_IMPORTED_MODULE_2__["KEYS"].UP]) return console.log("UP!");
    if (controlsObject[_config_controls__WEBPACK_IMPORTED_MODULE_2__["KEYS"].RIGHT]) return console.log("RIGHT!");
    if (controlsObject[_config_controls__WEBPACK_IMPORTED_MODULE_2__["KEYS"].DOWN]) return console.log("DOWN!");
    if (controlsObject[_config_controls__WEBPACK_IMPORTED_MODULE_2__["KEYS"].LEFT]) return console.log("LEFT!");
  }

  detectCollision(object) {
    Object.values(object).forEach(o => {
      if (o.id === this.id) return;

      if (
        o.location.x < this.location.x &&
        o.location.x < (this.location.x + this.width) &&
        o.location.x + o.width - this.location.x + this.width > 0
      ) {
        o.hit = true;
      } else {
        o.hit = false;
      }
    })
  }
}

/***/ }),

/***/ "./engine/src/components/Mover.js":
/*!****************************************!*\
  !*** ./engine/src/components/Mover.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mover; });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject */ "./engine/src/components/GameObject.js");
/* harmony import */ var _maths_Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../maths/Vector */ "./engine/src/maths/Vector.js");
/* harmony import */ var _config_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/controls */ "./engine/src/config/controls.js");




class Mover extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(x, y, width, height, mass = 1) {
    super(x, y, width, height);
    this.velocity = new _maths_Vector__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0);
    this.acceleration = new _maths_Vector__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0);
    this.mass = mass;

    this.giveControls = this.giveControls.bind(this);
    this.applyForce =  this.applyForce.bind(this);
    this.update = this.update.bind(this);
  }

  giveControls(controlsObject) {
    const moveAmount = 0.08;
    if (controlsObject[_config_controls__WEBPACK_IMPORTED_MODULE_2__["KEYS"].UP]) this.applyForce(new _maths_Vector__WEBPACK_IMPORTED_MODULE_1__["default"](0, -moveAmount));
    if (controlsObject[_config_controls__WEBPACK_IMPORTED_MODULE_2__["KEYS"].RIGHT]) this.applyForce(new _maths_Vector__WEBPACK_IMPORTED_MODULE_1__["default"](moveAmount, 0));
    if (controlsObject[_config_controls__WEBPACK_IMPORTED_MODULE_2__["KEYS"].DOWN]) this.applyForce(new _maths_Vector__WEBPACK_IMPORTED_MODULE_1__["default"](0, moveAmount));
    if (controlsObject[_config_controls__WEBPACK_IMPORTED_MODULE_2__["KEYS"].LEFT]) this.applyForce(new _maths_Vector__WEBPACK_IMPORTED_MODULE_1__["default"](-moveAmount, 0));
  }

  applyForce(forceVector) {
    this.acceleration.add(forceVector);
  }

  update() {
    super.update();
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.acceleration.multiply(0);
  }
}

/***/ }),

/***/ "./engine/src/config/controls.js":
/*!***************************************!*\
  !*** ./engine/src/config/controls.js ***!
  \***************************************/
/*! exports provided: KEYS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYS", function() { return KEYS; });
const KEYS = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
};

/***/ }),

/***/ "./engine/src/index.js":
/*!*****************************!*\
  !*** ./engine/src/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Canvas */ "./engine/src/components/Canvas.js");
/* harmony import */ var _components_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Game */ "./engine/src/components/Game.js");
/* harmony import */ var _components_GameObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/GameObject */ "./engine/src/components/GameObject.js");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets */ "./engine/src/assets/index.js");
/* harmony import */ var _components_Mover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Mover */ "./engine/src/components/Mover.js");
/* harmony import */ var _maths_Vector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maths/Vector */ "./engine/src/maths/Vector.js");








class SpaceCat extends _components_Game__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super({
      state: {
        objects: {
          player: new _components_Mover__WEBPACK_IMPORTED_MODULE_4__["default"](10, 10, 20, 20),
          otherThing: new _components_Mover__WEBPACK_IMPORTED_MODULE_4__["default"](_components_Canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width /  2, _components_Canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2, 50, 50),
          anotherThing: new _components_Mover__WEBPACK_IMPORTED_MODULE_4__["default"](100, 50, 50, 50),
        },
      },
      constants: {
        gravity: new _maths_Vector__WEBPACK_IMPORTED_MODULE_5__["default"](0, 0.05),
      }
    });
  }

  setup(progress) {
    super.setup(progress);

    _components_Canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].loadImages([_assets__WEBPACK_IMPORTED_MODULE_3__["IMAGE_FILES"].FOO, _assets__WEBPACK_IMPORTED_MODULE_3__["IMAGE_FILES"].BAR]);
  }


  update() {
    const { player, otherThing, anotherThing } = this.state.objects;
    super.update();

    player.applyForce(this.constants.gravity);
    player.giveControls(this.keyPressed);
    player.detectCollision(this.state.objects);
    player.update();
    otherThing.update();
    anotherThing.update();
  }

  draw() {
    const { player, otherThing, anotherThing } = this.state.objects;
    super.draw();

    _components_Canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].drawImage(_assets__WEBPACK_IMPORTED_MODULE_3__["IMAGE_FILES"].FOO, player.location.x, player.location.y, 20, 20);
    _components_Canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].drawImage(_assets__WEBPACK_IMPORTED_MODULE_3__["IMAGE_FILES"].BAR, otherThing.location.x, otherThing.location.y, 50, 50);
    _components_Canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].drawImage(_assets__WEBPACK_IMPORTED_MODULE_3__["IMAGE_FILES"].BAR, anotherThing.location.x, anotherThing.location.y, 50, 50);
  }
}

new SpaceCat().start();


/***/ }),

/***/ "./engine/src/maths/Vector.js":
/*!************************************!*\
  !*** ./engine/src/maths/Vector.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vector; });
class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.add = this.add.bind(this);
  }

  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }

  multiply(scalar) {
    this.x *= scalar;
    this.y *= scalar;
  }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL3NyYy9hc3NldHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL3NyYy9jb21wb25lbnRzL0NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvc3JjL2NvbXBvbmVudHMvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvc3JjL2NvbXBvbmVudHMvR2FtZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvc3JjL2NvbXBvbmVudHMvTW92ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL3NyYy9jb25maWcvY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vZW5naW5lL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lbmdpbmUvc3JjL21hdGhzL1ZlY3Rvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7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bURBQVc7QUFDaEM7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2VuZ2luZS9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgY29uc3QgSU1BR0VfRklMRVMgPSB7XG4gIEZPTzoge1xuICAgIG5hbWU6ICdGb28nLFxuICAgIHNyYzogJ2h0dHBzOi8vd3d3LmNsaXBhcnRtYXguY29tL3BuZy9taWRkbGUvODUtODUzODQ5X2dyYXBoaWMtdGhlLWFzdHJvLWNhdC1zcHJpdGUtc2luZ2xlLWNhdC1zcHJpdGUucG5nJyxcbiAgfSxcbiAgQkFSOiB7XG4gICAgbmFtZTogJ0JhcicsXG4gICAgc3JjOiAnaHR0cHM6Ly9hdmF0YXJzMy5naXRodWJ1c2VyY29udGVudC5jb20vdS8yNTYyODIzP3M9ODgmdj00JyxcbiAgfSxcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuICBjb25zdHJ1Y3RvcihpZCwgcmVuZGVyZXIgPSBcIjJkXCIpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICB0aGlzLndpZHRoID0gdGhpcy5jYW52YXMud2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KHJlbmRlcmVyKTtcbiAgICB0aGlzLmltYWdlcyA9IHt9O1xuXG4gICAgdGhpcy5jbGVhciA9IHRoaXMuY2xlYXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvYWRJbWFnZSA9IHRoaXMubG9hZEltYWdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sb2FkSW1hZ2VzID0gdGhpcy5sb2FkSW1hZ2VzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3SW1hZ2UgPSB0aGlzLmRyYXdJbWFnZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgfVxuXG4gIGxvYWRJbWFnZSh7IG5hbWUsIHNyYyB9KSB7XG4gICAgaWYgKCFuYW1lIHx8ICFzcmMpIHJldHVybjtcbiAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZUVsZW1lbnQuc3JjID0gc3JjO1xuICAgIGltYWdlRWxlbWVudC5vbmxvYWQgPSAoKSA9PiB0aGlzLmltYWdlc1tuYW1lXSA9IGltYWdlRWxlbWVudDtcbiAgfVxuXG4gIGxvYWRJbWFnZXMoYXJyYXkpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSByZXR1cm47XG4gICAgYXJyYXkuZm9yRWFjaChpbWFnZSA9PiB0aGlzLmxvYWRJbWFnZShpbWFnZSkpO1xuICB9XG5cbiAgZHJhd0ltYWdlKHsgbmFtZSB9LCB4LCB5LCBoLCB3KSB7XG4gICAgaWYgKCF0aGlzLmltYWdlc1tuYW1lXSkgcmV0dXJuO1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlc1tuYW1lXSwgeCwgeSwgaCwgdyk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoXCJnYW1lQ2FudmFzXCIpOyIsImltcG9ydCB7IGNhbnZhcyB9IGZyb20gJy4vQ2FudmFzJztcbmltcG9ydCB7IEtFWVMgfSBmcm9tICcuLi9jb25maWcvY29udHJvbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoeyBzdGF0ZSwgY29uc3RhbnRzID0ge30gfSkge1xuICAgIHRoaXMuZnJhbWVDb3VudCA9IDA7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMuY29uc3RhbnRzID0gY29uc3RhbnRzO1xuICAgIHRoaXMua2V5UHJlc3NlZCA9IHt9O1xuICAgIFxuICAgIHRoaXMuc3RhcnQgPSB0aGlzLnN0YXJ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXR1cCA9IHRoaXMuc2V0dXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgdGhpcy5sb29wID0gdGhpcy5sb29wLmJpbmQodGhpcyk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKHsga2V5Q29kZSB9KSA9PiB0aGlzLmtleVByZXNzZWRba2V5Q29kZV0gPSB0cnVlLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoeyBrZXlDb2RlIH0pID0+IHRoaXMua2V5UHJlc3NlZFtrZXlDb2RlXSA9IGZhbHNlLCBmYWxzZSk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuc2V0dXApO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wKTtcbiAgfVxuXG4gIHNldHVwKCkge1xuICAgIGNvbnNvbGUubG9nKFwiU0VUVElORyBVUCFcIik7XG4gIH1cblxuICB1cGRhdGUocHJvZ3Jlc3MpIHtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgY2FudmFzLmNsZWFyKCk7XG4gIH1cblxuICBsb29wKHRpbWVzdGFtcCkge1xuICAgIGNvbnN0IHByb2dyZXNzID0gKHRpbWVzdGFtcCAtIHRoaXMuZnJhbWVDb3VudCk7XG4gICAgdGhpcy51cGRhdGUocHJvZ3Jlc3MpO1xuICAgIHRoaXMuZHJhdygpO1xuICAgIHRoaXMuZnJhbWVDb3VudCA9IHRpbWVzdGFtcDtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcCk7XG4gIH1cbn0iLCJpbXBvcnQgeyBjYW52YXMgfSBmcm9tICcuL0NhbnZhcyc7XG5pbXBvcnQgVmVjdG9yIGZyb20gJy4uL21hdGhzL1ZlY3Rvcic7XG5pbXBvcnQgeyBLRVlTIH0gZnJvbSAnLi4vY29uZmlnL2NvbnRyb2xzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLmxvY2F0aW9uID0gbmV3IFZlY3Rvcih4LCB5KTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5pZCA9ICdfJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KTtcbiAgICB0aGlzLmhpdCA9IGZhbHNlO1xuXG4gICAgdGhpcy5kZXRlY3RDb2xsaXNpb24gPSB0aGlzLmRldGVjdENvbGxpc2lvbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLmhpdCkge1xuICAgICAgY29uc29sZS5sb2coXCJISVQhXCIpO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXkoKSB7fVxuXG4gIGdpdmVDb250cm9scyhjb250cm9sc09iamVjdCkge1xuICAgIGlmIChjb250cm9sc09iamVjdFtLRVlTLlVQXSkgcmV0dXJuIGNvbnNvbGUubG9nKFwiVVAhXCIpO1xuICAgIGlmIChjb250cm9sc09iamVjdFtLRVlTLlJJR0hUXSkgcmV0dXJuIGNvbnNvbGUubG9nKFwiUklHSFQhXCIpO1xuICAgIGlmIChjb250cm9sc09iamVjdFtLRVlTLkRPV05dKSByZXR1cm4gY29uc29sZS5sb2coXCJET1dOIVwiKTtcbiAgICBpZiAoY29udHJvbHNPYmplY3RbS0VZUy5MRUZUXSkgcmV0dXJuIGNvbnNvbGUubG9nKFwiTEVGVCFcIik7XG4gIH1cblxuICBkZXRlY3RDb2xsaXNpb24ob2JqZWN0KSB7XG4gICAgT2JqZWN0LnZhbHVlcyhvYmplY3QpLmZvckVhY2gobyA9PiB7XG4gICAgICBpZiAoby5pZCA9PT0gdGhpcy5pZCkgcmV0dXJuO1xuXG4gICAgICBpZiAoXG4gICAgICAgIG8ubG9jYXRpb24ueCA8IHRoaXMubG9jYXRpb24ueCAmJlxuICAgICAgICBvLmxvY2F0aW9uLnggPCAodGhpcy5sb2NhdGlvbi54ICsgdGhpcy53aWR0aCkgJiZcbiAgICAgICAgby5sb2NhdGlvbi54ICsgby53aWR0aCAtIHRoaXMubG9jYXRpb24ueCArIHRoaXMud2lkdGggPiAwXG4gICAgICApIHtcbiAgICAgICAgby5oaXQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgby5oaXQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG59IiwiaW1wb3J0IEdhbWVPYmplY3QgZnJvbSAnLi9HYW1lT2JqZWN0JztcbmltcG9ydCBWZWN0b3IgZnJvbSAnLi4vbWF0aHMvVmVjdG9yJztcbmltcG9ydCB7IEtFWVMgfSBmcm9tICcuLi9jb25maWcvY29udHJvbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZlciBleHRlbmRzIEdhbWVPYmplY3Qge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBtYXNzID0gMSkge1xuICAgIHN1cGVyKHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yKDAsIDApO1xuICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gbmV3IFZlY3RvcigwLCAwKTtcbiAgICB0aGlzLm1hc3MgPSBtYXNzO1xuXG4gICAgdGhpcy5naXZlQ29udHJvbHMgPSB0aGlzLmdpdmVDb250cm9scy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYXBwbHlGb3JjZSA9ICB0aGlzLmFwcGx5Rm9yY2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG4gIH1cblxuICBnaXZlQ29udHJvbHMoY29udHJvbHNPYmplY3QpIHtcbiAgICBjb25zdCBtb3ZlQW1vdW50ID0gMC4wODtcbiAgICBpZiAoY29udHJvbHNPYmplY3RbS0VZUy5VUF0pIHRoaXMuYXBwbHlGb3JjZShuZXcgVmVjdG9yKDAsIC1tb3ZlQW1vdW50KSk7XG4gICAgaWYgKGNvbnRyb2xzT2JqZWN0W0tFWVMuUklHSFRdKSB0aGlzLmFwcGx5Rm9yY2UobmV3IFZlY3Rvcihtb3ZlQW1vdW50LCAwKSk7XG4gICAgaWYgKGNvbnRyb2xzT2JqZWN0W0tFWVMuRE9XTl0pIHRoaXMuYXBwbHlGb3JjZShuZXcgVmVjdG9yKDAsIG1vdmVBbW91bnQpKTtcbiAgICBpZiAoY29udHJvbHNPYmplY3RbS0VZUy5MRUZUXSkgdGhpcy5hcHBseUZvcmNlKG5ldyBWZWN0b3IoLW1vdmVBbW91bnQsIDApKTtcbiAgfVxuXG4gIGFwcGx5Rm9yY2UoZm9yY2VWZWN0b3IpIHtcbiAgICB0aGlzLmFjY2VsZXJhdGlvbi5hZGQoZm9yY2VWZWN0b3IpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHN1cGVyLnVwZGF0ZSgpO1xuICAgIHRoaXMudmVsb2NpdHkuYWRkKHRoaXMuYWNjZWxlcmF0aW9uKTtcbiAgICB0aGlzLmxvY2F0aW9uLmFkZCh0aGlzLnZlbG9jaXR5KTtcbiAgICB0aGlzLmFjY2VsZXJhdGlvbi5tdWx0aXBseSgwKTtcbiAgfVxufSIsImV4cG9ydCBjb25zdCBLRVlTID0ge1xuICBMRUZUOiAzNyxcbiAgVVA6IDM4LFxuICBSSUdIVDogMzksXG4gIERPV046IDQwLFxufTsiLCJpbXBvcnQgeyBjYW52YXMgfSBmcm9tICcuL2NvbXBvbmVudHMvQ2FudmFzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vY29tcG9uZW50cy9HYW1lJztcbmltcG9ydCBHYW1lT2JqZWN0IGZyb20gJy4vY29tcG9uZW50cy9HYW1lT2JqZWN0JztcbmltcG9ydCB7IElNQUdFX0ZJTEVTIH0gZnJvbSAnLi9hc3NldHMnO1xuaW1wb3J0IE1vdmVyIGZyb20gJy4vY29tcG9uZW50cy9Nb3Zlcic7XG5pbXBvcnQgVmVjdG9yIGZyb20gJy4vbWF0aHMvVmVjdG9yJztcblxuXG5jbGFzcyBTcGFjZUNhdCBleHRlbmRzIEdhbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBzdGF0ZToge1xuICAgICAgICBvYmplY3RzOiB7XG4gICAgICAgICAgcGxheWVyOiBuZXcgTW92ZXIoMTAsIDEwLCAyMCwgMjApLFxuICAgICAgICAgIG90aGVyVGhpbmc6IG5ldyBNb3ZlcihjYW52YXMud2lkdGggLyAgMiwgY2FudmFzLmhlaWdodCAvIDIsIDUwLCA1MCksXG4gICAgICAgICAgYW5vdGhlclRoaW5nOiBuZXcgTW92ZXIoMTAwLCA1MCwgNTAsIDUwKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBjb25zdGFudHM6IHtcbiAgICAgICAgZ3Jhdml0eTogbmV3IFZlY3RvcigwLCAwLjA1KSxcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldHVwKHByb2dyZXNzKSB7XG4gICAgc3VwZXIuc2V0dXAocHJvZ3Jlc3MpO1xuXG4gICAgY2FudmFzLmxvYWRJbWFnZXMoW0lNQUdFX0ZJTEVTLkZPTywgSU1BR0VfRklMRVMuQkFSXSk7XG4gIH1cblxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCB7IHBsYXllciwgb3RoZXJUaGluZywgYW5vdGhlclRoaW5nIH0gPSB0aGlzLnN0YXRlLm9iamVjdHM7XG4gICAgc3VwZXIudXBkYXRlKCk7XG5cbiAgICBwbGF5ZXIuYXBwbHlGb3JjZSh0aGlzLmNvbnN0YW50cy5ncmF2aXR5KTtcbiAgICBwbGF5ZXIuZ2l2ZUNvbnRyb2xzKHRoaXMua2V5UHJlc3NlZCk7XG4gICAgcGxheWVyLmRldGVjdENvbGxpc2lvbih0aGlzLnN0YXRlLm9iamVjdHMpO1xuICAgIHBsYXllci51cGRhdGUoKTtcbiAgICBvdGhlclRoaW5nLnVwZGF0ZSgpO1xuICAgIGFub3RoZXJUaGluZy51cGRhdGUoKTtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgY29uc3QgeyBwbGF5ZXIsIG90aGVyVGhpbmcsIGFub3RoZXJUaGluZyB9ID0gdGhpcy5zdGF0ZS5vYmplY3RzO1xuICAgIHN1cGVyLmRyYXcoKTtcblxuICAgIGNhbnZhcy5kcmF3SW1hZ2UoSU1BR0VfRklMRVMuRk9PLCBwbGF5ZXIubG9jYXRpb24ueCwgcGxheWVyLmxvY2F0aW9uLnksIDIwLCAyMCk7XG4gICAgY2FudmFzLmRyYXdJbWFnZShJTUFHRV9GSUxFUy5CQVIsIG90aGVyVGhpbmcubG9jYXRpb24ueCwgb3RoZXJUaGluZy5sb2NhdGlvbi55LCA1MCwgNTApO1xuICAgIGNhbnZhcy5kcmF3SW1hZ2UoSU1BR0VfRklMRVMuQkFSLCBhbm90aGVyVGhpbmcubG9jYXRpb24ueCwgYW5vdGhlclRoaW5nLmxvY2F0aW9uLnksIDUwLCA1MCk7XG4gIH1cbn1cblxubmV3IFNwYWNlQ2F0KCkuc3RhcnQoKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3RvciB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG5cbiAgICB0aGlzLmFkZCA9IHRoaXMuYWRkLmJpbmQodGhpcyk7XG4gIH1cblxuICBhZGQodmVjdG9yKSB7XG4gICAgdGhpcy54ICs9IHZlY3Rvci54O1xuICAgIHRoaXMueSArPSB2ZWN0b3IueTtcbiAgfVxuXG4gIG11bHRpcGx5KHNjYWxhcikge1xuICAgIHRoaXMueCAqPSBzY2FsYXI7XG4gICAgdGhpcy55ICo9IHNjYWxhcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==