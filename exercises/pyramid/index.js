// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let res = "";
  for (level = 1; level <= n; level++) {
    for (var i = 0; i < 2 * n - 1; i++) {
      i >= n - level && i < n + level - 1 ? (res += "#") : (res += " ");
    }
    console.log(res);
    res = "";
  }
}

module.exports = pyramid;
