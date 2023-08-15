// A function that takes a function as an argument
function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function math(x, y, operator) {
    return operator(x, y);
}

math(5, 2, add); // 7
math(5, 2, subtract); // 3

//-----------------------------------------------------------------------

function sayHi(message) {
    console.log(`Hi: ${message}`);
}

function funWrapper(callback) {
    callback("called by wrapper");
}

funWrapper(sayHi); // Hi: called by wrapper
funWrapper(m => console.log(m)); // called by wrapper


//-----------------------------------------------------------------------

function funCreator(verb) {
    return function (name) {
        console.log(`${verb}: ${name}`)
    }
}

const fun = funCreator("Hello");
fun("Javascript"); // Hello: Javascript