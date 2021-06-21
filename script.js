'use strict';

//selecting Elements
let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1'); // getElementById can only be used to call by id and where as query selector can be used for both class abd selector
let diceEl = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
let bntRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');
let section0El = document.querySelector('.player--0');
let section1El = document.querySelector('.player--1');

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let CurrentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
let playing = true;
let SwitchPlayer = () => {
  activePlayer = activePlayer === 0 ? 1 : 0;
  CurrentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    CurrentScore;
  if (activePlayer === 1) {
    document.getElementById('current--0').textContent = CurrentScore;
    section0El.classList.remove('player--active');
    section1El.classList.add('player--active');
  } else {
    document.getElementById('current--1').textContent = CurrentScore;
    section0El.classList.add('player--active');
    section1El.classList.remove('player--active');
  }
};

// Rolling Dice Functionality
bntRoll.addEventListener('click', function () {
  if (playing) {
    //Generating a random dice number
    let dice = Math.trunc(Math.random() * 6) + 1; // Trunc is used to remove the numbers after dot
    console.log(dice);

    //display Dice
    diceEl.classList.remove('hidden');
    /*
  if (dice === 1) diceEl.src = 'dice-1.png';
  else if (dice === 2) diceEl.src = 'dice-2.png';
  else if (dice === 3) diceEl.src = 'dice-3.png';
  else if (dice === 4) diceEl.src = 'dice-4.png';
  else if (dice === 5) diceEl.src = 'dice-5.png';
  else diceEl.src = 'dice-6.png';
  */
    diceEl.src = `dice-${dice}.png`;

    // Check for rolled 1:
    if (dice !== 1) {
      //Add dice to the current score
      CurrentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        CurrentScore;
    } else {
      //switch to the next player
      SwitchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  CurrentScore = 0;
  document.getElementById(`current--0`).textContent = CurrentScore;
  document.getElementById(`current--1`).textContent = CurrentScore;
  section0El.classList.add('player--active');
  section1El.classList.remove('player--active');
  score0El.textContent = 0;
  score1El.textContent = 0;
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // Add Current Score to acive's player score.
    scores[activePlayer] += CurrentScore;
    // scores[1]=scores[1]+CurrentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Check that score >=100 or not?
    if (scores[activePlayer] >= 20) {
      // Finish the game
      diceEl.classList.add('hidden');
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // switch to new player
      SwitchPlayer();
    }
  }
});
