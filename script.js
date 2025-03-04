// script.js

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission

            // Basic form validation (you can add more robust validation)
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }

            // Here you would typically send the form data to a server
            // using AJAX (e.g., fetch API).  For this example, we'll just
            // simulate a successful submission.

            // Simulate a successful submission
            alert('Message sent successfully!');
            contactForm.reset(); // Clear the form
        });
    }
});
