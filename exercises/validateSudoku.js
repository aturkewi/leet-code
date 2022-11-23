const isValidSudoku = (board) => {
  // validate row
  return validateRows(board) &&
  // validate column
  validateColumns(board) &&
  // validate 3x3s
  validateSquares(board)
};

const validateSquares = (board) => {
  const coordinateSets = [
    // left three squares
    [[0,0], [0,1], [0,2], [1,0], [1,1], [1,2], [2,0], [2,1], [2,2]],
    [[3,0], [3,1], [3,2], [4,0], [4,1], [4,2], [5,0], [5,1], [5,2]],
    [[6,0], [6,1], [6,2], [7,0], [7,1], [7,2], [8,0], [8,1], [8,2]],
    // middle three square
    [[0,3], [0,4], [0,5], [1,3], [1,4], [1,5], [2,3], [2,4], [2,5]],
    [[3,3], [3,4], [3,5], [4,3], [4,4], [4,5], [5,3], [5,4], [5,5]],
    [[6,3], [6,4], [6,5], [7,3], [7,4], [7,5], [8,3], [8,4], [8,5]],
    // right three squares
    [[0,6], [0,7], [0,8], [1,6], [1,7], [1,8], [2,6], [2,7], [2,8]],
    [[3,6], [3,7], [3,8], [4,6], [4,7], [4,8], [5,6], [5,7], [5,8]],
    [[6,6], [6,7], [6,8], [7,6], [7,7], [7,8], [8,6], [8,7], [8,8]]
  ]

  return validateCoordinateSets(board, coordinateSets)
}

const validateColumns = (board) => {
  const coordinateSets = []
  for(let column=0; column < 9; column++){
    const coordinateSet = []
    for(let row=0; row < 9; row++){
      coordinateSet.push([row, column])
    }
    coordinateSets.push(coordinateSet)
  }

  return validateCoordinateSets(board, coordinateSets)
}

const validateRows = (board) => {
  const coordinateSets = []
  for(let row=0; row < 9; row++){
    const coordinateSet = []
    for(let column=0; column < 9; column++){
      coordinateSet.push([row, column])
    }
    coordinateSets.push(coordinateSet)
  }

  return validateCoordinateSets(board, coordinateSets)
}

const validateCoordinateSets = (board, coordinateSets) => {
  let valid = true

  for(let i=0; i < coordinateSets.length; i++){
    const set = coordinateSets[i]

    let arr = []

    for(let j=0; j < set.length; j++){
      const coordinates = set[j]
      const cell = board[coordinates[0]][coordinates[1]]

      if(cell != "."){
        if(arr[cell]){
          valid = false
          break
        }else{
          arr[cell] = true
        }
      }
    }
  }

  return valid
}

module.exports = { isValidSudoku }