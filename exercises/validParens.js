const isValid = (s) => {
  if(s == ''){
    return true
  }

  const closingOrder = []
  let valid = true

  for(let i=0; i < s.length; i++){
    if(!valid){
      break
    }

    if(isOpener(s[i])){
      closingOrder.push(s[i])
    }else{
      const matchingOpener = pairing[s[i]]
      const actualOpener = closingOrder.pop()

      if(actualOpener != matchingOpener){
        valid = false
      }
    }
  }

  if(closingOrder.length != 0){
    valid = false
  }

  return valid
};

const pairing = {
  ']': '[',
  '}': '{',
  ')': '('
}

const isOpener = (char) => {
  return ['[', '{', '('].includes(char)
}

module.exports = { isValid }