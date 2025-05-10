// Data Types 
// -> 1) Primitive 2) Reference (Non Primitive)

//// 1) PRIMITIVE ////
// 7 Types: String, Number, null, Undefined ,BigInt ,Boolean ,Symbol.

const name ="Abdul"
const mob = "7098537653"
const outTemp = null
const isLogged = false

console.log(name,mob,outTemp)


let userEmail;// or-> const userEmail = undefined
// Note : const userEmail; -> Error, why? bcs Must initialize at declaration and cannot be reassined.
const bigNumber = 7098537653n //-> BigInt. at the end of number type n for converting to BigInt

// Symbol
const id = Symbol(123)
const anotherId = Symbol(123)
console.log(id === anotherId)

console.log(typeof bigNumber);  // type bigint
console.log(typeof id);        // type is symbol


// 2) Reference ( Non primitive )
// -> Array, Objects, Functions

const students =["ahmad","hamid", "haroon"]; //Array

let studentSub ={                           // Object
    nameOfSub : "maths",
    passScore : "70",
    class : "12",
}

const myFunction = function (){             // Function
    console.log("Hello world");
    
}

console.log(typeof students) // type of Array is-> object
console.log(typeof studentSub)  // type of objec is -> object
console.log(typeof myFunction) // type of function is -> function






