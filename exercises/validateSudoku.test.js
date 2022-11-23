const { isValidSudoku } = require("./validateSudoku")

const getBlankRow = () => (
  [".",".",".",".",".",".",".",".","."]
)
const getBlankBoard = () => (
  [
    getBlankRow(),
    getBlankRow(),
    getBlankRow(),
    getBlankRow(),
    getBlankRow(),
    getBlankRow(),
    getBlankRow(),
    getBlankRow(),
    getBlankRow()
  ]
)

test('returns true for empty', () => {
  expect(isValidSudoku(getBlankBoard())).toEqual(true)
})

test('returns true for a valid row', () => {
  const board = getBlankBoard()
  board[0] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  expect(isValidSudoku(board)).toEqual(true)
})

test('returns false for an invalid row', () => {
  const board = getBlankBoard()
  board[0] = ["1", "1", "3", "4", "5", "6", "7", "8", "9"]
  expect(isValidSudoku(board)).toEqual(false)
})

test('returns true for a valid column', () => {
  const board = getBlankBoard()

  const row1 = getBlankRow()
  row1[0] = "1"

  const row2 = getBlankRow()
  row2[0] = "2"

  board[0] = row1
  board[1] = row2

  expect(isValidSudoku(board)).toEqual(true)
})

test('returns false for an invalid column', () => {
  const board = getBlankBoard()

  const row1 = getBlankRow()
  row1[0] = "1"

  const row2 = getBlankRow()
  row2[0] = "1"

  board[0] = row1
  board[1] = row2

  expect(isValidSudoku(board)).toEqual(false)
})

test('returns false for an invalid square', () => {
  const board = getBlankBoard()

  const row1 = getBlankRow()
  row1[0] = "1"

  const row2 = getBlankRow()
  row2[1] = "1"

  board[0] = row1
  board[1] = row2

  expect(isValidSudoku(board)).toEqual(false)
})