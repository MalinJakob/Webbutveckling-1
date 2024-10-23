//application where you can register to get notices when a
//added contact hade their birthday, on given times by the user 

function x() {
  window.alert('Page is ready for yaa!'); 
}

document.getElementById("b").addEventListener("click", x);


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

