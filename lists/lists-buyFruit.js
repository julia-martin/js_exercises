// input 2-D array, output: 1D array
function buyFruit(arr) {
  return arr.reduce((acc, subArr) => {
    return acc.concat(Array(subArr[1]).fill(subArr[0]));
  }, []);
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
