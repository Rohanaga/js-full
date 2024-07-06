// immediately invoked function expression (IIFE)

(function chai(){// named iife here is chai
    console.log(`db is connected`);
})();

(() => { //unnamded iife and two function can be executed with the help of semi colon
    console.log(`db is conected2`);
})();
((name) => { // parameter is passed here in this iife
    console.log(`db is conected2 ${name}`);
})('rohan');