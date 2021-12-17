/* eslint-disable max-lines-per-function */
function hexadecimalToInteger(hex) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
  };
  let total = 0;
  hex.split('').map(x => DIGITS[x.toLowerCase()]).forEach(val => {
    total = (total * 16) + val;
  });
  return total;
}

console.log(hexadecimalToInteger('4D9f'));