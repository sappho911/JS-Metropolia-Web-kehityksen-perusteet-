'use strict';

const first = +prompt('Enter first length of side');
const second = +prompt('Enter second length of side');
const three = +prompt('Enter third length of side');

if (first === second && first === three && second === three) {
  document.querySelector('.result').textContent =
    `All sides are equal: first: ${first} second: ${second} third: ${three}`;
}

if (first !== second && first !== three && second !== three) {
  document.querySelector('.result').textContent =
    `No sides are equal: first: ${first} second: ${second} third: ${three}`;
} else {
  document.querySelector('.result').textContent =
    `Two sides are equal: first: ${first} second: ${second} third: ${three}`;
}
