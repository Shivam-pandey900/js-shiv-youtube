// for in loop

// object

const coding = {
    cpp: 'c++',
    js: 'javascript',
    py: 'python',
    java: 'java',
}

// for (const key in coding) {
//     console.log(key);
// }

// for (const key in coding) {
//     console.log(key+"-> "+ coding.key);     // this gives undefinded error, use []
// }

for (const key in coding) {
    // console.log(key+"-> "+ coding[key]);
}

// Array:

const myprogramming = ['java', 'python', 'javascrip', 'c++']

for (const key in myprogramming) {
    // console.log(key)                   // this will give indexes.
}

for (const key in myprogramming) {
    // console.log(key+"-> "+ myprogramming[key])     
}

// map:

const map = new Map()

map.set('US', 'America')
map.set('IN', 'India')
map.set('FR', 'France')
map.set('IN', 'India') 

for (const key in map) {
    console.log(key);      //  Nothing will be logged
    
}