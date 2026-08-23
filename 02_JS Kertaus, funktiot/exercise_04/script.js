'use strict';

const numbers = [5, 10, 3, 8, 1];

function sortArray(array) {
  const sortedArray = [...array];

  sortedArray.sort(function (a, b) {
    return a - b;
  });

  return sortedArray;
}

console.log(`Sorted Array: ${sortArray(numbers)}`);
console.log(`Original Array: ${numbers}`);
