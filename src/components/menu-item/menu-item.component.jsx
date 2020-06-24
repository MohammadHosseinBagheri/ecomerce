import React from "react";
import "./menu-item.styles.scss";
import { Link ,withRouter} from "react-router-dom";
const MenuItem = ({ title, subtitle, imageUrl, size, linkUrl,match }) => {
  return (
    <div className={`${size} menu-item `}>
      <div
        className="image-background"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <Link className="content" to={`${match.url}${linkUrl}`} >
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div className="subtitle">
          <span>{subtitle}</span>
        </div>
      </Link>
    </div>
  );
};

export default withRouter(MenuItem) ;
