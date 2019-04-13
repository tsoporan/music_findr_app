import m from "mithril";

const Card = {
  view(vnode) {
    return m(
      "div.card-item",
      {
        class: "max-w-xs rounded overflow-hidden shadow-lg",
        style: "background: #3490dc"
      },
      vnode.children
    );
  }
};

const CardHeader = {
  view(vnode) {
    const { item } = vnode.attrs;

    return m(
      "div.card-header",
      {
        class: "py-4"
      },
      [
        m(
          "div",
          {
            class: "font-bold text-xl mb-2"
          },
          item.snippet.title
        )
      ]
    );
  }
};

const CardImage = {
  view(vnode) {
    const { item } = vnode.attrs;

    return m("img.card-img", {
      class: "w-full mb-2",
      src: item.snippet.thumbnails.medium.url
    });
  }
};

const CardBody = {
  view(vnode) {
    const { item } = vnode.attrs;

    return m(
      "div.card-body",
      {
        class: "text-grey text-base"
      },
      item.snippet.description
    );
  }
};

const CardFooter = {
  view() {
    return m(
      "div",
      {
        class: "py-4"
      },
      "Card footer"
    );
  }
};

const CardList = {
  view(vnode) {
    return m(
      "div.card-list",
      {},
      vnode.attrs.items.map(item => {
        let card = m(Card, { key: item.id }, [
          m(CardImage, { item }),
          m(CardHeader, { item }),
          m(CardBody, { item }),
          m(CardFooter)
        ]);
        return card;
      })
    );
  }
};
export default CardList;
