// https://leetcode.com/problems/minimum-falling-path-sum/

/**
 * @param {number[][]} matrix
 * @return {number}
 */
const minFallingPathSum = (matrix) => {
  let min = undefined
  const shortcuts = {}
  for(let column=0; column < matrix[0].length; column++){
    const sum = fallingPathSum(matrix, 0, column, shortcuts)
    if(min === undefined || sum < min){
      min = sum
    }
  }

  return min
};

const fallingPathSum = (matrix, row, column, shortcuts) => {
  if(matrix[row] === undefined){
    return 0
  }

  if(matrix[row][column] === undefined){
    return null
  }
  let minSum
  if(shortcuts[`${row},${column}`]){
    minSum = shortcuts[`${row},${column}`]
  }else{
    const left = fallingPathSum(matrix, row + 1, column - 1, shortcuts)
    const center = fallingPathSum(matrix, row + 1, column, shortcuts)
    const right = fallingPathSum(matrix, row + 1, column + 1, shortcuts)
    minSum = getMin([left, center, right])
    shortcuts[`${row},${column}`] = minSum
  }

  return matrix[row][column] + minSum
}

const getMin = (arr) => (
  arr
    .filter(num => num !== null)
    .sort((a,b) => a-b)[0]
)

module.exports = { minFallingPathSum }
