'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing..';
  displayMessage('Start guessing..');

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#46b4b8';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.guess').value = ' ';
});

document.querySelector('.check').addEventListener('click', function () {
  let guessNumber = Number(document.querySelector('.guess').value);

  if (!guessNumber) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');
  } else if (guessNumber === secretNumber) {
    // document.querySelector('.message').textContent = '🎉Correct Number!';
    displayMessage('🎉Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#2cc94c';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guessNumber > secretNumber ? '📈Too High' : '📉Too Low';
      displayMessage(guessNumber > secretNumber ? '📈Too High' : '📉Too Low');
      score -= 1;
    } else {
      // document.querySelector('.message').textContent = '💥You lost the game';
      displayMessage('💥You lost the game');
      score = 0;
    }
    document.querySelector('.score').textContent = score;
  }
});
