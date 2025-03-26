document.addEventListener('DOMContentLoaded', function() {
    // Get the mobile menu toggle button and nav links
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Function to toggle menu state
    function toggleMenu(show) {
        if (navLinks) {
            if (show === undefined) {
                // If no state is provided, toggle based on current state
                show = !navLinks.classList.contains('show');
            }
            
            navLinks.classList.toggle('show', show);
            document.body.classList.toggle('menu-open', show);
            
            const icon = mobileMenuToggle.querySelector('i');
            if (icon) {
                if (show) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        }
    }

    // Toggle mobile menu
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default button behavior
            e.stopPropagation(); // Prevent click from bubbling to document
            toggleMenu(); // Toggle menu state
            console.log('Mobile menu toggled'); // For debugging
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navLinks && navLinks.classList.contains('show')) {
            const isClickInsideNav = navLinks.contains(event.target);
            const isClickOnToggle = mobileMenuToggle && mobileMenuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle) {
                toggleMenu(false);
            }
        }
    });

    // Close mobile menu when window is resized to desktop size
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks && navLinks.classList.contains('show')) {
            toggleMenu(false);
        }
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return; // Skip empty hash links
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu after clicking a link
                if (navLinks && navLinks.classList.contains('show')) {
                    toggleMenu(false);
                }
            }
        });
    });

    // Initialize menu state on page load
    if (mobileMenuToggle && navLinks) {
        // Make sure menu is closed by default on mobile
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('show');
            document.body.classList.remove('menu-open');
            
            const icon = mobileMenuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    }
}); 