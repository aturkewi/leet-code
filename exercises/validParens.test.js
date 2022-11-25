const { isValid } = require('./validParens')

// test('returns true for ()', () => {
//   expect(isValid('()')).toEqual(true)
// })

test('returns true for ()[]{}', () => {
  expect(isValid('()[]{}')).toEqual(true)
})

// test('returns true for empty string', () => {
//   expect(isValid('')).toEqual(true)
// })

// test('returns false for mismatch', () => {
//   expect(isValid('(]')).toEqual(false)
// })