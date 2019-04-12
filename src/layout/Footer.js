import m from 'mithril'

function Footer (initialVnode) {
  return {
    view: () => {
      const year = new Date().getFullYear()

      return m('footer', [
        m(
          'p',
          {
            class: 'text-center text-sm'
          },
          year
        )
      ])
    }
  }
}

export default Footer
