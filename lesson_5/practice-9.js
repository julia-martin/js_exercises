let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

arr.map(arr => { 
  if (typeof arr[0] === 'string') {
    return arr.slice().sort();
  } else if (typeof arr[0] === 'number') {
    return arr.slice().sort((a, b) => a - b);
  }
});
