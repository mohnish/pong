
function Ball() {
  Entity.call(this);

  this.width = 20;
  this.height = 20;

  this.reset();
}

Ball.prototype.__proto__ = Entity.prototype;

Ball.prototype.constructor = Ball;

// `draw` method is inherited from Entity

Ball.prototype.update = function() {
  var hitter = null;
  Entity.prototype.update.call(this);

  if (this.y > (game.height - this.height) || this.y < 0) {
    this.yVelocity *= -1;
  }

  if (this.x > game.width) {
    game.player.score++;
    this.reset();
  }

  if (this.x < 0) {
    game.bot.score++;
    this.reset();
  }

  if (this.intersect(game.bot)) {
    hitter = game.bot;
  } else if (this.intersect(game.player)) {
    hitter = game.player;
  }

  if (hitter) {
    this.xVelocity *= -1;
    this.yVelocity *= -1;

    this.yVelocity += (hitter.yVelocity / 4);
  }
};

Ball.prototype.reset = function() {
  var max = 5;
  var min = -5;

  this.yVelocity = ((Math.random() * (max - min + 1)) + min);
  this.xVelocity = (Math.random() > 0.5) ? max : min;

  this.x = (game.width/2) - this.width;
  this.y = (game.height/2) - this.height;
};
