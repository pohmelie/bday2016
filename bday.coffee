$(() ->

    $("#text").empty()
    if window.XMLHttpRequest

        xhr = new XMLHttpRequest()

    else if (window.ActiveXObject)

        xhr = new ActiveXObject("Microsoft.XMLHTTP")

    xhr.addEventListener(
        "load",
        () =>

            actions = JSON.parse(xhr.responseText)
            container = $("#text")
            index = 0
            worker = () =>

                action = actions[index]
                container.empty()
                for ch, i in action.data + " "

                    if ch == "\n"

                        ch = "<br>"

                    container.append("<span id=char#{i}>#{ch}</span>")

                if index + 1 < actions.length

                    t = (actions[index + 1].time - action.time) * 1000
                    setTimeout(worker, Math.min(Math.max(0, t), 2000))
                    index += 1

            setTimeout(worker, actions[index].time * 1000)

    )

    xhr.open("GET","actions.json")
    xhr.send()

)
