const Min_Number = 1;
const Max_Number = 10;
function guessingSecretNumberGame() {
  const secretNumber = Math.floor(Math.random() * Max_Number) + Min_Number;
  let attempts = 0;
  let guess = null;

  console.log("Welcome to the Number Guessing Game");
  console.log("Try to guess a number between 1 and 10.");

  while (guess !== secretNumber) {
    const userGuessEnterNumberPrompt = prompt(
      "Please Enter Your Guess Number between 1 and 10"
    );
    guess = parseInt(userGuessEnterNumberPrompt);

    if (isNaN(guess) || guess < Min_Number || guess > Max_Number) {
      console.log(
        `Invalid input! Please enter a number between ${Min_Number} and ${Max_Number}.`
      );
      continue;
    }
    attempts++;

    if (guess < secretNumber) {
      console.log("Too Low! Try again.");
    } else if (guess > secretNumber) {
      console.log("Too High! Try again.");
    } else {
      console.log(
        `🎉 Congrats! You guessed the number in ${attempts} attempts.`
      );
      break;
    }
  }

  const playAgainPrompt = prompt("Do you want to play again? (yes/no)");
  const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";
  if (playAgain === "yes") {
    guessingSecretNumberGame();
  } else {
    console.log("Thanks for playing game! See you next time.");
  }
}
guessingSecretNumberGame();
