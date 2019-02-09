// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const finalArray = [];
  let index = 0;

  while (index < array.length) {
    finalArray.push(array.slice(index, index + size));
    index += size;
  }

  return finalArray;
}

module.exports = chunk;

// function chunk(array, size) {
//     var numOfArrays = Math.ceil(array.length / size);
//     var subArray = [],
//       fullArray = [];
//     var count = 0;

//     for (i = 0; i < numOfArrays; i++) {
//       for (j = 0; j < size; j++) {
//         subArray.push(array[count]);
//         count++;
//       }
//       subArray = subArray.filter(a => a != null);
//       fullArray[i] = subArray;
//       subArray = [];
//     }

//     return fullArray;
//   }
