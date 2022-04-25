const weapons = ["rock", "paper", "scissors"];

function roundOne(playerSelection, computerSelection) {
  const player = prompt("Rock, Paper, or Scissors?".toLowerCase());
  const computer = weapons[Math.floor(Math.random() * weapons.length)];
  console.log(player, computer);
  if (player == "rock" && computer == "scissors") {
    return "Player wins!";
  } else if (player == "paper" && computer == "rock") {
    return "Player wins!";
  } else if (player == "scissors" && computer == "paper") {
    return "Player wins!";
  } else if (player == computer) {
    return "It's a tie!";
  } else {
    return "Computer wins!";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let tieScore = 0;
  result = roundOne();

  if (result == "Player wins!") {
    playerScore++;
  } else if (result == "Computer wins!") {
    computerScore++;
  } else {
    tieScore++;
  }

  result = roundOne();

  if (result == "Player wins!") {
    playerScore++;
  } else if (result == "Computer wins!") {
    computerScore++;
  } else {
    tieScore++;
  }

  result = roundOne();

  if (result == "Player wins!") {
    playerScore++;
  } else if (result == "Computer wins!") {
    computerScore++;
  } else {
    tieScore++;
  }

  result = roundOne();

  if (result == "Player wins!") {
    playerScore++;
  } else if (result == "Computer wins!") {
    computerScore++;
  } else {
    tieScore++;
  }

  result = roundOne();

  if (result == "Player wins!") {
    playerScore++;
  } else if (result == "Computer wins!") {
    computerScore++;
  } else {
    tieScore++;
  }

  if (playerScore > computerScore) {
    console.log("Player wins the game!");
  } else if (computerScore > playerScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a tie!");
  }
}

game();
