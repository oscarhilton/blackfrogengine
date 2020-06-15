export default class Canvas {
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