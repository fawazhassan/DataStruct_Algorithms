// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   objA = charCount(stringA);
//   objB = charCount(stringB);

//   for (value in objA) {
//     var test = objA[value] === objB[value] ? true : false;
//     if (!test) {
//       break;
//     }
//   }

//   if (test) {
//     for (value in objB) {
//       var test = objA[value] === objB[value] ? true : false;
//       if (!test) {
//         break;
//       }
//     }
//   }
//   debugger;
//   return test;
// }

// function charCount(str) {
//   var obj = {};

//   var stringStrippedAndLower = str.replace(/[^\w]/g, "").toLowerCase();

//   stringStrippedAndLower.split("").forEach(element => {
//     obj[element] == null ? (obj[element] = 1) : (obj[element] += 1);
//   });

//   return obj;
// }

function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }
  for (let char in aCharMap) {
    var test = aCharMap[char] === bCharMap[char] ? true : false;
    if (!test) {
      break;
    }
  }
  return test;
}

function buildCharMap(str) {
  var charMap = {};

  var strStrippedLower = str.replace(/[^\w]/g, "").toLowerCase();

  for (let char of strStrippedLower) {
    charMap[char] == null ? (charMap[char] = 1) : (charMap[char] += 1);
  }
  return charMap;
}

console.log(anagrams("Hellos There3", "Therse 3Hello"));

module.exports = anagrams;
