# JS-tutorial

## Description :- 
JavaScript is a scripting language of the web that allows you to do/add Interactivity with User-Events, implement Conditions and Validations, Dynamic updates in a Web Page, etc.. In this practical course will learn JavaScript basics-programming fundamentals from scratch. We Will start with what is JavaScript? its uses, history, how to write JavaScript, etc. It will also cover various programming building blocks like variable, functions, array, conditionals, objects, and many more.

 History of JavaScript
---------------------

- Invented by `“Brandan Eich”` at `Netscape` in `1995` originally named as `"LiveScript"`
- `Netscape` & `Sun Java` agreements to rename `"LiveScript"` to `"JavaScript"` (As `java` is already popular in the market)
- Not at-all related to `JAVA` (completely different in concept and design)
- `Microsoft` has developed new version of "JavaScript" as `"JScript"` for `IE-3` in `1996`
- JavaScript Submitted to `ECMAScript in 1997`


JavaScript Getting Started
=====================
How to write Javascript?
---------------------
JavaScript in HTML
---------------------

- The HTML `<script>.....</script>` tag is used to embed/insert/implement a JavaScript programs/code into any part of an HTML document/page
- The `<script>.....</script>` tag specifies that we are using JavaScript
- The `<script>.....</script>` element can be placed in the `<head>`, or `<body>` section of an HTML document
- Each `<script>.....</script>` tag blocks the page rendering process until it has fully downloaded and executed the JavaScript code
  - So the best practice is to place/add the `<script>.....</script>` at the bottom/end of `body` tag/section ie. just before the closing `</body>` tag
 
    
Section 01. Variables
=====================

What is Variable?
---------------------

Variables are one of the most fundamental concepts in JavaScript and other all programming languages of the world.

- A variable is `container to store/hold the data/information`
- Developers/Programmers use Variable to `store/hold the data/information temporarily` in computer memory 
- A variable is a kind of data holder where we can store some value for programming or calculation purpose
- A JavaScript variable is simply a `name of the storage location (named containers/named storage)` for data
- Variables are symbolic names for values 
- Variables are used to store data of different types like a string of text, numbers, boolean values like true/false, an array of data, etc. 
- The data or value stored in the variables can be set, updated, and retrieved whenever needed
- Variables are declared using the keyword `var` keyword

Section 02. Data types
=======================

 Data types 
-------------

A variable in JavaScript can contain any type of data. Data types specify what kind of data can be stored and manipulated within the variable in a program. In JavaScript, different data types are available to hold different types of values/data. There are two main categories/types of data types in JavaScript:

 1. Primitive (Primary or Value) data type
- String
- Number
- Boolean
- Undefined
- Null
- Symbol (newly introduced in ES6)

2. Non-primitive (Reference or Composite) data type
- Array
- Object
- Function

Section 03. Operators
=======================

What is Operator ?
-------------------
- We know/use many operators since our initial school days, they are things like addition +, multiplication *, subtraction -, open-close round bracket ( ) or square bracket [ ]
- Operators are symbols/keywords that tell the JavaScript engine to perform some sort of actions .
- JavaScript operators are symbols that are used to perform operations on operands .
- Operators used along with our variables and constants to create expressions to implement logic and algorithms .

// Lets take a look on simple expression 
var sum = 1 + 2;

// Here 1 and 2 are called `operands` and 
// `=` & `+` are called the `operator`
// `= is the assignment` operator, `+ is the arithmetic` operator

JavaScript supports the following types of operators:
1. Arithmetic Operators
2. Assignment Operators
3. Logical Operators
4. Comparison (or Relational) Operators
5. Conditional (or ternary) Operators
6. String Operators
7. Bitwise Operators


Section 04. Conditionals Statements 
=====================================
- Conditional Operator returns a value based on the condition, it is like if-else . 

Ternary Operators
--------------------
- It works with three operands
- condition ? true output: false output 
 - eg:-(a ? b : c)

   syntax is: [age> 18 ? "adult" :" not adult " ;]

```javascript

let age = 25;
let result = age > 18 ? "adult" : "not adult";
console.log(result);
```  

- The conditional (ternary) operator is the only JavaScript operator that takes three operands
- The conditional operator that assigns a value to a variable based on some condition
- This operator is frequently used as a shortcut/short-hand method for the if statement
- Syntax: variablename = (condition) ? TRUE value: FALSE value

Section 05. Loops 
==================

Loops and Iterations :-
--------------------
- Loops are used to execute the same block of code again, with a different value, until a certain condition is met .
- Loops can execute/repeat a block of code (an action) a number of/several times .
- The basic idea behind a loop is to automate the repetitive tasks within a program to save time and effort .
- It makes the code compact .
- It is mostly used in array or object (to iterate through series)
- Loops/iterations is an instruction repeat until a specific condition is reached.

 Different Types of Loops in JavaScript:
----------------------------------------
1. for loop
2. while loop
3. do...while loop
4. for...in loop
6. for...each

## The for loop

- The For loop is used to run a piece of code a set amount of times
- Loops through a block of code until the counter reach a specified number
- The for loop repeats a block of code until a certain condition is met
- The for loop is the most simple/compact form of looping
- For loop consists of 3 statements (), mostly i = index is used for loop initialization

```javascript

for (let count=1; count <= 5; count++) {
    console.log("apna college");
 }

``` 
## The for loop - Find Even or Odd number (1-10)

```javascript

// for loop - to find out odd even number

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log('The current index/num is EVEN : ' , i);
  } /* else {
    console.log('The current index/num is ODD : ' , i);
  } */
}

``` 

## The while loop

- Loops through a block of code until the specified condition evaluates to true .
- In For loop, a variable is part of a loop, but in While loop, we need to declare variable externally .

```javascript

/*while(condition) {
  // Code to be executed
}*/
// 1- 5
let i = 1;

while (i <= 5) {
  console.log('Hello, The current index/num is: ' , i);
  i++;
}

```

## The do...while loop

- The do...while loop is similar to the while loop except that the condition check happens at the end of the loop.
- The do...while loop will always be executed at least once (before checking if the condition is true), even if the condition is false.

```javascript

// do...while loop

/*do {
    // Code to be executed
}
while(condition);*/

let i = 1;

do {
  
  console.log('Hello, The current index/num is: ' , i);
  i++;
}
while (i <= 5); 

```