import React, { useState } from "react";
import "./ecomStyles.css";
import { connect } from "react-redux";
import {
  login,
  logout,
  forgotPassword,
  resetPassword,
  setAccessToken,
  clearAccessToken,
} from "./redux/authActions";
import { useDispatch } from "react-redux";
import axios from "axios"; // Import axios for HTTP requests

const LoginForm = ({
  isAuthenticated,
  user,
  login,
  logout,
  forgotPassword,
  resetPassword,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [resetCode, setResetCode] = useState("");

  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      console.log("Attempting login...");
      const res = await axios.post("http://localhost:8000/api/v1/auth/login", {
        email,
        password,
      });
      console.log("Login successful, response data:", res.data);
      dispatch(loginSuccess(res.data));
      dispatch(setAccessToken(res.data.token)); // Update to set access token from response
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleLogout = () => {
    // Clear the access token when logging out
    dispatch(clearAccessToken());
  };

  const handleForgotPassword = () => {
    forgotPassword(email);
  };

  const handleResetPassword = () => {
    resetPassword(email, newPassword, resetCode);
  };

  return (
    <div>
      <div className="auth-container">
        {isAuthenticated ? (
          <div className="authenticated">
            <p>Welcome, {user.name}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div className="login-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleForgotPassword}>Forgot Password</button>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
            />
            <input
              type="text"
              value={resetCode}
              onChange={(e) => setResetCode(e.target.value)}
              placeholder="Reset Code"
            />
            <button onClick={handleResetPassword}>Reset Password</button>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: (state.auth && state.auth.isAuthenticated) || false,
  user: state.auth && state.auth.user,
});

const mapDispatchToProps = {
  login,
  logout,
  forgotPassword,
  resetPassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
