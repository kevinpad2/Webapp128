// Select the form and result section
const form = document.getElementById("contactForm");
const result = document.getElementById("result");

// Listen for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stops page refresh

    // Get values from the inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
      const Age = document.getElementById("age").value;

    // Display the info back to the user
    result.innerHTML = `
      <h3>Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>age:</strong> ${Age}</p>
    `;
});


// questions to ask yourself 
// event.preventDefault() prevents the page from refreshing when the from is submitted.
// the .value returns the value of the input field.
// we use template literals instead of string concatenation because its easier to read and write.
