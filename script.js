
/*

🔹 STEP 1: Computer choice
Create a function called getComputerChoice

Inside the function:
  Generate a random number between 0 and 2

  If number is 0 → return "rock"
  If number is 1 → return "paper"
  If number is 2 → return "scissors"
🔹 STEP 2: Human choice
Create a function called getHumanChoice

Inside the function:
  Ask the user to type rock, paper, or scissors
  Convert the input to lowercase
  Return the user input
🔹 STEP 3: Game setup
Create a function called playGame

Inside playGame:
  Create a variable humanScore and set it to 0
  Create a variable computerScore and set it to 0
🔹 STEP 4: Single round logic
Inside playGame, create a function called playRound that takes:
  humanChoice
  computerChoice

Inside playRound:

  If humanChoice is equal to computerChoice:
    Print "It's a draw"
    Stop the function

  If human wins (rock beats scissors, paper beats rock, scissors beats paper):
    Increase humanScore by 1
    Print "You win" with the correct message

  Otherwise:
    Increase computerScore by 1
    Print "You lose" with the correct message
🔹 STEP 5: Play 5 rounds
Still inside playGame:

Repeat 5 times:
  Get human choice (call getHumanChoice)
  Get computer choice (call getComputerChoice)
  Call playRound with both choices
🔹 STEP 6: Final winner
After 5 rounds:

Print the final scores

If humanScore is greater than computerScore:
  Print "You win the game"

Else if computerScore is greater:
  Print "Computer wins the game"

Else:
  Print "It's a tie"
🔹 STEP 7: Start the game
Call playGame

*/

   //  Scores (GLOBAL VARIABLES)
    let humanScore = 0;
    let computerScore = 0;

    //  Computer choice
    function getComputerChoice() {
      let randomNumber = Math.floor(Math.random() * 3);

      if (randomNumber === 0) return "rock";
      if (randomNumber === 1) return "paper";
      return "scissors";
    }

    // Play one round
    function playRound(humanChoice) {
      const computerChoice = getComputerChoice();

      let result = "";

      if (humanChoice === computerChoice) {
        result = "It's a draw";
      } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
      ) {
        humanScore++;
        result = `You win! ${humanChoice} beats ${computerChoice}`;
      } else {
        computerScore++;
        result = `You lose! ${computerChoice} beats ${humanChoice}`;
      }

      updateUI(result, humanChoice, computerChoice);
    }

    //  Update UI
    function updateUI(result, human, computer) {
      const resultDiv = document.getElementById("result");
      const scoreDiv = document.getElementById("score");

      resultDiv.textContent = `You chose ${human}, computer chose ${computer}. ${result}`;
      scoreDiv.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;

      checkWinner();
    }

    //  Check winner
    function checkWinner() {
      if (humanScore === 5) {
        alert("You won the game!");
        resetGame();
      } else if (computerScore === 5) {
        alert("Computer won the game!");
        resetGame();
      }
    }

    //  Reset game
    function resetGame() {
      humanScore = 0;
      computerScore = 0;

      document.getElementById("result").textContent = "";
      document.getElementById("score").textContent = "Score: You 0 - 0 Computer";
    }

    //  Button Event Listeners
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        playRound(button.id);
      });
    });