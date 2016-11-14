[
  "html",
  "js",
  "css",
  "result"
].forEach(function (element, index, array) {
  document
  .getElementById("show-" + element)
  .addEventListener("click", function (event) {
    var button = document.getElementById("show-" + element);
    var toggle = document.getElementById(element);
    if (button.className === "unselected") {
      button.className = "";
      toggle.style.display = "";
    } else {
      button.className = "unselected";
      toggle.style.display = "none";
    }
  });
});

document
.getElementById("run")
.addEventListener("click", function (event) {
  var html = document.getElementById("html").value;
  var css = document.getElementById("css").value;
  var js = document.getElementById("js").value;
  var page = "data:text/html;charset=utf-8," +
    encodeURIComponent(
    "<!DOCTYPE html>"+
    "<html lang=\"en\">"+
    "<head><style>" + css + "</style></head>"+
    "<body>" + html + 
    "<script type=\"text/javascript\">" + js + "</script></body>"+
    "</html>"
  );
  document.getElementById('result').setAttribute('src', page);
});