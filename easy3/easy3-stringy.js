function stringy(number) {
  let numArray = [...Array(number).keys()];
  return numArray.map((_, idx) => (idx % 2 === 0 ? '1' : '0')).join('');
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"