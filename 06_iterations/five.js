const coding = ["js", "ruby", "java", "pyhton", "cpp"]

//coding.forEach(function (val){
//    console.log(val);
//})

//coding.forEach( (item) => { // item is a any function name
//    console.log(item);
//})

//function printMe(item){
//    console.log(item);
//}
//coding.forEach(printMe)

//coding.forEach( (item, index, arr)=> {
//    console.log(item, index, arr);
//})

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})