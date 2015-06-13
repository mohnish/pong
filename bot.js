
function Bot() {
  Paddle.call(this);

  this.y = (game.height/2) - (this.height/2);
  this.x = (game.width - this.width - 20);
}

Bot.prototype.__proto__ = Paddle.prototype;

Bot.prototype.constructor = Bot;
