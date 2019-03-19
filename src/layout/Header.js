import m from 'mithril'

import { User, signIn, signOut } from '../models/User'

import { PrimaryButton } from '../components/buttons'

function Header (initialVnode) {
  return {
    view: function (vnode) {
      const user = User.current || {}

      return m('header', {}, [
        m('h1', 'Music Findr'),

        user.name
          ? m('p', {}, `Welcome, ${user.name}`)
          : m(PrimaryButton, {
            onclick: e => {
              signIn().then(m.redraw)
            },
            text: 'Sign in'
          }),

        user.name &&
          m(PrimaryButton, {
            onclick: e => {
              signOut().then(m.redraw)
            },
            text: 'Sign out'
          })
      ])
    }
  }
}

export default Header
