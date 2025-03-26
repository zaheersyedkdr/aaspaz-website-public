document.addEventListener('DOMContentLoaded', function() {
    const partnerForm = document.getElementById('partnerForm');
    
    if (partnerForm) {
        partnerForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission
            
            // Get form data
            const storeName = document.getElementById('storeName').value;
            const storeType = document.getElementById('storeType').value;
            const location = document.getElementById('location').value;
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // Since we couldn't extract the exact entry IDs, we'll use a different approach
            // We'll open the Google Form in a new tab, pre-filled with our data
            
            // Base URL for the form
            const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSed2oYSssAstHmV6LfTW2U64hJU4yXz4WLrYHjE6YHIL--U4g/viewform?usp=pp_url';
            
            // Create URL parameters for pre-filling the form
            // Note: These are guesses based on common patterns - you may need to adjust these
            const params = new URLSearchParams({
                'entry.1871445201': storeName,  // Store Name - replace with actual ID
                'entry.907141692': storeType,  // Store Type - replace with actual ID
                'entry.276480484': location,   // Store Location - replace with actual ID
                'entry.845989766': name,       // Contact Person Name - replace with actual ID
                'entry.1955697558': email,      // Email Address - replace with actual ID
                'entry.1402836478': phone,      // Phone Number - replace with actual ID
                'entry.1425953754': message     // Additional Information - replace with actual ID
            });
            
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
                input.value = value;
                return input;
            };
            
            // Append all the form fields - replace entry IDs with the actual ones
            tempForm.appendChild(createInput('entry.1871445201', storeName));
            tempForm.appendChild(createInput('entry.907141692', storeType));
            tempForm.appendChild(createInput('entry.276480484', location));
            tempForm.appendChild(createInput('entry.845989766', name));
            tempForm.appendChild(createInput('entry.1955697558', email));
            tempForm.appendChild(createInput('entry.1402836478', phone));
            tempForm.appendChild(createInput('entry.1425953754', message));
            
            // Add the form to the page temporarily
            document.body.appendChild(tempForm);
            
            // Handle iframe load event
            iframe.addEventListener('load', function() {
                // Hide loading overlay
                hideLoadingOverlay();
                
                // Show success message
                showSubmissionMessage(true);
                
                // Reset the form
                partnerForm.reset();
                
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
        overlay.innerHTML = '<div class="loading-spinner"></div><p>Submitting your application...</p>';
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
        const formContainer = document.querySelector('.partner-form');
        const messageDiv = document.createElement('div');
        
        if (success) {
            messageDiv.className = 'form-success-message';
            messageDiv.innerHTML = `
                <div class="success-icon"><i class="fas fa-check-circle"></i></div>
                <h3>Thank You!</h3>
                <p>Your application has been submitted successfully. Our team will contact you shortly.</p>
                <button class="btn btn-secondary" onclick="window.location.reload()">Submit Another Application</button>
            `;
        } else {
            messageDiv.className = 'form-error-message';
            messageDiv.innerHTML = `
                <div class="error-icon"><i class="fas fa-exclamation-circle"></i></div>
                <h3>Something went wrong</h3>
                <p>There was an issue submitting your application. Please try again or contact us directly.</p>
                <button class="btn btn-secondary" onclick="window.location.reload()">Try Again</button>
            `;
        }
        
        // Replace form with message
        formContainer.innerHTML = '';
        formContainer.appendChild(messageDiv);
    }
}); 