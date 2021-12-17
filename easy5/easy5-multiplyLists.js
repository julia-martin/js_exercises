function multiplyList(arr1, arr2) {
  let result = [];
  arr1.forEach((num, idx) => {
    result.push(num * arr2[idx]);
  });
  return result;
}
console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]