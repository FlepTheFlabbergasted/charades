const fs = require('fs');
// import prompts from './prompts.json';
const { prompts } = JSON.parse(fs.readFileSync('./prompts.json'));

window.onload = function () {
  console.log(prompts);
};
