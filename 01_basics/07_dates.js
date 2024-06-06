//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//let myCreateDate = new Date(2024, 8, 4)
//let myCreateDate = new Date(2024, 8, 4, 7, 5)
//let myCreateDate = new Date("2024-09-04")
let myCreateDate = new Date("04-09-2024")

console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

