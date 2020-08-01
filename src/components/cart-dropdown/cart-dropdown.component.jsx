import React from "react";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import CartDropdownItems from "../cart-dropdown-item/cart-dropdown-item.component";
import { Link, withRouter } from "react-router-dom";
import { toggleDropdown } from "../../redux/actions";
const CartDropdown = ({ cartDropdownItems, hidden, history }) => {
  // console.log(cartDropdownItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-item">
        {cartDropdownItems.length === 0 ? (
          <div>Your basket is empty</div>
        ) : (
          cartDropdownItems.map((item) => (
            <CartDropdownItems key={item.id} {...item} />
          ))
        )}
      </div>
      <button
        onClick={() => {
          hidden();
          cartDropdownItems.length !== 0
            ? history.push("/checkout")
            : history.push("shop");
        }}
        className="checkout-button"
      >
        CHCEK OUT
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cartDropdownItems: state.cart.addedItems,
  };
};
const mapDIspatchToProps = (dispatch) => {
  return {
    hidden: () => dispatch(toggleDropdown()),
  };
};
export default connect(
  mapStateToProps,
  mapDIspatchToProps
)(withRouter(CartDropdown));
