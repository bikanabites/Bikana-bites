// BIKANA BITES Website JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // Smooth active navigation effect
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(item => item.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // Simple fade-in animation on scroll
    const elements = document.querySelectorAll(
        ".product-card, .feature-box, .about-text"
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, {
        threshold: 0.15
    });

    elements.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "all 0.8s ease";
        observer.observe(element);
    });

});
