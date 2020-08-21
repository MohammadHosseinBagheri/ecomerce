import React from "react";
import CollectionOverview from "../../components/collection-overview/conllection-overview";
import { connect } from "react-redux";
const Tes = (props) => {

  if (props.shopData.collections == null) {
    return null;
  } else {
    return Object.keys(props.shopData.collections)
      .map((item) => props.shopData.collections[item])
      .map(({ id, ...otherProps }) => (
        <CollectionOverview key={id} {...otherProps} />
      ));
  }
};
const mapStateToProps = (state) => {
  return {
    shopData: state.shop,
  };
};
export default connect(mapStateToProps)(Tes);
