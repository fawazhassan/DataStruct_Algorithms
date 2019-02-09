// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   var wordArray = str.split("");
//   var count = 0;
//   for (char of wordArray) {
//     isVowel(char) === true ? (count += 1) : null;
//   }

//   console.log(count);
// }

// const isVowel = char => {
//   var vowelArray = ["a", "e", "i", "o", "u"];

//   for (vowel of vowelArray) {
//     if (char === vowel) {
//       return true;
//     }
//   }
//   return false;
// };

// vowels("returns the number of vowels used total");

function vowels(str) {
  var strLower = str.toLowerCase();
  var obj = {};
  for (char of strLower) {
    const vowelArray = ["a", "e", "i", "o", "u"];
    for (vowel of vowelArray) {
      if (vowel === char) {
        obj[vowel] == null ? (obj[vowel] = 1) : obj[vowel]++;
      }
    }
  }

  var TotalNumberOfVowels = Object.values(obj).reduce((a, b) => a + b, 0);

  //console.log(`Total Number of Vowels = ${TotalNumberOfVowels} `);
  //console.log(`Number of Vowels Used = ${Object.values(obj).length} `);
  return Object.values(obj).length;
}

function vowels2(str) {
  var strLower = str.toLowerCase();
  const vowelArray = "aeiou";
  counter = 0;

  for (char of strLower) {
    if (vowelArray.includes(char)) {
      counter++;
    }
  }

  return counter;
}

console.log(vowels2("aeiouare"));
console.log(vowels2("AEIOU"));
console.log(vowels2("abcdefghijklmnopqrstuvwxyz"));
console.log(vowels2("bcdfghjkl"));
console.log(vowels("aeiou"));
console.log(vowels("AEIOU"));

module.exports = vowels;
