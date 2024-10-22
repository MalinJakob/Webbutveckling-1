//part of the application where you can add contact and how you want 
//their notices to be and add them to a list for the user to see
// as an overview 

function getQueryString () {

  //ska jag lägga resten av programmet i funktionen? 
  window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
  });

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
  if (myHeader.classList.contains('myHeader')) {
    myHeader.classList.remove('myHeader')
    myHeader.classList.add('differentHeader')
  }
}
//borde jag göra något mer här?
const saveContactButton = document.getElementById('addContactButton')
saveContactButton.addEventListener('click', function () {
  console.log('clicked')
})

//kan vi diskutera varför man skulle vilja ha detta? 
const birthdayInput = document.getElementById('birthday')
birthdayInput.addEventListener('keydown' , function (event){
  console.log('Key pressed down: ' + event.key);
})
birthdayInput.addEventListener('keyup' , function (event){
  console.log('Key letted go: ' + event.key);
})

const contacts = []
function addContact () {
  const contactForm = document.getElementById('contactForm')
  const contactList = document.getElementById('contactList')
  const nameFocus = document.getElementById('contactName')
  nameFocus.focus()


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
