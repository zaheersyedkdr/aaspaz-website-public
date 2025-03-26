document.addEventListener('DOMContentLoaded', function() {
    // Function to get base path for links
    function getBasePath() {
        const pathSegments = window.location.pathname.split('/').filter(Boolean);
        const isInPagesDirectory = pathSegments.includes('pages');
        return isInPagesDirectory ? '../' : './';
    }

    const basePath = getBasePath();
    const footerHTML = `
        <footer class="footer-enhanced">
            <div class="footer-top">
                <div class="container">
                    <div class="footer-top-content">
                        <div class="footer-logo">
                            <a href="${basePath}index.html">Aaspaz</a>
                            <p>Your trusted 10-minute grocery delivery service</p>
                            <div class="social-links">
                                <a href="#"><i class="fab fa-facebook"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div class="footer-grid">
                            <div class="footer-section">
                                <h4>Company</h4>
                                <ul class="footer-links">
                                    <li><a href="${basePath}pages/about.html">About Us</a></li>
                                    <li><a href="${basePath}pages/careers.html">Careers</a></li>
                                    <li><a href="${basePath}pages/blog.html">Blog</a></li>
                                    <li><a href="${basePath}pages/partner.html">Partner with Us</a></li>
                                </ul>
                            </div>
                            <div class="footer-section">
                                <h4>Support</h4>
                                <ul class="footer-links">
                                    <li><a href="${basePath}pages/contact.html">Contact Us</a></li>
                                    <li><a href="${basePath}pages/faq.html">FAQs</a></li>
                                    <li><a href="${basePath}pages/help.html">Help Center</a></li>
                                </ul>
                            </div>
                            <div class="footer-section">
                                <h4>Legal</h4>
                                <ul class="footer-links">
                                    <li><a href="${basePath}pages/terms.html">Terms & Conditions</a></li>
                                    <li><a href="${basePath}pages/privacy.html">Privacy Policy</a></li>
                                    <li><a href="${basePath}pages/cookies.html">Cookie Policy</a></li>
                                </ul>
                            </div>
                            <div class="footer-section">
                                <h4>Contact</h4>
                                <ul class="footer-contact">
                                    <li><i class="fas fa-phone"></i> +91 9999999999</li>
                                    <li><i class="fas fa-envelope"></i>admin@aaspaz.com</li>
                                    <li><i class="fas fa-map-marker-alt"></i> Pune, Maharashtra, India</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container">
                    <p>&copy; 2024 Aaspaz. All rights reserved.</p>
                    <div class="footer-app-links">
                        <a href="#"><i class="fab fa-apple"></i> App Store</a>
                        <a href="#"><i class="fab fa-google-play"></i> Google Play</a>
                    </div>
                </div>
            </div>
        </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
}); 