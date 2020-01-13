const capitalize = require('./capitalize');
const reverse = require('./reverse');
const calculator = require('./calculator');
const caesar = require('./caesar');
const analyze = require('./analyze');

// 1. Capitalize a word
test('capitalizes a single word', () => {
  expect(capitalize('test')).toBe('Test');
});

// 2. Reverse a string
test('reverses a string', () => {
  expect(reverse('Testing String')).toBe('gnirtS gnitseT');
});

// 3. Calculator
test('adds two numbers', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('subtracts a number from another', () => {
  expect(calculator.subtract(8, 2)).toBe(6);
});

test('multiplies two numbers', () => {
  expect(calculator.multiply(3, 6)).toBe(18);
});

test('divides one number from another', () => {
  expect(calculator.divide(12, 3)).toBe(4);
});

// 4. Caesar cipher
test('performs a normal Caesar shift', () => {
  expect(caesar(5, 'hello world')).toBe('mjqqt btwqi');
});

test('performs a normal Caesar shift', () => {
  expect(caesar(10, 'hello world')).toBe('rovvy gybvn');
});

test('performs a normal Caesar shift', () => {
  expect(caesar(20, 'hello world')).toBe('byffi qilfx');
});

test('Caesar shift keeps case', () => {
  expect(caesar(5, 'Hello World')).toBe('Mjqqt Btwqi');
});

test('Caesar shift ignores punctuation', () => {
  expect(caesar(5, 'hello. world!')).toBe('mjqqt. btwqi!');
});

// 5. Array analysis
test('Returns an object', () => {
  expect(analyze([])).toEqual({});
});

test('performs the correct analysis', () => {
  const data = [1, 8, 3, 4, 2, 6];
  expect(analyze(data)).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
