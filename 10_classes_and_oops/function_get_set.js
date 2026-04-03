// earlier this way was user before classes came into picture.

function User(name, email){
    this._name = name;
    this._email = email

    Object.defineProperty(this,'name',{
        get: function(){
            console.log('name function')
            return this._name.toUpperCase();
        },
        set: function(value){
            this._name = value
        }
    })

    Object.defineProperty(this,'email',{
        get: function(){
            console.log('email function')
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value
        }
    })
}

const user = new User('Shivam','shiv@tcs.com')
console.log(user.name)
console.log(user.email)