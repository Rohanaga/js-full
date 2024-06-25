//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "samay"
tinderUser.isloggedin = false
//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname:"rohan",
            lastname: "agarwal"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const user = [
    { 
        id: 1,
        email: "ra@gmail.com"
    },
    { 
        id: 1,
        email: "ra@gmail.com"
    },
    { 
        id: 1,
        email: "ra@gmail.com"
    }
]
user[1].email
//console.log(tinderUser);
//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLogged'));


//object destructuring in this we use {}

const course = {
    coursename : "js in hindi",
    price: "1000",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const {courseInstructor: instructor} = course // here destructuring is done

console.log(instructor);

//{
//   "name": "rohan",
//    "coursename": "js in hindi",
//    "price": "free"
//}//json api

{
    {},
    {},
    {}
}