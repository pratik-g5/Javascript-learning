/*scope*/

var a = 10;
function b(){
    function c(){
    console.log(a);
    }
    console.log(a);
    c();
    /* defining a variable inside function to access it outside the function */
    var d = 100;
}


b();

/* console.log(d); */          /* -> ReferenceError: d is not defined */  


/* Notes: 

   Scope tells where can we access specific var or a function

    lex. env. is created wherever the execution context (memory and code) is created.
   - Lexical environment is the local memory along with the lex. env. of it's parent 
   - lex. is the herarchy
   - Ex: 1. function c (ln.5) is lexically sitting inside the function b
         2. function a is lexically inside the global scope

    
    When the function c() is called it looks for var a in its own function first.
    if not then it further goes to it's lexical parent i.e., function b but couldn't find 
    hence it goes to the lexical parent of function b i.e., the global env.
    All of this is called a 'Scope Chain'...

 */
