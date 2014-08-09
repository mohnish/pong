
function Background() {
  this.x = 0;
  this.y = 0;
}

Background.prototype.draw = function(context) {
  var canvas = context.canvas;
  context.fillStyle = '#000';
  context.fillRect(this.x, this.y, canvas.width, canvas.height);
};
