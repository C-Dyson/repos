function getComputerChoice() {
    const gameOptionsList = ["rock", "paper", "scissors"];
    const randomOption = Math.floor(gameOptionsList.length * Math.random());
    return gameOptionsList[randomOption];
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper";
    } else if (playerSelection === computerSelection) {
        return "It's a Tie!";
    } else {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}

function playGame(rounds) {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < rounds; i++) {
        const playerSelection = prompt("Enter your choice (rock, paper, scissors):");
        if (!["rock", "paper", "scissors"].includes(playerSelection.toLowerCase())) {
            console.log("Invalid choice. Please choose from rock, paper, or scissors.");
            continue;
        }

        const computerSelection = getComputerChoice();

        console.log("Round " + (i + 1));
        console.log("You have chosen " + playerSelection.toLowerCase() + ", we have chosen " + computerSelection);

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }

        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);
        console.log("------------------------");
    }

    console.log("Game Over!");
    console.log("Final Score - Player: " + playerScore + ", Computer: " + computerScore);
}

playGame(5);
