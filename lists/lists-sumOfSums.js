function sumOfSums(arr) {
  let sequences = arr.map((_, idx) => arr.slice(0, idx + 1));
  let sums = sequences.map(arr => arr.reduce((acc, elem) => acc + elem));
  return sums.reduce((acc, elem) => acc + elem);
}

console.log(sumOfSums([3, 5, 2]));  // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));  // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4])); // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
