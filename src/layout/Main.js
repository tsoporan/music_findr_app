import m from 'mithril'

function ContentComponent (initialVnode) {
  return {
    view: () => {
      return m('div', {}, 'Content')
    }
  }
}

export default ContentComponent
