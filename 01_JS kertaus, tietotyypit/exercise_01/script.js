"use strict";

// console.log("test test");

// let html = "<h1>Hello world!</h1>";

// document.body.insertAdjacentHTML("beforeend", html);

const input = +prompt(
  "Enter temperature in Celsius and it converts it to Fahrenheit.",
);

console.log(`tepmerature is ${input}`);

const convertToFahrenheit = function (celsius) {
  if (Number.isNaN(celsius)) {
    document.body.insertAdjacentHTML(
      "beforeend",
      "<h1>enter a valid number pls!</h1>",
    );
    return;
  }

  const fahrenheit = (celsius * 9) / 5 + 32;
  const kelvin = celsius + 273.15;

  const html = `<h1>Converted temperature to fahrenheit  = ${fahrenheit} °F , and Kelvin ${kelvin} K</h1>`;
  document.body.insertAdjacentHTML("beforeend", html);
};

convertToFahrenheit(input);
