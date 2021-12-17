function century(year) {
  let century = Math.floor(((year - 1) / 100) + 1);
  if (century % 10 === 1 && century % 100 !== 11) return century + 'st';
  if (century % 10 === 2 && century % 100 !== 12) return century + 'nd';
  if (century % 10 === 3 && century % 100 !== 13) return century + 'rd';
  return century + 'th';
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
