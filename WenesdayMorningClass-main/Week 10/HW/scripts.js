//Checks to see if the JavaScript file is connected
console.log("DOM HW loaded");

//Selects the main elements using their IDs
const titleEl = document.getElementById("carTitle");
const mainEl = document.getElementById("carMain");

// Change the title text
titleEl.textContent = "Dream Car Collection - Powered by JavaScript";

// Select the introduction and change its text
const introEl = document.querySelector(".carIntro");
introEl.textContent = "Here are five cars I would love to own someday!";

//Selects the image and change it if needed
const imgEl = document.getElementById("Porschepic");

// Set the starting image and change if needed
imgEl.src = "https://a.storyblok.com/f/322327/2622x716/33e9e4883a/911-gt3-rs-side.png/m/1800x492/smart/filters:format(avif)";
imgEl.alt = "Porsche";

//Creates the list of my five dream cars
const cars = [
    { name: "Porsche 911 GT3 RS", info: "The first dream car I wanted, straight perfection." },
    { name: "BMW M5", info: "One of the best family cars in my opinion." },
    { name: "Lamborghini Urus", info: "Best luxury SUV." },
    { name: "Chevrolet Corvette", info: "Best American car." },
    { name: "Kia Stinger GT2", info: "The first car I was able to buy." }
];

// Select the list where the cars will appear
const listEl = document.getElementById("carList");

listEl.innerHTML = ""; // Clear existing list

// Creates and appends the list items from the cars
cars.forEach((car) => {
    const li = document.createElement("li");
    li.textContent = `${car.name} — ${car.info}`;
    listEl.appendChild(li);
});

//Selects all the car list items
const carItems = document.querySelectorAll("#carList li");


//Selects the buttons
const highlightBtn = document.getElementById("highlightButton");
const swapBtn = document.getElementById("swapimageButton");
const darkModeBtn = document.getElementById("darkmodeButton");

// Toggle the highlight class on the main section
highlightBtn.addEventListener("click", () => {
    mainEl.classList.toggle("carHighlight");
});

// Keep track of which image is showing
let swapped = false;

// Swap between the Porsche and BMW images when clicked
swapBtn.addEventListener("click", () => {
    if (swapped === false) {
        imgEl.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0C0SRDL4Z7JVjGVUcT3pYseaxgFSOD42fy6Xy31DHZQ&s=10";
        imgEl.alt = "BMW M5";
        swapped = true;
    } else {
        imgEl.src = "https://a.storyblok.com/f/322327/2622x716/33e9e4883a/911-gt3-rs-side.png/m/1800x492/smart/filters:format(avif)";
        imgEl.alt = "Porsche 911";
        swapped = false;
    }
});

// Toggle dark mode on the entire page
darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("carDark");
});

//Select the paragraph and change its text and color
const messageEl = document.getElementById("carText");

messageEl.textContent = "These are my top five dream cars!";
messageEl.style.color = "blue";