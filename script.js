const playerScoreElement = document.getElementById('playerScore');
const playerChoiceElement = document.getElementById('playerChoice');

const computerScoreElement = document.getElementById('computerScore');
const computerChoiceElement = document.getElementById('computerChoice');

const resultText = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');

const allGameIcons = document.querySelectorAll('.icons');

const gameAlgorithm = {
    rock: {name: 'Rock', defeats: ['scissors']},
    paper: {name: 'Paper', defeats: ['rock']},
    scissors: {name: 'Scissors', defeats: ['paper']},
}











// ----------------------------------------------------------------------
document.getElementById("heading").style.color = "green";

console.log("Hello!");

function handleClick() {
    // document.getElementById("container2").style.display = "block";

    // document.getElementById("container3").style.display = "none";

    const container2 = document.getElementById("container2");
    const container3 = document.getElementById("container3");

    if (container2.style.display === "block") {
        container2.style.display = "none";
        container3.style.display = "block";
    } else {
        container2.style.display = "block";
        container3.style.display = "none";
    }
}

// Anonymous arrow functions differences

const handleClick2 = () => {
    const container2 = document.getElementById("container2");
    const container3 = document.getElementById("container3");

    if (container2.style.display === "block") {
        container2.style.display = "none";
        container3.style.display = "block";
    } else {
        container2.style.display = "block";
        container3.style.display = "none";
    }
};
