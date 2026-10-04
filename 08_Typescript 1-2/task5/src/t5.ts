// TODO: Implement the lengthOrSquare function
// define the type(s) for 'value'
function lengthOrSquare(value: string | number): number {
  // TODO: Use a type guard to check the actual type of 'value'
  // if type is string, retrurn the length of the string
  if (typeof value === 'string') {
    return value.length;
    // if type is number return the square of the number
  } else {
    return value * value;
  }
}

// Prompt the user to enter a value as either a string or a number
const userInput = prompt('Enter number or string');
const parsedValue = isNaN(Number(userInput)) ? userInput : Number(userInput);

// Call the lengthOrSquare function
if (parsedValue) {
  const result = lengthOrSquare(parsedValue);
  console.log(typeof result);
  console.log(result);
}
