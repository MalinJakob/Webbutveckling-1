// the program manage and calculate costs based on the user and their choices in form 
//by first registering the users choice of event and the number of hours 
//and images, and then calculating the total cost
//then manipulates HTML elements to display the estimated cost

let previousBasePrice = 0

//takes in values and reacts on events to go to calculate the input of chosen event
function initPriceBoxes () {
  const eventInput = document.getElementById('event')
  const hoursInput = document.getElementById('hours')
  const imagesInput = document.getElementById('numberOfImages')
  const totalAmount = document.getElementById('totalAmount')

 //add eventListers to every box and inputs and calls selectedBox function or getTotal function
 //- if the user click on them  send with relevant values
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

//calculate the cost based on the values
//and parse values to integer or set to 0 if it is empty
//and then updates the display of total amount  
function getTotal (hoursInput, imagesInput, totalAmount, basePrice) {
  const hours = parseInt(hoursInput.value) || 0
  const images = parseInt(imagesInput.value) || 0
  const total = basePrice + hours * 100 + images * 5
  previousBasePrice = basePrice
  totalAmount.value = `$${total}`
}

//handles the values from the selected box and get the box attribute 
//then call on the getTotal function to calculate total amount with 
//the values
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

//initiate the box based on the URL parameters 
//checks if there is an event specified in the query string
//if there is a correspondent box with the event name then get
//the values and the call on the selectedBox function with the values 
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

//search through the URL query string for the 'event' 
//get the value of event if exist 
//then return the value
function getEventName () {
  const queryString = window.location.search
  const searchQuery = new URLSearchParams(queryString)
  const eventName = searchQuery.get('event')
  return eventName
}

//when document is ready, call the functions within 
$(document).ready(function () {
  initPriceBoxes()
  initSelectedBox()
})
