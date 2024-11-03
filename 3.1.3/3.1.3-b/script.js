//program that disables a button for 10 seconds and displays a message
// - if it is clicked within those seconds
//when user hovers over the button the coordinates of the pointer is displayed in the console

const myLink = document.getElementById('myLink')

//add eventListener to prevent normal behavior and show message to user
function notClickable (event){
  event.preventDefault()
    alert('The Button is NOT in Use ')
}

// add event listener to the button
// - when clicked sets a timeout to remove event listener after 10 seconds
function myButtonFunction () {
  
  myLink.addEventListener('click', notClickable)
  setTimeout(function(){
    myLink.removeEventListener('click' , notClickable)
  },10000)
  
  // gets button add eventListener and 
  // - if the mouse is over the button change the background color
  //- and display the coordinates in console 
  const myButton = document.getElementById('myButton')
  myButton.onmouseover = function (event) {
    const target = event.target
    target.style.background = 'green'
    const infoAboutPageCorX = event.pageX
    const infoAboutPageCorY = event.pageY
    console.log('The mouse X-coordinates are: ' + infoAboutPageCorX)
    console.log('The mouse Y-coordinates are: ' + infoAboutPageCorY)
  }

  //sets the eventListener for the mouse out and change the background color back 
  myButton.onmouseout = function (event) {
    const target = event.target
    target.style.background = ''
  }

}

myButtonFunction()