let winsText = document.getElementById("wins");
let lossesText = document.getElementById("losses");
let guessesLeftText = document.getElementById("guesses-left");
let guessesText = document.getElementById("guesses");
let lastGuess = "";
let guesses = "";
let secretLetter = "";
let trysAllowed = 10;
let numberOfGuess = 0;


document.onkeyup = function(event) {
  lastGuess = event.key;
  winsText.textContent = event.key;
  lossesText.textContent = randomLetter();
};

randomLetter();

function randomLetter() {
  let aCode = 'a'.charCodeAt(0);
  let zCode = 'z'.charCodeAt(0);

  return String.fromCharCode(aCode + Math.floor(Math.random()*(zCode-aCode)));
}