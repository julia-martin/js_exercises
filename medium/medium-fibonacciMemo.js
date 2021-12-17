function fibonacci(nth) {
  if (nth <= 2) return 1;
  let fibs = {1: 1, 2: 1};
  const recursive = function(nth) {
    if (!fibs[nth - 1]) {
      fibs[nth - 1] = fibonacci(nth - 1);
    }
    if (!fibs[nth - 2]) {
      fibs[nth - 2] = fibonacci(nth - 2);
    }
    return fibs[nth - 1] + fibs[nth - 2];
  };
  return recursive(nth);
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765