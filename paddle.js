
function Paddle() {
  Entity.call(this);

  this.width = 20;
  this.height = 100;
}

Paddle.prototype = Object.create(Entity.prototype);
Paddle.prototype.constructor = Paddle;

Paddle.prototype.update = function() {
  Entity.prototype.update.apply(this, arguments);
};

function Player() {
  Paddle.call(this);

  this.y = game.height/2 - this.height/2;
  this.x = 20;
}

Player.prototype = Object.create(Paddle.prototype);
Player.prototype.constructor = Player;

Player.prototype.udpate = function() {
  Paddle.prototype.update.apply(this, arguments);
};

Player.prototype.draw = function() {
  Paddle.prototype.draw.apply(this, arguments);
};

function Bot() {
  Paddle.call(this);

  this.y = game.height/2 - this.height/2;
  this.x = game.width - this.width - 20;
}

Bot.prototype = Object.create(Paddle.prototype);
Bot.prototype.constructor = Bot;

Bot.prototype.udpate = function() {
  Paddle.prototype.update.apply(this, arguments);
};

Bot.prototype.draw = function() {
  Paddle.prototype.draw.apply(this, arguments);
};
