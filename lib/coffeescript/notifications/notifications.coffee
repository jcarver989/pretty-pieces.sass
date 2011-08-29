$(document).ready(() ->
  $(document).delegate(".notification .close-link", "click", (e) ->
    e.preventDefault()
    $(this).parents(".notification").fadeOut(200)
  )
)
