document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");

    const scrollReveal = () => {
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", scrollReveal);
    scrollReveal(); // initial check

    console.log("Portfolio Loaded: JERP. Edition");
});