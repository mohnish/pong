
function Ball() {
  Entity.call(this);
}

Ball.prototype = Object.create(Entity.prototype);
Ball.prototype.constructor = Ball;

Ball.prototype.draw = function() {
  Entity.prototype.draw.apply(this, arguments);
};

Ball.prototype.update = function() {
  Entity.prototype.update.apply(this, arguments);
};
