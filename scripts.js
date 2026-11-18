function getComputerChoice() {
    let a = Math.floor(Math.random() * 3);
    if (a == 0) {
        return "rock";
    }

    else if (a == 1) {
        return "paper";
    }
    
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let  b = prompt("Choose Rock, Paper, or Scissors");
    return b;
}


function playGame(humanChoice, computerChoice) {

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper" || humanChoice == "rock" && computerChoice == "scissors"){
         humanScore = humanScore + 1;
          return 'You win ' + humanChoice + ' beats ' + computerChoice + '.';
        }

        else if (computerChoice == "paper" && humanChoice == "rock" || computerChoice == "scissors" && humanChoice == "paper" || computerChoice == "rock" && humanChoice == "scissors"){
          computerScore = computerScore + 1;
          return 'You lose ' + computerChoice + ' beats ' + humanChoice;
        }
        else if (computerChoice == "paper" && humanChoice == "paper" || computerChoice == "rock" && humanChoice == "rock" || computerChoice == "scissors" || humanChoice == "scissors"){
            return "It's a draw!"
    }
    }

    let humanSelection = getHumanChoice().toLowerCase();
    let computerSelection = getComputerChoice();

    return playRound(humanSelection, computerSelection);
}

let humanScore = 0;  
let computerScore = 0;

console.log(playGame(), humanScore, computerScore);
console.log(playGame(), humanScore, computerScore);
console.log(playGame(), humanScore, computerScore);
console.log(playGame(), humanScore, computerScore);
console.log(playGame(), humanScore, computerScore);