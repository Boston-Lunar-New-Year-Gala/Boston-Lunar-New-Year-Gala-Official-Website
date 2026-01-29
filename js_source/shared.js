document.addEventListener('DOMContentLoaded', () => {
    const headerPlaceholder = document.getElementById('header-placeholder');

    const footerPlaceholder = document.getElementById('footer-placeholder');
    // Function to initialize mobile menu functionality
    const initializeMobileMenu = () => {
        const nav = document.querySelector('.main-nav');
        const navOpenBtn = document.querySelector('.nav-open-btn');
        const navCloseBtn = document.querySelector('.nav-close-btn');

        if (nav && navOpenBtn && navCloseBtn) {
            // Open the navigation menu
            navOpenBtn.addEventListener('click', () => {
                nav.classList.add('nav-active');
            });

            // Close the navigation menu
            navCloseBtn.addEventListener('click', () => {
                nav.classList.remove('nav-active');
            });
        }
    };

    // Load header and then initialize the menu
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            headerPlaceholder.innerHTML = data;
            initializeMobileMenu();
        })
        .catch(error => console.error('Error loading the header:', error));

    // Load footer
    if (footerPlaceholder) {
        fetch('footer.html')
            .then(response => response.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(error => console.error('Error loading the footer:', error));
    }
});