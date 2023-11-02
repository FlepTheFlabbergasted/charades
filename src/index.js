import wordsJson from './words.json' assert { type: 'json' };

const words = wordsJson.words;

window.onload = function () {
  const btn = document.getElementById('button');

  btn.addEventListener('click', () => displayNewRandomPrompt());
  displayNewRandomPrompt();
};

function getRandomInt(min, max) {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
}

function displayNewRandomPrompt() {
  document.getElementById('prompt').textContent = words[getRandomInt(0, words.length - 1)];
}
