//read in query from form and add it so HTML as message to welcome the user in
// add the welcome text with the name from user
//extract everything on the lest of @ to generate the username
//create empty array
//add contact function
//take in the element from html
//EventLister for waiting for the user to submit
//take in the value from the form from the user
// see what type of notices the user chooses for that contact
// add contact to array
// create a  new li element with the content of the new contact and add to ul in Html
//take in ul element and then create a new Date and use the method getMonth to get current month
//check if contacts birthday is current month and if the month match print it in the list
function getQueryString () {
  const queryString = window.location.search
  const searchQuery = new URLSearchParams(queryString)
  const name = searchQuery.get('name')
  const email = searchQuery.get('email')
  const message = document.getElementById('welcomeMessage')
  message.innerHTML = `Welcome ${name}! Your user name is ${
    email.match(/^[^@]+/)[0]
  } `
   
  const classHeader = document.getElementsByClassName('myHeader')
  const myHeader = classHeader[0]
  console.log(myHeader)
  if(myHeader.classList.contains('myHeader')){
    myHeader.classList.remove('myHeader');
    myHeader.classList.add('differentHeader');
  }
}

const contacts = []
function addContact () {
  const contactForm = document.getElementById('contactForm')
  const contactList = document.getElementById('contactList')

  //have the functions first then call the event listener with
  // the parameters and the function --> as th book s.273-276 se ex
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const contactName = document.getElementById('contactName').value
    const contactBirthday = document.getElementById('birthday').value

    //can the row below change to something similar to page 283 --> it is much lesser code
    //as well as more readable
    const notification = Array.from(
      document.getElementById('notificationOption').selectedOptions
    ).map(option => option.value)

    const favoritePerson = document.getElementById('favoritePerson').checked

    let chosenNotices = notification
    if (favoritePerson) {
      chosenNotices = ['day', 'week', 'month']
    } else if (notification.includes('all')) {
      chosenNotices = ['day', 'week', 'month']
    }

    if (contactName)
      contacts.push({
        contactName,
        contactBirthday,
        notification: chosenNotices,
        favoritePerson
      })
    const listItem = document.createElement('li')
    listItem.innerText = `Name: ${contactName}
      Birthday: ${contactBirthday}
      Notices: ${notification.join(', ')}
      Favorite Person: ${favoritePerson ? 'Yes' : 'No'}
      `
    contactList.appendChild(listItem)

    const birthdayMonthList = document.getElementById('birthdayListThisMonth')
    const currentMonth = new Date().getMonth()

    if (currentMonth === new Date(contactBirthday).getMonth()) {
      const listItem = document.createElement('li')
      listItem.innerHTML = `
      <p>
      Name: ${contactName}
      <br/> 
      Birthday: ${contactBirthday}
      <br/>
      Notices: ${notification.join(', ')}
      <br/>
      Favorite Person: ${favoritePerson ? 'Yes' : 'No'}
      </p>
      `
      birthdayMonthList.appendChild(listItem)
    }
  })
}

//ta bort ett HTML element - get by id then element.remove()
//ta in text content från html element

getQueryString()
addContact()
