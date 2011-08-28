// Sets CSS Box shadow (glow)
function updateGlow(obj,blur_size) {
    var css_string = "0 0 " + blur_size + "px " + " " + obj.css('background-color');
    obj.css({
        '-moz-box-shadow'    : css_string,
        '-webkit-box-shadow' : css_string,
        'box-shadow'         : css_string
    });
}

// Recursive Function
function glow(options) {

    var defaults = {
            blur_size : 0,         // size the blur starts at
            max_blur_size : 50,    // size in pixles that the blur ends at
            blur_step : 2,         // increases blur by this amount of pixels every time interval
            animation_speed : 80,  // time interval of the pulse in mseconds
            direction : 'increasing'
    };

    var opts        = $.extend(defaults,options);
    var timeout_ids = opts['timeout_ids'];
    var index       = opts['index'];

    // Change Direction of blur
    if      ( opts['blur_size'] >= opts['max_blur_size'] ) { opts['direction'] = 'decreasing'; }
    else if ( opts['blur_size'] <= 0 )                     { opts['direction'] = 'increasing'; }

    //
    if (opts['direction'] === "increasing" ) { opts['blur_size'] += opts['blur_step']; }
    else                                     { opts['blur_size'] -= opts['blur_step']; }

    updateGlow(opts['obj'], opts['blur_size']);
    timeout_ids[index] = setTimeout( function() { glow(opts); },opts['animation_speed']);
}

$(document).ready(function() {
   var timeout_ids = {};

   $(".pulsating").each( function(index,item) {
        var obj = $(item);
        glow({'obj': obj, 'timeout_ids' : timeout_ids, 'index' : index});
   });

});


