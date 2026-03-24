// dates

let date = new Date()

// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString()); // 3/24/2026, 1:10:35 PM
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());   // 1:12:06 PM
// console.log(date.toISOString());    // 2026-03-24T13:13:01.311Z
// console.log(date.toJSON());    // 2026-03-24T13:13:33.956Z
// console.log(date.toTimeString());   // 13:14:37 GMT+0000 (Coordinated Universal Time)
// console.log(date.toUTCString());   //  Tue, 24 Mar 2026 13:15:20 GMT

// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());    // 2026
// console.log(date.getHours());

let mycreatedDate = new Date(2025, 05, 16)
let mycreatedDate1 = new Date(2025, 05, 16, 12, 08)

// console.log(mycreatedDate1.toLocaleString());  // 6/16/2025, 12:08:00 PM

mycreatedDate = new Date("2025-12-16")
// console.log(mycreatedDate.toLocaleString());


let mytimeStamp = Date.now()
console.log(mytimeStamp);      // time in ms o/p- 1774358754194
console.log(mycreatedDate.getTime());

console.log(date.getMonth());   // months are indexed starting with 0 , o/p - 2   (it is MARCH month - 3)
 
date.toLocaleString('default',{
    weekday: "long"
})

console.log(date.toString());
