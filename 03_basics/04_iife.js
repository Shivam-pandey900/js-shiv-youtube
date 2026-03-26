// Imediately Invoked Function Expression (IIFE)

// (function chai() {
//     // name iife
//     console.log('db connected');
// }) ()       // in this the function is called at the end by wrapping the function definition with a parentheses.

// next iife

// ( () => {
//     console.log('db connected two');
// }) ()           // TypeError: (intermediate value)(...) is not a function

// error is coming due to ; requirement. 

(function chai() {
    // name iife
    console.log('db connected');
}) ();      // in this the function is called at the end by wrapping the function definition with a parentheses.

// next iife

( () => {
    // unnamed iife
    console.log('db connected two');
}) ()   