
function Game(canvas) {
  this.context = canvas.getContext('2d');
  this.width = canvas.width;
  this.height = canvas.height;
  this.entities = []; // ball, player, bot, background etc.
  this.keyPressed = {};
}

Game.keys = {
  32: 'space',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
};

Game.prototype.start = function() {
  var fps = 60;
  var interval = 1000/fps;
  var self = this;

  setInterval(function() {
    self.update();
    self.draw();
  }, interval);

  $(document).on('keydown keyup', function(e) {
    var key = Game.keys[e.which];

    if (key) {
      // if the type is keydown, pressed will be set to true
      // if the type is keyup, pressed will be set to false
      self.keyPressed[key] = (e.type == 'keydown');
    }

    e.preventDefault();
  });
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
