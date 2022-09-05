'use strict';

// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 11;
// document.querySelector('.score').textContent = 17;

// document.querySelector('.guess').value = 33;
// console.log(document.querySelector('.guess').value);

const ans = Math.trunc(Math.random() * 20) + 1;
const lostGameMessage = 'You lost the game!';
console.log(ans);
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = 'Please choose a value!'
    } else if (guess === ans) {
        document.querySelector('.message').textContent = 'Correct Answer!'
    } else if (guess > ans) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High!'
            document.querySelector('.score').textContent = --score;
        } else {
            document.querySelector('.message').textContent = lostGameMessage;
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < ans) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low!'
            document.querySelector('.score').textContent = --score;
        } else {
            document.querySelector('.message').textContent = lostGameMessage;
            document.querySelector('.score').textContent = 0;
        }
    }
})
