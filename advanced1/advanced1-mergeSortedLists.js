function merge(arr1, arr2) {
  let leftIdx = 0;
  let rightIdx = 0;
  let merged = [];
  while (leftIdx < arr1.length && rightIdx < arr2.length) {
    if (arr1[leftIdx] <= arr2[rightIdx]) {
      merged.push(arr1[leftIdx]);
      leftIdx++;
    } else {
      merged.push(arr2[rightIdx]);
      rightIdx++;
    }
  }
  return merged.concat(arr1.slice(leftIdx), arr2.slice(rightIdx));
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]