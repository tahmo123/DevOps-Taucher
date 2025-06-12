const { multiply, isEven } = require('./math');

test('multiply 3 * 4 = 12', () => {
  expect(multiply(3, 4)).toBe(12);
});

test('isEven returns true for 6', () => {
  expect(isEven(6)).toBe(true);
});

test('isEven returns false for 7', () => {
  expect(isEven(7)).toBe(false);
});
