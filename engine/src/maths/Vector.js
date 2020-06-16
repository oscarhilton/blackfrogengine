export default class Vector {
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
