const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

test("sum adds numbers: ", () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtract numbers: ", () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

// here we just installed jest and used it instead of out own functions to get more usefull logs of what happened
