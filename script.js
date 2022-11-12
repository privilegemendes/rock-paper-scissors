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

const choices = {
  rock: { name: "Rock", defeats: ["scissors"] },
  paper: { name: "Paper", defeats: ["rock"] },
  scissors: { name: "Scissors", defeats: ["paper"] },
};

// console.log(allGameIcons)
let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = "";

// Reset all 'selected' icons
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected");
  });
}

// Random computer choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.3) {
    computerChoice = "rock";
  } else if (computerChoiceNumber <= 0.6) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
}

// Add 'selected' styling & computerChoice
function displayComputerChoice() {
  //Add selected stysling
  switch (computerChoice) {
    case "rock":
      computerRock.classList.add("selected");
      computerChoiceElement.textContent = "--- Rock";
      break;
    case "paper":
      computerPaper.classList.add("selected");
      computerChoiceElement.textContent = "--- Paper";
      break;
    case "scissors":
      computerScissors.classList.add("selected");
      computerChoiceElement.textContent = "--- Scissors";
      break;

    default:
      break;
  }
}

//Passing player, increase scores, update resultText
function updateScore(playerChoice) {
  console.log(playerChoice, computerChoice);
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie";
  } else {
    const choice = choices[playerChoice];
    console.log(choice.defeats.indexOf(computerChoice));
    if (choice.defeats.indexOf(computerChoice) > -1) {
      resultText.textContent = "You won!";
      playerScoreNumber++;
      playerScoreElement.textContent = playerScoreNumber;
    } else {
      resultText.textContent = "You lose!";
      computerScoreNumber++;
      computerScoreElement.textContent = computerScoreNumber;
    }
  }
}

//Call functions to process turn
function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

//Passing player selection value and styling icons

function select(playerChoice) {
  checkResult(playerChoice);
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
