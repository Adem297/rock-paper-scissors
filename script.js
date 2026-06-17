function getComputerChoice(){
    const choices=["Rock","Paper","Scissors"];
    const randomIndex=Math.floor(Math.random()*3);
    return choices[randomIndex];
}
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

function getHumanChoice(){
    const choice=prompt("Enter Rock, Paper or Scissors:").toLowerCase();
    return choice.charAt(0).toUpperCase() + choice.slice(1);
}
console.log(getHumanChoice());

function playRound(humanChoice,computerChoice){
    if(humanChoice==computerChoice){
        return "Its a tie!";

    }
    else if(
        (humanChoice=="Rock" && computerChoice=="Scissors")|| 
        (humanChoice=="Scissors"  && computerChoice=="Paper")||
        (humanChoice=="Paper" && computerChoice=="Rock") 
    )
    return "You win " + humanChoice + " beats " + computerChoice;
    else{
        return "You lose " + computerChoice + " beats " + humanChoice;
    }
}
console.log(playRound("Rock", "Scissors"));
console.log(playRound("Rock", "Paper"));
console.log(playRound("Rock", "Rock"));

function playGame(){
    let humanScore = 0
    let computerScore = 0
    for(let i = 0 ; i < 5 ; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result=playRound(humanChoice,computerChoice);
        console.log(result);

        if(result.startsWith("You win")){
            humanScore++;
        }
        else if(result.startsWith("You lose")){
            computerScore++;
        }
    }
     console.log("Final Score - You: " + humanScore + " Computer: " + computerScore);

     if(humanScore>computerScore){
        console.log("You won the game");

     }else if(computerScore>humanScore){
        console.log("Computer won the game");

     }else{
        console.log("its a tie game");
     }
}
playGame();
