'use strict';

// text content only for text content
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.number').textContent = '10';
// document.querySelector('.score').textContent = 'A';
// document.querySelector('.guess').value = 10;
// console.log(document.querySelector('.guess').value);

/*
Al hacer este ejercicio te olvidaste tres veces de .text content
Y una vez el punto de la clase
El elemento tiene mas que texto por eso hay que seleccionarlo

En los inputs usamos el value
*/

let score;
let highscore = 0;
let secretNumber;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

function initGame() {
  score = 20;
  //state variable. si bien esta en el html el valor lo mejor es tenerlo en js
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  displayMessage('Start guessing!');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
}

initGame();

document.querySelector('.again').addEventListener('click', () => {
  initGame();
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input -------------------
  if (!guess) {
    displayMessage('No number!');
    //when player wins -----------------------
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    //siempre que estemos maniplando css los valores tiene que estar en string
    //siempre que estemos maniplando css las prop tiene que estar en camelcase
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    //to hight ------------------
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too high!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'Game Over!';
    //     document.querySelector('.score').textContent = 0;
    //   }
    //   // to low ------------------
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'Game Over!';
    //     document.querySelector('.score').textContent = 0;
    //   }
    if (score > 1) {
      // al refactorizar le agregamos un ternario y una funcion para message
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Game Over!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

/* toma en cuenta que te lleva una hora hacer esto con tutorial, es decir que solo te va a tomar 
mas no te desanimes

DRY principle Dont repeat yourself. Refactoring para mejorar el codigo.
Primer paso identificar codigo repetido
 */
