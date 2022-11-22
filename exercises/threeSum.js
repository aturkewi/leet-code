// https://leetcode.com/problems/3sum/

var threeSum = function(nums) {
  const cleanedNums = cleanNums(nums)
  let solutions = []
  for(let i=0; i <= cleanedNums.length - 3; i++){
    const res = sumGivenOne(cleanedNums[i], i, cleanedNums)
    if(res.length > 0){
      solutions = [...solutions, ...res]
    }
  }

  solutions = sortSolutions(solutions)
  solutions = deDupe(solutions)

  return solutions
};

const cleanNums = (nums) => {
  nums.sort()
  let numCount = 0
  let currentNum = nums[0]

  for(i=0; i < nums.length; i++){
    // console.log(`i: ${i}`)
    // console.log(`nums: ${nums}`)
    if(nums[i] == currentNum){
      // console.log('equal')
      if(nums[i] == 0 && numCount < 3){
        numCount++
        // console.log(`0 numCount: ${numCount}`)
      }else if(numCount < 2){
        numCount++
        // console.log(`non-0 numCount: ${numCount}`)
      }else{
        numCount++
        // console.log(`need to delete! num: ${nums[i]}`)
        nums.splice(i, 1)
        i = i - 1
      }
    }else{
      numCount = 1
      currentNum = nums[i]
      // console.log(`not equal, currentNum: ${currentNum}`)
    }
  }

  return nums
}

const deDupe = (solutions) => {
  if(solutions.length <=1 ){
    return solutions
  }

  let res = [solutions[0]]
  let lastUniqueAt = 0

  for(let i=1; i < solutions.length; i++){
    if(!arraysEqual(solutions[lastUniqueAt], solutions[i])){
      lastUniqueAt = i
      res = [...res, solutions[i]]
    }
  }

  return res
}

const arraysEqual = ([a,b,c], [aPrime, bPrime, cPrime]) => {
  return a == aPrime && b == bPrime && c == cPrime
}

const sortSolutions = (solutions) => {
  return solutions.sort(([a, b, c], [aPrime, bPrime, cPrime]) => {
    if(a > aPrime){
      return 1
    }else if(a < aPrime){
      return -1
    }else{
      if(b > bPrime){
        return 1
      }else if(b < bPrime){
        return -1
      }else{
        if(c > cPrime){
          return 1
        }else if(c < cPrime){
          return -1
        }else{
          return 0
        }
      }
    }
  })
}

const sumGivenOne = (numOne, i, nums) => {
  let solutions = []
  for(let j=i+1; j <= nums.length - 2; j++){
    const res = sumGivenTwo(numOne, nums[j], j, nums)
    if(res.length > 0){
      solutions = [...solutions, ...res]
    }
  }

  return solutions
}

const sumGivenTwo = (numOne, numTwo, j, nums) => {
  let solutions = []
  for(let k=j+1; k <= nums.length - 1; k++){
    const sum = numOne + numTwo + nums[k]
    if( sum == 0){
      const solution = [numOne, numTwo, nums[k]].sort()
      solutions = [...solutions, solution]
    }
  }
  return solutions
}

module.exports = { threeSum, cleanNums }