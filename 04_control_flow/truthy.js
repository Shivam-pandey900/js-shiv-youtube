const arr = []

if(arr)
    console.log('empty array is true');
else
    console.log('empty array is false');
    
// falsy values : 

// false , 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values:

// "0", 'false', " ", [], {}, function(){}

// if(arr.length === 0)
//         // console.log('array is empty');
        
// const obj = {}

// if(Object.keys(obj).length == 0)
//     // console.log('object has no keys');
// else
//     // console.log('object has some keys');
    

// Nullish Coalescing Operator (??) : defined specifically on null and undefined only.

let val;
val = 5 ?? 10;
val = null ?? 10
val = undefined ?? 15 ?? 10

console.log(val);

// ternary operator:

let count = 2 == 3 ? 0 : 1;
console.log(count);
