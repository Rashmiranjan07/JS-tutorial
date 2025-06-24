// Q. Create an array to store companies -> "Blooming" , "microsoft" , "uber","goggle", "IBM", "Netflix" .
// a . Remove the first comapnies from the array .
// b. Remove uber and add ola in this palce ,
// c. Add Amazon at the end .



let companies = ["Blooming" , "microsoft" , "uber","goggle", "IBM", "Netflix"] ;
companies.shift();
companies.splice(2,1,"ola");
companies.push("Amazon");

