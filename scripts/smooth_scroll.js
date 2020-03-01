var scrolling = false;
var href;

// Prevent multiple scrolling queries.
function stop_scrolling(){
    scrolling = false;
}

// Smooth Scroll Function
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (scrolling) {
            return
        } else {
            scrolling = true;
        }
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // 800 milliseconds to scroll to location.
        if (hash == "#home") {
            $('html, body').animate({
                scrollTop: 0
            }, 800, stop_scrolling);
        }
        else {
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, stop_scrolling);
        }
            window.location.hash = hash;
        }
    });
});