function countOccurrences(arr) {
  let counts = {};
  arr.forEach(elem => {
    counts[elem] = (counts[elem] || 0) + 1;
  });
  for (let key in counts) {
    console.log(`${key} => ${counts[key]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];
countOccurrences(vehicles);
// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
