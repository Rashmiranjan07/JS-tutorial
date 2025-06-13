// Arithmetioc operators 
let a = 5;
let b = 2;


console.log("a =", a, " & b=", b);
console.log("a+b =", a + b);
console.log("a-b =", a - b);
console.log("a*b =", a * b);
console.log("a/b=", a / b);

//Modulus operator (%)
console.log("a%b=", a % b);


//Exponential operators (power)
//sign = **
console.log("a**b=", a ** b); //5^2


//Increment operator (++)
//a++ - a= a + 1
console.log("a =", a, " & b=", b);
a++;
console.log("a=", a);



//Increment operator (--)
//a-- - a= a - 1
console.log("a =", a, " & b=", b);
a--;
console.log("a=", a);


console.log("a++=", a++);
console.log("a=", a);


console.log("--a=", --a);
console.log("a=", a);

//Asignemet operators 
// = , += , -= , *= , %= , **= 
//a+=1  a=a+1
//a+=4  a=a+4

let A = 5;
let B = 2;
A += 4;
console.log("A=", A);

A -= 4;
console.log("A=", A);

A *= 4;
console.log("A=", A);

A /= 4;
console.log("A=", A);

A %= 4;
console.log("A=", A);


//Comparison operators 
//equal to (==)

let x = 5;
let y = 2;
console.log("5==2", x == y);

//not equal to (!=)
console.log("5==2", x != y);

//equal to & type (===)
//(check the value and data type )
let X = 5; // number
let Y = "2"; // string 
console.log("X===Y", X === Y);

//> , >= , < , <=
console.log("x>y", x > y);
console.log("x>=y", x >= y);
console.log("x<y", x < y);
console.log("x<=y", x <= y);

//logical operators to be started ---------
//logical AND (&&)
//both condition true then finale answer is true 
let c = 6;
let d = 5;

let cond1 = c > d;
let cond2 = c === 6;
console.log("cond1 && cond2 = ", cond1 && cond2); //true 

//logical OR (||)
//if one condition is true then true .

console.log("cond1 || cond2=", c < d || c === 6);

//logical NOT (!)
// the expression is true thats converts to false and vice-versa .
console.log("!(6<5) = ", (c < d));


// ternary operators
//it works with three operands
//condition ? true output: false output 
// eg:-(a ? b : c)

//syntax is: [age> 18 ? "adult" :" not adult " ;]

let age = 25;
let result = age > 18 ? "adult" : " not adult ";
console.log(result); //or

//let result = age > 18 ? console.log("adult") : (" not adult ");