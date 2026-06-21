function getComputerChoice(){
    const choices=["Rock","Paper","Scissors"];
    const randomIndex=Math.floor(Math.random()*3);
    return choices[randomIndex];
}
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());


//console.log(getHumanChoice());
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Rock")
  ) {
    humanScore++;
    return "You win! " + humanChoice + " beats " + computerChoice;
  } else {
    computerScore++;
    return "You lose! " + computerChoice + " beats " + humanChoice;
  }
}

function updateScore() {
  const scoreDiv = document.querySelector("#score");
  scoreDiv.textContent = "Score - You: " + humanScore + " | Computer: " + computerScore;
}

function playGame(humanChoice) {
  const computerChoice = getComputerChoice();
  const result = playRound(humanChoice, computerChoice);

  const resultDiv = document.querySelector("#result");
  resultDiv.textContent = result;

  updateScore();
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
  playGame("Rock");
});

paperBtn.addEventListener("click", () => {
  playGame("Paper");
});

scissorsBtn.addEventListener("click", () => {
  playGame("Scissors");
});
// playGame(); 
