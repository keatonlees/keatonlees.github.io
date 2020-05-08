// script for smooth scrolling
$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 600, function() {
                window.location.hash = hash;
            });
        }
    });
});

// script for typing animation
const name_span = document.querySelector('.name-typing-text');
const description_span = document.querySelector('.description-typing-text');
const name_cursor = document.querySelector('.name-cursor');
const description_cursor = document.querySelector('.description-cursor');
const character_delay = 100;
let name_char_index = 0;
let description_char_index = 0;

const name = "Hi! I'm Keaton";
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

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, 1000)
});

// script for about-slideshow 
$("#about-slideshow > div:gt(0)").hide();

setInterval(function() {
    $('#about-slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#about-slideshow')
}, 4000);