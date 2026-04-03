const promiseOne = new Promise(function(resolve,reject){
    // do any async task such as
    // DB calls , cryptography, network.

    setTimeout(() => {
        console.log('Async task is complete');
        resolve();
    }, 1000);
})

promiseOne.then(() => {
    console.log('Promise Consumed.')
})

// another way to create a promise:

new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('Async task 2 done')
        resolve()
    },1000)
}).then(() => {
    console.log('Promise two consumed.')
})

// we can pass arguments in resolve function calling under a promise.

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 3 done')
        resolve({username: 'shivam', userMail: 'example@gmail.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

// now let's understand reject- it is for any error that occurs during any async
// task completion, then this method deals with it.

const promiseFour = new Promise(function(resolve,reject){
    let task = false;
    setTimeout(() => {
        if(task)
            resolve({userName: 'shivam',roll: 2202840100209})
        else
            reject('Error: Something went wrong!')
    },1000)
})

// we can use chaining as well  and we will understand finally method as well.

promiseFour.then((user) => {
    console.log(user)
    return user.userName;
}).then((message) => {
    console.log(message)
}).catch((error) => {
    console.log('E:  ', error)
}).finally(()=>{
    console.log('promise either be resolved by then or catch.')
    // this method will always run despite of any execution.
})

// now we will consume a promise using async await method.

const promiseFive = new Promise((resolve,reject) => {
    let task = 'false';
    setTimeout(() => {
        if(task)
            resolve({userName: 'shivam',roll: 2202840100209})
        else
            reject('Error: Something went wrong!')
    },1000)
})

async function consumePromiseFive() {
    try {
        const message = await promiseFive
        console.log(message)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()


// now let's understand promise using fetch and async await using fetch.

const myurl = 'https://api.github.com/users/Shivam-pandey900'

async function myDataGitHub(){
    try{
        const response = await fetch(myurl)
        const data = await response.json();
        // console.log(data)
    }catch(error){
        console.log(error)
    }
}

myDataGitHub()

fetch(myurl)
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((err) => {
    console.log(err)
})
.finally(() => {
    console.log('finally data is received.')
})