// Keyboard control
document.addEventListener('keydown', function(event) {
    const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
    if (["j"].includes(key)) {
        document.querySelector("#previouspost a").click()
        event.preventDefault()
    }
    if (["k"].includes(key)) {
        document.querySelector("#nextpost a").click()
        event.preventDefault()
    }
    if (["h"].includes(key)) {
        const aboutLink = document.querySelector("nav a")
        if (!aboutLink.classList.contains("active")) {
            aboutLink.click()
        }
    }
}, false);
