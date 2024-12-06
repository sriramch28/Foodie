document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Simple validation message
    if (name && email && subject && message) {
        alert('Thank you for reaching out! Your message has been sent.');
        document.getElementById('contactForm').reset(); // Clear the form
    } else {
        alert('Please fill out all fields before submitting.');
    }
});
