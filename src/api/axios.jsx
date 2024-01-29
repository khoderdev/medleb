import axios from "axios";

// const baseURL = "http://85.112.70.8:3010";
const baseURL = "http://192.168.10.88:3010";
// const baseURL = "http://localhost:3500";

// Create Axios Instance
const Axios = axios.create({
  baseURL,
});

// Request Interceptor
Axios.interceptors.request.use(
  (config) => {
    // Retrieve access token from localStorage
    const accessToken = localStorage.getItem("accessToken");

    // Add the access token to the Authorization header if it exists
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    // Set default Content-Type header
    config.headers["Content-Type"] = "application/json";
    config.headers["Accept"] = "text/plain";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
Axios.interceptors.response.use(
  (response) => {
    // Handle response data
    return response.data;
  },
  (error) => {
    // Handle errors
    if (error.response) {
      // Server responded with a status code outside of 2xx
      console.error("Server responded with an error:", error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error during request setup:", error.message);
    }
    return Promise.reject(error);
  }
);

export default Axios;

// // USAGE:

// axios
//         .post("/api/drugs/v1.0")
//         .then((response) => {
//           console.log(response.data);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
