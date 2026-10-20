// this fuction is greetuser it is using let name prompt to get user input to get name then prints it out with console.log 
function greetUser(){
    let name=prompt("What's your name?");
    console.log("Welcome to the movie theater " + name);
}
//calls the fuction or else it wont run the fuction
greetUser();

// this function calculates the total price of the movie tickets 
function calculatetotal(tickets, price){
    return tickets * price; 
}
//this gives tickets and price their value from user prompt 
let numberofticket = Number(prompt("How many tickets will you buy?"));
let ticketprice = Number(prompt("What is the price for your ticket?"));
// after getting their values this will calculate the total and print it 

let total = calculatetotal(numberofticket, ticketprice);
console.log("Your total is $" +total);

// This function uses for loop to print a special message for each ticket
function mtickets( movie, tickets) {
    for (let i = 1; i <= tickets; i++) {
        console.log("Ticket " + i + " for " + movie);
    }

// this conditional will check how many tickets the user buys and prints mesage
    if (tickets >= 5){
    console.log("Wow you bought 5 or more tickets!")
}
    else {
    console.log (" Enjoy your movie!")
    }
}

// this will add the movie name to the movie with user promt
let moviename = prompt("What movie do you want to see? ");

// calls the function and gives it the number of tickets and movie name 
mtickets(moviename, numberofticket);