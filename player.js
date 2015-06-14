
function Player() {
  Paddle.call(this);

  this.y = (game.height/2) - (this.height/2);
  this.x = 20;
}

Player.prototype.__proto__ = Paddle.prototype;

Player.prototype.constructor = Player;

Player.prototype.update = function() {
  var speed = 15;
  Paddle.prototype.update.apply(this, arguments);

  if (game.keyPressed.up) {
    this.yVelocity = -speed;
  } else if (game.keyPressed.down) {
    this.yVelocity = speed;
  } else {
    this.yVelocity = 0;
  }
};
