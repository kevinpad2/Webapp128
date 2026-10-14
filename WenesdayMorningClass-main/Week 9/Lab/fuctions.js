// this fuction is greetuser it is using let name prompt to get user input to get name then prints it out with console.log 
function greetUser(){
    let name=prompt("What's your name?");
    console.log("Welcome, " + name);
}
//calls the fuction or else it wont run the fuction
greetUser();

// Fuction to add numbers togerther
function addnumbers(a,b){
    return a+b; 
}
//this gives a and b their values to add together
let results= addnumbers (15,15);
console.log(results); //30

// this fuction will calculate the area by taking L time W
function calculateArea(l,w){
    return l*w;
}

// this will give the values to L and W 
let areatotal= calculateArea (25,25);
console.log(areatotal); //625