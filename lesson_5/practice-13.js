let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// Returns subarrays ordered based on sum of odd numbers
arr.sort((a, b) => {
  let aOdds = a.filter(elem => elem % 2 === 1);
  let bOdds = b.filter(elem => elem % 2 === 1);
  let aSum = aOdds.reduce((acc, num) => acc + num);
  let bSum = bOdds.reduce((acc, num) => acc + num);
  return aSum - bSum;
});

console.log(arr);
