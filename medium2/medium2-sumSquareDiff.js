function sumSquareDifference(num) {
  let range = [...Array(num)].map((_, idx) => idx + 1);
  let first = range.reduce((acc, elem) => acc + elem) ** 2;
  let second = range.reduce((acc, elem) => acc + (elem ** 2), 0);
  return first - second;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
