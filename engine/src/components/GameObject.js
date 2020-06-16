import { canvas } from './Canvas';
import Vector from '../maths/Vector';
import { KEYS } from '../config/controls';

export default class GameObject {
  constructor(x, y, width, height) {
    this.location = new Vector(x, y);
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
    if (controlsObject[KEYS.UP]) return console.log("UP!");
    if (controlsObject[KEYS.RIGHT]) return console.log("RIGHT!");
    if (controlsObject[KEYS.DOWN]) return console.log("DOWN!");
    if (controlsObject[KEYS.LEFT]) return console.log("LEFT!");
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