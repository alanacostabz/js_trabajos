const fizzbuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {
  test("should print an error message if the argement is not a number", () => {
    const expected = "Error: the argument must be a number";
    const result = fizzbuzz("16");
    expect(expected).toBe(result);
  });

  test("should print 1 if the recive 1", () => {
    const expected = 1;
    const result = fizzbuzz(1);
    expect(expected).toBe(result);
  });

  test("sould print fizz if they receive multiple of 3", () => {
    const expected = "fizz";
    const result = fizzbuzz(3);
    expect(expected).toBe(result);
  });

  test("sould print buzz if they receive  5", () => {
    const expected = "buzz";
    const result = fizzbuzz(5);
    expect(expected).toBe(result);
  });

  test("sould print buzz if they receive multiple of 5", () => {
    const expected = "buzz";
    const result = fizzbuzz(10);
    expect(expected).toBe(result);
  });

  test("sould print fizzbuzz if they receive multiple of 3 or 5", () => {
    const expected = "fizzbuzz";
    const result = fizzbuzz(15);
    expect(expected).toBe(result);
  });
});
