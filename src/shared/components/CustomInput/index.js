import React, { useState } from "react";
const CustomInput = ({ hint, placeholder, type, errorMsg, onChange, name ,value}) => {
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    const inputValue = e.target.value;
    const valid = inputValue.trim() !== "";
    setError(!valid);
    onChange(name, inputValue, valid);
  };
  return (
    <div className="form-group">
      <label htmlFor={name}>{hint}</label>
      <input
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {error && <span>{errorMsg}</span>}
    </div>
  );
};

export default CustomInput;
