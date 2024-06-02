'use strict';
//
//Selecting elementts

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
let diceRoll = 0;
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

//
//Starting conditions
let score, currentScore, activePlayer, playing;

const init = function () {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//
//
//
///Game logic

btnRoll.addEventListener('click', function () {
  if (playing) {
    //1.Generating a random die roll
    //
    const dice = Math.trunc(Math.random() * 6) + 1;
    //   console.log(dice);

    //2. Display the dice roll
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3.Check for rolled 1: if true,

    if (dice !== 1) {
      //Add the dice to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
});

//
// Player holding the current score
btnHold.addEventListener('click', function () {
  if (playing) {
    //1.Add current score to active player's score
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    //2.Check if player's score is >=100
    //finish game
    if (score[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
});
//
//
//
// Resting the game

btnNew.addEventListener('click', init);
const a = 'jonas';
first();

function first() {
  const b = 'Hello'; // HOVER B
  second();

  function second() {
    const c = 'Hi'; // Hover c =
    third();
  }
}

function third() {
  const d = 'Hey';

  console.log(d + c + b + a); // caller
}

//own version-end game
// btnRoll.disabled = true;
//btnHold.disabled = true;

//Own version-Hold
// if (activePlayer == 1) {
//     b1 =
//       b1 +
//       Number(document.getElementById(`current--${activePlayer}`).textContent);
//     document.getElementById(`score--${activePlayer}`).textContent = b1;
//   } else {
//     b0 =
//       b0 +
//       Number(document.getElementById(`current--${activePlayer}`).textContent);
//     document.getElementById(`score--${activePlayer}`).textContent = b0;
//   }

//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   currentScore = 0;
//   activePlayer = activePlayer == 0 ? 1 : 0;
//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');

//Own version
// let a = 1;

// document.getElementById(`score--${activePlayer}`).textContent =
// document.getElementById(`current--${activePlayer}`).textContent;
// currentScore = 0;
// activePlayer = activePlayer == 0 ? 1 : 0;

// if (dice !== 1) {
//   //Add the dice to the current score
//   currentScore += dice;
//   a == 1
//     ? (current0El.textContent = currentScore)
//     : (current1El.textContent = currentScore);
//   // current0El.textContent = currentScore; // CHANGE LATER
// } else {
//   //switch to the next player
//   a == 1
//     ? ((current0El.textContent = 0), (currentScore = 0))
//     : ((current1El.textContent = 0), (currentScore = 0));
//   a == 1 ? (a = 2) : (a = 1);
//   // current0El.textContent = 0;
// }

// rolldice.addEventListener('click', function () {
//   diceRoll = Math.trunc(Math.random() * 6 + 1);
//   console.log(diceRoll);
//   if (diceRoll == 1) {
//     diceEl.classList.remove('hidden');
//     diceEl.src = 'dice-1.png';
//   } else if (diceRoll == 2) {
//     diceEl.classList.remove('hidden');
//     diceEl.src = 'dice-2.png';
//   } else if (diceRoll == 3) {
//     diceEl.classList.remove('hidden');
//     diceEl.src = 'dice-3.png';
//   } else if (diceRoll == 4) {
//     diceEl.classList.remove('hidden');
//     diceEl.src = 'dice-4.png';
//   }
//   if (diceRoll == 5) {
//     diceEl.classList.remove('hidden');
//     diceEl.src = 'dice-5.png';
//   }
//   if (diceRoll == 6) {
//     diceEl.classList.remove('hidden');
//     diceEl.src = 'dice-6.png';
//   }
// });
