//& Rock, Paper, Scissors game
// logic code : Js

let playerScore = 0;
let computerScore = 0;

const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultDiv = document.getElementById("result");

// Function to get the computer's choice randomly
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play a single round of the game
function playRound(playerSelection, computerSelection) {
    // Determine the winner
    if (
            (playerSelection === 'rock' && computerSelection === 'Scissors') ||
            (playerSelection === 'paper' && computerSelection === 'Rock') ||
            (playerSelection === 'scissors' && computerSelection === 'Paper')
         ) {
                playerScore++;
                playerScoreSpan.textContent = playerScore;
                resultDiv.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
            } 
    else if (
                (playerSelection === 'rock' && computerSelection === 'Paper') ||
                (playerSelection === 'paper' && computerSelection === 'Scissors') ||
                (playerSelection === 'scissors' && computerSelection === 'Rock')
                ) 
            {
                computerScore++;
                computerScoreSpan.textContent = computerScore;
                resultDiv.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
            } 
    else 
    {
        resultDiv.textContent = "It's a Tie! Both chose " + playerSelection;
    }
}

// Function to handle the player's selection
function handleSelection(playerChoice) {
    const computerSelection = getComputerChoice();
    playRound(playerChoice, computerSelection);
}

// Event listeners for player's choices
document.getElementById("rock").addEventListener("click", () => handleSelection("rock"));
document.getElementById("paper").addEventListener("click", () => handleSelection("paper"));
document.getElementById("scissors").addEventListener("click", () => handleSelection("scissors"));
