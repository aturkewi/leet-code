// https://leetcode.com/problems/repeated-string-match/

const repeatedStringMatch = (subString, targetString) => {
  // find start of target string in substring until we reach the end of the sub string
  // confirm that we can keep repeating (until we are over length)
  // confirm that end works?
  let count = 1
  let iStart = 0
  let recreation = subString
  let targetStringCounter = 0
  let i=0

  while(targetString[targetStringCounter] !== undefined){
    // console.log(`Recreation: ${recreation} [${i}: ${recreation[i]}] && TragetCounter: ${targetStringCounter}`)
    if(targetString[targetStringCounter] === undefined){
      break
    }
    // add more to recreation if we hit the end and there is more targetString
    if(recreation[i] === undefined && targetString[targetStringCounter]){
      count++
      recreation = recreation + subString
    }


    // increment counter moving through target string
    if(recreation[i] == targetString[targetStringCounter]){
      targetStringCounter++
    }else{
      targetStringCounter = 0
      iStart ++
      i = iStart -1
    }

    if(count == 2 && targetStringCounter == 0){
      count = -1
      break
    }

    i++
  }

  return count
};

module.exports = { repeatedStringMatch }
