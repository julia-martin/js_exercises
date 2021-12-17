function stringToSignedInteger(str) {
  const DIGITS = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9};
  let sign = (str[0] === '-') ? 'negative' : 'positive';
  let digitArray = str.replace('-', '').replace('+', '').split('').map(char => DIGITS[char]);
  let total = 0;
  digitArray.forEach(digit => {
    total = (total * 10) + digit;
  });
  if (sign === 'negative') {
    return -total;
  } else {
    return total;
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true