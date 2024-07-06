// this refers to current context
const user = {
    username: "rohan",
    price: 1000,

    welcomemessage: function () {
       // console.log(`${this.username}, welcome to website`);
       // console.log(this);
    }
}

 user.welcomemessage()
 user.username = "Ram"
 user.welcomemessage()

//console.log(this)

//function chai(){
  //  let username = "rohan"
   // console.log(this.username);
//}

// chai()

//const  chai = function(){
//    let username = "rohan"
  //  console.log(this.username);
//}
//const  chai = function(){
//    let username = "rohan"
//    console.log(this.username);
//}

//chai()

//const addTwo = (num1, num2) => {
//  return num1 + num2
//}

//const addTwo = (num1, num2) => num1 + num2
//const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "rohan"})                                                                                                                           

console.log(addTwo(3,5));

const myArray = [2,3,4,7,8,9]

