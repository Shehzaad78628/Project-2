let wins = 0;
let ties = 0;
let losses = 0;

function playRPS(rounds) {
  for (let round = 1; round <= rounds; round++) {
    let userChoice = prompt(`Round ${round}: Enter r for Rock, p for Paper, or s for Scissors:`);
    if (!isValidChoice(userChoice)) {
      alert("Invalid choice. Please enter r, p, or s.");
      round--; 
      continue;
    }
    let computerChoice = Math.floor(Math.random() * 3);

    let result = determineWinner(userChoice, computerChoice);

    if (result === "win") {
      wins++;
      alert("You won this round!");
    } else if (result === "lose") {
      losses++;
      alert("You lost this round!");
    } else {
      ties++;
      alert("It's a tie!");
    }
  }
  alert(`Game Over!\nWins: ${wins}\nTies: ${ties}\nLosses: ${losses}`);
}
function isValidChoice(choice) {
  return ['r', 'p', 's'].includes(choice.toLowerCase());
}
function determineWinner(user, computer) {
  if ((user === 'r' && computer === 2) || (user === 'p' && computer === 0) || (user === 's' && computer === 1)) {
    return "win";
  } else if ((user === 'r' && computer === 1) || (user === 'p' && computer === 2) || (user === 's' && computer === 0)) {
    return "lose";
  } else {
    return "tie";
  }
}
let rounds = prompt("How many rounds do you want to play?");
rounds = parseInt(rounds);
if (isNaN(rounds) || rounds <= 0) {
  alert("Invalid input. Please enter a positive number for rounds.");
} else {
  playRPS(rounds);
}