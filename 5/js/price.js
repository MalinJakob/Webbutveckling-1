function initPriceBoxes () {
  const eventInput = document.getElementById('event')
  const hoursInput = document.getElementById('hours')
  const imagesInput = document.getElementById('numberOfImages')
  const totalAmount = document.getElementById('totalAmount')

  let basePrice = 0

  function getTotal () {
    const hours = parseInt(hoursInput.value) || 0
    const images = parseInt(imagesInput.value) || 0
    const total = basePrice + hours * 100 + images * 5
    totalAmount.value = `$${total}`
  }

  document.querySelectorAll('#priceBox .box').forEach(box => {
    box.addEventListener('click', () => {
      const eventName = box.getAttribute('data-event')
      const defaultHours = box.getAttribute('data-hours')
      const defaultImages = box.getAttribute('data-images')
      basePrice = parseInt(box.getAttribute('data-price'))

      eventInput.value = eventName
      hoursInput.value = defaultHours
      imagesInput.value = defaultImages

      getTotal()
    })
  })
  hoursInput.addEventListener('input', getTotal)
  imagesInput.addEventListener('input', getTotal)
}

$(document).ready(function () {
  initPriceBoxes()
})

