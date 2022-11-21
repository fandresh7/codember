import fs from 'fs'

const examples = [
  ['red', 'blue', 'red', 'blue', 'green'], // -> 4, blue
  ['green', 'red', 'blue', 'gray'], // -> 2, gray
  ['blue', 'blue', 'blue', 'blue'], // -> 1, blue
  ['red', 'green', 'red', 'green', 'red', 'green'], // -> 6, green
  ['blue', 'red', 'blue', 'red', 'gray'], // -> 4, red
  ['red', 'red', 'blue', 'red', 'red', 'red', 'green'], // -> 3, red
  ['red', 'blue', 'red', 'green', 'red', 'green', 'red', 'green'] // -> 6, green
]

const checkIsValidZebra = (array) => {
  return array.every( (color, index) => {
    if(color === array[0] && index % 2 === 0) return true
    if(color === array[1] && index % 2 === 1) return true
    return false
  })
}

const getLargestZebra = (colors) => {
  let zebra = [], largestZebra = []

  for(let i = 0; i <= colors.length - 1; i++) {
    const prevColor = colors[i - 1]
    const color = colors[i]
    
    zebra.push(color)
  
    const isValidZebra = checkIsValidZebra(zebra)
    if(!isValidZebra) zebra = [prevColor, color]
    
    // if zebra has 1 unique color, the array will contain just that color
    const checkContainsOneColor = zebra.length >= 2 && new Set(zebra).size === 1
    if(checkContainsOneColor) zebra = [color]

    if(zebra.length >= largestZebra.length) largestZebra = [... zebra]
  }
  
  return `submit ${ largestZebra.length }@${ largestZebra[largestZebra.length - 1] }`
}

const init = () => {
  const rawdata = fs.readFileSync('./challenge03/data.json');
  const colors = JSON.parse(rawdata);

  const examplesZebras = examples.map( example => getLargestZebra(example))
  console.log(examplesZebras)

  const zebra = getLargestZebra(colors)
  console.log(zebra)
}

init()
