// question can we change the value of pi in javascript

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

// const descriptors = Object.getOwnPropertyDescriptor(Math,'PI')

Object.defineProperty(Math,'PI',{
    writable: true,
    enumerable: true,
});

const descriptors = Object.getOwnPropertyDescriptor(Math,'PI')



console.log(descriptors)   // o/p: TypeError: Cannot redefine property: PI

// o/p: {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// we can design our own object and define if changes are allowed or not.

const obj = {
    username: 'Shivam',
    email: 'shiv@tcs.com',
    pwd: '567',

    // checkPwd: function(){
        // console.log(`Password is: ${this.pwd}`)
    // }
}

// const properties = Object.getOwnPropertyDescriptor(obj,'username')

// console.log(properties)

// we can define their properties values

Object.defineProperty(obj,'username',{
    writable: false,
    enumerable: false,
});

const properties = Object.getOwnPropertyDescriptor(obj,'username')
// console.log(properties)

obj.username = 'Chai_aur_code'

// console.log(obj)    // o/p: { email: 'shiv@tcs.com', pwd: '567', checkPwd: [Function: checkPwd] }
                    // username is not coming because i have defined a property 
                    // enumerable: false.

// console.log(obj.username)   // o/p: Shivam

// for (const [key,value] of Object.entries(obj)) {
//     console.log(`${key}: ${value}`)
// }

// o/p:
// email: shiv@tcs.com
// pwd: 567
// checkPwd: function(){
//         console.log(`Password is: ${this.pwd}`)
//     }

// we do not want that function to be printed like that

for (const [key,value] of Object.entries(obj)) {
    // if(typeof value !== 'function')
    // console.log(`${key}: ${value}`)
}
