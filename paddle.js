
function Paddle() {
  Entity.call(this);

  this.width = 20;
  this.height = 100;

  this.score = 0;
}

Paddle.prototype.__proto__ = Entity.prototype;

Paddle.prototype.constructor = Paddle;

Paddle.prototype.reset = function() {
  this.xVelocity = this.yVelocity = 0;

  this.y = (game.height/2) - (this.height/2);
  this.x = (game.width - this.width - 20);
};
