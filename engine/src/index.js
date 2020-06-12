import Game from './components/Game';

const game = new Game({
  state: {
    x: 1,
  }
});

game.update = function(progress) {
  this.state.x += progress;
}.bind(game);