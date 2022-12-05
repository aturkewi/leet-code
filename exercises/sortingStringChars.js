// https://leetcode.com/problems/sort-characters-by-frequency/

/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = (s) => {
  const letterMap = getLetterMap(s)
  const letterCountArray = getLetterCountArray(letterMap)
  const sortedLetterCountArray = sortLetterCountArray(letterCountArray)
  return compileLetters(sortedLetterCountArray)
};

const getLetterMap = (string) => {
  const letterMap = {}
  for(let i=0; i < string.length; i++){
    const letter = string[i]

    if(letterMap[letter]){
      letterMap[letter] = letterMap[letter] + 1
    }else{
      letterMap[letter] = 1
    }
  }

  return letterMap
}

const getLetterCountArray = (letterMap) => {
  const letterCountArray = []
  for(letter in letterMap){
    letterCountArray.push([letter, letterMap[letter]])
  }

  return letterCountArray
}

const sortLetterCountArray = (letterCountArray) => {
  return letterCountArray.sort(([aLetter, aCount], [bLetter, bCount]) => {
    return bCount - aCount
  })
}

const compileLetters = (letterCountArray) => {
  let string = ''
  for(let i=0; i < letterCountArray.length; i++){
    const [letter, count] = letterCountArray[i]
    for(let n=0; n < count; n++){
      string = string + letter
    }
  }

  return string
}

module.exports = { frequencySort, sortLetterCountArray }
