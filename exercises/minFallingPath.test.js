const { minFallingPathSum } = require('./minFallingPath')

test('[[2,1,3],[6,5,4],[7,8,9]] is 13', () => {
  expect(minFallingPathSum([[2,1,3],[6,5,4],[7,8,9]])).toEqual(13)
})
