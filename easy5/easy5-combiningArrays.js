function union(arr1, arr2) {
  let combined = arr1;
  for (let i = 0; i < arr2.length; i++) {
    if (!combined.includes(arr2[i])) {
      combined.push(arr2[i]);
    }
  }
  return combined;
}
console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]