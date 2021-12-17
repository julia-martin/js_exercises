const readline = require('readline-sync');

console.log('What is the bill?');
let bill = Number(parseInt(readline.question(), 10));

console.log('What is the tip percentage?');
let tipPercent = Number(parseInt(readline.question(), 10)) / 100;
let tip = bill * tipPercent;
let total = bill + tip;

console.log(`The tip is $${tip}`);
console.log(`The total is $${total}`);
