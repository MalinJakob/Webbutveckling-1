//add Sign Up function with 3 required inputs; Name, Email and answer if it is Not a Robot
//If everything is true the submit button will be clickable and the form is ready for submission

// function signUpForm () {
//   const signUp = document.getElementById('signUp')
//   signUp.addE.ventListener('submit', function (event) {
//     const name = document.getElementById('name').value
//     const email = document.getElementById('email').value
//   })
// }
//print the question
//handle changes to the input field

function notRobotQuestion () {

  const randomNum = Math.floor(Math.random() * 10) + 1
  const total = randomNum + 2
  const notRobot = document.getElementById('notRobot')
  notRobot.innerHTML = `What is ${randomNum} + 2?`

  const message = document.getElementById('message')
  const submitButton = document.getElementById('submitButton')
  const userAnswerInput = document.getElementById('userAnswer')
 
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

//add contacts to lits. Get both value of name and the birthday stored in an array
// const contacts = []

// function addContact (name, birthday) {
//   var obj = {}
//   obj[name] = birthday
//   contacts.push(obj)
// }
// const contactName = document.getElementById('contactName').value
// const contactBirthday = documents.getElementById('birthday').value
//addContact(contactName, contactBirthday)
