const { findWinners } = require('./findPlayersWithZeroOrOneLosses')

test('matches sample', () => {
  expect(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]))
    .toEqual([[1,2,10],[4,5,7,8]])
})