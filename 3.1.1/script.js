//Takes in todays date and adds it to a list if the day number
//is over 10 when multiplied with a random number and
//we only like days starting with a 't' or 's'

function importantDaySaver () {
  globalThis.window.alert("Welcome! Please open to console to use this application")

  const weekdays = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
  ]
  const importantDays = []

  const myDate = new Date()
  const dayNumber = myDate.getDate()
  console.log('The date number of today i: ' + dayNumber)
  const myDateString = 'Todays date is: '
  const totalDate = myDateString + myDate
  console.log(totalDate)

  //use math to generate a random number and multiplies it 10 and add 1
  //use the random number plus the day from Date to get a total 
  const random = Math.floor(Math.random() * 10) + 1
  const total = random + dayNumber
  console.log('Number of today + a random number is: ' + total)

  //checks if the total is over 10 and if the day starts with a t or a s, 
  //if true make text string to upper case and add to important day list 
  const isAGoodWeekday = weekdays[myDate.getDay()].match(/(^t)|(^s)/i)
  if (total > 10 && isAGoodWeekday) {
    const importantDate = 'Important date!! '
    const makeUpper = importantDate.toLocaleUpperCase()
    const totalUpperDate = makeUpper + myDate
    console.log(totalUpperDate)

    importantDays.push(dayNumber)
  }
  console.log('\nMy important days are ' + importantDays)
}
importantDaySaver()
