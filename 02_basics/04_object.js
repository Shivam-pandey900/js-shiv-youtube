// const obj1 = new Object();
// console.log(obj1);

const obj2 = {};
// console.log(obj2);

obj2.id = 1;
obj2.name = 'shivam'
obj2.age = 56

// console.log(obj2);

const obj3 = {
    name1: 'shiv',
    fullname: {
        email: 's@gmail.com',
        username: {
            firstname: 'sita',
            lastname: 'ram',
        },
    },
}

console.log(obj3.fullname.username.lastname);

const obj4 = {
    id1 : 2,
    namee : 'siya',
    age2 : 56
}

const target = {}
const obj5 = Object.assign(target, obj2,obj4)   // assign method takes target and source objects and copies the properties of source objects to target object and returns the target object
// console.log(obj5);

// console.log(target == obj5); // true
// console.log(target);

// easiest method to do that is spread operator

const obj6 = {...obj2, ...obj4, ...obj3}  // spread operator takes all the properties of the objects and copies them to the new object
// console.log(obj6);

const users = [ {id: 1, name: 'Alice'}, {id: 2, name: 'Bob'} ]

// console.log(users[1]["name"]);

// // console.log(Object.keys(obj6));
// // console.log(Object.values(obj6));
// console.log(Object.entries(obj6));

// console.log(obj6.hasOwnProperty('namee'));
// console.log(obj6.hasOwnProperty('namee55'));


// ++++++++++++++++++++++++ Object Destructuring ++++++++++++++++++++++++++++++++++++++++++++++++++

const course = {
    courseName : "js in hindi",
    courseInstructor : "hitesh",
    courseprice: "free"
}

// console.log(course.couseInstructor)

const {courseInstructor} = course   // object destructure

// console.log(courseInstructor);   

const {courseInstructor: instructor} = course     // object destructuring with shorting element name.

// console.log(instructor);


// json intro:    it's an object with no name.

// {
//     "name" : "shivam",
//     "age" : 26,
//     "city" : "giridih"
// }

// we can have array of objects .

// [
//     {},
//     {},
//     {},
// ]
