let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let result = arr.map(innerarr => {
  return innerarr.filter(elem => elem % 3 === 0);
});

console.log(result);
