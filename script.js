const playerSelected = document.getElementById('playerChoice');
const computerSelected = document.getElementById('computerChoice');
const playerScore = document.getElementById('playerValue');
const computerScore = document.getElementById('computerValue');
const image = document.querySelector('.image');
const btnHeads = document.getElementById('heads');
const btnTails = document.getElementById('tails');
const result = document.getElementById('result');

let coin = [0, 1];

let userScore = 0;
let compScore = 0;

btnHeads.addEventListener('click', function () {
  let headsOrTails = random();
  if (headsOrTails === 1) {
    userScore++;

    playerSelected.innerText = 'Heads';
    computerSelected.innerText = 'Heads';

    image.style.backgroundImage = "url('./heads.png')";
    updateScores();
  }
  if (headsOrTails === 0) {
    compScore++;

    playerSelected.innerText = 'Heads';
    computerSelected.innerText = 'Tails';

    image.style.backgroundImage = "url('./tails.png')";
    updateScores();
  }
  endGame(userScore, compScore);
});

btnTails.addEventListener('click', function () {
  let headsOrTails = random();

  if (headsOrTails === 1) {
    compScore++;

    playerSelected.innerText = 'Tails';
    computerSelected.innerText = 'Heads';

    image.style.backgroundImage = "url('./heads.png')";
    updateScores();
  }
  if (headsOrTails === 0) {
    userScore++;

    playerSelected.innerText = 'Tails';
    computerSelected.innerText = 'Tails';

    image.style.backgroundImage = "url('./tails.png')";
  }
  updateScores();
  endGame(userScore, compScore);
});

function random() {
  const compChoice = Math.floor(Math.random() * 2);
  console.log(compChoice);
  return compChoice;
}

function updateScores() {
  playerSelected.style.color = 'green';
  computerSelected.style.color = 'blue';
  playerScore.innerText = userScore;
  computerScore.innerText = compScore;
}

function endGame(score1, score2) {
  if (score1 > 4 || score2 > 4) {
    result.innerText = 'You WIN!';
    playerScore.innerText = '';
    computerScore.innerText = '';
    playerSelected.innerText = '';
    computerSelected.innerText = '';
    image.style.backgroundImage = '';
  }
}
