import m from 'mithril'

import CardList from '../components/CardList'

import { getSubscriptions } from '../api/yt'

import { User } from '../models/User'

const Landing = {
  oninit: async vnode => {
    await getSubscriptions(User)
    m.redraw()
  },

  view (vnode) {
    const { loading, subscriptions } = User

    return m(
      'div',
      loading
        ? 'Loading ...'
        : m(CardList, {
          items: subscriptions
        })
    )
  }
}

export default Landing
