function changestate(id) {
  /*Change active component from menu bar on click*/
  document.getElementById("dashboard").classList.remove("active");
  document.getElementById("addproducts").classList.remove("active");
  document.getElementById("allproducts").classList.remove("active");
  document.getElementById("orderslist").classList.remove("active");
  document.getElementById(id).classList.add("active");
}

const showNavbar = () => {
  /*Shows and hide navbar when screen size is less than 786px*/
  const toggle = document.getElementById("header-toggle"),
    nav = document.getElementById("nav-bar"),
    bodypd = document.getElementById("body-pd"),
    headerpd = document.getElementById("header");
  nav.classList.toggle("show");
  toggle.classList.toggle("bx-x");
  bodypd.classList.toggle("body-pd");
  headerpd.classList.toggle("body-pd");
};

window.addEventListener("resize", function (event) {
  /*Take care of class change when window resises*/
  var newWidth = window.innerWidth;
  const toggle = document.getElementById("header-toggle"),
    nav = document.getElementById("nav-bar"),
    bodypd = document.getElementById("body-pd"),
    headerpd = document.getElementById("header");
  if (newWidth < 768) {
    if (nav.classList.contains("show")) {
      nav.classList.remove("show");
      toggle.classList.remove("bx-x");
      bodypd.classList.remove("body-pd");
      headerpd.classList.remove("body-pd");
    }
  } else {
    if (!nav.classList.contains("show")) {
      nav.classList.add("show");
      toggle.classList.add("bx-x");
      bodypd.classList.add("body-pd");
      headerpd.classList.add("body-pd");
    }
  }
});

window.onload = function () {
  var body = document.body,
    html = document.documentElement;

  var height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  /*Changes height of navbar on screen load*/
  var newWidth = window.innerWidth;
  const toggle = document.getElementById("header-toggle"),
    nav = document.getElementById("nav-bar"),
    bodypd = document.getElementById("body-pd"),
    headerpd = document.getElementById("header");
  if (newWidth >= 768) {
    nav.classList.add("show");
    toggle.classList.add("bx-x");
    bodypd.classList.add("body-pd");
    headerpd.classList.add("body-pd");
  }
  document.getElementById("nav-bar").style.height = height-126 + "px";
};
