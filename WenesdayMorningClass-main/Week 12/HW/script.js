// Select the form and result section
const form = document.getElementById("carForm");
const result = document.getElementById("result");

// Listen for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stops page refresh

    // Get values from the inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const car = document.getElementById("car").value;
    const age = document.getElementById("age").value;
    const type = document.getElementById("type").value;
    const modify = document.getElementById("modify").value;
    const message = document.getElementById("message").value;

    // Displays the info back to the user
    result.innerHTML = `
      <h2>Dream car form submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Car:</strong> ${car}</p>
      <p><strong>age:</strong> ${age}</p>
      <p><strong>Type:</strong> ${type}</p>
      <p><strong>Modify:</strong> ${modify}</p>
      <p><strong>Message:</strong> ${message}</p>
      
    `;
});

