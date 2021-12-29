import { readFileSync } from 'fs';
// import prompts from './prompts.json';
const { prompts } = JSON.parse(readFileSync('./prompts.json'));

window.onload = function () {
  console.log(prompts);
};
