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


    module('Notifications', function(exports) {
      $(document).ready(function() {
  return $(document).delegate(".notification .close-link", "click", function(e) {
    e.preventDefault();
    return $(this).parents(".notification").fadeOut(200);
  });
});
    })
