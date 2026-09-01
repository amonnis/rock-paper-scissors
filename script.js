console.log("New game");
let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;

function getComputerChoice() {
  let rnd = Math.floor(Math.random() * 3) + 1;

  if (rnd === 1) {
    computerChoice = "rock";
  } else if (rnd == 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function getHumanChoice() {
  humanChoice = prompt("Choose between rock, paper or scissors: ", "");
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
    console.log("You win! Rock beats scissors");
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore++;
    console.log("You loose! Paper beats rock");
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore++;
    console.log("You loose! Scissors beats paper");
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
    console.log("You win! Paper beats rock");
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore++;
    console.log("You loose! Rock beats scissors");
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
    console.log("You win! Scissors beats paper");
  } else {
    console.log("It's a tie!");
  }
  console.log("Your choice: " + humanChoice + "\n" + 
						  "Computer's choice: " + computerChoice);
  console.log("Your score: " + humanScore + "\n" + 
							 "Computer's score: " + computerScore);
}

function playGame() {
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
}

playGame();