// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,5,6]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
   // console.log(`each char is ${greet}`);
}

// Maps known for unique values

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

//console.log(map);

//for (const key of map) {
  //  console.log(key); 
//}
for (const [key, value] of map) {
    //console.log(key, ':-', value); 
}

const myObject = {
  'game1': 'NFS',
  'game2': 'spiderman'
}
// for (const [key, value] of myObject) {
// console.log(key, ':-', value);
// }
