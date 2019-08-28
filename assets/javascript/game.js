let winsText = document.getElementById("wins");

document.onkeyup = function(event) {
  winsText.textContent = event.key;
};