import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import { connect } from "react-redux";
const Directory = ({directory}) => {
  return (
    <div className="directory-menu">
      {directory.map(({ id, ...itemProps }) => (
        <MenuItem key={id} {...itemProps} />
      ))}
    </div>
  );
};
const mapStateToProps=state=>{
  return{
    directory:state.directory
  }
}
export default connect(mapStateToProps)(Directory);
