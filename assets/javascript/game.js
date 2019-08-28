let wins = 0;
let numberOfGueses = 0;
let losses = 0;
let lastGuess = '';
let guesses = '';
let secretLetter = randomLetter();

const trysAllowed = 10;

let winsText = document.getElementById("wins");
let lossesText = document.getElementById("losses");
let guessesLeftText = document.getElementById("guesses-left");
let guessesText = document.getElementById("guesses");

guessesLeftText.textContent = trysAllowed;

// guessesLeftText.textContent = 'Secret letter: ' + secretLetter + ', ';

document.onkeyup = function(event) {
  lastGuess = event.key;
  numberOfGueses++;
  guesses = guesses + lastGuess;
  if (lastGuess === secretLetter) {
    wins++;  
  } else {
    losses++;
  }
  
  if (numberOfGueses > trysAllowed) { //RESET
    wins = 0;
    numberOfGueses = 0;
    losses = 0;
    lastGuess = '';
    secretLetter = randomLetter();
    guesses = '';
  }

  winsText.textContent = wins;
  lossesText.textContent = losses;
  guessesLeftText.textContent = trysAllowed - numberOfGueses;
  guessesText.textContent = 'SL: ' + secretLetter + ', ' + guesses;
  
};

function randomLetter() {
  let aCode = 'a'.charCodeAt(0);
  let zCode = 'z'.charCodeAt(0);

  return String.fromCharCode(aCode + Math.floor(Math.random()*(zCode-aCode)));
}