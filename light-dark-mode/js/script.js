"use strict";

const DARK_THEME = "dark";
const LIGHT_THEME = "light";

const toggleSwitch = document.querySelector("input[type='checkbox']");
const nav = document.querySelector("#nav");
const toggleIcon = document.querySelector("#toggle-icon");
const [darkLightText, darkLightIcon] = toggleIcon.children;
const image1 = document.querySelector("#image1");
const image2 = document.querySelector("#image2");
const image3 = document.querySelector("#image3");
const textBox = document.querySelector("#text-box");

// Dark or Light Images
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Light/Dark Mode Styles
function toggleDarkLightMode(isDark) {
    nav.style.backgroundColor = isDark ? "rgb(0 0 0 / 50%)" : "rgb(255 255 255 / 50%)";
    textBox.style.backgroundColor = isDark ? "rgb(255 255 255 / 50%)" : "rgb(0 0 0 / 50%)";
    darkLightText.textContent = isDark ? "Dark Mode" : "Light Mode";
    isDark ? darkLightIcon.classList.replace("fa-sun", "fa-moon") : darkLightIcon.classList.replace("fa-moon", "fa-sun");
    isDark ? imageMode( DARK_THEME) : imageMode(LIGHT_THEME);
}

// Switch Theme Dynamically
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme",  DARK_THEME);
        localStorage.setItem("theme",  DARK_THEME);
        toggleDarkLightMode(true);
    } else {
        document.documentElement.setAttribute("data-theme", LIGHT_THEME);
        localStorage.setItem("theme", LIGHT_THEME);
        toggleDarkLightMode(false);
    }
}

// Switching
toggleSwitch.addEventListener("change", switchTheme);

// Saving in Local Storage
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === DARK_THEME) {
        toggleSwitch.checked = true;
        toggleDarkLightMode(true);
    }
}