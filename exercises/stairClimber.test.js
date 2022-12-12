const { climbStairs } = require('./stairClimber')

test('returns 2 for 2', () => {
  expect(climbStairs(2)).toEqual(2)
})

test('returns 3 for 3', () => {
  expect(climbStairs(3)).toEqual(3)
})

test('returns 5 for 4', () => {
  // 1-1-1-1
  // 1-1-2
  // 1-2-1
  // 2-1-1
  // 2-2
  expect(climbStairs(4)).toEqual(5)
})

test('returns ? for 44', () => {
  expect(climbStairs(44)).toEqual(1134903170)
})
