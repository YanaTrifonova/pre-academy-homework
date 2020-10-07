let ticking = false;
let last_known_scroll_position = 0;

function removeMouseImage(element) {
    element.remove();
}

window.addEventListener('scroll', function (e) {
    last_known_scroll_position = window.scrollY;

    let element = document.getElementById("scroll-item");

    if (!ticking && element != null) {
        window.requestAnimationFrame(function () {
            removeMouseImage(element);
            ticking = false;
        });

        ticking = true;
    }
});