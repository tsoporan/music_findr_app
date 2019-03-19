import m from 'mithril'

const PrimaryButton = {
  view (vnode) {
    const text = vnode.attrs.text

    return m(
      'button',
      {
        class:
          'bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded'
      },
      text
    )
  }
}

export { PrimaryButton }
