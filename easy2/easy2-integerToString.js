function integerToString(integer) {
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = '';
  do {
    let remainder = integer % 10;
    integer = Math.floor(integer / 10);
    result = DIGITS[remainder] + result;
  } while (integer > 0);
  return result;
}

function signedIntegerToString(integer) {
  let sign = Math.sign(integer);
  if (sign === -1) {
    return '-' + integerToString(-integer);
  } else if (sign === 1) {
    return '+' + integerToString(integer);
  } else {
    return integerToString(integer);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
