document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name === '' || email === '' || message === '') {
        document.getElementById('formMessage').textContent = 'Please fill out all fields.';
        document.getElementById('formMessage').style.color = 'red';
        return;
    }

    // Display a success message
    document.getElementById('formMessage').textContent = 'Thank you for your message! We will get back to you soon.';
    document.getElementById('formMessage').style.color = 'green';

    // Reset the form
    document.getElementById('contactForm').reset();
});
