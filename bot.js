
function Bot() {
  Paddle.call(this);

  this.y = (game.height/2) - (this.height/2);
  this.x = (game.width - this.width - 20);
}

Bot.prototype.__proto__ = Paddle.prototype;

Bot.prototype.constructor = Bot;

Bot.prototype.update = function() {
  var speed = 5;
  Paddle.prototype.update.call(this);

  if (this.y > game.ball.y) {
    this.yVelocity = -speed;
  } else if (this.y < game.ball.y) {
    this.yVelocity = speed;
  }

  this.y = Math.min(Math.max(this.y, 0), (game.height - this.height));
};
