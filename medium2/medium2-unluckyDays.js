function fridayThe13ths(year) {
  let count = 0;
  for (let month = 0; month <= 12; month++) {
    let date = new Date(year, month, 13);
    if (date.getDay() === 5) count++;
  }
  return count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2