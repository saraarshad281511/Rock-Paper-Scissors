let humanScore = 0
let computerScore = 0 //global variables

function getHumanChoice(){
    return prompt("Do you choose rock, paper or scissors?");
}    
function getComputerChoice(){
    let randomNumber =  Math.floor(Math.random() * 3);
    if(randomNumber === 0){
        return "rock";
    } else if(randomNumber === 1){
        return "paper";
    } else {
        return "scissors";
    }
}
function playGame(){

    let humanScore = 0;
    let computerScore = 0;
    
function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return "It's a tie!";
    } else if(humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        return "You win! Rock beats scissors."; }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        return "You win! Paper beats rock."; }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        return "You win! Scissors beats paper."; }
    else {
        computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoice + ".";
    }
}
for (let i = 0; i < 5; i++) {
    console.log("Round" + i + "....");
//get both choices
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);    
}

if (humanScore > computerScore) {
    console.log("You win the game!");
} else if (humanScore < computerScore) {
    console.log("You lose the game!");
} else {
    console.log("The game is a tie!");
}
}
playGame(); 