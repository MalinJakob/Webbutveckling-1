// the program manage and calculate costs based on the user's choices in form 
//by first registering the user's choice of event and the number of hours 
//and images, and then calculating the total cost
//then manipulates HTML elements to display the estimated cost

let previousBasePrice = 0

function initPriceBoxes () {
  const eventInput = document.getElementById('event')
  const hoursInput = document.getElementById('hours')
  const imagesInput = document.getElementById('numberOfImages')
  const totalAmount = document.getElementById('totalAmount')

  document.querySelectorAll('#priceBox .box').forEach(box => {
    box.addEventListener('click', () =>
      selectBox(box, eventInput, hoursInput, imagesInput, totalAmount)
    )
  })
  hoursInput.addEventListener('input', () =>
    getTotal(hoursInput, imagesInput, totalAmount, previousBasePrice)
  )
  imagesInput.addEventListener('input', () =>
    getTotal(hoursInput, imagesInput, totalAmount, previousBasePrice)
  )
}

function getTotal (hoursInput, imagesInput, totalAmount, basePrice) {
  const hours = parseInt(hoursInput.value) || 0
  const images = parseInt(imagesInput.value) || 0
  const total = basePrice + hours * 100 + images * 5
  previousBasePrice = basePrice
  totalAmount.value = `$${total}`
}

function selectBox (box, eventInput, hoursInput, imagesInput, totalAmount) {
  const eventName = box.getAttribute('data-event')
  const defaultHours = box.getAttribute('data-hours')
  const defaultImages = box.getAttribute('data-images')
  const basePrice = parseInt(box.getAttribute('data-price'))

  eventInput.value = eventName
  hoursInput.value = defaultHours
  imagesInput.value = defaultImages
  getTotal(hoursInput, imagesInput, totalAmount, basePrice)
}

function initSelectedBox () {
  const eventName = getEventName()

  if (!eventName) {
    return
  }

  const box = document.getElementById(eventName)
  if (box) {
    const eventInput = document.getElementById('event')
    const hoursInput = document.getElementById('hours')
    const imagesInput = document.getElementById('numberOfImages')
    const totalAmount = document.getElementById('totalAmount')
    selectBox(box, eventInput, hoursInput, imagesInput, totalAmount)
  }
}

function getEventName () {
  const queryString = window.location.search
  const searchQuery = new URLSearchParams(queryString)
  const eventName = searchQuery.get('event')
  return eventName
}

$(document).ready(function () {
  initPriceBoxes()
  initSelectedBox()
})
