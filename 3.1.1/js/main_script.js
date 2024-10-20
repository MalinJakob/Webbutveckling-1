//read in query from form and add it so HTML as message to welcome the user in
function getQueryString () {
  const queryString = window.location.search
  const searchQuery = new URLSearchParams(queryString)
  const name = searchQuery.get('name')
  const email = searchQuery.get('email')
  // add the welcome text with the name from user
  //extract everything on the lest of @ to generate the username
  const message = document.getElementById('welcomeMessage')
  message.innerHTML = `Welcome ${name}! Your user name is ${
    email.match(/^[^@]+/)[0]
  } `
}

//create empty array
const contacts = []

//add contact function
function addContact () {
  //take in the element from html
  const contactForm = document.getElementById('contactForm')
  const contactList = document.getElementById('contactList')

  //EventLister for waiting for the user to submit
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault()

    //take in the value from the form from the user
    const contactName = document.getElementById('contactName').value
    const contactBirthday = document.getElementById('birthday').value
    const notification = Array.from(
      document.getElementById('notificationOption').selectedOptions
    ).map(option => option.value)
    const favoritePerson = document.getElementById('favoritePerson').checked

    // see what type of notices the user chooses for that contact
    let chosenNotices = notification
    if (favoritePerson) {
      chosenNotices = ['day', 'week', 'month']
    } else if (notification.includes('all')) {
      chosenNotices = ['day', 'week', 'month']
    }
    // add contact to array
    contacts.push({
      contactName,
      contactBirthday,
      notification: chosenNotices,
      favoritePerson
    })
    // create a  new li element with the content of the new contact and add to ul in Html
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
    contactList.appendChild(listItem)

    //take in ul element and then create a new Date and use the method getMonth to get current month
    const birthdayMonthList = document.getElementById('birthdayListThisMonth')
    const currentMonth = new Date().getMonth()
    
    //check if contacts birthday is current month and if the month match print it in the list 
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




getQueryString()
addContact()
