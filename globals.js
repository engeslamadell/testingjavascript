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

global.expect = expect;
global.test = test;
