// script for responsive website
var x = document.getElementById("navTop");

function nav_toggle() {
    if (x.className === "nav-top") {
        x.className += " responsive";
    } else {
        x.className = "nav-top";
    }
}

// script for having navbar appear as user scrolls down
// $(window).scroll(function() {
//     if ($(window).scrollTop() > 50) {

// 	}
// });

// script for smooth scrolling
$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function() {
                window.location.hash = hash;
            });
        }
    });
});