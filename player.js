
function Player() {
  Paddle.call(this);

  this.y = (game.height/2) - (this.height/2);
  this.x = 20;
}

Player.prototype.__proto__ = Paddle.prototype;

Player.prototype.constructor = Player;
