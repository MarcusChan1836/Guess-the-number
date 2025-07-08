const secretNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const guess = Number(document.getElementById('guess').value);
  const message = document.getElementById('message');

  if (guess < 1 || guess > 100) {
    message.textContent = "Please enter a number between 1 and 100.";
  } else if (guess < secretNumber) {
    message.textContent = "Too low! Go Higher.";
  } else if (guess > secretNumber) {
    message.textContent = "Too high! Go Lower.";
  } else {
    message.textContent = "🎉 Congratulations, You guessed it!";
  }
}
