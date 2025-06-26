//forEach Loop in Arrays :-
//  let arr = [1,2,3,4,5];

//  arr.forEach(function printVal(val) {
//      console.log(val);
//      }
// );


//but we do this in arrow function 

let arr = [1,2,3,4,5];

arr.forEach((val)=> {
console.log(val);
}
);


// practice Question :-

//Q01 For a given array of numbers , Print the square of each value using the for each loop . 

let num =[2,3,4,5,6];

num.forEach((num)=>{
    console.log(num*num);
});


//Some more Array methods 

//Map 
// Arr.map(callbackFnx(value,index,array))

// let nums = [67,52,39];

// nums.map((val) => {
//     console.log(val);
// });

let nums = [67,52,39];

 let newArr = nums.map((val) => {
    return val* val;
});
console.log(newArr);


//filter 

let array = [1,2,3,4,5,6,7];


let evenArray = array.filter((val)=> {
    return val % 2=== 0;
}
);
console.log(evenArray);

//reduce 

let arr1 = [1,2,3,4];

 const output = arr1.reduce((res, curr)=>{
    return res + curr;
}
);
console.log(output); // 10

// practice Question

//We are given array of marks of students . filter out of the marks of student that scored 90+

let array1 = [87,93,64,99,86];
let highArray1 = array1.filter((val)=> {
    return val > 90;
}
);
console.log(highArray1);