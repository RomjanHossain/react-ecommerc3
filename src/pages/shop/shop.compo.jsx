import React from "react";
import SHOP_DATA from "./shop.dada";
import CollectionPreview from "../../components/preview/collection.preview";

class ShopList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...lol }) => (
          <CollectionPreview key={id} {...lol} />
        ))}
      </div>
    );
  }
}

export default ShopList;
