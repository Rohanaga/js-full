function saymyname(){
    console.log("R");
    console.log("o");
    console.log("h");
    console.log("a");
    console.log("n");
}
//saymyname()

//function addtwonumbers(number1, number2){

  //  console.log(number1 + number2);

//}

function addtwonumbers(number1, number2){

    //let result = number1 + number2
    //return result
    return number1 + number2

}
const result = addtwonumbers(3, 5)

//console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("rohan"));
//console.log(loginUserMessage("rohan"));

function calculateCartPrice( val1,val2, ...num1){
    return num1
}
//console.log(calculateCartPrice(200,300,400));

const user = {
    username: "rohan",
    price: "999"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
username: "sam",
price: "100"
})
const mynewarray = [200,300,4000,100]
function returnSecondvalue(getArray){
   return getArray[1]
}

console.log(returnSecondvalue(mynewarray));
console.log(returnSecondvalue([200,300,4000,100]));