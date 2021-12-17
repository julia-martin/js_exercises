let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let sorted = arr.map(arr => {
  if (typeof arr[0] === 'string') {
    return arr.slice().sort((a, b) => {
      if (a < b) { return 1; }
      else if (a > b) { return -1; }
      else { return 0; }
    });
  } else if (typeof arr[0] === 'number') {
    return arr.slice().sort((a, b) => b - a);
  }
});
console.log(sorted);