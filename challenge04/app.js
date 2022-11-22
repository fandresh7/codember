
const validateNumber = (numbers) => {
  
  const numberString = String(numbers)
  const numbersArray = Array.from(numberString)

  const validateRepeated = numberString.split('55').length > 1
  const validateDigits = numberString.length === 5
  const greaterOrEqualToLeft = numbersArray.every( (number, index) => {
    const leftNumber = numberString[index - 1]
    if(!leftNumber) return true

    if(number >= leftNumber) return true
    return false
  })

  return validateDigits && validateRepeated && greaterOrEqualToLeft
}

const init = () => {
  const initial = 11098
  const final = 98123

  const numbers = []
  for(let i = initial; i <= final; i++) {
    const isValidNumber = validateNumber(i)
    if(isValidNumber) numbers.push(i)
  }

  console.log(`submit ${ numbers.length }-${ numbers[55] }`)
}

init()
