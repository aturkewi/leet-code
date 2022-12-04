const { minimumAverageDifference } = require('./minimumAvgDiff')

test('[2,5,3,9,5,3] is 3', () => {
  expect(minimumAverageDifference([2,5,3,9,5,3])).toEqual(3)
})

test('[0] is 0', () => {
  expect(minimumAverageDifference([0])).toEqual(0)
})

test('[0,0] is 0', () => {
  expect(minimumAverageDifference([0,0])).toEqual(0)
})

test('[0,1,0,1,0,1] is 0', () => {
  expect(minimumAverageDifference([0,1,0,1,0,1])).toEqual(0)
})

test('[5,4,3,2,1] is 1', () => {
  expect(minimumAverageDifference([5,4,3,2,1])).toEqual(1)
})

test('[4,2,0] is 2', () => {
  expect(minimumAverageDifference([4,2,0])).toEqual(2)
})
