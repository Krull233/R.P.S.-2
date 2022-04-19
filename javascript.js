const weapons = ["rock", "paper", "scissors"];

function roundOne(playerSelection, computerSelection) {
  const player = prompt("Rock,Paper, or Scissors?".toLowerCase());
  const computer = weapons[Math.floor(Math.random() * weapons.length)];

  if ((player == "rock", computer == "scissors")) {
    return "Player Wins!";
  } else if ((player == "paper", computer == "rock")) {
    return "Player wins!";
  } else if ((player == "scissors", computer == "paper")) {
    return "Player wins!";
  } else {
    return "Computer wins!";
  }
}

console.log(roundOne());

function computerPlay() {
  return weapons[Math.floor(Math.random() * weapons.length)];
}

//console.log(computerPlay());
