// These are the values from user input
let teamname= prompt("Enter your team name:");
let numberofgames = Number(prompt("How many games do you want to play? (1-18)"));

//prints the name and number of games user picked 

console.log("Football Team: " + teamname);
console.log("Nuber of games: " + numberofgames);


//This is the loop for the number of games the user puts and on certain games it will have a special message
for(let game =1; game <= numberofgames; game++){
    console.log("game "+ game);
    if(game == 2) {
        console.log("on game " + game + " the: " + teamname + " lost by 40 points!")
    }
    if(game == 8) {
        console.log("on game " + game +  " the: " + teamname + " won by 8")
    }
    if(game == 18){
        console.log("on game " + game + " the: " + teamname + " Finished the season!")
    }

}

//creats a shape with the emoji football using the user input
let rows = Number(prompt("How many rows do you want for your football shape?"));


let shape="";  //place holder of triangle
for(let line=1; line<=rows;line++){ //prints in each line with the amount entered
    shape+="🏈"; //using the emoji to create a shape
    console.log(shape)
}



    
