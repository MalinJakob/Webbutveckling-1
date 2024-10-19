//read in query from form and add it so HTML as message to welcome the user in
function getQueryString () {
  const queryString = window.location.search
  const searchQuery = new URLSearchParams(queryString)
  const name = searchQuery.get('name')
  const email = searchQuery.get('email')
  // add the welcome text with the name from user
  //extract everything on the lest of @ to generate the username
  const message = document.getElementById("welcomeMessage")
  message.innerHTML = `Welcome ${name}! Your user name is ${email.match(/^[^@]+/)[0]} `
}

//läs på om hur man renderar ett listItem objekt dynamiskt

//i listan av contacts, lägg till infom om
//hur många dagar det är kvar till födelsedagen
//detta får du göra genom att arbeta med datumet new Date()

//grund layout borde rimligtvis vara

//ha en eventListener på eventet submit för formuläret
//i det här fallet vill du preventa default
//för varje gång man klickar submit ska listan uppdateras
//och du ska lägga till ett nytt LI i din UL

getQueryString()