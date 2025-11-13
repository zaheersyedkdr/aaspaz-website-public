document.addEventListener('DOMContentLoaded', function() {
    const deliverPartnerForm = document.getElementById('deliverPartnerForm');
    
    if (deliverPartnerForm) {
        deliverPartnerForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission
            
            // Get phone number
            const phone = document.getElementById('phone').value;
            
            if (!phone || phone.trim() === '') {
                alert('Please enter your contact number');
                return;
            }
            
            // Google Form URL for delivery partner phone submissions
            const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSed2oYSssAstHmV6LfTW2U64hJU4yXz4WLrYHjE6YHIL--U4g/viewform?usp=pp_url';
            
            // Show a loading overlay
            showLoadingOverlay();
            
            // For more reliability, we'll create an iframe to submit the data
            const iframe = document.createElement('iframe');
            iframe.name = 'hidden_iframe';
            iframe.id = 'hidden_iframe';
            iframe.style.display = 'none';
            document.body.appendChild(iframe);
            
            // Create a temporary form that targets the iframe
            const tempForm = document.createElement('form');
            tempForm.action = 'https://docs.google.com/forms/d/e/1FAIpQLSed2oYSssAstHmV6LfTW2U64hJU4yXz4WLrYHjE6YHIL--U4g/formResponse';
            tempForm.method = 'POST';
            tempForm.target = 'hidden_iframe';
            
            // Create and append input fields
            const createInput = (name, value) => {
                const input = document.createElement('input');
                input.type = 'text';
                input.name = name;
                input.value = value || '';
                return input;
            };
            
            // Append phone number field - using the phone entry ID from Google Form
            tempForm.appendChild(createInput('entry.1402836478', phone)); // Phone
            
            // Add the form to the page temporarily
            document.body.appendChild(tempForm);
            
            // Handle iframe load event
            iframe.addEventListener('load', function() {
                // Hide loading overlay
                hideLoadingOverlay();
                
                // Show success message
                showSubmissionMessage(true);
                
                // Reset the form
                deliverPartnerForm.reset();
                
                // Clean up
                document.body.removeChild(tempForm);
                setTimeout(() => document.body.removeChild(iframe), 1000);
            });
            
            // Submit the form
            tempForm.submit();
        });
    }
    
    // Function to show a loading overlay
    function showLoadingOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'loading-overlay';
        overlay.innerHTML = '<div class="loading-spinner"></div><p>Submitting your contact number...</p>';
        document.body.appendChild(overlay);
    }
    
    // Function to hide the loading overlay
    function hideLoadingOverlay() {
        const overlay = document.querySelector('.loading-overlay');
        if (overlay) {
            document.body.removeChild(overlay);
        }
    }
    
    // Function to show submission message
    function showSubmissionMessage(success) {
        const formContainer = document.querySelector('.connect-form');
        if (!formContainer) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.style.cssText = 'text-align: center; padding: 2rem; background: var(--white); border-radius: 12px; box-shadow: var(--shadow-md);';
        
        if (success) {
            messageDiv.innerHTML = `
                <div style="color: var(--success-color); font-size: 3rem; margin-bottom: 1rem;">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3 style="color: var(--secondary-color); margin-bottom: 1rem;">Thank You!</h3>
                <p style="color: var(--gray-medium); margin-bottom: 1.5rem;">Your contact number has been submitted successfully. Our team will connect with you shortly.</p>
                <button class="connect-submit-btn" onclick="window.location.reload()" style="margin: 0 auto;">Submit Another</button>
            `;
        } else {
            messageDiv.innerHTML = `
                <div style="color: var(--error-color); font-size: 3rem; margin-bottom: 1rem;">
                    <i class="fas fa-exclamation-circle"></i>
                </div>
                <h3 style="color: var(--secondary-color); margin-bottom: 1rem;">Something went wrong</h3>
                <p style="color: var(--gray-medium); margin-bottom: 1.5rem;">There was an issue submitting your contact number. Please try again or contact us directly.</p>
                <button class="connect-submit-btn" onclick="window.location.reload()" style="margin: 0 auto;">Try Again</button>
            `;
        }
        
        // Replace form with message
        formContainer.innerHTML = '';
        formContainer.appendChild(messageDiv);
    }
});
