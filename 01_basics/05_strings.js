const name = "rohan"
const repoCount = 60

//console.log(name + repoCount + " Value");

//console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hite-shhc')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(3));
//console.log(gameName.indexOf('e'));

 const newString = gameName.substring(0,4)
 console.log(newString);

 const anotherString = gameName.slice(-8,4)
 console.log(anotherString);

 const newStringOne = "  hitesh  "
 console.log(newStringOne);
 console.log(newStringOne.trim());

 const url = "https://hitesh.com/hitesh%20yadav"

 console.log(url.replace('%20', '-'));
 console.log(url.includes('hitesh'));
 console.log(gameName.split('-'));