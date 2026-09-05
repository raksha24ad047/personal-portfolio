// ========================================
// Dark / Light Mode Toggle
// ========================================

const themeToggle = document.getElementById("theme-toggle");

// Check if the user already selected a theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
}


// Change theme when the button is clicked
themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️ Light Mode";
        themeToggle.setAttribute("aria-label", "Switch to light mode");
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙 Dark Mode";
        themeToggle.setAttribute("aria-label", "Switch to dark mode");
    }

});
