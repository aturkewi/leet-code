// import { romanToInt } from "./roman-to-int";
const {romanToInt} = require('./roman-to-int');

test('III to equal 3', () => {
  expect(romanToInt('III')).toBe(3);
});

test('IV to equal 4', () => {
  expect(romanToInt('IV')).toBe(4);
})