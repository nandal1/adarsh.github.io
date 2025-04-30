

// Smooth scroll and active nav highlight
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a[href^='#']");
    const sections = document.querySelectorAll("section");

    // Smooth scroll
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Active link highlight
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });

        links.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });

        // Show scroll-to-top button
        const topButton = document.getElementById("scrollTopBtn");
        if (topButton) {
            topButton.style.display = window.scrollY > 300 ? "block" : "none";
        }
    });

    // Fade-in effect for sections on scroll
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.1 }
    );

    document.querySelectorAll("section").forEach(section => {
        section.classList.add("fade");
        observer.observe(section);
    });

    // Scroll-to-top functionality
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});
