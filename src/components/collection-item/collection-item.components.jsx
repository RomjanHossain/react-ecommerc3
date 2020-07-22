import React from "react";

import "./collection-item.components.scss";

const CollectionItem = ({ imageUrl, name, price }) => (
  <div className="collection-item ">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

export default CollectionItem;
