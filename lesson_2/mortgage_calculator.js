const readline = require('readline-sync');

function invalidNumber(number) {
  return Number.isNaN(number) || number < 0;
}

while (true) {
  console.log('Welcome to the mortgage calculator!');
  let loanAmount;
  do {
    console.log("What is the loan amount? ");
    loanAmount = Number.parseInt(readline.question(), 10);
  } while (invalidNumber(loanAmount));

  let apr;
  do {
    console.log("What is the APR %? ");
    apr = Number.parseFloat(readline.question());
  } while (invalidNumber(apr));

  let loanDurationYrs;
  do {
    console.log("What is the loan duration in years? ");
    loanDurationYrs = Number.parseFloat(readline.question());
  } while (invalidNumber(loanDurationYrs));

  let loanDurationMonths = loanDurationYrs * 12;
  let monthlyInterestRate = apr / 100 / 12;
  let monthlyPayment = loanAmount * (monthlyInterestRate /
      (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));

  console.log(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);
  console.log("Would you like to try another? y/n" );
  let answer = readline.question();
  if (answer[0].toLowerCase() !== 'y') break;
}