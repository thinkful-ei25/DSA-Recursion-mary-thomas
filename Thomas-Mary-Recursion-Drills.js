'use strict';
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



// function countSheep(nOSheep) {
//     if (nOSheep === 0) {
//         return 'No sheep left!';
//     } else {
//         console.log(nOSheep)
//         countSheep(--nOSheep);
//     }
// }

// countSheep(3);

// return num1+ (recursion(num1+1, num2)



// // Array Double
// function doubleArray(array) {
//   if (array.length === 0) {
//     return [];
//   }
//   return [array[0]*2, ...doubleArray(array.slice(1))];
// }
// console.log(doubleArray([1, 2, 3]));

// // Array Double BACKWARDS
// function doubleArray(array) {
//   if (array.length === 0) {
//     return [];
//   }
//   return [ ...doubleArray(array.slice(1)), array[0]*2];
// }
// console.log(doubleArray([1, 2, 3]));


// // if you want to use push
// function some(arr, newArr) { newArr = newArr || []; }



// Array Double Iterative
// function doubleArray(array) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     let currentPlace = array[i];
//     newArray.push(currentPlace*2);
//   }
//   return newArray;
// }

// console.log(doubleArray([1, 2, 3]));

// string[string.length-1] => e
// string.slice(-1)

//Reverse String using SLICE
// function reverseString(string){
//   if (string.length === 0) {
//     return '';
//   }
//   const stringLetter = string[0];
//   return reverseString(string.slice(1)) + stringLetter;
// }

// console.log(reverseString('clone'));

//Reverse String using .substr & .charAt
// function reverseString(str) {
//   if (str === "")
//     return "";
//   else
//     return reverseString(str.substr(1)) + str.charAt(0);
// }
// reverseString("hello");




// nth Triangular Number Recursive Solution
// function nthTriangular(nth){
//   if (nth <= 0) {
//     return 0;
//   }
//   return nth + nthTriangular(nth - 1);
// }
// console.log(nthTriangular(4));


// Iterative solutiom
// function nthTriangular(nth) {
//   let total = 0;
//   for(let i = nth; i >=0; i--) {
//     total = total + i;
//   }
//   return total;
// }

// console.log(nthTriangular(6));



// String Splitter
// function stringSplitter(string, separator) {
//   var index = string.indexOf(separator)
//   if(index === -1){
//     return [string];
//   }
  
// return [string.slice(0,index)].concat(stringSplitter(string.slice(index+separator.length), separator))
// }

// console.log(stringSplitter("hello-world", "-"));

//expected output = ['hello', 'world']