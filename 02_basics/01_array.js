
const myarr = [0,1,2,3,4,5]
const myheros = ["shaktiman", "nagraj"]

const myarr3 = new Array(1,2,3,4)
console.log(myarr3[3]);

// array methods

//myarr.push(6)
//myarr.push(7) // add element at the last position
//myarr.pop() // remove last element

//myarr.unshift(9)
//myarr.shift()

//console.log(myarr.includes(9));
//console.log(myarr.indexOf(3));

//const newArr = myarr.join()

//console.log(myarr);
//console.log(newArr);

// **slice and splice
console.log("A", myarr);
const myn1 = myarr.slice(2,4)
console.log(myn1);

console.log("B", myarr);
const myn2 = myarr.splice(1,3)
console.log("C",myarr);
console.log(myn2);
