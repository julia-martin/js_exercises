function crunch(string) {
  if (string.length === 0) return '';
  let result = string[0];
  string.split('').forEach(char => {
    if (char !== result[result.length - 1]) {
      result += char;
    }
  });
  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));