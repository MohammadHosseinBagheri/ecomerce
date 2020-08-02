import React from "react";
import CollectionOverview from "../../components/collection-overview/conllection-overview.jsx";
import { connect } from "react-redux";
const Shop = ({ shopData }) => {
  return shopData.map(({ id, ...otherProps }) => (
    <CollectionOverview key={id} {...otherProps} />
  ));
};

const mapStateToProps = (state) => {
  return {
    shopData: state.shop,
  };
};

export default connect(mapStateToProps)(Shop);
