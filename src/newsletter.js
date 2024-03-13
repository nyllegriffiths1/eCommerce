
    // Wait for the DOM to be ready
    document.addEventListener('DOMContentLoaded', function () {
        // Get the form element
        var newsletterForm = document.getElementById('newsletter-form');

        // Add an event listener for the form submission
        newsletterForm.addEventListener('submit', function (event) {
            // Prevent the default form submission
            event.preventDefault();

            // Get the email input value
            var emailInput = document.getElementById('newsletter-input');
            var userEmail = emailInput.value;

            // Validate the email (you can add more robust validation)
            if (validateEmail(userEmail)) {
                // Display a confirmation message (you can replace this with your desired action)
                alert('Thank you for subscribing to our newsletter!');
                
                // Clear the form
                newsletterForm.reset();
            } else {
                // Handle invalid email (optional)
                alert('Please enter a valid email address.');
            }
        });

        // Function to validate an email address
        function validateEmail(email) {
            // Use a simple regex pattern for basic email validation
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        }
    });
