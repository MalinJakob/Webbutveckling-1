//Takes in todays date and adds it to a list if the day number
//is over 10 when multiplied with a random number and
//if !! is found in the string around the date

function importantDaySaver () {
  const importantDays = []

  const myDate = new Date()
  const dayNumber = myDate.getDate()
  console.log('The date number of today i: ' + dayNumber)
  const myDateString = 'Todays date is: '
  const totalDate = myDateString + myDate
  console.log(totalDate)

  const random = Math.floor(Math.random() * 10) + 1
  const total = random + dayNumber
  console.log('Number of today + a random number is: ' + total)

  if (total > 10) {
    const importantDate = 'Important date!! '
    const makeUpper = importantDate.toLocaleUpperCase()
    const totalUpperDate = makeUpper + myDate
    console.log(totalUpperDate)
    const isUpper = makeUpper.match(/[!!]/i)
    console.log(isUpper)
    if (isUpper) {
      importantDays.push(total)
    }
    console.log('\nMy important days are ' + importantDays)
  }
}
importantDaySaver()
