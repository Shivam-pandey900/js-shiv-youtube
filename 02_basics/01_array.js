// array

let arr = [0,1,2,3,4,5, "hi"]
// console.log(typeof arr);

let arr2 = new Array("shiv", "sitaRam")
// console.log(arr2);

// Array methods

arr.push(6)
// console.log(arr);

arr.pop()
// console.log(arr);

arr.unshift(2)    // adds element at the beginning of the array, all elements are shifted to the right
// console.log(arr);

arr.shift()    // removes the first element of the array, all elements are shifted to the left
// console.log(arr);

// console.log(arr.includes(8))
// console.log(arr.indexOf(8))
// console.log(arr.lastIndexOf())

let newarr = arr.join('-')
console.log(newarr)
console.log(typeof newarr)  // join method returns a string, so the type is string

// slice and splice

let newarr2 = arr.slice(2,5)   // slice(start, end)  end is exclusive
console.log(newarr2);   // o/p - [2,3,4]

console.log(arr)

let newarr3 = arr.splice(2,5)   // splice(start, deleteCount)  end is exclusive
console.log(newarr3);

console.log(arr);   // o/p - [0,1]  (2, 3, 4, 5, 'hi' are removed from the original array and stored in newarr3)