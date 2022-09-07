'use strict';

const calcSecretAnswer = () => Math.trunc(Math.random() * 20) + 1;
const logAnswer = number => console.log(number);
const displayMessage = message => document.querySelector('.message').textContent = message;
const displayNumber = number => document.querySelector('.number').textContent = number;
const updateScore = score => document.querySelector('.score').textContent = score;
const setBackgroundColor = color => document.querySelector('body').style.backgroundColor = color;
const setNumberWidth = width => document.querySelector('.number').style.width = width;

let ans = calcSecretAnswer();
let highScore = 0;
let score = 20;
logAnswer(ans);

document.querySelector('.check').addEventListener('click', function () { // note for querySelector, dot for class hash for id.
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        displayMessage('Please choose a value!');
    } else if (guess === ans) { //when the guess is correct
        displayMessage('Correct Answer!');
        displayNumber(ans);
        setBackgroundColor('#60b347');
        setNumberWidth('30rem');
        
        if (score > highScore) {
            document.querySelector('.highscore').textContent = score;
            highScore = score;
        }
    } else {
        if (score > 1) {
            displayMessage(guess > ans ? 'Too High!' : 'Too Low!');
            updateScore(--score);
        } else {
            displayMessage('You lost the game!');
            updateScore(0);
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    ans = calcSecretAnswer();
    logAnswer(ans);
    updateScore(score);
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');
    displayNumber('?');

    setBackgroundColor('#222');
    setNumberWidth('15rem');
})
