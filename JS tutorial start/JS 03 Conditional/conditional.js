/*conditional statements 
its use to implement some condition in the code . */


// 01 . if Statementlet 
let age = 25;

if (age > 18) {
    console.log("you can vote");
}

let mode = "dark";
let color;

if (mode === "dark") {
    color = "black";
}

if (mode === "light") {
    color = "white";
}

console.log(color);



// if-else statement 


if (mode === "dark") {
    color = "black";
} else {
    color = "white";
}

console.log(color);

//ex-2

let year = 25;

if (year >= 18) {
    console.log("vote");
} else {
    console.log("not vote");
}


// ex -03 odd or even find out ?

let num = 5;

if (num % 2 === 0) {
    num = "even";
} else {
    num = "odd";
}

console.log(num);

//else-if statement 

let day = "tuesday";
let number;

if (day === "monday") {
    number = 5;
} else if (day = "tuesday") {
    number = 3;
} else if (day = "wednesday") {
    number = 4;
} else {
    number = 2;
}

console.log(number);