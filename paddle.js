
function Paddle() {
  Entity.call(this);

  this.width = 20;
  this.height = 100;
}

Paddle.prototype.__proto__ = Entity.prototype;

Paddle.prototype.constructor = Paddle;
