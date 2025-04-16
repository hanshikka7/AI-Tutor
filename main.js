document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('[data-collapse-toggle="navbar-default"]');
    // Flowbite handles the rest; this code ensures the toggle button works if needed.
    navToggle.addEventListener('click', () => {
        const navMenu = document.getElementById("navbar-default");
        navMenu.classList.toggle("hidden");
    });
});

