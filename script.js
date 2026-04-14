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


function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3)

    if(randomNumber === 0){
        return "rock"
    }else if(randomNumber === 1){
        return "paper"
    }else if(randomNumber === 2){
        return "scissors"
    }else{
        return "Invalid input"
    }
}

function getHumanChoice(){
    let userInput = prompt("Please enter a choice, rock, paper or scossors").toLowerCase()

if(userInput === "rock" || userInput === "paper" || userInput === "scissors"){
    return userInput
}else{
    return "Invalid input"
}
}


function playGame(){
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase()
        
        if(humanChoice === computerChoice){
            console.log("It's a draw")
            return
        }

        if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        humanScore++
        console.log(`You win, ${humanChoice} beats ${computerChoice}`)

        }else{
            computerScore++
            console.log(`You lose ${computerChoice} beats ${humanChoice}`)
        }
    }


 playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())

console.log(`final score: You ${humanScore} - ${computerScore} Computer`)

if(humanScore >  computerScore){
    console.log("You win the game")
}else if(computerScore > humanScore){
    console.log("Computer wins the game")
}else{
    console.log("Its a tie")
}
}

playGame()