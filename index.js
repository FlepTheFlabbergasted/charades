const fs = require('fs');

const { prompts } = JSON.parse(fs.readFileSync('./prompts.json'));

window.onload = function () {
  console.log(prompts);
};
