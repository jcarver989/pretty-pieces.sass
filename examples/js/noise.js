$(document).ready(function() {
  var canvas = document.createElement('canvas')
  var noise = new Util.NoiseGenerator(canvas)
  //noise.draw_gaussian(document.body, 0, 0,innerWidth, innerHeight)
  noise.add_noise(document.body, 100, 100, 0.1, 60)
  
})
