const numberForm = document.getElementById('numberForm')

numberForm.addEventListener('submit', function (event) {
  event.preventDefault()
  const number1 = document.getElementById('number1').value
  const number2 = document.getElementById('number2').value
  $('#result').html(`Result: ${data}`)
  $.get(
    `https://people.dsv.su.se/~pierre/i/05_ass/ip3/3/3.4/3.4.3/example.php?number1=${number1}&number2=${number2}`,
    '',
    data => {
      $('#result').html(`Result: ${data}`)
    }
  )
})
