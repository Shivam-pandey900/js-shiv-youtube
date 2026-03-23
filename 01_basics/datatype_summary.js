// primitive

// 7 types : number, string, null, undefined, boolean, symbol, bigint

const num = 100
const numfloat = 100.4

let temperature = null
let final

const isLoggedIn = false
const bigNumber = 455255252532252333664464n

// console.log(typeof bigNumber)
console.log(typeof temperature)
console.log(typeof final)

const sym = Symbol("123")
const anothersym = Symbol("123")

// console.log(sym === anothersym);
// console.log(typeof anothersym);

// Return type of primitive datatypes:
// Number : number
// String : string
// null : object
// undefined : undefined
// boolean : boolean
// Symbol : symbol
// bigInt : bigint



// *********Reference (Non primitive)*********

// 3 types : Arrays, Object, Functions

const numArray = [1, 2, 5, 4]

let myobj = {
    nam : "Shivam",
    roll : 45,
    sec : 'c',
}

// anything which is under curly braces where elements defined like key value pair , it is an object.

console.log(typeof myobj);
console.log(typeof numArray);
console.log( myobj);

const myfunction = function() {
    console.log('hello world');
}

console.log(typeof myfunction);
console.log(myfunction);

// return types of non primitive datatypes:
// Arrays : object
// Object : object
// function : function


// https://262.ecma-international.org/5.1/#sec-11.4.3

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Types of Memory: 
// 2 types : Stack (primitive)  and  Heap (non- primitive)

let userone = "shiv@google.com"

let usertwo = userone   // a copy ot the userone is provided to usertwo

usertwo = "shyam@google.com"

console.log(userone);
console.log(usertwo);


let user1 = {
    name : "shivam",
    roll : 58
}

let user2 = user1  // same reference is assigned to user2

user2.name = "shyma"

console.log(user1.name);
console.log(user2.name);

