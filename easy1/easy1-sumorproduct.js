const readline = require('readline-sync');

console.log('Please enter an integer greater than 0: ');
let number = readline.question();
console.log('Enter "s" to compute the sum, or "p" to compute the product.');
let answer = readline.question();

if (answer === 's') {
  let result = 0;
  for (let start = 1; start <= number; start++) {
    result += start;
  }
  console.log(`The sum of the integers between 1 and ${number} is ${result}.`);
}
else if (answer === 'p') {
  let result = 1;
  for (let start = 1; start <= number; start++ ) {
    result *= start;
  }
  console.log(`The product of the integers between 1 and ${number} is ${result}.`);
}
