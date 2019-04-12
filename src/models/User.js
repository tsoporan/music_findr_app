/*
 * User model
 */

const User = {
  isAuthed: false,
  current: null,
  client: null,
  loading: false,
  subscriptions: []
}

function signIn (evt) {
  const authInstance = window.gapi.auth2.getAuthInstance()

  return authInstance.signIn().then(() => {
    const { currentUser } = authInstance
    const userDetails = currentUser.Ab.w3

    User.current = {
      name: userDetails.ig,
      email: userDetails.U3
    }
    User.client = window.gapi.client.youtube
  })
}

function signOut (evt) {
  const authInstance = window.gapi.auth2.getAuthInstance()

  console.log('logging out', authInstance)

  return authInstance.signOut().then(() => {
    User.isAuthed = false
    User.current = null
    User.client = null
  })
}

function updateSigninStatus (isSignedIn) {
  User.isAuthed = isSignedIn
}

function initUser (authInstance) {
  // Fired when the user signs in

  const { currentUser } = authInstance
  const userDetails = currentUser.Ab.w3

  if (userDetails) {
    User.isAuthed = true
    User.current = {
      name: userDetails.ig,
      email: userDetails.U3
    }
    User.client = window.gapi.client.youtube
  }
}

export { User, signIn, signOut, initUser, updateSigninStatus }
