const { halvesAreAlike } = require('./stringHalvesAlike')

test('returns true for book', () => {
  expect(halvesAreAlike('book')).toEqual(true)
})

test('returns true regardless of case', () => {
  expect(halvesAreAlike('boOk')).toEqual(true)
})

test('returns false for textbook', () => {
  expect(halvesAreAlike('textbook')).toEqual(false)
})
