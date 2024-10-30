//get query string from form to generate input
//in contact form 

function getQueryString () {
  const queryString = window.location.search
  const searchQuery = new URLSearchParams(queryString)
  const eventName = searchQuery.get('event')
  const hours = searchQuery.get('hours')
  const numImg =  searchQuery.get('numberOfImages')
  const total =  searchQuery.get('totalAmount')

  const message = document.getElementById('message')
  if (!eventName) {
    message.innerText = ''
  }
  else{
    message.innerText = `Chosen event: ${eventName}
    Hours ${hours}
    Number of images: ${numImg}
    Total Price : ${total}  `
  }
}

$(document).ready(function () {
  getQueryString()
})