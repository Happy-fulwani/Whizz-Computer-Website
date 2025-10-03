document.addEventListener('DOMContentLoaded', () => {
    // ===================================
    // 1. MOBILE MENU TOGGLE LOGIC
    // ===================================
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.main-nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');

            if (nav.classList.contains('active')) {
                menuToggle.innerHTML = '✕'; // Close Icon
            } else {
                menuToggle.innerHTML = '☰'; // Hamburger Icon
            }
        });
    }

    // ===================================
    // 2. SCROLL TO TOP BUTTON LOGIC
    // ===================================
    const topButton = document.getElementById('scrollToTopBtn');

    if (topButton) {
        // Function to show/hide the button on scroll
        function scrollFunction() {
            // Show button if scrolled past 300px
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                topButton.style.display = "block";
            } else {
                topButton.style.display = "none";
            }
        }
        
        // Add scroll listener to the window
        window.onscroll = scrollFunction;

        // Smooth scroll on click
        topButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' 
            });
        });
    }
});