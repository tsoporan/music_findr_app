import m from 'mithril'

function FooterComponent (initialVnode) {
  return {
    view: () => {
      return m('footer', {}, 'Footer')
    }
  }
}

export default FooterComponent
