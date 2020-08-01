import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  removeSelectedItem,
  decreaseItemFromCart,
  addToCart,
} from "../../redux/actions";
const CheckoutItem = ({ item, removeItem, decreaseItem, increaseItem }) => {
  return (
    <div className="checkout-items-container">
      <div className="checkout-items-img">
        <img alt="item" src={item.imageUrl} />
      </div>
      <div className="checkout-items-description">{item.name}</div>
      <div className="checkout-items-quantity">
        <span
          onClick={() => decreaseItem(item.id)}
          style={{ marginRight: 5, marginLeft: 5, cursor: "pointer" }}
        >
          &#10094;
        </span>
        {item.quantity}
        <span
          onClick={() => increaseItem(item)}
          style={{ marginRight: 5, marginLeft: 5, cursor: "pointer" }}
        >
          &#10095;
        </span>
      </div>
      <div className="checkout-items-price">${item.price}</div>
      <div
        className="checkout-items-remove"
        style={{ textAlign: "center" }}
        onClick={() => removeItem(item.id)}
      >
        &#10007;
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => dispatch(removeSelectedItem(id)),
    decreaseItem: (id) => dispatch(decreaseItemFromCart(id)),
    increaseItem: (item) => dispatch(addToCart(item)),
  };
};
export default connect(null, mapDispatchToProps)(CheckoutItem);
