const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // BD calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve() 
    }, 1000 )
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()

    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,  reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);
    
})
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "rohan", password: "123"})
        } else {
            reject('Error: Something went wromg')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log (error);
}).finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "mithu don", password: "123"})
        } else {
            reject('Error: Golli pad gay')
        }
    }, 1000)
})

async function consumrPromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
     console.log(error);
    }
}
consumrPromiseFive()

//async functiion getAllUsers(){
 //try {
 ///   const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //  const data = await response.json()
  //  console.log(date);
 //} catch (error) {
  //  console.log("E:", error);
    
// }
    
//}
//getAllusers()

fetch('https://jsonlaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))