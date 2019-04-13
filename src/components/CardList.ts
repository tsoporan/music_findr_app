import m from "mithril";

const CardHeader = {
  view(vnode) {
    const { item } = vnode.attrs;

    return m("h2.card-title", item.snippet.title);
  }
};

const CardBody = {
  view(vnode) {
    const { item } = vnode.attrs;

    return m("div.card-body", item.snippet.description);
  }
};

const CardList = {
  view(vnode) {
    return m(
      "ul.card-list",
      vnode.attrs.items.map(item => {
        let card = m("li", { key: item.id }, [
          m(CardHeader, { item }),
          m(CardBody, { item })
        ]);
        return card;
      })
    );
  }
};

export default CardList;
