let namee = "SitaRam"

let num = Number(namee)

// console.log(num); // NaN - Not a number
// console.log(typeof num) // number

let isbool = Boolean(namee)

// console.log(isbool); // true

let nam = ""
let isvol = Boolean(nam)
// console.log(isvol) // false

let numb = 100
let st = String(numb)
console.log(st); // 100

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

//***************Operations***************/

let val = 10
let negval = -val
// console.log(negval); // -10
// console.log(typeof negval); // number

let st1 = "slo"
let st2 = "w"
let st3 = st1 + st2
console.log(st3);

console.log(1 + "ab")
console.log("ab" + 1 + 1); // ab11

console.log(+true); // 1
console.log(+""); // 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

console.log(num2) // 4

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion