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
