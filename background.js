
function Background() {}

Background.prototype.update = function () {}; // no-op

Background.prototype.draw = function(context) {
  context.fillStyle = '#000';
  context.fillRect(0, 0, game.width, game.height);

  context.font = "30px monospace";
  context.fillStyle = "#fff";
  context.fillText(game.player.score, 160, 50);
  context.fillText(game.bot.score, 480, 50);
};
