// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (var i = 1; i <= n; i++) {
    var response = "";
    if (i % 3 == 0 || i % 5 == 0) {
      i % 3 == 0 ? (response += "fizz") : null;
      i % 5 == 0 ? (response += "buzz") : null;
    } else {
      response = i;
    }
    console.log(response);
  }
}

fizzBuzz(25);
module.exports = fizzBuzz;
