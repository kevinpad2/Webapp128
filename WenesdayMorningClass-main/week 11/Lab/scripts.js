console.log("linked")
// DOM #1 this displays you scored a touchdown when button gets clicked
const touchdown = document.getElementById("touchdownButton");
touchdown.addEventListener("click", () => {
alert("You scored a touchdown!!");
});

// DOM#2 makes it say the teams are champs
const teamchamps = document.getElementById("teamchamps");
teamchamps.addEventListener("dblclick", () => {
teamchamps.textContent = "Your team are champs!";
});
// DOM #3 football fact
const Footballfact = document.getElementById("Footballfact");
Footballfact.addEventListener("mouseover", () => {
Footballfact.textContent = ("The first nfl game was in 1920 on october 3rd.")
}); //goes back to original text 
Footballfact.addEventListener("mouseout", () => {
Footballfact.textContent = ("Hover overme for football fact!")
});
// DOM #4 change the websites bacground
 const darkbtn = document.getElementById("darkbtn");

 darkbtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
 });


// DOM #5 displays the team name user types 
const userteamname = document.getElementById("userteamname");
userteamname.addEventListener("input", () => {
console.log("User's team is:", userteamname.value);
});