const { repeatedStringMatch } = require('./repeatedStringMatch')

test('returns 2 for a and aa', () => {
  expect(repeatedStringMatch('a', 'aa')).toEqual(2)
})

test('returns 3 for abcd and cdabcdab', () => {
  expect(repeatedStringMatch('abcd', 'cdabcdab')).toEqual(3)
})

test('returns -1 if impossible', () => {
  expect(repeatedStringMatch('a', 'xx')).toEqual(-1)
})

test('returns -1 for abac and abcabcabcabc', () => {
  expect(repeatedStringMatch('abac', 'abcabcabcabc')).toEqual(-1)
})

test('substring longer than target', () => {
  expect(repeatedStringMatch('aaac', 'aac')).toEqual(1)
})
