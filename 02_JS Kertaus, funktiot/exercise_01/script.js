'use strict';

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

console.log(`Fruits: ${fruits}`);
console.log(`Length of Fruits: ${fruits.length}`);
console.log(`Element at Index 2: ${fruits[2]}`);
console.log(`Last element of Fruits: ${fruits.at(-1)}`);

const vegetables = [];

for (let i = 0; i < 3; i++) {
  const input = prompt(`Enter three vegetables ${i + 1}`);

  vegetables.push(input);
}

console.log(`Vegetables: ${vegetables}`);
console.log(`Length of vegetables: ${vegetables.length}`);

const html = `

<p>Fruits: ${fruits} </p>
<p>Length of Fruits: ${fruits.length} </p>
<p>Element at index 2: ${fruits[2]} </p>
<p>Last element of Fruits: ${fruits.at(-1)} </p>

<span> Vegetables: </span>

<p> Vegetables ${vegetables} </p>
<p> Length of vegetables ${vegetables.length} </p>

`;

document.body.insertAdjacentHTML('beforeend', html);
