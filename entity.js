
function Entity() {
  this.height = 0;
  this.width = 0;

  this.x = 0;
  this.y = 0;

  this.xVelocity = 0;
  this.yVelocity = 0;
}

Entity.prototype.update = function() {
  this.x += this.xVelocity;
  this.y += this.yVelocity;
};

Entity.prototype.draw = function(context) {
  context.fillStyle = '#ffffff';
  context.fillRect(this.x, this.y, this.width, this.height);
};
