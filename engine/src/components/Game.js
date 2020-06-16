import { canvas } from './Canvas';
import { KEYS } from '../config/controls';

export default class Game {
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
    canvas.clear();
  }

  loop(timestamp) {
    const progress = (timestamp - this.frameCount);
    this.update(progress);
    this.draw();
    this.frameCount = timestamp;
    window.requestAnimationFrame(this.loop);
  }
}