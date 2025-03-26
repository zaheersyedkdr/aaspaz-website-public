document.addEventListener('DOMContentLoaded', function() {
    // Get the mobile menu toggle button and nav links
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const movingBanner = document.querySelector('.moving-banner');

    // Function to handle responsive navigation
    function handleResponsiveNav() {
        if (window.innerWidth <= 768) {
            // On mobile, hide the regular nav and mobile toggle, but show the "Partner with us" button
            if (mobileMenuToggle) mobileMenuToggle.style.display = 'none';
            if (navLinks) {
                navLinks.classList.add('mobile-partner-btn');
                navLinks.classList.remove('show', 'active');
                
                // Apply styles directly to nav container
                navLinks.style.display = 'flex';
                navLinks.style.justifyContent = 'flex-end';
                navLinks.style.width = 'auto';
                
                // Make sure only the Partner with us button is visible
                const navLinks_items = navLinks.querySelectorAll('a');
                navLinks_items.forEach(item => {
                    if (item.classList.contains('btn-primary')) {
                        item.style.display = 'inline-block';
                        item.style.marginLeft = 'auto'; // Push to the right
                        item.style.padding = '0.5rem 1rem';
                        item.style.fontSize = '0.9rem';
                    } else {
                        item.style.display = 'none';
                    }
                });
            }
            document.body.classList.remove('menu-open');
        } else {
            // On desktop, restore normal navigation
            if (mobileMenuToggle) mobileMenuToggle.style.display = 'none';
            if (navLinks) {
                navLinks.classList.remove('mobile-partner-btn');
                navLinks.style.display = '';
                navLinks.style.justifyContent = '';
                navLinks.style.width = '';
                
                // Reset display of all nav items
                const navLinks_items = navLinks.querySelectorAll('a');
                navLinks_items.forEach(item => {
                    item.style.display = '';
                    item.style.marginLeft = '';
                    item.style.padding = '';
                    item.style.fontSize = '';
                });
            }
        }
    }

    // Run on page load
    handleResponsiveNav();

    // Run on window resize
    window.addEventListener('resize', handleResponsiveNav);

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
            }
        });
    });
}); 