// https://leetcode.com/problems/3sum/

var threeSum = function(nums) {
  let solutions = []
  for(let i=0; i <= nums.length - 3; i++){
    const res = sumGivenOne(nums[i], i, nums)
    if(res.length > 0){
      solutions = [...solutions, ...res]
    }
  }

  solutions = sortSolutions(solutions)
  solutions = deDupe(solutions)

  return solutions
};

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
    // console.log(`Hit with i:${i} and j:${j}`)
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
    // console.log(`SECOND with j:${j} and k:${k}`)
    const sum = numOne + numTwo + nums[k]
    if( sum == 0){
      // console.log('I NEVER HIT')
      const solution = [numOne, numTwo, nums[k]].sort()
      solutions = [...solutions, solution]
    }
  }
  // console.log(`sol leng ${solutions.length}`)
  return solutions
}

module.exports = { threeSum }