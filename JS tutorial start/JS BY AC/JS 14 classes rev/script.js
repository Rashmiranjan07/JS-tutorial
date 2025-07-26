// Classes & Objects
// Prototypes :-
/* 
--> A javascript object is an entity having state and behavior (properties and method).
--> Js objects have a speciual property called prototype .
-- >we can set prototyping using -- proto-- 
*/

const student = {
    fullName : "shardha khapra",
    marks : 94.4,
    printMarks: function() {
        console.log("marks = ",marks);
    },
};

const employee = {
  calcTax() {
    console.log("tax rate is 10%");
  },
};

const karanArjun = {
  salary: 50000,
  calcTax() {
    console.log("tax rate is 20%");
  },
};

const karanArjun2 = {
    salary:50000,
};

const karanArjun3 = {
    salary:50000,
};

const karanArjun4 = {
    salary:50000,
};

const karanArjun5 = {
    salary:50000,
};

karanArjun.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;
karanArjun5.__proto__ = employee;

// Classes in JS
// Class is a program-code template for creating objects .
// Those objects will have some state (variable)  & some behaviour (function) inside it .
/* class Myclass {
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

this is the syntax of creating a object from a class .
let myObj = new Myclass();

let fortuner = new ToyotaCar ();
fortuner.setBrand("fortuner");
let lexus = new ToyotaCar ();
lexus.setBrand("fortuner");

// CONSTRUCTOR
/* Constructor() method is :

. automatically invoked by new 
. initialize object 


class MyClass{
constructor () {....}
myMethod(){...}
}
*/

class ToyotaCar {
    constructor (brand){
        console.log("creating new object");
        this.brand = brand;
    }

  start() {
    console.log("start");
  }

  stop() {
    console.log("stop");
  }
}
 let fortuner = new ToyotaCar("fortuner");
 let lexus = new ToyotaCar("lexus");

// INHERITANCE IN JS :-
/* inheritance is passing down properties & methods from parent class to child class .

 class Parent {
 
 }

 class Child extends Parent {
 
 }
   --> If child & parent have same method , child's method will be used .[method overloading] 
 */

class Parent {
  hello() {
    console.log("hello");
  }
}

class Child extends Parent {

}

let obj = new.Child();

class Person {
    constructor() {
        this.species ="homo sapiens";
    }
  eat() {
    console.log("eat");
  }
  sleep() {
    console.log("sleep");
  }
  work() {
    console.log("solve problems, build something ");
  }
}


class Engineer extends Person {
    work() {
        console.log("solve problems,build something");
    }
}

class Doctor extends Person {
    work() {
        console.log("treat patients");
    }
} 

 let shardhaObj = new Engineer()


 //SUPER KEYWORD 
 /* The super Keyword is used to call constructor of its parent class to acess the parent's properties and methods .

 super(args) // calls Parent's constructor 
 super.parentMethod(args) */