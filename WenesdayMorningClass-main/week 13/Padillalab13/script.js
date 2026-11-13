
// creates a const and gets them by their ID 
const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");

// creates a conct from their ID for errors 
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");

// const for success message
const successMessage = document.getElementById("successMessage");


// Email Regex pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// an even lister for empty space on name
nameInput.addEventListener("blur", () => {

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
    }
    else {
        nameError.textContent = "";
    }

});


// an event listener for spaces on email and pattern 
emailInput.addEventListener("blur", () => {

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Please enter your email.";
    }
    else if (emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "";
    }
    else {
      emailError.textContent = "Please enter a valid email address.";
}
});


// Age validation requirements
ageInput.addEventListener("blur", () => {

    if (ageInput.value.trim() === "") {
        ageError.textContent = "Please enter your age.";
    }
    else if (ageInput.value < 1) {
        ageError.textContent = "Age must be at least 1.";
    }
    else {
        ageError.textContent = "";
    }

});


// Listen for submition 
form.addEventListener("submit", (event) => {

    // Prevents the page from reloading
    event.preventDefault();

    // Clear previous success message
    successMessage.textContent = "";

    // Assume the form is valid
    let formIsValid = true;


    // Checks Name
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        formIsValid = false;
    }
    else {
        nameError.textContent = "";
    }


    // Checks Email
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Please enter your email.";
        formIsValid = false;
    }
    else if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        formIsValid = false;
    }
    else {
        emailError.textContent = "";
    }


    // Checks Age
    if (ageInput.value.trim() === "") {
        ageError.textContent = "Please enter your age.";
        formIsValid = false;
    }
    else if (ageInput.value < 1) {
        ageError.textContent = "Age must be at least 1.";
        formIsValid = false;
    }
    else {
        ageError.textContent = "";
    }


    // Checks to see if all fields are valid
    if (formIsValid) {

        successMessage.textContent = "Form submitted successfully!";

        // Resets the form
        form.reset();

        // Clears old error message
        nameError.textContent = "";
        emailError.textContent = "";
        ageError.textContent = "";

    }

});
