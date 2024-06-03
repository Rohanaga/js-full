// Primitive


// 7 types: String, Number, Boolearn, null, undefined, Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

const bignumber = 54653210354132165321n


// Reference (Non primitive)


// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
name: "hitesh",
age: 22,
}
const myFunction = function() {
console.log("Hello world");
}

console.log(typeof myFunction);

//https://262.ecma-international.org/5.1/#sec-11.4.3



// *************************************************************


// Stack (Primitive)= get copy, Heap(Non-Primitive)= get reference = changes in the original val

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    mail: "user@gmail.com",
    upi: "user@axisbnk"
}

let userTwo = userOne

userTwo.mail = "agarwalrohan447@gmail.com"

console.log(userOne.mail);
console.log(userTwo.mail);