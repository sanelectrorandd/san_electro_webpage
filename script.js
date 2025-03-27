// script.js

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Show success message
    document.getElementById("formMessage").style.display = "block";
    
    // Hide success message after 3 seconds
    setTimeout(() => {
        document.getElementById("formMessage").style.display = "none";
    }, 3000);
    
    // Reset form
    this.reset();
});
