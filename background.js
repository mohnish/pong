
function Background() {}

Background.prototype.update = function () {}; // no-op

Background.prototype.draw = function(context) {
  context.fillStyle = '#000';
  context.fillRect(0, 0, game.width, game.height);
};
