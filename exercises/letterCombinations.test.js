const { letterCombinations } = require('./letterCombinations');

test('returns empty list for no numbers', () => {
  expect(letterCombinations("")).toEqual([])
})

test('can handle a single digit', () => {
  expect(letterCombinations("2")).toEqual(["a", "b", "c"])
})

test('it can handle two digits', () => {
  expect(letterCombinations("23")).toEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"])
})