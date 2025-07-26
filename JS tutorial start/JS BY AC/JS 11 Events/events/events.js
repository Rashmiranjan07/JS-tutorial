/* EVENTS :--
 The change in the state of an object is known as an Event 
 Events are fired to notify code of "interesting changes" that may aaffect code execustion .
 ex :-  
 - Mouse events (click, double click etc.)
 - Keyboard events (keypress,keyup,keydown)
 - form events(submit etc.)
 - print event & many more .
 
 
 => inline event handling :- it is used to be says when we write the events in out html code and its occurrs do some work like events handle.
 Notes:- This is not a good way to write the code in side the html code there is we find the better way .
 
 */

 // Event Handling in Js 
 /* 
 
 node.event =() => {
    // handle here
    }
*/

 let btn1 = document.querySelector("#btn1");

//  btn1.onclick =(evt) => {
    // console.log(evt);
    // console.log(evt.type);
    // console.log(evt.target);
    // console.log(evt.clientX, evt.clientY);
    // console.log("HANDLER1");
    // let a = 25;
    // a++;
    // console.log(a);
//  };
 btn1.addEventListener("click",() => {
    console.log("button1 was clicked - handler1");
   
 });

 btn1.addEventListener("click",() => {
    console.log("button1 was clicked - handler2");
 });

//  btn1.addEventListener("click",() => {
//     console.log("button1 was clicked - handler3");
//  });

 const handler3 = () => {
    console.log("button1 was clicked - handler3");
 }
 btn1.addEventListener("click", handler3);

 btn1.addEventListener("click",() => {
    console.log("button1 was clicked - handler4");
 });


btn1.removeEventListener("click",handler3);



 let div = document.querySelector("div");
//  div.onmouseover = (evt) => {
    // console.log("you are inside the div");
    // console.log(evt);
    // console.log(evt.type);
    // console.log(evt.target);
    // console.log(evt.clientX, evt.clientY);
//  };


 // Notes :- when we use [inline handling & Js handling] both then the priority is always to be excuted is"js Handling". 
 // we cannot overwrite . If we written double then the 2nd one is excuted .
 


//  EVENT OBJECT :-
//    it is a special object that has the details about the event .
//    All event handlers have access to the Event objects's properties and methods .
   
   node.event =(e) => {
    //handle here 
    }

    e.target , e.type , e.clientX ,e.clientY 
   

    // examples are done already inside the code 


    /* EVENT LISTENERS :-
    - node .addEventListener( event,callback)

    -node.removeEventListeners(event,callback)

    *Note:- the callback refeerences shoud be same to remove 

      */
    



    