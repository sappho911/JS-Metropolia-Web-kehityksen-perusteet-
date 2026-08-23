'use strict';

const numbers = [5, 10, 3, 8, 1];

function sortArray(array, order) {
  const sortedArray = [...array];

  if (order === 'asc') {
    sortedArray.sort(function (a, b) {
      return a - b;
    });
  }
  if (order === 'desc') {
    sortedArray.sort(function (a, b) {
      return b - a;
    });
  }

  return sortedArray;
}

console.log(`Sorted Array (ascending): ${sortArray(numbers, 'asc')}`);
console.log(`Sorted Array (descending): ${sortArray(numbers, 'desc')}`);
console.log(`Original Array: ${numbers}`);
