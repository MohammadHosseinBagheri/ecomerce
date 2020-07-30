import React from "react";
import { connect } from "react-redux";
import "./shopping-cart.styles.scss";
import { toggleDropdown } from "../../redux/actions";
const ShoppingBag = (props) => {
  console.log(props.user);
  console.log(props);
  return (
    <div
      style={{
        padding: "0px 5px",
        display: props.user ? "flex" : "none",
        width: 40,
        height: 40,
        cursor: "pointer",
      }}
      className="shopping-cart"
      onClick={() => props.toggleDropdownn()}
    >
      <img
        style={{ color: "black", width: "50%", height: "50%" }}
        src={require("../../assets/icons/shopping-bag-3-line-basket.png")}
      />
      <span className="shopping-cart-counter"> 5 </span>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleDropdownn: () => dispatch(toggleDropdown()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBag);
