import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
const Header = ({ isUser }) => {
  const signOut = () => {
    auth.signOut();
    localStorage.removeItem("user");
  };
  return (
    <div className="header">
      <div className="logo">Logo</div>
      <div className="options">
        {isUser ? (
          <div style={{textTransform:'uppercase'}} className="option" onClick={() => signOut()}>
            
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
      </div>
    </div>
  );
};

export default Header;
