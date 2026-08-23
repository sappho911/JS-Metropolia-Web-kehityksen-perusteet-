'use strict';

const input = +prompt('Enter positive number');
const result = document.querySelector('.result');

function calculateSum(input) {
  let sum = 0;

  if (input <= 0) return;

  for (let i = 1; i <= input; i++) {
    sum += i;
  }
  result.innerHTML = `Sum: ${sum}`;
}

calculateSum(input);
