let humanScore = 0
let computerScore = 0 //global variables

   
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



const title = document.createElement('h1');
title.textContent = "Rock Paper Scissors Game";
document.body.prepend(title);

//Rock button, paper button , scissors button
const images = document.querySelectorAll('img');
images.forEach(image => {
    image.style.display = 'block';
    image.style.margin = '10px';
    image.style.cursor = 'pointer';
});

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.style.display = 'block';
    button.style.margin = '10px';
    button.style.padding = '10px 20px';
    button.style.fontSize = '16px';
    button.style.cursor = 'pointer';
});
const container = document.getElementById('button-container');
container.style.display = 'flex';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';
container.style.backgroundColor = '#c6faf9';
document.body.style.backgroundColor = "#4d7c97";



const result = document.createElement('div');
document.body.appendChild(result);
result.style.position = "fixed";
result.style.bottom = "10px";
result.style.left = "50%";
result.style.transform = "translateX(-50%)";
result.style.backgroundColor = "#f0f0f0";
result.style.padding = "10px 20px";
result.style.borderRadius = "5px";
result.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
result.style.fontSize = "18px";
result.style.fontWeight = "bold";
const roundResult = playRound('rock', getComputerChoice());
result.textContent = roundResult + ` Score: You ${humanScore} - Computer ${computerScore}`;
result.style.display = 'block';

const rockButton = document.getElementById('rock');
rockButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const roundResult = playRound('rock', computerChoice);
    result.textContent = roundResult + ` Score: You ${humanScore} - Computer ${computerScore}`;
});

const paperButton = document.getElementById('paper');
paperButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const roundResult = playRound('paper', computerChoice);
    result.textContent = roundResult + ` Score: You ${humanScore} - Computer ${computerScore}`;
});

const scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const roundResult = playRound('scissors', computerChoice);
    result.textContent = roundResult + ` Score: You ${humanScore} - Computer ${computerScore}`;
}   )    


                               

    

