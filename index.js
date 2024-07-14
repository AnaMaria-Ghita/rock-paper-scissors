const choices = ['rock', 'paper', 'scissors'];
function getComputerChoice() {
    const indexRandom = parseInt(Math.random() * choices.length);
    return choices[indexRandom];
}

function getHumanChoice() {
    const humanChoice = prompt('What is your choice?');
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice)
        console.log('It is a tie');
    else if (humanChoice === 'rock' && computerChoice === 'paper'){
        console.log('You lose! Paper beats rock.');
        computerScore++
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors'){
        console.log('You won! Rock beats scissors.');
        humanScore++;
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock'){
        console.log('You won! Paper beats rock.');
        humanScore++;
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors'){
        console.log('You lose! Scissors beats paper.');
        computerScore++;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock'){
        console.log('You lose! Rock beats scissors.');
        computerScore++;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper'){
        console.log('You won! Scissors beats paper.')
        humanScore++;
    }
}

function playGame() {
  for (let i=0; i<5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    }

    console.log(`The final scores are... YOU: ${humanScore}, ROBOT: ${computerScore}`);
    if (computerScore > humanScore)
        console.log("You lost the game. Try again!");
    else console.log('You won the game.')
}

playGame();
