
// console.log(2>1);
// console.log(2>=1);
// console.log(2>=1);
// console.log(2!=1);


console.log("2">1); // true.why? bcs string gets converted to number 
console.log("3"<1); // false.why? bcs 3 is not smaller than 1
console.log("3"==1); // false
console.log("3"!=1); // true
console.log("3">=1); // true. ****Note***--> These cases are not allowed and preferable in js coding.




// ===  
  // == and === is different. "3" This isn't converted to a number in === case.
console.log("3"===3);  // not allwed bcs "3" is not a number -> "3" != 3

//////////////////////*********** Null cases****************/////////
console.log(null==1,"null is not equal to 0");
console.log(null>0,"null is not bigger than 0");
console.log(null>=0,"in this case it works differently from above two cases");

//////// ***** Unidefined cases ****** ///////
console.log(undefined>0,"undefined is not bigger than a number");
console.log(undefined>=0,"undefined is not bigger than or equal to a number");
console.log(undefined==0,"undefined is not equal to a number");
















