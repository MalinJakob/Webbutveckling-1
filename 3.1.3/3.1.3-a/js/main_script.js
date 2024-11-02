//part of the application where you can add contact and how you want 
//their notices to be and add them to a list for the user to see
// as an overview 

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
  if (myHeader.classList.contains('myHeader')) {
    myHeader.classList.remove('myHeader')
    myHeader.classList.add('differentHeader')
  }
}

const saveContactButton = document.getElementById('addContactButton')
saveContactButton.addEventListener('click', function () {
  console.log('clicked')
})

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

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const contactName = document.getElementById('contactName').value
    const contactBirthday = document.getElementById('birthday').value

  
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

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  getQueryString()
  addContact()
});
