// Function in Java script 
// Block of Code that performs a specific task , can be invoked (call) whenever needed .


// console.log("hello");
// "abc".toUpperCase()
// [1,2,3].push(4);


//Function Definition :-

//    Function FunctionName(){
//         Do something 
//               }


function myFunction() {
    console.log("Welcome to apna college !");
    console.log("We are learning JS ");
}

myFunction();

//parameter--> input 
function ourFunction(msg) {
    //parameter--> input 
    console.log(msg);
}

ourFunction("I love JS");// Argument



//Function -> numbers,Sum
// function sum (x,y) {
//     console.log(x+y);
// }


// Function parameters are --> like local variavble of functions & block scope 



//Arrow function
//(Compacrt way of writting a function )


//eg:-
// sum function 
function sum(a,b) {
    return a+b;
}

//lets see how to write these function codes in arrow function
const arrowSum = (a, b) => {
    console.log(a+b);
};

//multiplication function 
function Mul(a, b) {
    return a*b;
}

const arrowMul = (a, b) => {
    console.log(a*b);
};


const printHello = () => {
    console.log("hello");

}




//prcatice question 

//Q 01. create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in the string.

function countVowels (str) {
   let count = 0;
    for(const char of str) {
        if(char==="a"||
            char==="e"||
            char==="i"||
            char==="0"||
            char==="u"
        ){
            count ++;
        }
    }
    console.log(count);
}


//q 02. Create a arrow funtion to perfrom the same task .


const countVow = (str) => {
     let count = 0;
    for(const char of str) {
        if(char==="a"||
            char==="e"||
            char==="i"||
            char==="0"||
            char==="u"
        ){
            count ++;
        }
    }
    return count;
};