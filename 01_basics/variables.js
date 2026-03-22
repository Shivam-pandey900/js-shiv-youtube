const userId=100
var userName = "Shivam"
let userCity = "Giridih"
userState = "Jharkhand"

// userId = 200

console.log(userId);

/*
Prefer not use var
because of issue in functional scope and block scope
*/

userName = "SitaRam"
userCity = "Jamua"
userState = "up"

console.table([userId, userName, userCity, userState])

