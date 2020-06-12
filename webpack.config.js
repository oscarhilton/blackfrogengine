const path = require('path');

module.exports = {
  mode: 'development',
  entry: './engine/src/index.js',
  output: {
    filename: 'game.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
};