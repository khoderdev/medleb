import axios from "axios";

const API_URL = "http://85.112.70.8:3010/api/users/v1.0";

const setAccessToken = (token) => {
  localStorage.setItem("access_token", token);
};

const getAccessToken = () => {
  return localStorage.getItem("access_token");
};

const authenticate = async (UserName, Password) => {
  try {
    const response = await axios.post(`${API_URL}/authenticate`, {
      UserName,
      Password,
    });

    console.log("Authentication response:", response);

    const { data } = response;
    const { userDetails } = data;
    const { id: access_token } = userDetails;

    setAccessToken(access_token);

    // Log authentication success
    console.log("Authentication successful. Access token:", access_token);

    return access_token;
  } catch (error) {
    console.error("Authentication error:", error);
    throw error;
  }
};

const signUp = async (user) => {
  try {
    const token = getAccessToken();
    const response = await axios.post(`${API_URL}`, user, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    // Check for a new token in the response and update it if available
    const { newAccessToken } = response.data;
    if (newAccessToken) {
      setAccessToken(newAccessToken);
    }

    console.log("Sign-up response:", response);
    console.log("User signed up successfully:", response.data);

    return response.data;
  } catch (error) {
    console.error("Sign up error:", error);
    throw error;
  }
};

const isAuthenticated = () => {
  const token = getAccessToken();
  return !!token; // Returns true if the token exists
};

const logout = () => {
  // Remove the token from local storage or your secure store
  localStorage.removeItem("access_token");
};

export { authenticate, getAccessToken, isAuthenticated, logout, signUp };
