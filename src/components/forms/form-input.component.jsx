import React from "react";
import "./form-input.styles.scss";
const FormInput = ({ type, name, value, handleChange,require}) => {
  return (
    <div className="form-input">
      <input
        className="input"
        type={type}
        value={value}
        name={name}
        onChange={(event) => handleChange(event)}
        placeholder={name}
        required={require?true:false}
      />
    </div>
  );
};

export default FormInput;
