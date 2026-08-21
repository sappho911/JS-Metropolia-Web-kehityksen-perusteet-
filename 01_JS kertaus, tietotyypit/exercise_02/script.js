'use strict';

const piste1 = prompt('Enter coordinates').split(',');
const piste2 = prompt('Enter coordinates').split(',');

const distance = Math.sqrt(
  (+piste2[0] - +piste1[0]) ** 2 + (+piste2[1] - +piste1[1]) ** 2
);

document.querySelector('.distance').innerHTML =
  `Distance between two points is: ${distance}`;
