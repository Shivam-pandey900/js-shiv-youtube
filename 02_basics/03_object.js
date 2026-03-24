// singleton
// Object.create

// object literal

const sym = Symbol('123')

const JSuser = {
    name : 'shivam',
    age : 22,
    isLoggedIn : false,
    lastLoginDays : ['Monday', 'Tuesd,ay'],
    "email" : "shiv.sm@gmail.com",
    [sym]: '123',
}

// console.log(JSuser.name);     // one way to access object element is using dot notation
// console.log(JSuser["email"]);  // another way is using square braket notation, this works for every kind of key
// console.log(JSuser["isLoggedIn"]);

// interview question : add a symbol datatype in the object and access it
// first declare a symbol and then add it to the object
// note symbol is added like - [sym]: '123' and accessed like - JSuser[sym]

// console.log(JSuser)
// console.log(typeof JSuser[sym]);

JSuser["age"] = 25
// console.log(JSuser["age"]);

// Object.freeze(JSuser)   // freezes the object, we cannot change any property of the object after freezing it
JSuser["age"] = 30
// console.log(JSuser["age"]);   // o/p - 25, age is not changed because the object is frozen

JSuser.greeting = function() {
    console.log("hello js user");
}

JSuser.greeting2 = function() {
    console.log(`hello js user, ${this.name}`)
}

JSuser.greeting()
console.log(JSuser.greeting());
console.log(JSuser.greeting2());

