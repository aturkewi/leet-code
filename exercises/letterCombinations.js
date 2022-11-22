const letterCombinations = (digits) => {
  if(digits == ""){
    return []
  }

  const digitArray = digits.split("")
  
  return addNextLevel(0, digits, "")
};

const addNextLevel = (index, digitArray, currentString) => {
  const digit = digitArray[index]

  if(digit){
    const possibleLetters = numberToLetterMap[digit]

    return possibleLetters.reduce((acc, letter) => {
      return [...acc, ...addNextLevel(index+1, digitArray, currentString + letter)]
    }, [])
  }else{
    return [currentString]
  } 
}

const numberToLetterMap = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"]
}

module.exports = { letterCombinations }