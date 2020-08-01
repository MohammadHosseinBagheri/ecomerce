import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
const Checkout = ({ addedItems, totalPrice }) => {
  return (
    <div className="checkout">
      <div className="checkout-header">
        <div className="checkout-header-item">product</div>
        <div className="checkout-header-item">description</div>
        <div className="checkout-header-item">quantity</div>
        <div className="checkout-header-item">price</div>
        <div className="checkout-header-item">remove</div>
      </div>
      {addedItems.map((item) => (
        <CheckoutItem item={item} key={item.id} />
      ))}
      <div className="checkout-totla-price">total : ${totalPrice}</div>
    </div>
  );
};
const acumulateTotalPrice = (state) => {
  return state.reduce(
    (acumulatePrice, item) => acumulatePrice + item.quantity * item.price,
    0
  );
};
const mapStateToProps = (state) => {
  return {
    addedItems: state.cart.addedItems,
    totalPrice: acumulateTotalPrice(state.cart.addedItems),
  };
};
export default connect(mapStateToProps)(Checkout);
