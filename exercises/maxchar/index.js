// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  var obj = {};

  str.split("").forEach(element => {
    obj[element] == null ? (obj[element] = 1) : (obj[element] += 1);
  });

  let max = 0;
  let maxchar = "";

  for (let char in obj) {
    if (obj[char] > max) {
      max = obj[char];
      maxchar = char;
    }
  }

  return maxchar;
}
// function AnagramComparison(str, str2) {
//   var charset = [];
//   var arr = [str, str2];
//   arr.forEach((Str, index) => {
//     let obj = {};

//     Str.split("").forEach(element => {
//       obj[element] == null ? (obj[element] = 0) : null;
//       obj[element] += 1;

//       charset[index] = obj;
//     });
//   });

//   for(var prop in charset[0]){

//   }
// }

console.log(maxChar("Fawaz hates dick"));
module.exports = maxChar;
