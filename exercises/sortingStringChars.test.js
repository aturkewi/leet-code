const { frequencySort, sortLetterCountArray } = require('./sortingStringChars')

test('tree to eert', () => {
  expect(frequencySort('tree')).toEqual('eetr')
})

test('Aabb to bbAa', () => {
  expect(frequencySort('Aabb')).toEqual('bbAa')
})

test('sort', () => {
  expect(sortLetterCountArray([['a', 1], ['b', 10]])).toEqual([['b', 10], ['a', 1]])
})
