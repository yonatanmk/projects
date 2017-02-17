ready = ->

  $("#new_message").on("ajax:complete", (event, data, status) ->
    $("#message_body").val("")
    # message = JSON.parse(data.responseText).message.body
    # $(".messages ul").append("<li>#{message}</li>")
    )


  source = new EventSource("//#{location.host.replace(location.port, 3030)}/chat/messages")
  source.addEventListener "newMessage", (event) ->
    messageBody = JSON.parse(event.data.toString()).message
    $(".messages ul").append("<li>#{messageBody}</li>")

  return

$(document).ready(ready)
document.addEventListener("page:load", ready)
document.addEventListener("page:fetch", ready)
document.addEventListener("page:receive", ready)
