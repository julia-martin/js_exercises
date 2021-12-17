const readline = require('readline-sync');
const VALID_CHOICES = {r: 'rock', p: 'paper', sc: 'scissors', l: 'lizard', sp: 'spock'};
let playerScore = 0;
let computerScore = 0;

// function declarations
function prompt(message) {
  console.log(`=> ${message}`);
}

function getPlayerChoice() {
  prompt('Type r for rock, p for paper, sc for scissors, l for lizard, or sp for spock');
  let choice = readline.question();

  while (!Object.keys(VALID_CHOICES).includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  return choice;
}

function incrementScore(user) {
  if (user === 'player') {
    playerScore += 1;
  } else if (user === 'computer') {
    computerScore += 1;
  }
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  if (((choice === 'rock') && (computerChoice === 'scissors' || computerChoice === 'lizard')) || ((choice === 'paper') && (computerChoice === 'rock' || computerChoice === 'spock')) || ((choice === 'scissors') && (computerChoice === 'paper' || computerChoice === 'lizard')) || ((choice === 'spock') && (computerChoice === 'rock' || computerChoice === 'scissors')) || ((choice === 'lizard') && (computerChoice === 'spock' || computerChoice === 'paper'))) {
    prompt('You win!');
    incrementScore('player');
  } else if (choice === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt("Computer wins!");
    incrementScore('computer');
  }
}

function askToPlayAgain() {
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  return answer;
}

// main
while (true) {
  prompt("Welcome to Rock, Paper, Scissors! We will determine the winner after the first person has won 3 games.");

  let choiceKey = getPlayerChoice();
  let choice = VALID_CHOICES[choiceKey];

  let randomIndex = Math.floor(Math.random() *
    Object.values(VALID_CHOICES).length);
  let computerChoice = Object.values(VALID_CHOICES)[randomIndex];
  displayWinner(choice, computerChoice);

  if (playerScore === 3) {
    prompt("Congrats, you're the grand winner!");
    break;
  } else if (computerScore === 3) {
    prompt("Sorry, the computer has won!");
    break;
  }

  let answer = askToPlayAgain();
  if (answer !== 'y' || answer !== 'yes') break;
  console.clear();
}
