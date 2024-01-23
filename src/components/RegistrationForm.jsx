import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


  // Function to generate a valid UUID
  const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

const CreateUserForm = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    // Retrieve the token from local storage on component mount
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const [formData, setFormData] = useState({
    guid: generateUUID(), // Function to generate a valid UUID
    roleGuid: "C902C82D-D724-4DEA-B6E7-43DF75A22DA4", // Admin's role GUID
    validated: true,
    enabled: true,
    createdDate: new Date().toISOString(),
    lastLogin: null,
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    currentPassword: "", // Admin's current password for authorization
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform admin authentication logic (replace with your actual logic)
    const adminAuthenticationSuccess = true; // Replace with your logic

    if (adminAuthenticationSuccess) {
      try {
        // Admin is authenticated, proceed with user registration
        const response = await fetch(
          "http://192.168.10.88:3010/api/users/v1.0/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          // Registration successful, you can redirect the user or show a success message
          console.log("User registration successful");
        } else {
          // Handle registration failure (e.g., display an error message)
          console.error("User registration failed");
        }
      } catch (error) {
        console.error("User registration error:", error);
      }
    } else {
      // Admin authentication failed, handle accordingly
      console.error("Admin authentication failed");
    }
  };




  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
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
        <div>
          <label htmlFor="currentPassword">Admin's Current Password</label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default CreateUserForm;
