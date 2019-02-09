// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// function matrix(n) {
//   var count = 0;
//   var Arr = [];

//   while (count < n) {
//     var subArray = [];
//     for (i = 0; i < n; i++) {
//       subArray.push(i + 1);
//     }
//     Arr.push(subArray);
//     count++;
//   }

//   return Arr;
// }

// console.log(matrix(14));

module.exports = matrix;
