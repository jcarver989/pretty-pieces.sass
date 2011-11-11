$(document).ready(function() {
  var canvas = document.createElement('canvas')
  var noise = new Util.NoiseGenerator(canvas)
  //noise.draw_gaussian(document.body, 100, 100, 100, 100)
  noise.add_noise(document.body, 100, 100, 0.15, 60)
})
