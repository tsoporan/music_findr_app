/*
 * Routes
 */

import * as m from "mithril";

import Layout from "./layout/Layout";

import Landing from "./views/Landing";

export default {
  "/": {
    view: function() {
      return m(Layout, m(Landing));
    }
  }
};
