// Practice question :-
//Q.create a new button element. Give it a text "click me", background color of red & text color of white 
//-inssert the button as the first element inside the body tag.

let newBtn = document.createElement("button");
newBtn.innerText = "clickme!";
newBtn.style.color ="white"
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);


//Q. Create a <p>tag in html, give in a class & some styling .
// Now create a new class in CSS and try to append this class to the <p> elements.
/* notes- Did you notice , how you overwrite the class name when you add a new one?
 solve this problem using classList. */

let para = document.querySelector("p");