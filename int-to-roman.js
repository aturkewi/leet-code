// https://leetcode.com/problems/integer-to-roman/

/**
 * @param {number} num
 * @return {string}
 */

//  const romanMap = {
//   'I': 1,
//   'V': 5,
//   'X': 10,
//   'L': 50,
//   'C': 100,
//   'D': 500,
//   'M': 1000
// }

const romanMap = {
  0: {
    1: 'I',
    5: 'V'
  },
  1: {
    1: 'X',
    5: 'L'
  },
  2: {
    1: 'C',
    5: 'D'
  },
  3: {
    1: 'M'
  }
}

const getRepeatingString = (string, times) => {
  let acc = ''
  for(let i = 0; i < times; i++){
    acc = acc + string
  }
  return acc
}

var intToRoman = function(num) {
  let romanString = ''
  const digits = num.toString().split('')

  power = 0

  for(let i = digits.length - 1; i >= 0; i--){
    remainder = eval(digits[i])
    // console.log(`i: ${i} | rem: ${remainder}`)
    
    if(remainder == 9){
      romanString = romanMap[power][1] + romanMap[power + 1][1] + romanString
    }else if(remainder >= 5){
      romanString = romanMap[power][5] + getRepeatingString(romanMap[power][1], remainder - 5) + romanString
    }else if(remainder == 4){
      romanString = romanMap[power][1] + romanMap[power][5] + romanString
    }else{
      romanString = getRepeatingString(romanMap[power][1], remainder) + romanString
    }
    
    power++
  }

  return romanString
};

module.exports = { intToRoman }