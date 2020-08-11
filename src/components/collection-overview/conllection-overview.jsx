import React from "react";
import CollectionItem from "../collection-item/collection.component";
import "./collection-overview.styles.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
const CollectionOverview = ({ title, items, routeName, history }) => {
  console.log(routeName);
  return (
    <div className="collection-overview">
      <h2 className="title" onClick={() => history.push(`/shop/${routeName}`)}>
        {title}
      </h2>
      <div className="collection-items">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherProps }) => (
            <CollectionItem key={id} id={id} {...otherProps} />
          ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    test: state.shop,
  };
};
export default connect(mapStateToProps)(withRouter(CollectionOverview));
