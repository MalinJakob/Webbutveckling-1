
function myButtonFunction(){

  const myButton = document.getElementById('myButton')

  myButton.onmouseover = function(event) {
    const target = event.target;
    target.style.background = 'green';
    const infoAboutPageCorX = event.pageX
    const infoAboutPageCorY = event.pageY
    console.log('The mouse X-coordinates are: ' + infoAboutPageCorX)
    console.log('The mouse Y-coordinates are: ' + infoAboutPageCorY)
  };

  myButton.onmouseout = function(event) {
    const target = event.target;
    target.style.background = '';
  };
}

myButtonFunction()

