// function setName(username){
//     // complex DB calls

//     this.username = username;
//     console.log('called')
// }

// function user(username, email, id){
//     setName(username);
//     this.email = email;
//     this.id = id;
// }

// let setuser = new user('shiwam','shiv@tcs.com',100)
// console.log(setuser)

// if we want to save the username we will have to save the context so first
// we will use call method and in that we will pass its this context to write in it.

function setName(username){
    // complex DB calls

    this.username = username;
    console.log('called')
}

function user(username, email, id){
    setName.call(this,username);
    this.email = email;
    this.id = id;
}


let setuser = new user('shiwam','shiv@tcs.com',100)
console.log(setuser)