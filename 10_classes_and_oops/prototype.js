const name = 'shivam      '

// i want to get its true length ignoring extra spaces.

// console.log(name.trueLength) // o/p : undefined.

// First understand that : Object is the parent of all string, arrays, functions,etc.

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getPower: function(){
        console.log(`thor power is : ${this.thor}`)
    }
}

// heroPower.getPower()

// now we want to add a new property to all objects 

Object.prototype.shivam = function(){
    console.log('My Name is Shiwam')
}

console.log(heroPower.shivam())
console.log(myHeros.shivam())
console.log(name.shivam())

// in every object this shivam() method is added.

// we can add properties to specific object like if we want to add to array.

Array.prototype.getLengthBy2 = function(){
    console.log(this.length / 2);
}

myHeros.getLengthBy2()

// this will only be applicable to array

// name.getLengthBy2()  // o/p : TypeError: name.getLengthBy2 is not a function

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

// now suppose we want to inherit properties of one object in another.

const Us = {
    id: 2000,
    __proto__: TeachingSupport,
}

console.log(Us.isAvailable)

TeachingSupport.__proto__ = Teacher

console.log(TeachingSupport.makeVideo)

// modern Syntax:

Object.setPrototypeOf(User,Us)
console.log(User.id)


// now our initial task:

String.prototype.trueLength = function(){
    console.log(`True length is: ${this.trim().length}`)
}

name.trueLength()