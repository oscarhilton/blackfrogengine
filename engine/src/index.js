import Canvas from './components/Canvas';
import Game from './components/Game';
import GameObject from './components/GameObject';
import { IMAGE_FILES } from './assets';

export const canvas = new Canvas("gameCanvas");

const game = new Game({
  state: {
    x: 1,
  }
});

game.setup = function() {
  canvas.loadImages([IMAGE_FILES.FOO, IMAGE_FILES.BAR]);
}.bind(game);

game.update = function(progress) {
  this.state.x += progress / 200;
}.bind(game);

game.draw = function() {
  canvas.clear();
  canvas.drawImage(IMAGE_FILES.FOO, this.state.x, this.state.x, 50, 50);
  canvas.drawImage(IMAGE_FILES.BAR, 300, 100, 50, 50);
  canvas.drawImage(IMAGE_FILES.FOO, 50, 10, 50, 50);
}.bind(game);


game.start();