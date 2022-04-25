const weapons = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function roundOne(playerSelection, computerSelection) {
  const player = prompt("Rock, Paper, or Scissors?".toLowerCase());
  const computer = weapons[Math.floor(Math.random() * weapons.length)];
  console.log(player, computer);
  if (player == "rock" && computer == "scissors") {
    playerScore++;
    return "Player wins!";
  } else if (player == "paper" && computer == "rock") {
    playerScore++;
    return "Player wins!";
  } else if (player == "scissors" && computer == "paper") {
    playerScore++;
    return "Player wins!";
  } else if (player == computer) {
    tieScore++;
    return "It's a tie!";
  } else {
    computerScore++;
    return "Computer wins!";
  }
}

function game() {
  roundOne();
  roundOne();
  roundOne();
  roundOne();
  roundOne();

  if (playerScore > computerScore) {
    console.log("Player wins the game!");
  } else if (computerScore > playerScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a tie!");
  }
}

game();
