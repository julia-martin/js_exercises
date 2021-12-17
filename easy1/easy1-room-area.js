const readline = require('readline-sync');
console.log('Enter the length of the room in meters:');
let length = readline.question();

console.log('Enter the width of the room in meters:');
let width = readline.question();

let area = length * width;
let feetArea = area * 10.7639;
console.log(`The area of the room is ${area} square meters (${feetArea} square feet).`);
