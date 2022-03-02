function playRound(playerSelection,computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissor") {
        console.log("Player Won! Rock beats scissor!")
    } else if (playerSelection == "scissor" && computerSelection == "rock") {
        console.log(("Computer Won! Rock beats scissor!"))
    } else if (playerSelection == "scissor" && computerSelection == "paper") {
        console.log(("Player Won! scissor beats paper!"))
    } else if (playerSelection == "paper" && computerSelection == "scissor") {
        console.log(("Computer Won! scissor beats paper!"))

    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log(("Player Won! paper beats rock!"))
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log(("Computer Won! paper beats rock!"))
    } else {
        console.log("Tie!")
    }
}
function computerPlay() {
    let choose = ["rock","scissor","paper"];
    var random = Math.floor(Math.random() * 3) + 0;
    randomChoose = choose[random];
    console.log(randomChoose)
    return randomChoose;
}
function game() {
    for (let i = 1; i <6; i++) {
        const playerSelection ="scissor";
        const computerSelection = computerPlay();
        playRound(playerSelection,computerSelection);
        console.log("Game " + i + " Over!\n")
    }

}

// const playerSelection ="rock";
// const computerSelection = "paper"
// const computerSelection = computerPlay();
game();