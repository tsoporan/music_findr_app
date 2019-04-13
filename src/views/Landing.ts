import m from "mithril";

import CardList from "../components/CardList";

import { loadSubscriptions } from "../api/yt";

import User from "../models/User";

const Landing = {
  oninit: async () => {
    await loadSubscriptions(User);
    m.redraw();
  },

  view() {
    const { loading, subscriptions } = User;

    return m(
      "div",
      loading
        ? "Loading ..."
        : m(CardList, {
            items: subscriptions
          })
    );
  }
};

export default Landing;
