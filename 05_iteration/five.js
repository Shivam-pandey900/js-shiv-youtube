// for each loop

// array

const myprogramming = ['java', 'python', 'javascrip', 'c++']

myprogramming.forEach( function(item) {
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