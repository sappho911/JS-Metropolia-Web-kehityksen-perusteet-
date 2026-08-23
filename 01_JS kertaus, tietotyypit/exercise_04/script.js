'use strict';

console.log('Hello world!');

const input = +prompt('Enter a course assessment from 0 to 100');

let result = document.querySelector('.result');

if (input >= 0 && input <= 39) {
  result.innerHTML = `Scores between 0 and 39 recieve a grade of 0.`;
}
if (input >= 40 && input <= 51) {
  result.innerHTML = `Scores between 40 and 51 receive a grade of 1.`;
}
if (input >= 52 && input <= 63) {
  result.innerHTML = `Scores between 52 and 63 receive a grade of 2.`;
}
if (input >= 64 && input <= 75) {
  result.innerHTML = `Scores between 64 and 75 receive a grade of 3.`;
}
if (input >= 76 && input <= 87) {
  result.innerHTML = `Scores between 76 and 87 receive a grade of 4.`;
}
if (input >= 88 && input <= 100) {
  result.innerHTML = `Scores between 88 and 100 receive a grade of 5.`;
}
