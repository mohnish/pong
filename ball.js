
function Ball() {
  Entity.call(this);

  this.width = 20;
  this.height = 20;

  this.x = (game.width/2) - this.width;
  this.y = (game.height/2) - this.height;

  this.yVelocity = 10;
}

Ball.prototype.__proto__ = Entity.prototype;

Ball.prototype.constructor = Ball;

// `draw` method is inherited from Entity

Ball.prototype.update = function() {
  Entity.prototype.update.apply(this, arguments);

  if (this.y > (game.height - this.height) || this.y < 0) {
    this.yVelocity *= -1;
  }
};
