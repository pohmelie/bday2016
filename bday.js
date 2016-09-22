// Generated by CoffeeScript 1.10.0
(function() {
  $(function() {
    var xhr;
    $("#text").empty();
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.addEventListener("load", (function(_this) {
      return function() {
        var actions, container, index, worker;
        actions = JSON.parse(xhr.responseText);
        container = $("#text");
        index = 0;
        worker = function() {
          var action, ch, i, j, len, ref, t;
          action = actions[index];
          container.empty();
          ref = action.data + " ";
          for (i = j = 0, len = ref.length; j < len; i = ++j) {
            ch = ref[i];
            if (ch === "\n") {
              ch = "<br>";
            }
            container.append("<span id=char" + i + ">" + ch + "</span>");
          }
          if (index + 1 < actions.length) {
            t = (actions[index + 1].time - action.time) * 1000;
            setTimeout(worker, Math.min(Math.max(0, t), 2000));
            return index += 1;
          }
        };
        return setTimeout(worker, actions[index].time * 1000);
      };
    })(this));
    xhr.open("GET", "actions.json");
    return xhr.send();
  });

}).call(this);