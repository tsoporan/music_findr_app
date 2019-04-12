import * as m from "mithril";

import config from "./config";
import routes from "./routes";

import User from "./models/User";

import "./styles.css";

function loadApp() {
  const root = document.getElementById("app");
  m.route(root, "/", routes);
}

window.onload = function() {
  const gapi = window["gapi"];

  gapi.load("client:auth2", () => {
    gapi.client
      .init({
        discoveryDocs: config.DISCOVERY_DOCS,
        clientId: config.CLIENT_ID,
        scope: config.SCOPES
      })
      .then(() => {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(User.updateSigninStatus);

        // Handle the initial sign-in state.
        User.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

        // User.initUser(gapi.auth2.getAuthInstance());
        User.initUser(gapi);

        // Start app when GAPI is init'd
        loadApp();
      });
  });
};
