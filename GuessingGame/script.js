// Generate a random number between 1 and 100
const numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = Number(document.getElementById('guessInput').value);
  attempts++;

  let feedback = document.getElementById('feedback');

  if (isNaN(guess) || guess < 1 || guess > 100) {
    feedback.textContent = "Please enter a valid number between 1 and 100.";
  } else if (guess < numberToGuess) {
    feedback.textContent = "Too low! Try again.";
  } else if (guess > numberToGuess) {
    feedback.textContent = "Too high! Try again.";
  } else {
    feedback.textContent = `Congratulations! You've guessed the number ${numberToGuess} correctly. It took you ${attempts} attempts.`;
  }
}

