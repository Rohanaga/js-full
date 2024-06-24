// singleton

// object literals
const mysym = Symbol("key1")

const Jsuser = {
    name: "Rohan",
    "full name": "rohan agarwal",
    [mysym] : "mykey1",
    age: 18,
    location: "agra",
    email: "agarwalrohan492@gmail.com",
    isloggedIn: "True",
    lastloggedInDays: ["Monday", "Saturday"]
}

///console.log(Jsuser.email);
//console.log(Jsuser["email"]);
//console.log(Jsuser["full name"]);
//console.log(Jsuser[mysym]);

Jsuser.email = "ra6378@srmist.edu.in"
//Object.freeze(Jsuser)
Jsuser.email = "agarwalrohan447@gmail.com"
//console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello js user");
} 
Jsuser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`);
} 
console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());