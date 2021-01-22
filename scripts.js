// -------------------- ON LOAD FUNCTIONS  --------------------

let project_to_show = 0;
$(window).on("load", function () {
  // function when window loads
  setTimeout(on_load_functions, 1000); // delayed functions

  if (window.location.pathname == "/projects.html") {
    // pre-hide projects
    hide_all_projects();

    // if clicked link from home, show that link
    project_to_show = localStorage.getItem("show_from_home");
    if (project_to_show == 1) {
      $("#drone").slideDown();
      setTimeout(scroll_to_project, 1250);
    } else if (project_to_show == 2) {
      $("#puppr").slideDown();
      setTimeout(scroll_to_project, 1250);
    } else if (project_to_show == 3) {
      $("#first").slideDown();
      setTimeout(scroll_to_project, 1250);
    }
    localStorage.setItem("show_from_home", 0);
  }
});

// -------------------- PRELOADER  --------------------
function on_load_functions() {
  // hide preloader
  document.querySelector(".preloader-container").className += " page-fade-out";
  document.getElementById("navbar").style.display = "block";
  setTimeout(function () {
    document.getElementById("preloader").style.display = "none";
    type(); // typing text 1 second after loading
  }, 1000);
}

// -------------------- TYPING ANIMATION  --------------------
const character_delay = 100;

const name_span = document.querySelector(".name-typing-text");
let name_char_index = 0;
const name = "Hi! I'm Keaton";

const description_span = document.querySelector(".description-typing-text");
let description_char_index = 0;
const description = "A Systems Design Engineering Student";

function type() {
  if (name_char_index < name.length) {
    name_span.textContent += name.charAt(name_char_index);
    name_char_index++;
    setTimeout(type, character_delay);
  } else if (description_char_index < description.length) {
    description_span.textContent += description.charAt(description_char_index);
    description_char_index++;
    setTimeout(type, character_delay);
  }
}

// -------------------- SHOW/HIDE PROJECTS --------------------
function hide_all_projects() {
  if (project_mq.matches) {
    $("#drone").slideDown();
    $("#puppr").slideDown();
    $("#printer").slideDown();
    $("#watch").slideDown();
    $("#kong").slideDown();
    $("#first").slideDown();
  } else {
    $("#drone").slideUp();
    $("#puppr").slideUp();
    $("#printer").slideUp();
    $("#watch").slideUp();
    $("#kong").slideUp();
    $("#first").slideUp();
  }
}

let slideDown_delay = 300;
let scrollTo_delay = 600;

// icon click
$(document).ready(function () {
  $("#icon-drone").click(function () {
    hide_all_projects();
    setTimeout(function () {
      $("#drone").slideDown();
    }, slideDown_delay);
    setTimeout(scroll_to_project, scrollTo_delay);
  });

  $("#icon-puppr").click(function () {
    hide_all_projects();
    setTimeout(function () {
      $("#puppr").slideDown();
    }, slideDown_delay);
    setTimeout(scroll_to_project, scrollTo_delay);
  });

  $("#icon-printer").click(function () {
    hide_all_projects();
    setTimeout(function () {
      $("#printer").slideDown();
    }, slideDown_delay);
    setTimeout(scroll_to_project, scrollTo_delay);
  });

  $("#icon-watch").click(function () {
    hide_all_projects();
    setTimeout(function () {
      $("#watch").slideDown();
    }, slideDown_delay);
    setTimeout(scroll_to_project, scrollTo_delay);
  });

  $("#icon-kong").click(function () {
    hide_all_projects();
    setTimeout(function () {
      $("#kong").slideDown();
    }, slideDown_delay);
    setTimeout(scroll_to_project, scrollTo_delay);
  });

  $("#icon-first").click(function () {
    hide_all_projects();
    setTimeout(function () {
      $("#first").slideDown();
    }, slideDown_delay);
    setTimeout(scroll_to_project, scrollTo_delay);
  });
});

// prev/next click
$(document).ready(function () {
  $("#drone-prev").click(function () {
    hide_all_projects();
    setTimeout(function () {
      $("#first").slideDown();
    }, slideDown_delay);
  });

  $("#drone-next").click(function () {
    hide_all_projects();
    setTimeout(function () {
      $("#puppr").slideDown();
    }, slideDown_delay);
  });

  $("#puppr-prev").click(function () {
    hide_all_projects();
    setTimeout(function () {
      $("#drone").slideDown();
    }, slideDown_delay);
  });

  $("#puppr-next").click(function () {
    hide_all_projects();
    setTimeout(function () {
      $("#printer").slideDown();
    }, slideDown_delay);
  });

  $("#printer-prev").click(function () {
    hide_all_projects();
    setTimeout(function () {
      $("#puppr").slideDown();
    }, slideDown_delay);
  });

  $("#printer-next").click(function () {
    hide_all_projects();
    setTimeout(function () {
      $("#watch").slideDown();
    }, slideDown_delay);
  });

  $("#watch-prev").click(function () {
    hide_all_projects();
    setTimeout(function () {
      $("#printer").slideDown();
    }, slideDown_delay);
  });

  $("#watch-next").click(function () {
    hide_all_projects();
    setTimeout(function () {
      $("#kong").slideDown();
    }, slideDown_delay);
  });

  $("#kong-prev").click(function () {
    hide_all_projects();
    setTimeout(function () {
      $("#watch").slideDown();
    }, slideDown_delay);
  });

  $("#kong-next").click(function () {
    hide_all_projects();
    setTimeout(function () {
      $("#first").slideDown();
    }, slideDown_delay);
  });

  $("#first-prev").click(function () {
    hide_all_projects();
    setTimeout(function () {
      $("#kong").slideDown();
    }, slideDown_delay);
  });

  $("#first-next").click(function () {
    hide_all_projects();
    setTimeout(function () {
      $("#drone").slideDown();
    }, slideDown_delay);
  });
});

function scroll_to_project() {
  document
    .getElementById("all-projects")
    .scrollIntoView({ behavior: "smooth" });
}

// MEDIA QUERY
var project_mq = window.matchMedia("(max-width: 768px)");
project_mq.addListener(hide_all_projects);

// -------------------- SHOW/HIDE FROM HOME --------------------
function project1_to_show() {
  localStorage.setItem("show_from_home", 1);
}

function project2_to_show() {
  localStorage.setItem("show_from_home", 2);
}

function project3_to_show() {
  localStorage.setItem("show_from_home", 3);
}

// -------------------- SLIDESHOW  --------------------
// $("#about-slideshow > div:gt(0)").hide();

// setInterval(function() {
//     $('#about-slideshow > div:first')
//         .fadeOut(1000)
//         .next()
//         .fadeIn(1000)
//         .end()
//         .appendTo('#about-slideshow')
// }, 4000);
