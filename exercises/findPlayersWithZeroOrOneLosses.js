const findWinners = (matches) => {
  const onlyWins = new Set
  const oneLoss = new Set
  const multipleLosses = new Set

  matches.forEach(([winner, loser]) => {
    // Handle winner set
    if(multipleLosses.has(winner) || oneLoss.has(winner)){
      // noop
    }else{
      onlyWins.add(winner)
    }

    // Handle loser sets
    if(multipleLosses.has(loser)){
      // noop
    }else if(oneLoss.has(loser)){
      oneLoss.delete(loser)
      multipleLosses.add(loser)
    }else{
      oneLoss.add(loser)
    }

    // Make sure to knock losers out of winner set
    if(onlyWins.has(loser)){
      onlyWins.delete(loser)
    }
  })

  // convert to an array, sort, and return
  return [Array.from(onlyWins).sort((a,b) => a-b), Array.from(oneLoss).sort((a,b) => a-b)]
};

module.exports = { findWinners }