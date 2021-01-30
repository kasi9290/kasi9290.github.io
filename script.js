'use strict';
//selecting elements and storing in variables for better future use
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const player0Current = document.querySelector('#current--0');
const player1Current = document.getElementById('current--1');
const player0Score = document.querySelector('#score--0');
const player1Score = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
//starting conditions
// player0Score.textContent = 0;
// player1Score.textContent = 0;
// dice.classList.add('hidden');
let scores, currentScore, activePlayer, playing;
//let currentScore = 0;
// let score0 = 0;
const init = function () {
  scores = [0, 0];
  activePlayer = 0;
  playing = true;
  currentScore = 0;

  player0Score.textContent = 0;
  player1Score.textContent = 0;
  player0Current.textContent = currentScore;
  player1Current.textContent = currentScore;

  dice.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player1.classList.remove('player--active');
  player0.classList.add('player--active');
};

init();
// let score1 = 0;
// let scores = [0, 0];
// let activePlayer = 0;
// let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

rollDice.addEventListener('click', function () {
  //generate a random dice roll, then display dice, then check if roll is one
  //if one switch player
  if (playing) {
    let diceValue = Math.trunc(Math.random() * 6) + 1;
    let imgName = 'dice-' + diceValue + '.png';
    console.log(diceValue);
    //display dice

    //display as per number
    dice.src = imgName;
    dice.classList.remove('hidden');
    if (diceValue !== 1) {
      // if (player0.classList.contains('player--active')) {
      //   currentScore += diceValue;
      //   player0Current.textContent = currentScore;
      // } else {
      //   currentScore += diceValue;
      //   player1Current.textContent = currentScore;
      // }
      currentScore += diceValue;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      switchPlayer();
      // if (player0.classList.contains('player--active')) {
      //   player0.classList.remove('player--active');
      //   player1.classList.add('player--active');
      //   player0Current.textContent = 0;
      //   currentScore = 0;
      // } else {
      //   player1.classList.remove('player--active');
      //   player0.classList.add('player--active');
      //   player1Current.textContent = 0;
      //   currentScore = 0;
      // }
    }
  }
});

hold.addEventListener('click', function () {
  //   activePlayer === 0
  //     ? (scores[0] += currentScore)
  //     : (scores[1] += currentScore);
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
      dice.classList.add('hidden');
    } else {
      switchPlayer();
    }

    //   if (player0.classList.contains('player--active')) {
    //     player0.classList.remove('player--active');
    //     player1.classList.add('player--active');
    //     player0Current.textContent = 0;
    //     score0 += currentScore;
    //     player0Score.textContent = score0;
    //     currentScore = 0;
    //   } else {
    //     player1.classList.remove('player--active');
    //     player0.classList.add('player--active');
    //     player1Current.textContent = 0;
    //     score1 += currentScore;
    //     player1Score.textContent = score1;
    //     currentScore = 0;
    //   }
  }
});

newGame.addEventListener('click', init);
//do not call function init() just provide init js calls function

//
