// Scroll vers section
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// Animation scroll reveal
window.addEventListener("scroll", function () {
    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el) => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });

});
function scrollSlider(direction) {
    const slider = document.getElementById("slider");
    const scrollAmount = 300;

    slider.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
    });
}
const scrollAmount = 500;

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "0.5s";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, 1000); // durée du loader
});

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "0.8s";

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);
    }, 2500); // laisse le temps à l'animation
});