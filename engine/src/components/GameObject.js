export default class GameObject {
  constructor(x, y, width, height) {
    this.location.x = x;
    this.location.y = y;
    this.width = width;
    this.height = height;
  }

  update() {}
  display() {}
}