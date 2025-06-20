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