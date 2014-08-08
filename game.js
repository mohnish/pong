
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
    entity.update();
  });
};

Game.prototype.draw = function() {
  this.entities.forEach(function(entity) {
    entity.draw();
  });
};