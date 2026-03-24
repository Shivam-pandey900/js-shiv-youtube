const num = 10
// console.log(num);

const num1 = new Number(34)
// console.log(num1);

// console.log(num1.toExponential(2));
// console.log(num1.toFixed(2));
// console.log(num1.toString().length);

const num2 = 1000000000
// console.log(num2.toLocaleString());  // adds commas according to US in large number to improve readability
// console.log(num2.toLocaleString('en-IN'));  // commas as india

// console.log(num2.valueOf());
// console.log(num2);

const numObj = new Number(42);
// console.log(typeof numObj);
// Expected output: "object"

const num4 = numObj.valueOf();
// console.log(num4);
// Expected output: 42

// console.log(typeof num4);
// Expected output: "number"

const num5 = 145.566
// console.log(num5.toPrecision(4));  // 146.6



// ++++++++++++++++++++++++++++++++ Math +++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math.abs(-384));
// console.log(Math.cbrt(64));
// console.log(Math.ceil(4.999));
// console.log(Math.exp(5893));
// console.log(Math.floor(78.8999));
// console.log(Math.round(77.499));
// console.log(Math.max(1,5,6,8,9.9));
// console.log(Math.min(1,5,6,8,9.9));

console.log(Math.pow(2,3));
console.log(Math.random()*10 + 1);

const min = 10
const max = 20

console.log(Math.round(Math.random() * (max - min + 1) + min))
