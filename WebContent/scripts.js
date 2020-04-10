var x = document.getElementById("navTop");

function nav_toggle() {
	if (x.className === "nav-top") {
		x.className += " responsive";
	} else {
		x.className = "nav-top";
	}
}