import React from "react";
import { connect } from "react-redux";
import  './shopping-cart.styles.scss'
const ShoppingBag = (props) => {
  console.log(props.user);
  return (
    <div
      style={{ padding: "0px 5px", display: props.user ? "flex" : "none",width:40,height:40  }}
      className="shopping-cart"
    >
      <img
        style={{ color: "black", width: "50%",height:'50%' }}
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
export default connect(mapStateToProps)(ShoppingBag);
