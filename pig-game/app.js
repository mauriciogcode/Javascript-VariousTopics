var scores, roundScore, activePlayer;

scores = [0,0];
reoundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';

document.querySelector('.btn--roll').addEventListener('click', function() {

        var dice = parseIntMath.floor(Math.random() * 6 ) + 1;

        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current--' + activePlayer).textContent = roundScore;
        } else {
            nextplayer();

        }


});

document.getElementById('btn--hold').addEventListener('click', function() {
            scores[activePlayer] += roundScore;

            document.querySelector('#score' + activePlayer).textContent = scores[activePlayer];
            if (scores[activePlayer] >= 100) {
                document.querySelector('#name--'+ activePlayer).textContent = 'Winner!';
                document.querySelector('.dice').style.display = 'none';
                document.querySelector('.player--' + activePlayer).classList.add = ('winner');
                document.querySelector('.player--' + activePlayer).classList.remove = ('active');

            } else {
                nextplayer();
            };
            
});

function nextplayer() {
activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;

            document.getElementById('current--0').textContent = '0';
            document.getElementById('current--1').textContent = '0';
            document.querySelector('.player--0').classList.toggle('player--active');
            document.querySelector('.player--1').classList.toggle('player--active');

            document.querySelector('.dice').style.display = 'none';
}