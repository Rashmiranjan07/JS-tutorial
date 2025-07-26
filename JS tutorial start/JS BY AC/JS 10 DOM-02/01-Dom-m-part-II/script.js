// DOM manipulation part - 02


// Attributes :--

// .getAttribute(attr) 
//to get the attributes value 
let div = document.querySelector("div");
console.log(div);
let id = div.getAttribute("id");
console.log(id);
let name = div.getAttribute("name");
console.log(name);



let para = document.querySelector("p");
console.log(para.getAttribute("class"));


//setAttribute(attr, value) 
// to set the attributes

let para = document.querySelector("p");
console.log(para.setAttribute("class","newClass"));


//style 
//node.style
let div = document.querySelector("div");

div.style.backgroundColor = "green";
div.style.backgroundColor = "purple";
div.style.visibility = "hidden";

div.innerText = "hello";



//insert elements :-

// notes :- let el = document.createElement("div")

let newBtn = document.createElement("button");
newBtn.innerText = "click me!"
console.log(newBtn);

//node.append(el)
//adds at the end of nodee(inside)

let div = document.querySelector("div");
div.append(newBtn);


//node.prepend(el)
//adds at the starting of nodes(inside)
let div = document.querySelector("div");
div.prepend(newBtn);


//node.before(el)
//adds before the node(outside)
let div = document.querySelector("div");
div.before(newBtn);


//node.after(el)
//adds after the node (outside)
let p = document.querySelector("p");
p.after(newBtn);



let newHeading = document.createElement("h1");
newHeading.innerHTML ="<i>hi, I am new!</i>"

document.querySelector("body").prepend(newHeading);


//delete element :-

//node.remove()
//remove the nodes 
let para = document.querySelector("p");
para.remove();

newHeading.remove();


