import React from "react";
import "./cart-dropdown-item.style.scss";
const CartDropdownItems = (props) => {
  const { id, imageUrl, name, price, quantity } = props;
  return (
    <div className="cart-dopdown-items">
      <img src={`${imageUrl}`} />
      <div className="cart-dropdown-items-details">
        <em>{name}</em>
        <span>
          {quantity} x {price}$
        </span>
      </div>
    </div>
  );
};

export default CartDropdownItems;
