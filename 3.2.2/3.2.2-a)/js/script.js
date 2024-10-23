
$('#smallCircle').hide()
$('#bigCircle').hide()
$('#smallCircle').show(1000, 'swing')
$('#bigCircle').toggle(700, 'swing')

const $h1 = $('h1')
$h1.hide().fadeIn(1500)
$h1.delay('slow').fadeOut(1000)

const $h2 = $('h2')
$h2.hide().delay('slow').fadeToggle(3000)

const $p = $('p')
$p.hide().delay('slow').fadeTo(3000, 1)

