// 1 = piedra  2 = papel  3 = tijera
let playerChoice;
let computerChoice;

function getComputerChoice(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getComputerChoice(1, 3));
