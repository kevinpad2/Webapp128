console.log("Linked")
// DOM and basic Manipulation 
// What is the DOM?
// Document object Model, this is how the browser represents your web page in memory 
// HTML elementes becomes a JS object that we can access, change or delete 
// JS to change text,images, colors, classes, etc. This occurs after the web page fully loads

// Change the text content with JS 
// we are going to find the HTML Element cia its ID attribute 

const title=document.getElementById("title");
// document, represents the whole webpage loaded in the browser 
// .getelementbyId("title"), finds the element in the html with the exact ID
// Const, means that the variable reference wont change, 
// it will always dpoint to the same DOM element 

title.textContent="welcome to my webpage!"
// .textcontent accesses or changes the text inside the element 


// seleceting elements 
// getelementbyID(), selectes one element by its ID     document.getelementbyIT("title")

//queryselector(), selects the first match(ID, class, tag)     document.queryselector(".main")

// queryselectorALL(), Return a nodelist of all matches          document.queryselectorALL("P")


// queryselctor
const mainsection=document.querySelector(".main");

mainsection.style.backgroundColor="red"


// queryselctorALL

const pragraphs=document.querySelectorAll("p");
// loop through all p elements and change their text 

pragraphs.forEach((para, index) => {
    para.textContent = `Paragraph ${index +1} modified by querySelectorALL()`;
    para.style.color = "blue";
});

// Adding interactivity with event listeners 
// select button 

const button=document.getElementById("toggle");
// listen for a button click
button.addEventListener("click",() =>{
    // toggle the highlight class on the body 
    document.body.classList.toggle("highlight");

})