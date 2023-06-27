// Keep track of the user's score
let userWins = 0;
let computerWins = 0;
let ties = 0;

// Game loop
while (true) {
  // Get the user's choice
  const userChoice = prompt("Enter B for boulder, S for Slicer, or T for Tree:");

  // Generate a random choice for the computer
  const choices = ['B', 'S', 'T'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Compare the choices and determine the winner
  let result;
  if (userChoice === computerChoice) {
    result = "It's a tie!";
    ties++;
  } else if (
    (userChoice === 'B' && computerChoice === 'S') ||
    (userChoice === 'S' && computerChoice === 'T') ||
    (userChoice === 'T' && computerChoice === 'B')
  ) {
    result = "You win!";
    userWins++;
  } else {
    result = "Computer (Cheated but) wins!";
    computerWins++;
  }

  // Show the result
  alert(`You chose ${userChoice}, computer chose ${computerChoice}. ${result}`);
  alert(`Total scores: You - ${userWins}, Computer - ${computerWins}, Ties - ${ties}`);

  // Ask the user if they want to play again
  const playAgain = confirm("Do you want to play again?");
  if (!playAgain) {
    break;
  }
}
