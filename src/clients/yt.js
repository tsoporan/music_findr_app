const CLIENT_ID =
  '48208155174-sibn5u4cl10jms45atf5hgh317t5k9un.apps.googleusercontent.com'
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly'

const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'
]

window.onload = function () {
  loadClient()
}

function loadClient () {
  window.gapi.load('client:auth2', initClient)
}

function initClient () {
  console.log('init client')
  window.gapi.client
    .init({
      discoveryDocs: DISCOVERY_DOCS,
      clientId: CLIENT_ID,
      scope: SCOPES
    })
    .then(function () {
      // Listen for sign-in state changes.
      window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus)

      // Handle the initial sign-in state.
      updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get())
    })
}

function updateSigninStatus (isSignedIn) {
  if (isSignedIn) {
    console.log('Signed in')
  } else {
    console.log('Signed out')
  }
}

function signIn () {
  window.gapi.auth2.getAuthInstance().signIn()
}

function signOut () {
  window.gapi.auth2.getAuthInstance().signOut()
}

export default {
  signIn,
  signOut
}
