const { hello, sum } = require('../src/index');

test('hello returns string', () => {
  expect(hello()).toBe('Hello, world!');
});

test('sum adds numbers', () => {
  expect(sum(1, 2)).toBe(3);
});
