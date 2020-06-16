import GameObject from './GameObject';
import Vector from '../maths/Vector';
import { KEYS } from '../config/controls';

export default class Mover extends GameObject {
  constructor(x, y, width, height, mass = 1) {
    super(x, y, width, height);
    this.velocity = new Vector(0, 0);
    this.acceleration = new Vector(0, 0);
    this.mass = mass;

    this.giveControls = this.giveControls.bind(this);
    this.applyForce =  this.applyForce.bind(this);
    this.update = this.update.bind(this);
  }

  giveControls(controlsObject) {
    const moveAmount = 0.08;
    if (controlsObject[KEYS.UP]) this.applyForce(new Vector(0, -moveAmount));
    if (controlsObject[KEYS.RIGHT]) this.applyForce(new Vector(moveAmount, 0));
    if (controlsObject[KEYS.DOWN]) this.applyForce(new Vector(0, moveAmount));
    if (controlsObject[KEYS.LEFT]) this.applyForce(new Vector(-moveAmount, 0));
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