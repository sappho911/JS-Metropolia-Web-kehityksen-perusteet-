'use strict';

const target = document.querySelector('#target');

const data = navigator.appVersion;
const screenWidth = screen.availWidth;
const screenHeight = screen.availHeight;

const now = new Date();

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const timeOptions = {
  hour: '2-digit',
  minute: '2-digit',
};

const date = now.toLocaleDateString('fi-FI', options);
const time = now.toLocaleTimeString('fi-FI', timeOptions);

const info = [
  `Browser: ${data}`,
  `Screen resolution: Width: ${screenWidth}, Height: ${screenHeight}`,
  `Date: ${date}`,
  `Time: ${time}`,
];

info.forEach(function (item) {
  const p = document.createElement('p');
  p.textContent = item;
  target.appendChild(p);
});
