let wins = 0;
let ties = 0;
let losses = 0;

function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  if (userChoice === computerChoice) {
    ties++;
    updateScore();
    alert("It's a tie!");
  } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
             (userChoice === 'paper' && computerChoice === 'rock') ||
             (userChoice === 'scissors' && computerChoice === 'paper')) {
    wins++;
    updateScore();
    alert("You win!");
  } else {
    losses++;
    updateScore();
    alert("Computer wins!");
  }
}

function updateScore() {
  document.getElementById('wins').textContent = wins;
  document.getElementById('ties').textContent = ties;
  document.getElementById('losses').textContent = losses;
}
