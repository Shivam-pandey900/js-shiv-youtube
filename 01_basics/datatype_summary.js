// primitive

// 7 types : number, string, null, undefined, boolean, symbol, bigint

const num = 100
const numfloat = 100.4

let temperature = null
let final

const isLoggedIn = false
const bigNumber = 455255252532252333664464n

// console.log(typeof bigNumber)

const sym = Symbol("123")
const anothersym = Symbol("123")

console.log(sym === anothersym);
console.log(typeof anothersym);

// Reference (Non primitive)

// 3 types : Arrays, Object, Functions

const numArray = [1, 2, 5, 4]

let myobj = {
    nam : "Shivam",
    roll : 45,
    sec : 'c',
}

// anything which is under curly braces where elements defined like key value pair , it is an object.

console.log(typeof myobj);
console.log( myobj);

const myfunction = function() {
    console.log('hello world');
}

console.log(typeof myfunction);
console.log(myfunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3