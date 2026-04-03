class user {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`UserName is : ${this.username}`)
    }
}

class Teacher extends user{
    constructor(username,email, pwd){
        // now we want to make the work done by previous class method

        super(username)
        this.email = email;
        this.pwd = pwd
    }

    instructor(){
        console.log(`Course was added by ${this.username}`)
    }
}

const Shivam = new Teacher('Shivam','shiv@gmail.com',123);
Shivam.logMe()
Shivam.instructor()

const chai = new user('chai')
chai.logMe()

console.log(chai instanceof user)
console.log(chai instanceof Teacher)
console.log(Shivam instanceof user)
console.log(Shivam instanceof Teacher)