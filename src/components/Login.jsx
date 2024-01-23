import React, { useState } from "react";
import { useAccessToken } from "../context/AccessTokenContext";

const Login = () => {
  const { setToken } = useAccessToken();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [authStatus, setAuthStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://192.168.10.88:3010/api/users/v1.0/authenticate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.username,
            password: formData.password,
          }),
        }
      );

      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);

      const responseBody = await response.json();
      console.log("Response body:", responseBody);

      if (response.ok) {
        const { userDetails } = responseBody;

        if ("token" in userDetails) {
          setToken(userDetails.token);
          window.localStorage.setItem("token", userDetails.token);
          setAuthStatus("Authenticated successfully");
        } else {
          console.error(
            "Authentication failed: Token not found in the userDetails object"
          );
          setAuthStatus("Authentication failed");
        }
      } else {
        console.error("Authentication failed");
        setAuthStatus("Authentication failed");
      }
    } catch (error) {
      console.error("Authentication error:", error);
      setAuthStatus("Authentication error");
    }
  };

  return (
    <div className="flex flex-col pt-16 items-center h-screen">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {authStatus && (
        <div
          className={`font-bold ${
            authStatus === "Authenticated successfully"
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {authStatus}
        </div>
      )}
    </div>
  );
};

export default Login;
