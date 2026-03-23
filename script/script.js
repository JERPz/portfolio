document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(el => revealObserver.observe(el));

    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    if (prefersReducedMotion) return;

    const hero = document.querySelector(".parallax-bg");
    if (!hero) return;

    let latestScrollY = window.scrollY || 0;
    let ticking = false;

    const update = () => {
        hero.style.setProperty("--py1", `${-(latestScrollY * 0.08)}px`);
        hero.style.setProperty("--py2", `${-(latestScrollY * 0.16)}px`);
        ticking = false;
    };

    window.addEventListener("scroll", () => {
        latestScrollY = window.scrollY || 0;
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(update);
    }, { passive: true });

    update();
});
