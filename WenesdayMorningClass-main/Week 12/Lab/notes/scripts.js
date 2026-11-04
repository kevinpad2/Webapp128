// select the from element
const form = document.getElementById("contactForm");
// listen for the submit event 
form.addEventListener("submit", function(event) {
   event.preventDefault(); // this stops the page from loading when the form is submitted
   // get the inpute value
   const name = document.getElementById("name").value;
   // in the console, state Hello "username"
   console.log ("Hello", name);


});


// Display data on the front side of the website 
const result=document.getElementById("contactForm");
result.addEventListener("submit", (event) => {
   event.preventDefault();
   const name = document.getElementById("name").value;
   result.innerHTML = `<p>Hello ${name}! Thanks for submitting. </p>`;


})


