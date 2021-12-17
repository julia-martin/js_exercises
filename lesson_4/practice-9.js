let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
result = Object.values(ages).reduce((acc, elem) => acc + elem);
console.log(result);
