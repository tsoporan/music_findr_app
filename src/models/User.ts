/*
 * User model
 */

const User = {
  name: "",
  email: "",
  isAuthed: false,
  loading: false,
  subscriptions: {
    loading: false,
    items: []
  },
  _client: null, // Store a reference to the authed client

  signIn(): void {
    const authInstance = this._client && this._client.auth2.getAuthInstance();
    console.log("Sign in", authInstance);

    return (
      authInstance &&
      authInstance.signIn().then(() => {
        const { currentUser } = authInstance;
        const userDetails = currentUser.Ab.w3;

        this.name = userDetails.ig;
        this.email = userDetails.U3;
      })
    );
  },

  signOut(): void {
    const authInstance = this._client && this._client.auth2.getAuthInstance();
    console.log("Sign out", authInstance);

    return (
      authInstance &&
      authInstance.signOut().then(() => {
        this.isAuthed = false;
      })
    );
  },

  updateSigninStatus(isSignedIn: boolean): void {
    User.isAuthed = isSignedIn;
  },

  initUser(gapi): void {
    // Fired after the client (gapi) is loaded and authed

    const authInstance = gapi.auth2.getAuthInstance();

    const { currentUser } = authInstance;
    const userDetails = currentUser.Ab.w3;

    if (userDetails) {
      this.isAuthed = true;
      this.name = userDetails.ig;
      this.email = userDetails.U3;
    }

    this._client = gapi;
  }
};

export default User;
