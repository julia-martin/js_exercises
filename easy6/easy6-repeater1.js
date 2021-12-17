function repeater(string) {
  let result = '';
  let letters = string.split('');
  for (let idx = 0; idx < letters.length; idx++) {
    result += letters[idx] + letters[idx];
  }
  return result;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
