class User{
    constructor(name,email){
        this.name = name
        this.email = email
    }

    get name(){
        return this._name.toUpperCase()
    }
    set name(value){
        this._name = value;
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value;
    }
}

const Shiv = new User('Shiv','shiv@tcs.com')
console.log(Shiv.email)