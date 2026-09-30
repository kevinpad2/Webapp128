//comparison operators

// Document.body.innerHTML += "<p> The score you have is a " + score +"</p>";
// I want the website to ask the user for their name, and then display " Hello [name]"





//why use loops? 
// repeat code multiple times, without duplicating code
//the while loop
// while(condition){
//     //code to run repeatedly, if condition is true 
//     // infinte loops, make sure something inside changes the condition
// }

//basic program that is going to count 1-5 and will display it via console 

// let count=0 //this is our starting point, intialize loop control variable
// while(count <=5){ //checks condition, if true everything in brackets runs 
//     console.log("count is: "+count);
//     count++; //increment to avoid infinite loop 
// }



// //For loop 

// // for(intializtion; condition; final-expression){
// //     //repeated code
// // }

for(let i=1; i<=5; i++){
    console.log("i is: "+i);
}


//let i=1 is our starting point 
//i<=5 means to stop when greater than 5
//i++ we are counting by 1
//why For is cleaner: All loop logic is in one easier to read imo 

// program that lets user pick what number to count to 

let num=Number(prompt("Pick a number: "));

for (let i=1; i<=num;i++){
    console.log(i);
}




// classic triangle loop pattern 

let triangle="";
for(let line=1; line<=7;line++){
    triangle+="*";
    console.log(triangle)
}
