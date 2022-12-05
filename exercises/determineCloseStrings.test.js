const { closeStrings, getSortedLetterCount } = require('./determineCloseStrings')

test('returns false for words of different length', () => {
  expect(closeStrings('a', 'aa')).toEqual(false)
})

test('returns false for words that had diff letter counts', () => {
  expect(closeStrings('aabb', 'aaab')).toEqual(false)
})

test('returns false if letters are not the same', () => {
  expect(closeStrings('abbccc', 'zzyyyx')).toEqual(false)
})

test('returns true if counts and letters are the same', () => {
  expect(closeStrings('abbccc', 'ccaaab')).toEqual(true)
})

test('getSortedLetterCount - returns sorted letter count', () => {
  expect(getSortedLetterCount('zzyyyx')).toEqual('1,2,3|x,y,z')
})
