const arr1 = ['is', 'are', 'was', 'were'];
const arr2 = ['I', 'you', 'he', 'she', 'it', 'we', 'they'];

// arr1.push(arr2)
// console.log(arr1)   // o/p - ['is', 'are', 'was', 'were', ['I', 'you', 'he', 'she', 'it', 'we', 'they']]

// console.log(arr1[4][2])

const arr3 = arr1.concat(arr2)
// console.log(arr3)   // o/p - ['is', 'are', 'was', 'were', ['I', 'you', 'he', 'she', 'it', 'we', 'they'], 'I', 'you', 'he', 'she', 'it', 'we', 'they']

const arr4 = [...arr1, ...arr2, ...arr3]
// console.log(arr4)   // o/p - ['is', 'are', 'was', 'were', 'I', 'you', 'he', 'she', 'it', 'we', 'they', 'is', 'are', 'was', 'were', ['I', 'you', 'he', 'she', 'it', 'we', 'they'], 'I', 'you', 'he', 'she', 'it', 'we', 'they']

const arr5 = [0,1,2,3,[1,2,3],4,5,[1,[3,5,6]],6]

const arr6 = arr5.flat(Infinity)
console.log(arr6)   // o/p - [0, 1, 2, 3, 1, 2, 3, 4, 5, 1, 3, 5, 6, 6]

console.log(Array.isArray("shivam"))
console.log(Array.from("shivam"))   // o/p - ['s', 'h', 'i', 'v', 'a', 'm']  (from method creates an array from a string)
console.log(Array.from({name : 'shivam'}));   // from method creates an empty array if it is unable to create the array.

let sc1 = 10
let sc2 = 20
let sc3 = 30

console.log(Array.of(sc1,sc2,sc3))

// more methods can be found in the documentation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 
// and in console section of a web browser, we can find all the methods of an array by typing Array.prototype and then pressing tab key.