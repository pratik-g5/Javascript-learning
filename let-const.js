

/* let/const are stored in a sperate memory and not in global 
    - they cannot be accessed before we put in some value in them.

    temporal dead zone - it is the time since when the let/const variable was hoisted till 
    it's initialization.

    no duplicate declaration is allowed in let/const
    a const variable cannot be declared and assigned seperately. (syntax error)
    the value of const variable cannot be changed again anywhere in the entire code. ()

*/


/* console.log(a);       ReferenceError: Cannot access 'a' before initialization ---- temporal dead zone*/ 
let a = 10;
console.log(a);

/* const b;              SyntaxError: Missing initializer in const declaration */
const b = 1000;
console.log(b);