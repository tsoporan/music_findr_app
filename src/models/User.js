const User = {
  isAuthed: false,
  current: null
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
  })
}

function signOut (evt) {
  const authInstance = window.gapi.auth2.getAuthInstance()

  return authInstance.signOut().then(() => {
    User.isAuthed = false
    User.current = null
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
  }
}

export { User, signIn, signOut, initUser, updateSigninStatus }
