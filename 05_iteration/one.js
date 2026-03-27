for (let i = 0; i < 5; i++) {
    const element = i;
    // if (element == 3)
    //     console.log(`${element} is best number`)
    // console.log(element);
}


// break  and continue 

for (let i = 0; i < 10; i++) {
    const element = i;
    if( element == 5 )
        break;
    // console.log(element)
}

for (let i = 0; i < 10; i++) {
    const element = i;
    if( element == 5 )  {
        console.log(`${element} is special number`)
         continue;
         }
    console.log(element)
}

let myarr = ['hi', 'hello', 'world']

for (let i = 0; i < myarr.length; i++) {
    const element = myarr[i];
    console.log(element);
     
}