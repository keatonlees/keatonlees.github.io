var preloader_time = 1500;
$(window).on("load", function () {
  setTimeout(function () {
    $(".preloader-container").fadeOut();
    onload_function();
  }, preloader_time);
});

function onload_function() {
  setTimeout(function () {
    $(".main-content").fadeIn();
  }, 500);
}
