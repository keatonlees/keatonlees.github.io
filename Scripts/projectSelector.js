$(window).on("load", function () {
  project_to_show = localStorage.getItem("project_link");
  select_project(project_to_show);
});

function hide_all_projects() {
  // $("#todoit").fadeOut();
  $("#smart-home").fadeOut();
  $("#arduino-drone").fadeOut();
  // $("#rethink").fadeOut();
  $("#puppr").fadeOut();
  $("#dk").fadeOut();
  $("#first").fadeOut();
}

function reformat_all_cards() {
  // document.getElementById("todoit-card").style.color = "white";
  document.getElementById("smart-home-card").style.color = "white";
  document.getElementById("arduino-drone-card").style.color = "white";
  // document.getElementById("rethink-card").style.color = "white";
  document.getElementById("puppr-card").style.color = "white";
  document.getElementById("dk-card").style.color = "white";
  document.getElementById("first-card").style.color = "white";

  // document.getElementById("todoit-card").style.backgroundColor = "midnightblue";
  document.getElementById("smart-home-card").style.backgroundColor =
    "midnightblue";
  document.getElementById("arduino-drone-card").style.backgroundColor =
    "midnightblue";
  // document.getElementById("rethink-card").style.backgroundColor =
  // ("midnightblue");
  document.getElementById("puppr-card").style.backgroundColor = "midnightblue";
  document.getElementById("dk-card").style.backgroundColor = "midnightblue";
  document.getElementById("first-card").style.backgroundColor = "midnightblue";
}

function select_project(project_to_show) {
  hide_all_projects();
  reformat_all_cards();

  document.getElementById(project_to_show + "-card").style.color = "black";
  document.getElementById(project_to_show + "-card").style.backgroundColor =
    "#00dfdf";

  setTimeout(function () {
    $("#" + project_to_show).fadeIn();
  }, 500);

  localStorage.setItem("project_link", project_to_show);
}

function project_link(project) {
  console.log("RUNNING");
  localStorage.setItem("project_link", project);
  window.location.href = "projects.html";
}
