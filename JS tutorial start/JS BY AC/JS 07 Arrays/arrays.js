// Arrays :-
//Collection of items is known as arrays .

//create array

let hero = ["ironman", "hulk", "thor", "batmaan"];
console.log(hero);
let marks = [96,75,48,83,66];
console.log(marks);


//array indices 
// arr[0],arr[1],arr[2],arr[3].....

let markss = [96,75,48,83,66];
console.log(markss[2]);
//replace the vale -----
console.log(markss[2]=66);




//Looping over an Array--
//Print all elements of an array.

let heros = ["ironman", "hulk", "thor", "batmaan", "spiderman", "shkatiman", "captain america", "flying jatt", "krish", "padman",];


// for loop--

for(let i=0; i<heros.length; i++)  {
    console.log(heros[i]);
}

//for-0f loop --

for(let hero of heros ) {
    console.log(hero);
}

let cities =["delhi", "pune","mumbai", "hyderabad","gurgaon"];
for (let city of cities) {
    console.log(city);
}



//practice question 
// Q. 01 For given array with marks of students ->[85,97,44,37,76,60] find the average marks of the entire class .

let mark = [85,97,44,37,76,60];
let sum = 0;
// sum = mark[0] + mark[1] + mark[2] + mark[3] + mark[4] + mark[5] ;

for (let val of mark) {
    sum = sum + val;
}

let avg = sum/mark.length;
console.log(`avg marks of the class = ${avg}`); //66.5


// Q. 02 For given array with of 5 items->[250,645,300,900,50] ,All items have an offer of 10% OFF on them. Change the array to store final price after applying offer .

let items = [250,645,300,900,50];
for(let i=0; i<items.length; i++) {
    let offer = items[i] / 10;
    items[i] -= offer;
}

console.log(items);
