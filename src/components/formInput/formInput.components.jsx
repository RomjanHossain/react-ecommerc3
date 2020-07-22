import React from "react";
import "./formInput.components.scss";

const FormInput = ({ handleChange, label, ...other }) => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      label={label}
      {...other}
    />
    {label ? (
      <label
        className={`${other.value.length ? "shrink" : ""} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
