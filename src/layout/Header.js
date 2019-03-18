import m from 'mithril'

import { User, signIn, signOut } from '../models/User'

function Header (initialVnode) {
  return {
    view: function (vnode) {
      const user = User.current || {}

      return m('header', {}, [
        m('h1', 'Music Findr'),

        user.name
          ? m('p', {}, `Welcome, ${user.name}`)
          : m(
            'button',
            {
              onclick: e => {
                signIn().then(m.redraw)
              }
            },
            'Sign in with Youtube'
          ),

        user.name &&
          m(
            'button',
            {
              onclick: e => {
                signOut().then(m.redraw)
              }
            },
            'Sign out'
          )
      ])
    }
  }
}

export default Header
