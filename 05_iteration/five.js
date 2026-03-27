// for each loop :  it requires a call back function with no name 

// array

const myprogramming = ['java', 'python', 'javascrip', 'c++']

myprogramming.forEach( function(item) {     // call back or arrow function definition is required.
    // console.log(item);
});

myprogramming.forEach( (item) => {
    // console.log(item)  
})

function element1(item){
    console.log(item);  
}

// myprogramming.forEach( element1 )

myprogramming.forEach( (item, index, arr) => {
    // console.log(index+" "+ item + " "+ arr);
})



// Array with object as its element:

const myarr = [
    {
        language: 'java',
        file: 'java',
    },
    {
        language: 'python',
        file: 'py',
    },
    {
        language: 'javascript',
        file: 'js'
    }
]

myarr.forEach( (obj) => {
    console.log(`Language ${obj.language} with their file name ${obj.file}`);  
})