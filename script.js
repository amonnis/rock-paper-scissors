let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;

let btn = document.querySelectorAll('button');

btn.forEach((button) => {
  button.addEventListener('click', (e) => {
    humanChoice = button.textContent;
    playRound(humanChoice, getComputerChoice());
  });
});

let result = document.querySelector('div');
result.style.whiteSpace = 'pre-line';

function getComputerChoice() {
  let rnd = Math.floor(Math.random() * 3) + 1;

  if (rnd === 1) {
    computerChoice = 'rock';
  } else if (rnd == 2) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
  return computerChoice;
}

function playRound(humanChoice, computerChoice) {
  result.textContent = '';

  if (humanChoice == 'Rock' && computerChoice == 'scissors') {
    humanScore++;
    result.textContent += '\nYou win! Rock beats scissors\n\n';
  } else if (humanChoice == 'Rock' && computerChoice == 'paper') {
    computerScore++;
    result.textContent += '\nYou loose! Paper beats rock\n\n';
  } else if (humanChoice == 'Paper' && computerChoice == 'scissors') {
    computerScore++;
    result.textContent += '\nYou loose! Scissors beats paper\n\n';
  } else if (humanChoice == 'Paper' && computerChoice == 'rock') {
    humanScore++;
    result.textContent += '\nYou win! Paper beats rock\n\n';
  } else if (humanChoice == 'Scissors' && computerChoice == 'rock') {
    computerScore++;
    result.textContent += '\nYou loose! Rock beats scissors\n\n';
  } else if (humanChoice == 'Scissors' && computerChoice == 'paper') {
    humanScore++;
    result.textContent += '\nYou win! Scissors beats paper\n\n';
  } else {
    result.textContent += "\nIt's a tie!\n\n";
  }

  result.textContent +=
    'Your choice: ' +
    humanChoice +
    '\n' +
    "Computer's choice: " +
    computerChoice +
    '\n' +
    '\n';
  result.textContent +=
    'Your score: ' +
    humanScore +
    '\n' +
    "Computer's score: " +
    computerScore +
    '\n' +
    '\n' +
    '\n';

  if (humanScore == 5) {
    humanScore = 0;
    computerScore = 0;
    result.textContent += 'YOU WON!';
  } else if (computerScore == 5) {
    humanScore = 0;
    computerScore = 0;
    result.textContent += 'THE COMPUTER WON!';
  }
}