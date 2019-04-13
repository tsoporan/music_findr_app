import m from "mithril";

const PrimaryButton = {
  view(vnode) {
    const text = vnode.attrs.text;
    const onclick = vnode.attrs.onclick;

    return m(
      "button",
      {
        class:
          "bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded",
        onclick: onclick
      },
      text
    );
  }
};

export { PrimaryButton };
