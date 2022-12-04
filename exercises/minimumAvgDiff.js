// https://leetcode.com/problems/minimum-average-difference/

/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumAverageDifference = (nums) => {
  let minIndex = 0
  let rightSide = nums.reduce((sum, num) => sum + num)
  let minValue = null

  let leftSide = 0

  for(let i=0; i < nums.length; i++){
    leftSide = leftSide + nums[i]
    rightSide = rightSide - nums[i]
    const avgDiff = Math.abs(
       calcSide(leftSide, (i + 1)) - calcSide(rightSide, (nums.length - (i + 1)))
      )

    if(minValue == null || avgDiff < minValue){
      minValue = avgDiff
      minIndex = i
    }
  }

  return minIndex
};

const calcSide = (rightSide, n) => {
  if(n == 0){
    return 0
  }else{
    return Math.floor(rightSide / n)
  }
}

module.exports = { minimumAverageDifference }
