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


    module('Modals', function(exports) {
      $(document).ready(function() {
  $(".show-modal").click(function(e) {
    var id, obj;
    id = "\#" + ($(this).attr("data-modal"));
    obj = $(id);
    return obj.fadeIn(200, function() {
      return obj.animate({
        top: "100px"
      }, 200);
    });
  });
  return $(".modal .cancelModal").click(function(e) {
    var modal;
    modal = $(this).parents(".modal");
    modal.animate({
      top: "-200px"
    }, 200);
    return modal.fadeOut(200);
  });
});
    })
