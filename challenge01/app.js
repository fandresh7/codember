import fs from 'fs'

const getUsers = (arrayData) => {
  const users = []
  let index = 0

  arrayData.forEach( item => {
    if(item === '') index += 1

    if(!users[index]) users[index] = ''
    users[index] += `${ item } `
  })

  return users
}

const getUser = (userString) => {
  const userArray = userString.trim().split(' ')
  const user = userArray.map( user => user.split(':'))
  return Object.fromEntries(user)
}

const isValidUser = (user) => {
  const validFields = ['usr', 'eme', 'psw', 'age', 'loc', 'fll']
  return validFields.every( field => user.hasOwnProperty(field))
}

const init = () => {
  const fileData = fs.readFileSync('./challenge01/data.txt', 'utf8')
  const arrayData = fileData.replace(/(\r\n|\n|\r)/gm, "*").split('*')
  const usersData = getUsers(arrayData)
  const users = usersData.map( user => getUser(user))
  const validUsers = users.filter( user => isValidUser(user))
  
  const lastValidUser = validUsers[validUsers.length - 1]
  console.log({ amount: validUsers.length, user: lastValidUser }) 
}

init()
