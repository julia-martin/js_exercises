function findFibonacciIndexByLength(digits) {
  let count = 2n;
  let a = 1n;
  let b = 1n;
  let tmp;
  while (a.toString().length < digits) {
    tmp = a;
    a += b;
    b = tmp;
    count += 1n;
  }
  return count;
}
console.log(findFibonacciIndexByLength(2n)); // === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n));
console.log(findFibonacciIndexByLength(10n)); // === 45n;
console.log(findFibonacciIndexByLength(16n)); // === 74n;// === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144