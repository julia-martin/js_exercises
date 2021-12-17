// split number into array, identify last `count` digits
// transform to digits.slice(1) + digits[0]
// join unchanged section iwth rotated section
function rotateRightmostDigits(number, count) {
  let digits = String(number);
  let fixed = digits.slice(0, digits.length - count);
  let toRotate = digits.slice(digits.length - count);
  let rotated = toRotate.slice(1) + toRotate[0];
  return Number(fixed + rotated);
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917