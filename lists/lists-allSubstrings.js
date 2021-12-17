function leadingSubstrings(string) {
  return string.split('').reduce((acc, _, idx, array) => {
    acc.push(array.slice(0, idx + 1).join(''));
    return acc;
  }, []);
}

// input: string, output: array of all substrings ordered by starting index
// function substrings(str) {
//   let result = [];
//   for (let idx = 0; idx < str.length; idx++) {
//     let substr = str.slice(idx);
//     result = result.concat(leadingSubstrings(substr));
//   }
//   return result.flat();
// }

function substrings(string) {
  return string.split('').reduce((acc, _, idx, array) => {
    let substr = array.slice(idx).join('');
    return acc.concat(leadingSubstrings(substr));
  }, []);
}

console.log(substrings('abcde'));

// returns [ "a", "ab", "abc", "abcd", "abcde", "b", "bc", "bcd", "bcde", "c",
// "cd", "cde", "d", "de", "e"]