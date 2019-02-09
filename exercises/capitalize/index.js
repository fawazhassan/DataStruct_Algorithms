// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  var returnArr = [];
  var wordArray = str.split(" ");

  wordArray.forEach(word => {
    returnArr.push(word[0].toUpperCase() + word.slice(1, word.length));
  });
  return returnArr.join(" ");
}
console.log(capitalize("Test hello there"));
module.exports = capitalize;
