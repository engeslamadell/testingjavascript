const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

let result, expected;

result = sum(3, 7);
expected = 10;
expect(result).toBe(expected);

result = subtract(7, 3);
expected = 4;
expect(result).toBe(expected);

// this function is like an assertion library
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toEqual(expected) {},
    toBeGreaterThan(expected) {},
  };
}

// here we just took the ex at lvl1 and abstract the test functionality into an assertion function
