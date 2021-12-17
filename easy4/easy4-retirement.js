const readline = require('readline-sync');
console.log("What is your age?");
let age = Number(readline.question());
console.log("At what age would you like to retire?");
let retirementAge = Number(readline.question());

let today = new Date();
let currentYear = today.getFullYear();
let yearsLeft = retirementAge - age;
let retirementYear = currentYear + yearsLeft;
console.log(`It's 2021. You will retire in ${retirementYear}.\nYou have only ${yearsLeft} years of work to go!`);