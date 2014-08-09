
var canvas = document.querySelector('canvas');
var game = new Game(canvas);

game.entities = [
  new Background()
];

game.start();
