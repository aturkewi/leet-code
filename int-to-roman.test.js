const { intToRoman } = require('./int-to-roman');

describe('intToRoman', () => {
  test('3 to equal III', () => {
    expect(intToRoman(3)).toBe('III');
  });

  test('4 to equal IV', () => {
    expect(intToRoman(4)).toBe('IV');
  });

  test('9 to equal IX', () => {
    expect(intToRoman(9)).toBe('IX');
  })

  test('58 to equal LVIII', () => {
    expect(intToRoman(58)).toBe('LVIII');
  })
})
