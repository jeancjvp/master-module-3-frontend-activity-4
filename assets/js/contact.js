// Wait for all DOM to load
window.addEventListener("DOMContentLoaded", function() {

    // Remove error messages
    const allInputs = document.querySelectorAll("input, textarea");

    allInputs.forEach(input => {
        input.addEventListener("change", function(event) {
            if (event.target.value !== "") {
                input.classList.remove("is-invalid");
            }
        })
    })

    // Send Contact Us Form
    const submitContactForm = document.querySelector("#contact");
    const alert             = document.querySelector("#alerts");
    const emailInput        = document.querySelector("#email");
    const messageInput      = document.querySelector("#textarea");
    
    submitContactForm.addEventListener("click", function(event) {
        event.preventDefault();

        const userEmail   = emailInput.value;
        const userMessage = messageInput.value;
        
        // Validations
        if (!userEmail) {
            emailInput.classList.add("is-invalid");
        }

        if (!userMessage) {
            messageInput.classList.add("is-invalid");
        }

        if (userEmail && userMessage) {

            emailInput.classList.remove("is-invalid");
            messageInput.classList.remove("is-invalid");

            if (alert.classList.contains("unshow")) {
                alert.classList.add("show");
                alert.classList.remove("unshow");
            }

            emailInput.value   = "";
            messageInput.value = "";
        }
    })
})