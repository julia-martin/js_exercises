function multisum(maxNum) {
  let multiples = [];
  for (let number = 3; number <= maxNum; number++) {
    if (number % 3 === 0 || number % 5 === 0) {
      multiples.push(number);
    }
  }
  return multiples.reduce((acc, num) => acc + num);
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168