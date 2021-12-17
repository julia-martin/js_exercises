const readline = require('readline-sync');

let nums = [];

console.log('Enter the 1st number: ');
nums.push(readline.question());

console.log('Enter the 2nd number: ');
nums.push(readline.question());

console.log('Enter the 3rd number: ');
nums.push(readline.question());

console.log('Enter the 4th number: ');
nums.push(readline.question());

console.log('Enter the 5th number: ');
nums.push(readline.question());

console.log('Enter the last number: ');
let lastNum = readline.question();

if (nums.includes(lastNum)) {
  console.log(`The number ${lastNum} appears in ${nums.join(',')}`);
} else {
  console.log(`The number ${lastNum} does not appear in ${nums.join(',')}`);
}
