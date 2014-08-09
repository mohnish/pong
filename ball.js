
function Ball() {
  Entity.call(this);
}

Ball.prototype = Object.create(Entity.prototype);
Ball.prototype.constructor = Ball;
