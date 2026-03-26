const a = 100
let b = 50
var c = 62  // var variables always have a global scope that's why we do not use it in production level.

if (true) {
const a = 10
let b = 50
// var c = 5000
c = 80
// console.log(`Inner value of a is ${a}`)
}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const name = "shivam"
    function two(){
        const website = "youtube"
        // console.log(name);
    }
    // console.log(website);
    two();
}

one()

//+++++++++++++++++++++++++++++++++++++ Interesting , concept (MininHoisting) ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addOne(5))

function addOne(num){
    return num + 1
}

addTwo(5)    // ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num+2
}

// console.log(addTwo(5));

