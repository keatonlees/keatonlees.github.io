var x = document.getElementById("navTop");

function nav_toggle() {
    if (x.className === "nav-top") {
        x.className += " responsive";
    } else {
        x.className = "nav-top";
    }
}

$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        console.log("OK");
    }
});