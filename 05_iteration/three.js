// for of  loop 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5, 6]

for (const element of arr) {
    // console.log(element);
}

// String: 

const greeting = "hello world"

for (const greet of greeting) {
    // console.log(greet);
}

// Maps : map and object looks same but differ in map stores only unique key values and entries stored in the order they
// were inserted. 

const map = new Map()

map.set('US', 'America')
map.set('IN', 'India')
map.set('FR', 'France')
map.set('IN', 'India')    

// console.log(map);

for (const element of map) {
    // console.log(element);  
}

for (const [key,value] of map) {
    // console.log(key+ ":- "+ value);
}

// Object:

const obj = {
    objname: 'used for of loop',
    filename: 'three.js'
}

for (const element of obj) {
    // console.log(element);
}

// o/p: TypeError: obj is not iterable

for (const [key,value] of obj) {
    console.log(key+ ":- "+ value);
}

// o/p: TypeError: obj is not iterable