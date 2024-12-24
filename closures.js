// Closure - A function bind together with it's lexical scope. i.e., all of it's values are maintained 
//            thru out the code....
function x(){
    var a = 10;
    function y(){
        console.log(a);
    }
    y();
}
x();


// functions can be literally used anywhere in js, in a variable, return data, argument to another function

function x(){
    var a = 10;
    function y(){
        console.log(a);
    }
     var a = 103;  //->> The value of a returend is 100 since the reference now moves to 100;
    return y;
}
var z = x();
console.log(z);

z();

// if we call z anywhere later in the code, it still prints the value of 'a' i.e., the closure.


function d(){
    var q = 10;
    function e(){
        var w = 11;
        function r(){
            console.log(q, w);   // r() is bind to e() and d() as a closure 
        }                         // hence r() can access/retain both the values of q and w present outside it's  
        r();
    }
    e();
}
d();