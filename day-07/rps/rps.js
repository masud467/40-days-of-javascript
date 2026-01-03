function rockPaperScissorsGame() {
  console.log("Getting started with the Rock, Paper, Scissors game");
  const userChoicePrompt = prompt("Enter Rock, Paper or Scissors");
  const userChoice = userChoicePrompt.toLowerCase();

  let computerChoice;
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  console.log("User selected", userChoice);
  console.log("Computer selected", computerChoice);

  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("Hurrah!, you won the game.");
  } else if (userChoice === computerChoice) {
    console.log("The game is tied.");
  } else if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log("Oh!, The computer won the game.");
  } else {
    console.log("Please check the input, We did not understand it.");
  }

  const playAgainPrompt = prompt("Do you want to play again? yes/no");
  const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

  if (playAgain === "yes") {
    rockPaperScissorsGame();
  } else {
    console.log("Thanks for playing! See you next time.");
  }
}
rockPaperScissorsGame();
