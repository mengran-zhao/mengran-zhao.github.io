document.addEventListener("DOMContentLoaded", function () {
    const themeToggleButton = document.getElementById("themeToggle");
    const body = document.body;

    // Check localStorage for the current theme
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode"); // Apply dark theme
        themeToggleButton.innerText = "Light Mode"; // Change button text to Light Mode
    } else {
        body.classList.remove("dark-mode"); // Apply light theme
        themeToggleButton.innerText = "Dark Mode"; // Change button text to Dark Mode
    }

    // Add event listener to toggle the theme on button click
    themeToggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Save the user's theme preference in localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggleButton.innerText = "Light Mode"; // Change button text
        } else {
            localStorage.setItem("theme", "light");
            themeToggleButton.innerText = "Dark Mode"; // Change button text
        }
    });
});
