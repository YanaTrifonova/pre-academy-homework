let ticking = false;
let lastKnownScrollPosition = 0;

function removeMouseImage(element) {
    element.remove();
}

window.addEventListener('scroll', function (e) {
    lastKnownScrollPosition = window.scrollY;

    let element = document.getElementById("scroll-item");

    if (!ticking && element != null) {
        window.requestAnimationFrame(function () {
            removeMouseImage(element);
            ticking = false;
        });

        ticking = true;
    }
});