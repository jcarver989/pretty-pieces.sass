var FadingLabels = (function (){
    var pub = {};
    var fade_class = "faded";
    
    pub.keyup = function(e) {
       var obj = $(this);
       var label = $(this).parent().children("label");
       (obj.val().length > 0)? label.hide() : label.show();
    }
    
    pub.focusin = function(e) {
        var obj = $(this);
        var label = obj.parent().children("label");
        label.addClass(fade_class);
    }
    
    pub.focusout = function(e) {
        var obj = $(this);
        var label = obj.parent().children("label");
        label.removeClass(fade_class);
    }
    
    
    pub.bind_to_dom = function() {
        $("span.wrap input")
        .bind("focusin", FadingLabels.focusin)
        .bind("focusout", FadingLabels.focusout)
        .bind("keyup",   FadingLabels.keyup)
        .bind("change", FadingLabels.keyup)
    }
    
    return pub;
}());


$(document).ready(function() {
    FadingLabels.bind_to_dom();
}); 
