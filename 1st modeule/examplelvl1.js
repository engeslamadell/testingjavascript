const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

let result = sum(3, 7);
let expected = 10;
if (result !== expected) {
  throw new Error(`Expected ${expected} but got ${result}`);
}

result = subtract(7, 3);
expected = 4;
if (result !== expected) {
  throw new Error(`Expected ${expected} but got ${result}`);
}

// this is the most fundamental form of a test in JavaScript. It's simply a code that will throw an error when the result is not what we expect.
