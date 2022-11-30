const { uniqueOccurrences } = require('./uniqueNumberOfOccurances')

test('returns true if unique', () => {
  expect(uniqueOccurrences([1,2,2,3,3,3])).toEqual(true)
})

test('returns true for empty set', () => {
  expect(uniqueOccurrences([])).toEqual(true)
})

test('returns false for non-unique', () => {
  expect(uniqueOccurrences([1,2])).toEqual(false)
})
