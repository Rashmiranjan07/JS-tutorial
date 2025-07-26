// practice question :-
// Q . Create a H2 headings element with text -"Hello Javascript". Append "from Apna college students" to this text using Js .

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + "from Apna college student";



// Q . Create 3 dives with common name - " box". Access them & add some unique  text to each of them.

let divs = document.querySelectorAll(".box");
console.log(divs[0]);
divs[0].innerText ="new unique value 1";
divs[1].innerText ="new unique value 2";
divs[2].innerText ="new unique value 3";

