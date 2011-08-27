class NoiseGenerator
  constructor: (@canvas, @points = 30000, @intensity = 0, @point_size = 1)  ->
    @ctx = @canvas.getContext('2d')

  set_num_points: (points) -> @points = points
  set_point_size: (point_size) -> @point_size = point_size
  set_intensity: (intensity) -> @intensity = intensity

  gaussian_points: ->
    x1 = undefined 
    x2 = undefined
    w  = undefined
    y1 = undefined 
    y2 = undefined

    make_rands = () ->
      x1 = 2.0 * Math.random() - 1.0
      x2 = 2.0 * Math.random() - 1.0
      w = x1 * x1 + x2 * x2;

    make_rands()
    make_rands() while w >= 1.0
      
    w = Math.sqrt( (-2.0 * Math.log(w) ) / w )
    y1 = x1 * w
    y2 = x2 * w
	
    return [y1, y2]

  draw_gaussian: (element, x, y, width, height) ->
    intensity = @intensity
    size = @point_size
    ctx = @ctx

    for i in [0..@points-1]
      [g_x, g_y] = @gaussian_points() 
      ctx.fillStyle = "rgba(#{intensity},#{intensity},#{intensity},#{0.2})" 
      ctx.fillRect(x + ((width*.5) * g_x), y + ((height*.5) * g_y), size, size)
  
    element.style.backgroundImage = "url(#{@canvas.toDataURL("image/png")})"

  add_noise: (element, width = 45, height = 45, opacity = 0.2, intensity = 60) ->
    @canvas.width = width 
    @canvas.height = height

    floor = Math.floor
    ran = Math.random

    for x in [0..width-1]
      for y in [0..height-1]
        num =  floor(ran() * intensity)
        @ctx.fillStyle = "rgba(#{num},#{num},#{num},#{opacity})" 
        @ctx.fillRect(x,y,1,1)

    element.style.backgroundImage = "url(#{@canvas.toDataURL("image/png")})"


exports.NoiseGenerator = NoiseGenerator

