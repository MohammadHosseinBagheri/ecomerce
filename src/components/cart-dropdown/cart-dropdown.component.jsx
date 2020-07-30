import React from "react";
import "./cart-dropdown.styles.scss";
const CartDropdown = ({ hidden }) => {
  return (
    <div
      className="cart-dropdown"
    >
      <div className="cart-item"></div>
      <button>CHCEK OUT</button>
    </div>
  );
};

export default CartDropdown;
