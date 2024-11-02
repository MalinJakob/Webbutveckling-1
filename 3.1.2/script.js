//parent control where you add how many second you can play 
//when the seconds passed the window closes automatically 

function parentControl () {
  window.alert('Welcome!!')

  const wantsToPlay = confirm('Do you want to play a game?')

  if (!wantsToPlay) {
    return
  }

  let numberOfSeconds = window.prompt(
    'Parent control: For how long (seconds) are you allowed to play?'
  )

  //setting an interval of 1 second that displays text in the console
  const interval = setInterval(function () {
    console.log('Still playing!')
  }, 1000)

  const myWindow = window.open(
    'https://www.spela.se/spel_/free-the-ball',
    '_blank',
    'width=1000, height=1500'
  )

  //setting a timeout to close the window when the input times 1000 from prompt
  //is passed and clear the interval
  const myTimeout = setTimeout(function () {
    myWindow.window.close()
    clearInterval(interval)
  }, numberOfSeconds * 1000)

  const container = document.getElementById('container')
  container.innerHTML = `
    <button id="button">
      Exit
    </button>
  `

  const button = document.getElementById('button')

  //waiting for the user click on button, when clicked the window closes
  //and clears interval plus timeout
  button.addEventListener('click', function () {
    myWindow.window.close()
    clearInterval(interval)
    clearTimeout(myTimeout)
  })
}

parentControl()
