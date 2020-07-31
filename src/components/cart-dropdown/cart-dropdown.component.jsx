import React from "react";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import CartDropdownItems from "../cart-dropdown-item/cart-dropdown-item.component";
const CartDropdown = ({ cartDropdownItems }) => {
  console.log(cartDropdownItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-item">
        {cartDropdownItems.map((item) => (
          <CartDropdownItems key={item.id} {...item} />
        ))}
      </div>
      <button>CHCEK OUT</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cartDropdownItems: state.cart.addedItems,
  };
};
export default connect(mapStateToProps)(CartDropdown);
