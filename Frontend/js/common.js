const mode = document.getElementById('mode');
const changeText = document.querySelectorAll(".change-text");
const changeInput = document.querySelectorAll(".change-input");
const changeBorder = document.querySelectorAll(".change-border");
const hamburger = document.getElementById("hamburger");
const closeIcon = document.getElementById("close-icon");
const navMenu = document.getElementById("nav-menu");

if (hamburger && closeIcon && navMenu) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.remove("hidden");
        navMenu.classList.add("flex");
        hamburger.classList.add("hidden");
        closeIcon.classList.remove("hidden");
    });

    closeIcon.addEventListener("click", () => {
        navMenu.classList.add("hidden");
        navMenu.classList.remove("flex");
        closeIcon.classList.add("hidden");
        hamburger.classList.remove("hidden");
    });
}

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
        enableDarkMode();
    } else {
        enableLightMode();
    }
});

mode.addEventListener('click', () => {
    if (localStorage.getItem("theme") === "light") {
        enableDarkMode();
    } else {
        enableLightMode();
    }
});

function enableDarkMode() {
    document.body.classList.remove('bg-slate-200');
    document.body.classList.add('bg-slate-800');
    mode.classList.remove('fa-solid');
    mode.classList.add('fa-regular');
    localStorage.setItem("theme", "dark");

    if (changeText.length) {
        changeText.forEach(el => {
            el.classList.remove("text-black");
            el.classList.add("text-white");
        });
    }

    if (changeBorder.length) {
        changeBorder.forEach(el => {
            el.classList.remove("border-black");
            el.classList.add("border-white");
        });
    }

    if (changeInput.length) {
        changeInput.forEach(el => {
            el.classList.remove("text-black");
            el.classList.remove("bg-white");
            el.classList.add("text-white");
            el.classList.add("bg-transparent");
        });
    }

    document.querySelectorAll('select').forEach(el => {
        el.classList.add('bg-transparent');
    });

    document.querySelectorAll('option').forEach(el => {
        el.classList.remove("bg-white");
        el.classList.remove("text-black");
        el.classList.add("text-white");
        el.classList.add("bg-slate-800");
    });
}

function enableLightMode() {
    document.body.classList.remove('bg-slate-800');
    document.body.classList.add('bg-slate-200');
    mode.classList.remove('fa-regular');
    mode.classList.add('fa-solid');
    localStorage.setItem("theme", "light");

    if (changeText.length) {
        changeText.forEach(el => {
            el.classList.remove("text-white");
            el.classList.add("text-black");
        });
    }

    if (changeBorder.length) {
        changeBorder.forEach(el => {
            el.classList.remove("border-white");
            el.classList.add("border-black");
        });
    }

    if (changeInput.length) {
        changeInput.forEach(el => {
            el.classList.remove("text-white");
            el.classList.remove("bg-transparent");
            el.classList.add("text-black");
            el.classList.add("bg-white");
        });
    }

    document.querySelectorAll('select').forEach(el => {
        el.classList.remove('bg-transparent');
    });

    document.querySelectorAll('option').forEach(el => {
        el.classList.remove("text-white");
        el.classList.remove("bg-slate-800");
        el.classList.add("bg-white");
        el.classList.add("text-black");
    });
}
