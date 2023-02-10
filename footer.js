function footeronbottom() {
  // function to get footer at the bottom of the page
  var body = document.body,
    html = document.documentElement;
  var height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
  document.getElementById("footer").style.top = height + "px";
  document.getElementById("footer").style.width = screen.width + "px";
}

window.onload = function () {
  footeronbottom(); //calling function to bring footer at the bottom of the page
};
