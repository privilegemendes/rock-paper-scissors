const playerScoreElement = document.getElementById("playerScore");
const playerChoiceElement = document.getElementById("playerChoice");

const computerScoreElement = document.getElementById("computerScore");
const computerChoiceElement = document.getElementById("computerChoice");

const resultText = document.getElementById("resultText");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");

const allGameIcons = document.querySelectorAll(".btn");

const gameAlgorithm = {
  rock: { name: "Rock", defeats: ["scissors"] },
  paper: { name: "Paper", defeats: ["rock"] },
  scissors: { name: "Scissors", defeats: ["paper"] },
};

// console.log(allGameIcons)

// Reset all 'selected' icons
function resetSelected() {
	allGameIcons.forEach((icon)=>{
		icon.classList.remove('selected');
	});

}

//Passing player selection value and styling icons

function select(playerChoice) {
  resetSelected();
  //Add selected stysling
  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerChoiceElement.textContent = "--- Rock";
      break;
    case "paper":
      playerPaper.classList.add("selected");
      playerChoiceElement.textContent = "--- Paper";
      break;
    case "scissors":
      playerScissors.classList.add("selected");
      playerChoiceElement.textContent = "--- Scissors";
      break;

    default:
      break;
  }
}
