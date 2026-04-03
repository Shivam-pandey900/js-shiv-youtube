const user = {
    userName: 'shivam',
    loginCount: 10,
    isLoggedIn: true,

    getUserDetails: function(){
        // console.log('User details received.')
        // console.log('Username: '+ this.userName)
        console.log(this)
    }
}

// user.getUserDetails()
// console.log(this)      // o/p: {}

// now suppose 

const user0 = 'Shiwam'

// console.log(this)     // then also o/p: {}

// function User(username, logincnt, isloggedIn) {
//     const UserName = username;
//     const Logincnt = logincnt;
//     const Isloggedin = isloggedIn;

//     function greeting(){
//         console.log(`welcome ${this.UserName}`)
//     }

//     // return this

//     greeting()
// }

// console.log(User('shiv',10,false))

function User(username, logincnt, isloggedIn) {
    this.username = username;
    this.logincnt = logincnt;
    this.isloggedIn = isloggedIn;

    function greeting(){
        console.log(`welcome ${this.username}`)
    }

    greeting()

    return this

}

// console.log(User('shiv',10,false))

// now suppose we want to create users

// const userOne = User('shiv',10,false)

// console.log(userOne)

// const userTwo = User('shivam',11,true)

// console.log(userOne)

// we get same output - it means if we want to create different objects without
// using new keyword it will overwrite the previous values.

// in order to create new objects use new keyword - which works as a constructor.

const userOne = new User('shiv',10,false)

console.log(userOne)

const userTwo = new User('shivam',11,true)

console.log(userOne)
console.log(userTwo)

console.log(userOne.constructor)
console.log(userOne.constructor())