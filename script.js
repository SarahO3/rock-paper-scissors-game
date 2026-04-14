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