//a program that illustrates different effect to text and shapes

//effect to circle to hide, then show with the 
//circle with swing propert in different ways 
$('#smallCircle').hide()
$('#bigCircle').hide()
$('#smallCircle').show(1000, 'swing')
$('#bigCircle').toggle(700, 'swing')

//add the effect of fade in and fade out
const $h1 = $('h1')
$h1.hide().fadeIn(1500)
$h1.delay('slow').fadeOut(1000)

const $h2 = $('h2')
$h2.hide().delay('slow').fadeToggle(3000)

const $p = $('p')
$p.hide().delay('slow').fadeTo(3000, 1)

