/// my 3 variables using user input 
let team_name = prompt("what is your football team name?");
let wins = Number(prompt("How many games did your team win?"));
let losses = Number(prompt("How many games did your team lose"));


//checks to see if the team had a winning season 
if (wins > losses){
    // checks if they had zero losses
    if (losses === 0){
    console.log(team_name + " had a winning season and is undefeated!!"); }
        else {
    console.log(team_name + " had a winning season but is not undefeated.");} }
    else{ 
        console.log(team_name + " did not have a winning season.")
    }

// checks if you won at least 10 games 
if (wins >= 10){
    console.log( team_name + " won at least 10 games!");} 
else {
console.log(team_name+ " had less than 10 wins.");
}

//checks to see if you tanked the season

if (losses>= 15){
    console.log ( team_name + " tanked the season maybe next year!")
}
else {
    console.log (team_name + " did not tank the season!")
}

