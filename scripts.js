let playerChoice;
let computerChoice;

function getComputerChoice(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//translate get computerChoice to string where 1 = rock  2 = scissors  3 = paper
function realComputerChoice() {
  if (getComputerChoice() === 1) {
    computerChoice = "rock";
  } else if (getComputerChoice() === 2) {
    computerChoice = "scissors";
  } else computerChoice = "paper";
}

function getPlayerChoice() {
  playerChoice = prompt("Rock, Scissors, Paper: ").toLowerCase();
}

function gameRPS() {
  console.log("1... 2... 3... Rock, Scissors, Paper!");
  getComputerChoice();
  realComputerChoice();
  getPlayerChoice();
  console.log(`You chose ${playerChoice}, Computer chose ${computerChoice}.`);
  // player choose rock
  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      console.log("It's a tie!");
    } else if (computerChoice === "paper") {
      console.log("Computer wins!");
    } else console.log("You win!");
  }
  //player choose scissors
  else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      console.log("Computer Wins!");
    } else if (computerChoice === "paper") {
      console.log("You Win!");
    } else console.log("It's a tie!");
  }
  //player choose paper
  else {
    if (computerChoice === "rock") {
      console.log("You win!");
    } else if (computerChoice === "paper") {
      console.log("It's a tie!");
    } else console.log("Computer wins!");
  }
}

gameRPS();
