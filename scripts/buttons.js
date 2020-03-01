var active_button = document.getElementById("experience-btn-group").children[0];
var active_text = document.getElementById("experience-txt-group").children[0];
active_button.classList.toggle("active-button");
active_text.classList.toggle("active-text");

function toggle_active(btn, idx) {
    if (btn != active_button) {
        active_button.classList.toggle("active-button");
        btn.classList.toggle("active-button");

        active_text.classList.toggle("active-text")
        active_text = document.getElementById("experience-txt-group").children[idx];
        active_text.classList.toggle("active-text");

        active_button = btn;
    }
}

function toggle_dropdown(menu) {
    menu.classList.toggle("change");
}

function nav_to_dropdown(dropdown_width){
    if (dropdown_width.matches) {
        menu = document.getElementById("navbar-menu");
        menu.className = "dropdown-content";

        document.getElementById("navbar-dropdown").appendChild(menu);;
    }
}
function dropdown_to_nav(navbar_width){
    if (navbar_width.matches) {
        menu = document.getElementById("navbar-menu");
        menu.className = "navbar-right";

        document.getElementById("row-menu").appendChild(menu);
    }
}
var dropdown_width = window.matchMedia("(max-width: 805px)");
var navbar_width = window.matchMedia("(min-width: 806px)");
nav_to_dropdown(dropdown_width);
dropdown_to_nav(navbar_width);
dropdown_width.addListener(nav_to_dropdown);
navbar_width.addListener(dropdown_to_nav);