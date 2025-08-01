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
- The `<script>.....</script>` tag specifies that we are using JavaScript.
- The `<script>.....</script>` element can be placed in the `<head>`, or `<body>` section of an HTML document.
- Each `<script>.....</script>` tag blocks the page rendering process until it has fully downloaded and executed the JavaScript code.
- So the best practice is to place/add the `<script>.....</script>` at the bottom/end of `body` tag/section ie. just before the closing `</body>` tag.
 
    
Section 01. Variables
=====================

What is Variable?
---------------------

Variables are one of the most fundamental concepts in JavaScript and other all programming languages of the world.

- A variable is `container to store/hold the data/information`
- Developers/Programmers use Variable to `store/hold the data/information temporarily` in computer memory 
- A variable is a kind of data holder where we can store some value for programming or calculation purpose.
- A JavaScript variable is simply a `name of the storage location (named containers/named storage)` for data.
- Variables are symbolic names for values.
- Variables are used to store data of different types like a string of text, numbers, boolean values like true/false, an array of data, etc. 
- The data or value stored in the variables can be set, updated, and retrieved whenever needed.
- Variables are declared using the keyword `var` keyword.

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

 - Here 1 and 2 are called `operands` and 
 - `=` & `+` are called the `operator`
 - `= is the assignment` operator, `+ is the arithmetic` operator

## JavaScript supports the following types of operators:

1. Arithmetic Operators
2. Assignment Operators
3. Logical Operators
4. Comparison (or Relational) Operators
5. Conditional (or ternary) Operators
6. String Operators
7. Bitwise Operators


Ternary Operators
--------------------
- It works with three operands.
- condition ? true output: false output .
 - eg:-(a ? b : c)

   syntax is: [age> 18 ? "adult" :" not adult " ;]

```javascript

let age = 25;
let result = age > 18 ? "adult" : "not adult";
console.log(result);
```  

- The conditional (ternary) operator is the only JavaScript operator that takes three operands.
- The conditional operator that assigns a value to a variable based on some condition.
- This operator is frequently used as a shortcut/short-hand method for the if statement.
- Syntax: variablename = (condition) ? TRUE value: FALSE value.



Section 04. Conditionals Statements 
=====================================
- Conditional statements are used to perform different action based on different condition.
- Conditional statements allow the developer to make correct decisions and perform right actions as per condition.
- It helps to perform different actions for different decisions.
- We can use conditional operator to check our condition: >, <, >=, <=, ==, !=, === .

We can use the following conditional statements in JavaScript to make decisions:

1. If Statement
2. If...else Statement
3. If...else if...else Statement
4. Switch...Case Statement

##  If Statement

- "If" the conditional statement is the simplest and basic control statement make decisions and execute statements conditionally.
- The if statement is used to execute a block of code only if the specified condition evaluates to true.
- It evaluates the content only if an expression is true.

```javascript

let age = 25;

if (age > 18) {
    console.log("you can vote");
}

``` 

## If...else Statement

- The JavaScript if...else statement is used to execute the code weather condition is true or false.
- The developer can enhance the decision-making capabilities by providing an alternative choice through adding an else statement to the if statement.
- The condition can be any expression that evaluates to true or false.
- If the condition evaluates to true, statements_1 are executed; otherwise, statements_2 are executed.

```javascript

let age = 15;

if (age >= 18) {
  console.log('MAJOR! Eligible for Voting');
} else {
  console.log('MINOR! NOT Eligible for Voting');
}

```

## If...else if...else Statement

- The if...else if...else a special statement that is used to combine multiple if...else .
- It is an advanced form of if...else that allows us to make a correct decision out of several conditions.

```javascript

let currentHours = 15;

if(currentHours >=6 && currentHours< 12) {
  console.log('Good Morning!');
  window.alert('Good Morning!');
} else if (currentHours >12 && currentHours <=18) {
  console.log('Good AfterNoon!');
  window.alert('Good AfterNoon!');
} else {
  console.log('Good Evening!');
  window.alert('Good Evening!');
}

```

## Switch...Case Statement
- The switch...case statement is alternative to an if...else if...else statement, both do almost the same thing.
- This matches the case and the value of condition and if the case matches, the subsequent block is executed and if none of the case matches default block is executed.
- The JavaScript switch statement is used to execute one code from multiple blocks of expressions.

```javascript

let sweets = 'cake'; //cake, chocolates, biscuits

switch (sweets) {
  case 'chocolates':
    console.log('Chubby Chocolates!');
    break;
  case 'cake':
    console.log('Happy BirthDay Cake!');
    break;
  case 'biscuits':
    console.log('Enjoy Biscuits!');
    break;
  default:
    console.log('No Sweets! Try some other sweets!');
    break;
}

```


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
5. for-of loop (string / arrays)

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

## for-in loop (used for objects)

```javascript

let student = {
    name: "rashmiranjan shaw",
    age: 20,
    cgpa: 9.7,
    isPass: true
};

for(let k in student) {
    console.log("k=", k , "value=", student [k]);
}


```

##  for-of loop (string / arrays)

```javascript

let str = "javascript";
let size = 0;


for (let a of str) {
    console.log("a=", a);
    size++;
}
console.log("string size=", size); //10


```


### practice question :- 

- print all even numbers from 0 to 100 .

```javascript

for (let num = 0; num<=100; num++) {
    if (num%2===0) {
        console.log ("num=", num);
    } 
}

```
### Practice Question :-
- create a game where you start with any random game number . Ask the user to keep guesssing the game number until the user enters correct value.   

```javascript

let gameNum = 25;
let userNum = prompt("Guess the game number: ");
while (userNum != gameNum) {
  userNum = prompt(" you entered the wrong game number. Guess again: ");
}

console.log("congratulation, you Guess the right number ");

```

Section 06. String Methods
============================

String 
-------
- String is a sequence of character used to represent text.
- create string
```javascript
let str ="apna college";
```
Syntax & Example :-

```javascript
const firstName = 'Rashmiranjan';
const lastName = 'Shaw'

const fullName = (firstName) + (lastName);
console.log(fullName);
console.log(typeof fullName);

//String Length
console.log(firstName.length);

//String indicates
// str[0], str[1], str[2]
console.log(str[8]);

// concat() method
console.log(firstName.concat(' ', lastName));

// change case
console.log(firstName.toLowercase());
console.log(firstName.toUppercase());

//escape character 
// "\n" - next line 
console.log("Rashmi \n ranjan");
//  "\t" - tab space 
console.log("Rashmi \t ranjan");

// string array - get specific character from string like an array
console.log(firstName[0]);

// indexOf
console.log(firstName.indexOf('i'));
console.log(firstName.lastIndexOf('a'));

// charAt()
console.log(firstName.charAt(2));

// get last character from string
console.log(firstName.charAt(firstName.length - 1));

// replace();
let replaceString = ('Rashmi', 'Mo');
console.log('My name is:', replaceString); 

// substring();
console.log(firstName.substring(0,4));

// slice();
console.log(firstName.slice(0,4));

// slice(); negative number starts from backside
console.log(firstName.slice(-2));

// includes();
let message2 = 'Hello Rashmi, welcome to JavaScript';
console.log(message2.includes('Hello'));
console.log(message2.includes('Hi'));

// split()
let message2 = 'Hello Rashmi, welcome, to JavaScript';
console.log(message2.split(','));
console.log(message2.split(' '));

let courses = 'html5, css3, javascript, angular';
console.log(courses.split(','));

```

### Practice Question :-
 - Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.

```javascript

let fullName = prompt("enter your fullname without spaces");

 let userName = "@" + fullName + fullName.length;
console.log(userName);

```

## Template Literals
- ES6 new feature Strings Template offers a convenient way to work with string concatenation/interpolation.

- Template literals provide an easy and clean way to create multi-line strings and perform string interpolation.

- Intuitive expression interpolation for single-line and multi-line strings.

- Use back-tick (grave accent) character and { var name in curly brace }, no + plus sign required.

- The best part of Template Literals (Template Strings) is we can use 'single' "double" quotes inside.

- It is part of ES6 but compatible with all the modern browsers and its latest versions.

```javascript
//old plain javascript approach
let user = 'Rashmi';
let greetMessage1 = 'Welcome' + ' ' + user + ' ' + 'to JavaScript.';

console.log(greetMessage1);
 
console.log('// ------------------------------');

const firstName = 'Dinanath';
const lastName = 'Jayaswal'
const course = 'JavaScript'

const fullName = `Hey ${firstName} ${lastName} Welcome to ${course}.`

console.log('// ------------------------------');

//ES6 Template Literals (Template Strings) approach
let greetMessage2 = `Hello ${firstName}, How are you?`;

console.log(greetMessage2);

//ex:-

let obj ={
    item :"pen",
    price: 10,
};
console.log("the cost of", obj.item, "is", obj.price, "rupees");
// the above process is too complicated , we cn easily write this code by using template literal string 

let output = `the cost of ${obj.item} is ${obj.price} rupees `;
console.log(output);

```

Section 07. Array
==================

## What is an Array?
- An Array is a special type of variable/object which consists of / stores multiple values.
- Arrays are complex variables that allow us to store more than one value or a group of values under a single variable name.
- Arrays are defined with square brackets [ ] and with new keyword.
- Array items are normally separated with commas,
- Arrays are zero-indexed i.e. the first element of an array is at index/position 0.
- An array is ordered collection, where we have a 0th, 1st, a 2nd, and so on elements.
-Each value (an element) in an array has a numeric position, known as its index, starts from 0, so that the first array element position/index is arr[0] not arr[1].

#### Different ways to create/define an Array :-
There are 3 main ways to construct an array:

1. By array literal
2. By creating an instance of Array directly (using the new keyword).
3. By using an Array constructor (using the new keyword).

## Create Array by array literal 
- The simplest way to create an array in JavaScript is enclosing a comma-separated list of values in square brackets [ ].
- var myArray = [element0, element1, ..., elementN];

## Array-method
```javascript

// Array methods in JS 


//Push() : add to end
let foodItems = ["patato", "apple" , "litchi", "tamato"];
foodItems.push("chips", "burger", "paneer");
console.log(foodItems);

//Pop() : delete from end & return 
foodItems.pop();
console.log(foodItems);


//toString() : convert array to string
console.log(foodItems.toString());


//Concat() : joins multiple arrays & returns result 
let marvel_heros = ["thor", "spiderman", "ironman" ];
let dc_heros = ["superman", "batman"];

 let heros = marvel_heros.concat(dc_heros);
 console.log(heros);


 //unshift() : add to start 

marvel_heros.unshift("antman");


 //shift() : delete from start and return 
marvel_heros.shift();


// Slice() : returns a piece of the array
let marvel =["thor","spiderman", "ironman", "antman" ,"Dr.strange"];
console.log(marvel);
console.log(marvel.slice(1,3));


// Splice() : change original array (add,remove,replace)
// splice( startidx, delCount,newEl1..)

let arr = [1,2,3,4,5,6,7];

arr.splice(2,2,101,102);

```
### Practice Question :-
Q. Create an array to store companies -> "Blooming" , "microsoft" , "uber","goggle", "IBM", "Netflix" .
a . Remove the first comapnies from the array .
b. Remove uber and add ola in this palce .
c. Add Amazon at the end .

```javascript

let companies = ["Blooming" , "microsoft" , "uber","goggle", "IBM", "Netflix"] ;
companies.shift();
companies.splice(2,1,"ola");
companies.push("Amazon");

```
Section 07. function
=====================

## What is function ?
- Block of code that performs a specific task , can be invoked (caalled) whenever needed.
- A function is basically a group of statements that perform specific tasks/operations.
- Functions provide a way to create reusable code packages which are more portable and easier to debug.
- Functions allow a programmer to divide a big program into a number of/several small and manageable functions.
- It helps programmers in writing modular codes.
- The function is a kind of reusable tool where we can write code/functionality to reuse whenever we want (Function allow the code to be called many times without repetition).
- Wrapping up / making smaller chunks of statements / reusable codes together for readability or separation of concern/proper organization is functions – (Grouping of a repetitive task).
- Functions (logical block of code) are one of the most important control structure in any programming language.
- In other languages, it might be called MODULES, SUBROUTINES(SUB-ROUTINES).
- There are two steps to utilize function:
 a. create/define a function with function keyword
 b. call/invoke a function

 ## Here are some advantages of using functions:
- Code reusability - call a function several times.
- Less coding - makes our program compact, no need to write lines of code each time.
- Easier to maintain - changes are done only at one location.
- Easier to eliminate the errors - fixing errors becomes much easier.

```javascript

function myFunction() {
    console.log("Welcome to apna college !");
    console.log("We are learning JS ");
}

myFunction();

```

## Function Naming
Function denotes an action/task. The function name should be brief, as accurate as possible and describe what the function does, like a verb.

Usually, Function name starts with:

- "getSomething" – returns value,
- "createSomething" – create something,
- "calcSomething" – calculate something,
- "checkSomething" – check something and return a boolean, etc.

#### Examples of function names:

- getSum();
- createFields();
- calcAge();
- checkUserType();

## Arrow function :-
Compact way of writing a function .

```javascript

//const functionName = (param1,param2..) => {
// do something
// } 

const sum = (a,b) => {
  return a+b;
};
  //eg02 :- 
  const arrowMul = (a,b) => {
  console.log(a*b);
  };

 // print hello by arrow function 
 const printHello =() => {
  console.log("hello");
 };

```

### Practice Question :-
Q. Create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in the string.


```javascript
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

```

Q. Create a arrow funtion to perfrom the same task .


```javascript
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

```

## forEach loop in Array 

- arr.forEach( callBackFunction )
- CallbackFunction : Here, it is a function to execute for each element in the array.
--- *A callback is a function passed as an argument to another function.

```javascript
//forEach Loop in Arrays :-
 let arr = [1,2,3,4,5];

 arr.forEach(function printVal(val) {
     console.log(val);
     }
);

//but we do this in arrow function 

let arr = [1,2,3,4,5];

arr.forEach((val)=> {
console.log(val);
}
);

```

### Practice Question :-
Q.For a given array of numbers , Print the square of each value using the for each loop . 

```javascript
let num =[2,3,4,5,6];

num.forEach((num)=>{
    console.log(num*num);
});

```

## Some More Array Methods :- 

## 01. forEach loop in Arrays

Syntax is :-

```javascript
// arr.foreach(callBack Function)

```
 #### callBack function :- Here , it is a function to execute forr each element in the array .
 - A call-back function is a function passed as an argument to another function .

 ```javascript
arr.forEach((val)=>{
  console.log(val);
});

```
### Practice Question :-
 Q.For a given array of numbers , Print the square of each value using the for each loop. 

 ```javascript
let num =[2,3,4,5,6];

num.forEach((num)=>{
    console.log(num*num);
});

```

## Some More Array Methods 

## Map 
- Creates a new array with the results of some operation. The value its callback returns are used to from new array.

// arr.map( callbackFnx( value, index, array ) )

```javascript

let newArr = arr.map( ( val ) => {
return val * 2;
})

```
## filter 
- Creates a new array of elements that give true for a condition/filter.
Eg: all even elements.

```javascript
et newArr = arr.filter( ( ( val ) => {
return val % 2 === 0;
})

```

## Reduce 
- Performs some operations & reduces the array to a single value. It returns that single value .

```javascript
let arr1 = [1,2,3,4];

 const output = arr1.reduce((res, curr)=>{
    return res + curr;
}
);
console.log(output); // 10
```

### Practice Question :-
 Q.We are given array of marks of students . filter out of the marks of student that scored 90+.


```javascript
let array1 = [87,93,64,99,86];
let highArray1 = array1.filter((val)=> {
    return val > 90;
}
);
console.log(highArray1);

```
Q. Take a number n as inpur from the user. Create an array of numbers from 1 to n .
- use the reduce method to calculate sum of all numbers in the array.
- use the reduce method to calculate product of all numbers in the array .


```javascript
let n = prompt("enter a number:");
let arry = [];
for (let i =1; i<=n; i++) {
    arry[i-1]=i;
}
console.log(arry);

const sum = arry.reduce((prev, cur)=>{
    return prev + cur;
});

console.log("sum=", sum);

const product = arry.reduce((prev, cur)=>{
    return prev * cur;
});

console.log("product=", product);

```
Section 09. DOM (Document Object Model)
=======================================

## What is DOM?

### What is the Document Object Model?

- DOM represents the whole HTML document, DOM is a structure of HTML web page where all tags are defined in a structured/structural way.
- The Document Object Model (DOM) is the model that describes how all elements in an HTML page (like input fields, images, paragraphs, headings, etc.), are related to the topmost structure: the document itself.
- DOM defines the logical structure of the documents and how they can be accessed and manipulated.
- DOM is a W3C (World Wide Web Consortium) standard which defines a standard for accessing documents like programmers can build documents, navigate their structure, and add, modify, or delete elements and content.
- In DOM world always think in form/terms of Nodes (elements, its attributes, text, etc).
- Structural representation of HTML document (Tree of nodes/elements/tags).


### Javascript in the browser -
  Javascript was initially created to make web pages alive. Javascript can be writter right in a web pages HTML to make it interactive.

     The browser has an embeded engines called the Javascript engine or the javascript runtime.

## Starter code 

- <style> tag connects HTML with CSS.
- <script> tag connects HTML with JS.

### Console object methods-
 The console object has several methods , log being one of them , Some of them are as follows .

- assect() - used to assect a condition. 
- clear() - cleans the console.
- log() - outputs a message to the console.
- table() - Display a tabular data.
- error() - used for errors.
- info() - used for special information.

  
### Interaction : alert , prompt 

- alert: used to invoke a moini winddow with a msg 

// alert ("hello")

- prompt: used to take user input as string 

// imp= prompt("hi", "no")

#### What is DOM ?
 when a web page is loaded , the browsser creates a document Object Model (DOM) of the page .


 #### Window object, BOM & DOM -

##### Window object-
 The window object represents an open window in a browser . It is broeswer's object(not javascript's) & is automatically created by browser.

 ###### DOM-
 DOM represents the page content as HTML .

 ###### BOM(Browser Object Model)-
 The Browser Object Model (BOM) represents additional objects provided by the browser for working with everything except the document.



Section 10. DOM Manipulation 
===============================

```javascript
(1) Selecting with id
 
 // document.getElementById("myId") 
 // "#" -used in css
 let button = document.getElementById("myId"); //h1
console.dir(button);

(2) Selecting with class
// document.getElementByClassName("myClass")
// "." -used in css
let headers =document.getElementsByClassName("myClass");
console.dir(headers);
console.log(headers);

(3) Selecting with tag
//document.getElementsByTagName("p")

let parahs = document.getElementsByTagName("p");
console.dir(parahs);


# Query Selector :-
//document.querySelector("myId/ myClass / tag") 
//returns elements
let firstEl = document.querySelector("p"); // 1st elements 
console.dir(firstEl);


//document.querySelectorAll("myId/ myClass / tag") 
//returns a Nodelist

let allEl = document.querySelector("p"); // all elements 
console.dir(allEl);

(4) Attributes 

    (i)getAttribute(attr) 
//to get the attributes value 
let div = document.querySelector("div");
console.log(div);
let id = div.getAttribute("id");
console.log(id);
let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

    (ii)setAttribute(attr,value)
    // to set the attributes

let para = document.querySelector("p");
console.log(para.setAttribute("class","newClass"));


(5) Style
//node.style
let div = document.querySelector("div");

div.style.backgroundColor = "green";
div.style.backgroundColor = "purple";
div.style.visibility = "hidden";

(6) Insert Elemnts 
// let el = document.createElement("div") 
let newBtn = document.createElement("button");
newBtn.innerText = "click me!"
console.log(newBtn);

    (i)node.append(el)
//adds at the end of nodee(inside)

let div = document.querySelector("div");
div.append(newBtn);


    (ii)node.prepend(el)
//adds at the Start of nodee(inside)

let div = document.querySelector("div");
div.prepend(newBtn);


    (iii)node.before(el)
//adds before the node(outside)
let div = document.querySelector("div");
div.before(newBtn);


   (iv)node.after(el)
//adds after the node (outside)
let p = document.querySelector("p");
p.after(newBtn);



(7) Delete Elemnts 
//node.remove()
//remove the nodes 
let para = document.querySelector("p");
para.remove();


```

### Properties :-
- tagName : returns tag for element nodes.
- innerText : returns the text conetent of the elements and all its children.
- innerHTML : returns the plain tect or HTML contents in the element.
- textContent : returns textual content even for hidden elements. 

Section 11. Events 
===================

- Events are happening/triggering all over, Event lets the developer know something has occurred/happened.
- Events occur when the page loads (Onload), when the user interacts with the web page (clicked a link or button/hover) (onlick), pressed key, moved the mouse pointer, mouse-clicked/hover (onmouseover), entered text into an input box or textarea (onchange, onblur, onfocus), submits a form (submit), page unloads (unload).
- When an event occurs, use a JavaScript event handler (or an event listener) to detect them and perform a specific task - Event handlers name always begin with the word "on", like onclick, onload, onblur, and so on.
- To react to an event you listen for it and supply a callback function or event handler which will be called by the browser when the event occurs.
   
### Different Event category
In general, the events can be categorized into four main groups:

1.  Mouse events
2.  Keyboard events
3. Form events
4. Document/Window events


#### 01. Mouse events :-
A mouse event is triggered when the user clicks some element, move the mouse pointer over an element, etc. Find here some of the important mouse events and their event handler:

- click (onclick event handler)
   - Occurs When the mouse clicks on an element, links, buttons etc. on a web page.
- contextmenu (oncontextmenu event handler)
   - Occurs when a user clicks the right mouse button on an element to open a context menu.
- mouseover / mouseout (onmouseover & onmouseout event handler)
   - Occurs when the mouse pointer/cursor comes over / leaves (goes outside of) an element.
- mousedown / mouseup (onclick/onmousedown & onmouseup)
   - Occurs when the mouse button is pressed/released over an element.
- mousemove (onmousemove event handler)
   - Occurs when the mouse pointer/cursor is moved.




#### 02. Keyboard events :-
A keyboard event is fired up when the user presses or release a key on the keyboard. Here're some of the important keyboard events and their event handler:

- keydown / keyup (onkeydown & onkeyup event handler)
  - Occurs when the user presses down a key and then releases the button/a key on the keyboard.
- keypress (onkeypress event handler)
  - Occurs when the user presses down a key on the keyboard that has a character value associated with it.
  - Keys like Ctrl, Shift, Alt, Esc, Arrow keys, etc. will not generate a keypress event, but will generate a keydown and keyup event.


#### 03. Form events :-
A form event is triggered when a form control/form fields (text fields/radio buttons/checkbox) receives or loses focus or when the user modifies a form control value by typing text in a text input, select an option in a dropdown/select box, etc. Let us look into some of the most important form events and their event handler:

- focus (onfocus event handler)
  - Occurs when the user focuses on an element on a web page, e.g. on an input text field.
- blur (onblur event handler)
  - Occurs when the user takes the focus away from a form element or a window.
- change (onchange event handler)
  - Occurs when the user changes the value of a form element/fields.
- submit (onsubmit event handler)
  - Occurs only when the user submits a form on a web page.


  #### 04. Document/Window events :-
  Events are happening/triggering all over. Events do trigger even when the page has loaded/unloaded or the user resizes the browser window. Mentioned here some of the most important document/window events and their event handler:

- DOMContentLoaded (DOMContentLoaded event handler)
  - Occurs when the HTML is loaded and processed, DOM is fully built.
- load (onload event handler)
  - Occurs when web page has finished loading in the web browser.
- unload (onunload event handler)
  - Occurs when a user leaves the current web page.
- resize (onresize event handler)
 - Occurs when a user resizes the browser window, even when browser window minimized or maximized.


 ### Different ways to write the event handler
  1. HTML Attribute
  2. DOM element properties (anonymous function)
  3. Registering event listeners (Professional Method (add and remove listeners))



  ### Using JS we make a small project named -"TIC-TAC-TOE" :-
   [🌐 TIC-TAC-TOE](https://dreamy-halva-2e5b82.netlify.app/)

  ### Using JS we make a small project named -"Rock-paper-scissor game" :-
 [🌐 ROCK-PAPER-SCISSOR](https://thriving-palmier-4dfd2b.netlify.app/)


Section 12. Classes
====================

### Prototypes in JS -
A Javascript object is an entity having state and behavior (propoties & method).
   - JS objects have a special property called prototype.
   - we can set prototyping using __ proto __ .

### Classes in JS -
 Class is a program-code template for creating objects .
 Those objects will have some state (variable)  & some behaviour (function) inside it .


```javascript
class Myclass {
constructor() {..}
myMethod() {..}
}

```

### Constructor -
 Constructor() method is :
-  automatically invoked by new..
- initialize object.

```javascript
class MyClass{
constructor () {....}
myMethod(){...}
}

```

### Inheritance in JS -
 Inheritance is passing down properties & methods from parent class to child class.
```javascript
class Parent {
 }
 class Child extends Parent {
 }

```
 
- Note:-If child & parent have same method , child's method will be used [method overloading] .


 
