
// Selecting elements: 
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
// const maxScoreEl = document.getElementById('max-score');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions:
let scores, currentScore, activePlayer, playing;
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');

// const scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true;

const start = function () {
    // score0El.textContent = 0;
    // score1El.textContent = 0;
    diceEl.classList.add('hidden');

    /*const*/ scores = [0, 0];
    /*let*/ currentScore = 0;
    /*let*/ activePlayer = 0;
    /*let*/ playing = true;
    
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};





start();
// switch player function:
const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

// Dice Roll functionality:
btnRoll.addEventListener('click', function() {
    if(playing) {
    // 1. random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2. diplay dice roll
    diceEl.classList.remove('hidden');
    diceEl.src = (`/images/dice-${dice}.png`)

    // 3. if 1, lose & reset game
    if(dice !==1) {
        // add to current score
        currentScore = currentScore + dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        // lose game / switch 
        switchPlayer();
    }
}
});

btnHold.addEventListener('click', function() {
    if(playing) {
    // 1. add current score to active players score
    scores[activePlayer] += currentScore;
    // same as scores[1] = scores[1] + currentScore // or with player 0 instead of 1
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    // 2. check if players score is >= 20
    // if yes win
    if (scores[activePlayer] >= document.getElementById('max-score').value) {
        playing = false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
        switchPlayer();
    }
}
});

// restart game:
btnNew.addEventListener('click', start);
 
 
    // score0El.textContent = 0;
    // score1El.textContent = 0;
    // current0El.textContent = 0;
    // current1El.textContent = 0;
    // player0El.classList.remove('player--winner');
    // player1El.classList.remove('player--winner');
    // player0El.classList.add('plaer--active');
    // player1El.classList.remove('plaer--active');
// });


