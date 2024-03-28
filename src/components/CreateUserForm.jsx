import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

import { signUp , getAccessToken as getAuthAccessToken } from "../context/authService";

const CreateUserForm = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Validated, setValidated] = useState(true);
  const [Enabled, setEnabled] = useState(true);
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");

  // Function to get the access token
  const getAccessToken = async () => {
    try {
      const accessToken = await getAuthAccessToken(); // Use the renamed function
      return accessToken;
    } catch (error) {
      console.error("Error fetching access token:", error.message);
      throw error;
    }
  };

  // Handle sign up with the access token
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const roleGuid = "146E439D-8E8A-4AC1-A7BC-264BAA4D08EF";

      // Get the access token
      const accessToken = await getAccessToken();

      // Set the Authorization header with the bearer token
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

      await signUp(
        {
          FirstName,
          LastName,
          Username,
          Password,
          Enabled,
          Validated,
          Email,
          Mobile,
          RoleGuid: roleGuid,
        },
        headers
      );

      // Display signup successful message
      toast.success("Sign up successful. Please login.");
    } catch (error) {
      console.error("Sign up error:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center p-10">
      <form
        className="flex flex-col gap-4 justify-center items-center"
        onSubmit={handleSignUp}
      >
        <label>
          First Name:
          <input
            type="text"
            value={FirstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={LastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Mobile:
          <input
            type="text"
            value={Mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateUserForm;
