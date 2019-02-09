// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse4(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

function reverse2(str) {
  var revStr = [];
  for (var i = 0; i < str.length; i++) {
    revStr.push(str[str.length - i - 1]);
  }

  return revStr.join("");
}

function reverse3(str) {
  reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

function reverse(str) {
  debugger;
  return str.split("").reduce((reversed, char) => char + reversed);
}

reverse("asdf");
module.exports = reverse;
