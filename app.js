
// Get references to the dark mode toggle button and body element
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// Check if dark mode is enabled in localStorage on page load
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark");
    darkModeToggle.textContent = "🌞 Light Mode"; // Change button text to "Light Mode"
}

// Event listener for toggling dark mode on button click
darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark"); // Toggle the dark class

    // Toggle button text between "Dark Mode" and "Light Mode"
    if (body.classList.contains("dark")) {
        darkModeToggle.textContent = "🌞 Light Mode"; // Change button text to "Light Mode"
        localStorage.setItem("darkMode", "enabled");
    } else {
        darkModeToggle.textContent = "🌙 Dark Mode"; // Change button text to "Dark Mode"
        localStorage.setItem("darkMode", "disabled");
    }
});








// JavaScript for the Get Started button interaction
document.addEventListener("DOMContentLoaded", () => {
    const ctaButton = document.getElementById("ctaButton");
    const contactForm = document.getElementById("contactForm");

    // Event listener for the "Get Started" button
    if (ctaButton) {
        ctaButton.addEventListener("click", () => {
            alert("Thank you for showing interest! We will get in touch with you soon.");
        });
    }

    // Event listener for the contact form submission
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent the form from submitting the default way

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            // Simple validation
            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields before submitting.");
            } else {
                // Here, you could send the form data to a server (using AJAX, fetch, etc.)
                // For now, we'll just show an alert to simulate the submission
                alert(`Thank you, ${name}! Your message has been sent successfully.`);
                // Reset the form
                contactForm.reset();
            }
        });
    }
});


// Toggle Dark Mode
