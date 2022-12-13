// https://leetcode.com/problems/minimum-falling-path-sum/

/**
 * @param {number[][]} matrix
 * @return {number}
 */
const minFallingPathSum = (matrix) => {
  let min = undefined
  for(let column=0; column < matrix[0].length; column++){
    const sum = fallingPathSum(matrix, 0, column)
    if(min === undefined || sum < min){
      min = sum
    }
  }

  return min
};

const fallingPathSum = (matrix, row, column) => {
  if(matrix[row] === undefined){
    return 0
  }

  if(matrix[row][column] === undefined){
    return null
  }

  const left = fallingPathSum(matrix, row + 1, column - 1)
  const center = fallingPathSum(matrix, row + 1, column)
  const right = fallingPathSum(matrix, row + 1, column + 1)
  const minSum = getMin([left, center, right])

  return matrix[row][column] + minSum
}

const getMin = (arr) => (
  arr
    .filter(num => num !== null)
    .sort((a,b) => a-b)[0]
)

module.exports = { minFallingPathSum }
