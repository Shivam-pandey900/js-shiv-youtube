// map function

const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// const myarr = arr.map( (num) => num + 10)

// const myarr = []

// arr.forEach((num) => myarr.push(num + 10))

// const myarr = arr.filter((num) => num + 10)  // o/p: [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]



// concept of chaining


const myarr = arr
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num > 20)

console.log(myarr);
