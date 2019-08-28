let wins = 0;
let numberOfGueses = 0;
let losses = 0;
let lastGuess = '';
let guesses = '';
let secretLetter = randomLetter();

const trysAllowed = 5;

let winsText = document.getElementById('wins');
let lossesText = document.getElementById('losses');
let guessesLeftText = document.getElementById('guesses-left');
let guessesText = document.getElementById('guesses');

guessesLeftText.textContent = trysAllowed;

document.onkeyup = function (event) {
  lastGuess = event.key;
  numberOfGueses++;
  guesses += lastGuess;

  if (lastGuess === secretLetter) {
    wins++;
    resetRound();
  } else if (numberOfGueses >= trysAllowed) {
    losses++;
    resetRound();
  }

  winsText.textContent = wins;
  lossesText.textContent = losses;
  guessesLeftText.textContent = trysAllowed - numberOfGueses;
  guessesText.textContent = guesses;
};

function randomLetter() {
  let aCode = 'a'.charCodeAt(0);
  let zCode = 'z'.charCodeAt(0);

  return String.fromCharCode(
    aCode + Math.floor(Math.random() * (zCode - aCode))
  );
}

function resetRound() {
  numberOfGueses = 0;
  secretLetter = randomLetter();
  guesses = '';
}