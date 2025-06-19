//String Method in JS :-
//These are built-in function to manipulate a string 


//str.toUpperCase()

let str = "rashmiRanjan";
str =str.toUpperCase();
console.log(str);


//str.toUpperCase()
//as same as upper case 


//str.trim()
// its removes whitespaces from starting and ending .

let ptr = "    Rashmi ranjan Shaw   ";
console.log(ptr.trim());


//str.slice(start,end?)
//return part of string 

let ntr = "0123456";
console.log(ntr.slice(1,3));


//str1.concat(str2)
//joins str2 with str1

let rtr1 = " Rashmi";
let rtr2 = "ranjan";
console.log(rtr1.concat(rtr2));


//str.replace(seacrVal,newval)

let atr = "sonam";
console.log(atr.replace("s", "p"));


//str.charAt(idx)

let btr="IluvJS";
console.log(btr.charAt(2));




let obj ={
    item :"pen",
    price: 10,
};
console.log("the cost of", obj.item, "is", obj.price, "rupees");
// the above process is too complicated , we cn easily write this code by using template literal string 

let output = `the cost of ${obj.item} is ${obj.price} rupees `;
console.log(output);