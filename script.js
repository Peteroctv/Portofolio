/* =========================================================
MENU MOBILE
========================================================= */

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {

menuIcon.onclick = () => {

    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");

};

}

/* =========================================================
TUTUP MENU SAAT LINK DIKLIK
========================================================= */

document.querySelectorAll(".navbar a").forEach(link => {

link.onclick = () => {

    if (menuIcon) {
        menuIcon.classList.remove("bx-x");
    }

    if (navbar) {
        navbar.classList.remove("active");
    }

};

});

/* =========================================================
HEADER STICKY
========================================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

if (header) {

    header.classList.toggle(
        "sticky",
        window.scrollY > 100
    );

}

});

/* =========================================================
ACTIVE NAVBAR
========================================================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

    const sectionTop =
        section.offsetTop - 160;

    const sectionHeight =
        section.offsetHeight;

    if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
    ) {

        current =
            section.getAttribute("id");

    }

});


navLinks.forEach(link => {

    link.classList.remove("active");

    if (
        link.getAttribute("href") ===
        "#" + current
    ) {

        link.classList.add("active");

    }

});

});

/* =========================================================
TYPING EFFECT
========================================================= */

const typing = document.querySelector(".typing");

const words = [
"Web Developer",
"Web Designer",
"Programmer",
"RPL Student"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

if (!typing) return;

const currentWord =
    words[wordIndex];


if (!deleting) {

    typing.textContent =
        currentWord.substring(
            0,
            charIndex + 1
        );

    charIndex++;

} else {

    typing.textContent =
        currentWord.substring(
            0,
            charIndex - 1
        );

    charIndex--;

}


let speed =
    deleting ? 70 : 120;


if (
    !deleting &&
    charIndex === currentWord.length
) {

    speed = 1500;
    deleting = true;

}


if (
    deleting &&
    charIndex === 0
) {

    deleting = false;

    wordIndex++;

    if (
        wordIndex >= words.length
    ) {

        wordIndex = 0;

    }

    speed = 500;

}


setTimeout(
    typeEffect,
    speed
);

}

typeEffect();

/* =========================================================
CONTACT FORM
========================================================= */

const form =
document.querySelector("#contact-form");

if (form) {

form.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const name =
            document.querySelector("#name").value;

        alert(
            "Terima kasih, " +
            name +
            "! Pesan kamu sudah diterima."
        );

        form.reset();

    }
);

}

/* =========================================================
SCROLL REVEAL
========================================================= */

const revealElements =
document.querySelectorAll(
".heading, " +
".about-container, " +
".school-container, " +
".skill-box, " +
".project, " +
".contact form"
);

function revealOnScroll() {

revealElements.forEach(element => {

    const elementTop =
        element.getBoundingClientRect().top;

    const windowHeight =
        window.innerHeight;


    if (
        elementTop <
        windowHeight - 100
    ) {

        element.classList.add("show");

    }

});

}

window.addEventListener(
"scroll",
revealOnScroll
);

/* Jalankan saat halaman pertama kali dibuka */

revealOnScroll();
