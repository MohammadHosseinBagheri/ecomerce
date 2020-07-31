import React from "react";
import "./collection-item.styles.scss";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions";
const CollectionItem = ({ id, name, price, imageUrl, addToCart }) => {
  var item = {
    id,
    name,
    price,
    imageUrl,
  };
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <div className="collection-name">{name}</div>
        <div className="collection-price">{price}</div>
        <button
          onClick={() => {
            addToCart(item);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
  };
};
export default connect(null, mapDispatchToProps)(CollectionItem);
