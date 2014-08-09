
function Game(canvas) {
  this.context = canvas.getContext('2d');
  this.entities = [];
}

Game.prototype.start = function() {
  var self = this;

  setInterval(function() {
    self.update();
    self.draw();
  }, 1000/60);
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
