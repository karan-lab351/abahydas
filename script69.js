// =========================
// Mobile Menu
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "80px";
        navLinks.style.right = "20px";
        navLinks.style.background = "#fff";
        navLinks.style.padding = "20px";
        navLinks.style.borderRadius = "10px";
        navLinks.style.boxShadow = "0 10px 20px rgba(0,0,0,.1)";
    }

});

// =========================
// Search Button
// =========================

const searchBtn = document.querySelector(".search-box button");
const searchInput = document.querySelector(".search-box input");

searchBtn.addEventListener("click", () => {

    if (searchInput.value.trim() === "") {

        alert("Please enter a topic to search.");

    } else {

        alert("Searching for: " + searchInput.value);

    }

});

// =========================
// Quiz
// =========================

const quizButtons = document.querySelectorAll(".quiz-box button");

quizButtons.forEach((btn, index) => {

    btn.addEventListener("click", () => {

        if (index === 0) {

            alert("✅ Correct Answer!");

        } else {

            alert("❌ Wrong Answer! Try Again.");

        }

    });

});

// =========================
// Contact Form
// =========================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Message Sent Successfully!");

    form.reset();

});

// =========================
// Smooth Fade Effect
// =========================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});