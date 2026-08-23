'use scrict';

const result = document.querySelector('.result');
const match = document.querySelector('.match');
const updated = document.querySelector('.updated');
const sorted = document.querySelector('.sorted');

const numbers = [];

for (let i = 0; i < 5; i++) {
  const number = +prompt(`Enter five numbers one by one: ${i + 1}`);

  numbers.push(number);
}

result.innerHTML = `Numbers: ${numbers}`;

const findNumber = +prompt('Enter a number to search:');

if (numbers.includes(findNumber)) {
  match.innerHTML = `Number ${findNumber} is found in the array.`;
} else {
  match.innerHTML = `Number ${findNumber} is not found in the array`;
}

const sortedNumbers = [...numbers];

sortedNumbers.pop();

updated.innerHTML = `Updated Numbers: ${sortedNumbers}`;

sortedNumbers.sort(function (a, b) {
  return a - b;
});

// console.log(`sorted numbers : ${sortedNumbers}`);
// console.log(`original numbers : ${numbers}`);

sorted.innerHTML = `Sorted Numbers: ${sortedNumbers}`;
