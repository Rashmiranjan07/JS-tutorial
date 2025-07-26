/* Q01.  create a toggle button that changes the screen to dark -mode when clicked & light-mode when clicked again.  */

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", ()=> {
    if(currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
    } else {
        currMode = "light";
        body.classList.add("light");
    }

    console.log(currMode);
});