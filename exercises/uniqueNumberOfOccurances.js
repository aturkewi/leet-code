const uniqueOccurrences = (arr) => {
  const occurrences = {}
  for(let i=0; i < arr.length; i++){
    const value = arr[i]
    if(occurrences[value]){
      occurrences[value] = occurrences[value] + 1
    }else{
      occurrences[value] = 1
    }
  }

  return isUnique(Object.values(occurrences))
};

const isUnique = (occurrences) => {
  const foundValues = new Set
  let valid = true

  for(let i=0; i < occurrences.length; i++){
    if(foundValues.has(occurrences[i])){
      valid = false;
      break;
    }else{
      foundValues.add(occurrences[i])
    }
  }

  return valid
}

module.exports = {uniqueOccurrences}
