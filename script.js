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
