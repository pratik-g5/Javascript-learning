/*  Block is also known as compound statement.
    - combining multiple statements together is called a block -> {}.
    - block is also a lexical scope and follows a lexical scop chain pattern.

    */

if (true) console.log("true")

if (true) 
    var x = 90;
    console.log(x)


// Block scope or what is the scope of a block
// let/const can only be accessed in the specific block itself 
// while var falls into the global scope irrespective of where it is inisialized.

 var a = 100;   // the var a in the block shadows this. known as SHADOWING
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a)
    console.log(b)
    console.log(c)
}  // the block
console.log(a)
// console.log(b)   -> ReferenceError: b is not defined
// console.log(c)   -> ReferenceError: c is not defined


let n = 1;
{
    let n = 2;   // var n shadows the value '1' present outside the block
    console.log(n);
}
console.log(n);  // var n shadows the value '2' from the block again


// we cannot shadow let using var but we can shadow var using let.

//let x = 11         
{
    var x = 22     // SyntaxError: Identifier 'x' has already been declared
}


// but let can be shadowed using var inside a function.

let m = 11         
function ab(){
    var m = 22    
}