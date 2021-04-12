"use strict";
// // function factorial(n) {
// //  return (n != 1) ? n * factorial (n - 1) : 1;
// // }
// function factorial(n) {
//     if (n == 0) {
//         return 1;
//     } else {
//         return factorial(n - 1) * n;
//     }
// }
// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));
// console.log(factorial(6));
// console.log(factorial(7));
// let a = 2 ** 4;
// console.log(a);
// let c;
// console.log(typeof c);
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    console.log(i); // простое
  }
}
console.log(showPrimes(31));


