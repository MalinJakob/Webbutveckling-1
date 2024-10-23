const myLink = document.getElementById('myLink')

function notClickable (event){
  event.preventDefault()
    alert('The Button is NOT in Use ')
}



function myButtonFunction () {
  
  myLink.addEventListener('click', notClickable)
  setTimeout(function(){
    myLink.removeEventListener('click' , notClickable)
  },10000)
  
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

}


myButtonFunction()