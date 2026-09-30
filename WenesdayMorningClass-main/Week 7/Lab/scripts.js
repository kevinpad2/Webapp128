// counting loop 

for(let i=1; i<=10; i++){
    console.log("count is: "+i);
}
//let i=1 is our starting point 
//i<=10 means to stop when the number is greater than 10
//i++ we are counting by 1 to


// User input counting loop 
let num=Number(prompt("Pick a number: "));
// lets user pick number and will count to that number 
for (let i=1; i<=num;i++){
    console.log("number:"+i);
}

// triangle pattern  
let triangle="";  //place holder of triangle
for(let line=1; line<=7;line++){ //prints in each line the amount going to 7 
    triangle+="#"; //the value that is getting printed creating the shape
    console.log(triangle)
}


