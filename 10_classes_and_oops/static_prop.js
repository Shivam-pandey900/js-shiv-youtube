class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(this.username)
    }

    static setId(){
        return 'UserId is : 123'
    }
}

const shivam = new user('Shivam')
// console.log(shivam.setId())

// suppose we want to lock the creation of unique user id , so 
// we will simply add static keyword before the function to lock it.

// console.log(shivam.setId())

class Teacher extends user{
    constructor(username,email){
        super(username)    // this works all working of call(this) method.

        this.email = email
    }
}

const shiv = new Teacher('shiv','s@tcs.com')
shiv.logMe();
shiv.setId()