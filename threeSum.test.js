const {threeSum} = require('./threeSum');

// test('returns [] if there are none', () => {
//   expect(threeSum([1,2,3])).toEqual([])
// })

// test('returns solution if exists', () => {
//   expect(threeSum([-1,0,1])).toEqual([[-1,0,1]])
// })

// test('it sorts each solution', () => {
//   expect(threeSum([0,1,-1])).toEqual([[-1,0,1]])
// })

// test('does not return dupes', () => {
//   expect(threeSum([0,1,-1, -1])).toEqual([[-1,0,1]])
// })

test('011', () => {
  expect(threeSum([0,1,1])).toEqual([])
})