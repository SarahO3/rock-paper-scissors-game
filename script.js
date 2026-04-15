
// checking for prime number from number 2 to 10
// let num = 10

// outer:
// for(let i = 2; i <= num; i++){
//   for(let j = 2; j < i; j++){
//     if(i % j === 0){
//       continue outer
//     }
//   }
//   alert(i)
// }


// array

// let styles = ["jazz", "blues"]
// styles.push("roch-n-roll")

// styles[Math.floor(styles.length - 1) / 2] = "classics"


// alert(styles.shift())


// styles.unshift("rap", "raggae")

// console.log(styles)





// count down 10
/*
Add code to loop from 10 down to 0. We've provided you with an initializer — let i = 10;.
For each iteration, create a new paragraph and append it to the output <div>, which we've selected using const output = document.querySelector('.output');. We've provided you with three code lines inside comments that need to be used somewhere inside the loop:
const para = document.createElement('p'); — creates a new paragraph.
output.appendChild(para); — appends the paragraph to the output <div>.
para.textContent = — makes the text inside the paragraph equal to whatever you put on the right-hand side, after the equals sign.
For the different iteration numbers listed below, write code to insert the required text inside the paragraph (you'll need a conditional statement and multiple para.textContent = lines):
If the number is 10, print "Countdown 10" to the paragraph.
If the number is 0, print "Blast off!" to the paragraph.
For any other number, print just the number to the paragraph.
*/

const output = document.querySelector(".output");
output.textContent = "";

let i = 10;

while (i >= 0) {
  const para = document.createElement('p');

  if (i === 10) {
    para.textContent = `Countdown ${i}`;
  } else if (i === 0) {
    para.textContent = "Blast off!";
  } else {
    para.textContent = i;
  }

  output.appendChild(para);
  i--;
}



// guest list to let in


const people = [
  "Chris", "Anne", "Colin", "Terri",
  "Phil", "Lola", "Sam", "Kay", "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");

let admittedList = [];
let refusedList = [];

for (const person of people) {
  if (person === "Phil" || person === "Lola") {
    refusedList.push(person);
  } else {
    admittedList.push(person);
  }
}

// take each item in admitted and refused array and join them with comma, then add fullstop to the last item
admitted.textContent = "Admit: " + admittedList.join(", ") + ".";
refused.textContent = "Refuse: " + refusedList.join(", ") + ".";

/*
Sum input numbers
importance: 4
Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero.

Run the demo
*/

function sumInput(){
  let arrs = []

  while (true) {
let userInput = prompt("Please enter a number", 0)


// should we cancel
if(userInput === "" || userInput === null || !isFinite(userInput)) break

  arrs.push(+userInput)
  }

let sum = 0
for (let arr of arrs){
  sum += arr
}
  
return sum
}

alert(sumInput())
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