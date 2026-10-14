// what is a function 
// reusable block of code to perform a specific task 


function greetuser(name){
    console.log("hello user");
}

greetuser();   //calls (execute) the function 

// fuction structure 
// keyword, fuction: tells js we're defining a fuction 
// name, identify the fuction 
// Parmeter, Variables inside the parenthess that receive data 
// Body, the code between {}

// parameter and Arguments 
// Parameter: Placeholder and defining a fuction 
// Arguments: actual value when calling it 

function greet(name){ //name is the parameter
    console.log("hello" + name);
}
greet("sebastian"); //sebastian is the argument


// fuction that will add two numbers together 
// then cosole the total 

function addnumbers(a,b){
    return( a +b);
}

let total=addnumbers (4, 6);
console.log("the total is: " +total)

// Return sends a value back to where the fuction was called
// console.log() just prints it

// return is like your fuction handing you back a notes with the answer written on it 
// console.log is your fuction yelling the answer out loud, we hear it but we cant use it again 

function multiply(x,y ){
    return x*y
}

let results= multiply (15,15);
console.log(results); //225

function countTon(n){
    for( let i=1; i<=n; i++){
        console.log(i);
    }
}

countTon(5);




// nested Fuctions 
// Fuction can call another fuction inside of it 
function square(num){
    return num*num;
}


function printsquare(num){
    console.log("Square is: " + square(num));
}


printsquare(6) //36

// fuction that greets the user, asks for their name, then prints it 
function username(){
    let name=prompt("What's your name?");
    console.log("Welcome, " + name);
}

username();