import m from 'mithril'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

export default {
  view (vnode) {
    return m('div.wrapper', [m(Header), m(Main), vnode.children, m(Footer)])
  }
}
