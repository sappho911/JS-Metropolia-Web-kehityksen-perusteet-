'use strict';

const input = +prompt('Enter positive number');
const table = document.querySelector('.result');

for (let i = 1; i <= input; i++) {
  const tr = document.createElement('tr');

  for (let j = 1; j <= input; j++) {
    let product = i * j;

    const td = document.createElement('td');

    td.textContent = product;

    tr.appendChild(td);
  }

  table.appendChild(tr);
}
