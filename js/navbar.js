document.addEventListener('DOMContentLoaded', function() {
    // Function to get base path for links
    function getBasePath() {
        const pathSegments = window.location.pathname.split('/').filter(Boolean);
        const isInPagesDirectory = pathSegments.includes('pages');
        return isInPagesDirectory ? '../' : './';
    }

    // Function to get current page name
    function getCurrentPage() {
        const path = window.location.pathname;
        const pageName = path.split('/').pop().replace('.html', '');
        return pageName || 'index';
    }

    const basePath = getBasePath();
    const currentPage = getCurrentPage();

    const navHTML = `
        <div class="moving-banner">
            <div class="banner-content">
                🚀 Now delivering in major cities! • Free delivery on orders above ₹99 • 10-minute delivery guaranteed • Support local stores 🏪
            </div>
        </div>

        <header class="header">
            <div class="container header-container">
                <a href="${basePath}index.html" class="logo">Aaspaz</a>
                <nav class="nav-links">
                    <a href="${basePath}index.html" class="${currentPage === 'index' ? 'active' : ''}">Home</a>
                    <a href="${basePath}pages/about.html" class="${currentPage === 'about' ? 'active' : ''}">About</a>
                    <a href="${basePath}pages/contact.html" class="${currentPage === 'contact' ? 'active' : ''}">Contact</a>
                    <a href="#download" class="btn-secondary">Download App</a>
                    <a href="${basePath}pages/partner.html" class="${currentPage === 'partner' ? 'active' : ''} btn-primary">Partner with us</a>
                </nav>
                <button class="mobile-menu-toggle">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </header>
    `;

    // Insert the navigation at the start of the body
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // Add mobile menu functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.classList.toggle('active');
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}); 