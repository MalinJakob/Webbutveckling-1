$('#smallCircle').animate({
  opacity: '0.5',
  height: '150px',
  width: '150px'
},700)

$('#bigCircle').animate({
  opacity: '0.5',
  height: '150px',
  width: '150px'
}, 1000)

const $h2 = $('h2')
$h2.delay(200).animate({
  fontSize: '3em'
}, 1000, 'linear' , function(){
  alert("The page is ready for the next step");
})