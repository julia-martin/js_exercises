// input: string, output: array of substrings, sorted from shortest to longest
// substrings must begin with first letter of the word
// function leadingSubstrings(str) {
//   let result = [];
//   for (let idx = 1; idx < str.length + 1; idx++) {
//     result.push(str.slice(0, idx));
//   }
//   return result;
// }

function leadingSubstrings(str) {
  return str.split('').reduce((acc, _, idx, array) => {
    acc.push(array.slice(0, idx + 1).join(''));
    return acc;
  }, []);
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]