const isValidSudoku = (board) => {
  // validate row
  return validateRows(board) &&
  // validate column
  validateColumns(board)
  // validate 3x3s
};

// const validateSquares = (board) => {

// }

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