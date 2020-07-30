import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import ShoppingBag from "../shopping-bag/shopping-cart.component";
const Header = (props) => {
  const signOut = () => {
    auth.signOut();
  };
  return (
    <div className="header">
      <img
        style={{ width: 100, height: 100, marginLeft: 20 }}
        src={require("../../assets/icons/logo.png")}
      />
      <div className="options">
        {props.user ? (
          <div
            style={{ textTransform: "uppercase" }}
            className="option"
            onClick={() => signOut()}
          >
            Log Out
          </div>
        ) : (
          <Link className="option" to="/sign-in">
            SIGN IN
          </Link>
        )}
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>
        <ShoppingBag />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(Header);
