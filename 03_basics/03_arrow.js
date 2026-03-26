const user = {
    username: 'shivam',
    age: 30,
    welcome: function() {
        console.log(`${this.username},  welcome to my website.`);
        console.log(this);
        
    }
}

// user.welcome()
user.username = 'shubham'
// user.welcome()

// console.log(this);  // o/p : {}

// interview questions asked on "this" topic

function chai(){
    const user = "shivam"
    console.log(this.user)
}

// chai()

const demo = function(){
    const user = "suham"
    console.log(this.user);
    console.log(this);            // in function 'this' is used as a global variable while in an object it is local
}

// demo();

//+++++++++++++++++++++++++++++++++++++ Arrow function +++++++++++++++++++++++++++++++++++++++++++

let result = (num1, num2) => {
    return num1 + num2
}

console.log(result(3,6));

let result1 = (num1, num2) => num1 + num2

console.log(result1(2,9));

let result2 = (num1, num2) => (num1 + num2)
console.log(result2(5,9));

const try1 = (num1,num2) => ({username: "shivam"})  // for object you need to add parentheses 

console.log(try1(2,5));

