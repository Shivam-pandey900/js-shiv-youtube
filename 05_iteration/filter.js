// filter method:

// const myprogramming = ['java', 'python', 'javascrip', 'c++']

// // const total = myprogramming.forEach( (item) => console.log(item))

// const total = myprogramming.forEach( (item) => { console.log(item)
//   return item
// })

// console.log(total)     // o/p : undefined.

// foreach do not return anything.

const nums = [1, 2, 3, 4, 5, 6, 7]

// const mynums = nums.filter( (num) =>  num > 2 )

// console.log(mynums)   // o/p: [ 3, 4, 5, 6, 7 ]

const mynums = nums.filter( (num) =>  num + 2 )

// console.log(mynums)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


//   const bk = books.filter( (obj) => obj.genre === 'History')

const bk = books.filter( (obj) => (obj.publish > 2000  && obj.genre === 'Science'))

  console.log(bk);
  