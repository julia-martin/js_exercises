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

function mergeSort(array) {
  if (array.length === 1) return array;
  let left = array.slice(0, Math.floor(array.length / 2));
  let right = array.slice(Math.floor(array.length / 2));
  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6,
  51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]