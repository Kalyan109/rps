const x = ["rock", "paper", "scissors"];

function getComputerChoice(){
        const choice = x[Math.floor(Math.random() * x.length)];
        return choice.toLowerCase();
}

        


function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Tie";
    }else if ( playerSelection == "rock" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "rock"){
        return "Computer";
    } else {
        return "You";
            
    }
}

function checkWinner(playerSelection,computerSelection){
    let result = playRound(playerSelection,computerSelection);
    if (result === "Tie"){
        return `Its a tie, ${computerSelection} and ${playerSelection} matches!`;
    }else if (result === "Computer"){
        return `You Loose! ${computerSelection} beats ${playerSelection}`;
    }else {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
}


function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i=0; i<5; i++){
        let playerName = prompt("Rock, Paper or Scissors?")
        let playerSelection = playerName.toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(`Player: ${playerSelection}`)
        console.log(`Computer: ${computerSelection}`)
        console.log(checkWinner(playerSelection,computerSelection));
        if(playRound(playerSelection,computerSelection)=== "You"){
            playerScore++;
        }else if (playRound(playerSelection,computerSelection) === "Computer"){
            computerScore++;
        }
        
        console.log(`Player Score: ${playerScore}`)
        console.log(`Computer Score: ${computerScore}`)
        console.log("--------------------------")
        
    }
    console.log("Game Over!")
    function finalResult(){if (playerScore > computerScore){
        return "Player Wins";
    }else if ( computerScore > playerScore){
        return "Computer Wins";
    }else {
        return "It's a Tie!";
    }
    }
    console.log(finalResult())

}


game()