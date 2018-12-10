// function countSheep(nOSheep) {
//     if (nOSheep === 0) {
//        console.log('No sheep left!')
//        return '';
//     } else {
//        console.log(`${nOSheep} - Another sheep jump over the fence`)  
//        countSheep(nOSheep -1);
//     }
// }

// countSheep(3);

// function doubleArray(array){
// if(array.length===0){
//     return;
// }
//     return (array[0] * 2);
// }

// console.log(doubleArray([1,2,3]));

function countSheep(nOSheep) {
    if (nOSheep === 0) {
        return 'No sheep left!';
    } else {
        console.log(nOSheep)
        countSheep(--nOSheep);
    }
}

countSheep(3);

return num1+ (recursion(num1+1, num2)