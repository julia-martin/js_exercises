function twice(num) {
  function isDouble(str) {
    return str.slice(0, str.length / 2) === str.slice(str.length / 2);
  }

  let strNum = String(num);
  if (strNum.length % 2 === 0 && isDouble(strNum)) {
    return num;
  } else {
    return num * 2;
  }
}

console.log(twice(37));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(107));
console.log(twice(103103));
console.log(twice(3333));
console.log(twice(7676));