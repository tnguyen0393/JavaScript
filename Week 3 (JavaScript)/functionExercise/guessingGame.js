function guessingGame() {
  let range = ['0', '100'];
  console.log(range);
  var guess = Math.floor(
    Math.random() * (Number(range[1]) - Number(range[0])) + Number(range[0])
  );

  var stopper = 0;

  var userGuess = prompt(`Guess a number between ${range[0]} and ${range[1]}`);

  while (stopper <= 10) {
    if (guess == userGuess) {
      alert(`You got into: ${userGuess}`);
      break;
    }
    if (userGuess > guess) {
      userGuess = prompt('The number is lower');
    } else {
      userGuess = prompt('The number is higher');
    }
    stopper++;
  }

  if (guess != userGuess) {
    alert(`Sorry, the anser was ${guess}`);
  }
}

guessingGame();
