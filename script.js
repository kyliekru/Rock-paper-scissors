function computerPlay() {
    let ranNum = Math.floor(Math.random() * 3);
    let choice;
    if (ranNum === 0) {
        choice = "rock";
        return choice;
    } else if (ranNum === 1) {
        choice = "paper";
        return choice;
    } else if (ranNum === 2) {
        choice = "scissors";
        return choice;
    } else {
        console.log('error!');
    }
    console.log(choice);
    return choice;
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let winCounter = 0;
    let lossCounter = 0;
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        console.log('It\'s a tie!');
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        winCounter -= 1;
        console.log('Paper beats rock! Computer wins.');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        winCounter += 1;
        console.log('Rock beats scissors! You win.');
    }

    if (playerSelection === 'paper' && computerSelection === 'paper') {
        console.log('It\'s a tie!');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        winCounter += 1;
        console.log('Paper beats rock! You win.');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        winCounter -= 1;
        console.log('Scissors beats paper! Computer wins.');
    }

    if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        console.log('It\'s a tie!')
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        winCounter -= 1;
        console.log('Rock beats scissors! Computer wins.');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        winCounter += 1;
        console.log('Scissors beats paper! You win.');
    }
    return winCounter;
}

function game() {

    let winCount = 0;
    for (let i = 0; i < 5; i++) {
        let choice = prompt('Rock, paper, or scissors?');
        let computerChoice = computerPlay();
        winCount += playRound(choice, computerChoice);
    }

    if (winCount > 0) {
        alert('You won the game with ' + winCount + ' round wins!');
    } else if (winCount === 0) {
        alert('It\'s a draw! Crazy!');
    } else if (winCount < 0) {
        winCount = abs(winCount);
        alert('The computer won the game with ' + winCount + ' round wins!');
    }
}

