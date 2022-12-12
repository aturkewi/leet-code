// https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
 const climbStairs = (n) => {
    if(n === 0){
      return 0
    }
    if(n === 1){
      return 1
    }
    if(n === 2){
      return 2
    }

    let twoStepsAway = 1
    let oneStepAway = 2
    let sum = 0

    for(let i=2; i < n; i++){
      sum = oneStepAway + twoStepsAway
      twoStepsAway = oneStepAway
      oneStepAway = sum
      // console.log(`i: ${i} | sum: ${sum} | oneStepAway: ${oneStepAway} | twoStepAway: ${twoStepsAway}`)
    }

    return sum
};

// for(let i=1; i < 10; i++){
//   console.log(`${i}: ${climbStairs(i)}`)
// }

// 1: 1
// 2: 2
// 3: 3
// 4: 5
// 5: 8
// 6: 13
// 7: 21
// 8: 34
// 9: 55

module.exports = { climbStairs }
