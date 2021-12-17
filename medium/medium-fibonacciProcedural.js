function fibonacci(nth) {
  let a = 1;
  let b = 1;
  for (let count = 3; count <= nth; count++) {
    let tmp = a;
    a = b;
    b = tmp + b;
  }
  return b;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
