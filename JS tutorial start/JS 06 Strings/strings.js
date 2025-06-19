//string :- 
//String is a sequence of character used to represent text .

//create string
let str ="apna college";
let str2 ='rash';

//String Length
str.length

//String indicates
// str[0], str[1], str[2]
console.log(str[8]);


//template literals:-
//A way to have embedded expressions in strings

let specialString = `This is a template literal ${1+2+3}`;
console.log(specialString);

//ex:-

let obj ={
    item :"pen",
    price: 10,
};
console.log("the cost of", obj.item, "is", obj.price, "rupees");
// the above process is too complicated , we cn easily write this code by using template literal string 

let output = `the cost of ${obj.item} is ${obj.price} rupees `;
console.log(output);

//string interpulation 
//to create string by doing substitution of placeholder 
//  `string text ${expression} string text`


//escape character 
// "\n" - next line 
console.log("apnna \n college");
//  "\t" - tab space 
console.log("apnna \t college");


// Practice Question 
// Q.01 Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.

 let fullName = prompt("enter your fullname without spaces");

 let userName = "@" + fullName + fullName.length;
console.log(userName);
