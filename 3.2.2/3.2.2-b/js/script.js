//a program that illustrates animations to text and shapes 
//and display a message to the user in the end

//animate the small circle to change shape with set duration
$('#smallCircle').animate({
  opacity: '0.5',
  height: '150px',
  width: '150px'
},700)


//animate the big circle to change shape with set duration 
$('#bigCircle').animate({
  opacity: '0.5',
  height: '150px',
  width: '150px'
}, 1000)

//animate the h2 to animate the font size with a delay and set duration
//when the animation is done, a message is shown on the screen
const $h2 = $('h2')
$h2.delay(200).animate({
  fontSize: '3em'
}, 1000, 'linear' , function(){
  alert("The page is ready for the next step");
})