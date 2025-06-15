//qs 01. Get user to input a number using prompt("Enter a number").Check if thenumber is a multiple of 5 or not.

let num = prompt("enter a number :");

if (num % 5 === 0) {
    console.log(num, "is a multiple of 5 ");
} else {
    console.log(num, "is not a multiple of 5");
}







//qs 02 .Write a codewhich cangivegrades to students according to their scores:
// 90-100, A
//70-89 , B
// 60-69 , C
// 50-59, D
// 0-49 , F 



let score = prompt("enter a score (0-100) :");
let grades;
if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 70 && score <= 89) {
    grade = "B";
} else if (score >= 60 && score <= 69) {
    grade = "c";
} else if (score >= 50 && score <= 59) {
    grade = "d";
} else if (score >= 0 && score <= 49) {
    grade = "F";
}


console.log(" accroding to  your score , your grade was : ", grade);