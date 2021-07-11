// ---------- TOGGLE WEBTHEME ----------
let root = document.documentElement;
var transition_time;

var theme_color = localStorage.getItem("theme_color");
var text_color = localStorage.getItem("text_color");
var mode_icon = localStorage.getItem("mode_icon");
var logo_theme = localStorage.getItem("logo_theme");
var navbar_theme = localStorage.getItem("navbar_theme");
var navbar_prev = localStorage.getItem("navbar_prev");

$(window).on("load", function () {
  transition_time = root.style.getPropertyValue("--webtheme-transition");
  root.style.setProperty("--webtheme-transition", "0s");
  set_webtheme();
});

function toggle_webtheme() {
  if (localStorage.getItem("webtheme") == "dark") {
    // console.log("dark");

    theme_color = "#010030";
    text_color = "white";
    mode_icon = "/Images/icon_sun.svg";
    logo_theme = "/Images/logo_square_light.png";
    navbar_theme = "navbar-dark";
    navbar_prev = "navbar-light";

    localStorage.setItem("webtheme", "light");
  } else if (localStorage.getItem("webtheme") == "light") {
    // console.log("light");

    theme_color = "white";
    text_color = "black";
    mode_icon = "/Images/icon_moon.svg";
    logo_theme = "/Images/logo_square_dark.png";
    navbar_theme = "navbar-light";
    navbar_prev = "navbar-dark";

    localStorage.setItem("webtheme", "dark");
  }

  root.style.setProperty("--webtheme-transition", transition_time);
  set_webtheme();
}

function set_webtheme() {
  root.style.setProperty("--theme-color", theme_color);
  root.style.setProperty("--text-color", text_color);
  document.getElementById("navbar-webtheme").src = mode_icon;
  document.getElementById("preloader-img").src = logo_theme;
  document.getElementById("nav").classList.remove(navbar_prev);
  document.getElementById("nav").classList.add(navbar_theme);

  // set storages
  localStorage.setItem("theme_color", theme_color);
  localStorage.setItem("text_color", text_color);
  localStorage.setItem("mode_icon", mode_icon);
  localStorage.setItem("logo_theme", logo_theme);
  localStorage.setItem("navbar_theme", navbar_theme);
  localStorage.setItem("navbar_prev", navbar_prev);
}
