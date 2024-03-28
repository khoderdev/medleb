// import React, { useState, useEffect } from "react";

// // generateUUID function
// const generateUUID = () => {
//   return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
//     var r = (Math.random() * 16) | 0,
//       v = c === "x" ? r : (r & 0x3) | 0x8;
//     return v.toString(16);
//   });
// };

// const CreateUserForm = () => {
//   const [token, setToken] = useState("");

//   useEffect(() => {
//     // Retrieve the token from local storage on component mount
//     const storedToken = localStorage.getItem("token");
//     if (storedToken) {
//       setToken(storedToken);
//     }
//   }, []);

//   const [formData, setFormData] = useState({
//     Guid: generateUUID(), // Ensure you have the generateUUID function defined
//     RoleGuid: "146E439D-8E8A-4AC1-A7BC-264BAA4D08EF", // Agents role
//     Validated: true,
//     Enabled: true,
//     CreatedDate: new Date().toISOString(),
//     LastLogin: null,
//     FirstName: "agent1", // Set the appropriate values based on your needs
//     LastName: "agent1",
//     UserName: "agent1",
//     Email: "agent1@gmail.com",
//     PhoneNumber: "76484747",
//     Password: "asdqwe123",
//     CurrentPassword: "123456789",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Admin authorization logic
//       const adminUsername = "moph"; // Replace with the actual admin username
//       const adminPassword = "123456789"; // Replace with the actual admin password

//       // Log to indicate the start of the authentication process
//       console.log("Start admin authentication");

//       const adminAuthResponse = await fetch(
//         "http://192.168.10.88:3010/api/users/v1.0/authenticate",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             username: adminUsername,
//             password: adminPassword,
//           }),
//         }
//       );

//       if (!adminAuthResponse.ok) {
//         // Log if admin authentication failed
//         console.error("Admin authentication failed");
//         // Handle admin authentication failure (e.g., display an error message)
//         return;
//       }

//       // Admin is authenticated, proceed with user registration
//       const adminAuthTokenResponse = await adminAuthResponse.json();

//       // Log the admin authentication response
//       console.log("Admin Auth Response:", adminAuthTokenResponse);

//       // Check if the token is nested within userDetails
//       const adminAuthToken =
//         adminAuthTokenResponse.token ||
//         adminAuthTokenResponse.userDetails?.token;

//       // Log the admin auth token
//       // console.log("Admin Auth Token:", adminAuthToken);

//       // Log to indicate the start of user registration
//       console.log("Start user registration");

//       const response = await fetch(
//         "http://192.168.10.88:3010/api/users/v1.0/",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${adminAuthToken}`, // Set Authorization header
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       // Log the user registration response
//       console.log("User Registration Response:", response);

//       if (!response.ok) {
//         // Handle the case where the server returns an error status
//         if (response.status === 422) {
//           // Handle the 422 Unprocessable Entity error
//           const errorData = await response.json();
//           // Log detailed validation errors
//           console.error("Validation error:", errorData);

//           // Check if there are specific validation errors
//           if (errorData?.errors) {
//             // Log specific validation errors
//             console.error("Specific validation errors:", errorData.errors);
//           }

//           // You can update the form state or show error messages to the user here
//         } else {
//           // Handle other server errors
//           console.error("Server error:", response.statusText);
//         }
//       } else {
//         // Handle the case where the server returns a successful response
//         console.log("User registered successfully");
//         // You might want to redirect or perform other actions upon successful registration
//       }
//     } catch (error) {
//       // Handle other types of errors (e.g., network issues)
//       console.error("Error:", error.message);
//     }
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   // Perform admin authentication logic
//   //   const adminAuthenticationSuccess = true; // Replace with your logic

//   //   if (adminAuthenticationSuccess) {
//   //     try {
//   //       // Admin is authenticated, proceed with user registration
//   //       const response = await fetch(
//   //         "http://192.168.10.88:3010/api/users/v1.0/",
//   //         {
//   //           method: "POST",
//   //           headers: {
//   //             "Content-Type": "application/json",
//   //             Authorization: `Bearer ${token}`,
//   //           },
//   //           body: JSON.stringify(formData),
//   //         }
//   //       );

//   //       if (response.ok) {
//   //         // Registration successful, you can redirect the user or show a success message
//   //         console.log("User registration successful");
//   //       } else {
//   //         // Handle registration failure (e.g., display an error message)
//   //         console.error("User registration failed");
//   //       }
//   //     } catch (error) {
//   //       console.error("User registration error:", error);
//   //     }
//   //   } else {
//   //     // Admin authentication failed, handle accordingly
//   //     console.error("Admin authentication failed");
//   //   }
//   // };

//   return (
//     <div className="flex justify-center">
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="FirstName">First Name</label>
//           <input
//             type="text"
//             id="FirstName"
//             name="FirstName"
//             value={formData.FirstName}
//             onChange={handleChange}
//             required
//             minLength="3" // Added minimum length validation
//           />
//         </div>
//         <div>
//           <label htmlFor="LastName">Last Name</label>
//           <input
//             type="text"
//             id="LastName"
//             name="LastName"
//             value={formData.LastName}
//             onChange={handleChange}
//             required
//             minLength="3" // Added minimum length validation
//           />
//         </div>
//         <div>
//           <label htmlFor="UserName">User Name</label>
//           <input
//             type="text"
//             id="UserName"
//             name="UserName"
//             value={formData.UserName}
//             onChange={handleChange}
//             required
//             minLength="3"
//           />
//         </div>
//         <div>
//           <label htmlFor="Email">Email</label>
//           <input
//             type="email"
//             id="Email"
//             name="Email"
//             value={formData.Email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="phoneNumber">Phone Number</label>
//           <input
//             type="tel"
//             id="phoneNumber"
//             name="phoneNumber"
//             value={formData.PhoneNumber}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="Password">Password</label>
//           <input
//             type="password"
//             id="Password"
//             name="Password"
//             value={formData.Password}
//             onChange={handleChange}
//             required
//             minLength="8"
//           />
//         </div>
//         <div>
//           <label htmlFor="CurrentPassword">Admin's Current Password</label>
//           <input
//             type="password"
//             id="CurrentPassword"
//             name="CurrentPassword"
//             value={formData.CurrentPassword}
//             onChange={handleChange}
//             required
//             minLength="8"
//           />
//         </div>
//         <button type="submit">Create User</button>
//       </form>
//     </div>
//   );
// };

// export default CreateUserForm;

// ///////////////////////////////////////////////////

// import React, { useState } from "react";

// const generateUUID = () => {
//   return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
//     c
//   ) {
//     var r = (Math.random() * 16) | 0,
//       v = c === "x" ? r : (r & 0x3) | 0x8;
//     return v.toString(16);
//   });
// };

// const CreateUserForm = () => {
//   const [formData, setFormData] = useState({
//     Guid: generateUUID(),
//     RoleGuid: "C902C82D-D724-4DEA-B6E7-43DF75A22DA4",
//     Validated: true,
//     Enabled: true,
//     CreatedDate: new Date().toISOString(),
//     LastLogin: null,
//     FirstName: "",
//     LastName: "",
//     UserName: "",
//     Email: "",
//     PhoneNumber: "",
//     Password: "",
//     CurrentPassword: "",
//     AdminAuthToken: "", // New property for storing the admin JWT token
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const authenticateAdmin = async () => {
//     const adminUsername = "agent";
//     const adminPassword = "123456789";

//     try {
//       const adminAuthResponse = await fetch(
//         "http://192.168.10.88:3010/api/users/v1.0/authenticate",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             username: adminUsername,
//             password: adminPassword,
//           }),
//         }
//       );

//       if (!adminAuthResponse.ok) {
//         console.error("Admin authentication failed");
//         return null;
//       }

//       const adminAuthTokenResponse = await adminAuthResponse.json();
//       const adminAuthToken =
//         adminAuthTokenResponse.token ||
//         adminAuthTokenResponse.userDetails?.token;

//       return adminAuthToken;
//     } catch (error) {
//       console.error("Error during admin authentication:", error.message);
//       return null;
//     }
//   };

//   const handleUserRegistration = async () => {
//     console.log("Start user registration");

//     try {
//       const adminAuthToken = await authenticateAdmin();

//       if (adminAuthToken) {
//         setFormData({
//           ...formData,
//           AdminAuthToken: adminAuthToken,
//         });

//         const response = await fetch("http://192.168.10.88:3010/api/users/v1.0/", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${adminAuthToken}`,
//           },
//           body: JSON.stringify(formData),
//         });

//         console.log("User Registration Response:", response);

//         if (!response.ok) {
//           if (response.status === 422) {
//             const errorData = await response.json();
//             console.error("Validation error:", errorData);

//             if (errorData?.errors) {
//               console.error("Specific validation errors:", errorData.errors);
//             }
//           } else {
//             console.error("Server error:", response.statusText);
//           }
//         } else {
//           console.log("User registered successfully");
//           // You might want to redirect or perform other actions upon successful registration
//         }
//       }
//     } catch (error) {
//       console.error("Error during user registration:", error.message);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await handleUserRegistration();
//   };

//   return (
//     <div className="flex justify-center">
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="FirstName">First Name</label>
//           <input
//             type="text"
//             id="FirstName"
//             name="FirstName"
//             value={formData.FirstName}
//             onChange={handleChange}
//             required
//             minLength="3" // Added minimum length validation
//           />
//         </div>
//         <div>
//           <label htmlFor="LastName">Last Name</label>
//           <input
//             type="text"
//             id="LastName"
//             name="LastName"
//             value={formData.LastName}
//             onChange={handleChange}
//             required
//             minLength="3" // Added minimum length validation
//           />
//         </div>
//         <div>
//           <label htmlFor="UserName">User Name</label>
//           <input
//             type="text"
//             id="UserName"
//             name="UserName"
//             value={formData.UserName}
//             onChange={handleChange}
//             required
//             minLength="3"
//           />
//         </div>
//         <div>
//           <label htmlFor="Email">Email</label>
//           <input
//             type="email"
//             id="Email"
//             name="Email"
//             value={formData.Email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="phoneNumber">Phone Number</label>
//           <input
//             type="tel"
//             id="phoneNumber"
//             name="phoneNumber"
//             value={formData.PhoneNumber}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="Password">Password</label>
//           <input
//             type="password"
//             id="Password"
//             name="Password"
//             value={formData.Password}
//             onChange={handleChange}
//             required
//             minLength="8"
//           />
//         </div>
//         <div>
//           <label htmlFor="CurrentPassword">Admin's Current Password</label>
//           <input
//             type="password"
//             id="CurrentPassword"
//             name="CurrentPassword"
//             value={formData.CurrentPassword}
//             onChange={handleChange}
//             required
//             minLength="8"
//           />
//         </div>
//         <button type="submit">Create User</button>
//       </form>
//     </div>
//   );
// };

// export default CreateUserForm;

// ///////////////////////////////////////////////////

import React, { useState } from "react";

const generateUUID = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

const CreateUserForm = () => {
  const [formData, setFormData] = useState({
    Guid: generateUUID(),
    RoleGuid: "C902C82D-D724-4DEA-B6E7-43DF75A22DA4",
    Validated: true,
    Enabled: true,
    CreatedDate: new Date().toISOString(),
    LastLogin: null,
    FirstName: "",
    LastName: "",
    UserName: "",
    Email: "",
    PhoneNumber: "",
    Password: "",
    CurrentPassword: "",
    AdminAuthToken: "", // New property for storing the admin JWT token
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const authenticateAdmin = async () => {
    const adminUsername = "moph";
    const adminPassword = "123456789";

    try {
      const adminAuthResponse = await fetch(
        "http://192.168.10.88:3010/api/users/v1.0/authenticate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: adminUsername,
            password: adminPassword,
          }),
        }
      );

      if (!adminAuthResponse.ok) {
        console.error("Admin authentication failed");
        return null;
      }

      const adminAuthTokenResponse = await adminAuthResponse.json();
      const adminAuthToken =
        adminAuthTokenResponse.token ||
        adminAuthTokenResponse.userDetails?.token;

      return adminAuthToken;
    } catch (error) {
      console.error("Error during admin authentication:", error.message);
      return null;
    }
  };

  const authenticateUser = async (username, password) => {
    try {
      const userAuthResponse = await fetch(
        "http://192.168.10.88:3010/api/users/v1.0/authenticate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      if (!userAuthResponse.ok) {
        console.error("User authentication failed");
        return null;
      }

      const userAuthTokenResponse = await userAuthResponse.json();
      const userAuthToken =
        userAuthTokenResponse.token || userAuthTokenResponse.userDetails?.token;

      return userAuthToken;
    } catch (error) {
      console.error("Error during user authentication:", error.message);
      return null;
    }
  };

  const handleUserRegistration = async () => {
    console.log("Start user registration");

    try {
      const adminAuthToken = await authenticateAdmin();

      if (adminAuthToken) {
        setFormData({
          ...formData,
          AdminAuthToken: adminAuthToken,
        });

        const response = await fetch(
          "http://192.168.10.88:3010/api/users/v1.0/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${adminAuthToken}`,
            },
            body: JSON.stringify(formData),
          }
        );

        console.log("User Registration Response:", response);

        if (!response.ok) {
          if (response.status === 422) {
            const errorData = await response.json();
            console.error("Validation error:", errorData);

            if (errorData?.errors) {
              console.error("Specific validation errors:", errorData.errors);
            }
          } else {
            console.error("Server error:", response.statusText);
          }
        } else {
          console.log("User registered successfully");

          // Obtain a new token for the newly created user
          const newUserAuthToken = await authenticateUser(
            formData.UserName,
            formData.Password
          );

          if (newUserAuthToken) {
            console.log("New user authenticated successfully");
            // Update the form data with the new token
            setFormData({
              ...formData,
              AdminAuthToken: newUserAuthToken,
            });
          } else {
            console.error("Error obtaining a new token for the new user");
          }
        }
      }
    } catch (error) {
      console.error("Error during user registration:", error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleUserRegistration();
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="FirstName">First Name</label>
          <input
            type="text"
            id="FirstName"
            name="FirstName"
            value={formData.FirstName}
            onChange={handleChange}
            required
            minLength="3" // Added minimum length validation
          />
        </div>
        <div>
          <label htmlFor="LastName">Last Name</label>
          <input
            type="text"
            id="LastName"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
            required
            minLength="3" // Added minimum length validation
          />
        </div>
        <div>
          <label htmlFor="UserName">User Name</label>
          <input
            type="text"
            id="UserName"
            name="UserName"
            value={formData.UserName}
            onChange={handleChange}
            required
            minLength="3"
          />
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            id="Email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.PhoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            id="Password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            required
            minLength="8"
          />
        </div>
        <div>
          <label htmlFor="CurrentPassword">Admin's Current Password</label>
          <input
            type="password"
            id="CurrentPassword"
            name="CurrentPassword"
            value={formData.CurrentPassword}
            onChange={handleChange}
            required
            minLength="8"
          />
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default CreateUserForm;
