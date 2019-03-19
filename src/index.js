import m from 'mithril'

import config from './config'
import routes from './routes'

import { initUser, updateSigninStatus } from './models/User'

import './styles.css'

function loadApp () {
  const root = document.getElementById('app')
  m.route(root, '/', routes)
}

window.onload = function () {
  window.gapi.load('client:auth2', () => {
    window.gapi.client
      .init({
        discoveryDocs: config.DISCOVERY_DOCS,
        clientId: config.CLIENT_ID,
        scope: config.SCOPES
      })
      .then(() => {
        // Listen for sign-in state changes.
        window.gapi.auth2
          .getAuthInstance()
          .isSignedIn.listen(updateSigninStatus)

        // Handle the initial sign-in state.
        updateSigninStatus(
          window.gapi.auth2.getAuthInstance().isSignedIn.get()
        )

        initUser(window.gapi.auth2.getAuthInstance())

        // Start app when GAPI is init'd
        loadApp()
      })
  })
}
