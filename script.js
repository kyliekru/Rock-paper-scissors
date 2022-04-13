function computerPlay() {
    let ranNum = Math.floor(Math.random() * 3);
    let choice;
    if (ranNum === 0) {
        choice = "Rock";
        return choice;
    } else if (ranNum === 1) {
        choice = "Paper";
        return choice;
    } else if (ranNum === 2) {
        choice = "Scissors";
        return choice;
    } else {
        console.log('error!');
    }
    console.log(choice);
    return choice;
}

