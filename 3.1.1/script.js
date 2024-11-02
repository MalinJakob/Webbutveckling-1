// the program checks 
// - if todays date qualifies as an important day based on set criteria
// - criteria: is the day number + random number is > 10, and the weekday must start with 't' or 's'
// - then todays day number is added to the list of important days


//creates a list of weeks and the empty list for important days
// - use Date method to get todays day and add together with pre written text to display
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

  //use Math method to generate a random number and add it to todays day number
  const random = Math.floor(Math.random() * 10) + 1
  const total = random + dayNumber
  console.log('Number of today + a random number is: ' + total)

  //checks if the total is over 10 and if the day starts with a 't' or a 's', 
  //- if true make text string to upper case and add to important day list 
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
