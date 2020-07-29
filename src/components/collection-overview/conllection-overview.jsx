import React from "react";
import CollectionItem from "../collection-item/collection.component";
import "./collection-overview.styles.scss";
const CollectionOverview = ({ title, items }) => {
  return (
    <div className="collection-overview">
      <h2 className="title">{title}</h2>
      <div className="collection-items" >
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherProps }) => (
            <CollectionItem key={id} {...otherProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionOverview;
