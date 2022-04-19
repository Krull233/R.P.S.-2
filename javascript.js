const weapons = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return weapons[Math.floor(Math.random() * weapons.length)];
}

console.log(computerPlay());
