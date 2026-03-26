function sayName() {
    console.log('s');
    console.log('h');
    console.log('i');
    console.log('v');
    console.log('a');
    console.log('m');
}

// sayName()

// function addNumbers(number1, number2)
// {
//     console.log(number1 + number2)
// }

// addNumbers(8,5)

function addNumbers(number1, number2)  // parameters
{
    return number1 + number2
}

const result = addNumbers(3,5)  // arguments
console.log(result);

function userName(name = 'sam'){
    if(!name){
        console.log(`please enter a username`);
        return
    }
    return `${name} just logged in.`
}

// console.log(userName())
// console.log(userName('shivam'))

// function handleNumberOfValues(number1){
//     return number1;
// }

// console.log(handleNumberOfValues(5, 56, 65));


function handleNumberOfValues(num0, num1,...number1){    // ... is called rest operator as well as spread operator.
    return number1;
}

 console.log(handleNumberOfValues(5, 56, 65,633));

const user = {
    userName: 'shivam',
    userage: 78,
}

function handleObject(anyObject) {
    return `User name is ${anyObject.userName} and his age is ${anyObject.userage}` 
}

// console.log(handleObject(user));
console.log(handleObject({userName: 'shiv', userage: 25}));

const array = [2,5,8,6]
function returnelement2(arr){
    return arr[1]
}

console.log(returnelement2(array));
console.log(returnelement2([1,6,4]));
