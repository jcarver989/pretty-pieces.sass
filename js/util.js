    var global = (global != undefined)? global : window

if (global.module == undefined) {
  global.module = function(name, body) {
    var exports = global[name]
    if (exports == undefined) {
    global[name] = exports = {}
    }
    body(exports)
  }
}


    module('Util', function(exports) {
      var NoiseGenerator;
NoiseGenerator = (function() {
  function NoiseGenerator(canvas, points, intensity, point_size) {
    this.canvas = canvas;
    this.points = points != null ? points : 30000;
    this.intensity = intensity != null ? intensity : 0;
    this.point_size = point_size != null ? point_size : 1;
    this.ctx = this.canvas.getContext('2d');
  }
  NoiseGenerator.prototype.set_num_points = function(points) {
    return this.points = points;
  };
  NoiseGenerator.prototype.set_point_size = function(point_size) {
    return this.point_size = point_size;
  };
  NoiseGenerator.prototype.set_intensity = function(intensity) {
    return this.intensity = intensity;
  };
  NoiseGenerator.prototype.gaussian_points = function() {
    var make_rands, w, x1, x2, y1, y2;
    x1 = void 0;
    x2 = void 0;
    w = void 0;
    y1 = void 0;
    y2 = void 0;
    make_rands = function() {
      x1 = 2.0 * Math.random() - 1.0;
      x2 = 2.0 * Math.random() - 1.0;
      return w = x1 * x1 + x2 * x2;
    };
    make_rands();
    while (w >= 1.0) {
      make_rands();
    }
    w = Math.sqrt((-2.0 * Math.log(w)) / w);
    y1 = x1 * w;
    y2 = x2 * w;
    return [y1, y2];
  };
  NoiseGenerator.prototype.draw_gaussian = function(element, x, y, width, height) {
    var ctx, g_x, g_y, i, intensity, size, _ref, _ref2;
    intensity = this.intensity;
    size = this.point_size;
    ctx = this.ctx;
    for (i = 0, _ref = this.points - 1; 0 <= _ref ? i <= _ref : i >= _ref; 0 <= _ref ? i++ : i--) {
      _ref2 = this.gaussian_points(), g_x = _ref2[0], g_y = _ref2[1];
      ctx.fillStyle = "rgba(" + intensity + "," + intensity + "," + intensity + "," + 0.2 + ")";
      ctx.fillRect(x + ((width * .5) * g_x), y + ((height * .5) * g_y), size, size);
    }
    return element.style.backgroundImage = "url(" + (this.canvas.toDataURL("image/png")) + ")";
  };
  NoiseGenerator.prototype.add_noise = function(element, width, height, opacity, intensity) {
    var floor, num, ran, x, y, _ref, _ref2;
    if (width == null) {
      width = 45;
    }
    if (height == null) {
      height = 45;
    }
    if (opacity == null) {
      opacity = 0.2;
    }
    if (intensity == null) {
      intensity = 60;
    }
    this.canvas.width = width;
    this.canvas.height = height;
    floor = Math.floor;
    ran = Math.random;
    for (x = 0, _ref = width - 1; 0 <= _ref ? x <= _ref : x >= _ref; 0 <= _ref ? x++ : x--) {
      for (y = 0, _ref2 = height - 1; 0 <= _ref2 ? y <= _ref2 : y >= _ref2; 0 <= _ref2 ? y++ : y--) {
        num = floor(ran() * intensity);
        this.ctx.fillStyle = "rgba(" + num + "," + num + "," + num + "," + opacity + ")";
        this.ctx.fillRect(x, y, 1, 1);
      }
    }
    return element.style.backgroundImage = "url(" + (this.canvas.toDataURL("image/png")) + ")";
  };
  return NoiseGenerator;
})();
exports.NoiseGenerator = NoiseGenerator;
    })
