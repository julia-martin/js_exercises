function runningTotal(arr) {
  let totals = [];
  for (let idx = 1; idx <= arr.length; idx++) {
    let subArr = arr.slice(0, idx).reduce((acc, elem) => acc + elem);
    totals.push(subArr);
  }
  return totals;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
