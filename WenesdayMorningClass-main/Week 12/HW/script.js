const themeButton = document.getElementById("themeToggle");
    themeButton.addEventListener ("click", () => {
        document.body.classList.toggle("dark");
        console.log("Theme changed!");
    })


const addBtn = document.getElementById("addItem");
const list = document.getElementById("items");
let counter = 1; // keeps track of item numbers
addBtn.addEventListener("click", () => {
// Create a new list item
const newItem = document.createElement("li");
// Give it text (Item 1, Item 2, ...)
newItem.textContent = "Donut " + counter;
// Add it to the list on the page
list.appendChild(newItem);
counter++; // increase number for next item

});

list.addEventListener("click", (event) => {
// Check if you clicked directly on a list item
if (event.target.tagName === "LI") {
event.target.remove(); // delete that <li>
}
console.log("You removed a donut"); //this adds a comment when item is removed
});
//getelement was missing "by" and added the class name "keyoutput"
const keyOutput = document.getElementById("keyOutput");
// was missing event word 
document.addEventListener("keyup", (event) => { 
keyOutput.textContent = "You pressed: " + event.key;
});