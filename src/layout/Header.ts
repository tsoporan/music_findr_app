import m from "mithril";

import User from "../models/User";

import { PrimaryButton } from "../components/Button";

function Header() {
  return {
    view: function() {
      return m(
        "header",
        {
          class: "flex w-full justify-between"
        },
        [
          m(
            "h1",
            {
              class: "text-white text-lg font-mono text-5xl py-4 w-1/2",
              style: "font-family: Indie Flower, cursive"
            },
            "music.findr"
          ),

          m(
            "nav",
            {
              class: "w-1/2 flex justify-end items-center"
            },
            [
              User.name
                ? m(
                    "span",
                    { style: "height: 50px; padding: 15px" },
                    `'Sup, ${User.name}`
                  )
                : m(PrimaryButton, {
                    onclick: () => {
                      User.signIn().then(m.redraw);
                    },
                    text: "Sign in"
                  }),

              User.name &&
                m(PrimaryButton, {
                  onclick: () => {
                    User.signOut().then(m.redraw);
                  },
                  text: "Sign out",
                  style: "height: 50px"
                })
            ]
          )
        ]
      );
    }
  };
}

export default Header;
