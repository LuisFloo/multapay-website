document.addEventListener("DOMContentLoaded", function() {
    const hamburgerBtn = document.querySelector(".hamburger-btn");
    const menu = document.querySelector(".menu");

    hamburgerBtn.addEventListener("click", function() {
        menu.classList.toggle("active");
    });
});