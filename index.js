new Typed('#typed', {
    strings: ['Angular Developer', 'Full Stack Developer'],
    typeSpeed: 40,
    delaySpeed: 90,
    loop: true
});
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        // Sticky navbar on scroll script
        if (window.scrollY > 20) {
            document.querySelector(".navbar").classList.add("sticky");
        } else {
            document.querySelector(".navbar").classList.remove("sticky");
        }

        // Scroll-up button show/hide script
        if (window.scrollY > 500) {
            document.querySelector(".scroll-up-btn").classList.add("show");
        } else {
            document.querySelector(".scroll-up-btn").classList.remove("show");
        }
    });

    // Slide-up script
    document.querySelector(".scroll-up-btn").addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Smooth scroll on menu items click
    document.querySelectorAll(".navbar .menu li a").forEach(function (element) {
        element.addEventListener("click", function () {
            document.documentElement.style.scrollBehavior = "smooth";
        });
    });

    // Toggle Navbar
    document.querySelector(".menu-btn").addEventListener("click", function () {
        document.querySelector(".navbar .menu").classList.toggle("active");
        document.querySelector(".menu-btn i").classList.toggle("active");
    });

    // Typing Text Animation
    new Typed(".typing", {
        strings: ["Fullstack Developer", "Software Developer", "Python Developer", "Founder", "Author"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    new Typed(".typing-2", {
        strings: ["Full Stack Developer", "Angular Developer", "Angular Developer", "Antusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl Carousel
    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1, nav: false },
            600: { items: 2, nav: false },
            1000: { items: 3, nav: false }
        }
    });
});