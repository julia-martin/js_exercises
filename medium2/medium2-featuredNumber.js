function hasUniqueDigits(number) {
  let counts = {};
  String(number).split('').forEach(digit => {
    counts[digit] = (counts[digit] || 0) + 1;
  });
  return Object.values(counts).every(x => x === 1);
}

function featured(number) {
  const MAX = 9876543201;
  let curr = (Math.floor(number / 7) * 7) + 7;
  while (curr % 2 === 0 || !hasUniqueDigits(curr)) {
    curr += 7;
    if (curr > MAX) {
      return "There is no possible number that fulfills those requirements";
    }
  }
  return curr;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements