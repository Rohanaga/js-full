//Dates
// new is used to create object instances
let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(typeof myDate);

//let myCreateDate = new Date(2024, 8, 4)
//let myCreateDate = new Date(2024, 8, 4, 7, 5)
//let myCreateDate = new Date("2024-09-04")
let myCreateDate = new Date("04-09-2024")//new instances values

//console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(myCreateDate.getTime());//Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: ""
})

