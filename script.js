// ======================================================
// NAVBAR BACKGROUND
// ======================================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("active");

    } else {

        navbar.classList.remove("active");
    }

});

// ======================================================
// SCROLL REVEAL ANIMATION
// ======================================================

const revealElements = document.querySelectorAll(
    ".about-card, .track-card, .stat-box, .cta-box, .main-card"
);

const revealOnScroll = () => {

    revealElements.forEach((element, index) => {

        const windowHeight = window.innerHeight;

        const revealTop =
            element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 80) {

            element.style.opacity = "1";

            element.style.transform =
                "translateY(0)";

        }

    });

};

revealElements.forEach((element, index) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(50px)";

    element.style.transition =
        `all 0.8s ease ${index * 0.08}s`;

});

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

// ======================================================
// BUTTON MICRO INTERACTION
// ======================================================

const buttons = document.querySelectorAll(
    ".primary-btn, .secondary-btn, .nav-btn"
);

buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
            "translateY(-4px) scale(1.02)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translateY(0) scale(1)";
    });

});

// ======================================================
// CARD HOVER INTERACTION
// ======================================================

const cards = document.querySelectorAll(
    ".about-card, .track-card, .main-card, .stat-box"
);

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY =
            ((x / rect.width) - 0.5) * 8;

        const rotateX =
            ((y / rect.height) - 0.5) * -8;

        card.style.transform =
            `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-6px)
            `;
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0)
            `;

    });

});

// ======================================================
// FLOATING ANIMATION ENHANCEMENT
// ======================================================

const floatingCards =
    document.querySelectorAll(".floating-card");

floatingCards.forEach((card, index) => {

    card.style.animation =
        `float ${4 + index}s ease-in-out infinite`;

});

// ======================================================
// HERO PARALLAX EFFECT
// ======================================================
// ======================================================
// PREMIUM HERO CARD INTERACTION
// ======================================================

const heroCard = document.querySelector(".main-card");

heroCard.addEventListener("mousemove", (e) => {

    const rect = heroCard.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;

    heroCard.style.transform = `
        perspective(1200px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-6px)
    `;

});

heroCard.addEventListener("mouseleave", () => {

    heroCard.style.transform = `
        perspective(1200px)
        rotateX(0deg)
        rotateY(0deg)
        translateY(0px)
    `;

});




// ======================================================
// SMOOTH COUNTER ANIMATION
// ======================================================

const counters =
    document.querySelectorAll(".stat-box h2");

const speed = 100;

const animateCounters = () => {

    counters.forEach(counter => {

        const target =
            +counter.innerText.replace(/\D/g, "");

        const updateCount = () => {

            const count =
                +counter.innerText.replace(/\D/g, "");

            const increment =
                target / speed;

            if (count < target) {

                counter.innerText =
                    `${Math.ceil(count + increment)}+`;

                setTimeout(updateCount, 20);

            } else {

                counter.innerText =
                    `${target}+`;
            }

        };

        updateCount();

    });

};

let counterStarted = false;

window.addEventListener("scroll", () => {

    const statsSection =
        document.querySelector(".stats-section");

    const sectionTop =
        statsSection.getBoundingClientRect().top;

    if (
        sectionTop < window.innerHeight &&
        !counterStarted
    ) {

        animateCounters();

        counterStarted = true;
    }

});