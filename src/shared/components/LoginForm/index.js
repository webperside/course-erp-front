import React, { useState } from "react";
import CustomInput from "../CustomInput";

const initialInputState = {
  userName: { value: "", isValid: false },
  password: { value: "", isValid: false },
};
const LoginForm = () => {
  const [inputValues, setInputValues] = useState(initialInputState);
  const { userName, password } = inputValues;
  const handleChange = (name, value, isValid) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: { value, isValid },
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValues);
    setInputValues(initialInputState);
  };
  return (
    <form onSubmit={handleSubmit}>
      <CustomInput
        name="userName"
        id="userName"
        type="text"
        hint="Username"
        value={userName.value}
        isValid={userName.isValid}
        errorMsg="Username required"
        onChange={handleChange}
      />
      <CustomInput
        name="password"
        isValid={password.isValid}
        id="password"
        type="password"
        hint="Password"
        value={password.value}
        errorMsg="Password required"
        onChange={handleChange}
      />
      <button type="submit" disabled={!userName.isValid || !password.isValid}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
