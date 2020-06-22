import React from "react";
import "./homepage.styles.scss";
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <div className="title">
              <h3>Shoes</h3>
            </div>
            <div className="subtitle">
              <span>adidas</span>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">
              <h3>Glasses</h3>
            </div>
            <div className="subtitle">
              <span>Police</span>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">
              <h3>Pans</h3>
            </div>
            <div className="subtitle">
              <span>Rebook</span>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">
              <h3>TShirts</h3>
            </div>
            <div className="subtitle">
              <span>Gucci</span>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">
              <h3>Hats</h3>
            </div>
            <div className="subtitle">
              <span>nike</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
