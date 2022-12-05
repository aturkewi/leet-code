// https://leetcode.com/problems/determine-if-two-strings-are-close/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
 const closeStrings = (word1, word2) => {
    if(word1.length != word2.length){
      return false
    }

    return getSortedLetterCount(word1) == getSortedLetterCount(word2)
};

// This function is a little complex and could use a refactor.
// It was originally written without realizing that the same letters were needed
const getSortedLetterCount = (word) => {
  let letterCountMap = {}

  for(let i=0; i < word.length; i++){
    const letter = word[i]
    if(letterCountMap[letter]){
      letterCountMap[letter]++
    }else{
      letterCountMap[letter] = 1
    }
  }

  const letterCount = Object.values(letterCountMap)
  const letters = Object.keys(letterCountMap)
  return letterCount.sort().join(',') + '|' + letters.sort().join(',')
}

module.exports = { closeStrings, getSortedLetterCount }
