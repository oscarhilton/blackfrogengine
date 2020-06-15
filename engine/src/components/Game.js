export default class Game {
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