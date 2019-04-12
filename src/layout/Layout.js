import m from 'mithril'

import Header from './Header'
import Footer from './Footer'

const Layout = {
  view (vnode) {
    return m(
      'div.wrapper',
      {
        class: 'container mx-auto'
      },
      [m(Header), vnode.children, m(Footer)]
    )
  }
}

export default Layout
