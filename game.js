
function Game(canvas) {
  this.context = canvas.getContext('2d');
  this.entities = [];
}

Game.prototype.start = function() {
  var self = this
    , fps = 60 // ms per frame
    , interval = 1000/fps;

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
    if (entity.draw) entity.draw(self.context);
  });
};
