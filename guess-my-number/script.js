'use strict';

let ans = Math.trunc(Math.random() * 20) + 1;
const lostGameMessage = 'You lost the game!';
console.log(ans);
let score = 20;

document.querySelector('.check').addEventListener('click', function () { // note for querySelector, dot for class hash for id.
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = 'Please choose a value!';
    } else if (guess === ans) { //when the guess is correct
        document.querySelector('.message').textContent = 'Correct Answer!';
        document.querySelector('.number').textContent = ans;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    } else if (guess > ans) { // when the guess is too high
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High!';
            document.querySelector('.score').textContent = --score;
        } else {
            document.querySelector('.message').textContent = lostGameMessage;
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < ans) { // when the guess is too low
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low!';
            document.querySelector('.score').textContent = --score;
        } else {
            document.querySelector('.message').textContent = lostGameMessage;
            document.querySelector('.score').textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    ans = Math.trunc(Math.random() * 20) + 1;
    console.log(ans);
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})
