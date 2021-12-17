// input: string, output: object containing counts
function letterCaseCount(string) {
  let counts = {lowercase: 0, uppercase: 0, neither: 0};
  string.split('').forEach(char => {
    if (!(/[a-zA-Z]/).test(char)) {
      counts.neither += 1;
    } else if (char === char.toLowerCase()) {
      counts.lowercase += 1;
    } else if (char === char.toUpperCase()) {
      counts.uppercase += 1;
    }
  });
  return counts;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef')); // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));  // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));  // { lowercase: 0, uppercase: 0, neither: 0 }