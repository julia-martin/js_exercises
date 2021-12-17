const readline = require('readline-sync');
console.log("What is your name? ");
let name = readline.question();
if (name.endsWith('!')) {
  console.log(`HELLO ${name.slice(0, name.length - 1).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}