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

const sound = document.getElementById('audio');

const allGameIcons = document.querySelectorAll('.btn');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors'] },
  paper: { name: 'Paper', defeats: ['rock'] },
  scissors: { name: 'Scissors', defeats: ['paper'] },
};

// console.log(allGameIcons)
let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';

// Reset all 'selected' icons
function resetSelected() {
  allGameIcons.forEach(icon => {
    icon.classList.remove('selected');
  });
}

// Reset score and & playerChoice/computerChoice
function resetAll() {}

/* computerRandomChoice */
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.3) {
    computerChoice = 'rock';
  } else if (computerChoiceNumber <= 0.6) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
}

/*************** displayComputerChoice ***************/
function displayComputerChoice() {
  //Add selected stysling
  switch (computerChoice) {
    case 'rock':
      //computerRock.classList.add('selected');
      //computerChoiceElement.textContent = '--- Rock';
      document.getElementById('computer-choice').src = './assets/rock.png';
      break;
    case 'paper':
      //computerPaper.classList.add('selected');
      //computerChoiceElement.textContent = '--- Paper';
      document.getElementById('computer-choice').src = './assets/paper.png';
      break;
    case 'scissors':
      //computerScissors.classList.add('selected');
      //computerChoiceElement.textContent = '--- Scissors';
      document.getElementById('computer-choice').src = './assets/scissors.png';
      break;

    default:
      break;
  }
}

/*************** updateScore ************************/
function updateScore(playerChoice) {
  console.log(playerChoice, computerChoice);
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie";
  } else {
    const choice = choices[playerChoice];
    console.log(choice.defeats.indexOf(computerChoice));
    if (choice.defeats.indexOf(computerChoice) > -1) {
      resultText.textContent = 'You won!';
      playerScoreNumber++;
      playerScoreElement.textContent = playerScoreNumber;
    } else {
      resultText.textContent = 'You lose!';
      computerScoreNumber++;
      //computerScoreElement.textContent = computerScoreNumber;
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

function handleClick(playerChoice) {
  console.log(playerChoice);
  checkResult(playerChoice);
  //Add selected stysling
  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceElement.textContent = '--- Rock';
      document.getElementById('player-choice').src = './assets/rock.png';
      document.getElementById('audio').src = './assets/PUNCHMEDIUM.mp3';
      audioPlay();
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceElement.textContent = '--- Paper';
      document.getElementById('player-choice').src = './assets/paper.png';
      document.getElementById('audio').src = './assets/MELEEMISS2.mp3';
      audioPlay();
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceElement.textContent = '--- Scissors';
      document.getElementById('player-choice').src = './assets/scissors.png';
      document.getElementById('audio').src = './assets/SWORDHIT.mp3';
      audioPlay();
      break;

    default:
      break;
  }
}

function audioPlay() {
  if (document.getElementById('audio_switch').src === './assets/audioOn.png') {
    sound.play();
  } else {
    document.getElementById('audio_switch').src = './assets/audioOff.png';
  }
  return (document.getElementById('audio_switch').src = './assets/audioOn.png');
}
// function handleClick() {
//   const container2 = document.getElementById("container2");
//   const container3 = document.getElementById("container3");

//   if (container2.style.display === "block") {
//       container2.style.display = "none";
//       container3.style.display = "block";
//   } else {
//       container2.style.display = "block";
//       container3.style.display = "none";
//   }
// }
