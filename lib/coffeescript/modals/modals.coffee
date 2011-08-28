$(document).ready(() ->
  $(".show-modal").click((e) ->
    id = "\##{$(this).attr("data-modal")}"
    obj = $(id)
    obj.fadeIn(200, () ->
      obj.animate({ top: "100px" }, 200)
    )
  )

  $(".modal .cancelModal").click((e) ->
    modal = $(this).parents(".modal")
    modal.animate({ top: "-200px" }, 200)
    modal.fadeOut(200)
  )
)
