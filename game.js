
function Game(canvas) {
  this.context = canvas.getContext('2d');
  this.width = canvas.width;
  this.height = canvas.height;
  this.entities = []; // ball, player, bot, background etc.
}

Game.prototype.start = function() {
  var fps = 60;
  var interval = 1000/fps;
  var self = this;

  setInterval(function() {
    self.update();
    self.draw();
  }, interval);
};

Game.keys = {
  32: 'space',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
};

Game.prototype.update = function() {
  this.entities.forEach(function(entity) {
    if (entity.update) entity.update();
  });
};

Game.prototype.draw = function() {
  var self = this;

  this.entities.forEach(function(entity) {
    entity.draw(self.context);
  });
};
