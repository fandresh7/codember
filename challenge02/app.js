const letters = [
  { letter: 'a', value: 97 },
  { letter: 'b', value: 98 },
  { letter: 'c', value: 99 },
  { letter: 'd', value: 100 },
  { letter: 'e', value: 101 },
  { letter: 'f', value: 102 },
  { letter: 'g', value: 103 },
  { letter: 'h', value: 104 },
  { letter: 'i', value: 105 },
  { letter: 'j', value: 106 },
  { letter: 'k', value: 107 },
  { letter: 'l', value: 108 },
  { letter: 'm', value: 109 },
  { letter: 'n', value: 110 },
  { letter: 'o', value: 111 },
  { letter: 'p', value: 112 },
  { letter: 'q', value: 113 },
  { letter: 'r', value: 114 },
  { letter: 's', value: 115 },
  { letter: 't', value: 116 },
  { letter: 'u', value: 117 },
  { letter: 'v', value: 118 },
  { letter: 'w', value: 119 },
  { letter: 'x', value: 120 },
  { letter: 'y', value: 121 },
  { letter: 'z', value: 122 }
]

const getWord = (word) => {
  let acum = '', result = ''

  Array.from(word).forEach( number => {
    acum += number
    const ascii = letters.find( item => item.value === Number(acum))

    if(ascii) {
      result += ascii.letter
      acum = ''
    }
  })

  return result
}

const init = () => {
  const x = '11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101'
  const words = x.split(' ')

  const result = words.map( word => getWord(word))  
  console.log({ result: result.join(' ') })
}

init()
