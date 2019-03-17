import m from 'mithril'

import yt from './clients/yt'

const root = document.body

const App = {
  view: () => {
    return m('main', [
      m('h1', 'Music Findr'),
      m(
        'button',
        {
          onclick: function () {
            yt.signIn()
          }
        },
        'Sign in with Youtube'
      ),
      m(
        'button',
        {
          onclick: function () {
            yt.signOut()
          }
        },
        'Sign out'
      )
    ])
  }
}

m.mount(root, App)
