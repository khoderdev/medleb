import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "./redux/authActions";

const RegistrationForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={userData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={userData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={userData.password}
        onChange={handleChange}
      />
      <input
        type="password"
        name="passwordConfirm"
        placeholder="passwordConfirm"
        value={userData.passwordConfirm}
        onChange={handleChange}
      />
      <button type="submit">Register</button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};

export default RegistrationForm;
