import React from "react";
import "./collection-item.styles.scss";
const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div className="image" style={{backgroundImage:`url(${imageUrl})`}} />
      <div className="collection-footer">
        <div className="collection-name">{name}</div>
        <div className="collection-price">{price}</div>
      </div>
    </div>
  );
};

export default CollectionItem;
