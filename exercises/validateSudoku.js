const isValidSudoku = (board) => {
  // validate row
  return validateRows(board) &&
  // validate column
  validateColumns(board)
  // validate 3x3s
};

const validateColumns = (board) => {
  let valid = true

  for(let c=0; c < 9; c++){
    if(!valid){
      break
    }

    let arr = []
    for(let r=0; r < 9; r++){
      const cell = board[r][c]

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

const validateRows = (board) => {
  let valid = true

  for(let i=0; i < board.length; i++){
    const row = board[i]
    if(!valid){
      break
    }

    let arr = []
    for(let j=0; j < row.length; j++){
      const cell = row[j]

      if(cell !== "."){
        if(arr[cell]){
          valid = false
          break
        }{
          arr[cell] = true
        }
      }
    }

  }

  return valid
}

module.exports = { isValidSudoku }