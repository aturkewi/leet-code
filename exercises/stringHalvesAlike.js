// https://leetcode.com/problems/determine-if-string-halves-are-alike

const halvesAreAlike = (s) => {
  let vowelCount = 0
  for(let i=0; i < s.length; i++){
    const letter = s[i].toLowerCase()
    if(isVowel(letter)){
      if((i + 1) <= (s.length / 2)){
        vowelCount++
      }else{
        vowelCount--
      }
    }
  }

  return vowelCount === 0
};

const isVowel = (letter) => (
  ['a', 'e', 'i', 'o', 'u'].includes(letter)
)

module.exports = { halvesAreAlike }
