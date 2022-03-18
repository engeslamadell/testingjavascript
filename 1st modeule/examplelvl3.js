const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

test("sum adds numbers", () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtract numbers", () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

// a utility function to provide a context to what failed tests and none failed tests by providing useful messages to what actually happened
function test(title, callback) {
  try {
    callback();
    console.log("success " + title);
  } catch (error) {
    console.error("error " + title);
    console.error(error);
  }
}

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

// here we made a test util function to provide context to what we did
