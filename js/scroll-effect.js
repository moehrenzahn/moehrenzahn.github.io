/**
 * Add scroll effects
 */
document.addEventListener("DOMContentLoaded", function() {
    var scrollEffectElements = document.querySelectorAll(".scroll-effect");

    scrollEffectElements.forEach(function (element) {
        if (!utils.isInView(element)) {
            element.classList.add("hidden")
        }
    });

    scrollHandler.doOnScroll(function () {
        scrollEffectElements.forEach(function (element) {
            if (utils.isInView(element)) {
                element.classList.remove("hidden")
            }
        });
    });
});
