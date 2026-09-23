 //strings variables includes text
 let  playerName ="Lebron James";
 let  teamName ="Los Angeles Lakers"
 const goat=true;
 const retired=false;

 //number variables

 let points =55;
 let assists =11;
 let games =5;

// math operations
let totalStats = points + assists;
let averagePoints = points / games;

//addes variables into one string
let playerinfo = playerName + " plays for the " + teamName;
let gameinfo = playerName + " scored " + points+ " points in a game ";

//prints information to the console
console.log(playerName);
console.log(teamName);
console.log(goat);
console.log(retired);
console.log(points);
console.log(assists);
console.log(games);
console.log("totalStats: " + totalStats);
console.log("Average points: " + averagePoints);

console.log(playerinfo);
console.log(gameinfo);


//This took me a while to figure out but based on what I gathered it was not displaying
//in the webpage because this document is using body and not header
// so I moved my scripts link to the body and it worked
//This is using the document.body.innner to print the console log into the body I added the player
//name and his total stats to get displayed

document.body.innerHTML += "<p>Result: " + playerName + " total stats is "+ totalStats + "</p>";