// Function Statement // Function Declaration
function a(){
    var ca = 10
    console.log(ca)
}
a();


// Function expression - function is passed as a value of a variable
var b = function (){
    console.log("Hello")
}
b();


// Anonymous Function - function without name
// function () {

// }


// Named Function Expression
var ab = function m(){
    console.log("Hello2")
}
ab();
// m();    ReferenceError: m is not defined


// Difference Between Parameters and Arguments
function l(q, w){     // q, w are the parameters of the function
    console.log(q, w);
}
l(2, 0);    // 2, 0 are the arguments passed to the function


// First Class Functions  - first class citizens    -- functions can be passed inside another function
// ability to be used as values or arguments



// Arrow Functions
