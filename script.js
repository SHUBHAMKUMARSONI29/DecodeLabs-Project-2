// Select elements
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");


// Open / close mobile navigation
menuBtn.addEventListener("click", function () {

    nav.classList.toggle("active");

    const isOpen = nav.classList.contains("active");

    menuBtn.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
        menuBtn.textContent = "✕";
        menuBtn.setAttribute(
            "aria-label",
            "Close navigation menu"
        );
    } else {
        menuBtn.textContent = "☰";
        menuBtn.setAttribute(
            "aria-label",
            "Open navigation menu"
        );
    }

});


// Close menu after clicking a navigation link
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("active");

        menuBtn.textContent = "☰";

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );

        menuBtn.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    });

});


// Close mobile menu when screen becomes desktop size
window.addEventListener("resize", function () {

    if (window.innerWidth >= 768) {

        nav.classList.remove("active");

        menuBtn.textContent = "☰";

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});
