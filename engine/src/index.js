import { canvas } from './components/Canvas';
import Game from './components/Game';
import GameObject from './components/GameObject';
import { IMAGE_FILES } from './assets';
import Mover from './components/Mover';
import Vector from './maths/Vector';


class SpaceCat extends Game {
  constructor() {
    super({
      state: {
        objects: {
          player: new Mover(10, 10, 20, 20),
          otherThing: new Mover(canvas.width /  2, canvas.height / 2, 50, 50),
          anotherThing: new Mover(100, 50, 50, 50),
        },
      },
      constants: {
        gravity: new Vector(0, 0.05),
      }
    });
  }

  setup(progress) {
    super.setup(progress);

    canvas.loadImages([IMAGE_FILES.FOO, IMAGE_FILES.BAR]);
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

    canvas.drawImage(IMAGE_FILES.FOO, player.location.x, player.location.y, 20, 20);
    canvas.drawImage(IMAGE_FILES.BAR, otherThing.location.x, otherThing.location.y, 50, 50);
    canvas.drawImage(IMAGE_FILES.BAR, anotherThing.location.x, anotherThing.location.y, 50, 50);
  }
}

new SpaceCat().start();
