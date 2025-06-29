// Dom Manipulation 
// This is the process how we can acess element by heading.


//Selceting With Id 
// document.getElementById("myId")

let button = document.getElementById("myId"); //h1
console.dir(button);


//Selecting with class
// document.getElementByClassName("myClass")

// let headers =document.getElementsByClassName("myClass");
console.dir(headers);
console.log(headers);

// selecting with tag 
//document.getElementsByTagName("p")

let parahs = document.getElementsByTagName("p");
console.dir(parahs);



// Query Selector
//document.querySelector("myId/ myClass / tag") 
//returns elements
let firstEl = document.querySelector("p"); // 1st elements 
console.dir(firstEl);


//document.querySelectorAll("myId/ myClass / tag") 
//returns a Nodelist

let allEl = document.querySelector("p"); // all elements 
console.dir(allEl);

let div = document.querySelector("div");
console.dir(div);

//----
let heading = document.querySelector("h1");

