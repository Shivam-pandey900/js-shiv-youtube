// reduce function

const nums = [1, 2, 3]

// const initialValue = 0

// const totalSum = nums.reduce( function(accumulator, currentValue) {
//     return accumulator + currentValue
// }, initialValue)



// totalSum = nums.reduce( (accumulator, currentValue) => 
//     (accumulator + currentValue), 0)



// reduce on array of objects

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalToPay = shoppingCart.reduce( (acc, curr) => acc + curr.price , 0)

console.log(totalToPay)