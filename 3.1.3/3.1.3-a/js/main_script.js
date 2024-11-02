//part of the program where you can add contacts and specify how 
// you want to receive your notices and providing an overview of the added contacts

//search for the query string from the URL
// - get name and email from query string an use to display welcome message to user 
function getQueryString () {

  const queryString = window.location.search
  const searchQuery = new URLSearchParams(queryString)
  const name = searchQuery.get('name')
  const email = searchQuery.get('email')
  const message = document.getElementById('welcomeMessage')
  message.innerHTML = `Welcome ${name}! Your user name is ${
    email.match(/^[^@]+/)[0]
  } `

  // changes the class of the header from 'myHeader' to 'differentHeader'
  const classHeader = document.getElementsByClassName('myHeader')
  const myHeader = classHeader[0]
  console.log(myHeader)
  if (myHeader.classList.contains('myHeader')) {
    myHeader.classList.remove('myHeader')
    myHeader.classList.add('differentHeader')
  }
}

// gets the button and adds event listener 'clicks'
// - if clicked display 'click'
const saveContactButton = document.getElementById('addContactButton')
saveContactButton.addEventListener('click', function () {
  console.log('clicked')
})


// get the 'birthday' input and add eventListener 'keydown' & 'keyup'
// - when the action is done by the user display the key 
const birthdayInput = document.getElementById('birthday')
birthdayInput.addEventListener('keydown' , function (event){
  console.log('Key pressed down: ' + event.key);
})
birthdayInput.addEventListener('keyup' , function (event){
  console.log('Key letted go: ' + event.key);
})


const contacts = []

//add contacts to the list 
function addContact () {
  const contactForm = document.getElementById('contactForm')
  const contactList = document.getElementById('contactList')
  const nameFocus = document.getElementById('contactName')
  nameFocus.focus()

  // add event listener to form submission
  //get values from the input fields and check if favorite person is clicked 
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const contactName = document.getElementById('contactName').value
    const contactBirthday = document.getElementById('birthday').value

  
    const notification = Array.from(
      document.getElementById('notificationOption').selectedOptions
    ).map(option => option.value)

    const favoritePerson = document.getElementById('favoritePerson').checked

    let chosenNotices = notification
    // pre settings to notification options based on the users input
    if (favoritePerson) {
      chosenNotices = ['day', 'week', 'month']
    } else if (notification.includes('all')) {
      chosenNotices = ['day', 'week', 'month']
    }

     // adds contact information to the contacts list
     //-  if a name is provided
    if (contactName)
      contacts.push({
        contactName,
        contactBirthday,
        notification: chosenNotices,
        favoritePerson
      })

    // creates new list item to display contact information
    // add the new list item to the contact list
    const listItem = document.createElement('li')
    listItem.innerText = `Name: ${contactName}
      Birthday: ${contactBirthday}
      Notices: ${notification.join(', ')}
      Favorite Person: ${favoritePerson ? 'Yes' : 'No'}
      `
    contactList.appendChild(listItem)

    // gets the birthday list for the current month using the Date method
    const birthdayMonthList = document.getElementById('birthdayListThisMonth')
    const currentMonth = new Date().getMonth()

    // checks if the contacts birthday is in the current month
    // - if true add information to the birthdayMonth list

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

//when page is loaded display message and call the functions within
window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  getQueryString()
  addContact()
});
