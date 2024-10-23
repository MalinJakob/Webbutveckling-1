
function myButtonFunction () {
  
  const myLink = document.getElementById('myLink')
  myLink.addEventListener('click', function (event) {
    event.preventDefault()
    alert('The Button is NOT in Use ')
  })
  
  const myButton = document.getElementById('myButton')

  myButton.onmouseover = function (event) {
    const target = event.target
    target.style.background = 'green'
    const infoAboutPageCorX = event.pageX
    const infoAboutPageCorY = event.pageY
    console.log('The mouse X-coordinates are: ' + infoAboutPageCorX)
    console.log('The mouse Y-coordinates are: ' + infoAboutPageCorY)
  }

  myButton.onmouseout = function (event) {
    const target = event.target
    target.style.background = ''
  }

  //gör en del där vi tar in massa klicks och om de har 
  // klickat x-anatl gågner så tar vi bort event listnernen med prevent default 
  //const saveContactButton = document.getElementById('addContactButton')
  //saveContactButton.addEventListener('click', function () {
  //console.log('clicked')
//})
}

myButtonFunction()
