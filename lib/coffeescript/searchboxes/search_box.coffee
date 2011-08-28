# @import ../../../vendor/state_machine.js/lib/state_machine/event_bus.coffee
# @import ../../../vendor/state_machine.js/lib/state_machine/state_machine.coffee

class SearchBox
  constructor: (@element) ->
    @input = @element.children("input")
    @default_text = "Enter search here..."
    @replace_text()

    @bus = new EventBus()
    @state_machine = new StateMachine("closed", @bus)

    @state_machine.set_trigger("clicked", "opened")
    @state_machine.set_trigger("blurred", "closed")

    @state_machine.set_enter_transition("opened", () =>
      @open_animation()
      @replace_text("")
    )

    @state_machine.set_enter_transition("closed", () =>
      @close_animation()
      @replace_text()
    )

    @element.click((e) =>
      @bus.fire_event("clicked")
    )

    @input.blur((e) =>
      @bus.fire_event("blurred")
    )

  replace_text: (text = @default_text) -> @input.attr({ value: text })
  open_animation: () -> @animate_width("500px")
  close_animation: () -> @animate_width("200px")

  animate_width: (width) ->
    @element.animate({
      width: width
    }, 200)


$(document).ready(() ->
  $(".search").each((i, item) ->
    new SearchBox($(item))
  )
)
