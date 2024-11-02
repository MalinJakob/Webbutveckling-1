//get query string from form to manipulate message
//in textarea in contact form 


//search the URL for query string and create a message 
//to display with the values and pre written text
function getQueryString () {
  const queryString = window.location.search
  const searchQuery = new URLSearchParams(queryString)
  const eventName = searchQuery.get('event')
  const hours = searchQuery.get('hours')
  const numImg =  searchQuery.get('numberOfImages')
  const total =  searchQuery.get('totalAmount')

  // - if no event name do nothing 
  // - else display text with values 
  const message = document.getElementById('message')
  if (!eventName) {
    message.innerText = ''
  }
  else{
    message.innerText = `Chosen event: ${eventName}
    Hours: ${hours}
    Number of images: ${numImg}
    Total Price : ${total}  `
  }
}

//when document is ready call the function within 
$(document).ready(function () {
  getQueryString()
})