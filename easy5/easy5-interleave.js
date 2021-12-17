// function interleave(arr1, arr2) {
//   let result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     result.push(arr1[i]);
//     result.push(arr2[i]);
//   }
//   return result;
// }

function interleave(arr1, arr2) {
  let result = [];
  arr1.forEach((elem, idx) => {
    result.push(elem);
    result.push(arr2[idx]);
  });
  return result;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]