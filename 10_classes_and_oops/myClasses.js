// ES6

// class User{
//     constructor(username,email,pwd){
//         this.username = username;
//         this.email = email
//         this.pwd = pwd
//     }

//     encryptPassword(){
//         console.log(`Password is: ${this.pwd}abc`)
//     }

//     showName(){
//         console.log(`user name is : ${this.username}`)
//     }
// }

// const shiv = new User('shiv','shiv@gmail.com',123)
// shiv.encryptPassword()
// shiv.showName()

// behind the scene : using function:

function user(username,email,pwd){
    this.username = username;
        this.email = email
        this.pwd = pwd
}

user.prototype.encryptPassword = function(){
        console.log(`Password is: ${this.pwd}abc`)
}

user.prototype.showName = function(){
        console.log(`user name is : ${this.username}`)
}

const shiv = new user('shiv','shiv@gmail.com',123)
shiv.encryptPassword()
shiv.showName()