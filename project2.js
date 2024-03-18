let wins = 0;
let ties = 0;
let losses = 0;

function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  const resultDisplay = document.getElementById('result');

  if (userChoice === computerChoice) {
    ties++;
    updateScore();
    resultDisplay.textContent = "It's a tie!";
  } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
             (userChoice === 'paper' && computerChoice === 'rock') ||
             (userChoice === 'scissors' && computerChoice === 'paper')) {
    wins++;
    updateScore();
    resultDisplay.textContent = `You win! You chose ${userChoice} and computer chose ${computerChoice}.` ;
  } else {
    losses++;
    updateScore();
    resultDisplay.textContent = `You lost! The computer chose ${computerChoice} and you chose ${userChoice}.`;
  }
}

function updateScore() {
  document.getElementById('wins').textContent = wins;
  document.getElementById('ties').textContent = ties;
  document.getElementById('losses').textContent = losses;
}


