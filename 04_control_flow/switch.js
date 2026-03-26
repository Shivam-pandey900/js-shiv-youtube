// syntax

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const num = 2

// switch (num) {
//     case 1:
//         console.log('jan');
//         break;
//     case 2:
//         console.log('feb');
//         break;
//     case 3:
//         console.log('march');
//         break;
//     case 4:
//         console.log('april');
//         break;
//     default:
//         console.log('not an month');
//         break;
// }

// note interview question on break and switch - if we do not write break than all cases including the correct one gets executed 
// excluding the default one (this default is doubt one check it once).

const num = 2

switch (num) {
    case 1:
        console.log('jan');
        break;
    case 2:
        console.log('feb');
    case 3:
        console.log('march');
    case 4:
        console.log('april');
    default:
        console.log('not an month');
        break;
}
