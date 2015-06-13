
var canvas = document.querySelector('canvas');
var game = new Game(canvas);

game.entities = [
  new Background(),
  new Ball(),
  new Player(),
  new Bot()
];

game.start();
canvas.focus();
