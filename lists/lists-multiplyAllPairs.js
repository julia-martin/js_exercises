// input: 2 arrays. output: 1 array in sorted order
// must multiply every pair combination
// outer index to loop through first array
// inner index to loop through second array
// multiply values and push to new array
// sort array
function multiplyAllPairs(arr1, arr2) {
  let result = [];
  for (let idx1 = 0; idx1 < arr1.length; idx1++) {
    for (let idx2 = 0; idx2 < arr2.length; idx2++) {
      result.push(arr1[idx1] * arr2[idx2]);
    }
  }
  return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]