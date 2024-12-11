function x(){
    for(var i = 4; i<=5; i++){
        setTimeout(function (){
            console.log(i);
        }, 1000);
    }

}
x();




/* why does it print 6 everytime ? 
    1. You tell the computer: “Hey, every second, show me what’s inside the box!”
    2. You count numbers from 1 to 5, putting them one by one into the same box. (This happens very quickly.)
    3. By the time 1 second passes and the computer finally checks the box, 
        you’ve already finished counting, and the box now shows 6 (because the loop went beyond 5).
    4. So every time the computer looks inside the box (after 1 second), it sees 6, 
        because that’s the number left inside.


    
*/

// IMP: 'let' creates a separate box for each number

function x(){
    for(let i = 1; i<=5; i++){
        setTimeout(function (){
            console.log(i);
        }, 1000);
    }

}
x();

// We can create a seperate function for setTimeout if we use 'var' instead of 'let'

function close(){
    for(let i = 1; i<=5; i++){
        function n(x) {                 // function creates a closure and stores the values seperately each time.
            setTimeout(function (){
            console.log(x);
            },i* 1000);
        }
        n(i);
    }
    
}
close();