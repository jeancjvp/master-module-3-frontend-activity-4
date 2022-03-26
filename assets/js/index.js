// Wait for all DOM to load
window.addEventListener("DOMContentLoaded", function() {
    
    // Remove error messages
    const allInputs = document.querySelectorAll("input");

    allInputs.forEach(input => {
        input.addEventListener("change", function(event) {
            if (event.target.value !== "") {
                input.classList.remove("is-invalid");
            }
        })
    })

    // Create Post Functionality
    const submitForm       = document.querySelector("#submit-form");
    const alert            = document.querySelector("#alerts");
    const allPosts         = document.querySelector("#posts");
    const userNameInput    = document.querySelector("#username");
    const imageInput       = document.querySelector("#image");
    const descriptionInput = document.querySelector("#description");

    submitForm.addEventListener("click", function(event) {
        event.preventDefault();

        const userName    = userNameInput.value;
        const image       = imageInput.files[0];
        const description = descriptionInput.value;
        const date        = getDate();
        
        // Validations
        if (!userName) {
            userNameInput.classList.add("is-invalid");
        }

        if (!image) {
            imageInput.classList.add("is-invalid");
        }

        if (!description) {
            descriptionInput.classList.add("is-invalid");
        }

        if (userName && image && description) {

            userNameInput.classList.remove("is-invalid");
            imageInput.classList.remove("is-invalid");
            descriptionInput.classList.remove("is-invalid");

            allPosts.innerHTML += `
                <div class="col mb-3">
                    <div class="card post">
                        <img src="${URL.createObjectURL(image)}" class="img-fluid" alt=""/>
                        <div class="card-body">
                            <div class="d-flex justify-content-between mb-1">
                                <div class="gray">${date}</div>
                                <button id="btn-like" class="like btn">
                                    <i class="fa-solid fa-heart"></i>
                                    <span class="ms-1">0</span>
                                </button>
                            </div>
                            <h6 class="card-title bold mb-4">
                                <strong>${userName}</strong>
                            </h6>
                            <p class="card-text">${description}</p>
                            <div class="gray">
                                <i class="fa-regular fa-message"></i>
                                <span class="ms-2">Comments (0)</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            if (alert.classList.contains("unshow")) {
                alert.classList.add("show");
                alert.classList.remove("unshow");
            }

            userNameInput.value    = "";
            imageInput.value       = "";
            descriptionInput.value = "";
        }
    })

    // Like Btn Functionality
    let btnLike = document.querySelectorAll("#btn-like");
    
    btnLike.forEach(input => {
        input.addEventListener("click", function(event) {
            if (input.classList.contains("btn-danger")) {
                input.classList.add("like");
                input.classList.remove("btn-danger");
            } else {
                input.classList.remove("like");
                input.classList.add("btn-danger");
            }
        })
    })
 
    // Get Current Date
    function getDate() {
        let date     = new Date();
        const dd     = date.getDate();
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const mm     = months[date.getMonth()];
        const yyyy   = date.getFullYear();

        date = dd + " " + mm + " " + yyyy;
        return date;
    }
})