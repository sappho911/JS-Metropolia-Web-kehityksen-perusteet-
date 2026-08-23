'use strict';

const result = document.querySelector('.result');

const numbers = [];

let number;

while (
  (number = prompt('Enter a number (or type "done" to finish):')) !== 'done'
) {
  numbers.push(+number);
}
console.log(`Numbers: ${numbers}`);

const evenNumbers = [];

for (number of numbers) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
}

result.innerHTML = `Even Numbers: ${evenNumbers}`;
