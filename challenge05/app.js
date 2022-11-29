import fs from 'fs'

const kill = (array) => {
  
  const newArray = []
  for(let i = 0; i <= array.length - 1; i += 2) {
    const actual = array[i]
    const next = array[i + 1]

    if(!next) newArray.shift()
    newArray.push(actual)
  }

  return newArray
}

const getSurviveItem = (data) => {
  let result = data.map( (item, index) => `${ item }-${ index }`)
  while (result.length > 1) {
    result = kill(result)
  }

  return `submit ${ result[0] ?? 'no-found' }`
}

const init = () => {
  const languages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  console.log(getSurviveItem(languages))

  const rawdata = fs.readFileSync('./challenge05/data.json')
  const mecenas = JSON.parse(rawdata)
  console.log(getSurviveItem(mecenas))
}

init()
