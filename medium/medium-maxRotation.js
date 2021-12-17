function rotateRightmostDigits(number, count) {
  let digits = String(number);
  let fixed = digits.slice(0, digits.length - count);
  let toRotate = digits.slice(digits.length - count);
  let rotated = toRotate.slice(1) + toRotate[0];
  return Number(fixed + rotated);
}

function maxRotation(number) {
  for (let fixed = 0; fixed < String(number).length - 1; fixed++) {
    number = rotateRightmostDigits(number, String(number).length - fixed);
  }
  return number;
}

console.log(maxRotation(735291)); // 321579
console.log(maxRotation(3));     // 3
console.log(maxRotation(35));  // 53
console.log(maxRotation(105)); // 051 -> 015 -> 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));   // 7321609845