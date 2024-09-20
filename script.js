document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // Simple form validation
    if (name && email && message) {
        document.getElementById("formMessage").textContent = `Thank you, ${name}. Your message has been sent!`;
        document.getElementById("formMessage").style.color = "green";
        
        // Clear form fields
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("formMessage").textContent = "Please fill out all fields.";
        document.getElementById("formMessage").style.color = "red";
    }
});
