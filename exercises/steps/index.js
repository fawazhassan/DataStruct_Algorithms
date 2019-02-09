// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (level = 1; level <= n; level++) {
    let returnString = "";
    for (var i = 0; i < level; i++) {
      returnString += "#";
    }
    console.log(returnString.padEnd(n));
  }
}
steps(4);

module.exports = steps;
