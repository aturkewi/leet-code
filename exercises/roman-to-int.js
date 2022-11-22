// https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */

const romanMap = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

const romanToInt = function(s) {
  // break string up into chars
  romanLetters = s.split('')

  let sum = 0

  // iterate through chars
  for(let i = 0; i < romanLetters.length; i++) {
    currentLetter = romanLetters[i]
    nextLetter = romanLetters[i + 1]

    // if next char is of a higher value, do something special
    if(nextLetter && romanMap[nextLetter] > romanMap[currentLetter]){
      sum = sum + romanMap[nextLetter] - romanMap[currentLetter]
      i++
    // if next char is of an equal or lower value, add it to the sum
    }else{
      sum = sum + romanMap[currentLetter]
    }
  }

  return sum
};

module.exports = { romanToInt }