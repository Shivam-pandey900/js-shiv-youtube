const obj = {
    _email: 'a@a.com',
    _password: 'abcdef',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value;
    }
}

console.log(obj.email)
console.log(obj.password)
const tea = Object.create(obj)   // use of factory method create() to create an object instance.
console.log(tea.email)