//program that checks if ypu are not a robot and answer a question
//correct you can continue and displays a message if the date i right  

//when the page is ready a message is shown
function x() {
  window.alert('Page is ready for yaa!'); 
}

document.getElementById("b").addEventListener("click", x);

// use the Math method to generate a random math question confirms if the users answer is correct
function notRobotQuestion () {

  // a random number between 1 and 10 is generated and added to 2 to create the question
  // the question is displayed on the page
  const randomNum = Math.floor(Math.random() * 10) + 1
  const total = randomNum + 2
  const notRobot = document.getElementById('notRobot')
  notRobot.innerHTML = `What is ${randomNum} + 2?`

  const message = document.getElementById('message')
  const submitButton = document.getElementById('submitButton')
  const userAnswerInput = document.getElementById('userAnswer')

// as the user types their answer is checked by the eventListner
// - if the answer is correct a success message appears and submit button is enabled
// - else another messages is displayed and submit button continues to be disable
  userAnswerInput.addEventListener('input', function (event) {
    if (parseInt(event.target.value) === total) {
      message.innerText = 'You are NOT a robot, please continue'
      submitButton.disabled = false
    } else {
      submitButton.disabled = true
      message.innerText = 'Wrong answer'
    }
    
  })
}

//use the Date method to get the todays month
// - if the month is 9 or 10 the element forFree is removed 
function notForFree(){
  const getMonth = new Date()
  const todaysMonth = getMonth.getMonth()
  console.log(getMonth)
  if (todaysMonth === 9 || todaysMonth === 10 ){
    const forFree = document.getElementById('forFree')
    const removeForFree = forFree.remove()
  }
}

notRobotQuestion()
notForFree()

