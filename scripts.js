// 1 = piedra  2 = papel  3 = tijera
let playerChoice;
let computerChoice;

function getComputerChoice(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getPlayerChoice() {
  playerChoice = prompt("Rock, Scissors, Paper!: ").toLowerCase();
}

function gameRPS(playerChoice, computerChoice) {
  console.log("1... 2... 3...");
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
    if (computer === "rock") {
      console.log("You win!");
    } else if (computer === "paper") {
      console.log("It's a tie!");
    } else console.log("Computer wins!");
  }
}
