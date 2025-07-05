// OBJECT -

//Prototypes in JS -
/* A Javascript object is an entity having state and behavior (propoties & method)
   - JS objects have a special property called prototype.
   - we can set prototyping using __ proto __ 

*/

// const student = {
//     fullName : "shrdha khapra",
//     marks : 94.4,
//     printMarks : function() {
//         console.log("marks =", this.marks);
//     },
// };



const employee = {
   calcTax() {
    console.log("tax rate is 10%");
   },
};

const karanArjun = {
    salary:50000,
    calcTax() {
        console.log("tax rate is 20%");
    },
};

// const karanArjun2 = {
//     salary:50000,
// };

// const karanArjun3 = {
//     salary:50000,
// };

// const karanArjun4 = {
//     salary:50000,
// };

// const karanArjun5 = {
//     salary:50000,
// };

karanArjun.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;
// karanArjun5.__proto__ = employee;


/* If the object & prototype have same method , objects method will be used */


//CLASSES :-

/* Class is a program-code template for creating objects.
Those objects will have some state (variables) & some behaviour (function)inside it . 
    

class Myclass {
constructor() {..}
myMethod() {..}
}

*/

class ToyotaCar {
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setBrand(brand) {
 this.brandName = brand;
    }
}

// this is the syntax of creating a object from a class .
// let myObj = new Myclass();

let fortuner = new ToyotaCar ();
fortuner.setBrand("fortuner");
let lexus = new ToyotaCar ();
lexus.setBrand("fortuner");


// next video starts from 25.40 .